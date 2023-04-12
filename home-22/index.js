'use strict'

const input = '<p><input  name="input" type="text"> <button class="btn btn-info" type="submit">Добавити</button></p>'

$('form').append(input).on('submit', function(e) {
    e.preventDefault();
    let inputValue = $('input[name="input"]').val();
    $('div').append('<p class = "input-text list-group-item">' + inputValue + '</p>');
    $('input[name="input"]').val('');
});

$('div').on('click', 'p', removeElement);

function removeElement() {
  $(this).hide(300, function() {
    $(this).remove();
  });
};
