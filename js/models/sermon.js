AdventistAudio.Sermons = DS.Model.extend({
  title: DS.attr('string'),
  speaker: DS.attr('string'),
  date: DS.attr('string'),
  len: DS.attr('integer'),
  file: DS.attr('string'),
  usersermon: DS.belongsTo('usersermon')
});

AdventistAudio.Sermons.reopenClass({
  FIXTURES: [
  {
    id: 1,
    title: 'Eternity\'s Edge - Prelude to Persecution',
    speaker: 'Dwight K. Nelson',
    date: "",
    len: 100,
    file: "audio/01 Eternity's Edge_ Prelude to Persecution.mp3"
  },
  {
    id: 2,
    title: 'Eternity\'s Edge - The Tri-lateral Conspiracy',
    speaker: 'Dwight K. Nelson',
    date: "",
    len: 100,
    file: "audio/01 Eternity's Edge_ The Tri-lateral Conspiracy.mp3"
    
  },
  {
    id: 3,
    title: 'Eternity\'s Edge - When God\'s Last Question Becomes Our First',
    speaker: 'Dwight K. Nelson',
    date: "",
    len: 100
  },
  {
    id: 4,
    title: 'Hid in My Heart - All is Well--He\'s Still between the Cherubim',
    speaker: 'Dwight K. Nelson',
    date: "",
    len: 100
  },
  {
    id: 5,
    title: 'Hid in My Heart - In the Emperor\'s Bedroom',
    speaker: 'Dwight K. Nelson',
    date: "",
    len: 100
  },
]
});
       /*      
                 
                
                <tr>
                  <td>Hid in My Heart - In the Emperor's Bedroom'</td>
                  <td>Dwight K. Nelson</td>
                  <td>Sed</td>
                  <td>nisi</td>
                </tr>
                <tr>
                  <td>Hid in My Heart - Moral Giants in a Land of Pygmies</td>
                  <td>Dwight K. Nelson</td>
                  <td>sem</td>
                  <td>at</td>
                </tr>
                <tr>
                  <td>Hid in My Heart - Storm Brewing</td>
                  <td>Dwight K. Nelson</td>
                  <td>imperdiet</td>
                  <td>Duis</td>
                </tr>
                <tr>
                  <td>Hid in My Heart - Torah, Torah, Torah--Breaking the Enemie's Code</td>
                  <td>Dwight K. Nelson</td>
                  <td>Praesent</td>
                  <td>mauris</td>
                </tr>
                <tr>
                  <td>Hid in My Heart - Twin Peaks--A Tale of Two Mountains</td>
                  <td>Dwight K. Nelson</td>
                  <td>tellus</td>
                  <td>sed</td>
                </tr>
                <tr>
                  <td>Eternity's Edge - It Was the Best of Times</td>
                  <td>Dwight K. Nelson</td>
                  <td>porta</td>
                  <td>Mauris</td>
                </tr>
                <tr>
                  <td>Eternity's Edge - The Magic Kingdom</td>
                  <td>Dwight K. Nelson</td>
                  <td>lacinia</td>
                  <td>arcu</td>
                </tr>
                <tr>
                  <td>Eternity's Edge - Will We Speak Chinese in Heaven</td>
                  <td>Dwight K. Nelson</td>
                  <td>Class</td>
                  <td>aptent</td>
                </tr>
                <tr>
                  <td>Hid in My Heart - Audience With the Eternal</td>
                  <td>Dwight K. Nelson</td>
                  <td>ad</td>
                  <td>litora</td>
                </tr>
                <tr>
                  <td>Hid in My Heart - Baby and Beasts and Book - The Last Word</td>
                  <td>Dwight K. Nelson</td>
                  <td>conubia</td>
                  <td>nostra</td>
                </tr>
                <tr>
                  <td>Hid in My Heart - Showdown in the Desert</td>
                  <td>Dwight K. Nelson</td>
                  <td>himenaeos</td>
                  <td>Curabitur</td>
                </tr>

 {
   id: 2,
   title: '...',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Profit!',
   isCompleted: false
 }
];*/