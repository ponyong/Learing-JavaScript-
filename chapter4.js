/*  주사위 게임 */
/*
function rand(m,n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

function randFace() {
    return ["crown", "anchor",  "heart" , "spade", "club", "diamond"]
        [rand(0,5)];
}

let funds = 50;
let round = 0;

while (funds > 1 && funds < 100) {
    round++;

    console.log(`round ${round}:`);
    console.log(`\tstarting funds: ${funds}p`);

    //돈을 겁니다.
    let bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0 , diamond: 0};
    let totalBet = rand(1, funds);
    if(totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet;
    }
    else {
        //판돈을 나눕니다.
        let remaining = totalBet;
        do {
            let bet = rand(1,remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining - bet;
        }while (remaining > 0)
    }
    funds = funds - totalBet;
    console.log('tbets: ' + Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') + `(total: ${totalBet} pence)`);

// 주사위를 굴립니다.

const hand = [];
for ( let roll = 0; roll < 3; roll++) {
    hand.push(randFace());
}

console.log(`\thand: ${hand.join(', ')}`);

// 딴돈을 가져옵니다.
let winnings = 0;

    for(let die = 0; die < hand.length; die++) {
        let face = hand[die];
        if(bets[face] > 0) {
            winnings = winnings + bets[face];
        } 
    }

    funds =funds + winnings;
    console.log(`\twinnings: ${winnings}`);
}

console.log(`\tending funds: ${funds}`);
*/

// JS 의 제어문 

/* while 문 */
while (ture) {
    //  run this area
}

/* if else 문 */
if ( ture ) {
    // run area
}
else {
    // false
    // run this area
}

/* do while 문 */
do {
    // 1 time run this,
    // if while condition true run this area
} while ( true )

/* switch 문 */

switch(expression) {
    case value1:
        break;
    case value2:
        break;
    case value3:
        break;
    //....
    default: // if all case fail run this area
} 