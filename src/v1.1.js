import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router';
import Versioner from './Versioner';

class App extends Versioner {
  
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleTextChange = this.handleTextChange.bind(this);
    this.uploadFile = this.uploadFile.bind(this);

    this.state.app_version = "1.1.0";
    this.state.version = "1.1.0";
    this.state.color = "pink";
  }
  
  uploadFile(event) {
      let file = event.target.files[0];
      console.log(that);
      console.log(file);
      
      if (file) {
        let reader = new FileReader();
        var that = this;
        reader.onload = function() {
          let contents_array = this.result.split("\n");
          console.log(contents_array);
          that.setState({version: contents_array[0],
            value: contents_array[1]});
        };
        reader.readAsText(file);
      }
  }

  
  render() {
    let data = "data:," + this.state.version + "\n" + this.state.value;
    let decoded = this.state.version + "\n" + this.state.value;
    return (
      

      <Route exact path="/" render={() => (
        this.state.version != this.state.app_version ? (
          <Redirect to="/"/>
        ) : (
          <table>
          <tbody>
            <tr>
              <td style={{backgroundColor: this.state.color}}>
              <span>
        <input type="file"
        name="myFile"
        onChange={this.uploadFile} />
      </span></td>
              <td style={{backgroundColor: this.state.color}}><a href={data} download>Save</a></td>
              <td>v{this.state.version}</td>
            </tr>
            <tr>
              <td><textarea value={this.state.value} onChange={this.handleTextChange} />
              </td>
            </tr>
            
          </tbody>
        </table>
        )
      )}/>
    );
  }
  

  handleTextChange(event) {
    this.setState({value: event.target.value});
  }
}

export default App;