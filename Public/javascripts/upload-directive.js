/**
 * Created by Administrator on 2015/12/28.
 */

var app= angular.module("eamon",[]);


//定义控制器
app.controller("dirUploadCtrl",function($scope,$http,fileReader){

    $scope.getFile = function () {
        fileReader.readAsDataUrl($scope.file, $scope)
            .then(function(result) {
                $scope.imageSrc = result;
            });
    };


    var url="http://127.0.0.1:3000";



    $scope.goupload=function(){

        // 组装表单数据
        var postData = {
            vacationType: $scope.leave.type,
            reason: $scope.leave.reason,
            familyRelation: +$scope.leave.type == 7 ? $scope.leave.relation : "",
            startTime: startTime,
            fileName: $scope.myFile,
            realDays: +$scope.leave.type == 8 ? $scope.leave.timeLong : ""
        };
        postMultipart('http://127.0.0.1:3000/upload/file', postData);

        function postMultipart(url, data) {
            var fd = new FormData();
            angular.forEach(data, function(val, key) {
                fd.append(key, val);
            });
            var args = {
                method: 'POST',
                url: url,
                data: fd,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            };
            return $http(args);
        }

    };



    var path ='111122';
    var data=  {
        name:path,
        other:'others'
    };

    $scope.testfunction =function() {

        var config = {
            headers: {'Content-Type': undefined}
        };

        $http.post(url + '/upload/file', data, config)
            .success(function (reg_return) {

            var result = reg_return.reg_result;
            if (result.result === true) {

            }

        }).error(function(data, status, headers, config) {
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);

            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };


    $scope.goSubmit =function(){

        var config = {
            headers : { 'Content-Type': undefined }
        };

        $http.post(url+'/upload/file',data,config).success(function (reg_return) {
            var result = reg_return.reg_result;
            if(result.result === true){

            }
        }).error(function(data, status, headers, config) {
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);

            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

    };




});

//定义指令
app.directive('fileModel', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, ngModel) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            element.bind('change', function(event){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
                //附件预览
                scope.file = (event.srcElement || event.target).files[0];
                scope.getFile();
            });
        }
    };
});

app.factory('fileReader',function($q){
    var onLoad = function(reader, deferred, scope) {
        return function () {
                scope.$apply(function () {
                deferred.resolve(reader.result);
            });
        };
    };

    var onError = function (reader, deferred, scope) {
        return function () {
            scope.$apply(function () {
                deferred.reject(reader.result);
            });
        };
    };

    var getReader = function(deferred, scope) {
        var reader = new FileReader();
        reader.onload = onLoad(reader, deferred, scope);
        reader.onerror = onError(reader, deferred, scope);
        return reader;
    };

    var readAsDataURL = function (file, scope) {
        var deferred = $q.defer();
        var reader = getReader(deferred, scope);
        reader.readAsDataURL(file);
        return deferred.promise;
    };

    return {
        readAsDataUrl: readAsDataURL
    };
});