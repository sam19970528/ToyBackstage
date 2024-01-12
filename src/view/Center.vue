<template>
  <ul class="content-card">
    <li>訂單數量</li>
    <li>會員數量</li>
    <li>營業金額</li>
    <li>庫存數量</li>
  </ul>
</template>

<script setup></script>
<style>
ul {
  display: flex;
  li {
    width: 255px;
    height: 110px;
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
  }
}
</style>
