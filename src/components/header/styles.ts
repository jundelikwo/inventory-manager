import {StyleSheet} from 'react-native';
import Colors from 'src/utilities/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: Colors.SLATE_02,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    textAlign: 'center',
    color: Colors.SLATE_10,
  },
  empty: {
    width: 27,
    height: 27,
  },
  titleLeft: {
    textAlign: 'left',
    marginHorizontal: 0,
  },
});

export default styles;
