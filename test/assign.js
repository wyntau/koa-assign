var koa = require('koa')
    , request = require('supertest')

    ;

describe('assign property', function(){
    it('should assign prefix _ when no prefix specificed', function(done){
        var assign = require('..')();
        var app = koa()
            .use(assign('text', 'test'))
            .use(function *(next){
                this.body = this._text;
            });

        request(app.listen())
            .get('/')
            .expect('test', done);
    });

    it('should assign specific prefix', function(done){
        var assign = require('..')('__');
        var app = koa()
            .use(assign('text', 'test'))
            .use(function *(next){
                this.body = this.__text;
            });

        request(app.listen())
            .get('/')
            .expect('test', done);
    });
});
