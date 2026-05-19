/* =========================================================
   TinyStickman — procedural curvy-noodle stickman
   Adapted from the stickman.html canvas renderer
   ========================================================= */
class TinyStickman {
  constructor(canvas, mood) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.mood = mood;
    this.t = Math.random() * 100;
    // Use display dimensions if set (for HiDPI); else canvas pixel dims
    this.W = canvas._dispW || canvas.width;
    this.H = canvas._dispH || canvas.height;
    this.alive = true;
    this.color = '#2d3436';

    // Mouse tracking for eyes (relative to canvas)
    this.mouseX = this.W / 2;
    this.mouseY = 0;
    canvas.parentElement.addEventListener('mousemove', (e) => {
      const r = canvas.getBoundingClientRect();
      this.mouseX = e.clientX - r.left;
      this.mouseY = e.clientY - r.top;
    });

    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  drawCurvyLimb(x1, y1, x2, y2, bend, thickness) {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    const dx = x2 - x1, dy = y2 - y1;
    const dist = Math.hypot(dx, dy) || 1;
    const px = -dy / dist, py = dx / dist;
    const cpx = mx + px * bend * dist * 0.4;
    const cpy = my + py * bend * dist * 0.4;
    ctx.quadraticCurveTo(cpx, cpy, x2, y2);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = thickness;
    ctx.lineCap = 'round';
    ctx.stroke();
  }

  drawHead(x, y, r, scale, opts = {}) {
    const ctx = this.ctx;
    const t = this.t;
    const {
      eyeAngleL = null, eyeAngleR = null,
      blink: forceBlink = null,
      mouthOpen = null,
      eyeOYMul = -0.1,
      pupilMul = 1,
      eyeRMul = 1,
    } = opts;

    const thick = 25 * scale; // match stickman.html exactly

    // === Head: white fill, dark stroke @ thickness * 0.8 ===
    ctx.fillStyle = 'white';
    ctx.strokeStyle = this.color;
    ctx.lineWidth = thick * 0.8;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // === Blush ===
    ctx.fillStyle = 'rgba(255, 107, 107, 0.5)';
    ctx.beginPath();
    ctx.arc(x - r * 0.5, y + r * 0.2, r * 0.25, 0, Math.PI * 2);
    ctx.arc(x + r * 0.5, y + r * 0.2, r * 0.25, 0, Math.PI * 2);
    ctx.fill();

    // === Eyes ===
    const eyeRadius = r * 0.3 * eyeRMul;
    let pupilRadius = r * 0.12 * pupilMul;
    const eyeOffsetX = r * 0.35;
    const eyeOffsetY = r * eyeOYMul;

    const blink = forceBlink !== null ? forceBlink : (Math.sin(t * 0.5) > 0.95);

    if (blink) {
      // Closed eyes — straight horizontal lines
      ctx.strokeStyle = this.color;
      ctx.lineWidth = thick * 0.4;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(x - eyeOffsetX - eyeRadius, y + eyeOffsetY);
      ctx.lineTo(x - eyeOffsetX + eyeRadius, y + eyeOffsetY);
      ctx.moveTo(x + eyeOffsetX - eyeRadius, y + eyeOffsetY);
      ctx.lineTo(x + eyeOffsetX + eyeRadius, y + eyeOffsetY);
      ctx.stroke();
    } else {
      // White circles with same head outline
      ctx.fillStyle = 'white';
      ctx.strokeStyle = this.color;
      ctx.lineWidth = thick * 0.8;
      ctx.beginPath();
      ctx.arc(x - eyeOffsetX, y + eyeOffsetY, eyeRadius, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();
      ctx.beginPath();
      ctx.arc(x + eyeOffsetX, y + eyeOffsetY, eyeRadius, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();

      // Pupils — distance scales with mouse distance, like the original
      const lAng = eyeAngleL !== null ? eyeAngleL : Math.atan2(this.mouseY - (y + eyeOffsetY), this.mouseX - (x - eyeOffsetX));
      const rAng = eyeAngleR !== null ? eyeAngleR : Math.atan2(this.mouseY - (y + eyeOffsetY), this.mouseX - (x + eyeOffsetX));
      const distToMouse = Math.min(
        eyeRadius - pupilRadius - 2,
        Math.hypot(this.mouseX - x, this.mouseY - y) * 0.1
      );
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(x - eyeOffsetX + Math.cos(lAng) * distToMouse, y + eyeOffsetY + Math.sin(lAng) * distToMouse, pupilRadius, 0, Math.PI * 2);
      ctx.arc(x + eyeOffsetX + Math.cos(rAng) * distToMouse, y + eyeOffsetY + Math.sin(rAng) * distToMouse, pupilRadius, 0, Math.PI * 2);
      ctx.fill();
    }

    // === Mouth: dynamic bezier (matches stickman.html exactly) ===
    ctx.strokeStyle = this.color;
    ctx.lineWidth = thick * 0.4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    const mouthY = y + r * 0.4;
    const mouthWidth = r * 0.4;
    const openness = mouthOpen !== null ? mouthOpen * scale : Math.abs(Math.sin(t * 8)) * 30 * scale;
    ctx.moveTo(x - mouthWidth, mouthY);
    ctx.quadraticCurveTo(x, mouthY + (openness + 20 * scale), x + mouthWidth, mouthY);
    ctx.stroke();
  }

  drawShadow(cx, gy, w) {
    const ctx = this.ctx;
    ctx.fillStyle = 'rgba(0,0,0,0.12)';
    ctx.beginPath();
    ctx.ellipse(cx, gy, w, w * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  animate() {
    if (!this.alive) return;
    const ctx = this.ctx;
    const W = this.W, H = this.H;
    ctx.clearRect(0, 0, W, H);
    this.t += 0.05;
    const t = this.t;

    // Stickman proportions — match stickman.html exactly (head 120, body 250, arm 200, leg 250, thick 25)
    const scale = H / 740;
    const headR = 100 * scale;
    const bodyL = 210 * scale;
    const armL  = 170 * scale;
    const legL  = 210 * scale;
    const thick = 22 * scale;

    let cx = W / 2;
    let cy = H * 0.55;
    let headX = cx, headY = cy - bodyL / 2;
    let bodyX = cx, bodyY = cy + bodyL / 2;

    let lHandX, lHandY, rHandX, rHandY;
    let lFootX, lFootY, rFootX, rFootY;
    let lArmBend = 1, rArmBend = -1, lLegBend = -1, rLegBend = 1;
    let bounce = 0, sway = 0;
    let opts = {};
    let extras = null;
    const groundY = bodyY + legL;

    switch (this.mood) {

      case 'wiggle': {
        bounce = Math.sin(t * 2) * 6 * scale;
        sway = Math.cos(t) * 5 * scale;
        headY += bounce; headX += sway;
        bodyX += sway * 0.5;
        lHandX = headX - armL + Math.sin(t * 3) * 8 * scale;
        lHandY = headY + 30 * scale + Math.cos(t * 3) * 8 * scale;
        rHandX = headX + armL + Math.sin(t * 3 + Math.PI) * 8 * scale;
        rHandY = headY + 30 * scale + Math.cos(t * 3 + Math.PI) * 8 * scale;
        lFootX = bodyX - 30 * scale; lFootY = groundY;
        rFootX = bodyX + 30 * scale; rFootY = groundY;
        opts.mouthOpen = Math.sin(t * 4) * 20; // Singing/Happy
        break;
      }

      case 'wave': {
        bounce = Math.sin(t * 2.5) * 4 * scale;
        headY += bounce;
        const wavePhase = Math.sin(t * 5);
        rHandX = headX + armL * 0.9 + wavePhase * 25 * scale;
        rHandY = headY - armL * 0.5;
        rArmBend = -1.2;
        lHandX = headX - armL * 0.7;
        lHandY = headY + armL * 0.4;
        lArmBend = 0.8;
        lFootX = bodyX - 30 * scale; lFootY = groundY;
        rFootX = bodyX + 30 * scale; rFootY = groundY;
        opts.mouthOpen = 25; // Yeehaw smile
        break;
      }

      case 'jump': {
        const phase = (t * 2.5) % (Math.PI * 2);
        bounce = -Math.max(0, Math.sin(phase)) * 50 * scale;
        const open = Math.max(0, Math.sin(phase));
        headY += bounce;
        bodyY += bounce;
        lHandX = headX - armL * (0.7 + open * 0.5);
        lHandY = headY - (open * 60 - 20) * scale;
        rHandX = headX + armL * (0.7 + open * 0.5);
        rHandY = headY - (open * 60 - 20) * scale;
        lArmBend = -0.8; rArmBend = 0.8;
        lFootX = bodyX - (30 + open * 30) * scale;
        lFootY = groundY + bounce + 20 * scale * open;
        rFootX = bodyX + (30 + open * 30) * scale;
        rFootY = groundY + bounce + 20 * scale * open;
        lLegBend = -0.6; rLegBend = 0.6;
        opts.mouthOpen = 30 + open * 20; // big jumping grin
        break;
      }

      case 'meditate': {
        bounce = Math.sin(t * 0.8) * 2 * scale;
        headY += bounce;
        lHandX = bodyX - 50 * scale;
        lHandY = bodyY + 10 * scale;
        rHandX = bodyX + 50 * scale;
        rHandY = bodyY + 10 * scale;
        lArmBend = -0.4; rArmBend = 0.4;
        lFootX = bodyX - 60 * scale; lFootY = bodyY + 50 * scale;
        rFootX = bodyX + 60 * scale; rFootY = bodyY + 50 * scale;
        lLegBend = 1.2; rLegBend = -1.2;
        opts.blink = true;
        opts.mouthOpen = -10; // Serene smile
        extras = (ctx) => {
          ctx.strokeStyle = '#ffd166';
          ctx.lineWidth = 3 * scale;
          ctx.beginPath();
          ctx.ellipse(headX, headY - headR - 6 * scale, headR * 0.9, headR * 0.25, 0, 0, Math.PI * 2);
          ctx.stroke();
        };
        break;
      }

      case 'disco': {
        sway = Math.sin(t * 4) * 12 * scale;
        bounce = Math.abs(Math.sin(t * 4)) * 6 * scale;
        bodyX += sway;
        headY -= bounce;
        const pointUp = Math.sin(t * 4) > 0;
        rHandX = headX + (pointUp ? armL * 0.8 : armL * 0.3);
        rHandY = headY - (pointUp ? armL * 1.0 : -armL * 0.4);
        lHandX = headX - (pointUp ? armL * 0.3 : armL * 0.8);
        lHandY = headY + (pointUp ? armL * 0.4 : -armL * 1.0);
        lArmBend = pointUp ? 0.4 : -0.6; rArmBend = pointUp ? -0.6 : 0.4;
        lFootX = bodyX - 25 * scale + Math.sin(t * 4) * 15 * scale;
        lFootY = groundY;
        rFootX = bodyX + 25 * scale + Math.sin(t * 4) * 15 * scale;
        rFootY = groundY;
        opts.mouthOpen = (Math.floor(t * 3) % 2 === 0) ? 20 : -5; // Singing to the beat
        break;
      }

      case 'eat': {
        bounce = Math.sin(t * 2) * 3 * scale;
        headY += bounce;
        const eatPhase = (Math.sin(t * 2) + 1) / 2;
        rHandX = headX + armL * 0.4 - eatPhase * 30 * scale;
        rHandY = headY - eatPhase * 20 * scale + (1 - eatPhase) * 30 * scale;
        rArmBend = -1.2;
        lHandX = headX - armL * 0.7; lHandY = headY + armL * 0.5;
        lArmBend = 0.6;
        lFootX = bodyX - 30 * scale; lFootY = groundY;
        rFootX = bodyX + 30 * scale; rFootY = groundY;
        opts.mouthOpen = (Math.sin(t * 12) > 0) ? 30 : 0; // Fast chomping
        // Sandwich in hand
        extras = (ctx) => {
          const sx = rHandX, sy = rHandY;
          const sw = 22 * scale;
          // Bun top
          ctx.fillStyle = '#E8B87A';
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 2 * scale;
          ctx.beginPath();
          ctx.ellipse(sx, sy - sw * 0.3, sw, sw * 0.5, 0, Math.PI, 0);
          ctx.fill(); ctx.stroke();
          // Chicken
          ctx.fillStyle = '#C97A3F';
          ctx.beginPath();
          ctx.ellipse(sx, sy + sw * 0.05, sw * 1.05, sw * 0.25, 0, 0, Math.PI * 2);
          ctx.fill(); ctx.stroke();
          // Bun bottom
          ctx.fillStyle = '#E8B87A';
          ctx.beginPath();
          ctx.ellipse(sx, sy + sw * 0.35, sw, sw * 0.4, 0, 0, Math.PI);
          ctx.fill(); ctx.stroke();
        };
        break;
      }

      case 'lift': {
        // Holds a heart up
        bounce = Math.abs(Math.sin(t * 2)) * 6 * scale;
        headY -= bounce;
        bodyY -= bounce * 0.5;
        rHandX = headX + 30 * scale;
        rHandY = headY - armL * 0.95 - bounce;
        lHandX = headX - 30 * scale;
        lHandY = headY - armL * 0.95 - bounce;
        lArmBend = -0.5; rArmBend = 0.5;
        lFootX = bodyX - 35 * scale; lFootY = groundY;
        rFootX = bodyX + 35 * scale; rFootY = groundY;
        opts.mouthOpen = 25; // big smile
        // Heart between hands
        extras = (ctx) => {
          const hx = headX, hy = headY - armL * 0.95 - bounce - 10 * scale;
          const s = 16 * scale;
          ctx.fillStyle = '#DD0031';
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 2 * scale;
          ctx.beginPath();
          ctx.moveTo(hx, hy + s);
          ctx.bezierCurveTo(hx - s, hy + s * 0.4, hx - s * 1.2, hy - s * 0.4, hx, hy - s * 0.2);
          ctx.bezierCurveTo(hx + s * 1.2, hy - s * 0.4, hx + s, hy + s * 0.4, hx, hy + s);
          ctx.closePath();
          ctx.fill(); ctx.stroke();
        };
        break;
      }

      case 'zen': {
        // Holds a plant
        bounce = Math.sin(t * 1.2) * 3 * scale;
        headY += bounce;
        rHandX = headX + 25 * scale;
        rHandY = headY + armL * 0.4;
        lHandX = headX - 25 * scale;
        lHandY = headY + armL * 0.4;
        lArmBend = 0.8; rArmBend = -0.8;
        lFootX = bodyX - 30 * scale; lFootY = groundY;
        rFootX = bodyX + 30 * scale; rFootY = groundY;
        opts.mouthOpen = -10; // Happy plant smile
        // Plant in hands
        extras = (ctx) => {
          const px = headX, py = headY + armL * 0.4 + 5 * scale;
          const s = 14 * scale;
          // Pot
          ctx.fillStyle = '#A66640';
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 2 * scale;
          ctx.beginPath();
          ctx.moveTo(px - s, py); ctx.lineTo(px + s, py);
          ctx.lineTo(px + s * 0.85, py + s * 0.7); ctx.lineTo(px - s * 0.85, py + s * 0.7);
          ctx.closePath();
          ctx.fill(); ctx.stroke();
          // Leaves
          ctx.fillStyle = '#3DAA5C';
          ctx.beginPath();
          ctx.ellipse(px - s * 0.4, py - s * 0.2, s * 0.5, s * 0.25, -0.5, 0, Math.PI * 2);
          ctx.ellipse(px + s * 0.4, py - s * 0.3, s * 0.5, s * 0.25, 0.5, 0, Math.PI * 2);
          ctx.ellipse(px, py - s * 0.7, s * 0.55, s * 0.3, 0, 0, Math.PI * 2);
          ctx.fill(); ctx.stroke();
          // Stem
          ctx.strokeStyle = '#3DAA5C';
          ctx.lineWidth = 2 * scale;
          ctx.beginPath();
          ctx.moveTo(px, py); ctx.lineTo(px, py - s * 0.4);
          ctx.stroke();
        };
        break;
      }

      case 'run': {
        // Running in place, leans forward
        bounce = Math.abs(Math.sin(t * 8)) * 4 * scale;
        const stride = Math.sin(t * 8);
        headY += bounce; headX += 4 * scale;
        bodyY += bounce;
        lHandX = headX - 20 * scale - stride * 35 * scale;
        lHandY = headY + armL * 0.3 + Math.abs(stride) * 15 * scale;
        rHandX = headX + 20 * scale + stride * 35 * scale;
        rHandY = headY + armL * 0.3 - Math.abs(stride) * 15 * scale;
        lArmBend = -1; rArmBend = 1;
        lFootX = bodyX - 5 * scale + stride * 50 * scale;
        lFootY = groundY - Math.max(0, -stride) * 30 * scale;
        rFootX = bodyX + 5 * scale - stride * 50 * scale;
        rFootY = groundY - Math.max(0, stride) * 30 * scale;
        lLegBend = -0.8; rLegBend = 0.8;
        opts.mouthOpen = 20 + Math.sin(t * 8) * 10; // Panting while running
        break;
      }

      case 'read': {
        // Hold a book in front
        bounce = Math.sin(t * 1.6) * 2 * scale;
        headY += bounce;
        // Reading — eyes track left to right
        const readProgress = (Math.sin(t * 3) + 1) / 2;
        opts.eyeAngleL = opts.eyeAngleR = Math.PI / 4 + readProgress * (Math.PI / 2);
        rHandX = headX + 30 * scale;
        rHandY = headY + armL * 0.5;
        lHandX = headX - 30 * scale;
        lHandY = headY + armL * 0.5;
        lArmBend = 0.4; rArmBend = -0.4;
        lFootX = bodyX - 30 * scale; lFootY = groundY;
        rFootX = bodyX + 30 * scale; rFootY = groundY;
        opts.mouthOpen = -5; // focused mouth
        // Book
        extras = (ctx) => {
          const bx = headX, by = headY + armL * 0.55;
          const bw = 30 * scale, bh = 22 * scale;
          ctx.fillStyle = '#DD0031';
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 2 * scale;
          ctx.beginPath();
          ctx.rect(bx - bw, by - bh / 2, bw * 2, bh);
          ctx.fill(); ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(bx, by - bh / 2); ctx.lineTo(bx, by + bh / 2);
          ctx.stroke();
        };
        break;
      }

      default: {
        // Fallback: noodle jig
        bounce = Math.sin(t * 2) * 6 * scale;
        sway = Math.cos(t) * 5 * scale;
        headY += bounce; headX += sway;
        bodyX += sway * 0.5;
        lHandX = headX - armL; lHandY = headY + 30 * scale;
        rHandX = headX + armL; rHandY = headY + 30 * scale;
        lFootX = bodyX - 30 * scale; lFootY = groundY;
        rFootX = bodyX + 30 * scale; rFootY = groundY;
      }
    }

    // Shadow
    this.drawShadow(cx, groundY + 4 * scale, 50 * scale - bounce * 0.5);

    // Legs
    this.drawCurvyLimb(bodyX, bodyY, lFootX, lFootY, lLegBend, thick);
    this.drawCurvyLimb(bodyX, bodyY, rFootX, rFootY, rLegBend, thick);

    // Arms
    const shoulderY = headY + headR * 0.8;
    this.drawCurvyLimb(headX, shoulderY, lHandX, lHandY, lArmBend, thick);
    this.drawCurvyLimb(headX, shoulderY, rHandX, rHandY, rArmBend, thick);

    // Torso (curvy for squish)
    const torsoStartY = headY + headR * 0.5;
    this.drawCurvyLimb(headX, torsoStartY, bodyX, bodyY, Math.sin(t) * 0.3, thick * 1.2);

    // Head
    this.drawHead(headX, headY, headR, scale, opts);

    // Extras (sandwich, heart, plant, book, halo)
    if (extras) extras(ctx);

    requestAnimationFrame(this.animate);
  }

  destroy() { this.alive = false; }
}

window.TinyStickman = TinyStickman;
