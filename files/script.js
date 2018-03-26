function TableEntity(id, parent, task){
    this.buttonStart;
    this.buttonRemove
    this.Entity;
    this.parent = parent;
    this.id = id;
    this.task = task;
    if(task) this.finished = true;
    let _this=this;
    this.start = function () {
        _this.prevColor = _this.Entity.style.backgroundColor
        _this.Entity.style.backgroundColor = "#888"
        timerSetFunc(_this);
    }
    this.remove = function(){
        _this.parent.removeChild(_this.Entity);
        newTasks.splice(_this.id, 1);
    }
    this.initialize = function(){
        if(!this.task) this.task = prompt("Podaj opis zadania");
        this.Entity = document.createElement("div");
        this.Entity.className = "task-entity";
        let title = document.createElement("div");
        title.className = "title-cell";
        title.innerHTML = this.task;
        this.Entity.appendChild(title);
        if(!this.finished) {
            let but = document.createElement("div");
            but.className = "button-cell";
            let but1 = document.createElement("button");
            but1.className = "start-task";
            but1.innerHTML = "Rozpocznij!";
            this.buttonStart = but1;
            but.appendChild(but1);
            let but2 = document.createElement("button");
            but2.className = "remove-task";
            but2.innerHTML = "Usuń";
            this.buttonRemove = but2;
            but.appendChild(but2);
            if (blockButtons) {
                but1.disabled = true;
                but2.disabled = true;
            }
            this.Entity.appendChild(but);

            this.buttonStart.onclick = this.start;
            this.buttonRemove.onclick = this.remove;
        }
        this.parent.appendChild(this.Entity);

    }

}

window.onload = function(){
    window.newTasks = [];
    window.finTasks = [];
    window.timer; window.time;
    window.time = window.maxTime = 1500;
    setTimer();
    window.blockButtons = false;
    document.getElementById("add-task").addEventListener("click", ()=>{
        newTasks.push( new TableEntity(newTasks.length, document.getElementById("tasks-new")) );
    newTasks[newTasks.length-1].initialize();
});
    document.getElementById("max-time").addEventListener("change", (ev)=>{
        window.time = window.maxTime = parseInt(ev.currentTarget.value);
    setTimer();
});

}
function timerSetFunc(el){
    window.time = maxTime;
    window.timer = setInterval(timerRunFunc, 1000, el);
    blockButtons = true;
    changeButtonsDisability(el.buttonRemove);
}
function timerRunFunc(el){
    window.time--;
    setTimer();

    if(window.time == 0){
        window.time = window.maxTime;
        setTimer();
        document.title = "Pomodoro - Time Management System";
        clearInterval(timer);
        blockButtons = false;
        changeButtonsDisability(el.buttonRemove);

        let conf = confirm("Zakończyć zadanie?");
        if(conf){
            finTasks.push( new TableEntity(finTasks.length, document.getElementById("tasks-fin"), el.task) );
            finTasks[finTasks.length-1].initialize();
            el.remove();
        }else{
            el.Entity.style.backgroundColor = el.prevColor;
        }

    }
}
function changeButtonsDisability(currentButton){
    var buttons = document.getElementsByClassName("start-task");
    for(var i=0; i<buttons.length; i++) buttons[i].disabled = blockButtons;
    currentButton.disabled = blockButtons;
}
function setTimer(){
    let mins = Math.floor(window.time/60);
    if(mins<10) mins = "0"+mins;
    let secs = window.time%60;
    if(secs<10) secs = "0"+secs
    document.getElementById("timer").innerHTML = mins+":"+secs;
    document.title = mins+":"+secs;
}