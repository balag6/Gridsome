const c1 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/bala/Sites/gridsome/src/templates/Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--products-vue" */ "/Users/bala/Sites/gridsome/src/pages/Products.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/bala/Sites/gridsome/src/pages/Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/bala/Sites/gridsome/src/pages/About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/bala/Sites/gridsome/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/bala/Sites/gridsome/src/pages/Index.vue")

export default [
  {
    path: "/blog/:title/",
    component: c1
  },
  {
    path: "/products/",
    component: c2
  },
  {
    path: "/blog/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
