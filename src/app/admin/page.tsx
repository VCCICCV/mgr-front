import { redirect } from 'next/navigation'

export default function page() {
    return (
        // 重定向到面板
        redirect('/admin/dashboard')
    )
}
