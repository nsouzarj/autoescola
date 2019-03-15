import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

export class AulaTeorica extends Component {
  render() {
    return (
      <React.Fragment>
      <div className='aulas'>
        <h1 className='aulas__texto'>Aula Teórica</h1>
      </div>
      </React.Fragment>
    )
  }
}

export default withRouter(AulaTeorica);
