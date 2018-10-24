export default {
  isAuthorized(meta) {
    const token = window.localStorage.getItem('token');

    if (meta.requiresLogin && !token) {
      return false;
    }

    if (meta.requiresGuest && token) {
      return false;
    }

    return true;
  },
};
