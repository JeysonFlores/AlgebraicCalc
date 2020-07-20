from flask import Flask, render_template
from flask import request
from sympy.solvers import solve
from sympy import plot
import json
import Operaciones as o
import Forms1
import time
app = Flask(__name__)
#-------------------------------------Ecuaciones-------------------------
@app.route("/Ecuaciones", methods = ['GET', 'POST'])
def main_ec():
  graf=""
  ec_form = Forms1.Formularios_EC(request.form)
  ecr=""
  if (request.method) == 'POST':
    ec=str(ec_form.Ecuacion.data)
    if(ec==''):
    	ecr='CampoVacio'
    else:
      try:
    	  ecr = solve(ec)
      except Exception as e:
        ecr = "Sintaxis Inválida"
    if(ecr!='Sintaxis Inválida'):
      graf=o.Graficar(ec)
      if(graf=="Sintaxis Inválida"):
        ecr = graf
        graf = None
      #ecr = o.Reem(ecr)
  return render_template('Ecuaciones.html', formu = ec_form, res = ecr, graf=graf,no_cache=time.time())
#----------------------------------------------Desigualdades---------------
@app.route("/Desigualdades", methods = ['GET', 'POST'])
def main_des():
  ec_form = Forms1.Formulario_DES(request.form)
  ecr=""
  if (request.method) == 'POST':
    ec=str(ec_form.Ecuacion.data)
    if(ec==''):
    	ecr=''
    else:
      try:
    	  ecr = solve(ec, "x")
      except Exception as e:
        ecr = "Sintaxis Inválida"


  return render_template('Main.html', formu = ec_form, res = ecr)
#------------------Productos Cartesianos-------------------------------
@app.route("/Prods", methods = ['GET', 'POST'])
def main_prod():
  prod_form = Forms1.Formularios_AXB(request.form)
  prod = ""
  axb = ""
  oie = ""
  funk = ""
  if (request.method) == 'POST':
  	a = str(prod_form.A.data)
  	b = str(prod_form.B.data)
  	if((a=="") or (b=="")):
  		oie="Error: Uno de los campos está vacío"
  	else:
  		a = o.Conjunto(a)
  		b = o.Conjunto(b)
  		axb,funk = o.prod_cart(a,b)
  return render_template("prod_cart.html", formu = prod_form, axb = axb,error = oie, funk = funk)
#-------------------------------------Matrices-------------------------
@app.route("/M1", methods = ['GET', 'POST'])
def  main_mat1():
  return render_template("MatrizUna.html",no_cache=time.time())

@app.route("/M2")
def main_mat2():
  return render_template("MatrizDos.html")
@app.route("/Vectores", methods = ['GET', 'POST'])
def main_vec():
  return render_template("Vectores.html",no_cache=time.time())
  
@app.route("/FAQ",methods = ['GET', 'POST'])
def main_faq():
  return render_template("FAQ.html")

if __name__ == '__main__':
    app.run(debug=True)
