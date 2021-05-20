import {User} from "../API/user";

const UserService = {
  validate: User.validate,
  signIn(payload) {
    return User.signIn(payload);
  },
}

export default UserService
