var TaskModel = Backbone.Model.extend({});
var TaskCollection = Backbone.Model.extend({
    model: TaskModel,
    localStorage: new Backbone.LocalStorage("newTasks")
});

var CompletedTaskModel = Backbone.Model.extend({});
var CompletedTaskCollection = Backbone.Model.extend({
    model: CompletedTaskModel,
    localStorage: new Backbone.LocalStorage("completedTasks")
});