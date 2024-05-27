import Navbar from "@/Components/Navbar";
import { useTranslate } from "@/Layouts/Config";
import { Link } from "@inertiajs/react";
import { Typography } from "antd";

export default function Landing() {
    const t = useTranslate();
    return (
        <div className="bg-gradient">
            <Navbar />
            <div className="flex flex-col items-center pt-12 gap-2 relative arrows-container z-[1] px-4 md:px-0">
                <div className="w-[80%] xl:w-[70%] justify-between absolute top-1/3 arrows z-[-1] hidden lg:flex">
                    <div className="flex flex-col gap-12">
                        <img
                            src="/assets/white_arrow.svg"
                            alt="arrow"
                            className="w-20 r-arrow mx-4"
                        />
                        <img
                            src="/assets/ps_logo.png"
                            alt="arrow"
                            className="w-20"
                        />
                    </div>
                    <div className="flex flex-col gap-12">
                        <img
                            src="/assets/lr_logo.png"
                            alt="arrow"
                            className="w-20 mx-4"
                        />
                        <img
                            src="/assets/white_arrow.svg"
                            alt="arrow"
                            className="w-20 l-arrow"
                        />
                    </div>
                </div>
                <Typography.Title
                    className="text-2xl text-center !text-white"
                    level={1}
                >
                    {t(
                        "Master the Art of Coloring",
                        "ابدأ رحلتك الإبداعية اليوم"
                    )}
                </Typography.Title>
                <Typography.Text className="text-xl text-[#DBD5C4] max-w-[600px] text-center">
                    {t(
                        "Take your photos to the next level with our retouching courses. Learn the secrets of enhancing images, bringing out their true beauty ✨",
                        "انطلق في رحلة تعبيرية مع دوراتنا المصممة بشكل جيد لتناسب جميع المستويات. من الأساسيات المناسبة للمبتدئين إلى التقنيات المتقدمة. ✨"
                    )}
                </Typography.Text>
                <Link
                    href={route("browse.courses.index")}
                    className="bg-primary-400 text-lg hover:cursor-pointer transition-colors hover:bg-primary-600 hover:text-white text-white font-bold py-2 px-4 rounded mt-4 w-fit border-none"
                >
                    {t("Enroll Now!", "سجل الآن!")}
                </Link>
                <div className="flex -mb-4 justify-center mt-16 w-2/3 md:w-1/2">
                    <img
                        className="w-full h-[12rem] md:h-[24rem] object-cover rounded-2xl hero-shadow"
                        src="/assets/hero.jpg"
                        alt="hero"
                    />
                </div>
            </div>
        </div>
    );
}
