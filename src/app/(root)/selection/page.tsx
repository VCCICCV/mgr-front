'use client';
import React, { Suspense } from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Scene from '@/components/three/Scene'
import ConfigPalette from '@/components/three/ConfigPalette';
import Loading from './loading';
import Optional from '@/components/three/Optional';

const page = () => {
  return (
    <div className="h-screen w-screen">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full w-full rounded-lg border md:min-w-[450px]"
      >
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full w-full">
            <Suspense fallback={<Loading />}>
              <Scene />
            </Suspense>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={25}>
          <ResizablePanelGroup direction="vertical" className="h-full">
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6 bg-neutral-900">
                <ConfigPalette />
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6 bg-neutral-900">
                <Optional/>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
};

export default page;