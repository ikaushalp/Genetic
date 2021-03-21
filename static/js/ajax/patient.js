// Insert Patient Data
$(document).on('submit', '#patient', function (e) {
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'add',
        data: $("#patient").serialize(),
        dataType: 'json',
        success: function (data) {
            if (data.saved === 1) {
                $.notify("Information Saved Successfully")
            } else if (data.exist === 1) {
                Swal.fire(
                    "Error",
                    "Username Not Available",
                    "error"
                )
            }
        }
    });
});