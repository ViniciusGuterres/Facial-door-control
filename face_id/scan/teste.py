import cv2   
import imutils
import PySimpleGUI as sg

sg.theme('Black')

faceCascade = cv2.CascadeClassifier("cascade/haarcascade_frontalface_default.xml")



while True:
        # Captura o frame
        img = cv2.imread('banco\hugo.jpg')
        img = imutils.resize(img, width=950)
        
        # Pega a versão cinza da imagem
        gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

        # Pega as coordenadas da localização do rosto na imagem
        faces = faceCascade.detectMultiScale(gray_img, scaleFactor=1.1, minNeighbors=8, minSize=(25, 25))                                  

        # Desenha um retangulo nas coordenadas oferecidas
        for (x, y, w, h) in faces:
            cv2.rectangle(img, (x, y), (x + w, y + h), (255, 255, 0), 2)
            contador = str(faces.shape[0])
            if contador > '1':
                sg.popup_auto_close('Mais de um rosto detectado')

        # Mostra a imagem
        cv2.imshow("Verificando face, aguarde...", img) 

        # Espera o usuario pressionar q
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break