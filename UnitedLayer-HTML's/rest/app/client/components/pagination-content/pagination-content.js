app.directive('paginationContent', function() {
    return {
        restrict: "E",
        templateUrl: 'rest/app/client/components/pagination-content/pagination-content.html',
        link: function($scope, $elem, $attr) {
            console.log('pagination-content');
        }
    }
})