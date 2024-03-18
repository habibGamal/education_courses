import imagePathResolver from "@/Helpers/imagePathResolver";
import { CartItem as CartItemModel } from "@/types";
import { router } from "@inertiajs/react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import React from "react";
import { useTranslate } from "@/Layouts/Config";

export default function CartItem({
    item,
    checkout,
}: {
    item: CartItemModel;
    checkout?: boolean;
}) {
    const t = useTranslate();
    return (
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
                src={imagePathResolver(item.course?.thumbnail!)}
                alt="product-image"
                className="w-full max-h-[150px] object-cover rounded-lg sm:w-40"
            />
            <div className="sm:ltr:ml-4 sm:rtl:mr-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                        {item.course?.title!}
                    </h2>
                    <p className="mt-1 text-lg text-gray-700">
                        {t(
                            <>
                                Price: {item.course?.discount_price} EGP{" "}
                                <span className="line-through text-sm">
                                    {item.course?.price} EGP
                                </span>
                            </>,
                            <>
                                السعر : {item.course?.discount_price} جنيه{" "}
                                <span className="line-through text-sm">
                                    {item.course?.price} جنيه
                                </span>
                            </>
                        )}
                    </p>
                </div>
                {checkout || (
                    <div className="mt-4 flex items-center">
                        <Button
                            onClick={() =>
                                router.post(route("cart.removeCartItem"), {
                                    cart_item_id: item.id,
                                })
                            }
                            danger
                            type="primary"
                            icon={<DeleteOutlined />}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
