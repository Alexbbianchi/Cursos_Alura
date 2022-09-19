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
    
    def __pode_sacar(self, valor):
        valor_disponivel_a_sacar = self.__saldo + self.__limite
        return valor <= valor_disponivel_a_sacar

    def sacar(self, valor):
        if (__pode_sacar(valor)):
            self.__saldo -= valor
        else:
            print("O valor {} passou o limite".format(valor))

    def transferir(self, valor, destino):
        self.sacar(valor)
        destino.depositar(valor)

    @property
    def saldo(self):
        return self.__saldo

    @staticmethod
    def codigo_banco():
        return "001"
    
    @staticmethod
    def codigo_banco():
        return "001"

    @property
    def titular(self):
        return self.__titular

    @property
    def limit(self):
        return self.__numero

    @limit.setter
    def limit(self, limit):
        self.__limite = limit