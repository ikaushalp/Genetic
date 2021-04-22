from django.contrib.auth.forms import PasswordResetForm, SetPasswordForm


class BootstrapStylesMixin:
    field_names = None

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        if self.field_names:
            for fieldname in self.field_names:
                self.fields[fieldname].widget.attrs = {
                    'class': 'form-control form-control-solid h-auto py-6 px-6 rounded-lg'}


class MyPasswordResetForm(BootstrapStylesMixin, PasswordResetForm):
    field_names = ['email']


class SetPasswordForm(BootstrapStylesMixin, SetPasswordForm):
    field_names = ['new_password1', 'new_password2']
