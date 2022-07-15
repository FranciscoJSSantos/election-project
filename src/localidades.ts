interface Distritos{
  id: number;
  nome: string;
  municipio: Municipio[];
}

interface Municipio {
  id: number; 
  nome: string;
  microrregiao: Microrregiao[];
  regiaoImediata: RegiaoImediata[];
}

interface Microrregiao{
  id: number;
  nome: string;
  mesorregiao: Mesorregiao[];
}

interface Mesorregiao{
  id: number;
  nome: string;
  uf: UF[];
}

interface UF{
  id: number;
  nome: string;
  sigla: string;
  regiao: Regiao[];
}

interface Regiao{
  id: number;
  nome: string;
  sigla: string;
}

interface RegiaoImediata{
  id: number;
  nome: string;
  regiaoIntermediaria: RegiaoIntermediaria[];
}


interface RegiaoIntermediaria{
  id: number;
  nome: string;
  uf: UF[];
}

export default Distritos;