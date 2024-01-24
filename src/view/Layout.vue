<script setup>
import navbar from "@/components/navbar.vue";
import sidebar from "@/components/sidebar.vue";
</script>

<template>
  <div>
    <div class="box1">
      <navbar />
      <main>
        <div class="d-flex">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <sidebar />
              </div>
              <div class="col-md-9">
                <router-view />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box1 {
  padding: 5px;
  height: 860px;
  background-color: var(--bg-color1);
}
</style>
