// Reading JSON data about library from Postman and putting data into the page as wanted.
$.ajax({
    type: "GET",
    url: "https://993e544b-52bb-4771-ad0a-3f48c38ad225.mock.pstmn.io/project",
    data: "data",
    dataType: "json",
    success: function (response) {
        console.log(response);
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

        // -------------------------------FEATURED ARTISTS SECTION
        //first artist
        $("#featuredArtists h3:eq(0)").html(response.pipeDown.projArtist);
        $("#featuredArtists img:eq(0)").attr("src", response.pipeDown.profileURL);
        $("#featuredArtists a:eq(0)").attr("href", "atlas.html");
        $("#featuredArtists p:eq(0)").html(response.pipeDown.artBio);
        //second artist
        $("#featuredArtists h3:eq(1)").html(response.promise.projArtist);
        $("#featuredArtists img:eq(1)").attr("src", response.promise.profileURL);
        $("#featuredArtists a:eq(1)").attr("href", "lenah.html");
        $("#featuredArtists p:eq(1)").html(response.promise.artBio);
        //third artist
        $("#featuredArtists h3:eq(2)").html(response.need.projArtist);
        $("#featuredArtists img:eq(2)").attr("src", response.need.profileURL);
        $("#featuredArtists a:eq(2)").attr("href", "abi.html");
        $("#featuredArtists p:eq(2)").html(response.need.artBio);

        // -------------------------------TOP SINGLES SECTION
        //first single
        $("#topPicks h3:eq(0)").html(response.pipeDown.tracklist[0]);
        $("#topPicks p:eq(0)").html(response.pipeDown.projDesc);
        $("#topPicks h3:eq(1)").html(response.pipeDown.projArtist);
        $("#topPicks img:eq(0)").attr("src", response.pipeDown.coverURL);
        $("#topPicks a:eq(0)").attr("href", "atlas.html");
        //second single
        $("#topPicks h3:eq(2)").html(response.realMe.tracklist[0]);
        $("#topPicks p:eq(1)").html(response.realMe.projDesc);
        $("#topPicks h3:eq(3)").html(response.realMe.projArtist);
        $("#topPicks img:eq(1)").attr("src", response.realMe.coverURL);
        $("#topPicks a:eq(1)").attr("href", "cozy.html");
        //third single
        $("#topPicks h3:eq(4)").html(response.noah.tracklist[2]);
        $("#topPicks p:eq(2)").html(response.noah.projDesc);
        $("#topPicks h3:eq(5)").html(response.noah.projArtist);
        $("#topPicks img:eq(2)").attr("src", response.noah.coverURL);
        $("#topPicks a:eq(2)").attr("href", "noah.html");
        //fourth single
        $("#topPicks h3:eq(6)").html(response.need.tracklist[0]);
        $("#topPicks p:eq(3)").html(response.need.projDesc);
        $("#topPicks h3:eq(7)").html(response.need.projArtist);
        $("#topPicks img:eq(3)").attr("src", response.need.coverURL);
        $("#topPicks a:eq(3)").attr("href", "abi.html");

    }
});