// import { gsap } from "gsap";
// import { Flip } from "gsap/Flip";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Observer } from "gsap/Observer";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { TextPlugin } from "gsap/TextPlugin";

// export default defineNuxtPlugin(nuxtApp => {
//     gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, TextPlugin);
// })

import { gsap } from "gsap";
import {
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable,
  MotionPathPlugin,
  TextPlugin,
} from "gsap/all";

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(
    Flip,
    ScrollTrigger,
    Observer,
    ScrollToPlugin,
    Draggable,
    MotionPathPlugin,
    TextPlugin
  );

  nuxtApp.provide("gsap", gsap); // Make GSAP available throughout your components

  nuxtApp.hook("app:mounted", () => {
    // Execute GSAP animations or interactions here
    // (access gsap using `useNuxtApp().$gsap` in your components)
  });
});
