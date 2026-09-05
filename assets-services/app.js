
function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

gsap.registerPlugin(ScrollTrigger);

if (!isMobileDevice()) {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
} else {
  document.body.classList.add('no-lenis');
}

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

//Start Animation
var tl = gsap.timeline({ defaults: { duration: 0.25, ease: "power1.out" } });

tl.to(".overlay", 1, {
  delay: 0,
  y: "-100%",
  ease: Expo.easeInOut
})

tl.add([
  gsap.from('.load-animated', {
    opacity: 0,
    y: -100,
    willChange: "transform",
    duration: 1,
  }),
  gsap.from('.start .caption span', {
    opacity: 0,
    y: 200,
    willChange: "transform",
    duration: 1,
  }),
]);


mm.add("(min-width: 1024px)", () => {

  // Video
  document.addEventListener("DOMContentLoaded", function () {
    const playReelButton = document.getElementById("play-reel");
    const closeReelButton = document.getElementById("close-reel");
    const videoContainer = document.querySelector(".video");
    const caption = document.querySelector(".start .caption");
    const videoReel = document.querySelector(".video-reel");

    // Lenis instance burada global olmalı
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    let tl = gsap.timeline({
      paused: true,
      onStart: () => {
        lenis.stop(); // Scroll'u durdur
        videoContainer.classList.add("fullscreen");
      }
    });

    tl.set(videoContainer, { position: "absolute" })
      .to(videoContainer, {
        width: "100%",
        height: "-webkit-fill-available",
        duration: 0.5,
        ease: "cubic-bezier(0.25, 0.8, 0.25, 1)"
      }, 0)
      .to(caption, {
        opacity: 0,
        duration: 0.3,
        ease: "cubic-bezier(0.25, 0.8, 0.25, 1)",
        onComplete: () => caption.style.visibility = "hidden"
      }, 0)
      .to(videoReel, {
        opacity: 1,
        duration: 0.5,
        ease: "cubic-bezier(0.25, 0.8, 0.25, 1)",
      }, 0);

    playReelButton.addEventListener("click", function () {
      tl.play();
    });

    closeReelButton.addEventListener("click", function () {
      tl.reverse().then(() => {
        videoContainer.classList.remove("fullscreen");
        caption.style.visibility = "visible";
        lenis.start(); // Scroll'u yeniden başlat
      });
    });
  });

  //Fadeup
  const fadeupAnimated = gsap.utils.toArray('.fadeUp');
  fadeupAnimated.forEach((box, i) => {
    const anim = gsap.fromTo(box, { autoAlpha: 0, y: 150 }, { duration: 1, autoAlpha: 1, y: 0 });
    ScrollTrigger.create({
      trigger: box,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  });


    //TextScale
    const textScale = gsap.utils.toArray('.textScale');
    textScale.forEach((box, i) => {
      const anim = gsap.fromTo(box, { }, { duration: 1, scale: .7 });
      ScrollTrigger.create({
        trigger: box,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
      });
    });

  //Numbers
  $(".number").each(function (index, element) {

    var count = $(this),
      zero = { val: 0 },
      num = count.data("number"),
      split = (num + "").split("."),
      decimals = split.length > 1 ? split[1].length : 0;

    if (typeof num == 'string') {
      num = parseInt(num.split(',').join(''))
    }

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    gsap.to(zero, {
      val: num,
      duration: 2,
      scrollTrigger: element,
      onUpdate: function () {
        count.text(numberWithCommas(zero.val.toFixed(decimals)));
      },
      onComplete: function () {
        count.text(numberWithCommas(zero.val.toFixed(decimals)) + "");
      }
    });
  });

  $(".degree").each(function (index, element) {

    var count = $(this),
      zero = { val: 0 },
      num = count.data("degree"),
      split = (num + "").split("."),
      decimals = split.length > 1 ? split[1].length : 0;
  
    if (typeof num == 'string') {
      num = parseInt(num.split(',').join(''))
    }
  
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  
    gsap.to(zero, {
      val: num,
      duration: 2,
      scrollTrigger: element,
      onUpdate: function () {
        count.text(numberWithCommas(zero.val.toFixed(decimals)) + "°");
      },
      onComplete: function () {
        count.text(numberWithCommas(zero.val.toFixed(decimals)) + "°");
      }
    });
  });

  //Logos
  gsap.set('.logos .item img', {
    autoAlpha: 0,
    y: 50,
    willChange: "transform",
  });

  ScrollTrigger.batch('.logos .item', {
    onEnter: batch => {
      batch.forEach((card, index) => {
        gsap.to(card.children, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.8,
          delay: index * 0.2,
          willChange: "transform",
        });
      });
    },
    once: true,
    ease: 'expo.inOut',
  });

  //Brands Items
  var boxes = gsap.utils.toArray(".brands");
  boxes.forEach(box => {
    gsap.from(box.querySelectorAll('.brands .items .item'), {
      autoAlpha: 0,
      ease: "power2.out",
      stagger: 4,
      duration: 6,
      // y: '40rem',
      x: '40rem',
      scrollTrigger: {
        trigger: box,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
      }
    });
  });

  //Pin ımages
  var boxes = gsap.utils.toArray(".pin-images");
  boxes.forEach(box => {
    gsap.from(box.querySelectorAll('.pin-images .images img'), {
      // autoAlpha: 0,
      scale: .5,
      ease: "power2.out",
      stagger: 1,
      duration: 6,
      y: '140rem',
      scrollTrigger: {
        trigger: box,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        //markers: true,
      }
    });
  });

  if (window.location.hash) {
    scrollToHash(window.location.hash);
  }
  
  const cursorSmall = document.querySelector(".cursor-small");
  const cursorBig = document.querySelector(".cursor-big");
  
  let scale = 1;
  
  function mousemoveHandler(e) {
      const target = e.target;
      const tl = gsap.timeline({
          defaults: {
              x: e.clientX,
              y: e.clientY,
              ease: "power2.out"
          }
      });
  
      if (target.closest("a")) {
          // Eğer bir <a> href üzerinde isek, cursorBig kaybolacak.
          tl.to(cursorBig, { opacity: 0 });
      } else if (target.closest(".cursor-hover")) {
          tl.to(cursorSmall, { opacity: 0 })
              .to(cursorBig, { opacity: 1 }, "-=0.5");
      } else {
          if (target.classList.contains("cursor-hover")) {
              scale = 4;
          } else {
              scale = 1;
          }
  
          tl.to(cursorSmall, { opacity: 1, scale: scale })
              .to(cursorBig, { opacity: 0 }, "-=0.5");
      }
  }
  
  function mouseleaveHandler() {
      gsap.to(cursorSmall, { opacity: 0 });
  }
  
  document.addEventListener("mousemove", mousemoveHandler);
  document.addEventListener("mouseleave", mouseleaveHandler);
  
  function getSamePageAnchor(link) {
    if (
      link.protocol !== window.location.protocol ||
      link.host !== window.location.host ||
      link.pathname !== window.location.pathname ||
      link.search !== window.location.search
    ) {
      return false;
    }
  
    return link.hash;
  }

});


//Marquee Slide
gsap.utils.toArray('.marquee').forEach((line, i) => {
  const links = line.querySelectorAll(".item"),
    tl = horizontalLoop(links, {
      repeat: -1,
      speed: 1 + i * 0.5,
      reversed: i ? true : false,
      paddingRight: parseFloat(gsap.getProperty(links[0], "marginRight", "px")) // otherwise first element would be right up against the last when it loops. In this layout, the spacing is done with marginRight.
    });
  // links.forEach(link => {
  // 	link.addEventListener("mouseenter", () => gsap.to(tl, { timeScale: 0, overwrite: true }));
  // 	link.addEventListener("mouseleave", () => gsap.to(tl, { timeScale: i ? -1 : 1, overwrite: true }));
  // });
});



function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    totalWidth, curX, distanceToStart, distanceToLoop, item, i;
  gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
      xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
      return xPercents[i];
    }
  });
  gsap.set(items, { x: 0 });
  totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = xPercents[i] / 100 * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
      .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = vars => toIndex(curIndex + 1, vars);
  tl.previous = vars => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}


//Awards
function getRandomChar(char) {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZÇĞİÖŞÜ";
  const lowercase = "abcdefghijklmnopqrstuvwxyzçğıöşü";
  const numbers = "0123456789";
  if (numbers.includes(char)) {
    return numbers[Math.floor(Math.random() * numbers.length)];
  } else if (uppercase.includes(char)) {
    return uppercase[Math.floor(Math.random() * uppercase.length)];
  } else if (lowercase.includes(char)) {
    return lowercase[Math.floor(Math.random() * lowercase.length)];
  } else {
    return char;
  }
}

const originalTexts = new Map();

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".awards-list li span").forEach((span) => {
    originalTexts.set(span, span.textContent);
  });
});

function scrambleText(span, duration = 500, interval = 40) {
  if (!originalTexts.has(span)) {
    originalTexts.set(span, span.textContent);
  }
  const originalText = originalTexts.get(span);

  let elapsed = 0;
  const scrambleInterval = setInterval(() => {
    let scrambled = "";
    for (let char of originalText) {
      scrambled += getRandomChar(char);
    }
    span.textContent = scrambled;
    elapsed += interval;
    if (elapsed >= duration) {
      clearInterval(scrambleInterval);
      span.textContent = originalText;
    }
  }, interval);

  return scrambleInterval;
}

document.querySelectorAll(".awards-list li").forEach((li) => {
  let intervals = [];

  li.addEventListener("mouseenter", () => {
    intervals.forEach(clearInterval);
    intervals = [];

    li.querySelectorAll("span").forEach((span) => {
      const interval = scrambleText(span);
      intervals.push(interval);
    });
  });

  li.addEventListener("mouseleave", () => {
    intervals.forEach(clearInterval);
    intervals = [];

    li.querySelectorAll("span").forEach((span) => {
      span.textContent = originalTexts.get(span);
    });
  });
});