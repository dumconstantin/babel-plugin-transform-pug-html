# babel-plugin-transform-pug-html
Transforms "pug" tagged template literals to html strings

## Usage
Just add to your ``` .babelrc ```:
```
{
  ...
  "plugins": ["transform-pug-html"]
}
```

Then anywhere in your code you can write:

```
pug `
div
  p This text belongs to the paragraph tag.
  br
  .
    This text belongs to the div tag.
`

// Which produces:

`<div>
  <p>This text belongs to the paragraph tag.</p>
  <br/>
  This text belongs to the div tag.
</div>`
```
