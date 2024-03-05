import HeaderTitle from '@/Components/HeaderTitle'
import { useHeaderTitle } from '@/Hooks/useHeaderTitle'
import { useTranslate } from '@/Layouts/Config'
import StudentLayout from '@/Layouts/StudentLayout'
import React from 'react'

UserDashboard.layout = (page: React.ReactNode) => <StudentLayout>{page}</StudentLayout>
export default function UserDashboard() {
    const t = useTranslate()
    useHeaderTitle(<HeaderTitle title={t("User Dashboard", "لوحة المستخدم")} />);
  return (
    <div>User Dashboard</div>
  )
}
