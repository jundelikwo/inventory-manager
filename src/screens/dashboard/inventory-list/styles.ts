import {StyleSheet} from 'react-native';
import Colors from 'src/utilities/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    paddingTop: 4,
    paddingBottom: 100,
    paddingHorizontal: 20,
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
  item: {
    paddingVertical: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.SLATE_02,
  },
  itemBody: {
    flex: 1,
    marginRight: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.SLATE_10,
  },
  stock: {
    fontSize: 14,
    color: Colors.SLATE_10,
  },
  price: {
    fontSize: 14,
    maxWidth: '40%',
    fontWeight: '500',
    color: Colors.SLATE_10,
  },
});

export default styles;
