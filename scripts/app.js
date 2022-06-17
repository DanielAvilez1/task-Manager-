const nonImpIcon = "fas fa-battery-full";
const impIcon = "fas fa-battery-empty";
var isImportant = false;
var isVisible = true;

function toggleImportant() {
  if (isImportant) {
    $("#iImportant").removeClass(impIcon).addClass(nonImpIcon);
    isImportant = false;
  } else {
    $("#iImportant").removeClass(nonImpIcon).addClass(impIcon);
    isImportant = true;
  }
}

function togglePanel() {
  if (isVisible) {
    $("#pnlForm").fadeOut();
    isVisible = false;
  } else {
    $("#pnlForm").fadeIn();
    isVisible = true;
  }
}
function saveTask() {
  //read all values to vars
  let title = $("#txtTitle").val();
  let duration = $("#txtDuration").val();
  let deadline = $("#selDead").val();
  let theLocation = $("#txtWhere").val();
  let status = $("#selStatus").val();

  let task = new Task(
    0,
    title,
    isImportant,
    duration,
    deadline,
    theLocation,
    status
  );
  console.log(task);

  displayTask(task);
}

function displayTask(task) {
  let syntax = `<div class="task">
    <h3>${task.title}</h3>
    <label>${task.importance}</label>
    <label>${task.location}</label>
    <div class="dates">
    <label>${task.duration}</label>
    <label>${task.deadline}</label>
    </div>
   </div>`;

  $("#task-list").append(syntax);
}

function init() {
  //runTests();
  console.log("task manager");

  // load data

  //hook events
  $("#iImportant").click(toggleImportant);
  $("#btnShowHide").click(togglePanel);
  $("#btnSave").click(saveTask);
}

window.onload = init;
//
