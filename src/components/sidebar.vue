<script setup></script>

<template>
  <div class="list-group list-groupSet">
    <router-link
      to="/Center"
      class="list-group-item list-group-item-action"
      aria-current="true"
    >
      <span class="Center icon"> </span>後台首頁
    </router-link>
    <router-link to="/Product" class="list-group-item">
      <span class="productIcon icon"> </span>商品管理
    </router-link>
    <router-link to="/Sort" class="list-group-item">
      <span class="sort icon"> </span>分類管理
    </router-link>
    <router-link to="/Order" class="list-group-item list-group-item-action">
      <span class="orderIcon icon"> </span>訂單管理
    </router-link>
    <router-link to="/Member" class="list-group-item list-group-item-action">
      <span class="userIcon icon"> </span>會員管理
    </router-link>
    <router-link
      to="/SeviceSetting"
      class="list-group-item list-group-item-action"
    >
      <span class="settingIcon icon"> </span>系統設定
    </router-link>
  </div>
</template>

<style lang="scss">
@import "../src/assets/scss/all.scss";

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

.list-groupSet .Center {
  background-image: url("@/assets/img/icon/Vector.svg");
}
.list-groupSet .productIcon {
  background-image: url("../assets/img/icon/icon-park-outline_ad-product.svg");
}
.list-groupSet .sort {
  background-image: url("../assets/img/icon/sort.svg");
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
</style>
