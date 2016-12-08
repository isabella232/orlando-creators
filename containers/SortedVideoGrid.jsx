/**
 * Sorted Video Grid
 *
 * Sorted container for VideoGrid
 */

'use strict';
/**
 * @section Imports
 */

import React, { Component } from 'react';
import orderBy from 'lodash/fp';

/**
 * @section Data parsing & sorting
 */

import creatorsRaw from 'data/creators.json';

let now = new Date().getTime();
let creators = creatorsRaw.map(creator => {
  creator.timestamp = new Date(creator.added).getTime();
  creator.isCurrent = creator.timestamp <= now;
  creator.isFuture = creator.timestamp > now;
  return creator;
});
let creatorsCurrent = orderBy(
  creators.filter(creator => creator.isCurrent),
  'timestamp',
  'desc'
);
let creatorsFuture = orderBy(
  creators.filter(creator => creator.isFuture),
  'timestamp',
  'asc'
);
console.log(creatorsCurrent);

/**
 * @section Send to presentational component
 */

import VideoGrid from '../components/VideoGrid';

export default class SortedVideoGrid extends Component {
  constructor() {
    super();
    this.state = {
      creators: creatorsCurrent.push(...creatorsFuture)
    };
  }

  render() {
    return <VideoGrid videos={this.state.creators}/>;
  }
}
