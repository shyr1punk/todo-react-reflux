var TodoStore = Reflux.createStore({
    data: {
        items: []
    },
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
    onEditItem: function (value) {

        console.log("End edit");
    },
    onLoadItems: function () {
        var self = this,
            request = new XMLHttpRequest();
        request.open('GET', 'api/data.json', true);

        request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                self.data = JSON.parse(this.response);
                self.trigger(self.data);
            } else {
                // We reached our target server, but it returned an error
            }
        };
        request.onerror = function() {
            // There was a connection error of some sort
        };
        request.send();
    }
});
