'use strict';
const TASK_COUNT = 3;

const createSiteMenuTemplate = () => {
  return (
    `<section class="control__btn-wrap">
      <input
        type="radio"
        name="control"
        id="control__new-task"
        class="control__input visually-hidden"
      />
      <label for="control__new-task" class="control__label control__label--new-task"
        >+ ADD NEW TASK</label
      >
      <input
        type="radio"
        name="control"
        id="control__task"
        class="control__input visually-hidden"
        checked
      />
      <label for="control__task" class="control__label">TASKS</label>
      <input
        type="radio"
        name="control"
        id="control__statistic"
        class="control__input visually-hidden"
      />
      <label for="control__statistic" class="control__label"
        >STATISTICS</label
      >
    </section>`
  );
};

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const createFilterTemplate = () => {
  return (
    `<section class="main__filter filter container">\n` +
    `        <input\n` +
    `          type="radio"\n` +
    `          id="filter__all"\n` +
    `          class="filter__input visually-hidden"\n` +
    `          name="filter"\n` +
    `          checked\n` +
    `        />\n` +
    `        <label for="filter__all" class="filter__label">\n` +
    `          All <span class="filter__all-count">13</span></label\n` +
    `        >\n` +
    `        <input\n` +
    `          type="radio"\n` +
    `          id="filter__overdue"\n` +
    `          class="filter__input visually-hidden"\n` +
    `          name="filter"\n` +
    `          disabled\n` +
    `        />\n` +
    `        <label for="filter__overdue" class="filter__label"\n` +
    `          >Overdue <span class="filter__overdue-count">0</span></label\n` +
    `        >\n` +
    `        <input\n` +
    `          type="radio"\n` +
    `          id="filter__today"\n` +
    `          class="filter__input visually-hidden"\n` +
    `          name="filter"\n` +
    `          disabled\n` +
    `        />\n` +
    `        <label for="filter__today" class="filter__label"\n` +
    `          >Today <span class="filter__today-count">0</span></label\n` +
    `        >\n` +
    `        <input\n` +
    `          type="radio"\n` +
    `          id="filter__favorites"\n` +
    `          class="filter__input visually-hidden"\n` +
    `          name="filter"\n` +
    `        />\n` +
    `        <label for="filter__favorites" class="filter__label"\n` +
    `          >Favorites <span class="filter__favorites-count">1</span></label\n` +
    `        >\n` +
    `        <input\n` +
    `          type="radio"\n` +
    `          id="filter__repeating"\n` +
    `          class="filter__input visually-hidden"\n` +
    `          name="filter"\n` +
    `        />\n` +
    `        <label for="filter__repeating" class="filter__label"\n` +
    `          >Repeating <span class="filter__repeating-count">1</span></label\n` +
    `        >\n` +
    `        <input\n` +
    `          type="radio"\n` +
    `          id="filter__archive"\n` +
    `          class="filter__input visually-hidden"\n` +
    `          name="filter"\n` +
    `        />\n` +
    `        <label for="filter__archive" class="filter__label"\n` +
    `          >Archive <span class="filter__archive-count">115</span></label\n` +
    `        >\n` +
    `      </section>`
  );
};

const createBoardTemplate = () => {
  return (
    `<section class="board container">\n` +
    `<div class="board__tasks"></div>\n` +
    `      </section>`
  );
};

const createSortingTemplate = () => {
  return (
    `<div class="board__filter-list">\n` +
    `          <a href="#" class="board__filter" data-sort-type="default">SORT BY DEFAULT</a>\n` +
    `          <a href="#" class="board__filter" data-sort-type="date-up">SORT BY DATE up</a>\n` +
    `          <a href="#" class="board__filter" data-sort-type="date-down">SORT BY DATE down</a>\n` +
    `        </div>`
  );
};

const createTaskAddTemplate = () => {
  return (
    `<article class="card card--edit card--black">\n` +
    `            <form class="card__form" method="get">\n` +
    `              <div class="card__inner">\n` +
    `                <div class="card__color-bar">\n` +
    `                  <svg width="100%" height="10">\n` +
    `                    <use xlink:href="#wave"></use>\n` +
    `                  </svg>\n` +
    `                </div>\n` +
    `\n` +
    `                <div class="card__textarea-wrap">\n` +
    `                  <label>\n` +
    `                    <textarea\n` +
    `                      class="card__text"\n` +
    `                      placeholder="Start typing your text here..."\n` +
    `                      name="text"\n` +
    `                    >This is example of new task, you can set date and time.</textarea>\n` +
    `                  </label>\n` +
    `                </div>\n` +
    `\n` +
    `                <div class="card__settings">\n` +
    `                  <div class="card__details">\n` +
    `                    <div class="card__dates">\n` +
    `                      <button class="card__date-deadline-toggle" type="button">\n` +
    `                        date: <span class="card__date-status">no</span>\n` +
    `                      </button>\n` +
    `\n` +
    `                      <fieldset class="card__date-deadline" disabled>\n` +
    `                        <label class="card__input-deadline-wrap">\n` +
    `                          <input\n` +
    `                            class="card__date"\n` +
    `                            type="text"\n` +
    `                            placeholder="23 September"\n` +
    `                            name="date"\n` +
    `                          />\n` +
    `                        </label>\n` +
    `                      </fieldset>\n` +
    `\n` +
    `                      <button class="card__repeat-toggle" type="button">\n` +
    `                        repeat:<span class="card__repeat-status">no</span>\n` +
    `                      </button>\n` +
    `\n` +
    `                      <fieldset class="card__repeat-days" disabled>\n` +
    `                        <div class="card__repeat-days-inner">\n` +
    `                          <input\n` +
    `                            class="visually-hidden card__repeat-day-input"\n` +
    `                            type="checkbox"\n` +
    `                            id="repeat-mo-1"\n` +
    `                            name="repeat"\n` +
    `                            value="mo"\n` +
    `                          />\n` +
    `                          <label class="card__repeat-day" for="repeat-mo-1"\n` +
    `                            >mo</label\n` +
    `                          >\n` +
    `                          <input\n` +
    `                            class="visually-hidden card__repeat-day-input"\n` +
    `                            type="checkbox"\n` +
    `                            id="repeat-tu-1"\n` +
    `                            name="repeat"\n` +
    `                            value="tu"\n` +
    `                            checked\n` +
    `                          />\n` +
    `                          <label class="card__repeat-day" for="repeat-tu-1"\n` +
    `                            >tu</label\n` +
    `                          >\n` +
    `                          <input\n` +
    `                            class="visually-hidden card__repeat-day-input"\n` +
    `                            type="checkbox"\n` +
    `                            id="repeat-we-1"\n` +
    `                            name="repeat"\n` +
    `                            value="we"\n` +
    `                          />\n` +
    `                          <label class="card__repeat-day" for="repeat-we-1"\n` +
    `                            >we</label\n` +
    `                          >\n` +
    `                          <input\n` +
    `                            class="visually-hidden card__repeat-day-input"\n` +
    `                            type="checkbox"\n` +
    `                            id="repeat-th-1"\n` +
    `                            name="repeat"\n` +
    `                            value="th"\n` +
    `                          />\n` +
    `                          <label class="card__repeat-day" for="repeat-th-1"\n` +
    `                            >th</label\n` +
    `                          >\n` +
    `                          <input\n` +
    `                            class="visually-hidden card__repeat-day-input"\n` +
    `                            type="checkbox"\n` +
    `                            id="repeat-fr-1"\n` +
    `                            name="repeat"\n` +
    `                            value="fr"\n` +
    `                            checked\n` +
    `                          />\n` +
    `                          <label class="card__repeat-day" for="repeat-fr-1"\n` +
    `                            >fr</label\n` +
    `                          >\n` +
    `                          <input\n` +
    `                            class="visually-hidden card__repeat-day-input"\n` +
    `                            type="checkbox"\n` +
    `                            name="repeat"\n` +
    `                            value="sa"\n` +
    `                            id="repeat-sa-1"\n` +
    `                          />\n` +
    `                          <label class="card__repeat-day" for="repeat-sa-1"\n` +
    `                            >sa</label\n` +
    `                          >\n` +
    `                          <input\n` +
    `                            class="visually-hidden card__repeat-day-input"\n` +
    `                            type="checkbox"\n` +
    `                            id="repeat-su-1"\n` +
    `                            name="repeat"\n` +
    `                            value="su"\n` +
    `                            checked\n` +
    `                          />\n` +
    `                          <label class="card__repeat-day" for="repeat-su-1"\n` +
    `                            >su</label\n` +
    `                          >\n` +
    `                        </div>\n` +
    `                      </fieldset>\n` +
    `                    </div>\n` +
    `                  </div>\n` +
    `\n` +
    `                  <div class="card__colors-inner">\n` +
    `                    <h3 class="card__colors-title">Color</h3>\n` +
    `                    <div class="card__colors-wrap">\n` +
    `                      <input\n` +
    `                        type="radio"\n` +
    `                        id="color-black-1"\n` +
    `                        class="card__color-input card__color-input--black visually-hidden"\n` +
    `                        name="color"\n` +
    `                        value="black"\n` +
    `                        checked\n` +
    `                      />\n` +
    `                      <label\n` +
    `                        for="color-black-1"\n` +
    `                        class="card__color card__color--black"\n` +
    `                        >black</label\n` +
    `                      >\n` +
    `                      <input\n` +
    `                        type="radio"\n` +
    `                        id="color-yellow-1"\n` +
    `                        class="card__color-input card__color-input--yellow visually-hidden"\n` +
    `                        name="color"\n` +
    `                        value="yellow"\n` +
    `                      />\n` +
    `                      <label\n` +
    `                        for="color-yellow-1"\n` +
    `                        class="card__color card__color--yellow"\n` +
    `                        >yellow</label\n` +
    `                      >\n` +
    `                      <input\n` +
    `                        type="radio"\n` +
    `                        id="color-blue-1"\n` +
    `                        class="card__color-input card__color-input--blue visually-hidden"\n` +
    `                        name="color"\n` +
    `                        value="blue"\n` +
    `                      />\n` +
    `                      <label\n` +
    `                        for="color-blue-1"\n` +
    `                        class="card__color card__color--blue"\n` +
    `                        >blue</label\n` +
    `                      >\n` +
    `                      <input\n` +
    `                        type="radio"\n` +
    `                        id="color-green-1"\n` +
    `                        class="card__color-input card__color-input--green visually-hidden"\n` +
    `                        name="color"\n` +
    `                        value="green"\n` +
    `                      />\n` +
    `                      <label\n` +
    `                        for="color-green-1"\n` +
    `                        class="card__color card__color--green"\n` +
    `                        >green</label\n` +
    `                      >\n` +
    `                      <input\n` +
    `                        type="radio"\n` +
    `                        id="color-pink-1"\n` +
    `                        class="card__color-input card__color-input--pink visually-hidden"\n` +
    `                        name="color"\n` +
    `                        value="pink"\n` +
    `                      />\n` +
    `                      <label\n` +
    `                        for="color-pink-1"\n` +
    `                        class="card__color card__color--pink"\n` +
    `                        >pink</label\n` +
    `                      >\n` +
    `                    </div>\n` +
    `                  </div>\n` +
    `                </div>\n` +
    `\n` +
    `                <div class="card__status-btns">\n` +
    `                  <button class="card__save" type="submit">save</button>\n` +
    `                  <button class="card__delete" type="button">delete</button>\n` +
    `                </div>\n` +
    `              </div>\n` +
    `            </form>\n` +
    `          </article>`
  );
};

const createTaskTemplate = () => {
  return (
    `<article class="card card--yellow">
            <div class="card__form">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">
                    edit
                  </button>
                  <button type="button" class="card__btn card__btn--archive">
                    archive
                  </button>
                  <button
                    type="button"
                    class="card__btn card__btn--favorites card__btn--disabled"
                  >
                    favorites
                  </button>
                </div>

                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <p class="card__text">Example task with custom color and without date.</p>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                  </div>
                </div>
              </div>
            </div>
          </article>`
  );
};

const createButtonLoadMoreTemplate = () => {
  return (
    `<button class="load-more" type="button">load more</button>`
  );
};

const siteMainElement = document.querySelector(`main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

render(boardElement, createSortingTemplate(), `afterbegin`);

render(taskListElement, createTaskAddTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(), `beforeend`);
}

render(boardElement, createButtonLoadMoreTemplate(), `beforeend`);
