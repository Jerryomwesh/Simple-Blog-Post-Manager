let root = document.getElementById('root')
let url = "http://localhost:3000/posts"

// Main container for layout
const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';
root.appendChild(mainContainer);

// Blog list section (left)
const blogListSection = document.createElement('div');
blogListSection.className = 'blog-list-section';
mainContainer.appendChild(blogListSection);

const blogListTitle = document.createElement('div');
blogListTitle.className = 'blog-list-title';
blogListTitle.textContent = 'Blog List';
blogListSection.appendChild(blogListTitle);

// Blog list container (should be directly below the title)
const blogList = document.createElement('div');
blogList.className = 'blog-list';
blogListSection.appendChild(blogList);

// Add Blog button (should be below the blog list)
const addButton = document.createElement('button');
addButton.textContent = '+ Add Blog Post';
addButton.className = 'add';
blogListSection.appendChild(addButton);

// Add form dropdown placeholder (will be inserted below the add button)
const addFormPlaceholder = document.createElement('div');
addFormPlaceholder.className = 'add-form-placeholder';
blogListSection.appendChild(addFormPlaceholder);

// Post details section (right)
const postDetailsSection = document.createElement('div');
postDetailsSection.className = 'post-details-section';
mainContainer.appendChild(postDetailsSection);

// Add header to post details section (constant)
const postDetailsHeader = document.createElement('div');
postDetailsHeader.className = 'post-details-header';
const postDetailsMainTitle = document.createElement('div');
postDetailsMainTitle.className = 'post-details-main-title';
postDetailsMainTitle.textContent = 'Post Pulse';
const postDetailsSubtitle = document.createElement('div');
postDetailsSubtitle.className = 'post-details-subtitle';
postDetailsSubtitle.textContent = 'Modern Blog Post Management.';
postDetailsHeader.appendChild(postDetailsMainTitle);
postDetailsHeader.appendChild(postDetailsSubtitle);
postDetailsSection.appendChild(postDetailsHeader);

// Helper to render blog list
function renderBlogList(posts) {
    blogList.innerHTML = '';
    posts.forEach((post, idx) => {
        const item = document.createElement('div');
        item.className = 'blog-list-item';
        item.innerHTML = `<strong>${post.title}</strong><span>${post.author}</span>`;
        item.onclick = () => renderPostDetails(post);
        blogList.appendChild(item);
    });
}

// Helper to render post details
function renderPostDetails(post) {
    // Remove previous details block if any
    let oldBlock = document.querySelector('.post-details-block');
    if (oldBlock) oldBlock.remove();
    if (!post) return;
    const block = document.createElement('div');
    block.className = 'post-details-block';

    // Top right buttons container
    const topRightBtns = document.createElement('div');
    topRightBtns.style.display = 'flex';
    topRightBtns.style.justifyContent = 'flex-end';
    topRightBtns.style.width = '100%';
    topRightBtns.style.gap = '8px';
    topRightBtns.style.marginBottom = '8px';

    // Edit button with SVG icon
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn icon-btn';
    editBtn.title = 'Edit';
    editBtn.innerHTML = `
      <svg width="16" height="16" fill="none" stroke="#007b8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" style="vertical-align:middle;margin-right:4px;"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/></svg>Edit`;
    editBtn.onclick = (e) => {
        e.stopPropagation();
        showEditDropdown(post, block);
    };
    // Delete button with SVG icon
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn icon-btn';
    deleteBtn.title = 'Delete';
    deleteBtn.innerHTML = `
      <svg width="16" height="16" fill="none" stroke="#c0392b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" style="vertical-align:middle;margin-right:4px;"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>Delete`;
    deleteBtn.onclick = () => block.remove();
    topRightBtns.appendChild(editBtn);
    topRightBtns.appendChild(deleteBtn);
    block.appendChild(topRightBtns);

    const title = document.createElement('div');
    title.className = 'post-details-title';
    title.textContent = post.title;
    block.appendChild(title);
    if (post.imageUrl) {
        const img = document.createElement('img');
        img.className = 'post-details-img';
        img.src = post.imageUrl;
        block.appendChild(img);
    }
    const content = document.createElement('div');
    content.className = 'post-details-content';
    content.textContent = post.content;
    block.appendChild(content);
    const author = document.createElement('div');
    author.className = 'post-details-author';
    author.textContent = `By: ${post.author}`;
    block.appendChild(author);
    postDetailsSection.appendChild(block);
}

function showEditDropdown(post, parentBlock) {
    // Remove any existing edit dropdown
    let existing = document.querySelector('.edit-form-dropdown');
    if (existing) existing.remove();
    // Create dropdown
    const form = document.createElement('div');
    form.className = 'edit-form-dropdown';
    // Title
    const titleInput = document.createElement('input');
    titleInput.value = post.title;
    titleInput.placeholder = 'Title';
    form.appendChild(titleInput);
    // Content
    const contentInput = document.createElement('textarea');
    contentInput.value = post.content;
    contentInput.placeholder = 'Content';
    form.appendChild(contentInput);
    // Author
    const authorInput = document.createElement('input');
    authorInput.value = post.author;
    authorInput.placeholder = 'Author';
    form.appendChild(authorInput);
    // Image URL
    const urlInput = document.createElement('input');
    urlInput.value = post.imageUrl;
    urlInput.placeholder = 'Image URL';
    form.appendChild(urlInput);
    // Save/Cancel buttons
    const btns = document.createElement('div');
    btns.style.display = 'flex';
    btns.style.justifyContent = 'flex-end';
    btns.style.width = '100%';
    btns.style.gap = '8px';
    btns.style.marginTop = '12px';
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save Changes';
    saveBtn.className = 'save-btn icon-btn';
    saveBtn.onclick = () => {
        post.title = titleInput.value;
        post.imageUrl = urlInput.value;
        post.content = contentInput.value;
        post.author = authorInput.value;
        renderPostDetails(post);
        renderBlogList(posts);
        form.remove();
    };
    const cancelBtn = document.createElement('button');
    cancelBtn.innerHTML = '<span style="font-size:1.1em;">✖️</span>';
    cancelBtn.className = 'cancel-btn icon-btn';
    cancelBtn.onclick = () => form.remove();
    btns.appendChild(saveBtn);
    btns.appendChild(cancelBtn);
    form.appendChild(btns);
    // Insert dropdown after the parent block
    parentBlock.appendChild(form);
}

// Add form dropdown logic
function showAddFormDropdown() {
    let existing = document.querySelector('.add-form-dropdown');
    if (existing) { existing.remove(); return; }
    const form = document.createElement('div');
    form.className = 'add-form-dropdown';
    // Title
    const titleInput = document.createElement('input');
    titleInput.placeholder = 'Title';
    form.appendChild(titleInput);
    // Content
    const contentInput = document.createElement('input');
    contentInput.placeholder = 'Content';
    form.appendChild(contentInput);
    // Author
    const authorInput = document.createElement('input');
    authorInput.placeholder = 'Author';
    form.appendChild(authorInput);
    // Image URL
    const urlInput = document.createElement('input');
    urlInput.placeholder = 'Image URL';
    form.appendChild(urlInput);
    // Add button
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Add';
    submitBtn.onclick = () => {
        if (!titleInput.value || !contentInput.value || !authorInput.value || !urlInput.value) {
            alert('Please fill in all fields.');
            return;
        }
        const newPost = {
            title: titleInput.value,
            content: contentInput.value,
            author: authorInput.value,
            imageUrl: urlInput.value
        };
        posts.push(newPost);
        renderBlogList(posts);
        form.remove();
    };
    form.appendChild(submitBtn);
    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.onclick = () => form.remove();
    form.appendChild(closeBtn);
    addFormPlaceholder.appendChild(form);
}

// Data
let posts = [];

// Fetch and render initial posts
fetch(url)
.then((r) => r.json())
.then((data) => {
    posts = data;
    renderBlogList(posts);
    if (posts.length > 0) renderPostDetails(posts[0]);
});

addButton.addEventListener('click', showAddFormDropdown)