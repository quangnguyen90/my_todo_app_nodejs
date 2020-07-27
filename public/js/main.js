function loadData() {
    $.ajax({
        url: '/api/tasks/',
        type: 'GET'
    })
        .then(data => {
            $('#content').html('');
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                var li = $(`<li class="list-group-item" id="${element._id}">${element.title} - <b>${element.deadline}</b>
                    <button type="button" class="deleteBtn btn btn-danger">Delete</button>
                </li>`);
                $('#content').append(li);
            }

            $('.deleteBtn').click(function () {
                deleteById($(this).parent().attr('id'));
            })

        })
        .catch(err => {
            console.log("Error");
        })
}

function deleteById(id) {
    $.ajax({
        url: '/api/tasks/' + id,
        type: 'DELETE'
    })
        .then(data => {
            $('#' + id).remove();
        })
        .catch(err => {
            console.log("Error");
        })
}

loadData();

$('#addBtn').click(() => {
    var title = $('#title').val();
    var deadline = $('#deadline').val();
    $.ajax({
        url: '/api/tasks/',
        type: 'POST',
        data: {
            title: title,
            deadline: deadline
        },

    })
        .then(data => {
            var li = $(`<li class="list-group-ite.nm" id="${data._id}">${data.title} - <b>${data.deadline}</b>
                <button class="deleteBtn btn btn-danger">Delete</button>
            </li>`);
            $('#content').append(li);

            $('.deleteBtn').click(function () {
                console.log($(this).parent().attr('id'));
            })
        })
        .catch(err => {
            console.log("Error");
        })
})
