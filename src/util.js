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
      lyrics: `I get ahead on my motorbike
              I get ahead on my motorbike
              I feel so quick in my leather boots
              I feel so quick in my leather boots`
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
      lyrics: `Crack of dawn
              Cindy's movin' on
              Talking Cindy to everyone
              'Till she's had her fun`
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
      lyrics: `I'm going down to the place tonight
To see if I can get a taste tonight
A taste of something warm and sweet
That shivers your bones and rises to your heat`
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
      lyrics: `The sun comes up, another day begins
And I don't even worry about the state I'm in
My head's so heavy and I'm looking thin
But when the sun goes down I'm gonna start again`
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
      lyrics:`Sometimes I walk sideways to avoid you when I've annoyed you
Love's like the mighty ocean when it's frozen that is your heart
What would I be if I could free, I couldn't even walk, you trip me up`
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
