document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.querySelector('input[name="name"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        const newComment = document.createElement('li');
        newComment.innerHTML = `
            <div class="comment_content">
                <h4 class="comment_name">${name}</h4>
                <span class="comment_date">Just now</span>
                <p>${message}</p>
                <a class="reply_btn" href="#"><i class='bx bx-reply'></i> Reply</a>
            </div>
        `;

        commentList.appendChild(newComment);
        commentForm.reset();
    });
});