import type { PageId } from "./navigation";

export const COMPANY = {
  name: "Loco Traços",
  legalName: "Loco Traços - Angola",
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
  { id: "home", label: "Início" },
  { id: "about", label: "A Empresa" },
  { id: "services", label: "Serviços" },
  { id: "portfolio", label: "Portfólio" },
  { id: "contact", label: "Contactos" },
];

const pdfAsset = (file: string) => `/portfolio-pdf/${file}`;

export const IMAGES = {
  villaPoolHero: pdfAsset("pdf-image-001-obj-5.jpg"),
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
  plotterPrint: "/images/plotter-print.jpg",
  interiorChandelier: pdfAsset("pdf-image-050-obj-239.jpg"),
  interiorBlue: pdfAsset("pdf-image-051-obj-240.jpg"),
  interiorMinimal: pdfAsset("pdf-image-027-obj-174.jpg"),
  interiorStylish: pdfAsset("pdf-image-051-obj-240.jpg"),
};

export const DIFFERENTIALS = [
  {
    icon: "award",
    title: "Arquitetura com Visão",
    text: "Concebemos projetos arquitetonicos funcionais, elegantes e adaptados ao contexto angolano, sempre com foco na experiencia de quem vai viver ou usar o espaço.",
  },
  {
    icon: "users",
    title: "Equipa Multidisciplinar",
    text: "Arquitetos, engenheiros e tecnicos trabalham em conjunto para transformar conceito, tecnica e obra num resultado coerente e de alto padrão.",
  },
  {
    icon: "cpu",
    title: "Tecnologia & Controlo",
    text: "Modelação, desenho tecnico, acompanhamento e controlo de qualidade apoiam cada decisão, do estudo inicial aos acabamentos finais.",
  },
];

export const STATS = [
  { value: 2020, label: "Fundada", suffix: "" },
  { value: 30, label: "Projetos entregues", suffix: "+" },
  { value: 6, label: "Areas de atuação", suffix: "" },
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
    short: "Conceção arquitetonica, interiores e experiencia espacial.",
    description:
      "Desenvolvemos projetos arquitetonicos inovadores, funcionais e personalizados, com leitura cuidada do terreno, do programa e da identidade de cada cliente.",
    bullets: [
      "Projetos arquitetonicos personalizados",
      "Design de interiores e conceito espacial",
      "Comercio, clinicas e residencias",
      "Apresentações 2D, 3D e apoio visual",
    ],
    image: IMAGES.interiorBlue,
    icon: "compass",
  },
  {
    slug: "engenharia-fiscalização",
    index: "02",
    title: "Engenharia & Fiscalização",
    short: "Rigor tecnico para tornar o projeto executavel.",
    description:
      "Apoiamos a arquitetura com engenharia, fiscalização e gestão tecnica, garantindo compatibilidade, seguranca, qualidade e cumprimento das especificacoes do projeto.",
    bullets: [
      "Fiscalização e direcao tecnica",
      "Compatibilização de especialidades",
      "Controlo de qualidade e prazos",
      "Gestão transparente da empreitada",
    ],
    image: IMAGES.teamHardHats,
    icon: "clipboard-check",
  },
  {
    slug: "construção-civil",
    index: "03",
    title: "Construção Civil e Empreitadas",
    short: "Execução de obras alinhada ao projeto arquitetônico.",
    description:
      "Executamos obras publicas e privadas com planeamento rigoroso, mão-de-obra especializada e respeito pela intenção arquitetônica definida em projeto.",
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
    title: "Topografia & Implantação",
    short: "Base tecnica precisa para projetar e implantar.",
    description:
      "Realizamos levantamentos topograficos, implantação e apoio ao projeto para que a arquitetura responda corretamente ao terreno e ao contexto.",
    bullets: [
      "Estudos e levantamento topografico",
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
    title: "Consultoria Tecnica",
    short: "Apoio especializado para decidir melhor antes de construir.",
    description:
      "Prestamos consultoria arquitetonica e tecnica, avaliação imobiliaria e apoio a decisões de projeto, custos, viabilidade e formação especializada.",
    bullets: [
      "Consultoria arquitetonica e tecnica",
      "Avaliação imobiliaria detalhada",
      "Orcamentos, medicoes e viabilidade",
      "Formação em AutoCAD 2D/3D",
    ],
    image: IMAGES.consultingSite,
    icon: "graduation-cap",
  },
  {
    slug: "serviços-plotter",
    index: "06",
    title: "Serviços de Plotter",
    short: "Impressão de plantas, desenhos tecnicos e pranchas.",
    description:
      "Serviços de plotter para impressão de projetos arquitetonicos, plantas, mapas e documentos tecnicos, com formatos desde A4 ate A0+, incluindo corte, acabamento e dobragem de folhas.",
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
    label: "Missão",
    icon: "target",
    text: "Criar arquitetura de qualidade, funcional e duradoura, apoiada por engenharia rigorosa e por uma relação transparente com cada cliente.",
  },
  {
    key: "visão",
    label: "Visão",
    icon: "eye",
    text: "Ser uma referencia em Angola em projetos de arquitetura, interiores e acompanhamento tecnico, reconhecida pela qualidade dos espaços que concebe e entrega.",
  },
  {
    key: "valores",
    label: "Valores",
    icon: "gem",
    text: "Principios que guiam cada projeto, cada decisão tecnica e cada relação que construimos.",
  },
];

export const VALUES = [
  { title: "Criatividade com rigor tecnico", icon: "ruler" },
  { title: "Funcionalidade e conforto", icon: "lightbulb" },
  { title: "Pontualidade e prontidão", icon: "clock" },
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
      "Intervenção em fachada, otimização dos espaços de atendimento clinico e acompanhamento tecnico da execução.",
    image: IMAGES.facadeGlass,
    tag: "Clinica",
  },
  {
    name: "Reabilitação da Administração do F.A.S",
    type: "Arquitetura Institucional / Reabilitação",
    location: "Camabatela, Provincia do Kwanza Norte",
    highlight:
      "Reabilitação institucional com foco em funcionalidade, durabilidade e melhoria das condicoes de utilização.",
    image: IMAGES.facadeUrban,
    tag: "Institucional",
  },
  {
    name: "Residencia Cirilo",
    type: "Arquitetura Residencial de Alto Padrão",
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
      "Conceção urbanistica integrada com foco em conforto, seguranca e qualidade de vida.",
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
  ];

export const SERVICE_OPTIONS = [
  "Projeto de Arquitetura / Design",
  "Engenharia / Fiscalização",
  "Construção",
  "Topografia",
  "Serviços de Plotter",
  "Consultoria / Outro",
];
