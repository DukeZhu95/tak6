$(document).ready(function() {
    const images = [
        'images/icons8-butterfly-filled-100.png',
        'images/icons8-chicken-filled-100.png',
        'images/icons8-crab-filled-100.png',
        'images/icons8-dog-filled-100.png',
        'images/icons8-dolphin-filled-100.png',
        'images/icons8-dove-filled-100.png',
        'images/icons8-elephant-filled-100.png',
        'images/icons8-horse-filled-100.png'
    ];

    let cards = [...images, ...images]; // Duplicate the array for pairs

    // Fisher-Yates Shuffle
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }

        return array;
    }

    shuffle(cards);

    for(let i = 0; i < 4; i++) {
        let row = $('<tr></tr>');
        for(let j = 0; j < 4; j++) {
            let cell = $('<td></td>');
            let card = $('<img>')
                .attr('src', cards[i*4 + j])
                .addClass('card');
            cell.append(card);
            row.append(cell);
        }
        $('#game table').append(row);
    }

    let flippedCards = [];

    $('img.card').on('click', function() {
        if (flippedCards.length < 2 && !$(this).hasClass('flipped')) {
            $(this).addClass('flipped');
            flippedCards.push(this);
        }
    });

    $('#continue').on('click', function() {
        if (flippedCards.length === 2) {
            if (flippedCards[0].src === flippedCards[1].src) {
                // Cards match
                $(flippedCards[0]).off('click').hide();
                $(flippedCards[1]).off('click').hide();
            } else {
                // Turn them face down
                $(flippedCards[0]).removeClass('flipped');
                $(flippedCards[1]).removeClass('flipped');
            }
            flippedCards = [];
        }
    });
});
