(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,48385,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(73330),s=e.i(60441),a=e.i(73743),o=e.i(42510),n=e.i(51806),l=e.i(27569),c=e.i(1569),u=e.i(87984),h=e.i(95336),d=e.i(91315),m=e.i(25774),f=e.i(89970),p=e.i(83495),x=e.i(39362);e.s(["default",0,function(){return(0,o.useEagerImages)(!0),(0,h.useReveals)(!0),(0,m.useVideos)(!0),(0,l.useHoverFx)(!0),(0,c.useMenu)(!0),(0,u.useNavLogo)(!0),(0,n.useHero)(!0),(0,d.useSmoother)(!0,!1),(0,i.useEffect)(()=>{0;(0,x.registerGsap)();let e=[...document.querySelectorAll("[data-fondo]")];if(!e.length)return;let t=document.documentElement,i=[],r=e=>{f.gsap.to(t,{"--fondo":e.dataset.fondo,"--tinta":e.dataset.tinta,duration:.5,ease:"power2.out",overwrite:!0})};return e.forEach(e=>{i.push(p.ScrollTrigger.create({trigger:e,start:"top 50%",end:"bottom 50%",onEnter:()=>r(e),onEnterBack:()=>r(e)}))}),r(e[0]),()=>{i.forEach(e=>e.kill())}},[!0]),(0,i.useEffect)(()=>{0;(0,x.registerGsap)();let e=document.querySelector(".section.negacion");if(!e)return;let t=[...e.querySelectorAll(".trazo")];if(!t.length)return;let i=f.gsap.fromTo(t,{scaleX:0},{scaleX:1,ease:"none",transformOrigin:"0% 50%",stagger:.35,scrollTrigger:{trigger:e,start:"top 62%",end:"center 45%",scrub:.6}});return()=>{i.scrollTrigger?.kill(),i.kill(),f.gsap.set(t,{clearProps:"all"})}},[!0]),(0,i.useEffect)(()=>{0;(0,x.registerGsap)();let e=document.querySelector(".pila-w"),t=e?[...e.querySelectorAll(".pila-carta")]:[];if(!e||!t.length)return;if(!window.matchMedia("(min-width: 992px)").matches){let i=f.gsap.fromTo(t,{autoAlpha:0,y:34},{autoAlpha:1,y:0,duration:.6,ease:"power3.out",stagger:.09,scrollTrigger:{trigger:e,start:"top 80%",once:!0}});return()=>{i.scrollTrigger?.kill(),i.kill()}}let i=f.gsap.timeline({scrollTrigger:{trigger:e,start:"top top",end:"+=140%",pin:e,pinSpacing:!0,scrub:.8,invalidateOnRefresh:!0,refreshPriority:3}});return t.forEach((e,t)=>{f.gsap.set(e,{zIndex:t+1}),i.fromTo(e,{y:8*t,x:4*t,rotate:(t-2)*.6,autoAlpha:0===t?1:.06},{y:140*t,x:18*t,rotate:0,autoAlpha:1,ease:"power2.out"},.12*t)}),()=>{i.scrollTrigger?.kill(),i.kill(),f.gsap.set(t,{clearProps:"all"})}},[!0]),(0,i.useEffect)(()=>{0;(0,x.registerGsap)();let e=document.querySelector(".section.proceso"),t=e?.querySelector(".proceso-carril");if(!e||!t||!window.matchMedia("(min-width: 992px)").matches)return;let i=()=>t.scrollWidth-t.parentElement.clientWidth;if(0>=i())return;let r=f.gsap.to(t,{x:()=>-i(),ease:"none",scrollTrigger:{trigger:e,start:"top top",end:()=>`+=${i()+.5*window.innerHeight}`,pin:!0,scrub:.7,invalidateOnRefresh:!0,refreshPriority:2}});return()=>{r.scrollTrigger?.kill(),r.kill(),f.gsap.set(t,{clearProps:"all"})}},[!0]),(0,i.useEffect)(()=>{0;(0,x.registerGsap)();let e=document.querySelector(".precio-rodillo");if(!e)return;let t=e.dataset.precio??"997",i=[...e.querySelectorAll(".rodillo")];if(i.length!==t.length)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return void i.forEach((e,i)=>{e.textContent=t[i]});let r={p:0},s=()=>{i.forEach((e,i)=>{e.textContent=(r.p-.22*i)/.34>=1?t[i]:"0123456789"[Math.floor(10*Math.random())]})};s();let a=f.gsap.to(r,{p:1.2,ease:"none",onUpdate:s,scrollTrigger:{trigger:e,start:"top 88%",end:"top 34%",scrub:.5}});return()=>{a.scrollTrigger?.kill(),a.kill()}},[!0]),(0,i.useEffect)(()=>{(0,h.playIntroReveals)()},[]),(0,t.jsxs)("div",{className:"webs",children:[(0,t.jsx)(r.Nav,{cta:{texto:"Cuéntanos tu caso",href:a.enlaces.email,evento:"webs_contacto"}}),(0,t.jsx)(r.MenuWrapper,{}),(0,t.jsxs)("div",{className:"section-w","data-fondo":"#000000","data-tinta":"#FFFFFF",children:[(0,t.jsxs)("div",{className:"section-fake-hero",children:[(0,t.jsxs)("div",{className:"div-block",children:[(0,t.jsx)("div",{delay:"1.5",line:"","no-scroll":"",className:"p-l",children:a.webs997.entrada.split("\n").map((e,i)=>(0,t.jsxs)("span",{children:[i>0&&(0,t.jsx)("br",{}),e]},e))}),(0,t.jsx)("div",{className:"space-24"}),(0,t.jsxs)("a",{delay:"2",opacity:"","no-scroll":"",href:a.enlaces.email,onClick:(0,s.reserva)("webs_contacto","hero"),className:"btn black-blend w-inline-block",children:[(0,t.jsx)("div",{className:"btn__text",children:(0,t.jsx)("p",{className:"btn__text-p",children:"Cuéntanos tu caso"})}),(0,t.jsx)("div",{className:"arrow-w",children:(0,t.jsxs)("div",{className:"arrow black-blend",children:[(0,t.jsx)("div",{className:"line-arrow"}),(0,t.jsx)("div",{className:"shape-arrow"})]})})]})]}),(0,t.jsxs)("div",{className:"link-hero-bottom-w",children:[(0,t.jsx)("div",{delay:"1.5",line:"","no-scroll":"",children:a.webs997.pie}),(0,t.jsxs)("div",{delay:"1.5",opacity:"","no-scroll":"",className:"link-hero-lang-w",children:[(0,t.jsx)("div",{className:"link-hero-w",children:(0,t.jsx)("a",{href:a.enlaces.email,className:"link w-inline-block",children:(0,t.jsx)("div",{children:"info@theaibusiness.com"})})}),(0,t.jsx)("a",{href:"#",className:"link-lang w-inline-block",children:(0,t.jsx)("div",{children:"ES"})})]})]})]}),(0,t.jsx)("video",{src:a.video.heroFondo,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"video-hero-bg"}),(0,t.jsx)("section",{className:"section hero-home",children:(0,t.jsx)("div",{className:"container hero-home",children:(0,t.jsx)("div",{className:"nothin-hero-w",children:(0,t.jsx)("img",{src:a.img.marca997,alt:"997 €",className:"marca-hero marca-997"})})})})]}),(0,t.jsx)("section",{className:"section negacion","data-fondo":"#FA4D4D","data-tinta":"#0B0B0F",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("h2",{opacity:"",className:"negacion-h",children:[a.webs997.negacionAntes," ",(0,t.jsxs)("span",{className:"marcado",children:[a.webs997.negacionTachada,(0,t.jsx)("i",{className:"trazo trazo-tachado","aria-hidden":"true"})]}),".",(0,t.jsx)("br",{}),a.webs997.negacionDespues," ",(0,t.jsxs)("span",{className:"marcado",children:[a.webs997.negacionSubrayada,(0,t.jsx)("i",{className:"trazo trazo-subrayado","aria-hidden":"true"})]}),"."]}),(0,t.jsx)("div",{className:"space-65"}),(0,t.jsx)("p",{line:"",className:"negacion-apoyo",children:a.webs997.negacionApoyo})]})}),(0,t.jsx)("section",{className:"section pila","data-fondo":"#F2F2F5","data-tinta":"#0B0B0F",children:(0,t.jsxs)("div",{className:"pila-w",children:[(0,t.jsxs)("div",{className:"pila-texto",children:[(0,t.jsx)("div",{line:"",className:"etiqueta",children:a.webs997.pilaEtiqueta}),(0,t.jsx)("h2",{line:"",className:"pila-h",children:a.webs997.pilaTitulo.split("\n").map((e,i)=>(0,t.jsxs)("span",{children:[i>0&&(0,t.jsx)("br",{}),e]},e))}),(0,t.jsx)("div",{className:"pila-precio",children:"997 €"})]}),(0,t.jsx)("div",{className:"pila-mazo",children:a.webs997.incluye.map((e,i)=>(0,t.jsxs)("article",{className:"pila-carta",children:[(0,t.jsxs)("div",{className:"carta-barra",children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("div",{className:"carta-n",children:String(i+1).padStart(2,"0")})]}),(0,t.jsxs)("div",{className:"carta-cuerpo",children:[(0,t.jsx)("h3",{className:"carta-titulo",children:e.nombre}),(0,t.jsx)("p",{className:"carta-detalle",children:e.detalle})]})]},e.nombre))})]})}),(0,t.jsxs)("section",{className:"section proceso","data-fondo":"#5A70FA","data-tinta":"#FFFFFF",children:[(0,t.jsxs)("div",{className:"proceso-cabecera container",children:[(0,t.jsx)("div",{line:"",className:"etiqueta",children:a.webs997.procesoEtiqueta}),(0,t.jsx)("h2",{line:"",className:"proceso-h",children:a.webs997.procesoTitulo}),(0,t.jsx)("p",{line:"",className:"proceso-p",children:a.webs997.proceso})]}),(0,t.jsx)("div",{className:"proceso-pista",children:(0,t.jsxs)("div",{className:"proceso-carril",children:[a.webs997.pasos.map(e=>(0,t.jsxs)("article",{className:"wfase",children:[(0,t.jsx)("div",{className:"wfase-n",children:e.n}),(0,t.jsx)("h3",{className:"wfase-nombre",children:e.nombre}),(0,t.jsx)("p",{className:"wfase-detalle",children:e.detalle})]},e.n)),(0,t.jsxs)("article",{className:"wfase fase-cierre",children:[(0,t.jsx)("div",{className:"wfase-n",children:"→"}),(0,t.jsx)("h3",{className:"wfase-nombre",children:"Tu web, online."}),(0,t.jsx)("a",{href:a.enlaces.email,onClick:(0,s.reserva)("webs_contacto","proceso"),className:"wfase-enlace",children:"Cuéntanos tu caso"})]})]})})]}),(0,t.jsx)("section",{className:"section precio","data-fondo":"#000000","data-tinta":"#FFFFFF",children:(0,t.jsxs)("div",{className:"container precio-c",children:[(0,t.jsx)("div",{line:"",className:"etiqueta",children:a.webs997.precioEtiqueta}),(0,t.jsxs)("div",{className:"precio-rodillo","data-precio":a.webs997.precio,"aria-label":`${a.webs997.precio} euros`,children:[[...a.webs997.precio].map((e,i)=>(0,t.jsx)("span",{className:"rodillo","aria-hidden":"true",children:"0"},i)),(0,t.jsx)("span",{className:"rodillo-moneda","aria-hidden":"true",children:"€"})]}),(0,t.jsx)("h2",{line:"",className:"precio-h",children:a.webs997.precioTitulo}),(0,t.jsx)("p",{line:"",className:"precio-p",children:a.webs997.precioApoyo})]})}),(0,t.jsx)("footer",{id:"contacto",className:"section cierre","data-fondo":"#0B0B0F","data-tinta":"#FFFFFF",children:(0,t.jsxs)("div",{className:"container cierre-c",children:[(0,t.jsx)("h2",{line:"",className:"cierre-h",children:a.webs997.cierre.split("\n").map((e,i)=>(0,t.jsxs)("span",{children:[i>0&&(0,t.jsx)("br",{}),e]},e))}),(0,t.jsx)("p",{line:"",className:"cierre-p",children:a.webs997.cierreApoyo}),(0,t.jsx)("a",{opacity:"",href:a.enlaces.email,onClick:(0,s.reserva)("webs_contacto","final"),className:"cierre-btn",children:"info@theaibusiness.com"}),(0,t.jsxs)("div",{className:"cierre-pie",children:[(0,t.jsx)("span",{children:"©2026 — The AI Business"}),(0,t.jsx)("span",{children:"Madrid · Miami · Dubái"}),(0,t.jsx)("span",{children:"Precio cerrado"})]})]})})]})}],48385)},42510,51806,e=>{"use strict";var t=e.i(71645),i=e.i(83495),r=e.i(39362);e.s(["useEagerImages",0,function(e){(0,t.useEffect)(()=>{let t;if(!e)return;(0,r.registerGsap)();let s=()=>{window.clearTimeout(t),t=window.setTimeout(()=>i.ScrollTrigger.refresh(),150)};return[...document.querySelectorAll("img")].forEach(e=>{"lazy"===e.loading&&(e.loading="eager"),e.complete||(e.addEventListener("load",s,{once:!0}),e.addEventListener("error",s,{once:!0}))}),document.querySelectorAll("video").forEach(e=>{e.readyState<1&&e.addEventListener("loadedmetadata",s,{once:!0})}),document.fonts.ready.then(s),requestAnimationFrame(()=>requestAnimationFrame(s)),()=>window.clearTimeout(t)},[e])}],42510);let s=`
precision highp float;

attribute vec2 aPosition;
varying vec2 vUv;

void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,a=`
precision highp float;

uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 uTexelSize;
uniform float uDt;
uniform float uDissipation;

varying vec2 vUv;

vec4 bilerp(sampler2D sam, vec2 uv, vec2 tsize) {
  vec2 st = uv / tsize - 0.5;
  vec2 iuv = floor(st);
  vec2 fuv = fract(st);
  vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
  vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
  vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
  vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
  return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
}

void main() {
  vec2 coord = vUv - uDt * texture2D(uVelocity, vUv).xy * uTexelSize;
  vec4 result = uDissipation * bilerp(uSource, coord, uTexelSize);
  gl_FragColor = result;
}`,o=`
precision highp float;

uniform sampler2D uTarget;
uniform float uAspectRatio;
uniform vec2 uPoint;
uniform vec3 uColor;
uniform float uRadius;

varying vec2 vUv;

void main() {
  vec2 p = vUv - uPoint;
  p.x *= uAspectRatio;
  vec3 splat = exp(-dot(p, p) / uRadius) * uColor;
  vec3 base = texture2D(uTarget, vUv).xyz;
  gl_FragColor = vec4(base + splat, 1.0);
}`,n=`
precision highp float;

uniform sampler2D uVelocity;
uniform vec2 uTexelSize;

varying vec2 vUv;

void main() {
  float L = texture2D(uVelocity, vUv - vec2(uTexelSize.x, 0.0)).y;
  float R = texture2D(uVelocity, vUv + vec2(uTexelSize.x, 0.0)).y;
  float T = texture2D(uVelocity, vUv + vec2(0.0, uTexelSize.y)).x;
  float B = texture2D(uVelocity, vUv - vec2(0.0, uTexelSize.y)).x;
  float vorticity = R - L - T + B;
  gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
}`,l=`
precision highp float;

uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform vec2 uTexelSize;
uniform float uCurlStrength;
uniform float uDt;

varying vec2 vUv;

void main() {
  float L = texture2D(uCurl, vUv - vec2(uTexelSize.x, 0.0)).x;
  float R = texture2D(uCurl, vUv + vec2(uTexelSize.x, 0.0)).x;
  float T = texture2D(uCurl, vUv + vec2(0.0, uTexelSize.y)).x;
  float B = texture2D(uCurl, vUv - vec2(0.0, uTexelSize.y)).x;
  float C = texture2D(uCurl, vUv).x;

  vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
  float len = length(force) + 0.0001;
  force = force / len * uCurlStrength * C;

  vec2 velocity = texture2D(uVelocity, vUv).xy;
  velocity += force * uDt;

  gl_FragColor = vec4(velocity, 0.0, 1.0);
}`,c=`
precision highp float;

uniform sampler2D uVelocity;
uniform vec2 uTexelSize;

varying vec2 vUv;

void main() {
  float L = texture2D(uVelocity, vUv - vec2(uTexelSize.x, 0.0)).x;
  float R = texture2D(uVelocity, vUv + vec2(uTexelSize.x, 0.0)).x;
  float T = texture2D(uVelocity, vUv + vec2(0.0, uTexelSize.y)).y;
  float B = texture2D(uVelocity, vUv - vec2(0.0, uTexelSize.y)).y;

  float div = 0.5 * (R - L + T - B);
  gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
}`,u=`
precision highp float;

uniform sampler2D uPressure;
uniform sampler2D uDivergence;
uniform vec2 uTexelSize;

varying vec2 vUv;

void main() {
  float L = texture2D(uPressure, vUv - vec2(uTexelSize.x, 0.0)).x;
  float R = texture2D(uPressure, vUv + vec2(uTexelSize.x, 0.0)).x;
  float T = texture2D(uPressure, vUv + vec2(0.0, uTexelSize.y)).x;
  float B = texture2D(uPressure, vUv - vec2(0.0, uTexelSize.y)).x;
  float C = texture2D(uDivergence, vUv).x;

  float pressure = (L + R + B + T - C) * 0.25;
  gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
}`,h=`
precision highp float;

uniform sampler2D uPressure;
uniform sampler2D uVelocity;
uniform vec2 uTexelSize;

varying vec2 vUv;

void main() {
  float L = texture2D(uPressure, vUv - vec2(uTexelSize.x, 0.0)).x;
  float R = texture2D(uPressure, vUv + vec2(uTexelSize.x, 0.0)).x;
  float T = texture2D(uPressure, vUv + vec2(0.0, uTexelSize.y)).x;
  float B = texture2D(uPressure, vUv - vec2(0.0, uTexelSize.y)).x;

  vec2 velocity = texture2D(uVelocity, vUv).xy;
  velocity -= vec2(R - L, T - B) * 0.5;
  gl_FragColor = vec4(velocity, 0.0, 1.0);
}`,d=`
precision highp float;

uniform sampler2D uBaseTexture;
uniform sampler2D uRevealTexture;
uniform sampler2D uDye;

uniform float uRevealSize;
uniform float uEdgeSoftness;
uniform float uEdgeWidth;

uniform float uBaseImageAspect;
uniform float uRevealImageAspect;
uniform float uPlaneAspect;

varying vec2 vUv;

vec2 coverUv(vec2 uv, float imageAspect, float planeAspect) {
  vec2 ratio = vec2(
    min(planeAspect / imageAspect, 1.0),
    min(imageAspect / planeAspect, 1.0)
  );
  return vec2(
    uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    uv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );
}

void main() {
  float dye = texture2D(uDye, vUv).r;

  vec2 baseUv = coverUv(vUv, uBaseImageAspect, uPlaneAspect);
  baseUv = clamp(baseUv, 0.001, 0.999);
  vec4 baseColor = texture2D(uBaseTexture, baseUv);

  vec2 revealUv = coverUv(vUv, uRevealImageAspect, uPlaneAspect);
  revealUv = clamp(revealUv, 0.001, 0.999);
  vec4 revealColor = texture2D(uRevealTexture, revealUv);

  float raw  = dye * uRevealSize;
  float mask = smoothstep(uEdgeSoftness, uEdgeSoftness + uEdgeWidth, raw);
  mask = clamp(mask, 0.0, 1.0);

  gl_FragColor = mix(baseColor, revealColor, mask);
}`,m={simResolution:256,dyeResolution:512,velocityDissipation:.962,dyeDissipation:.988,pressureIterations:20,curlStrength:0,splatRadius:6e-5,splatForce:5900,revealSize:3.9,edgeSoftness:.5,edgeWidth:.01};function f(e,t,i){let r=e.createShader(t);if(e.shaderSource(r,i),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw Error(e.getShaderInfoLog(r)??"shader compile failed");return r}class p{gl;program;uniforms;constructor(e,t,i){if(this.gl=e,this.uniforms={},this.program=e.createProgram(),e.attachShader(this.program,f(e,e.VERTEX_SHADER,t)),e.attachShader(this.program,f(e,e.FRAGMENT_SHADER,i)),e.linkProgram(this.program),!e.getProgramParameter(this.program,e.LINK_STATUS))throw Error(e.getProgramInfoLog(this.program)??"program link failed");const r=e.getProgramParameter(this.program,e.ACTIVE_UNIFORMS);for(let t=0;t<r;t++){const i=e.getActiveUniform(this.program,t).name;this.uniforms[i]=e.getUniformLocation(this.program,i)}}bind(){this.gl.useProgram(this.program)}}class x{container;gl;canvas;settings;raf;disposed;lastTime;velocity;dye;pressure;divergence;curl;programs;quadBuffer;baseTexture;revealTexture;baseAspect;revealAspect;pointer;constructor(e,t={}){this.container=e,this.raf=0,this.disposed=!1,this.lastTime=performance.now(),this.baseTexture=null,this.revealTexture=null,this.baseAspect=1,this.revealAspect=16/9,this.pointer={x:.5,y:.5,dx:0,dy:0,moved:!1,down:!1},this.frame=()=>{if(this.disposed)return;let e=performance.now(),t=Math.min((e-this.lastTime)/1e3,.016666);this.lastTime=e,this.applyPointer(),this.step(t),this.render(),this.raf=requestAnimationFrame(this.frame)},this.onPointerMove=e=>{let t=this.container.getBoundingClientRect(),i=(e.clientX-t.left)/t.width,r=1-(e.clientY-t.top)/t.height;this.pointer.dx=i-this.pointer.x,this.pointer.dy=r-this.pointer.y,this.pointer.x=i,this.pointer.y=r,this.pointer.moved=Math.abs(this.pointer.dx)>0||Math.abs(this.pointer.dy)>0},this.onPointerLeave=()=>{this.pointer.moved=!1},this.onResize=()=>{this.resize()},this.settings={...m,...t},this.canvas=document.createElement("canvas"),this.canvas.className="mask-reveal-canvas",e.appendChild(this.canvas);const i=this.canvas.getContext("webgl",{alpha:!0,premultipliedAlpha:!1,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1});if(!i)throw Error("WebGL unavailable");this.gl=i,i.getExtension("OES_texture_float"),i.getExtension("OES_texture_half_float"),i.getExtension("OES_texture_half_float_linear"),i.getExtension("OES_texture_float_linear"),this.initQuad(),this.initPrograms(),this.resize(),window.addEventListener("resize",this.onResize),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerleave",this.onPointerLeave),this.raf=requestAnimationFrame(this.frame)}initQuad(){let e=this.gl;this.quadBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadBuffer),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0)}initPrograms(){let e=this.gl,t=t=>{let i=new p(e,s,t);return e.bindAttribLocation(i.program,0,"aPosition"),i};this.programs={advection:t(a),splat:t(o),curl:t(n),vorticity:t(l),divergence:t(c),pressure:t(u),gradient:t(h),display:t(d)}}createFBO(e,t,i,r,s,a){let o=this.gl;o.activeTexture(o.TEXTURE0);let n=o.createTexture();o.bindTexture(o.TEXTURE_2D,n),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,a),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,a),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texImage2D(o.TEXTURE_2D,0,i,e,t,0,r,s,null);let l=o.createFramebuffer();return o.bindFramebuffer(o.FRAMEBUFFER,l),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,n,0),o.viewport(0,0,e,t),o.clear(o.COLOR_BUFFER_BIT),{texture:n,fbo:l,width:e,height:t,texelSizeX:1/e,texelSizeY:1/t,attach:e=>(o.activeTexture(o.TEXTURE0+e),o.bindTexture(o.TEXTURE_2D,n),e)}}createDoubleFBO(e,t,i,r,s,a){let o=this.createFBO(e,t,i,r,s,a),n=this.createFBO(e,t,i,r,s,a);return{width:e,height:t,texelSizeX:1/e,texelSizeY:1/t,get read(){return o},set read(v){o=v},get write(){return n},set write(v){n=v},swap(){let e=o;o=n,n=e}}}initFramebuffers(){let e=this.gl,t=e.getExtension("OES_texture_half_float"),i=t?t.HALF_FLOAT_OES:e.UNSIGNED_BYTE,r=e.getExtension("OES_texture_half_float_linear")?e.LINEAR:e.NEAREST,s=this.resolution(this.settings.simResolution),a=this.resolution(this.settings.dyeResolution);this.dye=this.createDoubleFBO(a.width,a.height,e.RGBA,e.RGBA,i,r),this.velocity=this.createDoubleFBO(s.width,s.height,e.RGBA,e.RGBA,i,r),this.pressure=this.createDoubleFBO(s.width,s.height,e.RGBA,e.RGBA,i,e.NEAREST),this.divergence=this.createFBO(s.width,s.height,e.RGBA,e.RGBA,i,e.NEAREST),this.curl=this.createFBO(s.width,s.height,e.RGBA,e.RGBA,i,e.NEAREST)}resolution(e){let t=this.gl,i=t.drawingBufferWidth/t.drawingBufferHeight,r=Math.round(e),s=Math.round(e*(i<1?1/i:i));return i>1?{width:s,height:r}:{width:r,height:s}}async setLayers({base:e,baseBg:t="#ffffff",reveal:i="rgba(0,0,0,0)"}={}){if(e){let i=await this.textureFromElement(e,t);i&&(this.baseTexture=i.tex,this.baseAspect=i.aspect)}else this.baseTexture=this.textureFromColor(t),this.baseAspect=1;this.revealTexture=this.textureFromColor(i)}textureFromColor(e){this.gl;let t=document.createElement("canvas");t.width=t.height=1;let i=t.getContext("2d");return i.fillStyle=e,i.fillRect(0,0,1,1),this.textureFromCanvas(t)}textureFromCanvas(e){let t=this.gl,i=t.createTexture();return t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),i}async textureFromElement(e,t){let i,r=e.getBoundingClientRect(),s=this.container.getBoundingClientRect();if(!s.width||!s.height)return null;let a=Math.min(window.devicePixelRatio||1,2),o=document.createElement("canvas");o.width=Math.max(1,Math.round(s.width*a)),o.height=Math.max(1,Math.round(s.height*a));let n=o.getContext("2d");if(n.fillStyle=t,n.fillRect(0,0,o.width,o.height),e instanceof HTMLImageElement)i=e.currentSrc||e.src;else{let t=e.cloneNode(!0);t.setAttribute("width",String(r.width)),t.setAttribute("height",String(r.height)),t.setAttribute("xmlns","http://www.w3.org/2000/svg"),i="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(t))}let l=new Image;l.crossOrigin="anonymous";let c=new Promise(e=>{l.onload=()=>e(!0),l.onerror=()=>e(!1)});return(l.src=i,await c)?(n.drawImage(l,(r.left-s.left)*a,(r.top-s.top)*a,r.width*a,r.height*a),{tex:this.textureFromCanvas(o),aspect:o.width/o.height}):null}blit(e){let t=this.gl;e?(t.viewport(0,0,e.width,e.height),t.bindFramebuffer(t.FRAMEBUFFER,e.fbo)):(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)),t.drawArrays(t.TRIANGLE_STRIP,0,4)}frame;setActivo(e){!this.disposed&&(e?this.raf||(this.lastTime=performance.now(),this.raf=requestAnimationFrame(this.frame)):this.raf&&(cancelAnimationFrame(this.raf),this.raf=0))}applyPointer(){if(!this.pointer.moved)return;this.pointer.moved=!1;let{splatForce:e,splatRadius:t}=this.settings;this.splat(this.pointer.x,this.pointer.y,this.pointer.dx*e,this.pointer.dy*e,t)}splat(e,t,i,r,s){let a=this.gl,o=this.programs.splat,n=this.canvas.width/this.canvas.height;o.bind(),a.uniform1i(o.uniforms.uTarget,this.velocity.read.attach(0)),a.uniform1f(o.uniforms.uAspectRatio,n),a.uniform2f(o.uniforms.uPoint,e,t),a.uniform3f(o.uniforms.uColor,i,r,0),a.uniform1f(o.uniforms.uRadius,s),this.blit(this.velocity.write),this.velocity.swap(),a.uniform1i(o.uniforms.uTarget,this.dye.read.attach(0)),a.uniform3f(o.uniforms.uColor,1,1,1),this.blit(this.dye.write),this.dye.swap()}step(e){let t=this.gl,i=this.programs,r=this.settings;t.disable(t.BLEND),r.curlStrength>0&&(i.curl.bind(),t.uniform2f(i.curl.uniforms.uTexelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),t.uniform1i(i.curl.uniforms.uVelocity,this.velocity.read.attach(0)),this.blit(this.curl),i.vorticity.bind(),t.uniform2f(i.vorticity.uniforms.uTexelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),t.uniform1i(i.vorticity.uniforms.uVelocity,this.velocity.read.attach(0)),t.uniform1i(i.vorticity.uniforms.uCurl,this.curl.attach(1)),t.uniform1f(i.vorticity.uniforms.uCurlStrength,r.curlStrength),t.uniform1f(i.vorticity.uniforms.uDt,e),this.blit(this.velocity.write),this.velocity.swap()),i.divergence.bind(),t.uniform2f(i.divergence.uniforms.uTexelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),t.uniform1i(i.divergence.uniforms.uVelocity,this.velocity.read.attach(0)),this.blit(this.divergence),i.pressure.bind(),t.uniform2f(i.pressure.uniforms.uTexelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),t.uniform1i(i.pressure.uniforms.uDivergence,this.divergence.attach(0));for(let e=0;e<r.pressureIterations;e++)t.uniform1i(i.pressure.uniforms.uPressure,this.pressure.read.attach(1)),this.blit(this.pressure.write),this.pressure.swap();i.gradient.bind(),t.uniform2f(i.gradient.uniforms.uTexelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),t.uniform1i(i.gradient.uniforms.uPressure,this.pressure.read.attach(0)),t.uniform1i(i.gradient.uniforms.uVelocity,this.velocity.read.attach(1)),this.blit(this.velocity.write),this.velocity.swap(),i.advection.bind(),t.uniform2f(i.advection.uniforms.uTexelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),t.uniform1i(i.advection.uniforms.uVelocity,this.velocity.read.attach(0)),t.uniform1i(i.advection.uniforms.uSource,this.velocity.read.attach(0)),t.uniform1f(i.advection.uniforms.uDt,e),t.uniform1f(i.advection.uniforms.uDissipation,r.velocityDissipation),this.blit(this.velocity.write),this.velocity.swap(),t.uniform1i(i.advection.uniforms.uVelocity,this.velocity.read.attach(0)),t.uniform1i(i.advection.uniforms.uSource,this.dye.read.attach(1)),t.uniform1f(i.advection.uniforms.uDissipation,r.dyeDissipation),this.blit(this.dye.write),this.dye.swap()}render(){let e=this.gl,t=this.programs.display,i=this.settings;e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),t.bind(),e.uniform1i(t.uniforms.uDye,this.dye.read.attach(0)),this.baseTexture&&(e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.baseTexture),e.uniform1i(t.uniforms.uBaseTexture,1)),this.revealTexture&&(e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,this.revealTexture),e.uniform1i(t.uniforms.uRevealTexture,2)),e.uniform1f(t.uniforms.uRevealSize,i.revealSize),e.uniform1f(t.uniforms.uEdgeSoftness,i.edgeSoftness),e.uniform1f(t.uniforms.uEdgeWidth,i.edgeWidth),e.uniform1f(t.uniforms.uBaseImageAspect,this.baseAspect),e.uniform1f(t.uniforms.uRevealImageAspect,this.revealAspect),e.uniform1f(t.uniforms.uPlaneAspect,this.canvas.width/this.canvas.height),this.blit(null)}onPointerMove;onPointerLeave;onResize;resize(){let e=this.container.getBoundingClientRect(),t=Math.min(window.devicePixelRatio||1,2),i=Math.max(1,Math.round(e.width*t)),r=Math.max(1,Math.round(e.height*t));this.canvas.width===i&&this.canvas.height===r&&this.velocity||(this.canvas.width=i,this.canvas.height=r,this.canvas.style.width="100%",this.canvas.style.height="100%",this.gl.viewport(0,0,i,r),this.initFramebuffers())}destroy(){this.disposed=!0,cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.onResize),this.container.removeEventListener("pointermove",this.onPointerMove),this.container.removeEventListener("pointerleave",this.onPointerLeave),this.canvas.remove()}}e.s(["useHero",0,function(e){(0,t.useEffect)(()=>{if(!e)return;let t=document.querySelector(".section-w");if(!t)return;let i=t.querySelector(".video-hero-bg");if(i){i.muted=!0,i.defaultMuted=!0,i.playsInline=!0,i.setAttribute("playsinline",""),i.setAttribute("muted","");let e=()=>i.play()?.catch(()=>{});e(),i.addEventListener("loadeddata",e,{once:!0}),i.addEventListener("canplay",e,{once:!0})}let r=null,s=!1,a=async()=>{if(s)return;let e=t.querySelector(".marca-hero");try{r=new x(t,{splatRadius:3e-4,splatForce:8800}),await r.setLayers({base:e,baseBg:"#FFFFFF",reveal:"rgba(0,0,0,0)"});let i=t.querySelector(".section.hero-home");i&&(i.style.visibility="hidden")}catch{r=null}},o=t.querySelector(".marca-hero"),n=o&&!o.complete?new Promise(e=>{o.addEventListener("load",()=>e(),{once:!0}),o.addEventListener("error",()=>e(),{once:!0})}):Promise.resolve(),l=new IntersectionObserver(([e])=>r?.setActivo(e.isIntersecting),{threshold:0});return n.then(()=>requestAnimationFrame(()=>requestAnimationFrame(async()=>{await a(),!s&&r&&l.observe(t)}))),()=>{s=!0,l.disconnect(),r?.destroy();let e=t.querySelector(".section.hero-home");e&&(e.style.visibility="")}},[e])}],51806)},25774,e=>{"use strict";var t=e.i(71645);e.s(["useVideos",0,function(e){(0,t.useEffect)(()=>{if(!e)return;let t=[...document.querySelectorAll("video")];if(!t.length)return;let i=new IntersectionObserver(e=>{e.forEach(e=>{let t=e.target;e.isIntersecting?t.play().catch(()=>{}):t.paused||t.pause()})},{rootMargin:"200px 0px 200px 0px",threshold:0});return t.forEach(e=>{e.preload&&"auto"!==e.preload||(e.preload="metadata"),e.muted=!0,e.playsInline=!0,i.observe(e)}),()=>i.disconnect()},[e])}])}]);