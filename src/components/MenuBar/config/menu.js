import { scrollIds } from "../../../constants";

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
        scrollId: scrollIds.aboutTemple.history,
      },
      {
        label: "General Information",
        scrollId: scrollIds.aboutTemple.generalInformation,
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
        scrollId: scrollIds.rituals.homas,
      },
      {
        label: "Special Pujas",
        scrollId: scrollIds.rituals.specialPujas,
      },
    ],
  },
  {
    label: "Trust",
    redirectTo: "/trust",
    options: [
      {
        label: "About Trust",
        redirectTo: "/trust",
      },
      {
        label: "Projects",
        scrollId: scrollIds.trust.projects,
      },
      {
        label: "Financial Data",
        redirectTo: "/trust",
      },
      {
        label: "Employee Details",
        scrollId: scrollIds.trust.employeeDetails,
      },
    ],
  },
  {
    label: "Donations",
    redirectTo: "/donations",
    options: [
      {
        label: "Hundi",
        scrollId: scrollIds.donations.hundi,
      },
      {
        label: "Online Payment",
        scrollId: scrollIds.donations.onlinePayment,
      },
    ],
  },
  {
    label: "Contact",
    redirectTo: "/contact",
    options: [
      {
        label: "Help Desk",
        redirectTo: "/contact",
      },
      {
        label: "Contact Us",
        scrollId: scrollIds.contact.contactUs,
      },
      {
        label: "How to reach",
        scrollId: scrollIds.contact.howToReach,
      },
    ],
  },
  {
    label: "Accounts",
    redirectTo: "/accounts",
    options: [
      {
        label: "Hundi",
        redirectTo: "/accounts",
      },
      {
        label: "Income",
        scrollId: scrollIds.accounts.income,
      },
      {
        label: "Expenses",
        scrollId: scrollIds.accounts.expecses,
      },
    ],
  },
  {
    label: "Gallery",
    redirectTo: "/gallery",
  },
];
