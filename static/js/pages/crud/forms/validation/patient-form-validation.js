document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('form_1'),
        {
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: 'Patient Name is required'
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
                        notEmpty: {
                            message: 'Email is required'
                        },
                        emailAddress: {
                            message: 'The value is not a valid email address'
                        }
                    }
                },

                
                digits: {
                    validators: {
                        notEmpty: {
                            message: 'Digits is required'
                        },
                        digits: {
                            message: 'The velue is not a valid digits'
                        }
                    }
                },
                

                phone: {
                    validators: {
                        notEmpty: {
                            message: 'IN phone number is required'
                        },
                        phone: {
                            country: 'IN',
                            message: 'The value is not a valid IN phone number'
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
                            message: 'Relationship required'
                        },
                    }
                },

                guardian_mobile: {
                    validators: {
                        notEmpty: {
                            message: 'IN phone number is required'
                        },
                        phone: {
                            country: 'IN',
                            message: 'The value is not a valid IN phone number'
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

