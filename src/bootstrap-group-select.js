/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * https://github.com/wenzhixin/bootstrap-group-select
 * version: 1.0.0
 */

!function ($) {

    'use strict';

    // TOOLS DEFINITION
    // ======================

    // it only does '%s', and return '' when arguments are undefined
    var sprintf = function(str) {
        var args = arguments,
            flag = true,
            i = 1;

        str = str.replace(/%s/g, function () {
            var arg = args[i++];

            if (typeof arg === 'undefined') {
                flag = false;
                return '';
            }
            return arg;
        });
        if (flag) {
            return str;
        }
        return '';
    };

    var calculateObjectValue = function (self, name, args, defaultValue) {
        var func = name;

        if (typeof name === 'string') {
            // support obj.func1.func2
            var names = name.split('.');

            if (names.length > 1) {
                func = window;
                $.each(names, function (i, f) {
                    func = func[f];
                });
            } else {
                func = window[name];
            }
        }
        if (typeof func === 'object') {
            return func;
        }
        if (typeof func === 'function') {
            return func.apply(self, args);
        }
        if (!func && sprintf(name, args)) {
            return sprintf(name, args);
        }
        return defaultValue;
    };

    // GROUP SELECT CLASS DEFINITION
    // ======================

    var GroupSelect = function(element, options) {
        this.options = options;
        this.$el = $(element);

        this.init();
    };

    GroupSelect.DEFAULTS = {
        type: 'button', // button, dropdown
        value: undefined,
        data: [],
        defaultClass: 'btn btn-default',
        primaryClass: 'btn btn-primary',
        formatter: function (value) {
            return value;
        },
        onSelect: function (value) {
            return false;
        }
    };

    GroupSelect.EVENTS = {
        'select.bs.group-select': 'onSelect'
    };

    GroupSelect.prototype.init = function() {
        this.initGroup();
        this.initData();
    };

    GroupSelect.prototype.initGroup = function () {
        this.$el.addClass('btn-group')
            .attr('role', 'group');
    };

    GroupSelect.prototype.initData = function () {
        var that = this,
            data = this.options.data;

        if (typeof data === 'string') {
            data = data.replace('[', '').replace(']', '').replace(/ /g, '').split(',');
        }

        if ($.inArray(that.options.value, data) === -1) {
            that.options.value = data[0];
        }

        if (this.options.type !== 'dropdown') {
            this.initButtonList(data);
        } else {
            this.initDropdownList(data);
        }
    };

    GroupSelect.prototype.initButtonList = function (data) {
        var that = this,
            html = [];

        $.each(data, function (i, value) {
            var className = that.options.defaultClass;

            if (that.options.value === value) {
                className = that.options.primaryClass;
            }
            html.push(sprintf('<button type="button" class="%s" data-value="%s">%s</button>',
                className, value,
                calculateObjectValue(that.options, that.options.formatter, [value], value)));
        });

        this.$el.html(html.join(''));

        this.$el.find('button').off('click').on('click', function () {
            $(this).attr('class', that.options.primaryClass)
                .siblings().attr('class', that.options.defaultClass);
            that.options.value = $(this).data('value');
            that.trigger('select', that.options.value);
        });
    };

    GroupSelect.prototype.initDropdownList = function (data) {
        var that = this,
            html = [];

        html.push(sprintf('<button class="%s dropdown-toggle" type="button" data-toggle="dropdown">',
            that.options.defaultClass),
            sprintf('<span class="value">%s</span> <span class="caret"></span>',
                calculateObjectValue(that.options, that.options.formatter,
                [this.options.value], this.options.value)),
            '</button>',
            '<ul class="dropdown-menu" role="menu">');

        $.each(data, function (i, value) {
            html.push(sprintf('<li data-value="%s" class="%s"><a href="javascript:void(0)">%s</a></li>',
                value, that.options.value === value ? 'active' : '',
                calculateObjectValue(that.options, that.options.formatter, [value], value)));
        });

        html.push('</ul>');
        this.$el.html(html.join(''));

        this.$el.find('li').off('click').on('click', function () {
            that.options.value = $(this).data('value');

            that.$el.find('.value').text(calculateObjectValue(that.options,
                that.options.formatter, [that.options.value], that.options.value));

            $(this).addClass('active')
                .siblings().removeClass('active');
            that.trigger('select', that.options.value);
        });
    };

    GroupSelect.prototype.getValue = function () {
        return this.options.value;
    };

    GroupSelect.prototype.setValue = function (value) {
        this.options.value = value;

        if (this.options.type !== 'dropdown') {
            this.$el.find(sprintf('button[data-value="%s"]', value))
                .attr('class', this.options.primaryClass)
                .siblings().attr('class', this.options.defaultClass);
        } else {
            this.$el.find('button span.value').text(calculateObjectValue(
                this.options, this.options.formatter,
                [this.options.value], this.options.value));
            this.$el.find(sprintf('li[data-value="%s"]', value))
                .addClass('active')
                .siblings().removeClass('active');
        }
    };

    GroupSelect.prototype.getData = function () {
        return this.options.data;
    };

    GroupSelect.prototype.setData = function (data) {
        this.options.data = data;
        this.initData();
    };

    GroupSelect.prototype.trigger = function (name) {
        var args = Array.prototype.slice.call(arguments, 1);

        name += '.bs.group-select';
        this.options[GroupSelect.EVENTS[name]].apply(this.options, args);
        this.$el.trigger($.Event(name), args);
    };

    // GROUP SELECT PLUGIN DEFINITION
    // =======================

    var old = $.fn.groupSelect;

    $.fn.groupSelect = function() {
        var option = arguments[0],
            args = arguments,

            value,
            allowedMethods = [
                'getValue', 'setValue',
                'getData', 'setData'
            ]; // public function

        this.each(function() {
            var $this = $(this),
                data = $this.data('bs.group-select'),
                options = $.extend({}, GroupSelect.DEFAULTS, $this.data(),
                    typeof option === 'object' && option);

            if (typeof option === 'string') {
                if ($.inArray(option, allowedMethods) < 0) {
                    throw "Unknown method: " + option;
                }
                value = data[option](args[1]);
            } else {
                if (!data) {
                    data = new GroupSelect($this, options);
                    $this.data('bs.group-select', data);
                } else {
                    data.init(options);
                }
            }
        });

        return typeof value === 'undefined' ? this : value;
    };

    $.fn.groupSelect.Constructor = GroupSelect;
    $.fn.groupSelect.defaults = GroupSelect.DEFAULTS;

    // GROUP SELECT NO CONFLICT
    // =================

    $.fn.groupSelect.noConflict = function() {
        $.fn.groupSelect = old;
        return this;
    };

    $(function () {
        $('[data-toggle="group-select"]').groupSelect();
    });

}(window.jQuery);