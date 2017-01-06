
//The way to use twitch api
// https://api.twitch.tv/kraken/streams/sing_sing?callback=foo&client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm
$(document).ready(function() {
    $(".head-status").click(function() {
        $(this).addClass("head-status-selected").siblings().removeClass("head-status-selected");
    });
});