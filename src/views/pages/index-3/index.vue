<template>
  <NavBar :nav-links="navLinks" />

  <Hero />

  <CTA />

  <!-- <Brands /> -->

  <Features />

  <CustomWallet />

  <Services />

  <HeroTwo />

  <HeroThree />

  <section class="pt-[120px] pb-14">
    <Browse />
  </section>

  <Categories />

  <CategoriesReal />

  <Sellers />

  <Showcase />

  <Save />

  <Topics />

  <Testimonials />

  <FeaturesCard />

  <!-- <About /> -->

  <!-- <Generator /> -->
  <Blogs />

  <Pricing1 />

  <Pricing2 />

  <Pricing />

  <!-- <FAQs /> -->

  <!-- <section class="py-14">
    <div
      class="container"
      data-aos="zoom-out"
      data-aos-easing="ease"
      data-aos-duration="1000"
    >
      <div class="p-6 rounded-xl bg-default-950/40">
        <div class="flex flex-wrap items-center gap-6">
          <div class="flex-shrink">
            <div class="flex -space-x-2">
              <img
                class="inline-block h-10 w-10 rounded-full ring-2 ring-default-950 bg-white"
                :src="avatar1"
                alt="Image Description"
              />
              <img
                class="inline-block h-10 w-10 rounded-full ring-2 ring-default-950 bg-white"
                :src="avatar2"
                alt="Image Description"
              />
              <img
                class="inline-block h-10 w-10 rounded-full ring-2 ring-default-950 bg-white"
                :src="avatar3"
                alt="Image Description"
              />
              <button
                class="h-10 w-10 font-medium text-primary rounded-full bg-white"
              >
                80+
              </button>
            </div>
          </div>

          <div class="flex-grow">
            <h3 class="text-lg font-medium text-default-200">
              Join our AI experts community
            </h3>
            <p class="w-3/4 text-base font-medium text-default-300 mt-5">
              Meet and learn from 80+ creators & companies who share how they
              use AI to create better content at lightning speed.
            </p>
          </div>

          <div class="flex-shrink">
            <a
              href="#"
              class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"
              >Join
              <MoveRight class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section> -->

  <!-- <Footer/> -->

  <div class="border-t border-white/10 py-6">
    <div
      class="container lg:px-20 flex flex-wrap justify-center items-center gap-4 h-full text-center"
    >
      <p class="text-base font-medium text-default-400">
        {{ currentYear }}
        © {{ appName }}
        <a href="#">
          <!-- <Heart class="inline h-4 w-4 text-red-500 fill-red-500"/> -->
          {{ appAuthor }}</a
        >
      </p>
    </div>
  </div>

  <Background1 />

  <BackToTop />
</template>

<script setup lang="ts">
import type { NavBarLinkType } from "@/types/layout";
import NavBar from "@/components/NavBar.vue";
import Hero from "@/views/pages/index-3/components/Hero.vue";
import CTA from "@/views/pages/index-4/components/CTA.vue";
import CustomWallet from "@/views/pages/index-3/components/CustomWallet.vue";
import Services from "@/views/pages/index-4/components/Services.vue";
import HeroTwo from "@/views/pages/index-3/components/HeroTwo.vue";
import HeroThree from "@/views/pages/index-3/components/HeroThree.vue";
import Brands from "@/views/pages/index-3/components/Brands.vue";
import Browse from "@/views/pages/index-1/components/Browse.vue";
import Categories from "@/views/pages/index-1/components/Categories.vue";
import CategoriesReal from "@/views/pages/index-1/components/CategoriesReal.vue";
import Sellers from "@/views/pages/index-1/components/Sellers.vue";
import Showcase from "@/views/pages/index-1/components/Showcase.vue";
import Save from "@/views/pages/index-3/components/Save.vue";
import Topics from "@/views/pages/index-4/components/Topics.vue";
import Testimonials from "@/views/pages/index-4/components/Testimonials.vue";
import Features from "@/views/pages/index-3/components/Features.vue";
import About from "@/views/pages/index-3/components/About.vue";
import Generator from "@/views/pages/index-3/components/Generator.vue";
import FeaturesCard from "@/views/pages/index-5/components/Features.vue";
import Blogs from "@/views/pages/index-1/components/Blogs.vue";
import Pricing1 from "@/views/pages/index-5/components/Pricing.vue";
import Pricing2 from "@/views/pages/index-4/components/Pricing.vue";
import Pricing from "@/views/pages/index-3/components/Pricing.vue";
import FAQs from "@/views/pages/index-3/components/FAQs.vue";
import Footer from "@/views/pages/index-3/components/Footer.vue";
import Background1 from "@/components/Background1.vue";
import BackToTop from "@/components/BackToTop.vue";

import { MoveRight } from "lucide-vue-next";
import avatar1 from "@/assets/images/avatars/img-1.png";
import avatar2 from "@/assets/images/avatars/img-2.png";
import avatar3 from "@/assets/images/avatars/img-3.png";

const navLinks: NavBarLinkType[] = [
  {
    id: "home",
    label: "Home",
    route: { url: "#home" },
  },
  {
    id: "features",
    label: "Features",
    route: { url: "#features" },
  },
  {
    id: "generator",
    label: "Generator",
    route: { url: "#generator" },
  },
  {
    id: "price",
    label: "Price",
    route: { url: "#price" },
  },
  // {
  //   id: "faq",
  //   label: "Faq",
  //   route: { url: "#faq" },
  // },
];
import { currentYear, appName, appAuthor, socialLinks } from "@/helpers";
</script>
