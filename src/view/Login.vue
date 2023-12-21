<template>
  <div class="box0"></div>
  <div class="box1">
    <div class="d-flex justify-content-center">
      <div class="box2">
        <h1 class="">管理員登入</h1>
        <p class="">帳號:</p>
        <input type="text" class="d-block mt-3" />
        <p class="">密碼:</p>
        <input type="text" class="d-block mt-3" />
        <div class="d-flex justify-content-center mt-5">
          <button type="button" class="btn loginBtn">登入</button>
        </div>
      </div>
    </div>
  </div>
  <div class="boxBottom"></div>
</template>
<script setup></script>

<style scoped>
.box0 {
  margin-top: 60px;
}
.box1 {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin: 0 auto;
  border-radius: 10px;
  max-width: 1440px;
  height: 750px;
  background-color: var(--bg-color1);
  background-repeat: no-repeat;
  background-size: 1440px 750px;
}
.box2 {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-top: 125px;
  background-color: #fff;
  width: 500px;
  height: 500px;
  border-radius: 20px;
}
.box2 h1 {
  padding-top: 63px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: #000;
}
.box2 p {
  margin-top: 30px;
  padding-left: 80px;
  font-size: 24px;
  font-weight: bold;
  color: #000;
}
.box2 input {
  border: #aeaeae 1px solid;
  border-radius: 5px;
  margin-top: 20px;
  width: 300px;
  height: 35px;
  margin: 0 auto;
  box-shadow: 2px 2px 2px 1px rgba(81, 81, 81, 0.5);
}
.loginBtn {
  width: 120px;
  height: 50px;
  border-radius: 40px;
  color: #fff;
  background-color: var(--button-color1);
  border: 0px solid;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 2px 2px 2px 1px rgba(81, 81, 81, 0.5);
}
.loginBtn:active {
  color: #000;
  background-color: var(--button-color2);
  border: 0px solid;
  font-size: 16px;
  font-weight: bold;
}
</style>
