
  pay attention!
  - try to implement the UI yourself, to produce a UI similar to the screenshot
  - use the structure as reference only, do not use it directly in the UI
  - the frame is an iphone SE frame contain the UI, do not try to create the frame, try to create the UI inside (pay attention to the safe area insets)
  - this is a mobile layout, set max width of wrapper to medium, center the wrapper; the height of the wrapper should take all available space (even outside of the safe area, use padding and css env variables to display screens or components correctly)
  - try to figure the structure of the UI:
    + where to use flex box, where to use flex grow
    + where to use absolute position inside a relative container (sticker effects)
    + which value to use: usually we don't use hard-coded values for positions and sizes (except for min/max width/height); font size, paddings, margins usually use a fixed value. if we're using tailwindcss classes, remember that tailwind use rem (we need to convert px to rem: e.g. padding-4 is about 16px)