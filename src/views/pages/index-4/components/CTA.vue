<template>
  <section
    class="py-20"
    data-aos="fade-up"
    data-aos-easing="ease"
    data-aos-duration="1000"
  >
    <div class="container">
      <div class="max-w-xl mx-auto text-center">
        <h2 class="text-3xl font-medium capitalize text-white mb-4">
          Boost your results and burst with your friends
        </h2>
        <p class="text-sm text-default-200 font-medium">
          <b>Invites friends</b> to participate in the Universal Ali <br />
          adventure and receive <b>free gifts</b> and <b>tokens</b>
        </p>
        <div class="flex flex-wrap items-center justify-center gap-6 mt-10">
          <a
            href="#"
            class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"
            >Invite friends
          </a>
        </div>
        <!-- <form class="space-y-2 mt-6">
          <div class="relative w-full">
            <input
              type="email"
              id="subcribe"
              class="py-4 ps-4 pe-32 w-full h-14 text-white rounded-lg bg-default-950/40 backdrop-blur-3xl border-white/10 focus:ring-0 focus:border-white/10"
              placeholder="Enter your email :"
              name="email"
            />
            <button
              type="submit"
              class="inline-flex items-center justify-center gap-2 px-6 absolute top-[8px] end-[8px] h-10 bg-primary hover:bg-primary-hover border-primary hover:border-primary-700 text-white rounded-md"
            >
              <span class="text-base font-medium text-white hidden md:block"
                >Start for free</span
              >
              <Send
                class="h-5 w-5 text-default-300 group-hover:text-white md:hidden block"
              />
            </button>
          </div>
        </form> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Send } from "lucide-vue-next";
</script>
