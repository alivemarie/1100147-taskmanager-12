import {createSiteMenuTemplate} from "./view/site-menu.js";
import {createFilterTemplate} from "./view/filter.js";
import {createBoardTemplate} from "./view/board.js";
import {createSortingTemplate} from "./view/sort.js";
import {createTaskEditTemplate} from "./view/task-edit.js";
import {createTaskTemplate} from "./view/task.js";
import {createButtonLoadMoreTemplate} from "./view/load-more-button";
import {generateTask} from "./mock/task";

const TASK_COUNT = 4;
const tasks = new Array(TASK_COUNT).fill().map(generateTask);
const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate());
render(siteMainElement, createBoardTemplate());

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

render(boardElement, createSortingTemplate(), `afterbegin`);

render(taskListElement, createTaskEditTemplate(tasks[0]));

for (let i = 1; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(tasks[i]));
}

render(boardElement, createButtonLoadMoreTemplate());
