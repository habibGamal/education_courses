import React from "react";

import { Form, Input, Button, FormInstance } from "antd";
import FileUpload from "@/Components/FileUpload";
import { useTranslate } from "@/Layouts/Config";
import { Course } from "@/types";
import imagePathResolver from "@/Helpers/imagePathResolver";
import useFormErrors from "@/Hooks/useFormErrors";

export default function CourseForm({
    form,
    onFinish,
    initialValues,
}: {
    form: FormInstance<any>;
    onFinish: (values: any) => void;
    initialValues?: Course;
}) {
    const t = useTranslate();
    const mode = initialValues ? "edit" : "create";
    const thumbUrl = initialValues
        ? imagePathResolver(initialValues?.thumbnail)
        : undefined;
    useFormErrors(form);
    return (
        <Form
            name="create_course"
            labelCol={{ md: { span: 4 } }}
            wrapperCol={{ span: 20 }}
            onFinish={onFinish}
            labelAlign="left"
            form={form}
            initialValues={initialValues}
        >
            <Form.Item
                label={t("Title", "العنوان")}
                name="title"
                rules={[{ required: true, max: 255 }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label={t("Thumbnail", "الصورة المصغرة")}
                name="thumbnail"
                rules={[{ required: mode === "create" }]}
            >
                <FileUpload />
                {mode === "edit" && (
                    <img
                        src={thumbUrl}
                        alt={initialValues?.title}
                        className="w-48 rounded shadow"
                    />
                )}
            </Form.Item>

            <Form.Item
                label={t("Created By", "أنشئت بواسطة")}
                name="created_by"
                rules={[{ required: true, max: 255 }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label={t("Description", "الوصف")}
                name="description"
                rules={[{ required: true }]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item
                label={t("What Will Learn", "ما ستتعلم")}
                name="what_will_learn"
                rules={[{ required: true }]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item
                label={t("Requirements", "المتطلبات")}
                name="requirements"
                rules={[{ required: true }]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item
                label={t("Level", "المستوى")}
                name="level"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label={t("Price", "السعر")}
                name="price"
                rules={[{ required: true }]}
            >
                <Input type="number" />
            </Form.Item>

            <Form.Item
                label={t("Discount Price", "سعر الخصم")}
                name="discount_price"
                rules={[{ required: true }]}
            >
                <Input type="number" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    {t("Submit", "إرسال")}
                </Button>
            </Form.Item>
        </Form>
    );
}