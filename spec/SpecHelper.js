
function Model (){};
function View (){};
Model.prototype.save = function(data, options) {};


View.prototype.render = function(){
    var model = new Model()
    var self = this;
    model.save({},{success: self.success, error: self.error});

}
View.prototype.success = function(){
    return "suc";
};
View.prototype.error= function(){
    return "err";
};
