import { Heading, Page } from "@shopify/polaris";

const Index = () => (
  <Page
    title="Product Selector"
    primaryAction={{
      content: "Select Products",
      onAction: function () {
        console.log("clicked");
      },
    }}
  />
);

export default Index;
