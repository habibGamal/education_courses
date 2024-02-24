export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Course {
    id: number;
    title: string;
    thumbnail: string;
    createdBy: string;
    totalEnrolled: number;
    description: string;
    duration: string;
    whatWillLearn: string;
    requirements: string;
    level: string;
    price: number;
    discountPrice: number;
    promoVideoLink: string | null;
    createdAt: Date;
    updatedAt: Date;
    blocks?: Block[];
}

export interface Block {
    id: number;
    title: string;
    course_id: number;
    sort_order: number;
    created_at: string;
    updated_at: string;
    resources?: Resource[];
}

export interface Resource {
    id: number;
    title: string;
    video_url?: string;
    file_url?: string;
    block_id: number;
    sort_order: number;
    created_at: string;
    updated_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
