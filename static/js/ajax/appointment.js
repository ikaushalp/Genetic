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
                let time = $('#timeslot').selectpicker();
                time.find('option').remove();
                time.selectpicker('refresh');
                $('input[name=fees]').val(data['fees']);
                if (data['start_time'] && data['end_time']) {
                    time.append("<option>" + data['end_time'] + " - " + data['end_time'] + "</option>");
                    time.selectpicker('refresh');
                } else {
                    time.selectpicker({title: "No Schedule Found"}).selectpicker('render');
                }
            }
        })
    });
})