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
    phrase: "sample quote 1",
    author: "author 1",
    topic: "topic 1"
  },
  {
    phrase: "sample quote 2",
    author: "author 2",
    topic: "topic 2"
  },
  {
    phrase: "sample quote 3",
    author: "author 3",
    topic: "topic 3"
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
