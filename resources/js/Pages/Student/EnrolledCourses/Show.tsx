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
import { useTranslate } from "@/Layouts/Config";

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
                        {resource === undefined && (
                            <iframe
                                src={
                                    enrolledCourse.course!.promo_video_link ??
                                    ""
                                }
                                width="100%"
                                height="500"
                                allowFullScreen
                                className="border-none rounded-xl"
                            ></iframe>
                        )}
                        {resource && resource.type === "video" && (
                            <ShowVideo url={resource?.video_url} />
                        )}
                        {resource && resource.type === "file" && (
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
                                        href={resource?.file_url}
                                        target="_blank"
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

const ShowVideo = ({ url }: { url: string | undefined }) => {
    const t = useTranslate();
    return (
        <div className="flex flex-col gap-4">
            {/* <iframe
                src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                width="100%"
                height="500"
                allowFullScreen
                className="border-none rounded-xl"
            ></iframe> */}
            <Paragraph className="text-lg rounded-xl bg-gray-100 p-2" copyable>
                {url}
            </Paragraph>
            <a
                href="https://drive.google.com/drive/folders/1ogcFEhTVaDdboXfUBq94gt50Fq9BCVij?usp=sharing"
                target="_blank"
            >
                <Button size="large" type="primary">
                    {t("Download video player", "تحميل مشغل الفيديو")}
                </Button>
            </a>
        </div>
    );
};
