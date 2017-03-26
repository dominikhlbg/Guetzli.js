function(global,env,buffer) {
"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.STACKTOP|0;var j=env.STACK_MAX|0;var k=env.tempDoublePtr|0;var l=env.ABORT|0;var m=env.cttz_i8|0;var n=0;var o=0;var p=0;var q=0;var r=global.NaN,s=global.Infinity;var t=0,u=0,v=0,w=0,x=0.0,y=0,z=0,A=0,B=0.0;var C=0;var D=0;var E=0;var F=0;var G=0;var H=0;var I=0;var J=0;var K=0;var L=0;var M=global.Math.floor;var N=global.Math.abs;var O=global.Math.sqrt;var P=global.Math.pow;var Q=global.Math.cos;var R=global.Math.sin;var S=global.Math.tan;var T=global.Math.acos;var U=global.Math.asin;var V=global.Math.atan;var W=global.Math.atan2;var X=global.Math.exp;var Y=global.Math.log;var Z=global.Math.ceil;var _=global.Math.imul;var $=global.Math.min;var aa=global.Math.clz32;var ba=env.abort;var ca=env.assert;var da=env.invoke_iiii;var ea=env.invoke_viiiii;var fa=env.invoke_dii;var ga=env.invoke_di;var ha=env.invoke_vi;var ia=env.invoke_viiidiiii;var ja=env.invoke_vii;var ka=env.invoke_ii;var la=env.invoke_iid;var ma=env.invoke_v;var na=env.invoke_viiiiii;var oa=env.invoke_iii;var pa=env.invoke_diiii;var qa=env.invoke_viiii;var ra=env._fabs;var sa=env._pthread_cleanup_pop;var ta=env._exp;var ua=env._llvm_pow_f64;var va=env._sqrtf;var wa=env._pthread_cleanup_push;var xa=env._abort;var ya=env.___cxa_guard_acquire;var za=env.___setErrNo;var Aa=env.___assert_fail;var Ba=env.___cxa_allocate_exception;var Ca=env.___cxa_find_matching_catch;var Da=env.___cxa_guard_release;var Ea=env._emscripten_set_main_loop_timing;var Fa=env._fabsf;var Ga=env._sbrk;var Ha=env.___cxa_begin_catch;var Ia=env._emscripten_memcpy_big;var Ja=env.___resumeException;var Ka=env.__ZSt18uncaught_exceptionv;var La=env._sysconf;var Ma=env._pthread_getspecific;var Na=env.___syscall221;var Oa=env._pthread_self;var Pa=env._pthread_once;var Qa=env._sqrt;var Ra=env.___syscall54;var Sa=env.___unlock;var Ta=env._emscripten_set_main_loop;var Ua=env._pthread_setspecific;var Va=env.___cxa_throw;var Wa=env.__exit;var Xa=env.___lock;var Ya=env.___syscall6;var Za=env.___syscall5;var _a=env._time;var $a=env._pthread_key_create;var ab=env.___syscall140;var bb=env._exit;var cb=env.___syscall145;var db=env.___syscall146;var eb=0.0;
// EMSCRIPTEN_START_FUNCS
function xc(f, g, h, j) {
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, va = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0, Ka = 0, La = 0, Ma = 0, Na = 0, Oa = 0, Pa = 0, Qa = 0, Ra = 0, Sa = 0, Ta = 0, Ua = 0, Va = 0, Wa = 0, Xa = 0, Ya = 0, Za = 0, _a = 0, $a = 0, ab = 0, bb = 0, cb = 0, db = 0, eb = 0, fb = 0, gb = 0, hb = 0, ib = 0, jb = 0, kb = 0, lb = 0, mb = 0, nb = 0, ob = 0, pb = 0, qb = 0, rb = 0, sb = 0, tb = 0, ub = 0, vb = 0, wb = 0, xb = 0, yb = 0, zb = 0, Ab = 0, Bb = 0, Cb = 0, Db = 0, Eb = 0, Fb = 0, Gb = 0, Hb = 0, Ib = 0, Jb = 0, Kb = 0, Lb = 0, Mb = 0, Nb = 0, Ob = 0, Pb = 0, Qb = 0, Rb = 0, Sb = 0, Tb = 0, Ub = 0, Vb = 0, Wb = 0, Xb = 0, Yb = 0, Zb = 0, _b = 0, $b = 0, ac = 0, bc = 0, cc = 0, dc = 0, ec = 0, fc = 0, gc = 0, hc = 0, ic = 0, jc = 0, kc = 0, lc = 0, mc = 0, nc = 0, oc = 0, pc = 0, qc = 0, rc = 0, sc = 0, tc = 0, uc = 0, vc = 0, xc = 0, yc = 0, zc = 0, Ac = 0, Bc = 0, Cc = 0, Dc = 0, Ec = 0, Fc = 0, Gc = 0, Hc = 0, Ic = 0, Jc = 0, Kc = 0, Lc = 0, Mc = 0, Nc = 0, Oc = 0, Pc = 0, Qc = 0;
 Pc = i;
 i = i + 1296 | 0;
 Kc = Pc + 728 | 0;
 tc = Pc + 712 | 0;
 sc = Pc + 696 | 0;
 dc = Pc + 688 | 0;
 cc = Pc + 672 | 0;
 rc = Pc + 656 | 0;
 bc = Pc + 648 | 0;
 ac = Pc + 632 | 0;
 _b = Pc + 624 | 0;
 Zb = Pc + 608 | 0;
 Cc = Pc + 600 | 0;
 qc = Pc + 592 | 0;
 pc = Pc + 576 | 0;
 Yb = Pc + 568 | 0;
 Xb = Pc + 552 | 0;
 Wb = Pc + 536 | 0;
 Vb = Pc + 528 | 0;
 Bc = Pc + 512 | 0;
 oc = Pc + 504 | 0;
 nc = Pc + 496 | 0;
 Ac = Pc + 480 | 0;
 zc = Pc + 464 | 0;
 mc = Pc + 456 | 0;
 Tb = Pc + 448 | 0;
 Sb = Pc + 440 | 0;
 lc = Pc + 432 | 0;
 kc = Pc + 416 | 0;
 Qb = Pc + 408 | 0;
 Fc = Pc + 392 | 0;
 Ec = Pc + 376 | 0;
 Hb = Pc + 368 | 0;
 Gb = Pc + 360 | 0;
 Fb = Pc + 352 | 0;
 Eb = Pc + 344 | 0;
 Db = Pc + 336 | 0;
 Cb = Pc + 320 | 0;
 Bb = Pc + 312 | 0;
 Ab = Pc + 304 | 0;
 zb = Pc + 296 | 0;
 yb = Pc + 288 | 0;
 xb = Pc + 272 | 0;
 jc = Pc + 264 | 0;
 ic = Pc + 248 | 0;
 Dc = Pc + 240 | 0;
 Ob = Pc + 232 | 0;
 Nb = Pc + 224 | 0;
 Mb = Pc + 208 | 0;
 Lb = Pc + 200 | 0;
 Kb = Pc + 192 | 0;
 Jb = Pc + 184 | 0;
 Ib = Pc + 176 | 0;
 hc = Pc + 160 | 0;
 gc = Pc + 144 | 0;
 Gc = Pc + 136 | 0;
 fc = Pc + 128 | 0;
 xc = Pc + 120 | 0;
 vc = Pc + 112 | 0;
 uc = Pc + 96 | 0;
 ec = Pc + 88 | 0;
 $b = Pc + 80 | 0;
 Ub = Pc + 72 | 0;
 Rb = Pc + 64 | 0;
 Pb = Pc + 48 | 0;
 yc = Pc + 32 | 0;
 l = Pc + 24 | 0;
 m = Pc + 8 | 0;
 vb = Pc + 744 | 0;
 wb = Pc;
 Jc = Pc + 776 | 0;
 sb = Pc + 732 | 0;
 do if (g >>> 0 < 2) {
  k = c[8426] | 0;
  if (!g) l = 0; else D = 5;
 } else {
  if ((a[f >> 0] | 0) != -1) {
   k = c[8426] | 0;
   D = 5;
   break;
  }
  k = a[f + 1 >> 0] | 0;
  if (k << 24 >> 24 != -40) {
   Oc = c[8426] | 0;
   c[l >> 2] = k & 255;
   qf(Oc, 35537, l) | 0;
   c[j + 148 >> 2] = 1;
   Oc = 0;
   i = Pc;
   return Oc | 0;
  }
  Oc = ye(12128) | 0;
  k = 3032;
  l = Oc;
  while (1) {
   a[l >> 0] = 0;
   b[l + 2 >> 1] = -1;
   k = k + -1 | 0;
   if (!k) break; else l = l + 4 | 0;
  }
  Nc = ye(12128) | 0;
  k = 3032;
  l = Nc;
  while (1) {
   a[l >> 0] = 0;
   b[l + 2 >> 1] = -1;
   k = k + -1 | 0;
   if (!k) break; else l = l + 4 | 0;
  }
  pg(Jc | 0, 0, 512) | 0;
  Ea = j + 4 | 0;
  Fa = j + 80 | 0;
  mb = j + 84 | 0;
  Ca = j + 16 | 0;
  Da = j + 12 | 0;
  Ga = j + 20 | 0;
  Ha = j + 24 | 0;
  Ba = (h | 0) != 2;
  Ia = j + 104 | 0;
  Ja = j + 108 | 0;
  Ka = j + 112 | 0;
  La = (h | 0) == 0;
  Ma = vb + 4 | 0;
  Na = vb + 8 | 0;
  Oa = vb + 12 | 0;
  Pa = vb + 16 | 0;
  Qa = vb + 20 | 0;
  Ra = vb + 20 | 0;
  Sa = vb + 24 | 0;
  Ta = vb + 28 | 0;
  Lc = c[8426] | 0;
  Mc = j + 148 | 0;
  nb = (h | 0) == 2;
  Hc = j + 72 | 0;
  Ua = j + 76 | 0;
  Va = j + 68 | 0;
  pb = j + 80 | 0;
  Wa = vb + 16 | 0;
  Xa = vb + 20 | 0;
  Ya = vb + 24 | 0;
  Za = vb + 16 | 0;
  _a = j + 96 | 0;
  $a = g + -2 | 0;
  ab = j + 28 | 0;
  bb = vb + 4 | 0;
  cb = vb + 8 | 0;
  db = vb + 12 | 0;
  Ic = j + 68 | 0;
  eb = j + 100 | 0;
  fb = j + 92 | 0;
  gb = j + 56 | 0;
  qb = j + 60 | 0;
  ob = vb + 4 | 0;
  hb = vb + 8 | 0;
  ib = vb + 12 | 0;
  jb = vb + 16 | 0;
  kb = vb + 20 | 0;
  lb = j + 64 | 0;
  ra = (h | 0) == 1;
  sa = j + 36 | 0;
  ta = j + 40 | 0;
  ua = j + 32 | 0;
  va = j + 48 | 0;
  wa = j + 52 | 0;
  xa = j + 44 | 0;
  ya = j + 120 | 0;
  za = j + 124 | 0;
  Aa = j + 116 | 0;
  k = 2;
  pa = 0;
  t = 0;
  a : while (1) {
   l = k + 1 | 0;
   if (l >>> 0 < g >>> 0) {
    h = k;
    m = 0;
    while (1) {
     if (((a[f + h >> 0] | 0) == -1 ? (ub = a[f + l >> 0] | 0, (ub & 255) >= 192) : 0) ? (a[37955 + ((ub & 255) + -192) >> 0] | 0) != 0 : 0) break;
     m = m + 1 | 0;
     h = l + 1 | 0;
     if (h >>> 0 < g >>> 0) {
      qa = l;
      l = h;
      h = qa;
     } else break;
    }
    if (m) {
     l = c[Ja >> 2] | 0;
     h = c[Ka >> 2] | 0;
     if (l >>> 0 >= h >>> 0) {
      r = c[Ia >> 2] | 0;
      s = r;
      n = l - s + 1 | 0;
      if ((n | 0) < 0) {
       D = 23;
       break;
      }
      q = r;
      l = h - q | 0;
      if (l >>> 0 < 1073741823) {
       l = l << 1;
       l = l >>> 0 < n >>> 0 ? n : l;
       n = c[Ja >> 2] | 0;
       h = n - q | 0;
       if (!l) {
        p = 0;
        o = 0;
        l = n;
       } else D = 27;
      } else {
       h = c[Ja >> 2] | 0;
       l = 2147483647;
       n = h;
       h = h - q | 0;
       D = 27;
      }
      if ((D | 0) == 27) {
       D = 0;
       p = l;
       o = ye(l) | 0;
       l = n;
      }
      a[o + h >> 0] = -1;
      oa = l - q | 0;
      qa = o + (h - oa) | 0;
      tg(qa | 0, r | 0, oa | 0) | 0;
      c[Ia >> 2] = qa;
      c[Ja >> 2] = o + (h + 1);
      c[Ka >> 2] = o + p;
      if (s) Ae(s);
     } else {
      a[l >> 0] = -1;
      c[Ja >> 2] = (c[Ja >> 2] | 0) + 1;
     }
     hg(sb, f + k | 0, m);
     l = c[ya >> 2] | 0;
     if (l >>> 0 < (c[za >> 2] | 0) >>> 0) {
      c[l >> 2] = c[sb >> 2];
      c[l + 4 >> 2] = c[sb + 4 >> 2];
      c[l + 8 >> 2] = c[sb + 8 >> 2];
      c[sb >> 2] = 0;
      c[sb + 4 >> 2] = 0;
      c[sb + 8 >> 2] = 0;
      c[ya >> 2] = (c[ya >> 2] | 0) + 12;
     } else le(Aa, sb);
     ig(sb);
     l = m + k | 0;
    } else l = k;
   } else l = k;
   h = l + 2 | 0;
   if (h >>> 0 > g >>> 0) {
    D = 36;
    break;
   }
   if ((a[f + l >> 0] | 0) != -1) {
    D = 36;
    break;
   }
   n = f + (l + 1) | 0;
   qa = a[n >> 0] | 0;
   k = qa & 255;
   switch (k | 0) {
   case 194:
   case 193:
   case 192:
    {
     if (c[j >> 2] | 0) {
      D = 41;
      break a;
     }
     r = l + 10 | 0;
     if (r >>> 0 > g >>> 0) {
      k = h;
      D = 43;
      break a;
     }
     m = d[f + h >> 0] << 8 | d[f + (l + 3) >> 0];
     k = a[f + (l + 4) >> 0] | 0;
     n = d[f + (l + 5) >> 0] << 8 | d[f + (l + 6) >> 0];
     o = d[f + (l + 7) >> 0] << 8 | d[f + (l + 8) >> 0];
     p = d[f + (l + 9) >> 0] | 0;
     if (k << 24 >> 24 != 8) {
      D = 45;
      break a;
     }
     if ((n + -1 | 0) >>> 0 > 65534) {
      k = n;
      D = 47;
      break a;
     }
     if ((o + -1 | 0) >>> 0 > 65534) {
      k = o;
      D = 49;
      break a;
     }
     if ((p + -1 | 0) >>> 0 > 3) {
      k = p;
      D = 51;
      break a;
     }
     k = p * 3 | 0;
     if ((k + r | 0) >>> 0 > g >>> 0) {
      l = r;
      D = 53;
      break a;
     }
     c[Ea >> 2] = n;
     c[j >> 2] = o;
     k = c[mb >> 2] | 0;
     l = c[Fa >> 2] | 0;
     n = (k - l | 0) / 40 | 0;
     if (p >>> 0 <= n >>> 0) if (p >>> 0 < n >>> 0 ? (tb = l + (p * 40 | 0) | 0, (k | 0) != (tb | 0)) : 0) {
      l = k;
      while (1) {
       k = l + -40 | 0;
       c[mb >> 2] = k;
       n = c[l + -12 >> 2] | 0;
       o = n;
       if (n) {
        k = l + -8 | 0;
        l = c[k >> 2] | 0;
        if ((l | 0) != (n | 0)) c[k >> 2] = l + (~((l + -2 - o | 0) >>> 1) << 1);
        Ae(n);
        k = c[mb >> 2] | 0;
       }
       if ((k | 0) == (tb | 0)) {
        v = tb;
        break;
       } else l = k;
      }
     } else v = k; else {
      de(Fa, p - n | 0);
      v = c[mb >> 2] | 0;
     }
     k = ye(32) | 0;
     c[k >> 2] = 0;
     c[k + 4 >> 2] = 0;
     c[k + 8 >> 2] = 0;
     c[k + 12 >> 2] = 0;
     c[k + 16 >> 2] = 0;
     c[k + 20 >> 2] = 0;
     c[k + 24 >> 2] = 0;
     c[k + 28 >> 2] = 0;
     o = c[Fa >> 2] | 0;
     u = (v | 0) == (o | 0);
     if (u) {
      n = c[Ca >> 2] | 0;
      p = c[Da >> 2] | 0;
      l = r;
     } else {
      t = (v - o | 0) / 40 | 0;
      s = 0;
      while (1) {
       l = d[f + r >> 0] | 0;
       n = k + (l >>> 5 << 2) | 0;
       p = 1 << (l & 31);
       q = c[n >> 2] | 0;
       if (p & q) {
        D = 67;
        break a;
       }
       c[n >> 2] = p | q;
       c[o + (s * 40 | 0) >> 2] = l;
       n = d[f + (r + 1) >> 0] | 0;
       l = n >>> 4;
       n = n & 15;
       if ((l + -1 | 0) >>> 0 > 14) {
        D = 69;
        break a;
       }
       if (!n) {
        D = 71;
        break a;
       }
       c[o + (s * 40 | 0) + 4 >> 2] = l;
       c[o + (s * 40 | 0) + 8 >> 2] = n;
       q = r + 3 | 0;
       c[o + (s * 40 | 0) + 12 >> 2] = d[f + (r + 2) >> 0];
       p = c[Da >> 2] | 0;
       p = (p | 0) < (l | 0) ? l : p;
       c[Da >> 2] = p;
       l = c[Ca >> 2] | 0;
       l = (l | 0) < (n | 0) ? n : l;
       c[Ca >> 2] = l;
       s = s + 1 | 0;
       if (s >>> 0 >= t >>> 0) {
        n = l;
        l = q;
        break;
       } else r = q;
      }
     }
     pa = n << 3;
     c[Ga >> 2] = ((c[Ea >> 2] | 0) + -1 + pa | 0) / (pa | 0) | 0;
     pa = p << 3;
     c[Ha >> 2] = (pa + -1 + (c[j >> 2] | 0) | 0) / (pa | 0) | 0;
     b : do if (!(Ba | u)) {
      n = c[o + 4 >> 2] | 0;
      if (!((p | 0) % (n | 0) | 0)) {
       p = n;
       u = 0;
      } else {
       D = 76;
       break a;
      }
      while (1) {
       n = c[o + (u * 40 | 0) + 8 >> 2] | 0;
       if ((c[Ca >> 2] | 0) % (n | 0) | 0) {
        D = 76;
        break a;
       }
       pa = _(c[Ha >> 2] | 0, p) | 0;
       c[o + (u * 40 | 0) + 16 >> 2] = pa;
       n = _(c[Ga >> 2] | 0, n) | 0;
       c[o + (u * 40 | 0) + 20 >> 2] = n;
       n = Ag(n | 0, ((n | 0) < 0) << 31 >> 31 | 0, pa | 0, ((pa | 0) < 0) << 31 >> 31 | 0) | 0;
       pa = C;
       if (pa >>> 0 > 0 | (pa | 0) == 0 & n >>> 0 > 2097152) {
        D = 78;
        break a;
       }
       c[o + (u * 40 | 0) + 24 >> 2] = n;
       r = o + (u * 40 | 0) + 28 | 0;
       n = n << 6;
       s = o + (u * 40 | 0) + 32 | 0;
       t = c[s >> 2] | 0;
       p = c[r >> 2] | 0;
       q = t - p >> 1;
       do if (n >>> 0 > q >>> 0) {
        ee(r, n - q | 0);
        n = c[mb >> 2] | 0;
        o = c[Fa >> 2] | 0;
       } else {
        if (n >>> 0 >= q >>> 0) {
         n = v;
         break;
        }
        n = p + (n << 1) | 0;
        if ((t | 0) == (n | 0)) {
         n = v;
         break;
        }
        c[s >> 2] = t + (~((t + -2 - n | 0) >>> 1) << 1);
        n = v;
       } while (0);
       u = u + 1 | 0;
       if (u >>> 0 >= ((n - o | 0) / 40 | 0) >>> 0) break b;
       p = c[o + (u * 40 | 0) + 4 >> 2] | 0;
       if ((c[Da >> 2] | 0) % (p | 0) | 0) {
        D = 76;
        break a;
       } else v = n;
      }
     } while (0);
     if ((m + h | 0) != (l | 0)) {
      D = 87;
      break a;
     }
     Ae(k);
     k = l;
     l = 1;
     t = qa << 24 >> 24 == -62;
     break;
    }
   case 196:
    {
     m = l + 4 | 0;
     if (m >>> 0 > g >>> 0) {
      k = h;
      D = 91;
      break a;
     }
     A = d[f + h >> 0] << 8 | d[f + (l + 3) >> 0];
     if ((A | 0) == 2) {
      D = 94;
      break a;
     }
     k = A + h | 0;
     while (1) {
      if (m >>> 0 >= k >>> 0) break;
      r = m + 17 | 0;
      if (r >>> 0 > g >>> 0) {
       k = m;
       D = 97;
       break a;
      }
      z = ye(68) | 0;
      c[vb >> 2] = z;
      l = z + 68 | 0;
      c[Na >> 2] = l;
      n = z;
      o = n + 68 | 0;
      do {
       c[n >> 2] = 0;
       n = n + 4 | 0;
      } while ((n | 0) < (o | 0));
      c[Ma >> 2] = l;
      c[Oa >> 2] = 0;
      c[Pa >> 2] = 0;
      c[Qa >> 2] = 0;
      y = ye(1028) | 0;
      c[Oa >> 2] = y;
      n = y + 1028 | 0;
      c[Ra >> 2] = n;
      pg(y | 0, 0, 1028) | 0;
      c[Pa >> 2] = n;
      a[Ta >> 0] = 1;
      n = m + 1 | 0;
      m = a[f + m >> 0] | 0;
      l = m & 255;
      c[Sa >> 2] = l;
      q = (l & 16 | 0) != 0;
      do if (q) {
       l = l + -16 | 0;
       if ((m & 255) < 16 | (l | 0) > 3) {
        c[Ib >> 2] = 38331;
        c[Ib + 4 >> 2] = l;
        qf(Lc, 38090, Ib) | 0;
        c[Mc >> 2] = 16;
        l = 1;
        m = n;
        break;
       } else {
        x = Nc + (l * 758 << 2) | 0;
        D = 105;
        break;
       }
      } else if ((m & 255) > 3) {
       c[Jb >> 2] = 38331;
       c[Jb + 4 >> 2] = l;
       qf(Lc, 38090, Jb) | 0;
       c[Mc >> 2] = 16;
       l = 1;
       m = n;
       break;
      } else {
       x = Oc + (l * 758 << 2) | 0;
       D = 105;
       break;
      } while (0);
      do if ((D | 0) == 105) {
       D = 0;
       c[z >> 2] = 0;
       p = 1;
       o = 1;
       m = 65536;
       l = 0;
       while (1) {
        na = a[f + n >> 0] | 0;
        oa = na & 255;
        o = na << 24 >> 24 == 0 ? o : p;
        c[z + (p << 2) >> 2] = oa;
        l = oa + l | 0;
        m = m - (oa << 16 - p) | 0;
        p = p + 1 | 0;
        if ((p | 0) == 17) {
         v = l;
         u = m;
         break;
        } else n = n + 1 | 0;
       }
       if (q) {
        if (v >>> 0 > 256) {
         c[Kb >> 2] = 38345;
         c[Kb + 4 >> 2] = v;
         qf(Lc, 38090, Kb) | 0;
         c[Mc >> 2] = 21;
         l = 1;
         m = r;
         break;
        }
       } else if (v >>> 0 > 12) {
        c[Lb >> 2] = 38345;
        c[Lb + 4 >> 2] = v;
        qf(Lc, 38090, Lb) | 0;
        c[Mc >> 2] = 21;
        l = 1;
        m = r;
        break;
       }
       if ((v + r | 0) >>> 0 > g >>> 0) {
        c[Mb >> 2] = r;
        c[Mb + 4 >> 2] = v;
        c[Mb + 8 >> 2] = g;
        qf(Lc, 38042, Mb) | 0;
        c[Mc >> 2] = 3;
        l = 1;
        m = r;
        break;
       }
       w = ye(32) | 0;
       c[w >> 2] = 0;
       c[w + 4 >> 2] = 0;
       c[w + 8 >> 2] = 0;
       c[w + 12 >> 2] = 0;
       c[w + 16 >> 2] = 0;
       c[w + 20 >> 2] = 0;
       c[w + 24 >> 2] = 0;
       c[w + 28 >> 2] = 0;
       c : do if ((v | 0) > 0) {
        s = q ^ 1;
        l = r;
        r = 0;
        while (1) {
         m = l + 1 | 0;
         oa = a[f + l >> 0] | 0;
         l = oa & 255;
         if ((oa & 255) > 11 & s) {
          D = 117;
          break;
         }
         n = w + (l >>> 5 << 2) | 0;
         p = 1 << (l & 31);
         q = c[n >> 2] | 0;
         if (q & p) {
          D = 119;
          break;
         }
         c[n >> 2] = q | p;
         c[y + (r << 2) >> 2] = l;
         r = r + 1 | 0;
         if ((r | 0) >= (v | 0)) {
          D = 121;
          break c;
         } else l = m;
        }
        if ((D | 0) == 117) {
         D = 0;
         c[Nb >> 2] = 38357;
         c[Nb + 4 >> 2] = l;
         qf(Lc, 38090, Nb) | 0;
         c[Mc >> 2] = 21;
         l = 1;
         break;
        } else if ((D | 0) == 119) {
         D = 0;
         c[Ob >> 2] = l;
         qf(Lc, 38363, Ob) | 0;
         c[Mc >> 2] = 21;
         l = 1;
         break;
        }
       } else {
        m = r;
        D = 121;
       } while (0);
       d : do if ((D | 0) == 121) {
        D = 0;
        l = z + (o << 2) | 0;
        c[l >> 2] = (c[l >> 2] | 0) + 1;
        c[y + (v << 2) >> 2] = 256;
        l = u - (1 << 16 - o) | 0;
        if ((l | 0) < 0) {
         Bf(38396, 30, 1, Lc) | 0;
         c[Mc >> 2] = 21;
         l = 1;
         break;
        }
        do if ((l | 0) > 0) {
         if ((b[x + 2 >> 1] | 0) == -1) break; else l = 0;
         do {
          a[x + (l << 2) >> 0] = 0;
          b[x + (l << 2) + 2 >> 1] = -1;
          l = l + 1 | 0;
         } while ((l | 0) != 758);
        } while (0);
        a[Ta >> 0] = (m | 0) == (k | 0) & 1;
        do if (nb) {
         if (wc(z, y, x) | 0) break;
         Bf(38427, 31, 1, Lc) | 0;
         c[Mc >> 2] = 21;
         l = 1;
         break d;
        } while (0);
        l = c[Hc >> 2] | 0;
        if ((l | 0) == (c[Ua >> 2] | 0)) {
         yd(Va, vb);
         l = 0;
         break;
        } else {
         zd(l, vb);
         zd(l + 12 | 0, Oa);
         l = l + 24 | 0;
         c[l >> 2] = c[Sa >> 2];
         a[l + 4 >> 0] = a[Sa + 4 >> 0] | 0;
         c[Hc >> 2] = (c[Hc >> 2] | 0) + 32;
         l = 0;
         break;
        }
       } while (0);
       Ae(w);
      } while (0);
      c[Pa >> 2] = y;
      Ae(y);
      c[Ma >> 2] = z;
      Ae(z);
      if (l) {
       D = 136;
       break a;
      }
     }
     if ((k | 0) != (m | 0)) {
      l = h;
      k = A;
      D = 135;
      break a;
     }
     l = pa;
     break;
    }
   case 217:
   case 215:
   case 214:
   case 213:
   case 212:
   case 211:
   case 210:
   case 209:
   case 208:
    {
     k = h;
     l = pa;
     break;
    }
   case 218:
    {
     if (nb) {
      m = l + 5 | 0;
      if (m >>> 0 > g >>> 0) {
       k = h;
       D = 140;
       break a;
      }
      A = d[f + h >> 0] << 8 | d[f + (l + 3) >> 0];
      oa = a[f + (l + 4) >> 0] | 0;
      k = oa & 255;
      if (!(oa << 24 >> 24)) {
       D = 143;
       break a;
      }
      if (k >>> 0 > (((c[mb >> 2] | 0) - (c[pb >> 2] | 0) | 0) / 40 | 0) >>> 0) {
       D = 143;
       break a;
      }
      c[Wa >> 2] = 0;
      c[Xa >> 2] = 0;
      c[Ya >> 2] = 0;
      Ad(Za, k);
      l = k << 1;
      if ((l + m | 0) >>> 0 > g >>> 0) {
       c[xb >> 2] = m;
       c[xb + 4 >> 2] = l;
       c[xb + 8 >> 2] = g;
       qf(Lc, 38042, xb) | 0;
       c[Mc >> 2] = 3;
       n = 0;
       k = m;
      } else {
       B = ye(32) | 0;
       c[B >> 2] = 0;
       c[B + 4 >> 2] = 0;
       c[B + 8 >> 2] = 0;
       c[B + 12 >> 2] = 0;
       c[B + 16 >> 2] = 0;
       c[B + 20 >> 2] = 0;
       c[B + 24 >> 2] = 0;
       c[B + 28 >> 2] = 0;
       z = c[Za >> 2] | 0;
       u = 0;
       while (1) {
        l = m + 1 | 0;
        s = d[f + m >> 0] | 0;
        n = B + (s >>> 5 << 2) | 0;
        o = 1 << (s & 31);
        p = c[n >> 2] | 0;
        if (o & p) {
         k = s;
         D = 148;
         break;
        }
        c[n >> 2] = o | p;
        n = c[mb >> 2] | 0;
        q = c[pb >> 2] | 0;
        if ((n | 0) == (q | 0)) {
         k = s;
         D = 155;
         break;
        }
        r = z + (u * 12 | 0) | 0;
        o = (n - q | 0) / 40 | 0;
        n = 0;
        p = 0;
        do {
         if ((c[q + (p * 40 | 0) >> 2] | 0) == (s | 0)) {
          c[r >> 2] = p;
          n = 1;
         }
         p = p + 1 | 0;
        } while (p >>> 0 < o >>> 0);
        if (!n) {
         k = s;
         D = 155;
         break;
        }
        p = m + 2 | 0;
        oa = a[f + l >> 0] | 0;
        o = oa & 255;
        n = o >>> 4;
        o = o & 15;
        if ((oa & 255) > 63) {
         l = p;
         k = n;
         D = 157;
         break;
        }
        if (o >>> 0 > 3) {
         l = p;
         k = o;
         D = 159;
         break;
        }
        c[z + (u * 12 | 0) + 4 >> 2] = n;
        c[z + (u * 12 | 0) + 8 >> 2] = o;
        u = u + 1 | 0;
        if ((u | 0) >= (k | 0)) {
         l = p;
         D = 161;
         break;
        } else m = p;
       }
       do if ((D | 0) == 148) {
        D = 0;
        c[yb >> 2] = k;
        qf(Lc, 38768, yb) | 0;
        c[Mc >> 2] = 32;
        n = 0;
        k = l;
       } else if ((D | 0) == 155) {
        D = 0;
        c[zb >> 2] = k;
        qf(Lc, 38793, zb) | 0;
        c[Mc >> 2] = 33;
        n = 0;
        k = l;
       } else if ((D | 0) == 157) {
        D = 0;
        c[Ab >> 2] = 38842;
        c[Ab + 4 >> 2] = k;
        qf(Lc, 38090, Ab) | 0;
        c[Mc >> 2] = 16;
        n = 0;
        k = l;
       } else if ((D | 0) == 159) {
        D = 0;
        c[Bb >> 2] = 38853;
        c[Bb + 4 >> 2] = k;
        qf(Lc, 38090, Bb) | 0;
        c[Mc >> 2] = 16;
        n = 0;
        k = l;
       } else if ((D | 0) == 161) {
        D = 0;
        y = m + 5 | 0;
        if (y >>> 0 > g >>> 0) {
         c[Cb >> 2] = l;
         c[Cb + 4 >> 2] = 3;
         c[Cb + 8 >> 2] = g;
         qf(Lc, 38042, Cb) | 0;
         c[Mc >> 2] = 3;
         n = 0;
         k = l;
         break;
        }
        p = a[f + l >> 0] | 0;
        n = p & 255;
        c[vb >> 2] = n;
        o = m + 4 | 0;
        m = a[f + (m + 3) >> 0] | 0;
        l = m & 255;
        c[bb >> 2] = l;
        if ((p & 255) > 63) {
         c[Db >> 2] = 38864;
         c[Db + 4 >> 2] = n;
         qf(Lc, 38090, Db) | 0;
         c[Mc >> 2] = 12;
         n = 0;
         k = o;
         break;
        }
        if ((m & 255) > 63 | (m & 255) < (p & 255)) {
         c[Eb >> 2] = 38877;
         c[Eb + 4 >> 2] = l;
         qf(Lc, 38090, Eb) | 0;
         c[Mc >> 2] = 13;
         n = 0;
         k = o;
         break;
        }
        s = d[f + o >> 0] | 0;
        c[cb >> 2] = s >>> 4;
        c[db >> 2] = s & 15;
        s = c[Hc >> 2] | 0;
        w = c[Ic >> 2] | 0;
        x = (s | 0) == (w | 0);
        v = p << 24 >> 24 != 0;
        r = m << 24 >> 24 == 0;
        s = s - w >> 5;
        u = 0;
        while (1) {
         if (x) {
          m = 0;
          l = 0;
         } else {
          o = c[z + (u * 12 | 0) + 4 >> 2] | 0;
          p = z + (u * 12 | 0) + 8 | 0;
          m = 0;
          l = 0;
          q = 0;
          do {
           n = c[w + (q << 5) + 24 >> 2] | 0;
           if ((n | 0) == (o | 0)) l = 1; else m = m | (n | 0) == ((c[p >> 2] | 0) + 16 | 0);
           q = q + 1 | 0;
          } while (q >>> 0 < s >>> 0);
         }
         if (!(v | l)) {
          k = u;
          D = 174;
          break;
         }
         if (!(r | m)) {
          k = u;
          D = 176;
          break;
         }
         u = u + 1 | 0;
         if ((u | 0) >= (k | 0)) {
          D = 178;
          break;
         }
        }
        if ((D | 0) == 174) {
         D = 0;
         c[Fb >> 2] = c[z + (k * 12 | 0) + 4 >> 2];
         qf(Lc, 38890, Fb) | 0;
         c[Mc >> 2] = 34;
         n = 0;
         k = y;
         break;
        } else if ((D | 0) == 176) {
         D = 0;
         c[Gb >> 2] = c[z + (k * 12 | 0) + 8 >> 2];
         qf(Lc, 38949, Gb) | 0;
         c[Mc >> 2] = 34;
         n = 0;
         k = y;
         break;
        } else if ((D | 0) == 178) {
         D = 0;
         m = c[_a >> 2] | 0;
         if ((m | 0) == (c[eb >> 2] | 0)) Bd(fb, vb); else {
          c[m >> 2] = c[vb >> 2];
          c[m + 4 >> 2] = c[vb + 4 >> 2];
          c[m + 8 >> 2] = c[vb + 8 >> 2];
          c[m + 12 >> 2] = c[vb + 12 >> 2];
          n = m + 16 | 0;
          c[n >> 2] = 0;
          p = m + 20 | 0;
          c[p >> 2] = 0;
          c[m + 24 >> 2] = 0;
          na = c[Xa >> 2] | 0;
          oa = c[Za >> 2] | 0;
          k = na - oa | 0;
          o = (k | 0) / 12 | 0;
          do if ((na | 0) != (oa | 0)) {
           if (o >>> 0 > 357913941) {
            D = 181;
            break a;
           }
           l = ye(k) | 0;
           c[p >> 2] = l;
           c[n >> 2] = l;
           c[m + 24 >> 2] = l + (o * 12 | 0);
           k = c[Za >> 2] | 0;
           m = c[Xa >> 2] | 0;
           if ((k | 0) == (m | 0)) break;
           do {
            c[l >> 2] = c[k >> 2];
            c[l + 4 >> 2] = c[k + 4 >> 2];
            c[l + 8 >> 2] = c[k + 8 >> 2];
            l = (c[p >> 2] | 0) + 12 | 0;
            c[p >> 2] = l;
            k = k + 12 | 0;
           } while ((k | 0) != (m | 0));
          } while (0);
          c[_a >> 2] = (c[_a >> 2] | 0) + 28;
         }
         if ((A + h | 0) == (y | 0)) {
          n = 1;
          k = y;
          break;
         }
         c[Hb >> 2] = A;
         c[Hb + 4 >> 2] = y - h;
         qf(Lc, 38249, Hb) | 0;
         c[Mc >> 2] = 6;
         n = 0;
         k = y;
         break;
        }
       } while (0);
       Ae(B);
      }
      l = c[Wa >> 2] | 0;
      m = l;
      if (!l) {
       if (!n) {
        D = 451;
        break a;
       }
      } else {
       h = c[Xa >> 2] | 0;
       if ((h | 0) != (l | 0)) c[Xa >> 2] = h + (~(((h + -12 - m | 0) >>> 0) / 12 | 0) * 12 | 0);
       Ae(l);
       if (!n) {
        D = 451;
        break a;
       }
      }
      q = c[_a >> 2] | 0;
      z = c[q + -8 >> 2] | 0;
      ka = c[q + -12 >> 2] | 0;
      la = ka;
      y = (z - la | 0) / 12 | 0;
      ma = y >>> 0 > 1;
      if (ma) {
       na = c[Ga >> 2] | 0;
       oa = c[Ha >> 2] | 0;
      } else {
       ia = c[ka >> 2] | 0;
       na = c[pb >> 2] | 0;
       ja = _(c[na + (ia * 40 | 0) + 4 >> 2] | 0, c[j >> 2] | 0) | 0;
       oa = c[Da >> 2] << 3;
       ia = _(c[na + (ia * 40 | 0) + 8 >> 2] | 0, c[Ea >> 2] | 0) | 0;
       na = c[Ca >> 2] << 3;
       na = (ia + -1 + na | 0) / (na | 0) | 0;
       oa = (ja + -1 + oa | 0) / (oa | 0) | 0;
      }
      m = wb;
      c[m >> 2] = 0;
      c[m + 4 >> 2] = 0;
      m = k + 1 | 0;
      if (k >>> 0 < $a >>> 0) {
       l = a[f + k >> 0] | 0;
       if (l << 24 >> 24 == -1) {
        o = (a[f + m >> 0] | 0) == 0;
        l = -1;
        m = o ? k + 2 | 0 : m;
        o = o ? $a : k;
       } else o = $a;
      } else {
       l = 0;
       o = $a;
      }
      h = qg(l & 255 | 0, 0, 8) | 0;
      n = C;
      l = m + 1 | 0;
      if (m >>> 0 < o >>> 0) {
       k = a[f + m >> 0] | 0;
       if (k << 24 >> 24 == -1) {
        ja = (a[f + l >> 0] | 0) == 0;
        k = -1;
        p = ja ? m + 2 | 0 : l;
        o = ja ? o : m;
       } else p = l;
      } else {
       k = 0;
       p = l;
      }
      m = qg(k & 255 | h | 0, n | 0, 8) | 0;
      h = C;
      l = p + 1 | 0;
      do if (p >>> 0 < o >>> 0) {
       k = a[f + p >> 0] | 0;
       if (k << 24 >> 24 != -1) break;
       ja = (a[f + l >> 0] | 0) == 0;
       k = -1;
       l = ja ? p + 2 | 0 : l;
       o = ja ? o : p;
      } else k = 0; while (0);
      h = qg(k & 255 | m | 0, h | 0, 8) | 0;
      n = C;
      m = l + 1 | 0;
      do if (l >>> 0 < o >>> 0) {
       k = a[f + l >> 0] | 0;
       if (k << 24 >> 24 != -1) break;
       ja = (a[f + m >> 0] | 0) == 0;
       k = -1;
       m = ja ? l + 2 | 0 : m;
       o = ja ? o : l;
      } else k = 0; while (0);
      h = qg(k & 255 | h | 0, n | 0, 8) | 0;
      n = C;
      l = m + 1 | 0;
      do if (m >>> 0 < o >>> 0) {
       k = a[f + m >> 0] | 0;
       if (k << 24 >> 24 != -1) break;
       ja = (a[f + l >> 0] | 0) == 0;
       k = -1;
       l = ja ? m + 2 | 0 : l;
       o = ja ? o : m;
      } else k = 0; while (0);
      h = qg(k & 255 | h | 0, n | 0, 8) | 0;
      n = C;
      m = l + 1 | 0;
      do if (l >>> 0 < o >>> 0) {
       k = a[f + l >> 0] | 0;
       if (k << 24 >> 24 != -1) break;
       ja = (a[f + m >> 0] | 0) == 0;
       k = -1;
       m = ja ? l + 2 | 0 : m;
       o = ja ? o : l;
      } else k = 0; while (0);
      h = qg(k & 255 | h | 0, n | 0, 8) | 0;
      n = C;
      l = m + 1 | 0;
      do if (m >>> 0 < o >>> 0) {
       k = a[f + m >> 0] | 0;
       if (k << 24 >> 24 != -1) {
        p = l;
        break;
       }
       ja = (a[f + l >> 0] | 0) == 0;
       k = -1;
       p = ja ? m + 2 | 0 : l;
       o = ja ? o : m;
      } else {
       k = 0;
       p = l;
      } while (0);
      m = qg(k & 255 | h | 0, n | 0, 8) | 0;
      x = C;
      k = p + 1 | 0;
      do if (p >>> 0 < o >>> 0) {
       l = a[f + p >> 0] | 0;
       if (l << 24 >> 24 != -1) break;
       ja = (a[f + k >> 0] | 0) == 0;
       l = -1;
       k = ja ? p + 2 | 0 : k;
       o = ja ? o : p;
      } else l = 0; while (0);
      w = l & 255 | m;
      ha = c[ab >> 2] | 0;
      ia = t ? c[q + -16 >> 2] | 0 : 0;
      ga = c[q + -28 >> 2] | 0;
      u = t ? ga : 0;
      ja = t ? c[q + -24 >> 2] | 0 : 63;
      ea = (c[q + -20 >> 2] | 0) == 0 | t ^ 1;
      fa = 1 << ia;
      q = ea ? 65535 << ia : fa;
      if ((z | 0) != (ka | 0)) {
       n = fa + 65535 | 0;
       p = (u | 0) > (ja | 0);
       m = q & 65535;
       l = 0;
       do {
        h = c[ka + (l * 12 | 0) >> 2] | 0;
        if (!p) {
         v = u;
         while (1) {
          r = Jc + (h << 7) + (v << 1) | 0;
          s = e[r >> 1] | 0;
          if (s & m) {
           k = v;
           D = 205;
           break a;
          }
          if (s & n) {
           k = v;
           D = 207;
           break a;
          }
          b[r >> 1] = s | q;
          if ((v | 0) < (ja | 0)) v = v + 1 | 0; else break;
         }
        }
        l = l + 1 | 0;
       } while (l >>> 0 < y >>> 0);
      }
      if ((ia | 0) > 10) {
       k = ia;
       D = 213;
       break a;
      }
      if ((na | 0) > 0) {
       ca = (oa | 0) > 0;
       da = (u | 0) > 0;
       $ = (u | 0) == 0;
       aa = -1 << ia;
       ba = (ha | 0) > 0;
       n = z;
       m = -1;
       r = 0;
       p = x;
       h = 64;
       l = o;
       Z = 0;
       q = ha;
       while (1) {
        if (ca) {
         o = w;
         X = n;
         Y = 0;
         while (1) {
          if (ba) {
           if (!q) {
            h = h >> 3;
            if ((h | 0) > 0) do {
             o = h;
             h = h + -1 | 0;
             n = k + -1 | 0;
             do if (n >>> 0 < l >>> 0) {
              if (a[f + n >> 0] | 0) {
               k = n;
               break;
              }
              k = k + -2 | 0;
              k = (a[f + k >> 0] | 0) == -1 ? k : n;
             } else k = n; while (0);
            } while ((o | 0) > 1);
            if (k >>> 0 > l >>> 0) {
             D = 223;
             break a;
            }
            l = r + 208 | 0;
            o = k + 2 | 0;
            if (o >>> 0 > g >>> 0) {
             D = 226;
             break a;
            }
            if ((a[f + k >> 0] | 0) != -1) {
             D = 226;
             break a;
            }
            h = d[f + (k + 1) >> 0] | 0;
            if ((h | 0) != (l | 0)) {
             k = h;
             D = 231;
             break a;
            }
            h = k + 3 | 0;
            do if (o >>> 0 < $a >>> 0) {
             l = a[f + o >> 0] | 0;
             if (l << 24 >> 24 != -1) {
              n = l;
              l = $a;
              break;
             }
             l = (a[f + h >> 0] | 0) == 0;
             n = -1;
             h = l ? k + 4 | 0 : h;
             l = l ? $a : o;
            } else {
             n = 0;
             l = $a;
            } while (0);
            o = qg(n & 255 | 0, 0, 8) | 0;
            p = C;
            n = h + 1 | 0;
            do if (h >>> 0 < l >>> 0) {
             k = a[f + h >> 0] | 0;
             if (k << 24 >> 24 != -1) break;
             W = (a[f + n >> 0] | 0) == 0;
             k = -1;
             n = W ? h + 2 | 0 : n;
             l = W ? l : h;
            } else k = 0; while (0);
            o = qg(k & 255 | o | 0, p | 0, 8) | 0;
            p = C;
            h = n + 1 | 0;
            do if (n >>> 0 < l >>> 0) {
             k = a[f + n >> 0] | 0;
             if (k << 24 >> 24 != -1) break;
             W = (a[f + h >> 0] | 0) == 0;
             k = -1;
             h = W ? n + 2 | 0 : h;
             l = W ? l : n;
            } else k = 0; while (0);
            o = qg(k & 255 | o | 0, p | 0, 8) | 0;
            p = C;
            n = h + 1 | 0;
            do if (h >>> 0 < l >>> 0) {
             k = a[f + h >> 0] | 0;
             if (k << 24 >> 24 != -1) break;
             W = (a[f + n >> 0] | 0) == 0;
             k = -1;
             n = W ? h + 2 | 0 : n;
             l = W ? l : h;
            } else k = 0; while (0);
            o = qg(k & 255 | o | 0, p | 0, 8) | 0;
            p = C;
            h = n + 1 | 0;
            do if (n >>> 0 < l >>> 0) {
             k = a[f + n >> 0] | 0;
             if (k << 24 >> 24 != -1) break;
             W = (a[f + h >> 0] | 0) == 0;
             k = -1;
             h = W ? n + 2 | 0 : h;
             l = W ? l : n;
            } else k = 0; while (0);
            o = qg(k & 255 | o | 0, p | 0, 8) | 0;
            p = C;
            n = h + 1 | 0;
            do if (h >>> 0 < l >>> 0) {
             k = a[f + h >> 0] | 0;
             if (k << 24 >> 24 != -1) break;
             W = (a[f + n >> 0] | 0) == 0;
             k = -1;
             n = W ? h + 2 | 0 : n;
             l = W ? l : h;
            } else k = 0; while (0);
            o = qg(k & 255 | o | 0, p | 0, 8) | 0;
            p = C;
            h = n + 1 | 0;
            do if (n >>> 0 < l >>> 0) {
             k = a[f + n >> 0] | 0;
             if (k << 24 >> 24 != -1) {
              q = h;
              break;
             }
             W = (a[f + h >> 0] | 0) == 0;
             k = -1;
             q = W ? n + 2 | 0 : h;
             l = W ? l : n;
            } else {
             k = 0;
             q = h;
            } while (0);
            o = qg(k & 255 | o | 0, p | 0, 8) | 0;
            p = C;
            k = q + 1 | 0;
            do if (q >>> 0 < l >>> 0) {
             h = a[f + q >> 0] | 0;
             if (h << 24 >> 24 != -1) {
              n = h;
              break;
             }
             W = (a[f + k >> 0] | 0) == 0;
             n = -1;
             l = W ? l : q;
             k = W ? q + 2 | 0 : k;
            } else n = 0; while (0);
            W = wb;
            c[W >> 2] = 0;
            c[W + 4 >> 2] = 0;
            if ((m | 0) > 0) {
             D = 235;
             break a;
            } else {
             h = 64;
             o = n & 255 | o;
             n = r + 1 & 7;
             m = -1;
             q = ha;
            }
           } else n = r;
           r = n;
           q = q + -1 | 0;
          }
          if ((X | 0) == (ka | 0)) n = ka; else {
           V = c[pb >> 2] | 0;
           W = (X - la | 0) / 12 | 0;
           U = 0;
           while (1) {
            n = c[ka + (U * 12 | 0) >> 2] | 0;
            L = (c[ka + (U * 12 | 0) + 4 >> 2] | 0) * 758 | 0;
            M = (c[ka + (U * 12 | 0) + 8 >> 2] | 0) * 758 | 0;
            N = ma ? c[V + (n * 40 | 0) + 8 >> 2] | 0 : 1;
            O = ma ? c[V + (n * 40 | 0) + 4 >> 2] | 0 : 1;
            if ((N | 0) > 0) {
             P = (O | 0) > 0;
             Q = _(N, Z) | 0;
             R = _(O, Y) | 0;
             S = V + (n * 40 | 0) + 16 | 0;
             T = V + (n * 40 | 0) + 28 | 0;
             K = wb + (n << 1) | 0;
             J = 0;
             do {
              if (P) {
               H = c[T >> 2] | 0;
               I = (_(c[S >> 2] | 0, J + Q | 0) | 0) + R | 0;
               s = m;
               G = 0;
               while (1) {
                F = I + G << 6;
                B = H + (F << 1) | 0;
                do if (ea) {
                 if ($) {
                  if ((h | 0) < 17) {
                   w = 56 - h | 0;
                   u = l;
                   v = h;
                   do {
                    o = qg(o | 0, p | 0, 8) | 0;
                    p = C;
                    n = k + 1 | 0;
                    do if (k >>> 0 < u >>> 0) {
                     m = a[f + k >> 0] | 0;
                     if (m << 24 >> 24 != -1) {
                      k = n;
                      break;
                     }
                     E = (a[f + n >> 0] | 0) == 0;
                     m = -1;
                     l = E ? l : k;
                     u = E ? u : k;
                     k = E ? k + 2 | 0 : n;
                    } else {
                     m = 0;
                     k = n;
                    } while (0);
                    o = m & 255 | o;
                    v = v + 8 | 0;
                   } while ((v | 0) < 57);
                   x = k;
                   h = h + 8 + (w & -8) | 0;
                  } else x = k;
                  v = h + -8 | 0;
                  k = sg(o | 0, p | 0, v | 0) | 0;
                  k = k & 255;
                  m = k + L | 0;
                  n = a[Oc + (m << 2) >> 0] | 0;
                  u = (n & 255) + -8 | 0;
                  if ((n & 255) > 8) {
                   n = e[Oc + (m << 2) + 2 >> 1] | 0;
                   E = sg(o | 0, p | 0, v - u | 0) | 0;
                   k = (E & (1 << u) + -1) + k + n | 0;
                   n = a[Oc + (k + L << 2) >> 0] | 0;
                  } else v = h;
                  z = n & 255;
                  h = v - z | 0;
                  A = b[Oc + (k + L << 2) + 2 >> 1] | 0;
                  k = A & 65535;
                  if ((A & 65535) > 11) {
                   D = 255;
                   break a;
                  }
                  do if (!(A << 16 >> 16)) u = x; else {
                   if ((h | 0) < 17) {
                    y = 56 - v | 0;
                    m = x;
                    u = l;
                    do {
                     w = qg(o | 0, p | 0, 8) | 0;
                     p = C;
                     o = m + 1 | 0;
                     do if (m >>> 0 < u >>> 0) {
                      n = a[f + m >> 0] | 0;
                      if (n << 24 >> 24 != -1) {
                       m = o;
                       break;
                      }
                      E = (a[f + o >> 0] | 0) == 0;
                      n = -1;
                      l = E ? l : m;
                      u = E ? u : m;
                      m = E ? m + 2 | 0 : o;
                     } else {
                      n = 0;
                      m = o;
                     } while (0);
                     o = n & 255 | w;
                     h = h + 8 | 0;
                    } while ((h | 0) < 57);
                    h = v + 8 - z + (y + z & -8) | 0;
                   } else m = x;
                   h = h - k | 0;
                   z = sg(o | 0, p | 0, h | 0) | 0;
                   E = C;
                   n = qg(1, 0, A & 65535 | 0) | 0;
                   n = rg(n | 0, C | 0, -1, 0) | 0;
                   n = z & n;
                   if ((1 << k + -1 | 0) <= (n | 0)) {
                    u = m;
                    k = n;
                    break;
                   }
                   u = m;
                   k = (-1 << k) + 1 + n | 0;
                  } while (0);
                  m = (b[K >> 1] | 0) + k | 0;
                  k = m << ia;
                  b[B >> 1] = k;
                  if ((k | 0) != (k << 16 >> 16 | 0)) {
                   D = 267;
                   break a;
                  }
                  b[K >> 1] = m;
                  m = 1;
                  k = u;
                 } else m = ga;
                 if ((m | 0) > (ja | 0)) {
                  m = s;
                  break;
                 }
                 if ((s | 0) > 0) {
                  m = s + -1 | 0;
                  break;
                 } else {
                  n = l;
                  y = m;
                 }
                 while (1) {
                  if ((h | 0) < 17) {
                   x = 56 - h | 0;
                   u = n;
                   l = n;
                   w = h;
                   do {
                    v = qg(o | 0, p | 0, 8) | 0;
                    p = C;
                    o = k + 1 | 0;
                    do if (k >>> 0 < u >>> 0) {
                     n = a[f + k >> 0] | 0;
                     if (n << 24 >> 24 != -1) {
                      k = o;
                      break;
                     }
                     E = (a[f + o >> 0] | 0) == 0;
                     n = -1;
                     l = E ? l : k;
                     u = E ? u : k;
                     k = E ? k + 2 | 0 : o;
                    } else {
                     n = 0;
                     k = o;
                    } while (0);
                    o = n & 255 | v;
                    w = w + 8 | 0;
                   } while ((w | 0) < 57);
                   z = l;
                   h = h + 8 + (x & -8) | 0;
                  } else z = n;
                  w = h + -8 | 0;
                  l = sg(o | 0, p | 0, w | 0) | 0;
                  l = l & 255;
                  n = l + M | 0;
                  u = a[Nc + (n << 2) >> 0] | 0;
                  v = (u & 255) + -8 | 0;
                  if ((u & 255) > 8) {
                   u = e[Nc + (n << 2) + 2 >> 1] | 0;
                   E = sg(o | 0, p | 0, w - v | 0) | 0;
                   l = (E & (1 << v) + -1) + l + u | 0;
                   u = a[Nc + (l + M << 2) >> 0] | 0;
                  } else w = h;
                  A = u & 255;
                  h = w - A | 0;
                  E = b[Nc + (l + M << 2) + 2 >> 1] | 0;
                  l = E & 65535;
                  if ((E & 65535) > 255) {
                   k = y;
                   D = 282;
                   break a;
                  }
                  n = l >>> 4;
                  B = l & 15;
                  if (!B) {
                   if ((n | 0) != 15) {
                    l = z;
                    w = n;
                    D = 300;
                    break;
                   }
                   n = z;
                   l = y + 15 | 0;
                  } else {
                   l = n + y | 0;
                   if ((l | 0) > (ja | 0)) {
                    k = ja;
                    D = 285;
                    break a;
                   }
                   if ((B + ia | 0) > 11) {
                    m = B;
                    k = ia;
                    D = 287;
                    break a;
                   }
                   if ((h | 0) < 17) {
                    y = 56 - w | 0;
                    u = z;
                    x = z;
                    do {
                     v = qg(o | 0, p | 0, 8) | 0;
                     p = C;
                     o = k + 1 | 0;
                     do if (k >>> 0 < u >>> 0) {
                      n = a[f + k >> 0] | 0;
                      if (n << 24 >> 24 != -1) {
                       k = o;
                       break;
                      }
                      E = (a[f + o >> 0] | 0) == 0;
                      n = -1;
                      x = E ? x : k;
                      u = E ? u : k;
                      k = E ? k + 2 | 0 : o;
                     } else {
                      n = 0;
                      k = o;
                     } while (0);
                     o = n & 255 | v;
                     h = h + 8 | 0;
                    } while ((h | 0) < 57);
                    h = x;
                    u = h;
                    h = w + 8 - A + (y + A & -8) | 0;
                   } else u = z;
                   h = h - B | 0;
                   A = sg(o | 0, p | 0, h | 0) | 0;
                   E = C;
                   n = qg(1, 0, B | 0) | 0;
                   n = rg(n | 0, C | 0, -1, 0) | 0;
                   n = A & n;
                   if ((1 << B + -1 | 0) > (n | 0)) n = (-1 << B) + 1 + n | 0;
                   b[H + ((c[27292 + (l << 2) >> 2] | 0) + F << 1) >> 1] = n << ia;
                   n = u;
                  }
                  if ((l | 0) < (ja | 0)) y = l + 1 | 0; else {
                   l = n;
                   break;
                  }
                 }
                 do if ((D | 0) == 300) {
                  D = 0;
                  s = 1 << w;
                  if (!w) break;
                  if (!da) {
                   D = 302;
                   break a;
                  }
                  if ((h | 0) < 17) {
                   u = l;
                   v = h;
                   do {
                    o = qg(o | 0, p | 0, 8) | 0;
                    p = C;
                    n = k + 1 | 0;
                    do if (k >>> 0 < u >>> 0) {
                     m = a[f + k >> 0] | 0;
                     if (m << 24 >> 24 != -1) {
                      k = n;
                      break;
                     }
                     F = (a[f + n >> 0] | 0) == 0;
                     m = -1;
                     l = F ? l : k;
                     u = F ? u : k;
                     k = F ? k + 2 | 0 : n;
                    } else {
                     m = 0;
                     k = n;
                    } while (0);
                    o = m & 255 | o;
                    v = v + 8 | 0;
                   } while ((v | 0) < 57);
                   h = h + 8 + (56 - h & -8) | 0;
                  }
                  h = h - w | 0;
                  E = sg(o | 0, p | 0, h | 0) | 0;
                  B = C;
                  F = qg(1, 0, w | 0) | 0;
                  F = rg(F | 0, C | 0, -1, 0) | 0;
                  s = (E & F) + s | 0;
                 } while (0);
                 m = s + -1 | 0;
                } else {
                 if ($) {
                  if ((h | 0) < 17) {
                   u = l;
                   v = h;
                   do {
                    o = qg(o | 0, p | 0, 8) | 0;
                    p = C;
                    n = k + 1 | 0;
                    do if (k >>> 0 < u >>> 0) {
                     m = a[f + k >> 0] | 0;
                     if (m << 24 >> 24 != -1) {
                      k = n;
                      break;
                     }
                     E = (a[f + n >> 0] | 0) == 0;
                     m = -1;
                     l = E ? l : k;
                     u = E ? u : k;
                     k = E ? k + 2 | 0 : n;
                    } else {
                     m = 0;
                     k = n;
                    } while (0);
                    o = m & 255 | o;
                    v = v + 8 | 0;
                   } while ((v | 0) < 57);
                   h = h + 8 + (56 - h & -8) | 0;
                  }
                  h = h + -1 | 0;
                  m = sg(o | 0, p | 0, h | 0) | 0;
                  b[B >> 1] = (m & 1) << ia | e[B >> 1];
                  m = 1;
                 } else m = ga;
                 if ((m | 0) > (ja | 0)) {
                  m = s;
                  break;
                 }
                 if ((s | 0) < 1) {
                  n = 0;
                  B = m;
                  e : while (1) {
                   if ((h | 0) < 17) {
                    y = 56 - h | 0;
                    w = l;
                    u = l;
                    x = h;
                    do {
                     v = qg(o | 0, p | 0, 8) | 0;
                     p = C;
                     o = k + 1 | 0;
                     do if (k >>> 0 < w >>> 0) {
                      l = a[f + k >> 0] | 0;
                      if (l << 24 >> 24 != -1) {
                       k = o;
                       break;
                      }
                      E = (a[f + o >> 0] | 0) == 0;
                      l = -1;
                      u = E ? u : k;
                      w = E ? w : k;
                      k = E ? k + 2 | 0 : o;
                     } else {
                      l = 0;
                      k = o;
                     } while (0);
                     o = l & 255 | v;
                     x = x + 8 | 0;
                    } while ((x | 0) < 57);
                    l = u;
                    h = h + 8 + (y & -8) | 0;
                    y = l;
                   } else y = l;
                   x = h + -8 | 0;
                   l = sg(o | 0, p | 0, x | 0) | 0;
                   l = l & 255;
                   u = l + M | 0;
                   v = a[Nc + (u << 2) >> 0] | 0;
                   w = (v & 255) + -8 | 0;
                   if ((v & 255) > 8) {
                    v = e[Nc + (u << 2) + 2 >> 1] | 0;
                    h = sg(o | 0, p | 0, x - w | 0) | 0;
                    l = (h & (1 << w) + -1) + l + v | 0;
                    v = a[Nc + (l + M << 2) >> 0] | 0;
                    h = x;
                   }
                   z = v & 255;
                   w = h - z | 0;
                   E = b[Nc + (l + M << 2) + 2 >> 1] | 0;
                   l = E & 65535;
                   if ((E & 65535) > 255) {
                    k = B;
                    D = 332;
                    break a;
                   }
                   A = l >>> 4;
                   l = l & 15;
                   switch (l | 0) {
                   case 0:
                    {
                     if ((A | 0) == 15) {
                      l = y;
                      u = o;
                      v = p;
                      h = w;
                      E = 1;
                      n = 15;
                      D = 0;
                     } else {
                      l = y;
                      h = w;
                      w = A;
                      y = n;
                      m = B;
                      D = 345;
                      break e;
                     }
                     break;
                    }
                   case 1:
                    {
                     if ((w | 0) < 17) {
                      x = 56 - h | 0;
                      v = y;
                      l = y;
                      do {
                       u = qg(o | 0, p | 0, 8) | 0;
                       p = C;
                       o = k + 1 | 0;
                       do if (k >>> 0 < v >>> 0) {
                        n = a[f + k >> 0] | 0;
                        if (n << 24 >> 24 != -1) {
                         k = o;
                         break;
                        }
                        E = (a[f + o >> 0] | 0) == 0;
                        n = -1;
                        l = E ? l : k;
                        v = E ? v : k;
                        k = E ? k + 2 | 0 : o;
                       } else {
                        n = 0;
                        k = o;
                       } while (0);
                       o = n & 255 | u;
                       w = w + 8 | 0;
                      } while ((w | 0) < 57);
                      h = h + 8 - z + (x + z & -8) | 0;
                     } else {
                      h = w;
                      l = y;
                     }
                     h = h + -1 | 0;
                     D = qg(1, 0, h | 0) | 0;
                     u = o;
                     v = p;
                     E = 0;
                     n = A;
                     D = (D & o | 0) != 0 | (C & p | 0) != 0 ? fa : aa;
                     break;
                    }
                   default:
                    {
                     k = B;
                     D = 334;
                     break a;
                    }
                   }
                   o = u;
                   p = v;
                   w = u;
                   A = n;
                   while (1) {
                    z = H + ((c[27292 + (B << 2) >> 2] | 0) + F << 1) | 0;
                    n = b[z >> 1] | 0;
                    y = n << 16 >> 16;
                    if (!(n << 16 >> 16)) if ((A | 0) < 1) {
                     u = B;
                     break;
                    } else n = A + -1 | 0; else {
                     if ((h | 0) < 17) {
                      o = w;
                      p = v;
                      w = l;
                      x = h;
                      do {
                       v = qg(o | 0, p | 0, 8) | 0;
                       p = C;
                       u = k + 1 | 0;
                       do if (k >>> 0 < w >>> 0) {
                        o = a[f + k >> 0] | 0;
                        if (o << 24 >> 24 != -1) {
                         k = u;
                         break;
                        }
                        Qc = (a[f + u >> 0] | 0) == 0;
                        o = -1;
                        l = Qc ? l : k;
                        w = Qc ? w : k;
                        k = Qc ? k + 2 | 0 : u;
                       } else {
                        o = 0;
                        k = u;
                       } while (0);
                       o = o & 255 | v;
                       x = x + 8 | 0;
                      } while ((x | 0) < 57);
                      h = h + 8 + (56 - h & -8) | 0;
                      w = o;
                      v = p;
                     }
                     h = h + -1 | 0;
                     Qc = qg(1, 0, h | 0) | 0;
                     do if ((y & fa | 0) == 0 & ((Qc & w | 0) != 0 | (C & v | 0) != 0)) if (n << 16 >> 16 > -1) {
                      n = y + fa & 65535;
                      break;
                     } else {
                      n = y + aa & 65535;
                      break;
                     } while (0);
                     b[z >> 1] = n;
                     n = A;
                    }
                    u = B + 1 | 0;
                    if ((B | 0) < (ja | 0)) {
                     B = u;
                     A = n;
                    } else break;
                   }
                   if (D) {
                    if ((u | 0) > (ja | 0)) {
                     l = ja;
                     k = u;
                     D = 371;
                     break a;
                    }
                    b[H + ((c[27292 + (u << 2) >> 2] | 0) + F << 1) >> 1] = D;
                   }
                   v = u + 1 | 0;
                   n = E << 24 >> 24 != 0;
                   if ((u | 0) < (ja | 0)) B = v; else {
                    m = v;
                    D = 374;
                    break;
                   }
                  }
                  do if ((D | 0) == 345) {
                   D = 0;
                   x = 1 << w;
                   if (!w) {
                    s = x;
                    n = y;
                    D = 374;
                    break;
                   }
                   if (!da) {
                    D = 347;
                    break a;
                   }
                   if ((h | 0) < 17) {
                    u = l;
                    v = h;
                    do {
                     s = qg(o | 0, p | 0, 8) | 0;
                     p = C;
                     o = k + 1 | 0;
                     do if (k >>> 0 < u >>> 0) {
                      n = a[f + k >> 0] | 0;
                      if (n << 24 >> 24 != -1) {
                       k = o;
                       break;
                      }
                      Qc = (a[f + o >> 0] | 0) == 0;
                      n = -1;
                      l = Qc ? l : k;
                      u = Qc ? u : k;
                      k = Qc ? k + 2 | 0 : o;
                     } else {
                      n = 0;
                      k = o;
                     } while (0);
                     o = n & 255 | s;
                     v = v + 8 | 0;
                    } while ((v | 0) < 57);
                    h = h + 8 + (56 - h & -8) | 0;
                   }
                   h = h - w | 0;
                   s = sg(o | 0, p | 0, h | 0) | 0;
                   Qc = C;
                   n = qg(1, 0, w | 0) | 0;
                   n = rg(n | 0, C | 0, -1, 0) | 0;
                   if (y) {
                    D = 375;
                    break a;
                   } else s = (s & n) + x | 0;
                  } while (0);
                  if ((D | 0) == 374) {
                   D = 0;
                   if (n) {
                    D = 375;
                    break a;
                   }
                  }
                  if ((s | 0) > 0) D = 377;
                 } else D = 377;
                 do if ((D | 0) == 377) {
                  D = 0;
                  if ((m | 0) > (ja | 0)) break;
                  while (1) {
                   z = H + ((c[27292 + (m << 2) >> 2] | 0) + F << 1) | 0;
                   n = b[z >> 1] | 0;
                   y = n << 16 >> 16;
                   if (n << 16 >> 16) {
                    if ((h | 0) < 17) {
                     w = l;
                     x = h;
                     do {
                      v = qg(o | 0, p | 0, 8) | 0;
                      p = C;
                      u = k + 1 | 0;
                      do if (k >>> 0 < w >>> 0) {
                       o = a[f + k >> 0] | 0;
                       if (o << 24 >> 24 != -1) {
                        k = u;
                        break;
                       }
                       Qc = (a[f + u >> 0] | 0) == 0;
                       o = -1;
                       l = Qc ? l : k;
                       w = Qc ? w : k;
                       k = Qc ? k + 2 | 0 : u;
                      } else {
                       o = 0;
                       k = u;
                      } while (0);
                      o = o & 255 | v;
                      x = x + 8 | 0;
                     } while ((x | 0) < 57);
                     h = h + 8 + (56 - h & -8) | 0;
                    }
                    h = h + -1 | 0;
                    Qc = qg(1, 0, h | 0) | 0;
                    do if ((y & fa | 0) == 0 & ((Qc & o | 0) != 0 | (C & p | 0) != 0)) if (n << 16 >> 16 > -1) {
                     n = y + fa & 65535;
                     break;
                    } else {
                     n = y + aa & 65535;
                     break;
                    } while (0);
                    b[z >> 1] = n;
                   }
                   if ((m | 0) < (ja | 0)) m = m + 1 | 0; else break;
                  }
                 } while (0);
                 m = s + -1 | 0;
                } while (0);
                G = G + 1 | 0;
                if ((G | 0) >= (O | 0)) break; else s = m;
               }
              }
              J = J + 1 | 0;
             } while ((J | 0) < (N | 0));
            }
            U = U + 1 | 0;
            if (U >>> 0 >= W >>> 0) {
             n = X;
             break;
            }
           }
          }
          Y = Y + 1 | 0;
          if ((Y | 0) >= (oa | 0)) break; else X = n;
         }
        } else o = w;
        Z = Z + 1 | 0;
        if ((Z | 0) >= (na | 0)) break; else w = o;
       }
       if ((m | 0) > 0) {
        D = 398;
        break a;
       }
       m = h >> 3;
       if ((m | 0) > 0) D = 400;
      } else {
       l = o;
       m = 8;
       D = 400;
      }
      if ((D | 0) == 400) {
       D = 0;
       do {
        n = m;
        m = m + -1 | 0;
        h = k + -1 | 0;
        do if (h >>> 0 < l >>> 0) {
         if (a[f + h >> 0] | 0) {
          k = h;
          break;
         }
         k = k + -2 | 0;
         k = (a[f + k >> 0] | 0) == -1 ? k : h;
        } else k = h; while (0);
       } while ((n | 0) > 1);
      }
      if (k >>> 0 > l >>> 0) {
       D = 406;
       break a;
      }
      if (k >>> 0 > g >>> 0) {
       D = 408;
       break a;
      }
      l = pa;
     } else {
      k = h;
      l = pa;
     }
     break;
    }
   case 219:
    {
     k = l + 4 | 0;
     if (k >>> 0 > g >>> 0) {
      k = h;
      D = 454;
      break a;
     }
     r = d[f + h >> 0] << 8 | d[f + (l + 3) >> 0];
     if ((r | 0) == 2) {
      D = 457;
      break a;
     }
     q = r + h | 0;
     f : do if (k >>> 0 < q >>> 0) do {
      p = c[qb >> 2] | 0;
      if (((p - (c[gb >> 2] | 0) | 0) / 24 | 0) >>> 0 >= 4) break f;
      l = k + 1 | 0;
      if (l >>> 0 > g >>> 0) {
       D = 460;
       break a;
      }
      k = d[f + k >> 0] | 0;
      m = k >>> 4;
      k = k & 15;
      if (k >>> 0 > 3) {
       D = 462;
       break a;
      }
      o = (m | 0) != 0;
      n = o ? 128 : 64;
      if ((n + l | 0) >>> 0 > g >>> 0) {
       k = n;
       D = 464;
       break a;
      }
      n = ye(256) | 0;
      c[vb >> 2] = n;
      Qc = n + 256 | 0;
      c[hb >> 2] = Qc;
      pg(n | 0, 0, 256) | 0;
      c[ob >> 2] = Qc;
      a[kb >> 0] = 1;
      c[jb >> 2] = k;
      c[ib >> 2] = m;
      k = l;
      m = 0;
      do {
       l = a[f + k >> 0] | 0;
       if (o) {
        l = (l & 255) << 8 | d[f + (k + 1) >> 0];
        k = k + 2 | 0;
       } else {
        l = l & 255;
        k = k + 1 | 0;
       }
       if ((l + -1 | 0) >>> 0 > 65534) {
        k = n;
        D = 470;
        break a;
       }
       c[n + (c[27292 + (m << 2) >> 2] << 2) >> 2] = l;
       m = m + 1 | 0;
      } while ((m | 0) < 64);
      a[kb >> 0] = (k | 0) == (q | 0) & 1;
      if ((p | 0) == (c[lb >> 2] | 0)) ne(gb, vb); else {
       zd(p, vb);
       Qc = p + 12 | 0;
       c[Qc >> 2] = c[ib >> 2];
       c[Qc + 4 >> 2] = c[ib + 4 >> 2];
       a[Qc + 8 >> 0] = a[ib + 8 >> 0] | 0;
       c[qb >> 2] = (c[qb >> 2] | 0) + 24;
      }
      c[ob >> 2] = n;
      Ae(n);
     } while (k >>> 0 < q >>> 0); while (0);
     if ((q | 0) != (k | 0)) {
      m = h;
      l = r;
      D = 477;
      break a;
     }
     k = q;
     l = pa;
     break;
    }
   case 221:
    {
     if ((c[ab >> 2] | 0) > 0) {
      D = 481;
      break a;
     }
     m = l + 6 | 0;
     if (m >>> 0 > g >>> 0) {
      k = h;
      D = 483;
      break a;
     }
     k = d[f + h >> 0] << 8 | d[f + (l + 3) >> 0];
     c[ab >> 2] = d[f + (l + 4) >> 0] << 8 | d[f + (l + 5) >> 0];
     if ((k + h | 0) == (m | 0)) {
      k = m;
      l = pa;
     } else {
      D = 485;
      break a;
     }
     break;
    }
   case 239:
   case 238:
   case 237:
   case 236:
   case 235:
   case 234:
   case 233:
   case 232:
   case 231:
   case 230:
   case 229:
   case 228:
   case 227:
   case 226:
   case 225:
   case 224:
    {
     if (ra) {
      k = h;
      l = pa;
     } else {
      o = l + 4 | 0;
      if (o >>> 0 > g >>> 0) {
       k = h;
       D = 488;
       break a;
      }
      k = d[f + h >> 0] << 8 | d[f + (l + 3) >> 0];
      m = k + -2 | 0;
      if (m >>> 0 > 65533) {
       D = 490;
       break a;
      }
      if ((k + h | 0) >>> 0 > g >>> 0) {
       l = o;
       k = m;
       D = 492;
       break a;
      }
      hg(vb, n, k + 1 | 0);
      k = c[sa >> 2] | 0;
      if ((k | 0) == (c[ta >> 2] | 0)) Dd(ua, vb); else {
       gg(k, vb);
       c[sa >> 2] = (c[sa >> 2] | 0) + 12;
      }
      ig(vb);
      k = m + o | 0;
      l = pa;
     }
     break;
    }
   case 254:
    {
     if (ra) {
      k = h;
      l = pa;
     } else {
      o = l + 4 | 0;
      if (o >>> 0 > g >>> 0) {
       k = h;
       D = 500;
       break a;
      }
      m = f + h | 0;
      k = d[m >> 0] << 8 | d[f + (l + 3) >> 0];
      n = k + -2 | 0;
      if (n >>> 0 > 65533) {
       D = 502;
       break a;
      }
      if ((k + h | 0) >>> 0 > g >>> 0) {
       l = o;
       k = n;
       D = 504;
       break a;
      }
      hg(vb, m, k);
      k = c[va >> 2] | 0;
      if ((k | 0) == (c[wa >> 2] | 0)) Dd(xa, vb); else {
       gg(k, vb);
       c[va >> 2] = (c[va >> 2] | 0) + 12;
      }
      ig(vb);
      k = n + o | 0;
      l = pa;
     }
     break;
    }
   default:
    {
     l = h;
     D = 508;
     break a;
    }
   }
   m = c[Ja >> 2] | 0;
   h = c[Ka >> 2] | 0;
   if (m >>> 0 >= h >>> 0) {
    r = c[Ia >> 2] | 0;
    s = r;
    n = m - s + 1 | 0;
    if ((n | 0) < 0) {
     D = 514;
     break;
    }
    q = r;
    m = h - q | 0;
    if (m >>> 0 < 1073741823) {
     m = m << 1;
     m = m >>> 0 < n >>> 0 ? n : m;
     n = c[Ja >> 2] | 0;
     h = n - q | 0;
     if (!m) {
      p = 0;
      o = 0;
      m = n;
     } else D = 518;
    } else {
     h = c[Ja >> 2] | 0;
     m = 2147483647;
     n = h;
     h = h - q | 0;
     D = 518;
    }
    if ((D | 0) == 518) {
     D = 0;
     p = m;
     o = ye(m) | 0;
     m = n;
    }
    a[o + h >> 0] = qa;
    pa = m - q | 0;
    Qc = o + (h - pa) | 0;
    tg(Qc | 0, r | 0, pa | 0) | 0;
    c[Ia >> 2] = Qc;
    c[Ja >> 2] = o + (h + 1);
    c[Ka >> 2] = o + p;
    if (s) Ae(s);
   } else {
    a[m >> 0] = qa;
    c[Ja >> 2] = (c[Ja >> 2] | 0) + 1;
   }
   if (La) if (qa << 24 >> 24 != -39 & (l ^ 1)) {
    pa = l;
    continue;
   } else {
    D = 524;
    break;
   } else if (qa << 24 >> 24 == -39) {
    D = 524;
    break;
   } else {
    pa = l;
    continue;
   }
  }
  g : switch (D | 0) {
  case 23:
   {
    we(Ia);
    break;
   }
  case 36:
   {
    if (l >>> 0 < g >>> 0) k = d[f + l >> 0] | 0; else k = 0;
    c[yc >> 2] = k;
    c[yc + 4 >> 2] = l;
    c[yc + 8 >> 2] = g;
    qf(Lc, 35483, yc) | 0;
    c[Mc >> 2] = 4;
    rb = 0;
    break;
   }
  case 41:
   {
    Bf(38019, 22, 1, Lc) | 0;
    c[Mc >> 2] = 30;
    rb = 0;
    break;
   }
  case 43:
   {
    c[Pb >> 2] = k;
    c[Pb + 4 >> 2] = 8;
    c[Pb + 8 >> 2] = g;
    qf(Lc, 38042, Pb) | 0;
    c[Mc >> 2] = 3;
    rb = 0;
    break;
   }
  case 45:
   {
    c[Rb >> 2] = 38106;
    c[Rb + 4 >> 2] = k & 255;
    qf(Lc, 38090, Rb) | 0;
    c[Mc >> 2] = 7;
    rb = 0;
    break;
   }
  case 47:
   {
    c[Ub >> 2] = 38116;
    c[Ub + 4 >> 2] = k;
    qf(Lc, 38090, Ub) | 0;
    c[Mc >> 2] = 9;
    rb = 0;
    break;
   }
  case 49:
   {
    c[$b >> 2] = 38123;
    c[$b + 4 >> 2] = k;
    qf(Lc, 38090, $b) | 0;
    c[Mc >> 2] = 8;
    rb = 0;
    break;
   }
  case 51:
   {
    c[ec >> 2] = 38129;
    c[ec + 4 >> 2] = k;
    qf(Lc, 38090, ec) | 0;
    c[Mc >> 2] = 10;
    rb = 0;
    break;
   }
  case 53:
   {
    c[uc >> 2] = l;
    c[uc + 4 >> 2] = k;
    c[uc + 8 >> 2] = g;
    qf(Lc, 38042, uc) | 0;
    c[Mc >> 2] = 3;
    rb = 0;
    break;
   }
  case 67:
   {
    c[vc >> 2] = l;
    qf(Lc, 38144, vc) | 0;
    c[Mc >> 2] = 32;
    D = 88;
    break;
   }
  case 69:
   {
    c[xc >> 2] = 38169;
    c[xc + 4 >> 2] = l;
    qf(Lc, 38090, xc) | 0;
    c[Mc >> 2] = 11;
    D = 88;
    break;
   }
  case 71:
   {
    c[fc >> 2] = 38183;
    c[fc + 4 >> 2] = 0;
    qf(Lc, 38090, fc) | 0;
    c[Mc >> 2] = 11;
    D = 88;
    break;
   }
  case 76:
   {
    Bf(38197, 33, 1, Lc) | 0;
    c[Mc >> 2] = 20;
    D = 88;
    break;
   }
  case 78:
   {
    Bf(38231, 17, 1, Lc) | 0;
    c[Mc >> 2] = 41;
    D = 88;
    break;
   }
  case 87:
   {
    c[Gc >> 2] = m;
    c[Gc + 4 >> 2] = l - h;
    qf(Lc, 38249, Gc) | 0;
    c[Mc >> 2] = 6;
    D = 88;
    break;
   }
  case 91:
   {
    c[gc >> 2] = k;
    c[gc + 4 >> 2] = 2;
    c[gc + 8 >> 2] = g;
    qf(Lc, 38042, gc) | 0;
    c[Mc >> 2] = 3;
    D = 136;
    break;
   }
  case 94:
   {
    Bf(38295, 35, 1, Lc) | 0;
    c[Mc >> 2] = 37;
    D = 136;
    break;
   }
  case 97:
   {
    c[hc >> 2] = k;
    c[hc + 4 >> 2] = 17;
    c[hc + 8 >> 2] = g;
    qf(Lc, 38042, hc) | 0;
    c[Mc >> 2] = 3;
    D = 136;
    break;
   }
  case 135:
   {
    c[Dc >> 2] = k;
    c[Dc + 4 >> 2] = m - l;
    qf(Lc, 38249, Dc) | 0;
    c[Mc >> 2] = 6;
    D = 136;
    break;
   }
  case 140:
   {
    c[ic >> 2] = k;
    c[ic + 4 >> 2] = 3;
    c[ic + 8 >> 2] = g;
    qf(Lc, 38042, ic) | 0;
    k = 3;
    D = 193;
    break;
   }
  case 143:
   {
    c[jc >> 2] = 38754;
    c[jc + 4 >> 2] = k;
    qf(Lc, 38090, jc) | 0;
    k = 15;
    D = 193;
    break;
   }
  case 181:
   {
    we(n);
    break;
   }
  case 205:
   {
    Qc = e[Jc + (l << 7) + (k << 1) >> 1] | 0;
    c[Ec >> 2] = h;
    c[Ec + 4 >> 2] = k;
    c[Ec + 8 >> 2] = Qc;
    c[Ec + 12 >> 2] = m;
    qf(Lc, 38459, Ec) | 0;
    c[Mc >> 2] = 26;
    D = 451;
    break;
   }
  case 207:
   {
    Qc = e[Jc + (l << 7) + (k << 1) >> 1] | 0;
    c[Fc >> 2] = h;
    c[Fc + 4 >> 2] = k;
    c[Fc + 8 >> 2] = Qc;
    c[Fc + 12 >> 2] = m;
    qf(Lc, 38522, Fc) | 0;
    c[Mc >> 2] = 27;
    D = 451;
    break;
   }
  case 213:
   {
    c[Qb >> 2] = k;
    qf(Lc, 38624, Qb) | 0;
    c[Mc >> 2] = 24;
    D = 451;
    break;
   }
  case 223:
   {
    Bf(39351, 24, 1, Lc) | 0;
    c[Mc >> 2] = 25;
    D = 451;
    break;
   }
  case 226:
   {
    if (k >>> 0 < g >>> 0) l = d[f + k >> 0] | 0; else l = 0;
    c[kc >> 2] = l;
    c[kc + 4 >> 2] = k;
    c[kc + 8 >> 2] = g;
    qf(Lc, 35483, kc) | 0;
    c[Mc >> 2] = 4;
    D = 451;
    break;
   }
  case 231:
   {
    c[lc >> 2] = l;
    c[lc + 4 >> 2] = k;
    qf(Lc, 39008, lc) | 0;
    c[Mc >> 2] = 31;
    D = 451;
    break;
   }
  case 235:
   {
    Bf(38675, 27, 1, Lc) | 0;
    c[Mc >> 2] = 40;
    D = 451;
    break;
   }
  case 255:
   {
    c[Sb >> 2] = k;
    qf(Lc, 39059, Sb) | 0;
    c[Mc >> 2] = 22;
    D = 451;
    break;
   }
  case 267:
   {
    c[Tb >> 2] = k;
    qf(Lc, 39106, Tb) | 0;
    c[Mc >> 2] = 23;
    D = 451;
    break;
   }
  case 282:
   {
    c[mc >> 2] = l;
    c[mc + 4 >> 2] = k;
    qf(Lc, 39133, mc) | 0;
    c[Mc >> 2] = 22;
    D = 451;
    break;
   }
  case 285:
   {
    c[zc >> 2] = l;
    c[zc + 4 >> 2] = m;
    c[zc + 8 >> 2] = k;
    qf(Lc, 39182, zc) | 0;
    c[Mc >> 2] = 39;
    D = 451;
    break;
   }
  case 287:
   {
    c[Ac >> 2] = m;
    c[Ac + 4 >> 2] = k;
    c[Ac + 8 >> 2] = l;
    qf(Lc, 39225, Ac) | 0;
    c[Mc >> 2] = 24;
    D = 451;
    break;
   }
  case 302:
   {
    Bf(39277, 36, 1, Lc) | 0;
    c[Mc >> 2] = 40;
    D = 451;
    break;
   }
  case 332:
   {
    c[nc >> 2] = l;
    c[nc + 4 >> 2] = k;
    qf(Lc, 39133, nc) | 0;
    c[Mc >> 2] = 22;
    D = 451;
    break;
   }
  case 334:
   {
    c[oc >> 2] = l;
    c[oc + 4 >> 2] = k;
    qf(Lc, 39133, oc) | 0;
    c[Mc >> 2] = 22;
    D = 451;
    break;
   }
  case 347:
   {
    Bf(39277, 36, 1, Lc) | 0;
    c[Mc >> 2] = 40;
    D = 451;
    break;
   }
  case 371:
   {
    c[Bc >> 2] = k;
    c[Bc + 4 >> 2] = m;
    c[Bc + 8 >> 2] = l;
    qf(Lc, 39182, Bc) | 0;
    c[Mc >> 2] = 39;
    D = 451;
    break;
   }
  case 375:
   {
    Bf(39314, 36, 1, Lc) | 0;
    c[Mc >> 2] = 28;
    D = 451;
    break;
   }
  case 398:
   {
    Bf(38675, 27, 1, Lc) | 0;
    c[Mc >> 2] = 40;
    D = 451;
    break;
   }
  case 406:
   {
    Bf(39351, 24, 1, Lc) | 0;
    c[Mc >> 2] = 25;
    D = 451;
    break;
   }
  case 408:
   {
    c[Vb >> 2] = k;
    c[Vb + 4 >> 2] = g;
    qf(Lc, 38703, Vb) | 0;
    c[Mc >> 2] = 3;
    D = 451;
    break;
   }
  case 454:
   {
    c[Wb >> 2] = k;
    c[Wb + 4 >> 2] = 2;
    c[Wb + 8 >> 2] = g;
    qf(Lc, 38042, Wb) | 0;
    c[Mc >> 2] = 3;
    D = 478;
    break;
   }
  case 457:
   {
    Bf(39376, 40, 1, Lc) | 0;
    c[Mc >> 2] = 38;
    D = 478;
    break;
   }
  case 460:
   {
    c[Xb >> 2] = k;
    c[Xb + 4 >> 2] = 1;
    c[Xb + 8 >> 2] = g;
    qf(Lc, 38042, Xb) | 0;
    c[Mc >> 2] = 3;
    D = 478;
    break;
   }
  case 462:
   {
    c[Yb >> 2] = 39417;
    c[Yb + 4 >> 2] = k;
    qf(Lc, 38090, Yb) | 0;
    c[Mc >> 2] = 17;
    D = 478;
    break;
   }
  case 464:
   {
    c[pc >> 2] = l;
    c[pc + 4 >> 2] = k;
    c[pc + 8 >> 2] = g;
    qf(Lc, 38042, pc) | 0;
    c[Mc >> 2] = 3;
    D = 478;
    break;
   }
  case 470:
   {
    c[qc >> 2] = 39435;
    c[qc + 4 >> 2] = l;
    qf(Lc, 38090, qc) | 0;
    c[Mc >> 2] = 18;
    c[ob >> 2] = k;
    Ae(k);
    D = 478;
    break;
   }
  case 477:
   {
    c[Cc >> 2] = l;
    c[Cc + 4 >> 2] = k - m;
    qf(Lc, 38249, Cc) | 0;
    c[Mc >> 2] = 6;
    D = 478;
    break;
   }
  case 481:
   {
    Bf(39445, 22, 1, Lc) | 0;
    c[Mc >> 2] = 29;
    rb = 0;
    break;
   }
  case 483:
   {
    c[Zb >> 2] = k;
    c[Zb + 4 >> 2] = 4;
    c[Zb + 8 >> 2] = g;
    qf(Lc, 38042, Zb) | 0;
    c[Mc >> 2] = 3;
    rb = 0;
    break;
   }
  case 485:
   {
    c[_b >> 2] = k;
    c[_b + 4 >> 2] = 4;
    qf(Lc, 38249, _b) | 0;
    c[Mc >> 2] = 6;
    rb = 0;
    break;
   }
  case 488:
   {
    c[ac >> 2] = k;
    c[ac + 4 >> 2] = 2;
    c[ac + 8 >> 2] = g;
    qf(Lc, 38042, ac) | 0;
    c[Mc >> 2] = 3;
    D = 496;
    break;
   }
  case 490:
   {
    c[bc >> 2] = 39468;
    c[bc + 4 >> 2] = k;
    qf(Lc, 38090, bc) | 0;
    c[Mc >> 2] = 19;
    D = 496;
    break;
   }
  case 492:
   {
    c[rc >> 2] = l;
    c[rc + 4 >> 2] = k;
    c[rc + 8 >> 2] = g;
    qf(Lc, 38042, rc) | 0;
    c[Mc >> 2] = 3;
    D = 496;
    break;
   }
  case 500:
   {
    c[cc >> 2] = k;
    c[cc + 4 >> 2] = 2;
    c[cc + 8 >> 2] = g;
    qf(Lc, 38042, cc) | 0;
    c[Mc >> 2] = 3;
    D = 509;
    break;
   }
  case 502:
   {
    c[dc >> 2] = 39468;
    c[dc + 4 >> 2] = k;
    qf(Lc, 38090, dc) | 0;
    c[Mc >> 2] = 19;
    D = 509;
    break;
   }
  case 504:
   {
    c[sc >> 2] = l;
    c[sc + 4 >> 2] = k;
    c[sc + 8 >> 2] = g;
    qf(Lc, 38042, sc) | 0;
    c[Mc >> 2] = 3;
    D = 509;
    break;
   }
  case 508:
   {
    c[tc >> 2] = k;
    c[tc + 4 >> 2] = l;
    c[tc + 8 >> 2] = g;
    qf(Lc, 35582, tc) | 0;
    c[Mc >> 2] = 5;
    rb = 0;
    break;
   }
  case 514:
   {
    we(Ia);
    break;
   }
  case 524:
   {
    if (!l) {
     Bf(35620, 20, 1, Lc) | 0;
     c[Mc >> 2] = 2;
     rb = 0;
     break;
    }
    if (nb) {
     if (k >>> 0 < g >>> 0) kg(j + 128 | 0, f + k | 0, g - k | 0) | 0;
     k = c[mb >> 2] | 0;
     r = c[pb >> 2] | 0;
     h : do if ((k | 0) != (r | 0)) {
      q = c[qb >> 2] | 0;
      o = c[j + 56 >> 2] | 0;
      p = (q | 0) == (o | 0);
      q = (q - o | 0) / 24 | 0;
      h = (k - r | 0) / 40 | 0;
      n = 0;
      i : while (1) {
       m = r + (n * 40 | 0) + 12 | 0;
       k = c[m >> 2] | 0;
       if (p) break; else l = 0;
       while (1) {
        if ((c[o + (l * 24 | 0) + 16 >> 2] | 0) == (k | 0)) {
         k = l;
         break;
        }
        l = l + 1 | 0;
        if (l >>> 0 >= q >>> 0) break i;
       }
       c[m >> 2] = k;
       n = n + 1 | 0;
       if (n >>> 0 >= h >>> 0) break h;
      }
      c[Kc >> 2] = k;
      qf(Lc, 39479, Kc) | 0;
      c[Mc >> 2] = 36;
      rb = 0;
      break g;
     } while (0);
     k = (c[Hc >> 2] | 0) - (c[Ic >> 2] | 0) >> 5;
     if (!k) {
      Bf(35641, 38, 1, Lc) | 0;
      c[Mc >> 2] = 35;
      rb = 0;
      break;
     }
     if (k >>> 0 > 511) {
      Bf(35680, 25, 1, Lc) | 0;
      c[Mc >> 2] = 35;
      rb = 0;
     } else rb = 1;
    } else rb = 1;
    break;
   }
  }
  if ((D | 0) == 88) {
   Ae(k);
   rb = 0;
  } else if ((D | 0) == 136) rb = 0; else if ((D | 0) == 193) {
   c[Mc >> 2] = k;
   D = 451;
  } else if ((D | 0) == 478) rb = 0; else if ((D | 0) == 496) rb = 0; else if ((D | 0) == 509) rb = 0;
  if ((D | 0) == 451) rb = 0;
  Ae(Nc);
  Ae(Oc);
  Qc = rb;
  i = Pc;
  return Qc | 0;
 } while (0);
 if ((D | 0) == 5) l = d[f >> 0] | 0;
 c[m >> 2] = l;
 c[m + 4 >> 2] = 0;
 c[m + 8 >> 2] = g;
 qf(k, 35483, m) | 0;
 c[j + 148 >> 2] = 4;
 Qc = 0;
 i = Pc;
 return Qc | 0;
}

function Jd(e, f, j, l, m, n) {
 e = e | 0;
 f = f | 0;
 j = j | 0;
 l = l | 0;
 m = +m;
 n = n | 0;
 var o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0.0, y = 0.0, z = 0, A = 0, B = 0, C = 0.0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, $ = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0.0, pa = 0.0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, va = 0, wa = 0, xa = 0, ya = 0, za = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0.0, Ha = 0, Ia = 0, Ja = 0, Ka = 0, La = 0, Ma = 0, Na = 0, Oa = 0, Pa = 0, Qa = 0, Ra = 0, Sa = 0, Ta = 0, Ua = 0, Va = 0, Wa = 0, Xa = 0, Ya = 0, Za = 0, _a = 0, $a = 0, ab = 0, bb = 0, cb = 0, db = 0, eb = 0, fb = 0, gb = 0, hb = 0, jb = 0, mb = 0, ob = 0, pb = 0, qb = 0, sb = 0, tb = 0, ub = 0, vb = 0, wb = 0, xb = 0, yb = 0, zb = 0, Ab = 0, Bb = 0, Db = 0, Eb = 0;
 Eb = i;
 i = i + 3168 | 0;
 tb = Eb + 2272 | 0;
 vb = Eb + 1216 | 0;
 ub = Eb + 1192 | 0;
 Za = Eb + 168 | 0;
 sb = Eb + 16 | 0;
 la = Eb + 1872 | 0;
 Ab = Eb + 1440 | 0;
 ha = Eb + 1420 | 0;
 ga = Eb + 1392 | 0;
 ia = Eb + 1388 | 0;
 Db = Eb + 2256 | 0;
 fa = Eb + 2784 | 0;
 ja = Eb + 2400 | 0;
 zb = Eb + 1860 | 0;
 yb = Eb + 1848 | 0;
 xb = Eb + 1836 | 0;
 wb = Eb + 1824 | 0;
 ob = Eb + 1424 | 0;
 qb = Eb + 1408 | 0;
 jb = Eb + 1396 | 0;
 _a = Eb + 1376 | 0;
 $a = Eb + 8 | 0;
 ab = Eb;
 mb = Eb + 1364 | 0;
 bb = Eb + 1352 | 0;
 cb = Eb + 1340 | 0;
 pb = Eb + 1328 | 0;
 db = Eb + 1316 | 0;
 eb = Eb + 1304 | 0;
 gb = Eb + 1292 | 0;
 hb = Eb + 1280 | 0;
 ma = c[j >> 2] | 0;
 ea = j + 4 | 0;
 na = c[ea >> 2] | 0;
 Va = l & 255;
 l = (aa(Va | 0) | 0) ^ 31;
 Wa = f + 80 | 0;
 if (l >>> 0 >= (((c[f + 84 >> 2] | 0) - (c[Wa >> 2] | 0) | 0) / 40 | 0) >>> 0) {
  i = Eb;
  return;
 }
 Xa = j + 8 | 0;
 Qa = c[Xa >> 2] | 0;
 Ya = c[Qa + (l * 308 | 0) + 8 >> 2] | 0;
 Qa = c[Qa + (l * 308 | 0) + 12 >> 2] | 0;
 Ra = Ya << 3;
 Ra = (ma + -1 + Ra | 0) / (Ra | 0) | 0;
 Sa = Qa << 3;
 Sa = (na + -1 + Sa | 0) / (Sa | 0) | 0;
 Ta = _(Sa, Ra) | 0;
 c[Db >> 2] = 0;
 Bb = Db + 4 | 0;
 c[Bb >> 2] = 0;
 c[Db + 8 >> 2] = 0;
 Ua = (Ta | 0) == 0;
 if (!Ua) {
  if (Ta >>> 0 > 357913941) we(Db);
  p = ye(Ta * 12 | 0) | 0;
  c[Bb >> 2] = p;
  c[Db >> 2] = p;
  o = p + (Ta * 12 | 0) | 0;
  c[Db + 8 >> 2] = o;
  l = Ta;
  while (1) {
   c[p >> 2] = 0;
   c[p + 4 >> 2] = 0;
   c[p + 8 >> 2] = 0;
   l = l + -1 | 0;
   if (!l) break; else p = p + 12 | 0;
  }
  c[Bb >> 2] = o;
 }
 Pa = (Sa | 0) > 0;
 a : do if (Pa) {
  G = (Ra | 0) > 0;
  H = Za + 4 | 0;
  I = Za + 8 | 0;
  J = e + 12 | 0;
  K = sb + 4 | 0;
  L = Za + 8 | 0;
  O = (Va & 1 | 0) == 0;
  P = (Va & 2 | 0) == 0;
  Q = (Va & 4 | 0) == 0;
  R = fa + 256 | 0;
  S = fa + 128 | 0;
  T = e + 16 | 0;
  U = e + 8 | 0;
  V = (Qa | 0) > 0;
  W = (Ya | 0) > 0;
  X = la + 256 | 0;
  Y = la + 128 | 0;
  Z = Ab + 256 | 0;
  $ = Ab + 128 | 0;
  ba = ja + 256 | 0;
  ca = ja + 128 | 0;
  l = 0;
  da = 0;
  b : while (1) {
   if (G) {
    F = _(da, Qa) | 0;
    E = 0;
    do {
     pg(fa | 0, 0, 384) | 0;
     pg(ja | 0, 0, 384) | 0;
     if (!O) {
      p = c[Xa >> 2] | 0;
      if ((c[p + 8 >> 2] | 0) != (Ya | 0)) {
       Oa = 14;
       break b;
      }
      if ((c[p + 12 >> 2] | 0) != (Qa | 0)) {
       Oa = 16;
       break b;
      }
      o = c[p + 16 >> 2] | 0;
      if ((o | 0) <= (E | 0)) {
       Oa = 18;
       break b;
      }
      if ((c[p + 20 >> 2] | 0) <= (da | 0)) {
       Oa = 20;
       break b;
      }
      v = (_(o, da) | 0) + E << 6;
      N = fa;
      v = (c[p + 28 >> 2] | 0) + (v << 1) | 0;
      M = N + 128 | 0;
      do {
       b[N >> 1] = b[v >> 1] | 0;
       N = N + 2 | 0;
       v = v + 2 | 0;
      } while ((N | 0) < (M | 0));
      M = c[Wa >> 2] | 0;
      v = (_(c[M + 16 >> 2] | 0, da) | 0) + E << 6;
      N = ja;
      v = (c[M + 28 >> 2] | 0) + (v << 1) | 0;
      M = N + 128 | 0;
      do {
       b[N >> 1] = b[v >> 1] | 0;
       N = N + 2 | 0;
       v = v + 2 | 0;
      } while ((N | 0) < (M | 0));
     }
     if (!P) {
      p = c[Xa >> 2] | 0;
      if ((c[p + 316 >> 2] | 0) != (Ya | 0)) {
       Oa = 14;
       break b;
      }
      if ((c[p + 320 >> 2] | 0) != (Qa | 0)) {
       Oa = 16;
       break b;
      }
      o = c[p + 324 >> 2] | 0;
      if ((o | 0) <= (E | 0)) {
       Oa = 18;
       break b;
      }
      if ((c[p + 328 >> 2] | 0) <= (da | 0)) {
       Oa = 20;
       break b;
      }
      v = (_(o, da) | 0) + E << 6;
      N = S;
      v = (c[p + 336 >> 2] | 0) + (v << 1) | 0;
      M = N + 128 | 0;
      do {
       b[N >> 1] = b[v >> 1] | 0;
       N = N + 2 | 0;
       v = v + 2 | 0;
      } while ((N | 0) < (M | 0));
      M = c[Wa >> 2] | 0;
      v = (_(c[M + 56 >> 2] | 0, da) | 0) + E << 6;
      N = ca;
      v = (c[M + 68 >> 2] | 0) + (v << 1) | 0;
      M = N + 128 | 0;
      do {
       b[N >> 1] = b[v >> 1] | 0;
       N = N + 2 | 0;
       v = v + 2 | 0;
      } while ((N | 0) < (M | 0));
     }
     if (!Q) {
      p = c[Xa >> 2] | 0;
      if ((c[p + 624 >> 2] | 0) != (Ya | 0)) {
       Oa = 14;
       break b;
      }
      if ((c[p + 628 >> 2] | 0) != (Qa | 0)) {
       Oa = 16;
       break b;
      }
      o = c[p + 632 >> 2] | 0;
      if ((o | 0) <= (E | 0)) {
       Oa = 18;
       break b;
      }
      if ((c[p + 636 >> 2] | 0) <= (da | 0)) {
       Oa = 20;
       break b;
      }
      v = (_(o, da) | 0) + E << 6;
      N = R;
      v = (c[p + 644 >> 2] | 0) + (v << 1) | 0;
      M = N + 128 | 0;
      do {
       b[N >> 1] = b[v >> 1] | 0;
       N = N + 2 | 0;
       v = v + 2 | 0;
      } while ((N | 0) < (M | 0));
      M = c[Wa >> 2] | 0;
      v = (_(c[M + 96 >> 2] | 0, da) | 0) + E << 6;
      N = ba;
      v = (c[M + 108 >> 2] | 0) + (v << 1) | 0;
      M = N + 128 | 0;
      do {
       b[N >> 1] = b[v >> 1] | 0;
       N = N + 2 | 0;
       v = v + 2 | 0;
      } while ((N | 0) < (M | 0));
     }
     B = c[Db >> 2] | 0;
     D = B + (l * 12 | 0) | 0;
     c[Za >> 2] = 0;
     c[H >> 2] = 0;
     c[I >> 2] = 0;
     s = 0;
     do {
      if (1 << s & Va) {
       q = s << 6;
       r = 26040 + (s << 3) | 0;
       t = 1;
       do {
        p = t + q | 0;
        do if (b[fa + (p << 1) >> 1] | 0) {
         Na = b[ja + (p << 1) >> 1] | 0;
         o = Na << 16 >> 16;
         o = Na << 16 >> 16 > -1 ? o : 0 - o | 0;
         if (!(a[J >> 0] | 0)) x = +h[r >> 3] * (+(o | 0) - +(c[27612 + (t << 2) >> 2] | 0) * .015625) / +(d[40294 + t >> 0] | 0); else x = +(o | 0) * +g[32004 + (p << 2) >> 2] + +g[32772 + (p << 2) >> 2];
         c[sb >> 2] = p;
         g[K >> 2] = x;
         o = c[H >> 2] | 0;
         if (o >>> 0 < (c[L >> 2] | 0) >>> 0) {
          La = sb;
          Ma = c[La + 4 >> 2] | 0;
          Na = o;
          c[Na >> 2] = c[La >> 2];
          c[Na + 4 >> 2] = Ma;
          c[H >> 2] = (c[H >> 2] | 0) + 8;
          break;
         } else {
          Yd(Za, sb);
          break;
         }
        } while (0);
        t = t + 1 | 0;
       } while ((t | 0) < 64);
      }
      s = s + 1 | 0;
     } while ((s | 0) < 3);
     Vd(c[Za >> 2] | 0, c[H >> 2] | 0);
     tg(la | 0, fa | 0, 384) | 0;
     p = c[Za >> 2] | 0;
     o = c[H >> 2] | 0;
     if ((p | 0) == (o | 0)) {
      v = D;
      w = B + (l * 12 | 0) + 4 | 0;
     } else {
      w = B + (l * 12 | 0) + 4 | 0;
      z = B + (l * 12 | 0) + 8 | 0;
      A = _(E, Ya) | 0;
      while (1) {
       Na = c[U >> 2] | 0;
       Ma = o - p >> 3;
       if (!((Ma >>> 0 < Na >>> 0 ? Ma : Na) | 0)) {
        x = 99999998430674944.0;
        t = 0;
       } else {
        C = 99999998430674944.0;
        t = 0;
        u = 0;
        while (1) {
         tg(Ab | 0, la | 0, 384) | 0;
         b[Ab + (c[p + (u << 3) >> 2] << 1) >> 1] = 0;
         if (!O) {
          q = c[Xa >> 2] | 0;
          o = c[q + 16 >> 2] | 0;
          if ((o | 0) <= (E | 0)) {
           Oa = 40;
           break b;
          }
          if ((c[q + 20 >> 2] | 0) <= (da | 0)) {
           Oa = 42;
           break b;
          }
          o = (_(o, da) | 0) + E << 6;
          p = q + 28 | 0;
          N = (c[p >> 2] | 0) + (o << 1) | 0;
          v = Ab;
          M = N + 128 | 0;
          do {
           b[N >> 1] = b[v >> 1] | 0;
           N = N + 2 | 0;
           v = v + 2 | 0;
          } while ((N | 0) < (M | 0));
          Cb((c[p >> 2] | 0) + (o << 1) | 0, tb);
          Sb(q, E, da, tb);
         }
         if (!P) {
          p = c[Xa >> 2] | 0;
          r = p + 308 | 0;
          o = c[p + 324 >> 2] | 0;
          if ((o | 0) <= (E | 0)) {
           Oa = 40;
           break b;
          }
          if ((c[p + 328 >> 2] | 0) <= (da | 0)) {
           Oa = 42;
           break b;
          }
          q = (_(o, da) | 0) + E << 6;
          o = p + 336 | 0;
          N = (c[o >> 2] | 0) + (q << 1) | 0;
          v = $;
          M = N + 128 | 0;
          do {
           b[N >> 1] = b[v >> 1] | 0;
           N = N + 2 | 0;
           v = v + 2 | 0;
          } while ((N | 0) < (M | 0));
          Cb((c[o >> 2] | 0) + (q << 1) | 0, tb);
          Sb(r, E, da, tb);
         }
         if (!Q) {
          p = c[Xa >> 2] | 0;
          r = p + 616 | 0;
          o = c[p + 632 >> 2] | 0;
          if ((o | 0) <= (E | 0)) {
           Oa = 40;
           break b;
          }
          if ((c[p + 636 >> 2] | 0) <= (da | 0)) {
           Oa = 42;
           break b;
          }
          q = (_(o, da) | 0) + E << 6;
          o = p + 644 | 0;
          N = (c[o >> 2] | 0) + (q << 1) | 0;
          v = Z;
          M = N + 128 | 0;
          do {
           b[N >> 1] = b[v >> 1] | 0;
           N = N + 2 | 0;
           v = v + 2 | 0;
          } while ((N | 0) < (M | 0));
          Cb((c[o >> 2] | 0) + (q << 1) | 0, tb);
          Sb(r, E, da, tb);
         }
         c[ha >> 2] = 0;
         if (V) {
          x = 0.0;
          y = 0.0;
          s = 0;
          do {
           if (W) {
            q = s + F | 0;
            r = q << 3;
            p = 0;
            do {
             o = p + A | 0;
             do if ((o << 3 | 0) < (c[j >> 2] | 0)) {
              if ((r | 0) >= (c[ea >> 2] | 0)) break;
              Na = c[T >> 2] | 0;
              x = +rb[c[(c[Na >> 2] | 0) + 12 >> 2] & 1](Na, j, o, q);
              g[ga >> 2] = x;
              Na = c[(y < x ? ga : ha) >> 2] | 0;
              c[ha >> 2] = Na;
              y = (c[k >> 2] = Na, +g[k >> 2]);
              x = y;
             } while (0);
             p = p + 1 | 0;
            } while ((p | 0) < (Ya | 0));
           }
           s = s + 1 | 0;
          } while ((s | 0) < (Qa | 0));
         } else x = 0.0;
         Na = x < C;
         t = Na ? u : t;
         x = Na ? x : C;
         u = u + 1 | 0;
         Na = c[U >> 2] | 0;
         o = c[H >> 2] | 0;
         p = c[Za >> 2] | 0;
         Ma = o - p >> 3;
         if (u >>> 0 >= (Ma >>> 0 < Na >>> 0 ? Ma : Na) >>> 0) break; else C = x;
        }
       }
       v = c[p + (t << 3) >> 2] | 0;
       b[la + (v << 1) >> 1] = 0;
       q = p + (t << 3) | 0;
       s = p + ((t << 3 >> 3) + 1 << 3) | 0;
       if ((s | 0) == (o | 0)) p = q; else {
        u = o + -8 | 0;
        r = s;
        while (1) {
         c[q >> 2] = c[r >> 2];
         c[q + 4 >> 2] = c[r + 4 >> 2];
         r = r + 8 | 0;
         if ((r | 0) == (o | 0)) break; else q = q + 8 | 0;
        }
        p = p + (t + 1 + ((u - s | 0) >>> 3) << 3) | 0;
       }
       if ((o | 0) != (p | 0)) c[H >> 2] = o + (~((o + -8 - p | 0) >>> 3) << 3);
       o = c[w >> 2] | 0;
       p = c[z >> 2] | 0;
       do if (o >>> 0 < p >>> 0) {
        c[o >> 2] = v;
        g[o + 4 >> 2] = x;
        c[w >> 2] = (c[w >> 2] | 0) + 8;
       } else {
        t = c[D >> 2] | 0;
        s = t;
        q = (o - s >> 3) + 1 | 0;
        if (q >>> 0 > 536870911) {
         Oa = 62;
         break b;
        }
        r = t;
        o = p - r | 0;
        if (o >> 3 >>> 0 < 268435455) {
         o = o >> 2;
         o = o >>> 0 < q >>> 0 ? q : o;
        } else o = 536870911;
        La = (c[w >> 2] | 0) - r | 0;
        Ma = La >> 3;
        Na = ye(o << 3) | 0;
        c[Na + (Ma << 3) >> 2] = v;
        g[Na + (Ma << 3) + 4 >> 2] = x;
        tg(Na | 0, t | 0, La | 0) | 0;
        c[D >> 2] = Na;
        c[w >> 2] = Na + (Ma + 1 << 3);
        c[z >> 2] = Na + (o << 3);
        if (!s) break;
        Ae(s);
       } while (0);
       if (!O) {
        q = c[Xa >> 2] | 0;
        o = c[q + 16 >> 2] | 0;
        if ((o | 0) <= (E | 0)) {
         Oa = 69;
         break b;
        }
        if ((c[q + 20 >> 2] | 0) <= (da | 0)) {
         Oa = 71;
         break b;
        }
        o = (_(o, da) | 0) + E << 6;
        p = q + 28 | 0;
        N = (c[p >> 2] | 0) + (o << 1) | 0;
        v = la;
        M = N + 128 | 0;
        do {
         b[N >> 1] = b[v >> 1] | 0;
         N = N + 2 | 0;
         v = v + 2 | 0;
        } while ((N | 0) < (M | 0));
        Cb((c[p >> 2] | 0) + (o << 1) | 0, tb);
        Sb(q, E, da, tb);
       }
       if (!P) {
        p = c[Xa >> 2] | 0;
        r = p + 308 | 0;
        o = c[p + 324 >> 2] | 0;
        if ((o | 0) <= (E | 0)) {
         Oa = 69;
         break b;
        }
        if ((c[p + 328 >> 2] | 0) <= (da | 0)) {
         Oa = 71;
         break b;
        }
        q = (_(o, da) | 0) + E << 6;
        o = p + 336 | 0;
        N = (c[o >> 2] | 0) + (q << 1) | 0;
        v = Y;
        M = N + 128 | 0;
        do {
         b[N >> 1] = b[v >> 1] | 0;
         N = N + 2 | 0;
         v = v + 2 | 0;
        } while ((N | 0) < (M | 0));
        Cb((c[o >> 2] | 0) + (q << 1) | 0, tb);
        Sb(r, E, da, tb);
       }
       if (!Q) {
        p = c[Xa >> 2] | 0;
        r = p + 616 | 0;
        o = c[p + 632 >> 2] | 0;
        if ((o | 0) <= (E | 0)) {
         Oa = 69;
         break b;
        }
        if ((c[p + 636 >> 2] | 0) <= (da | 0)) {
         Oa = 71;
         break b;
        }
        q = (_(o, da) | 0) + E << 6;
        o = p + 644 | 0;
        N = (c[o >> 2] | 0) + (q << 1) | 0;
        v = X;
        M = N + 128 | 0;
        do {
         b[N >> 1] = b[v >> 1] | 0;
         N = N + 2 | 0;
         v = v + 2 | 0;
        } while ((N | 0) < (M | 0));
        Cb((c[o >> 2] | 0) + (q << 1) | 0, tb);
        Sb(r, E, da, tb);
       }
       p = c[Za >> 2] | 0;
       o = c[H >> 2] | 0;
       if ((p | 0) == (o | 0)) {
        v = D;
        break;
       }
      }
     }
     c[ia >> 2] = 1343554297;
     p = c[v >> 2] | 0;
     r = c[w >> 2] | 0;
     o = r - p | 0;
     if ((o | 0) > 0) {
      x = 1.0e10;
      q = (o >> 3) + -1 | 0;
      while (1) {
       Na = p + (q << 3) + 4 | 0;
       o = c[(+g[Na >> 2] < x ? Na : ia) >> 2] | 0;
       c[ia >> 2] = o;
       c[Na >> 2] = o;
       q = q + -1 | 0;
       if ((q | 0) <= -1) break; else x = (c[k >> 2] = o, +g[k >> 2]);
      }
     }
     c : do if ((r | 0) != (p | 0)) {
      o = 0;
      while (1) {
       Ga = +g[p + (o << 3) + 4 >> 2];
       Na = c[T >> 2] | 0;
       if (!(Ga <= +ib[c[(c[Na >> 2] | 0) + 32 >> 2] & 3](Na))) {
        Oa = 80;
        break;
       }
       q = o + 1 | 0;
       p = c[v >> 2] | 0;
       o = c[w >> 2] | 0;
       if (q >>> 0 < o - p >> 3 >>> 0) o = q; else {
        s = p;
        break;
       }
      }
      if ((Oa | 0) == 80) {
       Oa = 0;
       q = o;
       s = c[v >> 2] | 0;
       o = c[w >> 2] | 0;
      }
      t = o;
      p = t - s >> 3;
      if (q >>> 0 <= p >>> 0) {
       if (q >>> 0 >= p >>> 0) break;
       p = s + (q << 3) | 0;
       if ((o | 0) == (p | 0)) break;
       c[w >> 2] = o + (~((o + -8 - p | 0) >>> 3) << 3);
       break;
      }
      p = q - p | 0;
      u = B + (l * 12 | 0) + 8 | 0;
      r = c[u >> 2] | 0;
      if (r - t >> 3 >>> 0 >= p >>> 0) while (1) {
       Na = o;
       c[Na >> 2] = 0;
       c[Na + 4 >> 2] = 0;
       o = (c[w >> 2] | 0) + 8 | 0;
       c[w >> 2] = o;
       p = p + -1 | 0;
       if (!p) break c;
      }
      if (q >>> 0 > 536870911) {
       Oa = 85;
       break b;
      }
      o = r - s | 0;
      if (o >> 3 >>> 0 < 268435455) {
       o = o >> 2;
       o = o >>> 0 < q >>> 0 ? q : o;
       q = (c[w >> 2] | 0) - s >> 3;
       if (!o) {
        t = 0;
        s = 0;
       } else Oa = 89;
      } else {
       o = 536870911;
       q = (c[w >> 2] | 0) - s >> 3;
       Oa = 89;
      }
      if ((Oa | 0) == 89) {
       Oa = 0;
       t = o;
       s = ye(o << 3) | 0;
      }
      o = s + (q << 3) | 0;
      r = o;
      do {
       Na = r;
       c[Na >> 2] = 0;
       c[Na + 4 >> 2] = 0;
       r = o + 8 | 0;
       o = r;
       p = p + -1 | 0;
      } while ((p | 0) != 0);
      p = o;
      o = c[v >> 2] | 0;
      Ma = (c[w >> 2] | 0) - o | 0;
      Na = s + (q - (Ma >> 3) << 3) | 0;
      tg(Na | 0, o | 0, Ma | 0) | 0;
      c[D >> 2] = Na;
      c[w >> 2] = p;
      c[u >> 2] = s + (t << 3);
      if (o) Ae(o);
     } while (0);
     if (!O) {
      q = c[Xa >> 2] | 0;
      o = c[q + 16 >> 2] | 0;
      if ((o | 0) <= (E | 0)) {
       Oa = 99;
       break b;
      }
      if ((c[q + 20 >> 2] | 0) <= (da | 0)) {
       Oa = 101;
       break b;
      }
      o = (_(o, da) | 0) + E << 6;
      p = q + 28 | 0;
      N = (c[p >> 2] | 0) + (o << 1) | 0;
      v = fa;
      M = N + 128 | 0;
      do {
       b[N >> 1] = b[v >> 1] | 0;
       N = N + 2 | 0;
       v = v + 2 | 0;
      } while ((N | 0) < (M | 0));
      Cb((c[p >> 2] | 0) + (o << 1) | 0, tb);
      Sb(q, E, da, tb);
     }
     if (!P) {
      p = c[Xa >> 2] | 0;
      r = p + 308 | 0;
      o = c[p + 324 >> 2] | 0;
      if ((o | 0) <= (E | 0)) {
       Oa = 99;
       break b;
      }
      if ((c[p + 328 >> 2] | 0) <= (da | 0)) {
       Oa = 101;
       break b;
      }
      q = (_(o, da) | 0) + E << 6;
      o = p + 336 | 0;
      N = (c[o >> 2] | 0) + (q << 1) | 0;
      v = S;
      M = N + 128 | 0;
      do {
       b[N >> 1] = b[v >> 1] | 0;
       N = N + 2 | 0;
       v = v + 2 | 0;
      } while ((N | 0) < (M | 0));
      Cb((c[o >> 2] | 0) + (q << 1) | 0, tb);
      Sb(r, E, da, tb);
     }
     if (!Q) {
      p = c[Xa >> 2] | 0;
      r = p + 616 | 0;
      o = c[p + 632 >> 2] | 0;
      if ((o | 0) <= (E | 0)) {
       Oa = 99;
       break b;
      }
      if ((c[p + 636 >> 2] | 0) <= (da | 0)) {
       Oa = 101;
       break b;
      }
      q = (_(o, da) | 0) + E << 6;
      o = p + 644 | 0;
      N = (c[o >> 2] | 0) + (q << 1) | 0;
      v = R;
      M = N + 128 | 0;
      do {
       b[N >> 1] = b[v >> 1] | 0;
       N = N + 2 | 0;
       v = v + 2 | 0;
      } while ((N | 0) < (M | 0));
      Cb((c[o >> 2] | 0) + (q << 1) | 0, tb);
      Sb(r, E, da, tb);
     }
     p = c[Za >> 2] | 0;
     q = p;
     if (p) {
      o = c[H >> 2] | 0;
      if ((o | 0) != (p | 0)) c[H >> 2] = o + (~((o + -8 - q | 0) >>> 3) << 3);
      Ae(p);
     }
     E = E + 1 | 0;
     l = l + 1 | 0;
    } while ((E | 0) < (Ra | 0));
   }
   da = da + 1 | 0;
   if ((da | 0) >= (Sa | 0)) break a;
  }
  switch (Oa | 0) {
  case 14:
   {
    Aa(40088, 39888, 548, 40129);
    break;
   }
  case 16:
   {
    Aa(40152, 39888, 549, 40129);
    break;
   }
  case 18:
   {
    Aa(34608, 34635, 60, 34662);
    break;
   }
  case 20:
   {
    Aa(34676, 34635, 61, 34662);
    break;
   }
  case 40:
   {
    Aa(34608, 34635, 124, 34806);
    break;
   }
  case 42:
   {
    Aa(34676, 34635, 125, 34806);
    break;
   }
  case 62:
   {
    we(D);
    break;
   }
  case 69:
   {
    Aa(34608, 34635, 124, 34806);
    break;
   }
  case 71:
   {
    Aa(34676, 34635, 125, 34806);
    break;
   }
  case 85:
   {
    we(D);
    break;
   }
  case 99:
   {
    Aa(34608, 34635, 124, 34806);
    break;
   }
  case 101:
   {
    Aa(34676, 34635, 125, 34806);
    break;
   }
  }
 } while (0);
 Hd(Ab, f);
 $b(j, Ab);
 Na = e + 4 | 0;
 w = Cc(Ab, (a[Na >> 0] | 0) != 0) | 0;
 t = Ab + 84 | 0;
 La = c[t >> 2] | 0;
 u = Ab + 80 | 0;
 Ma = c[u >> 2] | 0;
 o = (La - Ma | 0) / 40 | 0;
 c[tb >> 2] = 0;
 v = tb + 4 | 0;
 c[v >> 2] = 0;
 c[tb + 8 >> 2] = 0;
 if ((La | 0) == (Ma | 0)) l = 0; else {
  if (o >>> 0 > 4177983) we(tb);
  l = ye(o * 1028 | 0) | 0;
  c[v >> 2] = l;
  c[tb >> 2] = l;
  q = l + (o * 1028 | 0) | 0;
  c[tb + 8 >> 2] = q;
  p = l;
  while (1) {
   pg(p | 0, 0, 1024) | 0;
   c[p + 1024 >> 2] = 1;
   o = o + -1 | 0;
   if (!o) break; else p = p + 1028 | 0;
  }
  c[v >> 2] = q;
 }
 Ac(Ab, l);
 Ma = c[v >> 2] | 0;
 p = c[tb >> 2] | 0;
 o = Ma - p | 0;
 l = (o | 0) / 1028 | 0;
 c[Za >> 2] = l;
 c[sb >> 2] = 0;
 r = sb + 4 | 0;
 c[r >> 2] = 0;
 c[sb + 8 >> 2] = 0;
 p = (Ma | 0) == (p | 0);
 do if (!p) if (l >>> 0 > 1073741823) we(sb); else {
  La = l << 2;
  ka = ye(La) | 0;
  c[sb >> 2] = ka;
  Ma = ka + (l << 2) | 0;
  c[sb + 8 >> 2] = Ma;
  pg(ka | 0, 0, La | 0) | 0;
  c[r >> 2] = Ma;
  break;
 } else ka = 0; while (0);
 l = l * 257 | 0;
 c[la >> 2] = 0;
 q = la + 4 | 0;
 c[q >> 2] = 0;
 c[la + 8 >> 2] = 0;
 if (p) {
  l = ka;
  o = 0;
 } else {
  if ((o | 0) < 0) we(la);
  o = ye(l) | 0;
  c[q >> 2] = o;
  c[la >> 2] = o;
  c[la + 8 >> 2] = o + l;
  do {
   a[o >> 0] = 0;
   o = (c[q >> 2] | 0) + 1 | 0;
   c[q >> 2] = o;
   l = l + -1 | 0;
  } while ((l | 0) != 0);
  l = c[sb >> 2] | 0;
  o = c[la >> 2] | 0;
 }
 s = Dc(c[tb >> 2] | 0, Za, l, o) | 0;
 l = c[la >> 2] | 0;
 if (l) {
  if ((c[q >> 2] | 0) != (l | 0)) c[q >> 2] = l;
  Ae(l);
 }
 l = c[sb >> 2] | 0;
 o = l;
 if (l) {
  p = c[r >> 2] | 0;
  if ((p | 0) != (l | 0)) c[r >> 2] = p + (~((p + -4 - o | 0) >>> 2) << 2);
  Ae(l);
 }
 l = c[tb >> 2] | 0;
 o = l;
 if (l) {
  p = c[v >> 2] | 0;
  if ((p | 0) != (l | 0)) c[v >> 2] = p + (~(((p + -1028 - o | 0) >>> 0) / 1028 | 0) * 1028 | 0);
  Ae(l);
 }
 Ka = c[t >> 2] | 0;
 La = c[u >> 2] | 0;
 o = (Ka - La | 0) / 40 | 0;
 c[zb >> 2] = 0;
 Ma = zb + 4 | 0;
 c[Ma >> 2] = 0;
 c[zb + 8 >> 2] = 0;
 if ((Ka | 0) == (La | 0)) l = 0; else {
  if (o >>> 0 > 4177983) we(zb);
  l = ye(o * 1028 | 0) | 0;
  c[Ma >> 2] = l;
  c[zb >> 2] = l;
  q = l + (o * 1028 | 0) | 0;
  c[zb + 8 >> 2] = q;
  p = l;
  while (1) {
   pg(p | 0, 0, 1024) | 0;
   c[p + 1024 >> 2] = 1;
   o = o + -1 | 0;
   if (!o) break; else p = p + 1028 | 0;
  }
  c[Ma >> 2] = q;
 }
 Bc(Ab, l);
 c[yb >> 2] = 0;
 La = yb + 4 | 0;
 c[La >> 2] = 0;
 c[yb + 8 >> 2] = 0;
 z = Ud(zb, yb) | 0;
 Ka = s + w | 0;
 u = c[zb >> 2] | 0;
 Ja = c[Ma >> 2] | 0;
 t = c[yb >> 2] | 0;
 s = (Ja - u | 0) / 1028 | 0;
 if ((Ja | 0) == (u | 0)) l = 0; else {
  v = 0;
  l = 0;
  do {
   q = v * 257 | 0;
   r = 1;
   o = 0;
   p = 0;
   while (1) {
    o = (_((d[t + (p + q) >> 0] | 0) + (p & 15) | 0, (c[u + (v * 1028 | 0) + (p << 2) >> 2] | 0) >>> 1) | 0) + o | 0;
    p = r + 1 | 0;
    if ((p | 0) == 257) break; else {
     Ja = r;
     r = p;
     p = Ja;
    }
   }
   l = o + l + (((o * 3 | 0) + 512 | 0) >>> 10) | 0;
   v = v + 1 | 0;
  } while (v >>> 0 < s >>> 0);
  l = (l + 7 | 0) >>> 3;
 }
 p = z + Ka + l | 0;
 c[xb >> 2] = 0;
 Ja = xb + 4 | 0;
 c[Ja >> 2] = 0;
 c[xb + 8 >> 2] = 0;
 do if (!Ua) if (Ta >>> 0 > 1073741823) we(xb); else {
  Ha = Ta << 2;
  Fa = ye(Ha) | 0;
  c[xb >> 2] = Fa;
  fb = Fa + (Ta << 2) | 0;
  c[xb + 8 >> 2] = fb;
  pg(Fa | 0, 0, Ha | 0) | 0;
  c[Ja >> 2] = fb;
  c[wb >> 2] = 0;
  fb = wb + 4 | 0;
  c[fb >> 2] = 0;
  c[wb + 8 >> 2] = 0;
  Fa = ye(Ha) | 0;
  c[wb >> 2] = Fa;
  Ia = Fa + (Ta << 2) | 0;
  c[wb + 8 >> 2] = Ia;
  pg(Fa | 0, 0, Ha | 0) | 0;
  c[fb >> 2] = Ia;
  fb = wb;
  break;
 } else {
  c[wb >> 2] = 0;
  c[wb + 4 >> 2] = 0;
  c[wb + 8 >> 2] = 0;
  fb = wb;
 } while (0);
 l = _(na, ma) | 0;
 c[ob >> 2] = 0;
 Ia = ob + 4 | 0;
 c[Ia >> 2] = 0;
 c[ob + 8 >> 2] = 0;
 do if (l) if (l >>> 0 > 1073741823) we(ob); else {
  Fa = l << 2;
  Ea = ye(Fa) | 0;
  c[ob >> 2] = Ea;
  Ha = Ea + (l << 2) | 0;
  c[ob + 8 >> 2] = Ha;
  pg(Ea | 0, 0, Fa | 0) | 0;
  c[Ia >> 2] = Ha;
  break;
 } while (0);
 X = e + 20 | 0;
 Y = qb + 4 | 0;
 Z = qb + 8 | 0;
 $ = jb + 4 | 0;
 ba = jb + 8 | 0;
 ca = _a + 4 | 0;
 da = _a + 8 | 0;
 W = jb + 8 | 0;
 ea = _a + 8 | 0;
 fa = e + 16 | 0;
 ga = (Ra | 0) > 0;
 ha = $a + 4 | 0;
 ia = qb + 8 | 0;
 ja = ab + 4 | 0;
 ka = Ta >>> 0 > 1073741823;
 la = Ta << 2;
 pa = +(p | 0);
 ma = mb + 4 | 0;
 na = mb + 8 | 0;
 qa = mb + 4 | 0;
 ra = (Ta | 0) > 0;
 sa = e + 24 | 0;
 ta = pb + 1 | 0;
 ua = pb;
 va = Za + 4 | 0;
 wa = eb + 8 | 0;
 xa = eb + 1 | 0;
 ya = pb + 4 | 0;
 za = Za + 1023 | 0;
 Ba = hb + 4 | 0;
 Ca = gb + 8 | 0;
 Da = gb + 1 | 0;
 Ea = gb + 4 | 0;
 Fa = qa;
 Ga = +(_(Qa, Ya) | 0) * .2;
 Ha = 31996;
 q = z;
 o = 1;
 l = p;
 d : while (1) {
  P = c[Ha >> 2] | 0;
  V = (P | 0) == -1 & n;
  Q = (P | 0) > 0;
  C = Q ? .01 : .0005;
  R = Q ? 40358 : 40382;
  S = Q ? 23 : 25;
  T = Q ? 40286 : 40289;
  oa = +(P | 0);
  U = Q ? 0 : P;
  p = q;
  do {
   if (V) {
    q = c[X >> 2] | 0;
    r = a[q >> 0] | 0;
    if (!(r & 1)) q = (r & 255) >>> 1; else q = c[q + 4 >> 2] | 0;
    if (+(l | 0) > +(q >>> 0) * 1.01) break;
   }
   c[qb >> 2] = 0;
   c[Y >> 2] = 0;
   c[Z >> 2] = 0;
   c[jb >> 2] = 0;
   c[$ >> 2] = 0;
   c[ba >> 2] = 0;
   D = 1;
   while (1) {
    c[_a >> 2] = 0;
    c[ca >> 2] = 0;
    c[da >> 2] = 0;
    if (Ua) {
     t = 0;
     q = 0;
    } else {
     if (ka) {
      Oa = 192;
      break d;
     }
     q = ye(la) | 0;
     c[_a >> 2] = q;
     t = q + (Ta << 2) | 0;
     c[ea >> 2] = t;
     pg(q | 0, 0, la | 0) | 0;
     c[ca >> 2] = t;
    }
    r = c[jb >> 2] | 0;
    s = r;
    if (!r) {
     r = q;
     s = t;
     q = t;
    } else {
     q = c[$ >> 2] | 0;
     if ((q | 0) != (r | 0)) c[$ >> 2] = q + (~((q + -4 - s | 0) >>> 2) << 2);
     Ae(r);
     c[W >> 2] = 0;
     c[$ >> 2] = 0;
     c[jb >> 2] = 0;
     r = c[_a >> 2] | 0;
     s = c[ca >> 2] | 0;
     q = c[ea >> 2] | 0;
    }
    c[jb >> 2] = r;
    c[$ >> 2] = s;
    c[W >> 2] = q;
    c[ea >> 2] = 0;
    c[ca >> 2] = 0;
    c[_a >> 2] = 0;
    s = c[fa >> 2] | 0;
    kb[c[(c[s >> 2] | 0) + 36 >> 2] & 1](s, P, D, m, Ya, Qa, ob, jb);
    s = c[qb >> 2] | 0;
    q = c[Y >> 2] | 0;
    if ((q | 0) == (s | 0)) r = s; else {
     r = q + (~((q + -8 - s | 0) >>> 3) << 3) | 0;
     c[Y >> 2] = r;
    }
    if (Pa) {
     q = 0;
     B = 0;
     s = 0;
     do {
      if (ga) {
       A = 0;
       do {
        u = c[(c[fb >> 2] | 0) + (q << 2) >> 2] | 0;
        r = c[Db >> 2] | 0;
        z = r + (q * 12 | 0) | 0;
        y = +g[(c[xb >> 2] | 0) + (q << 2) >> 2];
        x = +g[(c[jb >> 2] | 0) + (q << 2) >> 2];
        do if (!(x == 0.0)) {
         if (Q) {
          t = c[z >> 2] | 0;
          w = r + (q * 12 | 0) + 4 | 0;
          r = (c[w >> 2] | 0) - t >> 3;
          e : do if (u >>> 0 < r >>> 0) {
           v = u;
           while (1) {
            x = (+g[t + (v << 3) + 4 >> 2] - y) / x;
            c[$a >> 2] = q;
            g[ha >> 2] = x;
            r = c[Y >> 2] | 0;
            if (r >>> 0 < (c[ia >> 2] | 0) >>> 0) {
             M = $a;
             N = c[M + 4 >> 2] | 0;
             O = r;
             c[O >> 2] = c[M >> 2];
             c[O + 4 >> 2] = N;
             c[Y >> 2] = (c[Y >> 2] | 0) + 8;
            } else Yd(qb, $a);
            v = v + 1 | 0;
            t = c[z >> 2] | 0;
            r = (c[w >> 2] | 0) - t >> 3;
            if (v >>> 0 >= r >>> 0) break e;
            x = +g[(c[jb >> 2] | 0) + (q << 2) >> 2];
           }
          } while (0);
          s = (u >>> 0 < r >>> 0 & 1) + s | 0;
          break;
         }
         v = (u | 0) > 0;
         f : do if (v) while (1) {
          t = u + -1 | 0;
          x = (y - +g[(c[z >> 2] | 0) + (t << 3) + 4 >> 2]) / x;
          c[ab >> 2] = q;
          g[ja >> 2] = x;
          r = c[Y >> 2] | 0;
          if (r >>> 0 < (c[ia >> 2] | 0) >>> 0) {
           M = ab;
           N = c[M + 4 >> 2] | 0;
           O = r;
           c[O >> 2] = c[M >> 2];
           c[O + 4 >> 2] = N;
           c[Y >> 2] = (c[Y >> 2] | 0) + 8;
          } else Yd(qb, ab);
          if ((u | 0) <= 1) break f;
          x = +g[(c[jb >> 2] | 0) + (q << 2) >> 2];
          u = t;
         } while (0);
         s = (v & 1) + s | 0;
        } while (0);
        A = A + 1 | 0;
        q = q + 1 | 0;
       } while ((A | 0) < (Ra | 0));
      }
      B = B + 1 | 0;
     } while ((B | 0) < (Sa | 0));
     q = c[qb >> 2] | 0;
     r = c[Y >> 2] | 0;
    } else {
     q = s;
     s = 0;
    }
    D = D + 1 | 0;
    if ((q | 0) != (r | 0)) {
     Oa = 223;
     break;
    }
    if ((D | 0) >= 5) {
     t = 0;
     break;
    }
   }
   if ((Oa | 0) == 223) {
    Oa = 0;
    Zd(q, r);
    if (Q) {
     O = c[fa >> 2] | 0;
     O = nb[c[(c[O >> 2] | 0) + 20 >> 2] & 1](O, 1.0) | 0;
     x = O ? .05 : C;
     y = 2.0;
    } else {
     x = C;
     y = Ga;
    }
    O = ~~(pa * x) >>> 0;
    z = ~~(+(s | 0) * y);
    if (o) {
     o = c[fa >> 2] | 0;
     x = +ib[c[(c[o >> 2] | 0) + 32 >> 2] & 3](o) * .75;
     o = c[qb >> 2] | 0;
     q = c[Y >> 2] | 0;
     w = o;
     r = w;
     t = q - w >> 3;
     g : while (1) {
      v = r;
      while (1) {
       if (!t) break g;
       u = (t | 0) / 2 | 0;
       if (+g[v + (u << 3) + 4 >> 2] < x) break; else t = u;
      }
      r = v + (u + 1 << 3) | 0;
      t = t + -1 - u | 0;
     }
     N = r - w >> 3;
     z = (z | 0) < (N | 0) ? N : z;
    } else {
     q = c[Y >> 2] | 0;
     o = c[qb >> 2] | 0;
    }
    c[ma >> 2] = 0;
    c[na >> 2] = 0;
    c[mb >> 2] = qa;
    h : do if ((q | 0) == (o | 0)) {
     D = 0;
     x = 0.0;
    } else {
     L = 0;
     while (1) {
      K = c[o + (L << 3) >> 2] | 0;
      I = (K | 0) % (Ra | 0) | 0;
      J = (K | 0) / (Ra | 0) | 0;
      A = c[(c[(c[Db >> 2] | 0) + (K * 12 | 0) >> 2] | 0) + ((c[(c[fb >> 2] | 0) + (K << 2) >> 2] | 0) + U << 3) >> 2] | 0;
      G = (A | 0) / 64 | 0;
      A = (A | 0) % 64 | 0;
      H = c[Xa >> 2] | 0;
      o = c[Wa >> 2] | 0;
      if (Q) u = 0; else {
       r = ((_(c[o + (G * 40 | 0) + 16 >> 2] | 0, J) | 0) + I << 6) + A | 0;
       q = c[H + (G * 308 | 0) + 52 + (A << 2) >> 2] | 0;
       r = b[(c[o + (G * 40 | 0) + 28 >> 2] | 0) + (r << 1) >> 1] | 0;
       t = (r | 0) % (q | 0) | 0;
       if ((t << 1 | 0) > (q | 0)) o = q; else {
        o = (_(t, -2) | 0) > (q | 0);
        o = o ? 0 - q | 0 : 0;
       }
       u = r - t + o << 16 >> 16;
      }
      N = Za;
      M = N + 128 | 0;
      do {
       b[N >> 1] = 0;
       N = N + 2 | 0;
      } while ((N | 0) < (M | 0));
      B = H + (G * 308 | 0) + 16 | 0;
      o = c[B >> 2] | 0;
      if ((o | 0) <= (I | 0)) {
       Oa = 239;
       break d;
      }
      D = H + (G * 308 | 0) + 20 | 0;
      if ((c[D >> 2] | 0) <= (J | 0)) {
       Oa = 241;
       break d;
      }
      v = (_(o, J) | 0) + I << 6;
      E = H + (G * 308 | 0) + 28 | 0;
      F = c[E >> 2] | 0;
      N = Za;
      v = F + (v << 1) | 0;
      M = N + 128 | 0;
      do {
       b[N >> 1] = b[v >> 1] | 0;
       N = N + 2 | 0;
       v = v + 2 | 0;
      } while ((N | 0) < (M | 0));
      w = c[zb >> 2] | 0;
      v = w + (G * 1028 | 0) + 960 | 0;
      t = 1;
      o = 0;
      do {
       q = c[27292 + (t << 2) >> 2] | 0;
       N = b[Za + (q << 1) >> 1] | 0;
       r = N << 16 >> 16;
       if (!(N << 16 >> 16)) o = o + 1 | 0; else {
        if ((o | 0) > 15) {
         N = o + -16 | 0;
         o = N >>> 4;
         c[v >> 2] = -2 - (o << 1) + (c[v >> 2] | 0);
         o = N - (o << 4) | 0;
        }
        N = (r | 0) / (c[H + (G * 308 | 0) + 52 + (q << 2) >> 2] | 0) | 0;
        o = w + (G * 1028 | 0) + (((aa(((N | 0) > -1 ? N : 0 - N | 0) | 0) | 0) ^ 31) + (o << 4 | 1) << 2) | 0;
        c[o >> 2] = (c[o >> 2] | 0) + -2;
        o = 0;
       }
       t = t + 1 | 0;
      } while ((t | 0) != 64);
      if ((o | 0) > 0) {
       N = w + (G * 1028 | 0) | 0;
       c[N >> 2] = (c[N >> 2] | 0) + -2;
      }
      b[Za + (A << 1) >> 1] = u;
      t = 1;
      o = 0;
      do {
       q = c[27292 + (t << 2) >> 2] | 0;
       N = b[Za + (q << 1) >> 1] | 0;
       r = N << 16 >> 16;
       if (!(N << 16 >> 16)) o = o + 1 | 0; else {
        if ((o | 0) > 15) {
         N = o + -16 | 0;
         o = N >>> 4;
         c[v >> 2] = (o << 1) + 2 + (c[v >> 2] | 0);
         o = N - (o << 4) | 0;
        }
        N = (r | 0) / (c[H + (G * 308 | 0) + 52 + (q << 2) >> 2] | 0) | 0;
        o = w + (G * 1028 | 0) + (((aa(((N | 0) > -1 ? N : 0 - N | 0) | 0) | 0) ^ 31) + (o << 4 | 1) << 2) | 0;
        c[o >> 2] = (c[o >> 2] | 0) + 2;
        o = 0;
       }
       t = t + 1 | 0;
      } while ((t | 0) != 64);
      if ((o | 0) > 0) {
       N = w + (G * 1028 | 0) | 0;
       c[N >> 2] = (c[N >> 2] | 0) + 2;
      }
      q = H + (G * 308 | 0) | 0;
      o = c[B >> 2] | 0;
      if ((o | 0) <= (I | 0)) {
       Oa = 261;
       break d;
      }
      if ((c[D >> 2] | 0) <= (J | 0)) {
       Oa = 263;
       break d;
      }
      o = (_(o, J) | 0) + I << 6;
      N = F + (o << 1) | 0;
      v = Za;
      M = N + 128 | 0;
      do {
       b[N >> 1] = b[v >> 1] | 0;
       N = N + 2 | 0;
       v = v + 2 | 0;
      } while ((N | 0) < (M | 0));
      Cb((c[E >> 2] | 0) + (o << 1) | 0, tb);
      Sb(q, I, J, tb);
      o = (c[fb >> 2] | 0) + (K << 2) | 0;
      c[o >> 2] = (c[o >> 2] | 0) + P;
      o = c[qa >> 2] | 0;
      do if (o) {
       r = o;
       while (1) {
        o = c[r + 16 >> 2] | 0;
        if ((K | 0) < (o | 0)) {
         o = c[r >> 2] | 0;
         if (!o) {
          q = r;
          Oa = 267;
          break;
         }
        } else {
         if ((o | 0) >= (K | 0)) {
          o = r;
          Oa = 272;
          break;
         }
         q = r + 4 | 0;
         o = c[q >> 2] | 0;
         if (!o) {
          Oa = 271;
          break;
         }
        }
        r = o;
       }
       if ((Oa | 0) == 267) {
        Oa = 0;
        c[tb >> 2] = r;
        break;
       } else if ((Oa | 0) == 271) {
        Oa = 0;
        c[tb >> 2] = r;
        break;
       } else if ((Oa | 0) == 272) {
        Oa = 0;
        c[tb >> 2] = o;
        q = tb;
        r = o;
        break;
       }
      } else {
       c[tb >> 2] = qa;
       q = qa;
       r = Fa;
      } while (0);
      if (!(c[q >> 2] | 0)) {
       o = ye(20) | 0;
       c[o + 16 >> 2] = K;
       c[o >> 2] = 0;
       c[o + 4 >> 2] = 0;
       c[o + 8 >> 2] = r;
       c[q >> 2] = o;
       r = c[c[mb >> 2] >> 2] | 0;
       if (r) {
        c[mb >> 2] = r;
        o = c[q >> 2] | 0;
       }
       Td(c[ma >> 2] | 0, o);
       c[na >> 2] = (c[na >> 2] | 0) + 1;
      }
      x = +g[(c[qb >> 2] | 0) + (L << 3) + 4 >> 2];
      D = L + 1 | 0;
      if (!((L | 0) % 10 | 0)) p = Ud(zb, yb) | 0;
      A = c[zb >> 2] | 0;
      N = c[Ma >> 2] | 0;
      w = c[yb >> 2] | 0;
      v = (N - A | 0) / 1028 | 0;
      if ((N | 0) == (A | 0)) o = 0; else {
       B = 0;
       o = 0;
       do {
        t = B * 257 | 0;
        u = 1;
        q = 0;
        r = 0;
        while (1) {
         q = (_((d[w + (r + t) >> 0] | 0) + (r & 15) | 0, (c[A + (B * 1028 | 0) + (r << 2) >> 2] | 0) >>> 1) | 0) + q | 0;
         r = u + 1 | 0;
         if ((r | 0) == 257) break; else {
          N = u;
          u = r;
          r = N;
         }
        }
        o = q + o + (((q * 3 | 0) + 512 | 0) >>> 10) | 0;
        B = B + 1 | 0;
       } while (B >>> 0 < v >>> 0);
       o = (o + 7 | 0) >>> 3;
      }
      q = p + Ka + o | 0;
      if ((L | 0) >= (z | 0) ? (N = q - l | 0, ((N | 0) > -1 ? N : 0 - N | 0) >>> 0 > O >>> 0) : 0) {
       o = D;
       l = q;
       break;
      }
      o = c[qb >> 2] | 0;
      if (D >>> 0 >= (c[Y >> 2] | 0) - o >> 3 >>> 0) {
       l = q;
       break h;
      } else L = D;
     }
     D = o;
    } while (0);
    if (ra) {
     o = c[jb >> 2] | 0;
     q = c[xb >> 2] | 0;
     r = 0;
     do {
      O = q + (r << 2) | 0;
      g[O >> 2] = +g[O >> 2] + oa * (x * +g[o + (r << 2) >> 2]);
      r = r + 1 | 0;
     } while ((r | 0) != (Ta | 0));
    }
    t = c[sa >> 2] | 0;
    hg(bb, 40067, 20);
    r = Sd(t, tb, bb) | 0;
    o = c[r >> 2] | 0;
    if (!o) {
     o = ye(32) | 0;
     q = o + 16 | 0;
     c[q >> 2] = c[bb >> 2];
     c[q + 4 >> 2] = c[bb + 4 >> 2];
     c[q + 8 >> 2] = c[bb + 8 >> 2];
     c[bb >> 2] = 0;
     c[bb + 4 >> 2] = 0;
     c[bb + 8 >> 2] = 0;
     c[o + 28 >> 2] = 0;
     q = c[tb >> 2] | 0;
     c[o >> 2] = 0;
     c[o + 4 >> 2] = 0;
     c[o + 8 >> 2] = q;
     c[r >> 2] = o;
     q = c[c[t >> 2] >> 2] | 0;
     if (!q) q = o; else {
      c[t >> 2] = q;
      q = c[r >> 2] | 0;
     }
     Td(c[t + 4 >> 2] | 0, q);
     O = t + 8 | 0;
     c[O >> 2] = (c[O >> 2] | 0) + 1;
    }
    t = o + 28 | 0;
    c[t >> 2] = (c[t >> 2] | 0) + 1;
    ig(bb);
    t = c[sa >> 2] | 0;
    hg(cb, R, S);
    r = Sd(t, tb, cb) | 0;
    o = c[r >> 2] | 0;
    if (!o) {
     o = ye(32) | 0;
     q = o + 16 | 0;
     c[q >> 2] = c[cb >> 2];
     c[q + 4 >> 2] = c[cb + 4 >> 2];
     c[q + 8 >> 2] = c[cb + 8 >> 2];
     c[cb >> 2] = 0;
     c[cb + 4 >> 2] = 0;
     c[cb + 8 >> 2] = 0;
     c[o + 28 >> 2] = 0;
     q = c[tb >> 2] | 0;
     c[o >> 2] = 0;
     c[o + 4 >> 2] = 0;
     c[o + 8 >> 2] = q;
     c[r >> 2] = o;
     q = c[c[t >> 2] >> 2] | 0;
     if (!q) q = o; else {
      c[t >> 2] = q;
      q = c[r >> 2] | 0;
     }
     Td(c[t + 4 >> 2] | 0, q);
     O = t + 8 | 0;
     c[O >> 2] = (c[O >> 2] | 0) + 1;
    }
    O = o + 28 | 0;
    c[O >> 2] = (c[O >> 2] | 0) + 1;
    ig(cb);
    Hd(sb, f);
    $b(j, sb);
    c[pb >> 2] = 0;
    c[pb + 4 >> 2] = 0;
    c[pb + 8 >> 2] = 0;
    a[ta >> 0] = 0;
    a[pb >> 0] = 0;
    O = (a[Na >> 0] | 0) != 0;
    c[Za >> 2] = 6;
    c[va >> 2] = ua;
    c[tb >> 2] = c[Za >> 2];
    c[tb + 4 >> 2] = c[Za + 4 >> 2];
    if (!(Fc(sb, O, tb) | 0)) {
     Oa = 301;
     break d;
    }
    t = c[sa >> 2] | 0;
    hg(db, 40067, 20);
    r = Sd(t, tb, db) | 0;
    o = c[r >> 2] | 0;
    if (!o) {
     o = ye(32) | 0;
     q = o + 16 | 0;
     c[q >> 2] = c[db >> 2];
     c[q + 4 >> 2] = c[db + 4 >> 2];
     c[q + 8 >> 2] = c[db + 8 >> 2];
     c[db >> 2] = 0;
     c[db + 4 >> 2] = 0;
     c[db + 8 >> 2] = 0;
     c[o + 28 >> 2] = 0;
     q = c[tb >> 2] | 0;
     c[o >> 2] = 0;
     c[o + 4 >> 2] = 0;
     c[o + 8 >> 2] = q;
     c[r >> 2] = o;
     q = c[c[t >> 2] >> 2] | 0;
     if (!q) q = o; else {
      c[t >> 2] = q;
      q = c[r >> 2] | 0;
     }
     Td(c[t + 4 >> 2] | 0, q);
     O = t + 8 | 0;
     c[O >> 2] = (c[O >> 2] | 0) + 1;
    }
    M = c[o + 28 >> 2] | 0;
    K = c[Xa >> 2] | 0;
    L = c[K + 12 >> 2] | 0;
    o = c[K + 316 >> 2] | 0;
    q = c[K + 320 >> 2] | 0;
    O = c[K + 624 >> 2] | 0;
    N = c[K + 628 >> 2] | 0;
    c[ub >> 2] = c[K + 8 >> 2];
    c[ub + 4 >> 2] = L;
    c[ub + 8 >> 2] = o;
    c[ub + 12 >> 2] = q;
    c[ub + 16 >> 2] = O;
    c[ub + 20 >> 2] = N;
    hg(eb, tb, Ef(tb, 128, 35340, ub) | 0);
    N = (a[eb >> 0] & 1) == 0 ? xa : c[wa >> 2] | 0;
    O = (c[Y >> 2] | 0) - (c[qb >> 2] | 0) >> 3;
    q = c[na >> 2] | 0;
    o = a[pb >> 0] | 0;
    o = (o & 1) == 0 ? (o & 255) >>> 1 : c[ya >> 2] | 0;
    c[vb >> 2] = M;
    c[vb + 4 >> 2] = N;
    c[vb + 8 >> 2] = Va;
    c[vb + 12 >> 2] = T;
    c[vb + 16 >> 2] = D;
    c[vb + 20 >> 2] = O;
    c[vb + 24 >> 2] = q;
    c[vb + 28 >> 2] = s;
    c[vb + 32 >> 2] = Ta;
    h[vb + 40 >> 3] = x;
    c[vb + 48 >> 2] = o;
    h[vb + 56 >> 3] = 100.0 - +(l | 0) * 100.0 / +(o >>> 0);
    Ef(Za, 1024, 40193, vb) | 0;
    ig(eb);
    ig(db);
    a[za >> 0] = 0;
    o = c[sa >> 2] | 0;
    hg(gb, Za, Xf(Za) | 0);
    q = c[o + 12 >> 2] | 0;
    if (q) {
     O = a[gb >> 0] | 0;
     N = (O & 1) == 0;
     lg(q, N ? Da : c[Ca >> 2] | 0, N ? (O & 255) >>> 1 : c[Ea >> 2] | 0) | 0;
    }
    o = c[o + 16 >> 2] | 0;
    if (o) sf((a[gb >> 0] & 1) == 0 ? Da : c[Ca >> 2] | 0, o) | 0;
    ig(gb);
    o = c[fa >> 2] | 0;
    lb[c[(c[o >> 2] | 0) + 8 >> 2] & 3](o, j);
    Id(e, pb);
    o = c[fa >> 2] | 0;
    lb[c[(c[o >> 2] | 0) + 24 >> 2] & 3](hb, o);
    te(ob, c[hb >> 2] | 0, c[Ba >> 2] | 0);
    o = c[hb >> 2] | 0;
    q = o;
    if (o) {
     r = c[Ba >> 2] | 0;
     if ((r | 0) != (o | 0)) c[Ba >> 2] = r + (~((r + -4 - q | 0) >>> 2) << 2);
     Ae(o);
    }
    ig(pb);
    Kc(sb);
    ae(mb, c[qa >> 2] | 0);
    t = 1;
    o = 0;
   }
   q = c[jb >> 2] | 0;
   r = q;
   if (q) {
    s = c[$ >> 2] | 0;
    if ((s | 0) != (q | 0)) c[$ >> 2] = s + (~((s + -4 - r | 0) >>> 2) << 2);
    Ae(q);
   }
   q = c[qb >> 2] | 0;
   r = q;
   if (q) {
    s = c[Y >> 2] | 0;
    if ((s | 0) != (q | 0)) c[Y >> 2] = s + (~((s + -8 - r | 0) >>> 3) << 3);
    Ae(q);
   }
  } while (t);
  Ha = Ha + 4 | 0;
  if ((Ha | 0) == 32004) {
   Oa = 325;
   break;
  } else q = p;
 }
 if ((Oa | 0) == 192) we(_a); else if ((Oa | 0) == 239) Aa(34608, 34635, 60, 34662); else if ((Oa | 0) == 241) Aa(34676, 34635, 61, 34662); else if ((Oa | 0) == 261) Aa(34608, 34635, 124, 34806); else if ((Oa | 0) == 263) Aa(34676, 34635, 125, 34806); else if ((Oa | 0) == 301) Aa(39886, 39888, 119, 39912); else if ((Oa | 0) == 325) {
  l = c[ob >> 2] | 0;
  o = l;
  if (l) {
   p = c[Ia >> 2] | 0;
   if ((p | 0) != (l | 0)) c[Ia >> 2] = p + (~((p + -4 - o | 0) >>> 2) << 2);
   Ae(l);
  }
  p = c[wb >> 2] | 0;
  q = p;
  if (p) {
   l = wb + 4 | 0;
   o = c[l >> 2] | 0;
   if ((o | 0) != (p | 0)) c[l >> 2] = o + (~((o + -4 - q | 0) >>> 2) << 2);
   Ae(p);
  }
  l = c[xb >> 2] | 0;
  o = l;
  if (l) {
   p = c[Ja >> 2] | 0;
   if ((p | 0) != (l | 0)) c[Ja >> 2] = p + (~((p + -4 - o | 0) >>> 2) << 2);
   Ae(l);
  }
  l = c[yb >> 2] | 0;
  if (l) {
   if ((c[La >> 2] | 0) != (l | 0)) c[La >> 2] = l;
   Ae(l);
  }
  l = c[zb >> 2] | 0;
  o = l;
  if (l) {
   p = c[Ma >> 2] | 0;
   if ((p | 0) != (l | 0)) c[Ma >> 2] = p + (~(((p + -1028 - o | 0) >>> 0) / 1028 | 0) * 1028 | 0);
   Ae(l);
  }
  Kc(Ab);
  l = c[Db >> 2] | 0;
  if (!l) {
   i = Eb;
   return;
  }
  o = c[Bb >> 2] | 0;
  if ((o | 0) != (l | 0)) {
   do {
    p = o + -12 | 0;
    c[Bb >> 2] = p;
    q = c[p >> 2] | 0;
    r = q;
    if (!q) o = p; else {
     o = o + -8 | 0;
     p = c[o >> 2] | 0;
     if ((p | 0) != (q | 0)) c[o >> 2] = p + (~((p + -8 - r | 0) >>> 3) << 3);
     Ae(q);
     o = c[Bb >> 2] | 0;
    }
   } while ((o | 0) != (l | 0));
   l = c[Db >> 2] | 0;
  }
  Ae(l);
  i = Eb;
  return;
 }
}

function eg(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0;
 do if (a >>> 0 < 245) {
  o = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = o >>> 3;
  i = c[8514] | 0;
  d = i >>> a;
  if (d & 3) {
   a = (d & 1 ^ 1) + a | 0;
   e = a << 1;
   d = 34096 + (e << 2) | 0;
   e = 34096 + (e + 2 << 2) | 0;
   f = c[e >> 2] | 0;
   g = f + 8 | 0;
   h = c[g >> 2] | 0;
   do if ((d | 0) != (h | 0)) {
    if (h >>> 0 < (c[8518] | 0) >>> 0) xa();
    b = h + 12 | 0;
    if ((c[b >> 2] | 0) == (f | 0)) {
     c[b >> 2] = d;
     c[e >> 2] = h;
     break;
    } else xa();
   } else c[8514] = i & ~(1 << a); while (0);
   M = a << 3;
   c[f + 4 >> 2] = M | 3;
   M = f + (M | 4) | 0;
   c[M >> 2] = c[M >> 2] | 1;
   M = g;
   return M | 0;
  }
  h = c[8516] | 0;
  if (o >>> 0 > h >>> 0) {
   if (d) {
    e = 2 << a;
    e = d << a & (e | 0 - e);
    e = (e & 0 - e) + -1 | 0;
    j = e >>> 12 & 16;
    e = e >>> j;
    f = e >>> 5 & 8;
    e = e >>> f;
    g = e >>> 2 & 4;
    e = e >>> g;
    d = e >>> 1 & 2;
    e = e >>> d;
    a = e >>> 1 & 1;
    a = (f | j | g | d | a) + (e >>> a) | 0;
    e = a << 1;
    d = 34096 + (e << 2) | 0;
    e = 34096 + (e + 2 << 2) | 0;
    g = c[e >> 2] | 0;
    j = g + 8 | 0;
    f = c[j >> 2] | 0;
    do if ((d | 0) != (f | 0)) {
     if (f >>> 0 < (c[8518] | 0) >>> 0) xa();
     b = f + 12 | 0;
     if ((c[b >> 2] | 0) == (g | 0)) {
      c[b >> 2] = d;
      c[e >> 2] = f;
      k = c[8516] | 0;
      break;
     } else xa();
    } else {
     c[8514] = i & ~(1 << a);
     k = h;
    } while (0);
    M = a << 3;
    h = M - o | 0;
    c[g + 4 >> 2] = o | 3;
    i = g + o | 0;
    c[g + (o | 4) >> 2] = h | 1;
    c[g + M >> 2] = h;
    if (k) {
     f = c[8519] | 0;
     d = k >>> 3;
     b = d << 1;
     e = 34096 + (b << 2) | 0;
     a = c[8514] | 0;
     d = 1 << d;
     if (a & d) {
      a = 34096 + (b + 2 << 2) | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[8518] | 0) >>> 0) xa(); else {
       l = a;
       m = b;
      }
     } else {
      c[8514] = a | d;
      l = 34096 + (b + 2 << 2) | 0;
      m = e;
     }
     c[l >> 2] = f;
     c[m + 12 >> 2] = f;
     c[f + 8 >> 2] = m;
     c[f + 12 >> 2] = e;
    }
    c[8516] = h;
    c[8519] = i;
    M = j;
    return M | 0;
   }
   a = c[8515] | 0;
   if (a) {
    d = (a & 0 - a) + -1 | 0;
    L = d >>> 12 & 16;
    d = d >>> L;
    K = d >>> 5 & 8;
    d = d >>> K;
    M = d >>> 2 & 4;
    d = d >>> M;
    a = d >>> 1 & 2;
    d = d >>> a;
    e = d >>> 1 & 1;
    e = c[34360 + ((K | L | M | a | e) + (d >>> e) << 2) >> 2] | 0;
    d = (c[e + 4 >> 2] & -8) - o | 0;
    a = e;
    while (1) {
     b = c[a + 16 >> 2] | 0;
     if (!b) {
      b = c[a + 20 >> 2] | 0;
      if (!b) {
       j = d;
       break;
      }
     }
     a = (c[b + 4 >> 2] & -8) - o | 0;
     M = a >>> 0 < d >>> 0;
     d = M ? a : d;
     a = b;
     e = M ? b : e;
    }
    g = c[8518] | 0;
    if (e >>> 0 < g >>> 0) xa();
    i = e + o | 0;
    if (e >>> 0 >= i >>> 0) xa();
    h = c[e + 24 >> 2] | 0;
    d = c[e + 12 >> 2] | 0;
    do if ((d | 0) == (e | 0)) {
     a = e + 20 | 0;
     b = c[a >> 2] | 0;
     if (!b) {
      a = e + 16 | 0;
      b = c[a >> 2] | 0;
      if (!b) {
       n = 0;
       break;
      }
     }
     while (1) {
      d = b + 20 | 0;
      f = c[d >> 2] | 0;
      if (f) {
       b = f;
       a = d;
       continue;
      }
      d = b + 16 | 0;
      f = c[d >> 2] | 0;
      if (!f) break; else {
       b = f;
       a = d;
      }
     }
     if (a >>> 0 < g >>> 0) xa(); else {
      c[a >> 2] = 0;
      n = b;
      break;
     }
    } else {
     f = c[e + 8 >> 2] | 0;
     if (f >>> 0 < g >>> 0) xa();
     b = f + 12 | 0;
     if ((c[b >> 2] | 0) != (e | 0)) xa();
     a = d + 8 | 0;
     if ((c[a >> 2] | 0) == (e | 0)) {
      c[b >> 2] = d;
      c[a >> 2] = f;
      n = d;
      break;
     } else xa();
    } while (0);
    do if (h) {
     b = c[e + 28 >> 2] | 0;
     a = 34360 + (b << 2) | 0;
     if ((e | 0) == (c[a >> 2] | 0)) {
      c[a >> 2] = n;
      if (!n) {
       c[8515] = c[8515] & ~(1 << b);
       break;
      }
     } else {
      if (h >>> 0 < (c[8518] | 0) >>> 0) xa();
      b = h + 16 | 0;
      if ((c[b >> 2] | 0) == (e | 0)) c[b >> 2] = n; else c[h + 20 >> 2] = n;
      if (!n) break;
     }
     a = c[8518] | 0;
     if (n >>> 0 < a >>> 0) xa();
     c[n + 24 >> 2] = h;
     b = c[e + 16 >> 2] | 0;
     do if (b) if (b >>> 0 < a >>> 0) xa(); else {
      c[n + 16 >> 2] = b;
      c[b + 24 >> 2] = n;
      break;
     } while (0);
     b = c[e + 20 >> 2] | 0;
     if (b) if (b >>> 0 < (c[8518] | 0) >>> 0) xa(); else {
      c[n + 20 >> 2] = b;
      c[b + 24 >> 2] = n;
      break;
     }
    } while (0);
    if (j >>> 0 < 16) {
     M = j + o | 0;
     c[e + 4 >> 2] = M | 3;
     M = e + (M + 4) | 0;
     c[M >> 2] = c[M >> 2] | 1;
    } else {
     c[e + 4 >> 2] = o | 3;
     c[e + (o | 4) >> 2] = j | 1;
     c[e + (j + o) >> 2] = j;
     b = c[8516] | 0;
     if (b) {
      g = c[8519] | 0;
      d = b >>> 3;
      b = d << 1;
      f = 34096 + (b << 2) | 0;
      a = c[8514] | 0;
      d = 1 << d;
      if (a & d) {
       b = 34096 + (b + 2 << 2) | 0;
       a = c[b >> 2] | 0;
       if (a >>> 0 < (c[8518] | 0) >>> 0) xa(); else {
        p = b;
        q = a;
       }
      } else {
       c[8514] = a | d;
       p = 34096 + (b + 2 << 2) | 0;
       q = f;
      }
      c[p >> 2] = g;
      c[q + 12 >> 2] = g;
      c[g + 8 >> 2] = q;
      c[g + 12 >> 2] = f;
     }
     c[8516] = j;
     c[8519] = i;
    }
    M = e + 8 | 0;
    return M | 0;
   } else q = o;
  } else q = o;
 } else if (a >>> 0 <= 4294967231) {
  a = a + 11 | 0;
  m = a & -8;
  l = c[8515] | 0;
  if (l) {
   d = 0 - m | 0;
   a = a >>> 8;
   if (a) if (m >>> 0 > 16777215) k = 31; else {
    q = (a + 1048320 | 0) >>> 16 & 8;
    v = a << q;
    p = (v + 520192 | 0) >>> 16 & 4;
    v = v << p;
    k = (v + 245760 | 0) >>> 16 & 2;
    k = 14 - (p | q | k) + (v << k >>> 15) | 0;
    k = m >>> (k + 7 | 0) & 1 | k << 1;
   } else k = 0;
   a = c[34360 + (k << 2) >> 2] | 0;
   a : do if (!a) {
    f = 0;
    a = 0;
    v = 86;
   } else {
    h = d;
    f = 0;
    i = m << ((k | 0) == 31 ? 0 : 25 - (k >>> 1) | 0);
    j = a;
    a = 0;
    while (1) {
     g = c[j + 4 >> 2] & -8;
     d = g - m | 0;
     if (d >>> 0 < h >>> 0) if ((g | 0) == (m | 0)) {
      g = j;
      a = j;
      v = 90;
      break a;
     } else a = j; else d = h;
     v = c[j + 20 >> 2] | 0;
     j = c[j + 16 + (i >>> 31 << 2) >> 2] | 0;
     f = (v | 0) == 0 | (v | 0) == (j | 0) ? f : v;
     if (!j) {
      v = 86;
      break;
     } else {
      h = d;
      i = i << 1;
     }
    }
   } while (0);
   if ((v | 0) == 86) {
    if ((f | 0) == 0 & (a | 0) == 0) {
     a = 2 << k;
     a = l & (a | 0 - a);
     if (!a) {
      q = m;
      break;
     }
     a = (a & 0 - a) + -1 | 0;
     n = a >>> 12 & 16;
     a = a >>> n;
     l = a >>> 5 & 8;
     a = a >>> l;
     p = a >>> 2 & 4;
     a = a >>> p;
     q = a >>> 1 & 2;
     a = a >>> q;
     f = a >>> 1 & 1;
     f = c[34360 + ((l | n | p | q | f) + (a >>> f) << 2) >> 2] | 0;
     a = 0;
    }
    if (!f) {
     i = d;
     j = a;
    } else {
     g = f;
     v = 90;
    }
   }
   if ((v | 0) == 90) while (1) {
    v = 0;
    q = (c[g + 4 >> 2] & -8) - m | 0;
    f = q >>> 0 < d >>> 0;
    d = f ? q : d;
    a = f ? g : a;
    f = c[g + 16 >> 2] | 0;
    if (f) {
     g = f;
     v = 90;
     continue;
    }
    g = c[g + 20 >> 2] | 0;
    if (!g) {
     i = d;
     j = a;
     break;
    } else v = 90;
   }
   if ((j | 0) != 0 ? i >>> 0 < ((c[8516] | 0) - m | 0) >>> 0 : 0) {
    f = c[8518] | 0;
    if (j >>> 0 < f >>> 0) xa();
    h = j + m | 0;
    if (j >>> 0 >= h >>> 0) xa();
    g = c[j + 24 >> 2] | 0;
    d = c[j + 12 >> 2] | 0;
    do if ((d | 0) == (j | 0)) {
     a = j + 20 | 0;
     b = c[a >> 2] | 0;
     if (!b) {
      a = j + 16 | 0;
      b = c[a >> 2] | 0;
      if (!b) {
       o = 0;
       break;
      }
     }
     while (1) {
      d = b + 20 | 0;
      e = c[d >> 2] | 0;
      if (e) {
       b = e;
       a = d;
       continue;
      }
      d = b + 16 | 0;
      e = c[d >> 2] | 0;
      if (!e) break; else {
       b = e;
       a = d;
      }
     }
     if (a >>> 0 < f >>> 0) xa(); else {
      c[a >> 2] = 0;
      o = b;
      break;
     }
    } else {
     e = c[j + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) xa();
     b = e + 12 | 0;
     if ((c[b >> 2] | 0) != (j | 0)) xa();
     a = d + 8 | 0;
     if ((c[a >> 2] | 0) == (j | 0)) {
      c[b >> 2] = d;
      c[a >> 2] = e;
      o = d;
      break;
     } else xa();
    } while (0);
    do if (g) {
     b = c[j + 28 >> 2] | 0;
     a = 34360 + (b << 2) | 0;
     if ((j | 0) == (c[a >> 2] | 0)) {
      c[a >> 2] = o;
      if (!o) {
       c[8515] = c[8515] & ~(1 << b);
       break;
      }
     } else {
      if (g >>> 0 < (c[8518] | 0) >>> 0) xa();
      b = g + 16 | 0;
      if ((c[b >> 2] | 0) == (j | 0)) c[b >> 2] = o; else c[g + 20 >> 2] = o;
      if (!o) break;
     }
     a = c[8518] | 0;
     if (o >>> 0 < a >>> 0) xa();
     c[o + 24 >> 2] = g;
     b = c[j + 16 >> 2] | 0;
     do if (b) if (b >>> 0 < a >>> 0) xa(); else {
      c[o + 16 >> 2] = b;
      c[b + 24 >> 2] = o;
      break;
     } while (0);
     b = c[j + 20 >> 2] | 0;
     if (b) if (b >>> 0 < (c[8518] | 0) >>> 0) xa(); else {
      c[o + 20 >> 2] = b;
      c[b + 24 >> 2] = o;
      break;
     }
    } while (0);
    b : do if (i >>> 0 >= 16) {
     c[j + 4 >> 2] = m | 3;
     c[j + (m | 4) >> 2] = i | 1;
     c[j + (i + m) >> 2] = i;
     b = i >>> 3;
     if (i >>> 0 < 256) {
      a = b << 1;
      e = 34096 + (a << 2) | 0;
      d = c[8514] | 0;
      b = 1 << b;
      if (d & b) {
       b = 34096 + (a + 2 << 2) | 0;
       a = c[b >> 2] | 0;
       if (a >>> 0 < (c[8518] | 0) >>> 0) xa(); else {
        s = b;
        t = a;
       }
      } else {
       c[8514] = d | b;
       s = 34096 + (a + 2 << 2) | 0;
       t = e;
      }
      c[s >> 2] = h;
      c[t + 12 >> 2] = h;
      c[j + (m + 8) >> 2] = t;
      c[j + (m + 12) >> 2] = e;
      break;
     }
     b = i >>> 8;
     if (b) if (i >>> 0 > 16777215) e = 31; else {
      L = (b + 1048320 | 0) >>> 16 & 8;
      M = b << L;
      K = (M + 520192 | 0) >>> 16 & 4;
      M = M << K;
      e = (M + 245760 | 0) >>> 16 & 2;
      e = 14 - (K | L | e) + (M << e >>> 15) | 0;
      e = i >>> (e + 7 | 0) & 1 | e << 1;
     } else e = 0;
     b = 34360 + (e << 2) | 0;
     c[j + (m + 28) >> 2] = e;
     c[j + (m + 20) >> 2] = 0;
     c[j + (m + 16) >> 2] = 0;
     a = c[8515] | 0;
     d = 1 << e;
     if (!(a & d)) {
      c[8515] = a | d;
      c[b >> 2] = h;
      c[j + (m + 24) >> 2] = b;
      c[j + (m + 12) >> 2] = h;
      c[j + (m + 8) >> 2] = h;
      break;
     }
     b = c[b >> 2] | 0;
     c : do if ((c[b + 4 >> 2] & -8 | 0) != (i | 0)) {
      e = i << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);
      while (1) {
       a = b + 16 + (e >>> 31 << 2) | 0;
       d = c[a >> 2] | 0;
       if (!d) break;
       if ((c[d + 4 >> 2] & -8 | 0) == (i | 0)) {
        y = d;
        break c;
       } else {
        e = e << 1;
        b = d;
       }
      }
      if (a >>> 0 < (c[8518] | 0) >>> 0) xa(); else {
       c[a >> 2] = h;
       c[j + (m + 24) >> 2] = b;
       c[j + (m + 12) >> 2] = h;
       c[j + (m + 8) >> 2] = h;
       break b;
      }
     } else y = b; while (0);
     b = y + 8 | 0;
     a = c[b >> 2] | 0;
     M = c[8518] | 0;
     if (a >>> 0 >= M >>> 0 & y >>> 0 >= M >>> 0) {
      c[a + 12 >> 2] = h;
      c[b >> 2] = h;
      c[j + (m + 8) >> 2] = a;
      c[j + (m + 12) >> 2] = y;
      c[j + (m + 24) >> 2] = 0;
      break;
     } else xa();
    } else {
     M = i + m | 0;
     c[j + 4 >> 2] = M | 3;
     M = j + (M + 4) | 0;
     c[M >> 2] = c[M >> 2] | 1;
    } while (0);
    M = j + 8 | 0;
    return M | 0;
   } else q = m;
  } else q = m;
 } else q = -1; while (0);
 d = c[8516] | 0;
 if (d >>> 0 >= q >>> 0) {
  b = d - q | 0;
  a = c[8519] | 0;
  if (b >>> 0 > 15) {
   c[8519] = a + q;
   c[8516] = b;
   c[a + (q + 4) >> 2] = b | 1;
   c[a + d >> 2] = b;
   c[a + 4 >> 2] = q | 3;
  } else {
   c[8516] = 0;
   c[8519] = 0;
   c[a + 4 >> 2] = d | 3;
   M = a + (d + 4) | 0;
   c[M >> 2] = c[M >> 2] | 1;
  }
  M = a + 8 | 0;
  return M | 0;
 }
 a = c[8517] | 0;
 if (a >>> 0 > q >>> 0) {
  L = a - q | 0;
  c[8517] = L;
  M = c[8520] | 0;
  c[8520] = M + q;
  c[M + (q + 4) >> 2] = L | 1;
  c[M + 4 >> 2] = q | 3;
  M = M + 8 | 0;
  return M | 0;
 }
 do if (!(c[8632] | 0)) {
  a = La(30) | 0;
  if (!(a + -1 & a)) {
   c[8634] = a;
   c[8633] = a;
   c[8635] = -1;
   c[8636] = -1;
   c[8637] = 0;
   c[8625] = 0;
   c[8632] = (_a(0) | 0) & -16 ^ 1431655768;
   break;
  } else xa();
 } while (0);
 j = q + 48 | 0;
 i = c[8634] | 0;
 k = q + 47 | 0;
 h = i + k | 0;
 i = 0 - i | 0;
 l = h & i;
 if (l >>> 0 <= q >>> 0) {
  M = 0;
  return M | 0;
 }
 a = c[8624] | 0;
 if ((a | 0) != 0 ? (t = c[8622] | 0, y = t + l | 0, y >>> 0 <= t >>> 0 | y >>> 0 > a >>> 0) : 0) {
  M = 0;
  return M | 0;
 }
 d : do if (!(c[8625] & 4)) {
  a = c[8520] | 0;
  e : do if (a) {
   f = 34504;
   while (1) {
    d = c[f >> 2] | 0;
    if (d >>> 0 <= a >>> 0 ? (r = f + 4 | 0, (d + (c[r >> 2] | 0) | 0) >>> 0 > a >>> 0) : 0) {
     g = f;
     a = r;
     break;
    }
    f = c[f + 8 >> 2] | 0;
    if (!f) {
     v = 174;
     break e;
    }
   }
   d = h - (c[8517] | 0) & i;
   if (d >>> 0 < 2147483647) {
    f = Ga(d | 0) | 0;
    y = (f | 0) == ((c[g >> 2] | 0) + (c[a >> 2] | 0) | 0);
    a = y ? d : 0;
    if (y) {
     if ((f | 0) != (-1 | 0)) {
      w = f;
      p = a;
      v = 194;
      break d;
     }
    } else v = 184;
   } else a = 0;
  } else v = 174; while (0);
  do if ((v | 0) == 174) {
   g = Ga(0) | 0;
   if ((g | 0) != (-1 | 0)) {
    a = g;
    d = c[8633] | 0;
    f = d + -1 | 0;
    if (!(f & a)) d = l; else d = l - a + (f + a & 0 - d) | 0;
    a = c[8622] | 0;
    f = a + d | 0;
    if (d >>> 0 > q >>> 0 & d >>> 0 < 2147483647) {
     y = c[8624] | 0;
     if ((y | 0) != 0 ? f >>> 0 <= a >>> 0 | f >>> 0 > y >>> 0 : 0) {
      a = 0;
      break;
     }
     f = Ga(d | 0) | 0;
     y = (f | 0) == (g | 0);
     a = y ? d : 0;
     if (y) {
      w = g;
      p = a;
      v = 194;
      break d;
     } else v = 184;
    } else a = 0;
   } else a = 0;
  } while (0);
  f : do if ((v | 0) == 184) {
   g = 0 - d | 0;
   do if (j >>> 0 > d >>> 0 & (d >>> 0 < 2147483647 & (f | 0) != (-1 | 0)) ? (u = c[8634] | 0, u = k - d + u & 0 - u, u >>> 0 < 2147483647) : 0) if ((Ga(u | 0) | 0) == (-1 | 0)) {
    Ga(g | 0) | 0;
    break f;
   } else {
    d = u + d | 0;
    break;
   } while (0);
   if ((f | 0) != (-1 | 0)) {
    w = f;
    p = d;
    v = 194;
    break d;
   }
  } while (0);
  c[8625] = c[8625] | 4;
  v = 191;
 } else {
  a = 0;
  v = 191;
 } while (0);
 if ((((v | 0) == 191 ? l >>> 0 < 2147483647 : 0) ? (w = Ga(l | 0) | 0, x = Ga(0) | 0, w >>> 0 < x >>> 0 & ((w | 0) != (-1 | 0) & (x | 0) != (-1 | 0))) : 0) ? (z = x - w | 0, A = z >>> 0 > (q + 40 | 0) >>> 0, A) : 0) {
  p = A ? z : a;
  v = 194;
 }
 if ((v | 0) == 194) {
  a = (c[8622] | 0) + p | 0;
  c[8622] = a;
  if (a >>> 0 > (c[8623] | 0) >>> 0) c[8623] = a;
  h = c[8520] | 0;
  g : do if (h) {
   g = 34504;
   do {
    a = c[g >> 2] | 0;
    d = g + 4 | 0;
    f = c[d >> 2] | 0;
    if ((w | 0) == (a + f | 0)) {
     B = a;
     C = d;
     D = f;
     E = g;
     v = 204;
     break;
    }
    g = c[g + 8 >> 2] | 0;
   } while ((g | 0) != 0);
   if (((v | 0) == 204 ? (c[E + 12 >> 2] & 8 | 0) == 0 : 0) ? h >>> 0 < w >>> 0 & h >>> 0 >= B >>> 0 : 0) {
    c[C >> 2] = D + p;
    M = (c[8517] | 0) + p | 0;
    L = h + 8 | 0;
    L = (L & 7 | 0) == 0 ? 0 : 0 - L & 7;
    K = M - L | 0;
    c[8520] = h + L;
    c[8517] = K;
    c[h + (L + 4) >> 2] = K | 1;
    c[h + (M + 4) >> 2] = 40;
    c[8521] = c[8636];
    break;
   }
   a = c[8518] | 0;
   if (w >>> 0 < a >>> 0) {
    c[8518] = w;
    a = w;
   }
   d = w + p | 0;
   g = 34504;
   while (1) {
    if ((c[g >> 2] | 0) == (d | 0)) {
     f = g;
     d = g;
     v = 212;
     break;
    }
    g = c[g + 8 >> 2] | 0;
    if (!g) {
     d = 34504;
     break;
    }
   }
   if ((v | 0) == 212) if (!(c[d + 12 >> 2] & 8)) {
    c[f >> 2] = w;
    n = d + 4 | 0;
    c[n >> 2] = (c[n >> 2] | 0) + p;
    n = w + 8 | 0;
    n = (n & 7 | 0) == 0 ? 0 : 0 - n & 7;
    k = w + (p + 8) | 0;
    k = (k & 7 | 0) == 0 ? 0 : 0 - k & 7;
    b = w + (k + p) | 0;
    m = n + q | 0;
    o = w + m | 0;
    l = b - (w + n) - q | 0;
    c[w + (n + 4) >> 2] = q | 3;
    h : do if ((b | 0) != (h | 0)) {
     if ((b | 0) == (c[8519] | 0)) {
      M = (c[8516] | 0) + l | 0;
      c[8516] = M;
      c[8519] = o;
      c[w + (m + 4) >> 2] = M | 1;
      c[w + (M + m) >> 2] = M;
      break;
     }
     i = p + 4 | 0;
     d = c[w + (i + k) >> 2] | 0;
     if ((d & 3 | 0) == 1) {
      j = d & -8;
      g = d >>> 3;
      i : do if (d >>> 0 >= 256) {
       h = c[w + ((k | 24) + p) >> 2] | 0;
       e = c[w + (p + 12 + k) >> 2] | 0;
       do if ((e | 0) == (b | 0)) {
        f = k | 16;
        e = w + (i + f) | 0;
        d = c[e >> 2] | 0;
        if (!d) {
         e = w + (f + p) | 0;
         d = c[e >> 2] | 0;
         if (!d) {
          J = 0;
          break;
         }
        }
        while (1) {
         f = d + 20 | 0;
         g = c[f >> 2] | 0;
         if (g) {
          d = g;
          e = f;
          continue;
         }
         f = d + 16 | 0;
         g = c[f >> 2] | 0;
         if (!g) break; else {
          d = g;
          e = f;
         }
        }
        if (e >>> 0 < a >>> 0) xa(); else {
         c[e >> 2] = 0;
         J = d;
         break;
        }
       } else {
        f = c[w + ((k | 8) + p) >> 2] | 0;
        if (f >>> 0 < a >>> 0) xa();
        a = f + 12 | 0;
        if ((c[a >> 2] | 0) != (b | 0)) xa();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (b | 0)) {
         c[a >> 2] = e;
         c[d >> 2] = f;
         J = e;
         break;
        } else xa();
       } while (0);
       if (!h) break;
       a = c[w + (p + 28 + k) >> 2] | 0;
       d = 34360 + (a << 2) | 0;
       do if ((b | 0) != (c[d >> 2] | 0)) {
        if (h >>> 0 < (c[8518] | 0) >>> 0) xa();
        a = h + 16 | 0;
        if ((c[a >> 2] | 0) == (b | 0)) c[a >> 2] = J; else c[h + 20 >> 2] = J;
        if (!J) break i;
       } else {
        c[d >> 2] = J;
        if (J) break;
        c[8515] = c[8515] & ~(1 << a);
        break i;
       } while (0);
       d = c[8518] | 0;
       if (J >>> 0 < d >>> 0) xa();
       c[J + 24 >> 2] = h;
       b = k | 16;
       a = c[w + (b + p) >> 2] | 0;
       do if (a) if (a >>> 0 < d >>> 0) xa(); else {
        c[J + 16 >> 2] = a;
        c[a + 24 >> 2] = J;
        break;
       } while (0);
       b = c[w + (i + b) >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[8518] | 0) >>> 0) xa(); else {
        c[J + 20 >> 2] = b;
        c[b + 24 >> 2] = J;
        break;
       }
      } else {
       e = c[w + ((k | 8) + p) >> 2] | 0;
       f = c[w + (p + 12 + k) >> 2] | 0;
       d = 34096 + (g << 1 << 2) | 0;
       do if ((e | 0) != (d | 0)) {
        if (e >>> 0 < a >>> 0) xa();
        if ((c[e + 12 >> 2] | 0) == (b | 0)) break;
        xa();
       } while (0);
       if ((f | 0) == (e | 0)) {
        c[8514] = c[8514] & ~(1 << g);
        break;
       }
       do if ((f | 0) == (d | 0)) F = f + 8 | 0; else {
        if (f >>> 0 < a >>> 0) xa();
        a = f + 8 | 0;
        if ((c[a >> 2] | 0) == (b | 0)) {
         F = a;
         break;
        }
        xa();
       } while (0);
       c[e + 12 >> 2] = f;
       c[F >> 2] = e;
      } while (0);
      b = w + ((j | k) + p) | 0;
      f = j + l | 0;
     } else f = l;
     b = b + 4 | 0;
     c[b >> 2] = c[b >> 2] & -2;
     c[w + (m + 4) >> 2] = f | 1;
     c[w + (f + m) >> 2] = f;
     b = f >>> 3;
     if (f >>> 0 < 256) {
      a = b << 1;
      e = 34096 + (a << 2) | 0;
      d = c[8514] | 0;
      b = 1 << b;
      do if (!(d & b)) {
       c[8514] = d | b;
       K = 34096 + (a + 2 << 2) | 0;
       L = e;
      } else {
       b = 34096 + (a + 2 << 2) | 0;
       a = c[b >> 2] | 0;
       if (a >>> 0 >= (c[8518] | 0) >>> 0) {
        K = b;
        L = a;
        break;
       }
       xa();
      } while (0);
      c[K >> 2] = o;
      c[L + 12 >> 2] = o;
      c[w + (m + 8) >> 2] = L;
      c[w + (m + 12) >> 2] = e;
      break;
     }
     b = f >>> 8;
     do if (!b) e = 0; else {
      if (f >>> 0 > 16777215) {
       e = 31;
       break;
      }
      K = (b + 1048320 | 0) >>> 16 & 8;
      L = b << K;
      J = (L + 520192 | 0) >>> 16 & 4;
      L = L << J;
      e = (L + 245760 | 0) >>> 16 & 2;
      e = 14 - (J | K | e) + (L << e >>> 15) | 0;
      e = f >>> (e + 7 | 0) & 1 | e << 1;
     } while (0);
     b = 34360 + (e << 2) | 0;
     c[w + (m + 28) >> 2] = e;
     c[w + (m + 20) >> 2] = 0;
     c[w + (m + 16) >> 2] = 0;
     a = c[8515] | 0;
     d = 1 << e;
     if (!(a & d)) {
      c[8515] = a | d;
      c[b >> 2] = o;
      c[w + (m + 24) >> 2] = b;
      c[w + (m + 12) >> 2] = o;
      c[w + (m + 8) >> 2] = o;
      break;
     }
     b = c[b >> 2] | 0;
     j : do if ((c[b + 4 >> 2] & -8 | 0) != (f | 0)) {
      e = f << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);
      while (1) {
       a = b + 16 + (e >>> 31 << 2) | 0;
       d = c[a >> 2] | 0;
       if (!d) break;
       if ((c[d + 4 >> 2] & -8 | 0) == (f | 0)) {
        M = d;
        break j;
       } else {
        e = e << 1;
        b = d;
       }
      }
      if (a >>> 0 < (c[8518] | 0) >>> 0) xa(); else {
       c[a >> 2] = o;
       c[w + (m + 24) >> 2] = b;
       c[w + (m + 12) >> 2] = o;
       c[w + (m + 8) >> 2] = o;
       break h;
      }
     } else M = b; while (0);
     b = M + 8 | 0;
     a = c[b >> 2] | 0;
     L = c[8518] | 0;
     if (a >>> 0 >= L >>> 0 & M >>> 0 >= L >>> 0) {
      c[a + 12 >> 2] = o;
      c[b >> 2] = o;
      c[w + (m + 8) >> 2] = a;
      c[w + (m + 12) >> 2] = M;
      c[w + (m + 24) >> 2] = 0;
      break;
     } else xa();
    } else {
     M = (c[8517] | 0) + l | 0;
     c[8517] = M;
     c[8520] = o;
     c[w + (m + 4) >> 2] = M | 1;
    } while (0);
    M = w + (n | 8) | 0;
    return M | 0;
   } else d = 34504;
   while (1) {
    a = c[d >> 2] | 0;
    if (a >>> 0 <= h >>> 0 ? (b = c[d + 4 >> 2] | 0, e = a + b | 0, e >>> 0 > h >>> 0) : 0) break;
    d = c[d + 8 >> 2] | 0;
   }
   f = a + (b + -39) | 0;
   a = a + (b + -47 + ((f & 7 | 0) == 0 ? 0 : 0 - f & 7)) | 0;
   f = h + 16 | 0;
   a = a >>> 0 < f >>> 0 ? h : a;
   b = a + 8 | 0;
   d = w + 8 | 0;
   d = (d & 7 | 0) == 0 ? 0 : 0 - d & 7;
   M = p + -40 - d | 0;
   c[8520] = w + d;
   c[8517] = M;
   c[w + (d + 4) >> 2] = M | 1;
   c[w + (p + -36) >> 2] = 40;
   c[8521] = c[8636];
   d = a + 4 | 0;
   c[d >> 2] = 27;
   c[b >> 2] = c[8626];
   c[b + 4 >> 2] = c[8627];
   c[b + 8 >> 2] = c[8628];
   c[b + 12 >> 2] = c[8629];
   c[8626] = w;
   c[8627] = p;
   c[8629] = 0;
   c[8628] = b;
   b = a + 28 | 0;
   c[b >> 2] = 7;
   if ((a + 32 | 0) >>> 0 < e >>> 0) do {
    M = b;
    b = b + 4 | 0;
    c[b >> 2] = 7;
   } while ((M + 8 | 0) >>> 0 < e >>> 0);
   if ((a | 0) != (h | 0)) {
    g = a - h | 0;
    c[d >> 2] = c[d >> 2] & -2;
    c[h + 4 >> 2] = g | 1;
    c[a >> 2] = g;
    b = g >>> 3;
    if (g >>> 0 < 256) {
     a = b << 1;
     e = 34096 + (a << 2) | 0;
     d = c[8514] | 0;
     b = 1 << b;
     if (d & b) {
      b = 34096 + (a + 2 << 2) | 0;
      a = c[b >> 2] | 0;
      if (a >>> 0 < (c[8518] | 0) >>> 0) xa(); else {
       G = b;
       H = a;
      }
     } else {
      c[8514] = d | b;
      G = 34096 + (a + 2 << 2) | 0;
      H = e;
     }
     c[G >> 2] = h;
     c[H + 12 >> 2] = h;
     c[h + 8 >> 2] = H;
     c[h + 12 >> 2] = e;
     break;
    }
    b = g >>> 8;
    if (b) if (g >>> 0 > 16777215) e = 31; else {
     L = (b + 1048320 | 0) >>> 16 & 8;
     M = b << L;
     K = (M + 520192 | 0) >>> 16 & 4;
     M = M << K;
     e = (M + 245760 | 0) >>> 16 & 2;
     e = 14 - (K | L | e) + (M << e >>> 15) | 0;
     e = g >>> (e + 7 | 0) & 1 | e << 1;
    } else e = 0;
    d = 34360 + (e << 2) | 0;
    c[h + 28 >> 2] = e;
    c[h + 20 >> 2] = 0;
    c[f >> 2] = 0;
    b = c[8515] | 0;
    a = 1 << e;
    if (!(b & a)) {
     c[8515] = b | a;
     c[d >> 2] = h;
     c[h + 24 >> 2] = d;
     c[h + 12 >> 2] = h;
     c[h + 8 >> 2] = h;
     break;
    }
    b = c[d >> 2] | 0;
    k : do if ((c[b + 4 >> 2] & -8 | 0) != (g | 0)) {
     e = g << ((e | 0) == 31 ? 0 : 25 - (e >>> 1) | 0);
     while (1) {
      a = b + 16 + (e >>> 31 << 2) | 0;
      d = c[a >> 2] | 0;
      if (!d) break;
      if ((c[d + 4 >> 2] & -8 | 0) == (g | 0)) {
       I = d;
       break k;
      } else {
       e = e << 1;
       b = d;
      }
     }
     if (a >>> 0 < (c[8518] | 0) >>> 0) xa(); else {
      c[a >> 2] = h;
      c[h + 24 >> 2] = b;
      c[h + 12 >> 2] = h;
      c[h + 8 >> 2] = h;
      break g;
     }
    } else I = b; while (0);
    b = I + 8 | 0;
    a = c[b >> 2] | 0;
    M = c[8518] | 0;
    if (a >>> 0 >= M >>> 0 & I >>> 0 >= M >>> 0) {
     c[a + 12 >> 2] = h;
     c[b >> 2] = h;
     c[h + 8 >> 2] = a;
     c[h + 12 >> 2] = I;
     c[h + 24 >> 2] = 0;
     break;
    } else xa();
   }
  } else {
   M = c[8518] | 0;
   if ((M | 0) == 0 | w >>> 0 < M >>> 0) c[8518] = w;
   c[8626] = w;
   c[8627] = p;
   c[8629] = 0;
   c[8523] = c[8632];
   c[8522] = -1;
   b = 0;
   do {
    M = b << 1;
    L = 34096 + (M << 2) | 0;
    c[34096 + (M + 3 << 2) >> 2] = L;
    c[34096 + (M + 2 << 2) >> 2] = L;
    b = b + 1 | 0;
   } while ((b | 0) != 32);
   M = w + 8 | 0;
   M = (M & 7 | 0) == 0 ? 0 : 0 - M & 7;
   L = p + -40 - M | 0;
   c[8520] = w + M;
   c[8517] = L;
   c[w + (M + 4) >> 2] = L | 1;
   c[w + (p + -36) >> 2] = 40;
   c[8521] = c[8636];
  } while (0);
  b = c[8517] | 0;
  if (b >>> 0 > q >>> 0) {
   L = b - q | 0;
   c[8517] = L;
   M = c[8520] | 0;
   c[8520] = M + q;
   c[M + (q + 4) >> 2] = L | 1;
   c[M + 4 >> 2] = q | 3;
   M = M + 8 | 0;
   return M | 0;
  }
 }
 c[(ef() | 0) >> 2] = 12;
 M = 0;
 return M | 0;
}

function Zf(e, f, g, j, l) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0, q = 0.0, r = 0, s = 0, t = 0, u = 0, v = 0.0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0;
 ha = i;
 i = i + 624 | 0;
 ca = ha + 24 | 0;
 ea = ha + 16 | 0;
 da = ha + 588 | 0;
 Y = ha + 576 | 0;
 ba = ha;
 V = ha + 536 | 0;
 ga = ha + 8 | 0;
 fa = ha + 528 | 0;
 M = (e | 0) != 0;
 N = V + 40 | 0;
 U = N;
 V = V + 39 | 0;
 W = ga + 4 | 0;
 X = Y + 12 | 0;
 Y = Y + 11 | 0;
 Z = da;
 $ = X;
 aa = $ - Z | 0;
 O = -2 - Z | 0;
 P = $ + 2 | 0;
 Q = ca + 288 | 0;
 R = da + 9 | 0;
 S = R;
 T = da + 8 | 0;
 m = 0;
 w = f;
 n = 0;
 f = 0;
 a : while (1) {
  do if ((m | 0) > -1) if ((n | 0) > (2147483647 - m | 0)) {
   c[(ef() | 0) >> 2] = 75;
   m = -1;
   break;
  } else {
   m = n + m | 0;
   break;
  } while (0);
  n = a[w >> 0] | 0;
  if (!(n << 24 >> 24)) {
   L = 245;
   break;
  } else o = w;
  b : while (1) {
   switch (n << 24 >> 24) {
   case 37:
    {
     n = o;
     L = 9;
     break b;
    }
   case 0:
    {
     n = o;
     break b;
    }
   default:
    {}
   }
   K = o + 1 | 0;
   n = a[K >> 0] | 0;
   o = K;
  }
  c : do if ((L | 0) == 9) while (1) {
   L = 0;
   if ((a[n + 1 >> 0] | 0) != 37) break c;
   o = o + 1 | 0;
   n = n + 2 | 0;
   if ((a[n >> 0] | 0) == 37) L = 9; else break;
  } while (0);
  y = o - w | 0;
  if (M ? (c[e >> 2] & 32 | 0) == 0 : 0) Af(w, y, e) | 0;
  if ((o | 0) != (w | 0)) {
   w = n;
   n = y;
   continue;
  }
  r = n + 1 | 0;
  o = a[r >> 0] | 0;
  p = (o << 24 >> 24) + -48 | 0;
  if (p >>> 0 < 10) {
   K = (a[n + 2 >> 0] | 0) == 36;
   r = K ? n + 3 | 0 : r;
   o = a[r >> 0] | 0;
   u = K ? p : -1;
   f = K ? 1 : f;
  } else u = -1;
  n = o << 24 >> 24;
  d : do if ((n & -32 | 0) == 32) {
   p = 0;
   while (1) {
    if (!(1 << n + -32 & 75913)) {
     s = p;
     n = r;
     break d;
    }
    p = 1 << (o << 24 >> 24) + -32 | p;
    r = r + 1 | 0;
    o = a[r >> 0] | 0;
    n = o << 24 >> 24;
    if ((n & -32 | 0) != 32) {
     s = p;
     n = r;
     break;
    }
   }
  } else {
   s = 0;
   n = r;
  } while (0);
  do if (o << 24 >> 24 == 42) {
   p = n + 1 | 0;
   o = (a[p >> 0] | 0) + -48 | 0;
   if (o >>> 0 < 10 ? (a[n + 2 >> 0] | 0) == 36 : 0) {
    c[l + (o << 2) >> 2] = 10;
    f = 1;
    n = n + 3 | 0;
    o = c[j + ((a[p >> 0] | 0) + -48 << 3) >> 2] | 0;
   } else {
    if (f) {
     m = -1;
     break a;
    }
    if (!M) {
     x = s;
     n = p;
     f = 0;
     K = 0;
     break;
    }
    f = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    o = c[f >> 2] | 0;
    c[g >> 2] = f + 4;
    f = 0;
    n = p;
   }
   if ((o | 0) < 0) {
    x = s | 8192;
    K = 0 - o | 0;
   } else {
    x = s;
    K = o;
   }
  } else {
   p = (o << 24 >> 24) + -48 | 0;
   if (p >>> 0 < 10) {
    o = 0;
    do {
     o = (o * 10 | 0) + p | 0;
     n = n + 1 | 0;
     p = (a[n >> 0] | 0) + -48 | 0;
    } while (p >>> 0 < 10);
    if ((o | 0) < 0) {
     m = -1;
     break a;
    } else {
     x = s;
     K = o;
    }
   } else {
    x = s;
    K = 0;
   }
  } while (0);
  e : do if ((a[n >> 0] | 0) == 46) {
   p = n + 1 | 0;
   o = a[p >> 0] | 0;
   if (o << 24 >> 24 != 42) {
    r = (o << 24 >> 24) + -48 | 0;
    if (r >>> 0 < 10) {
     n = p;
     o = 0;
    } else {
     n = p;
     r = 0;
     break;
    }
    while (1) {
     o = (o * 10 | 0) + r | 0;
     n = n + 1 | 0;
     r = (a[n >> 0] | 0) + -48 | 0;
     if (r >>> 0 >= 10) {
      r = o;
      break e;
     }
    }
   }
   p = n + 2 | 0;
   o = (a[p >> 0] | 0) + -48 | 0;
   if (o >>> 0 < 10 ? (a[n + 3 >> 0] | 0) == 36 : 0) {
    c[l + (o << 2) >> 2] = 10;
    n = n + 4 | 0;
    r = c[j + ((a[p >> 0] | 0) + -48 << 3) >> 2] | 0;
    break;
   }
   if (f) {
    m = -1;
    break a;
   }
   if (M) {
    n = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    r = c[n >> 2] | 0;
    c[g >> 2] = n + 4;
    n = p;
   } else {
    n = p;
    r = 0;
   }
  } else r = -1; while (0);
  t = 0;
  while (1) {
   o = (a[n >> 0] | 0) + -65 | 0;
   if (o >>> 0 > 57) {
    m = -1;
    break a;
   }
   p = n + 1 | 0;
   o = a[44360 + (t * 58 | 0) + o >> 0] | 0;
   s = o & 255;
   if ((s + -1 | 0) >>> 0 < 8) {
    n = p;
    t = s;
   } else {
    J = p;
    break;
   }
  }
  if (!(o << 24 >> 24)) {
   m = -1;
   break;
  }
  p = (u | 0) > -1;
  do if (o << 24 >> 24 == 19) if (p) {
   m = -1;
   break a;
  } else L = 52; else {
   if (p) {
    c[l + (u << 2) >> 2] = s;
    H = j + (u << 3) | 0;
    I = c[H + 4 >> 2] | 0;
    L = ba;
    c[L >> 2] = c[H >> 2];
    c[L + 4 >> 2] = I;
    L = 52;
    break;
   }
   if (!M) {
    m = 0;
    break a;
   }
   bg(ba, s, g);
  } while (0);
  if ((L | 0) == 52 ? (L = 0, !M) : 0) {
   w = J;
   n = y;
   continue;
  }
  u = a[n >> 0] | 0;
  u = (t | 0) != 0 & (u & 15 | 0) == 3 ? u & -33 : u;
  p = x & -65537;
  I = (x & 8192 | 0) == 0 ? x : p;
  f : do switch (u | 0) {
  case 110:
   switch (t | 0) {
   case 0:
    {
     c[c[ba >> 2] >> 2] = m;
     w = J;
     n = y;
     continue a;
    }
   case 1:
    {
     c[c[ba >> 2] >> 2] = m;
     w = J;
     n = y;
     continue a;
    }
   case 2:
    {
     w = c[ba >> 2] | 0;
     c[w >> 2] = m;
     c[w + 4 >> 2] = ((m | 0) < 0) << 31 >> 31;
     w = J;
     n = y;
     continue a;
    }
   case 3:
    {
     b[c[ba >> 2] >> 1] = m;
     w = J;
     n = y;
     continue a;
    }
   case 4:
    {
     a[c[ba >> 2] >> 0] = m;
     w = J;
     n = y;
     continue a;
    }
   case 6:
    {
     c[c[ba >> 2] >> 2] = m;
     w = J;
     n = y;
     continue a;
    }
   case 7:
    {
     w = c[ba >> 2] | 0;
     c[w >> 2] = m;
     c[w + 4 >> 2] = ((m | 0) < 0) << 31 >> 31;
     w = J;
     n = y;
     continue a;
    }
   default:
    {
     w = J;
     n = y;
     continue a;
    }
   }
  case 112:
   {
    t = I | 8;
    r = r >>> 0 > 8 ? r : 8;
    u = 120;
    L = 64;
    break;
   }
  case 88:
  case 120:
   {
    t = I;
    L = 64;
    break;
   }
  case 111:
   {
    p = ba;
    o = c[p >> 2] | 0;
    p = c[p + 4 >> 2] | 0;
    if ((o | 0) == 0 & (p | 0) == 0) n = N; else {
     n = N;
     do {
      n = n + -1 | 0;
      a[n >> 0] = o & 7 | 48;
      o = sg(o | 0, p | 0, 3) | 0;
      p = C;
     } while (!((o | 0) == 0 & (p | 0) == 0));
    }
    if (!(I & 8)) {
     o = I;
     t = 0;
     s = 44840;
     L = 77;
    } else {
     t = U - n + 1 | 0;
     o = I;
     r = (r | 0) < (t | 0) ? t : r;
     t = 0;
     s = 44840;
     L = 77;
    }
    break;
   }
  case 105:
  case 100:
   {
    o = ba;
    n = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    if ((o | 0) < 0) {
     n = og(0, 0, n | 0, o | 0) | 0;
     o = C;
     p = ba;
     c[p >> 2] = n;
     c[p + 4 >> 2] = o;
     p = 1;
     s = 44840;
     L = 76;
     break f;
    }
    if (!(I & 2048)) {
     s = I & 1;
     p = s;
     s = (s | 0) == 0 ? 44840 : 44842;
     L = 76;
    } else {
     p = 1;
     s = 44841;
     L = 76;
    }
    break;
   }
  case 117:
   {
    o = ba;
    n = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    p = 0;
    s = 44840;
    L = 76;
    break;
   }
  case 99:
   {
    a[V >> 0] = c[ba >> 2];
    w = V;
    o = 1;
    t = 0;
    u = 44840;
    n = N;
    break;
   }
  case 109:
   {
    n = df(c[(ef() | 0) >> 2] | 0) | 0;
    L = 82;
    break;
   }
  case 115:
   {
    n = c[ba >> 2] | 0;
    n = (n | 0) != 0 ? n : 44850;
    L = 82;
    break;
   }
  case 67:
   {
    c[ga >> 2] = c[ba >> 2];
    c[W >> 2] = 0;
    c[ba >> 2] = ga;
    r = -1;
    L = 86;
    break;
   }
  case 83:
   {
    if (!r) {
     dg(e, 32, K, 0, I);
     n = 0;
     L = 98;
    } else L = 86;
    break;
   }
  case 65:
  case 71:
  case 70:
  case 69:
  case 97:
  case 103:
  case 102:
  case 101:
   {
    q = +h[ba >> 3];
    c[ea >> 2] = 0;
    h[k >> 3] = q;
    if ((c[k + 4 >> 2] | 0) >= 0) if (!(I & 2048)) {
     H = I & 1;
     G = H;
     H = (H | 0) == 0 ? 44858 : 44863;
    } else {
     G = 1;
     H = 44860;
    } else {
     q = -q;
     G = 1;
     H = 44857;
    }
    h[k >> 3] = q;
    F = c[k + 4 >> 2] & 2146435072;
    do if (F >>> 0 < 2146435072 | (F | 0) == 2146435072 & 0 < 0) {
     v = +jf(q, ea) * 2.0;
     o = v != 0.0;
     if (o) c[ea >> 2] = (c[ea >> 2] | 0) + -1;
     D = u | 32;
     if ((D | 0) == 97) {
      w = u & 32;
      y = (w | 0) == 0 ? H : H + 9 | 0;
      x = G | 2;
      n = 12 - r | 0;
      do if (!(r >>> 0 > 11 | (n | 0) == 0)) {
       q = 8.0;
       do {
        n = n + -1 | 0;
        q = q * 16.0;
       } while ((n | 0) != 0);
       if ((a[y >> 0] | 0) == 45) {
        q = -(q + (-v - q));
        break;
       } else {
        q = v + q - q;
        break;
       }
      } else q = v; while (0);
      o = c[ea >> 2] | 0;
      n = (o | 0) < 0 ? 0 - o | 0 : o;
      n = cg(n, ((n | 0) < 0) << 31 >> 31, X) | 0;
      if ((n | 0) == (X | 0)) {
       a[Y >> 0] = 48;
       n = Y;
      }
      a[n + -1 >> 0] = (o >> 31 & 2) + 43;
      t = n + -2 | 0;
      a[t >> 0] = u + 15;
      s = (r | 0) < 1;
      p = (I & 8 | 0) == 0;
      o = da;
      while (1) {
       H = ~~q;
       n = o + 1 | 0;
       a[o >> 0] = d[44824 + H >> 0] | w;
       q = (q - +(H | 0)) * 16.0;
       do if ((n - Z | 0) == 1) {
        if (p & (s & q == 0.0)) break;
        a[n >> 0] = 46;
        n = o + 2 | 0;
       } while (0);
       if (!(q != 0.0)) break; else o = n;
      }
      r = (r | 0) != 0 & (O + n | 0) < (r | 0) ? P + r - t | 0 : aa - t + n | 0;
      p = r + x | 0;
      dg(e, 32, K, p, I);
      if (!(c[e >> 2] & 32)) Af(y, x, e) | 0;
      dg(e, 48, K, p, I ^ 65536);
      n = n - Z | 0;
      if (!(c[e >> 2] & 32)) Af(da, n, e) | 0;
      o = $ - t | 0;
      dg(e, 48, r - (n + o) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) Af(t, o, e) | 0;
      dg(e, 32, K, p, I ^ 8192);
      n = (p | 0) < (K | 0) ? K : p;
      break;
     }
     n = (r | 0) < 0 ? 6 : r;
     if (o) {
      o = (c[ea >> 2] | 0) + -28 | 0;
      c[ea >> 2] = o;
      q = v * 268435456.0;
     } else {
      q = v;
      o = c[ea >> 2] | 0;
     }
     F = (o | 0) < 0 ? ca : Q;
     E = F;
     o = F;
     do {
      B = ~~q >>> 0;
      c[o >> 2] = B;
      o = o + 4 | 0;
      q = (q - +(B >>> 0)) * 1.0e9;
     } while (q != 0.0);
     p = o;
     o = c[ea >> 2] | 0;
     if ((o | 0) > 0) {
      s = F;
      while (1) {
       t = (o | 0) > 29 ? 29 : o;
       r = p + -4 | 0;
       do if (r >>> 0 < s >>> 0) r = s; else {
        o = 0;
        do {
         B = qg(c[r >> 2] | 0, 0, t | 0) | 0;
         B = rg(B | 0, C | 0, o | 0, 0) | 0;
         o = C;
         A = Cg(B | 0, o | 0, 1e9, 0) | 0;
         c[r >> 2] = A;
         o = Bg(B | 0, o | 0, 1e9, 0) | 0;
         r = r + -4 | 0;
        } while (r >>> 0 >= s >>> 0);
        if (!o) {
         r = s;
         break;
        }
        r = s + -4 | 0;
        c[r >> 2] = o;
       } while (0);
       while (1) {
        if (p >>> 0 <= r >>> 0) break;
        o = p + -4 | 0;
        if (!(c[o >> 2] | 0)) p = o; else break;
       }
       o = (c[ea >> 2] | 0) - t | 0;
       c[ea >> 2] = o;
       if ((o | 0) > 0) s = r; else break;
      }
     } else r = F;
     if ((o | 0) < 0) {
      y = ((n + 25 | 0) / 9 | 0) + 1 | 0;
      z = (D | 0) == 102;
      w = r;
      while (1) {
       x = 0 - o | 0;
       x = (x | 0) > 9 ? 9 : x;
       do if (w >>> 0 < p >>> 0) {
        o = (1 << x) + -1 | 0;
        s = 1e9 >>> x;
        r = 0;
        t = w;
        do {
         B = c[t >> 2] | 0;
         c[t >> 2] = (B >>> x) + r;
         r = _(B & o, s) | 0;
         t = t + 4 | 0;
        } while (t >>> 0 < p >>> 0);
        o = (c[w >> 2] | 0) == 0 ? w + 4 | 0 : w;
        if (!r) {
         r = o;
         break;
        }
        c[p >> 2] = r;
        r = o;
        p = p + 4 | 0;
       } else r = (c[w >> 2] | 0) == 0 ? w + 4 | 0 : w; while (0);
       o = z ? F : r;
       p = (p - o >> 2 | 0) > (y | 0) ? o + (y << 2) | 0 : p;
       o = (c[ea >> 2] | 0) + x | 0;
       c[ea >> 2] = o;
       if ((o | 0) >= 0) {
        w = r;
        break;
       } else w = r;
      }
     } else w = r;
     do if (w >>> 0 < p >>> 0) {
      o = (E - w >> 2) * 9 | 0;
      s = c[w >> 2] | 0;
      if (s >>> 0 < 10) break; else r = 10;
      do {
       r = r * 10 | 0;
       o = o + 1 | 0;
      } while (s >>> 0 >= r >>> 0);
     } else o = 0; while (0);
     A = (D | 0) == 103;
     B = (n | 0) != 0;
     r = n - ((D | 0) != 102 ? o : 0) + ((B & A) << 31 >> 31) | 0;
     if ((r | 0) < (((p - E >> 2) * 9 | 0) + -9 | 0)) {
      t = r + 9216 | 0;
      z = (t | 0) / 9 | 0;
      r = F + (z + -1023 << 2) | 0;
      t = ((t | 0) % 9 | 0) + 1 | 0;
      if ((t | 0) < 9) {
       s = 10;
       do {
        s = s * 10 | 0;
        t = t + 1 | 0;
       } while ((t | 0) != 9);
      } else s = 10;
      x = c[r >> 2] | 0;
      y = (x >>> 0) % (s >>> 0) | 0;
      if ((y | 0) == 0 ? (F + (z + -1022 << 2) | 0) == (p | 0) : 0) s = w; else L = 163;
      do if ((L | 0) == 163) {
       L = 0;
       v = (((x >>> 0) / (s >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;
       t = (s | 0) / 2 | 0;
       do if (y >>> 0 < t >>> 0) q = .5; else {
        if ((y | 0) == (t | 0) ? (F + (z + -1022 << 2) | 0) == (p | 0) : 0) {
         q = 1.0;
         break;
        }
        q = 1.5;
       } while (0);
       do if (G) {
        if ((a[H >> 0] | 0) != 45) break;
        v = -v;
        q = -q;
       } while (0);
       t = x - y | 0;
       c[r >> 2] = t;
       if (!(v + q != v)) {
        s = w;
        break;
       }
       D = t + s | 0;
       c[r >> 2] = D;
       if (D >>> 0 > 999999999) {
        o = w;
        while (1) {
         s = r + -4 | 0;
         c[r >> 2] = 0;
         if (s >>> 0 < o >>> 0) {
          o = o + -4 | 0;
          c[o >> 2] = 0;
         }
         D = (c[s >> 2] | 0) + 1 | 0;
         c[s >> 2] = D;
         if (D >>> 0 > 999999999) r = s; else {
          w = o;
          r = s;
          break;
         }
        }
       }
       o = (E - w >> 2) * 9 | 0;
       t = c[w >> 2] | 0;
       if (t >>> 0 < 10) {
        s = w;
        break;
       } else s = 10;
       do {
        s = s * 10 | 0;
        o = o + 1 | 0;
       } while (t >>> 0 >= s >>> 0);
       s = w;
      } while (0);
      D = r + 4 | 0;
      w = s;
      p = p >>> 0 > D >>> 0 ? D : p;
     }
     y = 0 - o | 0;
     while (1) {
      if (p >>> 0 <= w >>> 0) {
       z = 0;
       D = p;
       break;
      }
      r = p + -4 | 0;
      if (!(c[r >> 2] | 0)) p = r; else {
       z = 1;
       D = p;
       break;
      }
     }
     do if (A) {
      n = (B & 1 ^ 1) + n | 0;
      if ((n | 0) > (o | 0) & (o | 0) > -5) {
       u = u + -1 | 0;
       n = n + -1 - o | 0;
      } else {
       u = u + -2 | 0;
       n = n + -1 | 0;
      }
      p = I & 8;
      if (p) break;
      do if (z) {
       p = c[D + -4 >> 2] | 0;
       if (!p) {
        r = 9;
        break;
       }
       if (!((p >>> 0) % 10 | 0)) {
        s = 10;
        r = 0;
       } else {
        r = 0;
        break;
       }
       do {
        s = s * 10 | 0;
        r = r + 1 | 0;
       } while (((p >>> 0) % (s >>> 0) | 0 | 0) == 0);
      } else r = 9; while (0);
      p = ((D - E >> 2) * 9 | 0) + -9 | 0;
      if ((u | 32 | 0) == 102) {
       p = p - r | 0;
       p = (p | 0) < 0 ? 0 : p;
       n = (n | 0) < (p | 0) ? n : p;
       p = 0;
       break;
      } else {
       p = p + o - r | 0;
       p = (p | 0) < 0 ? 0 : p;
       n = (n | 0) < (p | 0) ? n : p;
       p = 0;
       break;
      }
     } else p = I & 8; while (0);
     x = n | p;
     s = (x | 0) != 0 & 1;
     t = (u | 32 | 0) == 102;
     if (t) {
      o = (o | 0) > 0 ? o : 0;
      u = 0;
     } else {
      r = (o | 0) < 0 ? y : o;
      r = cg(r, ((r | 0) < 0) << 31 >> 31, X) | 0;
      if (($ - r | 0) < 2) do {
       r = r + -1 | 0;
       a[r >> 0] = 48;
      } while (($ - r | 0) < 2);
      a[r + -1 >> 0] = (o >> 31 & 2) + 43;
      E = r + -2 | 0;
      a[E >> 0] = u;
      o = $ - E | 0;
      u = E;
     }
     y = G + 1 + n + s + o | 0;
     dg(e, 32, K, y, I);
     if (!(c[e >> 2] & 32)) Af(H, G, e) | 0;
     dg(e, 48, K, y, I ^ 65536);
     do if (t) {
      r = w >>> 0 > F >>> 0 ? F : w;
      o = r;
      do {
       p = cg(c[o >> 2] | 0, 0, R) | 0;
       do if ((o | 0) == (r | 0)) {
        if ((p | 0) != (R | 0)) break;
        a[T >> 0] = 48;
        p = T;
       } else {
        if (p >>> 0 <= da >>> 0) break;
        do {
         p = p + -1 | 0;
         a[p >> 0] = 48;
        } while (p >>> 0 > da >>> 0);
       } while (0);
       if (!(c[e >> 2] & 32)) Af(p, S - p | 0, e) | 0;
       o = o + 4 | 0;
      } while (o >>> 0 <= F >>> 0);
      do if (x) {
       if (c[e >> 2] & 32) break;
       Af(44892, 1, e) | 0;
      } while (0);
      if ((n | 0) > 0 & o >>> 0 < D >>> 0) {
       p = o;
       while (1) {
        o = cg(c[p >> 2] | 0, 0, R) | 0;
        if (o >>> 0 > da >>> 0) do {
         o = o + -1 | 0;
         a[o >> 0] = 48;
        } while (o >>> 0 > da >>> 0);
        if (!(c[e >> 2] & 32)) Af(o, (n | 0) > 9 ? 9 : n, e) | 0;
        p = p + 4 | 0;
        o = n + -9 | 0;
        if (!((n | 0) > 9 & p >>> 0 < D >>> 0)) {
         n = o;
         break;
        } else n = o;
       }
      }
      dg(e, 48, n + 9 | 0, 9, 0);
     } else {
      t = z ? D : w + 4 | 0;
      if ((n | 0) > -1) {
       s = (p | 0) == 0;
       r = w;
       do {
        o = cg(c[r >> 2] | 0, 0, R) | 0;
        if ((o | 0) == (R | 0)) {
         a[T >> 0] = 48;
         o = T;
        }
        do if ((r | 0) == (w | 0)) {
         p = o + 1 | 0;
         if (!(c[e >> 2] & 32)) Af(o, 1, e) | 0;
         if (s & (n | 0) < 1) {
          o = p;
          break;
         }
         if (c[e >> 2] & 32) {
          o = p;
          break;
         }
         Af(44892, 1, e) | 0;
         o = p;
        } else {
         if (o >>> 0 <= da >>> 0) break;
         do {
          o = o + -1 | 0;
          a[o >> 0] = 48;
         } while (o >>> 0 > da >>> 0);
        } while (0);
        p = S - o | 0;
        if (!(c[e >> 2] & 32)) Af(o, (n | 0) > (p | 0) ? p : n, e) | 0;
        n = n - p | 0;
        r = r + 4 | 0;
       } while (r >>> 0 < t >>> 0 & (n | 0) > -1);
      }
      dg(e, 48, n + 18 | 0, 18, 0);
      if (c[e >> 2] & 32) break;
      Af(u, $ - u | 0, e) | 0;
     } while (0);
     dg(e, 32, K, y, I ^ 8192);
     n = (y | 0) < (K | 0) ? K : y;
    } else {
     t = (u & 32 | 0) != 0;
     s = q != q | 0.0 != 0.0;
     o = s ? 0 : G;
     r = o + 3 | 0;
     dg(e, 32, K, r, p);
     n = c[e >> 2] | 0;
     if (!(n & 32)) {
      Af(H, o, e) | 0;
      n = c[e >> 2] | 0;
     }
     if (!(n & 32)) Af(s ? (t ? 44884 : 44888) : t ? 44876 : 44880, 3, e) | 0;
     dg(e, 32, K, r, I ^ 8192);
     n = (r | 0) < (K | 0) ? K : r;
    } while (0);
    w = J;
    continue a;
   }
  default:
   {
    p = I;
    o = r;
    t = 0;
    u = 44840;
    n = N;
   }
  } while (0);
  g : do if ((L | 0) == 64) {
   p = ba;
   o = c[p >> 2] | 0;
   p = c[p + 4 >> 2] | 0;
   s = u & 32;
   if (!((o | 0) == 0 & (p | 0) == 0)) {
    n = N;
    do {
     n = n + -1 | 0;
     a[n >> 0] = d[44824 + (o & 15) >> 0] | s;
     o = sg(o | 0, p | 0, 4) | 0;
     p = C;
    } while (!((o | 0) == 0 & (p | 0) == 0));
    L = ba;
    if ((t & 8 | 0) == 0 | (c[L >> 2] | 0) == 0 & (c[L + 4 >> 2] | 0) == 0) {
     o = t;
     t = 0;
     s = 44840;
     L = 77;
    } else {
     o = t;
     t = 2;
     s = 44840 + (u >> 4) | 0;
     L = 77;
    }
   } else {
    n = N;
    o = t;
    t = 0;
    s = 44840;
    L = 77;
   }
  } else if ((L | 0) == 76) {
   n = cg(n, o, N) | 0;
   o = I;
   t = p;
   L = 77;
  } else if ((L | 0) == 82) {
   L = 0;
   I = Tf(n, 0, r) | 0;
   H = (I | 0) == 0;
   w = n;
   o = H ? r : I - n | 0;
   t = 0;
   u = 44840;
   n = H ? n + r | 0 : I;
  } else if ((L | 0) == 86) {
   L = 0;
   o = 0;
   n = 0;
   s = c[ba >> 2] | 0;
   while (1) {
    p = c[s >> 2] | 0;
    if (!p) break;
    n = mf(fa, p) | 0;
    if ((n | 0) < 0 | n >>> 0 > (r - o | 0) >>> 0) break;
    o = n + o | 0;
    if (r >>> 0 > o >>> 0) s = s + 4 | 0; else break;
   }
   if ((n | 0) < 0) {
    m = -1;
    break a;
   }
   dg(e, 32, K, o, I);
   if (!o) {
    n = 0;
    L = 98;
   } else {
    p = 0;
    r = c[ba >> 2] | 0;
    while (1) {
     n = c[r >> 2] | 0;
     if (!n) {
      n = o;
      L = 98;
      break g;
     }
     n = mf(fa, n) | 0;
     p = n + p | 0;
     if ((p | 0) > (o | 0)) {
      n = o;
      L = 98;
      break g;
     }
     if (!(c[e >> 2] & 32)) Af(fa, n, e) | 0;
     if (p >>> 0 >= o >>> 0) {
      n = o;
      L = 98;
      break;
     } else r = r + 4 | 0;
    }
   }
  } while (0);
  if ((L | 0) == 98) {
   L = 0;
   dg(e, 32, K, n, I ^ 8192);
   w = J;
   n = (K | 0) > (n | 0) ? K : n;
   continue;
  }
  if ((L | 0) == 77) {
   L = 0;
   p = (r | 0) > -1 ? o & -65537 : o;
   o = ba;
   o = (c[o >> 2] | 0) != 0 | (c[o + 4 >> 2] | 0) != 0;
   if ((r | 0) != 0 | o) {
    o = (o & 1 ^ 1) + (U - n) | 0;
    w = n;
    o = (r | 0) > (o | 0) ? r : o;
    u = s;
    n = N;
   } else {
    w = N;
    o = 0;
    u = s;
    n = N;
   }
  }
  s = n - w | 0;
  o = (o | 0) < (s | 0) ? s : o;
  r = t + o | 0;
  n = (K | 0) < (r | 0) ? r : K;
  dg(e, 32, n, r, p);
  if (!(c[e >> 2] & 32)) Af(u, t, e) | 0;
  dg(e, 48, n, r, p ^ 65536);
  dg(e, 48, o, s, 0);
  if (!(c[e >> 2] & 32)) Af(w, s, e) | 0;
  dg(e, 32, n, r, p ^ 8192);
  w = J;
 }
 h : do if ((L | 0) == 245) if (!e) if (f) {
  m = 1;
  while (1) {
   f = c[l + (m << 2) >> 2] | 0;
   if (!f) break;
   bg(j + (m << 3) | 0, f, g);
   m = m + 1 | 0;
   if ((m | 0) >= 10) {
    m = 1;
    break h;
   }
  }
  if ((m | 0) < 10) while (1) {
   if (c[l + (m << 2) >> 2] | 0) {
    m = -1;
    break h;
   }
   m = m + 1 | 0;
   if ((m | 0) >= 10) {
    m = 1;
    break;
   }
  } else m = 1;
 } else m = 0; while (0);
 i = ha;
 return m | 0;
}

function Ic(d, e, f, j, k) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0.0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, va = 0, wa = 0, xa = 0, ya = 0, za = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0, Ka = 0, La = 0, Ma = 0, Na = 0, Oa = 0, Pa = 0, Qa = 0, Ra = 0, Sa = 0, Ta = 0, Ua = 0, Va = 0, Wa = 0.0, Xa = 0;
 Va = i;
 i = i + 5728 | 0;
 Ma = Va + 1928 | 0;
 Pa = Va + 1920 | 0;
 Oa = Va + 1912 | 0;
 Na = Va + 1904 | 0;
 Ra = Va + 1896 | 0;
 x = Va + 1888 | 0;
 Qa = Va + 1072 | 0;
 v = Va + 1064 | 0;
 Fa = Va + 40 | 0;
 wa = Va + 5716 | 0;
 xa = Va + 5704 | 0;
 za = Va + 5692 | 0;
 Ba = Va + 5680 | 0;
 Ia = Va + 4912 | 0;
 Ua = Va + 4760 | 0;
 Ja = Va + 3992 | 0;
 Ta = Va + 3976 | 0;
 w = Va + 3936 | 0;
 y = Va + 3924 | 0;
 C = Va + 3912 | 0;
 Sa = Va + 3892 | 0;
 Ga = Va + 3872 | 0;
 La = Va + 3720 | 0;
 Ea = Va + 2952 | 0;
 Ka = Va;
 Ha = Va + 3948 | 0;
 s = Ha + 4 | 0;
 Ca = Ha + 7 | 0;
 c[Ha >> 2] = c[d >> 2];
 c[Ha + 4 >> 2] = c[d + 4 >> 2];
 c[Ha + 8 >> 2] = c[d + 8 >> 2];
 a[Ha + 12 >> 0] = a[d + 12 >> 0] | 0;
 Da = Ha + 16 | 0;
 c[Da >> 2] = f;
 c[Ha + 20 >> 2] = j;
 ya = Ha + 24 | 0;
 c[ya >> 2] = k;
 if (+g[d >> 2] > 2.0) {
  Bf(39587, 158, 1, c[8426] | 0) | 0;
  Ua = 0;
  i = Va;
  return Ua | 0;
 }
 t = e + 84 | 0;
 u = e + 80 | 0;
 q = c[u >> 2] | 0;
 a : do if (((c[t >> 2] | 0) - q | 0) == 120) {
  d = c[e + 32 >> 2] | 0;
  r = c[e + 36 >> 2] | 0;
  b : do if ((d | 0) != (r | 0)) {
   l = 0;
   m = 0;
   do {
    o = a[d >> 0] | 0;
    p = (o & 1) == 0;
    if (p) n = d + 1 | 0; else n = c[d + 8 >> 2] | 0;
    if ((a[n >> 0] | 0) == -32) break b;
    if (p) n = d + 1 | 0; else n = c[d + 8 >> 2] | 0;
    if ((a[n >> 0] | 0) == -18) {
     if (p) n = (o & 255) >>> 1; else n = c[d + 4 >> 2] | 0;
     if (n >>> 0 > 14) {
      if (p) l = d + 1 | 0; else l = c[d + 8 >> 2] | 0;
      l = a[l + 14 >> 0] | 0;
      m = 1;
     }
    }
    d = d + 12 | 0;
   } while ((d | 0) != (r | 0));
   if (m) {
    if (!(l << 24 >> 24)) break a;
   } else va = 24;
  } else va = 24; while (0);
  if (((va | 0) == 24 ? !((c[q >> 2] | 0) != 82 ? 1 : (c[q + 40 >> 2] | 0) != 71) : 0) ? (c[q + 80 >> 2] | 0) == 66 : 0) break;
  switch (c[e + 12 >> 2] | 0) {
  case 1:
   {
    if (((((((c[e + 16 >> 2] | 0) == 1 ? (c[q + 4 >> 2] | 0) == 1 : 0) ? (c[q + 8 >> 2] | 0) == 1 : 0) ? (c[q + 44 >> 2] | 0) == 1 : 0) ? (c[q + 48 >> 2] | 0) == 1 : 0) ? (c[q + 84 >> 2] | 0) == 1 : 0) ? (c[q + 88 >> 2] | 0) == 1 : 0) t = 0; else va = 42;
    break;
   }
  case 2:
   {
    if (((((((c[e + 16 >> 2] | 0) == 2 ? (c[q + 4 >> 2] | 0) == 2 : 0) ? (c[q + 8 >> 2] | 0) == 2 : 0) ? (c[q + 44 >> 2] | 0) == 1 : 0) ? (c[q + 48 >> 2] | 0) == 1 : 0) ? (c[q + 84 >> 2] | 0) == 1 : 0) ? (c[q + 88 >> 2] | 0) == 1 : 0) t = 1; else va = 42;
    break;
   }
  default:
   va = 42;
  }
  if ((va | 0) == 42) {
   m = c[8426] | 0;
   Bf(39792, 29, 1, m) | 0;
   d = c[u >> 2] | 0;
   if ((c[t >> 2] | 0) != (d | 0)) {
    l = 0;
    do {
     Ua = c[d + (l * 40 | 0) + 8 >> 2] | 0;
     c[v >> 2] = c[d + (l * 40 | 0) + 4 >> 2];
     c[v + 4 >> 2] = Ua;
     qf(m, 39822, v) | 0;
     l = l + 1 | 0;
     d = c[u >> 2] | 0;
    } while (l >>> 0 < (((c[t >> 2] | 0) - d | 0) / 40 | 0) >>> 0);
   }
   rf(10, m) | 0;
   Ua = 0;
   i = Va;
   return Ua | 0;
  }
  Hd(Ua, e);
  c[Ta >> 2] = 0;
  c[Ta + 4 >> 2] = 0;
  c[Ta + 8 >> 2] = 0;
  a[Ta + 1 >> 0] = 0;
  a[Ta >> 0] = 0;
  r = b[s >> 1] | 0;
  ua = c[s >> 2] | 0;
  c[Fa >> 2] = 6;
  c[Fa + 4 >> 2] = Ta;
  u = ua >>> 16 & 255;
  c[Ma >> 2] = c[Fa >> 2];
  c[Ma + 4 >> 2] = c[Fa + 4 >> 2];
  if (!(Fc(Ua, (ua & 255) << 24 >> 24 != 0, Ma) | 0)) Aa(39886, 39888, 119, 39912);
  e = j + 32 | 0;
  h[e >> 3] = -1.0;
  l = a[Ta >> 0] | 0;
  s = Ta + 4 | 0;
  c[Qa >> 2] = (l & 1) == 0 ? (l & 255) >>> 1 : c[s >> 2] | 0;
  Ef(Ma, 1024, 39831, Qa) | 0;
  a[Ma + 1023 >> 0] = 0;
  hg(w, Ma, Xf(Ma) | 0);
  l = k + 12 | 0;
  d = c[l >> 2] | 0;
  if (d) {
   ua = a[w >> 0] | 0;
   ta = (ua & 1) == 0;
   lg(d, ta ? w + 1 | 0 : c[w + 8 >> 2] | 0, ta ? (ua & 255) >>> 1 : c[w + 4 >> 2] | 0) | 0;
  }
  m = k + 16 | 0;
  d = c[m >> 2] | 0;
  if (d) sf((a[w >> 0] & 1) == 0 ? w + 1 | 0 : c[w + 8 >> 2] | 0, d) | 0;
  ig(w);
  if (f) {
   q = Ua + 80 | 0;
   p = c[q >> 2] | 0;
   o = c[Ua + 56 >> 2] | 0;
   m = c[o + ((c[p + 12 >> 2] | 0) * 24 | 0) >> 2] | 0;
   tg(Ja | 0, m | 0, 256) | 0;
   d = c[p + 32 >> 2] | 0;
   n = c[p + 28 >> 2] | 0;
   if ((d | 0) != (n | 0)) {
    d = d - n >> 1;
    l = 0;
    do {
     ua = n + (l << 1) | 0;
     b[ua >> 1] = _(b[ua >> 1] | 0, c[m + (((l | 0) % 64 | 0) << 2) >> 2] | 0) | 0;
     l = l + 1 | 0;
    } while (l >>> 0 < d >>> 0);
   }
   m = c[o + ((c[p + 52 >> 2] | 0) * 24 | 0) >> 2] | 0;
   tg(Ja + 256 | 0, m | 0, 256) | 0;
   d = c[p + 72 >> 2] | 0;
   n = c[p + 68 >> 2] | 0;
   if ((d | 0) != (n | 0)) {
    d = d - n >> 1;
    l = 0;
    do {
     ua = n + (l << 1) | 0;
     b[ua >> 1] = _(b[ua >> 1] | 0, c[m + (((l | 0) % 64 | 0) << 2) >> 2] | 0) | 0;
     l = l + 1 | 0;
    } while (l >>> 0 < d >>> 0);
   }
   n = c[o + ((c[p + 92 >> 2] | 0) * 24 | 0) >> 2] | 0;
   tg(Ja + 512 | 0, n | 0, 256) | 0;
   d = c[p + 112 >> 2] | 0;
   m = c[p + 108 >> 2] | 0;
   if ((d | 0) != (m | 0)) {
    d = d - m >> 1;
    l = 0;
    do {
     ua = m + (l << 1) | 0;
     b[ua >> 1] = _(b[ua >> 1] | 0, c[n + (((l | 0) % 64 | 0) << 2) >> 2] | 0) | 0;
     l = l + 1 | 0;
    } while (l >>> 0 < d >>> 0);
   }
   d = 0;
   do {
    c[Ia + (d << 2) >> 2] = 1;
    d = d + 1 | 0;
   } while ((d | 0) != 64);
   d = 0;
   do {
    c[Ia + 256 + (d << 2) >> 2] = 1;
    d = d + 1 | 0;
   } while ((d | 0) != 64);
   d = 0;
   do {
    c[Ia + 512 + (d << 2) >> 2] = 1;
    d = d + 1 | 0;
   } while ((d | 0) != 64);
   ac(Ia, Ua);
   ua = Ua + 4 | 0;
   Vb(Sa, c[Ua >> 2] | 0, c[ua >> 2] | 0);
   Xb(Sa, Ua);
   lb[c[(c[f >> 2] | 0) + 8 >> 2] & 3](f, Sa);
   Id(Ha, Ta);
   if (t) {
    d = 1;
    l = 1;
   } else {
    c : do if (!(u << 24 >> 24)) if ((r & 65535) >= 256) {
     n = c[q >> 2] | 0;
     d = c[n + 72 >> 2] | 0;
     m = c[n + 68 >> 2] | 0;
     if ((d | 0) != (m | 0)) {
      d = d - m >> 1;
      l = 0;
      do {
       if (b[m + (l << 1) >> 1] | 0) {
        l = 1;
        break c;
       }
       l = l + 1 | 0;
      } while (l >>> 0 < d >>> 0);
     }
     d = c[n + 112 >> 2] | 0;
     m = c[n + 108 >> 2] | 0;
     if ((d | 0) != (m | 0)) {
      d = d - m >> 1;
      l = 0;
      while (1) {
       if (b[m + (l << 1) >> 1] | 0) {
        l = 1;
        break c;
       }
       l = l + 1 | 0;
       if (l >>> 0 >= d >>> 0) {
        l = 0;
        break;
       }
      }
     } else l = 0;
    } else l = 0; else l = 1; while (0);
    d = u << 24 >> 24 != 0;
   }
   d = d & 1;
   d : do if ((d | 0) <= (l | 0)) {
    v = Ga + 8 | 0;
    w = Ma + 4 | 0;
    x = Ma + 8 | 0;
    y = Ma + 12 | 0;
    z = Ma + 16 | 0;
    A = Ma + 20 | 0;
    B = Ma + 8 | 0;
    C = Ma + 16 | 0;
    j = Ma + 24 | 0;
    f = Ma + 44 | 0;
    E = Ma + 32 | 0;
    F = Ma + 36 | 0;
    G = Ma + 40 | 0;
    H = Fa + 776 | 0;
    I = Fa + 788 | 0;
    J = Fa + 800 | 0;
    K = Fa + 768 | 0;
    u = Qa + 768 | 0;
    L = Fa + 780 | 0;
    M = Qa + 776 | 0;
    N = Qa + 780 | 0;
    O = Qa + 788 | 0;
    P = Fa + 788 | 0;
    Q = Fa + 792 | 0;
    R = Qa + 800 | 0;
    S = Ka + 12 | 0;
    T = Qa + 788 | 0;
    U = Qa + 792 | 0;
    V = Ka + 24 | 0;
    W = Fa + 1023 | 0;
    X = Fa + 1023 | 0;
    Y = xa + 8 | 0;
    Z = xa + 1 | 0;
    $ = xa + 4 | 0;
    aa = Fa + 1023 | 0;
    ba = za + 8 | 0;
    ca = za + 1 | 0;
    da = za + 4 | 0;
    ea = Fa + 1023 | 0;
    fa = Ba + 8 | 0;
    ga = Ba + 1 | 0;
    ha = Ba + 4 | 0;
    ia = Ma + 32 | 0;
    ja = Ea + 256 | 0;
    ka = Ea + 512 | 0;
    la = La + 84 | 0;
    ma = La + 80 | 0;
    na = Ka + 12 | 0;
    oa = Ga + 8 | 0;
    pa = Ga + 12 | 0;
    qa = Ka + 16 | 0;
    ra = wa + 8 | 0;
    sa = wa + 1 | 0;
    ta = wa + 4 | 0;
    s = k;
    e : while (1) {
     m = s;
     Vb(Ga, c[Ua >> 2] | 0, c[ua >> 2] | 0);
     Xb(Ga, Ua);
     Hd(La, Ua);
     t = (d | 0) != 0;
     if (t) {
      n = c[v >> 2] | 0;
      do if ((c[n + 316 >> 2] | 0) <= 1) {
       if ((c[n + 320 >> 2] | 0) > 1) break;
       c[Ma >> 2] = 2;
       c[w >> 2] = 2;
       c[x >> 2] = 2;
       c[y >> 2] = 2;
       c[z >> 2] = 16843009;
       a[A >> 0] = a[Ca >> 0] | 0;
       Yb(Ga, Ma);
      } while (0);
      $b(Ga, La);
     }
     tg(Ea | 0, Ja | 0, 768) | 0;
     c[Ka >> 2] = 0;
     c[Ka + 4 >> 2] = 0;
     c[Ka + 8 >> 2] = 0;
     c[Ka + 12 >> 2] = 0;
     c[Ka + 16 >> 2] = 0;
     c[Ka + 20 >> 2] = 0;
     a[Ma >> 0] = t & 1;
     h[B >> 3] = -1.0;
     h[C >> 3] = -1.0;
     c[j >> 2] = 0;
     c[j + 4 >> 2] = 0;
     c[j + 8 >> 2] = 0;
     c[j + 12 >> 2] = 0;
     c[j + 16 >> 2] = 0;
     c[f >> 2] = m;
     D = 0.0;
     m = 0;
     do {
      D = D + 1.0 / (+(c[27612 + (m << 2) >> 2] | 0) * .5 + 1.0) * 3.0;
      m = m + 1 | 0;
     } while ((m | 0) != 64);
     h[j >> 3] = D;
     Qd(Qa, Ha, La, Ea);
     do {
      if (!(Rd(Ma, Ia) | 0)) {
       va = 102;
       break;
      }
      Qd(Fa, Ha, La, Ia);
      n = c[F >> 2] | 0;
      do if ((n | 0) == (c[G >> 2] | 0)) {
       m = c[E >> 2] | 0;
       o = ((n - m | 0) / 816 | 0) + 1 | 0;
       if (o >>> 0 > 5263440) break e;
       p = m;
       m = (n - p | 0) / 816 | 0;
       if (m >>> 0 < 2631720) {
        m = m << 1;
        m = m >>> 0 < o >>> 0 ? o : m;
        n = ((c[F >> 2] | 0) - p | 0) / 816 | 0;
        if (!m) {
         p = 0;
         q = 0;
        } else va = 110;
       } else {
        m = 5263440;
        n = ((c[F >> 2] | 0) - p | 0) / 816 | 0;
        va = 110;
       }
       if ((va | 0) == 110) {
        p = m;
        q = ye(m * 816 | 0) | 0;
       }
       o = q + (n * 816 | 0) | 0;
       m = o;
       r = q + (p * 816 | 0) | 0;
       tg(o | 0, Fa | 0, 769) | 0;
       gg(q + (n * 816 | 0) + 776 | 0, H);
       ed(q + (n * 816 | 0) + 788 | 0, I);
       p = q + (n * 816 | 0) + 800 | 0;
       c[p >> 2] = c[J >> 2];
       c[p + 4 >> 2] = c[J + 4 >> 2];
       c[p + 8 >> 2] = c[J + 8 >> 2];
       c[p + 12 >> 2] = c[J + 12 >> 2];
       q = q + ((n + 1 | 0) * 816 | 0) | 0;
       p = c[E >> 2] | 0;
       n = c[F >> 2] | 0;
       if ((n | 0) == (p | 0)) {
        n = p;
        e = n;
       } else {
        do {
         k = n;
         n = n + -816 | 0;
         tg(o + -816 | 0, n | 0, 769) | 0;
         va = o + -40 | 0;
         s = k + -40 | 0;
         c[va >> 2] = c[s >> 2];
         c[va + 4 >> 2] = c[s + 4 >> 2];
         c[va + 8 >> 2] = c[s + 8 >> 2];
         c[s >> 2] = 0;
         c[s + 4 >> 2] = 0;
         c[s + 8 >> 2] = 0;
         s = o + -28 | 0;
         va = k + -28 | 0;
         c[s >> 2] = 0;
         e = o + -24 | 0;
         c[e >> 2] = 0;
         c[o + -20 >> 2] = 0;
         c[s >> 2] = c[va >> 2];
         s = k + -24 | 0;
         c[e >> 2] = c[s >> 2];
         e = k + -20 | 0;
         c[o + -20 >> 2] = c[e >> 2];
         c[e >> 2] = 0;
         c[s >> 2] = 0;
         c[va >> 2] = 0;
         va = o + -16 | 0;
         k = k + -16 | 0;
         c[va >> 2] = c[k >> 2];
         c[va + 4 >> 2] = c[k + 4 >> 2];
         c[va + 8 >> 2] = c[k + 8 >> 2];
         c[va + 12 >> 2] = c[k + 12 >> 2];
         o = m + -816 | 0;
         m = o;
        } while ((n | 0) != (p | 0));
        e = c[E >> 2] | 0;
        n = c[F >> 2] | 0;
       }
       c[E >> 2] = m;
       c[F >> 2] = q;
       c[G >> 2] = r;
       r = e;
       m = n;
       if ((m | 0) != (r | 0)) do {
        n = c[m + -28 >> 2] | 0;
        o = n;
        if (n) {
         p = m + -24 | 0;
         q = c[p >> 2] | 0;
         if ((q | 0) != (n | 0)) c[p >> 2] = q + (~((q + -4 - o | 0) >>> 2) << 2);
         Ae(n);
        }
        ig(m + -40 | 0);
        m = m + -816 | 0;
       } while ((m | 0) != (r | 0));
       if (!e) {
        m = 0;
        D = 0.0;
        break;
       }
       Ae(e);
       m = 0;
       D = 0.0;
      } else {
       tg(n | 0, Fa | 0, 769) | 0;
       gg(n + 776 | 0, H);
       ed(n + 788 | 0, I);
       m = n + 800 | 0;
       c[m >> 2] = c[J >> 2];
       c[m + 4 >> 2] = c[J + 4 >> 2];
       c[m + 8 >> 2] = c[J + 8 >> 2];
       c[m + 12 >> 2] = c[J + 12 >> 2];
       c[F >> 2] = (c[F >> 2] | 0) + 816;
       m = 0;
       D = 0.0;
      } while (0);
      do {
       D = D + 1.0 / (+(c[27612 + (m << 2) >> 2] | 0) * .5 + 1.0) * ((+(c[Fa + (m << 2) >> 2] | 0) + -1.0) * .5);
       m = m + 1 | 0;
      } while ((m | 0) != 64);
      m = 0;
      do {
       D = D + 1.0 / (+(c[27612 + (m << 2) >> 2] | 0) * .5 + 1.0) * ((+(c[Fa + 256 + (m << 2) >> 2] | 0) + -1.0) * .5);
       m = m + 1 | 0;
      } while ((m | 0) != 64);
      m = 0;
      do {
       D = D + 1.0 / (+(c[27612 + (m << 2) >> 2] | 0) * .5 + 1.0) * ((+(c[Fa + 512 + (m << 2) >> 2] | 0) + -1.0) * .5);
       m = m + 1 | 0;
      } while ((m | 0) != 64);
      if (!(a[K >> 0] | 0)) {
       Wa = +h[C >> 3];
       h[C >> 3] = Wa == -1.0 | D < Wa ? D : Wa;
       if (!(a[u >> 0] | 0)) va = 129; else va = 132;
      } else {
       Wa = +h[B >> 3];
       h[B >> 3] = Wa < D ? D : Wa;
       if (!(a[u >> 0] | 0)) va = 130; else va = 129;
      }
      if ((va | 0) == 129) {
       k = a[H >> 0] | 0;
       va = a[M >> 0] | 0;
       if (((k & 1) == 0 ? (k & 255) >>> 1 : c[L >> 2] | 0) >>> 0 < ((va & 1) == 0 ? (va & 255) >>> 1 : c[N >> 2] | 0) >>> 0) va = 130; else va = 132;
      }
      do if ((va | 0) == 130) {
       va = 0;
       tg(Qa | 0, Fa | 0, 769) | 0;
       jg(M, H) | 0;
       te(O, c[P >> 2] | 0, c[Q >> 2] | 0);
       c[R >> 2] = c[J >> 2];
       c[R + 4 >> 2] = c[J + 4 >> 2];
       c[R + 8 >> 2] = c[J + 8 >> 2];
       c[R + 12 >> 2] = c[J + 12 >> 2];
       if (!(a[K >> 0] | 0)) {
        va = 132;
        break;
       }
       k = c[Da >> 2] | 0;
       if (nb[c[(c[k >> 2] | 0) + 20 >> 2] & 1](k, .949999988079071) | 0) va = 132; else m = 2;
      } while (0);
      if ((va | 0) == 132) {
       va = 0;
       m = 0;
      }
      n = c[P >> 2] | 0;
      o = n;
      if (n) {
       p = c[Q >> 2] | 0;
       if ((p | 0) != (n | 0)) c[Q >> 2] = p + (~((p + -4 - o | 0) >>> 2) << 2);
       Ae(n);
      }
      ig(H);
     } while ((m | 0) == 0);
     if ((va | 0) == 102) va = 0;
     tg(Ea | 0, Qa | 0, 768) | 0;
     jg(Ka, M) | 0;
     te(S, c[T >> 2] | 0, c[U >> 2] | 0);
     c[V >> 2] = c[R >> 2];
     c[V + 4 >> 2] = c[R + 4 >> 2];
     c[V + 8 >> 2] = c[R + 8 >> 2];
     c[V + 12 >> 2] = c[R + 12 >> 2];
     c[Ra >> 2] = t ? 39976 : 39983;
     Ef(Fa, 1024, 39941, Ra) | 0;
     a[W >> 0] = 0;
     s = c[ya >> 2] | 0;
     hg(wa, Fa, Xf(Fa) | 0);
     e = s + 12 | 0;
     m = c[e >> 2] | 0;
     if (m) {
      k = a[wa >> 0] | 0;
      r = (k & 1) == 0;
      lg(m, r ? sa : c[ra >> 2] | 0, r ? (k & 255) >>> 1 : c[ta >> 2] | 0) | 0;
     }
     r = s + 16 | 0;
     m = c[r >> 2] | 0;
     if (m) sf((a[wa >> 0] & 1) == 0 ? sa : c[ra >> 2] | 0, m) | 0;
     ig(wa);
     q = 0;
     do {
      o = q << 3;
      p = 0;
      do {
       n = 0;
       do {
        c[Na >> 2] = c[Ea + (p << 8) + (n + o << 2) >> 2];
        Ef(Fa, 1024, 39990, Na) | 0;
        a[X >> 0] = 0;
        hg(xa, Fa, Xf(Fa) | 0);
        m = c[e >> 2] | 0;
        if (m) {
         k = a[xa >> 0] | 0;
         Xa = (k & 1) == 0;
         lg(m, Xa ? Z : c[Y >> 2] | 0, Xa ? (k & 255) >>> 1 : c[$ >> 2] | 0) | 0;
        }
        m = c[r >> 2] | 0;
        if (m) sf((a[xa >> 0] & 1) == 0 ? Z : c[Y >> 2] | 0, m) | 0;
        ig(xa);
        n = n + 1 | 0;
       } while ((n | 0) < 8);
       Ef(Fa, 1024, 39995, Oa) | 0;
       a[aa >> 0] = 0;
       hg(za, Fa, Xf(Fa) | 0);
       m = c[e >> 2] | 0;
       if (m) {
        Xa = a[za >> 0] | 0;
        k = (Xa & 1) == 0;
        lg(m, k ? ca : c[ba >> 2] | 0, k ? (Xa & 255) >>> 1 : c[da >> 2] | 0) | 0;
       }
       m = c[r >> 2] | 0;
       if (m) sf((a[za >> 0] & 1) == 0 ? ca : c[ba >> 2] | 0, m) | 0;
       ig(za);
       p = p + 1 | 0;
      } while ((p | 0) < 3);
      Ef(Fa, 1024, 39829, Pa) | 0;
      a[ea >> 0] = 0;
      hg(Ba, Fa, Xf(Fa) | 0);
      m = c[e >> 2] | 0;
      if (m) {
       Xa = a[Ba >> 0] | 0;
       k = (Xa & 1) == 0;
       lg(m, k ? ga : c[fa >> 2] | 0, k ? (Xa & 255) >>> 1 : c[ha >> 2] | 0) | 0;
      }
      m = c[r >> 2] | 0;
      if (m) sf((a[Ba >> 0] & 1) == 0 ? ga : c[fa >> 2] | 0, m) | 0;
      ig(Ba);
      q = q + 1 | 0;
     } while ((q | 0) < 8);
     e = (a[u >> 0] | 0) == 0;
     m = c[T >> 2] | 0;
     n = m;
     if (m) {
      o = c[U >> 2] | 0;
      if ((o | 0) != (m | 0)) c[U >> 2] = o + (~((o + -4 - n | 0) >>> 2) << 2);
      Ae(m);
     }
     ig(M);
     m = c[ia >> 2] | 0;
     if (m) {
      n = c[F >> 2] | 0;
      if ((n | 0) != (m | 0)) {
       do {
        c[F >> 2] = n + -816;
        o = c[n + -28 >> 2] | 0;
        p = o;
        if (o) {
         q = n + -24 | 0;
         r = c[q >> 2] | 0;
         if ((r | 0) != (o | 0)) c[q >> 2] = r + (~((r + -4 - p | 0) >>> 2) << 2);
         Ae(o);
        }
        ig(n + -40 | 0);
        n = c[F >> 2] | 0;
       } while ((n | 0) != (m | 0));
       m = c[ia >> 2] | 0;
      }
      Ae(m);
     }
     if (e) {
      m = 0;
      do {
       c[Ea + (m << 2) >> 2] = 1;
       m = m + 1 | 0;
      } while ((m | 0) != 64);
      m = 0;
      do {
       c[Ea + 256 + (m << 2) >> 2] = 1;
       m = m + 1 | 0;
      } while ((m | 0) != 64);
      m = 0;
      do {
       c[Ea + 512 + (m << 2) >> 2] = 1;
       m = m + 1 | 0;
      } while ((m | 0) != 64);
     }
     Ub(c[v >> 2] | 0, Ea);
     Ub((c[v >> 2] | 0) + 308 | 0, ja);
     Ub((c[v >> 2] | 0) + 616 | 0, ka);
     if (t) {
      Jd(Ha, La, Ga, 1, ((c[la >> 2] | 0) - (c[ma >> 2] | 0) | 0) == 40 ? 1.0 : .9700000286102295, 0);
      Jd(Ha, La, Ga, 6, 1.0, 1);
     } else Jd(Ha, La, Ga, 7, 1.0, 0);
     m = c[na >> 2] | 0;
     n = m;
     if (m) {
      o = c[qa >> 2] | 0;
      if ((o | 0) != (m | 0)) c[qa >> 2] = o + (~((o + -4 - n | 0) >>> 2) << 2);
      Ae(m);
     }
     ig(Ka);
     Kc(La);
     m = c[oa >> 2] | 0;
     if (m) {
      n = c[pa >> 2] | 0;
      if ((n | 0) != (m | 0)) {
       do {
        c[pa >> 2] = n + -308;
        o = c[n + -268 >> 2] | 0;
        p = o;
        if (o) {
         q = n + -264 | 0;
         r = c[q >> 2] | 0;
         if ((r | 0) != (o | 0)) c[q >> 2] = r + (~((r + -2 - p | 0) >>> 1) << 1);
         Ae(o);
        }
        p = c[n + -280 >> 2] | 0;
        q = p;
        if (p) {
         n = n + -276 | 0;
         o = c[n >> 2] | 0;
         if ((o | 0) != (p | 0)) c[n >> 2] = o + (~((o + -2 - q | 0) >>> 1) << 1);
         Ae(p);
        }
        n = c[pa >> 2] | 0;
       } while ((n | 0) != (m | 0));
       m = c[oa >> 2] | 0;
      }
      Ae(m);
     }
     if ((d | 0) >= (l | 0)) break d; else d = d + 1 | 0;
    }
    we(E);
   } while (0);
   r = Sa + 8 | 0;
   d = c[r >> 2] | 0;
   if (d) {
    q = Sa + 12 | 0;
    l = c[q >> 2] | 0;
    if ((l | 0) != (d | 0)) {
     do {
      c[q >> 2] = l + -308;
      m = c[l + -268 >> 2] | 0;
      n = m;
      if (m) {
       o = l + -264 | 0;
       p = c[o >> 2] | 0;
       if ((p | 0) != (m | 0)) c[o >> 2] = p + (~((p + -2 - n | 0) >>> 1) << 1);
       Ae(m);
      }
      n = c[l + -280 >> 2] | 0;
      o = n;
      if (n) {
       l = l + -276 | 0;
       m = c[l >> 2] | 0;
       if ((m | 0) != (n | 0)) c[l >> 2] = m + (~((m + -2 - o | 0) >>> 1) << 1);
       Ae(n);
      }
      l = c[q >> 2] | 0;
     } while ((l | 0) != (d | 0));
     d = c[r >> 2] | 0;
    }
    Ae(d);
   }
  } else {
   Ef(Ma, 1024, 39850, x) | 0;
   a[Ma + 1023 >> 0] = 0;
   hg(y, Ma, Xf(Ma) | 0);
   d = c[l >> 2] | 0;
   if (d) {
    Xa = a[y >> 0] | 0;
    Sa = (Xa & 1) == 0;
    lg(d, Sa ? y + 1 | 0 : c[y + 8 >> 2] | 0, Sa ? (Xa & 255) >>> 1 : c[y + 4 >> 2] | 0) | 0;
   }
   d = c[m >> 2] | 0;
   if (d) sf((a[y >> 0] & 1) == 0 ? y + 1 | 0 : c[y + 8 >> 2] | 0, d) | 0;
   ig(y);
   jg(j, Ta) | 0;
   d = _(c[Ua + 4 >> 2] | 0, c[Ua >> 2] | 0) | 0;
   c[C >> 2] = 0;
   r = C + 4 | 0;
   c[r >> 2] = 0;
   c[C + 8 >> 2] = 0;
   do if (d) if (d >>> 0 > 1073741823) we(C); else {
    A = d << 2;
    z = ye(A) | 0;
    c[C >> 2] = z;
    B = z + (d << 2) | 0;
    c[C + 8 >> 2] = B;
    pg(z | 0, 0, A | 0) | 0;
    A = z + (d << 2) | 0;
    c[r >> 2] = A;
    break;
   } else {
    B = 0;
    A = 0;
    z = 0;
   } while (0);
   q = j + 12 | 0;
   l = c[q >> 2] | 0;
   m = l;
   p = j + 16 | 0;
   if (!l) {
    n = j + 20 | 0;
    o = C + 8 | 0;
    m = z;
    l = A;
    d = B;
   } else {
    d = c[p >> 2] | 0;
    if ((d | 0) != (l | 0)) c[p >> 2] = d + (~((d + -4 - m | 0) >>> 2) << 2);
    Ae(l);
    n = j + 20 | 0;
    c[n >> 2] = 0;
    c[p >> 2] = 0;
    c[q >> 2] = 0;
    d = C + 8 | 0;
    o = d;
    m = c[C >> 2] | 0;
    l = c[r >> 2] | 0;
    d = c[d >> 2] | 0;
   }
   c[q >> 2] = m;
   c[p >> 2] = l;
   c[n >> 2] = d;
   c[o >> 2] = 0;
   c[r >> 2] = 0;
   c[C >> 2] = 0;
   h[j + 24 >> 3] = 0.0;
   Xa = a[Ta >> 0] | 0;
   h[e >> 3] = +(((Xa & 1) == 0 ? (Xa & 255) >>> 1 : c[s >> 2] | 0) >>> 0);
  }
  ig(Ta);
  Kc(Ua);
  Xa = 1;
  i = Va;
  return Xa | 0;
 } while (0);
 Bf(39746, 45, 1, c[8426] | 0) | 0;
 Xa = 0;
 i = Va;
 return Xa | 0;
}

function Rc(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0.0, t = 0, u = 0.0, v = 0, w = 0.0, x = 0.0, y = 0.0, z = 0, A = 0.0, B = 0.0, C = 0.0, D = 0, E = 0.0, F = 0.0, G = 0.0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0.0;
 g = i;
 i = i + 1104 | 0;
 d = g + 1088 | 0;
 f = g + 64 | 0;
 b = g;
 e = 0;
 do {
  r = e << 3;
  z = r | 6;
  B = +h[a + (z << 3) >> 3];
  v = r | 2;
  u = +h[a + (v << 3) >> 3];
  s = u - B;
  u = B + u;
  p = f + (v << 4) | 0;
  j = f + (z << 4) | 0;
  m = r | 4;
  l = f + (m << 4) | 0;
  B = +h[a + (m << 3) >> 3];
  x = +h[a + (r << 3) >> 3];
  G = x - B;
  x = B + x;
  H = r | 5;
  B = +h[a + (H << 3) >> 3];
  q = r | 1;
  y = +h[a + (q << 3) >> 3];
  A = y - B;
  y = B + y;
  k = f + (q << 4) | 0;
  D = r | 7;
  B = +h[a + (D << 3) >> 3];
  t = r | 3;
  w = +h[a + (t << 3) >> 3];
  E = w - B;
  w = B + w;
  o = f + (t << 4) | 0;
  B = (A - E) * .7071067811865476;
  C = G - B;
  n = f + (H << 4) | 0;
  h[n >> 3] = C;
  F = (A + E) * .7071067811865476;
  h[f + (H << 4) + 8 >> 3] = s - F;
  B = G + B;
  h[l >> 3] = B;
  h[f + (m << 4) + 8 >> 3] = s + F;
  A = (-E - A) * .7071067811865476;
  m = f + (D << 4) | 0;
  h[f + (D << 4) + 8 >> 3] = -s - A;
  h[m >> 3] = C;
  h[j >> 3] = B;
  h[f + (z << 4) + 8 >> 3] = A - s;
  s = x - u;
  x = u + x;
  u = y - w;
  w = y + w;
  h[f + (r << 4) >> 3] = x + w;
  h[k >> 3] = x - w;
  h[f + (v << 4) + 8 >> 3] = u;
  h[f + (t << 4) + 8 >> 3] = -u;
  h[o >> 3] = s;
  h[p >> 3] = s;
  h[f + (r << 4) + 8 >> 3] = 0.0;
  h[f + (q << 4) + 8 >> 3] = 0.0;
  c[d >> 2] = c[p >> 2];
  c[d + 4 >> 2] = c[p + 4 >> 2];
  c[d + 8 >> 2] = c[p + 8 >> 2];
  c[d + 12 >> 2] = c[p + 12 >> 2];
  c[p >> 2] = c[o >> 2];
  c[p + 4 >> 2] = c[o + 4 >> 2];
  c[p + 8 >> 2] = c[o + 8 >> 2];
  c[p + 12 >> 2] = c[o + 12 >> 2];
  c[o >> 2] = c[n >> 2];
  c[o + 4 >> 2] = c[n + 4 >> 2];
  c[o + 8 >> 2] = c[n + 8 >> 2];
  c[o + 12 >> 2] = c[n + 12 >> 2];
  c[n >> 2] = c[m >> 2];
  c[n + 4 >> 2] = c[m + 4 >> 2];
  c[n + 8 >> 2] = c[m + 8 >> 2];
  c[n + 12 >> 2] = c[m + 12 >> 2];
  c[m >> 2] = c[l >> 2];
  c[m + 4 >> 2] = c[l + 4 >> 2];
  c[m + 8 >> 2] = c[l + 8 >> 2];
  c[m + 12 >> 2] = c[l + 12 >> 2];
  c[l >> 2] = c[k >> 2];
  c[l + 4 >> 2] = c[k + 4 >> 2];
  c[l + 8 >> 2] = c[k + 8 >> 2];
  c[l + 12 >> 2] = c[k + 12 >> 2];
  c[k >> 2] = c[j >> 2];
  c[k + 4 >> 2] = c[j + 4 >> 2];
  c[k + 8 >> 2] = c[j + 8 >> 2];
  c[k + 12 >> 2] = c[j + 12 >> 2];
  c[j >> 2] = c[d >> 2];
  c[j + 4 >> 2] = c[d + 4 >> 2];
  c[j + 8 >> 2] = c[d + 8 >> 2];
  c[j + 12 >> 2] = c[d + 12 >> 2];
  e = e + 1 | 0;
 } while ((e | 0) != 8);
 z = f + 128 | 0;
 K = f + 16 | 0;
 c[d >> 2] = c[z >> 2];
 c[d + 4 >> 2] = c[z + 4 >> 2];
 c[d + 8 >> 2] = c[z + 8 >> 2];
 c[d + 12 >> 2] = c[z + 12 >> 2];
 c[z >> 2] = c[K >> 2];
 c[z + 4 >> 2] = c[K + 4 >> 2];
 c[z + 8 >> 2] = c[K + 8 >> 2];
 c[z + 12 >> 2] = c[K + 12 >> 2];
 c[K >> 2] = c[d >> 2];
 c[K + 4 >> 2] = c[d + 4 >> 2];
 c[K + 8 >> 2] = c[d + 8 >> 2];
 c[K + 12 >> 2] = c[d + 12 >> 2];
 D = f + 256 | 0;
 P = f + 32 | 0;
 c[d >> 2] = c[D >> 2];
 c[d + 4 >> 2] = c[D + 4 >> 2];
 c[d + 8 >> 2] = c[D + 8 >> 2];
 c[d + 12 >> 2] = c[D + 12 >> 2];
 c[D >> 2] = c[P >> 2];
 c[D + 4 >> 2] = c[P + 4 >> 2];
 c[D + 8 >> 2] = c[P + 8 >> 2];
 c[D + 12 >> 2] = c[P + 12 >> 2];
 c[P >> 2] = c[d >> 2];
 c[P + 4 >> 2] = c[d + 4 >> 2];
 c[P + 8 >> 2] = c[d + 8 >> 2];
 c[P + 12 >> 2] = c[d + 12 >> 2];
 O = f + 272 | 0;
 H = f + 160 | 0;
 c[d >> 2] = c[O >> 2];
 c[d + 4 >> 2] = c[O + 4 >> 2];
 c[d + 8 >> 2] = c[O + 8 >> 2];
 c[d + 12 >> 2] = c[O + 12 >> 2];
 c[O >> 2] = c[H >> 2];
 c[O + 4 >> 2] = c[H + 4 >> 2];
 c[O + 8 >> 2] = c[H + 8 >> 2];
 c[O + 12 >> 2] = c[H + 12 >> 2];
 c[H >> 2] = c[d >> 2];
 c[H + 4 >> 2] = c[d + 4 >> 2];
 c[H + 8 >> 2] = c[d + 8 >> 2];
 c[H + 12 >> 2] = c[d + 12 >> 2];
 H = f + 384 | 0;
 O = f + 48 | 0;
 c[d >> 2] = c[H >> 2];
 c[d + 4 >> 2] = c[H + 4 >> 2];
 c[d + 8 >> 2] = c[H + 8 >> 2];
 c[d + 12 >> 2] = c[H + 12 >> 2];
 c[H >> 2] = c[O >> 2];
 c[H + 4 >> 2] = c[O + 4 >> 2];
 c[H + 8 >> 2] = c[O + 8 >> 2];
 c[H + 12 >> 2] = c[O + 12 >> 2];
 c[O >> 2] = c[d >> 2];
 c[O + 4 >> 2] = c[d + 4 >> 2];
 c[O + 8 >> 2] = c[d + 8 >> 2];
 c[O + 12 >> 2] = c[d + 12 >> 2];
 t = f + 400 | 0;
 L = f + 176 | 0;
 c[d >> 2] = c[t >> 2];
 c[d + 4 >> 2] = c[t + 4 >> 2];
 c[d + 8 >> 2] = c[t + 8 >> 2];
 c[d + 12 >> 2] = c[t + 12 >> 2];
 c[t >> 2] = c[L >> 2];
 c[t + 4 >> 2] = c[L + 4 >> 2];
 c[t + 8 >> 2] = c[L + 8 >> 2];
 c[t + 12 >> 2] = c[L + 12 >> 2];
 c[L >> 2] = c[d >> 2];
 c[L + 4 >> 2] = c[d + 4 >> 2];
 c[L + 8 >> 2] = c[d + 8 >> 2];
 c[L + 12 >> 2] = c[d + 12 >> 2];
 L = f + 416 | 0;
 t = f + 304 | 0;
 c[d >> 2] = c[L >> 2];
 c[d + 4 >> 2] = c[L + 4 >> 2];
 c[d + 8 >> 2] = c[L + 8 >> 2];
 c[d + 12 >> 2] = c[L + 12 >> 2];
 c[L >> 2] = c[t >> 2];
 c[L + 4 >> 2] = c[t + 4 >> 2];
 c[L + 8 >> 2] = c[t + 8 >> 2];
 c[L + 12 >> 2] = c[t + 12 >> 2];
 c[t >> 2] = c[d >> 2];
 c[t + 4 >> 2] = c[d + 4 >> 2];
 c[t + 8 >> 2] = c[d + 8 >> 2];
 c[t + 12 >> 2] = c[d + 12 >> 2];
 t = f + 512 | 0;
 L = f + 64 | 0;
 c[d >> 2] = c[t >> 2];
 c[d + 4 >> 2] = c[t + 4 >> 2];
 c[d + 8 >> 2] = c[t + 8 >> 2];
 c[d + 12 >> 2] = c[t + 12 >> 2];
 c[t >> 2] = c[L >> 2];
 c[t + 4 >> 2] = c[L + 4 >> 2];
 c[t + 8 >> 2] = c[L + 8 >> 2];
 c[t + 12 >> 2] = c[L + 12 >> 2];
 c[L >> 2] = c[d >> 2];
 c[L + 4 >> 2] = c[d + 4 >> 2];
 c[L + 8 >> 2] = c[d + 8 >> 2];
 c[L + 12 >> 2] = c[d + 12 >> 2];
 t = f + 528 | 0;
 n = f + 192 | 0;
 c[d >> 2] = c[t >> 2];
 c[d + 4 >> 2] = c[t + 4 >> 2];
 c[d + 8 >> 2] = c[t + 8 >> 2];
 c[d + 12 >> 2] = c[t + 12 >> 2];
 c[t >> 2] = c[n >> 2];
 c[t + 4 >> 2] = c[n + 4 >> 2];
 c[t + 8 >> 2] = c[n + 8 >> 2];
 c[t + 12 >> 2] = c[n + 12 >> 2];
 c[n >> 2] = c[d >> 2];
 c[n + 4 >> 2] = c[d + 4 >> 2];
 c[n + 8 >> 2] = c[d + 8 >> 2];
 c[n + 12 >> 2] = c[d + 12 >> 2];
 n = f + 544 | 0;
 o = f + 320 | 0;
 c[d >> 2] = c[n >> 2];
 c[d + 4 >> 2] = c[n + 4 >> 2];
 c[d + 8 >> 2] = c[n + 8 >> 2];
 c[d + 12 >> 2] = c[n + 12 >> 2];
 c[n >> 2] = c[o >> 2];
 c[n + 4 >> 2] = c[o + 4 >> 2];
 c[n + 8 >> 2] = c[o + 8 >> 2];
 c[n + 12 >> 2] = c[o + 12 >> 2];
 c[o >> 2] = c[d >> 2];
 c[o + 4 >> 2] = c[d + 4 >> 2];
 c[o + 8 >> 2] = c[d + 8 >> 2];
 c[o + 12 >> 2] = c[d + 12 >> 2];
 o = f + 560 | 0;
 p = f + 448 | 0;
 c[d >> 2] = c[o >> 2];
 c[d + 4 >> 2] = c[o + 4 >> 2];
 c[d + 8 >> 2] = c[o + 8 >> 2];
 c[d + 12 >> 2] = c[o + 12 >> 2];
 c[o >> 2] = c[p >> 2];
 c[o + 4 >> 2] = c[p + 4 >> 2];
 c[o + 8 >> 2] = c[p + 8 >> 2];
 c[o + 12 >> 2] = c[p + 12 >> 2];
 c[p >> 2] = c[d >> 2];
 c[p + 4 >> 2] = c[d + 4 >> 2];
 c[p + 8 >> 2] = c[d + 8 >> 2];
 c[p + 12 >> 2] = c[d + 12 >> 2];
 p = f + 640 | 0;
 N = f + 80 | 0;
 c[d >> 2] = c[p >> 2];
 c[d + 4 >> 2] = c[p + 4 >> 2];
 c[d + 8 >> 2] = c[p + 8 >> 2];
 c[d + 12 >> 2] = c[p + 12 >> 2];
 c[p >> 2] = c[N >> 2];
 c[p + 4 >> 2] = c[N + 4 >> 2];
 c[p + 8 >> 2] = c[N + 8 >> 2];
 c[p + 12 >> 2] = c[N + 12 >> 2];
 c[N >> 2] = c[d >> 2];
 c[N + 4 >> 2] = c[d + 4 >> 2];
 c[N + 8 >> 2] = c[d + 8 >> 2];
 c[N + 12 >> 2] = c[d + 12 >> 2];
 p = f + 656 | 0;
 v = f + 208 | 0;
 c[d >> 2] = c[p >> 2];
 c[d + 4 >> 2] = c[p + 4 >> 2];
 c[d + 8 >> 2] = c[p + 8 >> 2];
 c[d + 12 >> 2] = c[p + 12 >> 2];
 c[p >> 2] = c[v >> 2];
 c[p + 4 >> 2] = c[v + 4 >> 2];
 c[p + 8 >> 2] = c[v + 8 >> 2];
 c[p + 12 >> 2] = c[v + 12 >> 2];
 c[v >> 2] = c[d >> 2];
 c[v + 4 >> 2] = c[d + 4 >> 2];
 c[v + 8 >> 2] = c[d + 8 >> 2];
 c[v + 12 >> 2] = c[d + 12 >> 2];
 v = f + 672 | 0;
 p = f + 336 | 0;
 c[d >> 2] = c[v >> 2];
 c[d + 4 >> 2] = c[v + 4 >> 2];
 c[d + 8 >> 2] = c[v + 8 >> 2];
 c[d + 12 >> 2] = c[v + 12 >> 2];
 c[v >> 2] = c[p >> 2];
 c[v + 4 >> 2] = c[p + 4 >> 2];
 c[v + 8 >> 2] = c[p + 8 >> 2];
 c[v + 12 >> 2] = c[p + 12 >> 2];
 c[p >> 2] = c[d >> 2];
 c[p + 4 >> 2] = c[d + 4 >> 2];
 c[p + 8 >> 2] = c[d + 8 >> 2];
 c[p + 12 >> 2] = c[d + 12 >> 2];
 p = f + 688 | 0;
 v = f + 464 | 0;
 c[d >> 2] = c[p >> 2];
 c[d + 4 >> 2] = c[p + 4 >> 2];
 c[d + 8 >> 2] = c[p + 8 >> 2];
 c[d + 12 >> 2] = c[p + 12 >> 2];
 c[p >> 2] = c[v >> 2];
 c[p + 4 >> 2] = c[v + 4 >> 2];
 c[p + 8 >> 2] = c[v + 8 >> 2];
 c[p + 12 >> 2] = c[v + 12 >> 2];
 c[v >> 2] = c[d >> 2];
 c[v + 4 >> 2] = c[d + 4 >> 2];
 c[v + 8 >> 2] = c[d + 8 >> 2];
 c[v + 12 >> 2] = c[d + 12 >> 2];
 v = f + 704 | 0;
 p = f + 592 | 0;
 c[d >> 2] = c[v >> 2];
 c[d + 4 >> 2] = c[v + 4 >> 2];
 c[d + 8 >> 2] = c[v + 8 >> 2];
 c[d + 12 >> 2] = c[v + 12 >> 2];
 c[v >> 2] = c[p >> 2];
 c[v + 4 >> 2] = c[p + 4 >> 2];
 c[v + 8 >> 2] = c[p + 8 >> 2];
 c[v + 12 >> 2] = c[p + 12 >> 2];
 c[p >> 2] = c[d >> 2];
 c[p + 4 >> 2] = c[d + 4 >> 2];
 c[p + 8 >> 2] = c[d + 8 >> 2];
 c[p + 12 >> 2] = c[d + 12 >> 2];
 v = f + 768 | 0;
 J = f + 96 | 0;
 c[d >> 2] = c[v >> 2];
 c[d + 4 >> 2] = c[v + 4 >> 2];
 c[d + 8 >> 2] = c[v + 8 >> 2];
 c[d + 12 >> 2] = c[v + 12 >> 2];
 c[v >> 2] = c[J >> 2];
 c[v + 4 >> 2] = c[J + 4 >> 2];
 c[v + 8 >> 2] = c[J + 8 >> 2];
 c[v + 12 >> 2] = c[J + 12 >> 2];
 c[J >> 2] = c[d >> 2];
 c[J + 4 >> 2] = c[d + 4 >> 2];
 c[J + 8 >> 2] = c[d + 8 >> 2];
 c[J + 12 >> 2] = c[d + 12 >> 2];
 v = f + 784 | 0;
 M = f + 224 | 0;
 c[d >> 2] = c[v >> 2];
 c[d + 4 >> 2] = c[v + 4 >> 2];
 c[d + 8 >> 2] = c[v + 8 >> 2];
 c[d + 12 >> 2] = c[v + 12 >> 2];
 c[v >> 2] = c[M >> 2];
 c[v + 4 >> 2] = c[M + 4 >> 2];
 c[v + 8 >> 2] = c[M + 8 >> 2];
 c[v + 12 >> 2] = c[M + 12 >> 2];
 c[M >> 2] = c[d >> 2];
 c[M + 4 >> 2] = c[d + 4 >> 2];
 c[M + 8 >> 2] = c[d + 8 >> 2];
 c[M + 12 >> 2] = c[d + 12 >> 2];
 M = f + 800 | 0;
 v = f + 352 | 0;
 c[d >> 2] = c[M >> 2];
 c[d + 4 >> 2] = c[M + 4 >> 2];
 c[d + 8 >> 2] = c[M + 8 >> 2];
 c[d + 12 >> 2] = c[M + 12 >> 2];
 c[M >> 2] = c[v >> 2];
 c[M + 4 >> 2] = c[v + 4 >> 2];
 c[M + 8 >> 2] = c[v + 8 >> 2];
 c[M + 12 >> 2] = c[v + 12 >> 2];
 c[v >> 2] = c[d >> 2];
 c[v + 4 >> 2] = c[d + 4 >> 2];
 c[v + 8 >> 2] = c[d + 8 >> 2];
 c[v + 12 >> 2] = c[d + 12 >> 2];
 v = f + 816 | 0;
 M = f + 480 | 0;
 c[d >> 2] = c[v >> 2];
 c[d + 4 >> 2] = c[v + 4 >> 2];
 c[d + 8 >> 2] = c[v + 8 >> 2];
 c[d + 12 >> 2] = c[v + 12 >> 2];
 c[v >> 2] = c[M >> 2];
 c[v + 4 >> 2] = c[M + 4 >> 2];
 c[v + 8 >> 2] = c[M + 8 >> 2];
 c[v + 12 >> 2] = c[M + 12 >> 2];
 c[M >> 2] = c[d >> 2];
 c[M + 4 >> 2] = c[d + 4 >> 2];
 c[M + 8 >> 2] = c[d + 8 >> 2];
 c[M + 12 >> 2] = c[d + 12 >> 2];
 M = f + 832 | 0;
 v = f + 608 | 0;
 c[d >> 2] = c[M >> 2];
 c[d + 4 >> 2] = c[M + 4 >> 2];
 c[d + 8 >> 2] = c[M + 8 >> 2];
 c[d + 12 >> 2] = c[M + 12 >> 2];
 c[M >> 2] = c[v >> 2];
 c[M + 4 >> 2] = c[v + 4 >> 2];
 c[M + 8 >> 2] = c[v + 8 >> 2];
 c[M + 12 >> 2] = c[v + 12 >> 2];
 c[v >> 2] = c[d >> 2];
 c[v + 4 >> 2] = c[d + 4 >> 2];
 c[v + 8 >> 2] = c[d + 8 >> 2];
 c[v + 12 >> 2] = c[d + 12 >> 2];
 M = f + 848 | 0;
 q = f + 736 | 0;
 c[d >> 2] = c[M >> 2];
 c[d + 4 >> 2] = c[M + 4 >> 2];
 c[d + 8 >> 2] = c[M + 8 >> 2];
 c[d + 12 >> 2] = c[M + 12 >> 2];
 c[M >> 2] = c[q >> 2];
 c[M + 4 >> 2] = c[q + 4 >> 2];
 c[M + 8 >> 2] = c[q + 8 >> 2];
 c[M + 12 >> 2] = c[q + 12 >> 2];
 c[q >> 2] = c[d >> 2];
 c[q + 4 >> 2] = c[d + 4 >> 2];
 c[q + 8 >> 2] = c[d + 8 >> 2];
 c[q + 12 >> 2] = c[d + 12 >> 2];
 q = f + 896 | 0;
 M = f + 112 | 0;
 c[d >> 2] = c[q >> 2];
 c[d + 4 >> 2] = c[q + 4 >> 2];
 c[d + 8 >> 2] = c[q + 8 >> 2];
 c[d + 12 >> 2] = c[q + 12 >> 2];
 c[q >> 2] = c[M >> 2];
 c[q + 4 >> 2] = c[M + 4 >> 2];
 c[q + 8 >> 2] = c[M + 8 >> 2];
 c[q + 12 >> 2] = c[M + 12 >> 2];
 c[M >> 2] = c[d >> 2];
 c[M + 4 >> 2] = c[d + 4 >> 2];
 c[M + 8 >> 2] = c[d + 8 >> 2];
 c[M + 12 >> 2] = c[d + 12 >> 2];
 q = f + 912 | 0;
 m = f + 240 | 0;
 c[d >> 2] = c[q >> 2];
 c[d + 4 >> 2] = c[q + 4 >> 2];
 c[d + 8 >> 2] = c[q + 8 >> 2];
 c[d + 12 >> 2] = c[q + 12 >> 2];
 c[q >> 2] = c[m >> 2];
 c[q + 4 >> 2] = c[m + 4 >> 2];
 c[q + 8 >> 2] = c[m + 8 >> 2];
 c[q + 12 >> 2] = c[m + 12 >> 2];
 c[m >> 2] = c[d >> 2];
 c[m + 4 >> 2] = c[d + 4 >> 2];
 c[m + 8 >> 2] = c[d + 8 >> 2];
 c[m + 12 >> 2] = c[d + 12 >> 2];
 m = f + 928 | 0;
 q = f + 368 | 0;
 c[d >> 2] = c[m >> 2];
 c[d + 4 >> 2] = c[m + 4 >> 2];
 c[d + 8 >> 2] = c[m + 8 >> 2];
 c[d + 12 >> 2] = c[m + 12 >> 2];
 c[m >> 2] = c[q >> 2];
 c[m + 4 >> 2] = c[q + 4 >> 2];
 c[m + 8 >> 2] = c[q + 8 >> 2];
 c[m + 12 >> 2] = c[q + 12 >> 2];
 c[q >> 2] = c[d >> 2];
 c[q + 4 >> 2] = c[d + 4 >> 2];
 c[q + 8 >> 2] = c[d + 8 >> 2];
 c[q + 12 >> 2] = c[d + 12 >> 2];
 q = f + 944 | 0;
 m = f + 496 | 0;
 c[d >> 2] = c[q >> 2];
 c[d + 4 >> 2] = c[q + 4 >> 2];
 c[d + 8 >> 2] = c[q + 8 >> 2];
 c[d + 12 >> 2] = c[q + 12 >> 2];
 c[q >> 2] = c[m >> 2];
 c[q + 4 >> 2] = c[m + 4 >> 2];
 c[q + 8 >> 2] = c[m + 8 >> 2];
 c[q + 12 >> 2] = c[m + 12 >> 2];
 c[m >> 2] = c[d >> 2];
 c[m + 4 >> 2] = c[d + 4 >> 2];
 c[m + 8 >> 2] = c[d + 8 >> 2];
 c[m + 12 >> 2] = c[d + 12 >> 2];
 m = f + 960 | 0;
 q = f + 624 | 0;
 c[d >> 2] = c[m >> 2];
 c[d + 4 >> 2] = c[m + 4 >> 2];
 c[d + 8 >> 2] = c[m + 8 >> 2];
 c[d + 12 >> 2] = c[m + 12 >> 2];
 c[m >> 2] = c[q >> 2];
 c[m + 4 >> 2] = c[q + 4 >> 2];
 c[m + 8 >> 2] = c[q + 8 >> 2];
 c[m + 12 >> 2] = c[q + 12 >> 2];
 c[q >> 2] = c[d >> 2];
 c[q + 4 >> 2] = c[d + 4 >> 2];
 c[q + 8 >> 2] = c[d + 8 >> 2];
 c[q + 12 >> 2] = c[d + 12 >> 2];
 m = f + 976 | 0;
 j = f + 752 | 0;
 c[d >> 2] = c[m >> 2];
 c[d + 4 >> 2] = c[m + 4 >> 2];
 c[d + 8 >> 2] = c[m + 8 >> 2];
 c[d + 12 >> 2] = c[m + 12 >> 2];
 c[m >> 2] = c[j >> 2];
 c[m + 4 >> 2] = c[j + 4 >> 2];
 c[m + 8 >> 2] = c[j + 8 >> 2];
 c[m + 12 >> 2] = c[j + 12 >> 2];
 c[j >> 2] = c[d >> 2];
 c[j + 4 >> 2] = c[d + 4 >> 2];
 c[j + 8 >> 2] = c[d + 8 >> 2];
 c[j + 12 >> 2] = c[d + 12 >> 2];
 j = f + 992 | 0;
 m = f + 880 | 0;
 c[d >> 2] = c[j >> 2];
 c[d + 4 >> 2] = c[j + 4 >> 2];
 c[d + 8 >> 2] = c[j + 8 >> 2];
 c[d + 12 >> 2] = c[j + 12 >> 2];
 c[j >> 2] = c[m >> 2];
 c[j + 4 >> 2] = c[m + 4 >> 2];
 c[j + 8 >> 2] = c[m + 8 >> 2];
 c[j + 12 >> 2] = c[m + 12 >> 2];
 c[m >> 2] = c[d >> 2];
 c[m + 4 >> 2] = c[d + 4 >> 2];
 c[m + 8 >> 2] = c[d + 8 >> 2];
 c[m + 12 >> 2] = c[d + 12 >> 2];
 s = +h[f >> 3];
 m = f + 512 | 0;
 h[b >> 3] = +h[m >> 3];
 B = +h[f + 16 >> 3];
 j = b + 8 | 0;
 h[j >> 3] = +h[f + 528 >> 3];
 G = +h[f + 32 >> 3];
 r = b + 16 | 0;
 h[r >> 3] = +h[f + 544 >> 3];
 C = +h[f + 48 >> 3];
 l = b + 24 | 0;
 h[l >> 3] = +h[f + 560 >> 3];
 A = +h[f + 64 >> 3];
 I = b + 32 | 0;
 h[I >> 3] = +h[f + 576 >> 3];
 x = +h[f + 80 >> 3];
 e = b + 40 | 0;
 h[e >> 3] = +h[f + 592 >> 3];
 Q = +h[f + 96 >> 3];
 y = +h[f + 608 >> 3];
 h[b + 48 >> 3] = y;
 E = +h[f + 112 >> 3];
 k = b + 56 | 0;
 h[k >> 3] = +h[f + 624 >> 3];
 F = G - Q;
 G = Q + G;
 Q = s - A;
 s = A + s;
 A = B - x;
 B = x + B;
 x = C - E;
 C = E + C;
 E = (A - x) * .7071067811865476;
 w = Q - E;
 h[N >> 3] = w;
 u = (A + x) * .7071067811865476;
 h[f + 88 >> 3] = F - u;
 E = Q + E;
 h[L >> 3] = E;
 h[f + 72 >> 3] = F + u;
 A = (-x - A) * .7071067811865476;
 h[f + 120 >> 3] = -F - A;
 h[M >> 3] = w;
 h[J >> 3] = E;
 h[f + 104 >> 3] = A - F;
 F = s - G;
 s = G + s;
 G = B - C;
 C = B + C;
 h[f >> 3] = s + C;
 h[K >> 3] = s - C;
 h[f + 40 >> 3] = G;
 h[f + 56 >> 3] = -G;
 h[O >> 3] = F;
 h[P >> 3] = F;
 h[f + 8 >> 3] = 0.0;
 h[f + 24 >> 3] = 0.0;
 c[d >> 2] = c[P >> 2];
 c[d + 4 >> 2] = c[P + 4 >> 2];
 c[d + 8 >> 2] = c[P + 8 >> 2];
 c[d + 12 >> 2] = c[P + 12 >> 2];
 c[P >> 2] = c[O >> 2];
 c[P + 4 >> 2] = c[O + 4 >> 2];
 c[P + 8 >> 2] = c[O + 8 >> 2];
 c[P + 12 >> 2] = c[O + 12 >> 2];
 c[O >> 2] = c[N >> 2];
 c[O + 4 >> 2] = c[N + 4 >> 2];
 c[O + 8 >> 2] = c[N + 8 >> 2];
 c[O + 12 >> 2] = c[N + 12 >> 2];
 c[N >> 2] = c[M >> 2];
 c[N + 4 >> 2] = c[M + 4 >> 2];
 c[N + 8 >> 2] = c[M + 8 >> 2];
 c[N + 12 >> 2] = c[M + 12 >> 2];
 c[M >> 2] = c[L >> 2];
 c[M + 4 >> 2] = c[L + 4 >> 2];
 c[M + 8 >> 2] = c[L + 8 >> 2];
 c[M + 12 >> 2] = c[L + 12 >> 2];
 c[L >> 2] = c[K >> 2];
 c[L + 4 >> 2] = c[K + 4 >> 2];
 c[L + 8 >> 2] = c[K + 8 >> 2];
 c[L + 12 >> 2] = c[K + 12 >> 2];
 c[K >> 2] = c[J >> 2];
 c[K + 4 >> 2] = c[J + 4 >> 2];
 c[K + 8 >> 2] = c[J + 8 >> 2];
 c[K + 12 >> 2] = c[J + 12 >> 2];
 c[J >> 2] = c[d >> 2];
 c[J + 4 >> 2] = c[d + 4 >> 2];
 c[J + 8 >> 2] = c[d + 8 >> 2];
 c[J + 12 >> 2] = c[d + 12 >> 2];
 F = +h[r >> 3];
 G = F - y;
 F = y + F;
 r = f + 576 | 0;
 y = +h[I >> 3];
 C = +h[b >> 3];
 s = C - y;
 C = y + C;
 y = +h[e >> 3];
 B = +h[j >> 3];
 A = B - y;
 B = y + B;
 y = +h[k >> 3];
 E = +h[l >> 3];
 w = E - y;
 E = y + E;
 y = (A - w) * .7071067811865476;
 x = s - y;
 h[p >> 3] = x;
 u = (A + w) * .7071067811865476;
 h[f + 600 >> 3] = G - u;
 y = s + y;
 h[r >> 3] = y;
 h[f + 584 >> 3] = G + u;
 A = (-w - A) * .7071067811865476;
 h[f + 632 >> 3] = -G - A;
 h[q >> 3] = x;
 h[v >> 3] = y;
 h[f + 616 >> 3] = A - G;
 G = C - F;
 C = F + C;
 F = B - E;
 E = B + E;
 h[m >> 3] = C + E;
 h[t >> 3] = C - E;
 h[f + 552 >> 3] = F;
 h[f + 568 >> 3] = -F;
 h[o >> 3] = G;
 h[n >> 3] = G;
 h[f + 520 >> 3] = 0.0;
 h[f + 536 >> 3] = 0.0;
 c[d >> 2] = c[n >> 2];
 c[d + 4 >> 2] = c[n + 4 >> 2];
 c[d + 8 >> 2] = c[n + 8 >> 2];
 c[d + 12 >> 2] = c[n + 12 >> 2];
 c[n >> 2] = c[o >> 2];
 c[n + 4 >> 2] = c[o + 4 >> 2];
 c[n + 8 >> 2] = c[o + 8 >> 2];
 c[n + 12 >> 2] = c[o + 12 >> 2];
 c[o >> 2] = c[p >> 2];
 c[o + 4 >> 2] = c[p + 4 >> 2];
 c[o + 8 >> 2] = c[p + 8 >> 2];
 c[o + 12 >> 2] = c[p + 12 >> 2];
 c[p >> 2] = c[q >> 2];
 c[p + 4 >> 2] = c[q + 4 >> 2];
 c[p + 8 >> 2] = c[q + 8 >> 2];
 c[p + 12 >> 2] = c[q + 12 >> 2];
 c[q >> 2] = c[r >> 2];
 c[q + 4 >> 2] = c[r + 4 >> 2];
 c[q + 8 >> 2] = c[r + 8 >> 2];
 c[q + 12 >> 2] = c[r + 12 >> 2];
 c[r >> 2] = c[t >> 2];
 c[r + 4 >> 2] = c[t + 4 >> 2];
 c[r + 8 >> 2] = c[t + 8 >> 2];
 c[r + 12 >> 2] = c[t + 12 >> 2];
 c[t >> 2] = c[v >> 2];
 c[t + 4 >> 2] = c[v + 4 >> 2];
 c[t + 8 >> 2] = c[v + 8 >> 2];
 c[t + 12 >> 2] = c[v + 12 >> 2];
 c[v >> 2] = c[d >> 2];
 c[v + 4 >> 2] = c[d + 4 >> 2];
 c[v + 8 >> 2] = c[d + 8 >> 2];
 c[v + 12 >> 2] = c[d + 12 >> 2];
 Qc(z);
 Qc(D);
 Qc(H);
 b = 4;
 do {
  G = +h[f + (b << 4) >> 3];
  Q = +h[f + (b << 4) + 8 >> 3];
  h[a + (b << 3) >> 3] = (G * G + Q * Q) * .000064;
  b = b + 1 | 0;
 } while ((b | 0) != 37);
 i = g;
 return;
}

function Fc(e, f, g) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, $ = 0;
 Z = i;
 i = i + 80 | 0;
 Q = Z + 32 | 0;
 S = Z;
 X = Z + 56 | 0;
 V = Z + 44 | 0;
 c[X >> 2] = 0;
 Y = X + 4 | 0;
 c[Y >> 2] = 0;
 c[X + 8 >> 2] = 0;
 c[V >> 2] = 0;
 W = V + 4 | 0;
 c[W >> 2] = 0;
 c[V + 8 >> 2] = 0;
 U = c[g >> 2] | 0;
 T = c[g + 4 >> 2] | 0;
 a : do if ((fb[U & 7](T, 35791, 2) | 0) == 2) {
  if (f) {
   if ((fb[U & 7](T, 39523, 18) | 0) != 18) {
    j = 0;
    break;
   }
  } else {
   m = e + 36 | 0;
   n = e + 32 | 0;
   if ((c[m >> 2] | 0) == (c[n >> 2] | 0)) g = 1; else {
    o = 0;
    g = 1;
    do {
     a[Q >> 0] = -1;
     b : do if (g ? (fb[U & 7](T, Q, 1) | 0) == 1 : 0) {
      l = c[n >> 2] | 0;
      h = l + (o * 12 | 0) | 0;
      P = a[h >> 0] | 0;
      O = (P & 1) == 0;
      h = O ? h + 1 | 0 : c[l + (o * 12 | 0) + 8 >> 2] | 0;
      l = O ? (P & 255) >>> 1 : c[l + (o * 12 | 0) + 4 >> 2] | 0;
      if (l >>> 0 > 1073741824) {
       j = h;
       g = 0;
       while (1) {
        if ((fb[U & 7](T, j, 1073741824) | 0) != 1073741824) {
         g = 0;
         break b;
        }
        g = g + 1073741824 | 0;
        k = l - g | 0;
        j = h + g | 0;
        if (k >>> 0 <= 1073741824) {
         h = j;
         break;
        }
       }
      } else {
       k = l;
       g = 0;
      }
      if ((g | 0) == (l | 0)) g = 1; else g = (fb[U & 7](T, h, k) | 0) == (k | 0);
     } else g = 0; while (0);
     o = o + 1 | 0;
    } while (o >>> 0 < (((c[m >> 2] | 0) - (c[n >> 2] | 0) | 0) / 12 | 0) >>> 0);
   }
   m = e + 48 | 0;
   n = e + 44 | 0;
   if ((c[m >> 2] | 0) != (c[n >> 2] | 0)) {
    o = 0;
    do {
     b[S >> 1] = -257;
     c : do if (g ? (fb[U & 7](T, S, 2) | 0) == 2 : 0) {
      l = c[n >> 2] | 0;
      h = l + (o * 12 | 0) | 0;
      P = a[h >> 0] | 0;
      O = (P & 1) == 0;
      h = O ? h + 1 | 0 : c[l + (o * 12 | 0) + 8 >> 2] | 0;
      l = O ? (P & 255) >>> 1 : c[l + (o * 12 | 0) + 4 >> 2] | 0;
      if (l >>> 0 > 1073741824) {
       j = h;
       g = 0;
       while (1) {
        if ((fb[U & 7](T, j, 1073741824) | 0) != 1073741824) {
         g = 0;
         break c;
        }
        g = g + 1073741824 | 0;
        k = l - g | 0;
        j = h + g | 0;
        if (k >>> 0 <= 1073741824) {
         h = j;
         break;
        }
       }
      } else {
       k = l;
       g = 0;
      }
      if ((g | 0) == (l | 0)) g = 1; else g = (fb[U & 7](T, h, k) | 0) == (k | 0);
     } else g = 0; while (0);
     o = o + 1 | 0;
    } while (o >>> 0 < (((c[m >> 2] | 0) - (c[n >> 2] | 0) | 0) / 12 | 0) >>> 0);
   }
   if (!g) {
    j = 0;
    break;
   }
  }
  p = e + 60 | 0;
  g = c[p >> 2] | 0;
  q = e + 56 | 0;
  k = c[q >> 2] | 0;
  if ((g | 0) == (k | 0)) j = 2; else {
   h = (g - k | 0) / 24 | 0;
   j = 0;
   g = 2;
   do {
    g = ((c[k + (j * 24 | 0) + 12 >> 2] | 0) != 0 ? 129 : 65) + g | 0;
    j = j + 1 | 0;
   } while (j >>> 0 < h >>> 0);
   j = g;
  }
  g = j + 2 | 0;
  c[Q >> 2] = 0;
  o = Q + 4 | 0;
  c[o >> 2] = 0;
  c[Q + 8 >> 2] = 0;
  if ((j | 0) < -2) we(Q);
  h = ye(g) | 0;
  c[o >> 2] = h;
  c[Q >> 2] = h;
  c[Q + 8 >> 2] = h + g;
  do {
   a[h >> 0] = 0;
   h = (c[o >> 2] | 0) + 1 | 0;
   c[o >> 2] = h;
   g = g + -1 | 0;
  } while ((g | 0) != 0);
  a[c[Q >> 2] >> 0] = -1;
  a[(c[Q >> 2] | 0) + 1 >> 0] = -37;
  a[(c[Q >> 2] | 0) + 2 >> 0] = j >>> 8;
  a[(c[Q >> 2] | 0) + 3 >> 0] = j;
  g = c[q >> 2] | 0;
  d : do if ((c[p >> 2] | 0) != (g | 0)) {
   n = 0;
   h = 4;
   do {
    m = g + (n * 24 | 0) + 12 | 0;
    a[(c[Q >> 2] | 0) + h >> 0] = (c[m >> 2] << 4) + (c[g + (n * 24 | 0) + 16 >> 2] | 0);
    k = g + (n * 24 | 0) | 0;
    l = 0;
    g = h;
    h = h + 1 | 0;
    do {
     j = c[(c[k >> 2] | 0) + (c[27292 + (l << 2) >> 2] << 2) >> 2] | 0;
     if (!(c[m >> 2] | 0)) g = h; else {
      a[(c[Q >> 2] | 0) + h >> 0] = j >>> 8;
      g = g + 2 | 0;
     }
     a[(c[Q >> 2] | 0) + g >> 0] = j;
     l = l + 1 | 0;
     h = g + 1 | 0;
    } while ((l | 0) != 64);
    n = n + 1 | 0;
    g = c[q >> 2] | 0;
   } while (n >>> 0 < (((c[p >> 2] | 0) - g | 0) / 24 | 0) >>> 0);
   j = h;
   g = c[Q >> 2] | 0;
   if (j >>> 0 > 1073741824) {
    k = g;
    h = 0;
    while (1) {
     if ((fb[U & 7](T, k, 1073741824) | 0) != 1073741824) {
      g = 0;
      break d;
     }
     l = h + 1073741824 | 0;
     h = j - l | 0;
     k = g + l | 0;
     if (h >>> 0 > 1073741824) h = l; else {
      g = k;
      k = l;
      break;
     }
    }
   } else {
    h = j;
    k = 0;
   }
   if ((k | 0) == (j | 0)) g = 1; else R = 41;
  } else {
   h = 4;
   g = c[Q >> 2] | 0;
   R = 41;
  } while (0);
  if ((R | 0) == 41) g = (fb[U & 7](T, g, h) | 0) == (h | 0);
  h = c[Q >> 2] | 0;
  if (h) {
   if ((c[o >> 2] | 0) != (h | 0)) c[o >> 2] = h;
   Ae(h);
  }
  if (g) {
   O = e + 84 | 0;
   j = c[O >> 2] | 0;
   P = e + 80 | 0;
   k = c[P >> 2] | 0;
   m = (j - k | 0) / 40 | 0;
   g = m * 3 | 0;
   l = g + 8 | 0;
   g = g + 10 | 0;
   c[Q >> 2] = 0;
   n = Q + 4 | 0;
   c[n >> 2] = 0;
   c[Q + 8 >> 2] = 0;
   if ((g | 0) < 0) we(Q);
   h = ye(g) | 0;
   c[n >> 2] = h;
   c[Q >> 2] = h;
   c[Q + 8 >> 2] = h + g;
   do {
    a[h >> 0] = 0;
    h = (c[n >> 2] | 0) + 1 | 0;
    c[n >> 2] = h;
    g = g + -1 | 0;
   } while ((g | 0) != 0);
   a[c[Q >> 2] >> 0] = -1;
   a[(c[Q >> 2] | 0) + 1 >> 0] = -63;
   a[(c[Q >> 2] | 0) + 2 >> 0] = l >>> 8;
   a[(c[Q >> 2] | 0) + 3 >> 0] = l;
   a[(c[Q >> 2] | 0) + 4 >> 0] = 8;
   N = e + 4 | 0;
   a[(c[Q >> 2] | 0) + 5 >> 0] = (c[N >> 2] | 0) >>> 8;
   a[(c[Q >> 2] | 0) + 6 >> 0] = c[N >> 2];
   a[(c[Q >> 2] | 0) + 7 >> 0] = (c[e >> 2] | 0) >>> 8;
   a[(c[Q >> 2] | 0) + 8 >> 0] = c[e >> 2];
   a[(c[Q >> 2] | 0) + 9 >> 0] = m;
   e : do if ((j | 0) != (k | 0)) {
    k = 0;
    l = 10;
    while (1) {
     a[(c[Q >> 2] | 0) + l >> 0] = c[(c[P >> 2] | 0) + (k * 40 | 0) >> 2];
     g = c[P >> 2] | 0;
     a[(c[Q >> 2] | 0) + (l + 1) >> 0] = c[g + (k * 40 | 0) + 4 >> 2] << 4 | c[g + (k * 40 | 0) + 8 >> 2];
     g = c[(c[P >> 2] | 0) + (k * 40 | 0) + 12 >> 2] | 0;
     h = c[q >> 2] | 0;
     if (g >>> 0 >= (((c[p >> 2] | 0) - h | 0) / 24 | 0) >>> 0) {
      g = 0;
      break e;
     }
     j = l + 3 | 0;
     a[(c[Q >> 2] | 0) + (l + 2) >> 0] = c[h + (g * 24 | 0) + 16 >> 2];
     k = k + 1 | 0;
     if (k >>> 0 >= m >>> 0) {
      l = j;
      break;
     } else l = j;
    }
    g = c[Q >> 2] | 0;
    if (l >>> 0 > 1073741824) {
     h = g;
     j = 0;
     while (1) {
      if ((fb[U & 7](T, h, 1073741824) | 0) != 1073741824) {
       g = 0;
       break e;
      }
      j = j + 1073741824 | 0;
      h = l - j | 0;
      k = g + j | 0;
      if (h >>> 0 > 1073741824) h = k; else {
       g = k;
       break;
      }
     }
    } else {
     h = l;
     j = 0;
    }
    if ((j | 0) == (l | 0)) g = 1; else R = 59;
   } else {
    h = 10;
    g = c[Q >> 2] | 0;
    R = 59;
   } while (0);
   if ((R | 0) == 59) g = (fb[U & 7](T, g, h) | 0) == (h | 0);
   h = c[Q >> 2] | 0;
   if (h) {
    if ((c[n >> 2] | 0) != (h | 0)) c[n >> 2] = h;
    Ae(h);
   }
   if (g ? Gc(e, U, T, X, V) | 0 : 0) {
    J = Q;
    c[J >> 2] = 0;
    c[J + 4 >> 2] = 0;
    c[S >> 2] = 131072;
    J = S + 4 | 0;
    c[J >> 2] = ze(131072) | 0;
    N = S + 8 | 0;
    c[N >> 2] = 0;
    K = S + 16 | 0;
    L = K;
    c[L >> 2] = 0;
    c[L + 4 >> 2] = 0;
    L = S + 24 | 0;
    c[L >> 2] = 64;
    M = S + 28 | 0;
    a[M >> 0] = 0;
    H = e + 20 | 0;
    g = c[H >> 2] | 0;
    f : do if ((g | 0) > 0) {
     I = e + 24 | 0;
     h = c[I >> 2] | 0;
     j = 0;
     G = 0;
     do {
      if ((h | 0) > 0) {
       F = 0;
       do {
        h = c[O >> 2] | 0;
        g = c[P >> 2] | 0;
        if ((h | 0) != (g | 0)) {
         E = 0;
         do {
          B = c[g + (E * 40 | 0) + 8 >> 2] | 0;
          D = c[g + (E * 40 | 0) + 4 >> 2] | 0;
          if ((B | 0) > 0) {
           x = (D | 0) > 0;
           y = _(B, G) | 0;
           z = _(D, F) | 0;
           A = g + (E * 40 | 0) + 16 | 0;
           u = g + (E * 40 | 0) + 28 | 0;
           v = Q + (E << 1) | 0;
           w = 0;
           do {
            if (x) {
             r = w + y | 0;
             h = b[v >> 1] | 0;
             t = 0;
             while (1) {
              p = t + z + (_(c[A >> 2] | 0, r) | 0) << 6;
              q = c[u >> 2] | 0;
              l = c[X >> 2] | 0;
              s = c[V >> 2] | 0;
              g = b[q + (p << 1) >> 1] | 0;
              j = (g & 65535) - (h & 65535) | 0;
              h = j << 16;
              if ((h | 0) < 0) {
               h = 0 - (h >> 16) | 0;
               k = j + -1 | 0;
              } else {
               h = j;
               k = j;
              }
              h = h << 16 >> 16;
              if (!h) j = -1; else j = (aa(h | 0) | 0) ^ 31;
              h = j + 1 | 0;
              o = c[l + (E * 1280 | 0) + 256 + (h << 2) >> 2] | 0;
              Gd(S, d[l + (E * 1280 | 0) + h >> 0] | 0, o, ((o | 0) < 0) << 31 >> 31);
              if ((j | 0) > -1) {
               o = (1 << h) + -1 & k << 16 >> 16;
               Gd(S, h, o, ((o | 0) < 0) << 31 >> 31);
              }
              m = s + (E * 1280 | 0) + 240 | 0;
              n = s + (E * 1280 | 0) + 1216 | 0;
              o = 1;
              h = 0;
              do {
               k = b[q + ((c[27292 + (o << 2) >> 2] | 0) + p << 1) >> 1] | 0;
               j = k & 65535;
               if (!(k << 16 >> 16)) h = h + 1 | 0; else {
                if (k << 16 >> 16 < 0) {
                 k = 0 - j | 0;
                 l = k & 65535;
                 k = (k ^ 65535) & 65535;
                } else l = k;
                if ((h | 0) > 15) {
                 j = h;
                 do {
                  $ = c[n >> 2] | 0;
                  Gd(S, d[m >> 0] | 0, $, (($ | 0) < 0) << 31 >> 31);
                  j = j + -16 | 0;
                 } while ((j | 0) > 15);
                 h = h & 15;
                }
                $ = ((aa(l << 16 >> 16 | 0) | 0) ^ 31) + 1 | 0;
                l = $ + (h << 4) | 0;
                h = c[s + (E * 1280 | 0) + 256 + (l << 2) >> 2] | 0;
                Gd(S, d[s + (E * 1280 | 0) + l >> 0] | 0, h, ((h | 0) < 0) << 31 >> 31);
                h = (1 << $) + -1 & k << 16 >> 16;
                Gd(S, $, h, ((h | 0) < 0) << 31 >> 31);
                h = 0;
               }
               o = o + 1 | 0;
              } while ((o | 0) != 64);
              if ((h | 0) > 0) {
               $ = c[s + (E * 1280 | 0) + 256 >> 2] | 0;
               Gd(S, d[s + (E * 1280 | 0) >> 0] | 0, $, (($ | 0) < 0) << 31 >> 31);
              }
              t = t + 1 | 0;
              if ((t | 0) == (D | 0)) break; else h = g;
             }
             b[v >> 1] = g;
            }
            w = w + 1 | 0;
           } while ((w | 0) != (B | 0));
           h = c[O >> 2] | 0;
           g = c[P >> 2] | 0;
          }
          E = E + 1 | 0;
         } while (E >>> 0 < ((h - g | 0) / 40 | 0) >>> 0);
         j = c[N >> 2] | 0;
        }
        if ((j | 0) > 65536) {
         h = c[J >> 2] | 0;
         if (j >>> 0 > 1073741824) {
          k = h;
          g = 0;
          while (1) {
           if ((fb[U & 7](T, k, 1073741824) | 0) != 1073741824) {
            h = 0;
            break f;
           }
           g = g + 1073741824 | 0;
           l = j - g | 0;
           k = h + g | 0;
           if (l >>> 0 <= 1073741824) {
            h = k;
            break;
           }
          }
         } else {
          l = j;
          g = 0;
         }
         if ((g | 0) != (j | 0) ? (fb[U & 7](T, h, l) | 0) != (l | 0) : 0) {
          h = 0;
          break f;
         }
         c[N >> 2] = 0;
         j = 0;
        }
        F = F + 1 | 0;
        h = c[I >> 2] | 0;
       } while ((F | 0) < (h | 0));
       g = c[H >> 2] | 0;
      }
      G = G + 1 | 0;
     } while ((G | 0) < (g | 0));
     g = c[L >> 2] | 0;
     g : do if ((g | 0) < 57) {
      k = S + 4 | 0;
      g = K;
      h = c[g >> 2] | 0;
      g = c[g + 4 >> 2] | 0;
      while (1) {
       g = sg(h | 0, g | 0, 56) | 0;
       if (j >>> 0 < (c[S >> 2] | 0) >>> 0) {
        c[N >> 2] = j + 1;
        a[(c[k >> 2] | 0) + j >> 0] = g;
       } else a[M >> 0] = 1;
       do if ((g | 0) == 255 & (C | 0) == 0) {
        g = c[N >> 2] | 0;
        if (g >>> 0 < (c[S >> 2] | 0) >>> 0) {
         c[N >> 2] = g + 1;
         a[(c[k >> 2] | 0) + g >> 0] = 0;
         break;
        } else {
         a[M >> 0] = 1;
         break;
        }
       } while (0);
       h = K;
       h = qg(c[h >> 2] | 0, c[h + 4 >> 2] | 0, 8) | 0;
       j = C;
       g = K;
       c[g >> 2] = h;
       c[g + 4 >> 2] = j;
       g = (c[L >> 2] | 0) + 8 | 0;
       c[L >> 2] = g;
       if ((g | 0) >= 57) break g;
       g = j;
       j = c[N >> 2] | 0;
      }
     } while (0);
     if ((g | 0) < 64) {
      g = 255 >>> (64 - g | 0);
      h = K;
      h = sg(c[h >> 2] | 0, c[h + 4 >> 2] | 0, 56) | 0;
      g = h & ~g | g;
      h = c[N >> 2] | 0;
      if (h >>> 0 < (c[S >> 2] | 0) >>> 0) {
       c[N >> 2] = h + 1;
       a[(c[S + 4 >> 2] | 0) + h >> 0] = g;
      } else a[M >> 0] = 1;
      if ((g | 0) == 255 & 0 == 0) {
       g = c[N >> 2] | 0;
       if (g >>> 0 < (c[S >> 2] | 0) >>> 0) {
        c[N >> 2] = g + 1;
        a[(c[S + 4 >> 2] | 0) + g >> 0] = 0;
        R = 127;
        break;
       } else {
        a[M >> 0] = 1;
        R = 127;
        break;
       }
      } else R = 127;
     } else R = 127;
    } else R = 127; while (0);
    h : do if ((R | 0) == 127) {
     $ = K;
     c[$ >> 2] = 0;
     c[$ + 4 >> 2] = 0;
     c[L >> 2] = 64;
     if (!(a[M >> 0] | 0)) {
      h = c[J >> 2] | 0;
      l = c[N >> 2] | 0;
      if (l >>> 0 > 1073741824) {
       j = h;
       g = 0;
       while (1) {
        if ((fb[U & 7](T, j, 1073741824) | 0) != 1073741824) {
         h = 0;
         break h;
        }
        g = g + 1073741824 | 0;
        k = l - g | 0;
        j = h + g | 0;
        if (k >>> 0 <= 1073741824) {
         h = j;
         break;
        }
       }
      } else {
       k = l;
       g = 0;
      }
      if ((g | 0) == (l | 0)) h = 1; else h = (fb[U & 7](T, h, k) | 0) == (k | 0);
     } else h = 0;
    } while (0);
    $ = S + 4 | 0;
    g = c[$ >> 2] | 0;
    c[$ >> 2] = 0;
    if (g) Be(g);
    if (h) {
     g = (fb[U & 7](T, 35793, 2) | 0) != 2;
     if (!(g | f)) {
      h = e + 128 | 0;
      l = a[h >> 0] | 0;
      $ = (l & 1) == 0;
      h = $ ? h + 1 | 0 : c[e + 136 >> 2] | 0;
      l = $ ? (l & 255) >>> 1 : c[e + 132 >> 2] | 0;
      if (l >>> 0 > 1073741824) {
       j = h;
       g = 0;
       while (1) {
        if ((fb[U & 7](T, j, 1073741824) | 0) != 1073741824) {
         j = 0;
         break a;
        }
        g = g + 1073741824 | 0;
        k = l - g | 0;
        j = h + g | 0;
        if (k >>> 0 <= 1073741824) {
         h = j;
         break;
        }
       }
      } else {
       k = l;
       g = 0;
      }
      if ((g | 0) == (l | 0)) j = 1; else j = (fb[U & 7](T, h, k) | 0) == (k | 0);
     } else j = g ^ 1;
    } else j = 0;
   } else j = 0;
  } else j = 0;
 } else j = 0; while (0);
 g = c[V >> 2] | 0;
 if (g) {
  h = c[W >> 2] | 0;
  if ((h | 0) != (g | 0)) c[W >> 2] = h + (~(((0 - g + (h + -1280) | 0) >>> 0) / 1280 | 0) * 1280 | 0);
  Ae(g);
 }
 g = c[X >> 2] | 0;
 if (!g) {
  i = Z;
  return j | 0;
 }
 h = c[Y >> 2] | 0;
 if ((h | 0) != (g | 0)) c[Y >> 2] = h + (~(((0 - g + (h + -1280) | 0) >>> 0) / 1280 | 0) * 1280 | 0);
 Ae(g);
 i = Z;
 return j | 0;
}
function fd(b, d, e, f, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0.0, t = 0.0, u = 0.0, v = 0.0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0.0;
 K = i;
 i = i + 112 | 0;
 p = K + 96 | 0;
 G = K + 72 | 0;
 I = K + 48 | 0;
 H = K + 24 | 0;
 J = K;
 k = c[b >> 2] | 0;
 k = (c[k + 4 >> 2] | 0) - (c[k >> 2] | 0) | 0;
 l = k >> 2;
 c[p >> 2] = 0;
 r = p + 4 | 0;
 c[r >> 2] = 0;
 c[p + 8 >> 2] = 0;
 do if (l) if (l >>> 0 > 1073741823) we(p); else {
  E = ye(k) | 0;
  c[p >> 2] = E;
  F = E + (l << 2) | 0;
  c[p + 8 >> 2] = F;
  pg(E | 0, 0, k | 0) | 0;
  c[r >> 2] = F;
  break;
 } while (0);
 o = j + 4 | 0;
 k = c[o >> 2] | 0;
 l = c[j >> 2] | 0;
 m = (k - l | 0) / 12 | 0;
 if (m >>> 0 >= 3) {
  if (m >>> 0 > 3 ? (q = l + 36 | 0, (k | 0) != (q | 0)) : 0) {
   l = k;
   while (1) {
    k = l + -12 | 0;
    c[o >> 2] = k;
    m = c[k >> 2] | 0;
    n = m;
    if (m) {
     k = l + -8 | 0;
     l = c[k >> 2] | 0;
     if ((l | 0) != (m | 0)) c[k >> 2] = l + (~((l + -4 - n | 0) >>> 2) << 2);
     Ae(m);
     k = c[o >> 2] | 0;
    }
    if ((k | 0) == (q | 0)) break; else l = k;
   }
  }
 } else ge(j, 3 - m | 0, p);
 k = c[p >> 2] | 0;
 l = k;
 if (k) {
  m = c[r >> 2] | 0;
  if ((m | 0) != (k | 0)) c[r >> 2] = m + (~((m + -4 - l | 0) >>> 2) << 2);
  Ae(k);
 };
 c[G >> 2] = 0;
 c[G + 4 >> 2] = 0;
 c[G + 8 >> 2] = 0;
 c[G + 12 >> 2] = 0;
 c[G + 16 >> 2] = 0;
 c[G + 20 >> 2] = 0;
 c[I >> 2] = 0;
 c[I + 4 >> 2] = 0;
 c[I + 8 >> 2] = 0;
 c[I + 12 >> 2] = 0;
 c[I + 16 >> 2] = 0;
 c[I + 20 >> 2] = 0;
 c[H >> 2] = 0;
 c[H + 4 >> 2] = 0;
 c[H + 8 >> 2] = 0;
 c[H + 12 >> 2] = 0;
 c[H + 16 >> 2] = 0;
 c[H + 20 >> 2] = 0;
 c[J >> 2] = 0;
 c[J + 4 >> 2] = 0;
 c[J + 8 >> 2] = 0;
 c[J + 12 >> 2] = 0;
 c[J + 16 >> 2] = 0;
 c[J + 20 >> 2] = 0;
 if (!f) {
  i = K;
  return;
 }
 w = (e | 0) == 0;
 x = G + 8 | 0;
 y = G + 16 | 0;
 z = H + 8 | 0;
 A = H + 16 | 0;
 B = 0 - e | 0;
 C = I + 8 | 0;
 D = I + 16 | 0;
 E = J + 8 | 0;
 F = J + 16 | 0;
 k = 0;
 a : while (1) {
  if (w) k = k + 1 | 0; else {
   r = _(k, e) | 0;
   k = k + 1 | 0;
   p = k >>> 0 < f >>> 0 ? e : B;
   q = 0;
   do {
    n = q + r | 0;
    q = q + 1 | 0;
    o = q >>> 0 < e >>> 0;
    m = (o ? 1 : -1) + n | 0;
    l = c[b >> 2] | 0;
    L = c[l >> 2] | 0;
    s = +g[L + (n << 2) >> 2] - +g[L + (m << 2) >> 2];
    L = c[l + 12 >> 2] | 0;
    u = +g[L + (n << 2) >> 2] - +g[L + (m << 2) >> 2];
    l = c[l + 24 >> 2] | 0;
    v = +g[l + (n << 2) >> 2] - +g[l + (m << 2) >> 2];
    if ((a[520] | 0) == 0 ? (ya(520) | 0) != 0 : 0) {
     h[44] = 0.0;
     h[45] = 11.38708334481672;
     h[46] = 25.937272956337438;
     h[47] = 40.48746256785815;
     h[48] = 55.03765217937887;
     h[49] = 69.58784179089959;
     h[50] = 84.13803140242031;
     h[51] = 98.68822101394103;
     h[52] = 113.23841062546175;
     h[53] = 127.78860023698248;
     h[54] = 142.33878984850318;
     h[55] = 156.8889794600239;
     h[56] = 171.43916907154463;
     h[57] = 185.98935868306535;
     h[58] = 200.53954829458607;
     h[59] = 215.0897379061068;
     h[60] = 229.6399275176275;
     h[61] = 244.19011712914823;
     h[62] = 258.7403067406689;
     h[63] = 273.2904963521896;
     h[64] = 287.8406859637103;
     Da(520);
    }
    t = s * .758304045695;
    s = +N(+t);
    if (!(s < 1.0e4)) {
     k = 27;
     break a;
    }
    l = ~~s;
    if ((l | 0) < 20) {
     M = +h[352 + (l << 3) >> 3];
     s = M + (s - +(l | 0)) * (+h[352 + (l + 1 << 3) >> 3] - M);
    } else s = +h[64];
    h[G >> 3] = t < 0.0 ? -s : s;
    if ((a[696] | 0) == 0 ? (ya(696) | 0) != 0 : 0) {
     h[66] = 0.0;
     h[67] = 1.4103373714040413;
     h[68] = 2.1187462581064413;
     h[69] = 2.8271551448088412;
     h[70] = 3.535564031511241;
     h[71] = 4.243972918213641;
     h[72] = 4.952381804916041;
     h[73] = 5.660790691618441;
     h[74] = 6.369199578320841;
     h[75] = 7.077608465023241;
     h[76] = 7.786017351725641;
     h[77] = 8.49442623842804;
     h[78] = 9.202835125130441;
     h[79] = 9.911244011832842;
     h[80] = 10.619652898535243;
     h[81] = 11.328061785237644;
     h[82] = 12.036470671940044;
     h[83] = 12.744879558642445;
     h[84] = 13.453288445344846;
     h[85] = 14.161697332047247;
     h[86] = 14.870106218749648;
     Da(696);
    }
    t = u * 2.28148649801;
    s = +N(+t);
    if (!(s < 1.0e4)) {
     k = 35;
     break a;
    }
    l = ~~s;
    if ((l | 0) < 20) {
     M = +h[528 + (l << 3) >> 3];
     s = M + (s - +(l | 0)) * (+h[528 + (l + 1 << 3) >> 3] - M);
    } else s = +h[86];
    h[x >> 3] = t < 0.0 ? -s : s;
    h[y >> 3] = v * 1.87816926918;
    L = c[d >> 2] | 0;
    l = c[L >> 2] | 0;
    s = +g[l + (n << 2) >> 2] - +g[l + (m << 2) >> 2];
    l = c[L + 12 >> 2] | 0;
    u = +g[l + (n << 2) >> 2] - +g[l + (m << 2) >> 2];
    L = c[L + 24 >> 2] | 0;
    v = +g[L + (n << 2) >> 2] - +g[L + (m << 2) >> 2];
    if ((a[520] | 0) == 0 ? (ya(520) | 0) != 0 : 0) {
     h[44] = 0.0;
     h[45] = 11.38708334481672;
     h[46] = 25.937272956337438;
     h[47] = 40.48746256785815;
     h[48] = 55.03765217937887;
     h[49] = 69.58784179089959;
     h[50] = 84.13803140242031;
     h[51] = 98.68822101394103;
     h[52] = 113.23841062546175;
     h[53] = 127.78860023698248;
     h[54] = 142.33878984850318;
     h[55] = 156.8889794600239;
     h[56] = 171.43916907154463;
     h[57] = 185.98935868306535;
     h[58] = 200.53954829458607;
     h[59] = 215.0897379061068;
     h[60] = 229.6399275176275;
     h[61] = 244.19011712914823;
     h[62] = 258.7403067406689;
     h[63] = 273.2904963521896;
     h[64] = 287.8406859637103;
     Da(520);
    }
    t = s * .758304045695;
    s = +N(+t);
    if (!(s < 1.0e4)) {
     k = 43;
     break a;
    }
    l = ~~s;
    if ((l | 0) < 20) {
     M = +h[352 + (l << 3) >> 3];
     s = M + (s - +(l | 0)) * (+h[352 + (l + 1 << 3) >> 3] - M);
    } else s = +h[64];
    h[H >> 3] = t < 0.0 ? -s : s;
    if ((a[696] | 0) == 0 ? (ya(696) | 0) != 0 : 0) {
     h[66] = 0.0;
     h[67] = 1.4103373714040413;
     h[68] = 2.1187462581064413;
     h[69] = 2.8271551448088412;
     h[70] = 3.535564031511241;
     h[71] = 4.243972918213641;
     h[72] = 4.952381804916041;
     h[73] = 5.660790691618441;
     h[74] = 6.369199578320841;
     h[75] = 7.077608465023241;
     h[76] = 7.786017351725641;
     h[77] = 8.49442623842804;
     h[78] = 9.202835125130441;
     h[79] = 9.911244011832842;
     h[80] = 10.619652898535243;
     h[81] = 11.328061785237644;
     h[82] = 12.036470671940044;
     h[83] = 12.744879558642445;
     h[84] = 13.453288445344846;
     h[85] = 14.161697332047247;
     h[86] = 14.870106218749648;
     Da(696);
    }
    t = u * 2.28148649801;
    s = +N(+t);
    if (!(s < 1.0e4)) {
     k = 51;
     break a;
    }
    l = ~~s;
    if ((l | 0) < 20) {
     M = +h[528 + (l << 3) >> 3];
     s = M + (s - +(l | 0)) * (+h[528 + (l + 1 << 3) >> 3] - M);
    } else s = +h[86];
    h[z >> 3] = t < 0.0 ? -s : s;
    h[A >> 3] = v * 1.87816926918;
    m = n + p | 0;
    L = c[b >> 2] | 0;
    l = c[L >> 2] | 0;
    s = +g[l + (n << 2) >> 2] - +g[l + (m << 2) >> 2];
    l = c[L + 12 >> 2] | 0;
    u = +g[l + (n << 2) >> 2] - +g[l + (m << 2) >> 2];
    L = c[L + 24 >> 2] | 0;
    v = +g[L + (n << 2) >> 2] - +g[L + (m << 2) >> 2];
    do if (!(a[520] | 0)) {
     if (!(ya(520) | 0)) break;
     h[44] = 0.0;
     h[45] = 11.38708334481672;
     h[46] = 25.937272956337438;
     h[47] = 40.48746256785815;
     h[48] = 55.03765217937887;
     h[49] = 69.58784179089959;
     h[50] = 84.13803140242031;
     h[51] = 98.68822101394103;
     h[52] = 113.23841062546175;
     h[53] = 127.78860023698248;
     h[54] = 142.33878984850318;
     h[55] = 156.8889794600239;
     h[56] = 171.43916907154463;
     h[57] = 185.98935868306535;
     h[58] = 200.53954829458607;
     h[59] = 215.0897379061068;
     h[60] = 229.6399275176275;
     h[61] = 244.19011712914823;
     h[62] = 258.7403067406689;
     h[63] = 273.2904963521896;
     h[64] = 287.8406859637103;
     Da(520);
    } while (0);
    t = s * .758304045695;
    s = +N(+t);
    if (!(s < 1.0e4)) {
     k = 59;
     break a;
    }
    l = ~~s;
    if ((l | 0) < 20) {
     M = +h[352 + (l << 3) >> 3];
     s = M + (s - +(l | 0)) * (+h[352 + (l + 1 << 3) >> 3] - M);
    } else s = +h[64];
    h[I >> 3] = t < 0.0 ? -s : s;
    do if (!(a[696] | 0)) {
     if (!(ya(696) | 0)) break;
     h[66] = 0.0;
     h[67] = 1.4103373714040413;
     h[68] = 2.1187462581064413;
     h[69] = 2.8271551448088412;
     h[70] = 3.535564031511241;
     h[71] = 4.243972918213641;
     h[72] = 4.952381804916041;
     h[73] = 5.660790691618441;
     h[74] = 6.369199578320841;
     h[75] = 7.077608465023241;
     h[76] = 7.786017351725641;
     h[77] = 8.49442623842804;
     h[78] = 9.202835125130441;
     h[79] = 9.911244011832842;
     h[80] = 10.619652898535243;
     h[81] = 11.328061785237644;
     h[82] = 12.036470671940044;
     h[83] = 12.744879558642445;
     h[84] = 13.453288445344846;
     h[85] = 14.161697332047247;
     h[86] = 14.870106218749648;
     Da(696);
    } while (0);
    t = u * 2.28148649801;
    s = +N(+t);
    if (!(s < 1.0e4)) {
     k = 67;
     break a;
    }
    l = ~~s;
    if ((l | 0) < 20) {
     M = +h[528 + (l << 3) >> 3];
     s = M + (s - +(l | 0)) * (+h[528 + (l + 1 << 3) >> 3] - M);
    } else s = +h[86];
    h[C >> 3] = t < 0.0 ? -s : s;
    h[D >> 3] = v * 1.87816926918;
    L = c[d >> 2] | 0;
    l = c[L >> 2] | 0;
    s = +g[l + (n << 2) >> 2] - +g[l + (m << 2) >> 2];
    l = c[L + 12 >> 2] | 0;
    u = +g[l + (n << 2) >> 2] - +g[l + (m << 2) >> 2];
    L = c[L + 24 >> 2] | 0;
    v = +g[L + (n << 2) >> 2] - +g[L + (m << 2) >> 2];
    do if (!(a[520] | 0)) {
     if (!(ya(520) | 0)) break;
     h[44] = 0.0;
     h[45] = 11.38708334481672;
     h[46] = 25.937272956337438;
     h[47] = 40.48746256785815;
     h[48] = 55.03765217937887;
     h[49] = 69.58784179089959;
     h[50] = 84.13803140242031;
     h[51] = 98.68822101394103;
     h[52] = 113.23841062546175;
     h[53] = 127.78860023698248;
     h[54] = 142.33878984850318;
     h[55] = 156.8889794600239;
     h[56] = 171.43916907154463;
     h[57] = 185.98935868306535;
     h[58] = 200.53954829458607;
     h[59] = 215.0897379061068;
     h[60] = 229.6399275176275;
     h[61] = 244.19011712914823;
     h[62] = 258.7403067406689;
     h[63] = 273.2904963521896;
     h[64] = 287.8406859637103;
     Da(520);
    } while (0);
    t = s * .758304045695;
    s = +N(+t);
    if (!(s < 1.0e4)) {
     k = 75;
     break a;
    }
    l = ~~s;
    if ((l | 0) < 20) {
     M = +h[352 + (l << 3) >> 3];
     s = M + (s - +(l | 0)) * (+h[352 + (l + 1 << 3) >> 3] - M);
    } else s = +h[64];
    h[J >> 3] = t < 0.0 ? -s : s;
    do if (!(a[696] | 0)) {
     if (!(ya(696) | 0)) break;
     h[66] = 0.0;
     h[67] = 1.4103373714040413;
     h[68] = 2.1187462581064413;
     h[69] = 2.8271551448088412;
     h[70] = 3.535564031511241;
     h[71] = 4.243972918213641;
     h[72] = 4.952381804916041;
     h[73] = 5.660790691618441;
     h[74] = 6.369199578320841;
     h[75] = 7.077608465023241;
     h[76] = 7.786017351725641;
     h[77] = 8.49442623842804;
     h[78] = 9.202835125130441;
     h[79] = 9.911244011832842;
     h[80] = 10.619652898535243;
     h[81] = 11.328061785237644;
     h[82] = 12.036470671940044;
     h[83] = 12.744879558642445;
     h[84] = 13.453288445344846;
     h[85] = 14.161697332047247;
     h[86] = 14.870106218749648;
     Da(696);
    } while (0);
    t = u * 2.28148649801;
    s = +N(+t);
    if (!(s < 1.0e4)) {
     k = 83;
     break a;
    }
    l = ~~s;
    if ((l | 0) < 20) {
     M = +h[528 + (l << 3) >> 3];
     s = M + (s - +(l | 0)) * (+h[528 + (l + 1 << 3) >> 3] - M);
    } else s = +h[86];
    u = t < 0.0 ? -s : s;
    h[E >> 3] = u;
    v = v * 1.87816926918;
    h[F >> 3] = v;
    L = c[j >> 2] | 0;
    M = +N(+(+h[G >> 3]));
    M = M + +N(+(+h[I >> 3]));
    t = +N(+(+h[H >> 3]));
    t = t + +N(+(+h[J >> 3]));
    g[(c[L >> 2] | 0) + (n << 2) >> 2] = t < M ? t : M;
    M = +N(+(+h[x >> 3]));
    M = M + +N(+(+h[C >> 3]));
    u = +N(+(+h[z >> 3])) + +N(+u);
    g[(c[L + 12 >> 2] | 0) + (n << 2) >> 2] = u < M ? u : M;
    M = +N(+(+h[y >> 3]));
    M = M + +N(+(+h[D >> 3]));
    v = +N(+(+h[A >> 3])) + +N(+v);
    g[(c[L + 24 >> 2] | 0) + (n << 2) >> 2] = v < M ? v : M;
   } while (o);
  }
  if (k >>> 0 >= f >>> 0) {
   k = 89;
   break;
  }
 }
 if ((k | 0) == 27) Aa(40408, 36021, 303, 40419); else if ((k | 0) == 35) Aa(40408, 36021, 303, 40419); else if ((k | 0) == 43) Aa(40408, 36021, 303, 40419); else if ((k | 0) == 51) Aa(40408, 36021, 303, 40419); else if ((k | 0) == 59) Aa(40408, 36021, 303, 40419); else if ((k | 0) == 67) Aa(40408, 36021, 303, 40419); else if ((k | 0) == 75) Aa(40408, 36021, 303, 40419); else if ((k | 0) == 83) Aa(40408, 36021, 303, 40419); else if ((k | 0) == 89) {
  i = K;
  return;
 }
}

function Gc(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, va = 0, wa = 0, xa = 0, ya = 0, za = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 0;
 Ia = i;
 i = i + 4512 | 0;
 ta = Ia + 3488 | 0;
 sa = Ia + 2448 | 0;
 Ha = Ia + 3472 | 0;
 q = Ia + 2444 | 0;
 Ca = Ia + 2360 | 0;
 Ga = Ia + 1320 | 0;
 t = Ia + 32 | 0;
 Ba = Ia + 16 | 0;
 Ea = Ia;
 ra = Ia + 2376 | 0;
 va = Ia + 1332 | 0;
 ua = Ia + 40 | 0;
 o = c[b + 84 >> 2] | 0;
 ya = b + 80 | 0;
 p = c[ya >> 2] | 0;
 xa = o - p | 0;
 za = (xa | 0) / 40 | 0;
 l = f + 4 | 0;
 m = c[l >> 2] | 0;
 h = c[f >> 2] | 0;
 j = (m - h | 0) / 1280 | 0;
 if (za >>> 0 <= j >>> 0) {
  if (za >>> 0 < j >>> 0 ? (k = h + (za * 1280 | 0) | 0, (m | 0) != (k | 0)) : 0) c[l >> 2] = m + (~(((0 - k + (m + -1280) | 0) >>> 0) / 1280 | 0) * 1280 | 0);
 } else Ed(f, za - j | 0);
 h = g + 4 | 0;
 j = c[h >> 2] | 0;
 k = c[g >> 2] | 0;
 l = (j - k | 0) / 1280 | 0;
 if (za >>> 0 <= l >>> 0) {
  if (za >>> 0 < l >>> 0 ? (n = k + (za * 1280 | 0) | 0, (j | 0) != (n | 0)) : 0) c[h >> 2] = j + (~(((0 - n + (j + -1280) | 0) >>> 0) / 1280 | 0) * 1280 | 0);
 } else Ed(g, za - l | 0);
 c[Ha >> 2] = 0;
 Da = Ha + 4 | 0;
 c[Da >> 2] = 0;
 c[Ha + 8 >> 2] = 0;
 m = (o | 0) == (p | 0);
 if (m) h = 0; else {
  if (za >>> 0 > 4177983) we(Ha);
  h = ye(za * 1028 | 0) | 0;
  c[Da >> 2] = h;
  c[Ha >> 2] = h;
  k = h + (za * 1028 | 0) | 0;
  c[Ha + 8 >> 2] = k;
  j = za;
  l = h;
  while (1) {
   pg(l | 0, 0, 1024) | 0;
   c[l + 1024 >> 2] = 1;
   j = j + -1 | 0;
   if (!j) break; else l = l + 1028 | 0;
  }
  c[Da >> 2] = k;
 }
 Ac(b, h);
 c[q >> 2] = za;
 h = za * 257 | 0;
 c[Ga >> 2] = 0;
 wa = Ga + 4 | 0;
 c[wa >> 2] = 0;
 c[Ga + 8 >> 2] = 0;
 if (m) h = 0; else {
  if ((xa | 0) < 0) we(Ga);
  j = ye(h) | 0;
  c[wa >> 2] = j;
  c[Ga >> 2] = j;
  c[Ga + 8 >> 2] = j + h;
  do {
   a[j >> 0] = 0;
   j = (c[wa >> 2] | 0) + 1 | 0;
   c[wa >> 2] = j;
   h = h + -1 | 0;
  } while ((h | 0) != 0);
  h = c[Ga >> 2] | 0;
 }
 Dc(c[Ha >> 2] | 0, q, Ca, h) | 0;
 qa = c[q >> 2] | 0;
 h = qa + za | 0;
 j = c[Da >> 2] | 0;
 k = c[Ha >> 2] | 0;
 l = (j - k | 0) / 1028 | 0;
 if (h >>> 0 <= l >>> 0) {
  if (h >>> 0 < l >>> 0 ? (r = k + (h * 1028 | 0) | 0, (j | 0) != (r | 0)) : 0) c[Da >> 2] = j + (~(((j + -1028 - r | 0) >>> 0) / 1028 | 0) * 1028 | 0);
 } else Fd(Ha, h - l | 0);
 h = h * 257 | 0;
 j = c[wa >> 2] | 0;
 k = c[Ga >> 2] | 0;
 l = j - k | 0;
 if (h >>> 0 <= l >>> 0) {
  if (h >>> 0 < l >>> 0 ? (s = k + h | 0, (j | 0) != (s | 0)) : 0) c[wa >> 2] = s;
 } else se(Ga, h - l | 0);
 Bc(b, (c[Ha >> 2] | 0) + (qa * 1028 | 0) | 0);
 c[t >> 2] = za;
 Dc((c[Ha >> 2] | 0) + (qa * 1028 | 0) | 0, t, Ba, (c[Ga >> 2] | 0) + (qa * 257 | 0) | 0) | 0;
 oa = (c[t >> 2] | 0) + qa | 0;
 h = c[Da >> 2] | 0;
 k = c[Ha >> 2] | 0;
 j = (h - k | 0) / 1028 | 0;
 if (oa >>> 0 <= j >>> 0) {
  if (oa >>> 0 < j >>> 0 ? (u = k + (oa * 1028 | 0) | 0, (h | 0) != (u | 0)) : 0) {
   h = h + (~(((h + -1028 - u | 0) >>> 0) / 1028 | 0) * 1028 | 0) | 0;
   c[Da >> 2] = h;
  }
 } else {
  Fd(Ha, oa - j | 0);
  h = c[Da >> 2] | 0;
  k = c[Ha >> 2] | 0;
 }
 if ((h | 0) == (k | 0)) h = 0; else {
  n = (h - k | 0) / 1028 | 0;
  o = 0;
  h = 0;
  do {
   m = 1;
   l = 0;
   j = 0;
   while (1) {
    j = ((c[k + (o * 1028 | 0) + (l << 2) >> 2] | 0) != 0 & 1) + j | 0;
    l = m + 1 | 0;
    if ((l | 0) == 257) break; else {
     pa = m;
     m = l;
     l = pa;
    }
   }
   h = j + h | 0;
   o = o + 1 | 0;
  } while (o >>> 0 < n >>> 0);
 }
 k = (oa * 17 | 0) + 2 + h | 0;
 h = za << 1;
 na = h + 6 | 0;
 h = h + 10 + k | 0;
 c[Ea >> 2] = 0;
 pa = Ea + 4 | 0;
 c[pa >> 2] = 0;
 c[Ea + 8 >> 2] = 0;
 if ((h | 0) < 0) we(Ea);
 j = ye(h) | 0;
 c[pa >> 2] = j;
 c[Ea >> 2] = j;
 c[Ea + 8 >> 2] = j + h;
 do {
  a[j >> 0] = 0;
  j = (c[pa >> 2] | 0) + 1 | 0;
  c[pa >> 2] = j;
  h = h + -1 | 0;
 } while ((h | 0) != 0);
 a[c[Ea >> 2] >> 0] = -1;
 a[(c[Ea >> 2] | 0) + 1 >> 0] = -60;
 a[(c[Ea >> 2] | 0) + 2 >> 0] = k >>> 8;
 a[(c[Ea >> 2] | 0) + 3 >> 0] = k;
 if (!oa) j = 4; else {
  H = ta + 4 | 0;
  I = ra + 4 | 0;
  J = ta + 8 | 0;
  K = ra + 8 | 0;
  L = ta + 12 | 0;
  M = ra + 12 | 0;
  N = ta + 16 | 0;
  O = ra + 16 | 0;
  P = ta + 20 | 0;
  Q = ra + 20 | 0;
  R = ta + 24 | 0;
  S = ra + 24 | 0;
  T = ta + 28 | 0;
  U = ra + 28 | 0;
  V = ta + 32 | 0;
  W = ra + 32 | 0;
  X = ta + 36 | 0;
  Y = ra + 36 | 0;
  Z = ta + 40 | 0;
  _ = ra + 40 | 0;
  $ = ta + 44 | 0;
  aa = ra + 44 | 0;
  ba = ta + 48 | 0;
  ca = ra + 48 | 0;
  da = ta + 52 | 0;
  ea = ra + 52 | 0;
  fa = ta + 56 | 0;
  ga = ra + 56 | 0;
  ha = ta + 60 | 0;
  ia = ra + 60 | 0;
  ja = ta + 64 | 0;
  ka = (xa | 0) > 0;
  la = ra + 64 | 0;
  ma = 0;
  G = 4;
  while (1) {
   F = ma >>> 0 < qa >>> 0;
   n = F ? 0 : qa;
   h = ra;
   j = h + 68 | 0;
   do {
    c[h >> 2] = 0;
    h = h + 4 | 0;
   } while ((h | 0) < (j | 0));
   pg(va | 0, 0, 1028) | 0;
   k = ma * 257 | 0;
   l = c[Ga >> 2] | 0;
   j = 0;
   do {
    h = a[l + (j + k) >> 0] | 0;
    if (h << 24 >> 24) {
     E = ra + ((h & 255) << 2) | 0;
     c[E >> 2] = (c[E >> 2] | 0) + 1;
    }
    j = j + 1 | 0;
   } while ((j | 0) != 257);
   h = ta;
   j = h + 60 | 0;
   do {
    c[h >> 2] = 0;
    h = h + 4 | 0;
   } while ((h | 0) < (j | 0));
   j = c[ra >> 2] | 0;
   c[H >> 2] = j;
   r = c[I >> 2] | 0;
   j = r + j | 0;
   c[J >> 2] = j;
   s = c[K >> 2] | 0;
   j = s + j | 0;
   c[L >> 2] = j;
   b = c[M >> 2] | 0;
   j = b + j | 0;
   c[N >> 2] = j;
   t = c[O >> 2] | 0;
   j = t + j | 0;
   c[P >> 2] = j;
   u = c[Q >> 2] | 0;
   j = u + j | 0;
   c[R >> 2] = j;
   v = c[S >> 2] | 0;
   j = v + j | 0;
   c[T >> 2] = j;
   w = c[U >> 2] | 0;
   j = w + j | 0;
   c[V >> 2] = j;
   x = c[W >> 2] | 0;
   j = x + j | 0;
   c[X >> 2] = j;
   y = c[Y >> 2] | 0;
   j = y + j | 0;
   c[Z >> 2] = j;
   z = c[_ >> 2] | 0;
   j = z + j | 0;
   c[$ >> 2] = j;
   A = c[aa >> 2] | 0;
   j = A + j | 0;
   c[ba >> 2] = j;
   B = c[ca >> 2] | 0;
   j = B + j | 0;
   c[da >> 2] = j;
   C = c[ea >> 2] | 0;
   j = C + j | 0;
   c[fa >> 2] = j;
   D = c[ga >> 2] | 0;
   j = D + j | 0;
   c[ha >> 2] = j;
   E = c[ia >> 2] | 0;
   c[ja >> 2] = E + j;
   j = 0;
   do {
    h = a[l + (j + k) >> 0] | 0;
    if (h << 24 >> 24) {
     p = ta + ((h & 255) << 2) | 0;
     q = c[p >> 2] | 0;
     c[p >> 2] = q + 1;
     c[va + (q << 2) >> 2] = j;
    }
    j = j + 1 | 0;
   } while ((j | 0) != 257);
   pg(ua | 0, -1, 256) | 0;
   m = r;
   h = 1;
   j = 0;
   while (1) {
    if (m) {
     k = m;
     l = j;
     while (1) {
      k = k + -1 | 0;
      c[sa + (l << 2) >> 2] = h;
      if (!k) break; else l = l + 1 | 0;
     }
     j = m + j | 0;
    }
    h = h + 1 | 0;
    if ((h | 0) == 17) break;
    m = c[ra + (h << 2) >> 2] | 0;
   }
   q = ma - n | 0;
   if (j) {
    p = j + -1 | 0;
    c[sa + (p << 2) >> 2] = 0;
    o = c[sa >> 2] | 0;
    if (o) {
     n = o;
     h = 0;
     k = 0;
     l = o;
     while (1) {
      if ((n | 0) != (l | 0)) do {
       h = h << 1;
       l = l + 1 | 0;
      } while ((n | 0) != (l | 0));
      while (1) {
       m = k + 1 | 0;
       c[ta + (k << 2) >> 2] = h;
       h = h + 1 | 0;
       l = c[sa + (m << 2) >> 2] | 0;
       if ((l | 0) == (n | 0)) k = m; else {
        k = m;
        break;
       }
      }
      m = n + 1 | 0;
      if (!l) break; else {
       n = l;
       h = h << 1;
       l = m;
      }
     }
    }
    if ((j | 0) > 1 ? (n = c[va >> 2] | 0, a[ua + n >> 0] = o, c[ua + 256 + (n << 2) >> 2] = c[ta >> 2], (p | 0) != 1) : 0) {
     h = 1;
     do {
      o = c[va + (h << 2) >> 2] | 0;
      a[ua + o >> 0] = c[sa + (h << 2) >> 2];
      c[ua + 256 + (o << 2) >> 2] = c[ta + (h << 2) >> 2];
      h = h + 1 | 0;
     } while ((h | 0) != (p | 0));
    }
   }
   if (ka) {
    h = 0;
    do {
     if (F) {
      if ((c[Ca + (h << 2) >> 2] | 0) == (q | 0)) tg((c[f >> 2] | 0) + (h * 1280 | 0) | 0, ua | 0, 1280) | 0;
     } else if ((c[Ba + (h << 2) >> 2] | 0) == (q | 0)) tg((c[g >> 2] | 0) + (h * 1280 | 0) | 0, ua | 0, 1280) | 0;
     h = h + 1 | 0;
    } while ((h | 0) < (za | 0));
   }
   do if (!(c[la >> 2] | 0)) if (!E) if (!D) if (!C) if (!B) {
    if (A) {
     k = 11;
     break;
    }
    if (z) {
     k = 10;
     break;
    }
    if (y) {
     k = 9;
     break;
    }
    if (x) {
     k = 8;
     break;
    }
    if (w) {
     k = 7;
     break;
    }
    if (v) {
     k = 6;
     break;
    }
    if (u) {
     k = 5;
     break;
    }
    if (t) {
     k = 4;
     break;
    }
    if (b) {
     k = 3;
     break;
    }
    if (s) {
     k = 2;
     break;
    }
    k = (r | 0) != 0 & 1;
   } else k = 12; else k = 13; else k = 14; else k = 15; else k = 16; while (0);
   j = ra + (k << 2) | 0;
   c[j >> 2] = (c[j >> 2] | 0) + -1;
   j = 0;
   h = 0;
   while (1) {
    h = (c[ra + (j << 2) >> 2] | 0) + h | 0;
    if ((j | 0) == (k | 0)) break; else j = j + 1 | 0;
   }
   a[(c[Ea >> 2] | 0) + G >> 0] = F ? ma : ma + 16 - qa | 0;
   a[(c[Ea >> 2] | 0) + (G + 1) >> 0] = c[I >> 2];
   a[(c[Ea >> 2] | 0) + (G + 2) >> 0] = c[K >> 2];
   a[(c[Ea >> 2] | 0) + (G + 3) >> 0] = c[M >> 2];
   a[(c[Ea >> 2] | 0) + (G + 4) >> 0] = c[O >> 2];
   a[(c[Ea >> 2] | 0) + (G + 5) >> 0] = c[Q >> 2];
   a[(c[Ea >> 2] | 0) + (G + 6) >> 0] = c[S >> 2];
   a[(c[Ea >> 2] | 0) + (G + 7) >> 0] = c[U >> 2];
   a[(c[Ea >> 2] | 0) + (G + 8) >> 0] = c[W >> 2];
   a[(c[Ea >> 2] | 0) + (G + 9) >> 0] = c[Y >> 2];
   a[(c[Ea >> 2] | 0) + (G + 10) >> 0] = c[_ >> 2];
   a[(c[Ea >> 2] | 0) + (G + 11) >> 0] = c[aa >> 2];
   a[(c[Ea >> 2] | 0) + (G + 12) >> 0] = c[ca >> 2];
   a[(c[Ea >> 2] | 0) + (G + 13) >> 0] = c[ea >> 2];
   a[(c[Ea >> 2] | 0) + (G + 14) >> 0] = c[ga >> 2];
   a[(c[Ea >> 2] | 0) + (G + 15) >> 0] = c[ia >> 2];
   a[(c[Ea >> 2] | 0) + (G + 16) >> 0] = c[la >> 2];
   j = G + 17 | 0;
   if (h) {
    k = h + 17 | 0;
    l = 0;
    while (1) {
     a[(c[Ea >> 2] | 0) + j >> 0] = c[va + (l << 2) >> 2];
     l = l + 1 | 0;
     if ((l | 0) == (h | 0)) break; else j = j + 1 | 0;
    }
    j = k + G | 0;
   }
   ma = ma + 1 | 0;
   if ((ma | 0) == (oa | 0)) break; else G = j;
  }
 }
 a[(c[Ea >> 2] | 0) + j >> 0] = -1;
 a[(c[Ea >> 2] | 0) + (j + 1) >> 0] = -38;
 a[(c[Ea >> 2] | 0) + (j + 2) >> 0] = na >>> 8;
 a[(c[Ea >> 2] | 0) + (j + 3) >> 0] = na;
 h = j + 5 | 0;
 a[(c[Ea >> 2] | 0) + (j + 4) >> 0] = za;
 if ((xa | 0) > 0) {
  j = j + ((xa | 0) > 40 ? za << 1 : 2) | 0;
  k = 0;
  while (1) {
   a[(c[Ea >> 2] | 0) + h >> 0] = c[(c[ya >> 2] | 0) + (k * 40 | 0) >> 2];
   a[(c[Ea >> 2] | 0) + (h + 1) >> 0] = c[Ca + (k << 2) >> 2] << 4 | c[Ba + (k << 2) >> 2];
   k = k + 1 | 0;
   if ((k | 0) >= (za | 0)) break; else h = h + 2 | 0;
  }
  h = j + 5 | 0;
 }
 a[(c[Ea >> 2] | 0) + h >> 0] = 0;
 a[(c[Ea >> 2] | 0) + (h + 1) >> 0] = 63;
 m = h + 3 | 0;
 a[(c[Ea >> 2] | 0) + (h + 2) >> 0] = 0;
 j = c[Ea >> 2] | 0;
 if ((m | 0) != ((c[pa >> 2] | 0) - j | 0)) Aa(39541, 35760, 451, 39560);
 a : do if (m >>> 0 > 1073741824) {
  k = j;
  h = 0;
  while (1) {
   if ((fb[d & 7](e, k, 1073741824) | 0) != 1073741824) {
    k = 0;
    break a;
   }
   h = h + 1073741824 | 0;
   l = m - h | 0;
   k = j + h | 0;
   if (l >>> 0 <= 1073741824) {
    j = k;
    Fa = 97;
    break;
   }
  }
 } else {
  l = m;
  h = 0;
  Fa = 97;
 } while (0);
 if ((Fa | 0) == 97) if ((h | 0) == (m | 0)) k = 1; else k = (fb[d & 7](e, j, l) | 0) == (l | 0);
 h = c[Ea >> 2] | 0;
 if (h) {
  if ((c[pa >> 2] | 0) != (h | 0)) c[pa >> 2] = h;
  Ae(h);
 }
 h = c[Ga >> 2] | 0;
 if (h) {
  if ((c[wa >> 2] | 0) != (h | 0)) c[wa >> 2] = h;
  Ae(h);
 }
 h = c[Ha >> 2] | 0;
 if (!h) {
  i = Ia;
  return k | 0;
 }
 j = c[Da >> 2] | 0;
 if ((j | 0) != (h | 0)) c[Da >> 2] = j + (~(((j + -1028 - h | 0) >>> 0) / 1028 | 0) * 1028 | 0);
 Ae(h);
 i = Ia;
 return k | 0;
}

function dc(b, e, f, j, k, l) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 j = j | 0;
 k = +k;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0;
 Z = i;
 i = i + 96 | 0;
 Q = Z + 8 | 0;
 D = Z;
 t = Z + 80 | 0;
 u = Z + 76 | 0;
 F = Z + 64 | 0;
 P = Z + 52 | 0;
 Y = Z + 40 | 0;
 U = Z + 28 | 0;
 X = Z + 16 | 0;
 c[b >> 2] = 26484;
 V = b + 4 | 0;
 c[V >> 2] = e;
 W = b + 8 | 0;
 c[W >> 2] = f;
 g[b + 12 >> 2] = k;
 R = b + 16 | 0;
 S = b + 20 | 0;
 T = b + 28 | 0;
 N = b + 40 | 0;
 m = b + 52 | 0;
 o = R;
 p = o + 36 | 0;
 do {
  c[o >> 2] = 0;
  o = o + 4 | 0;
 } while ((o | 0) < (p | 0));
 c[m >> 2] = e;
 c[b + 56 >> 2] = f;
 c[b + 60 >> 2] = _(f, e) | 0;
 c[b + 64 >> 2] = 3;
 c[b + 68 >> 2] = ((e + 2 | 0) >>> 0) / 3 | 0;
 c[b + 72 >> 2] = ((f + 2 | 0) >>> 0) / 3 | 0;
 M = b + 76 | 0;
 m = b + 80 | 0;
 k = +(f | 0);
 p = b + 84 | 0;
 B = (e | 0) == 0;
 c[M >> 2] = 0;
 c[M + 4 >> 2] = 0;
 c[M + 8 >> 2] = 0;
 c[M + 12 >> 2] = 0;
 if (!B) {
  if (e >>> 0 > 1073741823) we(m);
  q = ye(e << 2) | 0;
  c[p >> 2] = q;
  c[m >> 2] = q;
  c[b + 88 >> 2] = q + (e << 2);
  m = e;
  o = q;
  while (1) {
   g[o >> 2] = k;
   m = m + -1 | 0;
   if (!m) break; else o = o + 4 | 0;
  }
  c[p >> 2] = q + (e << 2);
 }
 c[b + 92 >> 2] = l;
 w = Fb() | 0;
 c[t >> 2] = e;
 c[u >> 2] = f;
 c[F >> 2] = 0;
 x = F + 4 | 0;
 c[x >> 2] = 0;
 c[F + 8 >> 2] = 0;
 wd(F, 3);
 y = F + 8 | 0;
 m = c[x >> 2] | 0;
 if (m >>> 0 < (c[y >> 2] | 0) >>> 0) {
  c[m >> 2] = e;
  c[m + 4 >> 2] = f;
  o = (e << 2) + 95 | 0;
  p = o & -64;
  p = (o & 1984 | 0) == 0 ? p + 64 | 0 : p;
  c[m + 8 >> 2] = p;
  o = m + 12 | 0;
  p = eg((_(p, f) | 0) + 64 | 0) | 0;
  do if (p) {
   q = p;
   if (!(q & 3)) {
    r = 64 - (q & 63) | 0;
    M = p + (r + -4) | 0;
    a[M >> 0] = p;
    a[M + 1 >> 0] = p >> 8;
    a[M + 2 >> 0] = p >> 16;
    a[M + 3 >> 0] = p >> 24;
    r = p + r | 0;
    break;
   } else Aa(35988, 36021, 59, 36051);
  } else r = 0; while (0);
  c[o >> 2] = r;
  c[m + 16 >> 2] = 10;
  m = m + 20 | 0;
  c[x >> 2] = m;
 } else {
  xd(F, t, u);
  m = c[x >> 2] | 0;
 }
 if (m >>> 0 < (c[y >> 2] | 0) >>> 0) {
  c[m >> 2] = e;
  c[m + 4 >> 2] = f;
  o = (e << 2) + 95 | 0;
  p = o & -64;
  p = (o & 1984 | 0) == 0 ? p + 64 | 0 : p;
  c[m + 8 >> 2] = p;
  o = m + 12 | 0;
  p = eg((_(p, f) | 0) + 64 | 0) | 0;
  do if (p) {
   q = p;
   if (!(q & 3)) {
    s = 64 - (q & 63) | 0;
    M = p + (s + -4) | 0;
    a[M >> 0] = p;
    a[M + 1 >> 0] = p >> 8;
    a[M + 2 >> 0] = p >> 16;
    a[M + 3 >> 0] = p >> 24;
    s = p + s | 0;
    break;
   } else Aa(35988, 36021, 59, 36051);
  } else s = 0; while (0);
  c[o >> 2] = s;
  c[m + 16 >> 2] = 10;
  q = m + 20 | 0;
  c[x >> 2] = q;
 } else {
  xd(F, t, u);
  q = c[x >> 2] | 0;
 }
 if (q >>> 0 < (c[y >> 2] | 0) >>> 0) {
  c[q >> 2] = e;
  c[q + 4 >> 2] = f;
  m = (e << 2) + 95 | 0;
  o = m & -64;
  o = (m & 1984 | 0) == 0 ? o + 64 | 0 : o;
  c[q + 8 >> 2] = o;
  m = q + 12 | 0;
  o = eg((_(o, f) | 0) + 64 | 0) | 0;
  do if (o) {
   p = o;
   if (!(p & 3)) {
    v = 64 - (p & 63) | 0;
    M = o + (v + -4) | 0;
    a[M >> 0] = o;
    a[M + 1 >> 0] = o >> 8;
    a[M + 2 >> 0] = o >> 16;
    a[M + 3 >> 0] = o >> 24;
    v = o + v | 0;
    break;
   } else Aa(35988, 36021, 59, 36051);
  } else v = 0; while (0);
  c[m >> 2] = v;
  c[q + 16 >> 2] = 10;
  c[x >> 2] = q + 20;
 } else xd(F, t, u);
 a : do if (f) {
  l = c[j >> 2] | 0;
  q = 0;
  while (1) {
   p = _(q, e) | 0;
   m = c[F >> 2] | 0;
   o = c[m + 4 >> 2] | 0;
   if (o >>> 0 <= q >>> 0) {
    n = o;
    A = q;
    C = 29;
    break;
   }
   m = (c[m + 12 >> 2] | 0) + (_(c[m + 8 >> 2] | 0, q) | 0) | 0;
   if (!B) {
    o = 0;
    do {
     g[m + (o << 2) >> 2] = +h[w + ((d[l + ((o + p | 0) * 3 | 0) >> 0] | 0) << 3) >> 3];
     o = o + 1 | 0;
    } while ((o | 0) != (e | 0));
   }
   q = q + 1 | 0;
   if (q >>> 0 >= f >>> 0) {
    z = 0;
    break;
   }
  }
  if ((C | 0) == 29) {
   c[D >> 2] = A;
   M = D + 4 | 0;
   c[M >> 2] = n;
   Df(40454, D) | 0;
   xa();
  }
  while (1) {
   p = _(z, e) | 0;
   m = c[F >> 2] | 0;
   o = c[m + 24 >> 2] | 0;
   if (o >>> 0 <= z >>> 0) {
    n = o;
    A = z;
    C = 29;
    break;
   }
   m = (c[m + 32 >> 2] | 0) + (_(c[m + 28 >> 2] | 0, z) | 0) | 0;
   if (!B) {
    o = 0;
    do {
     g[m + (o << 2) >> 2] = +h[w + ((d[l + (((o + p | 0) * 3 | 0) + 1) >> 0] | 0) << 3) >> 3];
     o = o + 1 | 0;
    } while ((o | 0) != (e | 0));
   }
   z = z + 1 | 0;
   if (z >>> 0 >= f >>> 0) {
    E = 0;
    break;
   }
  }
  if ((C | 0) == 29) {
   c[D >> 2] = A;
   M = D + 4 | 0;
   c[M >> 2] = n;
   Df(40454, D) | 0;
   xa();
  }
  while (1) {
   o = _(E, e) | 0;
   m = c[F >> 2] | 0;
   n = c[m + 44 >> 2] | 0;
   if (n >>> 0 <= E >>> 0) {
    A = E;
    break;
   }
   m = (c[m + 52 >> 2] | 0) + (_(c[m + 48 >> 2] | 0, E) | 0) | 0;
   if (!B) {
    n = 0;
    do {
     g[m + (n << 2) >> 2] = +h[w + ((d[l + (((n + o | 0) * 3 | 0) + 2) >> 0] | 0) << 3) >> 3];
     n = n + 1 | 0;
    } while ((n | 0) != (e | 0));
   }
   E = E + 1 | 0;
   if (E >>> 0 >= f >>> 0) break a;
  }
  c[D >> 2] = A;
  M = D + 4 | 0;
  c[M >> 2] = n;
  Df(40454, D) | 0;
  xa();
 } while (0);
 m = c[R >> 2] | 0;
 if (!m) m = b + 24 | 0; else {
  n = c[S >> 2] | 0;
  if ((n | 0) != (m | 0)) {
   do {
    c[S >> 2] = n + -20;
    M = n + -8 | 0;
    o = c[M >> 2] | 0;
    c[M >> 2] = 0;
    if (o) jb[c[n + -4 >> 2] & 15](o);
    n = c[S >> 2] | 0;
   } while ((n | 0) != (m | 0));
   m = c[R >> 2] | 0;
  }
  Ae(m);
  m = b + 24 | 0;
  c[m >> 2] = 0;
  c[S >> 2] = 0;
  c[R >> 2] = 0;
 }
 c[R >> 2] = c[F >> 2];
 c[S >> 2] = c[x >> 2];
 c[m >> 2] = c[y >> 2];
 c[y >> 2] = 0;
 c[x >> 2] = 0;
 c[F >> 2] = 0;
 m = c[V >> 2] | 0;
 L = (m + 7 | 0) / 8 | 0;
 K = c[W >> 2] | 0;
 M = (K + 7 | 0) / 8 | 0;
 ec(N, _(M, L) | 0);
 b : do if ((K | 0) > 0) {
  G = (m | 0) > 0;
  H = P + 4 | 0;
  I = P + 8 | 0;
  J = P + 8 | 0;
  K = 0;
  m = 0;
  c : while (1) {
   if (G) {
    E = K << 3;
    F = 0;
    e = m;
    while (1) {
     q = c[N >> 2] | 0;
     m = q + (e * 12 | 0) | 0;
     c[P >> 2] = 0;
     c[H >> 2] = 0;
     c[I >> 2] = 0;
     l = ye(256) | 0;
     c[P >> 2] = l;
     n = l + 256 | 0;
     c[J >> 2] = n;
     pg(l | 0, 0, 256) | 0;
     c[H >> 2] = n;
     q = q + (e * 12 | 0) + 4 | 0;
     n = c[q >> 2] | 0;
     o = c[m >> 2] | 0;
     p = (n - o | 0) / 12 | 0;
     if (p >>> 0 >= 3) {
      if (p >>> 0 > 3 ? (O = o + 36 | 0, (n | 0) != (O | 0)) : 0) while (1) {
       m = n + -12 | 0;
       c[q >> 2] = m;
       o = c[m >> 2] | 0;
       p = o;
       if (o) {
        m = n + -8 | 0;
        n = c[m >> 2] | 0;
        if ((n | 0) != (o | 0)) c[m >> 2] = n + (~((n + -4 - p | 0) >>> 2) << 2);
        Ae(o);
        m = c[q >> 2] | 0;
       }
       if ((m | 0) == (O | 0)) break; else n = m;
      }
     } else ge(m, 3 - p | 0, P);
     m = c[H >> 2] | 0;
     if ((m | 0) != (l | 0)) c[H >> 2] = m + (~((m + -4 - l | 0) >>> 2) << 2);
     Ae(l);
     v = F << 3;
     j = (c[V >> 2] | 0) + -1 | 0;
     w = (c[W >> 2] | 0) + -1 | 0;
     D = c[R >> 2] | 0;
     n = c[D + 4 >> 2] | 0;
     x = D + 12 | 0;
     y = D + 8 | 0;
     z = D + 24 | 0;
     A = D + 32 | 0;
     B = D + 28 | 0;
     C = D + 44 | 0;
     f = D + 52 | 0;
     D = D + 48 | 0;
     o = 0;
     p = 0;
     do {
      m = p + E | 0;
      m = (w | 0) < (m | 0) ? w : m;
      u = n >>> 0 > m >>> 0;
      t = 0;
      while (1) {
       l = t + v | 0;
       l = (j | 0) < (l | 0) ? j : l;
       if (!u) {
        C = 67;
        break c;
       }
       q = c[(c[x >> 2] | 0) + (_(c[y >> 2] | 0, m) | 0) + (l << 2) >> 2] | 0;
       s = c[N >> 2] | 0;
       r = c[s + (e * 12 | 0) >> 2] | 0;
       c[(c[r >> 2] | 0) + (o << 2) >> 2] = q;
       q = c[z >> 2] | 0;
       if (q >>> 0 <= m >>> 0) {
        n = q;
        C = 67;
        break c;
       }
       q = c[(c[A >> 2] | 0) + (_(c[B >> 2] | 0, m) | 0) + (l << 2) >> 2] | 0;
       c[(c[r + 12 >> 2] | 0) + (o << 2) >> 2] = q;
       q = c[C >> 2] | 0;
       if (q >>> 0 <= m >>> 0) {
        n = q;
        C = 67;
        break c;
       }
       l = c[(c[f >> 2] | 0) + (_(c[D >> 2] | 0, m) | 0) + (l << 2) >> 2] | 0;
       c[(c[r + 24 >> 2] | 0) + (o << 2) >> 2] = l;
       t = t + 1 | 0;
       o = o + 1 | 0;
       if ((t | 0) >= 8) {
        m = s;
        break;
       }
      }
      p = p + 1 | 0;
     } while ((p | 0) < 8);
     fc(8, 8, m + (e * 12 | 0) | 0);
     F = F + 1 | 0;
     m = e + 1 | 0;
     if ((F | 0) >= (L | 0)) break; else e = m;
    }
   }
   K = K + 1 | 0;
   if ((K | 0) >= (M | 0)) break b;
  }
  if ((C | 0) == 67) {
   c[Q >> 2] = m;
   c[Q + 4 >> 2] = n;
   Df(40454, Q) | 0;
   xa();
  }
 } while (0);
 gc(Y, R);
 fc(c[V >> 2] | 0, c[W >> 2] | 0, Y);
 hc(U, c[V >> 2] | 0, c[W >> 2] | 0, Y);
 m = c[R >> 2] | 0;
 if (!m) m = b + 24 | 0; else {
  n = c[S >> 2] | 0;
  if ((n | 0) != (m | 0)) {
   do {
    c[S >> 2] = n + -20;
    Q = n + -8 | 0;
    o = c[Q >> 2] | 0;
    c[Q >> 2] = 0;
    if (o) jb[c[n + -4 >> 2] & 15](o);
    n = c[S >> 2] | 0;
   } while ((n | 0) != (m | 0));
   m = c[R >> 2] | 0;
  }
  Ae(m);
  m = b + 24 | 0;
  c[m >> 2] = 0;
  c[S >> 2] = 0;
  c[R >> 2] = 0;
 }
 c[R >> 2] = c[U >> 2];
 l = U + 4 | 0;
 c[S >> 2] = c[l >> 2];
 b = U + 8 | 0;
 c[m >> 2] = c[b >> 2];
 c[b >> 2] = 0;
 c[l >> 2] = 0;
 c[U >> 2] = 0;
 c[X >> 2] = 0;
 l = X + 4 | 0;
 c[l >> 2] = 0;
 c[X + 8 >> 2] = 0;
 U = ye(36) | 0;
 c[X >> 2] = U;
 m = U + 36 | 0;
 c[X + 8 >> 2] = m;
 c[U >> 2] = 0;
 c[U + 4 >> 2] = 0;
 c[U + 8 >> 2] = 0;
 c[U + 12 >> 2] = 0;
 c[U + 16 >> 2] = 0;
 c[U + 20 >> 2] = 0;
 c[U + 24 >> 2] = 0;
 c[U + 28 >> 2] = 0;
 c[U + 32 >> 2] = 0;
 c[l >> 2] = m;
 ic(Y, Y, c[V >> 2] | 0, c[W >> 2] | 0, T, X);
 m = c[X >> 2] | 0;
 if (m) {
  n = c[l >> 2] | 0;
  if ((n | 0) != (m | 0)) {
   do {
    o = n + -12 | 0;
    c[l >> 2] = o;
    p = c[o >> 2] | 0;
    q = p;
    if (!p) n = o; else {
     n = n + -8 | 0;
     o = c[n >> 2] | 0;
     if ((o | 0) != (p | 0)) c[n >> 2] = o + (~((o + -4 - q | 0) >>> 2) << 2);
     Ae(p);
     n = c[l >> 2] | 0;
    }
   } while ((n | 0) != (m | 0));
   m = c[X >> 2] | 0;
  }
  Ae(m);
 }
 m = c[Y >> 2] | 0;
 if (!m) {
  i = Z;
  return;
 }
 l = Y + 4 | 0;
 n = c[l >> 2] | 0;
 if ((n | 0) != (m | 0)) {
  do {
   o = n + -12 | 0;
   c[l >> 2] = o;
   p = c[o >> 2] | 0;
   q = p;
   if (!p) n = o; else {
    n = n + -8 | 0;
    o = c[n >> 2] | 0;
    if ((o | 0) != (p | 0)) c[n >> 2] = o + (~((o + -4 - q | 0) >>> 2) << 2);
    Ae(p);
    n = c[l >> 2] | 0;
   }
  } while ((n | 0) != (m | 0));
  m = c[Y >> 2] | 0;
 }
 Ae(m);
 i = Z;
 return;
}

function Gb(a, b, d, e, f, j, k, l, m) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = +f;
 j = +j;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0.0, C = 0.0, D = 0, E = 0, F = 0.0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, O = 0, P = 0, Q = 0, R = 0;
 Q = i;
 i = i + 96 | 0;
 P = Q + 84 | 0;
 O = Q + 72 | 0;
 M = Q + 60 | 0;
 L = Q + 48 | 0;
 K = Q + 36 | 0;
 J = Q + 24 | 0;
 I = Q + 12 | 0;
 H = Q;
 if (!(k | l)) {
  Hb(a, m);
  i = Q;
  return;
 }
 Hb(P, m);
 n = c[P >> 2] | 0;
 o = c[n + 4 >> 2] | 0;
 q = c[n >> 2] | 0;
 if ((o | 0) != (q | 0)) {
  r = c[n + 12 >> 2] | 0;
  p = c[n + 24 >> 2] | 0;
  n = o - q >> 2;
  o = 0;
  do {
   G = q + (o << 2) | 0;
   g[G >> 2] = +g[G >> 2] / 255.0;
   G = r + (o << 2) | 0;
   g[G >> 2] = +g[G >> 2] / 255.0 + -.5;
   G = p + (o << 2) | 0;
   g[G >> 2] = +g[G >> 2] / 255.0 + -.5;
   o = o + 1 | 0;
  } while (o >>> 0 < n >>> 0);
 }
 n = c[m >> 2] | 0;
 n = (c[n + 4 >> 2] | 0) - (c[n >> 2] | 0) | 0;
 r = n >> 2;
 c[O >> 2] = 0;
 o = O + 4 | 0;
 c[o >> 2] = 0;
 p = O + 8 | 0;
 c[p >> 2] = 0;
 if (r) {
  if ((n | 0) < 0) we(O);
  n = ((r + -1 | 0) >>> 5) + 1 | 0;
  q = ye(n << 2) | 0;
  c[O >> 2] = q;
  c[p >> 2] = n;
  c[o >> 2] = r;
  n = r >>> 5;
  pg(q | 0, 0, n << 2 | 0) | 0;
  o = n << 5;
  if ((o | 0) != (r | 0)) {
   G = q + (n << 2) | 0;
   c[G >> 2] = c[G >> 2] & ~(-1 >>> (32 - r + o | 0));
  }
 } else q = 0;
 G = (d | 0) > 0;
 if (G) {
  w = (b | 0) > 0;
  x = (e | 0) == 2;
  y = (e | 0) == 1;
  z = c[P >> 2] | 0;
  A = z + 12 | 0;
  D = z + 24 | 0;
  E = c[O >> 2] | 0;
  v = 0;
  do {
   if (w) {
    r = _(v, b) | 0;
    s = c[z >> 2] | 0;
    t = c[A >> 2] | 0;
    u = c[D >> 2] | 0;
    p = 0;
    do {
     n = p + r | 0;
     F = +g[s + (n << 2) >> 2];
     C = +g[u + (n << 2) >> 2];
     B = +g[t + (n << 2) >> 2];
     o = F - B * .34414 - C * .71414 < .85;
     B = F + B * 1.772;
     C = F + C * 1.402;
     if (C < .9 & (B < .85 & (x & o))) {
      R = q + (n >>> 5 << 2) | 0;
      c[R >> 2] = c[R >> 2] | 1 << (n & 31);
     }
     if (B < .9 & (o & (y & C < .85))) {
      q = E + (n >>> 5 << 2) | 0;
      c[q >> 2] = c[q >> 2] | 1 << (n & 31);
      q = E;
     }
     p = p + 1 | 0;
    } while ((p | 0) != (b | 0));
   }
   v = v + 1 | 0;
  } while ((v | 0) != (d | 0));
 }
 Ib(b, d, O);
 Ib(b, d, O);
 Ib(b, d, O);
 n = c[m >> 2] | 0;
 n = (c[n + 4 >> 2] | 0) - (c[n >> 2] | 0) | 0;
 r = n >> 2;
 c[M >> 2] = 0;
 o = M + 4 | 0;
 c[o >> 2] = 0;
 p = M + 8 | 0;
 c[p >> 2] = 0;
 if (r) {
  if ((n | 0) < 0) we(M);
  n = ((r + -1 | 0) >>> 5) + 1 | 0;
  q = ye(n << 2) | 0;
  c[M >> 2] = q;
  c[p >> 2] = n;
  c[o >> 2] = r;
  n = r >>> 5;
  pg(q | 0, 0, n << 2 | 0) | 0;
  o = n << 5;
  if ((o | 0) == (r | 0)) n = q; else {
   n = q + (n << 2) | 0;
   c[n >> 2] = c[n >> 2] & ~(-1 >>> (32 - r + o | 0));
   n = q;
  }
 } else n = 0;
 if (G) {
  u = (b | 0) > 0;
  w = c[P >> 2] | 0;
  v = w + 12 | 0;
  w = w + 24 | 0;
  x = c[M >> 2] | 0;
  t = 0;
  do {
   a : do if (u) {
    q = _(t, b) | 0;
    r = c[v >> 2] | 0;
    s = c[w >> 2] | 0;
    p = 0;
    while (1) {
     o = p + q | 0;
     B = +g[r + (o << 2) >> 2];
     C = +g[s + (o << 2) >> 2];
     switch (e | 0) {
     case 2:
      {
       F = B;
       if (C * 2.116 > .2 - F * .34414 ? C * 1.402 > F * 1.772 + .2 : 0) {
        n = x + (o >>> 5 << 2) | 0;
        c[n >> 2] = c[n >> 2] | 1 << (o & 31);
        n = x;
       }
       break;
      }
     case 1:
      {
       F = C;
       C = B;
       if (F < C * 1.263 + -.1 & C > F * -.33741) {
        R = n + (o >>> 5 << 2) | 0;
        c[R >> 2] = c[R >> 2] | 1 << (o & 31);
       }
       break;
      }
     default:
      {}
     }
     p = p + 1 | 0;
     if ((p | 0) == (b | 0)) break a;
    }
   } while (0);
   t = t + 1 | 0;
  } while ((t | 0) != (d | 0));
 }
 Jb(b, d, M);
 Jb(b, d, M);
 Jb(b, d, M);
 n = c[m >> 2] | 0;
 n = (c[n + 4 >> 2] | 0) - (c[n >> 2] | 0) | 0;
 r = n >> 2;
 c[L >> 2] = 0;
 o = L + 4 | 0;
 c[o >> 2] = 0;
 p = L + 8 | 0;
 c[p >> 2] = 0;
 if (r) {
  if ((n | 0) < 0) we(L);
  n = ((r + -1 | 0) >>> 5) + 1 | 0;
  q = ye(n << 2) | 0;
  c[L >> 2] = q;
  c[p >> 2] = n;
  c[o >> 2] = r;
  n = r >>> 5;
  pg(q | 0, 0, n << 2 | 0) | 0;
  o = n << 5;
  if ((o | 0) != (r | 0)) {
   R = q + (n << 2) | 0;
   c[R >> 2] = c[R >> 2] & ~(-1 >>> (32 - r + o | 0));
  }
 } else q = 0;
 if (G) {
  o = (b | 0) > 0;
  p = c[M >> 2] | 0;
  r = c[O >> 2] | 0;
  v = 0;
  do {
   if (o) {
    s = _(v, b) | 0;
    u = 0;
    do {
     n = u + s | 0;
     R = n >>> 5;
     t = q + (R << 2) | 0;
     n = 1 << (n & 31);
     if ((c[p + (R << 2) >> 2] & n | 0) != 0 ? (c[r + (R << 2) >> 2] & n | 0) != 0 : 0) n = c[t >> 2] | n; else n = c[t >> 2] & ~n;
     c[t >> 2] = n;
     u = u + 1 | 0;
    } while ((u | 0) != (b | 0));
   }
   v = v + 1 | 0;
  } while ((v | 0) != (d | 0));
 }
 F = (e | 0) == 2 ? 2.5500000000000003 : 127.5;
 n = c[m >> 2] | 0;
 n = (c[n + 4 >> 2] | 0) - (c[n >> 2] | 0) | 0;
 r = n >> 2;
 c[K >> 2] = 0;
 o = K + 4 | 0;
 c[o >> 2] = 0;
 p = K + 8 | 0;
 c[p >> 2] = 0;
 if (r) {
  if ((n | 0) < 0) we(K);
  n = ((r + -1 | 0) >>> 5) + 1 | 0;
  q = ye(n << 2) | 0;
  c[K >> 2] = q;
  c[p >> 2] = n;
  c[o >> 2] = r;
  n = r >>> 5;
  pg(q | 0, 0, n << 2 | 0) | 0;
  o = n << 5;
  if ((o | 0) != (r | 0)) {
   R = q + (n << 2) | 0;
   c[R >> 2] = c[R >> 2] & ~(-1 >>> (32 - r + o | 0));
  }
 }
 n = c[P >> 2] | 0;
 u = n + (e * 12 | 0) | 0;
 ed(J, u);
 n = c[n + (e * 12 | 0) + 4 >> 2] | 0;
 u = c[u >> 2] | 0;
 if ((n | 0) != (u | 0)) {
  n = n - u >> 2;
  o = c[J >> 2] | 0;
  t = 0;
  do {
   p = (t | 0) % (b | 0) | 0;
   q = (t | 0) / (b | 0) | 0;
   r = p + 1 | 0;
   s = q + 1 | 0;
   if ((s | 0) < (d | 0) & (((q | 0) < 1 | ((p | 0) < 1 | (r | 0) >= (b | 0))) ^ 1)) {
    E = p + -1 | 0;
    D = _(q + -1 | 0, b) | 0;
    m = _(q, b) | 0;
    R = _(s, b) | 0;
    g[o + (t << 2) >> 2] = +g[u + (R + r << 2) >> 2] * 0.0 + (+g[u + (R + E << 2) >> 2] * 0.0 + (+g[u + (m + p << 2) >> 2] * 4.0 + (+g[u + (D + r << 2) >> 2] * 0.0 + (+g[u + (D + E << 2) >> 2] * 0.0 + 0.0 - +g[u + (D + p << 2) >> 2]) - +g[u + (m + E << 2) >> 2]) - +g[u + (m + r << 2) >> 2]) - +g[u + (R + p << 2) >> 2]);
   }
   t = t + 1 | 0;
  } while (t >>> 0 < n >>> 0);
 }
 if (G) {
  n = (b | 0) > 0;
  o = c[L >> 2] | 0;
  p = c[O >> 2] | 0;
  q = c[J >> 2] | 0;
  r = c[K >> 2] | 0;
  t = c[P >> 2] | 0;
  s = t + 12 | 0;
  t = t + 24 | 0;
  A = 0;
  do {
   if (n) {
    u = _(A, b) | 0;
    v = c[s >> 2] | 0;
    w = c[t >> 2] | 0;
    z = 0;
    do {
     R = z + u | 0;
     B = +g[v + (R << 2) >> 2];
     C = +g[w + (R << 2) >> 2];
     x = R >>> 5;
     y = 1 << (R & 31);
     do if (((c[o + (x << 2) >> 2] & y | 0) == 0 ? (c[p + (x << 2) >> 2] & y | 0) != 0 : 0) ? +N(+(+g[q + (R << 2) >> 2])) < F : 0) {
      if (!(C < B * -.162)) break;
      R = r + (x << 2) | 0;
      c[R >> 2] = c[R >> 2] | y;
     } while (0);
     z = z + 1 | 0;
    } while ((z | 0) != (b | 0));
   }
   A = A + 1 | 0;
  } while ((A | 0) != (d | 0));
 }
 Ib(b, d, K);
 Ib(b, d, K);
 n = c[P >> 2] | 0;
 p = n + (e * 12 | 0) | 0;
 r = ye(40) | 0;
 c[r >> 2] = 0;
 c[r + 4 >> 2] = 0;
 c[r + 8 >> 2] = 0;
 c[r + 12 >> 2] = 0;
 c[r + 16 >> 2] = 0;
 c[r + 20 >> 2] = 0;
 B = f * (f * 2.0);
 C = +X(+(-4.0 / B)) * .3989422804014327 / f;
 h[r >> 3] = C;
 F = +X(+(-1.0 / B)) * .3989422804014327 / f;
 h[r + 8 >> 3] = F;
 f = +X(+(-0.0 / B)) * .3989422804014327 / f;
 h[r + 16 >> 3] = f;
 h[r + 24 >> 3] = F;
 h[r + 32 >> 3] = C;
 sd(I, p, b, d, r, 5, 1.0 / (C + (F + (C + 0.0 + F + f))));
 n = c[n + (e * 12 | 0) + 4 >> 2] | 0;
 p = c[p >> 2] | 0;
 if ((n | 0) != (p | 0)) {
  q = c[I >> 2] | 0;
  n = n - p >> 2;
  o = 0;
  do {
   f = +g[p + (o << 2) >> 2];
   R = q + (o << 2) | 0;
   g[R >> 2] = f + (f - +g[R >> 2]) * j;
   o = o + 1 | 0;
  } while (o >>> 0 < n >>> 0);
 }
 Ae(r);
 m = c[P >> 2] | 0;
 R = ye(40) | 0;
 c[R >> 2] = 0;
 c[R + 4 >> 2] = 0;
 c[R + 8 >> 2] = 0;
 c[R + 12 >> 2] = 0;
 c[R + 16 >> 2] = 0;
 c[R + 20 >> 2] = 0;
 h[R >> 3] = .09397422369424545;
 h[R + 8 >> 3] = .2282849189107672;
 h[R + 16 >> 3] = .3068786772318713;
 h[R + 24 >> 3] = .2282849189107672;
 h[R + 32 >> 3] = .09397422369424545;
 sd(H, m + (e * 12 | 0) | 0, b, d, R, 5, 1.0510859709214928);
 Ae(R);
 if (G) {
  y = (b | 0) > 0;
  z = c[L >> 2] | 0;
  A = c[K >> 2] | 0;
  x = k ^ 1;
  u = c[H >> 2] | 0;
  v = c[I >> 2] | 0;
  n = c[P >> 2] | 0;
  w = n + (e * 12 | 0) | 0;
  n = n + (e * 12 | 0) | 0;
  t = 0;
  do {
   if (y) {
    o = _(t, b) | 0;
    s = 0;
    do {
     p = s + o | 0;
     q = p >>> 5;
     r = 1 << (p & 31);
     do if (!(c[z + (q << 2) >> 2] & r)) {
      if ((c[A + (q << 2) >> 2] & r | 0) == 0 | x) break;
      c[(c[w >> 2] | 0) + (p << 2) >> 2] = c[u + (p << 2) >> 2];
     } else {
      if (!l) break;
      c[(c[n >> 2] | 0) + (p << 2) >> 2] = c[v + (p << 2) >> 2];
     } while (0);
     s = s + 1 | 0;
    } while ((s | 0) != (b | 0));
   }
   t = t + 1 | 0;
  } while ((t | 0) != (d | 0));
 }
 n = c[P >> 2] | 0;
 o = c[n + 4 >> 2] | 0;
 q = c[n >> 2] | 0;
 r = n;
 if ((o | 0) != (q | 0)) {
  s = c[n + 12 >> 2] | 0;
  p = c[n + 24 >> 2] | 0;
  n = o - q >> 2;
  o = 0;
  do {
   R = q + (o << 2) | 0;
   g[R >> 2] = +g[R >> 2] * 255.0;
   R = s + (o << 2) | 0;
   g[R >> 2] = (+g[R >> 2] + .5) * 255.0;
   R = p + (o << 2) | 0;
   g[R >> 2] = (+g[R >> 2] + .5) * 255.0;
   o = o + 1 | 0;
  } while (o >>> 0 < n >>> 0);
 }
 c[a >> 2] = r;
 s = P + 4 | 0;
 c[a + 4 >> 2] = c[s >> 2];
 p = P + 8 | 0;
 c[a + 8 >> 2] = c[p >> 2];
 c[p >> 2] = 0;
 c[s >> 2] = 0;
 c[P >> 2] = 0;
 p = c[H >> 2] | 0;
 q = p;
 if (p) {
  n = H + 4 | 0;
  o = c[n >> 2] | 0;
  if ((o | 0) != (p | 0)) c[n >> 2] = o + (~((o + -4 - q | 0) >>> 2) << 2);
  Ae(p);
 }
 p = c[I >> 2] | 0;
 q = p;
 if (p) {
  n = I + 4 | 0;
  o = c[n >> 2] | 0;
  if ((o | 0) != (p | 0)) c[n >> 2] = o + (~((o + -4 - q | 0) >>> 2) << 2);
  Ae(p);
 }
 p = c[J >> 2] | 0;
 q = p;
 if (p) {
  n = J + 4 | 0;
  o = c[n >> 2] | 0;
  if ((o | 0) != (p | 0)) c[n >> 2] = o + (~((o + -4 - q | 0) >>> 2) << 2);
  Ae(p);
 }
 n = c[K >> 2] | 0;
 if (n) Ae(n);
 n = c[L >> 2] | 0;
 if (n) Ae(n);
 n = c[M >> 2] | 0;
 if (n) Ae(n);
 n = c[O >> 2] | 0;
 if (n) Ae(n);
 n = c[P >> 2] | 0;
 if (!n) {
  i = Q;
  return;
 }
 o = c[s >> 2] | 0;
 if ((o | 0) != (n | 0)) {
  do {
   p = o + -12 | 0;
   c[s >> 2] = p;
   q = c[p >> 2] | 0;
   r = q;
   if (!q) o = p; else {
    o = o + -8 | 0;
    p = c[o >> 2] | 0;
    if ((p | 0) != (q | 0)) c[o >> 2] = p + (~((p + -4 - r | 0) >>> 2) << 2);
    Ae(q);
    o = c[s >> 2] | 0;
   }
  } while ((o | 0) != (n | 0));
  n = c[P >> 2] | 0;
 }
 Ae(n);
 i = Q;
 return;
}

function Kb(a, b, e, f) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0.0, Z = 0.0, _ = 0.0, $ = 0.0, aa = 0;
 X = i;
 i = i + 192 | 0;
 N = X + 180 | 0;
 K = X + 168 | 0;
 L = X + 156 | 0;
 G = X + 144 | 0;
 H = X + 132 | 0;
 V = X + 120 | 0;
 U = X + 108 | 0;
 T = X + 96 | 0;
 l = X + 84 | 0;
 m = X + 72 | 0;
 J = X + 60 | 0;
 M = X + 48 | 0;
 O = X + 36 | 0;
 I = X + 24 | 0;
 Q = X + 12 | 0;
 S = X;
 j = b + 4 | 0;
 F = c[j >> 2] | 0;
 R = c[b >> 2] | 0;
 h = F - R | 0;
 c[V >> 2] = 0;
 W = V + 4 | 0;
 c[W >> 2] = 0;
 c[V + 8 >> 2] = 0;
 if ((F | 0) != (R | 0)) {
  if (h >>> 0 > 1073741823) we(V);
  R = h << 2;
  k = ye(R) | 0;
  c[V >> 2] = k;
  h = k + (h << 2) | 0;
  c[V + 8 >> 2] = h;
  pg(k | 0, 0, R | 0) | 0;
  c[W >> 2] = h;
  h = c[j >> 2] | 0;
  b = c[b >> 2] | 0;
  if ((h | 0) != (b | 0)) {
   h = h - b | 0;
   j = 0;
   do {
    g[k + (j << 2) >> 2] = +(d[b + j >> 0] | 0);
    j = j + 1 | 0;
   } while (j >>> 0 < h >>> 0);
  }
 }
 Lb(U, V);
 Nb(l, V, e, f);
 Mb(T, l);
 b = c[l >> 2] | 0;
 k = b;
 if (b) {
  h = l + 4 | 0;
  j = c[h >> 2] | 0;
  if ((j | 0) != (b | 0)) c[h >> 2] = j + (~((j + -4 - k | 0) >>> 2) << 2);
  Ae(b);
 }
 Hb(a, T);
 l = c[a >> 2] | 0;
 Ob(m, l, e, f);
 h = c[l >> 2] | 0;
 j = h;
 k = l + 4 | 0;
 if (!h) h = l + 8 | 0; else {
  b = c[k >> 2] | 0;
  if ((b | 0) != (h | 0)) c[k >> 2] = b + (~((b + -4 - j | 0) >>> 2) << 2);
  Ae(h);
  h = l + 8 | 0;
  c[h >> 2] = 0;
  c[k >> 2] = 0;
  c[l >> 2] = 0;
 }
 c[l >> 2] = c[m >> 2];
 q = m + 4 | 0;
 c[k >> 2] = c[q >> 2];
 r = m + 8 | 0;
 c[h >> 2] = c[r >> 2];
 c[r >> 2] = 0;
 c[q >> 2] = 0;
 c[m >> 2] = 0;
 q = N + 4 | 0;
 r = N + 8 | 0;
 s = N + 8 | 0;
 t = G + 4 | 0;
 u = G + 8 | 0;
 v = H + 4 | 0;
 w = H + 8 | 0;
 x = J + 4 | 0;
 y = J + 8 | 0;
 F = M + 4 | 0;
 R = U + 4 | 0;
 z = O + 4 | 0;
 A = I + 4 | 0;
 B = K + 4 | 0;
 C = L + 4 | 0;
 D = J + 8 | 0;
 E = 0;
 while (1) {
  c[N >> 2] = 0;
  c[q >> 2] = 0;
  c[r >> 2] = 0;
  ud(N, c[a >> 2] | 0);
  Ob(K, (c[a >> 2] | 0) + 12 | 0, e, f);
  Ob(L, (c[a >> 2] | 0) + 24 | 0, e, f);
  td(G, K, e, f);
  h = c[q >> 2] | 0;
  if (h >>> 0 >= (c[s >> 2] | 0) >>> 0) {
   vd(N, G);
   h = c[G >> 2] | 0;
   j = h;
   if (h) {
    b = c[t >> 2] | 0;
    if ((b | 0) != (h | 0)) c[t >> 2] = b + (~((b + -4 - j | 0) >>> 2) << 2);
    Ae(h);
   }
  } else {
   c[h >> 2] = 0;
   p = h + 4 | 0;
   c[p >> 2] = 0;
   c[h + 8 >> 2] = 0;
   c[h >> 2] = c[G >> 2];
   c[p >> 2] = c[t >> 2];
   c[h + 8 >> 2] = c[u >> 2];
   c[u >> 2] = 0;
   c[t >> 2] = 0;
   c[G >> 2] = 0;
   c[q >> 2] = (c[q >> 2] | 0) + 12;
  }
  td(H, L, e, f);
  h = c[q >> 2] | 0;
  if (h >>> 0 >= (c[s >> 2] | 0) >>> 0) {
   vd(N, H);
   h = c[H >> 2] | 0;
   j = h;
   if (h) {
    b = c[v >> 2] | 0;
    if ((b | 0) != (h | 0)) c[v >> 2] = b + (~((b + -4 - j | 0) >>> 2) << 2);
    Ae(h);
   }
  } else {
   c[h >> 2] = 0;
   p = h + 4 | 0;
   c[p >> 2] = 0;
   c[h + 8 >> 2] = 0;
   c[h >> 2] = c[H >> 2];
   c[p >> 2] = c[v >> 2];
   c[h + 8 >> 2] = c[w >> 2];
   c[w >> 2] = 0;
   c[v >> 2] = 0;
   c[H >> 2] = 0;
   c[q >> 2] = (c[q >> 2] | 0) + 12;
  }
  h = c[N >> 2] | 0;
  h = (c[h + 4 >> 2] | 0) - (c[h >> 2] | 0) >> 2;
  j = h * 3 | 0;
  c[J >> 2] = 0;
  c[x >> 2] = 0;
  c[y >> 2] = 0;
  if (h) {
   if (j >>> 0 > 1073741823) {
    P = 31;
    break;
   }
   p = h * 12 | 0;
   n = ye(p) | 0;
   c[J >> 2] = n;
   h = n + (j << 2) | 0;
   c[D >> 2] = h;
   pg(n | 0, 0, p | 0) | 0;
   c[x >> 2] = h;
   if ((h | 0) != (n | 0)) {
    m = c[N >> 2] | 0;
    k = c[m >> 2] | 0;
    l = c[m + 12 >> 2] | 0;
    m = c[m + 24 >> 2] | 0;
    h = h - n >> 2;
    j = 0;
    b = 0;
    while (1) {
     Y = +g[l + (j << 2) >> 2];
     Z = +g[k + (j << 2) >> 2];
     _ = +g[m + (j << 2) >> 2] + -128.0;
     $ = Z + _ * 1.402;
     $ = $ < 255.0 ? $ : 255.0;
     g[n + (b << 2) >> 2] = $ > 0.0 ? $ : 0.0;
     Y = Y + -128.0;
     _ = Z - Y * .344136 - _ * .714136;
     _ = _ < 255.0 ? _ : 255.0;
     g[n + (b + 1 << 2) >> 2] = _ > 0.0 ? _ : 0.0;
     Y = Z + Y * 1.772;
     Y = Y < 255.0 ? Y : 255.0;
     g[n + (b + 2 << 2) >> 2] = Y > 0.0 ? Y : 0.0;
     b = b + 3 | 0;
     if (b >>> 0 >= h >>> 0) break; else j = j + 1 | 0;
    }
   }
  }
  h = c[L >> 2] | 0;
  j = h;
  if (h) {
   b = c[C >> 2] | 0;
   if ((b | 0) != (h | 0)) c[C >> 2] = b + (~((b + -4 - j | 0) >>> 2) << 2);
   Ae(h);
  }
  h = c[K >> 2] | 0;
  j = h;
  if (h) {
   b = c[B >> 2] | 0;
   if ((b | 0) != (h | 0)) c[B >> 2] = b + (~((b + -4 - j | 0) >>> 2) << 2);
   Ae(h);
  }
  h = c[N >> 2] | 0;
  if (h) {
   j = c[q >> 2] | 0;
   if ((j | 0) != (h | 0)) {
    do {
     b = j + -12 | 0;
     c[q >> 2] = b;
     k = c[b >> 2] | 0;
     l = k;
     if (!k) j = b; else {
      j = j + -8 | 0;
      b = c[j >> 2] | 0;
      if ((b | 0) != (k | 0)) c[j >> 2] = b + (~((b + -4 - l | 0) >>> 2) << 2);
      Ae(k);
      j = c[q >> 2] | 0;
     }
    } while ((j | 0) != (h | 0));
    h = c[N >> 2] | 0;
   }
   Ae(h);
  }
  Lb(M, J);
  Nb(I, J, e, f);
  Mb(O, I);
  h = c[I >> 2] | 0;
  j = h;
  if (h) {
   b = c[A >> 2] | 0;
   if ((b | 0) != (h | 0)) c[A >> 2] = b + (~((b + -4 - j | 0) >>> 2) << 2);
   Ae(h);
  }
  h = c[a >> 2] | 0;
  k = c[U >> 2] | 0;
  p = c[M >> 2] | 0;
  j = c[h >> 2] | 0;
  b = (c[F >> 2] | 0) - p >> 2;
  if ((b | 0) != ((c[h + 4 >> 2] | 0) - j >> 2 | 0)) {
   P = 57;
   break;
  }
  if (((c[R >> 2] | 0) - k >> 2 | 0) != (b | 0)) {
   P = 60;
   break;
  }
  if (!b) o = h; else {
   h = 0;
   do {
    o = j + (h << 2) | 0;
    $ = +g[o >> 2] - (+g[p + (h << 2) >> 2] - +g[k + (h << 2) >> 2]);
    $ = $ < 255.0 ? $ : 255.0;
    g[o >> 2] = $ > 0.0 ? $ : 0.0;
    h = h + 1 | 0;
   } while ((h | 0) != (b | 0));
   o = c[a >> 2] | 0;
  }
  n = c[T >> 2] | 0;
  h = c[O >> 2] | 0;
  j = c[n + 12 >> 2] | 0;
  b = c[h + 12 >> 2] | 0;
  k = c[o + 12 >> 2] | 0;
  l = (c[h + 16 >> 2] | 0) - b >> 2;
  if ((l | 0) != ((c[o + 16 >> 2] | 0) - k >> 2 | 0)) {
   P = 64;
   break;
  }
  if (((c[n + 16 >> 2] | 0) - j >> 2 | 0) != (l | 0)) {
   P = 67;
   break;
  }
  if (l) {
   m = 0;
   do {
    aa = k + (m << 2) | 0;
    $ = +g[aa >> 2] - (+g[b + (m << 2) >> 2] - +g[j + (m << 2) >> 2]);
    $ = $ < 255.0 ? $ : 255.0;
    g[aa >> 2] = $ > 0.0 ? $ : 0.0;
    m = m + 1 | 0;
   } while ((m | 0) != (l | 0));
  }
  b = c[n + 24 >> 2] | 0;
  l = c[h + 24 >> 2] | 0;
  k = c[o + 24 >> 2] | 0;
  m = (c[h + 28 >> 2] | 0) - l >> 2;
  if ((m | 0) != ((c[o + 28 >> 2] | 0) - k >> 2 | 0)) {
   P = 70;
   break;
  }
  if (((c[n + 28 >> 2] | 0) - b >> 2 | 0) != (m | 0)) {
   P = 73;
   break;
  }
  if (m) {
   j = 0;
   do {
    aa = k + (j << 2) | 0;
    $ = +g[aa >> 2] - (+g[l + (j << 2) >> 2] - +g[b + (j << 2) >> 2]);
    $ = $ < 255.0 ? $ : 255.0;
    g[aa >> 2] = $ > 0.0 ? $ : 0.0;
    j = j + 1 | 0;
   } while ((j | 0) != (m | 0));
   if (!h) h = p; else P = 76;
  } else P = 76;
  if ((P | 0) == 76) {
   P = 0;
   j = c[z >> 2] | 0;
   if ((j | 0) != (h | 0)) {
    do {
     b = j + -12 | 0;
     c[z >> 2] = b;
     k = c[b >> 2] | 0;
     l = k;
     if (!k) j = b; else {
      j = j + -8 | 0;
      b = c[j >> 2] | 0;
      if ((b | 0) != (k | 0)) c[j >> 2] = b + (~((b + -4 - l | 0) >>> 2) << 2);
      Ae(k);
      j = c[z >> 2] | 0;
     }
    } while ((j | 0) != (h | 0));
    h = c[O >> 2] | 0;
   }
   Ae(h);
   h = c[M >> 2] | 0;
  }
  j = h;
  if (h) {
   b = c[F >> 2] | 0;
   if ((b | 0) != (h | 0)) c[F >> 2] = b + (~((b + -4 - j | 0) >>> 2) << 2);
   Ae(h);
  }
  h = c[J >> 2] | 0;
  j = h;
  if (h) {
   b = c[x >> 2] | 0;
   if ((b | 0) != (h | 0)) c[x >> 2] = b + (~((b + -4 - j | 0) >>> 2) << 2);
   Ae(h);
  }
  E = E + 1 | 0;
  if ((E | 0) >= 20) {
   P = 93;
   break;
  }
 }
 if ((P | 0) == 31) we(J); else if ((P | 0) == 57) Aa(36736, 36586, 442, 36774); else if ((P | 0) == 60) Aa(36786, 36586, 443, 36774); else if ((P | 0) == 64) Aa(36736, 36586, 442, 36774); else if ((P | 0) == 67) Aa(36786, 36586, 443, 36774); else if ((P | 0) == 70) Aa(36736, 36586, 442, 36774); else if ((P | 0) == 73) Aa(36786, 36586, 443, 36774); else if ((P | 0) == 93) {
  h = c[a >> 2] | 0;
  m = h + 12 | 0;
  Ob(Q, m, e, f);
  j = c[m >> 2] | 0;
  b = j;
  l = h + 16 | 0;
  if (!j) h = h + 20 | 0; else {
   k = c[l >> 2] | 0;
   if ((k | 0) != (j | 0)) c[l >> 2] = k + (~((k + -4 - b | 0) >>> 2) << 2);
   Ae(j);
   h = h + 20 | 0;
   c[h >> 2] = 0;
   c[l >> 2] = 0;
   c[m >> 2] = 0;
  }
  c[m >> 2] = c[Q >> 2];
  m = Q + 4 | 0;
  c[l >> 2] = c[m >> 2];
  l = Q + 8 | 0;
  c[h >> 2] = c[l >> 2];
  c[l >> 2] = 0;
  c[m >> 2] = 0;
  c[Q >> 2] = 0;
  l = c[a >> 2] | 0;
  m = l + 24 | 0;
  Ob(S, m, e, f);
  h = c[m >> 2] | 0;
  j = h;
  k = l + 28 | 0;
  if (!h) h = l + 32 | 0; else {
   b = c[k >> 2] | 0;
   if ((b | 0) != (h | 0)) c[k >> 2] = b + (~((b + -4 - j | 0) >>> 2) << 2);
   Ae(h);
   h = l + 32 | 0;
   c[h >> 2] = 0;
   c[k >> 2] = 0;
   c[m >> 2] = 0;
  }
  c[m >> 2] = c[S >> 2];
  aa = S + 4 | 0;
  c[k >> 2] = c[aa >> 2];
  e = S + 8 | 0;
  c[h >> 2] = c[e >> 2];
  c[e >> 2] = 0;
  c[aa >> 2] = 0;
  c[S >> 2] = 0;
  h = c[T >> 2] | 0;
  if (h) {
   m = T + 4 | 0;
   j = c[m >> 2] | 0;
   if ((j | 0) != (h | 0)) {
    do {
     b = j + -12 | 0;
     c[m >> 2] = b;
     k = c[b >> 2] | 0;
     l = k;
     if (!k) j = b; else {
      j = j + -8 | 0;
      b = c[j >> 2] | 0;
      if ((b | 0) != (k | 0)) c[j >> 2] = b + (~((b + -4 - l | 0) >>> 2) << 2);
      Ae(k);
      j = c[m >> 2] | 0;
     }
    } while ((j | 0) != (h | 0));
    h = c[T >> 2] | 0;
   }
   Ae(h);
  }
  h = c[U >> 2] | 0;
  j = h;
  if (h) {
   b = c[R >> 2] | 0;
   if ((b | 0) != (h | 0)) c[R >> 2] = b + (~((b + -4 - j | 0) >>> 2) << 2);
   Ae(h);
  }
  h = c[V >> 2] | 0;
  if (!h) {
   i = X;
   return;
  }
  j = c[W >> 2] | 0;
  if ((j | 0) != (h | 0)) c[W >> 2] = j + (~((j + -4 - h | 0) >>> 2) << 2);
  Ae(h);
  i = X;
  return;
 }
}

function Db(a) {
 a = a | 0;
 var b = 0.0, c = 0, d = 0.0, e = 0.0, f = 0.0, g = 0.0, j = 0.0, k = 0.0, l = 0.0, m = 0, n = 0, o = 0;
 n = i;
 i = i + 512 | 0;
 m = n;
 b = +h[a >> 3];
 d = +h[a + 64 >> 3];
 e = +h[a + 128 >> 3];
 f = +h[a + 192 >> 3];
 g = +h[a + 256 >> 3];
 j = +h[a + 320 >> 3];
 k = +h[a + 384 >> 3];
 l = +h[a + 448 >> 3];
 c = 0;
 do {
  o = c << 3;
  h[m + (o << 3) >> 3] = +h[25528 + (o << 3) >> 3] * b + 0.0 + +h[25528 + ((o | 1) << 3) >> 3] * d + +h[25528 + ((o | 2) << 3) >> 3] * e + +h[25528 + ((o | 3) << 3) >> 3] * f + +h[25528 + ((o | 4) << 3) >> 3] * g + +h[25528 + ((o | 5) << 3) >> 3] * j + +h[25528 + ((o | 6) << 3) >> 3] * k + +h[25528 + ((o | 7) << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[a + 8 >> 3];
 d = +h[a + 72 >> 3];
 e = +h[a + 136 >> 3];
 f = +h[a + 200 >> 3];
 g = +h[a + 264 >> 3];
 j = +h[a + 328 >> 3];
 k = +h[a + 392 >> 3];
 l = +h[a + 456 >> 3];
 c = 0;
 do {
  o = c << 3;
  h[m + ((o | 1) << 3) >> 3] = +h[25528 + (o << 3) >> 3] * b + 0.0 + +h[25528 + ((o | 1) << 3) >> 3] * d + +h[25528 + ((o | 2) << 3) >> 3] * e + +h[25528 + ((o | 3) << 3) >> 3] * f + +h[25528 + ((o | 4) << 3) >> 3] * g + +h[25528 + ((o | 5) << 3) >> 3] * j + +h[25528 + ((o | 6) << 3) >> 3] * k + +h[25528 + ((o | 7) << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[a + 16 >> 3];
 d = +h[a + 80 >> 3];
 e = +h[a + 144 >> 3];
 f = +h[a + 208 >> 3];
 g = +h[a + 272 >> 3];
 j = +h[a + 336 >> 3];
 k = +h[a + 400 >> 3];
 l = +h[a + 464 >> 3];
 c = 0;
 do {
  o = c << 3;
  h[m + ((o | 2) << 3) >> 3] = +h[25528 + (o << 3) >> 3] * b + 0.0 + +h[25528 + ((o | 1) << 3) >> 3] * d + +h[25528 + ((o | 2) << 3) >> 3] * e + +h[25528 + ((o | 3) << 3) >> 3] * f + +h[25528 + ((o | 4) << 3) >> 3] * g + +h[25528 + ((o | 5) << 3) >> 3] * j + +h[25528 + ((o | 6) << 3) >> 3] * k + +h[25528 + ((o | 7) << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[a + 24 >> 3];
 d = +h[a + 88 >> 3];
 e = +h[a + 152 >> 3];
 f = +h[a + 216 >> 3];
 g = +h[a + 280 >> 3];
 j = +h[a + 344 >> 3];
 k = +h[a + 408 >> 3];
 l = +h[a + 472 >> 3];
 c = 0;
 do {
  o = c << 3;
  h[m + ((o | 3) << 3) >> 3] = +h[25528 + (o << 3) >> 3] * b + 0.0 + +h[25528 + ((o | 1) << 3) >> 3] * d + +h[25528 + ((o | 2) << 3) >> 3] * e + +h[25528 + ((o | 3) << 3) >> 3] * f + +h[25528 + ((o | 4) << 3) >> 3] * g + +h[25528 + ((o | 5) << 3) >> 3] * j + +h[25528 + ((o | 6) << 3) >> 3] * k + +h[25528 + ((o | 7) << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[a + 32 >> 3];
 d = +h[a + 96 >> 3];
 e = +h[a + 160 >> 3];
 f = +h[a + 224 >> 3];
 g = +h[a + 288 >> 3];
 j = +h[a + 352 >> 3];
 k = +h[a + 416 >> 3];
 l = +h[a + 480 >> 3];
 c = 0;
 do {
  o = c << 3;
  h[m + ((o | 4) << 3) >> 3] = +h[25528 + (o << 3) >> 3] * b + 0.0 + +h[25528 + ((o | 1) << 3) >> 3] * d + +h[25528 + ((o | 2) << 3) >> 3] * e + +h[25528 + ((o | 3) << 3) >> 3] * f + +h[25528 + ((o | 4) << 3) >> 3] * g + +h[25528 + ((o | 5) << 3) >> 3] * j + +h[25528 + ((o | 6) << 3) >> 3] * k + +h[25528 + ((o | 7) << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[a + 40 >> 3];
 d = +h[a + 104 >> 3];
 e = +h[a + 168 >> 3];
 f = +h[a + 232 >> 3];
 g = +h[a + 296 >> 3];
 j = +h[a + 360 >> 3];
 k = +h[a + 424 >> 3];
 l = +h[a + 488 >> 3];
 c = 0;
 do {
  o = c << 3;
  h[m + ((o | 5) << 3) >> 3] = +h[25528 + (o << 3) >> 3] * b + 0.0 + +h[25528 + ((o | 1) << 3) >> 3] * d + +h[25528 + ((o | 2) << 3) >> 3] * e + +h[25528 + ((o | 3) << 3) >> 3] * f + +h[25528 + ((o | 4) << 3) >> 3] * g + +h[25528 + ((o | 5) << 3) >> 3] * j + +h[25528 + ((o | 6) << 3) >> 3] * k + +h[25528 + ((o | 7) << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[a + 48 >> 3];
 d = +h[a + 112 >> 3];
 e = +h[a + 176 >> 3];
 f = +h[a + 240 >> 3];
 g = +h[a + 304 >> 3];
 j = +h[a + 368 >> 3];
 k = +h[a + 432 >> 3];
 l = +h[a + 496 >> 3];
 c = 0;
 do {
  o = c << 3;
  h[m + ((o | 6) << 3) >> 3] = +h[25528 + (o << 3) >> 3] * b + 0.0 + +h[25528 + ((o | 1) << 3) >> 3] * d + +h[25528 + ((o | 2) << 3) >> 3] * e + +h[25528 + ((o | 3) << 3) >> 3] * f + +h[25528 + ((o | 4) << 3) >> 3] * g + +h[25528 + ((o | 5) << 3) >> 3] * j + +h[25528 + ((o | 6) << 3) >> 3] * k + +h[25528 + ((o | 7) << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[a + 56 >> 3];
 d = +h[a + 120 >> 3];
 e = +h[a + 184 >> 3];
 f = +h[a + 248 >> 3];
 g = +h[a + 312 >> 3];
 j = +h[a + 376 >> 3];
 k = +h[a + 440 >> 3];
 l = +h[a + 504 >> 3];
 c = 0;
 do {
  o = c << 3;
  h[m + ((o | 7) << 3) >> 3] = +h[25528 + (o << 3) >> 3] * b + 0.0 + +h[25528 + ((o | 1) << 3) >> 3] * d + +h[25528 + ((o | 2) << 3) >> 3] * e + +h[25528 + ((o | 3) << 3) >> 3] * f + +h[25528 + ((o | 4) << 3) >> 3] * g + +h[25528 + ((o | 5) << 3) >> 3] * j + +h[25528 + ((o | 6) << 3) >> 3] * k + +h[25528 + ((o | 7) << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[m >> 3];
 d = +h[m + 8 >> 3];
 e = +h[m + 16 >> 3];
 f = +h[m + 24 >> 3];
 g = +h[m + 32 >> 3];
 j = +h[m + 40 >> 3];
 k = +h[m + 48 >> 3];
 l = +h[m + 56 >> 3];
 c = 0;
 do {
  o = c << 3;
  h[a + (c << 3) >> 3] = +h[25528 + (o << 3) >> 3] * b + 0.0 + +h[25528 + ((o | 1) << 3) >> 3] * d + +h[25528 + ((o | 2) << 3) >> 3] * e + +h[25528 + ((o | 3) << 3) >> 3] * f + +h[25528 + ((o | 4) << 3) >> 3] * g + +h[25528 + ((o | 5) << 3) >> 3] * j + +h[25528 + ((o | 6) << 3) >> 3] * k + +h[25528 + ((o | 7) << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[m + 64 >> 3];
 d = +h[m + 72 >> 3];
 e = +h[m + 80 >> 3];
 f = +h[m + 88 >> 3];
 g = +h[m + 96 >> 3];
 j = +h[m + 104 >> 3];
 k = +h[m + 112 >> 3];
 l = +h[m + 120 >> 3];
 c = 0;
 do {
  o = c << 3;
  h[a + (c + 8 << 3) >> 3] = +h[25528 + (o << 3) >> 3] * b + 0.0 + +h[25528 + ((o | 1) << 3) >> 3] * d + +h[25528 + ((o | 2) << 3) >> 3] * e + +h[25528 + ((o | 3) << 3) >> 3] * f + +h[25528 + ((o | 4) << 3) >> 3] * g + +h[25528 + ((o | 5) << 3) >> 3] * j + +h[25528 + ((o | 6) << 3) >> 3] * k + +h[25528 + ((o | 7) << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[m + 128 >> 3];
 d = +h[m + 136 >> 3];
 e = +h[m + 144 >> 3];
 f = +h[m + 152 >> 3];
 g = +h[m + 160 >> 3];
 j = +h[m + 168 >> 3];
 k = +h[m + 176 >> 3];
 l = +h[m + 184 >> 3];
 c = 0;
 do {
  o = c << 3;
  h[a + (c + 16 << 3) >> 3] = +h[25528 + (o << 3) >> 3] * b + 0.0 + +h[25528 + ((o | 1) << 3) >> 3] * d + +h[25528 + ((o | 2) << 3) >> 3] * e + +h[25528 + ((o | 3) << 3) >> 3] * f + +h[25528 + ((o | 4) << 3) >> 3] * g + +h[25528 + ((o | 5) << 3) >> 3] * j + +h[25528 + ((o | 6) << 3) >> 3] * k + +h[25528 + ((o | 7) << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[m + 192 >> 3];
 d = +h[m + 200 >> 3];
 e = +h[m + 208 >> 3];
 f = +h[m + 216 >> 3];
 g = +h[m + 224 >> 3];
 j = +h[m + 232 >> 3];
 k = +h[m + 240 >> 3];
 l = +h[m + 248 >> 3];
 c = 0;
 do {
  o = c << 3;
  h[a + (c + 24 << 3) >> 3] = +h[25528 + (o << 3) >> 3] * b + 0.0 + +h[25528 + ((o | 1) << 3) >> 3] * d + +h[25528 + ((o | 2) << 3) >> 3] * e + +h[25528 + ((o | 3) << 3) >> 3] * f + +h[25528 + ((o | 4) << 3) >> 3] * g + +h[25528 + ((o | 5) << 3) >> 3] * j + +h[25528 + ((o | 6) << 3) >> 3] * k + +h[25528 + ((o | 7) << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[m + 256 >> 3];
 d = +h[m + 264 >> 3];
 e = +h[m + 272 >> 3];
 f = +h[m + 280 >> 3];
 g = +h[m + 288 >> 3];
 j = +h[m + 296 >> 3];
 k = +h[m + 304 >> 3];
 l = +h[m + 312 >> 3];
 c = 0;
 do {
  o = c << 3;
  h[a + (c + 32 << 3) >> 3] = +h[25528 + (o << 3) >> 3] * b + 0.0 + +h[25528 + ((o | 1) << 3) >> 3] * d + +h[25528 + ((o | 2) << 3) >> 3] * e + +h[25528 + ((o | 3) << 3) >> 3] * f + +h[25528 + ((o | 4) << 3) >> 3] * g + +h[25528 + ((o | 5) << 3) >> 3] * j + +h[25528 + ((o | 6) << 3) >> 3] * k + +h[25528 + ((o | 7) << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[m + 320 >> 3];
 d = +h[m + 328 >> 3];
 e = +h[m + 336 >> 3];
 f = +h[m + 344 >> 3];
 g = +h[m + 352 >> 3];
 j = +h[m + 360 >> 3];
 k = +h[m + 368 >> 3];
 l = +h[m + 376 >> 3];
 c = 0;
 do {
  o = c << 3;
  h[a + (c + 40 << 3) >> 3] = +h[25528 + (o << 3) >> 3] * b + 0.0 + +h[25528 + ((o | 1) << 3) >> 3] * d + +h[25528 + ((o | 2) << 3) >> 3] * e + +h[25528 + ((o | 3) << 3) >> 3] * f + +h[25528 + ((o | 4) << 3) >> 3] * g + +h[25528 + ((o | 5) << 3) >> 3] * j + +h[25528 + ((o | 6) << 3) >> 3] * k + +h[25528 + ((o | 7) << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[m + 384 >> 3];
 d = +h[m + 392 >> 3];
 e = +h[m + 400 >> 3];
 f = +h[m + 408 >> 3];
 g = +h[m + 416 >> 3];
 j = +h[m + 424 >> 3];
 k = +h[m + 432 >> 3];
 l = +h[m + 440 >> 3];
 c = 0;
 do {
  o = c << 3;
  h[a + (c + 48 << 3) >> 3] = +h[25528 + (o << 3) >> 3] * b + 0.0 + +h[25528 + ((o | 1) << 3) >> 3] * d + +h[25528 + ((o | 2) << 3) >> 3] * e + +h[25528 + ((o | 3) << 3) >> 3] * f + +h[25528 + ((o | 4) << 3) >> 3] * g + +h[25528 + ((o | 5) << 3) >> 3] * j + +h[25528 + ((o | 6) << 3) >> 3] * k + +h[25528 + ((o | 7) << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 d = +h[m + 448 >> 3];
 e = +h[m + 456 >> 3];
 f = +h[m + 464 >> 3];
 g = +h[m + 472 >> 3];
 j = +h[m + 480 >> 3];
 k = +h[m + 488 >> 3];
 l = +h[m + 496 >> 3];
 b = +h[m + 504 >> 3];
 c = 0;
 do {
  o = c << 3;
  h[a + (c + 56 << 3) >> 3] = +h[25528 + (o << 3) >> 3] * d + 0.0 + +h[25528 + ((o | 1) << 3) >> 3] * e + +h[25528 + ((o | 2) << 3) >> 3] * f + +h[25528 + ((o | 3) << 3) >> 3] * g + +h[25528 + ((o | 4) << 3) >> 3] * j + +h[25528 + ((o | 5) << 3) >> 3] * k + +h[25528 + ((o | 6) << 3) >> 3] * l + +h[25528 + ((o | 7) << 3) >> 3] * b;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 i = n;
 return;
}

function oe(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 a : while (1) {
  l = b;
  m = b + -8 | 0;
  b : while (1) {
   k = a;
   e = l - k | 0;
   f = e >> 3;
   switch (f | 0) {
   case 2:
    {
     e = m;
     b = m;
     n = 4;
     break a;
    }
   case 3:
    {
     i = m;
     h = m;
     n = 6;
     break a;
    }
   case 4:
    {
     b = m;
     n = 14;
     break a;
    }
   case 5:
    {
     h = m;
     g = m;
     n = 15;
     break a;
    }
   case 1:
   case 0:
    {
     n = 69;
     break a;
    }
   default:
    {}
   }
   if ((e | 0) < 248) {
    n = 21;
    break a;
   }
   g = (f | 0) / 2 | 0;
   j = a + (g << 3) | 0;
   do if ((e | 0) > 7992) {
    e = (f | 0) / 4 | 0;
    h = a + (e << 3) | 0;
    e = a + (e + g << 3) | 0;
    f = pe(a, h, j, e, d) | 0;
    if (qb[c[d >> 2] & 1](m, e) | 0) {
     i = e;
     o = c[i >> 2] | 0;
     i = c[i + 4 >> 2] | 0;
     q = m;
     p = c[q + 4 >> 2] | 0;
     g = e;
     c[g >> 2] = c[q >> 2];
     c[g + 4 >> 2] = p;
     g = m;
     c[g >> 2] = o;
     c[g + 4 >> 2] = i;
     g = f + 1 | 0;
     if (qb[c[d >> 2] & 1](e, j) | 0) {
      q = j;
      p = c[q >> 2] | 0;
      q = c[q + 4 >> 2] | 0;
      g = e;
      i = c[g + 4 >> 2] | 0;
      o = j;
      c[o >> 2] = c[g >> 2];
      c[o + 4 >> 2] = i;
      c[e >> 2] = p;
      c[e + 4 >> 2] = q;
      e = f + 2 | 0;
      if (qb[c[d >> 2] & 1](j, h) | 0) {
       p = h;
       o = c[p >> 2] | 0;
       p = c[p + 4 >> 2] | 0;
       g = j;
       i = c[g + 4 >> 2] | 0;
       q = h;
       c[q >> 2] = c[g >> 2];
       c[q + 4 >> 2] = i;
       q = j;
       c[q >> 2] = o;
       c[q + 4 >> 2] = p;
       if (qb[c[d >> 2] & 1](h, a) | 0) {
        p = a;
        o = c[p >> 2] | 0;
        p = c[p + 4 >> 2] | 0;
        g = h;
        i = c[g + 4 >> 2] | 0;
        q = a;
        c[q >> 2] = c[g >> 2];
        c[q + 4 >> 2] = i;
        q = h;
        c[q >> 2] = o;
        c[q + 4 >> 2] = p;
        f = f + 4 | 0;
       } else f = f + 3 | 0;
      } else f = e;
     } else f = g;
    }
   } else {
    q = qb[c[d >> 2] & 1](j, a) | 0;
    e = qb[c[d >> 2] & 1](m, j) | 0;
    if (!q) {
     if (!e) {
      f = 0;
      break;
     }
     p = j;
     o = c[p >> 2] | 0;
     p = c[p + 4 >> 2] | 0;
     h = m;
     i = c[h + 4 >> 2] | 0;
     q = j;
     c[q >> 2] = c[h >> 2];
     c[q + 4 >> 2] = i;
     q = m;
     c[q >> 2] = o;
     c[q + 4 >> 2] = p;
     if (!(qb[c[d >> 2] & 1](j, a) | 0)) {
      f = 1;
      break;
     }
     q = a;
     p = c[q >> 2] | 0;
     q = c[q + 4 >> 2] | 0;
     i = j;
     o = c[i + 4 >> 2] | 0;
     f = a;
     c[f >> 2] = c[i >> 2];
     c[f + 4 >> 2] = o;
     f = j;
     c[f >> 2] = p;
     c[f + 4 >> 2] = q;
     f = 2;
     break;
    }
    g = a;
    f = c[g >> 2] | 0;
    g = c[g + 4 >> 2] | 0;
    if (e) {
     o = m;
     p = c[o + 4 >> 2] | 0;
     q = a;
     c[q >> 2] = c[o >> 2];
     c[q + 4 >> 2] = p;
     q = m;
     c[q >> 2] = f;
     c[q + 4 >> 2] = g;
     f = 1;
     break;
    }
    o = j;
    p = c[o + 4 >> 2] | 0;
    q = a;
    c[q >> 2] = c[o >> 2];
    c[q + 4 >> 2] = p;
    q = j;
    c[q >> 2] = f;
    c[q + 4 >> 2] = g;
    if (qb[c[d >> 2] & 1](m, j) | 0) {
     q = j;
     p = c[q >> 2] | 0;
     q = c[q + 4 >> 2] | 0;
     i = m;
     o = c[i + 4 >> 2] | 0;
     f = j;
     c[f >> 2] = c[i >> 2];
     c[f + 4 >> 2] = o;
     f = m;
     c[f >> 2] = p;
     c[f + 4 >> 2] = q;
     f = 2;
    } else f = 1;
   } while (0);
   do if (qb[c[d >> 2] & 1](a, j) | 0) g = m; else {
    e = m;
    while (1) {
     e = e + -8 | 0;
     if ((a | 0) == (e | 0)) break;
     if (qb[c[d >> 2] & 1](e, j) | 0) {
      n = 51;
      break;
     }
    }
    if ((n | 0) == 51) {
     n = 0;
     q = a;
     p = c[q >> 2] | 0;
     q = c[q + 4 >> 2] | 0;
     i = e;
     o = c[i + 4 >> 2] | 0;
     g = a;
     c[g >> 2] = c[i >> 2];
     c[g + 4 >> 2] = o;
     g = e;
     c[g >> 2] = p;
     c[g + 4 >> 2] = q;
     g = e;
     f = f + 1 | 0;
     break;
    }
    e = a + 8 | 0;
    if (!(qb[c[d >> 2] & 1](a, m) | 0)) {
     if ((e | 0) == (m | 0)) {
      n = 69;
      break a;
     } else f = a;
     while (1) {
      if (qb[c[d >> 2] & 1](a, e) | 0) break;
      f = e + 8 | 0;
      if ((f | 0) == (m | 0)) {
       n = 69;
       break a;
      } else {
       q = e;
       e = f;
       f = q;
      }
     }
     q = e;
     p = c[q >> 2] | 0;
     q = c[q + 4 >> 2] | 0;
     k = m;
     o = c[k + 4 >> 2] | 0;
     c[e >> 2] = c[k >> 2];
     c[e + 4 >> 2] = o;
     e = m;
     c[e >> 2] = p;
     c[e + 4 >> 2] = q;
     e = f + 16 | 0;
    }
    if ((e | 0) == (m | 0)) {
     n = 69;
     break a;
    } else f = m;
    while (1) {
     g = e;
     while (1) {
      e = g + 8 | 0;
      if (qb[c[d >> 2] & 1](a, g) | 0) break; else g = e;
     }
     do f = f + -8 | 0; while (qb[c[d >> 2] & 1](a, f) | 0);
     if (g >>> 0 >= f >>> 0) {
      a = g;
      continue b;
     }
     p = g;
     o = c[p >> 2] | 0;
     p = c[p + 4 >> 2] | 0;
     j = f;
     k = c[j + 4 >> 2] | 0;
     q = g;
     c[q >> 2] = c[j >> 2];
     c[q + 4 >> 2] = k;
     q = f;
     c[q >> 2] = o;
     c[q + 4 >> 2] = p;
    }
   } while (0);
   e = a + 8 | 0;
   c : do if (e >>> 0 < g >>> 0) {
    i = g;
    while (1) {
     g = e;
     while (1) {
      e = g + 8 | 0;
      if (qb[c[d >> 2] & 1](g, j) | 0) g = e; else {
       h = g;
       break;
      }
     }
     g = i;
     do g = g + -8 | 0; while (!(qb[c[d >> 2] & 1](g, j) | 0));
     if (h >>> 0 > g >>> 0) {
      e = h;
      g = j;
      break c;
     }
     q = h;
     p = c[q >> 2] | 0;
     q = c[q + 4 >> 2] | 0;
     r = g;
     o = c[r + 4 >> 2] | 0;
     i = h;
     c[i >> 2] = c[r >> 2];
     c[i + 4 >> 2] = o;
     i = g;
     c[i >> 2] = p;
     c[i + 4 >> 2] = q;
     i = g;
     j = (j | 0) == (h | 0) ? g : j;
     f = f + 1 | 0;
    }
   } else g = j; while (0);
   if ((e | 0) != (g | 0) ? qb[c[d >> 2] & 1](g, e) | 0 : 0) {
    q = e;
    p = c[q >> 2] | 0;
    q = c[q + 4 >> 2] | 0;
    j = g;
    o = c[j + 4 >> 2] | 0;
    r = e;
    c[r >> 2] = c[j >> 2];
    c[r + 4 >> 2] = o;
    r = g;
    c[r >> 2] = p;
    c[r + 4 >> 2] = q;
    f = f + 1 | 0;
   }
   if (!f) {
    f = re(a, e, d) | 0;
    g = e + 8 | 0;
    if (re(g, b, d) | 0) {
     n = 64;
     break;
    }
    if (f) {
     a = g;
     continue;
    }
   }
   r = e;
   if ((r - k | 0) >= (l - r | 0)) {
    n = 68;
    break;
   }
   oe(a, e, d);
   a = e + 8 | 0;
  }
  if ((n | 0) == 64) {
   n = 0;
   if (f) {
    n = 69;
    break;
   } else {
    b = e;
    continue;
   }
  } else if ((n | 0) == 68) {
   n = 0;
   oe(e + 8 | 0, b, d);
   b = e;
   continue;
  }
 }
 if ((n | 0) == 4) {
  if (!(qb[c[d >> 2] & 1](e, a) | 0)) return;
  q = a;
  p = c[q >> 2] | 0;
  q = c[q + 4 >> 2] | 0;
  d = b;
  o = c[d + 4 >> 2] | 0;
  r = a;
  c[r >> 2] = c[d >> 2];
  c[r + 4 >> 2] = o;
  r = b;
  c[r >> 2] = p;
  c[r + 4 >> 2] = q;
  return;
 } else if ((n | 0) == 6) {
  b = a + 8 | 0;
  r = qb[c[d >> 2] & 1](b, a) | 0;
  e = qb[c[d >> 2] & 1](i, b) | 0;
  if (!r) {
   if (!e) return;
   q = b;
   p = c[q >> 2] | 0;
   q = c[q + 4 >> 2] | 0;
   n = h;
   o = c[n + 4 >> 2] | 0;
   r = b;
   c[r >> 2] = c[n >> 2];
   c[r + 4 >> 2] = o;
   r = h;
   c[r >> 2] = p;
   c[r + 4 >> 2] = q;
   if (!(qb[c[d >> 2] & 1](b, a) | 0)) return;
   q = a;
   p = c[q >> 2] | 0;
   q = c[q + 4 >> 2] | 0;
   d = b;
   o = c[d + 4 >> 2] | 0;
   r = a;
   c[r >> 2] = c[d >> 2];
   c[r + 4 >> 2] = o;
   r = b;
   c[r >> 2] = p;
   c[r + 4 >> 2] = q;
   return;
  }
  g = a;
  f = c[g >> 2] | 0;
  g = c[g + 4 >> 2] | 0;
  if (e) {
   p = h;
   q = c[p + 4 >> 2] | 0;
   r = a;
   c[r >> 2] = c[p >> 2];
   c[r + 4 >> 2] = q;
   r = h;
   c[r >> 2] = f;
   c[r + 4 >> 2] = g;
   return;
  }
  p = b;
  q = c[p + 4 >> 2] | 0;
  r = a;
  c[r >> 2] = c[p >> 2];
  c[r + 4 >> 2] = q;
  r = b;
  c[r >> 2] = f;
  c[r + 4 >> 2] = g;
  if (!(qb[c[d >> 2] & 1](i, b) | 0)) return;
  q = b;
  p = c[q >> 2] | 0;
  q = c[q + 4 >> 2] | 0;
  d = h;
  o = c[d + 4 >> 2] | 0;
  r = b;
  c[r >> 2] = c[d >> 2];
  c[r + 4 >> 2] = o;
  r = h;
  c[r >> 2] = p;
  c[r + 4 >> 2] = q;
  return;
 } else if ((n | 0) == 14) {
  pe(a, a + 8 | 0, a + 16 | 0, b, d) | 0;
  return;
 } else if ((n | 0) == 15) {
  b = a + 8 | 0;
  e = a + 16 | 0;
  f = a + 24 | 0;
  pe(a, b, e, f, d) | 0;
  if (!(qb[c[d >> 2] & 1](h, f) | 0)) return;
  q = f;
  p = c[q >> 2] | 0;
  q = c[q + 4 >> 2] | 0;
  n = g;
  o = c[n + 4 >> 2] | 0;
  r = f;
  c[r >> 2] = c[n >> 2];
  c[r + 4 >> 2] = o;
  r = g;
  c[r >> 2] = p;
  c[r + 4 >> 2] = q;
  if (!(qb[c[d >> 2] & 1](f, e) | 0)) return;
  q = e;
  p = c[q >> 2] | 0;
  q = c[q + 4 >> 2] | 0;
  n = f;
  o = c[n + 4 >> 2] | 0;
  r = e;
  c[r >> 2] = c[n >> 2];
  c[r + 4 >> 2] = o;
  r = f;
  c[r >> 2] = p;
  c[r + 4 >> 2] = q;
  if (!(qb[c[d >> 2] & 1](e, b) | 0)) return;
  q = b;
  p = c[q >> 2] | 0;
  q = c[q + 4 >> 2] | 0;
  n = e;
  o = c[n + 4 >> 2] | 0;
  r = b;
  c[r >> 2] = c[n >> 2];
  c[r + 4 >> 2] = o;
  r = e;
  c[r >> 2] = p;
  c[r + 4 >> 2] = q;
  if (!(qb[c[d >> 2] & 1](b, a) | 0)) return;
  q = a;
  p = c[q >> 2] | 0;
  q = c[q + 4 >> 2] | 0;
  d = b;
  o = c[d + 4 >> 2] | 0;
  r = a;
  c[r >> 2] = c[d >> 2];
  c[r + 4 >> 2] = o;
  r = b;
  c[r >> 2] = p;
  c[r + 4 >> 2] = q;
  return;
 } else if ((n | 0) == 21) {
  qe(a, b, d);
  return;
 } else if ((n | 0) == 69) return;
}

function Eb(a) {
 a = a | 0;
 var b = 0.0, c = 0, d = 0.0, e = 0.0, f = 0.0, g = 0.0, j = 0.0, k = 0.0, l = 0.0, m = 0, n = 0, o = 0;
 n = i;
 i = i + 512 | 0;
 m = n;
 b = +h[a >> 3];
 d = +h[a + 64 >> 3];
 e = +h[a + 128 >> 3];
 f = +h[a + 192 >> 3];
 g = +h[a + 256 >> 3];
 j = +h[a + 320 >> 3];
 k = +h[a + 384 >> 3];
 l = +h[a + 448 >> 3];
 c = 0;
 do {
  h[m + (c << 3 << 3) >> 3] = +h[25528 + (c << 3) >> 3] * b + 0.0 + +h[25528 + (c + 8 << 3) >> 3] * d + +h[25528 + (c + 16 << 3) >> 3] * e + +h[25528 + (c + 24 << 3) >> 3] * f + +h[25528 + (c + 32 << 3) >> 3] * g + +h[25528 + (c + 40 << 3) >> 3] * j + +h[25528 + (c + 48 << 3) >> 3] * k + +h[25528 + (c + 56 << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[a + 8 >> 3];
 d = +h[a + 72 >> 3];
 e = +h[a + 136 >> 3];
 f = +h[a + 200 >> 3];
 g = +h[a + 264 >> 3];
 j = +h[a + 328 >> 3];
 k = +h[a + 392 >> 3];
 l = +h[a + 456 >> 3];
 c = 0;
 do {
  h[m + ((c << 3 | 1) << 3) >> 3] = +h[25528 + (c << 3) >> 3] * b + 0.0 + +h[25528 + (c + 8 << 3) >> 3] * d + +h[25528 + (c + 16 << 3) >> 3] * e + +h[25528 + (c + 24 << 3) >> 3] * f + +h[25528 + (c + 32 << 3) >> 3] * g + +h[25528 + (c + 40 << 3) >> 3] * j + +h[25528 + (c + 48 << 3) >> 3] * k + +h[25528 + (c + 56 << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[a + 16 >> 3];
 d = +h[a + 80 >> 3];
 e = +h[a + 144 >> 3];
 f = +h[a + 208 >> 3];
 g = +h[a + 272 >> 3];
 j = +h[a + 336 >> 3];
 k = +h[a + 400 >> 3];
 l = +h[a + 464 >> 3];
 c = 0;
 do {
  h[m + ((c << 3 | 2) << 3) >> 3] = +h[25528 + (c << 3) >> 3] * b + 0.0 + +h[25528 + (c + 8 << 3) >> 3] * d + +h[25528 + (c + 16 << 3) >> 3] * e + +h[25528 + (c + 24 << 3) >> 3] * f + +h[25528 + (c + 32 << 3) >> 3] * g + +h[25528 + (c + 40 << 3) >> 3] * j + +h[25528 + (c + 48 << 3) >> 3] * k + +h[25528 + (c + 56 << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[a + 24 >> 3];
 d = +h[a + 88 >> 3];
 e = +h[a + 152 >> 3];
 f = +h[a + 216 >> 3];
 g = +h[a + 280 >> 3];
 j = +h[a + 344 >> 3];
 k = +h[a + 408 >> 3];
 l = +h[a + 472 >> 3];
 c = 0;
 do {
  h[m + ((c << 3 | 3) << 3) >> 3] = +h[25528 + (c << 3) >> 3] * b + 0.0 + +h[25528 + (c + 8 << 3) >> 3] * d + +h[25528 + (c + 16 << 3) >> 3] * e + +h[25528 + (c + 24 << 3) >> 3] * f + +h[25528 + (c + 32 << 3) >> 3] * g + +h[25528 + (c + 40 << 3) >> 3] * j + +h[25528 + (c + 48 << 3) >> 3] * k + +h[25528 + (c + 56 << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[a + 32 >> 3];
 d = +h[a + 96 >> 3];
 e = +h[a + 160 >> 3];
 f = +h[a + 224 >> 3];
 g = +h[a + 288 >> 3];
 j = +h[a + 352 >> 3];
 k = +h[a + 416 >> 3];
 l = +h[a + 480 >> 3];
 c = 0;
 do {
  h[m + ((c << 3 | 4) << 3) >> 3] = +h[25528 + (c << 3) >> 3] * b + 0.0 + +h[25528 + (c + 8 << 3) >> 3] * d + +h[25528 + (c + 16 << 3) >> 3] * e + +h[25528 + (c + 24 << 3) >> 3] * f + +h[25528 + (c + 32 << 3) >> 3] * g + +h[25528 + (c + 40 << 3) >> 3] * j + +h[25528 + (c + 48 << 3) >> 3] * k + +h[25528 + (c + 56 << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[a + 40 >> 3];
 d = +h[a + 104 >> 3];
 e = +h[a + 168 >> 3];
 f = +h[a + 232 >> 3];
 g = +h[a + 296 >> 3];
 j = +h[a + 360 >> 3];
 k = +h[a + 424 >> 3];
 l = +h[a + 488 >> 3];
 c = 0;
 do {
  h[m + ((c << 3 | 5) << 3) >> 3] = +h[25528 + (c << 3) >> 3] * b + 0.0 + +h[25528 + (c + 8 << 3) >> 3] * d + +h[25528 + (c + 16 << 3) >> 3] * e + +h[25528 + (c + 24 << 3) >> 3] * f + +h[25528 + (c + 32 << 3) >> 3] * g + +h[25528 + (c + 40 << 3) >> 3] * j + +h[25528 + (c + 48 << 3) >> 3] * k + +h[25528 + (c + 56 << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[a + 48 >> 3];
 d = +h[a + 112 >> 3];
 e = +h[a + 176 >> 3];
 f = +h[a + 240 >> 3];
 g = +h[a + 304 >> 3];
 j = +h[a + 368 >> 3];
 k = +h[a + 432 >> 3];
 l = +h[a + 496 >> 3];
 c = 0;
 do {
  h[m + ((c << 3 | 6) << 3) >> 3] = +h[25528 + (c << 3) >> 3] * b + 0.0 + +h[25528 + (c + 8 << 3) >> 3] * d + +h[25528 + (c + 16 << 3) >> 3] * e + +h[25528 + (c + 24 << 3) >> 3] * f + +h[25528 + (c + 32 << 3) >> 3] * g + +h[25528 + (c + 40 << 3) >> 3] * j + +h[25528 + (c + 48 << 3) >> 3] * k + +h[25528 + (c + 56 << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[a + 56 >> 3];
 d = +h[a + 120 >> 3];
 e = +h[a + 184 >> 3];
 f = +h[a + 248 >> 3];
 g = +h[a + 312 >> 3];
 j = +h[a + 376 >> 3];
 k = +h[a + 440 >> 3];
 l = +h[a + 504 >> 3];
 c = 0;
 do {
  h[m + ((c << 3 | 7) << 3) >> 3] = +h[25528 + (c << 3) >> 3] * b + 0.0 + +h[25528 + (c + 8 << 3) >> 3] * d + +h[25528 + (c + 16 << 3) >> 3] * e + +h[25528 + (c + 24 << 3) >> 3] * f + +h[25528 + (c + 32 << 3) >> 3] * g + +h[25528 + (c + 40 << 3) >> 3] * j + +h[25528 + (c + 48 << 3) >> 3] * k + +h[25528 + (c + 56 << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[m >> 3];
 d = +h[m + 8 >> 3];
 e = +h[m + 16 >> 3];
 f = +h[m + 24 >> 3];
 g = +h[m + 32 >> 3];
 j = +h[m + 40 >> 3];
 k = +h[m + 48 >> 3];
 l = +h[m + 56 >> 3];
 c = 0;
 do {
  h[a + (c << 3) >> 3] = +h[25528 + (c << 3) >> 3] * b + 0.0 + +h[25528 + (c + 8 << 3) >> 3] * d + +h[25528 + (c + 16 << 3) >> 3] * e + +h[25528 + (c + 24 << 3) >> 3] * f + +h[25528 + (c + 32 << 3) >> 3] * g + +h[25528 + (c + 40 << 3) >> 3] * j + +h[25528 + (c + 48 << 3) >> 3] * k + +h[25528 + (c + 56 << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[m + 64 >> 3];
 d = +h[m + 72 >> 3];
 e = +h[m + 80 >> 3];
 f = +h[m + 88 >> 3];
 g = +h[m + 96 >> 3];
 j = +h[m + 104 >> 3];
 k = +h[m + 112 >> 3];
 l = +h[m + 120 >> 3];
 c = 0;
 do {
  o = c + 8 | 0;
  h[a + (o << 3) >> 3] = +h[25528 + (c << 3) >> 3] * b + 0.0 + +h[25528 + (o << 3) >> 3] * d + +h[25528 + (c + 16 << 3) >> 3] * e + +h[25528 + (c + 24 << 3) >> 3] * f + +h[25528 + (c + 32 << 3) >> 3] * g + +h[25528 + (c + 40 << 3) >> 3] * j + +h[25528 + (c + 48 << 3) >> 3] * k + +h[25528 + (c + 56 << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[m + 128 >> 3];
 d = +h[m + 136 >> 3];
 e = +h[m + 144 >> 3];
 f = +h[m + 152 >> 3];
 g = +h[m + 160 >> 3];
 j = +h[m + 168 >> 3];
 k = +h[m + 176 >> 3];
 l = +h[m + 184 >> 3];
 c = 0;
 do {
  o = c + 16 | 0;
  h[a + (o << 3) >> 3] = +h[25528 + (c << 3) >> 3] * b + 0.0 + +h[25528 + (c + 8 << 3) >> 3] * d + +h[25528 + (o << 3) >> 3] * e + +h[25528 + (c + 24 << 3) >> 3] * f + +h[25528 + (c + 32 << 3) >> 3] * g + +h[25528 + (c + 40 << 3) >> 3] * j + +h[25528 + (c + 48 << 3) >> 3] * k + +h[25528 + (c + 56 << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[m + 192 >> 3];
 d = +h[m + 200 >> 3];
 e = +h[m + 208 >> 3];
 f = +h[m + 216 >> 3];
 g = +h[m + 224 >> 3];
 j = +h[m + 232 >> 3];
 k = +h[m + 240 >> 3];
 l = +h[m + 248 >> 3];
 c = 0;
 do {
  o = c + 24 | 0;
  h[a + (o << 3) >> 3] = +h[25528 + (c << 3) >> 3] * b + 0.0 + +h[25528 + (c + 8 << 3) >> 3] * d + +h[25528 + (c + 16 << 3) >> 3] * e + +h[25528 + (o << 3) >> 3] * f + +h[25528 + (c + 32 << 3) >> 3] * g + +h[25528 + (c + 40 << 3) >> 3] * j + +h[25528 + (c + 48 << 3) >> 3] * k + +h[25528 + (c + 56 << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[m + 256 >> 3];
 d = +h[m + 264 >> 3];
 e = +h[m + 272 >> 3];
 f = +h[m + 280 >> 3];
 g = +h[m + 288 >> 3];
 j = +h[m + 296 >> 3];
 k = +h[m + 304 >> 3];
 l = +h[m + 312 >> 3];
 c = 0;
 do {
  o = c + 32 | 0;
  h[a + (o << 3) >> 3] = +h[25528 + (c << 3) >> 3] * b + 0.0 + +h[25528 + (c + 8 << 3) >> 3] * d + +h[25528 + (c + 16 << 3) >> 3] * e + +h[25528 + (c + 24 << 3) >> 3] * f + +h[25528 + (o << 3) >> 3] * g + +h[25528 + (c + 40 << 3) >> 3] * j + +h[25528 + (c + 48 << 3) >> 3] * k + +h[25528 + (c + 56 << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[m + 320 >> 3];
 d = +h[m + 328 >> 3];
 e = +h[m + 336 >> 3];
 f = +h[m + 344 >> 3];
 g = +h[m + 352 >> 3];
 j = +h[m + 360 >> 3];
 k = +h[m + 368 >> 3];
 l = +h[m + 376 >> 3];
 c = 0;
 do {
  o = c + 40 | 0;
  h[a + (o << 3) >> 3] = +h[25528 + (c << 3) >> 3] * b + 0.0 + +h[25528 + (c + 8 << 3) >> 3] * d + +h[25528 + (c + 16 << 3) >> 3] * e + +h[25528 + (c + 24 << 3) >> 3] * f + +h[25528 + (c + 32 << 3) >> 3] * g + +h[25528 + (o << 3) >> 3] * j + +h[25528 + (c + 48 << 3) >> 3] * k + +h[25528 + (c + 56 << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 b = +h[m + 384 >> 3];
 d = +h[m + 392 >> 3];
 e = +h[m + 400 >> 3];
 f = +h[m + 408 >> 3];
 g = +h[m + 416 >> 3];
 j = +h[m + 424 >> 3];
 k = +h[m + 432 >> 3];
 l = +h[m + 440 >> 3];
 c = 0;
 do {
  o = c + 48 | 0;
  h[a + (o << 3) >> 3] = +h[25528 + (c << 3) >> 3] * b + 0.0 + +h[25528 + (c + 8 << 3) >> 3] * d + +h[25528 + (c + 16 << 3) >> 3] * e + +h[25528 + (c + 24 << 3) >> 3] * f + +h[25528 + (c + 32 << 3) >> 3] * g + +h[25528 + (c + 40 << 3) >> 3] * j + +h[25528 + (o << 3) >> 3] * k + +h[25528 + (c + 56 << 3) >> 3] * l;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 d = +h[m + 448 >> 3];
 e = +h[m + 456 >> 3];
 f = +h[m + 464 >> 3];
 g = +h[m + 472 >> 3];
 j = +h[m + 480 >> 3];
 k = +h[m + 488 >> 3];
 l = +h[m + 496 >> 3];
 b = +h[m + 504 >> 3];
 c = 0;
 do {
  o = c + 56 | 0;
  h[a + (o << 3) >> 3] = +h[25528 + (c << 3) >> 3] * d + 0.0 + +h[25528 + (c + 8 << 3) >> 3] * e + +h[25528 + (c + 16 << 3) >> 3] * f + +h[25528 + (c + 24 << 3) >> 3] * g + +h[25528 + (c + 32 << 3) >> 3] * j + +h[25528 + (c + 40 << 3) >> 3] * k + +h[25528 + (c + 48 << 3) >> 3] * l + +h[25528 + (o << 3) >> 3] * b;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 i = n;
 return;
}

function Zd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0.0, h = 0.0, i = 0, j = 0, k = 0, l = 0.0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0.0, w = 0, x = 0.0, y = 0, z = 0;
 a : while (1) {
  t = b;
  d = b + -8 | 0;
  e = b + -4 | 0;
  b : while (1) {
   s = a;
   i = t - s | 0;
   j = i >> 3;
   switch (j | 0) {
   case 2:
    {
     z = 4;
     break a;
    }
   case 3:
    {
     z = 6;
     break a;
    }
   case 4:
    {
     z = 14;
     break a;
    }
   case 5:
    {
     z = 15;
     break a;
    }
   case 1:
   case 0:
    {
     z = 84;
     break a;
    }
   default:
    {}
   }
   if ((i | 0) < 56) {
    z = 21;
    break a;
   }
   m = (j | 0) / 2 | 0;
   r = a + (m << 3) | 0;
   do if ((i | 0) > 7992) {
    p = (j | 0) / 4 | 0;
    q = a + (p << 3) | 0;
    o = p + m | 0;
    n = a + (o << 3) | 0;
    i = _d(a, q, r, n) | 0;
    h = +g[e >> 2];
    o = a + (o << 3) + 4 | 0;
    f = +g[o >> 2];
    if (!(h < f)) {
     j = a + (m << 3) + 4 | 0;
     break;
    }
    k = c[n >> 2] | 0;
    c[n >> 2] = c[d >> 2];
    c[d >> 2] = k;
    g[o >> 2] = h;
    g[e >> 2] = f;
    k = i + 1 | 0;
    h = +g[o >> 2];
    j = a + (m << 3) + 4 | 0;
    f = +g[j >> 2];
    if (h < f) {
     k = c[r >> 2] | 0;
     c[r >> 2] = c[n >> 2];
     c[n >> 2] = k;
     g[j >> 2] = h;
     g[o >> 2] = f;
     k = i + 2 | 0;
     h = +g[j >> 2];
     m = a + (p << 3) + 4 | 0;
     f = +g[m >> 2];
     if (h < f) {
      k = c[q >> 2] | 0;
      c[q >> 2] = c[r >> 2];
      c[r >> 2] = k;
      g[m >> 2] = h;
      g[j >> 2] = f;
      h = +g[m >> 2];
      k = a + 4 | 0;
      f = +g[k >> 2];
      if (h < f) {
       p = c[a >> 2] | 0;
       c[a >> 2] = c[q >> 2];
       c[q >> 2] = p;
       g[k >> 2] = h;
       g[m >> 2] = f;
       i = i + 4 | 0;
      } else i = i + 3 | 0;
     } else i = k;
    } else i = k;
   } else {
    j = a + (m << 3) + 4 | 0;
    h = +g[j >> 2];
    k = a + 4 | 0;
    l = +g[k >> 2];
    f = +g[e >> 2];
    i = f < h;
    if (!(h < l)) {
     if (!i) {
      i = 0;
      break;
     }
     q = c[r >> 2] | 0;
     c[r >> 2] = c[d >> 2];
     c[d >> 2] = q;
     g[j >> 2] = f;
     g[e >> 2] = h;
     h = +g[j >> 2];
     f = +g[k >> 2];
     if (!(h < f)) {
      i = 1;
      break;
     }
     i = c[a >> 2] | 0;
     c[a >> 2] = c[r >> 2];
     c[r >> 2] = i;
     g[k >> 2] = h;
     g[j >> 2] = f;
     i = 2;
     break;
    }
    if (i) {
     i = c[a >> 2] | 0;
     c[a >> 2] = c[d >> 2];
     c[d >> 2] = i;
     g[k >> 2] = f;
     g[e >> 2] = l;
     i = 1;
     break;
    }
    i = c[a >> 2] | 0;
    c[a >> 2] = c[r >> 2];
    c[r >> 2] = i;
    g[k >> 2] = h;
    g[j >> 2] = l;
    f = +g[e >> 2];
    if (f < l) {
     c[r >> 2] = c[d >> 2];
     c[d >> 2] = i;
     g[j >> 2] = f;
     g[e >> 2] = l;
     i = 2;
    } else i = 1;
   } while (0);
   o = a + 4 | 0;
   l = +g[o >> 2];
   h = +g[j >> 2];
   do if (l < h) k = d; else {
    j = b;
    m = d;
    while (1) {
     k = m + -8 | 0;
     if ((a | 0) == (k | 0)) break;
     j = j + -12 | 0;
     f = +g[j >> 2];
     if (f < h) {
      z = 66;
      break;
     } else {
      j = m;
      m = k;
     }
    }
    if ((z | 0) == 66) {
     z = 0;
     q = c[a >> 2] | 0;
     c[a >> 2] = c[k >> 2];
     c[k >> 2] = q;
     g[o >> 2] = f;
     g[j >> 2] = l;
     i = i + 1 | 0;
     break;
    }
    i = a + 8 | 0;
    h = +g[e >> 2];
    if (l < h) a = i; else {
     if ((i | 0) == (d | 0)) {
      z = 84;
      break a;
     }
     while (1) {
      k = a + 12 | 0;
      f = +g[k >> 2];
      j = i + 8 | 0;
      if (l < f) {
       i = k;
       break;
      }
      if ((j | 0) == (d | 0)) {
       z = 84;
       break a;
      } else {
       a = i;
       i = j;
      }
     }
     r = a + 8 | 0;
     s = c[r >> 2] | 0;
     c[r >> 2] = c[d >> 2];
     c[d >> 2] = s;
     g[i >> 2] = h;
     g[e >> 2] = f;
     a = a + 16 | 0;
    }
    if ((a | 0) == (d | 0)) {
     z = 84;
     break a;
    } else k = d;
    while (1) {
     l = +g[o >> 2];
     while (1) {
      j = a + 4 | 0;
      f = +g[j >> 2];
      i = a + 8 | 0;
      if (l < f) {
       h = f;
       break;
      } else a = i;
     }
     while (1) {
      n = k + -8 | 0;
      k = k + -4 | 0;
      f = +g[k >> 2];
      if (l < f) k = n; else {
       m = k;
       k = n;
       break;
      }
     }
     if (a >>> 0 >= k >>> 0) continue b;
     s = c[a >> 2] | 0;
     c[a >> 2] = c[k >> 2];
     c[k >> 2] = s;
     g[j >> 2] = f;
     g[m >> 2] = h;
     a = i;
    }
   } while (0);
   j = a + 8 | 0;
   c : do if (j >>> 0 < k >>> 0) {
    p = r;
    while (1) {
     l = +g[p + 4 >> 2];
     n = j;
     while (1) {
      m = n + 4 | 0;
      f = +g[m >> 2];
      j = n + 8 | 0;
      if (f < l) n = j; else {
       h = f;
       o = n;
       break;
      }
     }
     while (1) {
      n = k + -8 | 0;
      k = k + -4 | 0;
      f = +g[k >> 2];
      if (f < l) break; else k = n;
     }
     if (o >>> 0 > n >>> 0) {
      k = o;
      j = p;
      break c;
     }
     r = c[o >> 2] | 0;
     c[o >> 2] = c[n >> 2];
     c[n >> 2] = r;
     g[m >> 2] = f;
     g[k >> 2] = h;
     k = n;
     p = (p | 0) == (o | 0) ? n : p;
     i = i + 1 | 0;
    }
   } else {
    k = j;
    j = r;
   } while (0);
   if ((k | 0) != (j | 0) ? (w = j + 4 | 0, x = +g[w >> 2], u = k + 4 | 0, v = +g[u >> 2], x < v) : 0) {
    r = c[k >> 2] | 0;
    c[k >> 2] = c[j >> 2];
    c[j >> 2] = r;
    g[u >> 2] = x;
    g[w >> 2] = v;
    i = i + 1 | 0;
   }
   if (!i) {
    i = $d(a, k) | 0;
    j = k + 8 | 0;
    if ($d(j, b) | 0) {
     z = 79;
     break;
    }
    if (i) {
     a = j;
     continue;
    }
   }
   r = k;
   if ((r - s | 0) >= (t - r | 0)) {
    d = k;
    z = 83;
    break;
   }
   Zd(a, k);
   a = k + 8 | 0;
  }
  if ((z | 0) == 79) {
   z = 0;
   if (i) {
    z = 84;
    break;
   } else {
    b = k;
    continue;
   }
  } else if ((z | 0) == 83) {
   z = 0;
   Zd(d + 8 | 0, b);
   b = d;
   continue;
  }
 }
 if ((z | 0) == 4) {
  h = +g[e >> 2];
  d = a + 4 | 0;
  f = +g[d >> 2];
  if (!(h < f)) return;
  z = b + -8 | 0;
  y = c[a >> 2] | 0;
  c[a >> 2] = c[z >> 2];
  c[z >> 2] = y;
  g[d >> 2] = h;
  g[e >> 2] = f;
  return;
 } else if ((z | 0) == 6) {
  j = a + 8 | 0;
  k = a + 12 | 0;
  h = +g[k >> 2];
  i = a + 4 | 0;
  l = +g[i >> 2];
  f = +g[e >> 2];
  b = f < h;
  if (!(h < l)) {
   if (!b) return;
   z = c[j >> 2] | 0;
   c[j >> 2] = c[d >> 2];
   c[d >> 2] = z;
   g[k >> 2] = f;
   g[e >> 2] = h;
   h = +g[k >> 2];
   f = +g[i >> 2];
   if (!(h < f)) return;
   z = c[a >> 2] | 0;
   c[a >> 2] = c[j >> 2];
   c[j >> 2] = z;
   g[i >> 2] = h;
   g[k >> 2] = f;
   return;
  }
  if (b) {
   z = c[a >> 2] | 0;
   c[a >> 2] = c[d >> 2];
   c[d >> 2] = z;
   g[i >> 2] = f;
   g[e >> 2] = l;
   return;
  }
  b = c[a >> 2] | 0;
  c[a >> 2] = c[j >> 2];
  c[j >> 2] = b;
  g[i >> 2] = h;
  g[k >> 2] = l;
  f = +g[e >> 2];
  if (!(f < l)) return;
  c[j >> 2] = c[d >> 2];
  c[d >> 2] = b;
  g[k >> 2] = f;
  g[e >> 2] = l;
  return;
 } else if ((z | 0) == 14) {
  _d(a, a + 8 | 0, a + 16 | 0, d) | 0;
  return;
 } else if ((z | 0) == 15) {
  m = a + 8 | 0;
  k = a + 16 | 0;
  i = a + 24 | 0;
  _d(a, m, k, i) | 0;
  h = +g[e >> 2];
  j = a + 28 | 0;
  f = +g[j >> 2];
  if (!(h < f)) return;
  d = b + -8 | 0;
  z = c[i >> 2] | 0;
  c[i >> 2] = c[d >> 2];
  c[d >> 2] = z;
  g[j >> 2] = h;
  g[e >> 2] = f;
  h = +g[j >> 2];
  d = a + 20 | 0;
  f = +g[d >> 2];
  if (!(h < f)) return;
  e = c[k >> 2] | 0;
  b = c[i >> 2] | 0;
  c[k >> 2] = b;
  c[i >> 2] = e;
  g[d >> 2] = h;
  g[j >> 2] = f;
  e = a + 12 | 0;
  f = +g[e >> 2];
  if (!(h < f)) return;
  z = c[m >> 2] | 0;
  c[m >> 2] = b;
  c[k >> 2] = z;
  g[e >> 2] = h;
  g[d >> 2] = f;
  d = a + 4 | 0;
  f = +g[d >> 2];
  if (!(h < f)) return;
  z = c[a >> 2] | 0;
  c[a >> 2] = b;
  c[m >> 2] = z;
  g[d >> 2] = h;
  g[e >> 2] = f;
  return;
 } else if ((z | 0) == 21) {
  e = a + 16 | 0;
  i = a + 8 | 0;
  k = a + 12 | 0;
  h = +g[k >> 2];
  j = a + 4 | 0;
  f = +g[j >> 2];
  m = a + 20 | 0;
  l = +g[m >> 2];
  d = l < h;
  do if (h < f) {
   if (d) {
    z = c[a >> 2] | 0;
    c[a >> 2] = c[e >> 2];
    c[e >> 2] = z;
    g[j >> 2] = l;
    g[m >> 2] = f;
    break;
   }
   d = c[a >> 2] | 0;
   c[a >> 2] = c[i >> 2];
   c[i >> 2] = d;
   g[j >> 2] = h;
   g[k >> 2] = f;
   if (l < f) {
    c[i >> 2] = c[e >> 2];
    c[e >> 2] = d;
    g[k >> 2] = l;
    g[m >> 2] = f;
   }
  } else if (d ? (z = c[i >> 2] | 0, y = c[e >> 2] | 0, c[i >> 2] = y, c[e >> 2] = z, g[k >> 2] = l, g[m >> 2] = h, l < f) : 0) {
   z = c[a >> 2] | 0;
   c[a >> 2] = y;
   c[i >> 2] = z;
   g[j >> 2] = l;
   g[k >> 2] = f;
  } while (0);
  d = a + 24 | 0;
  if ((d | 0) == (b | 0)) return;
  while (1) {
   f = +g[d + 4 >> 2];
   if (f < +g[e + 4 >> 2]) {
    k = c[d >> 2] | 0;
    j = d;
    i = e;
    while (1) {
     c[j >> 2] = c[i >> 2];
     e = i + 4 | 0;
     c[j + 4 >> 2] = c[e >> 2];
     if ((i | 0) == (a | 0)) break;
     if (f < +g[i + -4 >> 2]) {
      j = i;
      i = i + -8 | 0;
     } else break;
    }
    c[i >> 2] = k;
    g[e >> 2] = f;
   }
   e = d + 8 | 0;
   if ((e | 0) == (b | 0)) break; else {
    z = d;
    d = e;
    e = z;
   }
  }
  return;
 } else if ((z | 0) == 84) return;
}

function Vd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0.0, h = 0.0, i = 0, j = 0, k = 0, l = 0.0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0.0, w = 0, x = 0.0, y = 0, z = 0;
 a : while (1) {
  t = b;
  d = b + -8 | 0;
  e = b + -4 | 0;
  b : while (1) {
   s = a;
   i = t - s | 0;
   j = i >> 3;
   switch (j | 0) {
   case 2:
    {
     z = 4;
     break a;
    }
   case 3:
    {
     z = 6;
     break a;
    }
   case 4:
    {
     z = 14;
     break a;
    }
   case 5:
    {
     z = 15;
     break a;
    }
   case 1:
   case 0:
    {
     z = 84;
     break a;
    }
   default:
    {}
   }
   if ((i | 0) < 56) {
    z = 21;
    break a;
   }
   m = (j | 0) / 2 | 0;
   r = a + (m << 3) | 0;
   do if ((i | 0) > 7992) {
    p = (j | 0) / 4 | 0;
    q = a + (p << 3) | 0;
    o = p + m | 0;
    n = a + (o << 3) | 0;
    i = Wd(a, q, r, n) | 0;
    h = +g[e >> 2];
    o = a + (o << 3) + 4 | 0;
    f = +g[o >> 2];
    if (!(h < f)) {
     j = a + (m << 3) + 4 | 0;
     break;
    }
    k = c[n >> 2] | 0;
    c[n >> 2] = c[d >> 2];
    c[d >> 2] = k;
    g[o >> 2] = h;
    g[e >> 2] = f;
    k = i + 1 | 0;
    h = +g[o >> 2];
    j = a + (m << 3) + 4 | 0;
    f = +g[j >> 2];
    if (h < f) {
     k = c[r >> 2] | 0;
     c[r >> 2] = c[n >> 2];
     c[n >> 2] = k;
     g[j >> 2] = h;
     g[o >> 2] = f;
     k = i + 2 | 0;
     h = +g[j >> 2];
     m = a + (p << 3) + 4 | 0;
     f = +g[m >> 2];
     if (h < f) {
      k = c[q >> 2] | 0;
      c[q >> 2] = c[r >> 2];
      c[r >> 2] = k;
      g[m >> 2] = h;
      g[j >> 2] = f;
      h = +g[m >> 2];
      k = a + 4 | 0;
      f = +g[k >> 2];
      if (h < f) {
       p = c[a >> 2] | 0;
       c[a >> 2] = c[q >> 2];
       c[q >> 2] = p;
       g[k >> 2] = h;
       g[m >> 2] = f;
       i = i + 4 | 0;
      } else i = i + 3 | 0;
     } else i = k;
    } else i = k;
   } else {
    j = a + (m << 3) + 4 | 0;
    h = +g[j >> 2];
    k = a + 4 | 0;
    l = +g[k >> 2];
    f = +g[e >> 2];
    i = f < h;
    if (!(h < l)) {
     if (!i) {
      i = 0;
      break;
     }
     q = c[r >> 2] | 0;
     c[r >> 2] = c[d >> 2];
     c[d >> 2] = q;
     g[j >> 2] = f;
     g[e >> 2] = h;
     h = +g[j >> 2];
     f = +g[k >> 2];
     if (!(h < f)) {
      i = 1;
      break;
     }
     i = c[a >> 2] | 0;
     c[a >> 2] = c[r >> 2];
     c[r >> 2] = i;
     g[k >> 2] = h;
     g[j >> 2] = f;
     i = 2;
     break;
    }
    if (i) {
     i = c[a >> 2] | 0;
     c[a >> 2] = c[d >> 2];
     c[d >> 2] = i;
     g[k >> 2] = f;
     g[e >> 2] = l;
     i = 1;
     break;
    }
    i = c[a >> 2] | 0;
    c[a >> 2] = c[r >> 2];
    c[r >> 2] = i;
    g[k >> 2] = h;
    g[j >> 2] = l;
    f = +g[e >> 2];
    if (f < l) {
     c[r >> 2] = c[d >> 2];
     c[d >> 2] = i;
     g[j >> 2] = f;
     g[e >> 2] = l;
     i = 2;
    } else i = 1;
   } while (0);
   o = a + 4 | 0;
   l = +g[o >> 2];
   h = +g[j >> 2];
   do if (l < h) k = d; else {
    j = b;
    m = d;
    while (1) {
     k = m + -8 | 0;
     if ((a | 0) == (k | 0)) break;
     j = j + -12 | 0;
     f = +g[j >> 2];
     if (f < h) {
      z = 66;
      break;
     } else {
      j = m;
      m = k;
     }
    }
    if ((z | 0) == 66) {
     z = 0;
     q = c[a >> 2] | 0;
     c[a >> 2] = c[k >> 2];
     c[k >> 2] = q;
     g[o >> 2] = f;
     g[j >> 2] = l;
     i = i + 1 | 0;
     break;
    }
    i = a + 8 | 0;
    h = +g[e >> 2];
    if (l < h) a = i; else {
     if ((i | 0) == (d | 0)) {
      z = 84;
      break a;
     }
     while (1) {
      k = a + 12 | 0;
      f = +g[k >> 2];
      j = i + 8 | 0;
      if (l < f) {
       i = k;
       break;
      }
      if ((j | 0) == (d | 0)) {
       z = 84;
       break a;
      } else {
       a = i;
       i = j;
      }
     }
     r = a + 8 | 0;
     s = c[r >> 2] | 0;
     c[r >> 2] = c[d >> 2];
     c[d >> 2] = s;
     g[i >> 2] = h;
     g[e >> 2] = f;
     a = a + 16 | 0;
    }
    if ((a | 0) == (d | 0)) {
     z = 84;
     break a;
    } else k = d;
    while (1) {
     l = +g[o >> 2];
     while (1) {
      j = a + 4 | 0;
      f = +g[j >> 2];
      i = a + 8 | 0;
      if (l < f) {
       h = f;
       break;
      } else a = i;
     }
     while (1) {
      n = k + -8 | 0;
      k = k + -4 | 0;
      f = +g[k >> 2];
      if (l < f) k = n; else {
       m = k;
       k = n;
       break;
      }
     }
     if (a >>> 0 >= k >>> 0) continue b;
     s = c[a >> 2] | 0;
     c[a >> 2] = c[k >> 2];
     c[k >> 2] = s;
     g[j >> 2] = f;
     g[m >> 2] = h;
     a = i;
    }
   } while (0);
   j = a + 8 | 0;
   c : do if (j >>> 0 < k >>> 0) {
    p = r;
    while (1) {
     l = +g[p + 4 >> 2];
     n = j;
     while (1) {
      m = n + 4 | 0;
      f = +g[m >> 2];
      j = n + 8 | 0;
      if (f < l) n = j; else {
       h = f;
       o = n;
       break;
      }
     }
     while (1) {
      n = k + -8 | 0;
      k = k + -4 | 0;
      f = +g[k >> 2];
      if (f < l) break; else k = n;
     }
     if (o >>> 0 > n >>> 0) {
      k = o;
      j = p;
      break c;
     }
     r = c[o >> 2] | 0;
     c[o >> 2] = c[n >> 2];
     c[n >> 2] = r;
     g[m >> 2] = f;
     g[k >> 2] = h;
     k = n;
     p = (p | 0) == (o | 0) ? n : p;
     i = i + 1 | 0;
    }
   } else {
    k = j;
    j = r;
   } while (0);
   if ((k | 0) != (j | 0) ? (w = j + 4 | 0, x = +g[w >> 2], u = k + 4 | 0, v = +g[u >> 2], x < v) : 0) {
    r = c[k >> 2] | 0;
    c[k >> 2] = c[j >> 2];
    c[j >> 2] = r;
    g[u >> 2] = x;
    g[w >> 2] = v;
    i = i + 1 | 0;
   }
   if (!i) {
    i = Xd(a, k) | 0;
    j = k + 8 | 0;
    if (Xd(j, b) | 0) {
     z = 79;
     break;
    }
    if (i) {
     a = j;
     continue;
    }
   }
   r = k;
   if ((r - s | 0) >= (t - r | 0)) {
    d = k;
    z = 83;
    break;
   }
   Vd(a, k);
   a = k + 8 | 0;
  }
  if ((z | 0) == 79) {
   z = 0;
   if (i) {
    z = 84;
    break;
   } else {
    b = k;
    continue;
   }
  } else if ((z | 0) == 83) {
   z = 0;
   Vd(d + 8 | 0, b);
   b = d;
   continue;
  }
 }
 if ((z | 0) == 4) {
  h = +g[e >> 2];
  d = a + 4 | 0;
  f = +g[d >> 2];
  if (!(h < f)) return;
  z = b + -8 | 0;
  y = c[a >> 2] | 0;
  c[a >> 2] = c[z >> 2];
  c[z >> 2] = y;
  g[d >> 2] = h;
  g[e >> 2] = f;
  return;
 } else if ((z | 0) == 6) {
  j = a + 8 | 0;
  k = a + 12 | 0;
  h = +g[k >> 2];
  i = a + 4 | 0;
  l = +g[i >> 2];
  f = +g[e >> 2];
  b = f < h;
  if (!(h < l)) {
   if (!b) return;
   z = c[j >> 2] | 0;
   c[j >> 2] = c[d >> 2];
   c[d >> 2] = z;
   g[k >> 2] = f;
   g[e >> 2] = h;
   h = +g[k >> 2];
   f = +g[i >> 2];
   if (!(h < f)) return;
   z = c[a >> 2] | 0;
   c[a >> 2] = c[j >> 2];
   c[j >> 2] = z;
   g[i >> 2] = h;
   g[k >> 2] = f;
   return;
  }
  if (b) {
   z = c[a >> 2] | 0;
   c[a >> 2] = c[d >> 2];
   c[d >> 2] = z;
   g[i >> 2] = f;
   g[e >> 2] = l;
   return;
  }
  b = c[a >> 2] | 0;
  c[a >> 2] = c[j >> 2];
  c[j >> 2] = b;
  g[i >> 2] = h;
  g[k >> 2] = l;
  f = +g[e >> 2];
  if (!(f < l)) return;
  c[j >> 2] = c[d >> 2];
  c[d >> 2] = b;
  g[k >> 2] = f;
  g[e >> 2] = l;
  return;
 } else if ((z | 0) == 14) {
  Wd(a, a + 8 | 0, a + 16 | 0, d) | 0;
  return;
 } else if ((z | 0) == 15) {
  m = a + 8 | 0;
  k = a + 16 | 0;
  i = a + 24 | 0;
  Wd(a, m, k, i) | 0;
  h = +g[e >> 2];
  j = a + 28 | 0;
  f = +g[j >> 2];
  if (!(h < f)) return;
  d = b + -8 | 0;
  z = c[i >> 2] | 0;
  c[i >> 2] = c[d >> 2];
  c[d >> 2] = z;
  g[j >> 2] = h;
  g[e >> 2] = f;
  h = +g[j >> 2];
  d = a + 20 | 0;
  f = +g[d >> 2];
  if (!(h < f)) return;
  e = c[k >> 2] | 0;
  b = c[i >> 2] | 0;
  c[k >> 2] = b;
  c[i >> 2] = e;
  g[d >> 2] = h;
  g[j >> 2] = f;
  e = a + 12 | 0;
  f = +g[e >> 2];
  if (!(h < f)) return;
  z = c[m >> 2] | 0;
  c[m >> 2] = b;
  c[k >> 2] = z;
  g[e >> 2] = h;
  g[d >> 2] = f;
  d = a + 4 | 0;
  f = +g[d >> 2];
  if (!(h < f)) return;
  z = c[a >> 2] | 0;
  c[a >> 2] = b;
  c[m >> 2] = z;
  g[d >> 2] = h;
  g[e >> 2] = f;
  return;
 } else if ((z | 0) == 21) {
  e = a + 16 | 0;
  i = a + 8 | 0;
  k = a + 12 | 0;
  h = +g[k >> 2];
  j = a + 4 | 0;
  f = +g[j >> 2];
  m = a + 20 | 0;
  l = +g[m >> 2];
  d = l < h;
  do if (h < f) {
   if (d) {
    z = c[a >> 2] | 0;
    c[a >> 2] = c[e >> 2];
    c[e >> 2] = z;
    g[j >> 2] = l;
    g[m >> 2] = f;
    break;
   }
   d = c[a >> 2] | 0;
   c[a >> 2] = c[i >> 2];
   c[i >> 2] = d;
   g[j >> 2] = h;
   g[k >> 2] = f;
   if (l < f) {
    c[i >> 2] = c[e >> 2];
    c[e >> 2] = d;
    g[k >> 2] = l;
    g[m >> 2] = f;
   }
  } else if (d ? (z = c[i >> 2] | 0, y = c[e >> 2] | 0, c[i >> 2] = y, c[e >> 2] = z, g[k >> 2] = l, g[m >> 2] = h, l < f) : 0) {
   z = c[a >> 2] | 0;
   c[a >> 2] = y;
   c[i >> 2] = z;
   g[j >> 2] = l;
   g[k >> 2] = f;
  } while (0);
  d = a + 24 | 0;
  if ((d | 0) == (b | 0)) return;
  while (1) {
   f = +g[d + 4 >> 2];
   if (f < +g[e + 4 >> 2]) {
    k = c[d >> 2] | 0;
    j = d;
    i = e;
    while (1) {
     c[j >> 2] = c[i >> 2];
     e = i + 4 | 0;
     c[j + 4 >> 2] = c[e >> 2];
     if ((i | 0) == (a | 0)) break;
     if (f < +g[i + -4 >> 2]) {
      j = i;
      i = i + -8 | 0;
     } else break;
    }
    c[i >> 2] = k;
    g[e >> 2] = f;
   }
   e = d + 8 | 0;
   if ((e | 0) == (b | 0)) break; else {
    z = d;
    d = e;
    e = z;
   }
  }
  return;
 } else if ((z | 0) == 84) return;
}

function Qd(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0.0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0;
 T = i;
 i = i + 3488 | 0;
 N = T + 2464 | 0;
 J = T + 2120 | 0;
 G = T + 2096 | 0;
 K = T + 1072 | 0;
 E = T + 1064 | 0;
 D = T + 1056 | 0;
 o = T + 1048 | 0;
 n = T + 1024 | 0;
 q = T;
 S = T + 2444 | 0;
 R = T + 2256 | 0;
 Q = T + 2432 | 0;
 l = T + 2420 | 0;
 m = T + 2408 | 0;
 r = T + 2240 | 0;
 A = T + 2228 | 0;
 B = T + 2216 | 0;
 C = T + 2204 | 0;
 H = T + 2192 | 0;
 I = T + 2180 | 0;
 M = T + 2168 | 0;
 O = T + 2156 | 0;
 P = T + 2144 | 0;
 F = b + 776 | 0;
 c[F >> 2] = 0;
 c[F + 4 >> 2] = 0;
 c[F + 8 >> 2] = 0;
 c[F + 12 >> 2] = 0;
 c[F + 16 >> 2] = 0;
 c[F + 20 >> 2] = 0;
 tg(b | 0, f | 0, 768) | 0;
 Vb(S, c[e >> 2] | 0, c[e + 4 >> 2] | 0);
 Xb(S, e);
 F = S + 8 | 0;
 Ub(c[F >> 2] | 0, b);
 Ub((c[F >> 2] | 0) + 308 | 0, b + 256 | 0);
 Ub((c[F >> 2] | 0) + 616 | 0, b + 512 | 0);
 Hd(R, e);
 $b(S, R);
 c[Q >> 2] = 0;
 c[Q + 4 >> 2] = 0;
 c[Q + 8 >> 2] = 0;
 a[Q + 1 >> 0] = 0;
 a[Q >> 0] = 0;
 L = (a[d + 4 >> 0] | 0) != 0;
 c[q >> 2] = 6;
 c[q + 4 >> 2] = Q;
 c[N >> 2] = c[q >> 2];
 c[N + 4 >> 2] = c[q + 4 >> 2];
 if (!(Fc(R, L, N) | 0)) Aa(39886, 39888, 119, 39912);
 L = d + 24 | 0;
 k = c[L >> 2] | 0;
 hg(l, 40067, 20);
 j = Sd(k, N, l) | 0;
 e = c[j >> 2] | 0;
 if (!e) {
  e = ye(32) | 0;
  g = e + 16 | 0;
  c[g >> 2] = c[l >> 2];
  c[g + 4 >> 2] = c[l + 4 >> 2];
  c[g + 8 >> 2] = c[l + 8 >> 2];
  c[l >> 2] = 0;
  c[l + 4 >> 2] = 0;
  c[l + 8 >> 2] = 0;
  c[e + 28 >> 2] = 0;
  g = c[N >> 2] | 0;
  c[e >> 2] = 0;
  c[e + 4 >> 2] = 0;
  c[e + 8 >> 2] = g;
  c[j >> 2] = e;
  g = c[c[k >> 2] >> 2] | 0;
  if (!g) g = e; else {
   c[k >> 2] = g;
   g = c[j >> 2] | 0;
  }
  Td(c[k + 4 >> 2] | 0, g);
  z = k + 8 | 0;
  c[z >> 2] = (c[z >> 2] | 0) + 1;
 }
 e = c[e + 28 >> 2] | 0;
 v = c[F >> 2] | 0;
 w = c[v + 12 >> 2] | 0;
 x = c[v + 316 >> 2] | 0;
 y = c[v + 320 >> 2] | 0;
 z = c[v + 624 >> 2] | 0;
 g = c[v + 628 >> 2] | 0;
 c[n >> 2] = c[v + 8 >> 2];
 c[n + 4 >> 2] = w;
 c[n + 8 >> 2] = x;
 c[n + 12 >> 2] = y;
 c[n + 16 >> 2] = z;
 c[n + 20 >> 2] = g;
 hg(m, N, Ef(N, 128, 35340, n) | 0);
 g = (a[m >> 0] & 1) == 0 ? m + 1 | 0 : c[m + 8 >> 2] | 0;
 c[o >> 2] = e + 1;
 c[o + 4 >> 2] = g;
 Ef(q, 1024, 39999, o) | 0;
 ig(m);
 ig(l);
 a[q + 1023 >> 0] = 0;
 g = c[L >> 2] | 0;
 hg(r, q, Xf(q) | 0);
 e = c[g + 12 >> 2] | 0;
 if (e) {
  z = a[r >> 0] | 0;
  y = (z & 1) == 0;
  lg(e, y ? r + 1 | 0 : c[r + 8 >> 2] | 0, y ? (z & 255) >>> 1 : c[r + 4 >> 2] | 0) | 0;
 }
 e = c[g + 16 >> 2] | 0;
 if (e) sf((a[r >> 0] & 1) == 0 ? r + 1 | 0 : c[r + 8 >> 2] | 0, e) | 0;
 ig(r);
 m = N + 1023 | 0;
 n = A + 8 | 0;
 o = A + 1 | 0;
 q = A + 4 | 0;
 r = N + 1023 | 0;
 s = B + 8 | 0;
 t = B + 1 | 0;
 u = B + 4 | 0;
 v = N + 1023 | 0;
 w = C + 8 | 0;
 x = C + 1 | 0;
 y = C + 4 | 0;
 z = 0;
 do {
  k = z << 3;
  l = 0;
  do {
   j = 0;
   do {
    c[D >> 2] = c[f + (l << 8) + (j + k << 2) >> 2];
    Ef(N, 1024, 39990, D) | 0;
    a[m >> 0] = 0;
    e = c[L >> 2] | 0;
    hg(A, N, Xf(N) | 0);
    g = c[e + 12 >> 2] | 0;
    if (g) {
     U = a[A >> 0] | 0;
     V = (U & 1) == 0;
     lg(g, V ? o : c[n >> 2] | 0, V ? (U & 255) >>> 1 : c[q >> 2] | 0) | 0;
    }
    e = c[e + 16 >> 2] | 0;
    if (e) sf((a[A >> 0] & 1) == 0 ? o : c[n >> 2] | 0, e) | 0;
    ig(A);
    j = j + 1 | 0;
   } while ((j | 0) < 8);
   Ef(N, 1024, 39995, E) | 0;
   a[r >> 0] = 0;
   e = c[L >> 2] | 0;
   hg(B, N, Xf(N) | 0);
   g = c[e + 12 >> 2] | 0;
   if (g) {
    V = a[B >> 0] | 0;
    U = (V & 1) == 0;
    lg(g, U ? t : c[s >> 2] | 0, U ? (V & 255) >>> 1 : c[u >> 2] | 0) | 0;
   }
   e = c[e + 16 >> 2] | 0;
   if (e) sf((a[B >> 0] & 1) == 0 ? t : c[s >> 2] | 0, e) | 0;
   ig(B);
   l = l + 1 | 0;
  } while ((l | 0) < 3);
  Ef(N, 1024, 39829, K) | 0;
  a[v >> 0] = 0;
  e = c[L >> 2] | 0;
  hg(C, N, Xf(N) | 0);
  g = c[e + 12 >> 2] | 0;
  if (g) {
   V = a[C >> 0] | 0;
   U = (V & 1) == 0;
   lg(g, U ? x : c[w >> 2] | 0, U ? (V & 255) >>> 1 : c[y >> 2] | 0) | 0;
  }
  e = c[e + 16 >> 2] | 0;
  if (e) sf((a[C >> 0] & 1) == 0 ? x : c[w >> 2] | 0, e) | 0;
  ig(C);
  z = z + 1 | 0;
 } while ((z | 0) < 8);
 k = c[L >> 2] | 0;
 hg(H, 40067, 20);
 j = Sd(k, N, H) | 0;
 e = c[j >> 2] | 0;
 if (!e) {
  e = ye(32) | 0;
  g = e + 16 | 0;
  c[g >> 2] = c[H >> 2];
  c[g + 4 >> 2] = c[H + 4 >> 2];
  c[g + 8 >> 2] = c[H + 8 >> 2];
  c[H >> 2] = 0;
  c[H + 4 >> 2] = 0;
  c[H + 8 >> 2] = 0;
  c[e + 28 >> 2] = 0;
  g = c[N >> 2] | 0;
  c[e >> 2] = 0;
  c[e + 4 >> 2] = 0;
  c[e + 8 >> 2] = g;
  c[j >> 2] = e;
  g = c[c[k >> 2] >> 2] | 0;
  if (!g) g = e; else {
   c[k >> 2] = g;
   g = c[j >> 2] | 0;
  }
  Td(c[k + 4 >> 2] | 0, g);
  V = k + 8 | 0;
  c[V >> 2] = (c[V >> 2] | 0) + 1;
 }
 l = c[e + 28 >> 2] | 0;
 U = c[F >> 2] | 0;
 V = c[U + 12 >> 2] | 0;
 e = c[U + 316 >> 2] | 0;
 k = c[U + 320 >> 2] | 0;
 j = c[U + 624 >> 2] | 0;
 g = c[U + 628 >> 2] | 0;
 c[G >> 2] = c[U + 8 >> 2];
 c[G + 4 >> 2] = V;
 c[G + 8 >> 2] = e;
 c[G + 12 >> 2] = k;
 c[G + 16 >> 2] = j;
 c[G + 20 >> 2] = g;
 hg(I, N, Ef(N, 128, 35340, G) | 0);
 g = a[I >> 0] & 1;
 j = c[I + 8 >> 2] | 0;
 k = I + 1 | 0;
 e = 0;
 p = 0.0;
 do {
  p = p + 1.0 / (+(c[27612 + (e << 2) >> 2] | 0) * .5 + 1.0) * ((+(c[f + (e << 2) >> 2] | 0) + -1.0) * .5);
  e = e + 1 | 0;
 } while ((e | 0) != 64);
 l = l + 1 | 0;
 g = g << 24 >> 24 == 0 ? k : j;
 e = 0;
 do {
  p = p + 1.0 / (+(c[27612 + (e << 2) >> 2] | 0) * .5 + 1.0) * ((+(c[f + 256 + (e << 2) >> 2] | 0) + -1.0) * .5);
  e = e + 1 | 0;
 } while ((e | 0) != 64);
 e = 0;
 do {
  p = p + 1.0 / (+(c[27612 + (e << 2) >> 2] | 0) * .5 + 1.0) * ((+(c[f + 512 + (e << 2) >> 2] | 0) + -1.0) * .5);
  e = e + 1 | 0;
 } while ((e | 0) != 64);
 e = a[Q >> 0] | 0;
 m = Q + 4 | 0;
 e = (e & 1) == 0 ? (e & 255) >>> 1 : c[m >> 2] | 0;
 c[J >> 2] = l;
 c[J + 4 >> 2] = g;
 h[J + 8 >> 3] = p;
 c[J + 16 >> 2] = e;
 Ef(K, 1024, 40034, J) | 0;
 ig(I);
 ig(H);
 a[K + 1023 >> 0] = 0;
 g = c[L >> 2] | 0;
 hg(M, K, Xf(K) | 0);
 e = c[g + 12 >> 2] | 0;
 if (e) {
  V = a[M >> 0] | 0;
  U = (V & 1) == 0;
  lg(e, U ? M + 1 | 0 : c[M + 8 >> 2] | 0, U ? (V & 255) >>> 1 : c[M + 4 >> 2] | 0) | 0;
 }
 e = c[g + 16 >> 2] | 0;
 if (e) sf((a[M >> 0] & 1) == 0 ? M + 1 | 0 : c[M + 8 >> 2] | 0, e) | 0;
 ig(M);
 k = c[L >> 2] | 0;
 hg(O, 40067, 20);
 j = Sd(k, N, O) | 0;
 e = c[j >> 2] | 0;
 if (!e) {
  e = ye(32) | 0;
  g = e + 16 | 0;
  c[g >> 2] = c[O >> 2];
  c[g + 4 >> 2] = c[O + 4 >> 2];
  c[g + 8 >> 2] = c[O + 8 >> 2];
  c[O >> 2] = 0;
  c[O + 4 >> 2] = 0;
  c[O + 8 >> 2] = 0;
  c[e + 28 >> 2] = 0;
  g = c[N >> 2] | 0;
  c[e >> 2] = 0;
  c[e + 4 >> 2] = 0;
  c[e + 8 >> 2] = g;
  c[j >> 2] = e;
  g = c[c[k >> 2] >> 2] | 0;
  if (!g) g = e; else {
   c[k >> 2] = g;
   g = c[j >> 2] | 0;
  }
  Td(c[k + 4 >> 2] | 0, g);
  V = k + 8 | 0;
  c[V >> 2] = (c[V >> 2] | 0) + 1;
 }
 l = e + 28 | 0;
 c[l >> 2] = (c[l >> 2] | 0) + 1;
 ig(O);
 l = d + 16 | 0;
 e = c[l >> 2] | 0;
 lb[c[(c[e >> 2] | 0) + 8 >> 2] & 3](e, S);
 e = c[l >> 2] | 0;
 a[b + 768 >> 0] = (nb[c[(c[e >> 2] | 0) + 20 >> 2] & 1](e, .9700000286102295) | 0) & 1;
 jg(b + 776 | 0, Q) | 0;
 e = c[l >> 2] | 0;
 lb[c[(c[e >> 2] | 0) + 24 >> 2] & 3](P, e);
 e = b + 788 | 0;
 if ((e | 0) != (P | 0)) te(e, c[P >> 2] | 0, c[P + 4 >> 2] | 0);
 j = c[P >> 2] | 0;
 k = j;
 if (j) {
  e = P + 4 | 0;
  g = c[e >> 2] | 0;
  if ((g | 0) != (j | 0)) c[e >> 2] = g + (~((g + -4 - k | 0) >>> 2) << 2);
  Ae(j);
 }
 e = c[l >> 2] | 0;
 h[b + 800 >> 3] = +ib[c[(c[e >> 2] | 0) + 28 >> 2] & 3](e);
 e = c[l >> 2] | 0;
 o = a[Q >> 0] | 0;
 h[b + 808 >> 3] = +hb[c[(c[e >> 2] | 0) + 16 >> 2] & 1](e, (o & 1) == 0 ? (o & 255) >>> 1 : c[m >> 2] | 0);
 Id(d, Q);
 ig(Q);
 Kc(R);
 o = S + 8 | 0;
 e = c[o >> 2] | 0;
 if (!e) {
  i = T;
  return;
 }
 n = S + 12 | 0;
 g = c[n >> 2] | 0;
 if ((g | 0) != (e | 0)) {
  do {
   c[n >> 2] = g + -308;
   j = c[g + -268 >> 2] | 0;
   k = j;
   if (j) {
    l = g + -264 | 0;
    m = c[l >> 2] | 0;
    if ((m | 0) != (j | 0)) c[l >> 2] = m + (~((m + -2 - k | 0) >>> 1) << 1);
    Ae(j);
   }
   k = c[g + -280 >> 2] | 0;
   l = k;
   if (k) {
    g = g + -276 | 0;
    j = c[g >> 2] | 0;
    if ((j | 0) != (k | 0)) c[g >> 2] = j + (~((j + -2 - l | 0) >>> 1) << 1);
    Ae(k);
   }
   g = c[n >> 2] | 0;
  } while ((g | 0) != (e | 0));
  e = c[o >> 2] | 0;
 }
 Ae(e);
 i = T;
 return;
}

function fg(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 if (!a) return;
 b = a + -8 | 0;
 i = c[8518] | 0;
 if (b >>> 0 < i >>> 0) xa();
 d = c[a + -4 >> 2] | 0;
 e = d & 3;
 if ((e | 0) == 1) xa();
 o = d & -8;
 q = a + (o + -8) | 0;
 do if (!(d & 1)) {
  b = c[b >> 2] | 0;
  if (!e) return;
  j = -8 - b | 0;
  l = a + j | 0;
  m = b + o | 0;
  if (l >>> 0 < i >>> 0) xa();
  if ((l | 0) == (c[8519] | 0)) {
   b = a + (o + -4) | 0;
   d = c[b >> 2] | 0;
   if ((d & 3 | 0) != 3) {
    u = l;
    g = m;
    break;
   }
   c[8516] = m;
   c[b >> 2] = d & -2;
   c[a + (j + 4) >> 2] = m | 1;
   c[q >> 2] = m;
   return;
  }
  f = b >>> 3;
  if (b >>> 0 < 256) {
   e = c[a + (j + 8) >> 2] | 0;
   d = c[a + (j + 12) >> 2] | 0;
   b = 34096 + (f << 1 << 2) | 0;
   if ((e | 0) != (b | 0)) {
    if (e >>> 0 < i >>> 0) xa();
    if ((c[e + 12 >> 2] | 0) != (l | 0)) xa();
   }
   if ((d | 0) == (e | 0)) {
    c[8514] = c[8514] & ~(1 << f);
    u = l;
    g = m;
    break;
   }
   if ((d | 0) != (b | 0)) {
    if (d >>> 0 < i >>> 0) xa();
    b = d + 8 | 0;
    if ((c[b >> 2] | 0) == (l | 0)) h = b; else xa();
   } else h = d + 8 | 0;
   c[e + 12 >> 2] = d;
   c[h >> 2] = e;
   u = l;
   g = m;
   break;
  }
  h = c[a + (j + 24) >> 2] | 0;
  e = c[a + (j + 12) >> 2] | 0;
  do if ((e | 0) == (l | 0)) {
   d = a + (j + 20) | 0;
   b = c[d >> 2] | 0;
   if (!b) {
    d = a + (j + 16) | 0;
    b = c[d >> 2] | 0;
    if (!b) {
     k = 0;
     break;
    }
   }
   while (1) {
    e = b + 20 | 0;
    f = c[e >> 2] | 0;
    if (f) {
     b = f;
     d = e;
     continue;
    }
    e = b + 16 | 0;
    f = c[e >> 2] | 0;
    if (!f) break; else {
     b = f;
     d = e;
    }
   }
   if (d >>> 0 < i >>> 0) xa(); else {
    c[d >> 2] = 0;
    k = b;
    break;
   }
  } else {
   f = c[a + (j + 8) >> 2] | 0;
   if (f >>> 0 < i >>> 0) xa();
   b = f + 12 | 0;
   if ((c[b >> 2] | 0) != (l | 0)) xa();
   d = e + 8 | 0;
   if ((c[d >> 2] | 0) == (l | 0)) {
    c[b >> 2] = e;
    c[d >> 2] = f;
    k = e;
    break;
   } else xa();
  } while (0);
  if (h) {
   b = c[a + (j + 28) >> 2] | 0;
   d = 34360 + (b << 2) | 0;
   if ((l | 0) == (c[d >> 2] | 0)) {
    c[d >> 2] = k;
    if (!k) {
     c[8515] = c[8515] & ~(1 << b);
     u = l;
     g = m;
     break;
    }
   } else {
    if (h >>> 0 < (c[8518] | 0) >>> 0) xa();
    b = h + 16 | 0;
    if ((c[b >> 2] | 0) == (l | 0)) c[b >> 2] = k; else c[h + 20 >> 2] = k;
    if (!k) {
     u = l;
     g = m;
     break;
    }
   }
   d = c[8518] | 0;
   if (k >>> 0 < d >>> 0) xa();
   c[k + 24 >> 2] = h;
   b = c[a + (j + 16) >> 2] | 0;
   do if (b) if (b >>> 0 < d >>> 0) xa(); else {
    c[k + 16 >> 2] = b;
    c[b + 24 >> 2] = k;
    break;
   } while (0);
   b = c[a + (j + 20) >> 2] | 0;
   if (b) if (b >>> 0 < (c[8518] | 0) >>> 0) xa(); else {
    c[k + 20 >> 2] = b;
    c[b + 24 >> 2] = k;
    u = l;
    g = m;
    break;
   } else {
    u = l;
    g = m;
   }
  } else {
   u = l;
   g = m;
  }
 } else {
  u = b;
  g = o;
 } while (0);
 if (u >>> 0 >= q >>> 0) xa();
 b = a + (o + -4) | 0;
 d = c[b >> 2] | 0;
 if (!(d & 1)) xa();
 if (!(d & 2)) {
  if ((q | 0) == (c[8520] | 0)) {
   t = (c[8517] | 0) + g | 0;
   c[8517] = t;
   c[8520] = u;
   c[u + 4 >> 2] = t | 1;
   if ((u | 0) != (c[8519] | 0)) return;
   c[8519] = 0;
   c[8516] = 0;
   return;
  }
  if ((q | 0) == (c[8519] | 0)) {
   t = (c[8516] | 0) + g | 0;
   c[8516] = t;
   c[8519] = u;
   c[u + 4 >> 2] = t | 1;
   c[u + t >> 2] = t;
   return;
  }
  g = (d & -8) + g | 0;
  f = d >>> 3;
  do if (d >>> 0 >= 256) {
   h = c[a + (o + 16) >> 2] | 0;
   b = c[a + (o | 4) >> 2] | 0;
   do if ((b | 0) == (q | 0)) {
    d = a + (o + 12) | 0;
    b = c[d >> 2] | 0;
    if (!b) {
     d = a + (o + 8) | 0;
     b = c[d >> 2] | 0;
     if (!b) {
      p = 0;
      break;
     }
    }
    while (1) {
     e = b + 20 | 0;
     f = c[e >> 2] | 0;
     if (f) {
      b = f;
      d = e;
      continue;
     }
     e = b + 16 | 0;
     f = c[e >> 2] | 0;
     if (!f) break; else {
      b = f;
      d = e;
     }
    }
    if (d >>> 0 < (c[8518] | 0) >>> 0) xa(); else {
     c[d >> 2] = 0;
     p = b;
     break;
    }
   } else {
    d = c[a + o >> 2] | 0;
    if (d >>> 0 < (c[8518] | 0) >>> 0) xa();
    e = d + 12 | 0;
    if ((c[e >> 2] | 0) != (q | 0)) xa();
    f = b + 8 | 0;
    if ((c[f >> 2] | 0) == (q | 0)) {
     c[e >> 2] = b;
     c[f >> 2] = d;
     p = b;
     break;
    } else xa();
   } while (0);
   if (h) {
    b = c[a + (o + 20) >> 2] | 0;
    d = 34360 + (b << 2) | 0;
    if ((q | 0) == (c[d >> 2] | 0)) {
     c[d >> 2] = p;
     if (!p) {
      c[8515] = c[8515] & ~(1 << b);
      break;
     }
    } else {
     if (h >>> 0 < (c[8518] | 0) >>> 0) xa();
     b = h + 16 | 0;
     if ((c[b >> 2] | 0) == (q | 0)) c[b >> 2] = p; else c[h + 20 >> 2] = p;
     if (!p) break;
    }
    d = c[8518] | 0;
    if (p >>> 0 < d >>> 0) xa();
    c[p + 24 >> 2] = h;
    b = c[a + (o + 8) >> 2] | 0;
    do if (b) if (b >>> 0 < d >>> 0) xa(); else {
     c[p + 16 >> 2] = b;
     c[b + 24 >> 2] = p;
     break;
    } while (0);
    b = c[a + (o + 12) >> 2] | 0;
    if (b) if (b >>> 0 < (c[8518] | 0) >>> 0) xa(); else {
     c[p + 20 >> 2] = b;
     c[b + 24 >> 2] = p;
     break;
    }
   }
  } else {
   e = c[a + o >> 2] | 0;
   d = c[a + (o | 4) >> 2] | 0;
   b = 34096 + (f << 1 << 2) | 0;
   if ((e | 0) != (b | 0)) {
    if (e >>> 0 < (c[8518] | 0) >>> 0) xa();
    if ((c[e + 12 >> 2] | 0) != (q | 0)) xa();
   }
   if ((d | 0) == (e | 0)) {
    c[8514] = c[8514] & ~(1 << f);
    break;
   }
   if ((d | 0) != (b | 0)) {
    if (d >>> 0 < (c[8518] | 0) >>> 0) xa();
    b = d + 8 | 0;
    if ((c[b >> 2] | 0) == (q | 0)) n = b; else xa();
   } else n = d + 8 | 0;
   c[e + 12 >> 2] = d;
   c[n >> 2] = e;
  } while (0);
  c[u + 4 >> 2] = g | 1;
  c[u + g >> 2] = g;
  if ((u | 0) == (c[8519] | 0)) {
   c[8516] = g;
   return;
  }
 } else {
  c[b >> 2] = d & -2;
  c[u + 4 >> 2] = g | 1;
  c[u + g >> 2] = g;
 }
 b = g >>> 3;
 if (g >>> 0 < 256) {
  d = b << 1;
  f = 34096 + (d << 2) | 0;
  e = c[8514] | 0;
  b = 1 << b;
  if (e & b) {
   b = 34096 + (d + 2 << 2) | 0;
   d = c[b >> 2] | 0;
   if (d >>> 0 < (c[8518] | 0) >>> 0) xa(); else {
    r = b;
    s = d;
   }
  } else {
   c[8514] = e | b;
   r = 34096 + (d + 2 << 2) | 0;
   s = f;
  }
  c[r >> 2] = u;
  c[s + 12 >> 2] = u;
  c[u + 8 >> 2] = s;
  c[u + 12 >> 2] = f;
  return;
 }
 b = g >>> 8;
 if (b) if (g >>> 0 > 16777215) f = 31; else {
  r = (b + 1048320 | 0) >>> 16 & 8;
  s = b << r;
  q = (s + 520192 | 0) >>> 16 & 4;
  s = s << q;
  f = (s + 245760 | 0) >>> 16 & 2;
  f = 14 - (q | r | f) + (s << f >>> 15) | 0;
  f = g >>> (f + 7 | 0) & 1 | f << 1;
 } else f = 0;
 b = 34360 + (f << 2) | 0;
 c[u + 28 >> 2] = f;
 c[u + 20 >> 2] = 0;
 c[u + 16 >> 2] = 0;
 d = c[8515] | 0;
 e = 1 << f;
 a : do if (d & e) {
  b = c[b >> 2] | 0;
  b : do if ((c[b + 4 >> 2] & -8 | 0) != (g | 0)) {
   f = g << ((f | 0) == 31 ? 0 : 25 - (f >>> 1) | 0);
   while (1) {
    d = b + 16 + (f >>> 31 << 2) | 0;
    e = c[d >> 2] | 0;
    if (!e) break;
    if ((c[e + 4 >> 2] & -8 | 0) == (g | 0)) {
     t = e;
     break b;
    } else {
     f = f << 1;
     b = e;
    }
   }
   if (d >>> 0 < (c[8518] | 0) >>> 0) xa(); else {
    c[d >> 2] = u;
    c[u + 24 >> 2] = b;
    c[u + 12 >> 2] = u;
    c[u + 8 >> 2] = u;
    break a;
   }
  } else t = b; while (0);
  b = t + 8 | 0;
  d = c[b >> 2] | 0;
  s = c[8518] | 0;
  if (d >>> 0 >= s >>> 0 & t >>> 0 >= s >>> 0) {
   c[d + 12 >> 2] = u;
   c[b >> 2] = u;
   c[u + 8 >> 2] = d;
   c[u + 12 >> 2] = t;
   c[u + 24 >> 2] = 0;
   break;
  } else xa();
 } else {
  c[8515] = d | e;
  c[b >> 2] = u;
  c[u + 24 >> 2] = b;
  c[u + 12 >> 2] = u;
  c[u + 8 >> 2] = u;
 } while (0);
 u = (c[8522] | 0) + -1 | 0;
 c[8522] = u;
 if (!u) b = 34512; else return;
 while (1) {
  b = c[b >> 2] | 0;
  if (!b) break; else b = b + 8 | 0;
 }
 c[8522] = -1;
 return;
}

function kc(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0;
 J = i;
 i = i + 128 | 0;
 x = J;
 I = J + 116 | 0;
 H = J + 104 | 0;
 G = J + 92 | 0;
 F = J + 80 | 0;
 E = J + 68 | 0;
 D = J + 56 | 0;
 B = J + 44 | 0;
 z = J + 32 | 0;
 y = J + 20 | 0;
 w = J + 8 | 0;
 g = c[b >> 2] | 0;
 r = b + 4 | 0;
 k = c[r >> 2] | 0;
 h = (g << 2) + 95 | 0;
 l = h & -64;
 l = (h & 1984 | 0) == 0 ? l + 64 | 0 : l;
 h = eg((_(l, k) | 0) + 64 | 0) | 0;
 do if (h) {
  j = h;
  if (!(j & 3)) {
   m = 64 - (j & 63) | 0;
   C = h + (m + -4) | 0;
   a[C >> 0] = h;
   a[C + 1 >> 0] = h >> 8;
   a[C + 2 >> 0] = h >> 16;
   a[C + 3 >> 0] = h >> 24;
   m = h + m | 0;
   break;
  } else Aa(35988, 36021, 59, 36051);
 } else m = 0; while (0);
 c[f >> 2] = g;
 u = f + 4 | 0;
 c[u >> 2] = k;
 t = f + 8 | 0;
 c[t >> 2] = l;
 h = f + 12 | 0;
 j = c[h >> 2] | 0;
 c[h >> 2] = m;
 h = f + 16 | 0;
 if (j) {
  jb[c[h >> 2] & 15](j);
  g = c[b >> 2] | 0;
 }
 c[h >> 2] = 10;
 if (g >>> 0 < 8) {
  i = J;
  return;
 }
 if ((c[r >> 2] | 0) >>> 0 < 8) {
  i = J;
  return;
 }
 gc(I, d);
 gc(H, e);
 Hb(G, I);
 Hb(F, H);
 mc(c[b >> 2] | 0, c[r >> 2] | 0, G, F, I, H);
 if ((c[b >> 2] | 0) >>> 0 <= 7) Aa(36198, 36021, 1043, 36210);
 g = c[I >> 2] | 0;
 h = c[b + 8 >> 2] | 0;
 j = c[H >> 2] | 0;
 if (((c[g + 4 >> 2] | 0) - (c[g >> 2] | 0) >> 2 | 0) != (h | 0)) Aa(36236, 36021, 1045, 36210);
 if (((c[j + 4 >> 2] | 0) - (c[j >> 2] | 0) >> 2 | 0) != (h | 0)) Aa(36266, 36021, 1046, 36210);
 if (((c[g + 16 >> 2] | 0) - (c[g + 12 >> 2] | 0) >> 2 | 0) != (h | 0)) Aa(36236, 36021, 1045, 36210);
 if (((c[j + 16 >> 2] | 0) - (c[j + 12 >> 2] | 0) >> 2 | 0) != (h | 0)) Aa(36266, 36021, 1046, 36210);
 if (((c[g + 28 >> 2] | 0) - (c[g + 24 >> 2] | 0) >> 2 | 0) != (h | 0)) Aa(36236, 36021, 1045, 36210);
 if (((c[j + 28 >> 2] | 0) - (c[j + 24 >> 2] | 0) >> 2 | 0) != (h | 0)) Aa(36266, 36021, 1046, 36210);
 c[E >> 2] = 0;
 C = E + 4 | 0;
 c[C >> 2] = 0;
 c[E + 8 >> 2] = 0;
 g = ye(36) | 0;
 c[E >> 2] = g;
 A = g + 36 | 0;
 c[E + 8 >> 2] = A;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 c[g + 20 >> 2] = 0;
 c[g + 24 >> 2] = 0;
 c[g + 28 >> 2] = 0;
 c[g + 32 >> 2] = 0;
 c[C >> 2] = A;
 c[D >> 2] = 0;
 A = D + 4 | 0;
 c[A >> 2] = 0;
 c[D + 8 >> 2] = 0;
 g = ye(36) | 0;
 c[D >> 2] = g;
 k = g + 36 | 0;
 c[D + 8 >> 2] = k;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 c[g + 20 >> 2] = 0;
 c[g + 24 >> 2] = 0;
 c[g + 28 >> 2] = 0;
 c[g + 32 >> 2] = 0;
 c[A >> 2] = k;
 k = b + 16 | 0;
 g = c[k >> 2] | 0;
 l = b + 20 | 0;
 h = c[l >> 2] | 0;
 j = _(g * 3 | 0, h) | 0;
 c[B >> 2] = 0;
 v = B + 4 | 0;
 c[v >> 2] = 0;
 c[B + 8 >> 2] = 0;
 do if (j) if (j >>> 0 > 1073741823) we(B); else {
  o = j << 2;
  s = ye(o) | 0;
  c[B >> 2] = s;
  n = s + (j << 2) | 0;
  c[B + 8 >> 2] = n;
  pg(s | 0, 0, o | 0) | 0;
  c[v >> 2] = n;
  n = c[k >> 2] | 0;
  o = c[l >> 2] | 0;
  break;
 } else {
  n = g;
  o = h;
 } while (0);
 g = _(n * 3 | 0, o) | 0;
 c[z >> 2] = 0;
 s = z + 4 | 0;
 c[s >> 2] = 0;
 c[z + 8 >> 2] = 0;
 do if (g) if (g >>> 0 > 1073741823) we(z); else {
  q = g << 2;
  o = ye(q) | 0;
  c[z >> 2] = o;
  p = o + (g << 2) | 0;
  c[z + 8 >> 2] = p;
  pg(o | 0, 0, q | 0) | 0;
  c[s >> 2] = p;
  p = c[k >> 2] | 0;
  q = c[l >> 2] | 0;
  break;
 } else {
  p = n;
  q = o;
 } while (0);
 g = _(p * 3 | 0, q) | 0;
 c[y >> 2] = 0;
 e = y + 4 | 0;
 c[e >> 2] = 0;
 c[y + 8 >> 2] = 0;
 do if (g) if (g >>> 0 > 1073741823) we(y); else {
  p = g << 2;
  o = ye(p) | 0;
  c[y >> 2] = o;
  q = o + (g << 2) | 0;
  c[y + 8 >> 2] = q;
  pg(o | 0, 0, p | 0) | 0;
  c[e >> 2] = q;
  break;
 } while (0);
 c[w >> 2] = 0;
 d = w + 4 | 0;
 c[d >> 2] = 0;
 c[w + 8 >> 2] = 0;
 Uc(b, I, H, B, z);
 Vc(b, I, H, y);
 Wc(b, I, H, z);
 ic(I, H, c[b >> 2] | 0, c[r >> 2] | 0, E, D);
 Xc(b, E, D, B, z, y, w);
 Tc(c[b >> 2] | 0, c[r >> 2] | 0, c[b + 12 >> 2] | 0, w);
 l = c[f >> 2] | 0;
 m = c[u >> 2] | 0;
 g = c[w >> 2] | 0;
 if (((c[d >> 2] | 0) - g >> 2 | 0) != (_(m, l) | 0)) Aa(40592, 40505, 361, 40621);
 if (m) {
  j = f + 12 | 0;
  k = l << 2;
  tg(c[j >> 2] | 0, g | 0, k | 0) | 0;
  a : do if (m >>> 0 > 1) {
   h = 1;
   while (1) {
    g = c[u >> 2] | 0;
    if (g >>> 0 <= h >>> 0) break;
    f = (c[w >> 2] | 0) + ((_(h, l) | 0) << 2) | 0;
    tg((c[j >> 2] | 0) + (_(c[t >> 2] | 0, h) | 0) | 0, f | 0, k | 0) | 0;
    h = h + 1 | 0;
    if (h >>> 0 >= m >>> 0) break a;
   }
   c[x >> 2] = h;
   c[x + 4 >> 2] = g;
   Df(40454, x) | 0;
   xa();
  } while (0);
  g = c[w >> 2] | 0;
 }
 h = g;
 if (g) {
  j = c[d >> 2] | 0;
  if ((j | 0) != (g | 0)) c[d >> 2] = j + (~((j + -4 - h | 0) >>> 2) << 2);
  Ae(g);
 }
 g = c[y >> 2] | 0;
 h = g;
 if (g) {
  j = c[e >> 2] | 0;
  if ((j | 0) != (g | 0)) c[e >> 2] = j + (~((j + -4 - h | 0) >>> 2) << 2);
  Ae(g);
 }
 g = c[z >> 2] | 0;
 h = g;
 if (g) {
  j = c[s >> 2] | 0;
  if ((j | 0) != (g | 0)) c[s >> 2] = j + (~((j + -4 - h | 0) >>> 2) << 2);
  Ae(g);
 }
 g = c[B >> 2] | 0;
 h = g;
 if (g) {
  j = c[v >> 2] | 0;
  if ((j | 0) != (g | 0)) c[v >> 2] = j + (~((j + -4 - h | 0) >>> 2) << 2);
  Ae(g);
 }
 g = c[D >> 2] | 0;
 if (g) {
  h = c[A >> 2] | 0;
  if ((h | 0) != (g | 0)) {
   do {
    j = h + -12 | 0;
    c[A >> 2] = j;
    k = c[j >> 2] | 0;
    l = k;
    if (!k) h = j; else {
     h = h + -8 | 0;
     j = c[h >> 2] | 0;
     if ((j | 0) != (k | 0)) c[h >> 2] = j + (~((j + -4 - l | 0) >>> 2) << 2);
     Ae(k);
     h = c[A >> 2] | 0;
    }
   } while ((h | 0) != (g | 0));
   g = c[D >> 2] | 0;
  }
  Ae(g);
 }
 g = c[E >> 2] | 0;
 if (g) {
  h = c[C >> 2] | 0;
  if ((h | 0) != (g | 0)) {
   do {
    j = h + -12 | 0;
    c[C >> 2] = j;
    k = c[j >> 2] | 0;
    l = k;
    if (!k) h = j; else {
     h = h + -8 | 0;
     j = c[h >> 2] | 0;
     if ((j | 0) != (k | 0)) c[h >> 2] = j + (~((j + -4 - l | 0) >>> 2) << 2);
     Ae(k);
     h = c[C >> 2] | 0;
    }
   } while ((h | 0) != (g | 0));
   g = c[E >> 2] | 0;
  }
  Ae(g);
 }
 g = c[F >> 2] | 0;
 if (g) {
  m = F + 4 | 0;
  h = c[m >> 2] | 0;
  if ((h | 0) != (g | 0)) {
   do {
    j = h + -12 | 0;
    c[m >> 2] = j;
    k = c[j >> 2] | 0;
    l = k;
    if (!k) h = j; else {
     h = h + -8 | 0;
     j = c[h >> 2] | 0;
     if ((j | 0) != (k | 0)) c[h >> 2] = j + (~((j + -4 - l | 0) >>> 2) << 2);
     Ae(k);
     h = c[m >> 2] | 0;
    }
   } while ((h | 0) != (g | 0));
   g = c[F >> 2] | 0;
  }
  Ae(g);
 }
 g = c[G >> 2] | 0;
 if (g) {
  m = G + 4 | 0;
  h = c[m >> 2] | 0;
  if ((h | 0) != (g | 0)) {
   do {
    j = h + -12 | 0;
    c[m >> 2] = j;
    k = c[j >> 2] | 0;
    l = k;
    if (!k) h = j; else {
     h = h + -8 | 0;
     j = c[h >> 2] | 0;
     if ((j | 0) != (k | 0)) c[h >> 2] = j + (~((j + -4 - l | 0) >>> 2) << 2);
     Ae(k);
     h = c[m >> 2] | 0;
    }
   } while ((h | 0) != (g | 0));
   g = c[G >> 2] | 0;
  }
  Ae(g);
 }
 g = c[H >> 2] | 0;
 if (g) {
  m = H + 4 | 0;
  h = c[m >> 2] | 0;
  if ((h | 0) != (g | 0)) {
   do {
    j = h + -12 | 0;
    c[m >> 2] = j;
    k = c[j >> 2] | 0;
    l = k;
    if (!k) h = j; else {
     h = h + -8 | 0;
     j = c[h >> 2] | 0;
     if ((j | 0) != (k | 0)) c[h >> 2] = j + (~((j + -4 - l | 0) >>> 2) << 2);
     Ae(k);
     h = c[m >> 2] | 0;
    }
   } while ((h | 0) != (g | 0));
   g = c[H >> 2] | 0;
  }
  Ae(g);
 }
 g = c[I >> 2] | 0;
 if (!g) {
  i = J;
  return;
 }
 m = I + 4 | 0;
 h = c[m >> 2] | 0;
 if ((h | 0) != (g | 0)) {
  do {
   j = h + -12 | 0;
   c[m >> 2] = j;
   k = c[j >> 2] | 0;
   l = k;
   if (!k) h = j; else {
    h = h + -8 | 0;
    j = c[h >> 2] | 0;
    if ((j | 0) != (k | 0)) c[h >> 2] = j + (~((j + -4 - l | 0) >>> 2) << 2);
    Ae(k);
    h = c[m >> 2] | 0;
   }
  } while ((h | 0) != (g | 0));
  g = c[I >> 2] | 0;
 }
 Ae(g);
 i = J;
 return;
}

function Wc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, j = 0, k = 0, l = 0, m = 0.0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, $ = 0, aa = 0, ba = 0.0, ca = 0.0, da = 0.0, ea = 0.0, fa = 0.0;
 aa = i;
 i = i + 144 | 0;
 $ = aa + 132 | 0;
 Z = aa + 120 | 0;
 X = aa + 24 | 0;
 Y = aa;
 Hb($, b);
 Hb(Z, d);
 w = a + 4 | 0;
 Nc(c[a >> 2] | 0, c[w >> 2] | 0, c[c[$ >> 2] >> 2] | 0, 14.0, 0.0);
 Nc(c[a >> 2] | 0, c[w >> 2] | 0, c[c[Z >> 2] >> 2] | 0, 14.0, 0.0);
 Nc(c[a >> 2] | 0, c[w >> 2] | 0, c[(c[$ >> 2] | 0) + 12 >> 2] | 0, 14.0, 0.0);
 Nc(c[a >> 2] | 0, c[w >> 2] | 0, c[(c[Z >> 2] | 0) + 12 >> 2] | 0, 14.0, 0.0);
 Nc(c[a >> 2] | 0, c[w >> 2] | 0, c[(c[$ >> 2] | 0) + 24 >> 2] | 0, 14.0, 0.0);
 Nc(c[a >> 2] | 0, c[w >> 2] | 0, c[(c[Z >> 2] | 0) + 24 >> 2] | 0, 14.0, 0.0);
 b = c[w >> 2] | 0;
 if (b >>> 0 > 8) {
  x = a + 12 | 0;
  y = a + 16 | 0;
  z = X + 8 | 0;
  A = X + 16 | 0;
  B = Y + 8 | 0;
  C = Y + 16 | 0;
  D = X + 24 | 0;
  E = X + 32 | 0;
  F = X + 40 | 0;
  G = X + 48 | 0;
  H = X + 56 | 0;
  I = X + 64 | 0;
  J = X + 72 | 0;
  K = X + 80 | 0;
  L = X + 88 | 0;
  M = X + 24 | 0;
  N = X + 48 | 0;
  O = X + 72 | 0;
  P = X + 8 | 0;
  Q = X + 32 | 0;
  R = X + 56 | 0;
  S = X + 80 | 0;
  T = X + 16 | 0;
  U = X + 40 | 0;
  V = X + 64 | 0;
  W = X + 88 | 0;
  f = c[x >> 2] | 0;
  d = c[a >> 2] | 0;
  v = 0;
  do {
   u = (v | 0) / (f | 0) | 0;
   if (d >>> 0 > 8) {
    s = 8 / (f | 0) | 0;
    t = 0;
    while (1) {
     k = (_(d, v) | 0) + t | 0;
     r = _(c[y >> 2] | 0, u) | 0;
     p = k + 8 | 0;
     f = c[Z >> 2] | 0;
     j = c[$ >> 2] | 0;
     q = (d << 3) + k | 0;
     n = d * 6 | 0;
     l = k + 6 + n | 0;
     n = k + -6 + n | 0;
     o = (t | 0) < 8;
     b = c[f >> 2] | 0;
     d = c[j >> 2] | 0;
     m = +g[b + (k << 2) >> 2] - +g[d + (k << 2) >> 2];
     h[X >> 3] = m + (+g[d + (p << 2) >> 2] - +g[b + (p << 2) >> 2]);
     h[M >> 3] = m + (+g[d + (q << 2) >> 2] - +g[b + (q << 2) >> 2]);
     h[N >> 3] = m + (+g[d + (l << 2) >> 2] - +g[b + (l << 2) >> 2]);
     if (o) m = 0.0; else m = m + (+g[d + (n << 2) >> 2] - +g[b + (n << 2) >> 2]);
     h[O >> 3] = m;
     b = c[f + 12 >> 2] | 0;
     d = c[j + 12 >> 2] | 0;
     m = +g[b + (k << 2) >> 2] - +g[d + (k << 2) >> 2];
     h[P >> 3] = m + (+g[d + (p << 2) >> 2] - +g[b + (p << 2) >> 2]);
     h[Q >> 3] = m + (+g[d + (q << 2) >> 2] - +g[b + (q << 2) >> 2]);
     h[R >> 3] = m + (+g[d + (l << 2) >> 2] - +g[b + (l << 2) >> 2]);
     if (o) m = 0.0; else m = m + (+g[d + (n << 2) >> 2] - +g[b + (n << 2) >> 2]);
     h[S >> 3] = m;
     d = c[f + 24 >> 2] | 0;
     b = c[j + 24 >> 2] | 0;
     m = +g[d + (k << 2) >> 2] - +g[b + (k << 2) >> 2];
     h[T >> 3] = m + (+g[b + (p << 2) >> 2] - +g[d + (p << 2) >> 2]);
     h[U >> 3] = m + (+g[b + (q << 2) >> 2] - +g[d + (q << 2) >> 2]);
     h[V >> 3] = m + (+g[b + (l << 2) >> 2] - +g[d + (l << 2) >> 2]);
     if (o) m = 0.0; else m = m + (+g[b + (n << 2) >> 2] - +g[d + (n << 2) >> 2]);
     h[W >> 3] = m;
     c[Y >> 2] = 0;
     c[Y + 4 >> 2] = 0;
     c[Y + 8 >> 2] = 0;
     c[Y + 12 >> 2] = 0;
     c[Y + 16 >> 2] = 0;
     c[Y + 20 >> 2] = 0;
     Pc(+h[X >> 3], +h[z >> 3], +h[A >> 3], 0.0, 0.0, 0.0, 1.0, Y);
     ea = +h[Y >> 3];
     ea = ea > 0.0 ? ea : 0.0;
     ca = +h[B >> 3];
     ca = ca > 0.0 ? ca : 0.0;
     m = +h[C >> 3];
     m = m > 0.0 ? m : 0.0;
     c[Y >> 2] = 0;
     c[Y + 4 >> 2] = 0;
     c[Y + 8 >> 2] = 0;
     c[Y + 12 >> 2] = 0;
     c[Y + 16 >> 2] = 0;
     c[Y + 20 >> 2] = 0;
     Pc(+h[D >> 3], +h[E >> 3], +h[F >> 3], 0.0, 0.0, 0.0, 1.0, Y);
     fa = +h[Y >> 3];
     ea = ea < fa ? fa : ea;
     fa = +h[B >> 3];
     ca = ca < fa ? fa : ca;
     fa = +h[C >> 3];
     m = m < fa ? fa : m;
     c[Y >> 2] = 0;
     c[Y + 4 >> 2] = 0;
     c[Y + 8 >> 2] = 0;
     c[Y + 12 >> 2] = 0;
     c[Y + 16 >> 2] = 0;
     c[Y + 20 >> 2] = 0;
     Pc(+h[G >> 3], +h[H >> 3], +h[I >> 3], 0.0, 0.0, 0.0, 1.0, Y);
     fa = +h[Y >> 3];
     ea = ea < fa ? fa : ea;
     fa = +h[B >> 3];
     ca = ca < fa ? fa : ca;
     fa = +h[C >> 3];
     m = m < fa ? fa : m;
     c[Y >> 2] = 0;
     c[Y + 4 >> 2] = 0;
     c[Y + 8 >> 2] = 0;
     c[Y + 12 >> 2] = 0;
     c[Y + 16 >> 2] = 0;
     c[Y + 20 >> 2] = 0;
     Pc(+h[J >> 3], +h[K >> 3], +h[L >> 3], 0.0, 0.0, 0.0, 1.0, Y);
     fa = +h[Y >> 3];
     da = +h[B >> 3];
     ba = +h[C >> 3];
     b = (r + s | 0) * 3 | 0;
     d = c[e >> 2] | 0;
     r = d + (b << 2) | 0;
     g[r >> 2] = (ea < fa ? fa : ea) * 10.0 + +g[r >> 2];
     r = d + (b + 1 << 2) | 0;
     g[r >> 2] = (ca < da ? da : ca) * 10.0 + +g[r >> 2];
     b = d + (b + 2 << 2) | 0;
     g[b >> 2] = (m < ba ? ba : m) * 10.0 + +g[b >> 2];
     b = c[x >> 2] | 0;
     t = b + t | 0;
     d = c[a >> 2] | 0;
     if ((t + 8 | 0) >>> 0 >= d >>> 0) break; else s = s + 1 | 0;
    }
    f = b;
    b = c[w >> 2] | 0;
   }
   v = f + v | 0;
  } while ((v + 8 | 0) >>> 0 < b >>> 0);
 }
 b = c[Z >> 2] | 0;
 if (b) {
  l = Z + 4 | 0;
  d = c[l >> 2] | 0;
  if ((d | 0) != (b | 0)) {
   do {
    f = d + -12 | 0;
    c[l >> 2] = f;
    j = c[f >> 2] | 0;
    k = j;
    if (!j) d = f; else {
     d = d + -8 | 0;
     f = c[d >> 2] | 0;
     if ((f | 0) != (j | 0)) c[d >> 2] = f + (~((f + -4 - k | 0) >>> 2) << 2);
     Ae(j);
     d = c[l >> 2] | 0;
    }
   } while ((d | 0) != (b | 0));
   b = c[Z >> 2] | 0;
  }
  Ae(b);
 }
 b = c[$ >> 2] | 0;
 if (!b) {
  i = aa;
  return;
 }
 l = $ + 4 | 0;
 d = c[l >> 2] | 0;
 if ((d | 0) != (b | 0)) {
  do {
   f = d + -12 | 0;
   c[l >> 2] = f;
   j = c[f >> 2] | 0;
   k = j;
   if (!j) d = f; else {
    d = d + -8 | 0;
    f = c[d >> 2] | 0;
    if ((f | 0) != (j | 0)) c[d >> 2] = f + (~((f + -4 - k | 0) >>> 2) << 2);
    Ae(j);
    d = c[l >> 2] | 0;
   }
  } while ((d | 0) != (b | 0));
  b = c[$ >> 2] | 0;
 }
 Ae(b);
 i = aa;
 return;
}

function re(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 m = i;
 i = i + 16 | 0;
 k = m;
 switch (b - a >> 3 | 0) {
 case 2:
  {
   e = b + -8 | 0;
   if (!(qb[c[d >> 2] & 1](e, a) | 0)) {
    a = 1;
    i = m;
    return a | 0;
   }
   d = a;
   b = c[d >> 2] | 0;
   d = c[d + 4 >> 2] | 0;
   k = e;
   l = c[k + 4 >> 2] | 0;
   c[a >> 2] = c[k >> 2];
   c[a + 4 >> 2] = l;
   a = e;
   c[a >> 2] = b;
   c[a + 4 >> 2] = d;
   a = 1;
   i = m;
   return a | 0;
  }
 case 3:
  {
   j = a + 8 | 0;
   e = b + -8 | 0;
   b = qb[c[d >> 2] & 1](j, a) | 0;
   f = qb[c[d >> 2] & 1](e, j) | 0;
   if (!b) {
    if (!f) {
     a = 1;
     i = m;
     return a | 0;
    }
    l = j;
    k = c[l >> 2] | 0;
    l = c[l + 4 >> 2] | 0;
    g = e;
    h = c[g + 4 >> 2] | 0;
    b = j;
    c[b >> 2] = c[g >> 2];
    c[b + 4 >> 2] = h;
    b = e;
    c[b >> 2] = k;
    c[b + 4 >> 2] = l;
    if (!(qb[c[d >> 2] & 1](j, a) | 0)) {
     a = 1;
     i = m;
     return a | 0;
    }
    d = a;
    b = c[d >> 2] | 0;
    d = c[d + 4 >> 2] | 0;
    k = j;
    l = c[k + 4 >> 2] | 0;
    c[a >> 2] = c[k >> 2];
    c[a + 4 >> 2] = l;
    a = j;
    c[a >> 2] = b;
    c[a + 4 >> 2] = d;
    a = 1;
    i = m;
    return a | 0;
   }
   h = a;
   g = c[h >> 2] | 0;
   h = c[h + 4 >> 2] | 0;
   if (f) {
    b = e;
    d = c[b + 4 >> 2] | 0;
    c[a >> 2] = c[b >> 2];
    c[a + 4 >> 2] = d;
    a = e;
    c[a >> 2] = g;
    c[a + 4 >> 2] = h;
    a = 1;
    i = m;
    return a | 0;
   }
   l = j;
   b = c[l + 4 >> 2] | 0;
   c[a >> 2] = c[l >> 2];
   c[a + 4 >> 2] = b;
   a = j;
   c[a >> 2] = g;
   c[a + 4 >> 2] = h;
   if (!(qb[c[d >> 2] & 1](e, j) | 0)) {
    a = 1;
    i = m;
    return a | 0;
   }
   d = j;
   b = c[d >> 2] | 0;
   d = c[d + 4 >> 2] | 0;
   k = e;
   l = c[k + 4 >> 2] | 0;
   a = j;
   c[a >> 2] = c[k >> 2];
   c[a + 4 >> 2] = l;
   a = e;
   c[a >> 2] = b;
   c[a + 4 >> 2] = d;
   a = 1;
   i = m;
   return a | 0;
  }
 case 4:
  {
   pe(a, a + 8 | 0, a + 16 | 0, b + -8 | 0, d) | 0;
   a = 1;
   i = m;
   return a | 0;
  }
 case 5:
  {
   f = a + 8 | 0;
   g = a + 16 | 0;
   h = a + 24 | 0;
   e = b + -8 | 0;
   pe(a, f, g, h, d) | 0;
   if (!(qb[c[d >> 2] & 1](e, h) | 0)) {
    a = 1;
    i = m;
    return a | 0;
   }
   l = h;
   k = c[l >> 2] | 0;
   l = c[l + 4 >> 2] | 0;
   n = e;
   j = c[n + 4 >> 2] | 0;
   b = h;
   c[b >> 2] = c[n >> 2];
   c[b + 4 >> 2] = j;
   b = e;
   c[b >> 2] = k;
   c[b + 4 >> 2] = l;
   if (!(qb[c[d >> 2] & 1](h, g) | 0)) {
    n = 1;
    i = m;
    return n | 0;
   }
   b = g;
   l = c[b >> 2] | 0;
   b = c[b + 4 >> 2] | 0;
   j = h;
   k = c[j + 4 >> 2] | 0;
   n = g;
   c[n >> 2] = c[j >> 2];
   c[n + 4 >> 2] = k;
   n = h;
   c[n >> 2] = l;
   c[n + 4 >> 2] = b;
   if (!(qb[c[d >> 2] & 1](g, f) | 0)) {
    n = 1;
    i = m;
    return n | 0;
   }
   b = f;
   l = c[b >> 2] | 0;
   b = c[b + 4 >> 2] | 0;
   j = g;
   k = c[j + 4 >> 2] | 0;
   n = f;
   c[n >> 2] = c[j >> 2];
   c[n + 4 >> 2] = k;
   n = g;
   c[n >> 2] = l;
   c[n + 4 >> 2] = b;
   if (!(qb[c[d >> 2] & 1](f, a) | 0)) {
    n = 1;
    i = m;
    return n | 0;
   }
   d = a;
   b = c[d >> 2] | 0;
   d = c[d + 4 >> 2] | 0;
   k = f;
   l = c[k + 4 >> 2] | 0;
   n = a;
   c[n >> 2] = c[k >> 2];
   c[n + 4 >> 2] = l;
   n = f;
   c[n >> 2] = b;
   c[n + 4 >> 2] = d;
   n = 1;
   i = m;
   return n | 0;
  }
 case 1:
 case 0:
  {
   n = 1;
   i = m;
   return n | 0;
  }
 default:
  {
   g = a + 16 | 0;
   e = a + 8 | 0;
   n = qb[c[d >> 2] & 1](e, a) | 0;
   f = qb[c[d >> 2] & 1](g, e) | 0;
   do if (n) {
    j = a;
    h = c[j >> 2] | 0;
    j = c[j + 4 >> 2] | 0;
    if (f) {
     e = g;
     f = c[e + 4 >> 2] | 0;
     n = a;
     c[n >> 2] = c[e >> 2];
     c[n + 4 >> 2] = f;
     n = g;
     c[n >> 2] = h;
     c[n + 4 >> 2] = j;
     break;
    }
    o = e;
    f = c[o + 4 >> 2] | 0;
    n = a;
    c[n >> 2] = c[o >> 2];
    c[n + 4 >> 2] = f;
    n = e;
    c[n >> 2] = h;
    c[n + 4 >> 2] = j;
    if (qb[c[d >> 2] & 1](g, e) | 0) {
     n = e;
     j = c[n >> 2] | 0;
     n = c[n + 4 >> 2] | 0;
     f = g;
     h = c[f + 4 >> 2] | 0;
     o = e;
     c[o >> 2] = c[f >> 2];
     c[o + 4 >> 2] = h;
     o = g;
     c[o >> 2] = j;
     c[o + 4 >> 2] = n;
    }
   } else if (f ? (n = e, j = c[n >> 2] | 0, n = c[n + 4 >> 2] | 0, f = g, h = c[f + 4 >> 2] | 0, o = e, c[o >> 2] = c[f >> 2], c[o + 4 >> 2] = h, o = g, c[o >> 2] = j, c[o + 4 >> 2] = n, qb[c[d >> 2] & 1](e, a) | 0) : 0) {
    n = a;
    j = c[n >> 2] | 0;
    n = c[n + 4 >> 2] | 0;
    f = e;
    h = c[f + 4 >> 2] | 0;
    o = a;
    c[o >> 2] = c[f >> 2];
    c[o + 4 >> 2] = h;
    o = e;
    c[o >> 2] = j;
    c[o + 4 >> 2] = n;
   } while (0);
   e = a + 24 | 0;
   if ((e | 0) == (b | 0)) {
    o = 1;
    i = m;
    return o | 0;
   } else f = 0;
   while (1) {
    if (qb[c[d >> 2] & 1](e, g) | 0) {
     n = e;
     o = c[n + 4 >> 2] | 0;
     h = k;
     c[h >> 2] = c[n >> 2];
     c[h + 4 >> 2] = o;
     h = e;
     while (1) {
      j = g;
      n = c[j + 4 >> 2] | 0;
      o = h;
      c[o >> 2] = c[j >> 2];
      c[o + 4 >> 2] = n;
      if ((g | 0) == (a | 0)) break;
      h = g + -8 | 0;
      if (qb[c[d >> 2] & 1](k, h) | 0) {
       o = g;
       g = h;
       h = o;
      } else break;
     }
     j = k;
     n = c[j + 4 >> 2] | 0;
     o = g;
     c[o >> 2] = c[j >> 2];
     c[o + 4 >> 2] = n;
     f = f + 1 | 0;
     if ((f | 0) == 8) break;
    }
    g = e + 8 | 0;
    if ((g | 0) == (b | 0)) {
     e = 1;
     l = 34;
     break;
    } else {
     o = e;
     e = g;
     g = o;
    }
   }
   if ((l | 0) == 34) {
    i = m;
    return e | 0;
   }
   o = (e + 8 | 0) == (b | 0);
   i = m;
   return o | 0;
  }
 }
 return 0;
}

function Yb(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 v = i;
 i = i + 80 | 0;
 n = v + 60 | 0;
 m = v + 48 | 0;
 s = v + 36 | 0;
 l = v + 24 | 0;
 o = v + 12 | 0;
 r = v;
 u = d + 8 | 0;
 k = c[u >> 2] | 0;
 t = c[k + 332 >> 2] | 0;
 g = t << 6;
 a : do if ((t | 0) > 0) {
  f = c[k + 336 >> 2] | 0;
  h = 0;
  while (1) {
   if (b[f + (h << 1) >> 1] | 0) break a;
   h = h + 1 | 0;
   if ((h | 0) >= (g | 0)) {
    j = 5;
    break;
   }
  }
 } else j = 5; while (0);
 b : do if ((j | 0) == 5) {
  t = c[k + 640 >> 2] | 0;
  h = t << 6;
  if ((t | 0) <= 0) {
   i = v;
   return;
  }
  f = c[k + 644 >> 2] | 0;
  g = 0;
  do {
   if (b[f + (g << 1) >> 1] | 0) break b;
   g = g + 1 | 0;
  } while ((g | 0) < (h | 0));
  i = v;
  return;
 } while (0);
 if (((((a[e + 20 >> 0] | 0) != 0 ? (c[e >> 2] | 0) == 2 : 0) ? (c[e + 4 >> 2] | 0) == 2 : 0) ? (c[e + 8 >> 2] | 0) == 2 : 0) ? (c[e + 12 >> 2] | 0) == 2 : 0) {
  f = d + 4 | 0;
  bc(n, d, 0, 0, c[d >> 2] | 0, c[f >> 2] | 0);
  Kb(m, n, c[d >> 2] | 0, c[f >> 2] | 0);
  Zb(c[m >> 2] | 0, 1, 1, c[u >> 2] | 0);
  Zb((c[m >> 2] | 0) + 12 | 0, 2, 2, (c[u >> 2] | 0) + 308 | 0);
  Zb((c[m >> 2] | 0) + 24 | 0, 2, 2, (c[u >> 2] | 0) + 616 | 0);
  f = c[m >> 2] | 0;
  if (f) {
   l = m + 4 | 0;
   g = c[l >> 2] | 0;
   if ((g | 0) != (f | 0)) {
    do {
     h = g + -12 | 0;
     c[l >> 2] = h;
     j = c[h >> 2] | 0;
     k = j;
     if (!j) g = h; else {
      g = g + -8 | 0;
      h = c[g >> 2] | 0;
      if ((h | 0) != (j | 0)) c[g >> 2] = h + (~((h + -4 - k | 0) >>> 2) << 2);
      Ae(j);
      g = c[l >> 2] | 0;
     }
    } while ((g | 0) != (f | 0));
    f = c[m >> 2] | 0;
   }
   Ae(f);
  }
  g = c[n >> 2] | 0;
  if (!g) {
   i = v;
   return;
  }
  f = n + 4 | 0;
  if ((c[f >> 2] | 0) != (g | 0)) c[f >> 2] = g;
  Ae(g);
  i = v;
  return;
 }
 p = d + 4 | 0;
 f = _(c[p >> 2] | 0, c[d >> 2] | 0) | 0;
 c[l >> 2] = 0;
 j = l + 4 | 0;
 c[j >> 2] = 0;
 c[l + 8 >> 2] = 0;
 do if (f) if (f >>> 0 > 1073741823) we(l); else {
  q = f << 2;
  n = ye(q) | 0;
  c[l >> 2] = n;
  t = n + (f << 2) | 0;
  c[l + 8 >> 2] = t;
  pg(n | 0, 0, q | 0) | 0;
  c[j >> 2] = t;
  break;
 } while (0);
 c[s >> 2] = 0;
 t = s + 4 | 0;
 c[t >> 2] = 0;
 c[s + 8 >> 2] = 0;
 m = ye(36) | 0;
 c[t >> 2] = m;
 c[s >> 2] = m;
 q = s + 8 | 0;
 c[q >> 2] = m + 36;
 ed(m, l);
 k = m + 12 | 0;
 c[t >> 2] = k;
 ed(k, l);
 k = m + 24 | 0;
 c[t >> 2] = k;
 ed(k, l);
 k = m + 36 | 0;
 c[t >> 2] = k;
 f = c[l >> 2] | 0;
 g = f;
 if (f) {
  h = c[j >> 2] | 0;
  if ((h | 0) != (f | 0)) c[j >> 2] = h + (~((h + -4 - g | 0) >>> 2) << 2);
  Ae(f);
 }
 Rb(c[u >> 2] | 0, c[m >> 2] | 0, 1);
 Rb((c[u >> 2] | 0) + 308 | 0, c[m + 12 >> 2] | 0, 1);
 Rb((c[u >> 2] | 0) + 616 | 0, c[m + 24 >> 2] | 0, 1);
 Gb(o, c[d >> 2] | 0, c[p >> 2] | 0, 2, 1.2999999523162842, .5, (a[e + 16 >> 0] | 0) != 0, (a[e + 17 >> 0] | 0) != 0, s);
 l = k + -12 | 0;
 h = c[l >> 2] | 0;
 j = h;
 if (h) {
  f = k + -8 | 0;
  g = c[f >> 2] | 0;
  if ((g | 0) != (h | 0)) c[f >> 2] = g + (~((g + -4 - j | 0) >>> 2) << 2);
  Ae(h);
 }
 k = l + -12 | 0;
 h = c[k >> 2] | 0;
 j = h;
 if (h) {
  f = l + -8 | 0;
  g = c[f >> 2] | 0;
  if ((g | 0) != (h | 0)) c[f >> 2] = g + (~((g + -4 - j | 0) >>> 2) << 2);
  Ae(h);
 }
 h = c[k + -12 >> 2] | 0;
 j = h;
 if (h) {
  f = k + -8 | 0;
  g = c[f >> 2] | 0;
  if ((g | 0) != (h | 0)) c[f >> 2] = g + (~((g + -4 - j | 0) >>> 2) << 2);
  Ae(h);
 }
 Ae(m);
 f = c[o >> 2] | 0;
 c[s >> 2] = f;
 n = o + 4 | 0;
 m = c[n >> 2] | 0;
 c[t >> 2] = m;
 l = o + 8 | 0;
 c[q >> 2] = c[l >> 2];
 c[l >> 2] = 0;
 c[n >> 2] = 0;
 c[o >> 2] = 0;
 n = f;
 o = f;
 Gb(r, c[d >> 2] | 0, c[p >> 2] | 0, 1, 1.2999999523162842, .5, (a[e + 18 >> 0] | 0) != 0, (a[e + 19 >> 0] | 0) != 0, s);
 if (f) {
  if ((m | 0) != (n | 0)) {
   h = ~(((m + -12 + (0 - f) | 0) >>> 0) / 12 | 0);
   j = m;
   do {
    f = j;
    j = j + -12 | 0;
    k = c[j >> 2] | 0;
    l = k;
    if (k) {
     f = f + -8 | 0;
     g = c[f >> 2] | 0;
     if ((g | 0) != (k | 0)) c[f >> 2] = g + (~((g + -4 - l | 0) >>> 2) << 2);
     Ae(k);
    }
   } while ((j | 0) != (n | 0));
   c[t >> 2] = m + (h * 12 | 0);
   f = o;
  }
  Ae(f);
  c[q >> 2] = 0;
  c[t >> 2] = 0;
  c[s >> 2] = 0;
 }
 f = c[r >> 2] | 0;
 c[s >> 2] = f;
 g = r + 4 | 0;
 n = c[g >> 2] | 0;
 c[t >> 2] = n;
 m = r + 8 | 0;
 c[q >> 2] = c[m >> 2];
 c[m >> 2] = 0;
 c[g >> 2] = 0;
 c[r >> 2] = 0;
 g = c[e >> 2] | 0;
 m = f;
 o = f;
 h = c[e + 4 >> 2] | 0;
 if (!((g | 0) == 1 & (h | 0) == 1)) Zb(m + 12 | 0, g, h, (c[u >> 2] | 0) + 308 | 0);
 h = c[e + 8 >> 2] | 0;
 g = c[e + 12 >> 2] | 0;
 if (!((h | 0) == 1 & (g | 0) == 1)) Zb(m + 24 | 0, h, g, (c[u >> 2] | 0) + 616 | 0);
 if (!f) {
  i = v;
  return;
 }
 if ((n | 0) != (m | 0)) {
  h = ~(((n + -12 + (0 - f) | 0) >>> 0) / 12 | 0);
  j = n;
  do {
   f = j;
   j = j + -12 | 0;
   k = c[j >> 2] | 0;
   l = k;
   if (k) {
    f = f + -8 | 0;
    g = c[f >> 2] | 0;
    if ((g | 0) != (k | 0)) c[f >> 2] = g + (~((g + -4 - l | 0) >>> 2) << 2);
    Ae(k);
   }
  } while ((j | 0) != (m | 0));
  c[t >> 2] = n + (h * 12 | 0);
  f = o;
 }
 Ae(f);
 i = v;
 return;
}

function $b(a, d) {
 a = a | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 C = i;
 i = i + 768 | 0;
 B = C;
 y = a + 8 | 0;
 k = c[y >> 2] | 0;
 if ((c[k + 8 >> 2] | 0) != 1) Aa(35132, 34635, 348, 35163);
 if ((c[k + 12 >> 2] | 0) != 1) Aa(35178, 34635, 349, 35163);
 c[d >> 2] = c[a >> 2];
 c[d + 4 >> 2] = c[a + 4 >> 2];
 u = d + 12 | 0;
 c[u >> 2] = 1;
 v = d + 16 | 0;
 c[v >> 2] = 1;
 h = c[k + 16 >> 2] | 0;
 w = d + 24 | 0;
 c[w >> 2] = h;
 j = c[k + 20 >> 2] | 0;
 x = d + 20 | 0;
 c[x >> 2] = j;
 t = c[k + 332 >> 2] | 0;
 a = t << 6;
 a : do if ((t | 0) > 0) {
  e = c[k + 336 >> 2] | 0;
  f = 0;
  while (1) {
   if (b[e + (f << 1) >> 1] | 0) {
    g = 13;
    break a;
   }
   f = f + 1 | 0;
   if ((f | 0) >= (a | 0)) {
    g = 9;
    break;
   }
  }
 } else g = 9; while (0);
 b : do if ((g | 0) == 9) {
  t = c[k + 640 >> 2] | 0;
  a = t << 6;
  if ((t | 0) > 0) {
   e = c[k + 644 >> 2] | 0;
   f = 0;
   while (1) {
    if (b[e + (f << 1) >> 1] | 0) {
     g = 13;
     break b;
    }
    f = f + 1 | 0;
    if ((f | 0) >= (a | 0)) {
     t = 1;
     break;
    }
   }
  } else t = 1;
 } while (0);
 if ((g | 0) == 13) {
  t = c[k + 316 >> 2] | 0;
  t = 1 < (t | 0) ? t : 1;
  q = c[k + 324 >> 2] | 0;
  q = (q | 0) < (h | 0) ? q : h;
  s = c[k + 328 >> 2] | 0;
  s = (s | 0) < (j | 0) ? s : j;
  p = c[k + 624 >> 2] | 0;
  t = (t | 0) < (p | 0) ? p : t;
  p = c[k + 632 >> 2] | 0;
  r = c[k + 636 >> 2] | 0;
  c[u >> 2] = t;
  c[w >> 2] = (p | 0) < (q | 0) ? p : q;
  c[x >> 2] = (r | 0) < (s | 0) ? r : s;
  s = c[k + 628 >> 2] | 0;
  c[v >> 2] = (t | 0) < (s | 0) ? s : t;
  t = 3;
 }
 s = d + 80 | 0;
 h = d + 84 | 0;
 a = c[h >> 2] | 0;
 e = c[s >> 2] | 0;
 f = (a - e | 0) / 40 | 0;
 if (t >>> 0 <= f >>> 0) {
  if (t >>> 0 < f >>> 0 ? (l = e + (t * 40 | 0) | 0, (a | 0) != (l | 0)) : 0) {
   e = a;
   while (1) {
    a = e + -40 | 0;
    c[h >> 2] = a;
    f = c[e + -12 >> 2] | 0;
    g = f;
    if (f) {
     a = e + -8 | 0;
     e = c[a >> 2] | 0;
     if ((e | 0) != (f | 0)) c[a >> 2] = e + (~((e + -2 - g | 0) >>> 1) << 1);
     Ae(f);
     a = c[h >> 2] | 0;
    }
    if ((a | 0) == (l | 0)) break; else e = a;
   }
  }
 } else de(s, t - f | 0);
 f = c[y >> 2] | 0;
 tg(B | 0, f + 52 | 0, 256) | 0;
 tg(B + 256 | 0, f + 360 | 0, 256) | 0;
 tg(B + 512 | 0, f + 668 | 0, 256) | 0;
 a = c[u >> 2] | 0;
 e = c[f + 8 >> 2] | 0;
 if (!((a | 0) % (e | 0) | 0)) {
  m = f;
  n = a;
  o = e;
  A = 0;
 } else Aa(35209, 34635, 372, 35163);
 c : while (1) {
  f = c[s >> 2] | 0;
  e = c[v >> 2] | 0;
  a = c[m + (A * 308 | 0) + 12 >> 2] | 0;
  if ((e | 0) % (a | 0) | 0) {
   g = 26;
   break;
  }
  c[f + (A * 40 | 0) >> 2] = A;
  j = (n | 0) / (o | 0) | 0;
  c[f + (A * 40 | 0) + 4 >> 2] = j;
  a = (e | 0) / (a | 0) | 0;
  c[f + (A * 40 | 0) + 8 >> 2] = a;
  j = _(j, c[w >> 2] | 0) | 0;
  q = f + (A * 40 | 0) + 16 | 0;
  c[q >> 2] = j;
  a = _(a, c[x >> 2] | 0) | 0;
  r = f + (A * 40 | 0) + 20 | 0;
  c[r >> 2] = a;
  j = _(j, a) | 0;
  c[f + (A * 40 | 0) + 24 >> 2] = j;
  k = f + (A * 40 | 0) + 28 | 0;
  j = j << 6;
  e = f + (A * 40 | 0) + 32 | 0;
  f = c[e >> 2] | 0;
  g = c[k >> 2] | 0;
  h = f - g >> 1;
  if (j >>> 0 <= h >>> 0) {
   if (j >>> 0 < h >>> 0 ? (z = g + (j << 1) | 0, (f | 0) != (z | 0)) : 0) c[e >> 2] = f + (~((f + -2 - z | 0) >>> 1) << 1);
  } else {
   ee(k, j - h | 0);
   a = c[r >> 2] | 0;
  }
  if ((a | 0) > 0) {
   f = c[q >> 2] | 0;
   p = (f | 0) > 0;
   o = 0;
   n = c[k >> 2] | 0;
   h = 0;
   g = c[(c[y >> 2] | 0) + (A * 308 | 0) + 28 >> 2] | 0;
   while (1) {
    if (p) {
     m = c[y >> 2] | 0;
     l = (o | 0) < (c[m + (A * 308 | 0) + 20 >> 2] | 0);
     m = m + (A * 308 | 0) + 16 | 0;
     k = 0;
     e = n;
     do {
      a = n + ((k << 6 | 1) << 1) | 0;
      if (l ? (k | 0) < (c[m >> 2] | 0) : 0) {
       j = 0;
       do {
        a = c[B + (A << 8) + (j << 2) >> 2] | 0;
        h = b[g + (j << 1) >> 1] | 0;
        if ((h | 0) % (a | 0) | 0) {
         g = 40;
         break c;
        }
        b[e + (j << 1) >> 1] = (h | 0) / (a | 0) | 0;
        j = j + 1 | 0;
       } while ((j | 0) < 64);
       g = g + 128 | 0;
      } else {
       b[e >> 1] = h;
       f = a + 126 | 0;
       do {
        b[a >> 1] = 0;
        a = a + 2 | 0;
       } while ((a | 0) < (f | 0));
       f = c[q >> 2] | 0;
      }
      h = b[e >> 1] | 0;
      e = e + 128 | 0;
      k = k + 1 | 0;
     } while ((k | 0) < (f | 0));
     a = c[r >> 2] | 0;
    } else e = n;
    o = o + 1 | 0;
    if ((o | 0) >= (a | 0)) break; else n = e;
   }
  }
  A = A + 1 | 0;
  if ((A | 0) >= (t | 0)) {
   g = 48;
   break;
  }
  m = c[y >> 2] | 0;
  n = c[u >> 2] | 0;
  o = c[m + (A * 308 | 0) + 8 >> 2] | 0;
  if ((n | 0) % (o | 0) | 0) {
   g = 24;
   break;
  }
 }
 if ((g | 0) == 24) Aa(35209, 34635, 372, 35163); else if ((g | 0) == 26) Aa(35265, 34635, 373, 35163); else if ((g | 0) == 40) Aa(35321, 34635, 397, 35163); else if ((g | 0) == 48) {
  ac(B, d);
  i = C;
  return;
 }
}

function ic(a, b, d, e, f, h) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0.0, s = 0.0, t = 0.0, u = 0.0;
 m = f + 4 | 0;
 i = c[m >> 2] | 0;
 j = c[f >> 2] | 0;
 k = (i - j | 0) / 12 | 0;
 if (k >>> 0 >= 3) {
  if (k >>> 0 > 3 ? (n = j + 36 | 0, (i | 0) != (n | 0)) : 0) {
   j = i;
   while (1) {
    i = j + -12 | 0;
    c[m >> 2] = i;
    k = c[i >> 2] | 0;
    l = k;
    if (k) {
     i = j + -8 | 0;
     j = c[i >> 2] | 0;
     if ((j | 0) != (k | 0)) c[i >> 2] = j + (~((j + -4 - l | 0) >>> 2) << 2);
     Ae(k);
     i = c[m >> 2] | 0;
    }
    if ((i | 0) == (n | 0)) break; else j = i;
   }
  }
 } else ue(f, 3 - k | 0);
 m = h + 4 | 0;
 i = c[m >> 2] | 0;
 j = c[h >> 2] | 0;
 k = (i - j | 0) / 12 | 0;
 if (k >>> 0 >= 3) {
  if (k >>> 0 > 3 ? (o = j + 36 | 0, (i | 0) != (o | 0)) : 0) {
   j = i;
   while (1) {
    i = j + -12 | 0;
    c[m >> 2] = i;
    k = c[i >> 2] | 0;
    l = k;
    if (k) {
     i = j + -8 | 0;
     j = c[i >> 2] | 0;
     if ((j | 0) != (k | 0)) c[i >> 2] = j + (~((j + -4 - l | 0) >>> 2) << 2);
     Ae(k);
     i = c[m >> 2] | 0;
    }
    if ((i | 0) == (o | 0)) break; else j = i;
   }
  }
 } else ue(h, 3 - k | 0);
 n = _(e, d) | 0;
 o = 0;
 do {
  j = c[f >> 2] | 0;
  i = j + (o * 12 | 0) | 0;
  j = j + (o * 12 | 0) + 4 | 0;
  k = c[j >> 2] | 0;
  l = c[i >> 2] | 0;
  m = k - l >> 2;
  if (n >>> 0 <= m >>> 0) {
   if (n >>> 0 < m >>> 0 ? (p = l + (n << 2) | 0, (k | 0) != (p | 0)) : 0) c[j >> 2] = k + (~((k + -4 - p | 0) >>> 2) << 2);
  } else ke(i, n - m | 0);
  j = c[h >> 2] | 0;
  i = j + (o * 12 | 0) | 0;
  j = j + (o * 12 | 0) + 4 | 0;
  k = c[j >> 2] | 0;
  l = c[i >> 2] | 0;
  m = k - l >> 2;
  if (n >>> 0 <= m >>> 0) {
   if (n >>> 0 < m >>> 0 ? (q = l + (n << 2) | 0, (k | 0) != (q | 0)) : 0) c[j >> 2] = k + (~((k + -4 - q | 0) >>> 2) << 2);
  } else ke(i, n - m | 0);
  o = o + 1 | 0;
 } while ((o | 0) != 3);
 fd(a, b, d, e, f);
 dd(d, e, c[f >> 2] | 0);
 cd(4, 0, d, e, c[c[f >> 2] >> 2] | 0);
 Nc(d, e, c[c[f >> 2] >> 2] | 0, 9.65781083553, 0.0);
 dd(d, e, (c[f >> 2] | 0) + 12 | 0);
 cd(4, 0, d, e, c[(c[f >> 2] | 0) + 12 >> 2] | 0);
 Nc(d, e, c[(c[f >> 2] | 0) + 12 >> 2] | 0, 14.2644604355, 0.0);
 dd(d, e, (c[f >> 2] | 0) + 24 | 0);
 cd(4, 0, d, e, c[(c[f >> 2] | 0) + 24 >> 2] | 0);
 Nc(d, e, c[(c[f >> 2] | 0) + 24 >> 2] | 0, 4.53358927369, 0.0);
 if (e) {
  i = (d | 0) == 0;
  l = 0;
  do {
   if (!i) {
    j = _(l, d) | 0;
    k = 0;
    do {
     b = k + j | 0;
     a = c[f >> 2] | 0;
     t = +g[(c[a >> 2] | 0) + (b << 2) >> 2] * 232.206464018;
     s = +g[(c[a + 12 >> 2] | 0) + (b << 2) >> 2] * 22.9455222245;
     r = +g[(c[a + 24 >> 2] | 0) + (b << 2) >> 2] * 503.962310606;
     u = +Yc(t);
     g[(c[c[f >> 2] >> 2] | 0) + (b << 2) >> 2] = u;
     u = +Zc(s);
     g[(c[(c[f >> 2] | 0) + 12 >> 2] | 0) + (b << 2) >> 2] = u;
     u = +_c(r);
     g[(c[(c[f >> 2] | 0) + 24 >> 2] | 0) + (b << 2) >> 2] = u;
     t = +$c(t);
     g[(c[c[h >> 2] >> 2] | 0) + (b << 2) >> 2] = t;
     s = +ad(s);
     g[(c[(c[h >> 2] | 0) + 12 >> 2] | 0) + (b << 2) >> 2] = s;
     r = +bd(r);
     g[(c[(c[h >> 2] | 0) + 24 >> 2] | 0) + (b << 2) >> 2] = r;
     k = k + 1 | 0;
    } while ((k | 0) != (d | 0));
   }
   l = l + 1 | 0;
  } while ((l | 0) != (e | 0));
 }
 l = c[f >> 2] | 0;
 m = c[h >> 2] | 0;
 i = c[l + 4 >> 2] | 0;
 k = c[l >> 2] | 0;
 if ((i | 0) != (k | 0)) {
  i = i - k >> 2;
  j = 0;
  do {
   h = k + (j << 2) | 0;
   g[h >> 2] = +g[h >> 2] * 4.4912938802480805e-003;
   j = j + 1 | 0;
  } while (j >>> 0 < i >>> 0);
 }
 i = c[m + 4 >> 2] | 0;
 k = c[m >> 2] | 0;
 if ((i | 0) != (k | 0)) {
  i = i - k >> 2;
  j = 0;
  do {
   h = k + (j << 2) | 0;
   g[h >> 2] = +g[h >> 2] * 4.4912938802480805e-003;
   j = j + 1 | 0;
  } while (j >>> 0 < i >>> 0);
 }
 i = c[l + 16 >> 2] | 0;
 k = c[l + 12 >> 2] | 0;
 if ((i | 0) != (k | 0)) {
  i = i - k >> 2;
  j = 0;
  do {
   h = k + (j << 2) | 0;
   g[h >> 2] = +g[h >> 2] * 4.4912938802480805e-003;
   j = j + 1 | 0;
  } while (j >>> 0 < i >>> 0);
 }
 i = c[m + 16 >> 2] | 0;
 k = c[m + 12 >> 2] | 0;
 if ((i | 0) != (k | 0)) {
  i = i - k >> 2;
  j = 0;
  do {
   h = k + (j << 2) | 0;
   g[h >> 2] = +g[h >> 2] * 4.4912938802480805e-003;
   j = j + 1 | 0;
  } while (j >>> 0 < i >>> 0);
 }
 i = c[l + 28 >> 2] | 0;
 k = c[l + 24 >> 2] | 0;
 if ((i | 0) != (k | 0)) {
  i = i - k >> 2;
  j = 0;
  do {
   h = k + (j << 2) | 0;
   g[h >> 2] = +g[h >> 2] * 4.4912938802480805e-003;
   j = j + 1 | 0;
  } while (j >>> 0 < i >>> 0);
 }
 i = c[m + 28 >> 2] | 0;
 k = c[m + 24 >> 2] | 0;
 if ((i | 0) == (k | 0)) return;
 i = i - k >> 2;
 j = 0;
 do {
  h = k + (j << 2) | 0;
  g[h >> 2] = +g[h >> 2] * 4.4912938802480805e-003;
  j = j + 1 | 0;
 } while (j >>> 0 < i >>> 0);
 return;
}

function Sb(a, f, g, h) {
 a = a | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 E = i;
 i = i + 208 | 0;
 l = E;
 A = E + 8 | 0;
 k = c[a + 8 >> 2] | 0;
 switch (k | 0) {
 case 1:
  {
   j = 2;
   break;
  }
 case 2:
  {
   j = c[a + 12 >> 2] | 0;
   if ((j | 0) != 2) {
    C = j;
    c[l >> 2] = k;
    D = l + 4 | 0;
    c[D >> 2] = C;
    Df(34820, l) | 0;
    bb(1);
   }
   x = g << 4;
   w = f << 4;
   y = a + 4 | 0;
   z = a + 40 | 0;
   u = 0;
   do {
    k = (u | 0) < 9;
    j = (k ? u << 1 : -2) + x | 0;
    k = k ? (u * 10 | 0) + 10 | 0 : 0;
    l = (j | 0) < 0;
    m = (u | 0) < 8;
    n = u << 3;
    o = j + -1 | 0;
    o = (o | 0) < 0 ? 0 : o;
    s = 0;
    do {
     q = (s | 0) < 9;
     t = s;
     s = s + 1 | 0;
     p = (q ? s : 0) + k | 0;
     q = (q ? t << 1 : -2) + w | 0;
     do if ((q | 0) >= 0) {
      if (l) {
       b[A + (p << 1) >> 1] = b[A + (p + 10 << 1) >> 1] | 0;
       break;
      }
      r = c[a >> 2] | 0;
      if ((q | 0) >= (r | 0)) {
       b[A + (p << 1) >> 1] = b[A + (p + -1 << 1) >> 1] | 0;
       break;
      }
      if ((j | 0) >= (c[y >> 2] | 0)) {
       b[A + (p << 1) >> 1] = b[A + (p + -10 << 1) >> 1] | 0;
       break;
      }
      if (m & (t | 0) < 8) {
       b[A + (p << 1) >> 1] = (d[h + (t + n) >> 0] | 0) << 4;
       break;
      } else {
       B = q + -1 | 0;
       B = (B | 0) < 0 ? 0 : B;
       v = _(r, j) | 0;
       C = c[z >> 2] | 0;
       D = _(r, o) | 0;
       B = ((e[C + (v + q << 1) >> 1] | 0) * 9 | 0) + (e[C + (D + B << 1) >> 1] | 0) + (_(e[C + (v + B << 1) >> 1] | 0, -3) | 0) | 0;
       b[A + (p << 1) >> 1] = (B + (_(e[C + (D + q << 1) >> 1] | 0, -3) | 0) | 0) >>> 2;
       break;
      }
     } else b[A + (p << 1) >> 1] = b[A + (p + 1 << 1) >> 1] | 0; while (0);
    } while ((s | 0) != 10);
    u = u + 1 | 0;
   } while ((u | 0) != 10);
   v = w + -1 | 0;
   v = (v | 0) < 0 ? 0 : v;
   u = w + 16 | 0;
   t = c[a >> 2] | 0;
   n = t + -1 | 0;
   u = (n | 0) < (u | 0) ? n : u;
   n = x + -1 | 0;
   n = (n | 0) < 0 ? 0 : n;
   s = x + 16 | 0;
   h = (c[y >> 2] | 0) + -1 | 0;
   s = (h | 0) < (s | 0) ? h : s;
   if ((n | 0) <= (s | 0)) {
    r = g << 3;
    p = c[z >> 2] | 0;
    q = (v | 0) > (u | 0);
    o = 11 - (f << 3) | 0;
    while (1) {
     j = ((n << 1 & 2) * 10 | 0) + -10 | 0;
     k = _(t, n) | 0;
     if (!q) {
      l = o + ((((n & -2 | 0) / 2 | 0) - r | 0) * 10 | 0) | 0;
      m = v;
      while (1) {
       h = l + ((m & -2 | 0) / 2 | 0) | 0;
       D = (m << 1 & 2) + -1 + h | 0;
       b[p + (m + k << 1) >> 1] = ((e[A + (D + j << 1) >> 1] | 0) + ((e[A + (h << 1) >> 1] | 0) * 9 | 0) + (((e[A + (D << 1) >> 1] | 0) + (e[A + (h + j << 1) >> 1] | 0) | 0) * 3 | 0) | 0) >>> 4;
       if ((m | 0) < (u | 0)) m = m + 1 | 0; else break;
      }
     }
     if ((n | 0) < (s | 0)) n = n + 1 | 0; else break;
    }
   }
   i = E;
   return;
  }
 default:
  {}
 }
 if ((j | 0) == 2 ? (c[a + 12 >> 2] | 0) == 1 : 0) {
  D = f << 3;
  A = g << 3;
  B = a + 4 | 0;
  C = a + 40 | 0;
  j = c[a >> 2] | 0;
  g = (D | 0) < (j | 0);
  k = 1 + D | 0;
  l = (k | 0) < (j | 0);
  m = 2 + D | 0;
  n = (m | 0) < (j | 0);
  o = 3 + D | 0;
  p = (o | 0) < (j | 0);
  q = 4 + D | 0;
  r = (q | 0) < (j | 0);
  s = 5 + D | 0;
  t = (s | 0) < (j | 0);
  u = 6 + D | 0;
  v = (u | 0) < (j | 0);
  w = 7 + D | 0;
  x = (w | 0) < (j | 0);
  f = 0;
  do {
   y = f + A | 0;
   z = f << 3;
   a = _(j, y) | 0;
   if (g ? (y | 0) < (c[B >> 2] | 0) : 0) b[(c[C >> 2] | 0) + (a + D << 1) >> 1] = (d[h + z >> 0] | 0) << 4;
   if (l ? (y | 0) < (c[B >> 2] | 0) : 0) b[(c[C >> 2] | 0) + (a + k << 1) >> 1] = (d[h + (1 + z) >> 0] | 0) << 4;
   if (n ? (y | 0) < (c[B >> 2] | 0) : 0) b[(c[C >> 2] | 0) + (a + m << 1) >> 1] = (d[h + (2 + z) >> 0] | 0) << 4;
   if (p ? (y | 0) < (c[B >> 2] | 0) : 0) b[(c[C >> 2] | 0) + (a + o << 1) >> 1] = (d[h + (3 + z) >> 0] | 0) << 4;
   if (r ? (y | 0) < (c[B >> 2] | 0) : 0) b[(c[C >> 2] | 0) + (a + q << 1) >> 1] = (d[h + (4 + z) >> 0] | 0) << 4;
   if (t ? (y | 0) < (c[B >> 2] | 0) : 0) b[(c[C >> 2] | 0) + (a + s << 1) >> 1] = (d[h + (5 + z) >> 0] | 0) << 4;
   if (v ? (y | 0) < (c[B >> 2] | 0) : 0) b[(c[C >> 2] | 0) + (a + u << 1) >> 1] = (d[h + (6 + z) >> 0] | 0) << 4;
   if (x ? (y | 0) < (c[B >> 2] | 0) : 0) b[(c[C >> 2] | 0) + (a + w << 1) >> 1] = (d[h + (7 + z) >> 0] | 0) << 4;
   f = f + 1 | 0;
  } while ((f | 0) != 8);
  i = E;
  return;
 }
 h = c[a + 12 >> 2] | 0;
 c[l >> 2] = k;
 E = l + 4 | 0;
 c[E >> 2] = h;
 Df(34820, l) | 0;
 bb(1);
}

function nc(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var j = 0, k = 0.0, l = 0, m = 0.0, n = 0, o = 0, p = 0.0, q = 0.0, r = 0, s = 0, t = 0.0, u = 0;
 u = i;
 i = i + 128 | 0;
 s = u + 96 | 0;
 r = u;
 c[s >> 2] = 0;
 c[s + 4 >> 2] = 0;
 c[s + 8 >> 2] = 0;
 c[s + 12 >> 2] = 0;
 c[s + 16 >> 2] = 0;
 c[s + 20 >> 2] = 0;
 j = r;
 l = j + 96 | 0;
 do {
  c[j >> 2] = 0;
  j = j + 4 | 0;
 } while ((j | 0) < (l | 0));
 o = 0;
 do {
  k = +h[b + (o << 3) >> 3] - +h[d + (o << 3) >> 3];
  n = o >>> 6;
  l = s + (n << 3) | 0;
  h[l >> 3] = +h[l >> 3] + k * .015625;
  l = o & 7;
  j = o >>> 3 & 7;
  j = (j | 0) == 0 ? 1 : (j | 0) == 7 ? 3 : -1;
  l = (l | 0) == 0 ? 0 : (l | 0) == 7 ? 2 : -1;
  if ((j | 0) > -1) {
   j = r + (n << 5) + (j << 3) | 0;
   h[j >> 3] = k * .125 + +h[j >> 3];
  }
  if ((l | 0) > -1) {
   n = r + (n << 5) + (l << 3) | 0;
   h[n >> 3] = k * .125 + +h[n >> 3];
  }
  o = o + 1 | 0;
 } while ((o | 0) != 192);
 Pc(+h[s >> 3], +h[s + 8 >> 3], +h[s + 16 >> 3], 0.0, 0.0, 0.0, 5.28270670524, e);
 Pc(+h[r >> 3], +h[r + 32 >> 3], +h[r + 64 >> 3], 0.0, 0.0, 0.0, 5.28270670524, g);
 Pc(+h[r + 8 >> 3], +h[r + 40 >> 3], +h[r + 72 >> 3], 0.0, 0.0, 0.0, 5.28270670524, g);
 Pc(+h[r + 16 >> 3], +h[r + 48 >> 3], +h[r + 80 >> 3], 0.0, 0.0, 0.0, 5.28270670524, g);
 Pc(+h[r + 24 >> 3], +h[r + 56 >> 3], +h[r + 88 >> 3], 0.0, 0.0, 0.0, 5.28270670524, g);
 j = 0;
 do {
  e = b + (j << 3) | 0;
  q = +h[e >> 3];
  g = d + (j << 3) | 0;
  t = +h[g >> 3];
  h[e >> 3] = (q + t) * .5;
  h[g >> 3] = (q - t) * .5;
  j = j + 1 | 0;
 } while ((j | 0) != 192);
 Rc(b + 512 | 0);
 Rc(d);
 Rc(d + 512 | 0);
 Rc(d + 1024 | 0);
 l = f + 16 | 0;
 n = f + 8 | 0;
 o = 4;
 while (1) {
  t = +h[26064 + (o << 3) >> 3];
  h[f >> 3] = +h[f >> 3] + t * 64.8 * +h[d + (o << 3) >> 3];
  h[l >> 3] = +h[l >> 3] + t * 2.4 * +h[d + (o + 128 << 3) >> 3];
  e = o + 64 | 0;
  g = b + (e << 3) | 0;
  h[g >> 3] = +O(+(+h[g >> 3]));
  e = d + (e << 3) | 0;
  q = +O(+(+h[e >> 3]));
  h[e >> 3] = q;
  m = +h[g >> 3];
  k = m - q;
  m = q + m;
  do if (!(k >= -.04 & k < .04)) if (k < 0.0) {
   k = k + .04;
   break;
  } else {
   k = k + -.04;
   break;
  } else k = 0.0; while (0);
  do if (!(m >= -.04 & m < .04)) if (m < 0.0) {
   q = m + .04;
   break;
  } else {
   q = m + -.04;
   break;
  } else q = 0.0; while (0);
  if (k != q) {
   if ((a[696] | 0) == 0 ? (ya(696) | 0) != 0 : 0) {
    h[66] = 0.0;
    h[67] = 1.4103373714040413;
    h[68] = 2.1187462581064413;
    h[69] = 2.8271551448088412;
    h[70] = 3.535564031511241;
    h[71] = 4.243972918213641;
    h[72] = 4.952381804916041;
    h[73] = 5.660790691618441;
    h[74] = 6.369199578320841;
    h[75] = 7.077608465023241;
    h[76] = 7.786017351725641;
    h[77] = 8.49442623842804;
    h[78] = 9.202835125130441;
    h[79] = 9.911244011832842;
    h[80] = 10.619652898535243;
    h[81] = 11.328061785237644;
    h[82] = 12.036470671940044;
    h[83] = 12.744879558642445;
    h[84] = 13.453288445344846;
    h[85] = 14.161697332047247;
    h[86] = 14.870106218749648;
    Da(696);
   }
   m = k * 1.51983458269;
   k = +N(+m);
   if (!(k < 1.0e4)) {
    j = 23;
    break;
   }
   j = ~~k;
   if ((j | 0) < 20) {
    p = +h[528 + (j << 3) >> 3];
    k = p + (k - +(j | 0)) * (+h[528 + (j + 1 << 3) >> 3] - p);
   } else k = +h[86];
   p = m < 0.0 ? -k : k;
   if ((a[696] | 0) == 0 ? (ya(696) | 0) != 0 : 0) {
    h[66] = 0.0;
    h[67] = 1.4103373714040413;
    h[68] = 2.1187462581064413;
    h[69] = 2.8271551448088412;
    h[70] = 3.535564031511241;
    h[71] = 4.243972918213641;
    h[72] = 4.952381804916041;
    h[73] = 5.660790691618441;
    h[74] = 6.369199578320841;
    h[75] = 7.077608465023241;
    h[76] = 7.786017351725641;
    h[77] = 8.49442623842804;
    h[78] = 9.202835125130441;
    h[79] = 9.911244011832842;
    h[80] = 10.619652898535243;
    h[81] = 11.328061785237644;
    h[82] = 12.036470671940044;
    h[83] = 12.744879558642445;
    h[84] = 13.453288445344846;
    h[85] = 14.161697332047247;
    h[86] = 14.870106218749648;
    Da(696);
   }
   m = q * 1.51983458269;
   k = +N(+m);
   if (!(k < 1.0e4)) {
    j = 31;
    break;
   }
   j = ~~k;
   if ((j | 0) < 20) {
    q = +h[528 + (j << 3) >> 3];
    k = q + (k - +(j | 0)) * (+h[528 + (j + 1 << 3) >> 3] - q);
   } else k = +h[86];
   q = (p - (m < 0.0 ? -k : k)) * 1.753123908348329;
   h[n >> 3] = +h[n >> 3] + q * (t * q);
  }
  o = o + 1 | 0;
  if (o >>> 0 >= 37) {
   j = 37;
   break;
  }
 }
 if ((j | 0) == 23) Aa(40408, 36021, 303, 40419); else if ((j | 0) == 31) Aa(40408, 36021, 303, 40419); else if ((j | 0) == 37) {
  i = u;
  return;
 }
}

function pc(a, b, d, e, f, h, j, l) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = +e;
 f = f | 0;
 h = h | 0;
 j = j | 0;
 l = l | 0;
 var m = 0, n = 0.0, o = 0.0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0.0, J = 0.0, K = 0.0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0.0, U = 0, V = 0, W = 0, X = 0, Y = 0;
 Y = i;
 i = i + 32 | 0;
 m = Y + 12 | 0;
 P = Y + 8 | 0;
 X = Y + 4 | 0;
 U = Y;
 T = +g[a + 12 >> 2] * e;
 M = f << 3;
 N = h << 3;
 O = a + 4 | 0;
 S = (M + -1 + (c[O >> 2] | 0) | 0) / (M | 0) | 0;
 L = a + 8 | 0;
 Q = (N + -1 + (c[L >> 2] | 0) | 0) / (N | 0) | 0;
 a = _(Q, S) | 0;
 c[m >> 2] = 0;
 R = m + 4 | 0;
 c[R >> 2] = 0;
 c[m + 8 >> 2] = 0;
 do if (a) if (a >>> 0 > 1073741823) we(m); else {
  H = a << 2;
  W = ye(H) | 0;
  c[m >> 2] = W;
  V = W + (a << 2) | 0;
  c[m + 8 >> 2] = V;
  pg(W | 0, 0, H | 0) | 0;
  c[R >> 2] = V;
  break;
 } else {
  V = 0;
  W = 0;
 } while (0);
 G = (Q | 0) > 0;
 if (G) {
  H = (S | 0) > 0;
  E = f << 3;
  F = ~E;
  D = h << 3;
  B = c[j >> 2] | 0;
  m = 0;
  C = ~D;
  while (1) {
   if (H) {
    A = _(m, S) | 0;
    a = m + 1 | 0;
    u = _(a, N) | 0;
    v = c[L >> 2] | 0;
    t = _(m, N) | 0;
    u = (t | 0) < (((u | 0) < (v | 0) ? u : v) | 0);
    v = ~v;
    v = ~((C | 0) > (v | 0) ? C : v);
    s = c[O >> 2] | 0;
    w = ~s;
    y = 0;
    z = F;
    while (1) {
     x = y + A | 0;
     m = y;
     y = y + 1 | 0;
     f = _(y, M) | 0;
     c[P >> 2] = 0;
     if (u) {
      r = _(m, M) | 0;
      j = (r | 0) < (((f | 0) < (s | 0) ? f : s) | 0);
      p = ~((z | 0) > (w | 0) ? z : w);
      m = 0;
      e = 0.0;
      q = t;
      do {
       if (j) {
        h = _(s, q) | 0;
        f = r;
        do {
         m = B + (h + f << 2) | 0;
         m = c[(e < +g[m >> 2] ? m : P) >> 2] | 0;
         c[P >> 2] = m;
         f = f + 1 | 0;
         e = (c[k >> 2] = m, +g[k >> 2]);
        } while ((f | 0) != (p | 0));
       }
       q = q + 1 | 0;
      } while ((q | 0) != (v | 0));
     } else m = 0;
     c[W + (x << 2) >> 2] = m;
     if ((y | 0) == (S | 0)) break; else z = z - E | 0;
    }
   } else a = m + 1 | 0;
   if ((a | 0) == (Q | 0)) break; else {
    m = a;
    C = C - D | 0;
   }
  }
  if (G) {
   G = (S | 0) > 0;
   K = T;
   H = d + 1 | 0;
   r = (b | 0) > 0;
   I = T * 1.1;
   J = T * .5;
   s = -2 - d | 0;
   t = ~S;
   u = ~Q;
   D = 0;
   F = s;
   while (1) {
    v = ~((F | 0) > (u | 0) ? F : u);
    if (G) {
     w = _(D, S) | 0;
     x = D - d | 0;
     x = (x | 0) > 0 ? x : 0;
     y = H + D | 0;
     y = (x | 0) < (((y | 0) < (Q | 0) ? y : Q) | 0);
     q = y ^ 1;
     B = 0;
     E = s;
     while (1) {
      z = ~((E | 0) > (t | 0) ? E : t);
      j = B + w | 0;
      g[X >> 2] = K;
      A = B - d | 0;
      A = (A | 0) > 0 ? A : 0;
      C = B;
      B = B + 1 | 0;
      p = B + d | 0;
      p = (p | 0) < (S | 0) ? p : S;
      if (y) {
       f = (A | 0) < (p | 0);
       o = K;
       n = K;
       e = K;
       h = x;
       do {
        if (f) {
         m = _(h, S) | 0;
         a = A;
         do {
          b = W + (a + m << 2) | 0;
          b = c[(e < +g[b >> 2] ? b : X) >> 2] | 0;
          c[X >> 2] = b;
          a = a + 1 | 0;
          e = (c[k >> 2] = b, +g[k >> 2]);
         } while ((a | 0) != (z | 0));
         o = e;
         n = e;
        }
        h = h + 1 | 0;
       } while ((h | 0) != (v | 0));
      } else {
       o = K;
       n = K;
      }
      e = +g[W + (j << 2) >> 2];
      if (r) {
       if (!(!(e <= T) | !(o <= I))) g[(c[l >> 2] | 0) + (j << 2) >> 2] = 1.0;
      } else if (!(e <= J + n * .5 | q)) {
       a = (A | 0) < (p | 0);
       p = x;
       do {
        if (a) {
         m = p - D | 0;
         m = (m | 0) > -1 ? m : 0 - m | 0;
         f = _(p, S) | 0;
         h = c[l >> 2] | 0;
         j = A;
         do {
          P = j - C | 0;
          P = (P | 0) > -1 ? P : 0 - P | 0;
          b = h + (j + f << 2) | 0;
          o = 1.0 / (+(((m | 0) < (P | 0) ? P : m) | 0) + 1.0);
          g[U >> 2] = o;
          c[b >> 2] = c[(+g[b >> 2] < o ? U : b) >> 2];
          j = j + 1 | 0;
         } while ((j | 0) != (z | 0));
        }
        p = p + 1 | 0;
       } while ((p | 0) != (v | 0));
      }
      if ((B | 0) == (S | 0)) break; else E = E + -1 | 0;
     }
    }
    D = D + 1 | 0;
    if ((D | 0) == (Q | 0)) break; else F = F + -1 | 0;
   }
  }
 }
 if (!W) {
  i = Y;
  return;
 }
 if ((V | 0) != (W | 0)) c[R >> 2] = V + (~((V + -4 - W | 0) >>> 2) << 2);
 Ae(W);
 i = Y;
 return;
}

function Gd(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0;
 i = b + 24 | 0;
 g = (c[i >> 2] | 0) - d | 0;
 c[i >> 2] = g;
 e = qg(e | 0, f | 0, g | 0) | 0;
 h = b + 16 | 0;
 f = h;
 e = e | c[f >> 2];
 f = C | c[f + 4 >> 2];
 d = h;
 c[d >> 2] = e;
 c[d + 4 >> 2] = f;
 if ((g | 0) >= 17) return;
 j = (e | 65535) ^ -65536;
 g = ~f;
 d = rg(j | 0, g | 0, -16843009, -16843010) | 0;
 do if (((j & -2139095040 ^ -2139095040) & d | 0) == 0 & ((g & -2139062144 ^ -2139062144) & C | 0) == 0) {
  d = b + 8 | 0;
  g = c[d >> 2] | 0;
  if ((g + 6 | 0) >>> 0 < (c[b >> 2] | 0) >>> 0) {
   f = sg(e | 0, f | 0, 56) | 0;
   j = b + 4 | 0;
   a[(c[j >> 2] | 0) + g >> 0] = f;
   b = h;
   b = sg(c[b >> 2] | 0, c[b + 4 >> 2] | 0, 48) | 0;
   a[(c[j >> 2] | 0) + ((c[d >> 2] | 0) + 1) >> 0] = b;
   b = h;
   b = sg(c[b >> 2] | 0, c[b + 4 >> 2] | 0, 40) | 0;
   a[(c[j >> 2] | 0) + ((c[d >> 2] | 0) + 2) >> 0] = b;
   a[(c[j >> 2] | 0) + ((c[d >> 2] | 0) + 3) >> 0] = c[h + 4 >> 2];
   b = h;
   b = sg(c[b >> 2] | 0, c[b + 4 >> 2] | 0, 24) | 0;
   a[(c[j >> 2] | 0) + ((c[d >> 2] | 0) + 4) >> 0] = b;
   b = h;
   b = sg(c[b >> 2] | 0, c[b + 4 >> 2] | 0, 16) | 0;
   a[(c[j >> 2] | 0) + ((c[d >> 2] | 0) + 5) >> 0] = b;
   c[d >> 2] = (c[d >> 2] | 0) + 6;
   break;
  } else {
   a[b + 28 >> 0] = 1;
   break;
  }
 } else {
  e = sg(e | 0, f | 0, 56) | 0;
  d = b + 8 | 0;
  f = c[d >> 2] | 0;
  if (f >>> 0 < (c[b >> 2] | 0) >>> 0) {
   c[d >> 2] = f + 1;
   a[(c[b + 4 >> 2] | 0) + f >> 0] = e;
  } else a[b + 28 >> 0] = 1;
  do if ((e | 0) == 255 & (C | 0) == 0) {
   e = c[d >> 2] | 0;
   if (e >>> 0 < (c[b >> 2] | 0) >>> 0) {
    c[d >> 2] = e + 1;
    a[(c[b + 4 >> 2] | 0) + e >> 0] = 0;
    break;
   } else {
    a[b + 28 >> 0] = 1;
    break;
   }
  } while (0);
  e = h;
  e = sg(c[e >> 2] | 0, c[e + 4 >> 2] | 0, 48) | 0;
  f = c[d >> 2] | 0;
  if (f >>> 0 < (c[b >> 2] | 0) >>> 0) {
   c[d >> 2] = f + 1;
   a[(c[b + 4 >> 2] | 0) + f >> 0] = e;
  } else a[b + 28 >> 0] = 1;
  do if ((e & 255 | 0) == 255 & 0 == 0) {
   e = c[d >> 2] | 0;
   if (e >>> 0 < (c[b >> 2] | 0) >>> 0) {
    c[d >> 2] = e + 1;
    a[(c[b + 4 >> 2] | 0) + e >> 0] = 0;
    break;
   } else {
    a[b + 28 >> 0] = 1;
    break;
   }
  } while (0);
  e = h;
  e = sg(c[e >> 2] | 0, c[e + 4 >> 2] | 0, 40) | 0;
  f = c[d >> 2] | 0;
  if (f >>> 0 < (c[b >> 2] | 0) >>> 0) {
   c[d >> 2] = f + 1;
   a[(c[b + 4 >> 2] | 0) + f >> 0] = e;
  } else a[b + 28 >> 0] = 1;
  do if ((e & 255 | 0) == 255 & 0 == 0) {
   e = c[d >> 2] | 0;
   if (e >>> 0 < (c[b >> 2] | 0) >>> 0) {
    c[d >> 2] = e + 1;
    a[(c[b + 4 >> 2] | 0) + e >> 0] = 0;
    break;
   } else {
    a[b + 28 >> 0] = 1;
    break;
   }
  } while (0);
  e = c[h + 4 >> 2] | 0;
  f = c[d >> 2] | 0;
  if (f >>> 0 < (c[b >> 2] | 0) >>> 0) {
   c[d >> 2] = f + 1;
   a[(c[b + 4 >> 2] | 0) + f >> 0] = e;
  } else a[b + 28 >> 0] = 1;
  do if ((e & 255 | 0) == 255 & 0 == 0) {
   e = c[d >> 2] | 0;
   if (e >>> 0 < (c[b >> 2] | 0) >>> 0) {
    c[d >> 2] = e + 1;
    a[(c[b + 4 >> 2] | 0) + e >> 0] = 0;
    break;
   } else {
    a[b + 28 >> 0] = 1;
    break;
   }
  } while (0);
  e = h;
  e = sg(c[e >> 2] | 0, c[e + 4 >> 2] | 0, 24) | 0;
  f = c[d >> 2] | 0;
  if (f >>> 0 < (c[b >> 2] | 0) >>> 0) {
   c[d >> 2] = f + 1;
   a[(c[b + 4 >> 2] | 0) + f >> 0] = e;
  } else a[b + 28 >> 0] = 1;
  do if ((e & 255 | 0) == 255 & 0 == 0) {
   e = c[d >> 2] | 0;
   if (e >>> 0 < (c[b >> 2] | 0) >>> 0) {
    c[d >> 2] = e + 1;
    a[(c[b + 4 >> 2] | 0) + e >> 0] = 0;
    break;
   } else {
    a[b + 28 >> 0] = 1;
    break;
   }
  } while (0);
  e = h;
  e = sg(c[e >> 2] | 0, c[e + 4 >> 2] | 0, 16) | 0;
  f = c[d >> 2] | 0;
  if (f >>> 0 < (c[b >> 2] | 0) >>> 0) {
   c[d >> 2] = f + 1;
   a[(c[b + 4 >> 2] | 0) + f >> 0] = e;
  } else a[b + 28 >> 0] = 1;
  if ((e & 255 | 0) == 255 & 0 == 0) {
   e = c[d >> 2] | 0;
   if (e >>> 0 < (c[b >> 2] | 0) >>> 0) {
    c[d >> 2] = e + 1;
    a[(c[b + 4 >> 2] | 0) + e >> 0] = 0;
    break;
   } else {
    a[b + 28 >> 0] = 1;
    break;
   }
  }
 } while (0);
 b = h;
 b = qg(c[b >> 2] | 0, c[b + 4 >> 2] | 0, 48) | 0;
 j = h;
 c[j >> 2] = b;
 c[j + 4 >> 2] = C;
 c[i >> 2] = (c[i >> 2] | 0) + 48;
 return;
}

function Xd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0.0, h = 0.0, i = 0, j = 0, k = 0, l = 0, m = 0.0, n = 0, o = 0;
 switch (b - a >> 3 | 0) {
 case 2:
  {
   d = b + -4 | 0;
   f = +g[d >> 2];
   e = a + 4 | 0;
   h = +g[e >> 2];
   if (!(f < h)) {
    a = 1;
    return a | 0;
   }
   b = b + -8 | 0;
   o = c[a >> 2] | 0;
   c[a >> 2] = c[b >> 2];
   c[b >> 2] = o;
   g[e >> 2] = f;
   g[d >> 2] = h;
   a = 1;
   return a | 0;
  }
 case 3:
  {
   k = a + 8 | 0;
   i = b + -8 | 0;
   l = a + 12 | 0;
   h = +g[l >> 2];
   j = a + 4 | 0;
   m = +g[j >> 2];
   e = b + -4 | 0;
   f = +g[e >> 2];
   d = f < h;
   if (!(h < m)) {
    if (!d) {
     a = 1;
     return a | 0;
    }
    b = c[k >> 2] | 0;
    c[k >> 2] = c[i >> 2];
    c[i >> 2] = b;
    g[l >> 2] = f;
    g[e >> 2] = h;
    h = +g[l >> 2];
    f = +g[j >> 2];
    if (!(h < f)) {
     a = 1;
     return a | 0;
    }
    b = c[a >> 2] | 0;
    c[a >> 2] = c[k >> 2];
    c[k >> 2] = b;
    g[j >> 2] = h;
    g[l >> 2] = f;
    a = 1;
    return a | 0;
   }
   if (d) {
    b = c[a >> 2] | 0;
    c[a >> 2] = c[i >> 2];
    c[i >> 2] = b;
    g[j >> 2] = f;
    g[e >> 2] = m;
    a = 1;
    return a | 0;
   }
   d = c[a >> 2] | 0;
   c[a >> 2] = c[k >> 2];
   c[k >> 2] = d;
   g[j >> 2] = h;
   g[l >> 2] = m;
   f = +g[e >> 2];
   if (!(f < m)) {
    a = 1;
    return a | 0;
   }
   c[k >> 2] = c[i >> 2];
   c[i >> 2] = d;
   g[l >> 2] = f;
   g[e >> 2] = m;
   a = 1;
   return a | 0;
  }
 case 4:
  {
   Wd(a, a + 8 | 0, a + 16 | 0, b + -8 | 0) | 0;
   a = 1;
   return a | 0;
  }
 case 5:
  {
   l = a + 8 | 0;
   k = a + 16 | 0;
   e = a + 24 | 0;
   Wd(a, l, k, e) | 0;
   d = b + -4 | 0;
   h = +g[d >> 2];
   j = a + 28 | 0;
   f = +g[j >> 2];
   if (!(h < f)) {
    a = 1;
    return a | 0;
   }
   b = b + -8 | 0;
   o = c[e >> 2] | 0;
   c[e >> 2] = c[b >> 2];
   c[b >> 2] = o;
   g[j >> 2] = h;
   g[d >> 2] = f;
   h = +g[j >> 2];
   d = a + 20 | 0;
   f = +g[d >> 2];
   if (!(h < f)) {
    a = 1;
    return a | 0;
   }
   b = c[k >> 2] | 0;
   i = c[e >> 2] | 0;
   c[k >> 2] = i;
   c[e >> 2] = b;
   g[d >> 2] = h;
   g[j >> 2] = f;
   e = a + 12 | 0;
   f = +g[e >> 2];
   if (!(h < f)) {
    a = 1;
    return a | 0;
   }
   b = c[l >> 2] | 0;
   c[l >> 2] = i;
   c[k >> 2] = b;
   g[e >> 2] = h;
   g[d >> 2] = f;
   d = a + 4 | 0;
   f = +g[d >> 2];
   if (!(h < f)) {
    a = 1;
    return a | 0;
   }
   b = c[a >> 2] | 0;
   c[a >> 2] = i;
   c[l >> 2] = b;
   g[d >> 2] = h;
   g[e >> 2] = f;
   a = 1;
   return a | 0;
  }
 case 1:
 case 0:
  {
   a = 1;
   return a | 0;
  }
 default:
  {
   i = a + 16 | 0;
   j = a + 8 | 0;
   l = a + 12 | 0;
   h = +g[l >> 2];
   k = a + 4 | 0;
   f = +g[k >> 2];
   n = a + 20 | 0;
   m = +g[n >> 2];
   d = m < h;
   do if (h < f) {
    if (d) {
     l = c[a >> 2] | 0;
     c[a >> 2] = c[i >> 2];
     c[i >> 2] = l;
     g[k >> 2] = m;
     g[n >> 2] = f;
     break;
    }
    d = c[a >> 2] | 0;
    c[a >> 2] = c[j >> 2];
    c[j >> 2] = d;
    g[k >> 2] = h;
    g[l >> 2] = f;
    if (m < f) {
     c[j >> 2] = c[i >> 2];
     c[i >> 2] = d;
     g[l >> 2] = m;
     g[n >> 2] = f;
    }
   } else if (d ? (d = c[j >> 2] | 0, e = c[i >> 2] | 0, c[j >> 2] = e, c[i >> 2] = d, g[l >> 2] = m, g[n >> 2] = h, m < f) : 0) {
    n = c[a >> 2] | 0;
    c[a >> 2] = e;
    c[j >> 2] = n;
    g[k >> 2] = m;
    g[l >> 2] = f;
   } while (0);
   d = a + 24 | 0;
   if ((d | 0) == (b | 0)) {
    a = 1;
    return a | 0;
   } else e = 0;
   while (1) {
    f = +g[d + 4 >> 2];
    if (f < +g[i + 4 >> 2]) {
     l = c[d >> 2] | 0;
     k = d;
     j = i;
     while (1) {
      c[k >> 2] = c[j >> 2];
      i = j + 4 | 0;
      c[k + 4 >> 2] = c[i >> 2];
      if ((j | 0) == (a | 0)) break;
      if (f < +g[j + -4 >> 2]) {
       k = j;
       j = j + -8 | 0;
      } else break;
     }
     c[j >> 2] = l;
     g[i >> 2] = f;
     e = e + 1 | 0;
     if ((e | 0) == 8) break;
    }
    i = d + 8 | 0;
    if ((i | 0) == (b | 0)) {
     d = 1;
     o = 34;
     break;
    } else {
     n = d;
     d = i;
     i = n;
    }
   }
   if ((o | 0) == 34) return d | 0;
   a = (d + 8 | 0) == (b | 0);
   return a | 0;
  }
 }
 return 0;
}

function $d(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0.0, h = 0.0, i = 0, j = 0, k = 0, l = 0, m = 0.0, n = 0, o = 0;
 switch (b - a >> 3 | 0) {
 case 2:
  {
   d = b + -4 | 0;
   f = +g[d >> 2];
   e = a + 4 | 0;
   h = +g[e >> 2];
   if (!(f < h)) {
    a = 1;
    return a | 0;
   }
   b = b + -8 | 0;
   o = c[a >> 2] | 0;
   c[a >> 2] = c[b >> 2];
   c[b >> 2] = o;
   g[e >> 2] = f;
   g[d >> 2] = h;
   a = 1;
   return a | 0;
  }
 case 3:
  {
   k = a + 8 | 0;
   i = b + -8 | 0;
   l = a + 12 | 0;
   h = +g[l >> 2];
   j = a + 4 | 0;
   m = +g[j >> 2];
   e = b + -4 | 0;
   f = +g[e >> 2];
   d = f < h;
   if (!(h < m)) {
    if (!d) {
     a = 1;
     return a | 0;
    }
    b = c[k >> 2] | 0;
    c[k >> 2] = c[i >> 2];
    c[i >> 2] = b;
    g[l >> 2] = f;
    g[e >> 2] = h;
    h = +g[l >> 2];
    f = +g[j >> 2];
    if (!(h < f)) {
     a = 1;
     return a | 0;
    }
    b = c[a >> 2] | 0;
    c[a >> 2] = c[k >> 2];
    c[k >> 2] = b;
    g[j >> 2] = h;
    g[l >> 2] = f;
    a = 1;
    return a | 0;
   }
   if (d) {
    b = c[a >> 2] | 0;
    c[a >> 2] = c[i >> 2];
    c[i >> 2] = b;
    g[j >> 2] = f;
    g[e >> 2] = m;
    a = 1;
    return a | 0;
   }
   d = c[a >> 2] | 0;
   c[a >> 2] = c[k >> 2];
   c[k >> 2] = d;
   g[j >> 2] = h;
   g[l >> 2] = m;
   f = +g[e >> 2];
   if (!(f < m)) {
    a = 1;
    return a | 0;
   }
   c[k >> 2] = c[i >> 2];
   c[i >> 2] = d;
   g[l >> 2] = f;
   g[e >> 2] = m;
   a = 1;
   return a | 0;
  }
 case 4:
  {
   _d(a, a + 8 | 0, a + 16 | 0, b + -8 | 0) | 0;
   a = 1;
   return a | 0;
  }
 case 5:
  {
   l = a + 8 | 0;
   k = a + 16 | 0;
   e = a + 24 | 0;
   _d(a, l, k, e) | 0;
   d = b + -4 | 0;
   h = +g[d >> 2];
   j = a + 28 | 0;
   f = +g[j >> 2];
   if (!(h < f)) {
    a = 1;
    return a | 0;
   }
   b = b + -8 | 0;
   o = c[e >> 2] | 0;
   c[e >> 2] = c[b >> 2];
   c[b >> 2] = o;
   g[j >> 2] = h;
   g[d >> 2] = f;
   h = +g[j >> 2];
   d = a + 20 | 0;
   f = +g[d >> 2];
   if (!(h < f)) {
    a = 1;
    return a | 0;
   }
   b = c[k >> 2] | 0;
   i = c[e >> 2] | 0;
   c[k >> 2] = i;
   c[e >> 2] = b;
   g[d >> 2] = h;
   g[j >> 2] = f;
   e = a + 12 | 0;
   f = +g[e >> 2];
   if (!(h < f)) {
    a = 1;
    return a | 0;
   }
   b = c[l >> 2] | 0;
   c[l >> 2] = i;
   c[k >> 2] = b;
   g[e >> 2] = h;
   g[d >> 2] = f;
   d = a + 4 | 0;
   f = +g[d >> 2];
   if (!(h < f)) {
    a = 1;
    return a | 0;
   }
   b = c[a >> 2] | 0;
   c[a >> 2] = i;
   c[l >> 2] = b;
   g[d >> 2] = h;
   g[e >> 2] = f;
   a = 1;
   return a | 0;
  }
 case 1:
 case 0:
  {
   a = 1;
   return a | 0;
  }
 default:
  {
   i = a + 16 | 0;
   j = a + 8 | 0;
   l = a + 12 | 0;
   h = +g[l >> 2];
   k = a + 4 | 0;
   f = +g[k >> 2];
   n = a + 20 | 0;
   m = +g[n >> 2];
   d = m < h;
   do if (h < f) {
    if (d) {
     l = c[a >> 2] | 0;
     c[a >> 2] = c[i >> 2];
     c[i >> 2] = l;
     g[k >> 2] = m;
     g[n >> 2] = f;
     break;
    }
    d = c[a >> 2] | 0;
    c[a >> 2] = c[j >> 2];
    c[j >> 2] = d;
    g[k >> 2] = h;
    g[l >> 2] = f;
    if (m < f) {
     c[j >> 2] = c[i >> 2];
     c[i >> 2] = d;
     g[l >> 2] = m;
     g[n >> 2] = f;
    }
   } else if (d ? (d = c[j >> 2] | 0, e = c[i >> 2] | 0, c[j >> 2] = e, c[i >> 2] = d, g[l >> 2] = m, g[n >> 2] = h, m < f) : 0) {
    n = c[a >> 2] | 0;
    c[a >> 2] = e;
    c[j >> 2] = n;
    g[k >> 2] = m;
    g[l >> 2] = f;
   } while (0);
   d = a + 24 | 0;
   if ((d | 0) == (b | 0)) {
    a = 1;
    return a | 0;
   } else e = 0;
   while (1) {
    f = +g[d + 4 >> 2];
    if (f < +g[i + 4 >> 2]) {
     l = c[d >> 2] | 0;
     k = d;
     j = i;
     while (1) {
      c[k >> 2] = c[j >> 2];
      i = j + 4 | 0;
      c[k + 4 >> 2] = c[i >> 2];
      if ((j | 0) == (a | 0)) break;
      if (f < +g[j + -4 >> 2]) {
       k = j;
       j = j + -8 | 0;
      } else break;
     }
     c[j >> 2] = l;
     g[i >> 2] = f;
     e = e + 1 | 0;
     if ((e | 0) == 8) break;
    }
    i = d + 8 | 0;
    if ((i | 0) == (b | 0)) {
     d = 1;
     o = 34;
     break;
    } else {
     n = d;
     d = i;
     i = n;
    }
   }
   if ((o | 0) == 34) return d | 0;
   a = (d + 8 | 0) == (b | 0);
   return a | 0;
  }
 }
 return 0;
}

function lc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0.0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0.0, B = 0.0;
 x = i;
 i = i + 3200 | 0;
 f = x + 3180 | 0;
 v = x + 3168 | 0;
 u = x + 3156 | 0;
 s = x + 3144 | 0;
 n = x + 1608 | 0;
 o = x + 72 | 0;
 q = x + 48 | 0;
 p = x + 24 | 0;
 r = x;
 k = d << 3;
 l = e << 3;
 m = a + 4 | 0;
 j = (_(((c[m >> 2] | 0) + 7 | 0) / 8 | 0, e) | 0) + d | 0;
 j = (c[a + 40 >> 2] | 0) + (j * 12 | 0) | 0;
 c[v >> 2] = 0;
 e = v + 4 | 0;
 c[e >> 2] = 0;
 c[v + 8 >> 2] = 0;
 d = ye(256) | 0;
 c[v >> 2] = d;
 y = d + 256 | 0;
 c[v + 8 >> 2] = y;
 pg(d | 0, 0, 256) | 0;
 c[e >> 2] = y;
 c[f >> 2] = 0;
 y = f + 4 | 0;
 c[y >> 2] = 0;
 c[f + 8 >> 2] = 0;
 w = ye(36) | 0;
 c[y >> 2] = w;
 c[f >> 2] = w;
 c[f + 8 >> 2] = w + 36;
 ed(w, v);
 z = w + 12 | 0;
 c[y >> 2] = z;
 ed(z, v);
 z = w + 24 | 0;
 c[y >> 2] = z;
 ed(z, v);
 v = w + 36 | 0;
 c[y >> 2] = v;
 c[e >> 2] = d;
 Ae(d);
 cc(b, k, l, 8, 8, f);
 fc(8, 8, f);
 Hb(u, j);
 Hb(s, f);
 mc(8, 8, j, f, u, s);
 f = c[u >> 2] | 0;
 j = c[s >> 2] | 0;
 d = c[f >> 2] | 0;
 e = c[j >> 2] | 0;
 b = 0;
 do {
  h[n + (b << 3) >> 3] = +g[d + (b << 2) >> 2];
  h[o + (b << 3) >> 3] = +g[e + (b << 2) >> 2];
  b = b + 1 | 0;
 } while ((b | 0) != 64);
 d = c[f + 12 >> 2] | 0;
 e = c[j + 12 >> 2] | 0;
 b = 0;
 do {
  z = b + 64 | 0;
  h[n + (z << 3) >> 3] = +g[d + (b << 2) >> 2];
  h[o + (z << 3) >> 3] = +g[e + (b << 2) >> 2];
  b = b + 1 | 0;
 } while ((b | 0) != 64);
 b = c[f + 24 >> 2] | 0;
 d = c[j + 24 >> 2] | 0;
 e = 0;
 do {
  z = e + 128 | 0;
  h[n + (z << 3) >> 3] = +g[b + (e << 2) >> 2];
  h[o + (z << 3) >> 3] = +g[d + (e << 2) >> 2];
  e = e + 1 | 0;
 } while ((e | 0) != 64);
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 0;
 c[q + 8 >> 2] = 0;
 c[q + 12 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 c[q + 20 >> 2] = 0;
 c[p >> 2] = 0;
 c[p + 4 >> 2] = 0;
 c[p + 8 >> 2] = 0;
 c[p + 12 >> 2] = 0;
 c[p + 16 >> 2] = 0;
 c[p + 20 >> 2] = 0;
 c[r >> 2] = 0;
 c[r + 4 >> 2] = 0;
 c[r + 8 >> 2] = 0;
 c[r + 12 >> 2] = 0;
 c[r + 16 >> 2] = 0;
 c[r + 20 >> 2] = 0;
 nc(n, o, q, p, r);
 z = c[a + 28 >> 2] | 0;
 d = (_(c[m >> 2] | 0, l) | 0) + k | 0;
 B = +g[(c[z >> 2] | 0) + (d << 2) >> 2];
 A = +g[(c[z + 12 >> 2] | 0) + (d << 2) >> 2];
 t = +g[(c[z + 24 >> 2] | 0) + (d << 2) >> 2];
 t = +O(+((+h[q >> 3] * B + 0.0 + B * +h[p >> 3] + +h[q + 8 >> 3] * A + A * +h[p + 8 >> 3] + +h[q + 16 >> 3] * t + t * +h[p + 16 >> 3]) * .95 + (B * +h[r >> 3] + 0.0 + A * +h[r + 8 >> 3] + t * +h[r + 16 >> 3]) * .05));
 d = c[s >> 2] | 0;
 if (d) {
  k = s + 4 | 0;
  e = c[k >> 2] | 0;
  if ((e | 0) != (d | 0)) {
   do {
    b = e + -12 | 0;
    c[k >> 2] = b;
    f = c[b >> 2] | 0;
    j = f;
    if (!f) e = b; else {
     e = e + -8 | 0;
     b = c[e >> 2] | 0;
     if ((b | 0) != (f | 0)) c[e >> 2] = b + (~((b + -4 - j | 0) >>> 2) << 2);
     Ae(f);
     e = c[k >> 2] | 0;
    }
   } while ((e | 0) != (d | 0));
   d = c[s >> 2] | 0;
  }
  Ae(d);
 }
 d = c[u >> 2] | 0;
 if (d) {
  k = u + 4 | 0;
  e = c[k >> 2] | 0;
  if ((e | 0) != (d | 0)) {
   do {
    b = e + -12 | 0;
    c[k >> 2] = b;
    f = c[b >> 2] | 0;
    j = f;
    if (!f) e = b; else {
     e = e + -8 | 0;
     b = c[e >> 2] | 0;
     if ((b | 0) != (f | 0)) c[e >> 2] = b + (~((b + -4 - j | 0) >>> 2) << 2);
     Ae(f);
     e = c[k >> 2] | 0;
    }
   } while ((e | 0) != (d | 0));
   d = c[u >> 2] | 0;
  }
  Ae(d);
 }
 k = v + -12 | 0;
 b = c[k >> 2] | 0;
 f = b;
 if (b) {
  d = v + -8 | 0;
  e = c[d >> 2] | 0;
  if ((e | 0) != (b | 0)) c[d >> 2] = e + (~((e + -4 - f | 0) >>> 2) << 2);
  Ae(b);
 }
 j = k + -12 | 0;
 b = c[j >> 2] | 0;
 f = b;
 if (b) {
  d = k + -8 | 0;
  e = c[d >> 2] | 0;
  if ((e | 0) != (b | 0)) c[d >> 2] = e + (~((e + -4 - f | 0) >>> 2) << 2);
  Ae(b);
 }
 b = c[j + -12 >> 2] | 0;
 if (!b) {
  Ae(w);
  i = x;
  return +t;
 }
 d = j + -8 | 0;
 e = c[d >> 2] | 0;
 if ((e | 0) != (b | 0)) c[d >> 2] = e + (~((e + -4 - b | 0) >>> 2) << 2);
 Ae(b);
 Ae(w);
 i = x;
 return +t;
}

function dd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 z = i;
 i = i + 48 | 0;
 y = z + 24 | 0;
 x = z + 12 | 0;
 v = z;
 if ((a | 0) < 4 | (b | 0) < 4) {
  i = z;
  return;
 }
 ed(y, d);
 ed(x, d);
 ed(v, d);
 w = v + 4 | 0;
 e = c[w >> 2] | 0;
 u = c[v >> 2] | 0;
 if ((e | 0) != (u | 0)) {
  e = e - u >> 2;
  f = 0;
  do {
   t = u + (f << 2) | 0;
   g[t >> 2] = +g[t >> 2] * .6791449189186096;
   f = f + 1 | 0;
  } while (f >>> 0 < e >>> 0);
 }
 if ((b | 0) > 0) {
  m = c[x >> 2] | 0;
  n = c[y >> 2] | 0;
  o = a + -2 | 0;
  p = (o | 0) > 2;
  q = a + -1 | 0;
  r = (q | 0) > 1;
  t = 0;
  do {
   s = _(t, a) | 0;
   h = m + (s << 2) | 0;
   k = s + 1 | 0;
   l = n + (k << 2) | 0;
   g[l >> 2] = +g[h >> 2] + +g[l >> 2];
   k = m + (k << 2) | 0;
   l = n + (s << 2) | 0;
   g[l >> 2] = +g[k >> 2] + +g[l >> 2];
   l = n + (s + 2 << 2) | 0;
   g[l >> 2] = +g[k >> 2] + +g[l >> 2];
   if (p) {
    e = 2;
    do {
     l = e + s | 0;
     k = m + (l << 2) | 0;
     j = n + (l + -1 << 2) | 0;
     g[j >> 2] = +g[k >> 2] + +g[j >> 2];
     l = n + (l + 1 << 2) | 0;
     g[l >> 2] = +g[k >> 2] + +g[l >> 2];
     e = e + 1 | 0;
    } while ((e | 0) != (o | 0));
   }
   j = s + a | 0;
   f = j + -2 | 0;
   e = m + (f << 2) | 0;
   k = n + (j + -3 << 2) | 0;
   g[k >> 2] = +g[e >> 2] + +g[k >> 2];
   k = j + -1 | 0;
   l = n + (k << 2) | 0;
   g[l >> 2] = +g[e >> 2] + +g[l >> 2];
   l = m + (k << 2) | 0;
   f = n + (f << 2) | 0;
   g[f >> 2] = +g[l >> 2] + +g[f >> 2];
   if ((t | 0) > 0) {
    e = s - a | 0;
    f = n + (e + 1 << 2) | 0;
    g[f >> 2] = +g[u + (s << 2) >> 2] + +g[f >> 2];
    f = n + (e << 2) | 0;
    g[f >> 2] = +g[h >> 2] + +g[f >> 2];
    if (r) {
     f = 1;
     do {
      D = f + s | 0;
      B = u + (D << 2) | 0;
      A = f + e | 0;
      C = n + (A + 1 << 2) | 0;
      g[C >> 2] = +g[B >> 2] + +g[C >> 2];
      C = n + (A << 2) | 0;
      g[C >> 2] = +g[m + (D << 2) >> 2] + +g[C >> 2];
      A = n + (A + -1 << 2) | 0;
      g[A >> 2] = +g[B >> 2] + +g[A >> 2];
      f = f + 1 | 0;
     } while ((f | 0) != (q | 0));
    }
    D = n + (s + -1 << 2) | 0;
    g[D >> 2] = +g[l >> 2] + +g[D >> 2];
    D = n + (s + -2 << 2) | 0;
    g[D >> 2] = +g[u + (k << 2) >> 2] + +g[D >> 2];
   }
   t = t + 1 | 0;
   if ((t | 0) < (b | 0)) {
    D = n + (j + 1 << 2) | 0;
    g[D >> 2] = +g[u + (s << 2) >> 2] + +g[D >> 2];
    D = n + (j << 2) | 0;
    g[D >> 2] = +g[h >> 2] + +g[D >> 2];
    if (r) {
     e = 1;
     do {
      A = e + s | 0;
      C = u + (A << 2) | 0;
      D = e + j | 0;
      B = n + (D + 1 << 2) | 0;
      g[B >> 2] = +g[C >> 2] + +g[B >> 2];
      B = n + (D << 2) | 0;
      g[B >> 2] = +g[m + (A << 2) >> 2] + +g[B >> 2];
      D = n + (D + -1 << 2) | 0;
      g[D >> 2] = +g[C >> 2] + +g[D >> 2];
      e = e + 1 | 0;
     } while ((e | 0) != (q | 0));
    }
    D = j + a | 0;
    C = n + (D + -1 << 2) | 0;
    g[C >> 2] = +g[l >> 2] + +g[C >> 2];
    D = n + (D + -2 << 2) | 0;
    g[D >> 2] = +g[u + (k << 2) >> 2] + +g[D >> 2];
   }
  } while ((t | 0) != (b | 0));
 }
 if ((y | 0) != (d | 0)) te(d, c[y >> 2] | 0, c[y + 4 >> 2] | 0);
 e = c[d + 4 >> 2] | 0;
 h = c[d >> 2] | 0;
 if ((e | 0) != (h | 0)) {
  e = e - h >> 2;
  f = 0;
  do {
   D = h + (f << 2) | 0;
   g[D >> 2] = +g[D >> 2] * .12959109246730804;
   f = f + 1 | 0;
  } while (f >>> 0 < e >>> 0);
 }
 e = c[v >> 2] | 0;
 f = e;
 if (e) {
  h = c[w >> 2] | 0;
  if ((h | 0) != (e | 0)) c[w >> 2] = h + (~((h + -4 - f | 0) >>> 2) << 2);
  Ae(e);
 }
 h = c[x >> 2] | 0;
 j = h;
 if (h) {
  e = x + 4 | 0;
  f = c[e >> 2] | 0;
  if ((f | 0) != (h | 0)) c[e >> 2] = f + (~((f + -4 - j | 0) >>> 2) << 2);
  Ae(h);
 }
 h = c[y >> 2] | 0;
 if (!h) {
  i = z;
  return;
 }
 e = y + 4 | 0;
 f = c[e >> 2] | 0;
 if ((f | 0) != (h | 0)) c[e >> 2] = f + (~((f + -4 - h | 0) >>> 2) << 2);
 Ae(h);
 i = z;
 return;
}

function fc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, h = 0, j = 0.0, k = 0.0, l = 0.0, m = 0.0, n = 0.0, o = 0.0, p = 0.0, q = 0.0, r = 0.0, s = 0.0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0.0, z = 0.0, A = 0, B = 0, C = 0;
 x = i;
 i = i + 16 | 0;
 w = x;
 Hb(w, d);
 Nc(a, b, c[c[w >> 2] >> 2] | 0, 1.1, 0.0);
 Nc(a, b, c[(c[w >> 2] | 0) + 12 >> 2] | 0, 1.1, 0.0);
 Nc(a, b, c[(c[w >> 2] | 0) + 24 >> 2] | 0, 1.1, 0.0);
 a = c[d >> 2] | 0;
 b = c[a + 4 >> 2] | 0;
 u = c[a >> 2] | 0;
 d = c[w >> 2] | 0;
 if ((b | 0) != (u | 0)) {
  v = c[a + 12 >> 2] | 0;
  t = c[a + 24 >> 2] | 0;
  f = b - u >> 2;
  a = c[d >> 2] | 0;
  b = c[d + 12 >> 2] | 0;
  e = c[d + 24 >> 2] | 0;
  h = 0;
  do {
   p = +g[a + (h << 2) >> 2];
   j = +g[b + (h << 2) >> 2];
   s = +g[e + (h << 2) >> 2];
   q = p * .348036746003 + j * .577814843137 + s * .0544556093735 + .774145581713;
   r = p * .26922717275 + j * .767247733938 + s * .0366922708552 + .920130265014;
   s = p * .0882062883536 + j * .158581714673 + s * .712857943858 + 10.6524069248;
   j = (q + -.77) / 273.81 * 2.0 + -1.0;
   p = j * 0.0;
   p = p + p;
   k = p + 6.683258861509244;
   l = j * k;
   l = l + l + 85.84086033631436;
   m = j * l;
   k = m + m - k + 373.5661002232874;
   m = j * k;
   l = m + m - l + 908.6622127396595;
   m = j * l;
   p = p + .035662329617191;
   n = j * p;
   n = n + n + .899112889751053;
   o = j * n;
   p = o + o - p + 4.711532733641639;
   o = j * p;
   n = o + o - n + 12.161463238367844;
   o = j * n;
   n = j * (o + o - p + 20.557285797683576) - n + 12.262350348616792;
   if (n == 0.0) p = 0.0; else p = (j * (m + m - k + 1496.0584520158125) - l + 881.9794765564783) / n;
   j = (r + -.77) / 273.81 * 2.0 + -1.0;
   o = j * 0.0;
   o = o + o;
   k = o + 6.683258861509244;
   l = j * k;
   l = l + l + 85.84086033631436;
   m = j * l;
   k = m + m - k + 373.5661002232874;
   m = j * k;
   l = m + m - l + 908.6622127396595;
   m = j * l;
   o = o + .035662329617191;
   n = j * o;
   n = n + n + .899112889751053;
   y = j * n;
   o = y + y - o + 4.711532733641639;
   y = j * o;
   n = y + y - n + 12.161463238367844;
   y = j * n;
   n = j * (y + y - o + 20.557285797683576) - n + 12.262350348616792;
   if (n == 0.0) o = 0.0; else o = (j * (m + m - k + 1496.0584520158125) - l + 881.9794765564783) / n;
   j = (s + -.77) / 273.81 * 2.0 + -1.0;
   y = j * 0.0;
   y = y + y;
   k = y + 6.683258861509244;
   l = j * k;
   l = l + l + 85.84086033631436;
   m = j * l;
   k = m + m - k + 373.5661002232874;
   m = j * k;
   l = m + m - l + 908.6622127396595;
   m = j * l;
   y = y + .035662329617191;
   n = j * y;
   n = n + n + .899112889751053;
   z = j * n;
   y = z + z - y + 4.711532733641639;
   z = j * y;
   n = z + z - n + 12.161463238367844;
   z = j * n;
   n = j * (z + z - y + 20.557285797683576) - n + 12.262350348616792;
   if (n == 0.0) j = 0.0; else j = (j * (m + m - k + 1496.0584520158125) - l + 881.9794765564783) / n;
   C = u + (h << 2) | 0;
   n = +g[C >> 2];
   B = v + (h << 2) | 0;
   y = +g[B >> 2];
   A = t + (h << 2) | 0;
   z = +g[A >> 2];
   q = p / q * (n * .348036746003 + y * .577814843137 + z * .0544556093735 + .774145581713);
   r = o / r * (n * .26922717275 + y * .767247733938 + z * .0366922708552 + .920130265014);
   g[C >> 2] = q * 1.01611726948 - r * .982482243696;
   g[B >> 2] = q * 1.43571362627 + r * .896039849412;
   g[A >> 2] = j / s * (n * .0882062883536 + y * .158581714673 + z * .712857943858 + 10.6524069248);
   h = h + 1 | 0;
  } while (h >>> 0 < f >>> 0);
 }
 if (!d) {
  i = x;
  return;
 }
 h = w + 4 | 0;
 a = c[h >> 2] | 0;
 if ((a | 0) != (d | 0)) {
  do {
   b = a + -12 | 0;
   c[h >> 2] = b;
   e = c[b >> 2] | 0;
   f = e;
   if (!e) a = b; else {
    a = a + -8 | 0;
    b = c[a >> 2] | 0;
    if ((b | 0) != (e | 0)) c[a >> 2] = b + (~((b + -4 - f | 0) >>> 2) << 2);
    Ae(e);
    a = c[h >> 2] | 0;
   }
  } while ((a | 0) != (d | 0));
  d = c[w >> 2] | 0;
 }
 Ae(d);
 i = x;
 return;
}

function jc(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, j = 0, l = 0, m = 0, n = 0.0, o = 0.0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 A = i;
 i = i + 1104 | 0;
 s = A;
 t = A + 80 | 0;
 m = A + 64 | 0;
 f = A + 52 | 0;
 x = A + 32 | 0;
 w = A + 20 | 0;
 u = A + 8 | 0;
 p = b + 4 | 0;
 q = b + 8 | 0;
 e = _(c[q >> 2] | 0, c[p >> 2] | 0) | 0;
 c[f >> 2] = 0;
 l = f + 4 | 0;
 c[l >> 2] = 0;
 c[f + 8 >> 2] = 0;
 do if (e) if (e >>> 0 > 1073741823) we(f); else {
  y = e << 2;
  v = ye(y) | 0;
  c[f >> 2] = v;
  z = v + (e << 2) | 0;
  c[f + 8 >> 2] = z;
  pg(v | 0, 0, y | 0) | 0;
  c[l >> 2] = z;
  break;
 } while (0);
 c[m >> 2] = 0;
 e = m + 4 | 0;
 c[e >> 2] = 0;
 c[m + 8 >> 2] = 0;
 z = ye(36) | 0;
 c[e >> 2] = z;
 c[m >> 2] = z;
 c[m + 8 >> 2] = z + 36;
 ed(z, f);
 y = z + 12 | 0;
 c[e >> 2] = y;
 ed(y, f);
 y = z + 24 | 0;
 c[e >> 2] = y;
 ed(y, f);
 y = z + 36 | 0;
 c[e >> 2] = y;
 e = c[f >> 2] | 0;
 f = e;
 if (e) {
  j = c[l >> 2] | 0;
  if ((j | 0) != (e | 0)) c[l >> 2] = j + (~((j + -4 - f | 0) >>> 2) << 2);
  Ae(e);
 }
 cc(d, 0, 0, c[d >> 2] | 0, c[d + 4 >> 2] | 0, m);
 fc(c[p >> 2] | 0, c[q >> 2] | 0, m);
 v = x + 16 | 0;
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 c[x + 12 >> 2] = 0;
 c[v >> 2] = 11;
 hc(w, c[p >> 2] | 0, c[q >> 2] | 0, m);
 kc(b + 52 | 0, b + 16 | 0, w, x);
 m = b + 80 | 0;
 e = _(c[q >> 2] | 0, c[p >> 2] | 0) | 0;
 f = b + 84 | 0;
 j = c[f >> 2] | 0;
 l = c[m >> 2] | 0;
 d = j - l >> 2;
 if (e >>> 0 <= d >>> 0) {
  if (e >>> 0 < d >>> 0 ? (r = l + (e << 2) | 0, (j | 0) != (r | 0)) : 0) c[f >> 2] = j + (~((j + -4 - r | 0) >>> 2) << 2);
 } else ke(m, e - d | 0);
 p = c[x >> 2] | 0;
 q = c[x + 4 >> 2] | 0;
 e = (q | 0) == 0;
 if (!e) {
  f = p << 2;
  j = c[x + 12 >> 2] | 0;
  l = c[x + 8 >> 2] | 0;
  d = 0;
  do {
   r = j + (_(l, d) | 0) | 0;
   tg((c[m >> 2] | 0) + ((_(d, p) | 0) << 2) | 0, r | 0, f | 0) | 0;
   d = d + 1 | 0;
  } while (d >>> 0 < q >>> 0);
  c[t >> 2] = 0;
  if (e) n = 0.0; else {
   j = c[x + 12 >> 2] | 0;
   l = c[x + 8 >> 2] | 0;
   d = (p | 0) == 0;
   n = 0.0;
   o = 0.0;
   m = 0;
   do {
    f = j + (_(m, l) | 0) | 0;
    if (!d) {
     e = 0;
     do {
      r = f + (e << 2) | 0;
      r = c[(o < +g[r >> 2] ? r : t) >> 2] | 0;
      c[t >> 2] = r;
      e = e + 1 | 0;
      o = (c[k >> 2] = r, +g[k >> 2]);
     } while ((e | 0) != (p | 0));
     n = o;
    }
    m = m + 1 | 0;
   } while ((m | 0) != (q | 0));
  }
 } else {
  c[t >> 2] = 0;
  n = 0.0;
 }
 g[b + 76 >> 2] = n;
 h[s >> 3] = n;
 Ef(t, 1024, 35354, s) | 0;
 a[t + 1023 >> 0] = 0;
 f = c[b + 92 >> 2] | 0;
 hg(u, t, Xf(t) | 0);
 e = c[f + 12 >> 2] | 0;
 if (e) {
  t = a[u >> 0] | 0;
  s = (t & 1) == 0;
  lg(e, s ? u + 1 | 0 : c[u + 8 >> 2] | 0, s ? (t & 255) >>> 1 : c[u + 4 >> 2] | 0) | 0;
 }
 e = c[f + 16 >> 2] | 0;
 if (e) sf((a[u >> 0] & 1) == 0 ? u + 1 | 0 : c[u + 8 >> 2] | 0, e) | 0;
 ig(u);
 e = c[w >> 2] | 0;
 if (e) {
  l = w + 4 | 0;
  f = c[l >> 2] | 0;
  if ((f | 0) != (e | 0)) {
   do {
    c[l >> 2] = f + -20;
    u = f + -8 | 0;
    j = c[u >> 2] | 0;
    c[u >> 2] = 0;
    if (j) jb[c[f + -4 >> 2] & 15](j);
    f = c[l >> 2] | 0;
   } while ((f | 0) != (e | 0));
   e = c[w >> 2] | 0;
  }
  Ae(e);
 }
 x = x + 12 | 0;
 e = c[x >> 2] | 0;
 c[x >> 2] = 0;
 if (e) jb[c[v >> 2] & 15](e);
 m = y + -12 | 0;
 j = c[m >> 2] | 0;
 l = j;
 if (j) {
  e = y + -8 | 0;
  f = c[e >> 2] | 0;
  if ((f | 0) != (j | 0)) c[e >> 2] = f + (~((f + -4 - l | 0) >>> 2) << 2);
  Ae(j);
 }
 d = m + -12 | 0;
 j = c[d >> 2] | 0;
 l = j;
 if (j) {
  e = m + -8 | 0;
  f = c[e >> 2] | 0;
  if ((f | 0) != (j | 0)) c[e >> 2] = f + (~((f + -4 - l | 0) >>> 2) << 2);
  Ae(j);
 }
 j = c[d + -12 >> 2] | 0;
 if (!j) {
  Ae(z);
  i = A;
  return;
 }
 e = d + -8 | 0;
 f = c[e >> 2] | 0;
 if ((f | 0) != (j | 0)) c[e >> 2] = f + (~((f + -4 - j | 0) >>> 2) << 2);
 Ae(j);
 Ae(z);
 i = A;
 return;
}

function uc(a, e, f, g, h) {
 a = a | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 z = i;
 i = i + 1152 | 0;
 x = z;
 y = z + 768 | 0;
 if ((f | e) >>> 0 > 65535) {
  e = 0;
  i = z;
  return e | 0;
 }
 if (((c[a + 4 >> 2] | 0) - (c[a >> 2] | 0) | 0) != (_(e * 3 | 0, f) | 0)) {
  e = 0;
  i = z;
  return e | 0;
 }
 vc(e, f, h);
 hg(x, 35377, 17);
 j = h + 36 | 0;
 k = c[j >> 2] | 0;
 if (k >>> 0 < (c[h + 40 >> 2] | 0) >>> 0) {
  c[k >> 2] = c[x >> 2];
  c[k + 4 >> 2] = c[x + 4 >> 2];
  c[k + 8 >> 2] = c[x + 8 >> 2];
  c[x >> 2] = 0;
  c[x + 4 >> 2] = 0;
  c[x + 8 >> 2] = 0;
  c[j >> 2] = (c[j >> 2] | 0) + 12;
 } else le(h + 32 | 0, x);
 ig(x);
 m = c[h + 56 >> 2] | 0;
 j = c[m >> 2] | 0;
 k = 0;
 l = 0;
 while (1) {
  w = c[g + (k << 2) >> 2] | 0;
  c[j + (l << 2) >> 2] = w;
  c[x + (k << 2) >> 2] = 65537 / (w | 0) | 0;
  l = l + 1 | 0;
  if ((l | 0) == 64) break; else k = k + 1 | 0;
 }
 j = c[m + 24 >> 2] | 0;
 k = 64;
 l = 0;
 while (1) {
  w = c[g + (k << 2) >> 2] | 0;
  c[j + (l << 2) >> 2] = w;
  c[x + (k << 2) >> 2] = 65537 / (w | 0) | 0;
  l = l + 1 | 0;
  if ((l | 0) == 64) break; else k = k + 1 | 0;
 }
 j = c[m + 48 >> 2] | 0;
 k = 128;
 l = 0;
 while (1) {
  w = c[g + (k << 2) >> 2] | 0;
  c[j + (l << 2) >> 2] = w;
  c[x + (k << 2) >> 2] = 65537 / (w | 0) | 0;
  l = l + 1 | 0;
  if ((l | 0) == 64) break; else k = k + 1 | 0;
 }
 v = h + 20 | 0;
 j = c[v >> 2] | 0;
 if ((j | 0) > 0) {
  w = h + 24 | 0;
  t = f + -1 | 0;
  u = e + -1 | 0;
  q = h + 80 | 0;
  r = y + 128 | 0;
  s = y + 256 | 0;
  k = c[w >> 2] | 0;
  l = 0;
  p = 0;
  do {
   if ((k | 0) > 0) {
    o = p << 3;
    j = l;
    n = 0;
    do {
     k = n << 3;
     l = c[a >> 2] | 0;
     h = 0;
     do {
      m = h + o | 0;
      m = _((m | 0) < (t | 0) ? m : t, e) | 0;
      g = h << 3;
      f = 0;
      do {
       B = f + k | 0;
       B = (((B | 0) < (u | 0) ? B : u) + m | 0) * 3 | 0;
       A = f + g | 0;
       D = d[l + B >> 0] | 0;
       C = d[l + (B + 1) >> 0] | 0;
       B = d[l + (B + 2) >> 0] | 0;
       b[y + (A << 1) >> 1] = ((D * 19595 | 0) + -8355840 + (C * 38469 | 0) + (B * 7471 | 0) | 0) >>> 16;
       b[y + (A + 64 << 1) >> 1] = ((_(D, -11059) | 0) + 32767 + (_(C, -21709) | 0) + (B << 15) | 0) >>> 16;
       b[y + (A + 128 << 1) >> 1] = ((D << 15 | 32767) + (_(C, -27439) | 0) + (_(B, -5329) | 0) | 0) >>> 16;
       f = f + 1 | 0;
      } while ((f | 0) != 8);
      h = h + 1 | 0;
     } while ((h | 0) != 8);
     sc(y);
     sc(r);
     sc(s);
     k = 0;
     do {
      D = y + (k << 1) | 0;
      b[D >> 1] = (_(b[D >> 1] | 0, c[x + (k << 2) >> 2] | 0) | 0) + 524288 >> 20;
      k = k + 1 | 0;
     } while ((k | 0) != 192);
     k = j << 6;
     l = (c[(c[q >> 2] | 0) + 28 >> 2] | 0) + (k << 1) | 0;
     m = y;
     g = l + 128 | 0;
     do {
      b[l >> 1] = b[m >> 1] | 0;
      l = l + 2 | 0;
      m = m + 2 | 0;
     } while ((l | 0) < (g | 0));
     l = (c[(c[q >> 2] | 0) + 68 >> 2] | 0) + (k << 1) | 0;
     m = r;
     g = l + 128 | 0;
     do {
      b[l >> 1] = b[m >> 1] | 0;
      l = l + 2 | 0;
      m = m + 2 | 0;
     } while ((l | 0) < (g | 0));
     l = (c[(c[q >> 2] | 0) + 108 >> 2] | 0) + (k << 1) | 0;
     m = s;
     g = l + 128 | 0;
     do {
      b[l >> 1] = b[m >> 1] | 0;
      l = l + 2 | 0;
      m = m + 2 | 0;
     } while ((l | 0) < (g | 0));
     j = j + 1 | 0;
     n = n + 1 | 0;
     k = c[w >> 2] | 0;
    } while ((n | 0) < (k | 0));
    l = j;
    j = c[v >> 2] | 0;
   }
   p = p + 1 | 0;
  } while ((p | 0) < (j | 0));
 }
 D = 1;
 i = z;
 return D | 0;
}

function Cb(c, d) {
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0;
 g = i;
 i = i + 128 | 0;
 f = g;
 e = 0;
 do {
  q = b[c + (e << 1) >> 1] << 13;
  K = e + 8 | 0;
  H = b[c + (K << 1) >> 1] | 0;
  p = H * 11363 | 0;
  x = H * 9633 | 0;
  C = H * 6437 | 0;
  H = H * 2260 | 0;
  J = e + 16 | 0;
  w = b[c + (J << 1) >> 1] | 0;
  o = w * 10703 | 0;
  w = w * 4433 | 0;
  I = e + 24 | 0;
  G = b[c + (I << 1) >> 1] | 0;
  n = G * 9633 | 0;
  v = _(G, -2259) | 0;
  B = _(G, -11362) | 0;
  G = _(G, -6436) | 0;
  D = e + 32 | 0;
  m = b[c + (D << 1) >> 1] << 13;
  y = e + 40 | 0;
  F = b[c + (y << 1) >> 1] | 0;
  l = F * 6437 | 0;
  u = _(F, -11362) | 0;
  A = F * 2261 | 0;
  F = F * 9633 | 0;
  r = e + 48 | 0;
  t = b[c + (r << 1) >> 1] | 0;
  k = t * 4433 | 0;
  t = _(t, -10704) | 0;
  h = e + 56 | 0;
  E = b[c + (h << 1) >> 1] | 0;
  j = E * 2260 | 0;
  s = _(E, -6436) | 0;
  z = E * 9633 | 0;
  E = _(E, -11363) | 0;
  b[f + (e << 1) >> 1] = (p + q + o + n + m + l + k + j + 1024 | 0) >>> 11;
  b[f + (K << 1) >> 1] = (x + q + w + v - m + u + t + s + 1024 | 0) >>> 11;
  b[f + (J << 1) >> 1] = (C + q - w + B - m + A - t + z + 1024 | 0) >>> 11;
  b[f + (I << 1) >> 1] = (H + q - o + G + m + F - k + E + 1024 | 0) >>> 11;
  b[f + (D << 1) >> 1] = (q - H - o - G + m - F - k - E + 1024 | 0) >>> 11;
  b[f + (y << 1) >> 1] = (q - C - w - B - m - A - t - z + 1024 | 0) >>> 11;
  b[f + (r << 1) >> 1] = (q - x + w - v - m - u + t - s + 1024 | 0) >>> 11;
  b[f + (h << 1) >> 1] = (q - p + o - n + m - l + k - j + 1024 | 0) >>> 11;
  e = e + 1 | 0;
 } while ((e | 0) != 8);
 c = 0;
 do {
  K = c << 3;
  C = b[f + (K << 1) >> 1] << 13;
  o = b[f + ((K | 1) << 1) >> 1] | 0;
  D = o * 11363 | 0;
  w = o * 9633 | 0;
  s = o * 6437 | 0;
  o = o * 2260 | 0;
  x = b[f + ((K | 2) << 1) >> 1] | 0;
  E = x * 10703 | 0;
  x = x * 4433 | 0;
  p = b[f + ((K | 3) << 1) >> 1] | 0;
  F = p * 9633 | 0;
  y = _(p, -2259) | 0;
  t = _(p, -11362) | 0;
  p = _(p, -6436) | 0;
  G = b[f + ((K | 4) << 1) >> 1] << 13;
  q = b[f + ((K | 5) << 1) >> 1] | 0;
  H = q * 6437 | 0;
  z = _(q, -11362) | 0;
  u = q * 2261 | 0;
  q = q * 9633 | 0;
  A = b[f + ((K | 6) << 1) >> 1] | 0;
  I = A * 4433 | 0;
  A = _(A, -10704) | 0;
  r = b[f + ((K | 7) << 1) >> 1] | 0;
  J = r * 2260 | 0;
  B = _(r, -6436) | 0;
  v = r * 9633 | 0;
  r = _(r, -11363) | 0;
  n = D + C + E + F + G + H + I + J + 33685504 >> 18;
  n = (n | 0) < 255 ? n : 255;
  a[d + K >> 0] = (n | 0) > 0 ? n & 255 : 0;
  n = w + C + x + y - G + z + A + B + 33685504 >> 18;
  n = (n | 0) < 255 ? n : 255;
  a[d + (K | 1) >> 0] = (n | 0) > 0 ? n & 255 : 0;
  n = s + C - x + t - G + u - A + v + 33685504 >> 18;
  n = (n | 0) < 255 ? n : 255;
  a[d + (K | 2) >> 0] = (n | 0) > 0 ? n & 255 : 0;
  n = o + C - E + p + G + q - I + r + 33685504 >> 18;
  n = (n | 0) < 255 ? n : 255;
  a[d + (K | 3) >> 0] = (n | 0) > 0 ? n & 255 : 0;
  r = C - o - E - p + G - q - I - r + 33685504 >> 18;
  r = (r | 0) < 255 ? r : 255;
  a[d + (K | 4) >> 0] = (r | 0) > 0 ? r & 255 : 0;
  v = C - s - x - t - G - u - A - v + 33685504 >> 18;
  v = (v | 0) < 255 ? v : 255;
  a[d + (K | 5) >> 0] = (v | 0) > 0 ? v & 255 : 0;
  B = C - w + x - y - G - z + A - B + 33685504 >> 18;
  B = (B | 0) < 255 ? B : 255;
  a[d + (K | 6) >> 0] = (B | 0) > 0 ? B & 255 : 0;
  J = C - D + E - F + G - H + I - J + 33685504 >> 18;
  J = (J | 0) < 255 ? J : 255;
  a[d + (K | 7) >> 0] = (J | 0) > 0 ? J & 255 : 0;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 i = g;
 return;
}

function Uc(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0;
 P = i;
 i = i + 3152 | 0;
 K = P + 1608 | 0;
 L = P + 72 | 0;
 N = P + 48 | 0;
 M = P + 24 | 0;
 O = P;
 D = a + 12 | 0;
 j = c[D >> 2] | 0;
 F = a + 4 | 0;
 k = c[F >> 2] | 0;
 if ((7 - j | 0) >>> 0 >= k >>> 0) {
  i = P;
  return;
 }
 G = a + 16 | 0;
 H = N + 8 | 0;
 I = M + 8 | 0;
 J = N + 16 | 0;
 E = M + 16 | 0;
 l = c[a >> 2] | 0;
 C = 0;
 do {
  if ((7 - j | 0) >>> 0 < l >>> 0) {
   B = 0;
   while (1) {
    A = (_(c[G >> 2] | 0, C) | 0) + B | 0;
    m = k + -8 | 0;
    m = _(m >>> 0 < C >>> 0 ? m : C, l) | 0;
    k = l + -8 | 0;
    k = m + (k >>> 0 < B >>> 0 ? k : B) | 0;
    m = c[b >> 2] | 0;
    n = c[d >> 2] | 0;
    o = k + 1 | 0;
    p = k + 2 | 0;
    q = k + 3 | 0;
    r = k + 4 | 0;
    s = k + 5 | 0;
    t = k + 6 | 0;
    u = k + 7 | 0;
    y = 0;
    do {
     v = y << 6;
     w = c[m + (y * 12 | 0) >> 2] | 0;
     x = c[n + (y * 12 | 0) >> 2] | 0;
     z = 0;
     do {
      R = _(l, z) | 0;
      Q = (z << 3) + v | 0;
      S = k + R | 0;
      h[K + (Q << 3) >> 3] = +g[w + (S << 2) >> 2];
      h[L + (Q << 3) >> 3] = +g[x + (S << 2) >> 2];
      S = o + R | 0;
      T = Q | 1;
      h[K + (T << 3) >> 3] = +g[w + (S << 2) >> 2];
      h[L + (T << 3) >> 3] = +g[x + (S << 2) >> 2];
      T = p + R | 0;
      S = Q | 2;
      h[K + (S << 3) >> 3] = +g[w + (T << 2) >> 2];
      h[L + (S << 3) >> 3] = +g[x + (T << 2) >> 2];
      S = q + R | 0;
      T = Q | 3;
      h[K + (T << 3) >> 3] = +g[w + (S << 2) >> 2];
      h[L + (T << 3) >> 3] = +g[x + (S << 2) >> 2];
      T = r + R | 0;
      S = Q | 4;
      h[K + (S << 3) >> 3] = +g[w + (T << 2) >> 2];
      h[L + (S << 3) >> 3] = +g[x + (T << 2) >> 2];
      S = s + R | 0;
      T = Q | 5;
      h[K + (T << 3) >> 3] = +g[w + (S << 2) >> 2];
      h[L + (T << 3) >> 3] = +g[x + (S << 2) >> 2];
      T = t + R | 0;
      S = Q | 6;
      h[K + (S << 3) >> 3] = +g[w + (T << 2) >> 2];
      h[L + (S << 3) >> 3] = +g[x + (T << 2) >> 2];
      R = u + R | 0;
      Q = Q | 7;
      h[K + (Q << 3) >> 3] = +g[w + (R << 2) >> 2];
      h[L + (Q << 3) >> 3] = +g[x + (R << 2) >> 2];
      z = z + 1 | 0;
     } while ((z | 0) != 8);
     y = y + 1 | 0;
    } while ((y | 0) != 3);
    c[N >> 2] = 0;
    c[N + 4 >> 2] = 0;
    c[N + 8 >> 2] = 0;
    c[N + 12 >> 2] = 0;
    c[N + 16 >> 2] = 0;
    c[N + 20 >> 2] = 0;
    c[M >> 2] = 0;
    c[M + 4 >> 2] = 0;
    c[M + 8 >> 2] = 0;
    c[M + 12 >> 2] = 0;
    c[M + 16 >> 2] = 0;
    c[M + 20 >> 2] = 0;
    c[O >> 2] = 0;
    c[O + 4 >> 2] = 0;
    c[O + 8 >> 2] = 0;
    c[O + 12 >> 2] = 0;
    c[O + 16 >> 2] = 0;
    c[O + 20 >> 2] = 0;
    nc(K, L, N, M, O);
    m = ((A >>> 0) / (j >>> 0) | 0) * 3 | 0;
    T = c[e >> 2] | 0;
    l = c[f >> 2] | 0;
    g[T + (m << 2) >> 2] = +h[N >> 3];
    g[l + (m << 2) >> 2] = +h[M >> 3];
    S = m + 1 | 0;
    g[T + (S << 2) >> 2] = +h[H >> 3];
    g[l + (S << 2) >> 2] = +h[I >> 3];
    m = m + 2 | 0;
    g[T + (m << 2) >> 2] = +h[J >> 3];
    g[l + (m << 2) >> 2] = +h[E >> 3];
    m = c[D >> 2] | 0;
    l = c[a >> 2] | 0;
    if ((B + 7 | 0) >>> 0 >= l >>> 0) {
     j = m;
     break;
    }
    j = m;
    k = c[F >> 2] | 0;
    B = m + B | 0;
   }
   k = c[F >> 2] | 0;
  }
  C = j + C | 0;
 } while ((C + 7 - j | 0) >>> 0 < k >>> 0);
 i = P;
 return;
}

function Dg(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 l = a;
 j = b;
 k = j;
 h = d;
 n = e;
 i = n;
 if (!k) {
  g = (f | 0) != 0;
  if (!i) {
   if (g) {
    c[f >> 2] = (l >>> 0) % (h >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   f = (l >>> 0) / (h >>> 0) >>> 0;
   return (C = n, f) | 0;
  } else {
   if (!g) {
    n = 0;
    f = 0;
    return (C = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = b & 0;
   n = 0;
   f = 0;
   return (C = n, f) | 0;
  }
 }
 g = (i | 0) == 0;
 do if (h) {
  if (!g) {
   g = (aa(i | 0) | 0) - (aa(k | 0) | 0) | 0;
   if (g >>> 0 <= 31) {
    m = g + 1 | 0;
    i = 31 - g | 0;
    b = g - 31 >> 31;
    h = m;
    a = l >>> (m >>> 0) & b | k << i;
    b = k >>> (m >>> 0) & b;
    g = 0;
    i = l << i;
    break;
   }
   if (!f) {
    n = 0;
    f = 0;
    return (C = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = j | b & 0;
   n = 0;
   f = 0;
   return (C = n, f) | 0;
  }
  g = h - 1 | 0;
  if (g & h) {
   i = (aa(h | 0) | 0) + 33 - (aa(k | 0) | 0) | 0;
   p = 64 - i | 0;
   m = 32 - i | 0;
   j = m >> 31;
   o = i - 32 | 0;
   b = o >> 31;
   h = i;
   a = m - 1 >> 31 & k >>> (o >>> 0) | (k << m | l >>> (i >>> 0)) & b;
   b = b & k >>> (i >>> 0);
   g = l << p & j;
   i = (k << p | l >>> (o >>> 0)) & j | l << m & i - 33 >> 31;
   break;
  }
  if (f) {
   c[f >> 2] = g & l;
   c[f + 4 >> 2] = 0;
  }
  if ((h | 0) == 1) {
   o = j | b & 0;
   p = a | 0 | 0;
   return (C = o, p) | 0;
  } else {
   p = wg(h | 0) | 0;
   o = k >>> (p >>> 0) | 0;
   p = k << 32 - p | l >>> (p >>> 0) | 0;
   return (C = o, p) | 0;
  }
 } else {
  if (g) {
   if (f) {
    c[f >> 2] = (k >>> 0) % (h >>> 0);
    c[f + 4 >> 2] = 0;
   }
   o = 0;
   p = (k >>> 0) / (h >>> 0) >>> 0;
   return (C = o, p) | 0;
  }
  if (!l) {
   if (f) {
    c[f >> 2] = 0;
    c[f + 4 >> 2] = (k >>> 0) % (i >>> 0);
   }
   o = 0;
   p = (k >>> 0) / (i >>> 0) >>> 0;
   return (C = o, p) | 0;
  }
  g = i - 1 | 0;
  if (!(g & i)) {
   if (f) {
    c[f >> 2] = a | 0;
    c[f + 4 >> 2] = g & k | b & 0;
   }
   o = 0;
   p = k >>> ((wg(i | 0) | 0) >>> 0);
   return (C = o, p) | 0;
  }
  g = (aa(i | 0) | 0) - (aa(k | 0) | 0) | 0;
  if (g >>> 0 <= 30) {
   b = g + 1 | 0;
   i = 31 - g | 0;
   h = b;
   a = k << i | l >>> (b >>> 0);
   b = k >>> (b >>> 0);
   g = 0;
   i = l << i;
   break;
  }
  if (!f) {
   o = 0;
   p = 0;
   return (C = o, p) | 0;
  }
  c[f >> 2] = a | 0;
  c[f + 4 >> 2] = j | b & 0;
  o = 0;
  p = 0;
  return (C = o, p) | 0;
 } while (0);
 if (!h) {
  k = i;
  j = 0;
  i = 0;
 } else {
  m = d | 0 | 0;
  l = n | e & 0;
  k = rg(m | 0, l | 0, -1, -1) | 0;
  d = C;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   og(k, d, e, n) | 0;
   p = C;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = og(e, n, o & m, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l) | 0;
   b = C;
   h = h - 1 | 0;
  } while ((h | 0) != 0);
  k = j;
  j = 0;
 }
 h = 0;
 if (f) {
  c[f >> 2] = a;
  c[f + 4 >> 2] = b;
 }
 o = (g | 0) >>> 31 | (k | h) << 1 | (h << 1 | g >>> 31) & 0 | j;
 p = (g << 1 | 0 >>> 31) & -2 | i;
 return (C = o, p) | 0;
}

function Tc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0.0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = i;
 i = i + 32 | 0;
 B = D + 12 | 0;
 A = D;
 w = 8 - d | 0;
 y = (w | 0) / 2 | 0;
 f = _(b, a) | 0;
 c[B >> 2] = 0;
 C = B + 4 | 0;
 c[C >> 2] = 0;
 c[B + 8 >> 2] = 0;
 do if (f) if (f >>> 0 > 1073741823) we(B); else {
  t = f << 2;
  u = ye(t) | 0;
  c[B >> 2] = u;
  v = u + (f << 2) | 0;
  c[B + 8 >> 2] = v;
  pg(u | 0, 0, t | 0) | 0;
  c[C >> 2] = v;
  break;
 } else {
  u = 0;
  v = 0;
 } while (0);
 l = ((a + -1 + d | 0) >>> 0) / (d >>> 0) | 0;
 if (w >>> 0 < b >>> 0) {
  m = w >>> 0 < a >>> 0;
  n = (d | 0) == 0;
  t = 0;
  while (1) {
   if (m) {
    p = _(t, l) | 0;
    q = c[e >> 2] | 0;
    r = t + y | 0;
    s = 0;
    while (1) {
     o = +g[q + ((((s + p | 0) >>> 0) / (d >>> 0) | 0) << 2) >> 2];
     if (o < .0001) o = o * 100.0; else o = +O(+o);
     if (!n) {
      f = s + y | 0;
      k = 0;
      do {
       h = f + (_(r + k | 0, a) | 0) | 0;
       j = 0;
       do {
        g[u + (h + j << 2) >> 2] = o;
        j = j + 1 | 0;
       } while ((j | 0) != (d | 0));
       k = k + 1 | 0;
      } while ((k | 0) != (d | 0));
     }
     if ((s + 8 | 0) >>> 0 < a >>> 0) s = s + d | 0; else break;
    }
   }
   if ((t + 8 | 0) >>> 0 < b >>> 0) t = t + d | 0; else break;
  }
 }
 if ((B | 0) != (e | 0)) te(e, u, v);
 p = a - w | 0;
 q = b - w | 0;
 f = _(p, q) | 0;
 c[A >> 2] = 0;
 r = A + 4 | 0;
 c[r >> 2] = 0;
 c[A + 8 >> 2] = 0;
 do if (f) if (f >>> 0 > 1073741823) we(A); else {
  v = f << 2;
  x = ye(v) | 0;
  c[A >> 2] = x;
  d = x + (f << 2) | 0;
  c[A + 8 >> 2] = d;
  pg(x | 0, 0, v | 0) | 0;
  c[r >> 2] = d;
  break;
 } else x = 0; while (0);
 f = (w | 0) == (b | 0);
 if (!f) {
  h = (w | 0) == (a | 0);
  n = 0;
  do {
   if (!h) {
    j = (_(n + y | 0, a) | 0) + y | 0;
    k = c[e >> 2] | 0;
    l = _(n, p) | 0;
    m = 0;
    do {
     c[x + (m + l << 2) >> 2] = c[k + (j + m << 2) >> 2];
     m = m + 1 | 0;
    } while (m >>> 0 < p >>> 0);
   }
   n = n + 1 | 0;
  } while (n >>> 0 < q >>> 0);
  Nc(p, q, x, 8.8510880283, .03027655136);
  if (f) z = 33; else {
   f = (w | 0) == (a | 0);
   h = c[A >> 2] | 0;
   n = 0;
   do {
    if (!f) {
     j = _(n, p) | 0;
     k = (_(n + y | 0, a) | 0) + y | 0;
     l = c[e >> 2] | 0;
     m = 0;
     do {
      x = l + (k + m << 2) | 0;
      g[x >> 2] = +g[h + (m + j << 2) >> 2] * 24.8235314874 + +g[x >> 2];
      m = m + 1 | 0;
     } while (m >>> 0 < p >>> 0);
    }
    n = n + 1 | 0;
   } while (n >>> 0 < q >>> 0);
   h = e;
  }
 } else {
  Nc(p, q, x, 8.8510880283, .03027655136);
  z = 33;
 }
 if ((z | 0) == 33) h = e;
 f = c[e + 4 >> 2] | 0;
 j = c[h >> 2] | 0;
 if ((f | 0) != (j | 0)) {
  f = f - j >> 2;
  h = 0;
  do {
   z = j + (h << 2) | 0;
   g[z >> 2] = +g[z >> 2] * .03872437046373487;
   h = h + 1 | 0;
  } while (h >>> 0 < f >>> 0);
 }
 f = c[A >> 2] | 0;
 h = f;
 if (f) {
  j = c[r >> 2] | 0;
  if ((j | 0) != (f | 0)) c[r >> 2] = j + (~((j + -4 - h | 0) >>> 2) << 2);
  Ae(f);
 }
 f = c[B >> 2] | 0;
 if (!f) {
  i = D;
  return;
 }
 h = c[C >> 2] | 0;
 if ((h | 0) != (f | 0)) c[C >> 2] = h + (~((h + -4 - f | 0) >>> 2) << 2);
 Ae(f);
 i = D;
 return;
}

function Rd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0.0, g = 0.0, j = 0.0, k = 0.0, l = 0, m = 0, n = 0, o = 0.0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 A = i;
 i = i + 1536 | 0;
 x = A + 768 | 0;
 y = A;
 t = b + 16 | 0;
 u = b + 8 | 0;
 v = b + 24 | 0;
 p = b + 32 | 0;
 q = b + 36 | 0;
 f = +h[t >> 3];
 g = f;
 w = 0;
 a : while (1) {
  do if (f == -1.0) {
   j = +h[u >> 3];
   if (!(j == -1.0)) {
    f = +h[v >> 3];
    k = j + f;
    if (j < f * 5.0) j = f; else {
     j = f;
     k = k * 2.0;
    }
   } else {
    k = +h[v >> 3];
    j = k;
    k = (a[b >> 0] | 0) == 0 ? k : 0.0;
   }
   if (k > j * 100.0) {
    e = 0;
    z = 33;
    break a;
   } else f = -1.0;
  } else {
   if (f == 0.0) {
    e = 0;
    z = 33;
    break a;
   }
   j = +h[u >> 3];
   if (j == -1.0) {
    j = +h[v >> 3];
    k = 0.0;
    break;
   }
   o = j + g;
   k = o * .025;
   f = j * .95 + k;
   j = +h[v >> 3];
   m = ~~(f / j);
   e = m << 1;
   f = f - j * +(m | 0);
   m = 63;
   while (1) {
    n = (f > 0.0 ? 3 : 1) + e | 0;
    l = c[27292 + (m << 2) >> 2] | 0;
    c[x + (l << 2) >> 2] = n;
    c[x + 256 + (l << 2) >> 2] = n;
    c[x + 512 + (l << 2) >> 2] = n;
    if ((m | 0) > 0) {
     f = f - 1.0 / (+(c[27612 + (l << 2) >> 2] | 0) * .5 + 1.0) * 3.0;
     m = m + -1 | 0;
    } else break;
   }
   f = g * .95 + k;
   m = ~~(f / j);
   e = m << 1;
   f = f - j * +(m | 0);
   m = 63;
   while (1) {
    n = (f > 0.0 ? 3 : 1) + e | 0;
    l = c[27292 + (m << 2) >> 2] | 0;
    c[y + (l << 2) >> 2] = n;
    c[y + 256 + (l << 2) >> 2] = n;
    c[y + 512 + (l << 2) >> 2] = n;
    if ((m | 0) > 0) {
     f = f - 1.0 / (+(c[27612 + (l << 2) >> 2] | 0) * .5 + 1.0) * 3.0;
     m = m + -1 | 0;
    } else {
     e = 0;
     break;
    }
   }
   while (1) {
    if ((c[x + (e << 2) >> 2] | 0) != (c[y + (e << 2) >> 2] | 0)) break;
    e = e + 1 | 0;
    if (e >>> 0 >= 192) {
     r = e;
     z = 17;
     break;
    }
   }
   if ((z | 0) == 17 ? (z = 0, (r | 0) == 192) : 0) {
    z = 19;
    break a;
   }
   f = g;
   k = o * .5;
  } while (0);
  l = ~~(k / j);
  m = l << 1;
  j = k - j * +(l | 0);
  l = 63;
  while (1) {
   n = (j > 0.0 ? 3 : 1) + m | 0;
   e = c[27292 + (l << 2) >> 2] | 0;
   c[d + (e << 2) >> 2] = n;
   c[d + 256 + (e << 2) >> 2] = n;
   c[d + 512 + (e << 2) >> 2] = n;
   if ((l | 0) > 0) {
    j = j - 1.0 / (+(c[27612 + (e << 2) >> 2] | 0) * .5 + 1.0) * 3.0;
    l = l + -1 | 0;
   } else break;
  }
  n = c[p >> 2] | 0;
  e = c[q >> 2] | 0;
  if ((e | 0) == (n | 0)) {
   e = 1;
   z = 33;
   break;
  }
  m = (e - n | 0) / 816 | 0;
  e = 0;
  while (1) {
   l = 0;
   while (1) {
    if ((c[d + (l << 2) >> 2] | 0) != (c[n + (e * 816 | 0) + (l << 2) >> 2] | 0)) break;
    l = l + 1 | 0;
    if (l >>> 0 >= 192) {
     s = l;
     z = 27;
     break;
    }
   }
   if ((z | 0) == 27 ? (z = 0, (s | 0) == 192) : 0) break;
   e = e + 1 | 0;
   if (e >>> 0 >= m >>> 0) {
    e = 1;
    z = 33;
    break a;
   }
  }
  if (!(a[n + (e * 816 | 0) + 768 >> 0] | 0)) {
   h[t >> 3] = k;
   g = k;
   f = k;
  } else h[u >> 3] = k;
  w = w + 1 | 0;
  if ((w | 0) >= 1e3) {
   e = 0;
   z = 33;
   break;
  }
 }
 if ((z | 0) == 19) {
  z = 0;
  i = A;
  return z | 0;
 } else if ((z | 0) == 33) {
  i = A;
  return e | 0;
 }
 return 0;
}

function Kc(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 ig(a + 128 | 0);
 e = a + 116 | 0;
 b = c[e >> 2] | 0;
 if (b) {
  f = a + 120 | 0;
  d = c[f >> 2] | 0;
  if ((d | 0) != (b | 0)) {
   do {
    k = d + -12 | 0;
    c[f >> 2] = k;
    ig(k);
    d = c[f >> 2] | 0;
   } while ((d | 0) != (b | 0));
   b = c[e >> 2] | 0;
  }
  Ae(b);
 }
 b = c[a + 104 >> 2] | 0;
 if (b) {
  d = a + 108 | 0;
  if ((c[d >> 2] | 0) != (b | 0)) c[d >> 2] = b;
  Ae(b);
 }
 h = a + 92 | 0;
 b = c[h >> 2] | 0;
 if (b) {
  i = a + 96 | 0;
  d = c[i >> 2] | 0;
  if ((d | 0) != (b | 0)) {
   do {
    e = d + -28 | 0;
    c[i >> 2] = e;
    f = c[d + -12 >> 2] | 0;
    g = f;
    if (!f) d = e; else {
     d = d + -8 | 0;
     e = c[d >> 2] | 0;
     if ((e | 0) != (f | 0)) c[d >> 2] = e + (~(((e + -12 - g | 0) >>> 0) / 12 | 0) * 12 | 0);
     Ae(f);
     d = c[i >> 2] | 0;
    }
   } while ((d | 0) != (b | 0));
   b = c[h >> 2] | 0;
  }
  Ae(b);
 }
 h = a + 80 | 0;
 b = c[h >> 2] | 0;
 if (b) {
  i = a + 84 | 0;
  d = c[i >> 2] | 0;
  if ((d | 0) != (b | 0)) {
   do {
    e = d + -40 | 0;
    c[i >> 2] = e;
    f = c[d + -12 >> 2] | 0;
    g = f;
    if (!f) d = e; else {
     d = d + -8 | 0;
     e = c[d >> 2] | 0;
     if ((e | 0) != (f | 0)) c[d >> 2] = e + (~((e + -2 - g | 0) >>> 1) << 1);
     Ae(f);
     d = c[i >> 2] | 0;
    }
   } while ((d | 0) != (b | 0));
   b = c[h >> 2] | 0;
  }
  Ae(b);
 }
 j = a + 68 | 0;
 b = c[j >> 2] | 0;
 if (b) {
  k = a + 72 | 0;
  d = c[k >> 2] | 0;
  if ((d | 0) != (b | 0)) {
   do {
    e = d + -32 | 0;
    c[k >> 2] = e;
    f = c[d + -20 >> 2] | 0;
    g = f;
    if (f) {
     h = d + -16 | 0;
     i = c[h >> 2] | 0;
     if ((i | 0) != (f | 0)) c[h >> 2] = i + (~((i + -4 - g | 0) >>> 2) << 2);
     Ae(f);
    }
    f = c[e >> 2] | 0;
    g = f;
    if (f) {
     d = d + -28 | 0;
     e = c[d >> 2] | 0;
     if ((e | 0) != (f | 0)) c[d >> 2] = e + (~((e + -4 - g | 0) >>> 2) << 2);
     Ae(f);
    }
    d = c[k >> 2] | 0;
   } while ((d | 0) != (b | 0));
   b = c[j >> 2] | 0;
  }
  Ae(b);
 }
 h = a + 56 | 0;
 b = c[h >> 2] | 0;
 if (b) {
  i = a + 60 | 0;
  d = c[i >> 2] | 0;
  if ((d | 0) != (b | 0)) {
   e = d;
   while (1) {
    d = e + -24 | 0;
    c[i >> 2] = d;
    f = c[d >> 2] | 0;
    g = f;
    if (f) {
     d = e + -20 | 0;
     e = c[d >> 2] | 0;
     if ((e | 0) != (f | 0)) c[d >> 2] = e + (~((e + -4 - g | 0) >>> 2) << 2);
     Ae(f);
     d = c[i >> 2] | 0;
    }
    if ((d | 0) == (b | 0)) break; else e = d;
   }
   b = c[h >> 2] | 0;
  }
  Ae(b);
 }
 e = a + 44 | 0;
 b = c[e >> 2] | 0;
 if (b) {
  f = a + 48 | 0;
  d = c[f >> 2] | 0;
  if ((d | 0) != (b | 0)) {
   do {
    k = d + -12 | 0;
    c[f >> 2] = k;
    ig(k);
    d = c[f >> 2] | 0;
   } while ((d | 0) != (b | 0));
   b = c[e >> 2] | 0;
  }
  Ae(b);
 }
 f = a + 32 | 0;
 b = c[f >> 2] | 0;
 if (!b) return;
 e = a + 36 | 0;
 d = c[e >> 2] | 0;
 if ((d | 0) != (b | 0)) {
  do {
   a = d + -12 | 0;
   c[e >> 2] = a;
   ig(a);
   d = c[e >> 2] | 0;
  } while ((d | 0) != (b | 0));
  b = c[f >> 2] | 0;
 }
 Ae(b);
 return;
}

function wc(d, e, f) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 80 | 0;
 y = z;
 c[y >> 2] = 0;
 g = d + 4 | 0;
 h = y + 4 | 0;
 j = g;
 k = h + 64 | 0;
 do {
  c[h >> 2] = c[j >> 2];
  h = h + 4 | 0;
  j = j + 4 | 0;
 } while ((h | 0) < (k | 0));
 if (((c[d + 64 >> 2] | 0) + ((c[d + 60 >> 2] | 0) + ((c[d + 56 >> 2] | 0) + ((c[d + 52 >> 2] | 0) + ((c[d + 48 >> 2] | 0) + ((c[d + 44 >> 2] | 0) + ((c[d + 40 >> 2] | 0) + ((c[d + 36 >> 2] | 0) + ((c[d + 32 >> 2] | 0) + ((c[d + 28 >> 2] | 0) + ((c[d + 24 >> 2] | 0) + ((c[d + 20 >> 2] | 0) + ((c[d + 16 >> 2] | 0) + ((c[d + 12 >> 2] | 0) + ((c[d + 8 >> 2] | 0) + (c[g >> 2] | 0))))))))))))))) | 0) == 1) {
  d = c[e >> 2] << 16;
  g = 0;
  do {
   e = f + (g << 2) | 0;
   b[e >> 1] = d;
   b[e + 2 >> 1] = d >>> 16;
   g = g + 1 | 0;
  } while ((g | 0) != 256);
  d = 256;
  i = z;
  return d | 0;
 } else {
  d = 0;
  g = 0;
  s = 1;
 }
 do {
  h = y + (s << 2) | 0;
  j = c[h >> 2] | 0;
  if ((j | 0) > 0) {
   r = 8 - s | 0;
   k = 1 << r;
   r = j << r;
   m = j;
   n = d;
   o = g;
   while (1) {
    l = c[e + (n << 2) >> 2] << 16 | s;
    p = o;
    q = k;
    while (1) {
     q = q + -1 | 0;
     w = f + (p << 2) | 0;
     b[w >> 1] = l;
     b[w + 2 >> 1] = l >>> 16;
     if (!q) break; else p = p + 1 | 0;
    }
    if ((m | 0) > 1) {
     m = m + -1 | 0;
     n = n + 1 | 0;
     o = k + o | 0;
    } else break;
   }
   c[h >> 2] = 0;
   d = d + j | 0;
   g = g + r | 0;
  }
  s = s + 1 | 0;
 } while ((s | 0) != 9);
 w = f;
 j = d;
 v = 9;
 m = 0;
 k = f + 1024 | 0;
 l = 8;
 n = 0;
 d = 256;
 while (1) {
  r = y + (v << 2) | 0;
  h = c[r >> 2] | 0;
  if ((h | 0) > 0) {
   s = v + 248 & 255;
   t = (v | 0) < 16;
   u = 1 << v + -8;
   q = j;
   j = n;
   while (1) {
    if ((m | 0) < (j | 0)) {
     n = m;
     o = l;
     p = j;
    } else {
     k = k + (j << 2) | 0;
     a : do if (t ? (x = u - h | 0, (x | 0) >= 1) : 0) {
      h = v;
      j = x;
      do {
       h = h + 1 | 0;
       if ((h | 0) >= 16) break a;
       j = (j << 1) - (c[y + (h << 2) >> 2] | 0) | 0;
      } while ((j | 0) >= 1);
     } else h = v; while (0);
     o = h + -8 | 0;
     m = 1 << o;
     a[f + (g << 2) >> 0] = h;
     b[f + (g << 2) + 2 >> 1] = ((k - w | 0) >>> 2) - g;
     g = g + 1 | 0;
     n = 0;
     p = m;
     d = m + d | 0;
    }
    m = 1 << o - s;
    h = c[e + (q << 2) >> 2] << 16 | s;
    j = n;
    l = m;
    while (1) {
     l = l + -1 | 0;
     A = k + (j << 2) | 0;
     b[A >> 1] = h;
     b[A + 2 >> 1] = h >>> 16;
     if (!l) break; else j = j + 1 | 0;
    }
    j = q + 1 | 0;
    l = n + m | 0;
    A = c[r >> 2] | 0;
    h = A + -1 | 0;
    c[r >> 2] = h;
    if ((A | 0) <= 1) {
     m = l;
     l = o;
     h = p;
     break;
    } else {
     q = j;
     m = l;
     l = o;
     j = p;
    }
   }
  } else h = n;
  v = v + 1 | 0;
  if ((v | 0) == 17) break; else n = h;
 }
 i = z;
 return d | 0;
}

function Dc(a, b, e, f) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 w = i;
 i = i + 2336 | 0;
 v = w + 2056 | 0;
 t = w + 1024 | 0;
 u = w + 2072 | 0;
 s = w;
 pg(f | 0, 0, (c[b >> 2] | 0) * 257 | 0) | 0;
 if (!(c[b >> 2] | 0)) {
  v = 0;
  i = w;
  return v | 0;
 } else n = 0;
 do {
  c[e + (n << 2) >> 2] = n;
  m = ye(4120) | 0;
  l = n * 257 | 0;
  yc(a + (n * 1028 | 0) | 0, 257, 16, m, f + l | 0);
  j = 1;
  h = 136;
  g = 0;
  while (1) {
   h = (c[a + (n * 1028 | 0) + (g << 2) >> 2] | 0) == 0 ? h : h + 8 | 0;
   g = j + 1 | 0;
   if ((g | 0) == 257) break; else {
    r = j;
    j = g;
    g = r;
   }
  }
  k = 1;
  g = 0;
  j = 0;
  while (1) {
   g = (_((d[f + (j + l) >> 0] | 0) + (j & 15) | 0, (c[a + (n * 1028 | 0) + (j << 2) >> 2] | 0) >>> 1) | 0) + g | 0;
   j = k + 1 | 0;
   if ((j | 0) == 257) break; else {
    r = k;
    k = j;
    j = r;
   }
  }
  c[v + (n << 2) >> 2] = g + h + (((g * 3 | 0) + 512 | 0) >>> 10);
  Ae(m);
  n = n + 1 | 0;
  h = c[b >> 2] | 0;
 } while (n >>> 0 < h >>> 0);
 a : do if (h >>> 0 > 1) {
  r = t + 1024 | 0;
  g = h;
  while (1) {
   q = g + -1 | 0;
   p = g + -2 | 0;
   o = a + (q * 1028 | 0) | 0;
   tg(t | 0, o | 0, 1028) | 0;
   j = 1;
   g = 0;
   while (1) {
    n = t + (g << 2) | 0;
    c[n >> 2] = (c[n >> 2] | 0) + (c[a + (p * 1028 | 0) + (g << 2) >> 2] | 0);
    g = j + 1 | 0;
    if ((g | 0) == 257) break; else {
     n = j;
     j = g;
     g = n;
    }
   }
   n = a + (p * 1028 | 0) | 0;
   c[r >> 2] = 1;
   g = ye(4120) | 0;
   pg(u | 0, 0, 257) | 0;
   yc(t, 257, 16, g, u);
   l = 1;
   k = 136;
   j = 0;
   while (1) {
    k = (c[t + (j << 2) >> 2] | 0) == 0 ? k : k + 8 | 0;
    j = l + 1 | 0;
    if ((j | 0) == 257) break; else {
     m = l;
     l = j;
     j = m;
    }
   }
   m = 1;
   j = 0;
   l = 0;
   while (1) {
    j = (_((d[u + l >> 0] | 0) + (l & 15) | 0, (c[t + (l << 2) >> 2] | 0) >>> 1) | 0) + j | 0;
    l = m + 1 | 0;
    if ((l | 0) == 257) break; else {
     x = m;
     m = l;
     l = x;
    }
   }
   j = j + k + (((j * 3 | 0) + 512 | 0) >>> 10) | 0;
   k = v + (p << 2) | 0;
   if (j >>> 0 >= ((c[k >> 2] | 0) + (c[v + (q << 2) >> 2] | 0) | 0) >>> 0) break;
   tg(n | 0, t | 0, 1028) | 0;
   pg(s | 0, 0, 1024) | 0;
   tg(o | 0, s | 0, 1024) | 0;
   c[a + (q * 1028 | 0) + 1024 >> 2] = 1;
   c[k >> 2] = j;
   tg(f + (p * 257 | 0) | 0, u | 0, 257) | 0;
   k = 0;
   do {
    j = e + (k << 2) | 0;
    if ((c[j >> 2] | 0) == (q | 0)) c[j >> 2] = p;
    k = k + 1 | 0;
   } while ((k | 0) != (h | 0));
   c[b >> 2] = (c[b >> 2] | 0) + -1;
   Ae(g);
   g = c[b >> 2] | 0;
   if (g >>> 0 <= 1) {
    h = g;
    break a;
   }
  }
  Ae(g);
  h = c[b >> 2] | 0;
 } while (0);
 if (!h) {
  x = 0;
  i = w;
  return x | 0;
 } else {
  j = 0;
  g = 0;
 }
 do {
  g = (c[v + (j << 2) >> 2] | 0) + g | 0;
  j = j + 1 | 0;
 } while (j >>> 0 < h >>> 0);
 x = (g + 7 | 0) >>> 3;
 i = w;
 return x | 0;
}

function vc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 c[d >> 2] = a;
 c[d + 4 >> 2] = b;
 c[d + 12 >> 2] = 1;
 c[d + 16 >> 2] = 1;
 o = d + 20 | 0;
 c[o >> 2] = b + 7 >> 3;
 n = d + 24 | 0;
 c[n >> 2] = a + 7 >> 3;
 f = d + 56 | 0;
 g = d + 60 | 0;
 b = c[g >> 2] | 0;
 a = c[f >> 2] | 0;
 e = (b - a | 0) / 24 | 0;
 if (e >>> 0 >= 3) {
  if (e >>> 0 > 3 ? (h = a + 72 | 0, (b | 0) != (h | 0)) : 0) {
   a = b;
   while (1) {
    b = a + -24 | 0;
    c[g >> 2] = b;
    e = c[b >> 2] | 0;
    f = e;
    if (e) {
     b = a + -20 | 0;
     a = c[b >> 2] | 0;
     if ((a | 0) != (e | 0)) c[b >> 2] = a + (~((a + -4 - f | 0) >>> 2) << 2);
     Ae(e);
     b = c[g >> 2] | 0;
    }
    if ((b | 0) == (h | 0)) break; else a = b;
   }
  }
 } else me(f, 3 - e | 0);
 k = d + 80 | 0;
 g = d + 84 | 0;
 b = c[g >> 2] | 0;
 a = c[k >> 2] | 0;
 e = (b - a | 0) / 40 | 0;
 if (e >>> 0 >= 3) {
  if (e >>> 0 > 3 ? (i = a + 120 | 0, (b | 0) != (i | 0)) : 0) {
   a = b;
   while (1) {
    b = a + -40 | 0;
    c[g >> 2] = b;
    e = c[a + -12 >> 2] | 0;
    f = e;
    if (e) {
     b = a + -8 | 0;
     a = c[b >> 2] | 0;
     if ((a | 0) != (e | 0)) c[b >> 2] = a + (~((a + -2 - f | 0) >>> 1) << 1);
     Ae(e);
     b = c[g >> 2] | 0;
    }
    if ((b | 0) == (i | 0)) break; else a = b;
   }
  }
 } else de(k, 3 - e | 0);
 g = c[k >> 2] | 0;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 1;
 c[g + 8 >> 2] = 1;
 c[g + 12 >> 2] = 0;
 a = c[n >> 2] | 0;
 c[g + 16 >> 2] = a;
 b = c[o >> 2] | 0;
 c[g + 20 >> 2] = b;
 f = _(a, b) | 0;
 c[g + 24 >> 2] = f;
 e = g + 28 | 0;
 f = f << 6;
 h = g + 32 | 0;
 d = c[h >> 2] | 0;
 i = c[e >> 2] | 0;
 j = d - i >> 1;
 if (f >>> 0 <= j >>> 0) {
  if (f >>> 0 < j >>> 0 ? (l = i + (f << 1) | 0, (d | 0) != (l | 0)) : 0) c[h >> 2] = d + (~((d + -2 - l | 0) >>> 1) << 1);
 } else {
  ee(e, f - j | 0);
  b = c[o >> 2] | 0;
  g = c[k >> 2] | 0;
  a = c[n >> 2] | 0;
 }
 c[g + 40 >> 2] = 1;
 c[g + 44 >> 2] = 1;
 c[g + 48 >> 2] = 1;
 c[g + 52 >> 2] = 1;
 c[g + 56 >> 2] = a;
 c[g + 60 >> 2] = b;
 f = _(a, b) | 0;
 c[g + 64 >> 2] = f;
 e = g + 68 | 0;
 f = f << 6;
 h = g + 72 | 0;
 d = c[h >> 2] | 0;
 i = c[e >> 2] | 0;
 j = d - i >> 1;
 if (f >>> 0 <= j >>> 0) {
  if (f >>> 0 < j >>> 0 ? (m = i + (f << 1) | 0, (d | 0) != (m | 0)) : 0) c[h >> 2] = d + (~((d + -2 - m | 0) >>> 1) << 1);
 } else {
  ee(e, f - j | 0);
  g = c[k >> 2] | 0;
  a = c[n >> 2] | 0;
  b = c[o >> 2] | 0;
 }
 c[g + 80 >> 2] = 2;
 c[g + 84 >> 2] = 1;
 c[g + 88 >> 2] = 1;
 c[g + 92 >> 2] = 2;
 c[g + 96 >> 2] = a;
 c[g + 100 >> 2] = b;
 f = _(a, b) | 0;
 c[g + 104 >> 2] = f;
 e = g + 108 | 0;
 f = f << 6;
 g = g + 112 | 0;
 h = c[g >> 2] | 0;
 b = c[e >> 2] | 0;
 a = h - b >> 1;
 if (f >>> 0 > a >>> 0) {
  ee(e, f - a | 0);
  return;
 }
 if (f >>> 0 >= a >>> 0) return;
 b = b + (f << 1) | 0;
 if ((h | 0) == (b | 0)) return;
 c[g >> 2] = h + (~((h + -2 - b | 0) >>> 1) << 1);
 return;
}

function Rb(a, d, e) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 E = i;
 i = i + 640 | 0;
 C = E + 512 | 0;
 D = E;
 if ((c[a + 8 >> 2] | 0) != 1) Aa(34762, 34635, 99, 34777);
 if ((c[a + 12 >> 2] | 0) != 1) Aa(34791, 34635, 100, 34777);
 A = a + 20 | 0;
 j = c[A >> 2] | 0;
 if ((j | 0) <= 0) {
  i = E;
  return;
 }
 B = a + 16 | 0;
 y = a + 28 | 0;
 z = a + 4 | 0;
 f = c[B >> 2] | 0;
 x = 0;
 a : while (1) {
  if ((f | 0) > 0) {
   w = x << 3;
   v = 0;
   do {
    if ((f | 0) <= (v | 0)) {
     f = 10;
     break a;
    }
    if ((c[A >> 2] | 0) <= (x | 0)) {
     f = 12;
     break a;
    }
    j = (_(f, x) | 0) + v << 6;
    f = C;
    j = (c[y >> 2] | 0) + (j << 1) | 0;
    k = f + 128 | 0;
    do {
     b[f >> 1] = b[j >> 1] | 0;
     f = f + 2 | 0;
     j = j + 2 | 0;
    } while ((f | 0) < (k | 0));
    f = 0;
    do {
     h[D + (f << 3) >> 3] = +(b[C + (f << 1) >> 1] | 0);
     f = f + 1 | 0;
    } while ((f | 0) != 64);
    Eb(D);
    j = v << 3;
    k = c[z >> 2] | 0;
    l = j | 1;
    m = j | 2;
    n = j | 3;
    o = j | 4;
    p = j | 5;
    q = j | 6;
    r = j | 7;
    u = 0;
    do {
     s = u + w | 0;
     t = u << 3;
     if ((s | 0) < (k | 0)) {
      f = c[a >> 2] | 0;
      if ((j | 0) < (f | 0)) g[d + ((_((_(f, s) | 0) + j | 0, e) | 0) << 2) >> 2] = +h[D + (t << 3) >> 3] + 128.0;
      f = c[a >> 2] | 0;
      if ((l | 0) < (f | 0)) g[d + ((_((_(f, s) | 0) + l | 0, e) | 0) << 2) >> 2] = +h[D + ((t | 1) << 3) >> 3] + 128.0;
      f = c[a >> 2] | 0;
      if ((m | 0) < (f | 0)) g[d + ((_((_(f, s) | 0) + m | 0, e) | 0) << 2) >> 2] = +h[D + ((t | 2) << 3) >> 3] + 128.0;
      f = c[a >> 2] | 0;
      if ((n | 0) < (f | 0)) g[d + ((_((_(f, s) | 0) + n | 0, e) | 0) << 2) >> 2] = +h[D + ((t | 3) << 3) >> 3] + 128.0;
      f = c[a >> 2] | 0;
      if ((o | 0) < (f | 0)) g[d + ((_((_(f, s) | 0) + o | 0, e) | 0) << 2) >> 2] = +h[D + ((t | 4) << 3) >> 3] + 128.0;
      f = c[a >> 2] | 0;
      if ((p | 0) < (f | 0)) g[d + ((_((_(f, s) | 0) + p | 0, e) | 0) << 2) >> 2] = +h[D + ((t | 5) << 3) >> 3] + 128.0;
      f = c[a >> 2] | 0;
      if ((q | 0) < (f | 0)) g[d + ((_((_(f, s) | 0) + q | 0, e) | 0) << 2) >> 2] = +h[D + ((t | 6) << 3) >> 3] + 128.0;
      f = c[a >> 2] | 0;
      if ((r | 0) < (f | 0)) g[d + ((_((_(f, s) | 0) + r | 0, e) | 0) << 2) >> 2] = +h[D + ((t | 7) << 3) >> 3] + 128.0;
     }
     u = u + 1 | 0;
    } while ((u | 0) != 8);
    v = v + 1 | 0;
    f = c[B >> 2] | 0;
   } while ((v | 0) < (f | 0));
   j = c[A >> 2] | 0;
  }
  x = x + 1 | 0;
  if ((x | 0) >= (j | 0)) {
   f = 22;
   break;
  }
 }
 if ((f | 0) == 10) Aa(34608, 34635, 60, 34662); else if ((f | 0) == 12) Aa(34676, 34635, 61, 34662); else if ((f | 0) == 22) {
  i = E;
  return;
 }
}

function Zb(a, d, e, f) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0.0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0.0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0;
 K = i;
 i = i + 704 | 0;
 J = K + 640 | 0;
 I = K;
 H = K + 512 | 0;
 G = f + 4 | 0;
 if (((c[a + 4 >> 2] | 0) - (c[a >> 2] | 0) >> 2 | 0) != (_(c[G >> 2] | 0, c[f >> 2] | 0) | 0)) Aa(36817, 34635, 267, 36865);
 Pb(f, d, e);
 A = f + 20 | 0;
 j = c[A >> 2] | 0;
 if ((j | 0) <= 0) {
  i = K;
  return;
 }
 B = f + 16 | 0;
 C = (e | 0) > 0;
 D = +(_(e, d) | 0);
 E = (d | 0) > 0;
 F = f + 28 | 0;
 k = c[B >> 2] | 0;
 z = 0;
 a : while (1) {
  if ((k | 0) > 0) {
   x = _(z << 3, e) | 0;
   y = 0;
   do {
    t = _(y << 3, d) | 0;
    u = c[f >> 2] | 0;
    if ((t | 0) >= (u | 0)) {
     j = 8;
     break a;
    }
    j = c[G >> 2] | 0;
    if ((x | 0) >= (j | 0)) {
     j = 11;
     break a;
    }
    v = c[a >> 2] | 0;
    w = u + -1 | 0;
    o = j + -1 | 0;
    s = 0;
    do {
     p = s << 3;
     q = (_(s, e) | 0) + x | 0;
     r = 0;
     do {
      if (C) {
       l = (_(r, d) | 0) + t | 0;
       n = 0.0;
       m = 0;
       do {
        if (E) {
         k = q + m | 0;
         k = _((o | 0) < (k | 0) ? o : k, u) | 0;
         j = 0;
         do {
          L = l + j | 0;
          n = n + +g[v + (k + ((w | 0) < (L | 0) ? w : L) << 2) >> 2];
          j = j + 1 | 0;
         } while ((j | 0) != (d | 0));
        }
        m = m + 1 | 0;
       } while ((m | 0) != (e | 0));
      } else n = 0.0;
      h[I + (r + p << 3) >> 3] = n / D;
      r = r + 1 | 0;
     } while ((r | 0) != 8);
     s = s + 1 | 0;
    } while ((s | 0) != 8);
    Db(I);
    n = +h[I >> 3] + -1024.0;
    h[I >> 3] = n;
    b[H >> 1] = ~~+kf(n);
    j = 1;
    do {
     b[H + (j << 1) >> 1] = ~~+kf(+h[I + (j << 3) >> 3]);
     j = j + 1 | 0;
    } while ((j | 0) != 64);
    j = c[B >> 2] | 0;
    if ((j | 0) <= (y | 0)) {
     j = 24;
     break a;
    }
    if ((c[A >> 2] | 0) <= (z | 0)) {
     j = 26;
     break a;
    }
    j = (_(j, z) | 0) + y << 6;
    k = (c[F >> 2] | 0) + (j << 1) | 0;
    l = H;
    m = k + 128 | 0;
    do {
     b[k >> 1] = b[l >> 1] | 0;
     k = k + 2 | 0;
     l = l + 2 | 0;
    } while ((k | 0) < (m | 0));
    Cb((c[F >> 2] | 0) + (j << 1) | 0, J);
    Sb(f, y, z, J);
    y = y + 1 | 0;
    k = c[B >> 2] | 0;
   } while ((y | 0) < (k | 0));
   j = c[A >> 2] | 0;
  }
  z = z + 1 | 0;
  if ((z | 0) >= (j | 0)) {
   j = 30;
   break;
  }
 }
 if ((j | 0) == 8) Aa(36892, 34635, 274, 36865); else if ((j | 0) == 11) Aa(36911, 34635, 275, 36865); else if ((j | 0) == 24) Aa(34608, 34635, 124, 34806); else if ((j | 0) == 26) Aa(34676, 34635, 125, 34806); else if ((j | 0) == 30) {
  i = K;
  return;
 }
}

function rc(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 32 | 0;
 p = q;
 m = c[d + 80 >> 2] | 0;
 n = (c[d + 84 >> 2] | 0) - m | 0;
 a : do switch ((n | 0) / 40 | 0 | 0) {
 case 1:
  break;
 case 3:
  {
   e = c[d + 32 >> 2] | 0;
   l = c[d + 36 >> 2] | 0;
   b : do if ((e | 0) != (l | 0)) {
    f = 0;
    g = 0;
    do {
     j = a[e >> 0] | 0;
     k = (j & 1) == 0;
     if (k) h = e + 1 | 0; else h = c[e + 8 >> 2] | 0;
     if ((a[h >> 0] | 0) == -32) {
      o = 24;
      break b;
     }
     if (k) h = e + 1 | 0; else h = c[e + 8 >> 2] | 0;
     if ((a[h >> 0] | 0) == -18) {
      if (k) h = (j & 255) >>> 1; else h = c[e + 4 >> 2] | 0;
      if (h >>> 0 > 14) {
       if (k) f = e + 1 | 0; else f = c[e + 8 >> 2] | 0;
       f = a[f + 14 >> 0] | 0;
       g = 1;
      }
     }
     e = e + 12 | 0;
    } while ((e | 0) != (l | 0));
    if (g) {
     if (!(f << 24 >> 24 != 0 & (n | 0) == 120)) {
      o = 54;
      break a;
     }
    } else o = 22;
   } else o = 22; while (0);
   if ((o | 0) == 22) if (!((c[m >> 2] | 0) != 82 ? 1 : (c[m + 40 >> 2] | 0) != 71)) {
    if (!((n | 0) == 120 ? (c[m + 80 >> 2] | 0) != 66 : 0)) {
     o = 54;
     break a;
    }
   } else o = 24;
   if ((o | 0) == 24 ? (n | 0) != 120 : 0) {
    o = 54;
    break a;
   }
   if ((((((((c[d + 12 >> 2] | 0) == 2 ? (c[d + 16 >> 2] | 0) == 2 : 0) ? (c[m + 4 >> 2] | 0) == 2 : 0) ? (c[m + 8 >> 2] | 0) == 2 : 0) ? (c[m + 44 >> 2] | 0) == 1 : 0) ? (c[m + 48 >> 2] | 0) == 1 : 0) ? (c[m + 84 >> 2] | 0) == 1 : 0) ? (c[m + 88 >> 2] | 0) == 1 : 0) break a;
   if (!((((((((c[d + 12 >> 2] | 0) == 1 ? (c[d + 16 >> 2] | 0) == 1 : 0) ? (c[m + 4 >> 2] | 0) == 1 : 0) ? (c[m + 8 >> 2] | 0) == 1 : 0) ? (c[m + 44 >> 2] | 0) == 1 : 0) ? (c[m + 48 >> 2] | 0) == 1 : 0) ? (c[m + 84 >> 2] | 0) == 1 : 0) ? (c[m + 88 >> 2] | 0) == 1 : 0)) o = 54;
   break;
  }
 default:
  o = 54;
 } while (0);
 if ((o | 0) == 54) {
  c[b >> 2] = 0;
  c[b + 4 >> 2] = 0;
  c[b + 8 >> 2] = 0;
  i = q;
  return;
 }
 Vb(p, c[d >> 2] | 0, c[d + 4 >> 2] | 0);
 Xb(p, d);
 bc(b, p, 0, 0, c[p >> 2] | 0, c[p + 4 >> 2] | 0);
 m = p + 8 | 0;
 e = c[m >> 2] | 0;
 if (!e) {
  i = q;
  return;
 }
 l = p + 12 | 0;
 f = c[l >> 2] | 0;
 if ((f | 0) != (e | 0)) {
  do {
   c[l >> 2] = f + -308;
   g = c[f + -268 >> 2] | 0;
   h = g;
   if (g) {
    j = f + -264 | 0;
    k = c[j >> 2] | 0;
    if ((k | 0) != (g | 0)) c[j >> 2] = k + (~((k + -2 - h | 0) >>> 1) << 1);
    Ae(g);
   }
   h = c[f + -280 >> 2] | 0;
   j = h;
   if (h) {
    f = f + -276 | 0;
    g = c[f >> 2] | 0;
    if ((g | 0) != (h | 0)) c[f >> 2] = g + (~((g + -2 - j | 0) >>> 1) << 1);
    Ae(h);
   }
   f = c[l >> 2] | 0;
  } while ((f | 0) != (e | 0));
  e = c[m >> 2] | 0;
 }
 Ae(e);
 i = q;
 return;
}

function Qc(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0.0, p = 0.0, q = 0, r = 0.0, s = 0.0, t = 0.0, u = 0, v = 0.0, w = 0, x = 0.0, y = 0.0, z = 0, A = 0.0, B = 0.0, C = 0.0, D = 0.0, E = 0, F = 0, G = 0.0, H = 0.0, I = 0.0, J = 0, K = 0.0;
 b = i;
 i = i + 16 | 0;
 e = b;
 g = a + 64 | 0;
 F = a + 72 | 0;
 s = +h[F >> 3];
 q = a + 8 | 0;
 I = +h[q >> 3];
 x = I - s;
 h[q >> 3] = s + I;
 d = a + 96 | 0;
 I = +h[d >> 3];
 m = a + 32 | 0;
 s = +h[m >> 3];
 A = s - I;
 s = I + s;
 z = a + 104 | 0;
 I = +h[z >> 3];
 t = x - A;
 A = x + A;
 w = a + 40 | 0;
 x = +h[w >> 3];
 K = x - I;
 x = I + x;
 I = +h[g >> 3];
 v = +h[a >> 3];
 B = v - I;
 v = I + v;
 I = B - K;
 B = K + B;
 k = a + 80 | 0;
 K = +h[k >> 3];
 f = a + 16 | 0;
 p = +h[f >> 3];
 C = p - K;
 p = K + p;
 j = a + 112 | 0;
 E = a + 120 | 0;
 K = +h[E >> 3];
 l = a + 48 | 0;
 u = a + 56 | 0;
 r = +h[u >> 3];
 D = r - K;
 r = K + r;
 K = C - D;
 D = C + D;
 J = a + 88 | 0;
 C = +h[J >> 3];
 n = a + 24 | 0;
 o = +h[n >> 3];
 H = o - C;
 o = C + o;
 C = +h[j >> 3];
 y = +h[l >> 3];
 G = y - C;
 y = C + y;
 C = H - G;
 G = H + G;
 H = (K - G) * .7071067811865476;
 h[k >> 3] = I - H;
 G = (K + G) * .7071067811865476;
 h[J >> 3] = A - G;
 h[g >> 3] = I + H;
 h[F >> 3] = G + A;
 A = (C - D) * .7071067811865476;
 h[E >> 3] = t - A;
 C = (D + C) * .7071067811865476;
 h[j >> 3] = B - C;
 h[d >> 3] = C + B;
 h[z >> 3] = A + t;
 t = v - s;
 v = s + v;
 s = p - y;
 p = y + p;
 h[a >> 3] = v + p;
 h[a + 16 >> 3] = v - p;
 p = +h[q >> 3];
 v = p - x;
 p = x + p;
 h[w >> 3] = s + v;
 h[u >> 3] = v - s;
 s = o - r;
 h[a + 48 >> 3] = t + s;
 h[a + 32 >> 3] = t - s;
 o = r + o;
 h[q >> 3] = p + o;
 h[n >> 3] = p - o;
 c[e >> 2] = c[m >> 2];
 c[e + 4 >> 2] = c[m + 4 >> 2];
 c[e + 8 >> 2] = c[m + 8 >> 2];
 c[e + 12 >> 2] = c[m + 12 >> 2];
 c[m >> 2] = c[l >> 2];
 c[m + 4 >> 2] = c[l + 4 >> 2];
 c[m + 8 >> 2] = c[l + 8 >> 2];
 c[m + 12 >> 2] = c[l + 12 >> 2];
 c[l >> 2] = c[k >> 2];
 c[l + 4 >> 2] = c[k + 4 >> 2];
 c[l + 8 >> 2] = c[k + 8 >> 2];
 c[l + 12 >> 2] = c[k + 12 >> 2];
 c[k >> 2] = c[j >> 2];
 c[k + 4 >> 2] = c[j + 4 >> 2];
 c[k + 8 >> 2] = c[j + 8 >> 2];
 c[k + 12 >> 2] = c[j + 12 >> 2];
 c[j >> 2] = c[g >> 2];
 c[j + 4 >> 2] = c[g + 4 >> 2];
 c[j + 8 >> 2] = c[g + 8 >> 2];
 c[j + 12 >> 2] = c[g + 12 >> 2];
 c[g >> 2] = c[f >> 2];
 c[g + 4 >> 2] = c[f + 4 >> 2];
 c[g + 8 >> 2] = c[f + 8 >> 2];
 c[g + 12 >> 2] = c[f + 12 >> 2];
 c[f >> 2] = c[d >> 2];
 c[f + 4 >> 2] = c[d + 4 >> 2];
 c[f + 8 >> 2] = c[d + 8 >> 2];
 c[f + 12 >> 2] = c[d + 12 >> 2];
 c[d >> 2] = c[e >> 2];
 c[d + 4 >> 2] = c[e + 4 >> 2];
 c[d + 8 >> 2] = c[e + 8 >> 2];
 c[d + 12 >> 2] = c[e + 12 >> 2];
 i = b;
 return;
}

function Vc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0;
 u = i;
 i = i + 48 | 0;
 t = u + 36 | 0;
 s = u + 24 | 0;
 r = u;
 Hb(t, b);
 Hb(s, d);
 m = a + 4 | 0;
 Nc(c[a >> 2] | 0, c[m >> 2] | 0, c[c[t >> 2] >> 2] | 0, 1.5, 0.0);
 Nc(c[a >> 2] | 0, c[m >> 2] | 0, c[c[s >> 2] >> 2] | 0, 1.5, 0.0);
 Nc(c[a >> 2] | 0, c[m >> 2] | 0, c[(c[t >> 2] | 0) + 12 >> 2] | 0, .586, 0.0);
 Nc(c[a >> 2] | 0, c[m >> 2] | 0, c[(c[s >> 2] | 0) + 12 >> 2] | 0, .586, 0.0);
 Nc(c[a >> 2] | 0, c[m >> 2] | 0, c[(c[t >> 2] | 0) + 24 >> 2] | 0, .4, 0.0);
 Nc(c[a >> 2] | 0, c[m >> 2] | 0, c[(c[s >> 2] | 0) + 24 >> 2] | 0, .4, 0.0);
 n = a + 12 | 0;
 d = c[n >> 2] | 0;
 b = c[m >> 2] | 0;
 if ((8 - d | 0) >>> 0 < b >>> 0) {
  o = a + 16 | 0;
  p = r + 8 | 0;
  q = r + 16 | 0;
  f = c[a >> 2] | 0;
  l = 0;
  do {
   if ((8 - d | 0) >>> 0 < f >>> 0) {
    k = 0;
    while (1) {
     j = c[o >> 2] | 0;
     c[r >> 2] = 0;
     c[r + 4 >> 2] = 0;
     c[r + 8 >> 2] = 0;
     c[r + 12 >> 2] = 0;
     c[r + 16 >> 2] = 0;
     c[r + 20 >> 2] = 0;
     w = f + -8 | 0;
     v = b + -8 | 0;
     Sc(w >>> 0 < k >>> 0 ? w : k, v >>> 0 < l >>> 0 ? v : l, f, b, t, s, r);
     j = ((((_(j, l) | 0) + k | 0) >>> 0) / (d >>> 0) | 0) * 3 | 0;
     b = c[e >> 2] | 0;
     g[b + (j << 2) >> 2] = +h[r >> 3];
     g[b + (j + 1 << 2) >> 2] = +h[p >> 3];
     g[b + (j + 2 << 2) >> 2] = +h[q >> 3];
     j = c[n >> 2] | 0;
     b = c[a >> 2] | 0;
     if ((k + 8 | 0) >>> 0 >= b >>> 0) {
      d = j;
      break;
     }
     f = b;
     b = c[m >> 2] | 0;
     d = j;
     k = j + k | 0;
    }
    f = b;
    b = c[m >> 2] | 0;
   }
   l = d + l | 0;
  } while ((l + 8 - d | 0) >>> 0 < b >>> 0);
 }
 b = c[s >> 2] | 0;
 if (b) {
  l = s + 4 | 0;
  d = c[l >> 2] | 0;
  if ((d | 0) != (b | 0)) {
   do {
    f = d + -12 | 0;
    c[l >> 2] = f;
    j = c[f >> 2] | 0;
    k = j;
    if (!j) d = f; else {
     d = d + -8 | 0;
     f = c[d >> 2] | 0;
     if ((f | 0) != (j | 0)) c[d >> 2] = f + (~((f + -4 - k | 0) >>> 2) << 2);
     Ae(j);
     d = c[l >> 2] | 0;
    }
   } while ((d | 0) != (b | 0));
   b = c[s >> 2] | 0;
  }
  Ae(b);
 }
 b = c[t >> 2] | 0;
 if (!b) {
  i = u;
  return;
 }
 l = t + 4 | 0;
 d = c[l >> 2] | 0;
 if ((d | 0) != (b | 0)) {
  do {
   f = d + -12 | 0;
   c[l >> 2] = f;
   j = c[f >> 2] | 0;
   k = j;
   if (!j) d = f; else {
    d = d + -8 | 0;
    f = c[d >> 2] | 0;
    if ((f | 0) != (j | 0)) c[d >> 2] = f + (~((f + -4 - k | 0) >>> 2) << 2);
    Ae(j);
    d = c[l >> 2] | 0;
   }
  } while ((d | 0) != (b | 0));
  b = c[t >> 2] | 0;
 }
 Ae(b);
 i = u;
 return;
}

function Ud(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 48 | 0;
 r = s + 28 | 0;
 m = s + 24 | 0;
 p = s + 12 | 0;
 o = s;
 Ec(r, b);
 l = b + 4 | 0;
 e = c[l >> 2] | 0;
 n = c[b >> 2] | 0;
 f = (e - n | 0) / 1028 | 0;
 c[m >> 2] = f;
 c[p >> 2] = 0;
 q = p + 4 | 0;
 c[q >> 2] = 0;
 c[p + 8 >> 2] = 0;
 do if ((e | 0) != (n | 0)) if (f >>> 0 > 1073741823) we(p); else {
  j = f << 2;
  g = ye(j) | 0;
  c[p >> 2] = g;
  h = g + (f << 2) | 0;
  c[p + 8 >> 2] = h;
  pg(g | 0, 0, j | 0) | 0;
  c[q >> 2] = h;
  h = c[l >> 2] | 0;
  j = c[b >> 2] | 0;
  break;
 } else {
  g = 0;
  h = e;
  j = e;
 } while (0);
 f = h - j | 0;
 e = ((f | 0) / 1028 | 0) * 257 | 0;
 c[o >> 2] = 0;
 n = o + 4 | 0;
 c[n >> 2] = 0;
 c[o + 8 >> 2] = 0;
 if ((h | 0) == (j | 0)) {
  e = g;
  f = 0;
 } else {
  if ((f | 0) < 0) we(o);
  f = ye(e) | 0;
  c[n >> 2] = f;
  c[o >> 2] = f;
  c[o + 8 >> 2] = f + e;
  do {
   a[f >> 0] = 0;
   f = (c[n >> 2] | 0) + 1 | 0;
   c[n >> 2] = f;
   e = e + -1 | 0;
  } while ((e | 0) != 0);
  e = c[p >> 2] | 0;
  f = c[o >> 2] | 0;
 }
 Dc(c[r >> 2] | 0, m, e, f) | 0;
 e = (c[n >> 2] | 0) - (c[o >> 2] | 0) | 0;
 f = d + 4 | 0;
 g = c[f >> 2] | 0;
 h = c[d >> 2] | 0;
 j = g - h | 0;
 if (e >>> 0 <= j >>> 0) {
  if (e >>> 0 < j >>> 0 ? (k = h + e | 0, (g | 0) != (k | 0)) : 0) c[f >> 2] = k;
 } else se(d, e - j | 0);
 if ((c[l >> 2] | 0) != (c[b >> 2] | 0)) {
  e = c[p >> 2] | 0;
  f = c[o >> 2] | 0;
  g = 0;
  do {
   tg((c[d >> 2] | 0) + (g * 257 | 0) | 0, f + ((c[e + (g << 2) >> 2] | 0) * 257 | 0) | 0, 257) | 0;
   g = g + 1 | 0;
  } while (g >>> 0 < (((c[l >> 2] | 0) - (c[b >> 2] | 0) | 0) / 1028 | 0) >>> 0);
 }
 j = c[m >> 2] | 0;
 if (!j) h = 0; else {
  k = c[r >> 2] | 0;
  e = 0;
  l = 0;
  do {
   h = 1;
   f = 136;
   g = 0;
   while (1) {
    f = (c[k + (l * 1028 | 0) + (g << 2) >> 2] | 0) == 0 ? f : f + 8 | 0;
    g = h + 1 | 0;
    if ((g | 0) == 257) break; else {
     m = h;
     h = g;
     g = m;
    }
   }
   e = (f >>> 3) + e | 0;
   l = l + 1 | 0;
  } while (l >>> 0 < j >>> 0);
  h = e;
 }
 e = c[o >> 2] | 0;
 if (e) {
  if ((c[n >> 2] | 0) != (e | 0)) c[n >> 2] = e;
  Ae(e);
 }
 e = c[p >> 2] | 0;
 f = e;
 if (e) {
  g = c[q >> 2] | 0;
  if ((g | 0) != (e | 0)) c[q >> 2] = g + (~((g + -4 - f | 0) >>> 2) << 2);
  Ae(e);
 }
 g = c[r >> 2] | 0;
 if (!g) {
  i = s;
  return h | 0;
 }
 e = r + 4 | 0;
 f = c[e >> 2] | 0;
 if ((f | 0) != (g | 0)) c[e >> 2] = f + (~(((f + -1028 - g | 0) >>> 0) / 1028 | 0) * 1028 | 0);
 Ae(g);
 i = s;
 return h | 0;
}

function mc(a, b, d, e, f, h) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 var i = 0.0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0.0, s = 0, t = 0, u = 0.0, v = 0, w = 0, x = 0.0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0.0, V = 0.0, W = 0.0, X = 0.0, Y = 0, Z = 0.0, $ = 0.0, aa = 0.0;
 if (!b) return;
 T = (a | 0) == 0;
 S = c[d >> 2] | 0;
 N = c[e >> 2] | 0;
 O = S + 12 | 0;
 P = N + 12 | 0;
 Q = S + 24 | 0;
 R = N + 24 | 0;
 M = c[f >> 2] | 0;
 L = c[h >> 2] | 0;
 H = M + 12 | 0;
 I = L + 12 | 0;
 J = M + 24 | 0;
 K = L + 24 | 0;
 d = 0;
 do if (T) d = d + 1 | 0; else {
  z = _(d, a) | 0;
  A = c[S >> 2] | 0;
  B = c[N >> 2] | 0;
  C = c[O >> 2] | 0;
  D = c[P >> 2] | 0;
  E = c[Q >> 2] | 0;
  F = c[R >> 2] | 0;
  G = (d | 0) == 0;
  d = d + 1 | 0;
  f = (d | 0) == (b | 0);
  h = c[S >> 2] | 0;
  j = c[M >> 2] | 0;
  k = c[L >> 2] | 0;
  l = c[H >> 2] | 0;
  m = c[I >> 2] | 0;
  n = c[J >> 2] | 0;
  o = c[K >> 2] | 0;
  y = 0;
  do {
   p = y + z | 0;
   q = B + (p << 2) | 0;
   r = (+g[A + (p << 2) >> 2] + +g[q >> 2]) * .5;
   s = C + (p << 2) | 0;
   t = D + (p << 2) | 0;
   u = (+g[s >> 2] + +g[t >> 2]) * .5;
   v = E + (p << 2) | 0;
   w = F + (p << 2) | 0;
   x = (+g[v >> 2] + +g[w >> 2]) * .5;
   Y = y;
   y = y + 1 | 0;
   e = (y | 0) == (a | 0);
   if ((Y | 0) != 0 ? (Y = p + -1 | 0, U = (+g[C + (Y << 2) >> 2] + +g[D + (Y << 2) >> 2]) * .5 - u, U = U * U, U > -1.0) : 0) i = U; else i = -1.0;
   if (!e ? (Y = p + 1 | 0, V = (+g[C + (Y << 2) >> 2] + +g[D + (Y << 2) >> 2]) * .5 - u, V = V * V, i < V) : 0) i = V;
   if (!G ? (Y = p - a | 0, W = (+g[C + (Y << 2) >> 2] + +g[D + (Y << 2) >> 2]) * .5 - u, W = W * W, i < W) : 0) i = W;
   if (!f ? (Y = p + a | 0, X = (+g[C + (Y << 2) >> 2] + +g[D + (Y << 2) >> 2]) * .5 - u, X = X * X, i < X) : 0) i = X;
   aa = 106.95800948271017 / (u + 106.95800948271017);
   $ = aa * 275.19165240059317 / (i + 275.19165240059317);
   Z = 18599.41286306991 / (i + 18599.41286306991);
   i = aa * 410.8995306951065 / (i + 410.8995306951065);
   r = (1.0 - $) * r;
   g[j + (p << 2) >> 2] = $ * +g[h + (p << 2) >> 2] + r;
   g[k + (p << 2) >> 2] = $ * +g[q >> 2] + r;
   u = (1.0 - Z) * u;
   g[l + (p << 2) >> 2] = Z * +g[s >> 2] + u;
   g[m + (p << 2) >> 2] = Z * +g[t >> 2] + u;
   x = (1.0 - i) * x;
   g[n + (p << 2) >> 2] = i * +g[v >> 2] + x;
   g[o + (p << 2) >> 2] = i * +g[w >> 2] + x;
  } while ((y | 0) != (a | 0));
 } while ((d | 0) != (b | 0));
 return;
}

function Td(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 j = (d | 0) == (b | 0);
 a[d + 12 >> 0] = j & 1;
 if (j) return;
 while (1) {
  h = c[d + 8 >> 2] | 0;
  g = h + 12 | 0;
  if (a[g >> 0] | 0) {
   d = 37;
   break;
  }
  j = h + 8 | 0;
  f = d;
  d = c[j >> 2] | 0;
  e = c[d >> 2] | 0;
  if ((e | 0) == (h | 0)) {
   e = c[d + 4 >> 2] | 0;
   if (!e) {
    e = f;
    i = j;
    g = j;
    f = d;
    b = d;
    d = 7;
    break;
   }
   e = e + 12 | 0;
   if (a[e >> 0] | 0) {
    e = f;
    i = j;
    g = j;
    f = d;
    b = d;
    d = 7;
    break;
   }
   a[g >> 0] = 1;
   a[d + 12 >> 0] = (d | 0) == (b | 0) & 1;
   a[e >> 0] = 1;
  } else {
   if (!e) {
    e = f;
    i = j;
    b = j;
    f = d;
    g = d;
    d = 24;
    break;
   }
   e = e + 12 | 0;
   if (a[e >> 0] | 0) {
    e = f;
    i = j;
    b = j;
    f = d;
    g = d;
    d = 24;
    break;
   }
   a[g >> 0] = 1;
   a[d + 12 >> 0] = (d | 0) == (b | 0) & 1;
   a[e >> 0] = 1;
  }
  if ((d | 0) == (b | 0)) {
   d = 37;
   break;
  }
 }
 if ((d | 0) == 7) {
  if ((c[h >> 2] | 0) == (e | 0)) d = h; else {
   j = h + 4 | 0;
   d = c[j >> 2] | 0;
   e = c[d >> 2] | 0;
   c[j >> 2] = e;
   if (!e) e = f; else {
    c[e + 8 >> 2] = h;
    e = c[i >> 2] | 0;
   }
   f = d + 8 | 0;
   c[f >> 2] = e;
   e = c[g >> 2] | 0;
   if ((c[e >> 2] | 0) == (h | 0)) c[e >> 2] = d; else c[e + 4 >> 2] = d;
   c[d >> 2] = h;
   c[i >> 2] = d;
   b = c[f >> 2] | 0;
  }
  a[d + 12 >> 0] = 1;
  a[b + 12 >> 0] = 0;
  f = c[b >> 2] | 0;
  g = f + 4 | 0;
  d = c[g >> 2] | 0;
  c[b >> 2] = d;
  if (d) c[d + 8 >> 2] = b;
  d = b + 8 | 0;
  c[f + 8 >> 2] = c[d >> 2];
  e = c[d >> 2] | 0;
  if ((c[e >> 2] | 0) == (b | 0)) c[e >> 2] = f; else c[e + 4 >> 2] = f;
  c[g >> 2] = b;
  c[d >> 2] = f;
  return;
 } else if ((d | 0) == 24) {
  if ((c[h >> 2] | 0) == (e | 0)) {
   d = c[h >> 2] | 0;
   g = d + 4 | 0;
   e = c[g >> 2] | 0;
   c[h >> 2] = e;
   if (!e) e = f; else {
    c[e + 8 >> 2] = h;
    e = c[i >> 2] | 0;
   }
   f = d + 8 | 0;
   c[f >> 2] = e;
   e = c[b >> 2] | 0;
   if ((c[e >> 2] | 0) == (h | 0)) c[e >> 2] = d; else c[e + 4 >> 2] = d;
   c[g >> 2] = h;
   c[i >> 2] = d;
   g = c[f >> 2] | 0;
  } else d = h;
  a[d + 12 >> 0] = 1;
  a[g + 12 >> 0] = 0;
  j = g + 4 | 0;
  f = c[j >> 2] | 0;
  d = c[f >> 2] | 0;
  c[j >> 2] = d;
  if (d) c[d + 8 >> 2] = g;
  d = g + 8 | 0;
  c[f + 8 >> 2] = c[d >> 2];
  e = c[d >> 2] | 0;
  if ((c[e >> 2] | 0) == (g | 0)) c[e >> 2] = f; else c[e + 4 >> 2] = f;
  c[f >> 2] = g;
  c[d >> 2] = f;
  return;
 } else if ((d | 0) == 37) return;
}

function Nb(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0.0, t = 0, u = 0, v = 0, w = 0, x = 0;
 if (((c[b + 4 >> 2] | 0) - (c[b >> 2] | 0) >> 2 | 0) != (_(d * 3 | 0, e) | 0)) Aa(36643, 36586, 334, 36679);
 o = (d + 1 | 0) / 2 | 0;
 p = (e + 1 | 0) / 2 | 0;
 f = _(o * 3 | 0, p) | 0;
 c[a >> 2] = 0;
 h = a + 4 | 0;
 c[h >> 2] = 0;
 c[a + 8 >> 2] = 0;
 do if (f) if (f >>> 0 > 1073741823) we(a); else {
  m = f << 2;
  q = ye(m) | 0;
  c[a >> 2] = q;
  n = q + (f << 2) | 0;
  c[a + 8 >> 2] = n;
  pg(q | 0, 0, m | 0) | 0;
  c[h >> 2] = n;
  break;
 } else q = 0; while (0);
 if ((e | 0) <= 0) return;
 n = (d | 0) > 0;
 l = e + -1 | 0;
 m = d + -1 | 0;
 i = c[b >> 2] | 0;
 j = (d | 0) > 2 ? o * 3 | 0 : 3;
 f = 0;
 k = 0;
 do {
  if (n) {
   a = k << 1;
   h = a | 1;
   h = _((h | 0) < (l | 0) ? h : l, d) | 0;
   a = _((a | 0) < (l | 0) ? a : l, d) | 0;
   e = f;
   b = 0;
   while (1) {
    t = b << 1;
    w = (t | 0) < (m | 0) ? t : m;
    u = (w + h | 0) * 3 | 0;
    w = (w + a | 0) * 3 | 0;
    t = t | 1;
    t = (t | 0) < (m | 0) ? t : m;
    v = (t + a | 0) * 3 | 0;
    t = (t + h | 0) * 3 | 0;
    r = q + (e << 2) | 0;
    g[r >> 2] = 0.0;
    s = +P(+(+g[i + (w << 2) >> 2] / 255.0), 2.2) + 0.0;
    g[r >> 2] = s;
    s = +P(+(+g[i + (v << 2) >> 2] / 255.0), 2.2) + s;
    g[r >> 2] = s;
    s = +P(+(+g[i + (u << 2) >> 2] / 255.0), 2.2) + s;
    g[r >> 2] = s;
    g[r >> 2] = +P(+((+P(+(+g[i + (t << 2) >> 2] / 255.0), 2.2) + s) * .25), .45454545454545453) * 255.0;
    r = e + 1 | 0;
    x = q + (r << 2) | 0;
    g[x >> 2] = 0.0;
    s = +P(+(+g[i + (w + 1 << 2) >> 2] / 255.0), 2.2) + 0.0;
    g[x >> 2] = s;
    s = +P(+(+g[i + (v + 1 << 2) >> 2] / 255.0), 2.2) + s;
    g[x >> 2] = s;
    s = +P(+(+g[i + (u + 1 << 2) >> 2] / 255.0), 2.2) + s;
    g[x >> 2] = s;
    g[x >> 2] = +P(+((+P(+(+g[i + (t + 1 << 2) >> 2] / 255.0), 2.2) + s) * .25), .45454545454545453) * 255.0;
    r = q + (r + 1 << 2) | 0;
    g[r >> 2] = 0.0;
    s = +P(+(+g[i + (w + 2 << 2) >> 2] / 255.0), 2.2) + 0.0;
    g[r >> 2] = s;
    s = +P(+(+g[i + (v + 2 << 2) >> 2] / 255.0), 2.2) + s;
    g[r >> 2] = s;
    s = +P(+(+g[i + (u + 2 << 2) >> 2] / 255.0), 2.2) + s;
    g[r >> 2] = s;
    g[r >> 2] = +P(+((+P(+(+g[i + (t + 2 << 2) >> 2] / 255.0), 2.2) + s) * .25), .45454545454545453) * 255.0;
    b = b + 1 | 0;
    if ((b | 0) >= (o | 0)) break; else e = e + 3 | 0;
   }
   f = j + f | 0;
  }
  k = k + 1 | 0;
 } while ((k | 0) < (p | 0));
 return;
}

function Pc(b, c, d, e, f, g, i, j) {
 b = +b;
 c = +c;
 d = +d;
 e = +e;
 f = +f;
 g = +g;
 i = +i;
 j = j | 0;
 var k = 0, l = 0.0, m = 0.0, n = 0.0;
 n = (c * .0812519812628 + d) * 7.34905756986;
 m = b * 6.64482198135;
 if ((a[872] | 0) == 0 ? (ya(872) | 0) != 0 : 0) {
  h[88] = 0.0;
  h[89] = 5.2511644570349185;
  h[90] = 10.502328914069837;
  h[91] = 15.753493371104756;
  h[92] = 21.004657828139674;
  h[93] = 26.25582228517459;
  h[94] = 31.50698674220951;
  h[95] = 36.75815119924443;
  h[96] = 42.00931565627935;
  h[97] = 47.260480113314266;
  h[98] = 52.51164457034918;
  h[99] = 57.7628090273841;
  h[100] = 63.01397348441902;
  h[101] = 68.26513794145394;
  h[102] = 73.51630239848886;
  h[103] = 78.76746685552378;
  h[104] = 84.0186313125587;
  h[105] = 89.26979576959361;
  h[106] = 94.52096022662853;
  h[107] = 99.77212468366345;
  h[108] = 105.02328914069837;
  Da(872);
 }
 b = c * .837846224276;
 d = +N(+b);
 if (!(d < 1.0e4)) Aa(40408, 36021, 303, 40419);
 k = ~~d;
 if ((k | 0) < 20) {
  l = +h[704 + (k << 3) >> 3];
  d = l + (d - +(k | 0)) * (+h[704 + (k + 1 << 3) >> 3] - l);
 } else d = +h[108];
 l = b < 0.0 ? -d : d;
 if (e == 0.0 & f == 0.0 & g == 0.0) {
  h[j >> 3] = m * (m * i) + +h[j >> 3];
  k = j + 8 | 0;
  h[k >> 3] = l * (l * i) + +h[k >> 3];
  j = j + 16 | 0;
  h[j >> 3] = n * (n * i) + +h[j >> 3];
  return;
 }
 g = (f * .0812519812628 + g) * 7.34905756986;
 c = e * 6.64482198135;
 if ((a[872] | 0) == 0 ? (ya(872) | 0) != 0 : 0) {
  h[88] = 0.0;
  h[89] = 5.2511644570349185;
  h[90] = 10.502328914069837;
  h[91] = 15.753493371104756;
  h[92] = 21.004657828139674;
  h[93] = 26.25582228517459;
  h[94] = 31.50698674220951;
  h[95] = 36.75815119924443;
  h[96] = 42.00931565627935;
  h[97] = 47.260480113314266;
  h[98] = 52.51164457034918;
  h[99] = 57.7628090273841;
  h[100] = 63.01397348441902;
  h[101] = 68.26513794145394;
  h[102] = 73.51630239848886;
  h[103] = 78.76746685552378;
  h[104] = 84.0186313125587;
  h[105] = 89.26979576959361;
  h[106] = 94.52096022662853;
  h[107] = 99.77212468366345;
  h[108] = 105.02328914069837;
  Da(872);
 }
 b = f * .837846224276;
 d = +N(+b);
 if (!(d < 1.0e4)) Aa(40408, 36021, 303, 40419);
 k = ~~d;
 if ((k | 0) < 20) {
  f = +h[704 + (k << 3) >> 3];
  d = f + (d - +(k | 0)) * (+h[704 + (k + 1 << 3) >> 3] - f);
 } else d = +h[108];
 f = m - c;
 m = l - (b < 0.0 ? -d : d);
 n = n - g;
 h[j >> 3] = f * (f * i) + +h[j >> 3];
 k = j + 8 | 0;
 h[k >> 3] = +h[k >> 3] + m * (m * i);
 j = j + 16 | 0;
 h[j >> 3] = n * (n * i) + +h[j >> 3];
 return;
}

function de(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 m = a + 8 | 0;
 g = c[m >> 2] | 0;
 n = a + 4 | 0;
 f = c[n >> 2] | 0;
 d = f;
 if (((g - d | 0) / 40 | 0) >>> 0 >= b >>> 0) {
  d = b;
  e = f;
  while (1) {
   c[e >> 2] = 0;
   c[e + 4 >> 2] = 1;
   c[e + 8 >> 2] = 1;
   c[e + 12 >> 2] = 0;
   c[e + 16 >> 2] = 0;
   c[e + 20 >> 2] = 0;
   c[e + 28 >> 2] = 0;
   c[e + 32 >> 2] = 0;
   c[e + 36 >> 2] = 0;
   d = d + -1 | 0;
   if (!d) break; else e = e + 40 | 0;
  }
  c[n >> 2] = f + (b * 40 | 0);
  return;
 }
 l = c[a >> 2] | 0;
 e = ((d - l | 0) / 40 | 0) + b | 0;
 if (e >>> 0 > 107374182) we(a);
 j = l;
 d = (g - j | 0) / 40 | 0;
 if (d >>> 0 < 53687091) {
  d = d << 1;
  d = d >>> 0 < e >>> 0 ? e : d;
  f = c[n >> 2] | 0;
  e = (f - j | 0) / 40 | 0;
  if (!d) {
   g = 0;
   k = 0;
   i = e;
  } else h = 9;
 } else {
  f = c[n >> 2] | 0;
  d = 107374182;
  e = (f - j | 0) / 40 | 0;
  h = 9;
 }
 if ((h | 0) == 9) {
  g = d;
  k = ye(d * 40 | 0) | 0;
  i = e;
 }
 e = k + (i * 40 | 0) | 0;
 h = k + (g * 40 | 0) | 0;
 d = b;
 g = e;
 while (1) {
  c[g >> 2] = 0;
  c[g + 4 >> 2] = 1;
  c[g + 8 >> 2] = 1;
  c[g + 12 >> 2] = 0;
  c[g + 16 >> 2] = 0;
  c[g + 20 >> 2] = 0;
  c[g + 28 >> 2] = 0;
  c[g + 32 >> 2] = 0;
  c[g + 36 >> 2] = 0;
  d = d + -1 | 0;
  if (!d) break; else g = g + 40 | 0;
 }
 d = e;
 g = k + ((i + b | 0) * 40 | 0) | 0;
 if ((f | 0) == (l | 0)) e = a; else {
  do {
   k = e + -40 | 0;
   j = f;
   f = f + -40 | 0;
   c[k >> 2] = c[f >> 2];
   c[k + 4 >> 2] = c[f + 4 >> 2];
   c[k + 8 >> 2] = c[f + 8 >> 2];
   c[k + 12 >> 2] = c[f + 12 >> 2];
   c[k + 16 >> 2] = c[f + 16 >> 2];
   c[k + 20 >> 2] = c[f + 20 >> 2];
   c[k + 24 >> 2] = c[f + 24 >> 2];
   k = e + -12 | 0;
   b = j + -12 | 0;
   c[k >> 2] = 0;
   i = e + -8 | 0;
   c[i >> 2] = 0;
   c[e + -4 >> 2] = 0;
   c[k >> 2] = c[b >> 2];
   k = j + -8 | 0;
   c[i >> 2] = c[k >> 2];
   j = j + -4 | 0;
   c[e + -4 >> 2] = c[j >> 2];
   c[j >> 2] = 0;
   c[k >> 2] = 0;
   c[b >> 2] = 0;
   e = d + -40 | 0;
   d = e;
  } while ((f | 0) != (l | 0));
  e = a;
  j = c[a >> 2] | 0;
 }
 c[e >> 2] = d;
 d = c[n >> 2] | 0;
 c[n >> 2] = g;
 c[m >> 2] = h;
 i = j;
 if ((d | 0) != (i | 0)) do {
  e = c[d + -12 >> 2] | 0;
  f = e;
  if (e) {
   g = d + -8 | 0;
   h = c[g >> 2] | 0;
   if ((h | 0) != (e | 0)) c[g >> 2] = h + (~((h + -2 - f | 0) >>> 1) << 1);
   Ae(e);
  }
  d = d + -40 | 0;
 } while ((d | 0) != (i | 0));
 if (!j) return;
 Ae(j);
 return;
}

function Nc(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = +e;
 f = +f;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0.0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0.0;
 x = i;
 i = i + 48 | 0;
 v = x + 24 | 0;
 u = x + 12 | 0;
 r = x;
 n = -1.0 / (e * 2.0 * e);
 m = ~~(+N(+e) * 2.25);
 m = (m | 0) > 1 ? m : 1;
 o = m << 1 | 1;
 c[v >> 2] = 0;
 w = v + 4 | 0;
 c[w >> 2] = 0;
 c[v + 8 >> 2] = 0;
 if (o >>> 0 > 1073741823) we(v);
 t = o << 2;
 j = ye(t) | 0;
 c[v >> 2] = j;
 h = j + (o << 2) | 0;
 c[v + 8 >> 2] = h;
 pg(j | 0, 0, t | 0) | 0;
 c[w >> 2] = h;
 h = 0 - m | 0;
 if ((m | 0) >= (h | 0)) while (1) {
  y = +(h | 0);
  g[j + (h + m << 2) >> 2] = +X(+(y * (n * y)));
  if ((h | 0) < (m | 0)) h = h + 1 | 0; else break;
 }
 p = ~~(e / 3.0);
 p = (p | 0) > 1 ? p : 1;
 q = ((a + -1 + p | 0) >>> 0) / (p >>> 0) | 0;
 h = _(q, b) | 0;
 c[u >> 2] = 0;
 t = u + 4 | 0;
 c[t >> 2] = 0;
 c[u + 8 >> 2] = 0;
 do if (h) if (h >>> 0 > 1073741823) we(u); else {
  j = h << 2;
  k = ye(j) | 0;
  c[u >> 2] = k;
  s = k + (h << 2) | 0;
  c[u + 8 >> 2] = s;
  pg(k | 0, 0, j | 0) | 0;
  c[t >> 2] = s;
  break;
 } else k = 0; while (0);
 h = _(((b + -1 + p | 0) >>> 0) / (p >>> 0) | 0, q) | 0;
 c[r >> 2] = 0;
 s = r + 4 | 0;
 c[s >> 2] = 0;
 c[r + 8 >> 2] = 0;
 do if (h) if (h >>> 0 > 1073741823) we(r); else {
  k = h << 2;
  j = ye(k) | 0;
  c[r >> 2] = j;
  l = j + (h << 2) | 0;
  c[r + 8 >> 2] = l;
  pg(j | 0, 0, k | 0) | 0;
  c[s >> 2] = l;
  l = c[u >> 2] | 0;
  break;
 } else l = k; while (0);
 Oc(a, b, p, o, m, c[v >> 2] | 0, d, f, l);
 Oc(b, q, p, o, m, c[v >> 2] | 0, c[u >> 2] | 0, f, c[r >> 2] | 0);
 if (!b) h = c[r >> 2] | 0; else {
  o = (a | 0) == 0;
  h = c[r >> 2] | 0;
  m = 0;
  do {
   if (!o) {
    j = _((m | 0) / (p | 0) | 0, q) | 0;
    k = _(m, a) | 0;
    l = 0;
    do {
     c[d + (l + k << 2) >> 2] = c[h + (j + ((l | 0) / (p | 0) | 0) << 2) >> 2];
     l = l + 1 | 0;
    } while ((l | 0) != (a | 0));
   }
   m = m + 1 | 0;
  } while ((m | 0) != (b | 0));
 }
 j = h;
 if (h) {
  k = c[s >> 2] | 0;
  if ((k | 0) != (h | 0)) c[s >> 2] = k + (~((k + -4 - j | 0) >>> 2) << 2);
  Ae(h);
 }
 h = c[u >> 2] | 0;
 j = h;
 if (h) {
  k = c[t >> 2] | 0;
  if ((k | 0) != (h | 0)) c[t >> 2] = k + (~((k + -4 - j | 0) >>> 2) << 2);
  Ae(h);
 }
 h = c[v >> 2] | 0;
 if (!h) {
  i = x;
  return;
 }
 j = c[w >> 2] | 0;
 if ((j | 0) != (h | 0)) c[w >> 2] = j + (~((j + -4 - h | 0) >>> 2) << 2);
 Ae(h);
 i = x;
 return;
}

function rd(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 f = c[b >> 2] | 0;
 m = c[b + 4 >> 2] | 0;
 i = (c[d + 4 >> 2] | 0) - m + ((c[d >> 2] | 0) - f << 3) | 0;
 if ((i | 0) <= 0) {
  b = e + 4 | 0;
  e = c[e >> 2] | 0;
  c[a >> 2] = e;
  a = a + 4 | 0;
  e = c[b >> 2] | 0;
  c[a >> 2] = e;
  return;
 }
 if (!m) {
  d = e + 4 | 0;
  l = d;
  d = c[d >> 2] | 0;
 } else {
  g = 32 - m | 0;
  n = (i | 0) < (g | 0) ? i : g;
  g = -1 >>> (g - n | 0) & -1 << m & c[f >> 2];
  l = e + 4 | 0;
  k = c[l >> 2] | 0;
  d = 32 - k | 0;
  h = d >>> 0 < n >>> 0 ? d : n;
  j = c[e >> 2] | 0;
  k = c[j >> 2] & ~(-1 >>> (d - h | 0) & -1 << k);
  c[j >> 2] = k;
  d = c[l >> 2] | 0;
  c[j >> 2] = k | (d >>> 0 > m >>> 0 ? g << d - m : g >>> (m - d | 0));
  d = (c[l >> 2] | 0) + h | 0;
  j = j + (d >>> 5 << 2) | 0;
  c[e >> 2] = j;
  d = d & 31;
  c[l >> 2] = d;
  k = n - h | 0;
  if ((k | 0) > 0) {
   c[j >> 2] = c[j >> 2] & ~(-1 >>> (32 - k | 0)) | g >>> (m + h | 0);
   c[l >> 2] = k;
   d = k;
  }
  f = f + 4 | 0;
  c[b >> 2] = f;
  i = i - n | 0;
 }
 p = 32 - d | 0;
 g = -1 << d;
 if (i >>> 0 > 31) {
  h = ~g;
  d = c[e >> 2] | 0;
  m = i + -32 | 0;
  k = m >>> 5;
  j = k + 1 | 0;
  k = m - (k << 5) | 0;
  m = f;
  n = c[d >> 2] | 0;
  o = d;
  while (1) {
   q = c[m >> 2] | 0;
   r = n & h;
   c[o >> 2] = r;
   c[o >> 2] = r | q << c[l >> 2];
   o = o + 4 | 0;
   n = c[o >> 2] & g | q >>> p;
   c[o >> 2] = n;
   i = i + -32 | 0;
   if (i >>> 0 <= 31) break; else m = m + 4 | 0;
  }
  f = f + (j << 2) | 0;
  c[b >> 2] = f;
  c[e >> 2] = d + (j << 2);
  i = k;
 }
 if ((i | 0) <= 0) {
  q = l;
  r = c[e >> 2] | 0;
  c[a >> 2] = r;
  r = a + 4 | 0;
  q = c[q >> 2] | 0;
  c[r >> 2] = q;
  return;
 }
 g = c[f >> 2] & -1 >>> (32 - i | 0);
 h = (p | 0) < (i | 0) ? p : i;
 d = c[e >> 2] | 0;
 f = c[d >> 2] & ~(-1 << c[l >> 2] & -1 >>> (p - h | 0));
 c[d >> 2] = f;
 c[d >> 2] = f | g << c[l >> 2];
 f = (c[l >> 2] | 0) + h | 0;
 d = d + (f >>> 5 << 2) | 0;
 c[e >> 2] = d;
 c[l >> 2] = f & 31;
 f = i - h | 0;
 if ((f | 0) <= 0) {
  q = l;
  r = c[e >> 2] | 0;
  c[a >> 2] = r;
  r = a + 4 | 0;
  q = c[q >> 2] | 0;
  c[r >> 2] = q;
  return;
 }
 c[d >> 2] = c[d >> 2] & ~(-1 >>> (32 - f | 0)) | g >>> h;
 c[l >> 2] = f;
 q = l;
 r = c[e >> 2] | 0;
 c[a >> 2] = r;
 r = a + 4 | 0;
 q = c[q >> 2] | 0;
 c[r >> 2] = q;
 return;
}

function me(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 m = b + 8 | 0;
 g = c[m >> 2] | 0;
 n = b + 4 | 0;
 e = c[n >> 2] | 0;
 f = e;
 if (((g - f | 0) / 24 | 0) >>> 0 >= d >>> 0) {
  do {
   b = ye(256) | 0;
   c[e >> 2] = b;
   m = b + 256 | 0;
   c[e + 8 >> 2] = m;
   pg(b | 0, 0, 256) | 0;
   c[e + 4 >> 2] = m;
   c[e + 12 >> 2] = 0;
   c[e + 16 >> 2] = 0;
   a[e + 20 >> 0] = 1;
   e = (c[n >> 2] | 0) + 24 | 0;
   c[n >> 2] = e;
   d = d + -1 | 0;
  } while ((d | 0) != 0);
  return;
 }
 e = c[b >> 2] | 0;
 f = ((f - e | 0) / 24 | 0) + d | 0;
 if (f >>> 0 > 178956970) we(b);
 h = e;
 e = (g - h | 0) / 24 | 0;
 if (e >>> 0 < 89478485) {
  e = e << 1;
  e = e >>> 0 < f >>> 0 ? f : e;
  f = ((c[n >> 2] | 0) - h | 0) / 24 | 0;
  if (!e) {
   h = 0;
   g = 0;
   e = f;
  } else i = 8;
 } else {
  e = 178956970;
  f = ((c[n >> 2] | 0) - h | 0) / 24 | 0;
  i = 8;
 }
 if ((i | 0) == 8) {
  h = e;
  g = ye(e * 24 | 0) | 0;
  e = f;
 }
 i = g + (e * 24 | 0) | 0;
 j = i;
 l = g + (h * 24 | 0) | 0;
 f = i;
 e = j;
 do {
  h = ye(256) | 0;
  c[f >> 2] = h;
  k = h + 256 | 0;
  c[f + 8 >> 2] = k;
  pg(h | 0, 0, 256) | 0;
  c[f + 4 >> 2] = k;
  c[f + 12 >> 2] = 0;
  c[f + 16 >> 2] = 0;
  a[f + 20 >> 0] = 1;
  f = e + 24 | 0;
  e = f;
  d = d + -1 | 0;
 } while ((d | 0) != 0);
 k = e;
 h = c[b >> 2] | 0;
 e = c[n >> 2] | 0;
 if ((e | 0) == (h | 0)) {
  f = b;
  g = n;
  d = j;
  j = h;
 } else {
  f = i;
  d = j;
  do {
   j = f + -24 | 0;
   i = e;
   e = e + -24 | 0;
   c[j >> 2] = 0;
   g = f + -20 | 0;
   c[g >> 2] = 0;
   c[f + -16 >> 2] = 0;
   c[j >> 2] = c[e >> 2];
   j = i + -20 | 0;
   c[g >> 2] = c[j >> 2];
   g = i + -16 | 0;
   c[f + -16 >> 2] = c[g >> 2];
   c[g >> 2] = 0;
   c[j >> 2] = 0;
   c[e >> 2] = 0;
   j = f + -12 | 0;
   i = i + -12 | 0;
   c[j >> 2] = c[i >> 2];
   c[j + 4 >> 2] = c[i + 4 >> 2];
   a[j + 8 >> 0] = a[i + 8 >> 0] | 0;
   f = d + -24 | 0;
   d = f;
  } while ((e | 0) != (h | 0));
  e = d;
  f = b;
  g = n;
  d = e;
  j = c[b >> 2] | 0;
  e = c[n >> 2] | 0;
 }
 c[f >> 2] = d;
 c[g >> 2] = k;
 c[m >> 2] = l;
 i = j;
 if ((e | 0) != (i | 0)) do {
  d = e;
  e = e + -24 | 0;
  g = c[e >> 2] | 0;
  h = g;
  if (g) {
   d = d + -20 | 0;
   f = c[d >> 2] | 0;
   if ((f | 0) != (g | 0)) c[d >> 2] = f + (~((f + -4 - h | 0) >>> 2) << 2);
   Ae(g);
  }
 } while ((e | 0) != (i | 0));
 if (!j) return;
 Ae(j);
 return;
}

function yc(d, e, f, g, h) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 t = i;
 i = i + 80 | 0;
 q = t;
 r = (f | 0) < 17;
 s = 1;
 a : while (1) {
  j = e;
  l = 0;
  b : while (1) {
   do {
    if (!j) break b;
    j = j + -1 | 0;
    k = c[d + (j << 2) >> 2] | 0;
   } while ((k | 0) == 0);
   o = qg(j | 0, 0, 48) | 0;
   p = g + (l << 3) | 0;
   c[p >> 2] = o | (k >>> 0 < s >>> 0 ? s : k);
   c[p + 4 >> 2] = C | 65535;
   l = l + 1 | 0;
  }
  if ((l | 0) == 1) {
   j = 8;
   break;
  }
  j = g + (l << 3) | 0;
  c[q >> 2] = 1;
  oe(g, j, q);
  c[j >> 2] = -1;
  c[j + 4 >> 2] = -1;
  j = l + 1 | 0;
  k = g + (j << 3) | 0;
  c[k >> 2] = -1;
  c[k + 4 >> 2] = -1;
  k = l + -1 | 0;
  if (k) {
   o = l << 1;
   p = 0;
   while (1) {
    v = (c[g + (p << 3) >> 2] | 0) >>> 0 > (c[g + (j << 3) >> 2] | 0) >>> 0;
    n = v & 1;
    m = (n ^ 1) + p | 0;
    n = n + j | 0;
    v = v ? j : p;
    u = (c[g + (m << 3) >> 2] | 0) >>> 0 > (c[g + (n << 3) >> 2] | 0) >>> 0;
    j = u & 1;
    u = u ? n : m;
    p = o - k | 0;
    c[g + (p << 3) >> 2] = (c[g + (u << 3) >> 2] | 0) + (c[g + (v << 3) >> 2] | 0);
    b[g + (p << 3) + 4 >> 1] = v;
    b[g + (p << 3) + 6 >> 1] = u;
    p = g + (p + 1 << 3) | 0;
    c[p >> 2] = -1;
    c[p + 4 >> 2] = -1;
    k = k + -1 | 0;
    if (!k) break; else {
     p = (j ^ 1) + m | 0;
     j = j + n | 0;
    }
   }
  }
  if (!r) {
   j = 13;
   break;
  }
  c[q >> 2] = -1;
  k = 0;
  m = (l << 1) + -1 | 0;
  while (1) {
   j = b[g + (m << 3) + 4 >> 1] | 0;
   if (j << 16 >> 16 > -1) {
    l = k + 1 | 0;
    if ((k | 0) >= (f | 0)) break;
    c[q + (l << 2) >> 2] = b[g + (m << 3) + 6 >> 1];
    k = l;
    m = j << 16 >> 16;
    continue;
   }
   a[h + (b[g + (m << 3) + 6 >> 1] | 0) >> 0] = k;
   if ((k | 0) <= -1) {
    j = 23;
    break a;
   }
   while (1) {
    j = q + (k << 2) | 0;
    l = c[j >> 2] | 0;
    if ((l | 0) != -1) break;
    if ((k | 0) > 0) k = k + -1 | 0; else {
     j = 23;
     break a;
    }
   }
   if ((k | 0) < 0) {
    j = 23;
    break a;
   }
   c[j >> 2] = -1;
   m = l;
  }
  s = s << 1;
 }
 if ((j | 0) == 8) {
  a[h + (b[g + 6 >> 1] | 0) >> 0] = 1;
  i = t;
  return;
 } else if ((j | 0) == 13) Aa(35706, 35722, 30, 35751); else if ((j | 0) == 23) {
  i = t;
  return;
 }
}

function hc(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 A = i;
 i = i + 32 | 0;
 B = A;
 v = A + 8 | 0;
 c[b >> 2] = 0;
 w = b + 4 | 0;
 c[w >> 2] = 0;
 c[b + 8 >> 2] = 0;
 n = f + 4 | 0;
 wd(b, ((c[n >> 2] | 0) - (c[f >> 2] | 0) | 0) / 12 | 0);
 f = c[f >> 2] | 0;
 n = c[n >> 2] | 0;
 if ((f | 0) == (n | 0)) {
  i = A;
  return;
 }
 o = v + 4 | 0;
 p = v + 8 | 0;
 q = (d << 2) + 95 | 0;
 m = q & -64;
 m = (q & 1984 | 0) == 0 ? m + 64 | 0 : m;
 q = v + 12 | 0;
 r = (_(m, e) | 0) + 64 | 0;
 s = v + 16 | 0;
 t = b + 8 | 0;
 u = v + 12 | 0;
 l = f;
 a : while (1) {
  c[v >> 2] = d;
  c[o >> 2] = e;
  c[p >> 2] = m;
  f = eg(r) | 0;
  if (!f) f = 0; else {
   g = f;
   if (g & 3) {
    h = 5;
    break;
   }
   k = 64 - (g & 63) | 0;
   j = f + (k + -4) | 0;
   a[j >> 0] = f;
   a[j + 1 >> 0] = f >> 8;
   a[j + 2 >> 0] = f >> 16;
   a[j + 3 >> 0] = f >> 24;
   f = f + k | 0;
  }
  c[q >> 2] = f;
  c[s >> 2] = 10;
  g = c[w >> 2] | 0;
  if (g >>> 0 >= (c[t >> 2] | 0) >>> 0) {
   ie(b, v);
   f = c[u >> 2] | 0;
   c[u >> 2] = 0;
   if (f) jb[c[s >> 2] & 15](f);
  } else {
   c[g >> 2] = d;
   c[g + 4 >> 2] = e;
   c[g + 8 >> 2] = m;
   c[g + 12 >> 2] = f;
   c[g + 16 >> 2] = 10;
   c[w >> 2] = g + 20;
   c[u >> 2] = 0;
  }
  f = c[w >> 2] | 0;
  h = c[f + -20 >> 2] | 0;
  j = f + -16 | 0;
  k = c[j >> 2] | 0;
  g = c[l >> 2] | 0;
  if (((c[l + 4 >> 2] | 0) - g >> 2 | 0) != (_(k, h) | 0)) {
   h = 14;
   break;
  }
  if ((k | 0) != 0 ? (x = f + -8 | 0, y = f + -12 | 0, z = h << 2, tg(c[x >> 2] | 0, g | 0, z | 0) | 0, k >>> 0 > 1) : 0) {
   g = 1;
   do {
    f = c[j >> 2] | 0;
    if (f >>> 0 <= g >>> 0) {
     h = 15;
     break a;
    }
    f = (c[l >> 2] | 0) + ((_(g, h) | 0) << 2) | 0;
    tg((c[x >> 2] | 0) + (_(c[y >> 2] | 0, g) | 0) | 0, f | 0, z | 0) | 0;
    g = g + 1 | 0;
   } while (g >>> 0 < k >>> 0);
  }
  l = l + 12 | 0;
  if ((l | 0) == (n | 0)) {
   h = 19;
   break;
  }
 }
 if ((h | 0) == 5) Aa(35988, 36021, 59, 36051); else if ((h | 0) == 14) Aa(40592, 40505, 361, 40621); else if ((h | 0) == 15) {
  c[B >> 2] = g;
  c[B + 4 >> 2] = f;
  Df(40454, B) | 0;
  xa();
 } else if ((h | 0) == 19) {
  i = A;
  return;
 }
}

function yd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 l = b + 4 | 0;
 e = c[b >> 2] | 0;
 g = ((c[l >> 2] | 0) - e >> 5) + 1 | 0;
 if (g >>> 0 > 134217727) we(b);
 m = b + 8 | 0;
 f = (c[m >> 2] | 0) - e | 0;
 if (f >> 5 >>> 0 < 67108863) {
  f = f >> 4;
  f = f >>> 0 < g >>> 0 ? g : f;
  e = (c[l >> 2] | 0) - e >> 5;
  if (!f) {
   h = 0;
   i = 0;
  } else j = 6;
 } else {
  f = 134217727;
  e = (c[l >> 2] | 0) - e >> 5;
  j = 6;
 }
 if ((j | 0) == 6) {
  h = f;
  i = ye(f << 5) | 0;
 }
 g = i + (e << 5) | 0;
 f = g;
 k = i + (h << 5) | 0;
 zd(g, d);
 zd(i + (e << 5) + 12 | 0, d + 12 | 0);
 j = i + (e << 5) + 24 | 0;
 d = d + 24 | 0;
 c[j >> 2] = c[d >> 2];
 a[j + 4 >> 0] = a[d + 4 >> 0] | 0;
 j = i + (e + 1 << 5) | 0;
 i = c[b >> 2] | 0;
 e = c[l >> 2] | 0;
 if ((e | 0) == (i | 0)) {
  g = b;
  h = l;
  b = i;
 } else {
  do {
   n = g + -32 | 0;
   h = e;
   e = e + -32 | 0;
   c[n >> 2] = 0;
   d = g + -28 | 0;
   c[d >> 2] = 0;
   c[g + -24 >> 2] = 0;
   c[n >> 2] = c[e >> 2];
   n = h + -28 | 0;
   c[d >> 2] = c[n >> 2];
   d = h + -24 | 0;
   c[g + -24 >> 2] = c[d >> 2];
   c[d >> 2] = 0;
   c[n >> 2] = 0;
   c[e >> 2] = 0;
   n = g + -20 | 0;
   d = h + -20 | 0;
   c[n >> 2] = 0;
   o = g + -16 | 0;
   c[o >> 2] = 0;
   c[g + -12 >> 2] = 0;
   c[n >> 2] = c[d >> 2];
   n = h + -16 | 0;
   c[o >> 2] = c[n >> 2];
   o = h + -12 | 0;
   c[g + -12 >> 2] = c[o >> 2];
   c[o >> 2] = 0;
   c[n >> 2] = 0;
   c[d >> 2] = 0;
   d = g + -8 | 0;
   h = h + -8 | 0;
   c[d >> 2] = c[h >> 2];
   a[d + 4 >> 0] = a[h + 4 >> 0] | 0;
   g = f + -32 | 0;
   f = g;
  } while ((e | 0) != (i | 0));
  e = f;
  g = b;
  h = l;
  f = e;
  b = c[b >> 2] | 0;
  e = c[l >> 2] | 0;
 }
 c[g >> 2] = f;
 c[h >> 2] = j;
 c[m >> 2] = k;
 d = b;
 if ((e | 0) != (d | 0)) do {
  j = e;
  e = e + -32 | 0;
  f = c[j + -20 >> 2] | 0;
  g = f;
  if (f) {
   h = j + -16 | 0;
   i = c[h >> 2] | 0;
   if ((i | 0) != (f | 0)) c[h >> 2] = i + (~((i + -4 - g | 0) >>> 2) << 2);
   Ae(f);
  }
  h = c[e >> 2] | 0;
  i = h;
  if (h) {
   f = j + -28 | 0;
   g = c[f >> 2] | 0;
   if ((g | 0) != (h | 0)) c[f >> 2] = g + (~((g + -4 - i | 0) >>> 2) << 2);
   Ae(h);
  }
 } while ((e | 0) != (d | 0));
 if (!b) return;
 Ae(b);
 return;
}

function Pb(a, d, e) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 32 | 0;
 o = r + 12 | 0;
 q = r;
 c[a + 8 >> 2] = d;
 c[a + 12 >> 2] = e;
 l = d << 3;
 l = ((c[a >> 2] | 0) + -1 + l | 0) / (l | 0) | 0;
 c[a + 16 >> 2] = l;
 p = a + 4 | 0;
 d = e << 3;
 d = ((c[p >> 2] | 0) + -1 + d | 0) / (d | 0) | 0;
 c[a + 20 >> 2] = d;
 d = _(l, d) | 0;
 c[a + 24 >> 2] = d;
 l = a + 28 | 0;
 e = d << 6;
 c[o >> 2] = 0;
 m = o + 4 | 0;
 c[m >> 2] = 0;
 c[o + 8 >> 2] = 0;
 do if (d) if ((d | 0) < 0) we(o); else {
  j = d << 7;
  k = ye(j) | 0;
  c[o >> 2] = k;
  n = k + (e << 1) | 0;
  c[o + 8 >> 2] = n;
  pg(k | 0, 0, j | 0) | 0;
  c[m >> 2] = n;
  break;
 } else {
  n = 0;
  k = 0;
 } while (0);
 e = c[l >> 2] | 0;
 f = e;
 j = a + 32 | 0;
 if (!e) {
  g = a + 36 | 0;
  h = o + 8 | 0;
  e = k;
  f = n;
  d = n;
 } else {
  d = c[j >> 2] | 0;
  if ((d | 0) != (e | 0)) c[j >> 2] = d + (~((d + -2 - f | 0) >>> 1) << 1);
  Ae(e);
  g = a + 36 | 0;
  c[g >> 2] = 0;
  c[j >> 2] = 0;
  c[l >> 2] = 0;
  d = o + 8 | 0;
  h = d;
  e = c[o >> 2] | 0;
  f = c[m >> 2] | 0;
  d = c[d >> 2] | 0;
 }
 c[l >> 2] = e;
 c[j >> 2] = f;
 c[g >> 2] = d;
 c[h >> 2] = 0;
 c[m >> 2] = 0;
 c[o >> 2] = 0;
 m = a + 40 | 0;
 d = _(c[p >> 2] | 0, c[a >> 2] | 0) | 0;
 c[q >> 2] = 0;
 l = q + 4 | 0;
 c[l >> 2] = 0;
 c[q + 8 >> 2] = 0;
 if (!d) {
  g = 0;
  h = 0;
 } else {
  if ((d | 0) < 0) we(q);
  e = ye(d << 1) | 0;
  c[l >> 2] = e;
  c[q >> 2] = e;
  f = e + (d << 1) | 0;
  c[q + 8 >> 2] = f;
  h = e;
  g = f;
  while (1) {
   b[e >> 1] = 2048;
   d = d + -1 | 0;
   if (!d) break; else e = e + 2 | 0;
  }
  c[l >> 2] = f;
 }
 e = c[m >> 2] | 0;
 f = e;
 k = a + 44 | 0;
 if (!e) {
  f = a + 48 | 0;
  j = q + 8 | 0;
  e = g;
  d = g;
 } else {
  d = c[k >> 2] | 0;
  if ((d | 0) != (e | 0)) c[k >> 2] = d + (~((d + -2 - f | 0) >>> 1) << 1);
  Ae(e);
  f = a + 48 | 0;
  c[f >> 2] = 0;
  c[k >> 2] = 0;
  c[m >> 2] = 0;
  d = q + 8 | 0;
  j = d;
  h = c[q >> 2] | 0;
  e = c[l >> 2] | 0;
  d = c[d >> 2] | 0;
 }
 c[m >> 2] = h;
 c[k >> 2] = e;
 c[f >> 2] = d;
 c[j >> 2] = 0;
 c[l >> 2] = 0;
 c[q >> 2] = 0;
 d = 0;
 do {
  c[a + 52 + (d << 2) >> 2] = 1;
  d = d + 1 | 0;
 } while ((d | 0) != 64);
 i = r;
 return;
}

function ac(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 x = i;
 i = i + 32 | 0;
 v = x;
 t = d + 56 | 0;
 j = c[t >> 2] | 0;
 u = d + 60 | 0;
 e = c[u >> 2] | 0;
 if ((e | 0) != (j | 0)) {
  f = e;
  while (1) {
   e = f + -24 | 0;
   c[u >> 2] = e;
   g = c[e >> 2] | 0;
   h = g;
   if (g) {
    e = f + -20 | 0;
    f = c[e >> 2] | 0;
    if ((f | 0) != (g | 0)) c[e >> 2] = f + (~((f + -4 - h | 0) >>> 2) << 2);
    Ae(g);
    e = c[u >> 2] | 0;
   }
   if ((e | 0) == (j | 0)) break; else f = e;
  }
 }
 m = d + 84 | 0;
 n = d + 80 | 0;
 e = c[n >> 2] | 0;
 if ((c[m >> 2] | 0) == (e | 0)) {
  i = x;
  return;
 }
 o = v + 4 | 0;
 p = v + 8 | 0;
 q = v + 12 | 0;
 r = v + 16 | 0;
 s = v + 20 | 0;
 l = d + 64 | 0;
 k = 0;
 f = 0;
 a : while (1) {
  j = b + (k << 8) | 0;
  b : do if ((f | 0) > 0) {
   h = c[t >> 2] | 0;
   g = 0;
   while (1) {
    if (!(Uf(j, c[h + (g * 24 | 0) >> 2] | 0, 256) | 0)) break;
    g = g + 1 | 0;
    if ((g | 0) >= (f | 0)) {
     w = 14;
     break b;
    }
   }
   c[e + (k * 40 | 0) + 12 >> 2] = g;
  } else w = 14; while (0);
  if ((w | 0) == 14) {
   w = 0;
   d = ye(256) | 0;
   c[v >> 2] = d;
   h = d + 256 | 0;
   c[p >> 2] = h;
   c[o >> 2] = h;
   c[r >> 2] = 0;
   a[s >> 0] = 1;
   tg(d | 0, j | 0, 256) | 0;
   c[q >> 2] = 0;
   h = 0;
   do {
    g = c[d + (h << 2) >> 2] | 0;
    if ((g | 0) <= -1) {
     w = 16;
     break a;
    }
    if ((g | 0) >= 65536) {
     w = 18;
     break a;
    }
    if ((g | 0) > 255) c[q >> 2] = 1;
    h = h + 1 | 0;
   } while ((h | 0) < 64);
   c[r >> 2] = f;
   c[e + (k * 40 | 0) + 12 >> 2] = f;
   e = c[u >> 2] | 0;
   if ((e | 0) == (c[l >> 2] | 0)) ne(t, v); else {
    zd(e, v);
    j = e + 12 | 0;
    c[j >> 2] = c[q >> 2];
    c[j + 4 >> 2] = c[q + 4 >> 2];
    a[j + 8 >> 0] = a[q + 8 >> 0] | 0;
    c[u >> 2] = (c[u >> 2] | 0) + 24;
   }
   c[o >> 2] = d;
   Ae(d);
   f = f + 1 | 0;
  }
  k = k + 1 | 0;
  e = c[n >> 2] | 0;
  if (k >>> 0 >= (((c[m >> 2] | 0) - e | 0) / 40 | 0) >>> 0) {
   w = 27;
   break;
  }
 }
 if ((w | 0) == 16) Aa(35394, 35415, 90, 35439); else if ((w | 0) == 18) Aa(35455, 35415, 91, 35439); else if ((w | 0) == 27) {
  i = x;
  return;
 }
}

function fe(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 m = a + 8 | 0;
 g = c[m >> 2] | 0;
 n = a + 4 | 0;
 f = c[n >> 2] | 0;
 d = f;
 if (((g - d | 0) / 12 | 0) >>> 0 >= b >>> 0) {
  d = b;
  e = f;
  while (1) {
   c[e >> 2] = 0;
   c[e + 4 >> 2] = 0;
   c[e + 8 >> 2] = 0;
   d = d + -1 | 0;
   if (!d) break; else e = e + 12 | 0;
  }
  c[n >> 2] = f + (b * 12 | 0);
  return;
 }
 l = c[a >> 2] | 0;
 e = ((d - l | 0) / 12 | 0) + b | 0;
 if (e >>> 0 > 357913941) we(a);
 k = l;
 d = (g - k | 0) / 12 | 0;
 if (d >>> 0 < 178956970) {
  d = d << 1;
  d = d >>> 0 < e >>> 0 ? e : d;
  f = c[n >> 2] | 0;
  e = (f - k | 0) / 12 | 0;
  if (!d) {
   g = 0;
   j = 0;
   i = e;
  } else h = 9;
 } else {
  f = c[n >> 2] | 0;
  d = 357913941;
  e = (f - k | 0) / 12 | 0;
  h = 9;
 }
 if ((h | 0) == 9) {
  g = d;
  j = ye(d * 12 | 0) | 0;
  i = e;
 }
 e = j + (i * 12 | 0) | 0;
 h = j + (g * 12 | 0) | 0;
 d = b;
 g = e;
 while (1) {
  c[g >> 2] = 0;
  c[g + 4 >> 2] = 0;
  c[g + 8 >> 2] = 0;
  d = d + -1 | 0;
  if (!d) break; else g = g + 12 | 0;
 }
 d = e;
 g = j + ((i + b | 0) * 12 | 0) | 0;
 if ((f | 0) == (l | 0)) e = a; else {
  do {
   k = e + -12 | 0;
   b = f;
   f = f + -12 | 0;
   c[k >> 2] = 0;
   j = e + -8 | 0;
   c[j >> 2] = 0;
   c[e + -4 >> 2] = 0;
   c[k >> 2] = c[f >> 2];
   k = b + -8 | 0;
   c[j >> 2] = c[k >> 2];
   b = b + -4 | 0;
   c[e + -4 >> 2] = c[b >> 2];
   c[b >> 2] = 0;
   c[k >> 2] = 0;
   c[f >> 2] = 0;
   e = d + -12 | 0;
   d = e;
  } while ((f | 0) != (l | 0));
  e = a;
  k = c[a >> 2] | 0;
 }
 c[e >> 2] = d;
 d = c[n >> 2] | 0;
 c[n >> 2] = g;
 c[m >> 2] = h;
 b = k;
 if ((d | 0) != (b | 0)) do {
  f = d;
  d = d + -12 | 0;
  e = c[d >> 2] | 0;
  if (e) {
   j = f + -8 | 0;
   f = c[j >> 2] | 0;
   if ((f | 0) != (e | 0)) {
    do {
     g = f + -12 | 0;
     c[j >> 2] = g;
     h = c[g >> 2] | 0;
     i = h;
     if (!h) f = g; else {
      f = f + -8 | 0;
      g = c[f >> 2] | 0;
      if ((g | 0) != (h | 0)) c[f >> 2] = g + (~((g + -4 - i | 0) >>> 2) << 2);
      Ae(h);
      f = c[j >> 2] | 0;
     }
    } while ((f | 0) != (e | 0));
    e = c[d >> 2] | 0;
   }
   Ae(e);
  }
 } while ((d | 0) != (b | 0));
 if (!k) return;
 Ae(k);
 return;
}

function Id(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, j = 0, k = 0, l = 0.0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0.0;
 t = i;
 i = i + 2112 | 0;
 q = t + 1032 | 0;
 n = t + 1024 | 0;
 r = t;
 f = t + 1088 | 0;
 g = t + 1072 | 0;
 k = t + 1060 | 0;
 p = t + 1048 | 0;
 s = t + 1036 | 0;
 m = b + 16 | 0;
 e = c[m >> 2] | 0;
 o = a[d >> 0] | 0;
 l = +hb[c[(c[e >> 2] | 0) + 16 >> 2] & 1](e, (o & 1) == 0 ? (o & 255) >>> 1 : c[d + 4 >> 2] | 0);
 h[r >> 3] = l;
 Ef(f, 1024, 39923, r) | 0;
 a[f + 1023 >> 0] = 0;
 o = b + 24 | 0;
 e = c[o >> 2] | 0;
 hg(g, f, Xf(f) | 0);
 f = c[e + 12 >> 2] | 0;
 if (f) {
  j = a[g >> 0] | 0;
  u = (j & 1) == 0;
  lg(f, u ? g + 1 | 0 : c[g + 8 >> 2] | 0, u ? (j & 255) >>> 1 : c[g + 4 >> 2] | 0) | 0;
 }
 e = c[e + 16 >> 2] | 0;
 if (e) sf((a[g >> 0] & 1) == 0 ? g + 1 | 0 : c[g + 8 >> 2] | 0, e) | 0;
 ig(g);
 j = b + 20 | 0;
 e = c[j >> 2] | 0;
 v = +h[e + 32 >> 3];
 if (l < v | v < 0.0) {
  jg(e, d) | 0;
  e = (c[j >> 2] | 0) + 12 | 0;
  u = c[m >> 2] | 0;
  lb[c[(c[u >> 2] | 0) + 24 >> 2] & 3](k, u);
  if ((e | 0) != (k | 0)) te(e, c[k >> 2] | 0, c[k + 4 >> 2] | 0);
  g = c[k >> 2] | 0;
  b = g;
  if (g) {
   e = k + 4 | 0;
   f = c[e >> 2] | 0;
   if ((f | 0) != (g | 0)) c[e >> 2] = f + (~((f + -4 - b | 0) >>> 2) << 2);
   Ae(g);
  }
  e = c[m >> 2] | 0;
  v = +ib[c[(c[e >> 2] | 0) + 28 >> 2] & 3](e);
  e = c[j >> 2] | 0;
  h[e + 24 >> 3] = v;
  h[e + 32 >> 3] = l;
  Ef(r, 1024, 39936, n) | 0;
  a[r + 1023 >> 0] = 0;
  e = c[o >> 2] | 0;
  hg(p, r, Xf(r) | 0);
  f = c[e + 12 >> 2] | 0;
  if (f) {
   u = a[p >> 0] | 0;
   n = (u & 1) == 0;
   lg(f, n ? p + 1 | 0 : c[p + 8 >> 2] | 0, n ? (u & 255) >>> 1 : c[p + 4 >> 2] | 0) | 0;
  }
  e = c[e + 16 >> 2] | 0;
  if (e) sf((a[p >> 0] & 1) == 0 ? p + 1 | 0 : c[p + 8 >> 2] | 0, e) | 0;
  ig(p);
 }
 Ef(r, 1024, 39829, q) | 0;
 a[r + 1023 >> 0] = 0;
 f = c[o >> 2] | 0;
 hg(s, r, Xf(r) | 0);
 e = c[f + 12 >> 2] | 0;
 if (e) {
  u = a[s >> 0] | 0;
  r = (u & 1) == 0;
  lg(e, r ? s + 1 | 0 : c[s + 8 >> 2] | 0, r ? (u & 255) >>> 1 : c[s + 4 >> 2] | 0) | 0;
 }
 e = c[f + 16 >> 2] | 0;
 if (!e) {
  ig(s);
  i = t;
  return;
 }
 sf((a[s >> 0] & 1) == 0 ? s + 1 | 0 : c[s + 8 >> 2] | 0, e) | 0;
 ig(s);
 i = t;
 return;
}

function Sc(a, b, d, e, f, j, k) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0.0;
 r = i;
 i = i + 32 | 0;
 q = r;
 c[q >> 2] = 0;
 c[q + 4 >> 2] = 0;
 c[q + 8 >> 2] = 0;
 c[q + 12 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 c[q + 20 >> 2] = 0;
 o = d * 6 | 0;
 p = 0;
 l = 0;
 do {
  m = (c[27868 + (p << 3) >> 2] | 0) + a | 0;
  n = (c[27868 + (p << 3) + 4 >> 2] | 0) + b | 0;
  if (m >>> 0 > 2 & (m + 3 | 0) >>> 0 < d >>> 0) {
   u = m + -3 + (_(n, d) | 0) | 0;
   s = u + 6 | 0;
   x = c[f >> 2] | 0;
   z = c[x >> 2] | 0;
   y = c[x + 12 >> 2] | 0;
   x = c[x + 24 >> 2] | 0;
   t = c[j >> 2] | 0;
   w = c[t >> 2] | 0;
   v = c[t + 12 >> 2] | 0;
   t = c[t + 24 >> 2] | 0;
   Pc((+g[z + (u << 2) >> 2] - +g[z + (s << 2) >> 2]) * .711100840192, (+g[y + (u << 2) >> 2] - +g[y + (s << 2) >> 2]) * .711100840192, (+g[x + (u << 2) >> 2] - +g[x + (s << 2) >> 2]) * .711100840192, (+g[w + (u << 2) >> 2] - +g[w + (s << 2) >> 2]) * .711100840192, (+g[v + (u << 2) >> 2] - +g[v + (s << 2) >> 2]) * .711100840192, (+g[t + (u << 2) >> 2] - +g[t + (s << 2) >> 2]) * .711100840192, 1.0, q);
   l = l + 1 | 0;
  }
  if (n >>> 0 > 2 & (n + 3 | 0) >>> 0 < e >>> 0) {
   x = (_(n + -3 | 0, d) | 0) + m | 0;
   z = x + o | 0;
   u = c[f >> 2] | 0;
   s = c[u >> 2] | 0;
   t = c[u + 12 >> 2] | 0;
   u = c[u + 24 >> 2] | 0;
   y = c[j >> 2] | 0;
   v = c[y >> 2] | 0;
   w = c[y + 12 >> 2] | 0;
   y = c[y + 24 >> 2] | 0;
   Pc((+g[s + (x << 2) >> 2] - +g[s + (z << 2) >> 2]) * .711100840192, (+g[t + (x << 2) >> 2] - +g[t + (z << 2) >> 2]) * .711100840192, (+g[u + (x << 2) >> 2] - +g[u + (z << 2) >> 2]) * .711100840192, (+g[v + (x << 2) >> 2] - +g[v + (z << 2) >> 2]) * .711100840192, (+g[w + (x << 2) >> 2] - +g[w + (z << 2) >> 2]) * .711100840192, (+g[y + (x << 2) >> 2] - +g[y + (z << 2) >> 2]) * .711100840192, 1.0, q);
   l = l + 1 | 0;
  }
  p = p + 1 | 0;
 } while ((p | 0) != 4);
 A = .12936901568 / +(l | 0);
 h[k >> 3] = +h[k >> 3] + A * +h[q >> 3];
 z = k + 8 | 0;
 h[z >> 3] = +h[z >> 3] + A * +h[q + 8 >> 3];
 z = k + 16 | 0;
 h[z >> 3] = +h[z >> 3] + A * +h[q + 16 >> 3];
 i = r;
 return;
}

function id(b, e, f, j) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0.0, B = 0, C = 0, D = 0;
 z = i;
 i = i + 80 | 0;
 x = z + 64 | 0;
 t = z + 48 | 0;
 y = z + 16 | 0;
 w = z;
 c[x >> 2] = 0;
 c[x + 4 >> 2] = 0;
 c[x + 8 >> 2] = 0;
 a[t + 4 >> 0] = 1;
 a[t + 5 >> 0] = 0;
 a[t + 6 >> 0] = 0;
 a[t + 7 >> 0] = 0;
 c[t + 8 >> 2] = 3;
 a[t + 12 >> 0] = 1;
 A = j >>> 0 < 70 ? 70.0 : +(j >>> 0);
 A = A > 110.0 ? 110.0 : A;
 u = ~~A;
 A = A - +(u | 0);
 g[t >> 2] = (1.0 - A) * +h[16 + (u + -70 << 3) >> 3] + A * +h[16 + (u + -69 << 3) >> 3];
 c[y + 4 >> 2] = 0;
 c[y + 8 >> 2] = 0;
 u = y + 4 | 0;
 c[y >> 2] = u;
 v = y + 12 | 0;
 c[v >> 2] = 0;
 c[v + 4 >> 2] = 0;
 c[v + 8 >> 2] = 0;
 c[v + 12 >> 2] = 0;
 c[v + 16 >> 2] = 0;
 c[y + 16 >> 2] = c[8427];
 c[w >> 2] = 0;
 v = w + 4 | 0;
 c[v >> 2] = 0;
 c[w + 8 >> 2] = 0;
 s = e * 3 | 0;
 j = _(s, f) | 0;
 if (j) se(w, j);
 if (f) {
  j = e << 2;
  k = (e | 0) == 0;
  r = 0;
  do {
   l = _(r, j) | 0;
   m = _(s, r) | 0;
   n = c[w >> 2] | 0;
   if (!k) {
    o = m + 1 | 0;
    p = m + 2 | 0;
    q = 0;
    do {
     D = q << 2;
     C = d[b + ((D | 3) + l) >> 0] | 0;
     B = q * 3 | 0;
     a[n + (B + m) >> 0] = (((_(d[b + (D + l) >> 0] | 0, C) | 0) + 128 | 0) >>> 0) / 255 | 0;
     a[n + (o + B) >> 0] = (((_(d[b + ((D | 1) + l) >> 0] | 0, C) | 0) + 128 | 0) >>> 0) / 255 | 0;
     a[n + (p + B) >> 0] = (((_(d[b + ((D | 2) + l) >> 0] | 0, C) | 0) + 128 | 0) >>> 0) / 255 | 0;
     q = q + 1 | 0;
    } while ((q | 0) != (e | 0));
   }
   r = r + 1 | 0;
  } while ((r | 0) != (f | 0));
 }
 do if (Lc(t, y, w, e, f, x) | 0) {
  j = pf(36389, 36397) | 0;
  if (!j) {
   Bf(36400, 35, 1, c[8426] | 0) | 0;
   k = 1;
   break;
  } else {
   hd(j, x);
   k = 0;
   break;
  }
 } else {
  Bf(36362, 26, 1, c[8426] | 0) | 0;
  k = 1;
 } while (0);
 j = c[w >> 2] | 0;
 if (!j) {
  D = y + 20 | 0;
  ig(D);
  D = c[u >> 2] | 0;
  be(y, D);
  ig(x);
  i = z;
  return k | 0;
 }
 if ((c[v >> 2] | 0) != (j | 0)) c[v >> 2] = j;
 Ae(j);
 D = y + 20 | 0;
 ig(D);
 D = c[u >> 2] | 0;
 be(y, D);
 ig(x);
 i = z;
 return k | 0;
}

function gc(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 y = i;
 i = i + 32 | 0;
 z = y;
 x = y + 8 | 0;
 d = c[b >> 2] | 0;
 f = b + 4 | 0;
 e = c[f >> 2] | 0;
 if ((d | 0) == (e | 0)) Aa(40489, 40505, 385, 40534);
 v = _(c[d + 4 >> 2] | 0, c[d >> 2] | 0) | 0;
 c[a >> 2] = 0;
 w = a + 4 | 0;
 c[w >> 2] = 0;
 c[a + 8 >> 2] = 0;
 he(a, (e - d | 0) / 20 | 0);
 d = c[b >> 2] | 0;
 n = c[f >> 2] | 0;
 if ((d | 0) == (n | 0)) {
  i = y;
  return;
 }
 o = x + 4 | 0;
 p = x + 8 | 0;
 q = (v | 0) == 0;
 r = a + 8 | 0;
 s = x + 8 | 0;
 t = v >>> 0 > 1073741823;
 u = v << 2;
 m = d;
 a : while (1) {
  c[x >> 2] = 0;
  c[o >> 2] = 0;
  c[p >> 2] = 0;
  if (!q) {
   if (t) {
    b = 7;
    break;
   }
   k = ye(u) | 0;
   c[x >> 2] = k;
   l = k + (v << 2) | 0;
   c[s >> 2] = l;
   pg(k | 0, 0, u | 0) | 0;
   c[o >> 2] = l;
  }
  d = c[w >> 2] | 0;
  if (d >>> 0 >= (c[r >> 2] | 0) >>> 0) {
   vd(a, x);
   d = c[x >> 2] | 0;
   e = d;
   if (d) {
    b = c[o >> 2] | 0;
    if ((b | 0) != (d | 0)) c[o >> 2] = b + (~((b + -4 - e | 0) >>> 2) << 2);
    Ae(d);
   }
  } else {
   c[d >> 2] = 0;
   l = d + 4 | 0;
   c[l >> 2] = 0;
   c[d + 8 >> 2] = 0;
   c[d >> 2] = c[x >> 2];
   c[l >> 2] = c[o >> 2];
   c[d + 8 >> 2] = c[s >> 2];
   c[s >> 2] = 0;
   c[o >> 2] = 0;
   c[x >> 2] = 0;
   c[w >> 2] = (c[w >> 2] | 0) + 12;
  }
  b = c[m >> 2] | 0;
  f = m + 4 | 0;
  g = c[f >> 2] | 0;
  b : do if (g) {
   h = m + 12 | 0;
   j = m + 8 | 0;
   k = (c[w >> 2] | 0) + -12 | 0;
   l = b << 2;
   e = 0;
   while (1) {
    d = (c[h >> 2] | 0) + (_(c[j >> 2] | 0, e) | 0) | 0;
    tg((c[k >> 2] | 0) + ((_(e, b) | 0) << 2) | 0, d | 0, l | 0) | 0;
    e = e + 1 | 0;
    if (e >>> 0 >= g >>> 0) break b;
    d = c[f >> 2] | 0;
    if (d >>> 0 <= e >>> 0) {
     b = 17;
     break a;
    }
   }
  } while (0);
  m = m + 20 | 0;
  if ((m | 0) == (n | 0)) {
   b = 21;
   break;
  }
 }
 if ((b | 0) == 7) we(x); else if ((b | 0) == 17) {
  c[z >> 2] = e;
  c[z + 4 >> 2] = d;
  Df(40551, z) | 0;
  xa();
 } else if ((b | 0) == 21) {
  i = y;
  return;
 }
}

function cd(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var h = 0, j = 0, k = 0.0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 z = i;
 i = i + 16 | 0;
 j = z;
 if (a >>> 0 <= b >>> 0) Aa(36296, 36021, 1323, 36317);
 h = _(e, d) | 0;
 c[j >> 2] = 0;
 w = j + 4 | 0;
 c[w >> 2] = 0;
 c[j + 8 >> 2] = 0;
 do if (h) if (h >>> 0 > 1073741823) we(j); else {
  v = h << 2;
  x = ye(v) | 0;
  c[j >> 2] = x;
  y = x + (h << 2) | 0;
  c[j + 8 >> 2] = y;
  pg(x | 0, 0, v | 0) | 0;
  c[w >> 2] = y;
  break;
 } else {
  x = 0;
  y = 0;
 } while (0);
 v = (e | 0) == 0;
 if (!v) {
  o = a - b | 0;
  p = (d | 0) == 0;
  q = ~e;
  t = b + -1 - a | 0;
  u = 0;
  while (1) {
   r = ~(t >>> 0 > q >>> 0 ? t : q);
   h = u >>> 0 < b >>> 0 ? 0 : u - b | 0;
   j = o + u | 0;
   if (!p) {
    s = _(h, d) | 0;
    n = h + 1 | 0;
    j = n >>> 0 < (j >>> 0 < e >>> 0 ? j : e) >>> 0;
    l = _(u, d) | 0;
    m = 0;
    do {
     k = +g[f + (m + s << 2) >> 2];
     if (j) {
      h = n;
      do {
       k = +gf(k, +g[f + ((_(h, d) | 0) + m << 2) >> 2]);
       h = h + 1 | 0;
      } while ((h | 0) != (r | 0));
     }
     g[x + (m + l << 2) >> 2] = k;
     m = m + 1 | 0;
    } while ((m | 0) != (d | 0));
   }
   u = u + 1 | 0;
   if ((u | 0) == (e | 0)) break; else t = t + -1 | 0;
  }
 }
 if (d) {
  s = a - b | 0;
  t = ~d;
  p = b + -1 - a | 0;
  r = 0;
  while (1) {
   o = ~(p >>> 0 > t >>> 0 ? p : t);
   n = r >>> 0 < b >>> 0 ? 0 : r - b | 0;
   h = s + r | 0;
   if (!v) {
    q = n + 1 | 0;
    j = q >>> 0 < (h >>> 0 < d >>> 0 ? h : d) >>> 0;
    m = 0;
    do {
     l = _(m, d) | 0;
     k = +g[x + (l + n << 2) >> 2];
     if (j) {
      h = q;
      do {
       k = +gf(k, +g[x + (h + l << 2) >> 2]);
       h = h + 1 | 0;
      } while ((h | 0) != (o | 0));
     }
     g[f + (l + r << 2) >> 2] = k;
     m = m + 1 | 0;
    } while ((m | 0) != (e | 0));
   }
   r = r + 1 | 0;
   if ((r | 0) == (d | 0)) break; else p = p + -1 | 0;
  }
 }
 if (!x) {
  i = z;
  return;
 }
 if ((y | 0) != (x | 0)) c[w >> 2] = y + (~((y + -4 - x | 0) >>> 2) << 2);
 Ae(x);
 i = z;
 return;
}

function xd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 s = b + 4 | 0;
 r = c[b >> 2] | 0;
 g = (((c[s >> 2] | 0) - r | 0) / 20 | 0) + 1 | 0;
 if (g >>> 0 > 214748364) we(b);
 t = b + 8 | 0;
 j = r;
 f = ((c[t >> 2] | 0) - j | 0) / 20 | 0;
 if (f >>> 0 < 107374182) {
  h = f << 1;
  g = h >>> 0 < g >>> 0 ? g : h;
  h = c[s >> 2] | 0;
  f = h;
  i = (f - j | 0) / 20 | 0;
  if (!g) {
   k = 0;
   n = 0;
   m = i;
  } else l = 6;
 } else {
  h = c[s >> 2] | 0;
  f = h;
  g = 214748364;
  i = (f - j | 0) / 20 | 0;
  l = 6;
 }
 if ((l | 0) == 6) {
  k = g;
  n = ye(g * 20 | 0) | 0;
  m = i;
 }
 g = n + (m * 20 | 0) | 0;
 o = g;
 p = n + (k * 20 | 0) | 0;
 i = c[d >> 2] | 0;
 k = c[e >> 2] | 0;
 c[g >> 2] = i;
 c[n + (m * 20 | 0) + 4 >> 2] = k;
 i = (i << 2) + 95 | 0;
 e = i & -64;
 e = (i & 1984 | 0) == 0 ? e + 64 | 0 : e;
 c[n + (m * 20 | 0) + 8 >> 2] = e;
 i = n + (m * 20 | 0) + 12 | 0;
 k = eg((_(e, k) | 0) + 64 | 0) | 0;
 do if (k) {
  l = k;
  if (!(l & 3)) {
   q = 64 - (l & 63) | 0;
   e = k + (q + -4) | 0;
   a[e >> 0] = k;
   a[e + 1 >> 0] = k >> 8;
   a[e + 2 >> 0] = k >> 16;
   a[e + 3 >> 0] = k >> 24;
   q = k + q | 0;
   break;
  } else Aa(35988, 36021, 59, 36051);
 } else q = 0; while (0);
 c[i >> 2] = q;
 c[n + (m * 20 | 0) + 16 >> 2] = 10;
 k = n + ((m + 1 | 0) * 20 | 0) | 0;
 if ((h | 0) == (r | 0)) {
  h = b;
  i = s;
  g = o;
 } else {
  f = o;
  do {
   q = h;
   h = h + -20 | 0;
   c[g + -20 >> 2] = c[h >> 2];
   c[g + -16 >> 2] = c[q + -16 >> 2];
   c[g + -12 >> 2] = c[q + -12 >> 2];
   d = q + -8 | 0;
   e = c[d >> 2] | 0;
   c[d >> 2] = 0;
   q = c[q + -4 >> 2] | 0;
   c[g + -8 >> 2] = e;
   c[g + -4 >> 2] = q;
   g = f + -20 | 0;
   f = g;
  } while ((h | 0) != (r | 0));
  h = b;
  i = s;
  g = f;
  j = c[b >> 2] | 0;
  f = c[s >> 2] | 0;
 }
 c[h >> 2] = g;
 c[i >> 2] = k;
 c[t >> 2] = p;
 h = j;
 if ((f | 0) != (h | 0)) do {
  t = f + -8 | 0;
  g = c[t >> 2] | 0;
  c[t >> 2] = 0;
  if (g) jb[c[f + -4 >> 2] & 15](g);
  f = f + -20 | 0;
 } while ((f | 0) != (h | 0));
 if (!j) return;
 Ae(j);
 return;
}

function pe(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 i = qb[c[f >> 2] & 1](b, a) | 0;
 g = qb[c[f >> 2] & 1](d, b) | 0;
 do if (i) {
  i = a;
  h = c[i >> 2] | 0;
  i = c[i + 4 >> 2] | 0;
  if (g) {
   k = d;
   j = c[k + 4 >> 2] | 0;
   g = a;
   c[g >> 2] = c[k >> 2];
   c[g + 4 >> 2] = j;
   g = d;
   c[g >> 2] = h;
   c[g + 4 >> 2] = i;
   g = 1;
   break;
  }
  g = b;
  j = c[g + 4 >> 2] | 0;
  k = a;
  c[k >> 2] = c[g >> 2];
  c[k + 4 >> 2] = j;
  k = b;
  c[k >> 2] = h;
  c[k + 4 >> 2] = i;
  if (qb[c[f >> 2] & 1](d, b) | 0) {
   k = b;
   j = c[k >> 2] | 0;
   k = c[k + 4 >> 2] | 0;
   h = d;
   i = c[h + 4 >> 2] | 0;
   g = b;
   c[g >> 2] = c[h >> 2];
   c[g + 4 >> 2] = i;
   g = d;
   c[g >> 2] = j;
   c[g + 4 >> 2] = k;
   g = 2;
  } else g = 1;
 } else if (g) {
  j = b;
  i = c[j >> 2] | 0;
  j = c[j + 4 >> 2] | 0;
  g = d;
  h = c[g + 4 >> 2] | 0;
  k = b;
  c[k >> 2] = c[g >> 2];
  c[k + 4 >> 2] = h;
  k = d;
  c[k >> 2] = i;
  c[k + 4 >> 2] = j;
  if (qb[c[f >> 2] & 1](b, a) | 0) {
   k = a;
   j = c[k >> 2] | 0;
   k = c[k + 4 >> 2] | 0;
   h = b;
   i = c[h + 4 >> 2] | 0;
   g = a;
   c[g >> 2] = c[h >> 2];
   c[g + 4 >> 2] = i;
   g = b;
   c[g >> 2] = j;
   c[g + 4 >> 2] = k;
   g = 2;
  } else g = 1;
 } else g = 0; while (0);
 if (!(qb[c[f >> 2] & 1](e, d) | 0)) {
  k = g;
  return k | 0;
 }
 j = d;
 i = c[j >> 2] | 0;
 j = c[j + 4 >> 2] | 0;
 l = e;
 h = c[l + 4 >> 2] | 0;
 k = d;
 c[k >> 2] = c[l >> 2];
 c[k + 4 >> 2] = h;
 k = e;
 c[k >> 2] = i;
 c[k + 4 >> 2] = j;
 if (!(qb[c[f >> 2] & 1](d, b) | 0)) {
  l = g + 1 | 0;
  return l | 0;
 }
 k = b;
 j = c[k >> 2] | 0;
 k = c[k + 4 >> 2] | 0;
 i = d;
 e = c[i + 4 >> 2] | 0;
 l = b;
 c[l >> 2] = c[i >> 2];
 c[l + 4 >> 2] = e;
 l = d;
 c[l >> 2] = j;
 c[l + 4 >> 2] = k;
 if (!(qb[c[f >> 2] & 1](b, a) | 0)) {
  l = g + 2 | 0;
  return l | 0;
 }
 k = a;
 j = c[k >> 2] | 0;
 k = c[k + 4 >> 2] | 0;
 d = b;
 e = c[d + 4 >> 2] | 0;
 l = a;
 c[l >> 2] = c[d >> 2];
 c[l + 4 >> 2] = e;
 l = b;
 c[l >> 2] = j;
 c[l + 4 >> 2] = k;
 l = g + 3 | 0;
 return l | 0;
}

function Xc(a, b, d, e, f, h, i) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 i = i | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0.0, I = 0, J = 0.0, K = 0, L = 0.0, M = 0;
 F = a + 16 | 0;
 l = _(c[a + 20 >> 2] | 0, c[F >> 2] | 0) | 0;
 m = i + 4 | 0;
 n = c[m >> 2] | 0;
 o = c[i >> 2] | 0;
 j = n - o >> 2;
 if (l >>> 0 <= j >>> 0) {
  if (l >>> 0 < j >>> 0 ? (k = o + (l << 2) | 0, (n | 0) != (k | 0)) : 0) c[m >> 2] = n + (~((n + -4 - k | 0) >>> 2) << 2);
 } else ke(i, l - j | 0);
 C = a + 12 | 0;
 D = c[C >> 2] | 0;
 j = 8 - D | 0;
 E = c[a + 4 >> 2] | 0;
 if (j >>> 0 >= E >>> 0) return;
 B = j >>> 0 < (c[a >> 2] | 0) >>> 0;
 A = c[b >> 2] | 0;
 z = c[d >> 2] | 0;
 y = c[e >> 2] | 0;
 x = c[f >> 2] | 0;
 v = c[h >> 2] | 0;
 r = A + 12 | 0;
 s = z + 12 | 0;
 t = A + 24 | 0;
 u = z + 24 | 0;
 w = 0;
 do {
  if (B) {
   b = _(c[F >> 2] | 0, w) | 0;
   d = c[a >> 2] | 0;
   e = _(d, w + 3 | 0) | 0;
   f = c[i >> 2] | 0;
   j = c[C >> 2] | 0;
   k = c[z >> 2] | 0;
   l = c[r >> 2] | 0;
   m = c[s >> 2] | 0;
   n = c[t >> 2] | 0;
   o = c[u >> 2] | 0;
   h = c[A >> 2] | 0;
   p = D;
   q = 0;
   while (1) {
    M = e + (q + 3) | 0;
    L = +g[h + (M << 2) >> 2];
    J = +g[l + (M << 2) >> 2];
    H = +g[n + (M << 2) >> 2];
    p = ((b + q | 0) >>> 0) / (p >>> 0) | 0;
    K = p * 3 | 0;
    I = K + 1 | 0;
    G = K + 2 | 0;
    g[f + (p << 2) >> 2] = +g[y + (K << 2) >> 2] * +g[k + (M << 2) >> 2] + +g[y + (I << 2) >> 2] * +g[m + (M << 2) >> 2] + +g[y + (G << 2) >> 2] * +g[o + (M << 2) >> 2] + (+g[x + (K << 2) >> 2] * L + +g[x + (I << 2) >> 2] * J + +g[x + (G << 2) >> 2] * H) + (L * +g[v + (K << 2) >> 2] + J * +g[v + (I << 2) >> 2] + H * +g[v + (G << 2) >> 2]);
    if ((q + 8 | 0) >>> 0 < d >>> 0) {
     p = j;
     q = j + q | 0;
    } else break;
   }
  } else j = D;
  w = j + w | 0;
 } while ((w + 8 - D | 0) >>> 0 < E >>> 0);
 return;
}

function qe(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 l = i;
 i = i + 16 | 0;
 k = l;
 e = a + 16 | 0;
 f = a + 8 | 0;
 j = qb[c[d >> 2] & 1](f, a) | 0;
 g = qb[c[d >> 2] & 1](e, f) | 0;
 do if (j) {
  j = a;
  h = c[j >> 2] | 0;
  j = c[j + 4 >> 2] | 0;
  if (g) {
   m = e;
   f = c[m + 4 >> 2] | 0;
   g = a;
   c[g >> 2] = c[m >> 2];
   c[g + 4 >> 2] = f;
   g = e;
   c[g >> 2] = h;
   c[g + 4 >> 2] = j;
   break;
  }
  n = f;
  g = c[n + 4 >> 2] | 0;
  m = a;
  c[m >> 2] = c[n >> 2];
  c[m + 4 >> 2] = g;
  m = f;
  c[m >> 2] = h;
  c[m + 4 >> 2] = j;
  if (qb[c[d >> 2] & 1](e, f) | 0) {
   m = f;
   j = c[m >> 2] | 0;
   m = c[m + 4 >> 2] | 0;
   g = e;
   h = c[g + 4 >> 2] | 0;
   n = f;
   c[n >> 2] = c[g >> 2];
   c[n + 4 >> 2] = h;
   n = e;
   c[n >> 2] = j;
   c[n + 4 >> 2] = m;
  }
 } else if (g ? (m = f, j = c[m >> 2] | 0, m = c[m + 4 >> 2] | 0, g = e, h = c[g + 4 >> 2] | 0, n = f, c[n >> 2] = c[g >> 2], c[n + 4 >> 2] = h, n = e, c[n >> 2] = j, c[n + 4 >> 2] = m, qb[c[d >> 2] & 1](f, a) | 0) : 0) {
  m = a;
  j = c[m >> 2] | 0;
  m = c[m + 4 >> 2] | 0;
  g = f;
  h = c[g + 4 >> 2] | 0;
  n = a;
  c[n >> 2] = c[g >> 2];
  c[n + 4 >> 2] = h;
  n = f;
  c[n >> 2] = j;
  c[n + 4 >> 2] = m;
 } while (0);
 f = a + 24 | 0;
 if ((f | 0) == (b | 0)) {
  i = l;
  return;
 }
 while (1) {
  if (qb[c[d >> 2] & 1](f, e) | 0) {
   m = f;
   n = c[m + 4 >> 2] | 0;
   g = k;
   c[g >> 2] = c[m >> 2];
   c[g + 4 >> 2] = n;
   g = f;
   while (1) {
    j = e;
    m = c[j + 4 >> 2] | 0;
    n = g;
    c[n >> 2] = c[j >> 2];
    c[n + 4 >> 2] = m;
    if ((e | 0) == (a | 0)) break;
    g = e + -8 | 0;
    if (qb[c[d >> 2] & 1](k, g) | 0) {
     n = e;
     e = g;
     g = n;
    } else break;
   }
   j = k;
   m = c[j + 4 >> 2] | 0;
   n = e;
   c[n >> 2] = c[j >> 2];
   c[n + 4 >> 2] = m;
  }
  e = f + 8 | 0;
  if ((e | 0) == (b | 0)) break; else {
   n = f;
   f = e;
   e = n;
  }
 }
 i = l;
 return;
}

function ue(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 m = a + 8 | 0;
 g = c[m >> 2] | 0;
 n = a + 4 | 0;
 f = c[n >> 2] | 0;
 d = f;
 if (((g - d | 0) / 12 | 0) >>> 0 >= b >>> 0) {
  d = b;
  e = f;
  while (1) {
   c[e >> 2] = 0;
   c[e + 4 >> 2] = 0;
   c[e + 8 >> 2] = 0;
   d = d + -1 | 0;
   if (!d) break; else e = e + 12 | 0;
  }
  c[n >> 2] = f + (b * 12 | 0);
  return;
 }
 l = c[a >> 2] | 0;
 e = ((d - l | 0) / 12 | 0) + b | 0;
 if (e >>> 0 > 357913941) we(a);
 j = l;
 d = (g - j | 0) / 12 | 0;
 if (d >>> 0 < 178956970) {
  d = d << 1;
  d = d >>> 0 < e >>> 0 ? e : d;
  f = c[n >> 2] | 0;
  e = (f - j | 0) / 12 | 0;
  if (!d) {
   g = 0;
   k = 0;
   i = e;
  } else h = 9;
 } else {
  f = c[n >> 2] | 0;
  d = 357913941;
  e = (f - j | 0) / 12 | 0;
  h = 9;
 }
 if ((h | 0) == 9) {
  g = d;
  k = ye(d * 12 | 0) | 0;
  i = e;
 }
 e = k + (i * 12 | 0) | 0;
 h = k + (g * 12 | 0) | 0;
 d = b;
 g = e;
 while (1) {
  c[g >> 2] = 0;
  c[g + 4 >> 2] = 0;
  c[g + 8 >> 2] = 0;
  d = d + -1 | 0;
  if (!d) break; else g = g + 12 | 0;
 }
 d = e;
 g = k + ((i + b | 0) * 12 | 0) | 0;
 if ((f | 0) == (l | 0)) e = a; else {
  do {
   b = e + -12 | 0;
   k = f;
   f = f + -12 | 0;
   c[b >> 2] = 0;
   j = e + -8 | 0;
   c[j >> 2] = 0;
   c[e + -4 >> 2] = 0;
   c[b >> 2] = c[f >> 2];
   b = k + -8 | 0;
   c[j >> 2] = c[b >> 2];
   k = k + -4 | 0;
   c[e + -4 >> 2] = c[k >> 2];
   c[k >> 2] = 0;
   c[b >> 2] = 0;
   c[f >> 2] = 0;
   e = d + -12 | 0;
   d = e;
  } while ((f | 0) != (l | 0));
  e = a;
  j = c[a >> 2] | 0;
 }
 c[e >> 2] = d;
 d = c[n >> 2] | 0;
 c[n >> 2] = g;
 c[m >> 2] = h;
 i = j;
 if ((d | 0) != (i | 0)) do {
  e = d;
  d = d + -12 | 0;
  g = c[d >> 2] | 0;
  h = g;
  if (g) {
   e = e + -8 | 0;
   f = c[e >> 2] | 0;
   if ((f | 0) != (g | 0)) c[e >> 2] = f + (~((f + -4 - h | 0) >>> 2) << 2);
   Ae(g);
  }
 } while ((d | 0) != (i | 0));
 if (!j) return;
 Ae(j);
 return;
}

function Bd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 k = a + 4 | 0;
 d = c[a >> 2] | 0;
 f = (((c[k >> 2] | 0) - d | 0) / 28 | 0) + 1 | 0;
 if (f >>> 0 > 153391689) we(a);
 l = a + 8 | 0;
 e = ((c[l >> 2] | 0) - d | 0) / 28 | 0;
 if (e >>> 0 < 76695844) {
  e = e << 1;
  e = e >>> 0 < f >>> 0 ? f : e;
  d = ((c[k >> 2] | 0) - d | 0) / 28 | 0;
  if (!e) {
   g = 0;
   h = 0;
  } else i = 6;
 } else {
  e = 153391689;
  d = ((c[k >> 2] | 0) - d | 0) / 28 | 0;
  i = 6;
 }
 if ((i | 0) == 6) {
  g = e;
  h = ye(e * 28 | 0) | 0;
 }
 f = h + (d * 28 | 0) | 0;
 e = f;
 j = h + (g * 28 | 0) | 0;
 c[f >> 2] = c[b >> 2];
 c[f + 4 >> 2] = c[b + 4 >> 2];
 c[f + 8 >> 2] = c[b + 8 >> 2];
 c[f + 12 >> 2] = c[b + 12 >> 2];
 Cd(h + (d * 28 | 0) + 16 | 0, b + 16 | 0);
 i = h + ((d + 1 | 0) * 28 | 0) | 0;
 h = c[a >> 2] | 0;
 d = c[k >> 2] | 0;
 if ((d | 0) == (h | 0)) {
  f = a;
  g = k;
  b = h;
 } else {
  do {
   g = f + -28 | 0;
   m = d;
   d = d + -28 | 0;
   c[g >> 2] = c[d >> 2];
   c[g + 4 >> 2] = c[d + 4 >> 2];
   c[g + 8 >> 2] = c[d + 8 >> 2];
   c[g + 12 >> 2] = c[d + 12 >> 2];
   g = f + -12 | 0;
   b = m + -12 | 0;
   c[g >> 2] = 0;
   n = f + -8 | 0;
   c[n >> 2] = 0;
   c[f + -4 >> 2] = 0;
   c[g >> 2] = c[b >> 2];
   g = m + -8 | 0;
   c[n >> 2] = c[g >> 2];
   m = m + -4 | 0;
   c[f + -4 >> 2] = c[m >> 2];
   c[m >> 2] = 0;
   c[g >> 2] = 0;
   c[b >> 2] = 0;
   f = e + -28 | 0;
   e = f;
  } while ((d | 0) != (h | 0));
  d = e;
  f = a;
  g = k;
  e = d;
  b = c[a >> 2] | 0;
  d = c[k >> 2] | 0;
 }
 c[f >> 2] = e;
 c[g >> 2] = i;
 c[l >> 2] = j;
 i = b;
 if ((d | 0) != (i | 0)) do {
  e = c[d + -12 >> 2] | 0;
  f = e;
  if (e) {
   g = d + -8 | 0;
   h = c[g >> 2] | 0;
   if ((h | 0) != (e | 0)) c[g >> 2] = h + (~(((h + -12 - f | 0) >>> 0) / 12 | 0) * 12 | 0);
   Ae(e);
  }
  d = d + -28 | 0;
 } while ((d | 0) != (i | 0));
 if (!b) return;
 Ae(b);
 return;
}

function bg(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0.0;
 a : do if (b >>> 0 <= 20) do switch (b | 0) {
 case 9:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   c[a >> 2] = b;
   break a;
  }
 case 10:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   e = a;
   c[e >> 2] = b;
   c[e + 4 >> 2] = ((b | 0) < 0) << 31 >> 31;
   break a;
  }
 case 11:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   e = a;
   c[e >> 2] = b;
   c[e + 4 >> 2] = 0;
   break a;
  }
 case 12:
  {
   e = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   b = e;
   f = c[b >> 2] | 0;
   b = c[b + 4 >> 2] | 0;
   c[d >> 2] = e + 8;
   e = a;
   c[e >> 2] = f;
   c[e + 4 >> 2] = b;
   break a;
  }
 case 13:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   e = (e & 65535) << 16 >> 16;
   f = a;
   c[f >> 2] = e;
   c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;
   break a;
  }
 case 14:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   f = a;
   c[f >> 2] = e & 65535;
   c[f + 4 >> 2] = 0;
   break a;
  }
 case 15:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   e = (e & 255) << 24 >> 24;
   f = a;
   c[f >> 2] = e;
   c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;
   break a;
  }
 case 16:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   f = a;
   c[f >> 2] = e & 255;
   c[f + 4 >> 2] = 0;
   break a;
  }
 case 17:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   g = +h[f >> 3];
   c[d >> 2] = f + 8;
   h[a >> 3] = g;
   break a;
  }
 case 18:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   g = +h[f >> 3];
   c[d >> 2] = f + 8;
   h[a >> 3] = g;
   break a;
  }
 default:
  break a;
 } while (0); while (0);
 return;
}

function ge(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 l = a + 8 | 0;
 g = c[l >> 2] | 0;
 m = a + 4 | 0;
 e = c[m >> 2] | 0;
 f = e;
 if (((g - f | 0) / 12 | 0) >>> 0 >= b >>> 0) {
  do {
   ed(e, d);
   e = (c[m >> 2] | 0) + 12 | 0;
   c[m >> 2] = e;
   b = b + -1 | 0;
  } while ((b | 0) != 0);
  return;
 }
 e = c[a >> 2] | 0;
 f = ((f - e | 0) / 12 | 0) + b | 0;
 if (f >>> 0 > 357913941) we(a);
 h = e;
 e = (g - h | 0) / 12 | 0;
 if (e >>> 0 < 178956970) {
  e = e << 1;
  e = e >>> 0 < f >>> 0 ? f : e;
  f = ((c[m >> 2] | 0) - h | 0) / 12 | 0;
  if (!e) {
   h = 0;
   g = 0;
   e = f;
  } else i = 8;
 } else {
  e = 357913941;
  f = ((c[m >> 2] | 0) - h | 0) / 12 | 0;
  i = 8;
 }
 if ((i | 0) == 8) {
  h = e;
  g = ye(e * 12 | 0) | 0;
  e = f;
 }
 i = g + (e * 12 | 0) | 0;
 j = i;
 k = g + (h * 12 | 0) | 0;
 f = i;
 e = j;
 do {
  ed(f, d);
  f = e + 12 | 0;
  e = f;
  b = b + -1 | 0;
 } while ((b | 0) != 0);
 d = e;
 h = c[a >> 2] | 0;
 e = c[m >> 2] | 0;
 if ((e | 0) == (h | 0)) {
  f = a;
  g = m;
  b = j;
  j = h;
 } else {
  f = i;
  b = j;
  do {
   j = f + -12 | 0;
   i = e;
   e = e + -12 | 0;
   c[j >> 2] = 0;
   g = f + -8 | 0;
   c[g >> 2] = 0;
   c[f + -4 >> 2] = 0;
   c[j >> 2] = c[e >> 2];
   j = i + -8 | 0;
   c[g >> 2] = c[j >> 2];
   i = i + -4 | 0;
   c[f + -4 >> 2] = c[i >> 2];
   c[i >> 2] = 0;
   c[j >> 2] = 0;
   c[e >> 2] = 0;
   f = b + -12 | 0;
   b = f;
  } while ((e | 0) != (h | 0));
  e = b;
  f = a;
  g = m;
  b = e;
  j = c[a >> 2] | 0;
  e = c[m >> 2] | 0;
 }
 c[f >> 2] = b;
 c[g >> 2] = d;
 c[l >> 2] = k;
 i = j;
 if ((e | 0) != (i | 0)) do {
  b = e;
  e = e + -12 | 0;
  g = c[e >> 2] | 0;
  h = g;
  if (g) {
   b = b + -8 | 0;
   f = c[b >> 2] | 0;
   if ((f | 0) != (g | 0)) c[b >> 2] = f + (~((f + -4 - h | 0) >>> 2) << 2);
   Ae(g);
  }
 } while ((e | 0) != (i | 0));
 if (!j) return;
 Ae(j);
 return;
}

function td(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 f = _(e, d) | 0;
 c[a >> 2] = 0;
 h = a + 4 | 0;
 c[h >> 2] = 0;
 c[a + 8 >> 2] = 0;
 do if (f) if (f >>> 0 > 1073741823) we(a); else {
  w = f << 2;
  y = ye(w) | 0;
  c[a >> 2] = y;
  x = y + (f << 2) | 0;
  c[a + 8 >> 2] = x;
  pg(y | 0, 0, w | 0) | 0;
  c[h >> 2] = x;
  break;
 } else y = 0; while (0);
 if ((e | 0) <= 0) return;
 v = (d | 0) > 0;
 w = d + -1 | 0;
 x = e + -1 | 0;
 s = c[b >> 2] | 0;
 t = 0 - d | 0;
 f = y;
 u = 0;
 do {
  if (v) {
   o = u + -2 | 0;
   n = _(u, d) | 0;
   o = (o | 0) > 0 ? o : 0;
   o = _((o | 0) < (x | 0) ? o : x, d) | 0;
   r = u | 1;
   p = (r | 0) < (e | 0);
   q = u + 2 | 0;
   q = _((q | 0) < (x | 0) ? q : x, d) | 0;
   r = _(r, d) | 0;
   l = t;
   m = 0;
   while (1) {
    i = (l | 0) == -1 ? 1 : 2;
    j = m + -2 | 0;
    h = m + n | 0;
    k = s + (h << 2) | 0;
    a = s + (o + m << 2) | 0;
    b = 0;
    do {
     z = j + (b << 2) | 0;
     z = (z | 0) > 0 ? z : 0;
     z = (z | 0) < (w | 0) ? z : w;
     g[f + (h + b << 2) >> 2] = (+g[s + (z + o << 2) >> 2] + (+g[k >> 2] * 9.0 + +g[s + (z + n << 2) >> 2] * 3.0 + +g[a >> 2] * 3.0)) * .0625;
     b = b + 1 | 0;
    } while ((b | 0) != (i | 0));
    if (p) {
     f = s + (q + m << 2) | 0;
     h = r + m | 0;
     a = 0;
     do {
      z = j + (a << 2) | 0;
      z = (z | 0) > 0 ? z : 0;
      z = (z | 0) < (w | 0) ? z : w;
      g[y + (h + a << 2) >> 2] = (+g[s + (z + q << 2) >> 2] + (+g[k >> 2] * 9.0 + +g[s + (z + n << 2) >> 2] * 3.0 + +g[f >> 2] * 3.0)) * .0625;
      a = a + 1 | 0;
     } while ((a | 0) != (i | 0));
     f = y;
    }
    m = m + 2 | 0;
    if ((m | 0) >= (d | 0)) break; else l = l + 2 | 0;
   }
  }
  u = u + 2 | 0;
 } while ((u | 0) < (e | 0));
 return;
}

function ne(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 l = b + 4 | 0;
 e = c[b >> 2] | 0;
 g = (((c[l >> 2] | 0) - e | 0) / 24 | 0) + 1 | 0;
 if (g >>> 0 > 178956970) we(b);
 m = b + 8 | 0;
 f = ((c[m >> 2] | 0) - e | 0) / 24 | 0;
 if (f >>> 0 < 89478485) {
  f = f << 1;
  f = f >>> 0 < g >>> 0 ? g : f;
  e = ((c[l >> 2] | 0) - e | 0) / 24 | 0;
  if (!f) {
   h = 0;
   i = 0;
  } else j = 6;
 } else {
  f = 178956970;
  e = ((c[l >> 2] | 0) - e | 0) / 24 | 0;
  j = 6;
 }
 if ((j | 0) == 6) {
  h = f;
  i = ye(f * 24 | 0) | 0;
 }
 g = i + (e * 24 | 0) | 0;
 f = g;
 k = i + (h * 24 | 0) | 0;
 zd(g, d);
 j = i + (e * 24 | 0) + 12 | 0;
 d = d + 12 | 0;
 c[j >> 2] = c[d >> 2];
 c[j + 4 >> 2] = c[d + 4 >> 2];
 a[j + 8 >> 0] = a[d + 8 >> 0] | 0;
 j = i + ((e + 1 | 0) * 24 | 0) | 0;
 i = c[b >> 2] | 0;
 e = c[l >> 2] | 0;
 if ((e | 0) == (i | 0)) {
  g = b;
  h = l;
  d = i;
 } else {
  do {
   d = g + -24 | 0;
   h = e;
   e = e + -24 | 0;
   c[d >> 2] = 0;
   n = g + -20 | 0;
   c[n >> 2] = 0;
   c[g + -16 >> 2] = 0;
   c[d >> 2] = c[e >> 2];
   d = h + -20 | 0;
   c[n >> 2] = c[d >> 2];
   n = h + -16 | 0;
   c[g + -16 >> 2] = c[n >> 2];
   c[n >> 2] = 0;
   c[d >> 2] = 0;
   c[e >> 2] = 0;
   d = g + -12 | 0;
   h = h + -12 | 0;
   c[d >> 2] = c[h >> 2];
   c[d + 4 >> 2] = c[h + 4 >> 2];
   a[d + 8 >> 0] = a[h + 8 >> 0] | 0;
   g = f + -24 | 0;
   f = g;
  } while ((e | 0) != (i | 0));
  e = f;
  g = b;
  h = l;
  f = e;
  d = c[b >> 2] | 0;
  e = c[l >> 2] | 0;
 }
 c[g >> 2] = f;
 c[h >> 2] = j;
 c[m >> 2] = k;
 j = d;
 if ((e | 0) != (j | 0)) do {
  f = e;
  e = e + -24 | 0;
  h = c[e >> 2] | 0;
  i = h;
  if (h) {
   f = f + -20 | 0;
   g = c[f >> 2] | 0;
   if ((g | 0) != (h | 0)) c[f >> 2] = g + (~((g + -4 - i | 0) >>> 2) << 2);
   Ae(h);
  }
 } while ((e | 0) != (j | 0));
 if (!d) return;
 Ae(d);
 return;
}

function kd(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 c[a >> 2] = 26484;
 b = c[a + 80 >> 2] | 0;
 d = b;
 if (b) {
  e = a + 84 | 0;
  f = c[e >> 2] | 0;
  if ((f | 0) != (b | 0)) c[e >> 2] = f + (~((f + -4 - d | 0) >>> 2) << 2);
  Ae(b);
 }
 k = a + 40 | 0;
 b = c[k >> 2] | 0;
 if (b) {
  l = a + 44 | 0;
  d = c[l >> 2] | 0;
  if ((d | 0) != (b | 0)) {
   do {
    i = d + -12 | 0;
    c[l >> 2] = i;
    j = c[i >> 2] | 0;
    if (!j) d = i; else {
     h = d + -8 | 0;
     d = c[h >> 2] | 0;
     if ((d | 0) == (j | 0)) d = j; else {
      do {
       e = d + -12 | 0;
       c[h >> 2] = e;
       f = c[e >> 2] | 0;
       g = f;
       if (!f) d = e; else {
        d = d + -8 | 0;
        e = c[d >> 2] | 0;
        if ((e | 0) != (f | 0)) c[d >> 2] = e + (~((e + -4 - g | 0) >>> 2) << 2);
        Ae(f);
        d = c[h >> 2] | 0;
       }
      } while ((d | 0) != (j | 0));
      d = c[i >> 2] | 0;
     }
     Ae(d);
     d = c[l >> 2] | 0;
    }
   } while ((d | 0) != (b | 0));
   b = c[k >> 2] | 0;
  }
  Ae(b);
 }
 h = a + 28 | 0;
 b = c[h >> 2] | 0;
 if (b) {
  i = a + 32 | 0;
  d = c[i >> 2] | 0;
  if ((d | 0) != (b | 0)) {
   do {
    e = d + -12 | 0;
    c[i >> 2] = e;
    f = c[e >> 2] | 0;
    g = f;
    if (!f) d = e; else {
     d = d + -8 | 0;
     e = c[d >> 2] | 0;
     if ((e | 0) != (f | 0)) c[d >> 2] = e + (~((e + -4 - g | 0) >>> 2) << 2);
     Ae(f);
     d = c[i >> 2] | 0;
    }
   } while ((d | 0) != (b | 0));
   b = c[h >> 2] | 0;
  }
  Ae(b);
 }
 g = a + 16 | 0;
 b = c[g >> 2] | 0;
 if (!b) return;
 f = a + 20 | 0;
 d = c[f >> 2] | 0;
 if ((d | 0) != (b | 0)) {
  do {
   c[f >> 2] = d + -20;
   a = d + -8 | 0;
   e = c[a >> 2] | 0;
   c[a >> 2] = 0;
   if (e) jb[c[d + -4 >> 2] & 15](e);
   d = c[f >> 2] | 0;
  } while ((d | 0) != (b | 0));
  b = c[g >> 2] | 0;
 }
 Ae(b);
 return;
}

function Ub(a, d) {
 a = a | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 w = i;
 i = i + 192 | 0;
 v = w + 128 | 0;
 u = w;
 r = a + 20 | 0;
 e = c[r >> 2] | 0;
 if ((e | 0) <= 0) {
  a = a + 52 | 0;
  tg(a | 0, d | 0, 256) | 0;
  i = w;
  return;
 }
 s = a + 16 | 0;
 t = a + 28 | 0;
 f = c[s >> 2] | 0;
 q = 0;
 a : while (1) {
  if ((f | 0) > 0) {
   p = 0;
   do {
    if ((f | 0) <= (p | 0)) {
     e = 5;
     break a;
    }
    if ((c[r >> 2] | 0) <= (q | 0)) {
     e = 7;
     break a;
    }
    n = (_(f, q) | 0) + p << 6;
    o = (c[t >> 2] | 0) + (n << 1) | 0;
    e = u;
    g = o;
    h = e + 128 | 0;
    do {
     b[e >> 1] = b[g >> 1] | 0;
     e = e + 2 | 0;
     g = g + 2 | 0;
    } while ((e | 0) < (h | 0));
    l = 0;
    m = 0;
    do {
     g = u + (m << 1) | 0;
     h = b[g >> 1] | 0;
     e = c[d + (m << 2) >> 2] | 0;
     j = h << 16 >> 16;
     k = (j | 0) % (e | 0) | 0;
     if ((k << 1 | 0) <= (e | 0)) {
      x = (_(k, -2) | 0) > (e | 0);
      e = x ? 0 - e | 0 : 0;
     }
     x = j - k + e & 65535;
     l = l | x << 16 >> 16 != h << 16 >> 16;
     b[g >> 1] = x;
     m = m + 1 | 0;
    } while ((m | 0) != 64);
    if (l) {
     e = o;
     g = u;
     h = e + 128 | 0;
     do {
      b[e >> 1] = b[g >> 1] | 0;
      e = e + 2 | 0;
      g = g + 2 | 0;
     } while ((e | 0) < (h | 0));
     Cb((c[t >> 2] | 0) + (n << 1) | 0, v);
     Sb(a, p, q, v);
     f = c[s >> 2] | 0;
    }
    p = p + 1 | 0;
   } while ((p | 0) < (f | 0));
   e = c[r >> 2] | 0;
  }
  q = q + 1 | 0;
  if ((q | 0) >= (e | 0)) {
   e = 17;
   break;
  }
 }
 if ((e | 0) == 5) Aa(34608, 34635, 60, 34662); else if ((e | 0) == 7) Aa(34676, 34635, 61, 34662); else if ((e | 0) == 17) {
  x = a + 52 | 0;
  tg(x | 0, d | 0, 256) | 0;
  i = w;
  return;
 }
}

function vd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 k = a + 4 | 0;
 d = c[a >> 2] | 0;
 f = (((c[k >> 2] | 0) - d | 0) / 12 | 0) + 1 | 0;
 if (f >>> 0 > 357913941) we(a);
 l = a + 8 | 0;
 e = ((c[l >> 2] | 0) - d | 0) / 12 | 0;
 if (e >>> 0 < 178956970) {
  e = e << 1;
  e = e >>> 0 < f >>> 0 ? f : e;
  d = ((c[k >> 2] | 0) - d | 0) / 12 | 0;
  if (!e) {
   g = 0;
   h = 0;
  } else i = 6;
 } else {
  e = 357913941;
  d = ((c[k >> 2] | 0) - d | 0) / 12 | 0;
  i = 6;
 }
 if ((i | 0) == 6) {
  g = e;
  h = ye(e * 12 | 0) | 0;
 }
 f = h + (d * 12 | 0) | 0;
 e = f;
 j = h + (g * 12 | 0) | 0;
 c[h + (d * 12 | 0) + 8 >> 2] = 0;
 c[f >> 2] = c[b >> 2];
 i = b + 4 | 0;
 c[h + (d * 12 | 0) + 4 >> 2] = c[i >> 2];
 g = b + 8 | 0;
 c[h + (d * 12 | 0) + 8 >> 2] = c[g >> 2];
 c[g >> 2] = 0;
 c[i >> 2] = 0;
 c[b >> 2] = 0;
 i = h + ((d + 1 | 0) * 12 | 0) | 0;
 h = c[a >> 2] | 0;
 d = c[k >> 2] | 0;
 if ((d | 0) == (h | 0)) {
  f = a;
  g = k;
  b = h;
 } else {
  do {
   b = f + -12 | 0;
   g = d;
   d = d + -12 | 0;
   c[b >> 2] = 0;
   m = f + -8 | 0;
   c[m >> 2] = 0;
   c[f + -4 >> 2] = 0;
   c[b >> 2] = c[d >> 2];
   b = g + -8 | 0;
   c[m >> 2] = c[b >> 2];
   g = g + -4 | 0;
   c[f + -4 >> 2] = c[g >> 2];
   c[g >> 2] = 0;
   c[b >> 2] = 0;
   c[d >> 2] = 0;
   f = e + -12 | 0;
   e = f;
  } while ((d | 0) != (h | 0));
  d = e;
  f = a;
  g = k;
  e = d;
  b = c[a >> 2] | 0;
  d = c[k >> 2] | 0;
 }
 c[f >> 2] = e;
 c[g >> 2] = i;
 c[l >> 2] = j;
 i = b;
 if ((d | 0) != (i | 0)) do {
  e = d;
  d = d + -12 | 0;
  g = c[d >> 2] | 0;
  h = g;
  if (g) {
   e = e + -8 | 0;
   f = c[e >> 2] | 0;
   if ((f | 0) != (g | 0)) c[e >> 2] = f + (~((f + -4 - h | 0) >>> 2) << 2);
   Ae(g);
  }
 } while ((d | 0) != (i | 0));
 if (!b) return;
 Ae(b);
 return;
}

function sd(a, b, d, e, f, j, k) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 j = j | 0;
 k = +k;
 var l = 0, m = 0.0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 x = i;
 i = i + 16 | 0;
 t = x;
 ed(t, b);
 w = (j | 0) / 2 | 0;
 l = c[b + 4 >> 2] | 0;
 s = c[b >> 2] | 0;
 if ((l | 0) != (s | 0)) {
  p = l - s >> 2;
  q = j - w | 0;
  n = (j | 0) > 0;
  o = c[t >> 2] | 0;
  r = 0;
  do {
   v = (r | 0) % (d | 0) | 0;
   if (!((v | 0) < (w | 0) | (q + v | 0) > (d | 0))) {
    if (n) {
     b = r - w | 0;
     l = 0;
     m = 0.0;
     do {
      m = m + +h[f + (l << 3) >> 3] * +g[s + (b + l << 2) >> 2];
      l = l + 1 | 0;
     } while ((l | 0) != (j | 0));
    } else m = 0.0;
    g[o + (r << 2) >> 2] = m * k;
   }
   r = r + 1 | 0;
  } while (r >>> 0 < p >>> 0);
 }
 ed(a, t);
 u = t + 4 | 0;
 v = c[u >> 2] | 0;
 s = c[t >> 2] | 0;
 t = (v | 0) == (s | 0);
 a : do if (t) b = s; else {
  b = s;
  q = v - b >> 2;
  r = j - w | 0;
  if ((j | 0) > 0) p = 0; else {
   m = k * 0.0;
   l = 0;
   while (1) {
    j = (l | 0) / (d | 0) | 0;
    if (!((j | 0) < (w | 0) | (r + j | 0) > (e | 0))) g[(c[a >> 2] | 0) + (l << 2) >> 2] = m;
    l = l + 1 | 0;
    if (l >>> 0 >= q >>> 0) break a;
   }
  }
  do {
   o = (p | 0) % (d | 0) | 0;
   l = (p | 0) / (d | 0) | 0;
   if (!((l | 0) < (w | 0) | (r + l | 0) > (e | 0))) {
    l = l - w | 0;
    n = 0;
    m = 0.0;
    do {
     m = m + +h[f + (n << 3) >> 3] * +g[s + ((_(l + n | 0, d) | 0) + o << 2) >> 2];
     n = n + 1 | 0;
    } while ((n | 0) != (j | 0));
    g[(c[a >> 2] | 0) + (p << 2) >> 2] = m * k;
   }
   p = p + 1 | 0;
  } while (p >>> 0 < q >>> 0);
 } while (0);
 if (!s) {
  i = x;
  return;
 }
 if (!t) c[u >> 2] = v + (~((v + -4 - b | 0) >>> 2) << 2);
 Ae(s);
 i = x;
 return;
}

function Ib(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 o = i;
 i = i + 48 | 0;
 f = o + 40 | 0;
 e = o + 32 | 0;
 g = o + 24 | 0;
 h = o + 16 | 0;
 n = o;
 c[n >> 2] = 0;
 j = n + 4 | 0;
 c[j >> 2] = 0;
 k = n + 8 | 0;
 c[k >> 2] = 0;
 l = c[d + 4 >> 2] | 0;
 do if (l) if ((l | 0) < 0) we(n); else {
  p = ((l + -1 | 0) >>> 5) + 1 | 0;
  c[n >> 2] = ye(p << 2) | 0;
  c[j >> 2] = 0;
  c[k >> 2] = p;
  k = c[d >> 2] | 0;
  c[g >> 2] = k;
  c[g + 4 >> 2] = 0;
  c[h >> 2] = k + (l >>> 5 << 2);
  c[h + 4 >> 2] = l & 31;
  c[e >> 2] = c[g >> 2];
  c[e + 4 >> 2] = c[g + 4 >> 2];
  c[f >> 2] = c[h >> 2];
  c[f + 4 >> 2] = c[h + 4 >> 2];
  pd(n, e, f);
  break;
 } while (0);
 if ((b | 0) > 2) {
  e = c[n >> 2] | 0;
  if ((a | 0) > 2) {
   l = 2;
   f = 1;
   while (1) {
    j = _(f, a) | 0;
    k = 2;
    f = 1;
    while (1) {
     f = f + j | 0;
     g = f >>> 5;
     h = 1 << (f & 31);
     if (!(((((c[e + (g << 2) >> 2] & h | 0) != 0 ? (p = f + -1 | 0, (c[e + (p >>> 5 << 2) >> 2] & 1 << (p & 31) | 0) != 0) : 0) ? (p = f + 1 | 0, (c[e + (p >>> 5 << 2) >> 2] & 1 << (p & 31) | 0) != 0) : 0) ? (p = f - a | 0, (c[e + (p >>> 5 << 2) >> 2] & 1 << (p & 31) | 0) != 0) : 0) ? (p = f + a | 0, (c[e + (p >>> 5 << 2) >> 2] & 1 << (p & 31) | 0) != 0) : 0)) {
      p = (c[d >> 2] | 0) + (g << 2) | 0;
      c[p >> 2] = c[p >> 2] & ~h;
     }
     f = k + 1 | 0;
     if ((f | 0) == (a | 0)) break; else {
      p = k;
      k = f;
      f = p;
     }
    }
    f = l + 1 | 0;
    if ((f | 0) == (b | 0)) {
     m = 16;
     break;
    } else {
     p = l;
     l = f;
     f = p;
    }
   }
  }
 } else m = 16;
 if ((m | 0) == 16) e = c[n >> 2] | 0;
 if (!e) {
  i = o;
  return;
 }
 Ae(e);
 i = o;
 return;
}

function ie(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 k = a + 4 | 0;
 d = c[a >> 2] | 0;
 f = (((c[k >> 2] | 0) - d | 0) / 20 | 0) + 1 | 0;
 if (f >>> 0 > 214748364) we(a);
 l = a + 8 | 0;
 e = ((c[l >> 2] | 0) - d | 0) / 20 | 0;
 if (e >>> 0 < 107374182) {
  e = e << 1;
  e = e >>> 0 < f >>> 0 ? f : e;
  d = ((c[k >> 2] | 0) - d | 0) / 20 | 0;
  if (!e) {
   g = 0;
   h = 0;
  } else i = 6;
 } else {
  e = 214748364;
  d = ((c[k >> 2] | 0) - d | 0) / 20 | 0;
  i = 6;
 }
 if ((i | 0) == 6) {
  g = e;
  h = ye(e * 20 | 0) | 0;
 }
 f = h + (d * 20 | 0) | 0;
 e = f;
 j = h + (g * 20 | 0) | 0;
 c[f >> 2] = c[b >> 2];
 c[h + (d * 20 | 0) + 4 >> 2] = c[b + 4 >> 2];
 c[h + (d * 20 | 0) + 8 >> 2] = c[b + 8 >> 2];
 i = b + 12 | 0;
 g = c[i >> 2] | 0;
 c[i >> 2] = 0;
 i = c[b + 16 >> 2] | 0;
 c[h + (d * 20 | 0) + 12 >> 2] = g;
 c[h + (d * 20 | 0) + 16 >> 2] = i;
 i = h + ((d + 1 | 0) * 20 | 0) | 0;
 h = c[a >> 2] | 0;
 d = c[k >> 2] | 0;
 if ((d | 0) == (h | 0)) {
  f = a;
  g = k;
 } else {
  do {
   b = d;
   d = d + -20 | 0;
   c[f + -20 >> 2] = c[d >> 2];
   c[f + -16 >> 2] = c[b + -16 >> 2];
   c[f + -12 >> 2] = c[b + -12 >> 2];
   m = b + -8 | 0;
   g = c[m >> 2] | 0;
   c[m >> 2] = 0;
   b = c[b + -4 >> 2] | 0;
   c[f + -8 >> 2] = g;
   c[f + -4 >> 2] = b;
   f = e + -20 | 0;
   e = f;
  } while ((d | 0) != (h | 0));
  d = e;
  f = a;
  g = k;
  e = d;
  h = c[a >> 2] | 0;
  d = c[k >> 2] | 0;
 }
 c[f >> 2] = e;
 c[g >> 2] = i;
 c[l >> 2] = j;
 f = h;
 if ((d | 0) != (f | 0)) do {
  m = d + -8 | 0;
  e = c[m >> 2] | 0;
  c[m >> 2] = 0;
  if (e) jb[c[d + -4 >> 2] & 15](e);
  d = d + -20 | 0;
 } while ((d | 0) != (f | 0));
 if (!h) return;
 Ae(h);
 return;
}

function Qb(b, d, f, g, h, i, j) {
 b = b | 0;
 d = d | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 if ((d | 0) <= -1) Aa(34704, 34635, 68, 34714);
 if ((f | 0) <= -1) Aa(34723, 34635, 69, 34714);
 l = c[b >> 2] | 0;
 if ((l | 0) <= (d | 0)) Aa(34733, 34635, 70, 34714);
 k = c[b + 4 >> 2] | 0;
 if ((k | 0) <= (f | 0)) Aa(34747, 34635, 71, 34714);
 t = h + f | 0;
 a : do if ((((k | 0) < (t | 0) ? k : t) | 0) > (f | 0)) {
  p = g + d | 0;
  q = 0 - j | 0;
  r = b + 40 | 0;
  s = ~d;
  h = (t | 0) > (k | 0) ? k : t;
  k = f;
  while (1) {
   if ((((l | 0) < (p | 0) ? l : p) | 0) > (d | 0)) {
    n = (_(l, k) | 0) + d | 0;
    l = (p | 0) > (l | 0) ? l : p;
    m = _(s - ~l | 0, j) | 0;
    f = i;
    o = d;
    while (1) {
     a[f >> 0] = (8 - (o & 1) + (e[(c[r >> 2] | 0) + (n << 1) >> 1] | 0) | 0) >>> 4;
     o = o + 1 | 0;
     if ((o | 0) == (l | 0)) break; else {
      f = f + j | 0;
      n = n + 1 | 0;
     }
    }
    i = i + m | 0;
   } else l = d;
   if ((p | 0) > (l | 0)) {
    m = _(p - l | 0, j) | 0;
    f = i;
    while (1) {
     a[f >> 0] = a[f + q >> 0] | 0;
     l = l + 1 | 0;
     if ((l | 0) == (p | 0)) break; else f = f + j | 0;
    }
    i = i + m | 0;
   }
   k = k + 1 | 0;
   if ((k | 0) == (h | 0)) break a;
   l = c[b >> 2] | 0;
  }
 } else h = f; while (0);
 if ((h | 0) >= (t | 0)) return;
 f = _(0 - g | 0, j) | 0;
 m = (g | 0) > 0;
 n = _(j, g) | 0;
 do {
  if (m) {
   k = i;
   l = 0;
   while (1) {
    a[k >> 0] = a[k + f >> 0] | 0;
    l = l + 1 | 0;
    if ((l | 0) == (g | 0)) break; else k = k + j | 0;
   }
   i = i + n | 0;
  }
  h = h + 1 | 0;
 } while ((h | 0) != (t | 0));
 return;
}

function Jb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 o = i;
 i = i + 48 | 0;
 f = o + 40 | 0;
 e = o + 32 | 0;
 g = o + 24 | 0;
 h = o + 16 | 0;
 n = o;
 c[n >> 2] = 0;
 j = n + 4 | 0;
 c[j >> 2] = 0;
 k = n + 8 | 0;
 c[k >> 2] = 0;
 l = c[d + 4 >> 2] | 0;
 do if (l) if ((l | 0) < 0) we(n); else {
  m = ((l + -1 | 0) >>> 5) + 1 | 0;
  c[n >> 2] = ye(m << 2) | 0;
  c[j >> 2] = 0;
  c[k >> 2] = m;
  m = c[d >> 2] | 0;
  c[g >> 2] = m;
  c[g + 4 >> 2] = 0;
  c[h >> 2] = m + (l >>> 5 << 2);
  c[h + 4 >> 2] = l & 31;
  c[e >> 2] = c[g >> 2];
  c[e + 4 >> 2] = c[g + 4 >> 2];
  c[f >> 2] = c[h >> 2];
  c[f + 4 >> 2] = c[h + 4 >> 2];
  pd(n, e, f);
  break;
 } while (0);
 if ((b | 0) > 2) {
  k = (a | 0) > 2;
  l = c[n >> 2] | 0;
  m = 2;
  e = 1;
  while (1) {
   if (k) {
    h = _(e, a) | 0;
    j = 2;
    e = 1;
    while (1) {
     e = e + h | 0;
     f = e >>> 5;
     g = 1 << (e & 31);
     if (!(((((c[l + (f << 2) >> 2] & g | 0) == 0 ? (p = e + -1 | 0, (c[l + (p >>> 5 << 2) >> 2] & 1 << (p & 31) | 0) == 0) : 0) ? (p = e + 1 | 0, (c[l + (p >>> 5 << 2) >> 2] & 1 << (p & 31) | 0) == 0) : 0) ? (p = e - a | 0, (c[l + (p >>> 5 << 2) >> 2] & 1 << (p & 31) | 0) == 0) : 0) ? (p = e + a | 0, (c[l + (p >>> 5 << 2) >> 2] & 1 << (p & 31) | 0) == 0) : 0)) {
      p = (c[d >> 2] | 0) + (f << 2) | 0;
      c[p >> 2] = c[p >> 2] | g;
     }
     e = j + 1 | 0;
     if ((e | 0) == (a | 0)) break; else {
      p = j;
      j = e;
      e = p;
     }
    }
   }
   e = m + 1 | 0;
   if ((e | 0) == (b | 0)) break; else {
    p = m;
    m = e;
    e = p;
   }
  }
 }
 e = c[n >> 2] | 0;
 if (!e) {
  i = o;
  return;
 }
 Ae(e);
 i = o;
 return;
}

function Jc(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 240 | 0;
 p = q + 88 | 0;
 o = q + 72 | 0;
 m = q;
 l = q + 40 | 0;
 c[p >> 2] = 0;
 h = p + 4 | 0;
 c[h >> 2] = 0;
 c[p + 8 >> 2] = 0;
 c[p + 12 >> 2] = 1;
 c[p + 16 >> 2] = 1;
 pg(p + 20 | 0, 0, 132) | 0;
 n = a[e >> 0] | 0;
 k = (n & 1) == 0;
 if (!(xc(k ? e + 1 | 0 : c[e + 8 >> 2] | 0, k ? (n & 255) >>> 1 : c[e + 4 >> 2] | 0, 2, p) | 0)) {
  Bf(35795, 36, 1, c[8426] | 0) | 0;
  o = 0;
  Kc(p);
  i = q;
  return o | 0;
 }
 rc(o, p);
 n = o + 4 | 0;
 if ((c[o >> 2] | 0) == (c[n >> 2] | 0)) {
  Bf(35832, 112, 1, c[8426] | 0) | 0;
  d = 0;
 } else {
  c[m >> 2] = 0;
  c[m + 4 >> 2] = 0;
  c[m + 8 >> 2] = 0;
  c[m + 12 >> 2] = 0;
  c[m + 16 >> 2] = 0;
  c[m + 20 >> 2] = 0;
  c[l + 4 >> 2] = 0;
  c[l + 8 >> 2] = 0;
  k = l + 4 | 0;
  c[l >> 2] = k;
  j = l + 12 | 0;
  c[j >> 2] = 0;
  c[j + 4 >> 2] = 0;
  c[j + 8 >> 2] = 0;
  c[j + 12 >> 2] = 0;
  c[j + 16 >> 2] = 0;
  j = (d | 0) == 0 ? l : d;
  d = c[p >> 2] | 0;
  e = c[h >> 2] | 0;
  if ((d | 0) > 31 & (e | 0) > 31) {
   h = ye(96) | 0;
   dc(h, d, e, o, +g[b >> 2], j);
   e = h;
  } else e = 0;
  h = e;
  d = Ic(b, p, h, m, j) | 0;
  jg(f, m) | 0;
  if (e) jb[c[(c[e >> 2] | 0) + 4 >> 2] & 15](h);
  ig(l + 20 | 0);
  be(l, c[k >> 2] | 0);
  e = c[m + 12 >> 2] | 0;
  h = e;
  if (e) {
   j = m + 16 | 0;
   k = c[j >> 2] | 0;
   if ((k | 0) != (e | 0)) c[j >> 2] = k + (~((k + -4 - h | 0) >>> 2) << 2);
   Ae(e);
  }
  ig(m);
 }
 e = c[o >> 2] | 0;
 if (!e) {
  o = d;
  Kc(p);
  i = q;
  return o | 0;
 }
 if ((c[n >> 2] | 0) != (e | 0)) c[n >> 2] = e;
 Ae(e);
 o = d;
 Kc(p);
 i = q;
 return o | 0;
}

function Tb(a, d, e, f, g) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 t = i;
 i = i + 192 | 0;
 s = t + 128 | 0;
 r = t;
 Pb(a, e, f);
 p = a + 16 | 0;
 h = c[p >> 2] | 0;
 e = c[d + 16 >> 2] | 0;
 if ((h | 0) > (e | 0)) Aa(34879, 34635, 214, 34920);
 q = a + 20 | 0;
 f = c[q >> 2] | 0;
 if ((f | 0) > (c[d + 20 >> 2] | 0)) Aa(34942, 34635, 215, 34920);
 o = e << 6;
 if ((f | 0) <= 0) {
  a = a + 52 | 0;
  tg(a | 0, g | 0, 256) | 0;
  i = t;
  return;
 }
 m = d + 28 | 0;
 n = a + 28 | 0;
 e = h;
 l = 0;
 a : while (1) {
  if ((e | 0) > 0) {
   j = 0;
   k = (c[m >> 2] | 0) + ((_(o, l) | 0) << 1) | 0;
   while (1) {
    f = 0;
    do {
     b[r + (f << 1) >> 1] = _(b[k + (f << 1) >> 1] | 0, c[g + (f << 2) >> 2] | 0) | 0;
     f = f + 1 | 0;
    } while ((f | 0) != 64);
    if ((e | 0) <= (j | 0)) {
     e = 12;
     break a;
    }
    if ((c[q >> 2] | 0) <= (l | 0)) {
     e = 14;
     break a;
    }
    e = (_(e, l) | 0) + j << 6;
    f = (c[n >> 2] | 0) + (e << 1) | 0;
    h = r;
    d = f + 128 | 0;
    do {
     b[f >> 1] = b[h >> 1] | 0;
     f = f + 2 | 0;
     h = h + 2 | 0;
    } while ((f | 0) < (d | 0));
    Cb((c[n >> 2] | 0) + (e << 1) | 0, s);
    Sb(a, j, l, s);
    j = j + 1 | 0;
    e = c[p >> 2] | 0;
    if ((j | 0) >= (e | 0)) break; else k = k + 128 | 0;
   }
   f = c[q >> 2] | 0;
  }
  l = l + 1 | 0;
  if ((l | 0) >= (f | 0)) {
   e = 18;
   break;
  }
 }
 if ((e | 0) == 12) Aa(34608, 34635, 124, 34806); else if ((e | 0) == 14) Aa(34676, 34635, 125, 34806); else if ((e | 0) == 18) {
  a = a + 52 | 0;
  tg(a | 0, g | 0, 256) | 0;
  i = t;
  return;
 }
}

function Ac(a, d) {
 a = a | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 e = c[a + 84 >> 2] | 0;
 t = c[a + 80 >> 2] | 0;
 if ((e | 0) == (t | 0)) return;
 u = a + 20 | 0;
 s = (e - t | 0) / 40 | 0;
 q = a + 24 | 0;
 e = c[u >> 2] | 0;
 r = 0;
 do {
  if ((e | 0) > 0) {
   m = t + (r * 40 | 0) + 8 | 0;
   n = t + (r * 40 | 0) + 4 | 0;
   o = t + (r * 40 | 0) + 16 | 0;
   p = t + (r * 40 | 0) + 28 | 0;
   a = c[q >> 2] | 0;
   f = 0;
   l = 0;
   do {
    if ((a | 0) > 0) {
     e = c[m >> 2] | 0;
     k = 0;
     do {
      if ((e | 0) > 0) {
       a = c[n >> 2] | 0;
       j = 0;
       do {
        if ((a | 0) > 0) {
         i = c[p >> 2] | 0;
         h = 0;
         g = f;
         while (1) {
          f = (_(e, l) | 0) + j | 0;
          e = (_(a, k) | 0) + h | 0;
          f = b[i + (e + (_(f, c[o >> 2] | 0) | 0) << 6 << 1) >> 1] | 0;
          e = (f << 16 >> 16) - (g << 16 >> 16) | 0;
          e = (e | 0) > -1 ? e : 0 - e | 0;
          if (!e) e = -1; else e = (aa(e | 0) | 0) ^ 31;
          a = d + (r * 1028 | 0) + (e + 1 << 2) | 0;
          c[a >> 2] = (c[a >> 2] | 0) + 2;
          h = h + 1 | 0;
          a = c[n >> 2] | 0;
          e = c[m >> 2] | 0;
          if ((h | 0) >= (a | 0)) break; else g = f;
         }
        }
        j = j + 1 | 0;
       } while ((j | 0) < (e | 0));
       a = c[q >> 2] | 0;
      }
      k = k + 1 | 0;
     } while ((k | 0) < (a | 0));
     e = c[u >> 2] | 0;
    }
    l = l + 1 | 0;
   } while ((l | 0) < (e | 0));
  }
  r = r + 1 | 0;
 } while (r >>> 0 < s >>> 0);
 return;
}

function ud(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 k = a + 4 | 0;
 d = c[a >> 2] | 0;
 f = (((c[k >> 2] | 0) - d | 0) / 12 | 0) + 1 | 0;
 if (f >>> 0 > 357913941) we(a);
 l = a + 8 | 0;
 e = ((c[l >> 2] | 0) - d | 0) / 12 | 0;
 if (e >>> 0 < 178956970) {
  e = e << 1;
  e = e >>> 0 < f >>> 0 ? f : e;
  d = ((c[k >> 2] | 0) - d | 0) / 12 | 0;
  if (!e) {
   g = 0;
   h = 0;
  } else i = 6;
 } else {
  e = 357913941;
  d = ((c[k >> 2] | 0) - d | 0) / 12 | 0;
  i = 6;
 }
 if ((i | 0) == 6) {
  g = e;
  h = ye(e * 12 | 0) | 0;
 }
 f = h + (d * 12 | 0) | 0;
 e = f;
 j = h + (g * 12 | 0) | 0;
 ed(f, b);
 i = h + ((d + 1 | 0) * 12 | 0) | 0;
 h = c[a >> 2] | 0;
 d = c[k >> 2] | 0;
 if ((d | 0) == (h | 0)) {
  f = a;
  g = k;
  b = h;
 } else {
  do {
   b = f + -12 | 0;
   g = d;
   d = d + -12 | 0;
   c[b >> 2] = 0;
   m = f + -8 | 0;
   c[m >> 2] = 0;
   c[f + -4 >> 2] = 0;
   c[b >> 2] = c[d >> 2];
   b = g + -8 | 0;
   c[m >> 2] = c[b >> 2];
   g = g + -4 | 0;
   c[f + -4 >> 2] = c[g >> 2];
   c[g >> 2] = 0;
   c[b >> 2] = 0;
   c[d >> 2] = 0;
   f = e + -12 | 0;
   e = f;
  } while ((d | 0) != (h | 0));
  d = e;
  f = a;
  g = k;
  e = d;
  b = c[a >> 2] | 0;
  d = c[k >> 2] | 0;
 }
 c[f >> 2] = e;
 c[g >> 2] = i;
 c[l >> 2] = j;
 i = b;
 if ((d | 0) != (i | 0)) do {
  e = d;
  d = d + -12 | 0;
  g = c[d >> 2] | 0;
  h = g;
  if (g) {
   e = e + -8 | 0;
   f = c[e >> 2] | 0;
   if ((f | 0) != (g | 0)) c[e >> 2] = f + (~((f + -4 - h | 0) >>> 2) << 2);
   Ae(g);
  }
 } while ((d | 0) != (i | 0));
 if (!b) return;
 Ae(b);
 return;
}

function _d(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0.0, h = 0.0, i = 0, j = 0.0, k = 0, l = 0, m = 0, n = 0, o = 0;
 n = b + 4 | 0;
 j = +g[n >> 2];
 m = a + 4 | 0;
 f = +g[m >> 2];
 l = d + 4 | 0;
 h = +g[l >> 2];
 i = h < j;
 do if (j < f) {
  if (i) {
   k = c[a >> 2] | 0;
   c[a >> 2] = c[d >> 2];
   c[d >> 2] = k;
   g[m >> 2] = h;
   g[l >> 2] = f;
   k = 1;
   break;
  }
  i = c[a >> 2] | 0;
  c[a >> 2] = c[b >> 2];
  c[b >> 2] = i;
  g[m >> 2] = j;
  g[n >> 2] = f;
  h = +g[l >> 2];
  if (h < f) {
   c[b >> 2] = c[d >> 2];
   c[d >> 2] = i;
   g[n >> 2] = h;
   g[l >> 2] = f;
   k = 2;
  } else {
   k = 1;
   f = h;
  }
 } else if (i) {
  k = c[b >> 2] | 0;
  c[b >> 2] = c[d >> 2];
  c[d >> 2] = k;
  g[n >> 2] = h;
  g[l >> 2] = j;
  h = +g[n >> 2];
  f = +g[m >> 2];
  if (h < f) {
   k = c[a >> 2] | 0;
   c[a >> 2] = c[b >> 2];
   c[b >> 2] = k;
   g[m >> 2] = h;
   g[n >> 2] = f;
   k = 2;
   f = +g[l >> 2];
  } else {
   k = 1;
   f = j;
  }
 } else {
  k = 0;
  f = h;
 } while (0);
 i = e + 4 | 0;
 h = +g[i >> 2];
 if (!(h < f)) {
  n = k;
  return n | 0;
 }
 o = c[d >> 2] | 0;
 c[d >> 2] = c[e >> 2];
 c[e >> 2] = o;
 g[l >> 2] = h;
 g[i >> 2] = f;
 h = +g[l >> 2];
 f = +g[n >> 2];
 if (!(h < f)) {
  o = k + 1 | 0;
  return o | 0;
 }
 o = c[b >> 2] | 0;
 c[b >> 2] = c[d >> 2];
 c[d >> 2] = o;
 g[n >> 2] = h;
 g[l >> 2] = f;
 h = +g[n >> 2];
 f = +g[m >> 2];
 if (!(h < f)) {
  o = k + 2 | 0;
  return o | 0;
 }
 o = c[a >> 2] | 0;
 c[a >> 2] = c[b >> 2];
 c[b >> 2] = o;
 g[m >> 2] = h;
 g[n >> 2] = f;
 o = k + 3 | 0;
 return o | 0;
}

function Wd(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0.0, h = 0.0, i = 0, j = 0.0, k = 0, l = 0, m = 0, n = 0, o = 0;
 n = b + 4 | 0;
 j = +g[n >> 2];
 m = a + 4 | 0;
 f = +g[m >> 2];
 l = d + 4 | 0;
 h = +g[l >> 2];
 i = h < j;
 do if (j < f) {
  if (i) {
   k = c[a >> 2] | 0;
   c[a >> 2] = c[d >> 2];
   c[d >> 2] = k;
   g[m >> 2] = h;
   g[l >> 2] = f;
   k = 1;
   break;
  }
  i = c[a >> 2] | 0;
  c[a >> 2] = c[b >> 2];
  c[b >> 2] = i;
  g[m >> 2] = j;
  g[n >> 2] = f;
  h = +g[l >> 2];
  if (h < f) {
   c[b >> 2] = c[d >> 2];
   c[d >> 2] = i;
   g[n >> 2] = h;
   g[l >> 2] = f;
   k = 2;
  } else {
   k = 1;
   f = h;
  }
 } else if (i) {
  k = c[b >> 2] | 0;
  c[b >> 2] = c[d >> 2];
  c[d >> 2] = k;
  g[n >> 2] = h;
  g[l >> 2] = j;
  h = +g[n >> 2];
  f = +g[m >> 2];
  if (h < f) {
   k = c[a >> 2] | 0;
   c[a >> 2] = c[b >> 2];
   c[b >> 2] = k;
   g[m >> 2] = h;
   g[n >> 2] = f;
   k = 2;
   f = +g[l >> 2];
  } else {
   k = 1;
   f = j;
  }
 } else {
  k = 0;
  f = h;
 } while (0);
 i = e + 4 | 0;
 h = +g[i >> 2];
 if (!(h < f)) {
  n = k;
  return n | 0;
 }
 o = c[d >> 2] | 0;
 c[d >> 2] = c[e >> 2];
 c[e >> 2] = o;
 g[l >> 2] = h;
 g[i >> 2] = f;
 h = +g[l >> 2];
 f = +g[n >> 2];
 if (!(h < f)) {
  o = k + 1 | 0;
  return o | 0;
 }
 o = c[b >> 2] | 0;
 c[b >> 2] = c[d >> 2];
 c[d >> 2] = o;
 g[n >> 2] = h;
 g[l >> 2] = f;
 h = +g[n >> 2];
 f = +g[m >> 2];
 if (!(h < f)) {
  o = k + 2 | 0;
  return o | 0;
 }
 o = c[a >> 2] | 0;
 c[a >> 2] = c[b >> 2];
 c[b >> 2] = o;
 g[m >> 2] = h;
 g[n >> 2] = f;
 o = k + 3 | 0;
 return o | 0;
}

function jd(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0.0;
 n = i;
 i = i + 240 | 0;
 j = n + 216 | 0;
 l = n + 48 | 0;
 e = n + 32 | 0;
 m = n;
 k = n + 64 | 0;
 d = pf(36436, 36443) | 0;
 if (!d) {
  Bf(36446, 22, 1, c[8426] | 0) | 0;
  m = 1;
  i = n;
  return m | 0;
 }
 gd(j, d);
 c[l >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 a[e + 4 >> 0] = 1;
 a[e + 5 >> 0] = 0;
 a[e + 6 >> 0] = 0;
 a[e + 7 >> 0] = 0;
 c[e + 8 >> 2] = 3;
 a[e + 12 >> 0] = 1;
 p = b >>> 0 < 70 ? 70.0 : +(b >>> 0);
 p = p > 110.0 ? 110.0 : p;
 f = ~~p;
 p = p - +(f | 0);
 g[e >> 2] = (1.0 - p) * +h[16 + (f + -70 << 3) >> 3] + p * +h[16 + (f + -69 << 3) >> 3];
 c[m + 4 >> 2] = 0;
 c[m + 8 >> 2] = 0;
 f = m + 4 | 0;
 c[m >> 2] = f;
 b = m + 12 | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[b + 16 >> 2] = 0;
 c[m + 16 >> 2] = c[8427];
 c[k >> 2] = 0;
 c[k + 4 >> 2] = 0;
 c[k + 8 >> 2] = 0;
 c[k + 12 >> 2] = 1;
 c[k + 16 >> 2] = 1;
 pg(k + 20 | 0, 0, 132) | 0;
 b = a[j >> 0] | 0;
 o = (b & 1) == 0;
 do if (xc(o ? j + 1 | 0 : c[j + 8 >> 2] | 0, o ? (b & 255) >>> 1 : c[j + 4 >> 2] | 0, 0, k) | 0) {
  if (!(Jc(e, m, j, l) | 0)) {
   Bf(36362, 26, 1, c[8426] | 0) | 0;
   b = 1;
   break;
  }
  nf(d) | 0;
  b = pf(36389, 36397) | 0;
  if (!b) {
   Bf(36400, 35, 1, c[8426] | 0) | 0;
   b = 1;
   break;
  } else {
   hd(b, l);
   b = 0;
   break;
  }
 } else {
  Bf(36469, 39, 1, c[8426] | 0) | 0;
  b = 1;
 } while (0);
 Kc(k);
 ig(m + 20 | 0);
 be(m, c[f >> 2] | 0);
 ig(l);
 ig(j);
 o = b;
 i = n;
 return o | 0;
}

function sc(a) {
 a = a | 0;
 var c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 c = 0;
 do {
  r = a + (c << 1) | 0;
  o = a + (c + 16 << 1) | 0;
  d = a + (c + 56 << 1) | 0;
  n = b[d >> 1] | 0;
  g = a + (c + 40 << 1) | 0;
  s = b[g >> 1] | 0;
  h = (b[r >> 1] | 0) - n | 0;
  f = (b[o >> 1] | 0) - s | 0;
  s = (s << 1) + f | 0;
  i = a + (c + 24 << 1) | 0;
  p = a + (c + 32 << 1) | 0;
  q = b[p >> 1] | 0;
  l = (b[i >> 1] | 0) - q | 0;
  q = (q << 1) + l | 0;
  j = a + (c + 48 << 1) | 0;
  m = b[j >> 1] | 0;
  k = a + (c + 8 << 1) | 0;
  e = (b[k >> 1] | 0) - m | 0;
  n = (n << 1) + h - q | 0;
  m = (m << 1) - s + e | 0;
  s = m + (s << 1) | 0;
  q = (q << 1) + n - s << 3;
  b[r >> 1] = q + (s << 4);
  b[p >> 1] = q;
  b[o >> 1] = ((m * 217168 | 0) >>> 16) + (n << 3);
  b[j >> 1] = ((n * 217168 | 0) >>> 16) - (m << 3);
  e = e - f | 0;
  f = ((e << 4) + (f << 5) | 0) * 23170 >> 16;
  e = e * 370720 >> 16;
  l = (l << 3) - e | 0;
  e = (e << 1) + l | 0;
  h = (h << 3) - f | 0;
  f = (f << 1) + h | 0;
  j = (l ^ 65535) - ((_(l, -21746) | 0) >>> 16) + h | 0;
  h = h + l + ((_(h, -21746) | 0) >>> 16) | 0;
  b[k >> 1] = f + 1 + ((e * 13036 | 0) >>> 16);
  b[i >> 1] = j;
  b[g >> 1] = h;
  b[d >> 1] = ((f * 13036 | 0) >>> 16) - e;
  c = c + 1 | 0;
 } while ((c | 0) != 8);
 tc(a, 34552);
 tc(a + 16 | 0, 34566);
 tc(a + 32 | 0, 34580);
 tc(a + 48 | 0, 34594);
 tc(a + 64 | 0, 34552);
 tc(a + 80 | 0, 34594);
 tc(a + 96 | 0, 34580);
 tc(a + 112 | 0, 34566);
 return;
}

function te(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 l = b;
 i = d - l >> 2;
 k = a + 8 | 0;
 e = c[k >> 2] | 0;
 j = c[a >> 2] | 0;
 g = j;
 if (i >>> 0 <= e - g >> 2 >>> 0) {
  h = a + 4 | 0;
  e = (c[h >> 2] | 0) - g >> 2;
  a = i >>> 0 > e >>> 0;
  e = a ? b + (e << 2) | 0 : d;
  f = e;
  l = f - l | 0;
  ug(j | 0, b | 0, l | 0) | 0;
  b = j + (l >> 2 << 2) | 0;
  if (!a) {
   e = c[h >> 2] | 0;
   if ((e | 0) == (b | 0)) return;
   c[h >> 2] = e + (~((e + -4 - b | 0) >>> 2) << 2);
   return;
  }
  if ((e | 0) == (d | 0)) return;
  b = c[h >> 2] | 0;
  f = b + (((d + -4 - f | 0) >>> 2) + 1 << 2) | 0;
  while (1) {
   c[b >> 2] = c[e >> 2];
   e = e + 4 | 0;
   if ((e | 0) == (d | 0)) break; else b = b + 4 | 0;
  }
  c[h >> 2] = f;
  return;
 }
 if (j) {
  e = a + 4 | 0;
  f = c[e >> 2] | 0;
  if ((f | 0) != (j | 0)) c[e >> 2] = f + (~((f + -4 - g | 0) >>> 2) << 2);
  Ae(j);
  c[k >> 2] = 0;
  c[e >> 2] = 0;
  c[a >> 2] = 0;
  e = 0;
 }
 if (i >>> 0 > 1073741823) we(a);
 e = e - 0 | 0;
 if (e >> 2 >>> 0 < 536870911) {
  e = e >> 1;
  e = e >>> 0 < i >>> 0 ? i : e;
  if (e >>> 0 > 1073741823) we(a); else h = e;
 } else h = 1073741823;
 e = ye(h << 2) | 0;
 g = a + 4 | 0;
 c[g >> 2] = e;
 c[a >> 2] = e;
 c[k >> 2] = e + (h << 2);
 if ((b | 0) == (d | 0)) return;
 f = e + (((d + -4 - l | 0) >>> 2) + 1 << 2) | 0;
 while (1) {
  c[e >> 2] = c[b >> 2];
  b = b + 4 | 0;
  if ((b | 0) == (d | 0)) break; else e = e + 4 | 0;
 }
 c[g >> 2] = f;
 return;
}

function Pf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 48 | 0;
 n = q + 16 | 0;
 m = q;
 e = q + 32 | 0;
 o = a + 28 | 0;
 f = c[o >> 2] | 0;
 c[e >> 2] = f;
 p = a + 20 | 0;
 f = (c[p >> 2] | 0) - f | 0;
 c[e + 4 >> 2] = f;
 c[e + 8 >> 2] = b;
 c[e + 12 >> 2] = d;
 k = a + 60 | 0;
 l = a + 44 | 0;
 b = 2;
 f = f + d | 0;
 while (1) {
  if (!(c[8415] | 0)) {
   c[n >> 2] = c[k >> 2];
   c[n + 4 >> 2] = e;
   c[n + 8 >> 2] = b;
   h = ff(db(146, n | 0) | 0) | 0;
  } else {
   wa(14, a | 0);
   c[m >> 2] = c[k >> 2];
   c[m + 4 >> 2] = e;
   c[m + 8 >> 2] = b;
   h = ff(db(146, m | 0) | 0) | 0;
   sa(0);
  }
  if ((f | 0) == (h | 0)) {
   f = 6;
   break;
  }
  if ((h | 0) < 0) {
   f = 8;
   break;
  }
  f = f - h | 0;
  g = c[e + 4 >> 2] | 0;
  if (h >>> 0 <= g >>> 0) if ((b | 0) == 2) {
   c[o >> 2] = (c[o >> 2] | 0) + h;
   j = g;
   b = 2;
  } else j = g; else {
   j = c[l >> 2] | 0;
   c[o >> 2] = j;
   c[p >> 2] = j;
   j = c[e + 12 >> 2] | 0;
   h = h - g | 0;
   e = e + 8 | 0;
   b = b + -1 | 0;
  }
  c[e >> 2] = (c[e >> 2] | 0) + h;
  c[e + 4 >> 2] = j - h;
 }
 if ((f | 0) == 6) {
  n = c[l >> 2] | 0;
  c[a + 16 >> 2] = n + (c[a + 48 >> 2] | 0);
  a = n;
  c[o >> 2] = a;
  c[p >> 2] = a;
 } else if ((f | 0) == 8) {
  c[a + 16 >> 2] = 0;
  c[o >> 2] = 0;
  c[p >> 2] = 0;
  c[a >> 2] = c[a >> 2] | 32;
  if ((b | 0) == 2) d = 0; else d = d - (c[e + 4 >> 2] | 0) | 0;
 }
 i = q;
 return d | 0;
}

function Hf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 o = i;
 i = i + 112 | 0;
 n = o + 40 | 0;
 l = o + 24 | 0;
 k = o + 16 | 0;
 g = o;
 m = o + 52 | 0;
 f = a[d >> 0] | 0;
 if (Tf(43316, f << 24 >> 24, 4) | 0) {
  e = eg(1144) | 0;
  if (!e) e = 0; else {
   h = e;
   j = h + 112 | 0;
   do {
    c[h >> 2] = 0;
    h = h + 4 | 0;
   } while ((h | 0) < (j | 0));
   if (!(Vf(d, 43) | 0)) c[e >> 2] = f << 24 >> 24 == 114 ? 8 : 4;
   if (Vf(d, 101) | 0) {
    c[g >> 2] = b;
    c[g + 4 >> 2] = 2;
    c[g + 8 >> 2] = 1;
    Na(221, g | 0) | 0;
    f = a[d >> 0] | 0;
   }
   if (f << 24 >> 24 == 97) {
    c[k >> 2] = b;
    c[k + 4 >> 2] = 3;
    f = Na(221, k | 0) | 0;
    if (!(f & 1024)) {
     c[l >> 2] = b;
     c[l + 4 >> 2] = 4;
     c[l + 8 >> 2] = f | 1024;
     Na(221, l | 0) | 0;
    }
    d = c[e >> 2] | 128;
    c[e >> 2] = d;
   } else d = c[e >> 2] | 0;
   c[e + 60 >> 2] = b;
   c[e + 44 >> 2] = e + 120;
   c[e + 48 >> 2] = 1024;
   f = e + 75 | 0;
   a[f >> 0] = -1;
   if ((d & 8 | 0) == 0 ? (c[n >> 2] = b, c[n + 4 >> 2] = 21505, c[n + 8 >> 2] = m, (Ra(54, n | 0) | 0) == 0) : 0) a[f >> 0] = 10;
   c[e + 32 >> 2] = 7;
   c[e + 36 >> 2] = 3;
   c[e + 40 >> 2] = 4;
   c[e + 12 >> 2] = 2;
   if (!(c[8416] | 0)) c[e + 76 >> 2] = -1;
   Xa(33688);
   f = c[8421] | 0;
   c[e + 56 >> 2] = f;
   if (f) c[f + 52 >> 2] = e;
   c[8421] = e;
   Sa(33688);
  }
 } else {
  c[(ef() | 0) >> 2] = 22;
  e = 0;
 }
 i = o;
 return e | 0;
}

function pd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 s = i;
 i = i + 48 | 0;
 o = s + 40 | 0;
 n = s + 32 | 0;
 k = s + 8 | 0;
 l = s;
 m = s + 24 | 0;
 r = s + 16 | 0;
 q = a + 4 | 0;
 t = c[q >> 2] | 0;
 f = c[b >> 2] | 0;
 b = c[b + 4 >> 2] | 0;
 h = d;
 e = c[h >> 2] | 0;
 h = c[h + 4 >> 2] | 0;
 j = e - f << 3;
 c[q >> 2] = t - b + h + j;
 q = c[a >> 2] | 0;
 p = t >>> 5;
 g = q + (p << 2) | 0;
 a = t & 31;
 d = g;
 if ((b | 0) != (a | 0)) {
  t = k;
  c[t >> 2] = f;
  c[t + 4 >> 2] = b;
  t = l;
  c[t >> 2] = e;
  c[t + 4 >> 2] = h;
  c[m >> 2] = d;
  c[m + 4 >> 2] = a;
  c[n >> 2] = c[k >> 2];
  c[n + 4 >> 2] = c[k + 4 >> 2];
  c[o >> 2] = c[l >> 2];
  c[o + 4 >> 2] = c[l + 4 >> 2];
  rd(r, n, o, m);
  i = s;
  return;
 }
 e = f;
 a = h - b + j | 0;
 if ((a | 0) > 0) {
  if (!b) {
   b = e;
   d = p;
   h = 0;
  } else {
   h = 32 - b | 0;
   t = (a | 0) < (h | 0) ? a : h;
   h = -1 >>> (h - t | 0) & -1 << b;
   c[g >> 2] = c[g >> 2] & ~h | c[e >> 2] & h;
   h = t + b | 0;
   d = (h >>> 5) + p | 0;
   f = e + 4 | 0;
   g = q + (d << 2) | 0;
   b = f;
   a = a - t | 0;
   h = h & 31;
  }
  e = a >>> 5;
  ug(g | 0, b | 0, e << 2 | 0) | 0;
  b = a - (e << 5) | 0;
  a = q + (e + d << 2) | 0;
  d = a;
  if ((b | 0) > 0) {
   t = -1 >>> (32 - b | 0);
   c[a >> 2] = c[a >> 2] & ~t | c[f + (e << 2) >> 2] & t;
  } else b = h;
 }
 c[r >> 2] = d;
 c[r + 4 >> 2] = b;
 i = s;
 return;
}

function le(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 k = a + 4 | 0;
 d = c[a >> 2] | 0;
 f = (((c[k >> 2] | 0) - d | 0) / 12 | 0) + 1 | 0;
 if (f >>> 0 > 357913941) we(a);
 l = a + 8 | 0;
 e = ((c[l >> 2] | 0) - d | 0) / 12 | 0;
 if (e >>> 0 < 178956970) {
  e = e << 1;
  e = e >>> 0 < f >>> 0 ? f : e;
  d = ((c[k >> 2] | 0) - d | 0) / 12 | 0;
  if (!e) {
   g = 0;
   h = 0;
  } else i = 6;
 } else {
  e = 357913941;
  d = ((c[k >> 2] | 0) - d | 0) / 12 | 0;
  i = 6;
 }
 if ((i | 0) == 6) {
  g = e;
  h = ye(e * 12 | 0) | 0;
 }
 f = h + (d * 12 | 0) | 0;
 e = f;
 j = h + (g * 12 | 0) | 0;
 c[f >> 2] = c[b >> 2];
 c[f + 4 >> 2] = c[b + 4 >> 2];
 c[f + 8 >> 2] = c[b + 8 >> 2];
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 b = h + ((d + 1 | 0) * 12 | 0) | 0;
 i = c[a >> 2] | 0;
 d = c[k >> 2] | 0;
 if ((d | 0) == (i | 0)) {
  g = a;
  h = k;
  f = i;
 } else {
  do {
   h = f + -12 | 0;
   d = d + -12 | 0;
   c[h >> 2] = c[d >> 2];
   c[h + 4 >> 2] = c[d + 4 >> 2];
   c[h + 8 >> 2] = c[d + 8 >> 2];
   c[d >> 2] = 0;
   c[d + 4 >> 2] = 0;
   c[d + 8 >> 2] = 0;
   f = e + -12 | 0;
   e = f;
  } while ((d | 0) != (i | 0));
  d = e;
  g = a;
  h = k;
  e = d;
  f = c[a >> 2] | 0;
  d = c[k >> 2] | 0;
 }
 c[g >> 2] = e;
 c[h >> 2] = b;
 c[l >> 2] = j;
 e = f;
 if ((d | 0) != (e | 0)) do {
  d = d + -12 | 0;
  ig(d);
 } while ((d | 0) != (e | 0));
 if (!f) return;
 Ae(f);
 return;
}

function Ob(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 n = (d + 1 | 0) / 2 | 0;
 o = (e + 1 | 0) / 2 | 0;
 if (((c[b + 4 >> 2] | 0) - (c[b >> 2] | 0) >> 2 | 0) != (_(o, n) | 0)) Aa(36701, 36586, 388, 36724);
 f = _(e, d) | 0;
 c[a >> 2] = 0;
 g = a + 4 | 0;
 c[g >> 2] = 0;
 c[a + 8 >> 2] = 0;
 do if (f) if (f >>> 0 > 1073741823) we(a); else {
  l = f << 2;
  p = ye(l) | 0;
  c[a >> 2] = p;
  m = p + (f << 2) | 0;
  c[a + 8 >> 2] = m;
  pg(p | 0, 0, l | 0) | 0;
  c[g >> 2] = m;
  break;
 } else p = 0; while (0);
 if ((e | 0) <= 0) return;
 m = (d | 0) > 0;
 k = e + -1 | 0;
 l = d + -1 | 0;
 h = c[b >> 2] | 0;
 i = (n | 0) > 1 ? n : 1;
 f = 0;
 j = 0;
 do {
  if (m) {
   a = j << 1;
   g = _((a | 0) < (k | 0) ? a : k, d) | 0;
   a = a | 1;
   a = _((a | 0) < (k | 0) ? a : k, d) | 0;
   e = f;
   b = 0;
   while (1) {
    q = b << 1;
    r = h + (e << 2) | 0;
    s = (q | 0) < (l | 0) ? q : l;
    c[p + (s + g << 2) >> 2] = c[r >> 2];
    q = q | 1;
    q = (q | 0) < (l | 0) ? q : l;
    c[p + (q + g << 2) >> 2] = c[r >> 2];
    c[p + (s + a << 2) >> 2] = c[r >> 2];
    c[p + (q + a << 2) >> 2] = c[r >> 2];
    b = b + 1 | 0;
    if ((b | 0) >= (n | 0)) break; else e = e + 1 | 0;
   }
   f = i + f | 0;
  }
  j = j + 1 | 0;
 } while ((j | 0) < (o | 0));
 return;
}

function Mb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0.0, o = 0.0, p = 0.0;
 l = i;
 i = i + 16 | 0;
 d = l;
 h = b + 4 | 0;
 e = (c[h >> 2] | 0) - (c[b >> 2] | 0) >> 2;
 f = (e >>> 0) / 3 | 0;
 c[d >> 2] = 0;
 j = d + 4 | 0;
 c[j >> 2] = 0;
 c[d + 8 >> 2] = 0;
 do if (e >>> 0 >= 3) if (e >>> 0 > 3221225471) we(d); else {
  e = f << 2;
  m = ye(e) | 0;
  c[d >> 2] = m;
  k = m + (f << 2) | 0;
  c[d + 8 >> 2] = k;
  pg(m | 0, 0, e | 0) | 0;
  c[j >> 2] = k;
  break;
 } while (0);
 _b(a, 3, d);
 d = c[d >> 2] | 0;
 e = d;
 if (d) {
  f = c[j >> 2] | 0;
  if ((f | 0) != (d | 0)) c[j >> 2] = f + (~((f + -4 - e | 0) >>> 2) << 2);
  Ae(d);
 }
 d = c[h >> 2] | 0;
 k = c[b >> 2] | 0;
 if ((d | 0) == (k | 0)) {
  i = l;
  return;
 }
 b = c[a >> 2] | 0;
 h = c[b >> 2] | 0;
 j = c[b + 12 >> 2] | 0;
 b = c[b + 24 >> 2] | 0;
 d = d - k >> 2;
 e = 0;
 f = 0;
 while (1) {
  p = +g[k + (f << 2) >> 2];
  o = +g[k + (f + 1 << 2) >> 2];
  n = +g[k + (f + 2 << 2) >> 2];
  g[h + (e << 2) >> 2] = p * .29899999499320984 + o * .5870000123977661 + n * .11400000005960464;
  g[j + (e << 2) >> 2] = p * -.16874000430107117 - o * .33125999569892883 + n * .5 + 128.0;
  g[b + (e << 2) >> 2] = p * .5 - o * .4186899960041046 - n * .08130999654531479 + 128.0;
  f = f + 3 | 0;
  if (f >>> 0 >= d >>> 0) break; else e = e + 1 | 0;
 }
 i = l;
 return;
}

function tc(a, c) {
 a = a | 0;
 c = c | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 m = b[a >> 1] | 0;
 d = a + 14 | 0;
 e = b[d >> 1] | 0;
 t = e + m | 0;
 e = m - e | 0;
 m = a + 2 | 0;
 q = b[m >> 1] | 0;
 h = a + 12 | 0;
 f = b[h >> 1] | 0;
 v = f + q | 0;
 f = q - f | 0;
 q = a + 4 | 0;
 l = b[q >> 1] | 0;
 k = a + 10 | 0;
 i = b[k >> 1] | 0;
 j = i + l | 0;
 i = l - i | 0;
 l = a + 6 | 0;
 n = b[l >> 1] | 0;
 r = a + 8 | 0;
 g = b[r >> 1] | 0;
 o = g + n | 0;
 g = n - g | 0;
 n = b[c + 2 >> 1] | 0;
 s = b[c + 6 >> 1] | 0;
 p = b[c + 10 >> 1] | 0;
 u = o + t | 0;
 o = t - o | 0;
 t = j + v | 0;
 j = v - j | 0;
 b[a >> 1] = (_(u + t | 0, s) | 0) >>> 16;
 b[r >> 1] = (_(u - t | 0, s) | 0) >>> 16;
 b[q >> 1] = ((_(p, j) | 0) + (_(o, n) | 0) | 0) >>> 16;
 b[h >> 1] = ((_(p, o) | 0) - (_(n, j) | 0) | 0) >>> 16;
 h = b[c >> 1] | 0;
 j = b[c + 4 >> 1] | 0;
 a = b[c + 8 >> 1] | 0;
 c = b[c + 12 >> 1] | 0;
 b[m >> 1] = ((_(j, f) | 0) + (_(h, e) | 0) + (_(a, i) | 0) + (_(c, g) | 0) | 0) >>> 16;
 b[l >> 1] = ((_(j, e) | 0) - (_(h, i) | 0) - (_(a, g) | 0) - (_(c, f) | 0) | 0) >>> 16;
 b[k >> 1] = ((_(j, g) | 0) - (_(h, f) | 0) + (_(a, e) | 0) + (_(c, i) | 0) | 0) >>> 16;
 b[d >> 1] = ((_(j, i) | 0) - (_(h, g) | 0) - (_(a, f) | 0) + (_(c, e) | 0) | 0) >>> 16;
 return;
}

function Dd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 k = a + 4 | 0;
 d = c[a >> 2] | 0;
 f = (((c[k >> 2] | 0) - d | 0) / 12 | 0) + 1 | 0;
 if (f >>> 0 > 357913941) we(a);
 l = a + 8 | 0;
 e = ((c[l >> 2] | 0) - d | 0) / 12 | 0;
 if (e >>> 0 < 178956970) {
  e = e << 1;
  e = e >>> 0 < f >>> 0 ? f : e;
  d = ((c[k >> 2] | 0) - d | 0) / 12 | 0;
  if (!e) {
   g = 0;
   h = 0;
  } else i = 6;
 } else {
  e = 357913941;
  d = ((c[k >> 2] | 0) - d | 0) / 12 | 0;
  i = 6;
 }
 if ((i | 0) == 6) {
  g = e;
  h = ye(e * 12 | 0) | 0;
 }
 f = h + (d * 12 | 0) | 0;
 e = f;
 j = h + (g * 12 | 0) | 0;
 gg(f, b);
 b = h + ((d + 1 | 0) * 12 | 0) | 0;
 i = c[a >> 2] | 0;
 d = c[k >> 2] | 0;
 if ((d | 0) == (i | 0)) {
  g = a;
  h = k;
  f = i;
 } else {
  do {
   h = f + -12 | 0;
   d = d + -12 | 0;
   c[h >> 2] = c[d >> 2];
   c[h + 4 >> 2] = c[d + 4 >> 2];
   c[h + 8 >> 2] = c[d + 8 >> 2];
   c[d >> 2] = 0;
   c[d + 4 >> 2] = 0;
   c[d + 8 >> 2] = 0;
   f = e + -12 | 0;
   e = f;
  } while ((d | 0) != (i | 0));
  d = e;
  g = a;
  h = k;
  e = d;
  f = c[a >> 2] | 0;
  d = c[k >> 2] | 0;
 }
 c[g >> 2] = e;
 c[h >> 2] = b;
 c[l >> 2] = j;
 e = f;
 if ((d | 0) != (e | 0)) do {
  d = d + -12 | 0;
  ig(d);
 } while ((d | 0) != (e | 0));
 if (!f) return;
 Ae(f);
 return;
}

function Oc(a, b, c, d, e, f, h, i, j) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 i = +i;
 j = j | 0;
 var k = 0.0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0.0, u = 0, v = 0, w = 0, x = 0.0;
 l = e << 1 | 1;
 m = 0;
 k = 0.0;
 do {
  k = k + +g[f + (m << 2) >> 2];
  m = m + 1 | 0;
 } while ((m | 0) != (l | 0));
 if (!a) return;
 w = d - e | 0;
 x = 1.0 - i;
 t = k * i;
 u = (b | 0) == 0;
 v = 0;
 n = 0;
 l = 0;
 while (1) {
  q = l >>> 0 < e >>> 0 ? 0 : l - e | 0;
  r = w + l | 0;
  r = (r >>> 0 < a >>> 0 ? r : a) + -1 | 0;
  s = (q | 0) > (r | 0);
  if (s) k = 0.0; else {
   m = n + e | 0;
   d = q;
   k = 0.0;
   while (1) {
    k = k + +g[f + (m + d << 2) >> 2];
    if ((d | 0) < (r | 0)) d = d + 1 | 0; else break;
   }
  }
  i = 1.0 / (t + x * k);
  if (!u) {
   p = _(v, b) | 0;
   n = n + e | 0;
   o = 0;
   do {
    if (s) k = 0.0; else {
     m = _(o, a) | 0;
     d = q;
     k = 0.0;
     while (1) {
      k = k + +g[h + (d + m << 2) >> 2] * +g[f + (n + d << 2) >> 2];
      if ((d | 0) < (r | 0)) d = d + 1 | 0; else break;
     }
    }
    g[j + (o + p << 2) >> 2] = i * k;
    o = o + 1 | 0;
   } while ((o | 0) != (b | 0));
  }
  l = l + c | 0;
  if (l >>> 0 < a >>> 0) {
   v = v + 1 | 0;
   n = 0 - l | 0;
  } else break;
 }
 return;
}

function Lc(a, b, d, e, f, h) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 o = i;
 i = i + 224 | 0;
 m = o + 72 | 0;
 n = o;
 l = o + 40 | 0;
 c[m >> 2] = 0;
 j = m + 4 | 0;
 c[j >> 2] = 0;
 c[m + 8 >> 2] = 0;
 c[m + 12 >> 2] = 1;
 c[m + 16 >> 2] = 1;
 pg(m + 20 | 0, 0, 132) | 0;
 if (!(uc(d, e, f, 26524, m) | 0)) {
  Bf(35945, 42, 1, c[8426] | 0) | 0;
  n = 0;
  Kc(m);
  i = o;
  return n | 0;
 };
 c[n >> 2] = 0;
 c[n + 4 >> 2] = 0;
 c[n + 8 >> 2] = 0;
 c[n + 12 >> 2] = 0;
 c[n + 16 >> 2] = 0;
 c[n + 20 >> 2] = 0;
 c[l + 4 >> 2] = 0;
 c[l + 8 >> 2] = 0;
 k = l + 4 | 0;
 c[l >> 2] = k;
 e = l + 12 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 b = (b | 0) == 0 ? l : b;
 e = c[m >> 2] | 0;
 f = c[j >> 2] | 0;
 if ((e | 0) > 31 & (f | 0) > 31) {
  j = ye(96) | 0;
  dc(j, e, f, d, +g[a >> 2], b);
  f = j;
 } else f = 0;
 e = f;
 d = Ic(a, m, e, n, b) | 0;
 jg(h, n) | 0;
 if (f) jb[c[(c[f >> 2] | 0) + 4 >> 2] & 15](e);
 ig(l + 20 | 0);
 be(l, c[k >> 2] | 0);
 f = c[n + 12 >> 2] | 0;
 e = f;
 if (f) {
  b = n + 16 | 0;
  j = c[b >> 2] | 0;
  if ((j | 0) != (f | 0)) c[b >> 2] = j + (~((j + -4 - e | 0) >>> 2) << 2);
  Ae(f);
 }
 ig(n);
 n = d;
 Kc(m);
 i = o;
 return n | 0;
}

function he(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 k = a + 8 | 0;
 i = c[a >> 2] | 0;
 h = i;
 if ((((c[k >> 2] | 0) - h | 0) / 12 | 0) >>> 0 >= b >>> 0) return;
 j = a + 4 | 0;
 f = c[j >> 2] | 0;
 d = f;
 if (!b) g = 0; else g = ye(b * 12 | 0) | 0;
 e = g + (((d - h | 0) / 12 | 0) * 12 | 0) | 0;
 l = e;
 b = g + (b * 12 | 0) | 0;
 if ((f | 0) == (i | 0)) {
  f = a;
  g = j;
  e = l;
  i = h;
 } else {
  d = l;
  do {
   h = e + -12 | 0;
   g = f;
   f = f + -12 | 0;
   c[h >> 2] = 0;
   m = e + -8 | 0;
   c[m >> 2] = 0;
   c[e + -4 >> 2] = 0;
   c[h >> 2] = c[f >> 2];
   h = g + -8 | 0;
   c[m >> 2] = c[h >> 2];
   g = g + -4 | 0;
   c[e + -4 >> 2] = c[g >> 2];
   c[g >> 2] = 0;
   c[h >> 2] = 0;
   c[f >> 2] = 0;
   e = d + -12 | 0;
   d = e;
  } while ((f | 0) != (i | 0));
  f = a;
  g = j;
  e = d;
  i = c[a >> 2] | 0;
  d = c[j >> 2] | 0;
 }
 c[f >> 2] = e;
 c[g >> 2] = l;
 c[k >> 2] = b;
 h = i;
 if ((d | 0) != (h | 0)) do {
  e = d;
  d = d + -12 | 0;
  g = c[d >> 2] | 0;
  b = g;
  if (g) {
   e = e + -8 | 0;
   f = c[e >> 2] | 0;
   if ((f | 0) != (g | 0)) c[e >> 2] = f + (~((f + -4 - b | 0) >>> 2) << 2);
   Ae(g);
  }
 } while ((d | 0) != (h | 0));
 if (!i) return;
 Ae(i);
 return;
}

function bc(b, e, f, g, h, i) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 var j = 0, k = 0, l = 0, m = 0;
 k = _(i, h) | 0;
 j = k * 3 | 0;
 c[b >> 2] = 0;
 l = b + 4 | 0;
 c[l >> 2] = 0;
 c[b + 8 >> 2] = 0;
 if (!k) j = 0; else {
  if ((k | 0) < 0) we(b);
  k = ye(j) | 0;
  c[l >> 2] = k;
  c[b >> 2] = k;
  c[b + 8 >> 2] = k + j;
  do {
   a[k >> 0] = 0;
   k = (c[l >> 2] | 0) + 1 | 0;
   c[l >> 2] = k;
   j = j + -1 | 0;
  } while ((j | 0) != 0);
  j = c[b >> 2] | 0;
 }
 e = e + 8 | 0;
 Qb(c[e >> 2] | 0, f, g, h, i, j, 3);
 Qb((c[e >> 2] | 0) + 308 | 0, f, g, h, i, (c[b >> 2] | 0) + 1 | 0, 3);
 Qb((c[e >> 2] | 0) + 616 | 0, f, g, h, i, (c[b >> 2] | 0) + 2 | 0, 3);
 j = c[b >> 2] | 0;
 if ((c[l >> 2] | 0) == (j | 0)) return; else k = 0;
 do {
  m = j + k | 0;
  f = j + (k + 1) | 0;
  h = d[f >> 0] | 0;
  i = j + (k + 2) | 0;
  e = d[i >> 0] | 0;
  g = (d[m >> 0] | 0) + 384 | 0;
  a[m >> 0] = a[36931 + ((c[27900 + (e << 2) >> 2] | 0) + g) >> 0] | 0;
  a[f >> 0] = a[36931 + (((c[29948 + (h << 2) >> 2] | 0) + (c[28924 + (e << 2) >> 2] | 0) >> 16) + g) >> 0] | 0;
  a[i >> 0] = a[36931 + ((c[30972 + (h << 2) >> 2] | 0) + g) >> 0] | 0;
  k = k + 3 | 0;
  j = c[b >> 2] | 0;
 } while (k >>> 0 < ((c[l >> 2] | 0) - j | 0) >>> 0);
 return;
}

function Ve(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0;
 a : do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0) ? (h = d + 28 | 0, (c[h >> 2] | 0) != 1) : 0) c[h >> 2] = f;
 } else {
  if ((b | 0) != (c[d >> 2] | 0)) {
   j = c[b + 8 >> 2] | 0;
   gb[c[(c[j >> 2] | 0) + 24 >> 2] & 3](j, d, e, f, g);
   break;
  }
  if ((c[d + 16 >> 2] | 0) != (e | 0) ? (i = d + 20 | 0, (c[i >> 2] | 0) != (e | 0)) : 0) {
   c[d + 32 >> 2] = f;
   f = d + 44 | 0;
   if ((c[f >> 2] | 0) == 4) break;
   h = d + 52 | 0;
   a[h >> 0] = 0;
   k = d + 53 | 0;
   a[k >> 0] = 0;
   b = c[b + 8 >> 2] | 0;
   pb[c[(c[b >> 2] | 0) + 20 >> 2] & 3](b, d, e, e, 1, g);
   if (a[k >> 0] | 0) {
    if (!(a[h >> 0] | 0)) {
     h = 1;
     j = 13;
    }
   } else {
    h = 0;
    j = 13;
   }
   do if ((j | 0) == 13) {
    c[i >> 2] = e;
    k = d + 40 | 0;
    c[k >> 2] = (c[k >> 2] | 0) + 1;
    if ((c[d + 36 >> 2] | 0) == 1 ? (c[d + 24 >> 2] | 0) == 2 : 0) {
     a[d + 54 >> 0] = 1;
     if (h) break;
    } else j = 16;
    if ((j | 0) == 16 ? h : 0) break;
    c[f >> 2] = 4;
    break a;
   } while (0);
   c[f >> 2] = 3;
   break;
  }
  if ((f | 0) == 1) c[d + 32 >> 2] = 1;
 } while (0);
 return;
}

function Ad(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 j = a + 8 | 0;
 f = c[j >> 2] | 0;
 k = a + 4 | 0;
 d = c[k >> 2] | 0;
 e = d;
 if (((f - e | 0) / 12 | 0) >>> 0 >= b >>> 0) {
  do {
   c[d >> 2] = 0;
   c[d + 4 >> 2] = 0;
   c[d + 8 >> 2] = 0;
   d = (c[k >> 2] | 0) + 12 | 0;
   c[k >> 2] = d;
   b = b + -1 | 0;
  } while ((b | 0) != 0);
  return;
 }
 d = c[a >> 2] | 0;
 e = ((e - d | 0) / 12 | 0) + b | 0;
 if (e >>> 0 > 357913941) we(a);
 g = d;
 d = (f - g | 0) / 12 | 0;
 if (d >>> 0 < 178956970) {
  d = d << 1;
  d = d >>> 0 < e >>> 0 ? e : d;
  e = ((c[k >> 2] | 0) - g | 0) / 12 | 0;
  if (!d) {
   f = 0;
   h = 0;
  } else i = 8;
 } else {
  d = 357913941;
  e = ((c[k >> 2] | 0) - g | 0) / 12 | 0;
  i = 8;
 }
 if ((i | 0) == 8) {
  f = d;
  h = ye(d * 12 | 0) | 0;
 }
 d = h + (e * 12 | 0) | 0;
 g = h + (f * 12 | 0) | 0;
 f = d;
 do {
  c[f >> 2] = 0;
  c[f + 4 >> 2] = 0;
  c[f + 8 >> 2] = 0;
  f = d + 12 | 0;
  d = f;
  b = b + -1 | 0;
 } while ((b | 0) != 0);
 b = c[a >> 2] | 0;
 f = (c[k >> 2] | 0) - b | 0;
 i = h + ((((f | 0) / -12 | 0) + e | 0) * 12 | 0) | 0;
 tg(i | 0, b | 0, f | 0) | 0;
 c[a >> 2] = i;
 c[k >> 2] = d;
 c[j >> 2] = g;
 if (!b) return;
 Ae(b);
 return;
}

function Fd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 j = a + 8 | 0;
 f = c[j >> 2] | 0;
 k = a + 4 | 0;
 d = c[k >> 2] | 0;
 e = d;
 if (((f - e | 0) / 1028 | 0) >>> 0 >= b >>> 0) {
  do {
   pg(d | 0, 0, 1024) | 0;
   c[d + 1024 >> 2] = 1;
   d = (c[k >> 2] | 0) + 1028 | 0;
   c[k >> 2] = d;
   b = b + -1 | 0;
  } while ((b | 0) != 0);
  return;
 }
 d = c[a >> 2] | 0;
 e = ((e - d | 0) / 1028 | 0) + b | 0;
 if (e >>> 0 > 4177983) we(a);
 g = d;
 d = (f - g | 0) / 1028 | 0;
 if (d >>> 0 < 2088991) {
  d = d << 1;
  d = d >>> 0 < e >>> 0 ? e : d;
  e = ((c[k >> 2] | 0) - g | 0) / 1028 | 0;
  if (!d) {
   f = 0;
   h = 0;
  } else i = 8;
 } else {
  d = 4177983;
  e = ((c[k >> 2] | 0) - g | 0) / 1028 | 0;
  i = 8;
 }
 if ((i | 0) == 8) {
  f = d;
  h = ye(d * 1028 | 0) | 0;
 }
 d = h + (e * 1028 | 0) | 0;
 g = h + (f * 1028 | 0) | 0;
 f = d;
 do {
  pg(f | 0, 0, 1024) | 0;
  c[f + 1024 >> 2] = 1;
  f = d + 1028 | 0;
  d = f;
  b = b + -1 | 0;
 } while ((b | 0) != 0);
 b = c[a >> 2] | 0;
 f = (c[k >> 2] | 0) - b | 0;
 i = h + ((((f | 0) / -1028 | 0) + e | 0) * 1028 | 0) | 0;
 tg(i | 0, b | 0, f | 0) | 0;
 c[a >> 2] = i;
 c[k >> 2] = d;
 c[j >> 2] = g;
 if (!b) return;
 Ae(b);
 return;
}

function Hd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 c[b >> 2] = c[d >> 2];
 c[b + 4 >> 2] = c[d + 4 >> 2];
 c[b + 8 >> 2] = c[d + 8 >> 2];
 c[b + 12 >> 2] = c[d + 12 >> 2];
 c[b + 16 >> 2] = c[d + 16 >> 2];
 c[b + 20 >> 2] = c[d + 20 >> 2];
 c[b + 24 >> 2] = c[d + 24 >> 2];
 c[b + 28 >> 2] = c[d + 28 >> 2];
 Kd(b + 32 | 0, d + 32 | 0);
 Kd(b + 44 | 0, d + 44 | 0);
 Ld(b + 56 | 0, d + 56 | 0);
 Md(b + 68 | 0, d + 68 | 0);
 Nd(b + 80 | 0, d + 80 | 0);
 Od(b + 92 | 0, d + 92 | 0);
 f = b + 104 | 0;
 c[f >> 2] = 0;
 j = b + 108 | 0;
 c[j >> 2] = 0;
 c[b + 112 >> 2] = 0;
 i = d + 108 | 0;
 k = c[i >> 2] | 0;
 g = d + 104 | 0;
 e = c[g >> 2] | 0;
 h = k - e | 0;
 if ((k | 0) != (e | 0)) {
  if ((h | 0) < 0) we(f);
  e = ye(h) | 0;
  c[j >> 2] = e;
  c[f >> 2] = e;
  c[b + 112 >> 2] = e + h;
  f = c[g >> 2] | 0;
  g = c[i >> 2] | 0;
  if ((f | 0) != (g | 0)) do {
   a[e >> 0] = a[f >> 0] | 0;
   e = (c[j >> 2] | 0) + 1 | 0;
   c[j >> 2] = e;
   f = f + 1 | 0;
  } while ((f | 0) != (g | 0));
 }
 Kd(b + 116 | 0, d + 116 | 0);
 gg(b + 128 | 0, d + 128 | 0);
 k = b + 140 | 0;
 b = d + 140 | 0;
 c[k >> 2] = c[b >> 2];
 c[k + 4 >> 2] = c[b + 4 >> 2];
 c[k + 8 >> 2] = c[b + 8 >> 2];
 return;
}

function Te(d, e, f, g) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 64 | 0;
 q = r;
 p = c[d >> 2] | 0;
 o = d + (c[p + -8 >> 2] | 0) | 0;
 p = c[p + -4 >> 2] | 0;
 c[q >> 2] = f;
 c[q + 4 >> 2] = d;
 c[q + 8 >> 2] = e;
 c[q + 12 >> 2] = g;
 g = q + 16 | 0;
 d = q + 20 | 0;
 e = q + 24 | 0;
 h = q + 28 | 0;
 j = q + 32 | 0;
 k = q + 40 | 0;
 l = (p | 0) == (f | 0);
 m = g;
 n = m + 36 | 0;
 do {
  c[m >> 2] = 0;
  m = m + 4 | 0;
 } while ((m | 0) < (n | 0));
 b[g + 36 >> 1] = 0;
 a[g + 38 >> 0] = 0;
 a : do if (l) {
  c[q + 48 >> 2] = 1;
  pb[c[(c[f >> 2] | 0) + 20 >> 2] & 3](f, q, o, o, 1, 0);
  g = (c[e >> 2] | 0) == 1 ? o : 0;
 } else {
  gb[c[(c[p >> 2] | 0) + 24 >> 2] & 3](p, q, o, 1, 0);
  switch (c[q + 36 >> 2] | 0) {
  case 0:
   {
    g = (c[k >> 2] | 0) == 1 & (c[h >> 2] | 0) == 1 & (c[j >> 2] | 0) == 1 ? c[d >> 2] | 0 : 0;
    break a;
   }
  case 1:
   break;
  default:
   {
    g = 0;
    break a;
   }
  }
  if ((c[e >> 2] | 0) != 1 ? !((c[k >> 2] | 0) == 0 & (c[h >> 2] | 0) == 1 & (c[j >> 2] | 0) == 1) : 0) {
   g = 0;
   break;
  }
  g = c[g >> 2] | 0;
 } while (0);
 i = r;
 return g | 0;
}

function Cc(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 if (!d) {
  d = c[b + 36 >> 2] | 0;
  h = c[b + 32 >> 2] | 0;
  if ((d | 0) == (h | 0)) d = 2; else {
   f = (d - h | 0) / 12 | 0;
   g = 0;
   d = 2;
   do {
    e = a[h + (g * 12 | 0) >> 0] | 0;
    if (!(e & 1)) e = (e & 255) >>> 1; else e = c[h + (g * 12 | 0) + 4 >> 2] | 0;
    d = d + 1 + e | 0;
    g = g + 1 | 0;
   } while (g >>> 0 < f >>> 0);
  }
  e = c[b + 48 >> 2] | 0;
  h = c[b + 44 >> 2] | 0;
  if ((e | 0) != (h | 0)) {
   f = (e - h | 0) / 12 | 0;
   g = 0;
   do {
    e = a[h + (g * 12 | 0) >> 0] | 0;
    if (!(e & 1)) e = (e & 255) >>> 1; else e = c[h + (g * 12 | 0) + 4 >> 2] | 0;
    d = d + 2 + e | 0;
    g = g + 1 | 0;
   } while (g >>> 0 < f >>> 0);
  }
 } else d = 20;
 d = d + 4 | 0;
 e = c[b + 60 >> 2] | 0;
 g = c[b + 56 >> 2] | 0;
 if ((e | 0) != (g | 0)) {
  e = (e - g | 0) / 24 | 0;
  f = 0;
  do {
   d = ((c[g + (f * 24 | 0) + 12 >> 2] | 0) != 0 ? 129 : 65) + d | 0;
   f = f + 1 | 0;
  } while (f >>> 0 < e >>> 0);
 }
 h = a[b + 128 >> 0] | 0;
 return d + 24 + ((h & 1) == 0 ? (h & 255) >>> 1 : c[b + 132 >> 2] | 0) + ((((c[b + 84 >> 2] | 0) - (c[b + 80 >> 2] | 0) | 0) / 40 | 0) * 5 | 0) | 0;
}

function Ed(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 j = a + 8 | 0;
 f = c[j >> 2] | 0;
 k = a + 4 | 0;
 d = c[k >> 2] | 0;
 e = d;
 if (((f - e | 0) / 1280 | 0) >>> 0 >= b >>> 0) {
  do {
   pg(d | 0, 0, 1280) | 0;
   d = (c[k >> 2] | 0) + 1280 | 0;
   c[k >> 2] = d;
   b = b + -1 | 0;
  } while ((b | 0) != 0);
  return;
 }
 d = c[a >> 2] | 0;
 e = ((e - d | 0) / 1280 | 0) + b | 0;
 if (e >>> 0 > 3355443) we(a);
 g = d;
 d = (f - g | 0) / 1280 | 0;
 if (d >>> 0 < 1677721) {
  d = d << 1;
  d = d >>> 0 < e >>> 0 ? e : d;
  e = ((c[k >> 2] | 0) - g | 0) / 1280 | 0;
  if (!d) {
   f = 0;
   h = 0;
  } else i = 8;
 } else {
  d = 3355443;
  e = ((c[k >> 2] | 0) - g | 0) / 1280 | 0;
  i = 8;
 }
 if ((i | 0) == 8) {
  f = d;
  h = ye(d * 1280 | 0) | 0;
 }
 d = h + (e * 1280 | 0) | 0;
 g = h + (f * 1280 | 0) | 0;
 f = d;
 do {
  pg(f | 0, 0, 1280) | 0;
  f = d + 1280 | 0;
  d = f;
  b = b + -1 | 0;
 } while ((b | 0) != 0);
 b = c[a >> 2] | 0;
 f = (c[k >> 2] | 0) - b | 0;
 i = h + ((((f | 0) / -1280 | 0) + e | 0) * 1280 | 0) | 0;
 tg(i | 0, b | 0, f | 0) | 0;
 c[a >> 2] = i;
 c[k >> 2] = d;
 c[j >> 2] = g;
 if (!b) return;
 Ae(b);
 return;
}

function Bc(a, d) {
 a = a | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 e = c[a + 84 >> 2] | 0;
 o = c[a + 80 >> 2] | 0;
 if ((e | 0) == (o | 0)) return;
 m = (e - o | 0) / 40 | 0;
 n = 0;
 do {
  a = c[o + (n * 40 | 0) + 32 >> 2] | 0;
  j = c[o + (n * 40 | 0) + 28 >> 2] | 0;
  if ((a | 0) != (j | 0)) {
   k = d + (n * 1028 | 0) + 960 | 0;
   l = d + (n * 1028 | 0) | 0;
   h = a - j >> 1;
   i = 0;
   do {
    g = 1;
    a = 0;
    do {
     e = b[j + ((c[27292 + (g << 2) >> 2] | 0) + i << 1) >> 1] | 0;
     f = e << 16 >> 16;
     if (!(e << 16 >> 16)) a = a + 1 | 0; else {
      if ((a | 0) > 15) {
       p = a + -16 | 0;
       a = p >>> 4;
       c[k >> 2] = (a << 1) + 2 + (c[k >> 2] | 0);
       a = p - (a << 4) | 0;
      }
      a = d + (n * 1028 | 0) + ((a << 4 | 1) + ((aa((e << 16 >> 16 > -1 ? f : 0 - f | 0) | 0) | 0) ^ 31) << 2) | 0;
      c[a >> 2] = (c[a >> 2] | 0) + 2;
      a = 0;
     }
     g = g + 1 | 0;
    } while ((g | 0) != 64);
    if ((a | 0) > 0) c[l >> 2] = (c[l >> 2] | 0) + 2;
    i = i + 64 | 0;
   } while (i >>> 0 < h >>> 0);
  }
  n = n + 1 | 0;
 } while (n >>> 0 < m >>> 0);
 return;
}

function Xb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 l = b + 84 | 0;
 m = b + 80 | 0;
 d = c[m >> 2] | 0;
 if ((c[l >> 2] | 0) == (d | 0)) return;
 n = b + 12 | 0;
 o = b + 16 | 0;
 p = b + 60 | 0;
 k = b + 56 | 0;
 j = a + 8 | 0;
 i = 0;
 while (1) {
  b = c[n >> 2] | 0;
  a = c[d + (i * 40 | 0) + 4 >> 2] | 0;
  if ((b | 0) % (a | 0) | 0) {
   b = 4;
   break;
  }
  e = c[o >> 2] | 0;
  f = c[d + (i * 40 | 0) + 8 >> 2] | 0;
  if ((e | 0) % (f | 0) | 0) {
   b = 6;
   break;
  }
  g = c[d + (i * 40 | 0) + 12 >> 2] | 0;
  h = c[k >> 2] | 0;
  if (g >>> 0 >= (((c[p >> 2] | 0) - h | 0) / 24 | 0) >>> 0) {
   b = 8;
   break;
  }
  Tb((c[j >> 2] | 0) + (i * 308 | 0) | 0, d + (i * 40 | 0) | 0, (b | 0) / (a | 0) | 0, (e | 0) / (f | 0) | 0, c[h + (g * 24 | 0) >> 2] | 0);
  i = i + 1 | 0;
  d = c[m >> 2] | 0;
  if (i >>> 0 >= (((c[l >> 2] | 0) - d | 0) / 40 | 0) >>> 0) {
   b = 10;
   break;
  }
 }
 if ((b | 0) == 4) Aa(34985, 34635, 252, 35033); else if ((b | 0) == 6) Aa(35050, 34635, 253, 35033); else if ((b | 0) == 8) Aa(35098, 34635, 256, 35033); else if ((b | 0) == 10) return;
}

function Ff(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 224 | 0;
 o = s + 120 | 0;
 r = s + 80 | 0;
 q = s;
 p = s + 136 | 0;
 f = r;
 g = f + 40 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (g | 0));
 c[o >> 2] = c[e >> 2];
 if ((Zf(0, d, o, q, r) | 0) < 0) e = -1; else {
  if ((c[b + 76 >> 2] | 0) > -1) m = Jf(b) | 0; else m = 0;
  e = c[b >> 2] | 0;
  n = e & 32;
  if ((a[b + 74 >> 0] | 0) < 1) c[b >> 2] = e & -33;
  e = b + 48 | 0;
  if (!(c[e >> 2] | 0)) {
   g = b + 44 | 0;
   h = c[g >> 2] | 0;
   c[g >> 2] = p;
   j = b + 28 | 0;
   c[j >> 2] = p;
   k = b + 20 | 0;
   c[k >> 2] = p;
   c[e >> 2] = 80;
   l = b + 16 | 0;
   c[l >> 2] = p + 80;
   f = Zf(b, d, o, q, r) | 0;
   if (h) {
    fb[c[b + 36 >> 2] & 7](b, 0, 0) | 0;
    f = (c[k >> 2] | 0) == 0 ? -1 : f;
    c[g >> 2] = h;
    c[e >> 2] = 0;
    c[l >> 2] = 0;
    c[j >> 2] = 0;
    c[k >> 2] = 0;
   }
  } else f = Zf(b, d, o, q, r) | 0;
  e = c[b >> 2] | 0;
  c[b >> 2] = e | n;
  if (m) Kf(b);
  e = (e & 32 | 0) == 0 ? f : -1;
 }
 i = s;
 return e | 0;
}

function Sd(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 f = b + 4 | 0;
 b = c[f >> 2] | 0;
 if (!b) {
  c[d >> 2] = f;
  d = f;
  return d | 0;
 }
 j = a[e >> 0] | 0;
 i = (j & 1) == 0;
 j = i ? (j & 255) >>> 1 : c[e + 4 >> 2] | 0;
 i = i ? e + 1 | 0 : c[e + 8 >> 2] | 0;
 while (1) {
  e = b + 16 | 0;
  f = a[e >> 0] | 0;
  g = (f & 1) == 0;
  f = g ? (f & 255) >>> 1 : c[b + 20 >> 2] | 0;
  e = g ? e + 1 | 0 : c[b + 24 >> 2] | 0;
  g = f >>> 0 < j >>> 0;
  k = Uf(i, e, g ? f : j) | 0;
  h = j >>> 0 < f >>> 0;
  if ((((k | 0) == 0 ? (h ? -2147483648 : 0) : k) | 0) < 0) {
   f = c[b >> 2] | 0;
   if (!f) {
    f = b;
    e = 5;
    break;
   } else b = f;
  } else {
   k = Uf(e, i, h ? j : f) | 0;
   if ((((k | 0) == 0 ? (g ? -2147483648 : 0) : k) | 0) >= 0) {
    e = 10;
    break;
   }
   f = b + 4 | 0;
   e = c[f >> 2] | 0;
   if (!e) {
    e = 9;
    break;
   } else b = e;
  }
 }
 if ((e | 0) == 5) {
  c[d >> 2] = b;
  k = f;
  return k | 0;
 } else if ((e | 0) == 9) {
  c[d >> 2] = b;
  k = f;
  return k | 0;
 } else if ((e | 0) == 10) {
  c[d >> 2] = b;
  k = d;
  return k | 0;
 }
 return 0;
}

function wd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 l = a + 8 | 0;
 i = c[a >> 2] | 0;
 h = i;
 if ((((c[l >> 2] | 0) - h | 0) / 20 | 0) >>> 0 >= b >>> 0) return;
 k = a + 4 | 0;
 f = c[k >> 2] | 0;
 d = f;
 if (!b) g = 0; else g = ye(b * 20 | 0) | 0;
 e = g + (((d - h | 0) / 20 | 0) * 20 | 0) | 0;
 m = e;
 j = g + (b * 20 | 0) | 0;
 if ((f | 0) == (i | 0)) {
  f = a;
  g = k;
  e = m;
  b = h;
 } else {
  d = m;
  do {
   h = f;
   f = f + -20 | 0;
   c[e + -20 >> 2] = c[f >> 2];
   c[e + -16 >> 2] = c[h + -16 >> 2];
   c[e + -12 >> 2] = c[h + -12 >> 2];
   g = h + -8 | 0;
   b = c[g >> 2] | 0;
   c[g >> 2] = 0;
   h = c[h + -4 >> 2] | 0;
   c[e + -8 >> 2] = b;
   c[e + -4 >> 2] = h;
   e = d + -20 | 0;
   d = e;
  } while ((f | 0) != (i | 0));
  f = a;
  g = k;
  e = d;
  b = c[a >> 2] | 0;
  d = c[k >> 2] | 0;
 }
 c[f >> 2] = e;
 c[g >> 2] = m;
 c[l >> 2] = j;
 f = b;
 if ((d | 0) != (f | 0)) do {
  m = d + -8 | 0;
  e = c[m >> 2] | 0;
  c[m >> 2] = 0;
  if (e) jb[c[d + -4 >> 2] & 15](e);
  d = d + -20 | 0;
 } while ((d | 0) != (f | 0));
 if (!b) return;
 Ae(b);
 return;
}

function Lb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0.0, o = 0.0;
 d = b + 4 | 0;
 e = c[d >> 2] | 0;
 i = c[b >> 2] | 0;
 j = e - i >> 2;
 if ((j >>> 0) % 3 | 0) Aa(36566, 36586, 322, 36622);
 k = (j >>> 0) / 3 | 0;
 c[a >> 2] = 0;
 f = a + 4 | 0;
 c[f >> 2] = 0;
 c[a + 8 >> 2] = 0;
 do if (j >>> 0 >= 3) if (j >>> 0 > 3221225471) we(a); else {
  l = k << 2;
  m = ye(l) | 0;
  c[a >> 2] = m;
  h = m + (k << 2) | 0;
  c[a + 8 >> 2] = h;
  pg(m | 0, 0, l | 0) | 0;
  c[f >> 2] = h;
  h = c[d >> 2] | 0;
  l = c[b >> 2] | 0;
  break;
 } else {
  h = e;
  l = i;
  m = 0;
 } while (0);
 if ((h | 0) == (l | 0)) return;
 d = h - l >> 2;
 e = 0;
 f = 0;
 while (1) {
  o = +P(+(+g[l + (f << 2) >> 2] / 255.0), 2.2);
  n = +P(+(+g[l + (f + 1 << 2) >> 2] / 255.0), 2.2);
  g[m + (e << 2) >> 2] = +P(+(o * .29899999499320984 + n * .5870000123977661 + +P(+(+g[l + (f + 2 << 2) >> 2] / 255.0), 2.2) * .11400000005960464), .45454545454545453) * 255.0;
  f = f + 3 | 0;
  if (f >>> 0 >= d >>> 0) break; else e = e + 1 | 0;
 }
 return;
}

function Tf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 h = d & 255;
 f = (e | 0) != 0;
 a : do if (f & (b & 3 | 0) != 0) {
  g = d & 255;
  while (1) {
   if ((a[b >> 0] | 0) == g << 24 >> 24) {
    i = 6;
    break a;
   }
   b = b + 1 | 0;
   e = e + -1 | 0;
   f = (e | 0) != 0;
   if (!(f & (b & 3 | 0) != 0)) {
    i = 5;
    break;
   }
  }
 } else i = 5; while (0);
 if ((i | 0) == 5) if (f) i = 6; else e = 0;
 b : do if ((i | 0) == 6) {
  g = d & 255;
  if ((a[b >> 0] | 0) != g << 24 >> 24) {
   f = _(h, 16843009) | 0;
   c : do if (e >>> 0 > 3) while (1) {
    h = c[b >> 2] ^ f;
    if ((h & -2139062144 ^ -2139062144) & h + -16843009) break;
    b = b + 4 | 0;
    e = e + -4 | 0;
    if (e >>> 0 <= 3) {
     i = 11;
     break c;
    }
   } else i = 11; while (0);
   if ((i | 0) == 11) if (!e) {
    e = 0;
    break;
   }
   while (1) {
    if ((a[b >> 0] | 0) == g << 24 >> 24) break b;
    b = b + 1 | 0;
    e = e + -1 | 0;
    if (!e) {
     e = 0;
     break;
    }
   }
  }
 } while (0);
 return ((e | 0) != 0 ? b : 0) | 0;
}

function se(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 k = b + 8 | 0;
 g = c[k >> 2] | 0;
 l = b + 4 | 0;
 e = c[l >> 2] | 0;
 f = e;
 if ((g - f | 0) >>> 0 >= d >>> 0) {
  do {
   a[e >> 0] = 0;
   e = (c[l >> 2] | 0) + 1 | 0;
   c[l >> 2] = e;
   d = d + -1 | 0;
  } while ((d | 0) != 0);
  return;
 }
 e = c[b >> 2] | 0;
 f = f - e + d | 0;
 if ((f | 0) < 0) we(b);
 h = e;
 e = g - h | 0;
 if (e >>> 0 < 1073741823) {
  e = e << 1;
  e = e >>> 0 < f >>> 0 ? f : e;
  f = (c[l >> 2] | 0) - h | 0;
  if (!e) {
   g = 0;
   i = 0;
  } else j = 8;
 } else {
  e = 2147483647;
  f = (c[l >> 2] | 0) - h | 0;
  j = 8;
 }
 if ((j | 0) == 8) {
  g = e;
  i = ye(e) | 0;
 }
 e = i + f | 0;
 h = i + g | 0;
 g = e;
 do {
  a[g >> 0] = 0;
  g = e + 1 | 0;
  e = g;
  d = d + -1 | 0;
 } while ((d | 0) != 0);
 d = c[b >> 2] | 0;
 g = (c[l >> 2] | 0) - d | 0;
 j = i + (f - g) | 0;
 tg(j | 0, d | 0, g | 0) | 0;
 c[b >> 2] = j;
 c[l >> 2] = e;
 c[k >> 2] = h;
 if (!d) return;
 Ae(d);
 return;
}

function Nf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 m = i;
 i = i + 48 | 0;
 h = m + 16 | 0;
 g = m;
 f = m + 32 | 0;
 c[f >> 2] = d;
 j = f + 4 | 0;
 l = b + 48 | 0;
 n = c[l >> 2] | 0;
 c[j >> 2] = e - ((n | 0) != 0 & 1);
 k = b + 44 | 0;
 c[f + 8 >> 2] = c[k >> 2];
 c[f + 12 >> 2] = n;
 if (!(c[8415] | 0)) {
  c[h >> 2] = c[b + 60 >> 2];
  c[h + 4 >> 2] = f;
  c[h + 8 >> 2] = 2;
  f = ff(cb(145, h | 0) | 0) | 0;
 } else {
  wa(13, b | 0);
  c[g >> 2] = c[b + 60 >> 2];
  c[g + 4 >> 2] = f;
  c[g + 8 >> 2] = 2;
  f = ff(cb(145, g | 0) | 0) | 0;
  sa(0);
 }
 if ((f | 0) >= 1) {
  j = c[j >> 2] | 0;
  if (f >>> 0 > j >>> 0) {
   h = c[k >> 2] | 0;
   g = b + 4 | 0;
   c[g >> 2] = h;
   c[b + 8 >> 2] = h + (f - j);
   if (!(c[l >> 2] | 0)) f = e; else {
    c[g >> 2] = h + 1;
    a[d + (e + -1) >> 0] = a[h >> 0] | 0;
    f = e;
   }
  }
 } else {
  c[b >> 2] = c[b >> 2] | f & 48 ^ 16;
  c[b + 8 >> 2] = 0;
  c[b + 4 >> 2] = 0;
 }
 i = m;
 return f | 0;
}

function tf(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 j = _(e, d) | 0;
 if ((c[f + 76 >> 2] | 0) > -1) k = Jf(f) | 0; else k = 0;
 g = f + 74 | 0;
 h = a[g >> 0] | 0;
 a[g >> 0] = h + 255 | h;
 g = f + 4 | 0;
 h = c[g >> 2] | 0;
 i = (c[f + 8 >> 2] | 0) - h | 0;
 if ((i | 0) > 0) {
  i = i >>> 0 < j >>> 0 ? i : j;
  tg(b | 0, h | 0, i | 0) | 0;
  c[g >> 2] = h + i;
  b = b + i | 0;
  g = j - i | 0;
 } else g = j;
 a : do if (!g) l = 13; else {
  i = f + 32 | 0;
  h = g;
  while (1) {
   if (Rf(f) | 0) {
    e = h;
    break;
   }
   g = fb[c[i >> 2] & 7](f, b, h) | 0;
   if ((g + 1 | 0) >>> 0 < 2) {
    e = h;
    break;
   }
   if ((h | 0) == (g | 0)) {
    l = 13;
    break a;
   } else {
    b = b + g | 0;
    h = h - g | 0;
   }
  }
  if (k) Kf(f);
  e = ((j - e | 0) >>> 0) / (d >>> 0) | 0;
 } while (0);
 if ((l | 0) == 13) if (k) Kf(f);
 return e | 0;
}

function ec(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 j = a + 4 | 0;
 e = c[j >> 2] | 0;
 d = c[a >> 2] | 0;
 f = (e - d | 0) / 12 | 0;
 if (f >>> 0 < b >>> 0) {
  fe(a, b - f | 0);
  return;
 }
 if (f >>> 0 <= b >>> 0) return;
 i = d + (b * 12 | 0) | 0;
 if ((e | 0) == (i | 0)) return;
 while (1) {
  d = e + -12 | 0;
  c[j >> 2] = d;
  h = c[d >> 2] | 0;
  if (h) {
   g = e + -8 | 0;
   e = c[g >> 2] | 0;
   if ((e | 0) == (h | 0)) d = h; else {
    do {
     f = e + -12 | 0;
     c[g >> 2] = f;
     b = c[f >> 2] | 0;
     a = b;
     if (!b) e = f; else {
      e = e + -8 | 0;
      f = c[e >> 2] | 0;
      if ((f | 0) != (b | 0)) c[e >> 2] = f + (~((f + -4 - a | 0) >>> 2) << 2);
      Ae(b);
      e = c[g >> 2] | 0;
     }
    } while ((e | 0) != (h | 0));
    d = c[d >> 2] | 0;
   }
   Ae(d);
   d = c[j >> 2] | 0;
  }
  if ((d | 0) == (i | 0)) break; else e = d;
 }
 return;
}

function ke(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 k = a + 8 | 0;
 f = c[k >> 2] | 0;
 l = a + 4 | 0;
 d = c[l >> 2] | 0;
 e = d;
 if (f - e >> 2 >>> 0 >= b >>> 0) {
  pg(d | 0, 0, b << 2 | 0) | 0;
  c[l >> 2] = d + (b << 2);
  return;
 }
 i = c[a >> 2] | 0;
 j = i;
 e = (e - j >> 2) + b | 0;
 if (e >>> 0 > 1073741823) we(a);
 g = i;
 d = f - g | 0;
 if (d >> 2 >>> 0 < 536870911) {
  d = d >> 1;
  d = d >>> 0 < e >>> 0 ? e : d;
  f = (c[l >> 2] | 0) - g | 0;
  e = f >> 2;
  if (!d) {
   h = 0;
   g = 0;
   d = f;
  } else m = 8;
 } else {
  f = (c[l >> 2] | 0) - g | 0;
  d = 1073741823;
  e = f >> 2;
  m = 8;
 }
 if ((m | 0) == 8) {
  h = d;
  g = ye(d << 2) | 0;
  d = f;
 }
 pg(g + (e << 2) | 0, 0, b << 2 | 0) | 0;
 tg(g | 0, i | 0, d | 0) | 0;
 c[a >> 2] = g;
 c[l >> 2] = g + (e + b << 2);
 c[k >> 2] = g + (h << 2);
 if (!j) return;
 Ae(j);
 return;
}

function $e() {
 var a = 0, b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 f = i;
 i = i + 48 | 0;
 h = f + 32 | 0;
 d = f + 24 | 0;
 j = f + 16 | 0;
 g = f;
 f = f + 36 | 0;
 a = xe() | 0;
 if ((a | 0) != 0 ? (e = c[a >> 2] | 0, (e | 0) != 0) : 0) {
  a = e + 48 | 0;
  b = c[a >> 2] | 0;
  a = c[a + 4 >> 2] | 0;
  if (!((b & -256 | 0) == 1126902528 & (a | 0) == 1129074247)) {
   c[d >> 2] = c[8414];
   ve(41365, d);
  }
  if ((b | 0) == 1126902529 & (a | 0) == 1129074247) a = c[e + 44 >> 2] | 0; else a = e + 80 | 0;
  c[f >> 2] = a;
  e = c[e >> 2] | 0;
  a = c[e + 4 >> 2] | 0;
  if (fb[c[(c[26376 >> 2] | 0) + 16 >> 2] & 7](26376, e, f) | 0) {
   j = c[f >> 2] | 0;
   f = c[8414] | 0;
   j = mb[c[(c[j >> 2] | 0) + 8 >> 2] & 3](j) | 0;
   c[g >> 2] = f;
   c[g + 4 >> 2] = a;
   c[g + 8 >> 2] = j;
   ve(41279, g);
  } else {
   c[j >> 2] = c[8414];
   c[j + 4 >> 2] = a;
   ve(41324, j);
  }
 }
 ve(41403, h);
}

function Af(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = e + 16 | 0;
 g = c[f >> 2] | 0;
 if (!g) if (!(Sf(e) | 0)) {
  g = c[f >> 2] | 0;
  h = 4;
 } else f = 0; else h = 4;
 a : do if ((h | 0) == 4) {
  i = e + 20 | 0;
  h = c[i >> 2] | 0;
  if ((g - h | 0) >>> 0 < d >>> 0) {
   f = fb[c[e + 36 >> 2] & 7](e, b, d) | 0;
   break;
  }
  b : do if ((a[e + 75 >> 0] | 0) > -1) {
   f = d;
   while (1) {
    if (!f) {
     g = h;
     f = 0;
     break b;
    }
    g = f + -1 | 0;
    if ((a[b + g >> 0] | 0) == 10) break; else f = g;
   }
   if ((fb[c[e + 36 >> 2] & 7](e, b, f) | 0) >>> 0 < f >>> 0) break a;
   d = d - f | 0;
   b = b + f | 0;
   g = c[i >> 2] | 0;
  } else {
   g = h;
   f = 0;
  } while (0);
  tg(g | 0, b | 0, d | 0) | 0;
  c[i >> 2] = (c[i >> 2] | 0) + d;
  f = f + d | 0;
 } while (0);
 return f | 0;
}

function Yd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 i = a + 4 | 0;
 j = c[a >> 2] | 0;
 k = j;
 e = ((c[i >> 2] | 0) - k >> 3) + 1 | 0;
 if (e >>> 0 > 536870911) we(a);
 l = a + 8 | 0;
 f = j;
 d = (c[l >> 2] | 0) - f | 0;
 if (d >> 3 >>> 0 < 268435455) {
  d = d >> 2;
  d = d >>> 0 < e >>> 0 ? e : d;
  f = (c[i >> 2] | 0) - f | 0;
  e = f >> 3;
  if (!d) {
   h = 0;
   g = 0;
   d = f;
  } else m = 6;
 } else {
  f = (c[i >> 2] | 0) - f | 0;
  d = 536870911;
  e = f >> 3;
  m = 6;
 }
 if ((m | 0) == 6) {
  h = d;
  g = ye(d << 3) | 0;
  d = f;
 }
 f = b;
 b = c[f + 4 >> 2] | 0;
 m = g + (e << 3) | 0;
 c[m >> 2] = c[f >> 2];
 c[m + 4 >> 2] = b;
 tg(g | 0, j | 0, d | 0) | 0;
 c[a >> 2] = g;
 c[i >> 2] = g + (e + 1 << 3);
 c[l >> 2] = g + (h << 3);
 if (!k) return;
 Ae(k);
 return;
}

function Nd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 c[a >> 2] = 0;
 g = a + 4 | 0;
 c[g >> 2] = 0;
 c[a + 8 >> 2] = 0;
 f = b + 4 | 0;
 i = c[f >> 2] | 0;
 h = c[b >> 2] | 0;
 d = i - h | 0;
 e = (d | 0) / 40 | 0;
 if ((i | 0) == (h | 0)) return;
 if (e >>> 0 > 107374182) we(a);
 d = ye(d) | 0;
 c[g >> 2] = d;
 c[a >> 2] = d;
 c[a + 8 >> 2] = d + (e * 40 | 0);
 e = c[b >> 2] | 0;
 b = c[f >> 2] | 0;
 if ((e | 0) == (b | 0)) return;
 do {
  c[d >> 2] = c[e >> 2];
  c[d + 4 >> 2] = c[e + 4 >> 2];
  c[d + 8 >> 2] = c[e + 8 >> 2];
  c[d + 12 >> 2] = c[e + 12 >> 2];
  c[d + 16 >> 2] = c[e + 16 >> 2];
  c[d + 20 >> 2] = c[e + 20 >> 2];
  c[d + 24 >> 2] = c[e + 24 >> 2];
  Pd(d + 28 | 0, e + 28 | 0);
  d = (c[g >> 2] | 0) + 40 | 0;
  c[g >> 2] = d;
  e = e + 40 | 0;
 } while ((e | 0) != (b | 0));
 return;
}

function Gf(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 128 | 0;
 g = n + 112 | 0;
 m = n;
 h = m;
 j = 33720;
 k = h + 112 | 0;
 do {
  c[h >> 2] = c[j >> 2];
  h = h + 4 | 0;
  j = j + 4 | 0;
 } while ((h | 0) < (k | 0));
 if ((d + -1 | 0) >>> 0 > 2147483646) if (!d) {
  d = 1;
  l = 4;
 } else {
  c[(ef() | 0) >> 2] = 75;
  d = -1;
 } else {
  g = b;
  l = 4;
 }
 if ((l | 0) == 4) {
  l = -2 - g | 0;
  l = d >>> 0 > l >>> 0 ? l : d;
  c[m + 48 >> 2] = l;
  b = m + 20 | 0;
  c[b >> 2] = g;
  c[m + 44 >> 2] = g;
  d = g + l | 0;
  g = m + 16 | 0;
  c[g >> 2] = d;
  c[m + 28 >> 2] = d;
  d = Ff(m, e, f) | 0;
  if (l) {
   e = c[b >> 2] | 0;
   a[e + (((e | 0) == (c[g >> 2] | 0)) << 31 >> 31) >> 0] = 0;
  }
 }
 i = n;
 return d | 0;
}

function cc(a, b, e, f, j, k) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 f = f | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0;
 o = i;
 i = i + 16 | 0;
 n = o;
 m = Fb() | 0;
 bc(n, a, b, e, f, j);
 l = _(j, f) | 0;
 if ((l | 0) <= 0) {
  a = c[n >> 2] | 0;
  if (!a) {
   i = o;
   return;
  }
 } else {
  a = c[n >> 2] | 0;
  b = c[k >> 2] | 0;
  f = c[b + 24 >> 2] | 0;
  e = c[b >> 2] | 0;
  b = c[b + 12 >> 2] | 0;
  j = 0;
  do {
   k = j * 3 | 0;
   g[e + (j << 2) >> 2] = +h[m + ((d[a + k >> 0] | 0) << 3) >> 3];
   g[b + (j << 2) >> 2] = +h[m + ((d[a + (k + 1) >> 0] | 0) << 3) >> 3];
   g[f + (j << 2) >> 2] = +h[m + ((d[a + (k + 2) >> 0] | 0) << 3) >> 3];
   j = j + 1 | 0;
  } while ((j | 0) != (l | 0));
 }
 b = n + 4 | 0;
 if ((c[b >> 2] | 0) != (a | 0)) c[b >> 2] = a;
 Ae(a);
 i = o;
 return;
}

function Wf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = d & 255;
 a : do if (!f) b = b + (Xf(b) | 0) | 0; else {
  if (b & 3) {
   e = d & 255;
   do {
    g = a[b >> 0] | 0;
    if (g << 24 >> 24 == 0 ? 1 : g << 24 >> 24 == e << 24 >> 24) break a;
    b = b + 1 | 0;
   } while ((b & 3 | 0) != 0);
  }
  f = _(f, 16843009) | 0;
  e = c[b >> 2] | 0;
  b : do if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) do {
   g = e ^ f;
   if ((g & -2139062144 ^ -2139062144) & g + -16843009) break b;
   b = b + 4 | 0;
   e = c[b >> 2] | 0;
  } while (((e & -2139062144 ^ -2139062144) & e + -16843009 | 0) == 0); while (0);
  e = d & 255;
  while (1) {
   g = a[b >> 0] | 0;
   if (g << 24 >> 24 == 0 ? 1 : g << 24 >> 24 == e << 24 >> 24) break; else b = b + 1 | 0;
  }
 } while (0);
 return b | 0;
}

function Wb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 c[a >> 2] = 0;
 h = a + 4 | 0;
 c[h >> 2] = 0;
 c[a + 8 >> 2] = 0;
 if (!b) return;
 if (b >>> 0 > 13944699) we(a);
 i = ye(b * 308 | 0) | 0;
 c[h >> 2] = i;
 c[a >> 2] = i;
 c[a + 8 >> 2] = i + (b * 308 | 0);
 f = d + 28 | 0;
 g = d + 40 | 0;
 e = d + 52 | 0;
 a = b;
 b = i;
 do {
  c[b >> 2] = c[d >> 2];
  c[b + 4 >> 2] = c[d + 4 >> 2];
  c[b + 8 >> 2] = c[d + 8 >> 2];
  c[b + 12 >> 2] = c[d + 12 >> 2];
  c[b + 16 >> 2] = c[d + 16 >> 2];
  c[b + 20 >> 2] = c[d + 20 >> 2];
  c[b + 24 >> 2] = c[d + 24 >> 2];
  Pd(b + 28 | 0, f);
  ce(b + 40 | 0, g);
  tg(b + 52 | 0, e | 0, 256) | 0;
  b = (c[h >> 2] | 0) + 308 | 0;
  c[h >> 2] = b;
  a = a + -1 | 0;
 } while ((a | 0) != 0);
 return;
}

function bd(b) {
 b = +b;
 var c = 0.0, d = 0, e = 0;
 do if ((a[25496] | 0) == 0 ? (ya(25496) | 0) != 0 : 0) {
  e = 0;
  while (1) {
   c = (18.0373825149 / (+(e | 0) * .00380086095024 + .901647926679) + -.894711072781) * .349376011816 + 1.0;
   d = 21400 + (e << 3) | 0;
   h[d >> 3] = c;
   if (!(c >= 0.0)) {
    d = 4;
    break;
   }
   h[d >> 3] = c * c;
   e = e + 1 | 0;
   if (e >>> 0 >= 512) {
    d = 6;
    break;
   }
  }
  if ((d | 0) == 4) Aa(40431, 36021, 1236, 40445); else if ((d | 0) == 6) {
   Da(25496);
   break;
  }
 } while (0);
 c = +N(+(b < 0.0 ? 0.0 : b));
 d = ~~c;
 if ((d | 0) < 511) {
  b = +h[21400 + (d << 3) >> 3];
  b = b + (c - +(d | 0)) * (+h[21400 + (d + 1 << 3) >> 3] - b);
  return +b;
 } else {
  b = +h[3186];
  return +b;
 }
 return 0.0;
}

function ad(b) {
 b = +b;
 var c = 0.0, d = 0, e = 0;
 do if ((a[21392] | 0) == 0 ? (ya(21392) | 0) != 0 : 0) {
  e = 0;
  while (1) {
   c = (21.6566724788 / (+(e | 0) * .00170392660501 + 1.73396799447) + -3.65647120524) * .212223514236 + 1.0;
   d = 17296 + (e << 3) | 0;
   h[d >> 3] = c;
   if (!(c >= 0.0)) {
    d = 4;
    break;
   }
   h[d >> 3] = c * c;
   e = e + 1 | 0;
   if (e >>> 0 >= 512) {
    d = 6;
    break;
   }
  }
  if ((d | 0) == 4) Aa(40431, 36021, 1236, 40445); else if ((d | 0) == 6) {
   Da(21392);
   break;
  }
 } while (0);
 c = +N(+(b < 0.0 ? 0.0 : b));
 d = ~~c;
 if ((d | 0) < 511) {
  b = +h[17296 + (d << 3) >> 3];
  b = b + (c - +(d | 0)) * (+h[17296 + (d + 1 << 3) >> 3] - b);
  return +b;
 } else {
  b = +h[2673];
  return +b;
 }
 return 0.0;
}

function $c(b) {
 b = +b;
 var c = 0.0, d = 0, e = 0;
 do if ((a[17288] | 0) == 0 ? (ya(17288) | 0) != 0 : 0) {
  e = 0;
  while (1) {
   c = (20.4563479139 / (+(e | 0) * .00486575865525 + .670960225853) + -3.86797479189) * 1.79116943438 + 1.0;
   d = 13192 + (e << 3) | 0;
   h[d >> 3] = c;
   if (!(c >= 0.0)) {
    d = 4;
    break;
   }
   h[d >> 3] = c * c;
   e = e + 1 | 0;
   if (e >>> 0 >= 512) {
    d = 6;
    break;
   }
  }
  if ((d | 0) == 4) Aa(40431, 36021, 1236, 40445); else if ((d | 0) == 6) {
   Da(17288);
   break;
  }
 } while (0);
 c = +N(+(b < 0.0 ? 0.0 : b));
 d = ~~c;
 if ((d | 0) < 511) {
  b = +h[13192 + (d << 3) >> 3];
  b = b + (c - +(d | 0)) * (+h[13192 + (d + 1 << 3) >> 3] - b);
  return +b;
 } else {
  b = +h[2160];
  return +b;
 }
 return 0.0;
}

function _c(b) {
 b = +b;
 var c = 0.0, d = 0, e = 0;
 do if ((a[13184] | 0) == 0 ? (ya(13184) | 0) != 0 : 0) {
  e = 0;
  while (1) {
   c = (31.1444967089 / (+(e | 0) * .0047434643535 + 1.05105070921) + -4.25376118646) * .61582234137 + 1.0;
   d = 9088 + (e << 3) | 0;
   h[d >> 3] = c;
   if (!(c >= 0.0)) {
    d = 4;
    break;
   }
   h[d >> 3] = c * c;
   e = e + 1 | 0;
   if (e >>> 0 >= 512) {
    d = 6;
    break;
   }
  }
  if ((d | 0) == 4) Aa(40431, 36021, 1236, 40445); else if ((d | 0) == 6) {
   Da(13184);
   break;
  }
 } while (0);
 c = +N(+(b < 0.0 ? 0.0 : b));
 d = ~~c;
 if ((d | 0) < 511) {
  b = +h[9088 + (d << 3) >> 3];
  b = b + (c - +(d | 0)) * (+h[9088 + (d + 1 << 3) >> 3] - b);
  return +b;
 } else {
  b = +h[1647];
  return +b;
 }
 return 0.0;
}

function Yc(b) {
 b = +b;
 var c = 0.0, d = 0, e = 0;
 do if ((a[4976] | 0) == 0 ? (ya(4976) | 0) != 0 : 0) {
  e = 0;
  while (1) {
   c = (20.8029176447 / (+(e | 0) * .000738288224836 + .454909521427) + -4.25328244168) * .975741017749 + 1.0;
   d = 880 + (e << 3) | 0;
   h[d >> 3] = c;
   if (!(c >= 0.0)) {
    d = 4;
    break;
   }
   h[d >> 3] = c * c;
   e = e + 1 | 0;
   if (e >>> 0 >= 512) {
    d = 6;
    break;
   }
  }
  if ((d | 0) == 4) Aa(40431, 36021, 1236, 40445); else if ((d | 0) == 6) {
   Da(4976);
   break;
  }
 } while (0);
 c = +N(+(b < 0.0 ? 0.0 : b));
 d = ~~c;
 if ((d | 0) < 511) {
  b = +h[880 + (d << 3) >> 3];
  b = b + (c - +(d | 0)) * (+h[880 + (d + 1 << 3) >> 3] - b);
  return +b;
 } else {
  b = +h[621];
  return +b;
 }
 return 0.0;
}

function Zc(b) {
 b = +b;
 var c = 0.0, d = 0, e = 0;
 do if ((a[9080] | 0) == 0 ? (ya(9080) | 0) != 0 : 0) {
  e = 0;
  while (1) {
   c = (16.2447033988 / (+(e | 0) * .011731667845 + .911952641929) + 1.5307267433) * .373995618954 + 1.0;
   d = 4984 + (e << 3) | 0;
   h[d >> 3] = c;
   if (!(c >= 0.0)) {
    d = 4;
    break;
   }
   h[d >> 3] = c * c;
   e = e + 1 | 0;
   if (e >>> 0 >= 512) {
    d = 6;
    break;
   }
  }
  if ((d | 0) == 4) Aa(40431, 36021, 1236, 40445); else if ((d | 0) == 6) {
   Da(9080);
   break;
  }
 } while (0);
 c = +N(+(b < 0.0 ? 0.0 : b));
 d = ~~c;
 if ((d | 0) < 511) {
  b = +h[4984 + (d << 3) >> 3];
  b = b + (c - +(d | 0)) * (+h[4984 + (d + 1 << 3) >> 3] - b);
  return +b;
 } else {
  b = +h[1134];
  return +b;
 }
 return 0.0;
}

function Fb() {
 var b = 0, d = 0;
 if (a[8] | 0) {
  d = c[6618] | 0;
  return d | 0;
 }
 if (!(ya(8) | 0)) {
  d = c[6618] | 0;
  return d | 0;
 }
 b = ze(2048) | 0;
 h[b >> 3] = 0.0;
 h[b + 8 >> 3] = .07739938080495357;
 h[b + 16 >> 3] = .15479876160990713;
 h[b + 24 >> 3] = .23219814241486067;
 h[b + 32 >> 3] = .30959752321981426;
 h[b + 40 >> 3] = .38699690402476783;
 h[b + 48 >> 3] = .46439628482972134;
 h[b + 56 >> 3] = .541795665634675;
 h[b + 64 >> 3] = .6191950464396285;
 h[b + 72 >> 3] = .6965944272445821;
 h[b + 80 >> 3] = .7739938080495357;
 d = 11;
 do {
  h[b + (d << 3) >> 3] = +P(+((+(d | 0) / 255.0 + .055) / 1.055), 2.4) * 255.0;
  d = d + 1 | 0;
 } while ((d | 0) != 256);
 c[6618] = b;
 Da(8);
 d = c[6618] | 0;
 return d | 0;
}

function Od(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 c[a >> 2] = 0;
 g = a + 4 | 0;
 c[g >> 2] = 0;
 c[a + 8 >> 2] = 0;
 f = b + 4 | 0;
 i = c[f >> 2] | 0;
 h = c[b >> 2] | 0;
 d = i - h | 0;
 e = (d | 0) / 28 | 0;
 if ((i | 0) == (h | 0)) return;
 if (e >>> 0 > 153391689) we(a);
 d = ye(d) | 0;
 c[g >> 2] = d;
 c[a >> 2] = d;
 c[a + 8 >> 2] = d + (e * 28 | 0);
 e = c[b >> 2] | 0;
 b = c[f >> 2] | 0;
 if ((e | 0) == (b | 0)) return;
 do {
  c[d >> 2] = c[e >> 2];
  c[d + 4 >> 2] = c[e + 4 >> 2];
  c[d + 8 >> 2] = c[e + 8 >> 2];
  c[d + 12 >> 2] = c[e + 12 >> 2];
  Cd(d + 16 | 0, e + 16 | 0);
  d = (c[g >> 2] | 0) + 28 | 0;
  c[g >> 2] = d;
  e = e + 28 | 0;
 } while ((e | 0) != (b | 0));
 return;
}

function mg(b, d, e, f, g, h, i, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0;
 if ((-18 - d | 0) >>> 0 < e >>> 0) cf(b);
 if (!(a[b >> 0] & 1)) m = b + 1 | 0; else m = c[b + 8 >> 2] | 0;
 if (d >>> 0 < 2147483623) {
  k = e + d | 0;
  l = d << 1;
  k = k >>> 0 < l >>> 0 ? l : k;
  k = k >>> 0 < 11 ? 11 : k + 16 & -16;
 } else k = -17;
 l = ye(k) | 0;
 if (g) tg(l | 0, m | 0, g | 0) | 0;
 if (i) tg(l + g | 0, j | 0, i | 0) | 0;
 e = f - h | 0;
 if ((e | 0) != (g | 0)) tg(l + (i + g) | 0, m + (h + g) | 0, e - g | 0) | 0;
 if ((d | 0) != 10) Ae(m);
 c[b + 8 >> 2] = l;
 c[b >> 2] = k | 1;
 d = e + i | 0;
 c[b + 4 >> 2] = d;
 a[l + d >> 0] = 0;
 return;
}

function lf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 do if (b) {
  if (d >>> 0 < 128) {
   a[b >> 0] = d;
   b = 1;
   break;
  }
  if (d >>> 0 < 2048) {
   a[b >> 0] = d >>> 6 | 192;
   a[b + 1 >> 0] = d & 63 | 128;
   b = 2;
   break;
  }
  if (d >>> 0 < 55296 | (d & -8192 | 0) == 57344) {
   a[b >> 0] = d >>> 12 | 224;
   a[b + 1 >> 0] = d >>> 6 & 63 | 128;
   a[b + 2 >> 0] = d & 63 | 128;
   b = 3;
   break;
  }
  if ((d + -65536 | 0) >>> 0 < 1048576) {
   a[b >> 0] = d >>> 18 | 240;
   a[b + 1 >> 0] = d >>> 12 & 63 | 128;
   a[b + 2 >> 0] = d >>> 6 & 63 | 128;
   a[b + 3 >> 0] = d & 63 | 128;
   b = 4;
   break;
  } else {
   c[(ef() | 0) >> 2] = 84;
   b = -1;
   break;
  }
 } else b = 1; while (0);
 return b | 0;
}

function Vb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 h = i;
 i = i + 320 | 0;
 j = h;
 c[a >> 2] = b;
 c[a + 4 >> 2] = d;
 c[j >> 2] = b;
 c[j + 4 >> 2] = d;
 e = j + 28 | 0;
 g = j + 32 | 0;
 f = j + 44 | 0;
 c[e >> 2] = 0;
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = 0;
 c[e + 12 >> 2] = 0;
 c[e + 16 >> 2] = 0;
 c[e + 20 >> 2] = 0;
 Pb(j, 1, 1);
 Wb(a + 8 | 0, 3, j);
 a = c[j + 40 >> 2] | 0;
 d = a;
 if (a) {
  b = c[f >> 2] | 0;
  if ((b | 0) != (a | 0)) c[f >> 2] = b + (~((b + -2 - d | 0) >>> 1) << 1);
  Ae(a);
 }
 d = c[e >> 2] | 0;
 if (!d) {
  i = h;
  return;
 }
 b = c[g >> 2] | 0;
 if ((b | 0) != (d | 0)) c[g >> 2] = b + (~((b + -2 - d | 0) >>> 1) << 1);
 Ae(d);
 i = h;
 return;
}

function Ld(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 c[b >> 2] = 0;
 h = b + 4 | 0;
 c[h >> 2] = 0;
 c[b + 8 >> 2] = 0;
 g = d + 4 | 0;
 j = c[g >> 2] | 0;
 i = c[d >> 2] | 0;
 e = j - i | 0;
 f = (e | 0) / 24 | 0;
 if ((j | 0) == (i | 0)) return;
 if (f >>> 0 > 178956970) we(b);
 e = ye(e) | 0;
 c[h >> 2] = e;
 c[b >> 2] = e;
 c[b + 8 >> 2] = e + (f * 24 | 0);
 f = c[d >> 2] | 0;
 d = c[g >> 2] | 0;
 if ((f | 0) == (d | 0)) return;
 do {
  zd(e, f);
  j = e + 12 | 0;
  i = f + 12 | 0;
  c[j >> 2] = c[i >> 2];
  c[j + 4 >> 2] = c[i + 4 >> 2];
  a[j + 8 >> 0] = a[i + 8 >> 0] | 0;
  e = (c[h >> 2] | 0) + 24 | 0;
  c[h >> 2] = e;
  f = f + 24 | 0;
 } while ((f | 0) != (d | 0));
 return;
}

function ee(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 h = a + 8 | 0;
 e = c[h >> 2] | 0;
 k = a + 4 | 0;
 f = c[k >> 2] | 0;
 d = f;
 if (e - d >> 1 >>> 0 >= b >>> 0) {
  pg(f | 0, 0, b << 1 | 0) | 0;
  c[k >> 2] = f + (b << 1);
  return;
 }
 i = c[a >> 2] | 0;
 j = i;
 d = (d - j >> 1) + b | 0;
 if ((d | 0) < 0) we(a);
 l = i;
 g = e - l | 0;
 g = g >> 1 >>> 0 < 1073741823 ? (g >>> 0 < d >>> 0 ? d : g) : 2147483647;
 d = f - l | 0;
 e = d >> 1;
 if (!g) f = 0; else f = ye(g << 1) | 0;
 pg(f + (e << 1) | 0, 0, b << 1 | 0) | 0;
 tg(f | 0, i | 0, d | 0) | 0;
 c[a >> 2] = f;
 c[k >> 2] = f + (e + b << 1);
 c[h >> 2] = f + (g << 1);
 if (!j) return;
 Ae(j);
 return;
}

function Ue(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 a[d + 53 >> 0] = 1;
 do if ((c[d + 4 >> 2] | 0) == (f | 0)) {
  a[d + 52 >> 0] = 1;
  f = d + 16 | 0;
  b = c[f >> 2] | 0;
  if (!b) {
   c[f >> 2] = e;
   c[d + 24 >> 2] = g;
   c[d + 36 >> 2] = 1;
   if (!((g | 0) == 1 ? (c[d + 48 >> 2] | 0) == 1 : 0)) break;
   a[d + 54 >> 0] = 1;
   break;
  }
  if ((b | 0) != (e | 0)) {
   g = d + 36 | 0;
   c[g >> 2] = (c[g >> 2] | 0) + 1;
   a[d + 54 >> 0] = 1;
   break;
  }
  b = d + 24 | 0;
  f = c[b >> 2] | 0;
  if ((f | 0) == 2) {
   c[b >> 2] = g;
   f = g;
  }
  if ((f | 0) == 1 ? (c[d + 48 >> 2] | 0) == 1 : 0) a[d + 54 >> 0] = 1;
 } while (0);
 return;
}

function Cd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 c[a >> 2] = 0;
 g = a + 4 | 0;
 c[g >> 2] = 0;
 c[a + 8 >> 2] = 0;
 f = b + 4 | 0;
 i = c[f >> 2] | 0;
 h = c[b >> 2] | 0;
 d = i - h | 0;
 e = (d | 0) / 12 | 0;
 if ((i | 0) == (h | 0)) return;
 if (e >>> 0 > 357913941) we(a);
 d = ye(d) | 0;
 c[g >> 2] = d;
 c[a >> 2] = d;
 c[a + 8 >> 2] = d + (e * 12 | 0);
 e = c[b >> 2] | 0;
 b = c[f >> 2] | 0;
 if ((e | 0) == (b | 0)) return;
 do {
  c[d >> 2] = c[e >> 2];
  c[d + 4 >> 2] = c[e + 4 >> 2];
  c[d + 8 >> 2] = c[e + 8 >> 2];
  d = (c[g >> 2] | 0) + 12 | 0;
  c[g >> 2] = d;
  e = e + 12 | 0;
 } while ((e | 0) != (b | 0));
 return;
}

function Md(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 c[b >> 2] = 0;
 h = b + 4 | 0;
 c[h >> 2] = 0;
 c[b + 8 >> 2] = 0;
 g = d + 4 | 0;
 e = (c[g >> 2] | 0) - (c[d >> 2] | 0) | 0;
 f = e >> 5;
 if (!f) return;
 if (f >>> 0 > 134217727) we(b);
 e = ye(e) | 0;
 c[h >> 2] = e;
 c[b >> 2] = e;
 c[b + 8 >> 2] = e + (f << 5);
 f = c[d >> 2] | 0;
 d = c[g >> 2] | 0;
 if ((f | 0) == (d | 0)) return;
 do {
  zd(e, f);
  zd(e + 12 | 0, f + 12 | 0);
  g = e + 24 | 0;
  b = f + 24 | 0;
  c[g >> 2] = c[b >> 2];
  a[g + 4 >> 0] = a[b + 4 >> 0] | 0;
  e = (c[h >> 2] | 0) + 32 | 0;
  c[h >> 2] = e;
  f = f + 32 | 0;
 } while ((f | 0) != (d | 0));
 return;
}

function We(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0;
 do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0) ? (i = d + 28 | 0, (c[i >> 2] | 0) != 1) : 0) c[i >> 2] = f;
 } else if ((b | 0) == (c[d >> 2] | 0)) {
  if ((c[d + 16 >> 2] | 0) != (e | 0) ? (h = d + 20 | 0, (c[h >> 2] | 0) != (e | 0)) : 0) {
   c[d + 32 >> 2] = f;
   c[h >> 2] = e;
   g = d + 40 | 0;
   c[g >> 2] = (c[g >> 2] | 0) + 1;
   if ((c[d + 36 >> 2] | 0) == 1 ? (c[d + 24 >> 2] | 0) == 2 : 0) a[d + 54 >> 0] = 1;
   c[d + 44 >> 2] = 4;
   break;
  }
  if ((f | 0) == 1) c[d + 32 >> 2] = 1;
 } while (0);
 return;
}

function rf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 if ((c[d + 76 >> 2] | 0) >= 0 ? (Jf(d) | 0) != 0 : 0) {
  if ((a[d + 75 >> 0] | 0) != (b | 0) ? (f = d + 20 | 0, g = c[f >> 2] | 0, g >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) : 0) {
   c[f >> 2] = g + 1;
   a[g >> 0] = b;
   e = b & 255;
  } else e = Lf(d, b) | 0;
  Kf(d);
 } else i = 3;
 do if ((i | 0) == 3) {
  if ((a[d + 75 >> 0] | 0) != (b | 0) ? (h = d + 20 | 0, e = c[h >> 2] | 0, e >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) : 0) {
   c[h >> 2] = e + 1;
   a[e >> 0] = b;
   e = b & 255;
   break;
  }
  e = Lf(d, b) | 0;
 } while (0);
 return e | 0;
}

function Ec(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 c[a >> 2] = 0;
 g = a + 4 | 0;
 c[g >> 2] = 0;
 c[a + 8 >> 2] = 0;
 f = b + 4 | 0;
 i = c[f >> 2] | 0;
 h = c[b >> 2] | 0;
 d = i - h | 0;
 e = (d | 0) / 1028 | 0;
 if ((i | 0) == (h | 0)) return;
 if (e >>> 0 > 4177983) we(a);
 d = ye(d) | 0;
 c[g >> 2] = d;
 c[a >> 2] = d;
 c[a + 8 >> 2] = d + (e * 1028 | 0);
 e = c[b >> 2] | 0;
 b = c[f >> 2] | 0;
 if ((e | 0) == (b | 0)) return;
 do {
  tg(d | 0, e | 0, 1028) | 0;
  d = (c[g >> 2] | 0) + 1028 | 0;
  c[g >> 2] = d;
  e = e + 1028 | 0;
 } while ((e | 0) != (b | 0));
 return;
}

function dg(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0;
 j = i;
 i = i + 256 | 0;
 h = j;
 do if ((d | 0) > (e | 0) & (f & 73728 | 0) == 0) {
  f = d - e | 0;
  pg(h | 0, b | 0, (f >>> 0 > 256 ? 256 : f) | 0) | 0;
  b = c[a >> 2] | 0;
  g = (b & 32 | 0) == 0;
  if (f >>> 0 > 255) {
   e = d - e | 0;
   do {
    if (g) {
     Af(h, 256, a) | 0;
     b = c[a >> 2] | 0;
    }
    f = f + -256 | 0;
    g = (b & 32 | 0) == 0;
   } while (f >>> 0 > 255);
   if (g) f = e & 255; else break;
  } else if (!g) break;
  Af(h, f, a) | 0;
 } while (0);
 i = j;
 return;
}

function zd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 c[a >> 2] = 0;
 h = a + 4 | 0;
 c[h >> 2] = 0;
 c[a + 8 >> 2] = 0;
 f = b + 4 | 0;
 d = (c[f >> 2] | 0) - (c[b >> 2] | 0) | 0;
 e = d >> 2;
 if (!e) return;
 if (e >>> 0 > 1073741823) we(a);
 g = ye(d) | 0;
 c[h >> 2] = g;
 c[a >> 2] = g;
 c[a + 8 >> 2] = g + (e << 2);
 d = c[b >> 2] | 0;
 b = c[f >> 2] | 0;
 if ((d | 0) == (b | 0)) return;
 a = (b + -4 - d | 0) >>> 2;
 e = g;
 while (1) {
  c[e >> 2] = c[d >> 2];
  d = d + 4 | 0;
  if ((d | 0) == (b | 0)) break; else e = e + 4 | 0;
 }
 c[h >> 2] = g + (a + 1 << 2);
 return;
}

function gf(a, b) {
 a = +a;
 b = +b;
 var d = 0, e = 0, f = 0, g = 0, i = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 g = e & 2147483647;
 do if (!(g >>> 0 > 2146435072 | (g | 0) == 2146435072 & d >>> 0 > 0)) {
  h[k >> 3] = b;
  f = c[k >> 2] | 0;
  g = c[k + 4 >> 2] | 0;
  i = g & 2147483647;
  if (!(i >>> 0 > 2146435072 | (i | 0) == 2146435072 & f >>> 0 > 0)) {
   d = sg(d | 0, e | 0, 63) | 0;
   i = sg(f | 0, g | 0, 63) | 0;
   if ((d | 0) == (i | 0)) {
    a = a < b ? a : b;
    break;
   } else {
    a = (e | 0) < 0 ? a : b;
    break;
   }
  }
 } else a = b; while (0);
 return +a;
}

function Pe(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 64 | 0;
 g = h;
 if ((a | 0) != (b | 0)) if ((b | 0) != 0 ? (f = Te(b, 26392, 26408, 0) | 0, (f | 0) != 0) : 0) {
  b = g;
  e = b + 56 | 0;
  do {
   c[b >> 2] = 0;
   b = b + 4 | 0;
  } while ((b | 0) < (e | 0));
  c[g >> 2] = f;
  c[g + 8 >> 2] = a;
  c[g + 12 >> 2] = -1;
  c[g + 48 >> 2] = 1;
  sb[c[(c[f >> 2] | 0) + 28 >> 2] & 3](f, g, c[d >> 2] | 0, 1);
  if ((c[g + 24 >> 2] | 0) == 1) {
   c[d >> 2] = c[g + 16 >> 2];
   b = 1;
  } else b = 0;
 } else b = 0; else b = 1;
 i = h;
 return b | 0;
}

function ce(a, d) {
 a = a | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 c[a >> 2] = 0;
 i = a + 4 | 0;
 c[i >> 2] = 0;
 c[a + 8 >> 2] = 0;
 g = d + 4 | 0;
 e = (c[g >> 2] | 0) - (c[d >> 2] | 0) | 0;
 f = e >> 1;
 if (!f) return;
 if ((e | 0) < 0) we(a);
 h = ye(e) | 0;
 c[i >> 2] = h;
 c[a >> 2] = h;
 c[a + 8 >> 2] = h + (f << 1);
 e = c[d >> 2] | 0;
 d = c[g >> 2] | 0;
 if ((e | 0) == (d | 0)) return;
 a = (d + -2 - e | 0) >>> 1;
 f = h;
 while (1) {
  b[f >> 1] = b[e >> 1] | 0;
  e = e + 2 | 0;
  if ((e | 0) == (d | 0)) break; else f = f + 2 | 0;
 }
 c[i >> 2] = h + (a + 1 << 1);
 return;
}

function Pd(a, d) {
 a = a | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 c[a >> 2] = 0;
 i = a + 4 | 0;
 c[i >> 2] = 0;
 c[a + 8 >> 2] = 0;
 g = d + 4 | 0;
 e = (c[g >> 2] | 0) - (c[d >> 2] | 0) | 0;
 f = e >> 1;
 if (!f) return;
 if ((e | 0) < 0) we(a);
 h = ye(e) | 0;
 c[i >> 2] = h;
 c[a >> 2] = h;
 c[a + 8 >> 2] = h + (f << 1);
 e = c[d >> 2] | 0;
 d = c[g >> 2] | 0;
 if ((e | 0) == (d | 0)) return;
 a = (d + -2 - e | 0) >>> 1;
 f = h;
 while (1) {
  b[f >> 1] = b[e >> 1] | 0;
  e = e + 2 | 0;
  if ((e | 0) == (d | 0)) break; else f = f + 2 | 0;
 }
 c[i >> 2] = h + (a + 1 << 1);
 return;
}

function ed(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 c[a >> 2] = 0;
 g = a + 4 | 0;
 c[g >> 2] = 0;
 c[a + 8 >> 2] = 0;
 f = b + 4 | 0;
 d = (c[f >> 2] | 0) - (c[b >> 2] | 0) | 0;
 e = d >> 2;
 if (!e) return;
 if (e >>> 0 > 1073741823) we(a);
 d = ye(d) | 0;
 c[g >> 2] = d;
 c[a >> 2] = d;
 c[a + 8 >> 2] = d + (e << 2);
 e = c[b >> 2] | 0;
 b = c[f >> 2] | 0;
 if ((e | 0) == (b | 0)) return;
 a = d + (((b + -4 - e | 0) >>> 2) + 1 << 2) | 0;
 while (1) {
  c[d >> 2] = c[e >> 2];
  e = e + 4 | 0;
  if ((e | 0) == (b | 0)) break; else d = d + 4 | 0;
 }
 c[g >> 2] = a;
 return;
}

function Lf(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 16 | 0;
 l = m;
 k = e & 255;
 a[l >> 0] = k;
 g = b + 16 | 0;
 h = c[g >> 2] | 0;
 if (!h) if (!(Sf(b) | 0)) {
  h = c[g >> 2] | 0;
  j = 4;
 } else f = -1; else j = 4;
 do if ((j | 0) == 4) {
  g = b + 20 | 0;
  j = c[g >> 2] | 0;
  if (j >>> 0 < h >>> 0 ? (f = e & 255, (f | 0) != (a[b + 75 >> 0] | 0)) : 0) {
   c[g >> 2] = j + 1;
   a[j >> 0] = k;
   break;
  }
  if ((fb[c[b + 36 >> 2] & 7](b, l, 1) | 0) == 1) f = d[l >> 0] | 0; else f = -1;
 } while (0);
 i = m;
 return f | 0;
}

function Kd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 c[a >> 2] = 0;
 g = a + 4 | 0;
 c[g >> 2] = 0;
 c[a + 8 >> 2] = 0;
 f = b + 4 | 0;
 i = c[f >> 2] | 0;
 h = c[b >> 2] | 0;
 d = i - h | 0;
 e = (d | 0) / 12 | 0;
 if ((i | 0) == (h | 0)) return;
 if (e >>> 0 > 357913941) we(a);
 d = ye(d) | 0;
 c[g >> 2] = d;
 c[a >> 2] = d;
 c[a + 8 >> 2] = d + (e * 12 | 0);
 e = c[b >> 2] | 0;
 b = c[f >> 2] | 0;
 if ((e | 0) == (b | 0)) return;
 do {
  gg(d, e);
  d = (c[g >> 2] | 0) + 12 | 0;
  c[g >> 2] = d;
  e = e + 12 | 0;
 } while ((e | 0) != (b | 0));
 return;
}

function Hb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 c[a >> 2] = 0;
 g = a + 4 | 0;
 c[g >> 2] = 0;
 c[a + 8 >> 2] = 0;
 f = b + 4 | 0;
 i = c[f >> 2] | 0;
 h = c[b >> 2] | 0;
 d = i - h | 0;
 e = (d | 0) / 12 | 0;
 if ((i | 0) == (h | 0)) return;
 if (e >>> 0 > 357913941) we(a);
 d = ye(d) | 0;
 c[g >> 2] = d;
 c[a >> 2] = d;
 c[a + 8 >> 2] = d + (e * 12 | 0);
 e = c[b >> 2] | 0;
 b = c[f >> 2] | 0;
 if ((e | 0) == (b | 0)) return;
 do {
  ed(d, e);
  d = (c[g >> 2] | 0) + 12 | 0;
  c[g >> 2] = d;
  e = e + 12 | 0;
 } while ((e | 0) != (b | 0));
 return;
}

function kg(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = a[b >> 0] | 0;
 if (!(f & 1)) h = 10; else {
  f = c[b >> 2] | 0;
  h = (f & -2) + -1 | 0;
  f = f & 255;
 }
 g = (f & 1) == 0;
 do if (h >>> 0 >= e >>> 0) {
  if (g) f = b + 1 | 0; else f = c[b + 8 >> 2] | 0;
  ug(f | 0, d | 0, e | 0) | 0;
  a[f + e >> 0] = 0;
  if (!(a[b >> 0] & 1)) {
   a[b >> 0] = e << 1;
   break;
  } else {
   c[b + 4 >> 2] = e;
   break;
  }
 } else {
  if (g) f = (f & 255) >>> 1; else f = c[b + 4 >> 2] | 0;
  mg(b, h, e - h | 0, f, 0, f, e, d);
 } while (0);
 return b | 0;
}

function lg(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = a[b >> 0] | 0;
 if (!(f & 1)) g = 10; else {
  f = c[b >> 2] | 0;
  g = (f & -2) + -1 | 0;
  f = f & 255;
 }
 if (!(f & 1)) h = (f & 255) >>> 1; else h = c[b + 4 >> 2] | 0;
 if ((g - h | 0) >>> 0 >= e >>> 0) {
  if (e) {
   if (!(f & 1)) g = b + 1 | 0; else g = c[b + 8 >> 2] | 0;
   tg(g + h | 0, d | 0, e | 0) | 0;
   f = h + e | 0;
   if (!(a[b >> 0] & 1)) a[b >> 0] = f << 1; else c[b + 4 >> 2] = f;
   a[g + f >> 0] = 0;
  }
 } else mg(b, g, e - g + h | 0, h, h, 0, e, d);
 return b | 0;
}

function zg(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 f = i;
 i = i + 16 | 0;
 j = f | 0;
 h = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 g = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 l = e >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 k = ((e | 0) < 0 ? -1 : 0) >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 a = og(h ^ a, g ^ b, h, g) | 0;
 b = C;
 Dg(a, b, og(l ^ d, k ^ e, l, k) | 0, C, j) | 0;
 e = og(c[j >> 2] ^ h, c[j + 4 >> 2] ^ g, h, g) | 0;
 d = C;
 i = f;
 return (C = d, e) | 0;
}

function of(a) {
 a = a | 0;
 var b = 0, d = 0;
 do if (a) {
  if ((c[a + 76 >> 2] | 0) <= -1) {
   b = Yf(a) | 0;
   break;
  }
  d = (Jf(a) | 0) == 0;
  b = Yf(a) | 0;
  if (!d) Kf(a);
 } else {
  if (!(c[8428] | 0)) b = 0; else b = of(c[8428] | 0) | 0;
  Xa(33688);
  a = c[8421] | 0;
  if (a) do {
   if ((c[a + 76 >> 2] | 0) > -1) d = Jf(a) | 0; else d = 0;
   if ((c[a + 20 >> 2] | 0) >>> 0 > (c[a + 28 >> 2] | 0) >>> 0) b = Yf(a) | 0 | b;
   if (d) Kf(a);
   a = c[a + 56 >> 2] | 0;
  } while ((a | 0) != 0);
  Sa(33688);
 } while (0);
 return b | 0;
}

function uf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 if ((d | 0) == 1) b = b - (c[a + 8 >> 2] | 0) + (c[a + 4 >> 2] | 0) | 0;
 f = a + 20 | 0;
 e = a + 28 | 0;
 if ((c[f >> 2] | 0) >>> 0 > (c[e >> 2] | 0) >>> 0 ? (fb[c[a + 36 >> 2] & 7](a, 0, 0) | 0, (c[f >> 2] | 0) == 0) : 0) b = -1; else {
  c[a + 16 >> 2] = 0;
  c[e >> 2] = 0;
  c[f >> 2] = 0;
  if ((fb[c[a + 40 >> 2] & 7](a, b, d) | 0) < 0) b = -1; else {
   c[a + 8 >> 2] = 0;
   c[a + 4 >> 2] = 0;
   c[a >> 2] = c[a >> 2] & -17;
   b = 0;
  }
 }
 return b | 0;
}

function tg(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return Ia(b | 0, d | 0, e | 0) | 0;
 f = b | 0;
 if ((b & 3) == (d & 3)) {
  while (b & 3) {
   if (!e) return f | 0;
   a[b >> 0] = a[d >> 0] | 0;
   b = b + 1 | 0;
   d = d + 1 | 0;
   e = e - 1 | 0;
  }
  while ((e | 0) >= 4) {
   c[b >> 2] = c[d >> 2];
   b = b + 4 | 0;
   d = d + 4 | 0;
   e = e - 4 | 0;
  }
 }
 while ((e | 0) > 0) {
  a[b >> 0] = a[d >> 0] | 0;
  b = b + 1 | 0;
  d = d + 1 | 0;
  e = e - 1 | 0;
 }
 return f | 0;
}

function cg(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) while (1) {
  e = Cg(b | 0, c | 0, 10, 0) | 0;
  d = d + -1 | 0;
  a[d >> 0] = e | 48;
  e = Bg(b | 0, c | 0, 10, 0) | 0;
  if (c >>> 0 > 9 | (c | 0) == 9 & b >>> 0 > 4294967295) {
   b = e;
   c = C;
  } else {
   b = e;
   break;
  }
 }
 if (b) while (1) {
  d = d + -1 | 0;
  a[d >> 0] = (b >>> 0) % 10 | 0 | 48;
  if (b >>> 0 < 10) break; else b = (b >>> 0) / 10 | 0;
 }
 return d | 0;
}

function hf(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 f = sg(d | 0, e | 0, 52) | 0;
 f = f & 2047;
 switch (f | 0) {
 case 0:
  {
   if (a != 0.0) {
    a = +hf(a * 18446744073709552.0e3, b);
    d = (c[b >> 2] | 0) + -64 | 0;
   } else d = 0;
   c[b >> 2] = d;
   break;
  }
 case 2047:
  break;
 default:
  {
   c[b >> 2] = f + -1022;
   c[k >> 2] = d;
   c[k + 4 >> 2] = e & -2146435073 | 1071644672;
   a = +h[k >> 3];
  }
 }
 return +a;
}

function Xf(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = b;
 a : do if (!(f & 3)) e = 4; else {
  d = b;
  b = f;
  while (1) {
   if (!(a[d >> 0] | 0)) break a;
   d = d + 1 | 0;
   b = d;
   if (!(b & 3)) {
    b = d;
    e = 4;
    break;
   }
  }
 } while (0);
 if ((e | 0) == 4) {
  while (1) {
   d = c[b >> 2] | 0;
   if (!((d & -2139062144 ^ -2139062144) & d + -16843009)) b = b + 4 | 0; else break;
  }
  if ((d & 255) << 24 >> 24) do b = b + 1 | 0; while ((a[b >> 0] | 0) != 0);
 }
 return b - f | 0;
}

function Yf(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 b = a + 20 | 0;
 g = a + 28 | 0;
 if ((c[b >> 2] | 0) >>> 0 > (c[g >> 2] | 0) >>> 0 ? (fb[c[a + 36 >> 2] & 7](a, 0, 0) | 0, (c[b >> 2] | 0) == 0) : 0) b = -1; else {
  h = a + 4 | 0;
  d = c[h >> 2] | 0;
  e = a + 8 | 0;
  f = c[e >> 2] | 0;
  if (d >>> 0 < f >>> 0) fb[c[a + 40 >> 2] & 7](a, d - f | 0, 1) | 0;
  c[a + 16 >> 2] = 0;
  c[g >> 2] = 0;
  c[b >> 2] = 0;
  c[e >> 2] = 0;
  c[h >> 2] = 0;
  b = 0;
 }
 return b | 0;
}

function yg(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 j = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 i = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 f = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 e = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 h = og(j ^ a, i ^ b, j, i) | 0;
 g = C;
 a = f ^ j;
 b = e ^ i;
 return og((Dg(h, g, og(f ^ c, e ^ d, f, e) | 0, C, 0) | 0) ^ a, C ^ b, a, b) | 0;
}

function pf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 32 | 0;
 f = g + 16 | 0;
 e = g;
 if (Tf(43316, a[d >> 0] | 0, 4) | 0) {
  h = If(d) | 0 | 32768;
  c[e >> 2] = b;
  c[e + 4 >> 2] = h;
  c[e + 8 >> 2] = 438;
  e = ff(Za(5, e | 0) | 0) | 0;
  if ((e | 0) >= 0) {
   b = Hf(e, d) | 0;
   if (!b) {
    c[f >> 2] = e;
    Ya(6, f | 0) | 0;
    b = 0;
   }
  } else b = 0;
 } else {
  c[(ef() | 0) >> 2] = 22;
  b = 0;
 }
 i = g;
 return b | 0;
}

function Rf(b) {
 b = b | 0;
 var d = 0, e = 0;
 d = b + 74 | 0;
 e = a[d >> 0] | 0;
 a[d >> 0] = e + 255 | e;
 d = b + 20 | 0;
 e = b + 44 | 0;
 if ((c[d >> 2] | 0) >>> 0 > (c[e >> 2] | 0) >>> 0) fb[c[b + 36 >> 2] & 7](b, 0, 0) | 0;
 c[b + 16 >> 2] = 0;
 c[b + 28 >> 2] = 0;
 c[d >> 2] = 0;
 d = c[b >> 2] | 0;
 if (d & 20) if (!(d & 4)) d = -1; else {
  c[b >> 2] = d | 32;
  d = -1;
 } else {
  d = c[e >> 2] | 0;
  c[b + 8 >> 2] = d;
  c[b + 4 >> 2] = d;
  d = 0;
 }
 return d | 0;
}

function df(b) {
 b = b | 0;
 var c = 0, e = 0;
 c = 0;
 while (1) {
  if ((d[41424 + c >> 0] | 0) == (b | 0)) {
   e = 2;
   break;
  }
  c = c + 1 | 0;
  if ((c | 0) == 87) {
   c = 87;
   b = 41512;
   e = 5;
   break;
  }
 }
 if ((e | 0) == 2) if (!c) b = 41512; else {
  b = 41512;
  e = 5;
 }
 if ((e | 0) == 5) while (1) {
  e = b;
  while (1) {
   b = e + 1 | 0;
   if (!(a[e >> 0] | 0)) break; else e = b;
  }
  c = c + -1 | 0;
  if (!c) break; else e = 5;
 }
 return b | 0;
}

function pg(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = b + e | 0;
 if ((e | 0) >= 20) {
  d = d & 255;
  h = b & 3;
  i = d | d << 8 | d << 16 | d << 24;
  g = f & ~3;
  if (h) {
   h = b + 4 - h | 0;
   while ((b | 0) < (h | 0)) {
    a[b >> 0] = d;
    b = b + 1 | 0;
   }
  }
  while ((b | 0) < (g | 0)) {
   c[b >> 2] = i;
   b = b + 4 | 0;
  }
 }
 while ((b | 0) < (f | 0)) {
  a[b >> 0] = d;
  b = b + 1 | 0;
 }
 return b - e | 0;
}

function nf(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 if ((c[a + 76 >> 2] | 0) > -1) Jf(a) | 0;
 e = (c[a >> 2] & 1 | 0) != 0;
 if (!e) {
  Xa(33688);
  d = c[a + 52 >> 2] | 0;
  b = a + 56 | 0;
  if (d) c[d + 56 >> 2] = c[b >> 2];
  b = c[b >> 2] | 0;
  if (b) c[b + 52 >> 2] = d;
  if ((c[8421] | 0) == (a | 0)) c[8421] = b;
  Sa(33688);
 }
 b = of(a) | 0;
 b = mb[c[a + 12 >> 2] & 3](a) | 0 | b;
 d = c[a + 92 >> 2] | 0;
 if (d) fg(d);
 if (!e) fg(a);
 return b | 0;
}

function kf(a) {
 a = +a;
 var b = 0, d = 0.0, e = 0.0, f = 0;
 h[k >> 3] = a;
 b = c[k + 4 >> 2] | 0;
 f = sg(c[k >> 2] | 0, b | 0, 52) | 0;
 f = f & 2047;
 do if (f >>> 0 <= 1074) {
  b = (b | 0) < 0;
  e = b ? -a : a;
  if (f >>> 0 < 1022) {
   a = a * 0.0;
   break;
  }
  d = e + 4503599627370496.0 + -4503599627370496.0 - e;
  if (!(d > .5)) {
   a = e + d;
   if (d <= -.5) a = a + 1.0;
  } else a = e + d + -1.0;
  a = b ? -a : a;
 } while (0);
 return +a;
}
function Qe(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0;
 b = d + 16 | 0;
 g = c[b >> 2] | 0;
 do if (g) {
  if ((g | 0) != (e | 0)) {
   f = d + 36 | 0;
   c[f >> 2] = (c[f >> 2] | 0) + 1;
   c[d + 24 >> 2] = 2;
   a[d + 54 >> 0] = 1;
   break;
  }
  b = d + 24 | 0;
  if ((c[b >> 2] | 0) == 2) c[b >> 2] = f;
 } else {
  c[b >> 2] = e;
  c[d + 24 >> 2] = f;
  c[d + 36 >> 2] = 1;
 } while (0);
 return;
}

function _b(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 c[a >> 2] = 0;
 e = a + 4 | 0;
 c[e >> 2] = 0;
 c[a + 8 >> 2] = 0;
 if (!b) return;
 if (b >>> 0 > 357913941) we(a);
 f = ye(b * 12 | 0) | 0;
 c[e >> 2] = f;
 c[a >> 2] = f;
 c[a + 8 >> 2] = f + (b * 12 | 0);
 a = f;
 do {
  ed(a, d);
  a = (c[e >> 2] | 0) + 12 | 0;
  c[e >> 2] = a;
  b = b + -1 | 0;
 } while ((b | 0) != 0);
 return;
}

function Uf(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 a : do if (!d) d = 0; else {
  f = d;
  e = b;
  while (1) {
   b = a[e >> 0] | 0;
   d = a[c >> 0] | 0;
   if (b << 24 >> 24 != d << 24 >> 24) break;
   f = f + -1 | 0;
   if (!f) {
    d = 0;
    break a;
   } else {
    e = e + 1 | 0;
    c = c + 1 | 0;
   }
  }
  d = (b & 255) - (d & 255) | 0;
 } while (0);
 return d | 0;
}

function hd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = a[d >> 0] | 0;
 g = (f & 1) == 0;
 e = d + 4 | 0;
 f = Bf(g ? d + 1 | 0 : c[d + 8 >> 2] | 0, 1, g ? (f & 255) >>> 1 : c[e >> 2] | 0, b) | 0;
 d = a[d >> 0] | 0;
 if ((f | 0) != (((d & 1) == 0 ? (d & 255) >>> 1 : c[e >> 2] | 0) | 0)) {
  Cf(36348);
  bb(1);
 }
 if ((nf(b) | 0) < 0) {
  Cf(36355);
  bb(1);
 } else return;
}

function If(b) {
 b = b | 0;
 var c = 0, d = 0, e = 0;
 d = (Vf(b, 43) | 0) == 0;
 c = a[b >> 0] | 0;
 d = d ? c << 24 >> 24 != 114 & 1 : 2;
 e = (Vf(b, 120) | 0) == 0;
 d = e ? d : d | 128;
 b = (Vf(b, 101) | 0) == 0;
 b = b ? d : d | 524288;
 b = c << 24 >> 24 == 114 ? b : b | 64;
 b = c << 24 >> 24 == 119 ? b | 512 : b;
 return (c << 24 >> 24 == 97 ? b | 1024 : b) | 0;
}

function Sf(b) {
 b = b | 0;
 var d = 0, e = 0;
 d = b + 74 | 0;
 e = a[d >> 0] | 0;
 a[d >> 0] = e + 255 | e;
 d = c[b >> 2] | 0;
 if (!(d & 8)) {
  c[b + 8 >> 2] = 0;
  c[b + 4 >> 2] = 0;
  d = c[b + 44 >> 2] | 0;
  c[b + 28 >> 2] = d;
  c[b + 20 >> 2] = d;
  c[b + 16 >> 2] = d + (c[b + 48 >> 2] | 0);
  d = 0;
 } else {
  c[b >> 2] = d | 32;
  d = -1;
 }
 return d | 0;
}

function Of(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = i;
 i = i + 32 | 0;
 g = f;
 e = f + 20 | 0;
 c[g >> 2] = c[a + 60 >> 2];
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = b;
 c[g + 12 >> 2] = e;
 c[g + 16 >> 2] = d;
 if ((ff(ab(140, g | 0) | 0) | 0) < 0) {
  c[e >> 2] = -1;
  a = -1;
 } else a = c[e >> 2] | 0;
 i = f;
 return a | 0;
}

function hg(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 if (e >>> 0 > 4294967279) cf(b);
 if (e >>> 0 < 11) {
  a[b >> 0] = e << 1;
  b = b + 1 | 0;
 } else {
  g = e + 16 & -16;
  f = ye(g) | 0;
  c[b + 8 >> 2] = f;
  c[b >> 2] = g | 1;
  c[b + 4 >> 2] = e;
  b = f;
 }
 tg(b | 0, d | 0, e | 0) | 0;
 a[b + e >> 0] = 0;
 return;
}

function Cf(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 d = c[8426] | 0;
 f = df(c[(ef() | 0) >> 2] | 0) | 0;
 if ((c[d + 76 >> 2] | 0) > -1) e = Jf(d) | 0; else e = 0;
 if ((b | 0) != 0 ? (a[b >> 0] | 0) != 0 : 0) {
  Bf(b, Xf(b) | 0, 1, d) | 0;
  rf(58, d) | 0;
  rf(32, d) | 0;
 }
 Bf(f, Xf(f) | 0, 1, d) | 0;
 rf(10, d) | 0;
 if (e) Kf(d);
 return;
}

function gd(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0;
 if (wf(b, 0, 2) | 0) {
  Cf(36330);
  bb(1);
 }
 c = zf(b) | 0;
 if ((c | 0) < 0) {
  Cf(36336);
  bb(1);
 }
 if (wf(b, 0, 0) | 0) {
  Cf(36330);
  bb(1);
 }
 d = ze(c) | 0;
 if ((tf(d, 1, c, b) | 0) == (c | 0)) {
  hg(a, d, c);
  Be(d);
  return;
 } else {
  Cf(36342);
  bb(1);
 }
}

function Mc(a) {
 a = a | 0;
 var b = 0, c = 0;
 if (!a) return;
 if (a & 63) Aa(36060, 36021, 70, 36119);
 c = a + -4 | 0;
 b = d[c >> 0] | d[c + 1 >> 0] << 8 | d[c + 2 >> 0] << 16 | d[c + 3 >> 0] << 24;
 if (b >>> 0 > c >>> 0) Aa(36124, 36021, 73, 36119);
 if (b >>> 0 < (a + -64 | 0) >>> 0) Aa(36160, 36021, 74, 36119);
 fg(b);
 return;
}

function Qf(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 80 | 0;
 f = g;
 c[b + 36 >> 2] = 3;
 if ((c[b >> 2] & 64 | 0) == 0 ? (c[f >> 2] = c[b + 60 >> 2], c[f + 4 >> 2] = 21505, c[f + 8 >> 2] = g + 12, (Ra(54, f | 0) | 0) != 0) : 0) a[b + 75 >> 0] = -1;
 f = Pf(b, d, e) | 0;
 i = g;
 return f | 0;
}

function ug(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if ((c | 0) < (b | 0) & (b | 0) < (c + d | 0)) {
  e = b;
  c = c + d | 0;
  b = b + d | 0;
  while ((d | 0) > 0) {
   b = b - 1 | 0;
   c = c - 1 | 0;
   d = d - 1 | 0;
   a[b >> 0] = a[c >> 0] | 0;
  }
  b = e;
 } else tg(b, c, d) | 0;
 return b | 0;
}

function xg(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0;
 f = a & 65535;
 e = b & 65535;
 c = _(e, f) | 0;
 d = a >>> 16;
 a = (c >>> 16) + (_(e, d) | 0) | 0;
 e = b >>> 16;
 b = _(e, f) | 0;
 return (C = (a >>> 16) + (_(e, d) | 0) + (((a & 65535) + b | 0) >>> 16) | 0, a + b << 16 | c & 65535 | 0) | 0;
}

function xf(a) {
 a = a | 0;
 var b = 0;
 if (!(c[a >> 2] & 128)) b = 1; else b = (c[a + 20 >> 2] | 0) >>> 0 > (c[a + 28 >> 2] | 0) >>> 0 ? 2 : 1;
 b = fb[c[a + 40 >> 2] & 7](a, 0, b) | 0;
 if ((b | 0) >= 0) b = b - (c[a + 8 >> 2] | 0) + (c[a + 4 >> 2] | 0) + (c[a + 20 >> 2] | 0) - (c[a + 28 >> 2] | 0) | 0;
 return b | 0;
}

function qc(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0.0, d = 0.0;
 c = +g[a + 76 >> 2] - +g[a + 12 >> 2];
 if (c <= 0.0) {
  d = +(b | 0);
  return +d;
 }
 d = c * 50.0;
 if (d > 10.0) {
  d = +(b | 0) + c * 22026465794806716.0e18;
  return +d;
 } else {
  d = +(b | 0) * +X(+d);
  return +d;
 }
 return 0.0;
}

function Bf(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = _(d, b) | 0;
 if ((c[e + 76 >> 2] | 0) > -1) {
  g = (Jf(e) | 0) == 0;
  a = Af(a, f, e) | 0;
  if (!g) Kf(e);
 } else a = Af(a, f, e) | 0;
 if ((a | 0) != (f | 0)) d = (a >>> 0) / (b >>> 0) | 0;
 return d | 0;
}

function wg(b) {
 b = b | 0;
 var c = 0;
 c = a[m + (b & 255) >> 0] | 0;
 if ((c | 0) < 8) return c | 0;
 c = a[m + (b >> 8 & 255) >> 0] | 0;
 if ((c | 0) < 8) return c + 8 | 0;
 c = a[m + (b >> 16 & 255) >> 0] | 0;
 if ((c | 0) < 8) return c + 16 | 0;
 return (a[m + (b >>> 24) >> 0] | 0) + 24 | 0;
}

function ye(a) {
 a = a | 0;
 var b = 0;
 b = (a | 0) == 0 ? 1 : a;
 a = eg(b) | 0;
 a : do if (!a) {
  while (1) {
   a = He() | 0;
   if (!a) break;
   ob[a & 3]();
   a = eg(b) | 0;
   if (a) break a;
  }
  b = Ba(4) | 0;
  c[b >> 2] = 33552;
  Va(b | 0, 26360, 3);
 } while (0);
 return a | 0;
}

function Ge() {
 var a = 0, b = 0;
 a = xe() | 0;
 if (((a | 0) != 0 ? (b = c[a >> 2] | 0, (b | 0) != 0) : 0) ? (a = b + 48 | 0, (c[a >> 2] & -256 | 0) == 1126902528 ? (c[a + 4 >> 2] | 0) == 1129074247 : 0) : 0) Fe(c[b + 12 >> 2] | 0);
 b = c[8385] | 0;
 c[8385] = b + 0;
 Fe(b);
}

function zb(b) {
 b = b | 0;
 a[k >> 0] = a[b >> 0];
 a[k + 1 >> 0] = a[b + 1 >> 0];
 a[k + 2 >> 0] = a[b + 2 >> 0];
 a[k + 3 >> 0] = a[b + 3 >> 0];
 a[k + 4 >> 0] = a[b + 4 >> 0];
 a[k + 5 >> 0] = a[b + 5 >> 0];
 a[k + 6 >> 0] = a[b + 6 >> 0];
 a[k + 7 >> 0] = a[b + 7 >> 0];
}

function Xe(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) Ue(0, b, d, e, f); else {
  a = c[a + 8 >> 2] | 0;
  pb[c[(c[a >> 2] | 0) + 20 >> 2] & 3](a, b, d, e, f, g);
 }
 return;
}

function ag(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a + 20 | 0;
 f = c[e >> 2] | 0;
 a = (c[a + 16 >> 2] | 0) - f | 0;
 a = a >>> 0 > d >>> 0 ? d : a;
 tg(f | 0, b | 0, a | 0) | 0;
 c[e >> 2] = (c[e >> 2] | 0) + a;
 return d | 0;
}

function zc(a, d) {
 a = a | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = c[a >> 2] | 0;
 f = c[d >> 2] | 0;
 if ((e | 0) == (f | 0)) {
  d = (b[a + 6 >> 1] | 0) > (b[d + 6 >> 1] | 0);
  return d | 0;
 } else {
  d = e >>> 0 < f >>> 0;
  return d | 0;
 }
 return 0;
}

function Ze(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 c[e >> 2] = c[d >> 2];
 a = fb[c[(c[a >> 2] | 0) + 16 >> 2] & 7](a, b, e) | 0;
 if (a) c[d >> 2] = c[e >> 2];
 i = f;
 return a & 1 | 0;
}

function jg(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 if ((b | 0) != (d | 0)) {
  e = a[d >> 0] | 0;
  f = (e & 1) == 0;
  kg(b, f ? d + 1 | 0 : c[d + 8 >> 2] | 0, f ? (e & 255) >>> 1 : c[d + 4 >> 2] | 0) | 0;
 }
 return b | 0;
}

function Se(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) Qe(0, b, d, e); else {
  a = c[a + 8 >> 2] | 0;
  sb[c[(c[a >> 2] | 0) + 28 >> 2] & 3](a, b, d, e);
 }
 return;
}

function gg(b, d) {
 b = b | 0;
 d = d | 0;
 if (!(a[d >> 0] & 1)) {
  c[b >> 2] = c[d >> 2];
  c[b + 4 >> 2] = c[d + 4 >> 2];
  c[b + 8 >> 2] = c[d + 8 >> 2];
 } else hg(b, c[d + 8 >> 2] | 0, c[d + 4 >> 2] | 0);
 return;
}

function Cg(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 Dg(a, b, d, e, f) | 0;
 i = g;
 return (C = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function vf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 if ((c[a + 76 >> 2] | 0) > -1) {
  e = (Jf(a) | 0) == 0;
  b = uf(a, b, d) | 0;
  if (!e) Kf(a);
 } else b = uf(a, b, d) | 0;
 return b | 0;
}

function Jg(a, b, c, d, e, f, g, h, i) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = +e;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 kb[a & 1](b | 0, c | 0, d | 0, +e, f | 0, g | 0, h | 0, i | 0);
}

function Ag(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 f = c;
 c = xg(e, f) | 0;
 a = C;
 return (C = (_(b, f) | 0) + (_(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
}

function vg(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  C = b >> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 C = (b | 0) < 0 ? -1 : 0;
 return b >> c - 32 | 0;
}

function Ef(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 c[g >> 2] = e;
 e = Gf(a, b, d, g) | 0;
 i = f;
 return e | 0;
}

function qg(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  C = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;
  return a << c;
 }
 C = a << c - 32;
 return 0;
}

function sg(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  C = b >>> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 C = 0;
 return b >>> c - 32 | 0;
}

function yf(a) {
 a = a | 0;
 var b = 0, d = 0;
 if ((c[a + 76 >> 2] | 0) > -1) {
  d = (Jf(a) | 0) == 0;
  b = xf(a) | 0;
  if (!d) Kf(a);
 } else b = xf(a) | 0;
 return b | 0;
}

function xe() {
 var a = 0, b = 0;
 a = i;
 i = i + 16 | 0;
 if (!(Pa(33652, 2) | 0)) {
  b = Ma(c[8412] | 0) | 0;
  i = a;
  return b | 0;
 } else ve(40968, a);
 return 0;
}

function ng() {}
function og(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (C = d, a - c >>> 0 | 0) | 0;
}

function Og(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 pb[a & 3](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0);
}

function qf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 c[f >> 2] = d;
 d = Ff(a, b, f) | 0;
 i = e;
 return d | 0;
}

function Ye(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) Ue(0, b, d, e, f);
 return;
}

function Df(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = i;
 i = i + 16 | 0;
 e = d;
 c[e >> 2] = b;
 b = Ff(c[8427] | 0, a, e) | 0;
 i = d;
 return b | 0;
}

function Mf(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c[d >> 2] = c[a + 60 >> 2];
 a = ff(Ya(6, d | 0) | 0) | 0;
 i = b;
 return a | 0;
}

function be(a, b) {
 a = a | 0;
 b = b | 0;
 if (!b) return; else {
  be(a, c[b >> 2] | 0);
  be(a, c[b + 4 >> 2] | 0);
  ig(b + 16 | 0);
  Ae(b);
  return;
 }
}

function ve(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = i;
 i = i + 16 | 0;
 c[d >> 2] = b;
 b = c[8426] | 0;
 Ff(b, a, d) | 0;
 rf(10, b) | 0;
 xa();
}

function rg(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (C = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function Fg(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 gb[a & 3](b | 0, c | 0, d | 0, e | 0, f | 0);
}

function yb(b) {
 b = b | 0;
 a[k >> 0] = a[b >> 0];
 a[k + 1 >> 0] = a[b + 1 >> 0];
 a[k + 2 >> 0] = a[b + 2 >> 0];
 a[k + 3 >> 0] = a[b + 3 >> 0];
}

function bf(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + 16 | 0;
 fg(a);
 if (!(Ua(c[8412] | 0, 0) | 0)) {
  i = b;
  return;
 } else ve(41122, b);
}

function ae(a, b) {
 a = a | 0;
 b = b | 0;
 if (!b) return; else {
  ae(a, c[b >> 2] | 0);
  ae(a, c[b + 4 >> 2] | 0);
  Ae(b);
  return;
 }
}

function Xg(a, b, c, d, e, f, g, h) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = +d;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 ba(5);
}

function Qg(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return +rb[a & 1](b | 0, c | 0, d | 0, e | 0);
}

function Re(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) Qe(0, b, d, e);
 return;
}

function Rg(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 sb[a & 3](b | 0, c | 0, d | 0, e | 0);
}

function Vf(b, c) {
 b = b | 0;
 c = c | 0;
 b = Wf(b, c) | 0;
 return ((a[b >> 0] | 0) == (c & 255) << 24 >> 24 ? b : 0) | 0;
}

function af() {
 var a = 0;
 a = i;
 i = i + 16 | 0;
 if (!($a(33648, 12) | 0)) {
  i = a;
  return;
 } else ve(41072, a);
}

function Eg(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return fb[a & 7](b | 0, c | 0, d | 0) | 0;
}

function ff(a) {
 a = a | 0;
 if (a >>> 0 > 4294963200) {
  c[(ef() | 0) >> 2] = 0 - a;
  a = -1;
 }
 return a | 0;
}

function ef() {
 var a = 0;
 if (!(c[8415] | 0)) a = 33716; else a = c[(Oa() | 0) + 60 >> 2] | 0;
 return a | 0;
}

function ah(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 ba(10);
}

function _e(a) {
 a = a | 0;
 if (!a) a = 0; else a = (Te(a, 26392, 26440, 0) | 0) != 0;
 return a & 1 | 0;
}

function Bg(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Dg(a, b, c, d, 0) | 0;
}

function mf(a, b) {
 a = a | 0;
 b = b | 0;
 if (!a) a = 0; else a = lf(a, b, 0) | 0;
 return a | 0;
}
function tb(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function Tg(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 ba(1);
}

function ch(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 ba(12);
 return 0.0;
}

function Pg(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return qb[a & 1](b | 0, c | 0) | 0;
}

function Fe(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + 16 | 0;
 ob[a & 3]();
 ve(41032, b);
}

function md(a, b) {
 a = a | 0;
 b = +b;
 return +g[a + 76 >> 2] <= +g[a + 12 >> 2] * b | 0;
}

function Gg(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return +hb[a & 1](b | 0, c | 0);
}

function Hc(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 lg(a, b, c) | 0;
 return c | 0;
}

function sf(a, b) {
 a = a | 0;
 b = b | 0;
 return (Bf(a, Xf(a) | 0, 1, b) | 0) + -1 | 0;
}

function Mg(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = +c;
 return nb[a & 1](b | 0, +c) | 0;
}

function Kg(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 lb[a & 3](b | 0, c | 0);
}

function wf(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return vf(a, b, c) | 0;
}

function dh(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 ba(13);
}

function ig(b) {
 b = b | 0;
 if (a[b >> 0] & 1) Ae(c[b + 8 >> 2] | 0);
 return;
}

function He() {
 var a = 0;
 a = c[8391] | 0;
 c[8391] = a + 0;
 return a | 0;
}

function Sg(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ba(0);
 return 0;
}

function xb(a, b) {
 a = a | 0;
 b = b | 0;
 if (!n) {
  n = a;
  o = b;
 }
}

function Lg(a, b) {
 a = a | 0;
 b = b | 0;
 return mb[a & 3](b | 0) | 0;
}

function nd(a, b) {
 a = a | 0;
 b = b | 0;
 ed(a, b + 80 | 0);
 return;
}

function _f(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) Kf(a);
 return;
}

function $f(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) Kf(a);
 return;
}

function Hg(a, b) {
 a = a | 0;
 b = b | 0;
 return +ib[a & 3](b | 0);
}

function Ug(a, b) {
 a = a | 0;
 b = b | 0;
 ba(2);
 return 0.0;
}

function bh(a, b) {
 a = a | 0;
 b = b | 0;
 ba(11);
 return 0;
}

function Ig(a, b) {
 a = a | 0;
 b = b | 0;
 jb[a & 15](b | 0);
}

function jf(a, b) {
 a = +a;
 b = b | 0;
 return +(+hf(a, b));
}

function cf(a) {
 a = a | 0;
 Aa(41175, 41204, 1164, 40947);
}

function we(a) {
 a = a | 0;
 Aa(40849, 40872, 303, 40947);
}

function wb(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function _g(a, b) {
 a = a | 0;
 b = +b;
 ba(8);
 return 0;
}

function od(a) {
 a = a | 0;
 return +(+g[a + 76 >> 2]);
}

function oc(a) {
 a = a | 0;
 return +(+g[a + 12 >> 2]);
}

function ld(a) {
 a = a | 0;
 kd(a);
 Ae(a);
 return;
}

function qd(a) {
 a = a | 0;
 Ha(a | 0) | 0;
 Ge();
}

function Yg(a, b) {
 a = a | 0;
 b = b | 0;
 ba(6);
}

function Vg(a) {
 a = a | 0;
 ba(3);
 return 0.0;
}

function zf(a) {
 a = a | 0;
 return yf(a) | 0;
}

function ze(a) {
 a = a | 0;
 return ye(a) | 0;
}

function Zg(a) {
 a = a | 0;
 ba(7);
 return 0;
}

function Oe(a) {
 a = a | 0;
 Ae(a);
 return;
}

function Ne(a) {
 a = a | 0;
 Ae(a);
 return;
}

function De(a) {
 a = a | 0;
 Ae(a);
 return;
}

function Be(a) {
 a = a | 0;
 Ae(a);
 return;
}

function Ae(a) {
 a = a | 0;
 fg(a);
 return;
}

function Ee(a) {
 a = a | 0;
 return 41017;
}

function Ng(a) {
 a = a | 0;
 ob[a & 3]();
}

function Jf(a) {
 a = a | 0;
 return 0;
}

function je(a) {
 a = a | 0;
 return;
}

function Me(a) {
 a = a | 0;
 return;
}

function Le(a) {
 a = a | 0;
 return;
}

function Kf(a) {
 a = a | 0;
 return;
}

function Ke(a) {
 a = a | 0;
 return;
}

function Je(a) {
 a = a | 0;
 return;
}

function Ie(a) {
 a = a | 0;
 return;
}

function Ce(a) {
 a = a | 0;
 return;
}

function vb(a) {
 a = a | 0;
 i = a;
}

function Wg(a) {
 a = a | 0;
 ba(4);
}

function Ab(a) {
 a = a | 0;
 C = a;
}

function ub() {
 return i | 0;
}

function Bb() {
 return C | 0;
}

function $g() {
 ba(9);
}

// EMSCRIPTEN_END_FUNCS
var fb=[Sg,Pe,ag,Pf,Of,Qf,Hc,Nf];var gb=[Tg,We,Ve,Tg];var hb=[Ug,qc];var ib=[Vg,od,oc,Vg];var jb=[Wg,kd,ld,Ce,De,Ke,Ne,Le,Me,Oe,Mc,je,bf,_f,$f,Wg];var kb=[Xg,pc];var lb=[Yg,jc,nd,Yg];var mb=[Zg,Ee,Mf,Zg];var nb=[_g,md];var ob=[$g,$e,af,$g];var pb=[ah,Ye,Xe,ah];var qb=[bh,zc];var rb=[ch,lc];var sb=[dh,Re,Se,dh];return{___cxa_can_catch:Ze,_fflush:of,___cxa_is_pointer_type:_e,_i64Add:rg,_memmove:ug,_i64Subtract:og,_memset:pg,_malloc:eg,_memcpy:tg,_bitshift64Shl:qg,_bitshift64Lshr:sg,_free:fg,_GuetzliFromPNG:id,___errno_location:ef,_GuetzliFromJPG:jd,runPostSets:ng,stackAlloc:tb,stackSave:ub,stackRestore:vb,establishStackSpace:wb,setThrew:xb,setTempRet0:Ab,getTempRet0:Bb,dynCall_iiii:Eg,dynCall_viiiii:Fg,dynCall_dii:Gg,dynCall_di:Hg,dynCall_vi:Ig,dynCall_viiidiiii:Jg,dynCall_vii:Kg,dynCall_ii:Lg,dynCall_iid:Mg,dynCall_v:Ng,dynCall_viiiiii:Og,dynCall_iii:Pg,dynCall_diiii:Qg,dynCall_viiii:Rg}}