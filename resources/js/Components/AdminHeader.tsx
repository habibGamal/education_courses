import { Button, Divider, Dropdown, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import React from "react";
import { useAppStatus, useTranslate } from "@/Layouts/Config";

export default function AdminHeader({header}:{header:React.ReactNode}) {
    const { changeLang } = useAppStatus();
    const t = useTranslate();
    return (
        <Header className="bg-white h-auto  px-6 flex justify-between">
            <div className="my-4">{header}</div>
            <div className="flex items-center">
                <Dropdown
                    menu={{
                        items: [
                            { key: "en", label: "English" },
                            { key: "ar", label: "عربي" },
                        ],
                        onClick: ({ key }) => {
                            changeLang(key as "en" | "ar");
                        },
                    }}
                >
                    <Button>
                        <Space>
                            {t("Language", "اللغة")}
                            <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>
                <Divider type="vertical" />
                <Button danger icon={<LogoutOutlined />}>
                    {t("Logout", "تسجيل الخروج")}
                </Button>
            </div>
        </Header>
    );
}
