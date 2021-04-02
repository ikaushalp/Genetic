jQuery(document).ready(function () {
    // default time
    $('#start_timepicker, #end_timepicker').timepicker({
        minuteStep: 1,
        defaultTime: '',
        showMeridian: false,
        disableMousewheel: true
    });
});