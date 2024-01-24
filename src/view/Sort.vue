<template>
  <div>
    <table class="table content">
      <thead class="">
        <tr class="text-center">
          <th scope="col">產品類型</th>
          <th scope="col">產品分類</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-for="(item, key) in newSortList">
          <th scope="row">{{ item.productType }}</th>
          <td>{{ item.productSort }}</td>
          <td>
            <button
              type="button"
              class="btn editBtn mx-2"
              data-bs-toggle="modal"
              data-bs-target="#Modal1"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn deletBtn"
              @click="removeProduct(key)"
            >
              刪除
            </button>
          </td>
        </tr>
        <tr>
          <td scope="row" colspan="8" class="text-center">
            <button
              data-bs-toggle="modal"
              data-bs-target="#plus"
              class="plus-set"
            >
              <i class="fas fa-plus fa-1x"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!----------------------------- 編輯Modal ---------------------------------->
  <div
    class="modal fade"
    id="Modal1"
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
                <th scope="col" class="">產品類型</th>
                <th scope="col">產品分類</th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-center" v-for="(item, key) in newSortList">
                <td scope="row">
                  <input
                    type="text"
                    class="text-center"
                    v-model="item.productType"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="text-center"
                    v-model="item.productSort"
                  />
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
  <!----------------------------- Modal++ ---------------------------------->
  <div
    class="modal fade"
    id="plus"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog ml-650 mt-200">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold" id="exampleModalLabel+">新增商品</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <table class="table">
            <thead>
              <tr class="text-center">
                <th scope="col" class="product">產品類型</th>
                <th scope="col">產品分類</th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-center">
                <td scope="row">
                  <input
                    type="text"
                    class="text-center"
                    value=""
                    placeholder="請輸入類型"
                    v-model="productType"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="text-center"
                    value=""
                    placeholder="請輸入分類"
                    v-model="productSort"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn deletBtn" data-bs-dismiss="modal">
            關閉
          </button>
          <button type="button" class="btn editBtn" @click="addSortList">
            新增
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal 儲存成功-->
</template>
<script>
export default {
  components: {},

  data() {
    return {
      productType: "",
      productSort: "",
      newSortList: [
        {
          productType: "模型車",
          productSort: "閃電霹靂車/機車模型/超跑汽車",
        },
      ],
    };
  },

  methods: {
    addSortList() {
      let typeValue = this.productType.trim();
      let sortValue = this.productSort.trim();
      if (!sortValue || !typeValue) {
        return;
      }
      this.newSortList.push({
        productType: typeValue,
        productSort: sortValue,
      });
      this.productType = "";
      this.productSort = "";
    },
    removeProduct(key) {
      this.newSortList.splice(key, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.plus-set {
  border-radius: 20%;
  border: 0px solid #fff;
  &:hover {
    background-color: var(--button-color1);
    color: #fff;
  }
}
.content {
  margin-top: 40px;
  background: #fff;
  border-radius: 10px;
}
.modal-content {
  width: 600px;
  tbody {
    button {
      border: 1px solid gray;
    }
  }
}
.editBtn {
  @include orange-button;
}
.deletBtn {
  @include delete-button;
}
</style>
