'use client';

const loading = () => {
    return (
        <div className="h-screen flex items-center justify-center gap-4">
            {/* 旋转圆圈 */}
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <div className="animate-spin h-12 w-12 border-4 border-blue-500 rounded-full border-t-transparent"></div>

        </div>
    )
}

export default loading