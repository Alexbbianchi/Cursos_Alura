class Conta:
    def __init__(self, numero, titular, saldo, limite):
        print("Contruindo objeto ... {}".format(self))
        self.__numero = numero
        self.__titular = titular
        self.__saldo = saldo
        self.__limite = limite

    def extrato(self):
        print("Saldo de {} do Titular {}".format(self.__saldo, self.__titular))

    def depositar(self, valor):
        self.__saldo += valor
    
    def sacar(self, valor):
        self.__saldo -= valor

    def transferir(self, valor, destino):
        self.sacar(valor)
        destino.depositar(valor)

    def get_saldo(self):
        return self.__saldo

    def get_titular(self):
        return self.__titular

    def get_limit(self):
        return self.__numero

    def set_limit(self, limit):
        self.__limite = limit