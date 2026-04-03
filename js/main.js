/* =============================================================
   CONTENT CONFIGURATION
   Edit CONFIG_EN and CONFIG_PL to reskin for a new client.
   ============================================================= */

const CONFIG_EN = {
  firm: {
    name:        "Nowak & Partners",
    tagline:     "Attorneys at Law",
    established: "Est. 1998",
    description: "A full-service law firm committed to delivering clear, principled legal counsel across every area of practice. We combine decades of courtroom experience with a modern, client-first approach.",
    address:     "ul. Złota 59, 00-120 Warsaw",
    phone:       "+48 22 456 78 90",
    email:       "contact@nowakpartners.pl",
    heroTitle:   "Principled counsel. <em>Exceptional</em> outcomes.",
    heroSubtitle:"We provide strategic legal advice to individuals, families, and businesses — with clarity, integrity, and relentless dedication to your interests.",
    heroBadge:   { stat: "25+ years", desc: "of trusted legal practice across Poland and the EU" },
    footerDisclaimer: "The information on this website is for general informational purposes only and does not constitute legal advice. Viewing this site does not create an attorney-client relationship.",
  },
  stats: [
    { number: "98%",    label: "Client satisfaction" },
    { number: "1,400+", label: "Cases resolved" },
    { number: "25+",    label: "Years of practice" },
  ],
  marqueeItems: ["Corporate Law","Family Law","Real Estate","Criminal Defence","Employment Law","Immigration","Intellectual Property","Civil Litigation"],
  about: {
    intro: "Founded in 1998, Nowak & Partners has built its reputation on one principle: every client deserves honest, expert advice — regardless of the complexity of their situation.",
    body:  "Over the past quarter century, we have guided thousands of clients through their most challenging legal moments. Our multidisciplinary team brings together specialists in every major area of law, working collaboratively to ensure no detail is overlooked. We are proud to serve clients in Warsaw and across Poland, with a network of partner firms throughout the European Union.",
    values: [
      { title: "Integrity above all",     text: "We give you our honest assessment, even when it's not what you hoped to hear." },
      { title: "Clarity in complexity",   text: "We translate the law into plain language so you can make informed decisions with confidence." },
      { title: "Relentless preparation",  text: "Every case is treated as if it will go to trial — thorough research, airtight strategy." },
      { title: "Long-term relationships", text: "Many of our clients have been with us for over a decade. That trust is our greatest achievement." },
    ],
  },
  team: [
    { name: "James Nowak",    role: "Founding Partner",            bio: "James founded the firm after 10 years at a leading Warsaw commercial practice. He specialises in corporate litigation and cross-border M&A transactions." },
    { name: "Marta Kowalczyk",   role: "Senior Partner",              bio: "Marta leads our family and employment law practice. Recognised in the Legal 500 Poland for three consecutive years, she is known for her empathetic, solutions-focused approach." },
    { name: "Tomasz Wiśniewski", role: "Partner — Criminal Defence",  bio: "Tomasz has defended clients in over 300 criminal proceedings, from white-collar fraud to complex organised crime cases. His preparation and courtroom composure are unmatched." },
    { name: "Alicja Dąbrowska",  role: "Partner — Real Estate",       bio: "Alicja advises on residential and commercial property transactions, zoning, and construction disputes. She has handled portfolios exceeding €200m in value." },
    { name: "Rafał Nowak",       role: "Associate — IP & Technology", bio: "Rafał focuses on intellectual property, data privacy (GDPR), and technology contracts. He advises startups and established tech companies across the EU." },
    { name: "Ewa Jankowska",     role: "Associate — Immigration",     bio: "Ewa manages complex immigration and residency matters for individuals and corporations. She is fluent in Polish, English, Ukrainian, and Russian." },
  ],
  practiceAreas: [
    { name: "Corporate & Commercial", desc: "Company formation, M&A transactions, shareholder disputes, contract negotiation, and ongoing corporate governance advisory.", tags: ["Mergers & Acquisitions","Shareholder Disputes","Contract Law","Due Diligence"], icon: "corporate" },
    { name: "Family Law",             desc: "Divorce and separation, child custody and support, pre-nuptial agreements, adoption proceedings, and inheritance disputes.",   tags: ["Divorce","Child Custody","Inheritance","Pre-nuptial Agreements"], icon: "family" },
    { name: "Criminal Defence",       desc: "Representation at every stage of criminal proceedings — from police investigation through appeal. We defend individuals and corporate entities.", tags: ["White-collar Crime","Fraud","DUI Defence","Appeals"], icon: "criminal" },
    { name: "Real Estate & Property", desc: "Residential and commercial transactions, lease agreements, construction disputes, zoning, and land registry matters.",           tags: ["Property Purchase","Commercial Leases","Construction","Zoning"], icon: "property" },
    { name: "Employment Law",         desc: "Unfair dismissal, discrimination, employment contracts, redundancy, workplace investigations, and TUPE transfers.",            tags: ["Wrongful Dismissal","Discrimination","Employment Contracts","TUPE"], icon: "employment" },
    { name: "Immigration",            desc: "Work and residence permits, citizenship applications, family reunification, business immigration, and asylum matters.",        tags: ["Work Permits","Residence","Citizenship","Family Reunification"], icon: "immigration" },
  ],
  whyUs: [
    { stat: "98%",    title: "Client satisfaction", text: "Measured through independent post-matter surveys since 2015." },
    { stat: "25+",    title: "Years of experience", text: "A quarter century of trusted practice across every legal discipline." },
    { stat: "1,400+", title: "Cases resolved",      text: "From straightforward advice to complex multi-year litigation." },
    { stat: "6",      title: "Practice areas",      text: "Full-service coverage so your entire legal life is handled under one roof." },
  ],
  process: [
    { title: "Initial consultation",        text: "We listen carefully to your situation — with no jargon, no judgment, and no charge for the first 30 minutes." },
    { title: "Case assessment",             text: "We assess your position honestly and lay out your options, including realistic outcomes and associated costs." },
    { title: "Strategy & engagement",       text: "Once instructed, we develop a clear strategy and keep you updated at every significant step." },
    { title: "Resolution & follow-through", text: "Whether settled, litigated, or advised upon, we see every matter through to a conclusion — and beyond." },
  ],
  testimonial: {
    quote:  "Nowak & Partners handled our company acquisition with exceptional skill and calm. In a process full of complexity and emotion, they were the one constant we could rely on.",
    author: "CEO, Nowak Logistics Group",
  },
  hours: [
    { day: "Monday – Thursday", hours: "08:30 – 18:00" },
    { day: "Friday",            hours: "08:30 – 16:00" },
    { day: "Saturday",          hours: "By appointment" },
    { day: "Sunday",            hours: "Closed" },
  ],
  matterTypes: ["Corporate & Commercial","Family Law","Criminal Defence","Real Estate & Property","Employment Law","Immigration","Other"],
};

const CONFIG_PL = {
  firm: {
    name:        "Nowak & Partners",
    tagline:     "Adwokaci i Radcowie Prawni",
    established: "Zał. 1998",
    description: "Kancelaria prawna świadcząca kompleksowe usługi prawne — jasne, rzetelne doradztwo we wszystkich dziedzinach prawa. Łączymy wieloletnie doświadczenie sądowe z nowoczesnym podejściem stawiającym klienta na pierwszym miejscu.",
    address:     "ul. Złota 59, 00-120 Warszawa",
    phone:       "+48 22 456 78 90",
    email:       "kontakt@nowakpartners.pl",
    heroTitle:   "Rzetelne doradztwo. <em>Wyjątkowe</em> rezultaty.",
    heroSubtitle:"Świadczymy strategiczne doradztwo prawne dla osób fizycznych, rodzin i przedsiębiorstw — z jasnością przekazu, rzetelnością i nieustającym zaangażowaniem w ochronę Państwa interesów.",
    heroBadge:   { stat: "25+ lat", desc: "zaufanej praktyki prawniczej w Polsce i UE" },
    footerDisclaimer: "Informacje zawarte na tej stronie mają wyłącznie charakter informacyjny i nie stanowią porady prawnej. Przeglądanie strony nie tworzy stosunku prawnego między klientem a kancelarią.",
  },
  stats: [
    { number: "98%",    label: "Zadowolonych klientów" },
    { number: "1 400+", label: "Rozwiązanych spraw" },
    { number: "25+",    label: "Lat praktyki" },
  ],
  marqueeItems: ["Prawo gospodarcze","Prawo rodzinne","Nieruchomości","Obrona karna","Prawo pracy","Imigracja","Własność intelektualna","Spory cywilne"],
  about: {
    intro: "Kancelaria Nowak & Partners, założona w 1998 roku, budowała swoją reputację na jednej zasadzie: każdy klient zasługuje na rzetelną, fachową poradę — niezależnie od stopnia skomplikowania sprawy.",
    body:  "Przez ostatnie ćwierć wieku przeprowadziliśmy tysiące klientów przez najtrudniejsze momenty prawne w ich życiu. Nasz multidyscyplinarny zespół skupia specjalistów z każdej głównej dziedziny prawa, którzy ściśle ze sobą współpracują, dbając o każdy szczegół. Z dumą obsługujemy klientów w Warszawie i w całej Polsce, korzystając z sieci kancelarii partnerskich w Unii Europejskiej.",
    values: [
      { title: "Uczciwość przede wszystkim", text: "Dajemy Państwu naszą szczerą ocenę sytuacji, nawet jeśli nie jest to to, co chcielibyście usłyszeć." },
      { title: "Jasność w zawiłościach",     text: "Przekładamy prawo na zrozumiały język, abyście mogli podejmować świadome decyzje z pełnym przekonaniem." },
      { title: "Nieustanne przygotowanie",   text: "Każdą sprawę traktujemy tak, jakby miała trafić do sądu — dogłębna analiza, szczelna strategia." },
      { title: "Długoterminowe relacje",     text: "Wielu naszych klientów współpracuje z nami od ponad dekady. To zaufanie jest naszym największym osiągnięciem." },
    ],
  },
  team: [
    { name: "James Nowak",    role: "Partner założyciel",                              bio: "James założył kancelarię po 10 latach pracy w czołowej warszawskiej kancelarii handlowej. Specjalizuje się w sporach korporacyjnych i transgranicznych transakcjach M&A." },
    { name: "Marta Kowalczyk",   role: "Starszy partner",                                 bio: "Marta kieruje działem prawa rodzinnego i pracy. Wymieniana w Legal 500 Poland przez trzy kolejne lata, znana jest z empatycznego podejścia nakierowanego na rozwiązania." },
    { name: "Tomasz Wiśniewski", role: "Partner — Prawo karne",                           bio: "Tomasz bronił klientów w ponad 300 postępowaniach karnych — od przestępstw białych kołnierzyków po złożone sprawy zorganizowanej przestępczości. Jego przygotowanie i spokój na sali sądowej nie mają sobie równych." },
    { name: "Alicja Dąbrowska",  role: "Partner — Nieruchomości",                        bio: "Alicja doradza przy transakcjach dotyczących nieruchomości mieszkaniowych i komercyjnych, zagospodarowaniu przestrzennym oraz sporach budowlanych. Obsługiwała portfele o wartości przekraczającej 200 mln euro." },
    { name: "Rafał Nowak",       role: "Associate — Własność intelektualna i technologie", bio: "Rafał zajmuje się własnością intelektualną, ochroną danych osobowych (RODO) oraz umowami technologicznymi. Doradza startupom i dojrzałym spółkom technologicznym w całej UE." },
    { name: "Ewa Jankowska",     role: "Associate — Imigracja",                           bio: "Ewa prowadzi złożone sprawy imigracyjne i pobytowe dla osób fizycznych i korporacji. Biegle posługuje się językiem polskim, angielskim, ukraińskim i rosyjskim." },
  ],
  practiceAreas: [
    { name: "Prawo gospodarcze i handlowe", desc: "Zakładanie spółek, transakcje M&A, spory wspólnicze, negocjacje umów oraz bieżące doradztwo z zakresu ładu korporacyjnego.", tags: ["Fuzje i przejęcia","Spory korporacyjne","Prawo umów","Due diligence"], icon: "corporate" },
    { name: "Prawo rodzinne",               desc: "Rozwód i separacja, opieka nad dziećmi i alimenty, intercyzy, postępowania adopcyjne oraz spory spadkowe.",                    tags: ["Rozwód","Opieka nad dzieckiem","Prawo spadkowe","Intercyzy"], icon: "family" },
    { name: "Obrona karna",                 desc: "Reprezentacja na każdym etapie postępowania karnego — od dochodzenia policyjnego po apelację. Bronimy osób fizycznych i podmiotów korporacyjnych.", tags: ["Przestępczość gospodarcza","Oszustwo","Obrona w sprawach drogowych","Apelacje"], icon: "criminal" },
    { name: "Nieruchomości",                desc: "Transakcje mieszkaniowe i komercyjne, umowy najmu, spory budowlane, planowanie przestrzenne oraz sprawy ksiąg wieczystych.",  tags: ["Zakup nieruchomości","Najem komercyjny","Prawo budowlane","Planowanie przestrzenne"], icon: "property" },
    { name: "Prawo pracy",                  desc: "Nieuzasadnione zwolnienie, dyskryminacja, umowy o pracę, zwolnienia grupowe, dochodzenia pracownicze oraz transfery przedsiębiorstw.", tags: ["Nieuzasadnione zwolnienie","Dyskryminacja","Umowy o pracę","Przejście zakładu pracy"], icon: "employment" },
    { name: "Imigracja",                    desc: "Zezwolenia na pracę i pobyt, wnioski o obywatelstwo, łączenie rodzin, imigracja biznesowa oraz sprawy azylowe.",             tags: ["Zezwolenia na pracę","Pobyt","Obywatelstwo","Łączenie rodzin"], icon: "immigration" },
  ],
  whyUs: [
    { stat: "98%",    title: "Zadowolonych klientów", text: "Mierzone niezależnymi ankietami po zakończeniu sprawy od 2015 roku." },
    { stat: "25+",    title: "Lat doświadczenia",     text: "Ćwierć wieku zaufanej praktyki we wszystkich dziedzinach prawa." },
    { stat: "1 400+", title: "Rozwiązanych spraw",    text: "Od prostego doradztwa po złożone wieloletnie postępowania sądowe." },
    { stat: "6",      title: "Obszarów praktyki",     text: "Kompleksowa obsługa — całe Państwa życie prawne pod jednym dachem." },
  ],
  process: [
    { title: "Wstępna konsultacja",       text: "Uważnie słuchamy Państwa sytuacji — bez żargonu, bez oceniania i bez opłat przez pierwsze 30 minut." },
    { title: "Ocena sprawy",              text: "Rzetelnie oceniamy Państwa pozycję i przedstawiamy dostępne opcje, w tym realistyczne wyniki i związane z nimi koszty." },
    { title: "Strategia i zaangażowanie", text: "Po przyjęciu zlecenia opracowujemy jasną strategię i informujemy Państwa na każdym istotnym etapie." },
    { title: "Rozwiązanie i realizacja",  text: "Niezależnie od tego, czy sprawa zostaje ugodzona, rozstrzygnięta sądownie czy pozostaje w sferze doradztwa, doprowadzamy ją do końca — i dbamy o Państwa interesy po jej zamknięciu." },
  ],
  testimonial: {
    quote:  "Kancelaria Nowak & Partners przeprowadziła nas przez przejęcie spółki z wyjątkowym profesjonalizmem i spokojem. W procesie pełnym zawiłości i emocji byli jedyną stałą, na której mogliśmy polegać.",
    author: "Prezes, Nowak Logistics Group",
  },
  hours: [
    { day: "Poniedziałek – Czwartek", hours: "08:30 – 18:00" },
    { day: "Piątek",                  hours: "08:30 – 16:00" },
    { day: "Sobota",                  hours: "Po umówieniu" },
    { day: "Niedziela",               hours: "Nieczynne" },
  ],
  matterTypes: ["Prawo gospodarcze i handlowe","Prawo rodzinne","Obrona karna","Nieruchomości","Prawo pracy","Imigracja","Inne"],
};

/* =============================================================
   UI STRINGS (bilingual)
   ============================================================= */
const UI = {
  en: {
    nav: { home: "Home", about: "About", areas: "Practice Areas", contact: "Contact", cta: "Free consultation" },
    introHead: "A firm built on <em>trust</em>.",
    whatWeDo: "What we do",
    ourPracticeAreas: "Our practice <em>areas</em>",
    aboutFirm: "About the firm",
    meetTeam: "Meet the team",
    aboutPageEyebrow: "Our firm",
    aboutPageHero: "Twenty-five years of <em>trusted</em> counsel.",
    ourStory: "Our story",
    builtOnPrinciple: "Built on principle. <em>Driven</em> by results.",
    ourValues: "Our values",
    theTeam: "The team",
    meetOurAttorneys: "Meet our <em>attorneys</em>",
    expertiseEyebrow: "Expertise",
    expertiseHero: "Full-service legal <em>expertise</em>.",
    expertiseDesc: "From personal matters to complex corporate transactions — we have the specialist expertise to advise you with confidence.",
    practiceAreasEyebrow: "Practice areas",
    whereWePractise: "Where we <em>practise</em>",
    whyChooseUs: "Why choose us",
    NowakDiff: "The Nowak <em>difference</em>",
    howWeWork: "How we work",
    ourProcess: "Our <em>process</em>",
    learnMore: "Learn more →",
    getInTouch: "Get in touch",
    contactHero: "Let's discuss your <em>matter</em>.",
    contactDesc: "Your first 30-minute consultation is complimentary. We will assess your situation honestly and outline your options — with no obligation to proceed.",
    addressLabel: "Address",
    phoneLabel: "Telephone",
    emailLabel: "Email",
    hoursLabel: "Office hours",
    mapPlaceholder: "↑ Embed Google Maps iframe here",
    formTitle: "Request a consultation",
    formDesc: "Complete the form and a member of our team will be in touch within one business day.",
    firstName: "First name",    firstNamePH: "Jan",
    lastName:  "Last name",     lastNamePH:  "Kowalski",
    emailField: "Email address", emailPH: "jan@example.com",
    phoneField: "Phone number",  phonePH: "+48 …",
    matterField: "Area of law",  matterPH: "Select an area…",
    messageField: "Brief description of your matter",
    messagePH: "Please describe your situation in a few sentences. All information is treated as strictly confidential.",
    dateField: "Preferred consultation date",
    formNote: "All enquiries are treated as strictly confidential. Submitting this form does not create an attorney-client relationship.",
    submitBtn: "Submit enquiry",
    successEyebrow: "Enquiry received",
    successTitle: "Thank you.",
    successMsg: "A member of our team will be in touch within one business day to confirm your consultation. All correspondence is strictly confidential.",
    validationMsg: "Please fill in your name, email address and area of law.",
    ctaTitle: "Ready to discuss your matter?",
    ctaDesc: "Your first 30-minute consultation is complimentary and without obligation.",
    ctaBtn: "Book a free consultation",
    footerNav: "Navigation",
    footerAreas: "Practice Areas",
    footerContact: "Contact",
    footerHome: "Home",
    footerAbout: "About",
  },
  pl: {
    nav: { home: "Strona główna", about: "O kancelarii", areas: "Obszary praktyki", contact: "Kontakt", cta: "Bezpłatna konsultacja" },
    introHead: "Kancelaria zbudowana na <em>zaufaniu</em>.",
    whatWeDo: "Czym się zajmujemy",
    ourPracticeAreas: "Nasze obszary <em>praktyki</em>",
    aboutFirm: "O kancelarii",
    meetTeam: "Poznaj zespół",
    aboutPageEyebrow: "Nasza kancelaria",
    aboutPageHero: "Dwadzieścia pięć lat <em>zaufanego</em> doradztwa prawnego.",
    ourStory: "Nasza historia",
    builtOnPrinciple: "Zbudowana na zasadach. <em>Nastawiona</em> na wyniki.",
    ourValues: "Nasze wartości",
    theTeam: "Zespół",
    meetOurAttorneys: "Poznaj naszych <em>prawników</em>",
    expertiseEyebrow: "Specjalizacje",
    expertiseHero: "Kompleksowa obsługa <em>prawna</em>.",
    expertiseDesc: "Od spraw osobistych po złożone transakcje korporacyjne — posiadamy specjalistyczną wiedzę, aby doradzać Państwu z pełnym przekonaniem.",
    practiceAreasEyebrow: "Obszary praktyki",
    whereWePractise: "Gdzie <em>działamy</em>",
    whyChooseUs: "Dlaczego my",
    NowakDiff: "Wyróżniki kancelarii <em>Nowak</em>",
    howWeWork: "Jak pracujemy",
    ourProcess: "Nasz <em>proces</em>",
    learnMore: "Dowiedz się więcej →",
    getInTouch: "Skontaktuj się",
    contactHero: "Porozmawiajmy o Twojej <em>sprawie</em>.",
    contactDesc: "Pierwsza 30-minutowa konsultacja jest bezpłatna. Rzetelnie ocenimy Państwa sytuację i przedstawimy dostępne opcje — bez żadnych zobowiązań.",
    addressLabel: "Adres",
    phoneLabel: "Telefon",
    emailLabel: "E-mail",
    hoursLabel: "Godziny otwarcia",
    mapPlaceholder: "↑ Wstaw tutaj iframe Google Maps",
    formTitle: "Poproś o konsultację",
    formDesc: "Wypełnij formularz, a skontaktujemy się z Tobą w ciągu jednego dnia roboczego.",
    firstName: "Imię",       firstNamePH: "Jan",
    lastName:  "Nazwisko",   lastNamePH:  "Kowalski",
    emailField: "Adres e-mail", emailPH: "jan@example.com",
    phoneField: "Numer telefonu", phonePH: "+48 …",
    matterField: "Obszar prawa", matterPH: "Wybierz obszar…",
    messageField: "Krótki opis sprawy",
    messagePH: "Proszę opisać sytuację w kilku zdaniach. Wszystkie informacje są traktowane jako ściśle poufne.",
    dateField: "Preferowana data konsultacji",
    formNote: "Wszystkie zapytania są traktowane jako ściśle poufne. Wysłanie formularza nie tworzy stosunku prawnego między klientem a kancelarią.",
    submitBtn: "Wyślij zapytanie",
    successEyebrow: "Zapytanie przyjęte",
    successTitle: "Dziękujemy.",
    successMsg: "Skontaktujemy się z Tobą w ciągu jednego dnia roboczego, aby potwierdzić konsultację. Cała korespondencja jest ściśle poufna.",
    validationMsg: "Proszę wypełnić imię, adres e-mail i wybrać obszar prawa.",
    ctaTitle: "Chcesz omówić swoją sprawę?",
    ctaDesc: "Pierwsza 30-minutowa konsultacja jest bezpłatna i niezobowiązująca.",
    ctaBtn: "Umów bezpłatną konsultację",
    footerNav: "Nawigacja",
    footerAreas: "Obszary praktyki",
    footerContact: "Kontakt",
    footerHome: "Strona główna",
    footerAbout: "O kancelarii",
  },
};

/* =============================================================
   ICONS
   ============================================================= */
const ICONS = {
  corporate:   `<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="1"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="12"/></svg>`,
  family:      `<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
  criminal:    `<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  property:    `<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  employment:  `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  immigration: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
};

/* =============================================================
   STATE
   ============================================================= */
let currentLang = 'pl';
let CONFIG = CONFIG_PL;

/* =============================================================
   NAVIGATION
   ============================================================= */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  const navEl = document.getElementById('nav-' + id);
  if (navEl) navEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.getElementById('nav-links').removeAttribute('style');
}

function toggleMenu() {
  const nl = document.getElementById('nav-links');
  const open = nl.style.display === 'flex';
  nl.style.cssText = open ? '' :
    'display:flex;flex-direction:column;position:absolute;top:var(--nav-h);left:0;right:0;background:var(--c-bg);padding:24px 32px;border-bottom:1px solid var(--c-border);gap:20px;';
}

/* =============================================================
   LANGUAGE SWITCHING
   ============================================================= */
function setLang(lang) {
  currentLang = lang;
  CONFIG = lang === 'pl' ? CONFIG_PL : CONFIG_EN;
  document.documentElement.lang = lang;

  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-pl').classList.toggle('active', lang === 'pl');
  const mobEn = document.getElementById('btn-en-mob');
  const mobPl = document.getElementById('btn-pl-mob');
  if (mobEn) mobEn.classList.toggle('active', lang === 'en');
  if (mobPl) mobPl.classList.toggle('active', lang === 'pl');
  // Close mobile menu after language change
  document.getElementById('nav-links').removeAttribute('style');

  const u = UI[lang];

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = key.split('.').reduce((o, k) => o && o[k], u);
    if (val !== undefined) el.innerHTML = val;
  });

  // Update form placeholders
  const phs = {
    'cf-first':  u.firstNamePH,
    'cf-last':   u.lastNamePH,
    'cf-email':  u.emailPH,
    'cf-phone':  u.phonePH,
    'cf-matter': u.matterPH,
    'cf-msg':    u.messagePH,
  };
  Object.entries(phs).forEach(([id, ph]) => {
    const el = document.getElementById(id);
    if (el) el.placeholder = ph;
  });

  // Re-populate matter dropdown
  const sel = document.getElementById('cf-matter');
  if (sel) {
    sel.innerHTML = `<option value="">${u.matterPH}</option>`;
    CONFIG.matterTypes.forEach(m => {
      const o = document.createElement('option');
      o.value = m; o.textContent = m; sel.appendChild(o);
    });
  }

  render();
}

/* =============================================================
   FORM SUBMISSION
   ============================================================= */
function submitConsult() {
  const u = UI[currentLang];
  const first  = document.getElementById('cf-first').value.trim();
  const email  = document.getElementById('cf-email').value.trim();
  const matter = document.getElementById('cf-matter').value;
  if (!first || !email || !matter) { alert(u.validationMsg); return; }
  document.getElementById('cf-view').style.display = 'none';
  document.getElementById('cf-success').style.display = 'block';
}

/* =============================================================
   FOOTER HTML BUILDER
   ============================================================= */
function footerHTML() {
  const c = CONFIG;
  const u = UI[currentLang];
  return `
    <div>
      <div class="footer-brand-name">${c.firm.name}</div>
      <div class="footer-brand-tag">${c.firm.tagline}</div>
      <p class="footer-brand-body">${c.firm.description}</p>
    </div>
    <div>
      <div class="footer-col-label">${u.footerNav}</div>
      <ul class="footer-links">
        <li><a href="#" onclick="showPage('home')">${u.footerHome}</a></li>
        <li><a href="#" onclick="showPage('about')">${u.footerAbout}</a></li>
        <li><a href="#" onclick="showPage('areas')">${u.footerAreas}</a></li>
        <li><a href="#" onclick="showPage('contact')">${u.footerContact}</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-label">${u.footerAreas}</div>
      <ul class="footer-links">
        ${c.practiceAreas.slice(0, 4).map(a => `<li><a href="#" onclick="showPage('areas')">${a.name}</a></li>`).join('')}
      </ul>
    </div>
    <div>
      <div class="footer-col-label">${u.footerContact}</div>
      <ul class="footer-links">
        <li><a href="mailto:${c.firm.email}">${c.firm.email}</a></li>
        <li><a href="tel:${c.firm.phone}">${c.firm.phone}</a></li>
        <li>${c.firm.address}</li>
      </ul>
    </div>`;
}

/* =============================================================
   RENDER — CONFIG-driven dynamic content
   ============================================================= */
function render() {
  const c = CONFIG;
  const f = c.firm;
  const u = UI[currentLang];

  // Nav
  document.title = f.name;
  document.getElementById('nav-logo-name').textContent = f.name;
  document.getElementById('nav-logo-sub').textContent  = f.tagline;
  document.getElementById('nav-cta-btn').textContent   = u.nav.cta;

  // Hero
  document.getElementById('hero-established').textContent = f.established;
  document.getElementById('hero-title').innerHTML  = f.heroTitle;
  document.getElementById('hero-lead').textContent = f.heroSubtitle;
  document.getElementById('hero-badge').innerHTML  = `<strong>${f.heroBadge.stat}</strong>${f.heroBadge.desc}`;

  // Marquee
  const items = [...c.marqueeItems, ...c.marqueeItems];
  document.getElementById('marquee-bar').innerHTML =
    `<div class="marquee-track">${items.map(i => `${i}<span class="marquee-sep">·</span>`).join('')}</div>`;

  // Home eyebrows & headings
  const setEl = (id, val, html) => {
    const el = document.getElementById(id);
    if (!el) return;
    html ? (el.innerHTML = val) : (el.textContent = val);
  };
  setEl('home-intro-head',  u.introHead,         true);
  setEl('home-what-we-do',  u.whatWeDo,          false);
  setEl('home-practice-head', u.ourPracticeAreas, true);
  setEl('home-about-firm',  u.aboutFirm,         false);
  setEl('home-meet-team',   u.meetTeam,          false);

  // Home intro about body
  const homeAboutBody = document.getElementById('home-about-body');
  if (homeAboutBody) homeAboutBody.textContent = c.about.body;

  // Stats
  document.getElementById('intro-stats').innerHTML = c.stats.map(s =>
    `<div class="stat-item"><div class="stat-n">${s.number}</div><div class="stat-l">${s.label}</div></div>`
  ).join('');

  // Practice areas preview (home)
  document.getElementById('areas-preview').innerHTML = c.practiceAreas.map((a, i) =>
    `<div class="area-preview-card" onclick="showPage('areas')">
       <div class="area-num">0${i + 1}</div>
       <div class="area-name">${a.name}</div>
       <p class="area-desc">${a.desc.substring(0, 90)}…</p>
       <span class="area-link">${u.learnMore}</span>
     </div>`
  ).join('');

  // Testimonial
  document.getElementById('t-quote').textContent  = c.testimonial.quote;
  document.getElementById('t-author').textContent = '— ' + c.testimonial.author;

  // CTA strip
  setEl('cta-title', u.ctaTitle, false);
  setEl('cta-desc',  u.ctaDesc,  false);
  setEl('cta-btn',   u.ctaBtn,   false);

  // About page
  document.getElementById('about-intro-text').textContent = c.about.intro;
  document.getElementById('about-body-text').innerHTML =
    c.about.body.split('. ').reduce((acc, s, i) => {
      if (i % 2 === 0 && i > 0) acc += '</p><p>';
      return acc + (i === 0 ? '' : '. ') + s;
    }, '<p>') + '.</p>';

  document.getElementById('values-list').innerHTML = c.about.values.map((v, i) =>
    `<div class="value-row">
       <div class="value-num">0${i + 1}</div>
       <div><div class="value-content-title">${v.title}</div><div class="value-content-text">${v.text}</div></div>
     </div>`
  ).join('');

  // About eyebrows
  setEl('about-team-eyebrow',   u.theTeam,            false);
  setEl('about-team-head',      u.meetOurAttorneys,   true);
  setEl('about-story-eyebrow',  u.ourStory,           false);
  setEl('about-values-eyebrow', u.ourValues,          false);

  // Team
  document.getElementById('team-grid').innerHTML = c.team.map(t =>
    `<div class="attorney-card">
       <div class="attorney-photo"><div class="img-ph">${t.name.split(' ').map(n => n[0]).join('')}</div></div>
       <div class="attorney-bar"></div>
       <div class="attorney-name">${t.name}</div>
       <div class="attorney-role">${t.role}</div>
       <p class="attorney-bio">${t.bio}</p>
     </div>`
  ).join('');

  // Areas page eyebrows
  setEl('areas-eyebrow',          u.expertiseEyebrow,      false);
  setEl('areas-hero-title',       u.expertiseHero,         true);
  setEl('areas-hero-desc',        u.expertiseDesc,         false);
  setEl('areas-practice-eyebrow', u.practiceAreasEyebrow,  false);
  setEl('areas-where-head',       u.whereWePractise,       true);
  setEl('areas-why-eyebrow',      u.whyChooseUs,           false);
  setEl('areas-why-head',         u.NowakDiff,          true);
  setEl('areas-how-eyebrow',      u.howWeWork,             false);
  setEl('areas-process-head',     u.ourProcess,            true);

  // Practice areas full
  document.getElementById('areas-full').innerHTML = c.practiceAreas.map(a =>
    `<div class="area-full-card">
       <div class="area-icon">${ICONS[a.icon] || ''}</div>
       <div class="area-full-name">${a.name}</div>
       <p class="area-full-desc">${a.desc}</p>
       <div class="area-tags">${a.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
     </div>`
  ).join('');

  // Why us
  document.getElementById('why-grid').innerHTML = c.whyUs.map(w =>
    `<div class="why-item">
       <div class="why-num">${w.stat}</div>
       <div class="why-title">${w.title}</div>
       <p class="why-text">${w.text}</p>
     </div>`
  ).join('');

  // Process
  document.getElementById('process-steps').innerHTML = c.process.map((p, i) =>
    `<div class="process-step">
       <div class="step-num">0${i + 1}</div>
       <div><div class="step-title">${p.title}</div><p class="step-text">${p.text}</p></div>
     </div>`
  ).join('');

  // Contact page
  setEl('contact-eyebrow', u.getInTouch, false);
  document.getElementById('c-address').textContent = f.address;
  document.getElementById('c-phone').innerHTML  = `<a href="tel:${f.phone}">${f.phone}</a>`;
  document.getElementById('c-email').innerHTML  = `<a href="mailto:${f.email}">${f.email}</a>`;
  document.getElementById('c-hours').innerHTML  = c.hours.map(h =>
    `<div class="hours-row"><span>${h.day}</span><span>${h.hours}</span></div>`
  ).join('');

  // Form select options
  const sel = document.getElementById('cf-matter');
  if (sel) {
    sel.innerHTML = `<option value="">${u.matterPH}</option>`;
    c.matterTypes.forEach(m => {
      const o = document.createElement('option');
      o.value = m; o.textContent = m; sel.appendChild(o);
    });
  }

  // Footers
  const year = new Date().getFullYear();
  const fHTML = footerHTML();
  ['home', 'about', 'areas', 'contact'].forEach(page => {
    const ft = document.getElementById(`footer-top-${page}`);
    const fc = document.getElementById(`footer-copy-${page}`);
    const fd = document.getElementById(`footer-disc-${page}`);
    if (ft) ft.innerHTML = fHTML;
    if (fc) fc.textContent = `© ${year} ${f.name}. All rights reserved.`;
    if (fd) fd.textContent = f.footerDisclaimer;
  });
}

/* =============================================================
   INIT
   ============================================================= */
render();
