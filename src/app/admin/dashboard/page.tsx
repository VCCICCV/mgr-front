// src/app/admin/dashboard/page.tsx
import { LoginLogs } from '@/components/dashboard/LoginLogs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getLoginLogs } from '@/lib/actions/logAction';

export default async function DashboardPage() {
  // 预加载第一页数据
  const initialLogs = await getLoginLogs(1, 5);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* 主内容区 - 占2/3宽度 */}
      <div className="lg:col-span-2 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>系统概览</CardTitle>
          </CardHeader>
          <CardContent>
            {/* 这里放你的主要仪表板内容 */}
            <div className="h-64 bg-muted/50 rounded flex items-center justify-center">
              主要仪表板内容区域
            </div>
          </CardContent>
        </Card>

        {/* 其他仪表组件 */}
      </div>

      {/* 侧边栏 - 占1/3宽度 */}
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>快捷操作</CardTitle>
          </CardHeader>
          <CardContent>
            {/* 快捷操作按钮 */}
            <div className="grid grid-cols-2 gap-2">
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className="p-3 bg-primary/10 rounded hover:bg-primary/20 transition">
                新建用户
              </button>
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className="p-3 bg-primary/10 rounded hover:bg-primary/20 transition">
                系统设置
              </button>
            </div>
          </CardContent>
        </Card>

        {/* 登录日志组件 - 固定在左下角 */}
        <LoginLogs initialData={initialLogs} />
      </div>
    </div>
  );
}