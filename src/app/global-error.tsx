'use client' // Error boundaries must be Client Components

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        // global-error must include html and body tags
        // biome-ignore lint/a11y/useHtmlLang: <explanation>
        <html>
            <body>
                <h2>Something went wrong!</h2>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button onClick={() => reset()}>Try again</button>
            </body>
        </html>
    )
}