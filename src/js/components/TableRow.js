import React from 'react'


export default class TableRow extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <tr key={this.props.id}>
        <td>{this.props.id}</td>
        <td>{this.props.username}</td>
        <td>{this.props.recent}</td>
        <td>{this.props.alltime}</td>
      </tr>
      );
  }
}