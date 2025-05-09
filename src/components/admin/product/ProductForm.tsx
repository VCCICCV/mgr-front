// components/products/ProductForm.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import type { ProductSPU } from '@/constant/products';

const formSchema = z.object({
    name: z.string().min(2, "商品名称至少2个字符"),
    product_sn: z.string().min(1, "商品编号不能为空"),
    pic: z.string().url("请输入有效的图片URL"),
    price: z.number().min(0, "价格不能为负数"),
    promotion_price: z.number().min(0, "促销价不能为负数"),
    sub_title: z.string().optional(),
    publish_status: z.boolean(),
    detail: z.string().min(10, "商品详情至少10个字符"),
});

interface ProductFormProps {
    initialData?: Partial<ProductSPU>;
    onSubmit: (values: z.infer<typeof formSchema>) => Promise<void>;
}

export function ProductForm({ initialData, onSubmit }: ProductFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: initialData?.name || '',
            product_sn: initialData?.product_sn || '',
            pic: initialData?.pic || '',
            price: initialData?.price || 0,
            promotion_price: initialData?.promotion_price || 0,
            sub_title: initialData?.sub_title || '',
            publish_status: Boolean(initialData?.publish_status),
            detail: initialData?.detail ? JSON.stringify(initialData.detail, null, 2) : '{}',
        },
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>商品名称</FormLabel>
                                <FormControl>
                                    <Input placeholder="请输入商品名称" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="product_sn"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>商品编号</FormLabel>
                                <FormControl>
                                    <Input placeholder="请输入商品编号" {...field} />
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
                                <FormLabel>商品主图URL</FormLabel>
                                <FormControl>
                                    <Input placeholder="https://example.com/product.jpg" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>商品价格</FormLabel>
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
                        name="promotion_price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>促销价格</FormLabel>
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
                        name="sub_title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>商品副标题</FormLabel>
                                <FormControl>
                                    <Input placeholder="请输入商品副标题" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="publish_status"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                <div className="space-y-0.5">
                                    <FormLabel>上架状态</FormLabel>
                                </div>
                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="detail"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>商品详情(JSON格式)</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="请输入商品详情JSON"
                                    className="min-h-[200px]"
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
        </Form >
    );
}