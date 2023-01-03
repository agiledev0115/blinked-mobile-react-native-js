import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Switch
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import {routes} from '../../navigation/routes';
import {useDispatch} from 'react-redux';
import {logOutAccount} from '../../context/userSlice';
import Loading from '../components/Loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import authFirebase from '../../services/firebase/auth';

const Home = ({navigation}) => {
  const {loading, createUser} = authFirebase();
  const [isEnabled, setIsEnabled] = useState(false);
  const dispatch = useDispatch();

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onClickLogout = () => {
    dispatch(logOutAccount());
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading />}
      <View style={styles.statusContainer}>

			</View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.bodyContainer}>
          <View style={styles.topbar}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <TouchableOpacity onPress={onClickLogout}>
                <Image source={require('../../assets/images/avatar.png')} />
              </TouchableOpacity>
              <View style={{marginLeft: 10}}>
                <Text style={styles.greetText}>Hello Jason,</Text>
                <Text style={styles.statusText}>Stay safe on the road!</Text>
              </View>
            </View>
            <Icon name="bell-outline" size={30} color={colors.DARKGRAY} />
          </View>
          
          <View style={styles.acceptContainer}>
            <Text style={[styles.acceptText, {color: isEnabled ? colors.PURPLE : '#5A5D82'}]}>
              {isEnabled ? "I'm accepting orders" : "I’m currently offline"}
            </Text>
            <Switch
              trackColor={{ false: "#CCCCCC", true: "#27AE60" }}
              thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View style={styles.assignContainer}>
            <View style={styles.assignHeader}>
              <Text style={styles.assignTitle}>Assigned Orders</Text>
              <Icon name='dots-vertical' size={20} color={'#444444'} />
            </View>
            <View style={styles.assignBody}>
              <View style={styles.assignBodyHeader}>

              </View>
              <View style={styles.assignBodyMain}>
                <View style={styles.assginDetails}>
                  <View style={styles.flexRow}>
                    <Octicons name='dot-fill' size={20} color={'#27AE60'} />
                    <Text style={{marginLeft: 16}}>4 Isolo Ire-Akari Estate, Lagos Nigeria</Text>
                  </View>
                  <View style={[styles.flexRow, {marginTop: units.height / 21.6}]}>
                    <Octicons name='dot-fill' size={20} color={colors.PURPLE} />
                    <Text style={{marginLeft: 16}}>4 Isolo Ire-Akari Estate, Lagos Nigeria</Text>
                  </View>
                </View>

                <View style={[styles.assignToDetail, styles.flexRow, {justifyContent: 'space-between', alignItems: 'center'}]}>
                  <Text style={styles.detailText}>View details</Text>
                  <Text style={styles.detailText}>{">"}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.earningContainer}>
            <View style={styles.earningHeader}>
              <Text style={styles.earningTitle}>My Earnings</Text>
              <Text style={styles.seeAll}>See all</Text>
            </View>
            <View>
              <View style={styles.earningItem}>
                <View style={styles.earningInfo}>
                  <Text style={styles.earningDetailTitle}>Ikeja GRA</Text>
                  <Text style={styles.earningDetailMoney}>$78,000</Text>
                </View>
                <Text style={styles.earningDetailText}>To Noona’s Kitchen, Lekki</Text>
              </View>

              <View style={styles.earningItem}>
                <View style={styles.earningInfo}>
                  <Text style={styles.earningDetailTitle}>Ikeja GRA</Text>
                  <Text style={styles.earningDetailMoney}>$78,000</Text>
                </View>
                <Text style={styles.earningDetailText}>To Noona’s Kitchen, Lekki</Text>
              </View>

              <View style={styles.earningItem}>
                <View style={styles.earningInfo}>
                  <Text style={styles.earningDetailTitle}>Ikeja GRA</Text>
                  <Text style={styles.earningDetailMoney}>$78,000</Text>
                </View>
                <Text style={styles.earningDetailText}>To Noona’s Kitchen, Lekki</Text>
              </View>

              <View style={styles.earningItem}>
                <View style={styles.earningInfo}>
                  <Text style={styles.earningDetailTitle}>Ikeja GRA</Text>
                  <Text style={styles.earningDetailMoney}>$78,000</Text>
                </View>
                <Text style={styles.earningDetailText}>To Noona’s Kitchen, Lekki</Text>
              </View>

              <View style={styles.earningItem}>
                <View style={styles.earningInfo}>
                  <Text style={styles.earningDetailTitle}>Ikeja GRA</Text>
                  <Text style={styles.earningDetailMoney}>$78,000</Text>
                </View>
                <Text style={styles.earningDetailText}>To Noona’s Kitchen, Lekki</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F8',
  },
  statusContainer: {
		width: units.width,
		height: units.height / 18.65
	},
  bodyContainer: {
    paddingHorizontal: units.width / 51.31,
    marginTop: units.height / 63.15,
    marginBottom: units.height / 101,
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetText: {
    fontFamily: 'Noto Sans JP',
    fontWeight: '700',
    fontSize: 16,
    color: '#0F112B'
  },
  statusText: {
    fontFamily: 'Noto Sans JP',
    fontSize: 12,
    color: '#626A7A'
  },
  acceptContainer: {
    marginTop: units.height / 30.4,
    height: units.height / 20.52,
    backgroundColor: '#3842B018',
    borderRadius: 32,
    paddingHorizontal: units.width / 17.85,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  acceptText: {
    fontFamily: 'Noto Sans JP',
    fontWeight: '500',
    fontSize: 12,
  },
  assignContainer: {
    marginTop: units.height / 30.4,
  },
  assignHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  assignTitle: {
    fontFamily: 'Noto Sans JP',
    fontWeight: '700',
    fontSize: 14,
    color: '#343841'
  },
  assignBody: {
    marginTop: units.height / 45.61,
    borderRadius: 8,
    backgroundColor: colors.WHITE,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  assignBodyHeader: {
    height: units.height / 25.65,
    backgroundColor: '#2F80ED',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  assignBodyMain: {
    paddingHorizontal: units.width / 23.43,
    paddingTop: units.height / 68.41,
  },
  assginDetails: {
    height: units.height / 7.89,
    borderBottomWidth: 1,
    borderBottomColor: '#7A797818'
  },
  assignToDetail: {
    paddingVertical: units.height / 68.41
  },
  detailText: {
    fontFamily: 'Noto Sans JP',
    fontWeight: '700',
    fontSize: 14,
    color: colors.PURPLE
  },
  earningContainer: {
    marginTop: units.height / 27.36
  },
  earningHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  earningTitle: {
    fontFamily: 'Noto Sans JP',
    fontWeight: '700',
    fontSize: 14,
    color: '#343841'
  },
  seeAll: {
    fontFamily: 'Noto Sans JP',
    fontWeight: '500',
    fontSize: 14,
    color: colors.PURPLE
  },
  earningItem: {
    marginTop: units.height / 68.41,
    height: units.height / 11.09,
    paddingHorizontal: units.width / 23.43,
    paddingVertical: units.height / 58.64,
    backgroundColor: colors.WHITE,
    borderRadius: 8,
  },
  earningInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  earningDetailTitle: {
    fontFamily: 'Noto Sans JP',
    fontWeight: '500',
    fontSize: 14,
    color: '#0E0842'
  },
  earningDetailMoney: {
    fontFamily: 'Noto Sans JP',
    fontWeight: '700',
    fontSize: 14,
    color: '#08AD04'
  },
  earningDetailText: {
    fontFamily: 'Noto Sans JP',
    fontSize: 12,
    color: '#626A7A',
    marginTop: 4
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});
