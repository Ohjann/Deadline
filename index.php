<html>
    <head>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="style.css">
        <script src="script.js"></script>
    </head>
    <body>
        <div id="header">
            <h1>Deadlines</h1>
        </div>
        <div class="content">
            <div class="entries">
                <?php
                    $f = fopen("data.txt", "r");
                    // Read line by line until end of file
                    $number = 1;
                    while(!feof($f)) { 
                        echo "<p class='deadline". $number ."'> <span>". fgets($f) . "</span></p>";
                        $number++;
                    }
                    fclose($f);
                ?>
            </div>

              <div id="entry_form">
                <form name="entry" action="">
                <fieldset>
                    <label for="subject" id="subject_label">Subject: </label>
                    <input type="text" name="subject" id="subject" size="30" value="" class="text-input" />
                    <label class="error" for="subject" id="subject_error">This field is required.</label>
      
                    <label for="date" id="date_label">Date: </label>
                    <input type="text" name="date" id="date" size="30" value="" class="text-input" />
                    <label class="error" for="date" id="date_error">This field is required.</label>
      
                    <label for="time" id="time_label">Time: </label>
                    <input type="text" name="time" id="time" size="30" value="" class="text-input" />
                    <label class="error" for="time" id="time_error">This field is required.</label>
      
                    <input type="submit" name="submit" class="button" id="submit_btn" value="Send" />
                </fieldset>
                </form>
               </div>
        </div>
    </body>
</html>
