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
    searchTerm: "Ophtalmologie",
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
  },
  {
    id:25,
    searchTerm: "Ophtalmologie",
    name: "Takhi.A",
    speciality: "Maladies et chirurgie des yeux" ,
    adress: "الوئام طريق عدل قرب الحي الجامعي لذكور 2000 سرير ",
    phone: "0675488763",
    moreInfo: "Maladies et Chirurgie des yeux"
  },
  {
    id: 26,
    searchTerm: "Médecine Générale",
    name: "Dr Belboul Afaf eps Belaid",
    speciality: "Médecine Générale",
    adress: "388, cité la douane (près de la pharmacie Belboul)",
    phone: "028736014",
    email: "",
    moreInfo: ""
  },
  {
    id: 27,
    searchTerm: "Chirurgie Orthopédique",
    name: "Dr Benguesmia Mohammed",
    speciality: "Orthopédie Traumatologie",
    adress: "حي الوئام وراء المحمكة",
    phone: "0659165914",
    phone2: "0557382406",
    email: "",
    moreInfo: "طب و جراحة العظام والمفاصل"
  },
  {
    id: 28,
    searchTerm: "Ophtalmologie",
    name: "Dr Kada Rachid",
    speciality: "Maladies et chirurgie des yeux",
    adress: "El Gharbia Bab Errabt",
    phone: "029901490",
    email: "medikada@yahoo.ca",
    moreInfo: "العيادة مغلقة أيام الأربعاء والخميس"
  },
  {
    id: 29,
    searchTerm: "Médecine Générale",
    name: "Dr Benaicha Ishak",
    speciality: "Médecine Générale",
    adress: "Cité Oasis Nord",
    phone: "020793735",
    email: "",
    moreInfo: "Médecin urgentiste"
  },
  {
    id: 30,
    searchTerm: "Cardiologie",
    name: "Dr Ghorab M.A",
    speciality: "Cardiologie adulte et pédiatrique",
    adress: "Cité Wiame Laghouat",
    phone: "0553807666",
    email: "GHORABAMINE83@gmail.com",
    moreInfo: `ECG – Holter ECG – MAPA  
      Echocardiographie doppler  
      Epreuve d’effort`
  },
  {
    id: 31,
    searchTerm: "Gynécologie Obstétrique",
    name: "Dr Guenou Khadidja",
    speciality: "Spécialiste en gynécologie obstétrique",
    adress: "Rue Elhorma Ahmed M’kam Laghouat",
    phone: "0558406997",
    phone2: "0655421429",
    email: "",
    moreInfo: "Stérilité – Échographie Doppler – ERCF – Colposcopie"
  },
  {
    id: 32,
    searchTerm: "Médecine Générale",
    name: "Dr Hamdi Amina",
    speciality: "Médecine Générale",
    adress: "Cité Esaada Oasis Nord",
    phone: "0559853067",
    email: "",
    moreInfo: "Échographie 3D-4D – Suivi de grossesse"
  },
  {
    id: 33,
    searchTerm: "Gynécologie Obstétrique",
    name: "Dr Souiah A.",
    speciality: "Spécialiste en gynécologie obstétrique",
    adress: "El Gharbia",
    phone: "0664158338",
    email: "",
    moreInfo: `Suivi de grossesse normale et à risque  
      Échographie pelvienne et obstétricale  
      Stérilité du couple, maladie des seins  
      Accouchement normal et césarienne`
  },
  {
    id: 34,
    searchTerm: "Néphrologie",
    name: "Dr Nait Elhocine A",
    speciality: "Spécialiste en néphrologie",
    adress: "Cité 252 Logements groupement 152 Maamourah",
    phone: "029102260",
    phone2: "0772448978",
    email: "",
    moreInfo: ""
  },
  {
    id: 35,
    searchTerm: "Médecine Générale",
    name: "Dr Benarous Nadjia",
    speciality: "Médecine Générale",
    adress: "Schettet El-Gharbi",
    phone: "0673306414",
    email: "",
    moreInfo: ""
  },
  {
    id:36,
    searchTerm: "Dentist",
    name:"Dr Oulmehdi.w Épse Bouchria ",
    speciality: "Cabinet Dentaire",
    adress: "Cité el-wiam en face des bâtiments SAHRAOUI",
    phone: "0656769557",
    moreInfo: "Soins dentaires, extractions, soin des gencives et détartrage, blanchiment"
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