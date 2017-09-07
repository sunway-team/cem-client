import { StyleSheet } from 'react-native';
import { Metrics } from '../../Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Metrics.doubleBaseMargin,
  },
});
