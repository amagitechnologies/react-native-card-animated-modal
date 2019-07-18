# react-native-card-animated-modal

This component is inspired by the iOS _App of the Day_ cards in App Store. It does not need any native code requirements so it can be used with non-ejected expo projects. The card-modal interaction uses the concept of shared elements.

#### Features

- Pure Javascript code.
- Customizable content rendering per item card.
- Customizable list component.

#### Installation

Install the package using npm or yarn.

```bash
npm install --save react-native-card-animated-modal
or
yarn add react-native-card-animated-modal
```

#### Example Output

![](assets/demo.gif)

#### Example

Go to example folder and run it locally.

#### Basic Usage

```jsx
import CardList from "react-native-card-animated-modal";
import { View, Text } from "react-native";

const now = new Date();
const CARDS = [
  {
    image: {
      uri:
        "http://www.gamespersecond.com/media/2011/07/battlefield-3-poster.jpg"
    },
    height: 300,
    renderItem: ({ item, index }) => (
      <View>
        <Text>Customizable Content</Text>
      </View>
    )
  }
];

const App = () => (
  <CardList
    listProps={{
      ListHeaderComponent: () => (
        <View style={{ padding: 16, paddingBottom: 0 }}>
          <Text
            style={{
              fontSize: 13,
              color: "rgba(0, 0, 0, 0.5)"
            }}
          >
            {now.toDateString()}
          </Text>
          <Text style={{ fontSize: 32, fontWeight: "bold" }}>Featured</Text>
        </View>
      )
    }}
    data={CARDS}
    renderItem={({ item, index }) => {
      /* Render card per item */
      if (item.renderItem) return item.renderItem({ item, index });

      /* Default card when not specified */
      return (
        <View>
          <Text>Default Content</Text>
        </View>
      );
    }}
    renderDetails={({ item, index }) => (
      /* You can also provide custom content per item */
      <View style={{ paddingVertical: 30, paddingHorizontal: 16 }}>
        <Text style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 18 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
    )}
  />
);
```

#### Data Structure Example

```javascript
[
  {
    // image source for Image component
    image: {
      uri:
        "http://www.gamespersecond.com/media/2011/07/battlefield-3-poster.jpg"
    },
    // Height for the card
    height: 300,
    // Will be used when you want to render different contents per card.
    renderItem: ({ item, index }) => (
      <View>
        <Text>Customizable Content</Text>
      </View>
    )
  }
];
```

#### Props

| Prop               | Required                        | Default                                                | Description                                                                                                           |
| ------------------ | ------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| data               | optional but should be provided | []                                                     | Data of the cards to be provided to the list component.                                                               |
| renderItem         | optional                        | `() => null`                                           | Function that takes `({ item, index })` that will be used to render content of each card.                             |
| renderDetails      | optional                        | `() => null`                                           | Function that takes `({ item, index })` that will be used to render details in the bottom of each card when expanded. |
| listProps          | optional                        | {}                                                     | Props that will be applied to the list component.                                                                     |
| cardContainerStyle | optional                        | {}                                                     | Styling property that will be applied to the cards.                                                                   |
| detailsContainerStyle | optional | {} | Styling property that will be applied to the details area of the expanded card.
| listContainerStyle | optional                        | `{flexGrow: 1, backgroundColor: "rgb(250, 250, 250)"}` | Styling property that will be applied to the contentContainerStyle of list component                                  |
| safeAreaStyle      | optional                        | `{ flex: 1 }`                                          | Styling property that will be applied to the container which is `SafeAreaView`                                        |
| cardWidth          | optional                        | Device Width - 32                                      | The width of the cards.                                                                                               |
| ListComponent      | optional                        | `FlatList`                                             | Customizable list component. You can pass here a different component that you want to use for rendering the list.     |
| header             | optional                        | null                                                   | Header component that will be rendered at the top of the list                                                         |
| footer             | optional                        | null                                                   | Footer component that will be rendered at the bottom of the list                                                      |

#### License

MIT © [AMAGI](https://amagi.io)
