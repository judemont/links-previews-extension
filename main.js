


links = document.getElementsByTagName("a");

body = document.getElementsByTagName("body")[0];

const iframe_div_id = "page_iframe_container"

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", function(event) {
        link = event.target.href;
        console.log(link);
        
        

        if(typeof(document.getElementById(iframe_div_id)) != 'undefined' && document.getElementById(iframe_div_id) != null){
            document.getElementById(iframe_div_id).remove();
        }

        let my_div = document.createElement("div");
        my_div.id = iframe_div_id ;



        document.getElementsByTagName("body")[0].appendChild(my_div);

        document.getElementById(iframe_div_id).innerHTML = "<iframe width=500px height=500px src='" + link + "'</iframe>";
        document.getElementById(iframe_div_id).style.position = "fixed";
        document.getElementById(iframe_div_id).style.left = window.innerWidth /2 + "px";
        document.getElementById(iframe_div_id).style.top = window.innerHeight /2 + "px";

        document.getElementById(iframe_div_id).style.resize = "bot";
        document.getElementById(iframe_div_id).style.border = "1px solid black";
        document.getElementById(iframe_div_id).style.overflow = "auto";

        
        document.addEventListener("click", function(event) {
            document.getElementById(iframe_div_id).style.display = "none";   
        });

        
    });
}
