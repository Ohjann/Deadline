$(document).ready(function() {
    
    $('[class^="deadline"]').each(function(i){
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
                            var deadlinestring = "deadline"+numItems
                            $('#entry_form').prepend("<p class='"+deadlinestring+"'></div>");
                            numItems--;
                            $('#entry_form .'+deadlinestring).append('<div class="delete" id=link'+numItems+'><a href="deleteentry.php?entry='+numItems+'" title="Delete Entry">x</a></div>');
                            $('#entry_form .'+deadlinestring).html("<span>"+subject+" - "+date+" - "+time+"</span>").animate({
                                    'height':'90px',
                                    'margin-bottom':30
                                });
                            $('#entry_form .'+deadlinestring).append('<div class="delete" id=link'+numItems+'><a href="deleteentry.php?entry='+numItems+'" title="Delete Entry">x</a></div>');
                        }
                });
                return false;
   
            });
        });

        $(function() {
            $(".content").on('click', 'a', function() {
                var entryNum = $(this).attr("href").match(/entry=([0-9]+)/)[1];
                $.ajax({
                    type: "GET",
                    url: "deleteentry.php",
                    data: {entry : entryNum},
                    success: function(){
                        entryNum++;
                        $('.deadline'+entryNum).animate({
                            'margin':0,
                            'padding':0,
                            'height':0
                            }, 650, function(){
                                $(this).hide();
                            });
                        entryNum++;
                        $(".deadline"+entryNum).animate({
                            'margin-top':0},1);
                    }
                });
                return false;
            });
        });
});
