const startAnimations = () => {
  const tl = gsap.timeline();

  tl.from("nav", {
    y: "-100%",
    delay: 0.5,
    duration: 1,
    ease: "power3.out",
  })
    .from("#moving-container", {
      y: "100%",
      duration: 1,
      opacity: 0,
      ease: "power3.out",
    })
    .to("#page1 h1 span", {
      scale: 0,
      duration: 0.25,
      ease: "none",
    })
    .from("#page1 h1", {
      y: 50,
      opacity: 0,
      duration: 0.51,
      stagger: {
        amount: 0.5,
      },
    })
    .from("#page1 p span", {
      x: function (index, target, targets) {
        return index % 2 === 0 ? "-5vw" : "5vw";
      },
      opacity: 0,
      duration: 0.5,
      stagger: {
        amount: 0.5,
      },
    })
    .add(() => {
      tl.from("#page1 h1 span", {
        scale: 2,
        duration: 1,
        rotation: 360,
        ease: "none",
      }).to("#page1 h1 span", {
        scale: 1,
        duration: 1,
        rotation: 360,
        ease: "none",
      });
    });
};

startAnimations();
