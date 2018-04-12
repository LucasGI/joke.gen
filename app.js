$(document).ready(function () {
    $.ajax({
        url: 'https://icanhazdadjoke.com/',
        method: 'GET',
        dataType: 'JSON'
    }).done( function(res) {
        $('#jokeDisplay').text(res.joke)
    }).fail( function(error) {
        alert(error.responseJSON.errors)
    })
    $('#nextJoke').on('click', function () {
        $.ajax({
            url: 'https://icanhazdadjoke.com/',
            method: 'GET',
            dataType: 'JSON'
        }).done( function(res) {
            $('#jokeDisplay').text(res.joke)
        }).fail( function(error) {
            alert(error.responseJSON.errors)
        })
    })
})