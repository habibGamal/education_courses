import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import Config from "./Layouts/Config";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        const res: any = await (resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ) as any);
        const page = res.default;
        const noLayout = page.layout === undefined;
        page.layout = noLayout
            ? (page: any) => <AuthenticatedLayout children={page} />
            : page.layout;
        return page;
        // return resolvePageComponent(
        //     `./Pages/${name}.tsx`,
        //     import.meta.glob("./Pages/**/*.tsx")
        // );
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <Config>
                <App {...props} />
            </Config>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
