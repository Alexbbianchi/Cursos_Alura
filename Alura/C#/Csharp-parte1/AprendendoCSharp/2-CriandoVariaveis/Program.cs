using System;

namespace _2_CriandoVariaveis
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando projeto 2 - Criando Variaveis");

            int idade;
            idade = 32;

            idade = 10;
            Console.WriteLine(idade);

            idade = 10 + 5;
            Console.WriteLine(idade);

            idade = 10 + 5 * 2;
            Console.WriteLine(idade);

            idade = (10 + 5) * 2;
            Console.Write(idade);

            idade = (10 + 5) * 2;
            Console.WriteLine("Sua idade é" + idade);

            idade = (10 + 5) * 2;
            Console.WriteLine("Sua idade é" + idade + "!");


            Console.WriteLine("Tecle enter para sair");
            Console.ReadLine();


        }
    }
}
