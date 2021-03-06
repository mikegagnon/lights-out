# Becoming dangerous in JS + HTML + CSS

> "A little knowledge is a dangerous thing." — Alexander Pope

Let's make a game called Lights Out, while getting the flavor of JS + HTML + CSS.
I assume you’ve already taken [Codecademy’s JavaScript course](https://www.codecademy.com/learn/javascript).

These lecture notes are just notes; they are intended to be accompanied with in-person instruction.

My approach in these lectures is to throw you in the deep end, and show you just enough
to keep your head above water. In that spirit: your first task is to [learn the game Lights Out](https://mikegagnon.github.io/lights-out/).

## Contents

- [PART 1. HTML and CSS](#part1)
  - [Lecture 1. Intro to HTML](#lec1)
    - `<i>` italics tag
    - `<b>` bold tag
    - `<p>` paragraph tag
    - `<ul>` and `<li>` list tags
    - A proper HTML file template
  - [Lecture 2. Intro to CSS](#lec2)
    - `background` CSS property
    - `.css` files
    - Importing `.css` files with the `<link>` tag
    - `class` HTML attribute
  - [Lecture 3. The \<div> tag](#lec3)
    - Styling `<div>` tags
    - `height` and `width` CSS properties
    - `float: left` CSS property
    - `margin-left` CSS property
    - `text-align: center` CSS property
    - `line-height` CSS property
    - `font-family` CSS property
  - [Lecture 4. HTML & CSS framework for Lights Out](#lec4)
    - `clear-left` CSS property
    - `margin-top` CSS property
- [PART 2. JAVASCRIPT](#part2)
  - [Lecture 5. Interaction](#lec5)
    - `onclick` HTML attribute
    - `alert(...)` JavaScript function
    - `.js` files
    - importing `.js` files with the `<script>` tag
    - `jQuery` used via  `$(...)` function
    - `id` HTML attribute
    - `$(...).css(...)` jQuery function
    - `cursor: pointer` CSS property
- [Part 3. CODING CHALLENGES](#part3)
  - [Challenge 1. Toggle lights](#c1)
  - [Challenge 2. Randomize lights](#c2)
    - Move `<script src="lights-out.js"></script>` tag to bottom of `index.html`
  - [Challenge 3. Detect victory](#c3)
  - [Challenge 4. Cross pattern](#c4)
  - [Challenge 5. The Solver](#c5)
    - `$(...).text(...)` jQuery function
  
# <a name="part1">PART 1. HTML and CSS</a>

# <a name="lec1">Lecture 1. Intro to HTML</a>

HTML is a "markup" language — which means you markup plain text with HTML tags.

## Example 1: Italics and Bold

```html
<i>This text is italicized</i>
<b>This text is bolded</b>
```

See the [result](https://mikegagnon.github.io/lights-out/lecture01/example01.html).

## <a name="ptag">Example 2: Paragraphs</a>

You can use the `<p>` tag to put text in separate paragraphs.

```html
<p>
  <i>This text is italicized</i>
</p>

<p>
  <b>This text is bolded</b>
</p>
```

See the [result](https://mikegagnon.github.io/lights-out/lecture01/example02.html).

## Example 3: Lists

You can use the `<ul>` and `<li>` tags to create a list.

```html
<ul>
  <li><i>This text is italicized</i></li>
  <li><b>This text is bolded</b></li>
</ul>
```

See the [result](https://mikegagnon.github.io/lights-out/lecture01/example03.html).

## Example 4: Proper HTML

A proper HTML file looks like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Lights Out</title>
  </head>
  <body>
    <ul>
      <li><i>This text is italicized</i></li>
      <li><b>This text is bolded</b></li>
    </ul>
  </body>
</html>
```

See the [result](https://mikegagnon.github.io/lights-out/lecture01/example04.html).

- The content inside the `<head>` tag doesn't get displayed
- The `<title>` tag may only appear inside the `<head>` tag. The text inside the `<title>` tag is displayed on the tab in your browser.
- The `<body>` tag stores everything that should be displayed

# <a name="lec2">Lecture 2. Intro to CSS</a>

CSS lets you *style* HTML.

## Example 1: style

For instance, you can use CSS to change the background color of an HTML element.

```html
<ul>
  <li style="background: pink"><i>This text is italicized</i></li>
  <li style="background: grey"><b>This text is bolded</b></li>
</ul>
```

See the [result](https://mikegagnon.github.io/lights-out/lecture02/example01.html).

## <a name="foobar">Example 2: .css file</a>

There are several ways to sprinkle CSS on your HTML.

One of the ways is using `style="..."` inside an HTML tag (as in Example 1).

The most canonical way is to put your CSS definitions in a `.css` file,
then import that `.css` file into your HTML file.

For example, create a new file named `style.css` and add the following into that file.

```css
.foo {
    background: pink;
}

.bar {
    background: grey;
}
```

This creates two CSS "classes": class `foo` and class `bar`.

Now create a file named `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Lights Out</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <ul>
      <li class="foo"><i>This text is italicized</i></li>
      <li class="bar"><b>This text is bolded</b></li>
    </ul>
  </body>
</html>
```

Notice the following lines:

* `<link rel="stylesheet" type="text/css" href="example02-style.css">`
* `<li class="foo"><i>This text is italicized</i></li>`
* `<li class="bar"><b>This text is bolded</b></li>`

This `<link ...>` tag imports the file `style.css` into the HTML file.

The `<li class="...">` tags attach CSS classes to HTML tags.

See the [result](https://mikegagnon.github.io/lights-out/lecture02/example02.html).

# <a name="lec3">Lecture 3. The \<div> tag</a>

The `<div>` tag is a special HTML tag.

## Example 1: Like the \<p> tag

The `<div>` tag acts kind of like the paragraph tag (see [Lecture 1, Example 2](#ptag)).

```html
<div>First div</div>
<div>Second div</div>
```

See the [result](https://mikegagnon.github.io/lights-out/lecture03/example01.html).

## <a name="lecture3-example2">Example 2: Styling \<div> tags</a>

`<div>` tags are only interesting if you style them with CSS.

This example, and the next few examples, demonstrate the CSS you'll need to know
for making the Lights Out game.

First, we'll style some `<divs>` like [Lecture 2, Example 2](#foobar).

### `style.css`

```css
.foo {
    background: pink;
}

.bar {
    background: grey;
}
```

### `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Lights Out</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <div class="foo">First div</div>
    <div class="bar">Second div</div>
  </body>
</html>
```

See the [result](https://mikegagnon.github.io/lights-out/lecture03/example02.html).

## Example 3: Height and width

You can set the height and width of a `<div>` tag using CSS as follows:

### `style.css`

```css
.foo {
    background: pink;
    height: 100px;
    width: 100px;
}

.bar {
    background: grey;
    height: 100px;
    width: 100px;
}
```

The `px` suffix indicates that the unit of measurement is pixels.

### `index.html`

Just use the same `index.html` file from [Lecture 3, Example 2](#lecture3-example2)

See the [result](https://mikegagnon.github.io/lights-out/lecture03/example03.html).

## Example 4: Float left

You can use the `float` property in CSS to place `<div>` elements left-to-right.

### `style.css`

```css
.foo {
    background: pink;
    height: 100px;
    width: 100px;
    float: left;
}

.bar {
    background: grey;
    height: 100px;
    width: 100px;
    float: left;
}
```

### `index.html`

Use the same `index.html` file from [Lecture 3, Example 2](#lecture3-example2)

See the [result](https://mikegagnon.github.io/lights-out/lecture03/example04.html).

## <a name="lec3ex5">Example 5: Margin left</a>

To add horizontal white space between `<div>` elements, use the `margin-left` CSS property:

### `style.css`

```css
.foo {
    background: pink;
    height: 100px;
    width: 100px;
    float: left;
    margin-left: 5px;
}

.bar {
    background: grey;
    height: 100px;
    width: 100px;
    float: left;
    margin-left: 5px;
}
```

### `index.html`

Use the same `index.html` file from [Lecture 3, Example 2](#lecture3-example2)

See the [result](https://mikegagnon.github.io/lights-out/lecture03/example05.html).

## Example 6: Text align center

To *horizontally* center text within a `<div>` element, use the `text-align` CSS property.

### `style.css`

```css
.foo {
    background: pink;
    height: 100px;
    width: 100px;
    float: left;
    margin-left: 5px;
    text-align: center;
}

.bar {
    background: grey;
    height: 100px;
    width: 100px;
    float: left;
    margin-left: 5px;
    text-align: center;
}
```

### `index.html`

Use the same `index.html` file from [Lecture 3, Example 2](#lecture3-example2)

See the [result](https://mikegagnon.github.io/lights-out/lecture03/example06.html).

## Example 7: Vertical centering

To *vertically* center text within a `<div>` element, use the `line-height` CSS property.

Set the `line-height` property equal to the `height` property; in this case, `100px`.

### `style.css`

```css
.foo {
    background: pink;
    height: 100px;
    width: 100px;
    float: left;
    margin-left: 5px;
    text-align: center;
    line-height: 100px;
}

.bar {
    background: grey;
    height: 100px;
    width: 100px;
    float: left;
    margin-left: 5px;
    text-align: center;
    line-height: 100px;
}
```

### `index.html`

Use the same `index.html` file from [Lecture 3, Example 2](#lecture3-example2)

See the [result](https://mikegagnon.github.io/lights-out/lecture03/example07.html).

## <a name="lec3ex8">Example 8: Font</a>

To set the font within a `<div>` element, use the `font-family` CSS property.

In this case, set the `font-family` property equal to `Helvetica`.

### `style.css`

```css
.foo {
    background: pink;
    height: 100px;
    width: 100px;
    float: left;
    margin-left: 5px;
    text-align: center;
    line-height: 100px;
    font-family: Helvetica;
}

.bar {
    background: grey;
    height: 100px;
    width: 100px;
    float: left;
    margin-left: 5px;
    text-align: center;
    line-height: 100px;
    font-family: Helvetica;
}
```

### `index.html`

Use the same `index.html` file from [Lecture 3, Example 2](#lecture3-example2)

See the [result](https://mikegagnon.github.io/lights-out/lecture03/example08.html).

# <a name="lec4">Lecture 4. HTML & CSS framework for Lights Out</a>

In this lecture, we'll create the HTML and CSS framework for the Lights Out game,
using the things we've learned from the previous lectures.

## Step 1: A row of lights

Create a row of four lights.

### `style.css`

The CSS is very similar to the CSS from [Lecture 3, Example 8](#lec3ex8).
```css

.light {
    background: grey;
    height: 100px;
    width: 100px;
    float: left;
    margin-left: 5px;
    text-align: center;
    line-height: 100px;
    font-family: Helvetica;
}
```

### `index.html`

The HTML declares 4 divs with `class=light`.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Lights Out</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
  </body>
</html>
```

See the [result](https://mikegagnon.github.io/lights-out/lecture04/example01.html).

## <a name="lec4ex2">Step 2: 4 rows of lights</a>

Recall from Step 1, that the lights are arranged horizontally.

This is perfect for creating a single row of lights, but how
do we create multiple rows of lights?

The trick is to *clear* the `float: left` CSS property by:

1. Creating a `row` class, and
2. Using `clear: left` in the `row` class

### `style.css`

```css
.row {
    clear: left;
}

.light {
    background: grey;
    height: 100px;
    width: 100px;
    float: left;
    margin-left: 5px;
    text-align: center;
    line-height: 100px;
    font-family: Helvetica;
}
```

### `index.html`

Then, we encapsulate each row of lights in a `row` div.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Lights Out</title>
    <link rel="stylesheet" type="text/css" href="example02-style.css">
  </head>
  <body>
    <div class="row">
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>
    </div>
    <div class="row">
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>
    </div>
    <div class="row">
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>
    </div>
    <div class="row">
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>
    </div>
  </body>
</html>
```

See the [result](https://mikegagnon.github.io/lights-out/lecture04/example02.html).

## Step 3: Fixing white space

There is a problem from Step 2. Namely, there is no vertical whitespace between
lights.

We fix this by adding vertical whitespace above each light.

Recall from [Lecture 3, Example 5](#lec3ex5), we created horizontal
whitespace between lights using `margin-left: 5px;` in `style.css`.

Now we add `margin-top: 5px;` to the `light` class in `style.css`.

### `style.css`

```css
.row {
    clear: left;
}

.light {
    background: grey;
    height: 100px;
    width: 100px;
    float: left;
    margin-left: 5px;
    margin-top: 5px;
    text-align: center;
    line-height: 100px;
    font-family: Helvetica;
}
```

### `index.html`

Just use the same `index.html` file from [Lecture 4, Step 2](#lec4ex2).

See the [result](https://mikegagnon.github.io/lights-out/lecture04/example03.html).

# <a name="part2">PART 2. JAVASCRIPT</a>

# <a name="lec5">Lecture 5. Interaction</a>

This lecture introduces how Javascript can interact with HTML and CSS.

## Step 1. `onclick`

You can use `onclick` to detect (and respond to) clicks on HTML elements.

For example, you can modify one of the `light` divs as so:

```html
<div class="light" onclick="alert('You clicked a light')"></div>
```

`alert(...)` is a Javscript function that creates a pop-up with the given text.

### `style.css`

Just use the same `style` file from [Lecture 3, Example 2](#lecture3-example2)

### `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Lights Out</title>
    <link rel="stylesheet" type="text/css" href="example01-style.css">
  </head>
  <body>
    <div class="row">
      <div class="light" onclick="alert('You clicked the top-left light')"></div>
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>
    </div>
    <div class="row">
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>
    </div>
    <div class="row">
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>
    </div>
    <div class="row">
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>
    </div>
  </body>
</html>
```

See the [result](https://mikegagnon.github.io/lights-out/lecture05/example01.html).

## Step 2. `lights-out.js`

In this step, we use `onclick` to invoke Javascript in a file named `lights-out.js`

First, we create a file named `lights-out.js` and add a function called `lightClick`.

```js
function lightClick(row, col) {
    alert("You clicked the light at row " + row + ", column " + col);
}
```

Then, we import `lights-out.js` into the HTML file. Notice the new
`<script ... >` element inside the `<head>` component:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Lights Out</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="lights-out.js"></script>
  </head>
  ...
```

Finally, we set the `onclick` property of each light to call the
`lightClick(...)` function:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Lights Out</title>
    <link rel="stylesheet" type="text/css" href="example02-style.css">
    <script src="example02.js"></script>
  </head>
  <body>
    <div class="row">
      <div class="light" onclick="lightClick(0, 0)"></div>
      <div class="light" onclick="lightClick(0, 1)"></div>
      <div class="light" onclick="lightClick(0, 2)"></div>
      <div class="light" onclick="lightClick(0, 3)"></div>
    </div>
    <div class="row">
      <div class="light" onclick="lightClick(1, 0)"></div>
      <div class="light" onclick="lightClick(1, 1)"></div>
      <div class="light" onclick="lightClick(1, 2)"></div>
      <div class="light" onclick="lightClick(1, 3)"></div>
    </div>
    <div class="row">
      <div class="light" onclick="lightClick(2, 0)"></div>
      <div class="light" onclick="lightClick(2, 1)"></div>
      <div class="light" onclick="lightClick(2, 2)"></div>
      <div class="light" onclick="lightClick(2, 3)"></div>
    </div>
    <div class="row">
      <div class="light" onclick="lightClick(3, 0)"></div>
      <div class="light" onclick="lightClick(3, 1)"></div>
      <div class="light" onclick="lightClick(3, 2)"></div>
      <div class="light" onclick="lightClick(3, 3)"></div>
    </div>
  </body>
</html>
```

See the [result](https://mikegagnon.github.io/lights-out/lecture05/example02.html).

## Step 3. Turning lights pink

This step shows how use jQuery to turn a light to pink when you click on it.

The way it works is:

1. Import jQuery
2. Give every light a unique ID
3. Use jQuery to change the color of the `<div>` for the clicked light 

### Import jQuery

jQuery is a Javascript library that makes it easier to interact with HTML,
as opposed to using pure Javascript alone.

Download jQuery from [here](https://code.jquery.com/jquery-3.1.1.js), 
rename the file to `jquery.js`, and put
it in the same folder with `index.html`, `style.css`, etc.

Edit the `<head>` of `index.html` to import jQuery:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Lights Out</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="lights-out.js"></script>
    <script src="jquery.js"></script>
  </head>
  ...
```

### Give every light a unique ID

Give each light a unique ID, based on the light's row and column:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Lights Out</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="lights-out.js"></script>
    <script src="jquery.js"></script>
  </head>
  <body>
  <div class="row">
    <div class="light" id="light-0-0" onclick="lightClick(0, 0)"></div>
    <div class="light" id="light-0-1" onclick="lightClick(0, 1)"></div>
    <div class="light" id="light-0-2" onclick="lightClick(0, 2)"></div>
    <div class="light" id="light-0-3" onclick="lightClick(0, 3)"></div>
  </div>
  <div class="row">
    <div class="light" id="light-1-0" onclick="lightClick(1, 0)"></div>
    <div class="light" id="light-1-1" onclick="lightClick(1, 1)"></div>
    <div class="light" id="light-1-2" onclick="lightClick(1, 2)"></div>
    <div class="light" id="light-1-3" onclick="lightClick(1, 3)"></div>
  </div>
  <div class="row">
    <div class="light" id="light-2-0" onclick="lightClick(2, 0)"></div>
    <div class="light" id="light-2-1" onclick="lightClick(2, 1)"></div>
    <div class="light" id="light-2-2" onclick="lightClick(2, 2)"></div>
    <div class="light" id="light-2-3" onclick="lightClick(2, 3)"></div>
  </div>
  <div class="row">
    <div class="light" id="light-3-0" onclick="lightClick(3, 0)"></div>
    <div class="light" id="light-3-1" onclick="lightClick(3, 1)"></div>
    <div class="light" id="light-3-2" onclick="lightClick(3, 2)"></div>
    <div class="light" id="light-3-3" onclick="lightClick(3, 3)"></div>
  </div>
  </body>
</html>
```

### Use jQuery to change the color of the `<div>` for the clicked light 

Edit `lights-out.js`:

```js
function lightClick(row, col) {
    var lightId = "#light-" + row + "-" + col;
    $(lightId).css("background-color", "pink")
}
```

Here's how it works:

- `$` is a reference to the jQuery object
- `$(lightId)` is a method invocation that "selects" the div for the light at `row`, `col`, and returns an object representing the selected `<div>` element
- `.css` is a method on the object returned by `$(lightId)`. It changes the CSS for the selected `<div>`

See the [result](https://mikegagnon.github.io/lights-out/lecture05/example03.html).

## Step 4. Just a dash more CSS

On the web, it is conventional for the mouse pointer to turn into a "gloved hand" when the mouse is hovering over a clickable element.

![Mouse pointers](pointers.png)

Therefore, we want a gloved-hand pointer to appear when the mouse hovers over the lights (since the lights are clickable).

To accomplish this feat, add `cursor: pointer;` to the `light` class in `style.css`:

```css
.row {
    clear: left;
}

.light {
    background: grey;
    height: 100px;
    width: 100px;
    float: left;
    margin-left: 5px;
    margin-top: 5px;
    text-align: center;
    line-height: 100px;
    font-family: Helvetica;
    cursor: pointer;
}
```

See the [result](https://mikegagnon.github.io/lights-out/lecture05/example04.html).

# <a name="part3">PART 3. CODING CHALLENGES</a>

# <a name="c1">Challenge 1. Toggle lights</a>

At this point, we have developed the Lights Out game to the point where if you click
a light, the light turns pink.

Now, you'll develop the game a bit further so that:

- when you click a *pink* light, the light turns *grey*
- when you click a *grey* light, the light turns *pink*

Go for it!

Do not lookup a hint until after (a) you've tried figuring it out on your own, (b) you've tried
googling it, and (c) you've asked your instructor for help.

- [Hint 1](#c1h1)
- [Hint 2](#c1h2)
- [Hint 3](#c1h3)
- [Hint 4](#c1h4)
- [Hint 5](#c1h5)
- [Hint 6](#c1h6)
- [Solution](#c1solution)
- [See result](https://mikegagnon.github.io/lights-out/challenge01/index.html)

# <a name="c2">Challenge 2. Randomize lights</a>

In this challenge add/update some code in `lights-out.js` so
that the game will start with lights randomly turned on/off.

This is [what the game will be like](https://mikegagnon.github.io/lights-out/challenge02/index.html) by the time
you finish this challenge. Notice that every time you refresh the page the lights are different.

## Start off by modifying `index.html`

Right now the `<head>` of `index.html` looks like this:

```html
  <head>
    <title>Lights Out</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="lights-out.js"></script>
    <script src="jquery.js"></script>
  </head>
```

Remove the line `<script src="lights-out.js"></script>` and
place it at the bottom of `index.html` just above the `</html>` tag, like this:

```html
  </body>

  <script src="lights-out.js"></script>

</html>
```

After you've solved the challenge, read [this explanation](#c2explanation) that explains why
you needed to make this modification.

## Hints

- [Hint 1](#c2h1)
- [Hint 2](#c2h2)
- [Hint 3](#c2h3)
- [Hint 4](#c2h4)
- [Hint 5](#c2h5)
- [Hint 6](#c2h6)
- [Hint 7](#c2h7)
- [Hint 8](#c2h8)
- [Solution](#c2solution)
- [Explanation of why you need to move the line `<script src="lights-out.js"></script>` in `index.html`](#c2explanation)
- [See result](https://mikegagnon.github.io/lights-out/challenge02/index.html)

# <a name="c3">Challenge 3. Detect victory</a>

Add code to `lights-out.js` that detects victories -- i.e. when all the lights have been turned to gray.

When a victory occurs create a popup that says "You win!"

- [Hint 1](#c3h1)
- [Hint 2](#c3h2)
- [Hint 3](#c3h3)
- [Solution](#c3solution)
- [See result](https://mikegagnon.github.io/lights-out/challenge03/index.html)

# <a name="c4">Challenge 4. Cross pattern</a>

Add code to `lights-out.js` so that clicking on a light toggles the lights in a cross pattern.

To refresh your memory on the cross pattern [play the game](https://mikegagnon.github.io/lights-out/).

When a light is clicked, the following lights should be toggled:

- The light that was clicked
- The light above
- The light below
- The light to the left
- The light to the right

If there is no light above (because the clicked light is on the top row), then it wraps around
and the light on the bottom row is toggled. So on and so forth for going below, to the left, and to the right.

- [Hint 1](#c4h1)
- [Hint 2](#c4h2)
- [Hint 3](#c4h3)
- [Hint 4](#c4h4)
- [Solution](#c4solution)
- [See result](https://mikegagnon.github.io/lights-out/challenge04/index.html)

# <a name="c5">Challenge 5. The Solver</a>

Add code to `lights-out.js` so that the game tells the user which buttons to click to solve the puzzle,
[like this](https://mikegagnon.github.io/lights-out/challenge05/index.html).

## Setting \<div> text

For this challenge you need to change the text inside of of a `<div>` to say either "click me" or say
nothing at all, "".

Use jQuery for this, specifically use `$(lightId).text("foo")`

For example:

```js
var row = 2
var col = 1
lightId = "#light-" + row + "-" + col;
$(lightId).text("click me")

var row = 0
var col = 0
lightId = "#light-" + row + "-" + col;
$(lightId).text("")
```

- [Hint 1](#c5h1)
- [Hint 2](#c5h2)
- [Hint 3](#c5h3)
- [Hint 4](#c5h4)
- [Final solution](#c5solution)
- [See final result](https://mikegagnon.github.io/lights-out/challenge05/index.html)


<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

# PART 4. HINTS

## <a name="c1h1">Challenge 1, Hint 1</a>

Use a 2-dimensional array (aka a *matrix*) to keep track of which lights are turned on, and which
lights are turned off.

[Back to Challenge 1](#c1)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c1h2">Challenge 1, Hint 2</a>

You can define a matrix like this in `lights-out.js`:

```js
var matrix = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
]
```

[Back to Challenge 1](#c1)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c1h3">Challenge 1, Hint 3</a>

Whenever a light is clicked, toggle the corresponding boolean value in the matrix

[Back to Challenge 1](#c1)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c1h4">Challenge 1, Hint 4</a>

You can toggle a value in the matrix like this in `lights-out.js`:

```js
function lightClick(row, col) {

    matrix[row][col] = !matrix[row][col]
    
    ...
 }
```

[Back to Challenge 1](#c1)


<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>


## <a name="c1h5">Challenge 1, Hint 5</a>

Update the color of the light based on the value in the matrix

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c1h6">Challenge 1, Hint 6</a>

Here's how to update a light color based on the value in the matrix:

```js
function lightClick(row, col) {

    matrix[row][col] = !matrix[row][col]

    var color;

    if (matrix[row][col]) {
        color = "pink"
    } else {
        color = "gray"
    }

    var lightId = "#light-" + row + "-" + col;

    $(lightId).css("background-color", color)
}
```

[Back to Challenge 1](#c1)


<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c1solution">Challenge 1, Solution</a>

### Part 1

Define a matrix in `lights-out.js`:

```js
var matrix = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
]
```

See [`lights-out.js`](https://mikegagnon.github.io/lights-out/challenge01/lights-out.js).

### Part 2

Toggle lights in the matrix like this in `lights-out.js`:

```js
function lightClick(row, col) {

    matrix[row][col] = !matrix[row][col]
    
    ...
 }
```

See [`lights-out.js`](https://mikegagnon.github.io/lights-out/challenge01/lights-out.js).

### Part 3

Here's how to update a light color based on the value in the matrix:

```js
function lightClick(row, col) {

    matrix[row][col] = !matrix[row][col]

    var color;

    if (matrix[row][col]) {
        color = "pink"
    } else {
        color = "gray"
    }

    var lightId = "#light-" + row + "-" + col;

    $(lightId).css("background-color", color)
}
```

See [`lights-out.js`](https://mikegagnon.github.io/lights-out/challenge01/lights-out.js).

[Back to Challenge 1](#c1)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c2explanation">Challenge 2, explanation for moving `<script src="lights-out.js"></script>`</a>

When your browser loads an html page, it executes each `<script>` tag as soon as it reads it.

In our case we have the following code in `lights-out.js`:

```js
for (var row = 0; row < numRows; row++) {
    for (var col = 0; col < numCols; col++) {

        matrix[row][col]  = Math.random() < 0.5;
        
        setLightColor(row, col);
    }
}
```

If the above code is executed before the light `<div>` elements are rendered by the browser,
then the `setLightColor(...)` function won't work.

This is because `setLightColor(...)` attempts to update `<div>` elements that haven't been rendered yet.

To get around this, put the `<script src="lights-out.js"></script>` line after all the 
light `<div>` elements have been rendered.

That way, when `lights-out.js` executes, it can update the `<div>` elements because
they have already been rendered.

[Back to Challenge 2](#c2)


<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c2h1">Challenge 2, Hint 1</a>

Write a `for` loop that iterates over each row number.

Inside that `for` loop, write a second `for` loop that iterates over each column number.

Then, inside the inner `for` loop, randomly set the light at (row, column) to either on or off, randomly.

[Back to Challenge 2](#c2)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c2h2">Challenge 2, Hint 2</a>

The nested `for` loops should look like this:

```js

var numRows = 4
var numCols = 4

for (var row = 0; row < numRows; row++) {
    for (var col = 0; col < numCols; col++) {
      
      // set the light at (row, col) to either pink or gray, randomly
      
    }
}

```

[Back to Challenge 2](#c2)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c2h3">Challenge 2, Hint 3</a>

The `Math.random()` function returns a random value between 0 and 1

[Back to Challenge 2](#c2)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c2h4">Challenge 2, Hint 4</a>

`Math.random() < 0.5` is true 50% of the time, and false 50% of the time

[Back to Challenge 2](#c2)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c2h5">Challenge 2, Hint 5</a>

```js
matrix[row][col] = Math.random() < 0.5;
```

The above code sets `matrix[row][col]` to either `true` or `false`, randomly.

[Back to Challenge 2](#c2)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c2h6">Challenge 2, Hint 6</a>

Inside the inner `for` loop,
don't forget to update the appropriate light `<div>` with either pink or gray, depending on the value of
`matrix[row][col]`.

[Back to Challenge 2](#c2)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c2h7">Challenge 2, Hint 7</a>

Your code should look like this:

```js
for (var row = 0; row < numRows; row++) {
    for (var col = 0; col < numCols; col++) {

        matrix[row][col] = Math.random() < 0.5;

        var color;

        if (matrix[row][col]) {
            color = "pink"
        } else {
            color = "gray"
        }

        var lightId = "#light-" + row + "-" + col;

        $(lightId).css("background-color", color)
    }
}
```

[Back to Challenge 2](#c2)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c2h8">Challenge 2, Hint 8</a>

Notice that there is code duplication in the solution so far.

Namely, the following code appears in both the nested `for` loops, as well as in
the `lightClick` function.

```js
var color;

if (matrix[row][col]) {
    color = "pink"
} else {
    color = "gray"
}

var lightId = "#light-" + row + "-" + col;

$(lightId).css("background-color", color)
```

You want to avoid code duplication by hoisting the common code into its own function,
then calling that function where the code duplication used to be.

[Back to Challenge 2](#c2)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c2solution">Challenge 2, Solution</a>

Your `lights-out.js` file should look like this:

```js
var numRows = 4
var numCols = 4

var matrix = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
]

for (var row = 0; row < numRows; row++) {
    for (var col = 0; col < numCols; col++) {

        matrix[row][col]  = Math.random() < 0.5;
        
        setLightColor(row, col);
    }
}

function setLightColor(row, col) {

    var color;

    if (matrix[row][col]) {
        color = "pink"
    } else {
        color = "gray"
    }

    var lightId = "#light-" + row + "-" + col;

    $(lightId).css("background-color", color)
}

function lightClick(row, col) {

    matrix[row][col] = !matrix[row][col];

    setLightColor(row, col);
}
```

[Back to Challenge 2](#c2)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c3h1">Challenge 3, Hint 1</a>

You should check for a victory every time a light is clicked.

[Back to Challenge 3](#c3)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c3h2">Challenge 3, Hint 2</a>

To check for a victory every time a light is clicked, update the `lightClick(...)` function
with code that checks for a victory.

[Back to Challenge 3](#c3)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c3h3">Challenge 3, Hint 3</a>

Write nested `for` loops that iterate over every row and column.

If any light is turned on, then a victory has not occured.

[Back to Challenge 3](#c3)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c3solution">Challenge 3, Solution</a>

Here is a function that returns true if, and only if, there is a victory:

```js
function checkWin() {

    var anyLightOn = false;

    for (var row = 0; row < numRows; row++) {
        for (var col = 0; col < numCols; col++) {
            if (matrix[row][col]) {
                anyLightOn = true;
            } 
        }
    }

    return !anyLightOn;

}
```

Then modify the `lightClick(...)` function to check for victory:

```js
function lightClick(row, col) {

    matrix[row][col] = !matrix[row][col];

    setLightColor(row, col);

    if (checkWin()) {
        alert("You win!")
    }
}
```

[Back to Challenge 3](#c3)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c4h1">Challenge 4, Hint 1</a>

You need to get the (row, col) values for each light to be toggled.

Write four functions:

- `above(row)`
- `below(row)`
- `left(col)`
- `right(col)`

`above(row)` should return the `row` above the given `row`.

For example:

- `above(3) == 2`
- `above(2) == 1`
- `above(1) == 0`
- `above(0) == 3`

Then you can toggle (`above(row)`, `col`), and so on for `below`, `left`, and `right`.

[Back to Challenge 4](#c4)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c4h2">Challenge 4, Hint 2</a>

Here are the `above`, `below`, `left`, `right` functions:

```js
function above(row) {
    if (row == 0) {
        return numRows -1
    } else {
        return row - 1
    }
}

function below(row) {
    if (row == numRows - 1) {
        return 0
    } else {
        return row + 1
    }
}

function left(col) {
    if (col == 0) {
        return numCols -1
    } else {
        return col - 1
    }
}

function right(col) {
    if (col == numCols - 1) {
        return 0
    } else {
        return col + 1
    }
}
```

[Back to Challenge 4](#c4)


<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c4h3">Challenge 4, Hint 3</a>

Update `lightClick(...)` to toggle each of the five lights in the cross pattern.

Here is some psuedocode:

```js
function lightClick(row, col) {

    // toggle the light at (row, col)
    // toggle the light at (above(row), col)
    // toggle the light at (below(row), col)
    // toggle the light at (row, left(col))
    // toggle the light at (row, right(col))

    if (checkWin()) {
        alert("You win!")
    }
}
```

[Back to Challenge 4](#c4)


<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c4h4">Challenge 4, Hint 4</a>

You may have written code like this:

```js
function lightClick(row, col) {

    matrix[row][col] = !matrix[row][col];
    setLightColor(row, col);
    
    matrix[above(row)][col] = !matrix[above(row)][col];
    setLightColor(above(row), col);
    
    matrix[below(row)][col] = !matrix[below(row)][col];
    setLightColor(below(row), col);
    
    ...

    if (checkWin()) {
        alert("You win!")
    }
}
```

That code can improved since it has a lot of code duplication.

Can you rewrite your code to be more concise and elegant?

[Back to Challenge 4](#c4)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c4solution">Challenge 4, Solution</a>

Add the following code to `lights-out.js`

```js
function above(row) {
    if (row == 0) {
        return numRows -1
    } else {
        return row - 1
    }
}

function below(row) {
    if (row == numRows - 1) {
        return 0
    } else {
        return row + 1
    }
}

function left(col) {
    if (col == 0) {
        return numCols -1
    } else {
        return col - 1
    }
}

function right(col) {
    if (col == numCols - 1) {
        return 0
    } else {
        return col + 1
    }
}

function lightSwitch(row, col) {
    matrix[row][col] = !matrix[row][col];
    setLightColor(row, col);
}

function lightClick(row, col) {

    lightSwitch(row, col)
    lightSwitch(above(row), col)
    lightSwitch(below(row), col)
    lightSwitch(row, left(col))
    lightSwitch(row, right(col))

    if (checkWin()) {
        alert("You win!")
    }
}

```

[Back to Challenge 4](#c4)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c5h1">Challenge 5, Hint 1</a>

Before coding a solver for Lights Out, we need to figure out how to solve the game as a player.

While playing the Lights Out game, can you figure out a pattern of clicks that will turn off exactly one light
without affecting any of the other lights in the game?

If you can figure out such a pattern, then you can turn off all the lights in the game by applying that
pattern to every light that is turned on.

[Back to Challenge 5](#c5)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c5h2">Challenge 5, Hint 2</a>

The cross pattern is the answer.

To turn off exactly one light, click the cross pattern.

For example:

<img src="solution1.png" width=400>

Clicking in the five places it says "click me" will turn the light off, without affecting
any other lights.

<img src="solution2.png" width=400>

The cross pattern wraps around the edges.

[Try it out](https://mikegagnon.github.io/lights-out/).

[Back to Challenge 5](#c5)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c5h3">Challenge 5, Hint 3</a>

Here's the algorithm you need to use for your puzzle solver:

- For every light that is turned on, simulate a click on that light.
- Keep track (in a 4x4 matrix) how many simulated clicks each light received
- If a light is clicked (simulated) an *even* number of times, then it is as if the light never needs to be clicked in the solution
- If a light is clicked (simulated) an *odd* number of times, then it is as if the light needs to be clicked exactly once

[Back to Challenge 5](#c5)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c5h4">Challenge 5, Hint 4</a>

Here's pseudocode for your puzzle solver:

```

var numClicks = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]

// calculate the solution
for each row:
  for each col:
    if the light is on at (row, col):
    
      numClicks[row][col] += 1
      numClicks[above(row)][col] += 1
      numClicks[below(row)][col] += 1
      numClicks[row][left(col)] += 1
      numClicks[row][right(col)] += 1

// display the solution
for each row:
  for each col:
    if numClicks[row][col] is odd:
      set text for the light to "click me"
    else:
      set text for the light to ""
```

[Back to Challenge 5](#c5)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## <a name="c5solution">Challenge 5, Solution</a>

Create a new function called `getLightId(...)`:

```js
function getLightId(row, col) {
    return "#light-" + row + "-" + col;
}
```

Create a new function called `solve()`:

```js
function solve() {

    var numClicks = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]

    for (var row = 0; row < numRows; row++) {
        for (var col = 0; col < numCols; col++) {
            if (matrix[row][col]) {

                numClicks[row][col] += 1
                numClicks[above(row)][col] += 1
                numClicks[below(row)][col] += 1
                numClicks[row][left(col)] += 1
                numClicks[row][right(col)] += 1

            }
        }
    }

    for (var row = 0; row < numRows; row++) {
        for (var col = 0; col < numCols; col++) {
            var lightId = getLightId(row, col)

            if (numClicks[row][col] % 2 == 1) {
                $(lightId).text("click me")
            } else {
                $(lightId).text("")
            }
        }
    }

}
```

Then call the function `solve()` in two places:

### Right after the puzzle is initialized

```
var numRows = 4
var numCols = 4

var matrix = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
]

for (var row = 0; row < numRows; row++) {
    for (var col = 0; col < numCols; col++) {

        matrix[row][col]  = Math.random() < 0.5;
        
        setLightColor(row, col);
    }
}

solve(); // <-------------------------------------

```

### Inside the `lightClick(...)` function:

```js
function lightClick(row, col) {

    lightSwitch(row, col)
    lightSwitch(above(row), col)
    lightSwitch(below(row), col)
    lightSwitch(row, left(col))
    lightSwitch(row, right(col))

    solve(); // <---------------------------

    if (checkWin()) {
        alert("You win!")
    }
}
```

[Back to Challenge 5](#c5)
