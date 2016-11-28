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

## Example 2: Paragraphs

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

## Example 1

For instance, you can use CSS to change the background color of an HTML element.

```html
<ul>
  <li style="background: pink"><i>This text is italicized</i></li>
  <li style="background: grey"><b>This text is bolded</b></li>
</ul>
```

See the [result](https://mikegagnon.github.io/lights-out/lecture02/example01.html).

## Example 2

There are several ways to sprinkle CSS on your HTML.

One of the ways is using `style="..."` inside an HTML tag (as in Example 1).

The most canonical way is to put your CSS definitions in a `.css` file,
then import that `.css` file into your HTML file.

For example, create a new file named `example02-style.css` and add the following into that file.

```css
.foo {
    background: pink;
}

.bar {
    background: grey;
}
```

This creates two CSS "classes": class `foo` and class `bar`.

Now create a file named `example02.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Lights Out</title>
    <link rel="stylesheet" type="text/css" href="example02-style.css">
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

This `<link ...>` tag imports the file `example02-style.css` into the HTML file
The `<li class="...">` tags attach CSS classes to HTML tags

See the [result](https://mikegagnon.github.io/lights-out/lecture02/example02.html).
