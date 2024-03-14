import AdminHeader from "@/Components/AdminHeader";
import CourseSider from "@/Components/CourseSider";
import HeaderTitle from "@/Components/HeaderTitle";
import StudentSider from "@/Components/StudentSider";
import useStatus from "@/Hooks/useStatus";
import StudentLayout from "@/Layouts/StudentLayout";
import { EnrolledCourses } from "@/types";
import { Link } from "@inertiajs/react";
import { Button, Layout, Typography, theme } from "antd";
import React, { useEffect, useMemo } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import Footer from "@/Components/Footer";

const { Content } = Layout;

const { Paragraph } = Typography;

Show.layout = null;
export default function Show({
    enrolledCourse,
}: {
    enrolledCourse: EnrolledCourses;
}) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [selectedResource, setSelectedResource] = React.useState<
        string | null
    >(null);

    const resources = enrolledCourse.course!.blocks!.flatMap(
        (block) => block.resources!
    );

    const resource = useMemo(
        () => resources.find((r) => r.id.toString() === selectedResource),
        [selectedResource]
    );

    useStatus();
    console.log(resource, selectedResource);

    console.log(resource);


    return (
        <Layout style={{ minHeight: "100vh" }}>
            <CourseSider
                course={enrolledCourse.course!}
                setSelectedResource={setSelectedResource}
            />
            <Layout>
                <AdminHeader
                    header={
                        <HeaderTitle title={enrolledCourse.course!.title} />
                    }
                />
                <Content className="m-4">
                    <div
                        style={{
                            padding: 24,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {resource?.type === "video" ? (
                            <ShowVideo url={resource?.video_url} />
                        ) : (
                            <div className="grid min-h-[300px] place-items-center">
                                <img
                                    className="w-[100px]"
                                    src="/assets/folders.png"
                                />
                                <div className="flex flex-col gap-4 items-center">
                                    <h1 className="text-2xl font-bold">
                                        {resource?.title}
                                    </h1>
                                    <a
                                        href={`/storage/${resource?.file_url}`}
                                        download
                                    >
                                        <Button size="large" type="primary">
                                            Download
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
}

const ShowVideo = ({ url }: { url: string | undefined }) => (
    <Paragraph copyable>{url}</Paragraph>
);
