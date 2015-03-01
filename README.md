# inject-inline-svg
auto-embed inline svg from .svg files using gulp-inject.

## Usage

Write the following comment in `src` HTML files:

```html
<!-- (path-to-file)/(filename-without-extension):svg --><!-- endinject -->
```


## Example

When you inject `/asset/img/circle.svg` into the `src` HTML file:

```html
<!-- asset/img/circle:svg --><!-- endinject -->
```

Output:
```html
<!-- asset/img/circle:svg --><svg>...</svg><!-- endinject -->
```
