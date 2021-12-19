$(document).ready(function() {
    
    // sample how to do Ajax request using jQuery
    // required URL and type method
    // success function handle the success response from the server backend
    $.ajax({
        url: "http://localhost:3000/",
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            // parse the JSON to Javascript objects
            let objects = JSON.parse(JSON.stringify(response));

            // select tbody from table id result-table
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
                
                // add the row to the tbody
                tbody.append(row);
            }
        }
    });
});
