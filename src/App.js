import React from 'react';
import { Route } from 'react-router-dom';
import Form from './Form';
import Showcard from './Showcard';
import Showdetails from './Showdetails';
import Topbar from './Topbar';
import Booking from './Booking';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      resultarray: [],
      movieinfo: {},
    }
  }

  componentDidMount() {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then(response => response.json())
      .then(datas => {
        this.setState({ resultarray: datas });
      })
  }
  movieName = (item) => {
    this.setState({ movieinfo: item },function(){
      console.log(this.state.movieinfo);
    });
  }
  render() {
    return (
      <div className="App">
        <Route path="/" exact>
          <Topbar show={"Show Information"}/>
          <Showcard resultarray={this.state.resultarray} />
        </Route>

        <Route path="/ShowDetails/:ShowId/:Showname" exact>
          <Topbar show={"Show Information"}/>
          <Showdetails resultarray={this.state.resultarray} func={this.movieName} />
        </Route>
        <Route path="/formmaking" exact>
          <Topbar show={"Booking Information"}/>
          <Form movie={this.state.movieinfo} />
        </Route>
        <Route path="/booking" exact>
          <Topbar show={"Final Information"}/>
          <Booking />
        </Route>
      </div>
    );
  }
}

export default App;
