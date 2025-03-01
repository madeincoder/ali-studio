<template>
  <section
    class="pb-24"
    data-aos="zoom-out"
    data-aos-easing="ease"
    data-aos-duration="1000"
  >
    <div class="container">
      <div
        class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-px rounded-xl overflow-hidden"
      >
        <div
          class="group relative bg-slate-950/40 backdrop-blur-3xl transition-all duration-500 hover:bg-primary/40 overflow-hidden"
        >
          <div class="p-6">
            <div class="relative h-24 w-24 overflow-hidden text-transparent">
              <Diamond
                class="h-24 w-24 fill-primary/10 group-hover:fill-white/20"
              />
              <div
                class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-primary rounded-xl group-hover:text-white duration-500 inline-flex justify-center items-center"
              >
                <Wallet class="h-6 w-6" />
              </div>
            </div>

            <div class="mt-6">
              <a href="" class="text-xl font-medium text-white duration-500"
                >Create your wallet</a
              >
              <p
                class="text-default-300 group-hover:text-white/80 duration-500 mt-3"
              >
                Use Trust Wallet, Metamask or any wallet to connect to the app.
              </p>
              <p
                class="text-default-300 group-hover:text-white/80 duration-500 mt-2"
              >
                You can upload any files from your computer or use Youtube
                links. Keep in mind that our content repurposing works best with
                longer videos.
              </p>
            </div>
          </div>
        </div>

        <div
          class="group relative bg-slate-950/40 backdrop-blur-3xl transition-all duration-500 hover:bg-primary/40 overflow-hidden"
        >
          <div class="p-6">
            <div class="relative inline-block overflow-hidden text-transparent">
              <Diamond
                class="h-24 w-24 fill-primary/10 group-hover:fill-white/20"
              />
              <div
                class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-primary rounded-xl group-hover:text-white duration-500 inline-flex justify-center items-center"
              >
                <Shapes class="h-6 w-6" />
              </div>
            </div>

            <div class="mt-6">
              <a href="" class="text-xl font-medium text-white duration-500"
                >Create your cloud space</a
              >
              <!-- <p
                class="text-default-300 group-hover:text-white/80 duration-500 mt-3"
              >
                Upload your NFTs and set a title, description and price.
              </p> -->
              <p
                class="text-default-300 group-hover:text-white/80 duration-500 mt-3"
              >
                Create your personal space directly hosted on our cloud to allow
                you to store all your files safely and find them and share them
                at any time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Diamond, Wallet, Shapes } from "lucide-vue-next";
</script>
