import os
import PySimpleGUI as sg

def main():

    sg.theme('DarkBlack')
    menu = [
        [sg.Text('Bem-vindo(a)')],
        [[sg.Image('logo.png')]],
        [sg.Text('O que deseja fazer ?')],
        [sg.Button('Identificação', size=(15,1)), sg.Button('Cadastro', size=(15,1)), sg.Button('Atualiza banco local', size=(15,1)), sg.Button('Lista de tentativas', size=(15,1))]
    ]

    window = sg.Window('Menu', menu, element_justification='c', size=(800,400))
    e, v = window.read()

    if e == sg.WINDOW_CLOSED:
        window.close()

    elif e == 'Identificação':
        window.close()
        ident = 'python3 scan/identificacao.py'
        os.system(ident)
        os._exit(0)

    elif e == 'Cadastro':
        window.close()
        cad = 'python3 scan/cadastro.py'
        os.system(cad)
        os._exit(0)

    elif e == 'Atualiza banco local':
        window.close()
        cad = 'python3 scan/atualiza.py'
        os.system(cad)
        os._exit(0)

    elif e == 'Lista de tentativas':
        window.close()
        cad = 'python3 scan/lista.py'
        os.system(cad)
        os._exit(0)