var Queue = function () {
    var arr = [];
    var that = this;

    this.size = function() {
        return arr.length;
    }

    this.isEmpty = function() {
        return !that.size();
    }

    this.printQueue = function() {
        return that.isEmpty()? 'Queue is empty': arr.toString();
    }

    this.enqueue = function(value) {
        arr.push(value);

    }
    this.peek = function() {
        return that.isEmpty()? 'Queue is empty': arr[0];
    }
    this.dequeue = function() {
        return that.isEmpty()? 'Queue is empty': arr.splice(0, 1);
    }
}


module.exports = {Queue}