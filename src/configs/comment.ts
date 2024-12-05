export type CommentConf = {
    type?: 'giscus',
    giscus: {
        repo: string;
        repoId: string;
        category: string;
        categoryId: string;
        mapping: string;
        strict: string;
        reactionsEnabled: string;
        emitMetaData: string;
        inputPosition: string;
        theme: string;
        lang: string;
        crossorigin: string;
    }
}