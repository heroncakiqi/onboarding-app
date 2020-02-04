import AsyncStorage from '@react-native-community/async-storage';

export const setMobileNumber = payload => {
  return {
    type: 'set_mobile_number',
    payload,
  };
};

export const setPasscode = payload => {
  return {
    type: 'set_passcode',
    payload,
  };
};

export const createUser = (payload, callback) => async dispatch => {
  await AsyncStorage.setItem('users_info', JSON.stringify(payload));
  dispatch({
    type: 'create_user',
  });
  callback ? callback() : null;
};

export const loginUser = (payload, callback) => async dispatch => {
  const value = await AsyncStorage.getItem('users_info');
  const userInfo = JSON.parse(value);
  console.log(userInfo.mobileNumber, payload);
  if (userInfo.passcode === payload) {
    dispatch({
      type: 'login_user',
      payload: userInfo.mobileNumber,
    });
    callback ? callback() : null;
  } else {
    alert('wrong password!');
  }
};

export const addPhotoToUser = (payload, callback) => dispatch => {
  dispatch({
    type: 'add_user_photo',
    payload,
  });
  callback ? callback() : null;
};
