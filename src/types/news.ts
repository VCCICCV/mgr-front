// types/news.ts
export interface NewsItem {
  id: string;
  ctime: string;
  title: string;
  description: string;
  source: string;
  picUrl: string;
  url: string;
}

export interface NewsApiResponse {
  code: number;
  msg: string;
  result: {
    curpage: number;
    allnum: number;
    newslist: NewsItem[];
  };
}
