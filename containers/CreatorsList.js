import React, { Component } from 'react';
import CardList from '../components/CardList';

const data = require('../data/creators.json');

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creators: data,
    };
  }
  render() {
    return <CardList cards={this.state.creators} />;
  }
}
