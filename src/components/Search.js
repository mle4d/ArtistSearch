import React, { PureComponent } from 'react';
import Artist from './Artist';
import { searchArtist } from '../services/musicAPI';

export default class Search extends PureComponent {
  state = {
    artist: ''
  }
}