/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getList = /* GraphQL */ `
  query GetList($id: ID!) {
    getList(id: $id) {
      id
      title
      description
      imageKey
      slug
      listItems {
        items {
          id
          title
          quantity
          done
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLists = /* GraphQL */ `
  query ListLists(
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        imageKey
        slug
        listItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getListItem = /* GraphQL */ `
  query GetListItem($id: ID!) {
    getListItem(id: $id) {
      id
      title
      quantity
      done
      list {
        id
        title
        description
        imageKey
        slug
        listItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      actions {
        items {
          id
          action
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listListItems = /* GraphQL */ `
  query ListListItems(
    $filter: ModelListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        quantity
        done
        list {
          id
          title
          description
          imageKey
          slug
          createdAt
          updatedAt
        }
        actions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAction = /* GraphQL */ `
  query GetAction($id: ID!) {
    getAction(id: $id) {
      id
      action
      listItem {
        id
        title
        quantity
        done
        list {
          id
          title
          description
          imageKey
          slug
          createdAt
          updatedAt
        }
        actions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listActions = /* GraphQL */ `
  query ListActions(
    $filter: ModelActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        action
        listItem {
          id
          title
          quantity
          done
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchLists = /* GraphQL */ `
  query SearchLists(
    $filter: SearchableListFilterInput
    $sort: SearchableListSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchLists(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        title
        description
        imageKey
        slug
        listItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
