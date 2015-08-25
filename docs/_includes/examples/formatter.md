# Formatter []({{ site.repo }}/blob/master/docs/_includess/examples/formatter.md)

<div data-toggle="group-select"
     data-data="Bootstrap Table, Multiple Select, Bootstrap Show Password, Bootstrap Group Select"
     data-value="Bootstrap Group Select"
     data-formatter="<i class='glyphicon glyphicon-heart'></i> %s"></div>

```html
<div data-toggle="group-select"
     data-data="Bootstrap Table, Multiple Select, Bootstrap Show Password, Bootstrap Group Select"
     data-value="Bootstrap Group Select"
     data-formatter="<i class='glyphicon glyphicon-heart'></i> %s"></div>
```

<div data-toggle="group-select"
     data-type="dropdown"
     data-primary-class="btn btn-default"
     data-data="[0,1,2,3]"
     data-value="3"
     data-formatter="starFormatter"></div>

<script>
function starFormatter(value) {
     var name = [
          'Bootstrap Table', 'Multiple Select', 
          'Bootstrap Show Password', 'Bootstrap Group Select'
     ][value];

     return '<i class="glyphicon glyphicon-star"></i> ' + name;
}
</script>

```html
<div data-toggle="group-select"
     data-type="dropdown"
     data-primary-class="btn btn-default"
     data-data="[0,1,2,3]"
     data-value="3"
     data-formatter="starFormatter"></div>

<script>
    function starFormatter(value) {
        var name = [
            'Bootstrap Table', 'Multiple Select',
            'Bootstrap Show Password', 'Bootstrap Group Select'
        ][value];

        return '<i class="glyphicon glyphicon-star"></i> ' + name;
    }
</script>
```
