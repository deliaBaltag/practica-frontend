/**
 * Created by Delia on 7/23/2015.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
   var InfoComment = require('./infoComment');
    var Comments = require('../models/comment');
    var _=require('underscore');

    module.exports = Marionette.Layout.extend({
        id: 'edit',
        template: '#edit-layout',

        regions: {
            infoComment: '#infoComment'
        },

         //initialize: function() {
           // this.collection = new Backbone.Collection() // ca rama intra  array-ul de comments
         //},

        onRender: function() {
           var self = this;
           var comments = this.options.model.attributes['comments'];
          //  comments.fetch().then(function(options) {

             self.infoComment.show(new InfoComment({
                  collection: new Backbone.Collection(comments)
             }));
            //})

        },


        events: {
            'click #AddCommentButton': 'submitComment',
            'click .updateArticle': 'updateArticle',


        },

        updateArticle: function() {
            Backbone.history.navigate('#update/' + this.model.id, {trigger: true})
        },

        submitComment: function(event){
            event.preventDefault();
            var text=document.getElementById("add-box").value;
            var articleId=this.options.model.attributes['id'];

            $.ajax({
                url:"http://localhost:8081/articles/"+articleId+ "/comments",
                type: "PUT",
                data: JSON.stringify({
                    "text": text
                }),
                contentType:"application/json",
                dataType: "json",
                success: function(){
                    console.log("Success");
                }
            });
            //window.location.reload();

            var size = this.options.model.attributes['comments'].length;
            this.options.model.attributes['comments'][size] = JSON.parse(JSON.stringify({"text": text}));
            this.onRender();
        },





    });

});