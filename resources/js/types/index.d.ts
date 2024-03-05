export interface User {
    id: number;
    name: string;
    country: string;
    city: string;
    phone: string;
    email: string;
    email_verified_at: string;
    role: string;
    created_at: string;
    updated_at: string;
    enrolled_courses?: EnrolledCourses[];
}

interface EnrolledCourses {
    id: number;
    course_id: number;
    user_id: number;
    review_id: null;
    progress: number;
    created_at: string;
    updated_at: string;
    course?: Course;
}

export interface Course {
    id: number;
    title: string;
    thumbnail: string;
    created_by: string;
    total_enrolled: number;
    description: string;
    duration: string;
    what_will_learn: string;
    requirements: string;
    level: string;
    price: number;
    discount_price: number;
    promo_video_link: string | null;
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
    type: "video" | "file";
    video_url?: string;
    file_url?: string;
    block_id: number;
    sort_order: number;
    created_at: string;
    updated_at: string;
}

interface Payment {
    id: number;
    payment_method: string;
    payment_status: string;
    payment_amount: number;
    required_amount: number;
    total: number;
    phone_number: string;
    screenshot: string;
    created_at: string;
    updated_at: string;
    coupon_id: number;
    coupon?: Coupon;
}

interface Order {
    id: number;
    user_id: number;
    payment_id: number;
    created_at: string;
    updated_at: string;
    user?: User;
    payment?: Payment;
    order_items?: OrderItem[];
}

interface OrderItem {
    id: number;
    price: number;
    order_id: number;
    course_id: number;
    created_at: string;
    updated_at: string;
    course?: Course;
}


interface CartItem {
    id: number;
    cart_id: number;
    course_id: number;
    created_at: string;
    updated_at: string;
    course?: Course;
}

interface Cart {
    id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    cart_items?: CartItem[];
}

interface Coupon {
    id: number;
    code: string;
    type: string;
    value: number;
    active: number;
    created_at: string;
    updated_at: string;
}

interface Link {
    url: null | string;
    label: string;
    active: boolean;
}

interface Paginate<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: null;
    path: string;
    per_page: number;
    prev_page_url: null;
    to: number;
    total: number;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
