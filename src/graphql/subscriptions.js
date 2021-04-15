/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateList = /* GraphQL */ `
  subscription OnCreateList {
    onCreateList {
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList {
    onUpdateList {
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList {
    onDeleteList {
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateListItem = /* GraphQL */ `
  subscription OnCreateListItem($owner: String!) {
    onCreateListItem(owner: $owner) {
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
        owner
      }
      actions {
        items {
          id
          action
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateListItem = /* GraphQL */ `
  subscription OnUpdateListItem($owner: String!) {
    onUpdateListItem(owner: $owner) {
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
        owner
      }
      actions {
        items {
          id
          action
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteListItem = /* GraphQL */ `
  subscription OnDeleteListItem($owner: String!) {
    onDeleteListItem(owner: $owner) {
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
        owner
      }
      actions {
        items {
          id
          action
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAction = /* GraphQL */ `
  subscription OnCreateAction($owner: String!) {
    onCreateAction(owner: $owner) {
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
          owner
        }
        actions {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAction = /* GraphQL */ `
  subscription OnUpdateAction($owner: String!) {
    onUpdateAction(owner: $owner) {
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
          owner
        }
        actions {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAction = /* GraphQL */ `
  subscription OnDeleteAction($owner: String!) {
    onDeleteAction(owner: $owner) {
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
          owner
        }
        actions {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
