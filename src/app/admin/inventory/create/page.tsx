'use client';

import { SKUForm } from '@/components/admin/inventory/SKUForm';
import { createSKU } from '@/lib/actions/skuAction';
import { useRouter } from 'next/navigation';

export default function CreateSKUPage() {
    const router = useRouter();

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const handleSubmit = async (values: any) => {
        try {
            await createSKU({
                ...values,
                category_id: 3,
                brand_id: 1,
                default_attribute: JSON.parse(values.default_attribute),
                is_deleted: 0
            });
            router.push('/admin/inventory');
        } catch (error) {
            console.error('创建SKU失败:', error);
        }
    };

    return (
        <div className="container mx-auto py-6">
            <h1 className="text-2xl font-bold mb-6">创建SKU</h1>
            <SKUForm onSubmit={handleSubmit} />
        </div>
    );
}