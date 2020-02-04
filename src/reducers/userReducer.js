const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'login_user':
      return {...state, mobileNumber: action.payload};
    case 'add_user_photo':
      return {...state, picture: action.payload};
    default:
      return state;
  }
};
