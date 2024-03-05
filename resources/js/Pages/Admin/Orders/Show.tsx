import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import HeaderTitle from "@/Components/HeaderTitle";
import {
    Badge,
    Button,
    Descriptions,
    DescriptionsProps,
    Image,
    Popconfirm,
    Table,
} from "antd";
import { Head, Link, router } from "@inertiajs/react";
import { useTranslate } from "@/Layouts/Config";
import { Order } from "@/types";
import PaymentStatusBadge from "@/Components/PaymentStatusBadge";
import { useHeaderTitle } from "@/Hooks/useHeaderTitle";

export default function Show({ order }: { order: Order }) {
    console.log(order);
    const t = useTranslate();
    const dataSource = order.order_items!.map((orderItem) => ({
        key: orderItem.id,
        courseId: orderItem.course?.id,
        courseName: orderItem.course?.title,
        coursePrice: orderItem.course?.price,
    }));
    const columns = [
        {
            title: t("Courses", "الدورات"),
            dataIndex: "courseName",
            key: "courseName",
            render: (text: string, record: any) => (
                <Link href={route("courses.edit", record.courseId)}>
                    {text}
                </Link>
            ),
        },
        {
            title: t("Price", "السعر"),
            dataIndex: "coursePrice",
            key: "coursePrice",
        },
    ];

    const userInfo: DescriptionsProps["items"] = [
        {
            key: "1",
            label: t("User", "المستخدم"),
            children: order.user?.name,
        },
        {
            key: "2",
            label: t("Email", "البريد الالكتروني"),
            children: order.user?.email,
        },
        {
            key: "3",
            label: t("Phone", "رقم الهاتف"),
            children: order.payment?.phone_number,
        },
        {
            key: "4",
            label: t("Country", "الدولة"),
            children: order.user?.country,
        },
        {
            key: "5",
            label: t("City", "المدينة"),
            children: order.user?.city,
        },
    ];

    const paymentInfo: DescriptionsProps["items"] = [
        {
            key: "3",
            // payment method
            label: t("Payment Method", "طريقة الدفع"),
            children: order.payment?.payment_method,
        },
        {
            key: "4",
            label: t("Payment Status", "حالة الدفع"),
            children: (
                <PaymentStatusBadge status={order.payment?.payment_status!} />
            ),
        },
        {
            key: "5",
            label: "Order Date",
            children: order.created_at,
        },
        {
            // phone number
            key: "8",
            label: t("Phone", "رقم الهاتف"),
            children: order.payment?.phone_number,
        },
        {
            key: "6",
            // payment amount
            label: t("Total before discount", "الاجمالي قبل الخصم"),
            children: order.payment?.total,
        },
        {
            //discount
            key: "Discount",
            label: t("Discount", "الخصم"),
            children: order.payment?.coupon?.value,
        },
        {
            key: "7",
            // payment required
            label: t("Payment Required", "المبلغ المطلوب"),
            children: order.payment?.required_amount,
        },
        {
            key: "paied_amount",
            // payment amount
            label: t("Paid Amount", "المبلغ المدفوع"),
            children: order.payment?.payment_amount,
        },
        {
            key: "9",
            label: t("Coupon", "الكوبون"),
            children: order.payment?.coupon?.code,
        },
        {
            key: "10",
            label: t("Screenshot", "صورة الدفع"),
            children: <Image width={200} src={order.payment?.screenshot} />,
        },
    ];

    useHeaderTitle(<HeaderTitle title={t("Orders", "الاشتراكات")} />);
    return (
        <>
            <Head title="Orders" />
            {order.payment?.payment_status === "pending" && (
                <div className="flex gap-4  justify-end">
                    <Popconfirm
                        title={t(
                            "Are you sure you want to reject this order?",
                            "هل انت متأكد من رفض هذا الطلب؟"
                        )}
                        onConfirm={() =>
                            router.delete(
                                route("admin.orders.destroy", order.id)
                            )
                        }
                        okText={t("Yes", "نعم")}
                        cancelText={t("No", "لا")}
                    >
                        <Button type="primary" danger>
                            {t("Reject Payment", "رفض الدفع")}
                        </Button>
                    </Popconfirm>
                    <Popconfirm
                        title={t(
                            "Are you sure you want to accept this order?",
                            "هل انت متأكد من قبول هذا الطلب؟"
                        )}
                        onConfirm={() =>
                            router.post(
                                route("admin.orders.acceptPayment", order.id)
                            )
                        }
                        okText={t("Yes", "نعم")}
                        cancelText={t("No", "لا")}
                    >
                        <Button type="primary">
                            {t("Accept Payment", "اقبل الدفع")}
                        </Button>
                    </Popconfirm>
                </div>
            )}
            <Descriptions
                title={t("User Info", "بيانات المستخدم")}
                bordered
                items={userInfo}
                className="mb-8"
            />
            <Descriptions
                title={t("Payment Info", "بيانات الدفع")}
                bordered
                items={paymentInfo}
                className="mb-8"
            />
            <Table
                className="shadow"
                dataSource={dataSource}
                columns={columns}
                pagination={false}
            />
        </>
    );
}
