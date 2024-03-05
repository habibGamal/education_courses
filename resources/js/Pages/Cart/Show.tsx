import HomeLayout from "@/Layouts/HomeLayout";
import { Cart } from "@/types";
import { Link, router } from "@inertiajs/react";
import {
    Button,
    Descriptions,
    DescriptionsProps,
    Input,
    Table,
    Typography,
} from "antd";
import React from "react";

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
    const items: DescriptionsProps["items"] = [
        {
            key: "1",
            label: "Subtotal",
            children: subTotal,
            span: 3,
        },
        {
            key: "3",
            label: "Should Pay after Discount",
            children: total,
            span: 3,
        },
    ];

    return (
        <>
            <div className="bg-designer min-h-[400px] grid place-items-center">
                <Typography.Title level={1} className="!text-white">
                    Cart
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
                <Button type="primary" className="my-8 block ml-auto">
                    Clear Cart
                </Button>
                <Descriptions
                    className="my-8"
                    title="Cart Totals"
                    layout="horizontal"
                    bordered
                    items={items}
                />
                <div className="flex w-fit flex-col justify-between  ml-auto gap-4 my-8">
                    <Button onClick={()=>router.get(route('cart.checkout'))} type="primary">Proceed to checkout</Button>
                </div>
            </div>
        </>
    );
}

Show.layout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>;
