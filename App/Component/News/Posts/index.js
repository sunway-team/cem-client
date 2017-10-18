import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';
import { Colors } from '~/Theme';
import {
  UserAvatar,
  TouchableView,
  Text,
  Modal,
  AutoExpandingTextInput,
} from '~/Component';

import { defaultUserAvatar } from '~/Scene/NewsFeed/fixture';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isVisible: this.props.isVisible,
    };
    this.post = this.post.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  post() {
    this.props.post(this.state.text);
    this.cancel();
    this.textInput.clear();
    this.textInput.blur();
  }

  cancel() {
    this.props.cancel(!this.state.isVisible);
    this.setState({ isVisible: false });
  }

  render() {
    return (
      <Modal
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={500}
        animationOutTiming={500}
        isVisible={this.state.isVisible}
        style={styles.container}
      >
        <View style={styles.header}>
          <TouchableView onPress={this.cancel}>
            <Text bold style={{ color: Colors.primary }}>
              Cancel
            </Text>
          </TouchableView>
          <Text bold medium>
            Update Status
          </Text>
          <TouchableView
            onPress={this.post}
            disabled={this.state.text === '' ? true : false}
          >
            <Text
              bold
              style={
                this.state.text === ''
                  ? { color: Colors.grey }
                  : { color: Colors.primary }
              }
            >
              Post
            </Text>
          </TouchableView>
        </View>

        <View style={styles.content}>
          <View style={styles.contentUserInformation}>
            <UserAvatar small avatar={defaultUserAvatar} />
            <Text bold style={styles.contentUsername}>
              Ly Bao Khanh
            </Text>
          </View>
          <AutoExpandingTextInput
            value={this.state.text}
            placeholder={"What's on your mind?"}
            onChangeText={text => this.setState({ text })}
            enablesReturnKeyAutomatically={true}
            returnKeyType="done"
          />
        </View>

        <View style={styles.action}>
          <TouchableView rippleColor={Colors.primary} borderless={true}>
            <Icon name="md-photos" type="ionicon" />
            <Text>Photo</Text>
          </TouchableView>
          <TouchableView rippleColor={Colors.primary} borderless={true}>
            <Icon name="camera" type="material-community" />
            <Text>Camera</Text>
          </TouchableView>
        </View>
      </Modal>
    );
  }
}

Posts.propTypes = {
  isVisible: PropTypes.bool,
  post: PropTypes.func.isRequired,
  cancel: PropTypes.func,
};

export default Posts;