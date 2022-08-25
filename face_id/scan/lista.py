import os
import paramiko
from info import *
import pysftp as sf
from PIL import Image
from menu import main
import PySimpleGUI as sg
from datetime import datetime

def lista_img():
    with open ('verifica/list.dat', 'w+') as file:
        file.write('')

    sg.theme('DarkBlack')
    lista = [
        [sg.Text('Escolha uma das opções')],
        [sg.Button('Voltar', size=(15,0)), sg.Button('Imagens autorizadas', size=(15,0)), sg.Button('Imagens negadas', size=(15,0))]
    ]
    os.remove('verifica/list.dat')
    window = sg.Window("Menu", lista, element_justification='c')
    e, v = window.read()

    if e == sg.WINDOW_CLOSED:
        window.close()
        main()
        os._exit(0)

    elif e == 'Voltar':
        window.close()
        main()
        os._exit(0)
    
    elif e == 'Imagens autorizadas':
        remotepath = 'faceid/tentativas/autorizadas'
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh.connect(hostname=address, username=username, password=password)
        stdin, stdout, stderr = ssh.exec_command('ls faceid/tentativas/autorizadas')
        stdin.close()
        
        with open('verifica/list.dat', 'a') as file:
            file.write('==============================================\n AUTORIZADAS \n\n')

        for line in stdout.readlines():
            dados = str(line)
            with open('verifica/list.dat', 'a') as file:
                file.write(dados + '\n')

        file = open('verifica/list.dat', 'r', encoding='utf-8')
        file = file.read()
        window.close()
    
    elif e == 'Imagens negadas':
        remotepath = 'faceid/tentativas/negadas'
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh.connect(hostname=address, username=username, password=password)
        stdin, stdout, stderr = ssh.exec_command('ls faceid/tentativas/negadas')
        stdin.close()

        with open('verifica/list.dat', 'a') as file:
            file.write('==============================================\n NEGADAS \n\n')

        for line in stdout.readlines():
            dados = str(line)
            with open('verifica/list.dat', 'a') as file:
                file.write(dados + '\n')

        file = open('verifica/list.dat', 'r', encoding='utf-8')
        file = file.read() 
        window.close()

    lista = [
        [sg.Multiline(file, size=(95,35))],
        [sg.Text('Copie o nome da imagem que deseja visualizar'), sg.Input(key='img', size=(25,1))],
        [sg.Button('Voltar', size=(15,0)), sg.Button('Abrir imagem', size=(15,0))]
    ]
    window = sg.Window("Menu", lista, element_justification='c')

    while True:    
        e, v = window.read()
        if e == sg.WINDOW_CLOSED:
            window.close()
            lista_img()

        elif e == 'Voltar':
            window.close()
            lista_img()
        
        elif e == 'Abrir imagem':
            img = v['img']
            if img == '':
                sg.popup_ok('Favor digitar o nome da imagem que deseja visualizar')
                window.close()
                lista_img()

            try:
                with sf.Connection(address, username=username, password=password) as sftp:
                    with sftp.cd(remotepath):             
                        sftp.get(img) 
                im = Image.open(img)
                im.show()
                os.remove(img)

            except Exception as error:
                sg.popup_ok('Algo deu errado, verifique o log')
                error = str(error)
                data = (datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
                with open('log/log.dat', 'a') as file:
                    file.write(data + '\n' + 'log de lista\n' + error + '\n\n-------------------------------------------------------------------------------\n\n')
                window.close()
                main()
                os._exit(0)
lista_img()