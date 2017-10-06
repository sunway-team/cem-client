import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import styles, { customStyles } from './styles';

const DATE_FORMAT = 'YYYY-MM-DD';
const MIN_DATE = moment('1900-01-01', DATE_FORMAT).format(DATE_FORMAT);
const MAX_DATE = moment().format(DATE_FORMAT); // current date

const DatePickerForm = ({
  input: { value, onChange },
  containerStyle,
  ...others
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <DatePicker
        date={value}
        mode="date"
        format={DATE_FORMAT}
        minDate={MIN_DATE}
        maxDate={MAX_DATE}
        showIcon={false}
        confirmBtnText="OK"
        cancelBtnText="Cancel"
        onDateChange={date => onChange(date)}
        customStyles={customStyles}
        {...others}
      />
    </View>
  );
};

DatePickerForm.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }),
  containerStyle: View.propTypes.style,
};

export default DatePickerForm;