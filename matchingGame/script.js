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

    $('.card-back').css('background-image', 'url(Tigger.png)');
    console.log("Background image set!");

    $('td').each(function(index) {
        $(this).html('<div class="card-container"><img class="card" src="' + shuffledImages[index] + '" alt="animal image"><div class="card-back"></div></div>');
    }).on('click', function() {
        console.log("Card clicked!");
        const card = $(this).find('.card');
        if (flippedCards.length < 2 && !card.hasClass('flipped')) {
            card.addClass('flipped');
            flippedCards.push(card);
        }
    });

    $('#continue').on('click', function() {
        if (flippedCards.length !== 2) return; // Ensure two cards are flipped

        const card1 = flippedCards[0];
        const card2 = flippedCards[1];

        if (card1.attr('src') === card2.attr('src')) {
            // If the cards match, hide them
            card1.parent().hide();
            card2.parent().hide();
        } else {
            // If the cards don't match, flip them back
            card1.removeClass('flipped');
            card2.removeClass('flipped');
        }

        // Reset the flippedCards array
        flippedCards = [];
    });
});
