const INITIAL_STATE = {
  mobileNumber: '',
  passcode: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'set_mobile_number':
      return {...state, mobileNumber: action.payload};
    case 'set_passcode':
      return {...state, passcode: action.payload};
    case 'create_user':
      return {mobileNumber: '', passcode: ''};
    default:
      return state;
  }
};
