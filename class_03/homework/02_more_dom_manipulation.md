# Exercise: More DOM Manipulation

## About Me

Every webpage needs an "About" section.

Start with this HTML and save it as "aboutme.html":

```html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title>About Me</title>
</head>
<body>
  <h1>About Me</h1>

  <ul>
    <li>Nickname: <span id="nickname"></span>
    <li>Favorites:  <span id="favorites"></span>
    <li>Hometown: <span id="hometown"></span>
   </ul>

 </body>
</html>
```

- Add a `script` tag to the bottom.
- (In JS) Change the body tag's style so it has a font-family of `"Arial, sans-serif"`.
- (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
- Iterate through each li and change the class to `"list-item"`. Add a style tag that sets a rule for `"list-item"` to make the color "red".
- Create a new img element and set its `src` attribute to a picture of you. Append that element to the page.

## The Book List

Keep track of which books you read and which books you want to read!

- Create a webpage with an h1 of `"My Book List"`.
- Add a script tag to the bottom of the page, where all your JS will go.
- Copy this array of books (or create your own):

```javascript
const books = [
  {
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    alreadyRead: false
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    alreadyRead: true
  },
  {
    title: "A Short History of Nearly Everything",
    author: "Bill Bryson",
    alreadyRead: true
  },
  {
    title: "A Life on our Planet",
    author: "David Attenborough",
    alreadyRead: true
  },
  {
    title: "Cosmos",
    author: "Carl Sagan",
    alreadyRead: false
  }
];
```

- Iterate through the array of books. For each book, create a `p` element with the book title and author and append it to the page.
  - If you have read it, make the text color green. If you haven't, make the text color red.
- **Bonus**: Use a `ul` and `li` to display the books.
- **Bonus**: add a property to each book with the URL of the book cover, and add an `img` element for each book on the page
