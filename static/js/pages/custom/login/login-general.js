jQuery(document).ready(function () {
    let login = $('#kt_login');

    let showForm = function (form) {
        let cls = 'login-' + form + '-on';
        let Form = 'kt_login_' + form + '_form';

        login.removeClass('login-forgot-on');
        login.removeClass('login-signin-on');

        login.addClass(cls);
        if (Form === 'kt_login_forgot_form') {
            console.log('Inside')
            forgot_password_validation.resetForm(true);
        }
        if (Form === 'kt_login_signin_form') {
            signin_validation.resetForm(true);
        }
        KTUtil.animateClass(KTUtil.getById(Form), 'animate__animated animate__backInUp');
    }

// Start::Login Page //
    let signin_validation;

    signin_validation = FormValidation.formValidation(
        KTUtil.getById('kt_login_signin_form'),
        {
            fields: {
                username: {
                    validators: {
                        notEmpty: {
                            message: 'Username is required'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'Password is required'
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

    $('#kt_login_signin_submit').on('click', function (e) {
        e.preventDefault();

        signin_validation.validate().then(function (status) {
            if (status === 'Valid') {
                $.ajax({
                    type: 'POST',
                    url: 'login',
                    data: $('#kt_login_signin_form').serialize(),
                    dataType: 'json',
                    success: function (data) {
                        if (data.success === 1) {
                            window.location = '/dashboard';
                        } else if (data.NotExist === 1) {
                            Swal.fire(
                                "Error",
                                "Invalid Credentials",
                                "error"
                            )
                        }
                    },
                });
            } else {
                console.log("Invalid");
            }
        });
    });

    // Handle forgot button
    $('#kt_login_forgot').on('click', function (e) {
        e.preventDefault();
        showForm('forgot');
    });

// End::Login Page //

// Start::Forgot Password Page //
    let forgot_password_validation;

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

    // Handle cancel button
    $('#kt_login_forgot_cancel').on('click', function (e) {
        e.preventDefault();
        showForm('signin');
    });

// End::Forgot Password Page //
});
