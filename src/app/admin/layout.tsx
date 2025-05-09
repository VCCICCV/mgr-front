// src/app/admin/layout.tsx
import { AppSidebar } from "@/components/admin/AppSidebar";
import { UserDropdown } from "@/components/admin/UserDropdown";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

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
                    <main className="flex-1 overflow-auto p-4">
                        {/* 更新头部区域 */}
                        <header className="h-16 border-b flex items-center justify-between px-4 bg-background">
                            <div className="flex items-center gap-4">
                                <SidebarTrigger />
                                <h1 className="font-semibold text-lg">MGR管理后台</h1>
                            </div>

                            <div className="flex items-center gap-4">
                                <UserDropdown />
                            </div>
                        </header>
                        {children}
                    </main>
                </div>
            </SidebarProvider>
        </div>
    );
}