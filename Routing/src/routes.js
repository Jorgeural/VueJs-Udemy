// import User from './components/user/User.vue'
// import UserStart from './components/user/UserStart.vue'
// import UserEdit from './components/user/UserEdit.vue'
// import UserDetail from './components/user/UserDetail.vue'
import Home from './components/Home.vue'

//Lazy loading using webpack
const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'));
  });
}
const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'));
  });
}
const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'));
  });
}
const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'));
  });
}

export const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/user',
    component: User,
    children: [
      {path: '', component: UserStart},
      {path: ':id', component: UserDetail},
      {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ]
  },
  
]