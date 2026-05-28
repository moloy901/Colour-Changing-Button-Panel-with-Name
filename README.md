# 🎨 Colour Changing Button Panel

A dynamic and interactive webpage that allows users to change colors with buttons and display personalized messages.

## Features

✨ **Interactive Color Changing**
- Click any of 6 color buttons (Red, Blue, Green, Yellow, Purple, Orange) to instantly change the color box
- Smooth 0.3s color transitions for a polished look

👤 **Personalized Display**
- Enter your name in the input field at the top
- Your name displays in the color box in real-time as you type
- Shows "Welcome!" when the name field is empty

📊 **Color Information Display**
- Current color name displayed below the color box
- Color name shown in an input field that changes color dynamically
- Color preview matches the selected color

🎯 **Clean & Modern Design**
- Gradient purple background
- Card-style container with shadow effects
- Responsive layout that works on all screen sizes
- Smooth hover animations on buttons
- Professional typography and spacing

## File Structure

```
Colour Changing Button Panel/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## How to Use

1. **Open the webpage** - Open `index.html` in your web browser
2. **Enter your name** - Type your name in the input field at the top
3. **Choose a color** - Click any of the 6 color buttons
4. **Watch it change** - The color box changes instantly with your name displayed
5. **Reset** - Click the "Reset" button to return to the default red color

## Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with gradients, transitions, and flexbox
- **JavaScript** - DOM manipulation using `getElementById()` and `onclick` handlers

## Key JavaScript Features

- `changeColour(colourName, colourCode)` - Updates color box, text, and input field
- `resetColour()` - Resets to default red color
- Real-time name input listener using `addEventListener()`

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Customization

You can easily customize:
- Add more color buttons (copy existing button HTML and add new color)
- Change colors by modifying the hex color codes
- Adjust button styling in `styles.css`
- Modify animations and transitions

## Created By
**Moloy Biswas**
**Date:** May 28, 2026

---

Enjoy your interactive color panel! 🎨✨
