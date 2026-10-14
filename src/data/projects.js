// Projetos exibidos na seção "Projetos" da home.
// Prints em /public/img/projects/<slug>/01..05.webp e logo do cliente na mesma pasta.
// type: 'web' (print de site/sistema, com moldura de navegador) | 'phone' (app mobile, já vem em moldura de celular)
// url: site/app atual do projeto (opcional; sem url o nome não é clicável)
// logoTheme: fundo do selo da logo ('light' para logos escuras, 'dark' para logos brancas)

const shots = (slug, count = 5) =>
    Array.from({ length: count }, (_, i) => `/img/projects/${slug}/${String(i + 1).padStart(2, '0')}.webp`);

export const projects = [
    {
        slug: 'imed',
        url: 'https://imedhealth.com.br/',
        kicker: 'EBS Bank',
        name: 'Imed Clube',
        type: 'web',
        logo: '/img/projects/imed/logo.png',
        logoTheme: 'light',
        sector: { pt: 'Saúde', en: 'Healthcare' },
        description: {
            pt: 'Site institucional e aplicativo de um clube de benefícios em saúde, com consultas médicas, telemedicina 24h, exames e contratação de planos 100% online.',
            en: 'Corporate website and app for a health benefits club, with medical appointments, 24/7 telemedicine, lab exams and 100% online plan subscription.'
        },
        images: shots('imed')
    },
    {
        slug: 'aluguemelhor',
        url: 'https://play.google.com/store/apps/details?id=com.app.aluguemelhor&hl=pt_BR',
        kicker: 'EBS Bank',
        name: 'Alugue Melhor',
        type: 'phone',
        logo: '/img/projects/aluguemelhor/logo.png',
        logoTheme: 'dark',
        sector: { pt: 'Imobiliário', en: 'Real estate' },
        description: {
            pt: 'Aplicativo para inquilinos acompanharem seus aluguéis, pagarem por PIX ou boleto, consultarem contratos e conhecerem novos anúncios de imóveis, com painel interno para a equipe.',
            en: 'App for tenants to track rent, pay by PIX or bank slip, check contracts and browse new property listings, with an internal dashboard for the staff.'
        },
        images: shots('aluguemelhor')
    },
    {
        slug: 'agape',
        url: 'https://play.google.com/store/apps/details?id=com.app.agape',
        kicker: 'EBS Bank',
        name: 'Ágape',
        type: 'phone',
        logo: '/img/projects/agape/logo.webp',
        logoTheme: 'light',
        sector: { pt: 'Eventos', en: 'Events' },
        description: {
            pt: 'Plataforma para eventos e bazares beneficentes: organizadores cadastram eventos e produtos, clientes compram pelo celular com QR Code e a gestão acompanha pedidos, pagamentos e consumo.',
            en: 'Platform for charity events and bazaars: organizers register events and products, customers buy from their phones via QR Code, and managers follow orders, payments and consumption.'
        },
        images: shots('agape')
    },
    {
        slug: 'hds',
        url: 'https://hds-six.vercel.app/',
        name: 'HDS Serviço Industrial',
        type: 'web',
        logo: '/img/projects/hds/logo.png',
        logoTheme: 'light',
        sector: { pt: 'Indústria', en: 'Industry' },
        description: {
            pt: 'Site institucional e sistema administrativo para uma empresa de montagem e manutenção industrial, com pedidos, propostas, faturamento, fornecedores e controle de equipe.',
            en: 'Corporate website and admin system for an industrial assembly and maintenance company, covering orders, proposals, invoicing, suppliers and team management.'
        },
        images: shots('hds')
    },
    {
        slug: 'etcotur',
        url: 'https://etcotur.com.br/',
        name: 'Etco Tur',
        type: 'web',
        logo: '/img/projects/etcotur/logo.png',
        logoTheme: 'light',
        sector: { pt: 'Turismo e Transporte', en: 'Tourism & Transport' },
        description: {
            pt: 'Site institucional de uma empresa de turismo e transporte coletivo, apresentando fretamentos, excursões e traslados, com formulário de contato e canal para quem quer trabalhar na empresa.',
            en: 'Corporate website for a tourism and group transport company, showcasing charters, tours and transfers, with a contact form and a careers channel.'
        },
        images: shots('etcotur')
    },
    {
        slug: 'sorbara',
        url: 'https://www.antoniosorbara.com/',
        name: 'Antonio Sorbara',
        type: 'web',
        logo: '/img/projects/sorbara/logo.png',
        logoTheme: 'dark',
        sector: { pt: 'Consultoria Estratégica', en: 'Strategy Consulting' },
        description: {
            pt: 'Site institucional de consultoria para C-Level, apresentando abordagens de atuação, formas de trabalho, clientes atendidos e contato direto para quem quer transformar problemas complexos em soluções práticas.',
            en: 'Corporate website for a C-Level consulting practice, presenting approaches, ways of working, clients served and direct contact for those who want to turn complex problems into practical solutions.'
        },
        images: shots('sorbara')
    },
    {
        slug: 'laio',
        url: 'https://laioenvelopamento.com.br/',
        name: 'Laio Envelopamento',
        type: 'web',
        logo: '/img/projects/laio/logo.webp',
        logoTheme: 'dark',
        sector: { pt: 'Envelopamento e Decoração', en: 'Wrapping & Decor' },
        description: {
            pt: 'Site com galeria de trabalhos, feed do Instagram, avaliações do Google, ficha cadastral e contato direto por WhatsApp para um profissional de envelopamento de móveis e superfícies.',
            en: 'Website with a work gallery, Instagram feed, Google reviews, registration form and direct WhatsApp contact for a furniture and surface wrapping professional.'
        },
        images: shots('laio')
    },
    {
        slug: 'siepp',
        url: 'https://siepp.divsec.cloud/',
        name: 'SIEPP',
        type: 'web',
        logo: '/img/projects/siepp/logo.webp',
        logoTheme: 'light',
        sector: { pt: 'Gestão Pública', en: 'Public Management' },
        description: {
            pt: 'Sistema multi-entidade para elaboração e execução de processos públicos, com cadastros, despesas, fichas orçamentárias, pagamentos e relatórios gerenciais para prefeituras.',
            en: 'Multi-entity system for preparing and running public procurement processes, with registries, expenses, budget records, payments and management reports for city governments.'
        },
        images: shots('siepp')
    },
    {
        slug: 'scale',
        name: 'Scale Clinic',
        type: 'web',
        logo: '/img/projects/scale/logo.png',
        logoTheme: 'light',
        sector: { pt: 'Medicina', en: 'Medicine' },
        description: {
            pt: 'Sistema de gestão para clínicas com agenda por profissional, cadastro de pacientes, controle de estoque, kanban de serviços de laboratório, vendas e financeiro.',
            en: 'Clinic management system with per-professional scheduling, patient records, inventory control, lab-service kanban, sales and finance.'
        },
        images: shots('scale')
    }
];
