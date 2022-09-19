using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05_ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            Cliente gabriela = new Cliente();

            gabriela.nome = "Gabriela";
            gabriela.cpf = "434.562.878-20";
            gabriela.profissao = "Desenvolvedora";

            ContaCorrente conta = new ContaCorrente();

            conta.titular = gabriela;
            conta.saldo = 500;
            conta.agencia = 563;
            conta.numero = 5634527;

            Console.WriteLine(conta.titular.nome);

            /*-------------------------------*/

            ContaCorrente conta2 = new ContaCorrente()
            {
                titular = new Cliente()
                {
                    nome = "Alex",
                    cpf = "521.525.525-10",
                    profissao = "Desenvolvedor"
                },
                agencia = 585,
                numero = 524,
                saldo = 500.00
            };

            Console.WriteLine(conta2.titular.nome);

            Console.ReadLine();
        }
    }
}
