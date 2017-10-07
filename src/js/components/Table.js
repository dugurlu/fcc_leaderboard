import React from 'react'
import $ from 'jquery'

import TableRow from './TableRow'

export default class Table extends React.Component {
  constructor() {
    super();
    this.state = {data: []};
  }


  componentDidMount() {
    this.fetchLeaderboard(this.props.urlRecent);
    $('#th-recent').click(function(e){
      this.fetchLeaderboard(this.props.urlRecent);
    }.bind(this));
    $('#th-alltime').click(function(e){
      this.fetchLeaderboard(this.props.urlAlltime);
    }.bind(this));
  }

  handleChange(event) {
    this.setState({});
  }

  fetchLeaderboard(url) {
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data)
        this.setState({data});
        console.log(this.state)
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    })
  }

  render() {
    // prepare all the row elements to place inside the table later on
    var rows = [];
    var element = '';
    for(var i=0; i<this.state.data.length; i++) {
      element = this.state.data[i];
      rows.push(<TableRow key={i+1} id={i+1} alltime={element.alltime} recent={element.recent} username={element.username} />);
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
                    <th><a href="#" id="th-recent">Points in past 30 days</a></th>
                    <th><a href="#" id="th-alltime">All time points</a></th>
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