$(document).ready(function() {
    
    $('.deadline').each(function(i){
        $(this).append('<div class="delete" id=link'+i+'><a href="deleteentry.php?entry='+i+'" title="Delete Entry">x</a></div>');
    });

        /* Function for adding entry without reloading page */
         $(function() {
            $('.error').hide();
            $('.button').click(function() {
                // validate and process form here
      
                $('.error').hide();
                var subject = $("input#subject").val();
                if (subject == "") {
                    $("label#subject_error").show();
                    $("input#subject").focus();
                    return false;
                }
                var date = $("input#date").val();
                if (date == "") {
                    $("label#date_error").show();
                    $("input#date").focus();
                    return false;
                }
                var time = $("input#time").val();
                if (time == "") {
                    $("label#time_error").show();
                    $("input#time").focus();
                    return false;
                }
                
                $.ajax({
                        type: "POST",
                        url:  "addentry.php",
                        data: { subject: subject,
                                date: date,
                                time: time}  ,
                        success: function() {
                            var numItems = $('p').length
                            $('#entry_form').prepend("<div id='message'></div>");
                            numItems--;
                            $('#message').append('<div class="delete" id=link'+numItems+'><a href="deleteentry.php?entry='+numItems+'" title="Delete Entry">x</a></div>'); //TODO: Fix the delete button here
                            $('#message').html("<p class='deadline'>"+numItems+". <span>"+subject+" - "+date+" - "+time+"</span></p>").hide().fadeIn(1500, function() {
                            });
                        }
                });
                return false;
   
            });
        });

        $(function() {
            $("a").click(function() {
                var entryNum = $(this).attr("href").match(/entry=([0-9]+)/)[1];
                $.ajax({
                    type: "GET",
                    url: "deleteentry.php",
                    data: {entry : entryNum},
                    success: function(){
                        $('#link'+entryNum).parent().animate({
                            'opacity':0,
                            'margin':0,
                            'padding':0,
                            'height':0
                            }, 650, function(){
                                $(this).remove();
                            });
                        entryNum++;
                        $("#link"+entryNum).parent().animate({
                            'margin-top':0},1);
                    }
                });
                return false;
            });
        });
});
