$(document).ready(function() {
    const images = [
        '../images/icons8-butterfly-filled-100.png',
        '../images/icons8-chicken-filled-100.png',
        '../images/icons8-crab-filled-100.png',
        '../images/icons8-dog-filled-100.png',
        '../images/icons8-dolphin-filled-100.png',
        '../images/icons8-dove-filled-100.png',
        '../images/icons8-elephant-filled-100.png',
        '../images/icons8-horse-filled-100.png'
    ];

    // 创建一个包含所有图片两次的数组
    const allImages = images.concat(images);

    // 洗牌函数
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    let flippedCards = [];

    $('td').on('click', function() {
        const cardImage = $(this).find('img.card');
        if (flippedCards.length < 2 && !cardImage.hasClass('flipped')) {
            cardImage.show().addClass('flipped');
            flippedCards.push(cardImage);
        }

        if (flippedCards.length === 2) {
            setTimeout(function() {
                if (flippedCards[0].attr('src') !== flippedCards[1].attr('src')) {
                    flippedCards[0].hide().removeClass('flipped');
                    flippedCards[1].hide().removeClass('flipped');
                }
                flippedCards = [];
            }, 1000); // 1秒后检查是否匹配
        }
    });

    // 洗牌图片
    const shuffledImages = shuffle(allImages);

    // 将图片添加到表格中
    $('td').each(function(index) {
        $(this).html('<img src="../images/' + shuffledImages[index] + '" alt="animal image">');
    });
});
