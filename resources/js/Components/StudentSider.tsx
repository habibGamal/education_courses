import { useTranslate } from "@/Layouts/Config";
import { ShoppingOutlined, VideoCameraOutlined ,HomeOutlined} from "@ant-design/icons";
import React, { useState } from "react";

import { Link } from "@inertiajs/react";
import { Layout, Menu, MenuProps } from "antd";
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

export default function StudentSider() {
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
            <Link href={route("enrolled-courses.index")}>
                {t("Courses", "الكورسات")}
            </Link>,
            "courses",
            <VideoCameraOutlined />
        ),
        getItem(
            <Link href={route("orders.index")}>
                {t("Orders", "الاشتراكات")}
            </Link>,
            "orders",
            <ShoppingOutlined />
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
