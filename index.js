let current_width;
let break_point = false;

$(document).on("click", "#nav_menu" , function(){
    $("#w_nav").animate({
        height: 'toggle'
    });
});

$(window).on("load", function(){
    current_width = $(window).width();
    if(current_width < 800 && !break_point){
        nav_wraper("wrap");
        break_point = true;
    }else if(current_width >= 800){
        nav_wraper("unwrap");
        break_point = false;
    }
});

$(window).on("resize", function(){
    current_width = $(window).width();
    if(current_width < 800 && !break_point){
        nav_wraper("wrap");
        break_point = true;
    }else if(current_width >= 800){
        nav_wraper("unwrap");
        break_point = false;
    }
});

function nav_wraper(action){
    if(action == "wrap"){
        $("#navbar").html('<i id = "nav_menu" style = "font-size: 3rem;" class = "icon-menu-outline"></i> <div id = "w_nav" style = "display: flex" ><a href = "#about"> <div id = "nav_about" class = "nav_tile">Home</div> </a> <a href = "#about_border"> <div id = "nav_about" class = "nav_tile">About</div> </a> <a href = "#work_border"> <div id = "nav_work" class = "nav_tile">Work</div> </a> <a href = "#contact_border"> <div id = "nav_footer" class = "nav_tile">Contact</div> </a></div>');
        $("#w_nav").hide();
    }else{
        $("#navbar").html('<a href = "#about"> <div id = "nav_about" class = "nav_tile">Home</div> </a> <a href = "#about_border"> <div id = "nav_about" class = "nav_tile">About</div> </a> <a href = "#work_border"> <div id = "nav_work" class = "nav_tile">Work</div> </a> <a href = "#contact_border"> <div id = "nav_footer" class = "nav_tile">Contact</div> </a>');
        $("#w_nav").remove();
    }
}