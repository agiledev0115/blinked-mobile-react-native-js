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
import CustomNumberInput from '../components/CustomNumberInput';
import CustomButton from '../components/CustomButton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import authFirebase from '../../services/firebase/auth';
import Loading from '../components/Loading';
import { routes } from '../../navigation/routes';

const Verify = ({navigation}) => {
	const {loading, createUser} = authFirebase();

  const verifyIntialValue = {
		numberOne: '',
		numberTwo: '',
		numberThree: '',
		numberFour: '',
		numberFive: '',
		numberSix: '',
	};

  const verifyValidationSchema = Yup.object().shape({
		numberOne: Yup.string()
			.required('This field is required'),
		numberTwo: Yup.string()
			.required('This field is required'),
		numberThree: Yup.string()
			.required('This field is required'),
		numberFour: Yup.string()
			.required('This field is required'),
		numberFive: Yup.string()
			.required('This field is required'),
		numberSix: Yup.string()
			.required('This field is required'),
	});

	const handleContinue = values => {
		navigation.navigate(routes.PASSWORD);
	};

	const onClickBack = () => {
		navigation.goBack();
	}

	return (
		<SafeAreaView style={styles.container}>
			{loading && <Loading />}
			<View style={styles.statusContainer}>

			</View>
			<View style={styles.backContainer}>
				<TouchableOpacity onPress={onClickBack}>
					<Text style={{fontFamily: 'Nunito', fontSize: 12, color: '#5A5D82'}}>{"<"} Back</Text>
				</TouchableOpacity>
			</View>
			<KeyboardAwareScrollView>
				<View style={styles.bodyContainer}>
					<View style={styles.logoContainer}>
						<Image source={require('../../assets/images/Logo-2.png')} />
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.text1}>Enter the 6-digit confirmation code sent{"\n"}to 0810-089-5940 via SMS. started</Text>
            <Text style={styles.text2}>OTP Verification</Text>
					</View>
					<View>
						<Formik
							initialValues={verifyIntialValue}
							onSubmit={handleContinue}
							validationSchema={verifyValidationSchema}>
							{({values, errors, touched, handleChange, handleSubmit}) => (
								<>
                  <View style={styles.verifyContainer}>
                    <CustomNumberInput
											value={values.numberOne}
											onChangeText={handleChange('numberOne')}
											type="phone-pad"
										/>
                    <CustomNumberInput
											value={values.numberTwo}
											onChangeText={handleChange('numberTwo')}
											type="phone-pad"
										/>
                    <CustomNumberInput
											value={values.numberThree}
											onChangeText={handleChange('numberThree')}
											type="phone-pad"
										/>
                    <CustomNumberInput
											value={values.numberFour}
											onChangeText={handleChange('numberFour')}
											type="phone-pad"
										/>
                    <CustomNumberInput
											value={values.numberFive}
											onChangeText={handleChange('numberFive')}
											type="phone-pad"
										/>
                    <CustomNumberInput
											value={values.numberSix}
											onChangeText={handleChange('numberSix')}
											type="phone-pad"
										/>
                  </View>
									<View style={styles.buttonContainer}>
										<CustomButton title="Continue" onPress={handleSubmit} backColor="#3842B0" fontColor="#FFFFFF" />
									</View>
                  <View style={styles.loginContainer}>
                    <Text style={styles.signInText}>
                      Resend code in <Text style={{color: colors.PURPLE}}>{"(1:17)"}</Text>
                    </Text>
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

export default Verify;

const styles = StyleSheet.create({
	statusContainer: {
		width: units.width,
		height: units.height / 18.65
	},
	backContainer: {
		marginTop: units.height / 74.63,
		marginLeft: units.width / 37.5,
		width: 120,
		height: 20
	},
	container: {
		flex: 1,
		backgroundColor: colors.WHITE,
	},
	title: {
		color: colors.BLACK,
		fontSize: 36,
		fontWeight: '600',
	},
	bodyContainer: {
		paddingHorizontal: units.width / 41.05,
		marginTop: units.height / 25.62,
	},
	logoContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	textContainer: {
		marginTop: units.height / 30.4
	},
	text1: {
    fontFamily: 'Noto Sans JP',
		fontSize: 16,
		textAlign: 'center',
		color: '#626a7a',
		lineHeight: 26
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
  verifyContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: units.height / 25.65
  },
	buttonContainer: {
		marginTop: units.height / 9.12,
	},
	loginContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: units.height / 41.05,
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
		color: '#737A91',
		fontFamily: 'Noto Sans JP',
		fontWeight: '500',
		fontSize: 16
	}
});
