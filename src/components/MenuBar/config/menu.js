import { scrollIds } from "../../../pages/About/config/constants";

export const menu = [
  {
    label: "Home",
    redirectTo: "/home",
    options: [],
  },
  {
    label: "About",
    redirectTo: "/about",
    options: [
      {
        label: "About Temple",
        redirectTo: "/about",
      },
      {
        label: "History",
        scrollId: scrollIds.history,
      },
      {
        label: "General Information",
        scrollId: scrollIds.generalInformation,
      },
    ],
  },
  {
    label: "Rituals",
    redirectTo: "/rituals",
    options: [
      {
        label: "Nitya Puja",
        redirectTo: "/rituals",
      },
      {
        label: "Homas",
      },
      {
        label: "Special Pujas",
      },
    ],
  },
  {
    label: "Trust",
    redirectTo: "/trust",
    options: [
      {
        label: "About Trust",
      },
      {
        label: "Projects",
      },
      {
        label: "Financial Data",
      },
      {
        label: "Employee Details",
      },
    ],
  },
  {
    label: "Donations",
    redirectTo: "/donations",
    options: [
      {
        label: "Hundi",
      },
      {
        label: "Online Payment",
      },
    ],
  },
  {
    label: "Contact",
    redirectTo: "/contact",
    options: [
      {
        label: "Help Desk",
      },
      {
        label: "Contact Us",
      },
      {
        label: "How to reach",
      },
    ],
  },
  {
    label: "Accounts",
    redirectTo: "/accounts",
    options: [
      {
        label: "Hundi",
      },
      {
        label: "Income",
      },
      {
        label: "Expenses",
      },
    ],
  },
  {
    label: "Gallery",
    redirectTo: "/gallery",
  },
];
