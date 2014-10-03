/**
 * Created by chenzhengtong on 2014/9/30.
 */

(function () {

    "use strict";

    window.TEView = window.TEView || {};

    // CONSTANT
    var BODY = "body";
    var NAVBAR = "#navbar";
    var MAIN_CONTENT = "#main-content";

    window.TEView.OneView = Backbone.View.extend({

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
            'click #btn-home': 'showContent',
            'click #btn-pre-sale': 'showContent',
            'click #btn-shop': 'showContent',
            'click #btn-vote': 'showContent',
            'click #btn-bbs': 'showContent',
            'click #btn-register': 'showContent',
            'click #btn-login': 'showContent'
        },

        showContent: function(obj) {
            window.controller.showRelevantContent(obj.currentTarget.id);
        }
    });

})();