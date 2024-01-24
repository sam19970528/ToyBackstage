<script setup></script>
<template>
  <ul class="content-card">
    <li>
      訂單數量
      <i class="fas fa-clipboard-list"></i>
      <p>123</p>
    </li>
    <li>
      會員數量
      <i class="fas fa-user"></i>
      <p>122</p>
    </li>
    <li>
      營業金額
      <i class="fas fa-coins"></i>
      <p>$12300</p>
    </li>
    <li>
      庫存數量<i class="fas fa-box"></i>
      <p>115</p>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  li {
    width: 300px;
    height: 120px;
    margin: 40px 20px;
    padding-top: 10px;
    border-radius: 10px;
    text-align: center;
    background-color: #fff;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    font-size: 24px;
    font-weight: bold;
    color: var(--text-green);
    list-style: none;
    font-family: "Lemon";
    p {
      margin-top: 10px;
      color: var(--button-color1);
    }
  }
}
</style>
