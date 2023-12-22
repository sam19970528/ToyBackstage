<template>
  <table class="table content">
    <thead class="">
      <tr class="text-center">
        <th scope="col">管理員</th>
        <th scope="col">狀態</th>
        <th scope="col">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr class="text-center">
        <th scope="row">Ryan</th>
        <td class="postionCircle"><span class="circle"></span>上線中</td>
        <td>
          <button type="button" class="btn editBtn">編輯</button>
          <button type="button" class="btn deletBtn">刪除</button>
        </td>
      </tr>
      <tr class="text-center">
        <th scope="row">Tom</th>
        <td class="postionCircle"><span class="circle"></span>上線中</td>
        <td>
          <button type="button" class="btn editBtn">編輯</button>
          <button type="button" class="btn deletBtn">刪除</button>
        </td>
      </tr>
      <tr class="text-center">
        <th scope="row" colspan="3" class="text-center">
          <a href="">
            <i class="fas fa-plus text-black fa-2x"></i>
          </a>
        </th>
      </tr>
    </tbody>
  </table>
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
  left: 84px;
  top: 38%;
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
