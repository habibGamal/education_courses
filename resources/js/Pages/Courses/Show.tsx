import useModal from "@/Hooks/useModal";
import HomeLayout from "@/Layouts/HomeLayout";
import { Course, Resource } from "@/types";
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
import { router } from "@inertiajs/react";
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
    return (
        <>
            <Modal title={course.title} {...promoModal} footer={null}>
                <video
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    controls
                    className="w-full"
                ></video>
            </Modal>
            <div className="bg-designer min-h-[400px] grid place-items-center">
                <Typography.Title level={1} className="!text-white">
                    Course Details
                </Typography.Title>
            </div>
            <div className="container -mt-6 relative z-10">
                <div className="grid grid-cols-3 gap-4 items-start">
                    <div className="bg-white rounded-xl p-6 col-span-2">
                        <Typography.Title level={2}>
                            {course.title}
                        </Typography.Title>
                        <div className="flex gap-2 items-center">
                            <Rate disabled defaultValue={2} />
                            <Typography.Text>4.9 (20)</Typography.Text>
                        </div>
                        <Divider />
                        <div>
                            <Typography.Title level={3}>
                                <DocumentTextIcon className="w-5 mr-2" />
                                Description
                            </Typography.Title>
                            <Typography.Text>
                                {course.description}
                            </Typography.Text>
                        </div>
                        <div>
                            <Typography.Title level={3}>
                                <AcademicCapIcon className="w-5 mr-2" />
                                What you'll learn
                            </Typography.Title>
                            <Typography.Text>
                                {course.what_will_learn}
                            </Typography.Text>
                        </div>
                        <div>
                            <Typography.Title level={3}>
                                <CheckBadgeIcon className="w-5 mr-2" />
                                Requirements
                            </Typography.Title>
                            <Typography.Text>
                                {course.requirements}
                            </Typography.Text>
                        </div>
                        <div>
                            <Typography.Title level={3}>
                                <FolderIcon className="w-5 mr-2" />
                                Curriculum
                                <Typography.Text
                                    type="secondary"
                                    className="mx-2"
                                >
                                    • {course.blocks?.length} lectures
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
                                className="w-full"
                                src={course.thumbnail}
                                alt="course"
                            />
                            <span
                                onClick={() => promoModal.showModal()}
                                className="popup-video grid place-items-center "
                            >
                                <PlayIcon className="w-12 h-12" />
                            </span>
                        </div>
                        <div className="my-4">
                            <Typography.Text strong className="text-4xl">
                                {course.discount_price} EGP
                            </Typography.Text>
                            <Typography.Text
                                delete
                                type="secondary"
                                className="text-2xl"
                            >
                                {course.price} EGP
                            </Typography.Text>
                        </div>
                        <Info
                            icon={<AdjustmentsHorizontalIcon className="w-4" />}
                            featureName="Level"
                            featureValue={course.level}
                        />
                        <Divider className="my-2" />
                        <Info
                            icon={<ComputerDesktopIcon className="w-4" />}
                            featureName="Lectures"
                            featureValue={`${course.blocks?.length} Blocks`}
                        />
                        <Divider className="my-2" />
                        <Info
                            icon={<ClockIcon className="w-4" />}
                            featureName="Duration"
                            featureValue={course.duration}
                        />
                        <Divider className="my-2" />
                        <Info
                            icon={<UserGroupIcon className="w-4" />}
                            featureName="Total Enrolled"
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
                                    course_id: course.id,
                                })
                            }
                        >
                            Add to Cart
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
    featureName: string;
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
