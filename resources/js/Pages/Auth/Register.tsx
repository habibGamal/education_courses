import { useEffect, FormEventHandler, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Form, Input, Button, Select } from "antd";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { useTranslate } from "@/Layouts/Config";
import axios from "axios";

interface Country {
    name: string;
    callingCodes: string[];
    independent: boolean;
}

export default function Register() {
    const onFinish = (values: any) => {
        router.post(route("register"), values);
    };

    const t = useTranslate();

    const [countries, setCountries] = useState<Country[]>([]);

    const fetchCountries = async () => {
        const response = await axios<Country[]>(
            "https://restcountries.com/v2/all?fields=name,callingCodes"
        );
        const data = response.data;
        setCountries(data);
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    const filterOption = (
        input: string,
        option?: { label: string; value: string }
    ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

    console.log(countries);
    return (
        <>
            <Head title="Register" />

            <Form name="register" onFinish={onFinish} scrollToFirstError>
                <Form.Item
                    name="name"
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
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                    name="country"
                    rules={[
                        {
                            required: true,
                            message: t(
                                "Please input your country!",
                                "برجاء ادخال البلد"
                            ),
                            whitespace: true,
                        },
                    ]}
                >
                    <Select
                        showSearch
                        placeholder="Select a country"
                        optionFilterProp="children"
                        options={countries.map((country) => ({
                            label: country.name,
                            value: country.name,
                        }))}
                        filterOption={filterOption}
                    />
                </Form.Item>

                <Form.Item
                    name="city"
                    rules={[
                        {
                            required: true,
                            message: t(
                                "Please input your city!",
                                "برجاء ادخال المدينة"
                            ),
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="City" />
                </Form.Item>
                <Form.Item
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: t(
                                "Please input your phone number!",
                                "برجاء ادخال رقم الهاتف"
                            ),
                            whitespace: true,
                        },
                    ]}
                >
                    <Input
                        addonBefore={
                            <Select
                                defaultValue="+20"
                                style={{ width: 200 }}
                                options={countries.map((country) => ({
                                    key: country.name,
                                    label: `${country.name} +${country.callingCodes[0]}`,
                                    value: `${country.name} +${country.callingCodes[0]}`,
                                }))}
                            />
                        }
                    />
                </Form.Item>

                <Form.Item
                    name="email"
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
                    <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: t(
                                "Please input your password!",
                                "برجاء ادخال كلمة المرور"
                            ),
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item
                    name="password_confirmation"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: t(
                                "Please confirm your password!",
                                "برجاء تأكيد كلمة المرور"
                            ),
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue("password") === value
                                ) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error(
                                        "The two passwords that you entered do not match!"
                                    )
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Confirm Password" />
                </Form.Item>

                <Form.Item>
                    <Button type="link" htmlType="submit">
                        {t("Already registered?", "هل لديك حساب بالفعل؟")}
                    </Button>
                    <Button type="primary" htmlType="submit">
                        {t("Register", "تسجيل")}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

Register.layout = (page: React.ReactNode) => <GuestLayout>{page}</GuestLayout>;
