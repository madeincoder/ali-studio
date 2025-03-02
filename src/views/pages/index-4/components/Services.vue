<template>
  <section
    class="py-20"
    data-aos="zoom-in"
    data-aos-easing="ease"
    data-aos-duration="1000"
  >
    <div class="container">
      <div class="border rounded-2xl border-white/10 bg-slate-950/40">
        <div class="p-6">
          <div>
            <nav
              class="flex flex-wrap 2xl:flex-nowrap items-center gap-6 justify-evenly rounded-md space-x-3 p-2"
              aria-label="Tabs"
              role="tablist"
            >
              <button
                type="button"
                class="hs-tab-active:-semibold hs-tab-active:bg-primary py-5 px-10 rounded-lg items-center gap-2 border border-white/10 -mb-px transition-all text-lg font-medium space-nowrap text-white"
                id="tabs-with-underline-item-4"
                data-hs-tab="#tabs-with-underline-4"
                aria-controls="tabs-with-underline-4"
                role="tab"
              >
                AI Story
              </button>
              <button
                type="button"
                class="hs-tab-active:-semibold hs-tab-active:bg-primary py-5 px-10 rounded-lg items-center gap-2 border border-white/10 -mb-px transition-all text-lg font-medium space-nowrap text-white"
                id="tabs-with-underline-item-5"
                data-hs-tab="#tabs-with-underline-5"
                aria-controls="tabs-with-underline-5"
                role="tab"
              >
                AI Image Generator
              </button>
              <button
                type="button"
                class="hs-tab-active:-semibold hs-tab-active:bg-primary py-5 px-10 rounded-lg items-center gap-2 border border-white/10 -mb-px transition-all text-lg font-medium space-nowrap text-white active"
                id="tabs-with-underline-item-6"
                data-hs-tab="#tabs-with-underline-6"
                aria-controls="tabs-with-underline-6"
                role="tab"
              >
                AI Video
              </button>
              <button
                type="button"
                class="hs-tab-active:-semibold hs-tab-active:bg-primary py-5 px-10 rounded-lg items-center gap-2 border border-white/10 -mb-px transition-all text-lg font-medium space-nowrap text-white"
                id="tabs-with-underline-item-7"
                data-hs-tab="#tabs-with-underline-7"
                aria-controls="tabs-with-underline-7"
                role="tab"
              >
                AI Sound
              </button>
            </nav>

            <div class="mt-10 overflow-hidden">
              <div
                id="tabs-with-underline-4"
                class="transition-all duration-300 transform hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-underline-item-1"
              >
                <div class="grid xl:grid-cols-2 gap-6">
                  <div class="p-6 rounded-xl border border-white/10">
                    <h2 class="text-3xl font-medium text-white">
                      Thousands of videos
                    </h2>
                    <p class="text-base font-medium text-default-200 mt-5">
                      <b>Created</b> or <b>borrowed</b> thousands of videos in
                      our database, and thanks to all our intelligent tools to
                      create characters, scenery, landscapes, animated objects,
                      animated characters, and many things for a universe
                      <b>without limit</b> and <b>wonderful.</b>
                    </p>
                  </div>
                  <div class="p-6 rounded-xl border border-white/10">
                    <img :src="aiImg1" class="rounded-md" alt="" />
                  </div>
                </div>
              </div>

              <div
                id="tabs-with-underline-5"
                class="transition-all duration-300 transform active"
                role="tabpanel"
                aria-labelledby="tabs-with-underline-item-2"
              >
                <div class="grid xl:grid-cols-2 gap-6">
                  <div class="p-6 rounded-xl border border-white/10">
                    <h2 class="text-3xl font-medium text-white">
                      Thousands of videos
                    </h2>
                    <p class="text-base font-medium text-default-200 mt-5">
                      <b>Created</b> or <b>borrowed</b> thousands of videos in
                      our database, and thanks to all our intelligent tools to
                      create characters, scenery, landscapes, animated objects,
                      animated characters, and many things for a universe
                      <b>without limit</b> and <b>wonderful.</b>
                    </p>
                  </div>
                  <div class="p-6 rounded-xl border border-white/10">
                    <div class="bg-default-900/50 p-3 rounded-lg">
                      <h2 class="text-lg font-medium text-white">Script.js</h2>
                      <p class="text-base font-medium text-default-200 py-5">
                        "date pulbilshed":
                        <span class="text-primary"
                          >"2015-02-05Tob.00-00+08.00",</span
                        >
                      </p>
                      <P class="text-base font-medium text-default-200"
                        >"author":{ <br />
                        <span class="ps-7"
                          >"private": <span class="text-primary">true ;</span>
                          <br
                        /></span>
                        <span class="ps-7"
                          >"author":
                          <span class="text-primary">coderthemes ;</span> <br
                        /></span>
                        }
                      </P>

                      <P class="text-base font-medium text-default-200 pt-5"
                        >"publlsher":{ <br />
                        <span class="ps-7"
                          >"@type": <span class="text-primary">text ;</span>
                          <br
                        /></span>
                        <span class="ps-7"
                          >"@name":
                          <span class="text-primary">tailwind ;</span> <br
                        /></span>
                        }
                      </P>

                      <button
                        class="text-base font-medium w-full py-2 mt-8 rounded-md text-white bg-slate-600/50"
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="tabs-with-underline-6"
                class="transition-all duration-300 transform active"
                role="tabpanel"
                aria-labelledby="tabs-with-underline-item-2"
              >
                <div class="grid xl:grid-cols-2 gap-6">
                  <div class="p-6 rounded-xl border border-white/10">
                    <h2 class="text-3xl font-medium text-white">
                      Thousands of videos
                    </h2>
                    <p class="text-base font-medium text-default-200 mt-5">
                      <b>Created</b> or <b>borrowed</b> thousands of videos in
                      our database, and thanks to all our intelligent tools to
                      create characters, scenery, landscapes, animated objects,
                      animated characters, and many things for a universe
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
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source :src="aiVideo1" type="video/webm" />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source :src="aiVideo2" type="video/webm" />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source :src="aiVideo3" type="video/webm" />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source :src="aiVideo4" type="video/webm" />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source :src="aiVideo5" type="video/webm" />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source :src="aiVideo6" type="video/webm" />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source :src="aiVideo7" type="video/webm" />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source :src="aiVideo8" type="video/webm" />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source :src="aiVideo9" type="video/webm" />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source :src="aiVideo10" type="video/webm" />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source :src="aiVideo11" type="video/webm" />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source :src="aiVideo12" type="video/webm" />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source :src="aiVideo13" type="video/webm" />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source :src="aiVideo14" type="video/webm" />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source :src="aiVideo15" type="video/webm" />
                        </video>
                      </div>
                      <!-- <div class="grid grid-cols-3 gap-6">
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source
                            src="https://ali-universe.website/videos/studio/32.mov"
                            type="video/mp4"
                          />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source
                            src="https://ali-universe.website/videos/studio/31.mov"
                            type="video/mp4"
                          />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source
                            src="https://ali-universe.website/videos/studio/30.mov"
                            type="video/mp4"
                          />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source
                            src="https://ali-universe.website/videos/studio/9.mov"
                            type="video/mp4"
                          />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source
                            src="https://ali-universe.website/videos/studio/27.mov"
                            type="video/mp4"
                          />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source
                            src="https://ali-universe.website/videos/studio/26.mov"
                            type="video/mp4"
                          />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source
                            src="https://ali-universe.website/videos/studio/24.mov"
                            type="video/mp4"
                          />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source
                            src="https://ali-universe.website/videos/studio/03.mov"
                            type="video/mp4"
                          />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source
                            src="https://ali-universe.website/videos/studio/17.mov"
                            type="video/mp4"
                          />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source
                            src="https://ali-universe.website/videos/studio/15.mov"
                            type="video/mp4"
                          />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source
                            src="https://ali-universe.website/videos/studio/14.mov"
                            type="video/mp4"
                          />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source
                            src="https://ali-universe.website/videos/studio/12.mov"
                            type="video/mp4"
                          />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source
                            src="https://ali-universe.website/videos/studio/10.mov"
                            type="video/mp4"
                          />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source
                            src="https://ali-universe.website/videos/studio/4.mov"
                            type="video/mp4"
                          />
                        </video>
                        <video
                          ref="videoRef"
                          class="w-full h-full object-cover"
                          autoplay
                          loop
                          muted
                          playsinline
                          preload="auto"
                        >
                          <source
                            src="https://ali-universe.website/videos/studio/3.mov"
                            type="video/mp4"
                          />
                        </video>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="tabs-with-underline-7"
                class="transition-all duration-300 transform hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-underline-item-2"
              >
                <div class="grid xl:grid-cols-2 gap-6">
                  <div class="p-6 rounded-xl border border-white/10">
                    <h2 class="text-3xl font-medium text-white">
                      Thousands of videos
                    </h2>
                    <p class="text-base font-medium text-default-200 mt-5">
                      <b>Created</b> or <b>borrowed</b> thousands of videos in
                      our database, and thanks to all our intelligent tools to
                      create characters, scenery, landscapes, animated objects,
                      animated characters, and many things for a universe
                      <b>without limit</b> and <b>wonderful.</b>
                    </p>
                  </div>
                  <div class="p-6 rounded-xl border border-white/10">
                    <img :src="aiImg2" class="rounded-md mx-auto" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import aiImg1 from "@/assets/images/ai/img-1.jpg";
import aiImg2 from "@/assets/images/ai/img-2.jpg";
import aiVideo1 from "@/assets/videos/32.webm";
import aiVideo2 from "@/assets/videos/31.webm";
import aiVideo3 from "@/assets/videos/30.webm";
import aiVideo4 from "@/assets/videos/9.webm";
import aiVideo5 from "@/assets/videos/27.webm";
import aiVideo6 from "@/assets/videos/26.webm";
import aiVideo7 from "@/assets/videos/24.webm";
import aiVideo8 from "@/assets/videos/3.webm";
import aiVideo9 from "@/assets/videos/17.webm";
import aiVideo10 from "@/assets/videos/15.webm";
import aiVideo11 from "@/assets/videos/14.webm";
import aiVideo12 from "@/assets/videos/12.webm";
import aiVideo13 from "@/assets/videos/10.webm";
import aiVideo14 from "@/assets/videos/4.webm";
import aiVideo15 from "@/assets/videos/3.webm";
</script>
