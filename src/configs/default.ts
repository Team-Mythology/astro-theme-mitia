export type DefaultConf = {
    favicon?: string;
    banner: string;
    color: {
        primary: string; 
        secondary?: string;
    },
    mode: 'light' | 'dark',
    maxWidth: number,
}