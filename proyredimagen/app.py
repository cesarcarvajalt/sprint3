from flask import Flask, render_template, request
import utils, yagmail

app = Flask(__name__)

@app.route('/')
def index():
   return render_template("index.html")

@app.route('/registro/')
def registro():
   return render_template("registro.html")

@app.route('/envioRegistro',methods=['GET','POST'])
def envioRegistro():
   try:
      if request.method == 'POST':
         usuario = request.form['usuario'] 
         clave = request.form['clave']  
         email = request.form['email'] 

         if utils.isEmailValid(email):
            if utils.isUsernameValid(usuario):
                if utils.isPasswordValid(clave):

                    yag = yagmail.SMTP('breixov@uninorte.edu.co','clave527')
                    yag.send(to=email,subject='Validar cuenta',
                    contents='Revisa tu correo para activar tu cuenta.')

                    return "Correo enviado a: " + email
                else:
                    return "Contraseña no valida: " + clave
            else:
               return "Usuario no valido: " + usuario
         else:
            return "Correo no valido: " + email
      else:
         return render_template('registro.html')
   except:
      return render_template('registro.html')


@app.route('/iniciosesion/')
def inicioSesion():
   return render_template("inicioSesion.html")


@app.route('/login',methods=['GET','POST'])
def login():
    try:
        if request.method == 'POST':
            usuario = request.form['usuario'] 
            clave = request.form['clave']  
         
            if utils.isUsernameValid(usuario):
                if utils.isPasswordValid(clave):
                    return render_template("Busqueda.html")
                else:
                    return "Contraseña no valida: " + clave
            else:
                return "Usuario no valido: " + usuario
        
        else:
            return render_template('inicioSesion.html')
    except:
      return render_template('inicioSesion.html')


@app.route('/iniciosesion/recuperarContraseña/',methods=['GET','POST'])
def recuperarContraseña():
   try:
      if request.method == 'POST':
         email = request.form['email'] 
         if utils.isEmailValid(email):
            yag = yagmail.SMTP('breixov@uninorte.edu.co','')
            yag.send(to=email,subject='Restablecer contraseña',
            contents='Revisa tu correo para Restablecer contraseña.')
            return "Correo enviado a: " + email
         else:
            return "Correo no válido: " + email
      else:
         return render_template('recupClave.html')
   except:
      return render_template("recupClave.html")


@app.route('/iniciosesion/busqueda/')
def busqueda():
   return render_template("busqueda.html")


@app.route('/iniciosesion/busqueda/imagenesprivadas/')
def gestionImgPrivada():
   return render_template("gestionImgPrivada.html")


@app.route('/iniciosesion/busqueda/imagenespublicas/')
def gestionImgPublica():
   return render_template("gestionImgPublica.html")


@app.route('/iniciosesion/busqueda/imagenesprivadas/subirActualizar/')
def subirActualizar():
   return render_template("subirActualizar.html")