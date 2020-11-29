document.addEventListener('DOMContentLoaded', () => {
    const cArray = [
        //card image relative
        //card1
        {
            name: 'Exusiai',
            img: 'image/Exusiai.png'
        },
        {
            name: 'Exusiai',
            img: 'image/Exusiai.png'
        },
        //card2
        {
            name: 'Hellagur',
            img: 'image/Hellagur.png'
        },
        {
            name: 'Hellagur',
            img: 'image/Hellagur.png'
        },
        //card3
        {
            name: 'Mudrock',
            img: 'image/Mudrock.png'
        },
        {
            name: 'Mudrock',
            img: 'image/Mudrock.png'
        },
        //card4
        {
            name: 'Platinum',
            img: 'image/Platinum.png'
        },
        {
            name: 'Platinum',
            img: 'image/Platinum.png'
        },
        //card5
        {
            name: 'Red',
            img: 'image/Red.png'
        },
        {
            name: 'Red',
            img: 'image/Red.png'
        },
        //card6
        {
            name: 'SilverAsh',
            img: 'image/SilverAsh.png'
        },
        {
            name: 'SilverAsh',
            img: 'image/SilverAsh.png'
        },
        //card7
        {
            name: 'Texas',
            img: 'image/Texas.png'
        },
        {
            name: 'Texas',
            img: 'image/Texas.png'
        },
        //card8
        {
            name: 'Thorns',
            img: 'image/Thorns.png'
        },
        {
            name: 'Thorns',
            img: 'image/Thorns.png'
        }
    ]

 cArray.sort(() => 0.5 - Math.random());

 const grid = document.querySelector('.grid');
 const result = document.querySelector('#score');
 const won = document.querySelector('.CheckWon');
 won.style.display = 'none';

 var chosen = [];
 var chosenID = [];
 var Won = [];

 //create board
    function board() {
        for(let i = 0; i< cArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'image/Click.png');
            card.setAttribute('id', i);
            card.addEventListener('click', flip);
            grid.appendChild(card);
        }
    }

    //check it is match or not
    function check() {
        var cards = document.querySelectorAll('img');
        const optOne = chosenID [0]
        const optTwo = chosenID [1]
        if (chosen [0] === chosen[1])
        {
            alert('You got it!');
            cards[optOne].setAttribute('src', 'image/black.png');
            cards[optTwo].setAttribute('src', 'image/black.png');
            Won.push(chosen);
        }
        else
        {
            cards[optOne].setAttribute('src', 'image/Click.png');
            cards[optTwo].setAttribute('src', 'image/Click.png');
            alert('Oops, choose again');
        }
        chosen = [];
        chosenID = [];
        result.textContent = Won.length;
        if(Won.length === cArray.length/2)
        {
            alert('Congratulations! You got all of the cards!');
            result.textContent = 'Won!';
            won.style.display = "block"
        }
    }

    //flip the card
    function flip() {
        var cardID = this.getAttribute('id');
        chosen.push(cArray[cardID].name)
        chosenID.push(cardID);
        this.setAttribute('src', cArray[cardID].img);
        if (chosen.length === 2)
        {
            setTimeout(check, 300);
        }
    }




 //showing the board;
 board();







})