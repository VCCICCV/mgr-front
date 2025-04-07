import type { NewsApiResponse } from "@/types/news";

export async function getNewsData(num:number): Promise<NewsApiResponse> {
    const apiUrl = `${process.env.NEXT_PUBLIC_NEWS_API_BASE_URL}?key=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&num=${num}`;

    console.log('Fetching news from:', apiUrl);
    const res = await fetch(apiUrl, {
        next: { revalidate: 60 } // ISR每60秒刷新
    });

    if (!res.ok) {
        throw new Error('获取新闻数据失败');
    }
    return res.json();
}