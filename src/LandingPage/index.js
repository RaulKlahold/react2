import {useState} from 'react';
import './style.css';


 export default function LandingPage(){

  const [DarkMode, setDarkMode] = useState(false);

  const alterartema = () => {
    setDarkMode(!DarkMode);
  }
  return (
    <div className={DarkMode ? 'modo-escuro' : 'modo-claro'}>
      <header>

      <div className="limitar-secao">
        <div></div>
        <button onClick={alterartema} className={DarkMode ? 'modo-escuro' : 'modo-claro'}>
          <img className='btn-icone' src={DarkMode ? 'assets/sun.png' : 'assets/moon.png'} alt='icone' />
          {DarkMode ? `Ligth` : `Dark`}
        </button>

        </div>

      </header>

      <section className='secao-banner'></section>
      <section className="secao-texto limitar-secao">
        <div className="limitar-secao">
          <h1>Bem vindo ao melhor grupo de pesca!</h1>
          <p className="primeiro-paragrafo">
            Nosso grupo não é bem preparado e nem muito equipado, porém, 
            a felicidade e parceria aqui não falta...
          </p>
          <p className="segundo-paragrafo">
            Um grupo, uma familia, onde alguns amam o esporte e outros a cerveja, 
            mas, todos reunidos ao redor de um rio ou praia, para ver os pescadores alimentar os peixes. 
            Se piadas e risadas é o que você procura, está no caminho certo!

          </p>
          <p className='assinatura'>Bagreiros da Baixada</p>
        </div>
      </section>





    </div>
  );
}



    




