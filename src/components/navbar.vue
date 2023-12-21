<script setup>
defineProps({
  msg: String,
});
</script>

<template>
  <div class="navbar">
    <div>
      <img src="../assets/img/logo.svg" alt="" />
      <input type="text" />
      <button type="button" class="btn searchBtn">搜尋</button>
      <button type="button" class="btn logOutBtn">登出</button>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  margin: 0 auto;
  width: 1440px;
  margin-top: 30px;
  background-color: var(--navbar-color1);
}
.navbar input {
  width: 310px;
  height: 45px;
  margin-left: 100px;
  margin-right: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.55);
}
.navbar img {
  margin: 20px;
}
.searchBtn {
  position: relative;
  width: 120px;
  height: 45px;
  border-radius: 10px;
  color: #fff;
  background-color: var(--button-color1);
  border: 0px solid;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.55);
}
.searchBtn:active {
  color: #000;
  background-color: var(--button-color2);
  border: 0px solid;
  font-size: 16px;
  font-weight: bold;
}
.search-icon {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-size: cover;
}
.user-icon {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-size: cover;
}
.logOutBtn {
  margin-left: 520px;
  position: relative;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  color: var(--button-color1);
  background-color: #fff;
  border: 0px solid;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.55);
}
.logOutBtn:active {
  color: #fff;
  background-color: var(--button-color1);
  border: 0px solid;
  font-size: 16px;
  font-weight: bold;
}
</style>
