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
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10075',
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
      audio: 'https://ia803002.us.archive.org/30/items/Psychocandy/01JustLikeHoney.mp3',
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
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10075',
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
      audio: 'https://ia803002.us.archive.org/30/items/Psychocandy/01JustLikeHoney.mp3',
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
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10075',
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
