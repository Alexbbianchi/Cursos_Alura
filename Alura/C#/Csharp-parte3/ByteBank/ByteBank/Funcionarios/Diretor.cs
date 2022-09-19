using ByteBank.Sistemas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank.Funcionarios
{
    public class Diretor : FuncionarioAutenticavel
    {
        public Diretor(string cpf) : base(5000, cpf)//passa argumento para a base (Funcionario)
        {

        }

        public override void AumentarSalario()
        {
            Salario *= 1.15;
        }

        /** Override
         * Um override método fornece uma nova implementação do método 
         * herdado de uma classe base. O método que é substituído 
         * por uma declaração override é conhecido como o método base substituído.
         */
        public override double GetBonificacao()
        {
            /** passando base, evita ocorrer um staskoverflow */
            return Salario * 0.5; //+ base.GetBonificacao();
        }
    }
}