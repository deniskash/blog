import { createRouter, createWebHistory } from 'vue-router'
import OpenPost from '../components/SinglePost/OpenPost.vue'
import PostCommentsID from '../components/SinglePost/PostComments.vue'
// import PostComments from '../components/SinglePost/PostComments.vue'

const routes = [
  {
    path: '/',
    name: 'OpenPost',
    component: OpenPost
  },
  {
    path: '/posts/:id',
    name: 'PostCommentsID',
    props: true,
    component: PostCommentsID
  },
  // {
  //   path: '/post-comments',
  //   name: 'PostComments',
  //   component: PostComments
  // },
  {
    path: '/main-list',
    name: 'MainList',
    component: () => import('../components/MainList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
