<template>
  <div class="mt-60"></div>
  <div class="section1">
    <div class="d-flex justify-content-center">
      <div class="section2">
        <h1 class="">管理員登入</h1>
        <form class="">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">帳號:</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="請輸入帳號"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">密碼:</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="請輸入密碼"
            />
          </div>
          <div class="d-flex justify-content-center">
            <router-link to="/Center">
              <button type="submit" class="loginBtn">登入</button>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="boxBottom"></div>
</template>
<script setup></script>

<style scoped>
.section1 {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin: 0 auto;
  border-radius: 10px;
  max-width: 1440px;
  height: 750px;
  background-color: var(--bg-color1);
  background-repeat: no-repeat;
  background-size: 1440px 750px;
}
.section2 {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-top: 125px;
  background-color: #fff;
  width: 500px;
  height: 480px;
  border-radius: 20px;
  h1 {
    padding-top: 50px;
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    color: #000;
  }
  label {
    margin-top: 30px;
    padding-left: 80px;
    font-size: 24px;
    font-weight: bold;
    color: #000;
  }
  input {
    border: #aeaeae 1px solid;
    border-radius: 5px;
    width: 300px;
    height: 35px;
    margin: 0 auto;
    box-shadow: 2px 2px 2px 1px rgba(81, 81, 81, 0.1);
  }
  .loginBtn {
    margin-top: 20px;
    width: 150px;
    height: 50px;
    border-radius: 40px;
    color: #fff;
    background-color: var(--button-color1);
    border: 0px solid;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 2px 2px 2px 1px rgba(81, 81, 81, 0.5);
    &:hover {
      color: #fff;
      background-color: var(--button-color3);
    }
    &:active {
      color: #000;
      background-color: var(--button-color2);
    }
  }
}
</style>
