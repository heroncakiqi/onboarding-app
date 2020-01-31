
const INITIAL_STATE = {
    mobileNumber: '',
    passcode: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.payload)
  switch(action.type) {
    case 'set_mobile_number':
      return {...state, mobileNumber: action.payload}
    case 'set_passcode':
      return {...state, passcode: action.payload}
    default:
      return state
  }
}