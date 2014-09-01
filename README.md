## koa-assign

assign property to koa context, so these properties are available in follow middlewares.

### Install

    npm install koa-assign

#### Usage
There is three usages.

```js
var koa = require('koa')
    , assign = require('koa-assign')()
    , assign2 = require('koa-assign')('assigns')
    , assign3 = require('koa-assign')({
        key: 'thus'
    })
    , app = koa()
    ;

app
    .use(assign('test', 'text'))
    .use(assign2('test', 'assign'))
    .use(assign3('test', 'thus'))
    .use(function *(next){
        // this.vars.test === 'text'
        // this.assigins.test === 'assign'
        // this.thus.test === 'thus'
    })
    .listen(3000);
```

#### LICENSE
MIT