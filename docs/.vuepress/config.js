module.exports = {
    base: '/',
    title: 'Musora UI',
    description: 'Documentation on Musora\'s Components, Patterns, and Templates for creating awesome web experiences.',
    evergreen: true,
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.config.js"), 
            require('autoprefixer')
        ],
    },
    head: [
        ['script', { src: 'https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js', defer: true }]
    ],
    themeConfig: {
        logo: '/img/logo-color.svg',
        displayAllHeaders: true,
        nav: [
            {
                text: 'Stylesora',
                link: '/stylesora/'
            },
            {
                text: 'Vuesora',
                link: '/vuesora/'
                // link: 'https://railroadmedia.github.io/vuesora/'
            },
            {
                text: 'Bladesora',
                link: '/bladesora/'
                // link: 'https://github.com/railroadmedia/bladesora'
            },
        ],
        sidebar: {
            '/stylesora/': [
                '',
                {
                    title: 'Getting Started',
                    path: '/stylesora/usage/',
                    collapsable: false,
                    sidebarDepth: -1,
                },
                {
                    title: 'Themes',
                    path: '/stylesora/themes/',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        '/stylesora/themes/logos',
                        '/stylesora/themes/colors',
                    ]
                },
                {
                    title: 'Base',
                    path: '/stylesora/base/',
                    collapsable: false,
                    sidebarDepth: 0,
                },
                {
                    title: 'Content',
                    path: '/stylesora/content/',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        '/stylesora/content/typography',
                        '/stylesora/content/site'
                    ]
                },
                {
                    title: 'Utilities',
                    path: '/stylesora/utilities/',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        '/stylesora/utilities/extensions',
                    ]
                },
                {
                    title: 'Layout',
                    path: '/stylesora/layout/',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        '/stylesora/layout/containers',
                        '/stylesora/layout/grid',
                        '/stylesora/layout/navigation'
                    ]
                },
                {
                    title: 'Components',
                    path: '/stylesora/components/',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        '/stylesora/components/buttons',
                        '/stylesora/components/tooltips',
                        ['/stylesora/components/icons', 'Icons'],
                        '/stylesora/components/forms',
                        '/stylesora/components/modals',
                        '/stylesora/components/breadcrumbs',
                        '/stylesora/components/cards',
                        '/stylesora/components/search',
                        '/stylesora/components/tags',
                        '/stylesora/components/lists',
                    ]
                },
                {
                    title: 'Modules',
                    path: '/stylesora/modules/',
                    collapsable: false,
                    sidebarDepth: 0,
                },
                {
                    title: 'Templates',
                    path: '/stylesora/templates/',
                    collapsable: false,
                    sidebarDepth: 0,
                }
            ],
            '/vuesora/': [
                '',
                {
                    title: 'Getting Started',
                    path: '/vuesora/usage/',
                    collapsable: false,
                    sidebarDepth: -1,
                },
            ],
            '/bladesora/': [
                '',
                {
                    title: 'Getting Started',
                    path: '/bladesora/usage/',
                    collapsable: false,
                    sidebarDepth: -1,
                },
            ],
            //fallback
            '/': [
                ''
            ]
        },
        lastUpdated: 'Last Updated',
    },
};