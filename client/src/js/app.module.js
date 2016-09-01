(function() {
    'use strict';

    angular
        .module('app', ['toastr'])
        .value('apiUrl', 'http://localhost:59318/api/');
})();