function del(id, type) {

    $.ajax({
        type: 'POST',
        url: '/deletByID',
        data:{ID: id, Type: type},
        success: function (data) {
            //do something with the data via front-end framework
            if (data === 'done') {
                window.location.href = '/view'
            }
        }
    });
}