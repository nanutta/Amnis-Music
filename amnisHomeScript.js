"use strict";
// Javascript written by Noah Anutta
//prevent submit
$(document).ready(function() {
    $("form").submit(function(e){
        alert('submit intercepted');
        e.preventDefault(e);
        $("form")[0].reset();
    });
});

// Reading JSON data about library from Postman and putting data into the page as wanted.
$.ajax({
    type: "GET",
    url: "https://993e544b-52bb-4771-ad0a-3f48c38ad225.mock.pstmn.io/project",
    data: "data",
    dataType: "json",
    success: function (response) {
        console.log(response);
        //First Project featured
        $(".featured a:eq(1)").attr("href", "lenah.html");
        $(".featured img:eq(0)").attr("src", response.promise.coverURL);
        $(".featured img:eq(1)").attr("src", response.promise.profileURL);
        $(".featured h3:eq(0)").html(response.promise.projName);
        $(".featured h3:eq(1)").html(response.promise.projArtist);
        $(".featured p:eq(0)").html(response.promise.projDesc);
        $(".featured p:eq(1)").html(response.promise.artBio);
        //Second Project featured
        $(".featured a:eq(2)").attr("href", "abi.html");
        $(".featured img:eq(2)").attr("src", response.need.coverURL);
        $(".featured img:eq(3)").attr("src", response.need.profileURL);
        $(".featured h3:eq(2)").html(response.need.projName);
        $(".featured h3:eq(3)").html(response.need.projArtist);
        $(".featured p:eq(2)").html(response.need.projDesc);
        $(".featured p:eq(3)").html(response.need.artBio);

        //Third Project featured
        $(".featured a:eq(3)").attr("href", "noah.html");
        $(".featured img:eq(4)").attr("src", response.noah.coverURL);
        $(".featured img:eq(5)").attr("src", response.noah.profileURL);
        $(".featured h3:eq(4)").html(response.noah.projName);
        $(".featured h3:eq(5)").html(response.noah.projArtist);
        $(".featured p:eq(4)").html(response.noah.projDesc);
        $(".featured p:eq(5)").html(response.noah.artBio);

        //Fourth Project featured
        $(".featured a:eq(4)").attr("href", "cozy.html");
        $(".featured img:eq(6)").attr("src", response.realMe.coverURL);
        $(".featured img:eq(7)").attr("src", response.realMe.profileURL);
        $(".featured h3:eq(6)").html(response.realMe.projName);
        $(".featured h3:eq(7)").html(response.realMe.projArtist);
        $(".featured p:eq(6)").html(response.realMe.projDesc);
        $(".featured p:eq(7)").html(response.realMe.artBio);
    }
});