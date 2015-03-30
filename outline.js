var p = require('path');

module.exports = {
    
    func1: function(a, b) {
        p.basename("file", "ext");
        var obj = new Object();
        obj.att1 = 12;
        obj.doThis = function(x) {
            console.log('x');
        };
    },
    
    "test something irrelevant": function (obj1, next) {
            console.log("Running test");
            obj1.callThis("hello", function(err, res) {
                if (err) throw err;
                next();
            });
    },
    
    "test something irrelevant2": function (next) {
            console.log("Running test");
            next();
    }
};