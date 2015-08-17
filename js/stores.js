var TodoStore = Reflux.createStore({
    data: {items: [
        {text: "item one"},
        {text: "item two"},
        {text: "once more item"}
    ]},
    getInitialState: function () {
        return this.data;
    },
    listenables: [TodoActions],
    onAddItem: function (itemText) {
        this.data.items.push({text: itemText});
        this.trigger({data: this.data});
    },
    onDeleteItem: function (index) {
        this.data.items.splice(index, 1);
        this.trigger({data: this.data});
    },
    onEditItemStart: function () {
        console.log("Start edit");
    },
    onEditItemDone: function () {
        console.log("End edit");
    }
});
