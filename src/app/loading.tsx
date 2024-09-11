'use client';
import { Spinner } from "@nextui-org/react";
const loading = () => {
    return (
        <div className="h-screen flex items-center justify-center gap-4">
            <Spinner size="lg" />
        </div>
    )
}

export default loading