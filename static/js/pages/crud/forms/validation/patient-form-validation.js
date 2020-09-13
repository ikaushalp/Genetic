document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('form_1'),
        {
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: 'Patient name is required'
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

                email: {
                    validators: {
                        emailAddress: {
                            message: 'The value is not a valid email address'
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

                guardian_name: {
                    validators: {
                        notEmpty: {
                            message: 'Gurdian name required'
                        },
                    }
                },

                relationship: {
                    validators: {
                        notEmpty: {
                            message: 'Relationship is required'
                        },
                    }
                },

                guardian_mobile: {
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

                marital_status: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
            },

            plugins: { //Learn more: https://formvalidation.io/guide/plugins
                trigger: new FormValidation.plugins.Trigger(),
                // Bootstrap Framework Integration
                bootstrap: new FormValidation.plugins.Bootstrap(),
                // Validate fields when clicking the Submit button
                submitButton: new FormValidation.plugins.SubmitButton(),
                // Submit the form when all fields are valid
                defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
            }
        }
    );
});

