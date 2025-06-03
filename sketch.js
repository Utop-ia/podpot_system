const sistema_p = {
  rettangolo: {
    x: 0,
    y: 0,
    w: 5,
    h: 9,
  },
  cerchio: {
    x: 5,
    y: 4,
    r: 4,
  },
};

const sistema_o = {
  rettangolo: {
    x: 0,
    y: 0,
    w: 9,
    h: 9,
  },
  cerchio: {
    x: 4.5,
    y: 4.5,
    r: 4.5,
  },
};

let sistema = {
  rettangolo: { ...sistema_p.rettangolo },
  cerchio: { ...sistema_p.cerchio },
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  let tl = gsap.timeline({ repeat: -1, yoyo: true });

  // Tween ogni singola proprietà
  tl.to(
    sistema.rettangolo,
    {
      x: sistema_o.rettangolo.x,
      y: sistema_o.rettangolo.y,
      w: sistema_o.rettangolo.w,
      h: sistema_o.rettangolo.h,
      duration: 4,
      ease: "power1.inOut",
    },
    0
  );

  tl.to(
    sistema.cerchio,
    {
      x: sistema_o.cerchio.x,
      y: sistema_o.cerchio.y,
      r: sistema_o.cerchio.r,
      duration: 4,
      ease: "power1.inOut",
    },
    0
  );
}

function draw() {
  background("red");
  const s = 100;

  rect(
    sistema.rettangolo.x * s,
    sistema.rettangolo.y * s,
    sistema.rettangolo.w * s,
    sistema.rettangolo.h * s
  );

  // opzionale: anche il cerchio
  ellipse(
    sistema.cerchio.x * s,
    sistema.cerchio.y * s,
    sistema.cerchio.r * 2 * s
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
