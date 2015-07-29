/**
 * Created by sidona on 7/21/2015.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Contact = require('./contact');

    module.exports = Backbone.Collection.extend({
        model: Contact,
        url: 'http://localhost:8081/articles'
    });
});
