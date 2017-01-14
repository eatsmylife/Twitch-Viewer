
//The way to use twitch api
// https://api.twitch.tv/kraken/streams/sing_sing?callback=foo&client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm
// https://api.twitch.tv/kraken/channels/sing_sing?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm
// https://wind-bow.gomix.me/twitch-api
//colalin
//angrypug
//failverde
//gamesdonequick
//mistakefatal
function getChannelInfo() {
    var channels = ["colalin", "angrypug", "failverde", "gamesdonequick", "mistakefatal"];

    for (var i = 0; i < channels.length; i++) {

        closure();
        //because closure function is called. so this is function will run for sure
        function closure (index = i) {

            function makeURL(type, name) {
                return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
            }

            $.getJSON(makeURL("streams", channels[index]), function (data) {
                console.log(channels[index]);
                var game, status;
                if (data.stream === null) {
                    game = "Offline";
                    status = "offline";
                } else {
                    game = data.stream.game;
                    status = "online";
                }
                $.getJSON(makeURL("channels", channels[index]), function (data) {
                    var name;
                    name = data.display_name ? data.display_name : data.name;
                    var html;

                    if (status === "online") {
                        html = '<a href="https://www.twitch.tv/' + channels[index] + '" target="_blank"' + '<div class="stream-each online">' + '<div class="left">' + '<img src="' + data.logo + '" />' + '</div><div class="mid"><span class="channel">' + name + '</span><br/><span="game">' + game + '</span></div>' + '<div class="right"><span class="status">' + status + '</span></div>' + '</a>';
                        $(".streams").prepend(html);
                    } else if (status === "offline") {
                        html = '<a href="https://www.twitch.tv/' + channels[index] + '" target="_blank"' + '<div class="stream-each offline">' + '<div class="left">' + '<img src="' + data.logo + '" />' + '</div><div class="mid"><span class="channel">' + name + '</span><br/><span="game">' + game + '</span></div>' + '<div class="right"><span class="status">' + status + '</span></div>' + '</a>';
                        $(".streams").append(html);
                    }
                });
            });
        };
    }
    /*
        channels.forEach(function (channel) {
    
            function makeURL(type, name) {
                return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
            }
    
            $.getJSON(makeURL("streams", channel), function (data) {
                console.log(data);
                console.log(channel);
                var game, status;
                if (data.stream === null) {
                    game = "Offline";
                    status = "offline";
                } else {
                    game = data.stream.game;
                    status = "online";
                }
                $.getJSON(makeURL("channels", channel), function (data) {
                    var name;
                    name = data.display_name ? data.display_name : data.name;
                    var html;
    
                    if (status === "online") {
                        html = '<a href="https://www.twitch.tv/' + channel + '" target="_blank"' + '<div class="stream-each online">' + '<div class="left">' + '<img src="' + data.logo + '" />' + '</div><div class="mid"><span class="channel">' + name + '</span><br/><span="game">' + game + '</span></div>' + '<div class="right"><span class="status">' + status + '</span></div>' + '</a>';
                        $(".streams").prepend(html);
                    } else if (status === "offline") {
                        html = '<a href="https://www.twitch.tv/' + channel + '" target="_blank"' + '<div class="stream-each offline">' + '<div class="left">' + '<img src="' + data.logo + '" />' + '</div><div class="mid"><span class="channel">' + name + '</span><br/><span="game">' + game + '</span></div>' + '<div class="right"><span class="status">' + status + '</span></div>' + '</a>';
                        $(".streams").append(html);
                    }
                });
            });
        });*/
}


$(document).ready(function () {
    getChannelInfo();
    //status select
    $(".head-status").click(function () {
        $(this).addClass("head-status-selected").siblings().removeClass("head-status-selected");
    });
    $(".head-status.all").click(function () {
        $(".stream-each").show();
    });
    $(".head-status.online").click(function () {
        $(".stream-each.offline").hide();
        $(".stream-each.online").show();
    });
    $(".head-status.offline").click(function () {
        $(".stream-each.online").hide();
        $(".stream-each.offline").show();
    });
});