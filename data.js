const labs = [
  {
    id: 1,
    name: "Laboratoire D'analyse Médical Dr Gherib",
    phone: "0696100200",
    adress: "وراء محكمة الوئام مقابل مسجد عبدالله بن عمر",
    workTime: "7:30-14:30"
  },
  {
    id:2,
    name: "Laboratoire D'analyse Médical Dr Khenfar ImadEddien",
    phone: "0666736570",
    adress: "حي المقام بجوار متوسطة الرڨ الحاج "
  }
]

const doctors = [
  {
    id:1,
    searchTerm: "allergologie",
    name: "Dr LABBOUB.Kaddour",
    speciality: "Docteur en médecine allergologie",
    adress: "Cité El Wiam, en face le lycée Djoudi Belkacem",
    phone: "029149292",
    email: "k.laaboub@hotmail.fr",
    moreInfo: `Bilan allergologique,test cutané,EFR`
  },
  {
    id: 2,
    searchTerm: "Médecine générale",
    name: "Dr. Lokbaichi Tahar",
    speciality: "Médecine générale",
    adress: "Cité 600-200 p13 طريق محطة القطار",
    phone: "0557106449",
    phone2: "0699578450",
    email: "",
    moreInfo: "Echographie"
  },
  {
    id: 3,
    searchTerm: "Gynécologie obstétrique",
    name: "Dr. Benadjila Mebarek",
    speciality: "Gynécologie obstétrique",
    adress: "Rue el-gharbia",
    phone: "029101585",
    phone2: "0662511456",
    email: "",
    moreInfo: "Néo.Nat.contraception stérilité, Echographie"
  },
  {
    id: 4,
    searchTerm: "Chirurgien Urologue",
    name: "Dr. Bahat Sofiane",
    speciality: "Chirurgien Urologue",
    adress: "Cité Ben Sahnoun N 003 El Mekam",
    phone: "0659081408",
    phone2: "0551718223",
    phone3: "020782791",
    email: "Dr.bahat.sofiane.urologuqe@gmail.com",
    moreInfo: `Chirurgie et maladie du Rein des voies Urinaires,
     Endoscopie (Prostate, Vessie et calculs), Stérilité Masculine et impuissance, Circoncision`
  },
  {
    id: 5,
    searchTerm: "Gynécologie obstétrique",
    name: "Dr. Zagmiri.A",
    speciality: "Médecin Spécialiste en Gynécologie Obstétrique",
    adress: "Cité 127 Logs Bloc 4P N 109 El Ouaimn LSP",
    phone: "0697805001",
    email: "",
    moreInfo: `Suivi de grossesse, échographie 3D/4D, 
    maladie des seins, Frottis, Colposcopie, hystéroscopie 
    diagnostic et opératoire, ERCF, Stérilité du couple, Césarienne, Chirurgie Gynécologique`
  },
  {
    id: 6,
    searchTerm: "Médecine générale",
    name: "Dr. Sadeki Lakhdar",
    speciality: "Médecin Généraliste",
    adress: "",
    phone: "0675865070",
    email: "",
    moreInfo: ""
  },
  {
    id: 7,
    searchTerm: "Diabétologie Endocrinologie",
    name: "Dr. Nasri AbdelHamid",
    speciality: "Spécialiste en Diabétologie – Endocrinologie et maladies métaboliques",
    adress: "58 Bis, Rue Amar Telidji, Cité Gharbia (Rue de la poste)",
    phone: "092101003",
    email: "drnasriah@yahoo.fr",
    moreInfo: ""
  },
  {
    id: 8,
    searchTerm: "Gynécologie",
    name: "Dr. Rayane Mohammed",
    speciality: "Gynécologie",
    adress: "Cité Bouameur Maamourah",
    phone: "029131454",
    email: "",
    moreInfo: "Accouchements, Stérilité, Maladies du sein, Echographie"
  },
  {
    id: 9,
    searchTerm: "Diabétologie Endocrinologie",
    name: "Dr. El NAGA Kamel",
    speciality: "Endocrinologue Diabétologue",
    adress: "Cité Rezzoug Maamourah en face la Gendarmerie au dessus pharmacie Zerrouki",
    phone: "0659828881",
    email: "",
    moreInfo: ""
  },
  {
    id: 10,
    searchTerm: "Médecine générale",
    name: "Dr. Rezig A. Née Benalia",
    speciality: "Médecine Générale",
    adress: "Cité el Wiam En face Bt. Sahraoui",
    phone: "0665973824",
    email: "",
    moreInfo: ""
  },
  {
    id: 11,
    searchTerm: "Médecine interne",
    name: "Dr. Selt Thameur",
    speciality: "Médecine interne",
    adress: "El Wiam وراء محكمة الوئام",
    phone: "0553807666",
    phone2:"029149274",
    email: "",
    moreInfo: `Maladies du cœur et des vaisseaux, Diabète, HTA, 
      le goitre, gastrologie, ECG, échographie, échocardiographie, MAPA, Holter ECG, épreuve d’effort`
  },
  {
    id: 12,
    searchTerm: "Médecine générale",
    name: "Dr. Adi Boubakeur",
    speciality: "Médecine Générale",
    adress: "Ksar Bezaim Laghouat",
    phone: "0779337630",
    email: "",
    moreInfo: "ECG"
  },
  {
    id: 13,
    searchTerm: "Médecine générale",
    name: "Dr. Chettikh Malika",
    speciality: "Médecine Générale",
    adress: "Cité EL-Gharbia",
    phone: "0778219869",
    email: "",
    moreInfo: "Echographie Gynécologique et obstétricale"
  },
  {
    id: 14,
    searchTerm: "Maladies & chirurgie des yeux",
    name: "Dr. Taibaoui Souleyman",
    speciality: "Maladies & chirurgie des yeux",
    adress: "مجمع حمدي الطبي بالقرب من صيدلية بن شرشافة الوئام",
    phone: "0542035581",
    phone2: "0664806684",
    email: "Dr.taibaoui.s@gmail.com",
    moreInfo: ""
  },
  {
    id: 15,
    searchTerm: "Médecine générale",
    name: "Dr. Boufateh Othmane Sami",
    speciality: "Docteur en médecine générale",
    adress: "حي برج السنوسي",
    phone: "0662396979",
    phone2: "0540284249",
    email: "",
    moreInfo: ""
  },
  {
    id: 16,
    searchTerm: "Médecine interne",
    name: "Dr. Benzana.z",
    speciality: "Médecin spécialiste",
    adress: "Cité Wiame en face lycée Djoudi Belkacem",
    phone: "0654617382",
    phone2: " 028732535",
    email: "Dr.zigham84@gmail.com",
    moreInfo: `Echographie cardiaque, ECG, MAPA,
     Echographie de thyroïde, Echo-Doppler TSA, 
     Doppler vasculaire artériel et veineux des membres inférieurs et supérieurs`
  },
  {
    id: 17,
    searchTerm: "Médecine générale",
    name: "Dr. Chettikh Aissa",
    speciality: "Médecin Généraliste",
    adress: "Hai el Wiam Laghouat",
    phone: "0557802200",
    email: "",
    moreInfo: "Déclaration d’Accidents de travail et maladies professionnels"
  },
  {
    id: 18,
    searchTerm: "Gastro-entérologie",
    name: "Dr. Nazef Nassim",
    speciality: "Spécialiste en Hépato – Gastro – Entérologie",
    adress: "حي الوئام قرب مركز التشخيص الطبي سيفون",
    phone: "0542094198",
    phone2: "0557370365",
    email: "",
    moreInfo: "Proctologie Endoscopie digestive"
  },
  {
    id: 19,
    searchTerm: "Gynécologie obstétrique",
    name: "Dr. Kherarba.I",
    speciality: "Médecin spécialiste en maladies des femmes et obstétrique",
    adress: "شارع الدكتور سعدان – مقابل مستشفى الأمومة والطفولة-",
    phone: "0697892222",
    email: "",
    moreInfo: `Echographie trois et quatre dimensions,
     infertilité du couple, chirurgie des maladies des 
     femmes et césariennes, maladies et chirurgie du sein`
  },
  {
    id: 20,
    searchTerm: "Médecine générale",
    name: "Dr. Benkemchi.A",
    speciality: "Médecine Générale",
    adress: "Kheneg Laghouat",
    phone: "029148020",
    email: "",
    moreInfo: "Consultation et soins, Echographie"
  },
  {
    id:21,
    searchTerm:"Chirurgie Orthopédique",
    name:"Dr. kada djamel",
    speciality: "Chirurgie Orthopédique",
    adress: "Marche Couvert Quartier El Gharbia",
    phone: "029101630",
  },
  {
    id:22,
    searchTerm: "Neurochirurgue",
    name: "Dr. Koul Ahmed",
    speciality: "Neurochirurgue",
    adress: "AVENUE DU 1 ER NOVEMBRE 1954",
    phone:"0664281077",
  },
  {
    id:23,
    searchTerm: "Gynécologie obstétrique",
    name: "Dr. Taleb Mehiri Naima",
    speciality: "Gynécologie",
    adress: "El Gharbia",
    phone: "029101641",
    phone2: "0662591241",
    moreInfo: "Accouchement, stérilité, Echographie"
  },
  {
    id:24,
    searchTerm: "Dermatologie",
    name: "Touti.A",
    speciality: "Dermatologie et vénérologie",
    adress: "El Wiam batiment IRIS",
    phone: "0658213436",
    phone1: "0556020164",
  }
]

const imagingCenters = [
  {
    id: 1,
    name: "Le Centre d’Imagerie Médicale ESPOIR",
    director: "Dr. M. Laghouati",
    adress: "Rue BENSAHNOUN lmkam",
    phone: "0541922720",
    phone2: "0770389410",
    phone3: "020782877",
    email: "cim.espoir@gmail.com",
    workTime: "8:00-00h00"
  },
  {
    id: 2,
    name: "Centre D'Imagerie Médicale Chifa Dr BENOMAR Laghouat",
    director: "Dr. BENOMAR",
    adress: "وراء محكمة الوئام",
    phone: "0671731020",
    email: "chifaradiology@gmail.com",
  }
];

export {labs, doctors, imagingCenters};