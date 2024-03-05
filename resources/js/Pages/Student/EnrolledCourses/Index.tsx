import EnrolledCourseCard from "@/Components/EnrolledCourseCard";
import HeaderTitle from "@/Components/HeaderTitle";
import { useHeaderTitle } from "@/Hooks/useHeaderTitle";
import { useTranslate } from "@/Layouts/Config";
import StudentLayout from "@/Layouts/StudentLayout";
import { EnrolledCourses } from "@/types";
import React from "react";

Index.layout = (page: React.ReactNode) => <StudentLayout>{page}</StudentLayout>;
export default function Index({
    enrolledCourses,
}: {
    enrolledCourses: EnrolledCourses[];
}) {
    console.log(enrolledCourses);
    const t = useTranslate();
    useHeaderTitle(<HeaderTitle title={t("My Courses", "كورساتي")} />);
    return (
        <div className="grid grid-cols-3 gap-4 justify-items-center">
            {enrolledCourses.map((enrolledCourse) => (
                <EnrolledCourseCard key={enrolledCourse.id} id={enrolledCourse.id} course={enrolledCourse.course!} />
            ))}
        </div>
    );
}
