# Events []({{ site.repo }}/blob/master/docs/_includes/examples/events.md)

<div id="eventsGs1"
     data-toggle="group-select"
     data-data="Bootstrap Table, Multiple Select, Bootstrap Show Password, Bootstrap Group Select"
     data-value="Bootstrap Group Select"></div>
<script>
    $(function () {
        $('#eventsGs1').on('select.bs.group-select', function (e, value) {
            alert('On select: ' + value);
        });
    });
</script>

```html
<div id="eventsGs1"
     data-toggle="group-select"
     data-data="Bootstrap Table, Multiple Select, Bootstrap Show Password, Bootstrap Group Select"
     data-value="Bootstrap Group Select"></div>
<script>
    $(function () {
        $('#eventsGs1').on('select.bs.group-select', function (e, value) {
            alert('On select: ' + value);
        });
    });
</script>
```

<div id="eventsGs2"
     data-type="dropdown"
     data-toggle="group-select"
     data-data="Bootstrap Table, Multiple Select, Bootstrap Show Password, Bootstrap Group Select"
     data-value="Bootstrap Group Select"></div>
<script>
    $(function () {
        $('#eventsGs2').on('select.bs.group-select', function (e, value) {
            alert('On select: ' + value);
        });
    });
</script>

```html
<div id="eventsGs"
     data-toggle="group-select"
     data-data="Bootstrap Table, Multiple Select, Bootstrap Show Password, Bootstrap Group Select"
     data-value="Bootstrap Group Select"></div>
<script>
    $(function () {
        $('#eventsGs2').on('select.bs.group-select', function (e, value) {
            alert('On select: ' + value);
        });
    });
</script>
```
