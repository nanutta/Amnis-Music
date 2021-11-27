$(function(){
    $("#accordion").accordion();
    $("#browseMenu").tabs();
});
// -----------------------------Getting Data
$.ajax({
    type: "GET",
    url: "https://993e544b-52bb-4771-ad0a-3f48c38ad225.mock.pstmn.io/project",
    data: "data",
    dataType: "json",
    success: function (response) {
        console.log(response);
        // -------------------------------OUR PICKS
        // 1
        $("#tabs-1 a:eq(0)").attr("href", "abi.html");
        $("#tabs-1 img:eq(0)").attr("src", response.need.coverURL);
        $("#tabs-1 img:eq(1)").attr("src", response.need.profileURL);
        $("#tabs-1 h3:eq(0)").html(response.need.projName);
        $("#tabs-1 h3:eq(1)").html(response.need.projArtist);
        // 2
        $("#tabs-1 a:eq(1)").attr("href", "lenah.html");
        $("#tabs-1 img:eq(2)").attr("src", response.promise.coverURL);
        $("#tabs-1 img:eq(3)").attr("src", response.promise.profileURL);
        $("#tabs-1 h3:eq(2)").html(response.promise.projName);
        $("#tabs-1 h3:eq(3)").html(response.promise.projArtist);
        // 3
        $("#tabs-1 a:eq(2)").attr("href", "noah.html");
        $("#tabs-1 img:eq(4)").attr("src", response.noah.coverURL);
        $("#tabs-1 img:eq(5)").attr("src", response.noah.profileURL);
        $("#tabs-1 h3:eq(4)").html(response.noah.projName);
        $("#tabs-1 h3:eq(5)").html(response.noah.projArtist);
        // 4
        $("#tabs-1 a:eq(3)").attr("href", "atlas.html");
        $("#tabs-1 img:eq(6)").attr("src", response.pipeDown.coverURL);
        $("#tabs-1 img:eq(7)").attr("src", response.pipeDown.profileURL);
        $("#tabs-1 h3:eq(6)").html(response.pipeDown.projName);
        $("#tabs-1 h3:eq(7)").html(response.pipeDown.projArtist);
        // 5
        $("#tabs-1 a:eq(4)").attr("href", "cozy.html");
        $("#tabs-1 img:eq(8)").attr("src", response.realMe.coverURL);
        $("#tabs-1 img:eq(9)").attr("src", response.realMe.profileURL);
        $("#tabs-1 h3:eq(8)").html(response.realMe.projName);
        $("#tabs-1 h3:eq(9)").html(response.realMe.projArtist);
        // -------------------------------ARTISTS
        // 1
        $("#tabs-2 h3:eq(0)").html(response.need.projArtist);
        $("#tabs-2 a:eq(0)").attr("href", "abi.html");
        $("#tabs-2 img:eq(0)").attr("src", response.need.profileURL);
        $("#tabs-2 p:eq(0)").html(response.need.artBio);
        // 2
        $("#tabs-2 h3:eq(1)").html(response.noah.projArtist);
        $("#tabs-2 a:eq(1)").attr("href", "noah.html");
        $("#tabs-2 img:eq(1)").attr("src", response.noah.profileURL);
        $("#tabs-2 p:eq(1)").html(response.noah.artBio);
        // 3
        $("#tabs-2 h3:eq(2)").html(response.pipeDown.projArtist);
        $("#tabs-2 a:eq(2)").attr("href", "atlas.html");
        $("#tabs-2 img:eq(2)").attr("src", response.pipeDown.profileURL);
        $("#tabs-2 p:eq(2)").html(response.pipeDown.artBio);
        // 4
        $("#tabs-2 h3:eq(3)").html(response.realMe.projArtist);
        $("#tabs-2 a:eq(3)").attr("href", "cozy.html");
        $("#tabs-2 img:eq(3)").attr("src", response.realMe.profileURL);
        $("#tabs-2 p:eq(3)").html(response.realMe.artBio);
        // 4
        $("#tabs-2 h3:eq(4)").html(response.promise.projArtist);
        $("#tabs-2 a:eq(4)").attr("href", "lenah.html");
        $("#tabs-2 img:eq(4)").attr("src", response.promise.profileURL);
        $("#tabs-2 p:eq(4)").html(response.promise.artBio);

        // -------------------------------ALBUMS
        $("#onlyAlbum img:eq(0)").attr("src", response.noah.coverURL);
        $("#onlyAlbum img:eq(1)").attr("src", response.noah.profileURL);
        $("#onlyAlbum h3:eq(0)").html(response.noah.projName);
        $("#onlyAlbum h3:eq(1)").html(response.noah.projArtist);

        // -------------------------------GENRES
        // 1
        $("#accordion a:eq(0)").attr("href", "lenah.html");
        $("#accordion img:eq(0)").attr("src", response.promise.coverURL)
        $("#accordion img:eq(1)").attr("src", response.promise.profileURL)
        $("#accordion h3:eq(1)").html(response.promise.projName);
        $("#accordion h3:eq(2)").html(response.promise.projArtist);
        $("#accordion p:eq(0)").html(response.promise.projDesc);
        $("#accordion p:eq(1)").html(response.promise.artBio);
        // 2
        $("#accordion a:eq(1)").attr("href", "abi.html");
        $("#accordion img:eq(2)").attr("src", response.need.coverURL)
        $("#accordion img:eq(3)").attr("src", response.need.profileURL)
        $("#accordion h3:eq(3)").html(response.need.projName);
        $("#accordion h3:eq(4)").html(response.need.projArtist);
        $("#accordion p:eq(2)").html(response.need.projDesc);
        $("#accordion p:eq(3)").html(response.need.artBio);
        // 3
        $("#accordion a:eq(2)").attr("href", "noah.html");
        $("#accordion img:eq(4)").attr("src", response.noah.coverURL)
        $("#accordion img:eq(5)").attr("src", response.noah.profileURL)
        $("#accordion h3:eq(6)").html(response.noah.projName);
        $("#accordion h3:eq(7)").html(response.noah.projArtist);
        $("#accordion p:eq(4)").html(response.noah.projDesc);
        $("#accordion p:eq(5)").html(response.noah.artBio);
        // 4
        $("#accordion a:eq(3)").attr("href", "cozy.html");
        $("#accordion img:eq(6)").attr("src", response.realMe.coverURL)
        $("#accordion img:eq(7)").attr("src", response.realMe.profileURL)
        $("#accordion h3:eq(8)").html(response.realMe.projName);
        $("#accordion h3:eq(9)").html(response.realMe.projArtist);
        $("#accordion p:eq(6)").html(response.realMe.projDesc);
        $("#accordion p:eq(7)").html(response.realMe.artBio);
        // 5
        $("#accordion a:eq(4)").attr("href", "cozy.html");
        $("#accordion img:eq(8)").attr("src", response.realMe.coverURL)
        $("#accordion img:eq(9)").attr("src", response.realMe.profileURL)
        $("#accordion h3:eq(11)").html(response.realMe.projName);
        $("#accordion h3:eq(12)").html(response.realMe.projArtist);
        $("#accordion p:eq(8)").html(response.realMe.projDesc);
        $("#accordion p:eq(9)").html(response.realMe.artBio);
        // 6
        $("#accordion a:eq(5)").attr("href", "atlas.html");
        $("#accordion img:eq(10)").attr("src", response.pipeDown.coverURL)
        $("#accordion img:eq(11)").attr("src", response.pipeDown.profileURL)
        $("#accordion h3:eq(13)").html(response.pipeDown.projName);
        $("#accordion h3:eq(14)").html(response.pipeDown.projArtist);
        $("#accordion p:eq(10)").html(response.pipeDown.projDesc);
        $("#accordion p:eq(11)").html(response.pipeDown.artBio);


        // -------------------------------FEATURED MUSIC SECTION
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