import { env } from "app/config/env"

export const shopifyUrls = {
  products: {
    'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/products.json`,
    'mainProducts': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/collections/474570686769/products.json`,
  },
  collections: {
    'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/smart_collections.json`,
    'products': (id: string) => `${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/collections/${id}/products.json`
  }
}