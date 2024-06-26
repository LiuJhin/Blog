<script setup lang="ts">
import { ref } from "vue";
import {
  demosMegamenu,
  appsMegamenu,
  productsSlider,
} from "@/_mockApis/landingpage/lpPage";

const toDetails = (link: string) => {
  console.log(link);
};
</script>
<template>
  <div class="py-md-16 bg-containerBg">
    <v-container class="maxWidth py-md-16" id="demos">
      <v-row class="justify-center">
        <v-col
          cols="12"
          lg="8"
          sm="10"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <h2
            class="text-center mt-6 sectionTitle font-weight-bold text-grey200"
          >
            The beauty of life lies in the adventures we take and the landscapes
            we encounte
          </h2>
        </v-col>
      </v-row>
      <div class="mt-sm-16 mt-10">
        <div class="product-slider position-relative lp_wrapper">
          <div class="d-flex justify-center">
            <v-chip class="bg-primary text-white">Life track</v-chip>
          </div>
          <v-row class="mt-3 row-up">
            <template v-for="demo in productsSlider" :key="demo.img">
              <v-col cols="12" md="4" sm="6" v-if="demo.type">
                <v-card
                  class="border"
                  elevation="0"
                  variant="outlined"
                  rounded="lg"
                >
                  <v-sheet
                    class="text-center position-relative pa-4 pb-0 bg-lightsecondary rounded-t-lg"
                  >
                    <div class="overflow-hidden">
                      <div class="megamenu lh-0 position-relative">
                        <img
                          :src="demo.img"
                          :alt="demo.img"
                          class="w-100 rounded-t-lg h-100"
                          style="max-height: 190px"
                        />
                        <v-btn
                          class="bg-primary text-white position-absolute prev-btn pr-3 btn-custom-lg"
                          rounded="pill"
                          size="large"
                          target="_blank"
                          @click="toDetails(demo.link)"
                          >Live Preview</v-btn
                        >
                      </div>
                    </div>
                  </v-sheet>
                  <div class="pa-4">
                    <h6 class="text-h6 font-weight-semibold">
                      {{ demo.name }}
                    </h6>
                    <p class="text-subtitle-1 text-grey100 mt-1">Demo</p>
                  </div>
                </v-card>
              </v-col>
            </template>
          </v-row>
          <div class="d-flex justify-center mt-sm-12 mt-6">
            <v-chip class="bg-primary text-white">Apps</v-chip>
          </div>
          <v-row class="mt-3 row-up">
            <template v-for="demo in productsSlider" :key="demo.img">
              <v-col cols="12" md="4" sm="6" v-if="!demo.type">
                <v-card
                  class="border"
                  elevation="0"
                  variant="outlined"
                  rounded="lg"
                >
                  <v-sheet
                    class="text-center position-relative pa-4 pb-0 bg-lightsecondary rounded-t-lg"
                  >
                    <div class="overflow-hidden rounded-md">
                      <div class="megamenu lh-0 position-relative">
                        <img
                          :src="demo.img"
                          :alt="demo.img"
                          class="w-100 rounded-t-lg h-100"
                        />
                        <v-btn
                          class="bg-primary text-white position-absolute prev-btn pr-3 btn-custom-lg"
                          rounded="pill"
                          size="large"
                          target="_blank"
                          @click="toDetails(demo.link)"
                          >Live Preview</v-btn
                        >
                      </div>
                    </div>
                  </v-sheet>
                  <div class="pa-4">
                    <h6 class="text-h6 font-weight-semibold">
                      {{ demo.name }}
                    </h6>
                    <p class="text-subtitle-1 text-grey100 mt-1">Application</p>
                  </div>
                </v-card>
              </v-col>
            </template>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>
