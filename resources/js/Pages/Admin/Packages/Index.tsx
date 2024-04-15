import HeaderTitle from "@/Components/HeaderTitle";
import imagePathResolver from "@/Helpers/imagePathResolver";
import { useHeaderTitle } from "@/Hooks/useHeaderTitle";
import { useTranslate } from "@/Layouts/Config";
import { Package, PageProps } from "@/types";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Head, router } from "@inertiajs/react";
import { App, Button, Table } from "antd";

type Props = {
    pkgs: Package[];
} & PageProps;
export default function Index({ pkgs }: Props) {
    const t = useTranslate();

    const dataSource = pkgs.map((pkg) => ({
        key: pkg.id,
        ...pkg,
        thumbnail: imagePathResolver(pkg.thumbnail),
    }));

    const { modal } = App.useApp();

    const columns = [
        {
            title: "",
            dataIndex: "thumbnail",
            key: "thumbnail",
            render: (thumbnail: string) => (
                <img
                    className="w-12 rounded shadow"
                    src={thumbnail}
                    alt="thumbnail"
                />
            ),
        },
        {
            title: t("Name", "الاسم"),
            dataIndex: "title",
            key: "title",
        },
        {
            title: t("Manage", "إدارة"),
            key: "manage",
            render: (text: any, record: any) => (
                <div className="flex gap-4">
                    <Button
                        type="primary"
                        icon={<EditOutlined />}
                        onClick={() => {
                            router.get(route("packages.edit", record.id));
                        }}
                    >
                        {t("Manage", "إدارة")}
                    </Button>
                    <Button
                        type="primary"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => {
                            modal.confirm({
                                title: t("Are you sure?", "هل أنت متأكد؟"),
                                content: t(
                                    "Do you want to delete this package?",
                                    "هل تريد حذف هذا الكورس؟"
                                ),
                                onOk() {
                                    router.delete(
                                        route("packages.destroy", record.id)
                                    );
                                },
                                onCancel() {},
                                okText: t("Yes", "نعم"),
                                cancelText: t("No", "لا"),
                            });
                        }}
                    >
                        {t("Delete", "حذف")}
                    </Button>
                </div>
            ),
        },
    ];

    useHeaderTitle(<HeaderTitle title={t("Packages", "الباقات")} />);

    return (
        <>
            <Head title="Packages" />
            <Button
                type="primary"
                icon={<PlusOutlined />}
                className="float-end mb-4"
                onClick={() => {
                    router.get(route("packages.create"));
                }}
            >
                {t("Create New Package", "إنشاء باقة جديد")}
            </Button>
            <Table
                className="shadow"
                dataSource={dataSource}
                columns={columns}
                pagination={false}
            />
        </>
    );
}
