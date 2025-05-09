// src\hooks\table.ts
import { useState, useEffect } from "react";
import { fetchGetAllUsers } from "../api/users";

export const useTable = (p0?: { users: Api.SystemManage.UserList; currentPage: number; pageSize: number; }) => {
  // 当前页码
  const [currentPage, setCurrentPage] = useState(1);
  // 每页条数
  const [pageSize, setPageSize] = useState(10);
  // 勾选的行
  const [selectedRows, setSelectedRows] = useState<Api.SystemManage.User[]>([]);
  // 用户列表数据
  const [users, setUsers] = useState<Api.SystemManage.UserList>({
    current: 0,
    size: 0,
    total: 0,
    records: [],
    length: 0,
  });
  // 加载状态
  const [loading, setLoading] = useState(true);
  // 错误信息
  const [error, setError] = useState<string | null>(null);

  // 处理页码改变
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 处理每页条数改变
  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  // 处理行勾选
  const handleRowSelect = (user: Api.SystemManage.User) => {
    const isSelected = selectedRows.some((selected) => selected.id === user.id);
    if (isSelected) {
      setSelectedRows(
        selectedRows.filter((selected) => selected.id !== user.id)
      );
    } else {
      setSelectedRows([...selectedRows, user]);
    }
  };

  // 处理全选
  const handleSelectAll = () => {
    if (selectedRows.length === users.records.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(users.records);
    }
  };

  // 数据请求
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const params: Api.SystemManage.UserSearchParams = {
          current: currentPage,
          size: pageSize,
        };
        const response = await fetchGetAllUsers(params);
        // 假设后端响应格式如你提供的那样，取 data 部分
        setUsers(response);
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, pageSize]);

  return {
    users,
    loading,
    error,
    currentPage,
    pageSize,
    selectedRows,
    handlePageChange,
    handlePageSizeChange,
    handleRowSelect,
    handleSelectAll,
  };
};
