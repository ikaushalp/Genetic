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
});
