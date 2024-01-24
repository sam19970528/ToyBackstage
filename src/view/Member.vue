<template>
  <div>
    <table class="table content">
      <thead class="">
        <tr class="text-center">
          <th scope="col">用戶名</th>
          <th scope="col">信箱</th>
          <th scope="col">性別</th>
          <th scope="col">狀態</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-for="(item, key) in memberList">
          <th scope="row">{{ item.memberName }}</th>
          <td>{{ item.emali }}</td>
          <td>{{ item.gender }}</td>
          <td class="postionCircle">
            <span class="circle"></span>{{ item.state }}
          </td>
          <td>
            <button
              type="button"
              class="btn editBtn mx-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              編輯
            </button>
            <button type="button" class="btn deletBtn" @click="remove(key)">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!--編輯------------------------------------------------------modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog ml-550 mt-130">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold" id="exampleModalLabel">編輯商品</h5>
          <button
            type="button"
            class="btn btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <table class="table">
            <thead>
              <tr class="text-center">
                <th scope="col">用戶名稱</th>
                <th scope="col">性別</th>
                <th scope="col">信箱</th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-center" v-for="item in memberList">
                <td>
                  <input
                    type="text"
                    class="text-center"
                    v-model="item.memberName"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="text-center"
                    v-model="item.gender"
                  />
                </td>
                <td>
                  <input type="text" class="text-center" v-model="item.emali" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn deletBtn" data-bs-dismiss="modal">
            關閉
          </button>
          <button type="button" class="btn editBtn">儲存</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal 儲存成功-->
  <!-- <div
    class="modal"
    id="saveok"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="false"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
export default {
  components: {},

  data() {
    return {
      memberList: [
        {
          memberName: "Tom",
          emali: "cindy55288@gmail.com",
          gender: "男",
          state: "上線中",
        },
      ],
    };
  },

  methods: {
    remove(key) {
      this.memberList.splice(key, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-content {
  width: 960px;
}
.content {
  margin-top: 40px;
  background: #fff;
  border-radius: 10px;
}
td {
  &:nth-child(3) input {
    width: 250px;
    text-align: center;
  }
  &:nth-child(1) input {
    width: 100px;
    text-align: center;
  }
  &:nth-child(2) input {
    width: 40px;
    text-align: center;
  }
}
.editBtn {
  @include orange-button;
}
.deletBtn {
  @include delete-button;
}
</style>
