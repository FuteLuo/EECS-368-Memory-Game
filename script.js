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
 const WL = document.querySelector('.CheckWonLose');
 const timeleftDisplay = document.querySelector('#time-left');

 timeLeft = 60;

 const play = document.querySelector('.playgame');
 const menu = document.getElementById('Menustatus');
 const time = document.getElementById('Time');

 play.style.display = 'none';
 WL.style.display = 'none';

 var chosen = [];
 var chosenID = [];
 var Won = [];
 //Help Menu
 document.querySelector('#Help').addEventListener('click', function() {
    alert('The player chooses a card, then selects another card and turns it over. If the two cards are a matching pair for example two Red then both card been fliped and Choose another card. If you filp all cards correctly, you win. If times out, you lose');
})

 //Start the Game
 document.querySelector('#StartGame').addEventListener('click', function(){
    play.style.display ='block';
    menu.style.display ='none'; 
    
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
    //Start the timer, check lose if times out
    function countDown()
    {
        setInterval(function(){
            if(timeLeft <= 0) {
                clearInterval(timeLeft = 0);
                alert("You Lose! Page will refresh after 5s when you click 'Confirm'");
                setTimeout(function () {
                    location.reload();
                }, 5000);
            }
            timeleftDisplay.innerHTML = timeLeft;
            timeLeft -=1
        }, 1000)
    }
    //check it is match or not
    function check() {
        var cards = document.querySelectorAll('img');
        const optOne = chosenID [0]
        const optTwo = chosenID [1]
        if (chosen [0] === chosen[1])
        {
            alert('You got it!');
            cards[optOne].setAttribute('src', 'image/Black.png');
            cards[optTwo].setAttribute('src', 'image/Black.png');
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
            WL.style.display = "block";
            time.style.display = "none";
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
 countDown();
 })







})