/**
 * Created by chenzhengtong on 2014/9/25.
 */

"use strict";

var templateProductCarousel = _.template('\
    \<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\
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
    ');

var templateProductThreeColumns = _.template('\
    \<div class="col-md-4">\
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
    ');