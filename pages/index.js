import React from "react";
import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
export default class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      <Page
        title="Product Selector"
        primaryAction={{
          content: "Select Products",
          onAction: () => this.setState({ open: true }),
        }}
      >
        <ResourcePicker
          resourceType="Product"
          open={this.state.open}
          onCancel={() => this.setState({ open: false })}
          // "resources" is the array of stuff the user selects and adds
          onSelection={(resources) => this.handleSelection(resources)}
        />
      </Page>
    );
  }

  // resources are caught here in the handleSelection method and logged
  handleSelection(resources) {
    const idFromResources = resource.selection.map((product) => product.id);
    this.setState({ open: false });
    console.log(resources);
    console.log(idFromResources);
  }
}
