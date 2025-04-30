// 首页布局
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-center justify-center h-full w-full">
            {children}
        </div>
    );
}
