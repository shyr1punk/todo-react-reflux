var TodoItemsList = React.createClass({
    mixins: [Reflux.connect(TodoStore)],
    componentDidMount: function () {
        TodoActions.loadItems();
    },
    render: function () {
        var todos = this.state.items.map(function (item) {
            return <TodoItem text={item.text} id={item.id} key={item.id} />
        });
        return (
            <div>{todos}</div>
        );
    }
});
