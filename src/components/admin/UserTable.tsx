"use client";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import Image from "next/image";
import useUserStore from "@/stores/userStore";
export default function UserTable() {
    const { users, loading, error, toggleUserStatus, deleteUser } = useUserStore();

    if (loading) return <div className="text-center py-8">加载用户...</div>;
    if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
    if (users.length === 0) return <div className="text-center py-8">没有找到用户</div>;

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Avatar</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>Nickname</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell>
                            <Image
                                src={user.avatar}
                                alt={user.avatar}
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.nickName}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phoneNumber}</TableCell>
                        <TableCell>
                            <Badge variant={user.status === "Enabled" ? "default" : "destructive"}>
                                {user.status}
                            </Badge>
                        </TableCell>
                        <TableCell>{new Date(user.createdAt).toLocaleString()}</TableCell>
                        <TableCell className="flex gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => toggleUserStatus(user.id)}
                            >
                                {user.status === "Enabled" ? "Disable" : "Enable"}
                            </Button>
                            <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => deleteUser(user.id)}
                            >
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}