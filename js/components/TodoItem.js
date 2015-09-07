var TodoItem = React.createClass({
    getInitialState: function () {
        return {
            className: "view",
            text: this.props.text
        };
    },
    propTypes: {
        text: React.PropTypes.string.isRequired,
        id: React.PropTypes.number.isRequired
    },
    handleDelete: function() {
        TodoActions.deleteItem(this.props.index);
    },
    handleEditStart: function() {
        this.setState({
            className: "edit"
        });
    },
    handleEditEnd: function() {
        /*this.setState({
            text: this.refs.input.getDOMNode().value
        });*/
        TodoActions.editItem(this.props.index, this.refs.input.getDOMNode().value);
    },
    render: function () {
        return (
            <div className={this.state.className}>
                <span>
                    {this.props.id}
                </span>
                <input ref="input" type="text" defaultValue={this.state.text}></input>
                <span className="text">
                    {this.state.text}
                </span>
                <button className="delete-button" onClick={this.handleDelete}>Del</button>
                <button className="edit-button" onClick={this.handleEditStart}>Edit</button>
                <button className="save-button" onClick={this.handleEditEnd}>Save</button>
            </div>
        );
    }
});
