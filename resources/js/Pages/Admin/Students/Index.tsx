import HeaderTitle from "@/Components/HeaderTitle";
import { useHeaderTitle } from "@/Hooks/useHeaderTitle";
import { useTranslate } from "@/Layouts/Config";
import { Paginate, User } from "@/types";
import { Head, router } from "@inertiajs/react";
import { Button, Table, TablePaginationConfig } from "antd";
import Search from "antd/es/input/Search";
import React from "react";

export default function Index({ students }: { students: Paginate<User> }) {
    console.log(students);
    const t = useTranslate();
    const columns = [
        {
            title: t("User", "المستخدم"),
            dataIndex: "name",
            key: "name",
        },
        {
            title: t("Email", "البريد الالكتروني"),
            dataIndex: "email",
            key: "email",
        },

        {
            title: t("Action", "العملية"),
            dataIndex: "id",
            key: "id",
            render: (id: number) => (
                <Button type="primary" href={route("admin.students.show", id)}>
                    {t("Show", "عرض")}
                </Button>
            ),
        },
    ];

    const dataSource = students.data.map((user) => ({
        key: user.id,
        ...user,
    }));

    const handleTableChange = (pagination: TablePaginationConfig) => {
        router.get(students.path, { page: pagination.current });
    };

    const onSearch = (value: string) => {
        router.get(route("admin.students.index", { email: value }));
    };

    useHeaderTitle(<HeaderTitle title={t("Students", "الطلاب")} />);
    return (
        <>
            <Head title="Orders" />
            <Search
                placeholder={t("Search Email", "بحث بالبريد")}
                onSearch={onSearch}
                className="w-full mb-6"
            />

            <Table
                className="shadow"
                dataSource={dataSource}
                columns={columns}
                onChange={handleTableChange}
                pagination={{
                    current: students.current_page,
                    pageSize: students.per_page,
                    total: students.total,
                }}
            />
        </>
    );
}
