import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginAccount} from '../../context/userSlice';
import {showMessage} from 'react-native-flash-message';

const authFirebase = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const loginUser = (email, password) => {
    setLoading(true);
    dispatch(loginAccount());
    showMessage({
      message: 'You have successfully logged into your account',
      type: 'success',
    });
    setLoading(false);
  };

  const createUser = (email, password, backLogin) => {
  };

  return {loading, createUser, loginUser};
};

export default authFirebase;
