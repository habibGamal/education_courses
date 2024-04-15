import PackageForm from "@/Components/Courses/PackageForm";
import HeaderTitle from "@/Components/HeaderTitle";
import { useHeaderTitle } from "@/Hooks/useHeaderTitle";
import { useTranslate } from "@/Layouts/Config";
import { Package } from "@/types";
import { router } from "@inertiajs/react";
import { Form } from "antd";

export default function Edit({ pkg }: { pkg: Package }) {
    const t = useTranslate();

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        if (values.thumbnail?.file)
            values.thumbnail = values.thumbnail.file.originFileObj;
        else delete values.thumbnail;
        console.log(values);
        router.post(
            route("packages.update", { id: pkg.id }),
            { ...values, _method: "put" },
            {
                forceFormData: true,
            }
        );
    };

    useHeaderTitle(<HeaderTitle title={t("Packages", "الباقات")} />);
    return (
        <>
            <PackageForm form={form} onFinish={onFinish} initialValues={pkg} />
        </>
    );
}
