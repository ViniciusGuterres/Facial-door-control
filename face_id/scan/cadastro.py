#pacotes
import os
import cv2
import imutils
from info import *
import pysftp as sf
from menu import main
import PySimpleGUI as sg
from datetime import datetime

#variaveis
faceCascade = cv2.CascadeClassifier("cascade/haarcascade_frontalface_default.xml")
data = (datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

def cadastraRosto():
    sg.theme('DarkBlack')
    dados = [
        [sg.Text('Digite seu nome'), sg.Input(key='nome')],
        [sg.Button('Seguir')]
    ]

    window = sg.Window('Menu', dados, element_justification='c')
    e, v = window.read()
    nome = v['nome']
    if e == sg.WINDOW_CLOSED:
        window.close()
        main()
        os._exit(0)

    elif e == 'Seguir':
        window.close()

    webcam = cv2.VideoCapture(0)
    try:
        while True:
            _, img = webcam.read()
            
            faces = faceCascade.detectMultiScale(img, scaleFactor=1.1, minNeighbors=8, minSize=(25, 25))                                  

            for (x, y, w, h) in faces:
                cv2.rectangle(img, (x, y), (x + w, y + h), (255, 255, 0), 2)
                contador = str(faces.shape[0])
                if contador > '1':
                    sg.popup_auto_close('Mais de um rosto detectado')

            img = imutils.resize(img, width=850)
            cv2.imshow("Verificando face, aguardando retorno...", img) 

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

        webcam.release()
        
        imgName = "banco/" + nome + ".jpg"
        cv2.imwrite(imgName, img)
        sg.popup_auto_close('Cadastro realizado com sucesso')
        with sf.Connection(address, username=username, password=password) as sftp:
            with sftp.cd('/home/user/faceid/banco'):             
                sftp.put(imgName) 
                
    except Exception as error:
        error = str(error)
        with open('log/log.dat', 'a') as file:
            file.write(data + '\n' + 'log de cadastro\n' + error + '\n\n-------------------------------------------------------------------------------\n\n')
        sg.popup_auto_close('Algo deu errado, verifique o log')

    cv2.destroyAllWindows()
    main()
cadastraRosto()