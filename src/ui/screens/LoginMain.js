import React from "react";
import {
	Image,
	SafeAreaView,
	View,
	Text,
	StyleSheet
} from 'react-native';
import CustomButton from "../components/CustomButton";
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import { routes } from "../../navigation/routes";

const LoginMain = ({navigation}) => {

	const GotoLogin = () => {
		navigation.navigate(routes.LOGIN);
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.bodyContainer}>
				<View style={styles.logoContainer}>
					<Image
						source={require('../../assets/images/Logo-1.png')}
					/>
				</View>
				<View style={styles.deliverContainer}>
					<Image
						source={require('../../assets/images/deliver.png')}
					/>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.titleText}>Welcome to bLinked</Text>
					<Text style={styles.baseText}>Trusted by millions of companies,{"\n"}For fast delivery nationwide</Text>
				</View>
				<View style={styles.buttonContainer}>
					<CustomButton title="Login to bLinked" onPress={GotoLogin} backColor="#3842B0" fontColor="#ffffff" />
				</View>
				<View style={styles.noteContainer}>
					<Text style={styles.noteText}>By continuing with the service above, you agree to{"\n"} bLinked's <Text style={styles.blueText}>Terms of services</Text> and <Text style={styles.blueText}>privacy policy</Text></Text>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default LoginMain;

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// backgroundColor: colors.WHITE,
		height: '100%',
		width: '100%'
	},
	bodyContainer: {
		width: '100%',
		paddingHorizontal: units.width / 10.7,
		marginTop: units.height / 9.23,
		// marginBottom: units.height / 15.32,
	},
	logoContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	deliverContainer: {
		marginTop: units.height / 12.25,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	textContainer: {
		marginTop: units.height / 18.24,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	noteContainer: {
		marginTop: units.height / 39.09,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonContainer: {
		marginTop: units.height / 17.84
	},
	titleText: {
		fontSize: 24,
		fontWeight: "bold",
		color: '#24272D'
	},
	baseText: {
		marginTop: 10,
		fontSize: 16,
		color: '#626A7A',
		textAlign: "center"
	},
	noteText: {
		color: '#A2A9B4',
		lineHeight: 19,
		fontSize: 12,
		textAlign: "center"
	},
	blueText: {
		color: colors.PURPLE,
		lineHeight: 19
	}
});