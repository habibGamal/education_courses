import useModal from "@/Hooks/useModal";
import { useTranslate } from "@/Layouts/Config";
import { Course } from "@/types";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { router } from "@inertiajs/react";
import { App, Button, Form, Modal, Table } from "antd";
import BlockForm from "./BlockForm";

export default function BlockIndex({ course }: { course: Course }) {
    const { modal } = App.useApp();
    const blocks = course.blocks
        ? course.blocks.map((block) => ({
              key: block.id,
              ...block,
          }))
        : [];

    const t = useTranslate();
    const columns = [
        {
            title: t("Block Name", "اسم البلوك"),
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
                            router.get(route("blocks.edit", record.id));
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
                                    "Do you want to delete this block?",
                                    "هل تريد حذف هذا البلوك؟"
                                ),
                                onOk() {
                                    router.delete(
                                        route("blocks.destroy", record.id)
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
    const formModal = useModal();
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        router.post(route("blocks.store"), { ...values, course_id: course.id });
        formModal.closeModal();
        form.resetFields();
    };
    return (
        <div>
            <Modal
                title={t("Create New Block", "إنشاء بلوك جديد")}
                {...formModal}
                footer={null}
            >
                <BlockForm form={form} onFinish={onFinish} />
            </Modal>
            <Button
                type="primary"
                icon={<PlusOutlined />}
                className="float-end mb-4"
                onClick={() => {
                    formModal.showModal();
                }}
            >
                {t("Create New Block", "إنشاء بلوك جديد")}
            </Button>
            <Table
                className="shadow"
                dataSource={blocks}
                columns={columns}
                pagination={false}
            />
        </div>
    );
}
