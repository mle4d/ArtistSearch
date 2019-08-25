import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Releases from '../components/releases/Releases';
import { artistInfo } from '../service/musicApi';
// import { withPaging } from '../components/withPaging';

class ArtistResults extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    page: PropTypes.number.isRequired,
    setAllPages: PropTypes.func.isRequired
  }

  state = {
    releases: []
  }

  fetch = () => {
    artistInfo(this.props.match.params.id, this.props.page)
      .then(({ releases, allPages }) => {
        this.setState({ releases });
        this.props.setAllPages(allPages);
      });
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.page !== this.props.page) {
      this.fetch();
    }
  }

  render() {
    const { releases } = this.state;
    return (
      <>
        <h1>Releases for {this.props.match.params.artistName}</h1>
        <Releases releases={releases} />
      </>
    );
  }
}

export default withPaging(ArtistResults);
