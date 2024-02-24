import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import HeaderTitle from "@/Components/HeaderTitle";
import { useTranslate } from "@/Layouts/Config";
import { App, Button, Modal, Table } from "antd";
import { Head, router } from "@inertiajs/react";
import { Course, PageProps } from "@/types";
import { EditOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import imagePathResolver from "@/Helpers/imagePathResolver";

type Props = {
    courses: Course[];
} & PageProps;
export default function Index({ courses }: Props) {
    const t = useTranslate();
    const dataSource = courses.map((course) => ({
        key: course.id,
        ...course,
        thumbnail: imagePathResolver(course.thumbnail),
    }));

    const {modal}= App.useApp();

    const columns = [
        {
            title: "",
            dataIndex: "thumbnail",
            key: "thumbnail",
            render: (thumbnail: string) => (
                <img
                    className="w-12 rounded shadow"
                    src={thumbnail}
                    alt="thumbnail"
                />
            ),
        },
        {
            title: t("Name", "الاسم"),
            dataIndex: "title",
            key: "title",
        },
        {
            title: t("Total Enrolled", "إجمالي المسجلين"),
            dataIndex: "total_enrolled",
            key: "total_enrolled",
        },
        {
            title: t("Manage", "إدارة"),
            key: "manage",
            render: (text: any, record: any) => (
                <div className="flex gap-4">
                    <Button
                        type="primary"
                        icon={<EditOutlined />}
                        onClick={() => {
                            router.get(route("courses.edit", record.id));
                        }}
                    >
                        {t("Manage", "إدارة")}
                    </Button>
                    <Button
                        type="primary"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => {
                            modal.confirm({
                                title: t("Are you sure?", "هل أنت متأكد؟"),
                                content: t(
                                    "Do you want to delete this course?",
                                    "هل تريد حذف هذا الكورس؟"
                                ),
                                onOk() {
                                    router.delete(
                                        route("courses.destroy", record.id)
                                    );
                                },
                                onCancel() {},
                                okText: t("Yes", "نعم"),
                                cancelText: t("No", "لا"),
                            });
                        }}
                    >
                        {t("Delete", "حذف")}
                    </Button>
                </div>
            ),
        },
    ];
    console.log(courses);
    return (
        <AuthenticatedLayout
            header={<HeaderTitle title={t("Courses", "الكورسات")} />}
        >
            <Head title="Courses" />
            <Button
                type="primary"
                icon={<PlusOutlined />}
                className="float-end mb-4"
                onClick={() => {
                    router.get(route("courses.create"));
                }}
            >
                {t("Create New Course", "إنشاء كورس جديد")}
            </Button>
            <Table
                className="shadow"
                dataSource={dataSource}
                columns={columns}
                pagination={false}
            />
        </AuthenticatedLayout>
    );
}
