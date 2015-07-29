/**
 * Created by sidona on 7/20/2015.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var InfoTpl = require('./infoTpl');
    var Articles = require('../models/articles');

module.exports = Marionette.Layout.extend({
    id: 'articles',
    template: '#articles-layout',

    regions: {
        infoTpl: '#infoTpl'
    },

    onRender: function() {
        var self = this;
        var articles = new Articles();
        articles.fetch().then(function(options) {

            self.infoTpl.show(new InfoTpl({
                collection: new Backbone.Collection(options)
            }));
        })

    }

});


});