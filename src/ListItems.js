import API, { graphqlOperation } from '@aws-amplify/api';
import React, { useEffect, useState } from 'react';
import { Header, Segment, List } from 'semantic-ui-react';
import { searchListItems } from './graphql/customQueries';

function ListItems({ title, slug }) {
  const [items, setItems] = useState([]);
  async function fetchItems() {
    const { data } = await API.graphql(
      graphqlOperation(searchListItems, {
        filter: {
          slug: {
            eq: slug,
          },
        },
      })
    );
    if (data !== null) {
      console.log(data.searchLists.items[0].listItems.items);
      setItems(data.searchLists.items[0].listItems.items);
    }
  }
  useEffect(() => {
    fetchItems();
  }, [slug]);

  return (
    <>
      <Header as='h2' attached='top'>
        {title}
      </Header>
      <Segment attached>
        <List>
          {items.map((item) => {
            return (
              <List.Item>
                <List.Header>{item.title}</List.Header>
              </List.Item>
            );
          })}
        </List>
      </Segment>
    </>
  );
}

export default ListItems;
