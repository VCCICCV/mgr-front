'use server'
import { getNewsData } from "@/api/news";
import { pageSizeOptions } from "@/constant";

export default async function page() {
    // 默认显示10条数据
    const defaultAllnum = 10;
    // 可选的每页数量选项
    const { result } = await getNewsData(defaultAllnum);
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">
                最新 <span className="text-lg text-gray-500">(共 {result.allnum} 条)</span>
            </h1>
            <select defaultValue={10} allNumOptions={pageSizeOptions}/>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {result.newslist.map((it7em) => (
                    // 新闻页
                    <article key={item.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <img
                                src={item.picUrl}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                                width={300}
                                height={200}
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2 line-clamp-2">{item.title}</h2>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>{item.source}</span>
                                    <time dateTime={item.ctime}>
                                        {new Date(item.ctime).toLocaleDateString()}
                                    </time>
                                </div>
                            </div>
                        </a>
                    </article>
                ))}
            </div>
        </div>
    );
}