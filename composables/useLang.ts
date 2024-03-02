export const useLang = () => {
    const lang = useState<"ru"|"uz"|"en">('lang', () => 'ru')

    return {
        lang
    }
}