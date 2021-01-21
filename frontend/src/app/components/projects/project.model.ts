export interface Project {
    id?: number // ? question mark = opcional
    name: string
    launched_year?: number
    project_icon?: string
    platform?: string // mobile |  web    |  multiplataform
    platform_icon?: string // mobile |  web    |  multiplataform
    category: string // ⭐️ basic app    |  ⭐️⭐️ modest / intermediate app   |    ⭐️⭐️⭐️ advanced app
    website?: string // SEM HTTPS
    website_text?: string // html a text element
    portfolio_link?: string // caminho para abrir no proprio site de portfolio
    github_link?: string // SEM HTTPS
    total_apis?: number
    total_apis_owned?: number

    // TECH TOOLS 
    // A tech stack is defined as the set of technologies an organization uses to build a web or mobile application. 
    // It is a combination of programming languages, frameworks, libraries, patterns, servers, UI/UX solutions, 
    // software, and tools used by its developers.
    techs?: string  // #RN =  react native, #API http apis, #TG telegram bots
    angular?: string
    reactNative?: string
    telegramBot_api?: string
    googleSheet?: string
    googleAppsScript?: string
    digitalOcean?: string
    twitter_api?: string
}