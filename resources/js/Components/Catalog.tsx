import React from "react";
import SectionTitle from "./SectionTitle";
import { Course, Package } from "@/types";
import CourseCard from "./CourseCard";
import { useTranslate } from "@/Layouts/Config";
import PackageCard from "./PackageCard";

export default function Catalog({
    packages,
    courses,
}: {
    packages: Package[];
    courses: Course[];
}) {
    const t = useTranslate();
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="lg:pr-8 lg:pt-4">
                        <h2 className="text-base font-semibold leading-7 text-primary-600">
                            {t("Catalog", "الكتالوج")}
                        </h2>
                        <SectionTitle
                            title={t(
                                <>
                                    Discover{" "}
                                    <span className="down-mark-line">
                                        Courses
                                    </span>
                                </>,
                                <>
                                    اكتشف{" "}
                                    <span className="down-mark-line">
                                        الدورات
                                    </span>
                                </>
                            )}
                        />
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center mt-16">
                            {packages.map((pkg) => (
                                <PackageCard key={pkg.id} pkg={pkg} />
                            ))}
                            {courses.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
