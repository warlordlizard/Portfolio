'use strict';

import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import {BrowserRouter, Route, Link} from 'react-router-dom';
class App extends React.Component {
  render() {
    return(
      <main className='portfolio'>
        <BrowserRouter>
          <section>
            <Route path='???' component={????} />
            <Route path='???' component={????} />
            <Route path='???' component={????} />
          </section>
        </BrowserRouter>
      </main>
    );
  }
}
let mapStateToProps = (state) => ({
  profile: state.profile,
});

let mapDispatchToProps = (dispatch) => ({});



export default connect(mapStateToProps, mapDispatchToProps) (App);