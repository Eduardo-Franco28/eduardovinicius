import assembly from './assets/img/type.png';
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <div>
            <img src={assembly} alt="logo do seu trabalho" className='assembly' />
          </div>
          <div>
            <h1>TypeScript</h1>
          </div>
          <div></div>
        </nav>
      </header>
      <main>
        <div className="historia">
          <h2>Historia</h2>
          <ul>
            <li>Lançado pela Microsoft em 2012, o TypeScript surgiu como uma resposta ao crescimento e complexidade cada vez maior das aplicações JavaScript. Desenvolvedores enfrentavam dores de cabeça com erros difíceis de detectar e manutenção de grandes bases de código. Então veio o TypeScript como um herói de armadura tipada, adicionando tipagem estática e recursos avançados de desenvolvimento sem abandonar a flexibilidade do JavaScript. Ele é, essencialmente, um superconjunto do JavaScript — tudo que funciona em JS também funciona em TS. </li>
          </ul>
        </div>
        <div className='comofuncionadiv'>
          <h2 className='comoFunciona'>Como funciona</h2>
          <ul>
            <li>TypeScript funciona como um tradutor nerd: você escreve seu código com tipos explícitos, interfaces e classes, e ele transpila tudo isso para um JavaScript limpinho que o navegador entende. Ele não roda direto no browser — ele gera o JS que roda. O poder do TS está no tempo de desenvolvimento: ele aponta erros antes mesmo de você rodar o código, tipo um amigo que te impede de mandar aquela mensagem pra ex. Além disso, o IntelliSense (autocompletar + dicas) ganha superpoderes, tornando a experiência de codar mais fluida e segura. É tipo programar com um copiloto que sabe tudo do seu projeto.</li>
          </ul>
        </div>
      </main>
      <footer>
        <h3>Desenvolvido por: Eduardo Vinícius / 2°C TEC</h3>
      </footer>
    </>
  );
}

export default App;
