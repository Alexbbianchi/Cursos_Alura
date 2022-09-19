using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07_ByteBank
{
    public class ContaCorrente
    {
        public Cliente Titular { get; set;  }
        public int Agencia { get; set; }
        public int Numero { get; set; }
        public double Saldo { get; set; }

        public static int TotalDeContasCriadas { get; private set; }

        public ContaCorrente(int agencia, int numero)
        {
            Agencia = agencia;
            Numero = numero;

            TotalDeContasCriadas++;
        }

        public bool Sacar(double valor)
        {
            if (Saldo < valor) return false;

            Saldo -= valor;
            return true;
        }

        public void Depositar(double valor)
        {
            Saldo += valor;
        }

        public bool Transferir(double valor, ContaCorrente contaDestino)
        {
            if (Saldo < valor) return false;

            Saldo -= valor;
            contaDestino.Depositar(valor);
            return true;
        }
    }
}