const create_form = document.getElementById('create_category');
const update_form = document.getElementById('update_category');
$(document).ready(function () {
    var category_create = FormValidation.formValidation(create_form,
        {
            fields: {
                category: {
                    validators: {
                        notEmpty: {
                            message: 'Category name is required'
                        }
                    }
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
        }
    );

    var category_update = FormValidation.formValidation(update_form,
        {
            fields: {
                update_category: {
                    validators: {
                        notEmpty: {
                            message: 'Category name is required'
                        }
                    }
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
        }
    );
    $(create_form).submit(function () {
        category_create.validate();
    });
    $(update_form).submit(function () {
        category_update.validate();
    });
});


