jasmine-backbone
================

Collection of test helpers designed to be used in Backbone.js projects


Available Helpers
--------------------

### Cleaner spy on model's callbacks

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