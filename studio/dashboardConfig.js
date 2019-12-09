export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dee816df80a0850ea13d0c1',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-vt8g2yzp',
                  apiId: 'beade245-5fab-4a66-a7cd-64af8a7955f2'
                },
                {
                  buildHookId: '5dee816ee6dcba445c47bee5',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-xuz29x78',
                  apiId: 'e9ba091d-eb68-4a58-991b-f67c18fdf2d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/reyrahn/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-xuz29x78.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
