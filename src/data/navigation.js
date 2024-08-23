import { v4 as createId } from 'uuid';

export const navigation = [
    {
      linkName: "Home",
      path: "/home",
      id:createId(),
    },
    {
      linkName: "Projects",
      path: "/categories/all",
      id:createId(),
    },
    {
      linkName: "About",
      path: "/about",
      id:createId(),
    },
    {
      linkName: "Contact",
      path: "/contact",
      id:createId(),
    },
];