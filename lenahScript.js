$(function(){
    $("#accordion").accordion();
    $.ajax({
        type: "GET",
        url: "https://993e544b-52bb-4771-ad0a-3f48c38ad225.mock.pstmn.io/project",
        data: "data",
        dataType: "json",
        success: function (response) {
            console.log(response);
            //--------------------------------Adding Music Titles, and Project Info
            //GO THROUGH ALL TRACKS TO RENAME DOM ELEMENTS
            for(let i = 0; i < response.promise.tracklist.length; i++){
                $(`#accordion h3:eq(${i})`).html(response.promise.tracklist[i]);
            }
            $("#projInfo h2:eq(0)").html(response.promise.projName);
            $("#projInfo h2:eq(1)").html(response.promise.projArtist);
            $("#projInfo p").html(response.promise.projDesc);
            $("#projInfo img:eq(0)").attr("src", response.promise.coverURL);
            $("#projInfo img:eq(1)").attr("src", response.promise.profileURL);
            // AND MORE SECTION
            //First Project Feature
            $(".featured a:eq(1)").attr("href", "abi.html");
            $(".featured img:eq(0)").attr("src", response.need.coverURL);
            $(".featured img:eq(1)").attr("src", response.need.profileURL);
            $(".featured h3:eq(0)").html(response.need.projName);
            $(".featured h3:eq(1)").html(response.need.projArtist);
            $(".featured p:eq(0)").html(response.need.projDesc);
            $(".featured p:eq(1)").html(response.need.artBio);
            //Second Project featured
            $(".featured a:eq(2)").attr("href", "noah.html");
            $(".featured img:eq(2)").attr("src", response.noah.coverURL);
            $(".featured img:eq(3)").attr("src", response.noah.profileURL);
            $(".featured h3:eq(2)").html(response.noah.projName);
            $(".featured h3:eq(3)").html(response.noah.projArtist);
            $(".featured p:eq(2)").html(response.noah.projDesc);
            $(".featured p:eq(3)").html(response.noah.artBio);

            //Third Project featured
            $(".featured a:eq(3)").attr("href", "atlas.html");
            $(".featured img:eq(4)").attr("src", response.pipeDown.coverURL);
            $(".featured img:eq(5)").attr("src", response.pipeDown.profileURL);
            $(".featured h3:eq(4)").html(response.pipeDown.projName);
            $(".featured h3:eq(5)").html(response.pipeDown.projArtist);
            $(".featured p:eq(4)").html(response.pipeDown.projDesc);
            $(".featured p:eq(5)").html(response.pipeDown.artBio);

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
});