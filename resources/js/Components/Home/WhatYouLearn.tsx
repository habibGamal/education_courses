import SectionTitle from "@/Components/SectionTitle";
import { useTranslate } from "@/Layouts/Config";
import { Badge, Typography } from "antd";

const beautyData = [
    {
        text: "الي يخليك تطلع بصوره كويسه عشان تبدا فيها ريتاتش هوا تلوين الفايل الرووو ودا انا عاملو ف اول فيديو هاخدك من الاول خالص عشان تبقي عارف ايه الي لازم يتعمل ف الرووو ف صور البيوتي بالذات واي صوره بورتريه + هعرفك حاجه جديده بعرف اطلع بيها وايت بلنس احسن حاجه ودا بيريحك ف تقفيل صورتك وهوا ال Skin 3d profil",
        beforeImg: "/assets/beauty2/1a.jpg",
    },
    {
        text: "وبعد كده هنخرج الصوره من الايت روم وهنبدا ب اول حاجه الهيلنج وهعرفك ازي قد ايه الهيلنج بيفرق ف اي حاجه بتعملها ف الصوره ولو مهتمتش بي صورتك عممرها م هتكون حلوه",
        beforeImg: "/assets/beauty2/2a.jpg",
    },
    {
        text: "وبعدين والاهم الوكال دودج & بيرن اكيد كلنا بنشوف الموضوع صعب بس الي ممكن متكونش تعرفو ان التكنيك دا اهم حاجه لازم تكون عارفو صح عشان تكون ايديتور مميز وانا ف الكورس هخليك تشتغل لوكال بطريقه احترافيه ولو انت متعرفوش اصلا بعد م تخرج من الكورس وبعد التطبيق بتاعك هتعرف تشتغل بي اكنك بروفشنال",
        beforeImg: "/assets/beauty/3.jpg",
    },
    {
        text: "غير هعلمك رسم الرموش والحواجب وإعداد فرشاة للرسم ورسم الشعر ودي حجات ممكن انت متكونش واخد بالك منها هخليك تعرف تشوفها صح وازي هتفرق معاك",
        beforeImg: "/assets/beauty/4.jpg",
    },
    {
        text: "وهعرفك الطريقه الصح الي بتميز شغلي ف الريتاتش وهيا الفركونسي ازي تشتغل بي صح وبدل م تضيع بي ملامح صورتك هخليك ازي تعرف تخلي بي صورتك باينه مرسومه ومتمشيش بي عشوائي",
        beforeImg: "/assets/beauty/5.jpg",
    },
    {
        text: "جلوبال دودج & بيرن كتير من الناس بتستخدمو غلط هعرفك ازي استخدامو الصح وهوا اكتر حاجه بيظهر كل الشغل الي انت عملتو ف الصوره من غيرو صورتك هتبان عاديه جدا ولو مستخددمتوش صح ممكن تبوظ اي حاجه انت كنت مصلحها ف الصوره عشان كده انا مهتم بي جدا وشارحهولك باكتر من طريقه وبسلاسه ف الشرح عشان المعلومه توصلك صح وبسهوله",
        beforeImg: "/assets/beauty/6.jpg",
    },
    {
        text: "التلوين وتفنيش الصوره",
        beforeImg: "/assets/beauty/7.jpg",
    },
    {
        text: "ازي هنستفيد ف شغلنا ب بلجن ال tk",
        beforeImg: "/assets/beauty/8.jpg",
    },
    {
        text: "طرق مختلفه لعمل الشارب بطريقه صحيحه",
        beforeImg: "/assets/beauty/9.jpg",
    },
];
export default function WhatYouLearn() {
    const t = useTranslate();
    return (
        <div className="overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="lg:pr-8 lg:pt-4">
                        <h2 className="text-base font-semibold leading-7 text-primary-600">
                            {t("Beauty Course", "برنامج كورس البيوتي")}
                        </h2>
                        <SectionTitle
                            title={t(
                                <>
                                    What you will {""}
                                    <span className="down-mark-line">
                                        learn
                                    </span>
                                </>,
                                <>
                                    هتتعلم{" "}
                                    <span className="down-mark-line">اي</span>
                                </>
                            )}
                        />
                        <div className=""></div>
                        <div className="columns-1 md:columns-2  gap-7 mt-16">
                            {beautyData.map((item, i) => (
                                <div
                                    className="break-inside-avoid mb-8 bg-white rounded-lg p-4 relative"
                                    key={i}
                                >
                                    <img
                                        className="h-[300px] object-cover w-full rounded-lg"
                                        src={item.beforeImg}
                                        alt="Gallery image"
                                    />
                                    <div className="strong text-3xl w-8 h-8 grid place-items-center space-grotesk absolute rounded-full bg-white top-8 right-8">
                                        <Badge
                                            status="processing"
                                            className="line-h-0"
                                        />
                                    </div>
                                    <Typography.Paragraph className="text-lg tajawal rtl xl:text-xl  mt-6">
                                        • {item.text}
                                    </Typography.Paragraph>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
