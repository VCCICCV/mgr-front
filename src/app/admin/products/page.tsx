// app/admin/products/page.tsx

import { ProductTable } from '@/components/admin/product/ProductTable';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProductManagementPage() {
    return (
        <div className="container mx-auto py-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">商品管理</h1>
                <Button asChild>
                    <Link href="/admin/products/create">
                        创建商品
                    </Link>
                </Button>
            </div>

            <ProductTable />
        </div>
    );
}