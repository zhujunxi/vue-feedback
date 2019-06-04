import VueFeedback from "./main";

const install = function(Vue) {
  Vue.component("VueFeedback", VueFeedback);
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
