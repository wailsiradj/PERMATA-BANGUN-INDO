export type Locale = 'id' | 'en';

export const site = {
  name: 'PT Permata Bangun Indo',
  short: 'Permata Bangun Indo',
  mark: 'P',
  tagline: {
    id: 'Perusahaan konstruksi Indonesia',
    en: 'Indonesian construction company',
  },
};

export const companyRegistry = {
  sourceUrl: 'https://companyhouse.id/permata-bangun-indo',
  id: {
    eyebrow: 'Data registrasi publik',
    title: 'Identitas perusahaan yang tersedia untuk publik.',
    note: 'Informasi berikut berasal dari catatan registrasi publik pihak ketiga yang menyatakan bersumber dari Direktorat Jenderal Administrasi Hukum Umum. Verifikasi langsung dengan dokumen perusahaan tetap disarankan sebelum publikasi final.',
    fields: [
      ['Bentuk badan usaha', 'Perseroan Terbatas (PT)'],
      ['Nomor usaha', '979426'],
      ['Alamat terdaftar', 'Permata Hijau Permai Blok I/16, Indonesia'],
    ],
    sourceLabel: 'Lihat sumber registrasi',
  },
  en: {
    eyebrow: 'Public registry data',
    title: 'Publicly available company identity.',
    note: 'The following information comes from a third-party public registry record that states it is sourced from Indonesia’s Directorate General of Legal Administration. Direct verification against company documents is still recommended before final publication.',
    fields: [
      ['Legal entity', 'Limited Liability Company (PT)'],
      ['Business number', '979426'],
      ['Registered address', 'Permata Hijau Permai Blok I/16, Indonesia'],
    ],
    sourceLabel: 'View registry source',
  },
} as const;

// NOTE: All photography below is placeholder (Unsplash) — replace with client assets before launch.
export const img = {
  hero: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=86',
  site: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=86',
  interior: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=86',
  structure: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=86',
  team: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=86',
  towers: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=86',
  interiorWide: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1600&q=86',
};

export const ui = {
  id: {
    nav: { home: 'Beranda', services: 'Layanan', projects: 'Proyek', about: 'Tentang Kami', contact: 'Kontak' },
    cta: 'Hubungi Kami',
    menuOpen: 'Buka menu',
    menuClose: 'Tutup menu',
    viewAll: 'Lihat semua proyek',
    viewDetail: 'Lihat detail',
    backToTop: 'Kembali ke atas',
    scrollCue: 'Gulir untuk menjelajah',
    all: 'Semua',
    prev: 'Proyek sebelumnya',
    next: 'Proyek berikutnya',
    backToProjects: 'Kembali ke proyek',
    category: 'Kategori',
    year: 'Tahun',
    location: 'Lokasi',
    client: 'Klien',
    scope: 'Lingkup kerja',
    challenge: 'Tantangan',
    solution: 'Solusi',
    gallery: 'Galeri',
  },
  en: {
    nav: { home: 'Home', services: 'Services', projects: 'Projects', about: 'About', contact: 'Contact' },
    cta: 'Get in touch',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    viewAll: 'View all projects',
    viewDetail: 'View detail',
    backToTop: 'Back to top',
    scrollCue: 'Scroll to explore',
    all: 'All',
    prev: 'Previous project',
    next: 'Next project',
    backToProjects: 'Back to projects',
    category: 'Category',
    year: 'Year',
    location: 'Location',
    client: 'Client',
    scope: 'Scope',
    challenge: 'Challenge',
    solution: 'Solution',
    gallery: 'Gallery',
  },
} as const;

export const hero = {
  id: {
    eyebrow: 'PT Permata Bangun Indo · Indonesia · 2010 — sekarang',
    titleLines: ['Membangun Kepercayaan.'],
    titleAccent: 'Mewujudkan Masa Depan.',
    copy: 'Konstruksi, sipil, serta mekanikal dan elektrikal untuk sektor publik dan swasta—direncanakan dengan cermat, dieksekusi dengan disiplin di lapangan.',
    ctaPrimary: 'Jelajahi proyek',
    ctaSecondary: 'Kenali kami',
  },
  en: {
    eyebrow: 'PT Permata Bangun Indo · Indonesia · 2010 — present',
    titleLines: ['Building Trust.'],
    titleAccent: 'Shaping the Future.',
    copy: 'Construction, civil, and mechanical-electrical work for public and private sectors—planned with care, executed with discipline on site.',
    ctaPrimary: 'Explore projects',
    ctaSecondary: 'Discover us',
  },
} as const;

export const stats = [
  { value: 13, suffix: '+', id: 'Tahun pengalaman', en: 'Years of experience' },
  { value: 3, suffix: '', id: 'Layanan inti', en: 'Core services' },
  { value: 4, suffix: '', id: 'Sektor layanan', en: 'Project sectors' },
  { value: 2, suffix: '', id: 'Publik & swasta', en: 'Public & private' },
] as const;

export const marquee = {
  id: ['Konstruksi Bangunan', 'Pekerjaan Sipil', 'Mekanikal & Elektrikal', 'Renovasi & Retrofit', 'Pengawasan Proyek', 'Perencanaan Teknis'],
  en: ['Building Construction', 'Civil Works', 'Mechanical & Electrical', 'Renovation & Retrofit', 'Project Supervision', 'Technical Planning'],
} as const;

export const about = {
  id: {
    eyebrow: 'Tentang Kami',
    titleLines: ['Lebih dari', 'sekadar bangunan.'],
    lead: 'Sejak 2010, PT Permata Bangun Indo tumbuh bersama proyek-proyek yang menuntut ketelitian: fasilitas publik, lingkungan kesehatan, ruang pendidikan, hingga hunian dan kawasan komersial.',
    paragraphs: [
      'Kami percaya konstruksi yang baik dimulai dari perencanaan yang jujur—memahami kebutuhan klien, menyusun pendekatan teknis yang realistis, lalu mengeksekusinya dengan pengawasan mutu di setiap tahap.',
      'Tim kami bekerja lintas disiplin: struktur, sipil, dan sistem mekanikal-elektrikal yang saling terkoordinasi agar hasil akhirnya kuat, fungsional, dan bertahan lama.',
    ],
    chips: ['Konstruksi', 'Sipil', 'MEP'],
    cta: 'Selengkapnya tentang kami',
  },
  en: {
    eyebrow: 'About Us',
    titleLines: ['More than', 'structures.'],
    lead: 'Since 2010, PT Permata Bangun Indo has grown alongside projects that demand precision: public facilities, healthcare environments, education spaces, residential and commercial developments.',
    paragraphs: [
      'We believe good construction begins with honest planning—understanding client needs, shaping a realistic technical approach, then executing it with quality oversight at every stage.',
      'Our team works across disciplines: structure, civil works, and mechanical-electrical systems coordinated together so the result is strong, functional, and built to last.',
    ],
    chips: ['Construction', 'Civil', 'MEP'],
    cta: 'More about us',
  },
} as const;

export const services = [
  {
    no: '01',
    slug: 'konstruksi-bangunan',
    image: img.site,
    id: {
      title: 'Konstruksi Bangunan',
      desc: 'Menghadirkan bangunan yang kuat, fungsional, dan relevan—dari struktur hingga penyelesaian akhir.',
      points: ['Perencanaan & koordinasi lapangan', 'Kontrol mutu material', 'Ketahanan jangka panjang'],
    },
    en: {
      title: 'Building Construction',
      desc: 'Strong, functional buildings made for today’s needs—from structure to the final detail.',
      points: ['Planning & site coordination', 'Material quality control', 'Long-term durability'],
    },
  },
  {
    no: '02',
    slug: 'pekerjaan-sipil',
    image: img.structure,
    id: {
      title: 'Pekerjaan Sipil',
      desc: 'Infrastruktur dan pekerjaan sipil yang direncanakan dengan cermat serta dieksekusi disiplin di lapangan.',
      points: ['Perencanaan teknis', 'Struktur & drainase', 'Pelaksanaan berjadwal'],
    },
    en: {
      title: 'Civil Works',
      desc: 'Carefully planned civil infrastructure, executed with discipline on site.',
      points: ['Technical planning', 'Structure & drainage', 'Scheduled execution'],
    },
  },
  {
    no: '03',
    slug: 'mekanikal-elektrikal',
    image: img.interior,
    id: {
      title: 'Mekanikal & Elektrikal',
      desc: 'Sistem MEP terintegrasi untuk performa bangunan yang aman, nyaman, dan efisien.',
      points: ['Sistem terintegrasi', 'Efisiensi energi', 'Keamanan operasional'],
    },
    en: {
      title: 'Mechanical & Electrical',
      desc: 'Integrated MEP systems for building performance that is safe, comfortable, and efficient.',
      points: ['Integrated systems', 'Energy efficiency', 'Operational safety'],
    },
  },
] as const;

export type ProjectCategory = 'infrastructure' | 'public' | 'education' | 'residential';

export const categoryLabel: Record<ProjectCategory, { id: string; en: string }> = {
  infrastructure: { id: 'Infrastruktur', en: 'Infrastructure' },
  public: { id: 'Bangunan Publik', en: 'Public Building' },
  education: { id: 'Pendidikan', en: 'Education' },
  residential: { id: 'Hunian & Komersial', en: 'Residential & Commercial' },
};

export const projects = [
  {
    slug: 'terminal-bandara',
    category: 'infrastructure' as ProjectCategory,
    year: '2023',
    location: 'Indonesia',
    image: img.hero,
    gallery: [img.towers, img.structure, img.site],
    id: {
      title: 'Terminal Bandara',
      summary: 'Ruang publik berskala besar yang dirancang untuk mengalirkan pergerakan manusia dengan aman dan jelas.',
      client: 'Sektor publik',
      scope: 'Konstruksi & MEP',
      challenge: 'Menyatukan arsitektur, struktur, dan sistem MEP dalam satu orkestrasi jadwal di lingkungan operasional yang tidak boleh berhenti.',
      solution: 'Perencanaan tahapan kerja yang terukur, koordinasi lintas disiplin mingguan, dan pengawasan mutu di setiap area kritis.',
    },
    en: {
      title: 'Airport Terminal',
      summary: 'A large-scale public space designed to move people safely and clearly.',
      client: 'Public sector',
      scope: 'Construction & MEP',
      challenge: 'Uniting architecture, structure, and MEP systems into one orchestrated schedule inside a continuously operating environment.',
      solution: 'Measured work staging, weekly cross-discipline coordination, and quality oversight at every critical zone.',
    },
  },
  {
    slug: 'fasilitas-kesehatan',
    category: 'public' as ProjectCategory,
    year: '2021',
    location: 'Indonesia',
    image: img.interior,
    gallery: [img.interiorWide, img.interior, img.team],
    id: {
      title: 'Fasilitas Kesehatan',
      summary: 'Lingkungan perawatan yang memprioritaskan ketenangan, ketahanan, dan pengalaman pengguna.',
      client: 'Sektor publik',
      scope: 'Konstruksi & MEP',
      challenge: 'Membangun ruang perawatan dengan standar kebersihan, ketenangan, dan sistem utilitas yang sangat menuntut.',
      solution: 'Detail penyelesaian yang ketat, pengendalian debu dan kebisingan selama konstruksi, serta integrasi MEP yang teruji.',
    },
    en: {
      title: 'Healthcare Facility',
      summary: 'A care environment prioritising calm, resilience, and the user experience.',
      client: 'Public sector',
      scope: 'Construction & MEP',
      challenge: 'Delivering care spaces that demand exacting standards of cleanliness, calm, and utility performance.',
      solution: 'Rigorous finish detailing, dust and noise control during construction, and tested MEP integration.',
    },
  },
  {
    slug: 'ruang-pendidikan',
    category: 'education' as ProjectCategory,
    year: '2019',
    location: 'Indonesia',
    image: img.structure,
    gallery: [img.site, img.structure, img.interiorWide],
    id: {
      title: 'Ruang Pendidikan',
      summary: 'Sekolah dan ruang belajar yang mendukung tumbuhnya generasi berikutnya.',
      client: 'Sektor publik & swasta',
      scope: 'Konstruksi bangunan',
      challenge: 'Menyelesaikan area belajar yang aman dan nyaman dalam jadwal yang mengikuti siklus akademik.',
      solution: 'Zonasi kerja per blok, material tahan pakai, dan penyelesaian bertahap agar fasilitas dapat digunakan tepat waktu.',
    },
    en: {
      title: 'Education Spaces',
      summary: 'Schools and learning spaces designed to support the next generation.',
      client: 'Public & private sector',
      scope: 'Building construction',
      challenge: 'Delivering safe, comfortable learning areas on a schedule tied to the academic calendar.',
      solution: 'Block-by-block work zoning, durable materials, and phased handover so facilities open on time.',
    },
  },
  {
    slug: 'hunian-komersial',
    category: 'residential' as ProjectCategory,
    year: '2017',
    location: 'Indonesia',
    image: img.site,
    gallery: [img.towers, img.site, img.hero],
    id: {
      title: 'Hunian & Komersial',
      summary: 'Pekerjaan bangunan untuk kehidupan sehari-hari, dari rumah hingga pengembangan kawasan.',
      client: 'Sektor swasta',
      scope: 'Konstruksi bangunan',
      challenge: 'Menjaga kualitas penyelesaian pada skala pengembangan dengan banyak unit dan variasi tipe.',
      solution: 'Standardisasi detail, kontrol mutu berkala, dan sistem pengawasan yang konsisten di seluruh unit.',
    },
    en: {
      title: 'Residential & Commercial',
      summary: 'Buildings for everyday life, from homes to wider developments.',
      client: 'Private sector',
      scope: 'Building construction',
      challenge: 'Holding finish quality across a multi-unit development with varied typologies.',
      solution: 'Standardised details, regular quality audits, and a consistent supervision system across every unit.',
    },
  },
] as const;

export const journey = [
  {
    year: '2023',
    id: { title: 'Fasilitas publik & infrastruktur', desc: 'Pengalaman meluas ke proyek publik berskala besar dengan tuntutan koordinasi lintas disiplin.' },
    en: { title: 'Public facilities & infrastructure', desc: 'Experience extended to large-scale public projects demanding cross-discipline coordination.' },
  },
  {
    year: '2021',
    id: { title: 'Lingkungan kesehatan', desc: 'Pengerjaan ruang perawatan dengan standar ketelitian dan ketahanan yang tinggi.' },
    en: { title: 'Healthcare environments', desc: 'Care environments delivered to exacting standards of precision and resilience.' },
  },
  {
    year: '2019',
    id: { title: 'Pendidikan & komersial', desc: 'Ruang belajar dan ruang komersial yang diselesaikan sesuai siklus dan kebutuhan pengguna.' },
    en: { title: 'Education & commercial', desc: 'Learning and commercial spaces completed around user cycles and needs.' },
  },
  {
    year: '2017',
    id: { title: 'Pengembangan hunian', desc: 'Pekerjaan bangunan skala pengembangan dengan konsistensi mutu antar unit.' },
    en: { title: 'Residential developments', desc: 'Development-scale building work with consistent quality across units.' },
  },
  {
    year: '2010',
    id: { title: 'Awal perjalanan', desc: 'Langkah pertama perusahaan dalam dunia konstruksi Indonesia.' },
    en: { title: 'The beginning', desc: 'The company’s first steps in Indonesian construction.' },
  },
] as const;

export const vision = {
  id: {
    eyebrow: 'Visi & Misi',
    titleLines: ['Profesional.', 'Kompetitif.', 'Terpercaya.'],
    visionLabel: 'Visi',
    vision: 'Menjadi perusahaan konstruksi yang profesional, kompetitif, dan terpercaya dalam mendukung pembangunan serta pertumbuhan ekonomi Indonesia.',
    missionLabel: 'Misi',
    mission: 'Menghadirkan layanan konstruksi yang profesional, memperkuat kompetensi secara berkelanjutan, dan mengembangkan sistem kerja modern yang berorientasi pada kinerja serta kebutuhan klien.',
    points: ['Layanan profesional di setiap skala proyek', 'Peningkatan kompetensi berkelanjutan', 'Sistem kerja modern & terukur', 'Kemitraan jangka panjang'],
  },
  en: {
    eyebrow: 'Vision & Mission',
    titleLines: ['Professional.', 'Competitive.', 'Trusted.'],
    visionLabel: 'Vision',
    vision: 'To become a professional, competitive, and trusted construction company supporting Indonesia’s development and economic growth.',
    missionLabel: 'Mission',
    mission: 'To deliver professional construction services, continuously strengthen competence, and develop modern ways of working focused on performance and client needs.',
    points: ['Professional service at every project scale', 'Continuous competence building', 'Modern, measurable ways of working', 'Long-term partnerships'],
  },
} as const;

export const values = [
  { no: '01', id: { title: 'Presisi', desc: 'Setiap detail dikerjakan dengan ketelitian—dari perencanaan hingga serah terima.' }, en: { title: 'Precision', desc: 'Every detail is executed with care—from planning through handover.' } },
  { no: '02', id: { title: 'Transparansi', desc: 'Komunikasi terbuka dan koordinasi yang jelas di setiap tahap proyek.' }, en: { title: 'Transparency', desc: 'Open communication and clear coordination at every project stage.' } },
  { no: '03', id: { title: 'Keselamatan', desc: 'Standar keselamatan kerja menjadi fondasi setiap aktivitas di lapangan.' }, en: { title: 'Safety', desc: 'Work safety standards are the foundation of every site activity.' } },
  { no: '04', id: { title: 'Ketepatan Waktu', desc: 'Perencanaan realistis dan pengawasan berkelanjutan untuk menjaga jadwal.' }, en: { title: 'Timeliness', desc: 'Realistic planning and continuous oversight to protect the schedule.' } },
] as const;

export const process = [
  { no: '01', id: { title: 'Konsultasi', desc: 'Memahami kebutuhan, ruang lingkup, dan target proyek sejak awal.' }, en: { title: 'Consultation', desc: 'Understanding needs, scope, and project targets from the start.' } },
  { no: '02', id: { title: 'Perencanaan', desc: 'Menyusun pendekatan teknis, jadwal, dan estimasi yang realistis.' }, en: { title: 'Planning', desc: 'Shaping the technical approach, schedule, and realistic estimates.' } },
  { no: '03', id: { title: 'Pelaksanaan', desc: 'Eksekusi di lapangan dengan pengawasan mutu, biaya, dan keselamatan.' }, en: { title: 'Execution', desc: 'On-site execution with quality, cost, and safety oversight.' } },
  { no: '04', id: { title: 'Serah Terima', desc: 'Penyelesaian, dokumentasi, dan dukungan setelah proyek selesai.' }, en: { title: 'Handover', desc: 'Completion, documentation, and support after the project is done.' } },
] as const;

export const why = [
  { no: '01', id: { title: 'Pengalaman Proyek', desc: 'Pengalaman lintas sektor sejak 2010—dari infrastruktur hingga hunian.' }, en: { title: 'Project Experience', desc: 'Cross-sector experience since 2010—from infrastructure to residential.' } },
  { no: '02', id: { title: 'Pelayanan Profesional', desc: 'Tim yang responsif, terorganisir, dan menjaga komunikasi tetap terbuka.' }, en: { title: 'Professional Service', desc: 'A responsive, organised team that keeps communication open.' } },
  { no: '03', id: { title: 'Berorientasi Kinerja', desc: 'Keputusan diambil berdasarkan mutu, jadwal, dan efisiensi proyek.' }, en: { title: 'Performance-minded', desc: 'Decisions driven by quality, schedule, and project efficiency.' } },
  { no: '04', id: { title: 'Memahami Kebutuhan Klien', desc: 'Pendekatan yang disesuaikan dengan tujuan bisnis setiap klien.' }, en: { title: 'Client Understanding', desc: 'An approach tailored to each client’s goals.' } },
] as const;

export const contact = {
  id: {
    eyebrow: 'Kontak',
    titleLines: ['Mari bangun', 'sesuatu yang bermakna.'],
    copy: 'Ceritakan kebutuhan proyek Anda. Tim kami akan menindaklanjuti dengan pembahasan awal mengenai lingkup, jadwal, dan pendekatan teknis.',
    form: {
      name: 'Nama lengkap',
      email: 'Email',
      phone: 'Telepon / WhatsApp',
      message: 'Ceritakan proyek Anda',
      submit: 'Kirim pesan',
      sending: 'Mengirim…',
      successTitle: 'Terima kasih.',
      success: 'Pesan Anda telah kami terima. Tim kami akan menghubungi Anda untuk pembahasan awal.',
      another: 'Kirim pesan lain',
      required: 'Harap isi kolom ini.',
      invalidEmail: 'Format email belum benar.',
    },
    infoLabel: 'Informasi kontak',
    infoNote: 'Kanal resmi email, telepon, dan alamat kantor sedang disiapkan dan akan diumumkan oleh perusahaan.',
    office: 'Kantor',
    officeValue: 'Indonesia',
    hours: 'Jam kerja',
    hoursValue: 'Senin – Jumat',
  },
  en: {
    eyebrow: 'Contact',
    titleLines: ['Let’s build', 'something meaningful.'],
    copy: 'Tell us about your project. Our team will follow up with an initial discussion on scope, schedule, and technical approach.',
    form: {
      name: 'Full name',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      message: 'Tell us about your project',
      submit: 'Send message',
      sending: 'Sending…',
      successTitle: 'Thank you.',
      success: 'Your message has been received. Our team will contact you for an initial discussion.',
      another: 'Send another message',
      required: 'Please fill in this field.',
      invalidEmail: 'Please enter a valid email.',
    },
    infoLabel: 'Contact information',
    infoNote: 'Official email, phone, and office address channels are being prepared and will be announced by the company.',
    office: 'Office',
    officeValue: 'Indonesia',
    hours: 'Working hours',
    hoursValue: 'Monday – Friday',
  },
} as const;

export const footer = {
  id: {
    wordmarkLines: ['Dibangun dengan', 'presisi.'],
    navLabel: 'Navigasi',
    contactLabel: 'Kontak',
    contactNote: 'Kanal kontak resmi akan segera diumumkan.',
    home: 'Beranda',
  },
  en: {
    wordmarkLines: ['Built with', 'precision.'],
    navLabel: 'Navigation',
    contactLabel: 'Contact',
    contactNote: 'Official contact channels will be announced shortly.',
    home: 'Home',
  },
} as const;

export const notFoundCopy = {
  id: { code: '404', title: ['Halaman tidak', 'ditemukan.'], copy: 'Halaman yang Anda cari tidak tersedia. Kembali ke beranda untuk melanjutkan.', cta: 'Kembali ke beranda' },
  en: { code: '404', title: ['Page not', 'found.'], copy: 'The page you are looking for is unavailable. Return home to continue.', cta: 'Back to home' },
} as const;

export const navLinks = (locale: Locale) => [
  { key: 'home', label: ui[locale].nav.home, href: `/${locale}` },
  { key: 'services', label: ui[locale].nav.services, href: `/${locale}#services` },
  { key: 'projects', label: ui[locale].nav.projects, href: `/${locale}/proyek` },
  { key: 'about', label: ui[locale].nav.about, href: `/${locale}/tentang-kami` },
  { key: 'contact', label: ui[locale].nav.contact, href: `/${locale}/kontak` },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

// Landing-page compatibility copy used by the current single-page composition.
export const copy = {
  id: { home: 'Membangun Kepercayaan. Mewujudkan Masa Depan.', homeLead: hero.id.copy },
  en: { home: 'Building Trust. Shaping the Future.', homeLead: hero.en.copy },
} as const;
