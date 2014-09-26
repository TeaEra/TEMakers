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

    window.controller.activateCurrentButton = function (currObj) {
        window.currButtonObj.toggleClass("active");
        currObj.toggleClass("active");
        window.currButtonObj = currObj;
    };

    window.controller.showRelevantContent = function (currObj) {
        // The id-fetching method:
        var currId = currObj[0].id;
        if (currId === "btn-login") {
            window.controller.showLogin();
        }
        else if (currId === "btn-register") {
            window.controller.showRegister();
        }
    };
})();