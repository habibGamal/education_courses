import CartItem from "@/Components/CartItem";
import { useTranslate } from "@/Layouts/Config";
import HomeLayout from "@/Layouts/HomeLayout";
import { Cart } from "@/types";
import { Head, router } from "@inertiajs/react";
import { Button, Divider, Typography } from "antd";
import React from "react";

export default function Show({ cart }: { cart: Cart }) {
    const total = cart.cart_items?.reduce((acc, item) => {
        return acc + item.course?.discount_price!;
    }, 0);

    const subTotal = cart.cart_items?.reduce((acc, item) => {
        return acc + item.course?.price!;
    }, 0);

    const t = useTranslate();

    return (
        <>
            <Head title="Cart" />
            <div className="bg-designer min-h-[400px] grid place-items-center">
                <Typography.Title level={1} className="!text-white">
                    {t("Cart", "عربة التسوق")}
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
                        <Divider
                            type="vertical"
                            className="h-48 !mx-4 hidden md:block"
                        />
                        <Typography.Title
                            level={2}
                            type="secondary"
                            className="text-center  block mt-4"
                        >
                            {t("Your cart is empty", "عربة التسوق فارغة")}
                        </Typography.Title>
                    </div>
                ) : (
                    <div className="mx-auto mt-8 max-w-5xl justify-center px-6 md:flex gap-4 xl:px-0">
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
                                {t("Clear Cart", "مسح العربة")}
                            </Button>
                        </div>
                        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-700">
                                    {t("Subtotal", "الاجمالي")}
                                </p>
                                <p className="text-gray-700">
                                    {subTotal?.toFixed(2)} {t("EGP", "جنيه")}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-700">
                                    {t("After Discount", "بعد الخصم")}
                                </p>
                                <p className="text-gray-700">
                                    {total?.toFixed(2)} {t("EGP", "جنيه")}
                                </p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between">
                                <p className="text-lg font-bold">
                                    {t("Total", "الاجمالي")}
                                </p>
                                <div className="">
                                    <p className="mb-1 text-lg font-bold">
                                        {total?.toFixed(2)} {t("EGP", "جنيه")}
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        {t("including VAT", "شامل الضريبة")}
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
                                {t("Proceed to checkout", "الذهاب للدفع")}
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
