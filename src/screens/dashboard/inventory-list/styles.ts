import {StyleSheet} from 'react-native';
import Colors from 'src/utilities/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    margin: 20,
  },
  formTop: {
    marginTop: 24,
  },
  logout: {
    fontWeight: '500',
    color: Colors.ROSE_08,
  },
  add: {
    right: 20,
    width: 72,
    bottom: 50,
    height: 72,
    borderRadius: 40,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BLUE_07,
  },
});

export default styles;
