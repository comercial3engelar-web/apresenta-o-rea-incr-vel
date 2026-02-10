import { SlideData } from './types';

export const SLIDES: SlideData[] = [
  {
    id: 0,
    type: 'cover',
    title: 'Status do Empreendimento',
    subtitle: 'Construtora Área Incrível: Análise de Escopo, Mudanças e Prazos',
    content: {
      text: 'Fevereiro 2024'
    }
  },
  {
    id: 1,
    type: 'standard',
    title: 'Contexto Inicial',
    subtitle: 'Cenário original aprovado no fechamento do contrato',
    content: {
      bullets: [
        'Empreendimento fechado inicialmente contemplando todas as casas padrão.',
        'Escopo definido: Casas com laje convencional e Casas com laje em Steel Frame.',
        'Projetos das tipologias padrão definidos e aprovados.'
      ]
    }
  },
  {
    id: 2,
    type: 'standard',
    title: 'Alterações de Escopo',
    subtitle: 'Mudanças solicitadas após o fechamento',
    content: {
      subSections: [
        {
          title: 'Expansão do Empreendimento (Impacto Alto)',
          items: [
            'Inclusão posterior de 22 casas personalizadas.',
            'Cada casa personalizada exige um projeto exclusivo de telhado.',
            'Volume extra não previsto no cronograma base, impactando diretamente a engenharia e produção.'
          ]
        },
        {
          title: 'Desalinhamento de Premissas',
          items: [
            'Na época da negociação, os prazos informados não foram firmados de acordo com o cenário atual, nem mesmo o nível de detalhamento de cada casa, se tornando urgências devido ao acréscimo de escopo.'
          ]
        }
      ]
    }
  },
  {
    id: 3,
    type: 'numbers',
    title: 'Escopo Total Atualizado',
    subtitle: 'Comparativo de volumes de projeto',
    content: {
      text: 'O volume de projetos aumentou significativamente com a inclusão das personalizadas.'
    },
    chartData: [
      { name: 'Padrão Convencional', value: 7, fill: '#2E3E58' },
      { name: 'Padrão Steel Frame', value: 6, fill: '#8aa73b' },
      { name: 'Personalizadas', value: 22, fill: '#5c6b7f' },
    ],
    highlight: 'Total Geral: 35 Projetos'
  },
  {
    id: 4,
    type: 'standard',
    title: 'Expedição Confirmada: 23/02',
    subtitle: 'Casas Padrão com Laje Convencional',
    content: {
      subSections: [
        {
          title: 'Detalhamento da Carga (32 Unidades)',
          items: [
            '17 un - Padrão 39m²',
            '06 un - 48m² com Suíte',
            '05 un - Padrão 52m²',
            '02 un - 57m² com Office',
            '02 un - 59m² com Quarto'
          ]
        },
        {
          title: 'Status Geral',
          items: [
            '32 casas com projetos já aprovados.'
          ]
        }
      ]
    }
  },
  {
    id: 5,
    type: 'standard',
    title: 'Laje em Steel Frame',
    subtitle: 'Adaptação dos Projetos Padrão',
    responsible: 'Felipe',
    content: {
      subSections: [
        {
          title: 'Escopo de Projetos (Steel Frame)',
          items: [
            'Adaptação das mesmas tipologias da fase anterior sendo as casas padrão agora com laje em steel frame com previsão de envio dos projetos para analise e aprovação no dia 23/02.'
          ]
        },
        {
          title: 'Cronograma e Produção',
          items: [
            'REGRA DE PRODUÇÃO: O início da fabricação ocorre de 11 a 12 dias APÓS a aprovação do projeto.'
          ]
        }
      ]
    }
  },
  {
    id: 6,
    type: 'timeline',
    title: 'Casas Personalizadas',
    subtitle: 'Cronograma de Prioridades',
    responsible: 'Rifferson',
    content: {
      subSections: [
        {
          title: 'Fase 1 (Atual): Laje Convencional',
          items: [
            'Esta Semana: Casas do empreendimento Dinápolis e Projeto Siena.',
            'Próxima Semana: Residencial Ravena 2.'
          ]
        },
        {
          title: 'Fase 2 (Sequencial): Laje Steel Frame',
          items: [
            'Início dos projetos apenas após o envio das personalizadas com laje convencional.',
            'Mantém-se a regra de produção: 11 a 12 dias após aprovação.'
          ]
        }
      ]
    }
  },
  {
    id: 7,
    type: 'critical',
    title: 'Ponto Crítico: Rufos de Divisa',
    subtitle: 'Desafios técnicos para produção antecipada',
    content: {
      bullets: [
        'Impossível produzir todos antecipadamente: Ausência de mapa completo e variações de desníveis.',
        'Ação Engelar: Envio apenas dos rufos de casas com vizinhos definidos.',
        'Responsabilidade Cliente: Controle e aplicação (peças não reutilizáveis).'
      ]
    }
  },
  {
    id: 8,
    type: 'summary',
    title: 'Resumo e Prazos-Chave',
    subtitle: 'Regras para produção e entregas',
    content: {
      subSections: [
        {
          title: 'Próximos Marcos',
          items: [
            '23/02: Previsão de envio dos projetos com laje em Steel Frame (Felipe).',
            '24/02: Previsão de entrega dos materiais dos telhados das casas Padrão com laje Convencional.'
          ]
        },
        {
          title: 'Política de Produção',
          items: [
            'Lead Time: A produção é iniciada de 11 a 12 dias após a aprovação formal do projeto.',
            'Prioridade: Finalizar personalizadas laje convencional antes de iniciar personalizadas Steel Frame.'
          ]
        }
      ]
    }
  },
  {
    id: 9,
    type: 'cover',
    title: 'Obrigado',
    subtitle: 'Estamos à disposição para alinhar os próximos passos.',
    content: {
      text: 'Engelar - Estruturas em Aço Leve'
    }
  }
];