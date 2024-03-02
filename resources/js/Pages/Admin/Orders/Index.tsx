import React, { ReactNode, useContext, useEffect, useState } from "react";
import AuthenticatedLayout, {
    authLayoutContext,
} from "@/Layouts/AuthenticatedLayout";
import HeaderTitle from "@/Components/HeaderTitle";
import { useTranslate } from "@/Layouts/Config";
import { Button, Input, Table, TablePaginationConfig } from "antd";
import { Head, router } from "@inertiajs/react";
import { Order, Paginate } from "@/types";
import PaymentStatusBadge from "@/Components/PaymentStatusBadge";
import { useAdminHeaderTitle } from "@/Hooks/useAdminHeaderTitle";
import Search from "antd/es/input/Search";

export default function Index({ orders }: { orders: Paginate<Order> }) {
    console.log(orders);
    const t = useTranslate();
    const columns = [
        {
            title: t("User", "المستخدم"),
            dataIndex: "user",
            key: "user",
            render: (user: any) => user.name,
        },
        {
            title: t("Email", "البريد الالكتروني"),
            dataIndex: "user",
            key: "usermail",
            render: (user: any) => user.email,
        },
        {
            title: t("Payment Method", "طريقة الدفع"),
            dataIndex: "payment",
            key: "payment",
            render: (payment: any) => payment.payment_method,
        },
        {
            title: t("Payment Status", "حالة الدفع"),
            dataIndex: "payment",
            key: "payment_status",
            render: (payment: any) => (
                <PaymentStatusBadge status={payment.payment_status} />
            ),
        },
        {
            title: t("Payment Amount", "مبلغ الدفع"),
            dataIndex: "payment",
            key: "payment_amount",
            render: (payment: any) => payment.payment_amount,
        },
        {
            title: t("Phone Number", "رقم الهاتف"),
            dataIndex: "payment",
            key: "phone_number",
            render: (payment: any) => payment.phone_number,
        },
        {
            title: t("Date", "التاريخ"),
            dataIndex: "created_at",
            key: "created_at",
        },
        {
            title: t("Action", "العملية"),
            dataIndex: "id",
            key: "id",
            render: (id: number) => (
                <Button type="primary" href={route("admin.orders.show", id)}>
                    {t("Show", "عرض")}
                </Button>
            ),
        },
    ];


    const dataSource = orders.data.map((order) => ({
        key: order.id,
        ...order,
    }));


    const handleTableChange = (pagination: TablePaginationConfig) => {
        router.get(orders.path, { page: pagination.current });
    };

    const onSearch = (value: string) => {
        router.get(route("admin.orders.search", { email: value }));
    };

    useAdminHeaderTitle(<HeaderTitle title={t("Orders", "الاشتراكات")} />);
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
                    current: orders.current_page,
                    pageSize: orders.per_page,
                    total: orders.total,
                }}
            />
        </>
    );
}
