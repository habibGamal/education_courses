import ApplicationLogo from '@/Components/ApplicationLogo';
import useStatus from '@/Hooks/useStatus';
import { Link } from '@inertiajs/react';
import { Typography } from 'antd';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    useStatus();
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    {/* <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" /> */}
                    <Typography.Title level={2}>KM</Typography.Title>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
