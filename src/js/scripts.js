$(document).ready(function() {
  //button Search animation
  const input = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");

  const expand = () => {
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
  };

  searchBtn.addEventListener("click", expand);

  $(".press-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});
