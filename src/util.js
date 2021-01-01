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
      name: 'The Living End',
      cover:
        'https://www.rhino.com/sites/rhino.com/files/styles/article_image/public/2018-07/081227993702.jpg?itok=BfHQJWQh',
      artist: 'Jesus Mary Chain',
      audio: 'https://ia803002.us.archive.org/30/items/Psychocandy/02TheLivingEnd.mp3',
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
      name: 'Taste of Cindy',
      cover:
        'https://www.rhino.com/sites/rhino.com/files/styles/article_image/public/2018-07/081227993702.jpg?itok=BfHQJWQh',
      artist: 'Jesus Mary Chain',
      audio: 'https://ia803002.us.archive.org/30/items/Psychocandy/07TasteOfCindy.mp3',
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
      lyrics: `Hey honey what you trying to say
        As I stand here
        Don't you walk away
        And the world comes tumbling down`
    },
    {
      name: 'Some Candy Talking',
      cover:
        'https://www.rhino.com/sites/rhino.com/files/styles/article_image/public/2018-07/081227993702.jpg?itok=BfHQJWQh',
      artist: 'Jesus Mary Chain',
      audio: 'https://ia803002.us.archive.org/30/items/Psychocandy/08SomeCandyTalking.mp3',
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
      lyrics: `And so she woke up
        Woke up from where she was lyin' still
        Said I gotta do something
        About where we're goin'`
    },
    {
      name: 'Never Understand',
      cover:
        'https://www.rhino.com/sites/rhino.com/files/styles/article_image/public/2018-07/081227993702.jpg?itok=BfHQJWQh',
      artist: 'Jesus Mary Chain',
      audio: 'https://ia803002.us.archive.org/30/items/Psychocandy/09NeverUnderstand.mp3',
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
      lyrics: `Riding on my bicycle i saw a motorcrash,
        A proper motorcrash and lots of spectators.
        I rushed to the centre saw the injured parents,
        Cuts on the children, an awful motorcrash.`
    },
    {
      name: 'You Trip me Up',
      cover:
        'https://www.rhino.com/sites/rhino.com/files/styles/article_image/public/2018-07/081227993702.jpg?itok=BfHQJWQh',
      artist: 'Jesus Mary Chain',
      audio: 'https://ia803002.us.archive.org/30/items/Psychocandy/13YouTripMeUp.mp3',
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
