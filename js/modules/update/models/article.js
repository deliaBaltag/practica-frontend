/**
 * Created by Delia on 7/24/2015.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Backbone.Model.extend({
        urlRoot: 'http://localhost:8081/articles/article/'
    });

});