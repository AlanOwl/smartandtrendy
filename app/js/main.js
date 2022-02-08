$(function() {



  $('.productdetalis-slide__thumb').slick({
    asNavFor: '.productdetalis-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,

  });
  $('.productdetalis-slide__big').slick({
    asNavFor: '.productdetalis-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  });


  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    numStars: 5,
    readOnly: true,
  });

  $(".product-list__star").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    numStars: 5,
    readOnly: true,
  });

  $(".productdetalis-item__star").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    numStars: 5,
    readOnly: true,
    spacing: "13px"
  });

  

  

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });


  $('.category__select, .productdetalis__num').styler();

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  var mixer = mixitup('.products__content');
  var mixer = mixitup('.newdesign__content');
})