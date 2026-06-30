import type { PageId } from "./navigation";

export const COMPANY = {
  name: "Loco Tracos",
  legalName: "Loco Tracos - Angola",
  slogan: "Arquitetura que ganha forma com rigor tecnico.",
  founded: 2020,
  nif: "5000510661",
  phones: ["+244 925 783 201", "+244 925 732 355"],
  email: "geral@locotracos.ao",
  address:
    "Rua Luther King, Bairro do Maculusso, Distrito Urbano da Maianga, Luanda, Angola",
  reference:
    "Via que liga a Avenida de Portugal a Avenida Comandante Che Guevara - proximo a Angola Business School e ao Restaurante Mercado do Peixe.",
  mapsQuery: "-8.8190521,13.2392596",
};

export const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: "home", label: "Inicio" },
  { id: "about", label: "A Empresa" },
  { id: "services", label: "Servicos" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contactos" },
];

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
  facadeClinic: pdfAsset("pdf-image-010-obj-87.jpg"),
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
  consultingSite: pdfAsset("pdf-image-011-obj-88.jpg"),
  plotterPrint:
    "https://images.pexels.com/photos/9565383/pexels-photo-9565383.jpeg?auto=compress&cs=tinysrgb&w=1400",
  interiorChandelier: pdfAsset("pdf-image-050-obj-239.jpg"),
  interiorBlue: pdfAsset("pdf-image-051-obj-240.jpg"),
  interiorMinimal: pdfAsset("pdf-image-027-obj-174.jpg"),
  interiorStylish: pdfAsset("pdf-image-051-obj-240.jpg"),
};

export const DIFFERENTIALS = [
  {
    icon: "award",
    title: "Arquitetura com Visao",
    text: "Concebemos projetos arquitetonicos funcionais, elegantes e adaptados ao contexto angolano, sempre com foco na experiencia de quem vai viver ou usar o espaco.",
  },
  {
    icon: "users",
    title: "Equipa Multidisciplinar",
    text: "Arquitetos, engenheiros e tecnicos trabalham em conjunto para transformar conceito, tecnica e obra num resultado coerente e de alto padrao.",
  },
  {
    icon: "cpu",
    title: "Tecnologia & Controlo",
    text: "Modelacao, desenho tecnico, acompanhamento e controlo de qualidade apoiam cada decisao, do estudo inicial aos acabamentos finais.",
  },
];

export const STATS = [
  { value: 2020, label: "Fundada", suffix: "" },
  { value: 30, label: "Projetos entregues", suffix: "+" },
  { value: 6, label: "Areas de atuacao", suffix: "" },
  { value: 100, label: "Foco em qualidade", suffix: "%" },
];

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
    slug: "arquitetura-design",
    index: "01",
    title: "Arquitetura & Design",
    short: "Concecao arquitetonica, interiores e experiencia espacial.",
    description:
      "Desenvolvemos projetos arquitetonicos inovadores, funcionais e personalizados, com leitura cuidada do terreno, do programa e da identidade de cada cliente.",
    bullets: [
      "Projetos arquitetonicos personalizados",
      "Design de interiores e conceito espacial",
      "Comercio, clinicas e residencias",
      "Apresentacoes 2D, 3D e apoio visual",
    ],
    image: IMAGES.interiorBlue,
    icon: "compass",
  },
  {
    slug: "engenharia-fiscalizacao",
    index: "02",
    title: "Engenharia & Fiscalizacao",
    short: "Rigor tecnico para tornar o projeto executavel.",
    description:
      "Apoiamos a arquitetura com engenharia, fiscalizacao e gestao tecnica, garantindo compatibilidade, seguranca, qualidade e cumprimento das especificacoes do projeto.",
    bullets: [
      "Fiscalizacao e direcao tecnica",
      "Compatibilizacao de especialidades",
      "Controlo de qualidade e prazos",
      "Gestao transparente da empreitada",
    ],
    image: IMAGES.teamHardHats,
    icon: "clipboard-check",
  },
  {
    slug: "construcao-civil",
    index: "03",
    title: "Construcao Civil e Empreitadas",
    short: "Execucao de obras alinhada ao projeto arquitetonico.",
    description:
      "Executamos obras publicas e privadas com planeamento rigoroso, mao-de-obra especializada e respeito pela intencao arquitetonica definida em projeto.",
    bullets: [
      "Planeamento e preparo do solo",
      "Alvenaria, estruturas e coberturas",
      "Reabilitacoes em geral",
      "Obras publicas e privadas",
    ],
    image: IMAGES.constructionDiscuss,
    icon: "hard-hat",
  },
  {
    slug: "topografia",
    index: "04",
    title: "Topografia & Implantacao",
    short: "Base tecnica precisa para projetar e implantar.",
    description:
      "Realizamos levantamentos topograficos, implantacao e apoio ao projeto para que a arquitetura responda corretamente ao terreno e ao contexto.",
    bullets: [
      "Estudos e levantamento topografico",
      "Implantacao e nivelamento de obra",
      "Georreferenciamento",
      "Apoio ao projeto e execucao",
    ],
    image: IMAGES.facadeMinimal,
    icon: "map",
  },
  {
    slug: "consultoria",
    index: "05",
    title: "Consultoria Tecnica",
    short: "Apoio especializado para decidir melhor antes de construir.",
    description:
      "Prestamos consultoria arquitetonica e tecnica, avaliacao imobiliaria e apoio a decisoes de projeto, custos, viabilidade e formacao especializada.",
    bullets: [
      "Consultoria arquitetonica e tecnica",
      "Avaliacao imobiliaria detalhada",
      "Orcamentos, medicoes e viabilidade",
      "Formacao em AutoCAD 2D/3D",
    ],
    image: IMAGES.consultingSite,
    icon: "graduation-cap",
  },
  {
    slug: "servicos-plotter",
    index: "06",
    title: "Servicos de Plotter",
    short: "Impressao de plantas, desenhos tecnicos e pranchas.",
    description:
      "Servicos de plotter para impressao de projetos arquitetonicos, plantas, mapas e documentos tecnicos, com formatos desde A4 ate A0+, incluindo corte, acabamento e dobragem de folhas.",
    bullets: [
      "Impressoes de A4 ate A0+",
      "Plantas, pranchas e desenhos tecnicos",
      "Cortes e acabamento de folhas",
      "Dobragem tecnica para arquivo e entrega",
    ],
    image: IMAGES.plotterPrint,
    icon: "printer",
  },
];

export const PILLARS = [
  {
    key: "missao",
    label: "Missao",
    icon: "target",
    text: "Criar arquitetura de qualidade, funcional e duradoura, apoiada por engenharia rigorosa e por uma relacao transparente com cada cliente.",
  },
  {
    key: "visao",
    label: "Visao",
    icon: "eye",
    text: "Ser uma referencia em Angola em projetos de arquitetura, interiores e acompanhamento tecnico, reconhecida pela qualidade dos espacos que concebe e entrega.",
  },
  {
    key: "valores",
    label: "Valores",
    icon: "gem",
    text: "Principios que guiam cada projeto, cada decisao tecnica e cada relacao que construimos.",
  },
];

export const VALUES = [
  { title: "Criatividade com rigor tecnico", icon: "ruler" },
  { title: "Funcionalidade e conforto", icon: "lightbulb" },
  { title: "Pontualidade e prontidao", icon: "clock" },
  { title: "Confidencialidade e responsabilidade social", icon: "shield" },
  { title: "Espirito de equipa e parceria", icon: "handshake" },
];

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
    name: "Clinica Odonto Excellence",
    type: "Design Comercial & Arquitetura de Interiores",
    location: "Avenida Deolinda Rodrigues, Luanda",
    highlight:
      "Intervencao em fachada, otimizacao dos espacos de atendimento clinico e acompanhamento tecnico da execucao.",
    image: IMAGES.facadeGlass,
    tag: "Clinica",
  },
  {
    name: "Reabilitacao da Administracao do F.A.S",
    type: "Arquitetura Institucional / Reabilitacao",
    location: "Camabatela, Provincia do Kwanza Norte",
    highlight:
      "Reabilitacao institucional com foco em funcionalidade, durabilidade e melhoria das condicoes de utilizacao.",
    image: IMAGES.facadeUrban,
    tag: "Institucional",
  },
  {
    name: "Residencia Cirilo",
    type: "Arquitetura Residencial de Alto Padrao",
    location: "Bairro Kikagil, Municipio de Luanda",
    description:
      "Projeto residencial moderno composto por sala de estar, sala de jantar, 4 quartos, cozinha planeada, piscina e terraco sofisticado.",
    image: IMAGES.villaDusk,
    tag: "Residencial",
  },
  {
    name: "Condominio Benfica",
    type: "Arquitetura Urbanistica / Residencial",
    location: "Distrito Urbano do Benfica, Municipio de Belas",
    highlight:
      "Concecao urbanistica integrada com foco em conforto, seguranca e qualidade de vida.",
    image: IMAGES.apartments,
    tag: "Urbanistico",
  },
];

export const GALLERY_PROJECTS: { name: string; location: string; image: string }[] =
  [
    { name: "Casa Carlos", location: "Bairro Kikagil, Luanda", image: IMAGES.villaPool },
    { name: "Casa Luis Carlos", location: "Municipio de Belas", image: IMAGES.villaPool2 },
    { name: "Edificio Residencial Camama", location: "Camama, Municipio de Belas", image: IMAGES.apartmentsGlass },
    { name: "Igreja Adventista", location: "Distrito Urbano do Rangel", image: IMAGES.facadeWhite },
    { name: "Casa Adilson Manuel", location: "Centralidade do Kilamba, Belas", image: IMAGES.villaIlluminated },
    { name: "Casa Idalina Reis", location: "Zango 8000, Municipio de Viana", image: IMAGES.villaStone },
    { name: "Instituto Politecnico Medio", location: "Provincia do Cuando Cubango", image: IMAGES.facadeMinimal },
    { name: "Complexo Residencial Kilamba", location: "Municipio do Kilamba Kiaxi", image: IMAGES.apartments },
    { name: "Loja Wavida", location: "Maculusso, Luanda", image: IMAGES.interiorStylish },
    { name: "Clinica de Estetica +Top", location: "Luanda, Angola", image: IMAGES.interiorBlue },
  ];

export const SERVICE_OPTIONS = [
  "Projeto de Arquitetura / Design",
  "Engenharia / Fiscalizacao",
  "Construcao",
  "Topografia",
  "Servicos de Plotter",
  "Consultoria / Outro",
];
