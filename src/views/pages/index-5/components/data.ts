import type {
  ToolType,
  FeatureType,
  FAQType,
  PricingType,
} from "@/views/pages/index-5/components/types";
import {
  Component,
  Code2,
  BadgeDollarSign,
  Aperture,
  Compass,
  Image,
  Github,
  Dribbble,
  FileText,
  Pen,
  Database,
  Gitlab,
  Palette,
  CaseSensitive,
  CheckCircle2,
  XCircle,
} from "lucide-vue-next";
import type { FooterItemType } from "@/types/layout";

export const tools: ToolType[] = [
  {
    icon: Dribbble,
    name: "Social Media",
    variant: "red-500",
  },
  {
    icon: Component,
    name: "Design",
    variant: "sky-500",
  },
  {
    icon: Code2,
    name: "Coding",
    variant: "default-500",
  },
  {
    icon: BadgeDollarSign,
    name: "Marketing",
    variant: "indigo-500",
  },
  {
    icon: Aperture,
    name: "Seo",
    variant: "yellow-500",
  },
  {
    icon: Compass,
    name: "Design Builder",
    variant: "teal-500",
  },
  {
    icon: Image,
    name: "Free Ai Image",
    variant: "pink-500",
  },
  {
    icon: Github,
    name: "Free Repository",
    variant: "violet-500",
  },
];

export const features: FeatureType[] = [
  {
    icon: FileText,
    title: "Dynamic Rythm",
    description:
      "A Dynamic Rhythm system for AI-driven filmmaking that intelligently adjusts pacing, scene transitions, and emotional beats in real time. It leverages advanced AI to synchronize visuals, music, and storytelling flow, creating seamless and engaging cinematic experiences.",
  },
  {
    icon: Pen,
    title: "Cameras angle",
    description:
      "A Camera Angle Selection system that allows users to choose different shot angles for each scene while generating AI-driven films. This feature enables dynamic storytelling by offering multiple perspectives, from cinematic close-ups towide establishing shots.",
  },
  {
    icon: Database,
    title: "Storyboard",
    description:
      "A Storyboard AI system that instantly generates visual storyboards from a simple prompt. It creates easy-to-follow scene compositions, helping filmmakers visualize their shots without needing advanced drawing skills.",
  },
  {
    icon: Gitlab,
    title: "Emotion Mapping",
    description:
      "An Emotion Mapping system that analyzes the script or prompt to dynamically adjust visuals, lighting, and pacing based on the desired emotional tone. It ensures seamless storytelling by aligning cinematic elements with the intended mood.",
  },
  {
    icon: Palette,
    title: "Colour grading",
    description:
      "A Color Grading AI system that automatically applies cinematic color tones based on the scene’s mood and storytelling style. Users can customize the grading with a simple prompt, ensuring a visually cohesive and professional look.",
  },
  {
    icon: CaseSensitive,
    title: "Music composer",
    description:
      "A Color Grading AI system that automatically applies cinematic color tones based on the scene’s mood and storytelling style. Users can customize the grading with a simple prompt, ensuring a visually cohesive and professional look.",
  },
  {
    icon: FileText,
    title: "Automatic Trailer",
    description:
      "An Automatic Trailer Generation system that analyzes key moments from an AI-generated film to create a dynamic, engaging trailer. It selects highlights, adds music, and optimizes pacing to capture the essence of the story in seconds.",
  },
  {
    icon: Pen,
    title: "Automatic VFX",
    description:
      "An Automatic VFX system that seamlessly integrates visual effects into AI-generated films based on scene context and user prompts. It enhances storytelling by adding realistic effects like explosions, weather, and lighting adjustments without manual editing.",
  },
  {
    icon: Database,
    title: "Emotions dialogues",
    description:
      "An Emotion-Driven Dialogue AI system that generates and adjusts character dialogues based on the emotional tone of the scene. It ensures natural, impactful conversations that align with the story’s mood and character development",
  },
  {
    icon: Gitlab,
    title: "Lip synch/Voices",
    description:
      "A Lip-Sync AI system that automatically synchronizes character lip movements with dialogue in over 120 languages. It ensures accurate and realistic mouth animations, providing seamless storytelling across diverse languages and cultures.",
  },
  {
    icon: Palette,
    title: "Face swapp",
    description:
      "A Face Swap AI system that allows users to insert their own face or any other face onto a character in the film. This feature enables a personalized experience, making the user the hero or placing any chosen face into the story seamlessly.",
  },
  {
    icon: CaseSensitive,
    title: "Skins",
    description:
      "A Skin Customization AI system that allows users to change the style, outfits, and avatars of characters in the film. This feature enables full personalization of characters, from the main hero to supporting roles, offering endless creative possibilities.",
  },
  {
    icon: Database,
    title: "3D product ADS",
    description:
      "An AI-Powered Product Placement system that automatically models 3D objects like clothing, cars, or any product, and integrates them seamlessly into the film for advertising purposes. This allows dynamic and realistic placement of products within scenes, enhancing the cinematic experience while promoting brands.",
  },
];

export const pricingPlans: PricingType[] = [
  {
    duration: "month",
    plans: [
      {
        name: "Solo",
        description:
          "Our new Customers for a free one month of service offers.",
        price: 19,
        features: [
          { label: "Free credits", icon: CheckCircle2 },
          { label: "Bonus credits", icon: CheckCircle2 },
          { label: "Chat support", icon: CheckCircle2 },
          { label: "Analytic users", icon: CheckCircle2 },
          { label: "Forum", icon: CheckCircle2 },
          { label: "Chat Team", icon: CheckCircle2 },
        ],
      },
      {
        name: "Team",
        description:
          "Our new Customers for a free one month of service offers.",
        price: 29,
        features: [
          { label: "Free credits", icon: CheckCircle2 },
          { label: "Bonus credits", icon: CheckCircle2 },
          { label: "Forum", icon: CheckCircle2 },
          { label: "Chat Team,", icon: CheckCircle2 },
          { label: "Analytic users", icon: CheckCircle2 },
          { label: "Unlimited Team", icon: CheckCircle2 },
        ],
      },
    ],
  },
  {
    duration: "year",
    plans: [
      {
        name: "Solo",
        description:
          "Our new Customers for a free one month of service offers.",
        price: 200,
        features: [
          { label: "Free credits", icon: CheckCircle2 },
          { label: "Bonus credits", icon: CheckCircle2 },
          { label: "Chat support", icon: CheckCircle2 },
          { label: "Analytic users", icon: CheckCircle2 },
          { label: "Forum", icon: CheckCircle2 },
          { label: "Chat Team", icon: CheckCircle2 },
        ],
      },
      {
        name: "Team",
        description:
          "Our new Customers for a free one month of service offers.",
        price: 300,
        features: [
          { label: "Free credits", icon: CheckCircle2 },
          { label: "Bonus credits", icon: CheckCircle2 },
          { label: "Forum", icon: CheckCircle2 },
          { label: "Chat Team,", icon: CheckCircle2 },
          { label: "Analytic users", icon: CheckCircle2 },
          { label: "Unlimited Team", icon: CheckCircle2 },
        ],
      },
    ],
  },
];

export const faqs: FAQType[] = [
  {
    question: "Will it support my language?",
    answers: [
      " Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    ],
  },
  {
    question: "Do you also provide subtitles?",
    answers: [
      " Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    ],
  },
  {
    question: "How do I get started?",
    answers: [
      " Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    ],
  },
  {
    question: "Do you have any samples?",
    answers: [
      " Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    ],
  },
  {
    question: "Can I get custom templates?",
    answers: [
      " Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    ],
  },
  {
    question: "What types of videos can i upload?",
    answers: [
      " Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    ],
  },
];

export const footerItems: FooterItemType[] = [
  {
    title: "About Us",
    links: [
      {
        label: "Support Center",
        route: {},
      },
      {
        label: "Customer Support",
        route: {},
      },
      {
        label: "About Us",
        route: {},
      },
      {
        label: "Copyright",
        route: {},
      },
      {
        label: "Popular Campaign",
        route: {},
      },
      {
        label: "Return Policy",
        route: {},
      },

      {
        label: "Privacy Policy",
        route: {},
      },
      {
        label: "Terms & Conditions",
        route: {},
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "Press Inquiries",
        route: {},
      },
      {
        label: "Social Media Directories",
        route: {},
      },
      {
        label: "Images & B-roll",
        route: {},
      },
      {
        label: "Site Map",
        route: {},
      },
    ],
  },
];
