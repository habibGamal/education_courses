import { Link, Head } from "@inertiajs/react";
import { Course, PageProps } from "@/types";
import Navbar from "@/Components/Navbar";
import { Typography } from "antd";
import CourseCard from "@/Components/CourseCard";
import SectionTitle from "@/Components/SectionTitle";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    courses,
}: PageProps<{
    laravelVersion: string;
    phpVersion: string;
    courses: Course[];
}>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gradient">
                <Navbar />
                <div className="flex flex-col items-center pt-12 gap-2 ">
                    <Typography.Title
                        className="text-2xl text-center !text-white"
                        level={1}
                    >
                        Master the Art of Coloring
                    </Typography.Title>
                    <Typography.Text className="text-xl text-white max-w-[600px] text-center">
                        Take your photos to the next level with our retouching
                        courses. Learn the secrets of enhancing images, bringing
                        out their true beauty ✨
                    </Typography.Text>
                    <button className="bg-primary-400  text-lg hover:cursor-pointer transition-colors hover:bg-secondary-800 text-white font-bold py-2 px-4 rounded mt-4 w-fit border-none">
                        Ignite Your Imagination – Enroll Now!
                    </button>
                    <div className="flex -mb-8 justify-center mt-12 w-1/2">
                        <img
                            className="w-full h-64 object-cover rounded-2xl hero-shadow"
                            src="/assets/hero.jpg"
                            alt="hero"
                        />
                    </div>
                </div>
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

Welcome.layout = null;
