import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import { Upload, UploadProps } from "antd";

export default function FileUpload(props: any) {
    const fileUploadProps: UploadProps = {
        name: "thumbnail",
        customRequest: ({ file, onSuccess }) => {
            setTimeout(() => {
                onSuccess ? onSuccess("ok") : null;
            }, 0);
        },
        listType: "picture-card",
        maxCount: 1,
        ...props,
    };
    return (
        <ImgCrop>
            <Upload {...fileUploadProps}>
                <UploadOutlined />
            </Upload>
        </ImgCrop>
    );
}
