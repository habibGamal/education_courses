import useFormErrors from "@/Hooks/useFormErrors";
import { useTranslate } from "@/Layouts/Config";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Button, Checkbox, Form, Input } from "antd";

type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
};
export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    console.log(status);

    const onFinish = (values: FieldType) => {
        router.post(route("login"), values);
    };

    const t = useTranslate();

    const [form] = Form.useForm();

    useFormErrors(form);

    return (
        <>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <Form
                name="basic"
                form={form}
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
                        {
                            type: "email",
                            message: t(
                                "The input is not valid E-mail!",
                                "البريد الإلكتروني غير صالح!"
                            ),
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label={t("Password", "كلمة المرور")}
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: t(
                                "Please input your password!",
                                "من فضلك أدخل كلمة المرور!"
                            ),
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        sm: { offset: 8, span: 20 },
                        xs: { offset: 0, span: 24 },
                    }}
                >
                    <Checkbox>{t("Remember me", "تذكرني")}</Checkbox>
                </Form.Item>

                <Form.Item
                    className="mb-0"
                    wrapperCol={{
                        sm: { offset: 8, span: 20 },
                        xs: { offset: 0, span: 24 },
                    }}
                >
                    <Link
                        href={route("password.request")}
                        className="underline text-sm text-gray-600  hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {t("Forgot your password?", "نسيت كلمة المرور؟")}
                    </Link>
                    {/* <Button type="link"></Button> */}
                    <Button className="mx-2" type="primary" htmlType="submit">
                        {t("Login", "تسجيل الدخول")}
                    </Button>
                </Form.Item>
                <Form.Item
                    className="mb-0"
                    wrapperCol={{
                        sm: { offset: 8, span: 20 },
                        xs: { offset: 0, span: 24 },
                    }}
                >
                    <Link
                        href={route("register")}
                        className="underline text-sm text-gray-600  hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {t("Register", "تسجيل")}
                    </Link>
                </Form.Item>
            </Form>

            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form> */}
        </>
    );
}

Login.layout = (page: React.ReactNode) => <GuestLayout>{page}</GuestLayout>;
