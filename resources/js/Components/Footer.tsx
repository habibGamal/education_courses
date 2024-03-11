import React from "react";
import { Footer as AntFooter } from "antd/es/layout/layout";

export default function Footer() {
    return (
        <AntFooter style={{ textAlign: "center", marginTop: "1rem" }}>
            KM Editing School ©{new Date().getFullYear()} Created by Eng. Habib Gamal
        </AntFooter>
    );
}
