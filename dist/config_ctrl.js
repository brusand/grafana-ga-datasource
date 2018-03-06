///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
System.register([], function(exports_1) {
    var GAConfigCtrl;
    return {
        setters:[],
        execute: function() {
            GAConfigCtrl = (function () {
                function GAConfigCtrl($scope) {
                }
                GAConfigCtrl.templateUrl = 'partials/config.html';
                return GAConfigCtrl;
            })();
            exports_1("GAConfigCtrl", GAConfigCtrl);
        }
    }
});
//# sourceMappingURL=config_ctrl.js.map