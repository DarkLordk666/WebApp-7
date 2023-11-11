let isLiked = false;
let isDisliked = false;

const toggleLike = () => {
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('likeCount');

    if(isLiked) {
        isLiked = false;
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
        likeBtn.classList.remove('fa-solid');
        likeBtn.classList.add('fa-regular');
    } else {
        isLiked = true;
        if(isDisliked) {
            isDisliked = false;
            const dislikeCount = document.getElementById('dislikeCount');
            dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
            const dislikeBtn = document.getElementById('dislikeBtn');
            dislikeBtn.classList.remove("fa-solid");
            dislikeBtn.classList.add("fa-regular"); 
        }
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
        likeBtn.classList.remove('fa-regular');
        likeBtn.classList.add('fa-solid');
    }
}   

const toggleDislike = () => {
    const dislikeBtn = document.getElementById('dislikeBtn');
    const dislikeCount = document.getElementById('dislikeCount');

    if (isDisliked) {
        isDisliked = false;
        dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
        dislikeBtn.classList.remove('fa-solid');
        dislikeBtn.classList.add('fa-regular');
    } else {
        isDisliked = true;
        if (isLiked) {
            isLiked = false;
            const likeCount = document.getElementById('likeCount');
            likeCount.textContent = parseInt(likeCount.textContent) - 1;
            const likeBtn = document.getElementById('likeBtn');
            likeBtn.classList.remove('fa-solid');
            likeBtn.classList.add('fa-regular');
        }
        dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
        dislikeBtn.classList.remove('fa-regular');
        dislikeBtn.classList.add('fa-solid');
    }
}