/**
 * Created by Delia on 7/29/2015.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var MapLayout = require('../views/layout');
    var Articles = require('../models/article');
    var _=require('underscore');

    var MapRouteController = Marionette.Controller.extend({
        showUpdate: function (id) {
            var articles = new Articles({
                id: id
            });
            articles.fetch().then(function (options){
                app.showLayout(new MapLayout({
                    model:new Backbone.Model(options)
                }));
            })
        }
    });

    module.exports = new MapRouteController();
});