$(document).ready(function() {
    function updateTimes() {
        // var istanbulTime = moment.tz("Europe/Istanbul").format('HH:mm:ss');
        // var frankfurtTime = moment.tz("Europe/Berlin").format('HH:mm:ss');
        
        var istanbulTime = moment.tz("Europe/Istanbul").format('HH:mm');
        var frankfurtTime = moment.tz("Europe/Berlin").format('HH:mm');

        $('#time-istanbul').text(istanbulTime);
        $('#time-frankfurt').text(frankfurtTime);
    }

    updateTimes();
    setInterval(updateTimes, 1000);
});
