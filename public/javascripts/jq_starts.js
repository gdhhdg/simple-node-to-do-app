$(document).ready(function () {
    $('.delete_task').on('click', function (e) {
        $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax({
            type:'DELETE',
            url: 'todo/' +id,
            success: window.location.href = "/todo",
            error: window.location.href = "/todo"
        });
    });
});