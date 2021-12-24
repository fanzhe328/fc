export declare const BUILD_HELP_INFO: ({
    header: string;
    content: string;
    optionList?: undefined;
} | {
    header: string;
    content: {
        example: string;
    }[];
    optionList?: undefined;
} | {
    header: string;
    optionList: ({
        name: string;
        description: string;
        alias: string;
        defaultOption: boolean;
        type: StringConstructor;
    } | {
        name: string;
        description: string;
        alias: string;
        defaultOption: boolean;
        type: BooleanConstructor;
    } | {
        name: string;
        description: string;
        defaultOption: boolean;
        type: BooleanConstructor;
        alias?: undefined;
    })[];
    content?: undefined;
} | {
    header: string;
    optionList: ({
        name: string;
        description: string;
        type: StringConstructor;
        alias?: undefined;
    } | {
        name: string;
        description: string;
        alias: string;
        type: BooleanConstructor;
    } | {
        name: string;
        description: string;
        alias: string;
        type: StringConstructor;
    })[];
    content?: undefined;
} | {
    header: string;
    content: {
        desc: string;
    }[];
    optionList?: undefined;
} | {
    header: string;
    content: string[];
    optionList?: undefined;
})[];
