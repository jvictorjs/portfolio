export interface Project {
    id?: number // ? question mark = opcional
    name: string
    launched_year?: number
    platform?: string // mobile |  web    |  multiplataform
    platform_icon?: string // mobile |  web    |  multiplataform
    category: string // ⭐️ basic app    |  ⭐️⭐️ modest / intermediate app   |    ⭐️⭐️⭐️ advanced app
    website?: string
    portfolio_link?: string // caminho para abrir no proprio site de portfolio
    techs?: string  // #RN =  react native, #API http apis, #TG telegram bots
    angular_present?: string
    reactNative_present?: string
    telegramBot_present?: string
    googleSheet_present?: string
    googleAppsScript_present?: string
    digitalOcean_present?: string
}