import { AppSidebar } from "@/components/admin/AppSidebar";
import ThemeChanger from "@/components/admin/ThemeChanger";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

// 管理页布局
export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
    return (
        <div className="flex h-screen">
            <SidebarProvider defaultOpen={defaultOpen}>
                <AppSidebar />

                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* 新增头部 */}
                    <header className="h-16 border-b flex items-center justify-between px-4 bg-background">
                        <div className="flex items-center gap-4">
                            <SidebarTrigger />
                            <h1 className="font-semibold text-lg">MGR管理后台</h1>
                        </div>
                        {/* 头像 */}
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                    </header>

                    {/* 内容区域 */}
                    <main className="flex-1 overflow-auto p-4">
                        {children}
                    </main>
                </div>
            </SidebarProvider>
        </div>
    );
}
