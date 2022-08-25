import os
import re
import cv2
import imutils
from info import *
from menu import main
import PySimpleGUI as sg
import psycopg2 as PgSQL
from img_neg import put_neg
from img_aut import put_aut
from datetime import datetime
from facepplib import FacePP, exceptions

faceCascade = cv2.CascadeClassifier("cascade/haarcascade_frontalface_default.xml")
data = (datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

def identificacao(app):
    sg.theme('DarkGray')
    banco = 'banco/'
    tentativa = data + '.jpg'

    webcam = cv2.VideoCapture(0)
    _, img = webcam.read()
    webcam.release()
    
    with open('verifica/nomes.dat', 'w+') as file:
            file.write(tentativa)

    cv2.imwrite('verifica/'+ tentativa, img) 
    rm = "verifica/"+ tentativa
    img2 = "verifica/"+ tentativa

    while True:
        img = cv2.imread(img2)
        img = imutils.resize(img, width=950)

        faces = faceCascade.detectMultiScale(img, scaleFactor=1.1, minNeighbors=8, minSize=(25, 25))                                  

        for (x, y, w, h) in faces:
            cv2.rectangle(img, (x, y), (x + w, y + h), (255, 255, 0), 2)
            contador = str(faces.shape[0])
            if contador > '1':
                sg.popup_auto_close('Mais de um rosto detectado')
                os.remove(rm)
                identificacao(app)
                return False                    
        break

    try:
        while True:
            for root, dirs, files in os.walk(banco):
                for file in files:
                    remove = '.jpg'
                    nome = re.sub(".jpg", "", file)
                    file = 'banco/' + file
                    cmp_ = app.compare.get(image_file1=file, image_file2=img2)
                    confidence = cmp_.confidence
                    if confidence > 90:
                        break
                
            im = cv2.imread(img2)
            cv2.imshow("", im) 
            cv2.waitKey(100)

            if confidence > 90:
                result = True
                sg.popup_annoying('Olá ' + nome + ', Acesso autoriozado')
                cv2.destroyAllWindows()
                put_aut()
                
            else:
                result = False
                sg.popup_annoying('Acesso negado')
                cv2.destroyAllWindows()
                put_neg()

            con = PgSQL.connect(host=host,
                                database=database,
                                user=user,
                                password=password)
            cursor = con.cursor()
            cursor.execute('INSERT INTO acessos (colaborador_nome, data, acesso_autorizado) VALUES (%s,%s, %s);', (nome, data, result))
            con.commit()
            os.remove(rm)
            main()
            os._exit(0)

    except Exception as error:
        sg.popup_ok('ERRO - verifique o log')
        error = str(error)
        os.remove(rm)
        with open('log/log.dat', 'a') as file:
            file.write(data + '\n' + 'log de identificacao\n' + error + '\n\n------------------------------------------------------------------------------\n\n')
        main()
        os._exit(0) 
  

if __name__ == '__main__':

    api_key ='xQLsTmMyqp1L2MIt7M3l0h-cQiy0Dwhl'
    api_secret ='TyBSGw8NBEP9Tbhv_JbQM18mIlorY6-D'

    try:
        app_ = FacePP(api_key=api_key, api_secret=api_secret)
        funcs = [
            face_detection,
            identificacao,
            faceset_initialize,
            face_search,
            face_landmarks,
            dense_facial_landmarks,
            face_attributes,
            beauty_score_and_emotion_recognition
        ]
        identificacao(app_)

    except exceptions.BaseFacePPError as e:
        print('Error:', e)