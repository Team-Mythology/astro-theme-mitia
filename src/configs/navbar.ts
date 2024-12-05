export type NavbarConf = {
    logo?: string;
    title: string;
    links: ({
        type: string,
        name?: string,
        icon?: string,
        url: string,
    } | NavLink)[],
    search: boolean
}


export enum NavLink {
    Home = 0,
    Archive = 1,
    Category = 2,
    About = 3
}
