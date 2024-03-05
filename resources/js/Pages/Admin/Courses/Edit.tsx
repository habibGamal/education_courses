import BlockIndex from "@/Components/Courses/BlockIndex";
import CourseForm from "@/Components/Courses/CourseForm";
import HeaderTitle from "@/Components/HeaderTitle";
import ResortingItems from "@/Components/ResortingItems";
import { useHeaderTitle } from "@/Hooks/useHeaderTitle";
import useResort from "@/Hooks/useResort";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useTranslate } from "@/Layouts/Config";
import { Course } from "@/types";
import { router } from "@inertiajs/react";
import { Breadcrumb, Collapse, CollapseProps, Form, TreeDataNode } from "antd";

export default function Edit({ course }: { course: Course }) {
    const t = useTranslate();

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values);
        if (values.thumbnail?.file)
            values.thumbnail = values.thumbnail.file.originFileObj;
        else delete values.thumbnail;
        router.put(route("courses.update", { id: course.id }), values);
    };

    const onResortBlocks = (data: TreeDataNode[]) => {
        const blocks = data.map((block, index) => ({
            id: block.key,
            sort_order: index,
        }));
        router.post(route("courses.updateBlocksOrder"), {
            blocks: blocks as any,
        });
    };

    const [blocksOrderData, setBlocksOrderData] = useResort(
        course.blocks!,
        (data) =>
            data.map((block) => ({
                key: block.id,
                title: block.title,
            }))
    );
    const items: CollapseProps["items"] = [
        {
            key: "1",
            label: t("Course Details", "تفاصيل الكورس"),
            children: (
                <CourseForm
                    form={form}
                    onFinish={onFinish}
                    initialValues={course}
                />
            ),
        },
        {
            key: "2",
            label: t("Course Content", "محتوى الكورس"),
            children: <BlockIndex course={course} />,
        },
        {
            key: "3",
            label: t("Course Content Ordering", "ترتيب محتوى الكورس"),
            children: (
                <ResortingItems
                    gData={blocksOrderData}
                    onFinish={onResortBlocks}
                    setGData={setBlocksOrderData}
                />
            ),
        },
    ];

    useHeaderTitle(<HeaderTitle title={t("Courses", "الكورسات")} />);
    return (
        <>
            <Breadcrumb
                className="mb-6"
                items={[
                    {
                        title: t("Edit Course", "تعديل الكورس"),
                    },
                    {
                        title: course.title,
                    },
                ]}
            />
            <Collapse items={items} defaultActiveKey={["2"]} />
        </>
    );
}
