// Characters

const mrGreen = {

    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur",
}


const drOrchid = {
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist",
}

const profPlum = {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionaire video game designer",
    age: 22,
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    occupation: "Designer",
}

const missScarlet = {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Actor",
};

const mrsPeacock = {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
}

const mrMustard = {
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    occupation: "Retired Football player",
}

// Weapons
const rope = {
    name: "rope",
    weight: 10
}

const knife = {
    name: "knife",
    weight: "8"
}

const candlestick = {
    name: "candlestick",
    weight: 2
}
const dumbbell = {
    name: "dumbbell",
    weight: 30
};
const poison = {
    name: "poison",
    weight: 2
};
const axe = {
    name: "axe",
    weight: 15

};
const bat = {
    ame: "bat",
    weight: 13
};
const trophy = {
    name: "trophy",
    weight: 25
};
const pistol = {
    name: "pistol",
    weight: 20
};


// Rooms
const diningRoom = {
    name: "Dining Room"
}
const conservatory = {
    name: "Conservatory"

}
const kitchen = {
    name: "Kitchen"

}
const study = {
    name: "Study"

}
const library = {
    name: "Library"

}
const billiardRoom = {
    name: "Billiard Room"

}
const lounge = {
    name: "Lounge"

}
const Ballroom = {
    name: "Ballroom"

}
const hall = {
    name: "Hall"

}
const spa = {
    name: "Spa",

}
const livingRoom = {
    name: "Living Room"

}
const observatory = {
    name: "Observatory"

}
const theater = {
    name: "Theater"

}
const guestHouse = {
    name: "Guest House"

}
const patio = {
    name: "Patio"

}




// Characters Collection
const charactersArray = [mrMustard, mrsPeacock, missScarlet, profPlum, drOrchid, mrGreen];

// Rooms Collection
const roomsArray = [patio, guestHouse, theater, observatory, livingRoom, spa, hall, ballRoom, lounge, billiardRoom, library, study, kitchen, conservatory, diningRoom];

// Weapons Collection
const weaponsArray = [pistol, tropyhy, bat, axe, poison, dumbbell, candlestick, knife, rope];


// randomSelector

function randomSelector(charactersArray) {
    let random = charactersArray[Math.floor(Math.random() * charactersArray.length)];
    return random;
}

// pickMistery

let myMysteryEnvelope = {}

function pickMistery() {

    myMysteryEnvelope.weapons = randomSelector(weaponsArray)
    myMysteryEnvelope.characters = randomSelector(charactersArray)
    myMysteryEnvelope.rooms = randomSelector(roomsArray)

}