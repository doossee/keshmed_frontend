const navigation_links = [
  { lang: true, title: "links.home", url: "/", icon: "mdi-home-outline" },
  { lang: true, title: "links.products", url: "/products", icon: "mdi-magnify" }
];
const conditions = [
  { title_uz: "Yangi", title_en: "New", title_ru: "\u041D\u043E\u0432\u044B\u0439", value: "new" },
  { title_uz: "Qutisi ochilgan", title_en: "Openbox", title_ru: "\u041E\u0442\u043A\u0440\u044B\u0442\u0430\u044F \u043A\u043E\u0440\u043E\u0431\u043A\u0430", value: "openbox" },
  { title_uz: "Ta'mirlangan", title_en: "Refurbished", title_ru: "\u041E\u0442\u0440\u0435\u043C\u043E\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439", value: "refurbished" },
  { title_uz: "Ishlatilgan", title_en: "Used", title_ru: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B", value: "used" }
];
const social_links = [
  { title: "@Kesh_Med", url: "https://t.me/Kesh_Med", icon: "mdi-send" },
  { title: "@keshmed37", url: "https://www.instagram.com/keshmed37", icon: "mdi-instagram" },
  { title: "+998 (90) 889 37 00", url: "tel:+998908893700", icon: "mdi-whatsapp" },
  { url: "tel:+998908893700", title: "+998 (90) 889 37 00", icon: "mdi-phone" },
  { url: "mailto:keshmed37@gmail.com", title: "keshmed37@gmail.com", icon: "mdi-gmail" }
];
const index_card_items = [
  { icon: "mdi-truck-delivery", title: "home.card_1_title", description: "home.card_1_desc" },
  { icon: "mdi-hammer", title: "home.card_2_title", description: "home.card_2_desc" },
  { icon: "mdi-wrench", title: "home.card_3_title", description: "home.card_3_desc" },
  { icon: "mdi-clock-outline", title: "home.card_4_title", description: "home.card_4_desc" }
];
const faqs = [
  {
    question: {
      en: "What are the main characteristics of your medical equipment?",
      uz: "Tibbiy jihozlaringizning asosiy xususiyatlari qanday?",
      ru: "\u041A\u0430\u043A\u043E\u0432\u044B \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F?"
    },
    answer: {
      en: "Answer: We provide high quality medical equipment that meets all modern standards of safety and effectiveness. Our products provide reliable and precise performance for better patient care.",
      uz: "Javob: Biz xavfsizlik va samaradorlikning barcha zamonaviy standartlariga javob beradigan yuqori sifatli tibbiy asbob-uskunalar bilan ta'minlaymiz. Mahsulotlarimiz bemorni yaxshiroq parvarish qilish uchun ishonchli va aniq ishlashni ta'minlaydi.",
      ru: "\u041E\u0442\u0432\u0435\u0442: \u041C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u044B\u0441\u043E\u043A\u043E\u0433\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0432\u0441\u0435\u043C \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438. \u041D\u0430\u0448\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0442 \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0435 \u0438 \u0442\u043E\u0447\u043D\u043E\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u043B\u0443\u0447\u0448\u0435\u0433\u043E \u0443\u0445\u043E\u0434\u0430 \u043E \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u0430\u0445."
    }
  },
  {
    question: {
      en: "What are the warranty terms for your equipment?",
      uz: "Sizning uskunangiz uchun kafolat shartlari qanday?",
      ru: "\u041A\u0430\u043A\u043E\u0432\u044B \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438 \u043D\u0430 \u0432\u0430\u0448\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435?"
    },
    answer: {
      en: "Answer: We provide a warranty on all our products. Please contact us for details about warranty periods and service conditions.",
      uz: "Javob: Biz barcha mahsulotlarimizga kafolat beramiz. Kafolat muddati va xizmat ko'rsatish shartlari haqida batafsil ma'lumot olish uchun biz bilan bog'laning.",
      ru: "\u041E\u0442\u0432\u0435\u0442: \u041C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u044E \u043D\u0430 \u0432\u0441\u0435 \u043D\u0430\u0448\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438, \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438 \u043E \u0441\u0440\u043E\u043A\u0430\u0445 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438 \u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F."
    }
  },
  {
    question: {
      en: "What services do you provide after the sale?",
      uz: "Sotishdan keyin qanday xizmatlarni taqdim qilasiz?",
      ru: "\u041A\u0430\u043A\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438?"
    },
    answer: {
      en: "Answer: We provide full after sales support, including training, technical support, service and spare parts.",
      uz: "Javob: Biz savdodan keyingi to'liq yordamni, jumladan, o'qitish, texnik yordam, xizmat ko'rsatish va ehtiyot qismlarni taqdim etamiz.",
      ru: "\u041E\u0442\u0432\u0435\u0442: \u041C\u044B \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u043C \u043F\u043E\u043B\u043D\u0443\u044E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443 \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430, \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443, \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0438 \u0437\u0430\u043F\u0430\u0441\u043D\u044B\u0435 \u0447\u0430\u0441\u0442\u0438."
    }
  },
  {
    question: {
      en: "What are the payment methods for your equipment?",
      uz: "Sizning uskunangiz uchun qanday to'lov usullari mavjud?",
      ru: "\u041A\u0430\u043A\u043E\u0432\u044B \u0441\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u043F\u043B\u0430\u0442\u044B \u0437\u0430 \u0432\u0430\u0448\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435?"
    },
    answer: {
      en: "Answer: We accept a variety of payment methods, including bank transfers, credit cards and other electronic payment methods. Please contact us to discuss details.",
      uz: "Javob: Biz turli xil to'lov usullarini, jumladan, bank o'tkazmalarini, kredit kartalarini va boshqa elektron to'lov usullarini qabul qilamiz. Tafsilotlarni muhokama qilish uchun biz bilan bog'laning.",
      ru: "\u041E\u0442\u0432\u0435\u0442: \u041C\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u043C \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u043F\u043B\u0430\u0442\u044B, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u044B, \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u044B \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0435 \u043C\u0435\u0442\u043E\u0434\u044B \u043E\u043F\u043B\u0430\u0442\u044B. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438."
    }
  },
  {
    question: {
      en: "Can you provide samples of your equipment for testing?",
      uz: "Sinov uchun uskunangiz namunalarini bera olasizmi?",
      ru: "\u041C\u043E\u0436\u0435\u0442\u0435 \u043B\u0438 \u0432\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0431\u0440\u0430\u0437\u0446\u044B \u0432\u0430\u0448\u0435\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043B\u044F \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F?"
    },
    answer: {
      en: "Answer: Yes, we can provide samples of our equipment for testing before purchase. Please contact us to arrange testing.",
      uz: "Javob: Ha, biz sotib olishdan oldin sinov uchun uskunamiz namunalarini taqdim eta olamiz. Iltimos, testni tashkil qilish uchun biz bilan bog'laning.",
      ru: "\u041E\u0442\u0432\u0435\u0442: \u0414\u0430, \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0431\u0440\u0430\u0437\u0446\u044B \u043D\u0430\u0448\u0435\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043B\u044F \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u0434 \u043F\u043E\u043A\u0443\u043F\u043A\u043E\u0439. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438, \u0447\u0442\u043E\u0431\u044B \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435."
    }
  },
  {
    question: {
      en: "What are the delivery times and delivery conditions?",
      uz: "Yetkazib berish muddatlari va etkazib berish shartlari qanday?",
      ru: "\u041A\u0430\u043A\u043E\u0432\u044B \u0441\u0440\u043E\u043A\u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438?"
    },
    answer: {
      en: "Answer: We are committed to providing fast and reliable delivery of our products. Delivery times and conditions vary depending on specific orders and customer location. Please contact our logistics department for details.",
      uz: "Javob: Biz mahsulotlarimizni tez va ishonchli yetkazib berishni ta'minlashga intilamiz. Yetkazib berish muddati va shartlari ma'lum buyurtmalar va mijozning joylashuviga qarab farq qiladi. Tafsilotlar uchun logistika bo'limimizga murojaat qiling.",
      ru: "\u041E\u0442\u0432\u0435\u0442: \u041C\u044B \u0441\u0442\u0440\u0435\u043C\u0438\u043C\u0441\u044F \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0431\u044B\u0441\u0442\u0440\u0443\u044E \u0438 \u043D\u0430\u0434\u0435\u0436\u043D\u0443\u044E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443 \u043D\u0430\u0448\u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432. \u0421\u0440\u043E\u043A\u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0437\u0430\u0432\u0438\u0441\u044F\u0442 \u043E\u0442 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0445 \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u0438 \u043C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u043D\u0430\u0448\u0435\u043C\u0443 \u043E\u0442\u0434\u0435\u043B\u0443 \u043B\u043E\u0433\u0438\u0441\u0442\u0438\u043A\u0438 \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438."
    }
  },
  {
    question: {
      en: "Can you provide setup and installation of your equipment?",
      uz: "Uskunangizni sozlash va o'rnatishni ta'minlay olasizmi?",
      ru: "\u041C\u043E\u0436\u0435\u0442\u0435 \u043B\u0438 \u0432\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443 \u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443 \u0432\u0430\u0448\u0435\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F?"
    },
    answer: {
      en: "Answer: Yes, we provide configuration, installation and training services for personnel in using our equipment. This helps ensure that the products are used effectively and safely.",
      uz: "Javob: Ha, biz jihozlarimizdan foydalanishda xodimlar uchun konfiguratsiya, o'rnatish va o'qitish xizmatlarini taqdim etamiz. Bu mahsulotlardan samarali va xavfsiz foydalanishga yordam beradi.",
      ru: "\u041E\u0442\u0432\u0435\u0442: \u0414\u0430, \u043C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0443\u0441\u043B\u0443\u0433\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430 \u043F\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044E \u043D\u0430\u0448\u0435\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F. \u042D\u0442\u043E \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432."
    }
  },
  {
    question: {
      en: "What to do if problems arise with the equipment?",
      uz: "Uskunada muammolar yuzaga kelsa nima qilish kerak?",
      ru: "\u0427\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0441 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435\u043C?"
    },
    answer: {
      en: "Answer: If you have any problems with our equipment, please contact our technical support department immediately. We will be happy to help you solve any problems and ensure continued operation of your equipment.",
      uz: "Javob: Uskunalarimiz bilan bog'liq muammolar mavjud bo'lsa, darhol texnik yordam bo'limimizga murojaat qiling. Biz sizga har qanday muammolarni hal qilishda yordam berishdan va uskunangizning uzluksiz ishlashini ta'minlashdan mamnun bo'lamiz.",
      ru: "\u041E\u0442\u0432\u0435\u0442: \u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441 \u043D\u0430\u0448\u0438\u043C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435\u043C, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043D\u0435\u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u0448\u0438\u043C \u043E\u0442\u0434\u0435\u043B\u043E\u043C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438. \u041C\u044B \u0441 \u0440\u0430\u0434\u043E\u0441\u0442\u044C\u044E \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u0432\u0430\u043C \u0440\u0435\u0448\u0438\u0442\u044C \u043B\u044E\u0431\u044B\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0438 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u043D\u0435\u043F\u0440\u0435\u0440\u044B\u0432\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u0432\u0430\u0448\u0435\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F."
    }
  }
];
const admin_links = [
  { title: "admin.products", icon: "mdi-package-variant-closed", url: "/admin" },
  { title: "products.categories", icon: "mdi-sitemap", url: "/admin/categories" },
  { title: "products.brands", icon: "mdi-decagram", url: "/admin/brands" },
  { title: "admin.orders", icon: "mdi-shopping", url: "/admin/orders" }
];
const languages = [
  { img: "/flag/ru.svg", lang: "ru", title: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" },
  { img: "/flag/uz.svg", lang: "uz", title: "O'zbek" },
  { img: "/flag/us.svg", lang: "en", title: "English" }
];
const countries = [
  {
    "id": 0,
    "flag": "/flag/uz.svg",
    "name": "Uzbekistan",
    "code": "UZ"
  },
  {
    "id": 1,
    "flag": "/flag/tj.svg",
    "name": "Tajikistan",
    "code": "TJ"
  },
  {
    "id": 2,
    "flag": "/flag/kg.svg",
    "name": "Kyrgyzstan",
    "code": "KG"
  },
  {
    "id": 3,
    "flag": "/flag/kz.svg",
    "name": "Kazakhstan",
    "code": "KZ"
  },
  {
    "id": 4,
    "flag": "/flag/tm.svg",
    "name": "Turkmenistan",
    "code": "TM"
  },
  {
    "id": 5,
    "flag": "/flag/ru.svg",
    "name": "Russian Federation",
    "code": "RU"
  },
  {
    "id": 6,
    "flag": "/flag/us.svg",
    "name": "United States",
    "code": "US"
  },
  {
    "id": 7,
    "flag": "/flag/ca.svg",
    "name": "Canada",
    "code": "CA"
  },
  {
    "id": 8,
    "flag": "/flag/nl.svg",
    "name": "Netherlands",
    "code": "NL"
  },
  {
    "id": 9,
    "flag": "/flag/cn.svg",
    "name": "China",
    "code": "CN"
  },
  {
    "id": 10,
    "flag": "/flag/gb.svg",
    "name": "United Kingdom",
    "code": "GB"
  },
  {
    "id": 11,
    "flag": "/flag/de.svg",
    "name": "Germany",
    "code": "DE"
  },
  {
    "id": 12,
    "flag": "/flag/fr.svg",
    "name": "France",
    "code": "FR"
  },
  {
    "id": 13,
    "flag": "/flag/jp.svg",
    "name": "Japan",
    "code": "JP"
  },
  {
    "id": 14,
    "flag": "/flag/kr.svg",
    "name": "South Korea",
    "code": "KR"
  },
  {
    "id": 15,
    "flag": "/flag/pl.svg",
    "name": "Poland",
    "code": "PL"
  }
];

export { conditions as a, admin_links as b, countries as c, faqs as f, index_card_items as i, languages as l, navigation_links as n, social_links as s };
