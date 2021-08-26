let string = "noodleMan, noodleMan, nooooooooodleMan."

$('#init').click(function () {
    $('#replaceOutput').text(string)
})

$('#change').click(function() {
    $('#replaceOutput').text(string.replaceAll('o', '0'))
})