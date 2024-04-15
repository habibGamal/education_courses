import imagePathResolver from "@/Helpers/imagePathResolver";
import useModal from "@/Hooks/useModal";
import { useTranslate } from "@/Layouts/Config";
import HomeLayout from "@/Layouts/HomeLayout";
import { Course, Resource } from "@/types";
import { ItemType } from "@/types/enums";
import { ShoppingCartOutlined } from "@ant-design/icons";
import {
    AcademicCapIcon,
    AdjustmentsHorizontalIcon,
    CheckBadgeIcon,
    ClockIcon,
    ComputerDesktopIcon,
    DocumentTextIcon,
    FolderIcon,
    PlayIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Head, router } from "@inertiajs/react";
import {
    Button,
    Collapse,
    CollapseProps,
    Divider,
    Modal,
    Rate,
    Typography,
} from "antd";
import { ReactNode } from "react";

const DisplayResources = ({ resources }: { resources: Resource[] }) => (
    <ul>
        {resources.map((resource) => (
            <li key={resource.id}>
                <Typography.Text>{resource.title}</Typography.Text>
            </li>
        ))}
        {resources.length === 0 && (
            <Typography.Text>
                There are no resources in this block
            </Typography.Text>
        )}
    </ul>
);

export default function Show({ course }: { course: Course }) {
    const items: CollapseProps["items"] = course.blocks?.map((block) => ({
        key: block.id.toString(),
        label: block.title,
        children: block.resources ? (
            <DisplayResources resources={block.resources} />
        ) : (
            <Typography.Text>
                There are no resources in this block
            </Typography.Text>
        ),
    }));
    const promoModal = useModal();
    const t = useTranslate();
    return (
        <>
            <Head>
                <title>{course.title}</title>
                <meta
                    name="description"
                    content={course.description + " " + course.keywords}
                />
                <meta property="og:title" content={course.title} />
                <meta property="og:description" content={course.description} />
                <meta
                    property="og:image"
                    content={imagePathResolver(course.thumbnail)}
                />
                <meta property="og:url" content={window.location.href} />
            </Head>
            <Modal title={course.title} {...promoModal} footer={null}>
                <iframe
                    width="100%"
                    height="300px"
                    src={course.promo_video_link ?? ""}
                    title={course.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </Modal>
            <div className="bg-designer min-h-[400px] grid place-items-center">
                <Typography.Title level={1} className="!text-white">
                    {t("Course Details", "تفاصيل الدورة")}
                </Typography.Title>
            </div>
            <div className="container -mt-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                    <div className="bg-white rounded-xl p-6 col-span-2">
                        <Typography.Title level={2}>
                            {course.title}
                        </Typography.Title>
                        <div className="flex gap-2 items-center">
                            <Rate disabled defaultValue={5} />
                            <Typography.Text>4.9 (20)</Typography.Text>
                        </div>
                        <Divider />
                        <div>
                            <Typography.Title level={3}>
                                <DocumentTextIcon
                                    className={`w-5 ${t("mr-2", "ml-2")}`}
                                />
                                {t("Description", "الوصف")}
                            </Typography.Title>
                            <Typography.Text>
                                {course.description}
                            </Typography.Text>
                        </div>
                        <div>
                            <Typography.Title level={3}>
                                <AcademicCapIcon
                                    className={`w-5 ${t("mr-2", "ml-2")}`}
                                />
                                {t("What you will learn", "ما ستتعلمه")}
                            </Typography.Title>
                            <Typography.Text>
                                {course.what_will_learn}
                            </Typography.Text>
                        </div>
                        <div>
                            <Typography.Title level={3}>
                                <CheckBadgeIcon
                                    className={`w-5 ${t("mr-2", "ml-2")}`}
                                />
                                {t("Requirements", "المتطلبات")}
                            </Typography.Title>
                            <Typography.Text>
                                {course.requirements}
                            </Typography.Text>
                        </div>
                        <div>
                            <Typography.Title level={3}>
                                <FolderIcon
                                    className={`w-5 ${t("mr-2", "ml-2")}`}
                                />
                                {t("Course Content", "محتوى الدورة")}
                                <Typography.Text
                                    type="secondary"
                                    className="mx-2"
                                >
                                    • {course.blocks?.length}{" "}
                                    {t("lesson", "درس")}
                                </Typography.Text>
                            </Typography.Title>
                            <Collapse
                                items={items}
                                bordered={false}
                                defaultActiveKey={["1"]}
                            />
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6">
                        <div className="relative">
                            <img
                                className="w-full max-h-[275px] object-cover rounded-xl"
                                src={imagePathResolver(course.thumbnail)}
                                alt="course"
                            />
                            <span
                                onClick={() =>
                                    course.promo_video_link
                                        ? promoModal.showModal()
                                        : null
                                }
                                className="popup-video grid place-items-center "
                            >
                                <PlayIcon className="w-12 h-12" />
                            </span>
                        </div>
                        <div className="my-4">
                            <Typography.Text strong className="text-4xl">
                                {course.discount_price} {t("EGP", "جنيه")}{" "}
                            </Typography.Text>
                            <Typography.Text
                                delete
                                type="secondary"
                                className="text-2xl"
                            >
                                {course.price} {t("EGP", "جنيه")}
                            </Typography.Text>
                        </div>
                        <Info
                            icon={<AdjustmentsHorizontalIcon className="w-4" />}
                            featureName={t("Level", "المستوى")}
                            featureValue={course.level}
                        />
                        <Divider className="my-2" />
                        <Info
                            icon={<ComputerDesktopIcon className="w-4" />}
                            featureName={t("Chapters", "الفصول")}
                            featureValue={`${course.blocks?.length} ${t(
                                "Chapters",
                                "فصل"
                            )}`}
                        />
                        <Divider className="my-2" />
                        <Info
                            icon={<ClockIcon className="w-4" />}
                            featureName={t("Duration", "المدة")}
                            featureValue={course.duration}
                        />
                        <Divider className="my-2" />
                        <Info
                            icon={<UserGroupIcon className="w-4" />}
                            featureName={t("Enrolled", "المسجلين")}
                            featureValue={course.total_enrolled.toString()}
                        />
                        <Button
                            type="primary"
                            size="large"
                            block
                            className="my-4"
                            icon={<ShoppingCartOutlined />}
                            onClick={() =>
                                router.post(route("cart.addCartItem"), {
                                    item_id: course.id,
                                    item_type: ItemType.Course,
                                })
                            }
                        >
                            {t("Add to Cart", "أضف إلى السلة")}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

const Info = ({
    icon,
    featureName,
    featureValue,
}: {
    icon: ReactNode;
    featureName: ReactNode;
    featureValue: string;
}) => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-2">
                {icon}
                <Typography.Text>{featureName}</Typography.Text>
            </div>
            <Typography.Text>{featureValue}</Typography.Text>
        </div>
    );
};

Show.layout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>;
