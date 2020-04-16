'use strict';

$(document).ready(function () {
    $('.open__form').on('click', function () {
        generateForm();

        interactWithForm();

        hideFormWhenСlicked();
    })

})

/**
 * Генерация формы
 */
function generateForm () {
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
}


/**
 * Взаимодействие с формой (затемнение остального экрана, вызов валидации, нажатие на затемненную область)
 */
function interactWithForm () {
    $('.shadow').css('display', 'block');
    $('.submit__form').on('click', validateForm);
    $('.close__window').on('click', closeForm);
}

/**
 * Закрытие окна с формой при клике на затемненную область
 */
function hideFormWhenСlicked () {
    $('.shadow').on('click', function (e) {
        if (e.target == $('.shadow')[0]) {
            closeForm();
        }
    })
}

/**
 * Валидация формы
 */
function validateForm () {
    event.preventDefault();
    event.preventDefault();
    let firstName = $('#input1').val();
    let pr1 = /^\W+$/.test(firstName);
    let number = $('#input2').val();
    let pr2 = /^(\+7)(\d{3})(\d{3})(\d{4})$/.test(number);
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

    if (pr1 && pr2 && ($('#input3').val().length > 10) && $("#checkbox").prop("checked")) {
        generateAnswer();
        closeFormAfterAnswer();
    }
}

/**
 * Генерация ответного сообщения после пройденной валидации
 */
function generateAnswer() {
    $('.shadow').css('display', 'block');
    $('.surface__container').remove();
    let headerClass = $('.header__class'); 
    let answerBlock = $('<div></div>', {
        class: 'answer__block'
    });

    let answerText = $('<p class="answer__text">Ваша заявтка будет оформлена в ближайшее время <br>Ожидайте ответа</p>');
    answerText.appendTo(answerBlock);
    answerBlock.appendTo(headerClass);
}

/**
 * Закрытие формы (удаление темного фона и удаление сгенерированного блока с формой)
 */
function closeForm () {
    $('.shadow').css('display', 'none');
    $('.surface__container').remove();
}


/**
 * Закрытие ответного сообщения после пройденной валидации
 */
function closeFormAfterAnswer () {
    setTimeout(() => {
        $('.shadow').css('display', 'none');
        $('.answer__block').remove();
    }, 2500);
}