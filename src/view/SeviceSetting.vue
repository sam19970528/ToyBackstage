<template>
  <table class="table section1">
    <thead class="">
      <tr class="text-center">
        <th scope="col">管理員</th>
        <th scope="col">狀態</th>
      </tr>
    </thead>
    <tbody>
      <tr class="text-center">
        <th scope="row">Ryan</th>
        <td class="postionCircle"><span class="circle"></span>上線中</td>
      </tr>
    </tbody>
  </table>

  <!-- modal -->
</template>

<style lang="scss" scoped>
input {
  width: 100px;
}
.section1 {
  margin-top: 40px;
  background: #fff;
  border-radius: 10px;
}
.editBtn {
  @include orange-button;
}
.deletBtn {
  @include delete-button;
}
</style>
