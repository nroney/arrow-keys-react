'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var SpecialKeysReact = {};
SpecialKeysReact._config = {};

SpecialKeysReact.config = function (config) {
    var options = ['right', 'left', 'up', 'down', 'backspace'];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var option = _step.value;

            if (config.hasOwnProperty(option)) {
                SpecialKeysReact._config[option] = config[option];
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

SpecialKeysReact.events = {
    onKeyDown: function onKeyDown(e) {
        if (e.keyCode === 37) {
            if (SpecialKeysReact._config.hasOwnProperty('left')) {
                SpecialKeysReact._config.left();
            }
        } else if (e.keyCode === 39) {
            if (SpecialKeysReact._config.hasOwnProperty('right')) {
                SpecialKeysReact._config.right();
            }
        } else if (e.keyCode === 38) {
            if (SpecialKeysReact._config.hasOwnProperty('up')) {
                SpecialKeysReact._config.up();
            }
        } else if (e.keyCode === 40) {
            if (SpecialKeysReact._config.hasOwnProperty('down')) {
                SpecialKeysReact._config.down();
            }
        } else if (e.keyCode === 8) {
            if (SpecialKeysReact._config.hasOwnProperty('backspace')) {
                SpecialKeysReact._config.backspace();
            }
        }
    }
};

exports.default = SpecialKeysReact;