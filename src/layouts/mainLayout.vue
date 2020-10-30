<template>
  <div class="app-main-layout">
    <div class="app-main-layout">
      <navbar @click="isOpen = !isOpen" />
      <sidebar v-model="isOpen" />
      <main class="app-content" :class="{ full: !isOpen }">
        <div class="app-page">
          <router-view></router-view>
        </div>
      </main>

      <div class="fixed-action-btn">
        <a class="btn-floating btn-large blue" href="#">
          <i class="large material-icons">add</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/app/navbar";
import sidebar from "@/components/app/sidebar";
export default {
  name: "main-layout",
  data: () => ({
    isOpen: true
  }),
  components: {
    navbar,
    sidebar
  }
};
</script>
