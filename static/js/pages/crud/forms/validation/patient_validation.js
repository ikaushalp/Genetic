const form = document.getElementById('patient');
document.addEventListener('DOMContentLoaded', function () {
    const fv = FormValidation.formValidation(form, {
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'Patient name is required'
                    }
                }
            },

            gender: {
                validators: {
                    notEmpty: {
                        message: 'Please select an option'
                    }
                }
            },

            age: {
                validators: {
                    notEmpty: {
                        message: 'Patient age is required'
                    }
                }
            },

            marital_status: {
                validators: {
                    notEmpty: {
                        message: 'Please select an option'
                    }
                }
            },

            phone: {
                validators: {
                    notEmpty: {
                        message: 'Indian phone number is required'
                    },
                    phone: {
                        country: 'IN',
                        message: 'The value is not a valid Indian phone number'
                    }
                }
            },

            email: {
                validators: {
                    notEmpty: {
                        message: 'Patient email is required'
                    },
                    emailAddress: {
                        message: 'The value is not a valid email address'
                    }
                }
            },

            category: {
                validators: {
                    notEmpty: {
                        message: 'Patient category is required'
                    }
                }
            },

            username: {
                validators: {
                    notEmpty: {
                        message: 'Please enter a username'
                    }
                }
            },

            password: {
                validators: {
                    notEmpty: {
                        message: 'Please enter a password'
                    }
                }
            },

            retype_password: {
                validators: {
                    notEmpty: {
                        message: 'Please enter a password again'
                    },
                    identical: {
                        compare: function () {
                            return form.querySelector('[name="password"]').value;
                        },
                        message: "Password doesn't match"
                    }
                },
            },
        },

        plugins: { //Learn more: https://formvalidation.io/guide/plugins
            trigger: new FormValidation.plugins.Trigger(),
            // Bootstrap Framework Integration
            bootstrap: new FormValidation.plugins.Bootstrap(),
            // Validate fields when clicking the Submit button
            // submitButton: new FormValidation.plugins.SubmitButton(),
            // Submit the form when all fields are valid
            // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
        }
    });
    $(form).submit(function (){
       fv.validate();
    });
});