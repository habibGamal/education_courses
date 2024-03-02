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
import { Order, User } from "@/types";
import PaymentStatusBadge from "@/Components/PaymentStatusBadge";
import { useAdminHeaderTitle } from "@/Hooks/useAdminHeaderTitle";
import { render } from "react-dom";

export default function Show({ student }: { student: User }) {
    console.log(student);
    const t = useTranslate();
    const dataSource = student.enrolled_courses!.map((enrolled) => ({
        key: enrolled.id,
        studentId: student.id,
        courseId: enrolled.course?.id,
        courseName: enrolled.course?.title,
        coursePrice: enrolled.course?.price,
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
            title: t("Action", "العملية"),
            dataIndex: "courseId",
            key: "courseId",
            render: (id: number, record: any) => (
                <Popconfirm
                    title={t("Are you sure?", "هل انت متأكد؟")}
                    onConfirm={() =>
                        router.post(
                            route("admin.students.blockFromCourse", [
                                record.studentId,
                                id,
                            ])
                        )
                    }
                    okText={t("Yes", "نعم")}
                    cancelText={t("No", "لا")}
                >
                    <Button type="primary" danger>
                        {t("Block", "حجب")}
                    </Button>
                </Popconfirm>
            ),
        },
    ];

    const userInfo: DescriptionsProps["items"] = [
        {
            key: "1",
            label: t("User", "المستخدم"),
            children: student.name,
        },
        {
            key: "2",
            label: t("Email", "البريد الالكتروني"),
            children: student.email,
        },
        {
            key: "3",
            label: t("Phone", "رقم الهاتف"),
            children: student.phone,
        },
        {
            key: "4",
            label: t("Country", "الدولة"),
            children: student.country,
        },
        {
            key: "5",
            label: t("City", "المدينة"),
            children: student.city,
        },
    ];

    useAdminHeaderTitle(<HeaderTitle title={t("Students", "الطلاب")} />);
    return (
        <>
            <Head title="Orders" />

            <Descriptions
                title={t("User Info", "بيانات المستخدم")}
                bordered
                items={userInfo}
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
