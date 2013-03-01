describe("Backbone model spies", function(){
    it("model save success", function(){
        var view = new View();
        spyOnModelCallback(Model.prototype, "save", "success");
        view.render();
        expect(Model.prototype.save).toCallOnSuccess(view.success);

    });

    it("model save error", function(){
        var view = new View();
        spyOnModelCallback(Model.prototype, "save", "error");
        view.render();
        expect(Model.prototype.save).toCallOnError(view.error);
    });
});