var m,n,m1,n1,r=1;
var esc=0;
function una_matriz(){
  var x="";
  x+='<input type="text" id="d1"> <input type="text" id="d2"> <button onclick="leer_matriz()">Generar Matriz</button>';
  document.getElementById("Una_M").innerHTML = "";
  document.getElementById("Dos_M").innerHTML = "";
  document.getElementById("res").innerHTML = "";
  document.getElementById("lectura").innerHTML = x;
}

function dos_matrices(){
  var x="";
  x+='<input type="text" id="d1"> <input type="text" id="d2"> <button onclick="leer_1M()">Generar Matriz</button> <input type="text" id="d3"> <input type="text" id="d4"> <button onclick="leer_2M()">Generar Matriz</button>';
  document.getElementById("Una_M").innerHTML = "";
  document.getElementById("res").innerHTML = "";
  document.getElementById("lectura").innerHTML = x;
}
function leer_1M() {
  var i,j;
  var x = "<h2> Matriz 1 </h2> <br>";
  m = document.getElementById("d1").value;
  n = document.getElementById("d2").value;
  for(i=1;i<=m;i++){
  for(j=1;j<=n;j++){
  x+='<input type="text" id="wea'+i+j+'"  </input>  ';
  }
  x+='<br>'
  }
  document.getElementById("Una_M").innerHTML = x;
  }
  function leer_2M() {
  var i,j;
  var x = "<h2> Matriz 2 </h2> <br>";
  m1 = document.getElementById("d3").value;
  n1 = document.getElementById("d4").value;
  for(i=1;i<=m1;i++){
  for(j=1;j<=n1;j++){
  x+='<input type="text" id="osi'+i+j+'"  </input>  ';
  }
  x+='<br>';
  }
  x+='<br> <input type="button" value="Sumar" onclick="Sumar()"> <input type="button" value="Restar" onclick="Restar()"> <input type="button" value="Multiplicar" onclick="Multiplicar()">';
  document.getElementById("Dos_M").innerHTML = x;
  }

  function Sumar(){
    var x="";
    if((m!=m1)||(n!=n1)){
      x="Error: Las matrices no tienen la misma dimensión";
      document.getElementById("res").innerHTML = x;
    }
    else{
      var i,j;
      var x=[],y=[],z=[];
      var al="";
      for(i=1;i<=m;i++){
      x[i]=[];
      y[i]=[];
      z[i]=[]
      for(j=1;j<=n;j++){
      x[i][j]=parseInt(document.getElementById("wea"+i+j).value,10);
      //alert(j);
      y[i][j]=parseInt(document.getElementById("osi"+i+j).value,10);
      z[i][j]=x[i][j]+y[i][j];
      al+=z[i][j]+"  ";
      }
      al+="<br>";
      }
      document.getElementById("res").innerHTML = al;
    }
  }
  function Restar(){
    var x="";
    if((m!=m1)||(n!=n1)){
      x="Error: Las matrices no tienen la misma dimensión";
      document.getElementById("res").innerHTML = x;
    }
    else{
      var i,j;
      var x=[],y=[],z=[];
      var al="";
      for(i=1;i<=m;i++){
      x[i]=[];
      y[i]=[];
      z[i]=[]
      for(j=1;j<=n;j++){
      x[i][j]=parseInt(document.getElementById("wea"+i+j).value,10);
      //alert(j);
      y[i][j]=parseInt(document.getElementById("osi"+i+j).value,10);
      z[i][j]=x[i][j]-y[i][j];
      al+=z[i][j]+"  ";
      }
      al+="<br>";
      }
      document.getElementById("res").innerHTML = al;
    }
  }

  function Multiplicar(){
    var x="";
    if(n!=m1){
      x="Error: La cantidad de columnas de la matriz A es diferente de la cantidad de filas de la matriz B";
      document.getElementById("res").innerHTML = x;
    }
    else{
      var i,j,k;
      var a=[],b=[],c=[];
      for(i=1;i<=m;i++){
        a[i]=[];
        for(j=1;j<=n;j++){
            a[i][j] = parseInt(document.getElementById("wea"+i+j).value,10);
          }
        }
      for(i=1;i<=m1;i++){
        b[i]=[];
        for(j=1;j<=n1;j++){
          b[i][j]= parseInt(document.getElementById("osi"+i+j).value,10);
        }
      }
      for(i=1;i<=m;i++){
        c[i]=[];
        for(j=1;j<=n1;j++){
          c[i][j]=0;
          for(k=1;k<=n;k++){
            //alert(i+""+j+""+k);
            //alert(a[i][k]);
            //alert(b[k][j]);
            c[i][j] = c[i][j]+a[i][k]*b[k][j];
            

          }
          x+=c[i][j]+"   ";
        }
        x+="<br>";
      }
      document.getElementById("res").innerHTML = x;
      }
          }
function leer_matriz() {
  var i,j;
  var x = "";
  m = document.getElementById("d1").value;
  n = document.getElementById("d2").value;
  for(i=1;i<=m;i++){
  for(j=1;j<=n;j++){
  x+='<input type="text" id="wea'+i+j+'"  </input>  ';
  }
  x+='<br>'
  }
  x+='<br> <input type="button" value="Transponer" onclick="SubirDatos()"> <input type="button" value="Escalar" onclick="Escalar()">';
  document.getElementById("Dos_M").innerHTML = "";
  document.getElementById("Una_M").innerHTML = x;
  }
  
  function SubirDatos(){
  var i,j;
  var x=[];
  var y="";
  //alert(x);
  for(i=1;i<=n;i++){
  x[i]=[];
  //alert(x);
  for(j=1;j<=m;j++){
  //alert(x);
  x[i][j]=(document.getElementById("wea"+j+i).value);
  //alert(x[i][j]);
  y+=x[i][j]+"  ";
  }
  y+="<br>";
  }
 // y="<p>"+x[1][1]+"</p>";
  document.getElementById("res").innerHTML = y;
  }
  function Escalar(){
    esc=parseFloat(prompt("Ingrese el escalar"),10);
    var i,j;
    var a=[],c=[];
    for(i=1;i<=m;i++){
      a[i]=[];
      c[i]=[];
      for(j=1;j<=n;j++){
        a[i][j]=parseInt(document.getElementById("wea"+i+j).value,10);
        c[i][j]=a[i][j]*esc;
      }
    }
    document.getElementById("res").innerHTML = c;
  }