<template>
  <div>
    <table class="table content">
      <thead class="">
        <tr class="text-center">
          <th scope="col">分類名稱</th>
          <th scope="col">商品名稱</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <th scope="row">模型車</th>
          <td>閃電霹靂車/機車模型/汽車/超跑</td>
          <td>
            <button type="button" class="btn editBtn">編輯</button>
            <button type="button" class="btn deletBtn">刪除</button>
          </td>
        </tr>
        <tr class="text-center">
          <th scope="row">鋼彈模型</th>
          <td>PG/RG/HG</td>
          <td>
            <button type="button" class="btn editBtn">編輯</button>
            <button type="button" class="btn deletBtn">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup></script>

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
  margin-right: 10px;
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
.circle {
  position: absolute;
  left: 60px;
  top: 25%;
  transform: translateY(-50%);
  background-color: rgb(101, 231, 145);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
}
.postionCircle {
  position: relative;
}
</style>
