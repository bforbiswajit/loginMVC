/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function()
{
    $("form").submit(function(event)
    {
        event.preventDefault();
        var form_id = "#" + $(this).closest("form").attr("id");
        var form_data = $(form_id).serializeArray();
        form_data[form_data.length] = {name:"action", value:"login"};
        var url = $(form_id).attr("action");
        $.post(url,form_data,function(data)
        {
            console.log(data);
            $("#dashBoard").html(data);
        });
    });
});
