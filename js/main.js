jQuery(document).ready(function($) {


  const data_list = [

    {'link': './img/weimin/real/32823421dup1_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A man surfing'
    },
    {'link': './img/weimin/real/1031121203_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'International fireworks festival display at night. variety of colorful fireworks in holidays celebration isolated on black. happy new year background.'
    },
    {'link': './img/weimin/real/1022475643_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Scenic timelapse of famous niagara falls in ontario province in canada. beautiful view of horseshoe falls with cloudy morning sky in winter.'
    },
    {'link': './img/weimin/real/1026494993_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Man with vaping mod exhaling steam at black studio background. bearded guy smoking e-cigarette to quit tobacco. vapor and alternative nicotine free smoking concept'
    },
    {'link': './img/weimin/real/1025505206_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A sea turtle casually swimming above a tropical reef'
    },
    {'link': './img/daquan/19_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A 3D model of an elephant origami. Studio lighting.'
    },
    {'link': './img/daquan/2_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'a man is riding a horse in sunset'
    },
    {'link': './img/daquan/14_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Drone flythrough of a tropical jungle covered in snow.'
    },
    {'link': './img/daquan/10_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A spaceship is landing'
    },
    {'link': './img/daquan/9_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'the word HOME is popping up from book'
    },
    {'link': './img/weimin/real/27337624_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Wide shot of woman worker using welding machine on her work in site construction'
    },
    {'link': './img/weimin/real/1019896699dup_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Smiling young girl in a white winter forest. new year mood.'
    },
    {'link': './img/weimin/real/1033883435_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Low angle: old truck drives down an empty road running across the vast green plains and towards spectacular snowy mount everest. local lorry transporting goods across the scenic tibetan wilderness.'
    },
    {'link': './img/weimin/real/22190872_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Bullfinch, male with beautiful red orange breast, bathed in winter sun shine, feeding on frost covered log.'
    },
    {'link': './img/weimin/real/30527428_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Cutting metal with circular saw by industrial cnc machine slow motion. automation of work. manufacture of refrigeration and ventilation industrial equipment and air conditioners.'
    },
    {'link': './img/weimin/real/1029418973_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': "Beautiful pink rose background. blooming rose flower rotation, close-up. wedding backdrop, valentine's day concept. beauty spring romantic rose flower rotated. beautiful rose in motion"
    },
    {'link': './img/weimin/real/1048565098_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Front view portrait of a serious mixed race woman walks in the street using smart phone'
    },
    {'link': './img/weimin/real/1031280968_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'White smoke on black background. simply drop it in and change its blending mode to screen or add.'
    },
    {'link': './img/weimin/real/1015012054_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Few big purple plums rotating on the turntable. water drops appears on the skin during rotation. isolated on the white background. close-up. macro.'
    },
    {'link': './img/weimin/real/1029681440_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Beatiful view at tropical waikiki beach resort in 4k slow motion 60fps'
    },
    {'link': './img/weimin/real/9999006dup1dup1_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'close up coffee being poured into a glass. Slow motion. 4K'
    },
    {'link': './img/weimin/real/16449856_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Skymark boeing b737 ja73nl at new chitose airport japan -january 30, 2014'
    },
    {'link': './img/weimin/real/32212450_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'The pacific ocean at santa cruz, on the northern monterey bay in santa cruz county, california, usa'
    },
    {'link': './img/weimin/real/9941543_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Blue sky clouds timelapse 4k time lapse big white clouds cumulus growing cloud formation sunny weather background'
    },
    {'link': './img/weimin/real/7256329_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Young girl eye macro, shot in raw'
    },
    {'link': './img/weimin/real/9999007_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'close up of an elephant. Slow motion. 3D'
    },
    {'link': './img/weimin/real/9999006_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'close up coffee being poured into a glass. Slow motion'
    },
    {'link': './img/weimin/real/30625303_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'The moon at night in the dark sky. moon'
    },
    {'link': './img/weimin/real/7089172_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Maui sunset; on the beach in hawaii'
    },
    {'link': './img/weimin/real/2776550_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Crater lake 50 timelapse sunrise wizard island'},
    {'link': './img/weimin/real/1060787110_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Close up of chicken breast fillet seasoned with salt and black pepper.'
    },
    {'link': './img/weimin/real/1052079490_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A person turns on a gas stove, oven, grill, and natural gas ignites burns with a blue flame, and then turns off.'
    },
    {'link': './img/weimin/real/1056501389_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Tringa glareola. two wood sandpipers in the summer. standing on land near the lake in the north of siberia.'
    },
    {'link': './img/weimin/real/12887768_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Japan tokyo roppongi 2015/11/11,illuminated christmas approaches'
    },
    {'link': './img/weimin/real/8489041_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Flashes and lot of sparks from welding work at construction site in dark in slow motion'
    },
    {'link': './img/weimin/real/6191048_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': '"4k. yellow tulip bloom buds green screen, ultra hd (tulipa viridiflora flaming spring green) (time lapse), 4096x2730.'
    },
    {'link': './img/weimin/unreal/9990070_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A person riding a horse in the sunrise. High Definition.'
    },
    {'link': './img/weimin/unreal/9990051dup9dup1_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A cat eating food out of a bowl, in style of Van Gogh.'
    },
    {'link': './img/weimin/unreal/9990020_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A ballerina performs a beautiful and difficult dance on the roof of a very tall skyscraper; the city is lit up and glowing behind her'
    },
    {'link': './img/weimin/unreal/9990072_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Drone flythrough of a tropical jungle covered in snow. High Definition.'
    },
    {'link': './img/weimin/unreal/9999018dup3dup3_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'close up of a clown fish swimming. 4K. slow motion.'
    },
    {'link': './img/weimin/unreal/9990019dup9dup2_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A confused grizzly bear in calculus class'
    },
    {'link': './img/weimin/unreal/9990035dup9dup2_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Campfire at night in a snowy forest with starry sky in the background.'
    },
    {'link': './img/weimin/unreal/9990027_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Melting pistachio ice cream dripping down the cone.'
    },
    {'link': './img/weimin/unreal/9990062_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Close up of luxury steak medium well, with butter and mushroom on its side'
    },
    {'link': './img/weimin/unreal/9930003dup2dup1_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'a girl is smiling at the camera. High Definition.'
    },
    {'link': './img/weimin/unreal/99900031_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A man is riding a bicycle with the sunset. High Definition.'
    },
    {'link': './img/weimin/unreal/9990042dup1_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A goldendoodle playing in a park by a lake.'
    },
    {'link': './img/weimin/unreal/9999017dup1_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'close up of a golden fish swimming in the ocean. High definition. Slow motion.'
    },
    {'link': './img/weimin/unreal/9990042dup1_stage2_res_pngs_speedup.gif',
      'name': '',
      'header': '',
      'text': 'A goldendoodle playing in a park by a lake.'
    },
    {'link': './img/weimin/unreal/9990064_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Portrait of young dark-skinned woman looking at you with a big smile on her face!'
    },
    {'link': './img/weimin/unreal/9990007_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A young couple walking in a heavy rain'
    },
    {'link': './img/weimin/unreal/9990051_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A cat eating food out of a bowl, in style of Van Gogh.'
    },
    {'link': './img/weimin/unreal/9950002dup0dup1_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'a fluffy dog is running by the lake. High definition.'
    },
    {'link': './img/weimin/unreal/9990019_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A confused grizzly bear in calculus class'
    },
    {'link': './img/weimin/unreal/9990062_stage2_res_pngs_speedup.gif',
      'name': '',
      'header': '',
      'text': 'Close up of luxury steak medium well, with butter and mushroom on its side'
    },
    {'link': './img/weimin/unreal/9960003_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A man riding a horse in the starry sky. High Definition.'
    },
    {'link': './img/weimin/unreal/9990020_stage2_res_pngs_speedup.gif',
      'name': '',
      'header': '',
      'text': 'A ballerina performs a beautiful and difficult dance on the roof of a very tall skyscraper; the city is lit up and glowing behind her'
    },
    {'link': './img/weimin/unreal/9990019dup99dup4_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A confused grizzly bear in calculus class'
    },
    {'link': './img/weimin/unreal/9990071dup9dup2_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A raccoon that looks like a turtle, digital art. High Definition.'
    },
    {'link': './img/weimin/unreal/9990067dup9dup1_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Busy freeway at night. 4K High Definition'
    },
    {'link': './img/weimin/unreal/9990045_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Pouring latte art into a silver cup with a golden spoon next to it.'
    },
    {'link': './img/weimin/unreal/9990070_stage2_res_pngs_speedup.gif',
      'name': '',
      'header': '',
      'text': 'A person riding a horse in the sunrise. High Definition.'
    },
    {'link': './img/weimin/unreal/9990013_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws'
    },
    {'link': './img/weimin/unreal/9990011dup1dup1_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'There is a table by a window with sunlight streaming through illuminating a pile of books'
    },
    {'link': './img/weimin/unreal/9990035dup99dup3_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Campfire at night in a snowy forest with starry sky in the background.'
    },
    {'link': './img/weimin/unreal/9990009_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'Hyper-realistic spaceship landing on mars'
    },
    {'link': './img/weimin/unreal/9990013dup0dup1_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'A small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws'
    },
    {'link': './img/weimin/unreal/9990011_stage2_res_pngs.gif',
      'name': '',
      'header': '',
      'text': 'There is a table by a window with sunlight streaming through illuminating a pile of books'
    },
  ]

  for (data of data_list) {
  if (document.getElementById('image-container')!= null){
    document.getElementById('image-container').innerHTML += `
  

    <a href=${data.link} data-lightbox="image-1"><div class="thumb">
        <div class="hover-effect">
            <div class="hover-content">
                 <h1 id="onDesktop">${data.name} <em>${data.header}</em></h1>
                 <p id="onDesktop">${data.text}</p>
            </div>
        </div>
        <div class="image">
        <img src=${data.link} alt="imgae not in path">
    </div>
    </div></a>

`;

  }

}

	'use strict';

        $(function() {
  
          // Vars
          var modBtn  = $('#modBtn'),
              modal   = $('#modal'),
              close   = modal.find('.close-btn img'),
              modContent = modal.find('.modal-content');
          
          // open modal when click on open modal button 
          modBtn.on('click', function() {
            modal.css('display', 'block');
            modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
          });
          
          // close modal when click on close button or somewhere out the modal content 
          $(document).on('click', function(e) {
            var target = $(e.target);
            if(target.is(modal) || target.is(close)) {
              modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
                modal.css('display', 'none');
                next();
              });
            }
          });
          
        });

        // on click event on all anchors with a class of scrollTo
        $('a.scrollTo').on('click', function(){
          
          // data-scrollTo = section scrolling to name
          var scrollTo = $(this).attr('data-scrollTo');
          
          
          // toggle active class on and off. added 1/24/17
          $( "a.scrollTo" ).each(function() {
            if(scrollTo == $(this).attr('data-scrollTo')){
              $(this).addClass('active');
            }else{
              $(this).removeClass('active');
            }
          });
          
          
          // animate and scroll to the sectin 
          $('body, html').animate({
            
            // the magic - scroll to section
            "scrollTop": $('#'+scrollTo).offset().top
          }, 1000 );
          return false;
          
        })
 

        $(".menu-icon").click(function() {
          $(this).toggleClass("active");
          $(".overlay-menu").toggleClass("open");
        });


});

