var buttons = document.querySelectorAll(".btn")
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        var command = button.dataset["element"]
        if(command == "insertImage" || command == "createLink"){
            var url = prompt ("Enter link here :" , "http://")
            document.execCommand(command,true,url)
        }else if(command == "foreColor"){
            var color = prompt("Enter color name here:" , "red")
            document.execCommand(command, false, color);
        }else if(command == "fontSize"){
            var size = prompt("Enter font size here :" , "font size(1-7)")
                document.execCommand(command, false, size);
            }else {
                document.execCommand(command, false, null); 
            }
        });
    });
