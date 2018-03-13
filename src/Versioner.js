import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Files from 'react-files';
import { Route, Redirect } from 'react-router';

class Versioner extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        version: "0.0.0",
        app_version: "0.0.0"
    }
    this.content = this.content.bind(this);
    if(props.location.state !== undefined) {
        this.state.value = props.location.state.value;
    }
  }

  content() {
  return (<div>Version not found!</div>);
  }

  render() {
      let major_minor_bugfix = this.state.version.split(".");
      if (this.state.version === this.state.app_version) {
          
          return this.content();
      }
      else {
          return (
          <Redirect to={{
              pathname: "/" + major_minor_bugfix[0],
              state: { value: this.state.value }
            }}/>);
        }
    }
}

export default Versioner;