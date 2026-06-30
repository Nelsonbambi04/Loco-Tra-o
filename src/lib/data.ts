import type { PageId } from "./navigation";

/* ------------------------------------------------------------------ */
/* Company                                                             */
/* ------------------------------------------------------------------ */

export const COMPANY = {
  name: "Loco Traços",
  legalName: "Loco Traços - Angola",
  slogan: "Estamos construindo o seu sorriso.",
  founded: 2020,
  nif: "5000510661",
  phones: ["+244 925 783 201", "+244 925 732 355"],
  email: "geral@locotracos.ao",
  address:
    "Rua Luther King, Bairro do Maculusso, Distrito Urbano da Maianga, Luanda, Angola",
  reference:
    "Via que liga a Avenida de Portugal à Avenida Comandante Che Guevara - próximo à Angola Business School e ao Restaurante Mercado do Peixe.",
  mapsQuery: "Rua Luther King, Maculusso, Luanda, Angola",
};

export const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: "home", label: "Início" },
  { id: "about", label: "A Empresa" },
  { id: "services", label: "Serviços" },
  { id: "portfolio", label: "Portfólio" },
  { id: "contact", label: "Contactos" },
];

/* ------------------------------------------------------------------ */
/* Imagery extracted from the company portfolio PDF                    */
/* ------------------------------------------------------------------ */

const pdfAsset = (file: string) => `/portfolio-pdf/${file}`;

export const IMAGES = {
  hero: pdfAsset("pdf-image-028-obj-177.jpg"),
  heroAlt: pdfAsset("pdf-image-009-obj-76.jpg"),
  villaDusk: pdfAsset("pdf-image-028-obj-177.jpg"),
  villaPool: pdfAsset("pdf-image-031-obj-190.jpg"),
  villaPool2: pdfAsset("pdf-image-052-obj-243.jpg"),
  villaStone: pdfAsset("pdf-image-056-obj-253.jpg"),
  villaIlluminated: pdfAsset("pdf-image-057-obj-256.jpg"),
  facadeGlass: pdfAsset("pdf-image-009-obj-76.jpg"),
  facadeUrban: pdfAsset("pdf-image-016-obj-115.jpg"),
  facadeClouds: pdfAsset("pdf-image-042-obj-219.jpg"),
  facadeMinimal: pdfAsset("pdf-image-027-obj-174.jpg"),
  facadeWhite: pdfAsset("pdf-image-046-obj-229.jpg"),
  facadeWhite2: pdfAsset("pdf-image-047-obj-230.jpg"),
  apartments: pdfAsset("pdf-image-054-obj-249.jpg"),
  apartmentsBalcony: pdfAsset("pdf-image-055-obj-250.jpg"),
  apartmentsGlass: pdfAsset("pdf-image-039-obj-210.jpg"),
  apartmentsGroup: pdfAsset("pdf-image-054-obj-249.jpg"),
  constructionDiscuss: pdfAsset("pdf-image-008-obj-75.jpg"),
  constructionSunset: pdfAsset("pdf-image-063-obj-284.jpg"),
  constructionRebar: pdfAsset("pdf-image-063-obj-284.jpg"),
  teamPlans: pdfAsset("pdf-image-008-obj-75.jpg"),
  teamHardHats: pdfAsset("pdf-image-063-obj-284.jpg"),
  teamHelmets: pdfAsset("pdf-image-008-obj-75.jpg"),
  teamWomen: pdfAsset("pdf-image-016-obj-115.jpg"),
  interiorChandelier: pdfAsset("pdf-image-050-obj-239.jpg"),
  interiorBlue: pdfAsset("pdf-image-051-obj-240.jpg"),
  interiorMinimal: pdfAsset("pdf-image-027-obj-174.jpg"),
  interiorStylish: pdfAsset("pdf-image-051-obj-240.jpg"),
};

/* ------------------------------------------------------------------ */
/* Differentials / stats                                               */
/* ------------------------------------------------------------------ */

export const DIFFERENTIALS = [
  {
    icon: "award",
    title: "Experiência Consolidada",
    text: "Atuação sólida e reconhecida no mercado da construção civil angolano, com um portefólio de obras públicas e privadas entregues com excelência.",
  },
  {
    icon: "users",
    title: "Equipa Multidisciplinar",
    text: "Engenheiros, arquitetos e técnicos habilitados que unem rigor técnico e criatividade para entregar projetos de alto padrão.",
  },
  {
    icon: "cpu",
    title: "Tecnologia & Controlo",
    text: "Softwares de ponta e controlo rígido de qualidade e segurança em todas as etapas, do estudo topográfico ao acabamento final.",
  },
];

export const STATS = [
  { value: 2020, label: "Fundada", suffix: "" },
  { value: 30, label: "Projetos entregues", suffix: "+" },
  { value: 6, label: "Áreas de atuação", suffix: "" },
  { value: 100, label: "Foco em qualidade", suffix: "%" },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  image: string;
  icon: string;
};

export const SERVICES: Service[] = [
  {
    slug: "construcao-civil",
    index: "01",
    title: "Construção Civil e Empreitadas",
    short: "Execução completa de obras públicas e privadas.",
    description:
      "Execução completa de empreitadas de obras públicas e privadas com alto padrão construtivo. Cuidamos de todo o ciclo da obra com planeamento rigoroso e mão-de-obra especializada.",
    bullets: [
      "Planeamento e preparo do solo",
      "Alvenaria, estruturas e coberturas",
      "Reabilitações em geral",
      "Obras públicas e privadas",
    ],
    image: IMAGES.constructionDiscuss,
    icon: "hard-hat",
  },
  {
    slug: "arquitetura-design",
    index: "02",
    title: "Projetos de Arquitetura & Design",
    short: "Projetos inovadores, funcionais e personalizados.",
    description:
      "Desenvolvimento de projetos arquitetónicos inovadores, funcionais e personalizados, além de design de interiores sofisticado para comércio, clínicas e residências.",
    bullets: [
      "Projetos arquitetónicos personalizados",
      "Design de interiores sofisticado",
      "Comércio, clínicas e residências",
      "Apresentações 2D e 3D",
    ],
    image: IMAGES.interiorMinimal,
    icon: "compass",
  },
  {
    slug: "fiscalizacao-direcao",
    index: "03",
    title: "Fiscalização, Gestão e Direção de Obras",
    short: "Monitoramento no terreno por profissionais habilitados.",
    description:
      "Monitoramento completo no terreno por profissionais habilitados, para assegurar o cumprimento estrito das normas técnicas, de segurança e das especificações do projeto.",
    bullets: [
      "Direção e fiscalização de obra",
      "Cumprimento de normas e segurança",
      "Controlo de qualidade e prazos",
      "Gestão transparente da empreitada",
    ],
    image: IMAGES.teamHardHats,
    icon: "clipboard-check",
  },
  {
    slug: "topografia",
    index: "04",
    title: "Engenharia Geográfica e Topografia",
    short: "Levantamentos precisos e georreferenciamento.",
    description:
      "Estudos topográficos detalhados e levantamento topográfico preciso, garantindo a implantação correta da obra desde o primeiro levantamento.",
    bullets: [
      "Estudos e levantamento topográfico",
      "Implantação e nivelamento de obra",
      "Georreferenciamento",
      "Apoio ao projeto e execução",
    ],
    image: IMAGES.facadeMinimal,
    icon: "map",
  },
  {
    slug: "consultoria",
    index: "05",
    title: "Consultoria e Serviços Técnicos",
    short: "Avaliação, consultoria e formação especializada.",
    description:
      "Avaliação imobiliária detalhada, consultoria de engenharia, serviços de impressão e encadernação técnica, e formação especializada em diversas áreas.",
    bullets: [
      "Avaliação imobiliária detalhada",
      "Consultoria de engenharia",
      "Impressão e encadernação técnica",
      "Formação: Orçamentos, Medições, AutoCAD 2D/3D",
    ],
    image: IMAGES.teamHelmets,
    icon: "graduation-cap",
  },
  {
    slug: "servicos-plotter",
    index: "06",
    title: "Serviços de Plotter",
    short: "Impressões técnicas de A4 até A0+, cortes e dobragem de folhas.",
    description:
      "Serviços de plotter para impressão de desenhos técnicos, plantas, mapas e documentos de engenharia, com formatos desde A4 até A0+, incluindo corte, acabamento e dobragem de folhas.",
    bullets: [
      "Impressões de A4 até A0+",
      "Plantas, desenhos técnicos e mapas",
      "Cortes e acabamento de folhas",
      "Dobragem técnica para arquivo e entrega",
    ],
    image: IMAGES.teamPlans,
    icon: "printer",
  },
];

/* ------------------------------------------------------------------ */
/* Institutional pillars                                               */
/* ------------------------------------------------------------------ */

export const PILLARS = [
  {
    key: "missao",
    label: "Missão",
    icon: "target",
    text: "Atender com excelência as demandas dos nossos clientes, prestando serviços que contribuam diretamente para a melhoria da qualidade de vida das pessoas.",
  },
  {
    key: "visao",
    label: "Visão",
    icon: "eye",
    text: "Ser uma empresa de referência em Angola, reconhecida como a melhor opção por clientes, parceiros, colaboradores e investidores, pela qualidade impecável dos serviços e um atendimento totalmente diferenciado.",
  },
  {
    key: "valores",
    label: "Valores",
    icon: "gem",
    text: "Princípios que guiam cada projeto e cada relação que construímos.",
  },
];

export const VALUES = [
  { title: "Competência e Rigor Técnico", icon: "ruler" },
  { title: "Inovação e Criatividade", icon: "lightbulb" },
  { title: "Pontualidade e Prontidão", icon: "clock" },
  { title: "Confidencialidade e Responsabilidade Social", icon: "shield" },
  { title: "Espírito de Equipa e Parceria", icon: "handshake" },
];

/* ------------------------------------------------------------------ */
/* Portfolio                                                           */
/* ------------------------------------------------------------------ */

export type Project = {
  name: string;
  type: string;
  location: string;
  highlight?: string;
  description?: string;
  image: string;
  tag: string;
};

export const FEATURED_PROJECTS: Project[] = [
  {
    name: "Clínica Odonto Excellence",
    type: "Design Comercial & Arquitetura de Interiores",
    location: "Avenida Deolinda Rodrigues, Luanda",
    highlight:
      "Intervenção em fachada, otimização dos espaços de atendimento clínico e acompanhamento técnico da execução.",
    image: IMAGES.facadeGlass,
    tag: "Clínica",
  },
  {
    name: "Reabilitação da Administração do F.A.S",
    type: "Obra Institucional / Pública",
    location: "Camabatela, Província do Kwanza Norte",
    highlight:
      "Reabilitação institucional com foco em funcionalidade, durabilidade e melhoria das condições de utilização.",
    image: IMAGES.facadeUrban,
    tag: "Pública",
  },
  {
    name: "Residência Cirilo",
    type: "Arquitetura Residencial de Alto Padrão",
    location: "Bairro Kikagil, Município de Luanda",
    description:
      "Projeto residencial moderno composto por sala de estar, sala de jantar, 4 quartos, cozinha planeada, piscina e terraço sofisticado.",
    image: IMAGES.villaDusk,
    tag: "Residencial",
  },
  {
    name: "Condomínio Benfica",
    type: "Projeto Urbanístico / Residencial",
    location: "Distrito Urbano do Benfica, Município de Belas",
    highlight:
      "Conceção urbanística integrada com foco em conforto, segurança e qualidade de vida.",
    image: IMAGES.apartments,
    tag: "Urbanístico",
  },
];

export const GALLERY_PROJECTS: { name: string; location: string; image: string }[] =
  [
    {
      name: "Casa Carlos",
      location: "Bairro Kikagil, Luanda",
      image: IMAGES.villaPool,
    },
    {
      name: "Casa Luís Carlos",
      location: "Município de Belas",
      image: IMAGES.villaPool2,
    },
    {
      name: "Edifício Residencial Camama",
      location: "Camama, Município de Belas",
      image: IMAGES.apartmentsGlass,
    },
    {
      name: "Igreja Adventista",
      location: "Distrito Urbano do Rangel",
      image: IMAGES.facadeWhite,
    },
    {
      name: "Casa Adilson Manuel",
      location: "Centralidade do Kilamba, Belas",
      image: IMAGES.villaIlluminated,
    },
    {
      name: "Casa Idalina Reis",
      location: "Zango 8000, Município de Viana",
      image: IMAGES.villaStone,
    },
    {
      name: "Instituto Politécnico Médio",
      location: "Província do Cuando Cubango",
      image: IMAGES.facadeMinimal,
    },
    {
      name: "Complexo Residencial Kilamba",
      location: "Município do Kilamba Kiaxi",
      image: IMAGES.apartments,
    },
    {
      name: "Loja Wavida",
      location: "Maculusso, Luanda",
      image: IMAGES.interiorStylish,
    },
    {
      name: "Clínica de Estética +Top",
      location: "Luanda, Angola",
      image: IMAGES.interiorBlue,
    },
  ];

export const SERVICE_OPTIONS = [
  "Construção",
  "Projeto de Arquitetura / Design",
  "Fiscalização / Direção de Obra",
  "Topografia",
  "Serviços de Plotter",
  "Consultoria / Outro",
];
