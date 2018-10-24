import Authorization from './../../utils/authorization';

export default function UserHasPermissions(router) {
  router.beforeEach((to, from, next) => {
    if (to.meta) {
      const authorized = Authorization.isAuthorized(to.meta);

      if (!authorized) {
        if (to.meta.requiresGuest) {
          next({ path: '/' });
        } else {
          next({ path: '/login' });
        }
      } else {
        next();
      }
    } else {
      next();
    }
  });
}
