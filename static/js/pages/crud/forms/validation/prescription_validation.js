document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('prescription'),
        {
            fields: {
                doctor: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },

                patient: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },

                date: {
                    validators: {
                        notEmpty: {
                            message: 'Appointment date is required'
                        }
                    }
                },

                prescription: {
                    validators: {
                        notEmpty: {
                            message: 'Appointment date is required'
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

