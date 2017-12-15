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
        by
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
        by
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
        by
      }
    }
    `
  }
}
