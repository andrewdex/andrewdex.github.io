/*Andrewdex - Dilusha Gonagala
*Copyright &Copyright Dilusha
*/


var phrase;
phrase = "<div class='legend'>{ Dilusha Gonagala }</div>";
phrase += "<div class='line marginTop10'></div>";
phrase += "<div class='legend marginTop10'>AKA { Andrew dEX @andrewdex}</div>";
phrase += "<div class='mottohead marginTop10'>I am a Fullstack FrontEnd Software Engineer...</div>";
// phrase += "<div class='await marginTop10'>Coming Soon !...</div>";
phrase += "<div class='legend marginTop10'><a href='http://twiter.com/andrewdex'>@andrewdex</a></div>";
phrase += "<div align='center'><img src='images/me.jpg' width='150' height='150'/></div>";
phrase += "<h3 align='left' class='heading fontWhite'>{ Skills... }</h3>";
phrase += "<div align='left' class='fontWhite'>Technologies / Programming Languages: <span class='fontBlue'>JAVA, JavaScript, C++ , C# ,PHP , AjaX, Android, Ruby, SQL, MySQL</span></div>";
phrase += "<div align='left' class='fontWhite'>Libraries And Frameworks / Dependency Managers: <span class='fontBlue'>JEE, JSE, Maven, Node JS, MeteorJS, NPM, jQuery</span></div>";
phrase += "<div align='left' class='fontWhite'>Version Controllers: <span class='fontBlue'>SVN, GIT , TFS</span></div>";
phrase += "<div align='left' class='fontWhite'>IDEs / Code Editors: <span class='fontBlue'>InteliJ Idea Ultimate, Eclipse,Netbeans, Visual Studio , Sublime 3 and Brackets... :) </span></div>";
phrase += "<div align='left' class='fontWhite'>IDEs / Code Editors: <span class='fontBlue'>Linux : Fedora, Backtrack, Ubuntu, Windows 95 - 8, MAC Os, IOS, Android ... :) </span></div>";
phrase += "<div align='left' class='fontWhite'>Designing Tools: <span class='fontBlue'>Photoshop, Inkscape</span></div>";
phrase += "<h3 align='left' class='heading fontWhite'>{ Awards... }</h3>";
phrase += "<div align='left' class='heading fontWhite'>1st Colombo JavaScript Hackathon : <span class='fontBlue'>1st place : Ko-Train JS App</span> </div>";

phrase +="<div align='center' class='imgLess'><a href='https://www.facebook.com/softadex'  target='_blank'><img src='images/fb.png'></a><a href='https://twitter.com/andrewdex' target='_blank'><img src='images/tw.png' ></a><a href='http://lk.linkedin.com/pub/dilusha-gonagala/56/9b4/832/' target='_blank'><img src='images/lk.png'></a><a href='http://github.com/andrewdex' target='_blank'><img src='images/git.png'></a></div>"

var typeme = phrase,
    i = 0,
    isTag, text;
(function type() {
    text = typeme.slice(0, ++i);
    if (text === typeme) return;
    document.getElementById('typewriter').innerHTML = text;
    var char = text.slice(-1);
    if (char === '<') isTag = true;
    if (char === '>') isTag = false;
    if (isTag) return type();
    setTimeout(type, 5)
}());




$(function(){

$("#resumeClick").click(function(){

        $("#aboutClick").removeClass("active");
        $("#projectsClick").removeClass("active");
        $("#contactsClick").removeClass("active");
        

        $(this).addClass("active");
        $('html,body').animate({
            scrollTop: $("#resume").offset().top -52
        }, 1000);

});

$("#projectsClick").click(function(){

        $("#aboutClick").removeClass("active");
        $("#resumeClick").removeClass("active");
        $("#contactsClick").removeClass("active");
        

        $(this).addClass("active");
        $('html,body').animate({
            scrollTop: $("#projects").offset().top -52
        }, 1000);

});


$("#aboutClick").click(function(){
        $("#projectsClick").removeClass("active");
        $("#resumeClick").removeClass("active");
        $("#contactsClick").removeClass("active");
        
        $(this).addClass("active");
        $('html,body').animate({
            scrollTop: $("#aboutme").offset().top -52
        }, 1000);

});






})