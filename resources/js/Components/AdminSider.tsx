import { useTranslate } from "@/Layouts/Config";
import React, { useState } from "react";
import {
    VideoCameraOutlined,
    FolderOpenOutlined,
    ShoppingOutlined,
    UserOutlined
} from "@ant-design/icons";

import { Layout, Menu, MenuProps } from "antd";
import { Link } from "@inertiajs/react";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

export default function AdminSider() {
    const [collapsed, setCollapsed] = useState(false);
    const t = useTranslate();
    const items: MenuItem[] = [
        getItem(
            <Link href={route("courses.index")}>
                {t("Courses", "الكورسات")}
            </Link>,
            "courses",
            <VideoCameraOutlined />
        ),
        getItem(t("Orders", "الاشتراكات"), "orders", <ShoppingOutlined />, [
            getItem(
                <Link href={route("admin.orders.index")}>
                    {t("All Orders", "جميع الاشتراكات")}
                </Link>,
                "all_orders"
            ),
            getItem(
                <Link href={route("admin.orders.index", { status: "pending" })}>
                    {t("Pending", "المعلقة")}
                </Link>,
                "pending_orders"
            ),
            getItem(
                <Link href={route("admin.orders.index", { status: "paid" })}>
                    {t("Approved", "الموافق عليها")}
                </Link>,
                "approved_orders"
            ),
            getItem(
                <Link href={route("admin.orders.index", { status: "failed" })}>
                    {t("Rejected", "المرفوضة")}
                </Link>,
                "rejected_orders"
            ),
        ]),
        getItem(
            <Link href={route("admin.students.index")}>
                {t("Students", "الطلاب")}
            </Link>,
            "students",
            <UserOutlined />
        ),
        getItem(
            <a href={route("tiny-file-manager")}>
                {t("File Manager", "مدير الملفات")}
            </a>,
            "file_manager",
            <FolderOpenOutlined />
        ),
    ];
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
        >
            <div className="h-12 m-4 bg-white rounded" />
            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
            />
        </Sider>
    );
}
