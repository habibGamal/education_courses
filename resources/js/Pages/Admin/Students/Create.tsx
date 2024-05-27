import HeaderTitle from "@/Components/HeaderTitle";
import useFormErrors from "@/Hooks/useFormErrors";
import { useHeaderTitle } from "@/Hooks/useHeaderTitle";
import { useTranslate } from "@/Layouts/Config";
import { router } from "@inertiajs/react";
import { Button, Form, Input } from "antd";

export default function Create(props: any) {
    const t = useTranslate();
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        router.post(route("admin.user.factory"), values);
    };

    useHeaderTitle(
        <HeaderTitle title={t("Create User Account", "انشاء مستخدم جديد")} />
    );
    useFormErrors(form);
    return (
        <>
            <Form
                name="create_course"
                labelCol={{ md: { span: 4 } }}
                wrapperCol={{ span: 20 }}
                onFinish={onFinish}
                labelAlign="left"
                form={form}
            >
                <Form.Item
                    name="name"
                    label={t("Name", "الاسم")}
                    rules={[
                        {
                            required: true,
                            message: t(
                                "Please input your name!",
                                "برجاء ادخال الاسم"
                            ),
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email"
                    label={t("Email", "البريد الالكتروني")}
                    rules={[
                        {
                            type: "email",
                            message: t(
                                "The input is not valid E-mail!",
                                "برجاء ادخال بريد الكتروني صحيح"
                            ),
                        },
                        {
                            required: true,
                            message: t(
                                "Please input your E-mail!",
                                "برجاء ادخال بريد الكتروني"
                            ),
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        {t("Submit", "إرسال")}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}
