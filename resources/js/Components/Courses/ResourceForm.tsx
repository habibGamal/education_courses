import { useTranslate } from "@/Layouts/Config";
import { Block } from "@/types";
import { Button, Form, FormInstance, Input } from "antd";

export default function ResourceForm({
    form,
    onFinish,
    initialValues,
}: {
    form: FormInstance<any>;
    onFinish: (values: any) => void;
    initialValues?: Block;
}) {
    const t = useTranslate();
    const mode = initialValues ? "edit" : "create";
    return (
        <Form
            name="create_resource"
            labelCol={{ md: { span: 8 } }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            form={form}
            labelAlign="left"
            initialValues={initialValues}
        >
            <Form.Item
                label={t("Resource Name", "اسم المحتوى")}
                name="title"
                rules={[{ required: true, max: 255 }]}
            >
                <Input />
            </Form.Item>
            <Form.Item className="flex justify-center mb-0">
                <Button type="primary" htmlType="submit">
                    {mode === "edit"
                        ? t("Update", "تعديل")
                        : t("Create", "إنشاء")}
                </Button>
            </Form.Item>
        </Form>
    );
}
