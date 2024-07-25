import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const components = {
  // Aquí puedes definir tus componentes personalizados
};

const MDXWrapper = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDXWrapper;
