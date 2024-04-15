import { useTranslate } from "@/Layouts/Config";
import React, { useState } from "react";
import {
    VideoCameraOutlined,
    BoxPlotOutlined,
    ShoppingOutlined,
    UserOutlined,
    HomeOutlined
} from "@ant-design/icons";

import { Layout, Menu, MenuProps } from "antd";
import { Link } from "@inertiajs/react";
import SiderLogo from "./SiderLogo";
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
            <Link href={route("home")}>
                {t("Home", "الرئيسية")}
            </Link>,
            "home",
            <HomeOutlined />
        ),
        getItem(
            <Link href={route("courses.index")}>
                {t("Courses", "الكورسات")}
            </Link>,
            "courses",
            <VideoCameraOutlined />
        ),
        getItem(
            <Link href={route("packages.index")}>
                {t("Packages", "الباقات")}
            </Link>,
            "packages",
            <BoxPlotOutlined />
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
    ];
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
        >
        <SiderLogo />
            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
            />
        </Sider>
    );
}
