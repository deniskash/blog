import { createRouter, createWebHistory } from 'vue-router'
import PostCommentsID from '../components/SinglePost/PostComments.vue'
import BodyPost from '../components/SinglePost/BodyPost.vue'
import PostPhoto from '../components/SinglePost/PostPhoto'
import PostPhotoID from '../components/SinglePost/PostPhoto'
import BodyPostID from '../components/SinglePost/BodyPost'
import EnterPostID from '../components/SinglePost/EnterPost'
import AddComment from '../components/SinglePost/AddComments/AddComment'


const routes = [

  {
    path: '/posts/:id',
    name: 'PostCommentsID',
    props: true,
    component: PostCommentsID
  },
  {
    path: '/add-comment',
    name: 'AddComment',
    props: true,
    component: AddComment
  },
  {
    path: '/enter-post/:id',
    name: 'EnterPostID',
    props: true,
    component: EnterPostID
  },

  {
    path: '/body-post/:id',
    name: 'BodyPostID',
    props: true,
    component: BodyPostID
  },

  {
    path: '/body-post',
    name: 'BodyPost',
    props: true,
    component: BodyPost
  },
  {
    path: '/post-photo',
    name: 'PostPhoto',
    props: true,
    component: PostPhoto
  },
  {
    path: '/post-photo/:id',
    name: 'PostPhotoID',
    props: true,
    component: PostPhotoID
  },
  {
    path: '/post-photo/:id',
    name: 'PostPhotoID',
    props: true,
    component: PostPhotoID
  },

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
