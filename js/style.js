$(function(){
    var block = $("#header-nav")
    var name = document.querySelector("#name")
    console.log(block)
    block.hover(function(){
        $("#name").fadeIn(2000)
        $("#name2").fadeOut()
        $("#name3").fadeIn(2000)
    },function(){
        $("#name").fadeOut()
        $("#name3").fadeOut()
        $("#name2").fadeIn()
        
    })

    tl = new TimelineMax();
    if(window.innerWidth>767){
        tl.fromTo("#image img",1.2,{x: "-150%"},{x: "5%", ease: Power2.easeInOut});
        tl.fromTo("#imagecontent",{x: "+200%"},{x: "10%", ease: Power2.easeInOut,duration:1.2});
    }

    if(window.innerWidth<768){
        $("#imagecontain2 .container").hover(function(){
            console.log("Hoverin")
            $("#image").fadeOut()
            $("#imagecontent").delay(300).fadeIn()
        },function(){
            console.log("HoverOut")
            $("#imagecpntent").fadeOut()
            $("#image").delay(300).fadeIn()

        })
    }

    

}(window));