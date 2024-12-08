export type NavbarConf = {
    logo?: string;
    title: string;
    links: (NavLink | NavLinkPreset)[],
    search: boolean
}


export type NavLinkPreset = {
    type: string;
    name?: string;
    icon?: string;
    url: string;
}


export enum NavLink {
    Home = 0,
    Archive = 1,
    Category = 2,
    About = 3
}
