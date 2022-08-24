
function textboxOpen() {
  
    const textbox_btn = document.getElementById('start-btn')

    if (textbox_btn.checked == true) {
        document.getElementById("textarea").style.display = "block";
        document.getElementById("post-btn").style.display = "block";
    }
    else {
        document.getElementById("textarea").style.display = "none";
        document.getElementById("post-btn").style.display = "none";

    }
    
}

