import React, { Component } from 'react'

import Columns from './Columns'

export default class Topics extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    );
  }
}
