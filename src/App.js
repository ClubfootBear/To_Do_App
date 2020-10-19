import React from 'react';
import './App.css';
// Импорт компонентов
import ToDoList from "./Components/ToDoList";


class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h3>Список дел</h3>
            <ToDoList
                items={this.state.items}
                handleDone={this.handleDone}
                handleDelete={this.handleDelete}
            />
          <form onSubmit={this.handleSubmit}>
              <label className={"Form_label"}>Напиши меня</label>
              <input
                  onChange={this.handleChange}
                  value={this.state.text}/>
              <button>Отправить</button>
          </form>
          </header>
        </div>
    );
  }

    handleChange(e) {
        this.setState( { text: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        if ( this.state.text.length === 0) {
            return;
        }
        const newItem = {
            id : Date.now(),
            text: this.state.text,
            complited: false,
        }
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: '',
        }));
    }

    handleDone(id, index) {
        const items = this.state.items.concat()
        const item = items[index];
        // console.log(item);
        item.complited = !item.complited;
        this.setState({items})
        // console.log(item + 'index: ' + index);
        // console.log(item);
    }

    handleDelete(id, index) {
        const items = this.state.items.concat()
        items.splice(index, 1)
        this.setState({items})
        console.log('Was deleted element by index:' + index)
    }
}

export default ToDoApp;
