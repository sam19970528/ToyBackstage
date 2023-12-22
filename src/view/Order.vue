<template>
  <div>
    <div class="content">
      <table class="table">
        <thead class="">
          <tr class="text-center">
            <th scope="col">#</th>
            <th scope="col">訂單編號</th>
            <th scope="col">訂單日期</th>
            <th scope="col">商品ID</th>
            <th scope="col">用戶姓名</th>
            <th scope="col">訂單狀態</th>
            <th scope="col">支付方式</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <th scope="row">1</th>
            <td>710112</td>
            <td>2022/12/5</td>
            <td>12</td>
            <td>Tom</td>
            <td>已下單</td>
            <td>LINEPAY</td>
          </tr>
          <tr class="text-center">
            <th scope="row">2</th>
            <td>710112</td>
            <td>2022/12/5</td>
            <td>12</td>
            <td>SAM</td>
            <td>已下單</td>
            <td>LINEPAY</td>
          </tr>
        </tbody>
      </table>
    </div>
    <footer><pagination /></footer>
  </div>
</template>

<script setup>
import pagination from "@/components/pagination.vue";
</script>

<style scoped>
.content {
  margin-top: 40px;
  margin-left: 50px;
  background: #fff;
  width: 1140px;
  height: 450px;
  border-radius: 10px;
}
.editBtn {
  width: 75px;
  height: 35px;
  color: #fff;
  background-color: var(--button-color1);
}
.deletBtn {
  width: 75px;
  height: 35px;
  color: #fff;
  background-color: var(--button-color3);
}
</style>
