import React from 'react';

import TermPageView from '../../containers/TermPageView/TermPageView';
import HeaderContainer from '../../containers/Header/Header';

class Layout extends React.Component {
  render () {
    return (
      <div>
        <HeaderContainer />
        <TermPageView />
      </div>
    );
  }
}

export default Layout;
