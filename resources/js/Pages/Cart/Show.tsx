import HomeLayout from "@/Layouts/HomeLayout";
import { Cart } from "@/types";
import { Link, router } from "@inertiajs/react";
import {
    Button,
    Descriptions,
    DescriptionsProps,
    Divider,
    Empty,
    Input,
    Table,
    Typography,
} from "antd";
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import imagePathResolver from "@/Helpers/imagePathResolver";
import CartItem from "@/Components/CartItem";

export default function Show({ cart }: { cart: Cart }) {
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
        {
            title: "Action",
            key: "action",
            render: (text: any, record: any) => (
                <Button danger type="primary">
                    Remove
                </Button>
            ),
        },
    ];

    const total = cart.cart_items?.reduce((acc, item) => {
        return acc + item.course?.discount_price!;
    }, 0);
    const subTotal = cart.cart_items?.reduce((acc, item) => {
        return acc + item.course?.price!;
    }, 0);

    return (
        <>
            <div className="bg-designer min-h-[400px] grid place-items-center">
                <Typography.Title level={1} className="!text-white">
                    Cart
                </Typography.Title>
            </div>
            {
                // Empty Cart
                cart.cart_items?.length === 0 ? (
                    <div className="rounded-xl mx-auto mt-8 max-w-5xl justify-center px-6 py-8 md:flex md:space-x-6 xl:px-0 bg-white grid place-items-center">
                        <img
                            className="max-w-[200px]"
                            src="/assets/empty_cart.png"
                        />
                        <Divider type="vertical" className="h-48" />
                        <Typography.Title
                            level={2}
                            type="secondary"
                            className="text-center  block mt-4"
                        >
                            Your cart is empty
                        </Typography.Title>
                    </div>
                ) : (
                    <div className="mx-auto mt-8 max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                        <div className="rounded-lg md:w-2/3">
                            {cart.cart_items?.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    checkout={false}
                                />
                            ))}

                            <Button
                                type="primary"
                                className="my-8 block ml-auto"
                                onClick={() => router.post(route("cart.clear"))}
                            >
                                Clear Cart
                            </Button>
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
                                <p className="text-gray-700">
                                    {total?.toFixed(2)} EGP
                                </p>
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
                            <Button
                                onClick={() =>
                                    router.get(route("cart.checkout"))
                                }
                                type="primary"
                                className="mt-6 w-full "
                            >
                                Proceed to checkout
                            </Button>
                        </div>
                    </div>
                )
            }
            <div className="h-[8rem]"></div>
        </>
    );
}

Show.layout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>;
