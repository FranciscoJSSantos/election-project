import React, { useState } from 'react';
import './Eleitorado.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { itemCandidato } from '../FormDialog/FormDialog';

function Eleitorado({name}){
   const dadosEleicoes = [
    { id: 1, nome: "Bruno Covas", sigla: "PSDB",imagem: "https://img.estadao.com.br/fotos/politica/eleicoes-2020/SP/FSP250000896546_div.jpg", qtdTotalVotos: 1754013,porcentagemVotos: 32.85, estado: "SE" },
    { id: 2, nome: "Guilherme Boulos", sigla: "PSOL",imagem: "https://img.estadao.com.br/fotos/politica/eleicoes-2020/SP/FSP250000746936_div.jpg", qtdTotalVotos: 1080736,porcentagemVotos: 20.24, estado: "SP" },
    { id: 3, nome: "Andrea Matarazzo", sigla: "PSD", imagem: "https://img.estadao.com.br/fotos/politica/eleicoes-2020/SP/FSP250000661535_div.jpg", qtdTotalVotos: 82743,porcentagemVotos: 1.55, estado: "SP" },
    { id: 4, nome: "Antônio Carlos", sigla: "PCO", imagem: "https://img.estadao.com.br/fotos/politica/eleicoes-2020/SP/FSP250001172314_div.jpg", qtdTotalVotos: 630, porcentagemVotos: 0.01, estado: "SP"},
    { id: 5, nome: "Jilmar Tatto", sigla: "PT", imagem: "https://img.estadao.com.br/fotos/politica/eleicoes-2020/SP/FSP250000755896_div.jpg", qtdTotalVotos: 461666, porcentagemVotos: 8.65, estado: "SP"},
    { id: 6, nome: "Joice Hasselmann", sigla: "PSL", imagem: "https://img.estadao.com.br/fotos/politica/eleicoes-2020/SP/FSP250000658458_div.jpg", qtdTotalVotos: 98342 , porcentagemVotos: 1.84, estado: "SP"},
    { id: 7, nome: "Arthur Do Val", sigla: "PATRIOTA", imagem: "https://img.estadao.com.br/fotos/politica/eleicoes-2020/SP/FSP250000641390_div.jpg", qtdTotalVotos: 522210, porcentagemVotos: 9.78, estado: "SP"},
    { id: 8, nome: "Márcio França", sigla: "PSB", imagem: "https://img.estadao.com.br/fotos/politica/eleicoes-2020/SP/FSP250001012981_div.jpg", qtdTotalVotos: 728441, porcentagemVotos: 13.64, estado: "SE"},
    { id: 9, nome: "Celso Russomanno", sigla: "REPUBLICANOS", imagem: "https://img.estadao.com.br/fotos/politica/eleicoes-2020/SP/FSP250001094597_div.jpg", qtdTotalVotos: 560666, porcentagemVotos: 10.50, estado: "SP"}
  ]
  
  const [searchTerm, setSearchTerm] = useState('');

  React.useEffect(() => {
    setSearchTerm(itemCandidato);
  })


  return (
    <div className="container_eleitorado">
      {/* <input type="text" 
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}/> */}

        {/* <input type="text" 
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}/> */}

        {/* dois filtros: 
          1 - nome, partido e numero
          2 - estado,município */}

      {dadosEleicoes.filter((dados) => {
        if(searchTerm === ''){
          return dados;
        }
        // else if(dados.estado.toLowerCase().includes(searchTerm.toLowerCase())){
        //   return dados;
        // }
        else if(dados.nome.toLowerCase().includes(searchTerm.toLowerCase()) || dados.sigla.toLowerCase().includes(searchTerm.toLowerCase())){
          return dados;
        }
      }).map((dados, key) => (
        <div className="container_candidate" key={key}>
        <div className="container_imagem">   
        <CircularProgressbar 
          value={dados.porcentagemVotos} 
          text={`${dados.porcentagemVotos}%`} 
          className="imagem_eleitorado--circle"
          strokeWidth="5"
          />
          <div className="imagem_eleitorado--landscape">
            
            <img className="imagem_eleitorado" src={dados.imagem} alt="Eleitorados" />
          </div>
        </div>
        <div>
          <div>
            <span className="candidate_name"> { dados.nome }</span>
            <span className="candidate_entourage"> { dados.sigla} </span>
          </div>
          <div className="candidate_votes">
            <span className="candidate_percentage_number"> { dados.porcentagemVotos} </span>
            <span className="candidate_percentage">%</span>
            <span className="candidate_total_votes" format="number" > { dados.qtdTotalVotos.toLocaleString(undefined, {maximumFractionDigits: 2}) } </span>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Eleitorado;