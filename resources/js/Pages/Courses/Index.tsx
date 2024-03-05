import CourseCard from "@/Components/CourseCard";
import Navbar from "@/Components/Navbar";
import SectionTitle from "@/Components/SectionTitle";
import HomeLayout from "@/Layouts/HomeLayout";
import { Course } from "@/types";
import { Head } from "@inertiajs/react";
import { Typography } from "antd";
import { Footer } from "antd/es/layout/layout";
import React from "react";

export default function Index({courses}: {courses: Course[]}) {
    return (
        <>
            <div className="bg-designer min-h-[400px] grid place-items-center">
                <Typography.Title level={1} className="!text-white">
                    Courses
                </Typography.Title>
            </div>
            <div className="container my-32">
                <SectionTitle
                    title={
                        <>
                            Discover{" "}
                            <span className="down-mark-line">Courses</span>
                        </>
                    }
                />
                <div className="grid grid-cols-3 gap-4 justify-items-center mt-16">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </>
    );
}

Index.layout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>;
