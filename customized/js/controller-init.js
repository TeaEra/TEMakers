/**
 * Created by chenzhengtong on 2014/9/25.
 */

$(document).ready(
    function () {

        "use strict";

        $("#main-content").html(TETemplates.templateProductCarousel() + "<br/>" + TETemplates.templateProductThreeColumns());

        $("#btn-login").bind("click", function () {
            window.controller.showLogin();
        });

        $("#btn-register").bind("click", function () {
            window.controller.showRegister();
        });

    }
);