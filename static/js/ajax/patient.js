$(document).ready(function () {
//Insert Patient Data
    $(document).on('submit', '#patient', function (e) {
        e.preventDefault();
        patient_validation.validate().then(function (status) {
            if (status === 'Valid') {
                $.ajax({
                    type: 'POST',
                    url: 'add',
                    data: $("#patient").serialize(),
                    dataType: 'json',
                    success: function (data) {
                        if (data.insert === 1) {
                            sessionStorage.setItem("load", "true");
                            KTUtil.scrollTop();

                            setTimeout(function () {
                                window.location.reload();
                            }, 800)

                        } else if (data.exist === 1) {
                            Swal.fire(
                                "Error",
                                "Username Not Available",
                                "error"
                            )
                        }
                    },
                });
            }
        })
    });

// Delete Patient Data
    $(".table").on('click', '#patient_delete', function () {

        let id = $(this).attr("data-info");
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
                info = {patient_id: id, csrfmiddlewaretoken: csrf}
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

// Show All Patient Details
    $(document).on('click', '#show_patient_details', function (e) {
        e.preventDefault();
        let id = $(this).attr("data-info");
        let csrf = $("input[name=csrfmiddlewaretoken]").val();
        info = {patient_id: id, csrfmiddlewaretoken: csrf}
        $.ajax({
            type: 'POST',
            url: 'getdata',
            data: info,
            dataType: 'json',
            success: function (data) {
                if (data.show === 1) {
                    $('#id').text(data.id);
                    $('#name').text(data.name);
                    $('#birthdate').text(data.birthdate);
                    $('#age').text(data.age);
                    $('#gender').text(data.gender);
                    $('#cat').text(data.cat);
                    $('#mobile_no').text(data.mobile_no);
                    $('#marital_status').text(data.marital_status);
                    $('#email').text(data.email);
                    $('#blood_group').text(data.blood_group);
                    $('#blood_pressure').text(data.blood_pressure);
                    $('#height').text(data.height);
                    $('#weight').text(data.weight);
                    $('#address').text(data.address);
                    $('#patient_view_modal').modal('show');
                }
            }
        })
    });

    if (sessionStorage.getItem("load")) {
        $.notify("Information Saved SuccessFully");
        sessionStorage.clear();
    }
});
