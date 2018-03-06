///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
System.register([], function(exports_1) {
    var GADatasource;
    return {
        setters:[],
        execute: function() {
            GADatasource = (function () {
                /** @ngInject */
                function GADatasource(instanceSettings, backendSrv, templateSrv, $q) {
                    this.backendSrv = backendSrv;
                    this.templateSrv = templateSrv;
                    this.$q = $q;
                    this.name = instanceSettings.name;
                    this.id = instanceSettings.id;
                }
                GADatasource.prototype.query = function (options) {
                    throw new Error("Query Support not implemented yet.");
                };
                GADatasource.prototype.annotationQuery = function (options) {
                    throw new Error("Annotation Support not implemented yet.");
                };
                GADatasource.prototype.metricFindQuery = function (query) {
                    throw new Error("Template Variable Support not implemented yet.");
                };
                GADatasource.prototype.testDatasource = function () {
                    return this.$q.when({
                        status: 'error',
                        message: 'Data Source is just a template and has not been implemented yet.',
                        title: 'Error'
                    });
                };
                return GADatasource;
            })();
            exports_1("default", GADatasource);
        }
    }
});
//# sourceMappingURL=datasource.js.map