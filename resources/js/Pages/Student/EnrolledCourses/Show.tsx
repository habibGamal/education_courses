import AdminHeader from "@/Components/AdminHeader";
import CourseSider from "@/Components/CourseSider";
import HeaderTitle from "@/Components/HeaderTitle";
import StudentSider from "@/Components/StudentSider";
import useStatus from "@/Hooks/useStatus";
import StudentLayout from "@/Layouts/StudentLayout";
import { EnrolledCourses } from "@/types";
import { Layout, theme } from "antd";
import React from "react";

const { Header, Content, Footer, Sider } = Layout;

Show.layout = null;
export default function Show({
    enrolledCourse,
}: {
    enrolledCourse: EnrolledCourses;
}) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    useStatus();
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <CourseSider
                course={enrolledCourse.course!}
            />
            <Layout>
                <AdminHeader header={<HeaderTitle title={enrolledCourse.course!.title} />} />
                <Content className="m-4">
                    <div
                        style={{
                            padding: 24,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        content
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
