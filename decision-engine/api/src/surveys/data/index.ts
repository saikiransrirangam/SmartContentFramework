interface Survey {
  _id?: string;
  title: string;
  description: string;
  questions: number[];
  isActive: boolean;
}
export const surveys: Survey[] = [
  {
    _id: '64871ce1e9cc0d8d9f39c728',
    title: 'Democrat or Republican',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris eget massa condimentum ullamcorper. Fusce venenatis iaculis metus id aliquet. Etiam tincidunt orci eu rutrum ultrices. Phasellus sed iaculis quam, a dignissim diam. Phasellus quis hendrerit purus. Ut convallis eleifend ex a dignissim. Ut sapien urna, sagittis in dictum at, pretium eu sapien. Ut feugiat pharetra diam, ac volutpat tortor mattis vestibulum. Quisque varius tellus massa, molestie feugiat est lacinia quis. Quisque quis vestibulum erat.',
    questions: [1, 2, 4],
    isActive: true,
  },

  {
    _id: '64871dd72e817c1682223e26',
    title: 'Thoughts on Trump? Thoughts on Biden?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris eget massa condimentum ullamcorper. Fusce venenatis iaculis metus id aliquet. Etiam tincidunt orci eu rutrum ultrices. Phasellus sed iaculis quam, a dignissim diam. Phasellus quis hendrerit purus. Ut convallis eleifend ex a dignissim. Ut sapien urna, sagittis in dictum at, pretium eu sapien. Ut feugiat pharetra diam, ac volutpat tortor mattis vestibulum. Quisque varius tellus massa, molestie feugiat est lacinia quis. Quisque quis vestibulum erat.',
    questions: [1, 8, 9, 5],
    isActive: true,
  },
  {
    _id: '64871dd72e817c1682223e25',
    title: 'Are you voting?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris eget massa condimentum ullamcorper. Fusce venenatis iaculis metus id aliquet. Etiam tincidunt orci eu rutrum ultrices. Phasellus sed iaculis quam, a dignissim diam. Phasellus quis hendrerit purus. Ut convallis eleifend ex a dignissim. Ut sapien urna, sagittis in dictum at, pretium eu sapien. Ut feugiat pharetra diam, ac volutpat tortor mattis vestibulum. Quisque varius tellus massa, molestie feugiat est lacinia quis. Quisque quis vestibulum erat.',
    questions: [4, 5, 7, 3],
    isActive: true,
  },
];
