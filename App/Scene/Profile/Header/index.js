import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Text } from '~/Component';
import { Images } from '~/Theme';
import styles from './styles';

class Header extends Component {
  static propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    address: PropTypes.string,
  };

  constructor(props, context) {
    super(props, context);
    this._renderAvatar = this._renderAvatar.bind(this);
    this._renderInfo = this._renderInfo.bind(this);
  }

  _renderAvatar() {
    return (
      <View style={styles.avatarSection}>
        <Image source={{ uri: this.props.avatar }} style={styles.avatar} />
      </View>
    );
  }

  _renderInfo() {
    const { username, address } = this.props;
    return (
      <View style={styles.infoContainer}>
        <Text style={[styles.primaryTextColor, styles.username]} bold>
          {username}
        </Text>
        <Text style={styles.primaryTextColor}>
          {address}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={Images.materialBackground}
          style={styles.backgroundImage}
        >
          <View style={styles.coverPhoto}>
            {this._renderAvatar()}
            {this._renderInfo()}
          </View>
        </Image>
      </View>
    );
  }
}

export default Header;