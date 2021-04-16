import React from 'react';
import './Article.css';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import image from './estudo.png';
import ehub4 from './E-hub 4 1.png';
import ehub5 from './E-hub 5 1.png';
import ehub2 from './E-hub t2 1.png';
import img6 from './img6.png';
import img7 from './img7.png';
import nave from './nave.png';
import olho from './olho.png';
import joia from './joia.png';


const Article = (props) =>{
  const [Value,SetValue] = React.useState('');
  const onChange = event => {

     localStorage.setItem("nome",event.target.value) ;
     SetValue(event.target.value);

  }
  
    return(


<div className="Body">

  <div className="Container">

    <div className="text">
      <h1 className="titulo" > Expandindo as fronteiras da Educação!</h1>
      <p className ="paragprin"> Educalis é um projeto inovador que torna possível a Educação a Distância para estudantes de baixa renda, com dificuldades de mobilidade urbana ou sem acesso a internet!</p>
    </div>

    <div>
      <img className="estudo" src={image}/>
    </div>
 
  </div>


  <div className="qs"> 


    <div className="teext">

      <h2>
      Quem Somos
      </h2>

      <p>
       Educalis foi criada pela união de jovens multidisciplinares com propósito de democratizar o acesso de comunidades com dificuldades de mobilidade urbana através da utilização de tecnologias. Juntamos as últimas tecnologias de hardware e software para criar nosso produto final com materiais de primeira linha e baixo custo de forma sustentável.
      </p>

      <p> 
       O sistema funciona em uma rede local, sem necessidade de internet, no qual será mediado pelo nosso Ambiente Virtual de Aprendizagem (AVA). Nesse AVA as instituições de ensino poderão disponibilizar material didático, informações, realizar aulas com foco no processo de ensino e aprendizagem.
      </p>
    </div>

    <div className="cards" >

      <div className="card">
      <img className="Ic" src={nave}/>
          <h5 className="h5" >Missão</h5>
          <p className="Pc">Melhorar a educação de comunidades que tenham o acesso a escola precário através de tecnologia acessível e de baixo custo.</p>        
        
      </div> 
     
      <div className="card">
      <img className="Ic" src={olho}/>
          <h5 className="h5">Visão</h5>    
          <p className="Pc" >Diminuir os índices de desigualdades oferecendo acesso a educação de qualidade de forma remota.</p> 
      </div> 
     
      <div className="card">
      <img className="Ic" src={joia}/>
          <h5 className="h5">Valores</h5>      
          <p className="Pc" >Responsabilidade, Inovação, Acessibilidade, Sustentabilidade, Empatia, Comprometimento.</p>
      </div>
    </div>
  </div>

  <div className="estru">

   <div className="qss">

      <h2 >Estrutura</h2>

      <p className="Ep">O fator chave para a funcionalidade do projeto é a infraestrutura responsável por propagar 
      nossa plataforma para estudantes sem conexão com internet.
      Para que isso seja possível ultilizamos um conjunto de dispositivos movidos a energia solar 
      (nomeados por nós como "E-hubs"), conectados sem fio entre si, 
      que criam uma rede a qual pode ser acessada por qualquer pessoa com um smartphone ou computador.
      </p>
    </div>

    <div className="Img">

      <img  src={ehub5} alt="Card image cap" />

      <img  src={ehub4} alt="Card image cap" />   

      <img  src={ehub2} alt="Card image cap" />  
     </div>
  </div>
  
  
  <div className="bases" >

    <p> A usabilidade é simples, basta que o aluno acesse a rede Wi-Fi gerada pelo E-hub mais próximo. Ao conectar-se, o estudante tem acesso a nossa plataforma de ensino virtual, contendo materiais didáticos para todas as áreas. A plataforma foi pensada por uma equipe de profissionais para tornar o aprendizado a distância mais proveitoso, refletindo em um processo de ensino mais eficiente por meio do nosso ecossistema.</p>

  </div>


  <div className="img6">

    <img  src={img6} />

  </div>   


  <div className="contrib">

  
      <h2> Contribua</h2>
      <p> Quer ajudar a Educalis a chegar nos mais de 6 milhões de estudantes  sem acesso a internet no Brasil? Seja um patricionador e nos ajude a propagar a educação para quem não tem acesso a esse direito!</p>
      <p>Você pode ajudar doando equipamentos como celulares, tablets e computadores para nossos jovens. Basta preencher o formulário abaixo que entraremos em contato com você!</p>
  
  </div> 

  <div/>

  <div className="forms">

    <img src={img7}/>

    <div className="form" >
      <Form>
      <FormGroup>
      
      <Input className="campo" type="text" name="nome" id="nome" placeholder="Nome" value={Value} onChange={onChange}/>
      </FormGroup>
      <FormGroup>
      
      <Input className="campo" type="text" name="localidade" id="localidade" placeholder="Cidade/ Estado" />
      </FormGroup>
      <FormGroup>
     
     <Input className="campo" type="textarea" name="text" id="exampleText" 
     placeholder="Digite aqui como você gostaria de contribuir" />
     </FormGroup>
      <Button className="button" style={{background:'#E70E0E'}}>Enviar</Button>
      </Form>   
    </div>
  </div>


</div>


);

}
export default Article;