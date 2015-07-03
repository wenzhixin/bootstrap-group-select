# Usage []({{ site.repo }}/blob/master/docs/_includes/getting-started/usage.md)

---

Include Bootstrap library (if your project doesn't use it already) in the head tag your html document.

```html
<link rel="stylesheet" href="bootstrap.min.css">
```

Include jQuery library, bootstrap library (if your project doesn't use it already) and `bootstrap-group-select.js`
in the head tag or at the very bottom of your document, just before the closing body tag (usually recommended for better performance).

```html
<script src="jquery.min.js"></script>
<script src="bootstrap.min.js"></script>
<script src="bootstrap-group-select.js"></script>
```

---

The Bootstrap Group Select can be used via data attributes or JavaScript.

## Via data attributes

Activate bootstrap table without writing JavaScript. Set `data-toggle="group-select"` on a normal div.

```html
<div data-toggle="group-select"
     data-data="Bootstrap Table, Multiple Select, Bootstrap Show Password, Bootstrap Group Select"></div>
```

## Via JavaScript

Call a bootstrap group select with id via JavaScript.

```html
<div id="gs"></div>
```

```js
$('#gs').groupSelect({
    data: [
        'Bootstrap Table', 'Multiple Select',
        'Bootstrap Show Password', 'Bootstrap Group Select'
    ]
});
```
