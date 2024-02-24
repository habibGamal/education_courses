import useModal from "@/Hooks/useModal";
import { useTranslate } from "@/Layouts/Config";
import { Block } from "@/types";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { router } from "@inertiajs/react";
import { App, Button, Form, Modal, Table } from "antd";
import ResourceForm from "./ResourceForm";

export default function ResourceIndex({ block }: { block: Block }) {
    const { modal } = App.useApp();
    const blocks = block.resources
        ? block.resources.map((resource) => ({
              key: resource.id,
              ...resource,
          }))
        : [];

    const t = useTranslate();
    const columns = [
        {
            title: t("Resource Name", "اسم المحتوى"),
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
                            router.get(route("resources.edit", record.id));
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
                                    "Do you want to delete this resource?",
                                    "هل تريد حذف هذا المحتوى؟"
                                ),
                                onOk() {
                                    router.delete(
                                        route("resources.destroy", record.id)
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
        router.post(route("resources.store"), {
            ...values,
            block_id: block.id,
        });
        formModal.closeModal();
        form.resetFields();
    };
    return (
        <div>
            <Modal
                title={t("Create New Resource", "إنشاء محتوى جديد")}
                {...formModal}
                footer={null}
            >
                <ResourceForm form={form} onFinish={onFinish} />
            </Modal>
            <Button
                type="primary"
                icon={<PlusOutlined />}
                className="float-end mb-4"
                onClick={() => {
                    formModal.showModal();
                    // router.get(route("courses.create"));
                }}
            >
                {t("Create New Resource", "إنشاء محتوى جديد")}
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
