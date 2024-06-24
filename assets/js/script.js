$(document).ready(() => {
    $("#btn").click(() => {
        $.ajax({
            url: "https://caremback.onrender.com/blagues/random",
            method: "GET",
            dataType: "JSON",
            headers: {
                "Access-Control-Allow-Headers": "x-requested-with"
            },

            success: (data) => {
                console.log(data);
            }

        })
    })
})