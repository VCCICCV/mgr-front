// src/components/admin/user/UserTable.tsx
'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { deleteUser } from "@/lib/actions/userAction";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pagination } from "../../common/Pagination";

interface UserTableProps {
    users: Api.SystemManage.UserList;
    onPageChange: (page: number) => void;
    onSizeChange: (size: number) => void;
    onEdit: (userId: string) => void;
    onDelete: (userId: string) => void;
}

export default function UserTable({
    users,
    onPageChange,
    onSizeChange,
    onEdit,
    onDelete
}: UserTableProps) {
    const router = useRouter();

    const handleDelete = async (userId: string) => {
        try {
            await deleteUser(userId);
            toast.success("用户删除成功");
            router.refresh();
        } catch (error) {
            toast.error("删除用户失败");
            console.error("删除用户错误:", error);
        }
    };

    if (users.records.length === 0) {
        return <div className="text-center py-8">没有找到用户</div>;
    }

    return (
        <div className="space-y-4">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>头像</TableHead>
                            <TableHead>用户名</TableHead>
                            <TableHead>昵称</TableHead>
                            <TableHead>邮件</TableHead>
                            <TableHead>手机号</TableHead>
                            <TableHead>状态</TableHead>
                            <TableHead>创建时间</TableHead>
                            <TableHead>操作</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.records.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage src={user.avatar} />
                                        <AvatarFallback>
                                            {user.nickName?.charAt(0) || 'U'}
                                        </AvatarFallback>
                                    </Avatar>
                                </TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.nickName}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phoneNumber}</TableCell>
                                <TableCell>
                                    <Badge variant={user.status === "Enabled" ? "default" : "destructive"}>
                                        {user.status === "Enabled" ? "启用" : "禁用"}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    {new Date(user.createTime).toLocaleString()}
                                </TableCell>
                                <TableCell className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => onEdit(user.id)}
                                    >
                                        编辑
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => handleDelete(user.id)}
                                    >
                                        删除
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <Pagination
                currentPage={users.current}
                pageSize={users.size}
                total={users.total}
                onPageChange={onPageChange}
                onSizeChange={onSizeChange}
            />
        </div>
    );
}