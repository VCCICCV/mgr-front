// components/skus/SKUForm.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { ProductSKU } from '@/constant/product_sku';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';


const formSchema = z.object({
    product_id: z.number().min(1, "必须关联商品"),
    base_price: z.number().min(0, "价格不能为负数"),
    stock: z.number().min(0, "库存不能为负数"),
    pic: z.string().url("请输入有效的图片URL"),
    default_attribute: z.string().min(2, "属性配置至少2个字符"),
});

interface SKUFormProps {
    initialData?: Partial<ProductSKU>;
    onSubmit: (values: z.infer<typeof formSchema>) => Promise<void>;
}

export function SKUForm({ initialData, onSubmit }: SKUFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            product_id: initialData?.product_id || 0,
            base_price: initialData?.base_price || 0,
            stock: initialData?.stock || 0,
            pic: initialData?.pic || '',
            default_attribute: initialData?.default_attribute
                ? JSON.stringify(initialData.default_attribute, null, 2)
                : '{}',
        },
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="product_id"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>关联商品ID</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        {...field}
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="base_price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>基础价格</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        {...field}
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="stock"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>库存数量</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        {...field}
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="pic"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>SKU图片URL</FormLabel>
                                <FormControl>
                                    <Input placeholder="https://example.com/sku.jpg" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="default_attribute"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>属性配置(JSON格式)</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder={`{\n  "颜色": "红色",\n  "尺寸": "XL"\n}`}
                                    className="min-h-[200px] font-mono text-sm"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-end gap-4">
                    <Button type="submit">保存</Button>
                </div>
            </form>
        </Form>
    );
}