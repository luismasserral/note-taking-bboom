import UserHasPermissions from './UserHasPermissions';

export default function middlewares(router) {
  UserHasPermissions(router);
}
