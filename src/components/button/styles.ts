import {StyleSheet} from 'react-native';
import Colors from 'src/utilities/colors';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.BLUE_07,
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    color: Colors.WHITE,
  },
});

export default styles;
