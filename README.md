## koa-assign

assign property to koa context, so these properties are available in follow middlewares.

### Install

    npm install koa-assign

#### Usage

    var koa = require('koa')
        , assign = require('koa-assign')('_' /* property prefix, default to _ */)
        , app = koa()
        ;

    app
        .use(assign('test', 'text'))
        .use(function *(next){
            this.body = this._test
        })
        .listen(3000);

#### LICENSE
MIT