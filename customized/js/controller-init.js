/**
 * Created by chenzhengtong on 2014/9/25.
 */

$(document).ready(
    function () {

        "use strict";

        window.currButtonObj = $("#btn-home");

        $("#main-content").html(TETemplates.templateProductCarousel() + "<br/>" + TETemplates.templateProductThreeColumns());

        $("#btn-login").bind("click", function () {
            window.controller.showLogin();
            window.controller.activateCurrentButton($(this));
        });

        $("#btn-register").bind("click", function () {
            window.controller.showRegister();
            window.controller.activateCurrentButton($(this));
        });

    }
);