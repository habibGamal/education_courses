import { useTranslate } from "@/Layouts/Config";
import {
    HomeOutlined,
    VideoCameraOutlined,
    FileOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";

import { Link } from "@inertiajs/react";
import { Layout, Menu, MenuProps } from "antd";
import { Course } from "@/types";
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

export default function CourseSider({
    course,
    setSelectedResource,
}: {
    course: Course;
    setSelectedResource: (resource: string) => void;
}) {
    const [collapsed, setCollapsed] = useState(false);
    const t = useTranslate();
    const items: MenuItem[] =[
        getItem(
            <Link href={route("user-dashboard")}>
                {t("Dashboard", "الرئيسية")}
            </Link>,
            "home",
            <HomeOutlined />
        ),
        ...course.blocks!.map((block) =>
        getItem(
            block.title,
            `block - ${block.id}`,
            undefined,
            block.resources!.map((resource) =>
                getItem(
                    resource.title,
                    resource.id,
                    resource.type === "video" ? (
                        <VideoCameraOutlined />
                    ) : (
                        <FileOutlined />
                    )
                )
            )
        )
    )]

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            style={{
                minWidth: "300px",
            }}
        >
            <div className="h-12 m-4 bg-white rounded" />
            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
                onSelect={(item) => {
                    setSelectedResource(item.key);
                }}
            />
        </Sider>
    );
}
