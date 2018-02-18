import React, { Component } from 'react';
import { connect } from 'react-redux';

import Term from '../../components/Term/Term'

export class TermPageView extends Component {
  state = { };

  render () {
    return (
      <Term defintion='This is a term' />
    );
  };
};

export default TermPageView;
