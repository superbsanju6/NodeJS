var module = angular.module("admin", ["angularGrid"]);

module.controller("adminCtrl", function ($scope, $http) {

    //var irishAthletes = ['John Joe Nevin', 'Katie Taylor', 'Paddy Barnes', 'Kenny Egan', 'Darren Sutherland', 'Margaret Thatcher', 'Tony Blair', 'Ronald Regan', 'Barack Obama'];

    var columnDefs = [
        {
            //headerName: "Username", field: "username", width: 300, filter: 'set',
            //filterParams: { cellHeight: 20, values: irishAthletes }

            headerName: "Username", field: "username", width: "25%"
        },
        { headerName: "Activity", field: "activity", width: "50%" },
        { headerName: "Date", field: "date", width: "25%" }
    ];

    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: null,
        enableFilter: true
    };
    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    };
    $http({
        method: 'POST',
        url: "http://54.164.139.20:8080/api/getLogs",
        headers: headers
    }).success(function (response) {
        $scope.gridOptions.rowData = response;
        $scope.gridOptions.api.onNewRows();
        

    })
                .error(function () {
                    alert("Can't get the log data");
                });
    //$http.get("../olympicWinners.json")
    //    .then(function (res) {
    //        $scope.gridOptions.rowData = res.data;
    //        $scope.gridOptions.api.onNewRows();
    //    });
});
