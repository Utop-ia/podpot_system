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

const sistema_d = {
  rettangolo: {
    x: 0,
    y: 0,
    w: 4.5,
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
  let tl = gsap.timeline({ repeat: -1, yoyo: false });

  // Tween ogni singola proprietà (lettera da P a O)
  tl.to(
    sistema.rettangolo,
    { ...sistema_o.rettangolo, duration: 4, ease: "power1.inOut" },
    0
  );

  tl.to(
    sistema.cerchio,
    { ...sistema_o.cerchio, duration: 4, ease: "power1.inOut" },
    0
  );
  // // Tween ogni singola proprietà (lettera da O a D)
  tl.to(
    sistema.rettangolo,
    { ...sistema_d.rettangolo, duration: 4, ease: "power1.inOut" },
    4
  );

  tl.to(
    sistema.cerchio,
    { ...sistema_d.cerchio, duration: 4, ease: "power1.inOut" },
    4
  );
  // // Tween ogni singola proprietà (lettera da D a P)
  tl.to(
    sistema.rettangolo,
    { ...sistema_p.rettangolo, duration: 2, ease: "power1.inOut" },
    8
  );

  tl.to(
    sistema.cerchio,
    { ...sistema_p.cerchio, duration: 2, ease: "power1.inOut" },
    8
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
