import Catalog from "@/Components/Catalog";
import CourseCard from "@/Components/CourseCard";
import Navbar from "@/Components/Navbar";
import SectionTitle from "@/Components/SectionTitle";
import HomeLayout from "@/Layouts/HomeLayout";
import { Course } from "@/types";
import { Head } from "@inertiajs/react";
import { Typography } from "antd";
import React from "react";

export default function Index({ courses }: { courses: Course[] }) {
    return (
        <>
            <div className="bg-designer min-h-[400px] grid place-items-center">
                <Typography.Title level={1} className="!text-white">
                    Courses
                </Typography.Title>
            </div>
            <Catalog courses={courses} />
        </>
    );
}

Index.layout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>;
