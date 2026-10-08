import type { Player } from '../types/leaderboard';

export interface PlayerWithAluno extends Player {
  aluno: string;
  tasks?: Array<Record<string, number>>;
}

export const mockTeamPlayers: PlayerWithAluno[] = [
  {
    "id": 1,
    "rank": 21,
    "stars": 4,
    "nickname": "katara o avatar da Água",
    "aluno": "Ana julia prado lopes",
    "avatarUrl": "../assets/katara.webp",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 0,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 70,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 1,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 1
      }
    ]
  },
  {
    "id": 2,
    "rank": 18,
    "stars": 4,
    "nickname": "anonimo22",
    "aluno": "Ana Laura Carleto Sanches",
    "avatarUrl": "../assets/anonimo22.jpg",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 0,
        "Aula 03 — Cronograma e Organização de Tarefas": 0,
        "Aula 04 — UX Básica e Wireframes da Interface": 0.5,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 75,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 1,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 1
      }
    ]
  },
  {
    "id": 3,
    "rank": 11,
    "stars": 4,
    "nickname": "Botijão de gás cromado",
    "aluno": "Arthur Dias Miguel de Oliveira Couto",
    "avatarUrl": "../assets/botijao.jpg",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 1,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 80,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 1,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 1
      }
    ]
  },
  {
    "id": 4,
    "rank": 12,
    "stars": 4,
    "nickname": "Luladroid3000",
    "aluno": "Arthur Mazieri Alves",
    "avatarUrl": "../assets/Luladroid3000.png",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 1,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 80,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 1,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 1
      }
    ]
  },
  {
    "id": 5,
    "rank": 16,
    "stars": 4,
    "nickname": "CREATOR0110",
    "aluno": "Cezar Augusto Silva Albuquerque",
    "avatarUrl": "../assets/CREATOR0110.png",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 0,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 80,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 1,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 0
      }
    ]
  },
  {
    "id": 6,
    "rank": 6,
    "stars": 4,
    "nickname": "Enigma_Hardcore2023",
    "aluno": "Enrico Bernardo Carneiro Lelis",
    "avatarUrl": "../assets/Enigma_Hardcore2023.jpg",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 1,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 88,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 1,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 1
      }
    ]
  },
  {
    "id": 7,
    "rank": 15,
    "stars": 4,
    "nickname": "CLT",
    "aluno": "Fernando José Silva Santos",
    "avatarUrl": "../assets/CLT.jpg",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 1,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 82,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 0,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 0,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 0
      }
    ]
  },
  {
    "id": 8,
    "rank": 8,
    "stars": 4,
    "nickname": "𝔪𝔢𝔫𝔦𝔫𝔬 𝔡𝔞 𝔳𝔦𝔩𝔞",
    "aluno": "Henrique Pereira dos Santos",
    "avatarUrl": "../assets/meninodavila.jpg",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 0,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 0,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 86,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 1,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 1
      }
    ]
  },
  {
    "id": 9,
    "rank": 17,
    "stars": 4,
    "nickname": "Minecraft+Gravidade",
    "aluno": "Isaquesor12",
    "avatarUrl": "../assets/Minecraft+Gravidade.webp",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 1,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 76,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 1,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 1
      }
    ]
  },
  {
    "id": 10,
    "rank": 3,
    "stars": 5,
    "nickname": "lokfn",
    "aluno": "Larah Mônnica de Oliveira Lima",
    "avatarUrl": "../assets/lokfn.png",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 1,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 92,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 1,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 1
      }
    ]
  },
  {
    "id": 11,
    "rank": 13,
    "stars": 4,
    "nickname": "aldãobtos",
    "aluno": "Laura dos Santos Neiva",
    "avatarUrl": "../assets/aldaobtos.jpg",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 1,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 80,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 1,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 1
      }
    ]
  },
  {
    "id": 12,
    "rank": 4,
    "stars": 5,
    "nickname": "𝔅𝔞𝔡𝔟𝔬𝔶𝔡𝔢𝔟𝔞𝔯𝔯𝔢𝔱𝔬𝔰",
    "aluno": "Leonardo de Oliveira Rodrigues",
    "avatarUrl": "../assets/badboy.jpg",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 1,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 92,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 1,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 1
      }
    ]
  },
  {
    "id": 13,
    "rank": 5,
    "stars": 5,
    "nickname": "sonegador de imposto",
    "aluno": "Leonardo Leal de Moura Flor",
    "avatarUrl": "../assets/sonegadordeimposto.webp",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 1,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 92,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 1,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 1
      }
    ]
  },
  {
    "id": 14,
    "rank": 19,
    "stars": 4,
    "nickname": "Paula Tejano",
    "aluno": "Luiz Eduardo Moraes Sandoval",
    "avatarUrl": "../assets/PaulaTejano.png",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 1,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 72,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 1,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 1
      }
    ]
  },
  {
    "id": 15,
    "rank": 14,
    "stars": 4,
    "nickname": "Thomas tur",
    "aluno": "Luiz Guilherme Oliveira de Arruda",
    "avatarUrl": "../assets/Thomastur.jpg",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 0.5,
        "Aula 04 — UX Básica e Wireframes da Interface": 0,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 81,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 1,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 1
      }
    ]
  },
  {
    "id": 16,
    "rank": 10,
    "stars": 4,
    "nickname": "꧁𓆩BlackSwan𓆪꧂",
    "aluno": "Maria Fernanda de Oliveira Zanotto",
    "avatarUrl": "../assets/BlackSwan.png",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 1,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 81,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 1,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 1
      }
    ]
  },
  {
    "id": 17,
    "rank": 1,
    "stars": 5,
    "nickname": "Scooby",
    "aluno": "Rhamom Izzaque Rocha Carlos",
    "avatarUrl": "../assets/Scooby.png",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 0.5,
        "Aula 03 — Cronograma e Organização de Tarefas": 0,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 95,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 1,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 1
      }
    ]
  },
  {
    "id": 18,
    "rank": 2,
    "stars": 5,
    "nickname": "😈😈",
    "aluno": "Samuel Carlos Silva de Jesus",
    "avatarUrl": "../assets/evil_laugh.png",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 1,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 93,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 1,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 1
      }
    ]
  },
  {
    "id": 19,
    "rank": 7,
    "stars": 4,
    "nickname": "nanamin",
    "aluno": "Yasmin Bergamo Esposto",
    "avatarUrl": "../assets/nanamin.png",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 1,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 85,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 1,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 1
      }
    ]
  },
  {
    "id": 20,
    "rank": 9,
    "stars": 4,
    "nickname": "oreia ou gaylherme",
    "aluno": "Guilherme Henrique Mello Rocha",
    "avatarUrl": "../assets/oreia.jpg",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 0,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 1,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 1,
        "Aula 06 — Entrega da SA01": 85,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 0,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 0,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 0
      }
    ]
  },
  {
    "id": 21,
    "rank": 20,
    "stars": 4,
    "nickname": "anonimo 8",
    "aluno": "Anderson Silva Pierri Junior",
    "avatarUrl": "../assets/anonimo8.webp",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 0.5,
        "Aula 03 — Cronograma e Organização de Tarefas": 0,
        "Aula 04 — UX Básica e Wireframes da Interface": 1,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 0,
        "Aula 06 — Entrega da SA01": 75,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 0,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 0
      }
    ]
  },
  {
    "id": 22,
    "rank": 22,
    "stars": 3,
    "nickname": "Japônes",
    "aluno": "Pedro Fukunaga Silva Fernandes",
    "avatarUrl": "../assets/japones.jpg",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 0,
        "Aula 04 — UX Básica e Wireframes da Interface": 0,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 0,
        "Aula 06 — Entrega da SA01": 56,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 0,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 0
      }
    ]
  },
  {
    "id": 23,
    "rank": 23,
    "stars": 3,
    "nickname": "Anonimo7",
    "aluno": "Rafael Henrique De Oliveira Souza",
    "avatarUrl": "../assets/anonimo7.jpg",
    "tasks": [
      {
        "Aula 01 - Introdução a Projetos Web e Git": 1,
        "Aula 02 — Escopo e Arquitetura de Informação": 1,
        "Aula 03 — Cronograma e Organização de Tarefas": 0,
        "Aula 04 — UX Básica e Wireframes da Interface": 0,
        "Aula 05 — Identidade Visual e Recursos do Projeto": 0,
        "Aula 06 — Entrega da SA01": 56,
        "Dia 7 — Introdução a Sistemas Corporativos e Figma": 1,
        "Aula 8 — UI Design: Tela de Login e Boas Práticas": 0,
        "Aula 9 — UI Design: Tela de Perfil e Tabelas de Da": 0
      }
    ]
  }
];
