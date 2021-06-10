let task = {
	"started": false,
	"completed": false,
	"title": "Todo"
};

const checkBoxStart = document.querySelector("#startboks");
const checkBoxDone = document.querySelector("#ferdigboks");

// set start values for task
if(localStorage.getItem("started") != null) task.started = localStorage.getItem("started") === "true";
if(localStorage.getItem("completed") != null) task.completed = localStorage.getItem("completed") === "true";

if(task.started == true) checkBoxStart.style.background = "#4B6274";
if(task.completed == true) checkBoxDone.style.background = "#4B6274";


checkBoxStart.addEventListener("click", (event) => {
	if(task.started == false){
		task.started = true;
		checkBoxStart.style.background = "#4B6274";
	} else {
		task.started = false;
		checkBoxStart.style.background = "#79AEB2";
		checkBoxDone.style.background = "#79AEB2";
	}
	localStorage.setItem("started", task.started);
});


checkBoxDone.addEventListener("click", (event) => {
	if(task.completed == false){
		task.started = true;
		task.completed = true;
		checkBoxDone.style.background = "#4B6274";
		checkBoxStart.style.background = "#4B6274";
	} else {
		task.completed = false;
		checkBoxDone.style.background = "#79AEB2";

	}
	localStorage.setItem("started", task.started);
	localStorage.setItem("completed", task.completed);
});

// save todo label
const todoLabelElm = document.querySelector("#gjøremål");
const saveTodoBtn = document.querySelector("#gjøremålknapp");

saveTodoBtn.addEventListener("click", (event) => {
	let label = todoLabelElm.textContent;
	localStorage.setItem("label", label);
});


let localLabel = localStorage.getItem("label");
if(localLabel != null) todoLabelElm.textContent = localLabel;
