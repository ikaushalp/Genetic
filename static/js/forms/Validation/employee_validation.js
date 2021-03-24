const form = document.getElementById('employee');
document.addEventListener('DOMContentLoaded', function (e) {
    const fv = FormValidation.formValidation(form,
        {
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: 'Employee name is required'
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

                marital_status: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },

                mobile_no: {
                    validators: {
                        notEmpty: {
                            message: 'Indian phone number is required'
                        },
                        mobile_no: {
                            country: 'IN',
                            message: 'The value is not a valid Indian phone number'
                        }
                    }
                },

                email: {
                    validators: {
                        notEmpty: {
                            message: 'Employee email is required'
                        },
                        emailAddress: {
                            message: 'The value is not a valid email address'
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
                    }
                },

                role: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },

                designation: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },

                // joining_date: {
                //     validators: {
                //         notEmpty: {
                //             message: 'Joining date is required'
                //         }
                //     }
                // },
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
        }
    );
    $(form).submit(function () {
        fv.validate();
    });
});

