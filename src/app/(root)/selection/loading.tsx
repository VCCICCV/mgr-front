"use client"
import { Progress } from "@/components/ui/progress"
import React from 'react'

const loading = () => {
    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <Progress value={progress} className="w-[60%]" />
            <p className="mt-2 text-center text-black">加载模型...</p>
        </div>
    )
}

export default loading