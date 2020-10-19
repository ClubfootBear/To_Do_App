import React from "react";
//Импорт компонентнов
import ToDo from "./ToDo"


class ToDoList extends React.Component {
    render() {
        return(
            <ul>
                {this.props.items.map((item, index) => (
                    <ToDo
                        item={item}
                        index={index}
                        handleDone = {this.props.handleDone}
                        handleDelete = {this.props.handleDelete}
                    />
                ))}
            </ul>
        );
    }
}
export default ToDoList;