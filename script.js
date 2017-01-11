
//The way to use twitch api
// https://api.twitch.tv/kraken/streams/sing_sing?callback=foo&client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm
// https://api.twitch.tv/kraken/channels/sing_sing?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm
// https://wind-bow.gomix.me/twitch-api
//colalin
//angrypug
//failverde
//gamesdonequick

$(document).ready(function () {
    //status select
    $(".head-status").click(function () {
        $(this).addClass("head-status-selected").siblings().removeClass("head-status-selected");
    });

    //load streams
    var streamers = ["colalin", "angrypug", "failverde", "gamesdonequick", "mistakefatal"];

    //fuck it! i is still 5.
    for (i = 0; i < streamers.length; i++) {
        $.getJSON('https://api.twitch.tv/kraken/streams/' + streamers[i] + '?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm', function (result) {
            if (result.stream == null) {
                //THEY ARE OFFLINE DO WHATEVER HERE
                console.log(i, "is OFFLINE");
            } else {
                //THEY ARE ONLINE DO WHATEVER HERE
                console.log(i, "is ONLINE");
            }
        });
    }



    //似乎 success function 會在所有的ajax跑過才執行，所以永遠都是5....
    /*
        for (var i = 0; i < streamers.length; i++) {
            console.log(i);
            $.ajax({
                url: "https://api.twitch.tv/kraken/streams/" + streamers[i] + "?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm",
                success: function (result) {
                    console.log(i);
                    //online
                    if (result.stream !== null) {
                        console.log(result);
                        console.log(result.stream.channel.logo);
                    } else {
                        //offline                    
                        $.ajax({
                            url: "https://api.twitch.tv/kraken/channels/" + streamers[i] + "?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm",
                            success: function (result) {
                                console.log(result);
                                console.log(result.logo);
                            }
                        });
                        
                    }
                }
            });
        }
    */


});