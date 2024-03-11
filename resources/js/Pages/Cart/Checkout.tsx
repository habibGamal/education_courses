import CartItem from "@/Components/CartItem";
import FileUpload from "@/Components/FileUpload";
import useFormErrors from "@/Hooks/useFormErrors";
import HomeLayout from "@/Layouts/HomeLayout";
import { Cart } from "@/types";
import { router } from "@inertiajs/react";
import {
    Button,
    Form,
    Input,
    Radio,
    Space,
    Typography
} from "antd";

export default function Checkout({ cart }: { cart: Cart }) {


    const total = cart.cart_items?.reduce((acc, item) => {
        return acc + item.course?.discount_price!;
    }, 0);
    const subTotal = cart.cart_items?.reduce((acc, item) => {
        return acc + item.course?.price!;
    }, 0);

    const [form] = Form.useForm();
    useFormErrors(form);

    const onFinish = (values: any) => {
        if (values.screenshot)
            values.screenshot = values.screenshot.file.originFileObj;
        router.post(route("orders.placeOrder"), values,{
            forceFormData: true
        });
    };

    return (
        <>
            <div className="bg-designer min-h-[400px] grid place-items-center">
                <Typography.Title level={1} className="!text-white">
                    Checkout
                </Typography.Title>
            </div>
            <div className="mx-auto mt-8 max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div className="rounded-lg md:w-2/3">
                    {cart.cart_items?.map((item) => (
                        <CartItem key={item.id} item={item} checkout={true} />
                    ))}
                </div>
                <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Subtotal</p>
                        <p className="text-gray-700">
                            {subTotal?.toFixed(2)} EGP
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-700">After Discount</p>
                        <p className="text-gray-700">{total?.toFixed(2)} EGP</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold">
                                {total?.toFixed(2)} EGP
                            </p>
                            <p className="text-sm text-gray-700">
                                including VAT
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-8 max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div className="my-8 rounded-xl w-full bg-white p-6">
                    <Typography.Title level={3}>Payment</Typography.Title>
                    <Form form={form} layout="vertical"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="payment_method"
                            label="Payment Method"
                            rules={[
                                {
                                    required: true,
                                    message: "Payment Method is required",
                                },
                            ]}
                        >
                            <Radio.Group>
                                <Radio value="vodafone_cash">
                                    Vodafone Cash
                                </Radio>
                                <Radio value="instapay">Instapay</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item dependencies={["payment_method"]}>
                            {({ getFieldValue }) => {
                                const paymentMethod =
                                    getFieldValue("payment_method");
                                return paymentMethod === "vodafone_cash" ? (
                                    <Typography.Text>
                                        Send the money to 01093084429 or
                                        01019095383
                                    </Typography.Text>
                                ) : paymentMethod === "instapay" ? (
                                    <Typography.Text>
                                        Send the money to 01093084429
                                    </Typography.Text>
                                ) : null;
                            }}
                        </Form.Item>
                        <Form.Item
                            name="phone_number"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: "Phone Number is required",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Screenshot"
                            name="screenshot"
                            rules={[
                                {
                                    required: true,
                                    message: "Screenshot is required",
                                },
                            ]}
                        >
                            <FileUpload />
                        </Form.Item>
                        <Form.Item label="Coupon">
                            <Space.Compact style={{ width: "100%" }}>
                                <Input />
                                <Button type="primary">Apply</Button>
                            </Space.Compact>
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Send Payment
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
}

Checkout.layout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>;
