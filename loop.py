import time

contador = 0

while contador < 10:
    print("Contador:", contador)
    contador += 1

    # Simula algum tipo de pausa ou espera
    time.sleep(1)

print("Fim do loop!")
