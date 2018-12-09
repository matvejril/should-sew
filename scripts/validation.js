function validation() {
    // Маскки (maskedinput)
    $("input[type='tel']").mask("+7 (999) 999-99-99");

    // Валидация (validate)
    $.validator.addMethod("requiredphone", function (value, element) {
        return value.replace(/\D+/g, '').length > 10;
    });
    $("form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                requiredphone: true
            },
            offer: {
                minlength: 5,
                required: true
            }
        },
        errorPlacement: function(error, element){}
    });
}

module.exports = validation;
