(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42510,51806,e=>{"use strict";var t=e.i(71645),i=e.i(83495),r=e.i(39362);e.s(["useEagerImages",0,function(e){(0,t.useEffect)(()=>{let t;if(!e)return;(0,r.registerGsap)();let o=()=>{window.clearTimeout(t),t=window.setTimeout(()=>i.ScrollTrigger.refresh(),150)};return[...document.querySelectorAll("img")].forEach(e=>{"lazy"===e.loading&&(e.loading="eager"),e.complete||(e.addEventListener("load",o,{once:!0}),e.addEventListener("error",o,{once:!0}))}),document.querySelectorAll("video").forEach(e=>{e.readyState<1&&e.addEventListener("loadedmetadata",o,{once:!0})}),document.fonts.ready.then(o),requestAnimationFrame(()=>requestAnimationFrame(o)),()=>window.clearTimeout(t)},[e])}],42510);let o=`
precision highp float;

attribute vec2 aPosition;
varying vec2 vUv;

void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,s=`
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
}`,a=`
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
}`,u=`
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
}`,l=`
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
}`,c=`
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
}`,f=`
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
}`,m={simResolution:256,dyeResolution:512,velocityDissipation:.962,dyeDissipation:.988,pressureIterations:20,curlStrength:0,splatRadius:6e-5,splatForce:5900,revealSize:3.9,edgeSoftness:.5,edgeWidth:.01};function d(e,t,i){let r=e.createShader(t);if(e.shaderSource(r,i),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw Error(e.getShaderInfoLog(r)??"shader compile failed");return r}class g{gl;program;uniforms;constructor(e,t,i){if(this.gl=e,this.uniforms={},this.program=e.createProgram(),e.attachShader(this.program,d(e,e.VERTEX_SHADER,t)),e.attachShader(this.program,d(e,e.FRAGMENT_SHADER,i)),e.linkProgram(this.program),!e.getProgramParameter(this.program,e.LINK_STATUS))throw Error(e.getProgramInfoLog(this.program)??"program link failed");const r=e.getProgramParameter(this.program,e.ACTIVE_UNIFORMS);for(let t=0;t<r;t++){const i=e.getActiveUniform(this.program,t).name;this.uniforms[i]=e.getUniformLocation(this.program,i)}}bind(){this.gl.useProgram(this.program)}}class p{container;gl;canvas;settings;raf;disposed;lastTime;velocity;dye;pressure;divergence;curl;programs;quadBuffer;baseTexture;revealTexture;baseAspect;revealAspect;pointer;constructor(e,t={}){this.container=e,this.raf=0,this.disposed=!1,this.lastTime=performance.now(),this.baseTexture=null,this.revealTexture=null,this.baseAspect=1,this.revealAspect=16/9,this.pointer={x:.5,y:.5,dx:0,dy:0,moved:!1,down:!1},this.frame=()=>{if(this.disposed)return;let e=performance.now(),t=Math.min((e-this.lastTime)/1e3,.016666);this.lastTime=e,this.applyPointer(),this.step(t),this.render(),this.raf=requestAnimationFrame(this.frame)},this.onPointerMove=e=>{let t=this.container.getBoundingClientRect(),i=(e.clientX-t.left)/t.width,r=1-(e.clientY-t.top)/t.height;this.pointer.dx=i-this.pointer.x,this.pointer.dy=r-this.pointer.y,this.pointer.x=i,this.pointer.y=r,this.pointer.moved=Math.abs(this.pointer.dx)>0||Math.abs(this.pointer.dy)>0},this.onPointerLeave=()=>{this.pointer.moved=!1},this.onResize=()=>{this.resize()},this.settings={...m,...t},this.canvas=document.createElement("canvas"),this.canvas.className="mask-reveal-canvas",e.appendChild(this.canvas);const i=this.canvas.getContext("webgl",{alpha:!0,premultipliedAlpha:!1,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1});if(!i)throw Error("WebGL unavailable");this.gl=i,i.getExtension("OES_texture_float"),i.getExtension("OES_texture_half_float"),i.getExtension("OES_texture_half_float_linear"),i.getExtension("OES_texture_float_linear"),this.initQuad(),this.initPrograms(),this.resize(),window.addEventListener("resize",this.onResize),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerleave",this.onPointerLeave),this.raf=requestAnimationFrame(this.frame)}initQuad(){let e=this.gl;this.quadBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadBuffer),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0)}initPrograms(){let e=this.gl,t=t=>{let i=new g(e,o,t);return e.bindAttribLocation(i.program,0,"aPosition"),i};this.programs={advection:t(s),splat:t(a),curl:t(n),vorticity:t(u),divergence:t(l),pressure:t(c),gradient:t(h),display:t(f)}}createFBO(e,t,i,r,o,s){let a=this.gl;a.activeTexture(a.TEXTURE0);let n=a.createTexture();a.bindTexture(a.TEXTURE_2D,n),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,s),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,s),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texImage2D(a.TEXTURE_2D,0,i,e,t,0,r,o,null);let u=a.createFramebuffer();return a.bindFramebuffer(a.FRAMEBUFFER,u),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,n,0),a.viewport(0,0,e,t),a.clear(a.COLOR_BUFFER_BIT),{texture:n,fbo:u,width:e,height:t,texelSizeX:1/e,texelSizeY:1/t,attach:e=>(a.activeTexture(a.TEXTURE0+e),a.bindTexture(a.TEXTURE_2D,n),e)}}createDoubleFBO(e,t,i,r,o,s){let a=this.createFBO(e,t,i,r,o,s),n=this.createFBO(e,t,i,r,o,s);return{width:e,height:t,texelSizeX:1/e,texelSizeY:1/t,get read(){return a},set read(v){a=v},get write(){return n},set write(v){n=v},swap(){let e=a;a=n,n=e}}}initFramebuffers(){let e=this.gl,t=e.getExtension("OES_texture_half_float"),i=t?t.HALF_FLOAT_OES:e.UNSIGNED_BYTE,r=e.getExtension("OES_texture_half_float_linear")?e.LINEAR:e.NEAREST,o=this.resolution(this.settings.simResolution),s=this.resolution(this.settings.dyeResolution);this.dye=this.createDoubleFBO(s.width,s.height,e.RGBA,e.RGBA,i,r),this.velocity=this.createDoubleFBO(o.width,o.height,e.RGBA,e.RGBA,i,r),this.pressure=this.createDoubleFBO(o.width,o.height,e.RGBA,e.RGBA,i,e.NEAREST),this.divergence=this.createFBO(o.width,o.height,e.RGBA,e.RGBA,i,e.NEAREST),this.curl=this.createFBO(o.width,o.height,e.RGBA,e.RGBA,i,e.NEAREST)}resolution(e){let t=this.gl,i=t.drawingBufferWidth/t.drawingBufferHeight,r=Math.round(e),o=Math.round(e*(i<1?1/i:i));return i>1?{width:o,height:r}:{width:r,height:o}}async setLayers({base:e,baseBg:t="#ffffff",reveal:i="rgba(0,0,0,0)"}={}){if(e){let i=await this.textureFromElement(e,t);i&&(this.baseTexture=i.tex,this.baseAspect=i.aspect)}else this.baseTexture=this.textureFromColor(t),this.baseAspect=1;this.revealTexture=this.textureFromColor(i)}textureFromColor(e){this.gl;let t=document.createElement("canvas");t.width=t.height=1;let i=t.getContext("2d");return i.fillStyle=e,i.fillRect(0,0,1,1),this.textureFromCanvas(t)}textureFromCanvas(e){let t=this.gl,i=t.createTexture();return t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),i}async textureFromElement(e,t){let i,r=e.getBoundingClientRect(),o=this.container.getBoundingClientRect();if(!o.width||!o.height)return null;let s=Math.min(window.devicePixelRatio||1,2),a=document.createElement("canvas");a.width=Math.max(1,Math.round(o.width*s)),a.height=Math.max(1,Math.round(o.height*s));let n=a.getContext("2d");if(n.fillStyle=t,n.fillRect(0,0,a.width,a.height),e instanceof HTMLImageElement)i=e.currentSrc||e.src;else{let t=e.cloneNode(!0);t.setAttribute("width",String(r.width)),t.setAttribute("height",String(r.height)),t.setAttribute("xmlns","http://www.w3.org/2000/svg"),i="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(t))}let u=new Image;u.crossOrigin="anonymous";let l=new Promise(e=>{u.onload=()=>e(!0),u.onerror=()=>e(!1)});return(u.src=i,await l)?(n.drawImage(u,(r.left-o.left)*s,(r.top-o.top)*s,r.width*s,r.height*s),{tex:this.textureFromCanvas(a),aspect:a.width/a.height}):null}blit(e){let t=this.gl;e?(t.viewport(0,0,e.width,e.height),t.bindFramebuffer(t.FRAMEBUFFER,e.fbo)):(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)),t.drawArrays(t.TRIANGLE_STRIP,0,4)}frame;setActivo(e){!this.disposed&&(e?this.raf||(this.lastTime=performance.now(),this.raf=requestAnimationFrame(this.frame)):this.raf&&(cancelAnimationFrame(this.raf),this.raf=0))}applyPointer(){if(!this.pointer.moved)return;this.pointer.moved=!1;let{splatForce:e,splatRadius:t}=this.settings;this.splat(this.pointer.x,this.pointer.y,this.pointer.dx*e,this.pointer.dy*e,t)}splat(e,t,i,r,o){let s=this.gl,a=this.programs.splat,n=this.canvas.width/this.canvas.height;a.bind(),s.uniform1i(a.uniforms.uTarget,this.velocity.read.attach(0)),s.uniform1f(a.uniforms.uAspectRatio,n),s.uniform2f(a.uniforms.uPoint,e,t),s.uniform3f(a.uniforms.uColor,i,r,0),s.uniform1f(a.uniforms.uRadius,o),this.blit(this.velocity.write),this.velocity.swap(),s.uniform1i(a.uniforms.uTarget,this.dye.read.attach(0)),s.uniform3f(a.uniforms.uColor,1,1,1),this.blit(this.dye.write),this.dye.swap()}step(e){let t=this.gl,i=this.programs,r=this.settings;t.disable(t.BLEND),r.curlStrength>0&&(i.curl.bind(),t.uniform2f(i.curl.uniforms.uTexelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),t.uniform1i(i.curl.uniforms.uVelocity,this.velocity.read.attach(0)),this.blit(this.curl),i.vorticity.bind(),t.uniform2f(i.vorticity.uniforms.uTexelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),t.uniform1i(i.vorticity.uniforms.uVelocity,this.velocity.read.attach(0)),t.uniform1i(i.vorticity.uniforms.uCurl,this.curl.attach(1)),t.uniform1f(i.vorticity.uniforms.uCurlStrength,r.curlStrength),t.uniform1f(i.vorticity.uniforms.uDt,e),this.blit(this.velocity.write),this.velocity.swap()),i.divergence.bind(),t.uniform2f(i.divergence.uniforms.uTexelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),t.uniform1i(i.divergence.uniforms.uVelocity,this.velocity.read.attach(0)),this.blit(this.divergence),i.pressure.bind(),t.uniform2f(i.pressure.uniforms.uTexelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),t.uniform1i(i.pressure.uniforms.uDivergence,this.divergence.attach(0));for(let e=0;e<r.pressureIterations;e++)t.uniform1i(i.pressure.uniforms.uPressure,this.pressure.read.attach(1)),this.blit(this.pressure.write),this.pressure.swap();i.gradient.bind(),t.uniform2f(i.gradient.uniforms.uTexelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),t.uniform1i(i.gradient.uniforms.uPressure,this.pressure.read.attach(0)),t.uniform1i(i.gradient.uniforms.uVelocity,this.velocity.read.attach(1)),this.blit(this.velocity.write),this.velocity.swap(),i.advection.bind(),t.uniform2f(i.advection.uniforms.uTexelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),t.uniform1i(i.advection.uniforms.uVelocity,this.velocity.read.attach(0)),t.uniform1i(i.advection.uniforms.uSource,this.velocity.read.attach(0)),t.uniform1f(i.advection.uniforms.uDt,e),t.uniform1f(i.advection.uniforms.uDissipation,r.velocityDissipation),this.blit(this.velocity.write),this.velocity.swap(),t.uniform1i(i.advection.uniforms.uVelocity,this.velocity.read.attach(0)),t.uniform1i(i.advection.uniforms.uSource,this.dye.read.attach(1)),t.uniform1f(i.advection.uniforms.uDissipation,r.dyeDissipation),this.blit(this.dye.write),this.dye.swap()}render(){let e=this.gl,t=this.programs.display,i=this.settings;e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),t.bind(),e.uniform1i(t.uniforms.uDye,this.dye.read.attach(0)),this.baseTexture&&(e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.baseTexture),e.uniform1i(t.uniforms.uBaseTexture,1)),this.revealTexture&&(e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,this.revealTexture),e.uniform1i(t.uniforms.uRevealTexture,2)),e.uniform1f(t.uniforms.uRevealSize,i.revealSize),e.uniform1f(t.uniforms.uEdgeSoftness,i.edgeSoftness),e.uniform1f(t.uniforms.uEdgeWidth,i.edgeWidth),e.uniform1f(t.uniforms.uBaseImageAspect,this.baseAspect),e.uniform1f(t.uniforms.uRevealImageAspect,this.revealAspect),e.uniform1f(t.uniforms.uPlaneAspect,this.canvas.width/this.canvas.height),this.blit(null)}onPointerMove;onPointerLeave;onResize;resize(){let e=this.container.getBoundingClientRect(),t=Math.min(window.devicePixelRatio||1,2),i=Math.max(1,Math.round(e.width*t)),r=Math.max(1,Math.round(e.height*t));this.canvas.width===i&&this.canvas.height===r&&this.velocity||(this.canvas.width=i,this.canvas.height=r,this.canvas.style.width="100%",this.canvas.style.height="100%",this.gl.viewport(0,0,i,r),this.initFramebuffers())}destroy(){this.disposed=!0,cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.onResize),this.container.removeEventListener("pointermove",this.onPointerMove),this.container.removeEventListener("pointerleave",this.onPointerLeave),this.canvas.remove()}}e.s(["useHero",0,function(e){(0,t.useEffect)(()=>{if(!e)return;let t=document.querySelector(".section-w");if(!t)return;let i=t.querySelector(".video-hero-bg");if(i){i.muted=!0,i.defaultMuted=!0,i.playsInline=!0,i.setAttribute("playsinline",""),i.setAttribute("muted","");let e=()=>i.play()?.catch(()=>{});e(),i.addEventListener("loadeddata",e,{once:!0}),i.addEventListener("canplay",e,{once:!0})}let r=null,o=!1,s=async()=>{if(o)return;let e=t.querySelector(".marca-hero");try{r=new p(t,{splatRadius:3e-4,splatForce:8800}),await r.setLayers({base:e,baseBg:"#FFFFFF",reveal:"rgba(0,0,0,0)"});let i=t.querySelector(".section.hero-home");i&&(i.style.visibility="hidden")}catch{r=null}},a=t.querySelector(".marca-hero"),n=a&&!a.complete?new Promise(e=>{a.addEventListener("load",()=>e(),{once:!0}),a.addEventListener("error",()=>e(),{once:!0})}):Promise.resolve(),u=new IntersectionObserver(([e])=>r?.setActivo(e.isIntersecting),{threshold:0});return n.then(()=>requestAnimationFrame(()=>requestAnimationFrame(async()=>{await s(),!o&&r&&u.observe(t)}))),()=>{o=!0,u.disconnect(),r?.destroy();let e=t.querySelector(".section.hero-home");e&&(e.style.visibility="")}},[e])}],51806)},25774,e=>{"use strict";var t=e.i(71645);e.s(["useVideos",0,function(e){(0,t.useEffect)(()=>{if(!e)return;let t=[...document.querySelectorAll("video")];if(!t.length)return;let i=new IntersectionObserver(e=>{e.forEach(e=>{let t=e.target;e.isIntersecting?t.play().catch(()=>{}):t.paused||t.pause()})},{rootMargin:"200px 0px 200px 0px",threshold:0});return t.forEach(e=>{e.preload&&"auto"!==e.preload||(e.preload="metadata"),e.muted=!0,e.playsInline=!0,i.observe(e)}),()=>i.disconnect()},[e])}])}]);