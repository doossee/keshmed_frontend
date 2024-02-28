import * as links from '@/lang/links'
import * as condition from '@/lang/conditions'
import * as footer from '@/lang/footer'
import * as products from '@/lang/products'
import * as home from '@/lang/home'
import * as admin from '@/lang/admin'

export default defineI18nConfig(() => ({
    locale: 'ru',
    legacy: false,
    globalInjection: true,
    messages: {
        en: {
            links: links.en,
            footer: footer.en,
            admin: admin.en,
            products: products.en,
            condition: condition.en,
            home: home.en,
            price: "Price",
            sum: "sum",
            worktime: "Working Time",
            delivery: "Delivery service",
            total_sum: "Total price",
            no_data: "Empty",
            loading: "Loading",
            saved_products: "Saved Products",
            sitemap: "Site Map",
            geolocation: "Geolocation",
            social_links: "Social Links",
            contacts: "Contacts",
        },
        ru: {
            links: links.ru,
            footer: footer.ru,
            admin: admin.ru,
            products: products.ru,
            condition: condition.ru,
            home: home.ru,
            price: "Цена",
            sum: "сум",
            worktime: "Рабочее время",
            delivery: "Служба доставки",
            total_sum: "Обшая сумма",
            no_data: "Пусто",
            loading: "Загрузка",
            saved_products: "Избранные Продукты",
            sitemap: "Карта сайта",
            geolocation: "Геолокация",
            social_links: "В социальных сетях",
            contacts: "Контакты",
        },
        uz: {
            links: links.uz,
            footer: footer.uz,
            admin: admin.uz,
            products: products.uz,
            condition: condition.uz,
            home: home.uz,
            price: "Narxi",
            sum: "so'm",
            worktime: "Ish vaqti",
            delivery: "Yetkazib berish xizmati",
            total_sum: "Jami summa",
            no_data: "Ma'lumotlar topilmadi",
            loading: "Yuklanyapti",
            saved_products: "Saqlangan Uskunalar",
            sitemap: "Sayt xaritasi",
            geolocation: "Joylashuv",
            social_links: "Ijtimoiy tarmoqlar",
            contacts: "Aloqa",
        }
    },
}))