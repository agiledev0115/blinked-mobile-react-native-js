import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	Image
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import authFirebase from '../../services/firebase/auth';
import Loading from '../components/Loading';
import { routes } from '../../navigation/routes';

const Password = ({navigation}) => {
	const {loading, createUser} = authFirebase();

	const registerIntialValue = {
		password: '',
    rePassword: '',
	};

	const registerValidationSchema = Yup.object().shape({
		password: Yup.string()
      .min(6, 'Password must be a minimum of 6 characters')
      .required('This field is required'),
    rePassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords are not the same')
      .required('This field is required'),
	});

	const handleContinue = values => {
		navigation.navigate(routes.LOGIN);
	};

	const onClickBack = () => {
		navigation.goBack();
	}

	return (
		<SafeAreaView style={styles.container}>
			{loading && <Loading />}
			<View style={styles.greyContainer}>
				<View style={styles.statusContainer}>

				</View>
				<View style={styles.backContainer}>
					<TouchableOpacity onPress={onClickBack}>
						<Text style={{fontFamily: 'Nunito', fontSize: 12, color: '#5A5D82'}}>{"<"} Back</Text>
					</TouchableOpacity>
				</View>
					<Text style={styles.title}>Create Password</Text>
			</View>
			<KeyboardAwareScrollView>
				<View style={styles.bodyContainer}>
					<View style={styles.textContainer}>
						<Text style={styles.text1}>Create a password for your{"\n"}bLinked account.</Text>
					</View>
					<View>
						<Formik
							initialValues={registerIntialValue}
							onSubmit={handleContinue}
							validationSchema={registerValidationSchema}>
							{({values, errors, touched, handleChange, handleSubmit}) => (
								<>
									<View style={{marginTop: units.height / 14.92}}>
                    <CustomInput
                      placeHolder="Password"
                      value={values.password}
                      onChangeText={handleChange('password')}
                      secure
                    />
                    {errors.password && touched.password && (
                      <Text style={styles.errorText}>{errors.password}</Text>
                    )}
										<Text>Password strength</Text>
                  </View>
                  <View style={{marginTop: units.height / 14.92}}>
                    <CustomInput
                      placeHolder="Confirm Password"
                      value={values.rePassword}
                      onChangeText={handleChange('rePassword')}
                      secure
                    />
                    {errors.rePassword && touched.rePassword && (
                      <Text style={styles.errorText}>{errors.rePassword}</Text>
                    )}
                  </View>
									<View style={styles.buttonContainer}>
										<CustomButton title="Continue" onPress={handleSubmit} backColor="#3842B0" fontColor="#FFFFFF" />
									</View>
								</>
							)}
						</Formik>
					</View>
				</View>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};

export default Password;

const styles = StyleSheet.create({
	greyContainer: {
		backgroundColor: '#3842B008',
		height: units.height / 7.46
	},
	statusContainer: {
		width: units.width,
		height: units.height / 18.65,		
	},
	backContainer: {
		marginTop: units.height / 35.69,
		marginLeft: units.width / 37.5,
		// width: 120,
		height: 20,
	},
	container: {
		flex: 1,
		backgroundColor: colors.WHITE,
	},
	title: {
		color: colors.BLACK,
		fontSize: 16,
		fontWeight: '700',
		textAlign: 'center',
		marginTop: -1 * units.height / 37.31
	},
	bodyContainer: {
		paddingHorizontal: units.width / 41.05,
		marginTop: units.height / 25.62,
	},
	textContainer: {
		marginTop: units.height / 17.46
	},
	text1: {
		fontFamily: 'Noto Sans JP',
		fontSize: 16,
		textAlign: 'center',
		color: '#626a7a',
		lineHeight: 26
	},
	emailText: {
		color: colors.DARKGRAY,
		fontSize: 16,
		marginBottom: units.height / 67,
	},
	buttonContainer: {
		marginTop: units.height / 10.94,
	},
	loginContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: units.height / 25,
	},
	line: {
		height: 1,
		width: units.width / 3.5,
		backgroundColor: colors.GRAY,
	},
	errorText: {
		color: colors.ORANGE,
		marginTop: units.height / 101,
	},
	signInText: {
		color: colors.PURPLE,
		textDecorationLine: 'underline',
		textDecorationColor: colors.PURPLE,
		textDecorationStyle: 'solid',
		fontFamily: 'Noto Sans JP',
		fontWeight: '500',
		fontSize: 14
	}
});
