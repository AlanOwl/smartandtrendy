$(function() {

  $('.shop__filter-btn').on('click', function(){
    $('.shop__filters').slideToggle();
  });


  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  });

  $('.footer-top__title').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer-top__active');
  });


  $('.blog-one__comments-input').on('click', function (e) {
    $('.blog-one__comments-input').removeClass('blog-one__comments-input--active');
    $(this).addClass('blog-one__comments-input--active');
  });


  $('.pagination__link').on('click', function (e) {
    $('.pagination__link').removeClass('pagination__link--active');
    $(this).addClass('pagination__link--active');
  });


  
  $('.related__slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="../images/slider/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next slick-btn"><img src="../images/slider/arrow-next.svg" alt=""></button>',
    responsive: [{
      breakpoint: 621,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        }
      },
      {
        breakpoint: 431,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });


  $('.productdetalis-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.productdetalis-tabs__top-item').removeClass('productdetalis-tabs__top-item--active');
    $(this).addClass('productdetalis-tabs__top-item--active');

    $('.productdetalis-tabs__content-item').removeClass('productdetalis-tabs__content-item--active');
    $($(this).attr('href')).addClass('productdetalis-tabs__content-item--active');


  });


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
    responsive: [{
      breakpoint: 921,
      settings: {
        draggable : true,
      }
    },
  ]
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