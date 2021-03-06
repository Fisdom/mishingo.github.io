import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../components'
import Resume from '../components/Resume'
import About from '../components/About'
import Contact from '../components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'resume',
    component: Resume
  }, {
    path: '/by/:author',
    name: 'author',
    props: true,
    component: Blog
  }, {
    path: '/read/:post',
    name: 'post',
    props: true,
    component: Blog
  }, {
    path: '/about',
    name: 'about',
    component: About
  }, {
    path: '/contact',
    name: 'contact',
    component: Contact
  }]
})
