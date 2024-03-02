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
    "flag": "/flag/af.svg",
    "name": "Afghanistan",
    "code": "AF"
  },
  {
    "id": 1,
    "flag": "/flag/ax.svg",
    "name": "\xC5land Islands",
    "code": "AX"
  },
  {
    "id": 2,
    "flag": "/flag/al.svg",
    "name": "Albania",
    "code": "AL"
  },
  {
    "id": 3,
    "flag": "/flag/dz.svg",
    "name": "Algeria",
    "code": "DZ"
  },
  {
    "id": 4,
    "flag": "/flag/as.svg",
    "name": "American Samoa",
    "code": "AS"
  },
  {
    "id": 5,
    "flag": "/flag/ad.svg",
    "name": "AndorrA",
    "code": "AD"
  },
  {
    "id": 6,
    "flag": "/flag/ao.svg",
    "name": "Angola",
    "code": "AO"
  },
  {
    "id": 7,
    "flag": "/flag/ai.svg",
    "name": "Anguilla",
    "code": "AI"
  },
  {
    "id": 8,
    "flag": "/flag/aq.svg",
    "name": "Antarctica",
    "code": "AQ"
  },
  {
    "id": 9,
    "flag": "/flag/ag.svg",
    "name": "Antigua and Barbuda",
    "code": "AG"
  },
  {
    "id": 10,
    "flag": "/flag/ar.svg",
    "name": "Argentina",
    "code": "AR"
  },
  {
    "id": 11,
    "flag": "/flag/am.svg",
    "name": "Armenia",
    "code": "AM"
  },
  {
    "id": 12,
    "flag": "/flag/aw.svg",
    "name": "Aruba",
    "code": "AW"
  },
  {
    "id": 13,
    "flag": "/flag/au.svg",
    "name": "Australia",
    "code": "AU"
  },
  {
    "id": 14,
    "flag": "/flag/at.svg",
    "name": "Austria",
    "code": "AT"
  },
  {
    "id": 15,
    "flag": "/flag/az.svg",
    "name": "Azerbaijan",
    "code": "AZ"
  },
  {
    "id": 16,
    "flag": "/flag/bs.svg",
    "name": "Bahamas",
    "code": "BS"
  },
  {
    "id": 17,
    "flag": "/flag/bh.svg",
    "name": "Bahrain",
    "code": "BH"
  },
  {
    "id": 18,
    "flag": "/flag/bd.svg",
    "name": "Bangladesh",
    "code": "BD"
  },
  {
    "id": 19,
    "flag": "/flag/bb.svg",
    "name": "Barbados",
    "code": "BB"
  },
  {
    "id": 20,
    "flag": "/flag/by.svg",
    "name": "Belarus",
    "code": "BY"
  },
  {
    "id": 21,
    "flag": "/flag/be.svg",
    "name": "Belgium",
    "code": "BE"
  },
  {
    "id": 22,
    "flag": "/flag/bz.svg",
    "name": "Belize",
    "code": "BZ"
  },
  {
    "id": 23,
    "flag": "/flag/bj.svg",
    "name": "Benin",
    "code": "BJ"
  },
  {
    "id": 24,
    "flag": "/flag/bm.svg",
    "name": "Bermuda",
    "code": "BM"
  },
  {
    "id": 25,
    "flag": "/flag/bt.svg",
    "name": "Bhutan",
    "code": "BT"
  },
  {
    "id": 26,
    "flag": "/flag/bo.svg",
    "name": "Bolivia",
    "code": "BO"
  },
  {
    "id": 27,
    "flag": "/flag/ba.svg",
    "name": "Bosnia and Herzegovina",
    "code": "BA"
  },
  {
    "id": 28,
    "flag": "/flag/bw.svg",
    "name": "Botswana",
    "code": "BW"
  },
  {
    "id": 29,
    "flag": "/flag/bv.svg",
    "name": "Bouvet Island",
    "code": "BV"
  },
  {
    "id": 30,
    "flag": "/flag/br.svg",
    "name": "Brazil",
    "code": "BR"
  },
  {
    "id": 31,
    "flag": "/flag/io.svg",
    "name": "British Indian Ocean Territory",
    "code": "IO"
  },
  {
    "id": 32,
    "flag": "/flag/bn.svg",
    "name": "Brunei Darussalam",
    "code": "BN"
  },
  {
    "id": 33,
    "flag": "/flag/bg.svg",
    "name": "Bulgaria",
    "code": "BG"
  },
  {
    "id": 34,
    "flag": "/flag/bf.svg",
    "name": "Burkina Faso",
    "code": "BF"
  },
  {
    "id": 35,
    "flag": "/flag/bi.svg",
    "name": "Burundi",
    "code": "BI"
  },
  {
    "id": 36,
    "flag": "/flag/kh.svg",
    "name": "Cambodia",
    "code": "KH"
  },
  {
    "id": 37,
    "flag": "/flag/cm.svg",
    "name": "Cameroon",
    "code": "CM"
  },
  {
    "id": 38,
    "flag": "/flag/ca.svg",
    "name": "Canada",
    "code": "CA"
  },
  {
    "id": 39,
    "flag": "/flag/cv.svg",
    "name": "Cape Verde",
    "code": "CV"
  },
  {
    "id": 40,
    "flag": "/flag/ky.svg",
    "name": "Cayman Islands",
    "code": "KY"
  },
  {
    "id": 41,
    "flag": "/flag/cf.svg",
    "name": "Central African Republic",
    "code": "CF"
  },
  {
    "id": 42,
    "flag": "/flag/td.svg",
    "name": "Chad",
    "code": "TD"
  },
  {
    "id": 43,
    "flag": "/flag/cl.svg",
    "name": "Chile",
    "code": "CL"
  },
  {
    "id": 44,
    "flag": "/flag/cn.svg",
    "name": "China",
    "code": "CN"
  },
  {
    "id": 45,
    "flag": "/flag/cx.svg",
    "name": "Christmas Island",
    "code": "CX"
  },
  {
    "id": 46,
    "flag": "/flag/cc.svg",
    "name": "Cocos (Keeling) Islands",
    "code": "CC"
  },
  {
    "id": 47,
    "flag": "/flag/co.svg",
    "name": "Colombia",
    "code": "CO"
  },
  {
    "id": 48,
    "flag": "/flag/km.svg",
    "name": "Comoros",
    "code": "KM"
  },
  {
    "id": 49,
    "flag": "/flag/cg.svg",
    "name": "Congo",
    "code": "CG"
  },
  {
    "id": 50,
    "flag": "/flag/cd.svg",
    "name": "Congo, The Democratic Republic of the",
    "code": "CD"
  },
  {
    "id": 51,
    "flag": "/flag/ck.svg",
    "name": "Cook Islands",
    "code": "CK"
  },
  {
    "id": 52,
    "flag": "/flag/cr.svg",
    "name": "Costa Rica",
    "code": "CR"
  },
  {
    "id": 53,
    "flag": "/flag/ci.svg",
    "name": "Cote D'Ivoire",
    "code": "CI"
  },
  {
    "id": 54,
    "flag": "/flag/hr.svg",
    "name": "Croatia",
    "code": "HR"
  },
  {
    "id": 55,
    "flag": "/flag/cu.svg",
    "name": "Cuba",
    "code": "CU"
  },
  {
    "id": 56,
    "flag": "/flag/cy.svg",
    "name": "Cyprus",
    "code": "CY"
  },
  {
    "id": 57,
    "flag": "/flag/cz.svg",
    "name": "Czech Republic",
    "code": "CZ"
  },
  {
    "id": 58,
    "flag": "/flag/dk.svg",
    "name": "Denmark",
    "code": "DK"
  },
  {
    "id": 59,
    "flag": "/flag/dj.svg",
    "name": "Djibouti",
    "code": "DJ"
  },
  {
    "id": 60,
    "flag": "/flag/dm.svg",
    "name": "Dominica",
    "code": "DM"
  },
  {
    "id": 61,
    "flag": "/flag/do.svg",
    "name": "Dominican Republic",
    "code": "DO"
  },
  {
    "id": 62,
    "flag": "/flag/ec.svg",
    "name": "Ecuador",
    "code": "EC"
  },
  {
    "id": 63,
    "flag": "/flag/eg.svg",
    "name": "Egypt",
    "code": "EG"
  },
  {
    "id": 64,
    "flag": "/flag/sv.svg",
    "name": "El Salvador",
    "code": "SV"
  },
  {
    "id": 65,
    "flag": "/flag/gq.svg",
    "name": "Equatorial Guinea",
    "code": "GQ"
  },
  {
    "id": 66,
    "flag": "/flag/er.svg",
    "name": "Eritrea",
    "code": "ER"
  },
  {
    "id": 67,
    "flag": "/flag/ee.svg",
    "name": "Estonia",
    "code": "EE"
  },
  {
    "id": 68,
    "flag": "/flag/et.svg",
    "name": "Ethiopia",
    "code": "ET"
  },
  {
    "id": 69,
    "flag": "/flag/fk.svg",
    "name": "Falkland Islands (Malvinas)",
    "code": "FK"
  },
  {
    "id": 70,
    "flag": "/flag/fo.svg",
    "name": "Faroe Islands",
    "code": "FO"
  },
  {
    "id": 71,
    "flag": "/flag/fj.svg",
    "name": "Fiji",
    "code": "FJ"
  },
  {
    "id": 72,
    "flag": "/flag/fi.svg",
    "name": "Finland",
    "code": "FI"
  },
  {
    "id": 73,
    "flag": "/flag/fr.svg",
    "name": "France",
    "code": "FR"
  },
  {
    "id": 74,
    "flag": "/flag/gf.svg",
    "name": "French Guiana",
    "code": "GF"
  },
  {
    "id": 75,
    "flag": "/flag/pf.svg",
    "name": "French Polynesia",
    "code": "PF"
  },
  {
    "id": 76,
    "flag": "/flag/tf.svg",
    "name": "French Southern Territories",
    "code": "TF"
  },
  {
    "id": 77,
    "flag": "/flag/ga.svg",
    "name": "Gabon",
    "code": "GA"
  },
  {
    "id": 78,
    "flag": "/flag/gm.svg",
    "name": "Gambia",
    "code": "GM"
  },
  {
    "id": 79,
    "flag": "/flag/ge.svg",
    "name": "Georgia",
    "code": "GE"
  },
  {
    "id": 80,
    "flag": "/flag/de.svg",
    "name": "Germany",
    "code": "DE"
  },
  {
    "id": 81,
    "flag": "/flag/gh.svg",
    "name": "Ghana",
    "code": "GH"
  },
  {
    "id": 82,
    "flag": "/flag/gi.svg",
    "name": "Gibraltar",
    "code": "GI"
  },
  {
    "id": 83,
    "flag": "/flag/gr.svg",
    "name": "Greece",
    "code": "GR"
  },
  {
    "id": 84,
    "flag": "/flag/gl.svg",
    "name": "Greenland",
    "code": "GL"
  },
  {
    "id": 85,
    "flag": "/flag/gd.svg",
    "name": "Grenada",
    "code": "GD"
  },
  {
    "id": 86,
    "flag": "/flag/gp.svg",
    "name": "Guadeloupe",
    "code": "GP"
  },
  {
    "id": 87,
    "flag": "/flag/gu.svg",
    "name": "Guam",
    "code": "GU"
  },
  {
    "id": 88,
    "flag": "/flag/gt.svg",
    "name": "Guatemala",
    "code": "GT"
  },
  {
    "id": 89,
    "flag": "/flag/gg.svg",
    "name": "Guernsey",
    "code": "GG"
  },
  {
    "id": 90,
    "flag": "/flag/gn.svg",
    "name": "Guinea",
    "code": "GN"
  },
  {
    "id": 91,
    "flag": "/flag/gw.svg",
    "name": "Guinea-Bissau",
    "code": "GW"
  },
  {
    "id": 92,
    "flag": "/flag/gy.svg",
    "name": "Guyana",
    "code": "GY"
  },
  {
    "id": 93,
    "flag": "/flag/ht.svg",
    "name": "Haiti",
    "code": "HT"
  },
  {
    "id": 94,
    "flag": "/flag/hm.svg",
    "name": "Heard Island and Mcdonald Islands",
    "code": "HM"
  },
  {
    "id": 95,
    "flag": "/flag/va.svg",
    "name": "Holy See (Vatican City State)",
    "code": "VA"
  },
  {
    "id": 96,
    "flag": "/flag/hn.svg",
    "name": "Honduras",
    "code": "HN"
  },
  {
    "id": 97,
    "flag": "/flag/hk.svg",
    "name": "Hong Kong",
    "code": "HK"
  },
  {
    "id": 98,
    "flag": "/flag/hu.svg",
    "name": "Hungary",
    "code": "HU"
  },
  {
    "id": 99,
    "flag": "/flag/is.svg",
    "name": "Iceland",
    "code": "IS"
  },
  {
    "id": 100,
    "flag": "/flag/in.svg",
    "name": "India",
    "code": "IN"
  },
  {
    "id": 101,
    "flag": "/flag/id.svg",
    "name": "Indonesia",
    "code": "ID"
  },
  {
    "id": 102,
    "flag": "/flag/ir.svg",
    "name": "Iran, Islamic Republic Of",
    "code": "IR"
  },
  {
    "id": 103,
    "flag": "/flag/iq.svg",
    "name": "Iraq",
    "code": "IQ"
  },
  {
    "id": 104,
    "flag": "/flag/ie.svg",
    "name": "Ireland",
    "code": "IE"
  },
  {
    "id": 105,
    "flag": "/flag/im.svg",
    "name": "Isle of Man",
    "code": "IM"
  },
  {
    "id": 106,
    "flag": "/flag/il.svg",
    "name": "Israel",
    "code": "IL"
  },
  {
    "id": 107,
    "flag": "/flag/it.svg",
    "name": "Italy",
    "code": "IT"
  },
  {
    "id": 108,
    "flag": "/flag/jm.svg",
    "name": "Jamaica",
    "code": "JM"
  },
  {
    "id": 109,
    "flag": "/flag/jp.svg",
    "name": "Japan",
    "code": "JP"
  },
  {
    "id": 110,
    "flag": "/flag/je.svg",
    "name": "Jersey",
    "code": "JE"
  },
  {
    "id": 111,
    "flag": "/flag/jo.svg",
    "name": "Jordan",
    "code": "JO"
  },
  {
    "id": 112,
    "flag": "/flag/kz.svg",
    "name": "Kazakhstan",
    "code": "KZ"
  },
  {
    "id": 113,
    "flag": "/flag/ke.svg",
    "name": "Kenya",
    "code": "KE"
  },
  {
    "id": 114,
    "flag": "/flag/ki.svg",
    "name": "Kiribati",
    "code": "KI"
  },
  {
    "id": 115,
    "flag": "/flag/kp.svg",
    "name": "Korea, Democratic People'S Republic of",
    "code": "KP"
  },
  {
    "id": 116,
    "flag": "/flag/kr.svg",
    "name": "Korea, Republic of",
    "code": "KR"
  },
  {
    "id": 117,
    "flag": "/flag/kw.svg",
    "name": "Kuwait",
    "code": "KW"
  },
  {
    "id": 118,
    "flag": "/flag/kg.svg",
    "name": "Kyrgyzstan",
    "code": "KG"
  },
  {
    "id": 119,
    "flag": "/flag/la.svg",
    "name": "Lao People'S Democratic Republic",
    "code": "LA"
  },
  {
    "id": 120,
    "flag": "/flag/lv.svg",
    "name": "Latvia",
    "code": "LV"
  },
  {
    "id": 121,
    "flag": "/flag/lb.svg",
    "name": "Lebanon",
    "code": "LB"
  },
  {
    "id": 122,
    "flag": "/flag/ls.svg",
    "name": "Lesotho",
    "code": "LS"
  },
  {
    "id": 123,
    "flag": "/flag/lr.svg",
    "name": "Liberia",
    "code": "LR"
  },
  {
    "id": 124,
    "flag": "/flag/ly.svg",
    "name": "Libyan Arab Jamahiriya",
    "code": "LY"
  },
  {
    "id": 125,
    "flag": "/flag/li.svg",
    "name": "Liechtenstein",
    "code": "LI"
  },
  {
    "id": 126,
    "flag": "/flag/lt.svg",
    "name": "Lithuania",
    "code": "LT"
  },
  {
    "id": 127,
    "flag": "/flag/lu.svg",
    "name": "Luxembourg",
    "code": "LU"
  },
  {
    "id": 128,
    "flag": "/flag/mo.svg",
    "name": "Macao",
    "code": "MO"
  },
  {
    "id": 129,
    "flag": "/flag/mk.svg",
    "name": "Macedonia, The Former Yugoslav Republic of",
    "code": "MK"
  },
  {
    "id": 130,
    "flag": "/flag/mg.svg",
    "name": "Madagascar",
    "code": "MG"
  },
  {
    "id": 131,
    "flag": "/flag/mw.svg",
    "name": "Malawi",
    "code": "MW"
  },
  {
    "id": 132,
    "flag": "/flag/my.svg",
    "name": "Malaysia",
    "code": "MY"
  },
  {
    "id": 133,
    "flag": "/flag/mv.svg",
    "name": "Maldives",
    "code": "MV"
  },
  {
    "id": 134,
    "flag": "/flag/ml.svg",
    "name": "Mali",
    "code": "ML"
  },
  {
    "id": 135,
    "flag": "/flag/mt.svg",
    "name": "Malta",
    "code": "MT"
  },
  {
    "id": 136,
    "flag": "/flag/mh.svg",
    "name": "Marshall Islands",
    "code": "MH"
  },
  {
    "id": 137,
    "flag": "/flag/mq.svg",
    "name": "Martinique",
    "code": "MQ"
  },
  {
    "id": 138,
    "flag": "/flag/mr.svg",
    "name": "Mauritania",
    "code": "MR"
  },
  {
    "id": 139,
    "flag": "/flag/mu.svg",
    "name": "Mauritius",
    "code": "MU"
  },
  {
    "id": 140,
    "flag": "/flag/yt.svg",
    "name": "Mayotte",
    "code": "YT"
  },
  {
    "id": 141,
    "flag": "/flag/mx.svg",
    "name": "Mexico",
    "code": "MX"
  },
  {
    "id": 142,
    "flag": "/flag/fm.svg",
    "name": "Micronesia, Federated States of",
    "code": "FM"
  },
  {
    "id": 143,
    "flag": "/flag/md.svg",
    "name": "Moldova, Republic of",
    "code": "MD"
  },
  {
    "id": 144,
    "flag": "/flag/mc.svg",
    "name": "Monaco",
    "code": "MC"
  },
  {
    "id": 145,
    "flag": "/flag/mn.svg",
    "name": "Mongolia",
    "code": "MN"
  },
  {
    "id": 146,
    "flag": "/flag/ms.svg",
    "name": "Montserrat",
    "code": "MS"
  },
  {
    "id": 147,
    "flag": "/flag/ma.svg",
    "name": "Morocco",
    "code": "MA"
  },
  {
    "id": 148,
    "flag": "/flag/mz.svg",
    "name": "Mozambique",
    "code": "MZ"
  },
  {
    "id": 149,
    "flag": "/flag/mm.svg",
    "name": "Myanmar",
    "code": "MM"
  },
  {
    "id": 150,
    "flag": "/flag/na.svg",
    "name": "Namibia",
    "code": "NA"
  },
  {
    "id": 151,
    "flag": "/flag/nr.svg",
    "name": "Nauru",
    "code": "NR"
  },
  {
    "id": 152,
    "flag": "/flag/np.svg",
    "name": "Nepal",
    "code": "NP"
  },
  {
    "id": 153,
    "flag": "/flag/nl.svg",
    "name": "Netherlands",
    "code": "NL"
  },
  {
    "id": 154,
    "flag": "/flag/nl.svg",
    "name": "Netherlands Antilles",
    "code": "AN"
  },
  {
    "id": 155,
    "flag": "/flag/nc.svg",
    "name": "New Caledonia",
    "code": "NC"
  },
  {
    "id": 156,
    "flag": "/flag/nz.svg",
    "name": "New Zealand",
    "code": "NZ"
  },
  {
    "id": 157,
    "flag": "/flag/ni.svg",
    "name": "Nicaragua",
    "code": "NI"
  },
  {
    "id": 158,
    "flag": "/flag/ne.svg",
    "name": "Niger",
    "code": "NE"
  },
  {
    "id": 159,
    "flag": "/flag/ng.svg",
    "name": "Nigeria",
    "code": "NG"
  },
  {
    "id": 160,
    "flag": "/flag/nu.svg",
    "name": "Niue",
    "code": "NU"
  },
  {
    "id": 161,
    "flag": "/flag/nf.svg",
    "name": "Norfolk Island",
    "code": "NF"
  },
  {
    "id": 162,
    "flag": "/flag/mp.svg",
    "name": "Northern Mariana Islands",
    "code": "MP"
  },
  {
    "id": 163,
    "flag": "/flag/no.svg",
    "name": "Norway",
    "code": "NO"
  },
  {
    "id": 164,
    "flag": "/flag/om.svg",
    "name": "Oman",
    "code": "OM"
  },
  {
    "id": 165,
    "flag": "/flag/pk.svg",
    "name": "Pakistan",
    "code": "PK"
  },
  {
    "id": 166,
    "flag": "/flag/pw.svg",
    "name": "Palau",
    "code": "PW"
  },
  {
    "id": 167,
    "flag": "/flag/ps.svg",
    "name": "Palestinian Territory, Occupied",
    "code": "PS"
  },
  {
    "id": 168,
    "flag": "/flag/pa.svg",
    "name": "Panama",
    "code": "PA"
  },
  {
    "id": 169,
    "flag": "/flag/pg.svg",
    "name": "Papua New Guinea",
    "code": "PG"
  },
  {
    "id": 170,
    "flag": "/flag/py.svg",
    "name": "Paraguay",
    "code": "PY"
  },
  {
    "id": 171,
    "flag": "/flag/pe.svg",
    "name": "Peru",
    "code": "PE"
  },
  {
    "id": 172,
    "flag": "/flag/ph.svg",
    "name": "Philippines",
    "code": "PH"
  },
  {
    "id": 173,
    "flag": "/flag/pn.svg",
    "name": "Pitcairn",
    "code": "PN"
  },
  {
    "id": 174,
    "flag": "/flag/pl.svg",
    "name": "Poland",
    "code": "PL"
  },
  {
    "id": 175,
    "flag": "/flag/pt.svg",
    "name": "Portugal",
    "code": "PT"
  },
  {
    "id": 176,
    "flag": "/flag/pr.svg",
    "name": "Puerto Rico",
    "code": "PR"
  },
  {
    "id": 177,
    "flag": "/flag/qa.svg",
    "name": "Qatar",
    "code": "QA"
  },
  {
    "id": 178,
    "flag": "/flag/re.svg",
    "name": "Reunion",
    "code": "RE"
  },
  {
    "id": 179,
    "flag": "/flag/ro.svg",
    "name": "Romania",
    "code": "RO"
  },
  {
    "id": 180,
    "flag": "/flag/ru.svg",
    "name": "Russian Federation",
    "code": "RU"
  },
  {
    "id": 181,
    "flag": "/flag/rw.svg",
    "name": "RWANDA",
    "code": "RW"
  },
  {
    "id": 182,
    "flag": "/flag/sh.svg",
    "name": "Saint Helena",
    "code": "SH"
  },
  {
    "id": 183,
    "flag": "/flag/kn.svg",
    "name": "Saint Kitts and Nevis",
    "code": "KN"
  },
  {
    "id": 184,
    "flag": "/flag/lc.svg",
    "name": "Saint Lucia",
    "code": "LC"
  },
  {
    "id": 185,
    "flag": "/flag/pm.svg",
    "name": "Saint Pierre and Miquelon",
    "code": "PM"
  },
  {
    "id": 186,
    "flag": "/flag/vc.svg",
    "name": "Saint Vincent and the Grenadines",
    "code": "VC"
  },
  {
    "id": 187,
    "flag": "/flag/ws.svg",
    "name": "Samoa",
    "code": "WS"
  },
  {
    "id": 188,
    "flag": "/flag/sm.svg",
    "name": "San Marino",
    "code": "SM"
  },
  {
    "id": 189,
    "flag": "/flag/st.svg",
    "name": "Sao Tome and Principe",
    "code": "ST"
  },
  {
    "id": 190,
    "flag": "/flag/sa.svg",
    "name": "Saudi Arabia",
    "code": "SA"
  },
  {
    "id": 191,
    "flag": "/flag/sn.svg",
    "name": "Senegal",
    "code": "SN"
  },
  {
    "id": 192,
    "flag": "/flag/cn.svg",
    "name": "Serbia and Montenegro",
    "code": "CS"
  },
  {
    "id": 193,
    "flag": "/flag/sc.svg",
    "name": "Seychelles",
    "code": "SC"
  },
  {
    "id": 194,
    "flag": "/flag/sl.svg",
    "name": "Sierra Leone",
    "code": "SL"
  },
  {
    "id": 195,
    "flag": "/flag/sg.svg",
    "name": "Singapore",
    "code": "SG"
  },
  {
    "id": 196,
    "flag": "/flag/sk.svg",
    "name": "Slovakia",
    "code": "SK"
  },
  {
    "id": 197,
    "flag": "/flag/si.svg",
    "name": "Slovenia",
    "code": "SI"
  },
  {
    "id": 198,
    "flag": "/flag/sb.svg",
    "name": "Solomon Islands",
    "code": "SB"
  },
  {
    "id": 199,
    "flag": "/flag/so.svg",
    "name": "Somalia",
    "code": "SO"
  },
  {
    "id": 200,
    "flag": "/flag/za.svg",
    "name": "South Africa",
    "code": "ZA"
  },
  {
    "id": 201,
    "flag": "/flag/gs.svg",
    "name": "South Georgia and the South Sandwich Islands",
    "code": "GS"
  },
  {
    "id": 202,
    "flag": "/flag/es.svg",
    "name": "Spain",
    "code": "ES"
  },
  {
    "id": 203,
    "flag": "/flag/lk.svg",
    "name": "Sri Lanka",
    "code": "LK"
  },
  {
    "id": 204,
    "flag": "/flag/sd.svg",
    "name": "Sudan",
    "code": "SD"
  },
  {
    "id": 205,
    "flag": "/flag/sr.svg",
    "name": "Suriname",
    "code": "SR"
  },
  {
    "id": 206,
    "flag": "/flag/sj.svg",
    "name": "Svalbard and Jan Mayen",
    "code": "SJ"
  },
  {
    "id": 207,
    "flag": "/flag/sz.svg",
    "name": "Swaziland",
    "code": "SZ"
  },
  {
    "id": 208,
    "flag": "/flag/se.svg",
    "name": "Sweden",
    "code": "SE"
  },
  {
    "id": 209,
    "flag": "/flag/ch.svg",
    "name": "Switzerland",
    "code": "CH"
  },
  {
    "id": 210,
    "flag": "/flag/sy.svg",
    "name": "Syrian Arab Republic",
    "code": "SY"
  },
  {
    "id": 211,
    "flag": "/flag/tw.svg",
    "name": "Taiwan, Province of China",
    "code": "TW"
  },
  {
    "id": 212,
    "flag": "/flag/tj.svg",
    "name": "Tajikistan",
    "code": "TJ"
  },
  {
    "id": 213,
    "flag": "/flag/tz.svg",
    "name": "Tanzania, United Republic of",
    "code": "TZ"
  },
  {
    "id": 214,
    "flag": "/flag/th.svg",
    "name": "Thailand",
    "code": "TH"
  },
  {
    "id": 215,
    "flag": "/flag/tl.svg",
    "name": "Timor-Leste",
    "code": "TL"
  },
  {
    "id": 216,
    "flag": "/flag/tg.svg",
    "name": "Togo",
    "code": "TG"
  },
  {
    "id": 217,
    "flag": "/flag/tk.svg",
    "name": "Tokelau",
    "code": "TK"
  },
  {
    "id": 218,
    "flag": "/flag/to.svg",
    "name": "Tonga",
    "code": "TO"
  },
  {
    "id": 219,
    "flag": "/flag/tt.svg",
    "name": "Trinidad and Tobago",
    "code": "TT"
  },
  {
    "id": 220,
    "flag": "/flag/tn.svg",
    "name": "Tunisia",
    "code": "TN"
  },
  {
    "id": 221,
    "flag": "/flag/tr.svg",
    "name": "Turkey",
    "code": "TR"
  },
  {
    "id": 222,
    "flag": "/flag/tm.svg",
    "name": "Turkmenistan",
    "code": "TM"
  },
  {
    "id": 223,
    "flag": "/flag/tc.svg",
    "name": "Turks and Caicos Islands",
    "code": "TC"
  },
  {
    "id": 224,
    "flag": "/flag/tv.svg",
    "name": "Tuvalu",
    "code": "TV"
  },
  {
    "id": 225,
    "flag": "/flag/ug.svg",
    "name": "Uganda",
    "code": "UG"
  },
  {
    "id": 226,
    "flag": "/flag/ua.svg",
    "name": "Ukraine",
    "code": "UA"
  },
  {
    "id": 227,
    "flag": "/flag/ae.svg",
    "name": "United Arab Emirates",
    "code": "AE"
  },
  {
    "id": 228,
    "flag": "/flag/gb.svg",
    "name": "United Kingdom",
    "code": "GB"
  },
  {
    "id": 229,
    "flag": "/flag/us.svg",
    "name": "United States",
    "code": "US"
  },
  {
    "id": 230,
    "flag": "/flag/um.svg",
    "name": "United States Minor Outlying Islands",
    "code": "UM"
  },
  {
    "id": 231,
    "flag": "/flag/uy.svg",
    "name": "Uruguay",
    "code": "UY"
  },
  {
    "id": 232,
    "flag": "/flag/uz.svg",
    "name": "Uzbekistan",
    "code": "UZ"
  },
  {
    "id": 233,
    "flag": "/flag/vu.svg",
    "name": "Vanuatu",
    "code": "VU"
  },
  {
    "id": 234,
    "flag": "/flag/ve.svg",
    "name": "Venezuela",
    "code": "VE"
  },
  {
    "id": 235,
    "flag": "/flag/vn.svg",
    "name": "Viet Nam",
    "code": "VN"
  },
  {
    "id": 236,
    "flag": "/flag/vg.svg",
    "name": "Virgin Islands, British",
    "code": "VG"
  },
  {
    "id": 237,
    "flag": "/flag/vi.svg",
    "name": "Virgin Islands, U.S.",
    "code": "VI"
  },
  {
    "id": 238,
    "flag": "/flag/wf.svg",
    "name": "Wallis and Futuna",
    "code": "WF"
  },
  {
    "id": 239,
    "flag": "/flag/eh.svg",
    "name": "Western Sahara",
    "code": "EH"
  },
  {
    "id": 240,
    "flag": "/flag/ye.svg",
    "name": "Yemen",
    "code": "YE"
  },
  {
    "id": 241,
    "flag": "/flag/zm.svg",
    "name": "Zambia",
    "code": "ZM"
  },
  {
    "id": 242,
    "flag": "/flag/zw.svg",
    "name": "Zimbabwe",
    "code": "ZW"
  }
];

export { conditions as a, admin_links as b, countries as c, faqs as f, index_card_items as i, languages as l, navigation_links as n, social_links as s };
