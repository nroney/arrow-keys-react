let SpecialKeysReact = {};

SpecialKeysReact._config = {};

SpecialKeysReact.config = (config) => {
    const options = ['right', 'left', 'up', 'down', 'backspace', 'enter'];
    for (let option of options) {
        if (config.hasOwnProperty(option)) {
            SpecialKeysReact._config[option] = config[option];
        }
    }
};

SpecialKeysReact.events = {
    onKeyDown: (e) => {
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
        } else if (e.keyCode === 13) {
            if (SpecialKeysReact._config.hasOwnProperty('enter')) {
                SpecialKeysReact._config.enter();
            }
        }
    }
};

export default SpecialKeysReact;