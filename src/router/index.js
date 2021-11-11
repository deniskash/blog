import { createRouter, createWebHistory } from 'vue-router'
import PostCommentsID from '../components/SinglePost/PostComments.vue'
import BodyPost from '../components/SinglePost/BodyPost.vue'
import PostPhoto from '../components/SinglePost/PostPhoto'
import PostPhotoID from '../components/SinglePost/PostPhoto'
import BodyPostID from '../components/SinglePost/BodyPost'
import EnterPostID from '../components/SinglePost/EnterPost'
import AddComment from '../components/SinglePost/AddComments/AddComment'
import MainPhotos from '../components/MainPhotos'
import MainPhotosID from '../components/MainPhotos'
import PostListVer2 from '../components/PostsListVer2'
import PostListVer2ID from '../components/PostsListVer2'
import InfoAfterPost from '../components/SinglePost/InfoAfterPost'
import TitleBodyPost from "@/components/SinglePost/TitleBodyPost";
import TitleBodyPostR from "@/components/SinglePost/TitleBodyPostR";
import Twitter from "@/assets/Icons/Twitter";
import Facebook from "@/assets/Icons/Facebook";
import Print from "@/assets/Icons/Print";
import Pinterest from "@/assets/Icons/Pinterest";



const routes = [

  {
    path: '/twitter',
    name: 'Twitter',
    component: Twitter
  },
  {
    path: '/facebook',
    name: 'Facebook',
    component: Facebook
  },
  {
    path: '/print',
    name: 'Print',
    component: Print
  },
  {
    path: '/pinterest',
    name: 'Pinterest',
    component: Pinterest
  },
  {
    path: '/title-body-post',
    name: 'TitleBodyPost',
    component: TitleBodyPost
  },

  {
    path: '/title-body-post-r',
    name: 'TitleBodyPostR',
    component: TitleBodyPostR
  },

  {
    path: '/info-after-post',
    name: 'InfoAfterPost',
    props: true,
    component: InfoAfterPost
  },

  {
    path: '/post-list-ver-2/:id',
    name: 'PostListVer2ID',
    props: true,
    component: PostListVer2ID
  },
  {
    path: '/post-list-ver-2',
    name: 'PostListVer2',
    props: true,
    component: PostListVer2
  },
  {
    path: '/main-photos/:id',
    name: 'MainPhotosID',
    props: true,
    component: MainPhotosID
  },
  {
    path: '/main-photos',
    name: 'MainPhotos',
    props: true,
    component: MainPhotos
  },
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
