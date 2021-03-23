$(document).ready(function () {
//Insert Patient Category
    $(document).on('submit', '#create_category', function (e) {
        e.preventDefault();
        let category = $("input[name=category]").val();
        let csrf = $("input[name=csrfmiddlewaretoken]").val();
        if (category === "") {
            category_create.validate();
        }
        info = {category: category, csrfmiddlewaretoken: csrf}
        $.ajax({
            type: 'POST',
            url: 'category',
            data: info,
            dataType: 'json',
            success: function (data) {
                if (data.insert === 1) {
                    setTimeout(function (){
                        location.reload();
                    }, 2000);
                    $.notify("Information Saved Successfully")
                } else if (data.exist === 1) {
                    Swal.fire(
                        "Error",
                        "Category Already Exist",
                        "error"
                    )
                }
            }
        });
    });

//Delete Patient Category
    $(document).on('click', '#delete_category', function () {
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
            if (result.value) {
                info = {pid: id, csrfmiddlewaretoken: csrf}
                $.ajax({
                    url: 'delete_category',
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

//Update Patient Category
    $(document).on('submit', '#update_category', function (e) {
        e.preventDefault();
    });
});