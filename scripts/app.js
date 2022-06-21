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
  console.log(JSON.stringify(task));

  $.ajax({
    url: "https://fsdiapi.azurewebsites.net/api/tasks/",
    type: "POST",
    data: JSON.stringify(task),
    contentType: "application/json",
    success: function (response) {
      let savedTask = JSON.parse(response);
      displayTask(savedTask);
    },
    error: function (details) {
      console.log("Error saving", details);
    },
  });
}
function getStatusText(status) {
  switch (status) {
    case "0":
      return "New";
    case "1":
      return "In Progress";
    case "3":
      return "Blocked";
    case "5":
      return "Completed";
    case "9":
      return "Removed";
    default:
      return "missing";
  }
}

function displayTask(task) {
  let statusText = getStatusText(task.status);
  let syntax = `<div class="task">
    <h3>${task.title}</h3>
    <label>${task.importance}</label>
   
    <label>${task.duration}</label>
    <label>${task.deadline}</label>
    <label>${statusText}</label> 
    <label>${task.location}</label>
    <div class="dates">
    </div>
   </div>`;

  $("#task-list").append(syntax);
}

function testRequest() {
  $.ajax({
    url: "https://fsdiapi.azurewebsites.net/",
    type: "GET",
    success: function (response) {
      console.log("Server Says:", response);
    },
    error: function (errorDet) {
      console.log("Error on request", errorDet);
    },
  });
}

function fetchTasks() {
  $.ajax({
    type: "GET",
    url: "https://fsdiapi.azurewebsites.net/api/tasks",
    success: function (response) {
      let tasks = JSON.parse(response);
      for (let i = 0; i < tasks.length; i++) {
        let item = tasks[i];
        if (item.name == "Daniel") {
          displayTask(item);
        }
      }
    },
    error: function (dets) {
      console.log("Error fetching task", dets);
    },
  });
}

function clearAllTasks() {
  $.ajax({
    type: "DELETE",
    url: "https://fsdiapi.azurewebsites.net/api/tasks/clear/Daniel",
    success: function () {
      $("#task-list").html("");
    },

    error: function (eer) {
      console.error(err);
    },
  });
}

function init() {
  //runTests();
  console.log("task manager");

  // load data
  fetchTasks();

  //hook events
  $("#iImportant").click(toggleImportant);
  $("#btnShowHide").click(togglePanel);
  $("#btnSave").click(saveTask);
  $("#btnClear").click(clearAllTasks);
}

window.onload = init;
