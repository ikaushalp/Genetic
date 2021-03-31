$(document).ready(function () {
    $(document).on('submit', '#login', function (e) {
        e.preventDefault();
        login_validation.validate().then(function (status) {
            if (status === 'Valid') {
                $.ajax({
                    type: 'POST',
                    url: '/auth',
                    data: {
                        username: $('input[name=username]').val(),
                        password: $('input[name=password]').val(),
                        csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                    },
                    dataType: 'json',
                    success: function (data) {
                        if (data.NotExist === 1) {
                            Swal.fire(
                                "Error",
                                "Invalid Credentials",
                                "error"
                            )
                        }
                    },
                });
            }
        })
    })
});