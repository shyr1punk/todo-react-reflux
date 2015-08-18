var TodoItemsList = React.createClass({
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
