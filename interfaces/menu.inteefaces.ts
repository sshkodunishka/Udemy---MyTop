import { TopLevelCategory } from "./page.interfaces";

export interface PageItem {
    alias: string;
    title: string;
    _is: string;
    category: string;
}

export interface MenuItem {
    _id: {
        secondCategory: string;
    };
    isOpened?: boolean;
    pages: PageItem[];
}

export interface FirstLevelMenuItem{
    route: string;
    name: string;
    icon: JSX.Element;
    id: TopLevelCategory;
}