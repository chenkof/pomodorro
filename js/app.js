const AppBase = Marionette.Application.extend({
    Data : {},
    region: ".page-content-wrapper",
    initialize: function(){
        console.log("Pomodoro started!");
    },
    onStart: function(){
        this.showView(new MainView());
    }
});

window.App = new AppBase();

App.Data.TaskCollection = new TaskCollection();
App.Data.CompletedTaskCollection = new CompletedTaskCollection();