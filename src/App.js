import React from 'react';
// import Header from "./Header"
// import NameChooser from "./NameChooser"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {inputName: "", displayName: ""}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({inputName: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({displayName: this.state.inputName})
    this.setState({inputName: ""})
  }

  render() {
   return (
      <div>
        <h1>Greeting</h1>
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Type your name..." value={this.state.inputName} onChange={this.handleChange} />
            <button type="submit">Submit</button>
        </form>
        {this.state.displayName !== "" && <h2>Hello, {this.state.displayName}!</h2>}
      </div>
    ); 
   }
}

export default App;
