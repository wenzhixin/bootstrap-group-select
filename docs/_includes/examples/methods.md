# Methods []({{ site.repo }}/blob/master/docs/_includess/examples/methods.md)

<div id="methods1"
     data-toggle="group-select"
     data-data="getValue, setValue, getData, setData, enable, disable"
     data-value=""></div>

<div id="methods2"
     data-toggle="group-select"
     data-type="dropdown"
     data-data="Bootstrap Table, Multiple Select, Bootstrap Show Password, Bootstrap Group Select"
     data-value="Bootstrap Group Select"></div>

<script>
    $(function () {
        var $methods1 = $('#methods1'),
            $methods2 = $('#methods2');

        $methods1.on('select.bs.group-select', function (e, value) {
            switch (value) {
                case 'getValue':
                case 'getData':
                    alert(value + ': ' + JSON.stringify($methods2.groupSelect(value)));
                    break;
                case 'setValue':
                    $methods2.groupSelect(value, 'Bootstrap Group Select');
                    break;
                case 'setData':
                    $methods2.groupSelect(value, ['Bootstrap Group Select', 'Bootstrap Table']);
                    break;
                case 'enable':
                case 'disable':
                    $methods2.groupSelect(value);
                    break;
            }
        });
    });
</script>

```html
<div id="methods1"
     data-toggle="group-select"
     data-data="getValue, setValue, getData, setData, enable, disable"
     data-value=""></div>

<div id="methods2"
     data-toggle="group-select"
     data-type="dropdown"
     data-data="Bootstrap Table, Multiple Select, Bootstrap Show Password, Bootstrap Group Select"
     data-value="Bootstrap Group Select"></div>

<script>
    $(function () {
        var $methods1 = $('#methods1'),
            $methods2 = $('#methods2');

        $methods1.on('select.bs.group-select', function (e, value) {
            switch (value) {
                case 'getValue':
                case 'getData':
                    alert(value + ': ' + JSON.stringify($methods2.groupSelect(value)));
                    break;
                case 'setValue':
                    $methods2.groupSelect(value, 'Bootstrap Group Select');
                    break;
                case 'setData':
                    $methods2.groupSelect(value, ['Bootstrap Group Select', 'Bootstrap Table']);
                    break;
                case 'enable':
                case 'disable':
                    $methods2.groupSelect(value);
                    break;
            }
        });
    });
</script>
```
