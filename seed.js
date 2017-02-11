// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

var db = require("./models/");
var Quote = db.Quote;


//not sure what the purpose of this is if its already in server.js
// var kevin = {
//   phrase: "lifes simple, make choices, dont look back",
//   person: "Kevin Kuo",
//   topic: "life"
// };

Quote.create()







// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var quotes_list = [
  {
    phrase: "lifes simple, make choices, dont look back",
    person: "Kevin Kuo",
    topic: "life"
  },
  {
    phrase: "lifesdfasdfasdok back",
    person: "Kevisdfasdfo",
    topic: "lidsfasdffe"
  },
  {
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    image: "https://s3-us-west-2.amazonaws.com/sandboxapi/romeo_and_juliet.jpg",
    releaseDate: "Unknown 1597"
  }
];

// remove all records that match {} -- which means remove ALL records
db.Quote.remove({}, function(err, quotes){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all quotes');

    // create new records based on the array books_list
    db.Quote.create(quotes_list, function(err, quotes){
      if (err) { return console.log('err', err); }
      console.log("created", quotes.length, "quotes");
      process.exit();
    });
  }
});
