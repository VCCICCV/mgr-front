import { Suspense } from "react";
import { CustomFilter, CustomHome, SearchBar } from "../components";
import dynamic from "next/dynamic";
const Scene = dynamic(() => import('../components/three/Scene'), {
  loading: () => (<div className='flex h-96 w-full flex-col items-center justify-center'>
    {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
    <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
      <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      />
    </svg>
  </div>),
  ssr: false,// 禁用服务端渲染
})
export default function Home() {
  return (
    <main className="overflow-hidden">

      <CustomHome />

      <div
        className="mt-12 padding-x padding-y max-width"
        id="discover"
      >
        <h1 className='text-4xl font-extrabold'>选择您的伙伴</h1>
        <p>强劲动力，带您回家</p>
      </div>

      {/* 搜索栏 */}
      <div
        className="home_filters">
        <SearchBar />
        <div className="home_filterso-container">
          <CustomFilter />
        </div>
      </div>

      {/* <div className="h-screen flex items-center justify-center">
          <Suspense fallback={<p>loading</p}>
            <Scene />
          </Suspense>
      </div> */}
    </main>
  );
}
