import { createClient, dedupExchange, fetchExchange, cacheExchange } from "@urql/core";

const token = import.meta.env.HASHNODE_SECRET

export const client = createClient({
    url: "https://api.hashnode.com",

    exchanges: [dedupExchange, cacheExchange, fetchExchange],
    fetchOptions: () => {
      return {
        headers: {
          authorization: `${token}`,
        },
      };
    },
  });
