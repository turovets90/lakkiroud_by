$(document).ready(function(){

    $('.mm_btn').on('click',function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');
        $('.mm_close').on('click',function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });

    if($(window).innerWidth() < 1145){
        $(document).on('click', function(e) {
            if (!$(e.target).closest(".main_menu.open").length) {
                $(".main_menu.open").removeClass('open');
                $("html").removeClass('page-noscroll');
            }
            e.stopPropagation();
        });
    }



    if($(".brands_slider > div").length >4){
        $('.brands_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots:true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        dots:true
                    }
                }
            ]
        });
    }



    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });


    $('.page_content .choose_tires_item_head').click(function(){
        $(this).next().slideToggle();
        $(this).parent().toggleClass('act');
    });





    /*
    if($('.main_slider > div').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:true,
            fade:true,
            infinite:false,
            autoplay: true,
            speed: 1000,
            autoplaySpeed:9000,
            customPaging : function(slider, i) {
                var thumb = $(slider.$slides[i]).data();
                return '<span>0'+(i+1)+'</span>' ;},
        });
    }


    $('.ms_prev').click(function(){
        $('.main_slider').slick('slickPrev');
    });

    $('.ms_next').click(function(){
        $('.main_slider').slick('slickNext');
    });


    if($(window).innerWidth() < 1200){
        $('.pr_list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            //infinite:false,
            responsive: [

                {
                    breakpoint: 575,
                    settings: {
                        arrows: false,
                        dots:true
                    }
                }
            ]
        });
    }




    if($(".partners_slider > div").length >4){
        $('.partners_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            //infinite:false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots:true
                    }
                }
            ]
        });
    }


    $('.range_values').each(function(){
        var range=$(this).find('.range');
        var rub_left=$(this).find('.rub_left');
        var rub_right=$(this).find('.rub_right');
        var tasks_status1=$(this).find('.tasks_status1');
        var tasks_status2=$(this).find('.tasks_status2');
        $(range).slider({
            range: true,
            min: 0,
            max: 350,
            values: [0, 150],
            step: 1,
            slide: function(event, ui) {
                $(rub_left).text(ui.values[0] + ' мм.');
                $(rub_right).text(ui.values[1] + ' мм.');
                $(tasks_status1).val( ui.values[0] );
                $(tasks_status2).val( ui.values[1] );
            }
        });
        $(rub_left).text($(range).slider("values", 0) + ' мм.');
        $(rub_right).text($(range).slider("values", 1) + ' мм.');
    });
    $(document).on("change","input[class=tasks_status1]", function() {
        $(this).closest('.range_values').find('.range').slider('values',0,$(this).val());
        $(this).closest('.range_values').find('.rub_left').text($('.range').slider("values", 0) + ' мм.');
    });
    $(document).on("change","input[class=tasks_status2]", function() {
        $(this).closest('.range_values').find('.range').slider('values',1,$(this).val());
        $(this).closest('.range_values').find('.rub_right').text($('.range').slider("values", 1) + ' мм.');
    });




    $('.filter_title').click(function(){
        $(this).parent().toggleClass('act');
        $(this).next().slideToggle();
    });



    $('.mm_filter_btn').click(function(){
        $('.filter_block').addClass('open');
        $('html').addClass('filter_active');
        $('.mf_close').on('click',function () {
            $('.filter_block').removeClass('open');
            $('html').removeClass('filter_active');
        });
        return false;
    });



    if($(window).innerWidth() < 1200){
        $(document).on('click', function(e) {
            if (!$(e.target).closest(".filter_block.open").length) {
                $(".filter_block.open").removeClass('open');
                $("html").removeClass('filter_active');
            }
            e.stopPropagation();
        });
    }


    if($(".product_slider > div").length >4){
        $('.product_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            //infinite:false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots:true
                    }
                }
            ]
        });
    }



    $('.models_table .models_body .item').each(function(){
        var button_show_more=$(this).find('.button_show_more');
        var m_body=$(this).find('.m_body');
        var item=$(this);

        $(button_show_more).click(function(){
            if($(m_body).is(':visible')){
                  $(m_body).slideUp();
                  $(button_show_more).text('развернуть');
                  $(item).removeClass('act');
            }else{
                $(m_body).slideDown();
                $(button_show_more).text('свернуть');
                $(item).addClass('act');
            }
        });
    });




    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [53.947118, 27.429949],
                zoom:16,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                balloonContent: 'Минский район, а.г. Ждановичи, ул. Полевая, 1А, пом. 7 (цокольный этаж)'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/map_icon.svg',
                // Размеры метки.
                iconImageSize: [45, 57],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-10, -60]
            });

        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
    });




    $('.file').filestyle({
        text : 'Прикрепить файл к сообщению',
        dragdrop: false,
    });


    $('.short_description .show_more').click(function(){
        $('#specificationslink').tab('show');
    })


    */

});


