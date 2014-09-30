/**
 * Created by chenzhengtong on 2014/9/25.
 */

(function () {

    "use strict";

    window.controller = window.controller || {};

    // CONSTANT
    var MAIN_CONTENT = "#main-content";

    window.controller.showHome = function () {
        $(MAIN_CONTENT).html(
                TETemplates.templateProductCarousel()
                + "<br/>"
                + TETemplates.templateProductThreeColumns()
                + "<br/>"
                + TETemplates.templateProductThreeColumns()
        );
    }

    window.controller.showLogin = function () {
        $(MAIN_CONTENT).html(TETemplates.templateLogin());
    };

    window.controller.showRegister = function () {
        $(MAIN_CONTENT).html(TETemplates.templateRegister());
    };

    window.controller.showPreSale = function () {
        //
    };

    window.controller.showShop = function () {
        //
    };

    window.controller.showVote = function () {
        //
    };

    window.controller.showBBS = function () {
        $(MAIN_CONTENT).html(
            TETemplates.templateBBSSection()
            + TETemplates.templateBBSSection()
        );
    };

    window.controller.showProfile = function () {
        $(MAIN_CONTENT).html(
           TETemplates.templateProfile()
        );
    };

    window.controller.showProfileModification = function () {
        $(MAIN_CONTENT).html(
            TETemplates.templateProfileModification()
        );
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
        else if (currId === "btn-home") {
            window.controller.showHome();
        }
        else if (currId === "btn-pre-sale") {
            window.controller.showPreSale();
        }
        else if (currId === "btn-shop") {
            window.controller.showShop();
        }
        else if (currId === "btn-vote") {
            window.controller.showVote();
        }
        else if (currId === "btn-bbs") {
            window.controller.showBBS();
        }
    };
})();