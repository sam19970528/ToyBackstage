<script setup>
defineProps({
  msg: String,
});
</script>

<template>
  <div class="navbar">
    <router-link to="/Center">
      <img src="../assets/img/logo.svg" alt="" />
    </router-link>
    <!-- <input type="text" /> -->
    <!-- <button type="button" class="btn searchBtn">搜尋</button> -->
    <router-link to="/Login">
      <button type="button" class="btn logOutBtn">登出</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  height: 100px;
  margin: 0 auto;
  width: 1300px;
  margin-top: 30px;
  background-color: var(--navbar-color1);
  img {
    cursor: pointer;
    margin-left: 60px;
    &::after {
      content: "";
      display: block;
      width: 0%;
      height: 5px;
      background-color: #fff;
    }
    &:hover::after {
      width: 100%;
      transition: 0.3s;
    }
  }
  input {
    width: 310px;
    height: 45px;
    margin-left: 100px;
    margin-right: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.55);
    border-radius: 5px;
  }
  .searchBtn {
    position: relative;
    top: 0px;
    right: 130px;
    width: 120px;
    height: 45px;
    border-radius: 10px;
    color: #fff;
    background-color: var(--button-color1);
    border: 0px solid;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.55);
    &:active {
      color: #000;
      background-color: var(--button-color2);
      border: 0px solid;
      font-size: 16px;
      font-weight: bold;
    }
    &:hover {
      color: #fff;
      background-color: var(--button-color4);
    }
  }
  .logOutBtn {
    margin-right: 50px;
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
    &:active {
      color: #fff;
      background-color: var(--button-color1);
      border: 0px solid;
      font-size: 16px;
      font-weight: bold;
    }
    &:hover {
      color: #fff;
      background-color: var(--button-color4);
    }
  }
}
</style>
