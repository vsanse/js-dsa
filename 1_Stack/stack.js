var Stack = function () {
    var arr = [];
    var that = this;
    this.size = function() {
        return arr.length;
    }
    this.isEmpty = function () {
        return !that.size();
    }
    this.push = function (value) {
        arr.push(value);
    }
    this.peek = function () {
        return that.isEmpty() ? 'Stack is empty' : arr[that.size() - 1];
    }
    this.pop = function () {
        return that.isEmpty() ? 'Stack is empty' : arr.splice(that.size() - 1, 1)
    }
    this.clear = function() {
        arr = [];
    }
    this.printStack = function() {
        if(that.isEmpty()){
            return 'Stack is empty';
        }
        var printDisplay = '\n';
        for(var i = that.size() -1; i>=0 ; i--) {
            printDisplay+='|'+arr[i]+'|\n';
        }
        return printDisplay;
    }
}


module.exports = { Stack }
