'use client';

import { SKUForm } from '@/components/admin/inventory/SKUForm';
import { getSKUs, updateSKU } from '@/lib/actions/skuAction';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EditSKUPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const [sku, setSKU] = useState<any>(null);

    useEffect(() => {
        const fetchSKU = async () => {
            const { data } = await getSKUs(1, 100); // 获取足够多的SKU用于查找
            const foundSKU = data.find(s => s.id === params.id);
            if (foundSKU) {
                setSKU(foundSKU);
            } else {
                router.push('/admin/skus');
            }
        };
        fetchSKU();
    }, [params.id, router]);

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const handleSubmit = async (values: any) => {
        try {
            await updateSKU(params.id, {
                ...values,
                default_attribute: JSON.parse(values.default_attribute)
            });
            router.push('/admin/inventory');
        } catch (error) {
            console.error('更新SKU失败:', error);
        }
    };

    if (!sku) return <div className="text-center py-8">加载中...</div>;

    return (
        <div className="container mx-auto py-6">
            <h1 className="text-2xl font-bold mb-6">编辑SKU</h1>
            <SKUForm
                initialData={sku}
                onSubmit={handleSubmit}
            />
        </div>
    );
}