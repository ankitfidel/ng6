import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
              //  translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            // {
            //     id       : 'crudapp',
            //     title    : 'details',
            //     translate: 'NAV.SAMPLE.TITLE',
            //     type     : 'item',
            //     icon     : 'email',
            //     url      : '/details/:id',
            //     badge    : {
            //         title    : '25',
            //         translate: 'NAV.SAMPLE.BADGE',
            //         bg       : '#F44336',
            //         fg       : '#FFFFFF'
            //     }
            // },
            {
                id       : 'crudapp',
                title    : 'Crudapp',
              //  translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/crudapp',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }


        ]
    }
];
