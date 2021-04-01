$(document).ready(function () {
// Insert Schedule
    $(document).on('submit', '#schedule', function (e) {
        e.preventDefault();
        schedule_create_validation.validate().then(function (status) {
            if (status === 'Valid') {
                $.ajax({
                    type: 'POST',
                    url: 'add',
                    data: $('#schedule').serialize(),
                    dataType: 'json',
                    success: function (data) {
                        if (data.insert === 1) {
                            console.log("Saved");
                        } else if (data.exist === 1) {
                            Swal.fire(
                                'Error',
                                'Schedule Already Exist',
                                'error'
                            )
                        }
                    }
                })
            }
        })
    });
})