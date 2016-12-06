# Becoming dangerous in JS + HTML + CSS

> "A little knowledge is a dangerous thing." — Alexander Pope

Let's make a game called Lights Out, while learning the bare essentials of JS + HTML + CSS.
I assume you’ve already taken [Codecademy’s JavaScript course](https://www.codecademy.com/learn/javascript).

These lecture notes are just notes; they are intended to be accompanied with in-person teaching.

My approach in these lectures is to throw you in the deep end, and show you just enough
to keep your head above water. In that spirit: your first task is to [learn the game Lights Out](https://mikegagnon.github.io/lights-out/).

# Lecture 1. Intro to HTML

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

# Lecture 2. Intro to CSS

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

# Lecture 3. The \<div> tag

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

# Lecture 4

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
