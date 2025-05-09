
'use client';
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

const items = [
    {
        title: "首页",
        url: "/dashboard",
        icon: Home,
    },
    {
        title: "订单管理",
        url: "/order",
        icon: Inbox,
    },
    {
        title: "库存管理",
        url: "/inventory",
        icon: Calendar,
    },
    {
        title: "商品管理",
        url: "/products",
        icon: Search,
    },
    {
        title: "用户管理",
        url: "/user",
        icon: Settings,
        subItems: [
            {
                title: "用户列表",
                url: "/user",
            },
            {
                title: "用户权限",
                url: "/user/permission",
            },
        ]
    },
    {
        title: "角色管理",
        url: "/role",
        icon: Settings,
        subItems: [
            {
                title: "角色列表",
                url: "/role",
            },
            {
                title: "角色权限配置",
                url: "/role/permission",
            },
        ]
    },
    {
        title: "领域管理",
        url: "/domain",
        icon: Settings,
        subItems: [
            {
                title: "领域列表",
                url: "/domain",
            },
            {
                title: "领域配置",
                url: "/user/domain/config",
            },
        ]
    },
    {
        title: "项目端点",
        url: "/endpoint",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link
                                            href={`/admin${item.url}`}
                                            className="flex items-center gap-2"
                                        >
                                            <item.icon className="w-4 h-4" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                    {item.subItems && (
                                        <SidebarMenu>
                                            {item.subItems.map((subItem) => (
                                                <SidebarMenuItem key={subItem.title}>
                                                    <SidebarMenuButton asChild>
                                                        <Link
                                                            href={`/admin${subItem.url}`}
                                                            className="flex items-center gap-2 pl-4"
                                                        >
                                                            <span>{subItem.title}</span>
                                                        </Link>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            ))}
                                        </SidebarMenu>
                                    )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
