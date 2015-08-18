var TodoItem = React.createClass({
    getInitialState: function () {
        return {
            className: "view"
        };
    },
    propTypes: {
        text: React.PropTypes.string.isRequired,
        index: React.PropTypes.number.isRequired
    },
    handleDelete: function() {
        TodoActions.deleteItem(this.props.index);
    },
    handleEditStart: function() {
        this.setState({
            className: "edit"
        });
        TodoActions.editItemStart(this.props.index);
    },
    handleEditEnd: function() {
        TodoActions.editItemEnd(this.props.index);
    },
    render: function () {
        return (
            <div className={this.state.className}>
                <span>
                    {this.props.index}
                </span>
                <input type="text" value={this.props.text}></input>
                <span className="text">
                    {this.props.text}
                </span>
                <button onClick={this.handleDelete}>Del</button>
                <button className="edit-button" onClick={this.handleEditStart}>Edit</button>
            </div>
        );
    }
});
