/**
 * Created by Delia on 7/23/2015.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var RouteController = require('./controllers/route-controller-edit');

    module.exports = Marionette.AppRouter.extend({
        controller: RouteController,
        appRoutes: {
            // our default route
            "edit(/:id)": "showEdit"
        }


    });
});