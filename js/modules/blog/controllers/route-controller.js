define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var MapLayout = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showBlog: function () {
            app.showLayout(new MapLayout);
        }
    });

    module.exports = new MapRouteController();
});