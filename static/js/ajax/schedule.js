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
                            sessionStorage.setItem("load", "true");
                            KTUtil.scrollTop();
                            setTimeout(function () {
                                window.location.reload();
                            }, 500)
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

// Delete Schedule
    $(document).on('click', '#schedule_delete', function () {

        let id = $(this).attr("data-id");
        let csrf = $("input[name=csrfmiddlewaretoken]").val();

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!"
        }).then(function (result) {
            let info;
            if (result.value) {
                info = {schedule_id: id, csrfmiddlewaretoken: csrf}
                $.ajax({
                    url: 'delete',
                    type: 'POST',
                    data: info,
                    dataType: 'json',
                    success: function (data) {
                        if (data.delete === 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                confirmButtonText: "Ok",
                            }).then(function (result) {
                                if (result.value) {
                                    location.reload();
                                } else {
                                    location.reload();
                                }
                            });
                        }
                    }
                });
            } else if (result.dismiss === "cancel") {
                Swal.fire(
                    "Cancelled",
                    "Your Record is safe",
                    "error"
                )
            }
        });
    });

// Update Schedule

    if (sessionStorage.getItem("load")) {
        setTimeout(function () {
            $.notify("Information Saved SuccessFully");
            sessionStorage.clear();
        }, 800)
    }
})