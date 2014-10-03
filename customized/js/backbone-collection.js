/**
 * Created by TeaEra on 2014-09-30.
 */

(function () {

    "use strict";

    window.TECollection = window.TECollection || {};

    window.TECollection.Tests = Backbone.Collection.extend({
        TEModel: window.TEModel.TestModel,
        url: '/Tests/'
    });
})();