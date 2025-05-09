// components/products/ProductTable.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Pagination } from '@/components/common/Pagination';
import { deleteProduct, getProducts } from '@/lib/actions/productAction';
import { initialProducts, type ProductSPU } from '@/constant/products';

export function ProductTable() {
    const router = useRouter();
    const [data, setData] = useState<ProductSPU[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            const allProducts = [...initialProducts];
            const start = (page - 1) * pageSize;
            const end = start + pageSize;
            const paginatedData = allProducts.slice(start, end);

            setData(paginatedData);
            setTotal(allProducts.length);
        } finally {
            setLoading(false);
        }
    };
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        fetchData();
    }, [page, pageSize]);

    const handleDelete = async (id: string) => {
        if (confirm('确定要删除这个商品吗？')) {
            await deleteProduct(id);
            fetchData();
        }
    };

    if (loading) return <div className="text-center py-8">加载中...</div>;

    return (
        <div className="space-y-4">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>商品图片</TableHead>
                            <TableHead>商品名称</TableHead>
                            <TableHead>商品编号</TableHead>
                            <TableHead>价格</TableHead>
                            <TableHead>促销价</TableHead>
                            <TableHead>状态</TableHead>
                            <TableHead>操作</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <img
                                        src={product.pic}
                                        alt={product.name}
                                        className="h-12 w-12 object-cover rounded"
                                    />
                                </TableCell>
                                <TableCell>
                                    <div className="font-medium">{product.name}</div>
                                    <div className="text-sm text-gray-500">{product.sub_title}</div>
                                </TableCell>
                                <TableCell>{product.product_sn}</TableCell>
                                <TableCell>¥{product.price.toLocaleString()}</TableCell>
                                <TableCell>¥{product.promotion_price.toLocaleString()}</TableCell>
                                <TableCell>
                                    <Badge variant={product.publish_status ? 'default' : 'destructive'}>
                                        {product.publish_status ? '已上架' : '已下架'}
                                    </Badge>
                                </TableCell>
                                <TableCell className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => router.push(`/admin/products/edit/${product.id}`)}
                                    >
                                        编辑
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        删除
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <Pagination
                currentPage={page}
                pageSize={pageSize}
                total={total}
                onPageChange={setPage}
                onSizeChange={setPageSize}
            />
        </div>
    );
}