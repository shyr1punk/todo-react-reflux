var TodoItem = React.createClass({
    className: "view",
    propTypes: {
        text: React.PropTypes.string.isRequired,
        index: React.PropTypes.number.isRequired
    },
    handleDelete: function() {
        TodoActions.deleteItem(this.props.index);
    },
    handleEditStart: function() {
        TodoActions.editItemStart(this.props.index);
    },
    handleEditEnd: function() {
        TodoActions.editItemEnd(this.props.index);
    },
    render: function () {
        return (
            <div className={this.className}>
                <span>
                    {this.props.index}
                </span>
                <input type="text" value={this.props.text}></input>
                <span className="text">
                    {this.props.text}
                </span>
                <button onClick={this.handleDelete}>Del</button>
                <button onClick={this.handleEditStart}>Edit</button>
            </div>
        );
    }
});

var TodoItems = React.createClass({
    mixins: [Reflux.connect(TodoStore)],
    render: function () {
        var todos = this.state.items.map(function (item, i) {
            return <TodoItem text={item.text} index={i} key={i} />
        });
        return (
            <div>{todos}</div>
        );
    }
});

var Input = React.createClass({
    handleKeyPress: function (e) {
        if(e.key === "Enter" && e.target.value !== "") {
            TodoActions.addItem(e.target.value);
            e.target.value = "";
        }
    },
    render: function () {
        return (
            <div>
                <label for="input"></label>
                <input type="text" id="input" onKeyPress={this.handleKeyPress}/>
            </div>
        );
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Input />
                <TodoItems />
            </div>
        );
    }
});
