import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Navbar from "@/Components/Navbar";
import { Typography } from "antd";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
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
                        <img className="w-full h-64 object-cover rounded-2xl hero-shadow" src="/assets/hero.jpg" alt="hero" />
                    </div>
                </div>
            </div>
        </>
    );
}

Welcome.layout = null;
