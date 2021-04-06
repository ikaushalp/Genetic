$(document).ready(function () {
// Insert Appointment Data
    $(document).on('submit', '#appointment', function (e) {
        e.preventDefault();
        appointment_create_validation.validate().then(function (status) {
            if (status === 'Valid') {
                alert("Got it")
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
            time.selectpicker({title: "Exploring...."}).selectpicker('refresh');
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
                    time.selectpicker('refresh');
                    $('input[name=fees]').val(data['fees']);

                    let start_time = data['start_time'];
                    let end_time = data['end_time'];

                    if (start_time && end_time) {
                        start_time = new Date(new Date().toDateString() + ' ' + start_time);
                        end_time = new Date(new Date().toDateString() + ' ' + end_time);

                        start_time = start_time.toLocaleTimeString().replace(/([\d]+:[\d]+):[\d]+(\s\w+)/g, "$1$2");
                        end_time = end_time.toLocaleTimeString().replace(/([\d]+:[\d]+):[\d]+(\s\w+)/g, "$1$2");

                        setTimeout(function () {
                            time.selectpicker({title: "Nothing Selected"}).selectpicker('refresh');
                            time.append("<option>" + start_time + " - " + end_time + "</option>");
                            time.selectpicker('refresh');
                        }, 500)
                    } else {
                        setTimeout(function () {
                            time.selectpicker({title: "No Schedule Found"}).selectpicker('refresh');
                        }, 500)
                    }
                }
            })
        }
    });
})