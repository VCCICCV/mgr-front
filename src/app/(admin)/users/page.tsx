import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useUserStore from "@/stores/userStore";
import { useEffect } from "react";
import UserTable from "@/components/admin/Usertable";
export default function UserManagementPage() {
    const { fetchUsers } = useUserStore();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <div className="container mx-auto py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">User Management</h1>
                <div className="flex gap-4">
                    <Input placeholder="Search users..." className="w-64" />
                    <Button>Add User</Button>
                </div>
            </div>

            <UserTable />
        </div>
    );
}