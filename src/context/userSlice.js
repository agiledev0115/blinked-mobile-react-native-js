import {createSlice} from '@reduxjs/toolkit';
import {initialStates} from './initalStates';
import {showMessage} from 'react-native-flash-message';

export const userSlicer = createSlice({
  name: 'userSlice',
  initialState: initialStates,
  reducers: {
    loginAccount: state => {
      state.isLogin = true;
    },
    logOutAccount: state => {
      state.isLogin = false;
    },
  },
});

export const {loginAccount, logOutAccount} =
  userSlicer.actions;

export default userSlicer.reducer;
