/**
 * Created by Administrator on 2015/12/11.
 *  Description: this is the client side app domain ,controller.
 */


var index= angular.module("eamon",[]);


index.controller("AppCtrl", function ($http) {

    var app =this;
    var  url="http://localhost:3000";

    app.saveProduct = function (newProduct) {

        var new_product ={name:newProduct};
        $http.post(url+"/add",new_product).success(function () {
            loadProducts();
        });
    }

    function loadProducts() {
        $http.get(url).success(function (products) {
            app.products = products;
        });
    }
    loadProducts();

})