import type {
  FeatureType,
  TopicType,
  TestimonialType,
  PricingPlanType,
} from "@/views/pages/index-4/components/types";
import {
  Image,
  Dribbble,
  MessageSquare,
  Send,
  Youtube,
  Facebook,
  Mail,
  User,
  Star,
} from "lucide-vue-next";

import avatar1 from "@/assets/images/avatars/img-1.png";
import avatar2 from "@/assets/images/avatars/img-2.png";
import avatar3 from "@/assets/images/avatars/img-3.png";
import avatar4 from "@/assets/images/avatars/img-4.png";
import avatar5 from "@/assets/images/avatars/img-5.png";
import avatar6 from "@/assets/images/avatars/img-6.png";
import avatar7 from "@/assets/images/avatars/img-7.png";
import avatar8 from "@/assets/images/avatars/img-8.png";
import team1 from "@/assets/images/ali/team/1.jpg";
import team2 from "@/assets/images/ali/team/2.jpg";
import team3 from "@/assets/images/ali/team/3.jpg";
import team4 from "@/assets/images/ali/team/4.jpg";
import team5 from "@/assets/images/ali/team/5.jpg";
import team6 from "@/assets/images/ali/team/6.jpg";
import team7 from "@/assets/images/ali/team/7.jpg";
import teamImage1 from "@/assets/images/ali/team/avengers.jpg";
import teamImage2 from "@/assets/images/ali/team/french.jpg";
import teamImage3 from "@/assets/images/ali/team/dark-side.jpg";
import teamImage4 from "@/assets/images/ali/team/crazy-frog.jpg";
import teamImage5 from "@/assets/images/ali/team/scfi.jpg";
import teamImage6 from "@/assets/images/ali/team/girls-power.jpg";
import type { FAQType } from "@/views/pages/index-3/components/types";

export const toolFeatures: FeatureType[] = [
  {
    icon: Dribbble,
    title: "Latest AI technology",
    description:
      "Click on Chat Archive and search to Watch Ask Anything Chats from your favorite artists. Ask Them A Question.",
  },
  {
    icon: MessageSquare,
    title: "Multi-language",
    description:
      "Click on Chat Archive and search to Watch Ask Anything Chats from your favorite artists. Ask Them A Question.",
  },
  {
    icon: Image,
    title: "Edit text easily",
    description:
      "Click on Chat Archive and search to Watch Ask Anything Chats from your favorite artists. Ask Them A Question.",
  },
];

export const features: FeatureType[] = [
  {
    icon: Send,
    title: "Blog Post",
    description:
      "Generate blog posts on a variety of topics, from industry news and trends to product reviews and how-to guides.",
  },
  {
    icon: Youtube,
    title: "Social Media",
    description:
      "Generate blog posts on a variety of topics, from industry news and trends to product reviews and how-to guides.",
  },
  {
    icon: Facebook,
    title: "Blog Post",
    description:
      "Generate blog posts on a variety of topics, from industry news and trends to product reviews and how-to guides.",
  },
  {
    icon: Mail,
    title: "Email",
    description:
      "Generate blog posts on a variety of topics, from industry news and trends to product reviews and how-to guides.",
  },
  {
    icon: User,
    title: "FAQ",
    description:
      "Generate blog posts on a variety of topics, from industry news and trends to product reviews and how-to guides.",
  },
  {
    icon: Star,
    title: "Testimonials",
    description:
      "Generate blog posts on a variety of topics, from industry news and trends to product reviews and how-to guides.",
  },
];

export const trendingTopics: TopicType[] = [
  {
    teamImage: teamImage1,
    name: "Avengers",
    points: "Pressure clean, sponge art, string art",
    discussers: [{ image: team1 }, { image: team2 }, { image: avatar3 }],
  },
  {
    teamImage: teamImage2,
    name: "French",
    points: "Attack other gang, big, army, Crowd evolution",
    discussers: [{ image: avatar4 }, { image: avatar5 }],
  },
  {
    teamImage: teamImage3,
    name: "Dark Side",
    points: "beyblade games, fidget spinner, spinner battle",
    discussers: [
      { image: team4 },
      { image: team6 },
      { image: avatar8 },
      { image: avatar5 },
    ],
  },
  {
    teamImage: teamImage4,
    name: "Crazy Frog",
    points: "Cooking madness, cooking, cafe",
    discussers: [{ image: avatar8 }, { image: team7 }, { image: team3 }],
  },
  {
    teamImage: teamImage5,
    name: "SCFI",
    points: "Marvel, Avengers",
    discussers: [{ image: avatar1 }],
  },
  {
    teamImage: teamImage6,
    name: "Girls Power",
    points: "road draw, draw rider, build, bridge",
    discussers: [{ image: avatar2 }, { image: team5 }, { image: avatar3 }],
  },
];

export const testimonials: TestimonialType[] = [
  {
    review:
      "I've tried other AI writing tools before, but this one is by far the best. The language is sophisticated and engaging, and it's helped me take my content to the next level.",
    user: {
      image: avatar1,
      name: "Ryan Delk",
      role: "user",
    },
  },
  {
    review:
      "As a content marketer, I'm always looking for ways to streamline my workflow and create high-quality a game-changer for me, and I don't know how I ever managed without it.",
    user: {
      image: avatar2,
      name: "Marsel Fischer",
      role: "user",
    },
  },
  {
    review:
      "The solutions offered by your AI chatbots are truly impressive! We are able to communicate with our customers faster and more interact.",
    user: {
      image: avatar3,
      name: "Maria",
      role: "user",
    },
  },
  {
    review:
      "I've tried other AI writing tools before, but this one is by far the best. The language is sophisticated and engaging, and it's helped me take my content to the next level.",
    user: {
      image: avatar4,
      name: "Ryan Jonas",
      role: "user",
    },
  },
  {
    review:
      "I was surprised by the ease and speed of the video editing service based on AI technology from this site. The results are amazing and very satisfying.",
    user: {
      image: avatar5,
      name: "Randy Hilarski",
      role: "user",
    },
  },
  {
    review:
      "The solutions offered by your AI chatbots are truly impressive! We are able to communicate with our customers faster and more interactively.",
    user: {
      image: avatar6,
      name: "Jonathan Simcoe",
      role: "user",
    },
  },
];

export const pricingPlans: PricingPlanType[] = [
  {
    name: "Free",
    price: 0,
    features: [
      { label: "1 user" },
      { label: "Plan features" },
      { label: "Product support" },
    ],
  },
  {
    name: "Starter",
    price: 39,
    features: [
      { label: "2 user" },
      { label: "Plan features" },
      { label: "Product support" },
    ],
  },
  {
    name: "Team",
    price: 89,
    features: [
      { label: "5 user" },
      { label: "Plan features" },
      { label: "Product support" },
    ],
  },
  {
    name: "Pro",
    price: 149,
    features: [
      { label: "10 user" },
      { label: "Plan features" },
      { label: "Product support" },
    ],
  },
];

export const faqs: FAQType[] = [
  {
    question: "How does AI-BOX generate content?",
    answer:
      "AI-BOX utilize advanced algorithms and machine learning techniques to generate content based on user inputs and desired parameters, resulting in unique and customized AI-generated creations.",
  },
  {
    question: "What types of content can AI-BOX create?",
    answer:
      "AI-BOX utilize advanced algorithms and machine learning techniques to generate content based on user inputs and desired parameters, resulting in unique and customized AI-generated creations.",
  },
  {
    question: "Can I customize the content generated by AI-BOX?",
    answer:
      "AI-BOX utilize advanced algorithms and machine learning techniques to generate content based on user inputs and desired parameters, resulting in unique and customized AI-generated creations.",
  },
];
