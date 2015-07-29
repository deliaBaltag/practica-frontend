/**
 * Created by Delia on 7/29/2015.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        id: 'update',
        template: '#update-layout',

        events: {
            'click #UpdateArticleButton': 'submitArticle',


        },

        submitArticle: function(event){
            event.preventDefault();
            var title=document.getElementById("title").value;
            var lastname=document.getElementById("lastname").value;
            var firstname=document.getElementById("firstname").value;
            var context=document.getElementById("context").value;
            var articleId=this.options.model.attributes['id'];

            $.ajax({
                url:"http://localhost:8081/articles/"+articleId,
                type: "PUT",
                data: JSON.stringify({
                    "title": title,
                    "author": {
                        "lastName": lastname,
                        "firstName": firstname
                    },
                    "context": context
                }),
                contentType:"application/json",
                dataType: "json",
                success: function(){
                    console.log("Success");
                }
            });
            //window.location.reload();
        },

    });
});