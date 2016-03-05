'use strict';

// declare modules
angular.module('i18n', ['ngResource']);


//i18n module features
angular.module('i18n')

.service('i18nService', function($resource) {  

        this.getTranslation = function($scope, language) {
            var languageFilePath = '/AuthoringTools/multiLanguage/translation_' + language + '.json';
            console.log(languageFilePath);
            $resource(languageFilePath).get(function (data) {
                $scope.loc = data;
            });
        };

        this.initialize = function($scope, language) {
             $scope.selectedLanguage = language;
             $scope.translate();
             
        };
    }) 

.run(['$rootScope','i18nService',
    function ($rootScope, i18nService ) {
	  $rootScope.translate = function(){
	       i18nService.getTranslation($rootScope, $rootScope.selectedLanguage);
	  };
	  if (!localStorage['multiLang']) {

	      localStorage.setItem('multiLang', 'en');
	  }
	  i18nService.initialize($rootScope, localStorage['multiLang']);
    }]);

