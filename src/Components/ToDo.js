import React from "react";

class ToDo extends React.Component {
    render () {

        if (this.props.item.complited) {
            return (
                <div className={'ToDo'}>
                    <li className={'ToDoLi completed'} key={this.props.item.id}>{this.props.item.text}</li>
                    <button className={'btn completed'} onClick={() => this.props.handleDone(this.props.item.id, this.props.index)}>Завершено?</button>
                    <button className={'btn'} onClick={() => this.props.handleDelete(this.props.item.id, this.props.index)}>X</button>
                </div>
            )
        } else {
            return (
                <div className={'ToDo'}>
                    <li className={'ToDoLi'} key={this.props.item.id}>{this.props.item.text}</li>
                    <button className={'btn'} onClick={() => this.props.handleDone(this.props.item.id, this.props.index)}>Готово?</button>
                    <button className={'btn'} onClick={() => this.props.handleDelete(this.props.item.id, this.props.index)}>X</button>
                </div>
            )
        }
    }
}

export default ToDo;