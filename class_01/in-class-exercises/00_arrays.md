# Exercises: Arrays

## Working with Arrays

Starting with an empty array called `rainbowColors`:

- Add `"orange"` to the end of the array
- Add `"red"` to the start of the array
- Add `"yellow"` to the end
- Add `"green"`, `"blue"`, `"indigo"`, and `"violet"` to the end of the array
  - **Bonus**: Do this using _one_ method
- Log out the length of the array
- Log out the second item
- Log out the last item (make this flexible/dynamic!)
- Log out the index of the string `"blue"`
- Bonus: Find out the difference between `.slice` and `.splice`
  - Create an array called `twoColors` using one method - don't change the `rainbowColors` array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
  - Starting with this array `const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];`, remove the duplicates **destructively** using _slice_ or _splice_ (whichever one is appropriate)
- Bonus: Work with arrays of arrays
  - Starting with this array `const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];`
  - Access `"inner array first item"` and print it out
  - Print `"third"` by using a dynamic index
  - **Bonus**: Loop through the second inner array! Print out the first item, the second item, then the third item

## Your top choices

Create an array to hold your top five choices of something (dogs, books, presidents, whatever you want).

- For each choice, log to the screen a string like: `"My #1 choice is blue."`
- **Bonus:** Change it to log `"My 1st choice"`, `"My 2nd choice"`, `"My 3rd choice"`, picking the right suffix for the number based on what it is.
