define(function(require, exports, module) {
    var app = require('app');

    var BlogRouter = require('modules/blog/router');
    var RegionsRouter = require('modules/articles/router');
    var EditRouter = require('modules/edit/router');
    var AddArticleRouter = require('modules/addArticle/router');
    var UpdateArticle=require('modules/update/router');

    var RouterInitializer = Marionette.Controller.extend({
        initialize: function() {
            app.on('initialize:after', function(){

                new BlogRouter();
                new RegionsRouter();
                new EditRouter();
                new AddArticleRouter();
                new UpdateArticle();
            });
        }
    });

    module.exports = new RouterInitializer();
});
