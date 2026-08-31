(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42510,77617,35298,51806,17547,48247,41956,91304,e=>{"use strict";var t=e.i(71645),r=e.i(83495),i=e.i(39362);e.s(["useEagerImages",0,function(e){(0,t.useEffect)(()=>{let t;if(!e)return;(0,i.registerGsap)();let o=()=>{window.clearTimeout(t),t=window.setTimeout(()=>r.ScrollTrigger.refresh(),150)};return[...document.querySelectorAll("img")].forEach(e=>{"lazy"===e.loading&&(e.loading="eager"),e.complete||(e.addEventListener("load",o,{once:!0}),e.addEventListener("error",o,{once:!0}))}),document.querySelectorAll("video").forEach(e=>{e.readyState<1&&e.addEventListener("loadedmetadata",o,{once:!0})}),document.fonts.ready.then(o),requestAnimationFrame(()=>requestAnimationFrame(o)),()=>window.clearTimeout(t)},[e])}],42510);var o=e.i(89970);e.s(["useFormas",0,function(e){(0,t.useEffect)(()=>{if(!e)return;(0,i.registerGsap)();let t=document.querySelector(".formes-w");if(!t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let r=[],a=()=>{let e=t.getBoundingClientRect(),i=new Map(r.map(e=>[e.el,e]));r.length=0,t.querySelectorAll(".forma, .letra").forEach(t=>{let o=i.get(t),a=o?.x??0,s=o?.y??0,l=t.getBoundingClientRect();r.push({el:t,cx:l.left-e.left+l.width/2-a,cy:l.top-e.top+l.height/2-s,ancho:l.width,alto:l.height,x:a,y:s,vx:o?.vx??0,vy:o?.vy??0})})};a();let s=[...t.querySelectorAll("img")],l=()=>a();s.forEach(e=>{e.complete||e.addEventListener("load",l,{once:!0})});let n=0,u=0,c=!1,h=e=>{let r=t.getBoundingClientRect();n=e.clientX-r.left,u=e.clientY-r.top,c=n>-340&&n<r.width+340&&u>-340&&u<r.height+340},m=()=>{c=!1},f=0,g=performance.now(),d=e=>{f=requestAnimationFrame(d);let i=Math.min((e-g)/1e3,1/30);if(g=e,!r.length)return;let a=t.getBoundingClientRect();a.bottom<-200||a.top>window.innerHeight+200||r.forEach(e=>{if(c){let t=e.cx+e.x-n,r=e.cy+e.y-u,o=Math.hypot(t,r);if(o<340){let a=o>.5?t/o:Math.cos(e.cx+e.cy),s=o>.5?r/o:Math.sin(e.cx+e.cy),l=(1-o/340)**1.4*15e3;e.vx+=a*l*i,e.vy+=s*l*i}}e.vx-=5.5*e.x*i,e.vy-=5.5*e.y*i;let t=.9**(60*i);e.vx*=t,e.vy*=t,e.x+=e.vx*i,e.y+=e.vy*i;let r=(e,t,r,i)=>{let o=.45*r,a=-(t-r/2+o),s=i-t-r/2+o;return e<a?a:e>s?s:e},s=r(e.x,e.cx,e.ancho,a.width),l=r(e.y,e.cy,e.alto,a.height);s!==e.x&&(e.x=s,e.vx=0),l!==e.y&&(e.y=l,e.vy=0),o.gsap.set(e.el,{x:e.x,y:e.y})})};return window.addEventListener("pointermove",h,{passive:!0}),window.addEventListener("pointerleave",m),t.addEventListener("pointerenter",a),window.addEventListener("resize",a),f=requestAnimationFrame(d),()=>{cancelAnimationFrame(f),window.removeEventListener("pointermove",h),window.removeEventListener("pointerleave",m),t.removeEventListener("pointerenter",a),window.removeEventListener("resize",a),s.forEach(e=>e.removeEventListener("load",l)),o.gsap.set(r.map(e=>e.el),{clearProps:"x,y"})}},[e])}],77617);let a='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`§è!"',s=()=>a[Math.random()*a.length|0];function l(e){let t=[],r=e=>{[...e.childNodes].forEach(e=>{if(e.nodeType===Node.TEXT_NODE){let r=e.textContent??"";if(!r.trim())return;let i=document.createDocumentFragment();for(let e of r){let r=document.createElement("span");r.textContent=e,r.style.display="inline-block",r.style.whiteSpace="pre",i.appendChild(r),t.push({span:r,original:e})}e.parentNode?.replaceChild(i,e)}else e.nodeType===Node.ELEMENT_NODE&&r(e)})};return r(e),t}e.s(["useGlitch",0,function(e){(0,t.useEffect)(()=>{if(!e)return;(0,i.registerGsap)();let t=[...document.querySelectorAll(".section.glitch")];if(!t.length)return;let r=[];return t.forEach(e=>{let t=[...e.querySelectorAll(".text-block-6")];if(!t.length)return;let i=t.map(e=>e.innerHTML),a=t.map(e=>l(e)),n=a.flat(),u=Math.max(...a.map(e=>e.length),1),c=e.querySelector(".finaltext"),h=c?.innerHTML??null,m=c?l(c):[],f=!0,g=0,d=0,p=0,y=0,x=0,T=null,E=()=>{if(f){if(y++,g+=(d-g)*.14,d*=.9,y%5==0&&(g>.01?(p=(p+1+10*g)%u,a.forEach(e=>{var t;return t=p,void e.forEach(({span:e,original:r},i)=>{i<t-3?(e.style.opacity="1",e.textContent=r):i<t?(e.style.opacity="1",e.textContent=s()):(e.style.opacity="0",e.textContent=r)})})):n.forEach(({span:e,original:t})=>{e.textContent=t}),m.length&&T)){let e=Math.floor((T.scrollTrigger?.progress??0)*m.length);m.forEach(({span:t,original:r},i)=>{t.style.opacity=i<e?"1":"0",t.textContent=i<e?r:s()})}x=requestAnimationFrame(E)}},w=e=>{d+=.002*Math.abs(e.deltaY)},S=e=>{d+=(Math.abs(e.movementX)+Math.abs(e.movementY))*.004};window.addEventListener("wheel",w,{passive:!0}),window.addEventListener("mousemove",S,{passive:!0}),x=requestAnimationFrame(E),T=o.gsap.timeline({scrollTrigger:{trigger:e,start:"top top",end:"center 30%",scrub:2}}),a.forEach((e,r)=>{T.to(t[r],{yPercent:60,opacity:0,ease:"none"},.06*r)});let b=[],A=e.querySelector(".glitch-img-w");if(A){let t=o.gsap.to(A,{opacity:.3,ease:"none",immediateRender:!1,scrollTrigger:{trigger:e,start:"top top",end:"center center",scrub:2}});t.scrollTrigger&&b.push(t.scrollTrigger)}let R=e.querySelector(".img-glitch-w");if(R){let[t,r]=[...R.children];if(t){let r=o.gsap.fromTo(t,{y:100},{y:-300,ease:"none",scrollTrigger:{trigger:e,start:"top top",end:"bottom top",scrub:1.5}});r.scrollTrigger&&b.push(r.scrollTrigger)}if(r){let t=o.gsap.fromTo(r,{y:100},{y:-800,ease:"none",scrollTrigger:{trigger:e,start:"top top",end:"bottom top",scrub:3}});t.scrollTrigger&&b.push(t.scrollTrigger)}}[{wrapper:".merguez",img:".merguez-img",yPercent:-8},{wrapper:".ballon",img:".ballon-img",yPercent:10}].forEach(({wrapper:t,img:r,yPercent:i})=>{let a=e.querySelector(t),s=e.querySelector(r);if(!a||!s)return;o.gsap.set(a,{overflow:"hidden"}),o.gsap.set(s,{height:"110%",width:"100%",objectFit:"cover",top:0});let l=o.gsap.fromTo(s,{yPercent:0},{yPercent:i,ease:"none",scrollTrigger:{trigger:e,start:"20% top",end:"bottom top",scrub:3}});l.scrollTrigger&&b.push(l.scrollTrigger)}),r.push(()=>{f=!1,cancelAnimationFrame(x),window.removeEventListener("wheel",w),window.removeEventListener("mousemove",S),T?.scrollTrigger?.kill(),T?.kill(),b.forEach(e=>{e.animation?.kill(),e.kill(!0)}),t.forEach((e,t)=>{e.innerHTML=i[t]}),c&&null!==h&&(c.innerHTML=h)})}),()=>r.forEach(e=>e())},[e])}],35298);let n=`
precision highp float;

attribute vec2 aPosition;
varying vec2 vUv;

void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,u=`
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
}`,c=`
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
}`,h=`
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
}`,m=`
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
}`,f=`
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
}`,g=`
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
}`,d=`
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
}`,p=`
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
}`,y={simResolution:256,dyeResolution:512,velocityDissipation:.962,dyeDissipation:.988,pressureIterations:20,curlStrength:0,splatRadius:6e-5,splatForce:5900,revealSize:3.9,edgeSoftness:.5,edgeWidth:.01};function x(e,t,r){let i=e.createShader(t);if(e.shaderSource(i,r),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS))throw Error(e.getShaderInfoLog(i)??"shader compile failed");return i}class T{gl;program;uniforms;constructor(e,t,r){if(this.gl=e,this.uniforms={},this.program=e.createProgram(),e.attachShader(this.program,x(e,e.VERTEX_SHADER,t)),e.attachShader(this.program,x(e,e.FRAGMENT_SHADER,r)),e.linkProgram(this.program),!e.getProgramParameter(this.program,e.LINK_STATUS))throw Error(e.getProgramInfoLog(this.program)??"program link failed");const i=e.getProgramParameter(this.program,e.ACTIVE_UNIFORMS);for(let t=0;t<i;t++){const r=e.getActiveUniform(this.program,t).name;this.uniforms[r]=e.getUniformLocation(this.program,r)}}bind(){this.gl.useProgram(this.program)}}class E{container;gl;canvas;settings;raf;disposed;lastTime;velocity;dye;pressure;divergence;curl;programs;quadBuffer;baseTexture;revealTexture;baseAspect;revealAspect;pointer;constructor(e,t={}){this.container=e,this.raf=0,this.disposed=!1,this.lastTime=performance.now(),this.baseTexture=null,this.revealTexture=null,this.baseAspect=1,this.revealAspect=16/9,this.pointer={x:.5,y:.5,dx:0,dy:0,moved:!1,down:!1},this.frame=()=>{if(this.disposed)return;let e=performance.now(),t=Math.min((e-this.lastTime)/1e3,.016666);this.lastTime=e,this.applyPointer(),this.step(t),this.render(),this.raf=requestAnimationFrame(this.frame)},this.onPointerMove=e=>{let t=this.container.getBoundingClientRect(),r=(e.clientX-t.left)/t.width,i=1-(e.clientY-t.top)/t.height;this.pointer.dx=r-this.pointer.x,this.pointer.dy=i-this.pointer.y,this.pointer.x=r,this.pointer.y=i,this.pointer.moved=Math.abs(this.pointer.dx)>0||Math.abs(this.pointer.dy)>0},this.onPointerLeave=()=>{this.pointer.moved=!1},this.onResize=()=>{this.resize()},this.settings={...y,...t},this.canvas=document.createElement("canvas"),this.canvas.className="mask-reveal-canvas",e.appendChild(this.canvas);const r=this.canvas.getContext("webgl",{alpha:!0,premultipliedAlpha:!1,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1});if(!r)throw Error("WebGL unavailable");this.gl=r,r.getExtension("OES_texture_float"),r.getExtension("OES_texture_half_float"),r.getExtension("OES_texture_half_float_linear"),r.getExtension("OES_texture_float_linear"),this.initQuad(),this.initPrograms(),this.resize(),window.addEventListener("resize",this.onResize),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerleave",this.onPointerLeave),this.raf=requestAnimationFrame(this.frame)}initQuad(){let e=this.gl;this.quadBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadBuffer),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0)}initPrograms(){let e=this.gl,t=t=>{let r=new T(e,n,t);return e.bindAttribLocation(r.program,0,"aPosition"),r};this.programs={advection:t(u),splat:t(c),curl:t(h),vorticity:t(m),divergence:t(f),pressure:t(g),gradient:t(d),display:t(p)}}createFBO(e,t,r,i,o,a){let s=this.gl;s.activeTexture(s.TEXTURE0);let l=s.createTexture();s.bindTexture(s.TEXTURE_2D,l),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,a),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,a),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_2D,0,r,e,t,0,i,o,null);let n=s.createFramebuffer();return s.bindFramebuffer(s.FRAMEBUFFER,n),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,l,0),s.viewport(0,0,e,t),s.clear(s.COLOR_BUFFER_BIT),{texture:l,fbo:n,width:e,height:t,texelSizeX:1/e,texelSizeY:1/t,attach:e=>(s.activeTexture(s.TEXTURE0+e),s.bindTexture(s.TEXTURE_2D,l),e)}}createDoubleFBO(e,t,r,i,o,a){let s=this.createFBO(e,t,r,i,o,a),l=this.createFBO(e,t,r,i,o,a);return{width:e,height:t,texelSizeX:1/e,texelSizeY:1/t,get read(){return s},set read(v){s=v},get write(){return l},set write(v){l=v},swap(){let e=s;s=l,l=e}}}initFramebuffers(){let e=this.gl,t=e.getExtension("OES_texture_half_float"),r=t?t.HALF_FLOAT_OES:e.UNSIGNED_BYTE,i=e.getExtension("OES_texture_half_float_linear")?e.LINEAR:e.NEAREST,o=this.resolution(this.settings.simResolution),a=this.resolution(this.settings.dyeResolution);this.dye=this.createDoubleFBO(a.width,a.height,e.RGBA,e.RGBA,r,i),this.velocity=this.createDoubleFBO(o.width,o.height,e.RGBA,e.RGBA,r,i),this.pressure=this.createDoubleFBO(o.width,o.height,e.RGBA,e.RGBA,r,e.NEAREST),this.divergence=this.createFBO(o.width,o.height,e.RGBA,e.RGBA,r,e.NEAREST),this.curl=this.createFBO(o.width,o.height,e.RGBA,e.RGBA,r,e.NEAREST)}resolution(e){let t=this.gl,r=t.drawingBufferWidth/t.drawingBufferHeight,i=Math.round(e),o=Math.round(e*(r<1?1/r:r));return r>1?{width:o,height:i}:{width:i,height:o}}async setLayers({base:e,baseBg:t="#ffffff",reveal:r="rgba(0,0,0,0)"}={}){if(e){let r=await this.textureFromElement(e,t);r&&(this.baseTexture=r.tex,this.baseAspect=r.aspect)}else this.baseTexture=this.textureFromColor(t),this.baseAspect=1;this.revealTexture=this.textureFromColor(r)}textureFromColor(e){this.gl;let t=document.createElement("canvas");t.width=t.height=1;let r=t.getContext("2d");return r.fillStyle=e,r.fillRect(0,0,1,1),this.textureFromCanvas(t)}textureFromCanvas(e){let t=this.gl,r=t.createTexture();return t.bindTexture(t.TEXTURE_2D,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),r}async textureFromElement(e,t){let r,i=e.getBoundingClientRect(),o=this.container.getBoundingClientRect();if(!o.width||!o.height)return null;let a=Math.min(window.devicePixelRatio||1,2),s=document.createElement("canvas");s.width=Math.max(1,Math.round(o.width*a)),s.height=Math.max(1,Math.round(o.height*a));let l=s.getContext("2d");if(l.fillStyle=t,l.fillRect(0,0,s.width,s.height),e instanceof HTMLImageElement)r=e.currentSrc||e.src;else{let t=e.cloneNode(!0);t.setAttribute("width",String(i.width)),t.setAttribute("height",String(i.height)),t.setAttribute("xmlns","http://www.w3.org/2000/svg"),r="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(t))}let n=new Image;n.crossOrigin="anonymous";let u=new Promise(e=>{n.onload=()=>e(!0),n.onerror=()=>e(!1)});return(n.src=r,await u)?(l.drawImage(n,(i.left-o.left)*a,(i.top-o.top)*a,i.width*a,i.height*a),{tex:this.textureFromCanvas(s),aspect:s.width/s.height}):null}blit(e){let t=this.gl;e?(t.viewport(0,0,e.width,e.height),t.bindFramebuffer(t.FRAMEBUFFER,e.fbo)):(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)),t.drawArrays(t.TRIANGLE_STRIP,0,4)}frame;setActivo(e){!this.disposed&&(e?this.raf||(this.lastTime=performance.now(),this.raf=requestAnimationFrame(this.frame)):this.raf&&(cancelAnimationFrame(this.raf),this.raf=0))}applyPointer(){if(!this.pointer.moved)return;this.pointer.moved=!1;let{splatForce:e,splatRadius:t}=this.settings;this.splat(this.pointer.x,this.pointer.y,this.pointer.dx*e,this.pointer.dy*e,t)}splat(e,t,r,i,o){let a=this.gl,s=this.programs.splat,l=this.canvas.width/this.canvas.height;s.bind(),a.uniform1i(s.uniforms.uTarget,this.velocity.read.attach(0)),a.uniform1f(s.uniforms.uAspectRatio,l),a.uniform2f(s.uniforms.uPoint,e,t),a.uniform3f(s.uniforms.uColor,r,i,0),a.uniform1f(s.uniforms.uRadius,o),this.blit(this.velocity.write),this.velocity.swap(),a.uniform1i(s.uniforms.uTarget,this.dye.read.attach(0)),a.uniform3f(s.uniforms.uColor,1,1,1),this.blit(this.dye.write),this.dye.swap()}step(e){let t=this.gl,r=this.programs,i=this.settings;t.disable(t.BLEND),i.curlStrength>0&&(r.curl.bind(),t.uniform2f(r.curl.uniforms.uTexelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),t.uniform1i(r.curl.uniforms.uVelocity,this.velocity.read.attach(0)),this.blit(this.curl),r.vorticity.bind(),t.uniform2f(r.vorticity.uniforms.uTexelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),t.uniform1i(r.vorticity.uniforms.uVelocity,this.velocity.read.attach(0)),t.uniform1i(r.vorticity.uniforms.uCurl,this.curl.attach(1)),t.uniform1f(r.vorticity.uniforms.uCurlStrength,i.curlStrength),t.uniform1f(r.vorticity.uniforms.uDt,e),this.blit(this.velocity.write),this.velocity.swap()),r.divergence.bind(),t.uniform2f(r.divergence.uniforms.uTexelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),t.uniform1i(r.divergence.uniforms.uVelocity,this.velocity.read.attach(0)),this.blit(this.divergence),r.pressure.bind(),t.uniform2f(r.pressure.uniforms.uTexelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),t.uniform1i(r.pressure.uniforms.uDivergence,this.divergence.attach(0));for(let e=0;e<i.pressureIterations;e++)t.uniform1i(r.pressure.uniforms.uPressure,this.pressure.read.attach(1)),this.blit(this.pressure.write),this.pressure.swap();r.gradient.bind(),t.uniform2f(r.gradient.uniforms.uTexelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),t.uniform1i(r.gradient.uniforms.uPressure,this.pressure.read.attach(0)),t.uniform1i(r.gradient.uniforms.uVelocity,this.velocity.read.attach(1)),this.blit(this.velocity.write),this.velocity.swap(),r.advection.bind(),t.uniform2f(r.advection.uniforms.uTexelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),t.uniform1i(r.advection.uniforms.uVelocity,this.velocity.read.attach(0)),t.uniform1i(r.advection.uniforms.uSource,this.velocity.read.attach(0)),t.uniform1f(r.advection.uniforms.uDt,e),t.uniform1f(r.advection.uniforms.uDissipation,i.velocityDissipation),this.blit(this.velocity.write),this.velocity.swap(),t.uniform1i(r.advection.uniforms.uVelocity,this.velocity.read.attach(0)),t.uniform1i(r.advection.uniforms.uSource,this.dye.read.attach(1)),t.uniform1f(r.advection.uniforms.uDissipation,i.dyeDissipation),this.blit(this.dye.write),this.dye.swap()}render(){let e=this.gl,t=this.programs.display,r=this.settings;e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),t.bind(),e.uniform1i(t.uniforms.uDye,this.dye.read.attach(0)),this.baseTexture&&(e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.baseTexture),e.uniform1i(t.uniforms.uBaseTexture,1)),this.revealTexture&&(e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,this.revealTexture),e.uniform1i(t.uniforms.uRevealTexture,2)),e.uniform1f(t.uniforms.uRevealSize,r.revealSize),e.uniform1f(t.uniforms.uEdgeSoftness,r.edgeSoftness),e.uniform1f(t.uniforms.uEdgeWidth,r.edgeWidth),e.uniform1f(t.uniforms.uBaseImageAspect,this.baseAspect),e.uniform1f(t.uniforms.uRevealImageAspect,this.revealAspect),e.uniform1f(t.uniforms.uPlaneAspect,this.canvas.width/this.canvas.height),this.blit(null)}onPointerMove;onPointerLeave;onResize;resize(){let e=this.container.getBoundingClientRect(),t=Math.min(window.devicePixelRatio||1,2),r=Math.max(1,Math.round(e.width*t)),i=Math.max(1,Math.round(e.height*t));this.canvas.width===r&&this.canvas.height===i&&this.velocity||(this.canvas.width=r,this.canvas.height=i,this.canvas.style.width="100%",this.canvas.style.height="100%",this.gl.viewport(0,0,r,i),this.initFramebuffers())}destroy(){this.disposed=!0,cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.onResize),this.container.removeEventListener("pointermove",this.onPointerMove),this.container.removeEventListener("pointerleave",this.onPointerLeave),this.canvas.remove()}}e.s(["useHero",0,function(e){(0,t.useEffect)(()=>{if(!e)return;let t=document.querySelector(".section-w");if(!t)return;let r=t.querySelector(".video-hero-bg");if(r){r.muted=!0,r.defaultMuted=!0,r.playsInline=!0,r.setAttribute("playsinline",""),r.setAttribute("muted","");let e=()=>r.play()?.catch(()=>{});e(),r.addEventListener("loadeddata",e,{once:!0}),r.addEventListener("canplay",e,{once:!0})}let i=null,o=!1,a=async()=>{if(o)return;let e=t.querySelector(".marca-hero");try{i=new E(t,{splatRadius:3e-4,splatForce:8800}),await i.setLayers({base:e,baseBg:"#FFFFFF",reveal:"rgba(0,0,0,0)"});let r=t.querySelector(".section.hero-home");r&&(r.style.visibility="hidden")}catch{i=null}},s=t.querySelector(".marca-hero"),l=s&&!s.complete?new Promise(e=>{s.addEventListener("load",()=>e(),{once:!0}),s.addEventListener("error",()=>e(),{once:!0})}):Promise.resolve(),n=new IntersectionObserver(([e])=>i?.setActivo(e.isIntersecting),{threshold:0});return l.then(()=>requestAnimationFrame(()=>requestAnimationFrame(async()=>{await a(),!o&&i&&n.observe(t)}))),()=>{o=!0,n.disconnect(),i?.destroy();let e=t.querySelector(".section.hero-home");e&&(e.style.visibility="")}},[e])}],51806),e.s(["useMusee",0,function(e){(0,t.useEffect)(()=>{if(!e)return;(0,i.registerGsap)();let t=[...document.querySelectorAll(".musee-w")];if(!t.length)return;let a=window.matchMedia("(min-width: 992px)").matches,s=[],l=[];return t.forEach(e=>{let t=e.querySelector(".video-w");if(!t)return;let i=e.querySelector(".musee-bg"),n=e.closest(".section")??e.parentElement,u=e.querySelector(".btn-sound")??n?.querySelector(".btn-sound")??null,c=u?.querySelector(".tick-sound")??null,h=[...t.querySelectorAll("video")];h.forEach(e=>{try{e.pause(),e.readyState>=1?e.currentTime=.001:(e.networkState!==HTMLMediaElement.NETWORK_LOADING&&e.load(),e.addEventListener("loadedmetadata",()=>{try{e.currentTime=.001}catch{}},{once:!0}))}catch{}});let m=t.querySelector(".video-sticky"),f=t.querySelector(".video-reflet"),g=0;if(m&&f){let e=()=>{g=requestAnimationFrame(e),m.paused||m.readyState<2||f.readyState<1||(Math.abs(f.currentTime-m.currentTime)>.08&&(f.currentTime=m.currentTime),f.paused&&f.play()?.catch(()=>{}))};g=requestAnimationFrame(e),l.push(()=>cancelAnimationFrame(g))}let d=h.find(e=>e.classList.contains("video-sticky"))??h[0],p=!1,y=null,x=(e,t=0)=>{d&&(y?.kill(),e?(d.muted=!1,d.volume=0,d.play()?.catch(()=>{}),y=o.gsap.to(d,{volume:1,duration:.35,delay:t,ease:"power1.out"})):y=o.gsap.to(d,{volume:0,duration:.35,delay:t,ease:"power1.out",onComplete:()=>{try{d.muted=!0,d.volume=1}catch{}}}))},T=()=>{p=!p,u?.classList.toggle("is-on",p),c&&o.gsap.to(c,{xPercent:100*!!p,duration:.25,ease:"power2.out"}),x(p)};u&&(u.addEventListener("click",T),l.push(()=>u.removeEventListener("click",T)));let E=()=>{h.forEach(e=>e.play()?.catch(()=>{}))},w=()=>{p&&(p=!1,u?.classList.remove("is-on"),c&&o.gsap.to(c,{xPercent:0,duration:.25,ease:"power2.out"}),x(!1))};if(a){let r=o.gsap.fromTo(t,{scale:1.4},{scale:.4,ease:"none",scrollTrigger:{trigger:e,start:"top top",end:"bottom top",pin:e,pinSpacing:!0,scrub:1,invalidateOnRefresh:!0,refreshPriority:1,onEnter:E,onEnterBack:E,onLeave:w,onLeaveBack:w}});if(r.scrollTrigger&&s.push(r.scrollTrigger),i){let t=o.gsap.fromTo(i,{scale:1.8},{scale:1,ease:"none",scrollTrigger:{trigger:e,start:"top top",end:"bottom top",scrub:1,invalidateOnRefresh:!0}});t.scrollTrigger&&s.push(t.scrollTrigger)}}else s.push(r.ScrollTrigger.create({trigger:e,start:"top top",end:"bottom top",onEnter:E,onEnterBack:E,onLeave:w,onLeaveBack:w}))}),()=>{s.forEach(e=>{e.animation?.kill(),e.kill(!0)}),l.forEach(e=>e()),document.querySelectorAll(".musee-w").forEach(e=>o.gsap.set(e,{clearProps:"all"})),document.querySelectorAll(".musee-w .video-w, .musee-w .musee-bg").forEach(e=>o.gsap.set(e,{clearProps:"scale"}))}},[e])}],17547),e.s(["useParallax",0,function(e){(0,t.useEffect)(()=>{if(!e)return;(0,i.registerGsap)();let t=[],r=(e,t,r)=>parseFloat(e.getAttribute(t)??"")||r;return document.querySelectorAll("[parallax]").forEach(e=>{let i,a,s=r(e,"parallax-y",-60),l=r(e,"parallax-x",0),n=r(e,"parallax-scrub",1.5),u=o.gsap.fromTo(e,{y:0,x:0},{y:s,x:l,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:n}});u.scrollTrigger&&t.push(u.scrollTrigger);let c=e.querySelector("[parallax-img]");if(!c||("IMG"===c.tagName?(i=c,a=c.parentElement):(a=c,i=c.querySelector("img")),!i))return;let h=r(c,"parallax-img-y",-10),m=r(c,"parallax-img-scrub",3);a&&o.gsap.set(a,{overflow:"hidden"}),o.gsap.set(i,{height:"110%",width:"100%",objectFit:"cover",top:0});let f=o.gsap.fromTo(i,{yPercent:0},{yPercent:h,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:m}});f.scrollTrigger&&t.push(f.scrollTrigger)}),()=>{t.forEach(e=>{e.animation?.kill(),e.kill(!0)})}},[e])}],48247),e.s(["useShowreel",0,function(e){(0,t.useEffect)(()=>{if(!e)return;(0,i.registerGsap)();let t=document.querySelector(".section.showreel"),r=t?.querySelector(".video-showreel-w"),a=t?.querySelector(".video-showreel-full-w"),s=t?.querySelector(".video-showreel-flip");if(!t||!r||!a||!window.matchMedia("(min-width: 992px)").matches)return;let l=[],n=o.gsap.fromTo(a,{scale:1,borderRadius:0},{scale:.46,borderRadius:"0.375rem",ease:"none",transformOrigin:"100% 100%",scrollTrigger:{trigger:r,start:"top top",end:"+=110%",pin:r,pinSpacing:!0,scrub:1,invalidateOnRefresh:!0,refreshPriority:2}});if(n.scrollTrigger&&l.push(n.scrollTrigger),s){let e=o.gsap.fromTo(s,{autoAlpha:0,y:24},{autoAlpha:1,y:0,ease:"power2.out",scrollTrigger:{trigger:r,start:"top top",end:"+=55%",scrub:1,invalidateOnRefresh:!0}});e.scrollTrigger&&l.push(e.scrollTrigger)}return()=>{l.forEach(e=>{e.animation?.kill(),e.kill(!0)}),o.gsap.set([a,s].filter(Boolean),{clearProps:"all"})}},[e])}],41956);var w=e.i(33965);let S=[{col:"1 / 7",rowOffset:0,alignSelf:"",imgH:"43.125rem"},{col:"9 / 13",rowOffset:0,alignSelf:"end",imgH:"26.875rem"},{col:"3 / 11",rowOffset:1,alignSelf:"",imgH:"42.25rem"},{col:"1 / 5",rowOffset:2,alignSelf:"end",imgH:"26.875rem"},{col:"7 / 13",rowOffset:2,alignSelf:"",imgH:"43.125rem"},{col:"3 / 11",rowOffset:3,alignSelf:"",imgH:"42.25rem"}],b=[{col:"1 / 7",small:!1,ratio:"1 / 1"},{col:void 0,small:!0,ratio:"253 / 241"},{col:"1 / 7",small:!1,ratio:"343 / 550"}],A=[80,-150,-100,-160,100,-90],R=["inset(100% 100% 0% 0%)","inset(100% 0% 0% 100%)","inset(100% 0% 0% 0%)","inset(100% 100% 0% 0%)","inset(100% 0% 0% 100%)","inset(100% 0% 0% 0%)"];e.s(["useWorks",0,function(e){(0,t.useEffect)(()=>{if(!e)return;(0,i.registerGsap)();let t=document.querySelector(".section.works");if(!t)return;let a=window.matchMedia("(min-width: 992px)").matches,s=[],l=null,n=null,u=[],c=()=>{let e=[...t.querySelectorAll(".works-word-block-state1 .works-word")],i=[...t.querySelectorAll(".works-word-block-state2")];if(!e.length||i.length<e.length)return;u=e.map(e=>({word:e,parent:e.parentElement,next:e.nextSibling}));let o=w.Flip.getState(e);e.forEach((e,t)=>i[t].appendChild(e)),n=w.Flip.from(o,{ease:"power4.inOut",duration:1.4,stagger:{each:.2,from:"end"},repeat:1,yoyo:!0,paused:!0}),e.forEach((t,r)=>{let i=(e.length-1-r)*.1;n.to(t,{scale:.2,duration:.8,ease:"power4.inOut"},i),n.to(t,{scale:1,duration:.8,ease:"power4.inOut"},i+.8)}),l=r.ScrollTrigger.create({trigger:t,start:"top top",end:"bottom bottom",scrub:3,animation:n})},h=()=>{l?.kill(),l=null,n?.kill(),n=null,u.forEach(({word:e,parent:t,next:r})=>{t&&(o.gsap.killTweensOf(e),o.gsap.set(e,{clearProps:"all"}),r&&r.parentNode===t?t.insertBefore(e,r):t.appendChild(e))}),u=[]};if(a){let e;c();let t=()=>{window.clearTimeout(e),e=window.setTimeout(()=>{h(),c()},200)};window.addEventListener("resize",t),s.push(()=>{window.clearTimeout(e),window.removeEventListener("resize",t),h()})}let m=[...t.querySelectorAll(".work_item")],f=[];if(!a&&m.length){let e=m[0].parentElement;e&&o.gsap.set(e,{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gridAutoFlow:"row dense",alignItems:"start"})}return m.forEach((e,t)=>{let r=e.querySelector(".img-work-w"),i=e.querySelector(".img-work");if(a){let i=S[t%S.length],o=4*Math.floor(t/S.length)+i.rowOffset+1;e.style.gridColumn=i.col,e.style.gridRow=String(o),e.style.alignSelf=i.alignSelf,r&&(r.style.height=i.imgH)}else{let i=b[t%b.length],o=i.col;i.small&&(o=Math.floor(t/b.length)%2==0?"3 / 7":"1 / 5"),e.style.gridColumn=o??"1 / 7",e.style.gridRow="auto",e.style.alignSelf="start",e.style.display="flex",e.style.flexDirection="column",r&&(r.style.width="100%",r.style.height="auto",r.style.aspectRatio=i.ratio)}if(r&&o.gsap.set(r,{overflow:"hidden"}),i&&o.gsap.set(i,{height:a?"130%":"100%",width:"100%",objectFit:"cover",top:a?"-15%":0}),r){o.gsap.set(r,{clipPath:R[t%R.length]});let i=o.gsap.to(r,{clipPath:"inset(0% 0% 0% 0%)",ease:"power4.inOut",duration:1,scrollTrigger:{trigger:e,start:"top 88%",toggleActions:"play none none none"}});i.scrollTrigger&&f.push(i.scrollTrigger)}if(a){let r=A[t%A.length],a=o.gsap.fromTo(e,{y:0},{y:r,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:1.5}});if(a.scrollTrigger&&f.push(a.scrollTrigger),i){let t=o.gsap.fromTo(i,{yPercent:-2},{yPercent:-10,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom center",scrub:3}});t.scrollTrigger&&f.push(t.scrollTrigger)}}}),s.push(()=>f.forEach(e=>{e.animation?.kill(),e.kill(!0)})),t.querySelectorAll(".work-link").forEach(e=>{let t=e.querySelector(".cursor-work");if(!t)return;o.gsap.set(e,{position:"relative"}),o.gsap.set(t,{position:"absolute",xPercent:-50,yPercent:-50,left:0,top:0,scale:0,autoAlpha:0,pointerEvents:"none",zIndex:10}),e.style.cursor="none";let r={tx:0,ty:0,cx:0,cy:0,raf:0,active:!1,lastX:NaN,lastY:NaN},i=()=>{r.cx+=(r.tx-r.cx)*.09,r.cy+=(r.ty-r.cy)*.09,o.gsap.set(t,{x:r.cx,y:r.cy});let e=Math.abs(r.cx-r.tx)>.05||Math.abs(r.cy-r.ty)>.05;r.raf=r.active||e?requestAnimationFrame(i):0},a=()=>{r.active&&(r.active=!1,o.gsap.to(t,{scale:0,autoAlpha:0,duration:.38,ease:"power3.in",overwrite:"auto"}))},l=a=>{let s=e.getBoundingClientRect();r.tx=a.clientX-s.left,r.ty=a.clientY-s.top;let l=a.clientX!==r.lastX||a.clientY!==r.lastY;if(r.lastX=a.clientX,r.lastY=a.clientY,!l){r.active&&!r.raf&&(r.raf=requestAnimationFrame(i));return}r.active||(r.cx=r.tx,r.cy=r.ty,o.gsap.set(t,{x:r.cx,y:r.cy})),!r.active&&(r.active=!0,o.gsap.to(t,{scale:1,autoAlpha:1,duration:.6,ease:"back.out(1.8)",overwrite:"auto"}),r.raf||(r.raf=requestAnimationFrame(i))),r.raf||(r.raf=requestAnimationFrame(i))};e.addEventListener("mousemove",l),e.addEventListener("mouseleave",a),s.push(()=>{e.removeEventListener("mousemove",l),e.removeEventListener("mouseleave",a),r.raf&&cancelAnimationFrame(r.raf),o.gsap.killTweensOf(t)})}),()=>s.forEach(e=>e())},[e])}],91304)},25774,e=>{"use strict";var t=e.i(71645);e.s(["useVideos",0,function(e){(0,t.useEffect)(()=>{if(!e)return;let t=[...document.querySelectorAll("video")];if(!t.length)return;let r=new IntersectionObserver(e=>{e.forEach(e=>{let t=e.target;e.isIntersecting?t.play().catch(()=>{}):t.paused||t.pause()})},{rootMargin:"200px 0px 200px 0px",threshold:0});return t.forEach(e=>{e.preload&&"auto"!==e.preload||(e.preload="metadata"),e.muted=!0,e.playsInline=!0,r.observe(e)}),()=>r.disconnect()},[e])}])}]);