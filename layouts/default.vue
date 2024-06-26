<!-- <script setup lang="ts">
import { useCustomizerStore } from "@/stores/customizer";
import { pl, zhHans } from "vuetify/locale";
const customizer = useCustomizerStore();
const title = ref("Kevin's Blog");
useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Nuxt3 Typescript based Admin Dashboard Template`
      : "Spikeadmin - Nuxt3 Typescript based Admin Dashboard Template";
  },
});
</script>

<template>
  <div><slot /></div>
</template> -->

<script setup lang="ts">
import { useCustomizerStore } from "@/stores/customizer";
const customizer = useCustomizerStore();
</script>
<!-- // ===============================|| Blank Layout
||=============================== // -->
<template>
  <!-----RTL LAYOUT------->
  <v-locale-provider v-if="customizer.setRTLLayout" rtl>
    <v-app class="authpage" :theme="customizer.actTheme">
      <NuxtPage />
    </v-app>
  </v-locale-provider>

  <!-----LTR LAYOUT------->
  <v-locale-provider v-else>
    <v-app class="authpage" :theme="customizer.actTheme">
      <NuxtPage />
    </v-app>
  </v-locale-provider>
</template>
