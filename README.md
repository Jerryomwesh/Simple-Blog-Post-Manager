# Simple Blog Post Manager

A modern, user-friendly web application for managing blog posts. This project features a clean interface, responsive layout, and intuitive controls for creating, viewing, and editing blog content.

## Features
- **Two-Column Layout:** Blog list and add form on the left; post details on the right.
- **Blog List:** Displays posts in rows (up to 5 per row) for easy browsing.
- **Add Post:** Dropdown form for quickly adding new blog entries.
- **Post Details:** Dedicated section with a static header and details block for the selected post.
- **Edit Functionality:** Edit and Cancel (X) buttons with modern SVG icons; edit form appears as a dropdown.
- **Modern UI:** Stylish buttons, clear labels, and a visually appealing color scheme.
- **Responsive Design:** Layout adapts to different screen sizes for optimal usability.
- **Instant Feedback:** All actions update the interface immediately for a smooth user experience.
- **Accessible Controls:** Keyboard and mouse navigation supported throughout the app.
- **No Dependencies:** Runs entirely in the browser, no frameworks or build tools required.

## How It Works
- The blog list is always visible, making it easy to switch between posts.
- Adding a post reveals a dropdown form; new posts appear instantly in the list.
- Selecting a post displays its details, including title, content, and image (if provided).
- Edit mode is accessible via the pencil icon; changes are saved or canceled with a single click.
- All data is managed in-memory for simplicity and speed.

## Usage
1. Open `index.html` in your browser.
2. Browse the list of blog posts on the left.
3. Click a post to view its details on the right.
4. Use the "Add Blog Post" button to open the add form and submit new content.
5. Click the Edit icon in the post details to update a post, or Cancel (X) to close the form.

## Project Structure
- `index.html` – Main HTML file
- `index.js` – Application logic and interactivity
- `style.css` – Styles and layout
- `db.json` – Sample data (if used)

## Customization
- To change the color scheme or layout, edit `style.css`.
- To modify post fields or validation, update the form logic in `index.js`.
- For sample data, adjust or replace `db.json` as needed.

## Notes
- No backend required; all functionality is handled client-side.
- Designed for clarity, speed, and ease of use.
- Compatible with all modern browsers.

---

Built as a practical demonstration of modern web UI/UX principles. Ideal for learning, prototyping, or as a starting point for more advanced blog applications.