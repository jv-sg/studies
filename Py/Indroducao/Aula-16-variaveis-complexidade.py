'''
Constante = "Variaveis" que não vão mudar 
Mitas condições no mesmo if (ruim)
<- Contagem de complexidade (ruim)
'''

velocidade = 60 #velocidade atual do carro
local_carro = 101 # local em que o carro está na estrada

#se for variaveis imutaveis, escrever em letras maiusculas
RADA_1 = 60 #velocidade máxima do radar 1 - não mudar
LOCAL_1 = 100 #local onde o radar 1 está
RADAR_RANGE = 1 # A distância onde o radar pegar

vel_carro_pass_radar_1 = velocidade > RADA_1

if velocidade > RADA_1:
    print('Velocidade carro passou rada 1')

if local_carro >= (LOCAL_1 - RADAR_RANGE) and \
    local_carro <= (LOCAL_1 + RADAR_RANGE) and \
    vel_carro_pass_radar_1:
    print('Carro multado em radar 1')