/**
 * Created by Delia on 7/27/2015.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        id: 'infoComment',
        className: 'li',
        template: '#edit-comment'

    });
});