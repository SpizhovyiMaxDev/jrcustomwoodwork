import { v4 as createId } from 'uuid';


export const menu = [
    {
        linkName: "All",
        path: "/categories/all",
        id:createId(),
    },
    {
        linkName: "Kitchens",
        path: "/categories/kitchens",
        id:createId(),
    },
    {
        linkName: "Wardrobes",
        path: "/categories/wardrobes",
        id:createId(),
    },
    {
        linkName: "Bathrooms",
        path: "/categories/bathrooms",
        id:createId(),
    },
    {
        linkName: "Wet Bar/Wine room",
        path: "/categories/bar",
        id:createId(),
    },
    {
        linkName: "Fireplace",
        path: "/categories/fireplace",
        id:createId(),
    },
]