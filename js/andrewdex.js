var phrase;
phrase = "<div class='legend'>{ Dilusha Gonagala }</div>";
phrase += "<div class='line marginTop10'></div>";
phrase += "<div class='legend marginTop10'>AKA { Andrew dEX @andrewdex}</div>";
phrase += "<div class='mottohead marginTop10'>The Fullstack Software Engineer...</div>";
// phrase += "<div class='await marginTop10'>Coming Soon !...</div>";
phrase += "<div class='legend marginTop10'><a href='http://twiter.com/andrewdex'>@andrewdex</a></div>";
phrase += "<div align='center'><img src='images/me.jpg' width='150' height='150'/></div>";
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
    setTimeout(type, 80)
}());