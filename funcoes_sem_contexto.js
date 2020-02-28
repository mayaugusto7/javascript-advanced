var context = "global";

var object = {
    context: "object",
    method: function() {
        function func() {
            var context = "function";
            return this.context;
        };
        return func();
    }
}

console.log(object.method());