import React from 'react'
import $ from 'jquery'

import TableRow from './TableRow'

export default class Table extends React.Component {
  constructor() {
    super();
    this.state = {data: []};
  }


  componentDidMount() {
    $.ajax({
      // TODO urlAlltime vs. urlRecent
      // TODO Sorting
      // TODO clickable table headers to switch between sortings
      url: this.props.urlAlltime,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    })
  }

  handleChange(event) {
    this.setState({});
  }

  render() {
    // prepare all the rows
    console.log(this.state.data);
    var rows = [];
    var element = '';
    for(var i=0; i<this.state.data.length; i++) {
      element = this.state.data[i];
      rows.push(<TableRow key={i} id={i} alltime={element.alltime} recent={element.recent} username={element.username} />);
    }



    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <div id="table-title" className="text-center">Leaderboard</div>
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Camper Name</th>
                    <th>Points in past 30 days</th>
                    <th>All time points</th>
                  </tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
              </table>
              </div>
          </div>
        </div>
      </div>
    );
  }
}