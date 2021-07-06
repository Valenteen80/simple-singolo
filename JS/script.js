$(document).ready(function () {
  $(".slider").slick();
});

document.addEventListener("scroll", onscroll);

function onscroll(event) {
  const curPos = window.scrollY;
  const divs = document.querySelectorAll("#wrapper>section");
  const links = document.querySelectorAll("#menu-center a");
  divs.forEach((el) => {
    if (el.offsetTop <= curPos && el.offsetTop + el.offsetHeight > curPos) {
      links.forEach((a) => {
        a.classList.remove("active");
        if (el.getAttribute("id") === a.getAttribute("href").substring(1)) {
          a.classList.add("active");
        }
      });
    }
  });
}

// const onePictures = document.querySelector(".picturesBlock img");
// onePictures.addEventListener("click", () => {
//   onePictures.classList.toggle("imge-hide");
// });

const portfolioImg = document.querySelector(".portfolio-picturesBlock");

const buttonList = document.querySelector(".portfolio-switching");
buttonList.addEventListener("click", (e) => {
  const activeButton = document.querySelector(".portfolio-switching .active");
  activeButton.classList.remove("active");
  const newActiveButton = e.target;
  newActiveButton.classList.add("active");
  for (let i = portfolioImg.children.length; i >= 0; i--) {
    portfolioImg.appendChild(
      portfolioImg.children[Math.floor(Math.random() * 10)]
    );
  }
});

// portfolioImg.addEventListener("click", (e) => {
//   const activeImage = document.querySelector(".picturesBlock > img");
//   if (portfolioImg.contains(activeImage)) {
//     activeImage.classList.remove(".picturesBlock > img");
//   }
//   e.target.parentNode.classList.add(".picturesBlock > img");
// });
