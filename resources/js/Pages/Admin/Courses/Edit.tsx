import BlockIndex from "@/Components/Courses/BlockIndex";
import CourseForm from "@/Components/Courses/CourseForm";
import HeaderTitle from "@/Components/HeaderTitle";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useTranslate } from "@/Layouts/Config";
import { Course } from "@/types";
import { router } from "@inertiajs/react";
import {
    Collapse,
    CollapseProps,
    Form,
    Typography
} from "antd";

export default function Edit({ course }: { course: Course }) {
    const t = useTranslate();

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values);
        if (values.thumbnail?.file)
            values.thumbnail = values.thumbnail.file.originFileObj;
        else delete values.thumbnail;
        router.put(route("courses.update", { id: course.id }), values);
    };

    const items: CollapseProps["items"] = [
        {
            key: "1",
            label: t("Course Details", "تفاصيل الكورس"),
            children: (
                <CourseForm
                    form={form}
                    onFinish={onFinish}
                    initialValues={course}
                />
            ),
        },
        {
            key: "2",
            label: t("Course Content", "محتوى الكورس"),
            children: <BlockIndex course={course} />,
        },
        {
            key: "3",
            label: t("Course Content Ordering", "ترتيب محتوى الكورس"),
            children: <p>Course Content Ordering</p>,
        },
    ];
    return (
        <AuthenticatedLayout
            header={<HeaderTitle title={t("Courses", "الكورسات")} />}
        >
            <Typography.Title level={3} className="!mt-0 !mb-6">
                {t("Edit Course", "تعديل الكورس")} {course.title}
            </Typography.Title>
            <Collapse
                items={items}
                defaultActiveKey={["2"]}
            />
        </AuthenticatedLayout>
    );
}
