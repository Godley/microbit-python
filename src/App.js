import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Files from 'react-files';

class App extends Component {
  
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.onFilesError = this.onFilesError.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);

    this.state = {value: "blank",
    version: "1.0.0"};
    this.uploadFile = this.uploadFile.bind(this);
  
    this.that = this;
  }
  
  uploadFile(event) {
      let file = event.target.files[0];
      console.log(that);
      console.log(file);
      
      if (file) {
        let data = new FormData();
        data.append('file', file);
        // axios.post('/files', data)...
        let reader = new FileReader();
        var that = this;
        reader.onload = function() {
          let contents_array = this.result.split("\n");
          console.log(contents_array);
          that.setState({version: contents_array[0],
            value: contents_array[1]});
        };
        reader.readAsText(file);
        console.log(reader.result);
      }
  }

  
  render() {
    let data = "data:," + this.state.version + "\n" + this.state.value;
    let decoded = this.state.version + "\n" + this.state.value;
    return (
      <table>
        <tbody>
          <tr>
            <td>
            <span>
      <input type="file"
      name="myFile"
      onChange={this.uploadFile} />
    </span></td>
            <td><a href={data} download>Save</a></td>
          </tr>
          <tr>
            <td><textarea value={this.state.value} onChange={this.handleTextChange} />
            </td>
          </tr>
          
        </tbody>
      </table>
    );
  }
  

  handleTextChange(event) {
    this.setState({value: event.target.value});
  }
}

export default App;