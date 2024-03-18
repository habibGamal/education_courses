import Catalog from "@/Components/Catalog";
import { useTranslate } from "@/Layouts/Config";
import HomeLayout from "@/Layouts/HomeLayout";
import { Course } from "@/types";
import { Head } from "@inertiajs/react";
import { Typography } from "antd";
import React from "react";

export default function Index({ courses }: { courses: Course[] }) {
    const t = useTranslate();
    return (
        <>
            <Head title="Courses" />
            <div className="bg-designer min-h-[400px] grid place-items-center">
                <Typography.Title level={1} className="!text-white">
                    {t("Courses", "الدورات")}
                </Typography.Title>
            </div>
            <Catalog courses={courses} />
        </>
    );
}

Index.layout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>;
