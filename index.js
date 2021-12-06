// 👉 3c. Now import `myCollection` at the top of `index.js`. You should be able to then call your function just as you did in part 1, but this time using `myCollection` imported from its separate file.

import myCollection from './collection.js';
// import {myCollection} from './collection.js';

// Use Node to run the `index.js` file again just to check that your console.logs are still coming through correctly!

// Try and `console.log` the variable
//  then run the file by bringing up the terminal (navigating to the files directory if you need to) and entering `node index.js`
// You should see the array of object as output in your console.

// console.log(myCollection);

// 👉 2c. Create a function called `describeItem`, which should take in an item as a parameter (the argument handed to this function would be an item from our collection). The function should `console.log` a message according to how many of the item you have.

// If there's only one of the item in your collection, it should log "I have a `name`. Here's what I like about it: `whatILike`". If you have more than one of it, the message should log "I have `count` `name`s. Here's what I like about them: `whatILike`".

// Input - Item from the array myCollection
// Ouput - A message depending on how many of those items are in the array

function describeItem(item) {
  for (let i = 0; i < myCollection.length; i++) {
    if (item.count === 1) {
      return console.log(
        `I have a ${item.name}. Here's what I like about it: ${item.whatILike}`
      );
    } else {
      return console.log(
        `I have ${item.count} ${item.name}'s. Here's what I like about them: ${item.whatILike}`
      );
    }
  }
}

// For example, the result of calling the `describeItem` function with the first item in our collection would be:
// _"I have a School of Code mug. Here's what I like about it: It has my cute pixel character on it!"_

// Call your function below where you've defined it, handing in the first item in `myCollection`.

// describeItem(myCollection[0]);

// Now run the file again (using `node index.js`);

// Make a function called `describeCollection`
// that takes in an array as a parameter.
// The function should loop through the array
function describeCollection(array) {
  for (let i = 0; i < array.length; i++) {
    // and for each item, it should call the `describeItem` function so it displays a message according to how many you have in your collection.
    describeItem(array[i]);
  }
}

// Call your function below where you've defined it, handing in the `myCollection` array.
describeCollection(myCollection);

// Run the file again to see the output and check that it outputs the correct message for each item in your collection (i.e. each object in your `myCollection` array).

// ## Part 4: NPM and Node packages

// Now let's bring in the power of NPM (Node Package Manager), a platform where people publish Node packages, which are bundles of software that you can use NPM to import into and use in your own projects. We'll use the `chalk` module to make our console.log messages a little more snazzy! 💅🌈✨

// 👉 4a. We've already initialised our project folder as an NPM project. That means we can use node modules other people have created in our project... Sweet. Makes this task easy

// 👉 4b. Use the [chalk docs](https://www.npmjs.com/package/chalk) to find out how to install `chalk` to your project (check your dependencies in your `package.json` file if you want to check that you've installed it correctly). Follow the docs to see how you can now use chalk in `index.js`.

// WE ARE UP TO HERE FATIMA!

// 👉 4c. Use `chalk` to do the following in your console.logs within `describeItem`:

// - Make the name of each item in your collection cyan
// - Make the count of each item in your collection yellow
// - Make what you like about each item in your collection green

// ## Bonus

// 🌟 Dig a bit deeper into the `chalk` module's docs and jazz up your console.logs even further, including making text bold and adding background colors as well.

// 🌟 There are all sorts of handy packages on the NPM website that you can use in your code. Browse and search to check out which are popular, and what they do.

// 🌟 If you're still hungry for more NPM practice, check out [this list](https://github.com/parro-it/awesome-micro-npm-packages) of small, easy-to-manage NPM packages and experiment! 🧪
