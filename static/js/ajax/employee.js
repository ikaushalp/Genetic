$(document).ready(function () {
//Insert Patient Data
    $(document).on('submit', '#employee', function (e) {
        e.preventDefault();
        employee_create_validation.validate().then(function (status) {
            if (status === 'Valid') {
                $.ajax({
                    type: 'POST',
                    url: 'add',
                    data: $("#employee").serialize(),
                    dataType: 'json',
                    success: function (data) {
                        if (data.insert === 1) {
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
            }
        })
    });

// Delete Patient Data
//     $(".table").on('click', '#patient_delete', function () {
//
//         let id = $(this).attr("data-info");
//         let csrf = $("input[name=csrfmiddlewaretoken]").val();
//
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonText: "Yes, delete it!",
//             cancelButtonText: "No, cancel!"
//         }).then(function (result) {
//             let info;
//             if (result.value) {
//                 info = {patient_id: id, csrfmiddlewaretoken: csrf}
//                 $.ajax({
//                     url: 'delete',
//                     type: 'POST',
//                     data: info,
//                     dataType: 'json',
//                     success: function (data) {
//                         if (data.delete === 1) {
//                             Swal.fire({
//                                 title: "Deleted!",
//                                 text: "Your file has been deleted.",
//                                 icon: "success",
//                                 confirmButtonText: "Ok",
//                             }).then(function (result) {
//                                 if (result.value) {
//                                     location.reload();
//                                 } else {
//                                     location.reload();
//                                 }
//                             });
//                         }
//                     }
//                 });
//             } else if (result.dismiss === "cancel") {
//                 Swal.fire(
//                     "Cancelled",
//                     "Your Record is safe",
//                     "error"
//                 )
//             }
//         });
//     });

// Show All Patient Details
    $(document).on('click', '#employee_patient_details', function (e) {
        e.preventDefault();
        let currentrow = $(this).closest('tr');

        let data = $('#admin').DataTable().row(currentrow).data();

        $('#eid').text(data[0]);
        $('#ename').text(data[1]);
        $('#gender').text(data[2]);
        $('#birthdate').text(data[3]);
        $('#blood_group').text(data[4]);
        $('#marital_status').text(data[5]);
        $('#mobile_no').text(data[6]);
        $('#email').text(data[7]);
        $('#address').text(data[8]);
        $('#role').text(data[9]);
        $('#designation').text(data[10]);
        $('#joining_date').text(data[11]);
        $('#qualification').text(data[12]);

        $('#employee_view_modal').modal('show');

        return false;
    });

});
