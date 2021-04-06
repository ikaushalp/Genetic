$(document).ready(function () {
//Insert Patient Data
    $(document).on('submit', '#global_settings', function (e) {
        e.preventDefault();
        global_settings_validation.validate().then(function (status) {
            if (status === 'Valid') {
                $.ajax({
                    type: 'POST',
                    url: 'settings',
                    data: $("#global_settings").serialize(),
                    dataType: 'json',
                    success: function (data) {
                        if (data.insert === 1) {
                            sessionStorage.setItem("load", "true");
                            KTUtil.scrollTop();

                            setTimeout(function () {
                                window.location.reload();
                            }, 800)

                        }
                    },
                });
            }
        })
    });

    if (sessionStorage.getItem("load")) {
        setTimeout(function () {
            $.notify("Information Saved SuccessFully");
            sessionStorage.clear();
        }, 800)
    }
});