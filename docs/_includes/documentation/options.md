# Options []({{ site.repo }}/blob/master/docs/_includes/documentation/options.md)

---

The options are defined in `jQuery.fn.groupSelect.defaults`.

<table class="table"
       data-toggle="table"
       data-search="true"
       data-show-toggle="true"
       data-show-columns="true"
       data-mobile-responsive="true">
    <thead>
    <tr>
        <th>Name</th>
        <th>Attribute</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>-</td>
        <td>data-toggle</td>
        <td>String</td>
        <td>'group-select'</td>
        <td>Activate bootstrap group select without writing JavaScript.</td>
    </tr>
    <tr>
        <td>type</td>
        <td>data-type</td>
        <td>String</td>
        <td>'dropdown'</td>
        <td>Defines the type of group select, can only be 'button' or 'dropdown'.</td>
    </tr>
    <tr>
        <td>value</td>
        <td>data-value</td>
        <td>String</td>
        <td>'undefined'</td>
        <td>Defines the selected value of group select.</td>
    </tr>
    <tr>
        <td>data</td>
        <td>data-data</td>
        <td>Array</td>
        <td>'[]'</td>
        <td>Defines the data list of group select.</td>
    </tr>
    <tr>
        <td>defaultClass</td>
        <td>data-default-class</td>
        <td>String</td>
        <td>'btn btn-default'</td>
        <td>Defines the default button class name.</td>
    </tr>
    <tr>
        <td>primaryClass</td>
        <td>data-primary-class</td>
        <td>String</td>
        <td>'btn btn-primary'</td>
        <td>Defines the primary button class name.</td>
    </tr>
    <tr>
        <td>formatter</td>
        <td>data-formatter</td>
        <td>Function</td>
        <td>function (value) {<br>return value;<br>}</td>
        <td>Format the value display.</td>
    </tr>
    </tbody>
</table>
