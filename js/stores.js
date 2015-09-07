var TodoStore = Reflux.createStore({
    data: {
        items: []
    },
    getInitialState: function () {
        return this.data;
    },
    listenables: [TodoActions],
    onAddItem: function (itemText) {
        this.data.items.push({id: this.data.items[this.data.items.length-1].id + 1, text: itemText});
        this.trigger({data: this.data});
    },
    onDeleteItem: function (id) {
        var self = this;
        this.data.items.forEach(function (item, index) {
            if (item.id === id) {
                self.data.items.splice(index, 1);
            }
        });
        this.trigger({data: this.data});
    },
    onEditItemStart: function () {
        console.log("Start edit");
    },
    onEditItem: function (id, value) {
        this.data.items.forEach(function (item) {
            if (item.id === id) {
                item.text = value;
            }
        });
        this.trigger({data: this.data});
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
