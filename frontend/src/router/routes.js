export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      requiresGuest: true,
    },
    component: () => import(/* webpackChunkName: "login" */ './../views/Login.vue'),
  },
  {
    path: '/',
    name: 'notes',
    meta: {
      requiresLogin: true,
    },
    component: () => import(/* webpackChunkName: "notes" */ './../views/Notes.vue'),
  },
];
