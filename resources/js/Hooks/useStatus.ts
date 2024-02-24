import { useTranslate } from "@/Layouts/Config";
import { usePage } from "@inertiajs/react";
import { App } from "antd";
import { useEffect } from "react";

const useStatus = () => {
    const props = usePage().props;
    const t = useTranslate();
    const { message } = App.useApp();
    useEffect(() => {
        const success = props.success as [string, string] | undefined;
        if (success) message.success(t(success[0], success[1]));
    }, [props]);
};

export default useStatus;
