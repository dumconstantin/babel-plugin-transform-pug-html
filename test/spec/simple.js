
var spec = {
  template: pug `
div
  p This text belongs to the paragraph tag.
  br
  .
    This text belongs to the div tag.
`,
  expected: `
<div>
  <p>This text belongs to the paragraph tag.</p>
  <br/>
  This text belongs to the div tag.
</div>`
}
