"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("task_list");
    const inputField = document.getElementById("task_input");
    const button = document.getElementById("add_button");

    button.addEventListener("click", function () {
        const taskText = inputField.value.trim();

        if (taskText) {
            addTask(taskText);
            inputField.value = '';
        } else {
            alert("Пожалуйста, введите текст задачи.");
        }
    });

    function addTask(taskText) {
        const listItem = document.createElement("li");

        const span = document.createElement("span");
        span.innerText = taskText;

        const editButton = document.createElement("button");
        editButton.innerText = "Редактировать";
        editButton.className = "edit_task";
        editButton.addEventListener("click", function () {
            editTask(listItem, span, editButton);
        });

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Удалить";
        deleteButton.className = "delete_task";
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(span);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
    }

    function editTask(listItem, span, editButton) {
        const currentTask = span.innerText;

        const editedInput = document.createElement("input");
        editedInput.type = "text";
        editButton.value = currentTask;
        editedInput.className = "edit_input";

        const cancelButton = document.createElement("button");
        cancelButton.innerText = "Отменить";
        cancelButton.className = "cancel_task";
        cancelButton.addEventListener("click", function () {
            span.innerText = currentTask;
            listItem.replaceChild(editButton, cancelButton);
            listItem.removeChild(saveButton);
            listItem.replaceChild(span, editedInput);
        });

        const saveButton = document.createElement("button");
        saveButton.innerText = "Сохранить";
        saveButton.className = "save_task";
        saveButton.addEventListener("click", function () {
            const newTaskText = editedInput.value.trim();

            if (newTaskText) {
                span.innerText = newTaskText;
                listItem.replaceChild(editButton, cancelButton);
                listItem.removeChild(saveButton);
                listItem.replaceChild(span, editedInput);
            } else {
                alert("Пожалуйста, введите текст задачи.");
            }
        });

        listItem.replaceChild(editedInput, span);
        listItem.replaceChild(cancelButton, editButton);
        listItem.appendChild(saveButton);
    }
})