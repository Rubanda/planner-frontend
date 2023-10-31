import type { FooterItem, MainNavItem } from "@/types"


export type SiteConfig = typeof siteConfig

const links = {
  github: "https://github.com/Rubanda/planner-frontend",
}

export const siteConfig = {
  name: "Wedding Planner",
  description:
    "An open source wedding planner build with nestjs and  Next.js.",
  url: "https://planner-frontend-sigma.vercel.app",
  ogImage: "https://cdn2.iconfinder.com/data/icons/wedding-line-color-the-wedding-planner/512/wedding_rings-512.png",
  links,
  mainNav: [
    // {
    //   title: "Lobby",
    //   items: [
    //     {
    //       title: "Products",
    //       href: "/products",
    //       description: "All the products we have to offer.",
    //       items: [],
    //     },
    //     {
    //       title: "Build a Board",
    //       href: "/build-a-board",
    //       description: "Build your own custom skateboard.",
    //       items: [],
    //     },
    //     {
    //       title: "Blog",
    //       href: "/blog",
    //       description: "Read our latest blog posts.",
    //       items: [],
    //     },
    //   ],
    // },
  ] satisfies MainNavItem[],
//   footerNav: [
//     {
//       title: "Credits",
//       items: [
//         {
//           title: "OneStopShop",
//           href: "https://onestopshop.jackblatch.com",
//           external: true,
//         },
//         {
//           title: "Acme Corp",
//           href: "https://acme-corp.jumr.dev",
//           external: true,
//         },
//         {
//           title: "craft.mxkaske.dev",
//           href: "https://craft.mxkaske.dev",
//           external: true,
//         },
//         {
//           title: "Taxonomy",
//           href: "https://tx.shadcn.com/",
//           external: true,
//         },
//         {
//           title: "shadcn/ui",
//           href: "https://ui.shadcn.com",
//           external: true,
//         },
//       ],
//     },
//     {
//       title: "Help",
//       items: [
//         {
//           title: "About",
//           href: "/about",
//           external: false,
//         },
//         {
//           title: "Contact",
//           href: "/contact",
//           external: false,
//         },
//         {
//           title: "Terms",
//           href: "/terms",
//           external: false,
//         },
//         {
//           title: "Privacy",
//           href: "/privacy",
//           external: false,
//         },
//       ],
//     },
//     {
//       title: "Social",
//       items: [
//         {
//           title: "Twitter",
//           href: links.twitter,
//           external: true,
//         },
//         {
//           title: "GitHub",
//           href: links.githubAccount,
//           external: true,
//         },
//         {
//           title: "Discord",
//           href: links.discord,
//           external: true,
//         },
//         {
//           title: "cal.com",
//           href: links.calDotCom,
//           external: true,
//         },
//       ],
//     },
//     {
//       title: "Lofi",
//       items: [
//         {
//           title: "beats to study to",
//           href: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
//           external: true,
//         },
//         {
//           title: "beats to chill to",
//           href: "https://www.youtube.com/watch?v=rUxyKA_-grg",
//           external: true,
//         },
//         {
//           title: "a fresh start",
//           href: "https://www.youtube.com/watch?v=rwionZbOryo",
//           external: true,
//         },
//         {
//           title: "coffee to go",
//           href: "https://www.youtube.com/watch?v=2gliGzb2_1I",
//           external: true,
//         },
//       ],
//     },
//   ] satisfies FooterItem[],
}