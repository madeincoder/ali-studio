import {
  Youtube,
  Users2,
  LineChart,
  Smartphone,
  ShoppingCart,
  Check,
} from "lucide-vue-next";
import type {
  //   FeatureType,
  PricingType,
  FAQType,
  IconFeatureType,
} from "@/views/pages/index-3/components/types";
import type { FooterItemType } from "@/types/layout";

const icon1 = new URL("@/assets/images/ali/261.png", import.meta.url).href;
const icon2 = new URL("@/assets/images/ali/260.png", import.meta.url).href;

export const features: IconFeatureType[] = [
  {
    image: icon2,
    title: "Solo producer",
    description:
      "Creates a film from A to Z totally assisted by the ia, images, videos, music, sound,languages etc.",
  },
  {
    image: icon1,
    title: "Create in team",
    description:
      "Join or create your team and assign a role to each producer, special effects, assembly for effective teamwork",
  },
];

// export const features: FeatureType[] = [
//   {
//     icon: Youtube,
//     title: "Solo producer",
//     description:
//       "Creates a film from A to Z totally assisted by the ia, images, videos, music, sound,languages etc.",
//   },
//   {
//     icon: Users2,
//     title: "Create in team",
//     description:
//       "Join or create your team and assign a role to each producer, special effects, assembly for effective teamwork",
//   },
// ];

export const generatorFeatures: IconFeatureType[] = [
  {
    image: icon2,
    title: "Grow on multiple platforms",
    description:
      "By utilizing the artificial intelligence AI technology that we provide, you can quickly grow on various platforms without having to invest extra time and effort.",
  },
  {
    image: icon1,
    title: "Engage viewers everywhere",
    description:
      "By adopting advanced AI technology. you can expand the reach of your audience and reach viewers on various platforms in an effective and efficient way.",
  },
  //   {
  //     image: ShoppingCart,
  //     title: "Spend more time creating",
  //     description:
  //       "With the artificial intelligence AI technology that we provide, you can produce spectacular video edits in a very short time effective and efficient way.",
  //   },
];

export const pricingPlans: PricingType[] = [
  {
    duration: "month",
    plans: [
      {
        name: "Basic plan",
        description: "",
        price: 12,
        features: [
          { label: "5 GB", icon: Check },
          { label: "Chat support", icon: Check },
          { label: "Analytic users", icon: Check },
          { label: "Secure Video", icon: Check },
          { label: "Hosting", icon: Check },
        ],
      },
      {
        name: "Pro",
        description: "",
        price: 35,
        isPopular: true,
        features: [
          { label: "25 GB", icon: Check },
          { label: "Chat support", icon: Check },
          { label: "Analytic users", icon: Check },
          { label: "Custom Video Player", icon: Check },
          { label: "Video analytic", icon: Check },
        ],
      },
      {
        name: "Team",
        description: "",
        price: 60,
        features: [
          { label: "50 GB", icon: Check },
          { label: "Chat support", icon: Check },
          { label: "Analytic users", icon: Check },
          { label: "Custom Video Player", icon: Check },
          { label: "Video analytic", icon: Check },
          { label: "Team members", icon: Check },
        ],
      },
    ],
  },
  {
    duration: "year",
    plans: [
      {
        name: "Basic plan",
        description: "",
        price: 70,
        features: [
          { label: "5 GB", icon: Check },
          { label: "Chat support", icon: Check },
          { label: "Analytic users", icon: Check },
          { label: "Secure Video", icon: Check },
          { label: "Hosting", icon: Check },
        ],
      },
      {
        name: "Pro",
        description: "",
        price: 250,
        isPopular: true,
        features: [
          { label: "25 GB", icon: Check },
          { label: "Chat support", icon: Check },
          { label: "Analytic users", icon: Check },
          { label: "Custom Video Player", icon: Check },
          { label: "Video analytic", icon: Check },
        ],
      },
      {
        name: "Team",
        description: "",
        price: 500,
        features: [
          { label: "50 GB", icon: Check },
          { label: "Chat support", icon: Check },
          { label: "Analytic users", icon: Check },
          { label: "Custom Video Player", icon: Check },
          { label: "Video analytic", icon: Check },
          { label: "Team members", icon: Check },
        ],
      },
    ],
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

export const footerItems: FooterItemType[] = [
  {
    title: "Product",
    links: [
      {
        label: "Features",
        route: {},
      },
      {
        label: "Get an Essay",
        route: {},
      },
      {
        label: "Pricing",
        route: {},
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "Walkthrough",
        route: {},
      },
      {
        label: "Blog",
        route: {},
      },
      {
        label: "Contact",
        route: {},
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Terms of service",
        route: {},
      },
      {
        label: "Refund policy",
        route: {},
      },
      {
        label: "Privacy policy",
        route: {},
      },
    ],
  },
];
