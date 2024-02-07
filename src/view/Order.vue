<script setup>
import pagination from "@/components/pagination.vue";
</script>

<template>
  <div class="content">
    <table class="table">
      <thead class="">
        <tr class="text-center">
          <th scope="col">#</th>
          <th scope="col">訂單編號</th>
          <th scope="col">訂單日期</th>
          <th scope="col">收據方式</th>
          <th scope="col">用戶姓名</th>
          <th scope="col">訂單金額</th>
          <th scope="col">支付方式</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <th scope="row">1</th>
          <td>1000</td>
          <td>2022/12/5</td>
          <td>/6WUDFPP</td>
          <td>Tom</td>
          <td>$500</td>
          <td>LINEPAY</td>
        </tr>
        <tr class="text-center">
          <th scope="row">2</th>
          <td>1001</td>
          <td>2022/12/5</td>
          <td>紙本發票</td>
          <td>SAM</td>
          <td>$1000</td>
          <td>LINEPAY</td>
        </tr>
      </tbody>
    </table>
  </div>
  <footer class="mt-150">
    <pagination />
  </footer>
</template>

<style scoped>
.content {
  margin-top: 40px;
  background: #fff;
  border-radius: 10px;
}
</style>
