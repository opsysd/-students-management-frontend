$(document).ready(function() {
    
    $.ajax({
        url: "http://localhost:3000/",
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            let objects = JSON.parse(JSON.stringify(response));

            tbody = $("#result-table tbody");
            for(let obj of objects) {
                let row = "<tr><td>"+obj['id']
                +"</td><td>"+obj['first_name']
                +"</td><td>"+obj['last_name']
                +"</td><td>"+obj['age']
                +"</td><td>"+obj['address']
                +"</td><td>"+obj['degree']
                +"</td><td>"+obj['grade']
                +"</td></tr>";
                tbody.append(row);
            }
        }
    });
});