import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import HeaderTitle from "@/Components/HeaderTitle";
import { useTranslate } from "@/Layouts/Config";

export default function Dashboard({ auth }: PageProps) {
    const t = useTranslate();
    return (
        <AuthenticatedLayout
            header={<HeaderTitle title={t("Dashboard", "لوحة التحكم")} />}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
