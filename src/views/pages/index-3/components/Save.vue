<template>
  <section id="ai_made" class="pb-24">
    <div class="container">
      <div class="grid md:grid-cols-2 gap-6 items-center">
        <div
          class="relative"
          data-aos="fade-right"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <img
            :src="aiImg7"
            class="rounded-xl h-full w-full aspect-square"
            alt=""
          />
          <div class="absolute inset-0 bg-default-950/50 rounded-xl"></div>
          <div class="hidden lg:block">
            <div class="absolute top-10 -end-52">
              <div class="inline-block">
                <div
                  class="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg"
                >
                  <div class="max-w-sm text-center p-6">
                    <p class="text-base font-medium text-default-300">
                      The image is original and not copied or borroweb from
                      someone else's work
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute top-auto bottom-20 -start-20">
              <div class="inline-block">
                <div
                  class="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg"
                >
                  <div class="py-4 px-6">
                    <h5>Detailed Work</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <div class="max-w-md text-end ms-auto">
            <span
              class="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-primary bg-primary/10"
              >Unique Images</span
            >
            <h2 class="text-3xl font-medium capitalize text-default-200 mt-4">
              Save your work on the blockchain for copyright
            </h2>
            <p class="text-base font-medium text-default-300 mt-5 mb-8">
              You can keep it, record it, but also sell it and collect rights on
              your images and work
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full bg-primary hover:bg-primary-hover transition-all duration-300"
              >Save
              <MoveRight class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MoveRight } from "lucide-vue-next";
import aiImg7 from "@/assets/images/ali/save.jpg";
</script>
