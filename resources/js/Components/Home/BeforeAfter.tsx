import SectionTitle from "@/Components/SectionTitle";
import { useTranslate } from "@/Layouts/Config";
import { Badge, Typography } from "antd";
import CompersionContainer from "../CompersionContainer";

const data = [
    {
        beforeImg: "/assets/before_and_after/1a.jpg",
        afterImg: "/assets/before_and_after/1b.jpg",
    },
    {
        beforeImg: "/assets/before_and_after/2a.jpg",
        afterImg: "/assets/before_and_after/2b.jpg",
    },
    {
        beforeImg: "/assets/before_and_after/3a.jpg",
        afterImg: "/assets/before_and_after/3b.jpg",
    },
    {
        beforeImg: "/assets/before_and_after/4a.jpg",
        afterImg: "/assets/before_and_after/4b.jpg",
    },
    {
        beforeImg: "/assets/before_and_after/5a.jpg",
        afterImg: "/assets/before_and_after/5b.jpg",
    },
    {
        beforeImg: "/assets/before_and_after/6a.jpg",
        afterImg: "/assets/before_and_after/6b.jpg",
    },
    {
        beforeImg: "/assets/before_and_after/7a.jpg",
        afterImg: "/assets/before_and_after/7b.jpg",
    },
    {
        beforeImg: "/assets/before_and_after/8a.jpg",
        afterImg: "/assets/before_and_after/8b.jpg",
    },
    {
        beforeImg: "/assets/before_and_after/9a.jpg",
        afterImg: "/assets/before_and_after/9b.jpg",
    },
    {
        beforeImg: "/assets/before_and_after/10a.jpg",
        afterImg: "/assets/before_and_after/10b.jpg",
    },
    {
        beforeImg: "/assets/before_and_after/11a.jpg",
        afterImg: "/assets/before_and_after/11b.jpg",
    },
];
export default function BeforeAfter() {
    const t = useTranslate();
    return (
        <div className="overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="lg:pr-8 lg:pt-4">
                        <h2 className="text-base font-semibold leading-7 text-primary-600">
                            {t("What you will do?", "هتوصل لأيه؟")}
                        </h2>
                        <SectionTitle
                            title={t(
                                <>
                                    Before & {""}
                                    <span className="down-mark-line">
                                        after
                                    </span>
                                </>,
                                <>
                                    قبل و{" "}
                                    <span className="down-mark-line">بعد</span>
                                </>
                            )}
                        />
                        {/* <div className="">
                            <CompersionContainer
                                beforeImg="/assets/before_and_after/1a.jpg"
                                afterImg="/assets/before_and_after/1b.jpg"
                            />
                        </div> */}

                        <div className="columns-1 md:columns-2 xl:columns-3 gap-7  mt-16 ltr">
                            {data.map((item, i) => (
                                <div
                                    className=" break-inside-avoid mb-8"
                                    key={i}
                                >
                                    <CompersionContainer
                                        key={i}
                                        beforeImg={item.beforeImg}
                                        afterImg={item.afterImg}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="columns-1 md:columns-2  gap-7 mt-16"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
