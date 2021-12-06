// ## Part 3: Exporting and importing

// Now let's neaten things up by moving the `myCollection` array to its own file. With Node's power to export and import, everything doesn't have to all be in one file, which makes for cleaner, more readable code.

// 3a. Create a new file in the same folder called `collection.js`. Cut and paste your `myCollection` array from `index.js` to collection.js instead.

// _Note: Only move the `myCollection` variable! Keep the functions in `index.js`._

// import let myCollection
let myCollection = [
  {
    name: 'School of Code mug',
    count: 1,
    whatILike: 'It has my cute pixel character on it!',
  },
  {
    name: 'School of Code hat',
    count: 2,
    whatILike: 'An often overlooked fashion accessory',
  },
  {
    name: 'School of Code pillow',
    count: 1,
    whatILike: 'Eat. Sleep. Code. Repeat :)',
  },
];

export default myCollection;

// 👉 3b. Use Node's default exporting syntax in collection.js to export the `myCollection` variable so that it's ready to import elsewhere in your folder. To use this new import/export syntax, we need to change our `package.json` so that it has the property `"type": "module"`.

// Remember that you can check Google if you can't remember the syntax, but we are using ES6 import/export syntax!
