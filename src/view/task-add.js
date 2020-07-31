export const createTaskAddTemplate = () => {
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
