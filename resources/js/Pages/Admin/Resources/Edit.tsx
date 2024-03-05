import HeaderTitle from "@/Components/HeaderTitle";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useTranslate } from "@/Layouts/Config";
import { Resource } from "@/types";
import {
    Breadcrumb,
    Button,
    Form,
    Input,
    Select,
    TreeSelect,
    Typography,
} from "antd";
import { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { useHeaderTitle } from "@/Hooks/useHeaderTitle";

export default function Edit({
    courseId,
    courseTitle,
    blockTitle,
    resource,
    videosDirectories,
}: {
    courseId: number;
    courseTitle: string;
    blockTitle: string;
    resource: Resource;
    videosDirectories: string[];
}) {
    console.log(videosDirectories);
    const [form] = Form.useForm();
    const t = useTranslate();
    const filterOption = (
        input: string,
        option?: { label: string; value: string }
    ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

    const onFinish = (values: any) => {
        router.put(route("resources.update", resource.id), values);
    };
    const [resourceType, setResourceType] = useState<typeof resource.type>(
        resource.type
    );

    useHeaderTitle(<HeaderTitle title={t("Courses", "الكورسات")} />);
    return (
        <>
            <Breadcrumb
                className="mb-6"
                items={[
                    {
                        title: t("Edit Resource", "تعديل البلوك"),
                    },
                    {
                        title: (
                            <Link href={route("courses.edit", courseId)}>
                                {courseTitle}
                            </Link>
                        ),
                    },
                    {
                        title: (
                            <Link
                                href={route("blocks.edit", resource.block_id)}
                            >
                                {blockTitle}
                            </Link>
                        ),
                    },
                    {
                        title: resource.title,
                    },
                ]}
            />
            <Form
                name="edit_resource"
                labelCol={{ md: { span: 8 } }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                form={form}
                labelAlign="left"
                initialValues={resource}
            >
                <Form.Item
                    label={t("Resource Name", "اسم المحتوى")}
                    name="title"
                    rules={[{ required: true, max: 255 }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={t("Resource type", "نوع المحتوى")}
                    name="type"
                    rules={[{ required: true }]}
                >
                    <Select
                        style={{ width: 120 }}
                        onChange={(value) =>
                            setResourceType(value as typeof resource.type)
                        }
                        options={[
                            { value: "file", label: "File" },
                            { value: "video", label: "Video" },
                        ]}
                    />
                </Form.Item>
                {resourceType === "file" ? (
                    <Form.Item
                        label={t("File Path", "مسار الملف")}
                        name="file_url"
                        rules={[{ required: true }]}
                    >
                        <Select
                            showSearch
                            placeholder="Select file path"
                            optionFilterProp="children"
                            filterOption={filterOption}
                            options={videosDirectories.map((directory) => ({
                                value: directory,
                                label: directory,
                            }))}
                        />
                    </Form.Item>
                ) : (
                    <Form.Item
                        label={t("Video Path", "مسار الفيديو")}
                        name="video_url"
                        rules={[{ required: true }]}
                    >
                        <Select
                            showSearch
                            placeholder="Select video path"
                            optionFilterProp="children"
                            filterOption={filterOption}
                            options={videosDirectories.map((directory) => ({
                                value: directory,
                                label: directory,
                            }))}
                        />
                    </Form.Item>
                )}
                <Form.Item className="flex justify-center mb-0">
                    <Button type="primary" htmlType="submit">
                        {t("Save", "حفط")}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}
