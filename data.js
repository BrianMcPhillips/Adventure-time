const monsters = {
    id: 'monsters',
    title: 'A Dark Forest Filled With Monsters',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '../assets/Monsters.jpeg',
    description: `
        You are traveling through a magical land and you enter a dark forest, the forest is known 
        for being haunted and filled with mysterious creatures. You set up camp for the night and 
        hear a loud monster growling in the next row of trees. What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Use your wit to trick them',
        result: `
            Knowing that monsters are greedy you tell them there is a hidden treasure in the forest nearby,
            if they pay you 35 gold and let you go; you will give them the location to the treasure and 
            they will posess great riches for the rest of their existence.
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You pull out your sword and initiate a vicious attack, slashing and dodging like your life is about to end.
            You vanquish the foes in a matter of seconds and are the true victor. The bad news is you take 30 hp damage. 
            The good news is you find 50 gold on the dead monsters.
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'run',
        description: 'Run away like Forest Gump',
        result: `
            You get up and run leavig your entire campsite and all of your personal possesions behind. 
            You cannot run fast enough and lose 50hp during the escape.
        `,
        hp: -50,
        gold: 0
    }]
};

const dragon = {
    id: 'dragon',
    title: 'A Menacing Dragon',
    map: {
        top: '57%',
        left: '67%'
    },
    image: '../assets/Dragon.jpeg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        After your encounter in the dark forest, you travel to a nearby village you have heard is being
        being tormented by a legendary dragon who frequently flies down from his lair high in the mountains 
        to attack the town and steal its riches. You have heard the stories but have never seen a dragon and are doubtful of its existence.
        Once arriving to the town you stay at the local inn. Deep into the night you hear the loud screech of the dragon descending upon you. What course of action do you take?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village, it was a mistake coming here',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 35 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 35 hp damage. 
        `,
        hp: -35,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
        hp: 0,
        gold: 90
    }]
};

const treasure = {
    id: 'treasure',
    title: 'The Chests in the great halls of the Dwarfs',
    map: {
        top: '31%',
        left: '5%'
    },
    image: '../assets/Chests.jpeg',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
       As you enter the great halls of the dwarf caves, you come across a chamber 
       with three chests grandly displayed on the floor. Just as you walk to the chests you trigger a trap in the floor and the chamber starts to collapse.
       You only have time to open one chest, which one do you choose to open?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You\'re intuition that the gold would be hidden in the most unlikely place was correct! You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! You fell for the trap, the chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp, not quite what you were looking for but health is a fortune all in itself',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    monsters, 
    treasure,
    dragon
];

export default quests;