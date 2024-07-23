import type { CollectionAfterReadHook } from 'payload'

// The `user` collection has access control locked so that users are not
// publicly accessible
// This means that we need to populate the authors manually here to protect user privacy
// GraphQL will not return mutated user data that differs from the underlying schema
// So we use an alternative `populatedAuthors` field to populate the user data, hidden from the admin UI
export const populateAuthors: CollectionAfterReadHook = async ({
  doc,
  req,
  req: { payload },
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (doc?.authors) {
    const authorDocs = []

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    for (const author of doc.authors) {
      const authorDoc = await payload.findByID({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
        id: typeof author === 'object' ? author?.id : author,
        collection: 'users',
        depth: 0,
        req,
      })

      authorDocs.push(authorDoc)
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    doc.populatedAuthors = authorDocs.map((authorDoc) => ({
      id: authorDoc.id,
      name: authorDoc.name,
    }))
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return doc
}
