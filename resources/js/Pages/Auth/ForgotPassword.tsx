import { useTranslate } from "@/Layouts/Config";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, router, useForm } from "@inertiajs/react";
import { Button, Form, Input } from "antd";
import { FormEventHandler } from "react";

type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
};
ForgotPassword.layout = null;
export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };


    const onFinish = (values: FieldType) => {
        router.post(route("password.email"), values);
    };

    const t = useTranslate();

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600">
                {t(
                    "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.",
                    " نسيت كلمة المرور؟ لا مشكلة. فقط أخبرنا بعنوان بريدك الإلكتروني وسنرسل لك رابط إعادة تعيين كلمة المرور عبر البريد الإلكتروني الذي سيسمح لك باختيار واحدة جديدة."
                )}
            </div>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                labelAlign="left"
            >
                <Form.Item<FieldType>
                    label={t("Email", "البريد الإلكتروني")}
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: t(
                                "Please input your email!",
                                "من فضلك أدخل بريدك الإلكتروني!"
                            ),
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    className="mb-0"
                    wrapperCol={{
                        sm: { offset: 8, span: 20 },
                        xs: { offset: 0, span: 24 },
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        {t("Email Password Reset Link", "إرسال رابط إعادة تعيين كلمة المرور")}
                    </Button>
                </Form.Item>
            </Form>

            {/* <form onSubmit={submit}>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData("email", e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Email Password Reset Link
                    </PrimaryButton>
                </div>
            </form> */}
        </GuestLayout>
    );
}
