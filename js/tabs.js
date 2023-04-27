const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElems = document.querySelectorAll('[data-tabs-field]')
const tabsTitleElems = document.querySelectorAll('.design__title')


for(let btn of tabsHandlerElems) {
  btn.addEventListener('click', () => {
    tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'))
    btn.classList.add('design-list__item_active')

    // Если дата-атрибуты контента совпадают с дата-атрибутами выбранного элемента - btn:
    tabsContentElems.forEach(content => {
      if(content.dataset.tabsField === btn.dataset.tabsHandler) {
        content.classList.remove('hidden')
      } else {
        content.classList.add('hidden')
      }
    })

    tabsTitleElems.forEach(title => {
      if(title.dataset.tabsField === btn.dataset.tabsHandler) {
        title.classList.remove('hidden')
      } else {
        title.classList.add('hidden')
      }
    })
  })
}

// Вытаскивает все элементы с data-tabs-field, в том числе и заголовки.
// Перебирает эти элементы и добавляет/убирает hidden !!!!

// const dataTabsHandler = document.querySelectorAll("[data-tabs-handler]");
// const dataTabsField = document.querySelectorAll("[data-tabs-field]");
// const designTitle = document.querySelectorAll(".design__title");

// for (let btn of dataTabsHandler) {
//   btn.addEventListener("click", () => {
//     dataTabsHandler.forEach((item) => {
//       item.classList.remove("design-list__item_active");
//     });
//     btn.classList.add("design-list__item_active");

//     dataTabsField.forEach((el) => {
//       if (el.dataset.tabsField === btn.dataset.tabsHandler) {
//         el.classList.remove("hidden");
//       } else {
//         el.classList.add("hidden");
//       }
//     });
//   });
// }