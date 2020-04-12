'use strict';

$(document).ready(function () {
    $('.open__form').on('click', function () {
        let headerClass = $('.header__class');
        let feedbackContainer = $('<div></div>', {
            class: 'surface__container'
        });

        let closeDivButton = $('<div class="close__window"><i class="fas fa-times"></i></div>');

        let headerDescription = $('<p class="surface__header">Оставить заявку</p>');
        let mainForm = $('<form action="#" id ="main-form">' + 
            '<label for="input1">Имя:</label>' +
            '<input type="text" id="input1" placeholder="Ваше имя"></<label>' +
            '<p class="warning1"> Ваше имя не должно превышать 20 символов, должно быть написано на латинице</p>' +
            '<label for="input2">Телефон:</label>' +
            '<input type="text" id="input2" placeholder="Телефон">' +
            '<p class="warning2">Ваш номер должен быть в формате +70000000000</p>' + 
            '<label for="input3">Комментарии:</label>' +
            '<textarea id="input3" placeholder="Комментарии" rows="3"></textarea>' +
            '<p class="warning3">Комментарий должен быть от 10 букв</p>' +
            '<p class="agreement">Я согласен с обработкой персональных данных</p>' + 
            '<div><input type="checkbox" name="option1" id="checkbox">' +
            '<label for="checkbox" id="label">Да</label>' +
            '<p class="warning4">Обязательное поле</p></div>' +
            '<button type="submit" class="form__button buttons submit__form">Отправить</button>' +
        '</form>');

        closeDivButton.appendTo(feedbackContainer);
        headerDescription.appendTo(feedbackContainer);
        mainForm.appendTo(feedbackContainer);
        feedbackContainer.appendTo(headerClass);

        $('.close__window').on('click', function() {
            $('.surface__container').remove();
        });

        $('.submit__form').on('click', funcExp);
    })

})

let funcExp = function () {
    event.preventDefault();
    let firstName = $('#input1').val();
    let pr1 = /^\W+$/.test(firstName);

    let number = $('#input2').val();
    let pr2 = /^(\+7)(\d{3})(\d{3})(\d{4})/.test(number);

    if (pr1 === false || firstName.length > 15) {
        $('.warning1').css('display', 'inline-block').effect('bounce');
    } else {
        $('.warning1').css('display', 'none');
    }

    if (pr2 === false) {
        $('.warning2').css('display', 'inline-block').effect('bounce');
    } else {
        $('.warning2').css('display', 'none');
    }

    if ($('#input3').val().length < 10) {
        $('.warning3').css('display', 'inline-block').effect('bounce');
    } else {
        $('.warning3').css('display', 'none');
    }

    if (!$("#checkbox").prop("checked")) {
        $('.warning4').css('display', 'inline-block');
    } else {
        $('.warning4').css('display', 'none');
    }
}