import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Files from 'react-files';

class App extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.onFilesChange = this.onFilesChange.bind(this);
    this.onFilesError = this.onFilesError.bind(this);
    this.save = this.save.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);

    this.state = {value: "blank",
  version: "1.0.0"};
  }

  
  render() {
    let data = "data:," + this.state.version + "\n" + this.state.value;
    let decoded = this.state.version + "\n" + this.state.value;
    return (
      <table>
        <tbody>
          <tr>
            <td><div className="files">
        <Files
          className='files-dropzone'
          onChange={this.onFilesChange}
          onError={this.onFilesError}
          accepts={['text/plain']}
          maxFiles={1}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
        Load
        </Files>
      </div></td>
            <td><a href={data} download>Save</a></td>
          </tr>
          <tr>
            <td><textarea defaultValue={this.state.value} onChange={this.handleTextChange} />
            </td>
          </tr>
          
        </tbody>
      </table>
    );
  }

  handleTextChange(event) {

    this.setState({value: event.target.value});
  }

  save() {
    let text = this.version + "\n" + this.state.value;

  }

  onFilesChange(files) {
    console.log(files);
  }
 
  onFilesError(error, file) {
    console.log('error code ' + error.code + ': ' + error.message)
  }
}

export default App;