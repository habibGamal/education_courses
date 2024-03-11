import { Form } from "antd";
import { useTranslate } from "@/Layouts/Config";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import HeaderTitle from "@/Components/HeaderTitle";
import { router } from "@inertiajs/react";
import CourseForm from "@/Components/Courses/CourseForm";
import { useHeaderTitle } from "@/Hooks/useHeaderTitle";

export default function CreateCourse(props: any) {
    const t = useTranslate();
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        if (values.thumbnail)
            values.thumbnail = values.thumbnail.file.originFileObj;
        router.post(route("courses.store"), values,{
            forceFormData: true
        });
    };

    useHeaderTitle(<HeaderTitle title={t("Courses", "الكورسات")} />);
    return (
        <>
            <CourseForm form={form} onFinish={onFinish} />
        </>
    );
}
