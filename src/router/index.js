import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Layout",
    component: () => import("@/view/Layout.vue"),
    children: [
      {
        path: "Center",
        name: "Center",
        component: () => import("@/view/Center.vue"),
        meta: {
          title: "後台首頁",
        },
      },
      {
        path: "Order",
        name: "Order",
        component: () => import("@/view/Order.vue"),
        meta: {
          title: "訂單管理",
        },
      },
      {
        path: "Product",
        name: "Product",
        component: () => import("@/view/Product.vue"),
        meta: {
          title: "商品管理",
        },
      },
      {
        path: "SeviceSetting",
        name: "SeviceSetting",
        component: () => import("@/view/SeviceSetting.vue"),
        meta: {
          title: "系統設定",
        },
      },
      {
        path: "Member",
        name: "Member",
        component: () => import("@/view/Member.vue"),
        meta: {
          title: "會員管理",
        },
      },
    ],
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("@/view/Login.vue"),
    meta: {
      title: "登入頁面",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Default Title";
  next();
});

export default router;
