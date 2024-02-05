import { StyleSheet, Platform, Dimensions } from "react-native";
import colors from "../Colors";
import {DefaultTheme} from 'react-native-paper';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  bold: {
    color: colors.darkBlack,
    fontSize: 17,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  cont: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuIcon: {
    fontSize: 30,
    color: '#fff',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  text14Bold: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  text12: {
    fontSize: 12
  },
  text14Black: {
    fontSize: 14,
    color: colors.darkBlack
  },
  text16White: {
    fontSize: 16,
    color: colors.white
  },
  text22: {
    fontSize: 22
  },
  tabBarStyle: {
    borderWidth: 0.3,
    borderColor: colors.lightGrey,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  filterheaderClose: {
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'lightgrey',
    borderWidth: 3,
    borderRadius: 50,
    width: 48,
    marginTop: 10,
  },
  filterView: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
  },
  filterText: {
    fontSize: 20,
    color: colors.darkBlack,
    fontWeight: '500',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  filterDoneBtnbg: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  filterDoneBtn: {
    fontSize: 16,
    letterSpacing: 0.7,
    color: colors.appColor,
    fontWeight: 'bold',
  },

});

export default commonStyles;