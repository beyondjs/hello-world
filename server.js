(function (Beyond) {
    "use strict";

    let beyond = new Beyond({
        'applications': {
            'application': {
                "version": "0.1",
                "static": ["index.html"]
            }
        }
    });

    beyond.start();

})(require('beyond'));