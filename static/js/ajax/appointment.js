$(document).ready(function () {
// Insert Appointment Data
    $(document).on('submit', '#appointment', function (e) {
        e.preventDefault();
        appointment_create_validation.validate().then(function (status) {
            if (status === 'Valid') {
                $.ajax({
                    type: 'POST',
                    url: 'add',
                    data: $('#appointment').serialize(),
                    dataType: 'json',
                    success: function (data) {
                        if (data.insert === 1) {
                            sessionStorage.setItem("insert", "true");
                            KTUtil.scrollTop();
                            setTimeout(function () {
                                window.location.reload();
                            }, 500)
                        } else if (data.exist === 1) {
                            Swal.fire(
                                "Error",
                                "Appointment Already Exist",
                                "error"
                            )
                        }
                    }
                });
            }
        })
    });

// Load TimeSlot
    $('#appointment_datepicker, #doctor_list').change(function (e) {
        e.preventDefault();

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let doctor_id = $('select[name=doctor]').val();
        let appointment_date = $('input[name=appointment_date]').val();
        let date = new Date(appointment_date);
        let weekday = days[date.getDay()];
        let csrf = $('input[name=csrfmiddlewaretoken]').val();
        let time = $('#timeslot').selectpicker();

        if (doctor_id !== '' && weekday !== '') {
            time.selectpicker({title: "Exploring...."}).selectpicker('render');
            info = {
                doctor_id: doctor_id,
                weekday: weekday,
                csrfmiddlewaretoken: csrf
            }

            $.ajax({
                type: 'POST',
                url: 'loadtimeslot',
                data: info,
                dataType: 'json',
                success: function (data) {
                    time.find('option').remove();
                    appointment_create_validation.updateFieldStatus('time_slot', 'NotValidated');
                    time.selectpicker('refresh');
                    appointment_create_validation.updateFieldStatus('time_slot', 'NotValidated');
                    $('input[name=fees]').val(data['fees']);

                    let start_time = data['start_time'];
                    let end_time = data['end_time'];

                    if (start_time && end_time) {
                        start_time = new Date(new Date().toDateString() + ' ' + start_time);
                        end_time = new Date(new Date().toDateString() + ' ' + end_time);

                        start_time = start_time.toLocaleTimeString().replace(/([\d]+:[\d]+):[\d]+(\s\w+)/g, "$1$2");
                        end_time = end_time.toLocaleTimeString().replace(/([\d]+:[\d]+):[\d]+(\s\w+)/g, "$1$2");

                        setTimeout(function () {
                            time.selectpicker({title: "Nothing Selected"}).selectpicker('render');
                            time.append("<option>" + start_time + " - " + end_time + "</option>");
                            appointment_create_validation.updateFieldStatus('time_slot', 'NotValidated');
                            time.selectpicker('refresh');
                            appointment_create_validation.updateFieldStatus('time_slot', 'NotValidated');
                        }, 500)
                    } else {
                        setTimeout(function () {
                            time.selectpicker({title: "No Schedule Found"}).selectpicker('render');
                        }, 500)
                    }
                }
            })
        }
    });

// Confirm Appointment
    $(document).on('click', '#confirm_appointment', function (e) {
        e.preventDefault();
        let appointment_id = $(this).attr('data-id');
        let csrf = $("input[name=csrfmiddlewaretoken]").val();
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Confirm it!",
            cancelButtonText: "No, cancel!"
        }).then(function (result) {
            if (result.value) {
                info = {appointment_id: appointment_id, csrfmiddlewaretoken: csrf}
                $.ajax({
                    type: 'POST',
                    url: 'confirm',
                    data: info,
                    dataType: 'json',
                    success: function (data) {
                        if (data.update === 1) {
                            Swal.fire({
                                title: "Confirmed!",
                                text: "Your Appointment Has Been Confirmed.",
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
                Swal.fire({
                    title: "Cancelled",
                    text: "Your Record is safe",
                    icon: "error",
                    confirmButtonText: "Ok"
                })
            }
        });

    });

// Filter Appointment Datewise
    $(document).on('submit', '#filter_appointment', function (e) {
        e.preventDefault();
        let start_date = $('#filter_appointement_date').data('daterangepicker').startDate;
        let end_date = $('#filter_appointement_date').data('daterangepicker').endDate;
        start_date = start_date.format('YYYY-MM-DD');
        end_date = end_date.format('YYYY-MM-DD');
        let csrf = $("input[name=csrfmiddlewaretoken]").val();
        info = {start_date: start_date, end_date: end_date, csrfmiddlewaretoken: csrf}
        $.ajax({
            type: 'POST',
            url: 'view',
            data: info,
            dataType: 'json',
            success: function () {
                $('#appointment').DataTable().clear().draw();
            }
        });
    });

    if (sessionStorage.getItem("insert")) {
        setTimeout(function () {
            $.notify("Information Saved SuccessFully");
            sessionStorage.clear();
        }, 800)
    }

});