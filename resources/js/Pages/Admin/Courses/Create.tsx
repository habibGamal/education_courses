import { Form } from "antd";
import { useTranslate } from "@/Layouts/Config";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import HeaderTitle from "@/Components/HeaderTitle";
import { router } from "@inertiajs/react";
import CourseForm from "@/Components/Courses/CourseForm";

export default function CreateCourse(props: any) {
    const t = useTranslate();
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        if (values.thumbnail)
            values.thumbnail = values.thumbnail.file.originFileObj;
        router.post(route("courses.store"), values);
    };
    return (
        <AuthenticatedLayout
            header={<HeaderTitle title={t("Courses", "الكورسات")} />}
        >
            <CourseForm form={form} onFinish={onFinish} />
        </AuthenticatedLayout>
    );
}
