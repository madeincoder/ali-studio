import type { FooterItemType } from "@/types/layout";
import type {
  BlogType,
  CategoryType,
  FAQType,
  SellerType,
} from "@/views/pages/index-1/components/types";
import { addOrSubtractDaysFromDate } from "@/helpers/date-time";

import nftArt4 from "@/assets/images/ali/categories-ai/1.jpg";
import nftArt5 from "@/assets/images/ali/categories-ai/2.jpg";
import nftArt6 from "@/assets/images/ali/categories-ai/3.jpg";
import nftArt7 from "@/assets/images/ali/categories-ai/4.jpg";
import nftArt8 from "@/assets/images/ali/categories-ai/5.jpg";
import nftArt9 from "@/assets/images/ali/categories-ai/6.jpg";
import nftArt10 from "@/assets/images/ali/categories-ai/7.jpg";
import nftArt11 from "@/assets/images/ali/categories-ai/8.jpg";
import nftArt12 from "@/assets/images/nft/art/12.png";
import nftArt13 from "@/assets/images/nft/art/13.png";
import nftArt14 from "@/assets/images/nft/art/14.png";
import nftArt15 from "@/assets/images/nft/art/15.png";
import nftArt16 from "@/assets/images/nft/art/16.png";
import nftArt17 from "@/assets/images/nft/art/17.png";
import nftArt19 from "@/assets/images/nft/art/19.png";
import nftArt18 from "@/assets/images/nft/art/18.png";
import nftArt20 from "@/assets/images/nft/art/20.png";
import nftArt21 from "@/assets/images/nft/art/21.png";
import nftArt22 from "@/assets/images/nft/art/22.png";

import nftArtReal1 from "@/assets/images/ali/categories-real/1.jpg";
import nftArtReal2 from "@/assets/images/ali/categories-real/2.jpg";
import nftArtReal3 from "@/assets/images/ali/categories-real/3.jpg";
import nftArtReal4 from "@/assets/images/ali/categories-real/4.jpg";
import nftArtReal5 from "@/assets/images/ali/categories-real/5.jpg";
import nftArtReal6 from "@/assets/images/ali/categories-real/6.jpg";
import nftArtReal7 from "@/assets/images/ali/categories-real/7.jpg";
import nftArtReal8 from "@/assets/images/ali/categories-real/8.jpg";

import avatar1 from "@/assets/images/avatars/img-1.png";
import avatar2 from "@/assets/images/avatars/img-2.png";
import avatar3 from "@/assets/images/avatars/img-3.png";
import avatar4 from "@/assets/images/avatars/img-4.png";
import avatar5 from "@/assets/images/avatars/img-5.png";
import avatar6 from "@/assets/images/avatars/img-6.png";
import avatar8 from "@/assets/images/avatars/img-8.png";
import avatar9 from "@/assets/images/avatars/img-9.png";
import avatar10 from "@/assets/images/avatars/img-10.png";
import avatar11 from "@/assets/images/avatars/img-11.png";

import creator1 from "@/assets/images/ali/creators/1.jpg";
import creator2 from "@/assets/images/ali/creators/2.jpg";

import actor1 from "@/assets/images/ali/actors/1.jpg";
import actor2 from "@/assets/images/ali/actors/2.jpg";
import actor3 from "@/assets/images/ali/actors/3.jpg";
import actor4 from "@/assets/images/ali/actors/4.jpg";
import actor5 from "@/assets/images/ali/actors/5.jpg";
import actor6 from "@/assets/images/ali/actors/6.jpg";
import actor7 from "@/assets/images/ali/actors/7.jpg";
import actor8 from "@/assets/images/ali/actors/8.jpg";
import actor9 from "@/assets/images/ali/actors/9.jpg";
import actor10 from "@/assets/images/ali/actors/10.jpg";
import actor11 from "@/assets/images/ali/actors/11.jpg";
import actor12 from "@/assets/images/ali/actors/12.jpg";
import actor13 from "@/assets/images/ali/actors/13.jpg";
import actor14 from "@/assets/images/ali/actors/14.jpg";
import actor15 from "@/assets/images/ali/actors/15.jpg";
import actor16 from "@/assets/images/ali/actors/16.jpg";
import actor17 from "@/assets/images/ali/actors/17.jpg";
import actor18 from "@/assets/images/ali/actors/18.jpg";

import blog1 from "@/assets/images/ali/blog1.jpg";
import blog2 from "@/assets/images/ali/blog2.jpg";

export const categories: CategoryType[] = [
  {
    image: nftArt4,
    name: "Half Hair",
    creator: {
      image: avatar1,
      username: "@Nikom",
    },
    bid: {
      current: 20.5,
      last: 25.04,
    },
    sale: {
      endDate: addOrSubtractDaysFromDate(10, true),
    },
  },
  {
    image: nftArt5,
    name: "Headphone Monkey",
    creator: {
      image: avatar3,
      username: "@Mexi",
    },
    bid: {
      current: 12.5,
      last: 25.04,
    },
  },
  {
    image: nftArt6,
    name: "Goggles Monkey",
    creator: {
      image: avatar4,
      username: "@Astro",
    },
    bid: {
      current: 14.8,
      last: 12.04,
    },
    isLiked: true,
  },
  {
    image: nftArt7,
    name: "Cute Girl",
    creator: {
      image: avatar5,
      username: "@Aliza",
    },
    bid: {
      current: 18,
      last: 32.06,
    },
    sale: {
      endDate: addOrSubtractDaysFromDate(4, true),
    },
  },
  {
    image: nftArt8,
    name: "Sky Hair Girl",
    creator: {
      image: avatar8,
      username: "@Tony",
    },
    bid: {
      current: 20.42,
      last: 18.96,
    },
  },
  {
    image: nftArt9,
    name: "Cartoon Couple",
    creator: {
      image: avatar9,
      username: "@Alabto",
    },
    bid: {
      current: 24.96,
      last: 40.22,
    },
  },
  {
    image: nftArt10,
    name: "Skeleton",
    creator: {
      image: avatar10,
      username: "@Minato",
    },
    bid: {
      current: 12.5,
      last: 25.04,
    },
    sale: {
      endDate: addOrSubtractDaysFromDate(7, true),
    },
  },
  {
    image: nftArt11,
    name: "Businessman Monkey",
    creator: {
      image: avatar11,
      username: "@Tamari",
    },
    bid: {
      current: 42.52,
      last: 20.42,
    },
  },
];
export const categoriesReal: CategoryType[] = [
  {
    image: nftArtReal1,
    name: "Half Hair",
    creator: {
      image: avatar1,
      username: "@Nikom",
    },
    bid: {
      current: 20.5,
      last: 25.04,
    },
    sale: {
      endDate: addOrSubtractDaysFromDate(10, true),
    },
  },
  {
    image: nftArtReal2,
    name: "Headphone Monkey",
    creator: {
      image: avatar3,
      username: "@Mexi",
    },
    bid: {
      current: 12.5,
      last: 25.04,
    },
  },
  {
    image: nftArtReal3,
    name: "Goggles Monkey",
    creator: {
      image: avatar4,
      username: "@Astro",
    },
    bid: {
      current: 14.8,
      last: 12.04,
    },
    isLiked: true,
  },
  {
    image: nftArtReal4,
    name: "Cute Girl",
    creator: {
      image: avatar5,
      username: "@Aliza",
    },
    bid: {
      current: 18,
      last: 32.06,
    },
    sale: {
      endDate: addOrSubtractDaysFromDate(4, true),
    },
  },
  {
    image: nftArtReal5,
    name: "Sky Hair Girl",
    creator: {
      image: avatar8,
      username: "@Tony",
    },
    bid: {
      current: 20.42,
      last: 18.96,
    },
  },
  {
    image: nftArtReal6,
    name: "Cartoon Couple",
    creator: {
      image: avatar9,
      username: "@Alabto",
    },
    bid: {
      current: 24.96,
      last: 40.22,
    },
  },
  {
    image: nftArtReal7,
    name: "Skeleton",
    creator: {
      image: avatar10,
      username: "@Minato",
    },
    bid: {
      current: 12.5,
      last: 25.04,
    },
    sale: {
      endDate: addOrSubtractDaysFromDate(7, true),
    },
  },
  {
    image: nftArtReal8,
    name: "Businessman Monkey",
    creator: {
      image: avatar11,
      username: "@Tamari",
    },
    bid: {
      current: 42.52,
      last: 20.42,
    },
  },
];

export const topSellers: SellerType[] = [
  {
    image: avatar1,
    name: "Nikom Petroy",
    earnings: 60000,
    topWork: [actor1, actor2, actor3],
  },
  {
    image: creator1,
    name: "Mexi Luna",
    earnings: 55000,
    topWork: [actor4, actor5, actor6],
  },
  {
    image: avatar4,
    name: "Astro Stark",
    earnings: 52000,
    topWork: [actor7, actor8, actor9],
  },
  {
    image: avatar5,
    name: "Aliza Spencer",
    earnings: 48500,
    topWork: [actor10, actor11, actor12],
  },
  {
    image: avatar6,
    name: "Tony Stark",
    earnings: 45200,
    topWork: [actor13, actor14, actor15],
  },
  {
    image: creator2,
    name: "Minato Namikaze",
    earnings: 45100,
    topWork: [actor16, actor17, actor18],
  },
];

export const browseByCategory = [
  {
    type: "Pictures",
    image: nftArt19,
  },
  {
    type: "Music",
    image: nftArt5,
  },
  {
    type: "Videos",
    image: nftArt14,
  },
];

export const faqs: FAQType[] = [
  {
    question: "Will it support my language?",
    answer:
      "You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.",
  },
  {
    question: "Do you also provide subtitles?",
    answer:
      "You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.",
  },
  {
    question: "Do you have any samples?",
    answer:
      "You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.",
  },
  {
    question: "Can I get custom templates?",
    answer:
      "You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.",
  },
  {
    question: "What types of videos can i upload?",
    answer:
      "You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.",
  },
];

export const blogs: BlogType[] = [
  {
    image: blog1,
    title: "How to create my first trailer",
    description:
      "How to create your first trailer in just one week and publish it on the marketplace",
    publishedDate: "27 Aug 2025",
  },
  {
    image: blog2,
    title: "How to keep a consistent character",
    description: "How to always keep the same actors in all your movies",
    publishedDate: "31 Jan 2025",
  },
];

export const footerItems: FooterItemType[] = [
  {
    title: "Marketplace",
    links: [
      {
        label: "All NFTs",
        route: {},
      },
      {
        label: "New",
        route: {},
      },
      {
        label: "Arts",
        route: {},
      },
    ],
  },
  {
    title: "Status",
    links: [
      {
        label: "Rankings",
        route: {},
      },
      {
        label: "Activity",
        route: {},
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Help Center",
        route: {},
      },
      {
        label: "Suggestions",
        route: {},
      },
      {
        label: "Newsletter",
        route: {},
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About",
        route: {},
      },
      {
        label: "Carriers",
        route: {},
      },
    ],
  },
];
