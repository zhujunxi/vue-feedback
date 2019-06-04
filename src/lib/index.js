import WebFeedback from "./main";

const install = function(Vue) {
  Vue.component("WebFeedback", WebFeedback);
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
