var SweetAlert2 = function () {
    var init = function () {
        $(".table").on('click','#patient_delete',function () {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!"
            }).then(function (result) {
                if (result.value) {
                    let id = $(this).attr("data-pid");
                    info = {pid:id}
                    $.ajax({
                        url: '{% url "delete" %}',
                        method: "POST",
                        data: info,
                        success: function (data) {
                            if (data.deleted == 1) {
                                /*window.location.reload(true)*/
                                console.log("True")
                            }
                            else {
                                console.log("False")
                            }
                        }
                    });
                    Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                    )
                } else if (result.dismiss === "cancel") {
                    Swal.fire(
                        "Cancelled",
                        "Your Record is safe",
                        "error"
                    )
                }
            });
        });
        $("#category_delete").click(function () {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!"
            }).then(function (result) {
                if (result.value) {
                    Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                    )
                } else if (result.dismiss === "cancel") {
                    Swal.fire(
                        "Cancelled",
                        "Your Record is safe",
                        "error"
                    )
                }
            });
        });
    };

    return {
        init: function () {
            init();
        },
    };
}();

// Class Initialization
jQuery(document).ready(function () {
    SweetAlert2.init();
});
