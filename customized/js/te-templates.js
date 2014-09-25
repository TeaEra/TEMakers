/**
 * Created by chenzhengtong on 2014/9/25.
 */
(function () {

    "use strict";

    window.TETemplates = window.TETemplates || {};

    window.TETemplates.templateProductCarousel = _.template('\
    <!-- -->\
    <div class="container" id="product-carousel">\
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\
            <!-- Indicators -->\
            <ol class="carousel-indicators">\
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>\
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>\
            </ol>\
            <!-- Wrapper for slides -->\
            <div class="carousel-inner" role="listbox">\
                <div class="item active">\
                    <img src="customized/img/first-slide.svg" alt="...">\
                    <div class="carousel-caption">\
                    ...\
                    </div>\
                </div>\
                <div class="item">\
                    <img src="customized/img/second-slide.svg" alt="...">\
                    <div class="carousel-caption">\
                    ...\
                    </div>\
                </div>\
                <div class="item">\
                    <img src="customized/img/third-slide.svg" alt="...">\
                    <div class="carousel-caption">\
                        ...\
                    </div>\
                </div>\
            </div>\
            <!-- Controls -->\
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\
                <span class="glyphicon glyphicon-chevron-left"></span>\
                <span class="sr-only">Previous</span>\
            </a>\
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\
                <span class="glyphicon glyphicon-chevron-right"></span>\
                <span class="sr-only">Next</span>\
            </a>\
        </div>\
    </div>\
    ');

    window.TETemplates.templateProductThreeColumns = _.template('\
    <!-- -->\
    <div class="container" id="product-three-columns">\
        <div class="col-md-4">\
            <div class="panel panel-default">\
                <div class="panel-body">\
                    <img class="img-responsive" src="customized/img/Chrysanthemum.jpg" />\
                </div>\
                <div class="panel-footer">\
                    <h6>Title</h6>\
                    <p style="word-wrap: break-word;">\
                        <small>Author: xxxxxx</small>\
                    </p>\
                    <p style="word-wrap: break-word;">\
                        <small>\
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\
                        </small>\
                    </p>\
                </div>\
            </div>\
        </div>\
        <div class="col-md-4">\
            <div class="panel panel-default">\
                <div class="panel-body">\
                    <img class="img-responsive" src="customized/img/Desert.jpg" />\
                </div>\
                <div class="panel-footer">\
                    <h6>Title</h6>\
                    <p style="word-wrap: break-word;">\
                        <small>Author: xxxxxx</small>\
                    </p>\
                    <p style="word-wrap: break-word;">\
                        <small>\
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\
                        </small>\
                    </p>\
                </div>\
            </div>\
            </div>\
        <div class="col-md-4">\
            <div class="panel panel-default">\
                <div class="panel-body">\
                    <img class="img-responsive" src="customized/img/Hydrangeas.jpg" />\
                </div>\
                <div class="panel-footer">\
                    <h6>Title</h6>\
                    <p style="word-wrap: break-word;">\
                        <small>Author: xxxxxx</small>\
                    </p>\
                    <p style="word-wrap: break-word;">\
                        <small>\
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\
                        </small>\
                    </p>\
                </div>\
            </div>\
        </div>\
    </div>\
    ');

    window.TETemplates.templateLogin = _.template('\
    <!-- -->\
    <div class="container" id="form-login">\
        <div class="row">\
            <div class="col-md-4 col-md-offset-4">\
                <div class="panel panel-default">\
                    <div class="panel-heading">\
                        <h3 class="panel-title">Please sign in</h3>\
                    </div>\
                    <div class="panel-body">\
                        <form accept-charset="UTF-8" role="form">\
                            <fieldset>\
                                <div class="form-group">\
                                    <input class="form-control" placeholder="E-mail" name="email" type="text">\
                                </div>\
                                <div class="form-group">\
                                    <input class="form-control" placeholder="Password" name="password" type="password" value="">\
                                </div>\
                                <div class="checkbox">\
                                    <label>\
                                        <input name="remember" type="checkbox" value="Remember Me"> Remember Me\
                                    </label>\
                                </div>\
                                <input class="btn btn-lg btn-success btn-block" type="submit" value="Login">\
                            </fieldset>\
                        </form>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
    ');

    window.TETemplates.templateRegister = _.template('\
    <!-- -->\
    <div class="container" id="form-register">\
        <div class="row">\
            <div class="col-md-6 col-md-offset-3">\
                <div class="panel panel-default">\
                    <div class="panel-heading">\
                        <h3 class="panel-title">Create account</h3>\
                    </div>\
                    <div class="panel-body">\
                        <form accept-charset="UTF-8" role="form">\
                            <fieldset>\
                                <div class="form-group">\
                                    <input class="form-control" placeholder="E-mail" name="email" type="text">\
                                </div>\
                                <div class="form-group">\
                                    <input class="form-control" placeholder="User name" name="name" type="text">\
                                </div>\
                                <div class="form-group">\
                                    <input class="form-control" placeholder="Password" name="password" type="password" value="">\
                                </div>\
                                <div class="form-group">\
                                    <input class="form-control" placeholder="Password again" name="password-again" type="password" value="">\
                                </div>\
                                <input class="btn btn-lg btn-primary btn-block" type="submit" value="Register">\
                            </fieldset>\
                        </form>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
    ');

})();