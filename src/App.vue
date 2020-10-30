<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import emptyLayout from "@/layouts/emptyLayout";
import mainLayout from "@/layouts/mainLayout";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  },
  components: {
    emptyLayout,
    mainLayout
  }
};
</script>

<style lang="scss">
@import "../node_modules/materialize-css/dist/css/materialize.min";
</style>

<style lang="scss">
@import "assets/index.css";
</style>

