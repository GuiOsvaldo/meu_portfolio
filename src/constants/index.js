import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  condo,
  banco,
  africell,
  del,
  aca,
  ac,
  netag,
  estudo,
  barca,
  osvaldo,
  mena
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "SOBRE MIM",
  },
  {
    id: "work",
    title: "TRABALHOS",
  },
  {
    id: "experience",
    title: "PROJETOS"
  },
  {
    id: "contact",
    title: "CONTACTOS",
  },
];

const services = [
  {
    title: "Desenvolvedor web",
    icon: web,
  },
  {
    title: "UI/UX Design",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Criador de conteúdos voltada a programação",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Desenvolvedor Angular e Python.",
    company_name: "Empresa: NETAG - Fábrica de Software",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Outu 2023 - Até Agora",
    points: [
      "Coordenei esforço para soluções complexas, destacando-me pela minha capacidade de liderança.",
      "Trabalhei como Desenvolvedor Fullstack no projeto Condoflow (Gestão de condomínios) minimizando o processo de gestão do condomínio Procondo.",
      "Trabalhei também como Devops por um tempo fazendo Deploy de todos sistemas que estavam sendo desenvolvido.",
      "Participei de forma ativa em todos os projetos(Mbs, Condoflow, TecPro, Deltruck e GEE) de grande porte dessa empresa aplicando todos conceitos apropriado da programação.",
    ],
  },
  {
    title: "Desenvolvedor Angular e Laravel.",
    company_name: "Empresa: ANLUGE - Soluções Tecnológicas",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Abril 2022 - Outu 2023",
    points: [
      "Desenvolvemos o sistema GestDocs (Sistema de Gestão de Documentos) usado no INADE.",
      "Desenolvemos o site oficial do INADE.",
      "Implementação de Design responsivo com base ao mobile-first.",
      "UI, construindo os mockups das telas antes de passarem para o código de produção."
      
    ],
  },
  {
    title: "Desenvolvedor Web",
    company_name: "Empresa: MAYONGI, LDA",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dez 2021 - Mar 2022 ",
    points: [
      "Construi o site oficial do Mayongi aplicando pela primeira vez os Frameworks Javascript.",
      "Aprendi o básico de desenvolvimento XD."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Foi muito prazeroso trabalhar contigo, aprendi bastante ao teu lado companheiro!",
    name: "Osvaldo Beto",
    designation: "DEV",
    company: "NETAG",
    image: mena,
  },
  {
    testimonial:
      "Foi muito prazeroso trabalhar contigo, aprendi bastante ao teu lado companheiro!",
    name: "Osvaldo Beto",
    designation: "DEV",
    company: "NETAG",
    image: mena,
  },
  {
    testimonial:
      "Foi muito prazeroso trabalhar contigo, aprendi bastante ao teu lado companheiro!",
    name: "Osvaldo Beto",
    designation: "DEV",
    company: "NETAG",
    image: mena,
  },
];

const projects = [
  {
    name: "Condoflow",
    description:
      "Sistema de Gestão de condomínios, facilita e dinamiza a gestão dos principais integrantes do sistema como: Administradores, Moradores, Porteiros em apenas um clique no sistema...",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Python-Flask",
        color: "pink-text-gradient",
      },
    ],
    image: condo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Banco yetu",
    description:
      "Sistema de Gestão de Multicaixa do Banco Yetu, este sistema visa em diminuir as filas nos balcões no pedido de adesão da segunda via do cartão Multicaixa.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "CI/CD",
        color: "pink-text-gradient",
      },
    ],
    image: banco,
    source_code_link: "https://github.com/",
  },
  {
    name: "Website Africell",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: africell,
    source_code_link: "https://github.com/",
  },

  {
    name: "Delltruck",
    description:
      "Sistema de Gestão de Transportadora e encomendas dos Clientes...",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: del,
    source_code_link: "https://github.com/",
  },

  {
    name: "Academicum",
    description:
      "Sistema de Gestão escolar Academicum, visa facilitar e dinamizar a gestão de toda escola desde: Os pagamentos das propinas, calendários escolar, vitrine, boletim de notas. etc",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: aca,
    source_code_link: "https://github.com/",
  },
  {
    name: "Academicum",
    description:
      "Sistema de Gestão escolar Academicum, visa facilitar e dinamizar a gestão de toda escola desde: Os pagamentos das propinas, calendários escolar, vitrine, boletim de notas. etc",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: ac,
    source_code_link: "https://github.com/",
  },

  {
    name: "Website NETAG",
    description:
      "Website oficial da NETAG onde conta com todos serviços que prestamos...",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: netag,
    source_code_link: "https://github.com/",
  },
  {
    name: "Dashbord Telecom TV",
    description:
      "Sistema de Gestão escolar Academicum, visa facilitar e dinamizar a gestão de toda escola desde: Os pagamentos das propinas, calendários escolar, vitrine, boletim de notas. etc",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: estudo,
    source_code_link: "https://github.com/",
  },

  {
    name: "Website Barcelona",
    description:
      "Treinamento do site do FC.Barcelona, onde gere a equipe toda até a compra de novos equipamentos...",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: barca,
    source_code_link: "https://github.com/",
  }

];

export { services, technologies, experiences, testimonials, projects };
