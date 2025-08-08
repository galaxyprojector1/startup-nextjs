import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "À propos",
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
    title: "Plus",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "À propos",
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
        title: "Insight (détails)",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Connexion",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Créer un compte",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Erreur",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
