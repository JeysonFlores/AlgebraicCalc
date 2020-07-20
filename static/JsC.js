var m,n,m1,n1,r=1;
var esc=0;


function expand(frac){
  var i,j,ent,num,den,enc1,enc2,enc3,nfrac;
  enc1=false;
  enc2=false;
  enc3=false;
  for(i=0;i<=frac.length;i++){
    alert(frac[i]);
    if((enc1==false)&&(enc2==false)&&(enc3==false)){
      if(frac[i]==" "){
        enc1==true;
      }
      else{
      ent += frac[i];
    }
    }
    if((enc1==true)&&(enc2==false)&&(enc3==false)){
      if(frac[i]=="/"){
        enc2==true;
      }
      else{
        num+=frac[i];
      }
    }
    if((enc1==true)&&(enc2==true)&&(enc3==false)){
      den+=frac[i];
    }
  }
 // alert(ent);
    nfrac = num+"/"+den;
  }

function una_matriz(){
  var x="";
  x+='<input class="mat" type="text" id="d1"> x <input class="mat" type="text" id="d2"> <button onclick="leer_matriz()">Generar Matriz</button>';
  document.getElementById("Una_M").innerHTML = "";
  document.getElementById("Dos_M").innerHTML = "";
  document.getElementById("res").innerHTML = "";
  document.getElementById("lectura").innerHTML = x;
}

function dos_matrices(){
  var x="";
  x+='<input class="mat" type="text" id="d1"> x <input class="mat" type="text" id="d2"> <button onclick="leer_1M()">Generar Matriz</button> <input class="mat" type="text" id="d3"> x <input class="mat" type="text" id="d4"> <button onclick="leer_2M()">Generar Matriz</button>';
  document.getElementById("Una_M").innerHTML = "";
  document.getElementById("res").innerHTML = "";
  document.getElementById("lectura").innerHTML = x;
}
function leer_1M() {
  var i,j;
  var x = "<h2> Matriz A </h2> <br>";
  m = document.getElementById("d1").value;
  n = document.getElementById("d2").value;
  for(i=1;i<=m;i++){
  for(j=1;j<=n;j++){
  x+='<input class="mat" type="text" id="wea'+i+j+'"  </input>  ';
  }
  x+='<br>'
  }
  document.getElementById("Una_M").innerHTML = x;
  }
  function leer_2M() {
  var i,j;
  var x = "<h2> Matriz B </h2> <br>";
  m1 = document.getElementById("d3").value;
  n1 = document.getElementById("d4").value;
  for(i=1;i<=m1;i++){
  for(j=1;j<=n1;j++){
  x+='<input class="mat" type="text" id="osi'+i+j+'"  </input>  ';
  }
  x+='<br>';
  }
  x+='<br> <input type="button" value="Sumar" onclick="Sumar()"> <input type="button" value="Restar" onclick="Restar()"> <input type="button" value="Multiplicar" onclick="Multiplicar()">';
  document.getElementById("Dos_M").innerHTML = x;
  }

  function Sumar(){
    var x="";
    var aux,aux2;
    if((m!=m1)||(n!=n1)){
    //  x="Error: Las matrices no tienen la misma dimensión";
      document.getElementById("res").innerHTML = "";
      AlertaMatDim();
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
      x[i][j]=new Fraction(eval(document.getElementById("wea"+i+j).value,10));
      y[i][j]=new Fraction(eval(document.getElementById("osi"+i+j).value,10));
      z[i][j]=(x[i][j].add(y[i][j]));
      //z[i][j]=x[i][j].add(y[i][j]);
     // alert(z[i][j].toString()+"  ");
      //al+=z[i][j].toString()+"  ";
      }
      //al+="<br>";
      }
      MostrarMatriz(z,m,n);
      OE();
    }
  }
  function Restar(){
    var x="";
    if((m!=m1)||(n!=n1)){
     // x="Error: Las matrices no tienen la misma dimensión";
    document.getElementById("res").innerHTML = "";
     AlertaMatDim();
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
      x[i][j]=new Fraction(eval(document.getElementById("wea"+i+j).value,10));
      //alert(j);
      y[i][j]=new Fraction(eval(document.getElementById("osi"+i+j).value,10));
      z[i][j]=(x[i][j].sub(y[i][j]));
      al+=z[i][j].toString()+"  ";
      }
      al+="<br>";
      }
      MostrarMatriz(z,m,n);
      OE();
    }
  }

  function Multiplicar(){
    var x="";
    if(n!=m1){
     // x="Error: La cantidad de columnas de la matriz A es diferente de la cantidad de filas de la matriz B";
      //document.getElementById("res").innerHTML = x;
      AlertaMatMult();
    }
    else{
      var i,j,k;
      var a=[],b=[],c=[];
      for(i=1;i<=m;i++){
        a[i]=[];
        for(j=1;j<=n;j++){
            a[i][j] =new Fraction(eval(document.getElementById("wea"+i+j).value,10));
           // alert(a[i][j].toString());
          }
        }
      for(i=1;i<=m1;i++){
        b[i]=[];
        for(j=1;j<=n1;j++){
          b[i][j]=new Fraction(eval(document.getElementById("osi"+i+j).value,10));
        }
      } 
      for(i=1;i<=m;i++){
        c[i]=[];
        //a[i]=[];
        //b[i]=[];
        for(j=1;j<=n1;j++){
          //a[i][j]=new Fraction(eval(document.getElementById("wea"+i+j).value,10));
          //b[i][j]=new Fraction(eval(document.getElementById("osi"+i+j).value,10));
          c[i][j]=new Fraction(0);
          for(k=1;k<=n;k++){
            aux = a[i][k].mul(b[k][j]);
            c[i][j] = c[i][j].add(aux);
          }
          //c[i][j] = c[i][j].toFraction();
          x+=c[i][j].toString()+"   ";
        }
        x+="<br>";
      }
      MostrarMatrizM(c,m,n1);
      OE();
      }
          }
function leer_matriz() {
  var i,j;
  var x = "";
  m = document.getElementById("d1").value;
  n = document.getElementById("d2").value;
  for(i=1;i<=m;i++){
  for(j=1;j<=n;j++){
  x+='<input class="mat" type="text" id="wea'+i+j+'"</input>';
  }
  x+='<br>'
  }
  x+='<br> <input class="btn" type="button" value="Transponer" onclick="SubirDatos()"> <input class="btn" type="button" onclick="Inversa1(2)" value="Inversa"> <input class="btn" type="button" value="Escalar" onclick="Escalar()"><input class="btn" type="button" value="Determinante" onclick="DetMat1()"></div>';
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
  x[i][j]=new Fraction(eval(document.getElementById("wea"+j+i).value,10));
  //alert(x[i][j]);
  y+=x[i][j]+"  ";
  }
  y+="<br>";
  }
 // y="<p>"+x[1][1]+"</p>";
 MostrarMatrizT(x);
 OE();
  }
  function Escalar(){
    if(Evaluar()==false){
    esc=new Fraction(eval(prompt("Ingrese el escalar"),10));
    var i,j;
    var a=[],c=[];
    for(i=1;i<=m;i++){
      a[i]=[];
      c[i]=[];
      for(j=1;j<=n;j++){
        a[i][j]=new Fraction(eval(document.getElementById("wea"+i+j).value,10));
        c[i][j]=a[i][j].mul(esc);
      }
    }
    }
    else{
      c = "Error";
    }
    MostrarMatriz(c);
    OE();
  }
  function Evaluar(){
    var i,j,fail=false;
    var a=[];
    for(i=1;i<=m;i++){
      a[i] = [];
      for(j=1;j<=n;j++){
        a[i][j]=eval(document.getElementById("wea"+i+j).value,10);

        if(isNaN(a[i][j])==true){
          //alert(fail);
          fail=true;
        }
      }
    }
    return fail;
  }
 /* function Determinante(){
    if(1<2){

    }
    else{

    }
  } */

  function ost(){
    var a = eval(prompt("a"));
    var b = eval(prompt("b"));
    var x = new Fraction(a);
    var y = new Fraction(b);
    var z = x.add(y);
    z = z.toFraction();
    alert(z.toString());
  }
  function SacarEsc(x){
    var U = new Fraction(1);
    var R = U.div(x);
    var rs = R.toFraction();
    return rs;
  }
  function SacarCero(x,y){
    var MU = new Fraction(-1);
    var R = MU.mul(x.div(y));
    var rs = R.toFraction();
    //alert(rs);
    return rs;
  }
  function CalcDet1(a){
    var i,j;
    var mul = new Fraction(1);
    for(i=1;i<=m;i++){
      for(j=1;j<=n;j++){
        if(i==j){
          mul = mul.mul(a[i][j]);
        }
      }
    }
    return mul;
  }
  function DetMat1(){
    var i,j,k,esc;
    var a=[],aux=[];
    if(m==n){
    for(i=1;i<=m;i++){
        a[i]=[];
        for(j=1;j<=n;j++){
            a[i][j] =new Fraction(eval(document.getElementById("wea"+i+j).value,10));
           // alert(a[i][j].toString());
          }
        }
    for(i=1;i<=m;i++){
      for(j=1;j<=n;j++){

        if(j>i){
          esc = SacarCero(a[j][i],a[i][i]);
          for(k=1;k<=n;k++){
            aux[k] = a[i][k];
            aux[k] = aux[k].mul(esc);
            a[j][k] = a[j][k].add(aux[k]);
          }
        }

      }
    }
    var det = new Fraction(CalcDet1(a));

    //alert("Determinante de Matriz: "+det.toFraction());
    AlertaDet(det);
  }
  else{
    AlertaMatNoC();
  }
}
  function MostrarMatriz(a){
  var i,j;
  var y="";
  for(i=1;i<=m;i++){
    for(j=1;j<=n;j++){
     y+="<input class='mat2' type='text' value='"+a[i][j].toFraction()+"'disabled> ";
   }
  y+="<br>";
  }
 // y="<p>"+x[1][1]+"</p>";
  document.getElementById("res").innerHTML = y;
  }
  function MostrarMatrizT(a){
  var i,j;
  var y="";
  for(i=1;i<=n;i++){
    for(j=1;j<=m;j++){
     y+="<input class='mat2' type='text' value='"+a[i][j].toFraction()+"'disabled> ";
   }
  y+="<br>";
  }
 // y="<p>"+x[1][1]+"</p>";
  document.getElementById("res").innerHTML = y;
  }
  function MostrarMatrizM(a,x,y){
  var i,j;
  var y="";
  for(i=1;i<=m;i++){
    for(j=1;j<=n1;j++){
     y+="<input class='mat2' type='text' value='"+a[i][j].toFraction()+"'disabled> ";
   }
  y+="<br>";
  }
 // y="<p>"+x[1][1]+"</p>";
  document.getElementById("res").innerHTML = y;
  }

  function Inversa1(){
    var i,j,k,esc;
    var a=[],aux=[];
    var b=[],aux2=[];
    if(m==n){
    for(i=1;i<=m;i++){
        a[i]=[];
        b[i]=[];
        for(j=1;j<=n;j++){
            b[i][j] = new Fraction(0);
            a[i][j] =new Fraction(eval(document.getElementById("wea"+i+j).value,10));
            if(i==j){
              b[i][j] = new Fraction(1);
            }
          }
        }
    for(i=1;i<=m;i++){
      for(j=1;j<=n;j++){

        if(j>i){
          esc = SacarCero(a[j][i],a[i][i]);
          for(k=1;k<=n;k++){
            aux[k] = a[i][k];
            aux2[k] = b[i][k];
            aux[k] = aux[k].mul(esc);
            aux2[k] = aux2[k].mul(esc);
            a[j][k] = a[j][k].add(aux[k]);
            b[j][k] = b[j][k].add(aux2[k]);
          }
        }

      }
    }
    var det = new Fraction(CalcDet1(a));
    if(det == 0){
      alert("No tiene inversa");
    }
    else{
    //  alert("Tiene inversa");
      for(i=n;i>=1;i--){
      for(j=n;j>=1;j--){
        if(i==j){
          esc = SacarEsc(a[i][j]);
          for(k=1;k<=n;k++){
            a[i][k] = a[i][k].mul(esc);
            b[i][k] = b[i][k].mul(esc);
          }
        }
        if(i>j){
          esc = SacarCero(a[j][i],a[i][i]);
          for(k=1;k<=n;k++){
            aux[k] = a[i][k];
            aux2[k] = b[i][k];
            aux[k] = aux[k].mul(esc);
            aux2[k] = aux2[k].mul(esc);
            a[j][k] = a[j][k].add(aux[k]);
            b[j][k] = b[j][k].add(aux2[k]);
          }
        }
      }
    }
    MostrarMatriz(b);
    OE();
    }
    
  }
  else{
    AlertaMatNoC();
  }
}
  function GenVecA(){
    var i,j;
    var x = "<h2> Vector A </h2> <br>";
    var D = document.getElementById("D").value;
    for(j=1;j<=D;j++){
    x+='<input class="mat" type="text" id="VA'+j+'"  </input>  ';
    }
    document.getElementById("VEC1").innerHTML = x;
  }

  function GenVecB(){
    var i,j;
    var x = "<h2> Vector B </h2> <br>";
    var D = document.getElementById("D2").value;
    for(j=1;j<=D;j++){
    x+='<input class="mat" type="text" id="VB'+j+'"  </input>  ';
    }
    x+='<br> <input type="button" value="Sumar" onclick="SumarV();"> <input type="button" value="Restar" onclick="RestarV()"> <input type="button" value="Escalar A" onclick="VecEscA()"><input type="button" value="Escalar B" onclick="VecEscB()"><input type="button" value="Magnitud A" onclick="MagA()"><input type="button" value="Magnitud B" onclick="MagB()"> <input type="button" value="A ° B" onclick="PPG()"><input type="button" value="A X B" onclick="PC()"><input type="button" value="Proyectar" onclick="Proy()"><input type="button" value="Dir A" onclick="VecDirA()"><input type="button" value="Dir B" onclick="VecDirB()">';
    document.getElementById("VEC2").innerHTML = x;
  }

function MostrarVector(V,D){
  var i;
  var x="";
  for(i=1;i<=D;i++){
    x+="<input class='mat2' type='text' value='"+V[i].toFraction()+"'disabled> ";
  }
  document.getElementById("res").innerHTML = x;
}
function SumarV(){
  var i;
  var a = [];
  var b = [];
  var c = [];
  var V1D = document.getElementById("D").value;
  var V2D = document.getElementById("D2").value;
  /*if((V1D>0)&&(V2D>0))/*||(V1D != V2D))*///{
   /* document.getElementById("D2").innerHTML = "No hay vectores";
  }
  else{*/
    if(V1D==V2D){
    for(i=1;i<=V2D;i++){
      //alert(a[i]);
      a[i] = new Fraction(eval(document.getElementById("VA"+i).value,10));
      b[i] = new Fraction(eval(document.getElementById("VB"+i).value,10));
      c[i] = new Fraction(a[i].add(b[i]));
    }
    MostrarVector(c,V1D);
    OE();
//  }

}
else{
  AlertaVecDim();
}
}
function RestarV(){
  var i;
  var a = [];
  var b = [];
  var c = [];
  var V1D = document.getElementById("D").value;
  var V2D = document.getElementById("D2").value;
  /*if((V1D>0)&&(V2D>0))/*||(V1D != V2D))*///{
   /* document.getElementById("D2").innerHTML = "No hay vectores";
  }
  else{*/
    if(V1D==V2D){
    for(i=1;i<=V2D;i++){
      //alert(a[i]);
      a[i] = new Fraction(eval(document.getElementById("VA"+i).value,10));
      b[i] = new Fraction(eval(document.getElementById("VB"+i).value,10));
      c[i] = new Fraction(a[i].sub(b[i]));
    }
    MostrarVector(c,V1D);
    OE();
//  }

}
else{
  AlertaVecDim();
}
}
  function AlertaMatDim(){
    Swal.fire({
  title: 'Error',
  text: 'Las matrices no tienen la misma dimensión',
  icon: 'error',
  confirmButtonText: 'Ok'
})
  }
  function AlertaVecDim(){
    Swal.fire({
  title: 'Error',
  text: 'Los Vectores no tienen la misma dimensión',
  icon: 'error',
  confirmButtonText: 'Ok'
})
  }
  function AlertaMatMult(){
    Swal.fire({
  title: 'Error',
  text: 'La cantidad de columnas de la matriz A es diferente de la cantidad de filas de la matriz B',
  icon: 'error',
  confirmButtonText: 'Ok'
})
  }

  function AlertaDet(a){
    Swal.fire('Determinante de la Matriz:'+a.toFraction())
  }
  function AlertaMatNoC(){
    Swal.fire({
  title: 'Error',
  text: 'La Matriz no es cuadrada',
  icon: 'error',
  confirmButtonText: 'Ok'
})
  }
  function AlertaVecDif(){
    Swal.fire({
  title: 'Error',
  text: 'Los vectores no tienen la misma dimensión',
  icon: 'error',
  confirmButtonText: 'Ok'
})
  }
  function AlertaProdCruz(){
    Swal.fire({
  title: 'Error',
  text: 'El producto cruz solo se puede realizar con 2 vectores de R3',
  icon: 'error',
  confirmButtonText: 'Ok'
})
  }

function Im(){
  Swal.fire({
  title: 'Sweet!',
  text: 'Modal with a custom image.',
  imageUrl: 'descarga.png',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})
}
function VecEscA(){
  var esc = eval(prompt("Escalar"));
  esc = new Fraction(esc);
  var i;
  var a = [];
   var c = [];
  var V1D = document.getElementById("D").value;
    for(i=1;i<=V1D;i++){
    a[i] = new Fraction(eval(document.getElementById("VA"+i).value,10));
    c[i] = a[i].mul(esc);
  }
  MostrarVector(c,V1D);
  OE();
}

function VecEscB(){
  var esc = eval(prompt("Escalar"));
  esc = new Fraction(esc);
  var i;
  var a = [];
   var c = [];
  var V1D = document.getElementById("D2").value;
    for(i=1;i<=V1D;i++){
    a[i] = new Fraction(eval(document.getElementById("VB"+i).value,10));
    c[i] = a[i].mul(esc);
  }
  MostrarVector(c,V1D);
  OE();
}
function MagA(){
  var i;
  var a = [];
  var aux=[];
  var c = new Fraction(0);
  var V1D = document.getElementById("D").value;
    for(i=1;i<=V1D;i++){
    a[i] = new Fraction(eval(document.getElementById("VA"+i).value,10));
    aux[i] = a[i].mul(a[i]);
    c = c.add(aux[i]);

}
c = c.pow(new Fraction(1,2));
AlertaMagA(c);
}
function MagB(){
  var i;
  var a = [];
  var aux=[];
  var c = new Fraction(0);
  var V1D = document.getElementById("D2").value;
    for(i=1;i<=V1D;i++){
    a[i] = new Fraction(eval(document.getElementById("VB"+i).value,10));
    aux[i] = a[i].mul(a[i]);
    c = c.add(aux[i]);

}
c = c.pow(new Fraction(1,2));
AlertaMagA(c);
}
function AlertaMagA(a){
    Swal.fire('Magnitud del Vector:'+a.toFraction())
  }

function PPG(){
  var i;
  var a = [];
  var b = [];
  var aux = new Fraction(0);
  var c = new Fraction(0);
  var V1D = document.getElementById("D").value;
  var V2D = document.getElementById("D2").value;
  /*if((V1D>0)&&(V2D>0))/*||(V1D != V2D))*///{
   /* document.getElementById("D2").innerHTML = "No hay vectores";
  }
  else{*/
    if(V1D==V2D){
    for(i=1;i<=V2D;i++){
      //alert(a[i]);
      a[i] = new Fraction(eval(document.getElementById("VA"+i).value,10));
      b[i] = new Fraction(eval(document.getElementById("VB"+i).value,10));
      aux = a[i].mul(b[i]);
      c = c.add(aux);
}
AlertaPPAb(c);
}
else{
  AlertaVecDim();
}
}

function AlertaPPAb(a){
    Swal.fire('A ° B :'+a.toFraction())
  }
function PC(){
  var i;
  var a = [];
  var b = [];
  var aux = new Fraction(0);
  var c = new Fraction(0);
  var V1D = document.getElementById("D").value;
  var V2D = document.getElementById("D2").value;
  if((V1D==3)||(V2D==3)){
    for(i=1;i<=3;i++){
      a[i] = new Fraction(eval(document.getElementById("VA"+i).value,10));
      b[i] = new Fraction(eval(document.getElementById("VB"+i).value,10));
  }
  c[1] = ((a[2].mul(b[3])).sub(a[3].mul(b[2])));
  c[2] = ((a[3].mul(b[1])).sub(a[1].mul(b[3])));
  c[3] = ((a[1].mul(b[2])).sub(a[2].mul(b[1])));
  MostrarVector(c,3);
  OE();
}
else{

}
}
function AlertaVecPC(){
    Swal.fire({
  title: 'Error',
  text: 'Los vectores tienen que ser de R3',
  icon: 'error',
  confirmButtonText: 'Ok'
})
  }

function PPP(){
  var i;
  var a = [];
  var b = [];
  var aux = new Fraction(0);
  var c = new Fraction(0);
  var V1D = document.getElementById("D").value;
  var V2D = document.getElementById("D2").value;
  /*if((V1D>0)&&(V2D>0))/*||(V1D != V2D))*///{
   /* document.getElementById("D2").innerHTML = "No hay vectores";
  }
  else{*/
    if(V1D==V2D){
    for(i=1;i<=V2D;i++){
      //alert(a[i]);
      a[i] = new Fraction(eval(document.getElementById("VA"+i).value,10));
      b[i] = new Fraction(eval(document.getElementById("VB"+i).value,10));
      aux = a[i].mul(b[i]);
      c = c.add(aux);
}
return c;
}
}
function MagAR(){
  var i;
  var a = [];
  var aux=[];
  var c = new Fraction(0);
  var V1D = document.getElementById("D").value;
    for(i=1;i<=V1D;i++){
    a[i] = new Fraction(eval(document.getElementById("VA"+i).value,10));
    aux[i] = a[i].mul(a[i]);
    c = c.add(aux[i]);

}
return c;
}
function Proy(){
  var a=[];
  var c = [];
  var V1D = document.getElementById("D").value;
  var V2D = document.getElementById("D2").value;
    if(V1D==V2D){
      if(V1D !=1 ){
  var uv = PPP();
  //alert(uv);
  var vv = MagAR();
  //alert(vv);
  var aux = new Fraction(uv.div(vv));
    for(i=1;i<=V1D;i++){
    a[i] = new Fraction(eval(document.getElementById("VA"+i).value,10));
    c[i] = a[i].mul(aux);
}
MostrarVector(c,V1D);
OE();
}
else{
AlertaVecPRO();
}
}
else{
  AlertaVecDif();
}
}
function AlertaVecPRO(){
    Swal.fire({
  title: 'Error',
  text: 'No se pueden hacer proyecciones de R ',
  icon: 'error',
  confirmButtonText: 'Ok'
})
  }
function VecDirA(){
  var V1D = document.getElementById("D").value;
  var res,x,y;
  var a = [];
  if(V1D == 2){
    for(i=1;i<=2;i++){
      a[i] = eval(document.getElementById("VA"+i).value,10); 
    }
    x = a[1];
    y = a[2];
    res = Math.atan(x/y);
    //res = ValidaRad(res);
    //alert(res);
    AlertaDirA(res);
  }
  else{
    AlertaVecDire();
  }
}
function VecDirB(){
  var V1D = document.getElementById("D2").value;
  var res,x,y;
  var a = [];
  if(V1D == 2){
    for(i=1;i<=2;i++){
      a[i] = eval(document.getElementById("VB"+i).value,10); 
    }
    x = a[1];
    y = a[2];
    res = Math.atan(x/y);
    //res = ValidaRad(res);
    //alert(res);
    AlertaDirA(res);
  }
  else{
    AlertaVecDire();
  }
}
function ValidaRad(r){
  var pi = Math.PI;
  if((r>=0)&&(r<=(pi/2))){
    return r;
  }
  else{
    if((r>=pi)&&(r<=(pi+(pi/2)))){
      return r + pi;
    }
    else{
      if((r>=(-1)*pi/2)&&(r<=(-1)*pi)){
        return r + (pi/2);
      }
      else{
        if((r>=(-1)*(pi+(pi/2)))&&(r<=(-1*2*pi))){
          return r + (pi+(pi/2));
        }
      }
    }
  }
  }
 function AlertaDirA(a){
    Swal.fire('Direccion del vector :'+a+"rad")
  }
function AlertaVecDire(){
    Swal.fire({
  title: 'Error',
  text: 'Solo se puede sacar la direccion de un vector de R2',
  icon: 'error',
  confirmButtonText: 'Ok'
})
  }
function MagAR2(){
  var i;
  var a = [];
  var aux=[];
  var c = new Fraction(0);
  var V1D = document.getElementById("D").value;
    for(i=1;i<=V1D;i++){
    a[i] = new Fraction(eval(document.getElementById("VA"+i).value,10));
    aux[i] = a[i].mul(a[i]);
    c = c.add(aux[i]);
    c = c.pow(new Fraction(1,2));
}
return c;
}
function MagAB2(){
  var i;
  var a = [];
  var aux=[];
  var c = new Fraction(0);
  var V1D = document.getElementById("D2").value;
    for(i=1;i<=V1D;i++){
    a[i] = new Fraction(eval(document.getElementById("VB"+i).value,10));
    aux[i] = a[i].mul(a[i]);
    c = c.add(aux[i]);
    c = c.pow(new Fraction(1,2));
}
return c;
}
function AngVec(){
  var i;
  var aux;
  var aux2;
  var res;
  var V1D = document.getElementById("D").value;
  var V2D = document.getElementById("D2").value;
    if(V1D==V2D){
      if(V1D == 2){
       // alert("awds");
      aux = PPP();
      alert(aux);
      aux2 = MagAR2().mul(MagAB2());
      res = aux / aux2;
      }
      res = Math.acos(res);
      alert(aux2);
      AlertaAngVec(res);
    }
    else{
      AlertaVecDire();
    }
    //AlertaVecDif();
}
function AlertaAngVec(a){
    Swal.fire('El angulo entre los vectores A y B es:'+a.toFraction()+"rad")
  }

  function OE(){
    const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1700,
  timerProgressBar: false,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Operacion realizada correctamente'
})
  }