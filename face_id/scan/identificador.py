import os
import cv2
import imutils
import PySimpleGUI as sg
from menu import main
from facepplib import FacePP, exceptions

#parametros para a verificação do rosto
face_detection=""
faceset_initialize=""
face_search=""
face_landmarks=""
dense_facial_landmarks=""
face_attributes=""
beauty_score_and_emotion_recognition=""
faceCascade = cv2.CascadeClassifier("cascade/haarcascade_frontalface_default.xml")

def verifica(app):

    #tela
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

    elif nome == '':
        sg.popup_ok('O campo nome precisa ser preenchido!')
        window.close()
        verifica(app_)

    elif e == 'Ok':
        window.close()

    # transforma a imagem capturada em cinza 
    webcam = cv2.VideoCapture(0)
    _, img = webcam.read()
    cv2.imwrite('verifica/verifica.jpg', img) 

    #armazena as imagens em uma variavel e as compara
    img1 = "banco/" + nome + ".jpg"
    img2 = "verifica/verifica.jpg"
    cmp_ = app.compare.get(image_file1=img1,image_file2=img2)
    confidence = cmp_.confidence
    
    while True:
        img_resize = imutils.resize(img, width=850)
        cv2.imshow('Imagem', img_resize)
        break
    
    if confidence > 80:
        sg.popup_ok('Acesso autorizado')
        cv2.destroyAllWindows()
    else:
        sg.popup_ok('Acesso negado')
        cv2.destroyAllWindows()
    
    verifica(app_)

if __name__ == '__main__':

    api_key ='xQLsTmMyqp1L2MIt7M3l0h-cQiy0Dwhl'
    api_secret ='TyBSGw8NBEP9Tbhv_JbQM18mIlorY6-D'

    try:
        app_ = FacePP(api_key=api_key, api_secret=api_secret)
        funcs = [
            face_detection,
            verifica,
            faceset_initialize,
            face_search,
            face_landmarks,
            dense_facial_landmarks,
            face_attributes,
            beauty_score_and_emotion_recognition
        ]
        verifica(app_)

    except exceptions.BaseFacePPError as e:
        sg.popup_ok('Erro')
        verifica(app_)

    # fecha todas as janelas
    cv2.destroyAllWindows() 
