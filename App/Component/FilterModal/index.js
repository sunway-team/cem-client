import React, { Component } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

import TouchableView from '../TouchableView';
import Text from '../Text';
import Modal from '../Modal';

import { Icon } from 'react-native-elements';
import { Colors, Fonts } from '~/Theme/';

const dummyContents = [
  'Leadership',
  'Citizen Tech',
  'Program Assessment Program Assessment Program Assessment',
  'Academic',
  'Technology',
  'Biology',
  'Leadership',
  'Citizen Tech',
  'Program Assessment',
  'Academic',
  'Technology',
  'Biology',
];

class FilterModal extends Component {
  state = {
    isCheck: Array(dummyContents.length).fill(false),
  };

  static propTypes = {
    isVisible: PropTypes.bool,
    onBackdropPress: PropTypes.func,
    onCancelPress: PropTypes.func,
    contents: PropTypes.array,
  };

  static defaultProps = {
    isVisible: false,
    onBackdropPress: () => null,
    onCancelPress: () => null,
  };

  // ! using composition for content filter
  _renderContents(contents) {
    var contentsButton = [];
    var isCheck = this.state.isCheck;

    contents.map((content, index) => {
      var colorTextPress = isCheck[index] ? { color: Colors.deepOrange } : null;
      var borderColorPress = isCheck[index]
        ? { borderColor: Colors.deepOrange }
        : null;

      contentsButton.push(
        <TouchableView
          key={index}
          rippleColor={Colors.grey}
          style={styles.itemSortByContainer}
          onPress={() => this.setOnPress(!isCheck[index], index)}
        >
          <View>
            <Text
              style={[styles.itemSortByText, colorTextPress, borderColorPress]}
            >
              {content}
            </Text>
          </View>
        </TouchableView>,
      );
    });
    return contentsButton;
  }

  _renderHeader = onCancelPress =>
    <View style={styles.headerContainer}>
      <TouchableView onPress={onCancelPress}>
        <Text light style={styles.actionHeaderText}>
          Cancel
        </Text>
      </TouchableView>
      <Text bold style={styles.headerText}>
        Filter
      </Text>
      <TouchableView onPress={() => this.setPressToDefault()}>
        <Text light style={styles.actionHeaderText}>
          Reset
        </Text>
      </TouchableView>
    </View>;

  _renderButton = () =>
    <TouchableView style={styles.actionContainer} onPress={() => null}>
      <Text medium style={styles.actionSubmitText}>
        Save Filter
      </Text>
    </TouchableView>;

  setOnPress(check, index) {
    let newIsCheck = this.state.isCheck;
    newIsCheck[index] = check;
    this.setState({ isCheck: newIsCheck });
  }

  setPressToDefault() {
    this.setState({ isCheck: Array(dummyContents.length).fill(false) });
  }

  render() {
    const contents = dummyContents;
    const { isVisible, onBackdropPress, onCancelPress } = this.props;
    return (
      <Modal
        animationIn="zoomIn"
        animationOut="zoomOut"
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        style={styles.container}
      >
        <View style={styles.cardModalContainer}>
          {this._renderHeader(onCancelPress)}
          <View style={styles.contentContainer}>
            <ScrollView>
              <View style={styles.descriptionSortByContainer}>
                <Text light>Sort my results by</Text>
              </View>
              <View style={styles.sortByContainer}>
                {this._renderContents(contents)}
              </View>
            </ScrollView>
          </View>

          {this._renderButton()}
        </View>
      </Modal>
    );
  }
}

export default FilterModal;
