import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import React from 'react';
import CustomInput from '../components/CustomInput';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import CustomButton from '../components/CustomButton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {routes} from '../../navigation/routes';
import Loading from '../components/Loading';
import authFirebase from '../../services/firebase/auth';

const Login = ({navigation}) => {
  const {loading, loginUser} = authFirebase();

  const initailLoginValue = {
    email: '',
    password: '',
  };

  const loginValidationSchema = Yup.object().shape({
    password: Yup.string().required('This field is required'),
  });

  const handeleLogin = values => {
    loginUser(values.email, values.password);
  };

  const onClickSignUp = () => {
    navigation.navigate(routes.REGISTER);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading />}
      <View style={styles.statusContainer}>

			</View>
      <View style={styles.helpContainer}>
				<Text style={{fontFamily: 'Noto Sans JP', fontSize: 16, color: colors.PURPLE}}>Help</Text>
			</View>
      <KeyboardAwareScrollView>
        <View style={styles.bodyContainer}>
          <View style={styles.logoContainer}>
						<Image source={require('../../assets/images/Logo-2.png')} />
					</View>
          <View style={styles.textContainer}>
						<Text style={styles.text1}>Hello Buddy,</Text>
						<Text style={styles.text2}>Welcome, log in to your account</Text>
					</View>
          <Formik
            initialValues={initailLoginValue}
            onSubmit={handeleLogin}
            validationSchema={loginValidationSchema}>
            {({values, errors, touched, handleChange, handleSubmit}) => (
              <>
                <View style={{marginTop: units.height / 27}}>
                  <CustomInput
                    placeHolder="Password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    secure
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                </View>
                <View style={{marginTop: units.height / 68.41}}>
                  <TouchableOpacity>
                    <Text style={styles.forgotText}>Forgot Password ?</Text>
                  </TouchableOpacity>
                  <View style={styles.loginContainer}>
                    <CustomButton title="Continue" onPress={handleSubmit} backColor={colors.PURPLE} fontColor={colors.WHITE} />
                    <View style={styles.signUpContainer}>
                      <TouchableOpacity onPress={onClickSignUp}>
                        <Text style={styles.signUpText}>
                          Don't have an account yet? Create account
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  statusContainer: {
		width: units.width,
		height: units.height / 18.65
	},
  helpContainer: {
		marginTop: units.height / 58.64,
		paddingRight: units.width / 51.31,
		width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
	},
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  bodyContainer: {
    paddingHorizontal: units.width / 41.05,
    // marginTop: units.height / 40,
  },
  logoContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
  textContainer: {
		marginTop: units.height / 23.45
	},
	text1: {
		fontFamily: 'Noto Sans JP',
		fontSize: 16,
		textAlign: 'center',
		color: '#626a7a',
		lineHeight: 20
	},
	text2: {
		marginTop: units.height / 58.64,
		fontFamily: 'Inter',
		fontWeight: '600',
		fontSize: 16,
		lineHeight: 19,
		color: '#1d242e',
		textAlign: 'center'
	},
  emailText: {
    color: colors.DARKGRAY,
    fontSize: 16,
    marginBottom: units.height / 67,
  },
  title: {
    color: colors.BLACK,
    fontSize: 36,
    fontWeight: '600',
  },
  forgotText: {
    color: colors.PURPLE,
    fontFamily: 'Museo Sans',
    fontSize: 16
  },
  loginContainer: {
    marginVertical: units.height / 25,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: units.height / 34.2,
  },
  line: {
    height: 1,
    width: units.width / 3.5,
    backgroundColor: colors.GRAY,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorText: {
    color: colors.ORANGE,
    marginTop: units.height / 101,
  },
  signUpText: {
		color: colors.PURPLE,
		textDecorationLine: 'underline',
		textDecorationColor: colors.PURPLE,
		textDecorationStyle: 'solid',
		fontFamily: 'Noto Sans JP',
		fontWeight: '500',
		fontSize: 14
	}
});
