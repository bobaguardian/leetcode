
import { element } from "prop-types";
import React, { Component } from "react";
import "./index.css";
const classNames = require('classnames');

export default class FootballMatchesData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedYear: null,
      data: []
    };
  }

  onClick = (year) => async (e) => {
    // Code written in next line is to take care of adding active class to selected year for css purpose.
    this.setState({
      selectedYear: year
    })

    if (year) {
      const response = await fetch(`https://jsonmock.hackerrank.com/api/football_competitions?year=${year}`);
      const data = await response.json();

      this.setState({
        selectedYear: year,
        data:data.data
      })

    }
  }

  componentDidUpdate = () => {}

  render() {
    var years= [2011, 2012, 2013, 2014, 2015, 2016, 2017];
    return (
      <div className="layout-row">
        <div className="section-title">Select Year</div>
        <ul className="sidebar" data-testid="year-list">
          {years.map((year, i) => {
            return (
              <li className={
                classNames({
                  'sidebar-item': true,
                  'active': this.state.selectedYear === year
                })
              }
              onClick={this.onClick(year)}
              key={year}>
                <a>{year}</a>
              </li>
            )
          })}
        </ul>

        <section className="content">
          {!this.state.selectedYear ? null : (

            <section>
              { this.state.selectedYear && this.state.data.length === 0 ?
              <div data-testid="no-result" className="slide-up-fade-in no-result">No Matches Found</div> : (
                <React.Fragment>
                  <div className="total-matches" data-testid="total-matches">Total matches: {this.state.data.length}</div>
                  <ul className="mr-20 matches styled" data-testid="match-list">
                    {this.state.data.map((ele, idx) => {
                      return (

                        <li key={`match-${idx}`} className="slide-up-fade-in">Match {ele.name} won by {ele.winner}</li>
                      )
                    })}
                  </ul>
                </React.Fragment>
              )}


            </section>
          )}


        </section>
      </div>
    );
  }
}
