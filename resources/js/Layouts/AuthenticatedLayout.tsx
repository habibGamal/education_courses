import AdminHeader from "@/Components/AdminHeader";
import AdminSider from "@/Components/AdminSider";
import useStatus from "@/Hooks/useStatus";
import { Layout, theme } from "antd";
import { PropsWithChildren, ReactNode, useState } from "react";
import { authLayoutContext } from "@/Contexts/authLayoutContext";
import Footer from "@/Components/Footer";
const { Header, Content, Sider } = Layout;

export default function Authenticated({
    // header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    useStatus();

    const [header, setHeader] = useState<ReactNode>(null);
    return (
        <authLayoutContext.Provider value={{ header, setHeader }}>
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
                    <Footer />
                </Layout>
            </Layout>
        </authLayoutContext.Provider>
    );
}
