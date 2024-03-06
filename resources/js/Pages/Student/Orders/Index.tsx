import HeaderTitle from "@/Components/HeaderTitle";
import PaymentStatusBadge from "@/Components/PaymentStatusBadge";
import { useHeaderTitle } from "@/Hooks/useHeaderTitle";
import { useTranslate } from "@/Layouts/Config";
import StudentLayout from "@/Layouts/StudentLayout";
import { Order, Paginate } from "@/types";
import { Head, router } from "@inertiajs/react";
import { Button, Table, TablePaginationConfig } from "antd";
import Search from "antd/es/input/Search";

Index.layout = (page: any) => <StudentLayout children={page} />;
export default function Index({ orders }: { orders: Order[] }) {
    console.log(orders);
    const t = useTranslate();
    const columns = [
        {
            title: t("Payment Method", "طريقة الدفع"),
            dataIndex: "payment",
            key: "payment",
            render: (payment: any) => payment.payment_method,
        },
        {
            title: t("Payment Status", "حالة الدفع"),
            dataIndex: "payment",
            key: "payment_status",
            render: (payment: any) => (
                <PaymentStatusBadge status={payment.payment_status} />
            ),
        },
        {
            title: t("Payment Amount", "مبلغ الدفع"),
            dataIndex: "payment",
            key: "payment_amount",
            render: (payment: any) => payment.payment_amount,
        },
        {
            title: t("Phone Number", "رقم الهاتف"),
            dataIndex: "payment",
            key: "phone_number",
            render: (payment: any) => payment.phone_number,
        },
        {
            title: t("Date", "التاريخ"),
            dataIndex: "created_at",
            key: "created_at",
        },
        {
            title: t("Action", "العمليات"),
            dataIndex: "id",
            key: "id",
            render: (id: number) => (
                <Button
                    type="link"
                    onClick={() => router.get(route("orders.show", id))}
                >
                    {t("Show", "عرض")}
                </Button>
            ),
        },
    ];

    const dataSource = orders.map((order) => ({
        key: order.id,
        ...order,
    }));


    useHeaderTitle(<HeaderTitle title={t("Orders", "الاشتراكات")} />);
    return (
        <>
            <Head title="Orders" />
            <Table
                className="shadow"
                dataSource={dataSource}
                columns={columns}
            />
        </>
    );
}
