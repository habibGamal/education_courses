import PackageForm from "@/Components/Courses/PackageForm";
import HeaderTitle from "@/Components/HeaderTitle";
import { useHeaderTitle } from "@/Hooks/useHeaderTitle";
import { useTranslate } from "@/Layouts/Config";
import { router } from "@inertiajs/react";
import { Form } from "antd";

export default function CreatePackage(props: any) {
    const t = useTranslate();
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        if (values.thumbnail)
            values.thumbnail = values.thumbnail.file.originFileObj;
        router.post(route("packages.store"), values, {
            forceFormData: true,
        });
    };

    useHeaderTitle(<HeaderTitle title={t("Packages", "الباقات")} />);
    return (
        <>
            <PackageForm form={form} onFinish={onFinish} />
        </>
    );
}
