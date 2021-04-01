var schedule_form = document.getElementById('schedule');
var schedule_create_validation;
document.addEventListener('DOMContentLoaded', function (e) {
    schedule_create_validation = FormValidation.formValidation(schedule_form,
        {
            fields: {
                doctor: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },

                fees: {
                    validators: {
                        notEmpty: {
                            message: 'Consultation Fees is required'
                        }
                    }
                },

                weekday: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                start_time: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        },
                        regexp: {
                            regexp: /^(([1-9]|1[0-2])(:[0-5]\d)(\ [AP][M]))$/,
                            message: 'Invalid Time Format'
                        }
                    }
                },
                end_time: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        },
                        regexp: {
                            regexp: /^(([1-9]|1[0-2])(:[0-5]\d)(\ [AP][M]))$/,
                            message: 'Invalid Time Format'
                        }
                    }
                },
            },

            plugins: { //Learn more: https://formvalidation.io/guide/plugins
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap: new FormValidation.plugins.Bootstrap(),
            }
        }
    )
    $('input[name="start_time"]').on('change', function () {
            // Revalidate the date field
            schedule_create_validation.revalidateField('start_time');
        });
    $('input[name="end_time"]').on('change', function () {
            // Revalidate the date field
            schedule_create_validation.revalidateField('end_time');
        });
});

