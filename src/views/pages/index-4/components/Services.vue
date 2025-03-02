<template>
  <section class="py-20">
    <div class="container">
      <div class="border rounded-2xl border-white/10 bg-slate-950/40">
        <div class="p-6">
          <!-- Tabs Navigation -->
          <nav
            class="flex flex-wrap 2xl:flex-nowrap items-center gap-6 justify-evenly rounded-md space-x-3 p-2"
          >
            <button
              type="button"
              class="py-5 px-10 rounded-lg border border-white/10 transition-all text-lg font-medium text-white"
              :class="{ 'bg-primary': activeTab === 'ai-story' }"
              @click="activeTab = 'ai-story'"
            >
              AI Story
            </button>
            <button
              type="button"
              class="py-5 px-10 rounded-lg border border-white/10 transition-all text-lg font-medium text-white"
              :class="{ 'bg-primary': activeTab === 'ai-image' }"
              @click="activeTab = 'ai-image'"
            >
              AI Image Generator
            </button>
            <button
              type="button"
              class="py-5 px-10 rounded-lg border border-white/10 transition-all text-lg font-medium text-white"
              :class="{ 'bg-primary': activeTab === 'ai-video' }"
              @click="activeTab = 'ai-video'"
            >
              AI Video
            </button>
            <button
              type="button"
              class="py-5 px-10 rounded-lg border border-white/10 transition-all text-lg font-medium text-white"
              :class="{ 'bg-primary': activeTab === 'ai-sound' }"
              @click="activeTab = 'ai-sound'"
            >
              AI Sound
            </button>
          </nav>

          <!-- Tabs Content -->
          <div class="mt-10">
            <!-- AI Story -->
            <div
              v-if="activeTab === 'ai-story'"
              class="grid xl:grid-cols-2 gap-6"
            >
              <div class="p-6 rounded-xl border border-white/10">
                <h2 class="text-3xl font-medium text-white">AI Story</h2>
                <p class="text-base font-medium text-default-200 mt-5">
                  AI-generated stories with custom characters and immersive
                  plots.
                </p>
              </div>
              <div class="p-6 rounded-xl border border-white/10">
                <img :src="aiImg1" class="rounded-md" alt="AI Story Image" />
              </div>
            </div>

            <!-- AI Image Generator -->
            <div
              v-if="activeTab === 'ai-image'"
              class="grid xl:grid-cols-2 gap-6"
            >
              <div class="p-6 rounded-xl border border-white/10">
                <h2 class="text-3xl font-medium text-white">
                  AI Image Generator
                </h2>
                <p class="text-base font-medium text-default-200 mt-5">
                  Generate AI-powered creative images instantly.
                </p>
              </div>
              <div class="p-6 rounded-xl border border-white/10">
                <div>
                  <h2 class="text-lg font-medium text-white mb-8">
                    Advanced options+
                  </h2>
                  <div class="grid grid-cols-3 gap-6">
                    <img :src="aiImg6" class="rounded-md" alt="" />
                    <img :src="aiImg9" class="rounded-md" alt="" />
                    <img :src="aiImg22" class="rounded-md" alt="" />
                    <img :src="aiImg14" class="rounded-md" alt="" />
                    <img :src="aiImg21" class="rounded-md" alt="" />
                    <img :src="aiImg10" class="rounded-md" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <!-- AI Video -->
            <div
              v-if="activeTab === 'ai-video'"
              class="grid xl:grid-cols-2 gap-6"
            >
              <div class="p-6 rounded-xl border border-white/10">
                <h2 class="text-3xl font-medium text-white">
                  Thousands of videos
                </h2>
                <p class="text-base font-medium text-default-200 mt-5">
                  <b>Created</b> or <b>borrowed</b> thousands of videos in our
                  database, and thanks to all our intelligent tools to create
                  characters, scenery, landscapes, animated objects, animated
                  characters, and many things for a universe
                  <b>without limit</b> and <b>wonderful.</b>
                </p>
              </div>
              <div class="p-6 rounded-xl border border-white/10">
                <div>
                  <h2 class="text-lg font-medium text-white mb-8">
                    Advanced options+
                  </h2>
                  <div class="grid grid-cols-3 gap-6">
                    <video
                      v-for="(videoSrc, index) in cachedVideos"
                      :key="index"
                      class="w-full h-full object-cover rounded-md"
                      autoplay
                      loop
                      muted
                      playsinline
                      preload="auto"
                      :poster="getPoster(videoSrc)"
                    >
                      <source :src="videoSrc" type="video/webm" />
                    </video>
                  </div>
                </div>
              </div>
            </div>

            <!-- AI Sound -->
            <div
              v-if="activeTab === 'ai-sound'"
              class="grid xl:grid-cols-2 gap-6"
            >
              <div class="p-6 rounded-xl border border-white/10">
                <h2 class="text-3xl font-medium text-white">AI Sound</h2>
                <p class="text-base font-medium text-default-200 mt-5">
                  AI-generated sound effects and background music.
                </p>
              </div>
              <div class="p-6 rounded-xl border border-white/10">
                <img
                  :src="aiImg2"
                  class="rounded-md mx-auto"
                  alt="AI Sound Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// Active tab state
const activeTab = ref("ai-video");

// Image sources
import aiImg1 from "@/assets/images/ali/ai-story.png";
import aiImg2 from "@/assets/images/ali/ai-sound.png";
import aiImg6 from "@/assets/images/ai/img-6.jpg";
import aiImg9 from "@/assets/images/ai/img-9.jpg";
import aiImg10 from "@/assets/images/ai/img-10.jpg";
import aiImg14 from "@/assets/images/ai/img-14.jpg";
import aiImg21 from "@/assets/images/ai/img-21.jpg";
import aiImg22 from "@/assets/images/ai/img-22.jpg";

// List of video filenames
const aiVideos = [
  "32.webm",
  "31.webm",
  "30.webm",
  "9.webm",
  "27.webm",
  "26.webm",
  "24.webm",
  "3.webm",
  "17.webm",
  "15.webm",
  "14.webm",
  "12.webm",
  "10.webm",
  "4.webm",
  "03.webm",
];

// Function to get full video URL
const getVideoUrl = (filename: string) =>
  new URL(`/src/assets/videos/${filename}`, import.meta.url).href;

// Function to generate poster image URL (same name but with .png extension)
const getPoster = (videoUrl: string) => videoUrl.replace(/\.webm$/, ".png");

// Cache variables
const cachedVideos = ref<string[]>([]);

// Load cache on mount
onMounted(() => {
  // Load videos from localStorage
  const storedVideos = localStorage.getItem("cachedVideos");
  if (storedVideos) {
    cachedVideos.value = JSON.parse(storedVideos);
  } else {
    const videoUrls = aiVideos.map(getVideoUrl);
    cachedVideos.value = videoUrls;
    localStorage.setItem("cachedVideos", JSON.stringify(videoUrls));
  }
});
</script>

<style scoped>
video {
  border-radius: 8px;
  background: black;
}
</style>
