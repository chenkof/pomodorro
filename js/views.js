var EmptyView = Marionette.View.extend({
    template: _.template("<h3>Brak danych do wyświetlenia!</h3>")
});

var MainView = Marionette.View.extend({

    template: false,
    el: "#app-content",
    ui: {
        modal: "#modal"
    },
    events: {
        "click #task-add-but":      "addTask",
        "click #timer-start-but":   "startTimer",
        "click #task-end-but":      "endTask",
        "click #task-con-but":      "continueTask"
    },
    regions: {
        newTaskRegion:  "#task-new-reg",
        cplTaskRegion:  "#task-cpl-reg",
        timerRegion:    "#timer-reg",
        modalRegion:    "#modal-reg"
    },
    initialize: ()=>{
      currentTaskId = -1;
    },
    addTask: ()=>{
        this.showChildView("modalRegion", new TaskAddView({parent:this}));
        modal.toggle();
    },
    startTimer: ()=>{

    },
    endTask: ()=>{

    },
    continueTask: ()=>{

    }
});