//console.log("Your index.js file is loaded correctly!");
$(document).ready(function () {
    //this is TPbutton    
    $("#TPbutton").hover(function () {
        $("#TPbutton").css("transform", "scale(1.1,1.1)");
        $("#TPbutton").css("cursor", "pointer");
    },
        function () {
            $("#TPbutton").css("transform", "scale(1,1)");  
        });

    $("#TPbutton").click(function () {
        alert("Project case study is in progress, please check out later. ")
    });
    // this is NUbutton
    $("#NUbutton").hover(function () {
        $("#NUbutton").css("transform", "scale(1.1,1.1)");
        $("#NUbutton").css("cursor", "pointer");
    },
        function () {
            $("#NUbutton").css("transform", "scale(1,1)");
        });

    $("#NUbutton").click(function () {
        alert("Project case study is in progress, please check out later. ")
    });
    // this is ABbutton
    $("#ABbutton").hover(function () {
        $("#ABbutton").css("transform", "scale(1.1,1.1)");
        $("#ABbutton").css("cursor", "pointer");
    },
        function () {
            $("#ABbutton").css("transform", "scale(1,1)");
        });

    //$("#ABbutton").click(function () {
       // alert("Project case study is in progress, please check out later. ")
    //});
});