import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import DefaultView from './src/components/default-view/DefaultView';
import Routes from './src/routes/Routes';

export default function App() {
  return (
    <DefaultView>
      <Routes />
    </DefaultView>
  );
}
