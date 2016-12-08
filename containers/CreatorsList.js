import React, { Component } from 'react';
import CardList from '../components/CardList';

import creators from '../data/creators.json';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { creators };
  }
  render() {
    return <CardList cards={this.state.creators} />;
  }
}
