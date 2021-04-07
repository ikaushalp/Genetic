jQuery(document).ready(function () {
    var table = $("#doctor").DataTable({

        searching: true,

        responsive: true,

        dom: `<'row'<'col-sm-6 text-left'f><'col-sm-6 text-right'<"toolbar">>>
			<'row'<'col-sm-12'tr>>
			<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,

        initComplete: function () {
            $("div.toolbar")
                .html('<a href="javaScript:void(0)" class="btn btn-light-warning btn-icon mr-2"\n' +
                    '                                       id="export_print">\n' +
                    '                                        <i class="fas fa-print"></i>\n' +
                    '                                    </a>\n' +
                    '                                    <a href="javaScript:void(0)" class="btn btn-light-primary btn-icon mr-2"\n' +
                    '                                       id="export_pdf">\n' +
                    '                                        <i class="fas fa-file-pdf"></i>\n' +
                    '                                    </a>\n' +
                    '                                    <a href="javaScript:void(0)" class="btn btn-light-success btn-icon mr-2"\n' +
                    '                                       id="export_excel">\n' +
                    '                                        <i class="fas fa-file-excel"></i>\n' +
                    '                                    </a>');
        },

        lengthMenu: [5, 10, 25, 50],

        pageLength: 5,

        language: {
            'lengthMenu': 'Display _MENU_',
        },

        ordering: false,

        buttons: [{
            extend: 'print',
            exportOptions: {
                columns: [0, 2, 3, 4, 5, 6, 7]
            },
            title: 'Admin List',
        },
            {
                extend: 'pdfHtml5',
                exportOptions: {
                    columns: [0, 2, 3, 4, 5, 6, 7]
                },
                title: 'Admin List',
                customize: function (doc) {
                    doc.styles.title = {
                        fontSize: '35',
                        alignment: 'center',
                    }
                    doc.styles.tableHeader = {
                        fillColor: '#2D4154',
                        color: 'white',
                        fontSize: '12',
                        bold: 2,
                        alignment: 'center'
                    }
                    doc.styles.table = {
                        widths: 'auto',
                    }
                    doc.styles.table = {
                        widths: 'auto',
                    }
                }
            },

            {
                extend: 'excelHtml5',
                exportOptions: {
                    columns: [0, 2, 3, 4, 5, 6, 7]
                },
                title: 'Admin List',
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
});
