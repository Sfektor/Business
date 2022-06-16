$(function () {

	let filter = $("[data-filter]");

	filter.on("click", function (event) {
			event.preventDefault();
			let cat = $(this).data('filter');

			if (cat == 'all') {
				$("[data-cat]").removeClass("hide");
			} else {
				$("[data-cat]").each(function() {
				let workCat = $(this).data('cat');

				if (workCat != cat) {
					$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
				}
			});
		}
	});
});

const list = document.querySelectorAll('.items-menu__item')
list.forEach(item => {
	item.addEventListener('click', (e) => {
		list.forEach(el => { el.classList.remove('blue'); });
		item.classList.add('blue')
	})
})


document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

	const button = document.querySelector('.menu-header__icon') // находим кнопку для открытия/закрытия окна навигации
	const nav = document.querySelector('.menu-header__menu') // находим окно навигации
	const main = document.querySelector('.main')

	button.addEventListener('click', () => { // при клике на кнопку
		nav.classList.toggle('on') // открываем/закрываем окно навигации, добаляя/удаляя активный класс
		button.classList.toggle('active') // добаляем/удаляем активный класс кнопке
		main.classList.toggle('block')
	})
});

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();