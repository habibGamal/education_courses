import { useState, PropsWithChildren, ReactNode, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import { User } from "@/types";
import type { MenuProps } from "antd";
import {
    Breadcrumb,
    Button,
    Divider,
    Dropdown,
    Layout,
    Menu,
    Space,
    message,
    theme,
} from "antd";
import { useAppStatus, useTranslate } from "./Config";
import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import AdminSider from "@/Components/AdminSider";
import AdminHeader from "@/Components/AdminHeader";
import useStatus from "@/Hooks/useStatus";

const { Header, Content, Footer, Sider } = Layout;

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    useStatus();
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <AdminSider />
            <Layout>
                <AdminHeader header={header} />
                <Content className="m-4">
                    <div
                        style={{
                            padding: 24,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    KM Retouch ©{new Date().getFullYear()} Created by Eng. Habib
                    Gamal
                </Footer>
            </Layout>
        </Layout>
    );
}
