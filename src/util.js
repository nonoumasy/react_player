import { v4 as uuidv4 } from 'uuid';
function chillHop() {
  return [
    {
      name: 'Just Like Honey',
      cover:
        'https://www.rhino.com/sites/rhino.com/files/styles/article_image/public/2018-07/081227993702.jpg?itok=BfHQJWQh',
      artist: 'Jesus Mary Chain',
      audio: 'https://ia803002.us.archive.org/30/items/Psychocandy/01JustLikeHoney.mp3',
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: true,
      lyrics: `
        Listen to the girl
        As she takes on half the world
        Moving up and so alive
        In her honey dripping beehive
        Beehive
        
      `
    },
    {
      name: 'Love Will Tear Us Apart',
      cover:
        'https://i.pinimg.com/originals/d4/7f/34/d47f34a612983fa65f98b5da356997ff.jpg',
      artist: 'Joy Division',
      audio: 'https://media.hungama.com/c/4/852/0b3/3435798/3435798_128.mp3?WZZMJGoDHcXczpVTTYxLfqnajHQ_lXRZ9GwddkYv9MOqk56tDzCwis2-Q27bfEomBRjf2BZK2nqFceLSss3Ec4fLnn9PuvYD1CuM3VrU5TTcfJYSVPsDsnWgRSXSilwVHo0',
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
      lyrics: `When routine bites hard and ambitions are low
        And resentment rides high but emotions won't grow
        And we're changing our ways, taking different roads
        Love, love will tear us apart again
        Love, love will tear us apart again`
    },
    {
      name: 'April Skies',
      cover:
        'https://www.rhino.com/sites/rhino.com/files/styles/square/public/products/darklands.jpg?itok=tUqWxuBP',
      artist: 'Jesus Mary Chain',
      audio: 'https://media.hungama.com/c/4/14a/7e0/3463076/3463076_128.mp3?_OvuQspIVs7Vwr3QyE_TIby5Qh11ViyILN8HbKx4WZZ8ZyRpQNW098pKKtdzxak0CTXLjXFCYFTlOXNt9HdVkQr-zxMplZbOV-0w7eIEz0cJfZOOpBGhRphrT405yjHDTWo',
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
      lyrics: `Hey honey what you trying to say
        As I stand here
        Don't you walk away
        And the world comes tumbling down`
    },
    {
      name: 'Running To Stand Still',
      cover:
        'https://www.shoppingtill.co.uk/media/catalog/product/B/0/B0041SMR1W1.jpg',
      artist: 'U2',
      audio: 'https://media.hungama.com/c/4/8ea/0e6/1461663/1461663_128.mp3?fQD-18N3xDXZT9t6F1gpVVCu9YytT7WikaFxDSSxeEcnWaU5kIt5bHnQvKXgT3qRcHX7xRzjeokDgoPoCHTD2Kp_aHSJk7rhMpYplUsDJiQ_gtu2ykg192dIKzSjakzuTtY',
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
      lyrics: `And so she woke up
        Woke up from where she was lyin' still
        Said I gotta do something
        About where we're goin'`
    },
    {
      name: 'Motorcrash',
      cover:
        'https://images-na.ssl-images-amazon.com/images/I/416MCPPJ7RL._AC_UL600_SR600,600_.jpg',
      artist: 'Sugarcubes',
      audio: 'https://media.hungama.com/c/4/602/122/24317158/24317158_128.mp3?u2PmwMsLkDzCJa3aXNHX38zuf8xG2qS42hYA2GGJhERQdrkK9KpoDjAS4Qwx4gAYRQ7hEh2uKPbQIVcA3EUsZO3IXVarAaN3BqgxRFIfiz1nWN55caGqWD6I3W_AGVrEObwBtQ',
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
      lyrics: `Riding on my bicycle i saw a motorcrash,
        A proper motorcrash and lots of spectators.
        I rushed to the centre saw the injured parents,
        Cuts on the children, an awful motorcrash.`
    },
    {
      name: 'Under the Milky Way',
      cover:
        'https://www.popsike.com/pix/20160519/351738513214.jpg',
      artist: 'The Church',
      audio: 'https://media.hungama.com/c/4/514/28c/42800793/42800793_128.mp3?8D4xOzWoZIrGJ4uMb6UnP9yXK7FuEx6iUErs2wt3240sBY29xpY2Z83VTJMEsTPedjSsCIYmo0ms1PrYVMOzMEE20YFOFIGbNzDb2cvYpC_XwNW8DlWCezxfpfOoms5VaSjpkw',
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: false,
      lyrics:`Sometimes, when this place gets kind of empty
        Sound of their breath fades with the light
        I think about the loveless fascination
        Under the Milky Way tonight`
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
