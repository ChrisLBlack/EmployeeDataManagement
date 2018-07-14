$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCOLLcDGKNGaL7Iam5JpKUNwVK2QTJwi7A",
        authDomain: "employeedatamanagement-582e8.firebaseapp.com",
        databaseURL: "https://employeedatamanagement-582e8.firebaseio.com",
        projectId: "employeedatamanagement-582e8",
        storageBucket: "employeedatamanagement-582e8.appspot.com",
        messagingSenderId: "169786765199"
    };
    firebase.initializeApp(config);

    var employeeName = "";
    var roleName = "";
    var startNum = 0;
    var rateNum = 0;


    $("#add-employee-btn").on("click", function () {
        
        event.preventDefault();

        employeeName = $('#employee-name-input').val().trim();
        roleName = $('#role-input').val().trim();
        startNum = $('#start-input').val().trim();
        rateNum = $('#rate-input').val().trim();
    

        firebase.database().ref().push({
            name: employeeName,
            role: roleName,
            date: startNum,
            pay: rateNum
        })

       $("#employee-name-input").val("");
       $('#role.input').val("");
       $('#start-input').val("");
       $('#rate-input').val("");

    });
});