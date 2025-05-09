// app/admin/products/edit/[id]/page.tsx
'use client';

import { ProductForm } from '@/components/admin/product/ProductForm';
import type { ProductSPU } from '@/constant/products';
import { getProducts, updateProduct } from '@/lib/actions/productAction';
import { useRouter } from 'next/navigation';
import { useEffect, useState, use } from 'react';

export default function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const [product, setProduct] = useState<ProductSPU | null>(null);

    // 使用 use() 解包 params Promise
    const { id } = use(params);

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await getProducts(1, 10); 
            const foundProduct = data.find(p => p.id === id);
            if (foundProduct) {
                setProduct(foundProduct);
            } else {
                router.push('/admin/products');
            }
        };
        fetchProduct();
    }, [id, router]); // 使用解包后的 id 作为依赖

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const handleSubmit = async (values: any) => {
        try {
            await updateProduct(id, { // 使用解包后的 id
                ...values,
                detail: JSON.parse(values.detail)
            });
            router.push('/admin/products');
        } catch (error) {
            console.error('更新商品失败:', error);
        }
    };

    if (!product) return <div className="text-center py-8">加载中...</div>;

    return (
        <div className="container mx-auto py-6">
            <h1 className="text-2xl font-bold mb-6">编辑商品</h1>
            <ProductForm
                initialData={product}
                onSubmit={handleSubmit}
            />
        </div>
    );
}