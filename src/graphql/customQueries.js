export const searchListItems = /* GraphQL */ `
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
        listItems {
          items {
            id
            title
            quantity
            done
            createdAt
            updatedAt
          }
        }
      }
      nextToken
      total
    }
  }
`;
