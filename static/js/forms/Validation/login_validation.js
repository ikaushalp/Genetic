let login_form = document.getElementById('login');
let login_validation;
document.addEventListener('DOMContentLoaded', function () {
    login_validation = FormValidation.formValidation(login_form, {
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
})
