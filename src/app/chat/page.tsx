import { Chat } from "app/components/chat/Chat";
import { getProducts } from "app/services/shopify/products";
import { createAgent } from "app/utils/gemini/createAgent";

export default async function ChatPage() {
  const products = await getProducts();
  const productTitles = products.map((product) => product.title);
  const flatProductTitles = productTitles.join("\n");
  const agent = createAgent(flatProductTitles);
  console.log(agent)

  return (
    <>
      <h1>Chatbot</h1>
      <Chat agent={agent} />
    </>
  );
}
