$(function(){
    var overlay = $('<div id="overlay"></div>');
    overlay.show();
    overlay.appendTo(document.body);
    $('.popup').show();
    $('.close').click(function(){
    $('.popup').hide();
    overlay.appendTo(document.body).remove();
    return false;
    });
    
    
     
    
    $('.x').click(function(){
    $('.popup').hide();
    overlay.appendTo(document.body).remove();
    return false;
    });
    });

document.addEventListener("DOMContentLoaded", function () {
    function share() {
        this.classList.toggle('active');
        document.querySelector('.social').classList.toggle('active');
    }
    document.querySelector('.share').addEventListener('click', share);
});