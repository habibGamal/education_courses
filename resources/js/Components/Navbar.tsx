import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    BellIcon,
    XMarkIcon,
    RectangleStackIcon,
    ArrowRightEndOnRectangleIcon,
    Cog6ToothIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Link, usePage } from "@inertiajs/react";
import { PageProps, User } from "@/types";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const user = (usePage().props as PageProps<any>).auth.user as User | null;
    const isStudent = user && user.role === "user";
    const navigation: {
        name: string;
        icon: JSX.Element;
        href: string;
        current: boolean;
        method?: string;
    }[] = [
        {
            name: "Catalog",
            icon: (
                <RectangleStackIcon
                    className="inline h-6 w-6"
                    aria-hidden="true"
                />
            ),
            href: route("browse.courses.index"),
            current: true,
        },
    ];
    if (user === null) {
        navigation.push({
            name: "Login",
            icon: (
                <ArrowRightEndOnRectangleIcon
                    className="inline h-6 w-6"
                    aria-hidden="true"
                />
            ),
            href: route("login"),
            current: false,
        });
    }
    if (isStudent) {
        navigation.push({
            name: "Cart",
            icon: (
                <ShoppingCartIcon
                    className="inline h-6 w-6"
                    aria-hidden="true"
                />
            ),
            href: route("cart.show"),
            current: false,
        });
    }
    const menu: {
        name: string;
        href: string;
        method?: string;
    }[] = [
        {
            name: "Dashboard",
            href: isStudent ? route("user-dashboard") : route("dashboard"),
        },
        {
            name: "Logout",
            href: route("logout"),
            method: "post",
        },
    ];



    return (
        <Disclosure as="nav" className="bg-transparent">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-[5rem] items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative bg-transparent border-none inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href="/">
                                        <img
                                            className="h-[2.5rem] w-auto rounded-xl"
                                            src="/assets/nav_logo.jpg"
                                            alt="Kero Mamdouh"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4 h-full">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-secondary-900 text-white"
                                                        : "text-gray-300 hover:bg-secondary-700 hover:text-white",
                                                    "rounded-md flex items-center gap-2 px-3 py-2 text-sm font-medium"
                                                )}
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {item.icon}
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={`${user?"":"hidden"} absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0`}>
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative p-0 border-none flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <Cog6ToothIcon className="text-white h-6 w-6 rounded-full" />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {menu.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <Link
                                                            href={item.href}
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                            method={(item.method as 'get'|'post')?? 'get'}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block rounded-md px-3 py-2 text-base font-medium"
                                    )}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
