let create_schedule_form = document.getElementById('schedule');
let update_schedule_form = document.getElementById('update_schedule');
let schedule_create_validation;
let schedule_update_validation;

$(document).ready(function () {
    schedule_create_validation = FormValidation.formValidation(create_schedule_form,
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
                            regexp: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
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
                            regexp: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
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
    );

    schedule_update_validation = FormValidation.formValidation(update_schedule_form,
        {
            fields: {
                update_doctor: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },

                update_fees: {
                    validators: {
                        notEmpty: {
                            message: 'Consultation Fees is required'
                        }
                    }
                },

                update_weekday: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },

                update_start_time: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        },
                        regexp: {
                            regexp: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
                            message: 'Invalid Time Format'
                        }
                    }
                },

                update_end_time: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        },
                        regexp: {
                            regexp: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
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
    );

    $('input[name="start_time"]').on('change', function () {
        // Revalidate the date field
        schedule_create_validation.revalidateField('start_time');
    });
    $('input[name="end_time"]').on('change', function () {
        // Revalidate the date field
        schedule_create_validation.revalidateField('end_time');
    });
    $('input[name="start_time"]').on('change', function () {
        // Revalidate the date field
        schedule_update_validation.revalidateField('start_time');
    });
    $('input[name="end_time"]').on('change', function () {
        // Revalidate the date field
        schedule_update_validation.revalidateField('end_time');
    });
});
