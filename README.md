# Expo Image Component URI Special Character Issue

This repository demonstrates a bug where the Expo `Image` component fails to load images when the URI contains special characters, such as spaces or accented characters.  The image fails to load silently, without any error messages in the console.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Observe that the image with special characters in its URI does not load.

## Solution

The solution involves URL encoding the URI before passing it to the `Image` component.  This ensures that all special characters are properly handled.
