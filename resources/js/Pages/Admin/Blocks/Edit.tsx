import BlockForm from "@/Components/Courses/BlockForm";
import ResourceIndex from "@/Components/Courses/ResourceIndex";
import HeaderTitle from "@/Components/HeaderTitle";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useTranslate } from "@/Layouts/Config";
import { Block } from "@/types";
import { router } from "@inertiajs/react";
import { Collapse, CollapseProps, Form, Typography } from "antd";

export default function Edit({
    courseTitle,
    block,
}: {
    courseTitle: string;
    block: Block;
}) {
    const t = useTranslate();

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        router.put(route("blocks.update", { id: block.id }), values);
    };

    const items: CollapseProps["items"] = [
        {
            key: "1",
            label: t("Block Details", "تفاصيل البلوك"),
            children: (
                <BlockForm
                    form={form}
                    onFinish={onFinish}
                    initialValues={block}
                />
            ),
        },
        {
            key: "2",
            label: t("Block Content", "محتوى البلوك"),
            children: <ResourceIndex block={block} />,
        },
        {
            key: "3",
            label: t("Block Content Ordering", "ترتيب محتوى البلوك"),
            children: <p>Course Content Ordering</p>,
        },
    ];
    return (
        <AuthenticatedLayout
            header={<HeaderTitle title={t("Courses", "الكورسات")} />}
        >
            <Typography.Title level={3} className="!mt-0 !mb-6">
                {t("Edit Block", "تعديل البلوك")} {courseTitle} / {block.title}
            </Typography.Title>
            <Collapse items={items} defaultActiveKey={["2"]} />
        </AuthenticatedLayout>
    );
}
