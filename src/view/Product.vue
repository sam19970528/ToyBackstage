<template>
  <div>
    <table class="table content">
      <thead class="">
        <tr class="text-center">
          <th scope="col">商品名稱</th>
          <th scope="col">商品圖片</th>
          <th scope="col">商品介紹</th>
          <th scope="col">價格</th>
          <th scope="col">庫存</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <th scope="row">機械暴龍獸</th>
          <td>
            <img
              src="../assets/img/機械暴龍獸.jpg"
              alt=""
              width="80px"
              height="80px"
            />
          </td>
          <td>模型</td>
          <td>$500</td>
          <td>1</td>
          <td>
            <button type="button" class="btn editBtn">編輯</button>
            <button type="button" class="btn deletBtn m-lg-2">刪除</button>
          </td>
        </tr>
        <tr class="text-center">
          <th scope="row">機械暴龍獸</th>
          <td>
            <img
              src="../assets/img/機械暴龍獸.jpg"
              alt=""
              width="80px"
              height="80px"
            />
          </td>
          <td>模型</td>
          <td>$500</td>
          <td>1</td>
          <td>
            <button type="button" class="btn editBtn">編輯</button>
            <button type="button" class="btn deletBtn m-lg-2">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <footer class="footer"><pagination /></footer>
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
  height: 200px;
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
.footer {
  margin-top: 250px;
}
</style>
