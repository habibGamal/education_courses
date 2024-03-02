import { useTranslate } from "@/Layouts/Config";
import { Block } from "@/types";
import { Button, Form, FormInstance, Input, Select } from "antd";

export default function ResourceForm({
    form,
    onFinish,
}: {
    form: FormInstance<any>;
    onFinish: (values: any) => void;
}) {
    const t = useTranslate();
    return (
        <Form
            name="create_resource"
            labelCol={{ md: { span: 8 } }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            form={form}
            labelAlign="left"
            initialValues={{ type: "video" }}
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
                    options={[
                        { value: "file", label: "File" },
                        { value: "video", label: "Video" },
                    ]}
                />
            </Form.Item>
            <Form.Item className="flex justify-center mb-0">
                <Button type="primary" htmlType="submit">
                    {t("Create", "إنشاء")}
                </Button>
            </Form.Item>
        </Form>
    );
}
