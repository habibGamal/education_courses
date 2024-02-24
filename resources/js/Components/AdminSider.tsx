import { useTranslate } from "@/Layouts/Config";
import React, { useState } from "react";
import { VideoCameraOutlined } from "@ant-design/icons";

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
            <Link href={route('courses.index')}>{t("Courses", "الكورسات")}</Link>,
            "courses",
            <VideoCameraOutlined />
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
