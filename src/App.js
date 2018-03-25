import React, { Component } from 'react';
import MyButton from './MyButton';
import MyList from './MyList';
import MyForm from './MyForm';

class App extends Component {
  

  constructor(props) {
    super(props);

      this.state= {
        warnaBorder: "black",
        toDo: []
      }
  }

  State = {
    toDo: "",
    error: ""
  }
  
  render() {

    let styles = {
      //border: "1px solid "+this.state.warnaBorder,
      width: "400px",
      borderRadius: "10px",
      padding: "20px",
      margin: "20px",
      backgroundColor: "grey",
      color: "white"
    }
    return (
    <div style={styles}> 
      <h1>To Do List</h1>

        <div className="form-group">
        <label for="ExampleFormControlTextarea1"></label>
          <textarea className="form-control" type="text" id="textaria" rows="2" placeholder="type your to do list here..." onKeyDown={e => {
            if(e.keyCode === 13) {
              //also code for on click instead 13
              console.log(e.keyCode);
              this.setState({
                toDo: this.state.toDo.concat([e.target.value])
              })
              //error: " ";
              e.target.value=" ";
              //how to add warning "please enter you to do list"
            }
            else {
                this.setState ({
                //toDo: this.state.toDo.concat([e.target.value]),
                error: "Please enter your to do list..."
              })
            }
          }
          } />
        </div>
    
        <div className="form-group">
          <MyButton buttonText="kirim"/>
        </div> 
          <MyList toDo={this.state.toDo} />
      </div>
    );
  }
}

export default App;
