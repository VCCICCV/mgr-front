// app/admin/products/create/page.tsx
'use client';

import { ProductForm } from '@/components/admin/product/ProductForm';
import { createProduct } from '@/lib/actions/productAction';
import { useRouter } from 'next/navigation';

export default function CreateProductPage() {
    const router = useRouter();

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const handleSubmit = async (values: any) => {
        try {
            await createProduct({
                ...values,
                detail: JSON.parse(values.detail),
                category_id: 3,
                brand_id: 1,
                photo_album: [],
                sales: 0,
                unit: '辆',
                new_status: 1,
                recommand_status: 1,
                is_deleted: 0,
                promotion_start_time: new Date().toISOString(),
                promotion_end_time: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
            });
            router.push('/admin/products');
        } catch (error) {
            console.error('创建商品失败:', error);
        }
    };

    return (
        <div className="container mx-auto py-6">
            <h1 className="text-2xl font-bold mb-6">创建商品</h1>
            <ProductForm onSubmit={handleSubmit} />
        </div>
    );
}