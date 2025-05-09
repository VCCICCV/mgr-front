'use client';

import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Pagination } from '@/components/common/Pagination';
import { deleteSKU, getSKUs } from '@/lib/actions/skuAction';


export function SKUTable() {
    const router = useRouter();
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const [data, setData] = useState<any[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            const { data, total } = await getSKUs(page, pageSize);
            setData(data);
            setTotal(total);
        } finally {
            setLoading(false);
        }
    };

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        fetchData();
    }, [page, pageSize]);

    const handleDelete = async (id: string) => {
        if (confirm('确定要删除这个SKU吗？')) {
            await deleteSKU(id);
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
                            <TableHead>SKU图片</TableHead>
                            <TableHead>商品ID</TableHead>
                            <TableHead>基础价格</TableHead>
                            <TableHead>库存</TableHead>
                            <TableHead>属性配置</TableHead>
                            <TableHead>状态</TableHead>
                            <TableHead>操作</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((sku) => (
                            <TableRow key={sku.id}>
                                <TableCell>
                                    <img
                                        src={sku.pic}
                                        alt={`SKU-${sku.id}`}
                                        className="h-12 w-12 object-cover rounded"
                                    />
                                </TableCell>
                                <TableCell>{sku.product_id}</TableCell>
                                <TableCell>¥{sku.base_price.toLocaleString()}</TableCell>
                                <TableCell>{sku.stock}</TableCell>
                                <TableCell className="max-w-[200px] truncate">
                                    {Object.entries(sku.default_attribute)
                                        .map(([key, value]) => `${key}:${value}`)
                                        .join(', ')}
                                </TableCell>
                                <TableCell>
                                    <Badge variant={sku.is_deleted ? 'destructive' : 'default'}>
                                        {sku.is_deleted ? '已删除' : '正常'}
                                    </Badge>
                                </TableCell>
                                <TableCell className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => router.push(`/admin/skus/edit/${sku.id}`)}
                                    >
                                        编辑
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => handleDelete(sku.id)}
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