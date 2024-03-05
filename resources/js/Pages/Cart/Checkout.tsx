import FileUpload from "@/Components/FileUpload";
import useFormErrors from "@/Hooks/useFormErrors";
import HomeLayout from "@/Layouts/HomeLayout";
import { Cart } from "@/types";
import { Link } from "@inertiajs/react";
import {
    Button,
    Descriptions,
    DescriptionsProps,
    Form,
    Input,
    Radio,
    Space,
    Table,
    Typography,
} from "antd";

export default function Checkout({ cart }: { cart: Cart }) {
    const dataSource = cart.cart_items?.map((item) => ({
        key: item.id,
        ...item,
        courseId: item.course?.id,
        thumbnail: item.course?.thumbnail,
        title: item.course?.title,
        price: item.course?.price,
        discountPrice: item.course?.discount_price,
    }));

    const columns = [
        {
            title: "",
            dataIndex: "thumbnail",
            key: "thumbnail",
            render: (thumbnail: string) => (
                <img
                    className="w-36 block mx-auto rounded shadow"
                    src={thumbnail}
                    alt="thumbnail"
                />
            ),
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            render: (title: string, record: any) => (
                <Link
                    className="text-black"
                    href={route("browse.courses.show", record.courseId)}
                >
                    {title}
                </Link>
            ),
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },

        {
            title: "Discount Price",
            dataIndex: "discountPrice",
            key: "discountPrice",
        },
    ];
    const subTotal = cart.cart_items?.reduce((acc, item) => {
        return acc + item.course?.discount_price!;
    }, 0);
    const items: DescriptionsProps["items"] = [
        {
            key: "1",
            label: "Subtotal",
            children: subTotal,
            span: 3,
        },
        {
            key: "2",
            label: "Coupon Discount",
            children: 0,
            span: 3,
        },
        {
            key: "3",
            label: "Should Pay after Discount",
            children: subTotal,
            span: 3,
        },
    ];

    const [form] = Form.useForm();
    useFormErrors(form);
    return (
        <>
            <div className="bg-designer min-h-[400px] grid place-items-center">
                <Typography.Title level={1} className="!text-white">
                    Checkout
                </Typography.Title>
            </div>
            <div className="container my-8">
                <Table
                    className="shadow"
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                    scroll={{ x: true }}
                />
                <Descriptions
                    className="my-8"
                    title="Cart Totals"
                    layout="horizontal"
                    bordered
                    items={items}
                />
                <div className=" w-fit my-8 rounded bg-white p-6">
                    <Typography.Title level={3}>Payment</Typography.Title>
                    <Form form={form} layout="vertical">
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
                                <Radio value="orange_cash">Orange Cash</Radio>
                                <Radio value="instapay">Instapay</Radio>
                            </Radio.Group>
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
                                    message: "Thumbnail is required",
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
