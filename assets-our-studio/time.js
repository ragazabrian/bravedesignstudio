$(document).ready(function() {
    function updateTimes() {
        var manilaTime = moment.tz("Asia/Manila").format('HH:mm');
        $('#time-manila').text(manilaTime);
    }

    updateTimes();
    setInterval(updateTimes, 1000);
});
