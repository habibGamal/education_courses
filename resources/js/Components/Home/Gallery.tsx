import { useTranslate } from "@/Layouts/Config";
import SectionTitle from "../SectionTitle";

export default function Gallery() {
    const t = useTranslate();
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="lg:pr-8 lg:pt-4">
                        <h2 className="text-base font-semibold leading-7 text-primary-600">
                            {t("Gallery", "المعرض")}
                        </h2>
                        <SectionTitle
                            title={t(
                                <>
                                    My {""}
                                    <span className="down-mark-line">
                                        Works
                                    </span>
                                </>,
                                <>
                                    أعمالي{" "}
                                    <span className="down-mark-line">
                                        الفنية
                                    </span>
                                </>
                            )}
                        />
                        <div className="columns-1 md:columns-2 xl:columns-3 gap-7  mt-16">
                            {Array.from({ length: 9 }).map((_, i) => (
                                <div
                                    className=" break-inside-avoid mb-8"
                                    key={i}
                                >
                                    <img
                                        className="h-auto max-w-full rounded-lg"
                                        src={`/assets/gallery/${i + 1}.jpg`}
                                        alt="Gallery image"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
