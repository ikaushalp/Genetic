var Datatables = function () {
    var Table1 = function () {
        var table = $('#datatable').DataTable({

            searching: true,

            responsive: true,

            lengthMenu: [5, 10, 25, 50],

            pageLength: 5,

            language: {
                'lengthMenu': 'Display _MENU_',
            },

            ordering: false,

            buttons: [{
                    extend: 'print',
                    exportOptions: {
                        columns: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                    }
                },

                {
                    extend: 'pdfHtml5',
                    exportOptions: {
                        columns: [0, 2, 3, 4, 5, 6, 7, 8, 9]
                    }
                },

                {
                    extend: 'excelHtml5',
                    exportOptions: {
                        columns: [0, 2, 3, 4, 5, 6, 7, 8, 9]
                    }
                },
            ],

        });
        $('#export_print').on('click', function (e) {
            e.preventDefault();
            table.button(0).trigger();
        });

        $('#export_pdf').on('click', function (e) {
            e.preventDefault();
            table.button(1).trigger();
        });

        $('#export_excel').on('click', function (e) {
            e.preventDefault();
            table.button(2).trigger();
        });
    };
    return {

        //main function to initiate the module
        init: function () {
            Table1();
        }
    };
}();

jQuery(document).ready(function () {
    Datatables.init();
});
