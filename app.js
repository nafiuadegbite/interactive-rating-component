const submitBtn = document.querySelector(".submit_btn");
const ratingCard = document.querySelector(".rating_card");
const thankCard = document.querySelector(".thank_card");
const ratingValues = document.querySelectorAll("li");
const ratingSelected = document.querySelector(".rating_number");


const handleRating = (e) => {
    const ratingNum = e.target.innerHTML;

    ratingValues.forEach(value => {
        value.classList.remove("active");
    });
    
    e.target.classList.add("active");
    ratingSelected.innerHTML = ratingNum;
};

ratingValues.forEach(ratingValue => {
    ratingValue.addEventListener('click', handleRating);
});

const handleButton = (e) => {
    e.preventDefault();

    ratingCard.classList.add("hidden");
    thankCard.classList.remove("hidden");
};

submitBtn.addEventListener('click', handleButton);