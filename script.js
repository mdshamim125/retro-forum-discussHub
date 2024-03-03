const allCategories = document.getElementById("all-categories");
const markRead = document.getElementById("mark-read");
const readCount = document.getElementById("read-count").innerText;
// console.log(readCount);
let markAsRead = parseInt(readCount);

const loadAllPosts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  data.posts.forEach((post) => {
    // console.log(post.category);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="bg-[#7D7DFC1A] flex gap-4 rounded-3xl p-6 mb-4">
              <div class="indicator">
                <span class="indicator-item badge badge-secondary"></span>
                <img src=${post.image} class="h-[75px] rounded-xl"> 
              </div>
              <div>
                <p class="inter font-medium">
                  # ${post.category} <span class="ml-4">Author: ${post.author.name}</span>
                </p>
                <h3 class="mulish font-bold text-xl my-2">
                  ${post.title}
                </h3>
                <p class="border-b border-dotted inter">
                  ${post.description}
                </p>
                <div class="flex justify-between">
                  <div class="flex gap-6">
                    <div class="flex gap-2 items-center">
                      <i class="fa-regular fa-message"></i>
                      <p>${post.comment_count}</p>
                    </div>
                    <div class="flex gap-2 items-center">
                      <i class="fa-regular fa-eye"></i>
                      <p>${post.view_count}</p>
                    </div>
                    <div class="flex gap-2 items-center">
                      <i class="fa-regular fa-clock"></i>
                      <p>${post.posted_time} min</p>
                    </div>
                  </div>
                  <div class="text-white">
                    <button onclick="messageButton('${post.title}', '${post.view_count}')" class="bg-[#10B981] p-1 rounded-full px-2">
                      <i class="fa-regular fa-envelope"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
    `;

    allCategories.appendChild(div);
  });
};

const messageButton = (title, view) => {
  const div = document.createElement("div");
  //   console.log(title);
  div.innerHTML = `
  <div class="flex bg-white p-4 rounded-xl my-4">
                  <p class="mulish font-semibold">
                    ${title}
                  </p>
                  <div class="flex items-center gap-1">
                    <i class="fa-regular fa-eye"></i>
                    <p>${view}</p>
                  </div>
                </div>
  `;
  markRead.appendChild(div);
  console.log(markAsRead);
  markAsRead = markAsRead + 1;
  document.getElementById("read-count").innerHTML = markAsRead;
};

// const loadLatestPosts = async () => {
//   const res = await fetch(
//     "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
//   );
//   const data = await res.json();
//   console.log(data[0].author.name);
//   data.posts.forEach((post) => {
//     // console.log(post);
//   });
// };

loadAllPosts();
// loadLatestPosts();
