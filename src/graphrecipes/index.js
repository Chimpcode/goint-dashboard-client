export default {
  queries: {
    fetchAllUsers: `
    {
      users {
        age
      }
    }`,
    fetchAllPosts: `
    {
      allPosts {
        id
        address
        title
        description
        stock
        createdAt
        location {
          id
        }
        image
        type
        updatedAt
      }
    }`,
    fetchAllLocations: `
    {
      allLocations {
        latitude
        longitude
        address
        id
        createdAt
      }
    }`,
    fetchAllStores: `
    {
      allStores{
        locations{
          id
          address
        }
        id
        name
        description
      }
    }`,
    fetchAllSectors: `
    {
      allSectors{
        stores{
          id
          name
        }
        id
        name
      }
    }`
  },
  mutations: {
    createPost: `
    {
      createPost(
        [request]
      ) {
        id
        address
        description
        stock
        title
        image
      }
    }
    `,
    createLocation: `
    {
      createLocation(
        [request]
      ) {
        id
      }
    }
    `,
    createStore: `
    {
      createStore(
        [request]
      ) {
        id
      }
    }
    `,
    createSector: `
    {
      createSector(
        [request]
      ) {
        id
      }
    }
    `,
    updatePost: `
    {
      updatePost(
        [request]
      ) {
        id
        description
        stock
        title
        createdAt
      }
    }
    `,
    deletePost: `
    {
      deletePost(
        [request]
      ) {
        id
      }
    }
    `,
    deleteStore: `
    {
      deleteStore(
        [request]
      ) {
        id
      }
    }
    `,
    deleteSector: `
    {
      deleteSector(
        [request]
      ) {
        id
      }
    }
    `,
    deleteLocation: `
    {
      deleteLocation(
        [request]
      ) {
        id
      }
    }
    `,
    updateSector: `
    {
      updateSector(
        [request]
      ) {
        id
        name
        stores { id, name }
      }
    }
    `
  }
}
