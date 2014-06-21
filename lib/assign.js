module.exports = function(prefix){
    prefix = prefix || '_';

    return function(key, value){
        key = prefix + key;
        return function *assign(next){
            this[key] = value;
            yield next;
        };
    };
};
