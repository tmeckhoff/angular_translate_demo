var app = angular.module('myApp', ['pascalprecht.translate']);

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
        'TITLE': 'Hello',
        'FOO': 'This is a paragraph',
        BUTTON_LANG_EN: 'english',
        BUTTON_LANG_DE: 'german',
        BUTTON_LANG_ES: 'spanish',
        BUTTON_LANG_ZH: 'chinese'
    });

    $translateProvider.translations('de', {
        'TITLE': 'Hallo',
        'FOO': 'Dies ist ein Absatz',
        BUTTON_LANG_EN: 'englisch',
        BUTTON_LANG_DE: 'deutsch',
        BUTTON_LANG_ES: 'spanisch',
        BUTTON_LANG_ZH: 'chinesisch'
    });

    $translateProvider.translations('es', {
        'TITLE': 'Hola',
        'FOO': 'Este es un parrafo',
        BUTTON_LANG_EN: 'ingles',
        BUTTON_LANG_DE: 'aleman',
        BUTTON_LANG_ES: 'espanol',
        BUTTON_LANG_ZH: 'chino'
    });

    $translateProvider.translations('zh', {
        'TITLE': 'Nin Hao',
        'FOO': 'Zhe shi duanluo',
        BUTTON_LANG_EN: 'yingyu',
        BUTTON_LANG_DE: 'deguo',
        BUTTON_LANG_ES: 'xibanya yu',
        BUTTON_LANG_ZH: 'zhongguo'
    });

    $translateProvider.preferredLanguage('en');

}]);

app.controller('LangController', ['$scope', '$translate', function ($scope, $translate) {
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };
}]);