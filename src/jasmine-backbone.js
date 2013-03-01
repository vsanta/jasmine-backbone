var spyOnModelCallback = function(model, method, callback){
    spyOn(model, ""+method).andCallFake(function(data, callbacks){
        callbacks[callback]();
    });
} ;
beforeEach(function() {
    var _toCallOn= function(callbackKey, spy, expected){
        var actual = spy.actual.mostRecentCall.args[1][callbackKey];
        var notText = spy.isNot ? " not" : "";

        spy.message = function () {
            return "Expected "+callbackKey+" "+notText+" to call" + actual +" but " + expected +" was called";
        };

        return actual === expected;

    };
    this.addMatchers({
        toCallOnSuccess: function(expected) {
            return _toCallOn("success",this, expected);
        },
        toCallOnError: function(expected) {
            return _toCallOn("error", this, expected);
        }
    });
});