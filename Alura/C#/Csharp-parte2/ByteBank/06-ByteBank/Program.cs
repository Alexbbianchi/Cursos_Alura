using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06_ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            ContaCorrente conta = new ContaCorrente();

            //conta.SetSaldo(100);

            //Console.WriteLine(conta.GetSaldo());

            conta.Saldo = 100;

            Console.WriteLine(conta.Saldo);

            Console.ReadLine();
        }
    }
}
