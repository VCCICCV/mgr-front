'use client';
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';
const ThemeChanger = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    // 确保只在客户端渲染
    useEffect(() => setMounted(true), [])
    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" aria-label="Toggle theme">
                <Sun className="h-4 w-4" />
            </Button>
        )
    }
    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </Button>
    )
}

export default ThemeChanger