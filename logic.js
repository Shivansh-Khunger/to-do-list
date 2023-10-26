class task {
  constructor(
    taskName,
    taskDetails,
    taskPriority,
    isTaskCompleted,
    prevTaskName,
    isTaskAdded,
    isTaskEditing
  ) {
    this.taskName = taskName;
    this.taskDetails = taskDetails;
    this.taskPriority = taskPriority;
    this.prevTaskName = prevTaskName;
    this.isTaskCompleted = isTaskCompleted;
    this.isTaskAdded = isTaskAdded;
    this.isTaskEditing = isTaskEditing;
  }
}

let pendingTasks = 0;
let taskList = [];
const addTaskButton = document.getElementById("add-task-button");

addTaskButton.addEventListener("click", function () {
  const addTaskPopUpPage = document.getElementById("add-task-pop-up-page");
  addTaskPopUpPage.classList.remove("hidden");
  addTaskPopUpPage.classList.add("block");
  dropDownPriorityList();
  addTask();
});

function dropDownPriorityList() {
  const priorityContentContainer = document.getElementById(
    "priority-content-container"
  );
  const priorityListContainer = document.getElementById(
    "priority-list-container"
  );

  const priorityList = document.getElementById("priority-list");

  if (screen.width > 768) {
    priorityContentContainer.addEventListener("mouseover", function () {
      priorityList.classList.remove("hidden");
    });
    priorityContentContainer.addEventListener("mouseout", function () {
      priorityList.classList.add("hidden");
    });
  } else {
    priorityContentContainer.addEventListener("touchstart", function () {
      priorityList.classList.remove("hidden");
    });
  }

  priorityList.addEventListener("click", function (event) {
    if (priorityList.contains(event.target)) {
      priorityList.classList.add("hidden");
    }
  });
}

function addTask() {
  const addTaskPopUpPage = document.getElementById("add-task-pop-up-page");
  const priorityContentContainer = document.getElementById(
    "priority-content-container"
  );
  const priorityListDropDown = document.getElementById(
    "priority-list-drop-down"
  );
  const priorityListContainer = document.getElementById(
    "priority-list-container"
  );
  const priorityList = document.getElementById("priority-list");
  const taskNameField = document.getElementById("task-name");
  const taskDetailsField = document.getElementById("task-detail");
  const addTaskFinalButton = document.getElementById(
    "add-task-finalisation-button"
  );

  const newTask = new task("", "", 0, "", false, false, false);
  console.log(newTask);

  priorityList.addEventListener("click", (event) => {
    if (!newTask.isTaskAdded) {
      if (priorityList.contains(event.target)) {
        switch (event.target.innerHTML.trim()) {
          case "High":
            newTask.taskPriority = 3;
            for (child in priorityContentContainer.childNodes) {
              if (priorityContentContainer.childNodes[child].nodeType === 3) {
                priorityContentContainer.childNodes[
                  child
                ].nodeValue = `priority level ${event.target.innerHTML.trim()}`;
                console.log(event.target.innerHTML.trim());
                console.log(
                  "Node Value - ",
                  priorityContentContainer.childNodes[child].nodeValue
                );
                break;
              }
            }
            break;
          case "Medium":
            newTask.taskPriority = 2;
            for (child in priorityContentContainer.childNodes) {
              if (priorityContentContainer.childNodes[child].nodeType === 3) {
                priorityContentContainer.childNodes[
                  child
                ].nodeValue = `priority level ${event.target.innerHTML.trim()}`;
                console.log(event.target.innerHTML.trim());
                console.log(
                  "Node Value - ",
                  priorityContentContainer.childNodes[child].nodeValue
                );
                break;
              }
            }
            break;
          case "Low":
            newTask.taskPriority = 1;
            priorityContentContainer.childNodes.forEach((node) => {
              for (child in priorityContentContainer.childNodes) {
                if (priorityContentContainer.childNodes[child].nodeType === 3) {
                  priorityContentContainer.childNodes[
                    child
                  ].nodeValue = `priority level ${event.target.innerHTML.trim()}`;
                  console.log(event.target.innerHTML.trim());
                  console.log(
                    "Node Value - ",
                    priorityContentContainer.childNodes[child].nodeValue
                  );
                  break;
                }
              }
            });
            break;
          default:
            newTask.taskPriority = 0;
        }
      }
    }
    if (newTask.isTaskEditing) {
      if (priorityList.contains(event.target)) {
        switch (event.target.innerHTML.trim()) {
          case "High":
            newTask.taskPriority = 3;
            for (child in priorityContentContainer.childNodes) {
              if (priorityContentContainer.childNodes[child].nodeType === 3) {
                priorityContentContainer.childNodes[
                  child
                ].nodeValue = `priority level ${event.target.innerHTML.trim()}`;
                console.log(event.target.innerHTML.trim());
                console.log(
                  "Node Value - ",
                  priorityContentContainer.childNodes[child].nodeValue
                );
                break;
              }
            }
            break;
          case "Medium":
            newTask.taskPriority = 2;
            for (child in priorityContentContainer.childNodes) {
              if (priorityContentContainer.childNodes[child].nodeType === 3) {
                priorityContentContainer.childNodes[
                  child
                ].nodeValue = `priority level ${event.target.innerHTML.trim()}`;
                console.log(event.target.innerHTML.trim());
                console.log(
                  "Node Value - ",
                  priorityContentContainer.childNodes[child].nodeValue
                );
                break;
              }
            }
            break;
          case "Low":
            newTask.taskPriority = 1;
            priorityContentContainer.childNodes.forEach((node) => {
              for (child in priorityContentContainer.childNodes) {
                if (priorityContentContainer.childNodes[child].nodeType === 3) {
                  priorityContentContainer.childNodes[
                    child
                  ].nodeValue = `priority level ${event.target.innerHTML.trim()}`;
                  console.log(event.target.innerHTML.trim());
                  console.log(
                    "Node Value - ",
                    priorityContentContainer.childNodes[child].nodeValue
                  );
                  break;
                }
              }
            });
            break;
          default:
            newTask.taskPriority = 0;
        }
      }
    }
    console.log(newTask.taskPriority);
  });

  taskNameField.addEventListener("input", function () {
    if (!newTask.isTaskAdded) {
      newTask.taskName = taskNameField.value;
    }
    if (newTask.isTaskEditing) {
      newTask.taskName = taskNameField.value;
    }
  });

  taskDetailsField.addEventListener("input", function () {
    if (!newTask.isTaskAdded) {
      newTask.taskDetails = taskDetailsField.value;
      console.log(newTask.taskDetails);
    }
    if (newTask.isTaskEditing) {
      newTask.taskDetails = taskDetailsField.value;
    }
  });

  addTaskFinalButton.addEventListener("touchstart", function () {
    addTaskFinalButton.classList.add("bg-zinc-900", "text-zinc-300");
  });

  addTaskFinalButton.addEventListener("touchend", function () {
    addTaskFinalButton.classList.remove("bg-zinc-900", "text-zinc-300");
  });

  addTaskFinalButton.addEventListener("click", function () {
    if (newTask.taskName == "") {
      if (screen.width > 768) {
        addTaskFinalButton.title = "please enter name of the task ...";
        taskNameField.placeholder = "task name ...  (!)";
      } else {
        taskNameField.placeholder = "task name ...  (!)";
      }
      taskNameField.classList.add(
        "animate-shake",
        "animate-ease-linear",
        "animate-alternate",
        "animate-duration-[280ms]"
      );
      setTimeout(() => {
        taskNameField.classList.remove(
          "animate-shake",
          "animate-ease-linear",
          "animate-alternate",
          "animate-duration-[280ms]"
        );
      }, 281);
    } else if (!newTask.isTaskAdded) {
      for (child in priorityContentContainer.childNodes) {
        if (priorityContentContainer.childNodes[child].nodeType === 3) {
          priorityContentContainer.childNodes[
            child
          ].nodeValue = `priority level ...`;
          break;
        }
      }
      taskNameField.placeholder = "task name ...";
      console.log("New-Task Site");
      console.log(newTask);
      newTask.isTaskAdded = true;
      taskList.push(newTask);
      addTaskOnScreen(newTask);
      updateTaskCounter();
      sortElementsOnScreen();
      taskNameField.value = "";
      taskDetailsField.value = "";
      addTaskPopUpPage.classList.remove(
        "animate-in",
        "slide-in-from-bottom-full",
        "block"
      );
      addTaskPopUpPage.classList.add("animate-out", "slide-out-to-bottom-full");
      setTimeout(function () {
        addTaskPopUpPage.classList.add(
          "hidden",
          "animate-in",
          "slide-in-from-bottom-full"
        );
        addTaskPopUpPage.classList.remove(
          "animate-out",
          "slide-out-to-bottom-full"
        );
      }, 701);
    } else {
      for (child in priorityContentContainer.childNodes) {
        if (priorityContentContainer.childNodes[child].nodeType === 3) {
          priorityContentContainer.childNodes[
            child
          ].nodeValue = `priority level ...`;
          break;
        }
      }
      taskNameField.placeholder = "task name ...";
      console.log("Old-Task Site");
      console.log(newTask);
      updateTaskOnScreen(newTask);
      newTask.isTaskEditing = false;
      addTaskFinalButton.innerHTML = "add task .";
      sortElementsOnScreen();
      taskNameField.value = "";
      taskDetailsField.value = "";
      addTaskPopUpPage.classList.remove(
        "animate-in",
        "slide-in-from-bottom-full",
        "block"
      );
      addTaskPopUpPage.classList.add("animate-out", "slide-out-to-bottom-full");
      setTimeout(function () {
        addTaskPopUpPage.classList.add(
          "hidden",
          "animate-in",
          "slide-in-from-bottom-full"
        );
        addTaskPopUpPage.classList.remove(
          "animate-out",
          "slide-out-to-bottom-full"
        );
      }, 701);
    }
  });
}

function addTaskOnScreen(newTask) {
  newTask.prevTaskName = newTask.taskName;
  const taskListContainer = document.getElementById("task-list-container");
  const addTaskFinalButton = document.getElementById(
    "add-task-finalisation-button"
  );

  const taskContainer = document.createElement("div");
  taskContainer.classList.add(
    "flex",
    "justify-center",
    "font-normal",
    "items-center",
    "hover:bg-zinc-500",
    "hover:transition",
    "duration-150",
    "p-1",
    "rounded-md",
    "hover:font-medium",
    "font-mono"
  );
  taskContainer.id = newTask.taskName + "-task-container";

  const taskSpan = document.createElement("span");
  taskSpan.classList.add(
    "material-symbols-outlined",
    "cursor-pointer",
    "align-middle",
    "mr-4",
    "flex-wrap"
  );
  taskSpan.id = newTask.taskName + "-span";
  taskSpan.innerHTML = "radio_button_unchecked";
  taskContainer.appendChild(taskSpan);

  const titleNameLabel = document.createElement("label");
  titleNameLabel.classList.add("w-[14ch]");
  titleNameLabel.htmlFor = taskSpan.id;
  titleNameLabel.id = newTask.taskName + "-title-name-label";
  titleNameLabel.innerHTML = newTask.taskName;
  taskContainer.appendChild(titleNameLabel);

  const optionsContainer = document.createElement("div");
  optionsContainer.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "ml-4"
  );
  optionsContainer.id = newTask.taskName + "-options-container";

  const editOptionLabel = document.createElement("label");
  editOptionLabel.classList.add(
    "px-1",
    "border-2",
    "border-transparent",
    "transition-colors",
    "hover:border-zinc-400",
    "hover:border-2",
    "hover:rounded-xl",
    "hover:bg-zinc-800",
    "hover:text-zinc-400",
    "md:px-2",
    "cursor-pointer"
  );
  editOptionLabel.htmlFor = taskSpan.id;
  editOptionLabel.id = newTask.taskName + "-edit-option";

  const editOptionSpan = document.createElement("span");
  editOptionSpan.classList.add("material-symbols-outlined");
  editOptionSpan.innerHTML = "edit";
  editOptionSpan.id = newTask.taskName + "-edit-option-span";

  editOptionLabel.appendChild(editOptionSpan);
  optionsContainer.appendChild(editOptionLabel);

  const tuneOptionLabel = document.createElement("label");
  tuneOptionLabel.classList.add(
    "px-1",
    "border-2",
    "border-transparent",
    "transition-colors",
    "hover:border-zinc-400",
    "hover:border-2",
    "hover:rounded-xl",
    "hover:bg-zinc-800",
    "hover:text-zinc-400",
    "md:px-2",
    "cursor-pointer"
  );
  tuneOptionLabel.htmlFor = taskSpan.id;
  tuneOptionLabel.id = newTask.taskName + "-tune-option";

  const tuneOptionSpan = document.createElement("span");
  tuneOptionSpan.classList.add("material-symbols-outlined");
  tuneOptionSpan.innerHTML = "tune";
  tuneOptionSpan.id = newTask.taskName + "-tune-option-span";

  tuneOptionLabel.addEventListener("click", () => {
    showPopUpPageWithDetails(newTask);
  });

  tuneOptionLabel.appendChild(tuneOptionSpan);
  optionsContainer.appendChild(tuneOptionLabel);

  taskContainer.addEventListener("touchstart", () => {
    taskContainer.classList.add("bg-zinc-500");
  });

  taskContainer.addEventListener("touchend", () => {
    taskContainer.classList.remove("bg-zinc-500");
  });

  titleNameLabel.addEventListener("click", () => {
    markTask(newTask);
    newTask.taskPriority = -1;
    newTask.isTaskCompleted = true;
    updateTaskCounter();
    // taskContainer.classList.add("bg-zin-500");
    // taskContainer.classList.remove("hover:bg-zin-500");
    sortElementsOnScreen();
  });
  taskSpan.addEventListener("click", () => {
    markTask(newTask);
    newTask.isTaskCompleted = true;
    updateTaskCounter();
    // taskContainer.classList.add("bg-zin-500");
    // taskContainer.classList.remove("hover:bg-zin-500");
    sortElementsOnScreen();
  });

  taskContainer.appendChild(optionsContainer);
  taskListContainer.appendChild(taskContainer);
}

function showPopUpPageWithDetails(newTask) {
  newTask.isTaskEditing = true;
  console.log("Logging from - showPopUpPageWithDetails", newTask);
  const addTaskPopUpPage = document.getElementById("add-task-pop-up-page");
  const priorityContentContainer = document.getElementById(
    "priority-content-container"
  );
  const priorityListDropDown = document.getElementById(
    "priority-list-drop-down"
  );
  const priorityListContainer = document.getElementById(
    "priority-list-container"
  );
  const priorityList = document.getElementById("priority-list");
  const taskNameField = document.getElementById("task-name");
  const taskDetailsField = document.getElementById("task-detail");
  const addTaskFinalButton = document.getElementById(
    "add-task-finalisation-button"
  );

  addTaskPopUpPage.classList.add("block");
  addTaskPopUpPage.classList.remove("hidden");

  console.log("from task", newTask.taskDetails);

  taskNameField.value = newTask.taskName;
  if (newTask.taskDetails !== "") {
    taskDetailsField.value = newTask.taskDetails;
  } else {
    taskDetailsField.value = "";
  }

  for (child in priorityContentContainer.childNodes) {
    if (priorityContentContainer.childNodes[child].nodeType === 3) {
      if (newTask.taskPriority === 3) {
        priorityContentContainer.childNodes[
          child
        ].nodeValue = `priority level High`;
      }
      if (newTask.taskPriority === 2) {
        priorityContentContainer.childNodes[
          child
        ].nodeValue = `priority level Medium`;
      }
      if (newTask.taskPriority === 1) {
        priorityContentContainer.childNodes[
          child
        ].nodeValue = `priority level Low`;
      }
      break;
    }
  }

  addTaskFinalButton.innerHTML = "edit task .";
}

function updateTaskOnScreen(updatedTask) {
  const taskContainer = document.getElementById(
    updatedTask.prevTaskName + "-task-container"
  );
  taskContainer.id = updatedTask.taskName + "-task-container";

  const taskSpan = document.getElementById(updatedTask.prevTaskName + "-span");
  taskSpan.id = updatedTask.taskName + "-span";

  const titleNameLabel = document.getElementById(
    updatedTask.prevTaskName + "-title-name-label"
  );
  titleNameLabel.id = updatedTask.taskName + "-title-name-label";
  titleNameLabel.innerHTML = updatedTask.taskName;

  const optionsContainer = document.getElementById(
    updatedTask.prevTaskName + "-options-container"
  );
  optionsContainer.id = updatedTask.taskName + "-options-container";

  const editOptionLabel = document.getElementById(
    updatedTask.prevTaskName + "-edit-option"
  );
  editOptionLabel.id = updatedTask.taskName + "-edit-option";

  const editOptionSpan = document.getElementById(
    updatedTask.prevTaskName + "-edit-option-span"
  );
  editOptionSpan.id = updatedTask.taskName + "-edit-option-span";

  const tuneOptionLabel = document.getElementById(
    updatedTask.prevTaskName + "-tune-option"
  );
  tuneOptionLabel.id = updatedTask.taskName + "-tune-option";

  const tuneOptionSpan = document.getElementById(
    updatedTask.prevTaskName + "-tune-option-span"
  );
  tuneOptionSpan.id = updatedTask.taskName + "-tune-option-span";

  updatedTask.prevTaskName = updatedTask.taskName;
}

function markTask(existingTask) {
  const existingSpan = document.getElementById(existingTask.taskName + "-span");
  existingSpan.innerHTML = "radio_button_checked";

  const existingNameLabel = document.getElementById(
    existingTask.taskName + "-title-name-label"
  );
  existingNameLabel.classList.add("strikethrough");

  existingTask.isTaskCompleted = true;

  const optionsContainer = document.getElementById(
    existingTask.taskName + "-options-container"
  );

  const childNodesArray = Array.from(optionsContainer.childNodes);

  childNodesArray.forEach((node) => {
    console.log(node);
    node.remove();
  });

  const deleteOptionLabel = document.createElement("label");
  deleteOptionLabel.classList.add(
    "px-1",
    "border-2",
    "border-transparent",
    "transition-colors",
    "hover:border-zinc-400",
    "hover:border-2",
    "hover:rounded-xl",
    "hover:bg-zinc-800",
    "hover:text-zinc-400",
    "md:px-2",
    "cursor-pointer"
  );
  deleteOptionLabel.htmlFor = existingSpan.id;
  deleteOptionLabel.id = existingTask.taskName + "-delete-option";

  const deleteOptionSpan = document.createElement("span");
  deleteOptionSpan.classList.add("material-symbols-outlined");
  deleteOptionSpan.innerHTML = "delete";
  deleteOptionSpan.id = existingTask.taskName + "-delete-option-span";

  deleteOptionLabel.addEventListener("click", () => {
    console.log(taskList);
    taskList.splice(taskList.indexOf(existingTask), 1);
    console.log(taskList);
    deleteTaskFromScreen(existingTask);
    updateTaskCounter();
  });

  deleteOptionLabel.appendChild(deleteOptionSpan);
  optionsContainer.appendChild(deleteOptionLabel);
}

function deleteTaskFromScreen(existingTask) {
  const taskContainer = document.getElementById(
    existingTask.taskName + "-task-container"
  );
  taskContainer.remove();
}

function updateTaskCounter() {
  const counterSpan = document.getElementById("counter-span");
  let pendingTasks = 0;

  for (i in taskList) {
    if (!taskList[i].isTaskCompleted) {
      pendingTasks++;
    }
  }

  counterSpan.innerHTML = pendingTasks;
}

function sortElementsOnScreen() {
  const divTaskContainerList = [];

  taskList.sort((a, b) => {
    return a.taskPriority - b.taskPriority;
  });

  console.log("Sorted Task List - ", taskList);

  for (i in taskList) {
    divTaskContainerList.push(
      document.getElementById(taskList[i].taskName + "-task-container")
    );
  }

  console.log("Sorted Div List - ", divTaskContainerList);

  const taskListContainer = document.getElementById("task-list-container");

  const taskListContainerChildren = Array.from(taskListContainer.childNodes);

  for (i in taskListContainerChildren) {
    console.log("removing - ", taskListContainerChildren[i]);
    taskListContainerChildren[i].remove();
  }

  for (let i = divTaskContainerList.length - 1; i >= 0; i--) {
    console.log("appending - ", divTaskContainerList[i]);
    taskListContainer.appendChild(divTaskContainerList[i]);
  }
}

function ifInputEmpty(newTask) {
  if (newTask.taskName == "") {
    return true;
  }
  return false;
}
