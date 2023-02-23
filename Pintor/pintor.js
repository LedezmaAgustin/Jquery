var x;
x=$(document);
x.ready(inicio);

function inicio(){
	var x;
	x=$("#rojo");
	x.click(mueverrojo);
} 
function mueverrojo(){
	var x;
	x=$("#lienzo");
	x.mousemove(pintarrojo);
}
function pintarrojo(){
	var x = event.clientX;
	var y = event.clientY;
	var z=$("#lienzo");
	z.append("<div style="position:absolute;width:10px;height:10px;background:rgba(255,0,0,0.1);border-radius:5px;-webkit-transform:translate("+x+"px,"+y+"px)"</div>");
}

function mueveverde(){
	var x;
	x=$("#lienzo");
	x.mousemove(pintaverde);
}
function pintaverde(){
	var x = event.clientX;
	var y = event.clientY;
	var z=$("#lienzo");
	z.append("<div style="position:absolute;width ("+x+" px,"+y","+" px) "</div>")
}
