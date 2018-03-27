import React, { Component } from 'react';
import MyButton from './MyButton';
import MyList from './MyList';
import MyForm from './MyForm';

class App extends Component {
  

  constructor(props) {
    super(props);

      this.state= {
        toDo: [],
        errorText: ""
      }
    }
      //this.todo = ""}

  toDo() {
    let toDoValue = this.todoInput.value

    let newTodos = this.state.todos
    newTodos.push(toDoValue)

    this.setState({
      todos: newTodos
    })
  }
  // onRemove() {
  //    let items = this.state.items;
  //    items.splice(items);
  
  //   this.setState({items : items})
  // }
  // klik() {
  //   alert('Please enter your to do list...')
  // }

  // removeTodo(id) {
  //   let todos = this.state.todos.filter((todo,index) => {
  //   return id!= index
  //   })
  // }

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
        {this.state.errorText &&
          <div className="alert alert-danger">{this.state.errorText}</div>
        }
        <div className="form-group">
          <input className="form-control" type="text" placeholder="type your to do list here..." onKeyDown={e => {
            if(e.keyCode === 13) {
             
              if(e.target.value === " ") {
                this.setState({
                  errorText: "Please type your to do list..."
                })
            } else {
              this.setState({
                errorText: "",
                toDo: this.state.toDo.concat([e.target.value])
              })
              e.target.value=" ";
            }
          
          }
        }}/>
          
        </div>
        
         <p><strong>To Do's Count</strong>: {this.state.toDo.length}</p>
        <div className="form-group">
          <MyButton buttonText="kirim"/>
        </div> 
          <MyList onItemDelete={(item, i) => {
            let toDoNew = this.state.toDo;
            delete toDoNew[i];

            this.setState({
              toDo: toDoNew
            });
          }}
          toDo={this.state.toDo} />
      </div>
    );
  }
}

export default App;
