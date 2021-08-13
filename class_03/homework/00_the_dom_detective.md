# Exercise: The DOM Detective

Visit [General Assembly's website](https://generalassemb.ly/) in Google Chrome, and open up the JavaScript console.

You'll have to do this all in the JavaScript console, so keep track of what you have written!

Using DOM access methods, such as `document.querySelector` and `document.querySelectorAll`, find the following parts of the page:

- The title of the page
- The logo in the nav
- The "Find Your Course" button in the nav
- The heading that says `"Learning Today, Leading Tomorrow"`
- All the DOM nodes that contain course names (such as "Software Engineering", "UX Design Immersive" etc.)
- The amount of campuses around the world
- The number of instructors
- The logos of GA's featured clients and hiring partners
- GA's social links at the bottom (Facebook, Twitter, LinkedIn, Instagram, YouTube)
- The input where you add your email to sign up for the newsletter (in the footer)

## A few hints

- Look up the documentation on MDN for `document.querySelector` and `document.querySelectorAll`
- Rely heavily on "Inspect Element" in the DevTools
- You are going to need all sorts of CSS selectors to get this done (such as descendent selectors, direct descendent selectors, sibling selectors etc.)
  - If you aren't feeling comfortable with the CSS selectors - visit [https://flukeout.github.io/](https://flukeout.github.io/) to get used to them
- Don't be concerned if you find this very difficult, it is a tough one!
- If you get **really** stuck:
  - "Inspect" the element you are trying to select
  - In the DevTools, right click the DOM node that "Inspect" found:
    - Copy -> Selector
    - Don't just blindly copy it though! Try to see how it works, and if possible - reduce the specificity as much as possible
