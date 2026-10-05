/**
 * Dredge: a crawler crane on a bank beside a pond, its boom reaching over the
 * water, a crate of code hanging from the hook. The pointer's height is how
 * far the crate has been winched out: at the water line it is sunk to its lid,
 * at the boom tip it swings clear. The crate takes the bright stroke once its
 * base clears the water; until then the hook block holds it. A ripple on the
 * water marks where the crate is while it is in. The slider is the hoist, in
 * world units: how high the crate can be lifted.
 *
 * The pattern: a continuous field of one. A spring on the hoist, the pointer
 * read against a fixed band of the screen, a rest with the crate half out.
 */
const {
  Cam, clamp, facing, fit, hull, open, poly, prism, proj, ringAt, rings, rrect, run, seg,
  spring, stepS, disposer, flatDot, mk, place, pointer, put, register, solid,
} = HL;

const PL = [0, 0, 128, 96], PB = 5;
const POND = [66, 14, 118, 62], CX = 92, CY = 38;
const CRATE = [82, 28, 102, 48], CH = 14, SUNK = 10;
const TIP = [92, 38, 72], BOOT = [20, 62, 28, 70];
const HOOK = 5, REST = 9;

/** A solid whose top ring sits elsewhere than its foot: the boom, the cab. Returns prism's shape. */
function lean(P, front, foot, top, inner, z0, z1) {
  return {
    sil: poly(hull(ringAt(P, foot, z0).concat(ringAt(P, top, z1)))),
    crease: open(ringAt(P, run(inner, front), z1)),
  };
}

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  const C = Cam(45, 0.5, 1.9);
  let MAX = value, u = null;
  fit(C, [[-4, -4, -PB], [PL[2] + 4, PL[3] + 4, -PB], [PL[2] + 4, -4, -PB], [-4, PL[3] + 4, -PB], [TIP[0], TIP[1], TIP[2] + 2]], 200, 162);
  const P = proj(C), front = facing(C);

  const g = mk("g", {}, svg);

  // the bank, then the pond's edge lying on it
  const [pr, pi] = rings(PL[0], PL[1], PL[2], PL[3], 10, 2.2);
  put(solid(g), prism(P, front, pr, pi, -PB, 0));
  const [pond] = rings(POND[0], POND[1], POND[2], POND[3], 9, 1);
  mk("path", { d: poly(ringAt(P, pond, 0)), class: "nf" }, g);

  // the crane: two tracks, a platform, a cab that tapers, a boom leaning out over the water
  const [t1, t1i] = rings(8, 54, 52, 60, 2.4, 0.8);
  put(solid(g), prism(P, front, t1, t1i, 0, 6));
  const [t2, t2i] = rings(8, 72, 52, 78, 2.4, 0.8);
  put(solid(g), prism(P, front, t2, t2i, 0, 6));
  const [pf, pfi] = rings(12, 57, 46, 75, 3, 1.2);
  put(solid(g), prism(P, front, pf, pfi, 6, 10));
  const cabFoot = rrect(14, 59, 34, 73, 3, 4), cabTop = rrect(16, 61, 32, 71, 2.5, 4), cabIn = rrect(17.2, 62.2, 30.8, 69.8, 1.6, 4);
  put(solid(g), lean(P, front, cabFoot, cabTop, cabIn, 10, 26));
  // the windscreen: a dim line across the cab's face the water side, as a cab would have
  mk("path", { d: seg(P(32, 62, 22), P(32, 70, 22)), class: "nf lo" }, g);

  // the ripple, painted before the crate so the crate's base covers its far side
  const [rip] = rings(CRATE[0] - 4, CRATE[1] - 4, CRATE[2] + 4, CRATE[3] + 4, 5, 1);
  const ripple = mk("path", { d: poly(ringAt(P, rip, 0)), class: "nf dash" }, g);

  // the crate: a rounded box, drawn only from the water line up, with a dot code on its lid
  const [cr, cri] = rings(CRATE[0], CRATE[1], CRATE[2], CRATE[3], 2.5, 1);
  const crate = solid(g);
  const code = [[-3, -3], [3, -3], [-3, 3], [3, 3]].map(([dx, dy], k) => ({ dx, dy, el: flatDot(g, C, 0.7, k === 1 ? "dot off" : "dot m") }));

  // the cable, the hook block, and the boom, painted last: all of it hangs above the rest
  const cable = mk("path", { d: "", class: "nf lo" }, g);
  const [hk, hki] = rings(CX - 3, CY - 3, CX + 3, CY + 3, 1.2, 0.6);
  const hook = solid(g);
  const boot = rrect(BOOT[0], BOOT[1], BOOT[2], BOOT[3], 1.6, 4);
  const tip = rrect(TIP[0] - 2.2, TIP[1] - 2.2, TIP[0] + 2.2, TIP[1] + 2.2, 1, 4);
  const tipIn = rrect(TIP[0] - 1.6, TIP[1] - 1.6, TIP[0] + 1.6, TIP[1] + 1.6, 0.6, 4);
  put(solid(g), lean(P, front, boot, tip, tipIn, 26, TIP[2]));

  const sp = spring(REST, { eps: 0.02 });
  let drawn = NaN;

  function draw() {
    const h = sp.x;
    if (h === drawn) return;
    drawn = h;
    const zb = h - SUNK, zt = zb + CH, wet = zb < 0;
    put(crate, prism(P, front, cr, cri, Math.max(zb, 0), zt));
    crate.sil.classList.toggle("hi", !wet);
    hook.sil.classList.toggle("hi", wet);
    ripple.setAttribute("d", wet ? poly(ringAt(P, rip, 0)) : "");
    code.forEach((d) => place(d.el, P(CX + d.dx, CY + d.dy, zt)));
    put(hook, prism(P, front, hk, hki, zt + 1.5, zt + 1.5 + HOOK));
    cable.setAttribute("d", seg(P(CX, CY, TIP[2]), P(CX, CY, zt + 1.5 + HOOK)));
  }

  const B = register(stage, (dt) => {
    const m = stepS(sp, dt);
    draw();
    return m;
  });
  bag.add(B.unregister);

  // the pointer's height, read on a fixed band of the screen: from the water line up to the boom tip
  const yLow = P(CX, CY, 0)[1], yHigh = P(CX, CY, TIP[2])[1];
  function hoist() {
    sp.t = u === null ? REST : u * MAX;
    read.textContent = u === null ? "rest" : `up ${Math.round(u * 100)}`;
    B.wake();
  }

  bag.add(pointer(stage, {
    move: (p) => { u = clamp((yLow - p[1]) / (yLow - yHigh), 0, 1); hoist(); },
    leave: () => { u = null; hoist(); },
  }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { MAX = v; hoist(); },
    destroy: bag.dispose,
  };
}

hairline({
  name: "dredge",
  means: "A crawler crane winches a crate of code out of the water as the pointer rises.",
  rules: [1, 3, 5, 6, 9],
  range: [30, 42, 54],
  mount,
});
