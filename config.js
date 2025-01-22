const CONFIG = {
    titleWeb: "Gửi em",

    background: "background.jpg",

    min1: "in1.jpg",
    min2: "in2.jpg",
    min3: "in3.jpg",
    min4: "in4.jpg",
    min5: "in5.jpg",
    min6: "in6.jpg",

    max1: "out1.jpg",
    max2: "out2.jpg",
    max3: "out3.jpg",
    max4: "out4.jpg",
    max5: "out5.jpg",
    max6: "out6.jpg",
}
$(document).ready(function() {
    $('#titleWeb').text(CONFIG.titleWeb)
    $('body').css('background-image', 'url(./' + CONFIG.background + ')')

    for (let i = 1; i <= 6; i++)
        $('#min' + i).css('background-image', 'url(./' + CONFIG['min' + i] + ')')

    for (let i = 1; i <= 6; i++)
        $('#max' + i).css('background-image', 'url(./' + CONFIG['max' + i] + ')')
})
