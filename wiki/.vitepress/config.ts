import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: 'pt-BR',
  title: 'DropWiki',
  description: 'Wiki oficial do DropMC • Survival Java e Bedrock',
  cleanUrls: true,
  lastUpdated: false,
  sitemap: { hostname: 'https://wiki.dropmc.gg' },
  ignoreDeadLinks: true,
  head: [
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['meta', { property: 'og:title', content: 'DropWiki | Wiki oficial do DropMC' }],
    ['meta', { property: 'og:description', content: 'Tudo sobre os sistemas, comandos e tutoriais do DropMC.' }],
    ['meta', { property: 'og:image', content: 'https://i.imgur.com/cRMntGK.png' }]
  ],
  themeConfig: {
    siteTitle: 'DropWiki',
    search: { provider: 'local', options: { translations: {
      button: { buttonText: 'Buscar na Wiki', buttonAriaLabel: 'Buscar na Wiki' },
      modal: { noResultsText: 'Nenhum resultado encontrado', resetButtonTitle: 'Limpar', footer: { selectText: 'Selecionar', navigateText: 'Navegar', closeText: 'Fechar' } }
    } } },
    nav: [
      { text: 'Início', link: '/' },
      { text: 'DISCORD', link: 'https://discord.gg/dropmc' },
      { text: 'SITE', link: 'https://dropmc.gg/' },
      { text: 'LOJA', link: 'https://loja.dropmc.gg/' }
    ],
    sidebar: [
  {
    "text": "Comece aqui",
    "link": "/comece-aqui",
    "collapsed": false,
    "items": [
      {
        "text": "Boas-vindas ao DropMC",
        "link": "/comece-aqui/boas-vindas-ao-dropmc"
      },
      {
        "text": "Como entrar no servidor",
        "link": "/comece-aqui/como-entrar-no-servidor",
        "collapsed": false,
        "items": [
          {
            "text": "Como entrar no Java Edition",
            "link": "/comece-aqui/como-entrar-no-servidor/como-entrar-no-java-edition"
          },
          {
            "text": "Como entrar no Bedrock Edition",
            "link": "/comece-aqui/como-entrar-no-servidor/como-entrar-no-bedrock-edition"
          }
        ]
      },
      {
        "text": "Primeiros passos no Survival",
        "link": "/comece-aqui/primeiros-passos-no-survival"
      },
      {
        "text": "Perguntas frequentes",
        "link": "/comece-aqui/perguntas-frequentes"
      }
    ]
  },
  {
    "text": "Sistemas do servidor",
    "link": "/sistemas-do-servidor",
    "collapsed": false,
    "items": [
      {
        "text": "Terrenos e proteções",
        "link": "/sistemas-do-servidor/terrenos-e-protecoes"
      },
      {
        "text": "Cash",
        "link": "/sistemas-do-servidor/cash"
      },
      {
        "text": "Economia e moedas",
        "link": "/sistemas-do-servidor/economia-e-moedas"
      },
      {
        "text": "Caixas e recompensas",
        "link": "/sistemas-do-servidor/caixas-e-recompensas"
      },
      {
        "text": "Cosméticos",
        "link": "/sistemas-do-servidor/cosmeticos"
      },
      {
        "text": "Trabalhos",
        "link": "/sistemas-do-servidor/trabalhos",
        "collapsed": false,
        "items": [
          {
            "text": "Minerador",
            "link": "/sistemas-do-servidor/trabalhos/minerador"
          },
          {
            "text": "Lenhador",
            "link": "/sistemas-do-servidor/trabalhos/lenhador"
          },
          {
            "text": "Fazendeiro",
            "link": "/sistemas-do-servidor/trabalhos/fazendeiro"
          },
          {
            "text": "Caçador",
            "link": "/sistemas-do-servidor/trabalhos/cacador"
          },
          {
            "text": "Pescador",
            "link": "/sistemas-do-servidor/trabalhos/pescador"
          }
        ]
      },
      {
        "text": "Missões",
        "link": "/sistemas-do-servidor/missoes"
      },
      {
        "text": "Geradores de monstros",
        "link": "/sistemas-do-servidor/geradores-de-monstros"
      },
      {
        "text": "Ligas",
        "link": "/sistemas-do-servidor/ligas"
      },
      {
        "text": "Clãs",
        "link": "/sistemas-do-servidor/clas"
      }
    ]
  },
  {
    "text": "Guias e tutoriais",
    "link": "/guias-e-tutoriais",
    "collapsed": false,
    "items": [
      {
        "text": "Como proteger seu terreno",
        "link": "/guias-e-tutoriais/como-proteger-seu-terreno"
      },
      {
        "text": "Como ganhar dinheiro",
        "link": "/guias-e-tutoriais/como-ganhar-dinheiro"
      },
      {
        "text": "Como usar o sistema de trabalhos",
        "link": "/guias-e-tutoriais/como-usar-o-sistema-de-trabalhos"
      },
      {
        "text": "Como completar missões",
        "link": "/guias-e-tutoriais/como-completar-missoes"
      },
      {
        "text": "Como utilizar geradores",
        "link": "/guias-e-tutoriais/como-utilizar-geradores"
      },
      {
        "text": "Como participar das ligas",
        "link": "/guias-e-tutoriais/como-participar-das-ligas"
      },
      {
        "text": "Como obter recompensas",
        "link": "/guias-e-tutoriais/como-obter-recompensas"
      },
      {
        "text": "Como criar um clã",
        "link": "/guias-e-tutoriais/como-criar-um-cla"
      }
    ]
  },
  {
    "text": "Contas e segurança",
    "link": "/contas-e-seguranca",
    "collapsed": false,
    "items": [
      {
        "text": "Proteção da conta",
        "link": "/contas-e-seguranca/protecao-da-conta"
      },
      {
        "text": "Recuperação de conta",
        "link": "/contas-e-seguranca/recuperacao-de-conta"
      },
      {
        "text": "Contas alternativas",
        "link": "/contas-e-seguranca/contas-alternativas"
      },
      {
        "text": "Segurança e responsabilidades",
        "link": "/contas-e-seguranca/seguranca-e-responsabilidades"
      }
    ]
  },
  {
    "text": "Comandos",
    "link": "/comandos",
    "collapsed": false,
    "items": [
      {
        "text": "Comandos gerais",
        "link": "/comandos/comandos-gerais"
      },
      {
        "text": "Terrenos e proteções",
        "link": "/comandos/terrenos-e-protecoes"
      },
      {
        "text": "Geradores",
        "link": "/comandos/geradores"
      },
      {
        "text": "Contas e segurança",
        "link": "/comandos/contas-e-seguranca"
      },
      {
        "text": "Clãs",
        "link": "/comandos/clas"
      }
    ]
  },
  {
    "text": "Eventos e competições",
    "link": "/eventos-e-competicoes",
    "collapsed": false,
    "items": [
      {
        "text": "Visão geral dos eventos",
        "link": "/eventos-e-competicoes/visao-geral-dos-eventos"
      },
      {
        "text": "Eventos temáticos",
        "link": "/eventos-e-competicoes/eventos-tematicos",
        "collapsed": false,
        "items": [
          {
            "text": "Halloween 2026",
            "link": "/eventos-e-competicoes/eventos-tematicos/halloween-2026"
          }
        ]
      },
      {
        "text": "Eventos recorrentes",
        "link": "/eventos-e-competicoes/eventos-recorrentes"
      },
      {
        "text": "Competições e ligas",
        "link": "/eventos-e-competicoes/competicoes-e-ligas"
      }
    ]
  },
  {
    "text": "Regras do servidor",
    "link": "/regras-do-servidor",
    "collapsed": false,
    "items": [
      {
        "text": "Regras e Políticas do DropMC",
        "link": "/regras-do-servidor/regras-e-politicas-do-dropmc"
      }
    ]
  },
  {
    "text": "Comunidade e novidades",
    "link": "/comunidade-e-novidades",
    "collapsed": false,
    "items": [
      {
        "text": "Central de suporte",
        "link": "/comunidade-e-novidades/central-de-suporte"
      },
      {
        "text": "Denúncias",
        "link": "/comunidade-e-novidades/denuncias"
      },
      {
        "text": "Sugestões e feedback",
        "link": "/comunidade-e-novidades/sugestoes-e-feedback"
      }
    ]
  }
],
    outline: { label: 'Nesta página', level: [2,3] },
    docFooter: { prev: 'Anterior', next: 'Próximo' },
    returnToTopLabel: 'Voltar ao topo',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Tema escuro',
    lightModeSwitchTitle: 'Alternar para o tema claro',
    darkModeSwitchTitle: 'Alternar para o tema escuro',
    footer: { message: 'Wiki oficial da comunidade DropMC', copyright: '© DropMC' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/jvictorxsd-cyber/wikipedia' }]
  }
})
