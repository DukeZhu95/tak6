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

    const allImages = images.concat(images);

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    const shuffledImages = shuffle(allImages);

    let flippedCards = [];

    $('td').each(function(index) {
        $(this).html('<img src="' + shuffledImages[index] + '" alt="animal image">');
    }).on('click', function() {
        const cardImage = $(this).find('img.card');
        if (flippedCards.length < 2 && !cardImage.hasClass('flipped')) {
            cardImage.show().addClass('flipped');
            flippedCards.push(cardImage);
        }

        if (flippedCards.length === 2) {
            setTimeout(function() {
                if (flippedCards.length !== 2) return;

                if (flippedCards[0].attr('src') !== flippedCards[1].attr('src')) {
                    flippedCards[0].hide().removeClass('flipped');
                    flippedCards[1].hide().removeClass('flipped');
                }
                flippedCards = [];
            }, 1000);
        }

    });
});
