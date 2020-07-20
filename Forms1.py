from wtforms import Form
from wtforms import StringField, FloatField

class Formularios_EC(Form):
	Ecuacion = StringField('Ecuacion')

class Formulario_DES(Form):
	Ecuacion = StringField('Desigualdad')

class Formularios_AXB(Form):
	A = StringField('A')
	B = StringField('B')

class Formularios_V(Form):
	X = StringField('X')
	Y = StringField('Y')
#def Ec_Converter(ecuacion):
##	x=None
##	nums={'1','2','3','4','5','6','7','8','9','0'}
##	letras={'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'}
##	for i in range(0,len(ecuacion)):
##		if(ecuacion[i]=='^'):
#			x+='**'
#		elif((ecuacion[i] in letras) and (ecuacion[i-1] in nums)):
#			x+="*"+ecuacion[i-1]
#			i+=1
#		else:
#			x+=ecuacion[i]

	
