export const createFilterTemplate = () => {
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
