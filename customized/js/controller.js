/**
 * Created by chenzhengtong on 2014/9/25.
 */

(function () {

    "use strict";

    window.controller = window.controller || {};

    window.controller.showLogin = function () {
        $("#main-content").html(TETemplates.templateLogin());
    };

    window.controller.showRegister = function () {
        $("#main-content").html(TETemplates.templateRegister());
    };
})();