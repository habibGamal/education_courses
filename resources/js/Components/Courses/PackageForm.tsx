import FileUpload from "@/Components/FileUpload";
import imagePathResolver from "@/Helpers/imagePathResolver";
import useFormErrors from "@/Hooks/useFormErrors";
import { useTranslate } from "@/Layouts/Config";
import { Course, Package } from "@/types";
import { usePage } from "@inertiajs/react";
import { Button, Checkbox, Form, FormInstance, Input } from "antd";

export default function PackageForm({
    form,
    onFinish,
    initialValues,
}: {
    form: FormInstance<any>;
    onFinish: (values: any) => void;
    initialValues?: Package;
}) {
    const t = useTranslate();
    const mode = initialValues ? "edit" : "create";
    const thumbUrl = initialValues
        ? imagePathResolver(initialValues?.thumbnail)
        : undefined;
    useFormErrors(form);
    const courses = (usePage().props.courses as Course[]).map((course) => ({
        label: course.title,
        value: course.id,
    }));
    const initCourses = initialValues?.courses?.map((course) => course.id);
    console.log({ ...initialValues, courses: initCourses })
    return (
        <Form
            name="create_package"
            labelCol={{ md: { span: 4 } }}
            wrapperCol={{ span: 20 }}
            onFinish={onFinish}
            labelAlign="left"
            form={form}
            initialValues={{ ...initialValues, courses: initCourses }}
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
            </Form.Item>
            {mode === "edit" && (
                <Form.Item
                    label={t("Current Thumbnail", "الصورة المصغرة الحالية")}
                >
                    <img
                        src={thumbUrl}
                        alt={initialValues?.title}
                        className="w-48 rounded shadow"
                    />
                </Form.Item>
            )}

            <Form.Item
                label={t("Description", "الوصف")}
                name="description"
                rules={[{ required: true }]}
            >
                <Input.TextArea />
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

            <Form.Item
                label={t("Courses", "الكورسات")}
                name="courses"
                rules={[{ required: true }]}
            >
                <Checkbox.Group
                    options={courses}
                    className="w-full grid grid-cols-1 gap-4"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    {t("Submit", "إرسال")}
                </Button>
            </Form.Item>
        </Form>
    );
}
