import numpy as np
import matplotlib.pyplot as plt
def Conjunto(conj):
    conj += ","
    c = [ ]
    x = ""
    for i in range(0,len(conj)):
        if(conj[i] != ","):
            x+=conj[i]
        else:
            if(x in c):
                x=""
            else:
                c.append(x)
                x = ""
    return c

def Vector(v):
    v += ","
    xx = []
    yy = []
    von = True
    x = ""
    boo = True

    for i in range(0,len(v)):
        if(v[i] != ","):
            x+= str(v[i])
        else:
            try:
                x = eval(x)
            except Exception as e:
                von = False
                return c,von
            if(boo == True):
                xx.append(x)
                boo = False
            else:
                yy.append(x)
                boo = True
            x = ""
    return xx,yy,von

def matriz(c,a,b):
    for i in range(0,len(a)):
        c.append([]) 
        for j in range(0,len(b)):
            c[i].append(0)
    return c
def tostrig(dic):
    x = ""
    for i in range(0,len(dic)):
        if((dic[i]=="[") or (dic[i]=="]")):
            pass
        elif((dic[i]=="'")):
            pass
        elif((dic[i]==" ")):
            pass
        else:
            x+=dic[i]
    return x

def prod_cart(a,b):
    x = [ ]
    x = matriz(x,a,b)
    for i in range(0,len(a)):
        for j in range(0,len(b)):
            x[i][j] = "("+a[i]+","+b[j]+")"
    if(len(b)==1):
        funk = "El producto cartesiano es funcion"
    else:
        funk = "El producto cartesiano no es funcion"
    x = tostrig(str(x))
    return x,funk

def Graficar(ec):
    numx = Arch()
    ec = str(ec)
    x = np.array(range(-50,50))
    try:
        y = eval(ec)
    except Exception as e:
        return "Sintaxis Inválida"
    yy = ec
    yyy = eval(yy)
    plt.plot(x,yyy)
    plt.savefig('static/IMG_EC'+str(numx)+'.png')
    plt.clf()
    return numx

def Arch():
    archivo = open("Itera.txt","r")
    aux = archivo.readline()
    if(aux == "1"):
        num = aux
        archivo.close()
        archivo = open("Itera.txt","w")
        archivo.seek(0)
        archivo.truncate()
        archivo.write("0")
        archivo.close()
        return num
    elif(aux == "0"):
        num = aux
        archivo.close()
        archivo = open("Itera.txt","w")
        archivo.seek(0)
        archivo.truncate()
        archivo.write("1")
        archivo.close()
        return num
    
#def Reem(x):
 #   for i in range(0,len(x):
  #      x[i].replace("I","i")
   #     x[i].replace("*I","i")
    #return
