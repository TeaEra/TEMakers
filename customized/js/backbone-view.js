/**
 * Created by chenzhengtong on 2014/9/30.
 */

(function () {

    "use strict";

    window.view = window.view || {};

    // CONSTANT
    var BODY = "body";
    var NAVBAR = "#navbar";
    var MAIN_CONTENT = "#main-content";

    window.view.OneView = Backbone.View.extend({

        el: BODY,

        initialize: function () {
            //
            $(this.el).html(window.TETemplates.templateView());
            $(NAVBAR).html(window.TETemplates.templateNavbar);
            window.controller.showHome();
        },

        render: function (template) {
            //$(this.el).html(template);
        },

        events: {
            'click #btn-home': 'showHome',
            'click #btn-pre-sale': 'showPreSale',
            'click #btn-shop': 'showShop',
            'click #btn-vote': 'showVote',
            'click #btn-bbs': 'showBBS',
            'click #btn-register': 'showRegister',
            'click #btn-login': 'showLogin'
        },

        showHome: function () {
            window.controller.showHome()
        },

        showPreSale: function () {
            window.controller.showPreSale()
        },

        showShop: function () {
            window.controller.showShop()
        },

        showVote: function () {
            window.controller.showVote()
        },

        showBBS: function () {
            window.controller.showBBS()
        },

        showRegister: function () {
            window.controller.showRegister()
        },

        showLogin: function () {
            window.controller.showLogin()
        }
    });

})();