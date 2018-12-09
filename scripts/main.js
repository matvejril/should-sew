var validation = require('./validation');
var HeaderNavBar = require('./headerNavBar');
var OurAdvantagesSlider = require('./ourAdvantagesSlider');
var OurClientsSlider = require('./ourClientsSlider');

window.addEventListener('load', function() {

    // Навбар шапки
    new HeaderNavBar();

    // Валидация форм
    validation();

    // Слайдеры
    new OurAdvantagesSlider();
    new OurClientsSlider();
});
