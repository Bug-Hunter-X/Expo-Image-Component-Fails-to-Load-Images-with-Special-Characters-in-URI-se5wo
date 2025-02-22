This code uses the `encodeURIComponent` function to encode the URI before passing it to the `Image` component. This solves the issue of images not loading when special characters are in the URI.
```javascript
import React from 'react';
import { Image } from 'expo-image';

const MyComponent = () => {
  const imageUri = 'https://example.com/image%20with%20spaces.jpg'; // Example URI with spaces
  const encodedUri = encodeURIComponent(imageUri);

  return (
    <Image
      source={{ uri: encodedUri }}
      style={{ width: 200, height: 200 }}
    />
  );
};

export default MyComponent;
```