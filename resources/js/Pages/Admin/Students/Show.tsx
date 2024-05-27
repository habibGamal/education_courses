import HeaderTitle from "@/Components/HeaderTitle";
import { useHeaderTitle } from "@/Hooks/useHeaderTitle";
import useModal from "@/Hooks/useModal";
import { useTranslate } from "@/Layouts/Config";
import { Course, User } from "@/types";
import { Head, Link, router } from "@inertiajs/react";
import {
    Button,
    Checkbox,
    Descriptions,
    DescriptionsProps,
    Form,
    Modal,
    Popconfirm,
    Table,
} from "antd";

export default function Show({
    student,
    courses,
}: {
    student: User;
    courses: Course[];
}) {
    console.log(student);
    const t = useTranslate();
    const dataSource = student.enrolled_courses!.map((enrolled) => ({
        key: enrolled.id,
        studentId: student.id,
        courseId: enrolled.course?.id,
        courseName: enrolled.course?.title,
        coursePrice: enrolled.course?.price,
    }));
    const columns = [
        {
            title: t("Courses", "الدورات"),
            dataIndex: "courseName",
            key: "courseName",
            render: (text: string, record: any) => (
                <Link href={route("courses.edit", record.courseId)}>
                    {text}
                </Link>
            ),
        },
        {
            title: t("Action", "العملية"),
            dataIndex: "courseId",
            key: "courseId",
            render: (id: number, record: any) => (
                <Popconfirm
                    title={t("Are you sure?", "هل انت متأكد؟")}
                    onConfirm={() =>
                        router.post(
                            route("admin.students.blockFromCourse", [
                                record.studentId,
                                id,
                            ])
                        )
                    }
                    okText={t("Yes", "نعم")}
                    cancelText={t("No", "لا")}
                >
                    <Button type="primary" danger>
                        {t("Block", "حجب")}
                    </Button>
                </Popconfirm>
            ),
        },
    ];

    const userInfo: DescriptionsProps["items"] = [
        {
            key: "1",
            label: t("User", "المستخدم"),
            children: student.name,
        },
        {
            key: "2",
            label: t("Email", "البريد الالكتروني"),
            children: student.email,
        },
        {
            key: "3",
            label: t("Phone", "رقم الهاتف"),
            children: student.phone,
        },
        {
            key: "4",
            label: t("Country", "الدولة"),
            children: student.country,
        },
        {
            key: "5",
            label: t("City", "المدينة"),
            children: student.city,
        },
    ];

    useHeaderTitle(<HeaderTitle title={t("Students", "الطلاب")} />);

    const initCourses = student.enrolled_courses!.map(
        (enrolled) => enrolled.course?.id
    );
    const options = courses.map((course) => ({
        label: course.title,
        value: course.id,
    }));
    console.log(initCourses);

    const modal = useModal();

    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        router.post(route("admin.students.addToCourse", student.id), values);
        modal.closeModal();
    };
    return (
        <>
            <Head title="Students" />

            <Descriptions
                title={t("User Info", "بيانات المستخدم")}
                bordered
                items={userInfo}
                className="mb-8"
            />
            <Button
                className="ltr:ml-auto rtl:mr-auto block mb-4"
                type="primary"
                onClick={() => modal.showModal()}
            >
                {t("Add user to course", "اضافة المستخدم لدورة")}
            </Button>
            <Modal
                {...modal}
                footer={null}
                title={t("Add user to course", "اضافة المستخدم لدورة")}
                destroyOnClose
            >
                <Form
                    name="add_user_to_course"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                    labelAlign="left"
                    form={form}
                    initialValues={{ courses: initCourses }}
                >
                    <Form.Item label={t("Courses", "الكورسات")} name="courses">
                        <Checkbox.Group
                            options={options}
                            className="w-full grid grid-cols-1 gap-4"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {t("Save", "حفظ")}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <Table
                className="shadow"
                dataSource={dataSource}
                columns={columns}
                pagination={false}
            />
        </>
    );
}
