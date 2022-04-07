var form = document.querySelector('form');
var cardBefore = document.querySelector('.card__before');
var cardAfter = document.querySelector('.card__after');
var rateText = document.getElementById('rateText');
var userRating;
var numRating;
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var elements = e.target.elements;
    for (var element = 0; element < elements.length - 1; element++) {
        if ((elements[element]['checked'])) {
            userRating = elements[element]['id'];
            console.log(userRating);
        }
    }
    switch (userRating) {
        case 'myRadio1':
            numRating = 1;
            break;
        case 'myRadio2':
            numRating = 2;
            break;
        case 'myRadio3':
            numRating = 3;
            break;
        case 'myRadio4':
            numRating = 4;
            break;
        case 'myRadio5':
            numRating = 5;
            break;
        default:
            alert('you must choose 1 of the options');
    }
    if (userRating.length > 0) {
        cardBefore.classList.add('hidden');
        cardAfter.classList.remove('hidden');
        rateText.innerHTML = "You selected " + numRating + " out of 5";
    }
});
