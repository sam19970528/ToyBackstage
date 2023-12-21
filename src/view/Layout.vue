<template>
  <div>
    <div class="box1">
      <heade>
        <navbar />
      </heade>
      <main>
        <div class="d-flex">
          <sidebar />
          <router-view />
        </div>
      </main>
      <footer></footer>
    </div>
  </div>
</template>

<script setup>
import navbar from "@/components/navbar.vue";
import sidebar from "@/components/sidebar.vue";
</script>

<style scoped lang="scss">
.box1 {
  padding: 3px;
  height: 860px;
  background-color: var(--bg-color1);
}
</style>
