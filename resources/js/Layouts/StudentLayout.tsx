import AdminHeader from "@/Components/AdminHeader";
import Footer from "@/Components/Footer";
import StudentSider from "@/Components/StudentSider";
import { authLayoutContext } from "@/Contexts/authLayoutContext";
import useStatus from "@/Hooks/useStatus";
import { Layout, theme } from "antd";
import { PropsWithChildren, ReactNode, useState } from "react";

const { Header, Content, Sider } = Layout;


export default function StudentLayout({
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
                <StudentSider />
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
