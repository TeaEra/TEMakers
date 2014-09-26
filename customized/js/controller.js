/**
 * Created by chenzhengtong on 2014/9/25.
 */

(function () {

    "use strict";

    window.controller = window.controller || {};

    window.controller.showHome = function () {
        $("#main-content").html(
                TETemplates.templateProductCarousel()
                + "<br/>"
                + TETemplates.templateProductThreeColumns()
        );
    }

    window.controller.showLogin = function () {
        $("#main-content").html(TETemplates.templateLogin());
    };

    window.controller.showRegister = function () {
        $("#main-content").html(TETemplates.templateRegister());
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
        //
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