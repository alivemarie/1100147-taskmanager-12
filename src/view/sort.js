export const createSortingTemplate = () => {
  return (
    `<div class="board__filter-list">\n` +
    `          <a href="#" class="board__filter" data-sort-type="default">SORT BY DEFAULT</a>\n` +
    `          <a href="#" class="board__filter" data-sort-type="date-up">SORT BY DATE up</a>\n` +
    `          <a href="#" class="board__filter" data-sort-type="date-down">SORT BY DATE down</a>\n` +
    `        </div>`
  );
};
