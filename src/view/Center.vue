<template>
  <section class="container-fluid mt-60 section1">
    <div class="row mb-4">
      <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="card rounded-0 h-100">
          <div class="card-body d-flex align-items-center">
            <i class="fas fa-money-check-alt fa-2x text-secondary mr-2"></i>
            <div class="text-center w-100">
              <h3 class="h5">今日訂單數量</h3>
              <h4 class="h3">1000</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="card rounded-0">
          <div class="card-body d-flex align-items-center">
            <i class="fas fa-users fa-2x text-secondary mr-2"></i>
            <div class="text-center w-100">
              <h3 class="h5">會員總數</h3>
              <h4 class="h3">510</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="card rounded-0 h-100">
          <div class="card-body d-flex align-items-center">
            <i class="fas fa-paperclip fa-2x text-secondary mr-2"></i>
            <div class="text-center w-100">
              <h3 class="h5">今日營業金額</h3>
              <h4 class="h3">32,000</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="card rounded-0">
          <div class="card-body d-flex align-items-center">
            <i class="fas fa-paste fa-2x text-secondary mr-2"></i>
            <div class="text-center w-100">
              <h3 class="h5">庫存總數</h3>
              <h4 class="h3">250,000</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container-fluid section2">
    <div class="row mt-4">
      <section class="col-lg-6">
        <div class="card rounded-3">
          <div class="card-header text-center fw-bold">今年訂單</div>
          <div class="card-body">
            <div class="row">
              <div
                class="col-lg-12 d-flex align-items-center justify-content-center"
              >
                <img src="../assets/img/今年訂單.svg" alt="" class="w-75" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="col-lg-6">
        <div class="card rounded-0">
          <div class="card-header text-center fw-bold">本周訂單</div>
          <div class="card-body">
            <div class="row">
              <div
                class="col-lg-12 d-flex align-items-center justify-content-center"
              >
                <img src="../assets/img/本周訂單.svg" alt="" class="w-75" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>

  <section class="container-fluid section3">
    <div class="row mt-4">
      <section class="col-lg-7">
        <div class="card rounded-3">
          <div class="card-header text-center fw-bold">今年業績成長指數</div>
          <div class="card-body">
            <div class="row">
              <div
                class="col-lg-12 d-flex align-items-center justify-content-center"
              >
                <img src="../assets/img/業績成長.svg" alt="" class="w-50" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="col-lg-5">
        <div class="card rounded-0">
          <div class="card-header text-center fw-bold">熱門商品系列</div>
          <div class="card-body">
            <div class="row">
              <div
                class="col-lg-12 d-flex align-items-center justify-content-center"
              >
                <img src="../assets/img/熱門系列.svg" alt="" class="w-75" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
window.onload = function () {
  // pie
  document.querySelectorAll(".chart-item").forEach(function (item) {
    config.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    var ctx = item.getContext("2d");
    window.myPie = new Chart(ctx, config);
  });

  // bar
  var barCtx = document.getElementById("barCanvas").getContext("2d");
  window.myBar = new Chart(barCtx, {
    type: "bar",
    data: barChartData,
    options: {
      responsive: true,
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "用戶來源成長性比例",
      },
    },
  });
};
</script>

<style lang="scss" scoped>
.section1 {
  h5,
  h3 {
    font-weight: bold;
    color: var(--navbar-color1);
  }
}
.section2 {
  .order {
    width: 420px;
    height: 300px;
    background-color: #fff;
  }
  .amount {
    width: 420px;
    height: 300px;
    background-color: #fff;
  }
}
</style>
