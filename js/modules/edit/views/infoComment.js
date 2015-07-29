/**
 * Created by Delia on 7/27/2015.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Comment = require('./comment');

    module.exports = Marionette.CompositeView.extend({
        id: 'infoComment',
        className: 'ul',
        template: '#edit-infoComment',
        itemViewContainer: '#comments',
        itemView: Comment,

        /*initialize: function() {
         debugger;
         }*/
    });
});