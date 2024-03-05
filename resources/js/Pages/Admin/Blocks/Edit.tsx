import BlockForm from "@/Components/Courses/BlockForm";
import ResourceIndex from "@/Components/Courses/ResourceIndex";
import HeaderTitle from "@/Components/HeaderTitle";
import IsolateFormStyle from "@/Components/IsolateFormStyle";
import ResortingItems from "@/Components/ResortingItems";
import { useHeaderTitle } from "@/Hooks/useHeaderTitle";
import useResort from "@/Hooks/useResort";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useTranslate } from "@/Layouts/Config";
import { Block } from "@/types";
import { Link, router } from "@inertiajs/react";
import {
    Breadcrumb,
    Collapse,
    CollapseProps,
    Form,
    TreeDataNode,
    Typography,
} from "antd";

export default function Edit({
    courseTitle,
    block,
}: {
    courseTitle: string;
    block: Block;
}) {
    const t = useTranslate();

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        router.put(route("blocks.update", { id: block.id }), values);
    };
    const onResortResources = (data: TreeDataNode[]) => {
        const resources = data.map((resource, index) => ({
            id: resource.key,
            sort_order: index,
        }));
        router.post(route("blocks.updateResourcesOrder"), {
            resources: resources as any,
        });
    };

    const [resourcesOrderData, setResourcesOrderData] = useResort(
        block.resources!,
        (data) =>
            data.map((resource) => ({
                key: resource.id,
                title: resource.title,
            }))
    );
    const items: CollapseProps["items"] = [
        {
            key: "2",
            label: t("Block Content", "محتوى البلوك"),
            children: <ResourceIndex block={block} />,
        },
        {
            key: "3",
            label: t("Block Content Ordering", "ترتيب محتوى البلوك"),
            children: (
                <ResortingItems
                    gData={resourcesOrderData}
                    onFinish={onResortResources}
                    setGData={setResourcesOrderData}
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
                        title: t("Edit Block", "تعديل البلوك"),
                    },
                    {
                        title: (
                            <Link href={route("courses.edit", block.course_id)}>
                                {courseTitle}
                            </Link>
                        ),
                    },
                    {
                        title: block.title,
                    },
                ]}
            />
            <IsolateFormStyle title={t("Edit Block Details", "تعديل البلوك")}>
                <BlockForm
                    form={form}
                    onFinish={onFinish}
                    initialValues={block}
                />
            </IsolateFormStyle>
            <Collapse items={items} defaultActiveKey={["2"]} />
        </>
    );
}
