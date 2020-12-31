import { v4 as uuidv4 } from 'uuid';
function chillHop() {
  return [
    {
      name: 'Just Like Honey',
      cover:
        'https://www.rhino.com/sites/rhino.com/files/styles/article_image/public/2018-07/081227993702.jpg?itok=BfHQJWQh',
      artist: 'Jesus Mary Chain',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10075',
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: true,
      lyrics: `
        Listen to the girl
        As she takes on half the world
        Moving up and so alive
        In her honey dripping beehive
        Beehive
        It's good, so good, it's so good
        So good
        Walking back to you
        Is the hardest thing that
        I can do
        That I can do for you
        For you
        I'll be your plastic toy
        I'll be your plastic toy
        For you
        Eating up the scum
        Is the hardest thing for
        Me to do
        Just like honey
        Just like honey
        Just like honey
        Just like honey
        Just like honey
        Just like honey
        Just like honey
        Just like honey
        Just like honey
        Just like honey
        Just like honey
        Just like honey
        Just like honey
        Just like honey
        Just like honey
        Just like honey
        Just like honey
      `
    },
    {
      name: 'Love Will Tear Us Apart',
      cover:
        'https://i.pinimg.com/originals/d4/7f/34/d47f34a612983fa65f98b5da356997ff.jpg',
      artist: 'Joy Division',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9272',
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'April Skies',
      cover:
        'https://www.rhino.com/sites/rhino.com/files/styles/square/public/products/darklands.jpg?itok=tUqWxuBP',
      artist: 'Jesus Mary Chain',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9222',
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Nightfall',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
      artist: 'Aiguille',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9148',
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Reflection',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
      artist: 'Swørn',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9228',
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Under the City Stars',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
      artist: 'Aso, Middle School, Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10074',
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
