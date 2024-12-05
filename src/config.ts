import type { InfoConf } from './configs/info'
import type { DefaultConf } from './configs/default'
import { type NavbarConf, NavLink } from './configs/navbar'
import type { ProfileConf } from './configs/profile'
import type { CommentConf } from './configs/comment'
import type { FooterConf } from './configs/footer'
import type { PluginConf } from './configs/plugin'


export interface ThemeConfig {
    lang: string,
    info: InfoConf,
    default: DefaultConf,
    navbar: NavbarConf,
    profile: ProfileConf,
    comment: CommentConf,
    footer: FooterConf,
    plugin: PluginConf
}


export const themeConfig: ThemeConfig = {
    // Language Configuration
    // Not support Docs
    lang: 'en',
    // Info Configuration
    // Docs: 
    info: {
        // Site title
        title: 'Mitia',
        // Site subTitle
        subTitle: 'Astro Blog',
        // Site url
        url: undefined,
    },
    // Default Configuration
    // Docs: 
    default: {
        favicon: undefined,
        banner: '',
        color: {
            primary: "#112233",
            secondary: undefined,
        },
        mode: 'light',
        maxWidth: 1200,
    },
    // Navbar Configuration
    // Docs: 
    navbar: {
        logo: undefined,
        title: "Develop Blog",
        links: [
            NavLink.Home,
            NavLink.Archive,
            {
                type: 'icon',
                name: undefined,
                icon: undefined,
                url: 'https://mythologyteams.com'
            }
        ],
        search: false,
    },
    // Profile Configuration
    // Docs: 
    profile: {
        avatar: '',
        name: 'Dev Jihun',
        bio: 'Leader Developer in MythologyTeams',
        links: [
            {
                name: 'Email',
                icon: '',
                url: '',
            },
            {
                name: 'Github',
                icon: '',
                url: 'https://github.com/MythologyDevJihun',
            },
            {
                name: 'Team Github',
                icon: '',
                url: 'https://github.com/Team-Mythology',
            },
        ]
    },
    // Comment Configuration
    // Docs: 
    comment: {
        type: undefined,
        giscus: {
            repo: '',
            repoId: '',
            category: '',
            categoryId: '',
            mapping: '',
            strict: '',
            reactionsEnabled: '',
            emitMetaData: '',
            inputPosition: '',
            theme: '',
            lang: '',
            crossorigin: "anonymous"
        }
    },
    // Footer Configuration
    // Docs: 
    footer: {
        showTotalPostCount: true,
    },
    // Plugin Configuration
    // Docs:
    plugin: {},
}