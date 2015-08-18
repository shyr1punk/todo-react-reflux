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
