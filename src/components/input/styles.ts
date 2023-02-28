import {StyleSheet} from 'react-native';
import Colors from 'src/utilities/colors';

const styles = StyleSheet.create({
  content: {
    backgroundColor: Colors.SLATE_02,
    borderWidth: 2,
    borderColor: Colors.SLATE_02,
    height: 56,
    borderRadius: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  light: {
    borderColor: Colors.WHITE,
    backgroundColor: Colors.WHITE,
  },
  error: {
    backgroundColor: Colors.ROSE_02,
    borderColor: Colors.ROSE_06,
  },
  hasLeft: {
    paddingLeft: 0,
  },
  hasRight: {
    paddingRight: 0,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    color: Colors.SLATE_10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    textAlignVertical: 'center',
  },
  uneditable: {
    justifyContent: 'center',
  },
  focus: {
    borderColor: Colors.BLUE_07,
  },
  multiLine: {
    height: 130,
  },
  labelView: {
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: Colors.SLATE_08,
    flexShrink: 1,
    fontSize: 14,
  },
  right: {
    paddingHorizontal: 12,
  },
  message: {
    marginTop: 6,
    fontSize: 14,
    color: Colors.ROSE_06,
  },
  phone: {
    padding: 8,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    marginLeft: 12,
    marginRight: 8,
  },
  phoneCode: {
    marginHorizontal: 4,
  },
});

export default styles;
