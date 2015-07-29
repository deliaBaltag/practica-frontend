define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        id: 'infoTpl',
        className: 'li',
        template: '#articles-article',

        editContact: function() {
            Backbone.history.navigate('#edit/' + this.model.id, {trigger: true})
        },

        events: {
            'click .editContact': 'editContact',
            'click .deleteArticle': 'deleteArticle',
        },

        editArticle: function() {
            Backbone.history.navigate('#edit/' + this.model.id, {trigger: true})
        },


        deleteArticle: function(event){
            event.preventDefault();
            var articleId=this.options.model.attributes['id'];
            $.ajax({
                url:"http://localhost:8081/articles/"+articleId,
                type: "DELETE",
                contentType:"application/json",
                dataType: "json",
                success: function(){
                    console.log("Success");
                }
            });

            var article = _.findWhere(this.options, {'id': articleId});
            this.remove(article);
            //window.location.reload();
        }


    });
});