import React, { Component } from "react";
// redux
import { connect } from "react-redux";
// css modules
import classes from "./assets/css/App.module.css";
// @material-ui/core
import Hidden from "@material-ui/core/Hidden";
// Custom components
import Navbar from "./components/Navbar/Navbar";
import Confidence from "./components/Columns/Confidence";
import SettingsBlock from "./components/SettingsBlock/SettingsBlock";


export class App extends Component {

  render() {
    return (
      <div className={classes.app}>
        <Navbar />
        <div className={classes.container}>
          <SettingsBlock />
          <Confidence />
        </div>
        <Hidden smDown>
          <div className={classes.wrap}>
            <iframe
              src=" https://fierce-sierra-99883.herokuapp.com"
              className={classes.frame}
              title="Timer preview"
              frameBorder="0"
            ></iframe>
          </div>
        </Hidden>
      </div>
    );
  }
}




const mapStateToProps = (state) => ({});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
