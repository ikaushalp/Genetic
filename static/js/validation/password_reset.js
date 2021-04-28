let forgot_password_validation;
jQuery(document).ready(function () {
    forgot_password_validation = FormValidation.formValidation(
        KTUtil.getById('kt_login_forgot_form'),
        {
            fields: {
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Email address is required'
                        },
                        emailAddress: {
                            message: 'The value is not a valid email address'
                        }
                    }
                }
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap: new FormValidation.plugins.Bootstrap()
            }
        }
    );

    $('#kt_login_forgot_form').on('submit', function (e) {
        e.preventDefault();
        forgot_password_validation.validate().then(function (status) {
            if (status === 'Valid') {
                let btn = KTUtil.getById('kt_login_forgot_submit');
                KTUtil.btnWait(btn, "spinner spinner-right spinner-white pr-15", "Sending...");
                setTimeout(function () {
                    KTUtil.btnRelease(btn);
                }, 4000);
                $.ajax({
                    type: 'POST',
                    url: 'password_reset',
                    data: $('#kt_login_forgot_form').serialize(),
                    dataType: 'json',
                    success: function (data) {
                        if (data.sent === 1) {
                            window.location.href = "password_reset/done"
                        } else if (data.failed === 1) {
                            Swal.fire(
                                "Error",
                                "Failed, Email not sent",
                                "error"
                            )
                        }
                    },
                });
            }
        });
    });

    // Handle cancel button
    $('#kt_login_forgot_cancel').on('click', function (e) {
        e.preventDefault();
        window.location.href = '/'
    });
})