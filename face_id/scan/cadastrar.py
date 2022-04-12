import PySimpleGUI as sg
import cv2
import os
from menu import main

def cadastraRosto():
    sg.theme('DarkBlack')
    dados = [
        [sg.Text('Digite seu nome'), sg.Input(key='nome')],
        [sg.Button('Ok')]
    ]

    window = sg.Window('Menu', dados, element_justification='c')
    e, v = window.read()
    nome = v['nome']
    if e == sg.WINDOW_CLOSED:
        window.close()
        main()
        os._exit(0)
    
    elif e == 'Ok':
        window.close()

    # Inicializa identificador 
    faceCascade = cv2.CascadeClassifier("cascade/haarcascade_frontalface_default.xml")

    #Inicializa a camera
    webcam = cv2.VideoCapture(0)

    while True:
        # Captura o frame
        _, img = webcam.read()

        # Pega a versão cinza da imagem
        gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

        # Pega as coordenadas da localização do rosto na imagem
        faces = faceCascade.detectMultiScale(gray_img, scaleFactor=1.1, minNeighbors=3, minSize=(50, 50))                                  

        # Desenha um retangulo nas coordenadas oferecidas
        for (x, y, w, h) in faces:
            cv2.rectangle(img, (x, y), (x + w, y + h), (255, 255, 0), 2) 

        # Mostra a imagem
        cv2.imshow("Verificando face, aguarde...", img) 

        # Espera o usuario pressionar q
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Fecha a camera
    webcam.release()

    #salva o cadastro
    imgName = "banco/" + nome + ".jpg"
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    cv2.imwrite(imgName, gray_img)    

    # fecha todas as janelas
    cv2.destroyAllWindows()
    sg.popup_auto_close('Cadastro realizada com sucesso')
    main()
cadastraRosto()