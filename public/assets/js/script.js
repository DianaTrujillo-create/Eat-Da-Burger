$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var newState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function() {
            console.log("changed burger to ", true);
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();
        var newBurger = {
            name: $("#add-burger").val().trim(),
        };
        $.ajax("/api/burgers/", {
            type: "Post",
            data: newBurger
        }).then(function(){
            console.log("created new burger");
            location.reload();
        });
    });
});