const labs = [
  {
    id: 1,
    name: "Laboratoire D'analyse Médical Dr Gherib",
    phone: "06.96.10.02.00",
    adress: "وراء محكمة الوئام مقابل مسجد عبدالله بن عمر",
    workTime: "7:30-14:30"
  },
  {
    id:2,
    name: "Laboratoire D'analyse Médical Dr Khenfar ImadEddien",
    phone: "06.66.73.65.70",
    adress: "حي المقام بجوار متوسطة الرڨ الحاج "
  }
]

const doctors = [
  {
    id:1,
    name: "Dr LABBOUB.Kaddour",
    speciality: "Docteur en médecine allergologie",
    adress: "Cité El Wiam, en face le lycée Djoudi Belkacem",
    phone: "029.14.92.92",
    email: "k.laaboub@hotmail.fr",
    moreInfo: `Bilan allergologique,test cutané,EFR`
  },
  {
    id: 2,
    name: "Dr. Lokbaichi Tahar",
    speciality: "Médecine générale",
    adress: "Cité 600-200 p13 طريق محطة القطار",
    phone: "05.57.10.64.49",
    phone2: "06.99.57.84.50",
    email: "",
    moreInfo: "Echographie"
  },
  {
    id: 3,
    name: "Dr. Benadjila Mebarek",
    speciality: "Gynécologie obstétrique",
    adress: "Rue el-gharbia",
    phone: "029.10.15.85",
    phone2: "06.62.51.14.56",
    email: "",
    moreInfo: "Néo.Nat.contraception stérilité, Echographie"
  },
  {
    id: 4,
    name: "Dr. Bahat Sofiane",
    speciality: "Chirurgien Urologue",
    adress: "Cité Ben Sahnoun N 003 El Mekam",
    phone: "06.59.08.14.08",
    phone2: "05.51.71.82.23",
    phone3: "020.78.27.91",
    email: "Dr.bahat.sofiane.urologuqe@gmail.com",
    moreInfo: `Chirurgie et maladie du Rein des voies Urinaires,
     Endoscopie (Prostate, Vessie et calculs), Stérilité Masculine et impuissance, Circoncision`
  },
  {
    id: 5,
    name: "Dr. Zagmiri.A",
    speciality: "Médecin Spécialiste en Gynécologie Obstétrique",
    adress: "Cité 127 Logs Bloc 4P N 109 El Ouaimn LSP",
    phone: "06.97.80.50.01",
    email: "",
    moreInfo: `Suivi de grossesse, échographie 3D/4D, 
    maladie des seins, Frottis, Colposcopie, hystéroscopie 
    diagnostic et opératoire, ERCF, Stérilité du couple, Césarienne, Chirurgie Gynécologique`
  },
  {
    id: 6,
    name: "Dr. Sadeki Lakhdar",
    speciality: "Médecin Généraliste",
    adress: "",
    phone: "06.75.86.50.70",
    email: "",
    moreInfo: ""
  },
  {
    id: 7,
    name: "Dr. Nasri AbdelHamid",
    speciality: "Spécialiste en Diabétologie – Endocrinologie et maladies métaboliques",
    adress: "58 Bis, Rue Amar Telidji, Cité Gharbia (Rue de la poste)",
    phone: "092.10.10.03",
    email: "drnasriah@yahoo.fr",
    moreInfo: ""
  },
  {
    id: 8,
    name: "Dr. Rayane Mohammed",
    speciality: "Gynécologie",
    adress: "Cité Bouameur Maamourah",
    phone: "029.13.14.54",
    email: "",
    moreInfo: "Accouchements, Stérilité, Maladies du sein, Echographie"
  },
  {
    id: 9,
    name: "Dr. El NAGA Kamel",
    speciality: "Endocrinologue Diabétologue",
    adress: "Cité Rezzoug Maamourah en face la Gendarmerie au dessus pharmacie Zerrouki",
    phone: "06.59.82.88.81",
    email: "",
    moreInfo: ""
  },
  {
    id: 10,
    name: "Dr. Rezig A. Née Benalia",
    speciality: "Médecine Générale",
    adress: "Cité el Wiam En face Bt. Sahraoui",
    phone: "06.65.97.38.24",
    email: "",
    moreInfo: ""
  },
  {
    id: 11,
    name: "Dr. Selt Thameur",
    speciality: "Médecine interne",
    adress: "El Wiam وراء محكمة الوئام",
    phone: "05.53.80.76.66",
    phone2:"029.14.92.74",
    email: "",
    moreInfo: `Maladies du cœur et des vaisseaux, Diabète, HTA, 
      le goitre, gastrologie, ECG, échographie, échocardiographie, MAPA, Holter ECG, épreuve d’effort`
  },
  {
    id: 12,
    name: "Dr. Adi Boubakeur",
    speciality: "Médecine Générale",
    adress: "Ksar Bezaim Laghouat",
    phone: "07.79.33.76.30",
    email: "",
    moreInfo: "ECG"
  },
  {
    id: 13,
    name: "Dr. Chettikh Malika",
    speciality: "Médecine Générale",
    adress: "Cité EL-Gharbia",
    phone: "07.78.21.98.69",
    email: "",
    moreInfo: "Echographie Gynécologique et obstétricale"
  },
  {
    id: 14,
    name: "Dr. Taibaoui Souleyman",
    speciality: "Maladies & chirurgie des yeux",
    adress: "مجمع حمدي الطبي بالقرب من صيدلية بن شرشافة الوئام",
    phone: "05.42.03.55.81",
    phone2: "06.64.80.66.84",
    email: "Dr.taibaoui.s@gmail.com",
    moreInfo: ""
  },
  {
    id: 15,
    name: "Dr. Boufateh Othmane Sami",
    speciality: "Docteur en médecine générale",
    adress: "حي برج السنوسي",
    phone: "06.62.39.69.79",
    phone2: "05.40.28.42.49",
    email: "",
    moreInfo: ""
  },
  {
    id: 16,
    name: "Dr. Benzana.z",
    speciality: "Médecin spécialiste",
    adress: "Cité Wiame en face lycée Djoudi Belkacem",
    phone: "06.54.61.73.82",
    phone2: " 028.73.25.35",
    email: "Dr.zigham84@gmail.com",
    moreInfo: `Echographie cardiaque, ECG, MAPA,
     Echographie de thyroïde, Echo-Doppler TSA, 
     Doppler vasculaire artériel et veineux des membres inférieurs et supérieurs`
  },
  {
    id: 17,
    name: "Dr. Chettikh Aissa",
    speciality: "Médecin Généraliste",
    adress: "Hai el Wiam Laghouat",
    phone: "05.57.80.22.00",
    email: "",
    moreInfo: "Déclaration d’Accidents de travail et maladies professionnels"
  },
  {
    id: 18,
    name: "Dr. Nazef Nassim",
    speciality: "Spécialiste en Hépato – Gastro – Entérologie",
    adress: "حي الوئام قرب مركز التشخيص الطبي سيفون",
    phone: "05.42.09.41.98",
    phone2: "05.57.37.03.65",
    email: "",
    moreInfo: "Proctologie Endoscopie digestive"
  },
  {
    id: 19,
    name: "Dr. Kherarba.I",
    speciality: "Médecin spécialiste en maladies des femmes et obstétrique",
    adress: "شارع الدكتور سعدان – مقابل مستشفى الأمومة والطفولة-",
    phone: "06.97.89.22.22",
    email: "",
    moreInfo: `Echographie trois et quatre dimensions,
     infertilité du couple, chirurgie des maladies des 
     femmes et césariennes, maladies et chirurgie du sein`
  },
  {
    id: 20,
    name: "Dr. Benkemchi.A",
    speciality: "Médecine Générale",
    adress: "Kheneg Laghouat",
    phone: "029.14.80.20",
    email: "",
    moreInfo: "Consultation et soins, Echographie"
  }
]

const imagingCenters = [
  {
    id: 1,
    name: "Le Centre d’Imagerie Médicale ESPOIR",
    director: "Dr. M. Laghouati",
    adress: "Rue BENSAHNOUN lmkam",
    phone: "05.41.92.27.20",
    phone2: "07.70.38.94.10",
    phone3: "020.78.28.77",
    email: "cim.espoir@gmail.com",
    workTime: "8:00-00h00"
  },
  {
    id: 2,
    name: "Centre D'Imagerie Médicale Chifa Dr BENOMAR Laghouat",
    director: "Dr. BENOMAR",
    adress: "وراء محكمة الوئام",
    phone: "06.71.73.10.20",
    email: "chifaradiology@gmail.com",
  }
];

export {labs, doctors, imagingCenters};