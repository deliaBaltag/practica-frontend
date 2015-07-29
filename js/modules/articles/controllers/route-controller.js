/**
 * Created by sidona on 7/20/2015.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var MapLayout1 = require('../views/layout');


    var MapRouteController = Marionette.Controller.extend({
        showArticles: function () {
            app.showLayout(new MapLayout1);
            //app.showContacts(new MapLayout);

        }
    });

    module.exports = new MapRouteController();
});