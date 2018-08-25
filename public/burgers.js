$(function() {
    $(".eat").on("click", function(event) {
        var id = $(this).data("id");
        var eaten = $(this).data("eaten");

        var burgerEaten = {
            devoured: eaten
        };

        $.ajax("/burgers" + id, {
            type: "PUT",
            data: burgerEaten
        }).then(function() {
            location.reload();
        });

        $(".create-form").on("submit", function(event) {
            event.preventDefault();

            var newBerger = {
                burger_name: $("#berger").val().trim(),
                devoured: false
            };

            $.ajax("/burgers", {
                type: "POST",
                data: newBerger
            }).then(function() {
                location.reload();
            });
        });
    });
});