# FACE_ID

#------------------------------------------------------------------------------------------------------------------------------#
	
	Autor:		Hugo Ferreira                                                       
	git-hub:	github.com/guhzoide                                                     

	Projeto da faculdade - ainda em desenvolvimento.
	
	Requisitos:
		Python 3.10.6
		pip 22.2.2
		PostgreSQL 14
		Servidor Linux - ubuntu-server
		Execute o comando pip install -r requirements.txt dentro da pasta face_id

	Como Executar:
		no servidor linux é preciso criar os seguintes diretórios;
		faceid/tentativas/autorizadas || faceid/tentativas/negadas
		faceid/banco
		
		Para estes diretórios execute o comando chmod 777
		
		Feito isso informe no aquiv info.py, informações como ip, user, pass para as ocnexões no servidor e postgresql, confirmar se os diretórios nestes arquivos correspondem com os diretórios do servidor.
		
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

	Atualizações

	Atualização = 22/03/2022:
		Identificação de face atravez de um frame utilizando o OpenCV.
	
	Atualização = 08/04/2022:
		Implementado a biblioteca 'facepplib' e a verificação/liberação.
	
	Atualização = 19/04/2022:
		Adcionado o tratamento de multiplas faces impedindo de realizar a verificação/liberação 
		caso ouver mais de uma. 

	Atualização = 17/06/2022:
		conexão com servidor para salvar as imagens de cadastros e tentativas de acesso.

	Atualização = 27/07/2022:
		Adcionado a opção de atualizar o banco de castro local.

	Atualização = 15/08/2022:
		Adcionado a opção de visualizar tentativas de acesso tanto negado quanto autorizado.

	Atualização = 25/08/2022:
		Verificação será realizada sem precisar digitar o nome do colaborador
#------------------------------------------------------------------------------------------------------------------------------#
