/**
 * Created by sidona on 7/21/2015.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Article = require('./article');

    module.exports = Backbone.Collection.extend({
        model: Article,
        url: 'http://localhost:8081/articles'
    });
});