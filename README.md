jasmine-backbone
================

Collection of test helpers designed to be used in Backbone.js projects


Available Helpers
--------------------

### Cleaner spy on model's callbacks

Instead of using spyOn, you call spyOnModelCallback. Just like spyOn it takes the object and method name. The third param
is the options key that maps to the function you want to guarantee you're binding.



#### toCallOnSuccess

```javascript
    var view = new View();
    spyOnModelCallback(Model.prototype, "save", "success");
    view.render();
    expect(Model.prototype.save).toCallOnSuccess(view.success);
```

#### toCallOnError

```javascript
    var view = new View();
    spyOnModelCallback(Model.prototype, "save", "error");
    view.render();
    expect(Model.prototype.save).toCallOnError(view.error);
```