<!-- <script setup>
// import { ref } from "vue";

defineProps({
  msg: String,
});

// const count = ref(0);
</script>

<template>
  <div class="box1">
    <div class="navbar">
      <div>
        <img src="../assets/img/logo.svg" alt="" />
        <input type="text" />
        <button type="button" class="btn searchBtn">搜尋</button>
        <button type="button" class="btn logOutBtn">登出</button>
      </div>
    </div>
    <div class="d-flex">
      <div class="list-group list-groupSet">
        <a
          href="#"
          class="list-group-item list-group-item-action"
          aria-current="true"
        >
          <span class="homeIcon icon"> </span>後台首頁
        </a>
        <a href="#" class="list-group-item">
          <span class="productIcon icon"> </span>商品管理</a
        >
        <a href="#" class="list-group-item list-group-item-action">
          <span class="orderIcon icon"> </span>訂單管理</a
        >
        <a href="#" class="list-group-item list-group-item-action">
          <span class="userIcon icon"> </span>會員管理</a
        >
        <a href="#" class="list-group-item list-group-item-action">
          <span class="settingIcon icon"> </span>系統設定</a
        >
      </div>
      <div class="content d-flex">
        <div class="content-card">訂單數量</div>
        <div class="content-card">會員數量</div>
        <div class="content-card">營業金額</div>
        <div class="content-card">庫存數量</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box1 {
  padding: 3px;
  height: 900px;
  background-color: var(--bg-color1);
}
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
.list-groupSet {
  width: 260px;
  height: 590px;
  margin-left: 185px;
  margin-top: 40px;
  text-align: center;
}
.list-groupSet a {
  position: relative;
  padding: 30px;
  background-color: var(--navbar-color1);
  font-weight: bold;
  color: #fff;
  border-bottom: 1px solid #fff;
}
.list-groupSet a:hover {
  background-color: #7f96cf;
}
.icon {
  position: absolute;
  top: 30px;
  left: 65px;
  width: 20px;
  height: 22px;
  background-size: cover;
}

.list-groupSet .homeIcon {
  background-image: url("../assets/img/icon/Vector.svg");
}
.list-groupSet .productIcon {
  background-image: url("../assets/img/icon/icon-park-outline_ad-product.svg");
}
.list-groupSet .orderIcon {
  background-image: url("../assets/img/icon/lets-icons_order.svg");
}
.list-groupSet .userIcon {
  background-image: url("../assets/img/icon/user.svg");
}
.list-groupSet .settingIcon {
  background-image: url("../assets/img/icon/setting.svg");
}
.content {
  margin-top: 40px;
  margin-left: 50px;
}

.content-card {
  margin-right: 40px;
  border-radius: 10px;
  text-align: center;
  width: 250px;
  height: 105px;
  background-color: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-size: 24px;
  font-weight: bold;
  color: var(--text-green);
}
</style> -->
