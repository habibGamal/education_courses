import FormErrorMapping from "@/Helpers/ErrorMapping";
import { usePage } from "@inertiajs/react";
import { FormInstance } from "antd";
import { useEffect } from "react";

const useFormErrors = (form: FormInstance) => {
    const { errors } = usePage().props;
    useEffect(() => {
        const formErrorMapping = new FormErrorMapping(form);
        formErrorMapping.clearFormErrors();
        const isErrors = Object.keys(errors).length > 0;
        if (isErrors) return formErrorMapping.updateErrors(errors);
    }, [errors]);
};

export default useFormErrors;
