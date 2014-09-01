var koa = require('koa')
    , request = require('supertest')

    ;

describe('assign property', function(){
    it('should use default vars name', function(done){
        var assign = require('..')();
        var app = koa()
            .use(assign('text', 'test'))
            .use(function *(next){
                this.body = this.vars.text
            });

        request(app.listen())
            .get('/')
            .expect('test', done);
    });

    it('should parse string option', function(done){
        var assign = require('..')('assigns');
        var app = koa()
            .use(assign('text', 'test'))
            .use(function *(next){
                this.body = this.assigns.text;
            });

        request(app.listen())
            .get('/')
            .expect('test', done);
    });

    it('should parse option object', function(done){
        var assign = require('..')({
            key: 'thus'
        });
        var app = koa()
            .use(assign('text', 'test'))
            .use(function *(next){
                this.body = this.thus.text;
            });

        request(app.listen())
            .get('/')
            .expect('test', done);
    });
});
