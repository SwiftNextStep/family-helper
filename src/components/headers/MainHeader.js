import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

function MainHeader() {
  return (
    <div>
      <Header as='h1' textAlign='center' icon className='mt-1 mb-3'>
        <Icon name='users' />
        <Header.Content>Family Helper</Header.Content>
      </Header>
    </div>
  );
}

export default MainHeader;
