<template>
  <AuthLayout>
    <div
      class="backdrop-blur-2xl bg-default-950/40 rounded-2xl overflow-hidden max-w-5xl mx-auto"
    >
      <div class="grid lg:grid-cols-2 gap-10">
        <div class="hidden lg:block ps-4 py-4">
          <div class="relative rounded-xl overflow-hidden h-full w-full">
            <img
              :src="authImg"
              alt=""
              class="w-full h-full transform -scale-x-100"
            />
            <!-- <div class="absolute inset-0 bg-default-950/40">
              <div class="flex items-end justify-center h-full">
                <div class="p-6 text-start">
                  <h5 class="text-xl font-bold text-white mb-3">Is the best way, <br> to build your marketing strategy!
                  </h5>
                  <p class="text-base font-medium text-default-400">Try all paid functions for free. just register and
                    create your first widget, it simple and fast.</p>
                </div>
              </div>
            </div> -->
          </div>
        </div>

        <div class="flex flex-col h-full p-10 lg:ps-0">
          <div class="pb-10">
            <LogoBox />
          </div>
          <div class="pb-6 my-auto text-center">
            <h4 class="text-2xl font-bold text-white mb-4">See you Again!</h4>
            <p class="text-default-300 mb-5 max-w-sm mx-auto">
              You are now successfully sign out.
            </p>
            <div class="flex items-start justify-center">
              <img :src="logoutImg" alt="" class="h-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full text-center mt-5">
      <p class="text-default-300 leading-6 text-base font-medium">
        Back to
        <router-link
          :to="{ name: 'auth.sign-in' }"
          class="text-primary font-semibold ms-1"
          >Sign In</router-link
        >
      </p>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import LogoBox from "@/components/LogoBox.vue";
import authImg from "@/assets/images/ali/photo-3.jpg";
import logoutImg from "@/assets/images/logout.svg";
</script>
