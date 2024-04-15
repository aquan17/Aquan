function fadeIn() {
    var text = $('.content').text().replace(/^\s+|\s+$/g, '');
    var length = text.length;
    var i = 0;
    var txt;
    var html = [];
    var sp = 4;
    for (; i < length; i += sp) {
        txt = text.substring(i, i + sp);
        html.push('<span class="c animated">' + txt + '</span>');
    }
    $('.content').removeClass('c').html(html.join(''));

    for (i = 0, length = html.length; i < length; i++) {
        !function(i) {
            setTimeout(function() {
                $('.content').find('.animated').eq(i).addClass('fadeIn');
            }, i * 400);
        }(i);
    }
}
function playMusic() {
    

    var sound = new Howl({
        src: ['ssstik.io_1712586792929.mp3'], // Thay urls thành src
        loop: true
    });
    sound.play(); // Phát âm nhạc

    // Bắt sự kiện khi âm nhạc kết thúc
    sound.on('end', function() {
        // Lặp lại hiệu ứng chữ và âm nhạc khi âm nhạc kết thúc
        setTimeout(function() {
            fadeIn(); // Hiển thị chữ lại

        }, 2700); // Thời gian độ trễ (ở đây là 1 giây)
    });
}

document.querySelector(".content").onclick = () => {
    document.querySelector("#heart").hidden = false;
    document.querySelector("body").style.backgroundColor = "#542246";
    setTimeout(function() {
        fadeIn(); // Hiển thị chữ sau độ trễ
    }, 2700); // Thời gian độ trễ tính bằng mili-giây (ở đây là 1 giây)
    var sound = new Howl({
        src: ['ssstik.io_1712586792929.mp3'], // Thay urls thành src
        loop: true
    });
    sound.play(); // Phát âm nhạc
    playMusic(); // Bắt đầu hiệu ứng chữ và âm nhạc khi click
};
