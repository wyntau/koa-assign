module.exports = function(option){
  if(typeof option === 'string'){
    option = {
      key: option
    };
  }
  option = option || {};
  option.key = option.key || 'vars';

  return function(key, value){
    return function *assign(next){
      var vars = this[option.key] || (this[option.key] = {});

      if(vars.hasOwnProperty(key)){
        console.warn('already set key:', key);
      }

      vars[key] = value;

      yield next;
    };
  };
};
