'use client';
import { useEffect, useState } from 'react';
import { Pagination } from '@/components/common/Pagination';
import { getLoginLogs } from '@/lib/actions/logAction';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

interface LoginLog {
    id: string;
    user_id: string;
    username: string;
    domain: string;
    login_time: string;
    ip: string;
    port: number;
    address: string;
    user_agent: string;
    request_id: string;
    type: string;
    created_at: string;
    created_by: string;
}

interface LoginLogsProps {
    initialData?: {
        current: number;
        size: number;
        total: number;
        records: LoginLog[];
    };
}

export function LoginLogs({ initialData }: LoginLogsProps) {
    const [data, setData] = useState(initialData);
    const [page, setPage] = useState(initialData?.current || 1);
    const [pageSize, setPageSize] = useState(initialData?.size || 5);
    const [loading, setLoading] = useState(!initialData);

    const fetchData = async () => {
        setLoading(true);
        try {
            const logs = await getLoginLogs(page, pageSize);
            setData(logs);
        } finally {
            setLoading(false);
        }
    };

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        if (!initialData) {
            fetchData();
        }
    }, [page, pageSize]);

    useEffect(() => {
        if (initialData) {
            setData(initialData);
            setPage(initialData.current);
            setPageSize(initialData.size);
        }
    }, [initialData]);

    if (loading) return <div className="text-center py-4">加载中...</div>;
    if (!data) return <div className="text-center py-4">暂无数据</div>;

    return (
        <div className="border rounded-lg p-4 bg-card">
            <div className="overflow-auto max-h-64">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>用户名</TableHead>
                            <TableHead>登录时间</TableHead>
                            <TableHead>IP地址</TableHead>
                            <TableHead>设备类型</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
                        {data.records.map((log: any) => (
                            <TableRow key={log.id}>
                                <TableCell>{log.username}</TableCell>
                                <TableCell>
                                    {new Date(log.login_time).toLocaleString()}
                                </TableCell>
                                <TableCell>{log.ip}</TableCell>
                                <TableCell>{log.type}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="mt-2">
                <Pagination
                    currentPage={page}
                    pageSize={pageSize}
                    total={data.total}
                    onPageChange={setPage}
                    onSizeChange={setPageSize}
                    compact
                />
            </div>
        </div>
    );
}