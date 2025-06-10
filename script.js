document
  .getElementById("post-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("post-title").value;
    const content = document.getElementById("post-content").value;

    if (title && content) {
      const postContainer = document.getElementById("posts-container");
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");

      const postTitle = document.createElement("h3");
      postTitle.textContent = title;

      const postContent = document.createElement("p");
      postContent.textContent = content;

      postDiv.appendChild(postTitle);
      postDiv.appendChild(postContent);
      postContainer.prepend(postDiv);

      // Clear the form
      document.getElementById("post-form").reset();
    }
  });
