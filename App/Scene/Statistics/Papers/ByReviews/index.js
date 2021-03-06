import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { LoadingIndicator } from 'Component';
import { compose, gql, graphql } from 'react-apollo';
import styles from '../styles';
import GET_PAPERS_BY_REVIEWS from 'Graphql/query/getPaperStatisticByReviews.graphql';
import { ChartComponent } from 'Scene/Statistics/ChartComponent';

class AttendeesStatisticByTotalPhotos extends Component {
  static _renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <LoadingIndicator />
      </View>
    );
  }

  render() {
    if (this.props.data.loading) {
      return AttendeesStatisticByTotalPhotos._renderLoading();
    }

    return (
      <ChartComponent
        data={this.props.data.getPaperStatisticByReviews}
        pieChartDescription={'The percentage of best papers based on reviews'}
        barChartDescription={'The number of best papers based on reviews'}
        bar
      />
    );
  }
}

AttendeesStatisticByTotalPhotos.propTypes = {
  data: PropTypes.object,
};

export default compose(graphql(gql(GET_PAPERS_BY_REVIEWS)))(
  AttendeesStatisticByTotalPhotos,
);
