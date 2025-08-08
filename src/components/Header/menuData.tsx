import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Insights",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Insights",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Insights + Sidebar",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Insight (details)",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
