const update_patient_form = document.getElementById('update_patient');
let update_patient_validation;

$(document).ready(function (){
    update_patient_validation = FormValidation.formValidation(update_patient_form, {
        fields: {
            update_name: {
                validators: {
                    notEmpty: {
                        message: 'Patient name is required'
                    }
                }
            },

            update_gender: {
                validators: {
                    notEmpty: {
                        message: 'Please select an option'
                    }
                }
            },

            update_age: {
                validators: {
                    notEmpty: {
                        message: 'Patient age is required'
                    }
                }
            },

            update_marital_status: {
                validators: {
                    notEmpty: {
                        message: 'Please select an option'
                    }
                }
            },

            update_phone: {
                validators: {
                    notEmpty: {
                        message: 'Indian phone number is required'
                    },
                    regexp: {
                        regexp: /^(\+)?(91)?(| |-)?[6789]\d{9}$/,
                        message: 'The value can only consist phone number'
                    },
                }
            },

            update_email: {
                validators: {
                    notEmpty: {
                        message: 'Patient email is required'
                    },
                    emailAddress: {
                        message: 'The value is not a valid email address'
                    }
                }
            },

            update_category: {
                validators: {
                    notEmpty: {
                        message: 'Patient category is required'
                    }
                }
            },

            update_username: {
                validators: {
                    notEmpty: {
                        message: 'Please enter a username'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_.]+$/,
                        message: 'The username can only consist of alphabetical, number, dot and underscore'
                    }
                },

            },
        },
        plugins: { //Learn more: https://formvalidation.io/guide/plugins
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap: new FormValidation.plugins.Bootstrap(),
        }
    })
    update_patient_validation.validate();
})