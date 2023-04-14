$(function () {
  // Находим компонент пагинации и все его ссылки
  var pagination = $(".pagination");
  var links = pagination.find(".page-link");

  // Определяем текущую страницу
  var currentPage = parseInt(pagination.data("current-page"));

  // Добавляем обработчик событий для всех ссылок пагинации
  links.on("click", function (e) {
    e.preventDefault();

    // Определяем выбранную страницу
    var selectedPage = parseInt($(this).text());

    // Обновляем текущую страницу и подсвечиваем ссылку
    currentPage = selectedPage;
    links.removeClass("active");
    $(this).addClass("active");

    // Обновляем содержимое страницы
    updatePageContent();
  });

  // Функция для обновления содержимого страницы
  function updatePageContent() {
    // Ваш код для обновления содержимого страницы здесь
    console.log("Текущая страница: " + currentPage);
  }
});
