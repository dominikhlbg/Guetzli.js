Module["asm"] =  (function(global, env, buffer) {
  'almost asm';
  
  
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);


  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var cttz_i8=env.cttz_i8|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;

  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_max=global.Math.max;
  var Math_clz32=global.Math.clz32;
  var Math_fround=global.Math.fround;
  var abort=env.abort;
  var assert=env.assert;
  var enlargeMemory=env.enlargeMemory;
  var getTotalMemory=env.getTotalMemory;
  var abortOnCannotGrowMemory=env.abortOnCannotGrowMemory;
  var invoke_iiii=env.invoke_iiii;
  var invoke_dii=env.invoke_dii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_viiidiiii=env.invoke_viiidiiii;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iid=env.invoke_iid;
  var invoke_v=env.invoke_v;
  var invoke_fi=env.invoke_fi;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_diiii=env.invoke_diiii;
  var invoke_viiii=env.invoke_viiii;
  var ___syscall221=env.___syscall221;
  var _llvm_pow_f64=env._llvm_pow_f64;
  var _pthread_key_create=env._pthread_key_create;
  var _abort=env._abort;
  var ___gxx_personality_v0=env.___gxx_personality_v0;
  var ___assert_fail=env.___assert_fail;
  var ___cxa_allocate_exception=env.___cxa_allocate_exception;
  var __ZSt18uncaught_exceptionv=env.__ZSt18uncaught_exceptionv;
  var _llvm_cttz_i32=env._llvm_cttz_i32;
  var ___setErrNo=env.___setErrNo;
  var ___cxa_begin_catch=env.___cxa_begin_catch;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var ___resumeException=env.___resumeException;
  var ___cxa_find_matching_catch=env.___cxa_find_matching_catch;
  var __exit=env.__exit;
  var _pthread_getspecific=env._pthread_getspecific;
  var _pthread_once=env._pthread_once;
  var ___syscall54=env.___syscall54;
  var ___unlock=env.___unlock;
  var _pthread_setspecific=env._pthread_setspecific;
  var ___cxa_throw=env.___cxa_throw;
  var ___lock=env.___lock;
  var ___syscall6=env.___syscall6;
  var ___syscall5=env.___syscall5;
  var ___syscall140=env.___syscall140;
  var _exit=env._exit;
  var ___syscall145=env.___syscall145;
  var ___syscall146=env.___syscall146;
  var tempFloat = Math_fround(0);
  const f0 = Math_fround(0);

// EMSCRIPTEN_START_FUNCS

function __ZN7guetzli8ReadJpegEPKhjNS_12JpegReadModeEPNS_8JPEGDataE(i187, i189, i4, i188) {
 i187 = i187 | 0;
 i189 = i189 | 0;
 i4 = i4 | 0;
 i188 = i188 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, i140 = 0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, i146 = 0, i147 = 0, i148 = 0, i149 = 0, i150 = 0, i151 = 0, i152 = 0, i153 = 0, i154 = 0, i155 = 0, i156 = 0, i157 = 0, i158 = 0, i159 = 0, i160 = 0, i161 = 0, i162 = 0, i163 = 0, i164 = 0, i165 = 0, i166 = 0, i167 = 0, i168 = 0, i169 = 0, i170 = 0, i171 = 0, i172 = 0, i173 = 0, i174 = 0, i175 = 0, i176 = 0, i177 = 0, i178 = 0, i179 = 0, i180 = 0, i181 = 0, i182 = 0, i183 = 0, i184 = 0, i185 = 0, i186 = 0, i190 = 0, i191 = 0, i192 = 0, i193 = 0, i194 = 0, i195 = 0, i196 = 0, i197 = 0;
 i197 = STACKTOP;
 STACKTOP = STACKTOP + 1280 | 0;
 i194 = i197 + 752 | 0;
 i166 = i197 + 736 | 0;
 i165 = i197 + 720 | 0;
 i164 = i197 + 712 | 0;
 i163 = i197 + 696 | 0;
 i162 = i197 + 680 | 0;
 i161 = i197 + 672 | 0;
 i160 = i197 + 656 | 0;
 i158 = i197 + 648 | 0;
 i157 = i197 + 632 | 0;
 i156 = i197 + 624 | 0;
 i155 = i197 + 616 | 0;
 i154 = i197 + 600 | 0;
 i153 = i197 + 592 | 0;
 i152 = i197 + 576 | 0;
 i151 = i197 + 560 | 0;
 i150 = i197 + 552 | 0;
 i148 = i197 + 536 | 0;
 i147 = i197 + 528 | 0;
 i146 = i197 + 520 | 0;
 i145 = i197 + 504 | 0;
 i144 = i197 + 488 | 0;
 i143 = i197 + 480 | 0;
 i142 = i197 + 472 | 0;
 i141 = i197 + 464 | 0;
 i140 = i197 + 456 | 0;
 i185 = i197 + 440 | 0;
 i138 = i197 + 432 | 0;
 i137 = i197 + 416 | 0;
 i136 = i197 + 400 | 0;
 i135 = i197 + 392 | 0;
 i134 = i197 + 384 | 0;
 i133 = i197 + 376 | 0;
 i132 = i197 + 368 | 0;
 i131 = i197 + 360 | 0;
 i130 = i197 + 344 | 0;
 i129 = i197 + 336 | 0;
 i128 = i197 + 328 | 0;
 i127 = i197 + 320 | 0;
 i125 = i197 + 312 | 0;
 i124 = i197 + 296 | 0;
 i184 = i197 + 288 | 0;
 i183 = i197 + 272 | 0;
 i182 = i197 + 264 | 0;
 i181 = i197 + 256 | 0;
 i180 = i197 + 248 | 0;
 i179 = i197 + 232 | 0;
 i178 = i197 + 224 | 0;
 i177 = i197 + 216 | 0;
 i176 = i197 + 208 | 0;
 i175 = i197 + 200 | 0;
 i174 = i197 + 184 | 0;
 i173 = i197 + 168 | 0;
 i172 = i197 + 160 | 0;
 i171 = i197 + 152 | 0;
 i170 = i197 + 144 | 0;
 i169 = i197 + 136 | 0;
 i168 = i197 + 120 | 0;
 i167 = i197 + 112 | 0;
 i159 = i197 + 104 | 0;
 i149 = i197 + 96 | 0;
 i139 = i197 + 88 | 0;
 i126 = i197 + 72 | 0;
 i186 = i197 + 56 | 0;
 i2 = i197 + 48 | 0;
 i3 = i197 + 32 | 0;
 i121 = i197;
 i196 = i197 + 760 | 0;
 i195 = i197 + 756 | 0;
 i122 = i197 + 768 | 0;
 do if (i189 >>> 0 < 2) {
  i1 = HEAP32[2032] | 0;
  if (!i189) i2 = 0; else i65 = 5;
 } else {
  if ((HEAP8[i187 >> 0] | 0) != -1) {
   i1 = HEAP32[2032] | 0;
   i65 = 5;
   break;
  }
  i1 = HEAP8[i187 + 1 >> 0] | 0;
  if (i1 << 24 >> 24 != -40) {
   i196 = HEAP32[2032] | 0;
   HEAP32[i2 >> 2] = i1 & 255;
   _fprintf(i196, 9849, i2) | 0;
   HEAP32[i188 + 148 >> 2] = 1;
   i196 = 0;
   STACKTOP = i197;
   return i196 | 0;
  }
  HEAP32[i196 >> 2] = 0;
  i2 = __Znwj(12128) | 0;
  HEAP32[i196 >> 2] = i2;
  i1 = 3032;
  while (1) {
   HEAP8[i2 >> 0] = 0;
   HEAP16[i2 + 2 >> 1] = -1;
   i1 = i1 + -1 | 0;
   if (!i1) break; else i2 = i2 + 4 | 0;
  }
  HEAP32[i195 >> 2] = 0;
  i2 = __Znwj(12128) | 0;
  HEAP32[i195 >> 2] = i2;
  i1 = 3032;
  while (1) {
   HEAP8[i2 >> 0] = 0;
   HEAP16[i2 + 2 >> 1] = -1;
   i1 = i1 + -1 | 0;
   if (!i1) break; else i2 = i2 + 4 | 0;
  }
  _memset(i122 | 0, 0, 512) | 0;
  i79 = i188 + 4 | 0;
  i117 = i188 + 80 | 0;
  i80 = i188 + 84 | 0;
  i77 = i188 + 16 | 0;
  i78 = i188 + 12 | 0;
  i81 = i188 + 20 | 0;
  i82 = i188 + 24 | 0;
  i83 = (i4 | 0) != 2;
  i84 = i188 + 104 | 0;
  i85 = i188 + 108 | 0;
  i86 = i188 + 112 | 0;
  i76 = (i4 | 0) == 0;
  i87 = i121 + 4 | 0;
  i88 = i121 + 8 | 0;
  i89 = i121 + 12 | 0;
  i90 = i121 + 16 | 0;
  i91 = i121 + 20 | 0;
  i92 = i121 + 20 | 0;
  i93 = i121 + 24 | 0;
  i94 = i121 + 28 | 0;
  i192 = HEAP32[2032] | 0;
  i193 = i188 + 148 | 0;
  i95 = i121 + 12 | 0;
  i96 = (i4 | 0) == 2;
  i190 = i188 + 72 | 0;
  i97 = i188 + 76 | 0;
  i191 = i188 + 68 | 0;
  i98 = i121 + 16 | 0;
  i99 = i121 + 20 | 0;
  i100 = i121 + 24 | 0;
  i101 = i121 + 16 | 0;
  i102 = i188 + 96 | 0;
  i103 = i189 + -2 | 0;
  i104 = i188 + 28 | 0;
  i105 = i188 + 80 | 0;
  i106 = i121 + 4 | 0;
  i107 = i121 + 8 | 0;
  i108 = i121 + 12 | 0;
  i109 = i188 + 100 | 0;
  i110 = i188 + 92 | 0;
  i119 = i188 + 56 | 0;
  i118 = i188 + 60 | 0;
  i111 = i121 + 4 | 0;
  i112 = i121 + 8 | 0;
  i113 = i121 + 12 | 0;
  i114 = i121 + 16 | 0;
  i115 = i121 + 20 | 0;
  i116 = i188 + 64 | 0;
  i66 = (i4 | 0) == 1;
  i67 = i188 + 36 | 0;
  i68 = i188 + 40 | 0;
  i69 = i188 + 32 | 0;
  i70 = i188 + 48 | 0;
  i71 = i188 + 52 | 0;
  i72 = i188 + 44 | 0;
  i73 = i188 + 120 | 0;
  i74 = i188 + 124 | 0;
  i75 = i188 + 116 | 0;
  i9 = 2;
  i63 = 0;
  i11 = 0;
  L17 : while (1) {
   i2 = i9 + 1 | 0;
   if (i2 >>> 0 < i189 >>> 0) {
    i3 = i9;
    i1 = 0;
    while (1) {
     if (((HEAP8[i187 + i3 >> 0] | 0) == -1 ? (i123 = HEAP8[i187 + i2 >> 0] | 0, (i123 & 255) >= 192) : 0) ? HEAP8[12267 + ((i123 & 255) + -192) >> 0] | 0 : 0) {
      i8 = i1;
      break;
     }
     i1 = i1 + 1 | 0;
     i3 = i2 + 1 | 0;
     if (i3 >>> 0 < i189 >>> 0) {
      i64 = i2;
      i2 = i3;
      i3 = i64;
     } else {
      i8 = i1;
      break;
     }
    }
    if (i8) {
     i1 = HEAP32[i85 >> 2] | 0;
     i2 = HEAP32[i86 >> 2] | 0;
     i3 = i1;
     if (i1 >>> 0 >= i2 >>> 0) {
      i1 = HEAP32[i84 >> 2] | 0;
      i4 = i3 - i1 + 1 | 0;
      if ((i4 | 0) < 0) {
       __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i84);
       i1 = HEAP32[i84 >> 2] | 0;
       i2 = HEAP32[i86 >> 2] | 0;
       i3 = HEAP32[i85 >> 2] | 0;
      }
      i7 = i1;
      i2 = i2 - i1 | 0;
      i6 = i2 << 1;
      i6 = i2 >>> 0 < 1073741823 ? (i6 >>> 0 < i4 >>> 0 ? i4 : i6) : 2147483647;
      i2 = i3 - i1 | 0;
      if (!i6) i4 = 0; else i4 = __Znwj(i6) | 0;
      i3 = i4 + i2 | 0;
      HEAP8[i3 >> 0] = -1;
      i5 = i3 + (0 - i2) | 0;
      if ((i2 | 0) > 0) _memcpy(i5 | 0, i7 | 0, i2 | 0) | 0;
      HEAP32[i84 >> 2] = i5;
      HEAP32[i85 >> 2] = i3 + 1;
      HEAP32[i86 >> 2] = i4 + i6;
      if (i1 | 0) __ZdlPv(i7);
     } else {
      HEAP8[i1 >> 0] = -1;
      HEAP32[i85 >> 2] = (HEAP32[i85 >> 2] | 0) + 1;
     }
     HEAP32[i121 >> 2] = 0;
     HEAP32[i121 + 4 >> 2] = 0;
     HEAP32[i121 + 8 >> 2] = 0;
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i121, i187 + i9 | 0, i8);
     i1 = HEAP32[i73 >> 2] | 0;
     if (i1 >>> 0 < (HEAP32[i74 >> 2] | 0) >>> 0) {
      HEAP32[i1 >> 2] = HEAP32[i121 >> 2];
      HEAP32[i1 + 4 >> 2] = HEAP32[i121 + 4 >> 2];
      HEAP32[i1 + 8 >> 2] = HEAP32[i121 + 8 >> 2];
      HEAP32[i121 >> 2] = 0;
      HEAP32[i121 + 4 >> 2] = 0;
      HEAP32[i121 + 8 >> 2] = 0;
      HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 12;
     } else __ZNSt3__26vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE21__push_back_slow_pathIS6_EEvOT_(i75, i121);
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i121);
     i5 = i8 + i9 | 0;
    } else i5 = i9;
   } else i5 = i9;
   i20 = i5 + 2 | 0;
   if (i20 >>> 0 > i189 >>> 0) {
    i65 = 36;
    break;
   }
   if ((HEAP8[i187 + i5 >> 0] | 0) != -1) {
    i65 = 36;
    break;
   }
   i2 = i187 + (i5 + 1) | 0;
   i64 = HEAP8[i2 >> 0] | 0;
   switch (i64 << 24 >> 24) {
   case -62:
   case -63:
   case -64:
    {
     if (HEAP32[i188 >> 2] | 0) {
      i65 = 41;
      break L17;
     }
     i3 = i5 + 10 | 0;
     if (i3 >>> 0 > i189 >>> 0) {
      i65 = 43;
      break L17;
     }
     i13 = HEAPU8[i187 + i20 >> 0] << 8 | HEAPU8[i187 + (i5 + 3) >> 0];
     i1 = HEAP8[i187 + (i5 + 4) >> 0] | 0;
     i2 = HEAPU8[i187 + (i5 + 5) >> 0] << 8 | HEAPU8[i187 + (i5 + 6) >> 0];
     i4 = HEAPU8[i187 + (i5 + 7) >> 0] << 8 | HEAPU8[i187 + (i5 + 8) >> 0];
     i6 = HEAPU8[i187 + (i5 + 9) >> 0] | 0;
     if (i1 << 24 >> 24 != 8) {
      i65 = 45;
      break L17;
     }
     if ((i2 + -1 | 0) >>> 0 > 65534) {
      i65 = 47;
      break L17;
     }
     if ((i4 + -1 | 0) >>> 0 > 65534) {
      i65 = 49;
      break L17;
     }
     if ((i6 + -1 | 0) >>> 0 > 3) {
      i65 = 51;
      break L17;
     }
     i1 = i6 * 3 | 0;
     if ((i1 + i3 | 0) >>> 0 > i189 >>> 0) {
      i65 = 53;
      break L17;
     }
     HEAP32[i79 >> 2] = i2;
     HEAP32[i188 >> 2] = i4;
     i1 = HEAP32[i80 >> 2] | 0;
     i5 = HEAP32[i117 >> 2] | 0;
     i4 = (i1 - i5 | 0) / 40 | 0;
     i2 = i1;
     if (i6 >>> 0 <= i4 >>> 0) {
      if (i6 >>> 0 < i4 >>> 0 ? (i120 = i5 + (i6 * 40 | 0) | 0, (i2 | 0) != (i120 | 0)) : 0) {
       while (1) {
        i1 = i2 + -40 | 0;
        HEAP32[i80 >> 2] = i1;
        i4 = HEAP32[i2 + -12 >> 2] | 0;
        if (i4) {
         i1 = i2 + -8 | 0;
         i2 = HEAP32[i1 >> 2] | 0;
         if ((i2 | 0) != (i4 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -2 - i4 | 0) >>> 1) << 1);
         __ZdlPv(i4);
         i1 = HEAP32[i80 >> 2] | 0;
        }
        if ((i1 | 0) == (i120 | 0)) break; else i2 = i1;
       }
       i1 = i120;
      }
     } else {
      __ZNSt3__26vectorIN7guetzli13JPEGComponentENS_9allocatorIS2_EEE8__appendEj(i117, i6 - i4 | 0);
      i1 = HEAP32[i80 >> 2] | 0;
     }
     i12 = __Znwj(32) | 0;
     HEAP32[i12 >> 2] = 0;
     HEAP32[i12 + 4 >> 2] = 0;
     HEAP32[i12 + 8 >> 2] = 0;
     HEAP32[i12 + 12 >> 2] = 0;
     HEAP32[i12 + 16 >> 2] = 0;
     HEAP32[i12 + 20 >> 2] = 0;
     HEAP32[i12 + 24 >> 2] = 0;
     HEAP32[i12 + 28 >> 2] = 0;
     i9 = HEAP32[i117 >> 2] | 0;
     i10 = (i1 | 0) == (i9 | 0);
     i11 = i9;
     if (i10) {
      i2 = HEAP32[i77 >> 2] | 0;
      i4 = HEAP32[i78 >> 2] | 0;
     } else {
      i8 = (i1 - i9 | 0) / 40 | 0;
      i7 = 0;
      while (1) {
       i2 = HEAPU8[i187 + i3 >> 0] | 0;
       i4 = i12 + (i2 >>> 5 << 2) | 0;
       i5 = 1 << (i2 & 31);
       i6 = HEAP32[i4 >> 2] | 0;
       if (i5 & i6 | 0) {
        i65 = 68;
        break L17;
       }
       HEAP32[i4 >> 2] = i5 | i6;
       HEAP32[i11 + (i7 * 40 | 0) >> 2] = i2;
       i5 = HEAPU8[i187 + (i3 + 1) >> 0] | 0;
       i2 = i5 >>> 4;
       i5 = i5 & 15;
       if ((i2 + -1 | 0) >>> 0 > 14) {
        i65 = 70;
        break L17;
       }
       if (!i5) {
        i65 = 72;
        break L17;
       }
       HEAP32[i11 + (i7 * 40 | 0) + 4 >> 2] = i2;
       HEAP32[i11 + (i7 * 40 | 0) + 8 >> 2] = i5;
       i6 = i3 + 3 | 0;
       HEAP32[i11 + (i7 * 40 | 0) + 12 >> 2] = HEAPU8[i187 + (i3 + 2) >> 0];
       i4 = HEAP32[i78 >> 2] | 0;
       i4 = (i4 | 0) < (i2 | 0) ? i2 : i4;
       HEAP32[i78 >> 2] = i4;
       i2 = HEAP32[i77 >> 2] | 0;
       i2 = (i2 | 0) < (i5 | 0) ? i5 : i2;
       HEAP32[i77 >> 2] = i2;
       i7 = i7 + 1 | 0;
       if (i7 >>> 0 >= i8 >>> 0) {
        i3 = i6;
        break;
       } else i3 = i6;
      }
     }
     i63 = i2 << 3;
     HEAP32[i81 >> 2] = ((HEAP32[i79 >> 2] | 0) + -1 + i63 | 0) / (i63 | 0) | 0;
     i63 = i4 << 3;
     HEAP32[i82 >> 2] = (i63 + -1 + (HEAP32[i188 >> 2] | 0) | 0) / (i63 | 0) | 0;
     L81 : do if (!(i83 | i10)) {
      i2 = HEAP32[i11 + 4 >> 2] | 0;
      if (!((i4 | 0) % (i2 | 0) | 0)) {
       i10 = 0;
       i6 = i11;
       i4 = i2;
      } else {
       i65 = 77;
       break L17;
      }
      while (1) {
       i2 = HEAP32[i6 + (i10 * 40 | 0) + 8 >> 2] | 0;
       if ((HEAP32[i77 >> 2] | 0) % (i2 | 0) | 0 | 0) {
        i65 = 77;
        break L17;
       }
       i63 = Math_imul(HEAP32[i82 >> 2] | 0, i4) | 0;
       HEAP32[i6 + (i10 * 40 | 0) + 16 >> 2] = i63;
       i2 = Math_imul(HEAP32[i81 >> 2] | 0, i2) | 0;
       HEAP32[i6 + (i10 * 40 | 0) + 20 >> 2] = i2;
       i2 = ___muldi3(i2 | 0, ((i2 | 0) < 0) << 31 >> 31 | 0, i63 | 0, ((i63 | 0) < 0) << 31 >> 31 | 0) | 0;
       i63 = tempRet0;
       if (i63 >>> 0 > 0 | (i63 | 0) == 0 & i2 >>> 0 > 2097152) {
        i65 = 79;
        break L17;
       }
       HEAP32[i6 + (i10 * 40 | 0) + 24 >> 2] = i2;
       i8 = i6 + (i10 * 40 | 0) + 28 | 0;
       i5 = i2 << 6;
       i6 = i6 + (i10 * 40 | 0) + 32 | 0;
       i7 = HEAP32[i6 >> 2] | 0;
       i4 = HEAP32[i8 >> 2] | 0;
       i2 = i7 - i4 >> 1;
       do if (i5 >>> 0 > i2 >>> 0) {
        __ZNSt3__26vectorIsNS_9allocatorIsEEE8__appendEj(i8, i5 - i2 | 0);
        i2 = HEAP32[i117 >> 2] | 0;
        i1 = HEAP32[i80 >> 2] | 0;
       } else {
        if (i5 >>> 0 >= i2 >>> 0) {
         i2 = i9;
         break;
        }
        i2 = i4 + (i5 << 1) | 0;
        if ((i7 | 0) == (i2 | 0)) {
         i2 = i9;
         break;
        }
        HEAP32[i6 >> 2] = i7 + (~((i7 + -2 - i2 | 0) >>> 1) << 1);
        i2 = i9;
       } while (0);
       i10 = i10 + 1 | 0;
       if (i10 >>> 0 >= ((i1 - i2 | 0) / 40 | 0) >>> 0) break L81;
       i6 = i2;
       i4 = HEAP32[i6 + (i10 * 40 | 0) + 4 >> 2] | 0;
       if ((HEAP32[i78 >> 2] | 0) % (i4 | 0) | 0 | 0) {
        i65 = 77;
        break L17;
       } else i9 = i2;
      }
     } while (0);
     if ((i13 + i20 | 0) != (i3 | 0)) {
      i65 = 88;
      break L17;
     }
     __ZdlPv(i12);
     i10 = i64 << 24 >> 24 == -62;
     i11 = 1;
     break;
    }
   case -60:
    {
     i1 = i5 + 4 | 0;
     if (i1 >>> 0 > i189 >>> 0) {
      i65 = 93;
      break L17;
     }
     i19 = HEAPU8[i187 + i20 >> 0] << 8 | HEAPU8[i187 + (i5 + 3) >> 0];
     if ((i19 | 0) == 2) {
      i65 = 96;
      break L17;
     }
     i3 = i19 + i20 | 0;
     while (1) {
      if (i1 >>> 0 >= i3 >>> 0) break;
      i8 = i1 + 17 | 0;
      if (i8 >>> 0 > i189 >>> 0) {
       i65 = 99;
       break L17;
      }
      i18 = __Znwj(68) | 0;
      HEAP32[i121 >> 2] = i18;
      i2 = i18 + 68 | 0;
      HEAP32[i88 >> 2] = i2;
      i4 = i18;
      i5 = i4 + 68 | 0;
      do {
       HEAP32[i4 >> 2] = 0;
       i4 = i4 + 4 | 0;
      } while ((i4 | 0) < (i5 | 0));
      HEAP32[i87 >> 2] = i2;
      HEAP32[i89 >> 2] = 0;
      HEAP32[i90 >> 2] = 0;
      HEAP32[i91 >> 2] = 0;
      i17 = __Znwj(1028) | 0;
      HEAP32[i89 >> 2] = i17;
      i5 = i17 + 1028 | 0;
      HEAP32[i92 >> 2] = i5;
      _memset(i17 | 0, 0, 1028) | 0;
      HEAP32[i90 >> 2] = i5;
      HEAP8[i94 >> 0] = 1;
      i5 = i1 + 1 | 0;
      i1 = HEAP8[i187 + i1 >> 0] | 0;
      i2 = i1 & 255;
      HEAP32[i93 >> 2] = i2;
      i6 = (i2 & 16 | 0) != 0;
      if (i6) {
       i2 = i2 + -16 | 0;
       if ((i1 & 255) < 16 | (i2 | 0) > 3) {
        HEAP32[i175 >> 2] = 12643;
        HEAP32[i175 + 4 >> 2] = i2;
        _fprintf(i192, 12402, i175) | 0;
        HEAP32[i193 >> 2] = 16;
        i1 = i5;
        i2 = 1;
       } else {
        i1 = i195;
        i65 = 105;
       }
      } else if ((i1 & 255) > 3) {
       HEAP32[i176 >> 2] = 12643;
       HEAP32[i176 + 4 >> 2] = i2;
       _fprintf(i192, 12402, i176) | 0;
       HEAP32[i193 >> 2] = 16;
       i1 = i5;
       i2 = 1;
      } else {
       i1 = i196;
       i65 = 105;
      }
      do if ((i65 | 0) == 105) {
       i65 = 0;
       i15 = HEAP32[i1 >> 2] | 0;
       HEAP32[i18 >> 2] = 0;
       i4 = 1;
       i12 = 1;
       i13 = 65536;
       i14 = 0;
       i1 = i5;
       while (1) {
        i61 = HEAP8[i187 + i1 >> 0] | 0;
        i62 = i61 & 255;
        i12 = i61 << 24 >> 24 == 0 ? i12 : i4;
        HEAP32[i18 + (i4 << 2) >> 2] = i62;
        i14 = i62 + i14 | 0;
        i13 = i13 - (i62 << 16 - i4) | 0;
        i4 = i4 + 1 | 0;
        if ((i4 | 0) == 17) break; else i1 = i1 + 1 | 0;
       }
       i9 = i2 * 758 | 0;
       i10 = i15 + (i9 << 2) | 0;
       if (i6) {
        if (i14 >>> 0 > 256) {
         HEAP32[i177 >> 2] = 12657;
         HEAP32[i177 + 4 >> 2] = i14;
         _fprintf(i192, 12402, i177) | 0;
         HEAP32[i193 >> 2] = 21;
         i1 = i8;
         i2 = 1;
         break;
        }
       } else if (i14 >>> 0 > 12) {
        HEAP32[i178 >> 2] = 12657;
        HEAP32[i178 + 4 >> 2] = i14;
        _fprintf(i192, 12402, i178) | 0;
        HEAP32[i193 >> 2] = 21;
        i1 = i8;
        i2 = 1;
        break;
       }
       if ((i14 + i8 | 0) >>> 0 > i189 >>> 0) {
        HEAP32[i179 >> 2] = i8;
        HEAP32[i179 + 4 >> 2] = i14;
        HEAP32[i179 + 8 >> 2] = i189;
        _fprintf(i192, 12354, i179) | 0;
        HEAP32[i193 >> 2] = 3;
        i1 = i8;
        i2 = 1;
        break;
       }
       i16 = __Znwj(32) | 0;
       HEAP32[i16 >> 2] = 0;
       HEAP32[i16 + 4 >> 2] = 0;
       HEAP32[i16 + 8 >> 2] = 0;
       HEAP32[i16 + 12 >> 2] = 0;
       HEAP32[i16 + 16 >> 2] = 0;
       HEAP32[i16 + 20 >> 2] = 0;
       HEAP32[i16 + 24 >> 2] = 0;
       HEAP32[i16 + 28 >> 2] = 0;
       L122 : do if ((i14 | 0) > 0) {
        L124 : do if (i6) {
         i7 = 0;
         i2 = i8;
         while (1) {
          i1 = i2 + 1 | 0;
          i2 = HEAPU8[i187 + i2 >> 0] | 0;
          i4 = i16 + (i2 >>> 5 << 2) | 0;
          i5 = 1 << (i2 & 31);
          i6 = HEAP32[i4 >> 2] | 0;
          if (i5 & i6 | 0) break L124;
          HEAP32[i4 >> 2] = i5 | i6;
          HEAP32[i17 + (i7 << 2) >> 2] = i2;
          i7 = i7 + 1 | 0;
          if ((i7 | 0) >= (i14 | 0)) {
           i65 = 123;
           break L122;
          } else i2 = i1;
         }
        } else {
         i7 = 0;
         i2 = i8;
         while (1) {
          i1 = i2 + 1 | 0;
          i62 = HEAP8[i187 + i2 >> 0] | 0;
          i2 = i62 & 255;
          if ((i62 & 255) > 11) break;
          i4 = i16 + (i2 >>> 5 << 2) | 0;
          i5 = 1 << (i2 & 31);
          i6 = HEAP32[i4 >> 2] | 0;
          if (i6 & i5 | 0) break L124;
          HEAP32[i4 >> 2] = i6 | i5;
          HEAP32[i17 + (i7 << 2) >> 2] = i2;
          i7 = i7 + 1 | 0;
          if ((i7 | 0) >= (i14 | 0)) {
           i65 = 123;
           break L122;
          } else i2 = i1;
         }
         HEAP32[i180 >> 2] = 12669;
         HEAP32[i180 + 4 >> 2] = i2;
         _fprintf(i192, 12402, i180) | 0;
         HEAP32[i193 >> 2] = 21;
         i2 = 1;
         break L122;
        } while (0);
        HEAP32[i181 >> 2] = i2;
        _fprintf(i192, 12675, i181) | 0;
        HEAP32[i193 >> 2] = 21;
        i2 = 1;
       } else {
        i1 = i8;
        i65 = 123;
       } while (0);
       L134 : do if ((i65 | 0) == 123) {
        i65 = 0;
        i2 = i18 + (i12 << 2) | 0;
        HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
        HEAP32[(HEAP32[i89 >> 2] | 0) + (i14 << 2) >> 2] = 256;
        i2 = i13 - (1 << 16 - i12) | 0;
        if ((i2 | 0) < 0) {
         _fwrite(12708, 30, 1, i192) | 0;
         HEAP32[i193 >> 2] = 21;
         i2 = 1;
         break;
        }
        do if (i2 | 0) {
         if ((HEAP16[i15 + (i9 << 2) + 2 >> 1] | 0) == -1) break; else i2 = 0;
         do {
          HEAP8[i10 + (i2 << 2) >> 0] = 0;
          HEAP16[i10 + (i2 << 2) + 2 >> 1] = -1;
          i2 = i2 + 1 | 0;
         } while ((i2 | 0) != 758);
        } while (0);
        HEAP8[i94 >> 0] = (i1 | 0) == (i3 | 0) & 1;
        do if (i96) {
         if (__ZN7guetzli21BuildJpegHuffmanTableEPKiS1_PNS_17HuffmanTableEntryE(i18, HEAP32[i89 >> 2] | 0, i10) | 0) break;
         _fwrite(12739, 31, 1, i192) | 0;
         HEAP32[i193 >> 2] = 21;
         i2 = 1;
         break L134;
        } while (0);
        i2 = HEAP32[i190 >> 2] | 0;
        if ((i2 | 0) == (HEAP32[i97 >> 2] | 0)) {
         __ZNSt3__26vectorIN7guetzli15JPEGHuffmanCodeENS_9allocatorIS2_EEE21__push_back_slow_pathIRKS2_EEvOT_(i191, i121);
         i2 = 0;
         break;
        } else {
         __ZNSt3__26vectorIiNS_9allocatorIiEEEC2ERKS3_(i2, i121);
         __ZNSt3__26vectorIiNS_9allocatorIiEEEC2ERKS3_(i2 + 12 | 0, i89);
         i2 = i2 + 24 | 0;
         HEAP32[i2 >> 2] = HEAP32[i93 >> 2];
         HEAP8[i2 + 4 >> 0] = HEAP8[i93 + 4 >> 0] | 0;
         HEAP32[i190 >> 2] = (HEAP32[i190 >> 2] | 0) + 32;
         i2 = 0;
         break;
        }
       } while (0);
       __ZdlPv(i16);
      } while (0);
      i4 = HEAP32[i95 >> 2] | 0;
      if (i4 | 0) {
       i5 = HEAP32[i90 >> 2] | 0;
       if ((i5 | 0) != (i4 | 0)) HEAP32[i90 >> 2] = i5 + (~((i5 + -4 - i4 | 0) >>> 2) << 2);
       __ZdlPv(i4);
      }
      i4 = HEAP32[i121 >> 2] | 0;
      if (i4 | 0) {
       i5 = HEAP32[i87 >> 2] | 0;
       if ((i5 | 0) != (i4 | 0)) HEAP32[i87 >> 2] = i5 + (~((i5 + -4 - i4 | 0) >>> 2) << 2);
       __ZdlPv(i4);
      }
      if (i2) {
       i2 = 0;
       break L17;
      }
     }
     if ((i3 | 0) == (i1 | 0)) i10 = i63; else {
      i65 = 145;
      break L17;
     }
     break;
    }
   case -39:
   case -41:
   case -42:
   case -43:
   case -44:
   case -45:
   case -46:
   case -47:
   case -48:
    {
     i10 = i63;
     i3 = i20;
     break;
    }
   case -38:
    {
     if (i96) {
      i1 = i5 + 5 | 0;
      if (i1 >>> 0 > i189 >>> 0) {
       i65 = 148;
       break L17;
      }
      i14 = HEAPU8[i187 + i20 >> 0] << 8 | HEAPU8[i187 + (i5 + 3) >> 0];
      i62 = HEAP8[i187 + (i5 + 4) >> 0] | 0;
      i13 = i62 & 255;
      if (!(i62 << 24 >> 24)) {
       i65 = 151;
       break L17;
      }
      if (i13 >>> 0 > (((HEAP32[i80 >> 2] | 0) - (HEAP32[i117 >> 2] | 0) | 0) / 40 | 0) >>> 0) {
       i65 = 151;
       break L17;
      }
      HEAP32[i98 >> 2] = 0;
      HEAP32[i99 >> 2] = 0;
      HEAP32[i100 >> 2] = 0;
      __ZNSt3__26vectorIN7guetzli21JPEGComponentScanInfoENS_9allocatorIS2_EEE8__appendEj(i101, i13);
      i2 = i13 << 1;
      if ((i2 + i1 | 0) >>> 0 > i189 >>> 0) {
       HEAP32[i124 >> 2] = i1;
       HEAP32[i124 + 4 >> 2] = i2;
       HEAP32[i124 + 8 >> 2] = i189;
       _fprintf(i192, 12354, i124) | 0;
       HEAP32[i193 >> 2] = 3;
       i2 = 0;
      } else {
       i15 = __Znwj(32) | 0;
       HEAP32[i15 >> 2] = 0;
       HEAP32[i15 + 4 >> 2] = 0;
       HEAP32[i15 + 8 >> 2] = 0;
       HEAP32[i15 + 12 >> 2] = 0;
       HEAP32[i15 + 16 >> 2] = 0;
       HEAP32[i15 + 20 >> 2] = 0;
       HEAP32[i15 + 24 >> 2] = 0;
       HEAP32[i15 + 28 >> 2] = 0;
       i10 = HEAP32[i101 >> 2] | 0;
       i9 = 0;
       while (1) {
        i8 = i1 + 1 | 0;
        i7 = HEAPU8[i187 + i1 >> 0] | 0;
        i2 = i15 + (i7 >>> 5 << 2) | 0;
        i3 = 1 << (i7 & 31);
        i4 = HEAP32[i2 >> 2] | 0;
        if (i3 & i4 | 0) {
         i65 = 156;
         break;
        }
        HEAP32[i2 >> 2] = i3 | i4;
        i2 = HEAP32[i80 >> 2] | 0;
        i3 = HEAP32[i117 >> 2] | 0;
        i5 = i3;
        if ((i2 | 0) == (i3 | 0)) {
         i65 = 163;
         break;
        }
        i6 = i10 + (i9 * 12 | 0) | 0;
        i4 = (i2 - i3 | 0) / 40 | 0;
        i3 = 0;
        i2 = 0;
        do {
         if ((HEAP32[i5 + (i3 * 40 | 0) >> 2] | 0) == (i7 | 0)) {
          HEAP32[i6 >> 2] = i3;
          i2 = 1;
         }
         i3 = i3 + 1 | 0;
        } while (i3 >>> 0 < i4 >>> 0);
        if (!i2) {
         i65 = 163;
         break;
        }
        i4 = i1 + 2 | 0;
        i65 = HEAP8[i187 + i8 >> 0] | 0;
        i3 = i65 & 255;
        i2 = i3 >>> 4;
        i3 = i3 & 15;
        if ((i65 & 255) > 63) {
         i65 = 165;
         break;
        }
        if (i3 >>> 0 > 3) {
         i65 = 167;
         break;
        }
        HEAP32[i10 + (i9 * 12 | 0) + 4 >> 2] = i2;
        HEAP32[i10 + (i9 * 12 | 0) + 8 >> 2] = i3;
        i9 = i9 + 1 | 0;
        if ((i9 | 0) >= (i13 | 0)) {
         i65 = 169;
         break;
        } else i1 = i4;
       }
       do if ((i65 | 0) == 156) {
        HEAP32[i125 >> 2] = i7;
        _fprintf(i192, 13080, i125) | 0;
        i1 = i8;
        i2 = 32;
        i65 = 206;
       } else if ((i65 | 0) == 163) {
        HEAP32[i127 >> 2] = i7;
        _fprintf(i192, 13105, i127) | 0;
        i1 = i8;
        i2 = 33;
        i65 = 206;
       } else if ((i65 | 0) == 165) {
        HEAP32[i128 >> 2] = 13154;
        HEAP32[i128 + 4 >> 2] = i2;
        _fprintf(i192, 12402, i128) | 0;
        i1 = i4;
        i2 = 16;
        i65 = 206;
       } else if ((i65 | 0) == 167) {
        HEAP32[i129 >> 2] = 13165;
        HEAP32[i129 + 4 >> 2] = i3;
        _fprintf(i192, 12402, i129) | 0;
        i1 = i4;
        i2 = 16;
        i65 = 206;
       } else if ((i65 | 0) == 169) {
        i12 = i1 + 5 | 0;
        if (i12 >>> 0 > i189 >>> 0) {
         HEAP32[i130 >> 2] = i4;
         HEAP32[i130 + 4 >> 2] = 3;
         HEAP32[i130 + 8 >> 2] = i189;
         _fprintf(i192, 12354, i130) | 0;
         i1 = i4;
         i2 = 3;
         i65 = 206;
         break;
        }
        i4 = HEAP8[i187 + i4 >> 0] | 0;
        i2 = i4 & 255;
        HEAP32[i121 >> 2] = i2;
        i3 = i1 + 4 | 0;
        i5 = HEAP8[i187 + (i1 + 3) >> 0] | 0;
        i1 = i5 & 255;
        HEAP32[i106 >> 2] = i1;
        if ((i4 & 255) > 63) {
         HEAP32[i131 >> 2] = 13176;
         HEAP32[i131 + 4 >> 2] = i2;
         _fprintf(i192, 12402, i131) | 0;
         i1 = i3;
         i2 = 12;
         i65 = 206;
         break;
        }
        if ((i5 & 255) > 63 | (i5 & 255) < (i4 & 255)) {
         HEAP32[i132 >> 2] = 13189;
         HEAP32[i132 + 4 >> 2] = i1;
         _fprintf(i192, 12402, i132) | 0;
         i1 = i3;
         i2 = 13;
         i65 = 206;
         break;
        }
        i3 = HEAPU8[i187 + i3 >> 0] | 0;
        HEAP32[i107 >> 2] = i3 >>> 4;
        HEAP32[i108 >> 2] = i3 & 15;
        i3 = HEAP32[i190 >> 2] | 0;
        i6 = HEAP32[i191 >> 2] | 0;
        i2 = i4 << 24 >> 24 != 0;
        i1 = i5 << 24 >> 24 == 0;
        i10 = HEAP32[i101 >> 2] | 0;
        i9 = i6;
        L199 : do if ((i3 | 0) == (i6 | 0)) if (i2) if (i1) {
         i65 = 201;
         break;
        } else {
         i1 = 0;
         i65 = 200;
         break;
        } else {
         i1 = HEAP32[i10 + 4 >> 2] | 0;
         i65 = 199;
         break;
        } else {
         i8 = i3 - i6 >> 5;
         if (i2) {
          if (i1) {
           i65 = 201;
           break;
          } else i1 = 0;
          while (1) {
           i5 = HEAP32[i10 + (i1 * 12 | 0) + 4 >> 2] | 0;
           i6 = i10 + (i1 * 12 | 0) + 8 | 0;
           i4 = 0;
           i2 = 0;
           do {
            i3 = HEAP32[i9 + (i4 << 5) + 24 >> 2] | 0;
            if ((i3 | 0) != (i5 | 0)) i2 = i2 | (i3 | 0) == ((HEAP32[i6 >> 2] | 0) + 16 | 0);
            i4 = i4 + 1 | 0;
           } while (i4 >>> 0 < i8 >>> 0);
           if (!i2) {
            i65 = 200;
            break L199;
           }
           i1 = i1 + 1 | 0;
           if ((i1 | 0) >= (i13 | 0)) {
            i65 = 201;
            break L199;
           }
          }
         }
         if (i1) {
          i4 = 0;
          while (1) {
           i1 = HEAP32[i10 + (i4 * 12 | 0) + 4 >> 2] | 0;
           i2 = 0;
           i3 = 0;
           do {
            i3 = i3 | (HEAP32[i9 + (i2 << 5) + 24 >> 2] | 0) == (i1 | 0);
            i2 = i2 + 1 | 0;
           } while (i2 >>> 0 < i8 >>> 0);
           if (!i3) {
            i65 = 199;
            break L199;
           }
           i4 = i4 + 1 | 0;
           if ((i4 | 0) >= (i13 | 0)) {
            i65 = 201;
            break L199;
           }
          }
         } else i6 = 0;
         while (1) {
          i1 = HEAP32[i10 + (i6 * 12 | 0) + 4 >> 2] | 0;
          i7 = i10 + (i6 * 12 | 0) + 8 | 0;
          i5 = 0;
          i2 = 0;
          i3 = 0;
          do {
           i4 = HEAP32[i9 + (i5 << 5) + 24 >> 2] | 0;
           if ((i4 | 0) == (i1 | 0)) i3 = 1; else i2 = i2 | (i4 | 0) == ((HEAP32[i7 >> 2] | 0) + 16 | 0);
           i5 = i5 + 1 | 0;
          } while (i5 >>> 0 < i8 >>> 0);
          if (!i3) {
           i65 = 199;
           break L199;
          }
          if (!i2) {
           i1 = i6;
           i65 = 200;
           break L199;
          }
          i6 = i6 + 1 | 0;
          if ((i6 | 0) >= (i13 | 0)) {
           i65 = 201;
           break;
          }
         }
        } while (0);
        if ((i65 | 0) == 199) {
         HEAP32[i133 >> 2] = i1;
         _fprintf(i192, 13202, i133) | 0;
         i1 = i12;
         i2 = 34;
         i65 = 206;
         break;
        } else if ((i65 | 0) == 200) {
         HEAP32[i134 >> 2] = HEAP32[i10 + (i1 * 12 | 0) + 8 >> 2];
         _fprintf(i192, 13261, i134) | 0;
         i1 = i12;
         i2 = 34;
         i65 = 206;
         break;
        } else if ((i65 | 0) == 201) {
         i65 = 0;
         i1 = HEAP32[i102 >> 2] | 0;
         if ((i1 | 0) == (HEAP32[i109 >> 2] | 0)) __ZNSt3__26vectorIN7guetzli12JPEGScanInfoENS_9allocatorIS2_EEE21__push_back_slow_pathIRKS2_EEvOT_(i110, i121); else {
          HEAP32[i1 >> 2] = HEAP32[i121 >> 2];
          HEAP32[i1 + 4 >> 2] = HEAP32[i121 + 4 >> 2];
          HEAP32[i1 + 8 >> 2] = HEAP32[i121 + 8 >> 2];
          HEAP32[i1 + 12 >> 2] = HEAP32[i121 + 12 >> 2];
          __ZNSt3__26vectorIN7guetzli21JPEGComponentScanInfoENS_9allocatorIS2_EEEC2ERKS5_(i1 + 16 | 0, i101);
          HEAP32[i102 >> 2] = (HEAP32[i102 >> 2] | 0) + 28;
         }
         if ((i14 + i20 | 0) == (i12 | 0)) {
          i1 = i12;
          i2 = 1;
          break;
         }
         HEAP32[i135 >> 2] = i14;
         HEAP32[i135 + 4 >> 2] = i12 - i20;
         _fprintf(i192, 12561, i135) | 0;
         i1 = i12;
         i2 = 6;
         i65 = 206;
         break;
        }
       } while (0);
       if ((i65 | 0) == 206) {
        i65 = 0;
        HEAP32[i193 >> 2] = i2;
        i2 = 0;
       }
       __ZdlPv(i15);
      }
      i3 = HEAP32[i98 >> 2] | 0;
      if (i3 | 0) {
       i4 = HEAP32[i99 >> 2] | 0;
       if ((i4 | 0) != (i3 | 0)) HEAP32[i99 >> 2] = i4 + (~(((i4 + -12 - i3 | 0) >>> 0) / 12 | 0) * 12 | 0);
       __ZdlPv(i3);
      }
      if (!i2) {
       i2 = 0;
       break L17;
      }
      i9 = HEAP32[i102 >> 2] | 0;
      i16 = HEAP32[i9 + -8 >> 2] | 0;
      i60 = HEAP32[i9 + -12 >> 2] | 0;
      i15 = (i16 - i60 | 0) / 12 | 0;
      i61 = i15 >>> 0 > 1;
      i62 = i60;
      if (i61) {
       i58 = HEAP32[i82 >> 2] | 0;
       i59 = HEAP32[i81 >> 2] | 0;
      } else {
       i57 = HEAP32[i62 >> 2] | 0;
       i59 = HEAP32[i105 >> 2] | 0;
       i56 = Math_imul(HEAP32[i59 + (i57 * 40 | 0) + 4 >> 2] | 0, HEAP32[i188 >> 2] | 0) | 0;
       i58 = HEAP32[i78 >> 2] << 3;
       i57 = Math_imul(HEAP32[i59 + (i57 * 40 | 0) + 8 >> 2] | 0, HEAP32[i79 >> 2] | 0) | 0;
       i59 = HEAP32[i77 >> 2] << 3;
       i58 = (i56 + -1 + i58 | 0) / (i58 | 0) | 0;
       i59 = (i57 + -1 + i59 | 0) / (i59 | 0) | 0;
      }
      i3 = i121;
      HEAP32[i3 >> 2] = 0;
      HEAP32[i3 + 4 >> 2] = 0;
      i3 = i1 + 1 | 0;
      if (i1 >>> 0 < i103 >>> 0) {
       i2 = HEAP8[i187 + i1 >> 0] | 0;
       if (i2 << 24 >> 24 == -1) {
        i57 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
        i2 = -1;
        i6 = i57 ? i103 : i1;
        i3 = i57 ? i1 + 2 | 0 : i3;
       } else i6 = i103;
      } else {
       i2 = 0;
       i6 = i103;
      }
      i4 = _bitshift64Shl(i2 & 255 | 0, 0, 8) | 0;
      i5 = tempRet0;
      i2 = i3 + 1 | 0;
      do if (i3 >>> 0 < i6 >>> 0) {
       i1 = HEAP8[i187 + i3 >> 0] | 0;
       if (i1 << 24 >> 24 != -1) {
        i7 = i2;
        break;
       }
       i7 = (HEAP8[i187 + i2 >> 0] | 0) == 0;
       i1 = -1;
       i6 = i7 ? i6 : i3;
       i7 = i7 ? i3 + 2 | 0 : i2;
      } else {
       i1 = 0;
       i7 = i2;
      } while (0);
      i3 = _bitshift64Shl(i1 & 255 | i4 | 0, i5 | 0, 8) | 0;
      i4 = tempRet0;
      i2 = i7 + 1 | 0;
      do if (i7 >>> 0 < i6 >>> 0) {
       i1 = HEAP8[i187 + i7 >> 0] | 0;
       if (i1 << 24 >> 24 != -1) break;
       i57 = (HEAP8[i187 + i2 >> 0] | 0) == 0;
       i1 = -1;
       i6 = i57 ? i6 : i7;
       i2 = i57 ? i7 + 2 | 0 : i2;
      } else i1 = 0; while (0);
      i7 = _bitshift64Shl(i1 & 255 | i3 | 0, i4 | 0, 8) | 0;
      i8 = tempRet0;
      i3 = i2 + 1 | 0;
      do if (i2 >>> 0 < i6 >>> 0) {
       i1 = HEAP8[i187 + i2 >> 0] | 0;
       if (i1 << 24 >> 24 != -1) {
        i4 = i1;
        i1 = i6;
        i5 = i6;
        break;
       }
       i5 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
       i4 = -1;
       i1 = i5 ? i6 : i2;
       i3 = i5 ? i2 + 2 | 0 : i3;
       i5 = i5 ? i6 : i2;
      } else {
       i4 = 0;
       i1 = i6;
       i5 = i6;
      } while (0);
      i6 = _bitshift64Shl(i4 & 255 | i7 | 0, i8 | 0, 8) | 0;
      i7 = tempRet0;
      i4 = i3 + 1 | 0;
      do if (i3 >>> 0 < i5 >>> 0) {
       i2 = HEAP8[i187 + i3 >> 0] | 0;
       if (i2 << 24 >> 24 != -1) break;
       i57 = (HEAP8[i187 + i4 >> 0] | 0) == 0;
       i2 = -1;
       i1 = i57 ? i1 : i3;
       i4 = i57 ? i3 + 2 | 0 : i4;
       i5 = i57 ? i5 : i3;
      } else i2 = 0; while (0);
      i6 = _bitshift64Shl(i2 & 255 | i6 | 0, i7 | 0, 8) | 0;
      i7 = tempRet0;
      i3 = i4 + 1 | 0;
      do if (i4 >>> 0 < i5 >>> 0) {
       i2 = HEAP8[i187 + i4 >> 0] | 0;
       if (i2 << 24 >> 24 != -1) break;
       i57 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
       i2 = -1;
       i1 = i57 ? i1 : i4;
       i3 = i57 ? i4 + 2 | 0 : i3;
       i5 = i57 ? i5 : i4;
      } else i2 = 0; while (0);
      i6 = _bitshift64Shl(i2 & 255 | i6 | 0, i7 | 0, 8) | 0;
      i7 = tempRet0;
      i4 = i3 + 1 | 0;
      do if (i3 >>> 0 < i5 >>> 0) {
       i2 = HEAP8[i187 + i3 >> 0] | 0;
       if (i2 << 24 >> 24 != -1) break;
       i57 = (HEAP8[i187 + i4 >> 0] | 0) == 0;
       i2 = -1;
       i1 = i57 ? i1 : i3;
       i4 = i57 ? i3 + 2 | 0 : i4;
       i5 = i57 ? i5 : i3;
      } else i2 = 0; while (0);
      i6 = _bitshift64Shl(i2 & 255 | i6 | 0, i7 | 0, 8) | 0;
      i14 = tempRet0;
      i3 = i4 + 1 | 0;
      do if (i4 >>> 0 < i5 >>> 0) {
       i2 = HEAP8[i187 + i4 >> 0] | 0;
       if (i2 << 24 >> 24 != -1) break;
       i57 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
       i2 = -1;
       i1 = i57 ? i1 : i4;
       i3 = i57 ? i4 + 2 | 0 : i3;
      } else i2 = 0; while (0);
      i13 = i2 & 255 | i6;
      i57 = HEAP32[i104 >> 2] | 0;
      i56 = i63 ? HEAP32[i9 + -16 >> 2] | 0 : 0;
      i54 = HEAP32[i9 + -28 >> 2] | 0;
      i12 = i63 ? i54 : 0;
      i55 = i63 ? HEAP32[i9 + -24 >> 2] | 0 : 63;
      i52 = (HEAP32[i9 + -20 >> 2] | 0) == 0 | i63 ^ 1;
      i10 = (i52 ? 65535 : 1) << i56;
      i53 = 1 << i56;
      do if ((i16 | 0) != (i60 | 0)) {
       i8 = i53 + 65535 | 0;
       i9 = i10 & 65535;
       if ((i12 | 0) > (i55 | 0)) break; else i2 = 0;
       do {
        i5 = HEAP32[i62 + (i2 * 12 | 0) >> 2] | 0;
        i4 = i12;
        while (1) {
         i6 = i122 + (i5 << 7) + (i4 << 1) | 0;
         i7 = HEAPU16[i6 >> 1] | 0;
         if (i7 & i9 | 0) {
          i65 = 223;
          break L17;
         }
         if (i7 & i8 | 0) {
          i65 = 225;
          break L17;
         }
         HEAP16[i6 >> 1] = i7 | i10;
         if ((i4 | 0) < (i55 | 0)) i4 = i4 + 1 | 0; else break;
        }
        i2 = i2 + 1 | 0;
       } while (i2 >>> 0 < i15 >>> 0);
      } while (0);
      if ((i56 | 0) > 10) {
       i65 = 231;
       break L17;
      }
      if ((i59 | 0) > 0) {
       i50 = (i58 | 0) > 0;
       i51 = (i12 | 0) > 0;
       i47 = (i12 | 0) == 0;
       i48 = -1 << i56;
       i49 = (i57 | 0) > 0;
       i7 = -1;
       i9 = i57;
       i46 = 0;
       i10 = 0;
       i6 = 64;
       i5 = i16;
       i4 = i13;
       i2 = i14;
       do {
        if (i50) {
         i45 = 0;
         i12 = i7;
         i44 = i5;
         while (1) {
          if (i49) {
           if (!i9) {
            i2 = i6 >> 3;
            if ((i2 | 0) > 0) {
             i4 = i3;
             while (1) {
              i5 = i2;
              i2 = i2 + -1 | 0;
              i3 = i4 + -1 | 0;
              do if (i3 >>> 0 < i1 >>> 0) {
               i4 = i4 + -2 | 0;
               if (HEAP8[i187 + i3 >> 0] | 0) break;
               i3 = (HEAP8[i187 + i4 >> 0] | 0) == -1 ? i4 : i3;
              } while (0);
              if ((i5 | 0) <= 1) break; else i4 = i3;
             }
            }
            if (i3 >>> 0 > i1 >>> 0) {
             i65 = 241;
             break L17;
            }
            i1 = i10 + 208 | 0;
            i4 = i3 + 2 | 0;
            if (i4 >>> 0 > i189 >>> 0) {
             i65 = 244;
             break L17;
            }
            if ((HEAP8[i187 + i3 >> 0] | 0) != -1) {
             i65 = 244;
             break L17;
            }
            i2 = HEAPU8[i187 + (i3 + 1) >> 0] | 0;
            if ((i2 | 0) != (i1 | 0)) {
             i65 = 249;
             break L17;
            }
            i2 = i3 + 3 | 0;
            do if (i4 >>> 0 < i103 >>> 0) {
             i1 = HEAP8[i187 + i4 >> 0] | 0;
             if (i1 << 24 >> 24 != -1) {
              i6 = i103;
              break;
             }
             i43 = (HEAP8[i187 + i2 >> 0] | 0) == 0;
             i1 = -1;
             i6 = i43 ? i103 : i4;
             i2 = i43 ? i3 + 4 | 0 : i2;
            } else {
             i1 = 0;
             i6 = i103;
            } while (0);
            i4 = _bitshift64Shl(i1 & 255 | 0, 0, 8) | 0;
            i5 = tempRet0;
            i3 = i2 + 1 | 0;
            do if (i2 >>> 0 < i6 >>> 0) {
             i1 = HEAP8[i187 + i2 >> 0] | 0;
             if (i1 << 24 >> 24 != -1) break;
             i43 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
             i1 = -1;
             i6 = i43 ? i6 : i2;
             i3 = i43 ? i2 + 2 | 0 : i3;
            } else i1 = 0; while (0);
            i4 = _bitshift64Shl(i1 & 255 | i4 | 0, i5 | 0, 8) | 0;
            i5 = tempRet0;
            i2 = i3 + 1 | 0;
            do if (i3 >>> 0 < i6 >>> 0) {
             i1 = HEAP8[i187 + i3 >> 0] | 0;
             if (i1 << 24 >> 24 != -1) break;
             i43 = (HEAP8[i187 + i2 >> 0] | 0) == 0;
             i1 = -1;
             i6 = i43 ? i6 : i3;
             i2 = i43 ? i3 + 2 | 0 : i2;
            } else i1 = 0; while (0);
            i7 = _bitshift64Shl(i1 & 255 | i4 | 0, i5 | 0, 8) | 0;
            i8 = tempRet0;
            i3 = i2 + 1 | 0;
            do if (i2 >>> 0 < i6 >>> 0) {
             i1 = HEAP8[i187 + i2 >> 0] | 0;
             if (i1 << 24 >> 24 != -1) {
              i4 = i1;
              i1 = i6;
              i5 = i6;
              break;
             }
             i5 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
             i4 = -1;
             i1 = i5 ? i6 : i2;
             i3 = i5 ? i2 + 2 | 0 : i3;
             i5 = i5 ? i6 : i2;
            } else {
             i4 = 0;
             i1 = i6;
             i5 = i6;
            } while (0);
            i6 = _bitshift64Shl(i4 & 255 | i7 | 0, i8 | 0, 8) | 0;
            i7 = tempRet0;
            i4 = i3 + 1 | 0;
            do if (i3 >>> 0 < i5 >>> 0) {
             i2 = HEAP8[i187 + i3 >> 0] | 0;
             if (i2 << 24 >> 24 != -1) break;
             i43 = (HEAP8[i187 + i4 >> 0] | 0) == 0;
             i2 = -1;
             i1 = i43 ? i1 : i3;
             i4 = i43 ? i3 + 2 | 0 : i4;
             i5 = i43 ? i5 : i3;
            } else i2 = 0; while (0);
            i6 = _bitshift64Shl(i2 & 255 | i6 | 0, i7 | 0, 8) | 0;
            i7 = tempRet0;
            i3 = i4 + 1 | 0;
            do if (i4 >>> 0 < i5 >>> 0) {
             i2 = HEAP8[i187 + i4 >> 0] | 0;
             if (i2 << 24 >> 24 != -1) break;
             i43 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
             i2 = -1;
             i1 = i43 ? i1 : i4;
             i3 = i43 ? i4 + 2 | 0 : i3;
             i5 = i43 ? i5 : i4;
            } else i2 = 0; while (0);
            i6 = _bitshift64Shl(i2 & 255 | i6 | 0, i7 | 0, 8) | 0;
            i7 = tempRet0;
            i4 = i3 + 1 | 0;
            do if (i3 >>> 0 < i5 >>> 0) {
             i2 = HEAP8[i187 + i3 >> 0] | 0;
             if (i2 << 24 >> 24 != -1) break;
             i43 = (HEAP8[i187 + i4 >> 0] | 0) == 0;
             i2 = -1;
             i1 = i43 ? i1 : i3;
             i4 = i43 ? i3 + 2 | 0 : i4;
             i5 = i43 ? i5 : i3;
            } else i2 = 0; while (0);
            i7 = _bitshift64Shl(i2 & 255 | i6 | 0, i7 | 0, 8) | 0;
            i8 = tempRet0;
            i3 = i4 + 1 | 0;
            do if (i4 >>> 0 < i5 >>> 0) {
             i2 = HEAP8[i187 + i4 >> 0] | 0;
             if (i2 << 24 >> 24 != -1) break;
             i43 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
             i2 = -1;
             i1 = i43 ? i1 : i4;
             i3 = i43 ? i4 + 2 | 0 : i3;
            } else i2 = 0; while (0);
            i43 = i121;
            HEAP32[i43 >> 2] = 0;
            HEAP32[i43 + 4 >> 2] = 0;
            if ((i12 | 0) > 0) {
             i65 = 253;
             break L17;
            } else {
             i5 = -1;
             i9 = i57;
             i10 = i10 + 1 & 7;
             i6 = 64;
             i4 = i2 & 255 | i7;
             i2 = i8;
            }
           } else i5 = i12;
           i7 = i5;
           i9 = i9 + -1 | 0;
          } else i7 = i12;
          if ((i44 | 0) == (i60 | 0)) i5 = i60; else {
           i43 = (i44 - i60 | 0) / 12 | 0;
           i40 = HEAP32[i105 >> 2] | 0;
           i42 = HEAP32[i196 >> 2] | 0;
           i41 = HEAP32[i195 >> 2] | 0;
           i39 = 0;
           while (1) {
            i5 = HEAP32[i62 + (i39 * 12 | 0) >> 2] | 0;
            i30 = i42 + ((HEAP32[i62 + (i39 * 12 | 0) + 4 >> 2] | 0) * 758 << 2) | 0;
            i31 = i41 + ((HEAP32[i62 + (i39 * 12 | 0) + 8 >> 2] | 0) * 758 << 2) | 0;
            i32 = i61 ? HEAP32[i40 + (i5 * 40 | 0) + 8 >> 2] | 0 : 1;
            i33 = i61 ? HEAP32[i40 + (i5 * 40 | 0) + 4 >> 2] | 0 : 1;
            if ((i32 | 0) > 0) {
             i34 = (i33 | 0) > 0;
             i35 = Math_imul(i32, i46) | 0;
             i36 = Math_imul(i33, i45) | 0;
             i37 = i40 + (i5 * 40 | 0) + 16 | 0;
             i38 = i40 + (i5 * 40 | 0) + 28 | 0;
             i29 = i121 + (i5 << 1) | 0;
             i28 = 0;
             do {
              if (i34) {
               i26 = HEAP32[i38 >> 2] | 0;
               i27 = (Math_imul(HEAP32[i37 >> 2] | 0, i28 + i35 | 0) | 0) + i36 | 0;
               i25 = 0;
               do {
                i24 = i26 + (i27 + i25 << 6 << 1) | 0;
                do if (i52) {
                 if (i47) {
                  if ((i6 | 0) < 17) {
                   i15 = 56 - i6 | 0;
                   i14 = i1;
                   i13 = i3;
                   i5 = i1;
                   i12 = i6;
                   while (1) {
                    i8 = _bitshift64Shl(i4 | 0, i2 | 0, 8) | 0;
                    i2 = tempRet0;
                    i3 = i13 + 1 | 0;
                    do if (i13 >>> 0 < i5 >>> 0) {
                     i1 = HEAP8[i187 + i13 >> 0] | 0;
                     if (i1 << 24 >> 24 != -1) {
                      i4 = i1;
                      i1 = i14;
                      break;
                     }
                     i23 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
                     i4 = -1;
                     i1 = i23 ? i14 : i13;
                     i3 = i23 ? i13 + 2 | 0 : i3;
                     i5 = i23 ? i5 : i13;
                    } else {
                     i4 = 0;
                     i1 = i14;
                    } while (0);
                    i4 = i4 & 255 | i8;
                    i12 = i12 + 8 | 0;
                    if ((i12 | 0) >= 57) break; else {
                     i14 = i1;
                     i13 = i3;
                    }
                   }
                   i6 = i6 + 8 + (i15 & -8) | 0;
                  }
                  i14 = i6 + -8 | 0;
                  i8 = _bitshift64Lshr(i4 | 0, i2 | 0, i14 | 0) | 0;
                  i8 = i8 & 255;
                  i12 = i30 + (i8 << 2) | 0;
                  i5 = HEAP8[i12 >> 0] | 0;
                  i13 = (i5 & 255) + -8 | 0;
                  if ((i5 & 255) > 8) {
                   i12 = i12 + (HEAPU16[i30 + (i8 << 2) + 2 >> 1] << 2) | 0;
                   i5 = _bitshift64Lshr(i4 | 0, i2 | 0, i14 - i13 | 0) | 0;
                   i5 = i12 + ((i5 & (1 << i13) + -1) << 2) | 0;
                   i12 = i5;
                   i5 = HEAP8[i5 >> 0] | 0;
                   i6 = i14;
                  }
                  i16 = i5 & 255;
                  i5 = i6 - i16 | 0;
                  i17 = HEAP16[i12 + 2 >> 1] | 0;
                  i18 = i17 & 65535;
                  if ((i17 & 65535) > 11) {
                   i65 = 273;
                   break L17;
                  }
                  if (!(i17 << 16 >> 16)) {
                   i8 = 0;
                   i6 = i5;
                  } else {
                   if ((i5 | 0) < 17) {
                    i15 = 56 - i6 | 0;
                    i14 = i1;
                    i13 = i3;
                    i8 = i1;
                    while (1) {
                     i12 = _bitshift64Shl(i4 | 0, i2 | 0, 8) | 0;
                     i2 = tempRet0;
                     i3 = i13 + 1 | 0;
                     do if (i13 >>> 0 < i8 >>> 0) {
                      i1 = HEAP8[i187 + i13 >> 0] | 0;
                      if (i1 << 24 >> 24 != -1) {
                       i4 = i1;
                       i1 = i14;
                       break;
                      }
                      i23 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
                      i4 = -1;
                      i1 = i23 ? i14 : i13;
                      i3 = i23 ? i13 + 2 | 0 : i3;
                      i8 = i23 ? i8 : i13;
                     } else {
                      i4 = 0;
                      i1 = i14;
                     } while (0);
                     i4 = i4 & 255 | i12;
                     i5 = i5 + 8 | 0;
                     if ((i5 | 0) >= 57) break; else {
                      i14 = i1;
                      i13 = i3;
                     }
                    }
                    i5 = i6 + 8 - i16 + (i15 + i16 & -8) | 0;
                   }
                   i6 = i5 - i18 | 0;
                   i22 = _bitshift64Lshr(i4 | 0, i2 | 0, i6 | 0) | 0;
                   i23 = tempRet0;
                   i8 = _bitshift64Shl(1, 0, i17 & 65535 | 0) | 0;
                   i8 = _i64Add(i8 | 0, tempRet0 | 0, -1, 0) | 0;
                   i8 = i22 & i8;
                   i8 = ((1 << i18 + -1 | 0) > (i8 | 0) ? (-1 << i18) + 1 | 0 : 0) + i8 | 0;
                  }
                  i5 = (HEAP16[i29 >> 1] | 0) + i8 | 0;
                  i8 = i5 << i56;
                  HEAP16[i24 >> 1] = i8;
                  if ((i8 | 0) != (i8 << 16 >> 16 | 0)) {
                   i65 = 285;
                   break L17;
                  }
                  HEAP16[i29 >> 1] = i5;
                  i19 = 1;
                 } else i19 = i54;
                 if ((i19 | 0) > (i55 | 0)) break;
                 if ((i7 | 0) > 0) {
                  i7 = i7 + -1 | 0;
                  break;
                 } else i16 = i19;
                 while (1) {
                  if ((i6 | 0) < 17) {
                   i15 = 56 - i6 | 0;
                   i14 = i1;
                   i13 = i3;
                   i5 = i1;
                   i12 = i6;
                   while (1) {
                    i8 = _bitshift64Shl(i4 | 0, i2 | 0, 8) | 0;
                    i2 = tempRet0;
                    i3 = i13 + 1 | 0;
                    do if (i13 >>> 0 < i5 >>> 0) {
                     i1 = HEAP8[i187 + i13 >> 0] | 0;
                     if (i1 << 24 >> 24 != -1) {
                      i4 = i1;
                      i1 = i14;
                      break;
                     }
                     i23 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
                     i4 = -1;
                     i1 = i23 ? i14 : i13;
                     i3 = i23 ? i13 + 2 | 0 : i3;
                     i5 = i23 ? i5 : i13;
                    } else {
                     i4 = 0;
                     i1 = i14;
                    } while (0);
                    i4 = i4 & 255 | i8;
                    i12 = i12 + 8 | 0;
                    if ((i12 | 0) >= 57) break; else {
                     i14 = i1;
                     i13 = i3;
                    }
                   }
                   i6 = i6 + 8 + (i15 & -8) | 0;
                  }
                  i14 = i6 + -8 | 0;
                  i8 = _bitshift64Lshr(i4 | 0, i2 | 0, i14 | 0) | 0;
                  i8 = i8 & 255;
                  i12 = i31 + (i8 << 2) | 0;
                  i5 = HEAP8[i12 >> 0] | 0;
                  i13 = (i5 & 255) + -8 | 0;
                  if ((i5 & 255) > 8) {
                   i12 = i12 + (HEAPU16[i31 + (i8 << 2) + 2 >> 1] << 2) | 0;
                   i5 = _bitshift64Lshr(i4 | 0, i2 | 0, i14 - i13 | 0) | 0;
                   i5 = i12 + ((i5 & (1 << i13) + -1) << 2) | 0;
                   i12 = i5;
                   i5 = HEAP8[i5 >> 0] | 0;
                   i6 = i14;
                  }
                  i17 = i5 & 255;
                  i5 = i6 - i17 | 0;
                  i23 = HEAP16[i12 + 2 >> 1] | 0;
                  i8 = i23 & 65535;
                  if ((i23 & 65535) > 255) {
                   i65 = 299;
                   break L17;
                  }
                  i15 = i8 >>> 4;
                  i18 = i8 & 15;
                  if (!i18) {
                   if ((i15 | 0) != 15) {
                    i65 = 315;
                    break;
                   }
                   i8 = i16 + 15 | 0;
                   i6 = i5;
                  } else {
                   i8 = i15 + i16 | 0;
                   if ((i8 | 0) > (i55 | 0)) {
                    i65 = 302;
                    break L17;
                   }
                   if ((i18 + i56 | 0) > 11) {
                    i65 = 304;
                    break L17;
                   }
                   if ((i5 | 0) < 17) {
                    i16 = 56 - i6 | 0;
                    i15 = i1;
                    i14 = i3;
                    i12 = i1;
                    while (1) {
                     i13 = _bitshift64Shl(i4 | 0, i2 | 0, 8) | 0;
                     i2 = tempRet0;
                     i3 = i14 + 1 | 0;
                     do if (i14 >>> 0 < i12 >>> 0) {
                      i1 = HEAP8[i187 + i14 >> 0] | 0;
                      if (i1 << 24 >> 24 != -1) {
                       i4 = i1;
                       i1 = i15;
                       break;
                      }
                      i23 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
                      i4 = -1;
                      i1 = i23 ? i15 : i14;
                      i3 = i23 ? i14 + 2 | 0 : i3;
                      i12 = i23 ? i12 : i14;
                     } else {
                      i4 = 0;
                      i1 = i15;
                     } while (0);
                     i4 = i4 & 255 | i13;
                     i5 = i5 + 8 | 0;
                     if ((i5 | 0) >= 57) break; else {
                      i15 = i1;
                      i14 = i3;
                     }
                    }
                    i5 = i6 + 8 - i17 + (i16 + i17 & -8) | 0;
                   }
                   i6 = i5 - i18 | 0;
                   i21 = _bitshift64Lshr(i4 | 0, i2 | 0, i6 | 0) | 0;
                   i22 = tempRet0;
                   i23 = _bitshift64Shl(1, 0, i18 | 0) | 0;
                   i23 = _i64Add(i23 | 0, tempRet0 | 0, -1, 0) | 0;
                   i23 = i21 & i23;
                   HEAP16[i24 + (HEAP32[2648 + (i8 << 2) >> 2] << 1) >> 1] = ((1 << i18 + -1 | 0) > (i23 | 0) ? (-1 << i18) + 1 | 0 : 0) + i23 << i56;
                  }
                  if ((i8 | 0) < (i55 | 0)) i16 = i8 + 1 | 0; else break;
                 }
                 do if ((i65 | 0) == 315) {
                  i65 = 0;
                  i7 = 1 << i15;
                  if (!i15) {
                   i6 = i5;
                   break;
                  }
                  if (!i51) {
                   i65 = 317;
                   break L17;
                  }
                  if ((i5 | 0) < 17) {
                   i14 = i1;
                   i13 = i3;
                   i6 = i1;
                   i12 = i5;
                   while (1) {
                    i8 = _bitshift64Shl(i4 | 0, i2 | 0, 8) | 0;
                    i2 = tempRet0;
                    i3 = i13 + 1 | 0;
                    do if (i13 >>> 0 < i6 >>> 0) {
                     i1 = HEAP8[i187 + i13 >> 0] | 0;
                     if (i1 << 24 >> 24 != -1) {
                      i4 = i1;
                      i1 = i14;
                      break;
                     }
                     i24 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
                     i4 = -1;
                     i1 = i24 ? i14 : i13;
                     i3 = i24 ? i13 + 2 | 0 : i3;
                     i6 = i24 ? i6 : i13;
                    } else {
                     i4 = 0;
                     i1 = i14;
                    } while (0);
                    i4 = i4 & 255 | i8;
                    i12 = i12 + 8 | 0;
                    if ((i12 | 0) >= 57) break; else {
                     i14 = i1;
                     i13 = i3;
                    }
                   }
                   i5 = i5 + 8 + (56 - i5 & -8) | 0;
                  }
                  i6 = i5 - i15 | 0;
                  i23 = _bitshift64Lshr(i4 | 0, i2 | 0, i6 | 0) | 0;
                  i22 = tempRet0;
                  i24 = _bitshift64Shl(1, 0, i15 | 0) | 0;
                  i24 = _i64Add(i24 | 0, tempRet0 | 0, -1, 0) | 0;
                  i7 = (i23 & i24) + i7 | 0;
                 } while (0);
                 i7 = i7 + -1 | 0;
                } else {
                 if (i47) {
                  if ((i6 | 0) < 17) {
                   i14 = i1;
                   i13 = i3;
                   i5 = i1;
                   i12 = i6;
                   while (1) {
                    i8 = _bitshift64Shl(i4 | 0, i2 | 0, 8) | 0;
                    i2 = tempRet0;
                    i3 = i13 + 1 | 0;
                    do if (i13 >>> 0 < i5 >>> 0) {
                     i1 = HEAP8[i187 + i13 >> 0] | 0;
                     if (i1 << 24 >> 24 != -1) {
                      i4 = i1;
                      i1 = i14;
                      break;
                     }
                     i23 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
                     i4 = -1;
                     i1 = i23 ? i14 : i13;
                     i3 = i23 ? i13 + 2 | 0 : i3;
                     i5 = i23 ? i5 : i13;
                    } else {
                     i4 = 0;
                     i1 = i14;
                    } while (0);
                    i4 = i4 & 255 | i8;
                    i12 = i12 + 8 | 0;
                    if ((i12 | 0) >= 57) break; else {
                     i14 = i1;
                     i13 = i3;
                    }
                   }
                   i6 = i6 + 8 + (56 - i6 & -8) | 0;
                  }
                  i6 = i6 + -1 | 0;
                  i23 = _bitshift64Lshr(i4 | 0, i2 | 0, i6 | 0) | 0;
                  HEAP16[i24 >> 1] = (i23 & 1) << i56 | HEAPU16[i24 >> 1];
                  i23 = 1;
                 } else i23 = i54;
                 if ((i23 | 0) > (i55 | 0)) break;
                 L470 : do if ((i7 | 0) < 1) {
                  i20 = i23;
                  i5 = 0;
                  L471 : while (1) {
                   if ((i6 | 0) < 17) {
                    i16 = 56 - i6 | 0;
                    i15 = i1;
                    i14 = i3;
                    i8 = i1;
                    i13 = i6;
                    while (1) {
                     i12 = _bitshift64Shl(i4 | 0, i2 | 0, 8) | 0;
                     i2 = tempRet0;
                     i3 = i14 + 1 | 0;
                     do if (i14 >>> 0 < i8 >>> 0) {
                      i1 = HEAP8[i187 + i14 >> 0] | 0;
                      if (i1 << 24 >> 24 != -1) {
                       i4 = i1;
                       i1 = i15;
                       break;
                      }
                      i22 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
                      i4 = -1;
                      i1 = i22 ? i15 : i14;
                      i3 = i22 ? i14 + 2 | 0 : i3;
                      i8 = i22 ? i8 : i14;
                     } else {
                      i4 = 0;
                      i1 = i15;
                     } while (0);
                     i4 = i4 & 255 | i12;
                     i13 = i13 + 8 | 0;
                     if ((i13 | 0) >= 57) break; else {
                      i15 = i1;
                      i14 = i3;
                     }
                    }
                    i6 = i6 + 8 + (i16 & -8) | 0;
                   }
                   i15 = i6 + -8 | 0;
                   i12 = _bitshift64Lshr(i4 | 0, i2 | 0, i15 | 0) | 0;
                   i12 = i12 & 255;
                   i13 = i31 + (i12 << 2) | 0;
                   i8 = HEAP8[i13 >> 0] | 0;
                   i14 = (i8 & 255) + -8 | 0;
                   if ((i8 & 255) > 8) {
                    i13 = i13 + (HEAPU16[i31 + (i12 << 2) + 2 >> 1] << 2) | 0;
                    i8 = _bitshift64Lshr(i4 | 0, i2 | 0, i15 - i14 | 0) | 0;
                    i8 = i13 + ((i8 & (1 << i14) + -1) << 2) | 0;
                    i13 = i8;
                    i8 = HEAP8[i8 >> 0] | 0;
                   } else i15 = i6;
                   i16 = i8 & 255;
                   i6 = i15 - i16 | 0;
                   i8 = HEAP16[i13 + 2 >> 1] | 0;
                   i12 = i8 & 65535;
                   if ((i8 & 65535) > 255) {
                    i65 = 347;
                    break L17;
                   }
                   i17 = i12 >>> 4;
                   switch (i8 & 15) {
                   case 0:
                    {
                     if ((i17 | 0) == 15) {
                      i21 = 0;
                      i5 = 15;
                      i22 = 1;
                      i8 = i6;
                     } else {
                      i65 = 360;
                      break L471;
                     }
                     break;
                    }
                   case 1:
                    {
                     if ((i6 | 0) < 17) {
                      i14 = 56 - i15 | 0;
                      i13 = i1;
                      i12 = i3;
                      i5 = i1;
                      while (1) {
                       i8 = _bitshift64Shl(i4 | 0, i2 | 0, 8) | 0;
                       i2 = tempRet0;
                       i3 = i12 + 1 | 0;
                       do if (i12 >>> 0 < i5 >>> 0) {
                        i1 = HEAP8[i187 + i12 >> 0] | 0;
                        if (i1 << 24 >> 24 != -1) {
                         i4 = i1;
                         i1 = i13;
                         break;
                        }
                        i22 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
                        i4 = -1;
                        i1 = i22 ? i13 : i12;
                        i3 = i22 ? i12 + 2 | 0 : i3;
                        i5 = i22 ? i5 : i12;
                       } else {
                        i4 = 0;
                        i1 = i13;
                       } while (0);
                       i4 = i4 & 255 | i8;
                       i6 = i6 + 8 | 0;
                       if ((i6 | 0) >= 57) break; else {
                        i13 = i1;
                        i12 = i3;
                       }
                      }
                      i6 = i15 + 8 - i16 + (i14 + i16 & -8) | 0;
                     }
                     i8 = i6 + -1 | 0;
                     i21 = _bitshift64Shl(1, 0, i8 | 0) | 0;
                     i21 = (i21 & i4 | 0) != 0 | (tempRet0 & i2 | 0) != 0 ? i53 : i48;
                     i5 = i17;
                     i22 = 0;
                     break;
                    }
                   default:
                    {
                     i65 = 349;
                     break L17;
                    }
                   }
                   i19 = i5;
                   i6 = i8;
                   i12 = i8;
                   i15 = i4;
                   i16 = i2;
                   i13 = i4;
                   i8 = i2;
                   while (1) {
                    i18 = i24 + (HEAP32[2648 + (i20 << 2) >> 2] << 1) | 0;
                    i5 = HEAP16[i18 >> 1] | 0;
                    i17 = i5 << 16 >> 16;
                    if (!(i5 << 16 >> 16)) if ((i19 | 0) < 1) {
                     i65 = 383;
                     break;
                    } else {
                     i14 = i19 + -1 | 0;
                     i4 = i15;
                     i2 = i16;
                    } else {
                     if ((i12 | 0) < 17) {
                      i14 = i1;
                      i4 = i13;
                      i15 = i8;
                      i13 = i3;
                      i2 = i1;
                      i8 = i12;
                      while (1) {
                       i6 = _bitshift64Shl(i4 | 0, i15 | 0, 8) | 0;
                       i15 = tempRet0;
                       i3 = i13 + 1 | 0;
                       do if (i13 >>> 0 < i2 >>> 0) {
                        i1 = HEAP8[i187 + i13 >> 0] | 0;
                        if (i1 << 24 >> 24 != -1) {
                         i4 = i1;
                         i1 = i14;
                         break;
                        }
                        i16 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
                        i4 = -1;
                        i1 = i16 ? i14 : i13;
                        i3 = i16 ? i13 + 2 | 0 : i3;
                        i2 = i16 ? i2 : i13;
                       } else {
                        i4 = 0;
                        i1 = i14;
                       } while (0);
                       i4 = i4 & 255 | i6;
                       i8 = i8 + 8 | 0;
                       if ((i8 | 0) >= 57) break; else {
                        i14 = i1;
                        i13 = i3;
                       }
                      }
                      i12 = i12 + 8 + (56 - i12 & -8) | 0;
                      i13 = i4;
                      i8 = i15;
                      i2 = i15;
                     } else {
                      i4 = i15;
                      i2 = i16;
                     }
                     i12 = i12 + -1 | 0;
                     i16 = _bitshift64Shl(1, 0, i12 | 0) | 0;
                     do if ((i17 & i53 | 0) == 0 & ((i16 & i13 | 0) != 0 | (tempRet0 & i8 | 0) != 0)) if (i5 << 16 >> 16 > -1) {
                      i5 = i17 + i53 & 65535;
                      break;
                     } else {
                      i5 = i17 + i48 & 65535;
                      break;
                     } while (0);
                     HEAP16[i18 >> 1] = i5;
                     i14 = i19;
                     i6 = i12;
                    }
                    i5 = i20 + 1 | 0;
                    if ((i20 | 0) < (i55 | 0)) {
                     i19 = i14;
                     i20 = i5;
                     i15 = i4;
                     i16 = i2;
                    } else {
                     i13 = i5;
                     i5 = 1;
                     break;
                    }
                   }
                   if ((i65 | 0) == 383) {
                    i65 = 0;
                    i13 = i20;
                    i4 = i15;
                    i2 = i16;
                    i5 = (i20 | 0) > (i55 | 0);
                   }
                   if (i21 | 0) {
                    if (i5) {
                     i65 = 387;
                     break L17;
                    }
                    HEAP16[i24 + (HEAP32[2648 + (i13 << 2) >> 2] << 1) >> 1] = i21;
                   }
                   i8 = i13 + 1 | 0;
                   i5 = i22 << 24 >> 24 != 0;
                   if ((i13 | 0) < (i55 | 0)) {
                    i20 = i8;
                    i6 = i12;
                   } else break;
                  }
                  do if ((i65 | 0) == 360) {
                   i65 = 0;
                   i7 = 1 << i17;
                   if (!i17) {
                    i8 = i20;
                    break;
                   }
                   if (!i51) {
                    i65 = 362;
                    break L17;
                   }
                   if ((i6 | 0) < 17) {
                    i15 = i1;
                    i14 = i3;
                    i8 = i1;
                    i13 = i6;
                    while (1) {
                     i12 = _bitshift64Shl(i4 | 0, i2 | 0, 8) | 0;
                     i2 = tempRet0;
                     i3 = i14 + 1 | 0;
                     do if (i14 >>> 0 < i8 >>> 0) {
                      i1 = HEAP8[i187 + i14 >> 0] | 0;
                      if (i1 << 24 >> 24 != -1) {
                       i4 = i1;
                       i1 = i15;
                       break;
                      }
                      i23 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
                      i4 = -1;
                      i1 = i23 ? i15 : i14;
                      i3 = i23 ? i14 + 2 | 0 : i3;
                      i8 = i23 ? i8 : i14;
                     } else {
                      i4 = 0;
                      i1 = i15;
                     } while (0);
                     i4 = i4 & 255 | i12;
                     i13 = i13 + 8 | 0;
                     if ((i13 | 0) >= 57) break; else {
                      i15 = i1;
                      i14 = i3;
                     }
                    }
                    i6 = i6 + 8 + (56 - i6 & -8) | 0;
                   }
                   i6 = i6 - i17 | 0;
                   i12 = _bitshift64Lshr(i4 | 0, i2 | 0, i6 | 0) | 0;
                   i23 = tempRet0;
                   i8 = _bitshift64Shl(1, 0, i17 | 0) | 0;
                   i8 = _i64Add(i8 | 0, tempRet0 | 0, -1, 0) | 0;
                   if (i5) {
                    i65 = 391;
                    break L17;
                   } else {
                    i7 = (i12 & i8) + i7 | 0;
                    i8 = i20;
                    break L470;
                   }
                  } while (0);
                  if (i5) {
                   i65 = 391;
                   break L17;
                  }
                 } else i8 = i23; while (0);
                 if (!((i7 | 0) < 1 | (i8 | 0) > (i55 | 0))) while (1) {
                  i18 = i24 + (HEAP32[2648 + (i8 << 2) >> 2] << 1) | 0;
                  i5 = HEAP16[i18 >> 1] | 0;
                  i17 = i5 << 16 >> 16;
                  if (i5 << 16 >> 16) {
                   if ((i6 | 0) < 17) {
                    i16 = i1;
                    i15 = i3;
                    i12 = i1;
                    i14 = i6;
                    while (1) {
                     i13 = _bitshift64Shl(i4 | 0, i2 | 0, 8) | 0;
                     i2 = tempRet0;
                     i3 = i15 + 1 | 0;
                     do if (i15 >>> 0 < i12 >>> 0) {
                      i1 = HEAP8[i187 + i15 >> 0] | 0;
                      if (i1 << 24 >> 24 != -1) {
                       i4 = i1;
                       i1 = i16;
                       break;
                      }
                      i23 = (HEAP8[i187 + i3 >> 0] | 0) == 0;
                      i4 = -1;
                      i1 = i23 ? i16 : i15;
                      i3 = i23 ? i15 + 2 | 0 : i3;
                      i12 = i23 ? i12 : i15;
                     } else {
                      i4 = 0;
                      i1 = i16;
                     } while (0);
                     i4 = i4 & 255 | i13;
                     i14 = i14 + 8 | 0;
                     if ((i14 | 0) >= 57) break; else {
                      i16 = i1;
                      i15 = i3;
                     }
                    }
                    i6 = i6 + 8 + (56 - i6 & -8) | 0;
                   }
                   i6 = i6 + -1 | 0;
                   i23 = _bitshift64Shl(1, 0, i6 | 0) | 0;
                   do if ((i17 & i53 | 0) == 0 & ((i23 & i4 | 0) != 0 | (tempRet0 & i2 | 0) != 0)) if (i5 << 16 >> 16 > -1) {
                    i5 = i17 + i53 & 65535;
                    break;
                   } else {
                    i5 = i17 + i48 & 65535;
                    break;
                   } while (0);
                   HEAP16[i18 >> 1] = i5;
                  }
                  if ((i8 | 0) < (i55 | 0)) i8 = i8 + 1 | 0; else break;
                 }
                 i7 = i7 + -1 | 0;
                } while (0);
                i25 = i25 + 1 | 0;
               } while ((i25 | 0) < (i33 | 0));
              }
              i28 = i28 + 1 | 0;
             } while ((i28 | 0) < (i32 | 0));
            }
            i39 = i39 + 1 | 0;
            if (i39 >>> 0 >= i43 >>> 0) {
             i5 = i44;
             break;
            }
           }
          }
          i45 = i45 + 1 | 0;
          if ((i45 | 0) >= (i58 | 0)) break; else {
           i12 = i7;
           i44 = i5;
          }
         }
        }
        i46 = i46 + 1 | 0;
       } while ((i46 | 0) < (i59 | 0));
       if ((i7 | 0) > 0) {
        i65 = 413;
        break L17;
       }
       i2 = i6 >> 3;
       if ((i2 | 0) > 0) i65 = 415;
      } else {
       i2 = 8;
       i65 = 415;
      }
      if ((i65 | 0) == 415) {
       i65 = 0;
       do {
        i5 = i2;
        i2 = i2 + -1 | 0;
        i4 = i3 + -1 | 0;
        do if (i4 >>> 0 < i1 >>> 0) {
         i3 = i3 + -2 | 0;
         if (HEAP8[i187 + i4 >> 0] | 0) {
          i3 = i4;
          break;
         }
         i3 = (HEAP8[i187 + i3 >> 0] | 0) == -1 ? i3 : i4;
        } else i3 = i4; while (0);
       } while ((i5 | 0) > 1);
      }
      if (i3 >>> 0 > i1 >>> 0) {
       i65 = 421;
       break L17;
      }
      if (i3 >>> 0 > i189 >>> 0) {
       i65 = 424;
       break L17;
      }
      i10 = i63;
     } else {
      i10 = i63;
      i3 = i20;
     }
     break;
    }
   case -37:
    {
     i1 = i5 + 4 | 0;
     if (i1 >>> 0 > i189 >>> 0) {
      i65 = 468;
      break L17;
     }
     i8 = HEAPU8[i187 + i20 >> 0] << 8 | HEAPU8[i187 + (i5 + 3) >> 0];
     if ((i8 | 0) == 2) {
      i65 = 471;
      break L17;
     }
     i3 = i8 + i20 | 0;
     while (1) {
      if (i1 >>> 0 >= i3 >>> 0) break;
      i62 = HEAP32[i118 >> 2] | 0;
      i7 = i62;
      if (((i62 - (HEAP32[i119 >> 2] | 0) | 0) / 24 | 0) >>> 0 >= 4) break;
      i2 = i1 + 1 | 0;
      if (i2 >>> 0 > i189 >>> 0) {
       i65 = 475;
       break L17;
      }
      i6 = HEAPU8[i187 + i1 >> 0] | 0;
      i1 = i6 >>> 4;
      i6 = i6 & 15;
      if (i6 >>> 0 > 3) {
       i65 = 477;
       break L17;
      }
      i4 = (i1 | 0) != 0;
      i5 = i4 ? 128 : 64;
      if ((i5 + i2 | 0) >>> 0 > i189 >>> 0) {
       i65 = 479;
       break L17;
      }
      i5 = __Znwj(256) | 0;
      HEAP32[i121 >> 2] = i5;
      i65 = i5 + 256 | 0;
      HEAP32[i112 >> 2] = i65;
      _memset(i5 | 0, 0, 256) | 0;
      HEAP32[i111 >> 2] = i65;
      HEAP8[i115 >> 0] = 1;
      HEAP32[i114 >> 2] = i6;
      HEAP32[i113 >> 2] = i1;
      L594 : do if (i4) {
       i4 = 0;
       i1 = i2;
       while (1) {
        i2 = HEAPU8[i187 + i1 >> 0] << 8 | HEAPU8[i187 + (i1 + 1) >> 0];
        i1 = i1 + 2 | 0;
        if ((i2 + -1 | 0) >>> 0 > 65534) {
         i65 = 485;
         break L594;
        }
        HEAP32[i5 + (HEAP32[2648 + (i4 << 2) >> 2] << 2) >> 2] = i2;
        i4 = i4 + 1 | 0;
        if ((i4 | 0) >= 64) {
         i65 = 486;
         break;
        }
       }
      } else {
       i4 = 0;
       while (1) {
        i1 = i2 + 1 | 0;
        i2 = HEAPU8[i187 + i2 >> 0] | 0;
        if ((i2 + -1 | 0) >>> 0 > 65534) {
         i2 = 0;
         i65 = 485;
         break L594;
        }
        HEAP32[i5 + (HEAP32[2648 + (i4 << 2) >> 2] << 2) >> 2] = i2;
        i4 = i4 + 1 | 0;
        if ((i4 | 0) >= 64) {
         i65 = 486;
         break;
        } else i2 = i1;
       }
      } while (0);
      do if ((i65 | 0) == 485) {
       i65 = 0;
       HEAP32[i155 >> 2] = 13747;
       HEAP32[i155 + 4 >> 2] = i2;
       _fprintf(i192, 12402, i155) | 0;
       HEAP32[i193 >> 2] = 18;
       i2 = 1;
      } else if ((i65 | 0) == 486) {
       i65 = 0;
       HEAP8[i115 >> 0] = (i1 | 0) == (i3 | 0) & 1;
       if ((i7 | 0) == (HEAP32[i116 >> 2] | 0)) {
        __ZNSt3__26vectorIN7guetzli14JPEGQuantTableENS_9allocatorIS2_EEE21__push_back_slow_pathIRKS2_EEvOT_(i119, i121);
        i2 = 0;
        break;
       } else {
        __ZNSt3__26vectorIiNS_9allocatorIiEEEC2ERKS3_(i7, i121);
        i2 = i7 + 12 | 0;
        HEAP32[i2 >> 2] = HEAP32[i113 >> 2];
        HEAP32[i2 + 4 >> 2] = HEAP32[i113 + 4 >> 2];
        HEAP8[i2 + 8 >> 0] = HEAP8[i113 + 8 >> 0] | 0;
        HEAP32[i118 >> 2] = (HEAP32[i118 >> 2] | 0) + 24;
        i2 = 0;
        break;
       }
      } while (0);
      i4 = HEAP32[i121 >> 2] | 0;
      if (i4 | 0) {
       i5 = HEAP32[i111 >> 2] | 0;
       if ((i5 | 0) != (i4 | 0)) HEAP32[i111 >> 2] = i5 + (~((i5 + -4 - i4 | 0) >>> 2) << 2);
       __ZdlPv(i4);
      }
      if (i2) {
       i2 = 0;
       break L17;
      }
     }
     if ((i3 | 0) == (i1 | 0)) i10 = i63; else {
      i65 = 495;
      break L17;
     }
     break;
    }
   case -35:
    {
     if ((HEAP32[i104 >> 2] | 0) > 0) {
      i65 = 497;
      break L17;
     }
     i3 = i5 + 6 | 0;
     if (i3 >>> 0 > i189 >>> 0) {
      i65 = 499;
      break L17;
     }
     i1 = HEAPU8[i187 + i20 >> 0] << 8 | HEAPU8[i187 + (i5 + 3) >> 0];
     HEAP32[i104 >> 2] = HEAPU8[i187 + (i5 + 4) >> 0] << 8 | HEAPU8[i187 + (i5 + 5) >> 0];
     if ((i1 + i20 | 0) == (i3 | 0)) i10 = i63; else {
      i65 = 501;
      break L17;
     }
     break;
    }
   case -17:
   case -18:
   case -19:
   case -20:
   case -21:
   case -22:
   case -23:
   case -24:
   case -25:
   case -26:
   case -27:
   case -28:
   case -29:
   case -30:
   case -31:
   case -32:
    {
     if (i66) {
      i10 = i63;
      i3 = i20;
     } else {
      i4 = i5 + 4 | 0;
      if (i4 >>> 0 > i189 >>> 0) {
       i65 = 505;
       break L17;
      }
      i1 = HEAPU8[i187 + i20 >> 0] << 8 | HEAPU8[i187 + (i5 + 3) >> 0];
      i3 = i1 + -2 | 0;
      if (i3 >>> 0 > 65533) {
       i65 = 507;
       break L17;
      }
      if ((i1 + i20 | 0) >>> 0 > i189 >>> 0) {
       i65 = 509;
       break L17;
      }
      HEAP32[i121 >> 2] = 0;
      HEAP32[i121 + 4 >> 2] = 0;
      HEAP32[i121 + 8 >> 2] = 0;
      __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i121, i2, i1 + 1 | 0);
      i1 = HEAP32[i67 >> 2] | 0;
      if ((i1 | 0) == (HEAP32[i68 >> 2] | 0)) __ZNSt3__26vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE21__push_back_slow_pathIRKS6_EEvOT_(i69, i121); else {
       __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i1, i121);
       HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 12;
      }
      __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i121);
      i10 = i63;
      i3 = i3 + i4 | 0;
     }
     break;
    }
   case -2:
    {
     if (i66) {
      i10 = i63;
      i3 = i20;
     } else {
      i4 = i5 + 4 | 0;
      if (i4 >>> 0 > i189 >>> 0) {
       i65 = 516;
       break L17;
      }
      i2 = i187 + i20 | 0;
      i1 = HEAPU8[i2 >> 0] << 8 | HEAPU8[i187 + (i5 + 3) >> 0];
      i3 = i1 + -2 | 0;
      if (i3 >>> 0 > 65533) {
       i65 = 518;
       break L17;
      }
      if ((i1 + i20 | 0) >>> 0 > i189 >>> 0) {
       i65 = 520;
       break L17;
      };
      HEAP32[i121 >> 2] = 0;
      HEAP32[i121 + 4 >> 2] = 0;
      HEAP32[i121 + 8 >> 2] = 0;
      __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i121, i2, i1);
      i1 = HEAP32[i70 >> 2] | 0;
      if ((i1 | 0) == (HEAP32[i71 >> 2] | 0)) __ZNSt3__26vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE21__push_back_slow_pathIRKS6_EEvOT_(i72, i121); else {
       __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i1, i121);
       HEAP32[i70 >> 2] = (HEAP32[i70 >> 2] | 0) + 12;
      }
      __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i121);
      i10 = i63;
      i3 = i3 + i4 | 0;
     }
     break;
    }
   default:
    {
     i65 = 525;
     break L17;
    }
   }
   i1 = HEAP32[i85 >> 2] | 0;
   i2 = HEAP32[i86 >> 2] | 0;
   i4 = i1;
   if (i1 >>> 0 >= i2 >>> 0) {
    i1 = HEAP32[i84 >> 2] | 0;
    i5 = i4 - i1 + 1 | 0;
    if ((i5 | 0) < 0) {
     __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i84);
     i1 = HEAP32[i84 >> 2] | 0;
     i2 = HEAP32[i86 >> 2] | 0;
     i4 = HEAP32[i85 >> 2] | 0;
    }
    i8 = i1;
    i2 = i2 - i1 | 0;
    i7 = i2 << 1;
    i7 = i2 >>> 0 < 1073741823 ? (i7 >>> 0 < i5 >>> 0 ? i5 : i7) : 2147483647;
    i2 = i4 - i1 | 0;
    if (!i7) i5 = 0; else i5 = __Znwj(i7) | 0;
    i4 = i5 + i2 | 0;
    HEAP8[i4 >> 0] = i64;
    i6 = i4 + (0 - i2) | 0;
    if ((i2 | 0) > 0) _memcpy(i6 | 0, i8 | 0, i2 | 0) | 0;
    HEAP32[i84 >> 2] = i6;
    HEAP32[i85 >> 2] = i4 + 1;
    HEAP32[i86 >> 2] = i5 + i7;
    if (i1 | 0) __ZdlPv(i8);
   } else {
    HEAP8[i1 >> 0] = i64;
    HEAP32[i85 >> 2] = (HEAP32[i85 >> 2] | 0) + 1;
   }
   if (i64 << 24 >> 24 == -39 | i76 & i11) {
    i65 = 538;
    break;
   } else {
    i9 = i3;
    i63 = i10;
   }
  }
  L651 : switch (i65 | 0) {
  case 36:
   {
    if (i5 >>> 0 < i189 >>> 0) i1 = HEAPU8[i187 + i5 >> 0] | 0; else i1 = 0;
    HEAP32[i186 >> 2] = i1;
    HEAP32[i186 + 4 >> 2] = i5;
    HEAP32[i186 + 8 >> 2] = i189;
    _fprintf(i192, 9795, i186) | 0;
    HEAP32[i193 >> 2] = 4;
    i2 = 0;
    break;
   }
  case 41:
   {
    _fwrite(12331, 22, 1, i192) | 0;
    i1 = 30;
    i65 = 89;
    break;
   }
  case 43:
   {
    HEAP32[i126 >> 2] = i20;
    HEAP32[i126 + 4 >> 2] = 8;
    HEAP32[i126 + 8 >> 2] = i189;
    _fprintf(i192, 12354, i126) | 0;
    i1 = 3;
    i65 = 89;
    break;
   }
  case 45:
   {
    HEAP32[i139 >> 2] = 12418;
    HEAP32[i139 + 4 >> 2] = i1 & 255;
    _fprintf(i192, 12402, i139) | 0;
    i1 = 7;
    i65 = 89;
    break;
   }
  case 47:
   {
    HEAP32[i149 >> 2] = 12428;
    HEAP32[i149 + 4 >> 2] = i2;
    _fprintf(i192, 12402, i149) | 0;
    i1 = 9;
    i65 = 89;
    break;
   }
  case 49:
   {
    HEAP32[i159 >> 2] = 12435;
    HEAP32[i159 + 4 >> 2] = i4;
    _fprintf(i192, 12402, i159) | 0;
    i1 = 8;
    i65 = 89;
    break;
   }
  case 51:
   {
    HEAP32[i167 >> 2] = 12441;
    HEAP32[i167 + 4 >> 2] = i6;
    _fprintf(i192, 12402, i167) | 0;
    i1 = 10;
    i65 = 89;
    break;
   }
  case 53:
   {
    HEAP32[i168 >> 2] = i3;
    HEAP32[i168 + 4 >> 2] = i1;
    HEAP32[i168 + 8 >> 2] = i189;
    _fprintf(i192, 12354, i168) | 0;
    i1 = 3;
    i65 = 89;
    break;
   }
  case 68:
   {
    HEAP32[i169 >> 2] = i2;
    _fprintf(i192, 12456, i169) | 0;
    i1 = 32;
    i65 = 90;
    break;
   }
  case 70:
   {
    HEAP32[i170 >> 2] = 12481;
    HEAP32[i170 + 4 >> 2] = i2;
    _fprintf(i192, 12402, i170) | 0;
    i1 = 11;
    i65 = 90;
    break;
   }
  case 72:
   {
    HEAP32[i171 >> 2] = 12495;
    HEAP32[i171 + 4 >> 2] = 0;
    _fprintf(i192, 12402, i171) | 0;
    i1 = 11;
    i65 = 90;
    break;
   }
  case 77:
   {
    _fwrite(12509, 33, 1, i192) | 0;
    i1 = 20;
    i65 = 90;
    break;
   }
  case 79:
   {
    _fwrite(12543, 17, 1, i192) | 0;
    i1 = 41;
    i65 = 90;
    break;
   }
  case 88:
   {
    HEAP32[i172 >> 2] = i13;
    HEAP32[i172 + 4 >> 2] = i3 - i20;
    _fprintf(i192, 12561, i172) | 0;
    i1 = 6;
    i65 = 90;
    break;
   }
  case 93:
   {
    HEAP32[i173 >> 2] = i20;
    HEAP32[i173 + 4 >> 2] = 2;
    HEAP32[i173 + 8 >> 2] = i189;
    _fprintf(i192, 12354, i173) | 0;
    HEAP32[i193 >> 2] = 3;
    i2 = 0;
    break;
   }
  case 96:
   {
    _fwrite(12607, 35, 1, i192) | 0;
    HEAP32[i193 >> 2] = 37;
    i2 = 0;
    break;
   }
  case 99:
   {
    HEAP32[i174 >> 2] = i1;
    HEAP32[i174 + 4 >> 2] = 17;
    HEAP32[i174 + 8 >> 2] = i189;
    _fprintf(i192, 12354, i174) | 0;
    HEAP32[i193 >> 2] = 3;
    i2 = 0;
    break;
   }
  case 145:
   {
    HEAP32[i182 >> 2] = i19;
    HEAP32[i182 + 4 >> 2] = i1 - i20;
    _fprintf(i192, 12561, i182) | 0;
    HEAP32[i193 >> 2] = 6;
    i2 = 0;
    break;
   }
  case 148:
   {
    HEAP32[i183 >> 2] = i20;
    HEAP32[i183 + 4 >> 2] = 3;
    HEAP32[i183 + 8 >> 2] = i189;
    _fprintf(i192, 12354, i183) | 0;
    HEAP32[i193 >> 2] = 3;
    i2 = 0;
    break;
   }
  case 151:
   {
    HEAP32[i184 >> 2] = 13066;
    HEAP32[i184 + 4 >> 2] = i13;
    _fprintf(i192, 12402, i184) | 0;
    HEAP32[i193 >> 2] = 15;
    i2 = 0;
    break;
   }
  case 223:
   {
    i1 = HEAPU16[i122 + (i2 << 7) + (i4 << 1) >> 1] | 0;
    HEAP32[i136 >> 2] = i5;
    HEAP32[i136 + 4 >> 2] = i4;
    HEAP32[i136 + 8 >> 2] = i1;
    HEAP32[i136 + 12 >> 2] = i9;
    _fprintf(i192, 12771, i136) | 0;
    i1 = 26;
    i65 = 526;
    break;
   }
  case 225:
   {
    i1 = HEAPU16[i122 + (i2 << 7) + (i4 << 1) >> 1] | 0;
    HEAP32[i137 >> 2] = i5;
    HEAP32[i137 + 4 >> 2] = i4;
    HEAP32[i137 + 8 >> 2] = i1;
    HEAP32[i137 + 12 >> 2] = i9;
    _fprintf(i192, 12834, i137) | 0;
    i1 = 27;
    i65 = 526;
    break;
   }
  case 231:
   {
    HEAP32[i138 >> 2] = i56;
    _fprintf(i192, 12936, i138) | 0;
    i1 = 24;
    i65 = 526;
    break;
   }
  case 241:
   {
    _fwrite(13663, 24, 1, i192) | 0;
    i1 = 25;
    i65 = 526;
    break;
   }
  case 244:
   {
    if (i3 >>> 0 < i189 >>> 0) i1 = HEAPU8[i187 + i3 >> 0] | 0; else i1 = 0;
    HEAP32[i185 >> 2] = i1;
    HEAP32[i185 + 4 >> 2] = i3;
    HEAP32[i185 + 8 >> 2] = i189;
    _fprintf(i192, 9795, i185) | 0;
    i1 = 4;
    i65 = 526;
    break;
   }
  case 249:
   {
    HEAP32[i140 >> 2] = i1;
    HEAP32[i140 + 4 >> 2] = i2;
    _fprintf(i192, 13320, i140) | 0;
    i1 = 31;
    i65 = 526;
    break;
   }
  case 253:
   {
    _fwrite(12987, 27, 1, i192) | 0;
    i1 = 40;
    i65 = 526;
    break;
   }
  case 273:
   {
    HEAP32[i141 >> 2] = i18;
    _fprintf(i192, 13371, i141) | 0;
    i1 = 22;
    i65 = 526;
    break;
   }
  case 285:
   {
    HEAP32[i142 >> 2] = i8;
    _fprintf(i192, 13418, i142) | 0;
    i1 = 23;
    i65 = 526;
    break;
   }
  case 299:
   {
    HEAP32[i143 >> 2] = i8;
    HEAP32[i143 + 4 >> 2] = i16;
    _fprintf(i192, 13445, i143) | 0;
    i1 = 22;
    i65 = 526;
    break;
   }
  case 302:
   {
    HEAP32[i144 >> 2] = i8;
    HEAP32[i144 + 4 >> 2] = i19;
    HEAP32[i144 + 8 >> 2] = i55;
    _fprintf(i192, 13494, i144) | 0;
    i1 = 39;
    i65 = 526;
    break;
   }
  case 304:
   {
    HEAP32[i145 >> 2] = i18;
    HEAP32[i145 + 4 >> 2] = i56;
    HEAP32[i145 + 8 >> 2] = i8;
    _fprintf(i192, 13537, i145) | 0;
    i1 = 24;
    i65 = 526;
    break;
   }
  case 317:
   {
    _fwrite(13589, 36, 1, i192) | 0;
    i1 = 40;
    i65 = 526;
    break;
   }
  case 347:
   {
    HEAP32[i146 >> 2] = i12;
    HEAP32[i146 + 4 >> 2] = i20;
    _fprintf(i192, 13445, i146) | 0;
    i1 = 22;
    i65 = 526;
    break;
   }
  case 349:
   {
    HEAP32[i147 >> 2] = i12 & 15;
    HEAP32[i147 + 4 >> 2] = i20;
    _fprintf(i192, 13445, i147) | 0;
    i1 = 22;
    i65 = 526;
    break;
   }
  case 362:
   {
    _fwrite(13589, 36, 1, i192) | 0;
    i1 = 40;
    i65 = 526;
    break;
   }
  case 387:
   {
    HEAP32[i148 >> 2] = i13;
    HEAP32[i148 + 4 >> 2] = i23;
    HEAP32[i148 + 8 >> 2] = i55;
    _fprintf(i192, 13494, i148) | 0;
    i1 = 39;
    i65 = 526;
    break;
   }
  case 391:
   {
    _fwrite(13626, 36, 1, i192) | 0;
    i1 = 28;
    i65 = 526;
    break;
   }
  case 413:
   {
    _fwrite(12987, 27, 1, i192) | 0;
    i1 = 40;
    i65 = 526;
    break;
   }
  case 421:
   {
    _fwrite(13663, 24, 1, i192) | 0;
    i1 = 25;
    i65 = 526;
    break;
   }
  case 424:
   {
    HEAP32[i150 >> 2] = i3;
    HEAP32[i150 + 4 >> 2] = i189;
    _fprintf(i192, 13015, i150) | 0;
    i1 = 3;
    i65 = 526;
    break;
   }
  case 468:
   {
    HEAP32[i151 >> 2] = i20;
    HEAP32[i151 + 4 >> 2] = 2;
    HEAP32[i151 + 8 >> 2] = i189;
    _fprintf(i192, 12354, i151) | 0;
    HEAP32[i193 >> 2] = 3;
    i2 = 0;
    break;
   }
  case 471:
   {
    _fwrite(13688, 40, 1, i192) | 0;
    HEAP32[i193 >> 2] = 38;
    i2 = 0;
    break;
   }
  case 475:
   {
    HEAP32[i152 >> 2] = i1;
    HEAP32[i152 + 4 >> 2] = 1;
    HEAP32[i152 + 8 >> 2] = i189;
    _fprintf(i192, 12354, i152) | 0;
    HEAP32[i193 >> 2] = 3;
    i2 = 0;
    break;
   }
  case 477:
   {
    HEAP32[i153 >> 2] = 13729;
    HEAP32[i153 + 4 >> 2] = i6;
    _fprintf(i192, 12402, i153) | 0;
    HEAP32[i193 >> 2] = 17;
    i2 = 0;
    break;
   }
  case 479:
   {
    HEAP32[i154 >> 2] = i2;
    HEAP32[i154 + 4 >> 2] = i5;
    HEAP32[i154 + 8 >> 2] = i189;
    _fprintf(i192, 12354, i154) | 0;
    HEAP32[i193 >> 2] = 3;
    i2 = 0;
    break;
   }
  case 495:
   {
    HEAP32[i156 >> 2] = i8;
    HEAP32[i156 + 4 >> 2] = i1 - i20;
    _fprintf(i192, 12561, i156) | 0;
    HEAP32[i193 >> 2] = 6;
    i2 = 0;
    break;
   }
  case 497:
   {
    _fwrite(13757, 22, 1, i192) | 0;
    i1 = 29;
    i65 = 502;
    break;
   }
  case 499:
   {
    HEAP32[i157 >> 2] = i20;
    HEAP32[i157 + 4 >> 2] = 4;
    HEAP32[i157 + 8 >> 2] = i189;
    _fprintf(i192, 12354, i157) | 0;
    i1 = 3;
    i65 = 502;
    break;
   }
  case 501:
   {
    HEAP32[i158 >> 2] = i1;
    HEAP32[i158 + 4 >> 2] = 4;
    _fprintf(i192, 12561, i158) | 0;
    i1 = 6;
    i65 = 502;
    break;
   }
  case 505:
   {
    HEAP32[i160 >> 2] = i20;
    HEAP32[i160 + 4 >> 2] = 2;
    HEAP32[i160 + 8 >> 2] = i189;
    _fprintf(i192, 12354, i160) | 0;
    HEAP32[i193 >> 2] = 3;
    i2 = 0;
    break;
   }
  case 507:
   {
    HEAP32[i161 >> 2] = 13780;
    HEAP32[i161 + 4 >> 2] = i1;
    _fprintf(i192, 12402, i161) | 0;
    HEAP32[i193 >> 2] = 19;
    i2 = 0;
    break;
   }
  case 509:
   {
    HEAP32[i162 >> 2] = i4;
    HEAP32[i162 + 4 >> 2] = i3;
    HEAP32[i162 + 8 >> 2] = i189;
    _fprintf(i192, 12354, i162) | 0;
    HEAP32[i193 >> 2] = 3;
    i2 = 0;
    break;
   }
  case 516:
   {
    HEAP32[i163 >> 2] = i20;
    HEAP32[i163 + 4 >> 2] = 2;
    HEAP32[i163 + 8 >> 2] = i189;
    _fprintf(i192, 12354, i163) | 0;
    HEAP32[i193 >> 2] = 3;
    i2 = 0;
    break;
   }
  case 518:
   {
    HEAP32[i164 >> 2] = 13780;
    HEAP32[i164 + 4 >> 2] = i1;
    _fprintf(i192, 12402, i164) | 0;
    HEAP32[i193 >> 2] = 19;
    i2 = 0;
    break;
   }
  case 520:
   {
    HEAP32[i165 >> 2] = i4;
    HEAP32[i165 + 4 >> 2] = i3;
    HEAP32[i165 + 8 >> 2] = i189;
    _fprintf(i192, 12354, i165) | 0;
    HEAP32[i193 >> 2] = 3;
    i2 = 0;
    break;
   }
  case 525:
   {
    HEAP32[i166 >> 2] = i64 & 255;
    HEAP32[i166 + 4 >> 2] = i20;
    HEAP32[i166 + 8 >> 2] = i189;
    _fprintf(i192, 9894, i166) | 0;
    HEAP32[i193 >> 2] = 5;
    i2 = 0;
    break;
   }
  case 538:
   {
    if (!i11) {
     _fwrite(9932, 20, 1, i192) | 0;
     HEAP32[i193 >> 2] = 2;
     i2 = 0;
     break;
    }
    if (i96) {
     if (i3 >>> 0 < i189 >>> 0) __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj(i188 + 128 | 0, i187 + i3 | 0, i189 - i3 | 0) | 0;
     i4 = HEAP32[i80 >> 2] | 0;
     i3 = HEAP32[i117 >> 2] | 0;
     i8 = i3;
     L660 : do if ((i4 | 0) != (i3 | 0)) {
      i2 = HEAP32[i118 >> 2] | 0;
      i1 = HEAP32[i119 >> 2] | 0;
      i7 = i1;
      L662 : do if ((i2 | 0) == (i1 | 0)) i1 = HEAP32[i8 + 12 >> 2] | 0; else {
       i6 = (i2 - i1 | 0) / 24 | 0;
       i4 = (i4 - i3 | 0) / 40 | 0;
       i3 = 0;
       while (1) {
        i5 = i8 + (i3 * 40 | 0) + 12 | 0;
        i1 = HEAP32[i5 >> 2] | 0;
        i2 = 0;
        while (1) {
         if ((HEAP32[i7 + (i2 * 24 | 0) + 16 >> 2] | 0) == (i1 | 0)) break;
         i2 = i2 + 1 | 0;
         if (i2 >>> 0 >= i6 >>> 0) break L662;
        }
        HEAP32[i5 >> 2] = i2;
        i3 = i3 + 1 | 0;
        if (i3 >>> 0 >= i4 >>> 0) break L660;
       }
      } while (0);
      HEAP32[i194 >> 2] = i1;
      _fprintf(i192, 13791, i194) | 0;
      HEAP32[i193 >> 2] = 36;
      i2 = 0;
      break L651;
     } while (0);
     i1 = (HEAP32[i190 >> 2] | 0) - (HEAP32[i191 >> 2] | 0) >> 5;
     if (!i1) {
      _fwrite(9953, 38, 1, i192) | 0;
      HEAP32[i193 >> 2] = 35;
      i2 = 0;
      break;
     }
     if (i1 >>> 0 > 511) {
      _fwrite(9992, 25, 1, i192) | 0;
      HEAP32[i193 >> 2] = 35;
      i2 = 0;
     } else i2 = 1;
    } else i2 = 1;
    break;
   }
  }
  if ((i65 | 0) == 89) {
   HEAP32[i193 >> 2] = i1;
   i2 = 0;
  } else if ((i65 | 0) == 90) {
   HEAP32[i193 >> 2] = i1;
   __ZdlPv(i12);
   i2 = 0;
  } else if ((i65 | 0) == 502) {
   HEAP32[i193 >> 2] = i1;
   i2 = 0;
  } else if ((i65 | 0) == 526) {
   HEAP32[i193 >> 2] = i1;
   i2 = 0;
  }
  i1 = HEAP32[i195 >> 2] | 0;
  if (i1 | 0) __ZdlPv(i1);
  i1 = HEAP32[i196 >> 2] | 0;
  if (i1 | 0) __ZdlPv(i1);
  i196 = i2;
  STACKTOP = i197;
  return i196 | 0;
 } while (0);
 if ((i65 | 0) == 5) i2 = HEAPU8[i187 >> 0] | 0;
 HEAP32[i3 >> 2] = i2;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i189;
 _fprintf(i1, 9795, i3) | 0;
 HEAP32[i188 + 148 >> 2] = 4;
 i196 = 0;
 STACKTOP = i197;
 return i196 | 0;
}

function __ZN7guetzli12_GLOBAL__N_19Processor22SelectFrequencyMaskingERKNS_8JPEGDataEPNS_11OutputImageEhdb(i85, i86, i93, i1, d96, i97) {
 i85 = i85 | 0;
 i86 = i86 | 0;
 i93 = i93 | 0;
 i1 = i1 | 0;
 d96 = +d96;
 i97 = i97 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, f10 = f0, d11 = 0.0, d12 = 0.0, i13 = 0, f14 = f0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, d45 = 0.0, f46 = f0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, d55 = 0.0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, d70 = 0.0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i94 = 0, i95 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0;
 i110 = STACKTOP;
 STACKTOP = STACKTOP + 3056 | 0;
 i99 = i110 + 1112 | 0;
 i101 = i110 + 1048 | 0;
 i100 = i110 + 1024 | 0;
 i98 = i110;
 i106 = i110 + 2672 | 0;
 i105 = i110 + 2288 | 0;
 i109 = i110 + 2276 | 0;
 i107 = i110 + 1880 | 0;
 i104 = i110 + 1496 | 0;
 i103 = i110 + 1480 | 0;
 i102 = i110 + 1468 | 0;
 i87 = i110 + 1456 | 0;
 i88 = i110 + 1444 | 0;
 i89 = i110 + 1432 | 0;
 i90 = i110 + 1280 | 0;
 i91 = i110 + 1264 | 0;
 i92 = i110 + 1252 | 0;
 i94 = i110 + 1240 | 0;
 i95 = i110 + 2264 | 0;
 i47 = HEAP32[i93 >> 2] | 0;
 i44 = i93 + 4 | 0;
 i48 = HEAP32[i44 >> 2] | 0;
 i81 = i1 & 255;
 i1 = (Math_clz32(i81 | 0) | 0) ^ 31;
 i82 = i86 + 80 | 0;
 if (i1 >>> 0 >= (((HEAP32[i86 + 84 >> 2] | 0) - (HEAP32[i82 >> 2] | 0) | 0) / 40 | 0) >>> 0) {
  STACKTOP = i110;
  return;
 }
 i83 = i93 + 8 | 0;
 i76 = HEAP32[i83 >> 2] | 0;
 i84 = HEAP32[i76 + (i1 * 308 | 0) + 8 >> 2] | 0;
 i76 = HEAP32[i76 + (i1 * 308 | 0) + 12 >> 2] | 0;
 i77 = i84 << 3;
 i77 = (i47 + -1 + i77 | 0) / (i77 | 0) | 0;
 i78 = i76 << 3;
 i78 = (i48 + -1 + i78 | 0) / (i78 | 0) | 0;
 i79 = Math_imul(i78, i77) | 0;
 HEAP32[i109 >> 2] = 0;
 i108 = i109 + 4 | 0;
 HEAP32[i108 >> 2] = 0;
 HEAP32[i109 + 8 >> 2] = 0;
 do if (i79 | 0) if (i79 >>> 0 > 357913941) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i109);
  i110 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i110);
  ___cxa_throw(i110 | 0, 1784, 8);
 } else {
  i74 = i79 * 12 | 0;
  i73 = __Znwj(i74) | 0;
  HEAP32[i109 >> 2] = i73;
  i80 = i73 + (i79 * 12 | 0) | 0;
  HEAP32[i109 + 8 >> 2] = i80;
  _memset(i73 | 0, 0, i74 | 0) | 0;
  HEAP32[i108 >> 2] = i80;
  break;
 } while (0);
 i80 = (i78 | 0) > 0;
 L10 : do if (i80) {
  i24 = (i77 | 0) > 0;
  i25 = i98 + 4 | 0;
  i26 = i98 + 8 | 0;
  i27 = i85 + 12 | 0;
  i28 = i99 + 4 | 0;
  i29 = i98 + 8 | 0;
  i30 = (i81 & 1 | 0) == 0;
  i31 = (i81 & 2 | 0) == 0;
  i32 = (i81 & 4 | 0) == 0;
  i33 = i107 + 256 | 0;
  i34 = i107 + 128 | 0;
  i35 = i85 + 16 | 0;
  i36 = i85 + 8 | 0;
  i37 = i106 + 256 | 0;
  i38 = i106 + 128 | 0;
  i39 = i105 + 256 | 0;
  i40 = i105 + 128 | 0;
  i43 = (i84 | 0) < 1 | (i76 | 0) < 1;
  i41 = i104 + 256 | 0;
  i42 = i104 + 128 | 0;
  i23 = 0;
  i1 = 0;
  L12 : while (1) {
   if (i24) {
    i22 = Math_imul(i23, i76) | 0;
    i21 = 0;
    do {
     _memset(i107 | 0, 0, 384) | 0;
     _memset(i104 | 0, 0, 384) | 0;
     if (!i30) {
      i3 = HEAP32[i83 >> 2] | 0;
      if ((HEAP32[i3 + 8 >> 2] | 0) != (i84 | 0)) {
       i75 = 130;
       break L12;
      }
      if ((HEAP32[i3 + 12 >> 2] | 0) != (i76 | 0)) {
       i75 = 132;
       break L12;
      }
      i2 = HEAP32[i3 + 16 >> 2] | 0;
      if ((i2 | 0) <= (i21 | 0)) {
       i75 = 134;
       break L12;
      }
      if ((HEAP32[i3 + 20 >> 2] | 0) <= (i23 | 0)) {
       i75 = 136;
       break L12;
      }
      i7 = (Math_imul(i2, i23) | 0) + i21 << 6;
      i18 = i107;
      i7 = (HEAP32[i3 + 28 >> 2] | 0) + (i7 << 1) | 0;
      i17 = i18 + 128 | 0;
      do {
       HEAP16[i18 >> 1] = HEAP16[i7 >> 1] | 0;
       i18 = i18 + 2 | 0;
       i7 = i7 + 2 | 0;
      } while ((i18 | 0) < (i17 | 0));
      i17 = HEAP32[i82 >> 2] | 0;
      i7 = (Math_imul(HEAP32[i17 + 16 >> 2] | 0, i23) | 0) + i21 << 6;
      i18 = i104;
      i7 = (HEAP32[i17 + 28 >> 2] | 0) + (i7 << 1) | 0;
      i17 = i18 + 128 | 0;
      do {
       HEAP16[i18 >> 1] = HEAP16[i7 >> 1] | 0;
       i18 = i18 + 2 | 0;
       i7 = i7 + 2 | 0;
      } while ((i18 | 0) < (i17 | 0));
     }
     if (!i31) {
      i3 = HEAP32[i83 >> 2] | 0;
      if ((HEAP32[i3 + 316 >> 2] | 0) != (i84 | 0)) {
       i75 = 130;
       break L12;
      }
      if ((HEAP32[i3 + 320 >> 2] | 0) != (i76 | 0)) {
       i75 = 132;
       break L12;
      }
      i2 = HEAP32[i3 + 324 >> 2] | 0;
      if ((i2 | 0) <= (i21 | 0)) {
       i75 = 134;
       break L12;
      }
      if ((HEAP32[i3 + 328 >> 2] | 0) <= (i23 | 0)) {
       i75 = 136;
       break L12;
      }
      i7 = (Math_imul(i2, i23) | 0) + i21 << 6;
      i18 = i34;
      i7 = (HEAP32[i3 + 336 >> 2] | 0) + (i7 << 1) | 0;
      i17 = i18 + 128 | 0;
      do {
       HEAP16[i18 >> 1] = HEAP16[i7 >> 1] | 0;
       i18 = i18 + 2 | 0;
       i7 = i7 + 2 | 0;
      } while ((i18 | 0) < (i17 | 0));
      i17 = HEAP32[i82 >> 2] | 0;
      i7 = (Math_imul(HEAP32[i17 + 56 >> 2] | 0, i23) | 0) + i21 << 6;
      i18 = i42;
      i7 = (HEAP32[i17 + 68 >> 2] | 0) + (i7 << 1) | 0;
      i17 = i18 + 128 | 0;
      do {
       HEAP16[i18 >> 1] = HEAP16[i7 >> 1] | 0;
       i18 = i18 + 2 | 0;
       i7 = i7 + 2 | 0;
      } while ((i18 | 0) < (i17 | 0));
     }
     if (!i32) {
      i3 = HEAP32[i83 >> 2] | 0;
      if ((HEAP32[i3 + 624 >> 2] | 0) != (i84 | 0)) {
       i75 = 130;
       break L12;
      }
      if ((HEAP32[i3 + 628 >> 2] | 0) != (i76 | 0)) {
       i75 = 132;
       break L12;
      }
      i2 = HEAP32[i3 + 632 >> 2] | 0;
      if ((i2 | 0) <= (i21 | 0)) {
       i75 = 134;
       break L12;
      }
      if ((HEAP32[i3 + 636 >> 2] | 0) <= (i23 | 0)) {
       i75 = 136;
       break L12;
      }
      i7 = (Math_imul(i2, i23) | 0) + i21 << 6;
      i18 = i33;
      i7 = (HEAP32[i3 + 644 >> 2] | 0) + (i7 << 1) | 0;
      i17 = i18 + 128 | 0;
      do {
       HEAP16[i18 >> 1] = HEAP16[i7 >> 1] | 0;
       i18 = i18 + 2 | 0;
       i7 = i7 + 2 | 0;
      } while ((i18 | 0) < (i17 | 0));
      i17 = HEAP32[i82 >> 2] | 0;
      i7 = (Math_imul(HEAP32[i17 + 96 >> 2] | 0, i23) | 0) + i21 << 6;
      i18 = i41;
      i7 = (HEAP32[i17 + 108 >> 2] | 0) + (i7 << 1) | 0;
      i17 = i18 + 128 | 0;
      do {
       HEAP16[i18 >> 1] = HEAP16[i7 >> 1] | 0;
       i18 = i18 + 2 | 0;
       i7 = i7 + 2 | 0;
      } while ((i18 | 0) < (i17 | 0));
     }
     i19 = HEAP32[i109 >> 2] | 0;
     i20 = i19 + (i1 * 12 | 0) | 0;
     HEAP32[i98 >> 2] = 0;
     HEAP32[i25 >> 2] = 0;
     HEAP32[i26 >> 2] = 0;
     i4 = 0;
     do {
      if (1 << i4 & i81 | 0) {
       i6 = i4 << 6;
       i7 = 1384 + (i4 << 3) | 0;
       i5 = 1;
       do {
        i3 = i5 + i6 | 0;
        if (HEAP16[i107 + (i3 << 1) >> 1] | 0) {
         i74 = HEAP16[i104 + (i3 << 1) >> 1] | 0;
         i2 = i74 << 16 >> 16;
         i2 = i74 << 16 >> 16 > -1 ? i2 : 0 - i2 | 0;
         if (!(HEAP8[i27 >> 0] | 0)) f10 = Math_fround(+HEAPF64[i7 >> 3] * (+(i2 | 0) - +(HEAP32[2968 + (i5 << 2) >> 2] | 0) * .015625) / +(HEAPU8[14656 + i5 >> 0] | 0)); else {
          f10 = Math_fround(i2 | 0);
          f10 = Math_fround(f10 * Math_fround(HEAPF32[7360 + (i3 << 2) >> 2]));
          f10 = Math_fround(f10 + Math_fround(HEAPF32[43340 + (i3 << 2) >> 2]));
         }
         HEAP32[i99 >> 2] = i3;
         HEAPF32[i28 >> 2] = f10;
         i2 = HEAP32[i25 >> 2] | 0;
         if (i2 >>> 0 < (HEAP32[i29 >> 2] | 0) >>> 0) {
          i72 = i99;
          i73 = HEAP32[i72 + 4 >> 2] | 0;
          i74 = i2;
          HEAP32[i74 >> 2] = HEAP32[i72 >> 2];
          HEAP32[i74 + 4 >> 2] = i73;
          HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 8;
         } else __ZNSt3__26vectorINS_4pairIifEENS_9allocatorIS2_EEE21__push_back_slow_pathIS2_EEvOT_(i98, i99);
        }
        i5 = i5 + 1 | 0;
       } while ((i5 | 0) < 64);
      }
      i4 = i4 + 1 | 0;
     } while ((i4 | 0) < 3);
     __ZNSt3__26__sortIRZN7guetzli12_GLOBAL__N_19Processor24ComputeBlockZeroingOrderEPKsS5_iiiihPNS1_11OutputImageEPNS_6vectorINS2_9CoeffDataENS_9allocatorIS9_EEEEE3__0PNS_4pairIifEEEEvT0_SJ_T_(HEAP32[i98 >> 2] | 0, HEAP32[i25 >> 2] | 0);
     _memcpy(i106 | 0, i107 | 0, 384) | 0;
     i3 = HEAP32[i98 >> 2] | 0;
     i2 = HEAP32[i25 >> 2] | 0;
     i16 = i19 + (i1 * 12 | 0) + 4 | 0;
     if ((i3 | 0) == (i2 | 0)) {
      i13 = i16;
      i15 = i20;
     } else {
      i9 = i19 + (i1 * 12 | 0) + 8 | 0;
      i13 = Math_imul(i21, i84) | 0;
      while (1) {
       i74 = HEAP32[i36 >> 2] | 0;
       i73 = i2 - i3 >> 3;
       if (!((i73 >>> 0 < i74 >>> 0 ? i73 : i74) | 0)) {
        i4 = 0;
        f10 = Math_fround(999999984.0e8);
       } else {
        i8 = 0;
        i4 = 0;
        f14 = Math_fround(999999984.0e8);
        do {
         _memcpy(i105 | 0, i106 | 0, 384) | 0;
         HEAP16[i105 + (HEAP32[i3 + (i8 << 3) >> 2] << 1) >> 1] = 0;
         if (!i30) {
          i5 = HEAP32[i83 >> 2] | 0;
          i2 = HEAP32[i5 + 16 >> 2] | 0;
          if ((i2 | 0) <= (i21 | 0)) {
           i75 = 44;
           break L12;
          }
          if ((HEAP32[i5 + 20 >> 2] | 0) <= (i23 | 0)) {
           i75 = 46;
           break L12;
          }
          i2 = (Math_imul(i2, i23) | 0) + i21 << 6;
          i3 = i5 + 28 | 0;
          i18 = (HEAP32[i3 >> 2] | 0) + (i2 << 1) | 0;
          i7 = i105;
          i17 = i18 + 128 | 0;
          do {
           HEAP16[i18 >> 1] = HEAP16[i7 >> 1] | 0;
           i18 = i18 + 2 | 0;
           i7 = i7 + 2 | 0;
          } while ((i18 | 0) < (i17 | 0));
          __ZN7guetzli16ComputeBlockIDCTEPKsPh((HEAP32[i3 >> 2] | 0) + (i2 << 1) | 0, i99);
          __ZN7guetzli20OutputImageComponent20UpdatePixelsForBlockEiiPKh(i5, i21, i23, i99);
         }
         if (!i31) {
          i3 = HEAP32[i83 >> 2] | 0;
          i6 = i3 + 308 | 0;
          i2 = HEAP32[i3 + 324 >> 2] | 0;
          if ((i2 | 0) <= (i21 | 0)) {
           i75 = 44;
           break L12;
          }
          if ((HEAP32[i3 + 328 >> 2] | 0) <= (i23 | 0)) {
           i75 = 46;
           break L12;
          }
          i5 = (Math_imul(i2, i23) | 0) + i21 << 6;
          i2 = i3 + 336 | 0;
          i18 = (HEAP32[i2 >> 2] | 0) + (i5 << 1) | 0;
          i7 = i40;
          i17 = i18 + 128 | 0;
          do {
           HEAP16[i18 >> 1] = HEAP16[i7 >> 1] | 0;
           i18 = i18 + 2 | 0;
           i7 = i7 + 2 | 0;
          } while ((i18 | 0) < (i17 | 0));
          __ZN7guetzli16ComputeBlockIDCTEPKsPh((HEAP32[i2 >> 2] | 0) + (i5 << 1) | 0, i99);
          __ZN7guetzli20OutputImageComponent20UpdatePixelsForBlockEiiPKh(i6, i21, i23, i99);
         }
         if (!i32) {
          i3 = HEAP32[i83 >> 2] | 0;
          i6 = i3 + 616 | 0;
          i2 = HEAP32[i3 + 632 >> 2] | 0;
          if ((i2 | 0) <= (i21 | 0)) {
           i75 = 44;
           break L12;
          }
          if ((HEAP32[i3 + 636 >> 2] | 0) <= (i23 | 0)) {
           i75 = 46;
           break L12;
          }
          i5 = (Math_imul(i2, i23) | 0) + i21 << 6;
          i2 = i3 + 644 | 0;
          i18 = (HEAP32[i2 >> 2] | 0) + (i5 << 1) | 0;
          i7 = i39;
          i17 = i18 + 128 | 0;
          do {
           HEAP16[i18 >> 1] = HEAP16[i7 >> 1] | 0;
           i18 = i18 + 2 | 0;
           i7 = i7 + 2 | 0;
          } while ((i18 | 0) < (i17 | 0));
          __ZN7guetzli16ComputeBlockIDCTEPKsPh((HEAP32[i2 >> 2] | 0) + (i5 << 1) | 0, i99);
          __ZN7guetzli20OutputImageComponent20UpdatePixelsForBlockEiiPKh(i6, i21, i23, i99);
         }
         if (i43) f10 = Math_fround(0.0); else {
          i5 = 0;
          f10 = Math_fround(0.0);
          do {
           i6 = i5 + i22 | 0;
           i7 = i6 << 3;
           i3 = 0;
           do {
            i2 = i3 + i13 | 0;
            do if ((i2 << 3 | 0) < (HEAP32[i93 >> 2] | 0)) {
             if ((i7 | 0) >= (HEAP32[i44 >> 2] | 0)) break;
             i74 = HEAP32[i35 >> 2] | 0;
             f46 = Math_fround(+FUNCTION_TABLE_diiii[HEAP32[(HEAP32[i74 >> 2] | 0) + 12 >> 2] & 1](i74, i93, i2, i6));
             f10 = f10 < f46 ? f46 : f10;
            } while (0);
            i3 = i3 + 1 | 0;
           } while ((i3 | 0) < (i84 | 0));
           i5 = i5 + 1 | 0;
          } while ((i5 | 0) < (i76 | 0));
         }
         i74 = f10 < f14;
         f14 = i74 ? f10 : f14;
         i4 = i74 ? i8 : i4;
         i8 = i8 + 1 | 0;
         i74 = HEAP32[i36 >> 2] | 0;
         i2 = HEAP32[i25 >> 2] | 0;
         i3 = HEAP32[i98 >> 2] | 0;
         i73 = i2 - i3 >> 3;
        } while (i8 >>> 0 < (i73 >>> 0 < i74 >>> 0 ? i73 : i74) >>> 0);
        f10 = f14;
       }
       i8 = HEAP32[i3 + (i4 << 3) >> 2] | 0;
       HEAP16[i106 + (i8 << 1) >> 1] = 0;
       i3 = i3 + (i4 << 3) | 0;
       i6 = i3 + 8 | 0;
       if ((i6 | 0) != (i2 | 0)) {
        i7 = i2 + -8 | 0;
        i4 = i6;
        i5 = i3;
        while (1) {
         HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
         HEAP32[i5 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
         i4 = i4 + 8 | 0;
         if ((i4 | 0) == (i2 | 0)) break; else i5 = i5 + 8 | 0;
        }
        i3 = i3 + (((i7 - i6 | 0) >>> 3) + 1 << 3) | 0;
       }
       if ((i2 | 0) != (i3 | 0)) HEAP32[i25 >> 2] = i2 + (~((i2 + -8 - i3 | 0) >>> 3) << 3);
       i2 = HEAP32[i16 >> 2] | 0;
       i3 = HEAP32[i9 >> 2] | 0;
       i4 = i2;
       do if (i2 >>> 0 < i3 >>> 0) {
        HEAP32[i2 >> 2] = i8;
        HEAPF32[i2 + 4 >> 2] = f10;
        HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 8;
       } else {
        i2 = HEAP32[i20 >> 2] | 0;
        i5 = (i4 - i2 >> 3) + 1 | 0;
        if (i5 >>> 0 > 536870911) {
         __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i20);
         i2 = HEAP32[i20 >> 2] | 0;
         i3 = HEAP32[i9 >> 2] | 0;
         i4 = HEAP32[i16 >> 2] | 0;
        }
        i3 = i3 - i2 | 0;
        i7 = i3 >> 2;
        i7 = i3 >> 3 >>> 0 < 268435455 ? (i7 >>> 0 < i5 >>> 0 ? i5 : i7) : 536870911;
        i4 = i4 - i2 | 0;
        i3 = i4 >> 3;
        if (!i7) i6 = 0; else {
         if (i7 >>> 0 > 536870911) {
          i75 = 57;
          break L12;
         }
         i6 = __Znwj(i7 << 3) | 0;
        }
        i5 = i6 + (i3 << 3) | 0;
        HEAP32[i5 >> 2] = i8;
        HEAPF32[i6 + (i3 << 3) + 4 >> 2] = f10;
        i3 = i5 + (0 - i3 << 3) | 0;
        if ((i4 | 0) > 0) _memcpy(i3 | 0, i2 | 0, i4 | 0) | 0;
        HEAP32[i20 >> 2] = i3;
        HEAP32[i16 >> 2] = i5 + 8;
        HEAP32[i9 >> 2] = i6 + (i7 << 3);
        if (!i2) break;
        __ZdlPv(i2);
       } while (0);
       if (!i30) {
        i4 = HEAP32[i83 >> 2] | 0;
        i2 = HEAP32[i4 + 16 >> 2] | 0;
        if ((i2 | 0) <= (i21 | 0)) {
         i75 = 64;
         break L12;
        }
        if ((HEAP32[i4 + 20 >> 2] | 0) <= (i23 | 0)) {
         i75 = 66;
         break L12;
        }
        i2 = (Math_imul(i2, i23) | 0) + i21 << 6;
        i3 = i4 + 28 | 0;
        i18 = (HEAP32[i3 >> 2] | 0) + (i2 << 1) | 0;
        i7 = i106;
        i17 = i18 + 128 | 0;
        do {
         HEAP16[i18 >> 1] = HEAP16[i7 >> 1] | 0;
         i18 = i18 + 2 | 0;
         i7 = i7 + 2 | 0;
        } while ((i18 | 0) < (i17 | 0));
        __ZN7guetzli16ComputeBlockIDCTEPKsPh((HEAP32[i3 >> 2] | 0) + (i2 << 1) | 0, i99);
        __ZN7guetzli20OutputImageComponent20UpdatePixelsForBlockEiiPKh(i4, i21, i23, i99);
       }
       if (!i31) {
        i3 = HEAP32[i83 >> 2] | 0;
        i5 = i3 + 308 | 0;
        i2 = HEAP32[i3 + 324 >> 2] | 0;
        if ((i2 | 0) <= (i21 | 0)) {
         i75 = 64;
         break L12;
        }
        if ((HEAP32[i3 + 328 >> 2] | 0) <= (i23 | 0)) {
         i75 = 66;
         break L12;
        }
        i4 = (Math_imul(i2, i23) | 0) + i21 << 6;
        i2 = i3 + 336 | 0;
        i18 = (HEAP32[i2 >> 2] | 0) + (i4 << 1) | 0;
        i7 = i38;
        i17 = i18 + 128 | 0;
        do {
         HEAP16[i18 >> 1] = HEAP16[i7 >> 1] | 0;
         i18 = i18 + 2 | 0;
         i7 = i7 + 2 | 0;
        } while ((i18 | 0) < (i17 | 0));
        __ZN7guetzli16ComputeBlockIDCTEPKsPh((HEAP32[i2 >> 2] | 0) + (i4 << 1) | 0, i99);
        __ZN7guetzli20OutputImageComponent20UpdatePixelsForBlockEiiPKh(i5, i21, i23, i99);
       }
       if (!i32) {
        i3 = HEAP32[i83 >> 2] | 0;
        i5 = i3 + 616 | 0;
        i2 = HEAP32[i3 + 632 >> 2] | 0;
        if ((i2 | 0) <= (i21 | 0)) {
         i75 = 64;
         break L12;
        }
        if ((HEAP32[i3 + 636 >> 2] | 0) <= (i23 | 0)) {
         i75 = 66;
         break L12;
        }
        i4 = (Math_imul(i2, i23) | 0) + i21 << 6;
        i2 = i3 + 644 | 0;
        i18 = (HEAP32[i2 >> 2] | 0) + (i4 << 1) | 0;
        i7 = i37;
        i17 = i18 + 128 | 0;
        do {
         HEAP16[i18 >> 1] = HEAP16[i7 >> 1] | 0;
         i18 = i18 + 2 | 0;
         i7 = i7 + 2 | 0;
        } while ((i18 | 0) < (i17 | 0));
        __ZN7guetzli16ComputeBlockIDCTEPKsPh((HEAP32[i2 >> 2] | 0) + (i4 << 1) | 0, i99);
        __ZN7guetzli20OutputImageComponent20UpdatePixelsForBlockEiiPKh(i5, i21, i23, i99);
       }
       i3 = HEAP32[i98 >> 2] | 0;
       i2 = HEAP32[i25 >> 2] | 0;
       if ((i3 | 0) == (i2 | 0)) {
        i13 = i16;
        i15 = i20;
        break;
       }
      }
     }
     i4 = HEAP32[i13 >> 2] | 0;
     i5 = HEAP32[i15 >> 2] | 0;
     i3 = i4 - i5 | 0;
     i2 = i5;
     if ((i3 | 0) > 0) {
      i3 = (i3 >>> 3) + -1 | 0;
      f10 = Math_fround(1.0e10);
      do {
       i74 = i2 + (i3 << 3) + 4 | 0;
       f46 = Math_fround(HEAPF32[i74 >> 2]);
       f10 = f46 < f10 ? f46 : f10;
       HEAPF32[i74 >> 2] = f10;
       i3 = i3 + -1 | 0;
      } while ((i3 | 0) > -1);
     }
     L139 : do if ((i4 | 0) != (i5 | 0)) {
      i3 = 0;
      while (1) {
       f46 = Math_fround(HEAPF32[i2 + (i3 << 3) + 4 >> 2]);
       i74 = HEAP32[i35 >> 2] | 0;
       if (!(f46 <= Math_fround(FUNCTION_TABLE_fi[HEAP32[(HEAP32[i74 >> 2] | 0) + 32 >> 2] & 3](i74)))) {
        i75 = 74;
        break;
       }
       i3 = i3 + 1 | 0;
       i2 = HEAP32[i13 >> 2] | 0;
       i4 = HEAP32[i15 >> 2] | 0;
       if (i3 >>> 0 < i2 - i4 >> 3 >>> 0) i2 = i4; else {
        i7 = i3;
        break;
       }
      }
      if ((i75 | 0) == 74) {
       i75 = 0;
       i7 = i3;
       i4 = HEAP32[i15 >> 2] | 0;
       i2 = HEAP32[i13 >> 2] | 0;
      }
      i3 = i2 - i4 >> 3;
      i5 = i4;
      i6 = i2;
      if (i7 >>> 0 <= i3 >>> 0) {
       if (i7 >>> 0 >= i3 >>> 0) break;
       i2 = i5 + (i7 << 3) | 0;
       if ((i6 | 0) == (i2 | 0)) break;
       HEAP32[i16 >> 2] = i6 + (~((i6 + -8 - i2 | 0) >>> 3) << 3);
       break;
      }
      i3 = i7 - i3 | 0;
      i9 = i19 + (i1 * 12 | 0) + 8 | 0;
      i5 = HEAP32[i9 >> 2] | 0;
      if (i5 - i2 >> 3 >>> 0 >= i3 >>> 0) while (1) {
       i74 = i2;
       HEAP32[i74 >> 2] = 0;
       HEAP32[i74 + 4 >> 2] = 0;
       i2 = (HEAP32[i16 >> 2] | 0) + 8 | 0;
       HEAP32[i16 >> 2] = i2;
       i3 = i3 + -1 | 0;
       if (!i3) break L139;
      }
      if (i7 >>> 0 > 536870911) {
       __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i20);
       i4 = HEAP32[i15 >> 2] | 0;
       i5 = HEAP32[i9 >> 2] | 0;
       i2 = HEAP32[i13 >> 2] | 0;
      }
      i74 = i5 - i4 | 0;
      i8 = i74 >> 2;
      i8 = i74 >> 3 >>> 0 < 268435455 ? (i8 >>> 0 < i7 >>> 0 ? i7 : i8) : 536870911;
      i2 = i2 - i4 >> 3;
      if (!i8) i7 = 0; else {
       if (i8 >>> 0 > 536870911) {
        i75 = 84;
        break L12;
       }
       i7 = __Znwj(i8 << 3) | 0;
      }
      i6 = i7 + (i2 << 3) | 0;
      i2 = i6;
      i5 = i6;
      do {
       i74 = i2;
       HEAP32[i74 >> 2] = 0;
       HEAP32[i74 + 4 >> 2] = 0;
       i2 = i5 + 8 | 0;
       i5 = i2;
       i3 = i3 + -1 | 0;
      } while ((i3 | 0) != 0);
      i3 = HEAP32[i20 >> 2] | 0;
      i4 = (HEAP32[i13 >> 2] | 0) - i3 | 0;
      i2 = i6 + (0 - (i4 >> 3) << 3) | 0;
      if ((i4 | 0) > 0) _memcpy(i2 | 0, i3 | 0, i4 | 0) | 0;
      HEAP32[i15 >> 2] = i2;
      HEAP32[i13 >> 2] = i5;
      HEAP32[i9 >> 2] = i7 + (i8 << 3);
      if (!i3) break;
      __ZdlPv(i3);
     } while (0);
     if (!i30) {
      i4 = HEAP32[i83 >> 2] | 0;
      i2 = HEAP32[i4 + 16 >> 2] | 0;
      if ((i2 | 0) <= (i21 | 0)) {
       i75 = 100;
       break L12;
      }
      if ((HEAP32[i4 + 20 >> 2] | 0) <= (i23 | 0)) {
       i75 = 102;
       break L12;
      }
      i2 = (Math_imul(i2, i23) | 0) + i21 << 6;
      i3 = i4 + 28 | 0;
      i18 = (HEAP32[i3 >> 2] | 0) + (i2 << 1) | 0;
      i7 = i107;
      i17 = i18 + 128 | 0;
      do {
       HEAP16[i18 >> 1] = HEAP16[i7 >> 1] | 0;
       i18 = i18 + 2 | 0;
       i7 = i7 + 2 | 0;
      } while ((i18 | 0) < (i17 | 0));
      __ZN7guetzli16ComputeBlockIDCTEPKsPh((HEAP32[i3 >> 2] | 0) + (i2 << 1) | 0, i99);
      __ZN7guetzli20OutputImageComponent20UpdatePixelsForBlockEiiPKh(i4, i21, i23, i99);
     }
     if (!i31) {
      i3 = HEAP32[i83 >> 2] | 0;
      i5 = i3 + 308 | 0;
      i2 = HEAP32[i3 + 324 >> 2] | 0;
      if ((i2 | 0) <= (i21 | 0)) {
       i75 = 100;
       break L12;
      }
      if ((HEAP32[i3 + 328 >> 2] | 0) <= (i23 | 0)) {
       i75 = 102;
       break L12;
      }
      i4 = (Math_imul(i2, i23) | 0) + i21 << 6;
      i2 = i3 + 336 | 0;
      i18 = (HEAP32[i2 >> 2] | 0) + (i4 << 1) | 0;
      i7 = i34;
      i17 = i18 + 128 | 0;
      do {
       HEAP16[i18 >> 1] = HEAP16[i7 >> 1] | 0;
       i18 = i18 + 2 | 0;
       i7 = i7 + 2 | 0;
      } while ((i18 | 0) < (i17 | 0));
      __ZN7guetzli16ComputeBlockIDCTEPKsPh((HEAP32[i2 >> 2] | 0) + (i4 << 1) | 0, i99);
      __ZN7guetzli20OutputImageComponent20UpdatePixelsForBlockEiiPKh(i5, i21, i23, i99);
     }
     if (!i32) {
      i3 = HEAP32[i83 >> 2] | 0;
      i5 = i3 + 616 | 0;
      i2 = HEAP32[i3 + 632 >> 2] | 0;
      if ((i2 | 0) <= (i21 | 0)) {
       i75 = 100;
       break L12;
      }
      if ((HEAP32[i3 + 636 >> 2] | 0) <= (i23 | 0)) {
       i75 = 102;
       break L12;
      }
      i4 = (Math_imul(i2, i23) | 0) + i21 << 6;
      i2 = i3 + 644 | 0;
      i18 = (HEAP32[i2 >> 2] | 0) + (i4 << 1) | 0;
      i7 = i33;
      i17 = i18 + 128 | 0;
      do {
       HEAP16[i18 >> 1] = HEAP16[i7 >> 1] | 0;
       i18 = i18 + 2 | 0;
       i7 = i7 + 2 | 0;
      } while ((i18 | 0) < (i17 | 0));
      __ZN7guetzli16ComputeBlockIDCTEPKsPh((HEAP32[i2 >> 2] | 0) + (i4 << 1) | 0, i99);
      __ZN7guetzli20OutputImageComponent20UpdatePixelsForBlockEiiPKh(i5, i21, i23, i99);
     }
     i3 = HEAP32[i98 >> 2] | 0;
     if (i3 | 0) {
      i2 = HEAP32[i25 >> 2] | 0;
      if ((i2 | 0) != (i3 | 0)) HEAP32[i25 >> 2] = i2 + (~((i2 + -8 - i3 | 0) >>> 3) << 3);
      __ZdlPv(i3);
     }
     i21 = i21 + 1 | 0;
     i1 = i1 + 1 | 0;
    } while ((i21 | 0) < (i77 | 0));
   }
   i23 = i23 + 1 | 0;
   if ((i23 | 0) >= (i78 | 0)) break L10;
  }
  switch (i75 | 0) {
  case 44:
   {
    ___assert_fail(8920, 8947, 124, 9118);
    break;
   }
  case 46:
   {
    ___assert_fail(8988, 8947, 125, 9118);
    break;
   }
  case 57:
   {
    i110 = ___cxa_allocate_exception(4) | 0;
    __ZNSt9bad_allocC2Ev(i110);
    ___cxa_throw(i110 | 0, 1784, 8);
   }
  case 64:
   {
    ___assert_fail(8920, 8947, 124, 9118);
    break;
   }
  case 66:
   {
    ___assert_fail(8988, 8947, 125, 9118);
    break;
   }
  case 84:
   {
    i110 = ___cxa_allocate_exception(4) | 0;
    __ZNSt9bad_allocC2Ev(i110);
    ___cxa_throw(i110 | 0, 1784, 8);
   }
  case 100:
   {
    ___assert_fail(8920, 8947, 124, 9118);
    break;
   }
  case 102:
   {
    ___assert_fail(8988, 8947, 125, 9118);
    break;
   }
  case 130:
   {
    ___assert_fail(14400, 14200, 548, 14441);
    break;
   }
  case 132:
   {
    ___assert_fail(14464, 14200, 549, 14441);
    break;
   }
  case 134:
   {
    ___assert_fail(8920, 8947, 60, 8974);
    break;
   }
  case 136:
   {
    ___assert_fail(8988, 8947, 61, 8974);
    break;
   }
  }
 } while (0);
 __ZN7guetzli8JPEGDataC2ERKS0_(i107, i86);
 __ZNK7guetzli11OutputImage14SaveToJpegDataEPNS_8JPEGDataE(i93, i107);
 i74 = i85 + 4 | 0;
 if (!(HEAP8[i74 >> 0] | 0)) {
  i1 = HEAP32[i107 + 36 >> 2] | 0;
  i2 = HEAP32[i107 + 32 >> 2] | 0;
  i5 = i2;
  if ((i1 | 0) == (i2 | 0)) i1 = 2; else {
   i4 = (i1 - i2 | 0) / 12 | 0;
   i3 = 0;
   i1 = 2;
   do {
    i2 = HEAP8[i5 + (i3 * 12 | 0) + 11 >> 0] | 0;
    if (i2 << 24 >> 24 < 0) i2 = HEAP32[i5 + (i3 * 12 | 0) + 4 >> 2] | 0; else i2 = i2 & 255;
    i1 = i1 + 1 + i2 | 0;
    i3 = i3 + 1 | 0;
   } while (i3 >>> 0 < i4 >>> 0);
  }
  i2 = HEAP32[i107 + 48 >> 2] | 0;
  i3 = HEAP32[i107 + 44 >> 2] | 0;
  i5 = i3;
  if ((i2 | 0) != (i3 | 0)) {
   i4 = (i2 - i3 | 0) / 12 | 0;
   i3 = 0;
   do {
    i2 = HEAP8[i5 + (i3 * 12 | 0) + 11 >> 0] | 0;
    if (i2 << 24 >> 24 < 0) i2 = HEAP32[i5 + (i3 * 12 | 0) + 4 >> 2] | 0; else i2 = i2 & 255;
    i1 = i1 + 2 + i2 | 0;
    i3 = i3 + 1 | 0;
   } while (i3 >>> 0 < i4 >>> 0);
  }
 } else i1 = 20;
 i1 = i1 + 4 | 0;
 i2 = HEAP32[i107 + 60 >> 2] | 0;
 i3 = HEAP32[i107 + 56 >> 2] | 0;
 i4 = i3;
 if ((i2 | 0) != (i3 | 0)) {
  i3 = (i2 - i3 | 0) / 24 | 0;
  i2 = 0;
  do {
   i1 = (HEAP32[i4 + (i2 * 24 | 0) + 12 >> 2] | 0 ? 129 : 65) + i1 | 0;
   i2 = i2 + 1 | 0;
  } while (i2 >>> 0 < i3 >>> 0);
 }
 i6 = i107 + 80 | 0;
 i7 = i107 + 84 | 0;
 i5 = ((HEAP32[i7 >> 2] | 0) - (HEAP32[i6 >> 2] | 0) | 0) / 40 | 0;
 i8 = HEAP8[i107 + 128 + 11 >> 0] | 0;
 i8 = i1 + 24 + (i8 << 24 >> 24 < 0 ? HEAP32[i107 + 132 >> 2] | 0 : i8 & 255) + (i5 * 5 | 0) | 0;
 __ZNSt3__26vectorIN7guetzli13JpegHistogramENS_9allocatorIS2_EEEC2Ej(i99, i5);
 __ZN7guetzli17BuildDCHistogramsERKNS_8JPEGDataEPNS_13JpegHistogramE(i107, HEAP32[i99 >> 2] | 0);
 i5 = i99 + 4 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - (HEAP32[i99 >> 2] | 0) | 0;
 i1 = (i2 | 0) / 1028 | 0;
 HEAP32[i98 >> 2] = i1;
 __ZNSt3__26vectorIiNS_9allocatorIiEEEC2Ej(i106, i1);
 i1 = i1 * 257 | 0;
 HEAP32[i105 >> 2] = 0;
 i3 = i105 + 4 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i105 + 8 >> 2] = 0;
 if (!i2) i1 = 0; else {
  if ((i2 | 0) < 0) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i105);
  i2 = __Znwj(i1) | 0;
  HEAP32[i3 >> 2] = i2;
  HEAP32[i105 >> 2] = i2;
  HEAP32[i105 + 8 >> 2] = i2 + i1;
  do {
   HEAP8[i2 >> 0] = 0;
   i2 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
   HEAP32[i3 >> 2] = i2;
   i1 = i1 + -1 | 0;
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i105 >> 2] | 0;
 }
 i4 = __ZN7guetzli17ClusterHistogramsEPNS_13JpegHistogramEPjPiPh(HEAP32[i99 >> 2] | 0, i98, HEAP32[i106 >> 2] | 0, i1) | 0;
 i1 = HEAP32[i105 >> 2] | 0;
 if (i1 | 0) {
  if ((HEAP32[i3 >> 2] | 0) != (i1 | 0)) HEAP32[i3 >> 2] = i1;
  __ZdlPv(i1);
 }
 i1 = HEAP32[i106 >> 2] | 0;
 if (i1 | 0) {
  i2 = i106 + 4 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != (i1 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i1 | 0) >>> 2) << 2);
  __ZdlPv(i1);
 }
 i1 = HEAP32[i99 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) HEAP32[i5 >> 2] = i2 + (~(((i2 + -1028 - i1 | 0) >>> 0) / 1028 | 0) * 1028 | 0);
  __ZdlPv(i1);
 }
 __ZNSt3__26vectorIN7guetzli13JpegHistogramENS_9allocatorIS2_EEEC2Ej(i106, ((HEAP32[i7 >> 2] | 0) - (HEAP32[i6 >> 2] | 0) | 0) / 40 | 0);
 __ZN7guetzli17BuildACHistogramsERKNS_8JPEGDataEPNS_13JpegHistogramE(i107, HEAP32[i106 >> 2] | 0);
 HEAP32[i105 >> 2] = 0;
 i72 = i105 + 4 | 0;
 HEAP32[i72 >> 2] = 0;
 HEAP32[i105 + 8 >> 2] = 0;
 i13 = __ZN7guetzli12_GLOBAL__N_119ComputeEntropyCodesERKNSt3__26vectorINS_13JpegHistogramENS1_9allocatorIS3_EEEEPNS2_IhNS4_IhEEEE(i106, i105) | 0;
 i71 = i8 + i4 | 0;
 i8 = HEAP32[i105 >> 2] | 0;
 i73 = i106 + 4 | 0;
 i1 = HEAP32[i73 >> 2] | 0;
 i2 = HEAP32[i106 >> 2] | 0;
 i9 = i2;
 if ((i1 | 0) == (i2 | 0)) i1 = 0; else {
  i5 = (i1 - i2 | 0) / 1028 | 0;
  i2 = 0;
  i4 = 0;
  do {
   i6 = i8 + (i4 * 257 | 0) | 0;
   i3 = 0;
   i1 = 0;
   i7 = 1;
   while (1) {
    i3 = (Math_imul((HEAPU8[i6 + i1 >> 0] | 0) + (i1 & 15) | 0, (HEAP32[i9 + (i4 * 1028 | 0) + (i1 << 2) >> 2] | 0) >>> 1) | 0) + i3 | 0;
    i1 = i7 + 1 | 0;
    if ((i1 | 0) == 257) break; else {
     i69 = i7;
     i7 = i1;
     i1 = i69;
    }
   }
   i2 = i3 + i2 + (((i3 * 3 | 0) + 512 | 0) >>> 10) | 0;
   i4 = i4 + 1 | 0;
  } while (i4 >>> 0 < i5 >>> 0);
  i1 = (i2 + 7 | 0) >>> 3;
 }
 i3 = i13 + i71 + i1 | 0;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i104, i79);
 __ZNSt3__26vectorIiNS_9allocatorIiEEEC2Ej(i103, i79);
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i102, Math_imul(i48, i47) | 0);
 i41 = i85 + 20 | 0;
 i42 = i87 + 4 | 0;
 i43 = i87 + 8 | 0;
 i44 = i88 + 4 | 0;
 i47 = i88 + 8 | 0;
 i39 = i88 + 8 | 0;
 i48 = i99 + 4 | 0;
 i49 = i99 + 8 | 0;
 i50 = i85 + 16 | 0;
 i51 = (i77 | 0) > 0;
 i52 = i99 + 4 | 0;
 i53 = i87 + 8 | 0;
 i54 = i99 + 4 | 0;
 d55 = +(i3 | 0);
 i56 = i89 + 4 | 0;
 i57 = i89 + 8 | 0;
 i58 = i89 + 4 | 0;
 i59 = (i79 | 0) > 0;
 i60 = i85 + 24 | 0;
 i61 = i91 + 11 | 0;
 i62 = i91 + 4 | 0;
 i63 = i91;
 i40 = i98 + 4 | 0;
 i64 = i94 + 11 | 0;
 i65 = i98 + 1023 | 0;
 i66 = i99 + 4 | 0;
 i67 = i95 + 11 | 0;
 i68 = i95 + 4 | 0;
 i69 = i58;
 d70 = +(Math_imul(i76, i84) | 0) * .2;
 i1 = i13;
 i2 = 1;
 i38 = 7352;
 L287 : while (1) {
  i32 = HEAP32[i38 >> 2] | 0;
  i37 = (i32 | 0) == -1 & i97;
  i33 = (i32 | 0) > 0;
  d45 = i33 ? .01 : .0005;
  i34 = i33 ? 14505 : 14529;
  i35 = i33 ? 23 : 25;
  i36 = i33 ? 14648 : 14651;
  f46 = Math_fround(i32 | 0);
  i31 = i33 ? 0 : i32;
  do {
   if (i37) {
    i4 = HEAP32[i41 >> 2] | 0;
    i5 = HEAP8[i4 + 11 >> 0] | 0;
    if (i5 << 24 >> 24 < 0) i4 = HEAP32[i4 + 4 >> 2] | 0; else i4 = i5 & 255;
    if (+(i3 | 0) > +(i4 >>> 0) * 1.01) break;
   }
   HEAP32[i87 >> 2] = 0;
   HEAP32[i42 >> 2] = 0;
   HEAP32[i43 >> 2] = 0;
   HEAP32[i88 >> 2] = 0;
   HEAP32[i44 >> 2] = 0;
   HEAP32[i47 >> 2] = 0;
   i18 = 1;
   while (1) {
    __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i99, i79);
    i4 = HEAP32[i88 >> 2] | 0;
    if (i4 | 0) {
     i5 = HEAP32[i44 >> 2] | 0;
     if ((i5 | 0) != (i4 | 0)) HEAP32[i44 >> 2] = i5 + (~((i5 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
     HEAP32[i39 >> 2] = 0;
     HEAP32[i44 >> 2] = 0;
     HEAP32[i88 >> 2] = 0;
    }
    HEAP32[i88 >> 2] = HEAP32[i99 >> 2];
    HEAP32[i44 >> 2] = HEAP32[i48 >> 2];
    HEAP32[i39 >> 2] = HEAP32[i49 >> 2];
    i5 = HEAP32[i50 >> 2] | 0;
    FUNCTION_TABLE_viiidiiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 36 >> 2] & 1](i5, i32, i18, d96, i84, i76, i102, i88);
    i5 = HEAP32[i87 >> 2] | 0;
    i4 = HEAP32[i42 >> 2] | 0;
    if ((i4 | 0) == (i5 | 0)) i4 = i5; else {
     i4 = i4 + (~((i4 + -8 - i5 | 0) >>> 3) << 3) | 0;
     HEAP32[i42 >> 2] = i4;
    }
    if (i80) {
     i17 = 0;
     i5 = 0;
     i4 = 0;
     do {
      L312 : do if (i51) {
       if (i33) {
        i16 = 0;
        while (1) {
         i15 = HEAP32[(HEAP32[i103 >> 2] | 0) + (i5 << 2) >> 2] | 0;
         i6 = HEAP32[i109 >> 2] | 0;
         f14 = Math_fround(HEAPF32[(HEAP32[i104 >> 2] | 0) + (i5 << 2) >> 2]);
         f10 = Math_fround(HEAPF32[(HEAP32[i88 >> 2] | 0) + (i5 << 2) >> 2]);
         if (!(f10 == Math_fround(0.0))) {
          i13 = i6 + (i5 * 12 | 0) | 0;
          i9 = i6 + (i5 * 12 | 0) + 4 | 0;
          i8 = HEAP32[i13 >> 2] | 0;
          i6 = (HEAP32[i9 >> 2] | 0) - i8 >> 3;
          L319 : do if (i15 >>> 0 < i6 >>> 0) {
           i7 = i15;
           i6 = i8;
           while (1) {
            f10 = Math_fround(Math_fround(Math_fround(HEAPF32[i6 + (i7 << 3) + 4 >> 2]) - f14) / f10);
            HEAP32[i99 >> 2] = i5;
            HEAPF32[i52 >> 2] = f10;
            i6 = HEAP32[i42 >> 2] | 0;
            if (i6 >>> 0 < (HEAP32[i53 >> 2] | 0) >>> 0) {
             i28 = i99;
             i29 = HEAP32[i28 + 4 >> 2] | 0;
             i30 = i6;
             HEAP32[i30 >> 2] = HEAP32[i28 >> 2];
             HEAP32[i30 + 4 >> 2] = i29;
             HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 8;
            } else __ZNSt3__26vectorINS_4pairIifEENS_9allocatorIS2_EEE21__push_back_slow_pathIS2_EEvOT_(i87, i99);
            i7 = i7 + 1 | 0;
            i8 = HEAP32[i13 >> 2] | 0;
            i6 = (HEAP32[i9 >> 2] | 0) - i8 >> 3;
            if (i7 >>> 0 >= i6 >>> 0) break L319;
            i6 = i8;
            f10 = Math_fround(HEAPF32[(HEAP32[i88 >> 2] | 0) + (i5 << 2) >> 2]);
           }
          } while (0);
          i4 = (i15 >>> 0 < i6 >>> 0 & 1) + i4 | 0;
         }
         i16 = i16 + 1 | 0;
         i5 = i5 + 1 | 0;
         if ((i16 | 0) >= (i77 | 0)) break L312;
        }
       } else i15 = 0;
       do {
        i7 = HEAP32[(HEAP32[i103 >> 2] | 0) + (i5 << 2) >> 2] | 0;
        i6 = HEAP32[i109 >> 2] | 0;
        f14 = Math_fround(HEAPF32[(HEAP32[i104 >> 2] | 0) + (i5 << 2) >> 2]);
        f10 = Math_fround(HEAPF32[(HEAP32[i88 >> 2] | 0) + (i5 << 2) >> 2]);
        if (!(f10 == Math_fround(0.0))) {
         i13 = (i7 | 0) > 0;
         L333 : do if (i13) {
          i9 = i6 + (i5 * 12 | 0) | 0;
          while (1) {
           i8 = i7 + -1 | 0;
           f10 = Math_fround(Math_fround(f14 - Math_fround(HEAPF32[(HEAP32[i9 >> 2] | 0) + (i8 << 3) + 4 >> 2])) / f10);
           HEAP32[i99 >> 2] = i5;
           HEAPF32[i54 >> 2] = f10;
           i6 = HEAP32[i42 >> 2] | 0;
           if (i6 >>> 0 < (HEAP32[i53 >> 2] | 0) >>> 0) {
            i28 = i99;
            i29 = HEAP32[i28 + 4 >> 2] | 0;
            i30 = i6;
            HEAP32[i30 >> 2] = HEAP32[i28 >> 2];
            HEAP32[i30 + 4 >> 2] = i29;
            HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 8;
           } else __ZNSt3__26vectorINS_4pairIifEENS_9allocatorIS2_EEE21__push_back_slow_pathIS2_EEvOT_(i87, i99);
           if ((i7 | 0) <= 1) break L333;
           i7 = i8;
           f10 = Math_fround(HEAPF32[(HEAP32[i88 >> 2] | 0) + (i5 << 2) >> 2]);
          }
         } while (0);
         i4 = (i13 & 1) + i4 | 0;
        }
        i15 = i15 + 1 | 0;
        i5 = i5 + 1 | 0;
       } while ((i15 | 0) < (i77 | 0));
      } while (0);
      i17 = i17 + 1 | 0;
     } while ((i17 | 0) < (i78 | 0));
     i30 = i4;
     i5 = HEAP32[i87 >> 2] | 0;
     i4 = HEAP32[i42 >> 2] | 0;
    } else i30 = 0;
    i18 = i18 + 1 | 0;
    if ((i5 | 0) != (i4 | 0)) {
     i75 = 249;
     break;
    }
    if ((i18 | 0) >= 5) {
     i6 = 0;
     break;
    }
   }
   if ((i75 | 0) == 249) {
    i75 = 0;
    __ZNSt3__26__sortIRZN7guetzli12_GLOBAL__N_19Processor22SelectFrequencyMaskingERKNS1_8JPEGDataEPNS1_11OutputImageEhdbE3__1PNS_4pairIifEEEEvT0_SE_T_(i5, i4);
    if (i33) {
     i29 = HEAP32[i50 >> 2] | 0;
     i29 = FUNCTION_TABLE_iid[HEAP32[(HEAP32[i29 >> 2] | 0) + 20 >> 2] & 1](i29, 1.0) | 0;
     d11 = i29 ? .05 : d45;
     d12 = 2.0;
    } else {
     d11 = .0005;
     d12 = d70;
    }
    i29 = ~~(d55 * d11) >>> 0;
    i9 = ~~Math_fround(Math_fround(i30 | 0) * Math_fround(d12));
    if (i2) {
     i4 = HEAP32[i50 >> 2] | 0;
     f10 = Math_fround(Math_fround(FUNCTION_TABLE_fi[HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] & 3](i4)) * Math_fround(.75));
     i4 = HEAP32[i87 >> 2] | 0;
     i2 = HEAP32[i42 >> 2] | 0;
     i5 = i2 - i4 >> 3;
     i6 = i4;
     L355 : while (1) {
      i7 = i6;
      while (1) {
       if (!i5) break L355;
       i8 = (i5 | 0) / 2 | 0;
       if (Math_fround(HEAPF32[i7 + (i8 << 3) + 4 >> 2]) < f10) break; else i5 = i8;
      }
      i5 = i5 + -1 - i8 | 0;
      i6 = i7 + (i8 << 3) + 8 | 0;
     }
     i28 = i6 - i4 >> 3;
     i9 = (i9 | 0) < (i28 | 0) ? i28 : i9;
    } else {
     i4 = HEAP32[i87 >> 2] | 0;
     i2 = HEAP32[i42 >> 2] | 0;
    }
    HEAP32[i56 >> 2] = 0;
    HEAP32[i57 >> 2] = 0;
    HEAP32[i89 >> 2] = i58;
    L364 : do if ((i2 | 0) == (i4 | 0)) {
     i17 = 0;
     f10 = Math_fround(0.0);
    } else {
     i28 = 0;
     while (1) {
      i27 = HEAP32[i4 + (i28 << 3) >> 2] | 0;
      i25 = (i27 | 0) % (i77 | 0) | 0;
      i26 = (i27 | 0) / (i77 | 0) | 0;
      i16 = HEAP32[(HEAP32[(HEAP32[i109 >> 2] | 0) + (i27 * 12 | 0) >> 2] | 0) + ((HEAP32[(HEAP32[i103 >> 2] | 0) + (i27 << 2) >> 2] | 0) + i31 << 3) >> 2] | 0;
      i19 = (i16 | 0) / 64 | 0;
      i16 = (i16 | 0) % 64 | 0;
      i20 = HEAP32[i83 >> 2] | 0;
      i2 = HEAP32[i82 >> 2] | 0;
      if (i33) i15 = 0; else {
       i22 = ((Math_imul(HEAP32[i2 + (i19 * 40 | 0) + 16 >> 2] | 0, i26) | 0) + i25 << 6) + i16 | 0;
       i15 = HEAP32[i20 + (i19 * 308 | 0) + 52 + (i16 << 2) >> 2] | 0;
       i22 = HEAP16[(HEAP32[i2 + (i19 * 40 | 0) + 28 >> 2] | 0) + (i22 << 1) >> 1] | 0;
       i23 = (i22 | 0) % (i15 | 0) | 0;
       i24 = (Math_imul(i23, -2) | 0) > (i15 | 0);
       i15 = i22 - i23 + ((i23 << 1 | 0) > (i15 | 0) ? i15 : i24 ? 0 - i15 | 0 : 0) << 16 >> 16;
      }
      i18 = i98;
      i17 = i18 + 128 | 0;
      do {
       HEAP16[i18 >> 1] = 0;
       i18 = i18 + 2 | 0;
      } while ((i18 | 0) < (i17 | 0));
      i21 = i20 + (i19 * 308 | 0) + 16 | 0;
      i2 = HEAP32[i21 >> 2] | 0;
      if ((i2 | 0) <= (i25 | 0)) {
       i75 = 263;
       break L287;
      }
      i24 = i20 + (i19 * 308 | 0) + 20 | 0;
      if ((HEAP32[i24 >> 2] | 0) <= (i26 | 0)) {
       i75 = 265;
       break L287;
      }
      i7 = (Math_imul(i2, i26) | 0) + i25 << 6;
      i22 = i20 + (i19 * 308 | 0) + 28 | 0;
      i23 = HEAP32[i22 >> 2] | 0;
      i18 = i98;
      i7 = i23 + (i7 << 1) | 0;
      i17 = i18 + 128 | 0;
      do {
       HEAP16[i18 >> 1] = HEAP16[i7 >> 1] | 0;
       i18 = i18 + 2 | 0;
       i7 = i7 + 2 | 0;
      } while ((i18 | 0) < (i17 | 0));
      i17 = HEAP32[i106 >> 2] | 0;
      i18 = i17 + (i19 * 1028 | 0) + 960 | 0;
      i8 = 1;
      i2 = 0;
      do {
       i6 = HEAP32[2648 + (i8 << 2) >> 2] | 0;
       i13 = HEAP16[i98 + (i6 << 1) >> 1] | 0;
       i7 = i13 << 16 >> 16;
       if (!(i13 << 16 >> 16)) i2 = i2 + 1 | 0; else {
        i4 = i2 + -16 | 0;
        i5 = i4 >>> 4;
        if ((i2 | 0) > 15) {
         HEAP32[i18 >> 2] = -2 - (i5 << 1) + (HEAP32[i18 >> 2] | 0);
         i2 = i4 - (i5 << 4) | 0;
        }
        i13 = (i7 | 0) / (HEAP32[i20 + (i19 * 308 | 0) + 52 + (i6 << 2) >> 2] | 0) | 0;
        i2 = i17 + (i19 * 1028 | 0) + (((Math_clz32(((i13 | 0) > -1 ? i13 : 0 - i13 | 0) | 0) | 0) ^ 31) + (i2 << 4 | 1) << 2) | 0;
        HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + -2;
        i2 = 0;
       }
       i8 = i8 + 1 | 0;
      } while ((i8 | 0) != 64);
      i13 = i17 + (i19 * 1028 | 0) | 0;
      if ((i2 | 0) > 0) HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + -2;
      HEAP16[i98 + (i16 << 1) >> 1] = i15;
      i8 = 1;
      i2 = 0;
      do {
       i6 = HEAP32[2648 + (i8 << 2) >> 2] | 0;
       i16 = HEAP16[i98 + (i6 << 1) >> 1] | 0;
       i7 = i16 << 16 >> 16;
       if (!(i16 << 16 >> 16)) i2 = i2 + 1 | 0; else {
        i4 = i2 + -16 | 0;
        i5 = i4 >>> 4;
        if ((i2 | 0) > 15) {
         HEAP32[i18 >> 2] = (i5 << 1) + 2 + (HEAP32[i18 >> 2] | 0);
         i2 = i4 - (i5 << 4) | 0;
        }
        i16 = (i7 | 0) / (HEAP32[i20 + (i19 * 308 | 0) + 52 + (i6 << 2) >> 2] | 0) | 0;
        i2 = i17 + (i19 * 1028 | 0) + (((Math_clz32(((i16 | 0) > -1 ? i16 : 0 - i16 | 0) | 0) | 0) ^ 31) + (i2 << 4 | 1) << 2) | 0;
        HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
        i2 = 0;
       }
       i8 = i8 + 1 | 0;
      } while ((i8 | 0) != 64);
      if ((i2 | 0) > 0) HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
      i4 = i20 + (i19 * 308 | 0) | 0;
      i2 = HEAP32[i21 >> 2] | 0;
      if ((i2 | 0) <= (i25 | 0)) {
       i75 = 285;
       break L287;
      }
      if ((HEAP32[i24 >> 2] | 0) <= (i26 | 0)) {
       i75 = 287;
       break L287;
      }
      i2 = (Math_imul(i2, i26) | 0) + i25 << 6;
      i18 = i23 + (i2 << 1) | 0;
      i7 = i98;
      i17 = i18 + 128 | 0;
      do {
       HEAP16[i18 >> 1] = HEAP16[i7 >> 1] | 0;
       i18 = i18 + 2 | 0;
       i7 = i7 + 2 | 0;
      } while ((i18 | 0) < (i17 | 0));
      __ZN7guetzli16ComputeBlockIDCTEPKsPh((HEAP32[i22 >> 2] | 0) + (i2 << 1) | 0, i99);
      __ZN7guetzli20OutputImageComponent20UpdatePixelsForBlockEiiPKh(i4, i25, i26, i99);
      i2 = (HEAP32[i103 >> 2] | 0) + (i27 << 2) | 0;
      HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + i32;
      i2 = HEAP32[i58 >> 2] | 0;
      do if (i2) {
       while (1) {
        i4 = HEAP32[i2 + 16 >> 2] | 0;
        if ((i27 | 0) < (i4 | 0)) {
         i4 = HEAP32[i2 >> 2] | 0;
         if (!i4) {
          i75 = 291;
          break;
         } else i2 = i4;
        } else {
         if ((i4 | 0) >= (i27 | 0)) {
          i75 = 296;
          break;
         }
         i5 = i2 + 4 | 0;
         i4 = HEAP32[i5 >> 2] | 0;
         if (!i4) {
          i75 = 295;
          break;
         } else i2 = i4;
        }
       }
       if ((i75 | 0) == 291) {
        i75 = 0;
        HEAP32[i99 >> 2] = i2;
        i4 = i2;
        i5 = i2;
        break;
       } else if ((i75 | 0) == 295) {
        i75 = 0;
        HEAP32[i99 >> 2] = i2;
        i4 = i2;
        break;
       } else if ((i75 | 0) == 296) {
        i75 = 0;
        HEAP32[i99 >> 2] = i2;
        i4 = i2;
        i5 = i99;
        break;
       }
      } else {
       HEAP32[i99 >> 2] = i58;
       i4 = i69;
       i5 = i58;
      } while (0);
      if (!(HEAP32[i5 >> 2] | 0)) {
       i2 = __Znwj(20) | 0;
       HEAP32[i2 + 16 >> 2] = i27;
       HEAP32[i2 >> 2] = 0;
       HEAP32[i2 + 4 >> 2] = 0;
       HEAP32[i2 + 8 >> 2] = i4;
       HEAP32[i5 >> 2] = i2;
       i4 = HEAP32[HEAP32[i89 >> 2] >> 2] | 0;
       if (i4) {
        HEAP32[i89 >> 2] = i4;
        i2 = HEAP32[i5 >> 2] | 0;
       }
       __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[i56 >> 2] | 0, i2);
       HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
      }
      f10 = Math_fround(HEAPF32[(HEAP32[i87 >> 2] | 0) + (i28 << 3) + 4 >> 2]);
      i17 = i28 + 1 | 0;
      if (!((i28 | 0) % 10 | 0)) i1 = __ZN7guetzli12_GLOBAL__N_119ComputeEntropyCodesERKNSt3__26vectorINS_13JpegHistogramENS1_9allocatorIS3_EEEEPNS2_IhNS4_IhEEEE(i106, i105) | 0;
      i15 = HEAP32[i105 >> 2] | 0;
      i2 = HEAP32[i73 >> 2] | 0;
      i4 = HEAP32[i106 >> 2] | 0;
      i16 = i4;
      if ((i2 | 0) == (i4 | 0)) i2 = 0; else {
       i7 = (i2 - i4 | 0) / 1028 | 0;
       i4 = 0;
       i6 = 0;
       do {
        i8 = i15 + (i6 * 257 | 0) | 0;
        i5 = 0;
        i2 = 0;
        i13 = 1;
        while (1) {
         i5 = (Math_imul((HEAPU8[i8 + i2 >> 0] | 0) + (i2 & 15) | 0, (HEAP32[i16 + (i6 * 1028 | 0) + (i2 << 2) >> 2] | 0) >>> 1) | 0) + i5 | 0;
         i2 = i13 + 1 | 0;
         if ((i2 | 0) == 257) break; else {
          i27 = i13;
          i13 = i2;
          i2 = i27;
         }
        }
        i4 = i5 + i4 + (((i5 * 3 | 0) + 512 | 0) >>> 10) | 0;
        i6 = i6 + 1 | 0;
       } while (i6 >>> 0 < i7 >>> 0);
       i2 = (i4 + 7 | 0) >>> 3;
      }
      i2 = i1 + i71 + i2 | 0;
      if ((i28 | 0) >= (i9 | 0) ? (i28 = i2 - i3 | 0, ((i28 | 0) > -1 ? i28 : 0 - i28 | 0) >>> 0 > i29 >>> 0) : 0) break;
      i4 = HEAP32[i87 >> 2] | 0;
      if (i17 >>> 0 >= (HEAP32[i42 >> 2] | 0) - i4 >> 3 >>> 0) {
       i3 = i2;
       break L364;
      } else i28 = i17;
     }
     i3 = i2;
    } while (0);
    if (i59) {
     i4 = HEAP32[i88 >> 2] | 0;
     i5 = HEAP32[i104 >> 2] | 0;
     i2 = 0;
     do {
      f14 = Math_fround(f46 * Math_fround(f10 * Math_fround(HEAPF32[i4 + (i2 << 2) >> 2])));
      i29 = i5 + (i2 << 2) | 0;
      HEAPF32[i29 >> 2] = Math_fround(Math_fround(HEAPF32[i29 >> 2]) + f14);
      i2 = i2 + 1 | 0;
     } while ((i2 | 0) != (i79 | 0));
    }
    i6 = HEAP32[i60 >> 2] | 0;
    HEAP32[i98 >> 2] = 0;
    HEAP32[i98 + 4 >> 2] = 0;
    HEAP32[i98 + 8 >> 2] = 0;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i98, 14346, 20);
    i5 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_(i6, i99, i98) | 0;
    i2 = HEAP32[i5 >> 2] | 0;
    if (!i2) {
     i2 = __Znwj(32) | 0;
     i4 = i2 + 16 | 0;
     HEAP32[i4 >> 2] = HEAP32[i98 >> 2];
     HEAP32[i4 + 4 >> 2] = HEAP32[i98 + 4 >> 2];
     HEAP32[i4 + 8 >> 2] = HEAP32[i98 + 8 >> 2];
     HEAP32[i98 >> 2] = 0;
     HEAP32[i98 + 4 >> 2] = 0;
     HEAP32[i98 + 8 >> 2] = 0;
     HEAP32[i2 + 28 >> 2] = 0;
     i4 = HEAP32[i99 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     HEAP32[i2 + 4 >> 2] = 0;
     HEAP32[i2 + 8 >> 2] = i4;
     HEAP32[i5 >> 2] = i2;
     i4 = HEAP32[HEAP32[i6 >> 2] >> 2] | 0;
     if (!i4) i4 = i2; else {
      HEAP32[i6 >> 2] = i4;
      i4 = HEAP32[i5 >> 2] | 0;
     }
     __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[i6 + 4 >> 2] | 0, i4);
     i29 = i6 + 8 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    }
    i6 = i2 + 28 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i98);
    i6 = HEAP32[i60 >> 2] | 0;
    HEAP32[i98 >> 2] = 0;
    HEAP32[i98 + 4 >> 2] = 0;
    HEAP32[i98 + 8 >> 2] = 0;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i98, i34, i35);
    i5 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_(i6, i99, i98) | 0;
    i2 = HEAP32[i5 >> 2] | 0;
    if (!i2) {
     i2 = __Znwj(32) | 0;
     i4 = i2 + 16 | 0;
     HEAP32[i4 >> 2] = HEAP32[i98 >> 2];
     HEAP32[i4 + 4 >> 2] = HEAP32[i98 + 4 >> 2];
     HEAP32[i4 + 8 >> 2] = HEAP32[i98 + 8 >> 2];
     HEAP32[i98 >> 2] = 0;
     HEAP32[i98 + 4 >> 2] = 0;
     HEAP32[i98 + 8 >> 2] = 0;
     HEAP32[i2 + 28 >> 2] = 0;
     i4 = HEAP32[i99 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     HEAP32[i2 + 4 >> 2] = 0;
     HEAP32[i2 + 8 >> 2] = i4;
     HEAP32[i5 >> 2] = i2;
     i4 = HEAP32[HEAP32[i6 >> 2] >> 2] | 0;
     if (!i4) i4 = i2; else {
      HEAP32[i6 >> 2] = i4;
      i4 = HEAP32[i5 >> 2] | 0;
     }
     __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[i6 + 4 >> 2] | 0, i4);
     i29 = i6 + 8 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    }
    i29 = i2 + 28 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i98);
    __ZN7guetzli8JPEGDataC2ERKS0_(i90, i86);
    __ZNK7guetzli11OutputImage14SaveToJpegDataEPNS_8JPEGDataE(i93, i90);
    HEAP32[i91 >> 2] = 0;
    HEAP32[i91 + 4 >> 2] = 0;
    HEAP32[i91 + 8 >> 2] = 0;
    HEAP8[i91 >> 0] = 0;
    HEAP8[i61 >> 0] = 0;
    i29 = (HEAP8[i74 >> 0] | 0) != 0;
    HEAP32[i98 >> 2] = 6;
    HEAP32[i40 >> 2] = i63;
    HEAP32[i99 >> 2] = HEAP32[i98 >> 2];
    HEAP32[i99 + 4 >> 2] = HEAP32[i98 + 4 >> 2];
    if (!(__ZN7guetzli9WriteJpegERKNS_8JPEGDataEbNS_10JPEGOutputE(i90, i29, i99) | 0)) {
     i75 = 326;
     break L287;
    }
    i6 = HEAP32[i60 >> 2] | 0;
    HEAP32[i92 >> 2] = 0;
    HEAP32[i92 + 4 >> 2] = 0;
    HEAP32[i92 + 8 >> 2] = 0;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i92, 14346, 20);
    i5 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_(i6, i99, i92) | 0;
    i2 = HEAP32[i5 >> 2] | 0;
    if (!i2) {
     i2 = __Znwj(32) | 0;
     i4 = i2 + 16 | 0;
     HEAP32[i4 >> 2] = HEAP32[i92 >> 2];
     HEAP32[i4 + 4 >> 2] = HEAP32[i92 + 4 >> 2];
     HEAP32[i4 + 8 >> 2] = HEAP32[i92 + 8 >> 2];
     HEAP32[i92 >> 2] = 0;
     HEAP32[i92 + 4 >> 2] = 0;
     HEAP32[i92 + 8 >> 2] = 0;
     HEAP32[i2 + 28 >> 2] = 0;
     i4 = HEAP32[i99 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     HEAP32[i2 + 4 >> 2] = 0;
     HEAP32[i2 + 8 >> 2] = i4;
     HEAP32[i5 >> 2] = i2;
     i4 = HEAP32[HEAP32[i6 >> 2] >> 2] | 0;
     if (!i4) i4 = i2; else {
      HEAP32[i6 >> 2] = i4;
      i4 = HEAP32[i5 >> 2] | 0;
     }
     __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[i6 + 4 >> 2] | 0, i4);
     i29 = i6 + 8 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    }
    i27 = HEAP32[i2 + 28 >> 2] | 0;
    i25 = HEAP32[i83 >> 2] | 0;
    i26 = HEAP32[i25 + 12 >> 2] | 0;
    i2 = HEAP32[i25 + 316 >> 2] | 0;
    i4 = HEAP32[i25 + 320 >> 2] | 0;
    i29 = HEAP32[i25 + 624 >> 2] | 0;
    i28 = HEAP32[i25 + 628 >> 2] | 0;
    HEAP32[i100 >> 2] = HEAP32[i25 + 8 >> 2];
    HEAP32[i100 + 4 >> 2] = i26;
    HEAP32[i100 + 8 >> 2] = i2;
    HEAP32[i100 + 12 >> 2] = i4;
    HEAP32[i100 + 16 >> 2] = i29;
    HEAP32[i100 + 20 >> 2] = i28;
    i28 = _snprintf(i99, 128, 9652, i100) | 0;
    HEAP32[i94 >> 2] = 0;
    HEAP32[i94 + 4 >> 2] = 0;
    HEAP32[i94 + 8 >> 2] = 0;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i94, i99, i28);
    i28 = (HEAP8[i64 >> 0] | 0) < 0 ? HEAP32[i94 >> 2] | 0 : i94;
    i29 = (HEAP32[i42 >> 2] | 0) - (HEAP32[i87 >> 2] | 0) >> 3;
    i4 = HEAP32[i57 >> 2] | 0;
    i2 = HEAP8[i61 >> 0] | 0;
    i2 = i2 << 24 >> 24 < 0 ? HEAP32[i62 >> 2] | 0 : i2 & 255;
    HEAP32[i101 >> 2] = i27;
    HEAP32[i101 + 4 >> 2] = i28;
    HEAP32[i101 + 8 >> 2] = i81;
    HEAP32[i101 + 12 >> 2] = i36;
    HEAP32[i101 + 16 >> 2] = i17;
    HEAP32[i101 + 20 >> 2] = i29;
    HEAP32[i101 + 24 >> 2] = i4;
    HEAP32[i101 + 28 >> 2] = i30;
    HEAP32[i101 + 32 >> 2] = i79;
    HEAPF64[i101 + 40 >> 3] = +f10;
    HEAP32[i101 + 48 >> 2] = i2;
    HEAPF64[i101 + 56 >> 3] = 100.0 - +(i3 | 0) * 100.0 / +(i2 >>> 0);
    _snprintf(i98, 1024, 14555, i101) | 0;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i94);
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i92);
    HEAP8[i65 >> 0] = 0;
    i2 = HEAP32[i60 >> 2] | 0;
    HEAP32[i95 >> 2] = 0;
    HEAP32[i95 + 4 >> 2] = 0;
    HEAP32[i95 + 8 >> 2] = 0;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i95, i98, _strlen(i98) | 0);
    i4 = HEAP32[i2 + 12 >> 2] | 0;
    if (i4 | 0) {
     i30 = HEAP8[i67 >> 0] | 0;
     i29 = i30 << 24 >> 24 < 0;
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i4, i29 ? HEAP32[i95 >> 2] | 0 : i95, i29 ? HEAP32[i68 >> 2] | 0 : i30 & 255) | 0;
    }
    i2 = HEAP32[i2 + 16 >> 2] | 0;
    if (i2 | 0) _fputs((HEAP8[i67 >> 0] | 0) < 0 ? HEAP32[i95 >> 2] | 0 : i95, i2) | 0;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i95);
    i2 = HEAP32[i50 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 3](i2, i93);
    __ZN7guetzli12_GLOBAL__N_19Processor11MaybeOutputERKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE(i85, i91);
    i2 = HEAP32[i50 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 3](i99, i2);
    __ZNSt3__26vectorIfNS_9allocatorIfEEE6assignIPfEENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIfNS_15iterator_traitsIS7_E9referenceEEE5valueEvE4typeES7_S7_(i102, HEAP32[i99 >> 2] | 0, HEAP32[i66 >> 2] | 0);
    i2 = HEAP32[i99 >> 2] | 0;
    if (i2 | 0) {
     i4 = HEAP32[i66 >> 2] | 0;
     if ((i4 | 0) != (i2 | 0)) HEAP32[i66 >> 2] = i4 + (~((i4 + -4 - i2 | 0) >>> 2) << 2);
     __ZdlPv(i2);
    }
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i91);
    __ZN7guetzli8JPEGDataD2Ev(i90);
    __ZNSt3__26__treeIiNS_4lessIiEENS_9allocatorIiEEE7destroyEPNS_11__tree_nodeIiPvEE(i89, HEAP32[i58 >> 2] | 0);
    i6 = 1;
    i2 = 0;
   }
   i4 = HEAP32[i88 >> 2] | 0;
   if (i4 | 0) {
    i5 = HEAP32[i44 >> 2] | 0;
    if ((i5 | 0) != (i4 | 0)) HEAP32[i44 >> 2] = i5 + (~((i5 + -4 - i4 | 0) >>> 2) << 2);
    __ZdlPv(i4);
   }
   i4 = HEAP32[i87 >> 2] | 0;
   if (i4 | 0) {
    i5 = HEAP32[i42 >> 2] | 0;
    if ((i5 | 0) != (i4 | 0)) HEAP32[i42 >> 2] = i5 + (~((i5 + -8 - i4 | 0) >>> 3) << 3);
    __ZdlPv(i4);
   }
  } while (i6);
  i38 = i38 + 4 | 0;
  if ((i38 | 0) == 7360) {
   i75 = 180;
   break;
  }
 }
 if ((i75 | 0) == 180) {
  i3 = HEAP32[i102 >> 2] | 0;
  if (i3 | 0) {
   i1 = i102 + 4 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
   __ZdlPv(i3);
  }
  i3 = HEAP32[i103 >> 2] | 0;
  if (i3 | 0) {
   i1 = i103 + 4 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
   __ZdlPv(i3);
  }
  i3 = HEAP32[i104 >> 2] | 0;
  if (i3 | 0) {
   i1 = i104 + 4 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
   __ZdlPv(i3);
  }
  i1 = HEAP32[i105 >> 2] | 0;
  if (i1 | 0) {
   if ((HEAP32[i72 >> 2] | 0) != (i1 | 0)) HEAP32[i72 >> 2] = i1;
   __ZdlPv(i1);
  }
  i1 = HEAP32[i106 >> 2] | 0;
  if (i1 | 0) {
   i2 = HEAP32[i73 >> 2] | 0;
   if ((i2 | 0) != (i1 | 0)) HEAP32[i73 >> 2] = i2 + (~(((i2 + -1028 - i1 | 0) >>> 0) / 1028 | 0) * 1028 | 0);
   __ZdlPv(i1);
  }
  __ZN7guetzli8JPEGDataD2Ev(i107);
  i1 = HEAP32[i109 >> 2] | 0;
  if (i1 | 0) {
   i2 = HEAP32[i108 >> 2] | 0;
   if ((i2 | 0) != (i1 | 0)) {
    do {
     i3 = i2 + -12 | 0;
     HEAP32[i108 >> 2] = i3;
     i4 = HEAP32[i3 >> 2] | 0;
     if (!i4) i2 = i3; else {
      i2 = i2 + -8 | 0;
      i3 = HEAP32[i2 >> 2] | 0;
      if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -8 - i4 | 0) >>> 3) << 3);
      __ZdlPv(i4);
      i2 = HEAP32[i108 >> 2] | 0;
     }
    } while ((i2 | 0) != (i1 | 0));
    i1 = HEAP32[i109 >> 2] | 0;
   }
   __ZdlPv(i1);
  }
  STACKTOP = i110;
  return;
 } else if ((i75 | 0) == 263) ___assert_fail(8920, 8947, 60, 8974); else if ((i75 | 0) == 265) ___assert_fail(8988, 8947, 61, 8974); else if ((i75 | 0) == 285) ___assert_fail(8920, 8947, 124, 9118); else if ((i75 | 0) == 287) ___assert_fail(8988, 8947, 125, 9118); else if ((i75 | 0) == 326) ___assert_fail(14198, 14200, 119, 14224);
}

function _malloc(i2) {
 i2 = i2 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = i35;
 do if (i2 >>> 0 < 245) {
  i14 = i2 >>> 0 < 11 ? 16 : i2 + 11 & -8;
  i2 = i14 >>> 3;
  i18 = HEAP32[11046] | 0;
  i3 = i18 >>> i2;
  if (i3 & 3 | 0) {
   i2 = (i3 & 1 ^ 1) + i2 | 0;
   i3 = 44224 + (i2 << 1 << 2) | 0;
   i4 = i3 + 8 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   i6 = i5 + 8 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   do if ((i3 | 0) != (i7 | 0)) {
    if (i7 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort();
    i1 = i7 + 12 | 0;
    if ((HEAP32[i1 >> 2] | 0) == (i5 | 0)) {
     HEAP32[i1 >> 2] = i3;
     HEAP32[i4 >> 2] = i7;
     break;
    } else _abort();
   } else HEAP32[11046] = i18 & ~(1 << i2); while (0);
   i34 = i2 << 3;
   HEAP32[i5 + 4 >> 2] = i34 | 3;
   i34 = i5 + i34 + 4 | 0;
   HEAP32[i34 >> 2] = HEAP32[i34 >> 2] | 1;
   i34 = i6;
   STACKTOP = i35;
   return i34 | 0;
  }
  i17 = HEAP32[11048] | 0;
  if (i14 >>> 0 > i17 >>> 0) {
   if (i3 | 0) {
    i8 = 2 << i2;
    i2 = i3 << i2 & (i8 | 0 - i8);
    i2 = (i2 & 0 - i2) + -1 | 0;
    i8 = i2 >>> 12 & 16;
    i2 = i2 >>> i8;
    i4 = i2 >>> 5 & 8;
    i2 = i2 >>> i4;
    i6 = i2 >>> 2 & 4;
    i2 = i2 >>> i6;
    i3 = i2 >>> 1 & 2;
    i2 = i2 >>> i3;
    i1 = i2 >>> 1 & 1;
    i1 = (i4 | i8 | i6 | i3 | i1) + (i2 >>> i1) | 0;
    i2 = 44224 + (i1 << 1 << 2) | 0;
    i3 = i2 + 8 | 0;
    i6 = HEAP32[i3 >> 2] | 0;
    i8 = i6 + 8 | 0;
    i4 = HEAP32[i8 >> 2] | 0;
    do if ((i2 | 0) != (i4 | 0)) {
     if (i4 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort();
     i5 = i4 + 12 | 0;
     if ((HEAP32[i5 >> 2] | 0) == (i6 | 0)) {
      HEAP32[i5 >> 2] = i2;
      HEAP32[i3 >> 2] = i4;
      i9 = i18;
      break;
     } else _abort();
    } else {
     i9 = i18 & ~(1 << i1);
     HEAP32[11046] = i9;
    } while (0);
    i7 = (i1 << 3) - i14 | 0;
    HEAP32[i6 + 4 >> 2] = i14 | 3;
    i4 = i6 + i14 | 0;
    HEAP32[i4 + 4 >> 2] = i7 | 1;
    HEAP32[i4 + i7 >> 2] = i7;
    if (i17 | 0) {
     i5 = HEAP32[11051] | 0;
     i1 = i17 >>> 3;
     i3 = 44224 + (i1 << 1 << 2) | 0;
     i1 = 1 << i1;
     if (i9 & i1) {
      i1 = i3 + 8 | 0;
      i2 = HEAP32[i1 >> 2] | 0;
      if (i2 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort(); else {
       i10 = i2;
       i11 = i1;
      }
     } else {
      HEAP32[11046] = i9 | i1;
      i10 = i3;
      i11 = i3 + 8 | 0;
     }
     HEAP32[i11 >> 2] = i5;
     HEAP32[i10 + 12 >> 2] = i5;
     HEAP32[i5 + 8 >> 2] = i10;
     HEAP32[i5 + 12 >> 2] = i3;
    }
    HEAP32[11048] = i7;
    HEAP32[11051] = i4;
    i34 = i8;
    STACKTOP = i35;
    return i34 | 0;
   }
   i10 = HEAP32[11047] | 0;
   if (i10) {
    i2 = (i10 & 0 - i10) + -1 | 0;
    i33 = i2 >>> 12 & 16;
    i2 = i2 >>> i33;
    i32 = i2 >>> 5 & 8;
    i2 = i2 >>> i32;
    i34 = i2 >>> 2 & 4;
    i2 = i2 >>> i34;
    i3 = i2 >>> 1 & 2;
    i2 = i2 >>> i3;
    i1 = i2 >>> 1 & 1;
    i1 = HEAP32[44488 + ((i32 | i33 | i34 | i3 | i1) + (i2 >>> i1) << 2) >> 2] | 0;
    i2 = (HEAP32[i1 + 4 >> 2] & -8) - i14 | 0;
    i3 = HEAP32[i1 + 16 + (((HEAP32[i1 + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;
    if (!i3) {
     i9 = i1;
     i7 = i2;
    } else {
     do {
      i33 = (HEAP32[i3 + 4 >> 2] & -8) - i14 | 0;
      i34 = i33 >>> 0 < i2 >>> 0;
      i2 = i34 ? i33 : i2;
      i1 = i34 ? i3 : i1;
      i3 = HEAP32[i3 + 16 + (((HEAP32[i3 + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;
     } while ((i3 | 0) != 0);
     i9 = i1;
     i7 = i2;
    }
    i5 = HEAP32[11050] | 0;
    if (i9 >>> 0 < i5 >>> 0) _abort();
    i8 = i9 + i14 | 0;
    if (i9 >>> 0 >= i8 >>> 0) _abort();
    i6 = HEAP32[i9 + 24 >> 2] | 0;
    i3 = HEAP32[i9 + 12 >> 2] | 0;
    do if ((i3 | 0) == (i9 | 0)) {
     i2 = i9 + 20 | 0;
     i1 = HEAP32[i2 >> 2] | 0;
     if (!i1) {
      i2 = i9 + 16 | 0;
      i1 = HEAP32[i2 >> 2] | 0;
      if (!i1) {
       i12 = 0;
       break;
      }
     }
     while (1) {
      i3 = i1 + 20 | 0;
      i4 = HEAP32[i3 >> 2] | 0;
      if (i4 | 0) {
       i1 = i4;
       i2 = i3;
       continue;
      }
      i3 = i1 + 16 | 0;
      i4 = HEAP32[i3 >> 2] | 0;
      if (!i4) break; else {
       i1 = i4;
       i2 = i3;
      }
     }
     if (i2 >>> 0 < i5 >>> 0) _abort(); else {
      HEAP32[i2 >> 2] = 0;
      i12 = i1;
      break;
     }
    } else {
     i4 = HEAP32[i9 + 8 >> 2] | 0;
     if (i4 >>> 0 < i5 >>> 0) _abort();
     i1 = i4 + 12 | 0;
     if ((HEAP32[i1 >> 2] | 0) != (i9 | 0)) _abort();
     i2 = i3 + 8 | 0;
     if ((HEAP32[i2 >> 2] | 0) == (i9 | 0)) {
      HEAP32[i1 >> 2] = i3;
      HEAP32[i2 >> 2] = i4;
      i12 = i3;
      break;
     } else _abort();
    } while (0);
    L73 : do if (i6 | 0) {
     i1 = HEAP32[i9 + 28 >> 2] | 0;
     i2 = 44488 + (i1 << 2) | 0;
     do if ((i9 | 0) == (HEAP32[i2 >> 2] | 0)) {
      HEAP32[i2 >> 2] = i12;
      if (!i12) {
       HEAP32[11047] = i10 & ~(1 << i1);
       break L73;
      }
     } else if (i6 >>> 0 >= (HEAP32[11050] | 0) >>> 0) {
      HEAP32[i6 + 16 + (((HEAP32[i6 + 16 >> 2] | 0) != (i9 | 0) & 1) << 2) >> 2] = i12;
      if (!i12) break L73; else break;
     } else _abort(); while (0);
     i2 = HEAP32[11050] | 0;
     if (i12 >>> 0 < i2 >>> 0) _abort();
     HEAP32[i12 + 24 >> 2] = i6;
     i1 = HEAP32[i9 + 16 >> 2] | 0;
     do if (i1 | 0) if (i1 >>> 0 < i2 >>> 0) _abort(); else {
      HEAP32[i12 + 16 >> 2] = i1;
      HEAP32[i1 + 24 >> 2] = i12;
      break;
     } while (0);
     i1 = HEAP32[i9 + 20 >> 2] | 0;
     if (i1 | 0) if (i1 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort(); else {
      HEAP32[i12 + 20 >> 2] = i1;
      HEAP32[i1 + 24 >> 2] = i12;
      break;
     }
    } while (0);
    if (i7 >>> 0 < 16) {
     i34 = i7 + i14 | 0;
     HEAP32[i9 + 4 >> 2] = i34 | 3;
     i34 = i9 + i34 + 4 | 0;
     HEAP32[i34 >> 2] = HEAP32[i34 >> 2] | 1;
    } else {
     HEAP32[i9 + 4 >> 2] = i14 | 3;
     HEAP32[i8 + 4 >> 2] = i7 | 1;
     HEAP32[i8 + i7 >> 2] = i7;
     if (i17 | 0) {
      i4 = HEAP32[11051] | 0;
      i1 = i17 >>> 3;
      i3 = 44224 + (i1 << 1 << 2) | 0;
      i1 = 1 << i1;
      if (i18 & i1) {
       i1 = i3 + 8 | 0;
       i2 = HEAP32[i1 >> 2] | 0;
       if (i2 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort(); else {
        i15 = i2;
        i16 = i1;
       }
      } else {
       HEAP32[11046] = i18 | i1;
       i15 = i3;
       i16 = i3 + 8 | 0;
      }
      HEAP32[i16 >> 2] = i4;
      HEAP32[i15 + 12 >> 2] = i4;
      HEAP32[i4 + 8 >> 2] = i15;
      HEAP32[i4 + 12 >> 2] = i3;
     }
     HEAP32[11048] = i7;
     HEAP32[11051] = i8;
    }
    i34 = i9 + 8 | 0;
    STACKTOP = i35;
    return i34 | 0;
   }
  }
 } else if (i2 >>> 0 <= 4294967231) {
  i2 = i2 + 11 | 0;
  i14 = i2 & -8;
  i10 = HEAP32[11047] | 0;
  if (i10) {
   i4 = 0 - i14 | 0;
   i2 = i2 >>> 8;
   if (i2) if (i14 >>> 0 > 16777215) i8 = 31; else {
    i16 = (i2 + 1048320 | 0) >>> 16 & 8;
    i27 = i2 << i16;
    i15 = (i27 + 520192 | 0) >>> 16 & 4;
    i27 = i27 << i15;
    i8 = (i27 + 245760 | 0) >>> 16 & 2;
    i8 = 14 - (i15 | i16 | i8) + (i27 << i8 >>> 15) | 0;
    i8 = i14 >>> (i8 + 7 | 0) & 1 | i8 << 1;
   } else i8 = 0;
   i3 = HEAP32[44488 + (i8 << 2) >> 2] | 0;
   L117 : do if (!i3) {
    i3 = 0;
    i2 = 0;
    i27 = 81;
   } else {
    i2 = 0;
    i7 = i14 << ((i8 | 0) == 31 ? 0 : 25 - (i8 >>> 1) | 0);
    i6 = 0;
    while (1) {
     i5 = (HEAP32[i3 + 4 >> 2] & -8) - i14 | 0;
     if (i5 >>> 0 < i4 >>> 0) if (!i5) {
      i2 = i3;
      i4 = 0;
      i5 = i3;
      i27 = 85;
      break L117;
     } else {
      i2 = i3;
      i4 = i5;
     }
     i5 = HEAP32[i3 + 20 >> 2] | 0;
     i3 = HEAP32[i3 + 16 + (i7 >>> 31 << 2) >> 2] | 0;
     i6 = (i5 | 0) == 0 | (i5 | 0) == (i3 | 0) ? i6 : i5;
     i5 = (i3 | 0) == 0;
     if (i5) {
      i3 = i6;
      i27 = 81;
      break;
     } else i7 = i7 << ((i5 ^ 1) & 1);
    }
   } while (0);
   if ((i27 | 0) == 81) {
    if ((i3 | 0) == 0 & (i2 | 0) == 0) {
     i2 = 2 << i8;
     i2 = i10 & (i2 | 0 - i2);
     if (!i2) break;
     i16 = (i2 & 0 - i2) + -1 | 0;
     i11 = i16 >>> 12 & 16;
     i16 = i16 >>> i11;
     i9 = i16 >>> 5 & 8;
     i16 = i16 >>> i9;
     i12 = i16 >>> 2 & 4;
     i16 = i16 >>> i12;
     i15 = i16 >>> 1 & 2;
     i16 = i16 >>> i15;
     i3 = i16 >>> 1 & 1;
     i2 = 0;
     i3 = HEAP32[44488 + ((i9 | i11 | i12 | i15 | i3) + (i16 >>> i3) << 2) >> 2] | 0;
    }
    if (!i3) {
     i9 = i2;
     i8 = i4;
    } else {
     i5 = i3;
     i27 = 85;
    }
   }
   if ((i27 | 0) == 85) while (1) {
    i27 = 0;
    i3 = (HEAP32[i5 + 4 >> 2] & -8) - i14 | 0;
    i16 = i3 >>> 0 < i4 >>> 0;
    i3 = i16 ? i3 : i4;
    i2 = i16 ? i5 : i2;
    i5 = HEAP32[i5 + 16 + (((HEAP32[i5 + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;
    if (!i5) {
     i9 = i2;
     i8 = i3;
     break;
    } else {
     i4 = i3;
     i27 = 85;
    }
   }
   if ((i9 | 0) != 0 ? i8 >>> 0 < ((HEAP32[11048] | 0) - i14 | 0) >>> 0 : 0) {
    i5 = HEAP32[11050] | 0;
    if (i9 >>> 0 < i5 >>> 0) _abort();
    i7 = i9 + i14 | 0;
    if (i9 >>> 0 >= i7 >>> 0) _abort();
    i6 = HEAP32[i9 + 24 >> 2] | 0;
    i3 = HEAP32[i9 + 12 >> 2] | 0;
    do if ((i3 | 0) == (i9 | 0)) {
     i2 = i9 + 20 | 0;
     i1 = HEAP32[i2 >> 2] | 0;
     if (!i1) {
      i2 = i9 + 16 | 0;
      i1 = HEAP32[i2 >> 2] | 0;
      if (!i1) {
       i17 = 0;
       break;
      }
     }
     while (1) {
      i3 = i1 + 20 | 0;
      i4 = HEAP32[i3 >> 2] | 0;
      if (i4 | 0) {
       i1 = i4;
       i2 = i3;
       continue;
      }
      i3 = i1 + 16 | 0;
      i4 = HEAP32[i3 >> 2] | 0;
      if (!i4) break; else {
       i1 = i4;
       i2 = i3;
      }
     }
     if (i2 >>> 0 < i5 >>> 0) _abort(); else {
      HEAP32[i2 >> 2] = 0;
      i17 = i1;
      break;
     }
    } else {
     i4 = HEAP32[i9 + 8 >> 2] | 0;
     if (i4 >>> 0 < i5 >>> 0) _abort();
     i1 = i4 + 12 | 0;
     if ((HEAP32[i1 >> 2] | 0) != (i9 | 0)) _abort();
     i2 = i3 + 8 | 0;
     if ((HEAP32[i2 >> 2] | 0) == (i9 | 0)) {
      HEAP32[i1 >> 2] = i3;
      HEAP32[i2 >> 2] = i4;
      i17 = i3;
      break;
     } else _abort();
    } while (0);
    L164 : do if (i6) {
     i1 = HEAP32[i9 + 28 >> 2] | 0;
     i2 = 44488 + (i1 << 2) | 0;
     do if ((i9 | 0) == (HEAP32[i2 >> 2] | 0)) {
      HEAP32[i2 >> 2] = i17;
      if (!i17) {
       i18 = i10 & ~(1 << i1);
       HEAP32[11047] = i18;
       break L164;
      }
     } else if (i6 >>> 0 >= (HEAP32[11050] | 0) >>> 0) {
      HEAP32[i6 + 16 + (((HEAP32[i6 + 16 >> 2] | 0) != (i9 | 0) & 1) << 2) >> 2] = i17;
      if (!i17) {
       i18 = i10;
       break L164;
      } else break;
     } else _abort(); while (0);
     i2 = HEAP32[11050] | 0;
     if (i17 >>> 0 < i2 >>> 0) _abort();
     HEAP32[i17 + 24 >> 2] = i6;
     i1 = HEAP32[i9 + 16 >> 2] | 0;
     do if (i1 | 0) if (i1 >>> 0 < i2 >>> 0) _abort(); else {
      HEAP32[i17 + 16 >> 2] = i1;
      HEAP32[i1 + 24 >> 2] = i17;
      break;
     } while (0);
     i1 = HEAP32[i9 + 20 >> 2] | 0;
     if (i1) if (i1 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort(); else {
      HEAP32[i17 + 20 >> 2] = i1;
      HEAP32[i1 + 24 >> 2] = i17;
      i18 = i10;
      break;
     } else i18 = i10;
    } else i18 = i10; while (0);
    do if (i8 >>> 0 >= 16) {
     HEAP32[i9 + 4 >> 2] = i14 | 3;
     HEAP32[i7 + 4 >> 2] = i8 | 1;
     HEAP32[i7 + i8 >> 2] = i8;
     i1 = i8 >>> 3;
     if (i8 >>> 0 < 256) {
      i3 = 44224 + (i1 << 1 << 2) | 0;
      i2 = HEAP32[11046] | 0;
      i1 = 1 << i1;
      if (i2 & i1) {
       i1 = i3 + 8 | 0;
       i2 = HEAP32[i1 >> 2] | 0;
       if (i2 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort(); else {
        i22 = i2;
        i23 = i1;
       }
      } else {
       HEAP32[11046] = i2 | i1;
       i22 = i3;
       i23 = i3 + 8 | 0;
      }
      HEAP32[i23 >> 2] = i7;
      HEAP32[i22 + 12 >> 2] = i7;
      HEAP32[i7 + 8 >> 2] = i22;
      HEAP32[i7 + 12 >> 2] = i3;
      break;
     }
     i1 = i8 >>> 8;
     if (i1) if (i8 >>> 0 > 16777215) i1 = 31; else {
      i33 = (i1 + 1048320 | 0) >>> 16 & 8;
      i34 = i1 << i33;
      i32 = (i34 + 520192 | 0) >>> 16 & 4;
      i34 = i34 << i32;
      i1 = (i34 + 245760 | 0) >>> 16 & 2;
      i1 = 14 - (i32 | i33 | i1) + (i34 << i1 >>> 15) | 0;
      i1 = i8 >>> (i1 + 7 | 0) & 1 | i1 << 1;
     } else i1 = 0;
     i3 = 44488 + (i1 << 2) | 0;
     HEAP32[i7 + 28 >> 2] = i1;
     i2 = i7 + 16 | 0;
     HEAP32[i2 + 4 >> 2] = 0;
     HEAP32[i2 >> 2] = 0;
     i2 = 1 << i1;
     if (!(i18 & i2)) {
      HEAP32[11047] = i18 | i2;
      HEAP32[i3 >> 2] = i7;
      HEAP32[i7 + 24 >> 2] = i3;
      HEAP32[i7 + 12 >> 2] = i7;
      HEAP32[i7 + 8 >> 2] = i7;
      break;
     }
     i2 = i8 << ((i1 | 0) == 31 ? 0 : 25 - (i1 >>> 1) | 0);
     i4 = HEAP32[i3 >> 2] | 0;
     while (1) {
      if ((HEAP32[i4 + 4 >> 2] & -8 | 0) == (i8 | 0)) {
       i27 = 139;
       break;
      }
      i3 = i4 + 16 + (i2 >>> 31 << 2) | 0;
      i1 = HEAP32[i3 >> 2] | 0;
      if (!i1) {
       i27 = 136;
       break;
      } else {
       i2 = i2 << 1;
       i4 = i1;
      }
     }
     if ((i27 | 0) == 136) if (i3 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort(); else {
      HEAP32[i3 >> 2] = i7;
      HEAP32[i7 + 24 >> 2] = i4;
      HEAP32[i7 + 12 >> 2] = i7;
      HEAP32[i7 + 8 >> 2] = i7;
      break;
     } else if ((i27 | 0) == 139) {
      i1 = i4 + 8 | 0;
      i2 = HEAP32[i1 >> 2] | 0;
      i34 = HEAP32[11050] | 0;
      if (i2 >>> 0 >= i34 >>> 0 & i4 >>> 0 >= i34 >>> 0) {
       HEAP32[i2 + 12 >> 2] = i7;
       HEAP32[i1 >> 2] = i7;
       HEAP32[i7 + 8 >> 2] = i2;
       HEAP32[i7 + 12 >> 2] = i4;
       HEAP32[i7 + 24 >> 2] = 0;
       break;
      } else _abort();
     }
    } else {
     i34 = i8 + i14 | 0;
     HEAP32[i9 + 4 >> 2] = i34 | 3;
     i34 = i9 + i34 + 4 | 0;
     HEAP32[i34 >> 2] = HEAP32[i34 >> 2] | 1;
    } while (0);
    i34 = i9 + 8 | 0;
    STACKTOP = i35;
    return i34 | 0;
   }
  }
 } else i14 = -1; while (0);
 i3 = HEAP32[11048] | 0;
 if (i3 >>> 0 >= i14 >>> 0) {
  i1 = i3 - i14 | 0;
  i2 = HEAP32[11051] | 0;
  if (i1 >>> 0 > 15) {
   i34 = i2 + i14 | 0;
   HEAP32[11051] = i34;
   HEAP32[11048] = i1;
   HEAP32[i34 + 4 >> 2] = i1 | 1;
   HEAP32[i34 + i1 >> 2] = i1;
   HEAP32[i2 + 4 >> 2] = i14 | 3;
  } else {
   HEAP32[11048] = 0;
   HEAP32[11051] = 0;
   HEAP32[i2 + 4 >> 2] = i3 | 3;
   i34 = i2 + i3 + 4 | 0;
   HEAP32[i34 >> 2] = HEAP32[i34 >> 2] | 1;
  }
  i34 = i2 + 8 | 0;
  STACKTOP = i35;
  return i34 | 0;
 }
 i7 = HEAP32[11049] | 0;
 if (i7 >>> 0 > i14 >>> 0) {
  i32 = i7 - i14 | 0;
  HEAP32[11049] = i32;
  i34 = HEAP32[11052] | 0;
  i33 = i34 + i14 | 0;
  HEAP32[11052] = i33;
  HEAP32[i33 + 4 >> 2] = i32 | 1;
  HEAP32[i34 + 4 >> 2] = i14 | 3;
  i34 = i34 + 8 | 0;
  STACKTOP = i35;
  return i34 | 0;
 }
 if (!(HEAP32[11164] | 0)) {
  HEAP32[11166] = 4096;
  HEAP32[11165] = 4096;
  HEAP32[11167] = -1;
  HEAP32[11168] = -1;
  HEAP32[11169] = 0;
  HEAP32[11157] = 0;
  i2 = i13 & -16 ^ 1431655768;
  HEAP32[i13 >> 2] = i2;
  HEAP32[11164] = i2;
  i2 = 4096;
 } else i2 = HEAP32[11166] | 0;
 i8 = i14 + 48 | 0;
 i9 = i14 + 47 | 0;
 i6 = i2 + i9 | 0;
 i5 = 0 - i2 | 0;
 i10 = i6 & i5;
 if (i10 >>> 0 <= i14 >>> 0) {
  i34 = 0;
  STACKTOP = i35;
  return i34 | 0;
 }
 i2 = HEAP32[11156] | 0;
 if (i2 | 0 ? (i22 = HEAP32[11154] | 0, i23 = i22 + i10 | 0, i23 >>> 0 <= i22 >>> 0 | i23 >>> 0 > i2 >>> 0) : 0) {
  i34 = 0;
  STACKTOP = i35;
  return i34 | 0;
 }
 L244 : do if (!(HEAP32[11157] & 4)) {
  i3 = HEAP32[11052] | 0;
  L246 : do if (i3) {
   i4 = 44632;
   while (1) {
    i2 = HEAP32[i4 >> 2] | 0;
    if (i2 >>> 0 <= i3 >>> 0 ? (i21 = i4 + 4 | 0, (i2 + (HEAP32[i21 >> 2] | 0) | 0) >>> 0 > i3 >>> 0) : 0) break;
    i2 = HEAP32[i4 + 8 >> 2] | 0;
    if (!i2) {
     i27 = 163;
     break L246;
    } else i4 = i2;
   }
   i1 = i6 - i7 & i5;
   if (i1 >>> 0 < 2147483647) {
    i2 = _sbrk(i1 | 0) | 0;
    if ((i2 | 0) == ((HEAP32[i4 >> 2] | 0) + (HEAP32[i21 >> 2] | 0) | 0)) {
     if ((i2 | 0) != (-1 | 0)) {
      i7 = i1;
      i6 = i2;
      i27 = 180;
      break L244;
     }
    } else {
     i4 = i2;
     i27 = 171;
    }
   } else i1 = 0;
  } else i27 = 163; while (0);
  do if ((i27 | 0) == 163) {
   i3 = _sbrk(0) | 0;
   if ((i3 | 0) != (-1 | 0) ? (i1 = i3, i19 = HEAP32[11165] | 0, i20 = i19 + -1 | 0, i1 = ((i20 & i1 | 0) == 0 ? 0 : (i20 + i1 & 0 - i19) - i1 | 0) + i10 | 0, i19 = HEAP32[11154] | 0, i20 = i1 + i19 | 0, i1 >>> 0 > i14 >>> 0 & i1 >>> 0 < 2147483647) : 0) {
    i23 = HEAP32[11156] | 0;
    if (i23 | 0 ? i20 >>> 0 <= i19 >>> 0 | i20 >>> 0 > i23 >>> 0 : 0) {
     i1 = 0;
     break;
    }
    i2 = _sbrk(i1 | 0) | 0;
    if ((i2 | 0) == (i3 | 0)) {
     i7 = i1;
     i6 = i3;
     i27 = 180;
     break L244;
    } else {
     i4 = i2;
     i27 = 171;
    }
   } else i1 = 0;
  } while (0);
  do if ((i27 | 0) == 171) {
   i3 = 0 - i1 | 0;
   if (!(i8 >>> 0 > i1 >>> 0 & (i1 >>> 0 < 2147483647 & (i4 | 0) != (-1 | 0)))) if ((i4 | 0) == (-1 | 0)) {
    i1 = 0;
    break;
   } else {
    i7 = i1;
    i6 = i4;
    i27 = 180;
    break L244;
   }
   i2 = HEAP32[11166] | 0;
   i2 = i9 - i1 + i2 & 0 - i2;
   if (i2 >>> 0 >= 2147483647) {
    i7 = i1;
    i6 = i4;
    i27 = 180;
    break L244;
   }
   if ((_sbrk(i2 | 0) | 0) == (-1 | 0)) {
    _sbrk(i3 | 0) | 0;
    i1 = 0;
    break;
   } else {
    i7 = i2 + i1 | 0;
    i6 = i4;
    i27 = 180;
    break L244;
   }
  } while (0);
  HEAP32[11157] = HEAP32[11157] | 4;
  i27 = 178;
 } else {
  i1 = 0;
  i27 = 178;
 } while (0);
 if (((i27 | 0) == 178 ? i10 >>> 0 < 2147483647 : 0) ? (i26 = _sbrk(i10 | 0) | 0, i23 = _sbrk(0) | 0, i24 = i23 - i26 | 0, i25 = i24 >>> 0 > (i14 + 40 | 0) >>> 0, !((i26 | 0) == (-1 | 0) | i25 ^ 1 | i26 >>> 0 < i23 >>> 0 & ((i26 | 0) != (-1 | 0) & (i23 | 0) != (-1 | 0)) ^ 1)) : 0) {
  i7 = i25 ? i24 : i1;
  i6 = i26;
  i27 = 180;
 }
 if ((i27 | 0) == 180) {
  i1 = (HEAP32[11154] | 0) + i7 | 0;
  HEAP32[11154] = i1;
  if (i1 >>> 0 > (HEAP32[11155] | 0) >>> 0) HEAP32[11155] = i1;
  i10 = HEAP32[11052] | 0;
  do if (i10) {
   i1 = 44632;
   while (1) {
    i2 = HEAP32[i1 >> 2] | 0;
    i3 = i1 + 4 | 0;
    i4 = HEAP32[i3 >> 2] | 0;
    if ((i6 | 0) == (i2 + i4 | 0)) {
     i27 = 190;
     break;
    }
    i5 = HEAP32[i1 + 8 >> 2] | 0;
    if (!i5) break; else i1 = i5;
   }
   if (((i27 | 0) == 190 ? (HEAP32[i1 + 12 >> 2] & 8 | 0) == 0 : 0) ? i10 >>> 0 < i6 >>> 0 & i10 >>> 0 >= i2 >>> 0 : 0) {
    HEAP32[i3 >> 2] = i4 + i7;
    i34 = i10 + 8 | 0;
    i34 = (i34 & 7 | 0) == 0 ? 0 : 0 - i34 & 7;
    i33 = i10 + i34 | 0;
    i34 = (HEAP32[11049] | 0) + (i7 - i34) | 0;
    HEAP32[11052] = i33;
    HEAP32[11049] = i34;
    HEAP32[i33 + 4 >> 2] = i34 | 1;
    HEAP32[i33 + i34 + 4 >> 2] = 40;
    HEAP32[11053] = HEAP32[11168];
    break;
   }
   i1 = HEAP32[11050] | 0;
   if (i6 >>> 0 < i1 >>> 0) {
    HEAP32[11050] = i6;
    i8 = i6;
   } else i8 = i1;
   i3 = i6 + i7 | 0;
   i1 = 44632;
   while (1) {
    if ((HEAP32[i1 >> 2] | 0) == (i3 | 0)) {
     i27 = 198;
     break;
    }
    i2 = HEAP32[i1 + 8 >> 2] | 0;
    if (!i2) break; else i1 = i2;
   }
   if ((i27 | 0) == 198 ? (HEAP32[i1 + 12 >> 2] & 8 | 0) == 0 : 0) {
    HEAP32[i1 >> 2] = i6;
    i12 = i1 + 4 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + i7;
    i12 = i6 + 8 | 0;
    i12 = i6 + ((i12 & 7 | 0) == 0 ? 0 : 0 - i12 & 7) | 0;
    i1 = i3 + 8 | 0;
    i1 = i3 + ((i1 & 7 | 0) == 0 ? 0 : 0 - i1 & 7) | 0;
    i11 = i12 + i14 | 0;
    i9 = i1 - i12 - i14 | 0;
    HEAP32[i12 + 4 >> 2] = i14 | 3;
    do if ((i1 | 0) != (i10 | 0)) {
     if ((i1 | 0) == (HEAP32[11051] | 0)) {
      i34 = (HEAP32[11048] | 0) + i9 | 0;
      HEAP32[11048] = i34;
      HEAP32[11051] = i11;
      HEAP32[i11 + 4 >> 2] = i34 | 1;
      HEAP32[i11 + i34 >> 2] = i34;
      break;
     }
     i2 = HEAP32[i1 + 4 >> 2] | 0;
     if ((i2 & 3 | 0) == 1) {
      i7 = i2 & -8;
      i5 = i2 >>> 3;
      L314 : do if (i2 >>> 0 >= 256) {
       i6 = HEAP32[i1 + 24 >> 2] | 0;
       i4 = HEAP32[i1 + 12 >> 2] | 0;
       do if ((i4 | 0) == (i1 | 0)) {
        i4 = i1 + 16 | 0;
        i3 = i4 + 4 | 0;
        i2 = HEAP32[i3 >> 2] | 0;
        if (!i2) {
         i2 = HEAP32[i4 >> 2] | 0;
         if (!i2) {
          i32 = 0;
          break;
         } else i3 = i4;
        }
        while (1) {
         i4 = i2 + 20 | 0;
         i5 = HEAP32[i4 >> 2] | 0;
         if (i5 | 0) {
          i2 = i5;
          i3 = i4;
          continue;
         }
         i4 = i2 + 16 | 0;
         i5 = HEAP32[i4 >> 2] | 0;
         if (!i5) break; else {
          i2 = i5;
          i3 = i4;
         }
        }
        if (i3 >>> 0 < i8 >>> 0) _abort(); else {
         HEAP32[i3 >> 2] = 0;
         i32 = i2;
         break;
        }
       } else {
        i5 = HEAP32[i1 + 8 >> 2] | 0;
        if (i5 >>> 0 < i8 >>> 0) _abort();
        i2 = i5 + 12 | 0;
        if ((HEAP32[i2 >> 2] | 0) != (i1 | 0)) _abort();
        i3 = i4 + 8 | 0;
        if ((HEAP32[i3 >> 2] | 0) == (i1 | 0)) {
         HEAP32[i2 >> 2] = i4;
         HEAP32[i3 >> 2] = i5;
         i32 = i4;
         break;
        } else _abort();
       } while (0);
       if (!i6) break;
       i2 = HEAP32[i1 + 28 >> 2] | 0;
       i3 = 44488 + (i2 << 2) | 0;
       do if ((i1 | 0) != (HEAP32[i3 >> 2] | 0)) if (i6 >>> 0 >= (HEAP32[11050] | 0) >>> 0) {
        HEAP32[i6 + 16 + (((HEAP32[i6 + 16 >> 2] | 0) != (i1 | 0) & 1) << 2) >> 2] = i32;
        if (!i32) break L314; else break;
       } else _abort(); else {
        HEAP32[i3 >> 2] = i32;
        if (i32 | 0) break;
        HEAP32[11047] = HEAP32[11047] & ~(1 << i2);
        break L314;
       } while (0);
       i4 = HEAP32[11050] | 0;
       if (i32 >>> 0 < i4 >>> 0) _abort();
       HEAP32[i32 + 24 >> 2] = i6;
       i2 = i1 + 16 | 0;
       i3 = HEAP32[i2 >> 2] | 0;
       do if (i3 | 0) if (i3 >>> 0 < i4 >>> 0) _abort(); else {
        HEAP32[i32 + 16 >> 2] = i3;
        HEAP32[i3 + 24 >> 2] = i32;
        break;
       } while (0);
       i2 = HEAP32[i2 + 4 >> 2] | 0;
       if (!i2) break;
       if (i2 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort(); else {
        HEAP32[i32 + 20 >> 2] = i2;
        HEAP32[i2 + 24 >> 2] = i32;
        break;
       }
      } else {
       i3 = HEAP32[i1 + 8 >> 2] | 0;
       i4 = HEAP32[i1 + 12 >> 2] | 0;
       i2 = 44224 + (i5 << 1 << 2) | 0;
       do if ((i3 | 0) != (i2 | 0)) {
        if (i3 >>> 0 < i8 >>> 0) _abort();
        if ((HEAP32[i3 + 12 >> 2] | 0) == (i1 | 0)) break;
        _abort();
       } while (0);
       if ((i4 | 0) == (i3 | 0)) {
        HEAP32[11046] = HEAP32[11046] & ~(1 << i5);
        break;
       }
       do if ((i4 | 0) == (i2 | 0)) i29 = i4 + 8 | 0; else {
        if (i4 >>> 0 < i8 >>> 0) _abort();
        i2 = i4 + 8 | 0;
        if ((HEAP32[i2 >> 2] | 0) == (i1 | 0)) {
         i29 = i2;
         break;
        }
        _abort();
       } while (0);
       HEAP32[i3 + 12 >> 2] = i4;
       HEAP32[i29 >> 2] = i3;
      } while (0);
      i1 = i1 + i7 | 0;
      i5 = i7 + i9 | 0;
     } else i5 = i9;
     i1 = i1 + 4 | 0;
     HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -2;
     HEAP32[i11 + 4 >> 2] = i5 | 1;
     HEAP32[i11 + i5 >> 2] = i5;
     i1 = i5 >>> 3;
     if (i5 >>> 0 < 256) {
      i3 = 44224 + (i1 << 1 << 2) | 0;
      i2 = HEAP32[11046] | 0;
      i1 = 1 << i1;
      do if (!(i2 & i1)) {
       HEAP32[11046] = i2 | i1;
       i33 = i3;
       i34 = i3 + 8 | 0;
      } else {
       i1 = i3 + 8 | 0;
       i2 = HEAP32[i1 >> 2] | 0;
       if (i2 >>> 0 >= (HEAP32[11050] | 0) >>> 0) {
        i33 = i2;
        i34 = i1;
        break;
       }
       _abort();
      } while (0);
      HEAP32[i34 >> 2] = i11;
      HEAP32[i33 + 12 >> 2] = i11;
      HEAP32[i11 + 8 >> 2] = i33;
      HEAP32[i11 + 12 >> 2] = i3;
      break;
     }
     i1 = i5 >>> 8;
     do if (!i1) i1 = 0; else {
      if (i5 >>> 0 > 16777215) {
       i1 = 31;
       break;
      }
      i33 = (i1 + 1048320 | 0) >>> 16 & 8;
      i34 = i1 << i33;
      i32 = (i34 + 520192 | 0) >>> 16 & 4;
      i34 = i34 << i32;
      i1 = (i34 + 245760 | 0) >>> 16 & 2;
      i1 = 14 - (i32 | i33 | i1) + (i34 << i1 >>> 15) | 0;
      i1 = i5 >>> (i1 + 7 | 0) & 1 | i1 << 1;
     } while (0);
     i4 = 44488 + (i1 << 2) | 0;
     HEAP32[i11 + 28 >> 2] = i1;
     i2 = i11 + 16 | 0;
     HEAP32[i2 + 4 >> 2] = 0;
     HEAP32[i2 >> 2] = 0;
     i2 = HEAP32[11047] | 0;
     i3 = 1 << i1;
     if (!(i2 & i3)) {
      HEAP32[11047] = i2 | i3;
      HEAP32[i4 >> 2] = i11;
      HEAP32[i11 + 24 >> 2] = i4;
      HEAP32[i11 + 12 >> 2] = i11;
      HEAP32[i11 + 8 >> 2] = i11;
      break;
     }
     i2 = i5 << ((i1 | 0) == 31 ? 0 : 25 - (i1 >>> 1) | 0);
     i4 = HEAP32[i4 >> 2] | 0;
     while (1) {
      if ((HEAP32[i4 + 4 >> 2] & -8 | 0) == (i5 | 0)) {
       i27 = 265;
       break;
      }
      i3 = i4 + 16 + (i2 >>> 31 << 2) | 0;
      i1 = HEAP32[i3 >> 2] | 0;
      if (!i1) {
       i27 = 262;
       break;
      } else {
       i2 = i2 << 1;
       i4 = i1;
      }
     }
     if ((i27 | 0) == 262) if (i3 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort(); else {
      HEAP32[i3 >> 2] = i11;
      HEAP32[i11 + 24 >> 2] = i4;
      HEAP32[i11 + 12 >> 2] = i11;
      HEAP32[i11 + 8 >> 2] = i11;
      break;
     } else if ((i27 | 0) == 265) {
      i1 = i4 + 8 | 0;
      i2 = HEAP32[i1 >> 2] | 0;
      i34 = HEAP32[11050] | 0;
      if (i2 >>> 0 >= i34 >>> 0 & i4 >>> 0 >= i34 >>> 0) {
       HEAP32[i2 + 12 >> 2] = i11;
       HEAP32[i1 >> 2] = i11;
       HEAP32[i11 + 8 >> 2] = i2;
       HEAP32[i11 + 12 >> 2] = i4;
       HEAP32[i11 + 24 >> 2] = 0;
       break;
      } else _abort();
     }
    } else {
     i34 = (HEAP32[11049] | 0) + i9 | 0;
     HEAP32[11049] = i34;
     HEAP32[11052] = i11;
     HEAP32[i11 + 4 >> 2] = i34 | 1;
    } while (0);
    i34 = i12 + 8 | 0;
    STACKTOP = i35;
    return i34 | 0;
   }
   i1 = 44632;
   while (1) {
    i2 = HEAP32[i1 >> 2] | 0;
    if (i2 >>> 0 <= i10 >>> 0 ? (i28 = i2 + (HEAP32[i1 + 4 >> 2] | 0) | 0, i28 >>> 0 > i10 >>> 0) : 0) break;
    i1 = HEAP32[i1 + 8 >> 2] | 0;
   }
   i5 = i28 + -47 | 0;
   i2 = i5 + 8 | 0;
   i2 = i5 + ((i2 & 7 | 0) == 0 ? 0 : 0 - i2 & 7) | 0;
   i5 = i10 + 16 | 0;
   i2 = i2 >>> 0 < i5 >>> 0 ? i10 : i2;
   i1 = i2 + 8 | 0;
   i3 = i6 + 8 | 0;
   i3 = (i3 & 7 | 0) == 0 ? 0 : 0 - i3 & 7;
   i34 = i6 + i3 | 0;
   i3 = i7 + -40 - i3 | 0;
   HEAP32[11052] = i34;
   HEAP32[11049] = i3;
   HEAP32[i34 + 4 >> 2] = i3 | 1;
   HEAP32[i34 + i3 + 4 >> 2] = 40;
   HEAP32[11053] = HEAP32[11168];
   i3 = i2 + 4 | 0;
   HEAP32[i3 >> 2] = 27;
   HEAP32[i1 >> 2] = HEAP32[11158];
   HEAP32[i1 + 4 >> 2] = HEAP32[11159];
   HEAP32[i1 + 8 >> 2] = HEAP32[11160];
   HEAP32[i1 + 12 >> 2] = HEAP32[11161];
   HEAP32[11158] = i6;
   HEAP32[11159] = i7;
   HEAP32[11161] = 0;
   HEAP32[11160] = i1;
   i1 = i2 + 24 | 0;
   do {
    i34 = i1;
    i1 = i1 + 4 | 0;
    HEAP32[i1 >> 2] = 7;
   } while ((i34 + 8 | 0) >>> 0 < i28 >>> 0);
   if ((i2 | 0) != (i10 | 0)) {
    i6 = i2 - i10 | 0;
    HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -2;
    HEAP32[i10 + 4 >> 2] = i6 | 1;
    HEAP32[i2 >> 2] = i6;
    i1 = i6 >>> 3;
    if (i6 >>> 0 < 256) {
     i3 = 44224 + (i1 << 1 << 2) | 0;
     i2 = HEAP32[11046] | 0;
     i1 = 1 << i1;
     if (i2 & i1) {
      i1 = i3 + 8 | 0;
      i2 = HEAP32[i1 >> 2] | 0;
      if (i2 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort(); else {
       i30 = i2;
       i31 = i1;
      }
     } else {
      HEAP32[11046] = i2 | i1;
      i30 = i3;
      i31 = i3 + 8 | 0;
     }
     HEAP32[i31 >> 2] = i10;
     HEAP32[i30 + 12 >> 2] = i10;
     HEAP32[i10 + 8 >> 2] = i30;
     HEAP32[i10 + 12 >> 2] = i3;
     break;
    }
    i1 = i6 >>> 8;
    if (i1) if (i6 >>> 0 > 16777215) i3 = 31; else {
     i33 = (i1 + 1048320 | 0) >>> 16 & 8;
     i34 = i1 << i33;
     i32 = (i34 + 520192 | 0) >>> 16 & 4;
     i34 = i34 << i32;
     i3 = (i34 + 245760 | 0) >>> 16 & 2;
     i3 = 14 - (i32 | i33 | i3) + (i34 << i3 >>> 15) | 0;
     i3 = i6 >>> (i3 + 7 | 0) & 1 | i3 << 1;
    } else i3 = 0;
    i4 = 44488 + (i3 << 2) | 0;
    HEAP32[i10 + 28 >> 2] = i3;
    HEAP32[i10 + 20 >> 2] = 0;
    HEAP32[i5 >> 2] = 0;
    i1 = HEAP32[11047] | 0;
    i2 = 1 << i3;
    if (!(i1 & i2)) {
     HEAP32[11047] = i1 | i2;
     HEAP32[i4 >> 2] = i10;
     HEAP32[i10 + 24 >> 2] = i4;
     HEAP32[i10 + 12 >> 2] = i10;
     HEAP32[i10 + 8 >> 2] = i10;
     break;
    }
    i2 = i6 << ((i3 | 0) == 31 ? 0 : 25 - (i3 >>> 1) | 0);
    i4 = HEAP32[i4 >> 2] | 0;
    while (1) {
     if ((HEAP32[i4 + 4 >> 2] & -8 | 0) == (i6 | 0)) {
      i27 = 292;
      break;
     }
     i3 = i4 + 16 + (i2 >>> 31 << 2) | 0;
     i1 = HEAP32[i3 >> 2] | 0;
     if (!i1) {
      i27 = 289;
      break;
     } else {
      i2 = i2 << 1;
      i4 = i1;
     }
    }
    if ((i27 | 0) == 289) if (i3 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort(); else {
     HEAP32[i3 >> 2] = i10;
     HEAP32[i10 + 24 >> 2] = i4;
     HEAP32[i10 + 12 >> 2] = i10;
     HEAP32[i10 + 8 >> 2] = i10;
     break;
    } else if ((i27 | 0) == 292) {
     i1 = i4 + 8 | 0;
     i2 = HEAP32[i1 >> 2] | 0;
     i34 = HEAP32[11050] | 0;
     if (i2 >>> 0 >= i34 >>> 0 & i4 >>> 0 >= i34 >>> 0) {
      HEAP32[i2 + 12 >> 2] = i10;
      HEAP32[i1 >> 2] = i10;
      HEAP32[i10 + 8 >> 2] = i2;
      HEAP32[i10 + 12 >> 2] = i4;
      HEAP32[i10 + 24 >> 2] = 0;
      break;
     } else _abort();
    }
   }
  } else {
   i34 = HEAP32[11050] | 0;
   if ((i34 | 0) == 0 | i6 >>> 0 < i34 >>> 0) HEAP32[11050] = i6;
   HEAP32[11158] = i6;
   HEAP32[11159] = i7;
   HEAP32[11161] = 0;
   HEAP32[11055] = HEAP32[11164];
   HEAP32[11054] = -1;
   i1 = 0;
   do {
    i34 = 44224 + (i1 << 1 << 2) | 0;
    HEAP32[i34 + 12 >> 2] = i34;
    HEAP32[i34 + 8 >> 2] = i34;
    i1 = i1 + 1 | 0;
   } while ((i1 | 0) != 32);
   i34 = i6 + 8 | 0;
   i34 = (i34 & 7 | 0) == 0 ? 0 : 0 - i34 & 7;
   i33 = i6 + i34 | 0;
   i34 = i7 + -40 - i34 | 0;
   HEAP32[11052] = i33;
   HEAP32[11049] = i34;
   HEAP32[i33 + 4 >> 2] = i34 | 1;
   HEAP32[i33 + i34 + 4 >> 2] = 40;
   HEAP32[11053] = HEAP32[11168];
  } while (0);
  i1 = HEAP32[11049] | 0;
  if (i1 >>> 0 > i14 >>> 0) {
   i32 = i1 - i14 | 0;
   HEAP32[11049] = i32;
   i34 = HEAP32[11052] | 0;
   i33 = i34 + i14 | 0;
   HEAP32[11052] = i33;
   HEAP32[i33 + 4 >> 2] = i32 | 1;
   HEAP32[i34 + 4 >> 2] = i14 | 3;
   i34 = i34 + 8 | 0;
   STACKTOP = i35;
   return i34 | 0;
  }
 }
 HEAP32[(___errno_location() | 0) >> 2] = 12;
 i34 = 0;
 STACKTOP = i35;
 return i34 | 0;
}

function __ZN7guetzli15ProcessJpegDataERKNS_6ParamsERKNS_8JPEGDataEPNS_10ComparatorEPNS_13GuetzliOutputEPNS_12ProcessStatsE(i1, i9, i20, i18, i14) {
 i1 = i1 | 0;
 i9 = i9 | 0;
 i20 = i20 | 0;
 i18 = i18 | 0;
 i14 = i14 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i15 = 0, i16 = 0, i17 = 0, d19 = 0.0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, d93 = 0.0;
 i91 = STACKTOP;
 STACKTOP = STACKTOP + 5728 | 0;
 i88 = i91 + 1928 | 0;
 i84 = i91 + 1920 | 0;
 i83 = i91 + 1912 | 0;
 i82 = i91 + 1904 | 0;
 i86 = i91 + 1896 | 0;
 i17 = i91 + 1888 | 0;
 i85 = i91 + 1072 | 0;
 i13 = i91 + 1064 | 0;
 i77 = i91 + 40 | 0;
 i78 = i91 + 5708 | 0;
 i79 = i91 + 5696 | 0;
 i80 = i91 + 5684 | 0;
 i81 = i91 + 5672 | 0;
 i67 = i91 + 4904 | 0;
 i89 = i91 + 4752 | 0;
 i68 = i91 + 3984 | 0;
 i90 = i91 + 3968 | 0;
 i15 = i91 + 3956 | 0;
 i16 = i91 + 3944 | 0;
 i87 = i91 + 3924 | 0;
 i69 = i91 + 3904 | 0;
 i70 = i91 + 3752 | 0;
 i71 = i91 + 2984 | 0;
 i72 = i91;
 i73 = i91 + 2952 | 0;
 i10 = i73 + 4 | 0;
 i22 = i73 + 5 | 0;
 i21 = i73 + 6 | 0;
 i74 = i73 + 7 | 0;
 HEAP32[i73 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i73 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i73 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP8[i73 + 12 >> 0] = HEAP8[i1 + 12 >> 0] | 0;
 i75 = i73 + 16 | 0;
 HEAP32[i75 >> 2] = i20;
 HEAP32[i73 + 20 >> 2] = i18;
 i76 = i73 + 24 | 0;
 HEAP32[i76 >> 2] = i14;
 if (Math_fround(HEAPF32[i1 >> 2]) > Math_fround(2.0)) {
  _fwrite(13899, 158, 1, HEAP32[2032] | 0) | 0;
  i90 = 0;
  STACKTOP = i91;
  return i90 | 0;
 }
 i11 = i9 + 80 | 0;
 i12 = i9 + 84 | 0;
 i66 = HEAP32[i11 >> 2] | 0;
 i7 = i66;
 L5 : do if (((HEAP32[i12 >> 2] | 0) - i66 | 0) == 120) {
  i1 = HEAP32[i9 + 32 >> 2] | 0;
  i8 = HEAP32[i9 + 36 >> 2] | 0;
  L7 : do if ((i1 | 0) != (i8 | 0)) {
   i3 = 0;
   i2 = 0;
   do {
    i5 = HEAP8[i1 + 11 >> 0] | 0;
    i6 = i5 << 24 >> 24 < 0;
    if (i6) i4 = HEAP32[i1 >> 2] | 0; else i4 = i1;
    if ((HEAP8[i4 >> 0] | 0) == -32) break L7;
    if (i6) i4 = HEAP32[i1 >> 2] | 0; else i4 = i1;
    if ((HEAP8[i4 >> 0] | 0) == -18) {
     if (i6) i4 = HEAP32[i1 + 4 >> 2] | 0; else i4 = i5 & 255;
     if (i4 >>> 0 > 14) {
      if (i6) i2 = HEAP32[i1 >> 2] | 0; else i2 = i1;
      i3 = 1;
      i2 = HEAP8[i2 + 14 >> 0] | 0;
     }
    }
    i1 = i1 + 12 | 0;
   } while ((i1 | 0) != (i8 | 0));
   if (i3) {
    if (!(i2 << 24 >> 24)) break L5;
   } else i23 = 24;
  } else i23 = 24; while (0);
  if (((i23 | 0) == 24 ? !((HEAP32[i7 >> 2] | 0) != 82 ? 1 : (HEAP32[i7 + 40 >> 2] | 0) != 71) : 0) ? (HEAP32[i7 + 80 >> 2] | 0) == 66 : 0) break;
  switch (HEAP32[i9 + 12 >> 2] | 0) {
  case 1:
   {
    if (((((((HEAP32[i9 + 16 >> 2] | 0) == 1 ? (HEAP32[i7 + 4 >> 2] | 0) == 1 : 0) ? (HEAP32[i7 + 8 >> 2] | 0) == 1 : 0) ? (HEAP32[i7 + 44 >> 2] | 0) == 1 : 0) ? (HEAP32[i7 + 48 >> 2] | 0) == 1 : 0) ? (HEAP32[i7 + 84 >> 2] | 0) == 1 : 0) ? (HEAP32[i7 + 88 >> 2] | 0) == 1 : 0) i8 = 0; else i23 = 42;
    break;
   }
  case 2:
   {
    if (((((((HEAP32[i9 + 16 >> 2] | 0) == 2 ? (HEAP32[i7 + 4 >> 2] | 0) == 2 : 0) ? (HEAP32[i7 + 8 >> 2] | 0) == 2 : 0) ? (HEAP32[i7 + 44 >> 2] | 0) == 1 : 0) ? (HEAP32[i7 + 48 >> 2] | 0) == 1 : 0) ? (HEAP32[i7 + 84 >> 2] | 0) == 1 : 0) ? (HEAP32[i7 + 88 >> 2] | 0) == 1 : 0) i8 = 1; else i23 = 42;
    break;
   }
  default:
   i23 = 42;
  }
  if ((i23 | 0) == 42) {
   i3 = HEAP32[2032] | 0;
   _fwrite(14104, 29, 1, i3) | 0;
   i1 = HEAP32[i11 >> 2] | 0;
   if ((HEAP32[i12 >> 2] | 0) != (i1 | 0)) {
    i2 = 0;
    do {
     i89 = i1;
     i90 = HEAP32[i89 + (i2 * 40 | 0) + 8 >> 2] | 0;
     HEAP32[i13 >> 2] = HEAP32[i89 + (i2 * 40 | 0) + 4 >> 2];
     HEAP32[i13 + 4 >> 2] = i90;
     _fprintf(i3, 14134, i13) | 0;
     i2 = i2 + 1 | 0;
     i1 = HEAP32[i11 >> 2] | 0;
    } while (i2 >>> 0 < (((HEAP32[i12 >> 2] | 0) - i1 | 0) / 40 | 0) >>> 0);
   }
   _fputc(10, i3) | 0;
   i90 = 0;
   STACKTOP = i91;
   return i90 | 0;
  }
  __ZN7guetzli8JPEGDataC2ERKS0_(i89, i9);
  HEAP32[i90 >> 2] = 0;
  HEAP32[i90 + 4 >> 2] = 0;
  HEAP32[i90 + 8 >> 2] = 0;
  i7 = i90 + 11 | 0;
  HEAP8[i90 >> 0] = 0;
  HEAP8[i7 >> 0] = 0;
  i66 = (HEAP8[i10 >> 0] | 0) != 0;
  HEAP32[i77 >> 2] = 6;
  HEAP32[i77 + 4 >> 2] = i90;
  HEAP32[i88 >> 2] = HEAP32[i77 >> 2];
  HEAP32[i88 + 4 >> 2] = HEAP32[i77 + 4 >> 2];
  if (!(__ZN7guetzli9WriteJpegERKNS_8JPEGDataEbNS_10JPEGOutputE(i89, i66, i88) | 0)) ___assert_fail(14198, 14200, 119, 14224);
  i5 = i18 + 32 | 0;
  HEAPF64[i5 >> 3] = -1.0;
  i3 = HEAP8[i7 >> 0] | 0;
  i6 = i90 + 4 | 0;
  HEAP32[i85 >> 2] = i3 << 24 >> 24 < 0 ? HEAP32[i6 >> 2] | 0 : i3 & 255;
  _snprintf(i88, 1024, 14143, i85) | 0;
  HEAP8[i88 + 1023 >> 0] = 0;
  HEAP32[i15 >> 2] = 0;
  HEAP32[i15 + 4 >> 2] = 0;
  HEAP32[i15 + 8 >> 2] = 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i15, i88, _strlen(i88) | 0);
  i3 = i14 + 12 | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  if (i1 | 0) {
   i66 = HEAP8[i15 + 11 >> 0] | 0;
   i65 = i66 << 24 >> 24 < 0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i1, i65 ? HEAP32[i15 >> 2] | 0 : i15, i65 ? HEAP32[i15 + 4 >> 2] | 0 : i66 & 255) | 0;
  }
  i2 = i14 + 16 | 0;
  i1 = HEAP32[i2 >> 2] | 0;
  if (i1 | 0) _fputs((HEAP8[i15 + 11 >> 0] | 0) < 0 ? HEAP32[i15 >> 2] | 0 : i15, i1) | 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i15);
  if (i20) {
   i7 = i89 + 80 | 0;
   i6 = HEAP32[i7 >> 2] | 0;
   i5 = HEAP32[i89 + 56 >> 2] | 0;
   i3 = HEAP32[i5 + ((HEAP32[i6 + 12 >> 2] | 0) * 24 | 0) >> 2] | 0;
   _memcpy(i68 | 0, i3 | 0, 256) | 0;
   i1 = HEAP32[i6 + 32 >> 2] | 0;
   i2 = HEAP32[i6 + 28 >> 2] | 0;
   i4 = i2;
   if ((i1 | 0) != (i2 | 0)) {
    i2 = i1 - i2 >> 1;
    i1 = 0;
    do {
     i66 = i4 + (i1 << 1) | 0;
     HEAP16[i66 >> 1] = Math_imul(HEAP16[i66 >> 1] | 0, HEAP32[i3 + (((i1 | 0) % 64 | 0) << 2) >> 2] | 0) | 0;
     i1 = i1 + 1 | 0;
    } while (i1 >>> 0 < i2 >>> 0);
   }
   i3 = HEAP32[i5 + ((HEAP32[i6 + 52 >> 2] | 0) * 24 | 0) >> 2] | 0;
   _memcpy(i68 + 256 | 0, i3 | 0, 256) | 0;
   i1 = HEAP32[i6 + 72 >> 2] | 0;
   i2 = HEAP32[i6 + 68 >> 2] | 0;
   i4 = i2;
   if ((i1 | 0) != (i2 | 0)) {
    i2 = i1 - i2 >> 1;
    i1 = 0;
    do {
     i66 = i4 + (i1 << 1) | 0;
     HEAP16[i66 >> 1] = Math_imul(HEAP16[i66 >> 1] | 0, HEAP32[i3 + (((i1 | 0) % 64 | 0) << 2) >> 2] | 0) | 0;
     i1 = i1 + 1 | 0;
    } while (i1 >>> 0 < i2 >>> 0);
   }
   i4 = HEAP32[i5 + ((HEAP32[i6 + 92 >> 2] | 0) * 24 | 0) >> 2] | 0;
   _memcpy(i68 + 512 | 0, i4 | 0, 256) | 0;
   i2 = HEAP32[i6 + 112 >> 2] | 0;
   i1 = HEAP32[i6 + 108 >> 2] | 0;
   i3 = i1;
   if ((i2 | 0) != (i1 | 0)) {
    i2 = i2 - i1 >> 1;
    i1 = 0;
    do {
     i66 = i3 + (i1 << 1) | 0;
     HEAP16[i66 >> 1] = Math_imul(HEAP16[i66 >> 1] | 0, HEAP32[i4 + (((i1 | 0) % 64 | 0) << 2) >> 2] | 0) | 0;
     i1 = i1 + 1 | 0;
    } while (i1 >>> 0 < i2 >>> 0);
   }
   i1 = 0;
   do {
    HEAP32[i67 + (i1 << 2) >> 2] = 1;
    i1 = i1 + 1 | 0;
   } while ((i1 | 0) != 64);
   i1 = 0;
   do {
    HEAP32[i67 + 256 + (i1 << 2) >> 2] = 1;
    i1 = i1 + 1 | 0;
   } while ((i1 | 0) != 64);
   i1 = 0;
   do {
    HEAP32[i67 + 512 + (i1 << 2) >> 2] = 1;
    i1 = i1 + 1 | 0;
   } while ((i1 | 0) != 64);
   __ZN7guetzli15SaveQuantTablesEPA64_KiPNS_8JPEGDataE(i67, i89);
   i66 = i89 + 4 | 0;
   __ZN7guetzli11OutputImageC2Eii(i87, HEAP32[i89 >> 2] | 0, HEAP32[i66 >> 2] | 0);
   __ZN7guetzli11OutputImage16CopyFromJpegDataERKNS_8JPEGDataE(i87, i89);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 8 >> 2] & 3](i20, i87);
   __ZN7guetzli12_GLOBAL__N_19Processor11MaybeOutputERKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE(i73, i90);
   if (i8) {
    i1 = 1;
    i2 = 1;
   } else {
    i5 = HEAP8[i21 >> 0] | 0;
    L109 : do if (!(i5 << 24 >> 24)) if (HEAP8[i22 >> 0] | 0) {
     i4 = HEAP32[i7 >> 2] | 0;
     i1 = HEAP32[i4 + 72 >> 2] | 0;
     i2 = HEAP32[i4 + 68 >> 2] | 0;
     i3 = i2;
     if ((i1 | 0) != (i2 | 0)) {
      i2 = i1 - i2 >> 1;
      i1 = 0;
      do {
       if (HEAP16[i3 + (i1 << 1) >> 1] | 0) {
        i2 = 1;
        break L109;
       }
       i1 = i1 + 1 | 0;
      } while (i1 >>> 0 < i2 >>> 0);
     }
     i2 = HEAP32[i4 + 112 >> 2] | 0;
     i1 = HEAP32[i4 + 108 >> 2] | 0;
     i3 = i1;
     if ((i2 | 0) != (i1 | 0)) {
      i2 = i2 - i1 >> 1;
      i1 = 0;
      while (1) {
       if (HEAP16[i3 + (i1 << 1) >> 1] | 0) {
        i2 = 1;
        break L109;
       }
       i1 = i1 + 1 | 0;
       if (i1 >>> 0 >= i2 >>> 0) {
        i2 = 0;
        break;
       }
      }
     } else i2 = 0;
    } else i2 = 0; else i2 = 1; while (0);
    i1 = i5 << 24 >> 24 != 0;
   }
   i1 = i1 & 1;
   L124 : do if ((i1 | 0) <= (i2 | 0)) {
    i12 = i69 + 8 | 0;
    i13 = i88 + 4 | 0;
    i14 = i88 + 8 | 0;
    i15 = i88 + 12 | 0;
    i16 = i88 + 16 | 0;
    i17 = i88 + 20 | 0;
    i18 = i88 + 8 | 0;
    i20 = i88 + 16 | 0;
    i21 = i88 + 24 | 0;
    i22 = i88 + 44 | 0;
    i24 = i88 + 32 | 0;
    i25 = i88 + 36 | 0;
    i26 = i88 + 40 | 0;
    i27 = i77 + 776 | 0;
    i28 = i77 + 788 | 0;
    i29 = i77 + 800 | 0;
    i30 = i77 + 768 | 0;
    i31 = i85 + 768 | 0;
    i32 = i27 + 11 | 0;
    i33 = i77 + 780 | 0;
    i34 = i85 + 776 | 0;
    i35 = i34 + 11 | 0;
    i36 = i85 + 780 | 0;
    i37 = i85 + 788 | 0;
    i38 = i77 + 788 | 0;
    i39 = i77 + 792 | 0;
    i40 = i85 + 800 | 0;
    i41 = i72 + 12 | 0;
    i42 = i85 + 788 | 0;
    i43 = i85 + 792 | 0;
    i44 = i72 + 24 | 0;
    i45 = i77 + 1023 | 0;
    i46 = i77 + 1023 | 0;
    i47 = i79 + 11 | 0;
    i48 = i79 + 4 | 0;
    i49 = i77 + 1023 | 0;
    i50 = i80 + 11 | 0;
    i51 = i80 + 4 | 0;
    i52 = i77 + 1023 | 0;
    i53 = i81 + 11 | 0;
    i54 = i81 + 4 | 0;
    i55 = i88 + 32 | 0;
    i56 = i71 + 256 | 0;
    i57 = i71 + 512 | 0;
    i58 = i70 + 80 | 0;
    i59 = i70 + 84 | 0;
    i60 = i72 + 12 | 0;
    i61 = i69 + 8 | 0;
    i62 = i69 + 12 | 0;
    i63 = i72 + 16 | 0;
    i64 = i78 + 11 | 0;
    i65 = i78 + 4 | 0;
    L126 : while (1) {
     __ZN7guetzli11OutputImageC2Eii(i69, HEAP32[i89 >> 2] | 0, HEAP32[i66 >> 2] | 0);
     __ZN7guetzli11OutputImage16CopyFromJpegDataERKNS_8JPEGDataE(i69, i89);
     __ZN7guetzli8JPEGDataC2ERKS0_(i70, i89);
     i11 = (i1 | 0) != 0;
     if (i11) {
      i3 = HEAP32[i12 >> 2] | 0;
      do if ((HEAP32[i3 + 316 >> 2] | 0) <= 1) {
       if ((HEAP32[i3 + 320 >> 2] | 0) > 1) break;
       HEAP32[i88 >> 2] = 2;
       HEAP32[i13 >> 2] = 2;
       HEAP32[i14 >> 2] = 2;
       HEAP32[i15 >> 2] = 2;
       HEAP32[i16 >> 2] = 16843009;
       HEAP8[i17 >> 0] = HEAP8[i74 >> 0] | 0;
       __ZN7guetzli11OutputImage10DownsampleERKNS0_16DownsampleConfigE(i69, i88);
      } while (0);
      __ZNK7guetzli11OutputImage14SaveToJpegDataEPNS_8JPEGDataE(i69, i70);
     }
     _memcpy(i71 | 0, i68 | 0, 768) | 0;
     HEAP32[i72 >> 2] = 0;
     HEAP32[i72 + 4 >> 2] = 0;
     HEAP32[i72 + 8 >> 2] = 0;
     HEAP32[i72 + 12 >> 2] = 0;
     HEAP32[i72 + 16 >> 2] = 0;
     HEAP32[i72 + 20 >> 2] = 0;
     i3 = HEAP32[i76 >> 2] | 0;
     HEAP8[i88 >> 0] = i11 & 1;
     HEAPF64[i18 >> 3] = -1.0;
     HEAPF64[i20 >> 3] = -1.0;
     HEAP32[i21 >> 2] = 0;
     HEAP32[i21 + 4 >> 2] = 0;
     HEAP32[i21 + 8 >> 2] = 0;
     HEAP32[i21 + 12 >> 2] = 0;
     HEAP32[i21 + 16 >> 2] = 0;
     HEAP32[i22 >> 2] = i3;
     i3 = 0;
     d19 = 0.0;
     do {
      d19 = d19 + 1.0 / (+(HEAP32[2968 + (i3 << 2) >> 2] | 0) * .5 + 1.0) * 3.0;
      i3 = i3 + 1 | 0;
     } while ((i3 | 0) != 64);
     HEAPF64[i21 >> 3] = d19;
     __ZN7guetzli12_GLOBAL__N_19Processor14TryQuantMatrixERKNS_8JPEGDataEfPA64_i(i85, i73, i70, i71);
     do {
      if (!(__ZN7guetzli20QuantMatrixGenerator7GetNextEPA64_i(i88, i67) | 0)) {
       i23 = 112;
       break;
      }
      __ZN7guetzli12_GLOBAL__N_19Processor14TryQuantMatrixERKNS_8JPEGDataEfPA64_i(i77, i73, i70, i67);
      i3 = HEAP32[i25 >> 2] | 0;
      i5 = i3;
      do if ((i3 | 0) == (HEAP32[i26 >> 2] | 0)) {
       i3 = HEAP32[i24 >> 2] | 0;
       i6 = ((i5 - i3 | 0) / 816 | 0) + 1 | 0;
       if (i6 >>> 0 > 5263440) {
        __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i24);
        i3 = HEAP32[i24 >> 2] | 0;
        i4 = HEAP32[i26 >> 2] | 0;
        i5 = HEAP32[i25 >> 2] | 0;
       } else i4 = i5;
       i10 = (i4 - i3 | 0) / 816 | 0;
       i23 = i10 << 1;
       i6 = i10 >>> 0 < 2631720 ? (i23 >>> 0 < i6 >>> 0 ? i6 : i23) : 5263440;
       i3 = (i5 - i3 | 0) / 816 | 0;
       if (!i6) i4 = 0; else {
        if (i6 >>> 0 > 5263440) break L126;
        i4 = __Znwj(i6 * 816 | 0) | 0;
       }
       i7 = i4 + (i3 * 816 | 0) | 0;
       i5 = i7;
       i10 = i4 + (i6 * 816 | 0) | 0;
       _memcpy(i7 | 0, i77 | 0, 769) | 0;
       __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i4 + (i3 * 816 | 0) + 776 | 0, i27);
       __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i4 + (i3 * 816 | 0) + 788 | 0, i28);
       i9 = i4 + (i3 * 816 | 0) + 800 | 0;
       HEAP32[i9 >> 2] = HEAP32[i29 >> 2];
       HEAP32[i9 + 4 >> 2] = HEAP32[i29 + 4 >> 2];
       HEAP32[i9 + 8 >> 2] = HEAP32[i29 + 8 >> 2];
       HEAP32[i9 + 12 >> 2] = HEAP32[i29 + 12 >> 2];
       i9 = i7 + 816 | 0;
       i6 = HEAP32[i24 >> 2] | 0;
       i3 = HEAP32[i25 >> 2] | 0;
       if ((i3 | 0) == (i6 | 0)) {
        i3 = i5;
        i8 = i6;
        i4 = i6;
       } else {
        i4 = i7;
        do {
         i8 = i3;
         i3 = i3 + -816 | 0;
         _memcpy(i4 + -816 | 0, i3 | 0, 769) | 0;
         i23 = i4 + -40 | 0;
         i7 = i8 + -40 | 0;
         HEAP32[i23 >> 2] = HEAP32[i7 >> 2];
         HEAP32[i23 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
         HEAP32[i23 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
         HEAP32[i7 >> 2] = 0;
         HEAP32[i7 + 4 >> 2] = 0;
         HEAP32[i7 + 8 >> 2] = 0;
         i7 = i4 + -28 | 0;
         i23 = i8 + -28 | 0;
         HEAP32[i7 >> 2] = 0;
         i92 = i4 + -24 | 0;
         HEAP32[i92 >> 2] = 0;
         HEAP32[i4 + -20 >> 2] = 0;
         HEAP32[i7 >> 2] = HEAP32[i23 >> 2];
         i7 = i8 + -24 | 0;
         HEAP32[i92 >> 2] = HEAP32[i7 >> 2];
         i92 = i8 + -20 | 0;
         HEAP32[i4 + -20 >> 2] = HEAP32[i92 >> 2];
         HEAP32[i92 >> 2] = 0;
         HEAP32[i7 >> 2] = 0;
         HEAP32[i23 >> 2] = 0;
         i23 = i4 + -16 | 0;
         i8 = i8 + -16 | 0;
         HEAP32[i23 >> 2] = HEAP32[i8 >> 2];
         HEAP32[i23 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
         HEAP32[i23 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
         HEAP32[i23 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
         i4 = i5 + -816 | 0;
         i5 = i4;
        } while ((i3 | 0) != (i6 | 0));
        i3 = i5;
        i8 = HEAP32[i24 >> 2] | 0;
        i4 = HEAP32[i25 >> 2] | 0;
       }
       HEAP32[i24 >> 2] = i3;
       HEAP32[i25 >> 2] = i9;
       HEAP32[i26 >> 2] = i10;
       i7 = i8;
       if ((i4 | 0) != (i7 | 0)) do {
        i3 = HEAP32[i4 + -28 >> 2] | 0;
        if (i3 | 0) {
         i5 = i4 + -24 | 0;
         i6 = HEAP32[i5 >> 2] | 0;
         if ((i6 | 0) != (i3 | 0)) HEAP32[i5 >> 2] = i6 + (~((i6 + -4 - i3 | 0) >>> 2) << 2);
         __ZdlPv(i3);
        }
        __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i4 + -40 | 0);
        i4 = i4 + -816 | 0;
       } while ((i4 | 0) != (i7 | 0));
       if (!i8) {
        i3 = 0;
        d19 = 0.0;
        break;
       }
       __ZdlPv(i8);
       i3 = 0;
       d19 = 0.0;
      } else {
       _memcpy(i3 | 0, i77 | 0, 769) | 0;
       __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i3 + 776 | 0, i27);
       __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i3 + 788 | 0, i28);
       i3 = i3 + 800 | 0;
       HEAP32[i3 >> 2] = HEAP32[i29 >> 2];
       HEAP32[i3 + 4 >> 2] = HEAP32[i29 + 4 >> 2];
       HEAP32[i3 + 8 >> 2] = HEAP32[i29 + 8 >> 2];
       HEAP32[i3 + 12 >> 2] = HEAP32[i29 + 12 >> 2];
       HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 816;
       i3 = 0;
       d19 = 0.0;
      } while (0);
      do {
       d19 = d19 + (+(HEAP32[i77 + (i3 << 2) >> 2] | 0) + -1.0) * .5 * (1.0 / (+(HEAP32[2968 + (i3 << 2) >> 2] | 0) * .5 + 1.0));
       i3 = i3 + 1 | 0;
      } while ((i3 | 0) != 64);
      i3 = 0;
      do {
       d19 = d19 + (+(HEAP32[i77 + 256 + (i3 << 2) >> 2] | 0) + -1.0) * .5 * (1.0 / (+(HEAP32[2968 + (i3 << 2) >> 2] | 0) * .5 + 1.0));
       i3 = i3 + 1 | 0;
      } while ((i3 | 0) != 64);
      i3 = 0;
      do {
       d19 = d19 + (+(HEAP32[i77 + 512 + (i3 << 2) >> 2] | 0) + -1.0) * .5 * (1.0 / (+(HEAP32[2968 + (i3 << 2) >> 2] | 0) * .5 + 1.0));
       i3 = i3 + 1 | 0;
      } while ((i3 | 0) != 64);
      if (!(HEAP8[i30 >> 0] | 0)) {
       d93 = +HEAPF64[i20 >> 3];
       HEAPF64[i20 >> 3] = d93 == -1.0 | d19 < d93 ? d19 : d93;
       if (!(HEAP8[i31 >> 0] | 0)) i23 = 139; else i23 = 142;
      } else {
       d93 = +HEAPF64[i18 >> 3];
       HEAPF64[i18 >> 3] = d93 < d19 ? d19 : d93;
       if (!(HEAP8[i31 >> 0] | 0)) i23 = 140; else i23 = 139;
      }
      if ((i23 | 0) == 139) {
       i23 = HEAP8[i32 >> 0] | 0;
       i92 = HEAP8[i35 >> 0] | 0;
       if ((i23 << 24 >> 24 < 0 ? HEAP32[i33 >> 2] | 0 : i23 & 255) >>> 0 < (i92 << 24 >> 24 < 0 ? HEAP32[i36 >> 2] | 0 : i92 & 255) >>> 0) i23 = 140; else i23 = 142;
      }
      do if ((i23 | 0) == 140) {
       i23 = 0;
       _memcpy(i85 | 0, i77 | 0, 769) | 0;
       __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i34, i27) | 0;
       __ZNSt3__26vectorIfNS_9allocatorIfEEE6assignIPfEENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIfNS_15iterator_traitsIS7_E9referenceEEE5valueEvE4typeES7_S7_(i37, HEAP32[i38 >> 2] | 0, HEAP32[i39 >> 2] | 0);
       HEAP32[i40 >> 2] = HEAP32[i29 >> 2];
       HEAP32[i40 + 4 >> 2] = HEAP32[i29 + 4 >> 2];
       HEAP32[i40 + 8 >> 2] = HEAP32[i29 + 8 >> 2];
       HEAP32[i40 + 12 >> 2] = HEAP32[i29 + 12 >> 2];
       if (!(HEAP8[i30 >> 0] | 0)) {
        i23 = 142;
        break;
       }
       i92 = HEAP32[i75 >> 2] | 0;
       if (FUNCTION_TABLE_iid[HEAP32[(HEAP32[i92 >> 2] | 0) + 20 >> 2] & 1](i92, .949999988079071) | 0) i23 = 142; else i3 = 2;
      } while (0);
      if ((i23 | 0) == 142) {
       i23 = 0;
       i3 = 0;
      }
      i4 = HEAP32[i38 >> 2] | 0;
      if (i4 | 0) {
       i5 = HEAP32[i39 >> 2] | 0;
       if ((i5 | 0) != (i4 | 0)) HEAP32[i39 >> 2] = i5 + (~((i5 + -4 - i4 | 0) >>> 2) << 2);
       __ZdlPv(i4);
      }
      __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i27);
     } while (!(i3 | 0));
     _memcpy(i71 | 0, i85 | 0, 768) | 0;
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i72, i34) | 0;
     __ZNSt3__26vectorIfNS_9allocatorIfEEE6assignIPfEENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIfNS_15iterator_traitsIS7_E9referenceEEE5valueEvE4typeES7_S7_(i41, HEAP32[i42 >> 2] | 0, HEAP32[i43 >> 2] | 0);
     HEAP32[i44 >> 2] = HEAP32[i40 >> 2];
     HEAP32[i44 + 4 >> 2] = HEAP32[i40 + 4 >> 2];
     HEAP32[i44 + 8 >> 2] = HEAP32[i40 + 8 >> 2];
     HEAP32[i44 + 12 >> 2] = HEAP32[i40 + 12 >> 2];
     HEAP32[i86 >> 2] = i11 ? 14288 : 14295;
     _snprintf(i77, 1024, 14253, i86) | 0;
     HEAP8[i45 >> 0] = 0;
     i3 = HEAP32[i76 >> 2] | 0;
     HEAP32[i78 >> 2] = 0;
     HEAP32[i78 + 4 >> 2] = 0;
     HEAP32[i78 + 8 >> 2] = 0;
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i78, i77, _strlen(i77) | 0);
     i9 = i3 + 12 | 0;
     i4 = HEAP32[i9 >> 2] | 0;
     if (i4 | 0) {
      i92 = HEAP8[i64 >> 0] | 0;
      i23 = i92 << 24 >> 24 < 0;
      __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i4, i23 ? HEAP32[i78 >> 2] | 0 : i78, i23 ? HEAP32[i65 >> 2] | 0 : i92 & 255) | 0;
     }
     i8 = i3 + 16 | 0;
     i3 = HEAP32[i8 >> 2] | 0;
     if (i3 | 0) _fputs((HEAP8[i64 >> 0] | 0) < 0 ? HEAP32[i78 >> 2] | 0 : i78, i3) | 0;
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i78);
     i7 = 0;
     do {
      i6 = i7 << 3;
      i5 = 0;
      do {
       i4 = 0;
       do {
        HEAP32[i84 >> 2] = HEAP32[i71 + (i5 << 8) + (i4 + i6 << 2) >> 2];
        _snprintf(i77, 1024, 14302, i84) | 0;
        HEAP8[i46 >> 0] = 0;
        HEAP32[i79 >> 2] = 0;
        HEAP32[i79 + 4 >> 2] = 0;
        HEAP32[i79 + 8 >> 2] = 0;
        __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i79, i77, _strlen(i77) | 0);
        i3 = HEAP32[i9 >> 2] | 0;
        if (i3 | 0) {
         i92 = HEAP8[i47 >> 0] | 0;
         i23 = i92 << 24 >> 24 < 0;
         __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i3, i23 ? HEAP32[i79 >> 2] | 0 : i79, i23 ? HEAP32[i48 >> 2] | 0 : i92 & 255) | 0;
        }
        i3 = HEAP32[i8 >> 2] | 0;
        if (i3 | 0) _fputs((HEAP8[i47 >> 0] | 0) < 0 ? HEAP32[i79 >> 2] | 0 : i79, i3) | 0;
        __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i79);
        i4 = i4 + 1 | 0;
       } while ((i4 | 0) < 8);
       _snprintf(i77, 1024, 14307, i83) | 0;
       HEAP8[i49 >> 0] = 0;
       HEAP32[i80 >> 2] = 0;
       HEAP32[i80 + 4 >> 2] = 0;
       HEAP32[i80 + 8 >> 2] = 0;
       __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i80, i77, _strlen(i77) | 0);
       i3 = HEAP32[i9 >> 2] | 0;
       if (i3 | 0) {
        i92 = HEAP8[i50 >> 0] | 0;
        i23 = i92 << 24 >> 24 < 0;
        __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i3, i23 ? HEAP32[i80 >> 2] | 0 : i80, i23 ? HEAP32[i51 >> 2] | 0 : i92 & 255) | 0;
       }
       i3 = HEAP32[i8 >> 2] | 0;
       if (i3 | 0) _fputs((HEAP8[i50 >> 0] | 0) < 0 ? HEAP32[i80 >> 2] | 0 : i80, i3) | 0;
       __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i80);
       i5 = i5 + 1 | 0;
      } while ((i5 | 0) < 3);
      _snprintf(i77, 1024, 14141, i82) | 0;
      HEAP8[i52 >> 0] = 0;
      HEAP32[i81 >> 2] = 0;
      HEAP32[i81 + 4 >> 2] = 0;
      HEAP32[i81 + 8 >> 2] = 0;
      __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i81, i77, _strlen(i77) | 0);
      i3 = HEAP32[i9 >> 2] | 0;
      if (i3 | 0) {
       i92 = HEAP8[i53 >> 0] | 0;
       i23 = i92 << 24 >> 24 < 0;
       __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i3, i23 ? HEAP32[i81 >> 2] | 0 : i81, i23 ? HEAP32[i54 >> 2] | 0 : i92 & 255) | 0;
      }
      i3 = HEAP32[i8 >> 2] | 0;
      if (i3 | 0) _fputs((HEAP8[i53 >> 0] | 0) < 0 ? HEAP32[i81 >> 2] | 0 : i81, i3) | 0;
      __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i81);
      i7 = i7 + 1 | 0;
     } while ((i7 | 0) < 8);
     i8 = (HEAP8[i31 >> 0] | 0) == 0;
     i3 = HEAP32[i42 >> 2] | 0;
     if (i3 | 0) {
      i4 = HEAP32[i43 >> 2] | 0;
      if ((i4 | 0) != (i3 | 0)) HEAP32[i43 >> 2] = i4 + (~((i4 + -4 - i3 | 0) >>> 2) << 2);
      __ZdlPv(i3);
     }
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i34);
     i3 = HEAP32[i55 >> 2] | 0;
     if (i3 | 0) {
      i4 = HEAP32[i25 >> 2] | 0;
      if ((i4 | 0) != (i3 | 0)) {
       do {
        HEAP32[i25 >> 2] = i4 + -816;
        i5 = HEAP32[i4 + -28 >> 2] | 0;
        if (i5 | 0) {
         i6 = i4 + -24 | 0;
         i7 = HEAP32[i6 >> 2] | 0;
         if ((i7 | 0) != (i5 | 0)) HEAP32[i6 >> 2] = i7 + (~((i7 + -4 - i5 | 0) >>> 2) << 2);
         __ZdlPv(i5);
        }
        __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i4 + -40 | 0);
        i4 = HEAP32[i25 >> 2] | 0;
       } while ((i4 | 0) != (i3 | 0));
       i3 = HEAP32[i55 >> 2] | 0;
      }
      __ZdlPv(i3);
     }
     if (i8) {
      i3 = 0;
      do {
       HEAP32[i71 + (i3 << 2) >> 2] = 1;
       i3 = i3 + 1 | 0;
      } while ((i3 | 0) != 64);
      i3 = 0;
      do {
       HEAP32[i71 + 256 + (i3 << 2) >> 2] = 1;
       i3 = i3 + 1 | 0;
      } while ((i3 | 0) != 64);
      i3 = 0;
      do {
       HEAP32[i71 + 512 + (i3 << 2) >> 2] = 1;
       i3 = i3 + 1 | 0;
      } while ((i3 | 0) != 64);
     }
     __ZN7guetzli20OutputImageComponent23ApplyGlobalQuantizationEPKi(HEAP32[i12 >> 2] | 0, i71);
     __ZN7guetzli20OutputImageComponent23ApplyGlobalQuantizationEPKi((HEAP32[i12 >> 2] | 0) + 308 | 0, i56);
     __ZN7guetzli20OutputImageComponent23ApplyGlobalQuantizationEPKi((HEAP32[i12 >> 2] | 0) + 616 | 0, i57);
     if (i11) {
      __ZN7guetzli12_GLOBAL__N_19Processor22SelectFrequencyMaskingERKNS_8JPEGDataEPNS_11OutputImageEhdb(i73, i70, i69, 1, ((HEAP32[i59 >> 2] | 0) - (HEAP32[i58 >> 2] | 0) | 0) == 40 ? 1.0 : .9700000286102295, 0);
      __ZN7guetzli12_GLOBAL__N_19Processor22SelectFrequencyMaskingERKNS_8JPEGDataEPNS_11OutputImageEhdb(i73, i70, i69, 6, 1.0, 1);
     } else __ZN7guetzli12_GLOBAL__N_19Processor22SelectFrequencyMaskingERKNS_8JPEGDataEPNS_11OutputImageEhdb(i73, i70, i69, 7, 1.0, 0);
     i3 = HEAP32[i60 >> 2] | 0;
     if (i3 | 0) {
      i4 = HEAP32[i63 >> 2] | 0;
      if ((i4 | 0) != (i3 | 0)) HEAP32[i63 >> 2] = i4 + (~((i4 + -4 - i3 | 0) >>> 2) << 2);
      __ZdlPv(i3);
     }
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i72);
     __ZN7guetzli8JPEGDataD2Ev(i70);
     i3 = HEAP32[i61 >> 2] | 0;
     if (i3 | 0) {
      i4 = HEAP32[i62 >> 2] | 0;
      if ((i4 | 0) != (i3 | 0)) {
       do {
        HEAP32[i62 >> 2] = i4 + -308;
        i5 = HEAP32[i4 + -268 >> 2] | 0;
        if (i5 | 0) {
         i6 = i4 + -264 | 0;
         i7 = HEAP32[i6 >> 2] | 0;
         if ((i7 | 0) != (i5 | 0)) HEAP32[i6 >> 2] = i7 + (~((i7 + -2 - i5 | 0) >>> 1) << 1);
         __ZdlPv(i5);
        }
        i6 = HEAP32[i4 + -280 >> 2] | 0;
        if (i6 | 0) {
         i4 = i4 + -276 | 0;
         i5 = HEAP32[i4 >> 2] | 0;
         if ((i5 | 0) != (i6 | 0)) HEAP32[i4 >> 2] = i5 + (~((i5 + -2 - i6 | 0) >>> 1) << 1);
         __ZdlPv(i6);
        }
        i4 = HEAP32[i62 >> 2] | 0;
       } while ((i4 | 0) != (i3 | 0));
       i3 = HEAP32[i61 >> 2] | 0;
      }
      __ZdlPv(i3);
     }
     if ((i1 | 0) < (i2 | 0)) i1 = i1 + 1 | 0; else break L124;
    }
    i92 = ___cxa_allocate_exception(4) | 0;
    __ZNSt9bad_allocC2Ev(i92);
    ___cxa_throw(i92 | 0, 1784, 8);
   } while (0);
   i7 = i87 + 8 | 0;
   i1 = HEAP32[i7 >> 2] | 0;
   if (i1 | 0) {
    i6 = i87 + 12 | 0;
    i2 = HEAP32[i6 >> 2] | 0;
    if ((i2 | 0) != (i1 | 0)) {
     do {
      HEAP32[i6 >> 2] = i2 + -308;
      i3 = HEAP32[i2 + -268 >> 2] | 0;
      if (i3 | 0) {
       i4 = i2 + -264 | 0;
       i5 = HEAP32[i4 >> 2] | 0;
       if ((i5 | 0) != (i3 | 0)) HEAP32[i4 >> 2] = i5 + (~((i5 + -2 - i3 | 0) >>> 1) << 1);
       __ZdlPv(i3);
      }
      i4 = HEAP32[i2 + -280 >> 2] | 0;
      if (i4 | 0) {
       i2 = i2 + -276 | 0;
       i3 = HEAP32[i2 >> 2] | 0;
       if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -2 - i4 | 0) >>> 1) << 1);
       __ZdlPv(i4);
      }
      i2 = HEAP32[i6 >> 2] | 0;
     } while ((i2 | 0) != (i1 | 0));
     i1 = HEAP32[i7 >> 2] | 0;
    }
    __ZdlPv(i1);
   }
  } else {
   _snprintf(i88, 1024, 14162, i17) | 0;
   HEAP8[i88 + 1023 >> 0] = 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i16 + 4 >> 2] = 0;
   HEAP32[i16 + 8 >> 2] = 0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i16, i88, _strlen(i88) | 0);
   i1 = HEAP32[i3 >> 2] | 0;
   if (i1 | 0) {
    i92 = HEAP8[i16 + 11 >> 0] | 0;
    i87 = i92 << 24 >> 24 < 0;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i1, i87 ? HEAP32[i16 >> 2] | 0 : i16, i87 ? HEAP32[i16 + 4 >> 2] | 0 : i92 & 255) | 0;
   }
   i1 = HEAP32[i2 >> 2] | 0;
   if (i1 | 0) _fputs((HEAP8[i16 + 11 >> 0] | 0) < 0 ? HEAP32[i16 >> 2] | 0 : i16, i1) | 0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i16);
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i18, i90) | 0;
   i4 = Math_imul(HEAP32[i89 + 4 >> 2] | 0, HEAP32[i89 >> 2] | 0) | 0;
   HEAPF32[i17 >> 2] = Math_fround(0.0);
   __ZNSt3__26vectorIfNS_9allocatorIfEEEC2EjRKf(i88, i4, i17);
   i4 = i18 + 12 | 0;
   i1 = HEAP32[i4 >> 2] | 0;
   i3 = i18 + 16 | 0;
   if (!i1) i1 = i18 + 20 | 0; else {
    i2 = HEAP32[i3 >> 2] | 0;
    if ((i2 | 0) != (i1 | 0)) HEAP32[i3 >> 2] = i2 + (~((i2 + -4 - i1 | 0) >>> 2) << 2);
    __ZdlPv(i1);
    i1 = i18 + 20 | 0;
    HEAP32[i1 >> 2] = 0;
    HEAP32[i3 >> 2] = 0;
    HEAP32[i4 >> 2] = 0;
   }
   HEAP32[i4 >> 2] = HEAP32[i88 >> 2];
   HEAP32[i3 >> 2] = HEAP32[i88 + 4 >> 2];
   HEAP32[i1 >> 2] = HEAP32[i88 + 8 >> 2];
   HEAPF64[i18 + 24 >> 3] = 0.0;
   i92 = HEAP8[i7 >> 0] | 0;
   HEAPF64[i5 >> 3] = +((i92 << 24 >> 24 < 0 ? HEAP32[i6 >> 2] | 0 : i92 & 255) >>> 0);
  }
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i90);
  __ZN7guetzli8JPEGDataD2Ev(i89);
  i92 = 1;
  STACKTOP = i91;
  return i92 | 0;
 } while (0);
 _fwrite(14058, 45, 1, HEAP32[2032] | 0) | 0;
 i92 = 0;
 STACKTOP = i91;
 return i92 | 0;
}

function __ZN7guetzli22ComputeBlockIDCTDoubleEPd(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = 0.0, d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 512 | 0;
 i12 = i2;
 d3 = +HEAPF64[i1 >> 3];
 i18 = i1 + 64 | 0;
 d4 = +HEAPF64[i18 >> 3];
 i17 = i1 + 128 | 0;
 d5 = +HEAPF64[i17 >> 3];
 i16 = i1 + 192 | 0;
 d6 = +HEAPF64[i16 >> 3];
 i15 = i1 + 256 | 0;
 d7 = +HEAPF64[i15 >> 3];
 i14 = i1 + 320 | 0;
 d8 = +HEAPF64[i14 >> 3];
 i13 = i1 + 384 | 0;
 d9 = +HEAPF64[i13 >> 3];
 i11 = i1 + 448 | 0;
 d10 = +HEAPF64[i11 >> 3];
 HEAPF64[i12 >> 3] = d3 * .3535533906 + 0.0 + d4 * .4903926402 + d5 * .4619397663 + d6 * .4157348062 + d7 * .3535533906 + d8 * .2777851165 + d9 * .1913417162 + d10 * .097545161;
 HEAPF64[i12 + 64 >> 3] = d3 * .3535533906 + 0.0 + d4 * .4157348062 + d5 * .1913417162 + d6 * -.097545161 + d7 * -.3535533906 + d8 * -.4903926402 + d9 * -.4619397663 + d10 * -.2777851165;
 HEAPF64[i12 + 128 >> 3] = d3 * .3535533906 + 0.0 + d4 * .2777851165 + d5 * -.1913417162 + d6 * -.4903926402 + d7 * -.3535533906 + d8 * .097545161 + d9 * .4619397663 + d10 * .4157348062;
 HEAPF64[i12 + 192 >> 3] = d3 * .3535533906 + 0.0 + d4 * .097545161 + d5 * -.4619397663 + d6 * -.2777851165 + d7 * .3535533906 + d8 * .4157348062 + d9 * -.1913417162 + d10 * -.4903926402;
 HEAPF64[i12 + 256 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.097545161 + d5 * -.4619397663 + d6 * .2777851165 + d7 * .3535533906 + d8 * -.4157348062 + d9 * -.1913417162 + d10 * .4903926402;
 HEAPF64[i12 + 320 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.2777851165 + d5 * -.1913417162 + d6 * .4903926402 + d7 * -.3535533906 + d8 * -.097545161 + d9 * .4619397663 + d10 * -.4157348062;
 HEAPF64[i12 + 384 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.4157348062 + d5 * .1913417162 + d6 * .097545161 + d7 * -.3535533906 + d8 * .4903926402 + d9 * -.4619397663 + d10 * .2777851165;
 HEAPF64[i12 + 448 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.4903926402 + d5 * .4619397663 + d6 * -.4157348062 + d7 * .3535533906 + d8 * -.2777851165 + d9 * .1913417162 + d10 * -.097545161;
 i25 = i12 + 8 | 0;
 d10 = +HEAPF64[i1 + 8 >> 3];
 d9 = +HEAPF64[i1 + 72 >> 3];
 d8 = +HEAPF64[i1 + 136 >> 3];
 d7 = +HEAPF64[i1 + 200 >> 3];
 d6 = +HEAPF64[i1 + 264 >> 3];
 d5 = +HEAPF64[i1 + 328 >> 3];
 d4 = +HEAPF64[i1 + 392 >> 3];
 d3 = +HEAPF64[i1 + 456 >> 3];
 HEAPF64[i25 >> 3] = d10 * .3535533906 + 0.0 + d9 * .4903926402 + d8 * .4619397663 + d7 * .4157348062 + d6 * .3535533906 + d5 * .2777851165 + d4 * .1913417162 + d3 * .097545161;
 HEAPF64[i12 + 72 >> 3] = d10 * .3535533906 + 0.0 + d9 * .4157348062 + d8 * .1913417162 + d7 * -.097545161 + d6 * -.3535533906 + d5 * -.4903926402 + d4 * -.4619397663 + d3 * -.2777851165;
 HEAPF64[i12 + 136 >> 3] = d10 * .3535533906 + 0.0 + d9 * .2777851165 + d8 * -.1913417162 + d7 * -.4903926402 + d6 * -.3535533906 + d5 * .097545161 + d4 * .4619397663 + d3 * .4157348062;
 HEAPF64[i12 + 200 >> 3] = d10 * .3535533906 + 0.0 + d9 * .097545161 + d8 * -.4619397663 + d7 * -.2777851165 + d6 * .3535533906 + d5 * .4157348062 + d4 * -.1913417162 + d3 * -.4903926402;
 HEAPF64[i12 + 264 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.097545161 + d8 * -.4619397663 + d7 * .2777851165 + d6 * .3535533906 + d5 * -.4157348062 + d4 * -.1913417162 + d3 * .4903926402;
 HEAPF64[i12 + 328 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.2777851165 + d8 * -.1913417162 + d7 * .4903926402 + d6 * -.3535533906 + d5 * -.097545161 + d4 * .4619397663 + d3 * -.4157348062;
 HEAPF64[i12 + 392 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.4157348062 + d8 * .1913417162 + d7 * .097545161 + d6 * -.3535533906 + d5 * .4903926402 + d4 * -.4619397663 + d3 * .2777851165;
 HEAPF64[i12 + 456 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.4903926402 + d8 * .4619397663 + d7 * -.4157348062 + d6 * .3535533906 + d5 * -.2777851165 + d4 * .1913417162 + d3 * -.097545161;
 i24 = i12 + 16 | 0;
 d3 = +HEAPF64[i1 + 16 >> 3];
 d4 = +HEAPF64[i1 + 80 >> 3];
 d5 = +HEAPF64[i1 + 144 >> 3];
 d6 = +HEAPF64[i1 + 208 >> 3];
 d7 = +HEAPF64[i1 + 272 >> 3];
 d8 = +HEAPF64[i1 + 336 >> 3];
 d9 = +HEAPF64[i1 + 400 >> 3];
 d10 = +HEAPF64[i1 + 464 >> 3];
 HEAPF64[i24 >> 3] = d3 * .3535533906 + 0.0 + d4 * .4903926402 + d5 * .4619397663 + d6 * .4157348062 + d7 * .3535533906 + d8 * .2777851165 + d9 * .1913417162 + d10 * .097545161;
 HEAPF64[i12 + 80 >> 3] = d3 * .3535533906 + 0.0 + d4 * .4157348062 + d5 * .1913417162 + d6 * -.097545161 + d7 * -.3535533906 + d8 * -.4903926402 + d9 * -.4619397663 + d10 * -.2777851165;
 HEAPF64[i12 + 144 >> 3] = d3 * .3535533906 + 0.0 + d4 * .2777851165 + d5 * -.1913417162 + d6 * -.4903926402 + d7 * -.3535533906 + d8 * .097545161 + d9 * .4619397663 + d10 * .4157348062;
 HEAPF64[i12 + 208 >> 3] = d3 * .3535533906 + 0.0 + d4 * .097545161 + d5 * -.4619397663 + d6 * -.2777851165 + d7 * .3535533906 + d8 * .4157348062 + d9 * -.1913417162 + d10 * -.4903926402;
 HEAPF64[i12 + 272 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.097545161 + d5 * -.4619397663 + d6 * .2777851165 + d7 * .3535533906 + d8 * -.4157348062 + d9 * -.1913417162 + d10 * .4903926402;
 HEAPF64[i12 + 336 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.2777851165 + d5 * -.1913417162 + d6 * .4903926402 + d7 * -.3535533906 + d8 * -.097545161 + d9 * .4619397663 + d10 * -.4157348062;
 HEAPF64[i12 + 400 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.4157348062 + d5 * .1913417162 + d6 * .097545161 + d7 * -.3535533906 + d8 * .4903926402 + d9 * -.4619397663 + d10 * .2777851165;
 HEAPF64[i12 + 464 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.4903926402 + d5 * .4619397663 + d6 * -.4157348062 + d7 * .3535533906 + d8 * -.2777851165 + d9 * .1913417162 + d10 * -.097545161;
 i23 = i12 + 24 | 0;
 d10 = +HEAPF64[i1 + 24 >> 3];
 d9 = +HEAPF64[i1 + 88 >> 3];
 d8 = +HEAPF64[i1 + 152 >> 3];
 d7 = +HEAPF64[i1 + 216 >> 3];
 d6 = +HEAPF64[i1 + 280 >> 3];
 d5 = +HEAPF64[i1 + 344 >> 3];
 d4 = +HEAPF64[i1 + 408 >> 3];
 d3 = +HEAPF64[i1 + 472 >> 3];
 HEAPF64[i23 >> 3] = d10 * .3535533906 + 0.0 + d9 * .4903926402 + d8 * .4619397663 + d7 * .4157348062 + d6 * .3535533906 + d5 * .2777851165 + d4 * .1913417162 + d3 * .097545161;
 HEAPF64[i12 + 88 >> 3] = d10 * .3535533906 + 0.0 + d9 * .4157348062 + d8 * .1913417162 + d7 * -.097545161 + d6 * -.3535533906 + d5 * -.4903926402 + d4 * -.4619397663 + d3 * -.2777851165;
 HEAPF64[i12 + 152 >> 3] = d10 * .3535533906 + 0.0 + d9 * .2777851165 + d8 * -.1913417162 + d7 * -.4903926402 + d6 * -.3535533906 + d5 * .097545161 + d4 * .4619397663 + d3 * .4157348062;
 HEAPF64[i12 + 216 >> 3] = d10 * .3535533906 + 0.0 + d9 * .097545161 + d8 * -.4619397663 + d7 * -.2777851165 + d6 * .3535533906 + d5 * .4157348062 + d4 * -.1913417162 + d3 * -.4903926402;
 HEAPF64[i12 + 280 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.097545161 + d8 * -.4619397663 + d7 * .2777851165 + d6 * .3535533906 + d5 * -.4157348062 + d4 * -.1913417162 + d3 * .4903926402;
 HEAPF64[i12 + 344 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.2777851165 + d8 * -.1913417162 + d7 * .4903926402 + d6 * -.3535533906 + d5 * -.097545161 + d4 * .4619397663 + d3 * -.4157348062;
 HEAPF64[i12 + 408 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.4157348062 + d8 * .1913417162 + d7 * .097545161 + d6 * -.3535533906 + d5 * .4903926402 + d4 * -.4619397663 + d3 * .2777851165;
 HEAPF64[i12 + 472 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.4903926402 + d8 * .4619397663 + d7 * -.4157348062 + d6 * .3535533906 + d5 * -.2777851165 + d4 * .1913417162 + d3 * -.097545161;
 i22 = i12 + 32 | 0;
 d3 = +HEAPF64[i1 + 32 >> 3];
 d4 = +HEAPF64[i1 + 96 >> 3];
 d5 = +HEAPF64[i1 + 160 >> 3];
 d6 = +HEAPF64[i1 + 224 >> 3];
 d7 = +HEAPF64[i1 + 288 >> 3];
 d8 = +HEAPF64[i1 + 352 >> 3];
 d9 = +HEAPF64[i1 + 416 >> 3];
 d10 = +HEAPF64[i1 + 480 >> 3];
 HEAPF64[i22 >> 3] = d3 * .3535533906 + 0.0 + d4 * .4903926402 + d5 * .4619397663 + d6 * .4157348062 + d7 * .3535533906 + d8 * .2777851165 + d9 * .1913417162 + d10 * .097545161;
 HEAPF64[i12 + 96 >> 3] = d3 * .3535533906 + 0.0 + d4 * .4157348062 + d5 * .1913417162 + d6 * -.097545161 + d7 * -.3535533906 + d8 * -.4903926402 + d9 * -.4619397663 + d10 * -.2777851165;
 HEAPF64[i12 + 160 >> 3] = d3 * .3535533906 + 0.0 + d4 * .2777851165 + d5 * -.1913417162 + d6 * -.4903926402 + d7 * -.3535533906 + d8 * .097545161 + d9 * .4619397663 + d10 * .4157348062;
 HEAPF64[i12 + 224 >> 3] = d3 * .3535533906 + 0.0 + d4 * .097545161 + d5 * -.4619397663 + d6 * -.2777851165 + d7 * .3535533906 + d8 * .4157348062 + d9 * -.1913417162 + d10 * -.4903926402;
 HEAPF64[i12 + 288 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.097545161 + d5 * -.4619397663 + d6 * .2777851165 + d7 * .3535533906 + d8 * -.4157348062 + d9 * -.1913417162 + d10 * .4903926402;
 HEAPF64[i12 + 352 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.2777851165 + d5 * -.1913417162 + d6 * .4903926402 + d7 * -.3535533906 + d8 * -.097545161 + d9 * .4619397663 + d10 * -.4157348062;
 HEAPF64[i12 + 416 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.4157348062 + d5 * .1913417162 + d6 * .097545161 + d7 * -.3535533906 + d8 * .4903926402 + d9 * -.4619397663 + d10 * .2777851165;
 HEAPF64[i12 + 480 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.4903926402 + d5 * .4619397663 + d6 * -.4157348062 + d7 * .3535533906 + d8 * -.2777851165 + d9 * .1913417162 + d10 * -.097545161;
 i21 = i12 + 40 | 0;
 d10 = +HEAPF64[i1 + 40 >> 3];
 d9 = +HEAPF64[i1 + 104 >> 3];
 d8 = +HEAPF64[i1 + 168 >> 3];
 d7 = +HEAPF64[i1 + 232 >> 3];
 d6 = +HEAPF64[i1 + 296 >> 3];
 d5 = +HEAPF64[i1 + 360 >> 3];
 d4 = +HEAPF64[i1 + 424 >> 3];
 d3 = +HEAPF64[i1 + 488 >> 3];
 HEAPF64[i21 >> 3] = d10 * .3535533906 + 0.0 + d9 * .4903926402 + d8 * .4619397663 + d7 * .4157348062 + d6 * .3535533906 + d5 * .2777851165 + d4 * .1913417162 + d3 * .097545161;
 HEAPF64[i12 + 104 >> 3] = d10 * .3535533906 + 0.0 + d9 * .4157348062 + d8 * .1913417162 + d7 * -.097545161 + d6 * -.3535533906 + d5 * -.4903926402 + d4 * -.4619397663 + d3 * -.2777851165;
 HEAPF64[i12 + 168 >> 3] = d10 * .3535533906 + 0.0 + d9 * .2777851165 + d8 * -.1913417162 + d7 * -.4903926402 + d6 * -.3535533906 + d5 * .097545161 + d4 * .4619397663 + d3 * .4157348062;
 HEAPF64[i12 + 232 >> 3] = d10 * .3535533906 + 0.0 + d9 * .097545161 + d8 * -.4619397663 + d7 * -.2777851165 + d6 * .3535533906 + d5 * .4157348062 + d4 * -.1913417162 + d3 * -.4903926402;
 HEAPF64[i12 + 296 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.097545161 + d8 * -.4619397663 + d7 * .2777851165 + d6 * .3535533906 + d5 * -.4157348062 + d4 * -.1913417162 + d3 * .4903926402;
 HEAPF64[i12 + 360 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.2777851165 + d8 * -.1913417162 + d7 * .4903926402 + d6 * -.3535533906 + d5 * -.097545161 + d4 * .4619397663 + d3 * -.4157348062;
 HEAPF64[i12 + 424 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.4157348062 + d8 * .1913417162 + d7 * .097545161 + d6 * -.3535533906 + d5 * .4903926402 + d4 * -.4619397663 + d3 * .2777851165;
 HEAPF64[i12 + 488 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.4903926402 + d8 * .4619397663 + d7 * -.4157348062 + d6 * .3535533906 + d5 * -.2777851165 + d4 * .1913417162 + d3 * -.097545161;
 i20 = i12 + 48 | 0;
 d3 = +HEAPF64[i1 + 48 >> 3];
 d4 = +HEAPF64[i1 + 112 >> 3];
 d5 = +HEAPF64[i1 + 176 >> 3];
 d6 = +HEAPF64[i1 + 240 >> 3];
 d7 = +HEAPF64[i1 + 304 >> 3];
 d8 = +HEAPF64[i1 + 368 >> 3];
 d9 = +HEAPF64[i1 + 432 >> 3];
 d10 = +HEAPF64[i1 + 496 >> 3];
 HEAPF64[i20 >> 3] = d3 * .3535533906 + 0.0 + d4 * .4903926402 + d5 * .4619397663 + d6 * .4157348062 + d7 * .3535533906 + d8 * .2777851165 + d9 * .1913417162 + d10 * .097545161;
 HEAPF64[i12 + 112 >> 3] = d3 * .3535533906 + 0.0 + d4 * .4157348062 + d5 * .1913417162 + d6 * -.097545161 + d7 * -.3535533906 + d8 * -.4903926402 + d9 * -.4619397663 + d10 * -.2777851165;
 HEAPF64[i12 + 176 >> 3] = d3 * .3535533906 + 0.0 + d4 * .2777851165 + d5 * -.1913417162 + d6 * -.4903926402 + d7 * -.3535533906 + d8 * .097545161 + d9 * .4619397663 + d10 * .4157348062;
 HEAPF64[i12 + 240 >> 3] = d3 * .3535533906 + 0.0 + d4 * .097545161 + d5 * -.4619397663 + d6 * -.2777851165 + d7 * .3535533906 + d8 * .4157348062 + d9 * -.1913417162 + d10 * -.4903926402;
 HEAPF64[i12 + 304 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.097545161 + d5 * -.4619397663 + d6 * .2777851165 + d7 * .3535533906 + d8 * -.4157348062 + d9 * -.1913417162 + d10 * .4903926402;
 HEAPF64[i12 + 368 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.2777851165 + d5 * -.1913417162 + d6 * .4903926402 + d7 * -.3535533906 + d8 * -.097545161 + d9 * .4619397663 + d10 * -.4157348062;
 HEAPF64[i12 + 432 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.4157348062 + d5 * .1913417162 + d6 * .097545161 + d7 * -.3535533906 + d8 * .4903926402 + d9 * -.4619397663 + d10 * .2777851165;
 HEAPF64[i12 + 496 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.4903926402 + d5 * .4619397663 + d6 * -.4157348062 + d7 * .3535533906 + d8 * -.2777851165 + d9 * .1913417162 + d10 * -.097545161;
 i19 = i12 + 56 | 0;
 d10 = +HEAPF64[i1 + 56 >> 3];
 d9 = +HEAPF64[i1 + 120 >> 3];
 d8 = +HEAPF64[i1 + 184 >> 3];
 d7 = +HEAPF64[i1 + 248 >> 3];
 d6 = +HEAPF64[i1 + 312 >> 3];
 d5 = +HEAPF64[i1 + 376 >> 3];
 d4 = +HEAPF64[i1 + 440 >> 3];
 d3 = +HEAPF64[i1 + 504 >> 3];
 HEAPF64[i19 >> 3] = d10 * .3535533906 + 0.0 + d9 * .4903926402 + d8 * .4619397663 + d7 * .4157348062 + d6 * .3535533906 + d5 * .2777851165 + d4 * .1913417162 + d3 * .097545161;
 HEAPF64[i12 + 120 >> 3] = d10 * .3535533906 + 0.0 + d9 * .4157348062 + d8 * .1913417162 + d7 * -.097545161 + d6 * -.3535533906 + d5 * -.4903926402 + d4 * -.4619397663 + d3 * -.2777851165;
 HEAPF64[i12 + 184 >> 3] = d10 * .3535533906 + 0.0 + d9 * .2777851165 + d8 * -.1913417162 + d7 * -.4903926402 + d6 * -.3535533906 + d5 * .097545161 + d4 * .4619397663 + d3 * .4157348062;
 HEAPF64[i12 + 248 >> 3] = d10 * .3535533906 + 0.0 + d9 * .097545161 + d8 * -.4619397663 + d7 * -.2777851165 + d6 * .3535533906 + d5 * .4157348062 + d4 * -.1913417162 + d3 * -.4903926402;
 HEAPF64[i12 + 312 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.097545161 + d8 * -.4619397663 + d7 * .2777851165 + d6 * .3535533906 + d5 * -.4157348062 + d4 * -.1913417162 + d3 * .4903926402;
 HEAPF64[i12 + 376 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.2777851165 + d8 * -.1913417162 + d7 * .4903926402 + d6 * -.3535533906 + d5 * -.097545161 + d4 * .4619397663 + d3 * -.4157348062;
 HEAPF64[i12 + 440 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.4157348062 + d8 * .1913417162 + d7 * .097545161 + d6 * -.3535533906 + d5 * .4903926402 + d4 * -.4619397663 + d3 * .2777851165;
 HEAPF64[i12 + 504 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.4903926402 + d8 * .4619397663 + d7 * -.4157348062 + d6 * .3535533906 + d5 * -.2777851165 + d4 * .1913417162 + d3 * -.097545161;
 d3 = +HEAPF64[i12 >> 3];
 d4 = +HEAPF64[i25 >> 3];
 d5 = +HEAPF64[i24 >> 3];
 d6 = +HEAPF64[i23 >> 3];
 d7 = +HEAPF64[i22 >> 3];
 d8 = +HEAPF64[i21 >> 3];
 d9 = +HEAPF64[i20 >> 3];
 d10 = +HEAPF64[i19 >> 3];
 HEAPF64[i1 >> 3] = d3 * .3535533906 + 0.0 + d4 * .4903926402 + d5 * .4619397663 + d6 * .4157348062 + d7 * .3535533906 + d8 * .2777851165 + d9 * .1913417162 + d10 * .097545161;
 HEAPF64[i1 + 8 >> 3] = d3 * .3535533906 + 0.0 + d4 * .4157348062 + d5 * .1913417162 + d6 * -.097545161 + d7 * -.3535533906 + d8 * -.4903926402 + d9 * -.4619397663 + d10 * -.2777851165;
 HEAPF64[i1 + 16 >> 3] = d3 * .3535533906 + 0.0 + d4 * .2777851165 + d5 * -.1913417162 + d6 * -.4903926402 + d7 * -.3535533906 + d8 * .097545161 + d9 * .4619397663 + d10 * .4157348062;
 HEAPF64[i1 + 24 >> 3] = d3 * .3535533906 + 0.0 + d4 * .097545161 + d5 * -.4619397663 + d6 * -.2777851165 + d7 * .3535533906 + d8 * .4157348062 + d9 * -.1913417162 + d10 * -.4903926402;
 HEAPF64[i1 + 32 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.097545161 + d5 * -.4619397663 + d6 * .2777851165 + d7 * .3535533906 + d8 * -.4157348062 + d9 * -.1913417162 + d10 * .4903926402;
 HEAPF64[i1 + 40 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.2777851165 + d5 * -.1913417162 + d6 * .4903926402 + d7 * -.3535533906 + d8 * -.097545161 + d9 * .4619397663 + d10 * -.4157348062;
 HEAPF64[i1 + 48 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.4157348062 + d5 * .1913417162 + d6 * .097545161 + d7 * -.3535533906 + d8 * .4903926402 + d9 * -.4619397663 + d10 * .2777851165;
 HEAPF64[i1 + 56 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.4903926402 + d5 * .4619397663 + d6 * -.4157348062 + d7 * .3535533906 + d8 * -.2777851165 + d9 * .1913417162 + d10 * -.097545161;
 d10 = +HEAPF64[i12 + 64 >> 3];
 d9 = +HEAPF64[i12 + 72 >> 3];
 d8 = +HEAPF64[i12 + 80 >> 3];
 d7 = +HEAPF64[i12 + 88 >> 3];
 d6 = +HEAPF64[i12 + 96 >> 3];
 d5 = +HEAPF64[i12 + 104 >> 3];
 d4 = +HEAPF64[i12 + 112 >> 3];
 d3 = +HEAPF64[i12 + 120 >> 3];
 HEAPF64[i18 >> 3] = d10 * .3535533906 + 0.0 + d9 * .4903926402 + d8 * .4619397663 + d7 * .4157348062 + d6 * .3535533906 + d5 * .2777851165 + d4 * .1913417162 + d3 * .097545161;
 HEAPF64[i1 + 72 >> 3] = d10 * .3535533906 + 0.0 + d9 * .4157348062 + d8 * .1913417162 + d7 * -.097545161 + d6 * -.3535533906 + d5 * -.4903926402 + d4 * -.4619397663 + d3 * -.2777851165;
 HEAPF64[i1 + 80 >> 3] = d10 * .3535533906 + 0.0 + d9 * .2777851165 + d8 * -.1913417162 + d7 * -.4903926402 + d6 * -.3535533906 + d5 * .097545161 + d4 * .4619397663 + d3 * .4157348062;
 HEAPF64[i1 + 88 >> 3] = d10 * .3535533906 + 0.0 + d9 * .097545161 + d8 * -.4619397663 + d7 * -.2777851165 + d6 * .3535533906 + d5 * .4157348062 + d4 * -.1913417162 + d3 * -.4903926402;
 HEAPF64[i1 + 96 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.097545161 + d8 * -.4619397663 + d7 * .2777851165 + d6 * .3535533906 + d5 * -.4157348062 + d4 * -.1913417162 + d3 * .4903926402;
 HEAPF64[i1 + 104 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.2777851165 + d8 * -.1913417162 + d7 * .4903926402 + d6 * -.3535533906 + d5 * -.097545161 + d4 * .4619397663 + d3 * -.4157348062;
 HEAPF64[i1 + 112 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.4157348062 + d8 * .1913417162 + d7 * .097545161 + d6 * -.3535533906 + d5 * .4903926402 + d4 * -.4619397663 + d3 * .2777851165;
 HEAPF64[i1 + 120 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.4903926402 + d8 * .4619397663 + d7 * -.4157348062 + d6 * .3535533906 + d5 * -.2777851165 + d4 * .1913417162 + d3 * -.097545161;
 d3 = +HEAPF64[i12 + 128 >> 3];
 d4 = +HEAPF64[i12 + 136 >> 3];
 d5 = +HEAPF64[i12 + 144 >> 3];
 d6 = +HEAPF64[i12 + 152 >> 3];
 d7 = +HEAPF64[i12 + 160 >> 3];
 d8 = +HEAPF64[i12 + 168 >> 3];
 d9 = +HEAPF64[i12 + 176 >> 3];
 d10 = +HEAPF64[i12 + 184 >> 3];
 HEAPF64[i17 >> 3] = d3 * .3535533906 + 0.0 + d4 * .4903926402 + d5 * .4619397663 + d6 * .4157348062 + d7 * .3535533906 + d8 * .2777851165 + d9 * .1913417162 + d10 * .097545161;
 HEAPF64[i1 + 136 >> 3] = d3 * .3535533906 + 0.0 + d4 * .4157348062 + d5 * .1913417162 + d6 * -.097545161 + d7 * -.3535533906 + d8 * -.4903926402 + d9 * -.4619397663 + d10 * -.2777851165;
 HEAPF64[i1 + 144 >> 3] = d3 * .3535533906 + 0.0 + d4 * .2777851165 + d5 * -.1913417162 + d6 * -.4903926402 + d7 * -.3535533906 + d8 * .097545161 + d9 * .4619397663 + d10 * .4157348062;
 HEAPF64[i1 + 152 >> 3] = d3 * .3535533906 + 0.0 + d4 * .097545161 + d5 * -.4619397663 + d6 * -.2777851165 + d7 * .3535533906 + d8 * .4157348062 + d9 * -.1913417162 + d10 * -.4903926402;
 HEAPF64[i1 + 160 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.097545161 + d5 * -.4619397663 + d6 * .2777851165 + d7 * .3535533906 + d8 * -.4157348062 + d9 * -.1913417162 + d10 * .4903926402;
 HEAPF64[i1 + 168 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.2777851165 + d5 * -.1913417162 + d6 * .4903926402 + d7 * -.3535533906 + d8 * -.097545161 + d9 * .4619397663 + d10 * -.4157348062;
 HEAPF64[i1 + 176 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.4157348062 + d5 * .1913417162 + d6 * .097545161 + d7 * -.3535533906 + d8 * .4903926402 + d9 * -.4619397663 + d10 * .2777851165;
 HEAPF64[i1 + 184 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.4903926402 + d5 * .4619397663 + d6 * -.4157348062 + d7 * .3535533906 + d8 * -.2777851165 + d9 * .1913417162 + d10 * -.097545161;
 d10 = +HEAPF64[i12 + 192 >> 3];
 d9 = +HEAPF64[i12 + 200 >> 3];
 d8 = +HEAPF64[i12 + 208 >> 3];
 d7 = +HEAPF64[i12 + 216 >> 3];
 d6 = +HEAPF64[i12 + 224 >> 3];
 d5 = +HEAPF64[i12 + 232 >> 3];
 d4 = +HEAPF64[i12 + 240 >> 3];
 d3 = +HEAPF64[i12 + 248 >> 3];
 HEAPF64[i16 >> 3] = d10 * .3535533906 + 0.0 + d9 * .4903926402 + d8 * .4619397663 + d7 * .4157348062 + d6 * .3535533906 + d5 * .2777851165 + d4 * .1913417162 + d3 * .097545161;
 HEAPF64[i1 + 200 >> 3] = d10 * .3535533906 + 0.0 + d9 * .4157348062 + d8 * .1913417162 + d7 * -.097545161 + d6 * -.3535533906 + d5 * -.4903926402 + d4 * -.4619397663 + d3 * -.2777851165;
 HEAPF64[i1 + 208 >> 3] = d10 * .3535533906 + 0.0 + d9 * .2777851165 + d8 * -.1913417162 + d7 * -.4903926402 + d6 * -.3535533906 + d5 * .097545161 + d4 * .4619397663 + d3 * .4157348062;
 HEAPF64[i1 + 216 >> 3] = d10 * .3535533906 + 0.0 + d9 * .097545161 + d8 * -.4619397663 + d7 * -.2777851165 + d6 * .3535533906 + d5 * .4157348062 + d4 * -.1913417162 + d3 * -.4903926402;
 HEAPF64[i1 + 224 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.097545161 + d8 * -.4619397663 + d7 * .2777851165 + d6 * .3535533906 + d5 * -.4157348062 + d4 * -.1913417162 + d3 * .4903926402;
 HEAPF64[i1 + 232 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.2777851165 + d8 * -.1913417162 + d7 * .4903926402 + d6 * -.3535533906 + d5 * -.097545161 + d4 * .4619397663 + d3 * -.4157348062;
 HEAPF64[i1 + 240 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.4157348062 + d8 * .1913417162 + d7 * .097545161 + d6 * -.3535533906 + d5 * .4903926402 + d4 * -.4619397663 + d3 * .2777851165;
 HEAPF64[i1 + 248 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.4903926402 + d8 * .4619397663 + d7 * -.4157348062 + d6 * .3535533906 + d5 * -.2777851165 + d4 * .1913417162 + d3 * -.097545161;
 d3 = +HEAPF64[i12 + 256 >> 3];
 d4 = +HEAPF64[i12 + 264 >> 3];
 d5 = +HEAPF64[i12 + 272 >> 3];
 d6 = +HEAPF64[i12 + 280 >> 3];
 d7 = +HEAPF64[i12 + 288 >> 3];
 d8 = +HEAPF64[i12 + 296 >> 3];
 d9 = +HEAPF64[i12 + 304 >> 3];
 d10 = +HEAPF64[i12 + 312 >> 3];
 HEAPF64[i15 >> 3] = d3 * .3535533906 + 0.0 + d4 * .4903926402 + d5 * .4619397663 + d6 * .4157348062 + d7 * .3535533906 + d8 * .2777851165 + d9 * .1913417162 + d10 * .097545161;
 HEAPF64[i1 + 264 >> 3] = d3 * .3535533906 + 0.0 + d4 * .4157348062 + d5 * .1913417162 + d6 * -.097545161 + d7 * -.3535533906 + d8 * -.4903926402 + d9 * -.4619397663 + d10 * -.2777851165;
 HEAPF64[i1 + 272 >> 3] = d3 * .3535533906 + 0.0 + d4 * .2777851165 + d5 * -.1913417162 + d6 * -.4903926402 + d7 * -.3535533906 + d8 * .097545161 + d9 * .4619397663 + d10 * .4157348062;
 HEAPF64[i1 + 280 >> 3] = d3 * .3535533906 + 0.0 + d4 * .097545161 + d5 * -.4619397663 + d6 * -.2777851165 + d7 * .3535533906 + d8 * .4157348062 + d9 * -.1913417162 + d10 * -.4903926402;
 HEAPF64[i1 + 288 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.097545161 + d5 * -.4619397663 + d6 * .2777851165 + d7 * .3535533906 + d8 * -.4157348062 + d9 * -.1913417162 + d10 * .4903926402;
 HEAPF64[i1 + 296 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.2777851165 + d5 * -.1913417162 + d6 * .4903926402 + d7 * -.3535533906 + d8 * -.097545161 + d9 * .4619397663 + d10 * -.4157348062;
 HEAPF64[i1 + 304 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.4157348062 + d5 * .1913417162 + d6 * .097545161 + d7 * -.3535533906 + d8 * .4903926402 + d9 * -.4619397663 + d10 * .2777851165;
 HEAPF64[i1 + 312 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.4903926402 + d5 * .4619397663 + d6 * -.4157348062 + d7 * .3535533906 + d8 * -.2777851165 + d9 * .1913417162 + d10 * -.097545161;
 d10 = +HEAPF64[i12 + 320 >> 3];
 d9 = +HEAPF64[i12 + 328 >> 3];
 d8 = +HEAPF64[i12 + 336 >> 3];
 d7 = +HEAPF64[i12 + 344 >> 3];
 d6 = +HEAPF64[i12 + 352 >> 3];
 d5 = +HEAPF64[i12 + 360 >> 3];
 d4 = +HEAPF64[i12 + 368 >> 3];
 d3 = +HEAPF64[i12 + 376 >> 3];
 HEAPF64[i14 >> 3] = d10 * .3535533906 + 0.0 + d9 * .4903926402 + d8 * .4619397663 + d7 * .4157348062 + d6 * .3535533906 + d5 * .2777851165 + d4 * .1913417162 + d3 * .097545161;
 HEAPF64[i1 + 328 >> 3] = d10 * .3535533906 + 0.0 + d9 * .4157348062 + d8 * .1913417162 + d7 * -.097545161 + d6 * -.3535533906 + d5 * -.4903926402 + d4 * -.4619397663 + d3 * -.2777851165;
 HEAPF64[i1 + 336 >> 3] = d10 * .3535533906 + 0.0 + d9 * .2777851165 + d8 * -.1913417162 + d7 * -.4903926402 + d6 * -.3535533906 + d5 * .097545161 + d4 * .4619397663 + d3 * .4157348062;
 HEAPF64[i1 + 344 >> 3] = d10 * .3535533906 + 0.0 + d9 * .097545161 + d8 * -.4619397663 + d7 * -.2777851165 + d6 * .3535533906 + d5 * .4157348062 + d4 * -.1913417162 + d3 * -.4903926402;
 HEAPF64[i1 + 352 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.097545161 + d8 * -.4619397663 + d7 * .2777851165 + d6 * .3535533906 + d5 * -.4157348062 + d4 * -.1913417162 + d3 * .4903926402;
 HEAPF64[i1 + 360 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.2777851165 + d8 * -.1913417162 + d7 * .4903926402 + d6 * -.3535533906 + d5 * -.097545161 + d4 * .4619397663 + d3 * -.4157348062;
 HEAPF64[i1 + 368 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.4157348062 + d8 * .1913417162 + d7 * .097545161 + d6 * -.3535533906 + d5 * .4903926402 + d4 * -.4619397663 + d3 * .2777851165;
 HEAPF64[i1 + 376 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.4903926402 + d8 * .4619397663 + d7 * -.4157348062 + d6 * .3535533906 + d5 * -.2777851165 + d4 * .1913417162 + d3 * -.097545161;
 d3 = +HEAPF64[i12 + 384 >> 3];
 d4 = +HEAPF64[i12 + 392 >> 3];
 d5 = +HEAPF64[i12 + 400 >> 3];
 d6 = +HEAPF64[i12 + 408 >> 3];
 d7 = +HEAPF64[i12 + 416 >> 3];
 d8 = +HEAPF64[i12 + 424 >> 3];
 d9 = +HEAPF64[i12 + 432 >> 3];
 d10 = +HEAPF64[i12 + 440 >> 3];
 HEAPF64[i13 >> 3] = d3 * .3535533906 + 0.0 + d4 * .4903926402 + d5 * .4619397663 + d6 * .4157348062 + d7 * .3535533906 + d8 * .2777851165 + d9 * .1913417162 + d10 * .097545161;
 HEAPF64[i1 + 392 >> 3] = d3 * .3535533906 + 0.0 + d4 * .4157348062 + d5 * .1913417162 + d6 * -.097545161 + d7 * -.3535533906 + d8 * -.4903926402 + d9 * -.4619397663 + d10 * -.2777851165;
 HEAPF64[i1 + 400 >> 3] = d3 * .3535533906 + 0.0 + d4 * .2777851165 + d5 * -.1913417162 + d6 * -.4903926402 + d7 * -.3535533906 + d8 * .097545161 + d9 * .4619397663 + d10 * .4157348062;
 HEAPF64[i1 + 408 >> 3] = d3 * .3535533906 + 0.0 + d4 * .097545161 + d5 * -.4619397663 + d6 * -.2777851165 + d7 * .3535533906 + d8 * .4157348062 + d9 * -.1913417162 + d10 * -.4903926402;
 HEAPF64[i1 + 416 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.097545161 + d5 * -.4619397663 + d6 * .2777851165 + d7 * .3535533906 + d8 * -.4157348062 + d9 * -.1913417162 + d10 * .4903926402;
 HEAPF64[i1 + 424 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.2777851165 + d5 * -.1913417162 + d6 * .4903926402 + d7 * -.3535533906 + d8 * -.097545161 + d9 * .4619397663 + d10 * -.4157348062;
 HEAPF64[i1 + 432 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.4157348062 + d5 * .1913417162 + d6 * .097545161 + d7 * -.3535533906 + d8 * .4903926402 + d9 * -.4619397663 + d10 * .2777851165;
 HEAPF64[i1 + 440 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.4903926402 + d5 * .4619397663 + d6 * -.4157348062 + d7 * .3535533906 + d8 * -.2777851165 + d9 * .1913417162 + d10 * -.097545161;
 d10 = +HEAPF64[i12 + 448 >> 3];
 d9 = +HEAPF64[i12 + 456 >> 3];
 d8 = +HEAPF64[i12 + 464 >> 3];
 d7 = +HEAPF64[i12 + 472 >> 3];
 d6 = +HEAPF64[i12 + 480 >> 3];
 d5 = +HEAPF64[i12 + 488 >> 3];
 d4 = +HEAPF64[i12 + 496 >> 3];
 d3 = +HEAPF64[i12 + 504 >> 3];
 HEAPF64[i11 >> 3] = d10 * .3535533906 + 0.0 + d9 * .4903926402 + d8 * .4619397663 + d7 * .4157348062 + d6 * .3535533906 + d5 * .2777851165 + d4 * .1913417162 + d3 * .097545161;
 HEAPF64[i1 + 456 >> 3] = d10 * .3535533906 + 0.0 + d9 * .4157348062 + d8 * .1913417162 + d7 * -.097545161 + d6 * -.3535533906 + d5 * -.4903926402 + d4 * -.4619397663 + d3 * -.2777851165;
 HEAPF64[i1 + 464 >> 3] = d10 * .3535533906 + 0.0 + d9 * .2777851165 + d8 * -.1913417162 + d7 * -.4903926402 + d6 * -.3535533906 + d5 * .097545161 + d4 * .4619397663 + d3 * .4157348062;
 HEAPF64[i1 + 472 >> 3] = d10 * .3535533906 + 0.0 + d9 * .097545161 + d8 * -.4619397663 + d7 * -.2777851165 + d6 * .3535533906 + d5 * .4157348062 + d4 * -.1913417162 + d3 * -.4903926402;
 HEAPF64[i1 + 480 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.097545161 + d8 * -.4619397663 + d7 * .2777851165 + d6 * .3535533906 + d5 * -.4157348062 + d4 * -.1913417162 + d3 * .4903926402;
 HEAPF64[i1 + 488 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.2777851165 + d8 * -.1913417162 + d7 * .4903926402 + d6 * -.3535533906 + d5 * -.097545161 + d4 * .4619397663 + d3 * -.4157348062;
 HEAPF64[i1 + 496 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.4157348062 + d8 * .1913417162 + d7 * .097545161 + d6 * -.3535533906 + d5 * .4903926402 + d4 * -.4619397663 + d3 * .2777851165;
 HEAPF64[i1 + 504 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.4903926402 + d8 * .4619397663 + d7 * -.4157348062 + d6 * .3535533906 + d5 * -.2777851165 + d4 * .1913417162 + d3 * -.097545161;
 STACKTOP = i2;
 return;
}

function __ZN7guetzli21ComputeBlockDCTDoubleEPd(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = 0.0, d4 = 0.0, d5 = 0.0, d6 = 0.0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 512 | 0;
 i12 = i2;
 d3 = +HEAPF64[i1 >> 3];
 i18 = i1 + 64 | 0;
 d4 = +HEAPF64[i18 >> 3];
 i17 = i1 + 128 | 0;
 d5 = +HEAPF64[i17 >> 3];
 i16 = i1 + 192 | 0;
 d6 = +HEAPF64[i16 >> 3];
 i15 = i1 + 256 | 0;
 d7 = +HEAPF64[i15 >> 3];
 i14 = i1 + 320 | 0;
 d8 = +HEAPF64[i14 >> 3];
 i13 = i1 + 384 | 0;
 d9 = +HEAPF64[i13 >> 3];
 i11 = i1 + 448 | 0;
 d10 = +HEAPF64[i11 >> 3];
 HEAPF64[i12 >> 3] = d3 * .3535533906 + 0.0 + d4 * .3535533906 + d5 * .3535533906 + d6 * .3535533906 + d7 * .3535533906 + d8 * .3535533906 + d9 * .3535533906 + d10 * .3535533906;
 HEAPF64[i12 + 64 >> 3] = d3 * .4903926402 + 0.0 + d4 * .4157348062 + d5 * .2777851165 + d6 * .097545161 + d7 * -.097545161 + d8 * -.2777851165 + d9 * -.4157348062 + d10 * -.4903926402;
 HEAPF64[i12 + 128 >> 3] = d3 * .4619397663 + 0.0 + d4 * .1913417162 + d5 * -.1913417162 + d6 * -.4619397663 + d7 * -.4619397663 + d8 * -.1913417162 + d9 * .1913417162 + d10 * .4619397663;
 HEAPF64[i12 + 192 >> 3] = d3 * .4157348062 + 0.0 + d4 * -.097545161 + d5 * -.4903926402 + d6 * -.2777851165 + d7 * .2777851165 + d8 * .4903926402 + d9 * .097545161 + d10 * -.4157348062;
 HEAPF64[i12 + 256 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.3535533906 + d5 * -.3535533906 + d6 * .3535533906 + d7 * .3535533906 + d8 * -.3535533906 + d9 * -.3535533906 + d10 * .3535533906;
 HEAPF64[i12 + 320 >> 3] = d3 * .2777851165 + 0.0 + d4 * -.4903926402 + d5 * .097545161 + d6 * .4157348062 + d7 * -.4157348062 + d8 * -.097545161 + d9 * .4903926402 + d10 * -.2777851165;
 HEAPF64[i12 + 384 >> 3] = d3 * .1913417162 + 0.0 + d4 * -.4619397663 + d5 * .4619397663 + d6 * -.1913417162 + d7 * -.1913417162 + d8 * .4619397663 + d9 * -.4619397663 + d10 * .1913417162;
 HEAPF64[i12 + 448 >> 3] = d3 * .097545161 + 0.0 + d4 * -.2777851165 + d5 * .4157348062 + d6 * -.4903926402 + d7 * .4903926402 + d8 * -.4157348062 + d9 * .2777851165 + d10 * -.097545161;
 i25 = i12 + 8 | 0;
 d10 = +HEAPF64[i1 + 8 >> 3];
 d9 = +HEAPF64[i1 + 72 >> 3];
 d8 = +HEAPF64[i1 + 136 >> 3];
 d7 = +HEAPF64[i1 + 200 >> 3];
 d6 = +HEAPF64[i1 + 264 >> 3];
 d5 = +HEAPF64[i1 + 328 >> 3];
 d4 = +HEAPF64[i1 + 392 >> 3];
 d3 = +HEAPF64[i1 + 456 >> 3];
 HEAPF64[i25 >> 3] = d10 * .3535533906 + 0.0 + d9 * .3535533906 + d8 * .3535533906 + d7 * .3535533906 + d6 * .3535533906 + d5 * .3535533906 + d4 * .3535533906 + d3 * .3535533906;
 HEAPF64[i12 + 72 >> 3] = d10 * .4903926402 + 0.0 + d9 * .4157348062 + d8 * .2777851165 + d7 * .097545161 + d6 * -.097545161 + d5 * -.2777851165 + d4 * -.4157348062 + d3 * -.4903926402;
 HEAPF64[i12 + 136 >> 3] = d10 * .4619397663 + 0.0 + d9 * .1913417162 + d8 * -.1913417162 + d7 * -.4619397663 + d6 * -.4619397663 + d5 * -.1913417162 + d4 * .1913417162 + d3 * .4619397663;
 HEAPF64[i12 + 200 >> 3] = d10 * .4157348062 + 0.0 + d9 * -.097545161 + d8 * -.4903926402 + d7 * -.2777851165 + d6 * .2777851165 + d5 * .4903926402 + d4 * .097545161 + d3 * -.4157348062;
 HEAPF64[i12 + 264 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.3535533906 + d8 * -.3535533906 + d7 * .3535533906 + d6 * .3535533906 + d5 * -.3535533906 + d4 * -.3535533906 + d3 * .3535533906;
 HEAPF64[i12 + 328 >> 3] = d10 * .2777851165 + 0.0 + d9 * -.4903926402 + d8 * .097545161 + d7 * .4157348062 + d6 * -.4157348062 + d5 * -.097545161 + d4 * .4903926402 + d3 * -.2777851165;
 HEAPF64[i12 + 392 >> 3] = d10 * .1913417162 + 0.0 + d9 * -.4619397663 + d8 * .4619397663 + d7 * -.1913417162 + d6 * -.1913417162 + d5 * .4619397663 + d4 * -.4619397663 + d3 * .1913417162;
 HEAPF64[i12 + 456 >> 3] = d10 * .097545161 + 0.0 + d9 * -.2777851165 + d8 * .4157348062 + d7 * -.4903926402 + d6 * .4903926402 + d5 * -.4157348062 + d4 * .2777851165 + d3 * -.097545161;
 i24 = i12 + 16 | 0;
 d3 = +HEAPF64[i1 + 16 >> 3];
 d4 = +HEAPF64[i1 + 80 >> 3];
 d5 = +HEAPF64[i1 + 144 >> 3];
 d6 = +HEAPF64[i1 + 208 >> 3];
 d7 = +HEAPF64[i1 + 272 >> 3];
 d8 = +HEAPF64[i1 + 336 >> 3];
 d9 = +HEAPF64[i1 + 400 >> 3];
 d10 = +HEAPF64[i1 + 464 >> 3];
 HEAPF64[i24 >> 3] = d3 * .3535533906 + 0.0 + d4 * .3535533906 + d5 * .3535533906 + d6 * .3535533906 + d7 * .3535533906 + d8 * .3535533906 + d9 * .3535533906 + d10 * .3535533906;
 HEAPF64[i12 + 80 >> 3] = d3 * .4903926402 + 0.0 + d4 * .4157348062 + d5 * .2777851165 + d6 * .097545161 + d7 * -.097545161 + d8 * -.2777851165 + d9 * -.4157348062 + d10 * -.4903926402;
 HEAPF64[i12 + 144 >> 3] = d3 * .4619397663 + 0.0 + d4 * .1913417162 + d5 * -.1913417162 + d6 * -.4619397663 + d7 * -.4619397663 + d8 * -.1913417162 + d9 * .1913417162 + d10 * .4619397663;
 HEAPF64[i12 + 208 >> 3] = d3 * .4157348062 + 0.0 + d4 * -.097545161 + d5 * -.4903926402 + d6 * -.2777851165 + d7 * .2777851165 + d8 * .4903926402 + d9 * .097545161 + d10 * -.4157348062;
 HEAPF64[i12 + 272 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.3535533906 + d5 * -.3535533906 + d6 * .3535533906 + d7 * .3535533906 + d8 * -.3535533906 + d9 * -.3535533906 + d10 * .3535533906;
 HEAPF64[i12 + 336 >> 3] = d3 * .2777851165 + 0.0 + d4 * -.4903926402 + d5 * .097545161 + d6 * .4157348062 + d7 * -.4157348062 + d8 * -.097545161 + d9 * .4903926402 + d10 * -.2777851165;
 HEAPF64[i12 + 400 >> 3] = d3 * .1913417162 + 0.0 + d4 * -.4619397663 + d5 * .4619397663 + d6 * -.1913417162 + d7 * -.1913417162 + d8 * .4619397663 + d9 * -.4619397663 + d10 * .1913417162;
 HEAPF64[i12 + 464 >> 3] = d3 * .097545161 + 0.0 + d4 * -.2777851165 + d5 * .4157348062 + d6 * -.4903926402 + d7 * .4903926402 + d8 * -.4157348062 + d9 * .2777851165 + d10 * -.097545161;
 i23 = i12 + 24 | 0;
 d10 = +HEAPF64[i1 + 24 >> 3];
 d9 = +HEAPF64[i1 + 88 >> 3];
 d8 = +HEAPF64[i1 + 152 >> 3];
 d7 = +HEAPF64[i1 + 216 >> 3];
 d6 = +HEAPF64[i1 + 280 >> 3];
 d5 = +HEAPF64[i1 + 344 >> 3];
 d4 = +HEAPF64[i1 + 408 >> 3];
 d3 = +HEAPF64[i1 + 472 >> 3];
 HEAPF64[i23 >> 3] = d10 * .3535533906 + 0.0 + d9 * .3535533906 + d8 * .3535533906 + d7 * .3535533906 + d6 * .3535533906 + d5 * .3535533906 + d4 * .3535533906 + d3 * .3535533906;
 HEAPF64[i12 + 88 >> 3] = d10 * .4903926402 + 0.0 + d9 * .4157348062 + d8 * .2777851165 + d7 * .097545161 + d6 * -.097545161 + d5 * -.2777851165 + d4 * -.4157348062 + d3 * -.4903926402;
 HEAPF64[i12 + 152 >> 3] = d10 * .4619397663 + 0.0 + d9 * .1913417162 + d8 * -.1913417162 + d7 * -.4619397663 + d6 * -.4619397663 + d5 * -.1913417162 + d4 * .1913417162 + d3 * .4619397663;
 HEAPF64[i12 + 216 >> 3] = d10 * .4157348062 + 0.0 + d9 * -.097545161 + d8 * -.4903926402 + d7 * -.2777851165 + d6 * .2777851165 + d5 * .4903926402 + d4 * .097545161 + d3 * -.4157348062;
 HEAPF64[i12 + 280 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.3535533906 + d8 * -.3535533906 + d7 * .3535533906 + d6 * .3535533906 + d5 * -.3535533906 + d4 * -.3535533906 + d3 * .3535533906;
 HEAPF64[i12 + 344 >> 3] = d10 * .2777851165 + 0.0 + d9 * -.4903926402 + d8 * .097545161 + d7 * .4157348062 + d6 * -.4157348062 + d5 * -.097545161 + d4 * .4903926402 + d3 * -.2777851165;
 HEAPF64[i12 + 408 >> 3] = d10 * .1913417162 + 0.0 + d9 * -.4619397663 + d8 * .4619397663 + d7 * -.1913417162 + d6 * -.1913417162 + d5 * .4619397663 + d4 * -.4619397663 + d3 * .1913417162;
 HEAPF64[i12 + 472 >> 3] = d10 * .097545161 + 0.0 + d9 * -.2777851165 + d8 * .4157348062 + d7 * -.4903926402 + d6 * .4903926402 + d5 * -.4157348062 + d4 * .2777851165 + d3 * -.097545161;
 i22 = i12 + 32 | 0;
 d3 = +HEAPF64[i1 + 32 >> 3];
 d4 = +HEAPF64[i1 + 96 >> 3];
 d5 = +HEAPF64[i1 + 160 >> 3];
 d6 = +HEAPF64[i1 + 224 >> 3];
 d7 = +HEAPF64[i1 + 288 >> 3];
 d8 = +HEAPF64[i1 + 352 >> 3];
 d9 = +HEAPF64[i1 + 416 >> 3];
 d10 = +HEAPF64[i1 + 480 >> 3];
 HEAPF64[i22 >> 3] = d3 * .3535533906 + 0.0 + d4 * .3535533906 + d5 * .3535533906 + d6 * .3535533906 + d7 * .3535533906 + d8 * .3535533906 + d9 * .3535533906 + d10 * .3535533906;
 HEAPF64[i12 + 96 >> 3] = d3 * .4903926402 + 0.0 + d4 * .4157348062 + d5 * .2777851165 + d6 * .097545161 + d7 * -.097545161 + d8 * -.2777851165 + d9 * -.4157348062 + d10 * -.4903926402;
 HEAPF64[i12 + 160 >> 3] = d3 * .4619397663 + 0.0 + d4 * .1913417162 + d5 * -.1913417162 + d6 * -.4619397663 + d7 * -.4619397663 + d8 * -.1913417162 + d9 * .1913417162 + d10 * .4619397663;
 HEAPF64[i12 + 224 >> 3] = d3 * .4157348062 + 0.0 + d4 * -.097545161 + d5 * -.4903926402 + d6 * -.2777851165 + d7 * .2777851165 + d8 * .4903926402 + d9 * .097545161 + d10 * -.4157348062;
 HEAPF64[i12 + 288 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.3535533906 + d5 * -.3535533906 + d6 * .3535533906 + d7 * .3535533906 + d8 * -.3535533906 + d9 * -.3535533906 + d10 * .3535533906;
 HEAPF64[i12 + 352 >> 3] = d3 * .2777851165 + 0.0 + d4 * -.4903926402 + d5 * .097545161 + d6 * .4157348062 + d7 * -.4157348062 + d8 * -.097545161 + d9 * .4903926402 + d10 * -.2777851165;
 HEAPF64[i12 + 416 >> 3] = d3 * .1913417162 + 0.0 + d4 * -.4619397663 + d5 * .4619397663 + d6 * -.1913417162 + d7 * -.1913417162 + d8 * .4619397663 + d9 * -.4619397663 + d10 * .1913417162;
 HEAPF64[i12 + 480 >> 3] = d3 * .097545161 + 0.0 + d4 * -.2777851165 + d5 * .4157348062 + d6 * -.4903926402 + d7 * .4903926402 + d8 * -.4157348062 + d9 * .2777851165 + d10 * -.097545161;
 i21 = i12 + 40 | 0;
 d10 = +HEAPF64[i1 + 40 >> 3];
 d9 = +HEAPF64[i1 + 104 >> 3];
 d8 = +HEAPF64[i1 + 168 >> 3];
 d7 = +HEAPF64[i1 + 232 >> 3];
 d6 = +HEAPF64[i1 + 296 >> 3];
 d5 = +HEAPF64[i1 + 360 >> 3];
 d4 = +HEAPF64[i1 + 424 >> 3];
 d3 = +HEAPF64[i1 + 488 >> 3];
 HEAPF64[i21 >> 3] = d10 * .3535533906 + 0.0 + d9 * .3535533906 + d8 * .3535533906 + d7 * .3535533906 + d6 * .3535533906 + d5 * .3535533906 + d4 * .3535533906 + d3 * .3535533906;
 HEAPF64[i12 + 104 >> 3] = d10 * .4903926402 + 0.0 + d9 * .4157348062 + d8 * .2777851165 + d7 * .097545161 + d6 * -.097545161 + d5 * -.2777851165 + d4 * -.4157348062 + d3 * -.4903926402;
 HEAPF64[i12 + 168 >> 3] = d10 * .4619397663 + 0.0 + d9 * .1913417162 + d8 * -.1913417162 + d7 * -.4619397663 + d6 * -.4619397663 + d5 * -.1913417162 + d4 * .1913417162 + d3 * .4619397663;
 HEAPF64[i12 + 232 >> 3] = d10 * .4157348062 + 0.0 + d9 * -.097545161 + d8 * -.4903926402 + d7 * -.2777851165 + d6 * .2777851165 + d5 * .4903926402 + d4 * .097545161 + d3 * -.4157348062;
 HEAPF64[i12 + 296 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.3535533906 + d8 * -.3535533906 + d7 * .3535533906 + d6 * .3535533906 + d5 * -.3535533906 + d4 * -.3535533906 + d3 * .3535533906;
 HEAPF64[i12 + 360 >> 3] = d10 * .2777851165 + 0.0 + d9 * -.4903926402 + d8 * .097545161 + d7 * .4157348062 + d6 * -.4157348062 + d5 * -.097545161 + d4 * .4903926402 + d3 * -.2777851165;
 HEAPF64[i12 + 424 >> 3] = d10 * .1913417162 + 0.0 + d9 * -.4619397663 + d8 * .4619397663 + d7 * -.1913417162 + d6 * -.1913417162 + d5 * .4619397663 + d4 * -.4619397663 + d3 * .1913417162;
 HEAPF64[i12 + 488 >> 3] = d10 * .097545161 + 0.0 + d9 * -.2777851165 + d8 * .4157348062 + d7 * -.4903926402 + d6 * .4903926402 + d5 * -.4157348062 + d4 * .2777851165 + d3 * -.097545161;
 i20 = i12 + 48 | 0;
 d3 = +HEAPF64[i1 + 48 >> 3];
 d4 = +HEAPF64[i1 + 112 >> 3];
 d5 = +HEAPF64[i1 + 176 >> 3];
 d6 = +HEAPF64[i1 + 240 >> 3];
 d7 = +HEAPF64[i1 + 304 >> 3];
 d8 = +HEAPF64[i1 + 368 >> 3];
 d9 = +HEAPF64[i1 + 432 >> 3];
 d10 = +HEAPF64[i1 + 496 >> 3];
 HEAPF64[i20 >> 3] = d3 * .3535533906 + 0.0 + d4 * .3535533906 + d5 * .3535533906 + d6 * .3535533906 + d7 * .3535533906 + d8 * .3535533906 + d9 * .3535533906 + d10 * .3535533906;
 HEAPF64[i12 + 112 >> 3] = d3 * .4903926402 + 0.0 + d4 * .4157348062 + d5 * .2777851165 + d6 * .097545161 + d7 * -.097545161 + d8 * -.2777851165 + d9 * -.4157348062 + d10 * -.4903926402;
 HEAPF64[i12 + 176 >> 3] = d3 * .4619397663 + 0.0 + d4 * .1913417162 + d5 * -.1913417162 + d6 * -.4619397663 + d7 * -.4619397663 + d8 * -.1913417162 + d9 * .1913417162 + d10 * .4619397663;
 HEAPF64[i12 + 240 >> 3] = d3 * .4157348062 + 0.0 + d4 * -.097545161 + d5 * -.4903926402 + d6 * -.2777851165 + d7 * .2777851165 + d8 * .4903926402 + d9 * .097545161 + d10 * -.4157348062;
 HEAPF64[i12 + 304 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.3535533906 + d5 * -.3535533906 + d6 * .3535533906 + d7 * .3535533906 + d8 * -.3535533906 + d9 * -.3535533906 + d10 * .3535533906;
 HEAPF64[i12 + 368 >> 3] = d3 * .2777851165 + 0.0 + d4 * -.4903926402 + d5 * .097545161 + d6 * .4157348062 + d7 * -.4157348062 + d8 * -.097545161 + d9 * .4903926402 + d10 * -.2777851165;
 HEAPF64[i12 + 432 >> 3] = d3 * .1913417162 + 0.0 + d4 * -.4619397663 + d5 * .4619397663 + d6 * -.1913417162 + d7 * -.1913417162 + d8 * .4619397663 + d9 * -.4619397663 + d10 * .1913417162;
 HEAPF64[i12 + 496 >> 3] = d3 * .097545161 + 0.0 + d4 * -.2777851165 + d5 * .4157348062 + d6 * -.4903926402 + d7 * .4903926402 + d8 * -.4157348062 + d9 * .2777851165 + d10 * -.097545161;
 i19 = i12 + 56 | 0;
 d10 = +HEAPF64[i1 + 56 >> 3];
 d9 = +HEAPF64[i1 + 120 >> 3];
 d8 = +HEAPF64[i1 + 184 >> 3];
 d7 = +HEAPF64[i1 + 248 >> 3];
 d6 = +HEAPF64[i1 + 312 >> 3];
 d5 = +HEAPF64[i1 + 376 >> 3];
 d4 = +HEAPF64[i1 + 440 >> 3];
 d3 = +HEAPF64[i1 + 504 >> 3];
 HEAPF64[i19 >> 3] = d10 * .3535533906 + 0.0 + d9 * .3535533906 + d8 * .3535533906 + d7 * .3535533906 + d6 * .3535533906 + d5 * .3535533906 + d4 * .3535533906 + d3 * .3535533906;
 HEAPF64[i12 + 120 >> 3] = d10 * .4903926402 + 0.0 + d9 * .4157348062 + d8 * .2777851165 + d7 * .097545161 + d6 * -.097545161 + d5 * -.2777851165 + d4 * -.4157348062 + d3 * -.4903926402;
 HEAPF64[i12 + 184 >> 3] = d10 * .4619397663 + 0.0 + d9 * .1913417162 + d8 * -.1913417162 + d7 * -.4619397663 + d6 * -.4619397663 + d5 * -.1913417162 + d4 * .1913417162 + d3 * .4619397663;
 HEAPF64[i12 + 248 >> 3] = d10 * .4157348062 + 0.0 + d9 * -.097545161 + d8 * -.4903926402 + d7 * -.2777851165 + d6 * .2777851165 + d5 * .4903926402 + d4 * .097545161 + d3 * -.4157348062;
 HEAPF64[i12 + 312 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.3535533906 + d8 * -.3535533906 + d7 * .3535533906 + d6 * .3535533906 + d5 * -.3535533906 + d4 * -.3535533906 + d3 * .3535533906;
 HEAPF64[i12 + 376 >> 3] = d10 * .2777851165 + 0.0 + d9 * -.4903926402 + d8 * .097545161 + d7 * .4157348062 + d6 * -.4157348062 + d5 * -.097545161 + d4 * .4903926402 + d3 * -.2777851165;
 HEAPF64[i12 + 440 >> 3] = d10 * .1913417162 + 0.0 + d9 * -.4619397663 + d8 * .4619397663 + d7 * -.1913417162 + d6 * -.1913417162 + d5 * .4619397663 + d4 * -.4619397663 + d3 * .1913417162;
 HEAPF64[i12 + 504 >> 3] = d10 * .097545161 + 0.0 + d9 * -.2777851165 + d8 * .4157348062 + d7 * -.4903926402 + d6 * .4903926402 + d5 * -.4157348062 + d4 * .2777851165 + d3 * -.097545161;
 d3 = +HEAPF64[i12 >> 3];
 d4 = +HEAPF64[i25 >> 3];
 d5 = +HEAPF64[i24 >> 3];
 d6 = +HEAPF64[i23 >> 3];
 d7 = +HEAPF64[i22 >> 3];
 d8 = +HEAPF64[i21 >> 3];
 d9 = +HEAPF64[i20 >> 3];
 d10 = +HEAPF64[i19 >> 3];
 HEAPF64[i1 >> 3] = d3 * .3535533906 + 0.0 + d4 * .3535533906 + d5 * .3535533906 + d6 * .3535533906 + d7 * .3535533906 + d8 * .3535533906 + d9 * .3535533906 + d10 * .3535533906;
 HEAPF64[i1 + 8 >> 3] = d3 * .4903926402 + 0.0 + d4 * .4157348062 + d5 * .2777851165 + d6 * .097545161 + d7 * -.097545161 + d8 * -.2777851165 + d9 * -.4157348062 + d10 * -.4903926402;
 HEAPF64[i1 + 16 >> 3] = d3 * .4619397663 + 0.0 + d4 * .1913417162 + d5 * -.1913417162 + d6 * -.4619397663 + d7 * -.4619397663 + d8 * -.1913417162 + d9 * .1913417162 + d10 * .4619397663;
 HEAPF64[i1 + 24 >> 3] = d3 * .4157348062 + 0.0 + d4 * -.097545161 + d5 * -.4903926402 + d6 * -.2777851165 + d7 * .2777851165 + d8 * .4903926402 + d9 * .097545161 + d10 * -.4157348062;
 HEAPF64[i1 + 32 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.3535533906 + d5 * -.3535533906 + d6 * .3535533906 + d7 * .3535533906 + d8 * -.3535533906 + d9 * -.3535533906 + d10 * .3535533906;
 HEAPF64[i1 + 40 >> 3] = d3 * .2777851165 + 0.0 + d4 * -.4903926402 + d5 * .097545161 + d6 * .4157348062 + d7 * -.4157348062 + d8 * -.097545161 + d9 * .4903926402 + d10 * -.2777851165;
 HEAPF64[i1 + 48 >> 3] = d3 * .1913417162 + 0.0 + d4 * -.4619397663 + d5 * .4619397663 + d6 * -.1913417162 + d7 * -.1913417162 + d8 * .4619397663 + d9 * -.4619397663 + d10 * .1913417162;
 HEAPF64[i1 + 56 >> 3] = d3 * .097545161 + 0.0 + d4 * -.2777851165 + d5 * .4157348062 + d6 * -.4903926402 + d7 * .4903926402 + d8 * -.4157348062 + d9 * .2777851165 + d10 * -.097545161;
 d10 = +HEAPF64[i12 + 64 >> 3];
 d9 = +HEAPF64[i12 + 72 >> 3];
 d8 = +HEAPF64[i12 + 80 >> 3];
 d7 = +HEAPF64[i12 + 88 >> 3];
 d6 = +HEAPF64[i12 + 96 >> 3];
 d5 = +HEAPF64[i12 + 104 >> 3];
 d4 = +HEAPF64[i12 + 112 >> 3];
 d3 = +HEAPF64[i12 + 120 >> 3];
 HEAPF64[i18 >> 3] = d10 * .3535533906 + 0.0 + d9 * .3535533906 + d8 * .3535533906 + d7 * .3535533906 + d6 * .3535533906 + d5 * .3535533906 + d4 * .3535533906 + d3 * .3535533906;
 HEAPF64[i1 + 72 >> 3] = d10 * .4903926402 + 0.0 + d9 * .4157348062 + d8 * .2777851165 + d7 * .097545161 + d6 * -.097545161 + d5 * -.2777851165 + d4 * -.4157348062 + d3 * -.4903926402;
 HEAPF64[i1 + 80 >> 3] = d10 * .4619397663 + 0.0 + d9 * .1913417162 + d8 * -.1913417162 + d7 * -.4619397663 + d6 * -.4619397663 + d5 * -.1913417162 + d4 * .1913417162 + d3 * .4619397663;
 HEAPF64[i1 + 88 >> 3] = d10 * .4157348062 + 0.0 + d9 * -.097545161 + d8 * -.4903926402 + d7 * -.2777851165 + d6 * .2777851165 + d5 * .4903926402 + d4 * .097545161 + d3 * -.4157348062;
 HEAPF64[i1 + 96 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.3535533906 + d8 * -.3535533906 + d7 * .3535533906 + d6 * .3535533906 + d5 * -.3535533906 + d4 * -.3535533906 + d3 * .3535533906;
 HEAPF64[i1 + 104 >> 3] = d10 * .2777851165 + 0.0 + d9 * -.4903926402 + d8 * .097545161 + d7 * .4157348062 + d6 * -.4157348062 + d5 * -.097545161 + d4 * .4903926402 + d3 * -.2777851165;
 HEAPF64[i1 + 112 >> 3] = d10 * .1913417162 + 0.0 + d9 * -.4619397663 + d8 * .4619397663 + d7 * -.1913417162 + d6 * -.1913417162 + d5 * .4619397663 + d4 * -.4619397663 + d3 * .1913417162;
 HEAPF64[i1 + 120 >> 3] = d10 * .097545161 + 0.0 + d9 * -.2777851165 + d8 * .4157348062 + d7 * -.4903926402 + d6 * .4903926402 + d5 * -.4157348062 + d4 * .2777851165 + d3 * -.097545161;
 d3 = +HEAPF64[i12 + 128 >> 3];
 d4 = +HEAPF64[i12 + 136 >> 3];
 d5 = +HEAPF64[i12 + 144 >> 3];
 d6 = +HEAPF64[i12 + 152 >> 3];
 d7 = +HEAPF64[i12 + 160 >> 3];
 d8 = +HEAPF64[i12 + 168 >> 3];
 d9 = +HEAPF64[i12 + 176 >> 3];
 d10 = +HEAPF64[i12 + 184 >> 3];
 HEAPF64[i17 >> 3] = d3 * .3535533906 + 0.0 + d4 * .3535533906 + d5 * .3535533906 + d6 * .3535533906 + d7 * .3535533906 + d8 * .3535533906 + d9 * .3535533906 + d10 * .3535533906;
 HEAPF64[i1 + 136 >> 3] = d3 * .4903926402 + 0.0 + d4 * .4157348062 + d5 * .2777851165 + d6 * .097545161 + d7 * -.097545161 + d8 * -.2777851165 + d9 * -.4157348062 + d10 * -.4903926402;
 HEAPF64[i1 + 144 >> 3] = d3 * .4619397663 + 0.0 + d4 * .1913417162 + d5 * -.1913417162 + d6 * -.4619397663 + d7 * -.4619397663 + d8 * -.1913417162 + d9 * .1913417162 + d10 * .4619397663;
 HEAPF64[i1 + 152 >> 3] = d3 * .4157348062 + 0.0 + d4 * -.097545161 + d5 * -.4903926402 + d6 * -.2777851165 + d7 * .2777851165 + d8 * .4903926402 + d9 * .097545161 + d10 * -.4157348062;
 HEAPF64[i1 + 160 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.3535533906 + d5 * -.3535533906 + d6 * .3535533906 + d7 * .3535533906 + d8 * -.3535533906 + d9 * -.3535533906 + d10 * .3535533906;
 HEAPF64[i1 + 168 >> 3] = d3 * .2777851165 + 0.0 + d4 * -.4903926402 + d5 * .097545161 + d6 * .4157348062 + d7 * -.4157348062 + d8 * -.097545161 + d9 * .4903926402 + d10 * -.2777851165;
 HEAPF64[i1 + 176 >> 3] = d3 * .1913417162 + 0.0 + d4 * -.4619397663 + d5 * .4619397663 + d6 * -.1913417162 + d7 * -.1913417162 + d8 * .4619397663 + d9 * -.4619397663 + d10 * .1913417162;
 HEAPF64[i1 + 184 >> 3] = d3 * .097545161 + 0.0 + d4 * -.2777851165 + d5 * .4157348062 + d6 * -.4903926402 + d7 * .4903926402 + d8 * -.4157348062 + d9 * .2777851165 + d10 * -.097545161;
 d10 = +HEAPF64[i12 + 192 >> 3];
 d9 = +HEAPF64[i12 + 200 >> 3];
 d8 = +HEAPF64[i12 + 208 >> 3];
 d7 = +HEAPF64[i12 + 216 >> 3];
 d6 = +HEAPF64[i12 + 224 >> 3];
 d5 = +HEAPF64[i12 + 232 >> 3];
 d4 = +HEAPF64[i12 + 240 >> 3];
 d3 = +HEAPF64[i12 + 248 >> 3];
 HEAPF64[i16 >> 3] = d10 * .3535533906 + 0.0 + d9 * .3535533906 + d8 * .3535533906 + d7 * .3535533906 + d6 * .3535533906 + d5 * .3535533906 + d4 * .3535533906 + d3 * .3535533906;
 HEAPF64[i1 + 200 >> 3] = d10 * .4903926402 + 0.0 + d9 * .4157348062 + d8 * .2777851165 + d7 * .097545161 + d6 * -.097545161 + d5 * -.2777851165 + d4 * -.4157348062 + d3 * -.4903926402;
 HEAPF64[i1 + 208 >> 3] = d10 * .4619397663 + 0.0 + d9 * .1913417162 + d8 * -.1913417162 + d7 * -.4619397663 + d6 * -.4619397663 + d5 * -.1913417162 + d4 * .1913417162 + d3 * .4619397663;
 HEAPF64[i1 + 216 >> 3] = d10 * .4157348062 + 0.0 + d9 * -.097545161 + d8 * -.4903926402 + d7 * -.2777851165 + d6 * .2777851165 + d5 * .4903926402 + d4 * .097545161 + d3 * -.4157348062;
 HEAPF64[i1 + 224 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.3535533906 + d8 * -.3535533906 + d7 * .3535533906 + d6 * .3535533906 + d5 * -.3535533906 + d4 * -.3535533906 + d3 * .3535533906;
 HEAPF64[i1 + 232 >> 3] = d10 * .2777851165 + 0.0 + d9 * -.4903926402 + d8 * .097545161 + d7 * .4157348062 + d6 * -.4157348062 + d5 * -.097545161 + d4 * .4903926402 + d3 * -.2777851165;
 HEAPF64[i1 + 240 >> 3] = d10 * .1913417162 + 0.0 + d9 * -.4619397663 + d8 * .4619397663 + d7 * -.1913417162 + d6 * -.1913417162 + d5 * .4619397663 + d4 * -.4619397663 + d3 * .1913417162;
 HEAPF64[i1 + 248 >> 3] = d10 * .097545161 + 0.0 + d9 * -.2777851165 + d8 * .4157348062 + d7 * -.4903926402 + d6 * .4903926402 + d5 * -.4157348062 + d4 * .2777851165 + d3 * -.097545161;
 d3 = +HEAPF64[i12 + 256 >> 3];
 d4 = +HEAPF64[i12 + 264 >> 3];
 d5 = +HEAPF64[i12 + 272 >> 3];
 d6 = +HEAPF64[i12 + 280 >> 3];
 d7 = +HEAPF64[i12 + 288 >> 3];
 d8 = +HEAPF64[i12 + 296 >> 3];
 d9 = +HEAPF64[i12 + 304 >> 3];
 d10 = +HEAPF64[i12 + 312 >> 3];
 HEAPF64[i15 >> 3] = d3 * .3535533906 + 0.0 + d4 * .3535533906 + d5 * .3535533906 + d6 * .3535533906 + d7 * .3535533906 + d8 * .3535533906 + d9 * .3535533906 + d10 * .3535533906;
 HEAPF64[i1 + 264 >> 3] = d3 * .4903926402 + 0.0 + d4 * .4157348062 + d5 * .2777851165 + d6 * .097545161 + d7 * -.097545161 + d8 * -.2777851165 + d9 * -.4157348062 + d10 * -.4903926402;
 HEAPF64[i1 + 272 >> 3] = d3 * .4619397663 + 0.0 + d4 * .1913417162 + d5 * -.1913417162 + d6 * -.4619397663 + d7 * -.4619397663 + d8 * -.1913417162 + d9 * .1913417162 + d10 * .4619397663;
 HEAPF64[i1 + 280 >> 3] = d3 * .4157348062 + 0.0 + d4 * -.097545161 + d5 * -.4903926402 + d6 * -.2777851165 + d7 * .2777851165 + d8 * .4903926402 + d9 * .097545161 + d10 * -.4157348062;
 HEAPF64[i1 + 288 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.3535533906 + d5 * -.3535533906 + d6 * .3535533906 + d7 * .3535533906 + d8 * -.3535533906 + d9 * -.3535533906 + d10 * .3535533906;
 HEAPF64[i1 + 296 >> 3] = d3 * .2777851165 + 0.0 + d4 * -.4903926402 + d5 * .097545161 + d6 * .4157348062 + d7 * -.4157348062 + d8 * -.097545161 + d9 * .4903926402 + d10 * -.2777851165;
 HEAPF64[i1 + 304 >> 3] = d3 * .1913417162 + 0.0 + d4 * -.4619397663 + d5 * .4619397663 + d6 * -.1913417162 + d7 * -.1913417162 + d8 * .4619397663 + d9 * -.4619397663 + d10 * .1913417162;
 HEAPF64[i1 + 312 >> 3] = d3 * .097545161 + 0.0 + d4 * -.2777851165 + d5 * .4157348062 + d6 * -.4903926402 + d7 * .4903926402 + d8 * -.4157348062 + d9 * .2777851165 + d10 * -.097545161;
 d10 = +HEAPF64[i12 + 320 >> 3];
 d9 = +HEAPF64[i12 + 328 >> 3];
 d8 = +HEAPF64[i12 + 336 >> 3];
 d7 = +HEAPF64[i12 + 344 >> 3];
 d6 = +HEAPF64[i12 + 352 >> 3];
 d5 = +HEAPF64[i12 + 360 >> 3];
 d4 = +HEAPF64[i12 + 368 >> 3];
 d3 = +HEAPF64[i12 + 376 >> 3];
 HEAPF64[i14 >> 3] = d10 * .3535533906 + 0.0 + d9 * .3535533906 + d8 * .3535533906 + d7 * .3535533906 + d6 * .3535533906 + d5 * .3535533906 + d4 * .3535533906 + d3 * .3535533906;
 HEAPF64[i1 + 328 >> 3] = d10 * .4903926402 + 0.0 + d9 * .4157348062 + d8 * .2777851165 + d7 * .097545161 + d6 * -.097545161 + d5 * -.2777851165 + d4 * -.4157348062 + d3 * -.4903926402;
 HEAPF64[i1 + 336 >> 3] = d10 * .4619397663 + 0.0 + d9 * .1913417162 + d8 * -.1913417162 + d7 * -.4619397663 + d6 * -.4619397663 + d5 * -.1913417162 + d4 * .1913417162 + d3 * .4619397663;
 HEAPF64[i1 + 344 >> 3] = d10 * .4157348062 + 0.0 + d9 * -.097545161 + d8 * -.4903926402 + d7 * -.2777851165 + d6 * .2777851165 + d5 * .4903926402 + d4 * .097545161 + d3 * -.4157348062;
 HEAPF64[i1 + 352 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.3535533906 + d8 * -.3535533906 + d7 * .3535533906 + d6 * .3535533906 + d5 * -.3535533906 + d4 * -.3535533906 + d3 * .3535533906;
 HEAPF64[i1 + 360 >> 3] = d10 * .2777851165 + 0.0 + d9 * -.4903926402 + d8 * .097545161 + d7 * .4157348062 + d6 * -.4157348062 + d5 * -.097545161 + d4 * .4903926402 + d3 * -.2777851165;
 HEAPF64[i1 + 368 >> 3] = d10 * .1913417162 + 0.0 + d9 * -.4619397663 + d8 * .4619397663 + d7 * -.1913417162 + d6 * -.1913417162 + d5 * .4619397663 + d4 * -.4619397663 + d3 * .1913417162;
 HEAPF64[i1 + 376 >> 3] = d10 * .097545161 + 0.0 + d9 * -.2777851165 + d8 * .4157348062 + d7 * -.4903926402 + d6 * .4903926402 + d5 * -.4157348062 + d4 * .2777851165 + d3 * -.097545161;
 d3 = +HEAPF64[i12 + 384 >> 3];
 d4 = +HEAPF64[i12 + 392 >> 3];
 d5 = +HEAPF64[i12 + 400 >> 3];
 d6 = +HEAPF64[i12 + 408 >> 3];
 d7 = +HEAPF64[i12 + 416 >> 3];
 d8 = +HEAPF64[i12 + 424 >> 3];
 d9 = +HEAPF64[i12 + 432 >> 3];
 d10 = +HEAPF64[i12 + 440 >> 3];
 HEAPF64[i13 >> 3] = d3 * .3535533906 + 0.0 + d4 * .3535533906 + d5 * .3535533906 + d6 * .3535533906 + d7 * .3535533906 + d8 * .3535533906 + d9 * .3535533906 + d10 * .3535533906;
 HEAPF64[i1 + 392 >> 3] = d3 * .4903926402 + 0.0 + d4 * .4157348062 + d5 * .2777851165 + d6 * .097545161 + d7 * -.097545161 + d8 * -.2777851165 + d9 * -.4157348062 + d10 * -.4903926402;
 HEAPF64[i1 + 400 >> 3] = d3 * .4619397663 + 0.0 + d4 * .1913417162 + d5 * -.1913417162 + d6 * -.4619397663 + d7 * -.4619397663 + d8 * -.1913417162 + d9 * .1913417162 + d10 * .4619397663;
 HEAPF64[i1 + 408 >> 3] = d3 * .4157348062 + 0.0 + d4 * -.097545161 + d5 * -.4903926402 + d6 * -.2777851165 + d7 * .2777851165 + d8 * .4903926402 + d9 * .097545161 + d10 * -.4157348062;
 HEAPF64[i1 + 416 >> 3] = d3 * .3535533906 + 0.0 + d4 * -.3535533906 + d5 * -.3535533906 + d6 * .3535533906 + d7 * .3535533906 + d8 * -.3535533906 + d9 * -.3535533906 + d10 * .3535533906;
 HEAPF64[i1 + 424 >> 3] = d3 * .2777851165 + 0.0 + d4 * -.4903926402 + d5 * .097545161 + d6 * .4157348062 + d7 * -.4157348062 + d8 * -.097545161 + d9 * .4903926402 + d10 * -.2777851165;
 HEAPF64[i1 + 432 >> 3] = d3 * .1913417162 + 0.0 + d4 * -.4619397663 + d5 * .4619397663 + d6 * -.1913417162 + d7 * -.1913417162 + d8 * .4619397663 + d9 * -.4619397663 + d10 * .1913417162;
 HEAPF64[i1 + 440 >> 3] = d3 * .097545161 + 0.0 + d4 * -.2777851165 + d5 * .4157348062 + d6 * -.4903926402 + d7 * .4903926402 + d8 * -.4157348062 + d9 * .2777851165 + d10 * -.097545161;
 d10 = +HEAPF64[i12 + 448 >> 3];
 d9 = +HEAPF64[i12 + 456 >> 3];
 d8 = +HEAPF64[i12 + 464 >> 3];
 d7 = +HEAPF64[i12 + 472 >> 3];
 d6 = +HEAPF64[i12 + 480 >> 3];
 d5 = +HEAPF64[i12 + 488 >> 3];
 d4 = +HEAPF64[i12 + 496 >> 3];
 d3 = +HEAPF64[i12 + 504 >> 3];
 HEAPF64[i11 >> 3] = d10 * .3535533906 + 0.0 + d9 * .3535533906 + d8 * .3535533906 + d7 * .3535533906 + d6 * .3535533906 + d5 * .3535533906 + d4 * .3535533906 + d3 * .3535533906;
 HEAPF64[i1 + 456 >> 3] = d10 * .4903926402 + 0.0 + d9 * .4157348062 + d8 * .2777851165 + d7 * .097545161 + d6 * -.097545161 + d5 * -.2777851165 + d4 * -.4157348062 + d3 * -.4903926402;
 HEAPF64[i1 + 464 >> 3] = d10 * .4619397663 + 0.0 + d9 * .1913417162 + d8 * -.1913417162 + d7 * -.4619397663 + d6 * -.4619397663 + d5 * -.1913417162 + d4 * .1913417162 + d3 * .4619397663;
 HEAPF64[i1 + 472 >> 3] = d10 * .4157348062 + 0.0 + d9 * -.097545161 + d8 * -.4903926402 + d7 * -.2777851165 + d6 * .2777851165 + d5 * .4903926402 + d4 * .097545161 + d3 * -.4157348062;
 HEAPF64[i1 + 480 >> 3] = d10 * .3535533906 + 0.0 + d9 * -.3535533906 + d8 * -.3535533906 + d7 * .3535533906 + d6 * .3535533906 + d5 * -.3535533906 + d4 * -.3535533906 + d3 * .3535533906;
 HEAPF64[i1 + 488 >> 3] = d10 * .2777851165 + 0.0 + d9 * -.4903926402 + d8 * .097545161 + d7 * .4157348062 + d6 * -.4157348062 + d5 * -.097545161 + d4 * .4903926402 + d3 * -.2777851165;
 HEAPF64[i1 + 496 >> 3] = d10 * .1913417162 + 0.0 + d9 * -.4619397663 + d8 * .4619397663 + d7 * -.1913417162 + d6 * -.1913417162 + d5 * .4619397663 + d4 * -.4619397663 + d3 * .1913417162;
 HEAPF64[i1 + 504 >> 3] = d10 * .097545161 + 0.0 + d9 * -.2777851165 + d8 * .4157348062 + d7 * -.4903926402 + d6 * .4903926402 + d5 * -.4157348062 + d4 * .2777851165 + d3 * -.097545161;
 STACKTOP = i2;
 return;
}
function __ZN11butteraugli21ButteraugliFFTSquaredEPd(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = 0.0, d17 = 0.0, d18 = 0.0, d19 = 0.0, d20 = 0.0, d21 = 0.0, d22 = 0.0, d23 = 0.0, d24 = 0.0, d25 = 0.0, d26 = 0.0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, d40 = 0.0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 1104 | 0;
 i2 = i6 + 1088 | 0;
 i5 = i6 + 64 | 0;
 i3 = i6;
 i1 = 0;
 do {
  i15 = i1 << 3;
  i12 = i4 + (i15 << 3) | 0;
  i14 = i5 + (i15 << 4) | 0;
  d22 = +HEAPF64[i12 + 48 >> 3];
  d17 = +HEAPF64[i12 + 16 >> 3];
  d16 = d17 - d22;
  d17 = d22 + d17;
  i13 = i14 + 32 | 0;
  i7 = i14 + 96 | 0;
  i9 = i14 + 64 | 0;
  d22 = +HEAPF64[i12 + 32 >> 3];
  d19 = +HEAPF64[i12 >> 3];
  d26 = d19 - d22;
  d19 = d22 + d19;
  d22 = +HEAPF64[i12 + 40 >> 3];
  d20 = +HEAPF64[i12 + 8 >> 3];
  d21 = d20 - d22;
  d20 = d22 + d20;
  i8 = i14 + 16 | 0;
  d22 = +HEAPF64[i12 + 56 >> 3];
  d18 = +HEAPF64[i12 + 24 >> 3];
  d24 = d18 - d22;
  d18 = d22 + d18;
  i12 = i14 + 48 | 0;
  d22 = (d21 - d24) * .7071067811865476;
  d23 = d26 - d22;
  i11 = i14 + 80 | 0;
  HEAPF64[i11 >> 3] = d23;
  d25 = (d21 + d24) * .7071067811865476;
  HEAPF64[i14 + 88 >> 3] = d16 - d25;
  d22 = d26 + d22;
  HEAPF64[i9 >> 3] = d22;
  HEAPF64[i14 + 72 >> 3] = d16 + d25;
  d21 = (-d24 - d21) * .7071067811865476;
  i10 = i14 + 112 | 0;
  HEAPF64[i14 + 120 >> 3] = -d16 - d21;
  HEAPF64[i10 >> 3] = d23;
  HEAPF64[i7 >> 3] = d22;
  HEAPF64[i14 + 104 >> 3] = d21 - d16;
  d16 = d19 - d17;
  d19 = d17 + d19;
  d17 = d20 - d18;
  d18 = d20 + d18;
  HEAPF64[i14 >> 3] = d19 + d18;
  HEAPF64[i8 >> 3] = d19 - d18;
  HEAPF64[i14 + 40 >> 3] = d17;
  HEAPF64[i14 + 56 >> 3] = -d17;
  HEAPF64[i12 >> 3] = d16;
  HEAPF64[i13 >> 3] = d16;
  HEAPF64[i5 + (i15 << 4) + 8 >> 3] = 0.0;
  HEAPF64[i14 + 24 >> 3] = 0.0;
  HEAP32[i2 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
  HEAP32[i2 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
  HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i13 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
  HEAP32[i13 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
  HEAP32[i13 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
  HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i12 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
  HEAP32[i12 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
  HEAP32[i12 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
  HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i11 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i11 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i11 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
  HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i10 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i10 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  HEAP32[i10 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
  HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
  HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i8 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
  HEAP32[i8 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
  HEAP32[i8 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
  HEAP32[i7 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i7 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i7 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
  HEAP32[i7 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
  i1 = i1 + 1 | 0;
 } while ((i1 | 0) != 8);
 i14 = i5 + 128 | 0;
 i34 = i5 + 16 | 0;
 HEAP32[i2 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
 HEAP32[i14 >> 2] = HEAP32[i34 >> 2];
 HEAP32[i14 + 4 >> 2] = HEAP32[i34 + 4 >> 2];
 HEAP32[i14 + 8 >> 2] = HEAP32[i34 + 8 >> 2];
 HEAP32[i14 + 12 >> 2] = HEAP32[i34 + 12 >> 2];
 HEAP32[i34 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i34 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i34 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i34 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i15 = i5 + 256 | 0;
 i39 = i5 + 32 | 0;
 HEAP32[i2 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
 HEAP32[i15 >> 2] = HEAP32[i39 >> 2];
 HEAP32[i15 + 4 >> 2] = HEAP32[i39 + 4 >> 2];
 HEAP32[i15 + 8 >> 2] = HEAP32[i39 + 8 >> 2];
 HEAP32[i15 + 12 >> 2] = HEAP32[i39 + 12 >> 2];
 HEAP32[i39 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i39 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i39 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i39 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i38 = i5 + 272 | 0;
 i1 = i5 + 160 | 0;
 HEAP32[i2 >> 2] = HEAP32[i38 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i38 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i38 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i38 + 12 >> 2];
 HEAP32[i38 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i38 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i38 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i38 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i1 = i5 + 384 | 0;
 i38 = i5 + 48 | 0;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 HEAP32[i1 >> 2] = HEAP32[i38 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i38 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i38 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i38 + 12 >> 2];
 HEAP32[i38 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i38 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i38 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i38 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i12 = i5 + 400 | 0;
 i35 = i5 + 176 | 0;
 HEAP32[i2 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
 HEAP32[i12 >> 2] = HEAP32[i35 >> 2];
 HEAP32[i12 + 4 >> 2] = HEAP32[i35 + 4 >> 2];
 HEAP32[i12 + 8 >> 2] = HEAP32[i35 + 8 >> 2];
 HEAP32[i12 + 12 >> 2] = HEAP32[i35 + 12 >> 2];
 HEAP32[i35 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i35 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i35 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i35 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i35 = i5 + 416 | 0;
 i12 = i5 + 304 | 0;
 HEAP32[i2 >> 2] = HEAP32[i35 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i35 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i35 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i35 + 12 >> 2];
 HEAP32[i35 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i35 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
 HEAP32[i35 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
 HEAP32[i35 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
 HEAP32[i12 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i12 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i12 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i12 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i12 = i5 + 512 | 0;
 i35 = i5 + 64 | 0;
 HEAP32[i2 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
 HEAP32[i12 >> 2] = HEAP32[i35 >> 2];
 HEAP32[i12 + 4 >> 2] = HEAP32[i35 + 4 >> 2];
 HEAP32[i12 + 8 >> 2] = HEAP32[i35 + 8 >> 2];
 HEAP32[i12 + 12 >> 2] = HEAP32[i35 + 12 >> 2];
 HEAP32[i35 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i35 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i35 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i35 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i12 = i5 + 528 | 0;
 i7 = i5 + 192 | 0;
 HEAP32[i2 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
 HEAP32[i12 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i12 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i12 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i12 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 HEAP32[i7 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i7 = i5 + 544 | 0;
 i8 = i5 + 320 | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i8 = i5 + 560 | 0;
 i9 = i5 + 448 | 0;
 HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 HEAP32[i9 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i9 = i5 + 640 | 0;
 i37 = i5 + 80 | 0;
 HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 HEAP32[i9 >> 2] = HEAP32[i37 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i37 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i37 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i37 + 12 >> 2];
 HEAP32[i37 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i37 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i37 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i37 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i9 = i5 + 656 | 0;
 i13 = i5 + 208 | 0;
 HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 HEAP32[i9 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 HEAP32[i13 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i13 = i5 + 672 | 0;
 i9 = i5 + 336 | 0;
 HEAP32[i2 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 HEAP32[i13 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 HEAP32[i9 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i9 = i5 + 688 | 0;
 i13 = i5 + 464 | 0;
 HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 HEAP32[i9 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 HEAP32[i13 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i13 = i5 + 704 | 0;
 i9 = i5 + 592 | 0;
 HEAP32[i2 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 HEAP32[i13 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 HEAP32[i9 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i13 = i5 + 768 | 0;
 i33 = i5 + 96 | 0;
 HEAP32[i2 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 HEAP32[i13 >> 2] = HEAP32[i33 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i33 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i33 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i33 + 12 >> 2];
 HEAP32[i33 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i33 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i33 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i33 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i13 = i5 + 784 | 0;
 i36 = i5 + 224 | 0;
 HEAP32[i2 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 HEAP32[i13 >> 2] = HEAP32[i36 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i36 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i36 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i36 + 12 >> 2];
 HEAP32[i36 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i36 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i36 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i36 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i36 = i5 + 800 | 0;
 i13 = i5 + 352 | 0;
 HEAP32[i2 >> 2] = HEAP32[i36 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i36 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i36 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i36 + 12 >> 2];
 HEAP32[i36 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i36 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i36 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i36 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 HEAP32[i13 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i13 = i5 + 816 | 0;
 i36 = i5 + 480 | 0;
 HEAP32[i2 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 HEAP32[i13 >> 2] = HEAP32[i36 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i36 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i36 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i36 + 12 >> 2];
 HEAP32[i36 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i36 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i36 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i36 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i36 = i5 + 832 | 0;
 i13 = i5 + 608 | 0;
 HEAP32[i2 >> 2] = HEAP32[i36 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i36 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i36 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i36 + 12 >> 2];
 HEAP32[i36 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i36 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i36 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i36 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 HEAP32[i13 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i36 = i5 + 848 | 0;
 i10 = i5 + 736 | 0;
 HEAP32[i2 >> 2] = HEAP32[i36 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i36 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i36 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i36 + 12 >> 2];
 HEAP32[i36 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i36 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i36 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i36 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 HEAP32[i10 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i10 = i5 + 896 | 0;
 i36 = i5 + 112 | 0;
 HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 HEAP32[i10 >> 2] = HEAP32[i36 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i36 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i36 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i36 + 12 >> 2];
 HEAP32[i36 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i36 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i36 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i36 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i10 = i5 + 912 | 0;
 i27 = i5 + 240 | 0;
 HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 HEAP32[i10 >> 2] = HEAP32[i27 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
 HEAP32[i27 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i27 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i27 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i27 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i27 = i5 + 928 | 0;
 i10 = i5 + 368 | 0;
 HEAP32[i2 >> 2] = HEAP32[i27 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
 HEAP32[i27 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i27 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i27 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i27 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 HEAP32[i10 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i10 = i5 + 944 | 0;
 i27 = i5 + 496 | 0;
 HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 HEAP32[i10 >> 2] = HEAP32[i27 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
 HEAP32[i27 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i27 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i27 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i27 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i27 = i5 + 960 | 0;
 i10 = i5 + 624 | 0;
 HEAP32[i2 >> 2] = HEAP32[i27 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
 HEAP32[i27 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i27 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i27 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i27 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 HEAP32[i10 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i27 = i5 + 976 | 0;
 i30 = i5 + 752 | 0;
 HEAP32[i2 >> 2] = HEAP32[i27 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
 HEAP32[i27 >> 2] = HEAP32[i30 >> 2];
 HEAP32[i27 + 4 >> 2] = HEAP32[i30 + 4 >> 2];
 HEAP32[i27 + 8 >> 2] = HEAP32[i30 + 8 >> 2];
 HEAP32[i27 + 12 >> 2] = HEAP32[i30 + 12 >> 2];
 HEAP32[i30 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i30 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i30 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i30 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i30 = i5 + 992 | 0;
 i27 = i5 + 880 | 0;
 HEAP32[i2 >> 2] = HEAP32[i30 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i30 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i30 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i30 + 12 >> 2];
 HEAP32[i30 >> 2] = HEAP32[i27 >> 2];
 HEAP32[i30 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
 HEAP32[i30 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
 HEAP32[i30 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
 HEAP32[i27 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i27 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i27 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i27 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 d16 = +HEAPF64[i5 >> 3];
 i27 = i5 + 512 | 0;
 HEAPF64[i3 >> 3] = +HEAPF64[i27 >> 3];
 d22 = +HEAPF64[i5 + 16 >> 3];
 i30 = i3 + 8 | 0;
 HEAPF64[i30 >> 3] = +HEAPF64[i5 + 528 >> 3];
 d26 = +HEAPF64[i5 + 32 >> 3];
 i11 = i3 + 16 | 0;
 HEAPF64[i11 >> 3] = +HEAPF64[i5 + 544 >> 3];
 d23 = +HEAPF64[i5 + 48 >> 3];
 i28 = i3 + 24 | 0;
 HEAPF64[i28 >> 3] = +HEAPF64[i5 + 560 >> 3];
 d21 = +HEAPF64[i5 + 64 >> 3];
 i32 = i3 + 32 | 0;
 HEAPF64[i32 >> 3] = +HEAPF64[i5 + 576 >> 3];
 d19 = +HEAPF64[i5 + 80 >> 3];
 i31 = i3 + 40 | 0;
 HEAPF64[i31 >> 3] = +HEAPF64[i5 + 592 >> 3];
 d40 = +HEAPF64[i5 + 96 >> 3];
 d20 = +HEAPF64[i5 + 608 >> 3];
 HEAPF64[i3 + 48 >> 3] = d20;
 d24 = +HEAPF64[i5 + 112 >> 3];
 i29 = i3 + 56 | 0;
 HEAPF64[i29 >> 3] = +HEAPF64[i5 + 624 >> 3];
 d25 = d26 - d40;
 d26 = d40 + d26;
 d40 = d16 - d21;
 d16 = d21 + d16;
 d21 = d22 - d19;
 d22 = d19 + d22;
 d19 = d23 - d24;
 d23 = d24 + d23;
 d24 = (d21 - d19) * .7071067811865476;
 d18 = d40 - d24;
 HEAPF64[i37 >> 3] = d18;
 d17 = (d21 + d19) * .7071067811865476;
 HEAPF64[i5 + 88 >> 3] = d25 - d17;
 d24 = d40 + d24;
 HEAPF64[i35 >> 3] = d24;
 HEAPF64[i5 + 72 >> 3] = d25 + d17;
 d21 = (-d19 - d21) * .7071067811865476;
 HEAPF64[i5 + 120 >> 3] = -d25 - d21;
 HEAPF64[i36 >> 3] = d18;
 HEAPF64[i33 >> 3] = d24;
 HEAPF64[i5 + 104 >> 3] = d21 - d25;
 d25 = d16 - d26;
 d16 = d26 + d16;
 d26 = d22 - d23;
 d23 = d22 + d23;
 HEAPF64[i5 >> 3] = d16 + d23;
 HEAPF64[i34 >> 3] = d16 - d23;
 HEAPF64[i5 + 40 >> 3] = d26;
 HEAPF64[i5 + 56 >> 3] = -d26;
 HEAPF64[i38 >> 3] = d25;
 HEAPF64[i39 >> 3] = d25;
 HEAPF64[i5 + 8 >> 3] = 0.0;
 HEAPF64[i5 + 24 >> 3] = 0.0;
 HEAP32[i2 >> 2] = HEAP32[i39 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i39 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i39 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i39 + 12 >> 2];
 HEAP32[i39 >> 2] = HEAP32[i38 >> 2];
 HEAP32[i39 + 4 >> 2] = HEAP32[i38 + 4 >> 2];
 HEAP32[i39 + 8 >> 2] = HEAP32[i38 + 8 >> 2];
 HEAP32[i39 + 12 >> 2] = HEAP32[i38 + 12 >> 2];
 HEAP32[i38 >> 2] = HEAP32[i37 >> 2];
 HEAP32[i38 + 4 >> 2] = HEAP32[i37 + 4 >> 2];
 HEAP32[i38 + 8 >> 2] = HEAP32[i37 + 8 >> 2];
 HEAP32[i38 + 12 >> 2] = HEAP32[i37 + 12 >> 2];
 HEAP32[i37 >> 2] = HEAP32[i36 >> 2];
 HEAP32[i37 + 4 >> 2] = HEAP32[i36 + 4 >> 2];
 HEAP32[i37 + 8 >> 2] = HEAP32[i36 + 8 >> 2];
 HEAP32[i37 + 12 >> 2] = HEAP32[i36 + 12 >> 2];
 HEAP32[i36 >> 2] = HEAP32[i35 >> 2];
 HEAP32[i36 + 4 >> 2] = HEAP32[i35 + 4 >> 2];
 HEAP32[i36 + 8 >> 2] = HEAP32[i35 + 8 >> 2];
 HEAP32[i36 + 12 >> 2] = HEAP32[i35 + 12 >> 2];
 HEAP32[i35 >> 2] = HEAP32[i34 >> 2];
 HEAP32[i35 + 4 >> 2] = HEAP32[i34 + 4 >> 2];
 HEAP32[i35 + 8 >> 2] = HEAP32[i34 + 8 >> 2];
 HEAP32[i35 + 12 >> 2] = HEAP32[i34 + 12 >> 2];
 HEAP32[i34 >> 2] = HEAP32[i33 >> 2];
 HEAP32[i34 + 4 >> 2] = HEAP32[i33 + 4 >> 2];
 HEAP32[i34 + 8 >> 2] = HEAP32[i33 + 8 >> 2];
 HEAP32[i34 + 12 >> 2] = HEAP32[i33 + 12 >> 2];
 HEAP32[i33 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i33 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i33 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i33 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 d25 = +HEAPF64[i11 >> 3];
 d26 = d25 - d20;
 d25 = d20 + d25;
 i11 = i5 + 576 | 0;
 d20 = +HEAPF64[i32 >> 3];
 d23 = +HEAPF64[i3 >> 3];
 d16 = d23 - d20;
 d23 = d20 + d23;
 d20 = +HEAPF64[i31 >> 3];
 d22 = +HEAPF64[i30 >> 3];
 d21 = d22 - d20;
 d22 = d20 + d22;
 d20 = +HEAPF64[i29 >> 3];
 d24 = +HEAPF64[i28 >> 3];
 d18 = d24 - d20;
 d24 = d20 + d24;
 d20 = (d21 - d18) * .7071067811865476;
 d19 = d16 - d20;
 HEAPF64[i9 >> 3] = d19;
 d17 = (d21 + d18) * .7071067811865476;
 HEAPF64[i5 + 600 >> 3] = d26 - d17;
 d20 = d16 + d20;
 HEAPF64[i11 >> 3] = d20;
 HEAPF64[i5 + 584 >> 3] = d26 + d17;
 d21 = (-d18 - d21) * .7071067811865476;
 HEAPF64[i5 + 632 >> 3] = -d26 - d21;
 HEAPF64[i10 >> 3] = d19;
 HEAPF64[i13 >> 3] = d20;
 HEAPF64[i5 + 616 >> 3] = d21 - d26;
 d26 = d23 - d25;
 d23 = d25 + d23;
 d25 = d22 - d24;
 d24 = d22 + d24;
 HEAPF64[i27 >> 3] = d23 + d24;
 HEAPF64[i12 >> 3] = d23 - d24;
 HEAPF64[i5 + 552 >> 3] = d25;
 HEAPF64[i5 + 568 >> 3] = -d25;
 HEAPF64[i8 >> 3] = d26;
 HEAPF64[i7 >> 3] = d26;
 HEAPF64[i5 + 520 >> 3] = 0.0;
 HEAPF64[i5 + 536 >> 3] = 0.0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i11 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
 HEAP32[i11 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
 HEAP32[i11 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
 HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i12 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i12 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i12 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 HEAP32[i13 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 __ZN11butteraugli4FFT8EPNS_7ComplexE(i14);
 __ZN11butteraugli4FFT8EPNS_7ComplexE(i15);
 __ZN11butteraugli4FFT8EPNS_7ComplexE(i1);
 i1 = 4;
 do {
  d26 = +HEAPF64[i5 + (i1 << 4) >> 3];
  d40 = +HEAPF64[i5 + (i1 << 4) + 8 >> 3];
  HEAPF64[i4 + (i1 << 3) >> 3] = (d26 * d26 + d40 * d40) * .000064;
  i1 = i1 + 1 | 0;
 } while ((i1 | 0) != 37);
 STACKTOP = i6;
 return;
}

function __ZN7guetzli9WriteJpegERKNS_8JPEGDataEbNS_10JPEGOutputE(i40, i39, i1) {
 i40 = i40 | 0;
 i39 = i39 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i47 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i36 = i47 + 32 | 0;
 i38 = i47;
 i44 = i47 + 56 | 0;
 i43 = i47 + 44 | 0;
 HEAP32[i44 >> 2] = 0;
 i46 = i44 + 4 | 0;
 HEAP32[i46 >> 2] = 0;
 HEAP32[i44 + 8 >> 2] = 0;
 HEAP32[i43 >> 2] = 0;
 i45 = i43 + 4 | 0;
 HEAP32[i45 >> 2] = 0;
 HEAP32[i43 + 8 >> 2] = 0;
 i42 = HEAP32[i1 >> 2] | 0;
 i41 = HEAP32[i1 + 4 >> 2] | 0;
 L1 : do if ((FUNCTION_TABLE_iiii[i42 & 7](i41, 10103, 2) | 0) == 2) {
  if (i39) {
   if ((FUNCTION_TABLE_iiii[i42 & 7](i41, 13835, 18) | 0) != 18) {
    i3 = 0;
    break;
   }
  } else {
   i7 = i40 + 32 | 0;
   i8 = i40 + 36 | 0;
   if ((HEAP32[i8 >> 2] | 0) == (HEAP32[i7 >> 2] | 0)) i1 = 1; else {
    i6 = 0;
    i1 = 1;
    do {
     HEAP8[i36 >> 0] = -1;
     L10 : do if (i1 ? (FUNCTION_TABLE_iiii[i42 & 7](i41, i36, 1) | 0) == 1 : 0) {
      i1 = HEAP32[i7 >> 2] | 0;
      i3 = i1 + (i6 * 12 | 0) | 0;
      i4 = HEAP8[i3 + 11 >> 0] | 0;
      i33 = i4 << 24 >> 24 < 0;
      i2 = HEAP32[i3 >> 2] | 0;
      i5 = i33 ? i2 : i3;
      if (i33) {
       i1 = HEAP32[i1 + (i6 * 12 | 0) + 4 >> 2] | 0;
       if (i1 >>> 0 > 1073741824) {
        i4 = 0;
        while (1) {
         i4 = i4 + 1073741824 | 0;
         if ((FUNCTION_TABLE_iiii[i42 & 7](i41, i2, 1073741824) | 0) != 1073741824) {
          i1 = 0;
          break L10;
         }
         i3 = i1 - i4 | 0;
         i2 = i5 + i4 | 0;
         if (i3 >>> 0 <= 1073741824) {
          i1 = i3;
          break;
         }
        }
       }
      } else {
       i2 = i3;
       i1 = i4 & 255;
      }
      if (!i1) i1 = 1; else i1 = (FUNCTION_TABLE_iiii[i42 & 7](i41, i2, i1) | 0) == (i1 | 0);
     } else i1 = 0; while (0);
     i6 = i6 + 1 | 0;
    } while (i6 >>> 0 < (((HEAP32[i8 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0) / 12 | 0) >>> 0);
   }
   i7 = i40 + 44 | 0;
   i8 = i40 + 48 | 0;
   if ((HEAP32[i8 >> 2] | 0) != (HEAP32[i7 >> 2] | 0)) {
    i6 = 0;
    do {
     HEAP16[i36 >> 1] = -257;
     L27 : do if (i1 ? (FUNCTION_TABLE_iiii[i42 & 7](i41, i36, 2) | 0) == 2 : 0) {
      i1 = HEAP32[i7 >> 2] | 0;
      i3 = i1 + (i6 * 12 | 0) | 0;
      i4 = HEAP8[i3 + 11 >> 0] | 0;
      i33 = i4 << 24 >> 24 < 0;
      i2 = HEAP32[i3 >> 2] | 0;
      i5 = i33 ? i2 : i3;
      if (i33) {
       i1 = HEAP32[i1 + (i6 * 12 | 0) + 4 >> 2] | 0;
       if (i1 >>> 0 > 1073741824) {
        i4 = 0;
        while (1) {
         i4 = i4 + 1073741824 | 0;
         if ((FUNCTION_TABLE_iiii[i42 & 7](i41, i2, 1073741824) | 0) != 1073741824) {
          i1 = 0;
          break L27;
         }
         i3 = i1 - i4 | 0;
         i2 = i5 + i4 | 0;
         if (i3 >>> 0 <= 1073741824) {
          i1 = i3;
          break;
         }
        }
       }
      } else {
       i2 = i3;
       i1 = i4 & 255;
      }
      if (!i1) i1 = 1; else i1 = (FUNCTION_TABLE_iiii[i42 & 7](i41, i2, i1) | 0) == (i1 | 0);
     } else i1 = 0; while (0);
     i6 = i6 + 1 | 0;
    } while (i6 >>> 0 < (((HEAP32[i8 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0) / 12 | 0) >>> 0);
   }
   if (!i1) {
    i3 = 0;
    break;
   }
  }
  i9 = i40 + 56 | 0;
  i10 = i40 + 60 | 0;
  i1 = HEAP32[i10 >> 2] | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  i4 = i2;
  if ((i1 | 0) == (i2 | 0)) i3 = 2; else {
   i3 = (i1 - i2 | 0) / 24 | 0;
   i1 = 2;
   i2 = 0;
   do {
    i1 = (HEAP32[i4 + (i2 * 24 | 0) + 12 >> 2] | 0 ? 129 : 65) + i1 | 0;
    i2 = i2 + 1 | 0;
   } while (i2 >>> 0 < i3 >>> 0);
   i3 = i1;
  }
  i1 = i3 + 2 | 0;
  HEAP32[i36 >> 2] = 0;
  i8 = i36 + 4 | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i36 + 8 >> 2] = 0;
  if ((i3 | 0) < -2) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i36);
  i2 = __Znwj(i1) | 0;
  HEAP32[i8 >> 2] = i2;
  HEAP32[i36 >> 2] = i2;
  HEAP32[i36 + 8 >> 2] = i2 + i1;
  do {
   HEAP8[i2 >> 0] = 0;
   i2 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
   HEAP32[i8 >> 2] = i2;
   i1 = i1 + -1 | 0;
  } while ((i1 | 0) != 0);
  HEAP8[HEAP32[i36 >> 2] >> 0] = -1;
  HEAP8[(HEAP32[i36 >> 2] | 0) + 1 >> 0] = -37;
  HEAP8[(HEAP32[i36 >> 2] | 0) + 2 >> 0] = i3 >>> 8;
  HEAP8[(HEAP32[i36 >> 2] | 0) + 3 >> 0] = i3;
  i2 = HEAP32[i9 >> 2] | 0;
  L52 : do if ((HEAP32[i10 >> 2] | 0) != (i2 | 0)) {
   i7 = 0;
   i1 = 4;
   do {
    i6 = i2;
    i5 = i6 + (i7 * 24 | 0) + 12 | 0;
    HEAP8[(HEAP32[i36 >> 2] | 0) + i1 >> 0] = (HEAP32[i5 >> 2] << 4) + (HEAP32[i6 + (i7 * 24 | 0) + 16 >> 2] | 0);
    i6 = i6 + (i7 * 24 | 0) | 0;
    i4 = 0;
    i2 = i1;
    i1 = i1 + 1 | 0;
    do {
     i3 = HEAP32[(HEAP32[i6 >> 2] | 0) + (HEAP32[2648 + (i4 << 2) >> 2] << 2) >> 2] | 0;
     if (!(HEAP32[i5 >> 2] | 0)) i2 = i1; else {
      HEAP8[(HEAP32[i36 >> 2] | 0) + i1 >> 0] = i3 >>> 8;
      i2 = i2 + 2 | 0;
     }
     HEAP8[(HEAP32[i36 >> 2] | 0) + i2 >> 0] = i3;
     i4 = i4 + 1 | 0;
     i1 = i2 + 1 | 0;
    } while ((i4 | 0) != 64);
    i7 = i7 + 1 | 0;
    i2 = HEAP32[i9 >> 2] | 0;
   } while (i7 >>> 0 < (((HEAP32[i10 >> 2] | 0) - i2 | 0) / 24 | 0) >>> 0);
   i2 = HEAP32[i36 >> 2] | 0;
   if (i1 >>> 0 > 1073741824) {
    i4 = 0;
    i3 = i2;
    while (1) {
     i4 = i4 + 1073741824 | 0;
     if ((FUNCTION_TABLE_iiii[i42 & 7](i41, i3, 1073741824) | 0) != 1073741824) {
      i1 = 0;
      break L52;
     }
     i5 = i1 - i4 | 0;
     i3 = i2 + i4 | 0;
     if (i5 >>> 0 <= 1073741824) {
      i2 = i3;
      i1 = i5;
      break;
     }
    }
   }
   if (!i1) i1 = 1; else i37 = 42;
  } else {
   i2 = HEAP32[i36 >> 2] | 0;
   i1 = 4;
   i37 = 42;
  } while (0);
  if ((i37 | 0) == 42) i1 = (FUNCTION_TABLE_iiii[i42 & 7](i41, i2, i1) | 0) == (i1 | 0);
  i2 = HEAP32[i36 >> 2] | 0;
  if (i2 | 0) {
   if ((HEAP32[i8 >> 2] | 0) != (i2 | 0)) HEAP32[i8 >> 2] = i2;
   __ZdlPv(i2);
  }
  if (i1) {
   i32 = i40 + 80 | 0;
   i33 = i40 + 84 | 0;
   i4 = (HEAP32[i33 >> 2] | 0) - (HEAP32[i32 >> 2] | 0) | 0;
   i5 = (i4 | 0) / 40 | 0;
   i1 = i5 * 3 | 0;
   i3 = i1 + 8 | 0;
   i1 = i1 + 10 | 0;
   HEAP32[i36 >> 2] = 0;
   i6 = i36 + 4 | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i36 + 8 >> 2] = 0;
   if ((i1 | 0) < 0) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i36);
   i2 = __Znwj(i1) | 0;
   HEAP32[i6 >> 2] = i2;
   HEAP32[i36 >> 2] = i2;
   HEAP32[i36 + 8 >> 2] = i2 + i1;
   do {
    HEAP8[i2 >> 0] = 0;
    i2 = (HEAP32[i6 >> 2] | 0) + 1 | 0;
    HEAP32[i6 >> 2] = i2;
    i1 = i1 + -1 | 0;
   } while ((i1 | 0) != 0);
   HEAP8[HEAP32[i36 >> 2] >> 0] = -1;
   HEAP8[(HEAP32[i36 >> 2] | 0) + 1 >> 0] = -63;
   HEAP8[(HEAP32[i36 >> 2] | 0) + 2 >> 0] = i3 >>> 8;
   HEAP8[(HEAP32[i36 >> 2] | 0) + 3 >> 0] = i3;
   i2 = HEAP32[i36 >> 2] | 0;
   HEAP8[i2 + 4 >> 0] = 8;
   i31 = i40 + 4 | 0;
   HEAP8[i2 + 5 >> 0] = (HEAP32[i31 >> 2] | 0) >>> 8;
   HEAP8[i2 + 6 >> 0] = HEAP32[i31 >> 2];
   HEAP8[i2 + 7 >> 0] = (HEAP32[i40 >> 2] | 0) >>> 8;
   HEAP8[i2 + 8 >> 0] = HEAP32[i40 >> 2];
   HEAP8[i2 + 9 >> 0] = i5;
   L84 : do if (i4) {
    i4 = 0;
    i1 = 10;
    do {
     HEAP8[i2 + i1 >> 0] = HEAP32[(HEAP32[i32 >> 2] | 0) + (i4 * 40 | 0) >> 2];
     i2 = HEAP32[i32 >> 2] | 0;
     HEAP8[(HEAP32[i36 >> 2] | 0) + (i1 + 1) >> 0] = HEAP32[i2 + (i4 * 40 | 0) + 4 >> 2] << 4 | HEAP32[i2 + (i4 * 40 | 0) + 8 >> 2];
     i2 = HEAP32[(HEAP32[i32 >> 2] | 0) + (i4 * 40 | 0) + 12 >> 2] | 0;
     i3 = HEAP32[i9 >> 2] | 0;
     if (i2 >>> 0 >= (((HEAP32[i10 >> 2] | 0) - i3 | 0) / 24 | 0) >>> 0) {
      i1 = 0;
      break L84;
     }
     i31 = i1;
     i1 = i1 + 3 | 0;
     HEAP8[(HEAP32[i36 >> 2] | 0) + (i31 + 2) >> 0] = HEAP32[i3 + (i2 * 24 | 0) + 16 >> 2];
     i4 = i4 + 1 | 0;
     i2 = HEAP32[i36 >> 2] | 0;
    } while (i4 >>> 0 < i5 >>> 0);
    if (i1 >>> 0 > 1073741824) {
     i4 = 0;
     i3 = i2;
     while (1) {
      i4 = i4 + 1073741824 | 0;
      if ((FUNCTION_TABLE_iiii[i42 & 7](i41, i3, 1073741824) | 0) != 1073741824) {
       i1 = 0;
       break L84;
      }
      i5 = i1 - i4 | 0;
      i3 = i2 + i4 | 0;
      if (i5 >>> 0 <= 1073741824) {
       i2 = i3;
       i1 = i5;
       break;
      }
     }
    }
    if (!i1) i1 = 1; else i37 = 65;
   } else {
    i1 = 10;
    i37 = 65;
   } while (0);
   if ((i37 | 0) == 65) i1 = (FUNCTION_TABLE_iiii[i42 & 7](i41, i2, i1) | 0) == (i1 | 0);
   i2 = HEAP32[i36 >> 2] | 0;
   if (i2 | 0) {
    if ((HEAP32[i6 >> 2] | 0) != (i2 | 0)) HEAP32[i6 >> 2] = i2;
    __ZdlPv(i2);
   }
   if (i1 ? __ZN7guetzli12_GLOBAL__N_126BuildAndEncodeHuffmanCodesERKNS_8JPEGDataENS_10JPEGOutputEPNSt3__26vectorINS_16HuffmanCodeTableENS5_9allocatorIS7_EEEESB_(i40, i42, i41, i44, i43) | 0 : 0) {
    i27 = i36;
    HEAP32[i27 >> 2] = 0;
    HEAP32[i27 + 4 >> 2] = 0;
    HEAP32[i38 >> 2] = 131072;
    i27 = i38 + 4 | 0;
    HEAP32[i27 >> 2] = __Znaj(131072) | 0;
    i31 = i38 + 8 | 0;
    HEAP32[i31 >> 2] = 0;
    i28 = i38 + 16 | 0;
    i29 = i28;
    HEAP32[i29 >> 2] = 0;
    HEAP32[i29 + 4 >> 2] = 0;
    i29 = i38 + 24 | 0;
    HEAP32[i29 >> 2] = 64;
    i30 = i38 + 28 | 0;
    HEAP8[i30 >> 0] = 0;
    i25 = i40 + 20 | 0;
    i1 = HEAP32[i25 >> 2] | 0;
    L106 : do if ((i1 | 0) > 0) {
     i26 = i40 + 24 | 0;
     i24 = 0;
     i2 = HEAP32[i26 >> 2] | 0;
     i3 = 0;
     do {
      if ((i2 | 0) > 0) {
       i23 = 0;
       do {
        i2 = HEAP32[i33 >> 2] | 0;
        i1 = HEAP32[i32 >> 2] | 0;
        if ((i2 | 0) != (i1 | 0)) {
         i22 = 0;
         do {
          i3 = i1;
          i20 = HEAP32[i3 + (i22 * 40 | 0) + 8 >> 2] | 0;
          i21 = HEAP32[i3 + (i22 * 40 | 0) + 4 >> 2] | 0;
          if ((i20 | 0) > 0) {
           i16 = (i21 | 0) > 0;
           i17 = Math_imul(i20, i24) | 0;
           i18 = Math_imul(i21, i23) | 0;
           i19 = i3 + (i22 * 40 | 0) + 16 | 0;
           i10 = i3 + (i22 * 40 | 0) + 28 | 0;
           i11 = i36 + (i22 << 1) | 0;
           i9 = 0;
           do {
            if (i16) {
             i12 = i9 + i17 | 0;
             i8 = 0;
             i15 = HEAP16[i11 >> 1] | 0;
             do {
              i13 = i8 + i18 + (Math_imul(HEAP32[i19 >> 2] | 0, i12) | 0) << 6;
              i13 = (HEAP32[i10 >> 2] | 0) + (i13 << 1) | 0;
              i5 = HEAP32[i44 >> 2] | 0;
              i14 = HEAP32[i43 >> 2] | 0;
              i1 = i15;
              i15 = HEAP16[i13 >> 1] | 0;
              i1 = (i15 & 65535) - (i1 & 65535) | 0;
              HEAP16[i11 >> 1] = i15;
              i3 = i1 << 16;
              i2 = ((i3 | 0) < 0 ? 0 - i1 | 0 : i1) << 16 >> 16;
              i7 = (Math_clz32(i2 | 0) | 0) ^ 31;
              i7 = (i2 | 0) == 0 ? -1 : i7;
              i2 = i7 + 1 | 0;
              i6 = HEAP32[i5 + (i22 * 1280 | 0) + 256 + (i2 << 2) >> 2] | 0;
              __ZN7guetzli9BitWriter9WriteBitsEiy(i38, HEAPU8[i5 + (i22 * 1280 | 0) + i2 >> 0] | 0, i6, ((i6 | 0) < 0) << 31 >> 31);
              if ((i7 | 0) > -1) {
               i7 = (1 << i2) + -1 & (i3 >> 31) + i1 << 16 >> 16;
               __ZN7guetzli9BitWriter9WriteBitsEiy(i38, i2, i7, ((i7 | 0) < 0) << 31 >> 31);
              }
              i6 = i14 + (i22 * 1280 | 0) + 240 | 0;
              i7 = i14 + (i22 * 1280 | 0) + 1216 | 0;
              i5 = 1;
              i1 = 0;
              do {
               i2 = HEAP16[i13 + (HEAP32[2648 + (i5 << 2) >> 2] << 1) >> 1] | 0;
               if (!(i2 << 16 >> 16)) i1 = i1 + 1 | 0; else {
                i48 = i2 << 16 >> 16 < 0;
                i3 = 0 - (i2 & 65535) | 0;
                i4 = i48 ? i3 & 65535 : i2;
                i3 = i48 ? (i3 ^ 65535) & 65535 : i2;
                if ((i1 | 0) > 15) {
                 i2 = i1;
                 do {
                  i48 = HEAP32[i7 >> 2] | 0;
                  __ZN7guetzli9BitWriter9WriteBitsEiy(i38, HEAPU8[i6 >> 0] | 0, i48, ((i48 | 0) < 0) << 31 >> 31);
                  i2 = i2 + -16 | 0;
                 } while ((i2 | 0) > 15);
                 i1 = i1 & 15;
                }
                i4 = (Math_clz32(i4 << 16 >> 16 | 0) | 0) ^ 31;
                i48 = i4 + 1 | 0;
                i2 = (i1 << 4) + i48 | 0;
                i1 = HEAP32[i14 + (i22 * 1280 | 0) + 256 + (i2 << 2) >> 2] | 0;
                __ZN7guetzli9BitWriter9WriteBitsEiy(i38, HEAPU8[i14 + (i22 * 1280 | 0) + i2 >> 0] | 0, i1, ((i1 | 0) < 0) << 31 >> 31);
                i1 = (2 << i4) + -1 & i3 << 16 >> 16;
                __ZN7guetzli9BitWriter9WriteBitsEiy(i38, i48, i1, ((i1 | 0) < 0) << 31 >> 31);
                i1 = 0;
               }
               i5 = i5 + 1 | 0;
              } while ((i5 | 0) != 64);
              if ((i1 | 0) > 0) {
               i48 = HEAP32[i14 + (i22 * 1280 | 0) + 256 >> 2] | 0;
               __ZN7guetzli9BitWriter9WriteBitsEiy(i38, HEAPU8[i14 + (i22 * 1280 | 0) >> 0] | 0, i48, ((i48 | 0) < 0) << 31 >> 31);
              }
              i8 = i8 + 1 | 0;
             } while ((i8 | 0) < (i21 | 0));
            }
            i9 = i9 + 1 | 0;
           } while ((i9 | 0) < (i20 | 0));
           i1 = HEAP32[i32 >> 2] | 0;
           i2 = HEAP32[i33 >> 2] | 0;
          }
          i22 = i22 + 1 | 0;
         } while (i22 >>> 0 < ((i2 - i1 | 0) / 40 | 0) >>> 0);
         i3 = HEAP32[i31 >> 2] | 0;
        }
        if ((i3 | 0) > 65536) {
         i2 = HEAP32[i27 >> 2] | 0;
         if (i3 >>> 0 > 1073741824) {
          i1 = 0;
          i5 = i2;
          do {
           i1 = i1 + 1073741824 | 0;
           if ((FUNCTION_TABLE_iiii[i42 & 7](i41, i5, 1073741824) | 0) != 1073741824) {
            i2 = 0;
            break L106;
           }
           i4 = i3 - i1 | 0;
           i5 = i2 + i1 | 0;
          } while (i4 >>> 0 > 1073741824);
          if (i4 | 0) {
           i34 = i5;
           i35 = i4;
           i37 = 102;
          }
         } else {
          i34 = i2;
          i35 = i3;
          i37 = 102;
         }
         if ((i37 | 0) == 102 ? (i37 = 0, (FUNCTION_TABLE_iiii[i42 & 7](i41, i34, i35) | 0) != (i35 | 0)) : 0) {
          i2 = 0;
          break L106;
         }
         HEAP32[i31 >> 2] = 0;
         i3 = 0;
        }
        i23 = i23 + 1 | 0;
        i2 = HEAP32[i26 >> 2] | 0;
       } while ((i23 | 0) < (i2 | 0));
       i1 = HEAP32[i25 >> 2] | 0;
      }
      i24 = i24 + 1 | 0;
     } while ((i24 | 0) < (i1 | 0));
     i1 = HEAP32[i29 >> 2] | 0;
     L161 : do if ((i1 | 0) < 57) {
      i4 = i38 + 4 | 0;
      i1 = i28;
      i2 = HEAP32[i1 >> 2] | 0;
      i1 = HEAP32[i1 + 4 >> 2] | 0;
      while (1) {
       i1 = _bitshift64Lshr(i2 | 0, i1 | 0, 56) | 0;
       if (i3 >>> 0 < (HEAP32[i38 >> 2] | 0) >>> 0) {
        HEAP32[i31 >> 2] = i3 + 1;
        HEAP8[(HEAP32[i4 >> 2] | 0) + i3 >> 0] = i1;
       } else HEAP8[i30 >> 0] = 1;
       do if ((i1 | 0) == 255 & (tempRet0 | 0) == 0) {
        i1 = HEAP32[i31 >> 2] | 0;
        if (i1 >>> 0 < (HEAP32[i38 >> 2] | 0) >>> 0) {
         HEAP32[i31 >> 2] = i1 + 1;
         HEAP8[(HEAP32[i4 >> 2] | 0) + i1 >> 0] = 0;
         break;
        } else {
         HEAP8[i30 >> 0] = 1;
         break;
        }
       } while (0);
       i2 = i28;
       i2 = _bitshift64Shl(HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0, 8) | 0;
       i3 = tempRet0;
       i1 = i28;
       HEAP32[i1 >> 2] = i2;
       HEAP32[i1 + 4 >> 2] = i3;
       i1 = (HEAP32[i29 >> 2] | 0) + 8 | 0;
       HEAP32[i29 >> 2] = i1;
       if ((i1 | 0) >= 57) break L161;
       i1 = i3;
       i3 = HEAP32[i31 >> 2] | 0;
      }
     } while (0);
     if ((i1 | 0) < 64) {
      i1 = 255 >>> (64 - i1 | 0);
      i2 = i28;
      i2 = _bitshift64Lshr(HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0, 56) | 0;
      i1 = i2 & ~i1 | i1;
      i2 = HEAP32[i31 >> 2] | 0;
      if (i2 >>> 0 < (HEAP32[i38 >> 2] | 0) >>> 0) {
       HEAP32[i31 >> 2] = i2 + 1;
       HEAP8[(HEAP32[i38 + 4 >> 2] | 0) + i2 >> 0] = i1;
      } else HEAP8[i30 >> 0] = 1;
      if ((i1 | 0) == 255 & 0 == 0) {
       i1 = HEAP32[i31 >> 2] | 0;
       if (i1 >>> 0 < (HEAP32[i38 >> 2] | 0) >>> 0) {
        HEAP32[i31 >> 2] = i1 + 1;
        HEAP8[(HEAP32[i38 + 4 >> 2] | 0) + i1 >> 0] = 0;
        i37 = 126;
        break;
       } else {
        HEAP8[i30 >> 0] = 1;
        i37 = 126;
        break;
       }
      } else i37 = 126;
     } else i37 = 126;
    } else i37 = 126; while (0);
    L186 : do if ((i37 | 0) == 126) {
     i48 = i28;
     HEAP32[i48 >> 2] = 0;
     HEAP32[i48 + 4 >> 2] = 0;
     HEAP32[i29 >> 2] = 64;
     if (!(HEAP8[i30 >> 0] | 0)) {
      i2 = HEAP32[i27 >> 2] | 0;
      i1 = HEAP32[i31 >> 2] | 0;
      if (i1 >>> 0 > 1073741824) {
       i4 = 0;
       i3 = i2;
       while (1) {
        i4 = i4 + 1073741824 | 0;
        if ((FUNCTION_TABLE_iiii[i42 & 7](i41, i3, 1073741824) | 0) != 1073741824) {
         i2 = 0;
         break L186;
        }
        i5 = i1 - i4 | 0;
        i3 = i2 + i4 | 0;
        if (i5 >>> 0 <= 1073741824) {
         i2 = i3;
         i1 = i5;
         break;
        }
       }
      }
      if (!i1) i2 = 1; else i2 = (FUNCTION_TABLE_iiii[i42 & 7](i41, i2, i1) | 0) == (i1 | 0);
     } else i2 = 0;
    } while (0);
    i48 = i38 + 4 | 0;
    i1 = HEAP32[i48 >> 2] | 0;
    HEAP32[i48 >> 2] = 0;
    if (i1 | 0) __ZdaPv(i1);
    if (i2) {
     i1 = (FUNCTION_TABLE_iiii[i42 & 7](i41, 10105, 2) | 0) != 2;
     if (!(i1 | i39)) {
      i1 = i40 + 128 | 0;
      i3 = HEAP8[i1 + 11 >> 0] | 0;
      i48 = i3 << 24 >> 24 < 0;
      i2 = HEAP32[i1 >> 2] | 0;
      i5 = i48 ? i2 : i1;
      if (i48) {
       i1 = HEAP32[i40 + 132 >> 2] | 0;
       if (i1 >>> 0 > 1073741824) {
        i4 = 0;
        while (1) {
         i4 = i4 + 1073741824 | 0;
         if ((FUNCTION_TABLE_iiii[i42 & 7](i41, i2, 1073741824) | 0) != 1073741824) {
          i3 = 0;
          break L1;
         }
         i3 = i1 - i4 | 0;
         i2 = i5 + i4 | 0;
         if (i3 >>> 0 <= 1073741824) {
          i1 = i3;
          break;
         }
        }
       }
      } else {
       i2 = i1;
       i1 = i3 & 255;
      }
      if (!i1) i3 = 1; else i3 = (FUNCTION_TABLE_iiii[i42 & 7](i41, i2, i1) | 0) == (i1 | 0);
     } else i3 = i1 ^ 1;
    } else i3 = 0;
   } else i3 = 0;
  } else i3 = 0;
 } else i3 = 0; while (0);
 i1 = HEAP32[i43 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i45 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) HEAP32[i45 >> 2] = i2 + (~(((0 - i1 + (i2 + -1280) | 0) >>> 0) / 1280 | 0) * 1280 | 0);
  __ZdlPv(i1);
 }
 i1 = HEAP32[i44 >> 2] | 0;
 if (!i1) {
  STACKTOP = i47;
  return i3 | 0;
 }
 i2 = HEAP32[i46 >> 2] | 0;
 if ((i2 | 0) != (i1 | 0)) HEAP32[i46 >> 2] = i2 + (~(((0 - i1 + (i2 + -1280) | 0) >>> 0) / 1280 | 0) * 1280 | 0);
 __ZdlPv(i1);
 STACKTOP = i47;
 return i3 | 0;
}

function __ZN11butteraugli14DiffPrecomputeERKNSt3__26vectorINS1_IfNS0_9allocatorIfEEEENS2_IS4_EEEES8_jjPS6_(i23, i24, i25, i26, i27) {
 i23 = i23 | 0;
 i24 = i24 | 0;
 i25 = i25 | 0;
 i26 = i26 | 0;
 i27 = i27 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = 0.0, d8 = 0.0, d9 = 0.0, d10 = 0.0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, f33 = f0, i34 = 0, d35 = 0.0;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i28 = i32 + 72 | 0;
 i29 = i32 + 48 | 0;
 i30 = i32 + 24 | 0;
 i31 = i32;
 i5 = HEAP32[i23 >> 2] | 0;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i28, (HEAP32[i5 + 4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) >> 2);
 i5 = i27 + 4 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 i4 = HEAP32[i27 >> 2] | 0;
 i1 = i2 - i4 | 0;
 i3 = (i1 | 0) / 12 | 0;
 if (i3 >>> 0 >= 3) {
  if ((i1 | 0) != 36 ? (i6 = i4 + 36 | 0, (i2 | 0) != (i6 | 0)) : 0) while (1) {
   i1 = i2 + -12 | 0;
   HEAP32[i5 >> 2] = i1;
   i3 = HEAP32[i1 >> 2] | 0;
   if (i3) {
    i1 = i2 + -8 | 0;
    i2 = HEAP32[i1 >> 2] | 0;
    if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
    __ZdlPv(i3);
    i1 = HEAP32[i5 >> 2] | 0;
   }
   if ((i1 | 0) == (i6 | 0)) break; else i2 = i1;
  }
 } else __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEE8__appendEjRKS3_(i27, 3 - i3 | 0, i28);
 i1 = HEAP32[i28 >> 2] | 0;
 if (i1 | 0) {
  i2 = i28 + 4 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != (i1 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i1 | 0) >>> 2) << 2);
  __ZdlPv(i1);
 };
 HEAP32[i28 >> 2] = 0;
 HEAP32[i28 + 4 >> 2] = 0;
 HEAP32[i28 + 8 >> 2] = 0;
 HEAP32[i28 + 12 >> 2] = 0;
 HEAP32[i28 + 16 >> 2] = 0;
 HEAP32[i28 + 20 >> 2] = 0;
 HEAP32[i29 >> 2] = 0;
 HEAP32[i29 + 4 >> 2] = 0;
 HEAP32[i29 + 8 >> 2] = 0;
 HEAP32[i29 + 12 >> 2] = 0;
 HEAP32[i29 + 16 >> 2] = 0;
 HEAP32[i29 + 20 >> 2] = 0;
 HEAP32[i30 >> 2] = 0;
 HEAP32[i30 + 4 >> 2] = 0;
 HEAP32[i30 + 8 >> 2] = 0;
 HEAP32[i30 + 12 >> 2] = 0;
 HEAP32[i30 + 16 >> 2] = 0;
 HEAP32[i30 + 20 >> 2] = 0;
 HEAP32[i31 >> 2] = 0;
 HEAP32[i31 + 4 >> 2] = 0;
 HEAP32[i31 + 8 >> 2] = 0;
 HEAP32[i31 + 12 >> 2] = 0;
 HEAP32[i31 + 16 >> 2] = 0;
 HEAP32[i31 + 20 >> 2] = 0;
 if (!i26) {
  STACKTOP = i32;
  return;
 }
 i13 = (i25 | 0) == 0;
 i14 = i28 + 8 | 0;
 i15 = i28 + 16 | 0;
 i16 = i30 + 8 | 0;
 i17 = i30 + 16 | 0;
 i18 = 0 - i25 | 0;
 i19 = i29 + 8 | 0;
 i20 = i29 + 16 | 0;
 i21 = i31 + 8 | 0;
 i22 = i31 + 16 | 0;
 i1 = 0;
 L23 : while (1) {
  if (i13) i1 = i1 + 1 | 0; else {
   i12 = Math_imul(i1, i25) | 0;
   i1 = i1 + 1 | 0;
   i5 = i1 >>> 0 < i26 >>> 0 ? i25 : i18;
   i4 = 0;
   do {
    i6 = i4 + i12 | 0;
    i4 = i4 + 1 | 0;
    i11 = i4 >>> 0 < i25 >>> 0;
    i3 = (i11 ? 1 : -1) + i6 | 0;
    i2 = HEAP32[i23 >> 2] | 0;
    i34 = HEAP32[i2 >> 2] | 0;
    f33 = Math_fround(HEAPF32[i34 + (i6 << 2) >> 2]);
    d7 = +Math_fround(f33 - Math_fround(HEAPF32[i34 + (i3 << 2) >> 2]));
    i34 = HEAP32[i2 + 12 >> 2] | 0;
    f33 = Math_fround(HEAPF32[i34 + (i6 << 2) >> 2]);
    d9 = +Math_fround(f33 - Math_fround(HEAPF32[i34 + (i3 << 2) >> 2]));
    i2 = HEAP32[i2 + 24 >> 2] | 0;
    f33 = Math_fround(HEAPF32[i2 + (i6 << 2) >> 2]);
    d10 = +Math_fround(f33 - Math_fround(HEAPF32[i2 + (i3 << 2) >> 2]));
    if ((HEAP8[18352] | 0) == 0 ? ___cxa_guard_acquire(18352) | 0 : 0) {
     HEAPF64[2273] = 0.0;
     HEAPF64[2274] = 11.38708334481672;
     HEAPF64[2275] = 25.937272956337438;
     HEAPF64[2276] = 40.48746256785815;
     HEAPF64[2277] = 55.03765217937887;
     HEAPF64[2278] = 69.58784179089959;
     HEAPF64[2279] = 84.13803140242031;
     HEAPF64[2280] = 98.68822101394103;
     HEAPF64[2281] = 113.23841062546175;
     HEAPF64[2282] = 127.78860023698248;
     HEAPF64[2283] = 142.33878984850318;
     HEAPF64[2284] = 156.8889794600239;
     HEAPF64[2285] = 171.43916907154463;
     HEAPF64[2286] = 185.98935868306535;
     HEAPF64[2287] = 200.53954829458607;
     HEAPF64[2288] = 215.0897379061068;
     HEAPF64[2289] = 229.6399275176275;
     HEAPF64[2290] = 244.19011712914823;
     HEAPF64[2291] = 258.7403067406689;
     HEAPF64[2292] = 273.2904963521896;
     HEAPF64[2293] = 287.8406859637103;
    }
    d8 = d7 * .758304045695;
    d7 = +Math_abs(+d8);
    if (!(d7 < 1.0e4)) {
     i1 = 25;
     break L23;
    }
    i2 = ~~d7;
    if ((i2 | 0) < 20) {
     d35 = +HEAPF64[18184 + (i2 << 3) >> 3];
     d7 = d35 + (d7 - +(i2 | 0)) * (+HEAPF64[18184 + (i2 + 1 << 3) >> 3] - d35);
    } else d7 = +HEAPF64[2293];
    HEAPF64[i28 >> 3] = d8 < 0.0 ? -d7 : d7;
    if ((HEAP8[18528] | 0) == 0 ? ___cxa_guard_acquire(18528) | 0 : 0) {
     HEAPF64[2295] = 0.0;
     HEAPF64[2296] = 1.4103373714040413;
     HEAPF64[2297] = 2.1187462581064413;
     HEAPF64[2298] = 2.8271551448088412;
     HEAPF64[2299] = 3.535564031511241;
     HEAPF64[2300] = 4.243972918213641;
     HEAPF64[2301] = 4.952381804916041;
     HEAPF64[2302] = 5.660790691618441;
     HEAPF64[2303] = 6.369199578320841;
     HEAPF64[2304] = 7.077608465023241;
     HEAPF64[2305] = 7.786017351725641;
     HEAPF64[2306] = 8.49442623842804;
     HEAPF64[2307] = 9.202835125130441;
     HEAPF64[2308] = 9.911244011832842;
     HEAPF64[2309] = 10.619652898535243;
     HEAPF64[2310] = 11.328061785237644;
     HEAPF64[2311] = 12.036470671940044;
     HEAPF64[2312] = 12.744879558642445;
     HEAPF64[2313] = 13.453288445344846;
     HEAPF64[2314] = 14.161697332047247;
     HEAPF64[2315] = 14.870106218749648;
    }
    d8 = d9 * 2.28148649801;
    d7 = +Math_abs(+d8);
    if (!(d7 < 1.0e4)) {
     i1 = 33;
     break L23;
    }
    i2 = ~~d7;
    if ((i2 | 0) < 20) {
     d35 = +HEAPF64[18360 + (i2 << 3) >> 3];
     d7 = d35 + (d7 - +(i2 | 0)) * (+HEAPF64[18360 + (i2 + 1 << 3) >> 3] - d35);
    } else d7 = +HEAPF64[2315];
    HEAPF64[i14 >> 3] = d8 < 0.0 ? -d7 : d7;
    HEAPF64[i15 >> 3] = d10 * 1.87816926918;
    i34 = HEAP32[i24 >> 2] | 0;
    i2 = HEAP32[i34 >> 2] | 0;
    f33 = Math_fround(HEAPF32[i2 + (i6 << 2) >> 2]);
    d7 = +Math_fround(f33 - Math_fround(HEAPF32[i2 + (i3 << 2) >> 2]));
    i2 = HEAP32[i34 + 12 >> 2] | 0;
    f33 = Math_fround(HEAPF32[i2 + (i6 << 2) >> 2]);
    d9 = +Math_fround(f33 - Math_fround(HEAPF32[i2 + (i3 << 2) >> 2]));
    i34 = HEAP32[i34 + 24 >> 2] | 0;
    f33 = Math_fround(HEAPF32[i34 + (i6 << 2) >> 2]);
    d10 = +Math_fround(f33 - Math_fround(HEAPF32[i34 + (i3 << 2) >> 2]));
    if ((HEAP8[18352] | 0) == 0 ? ___cxa_guard_acquire(18352) | 0 : 0) {
     HEAPF64[2273] = 0.0;
     HEAPF64[2274] = 11.38708334481672;
     HEAPF64[2275] = 25.937272956337438;
     HEAPF64[2276] = 40.48746256785815;
     HEAPF64[2277] = 55.03765217937887;
     HEAPF64[2278] = 69.58784179089959;
     HEAPF64[2279] = 84.13803140242031;
     HEAPF64[2280] = 98.68822101394103;
     HEAPF64[2281] = 113.23841062546175;
     HEAPF64[2282] = 127.78860023698248;
     HEAPF64[2283] = 142.33878984850318;
     HEAPF64[2284] = 156.8889794600239;
     HEAPF64[2285] = 171.43916907154463;
     HEAPF64[2286] = 185.98935868306535;
     HEAPF64[2287] = 200.53954829458607;
     HEAPF64[2288] = 215.0897379061068;
     HEAPF64[2289] = 229.6399275176275;
     HEAPF64[2290] = 244.19011712914823;
     HEAPF64[2291] = 258.7403067406689;
     HEAPF64[2292] = 273.2904963521896;
     HEAPF64[2293] = 287.8406859637103;
    }
    d8 = d7 * .758304045695;
    d7 = +Math_abs(+d8);
    if (!(d7 < 1.0e4)) {
     i1 = 41;
     break L23;
    }
    i2 = ~~d7;
    if ((i2 | 0) < 20) {
     d35 = +HEAPF64[18184 + (i2 << 3) >> 3];
     d7 = d35 + (d7 - +(i2 | 0)) * (+HEAPF64[18184 + (i2 + 1 << 3) >> 3] - d35);
    } else d7 = +HEAPF64[2293];
    HEAPF64[i30 >> 3] = d8 < 0.0 ? -d7 : d7;
    if ((HEAP8[18528] | 0) == 0 ? ___cxa_guard_acquire(18528) | 0 : 0) {
     HEAPF64[2295] = 0.0;
     HEAPF64[2296] = 1.4103373714040413;
     HEAPF64[2297] = 2.1187462581064413;
     HEAPF64[2298] = 2.8271551448088412;
     HEAPF64[2299] = 3.535564031511241;
     HEAPF64[2300] = 4.243972918213641;
     HEAPF64[2301] = 4.952381804916041;
     HEAPF64[2302] = 5.660790691618441;
     HEAPF64[2303] = 6.369199578320841;
     HEAPF64[2304] = 7.077608465023241;
     HEAPF64[2305] = 7.786017351725641;
     HEAPF64[2306] = 8.49442623842804;
     HEAPF64[2307] = 9.202835125130441;
     HEAPF64[2308] = 9.911244011832842;
     HEAPF64[2309] = 10.619652898535243;
     HEAPF64[2310] = 11.328061785237644;
     HEAPF64[2311] = 12.036470671940044;
     HEAPF64[2312] = 12.744879558642445;
     HEAPF64[2313] = 13.453288445344846;
     HEAPF64[2314] = 14.161697332047247;
     HEAPF64[2315] = 14.870106218749648;
    }
    d8 = d9 * 2.28148649801;
    d7 = +Math_abs(+d8);
    if (!(d7 < 1.0e4)) {
     i1 = 49;
     break L23;
    }
    i2 = ~~d7;
    if ((i2 | 0) < 20) {
     d35 = +HEAPF64[18360 + (i2 << 3) >> 3];
     d7 = d35 + (d7 - +(i2 | 0)) * (+HEAPF64[18360 + (i2 + 1 << 3) >> 3] - d35);
    } else d7 = +HEAPF64[2315];
    HEAPF64[i16 >> 3] = d8 < 0.0 ? -d7 : d7;
    HEAPF64[i17 >> 3] = d10 * 1.87816926918;
    i3 = i6 + i5 | 0;
    i34 = HEAP32[i23 >> 2] | 0;
    i2 = HEAP32[i34 >> 2] | 0;
    f33 = Math_fround(HEAPF32[i2 + (i6 << 2) >> 2]);
    d7 = +Math_fround(f33 - Math_fround(HEAPF32[i2 + (i3 << 2) >> 2]));
    i2 = HEAP32[i34 + 12 >> 2] | 0;
    f33 = Math_fround(HEAPF32[i2 + (i6 << 2) >> 2]);
    d9 = +Math_fround(f33 - Math_fround(HEAPF32[i2 + (i3 << 2) >> 2]));
    i34 = HEAP32[i34 + 24 >> 2] | 0;
    f33 = Math_fround(HEAPF32[i34 + (i6 << 2) >> 2]);
    d10 = +Math_fround(f33 - Math_fround(HEAPF32[i34 + (i3 << 2) >> 2]));
    do if (!(HEAP8[18352] | 0)) {
     if (!(___cxa_guard_acquire(18352) | 0)) break;
     HEAPF64[2273] = 0.0;
     HEAPF64[2274] = 11.38708334481672;
     HEAPF64[2275] = 25.937272956337438;
     HEAPF64[2276] = 40.48746256785815;
     HEAPF64[2277] = 55.03765217937887;
     HEAPF64[2278] = 69.58784179089959;
     HEAPF64[2279] = 84.13803140242031;
     HEAPF64[2280] = 98.68822101394103;
     HEAPF64[2281] = 113.23841062546175;
     HEAPF64[2282] = 127.78860023698248;
     HEAPF64[2283] = 142.33878984850318;
     HEAPF64[2284] = 156.8889794600239;
     HEAPF64[2285] = 171.43916907154463;
     HEAPF64[2286] = 185.98935868306535;
     HEAPF64[2287] = 200.53954829458607;
     HEAPF64[2288] = 215.0897379061068;
     HEAPF64[2289] = 229.6399275176275;
     HEAPF64[2290] = 244.19011712914823;
     HEAPF64[2291] = 258.7403067406689;
     HEAPF64[2292] = 273.2904963521896;
     HEAPF64[2293] = 287.8406859637103;
    } while (0);
    d8 = d7 * .758304045695;
    d7 = +Math_abs(+d8);
    if (!(d7 < 1.0e4)) {
     i1 = 57;
     break L23;
    }
    i2 = ~~d7;
    if ((i2 | 0) < 20) {
     d35 = +HEAPF64[18184 + (i2 << 3) >> 3];
     d7 = d35 + (d7 - +(i2 | 0)) * (+HEAPF64[18184 + (i2 + 1 << 3) >> 3] - d35);
    } else d7 = +HEAPF64[2293];
    HEAPF64[i29 >> 3] = d8 < 0.0 ? -d7 : d7;
    do if (!(HEAP8[18528] | 0)) {
     if (!(___cxa_guard_acquire(18528) | 0)) break;
     HEAPF64[2295] = 0.0;
     HEAPF64[2296] = 1.4103373714040413;
     HEAPF64[2297] = 2.1187462581064413;
     HEAPF64[2298] = 2.8271551448088412;
     HEAPF64[2299] = 3.535564031511241;
     HEAPF64[2300] = 4.243972918213641;
     HEAPF64[2301] = 4.952381804916041;
     HEAPF64[2302] = 5.660790691618441;
     HEAPF64[2303] = 6.369199578320841;
     HEAPF64[2304] = 7.077608465023241;
     HEAPF64[2305] = 7.786017351725641;
     HEAPF64[2306] = 8.49442623842804;
     HEAPF64[2307] = 9.202835125130441;
     HEAPF64[2308] = 9.911244011832842;
     HEAPF64[2309] = 10.619652898535243;
     HEAPF64[2310] = 11.328061785237644;
     HEAPF64[2311] = 12.036470671940044;
     HEAPF64[2312] = 12.744879558642445;
     HEAPF64[2313] = 13.453288445344846;
     HEAPF64[2314] = 14.161697332047247;
     HEAPF64[2315] = 14.870106218749648;
    } while (0);
    d8 = d9 * 2.28148649801;
    d7 = +Math_abs(+d8);
    if (!(d7 < 1.0e4)) {
     i1 = 65;
     break L23;
    }
    i2 = ~~d7;
    if ((i2 | 0) < 20) {
     d35 = +HEAPF64[18360 + (i2 << 3) >> 3];
     d7 = d35 + (d7 - +(i2 | 0)) * (+HEAPF64[18360 + (i2 + 1 << 3) >> 3] - d35);
    } else d7 = +HEAPF64[2315];
    HEAPF64[i19 >> 3] = d8 < 0.0 ? -d7 : d7;
    HEAPF64[i20 >> 3] = d10 * 1.87816926918;
    i34 = HEAP32[i24 >> 2] | 0;
    i2 = HEAP32[i34 >> 2] | 0;
    f33 = Math_fround(HEAPF32[i2 + (i6 << 2) >> 2]);
    d7 = +Math_fround(f33 - Math_fround(HEAPF32[i2 + (i3 << 2) >> 2]));
    i2 = HEAP32[i34 + 12 >> 2] | 0;
    f33 = Math_fround(HEAPF32[i2 + (i6 << 2) >> 2]);
    d9 = +Math_fround(f33 - Math_fround(HEAPF32[i2 + (i3 << 2) >> 2]));
    i34 = HEAP32[i34 + 24 >> 2] | 0;
    f33 = Math_fround(HEAPF32[i34 + (i6 << 2) >> 2]);
    d10 = +Math_fround(f33 - Math_fround(HEAPF32[i34 + (i3 << 2) >> 2]));
    do if (!(HEAP8[18352] | 0)) {
     if (!(___cxa_guard_acquire(18352) | 0)) break;
     HEAPF64[2273] = 0.0;
     HEAPF64[2274] = 11.38708334481672;
     HEAPF64[2275] = 25.937272956337438;
     HEAPF64[2276] = 40.48746256785815;
     HEAPF64[2277] = 55.03765217937887;
     HEAPF64[2278] = 69.58784179089959;
     HEAPF64[2279] = 84.13803140242031;
     HEAPF64[2280] = 98.68822101394103;
     HEAPF64[2281] = 113.23841062546175;
     HEAPF64[2282] = 127.78860023698248;
     HEAPF64[2283] = 142.33878984850318;
     HEAPF64[2284] = 156.8889794600239;
     HEAPF64[2285] = 171.43916907154463;
     HEAPF64[2286] = 185.98935868306535;
     HEAPF64[2287] = 200.53954829458607;
     HEAPF64[2288] = 215.0897379061068;
     HEAPF64[2289] = 229.6399275176275;
     HEAPF64[2290] = 244.19011712914823;
     HEAPF64[2291] = 258.7403067406689;
     HEAPF64[2292] = 273.2904963521896;
     HEAPF64[2293] = 287.8406859637103;
    } while (0);
    d8 = d7 * .758304045695;
    d7 = +Math_abs(+d8);
    if (!(d7 < 1.0e4)) {
     i1 = 73;
     break L23;
    }
    i2 = ~~d7;
    if ((i2 | 0) < 20) {
     d35 = +HEAPF64[18184 + (i2 << 3) >> 3];
     d7 = d35 + (d7 - +(i2 | 0)) * (+HEAPF64[18184 + (i2 + 1 << 3) >> 3] - d35);
    } else d7 = +HEAPF64[2293];
    HEAPF64[i31 >> 3] = d8 < 0.0 ? -d7 : d7;
    do if (!(HEAP8[18528] | 0)) {
     if (!(___cxa_guard_acquire(18528) | 0)) break;
     HEAPF64[2295] = 0.0;
     HEAPF64[2296] = 1.4103373714040413;
     HEAPF64[2297] = 2.1187462581064413;
     HEAPF64[2298] = 2.8271551448088412;
     HEAPF64[2299] = 3.535564031511241;
     HEAPF64[2300] = 4.243972918213641;
     HEAPF64[2301] = 4.952381804916041;
     HEAPF64[2302] = 5.660790691618441;
     HEAPF64[2303] = 6.369199578320841;
     HEAPF64[2304] = 7.077608465023241;
     HEAPF64[2305] = 7.786017351725641;
     HEAPF64[2306] = 8.49442623842804;
     HEAPF64[2307] = 9.202835125130441;
     HEAPF64[2308] = 9.911244011832842;
     HEAPF64[2309] = 10.619652898535243;
     HEAPF64[2310] = 11.328061785237644;
     HEAPF64[2311] = 12.036470671940044;
     HEAPF64[2312] = 12.744879558642445;
     HEAPF64[2313] = 13.453288445344846;
     HEAPF64[2314] = 14.161697332047247;
     HEAPF64[2315] = 14.870106218749648;
    } while (0);
    d8 = d9 * 2.28148649801;
    d7 = +Math_abs(+d8);
    if (!(d7 < 1.0e4)) {
     i1 = 81;
     break L23;
    }
    i2 = ~~d7;
    if ((i2 | 0) < 20) {
     d35 = +HEAPF64[18360 + (i2 << 3) >> 3];
     d7 = d35 + (d7 - +(i2 | 0)) * (+HEAPF64[18360 + (i2 + 1 << 3) >> 3] - d35);
    } else d7 = +HEAPF64[2315];
    d9 = d8 < 0.0 ? -d7 : d7;
    HEAPF64[i21 >> 3] = d9;
    d10 = d10 * 1.87816926918;
    HEAPF64[i22 >> 3] = d10;
    i34 = HEAP32[i27 >> 2] | 0;
    d35 = +Math_abs(+(+HEAPF64[i28 >> 3]));
    d35 = d35 + +Math_abs(+(+HEAPF64[i29 >> 3]));
    d8 = +Math_abs(+(+HEAPF64[i30 >> 3]));
    d8 = d8 + +Math_abs(+(+HEAPF64[i31 >> 3]));
    f33 = Math_fround(d8 < d35 ? d8 : d35);
    HEAPF32[(HEAP32[i34 >> 2] | 0) + (i6 << 2) >> 2] = f33;
    d35 = +Math_abs(+(+HEAPF64[i14 >> 3]));
    d35 = d35 + +Math_abs(+(+HEAPF64[i19 >> 3]));
    d9 = +Math_abs(+(+HEAPF64[i16 >> 3])) + +Math_abs(+d9);
    f33 = Math_fround(d9 < d35 ? d9 : d35);
    HEAPF32[(HEAP32[i34 + 12 >> 2] | 0) + (i6 << 2) >> 2] = f33;
    d35 = +Math_abs(+(+HEAPF64[i15 >> 3]));
    d35 = d35 + +Math_abs(+(+HEAPF64[i20 >> 3]));
    d10 = +Math_abs(+(+HEAPF64[i17 >> 3])) + +Math_abs(+d10);
    f33 = Math_fround(d10 < d35 ? d10 : d35);
    HEAPF32[(HEAP32[i34 + 24 >> 2] | 0) + (i6 << 2) >> 2] = f33;
   } while (i11);
  }
  if (i1 >>> 0 >= i26 >>> 0) {
   i1 = 19;
   break;
  }
 }
 if ((i1 | 0) == 19) {
  STACKTOP = i32;
  return;
 } else if ((i1 | 0) == 25) ___assert_fail(14720, 10333, 303, 14731); else if ((i1 | 0) == 33) ___assert_fail(14720, 10333, 303, 14731); else if ((i1 | 0) == 41) ___assert_fail(14720, 10333, 303, 14731); else if ((i1 | 0) == 49) ___assert_fail(14720, 10333, 303, 14731); else if ((i1 | 0) == 57) ___assert_fail(14720, 10333, 303, 14731); else if ((i1 | 0) == 65) ___assert_fail(14720, 10333, 303, 14731); else if ((i1 | 0) == 73) ___assert_fail(14720, 10333, 303, 14731); else if ((i1 | 0) == 81) ___assert_fail(14720, 10333, 303, 14731);
}

function __ZN7guetzli17PreProcessChannelEiiiffbbRKNSt3__26vectorINS1_IfNS0_9allocatorIfEEEENS2_IS4_EEEE(i36, i31, i32, i30, f28, f29, i33, i34, i22) {
 i36 = i36 | 0;
 i31 = i31 | 0;
 i32 = i32 | 0;
 i30 = i30 | 0;
 f28 = Math_fround(f28);
 f29 = Math_fround(f29);
 i33 = i33 | 0;
 i34 = i34 | 0;
 i22 = i22 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = 0.0, d16 = 0.0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i35 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, d46 = 0.0, f47 = f0, f48 = f0, d49 = 0.0;
 i45 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i44 = i45 + 84 | 0;
 i43 = i45 + 72 | 0;
 i42 = i45 + 60 | 0;
 i41 = i45 + 48 | 0;
 i40 = i45 + 36 | 0;
 i39 = i45 + 24 | 0;
 i38 = i45 + 12 | 0;
 i37 = i45;
 if (!(i33 | i34)) {
  __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEEC2ERKS5_(i36, i22);
  STACKTOP = i45;
  return;
 }
 __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEEC2ERKS5_(i44, i22);
 i1 = HEAP32[i44 >> 2] | 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i5 = i3;
 if ((i2 | 0) != (i3 | 0)) {
  i6 = HEAP32[i1 + 12 >> 2] | 0;
  i4 = HEAP32[i1 + 24 >> 2] | 0;
  i2 = i2 - i3 >> 2;
  i1 = 0;
  do {
   i23 = i5 + (i1 << 2) | 0;
   HEAPF32[i23 >> 2] = Math_fround(Math_fround(HEAPF32[i23 >> 2]) / Math_fround(255.0));
   i23 = i6 + (i1 << 2) | 0;
   HEAPF32[i23 >> 2] = Math_fround(+Math_fround(HEAPF32[i23 >> 2]) / 255.0 + -.5);
   i23 = i4 + (i1 << 2) | 0;
   HEAPF32[i23 >> 2] = Math_fround(+Math_fround(HEAPF32[i23 >> 2]) / 255.0 + -.5);
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 < i2 >>> 0);
 }
 i1 = HEAP32[i22 >> 2] | 0;
 i1 = (HEAP32[i1 + 4 >> 2] | 0) - (HEAP32[i1 >> 2] | 0) | 0;
 i2 = i1 >> 2;
 HEAP32[i43 >> 2] = 0;
 i3 = i43 + 4 | 0;
 HEAP32[i3 >> 2] = 0;
 i4 = i43 + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 if (i2) {
  if ((i1 | 0) < 0) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i43);
  i23 = ((i2 + -1 | 0) >>> 5) + 1 | 0;
  i5 = __Znwj(i23 << 2) | 0;
  HEAP32[i43 >> 2] = i5;
  HEAP32[i4 >> 2] = i23;
  HEAP32[i3 >> 2] = i2;
  i23 = i2 >>> 5;
  _memset(i5 | 0, 0, i23 << 2 | 0) | 0;
  i1 = i2 - (i23 << 5) | 0;
  i2 = i5 + (i23 << 2) | 0;
  if (i1) HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & ~(-1 >>> (32 - i1 | 0));
 } else i5 = 0;
 i23 = (i32 | 0) > 0;
 if (i23) {
  i11 = (i31 | 0) > 0;
  i12 = (i30 | 0) == 2;
  i13 = (i30 | 0) == 1;
  i14 = HEAP32[i44 >> 2] | 0;
  i17 = i14 + 12 | 0;
  i18 = i14 + 24 | 0;
  i19 = HEAP32[i43 >> 2] | 0;
  i10 = 0;
  i1 = i5;
  i2 = i5;
  do {
   L21 : do if (i11) {
    i6 = Math_imul(i10, i31) | 0;
    i7 = HEAP32[i14 >> 2] | 0;
    i8 = HEAP32[i17 >> 2] | 0;
    i9 = HEAP32[i18 >> 2] | 0;
    if (i12) i5 = 0; else {
     i3 = 0;
     while (1) {
      i4 = i3 + i6 | 0;
      f48 = Math_fround(HEAPF32[i7 + (i4 << 2) >> 2]);
      f47 = Math_fround(HEAPF32[i8 + (i4 << 2) >> 2]);
      d15 = +f48;
      d16 = +Math_fround(HEAPF32[i9 + (i4 << 2) >> 2]);
      d46 = +f47;
      if (+Math_fround(d15 + d46 * 1.772) < .9 & (+Math_fround(d15 - d46 * .34414 - d16 * .71414) < .85 & (i13 & +Math_fround(d15 + d16 * 1.402) < .85))) {
       i5 = i1 + (i4 >>> 5 << 2) | 0;
       HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 1 << (i4 & 31);
      }
      i3 = i3 + 1 | 0;
      if ((i3 | 0) == (i31 | 0)) break L21;
     }
    }
    while (1) {
     i4 = i5 + i6 | 0;
     f47 = Math_fround(HEAPF32[i7 + (i4 << 2) >> 2]);
     f48 = Math_fround(HEAPF32[i8 + (i4 << 2) >> 2]);
     d46 = +f47;
     d16 = +Math_fround(HEAPF32[i9 + (i4 << 2) >> 2]);
     d15 = +f48;
     i3 = +Math_fround(d46 - d15 * .34414 - d16 * .71414) < .85;
     d15 = +Math_fround(d46 + d15 * 1.772);
     d16 = +Math_fround(d46 + d16 * 1.402);
     if (!(d16 < .9 & (d15 < .85 & i3))) if (d15 < .9 & (i3 & (i13 & d16 < .85))) i35 = 17; else i3 = i2; else {
      i2 = i19;
      i35 = 17;
     }
     if ((i35 | 0) == 17) {
      i35 = 0;
      i3 = i2 + (i4 >>> 5 << 2) | 0;
      HEAP32[i3 >> 2] = HEAP32[i3 >> 2] | 1 << (i4 & 31);
      i3 = i2;
      i1 = i2;
     }
     i5 = i5 + 1 | 0;
     if ((i5 | 0) == (i31 | 0)) {
      i2 = i3;
      break;
     } else i2 = i3;
    }
   } while (0);
   i10 = i10 + 1 | 0;
  } while ((i10 | 0) != (i32 | 0));
 }
 __ZN12_GLOBAL__N_15ErodeEiiPNSt3__26vectorIbNS0_9allocatorIbEEEE(i31, i32, i43);
 __ZN12_GLOBAL__N_15ErodeEiiPNSt3__26vectorIbNS0_9allocatorIbEEEE(i31, i32, i43);
 __ZN12_GLOBAL__N_15ErodeEiiPNSt3__26vectorIbNS0_9allocatorIbEEEE(i31, i32, i43);
 i1 = HEAP32[i22 >> 2] | 0;
 i1 = (HEAP32[i1 + 4 >> 2] | 0) - (HEAP32[i1 >> 2] | 0) | 0;
 i2 = i1 >> 2;
 HEAP32[i42 >> 2] = 0;
 i3 = i42 + 4 | 0;
 HEAP32[i3 >> 2] = 0;
 i4 = i42 + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 if (i2) {
  if ((i1 | 0) < 0) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i42);
  i19 = ((i2 + -1 | 0) >>> 5) + 1 | 0;
  i5 = __Znwj(i19 << 2) | 0;
  HEAP32[i42 >> 2] = i5;
  HEAP32[i4 >> 2] = i19;
  HEAP32[i3 >> 2] = i2;
  i19 = i2 >>> 5;
  _memset(i5 | 0, 0, i19 << 2 | 0) | 0;
  i1 = i2 - (i19 << 5) | 0;
  i2 = i5 + (i19 << 2) | 0;
  if (i1) HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & ~(-1 >>> (32 - i1 | 0));
 } else i5 = 0;
 if (i23) {
  i8 = (i31 | 0) > 0;
  i10 = HEAP32[i44 >> 2] | 0;
  i9 = i10 + 12 | 0;
  i10 = i10 + 24 | 0;
  i11 = HEAP32[i42 >> 2] | 0;
  i7 = 0;
  do {
   L49 : do if (i8) {
    i3 = Math_imul(i7, i31) | 0;
    i4 = HEAP32[i9 >> 2] | 0;
    i6 = HEAP32[i10 >> 2] | 0;
    switch (i30 | 0) {
    case 2:
     {
      i2 = 0;
      break;
     }
    case 1:
     {
      i1 = 0;
      while (1) {
       i2 = i1 + i3 | 0;
       f48 = Math_fround(HEAPF32[i4 + (i2 << 2) >> 2]);
       d46 = +Math_fround(HEAPF32[i6 + (i2 << 2) >> 2]);
       d16 = +f48;
       if (d46 < d16 * 1.263 + -.1 & d16 > d46 * -.33741) {
        i19 = i5 + (i2 >>> 5 << 2) | 0;
        HEAP32[i19 >> 2] = HEAP32[i19 >> 2] | 1 << (i2 & 31);
       }
       i1 = i1 + 1 | 0;
       if ((i1 | 0) == (i31 | 0)) break L49;
      }
     }
    default:
     break L49;
    }
    do {
     i1 = i2 + i3 | 0;
     f48 = Math_fround(HEAPF32[i4 + (i1 << 2) >> 2]);
     d16 = +Math_fround(HEAPF32[i6 + (i1 << 2) >> 2]);
     d46 = +f48;
     if (d16 * 2.116 > .2 - d46 * .34414 ? d16 * 1.402 > d46 * 1.772 + .2 : 0) {
      i5 = i11 + (i1 >>> 5 << 2) | 0;
      HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 1 << (i1 & 31);
      i5 = i11;
     }
     i2 = i2 + 1 | 0;
    } while ((i2 | 0) != (i31 | 0));
   } while (0);
   i7 = i7 + 1 | 0;
  } while ((i7 | 0) != (i32 | 0));
 }
 __ZN12_GLOBAL__N_16DilateEiiPNSt3__26vectorIbNS0_9allocatorIbEEEE(i31, i32, i42);
 __ZN12_GLOBAL__N_16DilateEiiPNSt3__26vectorIbNS0_9allocatorIbEEEE(i31, i32, i42);
 __ZN12_GLOBAL__N_16DilateEiiPNSt3__26vectorIbNS0_9allocatorIbEEEE(i31, i32, i42);
 i1 = HEAP32[i22 >> 2] | 0;
 i1 = (HEAP32[i1 + 4 >> 2] | 0) - (HEAP32[i1 >> 2] | 0) | 0;
 i2 = i1 >> 2;
 HEAP32[i41 >> 2] = 0;
 i3 = i41 + 4 | 0;
 HEAP32[i3 >> 2] = 0;
 i4 = i41 + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 if (i2) {
  if ((i1 | 0) < 0) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i41);
  i19 = ((i2 + -1 | 0) >>> 5) + 1 | 0;
  i5 = __Znwj(i19 << 2) | 0;
  HEAP32[i41 >> 2] = i5;
  HEAP32[i4 >> 2] = i19;
  HEAP32[i3 >> 2] = i2;
  i19 = i2 >>> 5;
  _memset(i5 | 0, 0, i19 << 2 | 0) | 0;
  i1 = i2 - (i19 << 5) | 0;
  i2 = i5 + (i19 << 2) | 0;
  if (i1) HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & ~(-1 >>> (32 - i1 | 0));
 } else i5 = 0;
 if (i23 ? (i20 = HEAP32[i42 >> 2] | 0, i21 = HEAP32[i43 >> 2] | 0, (i31 | 0) > 0) : 0) {
  i4 = 0;
  do {
   i6 = Math_imul(i4, i31) | 0;
   i3 = 0;
   do {
    i2 = i3 + i6 | 0;
    i1 = i2 >>> 5;
    i2 = 1 << (i2 & 31);
    if (!(HEAP32[i20 + (i1 << 2) >> 2] & i2)) {
     i19 = i5 + (i1 << 2) | 0;
     i1 = HEAP32[i19 >> 2] & ~i2;
     i2 = i19;
    } else {
     i19 = i5 + (i1 << 2) | 0;
     i18 = HEAP32[i19 >> 2] | 0;
     i1 = HEAP32[i21 + (i1 << 2) >> 2] & i2 | 0 ? i18 | i2 : i18 & ~i2;
     i2 = i19;
    }
    HEAP32[i2 >> 2] = i1;
    i3 = i3 + 1 | 0;
   } while ((i3 | 0) != (i31 | 0));
   i4 = i4 + 1 | 0;
  } while ((i4 | 0) != (i32 | 0));
 }
 d15 = (i30 | 0) == 2 ? 2.5500000000000003 : 127.5;
 i1 = HEAP32[i22 >> 2] | 0;
 i1 = (HEAP32[i1 + 4 >> 2] | 0) - (HEAP32[i1 >> 2] | 0) | 0;
 i2 = i1 >> 2;
 HEAP32[i40 >> 2] = 0;
 i3 = i40 + 4 | 0;
 HEAP32[i3 >> 2] = 0;
 i4 = i40 + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 if (i2 | 0) {
  if ((i1 | 0) < 0) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i40);
  i22 = ((i2 + -1 | 0) >>> 5) + 1 | 0;
  i21 = __Znwj(i22 << 2) | 0;
  HEAP32[i40 >> 2] = i21;
  HEAP32[i4 >> 2] = i22;
  HEAP32[i3 >> 2] = i2;
  i22 = i2 >>> 5;
  _memset(i21 | 0, 0, i22 << 2 | 0) | 0;
  i1 = i2 - (i22 << 5) | 0;
  i2 = i21 + (i22 << 2) | 0;
  if (i1 | 0) HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & ~(-1 >>> (32 - i1 | 0));
 }
 i1 = HEAP32[i44 >> 2] | 0;
 i2 = i1 + (i30 * 12 | 0) | 0;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i39, i2);
 i1 = HEAP32[i1 + (i30 * 12 | 0) + 4 >> 2] | 0;
 i2 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != (i2 | 0)) {
  i8 = i1 - i2 >> 2;
  i3 = HEAP32[i39 >> 2] | 0;
  i1 = 0;
  do {
   i4 = (i1 | 0) % (i31 | 0) | 0;
   i5 = (i1 | 0) / (i31 | 0) | 0;
   i6 = i4 + 1 | 0;
   i7 = i5 + 1 | 0;
   if ((i7 | 0) < (i32 | 0) & (((i5 | 0) < 1 | ((i4 | 0) < 1 | (i6 | 0) >= (i31 | 0))) ^ 1)) {
    i21 = i4 + -1 | 0;
    i22 = Math_imul(i5 + -1 | 0, i31) | 0;
    f48 = Math_fround(+Math_fround(HEAPF32[i2 + (i22 + i21 << 2) >> 2]) * 0.0 + 0.0);
    f48 = Math_fround(f48 - Math_fround(HEAPF32[i2 + (i22 + i4 << 2) >> 2]));
    f48 = Math_fround(+Math_fround(HEAPF32[i2 + (i22 + i6 << 2) >> 2]) * 0.0 + +f48);
    i22 = Math_imul(i5, i31) | 0;
    f48 = Math_fround(f48 - Math_fround(HEAPF32[i2 + (i22 + i21 << 2) >> 2]));
    f48 = Math_fround(+Math_fround(HEAPF32[i2 + (i22 + i4 << 2) >> 2]) * 4.0 + +f48);
    f48 = Math_fround(f48 - Math_fround(HEAPF32[i2 + (i22 + i6 << 2) >> 2]));
    i22 = Math_imul(i7, i31) | 0;
    f48 = Math_fround(+Math_fround(HEAPF32[i2 + (i22 + i21 << 2) >> 2]) * 0.0 + +f48);
    f48 = Math_fround(f48 - Math_fround(HEAPF32[i2 + (i22 + i4 << 2) >> 2]));
    HEAPF32[i3 + (i1 << 2) >> 2] = Math_fround(+Math_fround(HEAPF32[i2 + (i22 + i6 << 2) >> 2]) * 0.0 + +f48);
   }
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 < i8 >>> 0);
 }
 if (i23 ? (i24 = HEAP32[i41 >> 2] | 0, i25 = HEAP32[i43 >> 2] | 0, i26 = HEAP32[i39 >> 2] | 0, i27 = HEAP32[i40 >> 2] | 0, (i31 | 0) > 0) : 0) {
  i4 = HEAP32[i44 >> 2] | 0;
  i3 = HEAP32[i4 + 12 >> 2] | 0;
  i4 = HEAP32[i4 + 24 >> 2] | 0;
  i2 = 0;
  do {
   i5 = Math_imul(i2, i31) | 0;
   i1 = 0;
   do {
    i22 = i1 + i5 | 0;
    f48 = Math_fround(HEAPF32[i3 + (i22 << 2) >> 2]);
    f47 = Math_fround(HEAPF32[i4 + (i22 << 2) >> 2]);
    i6 = i22 >>> 5;
    i7 = 1 << (i22 & 31);
    if ((((HEAP32[i24 + (i6 << 2) >> 2] & i7 | 0) == 0 ? HEAP32[i25 + (i6 << 2) >> 2] & i7 | 0 : 0) ? +Math_fround(Math_abs(Math_fround(HEAPF32[i26 + (i22 << 2) >> 2]))) < d15 : 0) ? +f47 < +f48 * -.162 : 0) {
     i22 = i27 + (i6 << 2) | 0;
     HEAP32[i22 >> 2] = HEAP32[i22 >> 2] | i7;
    }
    i1 = i1 + 1 | 0;
   } while ((i1 | 0) != (i31 | 0));
   i2 = i2 + 1 | 0;
  } while ((i2 | 0) != (i32 | 0));
 }
 __ZN12_GLOBAL__N_15ErodeEiiPNSt3__26vectorIbNS0_9allocatorIbEEEE(i31, i32, i40);
 __ZN12_GLOBAL__N_15ErodeEiiPNSt3__26vectorIbNS0_9allocatorIbEEEE(i31, i32, i40);
 i1 = HEAP32[i44 >> 2] | 0;
 i2 = i1 + (i30 * 12 | 0) | 0;
 i5 = __Znwj(40) | 0;
 d46 = +f28;
 d49 = d46 * (d46 * 2.0);
 d15 = +_exp(-4.0 / d49) * .3989422804014327 / d46;
 HEAPF64[i5 >> 3] = d15;
 d16 = +_exp(-1.0 / d49) * .3989422804014327 / d46;
 HEAPF64[i5 + 8 >> 3] = d16;
 d46 = +_exp(-0.0 / d49) * .3989422804014327 / d46;
 HEAPF64[i5 + 16 >> 3] = d46;
 HEAPF64[i5 + 24 >> 3] = d16;
 HEAPF64[i5 + 32 >> 3] = d15;
 __ZN12_GLOBAL__N_110Convolve2XERKNSt3__26vectorIfNS0_9allocatorIfEEEEiiPKdid(i38, i2, i31, i32, i5, 5, 1.0 / (d15 + (d16 + (d15 + 0.0 + d16 + d46))));
 i1 = HEAP32[i1 + (i30 * 12 | 0) + 4 >> 2] | 0;
 i2 = HEAP32[i2 >> 2] | 0;
 i3 = i2;
 if ((i1 | 0) != (i2 | 0)) {
  i4 = HEAP32[i38 >> 2] | 0;
  i2 = i1 - i2 >> 2;
  i1 = 0;
  do {
   f48 = Math_fround(HEAPF32[i3 + (i1 << 2) >> 2]);
   i27 = i4 + (i1 << 2) | 0;
   HEAPF32[i27 >> 2] = Math_fround(f48 + Math_fround(Math_fround(f48 - Math_fround(HEAPF32[i27 >> 2])) * f29));
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 < i2 >>> 0);
 }
 __ZdlPv(i5);
 i26 = HEAP32[i44 >> 2] | 0;
 i27 = __Znwj(40) | 0;
 HEAPF64[i27 >> 3] = .09397422369424545;
 HEAPF64[i27 + 8 >> 3] = .2282849189107672;
 HEAPF64[i27 + 16 >> 3] = .3068786772318713;
 HEAPF64[i27 + 24 >> 3] = .2282849189107672;
 HEAPF64[i27 + 32 >> 3] = .09397422369424545;
 __ZN12_GLOBAL__N_110Convolve2XERKNSt3__26vectorIfNS0_9allocatorIfEEEEiiPKdid(i37, i26 + (i30 * 12 | 0) | 0, i31, i32, i27, 5, 1.0510859709214928);
 __ZdlPv(i27);
 if (i23) {
  i9 = (i31 | 0) > 0;
  i10 = HEAP32[i41 >> 2] | 0;
  i11 = HEAP32[i40 >> 2] | 0;
  i8 = i33 ^ 1;
  i12 = HEAP32[i37 >> 2] | 0;
  i13 = HEAP32[i38 >> 2] | 0;
  i6 = HEAP32[i44 >> 2] | 0;
  i14 = i6 + (i30 * 12 | 0) | 0;
  i6 = i6 + (i30 * 12 | 0) | 0;
  i5 = 0;
  do {
   L123 : do if (i9) {
    i7 = Math_imul(i5, i31) | 0;
    if (i34) {
     i3 = 0;
     while (1) {
      i4 = i3 + i7 | 0;
      i1 = i4 >>> 5;
      i2 = 1 << (i4 & 31);
      if (!(HEAP32[i10 + (i1 << 2) >> 2] & i2)) {
       if (!((HEAP32[i11 + (i1 << 2) >> 2] & i2 | 0) == 0 | i8)) {
        i1 = i12;
        i35 = 83;
       }
      } else {
       i1 = i13;
       i35 = 83;
      }
      if ((i35 | 0) == 83) {
       i35 = 0;
       HEAP32[(HEAP32[i6 >> 2] | 0) + (i4 << 2) >> 2] = HEAP32[i1 + (i4 << 2) >> 2];
      }
      i3 = i3 + 1 | 0;
      if ((i3 | 0) == (i31 | 0)) break L123;
     }
    }
    if (i33) {
     i1 = 0;
     do {
      i2 = i1 + i7 | 0;
      i3 = i2 >>> 5;
      i4 = 1 << (i2 & 31);
      do if (!(HEAP32[i10 + (i3 << 2) >> 2] & i4)) {
       if (!(HEAP32[i11 + (i3 << 2) >> 2] & i4)) break;
       HEAP32[(HEAP32[i14 >> 2] | 0) + (i2 << 2) >> 2] = HEAP32[i12 + (i2 << 2) >> 2];
      } while (0);
      i1 = i1 + 1 | 0;
     } while ((i1 | 0) != (i31 | 0));
    }
   } while (0);
   i5 = i5 + 1 | 0;
  } while ((i5 | 0) != (i32 | 0));
 }
 i1 = HEAP32[i44 >> 2] | 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i5 = i3;
 i6 = i1;
 if ((i2 | 0) != (i3 | 0)) {
  i7 = HEAP32[i1 + 12 >> 2] | 0;
  i4 = HEAP32[i1 + 24 >> 2] | 0;
  i2 = i2 - i3 >> 2;
  i1 = 0;
  do {
   i35 = i5 + (i1 << 2) | 0;
   HEAPF32[i35 >> 2] = Math_fround(Math_fround(HEAPF32[i35 >> 2]) * Math_fround(255.0));
   i35 = i7 + (i1 << 2) | 0;
   HEAPF32[i35 >> 2] = Math_fround((+Math_fround(HEAPF32[i35 >> 2]) + .5) * 255.0);
   i35 = i4 + (i1 << 2) | 0;
   HEAPF32[i35 >> 2] = Math_fround((+Math_fround(HEAPF32[i35 >> 2]) + .5) * 255.0);
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 < i2 >>> 0);
 }
 HEAP32[i36 >> 2] = i6;
 i5 = i44 + 4 | 0;
 HEAP32[i36 + 4 >> 2] = HEAP32[i5 >> 2];
 i3 = i44 + 8 | 0;
 HEAP32[i36 + 8 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i3 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i44 >> 2] = 0;
 i3 = HEAP32[i37 >> 2] | 0;
 if (i3 | 0) {
  i1 = i37 + 4 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
  __ZdlPv(i3);
 }
 i3 = HEAP32[i38 >> 2] | 0;
 if (i3 | 0) {
  i1 = i38 + 4 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
  __ZdlPv(i3);
 }
 i3 = HEAP32[i39 >> 2] | 0;
 if (i3 | 0) {
  i1 = i39 + 4 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
  __ZdlPv(i3);
 }
 i1 = HEAP32[i40 >> 2] | 0;
 if (i1 | 0) __ZdlPv(i1);
 i1 = HEAP32[i41 >> 2] | 0;
 if (i1 | 0) __ZdlPv(i1);
 i1 = HEAP32[i42 >> 2] | 0;
 if (i1 | 0) __ZdlPv(i1);
 i1 = HEAP32[i43 >> 2] | 0;
 if (i1 | 0) __ZdlPv(i1);
 i1 = HEAP32[i44 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -12 | 0;
    HEAP32[i5 >> 2] = i3;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) i2 = i3; else {
     i2 = i2 + -8 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
     i2 = HEAP32[i5 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i44 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 STACKTOP = i45;
 return;
}

function __ZN7guetzli12_GLOBAL__N_19Processor14TryQuantMatrixERKNS_8JPEGDataEfPA64_i(i31, i32, i1, i22) {
 i31 = i31 | 0;
 i32 = i32 | 0;
 i1 = i1 | 0;
 i22 = i22 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = 0.0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i36 = STACKTOP;
 STACKTOP = STACKTOP + 3456 | 0;
 i29 = i36 + 2432 | 0;
 i28 = i36 + 2136 | 0;
 i21 = i36 + 2112 | 0;
 i25 = i36 + 1088 | 0;
 i24 = i36 + 1072 | 0;
 i23 = i36 + 1056 | 0;
 i9 = i36 + 1048 | 0;
 i7 = i36 + 1024 | 0;
 i10 = i36;
 i35 = i36 + 2408 | 0;
 i33 = i36 + 2256 | 0;
 i34 = i36 + 2232 | 0;
 i5 = i36 + 2196 | 0;
 i6 = i36 + 2172 | 0;
 i11 = i36 + 2244 | 0;
 i17 = i36 + 2220 | 0;
 i18 = i36 + 2208 | 0;
 i19 = i36 + 2184 | 0;
 i27 = i36 + 2160 | 0;
 i20 = i31 + 776 | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i20 + 4 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 HEAP32[i20 + 12 >> 2] = 0;
 HEAP32[i20 + 16 >> 2] = 0;
 HEAP32[i20 + 20 >> 2] = 0;
 _memcpy(i31 | 0, i22 | 0, 768) | 0;
 __ZN7guetzli11OutputImageC2Eii(i35, HEAP32[i1 >> 2] | 0, HEAP32[i1 + 4 >> 2] | 0);
 __ZN7guetzli11OutputImage16CopyFromJpegDataERKNS_8JPEGDataE(i35, i1);
 i20 = i35 + 8 | 0;
 __ZN7guetzli20OutputImageComponent23ApplyGlobalQuantizationEPKi(HEAP32[i20 >> 2] | 0, i31);
 __ZN7guetzli20OutputImageComponent23ApplyGlobalQuantizationEPKi((HEAP32[i20 >> 2] | 0) + 308 | 0, i31 + 256 | 0);
 __ZN7guetzli20OutputImageComponent23ApplyGlobalQuantizationEPKi((HEAP32[i20 >> 2] | 0) + 616 | 0, i31 + 512 | 0);
 __ZN7guetzli8JPEGDataC2ERKS0_(i33, i1);
 __ZNK7guetzli11OutputImage14SaveToJpegDataEPNS_8JPEGDataE(i35, i33);
 HEAP32[i34 >> 2] = 0;
 HEAP32[i34 + 4 >> 2] = 0;
 HEAP32[i34 + 8 >> 2] = 0;
 i30 = i34 + 11 | 0;
 HEAP8[i34 >> 0] = 0;
 HEAP8[i30 >> 0] = 0;
 i26 = (HEAP8[i32 + 4 >> 0] | 0) != 0;
 HEAP32[i10 >> 2] = 6;
 HEAP32[i10 + 4 >> 2] = i34;
 HEAP32[i29 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i29 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 if (!(__ZN7guetzli9WriteJpegERKNS_8JPEGDataEbNS_10JPEGOutputE(i33, i26, i29) | 0)) ___assert_fail(14198, 14200, 119, 14224);
 i26 = i32 + 24 | 0;
 i4 = HEAP32[i26 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i5 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i5, 14346, 20);
 i3 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_(i4, i29, i5) | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if (!i1) {
  i1 = __Znwj(32) | 0;
  i2 = i1 + 16 | 0;
  HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
  HEAP32[i5 >> 2] = 0;
  HEAP32[i5 + 4 >> 2] = 0;
  HEAP32[i5 + 8 >> 2] = 0;
  HEAP32[i1 + 28 >> 2] = 0;
  i2 = HEAP32[i29 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = i2;
  HEAP32[i3 >> 2] = i1;
  i2 = HEAP32[HEAP32[i4 >> 2] >> 2] | 0;
  if (!i2) i2 = i1; else {
   HEAP32[i4 >> 2] = i2;
   i2 = HEAP32[i3 >> 2] | 0;
  }
  __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[i4 + 4 >> 2] | 0, i2);
  i16 = i4 + 8 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 i1 = HEAP32[i1 + 28 >> 2] | 0;
 i12 = HEAP32[i20 >> 2] | 0;
 i13 = HEAP32[i12 + 12 >> 2] | 0;
 i14 = HEAP32[i12 + 316 >> 2] | 0;
 i15 = HEAP32[i12 + 320 >> 2] | 0;
 i16 = HEAP32[i12 + 624 >> 2] | 0;
 i2 = HEAP32[i12 + 628 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i12 + 8 >> 2];
 HEAP32[i7 + 4 >> 2] = i13;
 HEAP32[i7 + 8 >> 2] = i14;
 HEAP32[i7 + 12 >> 2] = i15;
 HEAP32[i7 + 16 >> 2] = i16;
 HEAP32[i7 + 20 >> 2] = i2;
 i2 = _snprintf(i29, 128, 9652, i7) | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i6, i29, i2);
 i2 = (HEAP8[i6 + 11 >> 0] | 0) < 0 ? HEAP32[i6 >> 2] | 0 : i6;
 HEAP32[i9 >> 2] = i1 + 1;
 HEAP32[i9 + 4 >> 2] = i2;
 _snprintf(i10, 1024, 14311, i9) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i6);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i5);
 HEAP8[i10 + 1023 >> 0] = 0;
 i2 = HEAP32[i26 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i11 + 4 >> 2] = 0;
 HEAP32[i11 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i11, i10, _strlen(i10) | 0);
 i1 = HEAP32[i2 + 12 >> 2] | 0;
 if (i1 | 0) {
  i16 = HEAP8[i11 + 11 >> 0] | 0;
  i15 = i16 << 24 >> 24 < 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i1, i15 ? HEAP32[i11 >> 2] | 0 : i11, i15 ? HEAP32[i11 + 4 >> 2] | 0 : i16 & 255) | 0;
 }
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 if (i1 | 0) _fputs((HEAP8[i11 + 11 >> 0] | 0) < 0 ? HEAP32[i11 >> 2] | 0 : i11, i1) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i11);
 i14 = i29 + 1023 | 0;
 i15 = i17 + 11 | 0;
 i16 = i17 + 4 | 0;
 i7 = i29 + 1023 | 0;
 i9 = i18 + 11 | 0;
 i10 = i18 + 4 | 0;
 i11 = i29 + 1023 | 0;
 i12 = i19 + 11 | 0;
 i13 = i19 + 4 | 0;
 i6 = 0;
 do {
  i5 = i6 << 3;
  i4 = 0;
  do {
   i3 = 0;
   do {
    HEAP32[i25 >> 2] = HEAP32[i22 + (i4 << 8) + (i3 + i5 << 2) >> 2];
    _snprintf(i29, 1024, 14302, i25) | 0;
    HEAP8[i14 >> 0] = 0;
    i1 = HEAP32[i26 >> 2] | 0;
    HEAP32[i17 >> 2] = 0;
    HEAP32[i17 + 4 >> 2] = 0;
    HEAP32[i17 + 8 >> 2] = 0;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i17, i29, _strlen(i29) | 0);
    i2 = HEAP32[i1 + 12 >> 2] | 0;
    if (i2 | 0) {
     i37 = HEAP8[i15 >> 0] | 0;
     i38 = i37 << 24 >> 24 < 0;
     __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i2, i38 ? HEAP32[i17 >> 2] | 0 : i17, i38 ? HEAP32[i16 >> 2] | 0 : i37 & 255) | 0;
    }
    i1 = HEAP32[i1 + 16 >> 2] | 0;
    if (i1 | 0) _fputs((HEAP8[i15 >> 0] | 0) < 0 ? HEAP32[i17 >> 2] | 0 : i17, i1) | 0;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i17);
    i3 = i3 + 1 | 0;
   } while ((i3 | 0) < 8);
   _snprintf(i29, 1024, 14307, i24) | 0;
   HEAP8[i7 >> 0] = 0;
   i1 = HEAP32[i26 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   HEAP32[i18 + 4 >> 2] = 0;
   HEAP32[i18 + 8 >> 2] = 0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i18, i29, _strlen(i29) | 0);
   i2 = HEAP32[i1 + 12 >> 2] | 0;
   if (i2 | 0) {
    i38 = HEAP8[i9 >> 0] | 0;
    i37 = i38 << 24 >> 24 < 0;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i2, i37 ? HEAP32[i18 >> 2] | 0 : i18, i37 ? HEAP32[i10 >> 2] | 0 : i38 & 255) | 0;
   }
   i1 = HEAP32[i1 + 16 >> 2] | 0;
   if (i1 | 0) _fputs((HEAP8[i9 >> 0] | 0) < 0 ? HEAP32[i18 >> 2] | 0 : i18, i1) | 0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i18);
   i4 = i4 + 1 | 0;
  } while ((i4 | 0) < 3);
  _snprintf(i29, 1024, 14141, i23) | 0;
  HEAP8[i11 >> 0] = 0;
  i1 = HEAP32[i26 >> 2] | 0;
  HEAP32[i19 >> 2] = 0;
  HEAP32[i19 + 4 >> 2] = 0;
  HEAP32[i19 + 8 >> 2] = 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i19, i29, _strlen(i29) | 0);
  i2 = HEAP32[i1 + 12 >> 2] | 0;
  if (i2 | 0) {
   i38 = HEAP8[i12 >> 0] | 0;
   i37 = i38 << 24 >> 24 < 0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i2, i37 ? HEAP32[i19 >> 2] | 0 : i19, i37 ? HEAP32[i13 >> 2] | 0 : i38 & 255) | 0;
  }
  i1 = HEAP32[i1 + 16 >> 2] | 0;
  if (i1 | 0) _fputs((HEAP8[i12 >> 0] | 0) < 0 ? HEAP32[i19 >> 2] | 0 : i19, i1) | 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i19);
  i6 = i6 + 1 | 0;
 } while ((i6 | 0) < 8);
 i4 = HEAP32[i26 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 HEAP32[i24 + 4 >> 2] = 0;
 HEAP32[i24 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i24, 14346, 20);
 i3 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_(i4, i29, i24) | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if (!i1) {
  i1 = __Znwj(32) | 0;
  i2 = i1 + 16 | 0;
  HEAP32[i2 >> 2] = HEAP32[i24 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i24 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i24 + 8 >> 2];
  HEAP32[i24 >> 2] = 0;
  HEAP32[i24 + 4 >> 2] = 0;
  HEAP32[i24 + 8 >> 2] = 0;
  HEAP32[i1 + 28 >> 2] = 0;
  i2 = HEAP32[i29 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = i2;
  HEAP32[i3 >> 2] = i1;
  i2 = HEAP32[HEAP32[i4 >> 2] >> 2] | 0;
  if (!i2) i2 = i1; else {
   HEAP32[i4 >> 2] = i2;
   i2 = HEAP32[i3 >> 2] | 0;
  }
  __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[i4 + 4 >> 2] | 0, i2);
  i38 = i4 + 8 | 0;
  HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i20 = HEAP32[i20 >> 2] | 0;
 i37 = HEAP32[i20 + 12 >> 2] | 0;
 i38 = HEAP32[i20 + 316 >> 2] | 0;
 i1 = HEAP32[i20 + 320 >> 2] | 0;
 i3 = HEAP32[i20 + 624 >> 2] | 0;
 i2 = HEAP32[i20 + 628 >> 2] | 0;
 HEAP32[i21 >> 2] = HEAP32[i20 + 8 >> 2];
 HEAP32[i21 + 4 >> 2] = i37;
 HEAP32[i21 + 8 >> 2] = i38;
 HEAP32[i21 + 12 >> 2] = i1;
 HEAP32[i21 + 16 >> 2] = i3;
 HEAP32[i21 + 20 >> 2] = i2;
 i2 = _snprintf(i29, 128, 9652, i21) | 0;
 HEAP32[i23 >> 2] = 0;
 HEAP32[i23 + 4 >> 2] = 0;
 HEAP32[i23 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i23, i29, i2);
 i2 = HEAP8[i23 + 11 >> 0] | 0;
 i3 = HEAP32[i23 >> 2] | 0;
 i1 = 0;
 d8 = 0.0;
 do {
  d8 = d8 + (+(HEAP32[i22 + (i1 << 2) >> 2] | 0) + -1.0) * .5 * (1.0 / (+(HEAP32[2968 + (i1 << 2) >> 2] | 0) * .5 + 1.0));
  i1 = i1 + 1 | 0;
 } while ((i1 | 0) != 64);
 i4 = i4 + 1 | 0;
 i2 = i2 << 24 >> 24 < 0 ? i3 : i23;
 i1 = 0;
 do {
  d8 = d8 + (+(HEAP32[i22 + 256 + (i1 << 2) >> 2] | 0) + -1.0) * .5 * (1.0 / (+(HEAP32[2968 + (i1 << 2) >> 2] | 0) * .5 + 1.0));
  i1 = i1 + 1 | 0;
 } while ((i1 | 0) != 64);
 i1 = 0;
 do {
  d8 = d8 + (+(HEAP32[i22 + 512 + (i1 << 2) >> 2] | 0) + -1.0) * .5 * (1.0 / (+(HEAP32[2968 + (i1 << 2) >> 2] | 0) * .5 + 1.0));
  i1 = i1 + 1 | 0;
 } while ((i1 | 0) != 64);
 i1 = HEAP8[i30 >> 0] | 0;
 i5 = i34 + 4 | 0;
 i1 = i1 << 24 >> 24 < 0 ? HEAP32[i5 >> 2] | 0 : i1 & 255;
 HEAP32[i28 >> 2] = i4;
 HEAP32[i28 + 4 >> 2] = i2;
 HEAPF64[i28 + 8 >> 3] = d8;
 HEAP32[i28 + 16 >> 2] = i1;
 _snprintf(i25, 1024, 14367, i28) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i23);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i24);
 HEAP8[i25 + 1023 >> 0] = 0;
 i2 = HEAP32[i26 >> 2] | 0;
 HEAP32[i27 >> 2] = 0;
 HEAP32[i27 + 4 >> 2] = 0;
 HEAP32[i27 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i27, i25, _strlen(i25) | 0);
 i1 = HEAP32[i2 + 12 >> 2] | 0;
 if (i1 | 0) {
  i38 = HEAP8[i27 + 11 >> 0] | 0;
  i37 = i38 << 24 >> 24 < 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i1, i37 ? HEAP32[i27 >> 2] | 0 : i27, i37 ? HEAP32[i27 + 4 >> 2] | 0 : i38 & 255) | 0;
 }
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 if (i1 | 0) _fputs((HEAP8[i27 + 11 >> 0] | 0) < 0 ? HEAP32[i27 >> 2] | 0 : i27, i1) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i27);
 i4 = HEAP32[i26 >> 2] | 0;
 HEAP32[i28 >> 2] = 0;
 HEAP32[i28 + 4 >> 2] = 0;
 HEAP32[i28 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i28, 14346, 20);
 i3 = __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_(i4, i29, i28) | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if (!i1) {
  i1 = __Znwj(32) | 0;
  i2 = i1 + 16 | 0;
  HEAP32[i2 >> 2] = HEAP32[i28 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i28 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i28 + 8 >> 2];
  HEAP32[i28 >> 2] = 0;
  HEAP32[i28 + 4 >> 2] = 0;
  HEAP32[i28 + 8 >> 2] = 0;
  HEAP32[i1 + 28 >> 2] = 0;
  i2 = HEAP32[i29 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = i2;
  HEAP32[i3 >> 2] = i1;
  i2 = HEAP32[HEAP32[i4 >> 2] >> 2] | 0;
  if (!i2) i2 = i1; else {
   HEAP32[i4 >> 2] = i2;
   i2 = HEAP32[i3 >> 2] | 0;
  }
  __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(HEAP32[i4 + 4 >> 2] | 0, i2);
  i38 = i4 + 8 | 0;
  HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
 }
 i4 = i1 + 28 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i28);
 i4 = i32 + 16 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 3](i1, i35);
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP8[i31 + 768 >> 0] = (FUNCTION_TABLE_iid[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 1](i1, .9700000286102295) | 0) & 1;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i31 + 776 | 0, i34) | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 3](i29, i1);
 i1 = i31 + 788 | 0;
 if ((i1 | 0) != (i29 | 0)) __ZNSt3__26vectorIfNS_9allocatorIfEEE6assignIPfEENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIfNS_15iterator_traitsIS7_E9referenceEEE5valueEvE4typeES7_S7_(i1, HEAP32[i29 >> 2] | 0, HEAP32[i29 + 4 >> 2] | 0);
 i3 = HEAP32[i29 >> 2] | 0;
 if (i3 | 0) {
  i1 = i29 + 4 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
  __ZdlPv(i3);
 }
 i1 = HEAP32[i4 >> 2] | 0;
 HEAPF64[i31 + 800 >> 3] = +Math_fround(FUNCTION_TABLE_fi[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 3](i1));
 i1 = HEAP32[i4 >> 2] | 0;
 i7 = HEAP8[i30 >> 0] | 0;
 HEAPF64[i31 + 808 >> 3] = +FUNCTION_TABLE_dii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 1](i1, i7 << 24 >> 24 < 0 ? HEAP32[i5 >> 2] | 0 : i7 & 255);
 __ZN7guetzli12_GLOBAL__N_19Processor11MaybeOutputERKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE(i32, i34);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i34);
 __ZN7guetzli8JPEGDataD2Ev(i33);
 i7 = i35 + 8 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if (!i1) {
  STACKTOP = i36;
  return;
 }
 i6 = i35 + 12 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) != (i1 | 0)) {
  do {
   HEAP32[i6 >> 2] = i2 + -308;
   i3 = HEAP32[i2 + -268 >> 2] | 0;
   if (i3 | 0) {
    i4 = i2 + -264 | 0;
    i5 = HEAP32[i4 >> 2] | 0;
    if ((i5 | 0) != (i3 | 0)) HEAP32[i4 >> 2] = i5 + (~((i5 + -2 - i3 | 0) >>> 1) << 1);
    __ZdlPv(i3);
   }
   i4 = HEAP32[i2 + -280 >> 2] | 0;
   if (i4 | 0) {
    i2 = i2 + -276 | 0;
    i3 = HEAP32[i2 >> 2] | 0;
    if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -2 - i4 | 0) >>> 1) << 1);
    __ZdlPv(i4);
   }
   i2 = HEAP32[i6 >> 2] | 0;
  } while ((i2 | 0) != (i1 | 0));
  i1 = HEAP32[i7 >> 2] | 0;
 }
 __ZdlPv(i1);
 STACKTOP = i36;
 return;
}

function __ZN7guetzli20OutputImageComponent20UpdatePixelsForBlockEiiPKh(i53, i54, i55, i60) {
 i53 = i53 | 0;
 i54 = i54 | 0;
 i55 = i55 | 0;
 i60 = i60 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i61 = 0, i62 = 0, i63 = 0;
 i61 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i3 = i61;
 i59 = i61 + 8 | 0;
 i1 = HEAP32[i53 + 8 >> 2] | 0;
 i2 = HEAP32[i53 + 12 >> 2] | 0;
 if ((i1 | 0) == 1 & (i2 | 0) == 1) {
  i23 = i54 << 3;
  i20 = i55 << 3;
  i21 = i53 + 4 | 0;
  i22 = i53 + 40 | 0;
  i2 = HEAP32[i53 >> 2] | 0;
  i3 = (i23 | 0) < (i2 | 0);
  i4 = i23 | 1;
  i5 = (i4 | 0) < (i2 | 0);
  i6 = i23 | 2;
  i7 = (i6 | 0) < (i2 | 0);
  i8 = i23 | 3;
  i9 = (i8 | 0) < (i2 | 0);
  i10 = i23 | 4;
  i11 = (i10 | 0) < (i2 | 0);
  i12 = i23 | 5;
  i13 = (i12 | 0) < (i2 | 0);
  i14 = i23 | 6;
  i15 = (i14 | 0) < (i2 | 0);
  i16 = i23 | 7;
  i17 = (i16 | 0) < (i2 | 0);
  i1 = 0;
  do {
   i18 = i1 + i20 | 0;
   i19 = i1 << 3;
   if (i3 ? (i18 | 0) < (HEAP32[i21 >> 2] | 0) : 0) {
    i59 = (Math_imul(i2, i18) | 0) + i23 | 0;
    HEAP16[(HEAP32[i22 >> 2] | 0) + (i59 << 1) >> 1] = (HEAPU8[i60 + i19 >> 0] | 0) << 4;
   }
   if (i5 ? (i18 | 0) < (HEAP32[i21 >> 2] | 0) : 0) {
    i59 = (Math_imul(i2, i18) | 0) + i4 | 0;
    HEAP16[(HEAP32[i22 >> 2] | 0) + (i59 << 1) >> 1] = (HEAPU8[i60 + (i19 | 1) >> 0] | 0) << 4;
   }
   if (i7 ? (i18 | 0) < (HEAP32[i21 >> 2] | 0) : 0) {
    i59 = (Math_imul(i2, i18) | 0) + i6 | 0;
    HEAP16[(HEAP32[i22 >> 2] | 0) + (i59 << 1) >> 1] = (HEAPU8[i60 + (i19 | 2) >> 0] | 0) << 4;
   }
   if (i9 ? (i18 | 0) < (HEAP32[i21 >> 2] | 0) : 0) {
    i59 = (Math_imul(i2, i18) | 0) + i8 | 0;
    HEAP16[(HEAP32[i22 >> 2] | 0) + (i59 << 1) >> 1] = (HEAPU8[i60 + (i19 | 3) >> 0] | 0) << 4;
   }
   if (i11 ? (i18 | 0) < (HEAP32[i21 >> 2] | 0) : 0) {
    i59 = (Math_imul(i2, i18) | 0) + i10 | 0;
    HEAP16[(HEAP32[i22 >> 2] | 0) + (i59 << 1) >> 1] = (HEAPU8[i60 + (i19 | 4) >> 0] | 0) << 4;
   }
   if (i13 ? (i18 | 0) < (HEAP32[i21 >> 2] | 0) : 0) {
    i59 = (Math_imul(i2, i18) | 0) + i12 | 0;
    HEAP16[(HEAP32[i22 >> 2] | 0) + (i59 << 1) >> 1] = (HEAPU8[i60 + (i19 | 5) >> 0] | 0) << 4;
   }
   if (i15 ? (i18 | 0) < (HEAP32[i21 >> 2] | 0) : 0) {
    i59 = (Math_imul(i2, i18) | 0) + i14 | 0;
    HEAP16[(HEAP32[i22 >> 2] | 0) + (i59 << 1) >> 1] = (HEAPU8[i60 + (i19 | 6) >> 0] | 0) << 4;
   }
   if (i17 ? (i18 | 0) < (HEAP32[i21 >> 2] | 0) : 0) {
    i59 = (Math_imul(i2, i18) | 0) + i16 | 0;
    HEAP16[(HEAP32[i22 >> 2] | 0) + (i59 << 1) >> 1] = (HEAPU8[i60 + (i19 | 7) >> 0] | 0) << 4;
   }
   i1 = i1 + 1 | 0;
  } while ((i1 | 0) != 8);
  STACKTOP = i61;
  return;
 }
 if (!((i1 | 0) == 2 & (i2 | 0) == 2)) {
  HEAP32[i3 >> 2] = i1;
  HEAP32[i3 + 4 >> 2] = i2;
  _printf(9132, i3) | 0;
  _exit(1);
 }
 i50 = i55 << 4;
 i49 = i54 << 4;
 i51 = i53 + 4 | 0;
 i52 = i53 + 40 | 0;
 i22 = (i54 >> 27 & -9) + 10 | 0;
 i23 = (i54 >> 27 & -9) + 10 | 0;
 i24 = (i54 >> 27 & -9) + 10 | 0;
 i25 = (i54 >> 27 & -9) + 10 | 0;
 i26 = (i54 >> 27 & -9) + 10 | 0;
 i27 = (i54 >> 27 & -9) + 10 | 0;
 i28 = (i54 >> 27 & -9) + 10 | 0;
 i29 = (i54 >> 27 & -9) + 10 | 0;
 i30 = (i49 + 16 >> 31 & -9) + 10 | 0;
 i31 = (i49 + -2 >> 31 & -9) + 10 | 0;
 i32 = (i54 | 0) < 0;
 i33 = i49 | 2;
 i34 = (i33 | 0) < 0;
 i35 = i49 | 4;
 i36 = (i35 | 0) < 0;
 i37 = i49 | 6;
 i38 = (i37 | 0) < 0;
 i39 = i49 | 8;
 i40 = (i39 | 0) < 0;
 i41 = i49 | 10;
 i42 = (i41 | 0) < 0;
 i43 = i49 | 12;
 i44 = (i43 | 0) < 0;
 i45 = i49 | 14;
 i46 = (i45 | 0) < 0;
 i47 = i49 + 16 | 0;
 i48 = (i49 | 0) < -16;
 i17 = i49 | 15;
 i17 = (i17 | 0) > 0 ? i17 : 0;
 i19 = i49 + -2 | 0;
 i20 = (i49 | 0) < 2;
 i18 = i49 + -3 | 0;
 i18 = (i18 | 0) > 0 ? i18 : 0;
 i16 = i45 + -1 | 0;
 i16 = (i16 | 0) > 0 ? i16 : 0;
 i15 = i43 + -1 | 0;
 i15 = (i15 | 0) > 0 ? i15 : 0;
 i14 = i41 + -1 | 0;
 i14 = (i14 | 0) > 0 ? i14 : 0;
 i13 = i39 + -1 | 0;
 i13 = (i13 | 0) > 0 ? i13 : 0;
 i12 = i37 + -1 | 0;
 i12 = (i12 | 0) > 0 ? i12 : 0;
 i11 = i35 + -1 | 0;
 i11 = (i11 | 0) > 0 ? i11 : 0;
 i10 = i33 + -1 | 0;
 i10 = (i10 | 0) > 0 ? i10 : 0;
 i9 = i49 + -1 | 0;
 i9 = (i9 | 0) > 0 ? i9 : 0;
 i8 = 0;
 do {
  i21 = (i8 | 0) != 9;
  i7 = (i21 ? i8 << 1 : -2) + i50 | 0;
  i21 = i21 ? (i8 * 10 | 0) + 10 | 0 : 0;
  i3 = (i8 | 0) < 8;
  i4 = i8 << 3;
  i6 = i7 + -1 | 0;
  i6 = (i6 | 0) > 0 ? i6 : 0;
  i2 = i21 | 1;
  do if ((i7 | 0) < 0) {
   HEAP16[i59 + (i2 << 1) >> 1] = HEAP16[i59 + (i2 + i22 << 1) >> 1] | 0;
   i1 = i21 + 2 | 0;
   HEAP16[i59 + (i1 << 1) >> 1] = HEAP16[i59 + (i1 + i23 << 1) >> 1] | 0;
   i1 = i21 + 3 | 0;
   HEAP16[i59 + (i1 << 1) >> 1] = HEAP16[i59 + (i1 + i24 << 1) >> 1] | 0;
   i1 = i21 + 4 | 0;
   HEAP16[i59 + (i1 << 1) >> 1] = HEAP16[i59 + (i1 + i25 << 1) >> 1] | 0;
   i1 = i21 + 5 | 0;
   HEAP16[i59 + (i1 << 1) >> 1] = HEAP16[i59 + (i1 + i26 << 1) >> 1] | 0;
   i1 = i21 + 6 | 0;
   HEAP16[i59 + (i1 << 1) >> 1] = HEAP16[i59 + (i1 + i27 << 1) >> 1] | 0;
   i1 = i21 + 7 | 0;
   HEAP16[i59 + (i1 << 1) >> 1] = HEAP16[i59 + (i1 + i28 << 1) >> 1] | 0;
   i1 = i21 + 8 | 0;
   HEAP16[i59 + (i1 << 1) >> 1] = HEAP16[i59 + (i1 + i29 << 1) >> 1] | 0;
   i1 = i21 + 9 | 0;
   HEAP16[i59 + (i1 << 1) >> 1] = HEAP16[i59 + (i1 + i30 << 1) >> 1] | 0;
   i1 = HEAP16[i59 + (i21 + i31 << 1) >> 1] | 0;
  } else {
   do if (!i32) {
    i1 = HEAP32[i53 >> 2] | 0;
    if ((i49 | 0) >= (i1 | 0)) {
     i1 = HEAP16[i59 + (i21 << 1) >> 1] | 0;
     break;
    }
    if ((i7 | 0) >= (HEAP32[i51 >> 2] | 0)) {
     i1 = HEAP16[i59 + (i2 + -10 << 1) >> 1] | 0;
     break;
    }
    if (i3) {
     i1 = (HEAPU8[i60 + i4 >> 0] | 0) << 4 & 65535;
     break;
    } else {
     i5 = Math_imul(i1, i7) | 0;
     i62 = HEAP32[i52 >> 2] | 0;
     i1 = Math_imul(i1, i6) | 0;
     i1 = (((HEAPU16[i62 + (i5 + i49 << 1) >> 1] | 0) * 9 | 0) + (HEAPU16[i62 + (i1 + i9 << 1) >> 1] | 0) + (Math_imul((HEAPU16[i62 + (i1 + i49 << 1) >> 1] | 0) + (HEAPU16[i62 + (i5 + i9 << 1) >> 1] | 0) | 0, -3) | 0) | 0) >>> 2 & 65535;
     break;
    }
   } else i1 = HEAP16[i59 + (i2 + 1 << 1) >> 1] | 0; while (0);
   i5 = i59 + (i2 << 1) | 0;
   HEAP16[i5 >> 1] = i1;
   i2 = i21 + 2 | 0;
   do if (!i34) {
    i1 = HEAP32[i53 >> 2] | 0;
    if ((i33 | 0) >= (i1 | 0)) {
     i1 = HEAP16[i59 + ((i21 | 1) << 1) >> 1] | 0;
     break;
    }
    if ((i7 | 0) >= (HEAP32[i51 >> 2] | 0)) {
     i1 = HEAP16[i59 + (i21 + -8 << 1) >> 1] | 0;
     break;
    }
    if (i3) {
     i1 = (HEAPU8[i60 + (i4 | 1) >> 0] | 0) << 4 & 65535;
     break;
    } else {
     i62 = Math_imul(i1, i7) | 0;
     i63 = HEAP32[i52 >> 2] | 0;
     i1 = Math_imul(i1, i6) | 0;
     i1 = (((HEAPU16[i63 + (i62 + i33 << 1) >> 1] | 0) * 9 | 0) + (HEAPU16[i63 + (i1 + i10 << 1) >> 1] | 0) + (Math_imul((HEAPU16[i63 + (i1 + i33 << 1) >> 1] | 0) + (HEAPU16[i63 + (i62 + i10 << 1) >> 1] | 0) | 0, -3) | 0) | 0) >>> 2 & 65535;
     break;
    }
   } else i1 = HEAP16[i59 + (i21 + 3 << 1) >> 1] | 0; while (0);
   HEAP16[i59 + (i2 << 1) >> 1] = i1;
   i2 = i21 + 3 | 0;
   do if (!i36) {
    i1 = HEAP32[i53 >> 2] | 0;
    if ((i35 | 0) >= (i1 | 0)) {
     i1 = HEAP16[i59 + (i21 + 2 << 1) >> 1] | 0;
     break;
    }
    if ((i7 | 0) >= (HEAP32[i51 >> 2] | 0)) {
     i1 = HEAP16[i59 + (i21 + -7 << 1) >> 1] | 0;
     break;
    }
    if (i3) {
     i1 = (HEAPU8[i60 + (i4 | 2) >> 0] | 0) << 4 & 65535;
     break;
    } else {
     i63 = Math_imul(i1, i7) | 0;
     i62 = HEAP32[i52 >> 2] | 0;
     i1 = Math_imul(i1, i6) | 0;
     i1 = (((HEAPU16[i62 + (i63 + i35 << 1) >> 1] | 0) * 9 | 0) + (HEAPU16[i62 + (i1 + i11 << 1) >> 1] | 0) + (Math_imul((HEAPU16[i62 + (i1 + i35 << 1) >> 1] | 0) + (HEAPU16[i62 + (i63 + i11 << 1) >> 1] | 0) | 0, -3) | 0) | 0) >>> 2 & 65535;
     break;
    }
   } else i1 = HEAP16[i59 + (i21 + 4 << 1) >> 1] | 0; while (0);
   HEAP16[i59 + (i2 << 1) >> 1] = i1;
   i2 = i21 + 4 | 0;
   do if (!i38) {
    i1 = HEAP32[i53 >> 2] | 0;
    if ((i37 | 0) >= (i1 | 0)) {
     i1 = HEAP16[i59 + (i21 + 3 << 1) >> 1] | 0;
     break;
    }
    if ((i7 | 0) >= (HEAP32[i51 >> 2] | 0)) {
     i1 = HEAP16[i59 + (i21 + -6 << 1) >> 1] | 0;
     break;
    }
    if (i3) {
     i1 = (HEAPU8[i60 + (i4 | 3) >> 0] | 0) << 4 & 65535;
     break;
    } else {
     i63 = Math_imul(i1, i7) | 0;
     i62 = HEAP32[i52 >> 2] | 0;
     i1 = Math_imul(i1, i6) | 0;
     i1 = (((HEAPU16[i62 + (i63 + i37 << 1) >> 1] | 0) * 9 | 0) + (HEAPU16[i62 + (i1 + i12 << 1) >> 1] | 0) + (Math_imul((HEAPU16[i62 + (i1 + i37 << 1) >> 1] | 0) + (HEAPU16[i62 + (i63 + i12 << 1) >> 1] | 0) | 0, -3) | 0) | 0) >>> 2 & 65535;
     break;
    }
   } else i1 = HEAP16[i59 + (i21 + 5 << 1) >> 1] | 0; while (0);
   HEAP16[i59 + (i2 << 1) >> 1] = i1;
   i2 = i21 + 5 | 0;
   do if (!i40) {
    i1 = HEAP32[i53 >> 2] | 0;
    if ((i39 | 0) >= (i1 | 0)) {
     i1 = HEAP16[i59 + (i21 + 4 << 1) >> 1] | 0;
     break;
    }
    if ((i7 | 0) >= (HEAP32[i51 >> 2] | 0)) {
     i1 = HEAP16[i59 + (i21 + -5 << 1) >> 1] | 0;
     break;
    }
    if (i3) {
     i1 = (HEAPU8[i60 + (i4 | 4) >> 0] | 0) << 4 & 65535;
     break;
    } else {
     i63 = Math_imul(i1, i7) | 0;
     i62 = HEAP32[i52 >> 2] | 0;
     i1 = Math_imul(i1, i6) | 0;
     i1 = (((HEAPU16[i62 + (i63 + i39 << 1) >> 1] | 0) * 9 | 0) + (HEAPU16[i62 + (i1 + i13 << 1) >> 1] | 0) + (Math_imul((HEAPU16[i62 + (i1 + i39 << 1) >> 1] | 0) + (HEAPU16[i62 + (i63 + i13 << 1) >> 1] | 0) | 0, -3) | 0) | 0) >>> 2 & 65535;
     break;
    }
   } else i1 = HEAP16[i59 + (i21 + 6 << 1) >> 1] | 0; while (0);
   HEAP16[i59 + (i2 << 1) >> 1] = i1;
   i2 = i21 + 6 | 0;
   do if (!i42) {
    i1 = HEAP32[i53 >> 2] | 0;
    if ((i41 | 0) >= (i1 | 0)) {
     i1 = HEAP16[i59 + (i21 + 5 << 1) >> 1] | 0;
     break;
    }
    if ((i7 | 0) >= (HEAP32[i51 >> 2] | 0)) {
     i1 = HEAP16[i59 + (i21 + -4 << 1) >> 1] | 0;
     break;
    }
    if (i3) {
     i1 = (HEAPU8[i60 + (i4 | 5) >> 0] | 0) << 4 & 65535;
     break;
    } else {
     i63 = Math_imul(i1, i7) | 0;
     i62 = HEAP32[i52 >> 2] | 0;
     i1 = Math_imul(i1, i6) | 0;
     i1 = (((HEAPU16[i62 + (i63 + i41 << 1) >> 1] | 0) * 9 | 0) + (HEAPU16[i62 + (i1 + i14 << 1) >> 1] | 0) + (Math_imul((HEAPU16[i62 + (i1 + i41 << 1) >> 1] | 0) + (HEAPU16[i62 + (i63 + i14 << 1) >> 1] | 0) | 0, -3) | 0) | 0) >>> 2 & 65535;
     break;
    }
   } else i1 = HEAP16[i59 + (i21 + 7 << 1) >> 1] | 0; while (0);
   HEAP16[i59 + (i2 << 1) >> 1] = i1;
   i2 = i21 + 7 | 0;
   do if (!i44) {
    i1 = HEAP32[i53 >> 2] | 0;
    if ((i43 | 0) >= (i1 | 0)) {
     i1 = HEAP16[i59 + (i21 + 6 << 1) >> 1] | 0;
     break;
    }
    if ((i7 | 0) >= (HEAP32[i51 >> 2] | 0)) {
     i1 = HEAP16[i59 + (i21 + -3 << 1) >> 1] | 0;
     break;
    }
    if (i3) {
     i1 = (HEAPU8[i60 + (i4 | 6) >> 0] | 0) << 4 & 65535;
     break;
    } else {
     i63 = Math_imul(i1, i7) | 0;
     i62 = HEAP32[i52 >> 2] | 0;
     i1 = Math_imul(i1, i6) | 0;
     i1 = (((HEAPU16[i62 + (i63 + i43 << 1) >> 1] | 0) * 9 | 0) + (HEAPU16[i62 + (i1 + i15 << 1) >> 1] | 0) + (Math_imul((HEAPU16[i62 + (i1 + i43 << 1) >> 1] | 0) + (HEAPU16[i62 + (i63 + i15 << 1) >> 1] | 0) | 0, -3) | 0) | 0) >>> 2 & 65535;
     break;
    }
   } else i1 = HEAP16[i59 + (i21 + 8 << 1) >> 1] | 0; while (0);
   HEAP16[i59 + (i2 << 1) >> 1] = i1;
   i2 = i21 + 8 | 0;
   do if (!i46) {
    i1 = HEAP32[i53 >> 2] | 0;
    if ((i45 | 0) >= (i1 | 0)) {
     i1 = HEAP16[i59 + (i21 + 7 << 1) >> 1] | 0;
     break;
    }
    if ((i7 | 0) >= (HEAP32[i51 >> 2] | 0)) {
     i1 = HEAP16[i59 + (i21 + -2 << 1) >> 1] | 0;
     break;
    }
    if (i3) {
     i1 = (HEAPU8[i60 + (i4 | 7) >> 0] | 0) << 4 & 65535;
     break;
    } else {
     i63 = Math_imul(i1, i7) | 0;
     i62 = HEAP32[i52 >> 2] | 0;
     i1 = Math_imul(i1, i6) | 0;
     i1 = (((HEAPU16[i62 + (i63 + i45 << 1) >> 1] | 0) * 9 | 0) + (HEAPU16[i62 + (i1 + i16 << 1) >> 1] | 0) + (Math_imul((HEAPU16[i62 + (i1 + i45 << 1) >> 1] | 0) + (HEAPU16[i62 + (i63 + i16 << 1) >> 1] | 0) | 0, -3) | 0) | 0) >>> 2 & 65535;
     break;
    }
   } else i1 = HEAP16[i59 + (i21 + 9 << 1) >> 1] | 0; while (0);
   HEAP16[i59 + (i2 << 1) >> 1] = i1;
   i2 = i21 + 9 | 0;
   if (!i48) {
    i1 = HEAP32[i53 >> 2] | 0;
    do if ((i47 | 0) < (i1 | 0)) if ((i7 | 0) < (HEAP32[i51 >> 2] | 0)) {
     i63 = Math_imul(i1, i7) | 0;
     i62 = HEAP32[i52 >> 2] | 0;
     i1 = Math_imul(i1, i6) | 0;
     i1 = (((HEAPU16[i62 + (i63 + i47 << 1) >> 1] | 0) * 9 | 0) + (HEAPU16[i62 + (i1 + i17 << 1) >> 1] | 0) + (Math_imul((HEAPU16[i62 + (i1 + i47 << 1) >> 1] | 0) + (HEAPU16[i62 + (i63 + i17 << 1) >> 1] | 0) | 0, -3) | 0) | 0) >>> 2 & 65535;
     break;
    } else {
     i1 = HEAP16[i59 + (i21 + -1 << 1) >> 1] | 0;
     break;
    } else i1 = HEAP16[i59 + (i21 + 8 << 1) >> 1] | 0; while (0);
    HEAP16[i59 + (i2 << 1) >> 1] = i1;
    if (!i20) {
     i1 = HEAP32[i53 >> 2] | 0;
     if ((i19 | 0) >= (i1 | 0)) {
      i1 = HEAP16[i59 + (i21 + -1 << 1) >> 1] | 0;
      break;
     }
     if ((i7 | 0) < (HEAP32[i51 >> 2] | 0)) {
      i63 = Math_imul(i1, i7) | 0;
      i62 = HEAP32[i52 >> 2] | 0;
      i1 = Math_imul(i1, i6) | 0;
      i1 = (((HEAPU16[i62 + (i63 + i19 << 1) >> 1] | 0) * 9 | 0) + (HEAPU16[i62 + (i1 + i18 << 1) >> 1] | 0) + (Math_imul((HEAPU16[i62 + (i1 + i19 << 1) >> 1] | 0) + (HEAPU16[i62 + (i63 + i18 << 1) >> 1] | 0) | 0, -3) | 0) | 0) >>> 2 & 65535;
      break;
     } else {
      i1 = HEAP16[i59 + (i21 + -10 << 1) >> 1] | 0;
      break;
     }
    }
   } else HEAP16[i59 + (i2 << 1) >> 1] = HEAP16[i59 + (i21 + 10 << 1) >> 1] | 0;
   i1 = HEAP16[i5 >> 1] | 0;
  } while (0);
  HEAP16[i59 + (i21 << 1) >> 1] = i1;
  i8 = i8 + 1 | 0;
 } while ((i8 | 0) != 10);
 i9 = i49 + -1 | 0;
 i9 = (i9 | 0) > 0 ? i9 : 0;
 i7 = i49 + 16 | 0;
 i8 = HEAP32[i53 >> 2] | 0;
 i2 = i8 + -1 | 0;
 i7 = (i2 | 0) < (i7 | 0) ? i2 : i7;
 i2 = i50 + -1 | 0;
 i2 = (i2 | 0) > 0 ? i2 : 0;
 i6 = i50 + 16 | 0;
 i63 = (HEAP32[i51 >> 2] | 0) + -1 | 0;
 i6 = (i63 | 0) < (i6 | 0) ? i63 : i6;
 if ((i2 | 0) <= (i6 | 0) ? (i56 = i55 << 3, i57 = HEAP32[i52 >> 2] | 0, i58 = 11 - (i54 << 3) | 0, (i9 | 0) <= (i7 | 0)) : 0) while (1) {
  i3 = ((i2 << 1 & 2) * 10 | 0) + -10 | 0;
  i4 = i57 + ((Math_imul(i8, i2) | 0) << 1) | 0;
  i5 = i58 + ((((i2 & -2 | 0) / 2 | 0) - i56 | 0) * 10 | 0) | 0;
  i1 = i9;
  while (1) {
   i63 = i5 + ((i1 & -2 | 0) / 2 | 0) | 0;
   i62 = (i1 << 1 & 2) + -1 + i63 | 0;
   HEAP16[i4 + (i1 << 1) >> 1] = ((HEAPU16[i59 + (i62 + i3 << 1) >> 1] | 0) + ((HEAPU16[i59 + (i63 << 1) >> 1] | 0) * 9 | 0) + (((HEAPU16[i59 + (i62 << 1) >> 1] | 0) + (HEAPU16[i59 + (i63 + i3 << 1) >> 1] | 0) | 0) * 3 | 0) | 0) >>> 4;
   if ((i1 | 0) < (i7 | 0)) i1 = i1 + 1 | 0; else break;
  }
  if ((i2 | 0) < (i6 | 0)) i2 = i2 + 1 | 0; else break;
 }
 STACKTOP = i61;
 return;
}

function __ZN7guetzli12_GLOBAL__N_126BuildAndEncodeHuffmanCodesERKNS_8JPEGDataENS_10JPEGOutputEPNSt3__26vectorINS_16HuffmanCodeTableENS5_9allocatorIS7_EEEESB_(i9, i79, i80, i65, i69) {
 i9 = i9 | 0;
 i79 = i79 | 0;
 i80 = i80 | 0;
 i65 = i65 | 0;
 i69 = i69 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i66 = 0, i67 = 0, i68 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0;
 i85 = STACKTOP;
 STACKTOP = STACKTOP + 4512 | 0;
 i70 = i85 + 3480 | 0;
 i71 = i85 + 2456 | 0;
 i84 = i85 + 2444 | 0;
 i7 = i85 + 2440 | 0;
 i77 = i85 + 2424 | 0;
 i83 = i85 + 2412 | 0;
 i10 = i85 + 2408 | 0;
 i74 = i85 + 2392 | 0;
 i81 = i85 + 2376 | 0;
 i66 = i85 + 2308 | 0;
 i67 = i85 + 1280 | 0;
 i68 = i85;
 i75 = i9 + 80 | 0;
 i72 = (HEAP32[i9 + 84 >> 2] | 0) - (HEAP32[i75 >> 2] | 0) | 0;
 i76 = (i72 | 0) / 40 | 0;
 i1 = i65 + 4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i3 = HEAP32[i65 >> 2] | 0;
 i2 = (i4 - i3 | 0) / 1280 | 0;
 if (i76 >>> 0 <= i2 >>> 0) {
  if (i76 >>> 0 < i2 >>> 0 ? (i5 = i3 + (i76 * 1280 | 0) | 0, (i4 | 0) != (i5 | 0)) : 0) HEAP32[i1 >> 2] = i4 + (~(((0 - i5 + (i4 + -1280) | 0) >>> 0) / 1280 | 0) * 1280 | 0);
 } else __ZNSt3__26vectorIN7guetzli16HuffmanCodeTableENS_9allocatorIS2_EEE8__appendEj(i65, i76 - i2 | 0);
 i1 = i69 + 4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i3 = HEAP32[i69 >> 2] | 0;
 i2 = (i4 - i3 | 0) / 1280 | 0;
 if (i76 >>> 0 <= i2 >>> 0) {
  if (i76 >>> 0 < i2 >>> 0 ? (i6 = i3 + (i76 * 1280 | 0) | 0, (i4 | 0) != (i6 | 0)) : 0) HEAP32[i1 >> 2] = i4 + (~(((0 - i6 + (i4 + -1280) | 0) >>> 0) / 1280 | 0) * 1280 | 0);
 } else __ZNSt3__26vectorIN7guetzli16HuffmanCodeTableENS_9allocatorIS2_EEE8__appendEj(i69, i76 - i2 | 0);
 __ZNSt3__26vectorIN7guetzli13JpegHistogramENS_9allocatorIS2_EEEC2Ej(i84, i76);
 __ZN7guetzli17BuildDCHistogramsERKNS_8JPEGDataEPNS_13JpegHistogramE(i9, HEAP32[i84 >> 2] | 0);
 HEAP32[i7 >> 2] = i76;
 i1 = i76 * 257 | 0;
 HEAP32[i83 >> 2] = 0;
 i78 = i83 + 4 | 0;
 HEAP32[i78 >> 2] = 0;
 HEAP32[i83 + 8 >> 2] = 0;
 if (!i72) i1 = 0; else {
  if ((i72 | 0) < 0) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i83);
  i2 = __Znwj(i1) | 0;
  HEAP32[i78 >> 2] = i2;
  HEAP32[i83 >> 2] = i2;
  HEAP32[i83 + 8 >> 2] = i2 + i1;
  do {
   HEAP8[i2 >> 0] = 0;
   i2 = (HEAP32[i78 >> 2] | 0) + 1 | 0;
   HEAP32[i78 >> 2] = i2;
   i1 = i1 + -1 | 0;
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i83 >> 2] | 0;
 }
 __ZN7guetzli17ClusterHistogramsEPNS_13JpegHistogramEPjPiPh(HEAP32[i84 >> 2] | 0, i7, i77, i1) | 0;
 i64 = HEAP32[i7 >> 2] | 0;
 i1 = i64 + i76 | 0;
 i73 = i84 + 4 | 0;
 i4 = HEAP32[i73 >> 2] | 0;
 i3 = HEAP32[i84 >> 2] | 0;
 i2 = (i4 - i3 | 0) / 1028 | 0;
 if (i1 >>> 0 <= i2 >>> 0) {
  if (i1 >>> 0 < i2 >>> 0 ? (i8 = i3 + (i1 * 1028 | 0) | 0, (i4 | 0) != (i8 | 0)) : 0) HEAP32[i73 >> 2] = i4 + (~(((i4 + -1028 - i8 | 0) >>> 0) / 1028 | 0) * 1028 | 0);
 } else __ZNSt3__26vectorIN7guetzli13JpegHistogramENS_9allocatorIS2_EEE8__appendEj(i84, i1 - i2 | 0);
 i1 = i1 * 257 | 0;
 i4 = HEAP32[i78 >> 2] | 0;
 i3 = HEAP32[i83 >> 2] | 0;
 i2 = i4 - i3 | 0;
 if (i1 >>> 0 <= i2 >>> 0) {
  if (i1 >>> 0 < i2 >>> 0 ? (i11 = i3 + i1 | 0, (i4 | 0) != (i11 | 0)) : 0) HEAP32[i78 >> 2] = i11;
 } else __ZNSt3__26vectorIhNS_9allocatorIhEEE8__appendEj(i83, i1 - i2 | 0);
 __ZN7guetzli17BuildACHistogramsERKNS_8JPEGDataEPNS_13JpegHistogramE(i9, (HEAP32[i84 >> 2] | 0) + (i64 * 1028 | 0) | 0);
 HEAP32[i10 >> 2] = i76;
 __ZN7guetzli17ClusterHistogramsEPNS_13JpegHistogramEPjPiPh((HEAP32[i84 >> 2] | 0) + (i64 * 1028 | 0) | 0, i10, i74, (HEAP32[i83 >> 2] | 0) + (i64 * 257 | 0) | 0) | 0;
 i63 = (HEAP32[i10 >> 2] | 0) + i64 | 0;
 i2 = HEAP32[i73 >> 2] | 0;
 i1 = HEAP32[i84 >> 2] | 0;
 i3 = (i2 - i1 | 0) / 1028 | 0;
 i5 = i1;
 i4 = i2;
 if (i63 >>> 0 <= i3 >>> 0) {
  if (i63 >>> 0 < i3 >>> 0 ? (i12 = i5 + (i63 * 1028 | 0) | 0, (i4 | 0) != (i12 | 0)) : 0) {
   i2 = i4 + (~(((i4 + -1028 - i12 | 0) >>> 0) / 1028 | 0) * 1028 | 0) | 0;
   HEAP32[i73 >> 2] = i2;
  }
 } else {
  __ZNSt3__26vectorIN7guetzli13JpegHistogramENS_9allocatorIS2_EEE8__appendEj(i84, i63 - i3 | 0);
  i5 = HEAP32[i84 >> 2] | 0;
  i2 = HEAP32[i73 >> 2] | 0;
  i1 = i5;
 }
 if ((i2 | 0) == (i1 | 0)) i1 = 0; else {
  i7 = (i2 - i5 | 0) / 1028 | 0;
  i1 = 0;
  i6 = 0;
  do {
   i2 = 0;
   i3 = 0;
   i4 = 1;
   while (1) {
    i3 = ((HEAP32[i5 + (i6 * 1028 | 0) + (i2 << 2) >> 2] | 0) != 0 & 1) + i3 | 0;
    i2 = i4 + 1 | 0;
    if ((i2 | 0) == 257) break; else {
     i62 = i4;
     i4 = i2;
     i2 = i62;
    }
   }
   i1 = i3 + i1 | 0;
   i6 = i6 + 1 | 0;
  } while (i6 >>> 0 < i7 >>> 0);
 }
 i3 = (i63 * 17 | 0) + 2 + i1 | 0;
 i1 = i76 << 1;
 i61 = i1 + 6 | 0;
 i1 = i1 + 10 + i3 | 0;
 HEAP32[i81 >> 2] = 0;
 i62 = i81 + 4 | 0;
 HEAP32[i62 >> 2] = 0;
 HEAP32[i81 + 8 >> 2] = 0;
 if ((i1 | 0) < 0) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i81);
 i2 = __Znwj(i1) | 0;
 HEAP32[i62 >> 2] = i2;
 HEAP32[i81 >> 2] = i2;
 HEAP32[i81 + 8 >> 2] = i2 + i1;
 do {
  HEAP8[i2 >> 0] = 0;
  i2 = (HEAP32[i62 >> 2] | 0) + 1 | 0;
  HEAP32[i62 >> 2] = i2;
  i1 = i1 + -1 | 0;
 } while ((i1 | 0) != 0);
 HEAP8[HEAP32[i81 >> 2] >> 0] = -1;
 HEAP8[(HEAP32[i81 >> 2] | 0) + 1 >> 0] = -60;
 HEAP8[(HEAP32[i81 >> 2] | 0) + 2 >> 0] = i3 >>> 8;
 HEAP8[(HEAP32[i81 >> 2] | 0) + 3 >> 0] = i3;
 if (!i63) i2 = 4; else {
  i28 = i70 + 4 | 0;
  i29 = i66 + 4 | 0;
  i30 = i70 + 8 | 0;
  i31 = i66 + 8 | 0;
  i32 = i70 + 12 | 0;
  i33 = i66 + 12 | 0;
  i34 = i70 + 16 | 0;
  i35 = i66 + 16 | 0;
  i36 = i70 + 20 | 0;
  i37 = i66 + 20 | 0;
  i38 = i70 + 24 | 0;
  i39 = i66 + 24 | 0;
  i40 = i70 + 28 | 0;
  i41 = i66 + 28 | 0;
  i42 = i70 + 32 | 0;
  i43 = i66 + 32 | 0;
  i44 = i70 + 36 | 0;
  i45 = i66 + 36 | 0;
  i46 = i70 + 40 | 0;
  i47 = i66 + 40 | 0;
  i48 = i70 + 44 | 0;
  i49 = i66 + 44 | 0;
  i50 = i70 + 48 | 0;
  i51 = i66 + 48 | 0;
  i52 = i70 + 52 | 0;
  i53 = i66 + 52 | 0;
  i54 = i70 + 56 | 0;
  i55 = i66 + 56 | 0;
  i56 = i70 + 60 | 0;
  i57 = i66 + 60 | 0;
  i58 = i70 + 64 | 0;
  i59 = (i72 | 0) > 0;
  i60 = i66 + 64 | 0;
  i27 = 0;
  i2 = 4;
  do {
   i26 = i27 >>> 0 < i64 >>> 0;
   i7 = i26 ? 0 : i64;
   i1 = i66;
   i3 = i1 + 68 | 0;
   do {
    HEAP32[i1 >> 2] = 0;
    i1 = i1 + 4 | 0;
   } while ((i1 | 0) < (i3 | 0));
   _memset(i67 | 0, 0, 1028) | 0;
   i4 = (HEAP32[i83 >> 2] | 0) + (i27 * 257 | 0) | 0;
   i1 = 0;
   do {
    i25 = HEAP8[i4 + i1 >> 0] | 0;
    i3 = i66 + ((i25 & 255) << 2) | 0;
    if (i25 << 24 >> 24) HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
    i1 = i1 + 1 | 0;
   } while ((i1 | 0) != 257);
   HEAP32[i70 >> 2] = 0;
   i1 = HEAP32[i66 >> 2] | 0;
   HEAP32[i28 >> 2] = i1;
   i11 = HEAP32[i29 >> 2] | 0;
   i1 = i11 + i1 | 0;
   HEAP32[i30 >> 2] = i1;
   i12 = HEAP32[i31 >> 2] | 0;
   i1 = i12 + i1 | 0;
   HEAP32[i32 >> 2] = i1;
   i13 = HEAP32[i33 >> 2] | 0;
   i1 = i13 + i1 | 0;
   HEAP32[i34 >> 2] = i1;
   i14 = HEAP32[i35 >> 2] | 0;
   i1 = i14 + i1 | 0;
   HEAP32[i36 >> 2] = i1;
   i15 = HEAP32[i37 >> 2] | 0;
   i1 = i15 + i1 | 0;
   HEAP32[i38 >> 2] = i1;
   i16 = HEAP32[i39 >> 2] | 0;
   i1 = i16 + i1 | 0;
   HEAP32[i40 >> 2] = i1;
   i17 = HEAP32[i41 >> 2] | 0;
   i1 = i17 + i1 | 0;
   HEAP32[i42 >> 2] = i1;
   i18 = HEAP32[i43 >> 2] | 0;
   i1 = i18 + i1 | 0;
   HEAP32[i44 >> 2] = i1;
   i19 = HEAP32[i45 >> 2] | 0;
   i1 = i19 + i1 | 0;
   HEAP32[i46 >> 2] = i1;
   i20 = HEAP32[i47 >> 2] | 0;
   i1 = i20 + i1 | 0;
   HEAP32[i48 >> 2] = i1;
   i21 = HEAP32[i49 >> 2] | 0;
   i1 = i21 + i1 | 0;
   HEAP32[i50 >> 2] = i1;
   i22 = HEAP32[i51 >> 2] | 0;
   i1 = i22 + i1 | 0;
   HEAP32[i52 >> 2] = i1;
   i23 = HEAP32[i53 >> 2] | 0;
   i1 = i23 + i1 | 0;
   HEAP32[i54 >> 2] = i1;
   i24 = HEAP32[i55 >> 2] | 0;
   i1 = i24 + i1 | 0;
   HEAP32[i56 >> 2] = i1;
   i25 = HEAP32[i57 >> 2] | 0;
   HEAP32[i58 >> 2] = i25 + i1;
   i1 = 0;
   do {
    i3 = HEAP8[i4 + i1 >> 0] | 0;
    if (i3 << 24 >> 24) {
     i9 = i70 + ((i3 & 255) << 2) | 0;
     i10 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = i10 + 1;
     HEAP32[i67 + (i10 << 2) >> 2] = i1;
    }
    i1 = i1 + 1 | 0;
   } while ((i1 | 0) != 257);
   _memset(i68 | 0, -1, 256) | 0;
   i6 = 1;
   i5 = 0;
   i4 = i11;
   while (1) {
    if (i4) {
     i1 = i4;
     i3 = i5;
     while (1) {
      i1 = i1 + -1 | 0;
      HEAP32[i71 + (i3 << 2) >> 2] = i6;
      if (!i1) break; else i3 = i3 + 1 | 0;
     }
     i5 = i4 + i5 | 0;
    }
    i1 = i6 + 1 | 0;
    if ((i1 | 0) == 17) break;
    i6 = i1;
    i4 = HEAP32[i66 + (i1 << 2) >> 2] | 0;
   }
   i10 = i27 - i7 | 0;
   if (i5 | 0) {
    i9 = i5 + -1 | 0;
    HEAP32[i71 + (i9 << 2) >> 2] = 0;
    i8 = HEAP32[i71 >> 2] | 0;
    if (i8 | 0) {
     i3 = i8;
     i1 = 0;
     i4 = 0;
     i7 = i8;
     while (1) {
      if ((i7 | 0) != (i3 | 0)) do {
       i1 = i1 << 1;
       i3 = i3 + 1 | 0;
      } while ((i7 | 0) != (i3 | 0));
      do {
       i6 = i4;
       i4 = i4 + 1 | 0;
       HEAP32[i70 + (i6 << 2) >> 2] = i1;
       i1 = i1 + 1 | 0;
       i6 = HEAP32[i71 + (i4 << 2) >> 2] | 0;
      } while ((i6 | 0) == (i7 | 0));
      if (!i6) break; else {
       i3 = i7 + 1 | 0;
       i1 = i1 << 1;
       i7 = i6;
      }
     }
    }
    if ((i5 | 0) > 1 ? (i7 = HEAP32[i67 >> 2] | 0, HEAP8[i68 + i7 >> 0] = i8, HEAP32[i68 + 256 + (i7 << 2) >> 2] = HEAP32[i70 >> 2], (i9 | 0) != 1) : 0) {
     i1 = 1;
     do {
      i8 = HEAP32[i67 + (i1 << 2) >> 2] | 0;
      HEAP8[i68 + i8 >> 0] = HEAP32[i71 + (i1 << 2) >> 2];
      HEAP32[i68 + 256 + (i8 << 2) >> 2] = HEAP32[i70 + (i1 << 2) >> 2];
      i1 = i1 + 1 | 0;
     } while ((i1 | 0) != (i9 | 0));
    }
   }
   if (i59) if (i26) {
    i1 = 0;
    do {
     if ((HEAP32[i77 + (i1 << 2) >> 2] | 0) == (i10 | 0)) _memcpy((HEAP32[i65 >> 2] | 0) + (i1 * 1280 | 0) | 0, i68 | 0, 1280) | 0;
     i1 = i1 + 1 | 0;
    } while ((i1 | 0) < (i76 | 0));
   } else {
    i1 = 0;
    do {
     if ((HEAP32[i74 + (i1 << 2) >> 2] | 0) == (i10 | 0)) _memcpy((HEAP32[i69 >> 2] | 0) + (i1 * 1280 | 0) | 0, i68 | 0, 1280) | 0;
     i1 = i1 + 1 | 0;
    } while ((i1 | 0) < (i76 | 0));
   }
   do if (!(HEAP32[i60 >> 2] | 0)) if (!i25) if (!i24) if (!i23) if (!i22) if (!i21) {
    if (i20 | 0) {
     i3 = 10;
     break;
    }
    if (i19 | 0) {
     i3 = 9;
     break;
    }
    if (i18 | 0) {
     i3 = 8;
     break;
    }
    if (i17 | 0) {
     i3 = 7;
     break;
    }
    if (i16 | 0) {
     i3 = 6;
     break;
    }
    if (i15 | 0) {
     i3 = 5;
     break;
    }
    if (i14 | 0) {
     i3 = 4;
     break;
    }
    if (i13 | 0) {
     i3 = 3;
     break;
    }
    if (i12 | 0) {
     i3 = 2;
     break;
    }
    i3 = (i11 | 0) != 0 & 1;
   } else i3 = 11; else i3 = 12; else i3 = 13; else i3 = 14; else i3 = 15; else i3 = 16; while (0);
   i1 = i66 + (i3 << 2) | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + -1;
   i1 = 0;
   i4 = 0;
   while (1) {
    i4 = (HEAP32[i66 + (i1 << 2) >> 2] | 0) + i4 | 0;
    if ((i1 | 0) == (i3 | 0)) break; else i1 = i1 + 1 | 0;
   }
   HEAP8[(HEAP32[i81 >> 2] | 0) + i2 >> 0] = i26 ? i27 : i27 + 16 - i64 | 0;
   HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 1) >> 0] = HEAP32[i29 >> 2];
   HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 2) >> 0] = HEAP32[i31 >> 2];
   HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 3) >> 0] = HEAP32[i33 >> 2];
   HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 4) >> 0] = HEAP32[i35 >> 2];
   HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 5) >> 0] = HEAP32[i37 >> 2];
   HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 6) >> 0] = HEAP32[i39 >> 2];
   HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 7) >> 0] = HEAP32[i41 >> 2];
   HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 8) >> 0] = HEAP32[i43 >> 2];
   HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 9) >> 0] = HEAP32[i45 >> 2];
   HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 10) >> 0] = HEAP32[i47 >> 2];
   HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 11) >> 0] = HEAP32[i49 >> 2];
   HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 12) >> 0] = HEAP32[i51 >> 2];
   HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 13) >> 0] = HEAP32[i53 >> 2];
   HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 14) >> 0] = HEAP32[i55 >> 2];
   HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 15) >> 0] = HEAP32[i57 >> 2];
   HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 16) >> 0] = HEAP32[i60 >> 2];
   i2 = i2 + 17 | 0;
   if (i4) {
    i1 = 0;
    i3 = i2;
    while (1) {
     HEAP8[(HEAP32[i81 >> 2] | 0) + i3 >> 0] = HEAP32[i67 + (i1 << 2) >> 2];
     i1 = i1 + 1 | 0;
     if ((i1 | 0) == (i4 | 0)) break; else i3 = i3 + 1 | 0;
    }
    i2 = i2 + i4 | 0;
   }
   i27 = i27 + 1 | 0;
  } while ((i27 | 0) != (i63 | 0));
 }
 HEAP8[(HEAP32[i81 >> 2] | 0) + i2 >> 0] = -1;
 HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 1) >> 0] = -38;
 HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 2) >> 0] = i61 >>> 8;
 HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 3) >> 0] = i61;
 i1 = i2 + 5 | 0;
 HEAP8[(HEAP32[i81 >> 2] | 0) + (i2 + 4) >> 0] = i76;
 if ((i72 | 0) > 0) {
  i3 = 0;
  while (1) {
   HEAP8[(HEAP32[i81 >> 2] | 0) + i1 >> 0] = HEAP32[(HEAP32[i75 >> 2] | 0) + (i3 * 40 | 0) >> 2];
   i2 = i1 + 2 | 0;
   HEAP8[(HEAP32[i81 >> 2] | 0) + (i1 + 1) >> 0] = HEAP32[i77 + (i3 << 2) >> 2] << 4 | HEAP32[i74 + (i3 << 2) >> 2];
   i3 = i3 + 1 | 0;
   if ((i3 | 0) >= (i76 | 0)) {
    i1 = i2;
    break;
   } else i1 = i2;
  }
 }
 HEAP8[(HEAP32[i81 >> 2] | 0) + i1 >> 0] = 0;
 HEAP8[(HEAP32[i81 >> 2] | 0) + (i1 + 1) >> 0] = 63;
 i5 = i1 + 3 | 0;
 HEAP8[(HEAP32[i81 >> 2] | 0) + (i1 + 2) >> 0] = 0;
 i77 = HEAP32[i81 >> 2] | 0;
 i2 = i77;
 if ((i5 | 0) != ((HEAP32[i62 >> 2] | 0) - i77 | 0)) ___assert_fail(13853, 10072, 451, 13872);
 L143 : do if (i5 >>> 0 > 1073741824) {
  i4 = 0;
  i1 = i2;
  while (1) {
   i4 = i4 + 1073741824 | 0;
   if ((FUNCTION_TABLE_iiii[i79 & 7](i80, i1, 1073741824) | 0) != 1073741824) {
    i3 = 0;
    break L143;
   }
   i1 = i5 - i4 | 0;
   i3 = i2 + i4 | 0;
   if (i1 >>> 0 <= 1073741824) {
    i2 = i3;
    i82 = 90;
    break;
   } else i1 = i3;
  }
 } else {
  i1 = i5;
  i82 = 90;
 } while (0);
 if ((i82 | 0) == 90) if (!i1) i3 = 1; else i3 = (FUNCTION_TABLE_iiii[i79 & 7](i80, i2, i1) | 0) == (i1 | 0);
 i1 = HEAP32[i81 >> 2] | 0;
 if (i1 | 0) {
  if ((HEAP32[i62 >> 2] | 0) != (i1 | 0)) HEAP32[i62 >> 2] = i1;
  __ZdlPv(i1);
 }
 i1 = HEAP32[i83 >> 2] | 0;
 if (i1 | 0) {
  if ((HEAP32[i78 >> 2] | 0) != (i1 | 0)) HEAP32[i78 >> 2] = i1;
  __ZdlPv(i1);
 }
 i1 = HEAP32[i84 >> 2] | 0;
 if (!i1) {
  STACKTOP = i85;
  return i3 | 0;
 }
 i2 = HEAP32[i73 >> 2] | 0;
 if ((i2 | 0) != (i1 | 0)) HEAP32[i73 >> 2] = i2 + (~(((i2 + -1028 - i1 | 0) >>> 0) / 1028 | 0) * 1028 | 0);
 __ZdlPv(i1);
 STACKTOP = i85;
 return i3 | 0;
}

function __ZN7guetzli21ButteraugliComparatorC2EiiRKNSt3__26vectorIhNS1_9allocatorIhEEEEfPNS_12ProcessStatsE(i36, i15, i16, i12, f6, i2) {
 i36 = i36 | 0;
 i15 = i15 | 0;
 i16 = i16 | 0;
 i12 = i12 | 0;
 f6 = Math_fround(f6);
 i2 = i2 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i13 = 0, i14 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i44 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i35 = i44 + 8 | 0;
 i17 = i44;
 i43 = i44 + 40 | 0;
 i42 = i44 + 28 | 0;
 i20 = i44 + 16 | 0;
 HEAP32[i36 >> 2] = 1840;
 i41 = i36 + 4 | 0;
 HEAP32[i41 >> 2] = i15;
 i40 = i36 + 8 | 0;
 HEAP32[i40 >> 2] = i16;
 HEAPF32[i36 + 12 >> 2] = f6;
 i37 = i36 + 16 | 0;
 i38 = i36 + 20 | 0;
 i39 = i36 + 28 | 0;
 i33 = i36 + 40 | 0;
 i1 = i36 + 52 | 0;
 i3 = i37;
 i4 = i3 + 36 | 0;
 do {
  HEAP32[i3 >> 2] = 0;
  i3 = i3 + 4 | 0;
 } while ((i3 | 0) < (i4 | 0));
 HEAP32[i1 >> 2] = i15;
 HEAP32[i36 + 56 >> 2] = i16;
 HEAP32[i36 + 60 >> 2] = Math_imul(i16, i15) | 0;
 HEAP32[i36 + 64 >> 2] = 3;
 HEAP32[i36 + 68 >> 2] = ((i15 + 2 | 0) >>> 0) / 3 | 0;
 HEAP32[i36 + 72 >> 2] = ((i16 + 2 | 0) >>> 0) / 3 | 0;
 HEAPF32[i36 + 76 >> 2] = Math_fround(0.0);
 HEAPF32[i43 >> 2] = Math_fround(i16 | 0);
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2EjRKf(i36 + 80 | 0, i15, i43);
 HEAP32[i36 + 92 >> 2] = i2;
 i14 = __ZN7guetzli18Srgb8ToLinearTableEv() | 0;
 HEAP32[i43 >> 2] = i15;
 HEAP32[i42 >> 2] = i16;
 HEAP32[i20 >> 2] = 0;
 i18 = i20 + 4 | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 __ZNSt3__26vectorIN11butteraugli5ImageIfEENS_9allocatorIS3_EEE7reserveEj(i20, 3);
 i19 = i20 + 8 | 0;
 i2 = HEAP32[i18 >> 2] | 0;
 i1 = HEAP32[i19 >> 2] | 0;
 if (i2 >>> 0 < i1 >>> 0) {
  HEAP32[i2 >> 2] = i15;
  HEAP32[i2 + 4 >> 2] = i16;
  i3 = (i15 << 2) + 95 | 0;
  i4 = i3 & -64;
  i4 = (i3 & 1984 | 0) == 0 ? i4 + 64 | 0 : i4;
  HEAP32[i2 + 8 >> 2] = i4;
  i3 = i2 + 12 | 0;
  i4 = _malloc((Math_imul(i4, i16) | 0) + 64 | 0) | 0;
  do if (i4) {
   i5 = i4;
   if (!(i5 & 3)) {
    i7 = i4 + 64 + (0 - (i5 & 63)) | 0;
    i32 = i7 + -4 | 0;
    HEAP8[i32 >> 0] = i4;
    HEAP8[i32 + 1 >> 0] = i4 >> 8;
    HEAP8[i32 + 2 >> 0] = i4 >> 16;
    HEAP8[i32 + 3 >> 0] = i4 >> 24;
    break;
   } else ___assert_fail(10300, 10333, 59, 10363);
  } else i7 = 0; while (0);
  HEAP32[i3 >> 2] = i7;
  HEAP32[i2 + 16 >> 2] = 10;
  i5 = i2 + 20 | 0;
  HEAP32[i18 >> 2] = i5;
 } else {
  __ZNSt3__26vectorIN11butteraugli5ImageIfEENS_9allocatorIS3_EEE24__emplace_back_slow_pathIJRKjS9_EEEvDpOT_(i20, i43, i42);
  i5 = HEAP32[i18 >> 2] | 0;
  i1 = HEAP32[i19 >> 2] | 0;
 }
 if (i5 >>> 0 < i1 >>> 0) {
  i2 = HEAP32[i43 >> 2] | 0;
  i3 = HEAP32[i42 >> 2] | 0;
  HEAP32[i5 >> 2] = i2;
  HEAP32[i5 + 4 >> 2] = i3;
  i2 = (i2 << 2) + 95 | 0;
  i32 = i2 & -64;
  i32 = (i2 & 1984 | 0) == 0 ? i32 + 64 | 0 : i32;
  HEAP32[i5 + 8 >> 2] = i32;
  i2 = i5 + 12 | 0;
  i3 = _malloc((Math_imul(i32, i3) | 0) + 64 | 0) | 0;
  do if (i3) {
   i4 = i3;
   if (!(i4 & 3)) {
    i8 = i3 + 64 + (0 - (i4 & 63)) | 0;
    i32 = i8 + -4 | 0;
    HEAP8[i32 >> 0] = i3;
    HEAP8[i32 + 1 >> 0] = i3 >> 8;
    HEAP8[i32 + 2 >> 0] = i3 >> 16;
    HEAP8[i32 + 3 >> 0] = i3 >> 24;
    break;
   } else ___assert_fail(10300, 10333, 59, 10363);
  } else i8 = 0; while (0);
  HEAP32[i2 >> 2] = i8;
  HEAP32[i5 + 16 >> 2] = 10;
  i4 = i5 + 20 | 0;
  HEAP32[i18 >> 2] = i4;
 } else {
  __ZNSt3__26vectorIN11butteraugli5ImageIfEENS_9allocatorIS3_EEE24__emplace_back_slow_pathIJRKjS9_EEEvDpOT_(i20, i43, i42);
  i4 = HEAP32[i18 >> 2] | 0;
  i1 = HEAP32[i19 >> 2] | 0;
 }
 if (i4 >>> 0 < i1 >>> 0) {
  i1 = HEAP32[i43 >> 2] | 0;
  i2 = HEAP32[i42 >> 2] | 0;
  HEAP32[i4 >> 2] = i1;
  HEAP32[i4 + 4 >> 2] = i2;
  i1 = (i1 << 2) + 95 | 0;
  i32 = i1 & -64;
  i32 = (i1 & 1984 | 0) == 0 ? i32 + 64 | 0 : i32;
  HEAP32[i4 + 8 >> 2] = i32;
  i1 = i4 + 12 | 0;
  i2 = _malloc((Math_imul(i32, i2) | 0) + 64 | 0) | 0;
  do if (i2) {
   i3 = i2;
   if (!(i3 & 3)) {
    i9 = i2 + 64 + (0 - (i3 & 63)) | 0;
    i32 = i9 + -4 | 0;
    HEAP8[i32 >> 0] = i2;
    HEAP8[i32 + 1 >> 0] = i2 >> 8;
    HEAP8[i32 + 2 >> 0] = i2 >> 16;
    HEAP8[i32 + 3 >> 0] = i2 >> 24;
    break;
   } else ___assert_fail(10300, 10333, 59, 10363);
  } else i9 = 0; while (0);
  HEAP32[i1 >> 2] = i9;
  HEAP32[i4 + 16 >> 2] = 10;
  HEAP32[i18 >> 2] = i4 + 20;
 } else __ZNSt3__26vectorIN11butteraugli5ImageIfEENS_9allocatorIS3_EEE24__emplace_back_slow_pathIJRKjS9_EEEvDpOT_(i20, i43, i42);
 i11 = i15 * 3 | 0;
 i10 = (i15 | 0) == 0;
 L31 : do if (i16 | 0) {
  L33 : do if (i10) {
   i3 = HEAP32[i20 >> 2] | 0;
   i2 = HEAP32[i3 + 4 >> 2] | 0;
   i1 = 0;
   while (1) {
    if (i2 >>> 0 <= i1 >>> 0) break;
    i1 = i1 + 1 | 0;
    if (i1 >>> 0 >= i16 >>> 0) {
     i13 = i3;
     break L33;
    }
   }
   HEAP32[i17 >> 2] = i1;
   i32 = i17 + 4 | 0;
   HEAP32[i32 >> 2] = i2;
   _printf(14766, i17) | 0;
   _abort();
  } else {
   i4 = HEAP32[i12 >> 2] | 0;
   i1 = 0;
   while (1) {
    i5 = i4 + (Math_imul(i1, i11) | 0) | 0;
    i7 = HEAP32[i20 >> 2] | 0;
    i2 = HEAP32[i7 + 4 >> 2] | 0;
    if (i2 >>> 0 <= i1 >>> 0) break;
    i3 = (HEAP32[i7 + 12 >> 2] | 0) + (Math_imul(HEAP32[i7 + 8 >> 2] | 0, i1) | 0) | 0;
    i2 = 0;
    do {
     HEAPF32[i3 + (i2 << 2) >> 2] = Math_fround(+HEAPF64[i14 + ((HEAPU8[i5 + (i2 * 3 | 0) >> 0] | 0) << 3) >> 3]);
     i2 = i2 + 1 | 0;
    } while ((i2 | 0) != (i15 | 0));
    i1 = i1 + 1 | 0;
    if (i1 >>> 0 >= i16 >>> 0) {
     i13 = i7;
     break L33;
    }
   }
   HEAP32[i17 >> 2] = i1;
   i32 = i17 + 4 | 0;
   HEAP32[i32 >> 2] = i2;
   _printf(14766, i17) | 0;
   _abort();
  } while (0);
  L48 : do if (i10) {
   i2 = HEAP32[i13 + 24 >> 2] | 0;
   i1 = 0;
   while (1) {
    if (i2 >>> 0 <= i1 >>> 0) break;
    i1 = i1 + 1 | 0;
    if (i1 >>> 0 >= i16 >>> 0) break L48;
   }
   HEAP32[i17 >> 2] = i1;
   i32 = i17 + 4 | 0;
   HEAP32[i32 >> 2] = i2;
   _printf(14766, i17) | 0;
   _abort();
  } else {
   i4 = HEAP32[i12 >> 2] | 0;
   i2 = HEAP32[i13 + 24 >> 2] | 0;
   i5 = i13 + 32 | 0;
   i7 = i13 + 28 | 0;
   i1 = 0;
   while (1) {
    i8 = i4 + (Math_imul(i1, i11) | 0) | 0;
    if (i2 >>> 0 <= i1 >>> 0) break;
    i9 = (HEAP32[i5 >> 2] | 0) + (Math_imul(HEAP32[i7 >> 2] | 0, i1) | 0) | 0;
    i3 = 0;
    do {
     HEAPF32[i9 + (i3 << 2) >> 2] = Math_fround(+HEAPF64[i14 + ((HEAPU8[i8 + ((i3 * 3 | 0) + 1) >> 0] | 0) << 3) >> 3]);
     i3 = i3 + 1 | 0;
    } while ((i3 | 0) != (i15 | 0));
    i1 = i1 + 1 | 0;
    if (i1 >>> 0 >= i16 >>> 0) break L48;
   }
   HEAP32[i17 >> 2] = i1;
   i32 = i17 + 4 | 0;
   HEAP32[i32 >> 2] = i2;
   _printf(14766, i17) | 0;
   _abort();
  } while (0);
  if (i10) {
   i2 = HEAP32[i13 + 44 >> 2] | 0;
   i1 = 0;
   while (1) {
    if (i2 >>> 0 <= i1 >>> 0) break;
    i1 = i1 + 1 | 0;
    if (i1 >>> 0 >= i16 >>> 0) break L31;
   }
   HEAP32[i17 >> 2] = i1;
   i32 = i17 + 4 | 0;
   HEAP32[i32 >> 2] = i2;
   _printf(14766, i17) | 0;
   _abort();
  }
  i8 = HEAP32[i12 >> 2] | 0;
  i2 = HEAP32[i13 + 44 >> 2] | 0;
  i9 = i13 + 52 | 0;
  i4 = i13 + 48 | 0;
  i1 = 0;
  while (1) {
   i5 = i8 + (Math_imul(i1, i11) | 0) | 0;
   if (i2 >>> 0 <= i1 >>> 0) break;
   i7 = (HEAP32[i9 >> 2] | 0) + (Math_imul(HEAP32[i4 >> 2] | 0, i1) | 0) | 0;
   i3 = 0;
   do {
    HEAPF32[i7 + (i3 << 2) >> 2] = Math_fround(+HEAPF64[i14 + ((HEAPU8[i5 + ((i3 * 3 | 0) + 2) >> 0] | 0) << 3) >> 3]);
    i3 = i3 + 1 | 0;
   } while ((i3 | 0) != (i15 | 0));
   i1 = i1 + 1 | 0;
   if (i1 >>> 0 >= i16 >>> 0) break L31;
  }
  HEAP32[i17 >> 2] = i1;
  i32 = i17 + 4 | 0;
  HEAP32[i32 >> 2] = i2;
  _printf(14766, i17) | 0;
  _abort();
 } while (0);
 i1 = HEAP32[i37 >> 2] | 0;
 if (!i1) i1 = i36 + 24 | 0; else {
  i2 = HEAP32[i38 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    HEAP32[i38 >> 2] = i2 + -20;
    i32 = i2 + -8 | 0;
    i3 = HEAP32[i32 >> 2] | 0;
    HEAP32[i32 >> 2] = 0;
    if (i3 | 0) FUNCTION_TABLE_vi[HEAP32[i2 + -4 >> 2] & 15](i3);
    i2 = HEAP32[i38 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i37 >> 2] | 0;
  }
  __ZdlPv(i1);
  i1 = i36 + 24 | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i38 >> 2] = 0;
  HEAP32[i37 >> 2] = 0;
 }
 HEAP32[i37 >> 2] = HEAP32[i20 >> 2];
 HEAP32[i38 >> 2] = HEAP32[i18 >> 2];
 HEAP32[i1 >> 2] = HEAP32[i19 >> 2];
 i1 = HEAP32[i41 >> 2] | 0;
 i31 = (i1 + 7 | 0) / 8 | 0;
 i30 = HEAP32[i40 >> 2] | 0;
 i32 = (i30 + 7 | 0) / 8 | 0;
 __ZNSt3__26vectorINS0_INS0_IfNS_9allocatorIfEEEENS1_IS3_EEEENS1_IS5_EEE6resizeEj(i33, Math_imul(i32, i31) | 0);
 L90 : do if ((i30 | 0) > 0) {
  i27 = (i1 | 0) > 0;
  i28 = i43 + 4 | 0;
  i29 = i43 + 8 | 0;
  i30 = i43 + 8 | 0;
  i26 = 0;
  i1 = 0;
  L92 : while (1) {
   if (i27) {
    i25 = i26 << 3;
    i24 = 0;
    i23 = i1;
    while (1) {
     i7 = HEAP32[i33 >> 2] | 0;
     i1 = i7 + (i23 * 12 | 0) | 0;
     HEAP32[i43 >> 2] = 0;
     HEAP32[i28 >> 2] = 0;
     HEAP32[i29 >> 2] = 0;
     i5 = __Znwj(256) | 0;
     HEAP32[i43 >> 2] = i5;
     i2 = i5 + 256 | 0;
     HEAP32[i30 >> 2] = i2;
     _memset(i5 | 0, 0, 256) | 0;
     HEAP32[i28 >> 2] = i2;
     i7 = i7 + (i23 * 12 | 0) + 4 | 0;
     i2 = HEAP32[i7 >> 2] | 0;
     i5 = HEAP32[i1 >> 2] | 0;
     i3 = i2 - i5 | 0;
     i4 = (i3 | 0) / 12 | 0;
     if (i4 >>> 0 >= 3) {
      if ((i3 | 0) != 36 ? (i34 = i5 + 36 | 0, (i2 | 0) != (i34 | 0)) : 0) while (1) {
       i1 = i2 + -12 | 0;
       HEAP32[i7 >> 2] = i1;
       i3 = HEAP32[i1 >> 2] | 0;
       if (i3) {
        i1 = i2 + -8 | 0;
        i2 = HEAP32[i1 >> 2] | 0;
        if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
        __ZdlPv(i3);
        i1 = HEAP32[i7 >> 2] | 0;
       }
       if ((i1 | 0) == (i34 | 0)) break; else i2 = i1;
      }
     } else __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEE8__appendEjRKS3_(i1, 3 - i4 | 0, i43);
     i1 = HEAP32[i43 >> 2] | 0;
     if (i1 | 0) {
      i2 = HEAP32[i28 >> 2] | 0;
      if ((i2 | 0) != (i1 | 0)) HEAP32[i28 >> 2] = i2 + (~((i2 + -4 - i1 | 0) >>> 2) << 2);
      __ZdlPv(i1);
     }
     i10 = i24 << 3;
     i11 = (HEAP32[i41 >> 2] | 0) + -1 | 0;
     i12 = (HEAP32[i40 >> 2] | 0) + -1 | 0;
     i20 = HEAP32[i37 >> 2] | 0;
     i1 = HEAP32[i20 + 4 >> 2] | 0;
     i13 = i20 + 12 | 0;
     i14 = i20 + 8 | 0;
     i15 = i20 + 24 | 0;
     i16 = i20 + 32 | 0;
     i17 = i20 + 28 | 0;
     i18 = i20 + 44 | 0;
     i19 = i20 + 52 | 0;
     i20 = i20 + 48 | 0;
     i2 = 0;
     i9 = 0;
     do {
      i22 = i9 + i25 | 0;
      i22 = (i12 | 0) < (i22 | 0) ? i12 : i22;
      i21 = i1 >>> 0 > i22 >>> 0;
      i8 = 0;
      do {
       i4 = i8 + i10 | 0;
       i4 = (i11 | 0) < (i4 | 0) ? i11 : i4;
       if (!i21) {
        i2 = 81;
        break L92;
       }
       i3 = HEAP32[(HEAP32[i13 >> 2] | 0) + (Math_imul(HEAP32[i14 >> 2] | 0, i22) | 0) + (i4 << 2) >> 2] | 0;
       i5 = HEAP32[i33 >> 2] | 0;
       i7 = HEAP32[i5 + (i23 * 12 | 0) >> 2] | 0;
       HEAP32[(HEAP32[i7 >> 2] | 0) + (i2 << 2) >> 2] = i3;
       i3 = HEAP32[i15 >> 2] | 0;
       if (i3 >>> 0 <= i22 >>> 0) {
        i1 = i3;
        i2 = 81;
        break L92;
       }
       i3 = HEAP32[(HEAP32[i16 >> 2] | 0) + (Math_imul(HEAP32[i17 >> 2] | 0, i22) | 0) + (i4 << 2) >> 2] | 0;
       HEAP32[(HEAP32[i7 + 12 >> 2] | 0) + (i2 << 2) >> 2] = i3;
       i3 = HEAP32[i18 >> 2] | 0;
       if (i3 >>> 0 <= i22 >>> 0) {
        i1 = i3;
        i2 = 81;
        break L92;
       }
       i4 = HEAP32[(HEAP32[i19 >> 2] | 0) + (Math_imul(HEAP32[i20 >> 2] | 0, i22) | 0) + (i4 << 2) >> 2] | 0;
       HEAP32[(HEAP32[i7 + 24 >> 2] | 0) + (i2 << 2) >> 2] = i4;
       i8 = i8 + 1 | 0;
       i2 = i2 + 1 | 0;
      } while ((i8 | 0) < 8);
      i9 = i9 + 1 | 0;
     } while ((i9 | 0) < 8);
     __ZN11butteraugli18OpsinDynamicsImageEjjRNSt3__26vectorINS1_IfNS0_9allocatorIfEEEENS2_IS4_EEEE(8, 8, i5 + (i23 * 12 | 0) | 0);
     i24 = i24 + 1 | 0;
     i1 = i23 + 1 | 0;
     if ((i24 | 0) >= (i31 | 0)) break; else i23 = i1;
    }
   }
   i26 = i26 + 1 | 0;
   if ((i26 | 0) >= (i32 | 0)) break L90;
  }
  if ((i2 | 0) == 81) {
   HEAP32[i35 >> 2] = i22;
   HEAP32[i35 + 4 >> 2] = i1;
   _printf(14766, i35) | 0;
   _abort();
  }
 } while (0);
 __ZN11butteraugliL16PackedFromPlanesIfEENSt3__26vectorINS2_IT_NS1_9allocatorIS3_EEEENS4_IS6_EEEERKNS2_INS_5ImageIS3_EENS4_ISA_EEEE(i43, i37);
 __ZN11butteraugli18OpsinDynamicsImageEjjRNSt3__26vectorINS1_IfNS0_9allocatorIfEEEENS2_IS4_EEEE(HEAP32[i41 >> 2] | 0, HEAP32[i40 >> 2] | 0, i43);
 __ZN11butteraugliL16PlanesFromPackedIfEENSt3__26vectorINS_5ImageIT_EENS1_9allocatorIS5_EEEEjjRKNS2_INS2_IS4_NS6_IS4_EEEENS6_ISA_EEEE(i42, HEAP32[i41 >> 2] | 0, HEAP32[i40 >> 2] | 0, i43);
 i1 = HEAP32[i37 >> 2] | 0;
 if (!i1) i1 = i36 + 24 | 0; else {
  i2 = HEAP32[i38 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    HEAP32[i38 >> 2] = i2 + -20;
    i35 = i2 + -8 | 0;
    i3 = HEAP32[i35 >> 2] | 0;
    HEAP32[i35 >> 2] = 0;
    if (i3 | 0) FUNCTION_TABLE_vi[HEAP32[i2 + -4 >> 2] & 15](i3);
    i2 = HEAP32[i38 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i37 >> 2] | 0;
  }
  __ZdlPv(i1);
  i1 = i36 + 24 | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i38 >> 2] = 0;
  HEAP32[i37 >> 2] = 0;
 }
 HEAP32[i37 >> 2] = HEAP32[i42 >> 2];
 HEAP32[i38 >> 2] = HEAP32[i42 + 4 >> 2];
 HEAP32[i1 >> 2] = HEAP32[i42 + 8 >> 2];
 HEAP32[i42 >> 2] = 0;
 i5 = i42 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i42 + 8 >> 2] = 0;
 i3 = __Znwj(36) | 0;
 HEAP32[i42 >> 2] = i3;
 i1 = i3 + 36 | 0;
 HEAP32[i42 + 8 >> 2] = i1;
 i4 = i3 + 36 | 0;
 do {
  HEAP32[i3 >> 2] = 0;
  i3 = i3 + 4 | 0;
 } while ((i3 | 0) < (i4 | 0));
 HEAP32[i5 >> 2] = i1;
 __ZN11butteraugli4MaskERKNSt3__26vectorINS1_IfNS0_9allocatorIfEEEENS2_IS4_EEEES8_jjPS6_S9_(i43, i43, HEAP32[i41 >> 2] | 0, HEAP32[i40 >> 2] | 0, i39, i42);
 i1 = HEAP32[i42 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -12 | 0;
    HEAP32[i5 >> 2] = i3;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) i2 = i3; else {
     i2 = i2 + -8 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
     i2 = HEAP32[i5 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i42 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i1 = HEAP32[i43 >> 2] | 0;
 if (!i1) {
  STACKTOP = i44;
  return;
 }
 i5 = i43 + 4 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) != (i1 | 0)) {
  do {
   i3 = i2 + -12 | 0;
   HEAP32[i5 >> 2] = i3;
   i4 = HEAP32[i3 >> 2] | 0;
   if (!i4) i2 = i3; else {
    i2 = i2 + -8 | 0;
    i3 = HEAP32[i2 >> 2] | 0;
    if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
    __ZdlPv(i4);
    i2 = HEAP32[i5 >> 2] | 0;
   }
  } while ((i2 | 0) != (i1 | 0));
  i1 = HEAP32[i43 >> 2] | 0;
 }
 __ZdlPv(i1);
 STACKTOP = i44;
 return;
}

function __ZN7guetzli11RGBToYUV420ERKNSt3__26vectorIhNS0_9allocatorIhEEEEii(i30, i1, i31, i32) {
 i30 = i30 | 0;
 i1 = i1 | 0;
 i31 = i31 | 0;
 i32 = i32 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, f39 = f0, d40 = 0.0, d41 = 0.0, d42 = 0.0, f43 = f0, i44 = 0;
 i38 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i34 = i38 + 84 | 0;
 i26 = i38 + 72 | 0;
 i27 = i38 + 60 | 0;
 i28 = i38 + 48 | 0;
 i37 = i38 + 36 | 0;
 i36 = i38 + 24 | 0;
 i35 = i38 + 12 | 0;
 i25 = i38;
 i2 = i1 + 4 | 0;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i37, (HEAP32[i2 >> 2] | 0) - (HEAP32[i1 >> 2] | 0) | 0);
 i2 = HEAP32[i2 >> 2] | 0;
 i1 = HEAP32[i1 >> 2] | 0;
 i4 = i1;
 if ((i2 | 0) != (i1 | 0)) {
  i3 = HEAP32[i37 >> 2] | 0;
  i2 = i2 - i1 | 0;
  i1 = 0;
  do {
   HEAPF32[i3 + (i1 << 2) >> 2] = Math_fround(HEAPU8[i4 + i1 >> 0] | 0);
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 < i2 >>> 0);
 }
 __ZN7guetzli12_GLOBAL__N_120LinearlyAveragedLumaERKNSt3__26vectorIfNS1_9allocatorIfEEEE(i36, i37);
 __ZN7guetzli12_GLOBAL__N_121LinearlyDownsample2x2ERKNSt3__26vectorIfNS1_9allocatorIfEEEEii(i34, i37, i31, i32);
 __ZN7guetzli12_GLOBAL__N_18RGBToYUVERKNSt3__26vectorIfNS1_9allocatorIfEEEE(i35, i34);
 i1 = HEAP32[i34 >> 2] | 0;
 if (i1 | 0) {
  i2 = i34 + 4 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != (i1 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i1 | 0) >>> 2) << 2);
  __ZdlPv(i1);
 }
 __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEEC2ERKS5_(i30, i35);
 __ZN7guetzli12_GLOBAL__N_111Upsample2x2ERKNSt3__26vectorIfNS1_9allocatorIfEEEEii(i34, HEAP32[i30 >> 2] | 0, i31, i32);
 i4 = HEAP32[i30 >> 2] | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i3 = i4 + 4 | 0;
 if (!i1) i1 = i4 + 8 | 0; else {
  i2 = HEAP32[i3 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) HEAP32[i3 >> 2] = i2 + (~((i2 + -4 - i1 | 0) >>> 2) << 2);
  __ZdlPv(i1);
  i1 = i4 + 8 | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i4 >> 2] = 0;
 }
 HEAP32[i4 >> 2] = HEAP32[i34 >> 2];
 HEAP32[i3 >> 2] = HEAP32[i34 + 4 >> 2];
 HEAP32[i1 >> 2] = HEAP32[i34 + 8 >> 2];
 i12 = i34 + 4 | 0;
 i13 = i34 + 8 | 0;
 i14 = i34 + 8 | 0;
 i15 = i28 + 4 | 0;
 i16 = i28 + 8 | 0;
 i17 = i28 + 4 | 0;
 i18 = i28 + 8 | 0;
 i19 = i25 + 4 | 0;
 i20 = i34 + 4 | 0;
 i33 = i36 + 4 | 0;
 i21 = i26 + 4 | 0;
 i22 = i27 + 4 | 0;
 i23 = i26 + 4 | 0;
 i24 = i27 + 4 | 0;
 i11 = 0;
 while (1) {
  HEAP32[i34 >> 2] = 0;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i13 >> 2] = 0;
  __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEE21__push_back_slow_pathIRKS3_EEvOT_(i34, HEAP32[i30 >> 2] | 0);
  __ZN7guetzli12_GLOBAL__N_111Upsample2x2ERKNSt3__26vectorIfNS1_9allocatorIfEEEEii(i26, (HEAP32[i30 >> 2] | 0) + 12 | 0, i31, i32);
  __ZN7guetzli12_GLOBAL__N_111Upsample2x2ERKNSt3__26vectorIfNS1_9allocatorIfEEEEii(i27, (HEAP32[i30 >> 2] | 0) + 24 | 0, i31, i32);
  __ZN7guetzli12_GLOBAL__N_14BlurERKNSt3__26vectorIfNS1_9allocatorIfEEEEii(i28, i26, i31, i32);
  i1 = HEAP32[i12 >> 2] | 0;
  if (i1 >>> 0 >= (HEAP32[i14 >> 2] | 0) >>> 0) {
   __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEE21__push_back_slow_pathIS3_EEvOT_(i34, i28);
   i1 = HEAP32[i28 >> 2] | 0;
   if (i1 | 0) {
    i2 = HEAP32[i15 >> 2] | 0;
    if ((i2 | 0) != (i1 | 0)) HEAP32[i15 >> 2] = i2 + (~((i2 + -4 - i1 | 0) >>> 2) << 2);
    __ZdlPv(i1);
   }
  } else {
   HEAP32[i1 >> 2] = 0;
   i10 = i1 + 4 | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i1 + 8 >> 2] = 0;
   HEAP32[i1 >> 2] = HEAP32[i28 >> 2];
   HEAP32[i10 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i1 + 8 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i16 >> 2] = 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i28 >> 2] = 0;
   HEAP32[i12 >> 2] = i1 + 12;
  }
  __ZN7guetzli12_GLOBAL__N_14BlurERKNSt3__26vectorIfNS1_9allocatorIfEEEEii(i28, i27, i31, i32);
  i1 = HEAP32[i12 >> 2] | 0;
  if (i1 >>> 0 >= (HEAP32[i14 >> 2] | 0) >>> 0) {
   __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEE21__push_back_slow_pathIS3_EEvOT_(i34, i28);
   i1 = HEAP32[i28 >> 2] | 0;
   if (i1 | 0) {
    i2 = HEAP32[i17 >> 2] | 0;
    if ((i2 | 0) != (i1 | 0)) HEAP32[i17 >> 2] = i2 + (~((i2 + -4 - i1 | 0) >>> 2) << 2);
    __ZdlPv(i1);
   }
  } else {
   HEAP32[i1 >> 2] = 0;
   i10 = i1 + 4 | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i1 + 8 >> 2] = 0;
   HEAP32[i1 >> 2] = HEAP32[i28 >> 2];
   HEAP32[i10 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i1 + 8 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i18 >> 2] = 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i28 >> 2] = 0;
   HEAP32[i12 >> 2] = i1 + 12;
  }
  i1 = HEAP32[i34 >> 2] | 0;
  __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i25, ((HEAP32[i1 + 4 >> 2] | 0) - (HEAP32[i1 >> 2] | 0) >> 2) * 3 | 0);
  i1 = HEAP32[i19 >> 2] | 0;
  i2 = HEAP32[i25 >> 2] | 0;
  i4 = i2;
  if ((i1 | 0) != (i2 | 0)) {
   i7 = HEAP32[i34 >> 2] | 0;
   i5 = HEAP32[i7 >> 2] | 0;
   i6 = HEAP32[i7 + 12 >> 2] | 0;
   i7 = HEAP32[i7 + 24 >> 2] | 0;
   i3 = i1 - i2 >> 2;
   i1 = 0;
   i2 = 0;
   while (1) {
    f43 = Math_fround(HEAPF32[i5 + (i2 << 2) >> 2]);
    f39 = Math_fround(HEAPF32[i6 + (i2 << 2) >> 2]);
    d41 = +f43;
    d42 = +Math_fround(HEAPF32[i7 + (i2 << 2) >> 2]) + -128.0;
    f43 = Math_fround(d41 + d42 * 1.402);
    i10 = f43 < Math_fround(255.0);
    f43 = i10 ? f43 : Math_fround(255.0);
    i10 = f43 > Math_fround(0.0);
    HEAPF32[i4 + (i1 << 2) >> 2] = i10 ? f43 : Math_fround(0.0);
    d40 = +f39 + -128.0;
    f39 = Math_fround(d41 - d40 * .344136 - d42 * .714136);
    i10 = f39 < Math_fround(255.0);
    f39 = i10 ? f39 : Math_fround(255.0);
    i10 = f39 > Math_fround(0.0);
    HEAPF32[i4 + (i1 + 1 << 2) >> 2] = i10 ? f39 : Math_fround(0.0);
    f39 = Math_fround(d41 + d40 * 1.772);
    i10 = f39 < Math_fround(255.0);
    f39 = i10 ? f39 : Math_fround(255.0);
    i10 = f39 > Math_fround(0.0);
    HEAPF32[i4 + (i1 + 2 << 2) >> 2] = i10 ? f39 : Math_fround(0.0);
    i1 = i1 + 3 | 0;
    if (i1 >>> 0 >= i3 >>> 0) break; else i2 = i2 + 1 | 0;
   }
  }
  i1 = HEAP32[i27 >> 2] | 0;
  if (i1 | 0) {
   i2 = HEAP32[i24 >> 2] | 0;
   if ((i2 | 0) != (i1 | 0)) HEAP32[i24 >> 2] = i2 + (~((i2 + -4 - i1 | 0) >>> 2) << 2);
   __ZdlPv(i1);
  }
  i1 = HEAP32[i26 >> 2] | 0;
  if (i1 | 0) {
   i2 = HEAP32[i23 >> 2] | 0;
   if ((i2 | 0) != (i1 | 0)) HEAP32[i23 >> 2] = i2 + (~((i2 + -4 - i1 | 0) >>> 2) << 2);
   __ZdlPv(i1);
  }
  i1 = HEAP32[i34 >> 2] | 0;
  if (i1 | 0) {
   i2 = HEAP32[i12 >> 2] | 0;
   if ((i2 | 0) != (i1 | 0)) {
    do {
     i3 = i2 + -12 | 0;
     HEAP32[i12 >> 2] = i3;
     i4 = HEAP32[i3 >> 2] | 0;
     if (!i4) i2 = i3; else {
      i2 = i2 + -8 | 0;
      i3 = HEAP32[i2 >> 2] | 0;
      if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
      __ZdlPv(i4);
      i2 = HEAP32[i12 >> 2] | 0;
     }
    } while ((i2 | 0) != (i1 | 0));
    i1 = HEAP32[i34 >> 2] | 0;
   }
   __ZdlPv(i1);
  }
  __ZN7guetzli12_GLOBAL__N_120LinearlyAveragedLumaERKNSt3__26vectorIfNS1_9allocatorIfEEEE(i34, i25);
  __ZN7guetzli12_GLOBAL__N_121LinearlyDownsample2x2ERKNSt3__26vectorIfNS1_9allocatorIfEEEEii(i27, i25, i31, i32);
  __ZN7guetzli12_GLOBAL__N_18RGBToYUVERKNSt3__26vectorIfNS1_9allocatorIfEEEE(i26, i27);
  i1 = HEAP32[i27 >> 2] | 0;
  if (i1 | 0) {
   i2 = HEAP32[i22 >> 2] | 0;
   if ((i2 | 0) != (i1 | 0)) HEAP32[i22 >> 2] = i2 + (~((i2 + -4 - i1 | 0) >>> 2) << 2);
   __ZdlPv(i1);
  }
  i1 = HEAP32[i30 >> 2] | 0;
  i10 = HEAP32[i34 >> 2] | 0;
  i4 = (HEAP32[i20 >> 2] | 0) - i10 >> 2;
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  i3 = HEAP32[i1 >> 2] | 0;
  i5 = i3;
  if ((i4 | 0) != (i2 - i3 >> 2 | 0)) {
   i29 = 52;
   break;
  }
  i9 = HEAP32[i36 >> 2] | 0;
  i6 = i9;
  if (((HEAP32[i33 >> 2] | 0) - i9 >> 2 | 0) != (i4 | 0)) {
   i29 = 55;
   break;
  }
  if ((i2 | 0) == (i3 | 0)) i8 = i1; else {
   i1 = 0;
   do {
    i9 = i5 + (i1 << 2) | 0;
    f39 = Math_fround(HEAPF32[i9 >> 2]);
    f43 = Math_fround(HEAPF32[i10 + (i1 << 2) >> 2]);
    f43 = Math_fround(f39 - Math_fround(f43 - Math_fround(HEAPF32[i6 + (i1 << 2) >> 2])));
    i8 = f43 < Math_fround(255.0);
    f43 = i8 ? f43 : Math_fround(255.0);
    i8 = f43 > Math_fround(0.0);
    HEAPF32[i9 >> 2] = i8 ? f43 : Math_fround(0.0);
    i1 = i1 + 1 | 0;
   } while (i1 >>> 0 < i4 >>> 0);
   i8 = HEAP32[i30 >> 2] | 0;
  }
  i9 = HEAP32[i35 >> 2] | 0;
  i1 = HEAP32[i26 >> 2] | 0;
  i6 = HEAP32[i1 + 12 >> 2] | 0;
  i4 = (HEAP32[i1 + 16 >> 2] | 0) - i6 >> 2;
  i2 = HEAP32[i8 + 16 >> 2] | 0;
  i3 = HEAP32[i8 + 12 >> 2] | 0;
  i5 = i3;
  if ((i4 | 0) != (i2 - i3 >> 2 | 0)) {
   i29 = 59;
   break;
  }
  i44 = HEAP32[i9 + 12 >> 2] | 0;
  i7 = i44;
  if (((HEAP32[i9 + 16 >> 2] | 0) - i44 >> 2 | 0) != (i4 | 0)) {
   i29 = 62;
   break;
  }
  if ((i2 | 0) != (i3 | 0)) {
   i2 = 0;
   do {
    i44 = i5 + (i2 << 2) | 0;
    f39 = Math_fround(HEAPF32[i44 >> 2]);
    f43 = Math_fround(HEAPF32[i6 + (i2 << 2) >> 2]);
    f43 = Math_fround(f39 - Math_fround(f43 - Math_fround(HEAPF32[i7 + (i2 << 2) >> 2])));
    i3 = f43 < Math_fround(255.0);
    f43 = i3 ? f43 : Math_fround(255.0);
    i3 = f43 > Math_fround(0.0);
    HEAPF32[i44 >> 2] = i3 ? f43 : Math_fround(0.0);
    i2 = i2 + 1 | 0;
   } while (i2 >>> 0 < i4 >>> 0);
  }
  i5 = HEAP32[i1 + 24 >> 2] | 0;
  i7 = (HEAP32[i1 + 28 >> 2] | 0) - i5 >> 2;
  i3 = HEAP32[i8 + 28 >> 2] | 0;
  i2 = HEAP32[i8 + 24 >> 2] | 0;
  i4 = i2;
  if ((i7 | 0) != (i3 - i2 >> 2 | 0)) {
   i29 = 65;
   break;
  }
  i44 = HEAP32[i9 + 24 >> 2] | 0;
  i6 = i44;
  if (((HEAP32[i9 + 28 >> 2] | 0) - i44 >> 2 | 0) != (i7 | 0)) {
   i29 = 68;
   break;
  }
  if ((i3 | 0) != (i2 | 0)) {
   i2 = 0;
   do {
    i44 = i4 + (i2 << 2) | 0;
    f39 = Math_fround(HEAPF32[i44 >> 2]);
    f43 = Math_fround(HEAPF32[i5 + (i2 << 2) >> 2]);
    f43 = Math_fround(f39 - Math_fround(f43 - Math_fround(HEAPF32[i6 + (i2 << 2) >> 2])));
    i9 = f43 < Math_fround(255.0);
    f43 = i9 ? f43 : Math_fround(255.0);
    i9 = f43 > Math_fround(0.0);
    HEAPF32[i44 >> 2] = i9 ? f43 : Math_fround(0.0);
    i2 = i2 + 1 | 0;
   } while (i2 >>> 0 < i7 >>> 0);
   if (!i1) i1 = i10; else i29 = 71;
  } else i29 = 71;
  if ((i29 | 0) == 71) {
   i29 = 0;
   i2 = HEAP32[i21 >> 2] | 0;
   if ((i2 | 0) != (i1 | 0)) {
    do {
     i3 = i2 + -12 | 0;
     HEAP32[i21 >> 2] = i3;
     i4 = HEAP32[i3 >> 2] | 0;
     if (!i4) i2 = i3; else {
      i2 = i2 + -8 | 0;
      i3 = HEAP32[i2 >> 2] | 0;
      if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
      __ZdlPv(i4);
      i2 = HEAP32[i21 >> 2] | 0;
     }
    } while ((i2 | 0) != (i1 | 0));
    i1 = HEAP32[i26 >> 2] | 0;
   }
   __ZdlPv(i1);
   i1 = HEAP32[i34 >> 2] | 0;
  }
  if (i1 | 0) {
   i2 = HEAP32[i20 >> 2] | 0;
   if ((i2 | 0) != (i1 | 0)) HEAP32[i20 >> 2] = i2 + (~((i2 + -4 - i1 | 0) >>> 2) << 2);
   __ZdlPv(i1);
  }
  i1 = HEAP32[i25 >> 2] | 0;
  if (i1 | 0) {
   i2 = HEAP32[i19 >> 2] | 0;
   if ((i2 | 0) != (i1 | 0)) HEAP32[i19 >> 2] = i2 + (~((i2 + -4 - i1 | 0) >>> 2) << 2);
   __ZdlPv(i1);
  }
  i11 = i11 + 1 | 0;
  if ((i11 | 0) >= 20) {
   i29 = 14;
   break;
  }
 }
 if ((i29 | 0) == 14) {
  __ZN7guetzli12_GLOBAL__N_111Upsample2x2ERKNSt3__26vectorIfNS1_9allocatorIfEEEEii(i34, (HEAP32[i30 >> 2] | 0) + 12 | 0, i31, i32);
  i2 = HEAP32[i30 >> 2] | 0;
  i5 = i2 + 12 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  i4 = i2 + 16 | 0;
  if (!i3) i1 = i2 + 20 | 0; else {
   i1 = HEAP32[i4 >> 2] | 0;
   if ((i1 | 0) != (i3 | 0)) HEAP32[i4 >> 2] = i1 + (~((i1 + -4 - i3 | 0) >>> 2) << 2);
   __ZdlPv(i3);
   i1 = i2 + 20 | 0;
   HEAP32[i1 >> 2] = 0;
   HEAP32[i4 >> 2] = 0;
   HEAP32[i5 >> 2] = 0;
  }
  HEAP32[i5 >> 2] = HEAP32[i34 >> 2];
  HEAP32[i4 >> 2] = HEAP32[i34 + 4 >> 2];
  HEAP32[i1 >> 2] = HEAP32[i34 + 8 >> 2];
  __ZN7guetzli12_GLOBAL__N_111Upsample2x2ERKNSt3__26vectorIfNS1_9allocatorIfEEEEii(i34, (HEAP32[i30 >> 2] | 0) + 24 | 0, i31, i32);
  i1 = HEAP32[i30 >> 2] | 0;
  i5 = i1 + 24 | 0;
  i2 = HEAP32[i5 >> 2] | 0;
  i4 = i1 + 28 | 0;
  if (!i2) i1 = i1 + 32 | 0; else {
   i3 = HEAP32[i4 >> 2] | 0;
   if ((i3 | 0) != (i2 | 0)) HEAP32[i4 >> 2] = i3 + (~((i3 + -4 - i2 | 0) >>> 2) << 2);
   __ZdlPv(i2);
   i1 = i1 + 32 | 0;
   HEAP32[i1 >> 2] = 0;
   HEAP32[i4 >> 2] = 0;
   HEAP32[i5 >> 2] = 0;
  }
  HEAP32[i5 >> 2] = HEAP32[i34 >> 2];
  HEAP32[i4 >> 2] = HEAP32[i34 + 4 >> 2];
  HEAP32[i1 >> 2] = HEAP32[i34 + 8 >> 2];
  i1 = HEAP32[i35 >> 2] | 0;
  if (i1 | 0) {
   i5 = i35 + 4 | 0;
   i2 = HEAP32[i5 >> 2] | 0;
   if ((i2 | 0) != (i1 | 0)) {
    do {
     i3 = i2 + -12 | 0;
     HEAP32[i5 >> 2] = i3;
     i4 = HEAP32[i3 >> 2] | 0;
     if (!i4) i2 = i3; else {
      i2 = i2 + -8 | 0;
      i3 = HEAP32[i2 >> 2] | 0;
      if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
      __ZdlPv(i4);
      i2 = HEAP32[i5 >> 2] | 0;
     }
    } while ((i2 | 0) != (i1 | 0));
    i1 = HEAP32[i35 >> 2] | 0;
   }
   __ZdlPv(i1);
  }
  i1 = HEAP32[i36 >> 2] | 0;
  if (i1 | 0) {
   i2 = HEAP32[i33 >> 2] | 0;
   if ((i2 | 0) != (i1 | 0)) HEAP32[i33 >> 2] = i2 + (~((i2 + -4 - i1 | 0) >>> 2) << 2);
   __ZdlPv(i1);
  }
  i3 = HEAP32[i37 >> 2] | 0;
  if (!i3) {
   STACKTOP = i38;
   return;
  }
  i1 = i37 + 4 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
  __ZdlPv(i3);
  STACKTOP = i38;
  return;
 } else if ((i29 | 0) == 52) ___assert_fail(11048, 10898, 442, 11086); else if ((i29 | 0) == 55) ___assert_fail(11098, 10898, 443, 11086); else if ((i29 | 0) == 59) ___assert_fail(11048, 10898, 442, 11086); else if ((i29 | 0) == 62) ___assert_fail(11098, 10898, 443, 11086); else if ((i29 | 0) == 65) ___assert_fail(11048, 10898, 442, 11086); else if ((i29 | 0) == 68) ___assert_fail(11098, 10898, 443, 11086);
}

function __ZNSt3__26__sortIRZN7guetzli12_GLOBAL__N_19Processor24ComputeBlockZeroingOrderEPKsS5_iiiihPNS1_11OutputImageEPNS_6vectorINS2_9CoeffDataENS_9allocatorIS9_EEEEE3__0PNS_4pairIifEEEEvT0_SJ_T_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var f3 = f0, f4 = f0, i5 = 0, i6 = 0, i7 = 0, f8 = f0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, f16 = f0, i17 = 0, f18 = f0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i24 = i2;
 L1 : while (1) {
  i14 = i24;
  i20 = i24 + -8 | 0;
  i22 = i24 + -4 | 0;
  while (1) {
   i23 = i1;
   L5 : while (1) {
    i13 = i23;
    i1 = i14 - i13 | 0;
    i2 = i1 >> 3;
    switch (i2 | 0) {
    case 2:
     {
      i19 = 5;
      break L1;
     }
    case 3:
     {
      i19 = 7;
      break L1;
     }
    case 4:
     {
      i19 = 15;
      break L1;
     }
    case 5:
     {
      i19 = 16;
      break L1;
     }
    case 1:
    case 0:
     {
      i19 = 83;
      break L1;
     }
    default:
     {}
    }
    if ((i1 | 0) < 56) {
     i19 = 22;
     break L1;
    }
    i9 = (i2 | 0) / 2 | 0;
    i10 = i23 + (i9 << 3) | 0;
    do if ((i1 | 0) > 7992) {
     i11 = (i2 | 0) / 4 | 0;
     i12 = i23 + (i11 << 3) | 0;
     i7 = i10 + (i11 << 3) | 0;
     i1 = __ZNSt3__27__sort4IRZN7guetzli12_GLOBAL__N_19Processor24ComputeBlockZeroingOrderEPKsS5_iiiihPNS1_11OutputImageEPNS_6vectorINS2_9CoeffDataENS_9allocatorIS9_EEEEE3__0PNS_4pairIifEEEEjT0_SJ_SJ_SJ_T_(i23, i12, i10, i7) | 0;
     f3 = Math_fround(HEAPF32[i22 >> 2]);
     i6 = i7 + 4 | 0;
     f4 = Math_fround(HEAPF32[i6 >> 2]);
     if (!(f3 < f4)) {
      i2 = i23 + (i9 << 3) + 4 | 0;
      break;
     }
     i5 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = HEAP32[i20 >> 2];
     HEAP32[i20 >> 2] = i5;
     HEAPF32[i6 >> 2] = f3;
     HEAPF32[i22 >> 2] = f4;
     i5 = i1 + 1 | 0;
     f4 = Math_fround(HEAPF32[i6 >> 2]);
     i2 = i23 + (i9 << 3) + 4 | 0;
     f3 = Math_fround(HEAPF32[i2 >> 2]);
     if (f4 < f3) {
      i5 = HEAP32[i10 >> 2] | 0;
      HEAP32[i10 >> 2] = HEAP32[i7 >> 2];
      HEAP32[i7 >> 2] = i5;
      HEAPF32[i2 >> 2] = f4;
      HEAPF32[i6 >> 2] = f3;
      i5 = i1 + 2 | 0;
      f4 = Math_fround(HEAPF32[i2 >> 2]);
      i6 = i23 + (i11 << 3) + 4 | 0;
      f3 = Math_fround(HEAPF32[i6 >> 2]);
      if (f4 < f3) {
       i5 = HEAP32[i12 >> 2] | 0;
       HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
       HEAP32[i10 >> 2] = i5;
       HEAPF32[i6 >> 2] = f4;
       HEAPF32[i2 >> 2] = f3;
       f3 = Math_fround(HEAPF32[i6 >> 2]);
       i5 = i23 + 4 | 0;
       f4 = Math_fround(HEAPF32[i5 >> 2]);
       if (f3 < f4) {
        i11 = HEAP32[i23 >> 2] | 0;
        HEAP32[i23 >> 2] = HEAP32[i12 >> 2];
        HEAP32[i12 >> 2] = i11;
        HEAPF32[i5 >> 2] = f3;
        HEAPF32[i6 >> 2] = f4;
        i1 = i1 + 4 | 0;
       } else i1 = i1 + 3 | 0;
      } else i1 = i5;
     } else i1 = i5;
    } else {
     i2 = i23 + (i9 << 3) + 4 | 0;
     f4 = Math_fround(HEAPF32[i2 >> 2]);
     i5 = i23 + 4 | 0;
     f8 = Math_fround(HEAPF32[i5 >> 2]);
     f3 = Math_fround(HEAPF32[i22 >> 2]);
     i1 = f3 < f4;
     if (!(f4 < f8)) {
      if (!i1) {
       i1 = 0;
       break;
      }
      i12 = HEAP32[i10 >> 2] | 0;
      HEAP32[i10 >> 2] = HEAP32[i20 >> 2];
      HEAP32[i20 >> 2] = i12;
      HEAPF32[i2 >> 2] = f3;
      HEAPF32[i22 >> 2] = f4;
      f3 = Math_fround(HEAPF32[i2 >> 2]);
      f4 = Math_fround(HEAPF32[i5 >> 2]);
      if (!(f3 < f4)) {
       i1 = 1;
       break;
      }
      i1 = HEAP32[i23 >> 2] | 0;
      HEAP32[i23 >> 2] = HEAP32[i10 >> 2];
      HEAP32[i10 >> 2] = i1;
      HEAPF32[i5 >> 2] = f3;
      HEAPF32[i2 >> 2] = f4;
      i1 = 2;
      break;
     }
     if (i1) {
      i1 = HEAP32[i23 >> 2] | 0;
      HEAP32[i23 >> 2] = HEAP32[i20 >> 2];
      HEAP32[i20 >> 2] = i1;
      HEAPF32[i5 >> 2] = f3;
      HEAPF32[i22 >> 2] = f8;
      i1 = 1;
      break;
     }
     i1 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i10 >> 2] = i1;
     HEAPF32[i5 >> 2] = f4;
     HEAPF32[i2 >> 2] = f8;
     f3 = Math_fround(HEAPF32[i22 >> 2]);
     if (f3 < f8) {
      HEAP32[i10 >> 2] = HEAP32[i20 >> 2];
      HEAP32[i20 >> 2] = i1;
      HEAPF32[i2 >> 2] = f3;
      HEAPF32[i22 >> 2] = f8;
      i1 = 2;
     } else i1 = 1;
    } while (0);
    i9 = i23 + 4 | 0;
    f8 = Math_fround(HEAPF32[i9 >> 2]);
    f4 = Math_fround(HEAPF32[i2 >> 2]);
    if (f8 < f4) {
     i2 = i20;
     break;
    } else i2 = i20;
    while (1) {
     i5 = i2;
     i2 = i2 + -8 | 0;
     if ((i23 | 0) == (i2 | 0)) break;
     i5 = i5 + -4 | 0;
     f3 = Math_fround(HEAPF32[i5 >> 2]);
     if (f3 < f4) {
      i19 = 66;
      break L5;
     }
    }
    i1 = i23 + 8 | 0;
    f4 = Math_fround(HEAPF32[i22 >> 2]);
    if (!(f8 < f4)) {
     if ((i1 | 0) == (i20 | 0)) {
      i19 = 83;
      break L1;
     }
     while (1) {
      i2 = i1 + 4 | 0;
      f3 = Math_fround(HEAPF32[i2 >> 2]);
      if (f8 < f3) break;
      i1 = i1 + 8 | 0;
      if ((i1 | 0) == (i20 | 0)) {
       i19 = 83;
       break L1;
      }
     }
     i23 = HEAP32[i1 >> 2] | 0;
     HEAP32[i1 >> 2] = HEAP32[i20 >> 2];
     HEAP32[i20 >> 2] = i23;
     HEAPF32[i2 >> 2] = f4;
     HEAPF32[i22 >> 2] = f3;
     i1 = i1 + 8 | 0;
    }
    if ((i1 | 0) == (i20 | 0)) {
     i19 = 83;
     break L1;
    } else i2 = i20;
    while (1) {
     f8 = Math_fround(HEAPF32[i9 >> 2]);
     while (1) {
      i6 = i1 + 4 | 0;
      f4 = Math_fround(HEAPF32[i6 >> 2]);
      i7 = i1 + 8 | 0;
      if (f8 < f4) break; else i1 = i7;
     }
     do {
      i5 = i2;
      i2 = i2 + -8 | 0;
      i5 = i5 + -4 | 0;
      f3 = Math_fround(HEAPF32[i5 >> 2]);
     } while (f8 < f3);
     if (i1 >>> 0 >= i2 >>> 0) {
      i23 = i1;
      continue L5;
     }
     i23 = HEAP32[i1 >> 2] | 0;
     HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
     HEAP32[i2 >> 2] = i23;
     HEAPF32[i6 >> 2] = f3;
     HEAPF32[i5 >> 2] = f4;
     i1 = i7;
    }
   }
   if ((i19 | 0) == 66) {
    i19 = 0;
    i12 = HEAP32[i23 >> 2] | 0;
    HEAP32[i23 >> 2] = HEAP32[i2 >> 2];
    HEAP32[i2 >> 2] = i12;
    HEAPF32[i9 >> 2] = f3;
    HEAPF32[i5 >> 2] = f8;
    i1 = i1 + 1 | 0;
   }
   i5 = i23 + 8 | 0;
   L50 : do if (i5 >>> 0 < i2 >>> 0) while (1) {
    f8 = Math_fround(HEAPF32[i10 + 4 >> 2]);
    while (1) {
     i7 = i5 + 4 | 0;
     f4 = Math_fround(HEAPF32[i7 >> 2]);
     i9 = i5 + 8 | 0;
     if (f4 < f8) i5 = i9; else break;
    }
    do {
     i6 = i2;
     i2 = i2 + -8 | 0;
     i6 = i6 + -4 | 0;
     f3 = Math_fround(HEAPF32[i6 >> 2]);
    } while (!(f3 < f8));
    if (i5 >>> 0 > i2 >>> 0) {
     i2 = i10;
     break L50;
    }
    i12 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
    HEAP32[i2 >> 2] = i12;
    HEAPF32[i7 >> 2] = f3;
    HEAPF32[i6 >> 2] = f4;
    i10 = (i10 | 0) == (i5 | 0) ? i2 : i10;
    i5 = i9;
    i1 = i1 + 1 | 0;
   } else i2 = i10; while (0);
   if ((i5 | 0) != (i2 | 0) ? (i15 = i2 + 4 | 0, f16 = Math_fround(HEAPF32[i15 >> 2]), i17 = i5 + 4 | 0, f18 = Math_fround(HEAPF32[i17 >> 2]), f16 < f18) : 0) {
    i12 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
    HEAP32[i2 >> 2] = i12;
    HEAPF32[i17 >> 2] = f16;
    HEAPF32[i15 >> 2] = f18;
    i1 = i1 + 1 | 0;
   }
   if (!i1) {
    i2 = __ZNSt3__227__insertion_sort_incompleteIRZN7guetzli12_GLOBAL__N_19Processor24ComputeBlockZeroingOrderEPKsS5_iiiihPNS1_11OutputImageEPNS_6vectorINS2_9CoeffDataENS_9allocatorIS9_EEEEE3__0PNS_4pairIifEEEEbT0_SJ_T_(i23, i5) | 0;
    i1 = i5 + 8 | 0;
    if (__ZNSt3__227__insertion_sort_incompleteIRZN7guetzli12_GLOBAL__N_19Processor24ComputeBlockZeroingOrderEPKsS5_iiiihPNS1_11OutputImageEPNS_6vectorINS2_9CoeffDataENS_9allocatorIS9_EEEEE3__0PNS_4pairIifEEEEbT0_SJ_T_(i1, i24) | 0) {
     i19 = 82;
     break;
    }
    if (i2) continue;
   }
   i12 = i5;
   if ((i12 - i13 | 0) >= (i14 - i12 | 0)) {
    i19 = 81;
    break;
   }
   __ZNSt3__26__sortIRZN7guetzli12_GLOBAL__N_19Processor24ComputeBlockZeroingOrderEPKsS5_iiiihPNS1_11OutputImageEPNS_6vectorINS2_9CoeffDataENS_9allocatorIS9_EEEEE3__0PNS_4pairIifEEEEvT0_SJ_T_(i23, i5);
   i1 = i5 + 8 | 0;
  }
  if ((i19 | 0) == 81) {
   i19 = 0;
   __ZNSt3__26__sortIRZN7guetzli12_GLOBAL__N_19Processor24ComputeBlockZeroingOrderEPKsS5_iiiihPNS1_11OutputImageEPNS_6vectorINS2_9CoeffDataENS_9allocatorIS9_EEEEE3__0PNS_4pairIifEEEEvT0_SJ_T_(i5 + 8 | 0, i24);
   i1 = i23;
   i24 = i5;
   continue;
  } else if ((i19 | 0) == 82) {
   i19 = 0;
   if (i2) {
    i19 = 83;
    break;
   } else {
    i1 = i23;
    i24 = i5;
    continue;
   }
  }
 }
 if ((i19 | 0) == 5) {
  f4 = Math_fround(HEAPF32[i22 >> 2]);
  i1 = i23 + 4 | 0;
  f3 = Math_fround(HEAPF32[i1 >> 2]);
  if (!(f4 < f3)) return;
  i24 = i24 + -8 | 0;
  i21 = HEAP32[i23 >> 2] | 0;
  HEAP32[i23 >> 2] = HEAP32[i24 >> 2];
  HEAP32[i24 >> 2] = i21;
  HEAPF32[i1 >> 2] = f4;
  HEAPF32[i22 >> 2] = f3;
  return;
 } else if ((i19 | 0) == 7) {
  i6 = i23 + 8 | 0;
  i5 = i23 + 12 | 0;
  f4 = Math_fround(HEAPF32[i5 >> 2]);
  i2 = i23 + 4 | 0;
  f8 = Math_fround(HEAPF32[i2 >> 2]);
  f3 = Math_fround(HEAPF32[i22 >> 2]);
  i1 = f3 < f4;
  if (!(f4 < f8)) {
   if (!i1) return;
   i24 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i20 >> 2] = i24;
   HEAPF32[i5 >> 2] = f3;
   HEAPF32[i22 >> 2] = f4;
   f3 = Math_fround(HEAPF32[i5 >> 2]);
   f4 = Math_fround(HEAPF32[i2 >> 2]);
   if (!(f3 < f4)) return;
   i24 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i6 >> 2] = i24;
   HEAPF32[i2 >> 2] = f3;
   HEAPF32[i5 >> 2] = f4;
   return;
  }
  if (i1) {
   i24 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i20 >> 2] = i24;
   HEAPF32[i2 >> 2] = f3;
   HEAPF32[i22 >> 2] = f8;
   return;
  }
  i1 = HEAP32[i23 >> 2] | 0;
  HEAP32[i23 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i6 >> 2] = i1;
  HEAPF32[i2 >> 2] = f4;
  HEAPF32[i5 >> 2] = f8;
  f3 = Math_fround(HEAPF32[i22 >> 2]);
  if (!(f3 < f8)) return;
  HEAP32[i6 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i20 >> 2] = i1;
  HEAPF32[i5 >> 2] = f3;
  HEAPF32[i22 >> 2] = f8;
  return;
 } else if ((i19 | 0) == 15) {
  __ZNSt3__27__sort4IRZN7guetzli12_GLOBAL__N_19Processor24ComputeBlockZeroingOrderEPKsS5_iiiihPNS1_11OutputImageEPNS_6vectorINS2_9CoeffDataENS_9allocatorIS9_EEEEE3__0PNS_4pairIifEEEEjT0_SJ_SJ_SJ_T_(i23, i23 + 8 | 0, i23 + 16 | 0, i20) | 0;
  return;
 } else if ((i19 | 0) == 16) {
  i9 = i23 + 8 | 0;
  i7 = i23 + 16 | 0;
  i5 = i23 + 24 | 0;
  __ZNSt3__27__sort4IRZN7guetzli12_GLOBAL__N_19Processor24ComputeBlockZeroingOrderEPKsS5_iiiihPNS1_11OutputImageEPNS_6vectorINS2_9CoeffDataENS_9allocatorIS9_EEEEE3__0PNS_4pairIifEEEEjT0_SJ_SJ_SJ_T_(i23, i9, i7, i5) | 0;
  f3 = Math_fround(HEAPF32[i22 >> 2]);
  i2 = i23 + 28 | 0;
  f4 = Math_fround(HEAPF32[i2 >> 2]);
  if (!(f3 < f4)) return;
  i1 = i24 + -8 | 0;
  i24 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
  HEAP32[i1 >> 2] = i24;
  HEAPF32[i2 >> 2] = f3;
  HEAPF32[i22 >> 2] = f4;
  f4 = Math_fround(HEAPF32[i2 >> 2]);
  i1 = i23 + 20 | 0;
  f3 = Math_fround(HEAPF32[i1 >> 2]);
  if (!(f4 < f3)) return;
  i24 = HEAP32[i7 >> 2] | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i7 >> 2] = i6;
  HEAP32[i5 >> 2] = i24;
  HEAPF32[i1 >> 2] = f4;
  HEAPF32[i2 >> 2] = f3;
  i2 = i23 + 12 | 0;
  f3 = Math_fround(HEAPF32[i2 >> 2]);
  if (!(f4 < f3)) return;
  i24 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i6;
  HEAP32[i7 >> 2] = i24;
  HEAPF32[i2 >> 2] = f4;
  HEAPF32[i1 >> 2] = f3;
  i1 = i23 + 4 | 0;
  f3 = Math_fround(HEAPF32[i1 >> 2]);
  if (!(f4 < f3)) return;
  i24 = HEAP32[i23 >> 2] | 0;
  HEAP32[i23 >> 2] = i6;
  HEAP32[i9 >> 2] = i24;
  HEAPF32[i1 >> 2] = f4;
  HEAPF32[i2 >> 2] = f3;
  return;
 } else if ((i19 | 0) == 22) {
  i2 = i23 + 16 | 0;
  i9 = i23 + 8 | 0;
  i5 = i23 + 12 | 0;
  f3 = Math_fround(HEAPF32[i5 >> 2]);
  i6 = i23 + 4 | 0;
  f4 = Math_fround(HEAPF32[i6 >> 2]);
  i7 = i23 + 20 | 0;
  f8 = Math_fround(HEAPF32[i7 >> 2]);
  i1 = f8 < f3;
  do if (f3 < f4) {
   if (i1) {
    i22 = HEAP32[i23 >> 2] | 0;
    HEAP32[i23 >> 2] = HEAP32[i2 >> 2];
    HEAP32[i2 >> 2] = i22;
    HEAPF32[i6 >> 2] = f8;
    HEAPF32[i7 >> 2] = f4;
    break;
   }
   i1 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i1;
   HEAPF32[i6 >> 2] = f3;
   HEAPF32[i5 >> 2] = f4;
   if (f8 < f4) {
    HEAP32[i9 >> 2] = HEAP32[i2 >> 2];
    HEAP32[i2 >> 2] = i1;
    HEAPF32[i5 >> 2] = f8;
    HEAPF32[i7 >> 2] = f4;
   }
  } else if (i1 ? (i22 = HEAP32[i9 >> 2] | 0, i21 = HEAP32[i2 >> 2] | 0, HEAP32[i9 >> 2] = i21, HEAP32[i2 >> 2] = i22, HEAPF32[i5 >> 2] = f8, HEAPF32[i7 >> 2] = f3, f8 < f4) : 0) {
   i22 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = i21;
   HEAP32[i9 >> 2] = i22;
   HEAPF32[i6 >> 2] = f8;
   HEAPF32[i5 >> 2] = f4;
  } while (0);
  i1 = i23 + 24 | 0;
  if ((i1 | 0) == (i24 | 0)) return;
  while (1) {
   f3 = Math_fround(HEAPF32[i1 + 4 >> 2]);
   if (f3 < Math_fround(HEAPF32[i2 + 4 >> 2])) {
    i7 = HEAP32[i1 >> 2] | 0;
    i5 = i1;
    while (1) {
     HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
     i6 = i2 + 4 | 0;
     HEAP32[i5 + 4 >> 2] = HEAP32[i6 >> 2];
     if ((i2 | 0) == (i23 | 0)) break;
     if (f3 < Math_fround(HEAPF32[i2 + -4 >> 2])) {
      i5 = i2;
      i2 = i2 + -8 | 0;
     } else break;
    }
    HEAP32[i2 >> 2] = i7;
    HEAPF32[i6 >> 2] = f3;
   }
   i2 = i1 + 8 | 0;
   if ((i2 | 0) == (i24 | 0)) break; else {
    i22 = i1;
    i1 = i2;
    i2 = i22;
   }
  }
  return;
 } else if ((i19 | 0) == 83) return;
}

function __ZNSt3__26__sortIRZN7guetzli12_GLOBAL__N_19Processor22SelectFrequencyMaskingERKNS1_8JPEGDataEPNS1_11OutputImageEhdbE3__1PNS_4pairIifEEEEvT0_SE_T_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var f3 = f0, f4 = f0, i5 = 0, i6 = 0, i7 = 0, f8 = f0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, f16 = f0, i17 = 0, f18 = f0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i24 = i2;
 L1 : while (1) {
  i14 = i24;
  i20 = i24 + -8 | 0;
  i22 = i24 + -4 | 0;
  while (1) {
   i23 = i1;
   L5 : while (1) {
    i13 = i23;
    i1 = i14 - i13 | 0;
    i2 = i1 >> 3;
    switch (i2 | 0) {
    case 2:
     {
      i19 = 5;
      break L1;
     }
    case 3:
     {
      i19 = 7;
      break L1;
     }
    case 4:
     {
      i19 = 15;
      break L1;
     }
    case 5:
     {
      i19 = 16;
      break L1;
     }
    case 1:
    case 0:
     {
      i19 = 83;
      break L1;
     }
    default:
     {}
    }
    if ((i1 | 0) < 56) {
     i19 = 22;
     break L1;
    }
    i9 = (i2 | 0) / 2 | 0;
    i10 = i23 + (i9 << 3) | 0;
    do if ((i1 | 0) > 7992) {
     i11 = (i2 | 0) / 4 | 0;
     i12 = i23 + (i11 << 3) | 0;
     i7 = i10 + (i11 << 3) | 0;
     i1 = __ZNSt3__27__sort4IRZN7guetzli12_GLOBAL__N_19Processor22SelectFrequencyMaskingERKNS1_8JPEGDataEPNS1_11OutputImageEhdbE3__1PNS_4pairIifEEEEjT0_SE_SE_SE_T_(i23, i12, i10, i7) | 0;
     f3 = Math_fround(HEAPF32[i22 >> 2]);
     i6 = i7 + 4 | 0;
     f4 = Math_fround(HEAPF32[i6 >> 2]);
     if (!(f3 < f4)) {
      i2 = i23 + (i9 << 3) + 4 | 0;
      break;
     }
     i5 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = HEAP32[i20 >> 2];
     HEAP32[i20 >> 2] = i5;
     HEAPF32[i6 >> 2] = f3;
     HEAPF32[i22 >> 2] = f4;
     i5 = i1 + 1 | 0;
     f4 = Math_fround(HEAPF32[i6 >> 2]);
     i2 = i23 + (i9 << 3) + 4 | 0;
     f3 = Math_fround(HEAPF32[i2 >> 2]);
     if (f4 < f3) {
      i5 = HEAP32[i10 >> 2] | 0;
      HEAP32[i10 >> 2] = HEAP32[i7 >> 2];
      HEAP32[i7 >> 2] = i5;
      HEAPF32[i2 >> 2] = f4;
      HEAPF32[i6 >> 2] = f3;
      i5 = i1 + 2 | 0;
      f4 = Math_fround(HEAPF32[i2 >> 2]);
      i6 = i23 + (i11 << 3) + 4 | 0;
      f3 = Math_fround(HEAPF32[i6 >> 2]);
      if (f4 < f3) {
       i5 = HEAP32[i12 >> 2] | 0;
       HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
       HEAP32[i10 >> 2] = i5;
       HEAPF32[i6 >> 2] = f4;
       HEAPF32[i2 >> 2] = f3;
       f3 = Math_fround(HEAPF32[i6 >> 2]);
       i5 = i23 + 4 | 0;
       f4 = Math_fround(HEAPF32[i5 >> 2]);
       if (f3 < f4) {
        i11 = HEAP32[i23 >> 2] | 0;
        HEAP32[i23 >> 2] = HEAP32[i12 >> 2];
        HEAP32[i12 >> 2] = i11;
        HEAPF32[i5 >> 2] = f3;
        HEAPF32[i6 >> 2] = f4;
        i1 = i1 + 4 | 0;
       } else i1 = i1 + 3 | 0;
      } else i1 = i5;
     } else i1 = i5;
    } else {
     i2 = i23 + (i9 << 3) + 4 | 0;
     f4 = Math_fround(HEAPF32[i2 >> 2]);
     i5 = i23 + 4 | 0;
     f8 = Math_fround(HEAPF32[i5 >> 2]);
     f3 = Math_fround(HEAPF32[i22 >> 2]);
     i1 = f3 < f4;
     if (!(f4 < f8)) {
      if (!i1) {
       i1 = 0;
       break;
      }
      i12 = HEAP32[i10 >> 2] | 0;
      HEAP32[i10 >> 2] = HEAP32[i20 >> 2];
      HEAP32[i20 >> 2] = i12;
      HEAPF32[i2 >> 2] = f3;
      HEAPF32[i22 >> 2] = f4;
      f3 = Math_fround(HEAPF32[i2 >> 2]);
      f4 = Math_fround(HEAPF32[i5 >> 2]);
      if (!(f3 < f4)) {
       i1 = 1;
       break;
      }
      i1 = HEAP32[i23 >> 2] | 0;
      HEAP32[i23 >> 2] = HEAP32[i10 >> 2];
      HEAP32[i10 >> 2] = i1;
      HEAPF32[i5 >> 2] = f3;
      HEAPF32[i2 >> 2] = f4;
      i1 = 2;
      break;
     }
     if (i1) {
      i1 = HEAP32[i23 >> 2] | 0;
      HEAP32[i23 >> 2] = HEAP32[i20 >> 2];
      HEAP32[i20 >> 2] = i1;
      HEAPF32[i5 >> 2] = f3;
      HEAPF32[i22 >> 2] = f8;
      i1 = 1;
      break;
     }
     i1 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i10 >> 2] = i1;
     HEAPF32[i5 >> 2] = f4;
     HEAPF32[i2 >> 2] = f8;
     f3 = Math_fround(HEAPF32[i22 >> 2]);
     if (f3 < f8) {
      HEAP32[i10 >> 2] = HEAP32[i20 >> 2];
      HEAP32[i20 >> 2] = i1;
      HEAPF32[i2 >> 2] = f3;
      HEAPF32[i22 >> 2] = f8;
      i1 = 2;
     } else i1 = 1;
    } while (0);
    i9 = i23 + 4 | 0;
    f8 = Math_fround(HEAPF32[i9 >> 2]);
    f4 = Math_fround(HEAPF32[i2 >> 2]);
    if (f8 < f4) {
     i2 = i20;
     break;
    } else i2 = i20;
    while (1) {
     i5 = i2;
     i2 = i2 + -8 | 0;
     if ((i23 | 0) == (i2 | 0)) break;
     i5 = i5 + -4 | 0;
     f3 = Math_fround(HEAPF32[i5 >> 2]);
     if (f3 < f4) {
      i19 = 66;
      break L5;
     }
    }
    i1 = i23 + 8 | 0;
    f4 = Math_fround(HEAPF32[i22 >> 2]);
    if (!(f8 < f4)) {
     if ((i1 | 0) == (i20 | 0)) {
      i19 = 83;
      break L1;
     }
     while (1) {
      i2 = i1 + 4 | 0;
      f3 = Math_fround(HEAPF32[i2 >> 2]);
      if (f8 < f3) break;
      i1 = i1 + 8 | 0;
      if ((i1 | 0) == (i20 | 0)) {
       i19 = 83;
       break L1;
      }
     }
     i23 = HEAP32[i1 >> 2] | 0;
     HEAP32[i1 >> 2] = HEAP32[i20 >> 2];
     HEAP32[i20 >> 2] = i23;
     HEAPF32[i2 >> 2] = f4;
     HEAPF32[i22 >> 2] = f3;
     i1 = i1 + 8 | 0;
    }
    if ((i1 | 0) == (i20 | 0)) {
     i19 = 83;
     break L1;
    } else i2 = i20;
    while (1) {
     f8 = Math_fround(HEAPF32[i9 >> 2]);
     while (1) {
      i6 = i1 + 4 | 0;
      f4 = Math_fround(HEAPF32[i6 >> 2]);
      i7 = i1 + 8 | 0;
      if (f8 < f4) break; else i1 = i7;
     }
     do {
      i5 = i2;
      i2 = i2 + -8 | 0;
      i5 = i5 + -4 | 0;
      f3 = Math_fround(HEAPF32[i5 >> 2]);
     } while (f8 < f3);
     if (i1 >>> 0 >= i2 >>> 0) {
      i23 = i1;
      continue L5;
     }
     i23 = HEAP32[i1 >> 2] | 0;
     HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
     HEAP32[i2 >> 2] = i23;
     HEAPF32[i6 >> 2] = f3;
     HEAPF32[i5 >> 2] = f4;
     i1 = i7;
    }
   }
   if ((i19 | 0) == 66) {
    i19 = 0;
    i12 = HEAP32[i23 >> 2] | 0;
    HEAP32[i23 >> 2] = HEAP32[i2 >> 2];
    HEAP32[i2 >> 2] = i12;
    HEAPF32[i9 >> 2] = f3;
    HEAPF32[i5 >> 2] = f8;
    i1 = i1 + 1 | 0;
   }
   i5 = i23 + 8 | 0;
   L50 : do if (i5 >>> 0 < i2 >>> 0) while (1) {
    f8 = Math_fround(HEAPF32[i10 + 4 >> 2]);
    while (1) {
     i7 = i5 + 4 | 0;
     f4 = Math_fround(HEAPF32[i7 >> 2]);
     i9 = i5 + 8 | 0;
     if (f4 < f8) i5 = i9; else break;
    }
    do {
     i6 = i2;
     i2 = i2 + -8 | 0;
     i6 = i6 + -4 | 0;
     f3 = Math_fround(HEAPF32[i6 >> 2]);
    } while (!(f3 < f8));
    if (i5 >>> 0 > i2 >>> 0) {
     i2 = i10;
     break L50;
    }
    i12 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
    HEAP32[i2 >> 2] = i12;
    HEAPF32[i7 >> 2] = f3;
    HEAPF32[i6 >> 2] = f4;
    i10 = (i10 | 0) == (i5 | 0) ? i2 : i10;
    i5 = i9;
    i1 = i1 + 1 | 0;
   } else i2 = i10; while (0);
   if ((i5 | 0) != (i2 | 0) ? (i15 = i2 + 4 | 0, f16 = Math_fround(HEAPF32[i15 >> 2]), i17 = i5 + 4 | 0, f18 = Math_fround(HEAPF32[i17 >> 2]), f16 < f18) : 0) {
    i12 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
    HEAP32[i2 >> 2] = i12;
    HEAPF32[i17 >> 2] = f16;
    HEAPF32[i15 >> 2] = f18;
    i1 = i1 + 1 | 0;
   }
   if (!i1) {
    i2 = __ZNSt3__227__insertion_sort_incompleteIRZN7guetzli12_GLOBAL__N_19Processor22SelectFrequencyMaskingERKNS1_8JPEGDataEPNS1_11OutputImageEhdbE3__1PNS_4pairIifEEEEbT0_SE_T_(i23, i5) | 0;
    i1 = i5 + 8 | 0;
    if (__ZNSt3__227__insertion_sort_incompleteIRZN7guetzli12_GLOBAL__N_19Processor22SelectFrequencyMaskingERKNS1_8JPEGDataEPNS1_11OutputImageEhdbE3__1PNS_4pairIifEEEEbT0_SE_T_(i1, i24) | 0) {
     i19 = 82;
     break;
    }
    if (i2) continue;
   }
   i12 = i5;
   if ((i12 - i13 | 0) >= (i14 - i12 | 0)) {
    i19 = 81;
    break;
   }
   __ZNSt3__26__sortIRZN7guetzli12_GLOBAL__N_19Processor22SelectFrequencyMaskingERKNS1_8JPEGDataEPNS1_11OutputImageEhdbE3__1PNS_4pairIifEEEEvT0_SE_T_(i23, i5);
   i1 = i5 + 8 | 0;
  }
  if ((i19 | 0) == 81) {
   i19 = 0;
   __ZNSt3__26__sortIRZN7guetzli12_GLOBAL__N_19Processor22SelectFrequencyMaskingERKNS1_8JPEGDataEPNS1_11OutputImageEhdbE3__1PNS_4pairIifEEEEvT0_SE_T_(i5 + 8 | 0, i24);
   i1 = i23;
   i24 = i5;
   continue;
  } else if ((i19 | 0) == 82) {
   i19 = 0;
   if (i2) {
    i19 = 83;
    break;
   } else {
    i1 = i23;
    i24 = i5;
    continue;
   }
  }
 }
 if ((i19 | 0) == 5) {
  f4 = Math_fround(HEAPF32[i22 >> 2]);
  i1 = i23 + 4 | 0;
  f3 = Math_fround(HEAPF32[i1 >> 2]);
  if (!(f4 < f3)) return;
  i24 = i24 + -8 | 0;
  i21 = HEAP32[i23 >> 2] | 0;
  HEAP32[i23 >> 2] = HEAP32[i24 >> 2];
  HEAP32[i24 >> 2] = i21;
  HEAPF32[i1 >> 2] = f4;
  HEAPF32[i22 >> 2] = f3;
  return;
 } else if ((i19 | 0) == 7) {
  i6 = i23 + 8 | 0;
  i5 = i23 + 12 | 0;
  f4 = Math_fround(HEAPF32[i5 >> 2]);
  i2 = i23 + 4 | 0;
  f8 = Math_fround(HEAPF32[i2 >> 2]);
  f3 = Math_fround(HEAPF32[i22 >> 2]);
  i1 = f3 < f4;
  if (!(f4 < f8)) {
   if (!i1) return;
   i24 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i20 >> 2] = i24;
   HEAPF32[i5 >> 2] = f3;
   HEAPF32[i22 >> 2] = f4;
   f3 = Math_fround(HEAPF32[i5 >> 2]);
   f4 = Math_fround(HEAPF32[i2 >> 2]);
   if (!(f3 < f4)) return;
   i24 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i6 >> 2] = i24;
   HEAPF32[i2 >> 2] = f3;
   HEAPF32[i5 >> 2] = f4;
   return;
  }
  if (i1) {
   i24 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i20 >> 2] = i24;
   HEAPF32[i2 >> 2] = f3;
   HEAPF32[i22 >> 2] = f8;
   return;
  }
  i1 = HEAP32[i23 >> 2] | 0;
  HEAP32[i23 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i6 >> 2] = i1;
  HEAPF32[i2 >> 2] = f4;
  HEAPF32[i5 >> 2] = f8;
  f3 = Math_fround(HEAPF32[i22 >> 2]);
  if (!(f3 < f8)) return;
  HEAP32[i6 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i20 >> 2] = i1;
  HEAPF32[i5 >> 2] = f3;
  HEAPF32[i22 >> 2] = f8;
  return;
 } else if ((i19 | 0) == 15) {
  __ZNSt3__27__sort4IRZN7guetzli12_GLOBAL__N_19Processor22SelectFrequencyMaskingERKNS1_8JPEGDataEPNS1_11OutputImageEhdbE3__1PNS_4pairIifEEEEjT0_SE_SE_SE_T_(i23, i23 + 8 | 0, i23 + 16 | 0, i20) | 0;
  return;
 } else if ((i19 | 0) == 16) {
  i9 = i23 + 8 | 0;
  i7 = i23 + 16 | 0;
  i5 = i23 + 24 | 0;
  __ZNSt3__27__sort4IRZN7guetzli12_GLOBAL__N_19Processor22SelectFrequencyMaskingERKNS1_8JPEGDataEPNS1_11OutputImageEhdbE3__1PNS_4pairIifEEEEjT0_SE_SE_SE_T_(i23, i9, i7, i5) | 0;
  f3 = Math_fround(HEAPF32[i22 >> 2]);
  i2 = i23 + 28 | 0;
  f4 = Math_fround(HEAPF32[i2 >> 2]);
  if (!(f3 < f4)) return;
  i1 = i24 + -8 | 0;
  i24 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
  HEAP32[i1 >> 2] = i24;
  HEAPF32[i2 >> 2] = f3;
  HEAPF32[i22 >> 2] = f4;
  f4 = Math_fround(HEAPF32[i2 >> 2]);
  i1 = i23 + 20 | 0;
  f3 = Math_fround(HEAPF32[i1 >> 2]);
  if (!(f4 < f3)) return;
  i24 = HEAP32[i7 >> 2] | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i7 >> 2] = i6;
  HEAP32[i5 >> 2] = i24;
  HEAPF32[i1 >> 2] = f4;
  HEAPF32[i2 >> 2] = f3;
  i2 = i23 + 12 | 0;
  f3 = Math_fround(HEAPF32[i2 >> 2]);
  if (!(f4 < f3)) return;
  i24 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i6;
  HEAP32[i7 >> 2] = i24;
  HEAPF32[i2 >> 2] = f4;
  HEAPF32[i1 >> 2] = f3;
  i1 = i23 + 4 | 0;
  f3 = Math_fround(HEAPF32[i1 >> 2]);
  if (!(f4 < f3)) return;
  i24 = HEAP32[i23 >> 2] | 0;
  HEAP32[i23 >> 2] = i6;
  HEAP32[i9 >> 2] = i24;
  HEAPF32[i1 >> 2] = f4;
  HEAPF32[i2 >> 2] = f3;
  return;
 } else if ((i19 | 0) == 22) {
  i2 = i23 + 16 | 0;
  i9 = i23 + 8 | 0;
  i5 = i23 + 12 | 0;
  f3 = Math_fround(HEAPF32[i5 >> 2]);
  i6 = i23 + 4 | 0;
  f4 = Math_fround(HEAPF32[i6 >> 2]);
  i7 = i23 + 20 | 0;
  f8 = Math_fround(HEAPF32[i7 >> 2]);
  i1 = f8 < f3;
  do if (f3 < f4) {
   if (i1) {
    i22 = HEAP32[i23 >> 2] | 0;
    HEAP32[i23 >> 2] = HEAP32[i2 >> 2];
    HEAP32[i2 >> 2] = i22;
    HEAPF32[i6 >> 2] = f8;
    HEAPF32[i7 >> 2] = f4;
    break;
   }
   i1 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i1;
   HEAPF32[i6 >> 2] = f3;
   HEAPF32[i5 >> 2] = f4;
   if (f8 < f4) {
    HEAP32[i9 >> 2] = HEAP32[i2 >> 2];
    HEAP32[i2 >> 2] = i1;
    HEAPF32[i5 >> 2] = f8;
    HEAPF32[i7 >> 2] = f4;
   }
  } else if (i1 ? (i22 = HEAP32[i9 >> 2] | 0, i21 = HEAP32[i2 >> 2] | 0, HEAP32[i9 >> 2] = i21, HEAP32[i2 >> 2] = i22, HEAPF32[i5 >> 2] = f8, HEAPF32[i7 >> 2] = f3, f8 < f4) : 0) {
   i22 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = i21;
   HEAP32[i9 >> 2] = i22;
   HEAPF32[i6 >> 2] = f8;
   HEAPF32[i5 >> 2] = f4;
  } while (0);
  i1 = i23 + 24 | 0;
  if ((i1 | 0) == (i24 | 0)) return;
  while (1) {
   f3 = Math_fround(HEAPF32[i1 + 4 >> 2]);
   if (f3 < Math_fround(HEAPF32[i2 + 4 >> 2])) {
    i7 = HEAP32[i1 >> 2] | 0;
    i5 = i1;
    while (1) {
     HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
     i6 = i2 + 4 | 0;
     HEAP32[i5 + 4 >> 2] = HEAP32[i6 >> 2];
     if ((i2 | 0) == (i23 | 0)) break;
     if (f3 < Math_fround(HEAPF32[i2 + -4 >> 2])) {
      i5 = i2;
      i2 = i2 + -8 | 0;
     } else break;
    }
    HEAP32[i2 >> 2] = i7;
    HEAPF32[i6 >> 2] = f3;
   }
   i2 = i1 + 8 | 0;
   if ((i2 | 0) == (i24 | 0)) break; else {
    i22 = i1;
    i1 = i2;
    i2 = i22;
   }
  }
  return;
 } else if ((i19 | 0) == 83) return;
}

function __ZNSt3__26__sortIRPFbRKN7guetzli11HuffmanTreeES4_EPS2_EEvT0_S9_T_(i1, i2, i12) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i12 = i12 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 L1 : while (1) {
  i9 = i2;
  i11 = i2 + -8 | 0;
  while (1) {
   L5 : while (1) {
    i8 = i1;
    i3 = i9 - i8 | 0;
    i4 = i3 >> 3;
    switch (i4 | 0) {
    case 2:
     {
      i10 = 5;
      break L1;
     }
    case 3:
     {
      i10 = 7;
      break L1;
     }
    case 4:
     {
      i10 = 15;
      break L1;
     }
    case 5:
     {
      i10 = 16;
      break L1;
     }
    case 1:
    case 0:
     {
      i10 = 68;
      break L1;
     }
    default:
     {}
    }
    if ((i3 | 0) < 248) {
     i10 = 22;
     break L1;
    }
    i7 = i1 + (((i4 | 0) / 2 | 0) << 3) | 0;
    do if ((i3 | 0) > 7992) {
     i4 = (i4 | 0) / 4 | 0;
     i6 = i1 + (i4 << 3) | 0;
     i4 = i7 + (i4 << 3) | 0;
     i3 = __ZNSt3__27__sort4IRPFbRKN7guetzli11HuffmanTreeES4_EPS2_EEjT0_S9_S9_S9_T_(i1, i6, i7, i4, i12) | 0;
     if (FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i11, i4) | 0) {
      i13 = i4;
      i14 = HEAP32[i13 >> 2] | 0;
      i13 = HEAP32[i13 + 4 >> 2] | 0;
      i16 = i11;
      i15 = HEAP32[i16 + 4 >> 2] | 0;
      i5 = i4;
      HEAP32[i5 >> 2] = HEAP32[i16 >> 2];
      HEAP32[i5 + 4 >> 2] = i15;
      i5 = i11;
      HEAP32[i5 >> 2] = i14;
      HEAP32[i5 + 4 >> 2] = i13;
      i5 = i3 + 1 | 0;
      if (FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i4, i7) | 0) {
       i16 = i7;
       i15 = HEAP32[i16 >> 2] | 0;
       i16 = HEAP32[i16 + 4 >> 2] | 0;
       i5 = i4;
       i13 = HEAP32[i5 + 4 >> 2] | 0;
       i14 = i7;
       HEAP32[i14 >> 2] = HEAP32[i5 >> 2];
       HEAP32[i14 + 4 >> 2] = i13;
       HEAP32[i4 >> 2] = i15;
       HEAP32[i4 + 4 >> 2] = i16;
       i4 = i3 + 2 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i7, i6) | 0) {
        i15 = i6;
        i14 = HEAP32[i15 >> 2] | 0;
        i15 = HEAP32[i15 + 4 >> 2] | 0;
        i5 = i7;
        i13 = HEAP32[i5 + 4 >> 2] | 0;
        i16 = i6;
        HEAP32[i16 >> 2] = HEAP32[i5 >> 2];
        HEAP32[i16 + 4 >> 2] = i13;
        i16 = i7;
        HEAP32[i16 >> 2] = i14;
        HEAP32[i16 + 4 >> 2] = i15;
        if (FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i6, i1) | 0) {
         i15 = i1;
         i14 = HEAP32[i15 >> 2] | 0;
         i15 = HEAP32[i15 + 4 >> 2] | 0;
         i5 = i6;
         i13 = HEAP32[i5 + 4 >> 2] | 0;
         i16 = i1;
         HEAP32[i16 >> 2] = HEAP32[i5 >> 2];
         HEAP32[i16 + 4 >> 2] = i13;
         i16 = i6;
         HEAP32[i16 >> 2] = i14;
         HEAP32[i16 + 4 >> 2] = i15;
         i3 = i3 + 4 | 0;
        } else i3 = i3 + 3 | 0;
       } else i3 = i4;
      } else i3 = i5;
     }
    } else {
     i16 = FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i7, i1) | 0;
     i3 = FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i11, i7) | 0;
     if (!i16) {
      if (!i3) {
       i3 = 0;
       break;
      }
      i15 = i7;
      i14 = HEAP32[i15 >> 2] | 0;
      i15 = HEAP32[i15 + 4 >> 2] | 0;
      i6 = i11;
      i13 = HEAP32[i6 + 4 >> 2] | 0;
      i16 = i7;
      HEAP32[i16 >> 2] = HEAP32[i6 >> 2];
      HEAP32[i16 + 4 >> 2] = i13;
      i16 = i11;
      HEAP32[i16 >> 2] = i14;
      HEAP32[i16 + 4 >> 2] = i15;
      if (!(FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i7, i1) | 0)) {
       i3 = 1;
       break;
      }
      i16 = i1;
      i15 = HEAP32[i16 >> 2] | 0;
      i16 = HEAP32[i16 + 4 >> 2] | 0;
      i13 = i7;
      i14 = HEAP32[i13 + 4 >> 2] | 0;
      i3 = i1;
      HEAP32[i3 >> 2] = HEAP32[i13 >> 2];
      HEAP32[i3 + 4 >> 2] = i14;
      i3 = i7;
      HEAP32[i3 >> 2] = i15;
      HEAP32[i3 + 4 >> 2] = i16;
      i3 = 2;
      break;
     }
     i5 = i1;
     i4 = HEAP32[i5 >> 2] | 0;
     i5 = HEAP32[i5 + 4 >> 2] | 0;
     if (i3) {
      i15 = i11;
      i16 = HEAP32[i15 + 4 >> 2] | 0;
      i3 = i1;
      HEAP32[i3 >> 2] = HEAP32[i15 >> 2];
      HEAP32[i3 + 4 >> 2] = i16;
      i3 = i11;
      HEAP32[i3 >> 2] = i4;
      HEAP32[i3 + 4 >> 2] = i5;
      i3 = 1;
      break;
     }
     i14 = i7;
     i15 = HEAP32[i14 + 4 >> 2] | 0;
     i16 = i1;
     HEAP32[i16 >> 2] = HEAP32[i14 >> 2];
     HEAP32[i16 + 4 >> 2] = i15;
     i16 = i7;
     HEAP32[i16 >> 2] = i4;
     HEAP32[i16 + 4 >> 2] = i5;
     if (FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i11, i7) | 0) {
      i16 = i7;
      i15 = HEAP32[i16 >> 2] | 0;
      i16 = HEAP32[i16 + 4 >> 2] | 0;
      i13 = i11;
      i14 = HEAP32[i13 + 4 >> 2] | 0;
      i3 = i7;
      HEAP32[i3 >> 2] = HEAP32[i13 >> 2];
      HEAP32[i3 + 4 >> 2] = i14;
      i3 = i11;
      HEAP32[i3 >> 2] = i15;
      HEAP32[i3 + 4 >> 2] = i16;
      i3 = 2;
     } else i3 = 1;
    } while (0);
    if (FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i1, i7) | 0) {
     i4 = i11;
     break;
    } else i4 = i11;
    while (1) {
     i4 = i4 + -8 | 0;
     if ((i1 | 0) == (i4 | 0)) break;
     if (FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i4, i7) | 0) {
      i10 = 51;
      break L5;
     }
    }
    i3 = i1 + 8 | 0;
    if (!(FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i1, i11) | 0)) {
     if ((i3 | 0) == (i11 | 0)) {
      i10 = 68;
      break L1;
     }
     while (1) {
      if (FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i1, i3) | 0) break;
      i3 = i3 + 8 | 0;
      if ((i3 | 0) == (i11 | 0)) {
       i10 = 68;
       break L1;
      }
     }
     i15 = i3;
     i14 = HEAP32[i15 >> 2] | 0;
     i15 = HEAP32[i15 + 4 >> 2] | 0;
     i8 = i11;
     i13 = HEAP32[i8 + 4 >> 2] | 0;
     i16 = i3;
     HEAP32[i16 >> 2] = HEAP32[i8 >> 2];
     HEAP32[i16 + 4 >> 2] = i13;
     i16 = i11;
     HEAP32[i16 >> 2] = i14;
     HEAP32[i16 + 4 >> 2] = i15;
     i3 = i3 + 8 | 0;
    }
    if ((i3 | 0) == (i11 | 0)) {
     i10 = 68;
     break L1;
    } else i4 = i11;
    while (1) {
     while (1) {
      i5 = i3 + 8 | 0;
      if (FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i1, i3) | 0) break; else i3 = i5;
     }
     do i4 = i4 + -8 | 0; while (FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i1, i4) | 0);
     if (i3 >>> 0 >= i4 >>> 0) {
      i1 = i3;
      continue L5;
     }
     i16 = i3;
     i15 = HEAP32[i16 >> 2] | 0;
     i16 = HEAP32[i16 + 4 >> 2] | 0;
     i13 = i4;
     i14 = HEAP32[i13 + 4 >> 2] | 0;
     HEAP32[i3 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i3 + 4 >> 2] = i14;
     i3 = i4;
     HEAP32[i3 >> 2] = i15;
     HEAP32[i3 + 4 >> 2] = i16;
     i3 = i5;
    }
   }
   if ((i10 | 0) == 51) {
    i10 = 0;
    i15 = i1;
    i14 = HEAP32[i15 >> 2] | 0;
    i15 = HEAP32[i15 + 4 >> 2] | 0;
    i6 = i4;
    i13 = HEAP32[i6 + 4 >> 2] | 0;
    i16 = i1;
    HEAP32[i16 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i16 + 4 >> 2] = i13;
    i16 = i4;
    HEAP32[i16 >> 2] = i14;
    HEAP32[i16 + 4 >> 2] = i15;
    i3 = i3 + 1 | 0;
   }
   i5 = i1 + 8 | 0;
   L48 : do if (i5 >>> 0 < i4 >>> 0) while (1) {
    while (1) {
     i6 = i5 + 8 | 0;
     if (FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i5, i7) | 0) i5 = i6; else break;
    }
    do i4 = i4 + -8 | 0; while (!(FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i4, i7) | 0));
    if (i5 >>> 0 > i4 >>> 0) {
     i4 = i7;
     break L48;
    }
    i15 = i5;
    i14 = HEAP32[i15 >> 2] | 0;
    i15 = HEAP32[i15 + 4 >> 2] | 0;
    i17 = i4;
    i13 = HEAP32[i17 + 4 >> 2] | 0;
    i16 = i5;
    HEAP32[i16 >> 2] = HEAP32[i17 >> 2];
    HEAP32[i16 + 4 >> 2] = i13;
    i16 = i4;
    HEAP32[i16 >> 2] = i14;
    HEAP32[i16 + 4 >> 2] = i15;
    i7 = (i7 | 0) == (i5 | 0) ? i4 : i7;
    i5 = i6;
    i3 = i3 + 1 | 0;
   } else i4 = i7; while (0);
   if ((i5 | 0) != (i4 | 0) ? FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i4, i5) | 0 : 0) {
    i16 = i5;
    i15 = HEAP32[i16 >> 2] | 0;
    i16 = HEAP32[i16 + 4 >> 2] | 0;
    i13 = i4;
    i14 = HEAP32[i13 + 4 >> 2] | 0;
    i17 = i5;
    HEAP32[i17 >> 2] = HEAP32[i13 >> 2];
    HEAP32[i17 + 4 >> 2] = i14;
    i17 = i4;
    HEAP32[i17 >> 2] = i15;
    HEAP32[i17 + 4 >> 2] = i16;
    i3 = i3 + 1 | 0;
   }
   if (!i3) {
    i3 = __ZNSt3__227__insertion_sort_incompleteIRPFbRKN7guetzli11HuffmanTreeES4_EPS2_EEbT0_S9_T_(i1, i5, i12) | 0;
    i4 = i5 + 8 | 0;
    if (__ZNSt3__227__insertion_sort_incompleteIRPFbRKN7guetzli11HuffmanTreeES4_EPS2_EEbT0_S9_T_(i4, i2, i12) | 0) {
     i10 = 67;
     break;
    }
    if (i3) {
     i1 = i4;
     continue;
    }
   }
   i17 = i5;
   if ((i17 - i8 | 0) >= (i9 - i17 | 0)) {
    i10 = 66;
    break;
   }
   __ZNSt3__26__sortIRPFbRKN7guetzli11HuffmanTreeES4_EPS2_EEvT0_S9_T_(i1, i5, i12);
   i1 = i5 + 8 | 0;
  }
  if ((i10 | 0) == 66) {
   i10 = 0;
   __ZNSt3__26__sortIRPFbRKN7guetzli11HuffmanTreeES4_EPS2_EEvT0_S9_T_(i5 + 8 | 0, i2, i12);
   i2 = i5;
   continue;
  } else if ((i10 | 0) == 67) {
   i10 = 0;
   if (i3) {
    i10 = 68;
    break;
   } else {
    i2 = i5;
    continue;
   }
  }
 }
 if ((i10 | 0) == 5) {
  if (!(FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i11, i1) | 0)) return;
  i16 = i1;
  i15 = HEAP32[i16 >> 2] | 0;
  i16 = HEAP32[i16 + 4 >> 2] | 0;
  i13 = i11;
  i14 = HEAP32[i13 + 4 >> 2] | 0;
  i17 = i1;
  HEAP32[i17 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i17 + 4 >> 2] = i14;
  i17 = i11;
  HEAP32[i17 >> 2] = i15;
  HEAP32[i17 + 4 >> 2] = i16;
  return;
 } else if ((i10 | 0) == 7) {
  i2 = i1 + 8 | 0;
  i17 = FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i2, i1) | 0;
  i3 = FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i11, i2) | 0;
  if (!i17) {
   if (!i3) return;
   i16 = i2;
   i15 = HEAP32[i16 >> 2] | 0;
   i16 = HEAP32[i16 + 4 >> 2] | 0;
   i13 = i11;
   i14 = HEAP32[i13 + 4 >> 2] | 0;
   i17 = i2;
   HEAP32[i17 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i17 + 4 >> 2] = i14;
   i17 = i11;
   HEAP32[i17 >> 2] = i15;
   HEAP32[i17 + 4 >> 2] = i16;
   if (!(FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i2, i1) | 0)) return;
   i16 = i1;
   i15 = HEAP32[i16 >> 2] | 0;
   i16 = HEAP32[i16 + 4 >> 2] | 0;
   i13 = i2;
   i14 = HEAP32[i13 + 4 >> 2] | 0;
   i17 = i1;
   HEAP32[i17 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i17 + 4 >> 2] = i14;
   i17 = i2;
   HEAP32[i17 >> 2] = i15;
   HEAP32[i17 + 4 >> 2] = i16;
   return;
  }
  i5 = i1;
  i4 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i5 + 4 >> 2] | 0;
  if (i3) {
   i15 = i11;
   i16 = HEAP32[i15 + 4 >> 2] | 0;
   i17 = i1;
   HEAP32[i17 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i17 + 4 >> 2] = i16;
   i17 = i11;
   HEAP32[i17 >> 2] = i4;
   HEAP32[i17 + 4 >> 2] = i5;
   return;
  }
  i15 = i2;
  i16 = HEAP32[i15 + 4 >> 2] | 0;
  i17 = i1;
  HEAP32[i17 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i17 + 4 >> 2] = i16;
  i17 = i2;
  HEAP32[i17 >> 2] = i4;
  HEAP32[i17 + 4 >> 2] = i5;
  if (!(FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i11, i2) | 0)) return;
  i16 = i2;
  i15 = HEAP32[i16 >> 2] | 0;
  i16 = HEAP32[i16 + 4 >> 2] | 0;
  i13 = i11;
  i14 = HEAP32[i13 + 4 >> 2] | 0;
  i17 = i2;
  HEAP32[i17 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i17 + 4 >> 2] = i14;
  i17 = i11;
  HEAP32[i17 >> 2] = i15;
  HEAP32[i17 + 4 >> 2] = i16;
  return;
 } else if ((i10 | 0) == 15) {
  __ZNSt3__27__sort4IRPFbRKN7guetzli11HuffmanTreeES4_EPS2_EEjT0_S9_S9_S9_T_(i1, i1 + 8 | 0, i1 + 16 | 0, i11, i12) | 0;
  return;
 } else if ((i10 | 0) == 16) {
  i2 = i1 + 8 | 0;
  i3 = i1 + 16 | 0;
  i4 = i1 + 24 | 0;
  __ZNSt3__27__sort4IRPFbRKN7guetzli11HuffmanTreeES4_EPS2_EEjT0_S9_S9_S9_T_(i1, i2, i3, i4, i12) | 0;
  if (!(FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i11, i4) | 0)) return;
  i16 = i4;
  i15 = HEAP32[i16 >> 2] | 0;
  i16 = HEAP32[i16 + 4 >> 2] | 0;
  i13 = i11;
  i14 = HEAP32[i13 + 4 >> 2] | 0;
  i17 = i4;
  HEAP32[i17 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i17 + 4 >> 2] = i14;
  i17 = i11;
  HEAP32[i17 >> 2] = i15;
  HEAP32[i17 + 4 >> 2] = i16;
  if (!(FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i4, i3) | 0)) return;
  i16 = i3;
  i15 = HEAP32[i16 >> 2] | 0;
  i16 = HEAP32[i16 + 4 >> 2] | 0;
  i13 = i4;
  i14 = HEAP32[i13 + 4 >> 2] | 0;
  i17 = i3;
  HEAP32[i17 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i17 + 4 >> 2] = i14;
  i17 = i4;
  HEAP32[i17 >> 2] = i15;
  HEAP32[i17 + 4 >> 2] = i16;
  if (!(FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i3, i2) | 0)) return;
  i16 = i2;
  i15 = HEAP32[i16 >> 2] | 0;
  i16 = HEAP32[i16 + 4 >> 2] | 0;
  i13 = i3;
  i14 = HEAP32[i13 + 4 >> 2] | 0;
  i17 = i2;
  HEAP32[i17 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i17 + 4 >> 2] = i14;
  i17 = i3;
  HEAP32[i17 >> 2] = i15;
  HEAP32[i17 + 4 >> 2] = i16;
  if (!(FUNCTION_TABLE_iii[HEAP32[i12 >> 2] & 1](i2, i1) | 0)) return;
  i16 = i1;
  i15 = HEAP32[i16 >> 2] | 0;
  i16 = HEAP32[i16 + 4 >> 2] | 0;
  i13 = i2;
  i14 = HEAP32[i13 + 4 >> 2] | 0;
  i17 = i1;
  HEAP32[i17 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i17 + 4 >> 2] = i14;
  i17 = i2;
  HEAP32[i17 >> 2] = i15;
  HEAP32[i17 + 4 >> 2] = i16;
  return;
 } else if ((i10 | 0) == 22) {
  __ZNSt3__218__insertion_sort_3IRPFbRKN7guetzli11HuffmanTreeES4_EPS2_EEvT0_S9_T_(i1, i2, i12);
  return;
 } else if ((i10 | 0) == 68) return;
}

function __ZN11butteraugli21ButteraugliComparator19EdgeDetectorLowFreqERKNSt3__26vectorINS2_IfNS1_9allocatorIfEEEENS3_IS5_EEEES9_PS5_(i55, i1, i2, i56) {
 i55 = i55 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i56 = i56 | 0;
 var i3 = 0, i4 = 0, i5 = 0, f6 = f0, d7 = 0.0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, f62 = f0, d63 = 0.0, d64 = 0.0, d65 = 0.0, d66 = 0.0, d67 = 0.0;
 i61 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i60 = i61 + 132 | 0;
 i59 = i61 + 120 | 0;
 i57 = i61 + 24 | 0;
 i58 = i61;
 __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEEC2ERKS5_(i60, i1);
 __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEEC2ERKS5_(i59, i2);
 i54 = i55 + 4 | 0;
 __ZN11butteraugli4BlurEjjPfdd(HEAP32[i55 >> 2] | 0, HEAP32[i54 >> 2] | 0, HEAP32[HEAP32[i60 >> 2] >> 2] | 0, 14.0, 0.0);
 __ZN11butteraugli4BlurEjjPfdd(HEAP32[i55 >> 2] | 0, HEAP32[i54 >> 2] | 0, HEAP32[HEAP32[i59 >> 2] >> 2] | 0, 14.0, 0.0);
 __ZN11butteraugli4BlurEjjPfdd(HEAP32[i55 >> 2] | 0, HEAP32[i54 >> 2] | 0, HEAP32[(HEAP32[i60 >> 2] | 0) + 12 >> 2] | 0, 14.0, 0.0);
 __ZN11butteraugli4BlurEjjPfdd(HEAP32[i55 >> 2] | 0, HEAP32[i54 >> 2] | 0, HEAP32[(HEAP32[i59 >> 2] | 0) + 12 >> 2] | 0, 14.0, 0.0);
 __ZN11butteraugli4BlurEjjPfdd(HEAP32[i55 >> 2] | 0, HEAP32[i54 >> 2] | 0, HEAP32[(HEAP32[i60 >> 2] | 0) + 24 >> 2] | 0, 14.0, 0.0);
 __ZN11butteraugli4BlurEjjPfdd(HEAP32[i55 >> 2] | 0, HEAP32[i54 >> 2] | 0, HEAP32[(HEAP32[i59 >> 2] | 0) + 24 >> 2] | 0, 14.0, 0.0);
 i1 = HEAP32[i54 >> 2] | 0;
 if (i1 >>> 0 > 8) {
  i17 = i55 + 12 | 0;
  i18 = i55 + 16 | 0;
  i19 = i57 + 8 | 0;
  i20 = i57 + 16 | 0;
  i21 = i58 + 8 | 0;
  i22 = i58 + 16 | 0;
  i23 = i57 + 24 | 0;
  i24 = i57 + 32 | 0;
  i25 = i57 + 40 | 0;
  i26 = i57 + 48 | 0;
  i27 = i57 + 56 | 0;
  i28 = i57 + 64 | 0;
  i29 = i57 + 72 | 0;
  i30 = i57 + 80 | 0;
  i31 = i57 + 88 | 0;
  i32 = i57 + 24 | 0;
  i33 = i57 + 48 | 0;
  i34 = i57 + 72 | 0;
  i35 = i57 + 8 | 0;
  i36 = i57 + 32 | 0;
  i37 = i57 + 56 | 0;
  i38 = i57 + 80 | 0;
  i39 = i57 + 16 | 0;
  i40 = i57 + 40 | 0;
  i41 = i57 + 64 | 0;
  i42 = i57 + 88 | 0;
  i43 = i57 + 24 | 0;
  i44 = i57 + 48 | 0;
  i45 = i57 + 72 | 0;
  i46 = i57 + 8 | 0;
  i47 = i57 + 32 | 0;
  i48 = i57 + 56 | 0;
  i49 = i57 + 80 | 0;
  i50 = i57 + 16 | 0;
  i51 = i57 + 40 | 0;
  i52 = i57 + 64 | 0;
  i53 = i57 + 88 | 0;
  i16 = 0;
  i3 = HEAP32[i17 >> 2] | 0;
  i2 = HEAP32[i55 >> 2] | 0;
  do {
   i15 = (i16 | 0) / (i3 | 0) | 0;
   if (i2 >>> 0 > 8) {
    i14 = 0;
    i13 = 8 / (i3 | 0) | 0;
    while (1) {
     i5 = (Math_imul(i2, i16) | 0) + i14 | 0;
     i8 = (Math_imul(HEAP32[i18 >> 2] | 0, i15) | 0) + i13 | 0;
     i9 = i5 + 8 | 0;
     i10 = HEAP32[i59 >> 2] | 0;
     i11 = HEAP32[i60 >> 2] | 0;
     i12 = (i2 << 3) + i5 | 0;
     i2 = i2 * 6 | 0;
     i1 = i5 + 6 + i2 | 0;
     i2 = i5 + -6 + i2 | 0;
     i3 = HEAP32[i10 >> 2] | 0;
     f6 = Math_fround(HEAPF32[i3 + (i5 << 2) >> 2]);
     i4 = HEAP32[i11 >> 2] | 0;
     f6 = Math_fround(f6 - Math_fround(HEAPF32[i4 + (i5 << 2) >> 2]));
     f62 = Math_fround(HEAPF32[i4 + (i9 << 2) >> 2]);
     d7 = +Math_fround(f6 + Math_fround(f62 - Math_fround(HEAPF32[i3 + (i9 << 2) >> 2])));
     if ((i14 | 0) < 8) {
      HEAPF64[i57 >> 3] = d7;
      f62 = Math_fround(HEAPF32[i4 + (i12 << 2) >> 2]);
      HEAPF64[i32 >> 3] = +Math_fround(f6 + Math_fround(f62 - Math_fround(HEAPF32[i3 + (i12 << 2) >> 2])));
      f62 = Math_fround(HEAPF32[i4 + (i1 << 2) >> 2]);
      HEAPF64[i33 >> 3] = +Math_fround(f6 + Math_fround(f62 - Math_fround(HEAPF32[i3 + (i1 << 2) >> 2])));
      HEAPF64[i34 >> 3] = 0.0;
      i4 = HEAP32[i10 + 12 >> 2] | 0;
      f62 = Math_fround(HEAPF32[i4 + (i5 << 2) >> 2]);
      i3 = HEAP32[i11 + 12 >> 2] | 0;
      f62 = Math_fround(f62 - Math_fround(HEAPF32[i3 + (i5 << 2) >> 2]));
      f6 = Math_fround(HEAPF32[i3 + (i9 << 2) >> 2]);
      HEAPF64[i35 >> 3] = +Math_fround(f62 + Math_fround(f6 - Math_fround(HEAPF32[i4 + (i9 << 2) >> 2])));
      f6 = Math_fround(HEAPF32[i3 + (i12 << 2) >> 2]);
      HEAPF64[i36 >> 3] = +Math_fround(f62 + Math_fround(f6 - Math_fround(HEAPF32[i4 + (i12 << 2) >> 2])));
      f6 = Math_fround(HEAPF32[i3 + (i1 << 2) >> 2]);
      HEAPF64[i37 >> 3] = +Math_fround(f62 + Math_fround(f6 - Math_fround(HEAPF32[i4 + (i1 << 2) >> 2])));
      HEAPF64[i38 >> 3] = 0.0;
      i10 = HEAP32[i10 + 24 >> 2] | 0;
      f6 = Math_fround(HEAPF32[i10 + (i5 << 2) >> 2]);
      i11 = HEAP32[i11 + 24 >> 2] | 0;
      f6 = Math_fround(f6 - Math_fround(HEAPF32[i11 + (i5 << 2) >> 2]));
      f62 = Math_fround(HEAPF32[i11 + (i9 << 2) >> 2]);
      HEAPF64[i39 >> 3] = +Math_fround(f6 + Math_fround(f62 - Math_fround(HEAPF32[i10 + (i9 << 2) >> 2])));
      f62 = Math_fround(HEAPF32[i11 + (i12 << 2) >> 2]);
      HEAPF64[i40 >> 3] = +Math_fround(f6 + Math_fround(f62 - Math_fround(HEAPF32[i10 + (i12 << 2) >> 2])));
      f62 = Math_fround(HEAPF32[i11 + (i1 << 2) >> 2]);
      HEAPF64[i41 >> 3] = +Math_fround(f6 + Math_fround(f62 - Math_fround(HEAPF32[i10 + (i1 << 2) >> 2])));
      HEAPF64[i42 >> 3] = 0.0;
     } else {
      HEAPF64[i57 >> 3] = d7;
      f62 = Math_fround(HEAPF32[i4 + (i12 << 2) >> 2]);
      HEAPF64[i43 >> 3] = +Math_fround(f6 + Math_fround(f62 - Math_fround(HEAPF32[i3 + (i12 << 2) >> 2])));
      f62 = Math_fround(HEAPF32[i4 + (i1 << 2) >> 2]);
      HEAPF64[i44 >> 3] = +Math_fround(f6 + Math_fround(f62 - Math_fround(HEAPF32[i3 + (i1 << 2) >> 2])));
      f62 = Math_fround(HEAPF32[i4 + (i2 << 2) >> 2]);
      HEAPF64[i45 >> 3] = +Math_fround(f6 + Math_fround(f62 - Math_fround(HEAPF32[i3 + (i2 << 2) >> 2])));
      i4 = HEAP32[i10 + 12 >> 2] | 0;
      f62 = Math_fround(HEAPF32[i4 + (i5 << 2) >> 2]);
      i3 = HEAP32[i11 + 12 >> 2] | 0;
      f62 = Math_fround(f62 - Math_fround(HEAPF32[i3 + (i5 << 2) >> 2]));
      f6 = Math_fround(HEAPF32[i3 + (i9 << 2) >> 2]);
      HEAPF64[i46 >> 3] = +Math_fround(f62 + Math_fround(f6 - Math_fround(HEAPF32[i4 + (i9 << 2) >> 2])));
      f6 = Math_fround(HEAPF32[i3 + (i12 << 2) >> 2]);
      HEAPF64[i47 >> 3] = +Math_fround(f62 + Math_fround(f6 - Math_fround(HEAPF32[i4 + (i12 << 2) >> 2])));
      f6 = Math_fround(HEAPF32[i3 + (i1 << 2) >> 2]);
      HEAPF64[i48 >> 3] = +Math_fround(f62 + Math_fround(f6 - Math_fround(HEAPF32[i4 + (i1 << 2) >> 2])));
      f6 = Math_fround(HEAPF32[i3 + (i2 << 2) >> 2]);
      HEAPF64[i49 >> 3] = +Math_fround(f62 + Math_fround(f6 - Math_fround(HEAPF32[i4 + (i2 << 2) >> 2])));
      i10 = HEAP32[i10 + 24 >> 2] | 0;
      f6 = Math_fround(HEAPF32[i10 + (i5 << 2) >> 2]);
      i11 = HEAP32[i11 + 24 >> 2] | 0;
      f6 = Math_fround(f6 - Math_fround(HEAPF32[i11 + (i5 << 2) >> 2]));
      f62 = Math_fround(HEAPF32[i11 + (i9 << 2) >> 2]);
      HEAPF64[i50 >> 3] = +Math_fround(f6 + Math_fround(f62 - Math_fround(HEAPF32[i10 + (i9 << 2) >> 2])));
      f62 = Math_fround(HEAPF32[i11 + (i12 << 2) >> 2]);
      HEAPF64[i51 >> 3] = +Math_fround(f6 + Math_fround(f62 - Math_fround(HEAPF32[i10 + (i12 << 2) >> 2])));
      f62 = Math_fround(HEAPF32[i11 + (i1 << 2) >> 2]);
      HEAPF64[i52 >> 3] = +Math_fround(f6 + Math_fround(f62 - Math_fround(HEAPF32[i10 + (i1 << 2) >> 2])));
      f62 = Math_fround(HEAPF32[i11 + (i2 << 2) >> 2]);
      HEAPF64[i53 >> 3] = +Math_fround(f6 + Math_fround(f62 - Math_fround(HEAPF32[i10 + (i2 << 2) >> 2])));
     };
     HEAP32[i58 >> 2] = 0;
     HEAP32[i58 + 4 >> 2] = 0;
     HEAP32[i58 + 8 >> 2] = 0;
     HEAP32[i58 + 12 >> 2] = 0;
     HEAP32[i58 + 16 >> 2] = 0;
     HEAP32[i58 + 20 >> 2] = 0;
     __ZN11butteraugli31XybDiffLowFreqSquaredAccumulateEdddddddPd(+HEAPF64[i57 >> 3], +HEAPF64[i19 >> 3], +HEAPF64[i20 >> 3], 0.0, 0.0, 0.0, 1.0, i58);
     d66 = +HEAPF64[i58 >> 3];
     d66 = d66 > 0.0 ? d66 : 0.0;
     d64 = +HEAPF64[i21 >> 3];
     d64 = d64 > 0.0 ? d64 : 0.0;
     d7 = +HEAPF64[i22 >> 3];
     d7 = d7 > 0.0 ? d7 : 0.0;
     HEAP32[i58 >> 2] = 0;
     HEAP32[i58 + 4 >> 2] = 0;
     HEAP32[i58 + 8 >> 2] = 0;
     HEAP32[i58 + 12 >> 2] = 0;
     HEAP32[i58 + 16 >> 2] = 0;
     HEAP32[i58 + 20 >> 2] = 0;
     __ZN11butteraugli31XybDiffLowFreqSquaredAccumulateEdddddddPd(+HEAPF64[i23 >> 3], +HEAPF64[i24 >> 3], +HEAPF64[i25 >> 3], 0.0, 0.0, 0.0, 1.0, i58);
     d67 = +HEAPF64[i58 >> 3];
     d66 = d66 < d67 ? d67 : d66;
     d67 = +HEAPF64[i21 >> 3];
     d64 = d64 < d67 ? d67 : d64;
     d67 = +HEAPF64[i22 >> 3];
     d7 = d7 < d67 ? d67 : d7;
     HEAP32[i58 >> 2] = 0;
     HEAP32[i58 + 4 >> 2] = 0;
     HEAP32[i58 + 8 >> 2] = 0;
     HEAP32[i58 + 12 >> 2] = 0;
     HEAP32[i58 + 16 >> 2] = 0;
     HEAP32[i58 + 20 >> 2] = 0;
     __ZN11butteraugli31XybDiffLowFreqSquaredAccumulateEdddddddPd(+HEAPF64[i26 >> 3], +HEAPF64[i27 >> 3], +HEAPF64[i28 >> 3], 0.0, 0.0, 0.0, 1.0, i58);
     d67 = +HEAPF64[i58 >> 3];
     d66 = d66 < d67 ? d67 : d66;
     d67 = +HEAPF64[i21 >> 3];
     d64 = d64 < d67 ? d67 : d64;
     d67 = +HEAPF64[i22 >> 3];
     d7 = d7 < d67 ? d67 : d7;
     HEAP32[i58 >> 2] = 0;
     HEAP32[i58 + 4 >> 2] = 0;
     HEAP32[i58 + 8 >> 2] = 0;
     HEAP32[i58 + 12 >> 2] = 0;
     HEAP32[i58 + 16 >> 2] = 0;
     HEAP32[i58 + 20 >> 2] = 0;
     __ZN11butteraugli31XybDiffLowFreqSquaredAccumulateEdddddddPd(+HEAPF64[i29 >> 3], +HEAPF64[i30 >> 3], +HEAPF64[i31 >> 3], 0.0, 0.0, 0.0, 1.0, i58);
     d67 = +HEAPF64[i58 >> 3];
     d65 = +HEAPF64[i21 >> 3];
     d63 = +HEAPF64[i22 >> 3];
     i1 = i8 * 3 | 0;
     i2 = HEAP32[i56 >> 2] | 0;
     i12 = i2 + (i1 << 2) | 0;
     HEAPF32[i12 >> 2] = Math_fround((d66 < d67 ? d67 : d66) * 10.0 + +Math_fround(HEAPF32[i12 >> 2]));
     i12 = i2 + (i1 + 1 << 2) | 0;
     HEAPF32[i12 >> 2] = Math_fround((d64 < d65 ? d65 : d64) * 10.0 + +Math_fround(HEAPF32[i12 >> 2]));
     i1 = i2 + (i1 + 2 << 2) | 0;
     HEAPF32[i1 >> 2] = Math_fround((d7 < d63 ? d63 : d7) * 10.0 + +Math_fround(HEAPF32[i1 >> 2]));
     i1 = HEAP32[i17 >> 2] | 0;
     i14 = i1 + i14 | 0;
     i2 = HEAP32[i55 >> 2] | 0;
     if ((i14 + 8 | 0) >>> 0 >= i2 >>> 0) break; else i13 = i13 + 1 | 0;
    }
    i3 = i1;
    i1 = HEAP32[i54 >> 2] | 0;
   }
   i16 = i3 + i16 | 0;
  } while ((i16 + 8 | 0) >>> 0 < i1 >>> 0);
 }
 i1 = HEAP32[i59 >> 2] | 0;
 if (i1 | 0) {
  i5 = i59 + 4 | 0;
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -12 | 0;
    HEAP32[i5 >> 2] = i3;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) i2 = i3; else {
     i2 = i2 + -8 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
     i2 = HEAP32[i5 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i59 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i1 = HEAP32[i60 >> 2] | 0;
 if (!i1) {
  STACKTOP = i61;
  return;
 }
 i5 = i60 + 4 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) != (i1 | 0)) {
  i3 = i2;
  while (1) {
   i2 = i3 + -12 | 0;
   HEAP32[i5 >> 2] = i2;
   i4 = HEAP32[i2 >> 2] | 0;
   if (i4) {
    i2 = i3 + -8 | 0;
    i3 = HEAP32[i2 >> 2] | 0;
    if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
    __ZdlPv(i4);
    i2 = HEAP32[i5 >> 2] | 0;
   }
   if ((i2 | 0) == (i1 | 0)) break; else i3 = i2;
  }
  i1 = HEAP32[i60 >> 2] | 0;
 }
 __ZdlPv(i1);
 STACKTOP = i61;
 return;
}

function _fmt_fp(i26, d4, i28, i11, i27, i19) {
 i26 = i26 | 0;
 d4 = +d4;
 i28 = i28 | 0;
 i11 = i11 | 0;
 i27 = i27 | 0;
 i19 = i19 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = 0.0, i10 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i29 = 0;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 560 | 0;
 i3 = i29 + 8 | 0;
 i13 = i29;
 i25 = i29 + 524 | 0;
 i24 = i25;
 i5 = i29 + 512 | 0;
 HEAP32[i13 >> 2] = 0;
 i23 = i5 + 12 | 0;
 ___DOUBLE_BITS_675(d4) | 0;
 if ((tempRet0 | 0) < 0) {
  d4 = -d4;
  i21 = 1;
  i20 = 15429;
 } else {
  i21 = (i27 & 2049 | 0) != 0 & 1;
  i20 = (i27 & 2048 | 0) == 0 ? ((i27 & 1 | 0) == 0 ? 15430 : 15435) : 15432;
 }
 ___DOUBLE_BITS_675(d4) | 0;
 i22 = tempRet0 & 2146435072;
 do if (i22 >>> 0 < 2146435072 | (i22 | 0) == 2146435072 & 0 < 0) {
  d9 = +_frexpl(d4, i13) * 2.0;
  i1 = d9 != 0.0;
  if (i1) HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + -1;
  i15 = i19 | 32;
  if ((i15 | 0) == 97) {
   i10 = i19 & 32;
   i8 = (i10 | 0) == 0 ? i20 : i20 + 9 | 0;
   i7 = i21 | 2;
   i1 = 12 - i11 | 0;
   do if (!(i11 >>> 0 > 11 | (i1 | 0) == 0)) {
    d4 = 8.0;
    do {
     i1 = i1 + -1 | 0;
     d4 = d4 * 16.0;
    } while ((i1 | 0) != 0);
    if ((HEAP8[i8 >> 0] | 0) == 45) {
     d4 = -(d4 + (-d9 - d4));
     break;
    } else {
     d4 = d9 + d4 - d4;
     break;
    }
   } else d4 = d9; while (0);
   i2 = HEAP32[i13 >> 2] | 0;
   i1 = (i2 | 0) < 0 ? 0 - i2 | 0 : i2;
   i1 = _fmt_u(i1, ((i1 | 0) < 0) << 31 >> 31, i23) | 0;
   if ((i1 | 0) == (i23 | 0)) {
    i1 = i5 + 11 | 0;
    HEAP8[i1 >> 0] = 48;
   }
   HEAP8[i1 + -1 >> 0] = (i2 >> 31 & 2) + 43;
   i6 = i1 + -2 | 0;
   HEAP8[i6 >> 0] = i19 + 15;
   i5 = (i11 | 0) < 1;
   i3 = (i27 & 8 | 0) == 0;
   i1 = i25;
   do {
    i22 = ~~d4;
    i2 = i1 + 1 | 0;
    HEAP8[i1 >> 0] = HEAPU8[15464 + i22 >> 0] | i10;
    d4 = (d4 - +(i22 | 0)) * 16.0;
    if ((i2 - i24 | 0) == 1 ? !(i3 & (i5 & d4 == 0.0)) : 0) {
     HEAP8[i2 >> 0] = 46;
     i1 = i1 + 2 | 0;
    } else i1 = i2;
   } while (d4 != 0.0);
   i22 = i1 - i24 | 0;
   i24 = i23 - i6 | 0;
   i23 = (i11 | 0) != 0 & (i22 + -2 | 0) < (i11 | 0) ? i11 + 2 | 0 : i22;
   i1 = i24 + i7 + i23 | 0;
   _pad_674(i26, 32, i28, i1, i27);
   _out(i26, i8, i7);
   _pad_674(i26, 48, i28, i1, i27 ^ 65536);
   _out(i26, i25, i22);
   _pad_674(i26, 48, i23 - i22 | 0, 0, 0);
   _out(i26, i6, i24);
   _pad_674(i26, 32, i28, i1, i27 ^ 8192);
   break;
  }
  i2 = (i11 | 0) < 0 ? 6 : i11;
  if (i1) {
   i1 = (HEAP32[i13 >> 2] | 0) + -28 | 0;
   HEAP32[i13 >> 2] = i1;
   d4 = d9 * 268435456.0;
  } else {
   d4 = d9;
   i1 = HEAP32[i13 >> 2] | 0;
  }
  i22 = (i1 | 0) < 0 ? i3 : i3 + 288 | 0;
  i3 = i22;
  do {
   i17 = ~~d4 >>> 0;
   HEAP32[i3 >> 2] = i17;
   i3 = i3 + 4 | 0;
   d4 = (d4 - +(i17 >>> 0)) * 1.0e9;
  } while (d4 != 0.0);
  if ((i1 | 0) > 0) {
   i5 = i22;
   i7 = i3;
   while (1) {
    i6 = (i1 | 0) < 29 ? i1 : 29;
    i1 = i7 + -4 | 0;
    if (i1 >>> 0 >= i5 >>> 0) {
     i3 = 0;
     do {
      i16 = _bitshift64Shl(HEAP32[i1 >> 2] | 0, 0, i6 | 0) | 0;
      i16 = _i64Add(i16 | 0, tempRet0 | 0, i3 | 0, 0) | 0;
      i17 = tempRet0;
      i14 = ___uremdi3(i16 | 0, i17 | 0, 1e9, 0) | 0;
      HEAP32[i1 >> 2] = i14;
      i3 = ___udivdi3(i16 | 0, i17 | 0, 1e9, 0) | 0;
      i1 = i1 + -4 | 0;
     } while (i1 >>> 0 >= i5 >>> 0);
     if (i3) {
      i5 = i5 + -4 | 0;
      HEAP32[i5 >> 2] = i3;
     }
    }
    i3 = i7;
    while (1) {
     if (i3 >>> 0 <= i5 >>> 0) break;
     i1 = i3 + -4 | 0;
     if (!(HEAP32[i1 >> 2] | 0)) i3 = i1; else break;
    }
    i1 = (HEAP32[i13 >> 2] | 0) - i6 | 0;
    HEAP32[i13 >> 2] = i1;
    if ((i1 | 0) > 0) i7 = i3; else break;
   }
  } else i5 = i22;
  if ((i1 | 0) < 0) {
   i11 = ((i2 + 25 | 0) / 9 | 0) + 1 | 0;
   i12 = (i15 | 0) == 102;
   do {
    i10 = 0 - i1 | 0;
    i10 = (i10 | 0) < 9 ? i10 : 9;
    if (i5 >>> 0 < i3 >>> 0) {
     i6 = (1 << i10) + -1 | 0;
     i7 = 1e9 >>> i10;
     i8 = 0;
     i1 = i5;
     do {
      i17 = HEAP32[i1 >> 2] | 0;
      HEAP32[i1 >> 2] = (i17 >>> i10) + i8;
      i8 = Math_imul(i17 & i6, i7) | 0;
      i1 = i1 + 4 | 0;
     } while (i1 >>> 0 < i3 >>> 0);
     i1 = (HEAP32[i5 >> 2] | 0) == 0 ? i5 + 4 | 0 : i5;
     if (!i8) {
      i5 = i1;
      i1 = i3;
     } else {
      HEAP32[i3 >> 2] = i8;
      i5 = i1;
      i1 = i3 + 4 | 0;
     }
    } else {
     i5 = (HEAP32[i5 >> 2] | 0) == 0 ? i5 + 4 | 0 : i5;
     i1 = i3;
    }
    i3 = i12 ? i22 : i5;
    i3 = (i1 - i3 >> 2 | 0) > (i11 | 0) ? i3 + (i11 << 2) | 0 : i1;
    i1 = (HEAP32[i13 >> 2] | 0) + i10 | 0;
    HEAP32[i13 >> 2] = i1;
   } while ((i1 | 0) < 0);
   i1 = i5;
   i11 = i3;
  } else {
   i1 = i5;
   i11 = i3;
  }
  i17 = i22;
  if (i1 >>> 0 < i11 >>> 0) {
   i3 = (i17 - i1 >> 2) * 9 | 0;
   i6 = HEAP32[i1 >> 2] | 0;
   if (i6 >>> 0 >= 10) {
    i5 = 10;
    do {
     i5 = i5 * 10 | 0;
     i3 = i3 + 1 | 0;
    } while (i6 >>> 0 >= i5 >>> 0);
   }
  } else i3 = 0;
  i12 = (i15 | 0) == 103;
  i14 = (i2 | 0) != 0;
  i5 = i2 - ((i15 | 0) != 102 ? i3 : 0) + ((i14 & i12) << 31 >> 31) | 0;
  if ((i5 | 0) < (((i11 - i17 >> 2) * 9 | 0) + -9 | 0)) {
   i5 = i5 + 9216 | 0;
   i10 = i22 + 4 + (((i5 | 0) / 9 | 0) + -1024 << 2) | 0;
   i5 = ((i5 | 0) % 9 | 0) + 1 | 0;
   if ((i5 | 0) < 9) {
    i6 = 10;
    do {
     i6 = i6 * 10 | 0;
     i5 = i5 + 1 | 0;
    } while ((i5 | 0) != 9);
   } else i6 = 10;
   i7 = HEAP32[i10 >> 2] | 0;
   i8 = (i7 >>> 0) % (i6 >>> 0) | 0;
   i5 = (i10 + 4 | 0) == (i11 | 0);
   if (!(i5 & (i8 | 0) == 0)) {
    d9 = (((i7 >>> 0) / (i6 >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;
    i16 = (i6 | 0) / 2 | 0;
    d4 = i8 >>> 0 < i16 >>> 0 ? .5 : i5 & (i8 | 0) == (i16 | 0) ? 1.0 : 1.5;
    if (i21) {
     i16 = (HEAP8[i20 >> 0] | 0) == 45;
     d4 = i16 ? -d4 : d4;
     d9 = i16 ? -d9 : d9;
    }
    i5 = i7 - i8 | 0;
    HEAP32[i10 >> 2] = i5;
    if (d9 + d4 != d9) {
     i16 = i5 + i6 | 0;
     HEAP32[i10 >> 2] = i16;
     if (i16 >>> 0 > 999999999) {
      i3 = i10;
      while (1) {
       i5 = i3 + -4 | 0;
       HEAP32[i3 >> 2] = 0;
       if (i5 >>> 0 < i1 >>> 0) {
        i1 = i1 + -4 | 0;
        HEAP32[i1 >> 2] = 0;
       }
       i16 = (HEAP32[i5 >> 2] | 0) + 1 | 0;
       HEAP32[i5 >> 2] = i16;
       if (i16 >>> 0 > 999999999) i3 = i5; else break;
      }
     } else i5 = i10;
     i3 = (i17 - i1 >> 2) * 9 | 0;
     i7 = HEAP32[i1 >> 2] | 0;
     if (i7 >>> 0 >= 10) {
      i6 = 10;
      do {
       i6 = i6 * 10 | 0;
       i3 = i3 + 1 | 0;
      } while (i7 >>> 0 >= i6 >>> 0);
     }
    } else i5 = i10;
   } else i5 = i10;
   i5 = i5 + 4 | 0;
   i5 = i11 >>> 0 > i5 >>> 0 ? i5 : i11;
   i16 = i1;
  } else {
   i5 = i11;
   i16 = i1;
  }
  i15 = i5;
  while (1) {
   if (i15 >>> 0 <= i16 >>> 0) {
    i13 = 0;
    break;
   }
   i1 = i15 + -4 | 0;
   if (!(HEAP32[i1 >> 2] | 0)) i15 = i1; else {
    i13 = 1;
    break;
   }
  }
  i11 = 0 - i3 | 0;
  do if (i12) {
   i1 = ((i14 ^ 1) & 1) + i2 | 0;
   if ((i1 | 0) > (i3 | 0) & (i3 | 0) > -5) {
    i6 = i19 + -1 | 0;
    i2 = i1 + -1 - i3 | 0;
   } else {
    i6 = i19 + -2 | 0;
    i2 = i1 + -1 | 0;
   }
   i1 = i27 & 8;
   if (!i1) {
    if (i13 ? (i18 = HEAP32[i15 + -4 >> 2] | 0, (i18 | 0) != 0) : 0) if (!((i18 >>> 0) % 10 | 0)) {
     i5 = 0;
     i1 = 10;
     do {
      i1 = i1 * 10 | 0;
      i5 = i5 + 1 | 0;
     } while (!((i18 >>> 0) % (i1 >>> 0) | 0 | 0));
    } else i5 = 0; else i5 = 9;
    i1 = ((i15 - i17 >> 2) * 9 | 0) + -9 | 0;
    if ((i6 | 32 | 0) == 102) {
     i10 = i1 - i5 | 0;
     i10 = (i10 | 0) > 0 ? i10 : 0;
     i2 = (i2 | 0) < (i10 | 0) ? i2 : i10;
     i10 = 0;
     break;
    } else {
     i10 = i1 + i3 - i5 | 0;
     i10 = (i10 | 0) > 0 ? i10 : 0;
     i2 = (i2 | 0) < (i10 | 0) ? i2 : i10;
     i10 = 0;
     break;
    }
   } else i10 = i1;
  } else {
   i6 = i19;
   i10 = i27 & 8;
  } while (0);
  i12 = i2 | i10;
  i7 = (i12 | 0) != 0 & 1;
  i8 = (i6 | 32 | 0) == 102;
  if (i8) {
   i14 = 0;
   i1 = (i3 | 0) > 0 ? i3 : 0;
  } else {
   i1 = (i3 | 0) < 0 ? i11 : i3;
   i1 = _fmt_u(i1, ((i1 | 0) < 0) << 31 >> 31, i23) | 0;
   i5 = i23;
   if ((i5 - i1 | 0) < 2) do {
    i1 = i1 + -1 | 0;
    HEAP8[i1 >> 0] = 48;
   } while ((i5 - i1 | 0) < 2);
   HEAP8[i1 + -1 >> 0] = (i3 >> 31 & 2) + 43;
   i1 = i1 + -2 | 0;
   HEAP8[i1 >> 0] = i6;
   i14 = i1;
   i1 = i5 - i1 | 0;
  }
  i1 = i21 + 1 + i2 + i7 + i1 | 0;
  _pad_674(i26, 32, i28, i1, i27);
  _out(i26, i20, i21);
  _pad_674(i26, 48, i28, i1, i27 ^ 65536);
  if (i8) {
   i6 = i16 >>> 0 > i22 >>> 0 ? i22 : i16;
   i10 = i25 + 9 | 0;
   i7 = i10;
   i8 = i25 + 8 | 0;
   i5 = i6;
   do {
    i3 = _fmt_u(HEAP32[i5 >> 2] | 0, 0, i10) | 0;
    if ((i5 | 0) == (i6 | 0)) {
     if ((i3 | 0) == (i10 | 0)) {
      HEAP8[i8 >> 0] = 48;
      i3 = i8;
     }
    } else if (i3 >>> 0 > i25 >>> 0) {
     _memset(i25 | 0, 48, i3 - i24 | 0) | 0;
     do i3 = i3 + -1 | 0; while (i3 >>> 0 > i25 >>> 0);
    }
    _out(i26, i3, i7 - i3 | 0);
    i5 = i5 + 4 | 0;
   } while (i5 >>> 0 <= i22 >>> 0);
   if (i12 | 0) _out(i26, 15480, 1);
   if (i5 >>> 0 < i15 >>> 0 & (i2 | 0) > 0) while (1) {
    i3 = _fmt_u(HEAP32[i5 >> 2] | 0, 0, i10) | 0;
    if (i3 >>> 0 > i25 >>> 0) {
     _memset(i25 | 0, 48, i3 - i24 | 0) | 0;
     do i3 = i3 + -1 | 0; while (i3 >>> 0 > i25 >>> 0);
    }
    _out(i26, i3, (i2 | 0) < 9 ? i2 : 9);
    i5 = i5 + 4 | 0;
    i3 = i2 + -9 | 0;
    if (!(i5 >>> 0 < i15 >>> 0 & (i2 | 0) > 9)) {
     i2 = i3;
     break;
    } else i2 = i3;
   }
   _pad_674(i26, 48, i2 + 9 | 0, 9, 0);
  } else {
   i12 = i13 ? i15 : i16 + 4 | 0;
   if ((i2 | 0) > -1) {
    i13 = i25 + 9 | 0;
    i10 = (i10 | 0) == 0;
    i11 = i13;
    i7 = 0 - i24 | 0;
    i8 = i25 + 8 | 0;
    i6 = i16;
    do {
     i3 = _fmt_u(HEAP32[i6 >> 2] | 0, 0, i13) | 0;
     if ((i3 | 0) == (i13 | 0)) {
      HEAP8[i8 >> 0] = 48;
      i3 = i8;
     }
     do if ((i6 | 0) == (i16 | 0)) {
      i5 = i3 + 1 | 0;
      _out(i26, i3, 1);
      if (i10 & (i2 | 0) < 1) {
       i3 = i5;
       break;
      }
      _out(i26, 15480, 1);
      i3 = i5;
     } else {
      if (i3 >>> 0 <= i25 >>> 0) break;
      _memset(i25 | 0, 48, i3 + i7 | 0) | 0;
      do i3 = i3 + -1 | 0; while (i3 >>> 0 > i25 >>> 0);
     } while (0);
     i24 = i11 - i3 | 0;
     _out(i26, i3, (i2 | 0) > (i24 | 0) ? i24 : i2);
     i2 = i2 - i24 | 0;
     i6 = i6 + 4 | 0;
    } while (i6 >>> 0 < i12 >>> 0 & (i2 | 0) > -1);
   }
   _pad_674(i26, 48, i2 + 18 | 0, 18, 0);
   _out(i26, i14, i23 - i14 | 0);
  }
  _pad_674(i26, 32, i28, i1, i27 ^ 8192);
 } else {
  i25 = (i19 & 32 | 0) != 0;
  i1 = i21 + 3 | 0;
  _pad_674(i26, 32, i28, i1, i27 & -65537);
  _out(i26, i20, i21);
  _out(i26, d4 != d4 | 0.0 != 0.0 ? (i25 ? 15456 : 15460) : i25 ? 15448 : 15452, 3);
  _pad_674(i26, 32, i28, i1, i27 ^ 8192);
 } while (0);
 STACKTOP = i29;
 return ((i1 | 0) < (i28 | 0) ? i28 : i1) | 0;
}

function _printf_core(i15, i2, i25, i26, i27) {
 i15 = i15 | 0;
 i2 = i2 | 0;
 i25 = i25 | 0;
 i26 = i26 | 0;
 i27 = i27 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i28 = 0;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i21 = i28 + 16 | 0;
 i22 = i28;
 i19 = i28 + 24 | 0;
 i23 = i28 + 8 | 0;
 i24 = i28 + 20 | 0;
 HEAP32[i21 >> 2] = i2;
 i16 = (i15 | 0) != 0;
 i17 = i19 + 40 | 0;
 i18 = i17;
 i19 = i19 + 39 | 0;
 i20 = i23 + 4 | 0;
 i3 = 0;
 i1 = 0;
 i7 = 0;
 L1 : while (1) {
  do if ((i1 | 0) > -1) if ((i3 | 0) > (2147483647 - i1 | 0)) {
   HEAP32[(___errno_location() | 0) >> 2] = 75;
   i1 = -1;
   break;
  } else {
   i1 = i3 + i1 | 0;
   break;
  } while (0);
  i3 = HEAP8[i2 >> 0] | 0;
  if (!(i3 << 24 >> 24)) {
   i14 = 87;
   break;
  } else i4 = i2;
  L9 : while (1) {
   switch (i3 << 24 >> 24) {
   case 37:
    {
     i3 = i4;
     i14 = 9;
     break L9;
    }
   case 0:
    {
     i3 = i4;
     break L9;
    }
   default:
    {}
   }
   i13 = i4 + 1 | 0;
   HEAP32[i21 >> 2] = i13;
   i3 = HEAP8[i13 >> 0] | 0;
   i4 = i13;
  }
  L12 : do if ((i14 | 0) == 9) while (1) {
   i14 = 0;
   if ((HEAP8[i4 + 1 >> 0] | 0) != 37) break L12;
   i3 = i3 + 1 | 0;
   i4 = i4 + 2 | 0;
   HEAP32[i21 >> 2] = i4;
   if ((HEAP8[i4 >> 0] | 0) == 37) i14 = 9; else break;
  } while (0);
  i3 = i3 - i2 | 0;
  if (i16) _out(i15, i2, i3);
  if (i3 | 0) {
   i2 = i4;
   continue;
  }
  i5 = i4 + 1 | 0;
  i3 = (HEAP8[i5 >> 0] | 0) + -48 | 0;
  if (i3 >>> 0 < 10) {
   i13 = (HEAP8[i4 + 2 >> 0] | 0) == 36;
   i12 = i13 ? i3 : -1;
   i7 = i13 ? 1 : i7;
   i5 = i13 ? i4 + 3 | 0 : i5;
  } else i12 = -1;
  HEAP32[i21 >> 2] = i5;
  i3 = HEAP8[i5 >> 0] | 0;
  i4 = (i3 << 24 >> 24) + -32 | 0;
  L24 : do if (i4 >>> 0 < 32) {
   i6 = 0;
   i8 = i3;
   while (1) {
    i3 = 1 << i4;
    if (!(i3 & 75913)) {
     i3 = i8;
     break L24;
    }
    i6 = i3 | i6;
    i5 = i5 + 1 | 0;
    HEAP32[i21 >> 2] = i5;
    i3 = HEAP8[i5 >> 0] | 0;
    i4 = (i3 << 24 >> 24) + -32 | 0;
    if (i4 >>> 0 >= 32) break; else i8 = i3;
   }
  } else i6 = 0; while (0);
  if (i3 << 24 >> 24 == 42) {
   i4 = i5 + 1 | 0;
   i3 = (HEAP8[i4 >> 0] | 0) + -48 | 0;
   if (i3 >>> 0 < 10 ? (HEAP8[i5 + 2 >> 0] | 0) == 36 : 0) {
    HEAP32[i27 + (i3 << 2) >> 2] = 10;
    i3 = HEAP32[i26 + ((HEAP8[i4 >> 0] | 0) + -48 << 3) >> 2] | 0;
    i7 = 1;
    i5 = i5 + 3 | 0;
   } else {
    if (i7 | 0) {
     i1 = -1;
     break;
    }
    if (i16) {
     i7 = (HEAP32[i25 >> 2] | 0) + (4 - 1) & ~(4 - 1);
     i3 = HEAP32[i7 >> 2] | 0;
     HEAP32[i25 >> 2] = i7 + 4;
     i7 = 0;
     i5 = i4;
    } else {
     i3 = 0;
     i7 = 0;
     i5 = i4;
    }
   }
   HEAP32[i21 >> 2] = i5;
   i13 = (i3 | 0) < 0;
   i3 = i13 ? 0 - i3 | 0 : i3;
   i6 = i13 ? i6 | 8192 : i6;
  } else {
   i3 = _getint(i21) | 0;
   if ((i3 | 0) < 0) {
    i1 = -1;
    break;
   }
   i5 = HEAP32[i21 >> 2] | 0;
  }
  do if ((HEAP8[i5 >> 0] | 0) == 46) {
   if ((HEAP8[i5 + 1 >> 0] | 0) != 42) {
    HEAP32[i21 >> 2] = i5 + 1;
    i4 = _getint(i21) | 0;
    i5 = HEAP32[i21 >> 2] | 0;
    break;
   }
   i8 = i5 + 2 | 0;
   i4 = (HEAP8[i8 >> 0] | 0) + -48 | 0;
   if (i4 >>> 0 < 10 ? (HEAP8[i5 + 3 >> 0] | 0) == 36 : 0) {
    HEAP32[i27 + (i4 << 2) >> 2] = 10;
    i4 = HEAP32[i26 + ((HEAP8[i8 >> 0] | 0) + -48 << 3) >> 2] | 0;
    i5 = i5 + 4 | 0;
    HEAP32[i21 >> 2] = i5;
    break;
   }
   if (i7 | 0) {
    i1 = -1;
    break L1;
   }
   if (i16) {
    i13 = (HEAP32[i25 >> 2] | 0) + (4 - 1) & ~(4 - 1);
    i4 = HEAP32[i13 >> 2] | 0;
    HEAP32[i25 >> 2] = i13 + 4;
   } else i4 = 0;
   HEAP32[i21 >> 2] = i8;
   i5 = i8;
  } else i4 = -1; while (0);
  i11 = 0;
  while (1) {
   if (((HEAP8[i5 >> 0] | 0) + -65 | 0) >>> 0 > 57) {
    i1 = -1;
    break L1;
   }
   i13 = i5 + 1 | 0;
   HEAP32[i21 >> 2] = i13;
   i8 = HEAP8[(HEAP8[i5 >> 0] | 0) + -65 + (14948 + (i11 * 58 | 0)) >> 0] | 0;
   i9 = i8 & 255;
   if ((i9 + -1 | 0) >>> 0 < 8) {
    i11 = i9;
    i5 = i13;
   } else break;
  }
  if (!(i8 << 24 >> 24)) {
   i1 = -1;
   break;
  }
  i10 = (i12 | 0) > -1;
  do if (i8 << 24 >> 24 == 19) if (i10) {
   i1 = -1;
   break L1;
  } else i14 = 49; else {
   if (i10) {
    HEAP32[i27 + (i12 << 2) >> 2] = i9;
    i10 = i26 + (i12 << 3) | 0;
    i12 = HEAP32[i10 + 4 >> 2] | 0;
    i14 = i22;
    HEAP32[i14 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i14 + 4 >> 2] = i12;
    i14 = 49;
    break;
   }
   if (!i16) {
    i1 = 0;
    break L1;
   }
   _pop_arg(i22, i9, i25);
  } while (0);
  if ((i14 | 0) == 49 ? (i14 = 0, !i16) : 0) {
   i3 = 0;
   i2 = i13;
   continue;
  }
  i5 = HEAP8[i5 >> 0] | 0;
  i5 = (i11 | 0) != 0 & (i5 & 15 | 0) == 3 ? i5 & -33 : i5;
  i10 = i6 & -65537;
  i12 = (i6 & 8192 | 0) == 0 ? i6 : i10;
  L71 : do switch (i5 | 0) {
  case 110:
   switch ((i11 & 255) << 24 >> 24) {
   case 0:
    {
     HEAP32[HEAP32[i22 >> 2] >> 2] = i1;
     i3 = 0;
     i2 = i13;
     continue L1;
    }
   case 1:
    {
     HEAP32[HEAP32[i22 >> 2] >> 2] = i1;
     i3 = 0;
     i2 = i13;
     continue L1;
    }
   case 2:
    {
     i3 = HEAP32[i22 >> 2] | 0;
     HEAP32[i3 >> 2] = i1;
     HEAP32[i3 + 4 >> 2] = ((i1 | 0) < 0) << 31 >> 31;
     i3 = 0;
     i2 = i13;
     continue L1;
    }
   case 3:
    {
     HEAP16[HEAP32[i22 >> 2] >> 1] = i1;
     i3 = 0;
     i2 = i13;
     continue L1;
    }
   case 4:
    {
     HEAP8[HEAP32[i22 >> 2] >> 0] = i1;
     i3 = 0;
     i2 = i13;
     continue L1;
    }
   case 6:
    {
     HEAP32[HEAP32[i22 >> 2] >> 2] = i1;
     i3 = 0;
     i2 = i13;
     continue L1;
    }
   case 7:
    {
     i3 = HEAP32[i22 >> 2] | 0;
     HEAP32[i3 >> 2] = i1;
     HEAP32[i3 + 4 >> 2] = ((i1 | 0) < 0) << 31 >> 31;
     i3 = 0;
     i2 = i13;
     continue L1;
    }
   default:
    {
     i3 = 0;
     i2 = i13;
     continue L1;
    }
   }
  case 112:
   {
    i5 = 120;
    i4 = i4 >>> 0 > 8 ? i4 : 8;
    i2 = i12 | 8;
    i14 = 61;
    break;
   }
  case 88:
  case 120:
   {
    i2 = i12;
    i14 = 61;
    break;
   }
  case 111:
   {
    i5 = i22;
    i2 = HEAP32[i5 >> 2] | 0;
    i5 = HEAP32[i5 + 4 >> 2] | 0;
    i9 = _fmt_o(i2, i5, i17) | 0;
    i10 = i18 - i9 | 0;
    i6 = 0;
    i8 = 15412;
    i4 = (i12 & 8 | 0) == 0 | (i4 | 0) > (i10 | 0) ? i4 : i10 + 1 | 0;
    i10 = i12;
    i14 = 67;
    break;
   }
  case 105:
  case 100:
   {
    i5 = i22;
    i2 = HEAP32[i5 >> 2] | 0;
    i5 = HEAP32[i5 + 4 >> 2] | 0;
    if ((i5 | 0) < 0) {
     i2 = _i64Subtract(0, 0, i2 | 0, i5 | 0) | 0;
     i5 = tempRet0;
     i6 = i22;
     HEAP32[i6 >> 2] = i2;
     HEAP32[i6 + 4 >> 2] = i5;
     i6 = 1;
     i8 = 15412;
     i14 = 66;
     break L71;
    } else {
     i6 = (i12 & 2049 | 0) != 0 & 1;
     i8 = (i12 & 2048 | 0) == 0 ? ((i12 & 1 | 0) == 0 ? 15412 : 15414) : 15413;
     i14 = 66;
     break L71;
    }
   }
  case 117:
   {
    i5 = i22;
    i6 = 0;
    i8 = 15412;
    i2 = HEAP32[i5 >> 2] | 0;
    i5 = HEAP32[i5 + 4 >> 2] | 0;
    i14 = 66;
    break;
   }
  case 99:
   {
    HEAP8[i19 >> 0] = HEAP32[i22 >> 2];
    i2 = i19;
    i6 = 0;
    i8 = 15412;
    i9 = i17;
    i5 = 1;
    i4 = i10;
    break;
   }
  case 109:
   {
    i5 = _strerror(HEAP32[(___errno_location() | 0) >> 2] | 0) | 0;
    i14 = 71;
    break;
   }
  case 115:
   {
    i5 = HEAP32[i22 >> 2] | 0;
    i5 = i5 | 0 ? i5 : 15422;
    i14 = 71;
    break;
   }
  case 67:
   {
    HEAP32[i23 >> 2] = HEAP32[i22 >> 2];
    HEAP32[i20 >> 2] = 0;
    HEAP32[i22 >> 2] = i23;
    i9 = -1;
    i5 = i23;
    i14 = 75;
    break;
   }
  case 83:
   {
    i2 = HEAP32[i22 >> 2] | 0;
    if (!i4) {
     _pad_674(i15, 32, i3, 0, i12);
     i2 = 0;
     i14 = 84;
    } else {
     i9 = i4;
     i5 = i2;
     i14 = 75;
    }
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
    i3 = _fmt_fp(i15, +HEAPF64[i22 >> 3], i3, i4, i12, i5) | 0;
    i2 = i13;
    continue L1;
   }
  default:
   {
    i6 = 0;
    i8 = 15412;
    i9 = i17;
    i5 = i4;
    i4 = i12;
   }
  } while (0);
  L95 : do if ((i14 | 0) == 61) {
   i12 = i22;
   i11 = HEAP32[i12 >> 2] | 0;
   i12 = HEAP32[i12 + 4 >> 2] | 0;
   i9 = _fmt_x(i11, i12, i17, i5 & 32) | 0;
   i8 = (i2 & 8 | 0) == 0 | (i11 | 0) == 0 & (i12 | 0) == 0;
   i6 = i8 ? 0 : 2;
   i8 = i8 ? 15412 : 15412 + (i5 >> 4) | 0;
   i10 = i2;
   i2 = i11;
   i5 = i12;
   i14 = 67;
  } else if ((i14 | 0) == 66) {
   i9 = _fmt_u(i2, i5, i17) | 0;
   i10 = i12;
   i14 = 67;
  } else if ((i14 | 0) == 71) {
   i14 = 0;
   i12 = _memchr(i5, 0, i4) | 0;
   i11 = (i12 | 0) == 0;
   i2 = i5;
   i6 = 0;
   i8 = 15412;
   i9 = i11 ? i5 + i4 | 0 : i12;
   i5 = i11 ? i4 : i12 - i5 | 0;
   i4 = i10;
  } else if ((i14 | 0) == 75) {
   i14 = 0;
   i8 = i5;
   i2 = 0;
   i4 = 0;
   while (1) {
    i6 = HEAP32[i8 >> 2] | 0;
    if (!i6) break;
    i4 = _wctomb(i24, i6) | 0;
    if ((i4 | 0) < 0 | i4 >>> 0 > (i9 - i2 | 0) >>> 0) break;
    i2 = i4 + i2 | 0;
    if (i9 >>> 0 > i2 >>> 0) i8 = i8 + 4 | 0; else break;
   }
   if ((i4 | 0) < 0) {
    i1 = -1;
    break L1;
   }
   _pad_674(i15, 32, i3, i2, i12);
   if (!i2) {
    i2 = 0;
    i14 = 84;
   } else {
    i6 = 0;
    while (1) {
     i4 = HEAP32[i5 >> 2] | 0;
     if (!i4) {
      i14 = 84;
      break L95;
     }
     i4 = _wctomb(i24, i4) | 0;
     i6 = i4 + i6 | 0;
     if ((i6 | 0) > (i2 | 0)) {
      i14 = 84;
      break L95;
     }
     _out(i15, i24, i4);
     if (i6 >>> 0 >= i2 >>> 0) {
      i14 = 84;
      break;
     } else i5 = i5 + 4 | 0;
    }
   }
  } while (0);
  if ((i14 | 0) == 67) {
   i14 = 0;
   i5 = (i2 | 0) != 0 | (i5 | 0) != 0;
   i12 = (i4 | 0) != 0 | i5;
   i5 = ((i5 ^ 1) & 1) + (i18 - i9) | 0;
   i2 = i12 ? i9 : i17;
   i9 = i17;
   i5 = i12 ? ((i4 | 0) > (i5 | 0) ? i4 : i5) : i4;
   i4 = (i4 | 0) > -1 ? i10 & -65537 : i10;
  } else if ((i14 | 0) == 84) {
   i14 = 0;
   _pad_674(i15, 32, i3, i2, i12 ^ 8192);
   i3 = (i3 | 0) > (i2 | 0) ? i3 : i2;
   i2 = i13;
   continue;
  }
  i11 = i9 - i2 | 0;
  i10 = (i5 | 0) < (i11 | 0) ? i11 : i5;
  i12 = i10 + i6 | 0;
  i3 = (i3 | 0) < (i12 | 0) ? i12 : i3;
  _pad_674(i15, 32, i3, i12, i4);
  _out(i15, i8, i6);
  _pad_674(i15, 48, i3, i12, i4 ^ 65536);
  _pad_674(i15, 48, i10, i11, 0);
  _out(i15, i2, i11);
  _pad_674(i15, 32, i3, i12, i4 ^ 8192);
  i2 = i13;
 }
 L114 : do if ((i14 | 0) == 87) if (!i15) if (!i7) i1 = 0; else {
  i1 = 1;
  while (1) {
   i2 = HEAP32[i27 + (i1 << 2) >> 2] | 0;
   if (!i2) break;
   _pop_arg(i26 + (i1 << 3) | 0, i2, i25);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= 10) {
    i1 = 1;
    break L114;
   }
  }
  while (1) {
   if (HEAP32[i27 + (i1 << 2) >> 2] | 0) {
    i1 = -1;
    break L114;
   }
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= 10) {
    i1 = 1;
    break;
   }
  }
 } while (0);
 STACKTOP = i28;
 return i1 | 0;
}

function __ZN11butteraugli21ButteraugliComparator25DiffmapOpsinDynamicsImageERKNSt3__26vectorINS_5ImageIfEENS1_9allocatorIS4_EEEES9_RS4_(i9, i7, i8, i11) {
 i9 = i9 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i11 = i11 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i10 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i15 = i26;
 i25 = i26 + 116 | 0;
 i24 = i26 + 104 | 0;
 i23 = i26 + 92 | 0;
 i22 = i26 + 80 | 0;
 i21 = i26 + 68 | 0;
 i20 = i26 + 56 | 0;
 i18 = i26 + 44 | 0;
 i17 = i26 + 32 | 0;
 i16 = i26 + 20 | 0;
 i14 = i26 + 8 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i10 = i9 + 4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 i2 = (i1 << 2) + 95 | 0;
 i5 = i2 & -64;
 i5 = (i2 & 1984 | 0) == 0 ? i5 + 64 | 0 : i5;
 i2 = _malloc((Math_imul(i5, i4) | 0) + 64 | 0) | 0;
 do if (i2) {
  i3 = i2;
  if (!(i3 & 3)) {
   i6 = i2 + 64 + (0 - (i3 & 63)) | 0;
   i19 = i6 + -4 | 0;
   HEAP8[i19 >> 0] = i2;
   HEAP8[i19 + 1 >> 0] = i2 >> 8;
   HEAP8[i19 + 2 >> 0] = i2 >> 16;
   HEAP8[i19 + 3 >> 0] = i2 >> 24;
   break;
  } else ___assert_fail(10300, 10333, 59, 10363);
 } else i6 = 0; while (0);
 HEAP32[i11 >> 2] = i1;
 i13 = i11 + 4 | 0;
 HEAP32[i13 >> 2] = i4;
 i12 = i11 + 8 | 0;
 HEAP32[i12 >> 2] = i5;
 i2 = i11 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 i2 = i11 + 16 | 0;
 if (i3) {
  FUNCTION_TABLE_vi[HEAP32[i2 >> 2] & 15](i3);
  i1 = HEAP32[i9 >> 2] | 0;
 }
 HEAP32[i2 >> 2] = 10;
 if (i1 >>> 0 < 8) {
  STACKTOP = i26;
  return;
 }
 if ((HEAP32[i10 >> 2] | 0) >>> 0 < 8) {
  STACKTOP = i26;
  return;
 }
 __ZN11butteraugliL16PackedFromPlanesIfEENSt3__26vectorINS2_IT_NS1_9allocatorIS3_EEEENS4_IS6_EEEERKNS2_INS_5ImageIS3_EENS4_ISA_EEEE(i25, i7);
 __ZN11butteraugliL16PackedFromPlanesIfEENSt3__26vectorINS2_IT_NS1_9allocatorIS3_EEEENS4_IS6_EEEERKNS2_INS_5ImageIS3_EENS4_ISA_EEEE(i24, i8);
 __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEEC2ERKS5_(i23, i25);
 __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEEC2ERKS5_(i22, i24);
 __ZN11butteraugli23MaskHighIntensityChangeEjjRKNSt3__26vectorINS1_IfNS0_9allocatorIfEEEENS2_IS4_EEEES8_RS6_S9_(HEAP32[i9 >> 2] | 0, HEAP32[i10 >> 2] | 0, i23, i22, i25, i24);
 if ((HEAP32[i9 >> 2] | 0) >>> 0 <= 7) ___assert_fail(10510, 10333, 1043, 10522);
 i1 = HEAP32[i25 >> 2] | 0;
 i2 = HEAP32[i9 + 8 >> 2] | 0;
 i3 = HEAP32[i24 >> 2] | 0;
 if (((HEAP32[i1 + 4 >> 2] | 0) - (HEAP32[i1 >> 2] | 0) >> 2 | 0) != (i2 | 0)) ___assert_fail(10548, 10333, 1045, 10522);
 if (((HEAP32[i3 + 4 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) >> 2 | 0) != (i2 | 0)) ___assert_fail(10578, 10333, 1046, 10522);
 if (((HEAP32[i1 + 16 >> 2] | 0) - (HEAP32[i1 + 12 >> 2] | 0) >> 2 | 0) != (i2 | 0)) ___assert_fail(10548, 10333, 1045, 10522);
 if (((HEAP32[i3 + 16 >> 2] | 0) - (HEAP32[i3 + 12 >> 2] | 0) >> 2 | 0) != (i2 | 0)) ___assert_fail(10578, 10333, 1046, 10522);
 if (((HEAP32[i1 + 28 >> 2] | 0) - (HEAP32[i1 + 24 >> 2] | 0) >> 2 | 0) != (i2 | 0)) ___assert_fail(10548, 10333, 1045, 10522);
 if (((HEAP32[i3 + 28 >> 2] | 0) - (HEAP32[i3 + 24 >> 2] | 0) >> 2 | 0) != (i2 | 0)) ___assert_fail(10578, 10333, 1046, 10522);
 HEAP32[i21 >> 2] = 0;
 i19 = i21 + 4 | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i21 + 8 >> 2] = 0;
 i2 = __Znwj(36) | 0;
 HEAP32[i21 >> 2] = i2;
 i1 = i2 + 36 | 0;
 HEAP32[i21 + 8 >> 2] = i1;
 i3 = i2 + 36 | 0;
 do {
  HEAP32[i2 >> 2] = 0;
  i2 = i2 + 4 | 0;
 } while ((i2 | 0) < (i3 | 0));
 HEAP32[i19 >> 2] = i1;
 HEAP32[i20 >> 2] = 0;
 i8 = i20 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 i2 = __Znwj(36) | 0;
 HEAP32[i20 >> 2] = i2;
 i1 = i2 + 36 | 0;
 HEAP32[i20 + 8 >> 2] = i1;
 i3 = i2 + 36 | 0;
 do {
  HEAP32[i2 >> 2] = 0;
  i2 = i2 + 4 | 0;
 } while ((i2 | 0) < (i3 | 0));
 HEAP32[i8 >> 2] = i1;
 i6 = i9 + 16 | 0;
 i7 = i9 + 20 | 0;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i18, Math_imul((HEAP32[i6 >> 2] | 0) * 3 | 0, HEAP32[i7 >> 2] | 0) | 0);
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i17, Math_imul((HEAP32[i6 >> 2] | 0) * 3 | 0, HEAP32[i7 >> 2] | 0) | 0);
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i16, Math_imul((HEAP32[i6 >> 2] | 0) * 3 | 0, HEAP32[i7 >> 2] | 0) | 0);
 HEAP32[i14 >> 2] = 0;
 i7 = i14 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i14 + 8 >> 2] = 0;
 __ZN11butteraugli21ButteraugliComparator12BlockDiffMapERKNSt3__26vectorINS2_IfNS1_9allocatorIfEEEENS3_IS5_EEEES9_PS5_SA_(i9, i25, i24, i18, i17);
 __ZN11butteraugli21ButteraugliComparator15EdgeDetectorMapERKNSt3__26vectorINS2_IfNS1_9allocatorIfEEEENS3_IS5_EEEES9_PS5_(i9, i25, i24, i16);
 __ZN11butteraugli21ButteraugliComparator19EdgeDetectorLowFreqERKNSt3__26vectorINS2_IfNS1_9allocatorIfEEEENS3_IS5_EEEES9_PS5_(i9, i25, i24, i17);
 __ZN11butteraugli4MaskERKNSt3__26vectorINS1_IfNS0_9allocatorIfEEEENS2_IS4_EEEES8_jjPS6_S9_(i25, i24, HEAP32[i9 >> 2] | 0, HEAP32[i10 >> 2] | 0, i21, i20);
 __ZN11butteraugli21ButteraugliComparator15CombineChannelsERKNSt3__26vectorINS2_IfNS1_9allocatorIfEEEENS3_IS5_EEEES9_RKS5_SB_SB_PS5_(i9, i21, i20, i18, i17, i16, i14);
 __ZN11butteraugli16CalculateDiffmapEjjiPNSt3__26vectorIfNS0_9allocatorIfEEEE(HEAP32[i9 >> 2] | 0, HEAP32[i10 >> 2] | 0, HEAP32[i9 + 12 >> 2] | 0, i14);
 i6 = HEAP32[i11 >> 2] | 0;
 i5 = HEAP32[i13 >> 2] | 0;
 i1 = HEAP32[i14 >> 2] | 0;
 if (((HEAP32[i7 >> 2] | 0) - i1 >> 2 | 0) != (Math_imul(i5, i6) | 0)) ___assert_fail(14904, 14817, 361, 14933);
 if (i5) {
  i3 = i11 + 12 | 0;
  i4 = i6 << 2;
  _memcpy(HEAP32[i3 >> 2] | 0, i1 | 0, i4 | 0) | 0;
  L42 : do if ((i5 | 0) != 1) {
   i1 = 1;
   while (1) {
    i2 = HEAP32[i13 >> 2] | 0;
    if (i2 >>> 0 <= i1 >>> 0) break;
    i11 = (HEAP32[i14 >> 2] | 0) + ((Math_imul(i1, i6) | 0) << 2) | 0;
    _memcpy((HEAP32[i3 >> 2] | 0) + (Math_imul(HEAP32[i12 >> 2] | 0, i1) | 0) | 0, i11 | 0, i4 | 0) | 0;
    i1 = i1 + 1 | 0;
    if (i1 >>> 0 >= i5 >>> 0) break L42;
   }
   HEAP32[i15 >> 2] = i1;
   HEAP32[i15 + 4 >> 2] = i2;
   _printf(14766, i15) | 0;
   _abort();
  } while (0);
  i1 = HEAP32[i14 >> 2] | 0;
 }
 if (i1 | 0) {
  i2 = HEAP32[i7 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) HEAP32[i7 >> 2] = i2 + (~((i2 + -4 - i1 | 0) >>> 2) << 2);
  __ZdlPv(i1);
 }
 i3 = HEAP32[i16 >> 2] | 0;
 if (i3 | 0) {
  i1 = i16 + 4 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
  __ZdlPv(i3);
 }
 i3 = HEAP32[i17 >> 2] | 0;
 if (i3 | 0) {
  i1 = i17 + 4 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
  __ZdlPv(i3);
 }
 i3 = HEAP32[i18 >> 2] | 0;
 if (i3 | 0) {
  i1 = i18 + 4 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
  __ZdlPv(i3);
 }
 i1 = HEAP32[i20 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i8 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -12 | 0;
    HEAP32[i8 >> 2] = i3;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) i2 = i3; else {
     i2 = i2 + -8 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
     i2 = HEAP32[i8 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i20 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i1 = HEAP32[i21 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i19 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -12 | 0;
    HEAP32[i19 >> 2] = i3;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) i2 = i3; else {
     i2 = i2 + -8 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
     i2 = HEAP32[i19 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i21 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i1 = HEAP32[i22 >> 2] | 0;
 if (i1 | 0) {
  i5 = i22 + 4 | 0;
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -12 | 0;
    HEAP32[i5 >> 2] = i3;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) i2 = i3; else {
     i2 = i2 + -8 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
     i2 = HEAP32[i5 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i22 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i1 = HEAP32[i23 >> 2] | 0;
 if (i1 | 0) {
  i5 = i23 + 4 | 0;
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -12 | 0;
    HEAP32[i5 >> 2] = i3;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) i2 = i3; else {
     i2 = i2 + -8 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
     i2 = HEAP32[i5 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i23 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i1 = HEAP32[i24 >> 2] | 0;
 if (i1 | 0) {
  i5 = i24 + 4 | 0;
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -12 | 0;
    HEAP32[i5 >> 2] = i3;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) i2 = i3; else {
     i2 = i2 + -8 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
     i2 = HEAP32[i5 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i24 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i1 = HEAP32[i25 >> 2] | 0;
 if (i1 | 0) {
  i5 = i25 + 4 | 0;
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -12 | 0;
    HEAP32[i5 >> 2] = i3;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) i2 = i3; else {
     i2 = i2 + -8 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
     i2 = HEAP32[i5 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i25 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 STACKTOP = i26;
 return;
}

function _free(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 if (!i1) return;
 i3 = i1 + -8 | 0;
 i7 = HEAP32[11050] | 0;
 if (i3 >>> 0 < i7 >>> 0) _abort();
 i1 = HEAP32[i1 + -4 >> 2] | 0;
 i2 = i1 & 3;
 if ((i2 | 0) == 1) _abort();
 i4 = i1 & -8;
 i14 = i3 + i4 | 0;
 L10 : do if (!(i1 & 1)) {
  i1 = HEAP32[i3 >> 2] | 0;
  if (!i2) return;
  i10 = i3 + (0 - i1) | 0;
  i9 = i1 + i4 | 0;
  if (i10 >>> 0 < i7 >>> 0) _abort();
  if ((i10 | 0) == (HEAP32[11051] | 0)) {
   i1 = i14 + 4 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 & 3 | 0) != 3) {
    i17 = i10;
    i5 = i9;
    i12 = i10;
    break;
   }
   HEAP32[11048] = i9;
   HEAP32[i1 >> 2] = i2 & -2;
   HEAP32[i10 + 4 >> 2] = i9 | 1;
   HEAP32[i10 + i9 >> 2] = i9;
   return;
  }
  i4 = i1 >>> 3;
  if (i1 >>> 0 < 256) {
   i2 = HEAP32[i10 + 8 >> 2] | 0;
   i3 = HEAP32[i10 + 12 >> 2] | 0;
   i1 = 44224 + (i4 << 1 << 2) | 0;
   if ((i2 | 0) != (i1 | 0)) {
    if (i2 >>> 0 < i7 >>> 0) _abort();
    if ((HEAP32[i2 + 12 >> 2] | 0) != (i10 | 0)) _abort();
   }
   if ((i3 | 0) == (i2 | 0)) {
    HEAP32[11046] = HEAP32[11046] & ~(1 << i4);
    i17 = i10;
    i5 = i9;
    i12 = i10;
    break;
   }
   if ((i3 | 0) != (i1 | 0)) {
    if (i3 >>> 0 < i7 >>> 0) _abort();
    i1 = i3 + 8 | 0;
    if ((HEAP32[i1 >> 2] | 0) == (i10 | 0)) i6 = i1; else _abort();
   } else i6 = i3 + 8 | 0;
   HEAP32[i2 + 12 >> 2] = i3;
   HEAP32[i6 >> 2] = i2;
   i17 = i10;
   i5 = i9;
   i12 = i10;
   break;
  }
  i6 = HEAP32[i10 + 24 >> 2] | 0;
  i3 = HEAP32[i10 + 12 >> 2] | 0;
  do if ((i3 | 0) == (i10 | 0)) {
   i3 = i10 + 16 | 0;
   i2 = i3 + 4 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   if (!i1) {
    i1 = HEAP32[i3 >> 2] | 0;
    if (!i1) {
     i8 = 0;
     break;
    } else i2 = i3;
   }
   while (1) {
    i3 = i1 + 20 | 0;
    i4 = HEAP32[i3 >> 2] | 0;
    if (i4 | 0) {
     i1 = i4;
     i2 = i3;
     continue;
    }
    i3 = i1 + 16 | 0;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) break; else {
     i1 = i4;
     i2 = i3;
    }
   }
   if (i2 >>> 0 < i7 >>> 0) _abort(); else {
    HEAP32[i2 >> 2] = 0;
    i8 = i1;
    break;
   }
  } else {
   i4 = HEAP32[i10 + 8 >> 2] | 0;
   if (i4 >>> 0 < i7 >>> 0) _abort();
   i1 = i4 + 12 | 0;
   if ((HEAP32[i1 >> 2] | 0) != (i10 | 0)) _abort();
   i2 = i3 + 8 | 0;
   if ((HEAP32[i2 >> 2] | 0) == (i10 | 0)) {
    HEAP32[i1 >> 2] = i3;
    HEAP32[i2 >> 2] = i4;
    i8 = i3;
    break;
   } else _abort();
  } while (0);
  if (i6) {
   i1 = HEAP32[i10 + 28 >> 2] | 0;
   i2 = 44488 + (i1 << 2) | 0;
   do if ((i10 | 0) == (HEAP32[i2 >> 2] | 0)) {
    HEAP32[i2 >> 2] = i8;
    if (!i8) {
     HEAP32[11047] = HEAP32[11047] & ~(1 << i1);
     i17 = i10;
     i5 = i9;
     i12 = i10;
     break L10;
    }
   } else if (i6 >>> 0 >= (HEAP32[11050] | 0) >>> 0) {
    HEAP32[i6 + 16 + (((HEAP32[i6 + 16 >> 2] | 0) != (i10 | 0) & 1) << 2) >> 2] = i8;
    if (!i8) {
     i17 = i10;
     i5 = i9;
     i12 = i10;
     break L10;
    } else break;
   } else _abort(); while (0);
   i3 = HEAP32[11050] | 0;
   if (i8 >>> 0 < i3 >>> 0) _abort();
   HEAP32[i8 + 24 >> 2] = i6;
   i1 = i10 + 16 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   do if (i2 | 0) if (i2 >>> 0 < i3 >>> 0) _abort(); else {
    HEAP32[i8 + 16 >> 2] = i2;
    HEAP32[i2 + 24 >> 2] = i8;
    break;
   } while (0);
   i1 = HEAP32[i1 + 4 >> 2] | 0;
   if (i1) if (i1 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort(); else {
    HEAP32[i8 + 20 >> 2] = i1;
    HEAP32[i1 + 24 >> 2] = i8;
    i17 = i10;
    i5 = i9;
    i12 = i10;
    break;
   } else {
    i17 = i10;
    i5 = i9;
    i12 = i10;
   }
  } else {
   i17 = i10;
   i5 = i9;
   i12 = i10;
  }
 } else {
  i17 = i3;
  i5 = i4;
  i12 = i3;
 } while (0);
 if (i12 >>> 0 >= i14 >>> 0) _abort();
 i1 = i14 + 4 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if (!(i2 & 1)) _abort();
 if (!(i2 & 2)) {
  i1 = HEAP32[11051] | 0;
  if ((i14 | 0) == (HEAP32[11052] | 0)) {
   i16 = (HEAP32[11049] | 0) + i5 | 0;
   HEAP32[11049] = i16;
   HEAP32[11052] = i17;
   HEAP32[i17 + 4 >> 2] = i16 | 1;
   if ((i17 | 0) != (i1 | 0)) return;
   HEAP32[11051] = 0;
   HEAP32[11048] = 0;
   return;
  }
  if ((i14 | 0) == (i1 | 0)) {
   i16 = (HEAP32[11048] | 0) + i5 | 0;
   HEAP32[11048] = i16;
   HEAP32[11051] = i12;
   HEAP32[i17 + 4 >> 2] = i16 | 1;
   HEAP32[i12 + i16 >> 2] = i16;
   return;
  }
  i5 = (i2 & -8) + i5 | 0;
  i4 = i2 >>> 3;
  L108 : do if (i2 >>> 0 >= 256) {
   i6 = HEAP32[i14 + 24 >> 2] | 0;
   i1 = HEAP32[i14 + 12 >> 2] | 0;
   do if ((i1 | 0) == (i14 | 0)) {
    i3 = i14 + 16 | 0;
    i2 = i3 + 4 | 0;
    i1 = HEAP32[i2 >> 2] | 0;
    if (!i1) {
     i1 = HEAP32[i3 >> 2] | 0;
     if (!i1) {
      i13 = 0;
      break;
     } else i2 = i3;
    }
    while (1) {
     i3 = i1 + 20 | 0;
     i4 = HEAP32[i3 >> 2] | 0;
     if (i4 | 0) {
      i1 = i4;
      i2 = i3;
      continue;
     }
     i3 = i1 + 16 | 0;
     i4 = HEAP32[i3 >> 2] | 0;
     if (!i4) break; else {
      i1 = i4;
      i2 = i3;
     }
    }
    if (i2 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort(); else {
     HEAP32[i2 >> 2] = 0;
     i13 = i1;
     break;
    }
   } else {
    i2 = HEAP32[i14 + 8 >> 2] | 0;
    if (i2 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort();
    i3 = i2 + 12 | 0;
    if ((HEAP32[i3 >> 2] | 0) != (i14 | 0)) _abort();
    i4 = i1 + 8 | 0;
    if ((HEAP32[i4 >> 2] | 0) == (i14 | 0)) {
     HEAP32[i3 >> 2] = i1;
     HEAP32[i4 >> 2] = i2;
     i13 = i1;
     break;
    } else _abort();
   } while (0);
   if (i6 | 0) {
    i1 = HEAP32[i14 + 28 >> 2] | 0;
    i2 = 44488 + (i1 << 2) | 0;
    do if ((i14 | 0) == (HEAP32[i2 >> 2] | 0)) {
     HEAP32[i2 >> 2] = i13;
     if (!i13) {
      HEAP32[11047] = HEAP32[11047] & ~(1 << i1);
      break L108;
     }
    } else if (i6 >>> 0 >= (HEAP32[11050] | 0) >>> 0) {
     HEAP32[i6 + 16 + (((HEAP32[i6 + 16 >> 2] | 0) != (i14 | 0) & 1) << 2) >> 2] = i13;
     if (!i13) break L108; else break;
    } else _abort(); while (0);
    i3 = HEAP32[11050] | 0;
    if (i13 >>> 0 < i3 >>> 0) _abort();
    HEAP32[i13 + 24 >> 2] = i6;
    i1 = i14 + 16 | 0;
    i2 = HEAP32[i1 >> 2] | 0;
    do if (i2 | 0) if (i2 >>> 0 < i3 >>> 0) _abort(); else {
     HEAP32[i13 + 16 >> 2] = i2;
     HEAP32[i2 + 24 >> 2] = i13;
     break;
    } while (0);
    i1 = HEAP32[i1 + 4 >> 2] | 0;
    if (i1 | 0) if (i1 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort(); else {
     HEAP32[i13 + 20 >> 2] = i1;
     HEAP32[i1 + 24 >> 2] = i13;
     break;
    }
   }
  } else {
   i2 = HEAP32[i14 + 8 >> 2] | 0;
   i3 = HEAP32[i14 + 12 >> 2] | 0;
   i1 = 44224 + (i4 << 1 << 2) | 0;
   if ((i2 | 0) != (i1 | 0)) {
    if (i2 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort();
    if ((HEAP32[i2 + 12 >> 2] | 0) != (i14 | 0)) _abort();
   }
   if ((i3 | 0) == (i2 | 0)) {
    HEAP32[11046] = HEAP32[11046] & ~(1 << i4);
    break;
   }
   if ((i3 | 0) != (i1 | 0)) {
    if (i3 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort();
    i1 = i3 + 8 | 0;
    if ((HEAP32[i1 >> 2] | 0) == (i14 | 0)) i11 = i1; else _abort();
   } else i11 = i3 + 8 | 0;
   HEAP32[i2 + 12 >> 2] = i3;
   HEAP32[i11 >> 2] = i2;
  } while (0);
  HEAP32[i17 + 4 >> 2] = i5 | 1;
  HEAP32[i12 + i5 >> 2] = i5;
  if ((i17 | 0) == (HEAP32[11051] | 0)) {
   HEAP32[11048] = i5;
   return;
  }
 } else {
  HEAP32[i1 >> 2] = i2 & -2;
  HEAP32[i17 + 4 >> 2] = i5 | 1;
  HEAP32[i12 + i5 >> 2] = i5;
 }
 i1 = i5 >>> 3;
 if (i5 >>> 0 < 256) {
  i3 = 44224 + (i1 << 1 << 2) | 0;
  i2 = HEAP32[11046] | 0;
  i1 = 1 << i1;
  if (i2 & i1) {
   i1 = i3 + 8 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if (i2 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort(); else {
    i15 = i2;
    i16 = i1;
   }
  } else {
   HEAP32[11046] = i2 | i1;
   i15 = i3;
   i16 = i3 + 8 | 0;
  }
  HEAP32[i16 >> 2] = i17;
  HEAP32[i15 + 12 >> 2] = i17;
  HEAP32[i17 + 8 >> 2] = i15;
  HEAP32[i17 + 12 >> 2] = i3;
  return;
 }
 i1 = i5 >>> 8;
 if (i1) if (i5 >>> 0 > 16777215) i1 = 31; else {
  i15 = (i1 + 1048320 | 0) >>> 16 & 8;
  i16 = i1 << i15;
  i14 = (i16 + 520192 | 0) >>> 16 & 4;
  i16 = i16 << i14;
  i1 = (i16 + 245760 | 0) >>> 16 & 2;
  i1 = 14 - (i14 | i15 | i1) + (i16 << i1 >>> 15) | 0;
  i1 = i5 >>> (i1 + 7 | 0) & 1 | i1 << 1;
 } else i1 = 0;
 i4 = 44488 + (i1 << 2) | 0;
 HEAP32[i17 + 28 >> 2] = i1;
 HEAP32[i17 + 20 >> 2] = 0;
 HEAP32[i17 + 16 >> 2] = 0;
 i2 = HEAP32[11047] | 0;
 i3 = 1 << i1;
 do if (i2 & i3) {
  i2 = i5 << ((i1 | 0) == 31 ? 0 : 25 - (i1 >>> 1) | 0);
  i4 = HEAP32[i4 >> 2] | 0;
  while (1) {
   if ((HEAP32[i4 + 4 >> 2] & -8 | 0) == (i5 | 0)) {
    i1 = 124;
    break;
   }
   i3 = i4 + 16 + (i2 >>> 31 << 2) | 0;
   i1 = HEAP32[i3 >> 2] | 0;
   if (!i1) {
    i1 = 121;
    break;
   } else {
    i2 = i2 << 1;
    i4 = i1;
   }
  }
  if ((i1 | 0) == 121) if (i3 >>> 0 < (HEAP32[11050] | 0) >>> 0) _abort(); else {
   HEAP32[i3 >> 2] = i17;
   HEAP32[i17 + 24 >> 2] = i4;
   HEAP32[i17 + 12 >> 2] = i17;
   HEAP32[i17 + 8 >> 2] = i17;
   break;
  } else if ((i1 | 0) == 124) {
   i1 = i4 + 8 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   i16 = HEAP32[11050] | 0;
   if (i2 >>> 0 >= i16 >>> 0 & i4 >>> 0 >= i16 >>> 0) {
    HEAP32[i2 + 12 >> 2] = i17;
    HEAP32[i1 >> 2] = i17;
    HEAP32[i17 + 8 >> 2] = i2;
    HEAP32[i17 + 12 >> 2] = i4;
    HEAP32[i17 + 24 >> 2] = 0;
    break;
   } else _abort();
  }
 } else {
  HEAP32[11047] = i2 | i3;
  HEAP32[i4 >> 2] = i17;
  HEAP32[i17 + 24 >> 2] = i4;
  HEAP32[i17 + 12 >> 2] = i17;
  HEAP32[i17 + 8 >> 2] = i17;
 } while (0);
 i17 = (HEAP32[11054] | 0) + -1 | 0;
 HEAP32[11054] = i17;
 if (!i17) i1 = 44640; else return;
 while (1) {
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) break; else i1 = i1 + 8 | 0;
 }
 HEAP32[11054] = -1;
 return;
}

function __ZNSt3__227__insertion_sort_incompleteIRPFbRKN7guetzli11HuffmanTreeES4_EPS2_EEbT0_S9_T_(i8, i7, i9) {
 i8 = i8 | 0;
 i7 = i7 | 0;
 i9 = i9 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i10 = 0, i11 = 0, i12 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i10;
 switch (i7 - i8 >> 3 | 0) {
 case 2:
  {
   i1 = i7 + -8 | 0;
   if (!(FUNCTION_TABLE_iii[HEAP32[i9 >> 2] & 1](i1, i8) | 0)) {
    i9 = 1;
    STACKTOP = i10;
    return i9 | 0;
   }
   i7 = i8;
   i6 = HEAP32[i7 >> 2] | 0;
   i7 = HEAP32[i7 + 4 >> 2] | 0;
   i4 = i1;
   i5 = HEAP32[i4 + 4 >> 2] | 0;
   i9 = i8;
   HEAP32[i9 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i9 + 4 >> 2] = i5;
   i9 = i1;
   HEAP32[i9 >> 2] = i6;
   HEAP32[i9 + 4 >> 2] = i7;
   i9 = 1;
   STACKTOP = i10;
   return i9 | 0;
  }
 case 3:
  {
   i5 = i8 + 8 | 0;
   i1 = i7 + -8 | 0;
   i7 = FUNCTION_TABLE_iii[HEAP32[i9 >> 2] & 1](i5, i8) | 0;
   i2 = FUNCTION_TABLE_iii[HEAP32[i9 >> 2] & 1](i1, i5) | 0;
   if (!i7) {
    if (!i2) {
     i9 = 1;
     STACKTOP = i10;
     return i9 | 0;
    }
    i6 = i5;
    i4 = HEAP32[i6 >> 2] | 0;
    i6 = HEAP32[i6 + 4 >> 2] | 0;
    i2 = i1;
    i3 = HEAP32[i2 + 4 >> 2] | 0;
    i7 = i5;
    HEAP32[i7 >> 2] = HEAP32[i2 >> 2];
    HEAP32[i7 + 4 >> 2] = i3;
    i7 = i1;
    HEAP32[i7 >> 2] = i4;
    HEAP32[i7 + 4 >> 2] = i6;
    if (!(FUNCTION_TABLE_iii[HEAP32[i9 >> 2] & 1](i5, i8) | 0)) {
     i9 = 1;
     STACKTOP = i10;
     return i9 | 0;
    }
    i7 = i8;
    i6 = HEAP32[i7 >> 2] | 0;
    i7 = HEAP32[i7 + 4 >> 2] | 0;
    i3 = i5;
    i4 = HEAP32[i3 + 4 >> 2] | 0;
    i9 = i8;
    HEAP32[i9 >> 2] = HEAP32[i3 >> 2];
    HEAP32[i9 + 4 >> 2] = i4;
    i9 = i5;
    HEAP32[i9 >> 2] = i6;
    HEAP32[i9 + 4 >> 2] = i7;
    i9 = 1;
    STACKTOP = i10;
    return i9 | 0;
   }
   i4 = i8;
   i3 = HEAP32[i4 >> 2] | 0;
   i4 = HEAP32[i4 + 4 >> 2] | 0;
   if (i2) {
    i6 = i1;
    i7 = HEAP32[i6 + 4 >> 2] | 0;
    i9 = i8;
    HEAP32[i9 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i9 + 4 >> 2] = i7;
    i9 = i1;
    HEAP32[i9 >> 2] = i3;
    HEAP32[i9 + 4 >> 2] = i4;
    i9 = 1;
    STACKTOP = i10;
    return i9 | 0;
   }
   i6 = i5;
   i7 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i8 + 4 >> 2] = i7;
   i8 = i5;
   HEAP32[i8 >> 2] = i3;
   HEAP32[i8 + 4 >> 2] = i4;
   if (!(FUNCTION_TABLE_iii[HEAP32[i9 >> 2] & 1](i1, i5) | 0)) {
    i9 = 1;
    STACKTOP = i10;
    return i9 | 0;
   }
   i8 = i5;
   i7 = HEAP32[i8 >> 2] | 0;
   i8 = HEAP32[i8 + 4 >> 2] | 0;
   i4 = i1;
   i6 = HEAP32[i4 + 4 >> 2] | 0;
   i9 = i5;
   HEAP32[i9 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i9 + 4 >> 2] = i6;
   i9 = i1;
   HEAP32[i9 >> 2] = i7;
   HEAP32[i9 + 4 >> 2] = i8;
   i9 = 1;
   STACKTOP = i10;
   return i9 | 0;
  }
 case 4:
  {
   __ZNSt3__27__sort4IRPFbRKN7guetzli11HuffmanTreeES4_EPS2_EEjT0_S9_S9_S9_T_(i8, i8 + 8 | 0, i8 + 16 | 0, i7 + -8 | 0, i9) | 0;
   i9 = 1;
   STACKTOP = i10;
   return i9 | 0;
  }
 case 5:
  {
   i2 = i8 + 8 | 0;
   i3 = i8 + 16 | 0;
   i4 = i8 + 24 | 0;
   i1 = i7 + -8 | 0;
   __ZNSt3__27__sort4IRPFbRKN7guetzli11HuffmanTreeES4_EPS2_EEjT0_S9_S9_S9_T_(i8, i2, i3, i4, i9) | 0;
   if (!(FUNCTION_TABLE_iii[HEAP32[i9 >> 2] & 1](i1, i4) | 0)) {
    i9 = 1;
    STACKTOP = i10;
    return i9 | 0;
   }
   i6 = i4;
   i5 = HEAP32[i6 >> 2] | 0;
   i6 = HEAP32[i6 + 4 >> 2] | 0;
   i12 = i1;
   i11 = HEAP32[i12 + 4 >> 2] | 0;
   i7 = i4;
   HEAP32[i7 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i7 + 4 >> 2] = i11;
   i7 = i1;
   HEAP32[i7 >> 2] = i5;
   HEAP32[i7 + 4 >> 2] = i6;
   if (!(FUNCTION_TABLE_iii[HEAP32[i9 >> 2] & 1](i4, i3) | 0)) {
    i12 = 1;
    STACKTOP = i10;
    return i12 | 0;
   }
   i11 = i3;
   i7 = HEAP32[i11 >> 2] | 0;
   i11 = HEAP32[i11 + 4 >> 2] | 0;
   i5 = i4;
   i6 = HEAP32[i5 + 4 >> 2] | 0;
   i12 = i3;
   HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i12 + 4 >> 2] = i6;
   i12 = i4;
   HEAP32[i12 >> 2] = i7;
   HEAP32[i12 + 4 >> 2] = i11;
   if (!(FUNCTION_TABLE_iii[HEAP32[i9 >> 2] & 1](i3, i2) | 0)) {
    i12 = 1;
    STACKTOP = i10;
    return i12 | 0;
   }
   i11 = i2;
   i7 = HEAP32[i11 >> 2] | 0;
   i11 = HEAP32[i11 + 4 >> 2] | 0;
   i5 = i3;
   i6 = HEAP32[i5 + 4 >> 2] | 0;
   i12 = i2;
   HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i12 + 4 >> 2] = i6;
   i12 = i3;
   HEAP32[i12 >> 2] = i7;
   HEAP32[i12 + 4 >> 2] = i11;
   if (!(FUNCTION_TABLE_iii[HEAP32[i9 >> 2] & 1](i2, i8) | 0)) {
    i12 = 1;
    STACKTOP = i10;
    return i12 | 0;
   }
   i11 = i8;
   i9 = HEAP32[i11 >> 2] | 0;
   i11 = HEAP32[i11 + 4 >> 2] | 0;
   i6 = i2;
   i7 = HEAP32[i6 + 4 >> 2] | 0;
   i12 = i8;
   HEAP32[i12 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i12 + 4 >> 2] = i7;
   i12 = i2;
   HEAP32[i12 >> 2] = i9;
   HEAP32[i12 + 4 >> 2] = i11;
   i12 = 1;
   STACKTOP = i10;
   return i12 | 0;
  }
 case 1:
 case 0:
  {
   i12 = 1;
   STACKTOP = i10;
   return i12 | 0;
  }
 default:
  {
   i3 = i8 + 16 | 0;
   i1 = i8 + 8 | 0;
   i12 = FUNCTION_TABLE_iii[HEAP32[i9 >> 2] & 1](i1, i8) | 0;
   i2 = FUNCTION_TABLE_iii[HEAP32[i9 >> 2] & 1](i3, i1) | 0;
   do if (i12) {
    i5 = i8;
    i4 = HEAP32[i5 >> 2] | 0;
    i5 = HEAP32[i5 + 4 >> 2] | 0;
    if (i2) {
     i2 = i3;
     i11 = HEAP32[i2 + 4 >> 2] | 0;
     i12 = i8;
     HEAP32[i12 >> 2] = HEAP32[i2 >> 2];
     HEAP32[i12 + 4 >> 2] = i11;
     i12 = i3;
     HEAP32[i12 >> 2] = i4;
     HEAP32[i12 + 4 >> 2] = i5;
     break;
    }
    i2 = i1;
    i11 = HEAP32[i2 + 4 >> 2] | 0;
    i12 = i8;
    HEAP32[i12 >> 2] = HEAP32[i2 >> 2];
    HEAP32[i12 + 4 >> 2] = i11;
    i12 = i1;
    HEAP32[i12 >> 2] = i4;
    HEAP32[i12 + 4 >> 2] = i5;
    if (FUNCTION_TABLE_iii[HEAP32[i9 >> 2] & 1](i3, i1) | 0) {
     i11 = i1;
     i5 = HEAP32[i11 >> 2] | 0;
     i11 = HEAP32[i11 + 4 >> 2] | 0;
     i2 = i3;
     i4 = HEAP32[i2 + 4 >> 2] | 0;
     i12 = i1;
     HEAP32[i12 >> 2] = HEAP32[i2 >> 2];
     HEAP32[i12 + 4 >> 2] = i4;
     i12 = i3;
     HEAP32[i12 >> 2] = i5;
     HEAP32[i12 + 4 >> 2] = i11;
    }
   } else if (i2 ? (i11 = i1, i5 = HEAP32[i11 >> 2] | 0, i11 = HEAP32[i11 + 4 >> 2] | 0, i2 = i3, i4 = HEAP32[i2 + 4 >> 2] | 0, i12 = i1, HEAP32[i12 >> 2] = HEAP32[i2 >> 2], HEAP32[i12 + 4 >> 2] = i4, i12 = i3, HEAP32[i12 >> 2] = i5, HEAP32[i12 + 4 >> 2] = i11, FUNCTION_TABLE_iii[HEAP32[i9 >> 2] & 1](i1, i8) | 0) : 0) {
    i11 = i8;
    i5 = HEAP32[i11 >> 2] | 0;
    i11 = HEAP32[i11 + 4 >> 2] | 0;
    i2 = i1;
    i4 = HEAP32[i2 + 4 >> 2] | 0;
    i12 = i8;
    HEAP32[i12 >> 2] = HEAP32[i2 >> 2];
    HEAP32[i12 + 4 >> 2] = i4;
    i12 = i1;
    HEAP32[i12 >> 2] = i5;
    HEAP32[i12 + 4 >> 2] = i11;
   } while (0);
   i1 = i8 + 24 | 0;
   L13 : do if ((i1 | 0) == (i7 | 0)) {
    i2 = 1;
    i1 = 0;
   } else {
    i2 = 0;
    while (1) {
     if (FUNCTION_TABLE_iii[HEAP32[i9 >> 2] & 1](i1, i3) | 0) {
      i11 = i1;
      i12 = HEAP32[i11 + 4 >> 2] | 0;
      i4 = i6;
      HEAP32[i4 >> 2] = HEAP32[i11 >> 2];
      HEAP32[i4 + 4 >> 2] = i12;
      i4 = i1;
      while (1) {
       i5 = i3;
       i11 = HEAP32[i5 + 4 >> 2] | 0;
       i12 = i4;
       HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
       HEAP32[i12 + 4 >> 2] = i11;
       if ((i3 | 0) == (i8 | 0)) break;
       i4 = i3 + -8 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i9 >> 2] & 1](i6, i4) | 0) {
        i12 = i3;
        i3 = i4;
        i4 = i12;
       } else break;
      }
      i5 = i6;
      i11 = HEAP32[i5 + 4 >> 2] | 0;
      i12 = i3;
      HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
      HEAP32[i12 + 4 >> 2] = i11;
      i2 = i2 + 1 | 0;
      if ((i2 | 0) == 8) {
       i2 = 0;
       i1 = (i1 + 8 | 0) == (i7 | 0);
       break L13;
      }
     }
     i3 = i1 + 8 | 0;
     if ((i3 | 0) == (i7 | 0)) {
      i2 = 1;
      i1 = 0;
      break;
     } else {
      i12 = i1;
      i1 = i3;
      i3 = i12;
     }
    }
   } while (0);
   i12 = i1 | i2;
   STACKTOP = i10;
   return i12 | 0;
  }
 }
 return 0;
}

function __ZN11butteraugli4MaskERKNSt3__26vectorINS1_IfNS0_9allocatorIfEEEENS2_IS4_EEEES8_jjPS6_S9_(i8, i9, i12, i13, i14, i15) {
 i8 = i8 | 0;
 i9 = i9 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i10 = 0, i11 = 0, f16 = f0, d17 = 0.0, d18 = 0.0, d19 = 0.0;
 i6 = i14 + 4 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 i4 = i2 - i3 | 0;
 i1 = (i4 | 0) / 12 | 0;
 if (i1 >>> 0 >= 3) {
  if ((i4 | 0) != 36 ? (i5 = i3 + 36 | 0, (i2 | 0) != (i5 | 0)) : 0) while (1) {
   i1 = i2 + -12 | 0;
   HEAP32[i6 >> 2] = i1;
   i3 = HEAP32[i1 >> 2] | 0;
   if (i3) {
    i1 = i2 + -8 | 0;
    i2 = HEAP32[i1 >> 2] | 0;
    if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
    __ZdlPv(i3);
    i1 = HEAP32[i6 >> 2] | 0;
   }
   if ((i1 | 0) == (i5 | 0)) break; else i2 = i1;
  }
 } else __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEE8__appendEj(i14, 3 - i1 | 0);
 i5 = i15 + 4 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 i4 = HEAP32[i15 >> 2] | 0;
 i1 = i2 - i4 | 0;
 i3 = (i1 | 0) / 12 | 0;
 if (i3 >>> 0 >= 3) {
  if ((i1 | 0) != 36 ? (i7 = i4 + 36 | 0, (i2 | 0) != (i7 | 0)) : 0) while (1) {
   i1 = i2 + -12 | 0;
   HEAP32[i5 >> 2] = i1;
   i3 = HEAP32[i1 >> 2] | 0;
   if (i3) {
    i1 = i2 + -8 | 0;
    i2 = HEAP32[i1 >> 2] | 0;
    if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
    __ZdlPv(i3);
    i1 = HEAP32[i5 >> 2] | 0;
   }
   if ((i1 | 0) == (i7 | 0)) break; else i2 = i1;
  }
 } else __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEE8__appendEj(i15, 3 - i3 | 0);
 i7 = Math_imul(i13, i12) | 0;
 i6 = 0;
 do {
  i2 = HEAP32[i14 >> 2] | 0;
  i1 = i2 + (i6 * 12 | 0) | 0;
  i2 = i2 + (i6 * 12 | 0) + 4 | 0;
  i5 = HEAP32[i2 >> 2] | 0;
  i4 = HEAP32[i1 >> 2] | 0;
  i3 = i5 - i4 >> 2;
  if (i7 >>> 0 <= i3 >>> 0) {
   if (i7 >>> 0 < i3 >>> 0 ? (i11 = i4 + (i7 << 2) | 0, (i5 | 0) != (i11 | 0)) : 0) HEAP32[i2 >> 2] = i5 + (~((i5 + -4 - i11 | 0) >>> 2) << 2);
  } else __ZNSt3__26vectorIfNS_9allocatorIfEEE8__appendEj(i1, i7 - i3 | 0);
  i2 = HEAP32[i15 >> 2] | 0;
  i1 = i2 + (i6 * 12 | 0) | 0;
  i2 = i2 + (i6 * 12 | 0) + 4 | 0;
  i5 = HEAP32[i2 >> 2] | 0;
  i4 = HEAP32[i1 >> 2] | 0;
  i3 = i5 - i4 >> 2;
  if (i7 >>> 0 <= i3 >>> 0) {
   if (i7 >>> 0 < i3 >>> 0 ? (i10 = i4 + (i7 << 2) | 0, (i5 | 0) != (i10 | 0)) : 0) HEAP32[i2 >> 2] = i5 + (~((i5 + -4 - i10 | 0) >>> 2) << 2);
  } else __ZNSt3__26vectorIfNS_9allocatorIfEEE8__appendEj(i1, i7 - i3 | 0);
  i6 = i6 + 1 | 0;
 } while ((i6 | 0) != 3);
 __ZN11butteraugli14DiffPrecomputeERKNSt3__26vectorINS1_IfNS0_9allocatorIfEEEENS2_IS4_EEEES8_jjPS6_(i8, i9, i12, i13, i14);
 __ZN11butteraugli10Average5x5EiiPNSt3__26vectorIfNS0_9allocatorIfEEEE(i12, i13, HEAP32[i14 >> 2] | 0);
 __ZN11butteraugli12MinSquareValEjjjjPf(4, 0, i12, i13, HEAP32[HEAP32[i14 >> 2] >> 2] | 0);
 __ZN11butteraugli4BlurEjjPfdd(i12, i13, HEAP32[HEAP32[i14 >> 2] >> 2] | 0, 9.65781083553, 0.0);
 __ZN11butteraugli10Average5x5EiiPNSt3__26vectorIfNS0_9allocatorIfEEEE(i12, i13, (HEAP32[i14 >> 2] | 0) + 12 | 0);
 __ZN11butteraugli12MinSquareValEjjjjPf(4, 0, i12, i13, HEAP32[(HEAP32[i14 >> 2] | 0) + 12 >> 2] | 0);
 __ZN11butteraugli4BlurEjjPfdd(i12, i13, HEAP32[(HEAP32[i14 >> 2] | 0) + 12 >> 2] | 0, 14.2644604355, 0.0);
 __ZN11butteraugli10Average5x5EiiPNSt3__26vectorIfNS0_9allocatorIfEEEE(i12, i13, (HEAP32[i14 >> 2] | 0) + 24 | 0);
 __ZN11butteraugli12MinSquareValEjjjjPf(4, 0, i12, i13, HEAP32[(HEAP32[i14 >> 2] | 0) + 24 >> 2] | 0);
 __ZN11butteraugli4BlurEjjPfdd(i12, i13, HEAP32[(HEAP32[i14 >> 2] | 0) + 24 >> 2] | 0, 4.53358927369, 0.0);
 if (!((i13 | 0) == 0 | (i12 | 0) == 0)) {
  i1 = 0;
  do {
   i3 = Math_imul(i1, i12) | 0;
   i2 = 0;
   do {
    i11 = i2 + i3 | 0;
    i10 = HEAP32[i14 >> 2] | 0;
    d19 = +Math_fround(HEAPF32[(HEAP32[i10 >> 2] | 0) + (i11 << 2) >> 2]);
    d18 = +Math_fround(HEAPF32[(HEAP32[i10 + 12 >> 2] | 0) + (i11 << 2) >> 2]);
    d19 = d19 * 232.206464018;
    d18 = d18 * 22.9455222245;
    d17 = +Math_fround(HEAPF32[(HEAP32[i10 + 24 >> 2] | 0) + (i11 << 2) >> 2]) * 503.962310606;
    f16 = Math_fround(+__ZN11butteraugli5MaskXEd(d19));
    HEAPF32[(HEAP32[HEAP32[i14 >> 2] >> 2] | 0) + (i11 << 2) >> 2] = f16;
    f16 = Math_fround(+__ZN11butteraugli5MaskYEd(d18));
    HEAPF32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 12 >> 2] | 0) + (i11 << 2) >> 2] = f16;
    f16 = Math_fround(+__ZN11butteraugli5MaskBEd(d17));
    HEAPF32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 24 >> 2] | 0) + (i11 << 2) >> 2] = f16;
    f16 = Math_fround(+__ZN11butteraugli7MaskDcXEd(d19));
    HEAPF32[(HEAP32[HEAP32[i15 >> 2] >> 2] | 0) + (i11 << 2) >> 2] = f16;
    f16 = Math_fround(+__ZN11butteraugli7MaskDcYEd(d18));
    HEAPF32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] | 0) + (i11 << 2) >> 2] = f16;
    f16 = Math_fround(+__ZN11butteraugli7MaskDcBEd(d17));
    HEAPF32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 24 >> 2] | 0) + (i11 << 2) >> 2] = f16;
    i2 = i2 + 1 | 0;
   } while ((i2 | 0) != (i12 | 0));
   i1 = i1 + 1 | 0;
  } while ((i1 | 0) != (i13 | 0));
 }
 i4 = HEAP32[i14 >> 2] | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 i1 = HEAP32[i4 + 4 >> 2] | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i3 = i2;
 if ((i1 | 0) != (i2 | 0)) {
  i2 = i1 - i2 >> 2;
  i1 = 0;
  do {
   i15 = i3 + (i1 << 2) | 0;
   HEAPF32[i15 >> 2] = Math_fround(+Math_fround(HEAPF32[i15 >> 2]) * 4.4912938802480805e-003);
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 < i2 >>> 0);
 }
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 i3 = i2;
 if ((i1 | 0) != (i2 | 0)) {
  i2 = i1 - i2 >> 2;
  i1 = 0;
  do {
   i15 = i3 + (i1 << 2) | 0;
   HEAPF32[i15 >> 2] = Math_fround(+Math_fround(HEAPF32[i15 >> 2]) * 4.4912938802480805e-003);
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 < i2 >>> 0);
 }
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 i2 = HEAP32[i4 + 12 >> 2] | 0;
 i3 = i2;
 if ((i1 | 0) != (i2 | 0)) {
  i2 = i1 - i2 >> 2;
  i1 = 0;
  do {
   i15 = i3 + (i1 << 2) | 0;
   HEAPF32[i15 >> 2] = Math_fround(+Math_fround(HEAPF32[i15 >> 2]) * 4.4912938802480805e-003);
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 < i2 >>> 0);
 }
 i1 = HEAP32[i5 + 16 >> 2] | 0;
 i2 = HEAP32[i5 + 12 >> 2] | 0;
 i3 = i2;
 if ((i1 | 0) != (i2 | 0)) {
  i2 = i1 - i2 >> 2;
  i1 = 0;
  do {
   i15 = i3 + (i1 << 2) | 0;
   HEAPF32[i15 >> 2] = Math_fround(+Math_fround(HEAPF32[i15 >> 2]) * 4.4912938802480805e-003);
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 < i2 >>> 0);
 }
 i2 = HEAP32[i4 + 28 >> 2] | 0;
 i1 = HEAP32[i4 + 24 >> 2] | 0;
 i3 = i1;
 if ((i2 | 0) != (i1 | 0)) {
  i2 = i2 - i1 >> 2;
  i1 = 0;
  do {
   i15 = i3 + (i1 << 2) | 0;
   HEAPF32[i15 >> 2] = Math_fround(+Math_fround(HEAPF32[i15 >> 2]) * 4.4912938802480805e-003);
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 < i2 >>> 0);
 }
 i2 = HEAP32[i5 + 28 >> 2] | 0;
 i1 = HEAP32[i5 + 24 >> 2] | 0;
 i3 = i1;
 if ((i2 | 0) == (i1 | 0)) return;
 i2 = i2 - i1 >> 2;
 i1 = 0;
 do {
  i15 = i3 + (i1 << 2) | 0;
  HEAPF32[i15 >> 2] = Math_fround(+Math_fround(HEAPF32[i15 >> 2]) * 4.4912938802480805e-003);
  i1 = i1 + 1 | 0;
 } while (i1 >>> 0 < i2 >>> 0);
 return;
}

function __ZN7guetzli11OutputImage10DownsampleERKNS0_16DownsampleConfigE(i6, i8) {
 i6 = i6 | 0;
 i8 = i8 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i12 = i13 + 12 | 0;
 i11 = i13;
 i9 = i6 + 8 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i5 + 332 >> 2] | 0;
 i3 = i10 << 6;
 L1 : do if ((i10 | 0) > 0) {
  i2 = HEAP32[i5 + 336 >> 2] | 0;
  i1 = 0;
  while (1) {
   if (HEAP16[i2 + (i1 << 1) >> 1] | 0) break L1;
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i3 | 0)) {
    i4 = 5;
    break;
   }
  }
 } else i4 = 5; while (0);
 L6 : do if ((i4 | 0) == 5) {
  i10 = HEAP32[i5 + 640 >> 2] | 0;
  i3 = i10 << 6;
  if ((i10 | 0) <= 0) {
   STACKTOP = i13;
   return;
  }
  i2 = HEAP32[i5 + 644 >> 2] | 0;
  i1 = 0;
  do {
   if (HEAP16[i2 + (i1 << 1) >> 1] | 0) break L6;
   i1 = i1 + 1 | 0;
  } while ((i1 | 0) < (i3 | 0));
  STACKTOP = i13;
  return;
 } while (0);
 if ((((HEAP8[i8 + 20 >> 0] | 0 ? (HEAP32[i8 >> 2] | 0) == 2 : 0) ? (HEAP32[i8 + 4 >> 2] | 0) == 2 : 0) ? (HEAP32[i8 + 8 >> 2] | 0) == 2 : 0) ? (HEAP32[i8 + 12 >> 2] | 0) == 2 : 0) {
  i1 = i6 + 4 | 0;
  __ZNK7guetzli11OutputImage6ToSRGBEiiii(i12, i6, 0, 0, HEAP32[i6 >> 2] | 0, HEAP32[i1 >> 2] | 0);
  __ZN7guetzli11RGBToYUV420ERKNSt3__26vectorIhNS0_9allocatorIhEEEEii(i11, i12, HEAP32[i6 >> 2] | 0, HEAP32[i1 >> 2] | 0);
  __ZN7guetzli12_GLOBAL__N_126SetDownsampledCoefficientsERKNSt3__26vectorIfNS1_9allocatorIfEEEEiiPNS_20OutputImageComponentE(HEAP32[i11 >> 2] | 0, 1, 1, HEAP32[i9 >> 2] | 0);
  __ZN7guetzli12_GLOBAL__N_126SetDownsampledCoefficientsERKNSt3__26vectorIfNS1_9allocatorIfEEEEiiPNS_20OutputImageComponentE((HEAP32[i11 >> 2] | 0) + 12 | 0, 2, 2, (HEAP32[i9 >> 2] | 0) + 308 | 0);
  __ZN7guetzli12_GLOBAL__N_126SetDownsampledCoefficientsERKNSt3__26vectorIfNS1_9allocatorIfEEEEiiPNS_20OutputImageComponentE((HEAP32[i11 >> 2] | 0) + 24 | 0, 2, 2, (HEAP32[i9 >> 2] | 0) + 616 | 0);
  i1 = HEAP32[i11 >> 2] | 0;
  if (i1 | 0) {
   i5 = i11 + 4 | 0;
   i2 = HEAP32[i5 >> 2] | 0;
   if ((i2 | 0) != (i1 | 0)) {
    do {
     i3 = i2 + -12 | 0;
     HEAP32[i5 >> 2] = i3;
     i4 = HEAP32[i3 >> 2] | 0;
     if (!i4) i2 = i3; else {
      i2 = i2 + -8 | 0;
      i3 = HEAP32[i2 >> 2] | 0;
      if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
      __ZdlPv(i4);
      i2 = HEAP32[i5 >> 2] | 0;
     }
    } while ((i2 | 0) != (i1 | 0));
    i1 = HEAP32[i11 >> 2] | 0;
   }
   __ZdlPv(i1);
  }
  i2 = HEAP32[i12 >> 2] | 0;
  if (i2 | 0) {
   i1 = i12 + 4 | 0;
   if ((HEAP32[i1 >> 2] | 0) != (i2 | 0)) HEAP32[i1 >> 2] = i2;
   __ZdlPv(i2);
  }
  STACKTOP = i13;
  return;
 }
 i5 = i6 + 4 | 0;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i11, Math_imul(HEAP32[i5 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0);
 HEAP32[i12 >> 2] = 0;
 i10 = i12 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i12 + 8 >> 2] = 0;
 i2 = __Znwj(36) | 0;
 HEAP32[i10 >> 2] = i2;
 HEAP32[i12 >> 2] = i2;
 i7 = i12 + 8 | 0;
 HEAP32[i7 >> 2] = i2 + 36;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i2, i11);
 i2 = (HEAP32[i10 >> 2] | 0) + 12 | 0;
 HEAP32[i10 >> 2] = i2;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i2, i11);
 i2 = (HEAP32[i10 >> 2] | 0) + 12 | 0;
 HEAP32[i10 >> 2] = i2;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i2, i11);
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 12;
 i2 = HEAP32[i11 >> 2] | 0;
 if (i2 | 0) {
  i3 = i11 + 4 | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  if ((i1 | 0) != (i2 | 0)) HEAP32[i3 >> 2] = i1 + (~((i1 + -4 - i2 | 0) >>> 2) << 2);
  __ZdlPv(i2);
 }
 __ZNK7guetzli20OutputImageComponent13ToFloatPixelsEPfi(HEAP32[i9 >> 2] | 0, HEAP32[HEAP32[i12 >> 2] >> 2] | 0, 1);
 __ZNK7guetzli20OutputImageComponent13ToFloatPixelsEPfi((HEAP32[i9 >> 2] | 0) + 308 | 0, HEAP32[(HEAP32[i12 >> 2] | 0) + 12 >> 2] | 0, 1);
 __ZNK7guetzli20OutputImageComponent13ToFloatPixelsEPfi((HEAP32[i9 >> 2] | 0) + 616 | 0, HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] | 0, 1);
 __ZN7guetzli17PreProcessChannelEiiiffbbRKNSt3__26vectorINS1_IfNS0_9allocatorIfEEEENS2_IS4_EEEE(i11, HEAP32[i6 >> 2] | 0, HEAP32[i5 >> 2] | 0, 2, Math_fround(1.29999995), Math_fround(.5), (HEAP8[i8 + 16 >> 0] | 0) != 0, (HEAP8[i8 + 17 >> 0] | 0) != 0, i12);
 i1 = HEAP32[i12 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i10 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -12 | 0;
    HEAP32[i10 >> 2] = i3;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) i2 = i3; else {
     i2 = i2 + -8 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
     i2 = HEAP32[i10 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i12 >> 2] | 0;
  }
  __ZdlPv(i1);
  HEAP32[i7 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  HEAP32[i12 >> 2] = 0;
 }
 HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i10 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i7 >> 2] = HEAP32[i11 + 8 >> 2];
 __ZN7guetzli17PreProcessChannelEiiiffbbRKNSt3__26vectorINS1_IfNS0_9allocatorIfEEEENS2_IS4_EEEE(i11, HEAP32[i6 >> 2] | 0, HEAP32[i5 >> 2] | 0, 1, Math_fround(1.29999995), Math_fround(.5), (HEAP8[i8 + 18 >> 0] | 0) != 0, (HEAP8[i8 + 19 >> 0] | 0) != 0, i12);
 i1 = HEAP32[i12 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i10 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -12 | 0;
    HEAP32[i10 >> 2] = i3;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) i2 = i3; else {
     i2 = i2 + -8 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
     i2 = HEAP32[i10 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i12 >> 2] | 0;
  }
  __ZdlPv(i1);
  HEAP32[i7 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  HEAP32[i12 >> 2] = 0;
 }
 i3 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 >> 2] = i3;
 HEAP32[i10 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i7 >> 2] = HEAP32[i11 + 8 >> 2];
 i1 = HEAP32[i8 >> 2] | 0;
 i2 = HEAP32[i8 + 4 >> 2] | 0;
 if (!((i1 | 0) == 1 & (i2 | 0) == 1)) __ZN7guetzli12_GLOBAL__N_126SetDownsampledCoefficientsERKNSt3__26vectorIfNS1_9allocatorIfEEEEiiPNS_20OutputImageComponentE(i3 + 12 | 0, i1, i2, (HEAP32[i9 >> 2] | 0) + 308 | 0);
 i2 = HEAP32[i8 + 8 >> 2] | 0;
 i1 = HEAP32[i8 + 12 >> 2] | 0;
 if (!((i2 | 0) == 1 & (i1 | 0) == 1)) __ZN7guetzli12_GLOBAL__N_126SetDownsampledCoefficientsERKNSt3__26vectorIfNS1_9allocatorIfEEEEiiPNS_20OutputImageComponentE((HEAP32[i12 >> 2] | 0) + 24 | 0, i2, i1, (HEAP32[i9 >> 2] | 0) + 616 | 0);
 i1 = HEAP32[i12 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i10 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -12 | 0;
    HEAP32[i10 >> 2] = i3;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) i2 = i3; else {
     i2 = i2 + -8 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
     i2 = HEAP32[i10 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i12 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 STACKTOP = i13;
 return;
}

function __ZN11butteraugli10Average5x5EiiPNSt3__26vectorIfNS0_9allocatorIfEEEE(i21, i22, i23) {
 i21 = i21 | 0;
 i22 = i22 | 0;
 i23 = i23 | 0;
 var i1 = 0, i2 = 0, i3 = 0, f4 = f0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, f29 = f0, i30 = 0, i31 = 0, i32 = 0, f33 = f0;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i27 = i28 + 24 | 0;
 i26 = i28 + 12 | 0;
 i24 = i28;
 if ((i21 | 0) < 4 | (i22 | 0) < 4) {
  STACKTOP = i28;
  return;
 }
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i27, i23);
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i26, i23);
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i24, i23);
 i25 = i24 + 4 | 0;
 i2 = HEAP32[i25 >> 2] | 0;
 i1 = HEAP32[i24 >> 2] | 0;
 i3 = i1;
 if ((i2 | 0) != (i1 | 0)) {
  i2 = i2 - i1 >> 2;
  i1 = 0;
  do {
   i20 = i3 + (i1 << 2) | 0;
   HEAPF32[i20 >> 2] = Math_fround(Math_fround(HEAPF32[i20 >> 2]) * Math_fround(.679144918));
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 < i2 >>> 0);
 }
 if ((i22 | 0) > 0) {
  i11 = HEAP32[i26 >> 2] | 0;
  i12 = HEAP32[i27 >> 2] | 0;
  i13 = i21 + -2 | 0;
  i14 = (i13 | 0) > 2;
  i15 = HEAP32[i24 >> 2] | 0;
  i16 = i21 + -1 | 0;
  i17 = (i16 | 0) > 1;
  i18 = 1 - i21 | 0;
  i19 = i21 + 1 | 0;
  i10 = 0;
  do {
   i9 = i12 + (i19 + (Math_imul(i10, i21) | 0) << 2) | 0;
   i3 = i12 + (i18 + (Math_imul(i10, i21) | 0) << 2) | 0;
   i20 = Math_imul(i10, i21) | 0;
   i5 = i11 + (i20 << 2) | 0;
   f4 = Math_fround(HEAPF32[i5 >> 2]);
   i8 = i20 + 1 | 0;
   i7 = i12 + (i8 << 2) | 0;
   HEAPF32[i7 >> 2] = Math_fround(f4 + Math_fround(HEAPF32[i7 >> 2]));
   i8 = i11 + (i8 << 2) | 0;
   f4 = Math_fround(HEAPF32[i8 >> 2]);
   i7 = i12 + (i20 << 2) | 0;
   HEAPF32[i7 >> 2] = Math_fround(f4 + Math_fround(HEAPF32[i7 >> 2]));
   f4 = Math_fround(HEAPF32[i8 >> 2]);
   i8 = i12 + (i20 + 2 << 2) | 0;
   HEAPF32[i8 >> 2] = Math_fround(f4 + Math_fround(HEAPF32[i8 >> 2]));
   if (i14) {
    i1 = 2;
    do {
     i8 = i1 + i20 | 0;
     i7 = i11 + (i8 << 2) | 0;
     f4 = Math_fround(HEAPF32[i7 >> 2]);
     i6 = i12 + (i8 + -1 << 2) | 0;
     HEAPF32[i6 >> 2] = Math_fround(f4 + Math_fround(HEAPF32[i6 >> 2]));
     f4 = Math_fround(HEAPF32[i7 >> 2]);
     i8 = i12 + (i8 + 1 << 2) | 0;
     HEAPF32[i8 >> 2] = Math_fround(f4 + Math_fround(HEAPF32[i8 >> 2]));
     i1 = i1 + 1 | 0;
    } while ((i1 | 0) != (i13 | 0));
   }
   i6 = i20 + i21 | 0;
   i2 = i6 + -2 | 0;
   i7 = i11 + (i2 << 2) | 0;
   f4 = Math_fround(HEAPF32[i7 >> 2]);
   i8 = i12 + (i6 + -3 << 2) | 0;
   HEAPF32[i8 >> 2] = Math_fround(f4 + Math_fround(HEAPF32[i8 >> 2]));
   f4 = Math_fround(HEAPF32[i7 >> 2]);
   i7 = i6 + -1 | 0;
   i8 = i12 + (i7 << 2) | 0;
   HEAPF32[i8 >> 2] = Math_fround(f4 + Math_fround(HEAPF32[i8 >> 2]));
   i8 = i11 + (i7 << 2) | 0;
   f4 = Math_fround(HEAPF32[i8 >> 2]);
   i2 = i12 + (i2 << 2) | 0;
   HEAPF32[i2 >> 2] = Math_fround(f4 + Math_fround(HEAPF32[i2 >> 2]));
   if ((i10 | 0) > 0) {
    i2 = i20 - i21 | 0;
    f4 = Math_fround(HEAPF32[i15 + (i20 << 2) >> 2]);
    i1 = i12 + (i2 + 1 << 2) | 0;
    HEAPF32[i1 >> 2] = Math_fround(f4 + Math_fround(HEAPF32[i1 >> 2]));
    f4 = Math_fround(HEAPF32[i5 >> 2]);
    i1 = i12 + (i2 << 2) | 0;
    HEAPF32[i1 >> 2] = Math_fround(f4 + Math_fround(HEAPF32[i1 >> 2]));
    if (i17) {
     i1 = 1;
     f4 = Math_fround(HEAPF32[i3 >> 2]);
     do {
      i31 = i1 + i20 | 0;
      i30 = i15 + (i31 << 2) | 0;
      f33 = Math_fround(HEAPF32[i30 >> 2]);
      i3 = i1 + i2 | 0;
      i32 = i12 + (i3 + 1 << 2) | 0;
      f29 = f4;
      f4 = Math_fround(f33 + Math_fround(HEAPF32[i32 >> 2]));
      HEAPF32[i32 >> 2] = f4;
      HEAPF32[i12 + (i3 << 2) >> 2] = Math_fround(Math_fround(HEAPF32[i11 + (i31 << 2) >> 2]) + f29);
      f29 = Math_fround(HEAPF32[i30 >> 2]);
      i3 = i12 + (i3 + -1 << 2) | 0;
      HEAPF32[i3 >> 2] = Math_fround(f29 + Math_fround(HEAPF32[i3 >> 2]));
      i1 = i1 + 1 | 0;
     } while ((i1 | 0) != (i16 | 0));
    }
    f33 = Math_fround(HEAPF32[i8 >> 2]);
    i32 = i12 + (i20 + -1 << 2) | 0;
    HEAPF32[i32 >> 2] = Math_fround(f33 + Math_fround(HEAPF32[i32 >> 2]));
    f33 = Math_fround(HEAPF32[i15 + (i7 << 2) >> 2]);
    i32 = i12 + (i20 + -2 << 2) | 0;
    HEAPF32[i32 >> 2] = Math_fround(f33 + Math_fround(HEAPF32[i32 >> 2]));
   }
   i10 = i10 + 1 | 0;
   if ((i10 | 0) < (i22 | 0)) {
    f33 = Math_fround(HEAPF32[i15 + (i20 << 2) >> 2]);
    i32 = i12 + (i6 + 1 << 2) | 0;
    HEAPF32[i32 >> 2] = Math_fround(f33 + Math_fround(HEAPF32[i32 >> 2]));
    f33 = Math_fround(HEAPF32[i5 >> 2]);
    i32 = i12 + (i6 << 2) | 0;
    HEAPF32[i32 >> 2] = Math_fround(f33 + Math_fround(HEAPF32[i32 >> 2]));
    if (i17) {
     i1 = 1;
     f4 = Math_fround(HEAPF32[i9 >> 2]);
     do {
      i30 = i1 + i20 | 0;
      i31 = i15 + (i30 << 2) | 0;
      f29 = Math_fround(HEAPF32[i31 >> 2]);
      i32 = i1 + i6 | 0;
      i9 = i12 + (i32 + 1 << 2) | 0;
      f33 = f4;
      f4 = Math_fround(f29 + Math_fround(HEAPF32[i9 >> 2]));
      HEAPF32[i9 >> 2] = f4;
      HEAPF32[i12 + (i32 << 2) >> 2] = Math_fround(Math_fround(HEAPF32[i11 + (i30 << 2) >> 2]) + f33);
      f33 = Math_fround(HEAPF32[i31 >> 2]);
      i32 = i12 + (i32 + -1 << 2) | 0;
      HEAPF32[i32 >> 2] = Math_fround(f33 + Math_fround(HEAPF32[i32 >> 2]));
      i1 = i1 + 1 | 0;
     } while ((i1 | 0) != (i16 | 0));
    }
    f33 = Math_fround(HEAPF32[i8 >> 2]);
    i32 = i6 + i21 | 0;
    i31 = i12 + (i32 + -1 << 2) | 0;
    HEAPF32[i31 >> 2] = Math_fround(f33 + Math_fround(HEAPF32[i31 >> 2]));
    f33 = Math_fround(HEAPF32[i15 + (i7 << 2) >> 2]);
    i32 = i12 + (i32 + -2 << 2) | 0;
    HEAPF32[i32 >> 2] = Math_fround(f33 + Math_fround(HEAPF32[i32 >> 2]));
   }
  } while ((i10 | 0) != (i22 | 0));
 }
 if ((i27 | 0) != (i23 | 0)) __ZNSt3__26vectorIfNS_9allocatorIfEEE6assignIPfEENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIfNS_15iterator_traitsIS7_E9referenceEEE5valueEvE4typeES7_S7_(i23, HEAP32[i27 >> 2] | 0, HEAP32[i27 + 4 >> 2] | 0);
 i2 = HEAP32[i23 + 4 >> 2] | 0;
 i1 = HEAP32[i23 >> 2] | 0;
 i3 = i1;
 if ((i2 | 0) != (i1 | 0)) {
  i2 = i2 - i1 >> 2;
  i1 = 0;
  do {
   i32 = i3 + (i1 << 2) | 0;
   HEAPF32[i32 >> 2] = Math_fround(Math_fround(HEAPF32[i32 >> 2]) * Math_fround(.129591092));
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 < i2 >>> 0);
 }
 i1 = HEAP32[i24 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i25 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) HEAP32[i25 >> 2] = i2 + (~((i2 + -4 - i1 | 0) >>> 2) << 2);
  __ZdlPv(i1);
 }
 i3 = HEAP32[i26 >> 2] | 0;
 if (i3 | 0) {
  i1 = i26 + 4 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
  __ZdlPv(i3);
 }
 i3 = HEAP32[i27 >> 2] | 0;
 if (i3 | 0) {
  i1 = i27 + 4 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
  __ZdlPv(i3);
 }
 STACKTOP = i28;
 return;
}

function __ZNK7guetzli11OutputImage14SaveToJpegDataEPNS_8JPEGDataE(i1, i21) {
 i1 = i1 | 0;
 i21 = i21 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 768 | 0;
 i23 = i25;
 i24 = i1 + 8 | 0;
 i7 = HEAP32[i24 >> 2] | 0;
 if ((HEAP32[i7 + 8 >> 2] | 0) != 1) ___assert_fail(9444, 8947, 348, 9475);
 if ((HEAP32[i7 + 12 >> 2] | 0) != 1) ___assert_fail(9490, 8947, 349, 9475);
 HEAP32[i21 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i21 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 i16 = i21 + 12 | 0;
 HEAP32[i16 >> 2] = 1;
 i17 = i21 + 16 | 0;
 HEAP32[i17 >> 2] = 1;
 i5 = HEAP32[i7 + 16 >> 2] | 0;
 i18 = i21 + 24 | 0;
 HEAP32[i18 >> 2] = i5;
 i6 = HEAP32[i7 + 20 >> 2] | 0;
 i19 = i21 + 20 | 0;
 HEAP32[i19 >> 2] = i6;
 i15 = HEAP32[i7 + 332 >> 2] | 0;
 i2 = i15 << 6;
 L7 : do if ((i15 | 0) > 0) {
  i3 = HEAP32[i7 + 336 >> 2] | 0;
  i1 = 0;
  while (1) {
   if (HEAP16[i3 + (i1 << 1) >> 1] | 0) {
    i4 = 23;
    break L7;
   }
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i2 | 0)) {
    i4 = 9;
    break;
   }
  }
 } else i4 = 9; while (0);
 L12 : do if ((i4 | 0) == 9) {
  i15 = HEAP32[i7 + 640 >> 2] | 0;
  i2 = i15 << 6;
  if ((i15 | 0) > 0) {
   i3 = HEAP32[i7 + 644 >> 2] | 0;
   i1 = 0;
   while (1) {
    if (HEAP16[i3 + (i1 << 1) >> 1] | 0) {
     i4 = 23;
     break L12;
    }
    i1 = i1 + 1 | 0;
    if ((i1 | 0) >= (i2 | 0)) {
     i15 = 1;
     break;
    }
   }
  } else i15 = 1;
 } while (0);
 if ((i4 | 0) == 23) {
  i15 = HEAP32[i7 + 316 >> 2] | 0;
  i15 = (i15 | 0) > 1 ? i15 : 1;
  i12 = HEAP32[i7 + 324 >> 2] | 0;
  i12 = (i12 | 0) < (i5 | 0) ? i12 : i5;
  i14 = HEAP32[i7 + 328 >> 2] | 0;
  i14 = (i14 | 0) < (i6 | 0) ? i14 : i6;
  i6 = HEAP32[i7 + 624 >> 2] | 0;
  i15 = (i15 | 0) < (i6 | 0) ? i6 : i15;
  i6 = HEAP32[i7 + 632 >> 2] | 0;
  i13 = HEAP32[i7 + 636 >> 2] | 0;
  HEAP32[i16 >> 2] = i15;
  HEAP32[i18 >> 2] = (i6 | 0) < (i12 | 0) ? i6 : i12;
  HEAP32[i19 >> 2] = (i13 | 0) < (i14 | 0) ? i13 : i14;
  i14 = HEAP32[i7 + 628 >> 2] | 0;
  HEAP32[i17 >> 2] = (i15 | 0) < (i14 | 0) ? i14 : i15;
  i15 = 3;
 }
 i14 = i21 + 80 | 0;
 i5 = i21 + 84 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 i2 = HEAP32[i14 >> 2] | 0;
 i1 = (i3 - i2 | 0) / 40 | 0;
 if (i15 >>> 0 <= i1 >>> 0) {
  if (i15 >>> 0 < i1 >>> 0 ? (i8 = i2 + (i15 * 40 | 0) | 0, (i3 | 0) != (i8 | 0)) : 0) while (1) {
   i1 = i3 + -40 | 0;
   HEAP32[i5 >> 2] = i1;
   i4 = HEAP32[i3 + -12 >> 2] | 0;
   if (i4) {
    i1 = i3 + -8 | 0;
    i2 = HEAP32[i1 >> 2] | 0;
    if ((i2 | 0) != (i4 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -2 - i4 | 0) >>> 1) << 1);
    __ZdlPv(i4);
    i1 = HEAP32[i5 >> 2] | 0;
   }
   if ((i1 | 0) == (i8 | 0)) break; else i3 = i1;
  }
 } else __ZNSt3__26vectorIN7guetzli13JPEGComponentENS_9allocatorIS2_EEE8__appendEj(i14, i15 - i1 | 0);
 i1 = HEAP32[i24 >> 2] | 0;
 _memcpy(i23 | 0, i1 + 52 | 0, 256) | 0;
 _memcpy(i23 + 256 | 0, i1 + 360 | 0, 256) | 0;
 _memcpy(i23 + 512 | 0, i1 + 668 | 0, 256) | 0;
 i2 = HEAP32[i16 >> 2] | 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if (!((i2 | 0) % (i3 | 0) | 0)) {
  i20 = 0;
  i9 = i1;
  i10 = i2;
  i11 = i3;
 } else ___assert_fail(9521, 8947, 372, 9475);
 L36 : while (1) {
  i3 = HEAP32[i14 >> 2] | 0;
  i2 = HEAP32[i17 >> 2] | 0;
  i1 = HEAP32[i9 + (i20 * 308 | 0) + 12 >> 2] | 0;
  if ((i2 | 0) % (i1 | 0) | 0 | 0) {
   i4 = 27;
   break;
  }
  HEAP32[i3 + (i20 * 40 | 0) >> 2] = i20;
  i6 = (i10 | 0) / (i11 | 0) | 0;
  HEAP32[i3 + (i20 * 40 | 0) + 4 >> 2] = i6;
  i1 = (i2 | 0) / (i1 | 0) | 0;
  HEAP32[i3 + (i20 * 40 | 0) + 8 >> 2] = i1;
  i6 = Math_imul(i6, HEAP32[i18 >> 2] | 0) | 0;
  i12 = i3 + (i20 * 40 | 0) + 16 | 0;
  HEAP32[i12 >> 2] = i6;
  i1 = Math_imul(i1, HEAP32[i19 >> 2] | 0) | 0;
  i13 = i3 + (i20 * 40 | 0) + 20 | 0;
  HEAP32[i13 >> 2] = i1;
  i6 = Math_imul(i1, i6) | 0;
  HEAP32[i3 + (i20 * 40 | 0) + 24 >> 2] = i6;
  i7 = i3 + (i20 * 40 | 0) + 28 | 0;
  i6 = i6 << 6;
  i2 = i3 + (i20 * 40 | 0) + 32 | 0;
  i5 = HEAP32[i2 >> 2] | 0;
  i4 = HEAP32[i7 >> 2] | 0;
  i3 = i5 - i4 >> 1;
  if (i6 >>> 0 <= i3 >>> 0) {
   if (i6 >>> 0 < i3 >>> 0 ? (i22 = i4 + (i6 << 1) | 0, (i5 | 0) != (i22 | 0)) : 0) HEAP32[i2 >> 2] = i5 + (~((i5 + -2 - i22 | 0) >>> 1) << 1);
  } else {
   __ZNSt3__26vectorIsNS_9allocatorIsEEE8__appendEj(i7, i6 - i3 | 0);
   i1 = HEAP32[i13 >> 2] | 0;
  }
  if ((i1 | 0) > 0) {
   i3 = HEAP32[i12 >> 2] | 0;
   i11 = (i3 | 0) > 0;
   i10 = 0;
   i9 = HEAP32[i7 >> 2] | 0;
   i4 = HEAP32[(HEAP32[i24 >> 2] | 0) + (i20 * 308 | 0) + 28 >> 2] | 0;
   i1 = 0;
   while (1) {
    L49 : do if (i11) {
     i7 = HEAP32[i24 >> 2] | 0;
     i8 = i7 + (i20 * 308 | 0) + 16 | 0;
     if ((i10 | 0) < (HEAP32[i7 + (i20 * 308 | 0) + 20 >> 2] | 0)) {
      i7 = 0;
      i6 = i4;
      i2 = i9;
     } else {
      i5 = 0;
      i2 = i9;
      while (1) {
       HEAP16[i2 >> 1] = i1;
       i1 = i9 + ((i5 << 6 | 1) << 1) | 0;
       i3 = i1 + 126 | 0;
       do {
        HEAP16[i1 >> 1] = 0;
        i1 = i1 + 2 | 0;
       } while ((i1 | 0) < (i3 | 0));
       i1 = HEAP16[i2 >> 1] | 0;
       i2 = i2 + 128 | 0;
       i5 = i5 + 1 | 0;
       i3 = HEAP32[i12 >> 2] | 0;
       if ((i5 | 0) >= (i3 | 0)) break L49;
      }
     }
     while (1) {
      if ((i7 | 0) < (HEAP32[i8 >> 2] | 0)) {
       i1 = 0;
       do {
        i4 = HEAP32[i23 + (i20 << 8) + (i1 << 2) >> 2] | 0;
        i5 = HEAP16[i6 + (i1 << 1) >> 1] | 0;
        if ((i5 | 0) % (i4 | 0) | 0 | 0) {
         i4 = 47;
         break L36;
        }
        HEAP16[i2 + (i1 << 1) >> 1] = (i5 | 0) / (i4 | 0) | 0;
        i1 = i1 + 1 | 0;
       } while ((i1 | 0) < 64);
       i4 = i6 + 128 | 0;
      } else {
       HEAP16[i2 >> 1] = i1;
       i1 = i9 + ((i7 << 6 | 1) << 1) | 0;
       i3 = i1 + 126 | 0;
       do {
        HEAP16[i1 >> 1] = 0;
        i1 = i1 + 2 | 0;
       } while ((i1 | 0) < (i3 | 0));
       i4 = i6;
       i3 = HEAP32[i12 >> 2] | 0;
      }
      i1 = HEAP16[i2 >> 1] | 0;
      i2 = i2 + 128 | 0;
      i7 = i7 + 1 | 0;
      if ((i7 | 0) >= (i3 | 0)) break; else i6 = i4;
     }
    } else i2 = i9; while (0);
    i10 = i10 + 1 | 0;
    if ((i10 | 0) >= (HEAP32[i13 >> 2] | 0)) break; else i9 = i2;
   }
  }
  i20 = i20 + 1 | 0;
  if ((i20 | 0) >= (i15 | 0)) {
   i4 = 24;
   break;
  }
  i9 = HEAP32[i24 >> 2] | 0;
  i10 = HEAP32[i16 >> 2] | 0;
  i11 = HEAP32[i9 + (i20 * 308 | 0) + 8 >> 2] | 0;
  if ((i10 | 0) % (i11 | 0) | 0 | 0) {
   i4 = 25;
   break;
  }
 }
 if ((i4 | 0) == 24) {
  __ZN7guetzli15SaveQuantTablesEPA64_KiPNS_8JPEGDataE(i23, i21);
  STACKTOP = i25;
  return;
 } else if ((i4 | 0) == 25) ___assert_fail(9521, 8947, 372, 9475); else if ((i4 | 0) == 27) ___assert_fail(9577, 8947, 373, 9475); else if ((i4 | 0) == 47) ___assert_fail(9633, 8947, 397, 9475);
}

function __ZN11butteraugli20ButteraugliBlockDiffEPdS0_S0_S0_S0_(i13, i15, i8, i16, i9) {
 i13 = i13 | 0;
 i15 = i15 | 0;
 i8 = i8 | 0;
 i16 = i16 | 0;
 i9 = i9 | 0;
 var i1 = 0, i2 = 0, d3 = 0.0, d4 = 0.0, i5 = 0, i6 = 0, d7 = 0.0, i10 = 0, i11 = 0, d12 = 0.0, d14 = 0.0, i17 = 0, i18 = 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i10 = i17 + 96 | 0;
 i11 = i17;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i10 + 8 >> 2] = 0;
 HEAP32[i10 + 12 >> 2] = 0;
 HEAP32[i10 + 16 >> 2] = 0;
 HEAP32[i10 + 20 >> 2] = 0;
 i1 = i11;
 i2 = i1 + 96 | 0;
 do {
  HEAP32[i1 >> 2] = 0;
  i1 = i1 + 4 | 0;
 } while ((i1 | 0) < (i2 | 0));
 i5 = 0;
 do {
  d3 = +HEAPF64[i13 + (i5 << 3) >> 3] - +HEAPF64[i15 + (i5 << 3) >> 3];
  i1 = i5 >>> 6;
  i6 = i10 + (i1 << 3) | 0;
  HEAPF64[i6 >> 3] = +HEAPF64[i6 >> 3] + d3 * .015625;
  i6 = i5 & 7;
  i18 = i5 >>> 3 & 7;
  i18 = (i18 | 0) == 0 ? 1 : (i18 | 0) == 7 ? 3 : -1;
  i6 = (i6 | 0) == 0 ? 0 : (i6 | 0) == 7 ? 2 : -1;
  i2 = i11 + (i1 << 5) + (i18 << 3) | 0;
  if ((i18 | 0) > -1) HEAPF64[i2 >> 3] = d3 * .125 + +HEAPF64[i2 >> 3];
  i1 = i11 + (i1 << 5) + (i6 << 3) | 0;
  if ((i6 | 0) > -1) HEAPF64[i1 >> 3] = d3 * .125 + +HEAPF64[i1 >> 3];
  i5 = i5 + 1 | 0;
 } while ((i5 | 0) != 192);
 __ZN11butteraugli31XybDiffLowFreqSquaredAccumulateEdddddddPd(+HEAPF64[i10 >> 3], +HEAPF64[i10 + 8 >> 3], +HEAPF64[i10 + 16 >> 3], 0.0, 0.0, 0.0, 5.28270670524, i8);
 __ZN11butteraugli31XybDiffLowFreqSquaredAccumulateEdddddddPd(+HEAPF64[i11 >> 3], +HEAPF64[i11 + 32 >> 3], +HEAPF64[i11 + 64 >> 3], 0.0, 0.0, 0.0, 5.28270670524, i9);
 __ZN11butteraugli31XybDiffLowFreqSquaredAccumulateEdddddddPd(+HEAPF64[i11 + 8 >> 3], +HEAPF64[i11 + 40 >> 3], +HEAPF64[i11 + 72 >> 3], 0.0, 0.0, 0.0, 5.28270670524, i9);
 __ZN11butteraugli31XybDiffLowFreqSquaredAccumulateEdddddddPd(+HEAPF64[i11 + 16 >> 3], +HEAPF64[i11 + 48 >> 3], +HEAPF64[i11 + 80 >> 3], 0.0, 0.0, 0.0, 5.28270670524, i9);
 __ZN11butteraugli31XybDiffLowFreqSquaredAccumulateEdddddddPd(+HEAPF64[i11 + 24 >> 3], +HEAPF64[i11 + 56 >> 3], +HEAPF64[i11 + 88 >> 3], 0.0, 0.0, 0.0, 5.28270670524, i9);
 i1 = 0;
 do {
  i11 = i13 + (i1 << 3) | 0;
  d12 = +HEAPF64[i11 >> 3];
  i18 = i15 + (i1 << 3) | 0;
  d14 = +HEAPF64[i18 >> 3];
  HEAPF64[i11 >> 3] = (d12 + d14) * .5;
  HEAPF64[i18 >> 3] = (d12 - d14) * .5;
  i1 = i1 + 1 | 0;
 } while ((i1 | 0) != 192);
 i5 = i13 + 512 | 0;
 i6 = i15 + 512 | 0;
 i8 = i15 + 1024 | 0;
 __ZN11butteraugli21ButteraugliFFTSquaredEPd(i5);
 __ZN11butteraugli21ButteraugliFFTSquaredEPd(i15);
 __ZN11butteraugli21ButteraugliFFTSquaredEPd(i6);
 __ZN11butteraugli21ButteraugliFFTSquaredEPd(i8);
 i9 = i16 + 16 | 0;
 i10 = i16 + 8 | 0;
 i2 = 4;
 while (1) {
  d14 = +HEAPF64[1408 + (i2 << 3) >> 3];
  HEAPF64[i16 >> 3] = +HEAPF64[i16 >> 3] + d14 * 64.8 * +HEAPF64[i15 + (i2 << 3) >> 3];
  HEAPF64[i9 >> 3] = +HEAPF64[i9 >> 3] + d14 * 2.4 * +HEAPF64[i8 + (i2 << 3) >> 3];
  i18 = i5 + (i2 << 3) | 0;
  HEAPF64[i18 >> 3] = +Math_sqrt(+(+HEAPF64[i18 >> 3]));
  i13 = i6 + (i2 << 3) | 0;
  d12 = +Math_sqrt(+(+HEAPF64[i13 >> 3]));
  HEAPF64[i13 >> 3] = d12;
  d4 = +HEAPF64[i18 >> 3];
  d3 = d4 - d12;
  d4 = d12 + d4;
  do if (!(d3 >= -.04 & d3 < .04)) if (d3 < 0.0) {
   d3 = d3 + .04;
   break;
  } else {
   d3 = d3 + -.04;
   break;
  } else d3 = 0.0; while (0);
  do if (!(d4 >= -.04 & d4 < .04)) if (d4 < 0.0) {
   d12 = d4 + .04;
   break;
  } else {
   d12 = d4 + -.04;
   break;
  } else d12 = 0.0; while (0);
  if (d3 != d12) {
   if ((HEAP8[18528] | 0) == 0 ? ___cxa_guard_acquire(18528) | 0 : 0) {
    HEAPF64[2295] = 0.0;
    HEAPF64[2296] = 1.4103373714040413;
    HEAPF64[2297] = 2.1187462581064413;
    HEAPF64[2298] = 2.8271551448088412;
    HEAPF64[2299] = 3.535564031511241;
    HEAPF64[2300] = 4.243972918213641;
    HEAPF64[2301] = 4.952381804916041;
    HEAPF64[2302] = 5.660790691618441;
    HEAPF64[2303] = 6.369199578320841;
    HEAPF64[2304] = 7.077608465023241;
    HEAPF64[2305] = 7.786017351725641;
    HEAPF64[2306] = 8.49442623842804;
    HEAPF64[2307] = 9.202835125130441;
    HEAPF64[2308] = 9.911244011832842;
    HEAPF64[2309] = 10.619652898535243;
    HEAPF64[2310] = 11.328061785237644;
    HEAPF64[2311] = 12.036470671940044;
    HEAPF64[2312] = 12.744879558642445;
    HEAPF64[2313] = 13.453288445344846;
    HEAPF64[2314] = 14.161697332047247;
    HEAPF64[2315] = 14.870106218749648;
   }
   d4 = d3 * 1.51983458269;
   d3 = +Math_abs(+d4);
   if (!(d3 < 1.0e4)) {
    i1 = 24;
    break;
   }
   i1 = ~~d3;
   if ((i1 | 0) < 20) {
    d7 = +HEAPF64[18360 + (i1 << 3) >> 3];
    d3 = d7 + (d3 - +(i1 | 0)) * (+HEAPF64[18360 + (i1 + 1 << 3) >> 3] - d7);
   } else d3 = +HEAPF64[2315];
   d7 = d4 < 0.0 ? -d3 : d3;
   if ((HEAP8[18528] | 0) == 0 ? ___cxa_guard_acquire(18528) | 0 : 0) {
    HEAPF64[2295] = 0.0;
    HEAPF64[2296] = 1.4103373714040413;
    HEAPF64[2297] = 2.1187462581064413;
    HEAPF64[2298] = 2.8271551448088412;
    HEAPF64[2299] = 3.535564031511241;
    HEAPF64[2300] = 4.243972918213641;
    HEAPF64[2301] = 4.952381804916041;
    HEAPF64[2302] = 5.660790691618441;
    HEAPF64[2303] = 6.369199578320841;
    HEAPF64[2304] = 7.077608465023241;
    HEAPF64[2305] = 7.786017351725641;
    HEAPF64[2306] = 8.49442623842804;
    HEAPF64[2307] = 9.202835125130441;
    HEAPF64[2308] = 9.911244011832842;
    HEAPF64[2309] = 10.619652898535243;
    HEAPF64[2310] = 11.328061785237644;
    HEAPF64[2311] = 12.036470671940044;
    HEAPF64[2312] = 12.744879558642445;
    HEAPF64[2313] = 13.453288445344846;
    HEAPF64[2314] = 14.161697332047247;
    HEAPF64[2315] = 14.870106218749648;
   }
   d4 = d12 * 1.51983458269;
   d3 = +Math_abs(+d4);
   if (!(d3 < 1.0e4)) {
    i1 = 32;
    break;
   }
   i1 = ~~d3;
   if ((i1 | 0) < 20) {
    d12 = +HEAPF64[18360 + (i1 << 3) >> 3];
    d3 = d12 + (d3 - +(i1 | 0)) * (+HEAPF64[18360 + (i1 + 1 << 3) >> 3] - d12);
   } else d3 = +HEAPF64[2315];
   d12 = (d7 - (d4 < 0.0 ? -d3 : d3)) * 1.753123908348329;
   HEAPF64[i10 >> 3] = +HEAPF64[i10 >> 3] + d12 * (d14 * d12);
  }
  i2 = i2 + 1 | 0;
  if (i2 >>> 0 >= 37) {
   i1 = 10;
   break;
  }
 }
 if ((i1 | 0) == 10) {
  STACKTOP = i17;
  return;
 } else if ((i1 | 0) == 24) ___assert_fail(14720, 10333, 303, 14731); else if ((i1 | 0) == 32) ___assert_fail(14720, 10333, 303, 14731);
}

function __ZNSt3__227__insertion_sort_incompleteIRZN7guetzli12_GLOBAL__N_19Processor24ComputeBlockZeroingOrderEPKsS5_iiiihPNS1_11OutputImageEPNS_6vectorINS2_9CoeffDataENS_9allocatorIS9_EEEEE3__0PNS_4pairIifEEEEbT0_SJ_T_(i12, i11) {
 i12 = i12 | 0;
 i11 = i11 | 0;
 var i1 = 0, i2 = 0, i3 = 0, f4 = f0, f5 = f0, i6 = 0, i7 = 0, i8 = 0, f9 = f0, i10 = 0;
 switch (i11 - i12 >> 3 | 0) {
 case 2:
  {
   i1 = i11 + -4 | 0;
   f4 = Math_fround(HEAPF32[i1 >> 2]);
   i2 = i12 + 4 | 0;
   f5 = Math_fround(HEAPF32[i2 >> 2]);
   if (!(f4 < f5)) {
    i12 = 1;
    return i12 | 0;
   }
   i11 = i11 + -8 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = i10;
   HEAPF32[i2 >> 2] = f4;
   HEAPF32[i1 >> 2] = f5;
   i12 = 1;
   return i12 | 0;
  }
 case 3:
  {
   i8 = i12 + 8 | 0;
   i3 = i11 + -8 | 0;
   i7 = i12 + 12 | 0;
   f5 = Math_fround(HEAPF32[i7 >> 2]);
   i6 = i12 + 4 | 0;
   f9 = Math_fround(HEAPF32[i6 >> 2]);
   i2 = i11 + -4 | 0;
   f4 = Math_fround(HEAPF32[i2 >> 2]);
   i1 = f4 < f5;
   if (!(f5 < f9)) {
    if (!i1) {
     i12 = 1;
     return i12 | 0;
    }
    i11 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
    HEAP32[i3 >> 2] = i11;
    HEAPF32[i7 >> 2] = f4;
    HEAPF32[i2 >> 2] = f5;
    f4 = Math_fround(HEAPF32[i7 >> 2]);
    f5 = Math_fround(HEAPF32[i6 >> 2]);
    if (!(f4 < f5)) {
     i12 = 1;
     return i12 | 0;
    }
    i11 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
    HEAP32[i8 >> 2] = i11;
    HEAPF32[i6 >> 2] = f4;
    HEAPF32[i7 >> 2] = f5;
    i12 = 1;
    return i12 | 0;
   }
   if (i1) {
    i11 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = HEAP32[i3 >> 2];
    HEAP32[i3 >> 2] = i11;
    HEAPF32[i6 >> 2] = f4;
    HEAPF32[i2 >> 2] = f9;
    i12 = 1;
    return i12 | 0;
   }
   i1 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i8 >> 2] = i1;
   HEAPF32[i6 >> 2] = f5;
   HEAPF32[i7 >> 2] = f9;
   f4 = Math_fround(HEAPF32[i2 >> 2]);
   if (!(f4 < f9)) {
    i12 = 1;
    return i12 | 0;
   }
   HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i3 >> 2] = i1;
   HEAPF32[i7 >> 2] = f4;
   HEAPF32[i2 >> 2] = f9;
   i12 = 1;
   return i12 | 0;
  }
 case 4:
  {
   __ZNSt3__27__sort4IRZN7guetzli12_GLOBAL__N_19Processor24ComputeBlockZeroingOrderEPKsS5_iiiihPNS1_11OutputImageEPNS_6vectorINS2_9CoeffDataENS_9allocatorIS9_EEEEE3__0PNS_4pairIifEEEEjT0_SJ_SJ_SJ_T_(i12, i12 + 8 | 0, i12 + 16 | 0, i11 + -8 | 0) | 0;
   i12 = 1;
   return i12 | 0;
  }
 case 5:
  {
   i8 = i12 + 8 | 0;
   i7 = i12 + 16 | 0;
   i3 = i12 + 24 | 0;
   __ZNSt3__27__sort4IRZN7guetzli12_GLOBAL__N_19Processor24ComputeBlockZeroingOrderEPKsS5_iiiihPNS1_11OutputImageEPNS_6vectorINS2_9CoeffDataENS_9allocatorIS9_EEEEE3__0PNS_4pairIifEEEEjT0_SJ_SJ_SJ_T_(i12, i8, i7, i3) | 0;
   i1 = i11 + -4 | 0;
   f4 = Math_fround(HEAPF32[i1 >> 2]);
   i2 = i12 + 28 | 0;
   f5 = Math_fround(HEAPF32[i2 >> 2]);
   if (!(f4 < f5)) {
    i12 = 1;
    return i12 | 0;
   }
   i11 = i11 + -8 | 0;
   i10 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = i10;
   HEAPF32[i2 >> 2] = f4;
   HEAPF32[i1 >> 2] = f5;
   f5 = Math_fround(HEAPF32[i2 >> 2]);
   i1 = i12 + 20 | 0;
   f4 = Math_fround(HEAPF32[i1 >> 2]);
   if (!(f5 < f4)) {
    i12 = 1;
    return i12 | 0;
   }
   i11 = HEAP32[i7 >> 2] | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   HEAP32[i7 >> 2] = i6;
   HEAP32[i3 >> 2] = i11;
   HEAPF32[i1 >> 2] = f5;
   HEAPF32[i2 >> 2] = f4;
   i2 = i12 + 12 | 0;
   f4 = Math_fround(HEAPF32[i2 >> 2]);
   if (!(f5 < f4)) {
    i12 = 1;
    return i12 | 0;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i6;
   HEAP32[i7 >> 2] = i11;
   HEAPF32[i2 >> 2] = f5;
   HEAPF32[i1 >> 2] = f4;
   i1 = i12 + 4 | 0;
   f4 = Math_fround(HEAPF32[i1 >> 2]);
   if (!(f5 < f4)) {
    i12 = 1;
    return i12 | 0;
   }
   i11 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i6;
   HEAP32[i8 >> 2] = i11;
   HEAPF32[i1 >> 2] = f5;
   HEAPF32[i2 >> 2] = f4;
   i12 = 1;
   return i12 | 0;
  }
 case 1:
 case 0:
  {
   i12 = 1;
   return i12 | 0;
  }
 default:
  {
   i3 = i12 + 16 | 0;
   i10 = i12 + 8 | 0;
   i6 = i12 + 12 | 0;
   f4 = Math_fround(HEAPF32[i6 >> 2]);
   i7 = i12 + 4 | 0;
   f5 = Math_fround(HEAPF32[i7 >> 2]);
   i8 = i12 + 20 | 0;
   f9 = Math_fround(HEAPF32[i8 >> 2]);
   i1 = f9 < f4;
   do if (f4 < f5) {
    if (i1) {
     i10 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = HEAP32[i3 >> 2];
     HEAP32[i3 >> 2] = i10;
     HEAPF32[i7 >> 2] = f9;
     HEAPF32[i8 >> 2] = f5;
     break;
    }
    i1 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i10 >> 2] = i1;
    HEAPF32[i7 >> 2] = f4;
    HEAPF32[i6 >> 2] = f5;
    if (f9 < f5) {
     HEAP32[i10 >> 2] = HEAP32[i3 >> 2];
     HEAP32[i3 >> 2] = i1;
     HEAPF32[i6 >> 2] = f9;
     HEAPF32[i8 >> 2] = f5;
    }
   } else if (i1 ? (i1 = HEAP32[i10 >> 2] | 0, i2 = HEAP32[i3 >> 2] | 0, HEAP32[i10 >> 2] = i2, HEAP32[i3 >> 2] = i1, HEAPF32[i6 >> 2] = f9, HEAPF32[i8 >> 2] = f4, f9 < f5) : 0) {
    i8 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = i2;
    HEAP32[i10 >> 2] = i8;
    HEAPF32[i7 >> 2] = f9;
    HEAPF32[i6 >> 2] = f5;
   } while (0);
   i1 = i12 + 24 | 0;
   L13 : do if ((i1 | 0) == (i11 | 0)) {
    i2 = 1;
    i1 = 0;
   } else {
    i2 = 0;
    while (1) {
     f4 = Math_fround(HEAPF32[i1 + 4 >> 2]);
     if (f4 < Math_fround(HEAPF32[i3 + 4 >> 2])) {
      i8 = HEAP32[i1 >> 2] | 0;
      i6 = i1;
      while (1) {
       HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
       i7 = i3 + 4 | 0;
       HEAP32[i6 + 4 >> 2] = HEAP32[i7 >> 2];
       if ((i3 | 0) == (i12 | 0)) break;
       if (f4 < Math_fround(HEAPF32[i3 + -4 >> 2])) {
        i6 = i3;
        i3 = i3 + -8 | 0;
       } else break;
      }
      HEAP32[i3 >> 2] = i8;
      HEAPF32[i7 >> 2] = f4;
      i2 = i2 + 1 | 0;
      if ((i2 | 0) == 8) {
       i2 = 0;
       i1 = (i1 + 8 | 0) == (i11 | 0);
       break L13;
      }
     }
     i3 = i1 + 8 | 0;
     if ((i3 | 0) == (i11 | 0)) {
      i2 = 1;
      i1 = 0;
      break;
     } else {
      i10 = i1;
      i1 = i3;
      i3 = i10;
     }
    }
   } while (0);
   i12 = i1 | i2;
   return i12 | 0;
  }
 }
 return 0;
}

function __ZNSt3__227__insertion_sort_incompleteIRZN7guetzli12_GLOBAL__N_19Processor22SelectFrequencyMaskingERKNS1_8JPEGDataEPNS1_11OutputImageEhdbE3__1PNS_4pairIifEEEEbT0_SE_T_(i12, i11) {
 i12 = i12 | 0;
 i11 = i11 | 0;
 var i1 = 0, i2 = 0, i3 = 0, f4 = f0, f5 = f0, i6 = 0, i7 = 0, i8 = 0, f9 = f0, i10 = 0;
 switch (i11 - i12 >> 3 | 0) {
 case 2:
  {
   i1 = i11 + -4 | 0;
   f4 = Math_fround(HEAPF32[i1 >> 2]);
   i2 = i12 + 4 | 0;
   f5 = Math_fround(HEAPF32[i2 >> 2]);
   if (!(f4 < f5)) {
    i12 = 1;
    return i12 | 0;
   }
   i11 = i11 + -8 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = i10;
   HEAPF32[i2 >> 2] = f4;
   HEAPF32[i1 >> 2] = f5;
   i12 = 1;
   return i12 | 0;
  }
 case 3:
  {
   i8 = i12 + 8 | 0;
   i3 = i11 + -8 | 0;
   i7 = i12 + 12 | 0;
   f5 = Math_fround(HEAPF32[i7 >> 2]);
   i6 = i12 + 4 | 0;
   f9 = Math_fround(HEAPF32[i6 >> 2]);
   i2 = i11 + -4 | 0;
   f4 = Math_fround(HEAPF32[i2 >> 2]);
   i1 = f4 < f5;
   if (!(f5 < f9)) {
    if (!i1) {
     i12 = 1;
     return i12 | 0;
    }
    i11 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
    HEAP32[i3 >> 2] = i11;
    HEAPF32[i7 >> 2] = f4;
    HEAPF32[i2 >> 2] = f5;
    f4 = Math_fround(HEAPF32[i7 >> 2]);
    f5 = Math_fround(HEAPF32[i6 >> 2]);
    if (!(f4 < f5)) {
     i12 = 1;
     return i12 | 0;
    }
    i11 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
    HEAP32[i8 >> 2] = i11;
    HEAPF32[i6 >> 2] = f4;
    HEAPF32[i7 >> 2] = f5;
    i12 = 1;
    return i12 | 0;
   }
   if (i1) {
    i11 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = HEAP32[i3 >> 2];
    HEAP32[i3 >> 2] = i11;
    HEAPF32[i6 >> 2] = f4;
    HEAPF32[i2 >> 2] = f9;
    i12 = 1;
    return i12 | 0;
   }
   i1 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i8 >> 2] = i1;
   HEAPF32[i6 >> 2] = f5;
   HEAPF32[i7 >> 2] = f9;
   f4 = Math_fround(HEAPF32[i2 >> 2]);
   if (!(f4 < f9)) {
    i12 = 1;
    return i12 | 0;
   }
   HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i3 >> 2] = i1;
   HEAPF32[i7 >> 2] = f4;
   HEAPF32[i2 >> 2] = f9;
   i12 = 1;
   return i12 | 0;
  }
 case 4:
  {
   __ZNSt3__27__sort4IRZN7guetzli12_GLOBAL__N_19Processor22SelectFrequencyMaskingERKNS1_8JPEGDataEPNS1_11OutputImageEhdbE3__1PNS_4pairIifEEEEjT0_SE_SE_SE_T_(i12, i12 + 8 | 0, i12 + 16 | 0, i11 + -8 | 0) | 0;
   i12 = 1;
   return i12 | 0;
  }
 case 5:
  {
   i8 = i12 + 8 | 0;
   i7 = i12 + 16 | 0;
   i3 = i12 + 24 | 0;
   __ZNSt3__27__sort4IRZN7guetzli12_GLOBAL__N_19Processor22SelectFrequencyMaskingERKNS1_8JPEGDataEPNS1_11OutputImageEhdbE3__1PNS_4pairIifEEEEjT0_SE_SE_SE_T_(i12, i8, i7, i3) | 0;
   i1 = i11 + -4 | 0;
   f4 = Math_fround(HEAPF32[i1 >> 2]);
   i2 = i12 + 28 | 0;
   f5 = Math_fround(HEAPF32[i2 >> 2]);
   if (!(f4 < f5)) {
    i12 = 1;
    return i12 | 0;
   }
   i11 = i11 + -8 | 0;
   i10 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = i10;
   HEAPF32[i2 >> 2] = f4;
   HEAPF32[i1 >> 2] = f5;
   f5 = Math_fround(HEAPF32[i2 >> 2]);
   i1 = i12 + 20 | 0;
   f4 = Math_fround(HEAPF32[i1 >> 2]);
   if (!(f5 < f4)) {
    i12 = 1;
    return i12 | 0;
   }
   i11 = HEAP32[i7 >> 2] | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   HEAP32[i7 >> 2] = i6;
   HEAP32[i3 >> 2] = i11;
   HEAPF32[i1 >> 2] = f5;
   HEAPF32[i2 >> 2] = f4;
   i2 = i12 + 12 | 0;
   f4 = Math_fround(HEAPF32[i2 >> 2]);
   if (!(f5 < f4)) {
    i12 = 1;
    return i12 | 0;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i6;
   HEAP32[i7 >> 2] = i11;
   HEAPF32[i2 >> 2] = f5;
   HEAPF32[i1 >> 2] = f4;
   i1 = i12 + 4 | 0;
   f4 = Math_fround(HEAPF32[i1 >> 2]);
   if (!(f5 < f4)) {
    i12 = 1;
    return i12 | 0;
   }
   i11 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i6;
   HEAP32[i8 >> 2] = i11;
   HEAPF32[i1 >> 2] = f5;
   HEAPF32[i2 >> 2] = f4;
   i12 = 1;
   return i12 | 0;
  }
 case 1:
 case 0:
  {
   i12 = 1;
   return i12 | 0;
  }
 default:
  {
   i3 = i12 + 16 | 0;
   i10 = i12 + 8 | 0;
   i6 = i12 + 12 | 0;
   f4 = Math_fround(HEAPF32[i6 >> 2]);
   i7 = i12 + 4 | 0;
   f5 = Math_fround(HEAPF32[i7 >> 2]);
   i8 = i12 + 20 | 0;
   f9 = Math_fround(HEAPF32[i8 >> 2]);
   i1 = f9 < f4;
   do if (f4 < f5) {
    if (i1) {
     i10 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = HEAP32[i3 >> 2];
     HEAP32[i3 >> 2] = i10;
     HEAPF32[i7 >> 2] = f9;
     HEAPF32[i8 >> 2] = f5;
     break;
    }
    i1 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i10 >> 2] = i1;
    HEAPF32[i7 >> 2] = f4;
    HEAPF32[i6 >> 2] = f5;
    if (f9 < f5) {
     HEAP32[i10 >> 2] = HEAP32[i3 >> 2];
     HEAP32[i3 >> 2] = i1;
     HEAPF32[i6 >> 2] = f9;
     HEAPF32[i8 >> 2] = f5;
    }
   } else if (i1 ? (i1 = HEAP32[i10 >> 2] | 0, i2 = HEAP32[i3 >> 2] | 0, HEAP32[i10 >> 2] = i2, HEAP32[i3 >> 2] = i1, HEAPF32[i6 >> 2] = f9, HEAPF32[i8 >> 2] = f4, f9 < f5) : 0) {
    i8 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = i2;
    HEAP32[i10 >> 2] = i8;
    HEAPF32[i7 >> 2] = f9;
    HEAPF32[i6 >> 2] = f5;
   } while (0);
   i1 = i12 + 24 | 0;
   L13 : do if ((i1 | 0) == (i11 | 0)) {
    i2 = 1;
    i1 = 0;
   } else {
    i2 = 0;
    while (1) {
     f4 = Math_fround(HEAPF32[i1 + 4 >> 2]);
     if (f4 < Math_fround(HEAPF32[i3 + 4 >> 2])) {
      i8 = HEAP32[i1 >> 2] | 0;
      i6 = i1;
      while (1) {
       HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
       i7 = i3 + 4 | 0;
       HEAP32[i6 + 4 >> 2] = HEAP32[i7 >> 2];
       if ((i3 | 0) == (i12 | 0)) break;
       if (f4 < Math_fround(HEAPF32[i3 + -4 >> 2])) {
        i6 = i3;
        i3 = i3 + -8 | 0;
       } else break;
      }
      HEAP32[i3 >> 2] = i8;
      HEAPF32[i7 >> 2] = f4;
      i2 = i2 + 1 | 0;
      if ((i2 | 0) == 8) {
       i2 = 0;
       i1 = (i1 + 8 | 0) == (i11 | 0);
       break L13;
      }
     }
     i3 = i1 + 8 | 0;
     if ((i3 | 0) == (i11 | 0)) {
      i2 = 1;
      i1 = 0;
      break;
     } else {
      i10 = i1;
      i1 = i3;
      i3 = i10;
     }
    }
   } while (0);
   i12 = i1 | i2;
   return i12 | 0;
  }
 }
 return 0;
}

function __ZNK7guetzli21ButteraugliComparator12CompareBlockERKNS_11OutputImageEii(i6, i5, i1, i2) {
 i6 = i6 | 0;
 i5 = i5 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = 0.0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = 0.0, d23 = 0.0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 3184 | 0;
 i19 = i20 + 3168 | 0;
 i17 = i20 + 3156 | 0;
 i16 = i20 + 3144 | 0;
 i12 = i20 + 1608 | 0;
 i13 = i20 + 72 | 0;
 i14 = i20 + 48 | 0;
 i7 = i20 + 24 | 0;
 i8 = i20;
 i9 = i1 << 3;
 i10 = i2 << 3;
 i11 = i6 + 4 | 0;
 i1 = (Math_imul(((HEAP32[i11 >> 2] | 0) + 7 | 0) / 8 | 0, i2) | 0) + i1 | 0;
 i1 = (HEAP32[i6 + 40 >> 2] | 0) + (i1 * 12 | 0) | 0;
 HEAP32[i17 >> 2] = 0;
 i2 = i17 + 4 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i17 + 8 >> 2] = 0;
 i3 = __Znwj(256) | 0;
 HEAP32[i17 >> 2] = i3;
 i18 = i3 + 256 | 0;
 HEAP32[i17 + 8 >> 2] = i18;
 _memset(i3 | 0, 0, 256) | 0;
 HEAP32[i2 >> 2] = i18;
 HEAP32[i19 >> 2] = 0;
 i18 = i19 + 4 | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i19 + 8 >> 2] = 0;
 i3 = __Znwj(36) | 0;
 HEAP32[i18 >> 2] = i3;
 HEAP32[i19 >> 2] = i3;
 HEAP32[i19 + 8 >> 2] = i3 + 36;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i3, i17);
 i3 = (HEAP32[i18 >> 2] | 0) + 12 | 0;
 HEAP32[i18 >> 2] = i3;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i3, i17);
 i3 = (HEAP32[i18 >> 2] | 0) + 12 | 0;
 HEAP32[i18 >> 2] = i3;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i3, i17);
 HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 12;
 i3 = HEAP32[i17 >> 2] | 0;
 if (i3 | 0) {
  i4 = HEAP32[i2 >> 2] | 0;
  if ((i4 | 0) != (i3 | 0)) HEAP32[i2 >> 2] = i4 + (~((i4 + -4 - i3 | 0) >>> 2) << 2);
  __ZdlPv(i3);
 }
 __ZNK7guetzli11OutputImage11ToLinearRGBEiiiiPNSt3__26vectorINS2_IfNS1_9allocatorIfEEEENS3_IS5_EEEE(i5, i9, i10, 8, 8, i19);
 __ZN11butteraugli18OpsinDynamicsImageEjjRNSt3__26vectorINS1_IfNS0_9allocatorIfEEEENS2_IS4_EEEE(8, 8, i19);
 __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEEC2ERKS5_(i17, i1);
 __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEEC2ERKS5_(i16, i19);
 __ZN11butteraugli23MaskHighIntensityChangeEjjRKNSt3__26vectorINS1_IfNS0_9allocatorIfEEEENS2_IS4_EEEES8_RS6_S9_(8, 8, i1, i19, i17, i16);
 i4 = HEAP32[i17 >> 2] | 0;
 i5 = HEAP32[i16 >> 2] | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 i1 = 0;
 do {
  HEAPF64[i12 + (i1 << 3) >> 3] = +Math_fround(HEAPF32[i2 + (i1 << 2) >> 2]);
  HEAPF64[i13 + (i1 << 3) >> 3] = +Math_fround(HEAPF32[i3 + (i1 << 2) >> 2]);
  i1 = i1 + 1 | 0;
 } while ((i1 | 0) != 64);
 i2 = HEAP32[i4 + 12 >> 2] | 0;
 i3 = HEAP32[i5 + 12 >> 2] | 0;
 i1 = 0;
 do {
  i21 = i1 + 64 | 0;
  HEAPF64[i12 + (i21 << 3) >> 3] = +Math_fround(HEAPF32[i2 + (i1 << 2) >> 2]);
  HEAPF64[i13 + (i21 << 3) >> 3] = +Math_fround(HEAPF32[i3 + (i1 << 2) >> 2]);
  i1 = i1 + 1 | 0;
 } while ((i1 | 0) != 64);
 i3 = HEAP32[i4 + 24 >> 2] | 0;
 i2 = HEAP32[i5 + 24 >> 2] | 0;
 i1 = 0;
 do {
  i21 = i1 + 128 | 0;
  HEAPF64[i12 + (i21 << 3) >> 3] = +Math_fround(HEAPF32[i3 + (i1 << 2) >> 2]);
  HEAPF64[i13 + (i21 << 3) >> 3] = +Math_fround(HEAPF32[i2 + (i1 << 2) >> 2]);
  i1 = i1 + 1 | 0;
 } while ((i1 | 0) != 64);
 HEAP32[i14 >> 2] = 0;
 HEAP32[i14 + 4 >> 2] = 0;
 HEAP32[i14 + 8 >> 2] = 0;
 HEAP32[i14 + 12 >> 2] = 0;
 HEAP32[i14 + 16 >> 2] = 0;
 HEAP32[i14 + 20 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i7 + 8 >> 2] = 0;
 HEAP32[i7 + 12 >> 2] = 0;
 HEAP32[i7 + 16 >> 2] = 0;
 HEAP32[i7 + 20 >> 2] = 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = 0;
 HEAP32[i8 + 16 >> 2] = 0;
 HEAP32[i8 + 20 >> 2] = 0;
 __ZN11butteraugli20ButteraugliBlockDiffEPdS0_S0_S0_S0_(i12, i13, i14, i7, i8);
 i21 = HEAP32[i6 + 28 >> 2] | 0;
 i1 = (Math_imul(HEAP32[i11 >> 2] | 0, i10) | 0) + i9 | 0;
 d23 = +Math_fround(HEAPF32[(HEAP32[i21 >> 2] | 0) + (i1 << 2) >> 2]);
 d22 = +Math_fround(HEAPF32[(HEAP32[i21 + 12 >> 2] | 0) + (i1 << 2) >> 2]);
 d15 = +Math_fround(HEAPF32[(HEAP32[i21 + 24 >> 2] | 0) + (i1 << 2) >> 2]);
 d15 = +Math_sqrt(+((+HEAPF64[i14 >> 3] * d23 + 0.0 + d23 * +HEAPF64[i7 >> 3] + +HEAPF64[i14 + 8 >> 3] * d22 + d22 * +HEAPF64[i7 + 8 >> 3] + +HEAPF64[i14 + 16 >> 3] * d15 + d15 * +HEAPF64[i7 + 16 >> 3]) * .95 + (d23 * +HEAPF64[i8 >> 3] + 0.0 + d22 * +HEAPF64[i8 + 8 >> 3] + d15 * +HEAPF64[i8 + 16 >> 3]) * .05));
 i1 = HEAP32[i16 >> 2] | 0;
 if (i1 | 0) {
  i5 = i16 + 4 | 0;
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -12 | 0;
    HEAP32[i5 >> 2] = i3;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) i2 = i3; else {
     i2 = i2 + -8 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
     i2 = HEAP32[i5 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i16 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i1 = HEAP32[i17 >> 2] | 0;
 if (i1 | 0) {
  i5 = i17 + 4 | 0;
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -12 | 0;
    HEAP32[i5 >> 2] = i3;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) i2 = i3; else {
     i2 = i2 + -8 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
     i2 = HEAP32[i5 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i17 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i1 = HEAP32[i19 >> 2] | 0;
 if (!i1) {
  STACKTOP = i20;
  return +d15;
 }
 i2 = HEAP32[i18 >> 2] | 0;
 if ((i2 | 0) != (i1 | 0)) {
  do {
   i3 = i2 + -12 | 0;
   HEAP32[i18 >> 2] = i3;
   i4 = HEAP32[i3 >> 2] | 0;
   if (!i4) i2 = i3; else {
    i2 = i2 + -8 | 0;
    i3 = HEAP32[i2 >> 2] | 0;
    if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
    __ZdlPv(i4);
    i2 = HEAP32[i18 >> 2] | 0;
   }
  } while ((i2 | 0) != (i1 | 0));
  i1 = HEAP32[i19 >> 2] | 0;
 }
 __ZdlPv(i1);
 STACKTOP = i20;
 return +d15;
}
function __ZN7guetzli21ButteraugliComparator7CompareERKNS_11OutputImageE(i12, i1) {
 i12 = i12 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, f5 = f0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, f22 = f0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 1104 | 0;
 i13 = i21 + 8 | 0;
 i10 = i21;
 i20 = i21 + 60 | 0;
 i18 = i21 + 40 | 0;
 i17 = i21 + 28 | 0;
 i14 = i21 + 72 | 0;
 i15 = i21 + 16 | 0;
 i6 = i12 + 4 | 0;
 i7 = i12 + 8 | 0;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i18, Math_imul(HEAP32[i7 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0);
 HEAP32[i20 >> 2] = 0;
 i19 = i20 + 4 | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 i2 = __Znwj(36) | 0;
 HEAP32[i19 >> 2] = i2;
 HEAP32[i20 >> 2] = i2;
 HEAP32[i20 + 8 >> 2] = i2 + 36;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i2, i18);
 i2 = (HEAP32[i19 >> 2] | 0) + 12 | 0;
 HEAP32[i19 >> 2] = i2;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i2, i18);
 i2 = (HEAP32[i19 >> 2] | 0) + 12 | 0;
 HEAP32[i19 >> 2] = i2;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i2, i18);
 HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 12;
 i2 = HEAP32[i18 >> 2] | 0;
 if (i2 | 0) {
  i3 = i18 + 4 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) != (i2 | 0)) HEAP32[i3 >> 2] = i4 + (~((i4 + -4 - i2 | 0) >>> 2) << 2);
  __ZdlPv(i2);
 }
 __ZNK7guetzli11OutputImage11ToLinearRGBEiiiiPNSt3__26vectorINS2_IfNS1_9allocatorIfEEEENS3_IS5_EEEE(i1, 0, 0, HEAP32[i1 >> 2] | 0, HEAP32[i1 + 4 >> 2] | 0, i20);
 __ZN11butteraugli18OpsinDynamicsImageEjjRNSt3__26vectorINS1_IfNS0_9allocatorIfEEEENS2_IS4_EEEE(HEAP32[i6 >> 2] | 0, HEAP32[i7 >> 2] | 0, i20);
 i16 = i18 + 16 | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i18 + 4 >> 2] = 0;
 HEAP32[i18 + 8 >> 2] = 0;
 HEAP32[i18 + 12 >> 2] = 0;
 HEAP32[i16 >> 2] = 11;
 __ZN11butteraugliL16PlanesFromPackedIfEENSt3__26vectorINS_5ImageIT_EENS1_9allocatorIS5_EEEEjjRKNS2_INS2_IS4_NS6_IS4_EEEENS6_ISA_EEEE(i17, HEAP32[i6 >> 2] | 0, HEAP32[i7 >> 2] | 0, i20);
 __ZN11butteraugli21ButteraugliComparator25DiffmapOpsinDynamicsImageERKNSt3__26vectorINS_5ImageIfEENS1_9allocatorIS4_EEEES9_RS4_(i12 + 52 | 0, i12 + 16 | 0, i17, i18);
 i9 = i12 + 80 | 0;
 i1 = Math_imul(HEAP32[i7 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
 i2 = i12 + 84 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i3 = i6 - i4 >> 2;
 if (i1 >>> 0 <= i3 >>> 0) {
  if (i1 >>> 0 < i3 >>> 0 ? (i8 = i4 + (i1 << 2) | 0, (i6 | 0) != (i8 | 0)) : 0) HEAP32[i2 >> 2] = i6 + (~((i6 + -4 - i8 | 0) >>> 2) << 2);
 } else __ZNSt3__26vectorIfNS_9allocatorIfEEE8__appendEj(i9, i1 - i3 | 0);
 i4 = HEAP32[i18 >> 2] | 0;
 i8 = HEAP32[i18 + 4 >> 2] | 0;
 L13 : do if (!i8) f5 = Math_fround(0.0); else {
  i2 = i4 << 2;
  i6 = HEAP32[i18 + 12 >> 2] | 0;
  i7 = HEAP32[i18 + 8 >> 2] | 0;
  i1 = 0;
  do {
   if (i8 >>> 0 <= i1 >>> 0) {
    i11 = 13;
    break;
   }
   i3 = i6 + (Math_imul(i7, i1) | 0) | 0;
   _memcpy((HEAP32[i9 >> 2] | 0) + ((Math_imul(i1, i4) | 0) << 2) | 0, i3 | 0, i2 | 0) | 0;
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 < i8 >>> 0);
  if ((i11 | 0) == 13) {
   HEAP32[i10 >> 2] = i1;
   HEAP32[i10 + 4 >> 2] = i8;
   _printf(14863, i10) | 0;
   _abort();
  }
  if (!i4) {
   i1 = 0;
   while (1) {
    i1 = i1 + 1 | 0;
    if ((i1 | 0) == (i8 | 0)) {
     f5 = Math_fround(0.0);
     break L13;
    }
   }
  } else {
   i1 = 0;
   f5 = Math_fround(0.0);
  }
  do {
   i3 = i6 + (Math_imul(i1, i7) | 0) | 0;
   i2 = 0;
   do {
    f22 = Math_fround(HEAPF32[i3 + (i2 << 2) >> 2]);
    f5 = f5 < f22 ? f22 : f5;
    i2 = i2 + 1 | 0;
   } while ((i2 | 0) != (i4 | 0));
   i1 = i1 + 1 | 0;
  } while ((i1 | 0) != (i8 | 0));
 } while (0);
 HEAPF32[i12 + 76 >> 2] = f5;
 HEAPF64[i13 >> 3] = +f5;
 _snprintf(i14, 1024, 9666, i13) | 0;
 HEAP8[i14 + 1023 >> 0] = 0;
 i2 = HEAP32[i12 + 92 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i15 + 4 >> 2] = 0;
 HEAP32[i15 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i15, i14, _strlen(i14) | 0);
 i1 = HEAP32[i2 + 12 >> 2] | 0;
 if (i1 | 0) {
  i14 = HEAP8[i15 + 11 >> 0] | 0;
  i13 = i14 << 24 >> 24 < 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i1, i13 ? HEAP32[i15 >> 2] | 0 : i15, i13 ? HEAP32[i15 + 4 >> 2] | 0 : i14 & 255) | 0;
 }
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 if (i1 | 0) _fputs((HEAP8[i15 + 11 >> 0] | 0) < 0 ? HEAP32[i15 >> 2] | 0 : i15, i1) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i15);
 i1 = HEAP32[i17 >> 2] | 0;
 if (i1 | 0) {
  i4 = i17 + 4 | 0;
  i2 = HEAP32[i4 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    HEAP32[i4 >> 2] = i2 + -20;
    i15 = i2 + -8 | 0;
    i3 = HEAP32[i15 >> 2] | 0;
    HEAP32[i15 >> 2] = 0;
    if (i3 | 0) FUNCTION_TABLE_vi[HEAP32[i2 + -4 >> 2] & 15](i3);
    i2 = HEAP32[i4 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i17 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i18 = i18 + 12 | 0;
 i1 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[i16 >> 2] & 15](i1);
 i1 = HEAP32[i20 >> 2] | 0;
 if (!i1) {
  STACKTOP = i21;
  return;
 }
 i2 = HEAP32[i19 >> 2] | 0;
 if ((i2 | 0) != (i1 | 0)) {
  do {
   i3 = i2 + -12 | 0;
   HEAP32[i19 >> 2] = i3;
   i4 = HEAP32[i3 >> 2] | 0;
   if (!i4) i2 = i3; else {
    i2 = i2 + -8 | 0;
    i3 = HEAP32[i2 >> 2] | 0;
    if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
    __ZdlPv(i4);
    i2 = HEAP32[i19 >> 2] | 0;
   }
  } while ((i2 | 0) != (i1 | 0));
  i1 = HEAP32[i20 >> 2] | 0;
 }
 __ZdlPv(i1);
 STACKTOP = i21;
 return;
}

function __ZN11butteraugli18OpsinDynamicsImageEjjRNSt3__26vectorINS1_IfNS0_9allocatorIfEEEENS2_IS4_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = 0.0, d16 = 0.0, d17 = 0.0, d18 = 0.0, d19 = 0.0, d20 = 0.0, d21 = 0.0, d22 = 0.0, d23 = 0.0, d24 = 0.0, d25 = 0.0, d26 = 0.0, d27 = 0.0, d28 = 0.0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = i13;
 __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEEC2ERKS5_(i12, i3);
 __ZN11butteraugli4BlurEjjPfdd(i1, i2, HEAP32[HEAP32[i12 >> 2] >> 2] | 0, 1.1, 0.0);
 __ZN11butteraugli4BlurEjjPfdd(i1, i2, HEAP32[(HEAP32[i12 >> 2] | 0) + 12 >> 2] | 0, 1.1, 0.0);
 __ZN11butteraugli4BlurEjjPfdd(i1, i2, HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] | 0, 1.1, 0.0);
 i4 = HEAP32[i3 >> 2] | 0;
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i1 = HEAP32[i12 >> 2] | 0;
 if ((i2 | 0) == (i3 | 0)) {
  if (!i1) {
   STACKTOP = i13;
   return;
  }
 } else {
  i14 = i4 + 12 | 0;
  i10 = HEAP32[i14 >> 2] | 0;
  i5 = i4 + 24 | 0;
  i11 = HEAP32[i5 >> 2] | 0;
  i6 = i2 - i3 >> 2;
  i7 = HEAP32[i1 >> 2] | 0;
  i8 = HEAP32[i1 + 12 >> 2] | 0;
  i9 = HEAP32[i1 + 24 >> 2] | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i14 >> 2] | 0;
  i5 = HEAP32[i5 >> 2] | 0;
  i2 = 0;
  do {
   d23 = +Math_fround(HEAPF32[i7 + (i2 << 2) >> 2]);
   d18 = +Math_fround(HEAPF32[i8 + (i2 << 2) >> 2]);
   d15 = +Math_fround(HEAPF32[i9 + (i2 << 2) >> 2]);
   d22 = d23 * .348036746003 + d18 * .577814843137 + d15 * .0544556093735 + .774145581713;
   d21 = d23 * .26922717275 + d18 * .767247733938 + d15 * .0366922708552 + .920130265014;
   d15 = d23 * .0882062883536 + d18 * .158581714673 + d15 * .712857943858 + 10.6524069248;
   d18 = (+Math_fround(d22) + -.77) / 273.81 * 2.0 + -1.0;
   d23 = d18 * 0.0;
   d23 = d23 + d23;
   d20 = d23 + 6.683258861509244;
   d25 = d18 * d20;
   d25 = d25 + d25 + 85.84086033631436;
   d16 = d18 * d25;
   d20 = d16 + d16 - d20 + 373.5661002232874;
   d16 = d18 * d20;
   d25 = d16 + d16 - d25 + 908.6622127396595;
   d16 = d18 * d25;
   d23 = d23 + .035662329617191;
   d26 = d18 * d23;
   d26 = d26 + d26 + .899112889751053;
   d27 = d18 * d26;
   d23 = d27 + d27 - d23 + 4.711532733641639;
   d27 = d18 * d23;
   d26 = d27 + d27 - d26 + 12.161463238367844;
   d27 = d18 * d26;
   d26 = d18 * (d27 + d27 - d23 + 20.557285797683576) - d26 + 12.262350348616792;
   d25 = +Math_fround((d18 * (d16 + d16 - d20 + 1496.0584520158125) - d25 + 881.9794765564783) / d26);
   d20 = (+Math_fround(d21) + -.77) / 273.81 * 2.0 + -1.0;
   d16 = d20 * 0.0;
   d16 = d16 + d16;
   d18 = d16 + 6.683258861509244;
   d23 = d20 * d18;
   d23 = d23 + d23 + 85.84086033631436;
   d27 = d20 * d23;
   d18 = d27 + d27 - d18 + 373.5661002232874;
   d27 = d20 * d18;
   d23 = d27 + d27 - d23 + 908.6622127396595;
   d27 = d20 * d23;
   d16 = d16 + .035662329617191;
   d24 = d20 * d16;
   d24 = d24 + d24 + .899112889751053;
   d19 = d20 * d24;
   d16 = d19 + d19 - d16 + 4.711532733641639;
   d19 = d20 * d16;
   d24 = d19 + d19 - d24 + 12.161463238367844;
   d19 = d20 * d24;
   d24 = d20 * (d19 + d19 - d16 + 20.557285797683576) - d24 + 12.262350348616792;
   d23 = +Math_fround((d20 * (d27 + d27 - d18 + 1496.0584520158125) - d23 + 881.9794765564783) / d24);
   d18 = (+Math_fround(d15) + -.77) / 273.81 * 2.0 + -1.0;
   d27 = d18 * 0.0;
   d27 = d27 + d27;
   d20 = d27 + 6.683258861509244;
   d16 = d18 * d20;
   d16 = d16 + d16 + 85.84086033631436;
   d19 = d18 * d16;
   d20 = d19 + d19 - d20 + 373.5661002232874;
   d19 = d18 * d20;
   d16 = d19 + d19 - d16 + 908.6622127396595;
   d19 = d18 * d16;
   d27 = d27 + .035662329617191;
   d17 = d18 * d27;
   d17 = d17 + d17 + .899112889751053;
   d28 = d18 * d17;
   d27 = d28 + d28 - d27 + 4.711532733641639;
   d28 = d18 * d27;
   d17 = d28 + d28 - d17 + 12.161463238367844;
   d28 = d18 * d17;
   d17 = d18 * (d28 + d28 - d27 + 20.557285797683576) - d17 + 12.262350348616792;
   d16 = +Math_fround((d18 * (d19 + d19 - d20 + 1496.0584520158125) - d16 + 881.9794765564783) / d17);
   i14 = i3 + (i2 << 2) | 0;
   d20 = +Math_fround(HEAPF32[i14 >> 2]);
   d19 = +Math_fround(HEAPF32[i4 + (i2 << 2) >> 2]);
   d18 = +Math_fround(HEAPF32[i5 + (i2 << 2) >> 2]);
   d22 = (d20 * .348036746003 + d19 * .577814843137 + d18 * .0544556093735 + .774145581713) * ((d26 == 0.0 ? 0.0 : d25) / d22);
   d21 = (d20 * .26922717275 + d19 * .767247733938 + d18 * .0366922708552 + .920130265014) * ((d24 == 0.0 ? 0.0 : d23) / d21);
   HEAPF32[i14 >> 2] = Math_fround(d22 * 1.01611726948 - d21 * .982482243696);
   HEAPF32[i10 + (i2 << 2) >> 2] = Math_fround(d22 * 1.43571362627 + d21 * .896039849412);
   HEAPF32[i11 + (i2 << 2) >> 2] = Math_fround((d20 * .0882062883536 + d19 * .158581714673 + d18 * .712857943858 + 10.6524069248) * ((d17 == 0.0 ? 0.0 : d16) / d15));
   i2 = i2 + 1 | 0;
  } while (i2 >>> 0 < i6 >>> 0);
 }
 i5 = i12 + 4 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) != (i1 | 0)) {
  do {
   i3 = i2 + -12 | 0;
   HEAP32[i5 >> 2] = i3;
   i4 = HEAP32[i3 >> 2] | 0;
   if (!i4) i2 = i3; else {
    i2 = i2 + -8 | 0;
    i3 = HEAP32[i2 >> 2] | 0;
    if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
    __ZdlPv(i4);
    i2 = HEAP32[i5 >> 2] | 0;
   }
  } while ((i2 | 0) != (i1 | 0));
  i1 = HEAP32[i12 >> 2] | 0;
 }
 __ZdlPv(i1);
 STACKTOP = i13;
 return;
}

function __ZN7guetzli9BitWriter9WriteBitsEiy(i6, i1, i2, i3) {
 i6 = i6 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i7 = 0, i8 = 0;
 i7 = i6 + 24 | 0;
 i4 = (HEAP32[i7 >> 2] | 0) - i1 | 0;
 HEAP32[i7 >> 2] = i4;
 i1 = _bitshift64Shl(i2 | 0, i3 | 0, i4 | 0) | 0;
 i5 = i6 + 16 | 0;
 i2 = i5;
 i1 = i1 | HEAP32[i2 >> 2];
 i2 = tempRet0 | HEAP32[i2 + 4 >> 2];
 i3 = i5;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = i2;
 if ((i4 | 0) >= 17) return;
 i8 = (i1 | 65535) ^ -65536;
 i4 = ~i2;
 i3 = _i64Add(i8 | 0, i4 | 0, -16843009, -16843010) | 0;
 do if (((i8 & -2139095040 ^ -2139095040) & i3 | 0) == 0 & ((i4 & -2139062144 ^ -2139062144) & tempRet0 | 0) == 0) {
  i3 = i6 + 8 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 + 6 | 0) >>> 0 < (HEAP32[i6 >> 2] | 0) >>> 0) {
   i2 = _bitshift64Lshr(i1 | 0, i2 | 0, 56) | 0;
   i8 = i6 + 4 | 0;
   HEAP8[(HEAP32[i8 >> 2] | 0) + i4 >> 0] = i2;
   i6 = i5;
   i6 = _bitshift64Lshr(HEAP32[i6 >> 2] | 0, HEAP32[i6 + 4 >> 2] | 0, 48) | 0;
   HEAP8[(HEAP32[i8 >> 2] | 0) + ((HEAP32[i3 >> 2] | 0) + 1) >> 0] = i6;
   i6 = i5;
   i6 = _bitshift64Lshr(HEAP32[i6 >> 2] | 0, HEAP32[i6 + 4 >> 2] | 0, 40) | 0;
   HEAP8[(HEAP32[i8 >> 2] | 0) + ((HEAP32[i3 >> 2] | 0) + 2) >> 0] = i6;
   HEAP8[(HEAP32[i8 >> 2] | 0) + ((HEAP32[i3 >> 2] | 0) + 3) >> 0] = HEAP32[i5 + 4 >> 2];
   i6 = i5;
   i6 = _bitshift64Lshr(HEAP32[i6 >> 2] | 0, HEAP32[i6 + 4 >> 2] | 0, 24) | 0;
   HEAP8[(HEAP32[i8 >> 2] | 0) + ((HEAP32[i3 >> 2] | 0) + 4) >> 0] = i6;
   i6 = i5;
   i6 = _bitshift64Lshr(HEAP32[i6 >> 2] | 0, HEAP32[i6 + 4 >> 2] | 0, 16) | 0;
   HEAP8[(HEAP32[i8 >> 2] | 0) + ((HEAP32[i3 >> 2] | 0) + 5) >> 0] = i6;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 6;
   break;
  } else {
   HEAP8[i6 + 28 >> 0] = 1;
   break;
  }
 } else {
  i1 = _bitshift64Lshr(i1 | 0, i2 | 0, 56) | 0;
  i3 = i6 + 8 | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  if (i2 >>> 0 < (HEAP32[i6 >> 2] | 0) >>> 0) {
   HEAP32[i3 >> 2] = i2 + 1;
   HEAP8[(HEAP32[i6 + 4 >> 2] | 0) + i2 >> 0] = i1;
  } else HEAP8[i6 + 28 >> 0] = 1;
  do if ((i1 | 0) == 255 & (tempRet0 | 0) == 0) {
   i1 = HEAP32[i3 >> 2] | 0;
   if (i1 >>> 0 < (HEAP32[i6 >> 2] | 0) >>> 0) {
    HEAP32[i3 >> 2] = i1 + 1;
    HEAP8[(HEAP32[i6 + 4 >> 2] | 0) + i1 >> 0] = 0;
    break;
   } else {
    HEAP8[i6 + 28 >> 0] = 1;
    break;
   }
  } while (0);
  i1 = i5;
  i1 = _bitshift64Lshr(HEAP32[i1 >> 2] | 0, HEAP32[i1 + 4 >> 2] | 0, 48) | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  if (i2 >>> 0 < (HEAP32[i6 >> 2] | 0) >>> 0) {
   HEAP32[i3 >> 2] = i2 + 1;
   HEAP8[(HEAP32[i6 + 4 >> 2] | 0) + i2 >> 0] = i1;
  } else HEAP8[i6 + 28 >> 0] = 1;
  do if ((i1 & 255 | 0) == 255 & 0 == 0) {
   i1 = HEAP32[i3 >> 2] | 0;
   if (i1 >>> 0 < (HEAP32[i6 >> 2] | 0) >>> 0) {
    HEAP32[i3 >> 2] = i1 + 1;
    HEAP8[(HEAP32[i6 + 4 >> 2] | 0) + i1 >> 0] = 0;
    break;
   } else {
    HEAP8[i6 + 28 >> 0] = 1;
    break;
   }
  } while (0);
  i1 = i5;
  i1 = _bitshift64Lshr(HEAP32[i1 >> 2] | 0, HEAP32[i1 + 4 >> 2] | 0, 40) | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  if (i2 >>> 0 < (HEAP32[i6 >> 2] | 0) >>> 0) {
   HEAP32[i3 >> 2] = i2 + 1;
   HEAP8[(HEAP32[i6 + 4 >> 2] | 0) + i2 >> 0] = i1;
  } else HEAP8[i6 + 28 >> 0] = 1;
  do if ((i1 & 255 | 0) == 255 & 0 == 0) {
   i1 = HEAP32[i3 >> 2] | 0;
   if (i1 >>> 0 < (HEAP32[i6 >> 2] | 0) >>> 0) {
    HEAP32[i3 >> 2] = i1 + 1;
    HEAP8[(HEAP32[i6 + 4 >> 2] | 0) + i1 >> 0] = 0;
    break;
   } else {
    HEAP8[i6 + 28 >> 0] = 1;
    break;
   }
  } while (0);
  i1 = HEAP32[i5 + 4 >> 2] | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  if (i2 >>> 0 < (HEAP32[i6 >> 2] | 0) >>> 0) {
   HEAP32[i3 >> 2] = i2 + 1;
   HEAP8[(HEAP32[i6 + 4 >> 2] | 0) + i2 >> 0] = i1;
  } else HEAP8[i6 + 28 >> 0] = 1;
  do if ((i1 & 255 | 0) == 255 & 0 == 0) {
   i1 = HEAP32[i3 >> 2] | 0;
   if (i1 >>> 0 < (HEAP32[i6 >> 2] | 0) >>> 0) {
    HEAP32[i3 >> 2] = i1 + 1;
    HEAP8[(HEAP32[i6 + 4 >> 2] | 0) + i1 >> 0] = 0;
    break;
   } else {
    HEAP8[i6 + 28 >> 0] = 1;
    break;
   }
  } while (0);
  i1 = i5;
  i1 = _bitshift64Lshr(HEAP32[i1 >> 2] | 0, HEAP32[i1 + 4 >> 2] | 0, 24) | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  if (i2 >>> 0 < (HEAP32[i6 >> 2] | 0) >>> 0) {
   HEAP32[i3 >> 2] = i2 + 1;
   HEAP8[(HEAP32[i6 + 4 >> 2] | 0) + i2 >> 0] = i1;
  } else HEAP8[i6 + 28 >> 0] = 1;
  do if ((i1 & 255 | 0) == 255 & 0 == 0) {
   i1 = HEAP32[i3 >> 2] | 0;
   if (i1 >>> 0 < (HEAP32[i6 >> 2] | 0) >>> 0) {
    HEAP32[i3 >> 2] = i1 + 1;
    HEAP8[(HEAP32[i6 + 4 >> 2] | 0) + i1 >> 0] = 0;
    break;
   } else {
    HEAP8[i6 + 28 >> 0] = 1;
    break;
   }
  } while (0);
  i1 = i5;
  i1 = _bitshift64Lshr(HEAP32[i1 >> 2] | 0, HEAP32[i1 + 4 >> 2] | 0, 16) | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  if (i2 >>> 0 < (HEAP32[i6 >> 2] | 0) >>> 0) {
   HEAP32[i3 >> 2] = i2 + 1;
   HEAP8[(HEAP32[i6 + 4 >> 2] | 0) + i2 >> 0] = i1;
  } else HEAP8[i6 + 28 >> 0] = 1;
  if ((i1 & 255 | 0) == 255 & 0 == 0) {
   i1 = HEAP32[i3 >> 2] | 0;
   if (i1 >>> 0 < (HEAP32[i6 >> 2] | 0) >>> 0) {
    HEAP32[i3 >> 2] = i1 + 1;
    HEAP8[(HEAP32[i6 + 4 >> 2] | 0) + i1 >> 0] = 0;
    break;
   } else {
    HEAP8[i6 + 28 >> 0] = 1;
    break;
   }
  }
 } while (0);
 i6 = i5;
 i6 = _bitshift64Shl(HEAP32[i6 >> 2] | 0, HEAP32[i6 + 4 >> 2] | 0, 48) | 0;
 i8 = i5;
 HEAP32[i8 >> 2] = i6;
 HEAP32[i8 + 4 >> 2] = tempRet0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 48;
 return;
}

function __ZN11butteraugli21ButteraugliComparator12BlockDiffMapERKNSt3__26vectorINS2_IfNS1_9allocatorIfEEEENS3_IS5_EEEES9_PS5_SA_(i22, i23, i30, i32, i33) {
 i22 = i22 | 0;
 i23 = i23 | 0;
 i30 = i30 | 0;
 i32 = i32 | 0;
 i33 = i33 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i31 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 3152 | 0;
 i34 = i39 + 1608 | 0;
 i35 = i39 + 72 | 0;
 i36 = i39 + 48 | 0;
 i37 = i39 + 24 | 0;
 i38 = i39;
 i24 = i22 + 12 | 0;
 i2 = HEAP32[i24 >> 2] | 0;
 i25 = i22 + 4 | 0;
 i1 = HEAP32[i25 >> 2] | 0;
 if ((7 - i2 | 0) >>> 0 >= i1 >>> 0) {
  STACKTOP = i39;
  return;
 }
 i26 = i22 + 16 | 0;
 i27 = i36 + 8 | 0;
 i28 = i37 + 8 | 0;
 i29 = i36 + 16 | 0;
 i31 = i37 + 16 | 0;
 i3 = HEAP32[i22 >> 2] | 0;
 i21 = 0;
 do {
  if ((7 - i2 | 0) >>> 0 < i3 >>> 0) {
   i19 = i2;
   i20 = 0;
   while (1) {
    i18 = (Math_imul(HEAP32[i26 >> 2] | 0, i21) | 0) + i20 | 0;
    i5 = i1 + -8 | 0;
    i5 = Math_imul(i5 >>> 0 < i21 >>> 0 ? i5 : i21, i3) | 0;
    i4 = i3 + -8 | 0;
    i4 = i5 + (i4 >>> 0 < i20 >>> 0 ? i4 : i20) | 0;
    i5 = HEAP32[i23 >> 2] | 0;
    i6 = HEAP32[i30 >> 2] | 0;
    i7 = i4 + 1 | 0;
    i8 = i4 + 2 | 0;
    i9 = i4 + 3 | 0;
    i10 = i4 + 4 | 0;
    i11 = i4 + 5 | 0;
    i12 = i4 + 6 | 0;
    i13 = i4 + 7 | 0;
    i2 = 0;
    do {
     i15 = i2 << 6;
     i14 = i34 + (i15 << 3) | 0;
     i15 = i35 + (i15 << 3) | 0;
     i16 = HEAP32[i5 + (i2 * 12 | 0) >> 2] | 0;
     i17 = HEAP32[i6 + (i2 * 12 | 0) >> 2] | 0;
     i1 = 0;
     do {
      i41 = Math_imul(i3, i1) | 0;
      i40 = i1 << 3;
      i42 = i4 + i41 | 0;
      HEAPF64[i14 + (i40 << 3) >> 3] = +Math_fround(HEAPF32[i16 + (i42 << 2) >> 2]);
      HEAPF64[i15 + (i40 << 3) >> 3] = +Math_fround(HEAPF32[i17 + (i42 << 2) >> 2]);
      i42 = i7 + i41 | 0;
      i43 = i40 | 1;
      HEAPF64[i14 + (i43 << 3) >> 3] = +Math_fround(HEAPF32[i16 + (i42 << 2) >> 2]);
      HEAPF64[i15 + (i43 << 3) >> 3] = +Math_fround(HEAPF32[i17 + (i42 << 2) >> 2]);
      i43 = i8 + i41 | 0;
      i42 = i40 | 2;
      HEAPF64[i14 + (i42 << 3) >> 3] = +Math_fround(HEAPF32[i16 + (i43 << 2) >> 2]);
      HEAPF64[i15 + (i42 << 3) >> 3] = +Math_fround(HEAPF32[i17 + (i43 << 2) >> 2]);
      i42 = i9 + i41 | 0;
      i43 = i40 | 3;
      HEAPF64[i14 + (i43 << 3) >> 3] = +Math_fround(HEAPF32[i16 + (i42 << 2) >> 2]);
      HEAPF64[i15 + (i43 << 3) >> 3] = +Math_fround(HEAPF32[i17 + (i42 << 2) >> 2]);
      i43 = i10 + i41 | 0;
      i42 = i40 | 4;
      HEAPF64[i14 + (i42 << 3) >> 3] = +Math_fround(HEAPF32[i16 + (i43 << 2) >> 2]);
      HEAPF64[i15 + (i42 << 3) >> 3] = +Math_fround(HEAPF32[i17 + (i43 << 2) >> 2]);
      i42 = i11 + i41 | 0;
      i43 = i40 | 5;
      HEAPF64[i14 + (i43 << 3) >> 3] = +Math_fround(HEAPF32[i16 + (i42 << 2) >> 2]);
      HEAPF64[i15 + (i43 << 3) >> 3] = +Math_fround(HEAPF32[i17 + (i42 << 2) >> 2]);
      i43 = i12 + i41 | 0;
      i42 = i40 | 6;
      HEAPF64[i14 + (i42 << 3) >> 3] = +Math_fround(HEAPF32[i16 + (i43 << 2) >> 2]);
      HEAPF64[i15 + (i42 << 3) >> 3] = +Math_fround(HEAPF32[i17 + (i43 << 2) >> 2]);
      i41 = i13 + i41 | 0;
      i40 = i40 | 7;
      HEAPF64[i14 + (i40 << 3) >> 3] = +Math_fround(HEAPF32[i16 + (i41 << 2) >> 2]);
      HEAPF64[i15 + (i40 << 3) >> 3] = +Math_fround(HEAPF32[i17 + (i41 << 2) >> 2]);
      i1 = i1 + 1 | 0;
     } while ((i1 | 0) != 8);
     i2 = i2 + 1 | 0;
    } while ((i2 | 0) != 3);
    HEAP32[i36 >> 2] = 0;
    HEAP32[i36 + 4 >> 2] = 0;
    HEAP32[i36 + 8 >> 2] = 0;
    HEAP32[i36 + 12 >> 2] = 0;
    HEAP32[i36 + 16 >> 2] = 0;
    HEAP32[i36 + 20 >> 2] = 0;
    HEAP32[i37 >> 2] = 0;
    HEAP32[i37 + 4 >> 2] = 0;
    HEAP32[i37 + 8 >> 2] = 0;
    HEAP32[i37 + 12 >> 2] = 0;
    HEAP32[i37 + 16 >> 2] = 0;
    HEAP32[i37 + 20 >> 2] = 0;
    HEAP32[i38 >> 2] = 0;
    HEAP32[i38 + 4 >> 2] = 0;
    HEAP32[i38 + 8 >> 2] = 0;
    HEAP32[i38 + 12 >> 2] = 0;
    HEAP32[i38 + 16 >> 2] = 0;
    HEAP32[i38 + 20 >> 2] = 0;
    __ZN11butteraugli20ButteraugliBlockDiffEPdS0_S0_S0_S0_(i34, i35, i36, i37, i38);
    i2 = ((i18 >>> 0) / (i19 >>> 0) | 0) * 3 | 0;
    i43 = HEAP32[i32 >> 2] | 0;
    i3 = HEAP32[i33 >> 2] | 0;
    HEAPF32[i43 + (i2 << 2) >> 2] = Math_fround(+HEAPF64[i36 >> 3]);
    HEAPF32[i3 + (i2 << 2) >> 2] = Math_fround(+HEAPF64[i37 >> 3]);
    i42 = i2 + 1 | 0;
    HEAPF32[i43 + (i42 << 2) >> 2] = Math_fround(+HEAPF64[i27 >> 3]);
    HEAPF32[i3 + (i42 << 2) >> 2] = Math_fround(+HEAPF64[i28 >> 3]);
    i2 = i2 + 2 | 0;
    HEAPF32[i43 + (i2 << 2) >> 2] = Math_fround(+HEAPF64[i29 >> 3]);
    HEAPF32[i3 + (i2 << 2) >> 2] = Math_fround(+HEAPF64[i31 >> 3]);
    i2 = HEAP32[i24 >> 2] | 0;
    i3 = HEAP32[i22 >> 2] | 0;
    if ((i20 + 7 | 0) >>> 0 >= i3 >>> 0) break;
    i1 = HEAP32[i25 >> 2] | 0;
    i19 = i2;
    i20 = i2 + i20 | 0;
   }
   i1 = HEAP32[i25 >> 2] | 0;
  }
  i21 = i2 + i21 | 0;
 } while ((i21 + 7 - i2 | 0) >>> 0 < i1 >>> 0);
 STACKTOP = i39;
 return;
}

function __ZN7guetzli15EncodeRGBToJpegERKNSt3__26vectorIhNS0_9allocatorIhEEEEiiPKiPNS_8JPEGDataE(i18, i19, i6, i5, i7) {
 i18 = i18 | 0;
 i19 = i19 | 0;
 i6 = i6 | 0;
 i5 = i5 | 0;
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 1152 | 0;
 i20 = i22;
 i21 = i22 + 768 | 0;
 if ((i6 | i19) >>> 0 > 65535) {
  i21 = 0;
  STACKTOP = i22;
  return i21 | 0;
 }
 if (((HEAP32[i18 + 4 >> 2] | 0) - (HEAP32[i18 >> 2] | 0) | 0) != (Math_imul(i19 * 3 | 0, i6) | 0)) {
  i21 = 0;
  STACKTOP = i22;
  return i21 | 0;
 }
 __ZN7guetzli21InitJPEGDataForYUV444EiiPNS_8JPEGDataE(i19, i6, i7);
 HEAP32[i20 >> 2] = 0;
 HEAP32[i20 + 4 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i20, 9689, 17);
 i1 = i7 + 36 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if (i2 >>> 0 < (HEAP32[i7 + 40 >> 2] | 0) >>> 0) {
  HEAP32[i2 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i20 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i20 + 8 >> 2];
  HEAP32[i20 >> 2] = 0;
  HEAP32[i20 + 4 >> 2] = 0;
  HEAP32[i20 + 8 >> 2] = 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 12;
 } else __ZNSt3__26vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE21__push_back_slow_pathIS6_EEvOT_(i7 + 32 | 0, i20);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i20);
 i4 = HEAP32[i7 + 56 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i1 = 0;
 i2 = 0;
 while (1) {
  i17 = HEAP32[i5 + (i2 << 2) >> 2] | 0;
  HEAP32[i3 + (i1 << 2) >> 2] = i17;
  HEAP32[i20 + (i2 << 2) >> 2] = 65537 / (i17 | 0) | 0;
  i1 = i1 + 1 | 0;
  if ((i1 | 0) == 64) break; else i2 = i2 + 1 | 0;
 }
 i3 = HEAP32[i4 + 24 >> 2] | 0;
 i1 = 0;
 i2 = 64;
 while (1) {
  i17 = HEAP32[i5 + (i2 << 2) >> 2] | 0;
  HEAP32[i3 + (i1 << 2) >> 2] = i17;
  HEAP32[i20 + (i2 << 2) >> 2] = 65537 / (i17 | 0) | 0;
  i1 = i1 + 1 | 0;
  if ((i1 | 0) == 64) break; else i2 = i2 + 1 | 0;
 }
 i3 = HEAP32[i4 + 48 >> 2] | 0;
 i1 = 0;
 i2 = 128;
 while (1) {
  i17 = HEAP32[i5 + (i2 << 2) >> 2] | 0;
  HEAP32[i3 + (i1 << 2) >> 2] = i17;
  HEAP32[i20 + (i2 << 2) >> 2] = 65537 / (i17 | 0) | 0;
  i1 = i1 + 1 | 0;
  if ((i1 | 0) == 64) break; else i2 = i2 + 1 | 0;
 }
 i17 = i7 + 20 | 0;
 i1 = HEAP32[i17 >> 2] | 0;
 if ((i1 | 0) > 0) {
  i16 = i7 + 24 | 0;
  i14 = i6 + -1 | 0;
  i15 = i19 + -1 | 0;
  i11 = i7 + 80 | 0;
  i12 = i21 + 128 | 0;
  i13 = i21 + 256 | 0;
  i10 = 0;
  i3 = 0;
  i2 = HEAP32[i16 >> 2] | 0;
  do {
   if ((i2 | 0) > 0) {
    i9 = i10 << 3;
    i8 = 0;
    do {
     i4 = i8 << 3;
     i5 = HEAP32[i18 >> 2] | 0;
     i1 = 0;
     do {
      i6 = i1 + i9 | 0;
      i6 = Math_imul((i6 | 0) < (i14 | 0) ? i6 : i14, i19) | 0;
      i7 = i1 << 3;
      i2 = 0;
      do {
       i24 = i2 + i4 | 0;
       i24 = i5 + ((((i24 | 0) < (i15 | 0) ? i24 : i15) + i6 | 0) * 3 | 0) | 0;
       i23 = i21 + (i2 + i7 << 1) | 0;
       i26 = HEAPU8[i24 >> 0] | 0;
       i25 = HEAPU8[i24 + 1 >> 0] | 0;
       i24 = HEAPU8[i24 + 2 >> 0] | 0;
       HEAP16[i23 >> 1] = ((i26 * 19595 | 0) + -8355840 + (i25 * 38469 | 0) + (i24 * 7471 | 0) | 0) >>> 16;
       HEAP16[i23 + 128 >> 1] = ((Math_imul(i26, -11059) | 0) + 32767 + (Math_imul(i25, -21709) | 0) + (i24 << 15) | 0) >>> 16;
       HEAP16[i23 + 256 >> 1] = ((i26 << 15 | 32767) + (Math_imul(i25, -27439) | 0) + (Math_imul(i24, -5329) | 0) | 0) >>> 16;
       i2 = i2 + 1 | 0;
      } while ((i2 | 0) != 8);
      i1 = i1 + 1 | 0;
     } while ((i1 | 0) != 8);
     __ZN7guetzli15ComputeBlockDCTEPs(i21);
     __ZN7guetzli15ComputeBlockDCTEPs(i12);
     __ZN7guetzli15ComputeBlockDCTEPs(i13);
     i1 = 0;
     do {
      i26 = i21 + (i1 << 1) | 0;
      HEAP16[i26 >> 1] = (Math_imul(HEAP16[i26 >> 1] | 0, HEAP32[i20 + (i1 << 2) >> 2] | 0) | 0) + 524288 >> 20;
      i1 = i1 + 1 | 0;
     } while ((i1 | 0) != 192);
     i1 = i3 << 6;
     i2 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 28 >> 2] | 0) + (i1 << 1) | 0;
     i4 = i21;
     i5 = i2 + 128 | 0;
     do {
      HEAP16[i2 >> 1] = HEAP16[i4 >> 1] | 0;
      i2 = i2 + 2 | 0;
      i4 = i4 + 2 | 0;
     } while ((i2 | 0) < (i5 | 0));
     i2 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 68 >> 2] | 0) + (i1 << 1) | 0;
     i4 = i12;
     i5 = i2 + 128 | 0;
     do {
      HEAP16[i2 >> 1] = HEAP16[i4 >> 1] | 0;
      i2 = i2 + 2 | 0;
      i4 = i4 + 2 | 0;
     } while ((i2 | 0) < (i5 | 0));
     i2 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 108 >> 2] | 0) + (i1 << 1) | 0;
     i4 = i13;
     i5 = i2 + 128 | 0;
     do {
      HEAP16[i2 >> 1] = HEAP16[i4 >> 1] | 0;
      i2 = i2 + 2 | 0;
      i4 = i4 + 2 | 0;
     } while ((i2 | 0) < (i5 | 0));
     i3 = i3 + 1 | 0;
     i8 = i8 + 1 | 0;
     i2 = HEAP32[i16 >> 2] | 0;
    } while ((i8 | 0) < (i2 | 0));
    i1 = HEAP32[i17 >> 2] | 0;
   }
   i10 = i10 + 1 | 0;
  } while ((i10 | 0) < (i1 | 0));
 }
 i26 = 1;
 STACKTOP = i22;
 return i26 | 0;
}

function __ZN7guetzli21ButteraugliComparator34ComputeBlockErrorAdjustmentWeightsEiidiiRKNSt3__26vectorIfNS1_9allocatorIfEEEEPS5_(i3, i26, i30, d4, i1, i2, i22, i31) {
 i3 = i3 | 0;
 i26 = i26 | 0;
 i30 = i30 | 0;
 d4 = +d4;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i22 = i22 | 0;
 i31 = i31 | 0;
 var f5 = f0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d23 = 0.0, d24 = 0.0, f25 = f0, i27 = 0, i28 = 0, d29 = 0.0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, f36 = f0;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i34 = i35 + 4 | 0;
 i32 = i35;
 d29 = +Math_fround(HEAPF32[i3 + 12 >> 2]) * d4;
 i21 = i1 << 3;
 i19 = i2 << 3;
 i20 = i3 + 4 | 0;
 i28 = (i21 + -1 + (HEAP32[i20 >> 2] | 0) | 0) / (i21 | 0) | 0;
 i13 = i3 + 8 | 0;
 i27 = (i19 + -1 + (HEAP32[i13 >> 2] | 0) | 0) / (i19 | 0) | 0;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i34, Math_imul(i27, i28) | 0);
 i14 = (i27 | 0) > 0;
 do if (i14) {
  if ((i28 | 0) > 0) {
   i12 = 0;
   do {
    i15 = Math_imul(i12, i28) | 0;
    i17 = i12;
    i12 = i12 + 1 | 0;
    i16 = Math_imul(i12, i19) | 0;
    i17 = Math_imul(i17, i19) | 0;
    i11 = 0;
    do {
     i18 = i11 + i15 | 0;
     i1 = i11;
     i11 = i11 + 1 | 0;
     i9 = Math_imul(i11, i21) | 0;
     i8 = HEAP32[i20 >> 2] | 0;
     i9 = (i9 | 0) < (i8 | 0) ? i9 : i8;
     i10 = HEAP32[i13 >> 2] | 0;
     i10 = (i16 | 0) < (i10 | 0) ? i16 : i10;
     if ((i17 | 0) < (i10 | 0)) {
      i3 = Math_imul(i1, i21) | 0;
      i6 = HEAP32[i22 >> 2] | 0;
      if ((i3 | 0) < (i9 | 0)) {
       i1 = i17;
       f5 = Math_fround(0.0);
       do {
        i7 = Math_imul(i8, i1) | 0;
        i2 = i3;
        do {
         f25 = Math_fround(HEAPF32[i6 + (i7 + i2 << 2) >> 2]);
         f5 = f5 < f25 ? f25 : f5;
         i2 = i2 + 1 | 0;
        } while ((i2 | 0) < (i9 | 0));
        i1 = i1 + 1 | 0;
       } while ((i1 | 0) < (i10 | 0));
      } else f5 = Math_fround(0.0);
      i1 = (HEAPF32[tempDoublePtr >> 2] = f5, HEAP32[tempDoublePtr >> 2] | 0);
     } else i1 = 0;
     HEAP32[(HEAP32[i34 >> 2] | 0) + (i18 << 2) >> 2] = i1;
    } while ((i11 | 0) != (i28 | 0));
   } while ((i12 | 0) != (i27 | 0));
   if (!i14) {
    i33 = 13;
    break;
   }
  }
  i19 = (i28 | 0) > 0;
  f25 = Math_fround(d29);
  i20 = i30 + 1 | 0;
  i15 = (i26 | 0) > 0;
  d23 = d29 * 1.1;
  d24 = d29 * .5;
  i8 = 0;
  do {
   if (i19) {
    i16 = Math_imul(i8, i28) | 0;
    i13 = i8 - i30 | 0;
    i13 = (i13 | 0) > 0 ? i13 : 0;
    i11 = i20 + i8 | 0;
    i11 = (i11 | 0) < (i27 | 0) ? i11 : i27;
    i17 = (i13 | 0) < (i11 | 0);
    i18 = (i13 | 0) < (i11 | 0);
    i9 = 0;
    do {
     i7 = i9 + i16 | 0;
     i14 = i9 - i30 | 0;
     i14 = (i14 | 0) > 0 ? i14 : 0;
     i10 = i9;
     i9 = i9 + 1 | 0;
     i12 = i9 + i30 | 0;
     i12 = (i12 | 0) < (i28 | 0) ? i12 : i28;
     if (i17) {
      i1 = HEAP32[i34 >> 2] | 0;
      if ((i14 | 0) < (i12 | 0)) {
       i3 = i13;
       f5 = f25;
       do {
        i6 = Math_imul(i3, i28) | 0;
        i2 = i14;
        do {
         f36 = Math_fround(HEAPF32[i1 + (i2 + i6 << 2) >> 2]);
         f5 = f5 < f36 ? f36 : f5;
         i2 = i2 + 1 | 0;
        } while ((i2 | 0) < (i12 | 0));
        i3 = i3 + 1 | 0;
       } while ((i3 | 0) < (i11 | 0));
      } else f5 = f25;
     } else {
      f5 = f25;
      i1 = HEAP32[i34 >> 2] | 0;
     }
     d4 = +Math_fround(HEAPF32[i1 + (i7 << 2) >> 2]);
     if (i15) {
      if (!(!(d4 <= d29) | !(+f5 <= d23))) HEAPF32[(HEAP32[i31 >> 2] | 0) + (i7 << 2) >> 2] = Math_fround(1.0);
     } else if (i18 & !(d4 <= d24 + +f5 * .5) & (i14 | 0) < (i12 | 0)) {
      i3 = HEAP32[i31 >> 2] | 0;
      i2 = i13;
      do {
       i6 = i2 - i8 | 0;
       i6 = (i6 | 0) > -1 ? i6 : 0 - i6 | 0;
       i7 = Math_imul(i2, i28) | 0;
       i1 = i14;
       do {
        i22 = i1 - i10 | 0;
        i22 = (i22 | 0) > -1 ? i22 : 0 - i22 | 0;
        i26 = i3 + (i1 + i7 << 2) | 0;
        f36 = Math_fround(1.0 / (+(((i6 | 0) < (i22 | 0) ? i22 : i6) | 0) + 1.0));
        HEAPF32[i32 >> 2] = f36;
        i22 = Math_fround(HEAPF32[i26 >> 2]) < f36;
        HEAP32[i26 >> 2] = HEAP32[(i22 ? i32 : i26) >> 2];
        i1 = i1 + 1 | 0;
       } while ((i1 | 0) < (i12 | 0));
       i2 = i2 + 1 | 0;
      } while ((i2 | 0) < (i11 | 0));
     }
    } while ((i9 | 0) != (i28 | 0));
   }
   i8 = i8 + 1 | 0;
  } while ((i8 | 0) != (i27 | 0));
  i1 = i34;
 } else i33 = 13; while (0);
 if ((i33 | 0) == 13) i1 = i34;
 i3 = HEAP32[i1 >> 2] | 0;
 if (!i3) {
  STACKTOP = i35;
  return;
 }
 i1 = i34 + 4 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
 __ZdlPv(i3);
 STACKTOP = i35;
 return;
}

function __ZN7guetzli21BuildJpegHuffmanTableEPKiS1_PNS_17HuffmanTableEntryE(i1, i19, i21) {
 i1 = i1 | 0;
 i19 = i19 | 0;
 i21 = i21 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i20 = 0, i22 = 0, i23 = 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i20 = i22;
 HEAP32[i20 >> 2] = 0;
 i2 = i1 + 4 | 0;
 i3 = i20 + 4 | 0;
 i4 = i2;
 i5 = i3 + 64 | 0;
 do {
  HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
  i3 = i3 + 4 | 0;
  i4 = i4 + 4 | 0;
 } while ((i3 | 0) < (i5 | 0));
 if (((HEAP32[i1 + 64 >> 2] | 0) + ((HEAP32[i1 + 60 >> 2] | 0) + ((HEAP32[i1 + 56 >> 2] | 0) + ((HEAP32[i1 + 52 >> 2] | 0) + ((HEAP32[i1 + 48 >> 2] | 0) + ((HEAP32[i1 + 44 >> 2] | 0) + ((HEAP32[i1 + 40 >> 2] | 0) + ((HEAP32[i1 + 36 >> 2] | 0) + ((HEAP32[i1 + 32 >> 2] | 0) + ((HEAP32[i1 + 28 >> 2] | 0) + ((HEAP32[i1 + 24 >> 2] | 0) + ((HEAP32[i1 + 20 >> 2] | 0) + ((HEAP32[i1 + 16 >> 2] | 0) + ((HEAP32[i1 + 12 >> 2] | 0) + ((HEAP32[i1 + 8 >> 2] | 0) + (HEAP32[i2 >> 2] | 0))))))))))))))) | 0) == 1) {
  i2 = HEAP32[i19 >> 2] << 16;
  i1 = 0;
  do {
   i20 = i21 + (i1 << 2) | 0;
   HEAP16[i20 >> 1] = i2;
   HEAP16[i20 + 2 >> 1] = i2 >>> 16;
   i1 = i1 + 1 | 0;
  } while ((i1 | 0) != 256);
  i1 = 256;
  STACKTOP = i22;
  return i1 | 0;
 } else {
  i1 = 0;
  i2 = 0;
  i9 = 1;
 }
 while (1) {
  i7 = i20 + (i9 << 2) | 0;
  i3 = HEAP32[i7 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i8 = 1 << 8 - i9;
   do {
    i6 = HEAP32[i19 + (i1 << 2) >> 2] << 16 | i9;
    i4 = i8;
    i5 = i2;
    while (1) {
     i4 = i4 + -1 | 0;
     i18 = i21 + (i5 << 2) | 0;
     HEAP16[i18 >> 1] = i6;
     HEAP16[i18 + 2 >> 1] = i6 >>> 16;
     if (!i4) break; else i5 = i5 + 1 | 0;
    }
    i1 = i1 + 1 | 0;
    i2 = i8 + i2 | 0;
    i18 = i3;
    i3 = i3 + -1 | 0;
   } while ((i18 | 0) > 1);
   HEAP32[i7 >> 2] = i3;
   i3 = i1;
  } else i3 = i1;
  i9 = i9 + 1 | 0;
  if ((i9 | 0) == 9) break; else i1 = i3;
 }
 i18 = i21;
 i6 = i21 + 1024 | 0;
 i1 = 256;
 i8 = 0;
 i4 = 8;
 i7 = 0;
 i17 = 9;
 while (1) {
  i14 = i20 + (i17 << 2) | 0;
  i5 = HEAP32[i14 >> 2] | 0;
  L20 : do if ((i5 | 0) > 0) {
   i15 = i17 + 248 & 255;
   i13 = i17 + -8 | 0;
   i16 = 1 << i13;
   if ((i17 | 0) < 16) {
    i9 = i6;
    i11 = i3;
    i6 = i5;
   } else {
    i12 = i17 & 255;
    i5 = i8;
    while (1) {
     if ((i7 | 0) < (i5 | 0)) {
      i9 = i6;
      i10 = i5;
      i11 = i4;
     } else {
      i9 = i6 + (i5 << 2) | 0;
      HEAP8[i21 + (i2 << 2) >> 0] = i12;
      HEAP16[i21 + (i2 << 2) + 2 >> 1] = ((i9 - i18 | 0) >>> 2) - i2;
      i1 = i16 + i1 | 0;
      i10 = i16;
      i11 = i13;
      i7 = 0;
      i2 = i2 + 1 | 0;
     }
     i8 = 1 << i11 - i15;
     i6 = HEAP32[i19 + (i3 << 2) >> 2] << 16 | i15;
     i4 = i8;
     i5 = i7;
     while (1) {
      i4 = i4 + -1 | 0;
      i23 = i9 + (i5 << 2) | 0;
      HEAP16[i23 >> 1] = i6;
      HEAP16[i23 + 2 >> 1] = i6 >>> 16;
      if (!i4) break; else i5 = i5 + 1 | 0;
     }
     i3 = i3 + 1 | 0;
     i7 = i7 + i8 | 0;
     i23 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i23 + -1;
     if ((i23 | 0) > 1) {
      i6 = i9;
      i5 = i10;
      i4 = i11;
     } else {
      i6 = i9;
      i5 = i10;
      i4 = i11;
      break L20;
     }
    }
   }
   while (1) {
    if ((i7 | 0) < (i8 | 0)) i10 = i4; else {
     i5 = i9 + (i8 << 2) | 0;
     i4 = i16 - i6 | 0;
     L36 : do if ((i4 | 0) < 1) i3 = i17; else {
      i3 = i17;
      do {
       i3 = i3 + 1 | 0;
       if ((i3 | 0) >= 16) break L36;
       i4 = (i4 << 1) - (HEAP32[i20 + (i3 << 2) >> 2] | 0) | 0;
      } while ((i4 | 0) >= 1);
     } while (0);
     i10 = i3 + -8 | 0;
     i8 = 1 << i10;
     HEAP8[i21 + (i2 << 2) >> 0] = i3;
     HEAP16[i21 + (i2 << 2) + 2 >> 1] = ((i5 - i18 | 0) >>> 2) - i2;
     i1 = i8 + i1 | 0;
     i9 = i5;
     i7 = 0;
     i2 = i2 + 1 | 0;
    }
    i6 = 1 << i10 - i15;
    i5 = HEAP32[i19 + (i11 << 2) >> 2] << 16 | i15;
    i3 = i6;
    i4 = i7;
    while (1) {
     i3 = i3 + -1 | 0;
     i23 = i9 + (i4 << 2) | 0;
     HEAP16[i23 >> 1] = i5;
     HEAP16[i23 + 2 >> 1] = i5 >>> 16;
     if (!i3) break; else i4 = i4 + 1 | 0;
    }
    i3 = i11 + 1 | 0;
    i7 = i7 + i6 | 0;
    i23 = HEAP32[i14 >> 2] | 0;
    i6 = i23 + -1 | 0;
    HEAP32[i14 >> 2] = i6;
    if ((i23 | 0) <= 1) {
     i6 = i9;
     i5 = i8;
     i4 = i10;
     break;
    } else {
     i4 = i10;
     i11 = i3;
    }
   }
  } else i5 = i8; while (0);
  i17 = i17 + 1 | 0;
  if ((i17 | 0) == 17) break; else i8 = i5;
 }
 STACKTOP = i22;
 return i1 | 0;
}

function __ZN7guetzli12_GLOBAL__N_126SetDownsampledCoefficientsERKNSt3__26vectorIfNS1_9allocatorIfEEEEiiPNS_20OutputImageComponentE(i18, i19, i22, i29) {
 i18 = i18 | 0;
 i19 = i19 | 0;
 i22 = i22 | 0;
 i29 = i29 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, f5 = f0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i20 = 0, i21 = 0, i23 = 0, i24 = 0, i25 = 0, f26 = f0, i27 = 0, d28 = 0.0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, d35 = 0.0;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 704 | 0;
 i30 = i33 + 640 | 0;
 i31 = i33;
 i32 = i33 + 512 | 0;
 i20 = i29 + 4 | 0;
 if (((HEAP32[i18 + 4 >> 2] | 0) - (HEAP32[i18 >> 2] | 0) >> 2 | 0) != (Math_imul(HEAP32[i20 >> 2] | 0, HEAP32[i29 >> 2] | 0) | 0)) ___assert_fail(11129, 8947, 267, 11177);
 __ZN7guetzli20OutputImageComponent5ResetEii(i29, i19, i22);
 i21 = i29 + 20 | 0;
 i1 = HEAP32[i21 >> 2] | 0;
 if ((i1 | 0) <= 0) {
  STACKTOP = i33;
  return;
 }
 i23 = i29 + 16 | 0;
 i24 = (i22 | 0) > 0;
 i25 = (i19 | 0) > 0;
 f26 = Math_fround(Math_imul(i22, i19) | 0);
 i27 = i29 + 28 | 0;
 d28 = +Math_fround(Math_fround(0.0) / f26);
 i17 = 0;
 i2 = HEAP32[i23 >> 2] | 0;
 L7 : while (1) {
  if ((i2 | 0) > 0) {
   i16 = Math_imul(i17 << 3, i22) | 0;
   i15 = 0;
   do {
    i11 = Math_imul(i15 << 3, i19) | 0;
    i12 = HEAP32[i29 >> 2] | 0;
    if ((i11 | 0) >= (i12 | 0)) {
     i1 = 11;
     break L7;
    }
    i1 = HEAP32[i20 >> 2] | 0;
    if ((i16 | 0) >= (i1 | 0)) {
     i1 = 14;
     break L7;
    }
    i13 = HEAP32[i18 >> 2] | 0;
    i14 = i12 + -1 | 0;
    i8 = i1 + -1 | 0;
    i7 = 0;
    do {
     i9 = (Math_imul(i7, i22) | 0) + i16 | 0;
     i10 = i7 << 3;
     if (i24) {
      i6 = 0;
      do {
       i3 = (Math_imul(i6, i19) | 0) + i11 | 0;
       if (i25) {
        i2 = 0;
        f5 = Math_fround(0.0);
        do {
         i4 = i9 + i2 | 0;
         i4 = Math_imul((i8 | 0) < (i4 | 0) ? i8 : i4, i12) | 0;
         i1 = 0;
         do {
          i34 = i3 + i1 | 0;
          f5 = Math_fround(f5 + Math_fround(HEAPF32[i13 + (i4 + ((i14 | 0) < (i34 | 0) ? i14 : i34) << 2) >> 2]));
          i1 = i1 + 1 | 0;
         } while ((i1 | 0) != (i19 | 0));
         i2 = i2 + 1 | 0;
        } while ((i2 | 0) != (i22 | 0));
       } else f5 = Math_fround(0.0);
       HEAPF64[i31 + (i6 + i10 << 3) >> 3] = +Math_fround(f5 / f26);
       i6 = i6 + 1 | 0;
      } while ((i6 | 0) != 8);
     } else {
      HEAPF64[i31 + (i10 << 3) >> 3] = d28;
      HEAPF64[i31 + ((i10 | 1) << 3) >> 3] = d28;
      HEAPF64[i31 + ((i10 | 2) << 3) >> 3] = d28;
      HEAPF64[i31 + ((i10 | 3) << 3) >> 3] = d28;
      HEAPF64[i31 + ((i10 | 4) << 3) >> 3] = d28;
      HEAPF64[i31 + ((i10 | 5) << 3) >> 3] = d28;
      HEAPF64[i31 + ((i10 | 6) << 3) >> 3] = d28;
      HEAPF64[i31 + ((i10 | 7) << 3) >> 3] = d28;
     }
     i7 = i7 + 1 | 0;
    } while ((i7 | 0) != 8);
    __ZN7guetzli21ComputeBlockDCTDoubleEPd(i31);
    d35 = +HEAPF64[i31 >> 3] + -1024.0;
    HEAPF64[i31 >> 3] = d35;
    HEAP16[i32 >> 1] = ~~+_round(+d35);
    i1 = 1;
    do {
     HEAP16[i32 + (i1 << 1) >> 1] = ~~+_round(+(+HEAPF64[i31 + (i1 << 3) >> 3]));
     i1 = i1 + 1 | 0;
    } while ((i1 | 0) != 64);
    i1 = HEAP32[i23 >> 2] | 0;
    if ((i1 | 0) <= (i15 | 0)) {
     i1 = 25;
     break L7;
    }
    if ((HEAP32[i21 >> 2] | 0) <= (i17 | 0)) {
     i1 = 27;
     break L7;
    }
    i1 = (Math_imul(i1, i17) | 0) + i15 << 6;
    i2 = (HEAP32[i27 >> 2] | 0) + (i1 << 1) | 0;
    i3 = i32;
    i4 = i2 + 128 | 0;
    do {
     HEAP16[i2 >> 1] = HEAP16[i3 >> 1] | 0;
     i2 = i2 + 2 | 0;
     i3 = i3 + 2 | 0;
    } while ((i2 | 0) < (i4 | 0));
    __ZN7guetzli16ComputeBlockIDCTEPKsPh((HEAP32[i27 >> 2] | 0) + (i1 << 1) | 0, i30);
    __ZN7guetzli20OutputImageComponent20UpdatePixelsForBlockEiiPKh(i29, i15, i17, i30);
    i15 = i15 + 1 | 0;
    i2 = HEAP32[i23 >> 2] | 0;
   } while ((i15 | 0) < (i2 | 0));
   i1 = HEAP32[i21 >> 2] | 0;
  }
  i17 = i17 + 1 | 0;
  if ((i17 | 0) >= (i1 | 0)) {
   i1 = 7;
   break;
  }
 }
 if ((i1 | 0) == 7) {
  STACKTOP = i33;
  return;
 } else if ((i1 | 0) == 11) ___assert_fail(11204, 8947, 274, 11177); else if ((i1 | 0) == 14) ___assert_fail(11223, 8947, 275, 11177); else if ((i1 | 0) == 25) ___assert_fail(8920, 8947, 124, 9118); else if ((i1 | 0) == 27) ___assert_fail(8988, 8947, 125, 9118);
}

function __ZN7guetzli16ComputeBlockIDCTEPKsPh(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i4 = i5;
 i1 = 0;
 do {
  i24 = i2 + (i1 << 1) | 0;
  i13 = HEAP16[i24 >> 1] << 13;
  i27 = HEAP16[i24 + 16 >> 1] | 0;
  i12 = i27 * 11363 | 0;
  i19 = i27 * 9633 | 0;
  i23 = i27 * 6437 | 0;
  i27 = i27 * 2260 | 0;
  i18 = HEAP16[i24 + 32 >> 1] | 0;
  i11 = i18 * 10703 | 0;
  i18 = i18 * 4433 | 0;
  i26 = HEAP16[i24 + 48 >> 1] | 0;
  i10 = i26 * 9633 | 0;
  i17 = Math_imul(i26, -2259) | 0;
  i22 = Math_imul(i26, -11362) | 0;
  i26 = Math_imul(i26, -6436) | 0;
  i9 = HEAP16[i24 + 64 >> 1] << 13;
  i25 = HEAP16[i24 + 80 >> 1] | 0;
  i8 = i25 * 6437 | 0;
  i16 = Math_imul(i25, -11362) | 0;
  i21 = i25 * 2261 | 0;
  i25 = i25 * 9633 | 0;
  i15 = HEAP16[i24 + 96 >> 1] | 0;
  i7 = i15 * 4433 | 0;
  i15 = Math_imul(i15, -10704) | 0;
  i24 = HEAP16[i24 + 112 >> 1] | 0;
  i6 = i24 * 2260 | 0;
  i14 = Math_imul(i24, -6436) | 0;
  i20 = i24 * 9633 | 0;
  i24 = Math_imul(i24, -11363) | 0;
  HEAP16[i4 + (i1 << 1) >> 1] = (i12 + i13 + i11 + i10 + i9 + i8 + i7 + i6 + 1024 | 0) >>> 11;
  HEAP16[i4 + (i1 + 8 << 1) >> 1] = (i19 + i13 + i18 + i17 - i9 + i16 + i15 + i14 + 1024 | 0) >>> 11;
  HEAP16[i4 + (i1 + 16 << 1) >> 1] = (i23 + i13 - i18 + i22 - i9 + i21 - i15 + i20 + 1024 | 0) >>> 11;
  HEAP16[i4 + (i1 + 24 << 1) >> 1] = (i27 + i13 - i11 + i26 + i9 + i25 - i7 + i24 + 1024 | 0) >>> 11;
  HEAP16[i4 + (i1 + 32 << 1) >> 1] = (i13 - i27 - i11 - i26 + i9 - i25 - i7 - i24 + 1024 | 0) >>> 11;
  HEAP16[i4 + (i1 + 40 << 1) >> 1] = (i13 - i23 - i18 - i22 - i9 - i21 - i15 - i20 + 1024 | 0) >>> 11;
  HEAP16[i4 + (i1 + 48 << 1) >> 1] = (i13 - i19 + i18 - i17 - i9 - i16 + i15 - i14 + 1024 | 0) >>> 11;
  HEAP16[i4 + (i1 + 56 << 1) >> 1] = (i13 - i12 + i11 - i10 + i9 - i8 + i7 - i6 + 1024 | 0) >>> 11;
  i1 = i1 + 1 | 0;
 } while ((i1 | 0) != 8);
 i1 = 0;
 do {
  i27 = i1 << 3;
  i8 = i4 + (i27 << 1) | 0;
  i19 = HEAP16[i8 >> 1] << 13;
  i2 = HEAP16[i8 + 2 >> 1] | 0;
  i20 = i2 * 11363 | 0;
  i13 = i2 * 9633 | 0;
  i9 = i2 * 6437 | 0;
  i2 = i2 * 2260 | 0;
  i14 = HEAP16[i8 + 4 >> 1] | 0;
  i21 = i14 * 10703 | 0;
  i14 = i14 * 4433 | 0;
  i6 = HEAP16[i8 + 6 >> 1] | 0;
  i22 = i6 * 9633 | 0;
  i15 = Math_imul(i6, -2259) | 0;
  i10 = Math_imul(i6, -11362) | 0;
  i6 = Math_imul(i6, -6436) | 0;
  i23 = HEAP16[i8 + 8 >> 1] << 13;
  i7 = HEAP16[i8 + 10 >> 1] | 0;
  i24 = i7 * 6437 | 0;
  i16 = Math_imul(i7, -11362) | 0;
  i11 = i7 * 2261 | 0;
  i7 = i7 * 9633 | 0;
  i17 = HEAP16[i8 + 12 >> 1] | 0;
  i25 = i17 * 4433 | 0;
  i17 = Math_imul(i17, -10704) | 0;
  i8 = HEAP16[i8 + 14 >> 1] | 0;
  i26 = i8 * 2260 | 0;
  i18 = Math_imul(i8, -6436) | 0;
  i12 = i8 * 9633 | 0;
  i8 = Math_imul(i8, -11363) | 0;
  i28 = i20 + i19 + i21 + i22 + i23 + i24 + i25 + i26 + 33685504 >> 18;
  HEAP8[i3 + i27 >> 0] = (i28 | 0) > 0 ? ((i28 | 0) < 255 ? i28 : 255) & 255 : 0;
  i28 = i13 + i19 + i14 + i15 - i23 + i16 + i17 + i18 + 33685504 >> 18;
  HEAP8[i3 + (i27 | 1) >> 0] = (i28 | 0) > 0 ? ((i28 | 0) < 255 ? i28 : 255) & 255 : 0;
  i28 = i9 + i19 - i14 + i10 - i23 + i11 - i17 + i12 + 33685504 >> 18;
  HEAP8[i3 + (i27 | 2) >> 0] = (i28 | 0) > 0 ? ((i28 | 0) < 255 ? i28 : 255) & 255 : 0;
  i28 = i2 + i19 - i21 + i6 + i23 + i7 - i25 + i8 + 33685504 >> 18;
  HEAP8[i3 + (i27 | 3) >> 0] = (i28 | 0) > 0 ? ((i28 | 0) < 255 ? i28 : 255) & 255 : 0;
  i8 = i19 - i2 - i21 - i6 + i23 - i7 - i25 - i8 + 33685504 >> 18;
  HEAP8[i3 + (i27 | 4) >> 0] = (i8 | 0) > 0 ? ((i8 | 0) < 255 ? i8 : 255) & 255 : 0;
  i12 = i19 - i9 - i14 - i10 - i23 - i11 - i17 - i12 + 33685504 >> 18;
  HEAP8[i3 + (i27 | 5) >> 0] = (i12 | 0) > 0 ? ((i12 | 0) < 255 ? i12 : 255) & 255 : 0;
  i18 = i19 - i13 + i14 - i15 - i23 - i16 + i17 - i18 + 33685504 >> 18;
  HEAP8[i3 + (i27 | 6) >> 0] = (i18 | 0) > 0 ? ((i18 | 0) < 255 ? i18 : 255) & 255 : 0;
  i26 = i19 - i20 + i21 - i22 + i23 - i24 + i25 - i26 + 33685504 >> 18;
  HEAP8[i3 + (i27 | 7) >> 0] = (i26 | 0) > 0 ? ((i26 | 0) < 255 ? i26 : 255) & 255 : 0;
  i1 = i1 + 1 | 0;
 } while ((i1 | 0) != 8);
 STACKTOP = i5;
 return;
}

function __ZN7guetzli12_GLOBAL__N_19Processor11MaybeOutputERKNSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE(i3, i5) {
 i3 = i3 | 0;
 i5 = i5 | 0;
 var i1 = 0, i2 = 0, i4 = 0, d6 = 0.0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = 0.0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 2096 | 0;
 i11 = i14 + 1032 | 0;
 i8 = i14 + 1024 | 0;
 i12 = i14;
 i2 = i14 + 1072 | 0;
 i4 = i14 + 1060 | 0;
 i10 = i14 + 1048 | 0;
 i13 = i14 + 1036 | 0;
 i7 = i3 + 16 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP8[i5 + 11 >> 0] | 0;
 d6 = +FUNCTION_TABLE_dii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 1](i1, i9 << 24 >> 24 < 0 ? HEAP32[i5 + 4 >> 2] | 0 : i9 & 255);
 HEAPF64[i12 >> 3] = d6;
 _snprintf(i2, 1024, 14235, i12) | 0;
 HEAP8[i2 + 1023 >> 0] = 0;
 i9 = i3 + 24 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i4, i2, _strlen(i2) | 0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if (i2 | 0) {
  i15 = HEAP8[i4 + 11 >> 0] | 0;
  i16 = i15 << 24 >> 24 < 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i2, i16 ? HEAP32[i4 >> 2] | 0 : i4, i16 ? HEAP32[i4 + 4 >> 2] | 0 : i15 & 255) | 0;
 }
 i1 = HEAP32[i1 + 16 >> 2] | 0;
 if (i1 | 0) _fputs((HEAP8[i4 + 11 >> 0] | 0) < 0 ? HEAP32[i4 >> 2] | 0 : i4, i1) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i4);
 i4 = i3 + 20 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 d17 = +HEAPF64[i1 + 32 >> 3];
 if (d6 < d17 | d17 < 0.0) {
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i1, i5) | 0;
  i1 = HEAP32[i7 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 3](i12, i1);
  i1 = (HEAP32[i4 >> 2] | 0) + 12 | 0;
  if ((i1 | 0) != (i12 | 0)) __ZNSt3__26vectorIfNS_9allocatorIfEEE6assignIPfEENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIfNS_15iterator_traitsIS7_E9referenceEEE5valueEvE4typeES7_S7_(i1, HEAP32[i12 >> 2] | 0, HEAP32[i12 + 4 >> 2] | 0);
  i1 = HEAP32[i12 >> 2] | 0;
  if (i1 | 0) {
   i2 = i12 + 4 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if ((i3 | 0) != (i1 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i1 | 0) >>> 2) << 2);
   __ZdlPv(i1);
  }
  i1 = HEAP32[i7 >> 2] | 0;
  d17 = +Math_fround(FUNCTION_TABLE_fi[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 3](i1));
  i1 = HEAP32[i4 >> 2] | 0;
  HEAPF64[i1 + 24 >> 3] = d17;
  HEAPF64[i1 + 32 >> 3] = d6;
  _snprintf(i12, 1024, 14248, i8) | 0;
  HEAP8[i12 + 1023 >> 0] = 0;
  i1 = HEAP32[i9 >> 2] | 0;
  HEAP32[i10 >> 2] = 0;
  HEAP32[i10 + 4 >> 2] = 0;
  HEAP32[i10 + 8 >> 2] = 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i10, i12, _strlen(i12) | 0);
  i2 = HEAP32[i1 + 12 >> 2] | 0;
  if (i2 | 0) {
   i16 = HEAP8[i10 + 11 >> 0] | 0;
   i15 = i16 << 24 >> 24 < 0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i2, i15 ? HEAP32[i10 >> 2] | 0 : i10, i15 ? HEAP32[i10 + 4 >> 2] | 0 : i16 & 255) | 0;
  }
  i1 = HEAP32[i1 + 16 >> 2] | 0;
  if (i1 | 0) _fputs((HEAP8[i10 + 11 >> 0] | 0) < 0 ? HEAP32[i10 >> 2] | 0 : i10, i1) | 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i10);
 }
 _snprintf(i12, 1024, 14141, i11) | 0;
 HEAP8[i12 + 1023 >> 0] = 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i13 + 4 >> 2] = 0;
 HEAP32[i13 + 8 >> 2] = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i13, i12, _strlen(i12) | 0);
 i1 = HEAP32[i2 + 12 >> 2] | 0;
 if (i1 | 0) {
  i16 = HEAP8[i13 + 11 >> 0] | 0;
  i15 = i16 << 24 >> 24 < 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i1, i15 ? HEAP32[i13 >> 2] | 0 : i13, i15 ? HEAP32[i13 + 4 >> 2] | 0 : i16 & 255) | 0;
 }
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 if (!i1) {
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i13);
  STACKTOP = i14;
  return;
 }
 _fputs((HEAP8[i13 + 11 >> 0] | 0) < 0 ? HEAP32[i13 >> 2] | 0 : i13, i1) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i13);
 STACKTOP = i14;
 return;
}

function ___udivmoddi4(i5, i6, i8, i11, i13) {
 i5 = i5 | 0;
 i6 = i6 | 0;
 i8 = i8 | 0;
 i11 = i11 | 0;
 i13 = i13 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i7 = 0, i9 = 0, i10 = 0, i12 = 0, i14 = 0, i15 = 0;
 i9 = i5;
 i4 = i6;
 i7 = i4;
 i2 = i8;
 i12 = i11;
 i3 = i12;
 if (!i7) {
  i1 = (i13 | 0) != 0;
  if (!i3) {
   if (i1) {
    HEAP32[i13 >> 2] = (i9 >>> 0) % (i2 >>> 0);
    HEAP32[i13 + 4 >> 2] = 0;
   }
   i12 = 0;
   i13 = (i9 >>> 0) / (i2 >>> 0) >>> 0;
   return (tempRet0 = i12, i13) | 0;
  } else {
   if (!i1) {
    i12 = 0;
    i13 = 0;
    return (tempRet0 = i12, i13) | 0;
   }
   HEAP32[i13 >> 2] = i5 | 0;
   HEAP32[i13 + 4 >> 2] = i6 & 0;
   i12 = 0;
   i13 = 0;
   return (tempRet0 = i12, i13) | 0;
  }
 }
 i1 = (i3 | 0) == 0;
 do if (i2) {
  if (!i1) {
   i1 = (Math_clz32(i3 | 0) | 0) - (Math_clz32(i7 | 0) | 0) | 0;
   if (i1 >>> 0 <= 31) {
    i10 = i1 + 1 | 0;
    i3 = 31 - i1 | 0;
    i6 = i1 - 31 >> 31;
    i2 = i10;
    i5 = i9 >>> (i10 >>> 0) & i6 | i7 << i3;
    i6 = i7 >>> (i10 >>> 0) & i6;
    i1 = 0;
    i3 = i9 << i3;
    break;
   }
   if (!i13) {
    i12 = 0;
    i13 = 0;
    return (tempRet0 = i12, i13) | 0;
   }
   HEAP32[i13 >> 2] = i5 | 0;
   HEAP32[i13 + 4 >> 2] = i4 | i6 & 0;
   i12 = 0;
   i13 = 0;
   return (tempRet0 = i12, i13) | 0;
  }
  i1 = i2 - 1 | 0;
  if (i1 & i2 | 0) {
   i3 = (Math_clz32(i2 | 0) | 0) + 33 - (Math_clz32(i7 | 0) | 0) | 0;
   i15 = 64 - i3 | 0;
   i10 = 32 - i3 | 0;
   i4 = i10 >> 31;
   i14 = i3 - 32 | 0;
   i6 = i14 >> 31;
   i2 = i3;
   i5 = i10 - 1 >> 31 & i7 >>> (i14 >>> 0) | (i7 << i10 | i9 >>> (i3 >>> 0)) & i6;
   i6 = i6 & i7 >>> (i3 >>> 0);
   i1 = i9 << i15 & i4;
   i3 = (i7 << i15 | i9 >>> (i14 >>> 0)) & i4 | i9 << i10 & i3 - 33 >> 31;
   break;
  }
  if (i13 | 0) {
   HEAP32[i13 >> 2] = i1 & i9;
   HEAP32[i13 + 4 >> 2] = 0;
  }
  if ((i2 | 0) == 1) {
   i14 = i4 | i6 & 0;
   i15 = i5 | 0 | 0;
   return (tempRet0 = i14, i15) | 0;
  } else {
   i15 = _llvm_cttz_i32(i2 | 0) | 0;
   i14 = i7 >>> (i15 >>> 0) | 0;
   i15 = i7 << 32 - i15 | i9 >>> (i15 >>> 0) | 0;
   return (tempRet0 = i14, i15) | 0;
  }
 } else {
  if (i1) {
   if (i13 | 0) {
    HEAP32[i13 >> 2] = (i7 >>> 0) % (i2 >>> 0);
    HEAP32[i13 + 4 >> 2] = 0;
   }
   i14 = 0;
   i15 = (i7 >>> 0) / (i2 >>> 0) >>> 0;
   return (tempRet0 = i14, i15) | 0;
  }
  if (!i9) {
   if (i13 | 0) {
    HEAP32[i13 >> 2] = 0;
    HEAP32[i13 + 4 >> 2] = (i7 >>> 0) % (i3 >>> 0);
   }
   i14 = 0;
   i15 = (i7 >>> 0) / (i3 >>> 0) >>> 0;
   return (tempRet0 = i14, i15) | 0;
  }
  i1 = i3 - 1 | 0;
  if (!(i1 & i3)) {
   if (i13 | 0) {
    HEAP32[i13 >> 2] = i5 | 0;
    HEAP32[i13 + 4 >> 2] = i1 & i7 | i6 & 0;
   }
   i14 = 0;
   i15 = i7 >>> ((_llvm_cttz_i32(i3 | 0) | 0) >>> 0);
   return (tempRet0 = i14, i15) | 0;
  }
  i1 = (Math_clz32(i3 | 0) | 0) - (Math_clz32(i7 | 0) | 0) | 0;
  if (i1 >>> 0 <= 30) {
   i6 = i1 + 1 | 0;
   i3 = 31 - i1 | 0;
   i2 = i6;
   i5 = i7 << i3 | i9 >>> (i6 >>> 0);
   i6 = i7 >>> (i6 >>> 0);
   i1 = 0;
   i3 = i9 << i3;
   break;
  }
  if (!i13) {
   i14 = 0;
   i15 = 0;
   return (tempRet0 = i14, i15) | 0;
  }
  HEAP32[i13 >> 2] = i5 | 0;
  HEAP32[i13 + 4 >> 2] = i4 | i6 & 0;
  i14 = 0;
  i15 = 0;
  return (tempRet0 = i14, i15) | 0;
 } while (0);
 if (!i2) {
  i7 = i3;
  i4 = 0;
  i3 = 0;
 } else {
  i10 = i8 | 0 | 0;
  i9 = i12 | i11 & 0;
  i7 = _i64Add(i10 | 0, i9 | 0, -1, -1) | 0;
  i8 = tempRet0;
  i4 = i3;
  i3 = 0;
  do {
   i11 = i4;
   i4 = i1 >>> 31 | i4 << 1;
   i1 = i3 | i1 << 1;
   i11 = i5 << 1 | i11 >>> 31 | 0;
   i12 = i5 >>> 31 | i6 << 1 | 0;
   _i64Subtract(i7 | 0, i8 | 0, i11 | 0, i12 | 0) | 0;
   i15 = tempRet0;
   i14 = i15 >> 31 | ((i15 | 0) < 0 ? -1 : 0) << 1;
   i3 = i14 & 1;
   i5 = _i64Subtract(i11 | 0, i12 | 0, i14 & i10 | 0, (((i15 | 0) < 0 ? -1 : 0) >> 31 | ((i15 | 0) < 0 ? -1 : 0) << 1) & i9 | 0) | 0;
   i6 = tempRet0;
   i2 = i2 - 1 | 0;
  } while ((i2 | 0) != 0);
  i7 = i4;
  i4 = 0;
 }
 i2 = 0;
 if (i13 | 0) {
  HEAP32[i13 >> 2] = i5;
  HEAP32[i13 + 4 >> 2] = i6;
 }
 i14 = (i1 | 0) >>> 31 | (i7 | i2) << 1 | (i2 << 1 | i1 >>> 31) & 0 | i4;
 i15 = (i1 << 1 | 0 >>> 31) & -2 | i3;
 return (tempRet0 = i14, i15) | 0;
}

function __ZN11butteraugli23MaskHighIntensityChangeEjjRKNSt3__26vectorINS1_IfNS0_9allocatorIfEEEENS2_IS4_EEEES8_RS6_S9_(i41, i42, i1, i2, i3, i4) {
 i41 = i41 | 0;
 i42 = i42 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var d5 = 0.0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = 0.0, i15 = 0, i16 = 0, d17 = 0.0, i18 = 0, i19 = 0, d20 = 0.0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i43 = 0, f44 = f0, i45 = 0, d46 = 0.0, d47 = 0.0, d48 = 0.0;
 if (!i42) return;
 i43 = (i41 | 0) == 0;
 i40 = HEAP32[i1 >> 2] | 0;
 i39 = HEAP32[i2 >> 2] | 0;
 i35 = i40 + 12 | 0;
 i36 = i39 + 12 | 0;
 i37 = i40 + 24 | 0;
 i38 = i39 + 24 | 0;
 i34 = HEAP32[i3 >> 2] | 0;
 i29 = HEAP32[i4 >> 2] | 0;
 i30 = i34 + 12 | 0;
 i31 = i29 + 12 | 0;
 i32 = i34 + 24 | 0;
 i33 = i29 + 24 | 0;
 i1 = 0;
 do if (i43) i1 = i1 + 1 | 0; else {
  i21 = Math_imul(i1, i41) | 0;
  i22 = HEAP32[i40 >> 2] | 0;
  i23 = HEAP32[i39 >> 2] | 0;
  i24 = HEAP32[i35 >> 2] | 0;
  i25 = HEAP32[i36 >> 2] | 0;
  i26 = HEAP32[i37 >> 2] | 0;
  i27 = HEAP32[i38 >> 2] | 0;
  i28 = (i1 | 0) == 0;
  i1 = i1 + 1 | 0;
  i3 = (i1 | 0) == (i42 | 0);
  i4 = HEAP32[i40 >> 2] | 0;
  i6 = HEAP32[i34 >> 2] | 0;
  i7 = HEAP32[i29 >> 2] | 0;
  i8 = HEAP32[i30 >> 2] | 0;
  i9 = HEAP32[i31 >> 2] | 0;
  i10 = HEAP32[i32 >> 2] | 0;
  i11 = HEAP32[i33 >> 2] | 0;
  i2 = 0;
  do {
   i12 = i2 + i21 | 0;
   f44 = Math_fround(HEAPF32[i22 + (i12 << 2) >> 2]);
   i13 = i23 + (i12 << 2) | 0;
   d14 = +Math_fround(f44 + Math_fround(HEAPF32[i13 >> 2])) * .5;
   i15 = i24 + (i12 << 2) | 0;
   f44 = Math_fround(HEAPF32[i15 >> 2]);
   i16 = i25 + (i12 << 2) | 0;
   d17 = +Math_fround(f44 + Math_fround(HEAPF32[i16 >> 2])) * .5;
   i18 = i26 + (i12 << 2) | 0;
   f44 = Math_fround(HEAPF32[i18 >> 2]);
   i19 = i27 + (i12 << 2) | 0;
   d20 = +Math_fround(f44 + Math_fround(HEAPF32[i19 >> 2])) * .5;
   if (!i2) d5 = -1.0; else {
    i45 = i12 + -1 | 0;
    f44 = Math_fround(HEAPF32[i24 + (i45 << 2) >> 2]);
    d5 = +Math_fround(f44 + Math_fround(HEAPF32[i25 + (i45 << 2) >> 2])) * .5 - d17;
    d5 = d5 * d5;
    d5 = d5 > -1.0 ? d5 : -1.0;
   }
   i2 = i2 + 1 | 0;
   if ((i2 | 0) != (i41 | 0)) {
    i45 = i12 + 1 | 0;
    f44 = Math_fround(HEAPF32[i24 + (i45 << 2) >> 2]);
    d46 = +Math_fround(f44 + Math_fround(HEAPF32[i25 + (i45 << 2) >> 2])) * .5 - d17;
    d46 = d46 * d46;
    d5 = d5 < d46 ? d46 : d5;
   }
   if (!i28) {
    i45 = i12 - i41 | 0;
    f44 = Math_fround(HEAPF32[i24 + (i45 << 2) >> 2]);
    d46 = +Math_fround(f44 + Math_fround(HEAPF32[i25 + (i45 << 2) >> 2])) * .5 - d17;
    d46 = d46 * d46;
    d5 = d5 < d46 ? d46 : d5;
   }
   if (!i3) {
    i45 = i12 + i41 | 0;
    f44 = Math_fround(HEAPF32[i24 + (i45 << 2) >> 2]);
    d46 = +Math_fround(f44 + Math_fround(HEAPF32[i25 + (i45 << 2) >> 2])) * .5 - d17;
    d46 = d46 * d46;
    d5 = d5 < d46 ? d46 : d5;
   }
   d46 = 106.95800948271017 / (d17 + 106.95800948271017);
   d48 = d46 * 275.19165240059317 / (d5 + 275.19165240059317);
   d47 = 18599.41286306991 / (d5 + 18599.41286306991);
   d5 = d46 * 410.8995306951065 / (d5 + 410.8995306951065);
   d46 = (1.0 - d48) * d14;
   HEAPF32[i6 + (i12 << 2) >> 2] = Math_fround(d48 * +Math_fround(HEAPF32[i4 + (i12 << 2) >> 2]) + d46);
   HEAPF32[i7 + (i12 << 2) >> 2] = Math_fround(d48 * +Math_fround(HEAPF32[i13 >> 2]) + d46);
   d46 = (1.0 - d47) * d17;
   HEAPF32[i8 + (i12 << 2) >> 2] = Math_fround(d47 * +Math_fround(HEAPF32[i15 >> 2]) + d46);
   HEAPF32[i9 + (i12 << 2) >> 2] = Math_fround(d47 * +Math_fround(HEAPF32[i16 >> 2]) + d46);
   d46 = (1.0 - d5) * d20;
   HEAPF32[i10 + (i12 << 2) >> 2] = Math_fround(d5 * +Math_fround(HEAPF32[i18 >> 2]) + d46);
   HEAPF32[i11 + (i12 << 2) >> 2] = Math_fround(d5 * +Math_fround(HEAPF32[i19 >> 2]) + d46);
  } while ((i2 | 0) != (i41 | 0));
 } while ((i1 | 0) != (i42 | 0));
 return;
}

function __ZN7guetzli8JPEGDataD2Ev(i9) {
 i9 = i9 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i9 + 128 | 0);
 i3 = i9 + 116 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if (i1 | 0) {
  i4 = i9 + 120 | 0;
  i2 = HEAP32[i4 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i8 = i2 + -12 | 0;
    HEAP32[i4 >> 2] = i8;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i8);
    i2 = HEAP32[i4 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i3 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i1 = HEAP32[i9 + 104 >> 2] | 0;
 if (i1 | 0) {
  i2 = i9 + 108 | 0;
  if ((HEAP32[i2 >> 2] | 0) != (i1 | 0)) HEAP32[i2 >> 2] = i1;
  __ZdlPv(i1);
 }
 i5 = i9 + 92 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if (i1 | 0) {
  i6 = i9 + 96 | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -28 | 0;
    HEAP32[i6 >> 2] = i3;
    i4 = HEAP32[i2 + -12 >> 2] | 0;
    if (!i4) i2 = i3; else {
     i2 = i2 + -8 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~(((i3 + -12 - i4 | 0) >>> 0) / 12 | 0) * 12 | 0);
     __ZdlPv(i4);
     i2 = HEAP32[i6 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i5 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i5 = i9 + 80 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if (i1 | 0) {
  i6 = i9 + 84 | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -40 | 0;
    HEAP32[i6 >> 2] = i3;
    i4 = HEAP32[i2 + -12 >> 2] | 0;
    if (!i4) i2 = i3; else {
     i2 = i2 + -8 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -2 - i4 | 0) >>> 1) << 1);
     __ZdlPv(i4);
     i2 = HEAP32[i6 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i5 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i7 = i9 + 68 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if (i1 | 0) {
  i8 = i9 + 72 | 0;
  i2 = HEAP32[i8 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -32 | 0;
    HEAP32[i8 >> 2] = i3;
    i4 = HEAP32[i2 + -20 >> 2] | 0;
    if (i4 | 0) {
     i5 = i2 + -16 | 0;
     i6 = HEAP32[i5 >> 2] | 0;
     if ((i6 | 0) != (i4 | 0)) HEAP32[i5 >> 2] = i6 + (~((i6 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
    }
    i4 = HEAP32[i3 >> 2] | 0;
    if (i4 | 0) {
     i2 = i2 + -28 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
    }
    i2 = HEAP32[i8 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i7 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i5 = i9 + 56 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if (i1 | 0) {
  i6 = i9 + 60 | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   i3 = i2;
   while (1) {
    i2 = i3 + -24 | 0;
    HEAP32[i6 >> 2] = i2;
    i4 = HEAP32[i2 >> 2] | 0;
    if (i4) {
     i2 = i3 + -20 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
     i2 = HEAP32[i6 >> 2] | 0;
    }
    if ((i2 | 0) == (i1 | 0)) break; else i3 = i2;
   }
   i1 = HEAP32[i5 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i3 = i9 + 44 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if (i1 | 0) {
  i4 = i9 + 48 | 0;
  i2 = HEAP32[i4 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i8 = i2 + -12 | 0;
    HEAP32[i4 >> 2] = i8;
    __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i8);
    i2 = HEAP32[i4 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i3 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i4 = i9 + 32 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if (!i1) return;
 i3 = i9 + 36 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != (i1 | 0)) {
  do {
   i9 = i2 + -12 | 0;
   HEAP32[i3 >> 2] = i9;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i9);
   i2 = HEAP32[i3 >> 2] | 0;
  } while ((i2 | 0) != (i1 | 0));
  i1 = HEAP32[i4 >> 2] | 0;
 }
 __ZdlPv(i1);
 return;
}

function __ZNK7guetzli20OutputImageComponent13ToFloatPixelsEPfi(i17, i18, i23) {
 i17 = i17 | 0;
 i18 = i18 | 0;
 i23 = i23 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 640 | 0;
 i24 = i26 + 512 | 0;
 i25 = i26;
 if ((HEAP32[i17 + 8 >> 2] | 0) != 1) ___assert_fail(9074, 8947, 99, 9089);
 if ((HEAP32[i17 + 12 >> 2] | 0) != 1) ___assert_fail(9103, 8947, 100, 9089);
 i19 = i17 + 20 | 0;
 i1 = HEAP32[i19 >> 2] | 0;
 if ((i1 | 0) <= 0) {
  STACKTOP = i26;
  return;
 }
 i20 = i17 + 16 | 0;
 i21 = i17 + 28 | 0;
 i22 = i17 + 4 | 0;
 i16 = 0;
 i2 = HEAP32[i20 >> 2] | 0;
 L10 : while (1) {
  if ((i2 | 0) > 0) {
   i15 = i16 << 3;
   i14 = 0;
   do {
    if ((i2 | 0) <= (i14 | 0)) {
     i1 = 13;
     break L10;
    }
    if ((HEAP32[i19 >> 2] | 0) <= (i16 | 0)) {
     i1 = 15;
     break L10;
    }
    i2 = (Math_imul(i2, i16) | 0) + i14 << 6;
    i1 = i24;
    i2 = (HEAP32[i21 >> 2] | 0) + (i2 << 1) | 0;
    i3 = i1 + 128 | 0;
    do {
     HEAP16[i1 >> 1] = HEAP16[i2 >> 1] | 0;
     i1 = i1 + 2 | 0;
     i2 = i2 + 2 | 0;
    } while ((i1 | 0) < (i3 | 0));
    i1 = 0;
    do {
     HEAPF64[i25 + (i1 << 3) >> 3] = +(HEAP16[i24 + (i1 << 1) >> 1] | 0);
     i1 = i1 + 1 | 0;
    } while ((i1 | 0) != 64);
    __ZN7guetzli22ComputeBlockIDCTDoubleEPd(i25);
    i2 = i14 << 3;
    i3 = HEAP32[i22 >> 2] | 0;
    i4 = i2 | 1;
    i5 = i2 | 2;
    i6 = i2 | 3;
    i7 = i2 | 4;
    i8 = i2 | 5;
    i9 = i2 | 6;
    i10 = i2 | 7;
    i1 = 0;
    do {
     i11 = i1 + i15 | 0;
     i12 = i1 << 3;
     if ((i11 | 0) < (i3 | 0)) {
      i13 = HEAP32[i17 >> 2] | 0;
      if ((i2 | 0) < (i13 | 0)) {
       i27 = i18 + ((Math_imul((Math_imul(i13, i11) | 0) + i2 | 0, i23) | 0) << 2) | 0;
       HEAPF32[i27 >> 2] = Math_fround(+HEAPF64[i25 + (i12 << 3) >> 3] + 128.0);
      }
      if ((i4 | 0) < (i13 | 0)) {
       i27 = i18 + ((Math_imul((Math_imul(i13, i11) | 0) + i4 | 0, i23) | 0) << 2) | 0;
       HEAPF32[i27 >> 2] = Math_fround(+HEAPF64[i25 + ((i12 | 1) << 3) >> 3] + 128.0);
      }
      if ((i5 | 0) < (i13 | 0)) {
       i27 = i18 + ((Math_imul((Math_imul(i13, i11) | 0) + i5 | 0, i23) | 0) << 2) | 0;
       HEAPF32[i27 >> 2] = Math_fround(+HEAPF64[i25 + ((i12 | 2) << 3) >> 3] + 128.0);
      }
      if ((i6 | 0) < (i13 | 0)) {
       i27 = i18 + ((Math_imul((Math_imul(i13, i11) | 0) + i6 | 0, i23) | 0) << 2) | 0;
       HEAPF32[i27 >> 2] = Math_fround(+HEAPF64[i25 + ((i12 | 3) << 3) >> 3] + 128.0);
      }
      if ((i7 | 0) < (i13 | 0)) {
       i27 = i18 + ((Math_imul((Math_imul(i13, i11) | 0) + i7 | 0, i23) | 0) << 2) | 0;
       HEAPF32[i27 >> 2] = Math_fround(+HEAPF64[i25 + ((i12 | 4) << 3) >> 3] + 128.0);
      }
      if ((i8 | 0) < (i13 | 0)) {
       i27 = i18 + ((Math_imul((Math_imul(i13, i11) | 0) + i8 | 0, i23) | 0) << 2) | 0;
       HEAPF32[i27 >> 2] = Math_fround(+HEAPF64[i25 + ((i12 | 5) << 3) >> 3] + 128.0);
      }
      if ((i9 | 0) < (i13 | 0)) {
       i27 = i18 + ((Math_imul((Math_imul(i13, i11) | 0) + i9 | 0, i23) | 0) << 2) | 0;
       HEAPF32[i27 >> 2] = Math_fround(+HEAPF64[i25 + ((i12 | 6) << 3) >> 3] + 128.0);
      }
      if ((i10 | 0) < (i13 | 0)) {
       i27 = i18 + ((Math_imul((Math_imul(i13, i11) | 0) + i10 | 0, i23) | 0) << 2) | 0;
       HEAPF32[i27 >> 2] = Math_fround(+HEAPF64[i25 + ((i12 | 7) << 3) >> 3] + 128.0);
      }
     }
     i1 = i1 + 1 | 0;
    } while ((i1 | 0) != 8);
    i14 = i14 + 1 | 0;
    i2 = HEAP32[i20 >> 2] | 0;
   } while ((i14 | 0) < (i2 | 0));
   i1 = HEAP32[i19 >> 2] | 0;
  }
  i16 = i16 + 1 | 0;
  if ((i16 | 0) >= (i1 | 0)) {
   i1 = 9;
   break;
  }
 }
 if ((i1 | 0) == 9) {
  STACKTOP = i26;
  return;
 } else if ((i1 | 0) == 13) ___assert_fail(8920, 8947, 60, 8974); else if ((i1 | 0) == 15) ___assert_fail(8988, 8947, 61, 8974);
}

function __ZN11butteraugli36Butteraugli8x8CornerEdgeDetectorDiffEjjjjRKNSt3__26vectorINS1_IfNS0_9allocatorIfEEEENS2_IS4_EEEES8_Pd(i5, i6, i7, i8, i9, i10, i11) {
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, f17 = f0, d18 = 0.0, d19 = 0.0, d20 = 0.0, d21 = 0.0, d22 = 0.0, i23 = 0, i24 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i12 = i14;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i12 + 4 >> 2] = 0;
 HEAP32[i12 + 8 >> 2] = 0;
 HEAP32[i12 + 12 >> 2] = 0;
 HEAP32[i12 + 16 >> 2] = 0;
 HEAP32[i12 + 20 >> 2] = 0;
 i13 = i7 * 6 | 0;
 i1 = 0;
 i4 = 0;
 do {
  i2 = (HEAP32[3224 + (i4 << 3) >> 2] | 0) + i5 | 0;
  i3 = (HEAP32[3224 + (i4 << 3) + 4 >> 2] | 0) + i6 | 0;
  if (i2 >>> 0 > 2 & (i2 + 3 | 0) >>> 0 < i7 >>> 0) {
   i23 = i2 + -3 + (Math_imul(i3, i7) | 0) | 0;
   i15 = i23 + 6 | 0;
   i16 = HEAP32[i9 >> 2] | 0;
   i24 = HEAP32[i16 >> 2] | 0;
   f17 = Math_fround(HEAPF32[i24 + (i23 << 2) >> 2]);
   d22 = +Math_fround(f17 - Math_fround(HEAPF32[i24 + (i15 << 2) >> 2])) * .711100840192;
   i24 = HEAP32[i16 + 12 >> 2] | 0;
   f17 = Math_fround(HEAPF32[i24 + (i23 << 2) >> 2]);
   d21 = +Math_fround(f17 - Math_fround(HEAPF32[i24 + (i15 << 2) >> 2])) * .711100840192;
   i16 = HEAP32[i16 + 24 >> 2] | 0;
   f17 = Math_fround(HEAPF32[i16 + (i23 << 2) >> 2]);
   d20 = +Math_fround(f17 - Math_fround(HEAPF32[i16 + (i15 << 2) >> 2])) * .711100840192;
   i16 = HEAP32[i10 >> 2] | 0;
   i24 = HEAP32[i16 >> 2] | 0;
   f17 = Math_fround(HEAPF32[i24 + (i23 << 2) >> 2]);
   d19 = +Math_fround(f17 - Math_fround(HEAPF32[i24 + (i15 << 2) >> 2])) * .711100840192;
   i24 = HEAP32[i16 + 12 >> 2] | 0;
   f17 = Math_fround(HEAPF32[i24 + (i23 << 2) >> 2]);
   d18 = +Math_fround(f17 - Math_fround(HEAPF32[i24 + (i15 << 2) >> 2])) * .711100840192;
   i16 = HEAP32[i16 + 24 >> 2] | 0;
   f17 = Math_fround(HEAPF32[i16 + (i23 << 2) >> 2]);
   __ZN11butteraugli31XybDiffLowFreqSquaredAccumulateEdddddddPd(d22, d21, d20, d19, d18, +Math_fround(f17 - Math_fround(HEAPF32[i16 + (i15 << 2) >> 2])) * .711100840192, 1.0, i12);
   i1 = i1 + 1 | 0;
  }
  if (i3 >>> 0 > 2 & (i3 + 3 | 0) >>> 0 < i8 >>> 0) {
   i16 = (Math_imul(i3 + -3 | 0, i7) | 0) + i2 | 0;
   i24 = i16 + i13 | 0;
   i23 = HEAP32[i9 >> 2] | 0;
   i15 = HEAP32[i23 >> 2] | 0;
   f17 = Math_fround(HEAPF32[i15 + (i16 << 2) >> 2]);
   d18 = +Math_fround(f17 - Math_fround(HEAPF32[i15 + (i24 << 2) >> 2])) * .711100840192;
   i15 = HEAP32[i23 + 12 >> 2] | 0;
   f17 = Math_fround(HEAPF32[i15 + (i16 << 2) >> 2]);
   d19 = +Math_fround(f17 - Math_fround(HEAPF32[i15 + (i24 << 2) >> 2])) * .711100840192;
   i23 = HEAP32[i23 + 24 >> 2] | 0;
   f17 = Math_fround(HEAPF32[i23 + (i16 << 2) >> 2]);
   d20 = +Math_fround(f17 - Math_fround(HEAPF32[i23 + (i24 << 2) >> 2])) * .711100840192;
   i23 = HEAP32[i10 >> 2] | 0;
   i15 = HEAP32[i23 >> 2] | 0;
   f17 = Math_fround(HEAPF32[i15 + (i16 << 2) >> 2]);
   d21 = +Math_fround(f17 - Math_fround(HEAPF32[i15 + (i24 << 2) >> 2])) * .711100840192;
   i15 = HEAP32[i23 + 12 >> 2] | 0;
   f17 = Math_fround(HEAPF32[i15 + (i16 << 2) >> 2]);
   d22 = +Math_fround(f17 - Math_fround(HEAPF32[i15 + (i24 << 2) >> 2])) * .711100840192;
   i23 = HEAP32[i23 + 24 >> 2] | 0;
   f17 = Math_fround(HEAPF32[i23 + (i16 << 2) >> 2]);
   __ZN11butteraugli31XybDiffLowFreqSquaredAccumulateEdddddddPd(d18, d19, d20, d21, d22, +Math_fround(f17 - Math_fround(HEAPF32[i23 + (i24 << 2) >> 2])) * .711100840192, 1.0, i12);
   i1 = i1 + 1 | 0;
  }
  i4 = i4 + 1 | 0;
 } while ((i4 | 0) != 4);
 d22 = .12936901568 / +(i1 | 0);
 HEAPF64[i11 >> 3] = +HEAPF64[i11 >> 3] + d22 * +HEAPF64[i12 >> 3];
 i24 = i11 + 8 | 0;
 HEAPF64[i24 >> 3] = +HEAPF64[i24 >> 3] + d22 * +HEAPF64[i12 + 8 >> 3];
 i24 = i11 + 16 | 0;
 HEAPF64[i24 >> 3] = +HEAPF64[i24 >> 3] + d22 * +HEAPF64[i12 + 16 >> 3];
 STACKTOP = i14;
 return;
}

function __ZN11butteraugli21ButteraugliComparator15EdgeDetectorMapERKNSt3__26vectorINS2_IfNS1_9allocatorIfEEEENS3_IS5_EEEES9_PS5_(i12, i1, i2, i13) {
 i12 = i12 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i13 = i13 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i16 = i17 + 36 | 0;
 i15 = i17 + 24 | 0;
 i14 = i17;
 __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEEC2ERKS5_(i16, i1);
 __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEEC2ERKS5_(i15, i2);
 i11 = i12 + 4 | 0;
 __ZN11butteraugli4BlurEjjPfdd(HEAP32[i12 >> 2] | 0, HEAP32[i11 >> 2] | 0, HEAP32[HEAP32[i16 >> 2] >> 2] | 0, 1.5, 0.0);
 __ZN11butteraugli4BlurEjjPfdd(HEAP32[i12 >> 2] | 0, HEAP32[i11 >> 2] | 0, HEAP32[HEAP32[i15 >> 2] >> 2] | 0, 1.5, 0.0);
 __ZN11butteraugli4BlurEjjPfdd(HEAP32[i12 >> 2] | 0, HEAP32[i11 >> 2] | 0, HEAP32[(HEAP32[i16 >> 2] | 0) + 12 >> 2] | 0, .586, 0.0);
 __ZN11butteraugli4BlurEjjPfdd(HEAP32[i12 >> 2] | 0, HEAP32[i11 >> 2] | 0, HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] | 0, .586, 0.0);
 __ZN11butteraugli4BlurEjjPfdd(HEAP32[i12 >> 2] | 0, HEAP32[i11 >> 2] | 0, HEAP32[(HEAP32[i16 >> 2] | 0) + 24 >> 2] | 0, .4, 0.0);
 __ZN11butteraugli4BlurEjjPfdd(HEAP32[i12 >> 2] | 0, HEAP32[i11 >> 2] | 0, HEAP32[(HEAP32[i15 >> 2] | 0) + 24 >> 2] | 0, .4, 0.0);
 i7 = i12 + 12 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i1 = HEAP32[i11 >> 2] | 0;
 if ((8 - i2 | 0) >>> 0 < i1 >>> 0) {
  i8 = i12 + 16 | 0;
  i9 = i14 + 8 | 0;
  i10 = i14 + 16 | 0;
  i3 = HEAP32[i12 >> 2] | 0;
  i6 = 0;
  do {
   if ((8 - i2 | 0) >>> 0 < i3 >>> 0) {
    i4 = 0;
    while (1) {
     i5 = HEAP32[i8 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     HEAP32[i14 + 4 >> 2] = 0;
     HEAP32[i14 + 8 >> 2] = 0;
     HEAP32[i14 + 12 >> 2] = 0;
     HEAP32[i14 + 16 >> 2] = 0;
     HEAP32[i14 + 20 >> 2] = 0;
     i19 = i3 + -8 | 0;
     i18 = i1 + -8 | 0;
     __ZN11butteraugli36Butteraugli8x8CornerEdgeDetectorDiffEjjjjRKNSt3__26vectorINS1_IfNS0_9allocatorIfEEEENS2_IS4_EEEES8_Pd(i19 >>> 0 < i4 >>> 0 ? i19 : i4, i18 >>> 0 < i6 >>> 0 ? i18 : i6, i3, i1, i16, i15, i14);
     i5 = ((((Math_imul(i5, i6) | 0) + i4 | 0) >>> 0) / (i2 >>> 0) | 0) * 3 | 0;
     i1 = HEAP32[i13 >> 2] | 0;
     HEAPF32[i1 + (i5 << 2) >> 2] = Math_fround(+HEAPF64[i14 >> 3]);
     HEAPF32[i1 + (i5 + 1 << 2) >> 2] = Math_fround(+HEAPF64[i9 >> 3]);
     HEAPF32[i1 + (i5 + 2 << 2) >> 2] = Math_fround(+HEAPF64[i10 >> 3]);
     i5 = HEAP32[i7 >> 2] | 0;
     i1 = HEAP32[i12 >> 2] | 0;
     if ((i4 + 8 | 0) >>> 0 >= i1 >>> 0) break;
     i2 = i5;
     i3 = i1;
     i1 = HEAP32[i11 >> 2] | 0;
     i4 = i5 + i4 | 0;
    }
    i3 = i1;
    i2 = i5;
    i1 = HEAP32[i11 >> 2] | 0;
   }
   i6 = i2 + i6 | 0;
  } while ((i6 + 8 - i2 | 0) >>> 0 < i1 >>> 0);
 }
 i1 = HEAP32[i15 >> 2] | 0;
 if (i1 | 0) {
  i5 = i15 + 4 | 0;
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -12 | 0;
    HEAP32[i5 >> 2] = i3;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) i2 = i3; else {
     i2 = i2 + -8 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
     i2 = HEAP32[i5 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i15 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i1 = HEAP32[i16 >> 2] | 0;
 if (!i1) {
  STACKTOP = i17;
  return;
 }
 i5 = i16 + 4 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) != (i1 | 0)) {
  do {
   i3 = i2 + -12 | 0;
   HEAP32[i5 >> 2] = i3;
   i4 = HEAP32[i3 >> 2] | 0;
   if (!i4) i2 = i3; else {
    i2 = i2 + -8 | 0;
    i3 = HEAP32[i2 >> 2] | 0;
    if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
    __ZdlPv(i4);
    i2 = HEAP32[i5 >> 2] | 0;
   }
  } while ((i2 | 0) != (i1 | 0));
  i1 = HEAP32[i16 >> 2] | 0;
 }
 __ZdlPv(i1);
 STACKTOP = i17;
 return;
}

function __ZN7guetzli21InitJPEGDataForYUV444EiiPNS_8JPEGDataE(i2, i1, i8) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i8 = i8 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 HEAP32[i8 >> 2] = i2;
 HEAP32[i8 + 4 >> 2] = i1;
 HEAP32[i8 + 12 >> 2] = 1;
 HEAP32[i8 + 16 >> 2] = 1;
 i14 = i8 + 20 | 0;
 HEAP32[i14 >> 2] = i1 + 7 >> 3;
 i12 = i8 + 24 | 0;
 HEAP32[i12 >> 2] = i2 + 7 >> 3;
 i1 = i8 + 56 | 0;
 i6 = i8 + 60 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i3 = i2 - i5 | 0;
 i4 = (i3 | 0) / 24 | 0;
 if (i4 >>> 0 >= 3) {
  if ((i3 | 0) != 72 ? (i7 = i5 + 72 | 0, (i2 | 0) != (i7 | 0)) : 0) while (1) {
   i1 = i2 + -24 | 0;
   HEAP32[i6 >> 2] = i1;
   i3 = HEAP32[i1 >> 2] | 0;
   if (i3) {
    i1 = i2 + -20 | 0;
    i2 = HEAP32[i1 >> 2] | 0;
    if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
    __ZdlPv(i3);
    i1 = HEAP32[i6 >> 2] | 0;
   }
   if ((i1 | 0) == (i7 | 0)) break; else i2 = i1;
  }
 } else __ZNSt3__26vectorIN7guetzli14JPEGQuantTableENS_9allocatorIS2_EEE8__appendEj(i1, 3 - i4 | 0);
 i10 = i8 + 80 | 0;
 i5 = i8 + 84 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 i1 = i2 - i4 | 0;
 i3 = (i1 | 0) / 40 | 0;
 if (i3 >>> 0 >= 3) {
  if ((i1 | 0) != 120 ? (i9 = i4 + 120 | 0, (i2 | 0) != (i9 | 0)) : 0) while (1) {
   i1 = i2 + -40 | 0;
   HEAP32[i5 >> 2] = i1;
   i3 = HEAP32[i2 + -12 >> 2] | 0;
   if (i3) {
    i1 = i2 + -8 | 0;
    i2 = HEAP32[i1 >> 2] | 0;
    if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -2 - i3 | 0) >>> 1) << 1);
    __ZdlPv(i3);
    i1 = HEAP32[i5 >> 2] | 0;
   }
   if ((i1 | 0) == (i9 | 0)) break; else i2 = i1;
  }
 } else __ZNSt3__26vectorIN7guetzli13JPEGComponentENS_9allocatorIS2_EEE8__appendEj(i10, 3 - i3 | 0);
 i5 = HEAP32[i10 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 1;
 HEAP32[i5 + 8 >> 2] = 1;
 HEAP32[i5 + 12 >> 2] = 0;
 i2 = HEAP32[i12 >> 2] | 0;
 HEAP32[i5 + 16 >> 2] = i2;
 i1 = HEAP32[i14 >> 2] | 0;
 HEAP32[i5 + 20 >> 2] = i1;
 i4 = Math_imul(i1, i2) | 0;
 HEAP32[i5 + 24 >> 2] = i4;
 i3 = i5 + 28 | 0;
 i4 = i4 << 6;
 i6 = i5 + 32 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i7 = i9 - i8 >> 1;
 if (i4 >>> 0 <= i7 >>> 0) {
  if (i4 >>> 0 < i7 >>> 0 ? (i11 = i8 + (i4 << 1) | 0, (i9 | 0) != (i11 | 0)) : 0) HEAP32[i6 >> 2] = i9 + (~((i9 + -2 - i11 | 0) >>> 1) << 1);
 } else {
  __ZNSt3__26vectorIsNS_9allocatorIsEEE8__appendEj(i3, i4 - i7 | 0);
  i2 = HEAP32[i12 >> 2] | 0;
  i1 = HEAP32[i14 >> 2] | 0;
  i5 = HEAP32[i10 >> 2] | 0;
 }
 HEAP32[i5 + 40 >> 2] = 1;
 HEAP32[i5 + 44 >> 2] = 1;
 HEAP32[i5 + 48 >> 2] = 1;
 HEAP32[i5 + 52 >> 2] = 1;
 HEAP32[i5 + 56 >> 2] = i2;
 HEAP32[i5 + 60 >> 2] = i1;
 i4 = Math_imul(i1, i2) | 0;
 HEAP32[i5 + 64 >> 2] = i4;
 i3 = i5 + 68 | 0;
 i4 = i4 << 6;
 i6 = i5 + 72 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i7 = i9 - i8 >> 1;
 if (i4 >>> 0 <= i7 >>> 0) {
  if (i4 >>> 0 < i7 >>> 0 ? (i13 = i8 + (i4 << 1) | 0, (i9 | 0) != (i13 | 0)) : 0) HEAP32[i6 >> 2] = i9 + (~((i9 + -2 - i13 | 0) >>> 1) << 1);
 } else {
  __ZNSt3__26vectorIsNS_9allocatorIsEEE8__appendEj(i3, i4 - i7 | 0);
  i5 = HEAP32[i10 >> 2] | 0;
  i2 = HEAP32[i12 >> 2] | 0;
  i1 = HEAP32[i14 >> 2] | 0;
 }
 HEAP32[i5 + 80 >> 2] = 2;
 HEAP32[i5 + 84 >> 2] = 1;
 HEAP32[i5 + 88 >> 2] = 1;
 HEAP32[i5 + 92 >> 2] = 2;
 HEAP32[i5 + 96 >> 2] = i2;
 HEAP32[i5 + 100 >> 2] = i1;
 i4 = Math_imul(i1, i2) | 0;
 HEAP32[i5 + 104 >> 2] = i4;
 i3 = i5 + 108 | 0;
 i4 = i4 << 6;
 i5 = i5 + 112 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i2 = i6 - i1 >> 1;
 if (i4 >>> 0 > i2 >>> 0) {
  __ZNSt3__26vectorIsNS_9allocatorIsEEE8__appendEj(i3, i4 - i2 | 0);
  return;
 }
 if (i4 >>> 0 >= i2 >>> 0) return;
 i1 = i1 + (i4 << 1) | 0;
 if ((i6 | 0) == (i1 | 0)) return;
 HEAP32[i5 >> 2] = i6 + (~((i6 + -2 - i1 | 0) >>> 1) << 1);
 return;
}

function __ZN7guetzli20QuantMatrixGenerator7GetNextEPA64_i(i11, i12) {
 i11 = i11 | 0;
 i12 = i12 | 0;
 var i1 = 0, i2 = 0, d3 = 0.0, d4 = 0.0, d5 = 0.0, i6 = 0, i7 = 0, d8 = 0.0, d9 = 0.0, i10 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 1536 | 0;
 i13 = i21 + 768 | 0;
 i14 = i21;
 i15 = i11 + 16 | 0;
 i16 = i11 + 8 | 0;
 i17 = i11 + 24 | 0;
 i18 = i11 + 32 | 0;
 i19 = i11 + 36 | 0;
 i10 = 0;
 L1 : while (1) {
  d8 = +HEAPF64[i15 >> 3];
  do if (d8 == -1.0) {
   d4 = +HEAPF64[i16 >> 3];
   if (!(d4 == -1.0)) {
    d5 = +HEAPF64[i17 >> 3];
    d3 = d4 + d5;
    if (d4 < d5 * 5.0) d4 = d5; else {
     d3 = d3 * 2.0;
     d4 = d5;
    }
   } else {
    d4 = +HEAPF64[i17 >> 3];
    d3 = (HEAP8[i11 >> 0] | 0) == 0 ? d4 : 0.0;
   }
   if (d3 > d4 * 100.0) {
    i1 = 1;
    i2 = 0;
    i20 = 30;
    break L1;
   }
  } else {
   if (d8 == 0.0) {
    i1 = 1;
    i2 = 0;
    i20 = 30;
    break L1;
   }
   d3 = +HEAPF64[i16 >> 3];
   if (d3 == -1.0) {
    d3 = 0.0;
    d4 = +HEAPF64[i17 >> 3];
    break;
   }
   d9 = d3 + d8;
   d5 = d9 * .025;
   d3 = d3 * .95 + d5;
   d4 = +HEAPF64[i17 >> 3];
   i7 = ~~(d3 / d4);
   i2 = i7 << 1;
   i1 = 63;
   d3 = d3 - d4 * +(i7 | 0);
   while (1) {
    i6 = HEAP32[2648 + (i1 << 2) >> 2] | 0;
    i7 = (d3 > 0.0 ? 3 : 1) + i2 | 0;
    HEAP32[i13 + (i6 << 2) >> 2] = i7;
    HEAP32[i13 + 256 + (i6 << 2) >> 2] = i7;
    HEAP32[i13 + 512 + (i6 << 2) >> 2] = i7;
    if ((i1 | 0) > 0) {
     i1 = i1 + -1 | 0;
     d3 = d3 - 1.0 / (+(HEAP32[2968 + (i6 << 2) >> 2] | 0) * .5 + 1.0) * 3.0;
    } else break;
   }
   d3 = d8 * .95 + d5;
   i7 = ~~(d3 / d4);
   i2 = i7 << 1;
   i1 = 63;
   d3 = d3 - d4 * +(i7 | 0);
   while (1) {
    i6 = HEAP32[2648 + (i1 << 2) >> 2] | 0;
    i7 = (d3 > 0.0 ? 3 : 1) + i2 | 0;
    HEAP32[i14 + (i6 << 2) >> 2] = i7;
    HEAP32[i14 + 256 + (i6 << 2) >> 2] = i7;
    HEAP32[i14 + 512 + (i6 << 2) >> 2] = i7;
    if ((i1 | 0) > 0) {
     i1 = i1 + -1 | 0;
     d3 = d3 - 1.0 / (+(HEAP32[2968 + (i6 << 2) >> 2] | 0) * .5 + 1.0) * 3.0;
    } else {
     i1 = 0;
     break;
    }
   }
   while (1) {
    if ((HEAP32[i13 + (i1 << 2) >> 2] | 0) != (HEAP32[i14 + (i1 << 2) >> 2] | 0)) break;
    i1 = i1 + 1 | 0;
    if (i1 >>> 0 >= 192) {
     i20 = 17;
     break;
    }
   }
   if ((i20 | 0) == 17 ? (i20 = 0, (i1 | 0) == 192) : 0) {
    i20 = 19;
    break L1;
   }
   d3 = d9 * .5;
  } while (0);
  i7 = ~~(d3 / d4);
  i6 = i7 << 1;
  i2 = 63;
  d4 = d3 - d4 * +(i7 | 0);
  while (1) {
   i1 = HEAP32[2648 + (i2 << 2) >> 2] | 0;
   i7 = (d4 > 0.0 ? 3 : 1) + i6 | 0;
   HEAP32[i12 + (i1 << 2) >> 2] = i7;
   HEAP32[i12 + 256 + (i1 << 2) >> 2] = i7;
   HEAP32[i12 + 512 + (i1 << 2) >> 2] = i7;
   if ((i2 | 0) > 0) {
    i2 = i2 + -1 | 0;
    d4 = d4 - 1.0 / (+(HEAP32[2968 + (i1 << 2) >> 2] | 0) * .5 + 1.0) * 3.0;
   } else break;
  }
  i1 = HEAP32[i19 >> 2] | 0;
  i2 = HEAP32[i18 >> 2] | 0;
  i7 = i2;
  if ((i1 | 0) == (i2 | 0)) {
   i1 = 1;
   i2 = 1;
   i20 = 30;
   break;
  }
  i6 = (i1 - i2 | 0) / 816 | 0;
  i1 = 0;
  while (1) {
   i2 = 0;
   while (1) {
    if ((HEAP32[i12 + (i2 << 2) >> 2] | 0) != (HEAP32[i7 + (i1 * 816 | 0) + (i2 << 2) >> 2] | 0)) break;
    i2 = i2 + 1 | 0;
    if (i2 >>> 0 >= 192) {
     i20 = 27;
     break;
    }
   }
   if ((i20 | 0) == 27 ? (i20 = 0, (i2 | 0) == 192) : 0) break;
   i1 = i1 + 1 | 0;
   if (i1 >>> 0 >= i6 >>> 0) {
    i1 = 1;
    i2 = 1;
    i20 = 30;
    break L1;
   }
  }
  HEAPF64[(HEAP8[i7 + (i1 * 816 | 0) + 768 >> 0] | 0 ? i16 : i15) >> 3] = d3;
  i10 = i10 + 1 | 0;
  if ((i10 | 0) >= 1e3) {
   i1 = 0;
   i2 = 0;
   i20 = 30;
   break;
  }
 }
 if ((i20 | 0) == 19) {
  i19 = 1;
  i20 = 0;
  i20 = i19 & i20;
  STACKTOP = i21;
  return i20 | 0;
 } else if ((i20 | 0) == 30) {
  i20 = i1 & i2;
  STACKTOP = i21;
  return i20 | 0;
 }
 return 0;
}

function __ZN11butteraugli4FFT8EPNS_7ComplexE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = 0.0, d13 = 0.0, i14 = 0, d15 = 0.0, d16 = 0.0, d17 = 0.0, i18 = 0, d19 = 0.0, i20 = 0, d21 = 0.0, d22 = 0.0, i23 = 0, d24 = 0.0, d25 = 0.0, d26 = 0.0, d27 = 0.0, i28 = 0, i29 = 0, d30 = 0.0, d31 = 0.0, d32 = 0.0, i33 = 0, d34 = 0.0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i2;
 i6 = i1 + 64 | 0;
 i29 = i1 + 72 | 0;
 d16 = +HEAPF64[i29 >> 3];
 i14 = i1 + 8 | 0;
 d32 = +HEAPF64[i14 >> 3];
 d21 = d32 - d16;
 HEAPF64[i14 >> 3] = d16 + d32;
 i3 = i1 + 96 | 0;
 d32 = +HEAPF64[i3 >> 3];
 i10 = i1 + 32 | 0;
 d16 = +HEAPF64[i10 >> 3];
 d24 = d16 - d32;
 d16 = d32 + d16;
 i23 = i1 + 104 | 0;
 d32 = +HEAPF64[i23 >> 3];
 d17 = d21 - d24;
 d24 = d21 + d24;
 i20 = i1 + 40 | 0;
 d21 = +HEAPF64[i20 >> 3];
 d34 = d21 - d32;
 d21 = d32 + d21;
 d32 = +HEAPF64[i6 >> 3];
 d19 = +HEAPF64[i1 >> 3];
 d25 = d19 - d32;
 d19 = d32 + d19;
 d32 = d25 - d34;
 d25 = d34 + d25;
 i8 = i1 + 80 | 0;
 d34 = +HEAPF64[i8 >> 3];
 i5 = i1 + 16 | 0;
 d13 = +HEAPF64[i5 >> 3];
 d26 = d13 - d34;
 d13 = d34 + d13;
 i7 = i1 + 112 | 0;
 i28 = i1 + 120 | 0;
 d34 = +HEAPF64[i28 >> 3];
 i9 = i1 + 48 | 0;
 i18 = i1 + 56 | 0;
 d15 = +HEAPF64[i18 >> 3];
 d27 = d15 - d34;
 d15 = d34 + d15;
 d34 = d26 - d27;
 d27 = d26 + d27;
 i33 = i1 + 88 | 0;
 d26 = +HEAPF64[i33 >> 3];
 i11 = i1 + 24 | 0;
 d12 = +HEAPF64[i11 >> 3];
 d31 = d12 - d26;
 d12 = d26 + d12;
 d26 = +HEAPF64[i7 >> 3];
 d22 = +HEAPF64[i9 >> 3];
 d30 = d22 - d26;
 d22 = d26 + d22;
 d26 = d31 - d30;
 d30 = d31 + d30;
 d31 = (d34 - d30) * .7071067811865476;
 HEAPF64[i8 >> 3] = d32 - d31;
 d30 = (d34 + d30) * .7071067811865476;
 HEAPF64[i33 >> 3] = d24 - d30;
 HEAPF64[i6 >> 3] = d32 + d31;
 HEAPF64[i29 >> 3] = d30 + d24;
 d24 = (d26 - d27) * .7071067811865476;
 HEAPF64[i28 >> 3] = d17 - d24;
 d26 = (d27 + d26) * .7071067811865476;
 HEAPF64[i7 >> 3] = d25 - d26;
 HEAPF64[i3 >> 3] = d26 + d25;
 HEAPF64[i23 >> 3] = d24 + d17;
 d17 = d19 - d16;
 d19 = d16 + d19;
 d16 = d13 - d22;
 d13 = d22 + d13;
 HEAPF64[i1 >> 3] = d19 + d13;
 HEAPF64[i1 + 16 >> 3] = d19 - d13;
 d13 = +HEAPF64[i14 >> 3];
 d19 = d13 - d21;
 d13 = d21 + d13;
 HEAPF64[i20 >> 3] = d16 + d19;
 HEAPF64[i18 >> 3] = d19 - d16;
 d16 = d12 - d15;
 HEAPF64[i1 + 48 >> 3] = d17 + d16;
 HEAPF64[i1 + 32 >> 3] = d17 - d16;
 d12 = d15 + d12;
 HEAPF64[i14 >> 3] = d13 + d12;
 HEAPF64[i11 >> 3] = d13 - d12;
 HEAP32[i4 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 STACKTOP = i2;
 return;
}

function __ZN11butteraugli16CalculateDiffmapEjjiPNSt3__26vectorIfNS0_9allocatorIfEEEE(i18, i16, i15, i21) {
 i18 = i18 | 0;
 i16 = i16 | 0;
 i15 = i15 | 0;
 i21 = i21 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, f8 = f0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i17 = 0, i19 = 0, i20 = 0, i22 = 0, i23 = 0, i24 = 0, d25 = 0.0;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i23 = i24 + 12 | 0;
 i22 = i24;
 i17 = 8 - i15 | 0;
 i20 = (i17 | 0) / 2 | 0;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i23, Math_imul(i16, i18) | 0);
 i7 = ((i18 + -1 + i15 | 0) >>> 0) / (i15 >>> 0) | 0;
 if (i17 >>> 0 < i16 >>> 0) {
  i9 = i17 >>> 0 < i18 >>> 0;
  i10 = (i15 | 0) == 0;
  i11 = HEAP32[i23 >> 2] | 0;
  i5 = 0;
  while (1) {
   if (i9) {
    i12 = Math_imul(i5, i7) | 0;
    i13 = HEAP32[i21 >> 2] | 0;
    i14 = i5 + i20 | 0;
    i6 = 0;
    while (1) {
     f8 = Math_fround(HEAPF32[i13 + ((((i6 + i12 | 0) >>> 0) / (i15 >>> 0) | 0) << 2) >> 2]);
     if (+f8 < .0001) f8 = Math_fround(f8 * Math_fround(100.0)); else f8 = Math_fround(Math_sqrt(Math_fround(f8)));
     if (!i10) {
      i3 = i6 + i20 | 0;
      i2 = 0;
      do {
       i4 = i3 + (Math_imul(i14 + i2 | 0, i18) | 0) | 0;
       i1 = 0;
       do {
        HEAPF32[i11 + (i4 + i1 << 2) >> 2] = f8;
        i1 = i1 + 1 | 0;
       } while ((i1 | 0) != (i15 | 0));
       i2 = i2 + 1 | 0;
      } while ((i2 | 0) != (i15 | 0));
     }
     if ((i6 + 8 | 0) >>> 0 < i18 >>> 0) i6 = i6 + i15 | 0; else break;
    }
   }
   if ((i5 + 8 | 0) >>> 0 < i16 >>> 0) i5 = i5 + i15 | 0; else break;
  }
 }
 if ((i23 | 0) != (i21 | 0)) __ZNSt3__26vectorIfNS_9allocatorIfEEE6assignIPfEENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIfNS_15iterator_traitsIS7_E9referenceEEE5valueEvE4typeES7_S7_(i21, HEAP32[i23 >> 2] | 0, HEAP32[i23 + 4 >> 2] | 0);
 i10 = i18 - i17 | 0;
 i9 = i16 - i17 | 0;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i22, Math_imul(i10, i9) | 0);
 i7 = (i9 | 0) == 0;
 if (!i7) {
  i1 = HEAP32[i22 >> 2] | 0;
  if (!i10) i6 = i22; else {
   i4 = HEAP32[i21 >> 2] | 0;
   i3 = 0;
   do {
    i5 = (Math_imul(i3 + i20 | 0, i18) | 0) + i20 | 0;
    i6 = Math_imul(i3, i10) | 0;
    i2 = 0;
    do {
     HEAP32[i1 + (i2 + i6 << 2) >> 2] = HEAP32[i4 + (i5 + i2 << 2) >> 2];
     i2 = i2 + 1 | 0;
    } while ((i2 | 0) != (i10 | 0));
    i3 = i3 + 1 | 0;
   } while ((i3 | 0) != (i9 | 0));
   i6 = i22;
  }
 } else {
  i6 = i22;
  i1 = HEAP32[i22 >> 2] | 0;
 }
 __ZN11butteraugli4BlurEjjPfdd(i10, i9, i1, 8.8510880283, .03027655136);
 if (!i7 ? (i19 = HEAP32[i6 >> 2] | 0, i10 | 0) : 0) {
  i3 = HEAP32[i21 >> 2] | 0;
  i1 = 0;
  do {
   i4 = Math_imul(i1, i10) | 0;
   i5 = (Math_imul(i1 + i20 | 0, i18) | 0) + i20 | 0;
   i2 = 0;
   do {
    d25 = +Math_fround(HEAPF32[i19 + (i2 + i4 << 2) >> 2]) * 24.8235314874;
    i17 = i3 + (i5 + i2 << 2) | 0;
    HEAPF32[i17 >> 2] = Math_fround(d25 + +Math_fround(HEAPF32[i17 >> 2]));
    i2 = i2 + 1 | 0;
   } while ((i2 | 0) != (i10 | 0));
   i1 = i1 + 1 | 0;
  } while ((i1 | 0) != (i9 | 0));
 }
 i2 = HEAP32[i21 + 4 >> 2] | 0;
 i1 = HEAP32[i21 >> 2] | 0;
 i3 = i1;
 if ((i2 | 0) != (i1 | 0)) {
  i2 = i2 - i1 >> 2;
  i1 = 0;
  do {
   i21 = i3 + (i1 << 2) | 0;
   HEAPF32[i21 >> 2] = Math_fround(+Math_fround(HEAPF32[i21 >> 2]) * .03872437046373487);
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 < i2 >>> 0);
 }
 i3 = HEAP32[i6 >> 2] | 0;
 if (i3 | 0) {
  i2 = i22 + 4 | 0;
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) != (i3 | 0)) HEAP32[i2 >> 2] = i1 + (~((i1 + -4 - i3 | 0) >>> 2) << 2);
  __ZdlPv(i3);
 }
 i3 = HEAP32[i23 >> 2] | 0;
 if (!i3) {
  STACKTOP = i24;
  return;
 }
 i1 = i23 + 4 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
 __ZdlPv(i3);
 STACKTOP = i24;
 return;
}

function __ZN7guetzli17ClusterHistogramsEPNS_13JpegHistogramEPjPiPh(i12, i13, i14, i15) {
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 1312 | 0;
 i18 = i19 + 1032 | 0;
 i16 = i19;
 i17 = i19 + 1048 | 0;
 _memset(i15 | 0, 0, (HEAP32[i13 >> 2] | 0) * 257 | 0) | 0;
 if (!(HEAP32[i13 >> 2] | 0)) {
  i18 = 0;
  STACKTOP = i19;
  return i18 | 0;
 } else i7 = 0;
 do {
  HEAP32[i14 + (i7 << 2) >> 2] = i7;
  i5 = __Znwj(4120) | 0;
  i6 = i15 + (i7 * 257 | 0) | 0;
  __ZN7guetzli17CreateHuffmanTreeEPKjjiPNS_11HuffmanTreeEPh(i12 + (i7 * 1028 | 0) | 0, 257, 16, i5, i6);
  i1 = 0;
  i4 = 136;
  i2 = 1;
  while (1) {
   i4 = (HEAP32[i12 + (i7 * 1028 | 0) + (i1 << 2) >> 2] | 0) == 0 ? i4 : i4 + 8 | 0;
   i1 = i2 + 1 | 0;
   if ((i1 | 0) == 257) {
    i2 = 0;
    i1 = 0;
    i3 = 1;
    break;
   } else {
    i11 = i2;
    i2 = i1;
    i1 = i11;
   }
  }
  while (1) {
   i2 = (Math_imul((HEAPU8[i6 + i1 >> 0] | 0) + (i1 & 15) | 0, (HEAP32[i12 + (i7 * 1028 | 0) + (i1 << 2) >> 2] | 0) >>> 1) | 0) + i2 | 0;
   i1 = i3 + 1 | 0;
   if ((i1 | 0) == 257) break; else {
    i11 = i3;
    i3 = i1;
    i1 = i11;
   }
  }
  HEAP32[i18 + (i7 << 2) >> 2] = i2 + i4 + (((i2 * 3 | 0) + 512 | 0) >>> 10);
  __ZdlPv(i5);
  i7 = i7 + 1 | 0;
  i11 = HEAP32[i13 >> 2] | 0;
 } while (i7 >>> 0 < i11 >>> 0);
 L11 : do if (i11 >>> 0 > 1) {
  i10 = i16 + 1024 | 0;
  i3 = i11;
  while (1) {
   i9 = i3 + -1 | 0;
   i8 = i3 + -2 | 0;
   i7 = i12 + (i9 * 1028 | 0) | 0;
   _memcpy(i16 | 0, i7 | 0, 1028) | 0;
   i1 = 0;
   i2 = 1;
   while (1) {
    i6 = i16 + (i1 << 2) | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + (HEAP32[i12 + (i8 * 1028 | 0) + (i1 << 2) >> 2] | 0);
    i1 = i2 + 1 | 0;
    if ((i1 | 0) == 257) break; else {
     i6 = i2;
     i2 = i1;
     i1 = i6;
    }
   }
   i5 = i12 + (i8 * 1028 | 0) | 0;
   HEAP32[i10 >> 2] = 1;
   i6 = __Znwj(4120) | 0;
   _memset(i17 | 0, 0, 257) | 0;
   __ZN7guetzli17CreateHuffmanTreeEPKjjiPNS_11HuffmanTreeEPh(i16, 257, 16, i6, i17);
   i1 = 0;
   i4 = 136;
   i2 = 1;
   while (1) {
    i4 = (HEAP32[i16 + (i1 << 2) >> 2] | 0) == 0 ? i4 : i4 + 8 | 0;
    i1 = i2 + 1 | 0;
    if ((i1 | 0) == 257) {
     i2 = 0;
     i1 = 0;
     i3 = 1;
     break;
    } else {
     i3 = i2;
     i2 = i1;
     i1 = i3;
    }
   }
   while (1) {
    i2 = (Math_imul((HEAPU8[i17 + i1 >> 0] | 0) + (i1 & 15) | 0, (HEAP32[i16 + (i1 << 2) >> 2] | 0) >>> 1) | 0) + i2 | 0;
    i1 = i3 + 1 | 0;
    if ((i1 | 0) == 257) break; else {
     i20 = i3;
     i3 = i1;
     i1 = i20;
    }
   }
   i1 = i2 + i4 + (((i2 * 3 | 0) + 512 | 0) >>> 10) | 0;
   i2 = i18 + (i8 << 2) | 0;
   if (i1 >>> 0 >= ((HEAP32[i2 >> 2] | 0) + (HEAP32[i18 + (i9 << 2) >> 2] | 0) | 0) >>> 0) break;
   _memcpy(i5 | 0, i16 | 0, 1028) | 0;
   _memset(i7 | 0, 0, 1024) | 0;
   HEAP32[i12 + (i9 * 1028 | 0) + 1024 >> 2] = 1;
   HEAP32[i2 >> 2] = i1;
   _memcpy(i15 + (i8 * 257 | 0) | 0, i17 | 0, 257) | 0;
   i1 = 0;
   do {
    i2 = i14 + (i1 << 2) | 0;
    if ((HEAP32[i2 >> 2] | 0) == (i9 | 0)) HEAP32[i2 >> 2] = i8;
    i1 = i1 + 1 | 0;
   } while ((i1 | 0) != (i11 | 0));
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + -1;
   __ZdlPv(i6);
   i3 = HEAP32[i13 >> 2] | 0;
   if (i3 >>> 0 <= 1) break L11;
  }
  __ZdlPv(i6);
  i3 = HEAP32[i13 >> 2] | 0;
 } else i3 = i11; while (0);
 if (!i3) {
  i20 = 0;
  STACKTOP = i19;
  return i20 | 0;
 } else {
  i1 = 0;
  i2 = 0;
 }
 do {
  i2 = (HEAP32[i18 + (i1 << 2) >> 2] | 0) + i2 | 0;
  i1 = i1 + 1 | 0;
 } while (i1 >>> 0 < i3 >>> 0);
 i20 = (i2 + 7 | 0) >>> 3;
 STACKTOP = i19;
 return i20 | 0;
}

function _GuetzliFromPNG(i6, i7, i8, i1) {
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = 0.0, i18 = 0, i19 = 0, i20 = 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i14 = i16 + 64 | 0;
 i10 = i16 + 48 | 0;
 i15 = i16 + 16 | 0;
 i13 = i16;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i14 + 4 >> 2] = 0;
 HEAP32[i14 + 8 >> 2] = 0;
 HEAP8[i10 + 4 >> 0] = 1;
 HEAP8[i10 + 5 >> 0] = 0;
 HEAP8[i10 + 6 >> 0] = 0;
 HEAP8[i10 + 7 >> 0] = 0;
 HEAP32[i10 + 8 >> 2] = 3;
 HEAP8[i10 + 12 >> 0] = 1;
 d17 = +(i1 >>> 0);
 d17 = d17 < 70.0 ? 70.0 : d17;
 d17 = d17 > 110.0 ? 110.0 : d17;
 i11 = ~~d17;
 d17 = d17 - +(i11 | 0);
 HEAPF32[i10 >> 2] = Math_fround((1.0 - d17) * +HEAPF64[1024 + (i11 + -70 << 3) >> 3] + d17 * +HEAPF64[1024 + (i11 + -69 << 3) >> 3]);
 HEAP32[i15 + 4 >> 2] = 0;
 HEAP32[i15 + 8 >> 2] = 0;
 i11 = i15 + 4 | 0;
 HEAP32[i15 >> 2] = i11;
 i12 = i15 + 12 | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i12 + 4 >> 2] = 0;
 HEAP32[i12 + 8 >> 2] = 0;
 HEAP32[i12 + 12 >> 2] = 0;
 HEAP32[i12 + 16 >> 2] = 0;
 HEAP32[i15 + 16 >> 2] = HEAP32[2125];
 HEAP32[i13 >> 2] = 0;
 i12 = i13 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i13 + 8 >> 2] = 0;
 i5 = i7 * 3 | 0;
 i1 = Math_imul(i5, i8) | 0;
 if (i1 | 0) __ZNSt3__26vectorIhNS_9allocatorIhEEE8__appendEj(i13, i1);
 if (i8 | 0 ? (i9 = i7 << 2, i7 | 0) : 0) {
  i1 = 0;
  do {
   i3 = i6 + (Math_imul(i9, i1) | 0) | 0;
   i4 = Math_imul(i5, i1) | 0;
   i4 = (HEAP32[i13 >> 2] | 0) + i4 | 0;
   i2 = 0;
   do {
    i20 = i2 << 2;
    i19 = HEAPU8[i3 + (i20 | 3) >> 0] | 0;
    i18 = i2 * 3 | 0;
    HEAP8[i4 + i18 >> 0] = (((Math_imul(HEAPU8[i3 + i20 >> 0] | 0, i19) | 0) + 128 | 0) >>> 0) / 255 | 0;
    HEAP8[i4 + (i18 + 1) >> 0] = (((Math_imul(HEAPU8[i3 + (i20 | 1) >> 0] | 0, i19) | 0) + 128 | 0) >>> 0) / 255 | 0;
    HEAP8[i4 + (i18 + 2) >> 0] = (((Math_imul(HEAPU8[i3 + (i20 | 2) >> 0] | 0, i19) | 0) + 128 | 0) >>> 0) / 255 | 0;
    i2 = i2 + 1 | 0;
   } while ((i2 | 0) != (i7 | 0));
   i1 = i1 + 1 | 0;
  } while ((i1 | 0) != (i8 | 0));
 }
 do if (__ZN7guetzli7ProcessERKNS_6ParamsEPNS_12ProcessStatsERKNSt3__26vectorIhNS5_9allocatorIhEEEEiiPNS5_12basic_stringIcNS5_11char_traitsIcEENS7_IcEEEE(i10, i15, i13, i7, i8, i14) | 0) {
  i1 = _fopen(10701, 10709) | 0;
  if (!i1) {
   _fwrite(10712, 35, 1, HEAP32[2032] | 0) | 0;
   i2 = 1;
   break;
  } else {
   __Z14WriteFileOrDieP8_IO_FILERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE(i1, i14);
   i2 = 0;
   break;
  }
 } else {
  _fwrite(10674, 26, 1, HEAP32[2032] | 0) | 0;
  i2 = 1;
 } while (0);
 i1 = HEAP32[i13 >> 2] | 0;
 if (!i1) {
  i20 = i15 + 20 | 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i20);
  i20 = HEAP32[i11 >> 2] | 0;
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(i15, i20);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i14);
  STACKTOP = i16;
  return i2 | 0;
 }
 if ((HEAP32[i12 >> 2] | 0) != (i1 | 0)) HEAP32[i12 >> 2] = i1;
 __ZdlPv(i1);
 i20 = i15 + 20 | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i20);
 i20 = HEAP32[i11 >> 2] | 0;
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(i15, i20);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i14);
 STACKTOP = i16;
 return i2 | 0;
}

function __ZN11butteraugli31XybDiffLowFreqSquaredAccumulateEdddddddPd(d2, d3, d1, d7, d8, d5, d11, i12) {
 d2 = +d2;
 d3 = +d3;
 d1 = +d1;
 d7 = +d7;
 d8 = +d8;
 d5 = +d5;
 d11 = +d11;
 i12 = i12 | 0;
 var i4 = 0, d6 = 0.0, d9 = 0.0, d10 = 0.0;
 d10 = (d3 * .0812519812628 + d1) * 7.34905756986;
 d9 = d2 * 6.64482198135;
 if ((HEAP8[18704] | 0) == 0 ? ___cxa_guard_acquire(18704) | 0 : 0) {
  HEAPF64[2317] = 0.0;
  HEAPF64[2318] = 5.2511644570349185;
  HEAPF64[2319] = 10.502328914069837;
  HEAPF64[2320] = 15.753493371104756;
  HEAPF64[2321] = 21.004657828139674;
  HEAPF64[2322] = 26.25582228517459;
  HEAPF64[2323] = 31.50698674220951;
  HEAPF64[2324] = 36.75815119924443;
  HEAPF64[2325] = 42.00931565627935;
  HEAPF64[2326] = 47.260480113314266;
  HEAPF64[2327] = 52.51164457034918;
  HEAPF64[2328] = 57.7628090273841;
  HEAPF64[2329] = 63.01397348441902;
  HEAPF64[2330] = 68.26513794145394;
  HEAPF64[2331] = 73.51630239848886;
  HEAPF64[2332] = 78.76746685552378;
  HEAPF64[2333] = 84.0186313125587;
  HEAPF64[2334] = 89.26979576959361;
  HEAPF64[2335] = 94.52096022662853;
  HEAPF64[2336] = 99.77212468366345;
  HEAPF64[2337] = 105.02328914069837;
 }
 d2 = d3 * .837846224276;
 d1 = +Math_abs(+d2);
 if (!(d1 < 1.0e4)) ___assert_fail(14720, 10333, 303, 14731);
 i4 = ~~d1;
 if ((i4 | 0) < 20) {
  d6 = +HEAPF64[18536 + (i4 << 3) >> 3];
  d1 = d6 + (d1 - +(i4 | 0)) * (+HEAPF64[18536 + (i4 + 1 << 3) >> 3] - d6);
 } else d1 = +HEAPF64[2337];
 d6 = d2 < 0.0 ? -d1 : d1;
 if (d7 == 0.0 & d8 == 0.0 & d5 == 0.0) {
  d8 = d10;
  d10 = d6;
  d7 = d9 * d11;
  d7 = d9 * d7;
  d9 = +HEAPF64[i12 >> 3];
  d9 = d7 + d9;
  HEAPF64[i12 >> 3] = d9;
  d9 = d10 * d11;
  d9 = d10 * d9;
  i4 = i12 + 8 | 0;
  d10 = +HEAPF64[i4 >> 3];
  d10 = d9 + d10;
  HEAPF64[i4 >> 3] = d10;
  d10 = d8 * d11;
  d10 = d8 * d10;
  i12 = i12 + 16 | 0;
  d11 = +HEAPF64[i12 >> 3];
  d11 = d10 + d11;
  HEAPF64[i12 >> 3] = d11;
  return;
 }
 d5 = (d8 * .0812519812628 + d5) * 7.34905756986;
 d3 = d7 * 6.64482198135;
 if ((HEAP8[18704] | 0) == 0 ? ___cxa_guard_acquire(18704) | 0 : 0) {
  HEAPF64[2317] = 0.0;
  HEAPF64[2318] = 5.2511644570349185;
  HEAPF64[2319] = 10.502328914069837;
  HEAPF64[2320] = 15.753493371104756;
  HEAPF64[2321] = 21.004657828139674;
  HEAPF64[2322] = 26.25582228517459;
  HEAPF64[2323] = 31.50698674220951;
  HEAPF64[2324] = 36.75815119924443;
  HEAPF64[2325] = 42.00931565627935;
  HEAPF64[2326] = 47.260480113314266;
  HEAPF64[2327] = 52.51164457034918;
  HEAPF64[2328] = 57.7628090273841;
  HEAPF64[2329] = 63.01397348441902;
  HEAPF64[2330] = 68.26513794145394;
  HEAPF64[2331] = 73.51630239848886;
  HEAPF64[2332] = 78.76746685552378;
  HEAPF64[2333] = 84.0186313125587;
  HEAPF64[2334] = 89.26979576959361;
  HEAPF64[2335] = 94.52096022662853;
  HEAPF64[2336] = 99.77212468366345;
  HEAPF64[2337] = 105.02328914069837;
 }
 d2 = d8 * .837846224276;
 d1 = +Math_abs(+d2);
 if (!(d1 < 1.0e4)) ___assert_fail(14720, 10333, 303, 14731);
 i4 = ~~d1;
 if ((i4 | 0) < 20) {
  d8 = +HEAPF64[18536 + (i4 << 3) >> 3];
  d1 = d8 + (d1 - +(i4 | 0)) * (+HEAPF64[18536 + (i4 + 1 << 3) >> 3] - d8);
 } else d1 = +HEAPF64[2337];
 d8 = d10 - d5;
 d10 = d6 - (d2 < 0.0 ? -d1 : d1);
 d9 = d9 - d3;
 d7 = d9 * d11;
 d7 = d9 * d7;
 d9 = +HEAPF64[i12 >> 3];
 d9 = d7 + d9;
 HEAPF64[i12 >> 3] = d9;
 d9 = d10 * d11;
 d9 = d10 * d9;
 i4 = i12 + 8 | 0;
 d10 = +HEAPF64[i4 >> 3];
 d10 = d9 + d10;
 HEAPF64[i4 >> 3] = d10;
 d10 = d8 * d11;
 d10 = d8 * d10;
 i12 = i12 + 16 | 0;
 d11 = +HEAPF64[i12 >> 3];
 d11 = d10 + d11;
 HEAPF64[i12 >> 3] = d11;
 return;
}

function __ZN7guetzli15DecodeJpegToRGBERKNS_8JPEGDataE(i7, i8) {
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i13 = i14;
 i11 = HEAP32[i8 + 80 >> 2] | 0;
 i10 = (HEAP32[i8 + 84 >> 2] | 0) - i11 | 0;
 L1 : do switch ((i10 | 0) / 40 | 0 | 0) {
 case 1:
  break;
 case 3:
  {
   i1 = HEAP32[i8 + 32 >> 2] | 0;
   i9 = HEAP32[i8 + 36 >> 2] | 0;
   L3 : do if ((i1 | 0) != (i9 | 0)) {
    i3 = 0;
    i2 = 0;
    do {
     i5 = HEAP8[i1 + 11 >> 0] | 0;
     i6 = i5 << 24 >> 24 < 0;
     if (i6) i4 = HEAP32[i1 >> 2] | 0; else i4 = i1;
     if ((HEAP8[i4 >> 0] | 0) == -32) {
      i12 = 24;
      break L3;
     }
     if (i6) i4 = HEAP32[i1 >> 2] | 0; else i4 = i1;
     if ((HEAP8[i4 >> 0] | 0) == -18) {
      if (i6) i4 = HEAP32[i1 + 4 >> 2] | 0; else i4 = i5 & 255;
      if (i4 >>> 0 > 14) {
       if (i6) i2 = HEAP32[i1 >> 2] | 0; else i2 = i1;
       i3 = 1;
       i2 = HEAP8[i2 + 14 >> 0] | 0;
      }
     }
     i1 = i1 + 12 | 0;
    } while ((i1 | 0) != (i9 | 0));
    if (i3) {
     if (!(i2 << 24 >> 24 != 0 & (i10 | 0) == 120)) {
      i12 = 55;
      break L1;
     }
    } else i12 = 22;
   } else i12 = 22; while (0);
   if ((i12 | 0) == 22) if (!((HEAP32[i11 >> 2] | 0) != 82 ? 1 : (HEAP32[i11 + 40 >> 2] | 0) != 71)) {
    if (!((i10 | 0) == 120 ? (HEAP32[i11 + 80 >> 2] | 0) != 66 : 0)) {
     i12 = 55;
     break L1;
    }
   } else i12 = 24;
   if ((i12 | 0) == 24 ? (i10 | 0) != 120 : 0) {
    i12 = 55;
    break L1;
   }
   if ((((((((HEAP32[i8 + 12 >> 2] | 0) == 2 ? (HEAP32[i8 + 16 >> 2] | 0) == 2 : 0) ? (HEAP32[i11 + 4 >> 2] | 0) == 2 : 0) ? (HEAP32[i11 + 8 >> 2] | 0) == 2 : 0) ? (HEAP32[i11 + 44 >> 2] | 0) == 1 : 0) ? (HEAP32[i11 + 48 >> 2] | 0) == 1 : 0) ? (HEAP32[i11 + 84 >> 2] | 0) == 1 : 0) ? (HEAP32[i11 + 88 >> 2] | 0) == 1 : 0) break L1;
   if (!((((((((HEAP32[i8 + 12 >> 2] | 0) == 1 ? (HEAP32[i8 + 16 >> 2] | 0) == 1 : 0) ? (HEAP32[i11 + 4 >> 2] | 0) == 1 : 0) ? (HEAP32[i11 + 8 >> 2] | 0) == 1 : 0) ? (HEAP32[i11 + 44 >> 2] | 0) == 1 : 0) ? (HEAP32[i11 + 48 >> 2] | 0) == 1 : 0) ? (HEAP32[i11 + 84 >> 2] | 0) == 1 : 0) ? (HEAP32[i11 + 88 >> 2] | 0) == 1 : 0)) i12 = 55;
   break;
  }
 default:
  i12 = 55;
 } while (0);
 if ((i12 | 0) == 55) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i7 + 4 >> 2] = 0;
  HEAP32[i7 + 8 >> 2] = 0;
  STACKTOP = i14;
  return;
 }
 __ZN7guetzli11OutputImageC2Eii(i13, HEAP32[i8 >> 2] | 0, HEAP32[i8 + 4 >> 2] | 0);
 __ZN7guetzli11OutputImage16CopyFromJpegDataERKNS_8JPEGDataE(i13, i8);
 __ZNK7guetzli11OutputImage6ToSRGBEiiii(i7, i13, 0, 0, HEAP32[i13 >> 2] | 0, HEAP32[i13 + 4 >> 2] | 0);
 i7 = i13 + 8 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if (i1 | 0) {
  i6 = i13 + 12 | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    HEAP32[i6 >> 2] = i2 + -308;
    i3 = HEAP32[i2 + -268 >> 2] | 0;
    if (i3 | 0) {
     i4 = i2 + -264 | 0;
     i5 = HEAP32[i4 >> 2] | 0;
     if ((i5 | 0) != (i3 | 0)) HEAP32[i4 >> 2] = i5 + (~((i5 + -2 - i3 | 0) >>> 1) << 1);
     __ZdlPv(i3);
    }
    i4 = HEAP32[i2 + -280 >> 2] | 0;
    if (i4 | 0) {
     i2 = i2 + -276 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -2 - i4 | 0) >>> 1) << 1);
     __ZdlPv(i4);
    }
    i2 = HEAP32[i6 >> 2] | 0;
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i7 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 STACKTOP = i14;
 return;
}

function __ZNSt3__26vectorIN7guetzli14JPEGQuantTableENS_9allocatorIS2_EEE8__appendEj(i9, i2) {
 i9 = i9 | 0;
 i2 = i2 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i10 = 0, i11 = 0, i12 = 0;
 i10 = i9 + 8 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 i11 = i9 + 4 | 0;
 i1 = HEAP32[i11 >> 2] | 0;
 if (((i4 - i1 | 0) / 24 | 0) >>> 0 >= i2 >>> 0) {
  do {
   HEAP32[i1 >> 2] = 0;
   i10 = i1 + 4 | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i1 + 8 >> 2] = 0;
   i8 = __Znwj(256) | 0;
   HEAP32[i1 >> 2] = i8;
   i9 = i8 + 256 | 0;
   HEAP32[i1 + 8 >> 2] = i9;
   _memset(i8 | 0, 0, 256) | 0;
   HEAP32[i10 >> 2] = i9;
   HEAP32[i1 + 12 >> 2] = 0;
   HEAP32[i1 + 16 >> 2] = 0;
   HEAP8[i1 + 20 >> 0] = 1;
   i1 = (HEAP32[i11 >> 2] | 0) + 24 | 0;
   HEAP32[i11 >> 2] = i1;
   i2 = i2 + -1 | 0;
  } while ((i2 | 0) != 0);
  return;
 }
 i3 = HEAP32[i9 >> 2] | 0;
 i5 = ((i1 - i3 | 0) / 24 | 0) + i2 | 0;
 if (i5 >>> 0 > 178956970) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i9);
  i3 = HEAP32[i9 >> 2] | 0;
  i4 = HEAP32[i10 >> 2] | 0;
  i1 = HEAP32[i11 >> 2] | 0;
 }
 i8 = (i4 - i3 | 0) / 24 | 0;
 i4 = i8 << 1;
 i4 = i8 >>> 0 < 89478485 ? (i4 >>> 0 < i5 >>> 0 ? i5 : i4) : 178956970;
 i1 = (i1 - i3 | 0) / 24 | 0;
 do if (i4) if (i4 >>> 0 > 178956970) {
  i11 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i11);
  ___cxa_throw(i11 | 0, 1784, 8);
 } else {
  i3 = __Znwj(i4 * 24 | 0) | 0;
  break;
 } else i3 = 0; while (0);
 i6 = i3 + (i1 * 24 | 0) | 0;
 i5 = i6;
 i8 = i3 + (i4 * 24 | 0) | 0;
 i7 = i5;
 i1 = i6;
 do {
  HEAP32[i1 >> 2] = 0;
  i4 = i1 + 4 | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  i12 = __Znwj(256) | 0;
  HEAP32[i1 >> 2] = i12;
  i3 = i12 + 256 | 0;
  HEAP32[i1 + 8 >> 2] = i3;
  _memset(i12 | 0, 0, 256) | 0;
  HEAP32[i4 >> 2] = i3;
  HEAP32[i1 + 12 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = 0;
  HEAP8[i1 + 20 >> 0] = 1;
  i1 = i7 + 24 | 0;
  i7 = i1;
  i2 = i2 + -1 | 0;
 } while ((i2 | 0) != 0);
 i4 = HEAP32[i9 >> 2] | 0;
 i1 = HEAP32[i11 >> 2] | 0;
 if ((i1 | 0) == (i4 | 0)) {
  i1 = i5;
  i6 = i4;
  i3 = i4;
 } else {
  i3 = i5;
  i2 = i6;
  do {
   i12 = i2 + -24 | 0;
   i6 = i1;
   i1 = i1 + -24 | 0;
   HEAP32[i12 >> 2] = 0;
   i5 = i2 + -20 | 0;
   HEAP32[i5 >> 2] = 0;
   HEAP32[i2 + -16 >> 2] = 0;
   HEAP32[i12 >> 2] = HEAP32[i1 >> 2];
   i12 = i6 + -20 | 0;
   HEAP32[i5 >> 2] = HEAP32[i12 >> 2];
   i5 = i6 + -16 | 0;
   HEAP32[i2 + -16 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i5 >> 2] = 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i1 >> 2] = 0;
   i12 = i2 + -12 | 0;
   i6 = i6 + -12 | 0;
   HEAP32[i12 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i12 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   HEAP8[i12 + 8 >> 0] = HEAP8[i6 + 8 >> 0] | 0;
   i2 = i3 + -24 | 0;
   i3 = i2;
  } while ((i1 | 0) != (i4 | 0));
  i1 = i3;
  i6 = HEAP32[i9 >> 2] | 0;
  i3 = HEAP32[i11 >> 2] | 0;
 }
 HEAP32[i9 >> 2] = i1;
 HEAP32[i11 >> 2] = i7;
 HEAP32[i10 >> 2] = i8;
 i5 = i6;
 if ((i3 | 0) != (i5 | 0)) do {
  i1 = i3;
  i3 = i3 + -24 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if (i4 | 0) {
   i1 = i1 + -20 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 | 0) != (i4 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i4 | 0) >>> 2) << 2);
   __ZdlPv(i4);
  }
 } while ((i3 | 0) != (i5 | 0));
 if (!i6) return;
 __ZdlPv(i6);
 return;
}

function __ZNSt3__216__copy_unalignedINS_6vectorIbNS_9allocatorIbEEEELb1EEENS_14__bit_iteratorIT_Lb0EXLi0EEEENS5_IS6_XT0_EXLi0EEEES8_S7_(i14, i13, i1, i15) {
 i14 = i14 | 0;
 i13 = i13 | 0;
 i1 = i1 | 0;
 i15 = i15 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i16 = 0, i17 = 0;
 i12 = HEAP32[i13 >> 2] | 0;
 i9 = HEAP32[i13 + 4 >> 2] | 0;
 i5 = ((HEAP32[i1 >> 2] | 0) - i12 << 3) + (HEAP32[i1 + 4 >> 2] | 0) - i9 | 0;
 i1 = i12;
 if ((i5 | 0) <= 0) {
  i13 = i15 + 4 | 0;
  i15 = HEAP32[i15 >> 2] | 0;
  HEAP32[i14 >> 2] = i15;
  i15 = i14 + 4 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  HEAP32[i15 >> 2] = i14;
  return;
 }
 if (!i9) {
  i2 = i15 + 4 | 0;
  i10 = i2;
  i2 = HEAP32[i2 >> 2] | 0;
 } else {
  i4 = 32 - i9 | 0;
  i8 = (i5 | 0) < (i4 | 0) ? i5 : i4;
  i4 = -1 >>> (i4 - i8 | 0) & -1 << i9 & HEAP32[i1 >> 2];
  i10 = i15 + 4 | 0;
  i2 = HEAP32[i10 >> 2] | 0;
  i7 = 32 - i2 | 0;
  i3 = i7 >>> 0 < i8 >>> 0 ? i7 : i8;
  i6 = HEAP32[i15 >> 2] | 0;
  i2 = HEAP32[i6 >> 2] & ~(-1 >>> (i7 - i3 | 0) & -1 << i2);
  HEAP32[i6 >> 2] = i2;
  i7 = HEAP32[i10 >> 2] | 0;
  HEAP32[i6 >> 2] = (i7 >>> 0 > i9 >>> 0 ? i4 << i7 - i9 : i4 >>> (i9 - i7 | 0)) | i2;
  i2 = (HEAP32[i10 >> 2] | 0) + i3 | 0;
  i6 = i6 + (i2 >>> 5 << 2) | 0;
  HEAP32[i15 >> 2] = i6;
  i2 = i2 & 31;
  HEAP32[i10 >> 2] = i2;
  i7 = i8 - i3 | 0;
  if ((i7 | 0) > 0) {
   HEAP32[i6 >> 2] = i4 >>> (i9 + i3 | 0) | HEAP32[i6 >> 2] & ~(-1 >>> (32 - i7 | 0));
   HEAP32[i10 >> 2] = i7;
   i2 = i7;
  }
  i1 = i1 + 4 | 0;
  HEAP32[i13 >> 2] = i1;
  i5 = i5 - i8 | 0;
 }
 i12 = 32 - i2 | 0;
 i7 = -1 << i2;
 if (i5 >>> 0 > 31) {
  i8 = ~i7;
  i6 = HEAP32[i15 >> 2] | 0;
  i2 = i5 + -32 | 0;
  i11 = i2 >>> 5;
  i9 = i11 + 1 | 0;
  i11 = i2 - (i11 << 5) | 0;
  i2 = i1;
  i3 = HEAP32[i6 >> 2] | 0;
  i4 = i6;
  while (1) {
   i16 = HEAP32[i2 >> 2] | 0;
   i17 = i3 & i8;
   HEAP32[i4 >> 2] = i17;
   HEAP32[i4 >> 2] = i16 << HEAP32[i10 >> 2] | i17;
   i4 = i4 + 4 | 0;
   i3 = HEAP32[i4 >> 2] & i7 | i16 >>> i12;
   HEAP32[i4 >> 2] = i3;
   i5 = i5 + -32 | 0;
   if (i5 >>> 0 <= 31) break; else i2 = i2 + 4 | 0;
  }
  i1 = i1 + (i9 << 2) | 0;
  HEAP32[i13 >> 2] = i1;
  HEAP32[i15 >> 2] = i6 + (i9 << 2);
  i5 = i11;
 }
 if (!i5) {
  i16 = i10;
  i17 = HEAP32[i15 >> 2] | 0;
  HEAP32[i14 >> 2] = i17;
  i17 = i14 + 4 | 0;
  i16 = HEAP32[i16 >> 2] | 0;
  HEAP32[i17 >> 2] = i16;
  return;
 }
 i4 = HEAP32[i1 >> 2] & -1 >>> (32 - i5 | 0);
 i3 = (i12 | 0) < (i5 | 0) ? i12 : i5;
 i2 = HEAP32[i15 >> 2] | 0;
 i1 = HEAP32[i2 >> 2] & ~(-1 << HEAP32[i10 >> 2] & -1 >>> (i12 - i3 | 0));
 HEAP32[i2 >> 2] = i1;
 HEAP32[i2 >> 2] = i1 | i4 << HEAP32[i10 >> 2];
 i1 = (HEAP32[i10 >> 2] | 0) + i3 | 0;
 i2 = i2 + (i1 >>> 5 << 2) | 0;
 HEAP32[i15 >> 2] = i2;
 HEAP32[i10 >> 2] = i1 & 31;
 i1 = i5 - i3 | 0;
 if ((i1 | 0) <= 0) {
  i16 = i10;
  i17 = HEAP32[i15 >> 2] | 0;
  HEAP32[i14 >> 2] = i17;
  i17 = i14 + 4 | 0;
  i16 = HEAP32[i16 >> 2] | 0;
  HEAP32[i17 >> 2] = i16;
  return;
 }
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & ~(-1 >>> (32 - i1 | 0)) | i4 >>> i3;
 HEAP32[i10 >> 2] = i1;
 i16 = i10;
 i17 = HEAP32[i15 >> 2] | 0;
 HEAP32[i14 >> 2] = i17;
 i17 = i14 + 4 | 0;
 i16 = HEAP32[i16 >> 2] | 0;
 HEAP32[i17 >> 2] = i16;
 return;
}

function __ZNSt3__26vectorIN7guetzli13JPEGComponentENS_9allocatorIS2_EEE8__appendEj(i8, i5) {
 i8 = i8 | 0;
 i5 = i5 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i6 = 0, i7 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i9 = i8 + 8 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = i8 + 4 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i6 = i3;
 if (((i2 - i3 | 0) / 40 | 0) >>> 0 >= i5 >>> 0) {
  i1 = i5;
  i2 = i6;
  while (1) {
   HEAP32[i2 >> 2] = 0;
   HEAP32[i2 + 4 >> 2] = 1;
   HEAP32[i2 + 8 >> 2] = 1;
   HEAP32[i2 + 12 >> 2] = 0;
   HEAP32[i2 + 16 >> 2] = 0;
   HEAP32[i2 + 20 >> 2] = 0;
   HEAP32[i2 + 28 >> 2] = 0;
   HEAP32[i2 + 32 >> 2] = 0;
   HEAP32[i2 + 36 >> 2] = 0;
   i1 = i1 + -1 | 0;
   if (!i1) break; else i2 = i2 + 40 | 0;
  }
  HEAP32[i10 >> 2] = i6 + (i5 * 40 | 0);
  return;
 }
 i1 = HEAP32[i8 >> 2] | 0;
 i4 = ((i3 - i1 | 0) / 40 | 0) + i5 | 0;
 if (i4 >>> 0 > 107374182) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i8);
  i6 = HEAP32[i10 >> 2] | 0;
  i1 = HEAP32[i8 >> 2] | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  i3 = i6;
 }
 i7 = i1;
 i11 = (i2 - i1 | 0) / 40 | 0;
 i2 = i11 << 1;
 i4 = i11 >>> 0 < 53687091 ? (i2 >>> 0 < i4 >>> 0 ? i4 : i2) : 107374182;
 i1 = (i3 - i1 | 0) / 40 | 0;
 do if (i4) if (i4 >>> 0 > 107374182) {
  i11 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i11);
  ___cxa_throw(i11 | 0, 1784, 8);
 } else {
  i3 = __Znwj(i4 * 40 | 0) | 0;
  break;
 } else i3 = 0; while (0);
 i2 = i3 + (i1 * 40 | 0) | 0;
 i4 = i3 + (i4 * 40 | 0) | 0;
 i1 = i5;
 i3 = i2;
 while (1) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 1;
  HEAP32[i3 + 8 >> 2] = 1;
  HEAP32[i3 + 12 >> 2] = 0;
  HEAP32[i3 + 16 >> 2] = 0;
  HEAP32[i3 + 20 >> 2] = 0;
  HEAP32[i3 + 28 >> 2] = 0;
  HEAP32[i3 + 32 >> 2] = 0;
  HEAP32[i3 + 36 >> 2] = 0;
  i1 = i1 + -1 | 0;
  if (!i1) break; else i3 = i3 + 40 | 0;
 }
 i1 = i2;
 i5 = i2 + (i5 * 40 | 0) | 0;
 if ((i6 | 0) != (i7 | 0)) {
  i3 = i6;
  do {
   i6 = i2 + -40 | 0;
   i12 = i3;
   i3 = i3 + -40 | 0;
   HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i6 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
   HEAP32[i6 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
   HEAP32[i6 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
   HEAP32[i6 + 16 >> 2] = HEAP32[i3 + 16 >> 2];
   HEAP32[i6 + 20 >> 2] = HEAP32[i3 + 20 >> 2];
   HEAP32[i6 + 24 >> 2] = HEAP32[i3 + 24 >> 2];
   i6 = i2 + -12 | 0;
   i11 = i12 + -12 | 0;
   HEAP32[i6 >> 2] = 0;
   i13 = i2 + -8 | 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i2 + -4 >> 2] = 0;
   HEAP32[i6 >> 2] = HEAP32[i11 >> 2];
   i6 = i12 + -8 | 0;
   HEAP32[i13 >> 2] = HEAP32[i6 >> 2];
   i12 = i12 + -4 | 0;
   HEAP32[i2 + -4 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i12 >> 2] = 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i11 >> 2] = 0;
   i2 = i1 + -40 | 0;
   i1 = i2;
  } while ((i3 | 0) != (i7 | 0));
  i6 = HEAP32[i8 >> 2] | 0;
 }
 HEAP32[i8 >> 2] = i1;
 i1 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i5;
 HEAP32[i9 >> 2] = i4;
 i5 = i6;
 if ((i1 | 0) != (i5 | 0)) do {
  i2 = HEAP32[i1 + -12 >> 2] | 0;
  if (i2 | 0) {
   i3 = i1 + -8 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) != (i2 | 0)) HEAP32[i3 >> 2] = i4 + (~((i4 + -2 - i2 | 0) >>> 1) << 1);
   __ZdlPv(i2);
  }
  i1 = i1 + -40 | 0;
 } while ((i1 | 0) != (i5 | 0));
 if (!i6) return;
 __ZdlPv(i6);
 return;
}

function __ZN7guetzli15SaveQuantTablesEPA64_KiPNS_8JPEGDataE(i17, i5) {
 i17 = i17 | 0;
 i5 = i5 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i18 = i22;
 i19 = i5 + 56 | 0;
 i4 = HEAP32[i19 >> 2] | 0;
 i20 = i5 + 60 | 0;
 i1 = HEAP32[i20 >> 2] | 0;
 if ((i1 | 0) != (i4 | 0)) {
  i2 = i1;
  while (1) {
   i1 = i2 + -24 | 0;
   HEAP32[i20 >> 2] = i1;
   i3 = HEAP32[i1 >> 2] | 0;
   if (i3) {
    i1 = i2 + -20 | 0;
    i2 = HEAP32[i1 >> 2] | 0;
    if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
    __ZdlPv(i3);
    i1 = HEAP32[i20 >> 2] | 0;
   }
   if ((i1 | 0) == (i4 | 0)) break; else i2 = i1;
  }
 }
 i10 = i5 + 80 | 0;
 i11 = i5 + 84 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 if ((i2 | 0) == (i1 | 0)) {
  STACKTOP = i22;
  return;
 }
 i12 = i18 + 4 | 0;
 i13 = i18 + 8 | 0;
 i14 = i18 + 12 | 0;
 i15 = i18 + 16 | 0;
 i16 = i18 + 20 | 0;
 i9 = i5 + 64 | 0;
 i7 = 0;
 i8 = 0;
 i3 = i1;
 L14 : while (1) {
  i6 = i3;
  i5 = i17 + (i8 << 8) | 0;
  L16 : do if ((i7 | 0) > 0) {
   i4 = HEAP32[i19 >> 2] | 0;
   i1 = 0;
   while (1) {
    if (!(_memcmp(i5, HEAP32[i4 + (i1 * 24 | 0) >> 2] | 0, 256) | 0)) break;
    i1 = i1 + 1 | 0;
    if ((i1 | 0) >= (i7 | 0)) {
     i21 = 15;
     break L16;
    }
   }
   HEAP32[i6 + (i8 * 40 | 0) + 12 >> 2] = i1;
   i1 = i7;
  } else i21 = 15; while (0);
  if ((i21 | 0) == 15) {
   i21 = 0;
   i3 = __Znwj(256) | 0;
   HEAP32[i18 >> 2] = i3;
   i1 = i3 + 256 | 0;
   HEAP32[i13 >> 2] = i1;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i15 >> 2] = 0;
   HEAP8[i16 >> 0] = 1;
   _memcpy(i3 | 0, i5 | 0, 256) | 0;
   HEAP32[i14 >> 2] = 0;
   i1 = 0;
   do {
    i2 = HEAP32[i3 + (i1 << 2) >> 2] | 0;
    if ((i2 | 0) <= -1) {
     i21 = 20;
     break L14;
    }
    if ((i2 | 0) >= 65536) {
     i21 = 22;
     break L14;
    }
    if ((i2 | 0) > 255) HEAP32[i14 >> 2] = 1;
    i1 = i1 + 1 | 0;
   } while ((i1 | 0) < 64);
   HEAP32[i15 >> 2] = i7;
   HEAP32[i6 + (i8 * 40 | 0) + 12 >> 2] = i7;
   i1 = HEAP32[i20 >> 2] | 0;
   if ((i1 | 0) == (HEAP32[i9 >> 2] | 0)) __ZNSt3__26vectorIN7guetzli14JPEGQuantTableENS_9allocatorIS2_EEE21__push_back_slow_pathIRKS2_EEvOT_(i19, i18); else {
    __ZNSt3__26vectorIiNS_9allocatorIiEEEC2ERKS3_(i1, i18);
    i6 = i1 + 12 | 0;
    HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i6 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
    HEAP8[i6 + 8 >> 0] = HEAP8[i14 + 8 >> 0] | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 24;
   }
   i1 = i7 + 1 | 0;
   i2 = HEAP32[i18 >> 2] | 0;
   if (i2 | 0) {
    i3 = HEAP32[i12 >> 2] | 0;
    if ((i3 | 0) != (i2 | 0)) HEAP32[i12 >> 2] = i3 + (~((i3 + -4 - i2 | 0) >>> 2) << 2);
    __ZdlPv(i2);
   }
   i3 = HEAP32[i10 >> 2] | 0;
   i2 = HEAP32[i11 >> 2] | 0;
  }
  i8 = i8 + 1 | 0;
  if (i8 >>> 0 >= ((i2 - i3 | 0) / 40 | 0) >>> 0) {
   i21 = 9;
   break;
  } else i7 = i1;
 }
 if ((i21 | 0) == 9) {
  STACKTOP = i22;
  return;
 } else if ((i21 | 0) == 20) ___assert_fail(9706, 9727, 90, 9751); else if ((i21 | 0) == 22) ___assert_fail(9767, 9727, 91, 9751);
}

function __ZN11butteraugliL16PlanesFromPackedIfEENSt3__26vectorINS_5ImageIT_EENS1_9allocatorIS5_EEEEjjRKNS2_INS2_IS4_NS6_IS4_EEEENS6_ISA_EEEE(i16, i17, i18, i1) {
 i16 = i16 | 0;
 i17 = i17 | 0;
 i18 = i18 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i24 = i25;
 i19 = i25 + 8 | 0;
 HEAP32[i16 >> 2] = 0;
 i20 = i16 + 4 | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i16 + 8 >> 2] = 0;
 i8 = i1 + 4 | 0;
 __ZNSt3__26vectorIN11butteraugli5ImageIfEENS_9allocatorIS3_EEE7reserveEj(i16, ((HEAP32[i8 >> 2] | 0) - (HEAP32[i1 >> 2] | 0) | 0) / 12 | 0);
 i1 = HEAP32[i1 >> 2] | 0;
 i8 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == (i8 | 0)) {
  STACKTOP = i25;
  return;
 }
 i9 = i19 + 4 | 0;
 i10 = i19 + 8 | 0;
 i11 = (i17 << 2) + 95 | 0;
 i7 = i11 & -64;
 i7 = (i11 & 1984 | 0) == 0 ? i7 + 64 | 0 : i7;
 i11 = i19 + 12 | 0;
 i12 = (Math_imul(i7, i18) | 0) + 64 | 0;
 i13 = i19 + 16 | 0;
 i14 = i16 + 8 | 0;
 i15 = i19 + 12 | 0;
 L4 : while (1) {
  HEAP32[i19 >> 2] = i17;
  HEAP32[i9 >> 2] = i18;
  HEAP32[i10 >> 2] = i7;
  i2 = _malloc(i12) | 0;
  if (!i2) i2 = 0; else {
   i3 = i2;
   if (i3 & 3 | 0) {
    i1 = 6;
    break;
   }
   i6 = i2 + 64 + (0 - (i3 & 63)) | 0;
   i5 = i6 + -4 | 0;
   HEAP8[i5 >> 0] = i2;
   HEAP8[i5 + 1 >> 0] = i2 >> 8;
   HEAP8[i5 + 2 >> 0] = i2 >> 16;
   HEAP8[i5 + 3 >> 0] = i2 >> 24;
   i2 = i6;
  }
  HEAP32[i11 >> 2] = i2;
  HEAP32[i13 >> 2] = 10;
  i3 = HEAP32[i20 >> 2] | 0;
  if (i3 >>> 0 < (HEAP32[i14 >> 2] | 0) >>> 0) {
   HEAP32[i3 >> 2] = i17;
   HEAP32[i3 + 4 >> 2] = i18;
   HEAP32[i3 + 8 >> 2] = i7;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i3 + 12 >> 2] = i2;
   HEAP32[i3 + 16 >> 2] = 10;
   HEAP32[i20 >> 2] = i3 + 20;
  } else __ZNSt3__26vectorIN11butteraugli5ImageIfEENS_9allocatorIS3_EEE21__push_back_slow_pathIS3_EEvOT_(i16, i19);
  i2 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = 0;
  if (i2 | 0) FUNCTION_TABLE_vi[HEAP32[i13 >> 2] & 15](i2);
  i2 = HEAP32[i20 >> 2] | 0;
  i4 = HEAP32[i2 + -20 >> 2] | 0;
  i5 = i2 + -16 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  i3 = HEAP32[i1 >> 2] | 0;
  if (((HEAP32[i1 + 4 >> 2] | 0) - i3 >> 2 | 0) != (Math_imul(i6, i4) | 0)) {
   i1 = 16;
   break;
  }
  if (i6 | 0 ? (i21 = i2 + -8 | 0, i22 = i2 + -12 | 0, i23 = i4 << 2, _memcpy(HEAP32[i21 >> 2] | 0, i3 | 0, i23 | 0) | 0, (i6 | 0) != 1) : 0) {
   i2 = 1;
   do {
    i3 = HEAP32[i5 >> 2] | 0;
    if (i3 >>> 0 <= i2 >>> 0) {
     i1 = 17;
     break L4;
    }
    i3 = (HEAP32[i1 >> 2] | 0) + ((Math_imul(i2, i4) | 0) << 2) | 0;
    _memcpy((HEAP32[i21 >> 2] | 0) + (Math_imul(HEAP32[i22 >> 2] | 0, i2) | 0) | 0, i3 | 0, i23 | 0) | 0;
    i2 = i2 + 1 | 0;
   } while (i2 >>> 0 < i6 >>> 0);
  }
  i1 = i1 + 12 | 0;
  if ((i1 | 0) == (i8 | 0)) {
   i1 = 3;
   break;
  }
 }
 if ((i1 | 0) == 3) {
  STACKTOP = i25;
  return;
 } else if ((i1 | 0) == 6) ___assert_fail(10300, 10333, 59, 10363); else if ((i1 | 0) == 16) ___assert_fail(14904, 14817, 361, 14933); else if ((i1 | 0) == 17) {
  HEAP32[i24 >> 2] = i2;
  HEAP32[i24 + 4 >> 2] = i3;
  _printf(14766, i24) | 0;
  _abort();
 }
}

function __ZN7guetzli12_GLOBAL__N_119ComputeEntropyCodesERKNSt3__26vectorINS_13JpegHistogramENS1_9allocatorIS3_EEEEPNS2_IhNS4_IhEEEE(i7, i8) {
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i14 = i15 + 28 | 0;
 i9 = i15 + 24 | 0;
 i13 = i15 + 12 | 0;
 i11 = i15;
 __ZNSt3__26vectorIN7guetzli13JpegHistogramENS_9allocatorIS2_EEEC2ERKS5_(i14, i7);
 i10 = i7 + 4 | 0;
 i2 = ((HEAP32[i10 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0) / 1028 | 0;
 HEAP32[i9 >> 2] = i2;
 __ZNSt3__26vectorIiNS_9allocatorIiEEEC2Ej(i13, i2);
 i2 = (HEAP32[i10 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0;
 i1 = ((i2 | 0) / 1028 | 0) * 257 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i11 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i11 + 8 >> 2] = 0;
 if (!i2) i1 = 0; else {
  if ((i2 | 0) < 0) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i11);
  i2 = __Znwj(i1) | 0;
  HEAP32[i12 >> 2] = i2;
  HEAP32[i11 >> 2] = i2;
  HEAP32[i11 + 8 >> 2] = i2 + i1;
  do {
   HEAP8[i2 >> 0] = 0;
   i2 = (HEAP32[i12 >> 2] | 0) + 1 | 0;
   HEAP32[i12 >> 2] = i2;
   i1 = i1 + -1 | 0;
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i11 >> 2] | 0;
 }
 __ZN7guetzli17ClusterHistogramsEPNS_13JpegHistogramEPjPiPh(HEAP32[i14 >> 2] | 0, i9, HEAP32[i13 >> 2] | 0, i1) | 0;
 i1 = (HEAP32[i12 >> 2] | 0) - (HEAP32[i11 >> 2] | 0) | 0;
 i2 = i8 + 4 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 i3 = i5 - i4 | 0;
 if (i1 >>> 0 <= i3 >>> 0) {
  if (i1 >>> 0 < i3 >>> 0 ? (i6 = i4 + i1 | 0, (i5 | 0) != (i6 | 0)) : 0) HEAP32[i2 >> 2] = i6;
 } else __ZNSt3__26vectorIhNS_9allocatorIhEEE8__appendEj(i8, i1 - i3 | 0);
 if ((HEAP32[i10 >> 2] | 0) != (HEAP32[i7 >> 2] | 0)) {
  i2 = HEAP32[i13 >> 2] | 0;
  i3 = HEAP32[i11 >> 2] | 0;
  i1 = 0;
  do {
   _memcpy((HEAP32[i8 >> 2] | 0) + (i1 * 257 | 0) | 0, i3 + ((HEAP32[i2 + (i1 << 2) >> 2] | 0) * 257 | 0) | 0, 257) | 0;
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 < (((HEAP32[i10 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0) / 1028 | 0) >>> 0);
 }
 i6 = HEAP32[i9 >> 2] | 0;
 if (!i6) i4 = 0; else {
  i7 = HEAP32[i14 >> 2] | 0;
  i1 = 0;
  i5 = 0;
  do {
   i2 = 0;
   i3 = 136;
   i4 = 1;
   while (1) {
    i3 = (HEAP32[i7 + (i5 * 1028 | 0) + (i2 << 2) >> 2] | 0) == 0 ? i3 : i3 + 8 | 0;
    i2 = i4 + 1 | 0;
    if ((i2 | 0) == 257) break; else {
     i10 = i4;
     i4 = i2;
     i2 = i10;
    }
   }
   i1 = (i3 >>> 3) + i1 | 0;
   i5 = i5 + 1 | 0;
  } while (i5 >>> 0 < i6 >>> 0);
  i4 = i1;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 if (i1 | 0) {
  if ((HEAP32[i12 >> 2] | 0) != (i1 | 0)) HEAP32[i12 >> 2] = i1;
  __ZdlPv(i1);
 }
 i3 = HEAP32[i13 >> 2] | 0;
 if (i3 | 0) {
  i1 = i13 + 4 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
  __ZdlPv(i3);
 }
 i3 = HEAP32[i14 >> 2] | 0;
 if (!i3) {
  STACKTOP = i15;
  return i4 | 0;
 }
 i1 = i14 + 4 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~(((i2 + -1028 - i3 | 0) >>> 0) / 1028 | 0) * 1028 | 0);
 __ZdlPv(i3);
 STACKTOP = i15;
 return i4 | 0;
}

function __ZNSt3__26vectorIN7guetzli15JPEGHuffmanCodeENS_9allocatorIS2_EEE21__push_back_slow_pathIRKS2_EEvOT_(i10, i6) {
 i10 = i10 | 0;
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0, i9 = 0, i11 = 0, i12 = 0, i13 = 0;
 i11 = i10 + 4 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 i3 = (i2 - i1 >> 5) + 1 | 0;
 if (i3 >>> 0 > 134217727) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i10);
  i1 = HEAP32[i10 >> 2] | 0;
  i2 = HEAP32[i11 >> 2] | 0;
 }
 i9 = i10 + 8 | 0;
 i8 = (HEAP32[i9 >> 2] | 0) - i1 | 0;
 i5 = i8 >> 4;
 i5 = i8 >> 5 >>> 0 < 67108863 ? (i5 >>> 0 < i3 >>> 0 ? i3 : i5) : 134217727;
 i1 = i2 - i1 >> 5;
 do if (i5) if (i5 >>> 0 > 134217727) {
  i11 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i11);
  ___cxa_throw(i11 | 0, 1784, 8);
 } else {
  i4 = __Znwj(i5 << 5) | 0;
  break;
 } else i4 = 0; while (0);
 i2 = i4 + (i1 << 5) | 0;
 i3 = i2;
 i7 = i4 + (i5 << 5) | 0;
 __ZNSt3__26vectorIiNS_9allocatorIiEEEC2ERKS3_(i2, i6);
 __ZNSt3__26vectorIiNS_9allocatorIiEEEC2ERKS3_(i4 + (i1 << 5) + 12 | 0, i6 + 12 | 0);
 i5 = i4 + (i1 << 5) + 24 | 0;
 i4 = i6 + 24 | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP8[i5 + 4 >> 0] = HEAP8[i4 + 4 >> 0] | 0;
 i5 = i2 + 32 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 i1 = HEAP32[i11 >> 2] | 0;
 if ((i1 | 0) == (i4 | 0)) {
  i1 = i3;
  i8 = i4;
  i2 = i4;
 } else {
  do {
   i12 = i2 + -32 | 0;
   i6 = i1;
   i1 = i1 + -32 | 0;
   HEAP32[i12 >> 2] = 0;
   i8 = i2 + -28 | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i2 + -24 >> 2] = 0;
   HEAP32[i12 >> 2] = HEAP32[i1 >> 2];
   i12 = i6 + -28 | 0;
   HEAP32[i8 >> 2] = HEAP32[i12 >> 2];
   i8 = i6 + -24 | 0;
   HEAP32[i2 + -24 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i8 >> 2] = 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i1 >> 2] = 0;
   i12 = i2 + -20 | 0;
   i8 = i6 + -20 | 0;
   HEAP32[i12 >> 2] = 0;
   i13 = i2 + -16 | 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i2 + -12 >> 2] = 0;
   HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
   i12 = i6 + -16 | 0;
   HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
   i13 = i6 + -12 | 0;
   HEAP32[i2 + -12 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i13 >> 2] = 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i8 >> 2] = 0;
   i8 = i2 + -8 | 0;
   i6 = i6 + -8 | 0;
   HEAP32[i8 >> 2] = HEAP32[i6 >> 2];
   HEAP8[i8 + 4 >> 0] = HEAP8[i6 + 4 >> 0] | 0;
   i2 = i3 + -32 | 0;
   i3 = i2;
  } while ((i1 | 0) != (i4 | 0));
  i1 = i3;
  i8 = HEAP32[i10 >> 2] | 0;
  i2 = HEAP32[i11 >> 2] | 0;
 }
 HEAP32[i10 >> 2] = i1;
 HEAP32[i11 >> 2] = i5;
 HEAP32[i9 >> 2] = i7;
 i6 = i8;
 if ((i2 | 0) != (i6 | 0)) {
  i5 = i2;
  do {
   i4 = i5;
   i5 = i5 + -32 | 0;
   i1 = HEAP32[i4 + -20 >> 2] | 0;
   if (i1 | 0) {
    i2 = i4 + -16 | 0;
    i3 = HEAP32[i2 >> 2] | 0;
    if ((i3 | 0) != (i1 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i1 | 0) >>> 2) << 2);
    __ZdlPv(i1);
   }
   i3 = HEAP32[i5 >> 2] | 0;
   if (i3 | 0) {
    i1 = i4 + -28 | 0;
    i2 = HEAP32[i1 >> 2] | 0;
    if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
    __ZdlPv(i3);
   }
  } while ((i5 | 0) != (i6 | 0));
 }
 if (!i8) return;
 __ZdlPv(i8);
 return;
}

function __ZN7guetzli7ProcessERKNS_6ParamsEPNS_12ProcessStatsERKNSt3__212basic_stringIcNS5_11char_traitsIcEENS5_9allocatorIcEEEEPSB_(i5, i2, i1, i7) {
 i5 = i5 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 i7 = i7 | 0;
 var i3 = 0, i4 = 0, i6 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 i12 = i13 + 88 | 0;
 i11 = i13 + 72 | 0;
 i9 = i13;
 i8 = i13 + 40 | 0;
 HEAP32[i12 >> 2] = 0;
 i4 = i12 + 4 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i12 + 8 >> 2] = 0;
 HEAP32[i12 + 12 >> 2] = 1;
 HEAP32[i12 + 16 >> 2] = 1;
 _memset(i12 + 20 | 0, 0, 132) | 0;
 i10 = HEAP8[i1 + 11 >> 0] | 0;
 i6 = i10 << 24 >> 24 < 0;
 if (!(__ZN7guetzli8ReadJpegEPKhjNS_12JpegReadModeEPNS_8JPEGDataE(i6 ? HEAP32[i1 >> 2] | 0 : i1, i6 ? HEAP32[i1 + 4 >> 2] | 0 : i10 & 255, 2, i12) | 0)) {
  _fwrite(10107, 36, 1, HEAP32[2032] | 0) | 0;
  i11 = 0;
  __ZN7guetzli8JPEGDataD2Ev(i12);
  STACKTOP = i13;
  return i11 | 0;
 }
 __ZN7guetzli15DecodeJpegToRGBERKNS_8JPEGDataE(i11, i12);
 i10 = i11 + 4 | 0;
 if ((HEAP32[i11 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
  _fwrite(10144, 112, 1, HEAP32[2032] | 0) | 0;
  i2 = 0;
 } else {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i9 + 4 >> 2] = 0;
  HEAP32[i9 + 8 >> 2] = 0;
  HEAP32[i9 + 12 >> 2] = 0;
  HEAP32[i9 + 16 >> 2] = 0;
  HEAP32[i9 + 20 >> 2] = 0;
  HEAP32[i8 + 4 >> 2] = 0;
  HEAP32[i8 + 8 >> 2] = 0;
  i6 = i8 + 4 | 0;
  HEAP32[i8 >> 2] = i6;
  i1 = i8 + 12 | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  HEAP32[i1 + 12 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = 0;
  i2 = (i2 | 0) == 0 ? i8 : i2;
  i1 = HEAP32[i12 >> 2] | 0;
  if ((i1 | 0) > 31 ? (i3 = HEAP32[i4 >> 2] | 0, (i3 | 0) > 31) : 0) {
   i4 = __Znwj(96) | 0;
   __ZN7guetzli21ButteraugliComparatorC2EiiRKNSt3__26vectorIhNS1_9allocatorIhEEEEfPNS_12ProcessStatsE(i4, i1, i3, i11, Math_fround(HEAPF32[i5 >> 2]), i2);
   i1 = i4;
  } else i1 = 0;
  i3 = i1;
  i2 = __ZN7guetzli15ProcessJpegDataERKNS_6ParamsERKNS_8JPEGDataEPNS_10ComparatorEPNS_13GuetzliOutputEPNS_12ProcessStatsE(i5, i12, i3, i9, i2) | 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i7, i9) | 0;
  if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i3);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i8 + 20 | 0);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(i8, HEAP32[i6 >> 2] | 0);
  i1 = HEAP32[i9 + 12 >> 2] | 0;
  if (i1 | 0) {
   i3 = i9 + 16 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) != (i1 | 0)) HEAP32[i3 >> 2] = i4 + (~((i4 + -4 - i1 | 0) >>> 2) << 2);
   __ZdlPv(i1);
  }
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i9);
 }
 i1 = HEAP32[i11 >> 2] | 0;
 if (i1 | 0) {
  if ((HEAP32[i10 >> 2] | 0) != (i1 | 0)) HEAP32[i10 >> 2] = i1;
  __ZdlPv(i1);
 }
 i11 = i2;
 __ZN7guetzli8JPEGDataD2Ev(i12);
 STACKTOP = i13;
 return i11 | 0;
}

function __ZNSt3__27__sort4IRPFbRKN7guetzli11HuffmanTreeES4_EPS2_EEjT0_S9_S9_S9_T_(i4, i5, i6, i7, i8) {
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = FUNCTION_TABLE_iii[HEAP32[i8 >> 2] & 1](i5, i4) | 0;
 i3 = FUNCTION_TABLE_iii[HEAP32[i8 >> 2] & 1](i6, i5) | 0;
 do if (i2) {
  i2 = i4;
  i1 = HEAP32[i2 >> 2] | 0;
  i2 = HEAP32[i2 + 4 >> 2] | 0;
  if (i3) {
   i10 = i6;
   i9 = HEAP32[i10 + 4 >> 2] | 0;
   i3 = i4;
   HEAP32[i3 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i3 + 4 >> 2] = i9;
   i3 = i6;
   HEAP32[i3 >> 2] = i1;
   HEAP32[i3 + 4 >> 2] = i2;
   i1 = 1;
   break;
  }
  i3 = i5;
  i9 = HEAP32[i3 + 4 >> 2] | 0;
  i10 = i4;
  HEAP32[i10 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i10 + 4 >> 2] = i9;
  i10 = i5;
  HEAP32[i10 >> 2] = i1;
  HEAP32[i10 + 4 >> 2] = i2;
  if (FUNCTION_TABLE_iii[HEAP32[i8 >> 2] & 1](i6, i5) | 0) {
   i10 = i5;
   i9 = HEAP32[i10 >> 2] | 0;
   i10 = HEAP32[i10 + 4 >> 2] | 0;
   i2 = i6;
   i3 = HEAP32[i2 + 4 >> 2] | 0;
   i1 = i5;
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i1 + 4 >> 2] = i3;
   i1 = i6;
   HEAP32[i1 >> 2] = i9;
   HEAP32[i1 + 4 >> 2] = i10;
   i1 = 2;
  } else i1 = 1;
 } else if (i3) {
  i9 = i5;
  i3 = HEAP32[i9 >> 2] | 0;
  i9 = HEAP32[i9 + 4 >> 2] | 0;
  i1 = i6;
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  i10 = i5;
  HEAP32[i10 >> 2] = HEAP32[i1 >> 2];
  HEAP32[i10 + 4 >> 2] = i2;
  i10 = i6;
  HEAP32[i10 >> 2] = i3;
  HEAP32[i10 + 4 >> 2] = i9;
  if (FUNCTION_TABLE_iii[HEAP32[i8 >> 2] & 1](i5, i4) | 0) {
   i10 = i4;
   i9 = HEAP32[i10 >> 2] | 0;
   i10 = HEAP32[i10 + 4 >> 2] | 0;
   i2 = i5;
   i3 = HEAP32[i2 + 4 >> 2] | 0;
   i1 = i4;
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i1 + 4 >> 2] = i3;
   i1 = i5;
   HEAP32[i1 >> 2] = i9;
   HEAP32[i1 + 4 >> 2] = i10;
   i1 = 2;
  } else i1 = 1;
 } else i1 = 0; while (0);
 if (!(FUNCTION_TABLE_iii[HEAP32[i8 >> 2] & 1](i7, i6) | 0)) {
  i10 = i1;
  return i10 | 0;
 }
 i9 = i6;
 i3 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[i9 + 4 >> 2] | 0;
 i11 = i7;
 i2 = HEAP32[i11 + 4 >> 2] | 0;
 i10 = i6;
 HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i10 + 4 >> 2] = i2;
 i10 = i7;
 HEAP32[i10 >> 2] = i3;
 HEAP32[i10 + 4 >> 2] = i9;
 if (!(FUNCTION_TABLE_iii[HEAP32[i8 >> 2] & 1](i6, i5) | 0)) {
  i11 = i1 + 1 | 0;
  return i11 | 0;
 }
 i10 = i5;
 i9 = HEAP32[i10 >> 2] | 0;
 i10 = HEAP32[i10 + 4 >> 2] | 0;
 i3 = i6;
 i7 = HEAP32[i3 + 4 >> 2] | 0;
 i11 = i5;
 HEAP32[i11 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i11 + 4 >> 2] = i7;
 i11 = i6;
 HEAP32[i11 >> 2] = i9;
 HEAP32[i11 + 4 >> 2] = i10;
 if (!(FUNCTION_TABLE_iii[HEAP32[i8 >> 2] & 1](i5, i4) | 0)) {
  i11 = i1 + 2 | 0;
  return i11 | 0;
 }
 i10 = i4;
 i9 = HEAP32[i10 >> 2] | 0;
 i10 = HEAP32[i10 + 4 >> 2] | 0;
 i7 = i5;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 i11 = i4;
 HEAP32[i11 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i11 + 4 >> 2] = i8;
 i11 = i5;
 HEAP32[i11 >> 2] = i9;
 HEAP32[i11 + 4 >> 2] = i10;
 i11 = i1 + 3 | 0;
 return i11 | 0;
}

function __ZN7guetzli17CreateHuffmanTreeEPKjjiPNS_11HuffmanTreeEPh(i8, i9, i10, i14, i15) {
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i11 = 0, i12 = 0, i13 = 0, i16 = 0, i17 = 0, i18 = 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i11 = i16;
 i12 = (i10 | 0) < 17;
 i13 = 1;
 L1 : while (1) {
  i7 = 0;
  i1 = i9;
  L3 : while (1) {
   do {
    if (!i1) break L3;
    i1 = i1 + -1 | 0;
    i2 = HEAP32[i8 + (i1 << 2) >> 2] | 0;
   } while (!(i2 | 0));
   i5 = _bitshift64Shl(i1 | 0, 0, 48) | 0;
   i6 = i14 + (i7 << 3) | 0;
   HEAP32[i6 >> 2] = i5 | (i2 >>> 0 < i13 >>> 0 ? i13 : i2);
   HEAP32[i6 + 4 >> 2] = tempRet0 | 65535;
   i7 = i7 + 1 | 0;
  }
  if ((i7 | 0) == 1) {
   i1 = 8;
   break;
  }
  i2 = i14 + (i7 << 3) | 0;
  HEAP32[i11 >> 2] = 1;
  __ZNSt3__26__sortIRPFbRKN7guetzli11HuffmanTreeES4_EPS2_EEvT0_S9_T_(i14, i2, i11);
  HEAP32[i2 >> 2] = -1;
  HEAP32[i2 + 4 >> 2] = -1;
  i2 = i7 + 1 | 0;
  i1 = i14 + (i2 << 3) | 0;
  HEAP32[i1 >> 2] = -1;
  HEAP32[i1 + 4 >> 2] = -1;
  i1 = i7 + -1 | 0;
  if (i1 | 0) {
   i6 = i7 << 1;
   i3 = 0;
   while (1) {
    i18 = (HEAP32[i14 + (i3 << 3) >> 2] | 0) >>> 0 > (HEAP32[i14 + (i2 << 3) >> 2] | 0) >>> 0;
    i5 = ((i18 ^ 1) & 1) + i3 | 0;
    i4 = (i18 & 1) + i2 | 0;
    i18 = i18 ? i2 : i3;
    i3 = (HEAP32[i14 + (i5 << 3) >> 2] | 0) >>> 0 > (HEAP32[i14 + (i4 << 3) >> 2] | 0) >>> 0;
    i17 = i3 ? i4 : i5;
    i2 = i6 - i1 | 0;
    HEAP32[i14 + (i2 << 3) >> 2] = (HEAP32[i14 + (i17 << 3) >> 2] | 0) + (HEAP32[i14 + (i18 << 3) >> 2] | 0);
    HEAP16[i14 + (i2 << 3) + 4 >> 1] = i18;
    HEAP16[i14 + (i2 << 3) + 6 >> 1] = i17;
    i2 = i14 + (i2 + 1 << 3) | 0;
    HEAP32[i2 >> 2] = -1;
    HEAP32[i2 + 4 >> 2] = -1;
    i1 = i1 + -1 | 0;
    if (!i1) break; else {
     i2 = (i3 & 1) + i4 | 0;
     i3 = ((i3 ^ 1) & 1) + i5 | 0;
    }
   }
  }
  if (!i12) {
   i1 = 12;
   break;
  }
  HEAP32[i11 >> 2] = -1;
  i2 = (i7 << 1) + -1 | 0;
  i1 = 0;
  while (1) {
   i18 = HEAP16[i14 + (i2 << 3) + 4 >> 1] | 0;
   i3 = i18 << 16 >> 16;
   if (i18 << 16 >> 16 > -1) {
    i4 = i1 + 1 | 0;
    if ((i1 | 0) >= (i10 | 0)) break;
    HEAP32[i11 + (i4 << 2) >> 2] = HEAP16[i14 + (i2 << 3) + 6 >> 1];
    i2 = i3;
    i1 = i4;
    continue;
   }
   HEAP8[i15 + (HEAP16[i14 + (i2 << 3) + 6 >> 1] | 0) >> 0] = i1;
   if ((i1 | 0) > -1) i3 = i1; else {
    i1 = 21;
    break L1;
   }
   while (1) {
    i1 = i11 + (i3 << 2) | 0;
    i2 = HEAP32[i1 >> 2] | 0;
    if ((i2 | 0) != -1) break;
    if ((i3 | 0) > 0) i3 = i3 + -1 | 0; else {
     i1 = 21;
     break L1;
    }
   }
   HEAP32[i1 >> 2] = -1;
   i1 = i3;
  }
  i13 = i13 << 1;
 }
 if ((i1 | 0) == 8) {
  HEAP8[i15 + (HEAP16[i14 + 6 >> 1] | 0) >> 0] = 1;
  STACKTOP = i16;
  return;
 } else if ((i1 | 0) == 12) ___assert_fail(10018, 10034, 30, 10063); else if ((i1 | 0) == 21) {
  STACKTOP = i16;
  return;
 }
}

function __ZN11butteraugli21ButteraugliComparator15CombineChannelsERKNSt3__26vectorINS2_IfNS1_9allocatorIfEEEENS3_IS5_EEEES9_RKS5_SB_SB_PS5_(i7, i8, i9, i10, i11, i12, i18) {
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i18 = i18 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i19 = 0, i20 = 0, d21 = 0.0, d22 = 0.0, d23 = 0.0, d24 = 0.0, i25 = 0, d26 = 0.0, d27 = 0.0;
 i17 = i7 + 16 | 0;
 i1 = Math_imul(HEAP32[i7 + 20 >> 2] | 0, HEAP32[i17 >> 2] | 0) | 0;
 i2 = i18 + 4 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i18 >> 2] | 0;
 i3 = i5 - i4 >> 2;
 if (i1 >>> 0 <= i3 >>> 0) {
  if (i1 >>> 0 < i3 >>> 0 ? (i6 = i4 + (i1 << 2) | 0, (i5 | 0) != (i6 | 0)) : 0) HEAP32[i2 >> 2] = i5 + (~((i5 + -4 - i6 | 0) >>> 2) << 2);
 } else __ZNSt3__26vectorIfNS_9allocatorIfEEE8__appendEj(i18, i1 - i3 | 0);
 i19 = HEAP32[i7 + 12 >> 2] | 0;
 i1 = 8 - i19 | 0;
 i20 = HEAP32[i7 + 4 >> 2] | 0;
 if (i1 >>> 0 >= i20 >>> 0) return;
 i16 = HEAP32[i7 >> 2] | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i15 = HEAP32[i10 >> 2] | 0;
 i14 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if (i1 >>> 0 >= i16 >>> 0) {
  i1 = 0;
  while (1) if ((i1 + 8 | 0) >>> 0 < i20 >>> 0) i1 = i19 + i1 | 0; else break;
  return;
 }
 i9 = HEAP32[i2 >> 2] | 0;
 i10 = HEAP32[i3 + 12 >> 2] | 0;
 i11 = HEAP32[i2 + 12 >> 2] | 0;
 i12 = HEAP32[i3 + 24 >> 2] | 0;
 i8 = HEAP32[i2 + 24 >> 2] | 0;
 i7 = HEAP32[i17 >> 2] | 0;
 i6 = HEAP32[i18 >> 2] | 0;
 i3 = HEAP32[i3 >> 2] | 0;
 i1 = 0;
 do {
  i4 = Math_imul(i7, i1) | 0;
  i5 = Math_imul(i16, i1 + 3 | 0) | 0;
  i2 = 0;
  while (1) {
   i18 = i5 + (i2 + 3) | 0;
   d24 = +Math_fround(HEAPF32[i3 + (i18 << 2) >> 2]);
   d27 = +Math_fround(HEAPF32[i9 + (i18 << 2) >> 2]);
   d22 = +Math_fround(HEAPF32[i10 + (i18 << 2) >> 2]);
   d23 = +Math_fround(HEAPF32[i11 + (i18 << 2) >> 2]);
   d21 = +Math_fround(HEAPF32[i12 + (i18 << 2) >> 2]);
   d26 = +Math_fround(HEAPF32[i8 + (i18 << 2) >> 2]);
   i18 = ((i4 + i2 | 0) >>> 0) / (i19 >>> 0) | 0;
   i17 = i18 * 3 | 0;
   i25 = i15 + (i17 << 2) | 0;
   d27 = +Math_fround(HEAPF32[i25 >> 2]) * d27;
   d23 = d27 + +Math_fround(HEAPF32[i25 + 4 >> 2]) * d23;
   d26 = d23 + +Math_fround(HEAPF32[i25 + 8 >> 2]) * d26;
   i25 = i14 + (i17 << 2) | 0;
   d23 = +Math_fround(HEAPF32[i25 >> 2]) * d24;
   d23 = d23 + +Math_fround(HEAPF32[i25 + 4 >> 2]) * d22;
   d23 = d26 + (d23 + +Math_fround(HEAPF32[i25 + 8 >> 2]) * d21);
   i17 = i13 + (i17 << 2) | 0;
   d24 = d24 * +Math_fround(HEAPF32[i17 >> 2]);
   d22 = d24 + d22 * +Math_fround(HEAPF32[i17 + 4 >> 2]);
   HEAPF32[i6 + (i18 << 2) >> 2] = Math_fround(d23 + (d22 + d21 * +Math_fround(HEAPF32[i17 + 8 >> 2])));
   if ((i2 + 8 | 0) >>> 0 < i16 >>> 0) i2 = i19 + i2 | 0; else break;
  }
  i1 = i19 + i1 | 0;
 } while ((i1 + 8 - i19 | 0) >>> 0 < i20 >>> 0);
 return;
}

function __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_(i5, i1) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i6 = 0, i7 = 0;
 i7 = (i1 | 0) == (i5 | 0);
 HEAP8[i1 + 12 >> 0] = i7 & 1;
 if (i7) return;
 while (1) {
  i7 = HEAP32[i1 + 8 >> 2] | 0;
  i4 = i7 + 12 | 0;
  if (HEAP8[i4 >> 0] | 0) {
   i3 = 23;
   break;
  }
  i6 = i7 + 8 | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) == (i7 | 0)) {
   i3 = HEAP32[i2 + 4 >> 2] | 0;
   if (!i3) {
    i3 = 7;
    break;
   }
   i3 = i3 + 12 | 0;
   if (!(HEAP8[i3 >> 0] | 0)) i1 = i3; else {
    i3 = 7;
    break;
   }
  } else {
   if (!i3) {
    i3 = 16;
    break;
   }
   i3 = i3 + 12 | 0;
   if (!(HEAP8[i3 >> 0] | 0)) i1 = i3; else {
    i3 = 16;
    break;
   }
  }
  HEAP8[i4 >> 0] = 1;
  i7 = (i2 | 0) == (i5 | 0);
  HEAP8[i2 + 12 >> 0] = i7 & 1;
  HEAP8[i1 >> 0] = 1;
  if (i7) {
   i3 = 23;
   break;
  } else i1 = i2;
 }
 if ((i3 | 0) == 7) {
  if ((HEAP32[i7 >> 2] | 0) == (i1 | 0)) i1 = i7; else {
   i5 = i7 + 4 | 0;
   i1 = HEAP32[i5 >> 2] | 0;
   i3 = HEAP32[i1 >> 2] | 0;
   HEAP32[i5 >> 2] = i3;
   if (i3) {
    HEAP32[i3 + 8 >> 2] = i7;
    i2 = HEAP32[i6 >> 2] | 0;
   }
   i5 = i1 + 8 | 0;
   HEAP32[i5 >> 2] = i2;
   i2 = HEAP32[i6 >> 2] | 0;
   HEAP32[((HEAP32[i2 >> 2] | 0) == (i7 | 0) ? i2 : i2 + 4 | 0) >> 2] = i1;
   HEAP32[i1 >> 2] = i7;
   HEAP32[i6 >> 2] = i1;
   i2 = HEAP32[i5 >> 2] | 0;
  }
  HEAP8[i1 + 12 >> 0] = 1;
  HEAP8[i2 + 12 >> 0] = 0;
  i1 = HEAP32[i2 >> 2] | 0;
  i3 = i1 + 4 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  HEAP32[i2 >> 2] = i4;
  if (i4 | 0) HEAP32[i4 + 8 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i1 + 8 >> 2] = HEAP32[i7 >> 2];
  i6 = HEAP32[i7 >> 2] | 0;
  HEAP32[((HEAP32[i6 >> 2] | 0) == (i2 | 0) ? i6 : i6 + 4 | 0) >> 2] = i1;
  HEAP32[i3 >> 2] = i2;
  HEAP32[i7 >> 2] = i1;
  return;
 } else if ((i3 | 0) == 16) {
  if ((HEAP32[i7 >> 2] | 0) == (i1 | 0)) {
   i1 = HEAP32[i7 >> 2] | 0;
   i4 = i1 + 4 | 0;
   i3 = HEAP32[i4 >> 2] | 0;
   HEAP32[i7 >> 2] = i3;
   if (i3) {
    HEAP32[i3 + 8 >> 2] = i7;
    i2 = HEAP32[i6 >> 2] | 0;
   }
   i3 = i1 + 8 | 0;
   HEAP32[i3 >> 2] = i2;
   i5 = HEAP32[i6 >> 2] | 0;
   HEAP32[((HEAP32[i5 >> 2] | 0) == (i7 | 0) ? i5 : i5 + 4 | 0) >> 2] = i1;
   HEAP32[i4 >> 2] = i7;
   HEAP32[i6 >> 2] = i1;
   i3 = HEAP32[i3 >> 2] | 0;
  } else {
   i1 = i7;
   i3 = i2;
  }
  HEAP8[i1 + 12 >> 0] = 1;
  HEAP8[i3 + 12 >> 0] = 0;
  i7 = i3 + 4 | 0;
  i1 = HEAP32[i7 >> 2] | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  HEAP32[i7 >> 2] = i2;
  if (i2 | 0) HEAP32[i2 + 8 >> 2] = i3;
  i7 = i3 + 8 | 0;
  HEAP32[i1 + 8 >> 2] = HEAP32[i7 >> 2];
  i6 = HEAP32[i7 >> 2] | 0;
  HEAP32[((HEAP32[i6 >> 2] | 0) == (i3 | 0) ? i6 : i6 + 4 | 0) >> 2] = i1;
  HEAP32[i1 >> 2] = i3;
  HEAP32[i7 >> 2] = i1;
  return;
 } else if ((i3 | 0) == 23) return;
}

function __ZN11butteraugli12MinSquareValEjjjjPf(i11, i14, i15, i16, i17) {
 i11 = i11 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 i16 = i16 | 0;
 i17 = i17 | 0;
 var i1 = 0, i2 = 0, i3 = 0, d4 = 0.0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i12 = 0, i13 = 0, i18 = 0, i19 = 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = i19;
 if (i11 >>> 0 <= i14 >>> 0) ___assert_fail(10608, 10333, 1323, 10629);
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i18, Math_imul(i16, i15) | 0);
 i12 = (i16 | 0) == 0;
 if (!i12) {
  i10 = i11 - i14 | 0;
  i7 = HEAP32[i18 >> 2] | 0;
  if (!i15) i13 = 12; else {
   i6 = 0;
   do {
    i1 = i6 >>> 0 < i14 >>> 0 ? 0 : i6 - i14 | 0;
    i5 = i10 + i6 | 0;
    i5 = i5 >>> 0 < i16 >>> 0 ? i5 : i16;
    i8 = Math_imul(i1, i15) | 0;
    i1 = i1 + 1 | 0;
    i9 = Math_imul(i6, i15) | 0;
    if (i1 >>> 0 < i5 >>> 0) {
     i3 = 0;
     do {
      i2 = i1;
      d4 = +Math_fround(HEAPF32[i17 + (i3 + i8 << 2) >> 2]);
      do {
       d4 = +_fmin(d4, +Math_fround(HEAPF32[i17 + ((Math_imul(i2, i15) | 0) + i3 << 2) >> 2]));
       i2 = i2 + 1 | 0;
      } while (i2 >>> 0 < i5 >>> 0);
      HEAPF32[i7 + (i3 + i9 << 2) >> 2] = Math_fround(d4);
      i3 = i3 + 1 | 0;
     } while ((i3 | 0) != (i15 | 0));
    } else {
     i1 = 0;
     do {
      HEAP32[i7 + (i1 + i9 << 2) >> 2] = HEAP32[i17 + (i1 + i8 << 2) >> 2];
      i1 = i1 + 1 | 0;
     } while ((i1 | 0) != (i15 | 0));
    }
    i6 = i6 + 1 | 0;
   } while ((i6 | 0) != (i16 | 0));
   i13 = 11;
  }
 } else i13 = 11;
 if ((i13 | 0) == 11) if (i15) {
  i10 = i11 - i14 | 0;
  i1 = HEAP32[i18 >> 2] | 0;
  if (i12) i13 = 20; else {
   i8 = 0;
   do {
    i9 = i8 >>> 0 < i14 >>> 0 ? 0 : i8 - i14 | 0;
    i6 = i10 + i8 | 0;
    i6 = i6 >>> 0 < i15 >>> 0 ? i6 : i15;
    i2 = i9 + 1 | 0;
    if (i2 >>> 0 < i6 >>> 0) {
     i5 = 0;
     do {
      i7 = Math_imul(i5, i15) | 0;
      i3 = i2;
      d4 = +Math_fround(HEAPF32[i1 + (i7 + i9 << 2) >> 2]);
      do {
       d4 = +_fmin(d4, +Math_fround(HEAPF32[i1 + (i3 + i7 << 2) >> 2]));
       i3 = i3 + 1 | 0;
      } while (i3 >>> 0 < i6 >>> 0);
      HEAPF32[i17 + (i7 + i8 << 2) >> 2] = Math_fround(d4);
      i5 = i5 + 1 | 0;
     } while ((i5 | 0) != (i16 | 0));
    } else {
     i2 = 0;
     do {
      i12 = Math_imul(i2, i15) | 0;
      HEAP32[i17 + (i12 + i8 << 2) >> 2] = HEAP32[i1 + (i12 + i9 << 2) >> 2];
      i2 = i2 + 1 | 0;
     } while ((i2 | 0) != (i16 | 0));
    }
    i8 = i8 + 1 | 0;
   } while ((i8 | 0) != (i15 | 0));
  }
 } else i13 = 12;
 if ((i13 | 0) == 12) {
  i1 = HEAP32[i18 >> 2] | 0;
  i13 = 20;
 }
 if ((i13 | 0) == 20) if (!i1) {
  STACKTOP = i19;
  return;
 }
 i2 = i18 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != (i1 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i1 | 0) >>> 2) << 2);
 __ZdlPv(i1);
 STACKTOP = i19;
 return;
}

function __ZN7guetzli20OutputImageComponent5ResetEii(i10, i1, i2) {
 i10 = i10 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i11 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i11;
 HEAP32[i10 + 8 >> 2] = i1;
 HEAP32[i10 + 12 >> 2] = i2;
 i7 = HEAP32[i10 >> 2] | 0;
 i3 = i1 << 3;
 i3 = (i3 + -1 + i7 | 0) / (i3 | 0) | 0;
 HEAP32[i10 + 16 >> 2] = i3;
 i8 = i10 + 4 | 0;
 i1 = i2 << 3;
 i1 = ((HEAP32[i8 >> 2] | 0) + -1 + i1 | 0) / (i1 | 0) | 0;
 HEAP32[i10 + 20 >> 2] = i1;
 i1 = Math_imul(i3, i1) | 0;
 HEAP32[i10 + 24 >> 2] = i1;
 i2 = i1 << 6;
 HEAP32[i9 >> 2] = 0;
 i3 = i9 + 4 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i9 + 8 >> 2] = 0;
 do if (i1) if ((i1 | 0) < 0) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i9);
  i11 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i11);
  ___cxa_throw(i11 | 0, 1784, 8);
 } else {
  i4 = i1 << 7;
  i5 = __Znwj(i4) | 0;
  HEAP32[i9 >> 2] = i5;
  i6 = i5 + (i2 << 1) | 0;
  HEAP32[i9 + 8 >> 2] = i6;
  _memset(i5 | 0, 0, i4 | 0) | 0;
  HEAP32[i3 >> 2] = i6;
  break;
 } else {
  i5 = 0;
  i6 = 0;
 } while (0);
 i4 = i10 + 28 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i3 = i10 + 32 | 0;
 if (!i2) {
  i2 = i10 + 36 | 0;
  i1 = i7;
 } else {
  i1 = HEAP32[i3 >> 2] | 0;
  if ((i1 | 0) != (i2 | 0)) HEAP32[i3 >> 2] = i1 + (~((i1 + -2 - i2 | 0) >>> 1) << 1);
  __ZdlPv(i2);
  i2 = i10 + 36 | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i4 >> 2] = 0;
  i1 = HEAP32[i10 >> 2] | 0;
 }
 HEAP32[i4 >> 2] = i5;
 HEAP32[i3 >> 2] = i6;
 HEAP32[i2 >> 2] = i6;
 i1 = Math_imul(HEAP32[i8 >> 2] | 0, i1) | 0;
 HEAP32[i9 >> 2] = 0;
 i4 = i9 + 4 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i9 + 8 >> 2] = 0;
 if (!i1) {
  i6 = 0;
  i5 = 0;
 } else {
  if ((i1 | 0) < 0) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i9);
   i11 = ___cxa_allocate_exception(4) | 0;
   __ZNSt9bad_allocC2Ev(i11);
   ___cxa_throw(i11 | 0, 1784, 8);
  }
  i2 = __Znwj(i1 << 1) | 0;
  HEAP32[i4 >> 2] = i2;
  HEAP32[i9 >> 2] = i2;
  i6 = i2 + (i1 << 1) | 0;
  HEAP32[i9 + 8 >> 2] = i6;
  i3 = i2;
  i5 = i6;
  while (1) {
   HEAP16[i2 >> 1] = 2048;
   i1 = i1 + -1 | 0;
   if (!i1) break; else i2 = i2 + 2 | 0;
  }
  HEAP32[i4 >> 2] = i6;
  i6 = i3;
 }
 i4 = i10 + 40 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i3 = i10 + 44 | 0;
 if (!i1) i1 = i10 + 48 | 0; else {
  i2 = HEAP32[i3 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) HEAP32[i3 >> 2] = i2 + (~((i2 + -2 - i1 | 0) >>> 1) << 1);
  __ZdlPv(i1);
  i1 = i10 + 48 | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i4 >> 2] = 0;
 }
 HEAP32[i4 >> 2] = i6;
 HEAP32[i3 >> 2] = i5;
 HEAP32[i1 >> 2] = i5;
 i1 = 0;
 do {
  HEAP32[i10 + 52 + (i1 << 2) >> 2] = 1;
  i1 = i1 + 1 | 0;
 } while ((i1 | 0) != 64);
 STACKTOP = i11;
 return;
}

function __ZNSt3__218__insertion_sort_3IRPFbRKN7guetzli11HuffmanTreeES4_EPS2_EEvT0_S9_T_(i6, i7, i8) {
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i10;
 i1 = i6 + 16 | 0;
 i2 = i6 + 8 | 0;
 i4 = FUNCTION_TABLE_iii[HEAP32[i8 >> 2] & 1](i2, i6) | 0;
 i5 = FUNCTION_TABLE_iii[HEAP32[i8 >> 2] & 1](i1, i2) | 0;
 do if (i4) {
  i4 = i6;
  i3 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i4 + 4 >> 2] | 0;
  if (i5) {
   i11 = i1;
   i2 = HEAP32[i11 + 4 >> 2] | 0;
   i5 = i6;
   HEAP32[i5 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i5 + 4 >> 2] = i2;
   i5 = i1;
   HEAP32[i5 >> 2] = i3;
   HEAP32[i5 + 4 >> 2] = i4;
   break;
  }
  i12 = i2;
  i5 = HEAP32[i12 + 4 >> 2] | 0;
  i11 = i6;
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i11 + 4 >> 2] = i5;
  i11 = i2;
  HEAP32[i11 >> 2] = i3;
  HEAP32[i11 + 4 >> 2] = i4;
  if (FUNCTION_TABLE_iii[HEAP32[i8 >> 2] & 1](i1, i2) | 0) {
   i11 = i2;
   i5 = HEAP32[i11 >> 2] | 0;
   i11 = HEAP32[i11 + 4 >> 2] | 0;
   i3 = i1;
   i4 = HEAP32[i3 + 4 >> 2] | 0;
   i12 = i2;
   HEAP32[i12 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i12 + 4 >> 2] = i4;
   i12 = i1;
   HEAP32[i12 >> 2] = i5;
   HEAP32[i12 + 4 >> 2] = i11;
  }
 } else if (i5 ? (i11 = i2, i5 = HEAP32[i11 >> 2] | 0, i11 = HEAP32[i11 + 4 >> 2] | 0, i3 = i1, i4 = HEAP32[i3 + 4 >> 2] | 0, i12 = i2, HEAP32[i12 >> 2] = HEAP32[i3 >> 2], HEAP32[i12 + 4 >> 2] = i4, i12 = i1, HEAP32[i12 >> 2] = i5, HEAP32[i12 + 4 >> 2] = i11, FUNCTION_TABLE_iii[HEAP32[i8 >> 2] & 1](i2, i6) | 0) : 0) {
  i11 = i6;
  i5 = HEAP32[i11 >> 2] | 0;
  i11 = HEAP32[i11 + 4 >> 2] | 0;
  i3 = i2;
  i4 = HEAP32[i3 + 4 >> 2] | 0;
  i12 = i6;
  HEAP32[i12 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i12 + 4 >> 2] = i4;
  i12 = i2;
  HEAP32[i12 >> 2] = i5;
  HEAP32[i12 + 4 >> 2] = i11;
 } while (0);
 i2 = i6 + 24 | 0;
 if ((i2 | 0) == (i7 | 0)) {
  STACKTOP = i10;
  return;
 }
 while (1) {
  if (FUNCTION_TABLE_iii[HEAP32[i8 >> 2] & 1](i2, i1) | 0) {
   i11 = i2;
   i12 = HEAP32[i11 + 4 >> 2] | 0;
   i3 = i9;
   HEAP32[i3 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i3 + 4 >> 2] = i12;
   i3 = i2;
   while (1) {
    i5 = i1;
    i11 = HEAP32[i5 + 4 >> 2] | 0;
    i12 = i3;
    HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
    HEAP32[i12 + 4 >> 2] = i11;
    if ((i1 | 0) == (i6 | 0)) break;
    i3 = i1 + -8 | 0;
    if (FUNCTION_TABLE_iii[HEAP32[i8 >> 2] & 1](i9, i3) | 0) {
     i12 = i1;
     i1 = i3;
     i3 = i12;
    } else break;
   }
   i5 = i9;
   i11 = HEAP32[i5 + 4 >> 2] | 0;
   i12 = i1;
   HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i12 + 4 >> 2] = i11;
  }
  i1 = i2 + 8 | 0;
  if ((i1 | 0) == (i7 | 0)) break; else {
   i12 = i2;
   i2 = i1;
   i1 = i12;
  }
 }
 STACKTOP = i10;
 return;
}

function __ZN12_GLOBAL__N_110Convolve2XERKNSt3__26vectorIfNS0_9allocatorIfEEEEiiPKdid(i15, i1, i16, i17, i12, i13, d14) {
 i15 = i15 | 0;
 i1 = i1 | 0;
 i16 = i16 | 0;
 i17 = i17 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 d14 = +d14;
 var i2 = 0, f3 = f0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i18 = 0, i19 = 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i19;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i9, i1);
 i18 = (i13 | 0) / 2 | 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = HEAP32[i1 >> 2] | 0;
 i5 = i1;
 L1 : do if ((i2 | 0) != (i1 | 0)) {
  i6 = i2 - i1 >> 2;
  i7 = i13 - i18 | 0;
  i8 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) > 0) i1 = 0; else {
   f3 = Math_fround(d14 * 0.0);
   i1 = 0;
   while (1) {
    i11 = (i1 | 0) % (i16 | 0) | 0;
    if (!((i11 | 0) < (i18 | 0) | (i7 + i11 | 0) > (i16 | 0))) HEAPF32[i8 + (i1 << 2) >> 2] = f3;
    i1 = i1 + 1 | 0;
    if (i1 >>> 0 >= i6 >>> 0) break L1;
   }
  }
  do {
   i11 = (i1 | 0) % (i16 | 0) | 0;
   if (!((i11 | 0) < (i18 | 0) | (i7 + i11 | 0) > (i16 | 0))) {
    i4 = i1 - i18 | 0;
    f3 = Math_fround(0.0);
    i2 = 0;
    do {
     f3 = Math_fround(+f3 + +HEAPF64[i12 + (i2 << 3) >> 3] * +Math_fround(HEAPF32[i5 + (i4 + i2 << 2) >> 2]));
     i2 = i2 + 1 | 0;
    } while ((i2 | 0) != (i13 | 0));
    HEAPF32[i8 + (i1 << 2) >> 2] = Math_fround(+f3 * d14);
   }
   i1 = i1 + 1 | 0;
  } while (i1 >>> 0 < i6 >>> 0);
 } while (0);
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i15, i9);
 i11 = i9 + 4 | 0;
 i1 = HEAP32[i11 >> 2] | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 i9 = i8;
 i10 = i1;
 L19 : do if ((i1 | 0) != (i8 | 0)) {
  i6 = i1 - i8 >> 2;
  i7 = i13 - i18 | 0;
  if ((i13 | 0) > 0) i4 = 0; else {
   f3 = Math_fround(d14 * 0.0);
   i1 = 0;
   while (1) {
    i13 = (i1 | 0) / (i16 | 0) | 0;
    if (!((i13 | 0) < (i18 | 0) | (i7 + i13 | 0) > (i17 | 0))) HEAPF32[(HEAP32[i15 >> 2] | 0) + (i1 << 2) >> 2] = f3;
    i1 = i1 + 1 | 0;
    if (i1 >>> 0 >= i6 >>> 0) break L19;
   }
  }
  do {
   i5 = (i4 | 0) % (i16 | 0) | 0;
   i1 = (i4 | 0) / (i16 | 0) | 0;
   if (!((i1 | 0) < (i18 | 0) | (i7 + i1 | 0) > (i17 | 0))) {
    i2 = i1 - i18 | 0;
    i1 = 0;
    f3 = Math_fround(0.0);
    do {
     f3 = Math_fround(+f3 + +HEAPF64[i12 + (i1 << 3) >> 3] * +Math_fround(HEAPF32[i9 + ((Math_imul(i2 + i1 | 0, i16) | 0) + i5 << 2) >> 2]));
     i1 = i1 + 1 | 0;
    } while ((i1 | 0) != (i13 | 0));
    f3 = Math_fround(+f3 * d14);
    HEAPF32[(HEAP32[i15 >> 2] | 0) + (i4 << 2) >> 2] = f3;
   }
   i4 = i4 + 1 | 0;
  } while (i4 >>> 0 < i6 >>> 0);
 } while (0);
 if (!i8) {
  STACKTOP = i19;
  return;
 }
 if ((i10 | 0) != (i9 | 0)) HEAP32[i11 >> 2] = i10 + (~((i10 + -4 - i8 | 0) >>> 2) << 2);
 __ZdlPv(i8);
 STACKTOP = i19;
 return;
}

function __ZNSt3__26vectorIN11butteraugli5ImageIfEENS_9allocatorIS3_EEE24__emplace_back_slow_pathIJRKjS9_EEEvDpOT_(i14, i5, i6) {
 i14 = i14 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i15 = 0;
 i15 = i14 + 4 | 0;
 i2 = HEAP32[i15 >> 2] | 0;
 i1 = HEAP32[i14 >> 2] | 0;
 i4 = ((i2 - i1 | 0) / 20 | 0) + 1 | 0;
 if (i4 >>> 0 > 214748364) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i14);
  i3 = HEAP32[i14 >> 2] | 0;
  i2 = HEAP32[i15 >> 2] | 0;
 } else i3 = i1;
 i1 = i2;
 i11 = i3;
 i13 = i14 + 8 | 0;
 i12 = ((HEAP32[i13 >> 2] | 0) - i3 | 0) / 20 | 0;
 i7 = i12 << 1;
 i4 = i12 >>> 0 < 107374182 ? (i7 >>> 0 < i4 >>> 0 ? i4 : i7) : 214748364;
 i7 = (i2 - i3 | 0) / 20 | 0;
 do if (i4) if (i4 >>> 0 > 214748364) {
  i15 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i15);
  ___cxa_throw(i15 | 0, 1784, 8);
 } else {
  i8 = __Znwj(i4 * 20 | 0) | 0;
  break;
 } else i8 = 0; while (0);
 i9 = i8 + (i7 * 20 | 0) | 0;
 i3 = i9;
 i12 = i8 + (i4 * 20 | 0) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i9 >> 2] = i4;
 HEAP32[i8 + (i7 * 20 | 0) + 4 >> 2] = i5;
 i4 = (i4 << 2) + 95 | 0;
 i6 = i4 & -64;
 i6 = (i4 & 1984 | 0) == 0 ? i6 + 64 | 0 : i6;
 HEAP32[i8 + (i7 * 20 | 0) + 8 >> 2] = i6;
 i4 = i8 + (i7 * 20 | 0) + 12 | 0;
 i5 = _malloc((Math_imul(i6, i5) | 0) + 64 | 0) | 0;
 do if (i5) {
  i6 = i5;
  if (!(i6 & 3)) {
   i10 = i5 + 64 + (0 - (i6 & 63)) | 0;
   i6 = i10 + -4 | 0;
   HEAP8[i6 >> 0] = i5;
   HEAP8[i6 + 1 >> 0] = i5 >> 8;
   HEAP8[i6 + 2 >> 0] = i5 >> 16;
   HEAP8[i6 + 3 >> 0] = i5 >> 24;
   break;
  } else ___assert_fail(10300, 10333, 59, 10363);
 } else i10 = 0; while (0);
 HEAP32[i4 >> 2] = i10;
 HEAP32[i8 + (i7 * 20 | 0) + 16 >> 2] = 10;
 i5 = i9 + 20 | 0;
 if ((i1 | 0) == (i11 | 0)) i4 = i2; else {
  i2 = i9;
  do {
   i10 = i1;
   i1 = i1 + -20 | 0;
   HEAP32[i2 + -20 >> 2] = HEAP32[i1 >> 2];
   HEAP32[i2 + -16 >> 2] = HEAP32[i10 + -16 >> 2];
   HEAP32[i2 + -12 >> 2] = HEAP32[i10 + -12 >> 2];
   i8 = i10 + -8 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i10 = HEAP32[i10 + -4 >> 2] | 0;
   HEAP32[i2 + -8 >> 2] = i9;
   HEAP32[i2 + -4 >> 2] = i10;
   i2 = i3 + -20 | 0;
   i3 = i2;
  } while ((i1 | 0) != (i11 | 0));
  i4 = HEAP32[i14 >> 2] | 0;
  i1 = HEAP32[i15 >> 2] | 0;
 }
 HEAP32[i14 >> 2] = i3;
 HEAP32[i15 >> 2] = i5;
 HEAP32[i13 >> 2] = i12;
 i3 = i4;
 if ((i1 | 0) != (i3 | 0)) do {
  i15 = i1 + -8 | 0;
  i2 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = 0;
  if (i2 | 0) FUNCTION_TABLE_vi[HEAP32[i1 + -4 >> 2] & 15](i2);
  i1 = i1 + -20 | 0;
 } while ((i1 | 0) != (i3 | 0));
 if (!i4) return;
 __ZdlPv(i4);
 return;
}

function _GuetzliFromJPG(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = 0.0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i5 = i9 + 212 | 0;
 i6 = i9 + 200 | 0;
 i2 = i9 + 184 | 0;
 i7 = i9 + 152 | 0;
 i8 = i9;
 i3 = _fopen(10748, 10755) | 0;
 if (!i3) {
  _fwrite(10758, 22, 1, HEAP32[2032] | 0) | 0;
  i8 = 1;
  STACKTOP = i9;
  return i8 | 0;
 }
 __Z13ReadFileOrDieP8_IO_FILE(i5, i3);
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = 0;
 HEAP8[i2 + 4 >> 0] = 1;
 HEAP8[i2 + 5 >> 0] = 0;
 HEAP8[i2 + 6 >> 0] = 0;
 HEAP8[i2 + 7 >> 0] = 0;
 HEAP32[i2 + 8 >> 2] = 3;
 HEAP8[i2 + 12 >> 0] = 1;
 d11 = +(i1 >>> 0);
 d11 = d11 < 70.0 ? 70.0 : d11;
 d11 = d11 > 110.0 ? 110.0 : d11;
 i4 = ~~d11;
 d11 = d11 - +(i4 | 0);
 HEAPF32[i2 >> 2] = Math_fround((1.0 - d11) * +HEAPF64[1024 + (i4 + -70 << 3) >> 3] + d11 * +HEAPF64[1024 + (i4 + -69 << 3) >> 3]);
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i7 + 8 >> 2] = 0;
 i4 = i7 + 4 | 0;
 HEAP32[i7 >> 2] = i4;
 i1 = i7 + 12 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i7 + 16 >> 2] = HEAP32[2125];
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = 1;
 HEAP32[i8 + 16 >> 2] = 1;
 _memset(i8 + 20 | 0, 0, 132) | 0;
 i1 = HEAP8[i5 + 11 >> 0] | 0;
 i10 = i1 << 24 >> 24 < 0;
 do if (__ZN7guetzli8ReadJpegEPKhjNS_12JpegReadModeEPNS_8JPEGDataE(i10 ? HEAP32[i5 >> 2] | 0 : i5, i10 ? HEAP32[i5 + 4 >> 2] | 0 : i1 & 255, 0, i8) | 0) {
  if (!(__ZN7guetzli7ProcessERKNS_6ParamsEPNS_12ProcessStatsERKNSt3__212basic_stringIcNS5_11char_traitsIcEENS5_9allocatorIcEEEEPSB_(i2, i7, i5, i6) | 0)) {
   _fwrite(10674, 26, 1, HEAP32[2032] | 0) | 0;
   i1 = 1;
   break;
  }
  _fclose(i3) | 0;
  i1 = _fopen(10701, 10709) | 0;
  if (!i1) {
   _fwrite(10712, 35, 1, HEAP32[2032] | 0) | 0;
   i1 = 1;
   break;
  } else {
   __Z14WriteFileOrDieP8_IO_FILERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE(i1, i6);
   i1 = 0;
   break;
  }
 } else {
  _fwrite(10781, 39, 1, HEAP32[2032] | 0) | 0;
  i1 = 1;
 } while (0);
 __ZN7guetzli8JPEGDataD2Ev(i8);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i7 + 20 | 0);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(i7, HEAP32[i4 >> 2] | 0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i6);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i5);
 i10 = i1;
 STACKTOP = i9;
 return i10 | 0;
}

function __ZNSt3__26vectorINS0_INS0_IfNS_9allocatorIfEEEENS1_IS3_EEEENS1_IS5_EEE8__appendEj(i9, i7) {
 i9 = i9 | 0;
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i10 = 0, i11 = 0, i12 = 0;
 i10 = i9 + 8 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i11 = i9 + 4 | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 i3 = i4;
 if (((i2 - i4 | 0) / 12 | 0) >>> 0 >= i7 >>> 0) {
  _memset(i4 | 0, 0, i7 * 12 | 0) | 0;
  HEAP32[i11 >> 2] = i3 + (i7 * 12 | 0);
  return;
 }
 i1 = HEAP32[i9 >> 2] | 0;
 i5 = ((i4 - i1 | 0) / 12 | 0) + i7 | 0;
 if (i5 >>> 0 > 357913941) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i9);
  i3 = HEAP32[i11 >> 2] | 0;
  i1 = HEAP32[i9 >> 2] | 0;
  i2 = HEAP32[i10 >> 2] | 0;
  i4 = i3;
 }
 i8 = i1;
 i6 = (i2 - i1 | 0) / 12 | 0;
 i2 = i6 << 1;
 i5 = i6 >>> 0 < 178956970 ? (i2 >>> 0 < i5 >>> 0 ? i5 : i2) : 357913941;
 i2 = (i4 - i1 | 0) / 12 | 0;
 do if (i5) if (i5 >>> 0 > 357913941) {
  i11 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i11);
  ___cxa_throw(i11 | 0, 1784, 8);
 } else {
  i4 = __Znwj(i5 * 12 | 0) | 0;
  break;
 } else i4 = 0; while (0);
 i6 = i4 + (i2 * 12 | 0) | 0;
 i2 = i6;
 i5 = i4 + (i5 * 12 | 0) | 0;
 _memset(i6 | 0, 0, i7 * 12 | 0) | 0;
 i4 = i6 + (i7 * 12 | 0) | 0;
 if ((i3 | 0) == (i8 | 0)) {
  i8 = i1;
  i1 = i3;
 } else {
  i1 = i6;
  do {
   i7 = i1 + -12 | 0;
   i6 = i3;
   i3 = i3 + -12 | 0;
   HEAP32[i7 >> 2] = 0;
   i12 = i1 + -8 | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i1 + -4 >> 2] = 0;
   HEAP32[i7 >> 2] = HEAP32[i3 >> 2];
   i7 = i6 + -8 | 0;
   HEAP32[i12 >> 2] = HEAP32[i7 >> 2];
   i6 = i6 + -4 | 0;
   HEAP32[i1 + -4 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i6 >> 2] = 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i3 >> 2] = 0;
   i1 = i2 + -12 | 0;
   i2 = i1;
  } while ((i3 | 0) != (i8 | 0));
  i8 = HEAP32[i9 >> 2] | 0;
  i1 = HEAP32[i11 >> 2] | 0;
 }
 HEAP32[i9 >> 2] = i2;
 HEAP32[i11 >> 2] = i4;
 HEAP32[i10 >> 2] = i5;
 i7 = i8;
 if ((i1 | 0) != (i7 | 0)) {
  i6 = i1;
  do {
   i2 = i6;
   i6 = i6 + -12 | 0;
   i1 = HEAP32[i6 >> 2] | 0;
   if (i1 | 0) {
    i5 = i2 + -8 | 0;
    i2 = HEAP32[i5 >> 2] | 0;
    if ((i2 | 0) != (i1 | 0)) {
     do {
      i3 = i2 + -12 | 0;
      HEAP32[i5 >> 2] = i3;
      i4 = HEAP32[i3 >> 2] | 0;
      if (!i4) i2 = i3; else {
       i2 = i2 + -8 | 0;
       i3 = HEAP32[i2 >> 2] | 0;
       if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
       __ZdlPv(i4);
       i2 = HEAP32[i5 >> 2] | 0;
      }
     } while ((i2 | 0) != (i1 | 0));
     i1 = HEAP32[i6 >> 2] | 0;
    }
    __ZdlPv(i1);
   }
  } while ((i6 | 0) != (i7 | 0));
 }
 if (!i8) return;
 __ZdlPv(i8);
 return;
}

function __ZNSt3__26vectorIN7guetzli12JPEGScanInfoENS_9allocatorIS2_EEE21__push_back_slow_pathIRKS2_EEvOT_(i9, i6) {
 i9 = i9 | 0;
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i10 = i9 + 4 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i3 = ((i2 - i1 | 0) / 28 | 0) + 1 | 0;
 if (i3 >>> 0 > 153391689) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i9);
  i1 = HEAP32[i9 >> 2] | 0;
  i2 = HEAP32[i10 >> 2] | 0;
 }
 i8 = i9 + 8 | 0;
 i7 = ((HEAP32[i8 >> 2] | 0) - i1 | 0) / 28 | 0;
 i5 = i7 << 1;
 i5 = i7 >>> 0 < 76695844 ? (i5 >>> 0 < i3 >>> 0 ? i3 : i5) : 153391689;
 i1 = (i2 - i1 | 0) / 28 | 0;
 do if (i5) if (i5 >>> 0 > 153391689) {
  i10 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i10);
  ___cxa_throw(i10 | 0, 1784, 8);
 } else {
  i4 = __Znwj(i5 * 28 | 0) | 0;
  break;
 } else i4 = 0; while (0);
 i2 = i4 + (i1 * 28 | 0) | 0;
 i3 = i2;
 i7 = i4 + (i5 * 28 | 0) | 0;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 __ZNSt3__26vectorIN7guetzli21JPEGComponentScanInfoENS_9allocatorIS2_EEEC2ERKS5_(i4 + (i1 * 28 | 0) + 16 | 0, i6 + 16 | 0);
 i5 = i2 + 28 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 if ((i1 | 0) == (i4 | 0)) {
  i2 = i3;
  i6 = i4;
  i1 = i4;
 } else {
  do {
   i11 = i2 + -28 | 0;
   i12 = i1;
   i1 = i1 + -28 | 0;
   HEAP32[i11 >> 2] = HEAP32[i1 >> 2];
   HEAP32[i11 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
   HEAP32[i11 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
   HEAP32[i11 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
   i11 = i2 + -12 | 0;
   i6 = i12 + -12 | 0;
   HEAP32[i11 >> 2] = 0;
   i13 = i2 + -8 | 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i2 + -4 >> 2] = 0;
   HEAP32[i11 >> 2] = HEAP32[i6 >> 2];
   i11 = i12 + -8 | 0;
   HEAP32[i13 >> 2] = HEAP32[i11 >> 2];
   i12 = i12 + -4 | 0;
   HEAP32[i2 + -4 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i12 >> 2] = 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i6 >> 2] = 0;
   i2 = i3 + -28 | 0;
   i3 = i2;
  } while ((i1 | 0) != (i4 | 0));
  i2 = i3;
  i6 = HEAP32[i9 >> 2] | 0;
  i1 = HEAP32[i10 >> 2] | 0;
 }
 HEAP32[i9 >> 2] = i2;
 HEAP32[i10 >> 2] = i5;
 HEAP32[i8 >> 2] = i7;
 i5 = i6;
 if ((i1 | 0) != (i5 | 0)) do {
  i2 = HEAP32[i1 + -12 >> 2] | 0;
  if (i2 | 0) {
   i3 = i1 + -8 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) != (i2 | 0)) HEAP32[i3 >> 2] = i4 + (~(((i4 + -12 - i2 | 0) >>> 0) / 12 | 0) * 12 | 0);
   __ZdlPv(i2);
  }
  i1 = i1 + -28 | 0;
 } while ((i1 | 0) != (i5 | 0));
 if (!i6) return;
 __ZdlPv(i6);
 return;
}

function __ZN11butteraugliL16PackedFromPlanesIfEENSt3__26vectorINS2_IT_NS1_9allocatorIS3_EEEENS4_IS6_EEEERKNS2_INS_5ImageIS3_EENS4_ISA_EEEE(i15, i1) {
 i15 = i15 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i19 = i20;
 i18 = i20 + 8 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i4 = i1 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == (i3 | 0)) ___assert_fail(14801, 14817, 385, 14846);
 i16 = Math_imul(HEAP32[i2 + 4 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0;
 HEAP32[i15 >> 2] = 0;
 i17 = i15 + 4 | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i15 + 8 >> 2] = 0;
 __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEE7reserveEj(i15, (i3 - i2 | 0) / 20 | 0);
 i1 = HEAP32[i1 >> 2] | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == (i11 | 0)) {
  STACKTOP = i20;
  return;
 }
 i12 = i15 + 8 | 0;
 i13 = i18 + 4 | 0;
 i14 = i18 + 8 | 0;
 L7 : while (1) {
  __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i18, i16);
  i2 = HEAP32[i17 >> 2] | 0;
  if (i2 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
   __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEE21__push_back_slow_pathIS3_EEvOT_(i15, i18);
   i2 = HEAP32[i18 >> 2] | 0;
   if (i2 | 0) {
    i3 = HEAP32[i13 >> 2] | 0;
    if ((i3 | 0) != (i2 | 0)) HEAP32[i13 >> 2] = i3 + (~((i3 + -4 - i2 | 0) >>> 2) << 2);
    __ZdlPv(i2);
   }
  } else {
   HEAP32[i2 >> 2] = 0;
   i10 = i2 + 4 | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i2 + 8 >> 2] = 0;
   HEAP32[i2 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i10 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i2 + 8 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i14 >> 2] = 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i18 >> 2] = 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 12;
  }
  i2 = HEAP32[i1 >> 2] | 0;
  i3 = i1 + 4 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  L17 : do if (i4 | 0) {
   i5 = i1 + 12 | 0;
   i6 = i1 + 8 | 0;
   i7 = (HEAP32[i17 >> 2] | 0) + -12 | 0;
   i8 = i2 << 2;
   i9 = 0;
   while (1) {
    i10 = (HEAP32[i5 >> 2] | 0) + (Math_imul(HEAP32[i6 >> 2] | 0, i9) | 0) | 0;
    _memcpy((HEAP32[i7 >> 2] | 0) + ((Math_imul(i9, i2) | 0) << 2) | 0, i10 | 0, i8 | 0) | 0;
    i9 = i9 + 1 | 0;
    if (i9 >>> 0 >= i4 >>> 0) break L17;
    i10 = HEAP32[i3 >> 2] | 0;
    if (i10 >>> 0 <= i9 >>> 0) {
     i1 = 14;
     break L7;
    }
   }
  } while (0);
  i1 = i1 + 20 | 0;
  if ((i1 | 0) == (i11 | 0)) {
   i1 = 5;
   break;
  }
 }
 if ((i1 | 0) == 5) {
  STACKTOP = i20;
  return;
 } else if ((i1 | 0) == 14) {
  HEAP32[i19 >> 2] = i9;
  HEAP32[i19 + 4 >> 2] = i10;
  _printf(14863, i19) | 0;
  _abort();
 }
}

function __ZN7guetzli7ProcessERKNS_6ParamsEPNS_12ProcessStatsERKNSt3__26vectorIhNS5_9allocatorIhEEEEiiPNS5_12basic_stringIcNS5_11char_traitsIcEENS7_IcEEEE(i8, i3, i4, i1, i2, i9) {
 i8 = i8 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i9 = i9 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i11 = i13 + 72 | 0;
 i12 = i13;
 i10 = i13 + 40 | 0;
 HEAP32[i11 >> 2] = 0;
 i6 = i11 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i11 + 8 >> 2] = 0;
 HEAP32[i11 + 12 >> 2] = 1;
 HEAP32[i11 + 16 >> 2] = 1;
 _memset(i11 + 20 | 0, 0, 132) | 0;
 if (!(__ZN7guetzli15EncodeRGBToJpegERKNSt3__26vectorIhNS0_9allocatorIhEEEEiiPKiPNS_8JPEGDataE(i4, i1, i2, 1880, i11) | 0)) {
  _fwrite(10257, 42, 1, HEAP32[2032] | 0) | 0;
  i12 = 0;
  __ZN7guetzli8JPEGDataD2Ev(i11);
  STACKTOP = i13;
  return i12 | 0;
 };
 HEAP32[i12 >> 2] = 0;
 HEAP32[i12 + 4 >> 2] = 0;
 HEAP32[i12 + 8 >> 2] = 0;
 HEAP32[i12 + 12 >> 2] = 0;
 HEAP32[i12 + 16 >> 2] = 0;
 HEAP32[i12 + 20 >> 2] = 0;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i10 + 8 >> 2] = 0;
 i7 = i10 + 4 | 0;
 HEAP32[i10 >> 2] = i7;
 i1 = i10 + 12 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 i3 = (i3 | 0) == 0 ? i10 : i3;
 i1 = HEAP32[i11 >> 2] | 0;
 if ((i1 | 0) > 31 ? (i5 = HEAP32[i6 >> 2] | 0, (i5 | 0) > 31) : 0) {
  i6 = __Znwj(96) | 0;
  __ZN7guetzli21ButteraugliComparatorC2EiiRKNSt3__26vectorIhNS1_9allocatorIhEEEEfPNS_12ProcessStatsE(i6, i1, i5, i4, Math_fround(HEAPF32[i8 >> 2]), i3);
  i1 = i6;
 } else i1 = 0;
 i2 = i1;
 i4 = __ZN7guetzli15ProcessJpegDataERKNS_6ParamsERKNS_8JPEGDataEPNS_10ComparatorEPNS_13GuetzliOutputEPNS_12ProcessStatsE(i8, i11, i2, i12, i3) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i9, i12) | 0;
 if (i1 | 0) FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i2);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i10 + 20 | 0);
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(i10, HEAP32[i7 >> 2] | 0);
 i1 = HEAP32[i12 + 12 >> 2] | 0;
 if (i1 | 0) {
  i2 = i12 + 16 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != (i1 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i1 | 0) >>> 2) << 2);
  __ZdlPv(i1);
 }
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i12);
 i12 = i4;
 __ZN7guetzli8JPEGDataD2Ev(i11);
 STACKTOP = i13;
 return i12 | 0;
}

function __ZNSt3__26vectorIN7guetzli14JPEGQuantTableENS_9allocatorIS2_EEE21__push_back_slow_pathIRKS2_EEvOT_(i9, i6) {
 i9 = i9 | 0;
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0, i10 = 0, i11 = 0, i12 = 0;
 i10 = i9 + 4 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i3 = ((i2 - i1 | 0) / 24 | 0) + 1 | 0;
 if (i3 >>> 0 > 178956970) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i9);
  i1 = HEAP32[i9 >> 2] | 0;
  i2 = HEAP32[i10 >> 2] | 0;
 }
 i8 = i9 + 8 | 0;
 i7 = ((HEAP32[i8 >> 2] | 0) - i1 | 0) / 24 | 0;
 i5 = i7 << 1;
 i5 = i7 >>> 0 < 89478485 ? (i5 >>> 0 < i3 >>> 0 ? i3 : i5) : 178956970;
 i1 = (i2 - i1 | 0) / 24 | 0;
 do if (i5) if (i5 >>> 0 > 178956970) {
  i10 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i10);
  ___cxa_throw(i10 | 0, 1784, 8);
 } else {
  i4 = __Znwj(i5 * 24 | 0) | 0;
  break;
 } else i4 = 0; while (0);
 i2 = i4 + (i1 * 24 | 0) | 0;
 i3 = i2;
 i7 = i4 + (i5 * 24 | 0) | 0;
 __ZNSt3__26vectorIiNS_9allocatorIiEEEC2ERKS3_(i2, i6);
 i5 = i4 + (i1 * 24 | 0) + 12 | 0;
 i4 = i6 + 12 | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP8[i5 + 8 >> 0] = HEAP8[i4 + 8 >> 0] | 0;
 i5 = i2 + 24 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 if ((i1 | 0) == (i4 | 0)) {
  i1 = i3;
  i6 = i4;
  i3 = i4;
 } else {
  do {
   i6 = i2 + -24 | 0;
   i11 = i1;
   i1 = i1 + -24 | 0;
   HEAP32[i6 >> 2] = 0;
   i12 = i2 + -20 | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i2 + -16 >> 2] = 0;
   HEAP32[i6 >> 2] = HEAP32[i1 >> 2];
   i6 = i11 + -20 | 0;
   HEAP32[i12 >> 2] = HEAP32[i6 >> 2];
   i12 = i11 + -16 | 0;
   HEAP32[i2 + -16 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i12 >> 2] = 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i1 >> 2] = 0;
   i6 = i2 + -12 | 0;
   i11 = i11 + -12 | 0;
   HEAP32[i6 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i6 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
   HEAP8[i6 + 8 >> 0] = HEAP8[i11 + 8 >> 0] | 0;
   i2 = i3 + -24 | 0;
   i3 = i2;
  } while ((i1 | 0) != (i4 | 0));
  i1 = i3;
  i6 = HEAP32[i9 >> 2] | 0;
  i3 = HEAP32[i10 >> 2] | 0;
 }
 HEAP32[i9 >> 2] = i1;
 HEAP32[i10 >> 2] = i5;
 HEAP32[i8 >> 2] = i7;
 i5 = i6;
 if ((i3 | 0) != (i5 | 0)) do {
  i1 = i3;
  i3 = i3 + -24 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if (i4 | 0) {
   i1 = i1 + -20 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 | 0) != (i4 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i4 | 0) >>> 2) << 2);
   __ZdlPv(i4);
  }
 } while ((i3 | 0) != (i5 | 0));
 if (!i6) return;
 __ZdlPv(i6);
 return;
}

function __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEE8__appendEjRKS3_(i9, i2, i8) {
 i9 = i9 | 0;
 i2 = i2 | 0;
 i8 = i8 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i10 = 0, i11 = 0, i12 = 0;
 i10 = i9 + 8 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 i11 = i9 + 4 | 0;
 i1 = HEAP32[i11 >> 2] | 0;
 if (((i4 - i1 | 0) / 12 | 0) >>> 0 >= i2 >>> 0) {
  do {
   __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i1, i8);
   i1 = (HEAP32[i11 >> 2] | 0) + 12 | 0;
   HEAP32[i11 >> 2] = i1;
   i2 = i2 + -1 | 0;
  } while ((i2 | 0) != 0);
  return;
 }
 i3 = HEAP32[i9 >> 2] | 0;
 i5 = ((i1 - i3 | 0) / 12 | 0) + i2 | 0;
 if (i5 >>> 0 > 357913941) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i9);
  i3 = HEAP32[i9 >> 2] | 0;
  i4 = HEAP32[i10 >> 2] | 0;
  i1 = HEAP32[i11 >> 2] | 0;
 }
 i6 = (i4 - i3 | 0) / 12 | 0;
 i7 = i6 << 1;
 i5 = i6 >>> 0 < 178956970 ? (i7 >>> 0 < i5 >>> 0 ? i5 : i7) : 357913941;
 i1 = (i1 - i3 | 0) / 12 | 0;
 do if (i5) if (i5 >>> 0 > 357913941) {
  i11 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i11);
  ___cxa_throw(i11 | 0, 1784, 8);
 } else {
  i4 = __Znwj(i5 * 12 | 0) | 0;
  break;
 } else i4 = 0; while (0);
 i6 = i4 + (i1 * 12 | 0) | 0;
 i3 = i6;
 i7 = i4 + (i5 * 12 | 0) | 0;
 i5 = i3;
 i1 = i6;
 do {
  __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i1, i8);
  i1 = i5 + 12 | 0;
  i5 = i1;
  i2 = i2 + -1 | 0;
 } while ((i2 | 0) != 0);
 i4 = HEAP32[i9 >> 2] | 0;
 i1 = HEAP32[i11 >> 2] | 0;
 if ((i1 | 0) == (i4 | 0)) {
  i1 = i3;
  i6 = i4;
  i3 = i4;
 } else {
  i2 = i6;
  do {
   i8 = i2 + -12 | 0;
   i6 = i1;
   i1 = i1 + -12 | 0;
   HEAP32[i8 >> 2] = 0;
   i12 = i2 + -8 | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i2 + -4 >> 2] = 0;
   HEAP32[i8 >> 2] = HEAP32[i1 >> 2];
   i8 = i6 + -8 | 0;
   HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
   i6 = i6 + -4 | 0;
   HEAP32[i2 + -4 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i6 >> 2] = 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i1 >> 2] = 0;
   i2 = i3 + -12 | 0;
   i3 = i2;
  } while ((i1 | 0) != (i4 | 0));
  i1 = i3;
  i6 = HEAP32[i9 >> 2] | 0;
  i3 = HEAP32[i11 >> 2] | 0;
 }
 HEAP32[i9 >> 2] = i1;
 HEAP32[i11 >> 2] = i5;
 HEAP32[i10 >> 2] = i7;
 i5 = i6;
 if ((i3 | 0) != (i5 | 0)) do {
  i1 = i3;
  i3 = i3 + -12 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if (i4 | 0) {
   i1 = i1 + -8 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 | 0) != (i4 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i4 | 0) >>> 2) << 2);
   __ZdlPv(i4);
  }
 } while ((i3 | 0) != (i5 | 0));
 if (!i6) return;
 __ZdlPv(i6);
 return;
}

function __ZN12_GLOBAL__N_15ErodeEiiPNSt3__26vectorIbNS0_9allocatorIbEEEE(i10, i11, i12) {
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i13 = 0, i14 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i14 + 40 | 0;
 i2 = i14 + 32 | 0;
 i4 = i14 + 24 | 0;
 i5 = i14 + 16 | 0;
 i13 = i14;
 HEAP32[i13 >> 2] = 0;
 i6 = i13 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i13 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i1 = i12 + 4 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 if (i8 | 0) {
  if ((i8 | 0) < 0) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i13);
   i1 = HEAP32[i1 >> 2] | 0;
  } else i1 = i8;
  i8 = ((i8 + -1 | 0) >>> 5) + 1 | 0;
  HEAP32[i13 >> 2] = __Znwj(i8 << 2) | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i7 >> 2] = i8;
  i8 = HEAP32[i12 >> 2] | 0;
  HEAP32[i4 >> 2] = i8;
  HEAP32[i4 + 4 >> 2] = 0;
  HEAP32[i5 >> 2] = i8 + (i1 >>> 5 << 2);
  HEAP32[i5 + 4 >> 2] = i1 & 31;
  HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
  HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
  __ZNSt3__26vectorIbNS_9allocatorIbEEE18__construct_at_endINS_14__bit_iteratorIS3_Lb1ELj0EEEEENS_9enable_ifIXsr21__is_forward_iteratorIT_EE5valueEvE4typeES8_S8_(i13, i2, i3);
 }
 if ((i11 | 0) > 2) {
  i1 = HEAP32[i13 >> 2] | 0;
  if ((i10 | 0) > 2) {
   i2 = 1;
   i7 = 2;
   while (1) {
    i5 = Math_imul(i2, i10) | 0;
    i2 = 1;
    i6 = 2;
    while (1) {
     i2 = i2 + i5 | 0;
     i3 = i2 >>> 5;
     i4 = 1 << (i2 & 31);
     if (!(((((HEAP32[i1 + (i3 << 2) >> 2] & i4 | 0) != 0 ? (i9 = i2 + -1 | 0, (HEAP32[i1 + (i9 >>> 5 << 2) >> 2] & 1 << (i9 & 31) | 0) != 0) : 0) ? (i9 = i2 + 1 | 0, (HEAP32[i1 + (i9 >>> 5 << 2) >> 2] & 1 << (i9 & 31) | 0) != 0) : 0) ? (i9 = i2 - i10 | 0, (HEAP32[i1 + (i9 >>> 5 << 2) >> 2] & 1 << (i9 & 31) | 0) != 0) : 0) ? (i9 = i2 + i10 | 0, (HEAP32[i1 + (i9 >>> 5 << 2) >> 2] & 1 << (i9 & 31) | 0) != 0) : 0)) {
      i9 = (HEAP32[i12 >> 2] | 0) + (i3 << 2) | 0;
      HEAP32[i9 >> 2] = HEAP32[i9 >> 2] & ~i4;
     }
     i2 = i6 + 1 | 0;
     if ((i2 | 0) == (i10 | 0)) break; else {
      i9 = i6;
      i6 = i2;
      i2 = i9;
     }
    }
    i2 = i7 + 1 | 0;
    if ((i2 | 0) == (i11 | 0)) {
     i9 = 16;
     break;
    } else {
     i9 = i7;
     i7 = i2;
     i2 = i9;
    }
   }
  }
 } else i9 = 16;
 if ((i9 | 0) == 16) i1 = HEAP32[i13 >> 2] | 0;
 if (!i1) {
  STACKTOP = i14;
  return;
 }
 __ZdlPv(i1);
 STACKTOP = i14;
 return;
}

function __ZN12_GLOBAL__N_16DilateEiiPNSt3__26vectorIbNS0_9allocatorIbEEEE(i10, i11, i12) {
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i13 = 0, i14 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i14 + 40 | 0;
 i2 = i14 + 32 | 0;
 i4 = i14 + 24 | 0;
 i5 = i14 + 16 | 0;
 i13 = i14;
 HEAP32[i13 >> 2] = 0;
 i6 = i13 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i13 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i1 = i12 + 4 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 if (i8 | 0) {
  if ((i8 | 0) < 0) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i13);
   i1 = HEAP32[i1 >> 2] | 0;
  } else i1 = i8;
  i8 = ((i8 + -1 | 0) >>> 5) + 1 | 0;
  HEAP32[i13 >> 2] = __Znwj(i8 << 2) | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i7 >> 2] = i8;
  i8 = HEAP32[i12 >> 2] | 0;
  HEAP32[i4 >> 2] = i8;
  HEAP32[i4 + 4 >> 2] = 0;
  HEAP32[i5 >> 2] = i8 + (i1 >>> 5 << 2);
  HEAP32[i5 + 4 >> 2] = i1 & 31;
  HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
  HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
  __ZNSt3__26vectorIbNS_9allocatorIbEEE18__construct_at_endINS_14__bit_iteratorIS3_Lb1ELj0EEEEENS_9enable_ifIXsr21__is_forward_iteratorIT_EE5valueEvE4typeES8_S8_(i13, i2, i3);
 }
 if ((i11 | 0) > 2) {
  i1 = HEAP32[i13 >> 2] | 0;
  if ((i10 | 0) > 2) {
   i2 = 1;
   i7 = 2;
   while (1) {
    i5 = Math_imul(i2, i10) | 0;
    i2 = 1;
    i6 = 2;
    while (1) {
     i2 = i2 + i5 | 0;
     i3 = i2 >>> 5;
     i4 = 1 << (i2 & 31);
     if (!(((((HEAP32[i1 + (i3 << 2) >> 2] & i4 | 0) == 0 ? (i9 = i2 + -1 | 0, (HEAP32[i1 + (i9 >>> 5 << 2) >> 2] & 1 << (i9 & 31) | 0) == 0) : 0) ? (i9 = i2 + 1 | 0, (HEAP32[i1 + (i9 >>> 5 << 2) >> 2] & 1 << (i9 & 31) | 0) == 0) : 0) ? (i9 = i2 - i10 | 0, (HEAP32[i1 + (i9 >>> 5 << 2) >> 2] & 1 << (i9 & 31) | 0) == 0) : 0) ? (i9 = i2 + i10 | 0, !(HEAP32[i1 + (i9 >>> 5 << 2) >> 2] & 1 << (i9 & 31) | 0)) : 0)) {
      i9 = (HEAP32[i12 >> 2] | 0) + (i3 << 2) | 0;
      HEAP32[i9 >> 2] = HEAP32[i9 >> 2] | i4;
     }
     i2 = i6 + 1 | 0;
     if ((i2 | 0) == (i10 | 0)) break; else {
      i9 = i6;
      i6 = i2;
      i2 = i9;
     }
    }
    i2 = i7 + 1 | 0;
    if ((i2 | 0) == (i11 | 0)) {
     i9 = 16;
     break;
    } else {
     i9 = i7;
     i7 = i2;
     i2 = i9;
    }
   }
  }
 } else i9 = 16;
 if ((i9 | 0) == 16) i1 = HEAP32[i13 >> 2] | 0;
 if (!i1) {
  STACKTOP = i14;
  return;
 }
 __ZdlPv(i1);
 STACKTOP = i14;
 return;
}

function __ZNSt3__27__sort4IRZN7guetzli12_GLOBAL__N_19Processor24ComputeBlockZeroingOrderEPKsS5_iiiihPNS1_11OutputImageEPNS_6vectorINS2_9CoeffDataENS_9allocatorIS9_EEEEE3__0PNS_4pairIifEEEEjT0_SJ_SJ_SJ_T_(i11, i12, i8, i6) {
 i11 = i11 | 0;
 i12 = i12 | 0;
 i8 = i8 | 0;
 i6 = i6 | 0;
 var f1 = f0, f2 = f0, i3 = 0, f4 = f0, i5 = 0, i7 = 0, i9 = 0, i10 = 0, i13 = 0;
 i9 = i12 + 4 | 0;
 f4 = Math_fround(HEAPF32[i9 >> 2]);
 i10 = i11 + 4 | 0;
 f2 = Math_fround(HEAPF32[i10 >> 2]);
 i7 = i8 + 4 | 0;
 f1 = Math_fround(HEAPF32[i7 >> 2]);
 i3 = f1 < f4;
 do if (f4 < f2) {
  if (i3) {
   i5 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i8 >> 2] = i5;
   HEAPF32[i10 >> 2] = f1;
   HEAPF32[i7 >> 2] = f2;
   i5 = 1;
   break;
  }
  i3 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i12 >> 2] = i3;
  HEAPF32[i10 >> 2] = f4;
  HEAPF32[i9 >> 2] = f2;
  f1 = Math_fround(HEAPF32[i7 >> 2]);
  if (f1 < f2) {
   HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i8 >> 2] = i3;
   HEAPF32[i9 >> 2] = f1;
   HEAPF32[i7 >> 2] = f2;
   i5 = 2;
  } else {
   i5 = 1;
   f2 = f1;
  }
 } else if (i3) {
  i5 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i8 >> 2] = i5;
  HEAPF32[i9 >> 2] = f1;
  HEAPF32[i7 >> 2] = f4;
  f1 = Math_fround(HEAPF32[i9 >> 2]);
  f2 = Math_fround(HEAPF32[i10 >> 2]);
  if (f1 < f2) {
   i5 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i12 >> 2] = i5;
   HEAPF32[i10 >> 2] = f1;
   HEAPF32[i9 >> 2] = f2;
   i5 = 2;
   f2 = Math_fround(HEAPF32[i7 >> 2]);
  } else {
   i5 = 1;
   f2 = f4;
  }
 } else {
  i5 = 0;
  f2 = f1;
 } while (0);
 i3 = i6 + 4 | 0;
 f1 = Math_fround(HEAPF32[i3 >> 2]);
 if (!(f1 < f2)) {
  i12 = i5;
  return i12 | 0;
 }
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = i13;
 HEAPF32[i7 >> 2] = f1;
 HEAPF32[i3 >> 2] = f2;
 f1 = Math_fround(HEAPF32[i7 >> 2]);
 f2 = Math_fround(HEAPF32[i9 >> 2]);
 if (!(f1 < f2)) {
  i13 = i5 + 1 | 0;
  return i13 | 0;
 }
 i13 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i13;
 HEAPF32[i9 >> 2] = f1;
 HEAPF32[i7 >> 2] = f2;
 f1 = Math_fround(HEAPF32[i9 >> 2]);
 f2 = Math_fround(HEAPF32[i10 >> 2]);
 if (!(f1 < f2)) {
  i13 = i5 + 2 | 0;
  return i13 | 0;
 }
 i13 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i12 >> 2] = i13;
 HEAPF32[i10 >> 2] = f1;
 HEAPF32[i9 >> 2] = f2;
 i13 = i5 + 3 | 0;
 return i13 | 0;
}

function __ZN11butteraugli4BlurEjjPfdd(i11, i12, i13, d7, d10) {
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 d7 = +d7;
 d10 = +d10;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, d6 = 0.0, i8 = 0, i9 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = 0.0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i16 = i17 + 24 | 0;
 i15 = i17 + 12 | 0;
 i14 = i17;
 d6 = -1.0 / (d7 * 2.0 * d7);
 i3 = ~~(+Math_abs(+d7) * 2.25);
 i3 = (i3 | 0) > 1 ? i3 : 1;
 i4 = i3 << 1 | 1;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i16, i4);
 i1 = 0 - i3 | 0;
 if ((i3 | 0) >= (i1 | 0)) {
  i2 = HEAP32[i16 >> 2] | 0;
  while (1) {
   d18 = +(i1 | 0);
   HEAPF32[i2 + (i1 + i3 << 2) >> 2] = Math_fround(+_exp(d18 * (d6 * d18)));
   if ((i1 | 0) < (i3 | 0)) i1 = i1 + 1 | 0; else break;
  }
 }
 i8 = ~~(d7 / 3.0);
 i8 = (i8 | 0) > 1 ? i8 : 1;
 i9 = ((i11 + -1 + i8 | 0) >>> 0) / (i8 >>> 0) | 0;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i15, Math_imul(i9, i12) | 0);
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i14, Math_imul(((i12 + -1 + i8 | 0) >>> 0) / (i8 >>> 0) | 0, i9) | 0);
 __ZN11butteraugliL11ConvolutionEjjjjjPKfS1_dPf(i11, i12, i8, i4, i3, HEAP32[i16 >> 2] | 0, i13, d10, HEAP32[i15 >> 2] | 0);
 __ZN11butteraugliL11ConvolutionEjjjjjPKfS1_dPf(i12, i9, i8, i4, i3, HEAP32[i16 >> 2] | 0, HEAP32[i15 >> 2] | 0, d10, HEAP32[i14 >> 2] | 0);
 if (i12) {
  i1 = HEAP32[i14 >> 2] | 0;
  if (!i11) i2 = 10; else {
   i3 = 0;
   do {
    i4 = Math_imul((i3 | 0) / (i8 | 0) | 0, i9) | 0;
    i5 = Math_imul(i3, i11) | 0;
    i2 = 0;
    do {
     HEAP32[i13 + (i2 + i5 << 2) >> 2] = HEAP32[i1 + (i4 + ((i2 | 0) / (i8 | 0) | 0) << 2) >> 2];
     i2 = i2 + 1 | 0;
    } while ((i2 | 0) != (i11 | 0));
    i3 = i3 + 1 | 0;
   } while ((i3 | 0) != (i12 | 0));
   i2 = 11;
  }
 } else {
  i1 = HEAP32[i14 >> 2] | 0;
  i2 = 10;
 }
 if ((i2 | 0) == 10 ? i1 | 0 : 0) i2 = 11;
 if ((i2 | 0) == 11) {
  i2 = i14 + 4 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != (i1 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i1 | 0) >>> 2) << 2);
  __ZdlPv(i1);
 }
 i3 = HEAP32[i15 >> 2] | 0;
 if (i3 | 0) {
  i1 = i15 + 4 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
  __ZdlPv(i3);
 }
 i3 = HEAP32[i16 >> 2] | 0;
 if (!i3) {
  STACKTOP = i17;
  return;
 }
 i1 = i16 + 4 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) != (i3 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i3 | 0) >>> 2) << 2);
 __ZdlPv(i3);
 STACKTOP = i17;
 return;
}

function __ZNSt3__27__sort4IRZN7guetzli12_GLOBAL__N_19Processor22SelectFrequencyMaskingERKNS1_8JPEGDataEPNS1_11OutputImageEhdbE3__1PNS_4pairIifEEEEjT0_SE_SE_SE_T_(i11, i12, i8, i6) {
 i11 = i11 | 0;
 i12 = i12 | 0;
 i8 = i8 | 0;
 i6 = i6 | 0;
 var f1 = f0, f2 = f0, i3 = 0, f4 = f0, i5 = 0, i7 = 0, i9 = 0, i10 = 0, i13 = 0;
 i9 = i12 + 4 | 0;
 f4 = Math_fround(HEAPF32[i9 >> 2]);
 i10 = i11 + 4 | 0;
 f2 = Math_fround(HEAPF32[i10 >> 2]);
 i7 = i8 + 4 | 0;
 f1 = Math_fround(HEAPF32[i7 >> 2]);
 i3 = f1 < f4;
 do if (f4 < f2) {
  if (i3) {
   i5 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i8 >> 2] = i5;
   HEAPF32[i10 >> 2] = f1;
   HEAPF32[i7 >> 2] = f2;
   i5 = 1;
   break;
  }
  i3 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i12 >> 2] = i3;
  HEAPF32[i10 >> 2] = f4;
  HEAPF32[i9 >> 2] = f2;
  f1 = Math_fround(HEAPF32[i7 >> 2]);
  if (f1 < f2) {
   HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i8 >> 2] = i3;
   HEAPF32[i9 >> 2] = f1;
   HEAPF32[i7 >> 2] = f2;
   i5 = 2;
  } else {
   i5 = 1;
   f2 = f1;
  }
 } else if (i3) {
  i5 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i8 >> 2] = i5;
  HEAPF32[i9 >> 2] = f1;
  HEAPF32[i7 >> 2] = f4;
  f1 = Math_fround(HEAPF32[i9 >> 2]);
  f2 = Math_fround(HEAPF32[i10 >> 2]);
  if (f1 < f2) {
   i5 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i12 >> 2] = i5;
   HEAPF32[i10 >> 2] = f1;
   HEAPF32[i9 >> 2] = f2;
   i5 = 2;
   f2 = Math_fround(HEAPF32[i7 >> 2]);
  } else {
   i5 = 1;
   f2 = f4;
  }
 } else {
  i5 = 0;
  f2 = f1;
 } while (0);
 i3 = i6 + 4 | 0;
 f1 = Math_fround(HEAPF32[i3 >> 2]);
 if (!(f1 < f2)) {
  i12 = i5;
  return i12 | 0;
 }
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = i13;
 HEAPF32[i7 >> 2] = f1;
 HEAPF32[i3 >> 2] = f2;
 f1 = Math_fround(HEAPF32[i7 >> 2]);
 f2 = Math_fround(HEAPF32[i9 >> 2]);
 if (!(f1 < f2)) {
  i13 = i5 + 1 | 0;
  return i13 | 0;
 }
 i13 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i13;
 HEAPF32[i9 >> 2] = f1;
 HEAPF32[i7 >> 2] = f2;
 f1 = Math_fround(HEAPF32[i9 >> 2]);
 f2 = Math_fround(HEAPF32[i10 >> 2]);
 if (!(f1 < f2)) {
  i13 = i5 + 2 | 0;
  return i13 | 0;
 }
 i13 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i12 >> 2] = i13;
 HEAPF32[i10 >> 2] = f1;
 HEAPF32[i9 >> 2] = f2;
 i13 = i5 + 3 | 0;
 return i13 | 0;
}

function __ZN7guetzli20OutputImageComponent23ApplyGlobalQuantizationEPKi(i14, i15) {
 i14 = i14 | 0;
 i15 = i15 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i9 = i16 + 128 | 0;
 i10 = i16;
 i11 = i14 + 20 | 0;
 i1 = HEAP32[i11 >> 2] | 0;
 if ((i1 | 0) <= 0) {
  i14 = i14 + 52 | 0;
  _memcpy(i14 | 0, i15 | 0, 256) | 0;
  STACKTOP = i16;
  return;
 }
 i12 = i14 + 16 | 0;
 i13 = i14 + 28 | 0;
 i8 = 0;
 i2 = HEAP32[i12 >> 2] | 0;
 L4 : while (1) {
  if ((i2 | 0) > 0) {
   i7 = 0;
   do {
    if ((i2 | 0) <= (i7 | 0)) {
     i1 = 8;
     break L4;
    }
    if ((HEAP32[i11 >> 2] | 0) <= (i8 | 0)) {
     i1 = 10;
     break L4;
    }
    i5 = (Math_imul(i2, i8) | 0) + i7 << 6;
    i6 = (HEAP32[i13 >> 2] | 0) + (i5 << 1) | 0;
    i1 = i10;
    i3 = i6;
    i4 = i1 + 128 | 0;
    do {
     HEAP16[i1 >> 1] = HEAP16[i3 >> 1] | 0;
     i1 = i1 + 2 | 0;
     i3 = i3 + 2 | 0;
    } while ((i1 | 0) < (i4 | 0));
    i1 = 0;
    i3 = 0;
    do {
     i4 = i10 + (i3 << 1) | 0;
     i18 = HEAP16[i4 >> 1] | 0;
     i17 = HEAP32[i15 + (i3 << 2) >> 2] | 0;
     i21 = i18 << 16 >> 16;
     i20 = (i21 | 0) % (i17 | 0) | 0;
     i19 = (Math_imul(i20, -2) | 0) > (i17 | 0);
     i17 = i21 - i20 + ((i20 << 1 | 0) > (i17 | 0) ? i17 : i19 ? 0 - i17 | 0 : 0) & 65535;
     i1 = i1 | i17 << 16 >> 16 != i18 << 16 >> 16;
     HEAP16[i4 >> 1] = i17;
     i3 = i3 + 1 | 0;
    } while ((i3 | 0) != 64);
    if (i1) {
     i1 = i6;
     i3 = i10;
     i4 = i1 + 128 | 0;
     do {
      HEAP16[i1 >> 1] = HEAP16[i3 >> 1] | 0;
      i1 = i1 + 2 | 0;
      i3 = i3 + 2 | 0;
     } while ((i1 | 0) < (i4 | 0));
     __ZN7guetzli16ComputeBlockIDCTEPKsPh((HEAP32[i13 >> 2] | 0) + (i5 << 1) | 0, i9);
     __ZN7guetzli20OutputImageComponent20UpdatePixelsForBlockEiiPKh(i14, i7, i8, i9);
     i2 = HEAP32[i12 >> 2] | 0;
    }
    i7 = i7 + 1 | 0;
   } while ((i7 | 0) < (i2 | 0));
   i1 = HEAP32[i11 >> 2] | 0;
  }
  i8 = i8 + 1 | 0;
  if ((i8 | 0) >= (i1 | 0)) {
   i1 = 4;
   break;
  }
 }
 if ((i1 | 0) == 4) {
  i21 = i14 + 52 | 0;
  _memcpy(i21 | 0, i15 | 0, 256) | 0;
  STACKTOP = i16;
  return;
 } else if ((i1 | 0) == 8) ___assert_fail(8920, 8947, 60, 8974); else if ((i1 | 0) == 10) ___assert_fail(8988, 8947, 61, 8974);
}

function __ZNK7guetzli20OutputImageComponent8ToPixelsEiiiiPhi(i14, i15, i5, i17, i1, i3, i18) {
 i14 = i14 | 0;
 i15 = i15 | 0;
 i5 = i5 | 0;
 i17 = i17 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 i18 = i18 | 0;
 var i2 = 0, i4 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i16 = 0;
 if ((i15 | 0) <= -1) ___assert_fail(9016, 8947, 68, 9026);
 if ((i5 | 0) <= -1) ___assert_fail(9035, 8947, 69, 9026);
 i4 = HEAP32[i14 >> 2] | 0;
 if ((i4 | 0) <= (i15 | 0)) ___assert_fail(9045, 8947, 70, 9026);
 i2 = HEAP32[i14 + 4 >> 2] | 0;
 if ((i2 | 0) <= (i5 | 0)) ___assert_fail(9059, 8947, 71, 9026);
 i16 = i1 + i5 | 0;
 i1 = (i2 | 0) < (i16 | 0) ? i2 : i16;
 L13 : do if ((i1 | 0) > (i5 | 0)) {
  i9 = i17 + i15 | 0;
  i10 = 0 - i18 | 0;
  i11 = i14 + 40 | 0;
  i12 = ~i15;
  i13 = (i18 | 0) == 1;
  i2 = i5;
  while (1) {
   i7 = (i4 | 0) < (i9 | 0) ? i4 : i9;
   if ((i7 | 0) > (i15 | 0)) {
    i5 = (Math_imul(i4, i2) | 0) + i15 | 0;
    i8 = Math_imul(i12 - ~((i9 | 0) > (i4 | 0) ? i4 : i9) | 0, i18) | 0;
    i4 = i5;
    i5 = i15;
    i6 = i3;
    while (1) {
     HEAP8[i6 >> 0] = (8 - (i5 & 1) + (HEAPU16[(HEAP32[i11 >> 2] | 0) + (i4 << 1) >> 1] | 0) | 0) >>> 4;
     i5 = i5 + 1 | 0;
     if ((i5 | 0) >= (i7 | 0)) break; else {
      i4 = i4 + 1 | 0;
      i6 = i6 + i18 | 0;
     }
    }
    i4 = i7;
    i3 = i3 + i8 | 0;
   } else i4 = i15;
   if ((i9 | 0) > (i4 | 0)) {
    i7 = Math_imul(i9 - i4 | 0, i18) | 0;
    if (i13) {
     i6 = HEAP8[i3 + -1 >> 0] | 0;
     i5 = i3;
     while (1) {
      HEAP8[i5 >> 0] = i6;
      i4 = i4 + 1 | 0;
      if ((i4 | 0) >= (i9 | 0)) break; else i5 = i5 + i18 | 0;
     }
    } else {
     i5 = i3;
     while (1) {
      HEAP8[i5 >> 0] = HEAP8[i5 + i10 >> 0] | 0;
      i4 = i4 + 1 | 0;
      if ((i4 | 0) >= (i9 | 0)) break; else i5 = i5 + i18 | 0;
     }
    }
    i3 = i3 + i7 | 0;
   }
   i2 = i2 + 1 | 0;
   if ((i2 | 0) >= (i1 | 0)) break L13;
   i4 = HEAP32[i14 >> 2] | 0;
  }
 } else i1 = i5; while (0);
 if ((i1 | 0) >= (i16 | 0)) return;
 i5 = Math_imul(0 - i17 | 0, i18) | 0;
 if ((i17 | 0) <= 0) return;
 i6 = Math_imul(i18, i17) | 0;
 while (1) {
  i2 = 0;
  i4 = i3;
  while (1) {
   HEAP8[i4 >> 0] = HEAP8[i4 + i5 >> 0] | 0;
   i2 = i2 + 1 | 0;
   if ((i2 | 0) == (i17 | 0)) break; else i4 = i4 + i18 | 0;
  }
  i1 = i1 + 1 | 0;
  if ((i1 | 0) == (i16 | 0)) break; else i3 = i3 + i6 | 0;
 }
 return;
}

function __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEE21__push_back_slow_pathIS3_EEvOT_(i9, i6) {
 i9 = i9 | 0;
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0, i10 = 0, i11 = 0, i12 = 0;
 i10 = i9 + 4 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i3 = ((i2 - i1 | 0) / 12 | 0) + 1 | 0;
 if (i3 >>> 0 > 357913941) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i9);
  i1 = HEAP32[i9 >> 2] | 0;
  i2 = HEAP32[i10 >> 2] | 0;
 }
 i8 = i9 + 8 | 0;
 i7 = ((HEAP32[i8 >> 2] | 0) - i1 | 0) / 12 | 0;
 i5 = i7 << 1;
 i5 = i7 >>> 0 < 178956970 ? (i5 >>> 0 < i3 >>> 0 ? i3 : i5) : 357913941;
 i1 = (i2 - i1 | 0) / 12 | 0;
 do if (i5) if (i5 >>> 0 > 357913941) {
  i10 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i10);
  ___cxa_throw(i10 | 0, 1784, 8);
 } else {
  i4 = __Znwj(i5 * 12 | 0) | 0;
  break;
 } else i4 = 0; while (0);
 i2 = i4 + (i1 * 12 | 0) | 0;
 i3 = i2;
 i7 = i4 + (i5 * 12 | 0) | 0;
 HEAP32[i4 + (i1 * 12 | 0) + 8 >> 2] = 0;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 i5 = i6 + 4 | 0;
 HEAP32[i4 + (i1 * 12 | 0) + 4 >> 2] = HEAP32[i5 >> 2];
 i11 = i6 + 8 | 0;
 HEAP32[i4 + (i1 * 12 | 0) + 8 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i11 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 i5 = i2 + 12 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 if ((i1 | 0) == (i4 | 0)) {
  i1 = i3;
  i6 = i4;
  i3 = i4;
 } else {
  do {
   i11 = i2 + -12 | 0;
   i6 = i1;
   i1 = i1 + -12 | 0;
   HEAP32[i11 >> 2] = 0;
   i12 = i2 + -8 | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i2 + -4 >> 2] = 0;
   HEAP32[i11 >> 2] = HEAP32[i1 >> 2];
   i11 = i6 + -8 | 0;
   HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
   i6 = i6 + -4 | 0;
   HEAP32[i2 + -4 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i6 >> 2] = 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i1 >> 2] = 0;
   i2 = i3 + -12 | 0;
   i3 = i2;
  } while ((i1 | 0) != (i4 | 0));
  i1 = i3;
  i6 = HEAP32[i9 >> 2] | 0;
  i3 = HEAP32[i10 >> 2] | 0;
 }
 HEAP32[i9 >> 2] = i1;
 HEAP32[i10 >> 2] = i5;
 HEAP32[i8 >> 2] = i7;
 i5 = i6;
 if ((i3 | 0) != (i5 | 0)) do {
  i1 = i3;
  i3 = i3 + -12 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if (i4 | 0) {
   i1 = i1 + -8 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 | 0) != (i4 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i4 | 0) >>> 2) << 2);
   __ZdlPv(i4);
  }
 } while ((i3 | 0) != (i5 | 0));
 if (!i6) return;
 __ZdlPv(i6);
 return;
}

function _pop_arg(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, d6 = 0.0;
 L1 : do if (i2 >>> 0 <= 20) do switch (i2 | 0) {
 case 9:
  {
   i4 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i2 = HEAP32[i4 >> 2] | 0;
   HEAP32[i3 >> 2] = i4 + 4;
   HEAP32[i1 >> 2] = i2;
   break L1;
  }
 case 10:
  {
   i4 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i2 = HEAP32[i4 >> 2] | 0;
   HEAP32[i3 >> 2] = i4 + 4;
   i4 = i1;
   HEAP32[i4 >> 2] = i2;
   HEAP32[i4 + 4 >> 2] = ((i2 | 0) < 0) << 31 >> 31;
   break L1;
  }
 case 11:
  {
   i4 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i2 = HEAP32[i4 >> 2] | 0;
   HEAP32[i3 >> 2] = i4 + 4;
   i4 = i1;
   HEAP32[i4 >> 2] = i2;
   HEAP32[i4 + 4 >> 2] = 0;
   break L1;
  }
 case 12:
  {
   i4 = (HEAP32[i3 >> 2] | 0) + (8 - 1) & ~(8 - 1);
   i2 = i4;
   i5 = HEAP32[i2 >> 2] | 0;
   i2 = HEAP32[i2 + 4 >> 2] | 0;
   HEAP32[i3 >> 2] = i4 + 8;
   i4 = i1;
   HEAP32[i4 >> 2] = i5;
   HEAP32[i4 + 4 >> 2] = i2;
   break L1;
  }
 case 13:
  {
   i5 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i3 >> 2] = i5 + 4;
   i4 = (i4 & 65535) << 16 >> 16;
   i5 = i1;
   HEAP32[i5 >> 2] = i4;
   HEAP32[i5 + 4 >> 2] = ((i4 | 0) < 0) << 31 >> 31;
   break L1;
  }
 case 14:
  {
   i5 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i3 >> 2] = i5 + 4;
   i5 = i1;
   HEAP32[i5 >> 2] = i4 & 65535;
   HEAP32[i5 + 4 >> 2] = 0;
   break L1;
  }
 case 15:
  {
   i5 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i3 >> 2] = i5 + 4;
   i4 = (i4 & 255) << 24 >> 24;
   i5 = i1;
   HEAP32[i5 >> 2] = i4;
   HEAP32[i5 + 4 >> 2] = ((i4 | 0) < 0) << 31 >> 31;
   break L1;
  }
 case 16:
  {
   i5 = (HEAP32[i3 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i3 >> 2] = i5 + 4;
   i5 = i1;
   HEAP32[i5 >> 2] = i4 & 255;
   HEAP32[i5 + 4 >> 2] = 0;
   break L1;
  }
 case 17:
  {
   i5 = (HEAP32[i3 >> 2] | 0) + (8 - 1) & ~(8 - 1);
   d6 = +HEAPF64[i5 >> 3];
   HEAP32[i3 >> 2] = i5 + 8;
   HEAPF64[i1 >> 3] = d6;
   break L1;
  }
 case 18:
  {
   i5 = (HEAP32[i3 >> 2] | 0) + (8 - 1) & ~(8 - 1);
   d6 = +HEAPF64[i5 >> 3];
   HEAP32[i3 >> 2] = i5 + 8;
   HEAPF64[i1 >> 3] = d6;
   break L1;
  }
 default:
  break L1;
 } while (0); while (0);
 return;
}

function __ZNSt3__26vectorIN11butteraugli5ImageIfEENS_9allocatorIS3_EEE21__push_back_slow_pathIS3_EEvOT_(i9, i6) {
 i9 = i9 | 0;
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0, i10 = 0, i11 = 0, i12 = 0;
 i10 = i9 + 4 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i3 = ((i2 - i1 | 0) / 20 | 0) + 1 | 0;
 if (i3 >>> 0 > 214748364) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i9);
  i1 = HEAP32[i9 >> 2] | 0;
  i2 = HEAP32[i10 >> 2] | 0;
 }
 i8 = i9 + 8 | 0;
 i7 = ((HEAP32[i8 >> 2] | 0) - i1 | 0) / 20 | 0;
 i5 = i7 << 1;
 i5 = i7 >>> 0 < 107374182 ? (i5 >>> 0 < i3 >>> 0 ? i3 : i5) : 214748364;
 i1 = (i2 - i1 | 0) / 20 | 0;
 do if (i5) if (i5 >>> 0 > 214748364) {
  i10 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i10);
  ___cxa_throw(i10 | 0, 1784, 8);
 } else {
  i4 = __Znwj(i5 * 20 | 0) | 0;
  break;
 } else i4 = 0; while (0);
 i2 = i4 + (i1 * 20 | 0) | 0;
 i3 = i2;
 i7 = i4 + (i5 * 20 | 0) | 0;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + (i1 * 20 | 0) + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i4 + (i1 * 20 | 0) + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 i11 = i6 + 12 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i6 = HEAP32[i6 + 16 >> 2] | 0;
 HEAP32[i4 + (i1 * 20 | 0) + 12 >> 2] = i5;
 HEAP32[i4 + (i1 * 20 | 0) + 16 >> 2] = i6;
 i6 = i2 + 20 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 if ((i1 | 0) == (i5 | 0)) {
  i2 = i3;
  i4 = i5;
  i1 = i5;
 } else {
  do {
   i11 = i1;
   i1 = i1 + -20 | 0;
   HEAP32[i2 + -20 >> 2] = HEAP32[i1 >> 2];
   HEAP32[i2 + -16 >> 2] = HEAP32[i11 + -16 >> 2];
   HEAP32[i2 + -12 >> 2] = HEAP32[i11 + -12 >> 2];
   i12 = i11 + -8 | 0;
   i4 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i11 = HEAP32[i11 + -4 >> 2] | 0;
   HEAP32[i2 + -8 >> 2] = i4;
   HEAP32[i2 + -4 >> 2] = i11;
   i2 = i3 + -20 | 0;
   i3 = i2;
  } while ((i1 | 0) != (i5 | 0));
  i2 = i3;
  i4 = HEAP32[i9 >> 2] | 0;
  i1 = HEAP32[i10 >> 2] | 0;
 }
 HEAP32[i9 >> 2] = i2;
 HEAP32[i10 >> 2] = i6;
 HEAP32[i8 >> 2] = i7;
 i3 = i4;
 if ((i1 | 0) != (i3 | 0)) do {
  i12 = i1 + -8 | 0;
  i2 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  if (i2 | 0) FUNCTION_TABLE_vi[HEAP32[i1 + -4 >> 2] & 15](i2);
  i1 = i1 + -20 | 0;
 } while ((i1 | 0) != (i3 | 0));
 if (!i4) return;
 __ZdlPv(i4);
 return;
}

function __ZN7guetzli20OutputImageComponent21CopyFromJpegComponentERKNS_13JPEGComponentEiiPKi(i15, i3, i1, i2, i16) {
 i15 = i15 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i16 = i16 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i17 = 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i13 = i17 + 128 | 0;
 i14 = i17;
 __ZN7guetzli20OutputImageComponent5ResetEii(i15, i1, i2);
 i12 = i15 + 16 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 i1 = HEAP32[i3 + 16 >> 2] | 0;
 if ((i2 | 0) > (i1 | 0)) ___assert_fail(9191, 8947, 214, 9232);
 i11 = i15 + 20 | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 if ((i4 | 0) > (HEAP32[i3 + 20 >> 2] | 0)) ___assert_fail(9254, 8947, 215, 9232);
 i10 = i1 << 6;
 if ((i4 | 0) <= 0) {
  i15 = i15 + 52 | 0;
  _memcpy(i15 | 0, i16 | 0, 256) | 0;
  STACKTOP = i17;
  return;
 }
 i8 = i3 + 28 | 0;
 i9 = i15 + 28 | 0;
 i7 = 0;
 i1 = i4;
 L10 : while (1) {
  if ((i2 | 0) > 0) {
   i5 = 0;
   i6 = (HEAP32[i8 >> 2] | 0) + ((Math_imul(i10, i7) | 0) << 1) | 0;
   while (1) {
    i1 = 0;
    do {
     HEAP16[i14 + (i1 << 1) >> 1] = Math_imul(HEAP16[i6 + (i1 << 1) >> 1] | 0, HEAP32[i16 + (i1 << 2) >> 2] | 0) | 0;
     i1 = i1 + 1 | 0;
    } while ((i1 | 0) != 64);
    if ((i2 | 0) <= (i5 | 0)) {
     i1 = 14;
     break L10;
    }
    if ((HEAP32[i11 >> 2] | 0) <= (i7 | 0)) {
     i1 = 16;
     break L10;
    }
    i1 = (Math_imul(i2, i7) | 0) + i5 << 6;
    i2 = (HEAP32[i9 >> 2] | 0) + (i1 << 1) | 0;
    i3 = i14;
    i4 = i2 + 128 | 0;
    do {
     HEAP16[i2 >> 1] = HEAP16[i3 >> 1] | 0;
     i2 = i2 + 2 | 0;
     i3 = i3 + 2 | 0;
    } while ((i2 | 0) < (i4 | 0));
    __ZN7guetzli16ComputeBlockIDCTEPKsPh((HEAP32[i9 >> 2] | 0) + (i1 << 1) | 0, i13);
    __ZN7guetzli20OutputImageComponent20UpdatePixelsForBlockEiiPKh(i15, i5, i7, i13);
    i5 = i5 + 1 | 0;
    i2 = HEAP32[i12 >> 2] | 0;
    if ((i5 | 0) >= (i2 | 0)) break; else i6 = i6 + 128 | 0;
   }
   i1 = HEAP32[i11 >> 2] | 0;
  }
  i7 = i7 + 1 | 0;
  if ((i7 | 0) >= (i1 | 0)) {
   i1 = 7;
   break;
  }
 }
 if ((i1 | 0) == 7) {
  i15 = i15 + 52 | 0;
  _memcpy(i15 | 0, i16 | 0, 256) | 0;
  STACKTOP = i17;
  return;
 } else if ((i1 | 0) == 14) ___assert_fail(8920, 8947, 124, 9118); else if ((i1 | 0) == 16) ___assert_fail(8988, 8947, 125, 9118);
}

function __ZN7guetzli21ButteraugliComparatorD2Ev(i10) {
 i10 = i10 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i10 >> 2] = 1840;
 i1 = HEAP32[i10 + 80 >> 2] | 0;
 if (i1 | 0) {
  i2 = i10 + 84 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != (i1 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i1 | 0) >>> 2) << 2);
  __ZdlPv(i1);
 }
 i8 = i10 + 40 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 if (i1 | 0) {
  i9 = i10 + 44 | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i6 = i2 + -12 | 0;
    HEAP32[i9 >> 2] = i6;
    i7 = HEAP32[i6 >> 2] | 0;
    if (!i7) i2 = i6; else {
     i5 = i2 + -8 | 0;
     i2 = HEAP32[i5 >> 2] | 0;
     if ((i2 | 0) == (i7 | 0)) i2 = i7; else {
      do {
       i3 = i2 + -12 | 0;
       HEAP32[i5 >> 2] = i3;
       i4 = HEAP32[i3 >> 2] | 0;
       if (!i4) i2 = i3; else {
        i2 = i2 + -8 | 0;
        i3 = HEAP32[i2 >> 2] | 0;
        if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
        __ZdlPv(i4);
        i2 = HEAP32[i5 >> 2] | 0;
       }
      } while ((i2 | 0) != (i7 | 0));
      i2 = HEAP32[i6 >> 2] | 0;
     }
     __ZdlPv(i2);
     i2 = HEAP32[i9 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i8 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i5 = i10 + 28 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if (i1 | 0) {
  i6 = i10 + 32 | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) {
   do {
    i3 = i2 + -12 | 0;
    HEAP32[i6 >> 2] = i3;
    i4 = HEAP32[i3 >> 2] | 0;
    if (!i4) i2 = i3; else {
     i2 = i2 + -8 | 0;
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
     __ZdlPv(i4);
     i2 = HEAP32[i6 >> 2] | 0;
    }
   } while ((i2 | 0) != (i1 | 0));
   i1 = HEAP32[i5 >> 2] | 0;
  }
  __ZdlPv(i1);
 }
 i5 = i10 + 16 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if (!i1) return;
 i4 = i10 + 20 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != (i1 | 0)) {
  do {
   HEAP32[i4 >> 2] = i2 + -20;
   i10 = i2 + -8 | 0;
   i3 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   if (i3 | 0) FUNCTION_TABLE_vi[HEAP32[i2 + -4 >> 2] & 15](i3);
   i2 = HEAP32[i4 >> 2] | 0;
  } while ((i2 | 0) != (i1 | 0));
  i1 = HEAP32[i5 >> 2] | 0;
 }
 __ZdlPv(i1);
 return;
}

function __ZN7guetzli12_GLOBAL__N_14BlurERKNSt3__26vectorIfNS1_9allocatorIfEEEEii(i15, i1, i16, i17) {
 i15 = i15 | 0;
 i1 = i1 | 0;
 i16 = i16 | 0;
 i17 = i17 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = 0.0, i22 = 0;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i15, Math_imul(i17, i16) | 0);
 if ((i17 | 0) <= 0) return;
 i18 = (i16 | 0) > 0;
 i19 = i16 + -1 | 0;
 i20 = i17 + -1 | 0;
 i14 = HEAP32[i1 >> 2] | 0;
 i4 = 0;
 do {
  if (i18) {
   i7 = i4 + -2 | 0;
   i6 = Math_imul(i4, i16) | 0;
   i7 = (i7 | 0) > 0 ? i7 : 0;
   i7 = Math_imul((i7 | 0) < (i20 | 0) ? i7 : i20, i16) | 0;
   i8 = HEAP32[i15 >> 2] | 0;
   i11 = i4 | 1;
   i9 = (i11 | 0) < (i17 | 0);
   i10 = i4 + 2 | 0;
   i10 = Math_imul((i10 | 0) < (i20 | 0) ? i10 : i20, i16) | 0;
   i11 = Math_imul(i11, i16) | 0;
   i5 = 0;
   do {
    i12 = i5 + -2 | 0;
    i3 = i5 + i6 | 0;
    i13 = i14 + (i3 << 2) | 0;
    i2 = i14 + (i7 + i5 << 2) | 0;
    i1 = 0;
    do {
     i22 = i12 + (i1 << 2) | 0;
     i22 = (i22 | 0) > 0 ? i22 : 0;
     i22 = (i22 | 0) < (i19 | 0) ? i22 : i19;
     d21 = +Math_fround(HEAPF32[i13 >> 2]) * 9.0;
     d21 = d21 + +Math_fround(HEAPF32[i14 + (i22 + i6 << 2) >> 2]) * 3.0;
     d21 = d21 + +Math_fround(HEAPF32[i2 >> 2]) * 3.0;
     HEAPF32[i8 + (i3 + i1 << 2) >> 2] = Math_fround((+Math_fround(HEAPF32[i14 + (i22 + i7 << 2) >> 2]) + d21) * .0625);
     i1 = i1 + 1 | 0;
    } while ((i1 | 0) < 2 & (i1 + i5 | 0) < (i16 | 0));
    if (i9) {
     i2 = i14 + (i10 + i5 << 2) | 0;
     i3 = i11 + i5 | 0;
     i1 = 0;
     do {
      i22 = i12 + (i1 << 2) | 0;
      i22 = (i22 | 0) > 0 ? i22 : 0;
      i22 = (i22 | 0) < (i19 | 0) ? i22 : i19;
      d21 = +Math_fround(HEAPF32[i13 >> 2]) * 9.0;
      d21 = d21 + +Math_fround(HEAPF32[i14 + (i22 + i6 << 2) >> 2]) * 3.0;
      d21 = d21 + +Math_fround(HEAPF32[i2 >> 2]) * 3.0;
      HEAPF32[i8 + (i3 + i1 << 2) >> 2] = Math_fround((+Math_fround(HEAPF32[i14 + (i22 + i10 << 2) >> 2]) + d21) * .0625);
      i1 = i1 + 1 | 0;
     } while ((i1 | 0) < 2 & (i1 + i5 | 0) < (i16 | 0));
    }
    i5 = i5 + 2 | 0;
   } while ((i5 | 0) < (i16 | 0));
  }
  i4 = i4 + 2 | 0;
 } while ((i4 | 0) < (i17 | 0));
 return;
}

function __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEE8__appendEj(i9, i7) {
 i9 = i9 | 0;
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i10 = 0, i11 = 0, i12 = 0;
 i10 = i9 + 8 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i11 = i9 + 4 | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 i3 = i4;
 if (((i2 - i4 | 0) / 12 | 0) >>> 0 >= i7 >>> 0) {
  _memset(i4 | 0, 0, i7 * 12 | 0) | 0;
  HEAP32[i11 >> 2] = i3 + (i7 * 12 | 0);
  return;
 }
 i1 = HEAP32[i9 >> 2] | 0;
 i5 = ((i4 - i1 | 0) / 12 | 0) + i7 | 0;
 if (i5 >>> 0 > 357913941) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i9);
  i3 = HEAP32[i11 >> 2] | 0;
  i1 = HEAP32[i9 >> 2] | 0;
  i2 = HEAP32[i10 >> 2] | 0;
  i4 = i3;
 }
 i8 = i1;
 i6 = (i2 - i1 | 0) / 12 | 0;
 i2 = i6 << 1;
 i5 = i6 >>> 0 < 178956970 ? (i2 >>> 0 < i5 >>> 0 ? i5 : i2) : 357913941;
 i2 = (i4 - i1 | 0) / 12 | 0;
 do if (i5) if (i5 >>> 0 > 357913941) {
  i11 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i11);
  ___cxa_throw(i11 | 0, 1784, 8);
 } else {
  i4 = __Znwj(i5 * 12 | 0) | 0;
  break;
 } else i4 = 0; while (0);
 i6 = i4 + (i2 * 12 | 0) | 0;
 i2 = i6;
 i5 = i4 + (i5 * 12 | 0) | 0;
 _memset(i6 | 0, 0, i7 * 12 | 0) | 0;
 i4 = i6 + (i7 * 12 | 0) | 0;
 if ((i3 | 0) == (i8 | 0)) i6 = i1; else {
  i1 = i6;
  do {
   i7 = i1 + -12 | 0;
   i6 = i3;
   i3 = i3 + -12 | 0;
   HEAP32[i7 >> 2] = 0;
   i12 = i1 + -8 | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i1 + -4 >> 2] = 0;
   HEAP32[i7 >> 2] = HEAP32[i3 >> 2];
   i7 = i6 + -8 | 0;
   HEAP32[i12 >> 2] = HEAP32[i7 >> 2];
   i6 = i6 + -4 | 0;
   HEAP32[i1 + -4 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i6 >> 2] = 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i3 >> 2] = 0;
   i1 = i2 + -12 | 0;
   i2 = i1;
  } while ((i3 | 0) != (i8 | 0));
  i6 = HEAP32[i9 >> 2] | 0;
  i3 = HEAP32[i11 >> 2] | 0;
 }
 HEAP32[i9 >> 2] = i2;
 HEAP32[i11 >> 2] = i4;
 HEAP32[i10 >> 2] = i5;
 i5 = i6;
 if ((i3 | 0) != (i5 | 0)) do {
  i1 = i3;
  i3 = i3 + -12 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if (i4 | 0) {
   i1 = i1 + -8 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 | 0) != (i4 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i4 | 0) >>> 2) << 2);
   __ZdlPv(i4);
  }
 } while ((i3 | 0) != (i5 | 0));
 if (!i6) return;
 __ZdlPv(i6);
 return;
}

function __ZN7guetzli12_GLOBAL__N_121LinearlyDownsample2x2ERKNSt3__26vectorIfNS1_9allocatorIfEEEEii(i3, i2, i18, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i18 = i18 | 0;
 i1 = i1 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i19 = 0, f20 = f0;
 if (((HEAP32[i2 + 4 >> 2] | 0) - (HEAP32[i2 >> 2] | 0) >> 2 | 0) != (Math_imul(i18 * 3 | 0, i1) | 0)) ___assert_fail(10955, 10898, 334, 10991);
 i16 = (i18 + 1 | 0) / 2 | 0;
 i17 = (i1 + 1 | 0) / 2 | 0;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i3, Math_imul(i16 * 3 | 0, i17) | 0);
 if ((i1 | 0) <= 0) return;
 i14 = i1 + -1 | 0;
 i15 = i18 + -1 | 0;
 i13 = HEAP32[i2 >> 2] | 0;
 if ((i18 | 0) <= 0) return;
 i10 = HEAP32[i3 >> 2] | 0;
 i8 = 0;
 i1 = 0;
 do {
  i12 = i8 << 1;
  i11 = i12 | 1;
  i11 = Math_imul((i11 | 0) < (i14 | 0) ? i11 : i14, i18) | 0;
  i12 = Math_imul((i12 | 0) < (i14 | 0) ? i12 : i14, i18) | 0;
  i9 = 0;
  do {
   i7 = i9 << 1;
   i4 = (i7 | 0) < (i15 | 0) ? i7 : i15;
   i6 = (i4 + i11 | 0) * 3 | 0;
   i4 = (i4 + i12 | 0) * 3 | 0;
   i7 = i7 | 1;
   i7 = (i7 | 0) < (i15 | 0) ? i7 : i15;
   i5 = (i7 + i12 | 0) * 3 | 0;
   i7 = (i7 + i11 | 0) * 3 | 0;
   i2 = 0;
   i3 = i1;
   while (1) {
    i19 = i10 + (i3 << 2) | 0;
    HEAPF32[i19 >> 2] = Math_fround(0.0);
    f20 = Math_fround(Math_fround(+Math_pow(+(+Math_fround(HEAPF32[i13 + (i4 + i2 << 2) >> 2]) / 255.0), 2.2)) + Math_fround(0.0));
    HEAPF32[i19 >> 2] = f20;
    f20 = Math_fround(Math_fround(+Math_pow(+(+Math_fround(HEAPF32[i13 + (i5 + i2 << 2) >> 2]) / 255.0), 2.2)) + f20);
    HEAPF32[i19 >> 2] = f20;
    f20 = Math_fround(Math_fround(+Math_pow(+(+Math_fround(HEAPF32[i13 + (i6 + i2 << 2) >> 2]) / 255.0), 2.2)) + f20);
    HEAPF32[i19 >> 2] = f20;
    HEAPF32[i19 >> 2] = Math_fround(+Math_pow(+(+Math_fround(Math_fround(Math_fround(+Math_pow(+(+Math_fround(HEAPF32[i13 + (i7 + i2 << 2) >> 2]) / 255.0), 2.2)) + f20) * Math_fround(.25))), .45454545454545453) * 255.0);
    i2 = i2 + 1 | 0;
    if ((i2 | 0) == 3) break; else i3 = i3 + 1 | 0;
   }
   i1 = i1 + 3 | 0;
   i9 = i9 + 1 | 0;
  } while ((i9 | 0) < (i16 | 0));
  i8 = i8 + 1 | 0;
 } while ((i8 | 0) < (i17 | 0));
 return;
}

function __ZNSt3__26vectorIbNS_9allocatorIbEEE18__construct_at_endINS_14__bit_iteratorIS3_Lb1ELj0EEEEENS_9enable_ifIXsr21__is_forward_iteratorIT_EE5valueEvE4typeES8_S8_(i4, i1, i3) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i13 = i16 + 40 | 0;
 i12 = i16 + 32 | 0;
 i9 = i16 + 8 | 0;
 i10 = i16;
 i11 = i16 + 24 | 0;
 i15 = i16 + 16 | 0;
 i6 = i4 + 4 | 0;
 i17 = HEAP32[i6 >> 2] | 0;
 i2 = i1;
 i14 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i2 + 4 >> 2] | 0;
 i7 = i3;
 i5 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i7 + 4 >> 2] | 0;
 i8 = i5 - i14 << 3;
 HEAP32[i6 >> 2] = i17 - i2 + i7 + i8;
 i6 = (HEAP32[i4 >> 2] | 0) + (i17 >>> 5 << 2) | 0;
 i3 = i17 & 31;
 i1 = i6;
 if ((i2 | 0) != (i3 | 0)) {
  i17 = i9;
  HEAP32[i17 >> 2] = i14;
  HEAP32[i17 + 4 >> 2] = i2;
  i17 = i10;
  HEAP32[i17 >> 2] = i5;
  HEAP32[i17 + 4 >> 2] = i7;
  HEAP32[i11 >> 2] = i1;
  HEAP32[i11 + 4 >> 2] = i3;
  HEAP32[i12 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i12 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i13 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i13 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  __ZNSt3__216__copy_unalignedINS_6vectorIbNS_9allocatorIbEEEELb1EEENS_14__bit_iteratorIT_Lb0EXLi0EEEENS5_IS6_XT0_EXLi0EEEES8_S7_(i15, i12, i13, i11);
  STACKTOP = i16;
  return;
 }
 i3 = i7 - i2 + i8 | 0;
 i7 = i14;
 if ((i3 | 0) > 0) {
  if (!i2) {
   i2 = 0;
   i1 = i14;
  } else {
   i1 = 32 - i2 | 0;
   i17 = (i3 | 0) < (i1 | 0) ? i3 : i1;
   i1 = -1 >>> (i1 - i17 | 0) & -1 << i2;
   HEAP32[i6 >> 2] = HEAP32[i6 >> 2] & ~i1 | HEAP32[i7 >> 2] & i1;
   i1 = i17 + i2 | 0;
   i7 = i7 + 4 | 0;
   i3 = i3 - i17 | 0;
   i2 = i1 & 31;
   i6 = i6 + (i1 >>> 5 << 2) | 0;
   i1 = i7;
  }
  i5 = i3 >>> 5;
  _memmove(i6 | 0, i1 | 0, i5 << 2 | 0) | 0;
  i4 = i3 - (i5 << 5) | 0;
  i3 = i6 + (i5 << 2) | 0;
  i1 = i3;
  if ((i4 | 0) > 0) {
   i2 = -1 >>> (32 - i4 | 0);
   HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & ~i2 | HEAP32[i7 + (i5 << 2) >> 2] & i2;
   i2 = i4;
  }
 }
 HEAP32[i15 >> 2] = i1;
 HEAP32[i15 + 4 >> 2] = i2;
 STACKTOP = i16;
 return;
}

function __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEE21__push_back_slow_pathIRKS3_EEvOT_(i10, i6) {
 i10 = i10 | 0;
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0, i9 = 0, i11 = 0, i12 = 0;
 i11 = i10 + 4 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 i3 = ((i2 - i1 | 0) / 12 | 0) + 1 | 0;
 if (i3 >>> 0 > 357913941) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i10);
  i1 = HEAP32[i10 >> 2] | 0;
  i2 = HEAP32[i11 >> 2] | 0;
 }
 i9 = i10 + 8 | 0;
 i8 = ((HEAP32[i9 >> 2] | 0) - i1 | 0) / 12 | 0;
 i4 = i8 << 1;
 i4 = i8 >>> 0 < 178956970 ? (i4 >>> 0 < i3 >>> 0 ? i3 : i4) : 357913941;
 i1 = (i2 - i1 | 0) / 12 | 0;
 do if (i4) if (i4 >>> 0 > 357913941) {
  i11 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i11);
  ___cxa_throw(i11 | 0, 1784, 8);
 } else {
  i2 = __Znwj(i4 * 12 | 0) | 0;
  break;
 } else i2 = 0; while (0);
 i5 = i2 + (i1 * 12 | 0) | 0;
 i3 = i5;
 i8 = i2 + (i4 * 12 | 0) | 0;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i5, i6);
 i6 = i5 + 12 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 i1 = HEAP32[i11 >> 2] | 0;
 if ((i1 | 0) == (i4 | 0)) {
  i1 = i3;
  i7 = i4;
  i3 = i4;
 } else {
  i2 = i5;
  do {
   i7 = i2 + -12 | 0;
   i5 = i1;
   i1 = i1 + -12 | 0;
   HEAP32[i7 >> 2] = 0;
   i12 = i2 + -8 | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i2 + -4 >> 2] = 0;
   HEAP32[i7 >> 2] = HEAP32[i1 >> 2];
   i7 = i5 + -8 | 0;
   HEAP32[i12 >> 2] = HEAP32[i7 >> 2];
   i5 = i5 + -4 | 0;
   HEAP32[i2 + -4 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i5 >> 2] = 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i1 >> 2] = 0;
   i2 = i3 + -12 | 0;
   i3 = i2;
  } while ((i1 | 0) != (i4 | 0));
  i1 = i3;
  i7 = HEAP32[i10 >> 2] | 0;
  i3 = HEAP32[i11 >> 2] | 0;
 }
 HEAP32[i10 >> 2] = i1;
 HEAP32[i11 >> 2] = i6;
 HEAP32[i9 >> 2] = i8;
 i5 = i7;
 if ((i3 | 0) != (i5 | 0)) do {
  i1 = i3;
  i3 = i3 + -12 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if (i4 | 0) {
   i1 = i1 + -8 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 | 0) != (i4 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i4 | 0) >>> 2) << 2);
   __ZdlPv(i4);
  }
 } while ((i3 | 0) != (i5 | 0));
 if (!i7) return;
 __ZdlPv(i7);
 return;
}

function __ZN7guetzli8JPEGDataC2ERKS0_(i5, i6) {
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i7 = 0, i8 = 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 HEAP32[i5 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
 HEAP32[i5 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
 HEAP32[i5 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
 HEAP32[i5 + 28 >> 2] = HEAP32[i6 + 28 >> 2];
 __ZNSt3__26vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEEC2ERKS8_(i5 + 32 | 0, i6 + 32 | 0);
 __ZNSt3__26vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEEC2ERKS8_(i5 + 44 | 0, i6 + 44 | 0);
 __ZNSt3__26vectorIN7guetzli14JPEGQuantTableENS_9allocatorIS2_EEEC2ERKS5_(i5 + 56 | 0, i6 + 56 | 0);
 __ZNSt3__26vectorIN7guetzli15JPEGHuffmanCodeENS_9allocatorIS2_EEEC2ERKS5_(i5 + 68 | 0, i6 + 68 | 0);
 __ZNSt3__26vectorIN7guetzli13JPEGComponentENS_9allocatorIS2_EEEC2ERKS5_(i5 + 80 | 0, i6 + 80 | 0);
 __ZNSt3__26vectorIN7guetzli12JPEGScanInfoENS_9allocatorIS2_EEEC2ERKS5_(i5 + 92 | 0, i6 + 92 | 0);
 i1 = i5 + 104 | 0;
 i2 = i6 + 104 | 0;
 HEAP32[i1 >> 2] = 0;
 i7 = i5 + 108 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i5 + 112 >> 2] = 0;
 i4 = i6 + 108 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i2 >> 2] | 0) | 0;
 if (i3 | 0) {
  if ((i3 | 0) < 0) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i1);
  i8 = __Znwj(i3) | 0;
  HEAP32[i7 >> 2] = i8;
  HEAP32[i1 >> 2] = i8;
  HEAP32[i5 + 112 >> 2] = i8 + i3;
  i2 = HEAP32[i2 >> 2] | 0;
  i1 = (HEAP32[i4 >> 2] | 0) - i2 | 0;
  if ((i1 | 0) > 0) {
   _memcpy(i8 | 0, i2 | 0, i1 | 0) | 0;
   HEAP32[i7 >> 2] = i8 + i1;
  }
 }
 __ZNSt3__26vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEEC2ERKS8_(i5 + 116 | 0, i6 + 116 | 0);
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i5 + 128 | 0, i6 + 128 | 0);
 i8 = i5 + 140 | 0;
 i7 = i6 + 140 | 0;
 HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 return;
}

function __ZNSt3__26vectorIfNS_9allocatorIfEEE6assignIPfEENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIfNS_15iterator_traitsIS7_E9referenceEEE5valueEvE4typeES7_S7_(i5, i12, i2) {
 i5 = i5 | 0;
 i12 = i12 | 0;
 i2 = i2 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i8 = i2;
 i6 = i12;
 i7 = i8 - i6 | 0;
 i4 = i7 >> 2;
 i10 = i5 + 8 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 i11 = HEAP32[i5 >> 2] | 0;
 i9 = i11;
 if (i4 >>> 0 <= i1 - i11 >> 2 >>> 0) {
  i7 = i5 + 4 | 0;
  i3 = (HEAP32[i7 >> 2] | 0) - i11 >> 2;
  i5 = i4 >>> 0 > i3 >>> 0;
  i4 = i5 ? i12 + (i3 << 2) | 0 : i2;
  i3 = i4;
  i1 = i3 - i6 | 0;
  i2 = i1 >> 2;
  if (i2 | 0) _memmove(i11 | 0, i12 | 0, i1 | 0) | 0;
  i2 = i9 + (i2 << 2) | 0;
  if (i5) {
   i1 = i8 - i3 | 0;
   if ((i1 | 0) <= 0) return;
   _memcpy(HEAP32[i7 >> 2] | 0, i4 | 0, i1 | 0) | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + (i1 >>> 2 << 2);
   return;
  } else {
   i1 = HEAP32[i7 >> 2] | 0;
   if ((i1 | 0) == (i2 | 0)) return;
   HEAP32[i7 >> 2] = i1 + (~((i1 + -4 - i2 | 0) >>> 2) << 2);
   return;
  }
 }
 i3 = i11;
 if (i11) {
  i1 = i5 + 4 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) != (i9 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i11 | 0) >>> 2) << 2);
  __ZdlPv(i3);
  HEAP32[i10 >> 2] = 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i5 >> 2] = 0;
  i1 = 0;
 }
 if (i4 >>> 0 > 1073741823) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i5);
  i2 = HEAP32[i5 >> 2] | 0;
  i1 = HEAP32[i10 >> 2] | 0;
 } else i2 = 0;
 i11 = i1 - i2 | 0;
 i1 = i11 >> 1;
 i1 = i11 >> 2 >>> 0 < 536870911 ? (i1 >>> 0 < i4 >>> 0 ? i4 : i1) : 1073741823;
 if (i1 >>> 0 > 1073741823) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i5);
  i12 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i12);
  ___cxa_throw(i12 | 0, 1784, 8);
 }
 i2 = __Znwj(i1 << 2) | 0;
 i3 = i5 + 4 | 0;
 HEAP32[i3 >> 2] = i2;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i10 >> 2] = i2 + (i1 << 2);
 if ((i7 | 0) <= 0) return;
 _memcpy(i2 | 0, i12 | 0, i7 | 0) | 0;
 HEAP32[i3 >> 2] = i2 + (i7 >>> 2 << 2);
 return;
}

function __ZN7guetzli15ComputeBlockDCTEPs(i2) {
 i2 = i2 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i1 = 0;
 do {
  i17 = i2 + (i1 << 1) | 0;
  i14 = i17 + 32 | 0;
  i3 = i17 + 112 | 0;
  i13 = HEAP16[i3 >> 1] | 0;
  i6 = i17 + 80 | 0;
  i18 = HEAP16[i6 >> 1] | 0;
  i7 = (HEAP16[i17 >> 1] | 0) - i13 | 0;
  i5 = (HEAP16[i14 >> 1] | 0) - i18 | 0;
  i18 = (i18 << 1) + i5 | 0;
  i8 = i17 + 48 | 0;
  i15 = i17 + 64 | 0;
  i16 = HEAP16[i15 >> 1] | 0;
  i11 = (HEAP16[i8 >> 1] | 0) - i16 | 0;
  i16 = (i16 << 1) + i11 | 0;
  i9 = i17 + 96 | 0;
  i12 = HEAP16[i9 >> 1] | 0;
  i10 = i17 + 16 | 0;
  i4 = (HEAP16[i10 >> 1] | 0) - i12 | 0;
  i13 = (i13 << 1) + i7 - i16 | 0;
  i12 = (i12 << 1) - i18 + i4 | 0;
  i18 = i12 + (i18 << 1) | 0;
  i16 = (i16 << 1) + i13 - i18 << 3;
  HEAP16[i17 >> 1] = i16 + (i18 << 4);
  HEAP16[i15 >> 1] = i16;
  HEAP16[i14 >> 1] = ((i12 * 217168 | 0) >>> 16) + (i13 << 3);
  HEAP16[i9 >> 1] = ((i13 * 217168 | 0) >>> 16) - (i12 << 3);
  i4 = i4 - i5 | 0;
  i5 = ((i4 << 4) + (i5 << 5) | 0) * 23170 >> 16;
  i4 = i4 * 370720 >> 16;
  i11 = (i11 << 3) - i4 | 0;
  i4 = (i4 << 1) + i11 | 0;
  i7 = (i7 << 3) - i5 | 0;
  i5 = (i5 << 1) + i7 | 0;
  i9 = (i11 ^ 65535) - ((Math_imul(i11, -21746) | 0) >>> 16) + i7 | 0;
  i7 = i7 + i11 + ((Math_imul(i7, -21746) | 0) >>> 16) | 0;
  HEAP16[i10 >> 1] = i5 + 1 + ((i4 * 13036 | 0) >>> 16);
  HEAP16[i8 >> 1] = i9;
  HEAP16[i6 >> 1] = i7;
  HEAP16[i3 >> 1] = ((i5 * 13036 | 0) >>> 16) - i4;
  i1 = i1 + 1 | 0;
 } while ((i1 | 0) != 8);
 __ZN7guetzli12_GLOBAL__N_16RowDctEPsPKs(i2, 8864);
 __ZN7guetzli12_GLOBAL__N_16RowDctEPsPKs(i2 + 16 | 0, 8878);
 __ZN7guetzli12_GLOBAL__N_16RowDctEPsPKs(i2 + 32 | 0, 8892);
 __ZN7guetzli12_GLOBAL__N_16RowDctEPsPKs(i2 + 48 | 0, 8906);
 __ZN7guetzli12_GLOBAL__N_16RowDctEPsPKs(i2 + 64 | 0, 8864);
 __ZN7guetzli12_GLOBAL__N_16RowDctEPsPKs(i2 + 80 | 0, 8906);
 __ZN7guetzli12_GLOBAL__N_16RowDctEPsPKs(i2 + 96 | 0, 8892);
 __ZN7guetzli12_GLOBAL__N_16RowDctEPsPKs(i2 + 112 | 0, 8878);
 return;
}

function __ZN11butteraugliL11ConvolutionEjjjjjPKfS1_dPf(i23, i17, i24, i3, i18, i19, i20, d5, i21) {
 i23 = i23 | 0;
 i17 = i17 | 0;
 i24 = i24 | 0;
 i3 = i3 | 0;
 i18 = i18 | 0;
 i19 = i19 | 0;
 i20 = i20 | 0;
 d5 = +d5;
 i21 = i21 | 0;
 var i1 = 0, i2 = 0, d4 = 0.0, f6 = f0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = 0.0, d14 = 0.0, i15 = 0, d16 = 0.0, i22 = 0;
 i2 = i18 << 1 | 1;
 d4 = 0.0;
 i1 = 0;
 do {
  d4 = d4 + +Math_fround(HEAPF32[i19 + (i1 << 2) >> 2]);
  i1 = i1 + 1 | 0;
 } while ((i1 | 0) != (i2 | 0));
 if (!i23) return;
 i15 = i3 - i18 | 0;
 d16 = 1.0 - d5;
 d13 = d4 * d5;
 if (!i17) {
  i1 = 0;
  do i1 = i1 + i24 | 0; while (i1 >>> 0 < i23 >>> 0);
  return;
 }
 d14 = 1.0 / (d13 + d16 * 0.0);
 i2 = 0;
 i1 = 0;
 i12 = 0;
 while (1) {
  i10 = i1 >>> 0 < i18 >>> 0 ? 0 : i1 - i18 | 0;
  i11 = i15 + i1 | 0;
  i11 = (i11 >>> 0 < i23 >>> 0 ? i11 : i23) + -1 | 0;
  i7 = (i10 | 0) > (i11 | 0);
  if (!i7) {
   i9 = i2 + i18 | 0;
   i2 = i10;
   d4 = 0.0;
   while (1) {
    d4 = d4 + +Math_fround(HEAPF32[i19 + (i9 + i2 << 2) >> 2]);
    if ((i2 | 0) >= (i11 | 0)) break; else i2 = i2 + 1 | 0;
   }
   d4 = 1.0 / (d13 + d16 * d4);
   i3 = Math_imul(i12, i17) | 0;
   if (i7) i22 = 9; else {
    i2 = 0;
    do {
     i8 = Math_imul(i2, i23) | 0;
     d5 = 0.0;
     i7 = i10;
     while (1) {
      f6 = Math_fround(HEAPF32[i20 + (i7 + i8 << 2) >> 2]);
      d5 = d5 + +Math_fround(f6 * Math_fround(HEAPF32[i19 + (i9 + i7 << 2) >> 2]));
      if ((i7 | 0) >= (i11 | 0)) break; else i7 = i7 + 1 | 0;
     }
     HEAPF32[i21 + (i2 + i3 << 2) >> 2] = Math_fround(d4 * d5);
     i2 = i2 + 1 | 0;
    } while ((i2 | 0) != (i17 | 0));
   }
  } else {
   d4 = d14;
   i3 = Math_imul(i12, i17) | 0;
   i22 = 9;
  }
  if ((i22 | 0) == 9) {
   i22 = 0;
   f6 = Math_fround(d4 * 0.0);
   i2 = 0;
   do {
    HEAPF32[i21 + (i2 + i3 << 2) >> 2] = f6;
    i2 = i2 + 1 | 0;
   } while ((i2 | 0) != (i17 | 0));
  }
  i1 = i1 + i24 | 0;
  if (i1 >>> 0 < i23 >>> 0) {
   i2 = 0 - i1 | 0;
   i12 = i12 + 1 | 0;
  } else break;
 }
 return;
}

function __ZN7guetzli17BuildDCHistogramsERKNS_8JPEGDataEPNS_13JpegHistogramE(i3, i17) {
 i3 = i3 | 0;
 i17 = i17 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i18 = 0, i19 = 0;
 i1 = HEAP32[i3 + 84 >> 2] | 0;
 i2 = HEAP32[i3 + 80 >> 2] | 0;
 i18 = i2;
 if ((i1 | 0) == (i2 | 0)) return;
 i19 = i3 + 20 | 0;
 i16 = (i1 - i2 | 0) / 40 | 0;
 i15 = i3 + 24 | 0;
 i14 = 0;
 i1 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i1 | 0) > 0) {
   i10 = i18 + (i14 * 40 | 0) + 8 | 0;
   i11 = i18 + (i14 * 40 | 0) + 4 | 0;
   i12 = i18 + (i14 * 40 | 0) + 16 | 0;
   i13 = i18 + (i14 * 40 | 0) + 28 | 0;
   i3 = 0;
   i9 = 0;
   i2 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i2 | 0) > 0) {
     i8 = 0;
     i1 = HEAP32[i10 >> 2] | 0;
     do {
      if ((i1 | 0) > 0) {
       i7 = 0;
       i2 = HEAP32[i11 >> 2] | 0;
       do {
        if ((i2 | 0) > 0) {
         i6 = HEAP32[i13 >> 2] | 0;
         i5 = 0;
         while (1) {
          i4 = (Math_imul(i1, i9) | 0) + i7 | 0;
          i1 = (Math_imul(i2, i8) | 0) + i5 | 0;
          i4 = HEAP16[i6 + (i1 + (Math_imul(i4, HEAP32[i12 >> 2] | 0) | 0) << 6 << 1) >> 1] | 0;
          i1 = (i4 << 16 >> 16) - (i3 << 16 >> 16) | 0;
          i1 = (i1 | 0) > -1 ? i1 : 0 - i1 | 0;
          i2 = ((Math_clz32(i1 | 0) | 0) ^ 31) + 1 | 0;
          i2 = i17 + (i14 * 1028 | 0) + (((i1 | 0) == 0 ? 0 : i2) << 2) | 0;
          HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
          i5 = i5 + 1 | 0;
          i2 = HEAP32[i11 >> 2] | 0;
          i1 = HEAP32[i10 >> 2] | 0;
          if ((i5 | 0) >= (i2 | 0)) {
           i3 = i4;
           break;
          } else i3 = i4;
         }
        }
        i7 = i7 + 1 | 0;
       } while ((i7 | 0) < (i1 | 0));
       i2 = HEAP32[i15 >> 2] | 0;
      }
      i8 = i8 + 1 | 0;
     } while ((i8 | 0) < (i2 | 0));
     i1 = HEAP32[i19 >> 2] | 0;
    }
    i9 = i9 + 1 | 0;
   } while ((i9 | 0) < (i1 | 0));
  }
  i14 = i14 + 1 | 0;
 } while (i14 >>> 0 < i16 >>> 0);
 return;
}

function __ZNSt3__26vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE21__push_back_slow_pathIS6_EEvOT_(i9, i6) {
 i9 = i9 | 0;
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0, i10 = 0;
 i10 = i9 + 4 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i3 = ((i2 - i1 | 0) / 12 | 0) + 1 | 0;
 if (i3 >>> 0 > 357913941) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i9);
  i1 = HEAP32[i9 >> 2] | 0;
  i2 = HEAP32[i10 >> 2] | 0;
 }
 i8 = i9 + 8 | 0;
 i7 = ((HEAP32[i8 >> 2] | 0) - i1 | 0) / 12 | 0;
 i4 = i7 << 1;
 i4 = i7 >>> 0 < 178956970 ? (i4 >>> 0 < i3 >>> 0 ? i3 : i4) : 357913941;
 i1 = (i2 - i1 | 0) / 12 | 0;
 do if (i4) if (i4 >>> 0 > 357913941) {
  i10 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i10);
  ___cxa_throw(i10 | 0, 1784, 8);
 } else {
  i2 = __Znwj(i4 * 12 | 0) | 0;
  break;
 } else i2 = 0; while (0);
 i5 = i2 + (i1 * 12 | 0) | 0;
 i3 = i5;
 i7 = i2 + (i4 * 12 | 0) | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = 0;
 i6 = i5 + 12 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 if ((i1 | 0) == (i4 | 0)) {
  i2 = i3;
  i3 = i4;
  i1 = i4;
 } else {
  i2 = i5;
  do {
   i5 = i2 + -12 | 0;
   i1 = i1 + -12 | 0;
   HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
   HEAP32[i5 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
   HEAP32[i5 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   HEAP32[i1 + 8 >> 2] = 0;
   i2 = i3 + -12 | 0;
   i3 = i2;
  } while ((i1 | 0) != (i4 | 0));
  i2 = i3;
  i3 = HEAP32[i9 >> 2] | 0;
  i1 = HEAP32[i10 >> 2] | 0;
 }
 HEAP32[i9 >> 2] = i2;
 HEAP32[i10 >> 2] = i6;
 HEAP32[i8 >> 2] = i7;
 i2 = i3;
 if ((i1 | 0) != (i2 | 0)) do {
  i1 = i1 + -12 | 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i1);
 } while ((i1 | 0) != (i2 | 0));
 if (!i3) return;
 __ZdlPv(i3);
 return;
}

function __ZN7guetzli12_GLOBAL__N_16RowDctEPsPKs(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i12 = HEAP16[i1 >> 1] | 0;
 i3 = i1 + 14 | 0;
 i9 = HEAP16[i3 >> 1] | 0;
 i19 = i9 + i12 | 0;
 i9 = i12 - i9 | 0;
 i12 = i1 + 2 | 0;
 i16 = HEAP16[i12 >> 1] | 0;
 i8 = i1 + 12 | 0;
 i5 = HEAP16[i8 >> 1] | 0;
 i21 = i5 + i16 | 0;
 i5 = i16 - i5 | 0;
 i16 = i1 + 4 | 0;
 i11 = HEAP16[i16 >> 1] | 0;
 i10 = i1 + 10 | 0;
 i7 = HEAP16[i10 >> 1] | 0;
 i6 = i7 + i11 | 0;
 i7 = i11 - i7 | 0;
 i11 = i1 + 6 | 0;
 i13 = HEAP16[i11 >> 1] | 0;
 i17 = i1 + 8 | 0;
 i4 = HEAP16[i17 >> 1] | 0;
 i14 = i4 + i13 | 0;
 i4 = i13 - i4 | 0;
 i13 = HEAP16[i2 + 2 >> 1] | 0;
 i18 = HEAP16[i2 + 6 >> 1] | 0;
 i15 = HEAP16[i2 + 10 >> 1] | 0;
 i20 = i14 + i19 | 0;
 i14 = i19 - i14 | 0;
 i19 = i6 + i21 | 0;
 i6 = i21 - i6 | 0;
 HEAP16[i1 >> 1] = (Math_imul(i20 + i19 | 0, i18) | 0) >>> 16;
 HEAP16[i17 >> 1] = (Math_imul(i20 - i19 | 0, i18) | 0) >>> 16;
 HEAP16[i16 >> 1] = ((Math_imul(i15, i6) | 0) + (Math_imul(i14, i13) | 0) | 0) >>> 16;
 HEAP16[i8 >> 1] = ((Math_imul(i15, i14) | 0) - (Math_imul(i13, i6) | 0) | 0) >>> 16;
 i1 = HEAP16[i2 >> 1] | 0;
 i8 = HEAP16[i2 + 4 >> 1] | 0;
 i6 = HEAP16[i2 + 8 >> 1] | 0;
 i2 = HEAP16[i2 + 12 >> 1] | 0;
 HEAP16[i12 >> 1] = ((Math_imul(i8, i5) | 0) + (Math_imul(i1, i9) | 0) + (Math_imul(i6, i7) | 0) + (Math_imul(i2, i4) | 0) | 0) >>> 16;
 HEAP16[i11 >> 1] = ((Math_imul(i8, i9) | 0) - ((Math_imul(i6, i4) | 0) + (Math_imul(i1, i7) | 0) + (Math_imul(i2, i5) | 0)) | 0) >>> 16;
 HEAP16[i10 >> 1] = ((Math_imul(i8, i4) | 0) - (Math_imul(i1, i5) | 0) + (Math_imul(i6, i9) | 0) + (Math_imul(i2, i7) | 0) | 0) >>> 16;
 HEAP16[i3 >> 1] = ((Math_imul(i2, i9) | 0) + (Math_imul(i8, i7) | 0) - ((Math_imul(i6, i5) | 0) + (Math_imul(i1, i4) | 0)) | 0) >>> 16;
 return;
}

function __ZNSt3__26vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE21__push_back_slow_pathIRKS6_EEvOT_(i9, i6) {
 i9 = i9 | 0;
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0, i10 = 0;
 i10 = i9 + 4 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i3 = ((i2 - i1 | 0) / 12 | 0) + 1 | 0;
 if (i3 >>> 0 > 357913941) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i9);
  i1 = HEAP32[i9 >> 2] | 0;
  i2 = HEAP32[i10 >> 2] | 0;
 }
 i8 = i9 + 8 | 0;
 i7 = ((HEAP32[i8 >> 2] | 0) - i1 | 0) / 12 | 0;
 i4 = i7 << 1;
 i4 = i7 >>> 0 < 178956970 ? (i4 >>> 0 < i3 >>> 0 ? i3 : i4) : 357913941;
 i1 = (i2 - i1 | 0) / 12 | 0;
 do if (i4) if (i4 >>> 0 > 357913941) {
  i10 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i10);
  ___cxa_throw(i10 | 0, 1784, 8);
 } else {
  i2 = __Znwj(i4 * 12 | 0) | 0;
  break;
 } else i2 = 0; while (0);
 i5 = i2 + (i1 * 12 | 0) | 0;
 i3 = i5;
 i7 = i2 + (i4 * 12 | 0) | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i5, i6);
 i6 = i5 + 12 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 if ((i1 | 0) == (i4 | 0)) {
  i2 = i3;
  i3 = i4;
  i1 = i4;
 } else {
  i2 = i5;
  do {
   i5 = i2 + -12 | 0;
   i1 = i1 + -12 | 0;
   HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
   HEAP32[i5 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
   HEAP32[i5 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   HEAP32[i1 + 8 >> 2] = 0;
   i2 = i3 + -12 | 0;
   i3 = i2;
  } while ((i1 | 0) != (i4 | 0));
  i2 = i3;
  i3 = HEAP32[i9 >> 2] | 0;
  i1 = HEAP32[i10 >> 2] | 0;
 }
 HEAP32[i9 >> 2] = i2;
 HEAP32[i10 >> 2] = i6;
 HEAP32[i8 >> 2] = i7;
 i2 = i3;
 if ((i1 | 0) != (i2 | 0)) do {
  i1 = i1 + -12 | 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i1);
 } while ((i1 | 0) != (i2 | 0));
 if (!i3) return;
 __ZdlPv(i3);
 return;
}

function __ZN7guetzli12_GLOBAL__N_18RGBToYUVERKNSt3__26vectorIfNS1_9allocatorIfEEEE(i6, i5) {
 i6 = i6 | 0;
 i5 = i5 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i7 = 0, i8 = 0, f9 = f0, f10 = f0, f11 = f0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i1 = i8;
 i3 = i5 + 4 | 0;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i1, ((HEAP32[i3 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) >> 2 >>> 0) / 3 | 0);
 __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEEC2EjRKS3_(i6, 3, i1);
 i4 = HEAP32[i1 >> 2] | 0;
 if (i4 | 0) {
  i1 = i1 + 4 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) != (i4 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i4 | 0) >>> 2) << 2);
  __ZdlPv(i4);
 }
 i2 = HEAP32[i3 >> 2] | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i7 = i1;
 if ((i2 | 0) == (i1 | 0)) {
  STACKTOP = i8;
  return;
 }
 i6 = HEAP32[i6 >> 2] | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 i5 = HEAP32[i6 + 12 >> 2] | 0;
 i6 = HEAP32[i6 + 24 >> 2] | 0;
 i3 = i2 - i1 >> 2;
 i1 = 0;
 i2 = 0;
 while (1) {
  f11 = Math_fround(HEAPF32[i7 + (i1 << 2) >> 2]);
  f10 = Math_fround(HEAPF32[i7 + (i1 + 1 << 2) >> 2]);
  f9 = Math_fround(HEAPF32[i7 + (i1 + 2 << 2) >> 2]);
  HEAPF32[i4 + (i2 << 2) >> 2] = Math_fround(Math_fround(Math_fround(f11 * Math_fround(.298999995)) + Math_fround(f10 * Math_fround(.587000012))) + Math_fround(f9 * Math_fround(.114)));
  HEAPF32[i5 + (i2 << 2) >> 2] = Math_fround(Math_fround(Math_fround(Math_fround(f11 * Math_fround(-.168740004)) - Math_fround(f10 * Math_fround(.331259996))) + Math_fround(f9 * Math_fround(.5))) + Math_fround(128.0));
  HEAPF32[i6 + (i2 << 2) >> 2] = Math_fround(Math_fround(Math_fround(Math_fround(f11 * Math_fround(.5)) - Math_fround(f10 * Math_fround(.418689996))) - Math_fround(f9 * Math_fround(.0813099965))) + Math_fround(128.0));
  i1 = i1 + 3 | 0;
  if (i1 >>> 0 >= i3 >>> 0) break; else i2 = i2 + 1 | 0;
 }
 STACKTOP = i8;
 return;
}

function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE12__find_equalIS7_EERPNS_16__tree_node_baseIPvEESK_RKT_(i1, i10, i2) {
 i1 = i1 | 0;
 i10 = i10 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i11 = 0, i12 = 0;
 i1 = i1 + 4 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if (!i3) {
  HEAP32[i10 >> 2] = i1;
  i12 = i1;
  return i12 | 0;
 }
 i9 = HEAP8[i2 + 11 >> 0] | 0;
 i8 = i9 << 24 >> 24 < 0;
 i9 = i8 ? HEAP32[i2 + 4 >> 2] | 0 : i9 & 255;
 i8 = i8 ? HEAP32[i2 >> 2] | 0 : i2;
 i1 = i3;
 while (1) {
  i4 = i1 + 16 | 0;
  i3 = HEAP8[i4 + 11 >> 0] | 0;
  i5 = i3 << 24 >> 24 < 0;
  i3 = i5 ? HEAP32[i1 + 20 >> 2] | 0 : i3 & 255;
  i6 = i3 >>> 0 < i9 >>> 0;
  i2 = i6 ? i3 : i9;
  if ((i2 | 0) != 0 ? (i11 = _memcmp(i8, i5 ? HEAP32[i4 >> 2] | 0 : i4, i2) | 0, (i11 | 0) != 0) : 0) if ((i11 | 0) < 0) i7 = 7; else i7 = 9; else if (i9 >>> 0 < i3 >>> 0) i7 = 7; else i7 = 9;
  if ((i7 | 0) == 7) {
   i2 = HEAP32[i1 >> 2] | 0;
   if (!i2) {
    i7 = 8;
    break;
   } else i1 = i2;
  } else if ((i7 | 0) == 9) {
   i7 = 0;
   i2 = i9 >>> 0 < i3 >>> 0 ? i9 : i3;
   if ((i2 | 0) != 0 ? (i12 = _memcmp(i5 ? HEAP32[i4 >> 2] | 0 : i4, i8, i2) | 0, (i12 | 0) != 0) : 0) {
    if ((i12 | 0) >= 0) {
     i7 = 16;
     break;
    }
   } else i7 = 11;
   if ((i7 | 0) == 11 ? (0, !i6) : 0) {
    i7 = 16;
    break;
   }
   i3 = i1 + 4 | 0;
   i2 = HEAP32[i3 >> 2] | 0;
   if (!i2) {
    i7 = 15;
    break;
   } else i1 = i2;
  }
 }
 if ((i7 | 0) == 8) {
  HEAP32[i10 >> 2] = i1;
  i12 = i1;
  return i12 | 0;
 } else if ((i7 | 0) == 15) {
  HEAP32[i10 >> 2] = i1;
  i12 = i3;
  return i12 | 0;
 } else if ((i7 | 0) == 16) {
  HEAP32[i10 >> 2] = i1;
  i12 = i10;
  return i12 | 0;
 }
 return 0;
}

function _memcpy(i3, i6, i1) {
 i3 = i3 | 0;
 i6 = i6 | 0;
 i1 = i1 | 0;
 var i2 = 0, i4 = 0, i5 = 0;
 if ((i1 | 0) >= 8192) return _emscripten_memcpy_big(i3 | 0, i6 | 0, i1 | 0) | 0;
 i5 = i3 | 0;
 i4 = i3 + i1 | 0;
 if ((i3 & 3) == (i6 & 3)) {
  while (i3 & 3) {
   if (!i1) return i5 | 0;
   HEAP8[i3 >> 0] = HEAP8[i6 >> 0] | 0;
   i3 = i3 + 1 | 0;
   i6 = i6 + 1 | 0;
   i1 = i1 - 1 | 0;
  }
  i1 = i4 & -4 | 0;
  i2 = i1 - 64 | 0;
  while ((i3 | 0) <= (i2 | 0)) {
   HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i3 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   HEAP32[i3 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   HEAP32[i3 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
   HEAP32[i3 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
   HEAP32[i3 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
   HEAP32[i3 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
   HEAP32[i3 + 28 >> 2] = HEAP32[i6 + 28 >> 2];
   HEAP32[i3 + 32 >> 2] = HEAP32[i6 + 32 >> 2];
   HEAP32[i3 + 36 >> 2] = HEAP32[i6 + 36 >> 2];
   HEAP32[i3 + 40 >> 2] = HEAP32[i6 + 40 >> 2];
   HEAP32[i3 + 44 >> 2] = HEAP32[i6 + 44 >> 2];
   HEAP32[i3 + 48 >> 2] = HEAP32[i6 + 48 >> 2];
   HEAP32[i3 + 52 >> 2] = HEAP32[i6 + 52 >> 2];
   HEAP32[i3 + 56 >> 2] = HEAP32[i6 + 56 >> 2];
   HEAP32[i3 + 60 >> 2] = HEAP32[i6 + 60 >> 2];
   i3 = i3 + 64 | 0;
   i6 = i6 + 64 | 0;
  }
  while ((i3 | 0) < (i1 | 0)) {
   HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
   i3 = i3 + 4 | 0;
   i6 = i6 + 4 | 0;
  }
 } else {
  i1 = i4 - 4 | 0;
  while ((i3 | 0) < (i1 | 0)) {
   HEAP8[i3 >> 0] = HEAP8[i6 >> 0] | 0;
   HEAP8[i3 + 1 >> 0] = HEAP8[i6 + 1 >> 0] | 0;
   HEAP8[i3 + 2 >> 0] = HEAP8[i6 + 2 >> 0] | 0;
   HEAP8[i3 + 3 >> 0] = HEAP8[i6 + 3 >> 0] | 0;
   i3 = i3 + 4 | 0;
   i6 = i6 + 4 | 0;
  }
 }
 while ((i3 | 0) < (i4 | 0)) {
  HEAP8[i3 >> 0] = HEAP8[i6 >> 0] | 0;
  i3 = i3 + 1 | 0;
  i6 = i6 + 1 | 0;
 }
 return i5 | 0;
}

function ___fdopen(i9, i3) {
 i9 = i9 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i10 = 0, i11 = 0, i12 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i11 = i12 + 40 | 0;
 i8 = i12 + 24 | 0;
 i7 = i12 + 16 | 0;
 i4 = i12;
 i10 = i12 + 56 | 0;
 i2 = HEAP8[i3 >> 0] | 0;
 if (_memchr(17374, i2 << 24 >> 24, 4) | 0) {
  i1 = _malloc(1156) | 0;
  if (!i1) i1 = 0; else {
   i5 = i1;
   i6 = i5 + 124 | 0;
   do {
    HEAP32[i5 >> 2] = 0;
    i5 = i5 + 4 | 0;
   } while ((i5 | 0) < (i6 | 0));
   if (!(_strchr(i3, 43) | 0)) HEAP32[i1 >> 2] = i2 << 24 >> 24 == 114 ? 8 : 4;
   if (_strchr(i3, 101) | 0) {
    HEAP32[i4 >> 2] = i9;
    HEAP32[i4 + 4 >> 2] = 2;
    HEAP32[i4 + 8 >> 2] = 1;
    ___syscall221(221, i4 | 0) | 0;
    i2 = HEAP8[i3 >> 0] | 0;
   }
   if (i2 << 24 >> 24 == 97) {
    HEAP32[i7 >> 2] = i9;
    HEAP32[i7 + 4 >> 2] = 3;
    i2 = ___syscall221(221, i7 | 0) | 0;
    if (!(i2 & 1024)) {
     HEAP32[i8 >> 2] = i9;
     HEAP32[i8 + 4 >> 2] = 4;
     HEAP32[i8 + 8 >> 2] = i2 | 1024;
     ___syscall221(221, i8 | 0) | 0;
    }
    i3 = HEAP32[i1 >> 2] | 128;
    HEAP32[i1 >> 2] = i3;
   } else i3 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 + 60 >> 2] = i9;
   HEAP32[i1 + 44 >> 2] = i1 + 132;
   HEAP32[i1 + 48 >> 2] = 1024;
   i2 = i1 + 75 | 0;
   HEAP8[i2 >> 0] = -1;
   if ((i3 & 8 | 0) == 0 ? (HEAP32[i11 >> 2] = i9, HEAP32[i11 + 4 >> 2] = 21523, HEAP32[i11 + 8 >> 2] = i10, (___syscall54(54, i11 | 0) | 0) == 0) : 0) HEAP8[i2 >> 0] = 10;
   HEAP32[i1 + 32 >> 2] = 7;
   HEAP32[i1 + 36 >> 2] = 1;
   HEAP32[i1 + 40 >> 2] = 2;
   HEAP32[i1 + 12 >> 2] = 1;
   if (!(HEAP32[11028] | 0)) HEAP32[i1 + 76 >> 2] = -1;
   ___ofl_add(i1) | 0;
  }
 } else {
  HEAP32[(___errno_location() | 0) >> 2] = 22;
  i1 = 0;
 }
 STACKTOP = i12;
 return i1 | 0;
}

function __ZNK7guetzli11OutputImage6ToSRGBEiiii(i8, i3, i4, i5, i6, i7) {
 i8 = i8 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i9 = 0, i10 = 0;
 i2 = Math_imul(i7, i6) | 0;
 i1 = i2 * 3 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i8 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = 0;
 if (!i2) i1 = 0; else {
  if ((i2 | 0) < 0) __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i8);
  i2 = __Znwj(i1) | 0;
  HEAP32[i9 >> 2] = i2;
  HEAP32[i8 >> 2] = i2;
  HEAP32[i8 + 8 >> 2] = i2 + i1;
  do {
   HEAP8[i2 >> 0] = 0;
   i2 = (HEAP32[i9 >> 2] | 0) + 1 | 0;
   HEAP32[i9 >> 2] = i2;
   i1 = i1 + -1 | 0;
  } while ((i1 | 0) != 0);
  i1 = HEAP32[i8 >> 2] | 0;
 }
 i3 = i3 + 8 | 0;
 __ZNK7guetzli20OutputImageComponent8ToPixelsEiiiiPhi(HEAP32[i3 >> 2] | 0, i4, i5, i6, i7, i1, 3);
 __ZNK7guetzli20OutputImageComponent8ToPixelsEiiiiPhi((HEAP32[i3 >> 2] | 0) + 308 | 0, i4, i5, i6, i7, (HEAP32[i8 >> 2] | 0) + 1 | 0, 3);
 __ZNK7guetzli20OutputImageComponent8ToPixelsEiiiiPhi((HEAP32[i3 >> 2] | 0) + 616 | 0, i4, i5, i6, i7, (HEAP32[i8 >> 2] | 0) + 2 | 0, 3);
 i1 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i9 >> 2] | 0) == (i1 | 0)) return; else i2 = 0;
 do {
  i10 = i1 + i2 | 0;
  i6 = HEAPU8[i10 >> 0] | 0;
  i4 = i10 + 1 | 0;
  i5 = HEAPU8[i4 >> 0] | 0;
  i7 = i10 + 2 | 0;
  i3 = HEAPU8[i7 >> 0] | 0;
  HEAP8[i10 >> 0] = HEAP8[11627 + ((HEAP32[3256 + (i3 << 2) >> 2] | 0) + i6) >> 0] | 0;
  HEAP8[i4 >> 0] = HEAP8[11627 + (((HEAP32[5304 + (i5 << 2) >> 2] | 0) + (HEAP32[4280 + (i3 << 2) >> 2] | 0) >> 16) + i6) >> 0] | 0;
  HEAP8[i7 >> 0] = HEAP8[11627 + ((HEAP32[6328 + (i5 << 2) >> 2] | 0) + i6) >> 0] | 0;
  i2 = i2 + 3 | 0;
  i1 = HEAP32[i8 >> 2] | 0;
 } while (i2 >>> 0 < ((HEAP32[i9 >> 2] | 0) - i1 | 0) >>> 0);
 return;
}

function ___stdio_write(i7, i2, i1) {
 i7 = i7 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i10 = i12 + 16 | 0;
 i5 = i12;
 i4 = i12 + 32 | 0;
 i8 = i7 + 28 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 i9 = i7 + 20 | 0;
 i3 = (HEAP32[i9 >> 2] | 0) - i3 | 0;
 HEAP32[i4 + 4 >> 2] = i3;
 HEAP32[i4 + 8 >> 2] = i2;
 HEAP32[i4 + 12 >> 2] = i1;
 i3 = i3 + i1 | 0;
 i6 = i7 + 60 | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i4;
 HEAP32[i5 + 8 >> 2] = 2;
 i5 = ___syscall_ret(___syscall146(146, i5 | 0) | 0) | 0;
 L1 : do if ((i3 | 0) != (i5 | 0)) {
  i2 = 2;
  while (1) {
   if ((i5 | 0) < 0) break;
   i3 = i3 - i5 | 0;
   i14 = HEAP32[i4 + 4 >> 2] | 0;
   i13 = i5 >>> 0 > i14 >>> 0;
   i4 = i13 ? i4 + 8 | 0 : i4;
   i2 = (i13 << 31 >> 31) + i2 | 0;
   i14 = i5 - (i13 ? i14 : 0) | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + i14;
   i13 = i4 + 4 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - i14;
   HEAP32[i10 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i10 + 4 >> 2] = i4;
   HEAP32[i10 + 8 >> 2] = i2;
   i5 = ___syscall_ret(___syscall146(146, i10 | 0) | 0) | 0;
   if ((i3 | 0) == (i5 | 0)) {
    i11 = 3;
    break L1;
   }
  }
  HEAP32[i7 + 16 >> 2] = 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i7 >> 2] = HEAP32[i7 >> 2] | 32;
  if ((i2 | 0) == 2) i1 = 0; else i1 = i1 - (HEAP32[i4 + 4 >> 2] | 0) | 0;
 } else i11 = 3; while (0);
 if ((i11 | 0) == 3) {
  i14 = HEAP32[i7 + 44 >> 2] | 0;
  HEAP32[i7 + 16 >> 2] = i14 + (HEAP32[i7 + 48 >> 2] | 0);
  HEAP32[i8 >> 2] = i14;
  HEAP32[i9 >> 2] = i14;
 }
 STACKTOP = i12;
 return i1 | 0;
}

function __ZNSt3__26vectorIN7guetzli21JPEGComponentScanInfoENS_9allocatorIS2_EEE8__appendEj(i7, i2) {
 i7 = i7 | 0;
 i2 = i2 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0;
 i8 = i7 + 8 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 i9 = i7 + 4 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 if (((i4 - i1 | 0) / 12 | 0) >>> 0 >= i2 >>> 0) {
  do {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   HEAP32[i1 + 8 >> 2] = 0;
   i1 = (HEAP32[i9 >> 2] | 0) + 12 | 0;
   HEAP32[i9 >> 2] = i1;
   i2 = i2 + -1 | 0;
  } while ((i2 | 0) != 0);
  return;
 }
 i3 = HEAP32[i7 >> 2] | 0;
 i5 = ((i1 - i3 | 0) / 12 | 0) + i2 | 0;
 if (i5 >>> 0 > 357913941) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i7);
  i3 = HEAP32[i7 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i1 = HEAP32[i9 >> 2] | 0;
 }
 i6 = (i4 - i3 | 0) / 12 | 0;
 i4 = i6 << 1;
 i4 = i6 >>> 0 < 178956970 ? (i4 >>> 0 < i5 >>> 0 ? i5 : i4) : 357913941;
 i1 = (i1 - i3 | 0) / 12 | 0;
 do if (i4) if (i4 >>> 0 > 357913941) {
  i9 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i9);
  ___cxa_throw(i9 | 0, 1784, 8);
 } else {
  i3 = __Znwj(i4 * 12 | 0) | 0;
  break;
 } else i3 = 0; while (0);
 i6 = i3 + (i1 * 12 | 0) | 0;
 i5 = i3 + (i4 * 12 | 0) | 0;
 i1 = i6;
 i4 = i6;
 do {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  i1 = i4 + 12 | 0;
  i4 = i1;
  i2 = i2 + -1 | 0;
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i7 >> 2] | 0;
 i3 = (HEAP32[i9 >> 2] | 0) - i2 | 0;
 i1 = i6 + (((i3 | 0) / -12 | 0) * 12 | 0) | 0;
 if ((i3 | 0) > 0) _memcpy(i1 | 0, i2 | 0, i3 | 0) | 0;
 HEAP32[i7 >> 2] = i1;
 HEAP32[i9 >> 2] = i4;
 HEAP32[i8 >> 2] = i5;
 if (!i2) return;
 __ZdlPv(i2);
 return;
}
function __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEE7reserveEj(i8, i1) {
 i8 = i8 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i10 = i8 + 8 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 i3 = i5;
 if ((((HEAP32[i10 >> 2] | 0) - i5 | 0) / 12 | 0) >>> 0 >= i1 >>> 0) return;
 i11 = i8 + 4 | 0;
 if (i1 >>> 0 > 357913941) {
  i11 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i11);
  ___cxa_throw(i11 | 0, 1784, 8);
 }
 i7 = HEAP32[i11 >> 2] | 0;
 i6 = __Znwj(i1 * 12 | 0) | 0;
 i2 = i6 + (((i7 - i5 | 0) / 12 | 0) * 12 | 0) | 0;
 i9 = i2;
 i6 = i6 + (i1 * 12 | 0) | 0;
 i1 = i7;
 if ((i1 | 0) == (i3 | 0)) {
  i4 = i9;
  i7 = i5;
 } else {
  i4 = i9;
  do {
   i7 = i2 + -12 | 0;
   i5 = i1;
   i1 = i1 + -12 | 0;
   HEAP32[i7 >> 2] = 0;
   i12 = i2 + -8 | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i2 + -4 >> 2] = 0;
   HEAP32[i7 >> 2] = HEAP32[i1 >> 2];
   i7 = i5 + -8 | 0;
   HEAP32[i12 >> 2] = HEAP32[i7 >> 2];
   i5 = i5 + -4 | 0;
   HEAP32[i2 + -4 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i5 >> 2] = 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i1 >> 2] = 0;
   i2 = i4 + -12 | 0;
   i4 = i2;
  } while ((i1 | 0) != (i3 | 0));
  i7 = HEAP32[i8 >> 2] | 0;
  i3 = HEAP32[i11 >> 2] | 0;
 }
 HEAP32[i8 >> 2] = i4;
 HEAP32[i11 >> 2] = i9;
 HEAP32[i10 >> 2] = i6;
 i5 = i7;
 if ((i3 | 0) != (i5 | 0)) do {
  i1 = i3;
  i3 = i3 + -12 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if (i4 | 0) {
   i1 = i1 + -8 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 | 0) != (i4 | 0)) HEAP32[i1 >> 2] = i2 + (~((i2 + -4 - i4 | 0) >>> 2) << 2);
   __ZdlPv(i4);
  }
 } while ((i3 | 0) != (i5 | 0));
 if (!i7) return;
 __ZdlPv(i7);
 return;
}

function __ZNSt3__26vectorIN7guetzli13JpegHistogramENS_9allocatorIS2_EEE8__appendEj(i7, i2) {
 i7 = i7 | 0;
 i2 = i2 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0;
 i8 = i7 + 8 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 i9 = i7 + 4 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 if (((i4 - i1 | 0) / 1028 | 0) >>> 0 >= i2 >>> 0) {
  do {
   _memset(i1 | 0, 0, 1024) | 0;
   HEAP32[i1 + 1024 >> 2] = 1;
   i1 = (HEAP32[i9 >> 2] | 0) + 1028 | 0;
   HEAP32[i9 >> 2] = i1;
   i2 = i2 + -1 | 0;
  } while ((i2 | 0) != 0);
  return;
 }
 i3 = HEAP32[i7 >> 2] | 0;
 i5 = ((i1 - i3 | 0) / 1028 | 0) + i2 | 0;
 if (i5 >>> 0 > 4177983) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i7);
  i3 = HEAP32[i7 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i1 = HEAP32[i9 >> 2] | 0;
 }
 i6 = (i4 - i3 | 0) / 1028 | 0;
 i4 = i6 << 1;
 i4 = i6 >>> 0 < 2088991 ? (i4 >>> 0 < i5 >>> 0 ? i5 : i4) : 4177983;
 i1 = (i1 - i3 | 0) / 1028 | 0;
 do if (i4) if (i4 >>> 0 > 4177983) {
  i9 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i9);
  ___cxa_throw(i9 | 0, 1784, 8);
 } else {
  i3 = __Znwj(i4 * 1028 | 0) | 0;
  break;
 } else i3 = 0; while (0);
 i6 = i3 + (i1 * 1028 | 0) | 0;
 i5 = i3 + (i4 * 1028 | 0) | 0;
 i4 = i6;
 i1 = i6;
 do {
  _memset(i1 | 0, 0, 1024) | 0;
  HEAP32[i1 + 1024 >> 2] = 1;
  i1 = i4 + 1028 | 0;
  i4 = i1;
  i2 = i2 + -1 | 0;
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i7 >> 2] | 0;
 i3 = (HEAP32[i9 >> 2] | 0) - i2 | 0;
 i1 = i6 + (((i3 | 0) / -1028 | 0) * 1028 | 0) | 0;
 if ((i3 | 0) > 0) _memcpy(i1 | 0, i2 | 0, i3 | 0) | 0;
 HEAP32[i7 >> 2] = i1;
 HEAP32[i9 >> 2] = i4;
 HEAP32[i8 >> 2] = i5;
 if (!i2) return;
 __ZdlPv(i2);
 return;
}

function __ZNSt3__26vectorIN7guetzli16HuffmanCodeTableENS_9allocatorIS2_EEE8__appendEj(i7, i2) {
 i7 = i7 | 0;
 i2 = i2 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0;
 i8 = i7 + 8 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 i9 = i7 + 4 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 if (((i4 - i1 | 0) / 1280 | 0) >>> 0 >= i2 >>> 0) {
  do {
   _memset(i1 | 0, 0, 1280) | 0;
   i1 = (HEAP32[i9 >> 2] | 0) + 1280 | 0;
   HEAP32[i9 >> 2] = i1;
   i2 = i2 + -1 | 0;
  } while ((i2 | 0) != 0);
  return;
 }
 i3 = HEAP32[i7 >> 2] | 0;
 i5 = ((i1 - i3 | 0) / 1280 | 0) + i2 | 0;
 if (i5 >>> 0 > 3355443) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i7);
  i3 = HEAP32[i7 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i1 = HEAP32[i9 >> 2] | 0;
 }
 i6 = (i4 - i3 | 0) / 1280 | 0;
 i4 = i6 << 1;
 i4 = i6 >>> 0 < 1677721 ? (i4 >>> 0 < i5 >>> 0 ? i5 : i4) : 3355443;
 i1 = (i1 - i3 | 0) / 1280 | 0;
 do if (i4) if (i4 >>> 0 > 3355443) {
  i9 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i9);
  ___cxa_throw(i9 | 0, 1784, 8);
 } else {
  i3 = __Znwj(i4 * 1280 | 0) | 0;
  break;
 } else i3 = 0; while (0);
 i6 = i3 + (i1 * 1280 | 0) | 0;
 i5 = i3 + (i4 * 1280 | 0) | 0;
 i4 = i6;
 i1 = i6;
 do {
  _memset(i1 | 0, 0, 1280) | 0;
  i1 = i4 + 1280 | 0;
  i4 = i1;
  i2 = i2 + -1 | 0;
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i7 >> 2] | 0;
 i3 = (HEAP32[i9 >> 2] | 0) - i2 | 0;
 i1 = i6 + (((i3 | 0) / -1280 | 0) * 1280 | 0) | 0;
 if ((i3 | 0) > 0) _memcpy(i1 | 0, i2 | 0, i3 | 0) | 0;
 HEAP32[i7 >> 2] = i1;
 HEAP32[i9 >> 2] = i4;
 HEAP32[i8 >> 2] = i5;
 if (!i2) return;
 __ZdlPv(i2);
 return;
}

function __ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib(i1, i5, i7, i2, i4) {
 i1 = i1 | 0;
 i5 = i5 | 0;
 i7 = i7 | 0;
 i2 = i2 | 0;
 i4 = i4 | 0;
 var i3 = 0, i6 = 0, i8 = 0, i9 = 0;
 do if (!(__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i1, HEAP32[i5 + 8 >> 2] | 0, i4) | 0)) {
  i3 = i1 + 8 | 0;
  if (!(__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i1, HEAP32[i5 >> 2] | 0, i4) | 0)) {
   i8 = HEAP32[i3 >> 2] | 0;
   FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i8 >> 2] | 0) + 24 >> 2] & 3](i8, i5, i7, i2, i4);
   break;
  }
  i1 = i5 + 32 | 0;
  if ((HEAP32[i5 + 16 >> 2] | 0) != (i7 | 0) ? (i6 = i5 + 20 | 0, (HEAP32[i6 >> 2] | 0) != (i7 | 0)) : 0) {
   HEAP32[i1 >> 2] = i2;
   i2 = i5 + 44 | 0;
   if ((HEAP32[i2 >> 2] | 0) == 4) break;
   i1 = i5 + 52 | 0;
   HEAP8[i1 >> 0] = 0;
   i9 = i5 + 53 | 0;
   HEAP8[i9 >> 0] = 0;
   i3 = HEAP32[i3 >> 2] | 0;
   FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 3](i3, i5, i7, i7, 1, i4);
   if (HEAP8[i9 >> 0] | 0) if (!(HEAP8[i1 >> 0] | 0)) {
    i1 = 3;
    i8 = 11;
   } else i1 = 3; else {
    i1 = 4;
    i8 = 11;
   }
   if ((i8 | 0) == 11) {
    HEAP32[i6 >> 2] = i7;
    i9 = i5 + 40 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
    if ((HEAP32[i5 + 36 >> 2] | 0) == 1 ? (HEAP32[i5 + 24 >> 2] | 0) == 2 : 0) HEAP8[i5 + 54 >> 0] = 1;
   }
   HEAP32[i2 >> 2] = i1;
   break;
  }
  if ((i2 | 0) == 1) HEAP32[i1 >> 2] = 1;
 } else __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi(0, i5, i7, i2); while (0);
 return;
}

function ___dynamic_cast(i1, i2, i10, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i10 = i10 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i11 = 0, i12 = 0, i13 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i11 = i13;
 i9 = HEAP32[i1 >> 2] | 0;
 i12 = i1 + (HEAP32[i9 + -8 >> 2] | 0) | 0;
 i9 = HEAP32[i9 + -4 >> 2] | 0;
 HEAP32[i11 >> 2] = i10;
 HEAP32[i11 + 4 >> 2] = i1;
 HEAP32[i11 + 8 >> 2] = i2;
 HEAP32[i11 + 12 >> 2] = i3;
 i1 = i11 + 16 | 0;
 i2 = i11 + 20 | 0;
 i3 = i11 + 24 | 0;
 i4 = i11 + 28 | 0;
 i5 = i11 + 32 | 0;
 i6 = i11 + 40 | 0;
 i7 = i1;
 i8 = i7 + 36 | 0;
 do {
  HEAP32[i7 >> 2] = 0;
  i7 = i7 + 4 | 0;
 } while ((i7 | 0) < (i8 | 0));
 HEAP16[i1 + 36 >> 1] = 0;
 HEAP8[i1 + 38 >> 0] = 0;
 L1 : do if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i9, i10, 0) | 0) {
  HEAP32[i11 + 48 >> 2] = 1;
  FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] & 3](i9, i11, i12, i12, 1, 0);
  i1 = (HEAP32[i3 >> 2] | 0) == 1 ? i12 : 0;
 } else {
  FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i9 >> 2] | 0) + 24 >> 2] & 3](i9, i11, i12, 1, 0);
  switch (HEAP32[i11 + 36 >> 2] | 0) {
  case 0:
   {
    i1 = (HEAP32[i6 >> 2] | 0) == 1 & (HEAP32[i4 >> 2] | 0) == 1 & (HEAP32[i5 >> 2] | 0) == 1 ? HEAP32[i2 >> 2] | 0 : 0;
    break L1;
   }
  case 1:
   break;
  default:
   {
    i1 = 0;
    break L1;
   }
  }
  if ((HEAP32[i3 >> 2] | 0) != 1 ? !((HEAP32[i6 >> 2] | 0) == 0 & (HEAP32[i4 >> 2] | 0) == 1 & (HEAP32[i5 >> 2] | 0) == 1) : 0) {
   i1 = 0;
   break;
  }
  i1 = HEAP32[i1 >> 2] | 0;
 } while (0);
 STACKTOP = i13;
 return i1 | 0;
}

function _vfprintf(i15, i8, i1) {
 i15 = i15 | 0;
 i8 = i8 | 0;
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i16 = 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i10 = i16 + 120 | 0;
 i11 = i16 + 80 | 0;
 i13 = i16;
 i14 = i16 + 136 | 0;
 i2 = i11;
 i3 = i2 + 40 | 0;
 do {
  HEAP32[i2 >> 2] = 0;
  i2 = i2 + 4 | 0;
 } while ((i2 | 0) < (i3 | 0));
 HEAP32[i10 >> 2] = HEAP32[i1 >> 2];
 if ((_printf_core(0, i8, i10, i13, i11) | 0) < 0) i1 = -1; else {
  if ((HEAP32[i15 + 76 >> 2] | 0) > -1) i12 = ___lockfile(i15) | 0; else i12 = 0;
  i1 = HEAP32[i15 >> 2] | 0;
  i9 = i1 & 32;
  if ((HEAP8[i15 + 74 >> 0] | 0) < 1) HEAP32[i15 >> 2] = i1 & -33;
  i2 = i15 + 48 | 0;
  if (!(HEAP32[i2 >> 2] | 0)) {
   i3 = i15 + 44 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i14;
   i5 = i15 + 28 | 0;
   HEAP32[i5 >> 2] = i14;
   i6 = i15 + 20 | 0;
   HEAP32[i6 >> 2] = i14;
   HEAP32[i2 >> 2] = 80;
   i7 = i15 + 16 | 0;
   HEAP32[i7 >> 2] = i14 + 80;
   i1 = _printf_core(i15, i8, i10, i13, i11) | 0;
   if (i4) {
    FUNCTION_TABLE_iiii[HEAP32[i15 + 36 >> 2] & 7](i15, 0, 0) | 0;
    i1 = (HEAP32[i6 >> 2] | 0) == 0 ? -1 : i1;
    HEAP32[i3 >> 2] = i4;
    HEAP32[i2 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
    HEAP32[i5 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
   }
  } else i1 = _printf_core(i15, i8, i10, i13, i11) | 0;
  i2 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = i2 | i9;
  if (i12 | 0) ___unlockfile(i15);
  i1 = (i2 & 32 | 0) == 0 ? i1 : -1;
 }
 STACKTOP = i16;
 return i1 | 0;
}

function __ZNSt3__26vectorIN11butteraugli5ImageIfEENS_9allocatorIS3_EEE7reserveEj(i9, i3) {
 i9 = i9 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i10 = 0, i11 = 0, i12 = 0;
 i10 = i9 + 8 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i1 = i2;
 if ((((HEAP32[i10 >> 2] | 0) - i2 | 0) / 20 | 0) >>> 0 >= i3 >>> 0) return;
 i11 = i9 + 4 | 0;
 if (i3 >>> 0 > 214748364) {
  i11 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i11);
  ___cxa_throw(i11 | 0, 1784, 8);
 }
 i5 = HEAP32[i11 >> 2] | 0;
 i7 = __Znwj(i3 * 20 | 0) | 0;
 i6 = i7 + (((i5 - i2 | 0) / 20 | 0) * 20 | 0) | 0;
 i8 = i6;
 i7 = i7 + (i3 * 20 | 0) | 0;
 i2 = i5;
 if ((i2 | 0) == (i1 | 0)) i4 = i8; else {
  i4 = i8;
  i3 = i6;
  do {
   i6 = i2;
   i2 = i2 + -20 | 0;
   HEAP32[i3 + -20 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i3 + -16 >> 2] = HEAP32[i6 + -16 >> 2];
   HEAP32[i3 + -12 >> 2] = HEAP32[i6 + -12 >> 2];
   i12 = i6 + -8 | 0;
   i5 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i6 = HEAP32[i6 + -4 >> 2] | 0;
   HEAP32[i3 + -8 >> 2] = i5;
   HEAP32[i3 + -4 >> 2] = i6;
   i3 = i4 + -20 | 0;
   i4 = i3;
  } while ((i2 | 0) != (i1 | 0));
  i5 = HEAP32[i9 >> 2] | 0;
  i1 = HEAP32[i11 >> 2] | 0;
 }
 HEAP32[i9 >> 2] = i4;
 HEAP32[i11 >> 2] = i8;
 HEAP32[i10 >> 2] = i7;
 i3 = i5;
 if ((i1 | 0) != (i3 | 0)) do {
  i12 = i1 + -8 | 0;
  i2 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  if (i2 | 0) FUNCTION_TABLE_vi[HEAP32[i1 + -4 >> 2] & 15](i2);
  i1 = i1 + -20 | 0;
 } while ((i1 | 0) != (i3 | 0));
 if (!i5) return;
 __ZdlPv(i5);
 return;
}

function __ZN7guetzli11OutputImage16CopyFromJpegDataERKNS_8JPEGDataE(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i11 = i1 + 80 | 0;
 i12 = i1 + 84 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 if ((HEAP32[i12 >> 2] | 0) == (i3 | 0)) return;
 i13 = i1 + 12 | 0;
 i14 = i1 + 16 | 0;
 i15 = i1 + 56 | 0;
 i10 = i1 + 60 | 0;
 i9 = i2 + 8 | 0;
 i8 = 0;
 i1 = i3;
 while (1) {
  i2 = HEAP32[i13 >> 2] | 0;
  i3 = HEAP32[i1 + (i8 * 40 | 0) + 4 >> 2] | 0;
  if ((i2 | 0) % (i3 | 0) | 0 | 0) {
   i1 = 5;
   break;
  }
  i4 = HEAP32[i14 >> 2] | 0;
  i5 = HEAP32[i1 + (i8 * 40 | 0) + 8 >> 2] | 0;
  if ((i4 | 0) % (i5 | 0) | 0 | 0) {
   i1 = 7;
   break;
  }
  i6 = HEAP32[i1 + (i8 * 40 | 0) + 12 >> 2] | 0;
  i7 = HEAP32[i15 >> 2] | 0;
  if (i6 >>> 0 >= (((HEAP32[i10 >> 2] | 0) - i7 | 0) / 24 | 0) >>> 0) {
   i1 = 9;
   break;
  }
  __ZN7guetzli20OutputImageComponent21CopyFromJpegComponentERKNS_13JPEGComponentEiiPKi((HEAP32[i9 >> 2] | 0) + (i8 * 308 | 0) | 0, i1 + (i8 * 40 | 0) | 0, (i2 | 0) / (i3 | 0) | 0, (i4 | 0) / (i5 | 0) | 0, HEAP32[i7 + (i6 * 24 | 0) >> 2] | 0);
  i8 = i8 + 1 | 0;
  i1 = HEAP32[i11 >> 2] | 0;
  if (i8 >>> 0 >= (((HEAP32[i12 >> 2] | 0) - i1 | 0) / 40 | 0) >>> 0) {
   i1 = 3;
   break;
  }
 }
 if ((i1 | 0) == 3) return; else if ((i1 | 0) == 5) ___assert_fail(9297, 8947, 252, 9345); else if ((i1 | 0) == 7) ___assert_fail(9362, 8947, 253, 9345); else if ((i1 | 0) == 9) ___assert_fail(9410, 8947, 256, 9345);
}

function __ZN7guetzli17BuildACHistogramsERKNS_8JPEGDataEPNS_13JpegHistogramE(i1, i16) {
 i1 = i1 | 0;
 i16 = i16 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = HEAP32[i1 + 84 >> 2] | 0;
 i1 = HEAP32[i1 + 80 >> 2] | 0;
 i15 = i1;
 if ((i2 | 0) == (i1 | 0)) return;
 i14 = (i2 - i1 | 0) / 40 | 0;
 i10 = 0;
 do {
  i1 = HEAP32[i15 + (i10 * 40 | 0) + 32 >> 2] | 0;
  i2 = HEAP32[i15 + (i10 * 40 | 0) + 28 >> 2] | 0;
  i11 = i2;
  if ((i1 | 0) != (i2 | 0)) {
   i12 = i16 + (i10 * 1028 | 0) + 960 | 0;
   i13 = i16 + (i10 * 1028 | 0) | 0;
   i8 = i1 - i2 >> 1;
   i6 = 0;
   do {
    i9 = i11 + (i6 << 1) | 0;
    i7 = 1;
    i1 = 0;
    do {
     i4 = HEAP16[i9 + (HEAP32[2648 + (i7 << 2) >> 2] << 1) >> 1] | 0;
     i5 = i4 << 16 >> 16;
     if (!(i4 << 16 >> 16)) i1 = i1 + 1 | 0; else {
      i2 = i1 + -16 | 0;
      i3 = i2 >>> 4;
      if ((i1 | 0) > 15) {
       HEAP32[i12 >> 2] = (i3 << 1) + 2 + (HEAP32[i12 >> 2] | 0);
       i1 = i2 - (i3 << 4) | 0;
      }
      i1 = i16 + (i10 * 1028 | 0) + (((Math_clz32((i4 << 16 >> 16 > -1 ? i5 : 0 - i5 | 0) | 0) | 0) ^ 31) + 1 + (i1 << 4) << 2) | 0;
      HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
      i1 = 0;
     }
     i7 = i7 + 1 | 0;
    } while ((i7 | 0) != 64);
    if ((i1 | 0) > 0) HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
    i6 = i6 + 64 | 0;
   } while (i6 >>> 0 < i8 >>> 0);
  }
  i10 = i10 + 1 | 0;
 } while (i10 >>> 0 < i14 >>> 0);
 return;
}

function _exp(d1) {
 d1 = +d1;
 var i2 = 0, d3 = 0.0, i4 = 0, i5 = 0, i6 = 0, d7 = 0.0, i8 = 0, d9 = 0.0;
 HEAPF64[tempDoublePtr >> 3] = d1;
 i2 = HEAP32[tempDoublePtr >> 2] | 0;
 i4 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 i5 = _bitshift64Lshr(i2 | 0, i4 | 0, 63) | 0;
 i6 = i4 & 2147483647;
 do if (i6 >>> 0 > 1082532650) {
  i8 = i4 & 2147483647;
  if (i8 >>> 0 > 2146435072 | (i8 | 0) == 2146435072 & i2 >>> 0 > 0) {
   d7 = d1;
   return +d7;
  }
  if (d1 > 709.782712893384) {
   d7 = d1 * 89884656743115795.0e291;
   return +d7;
  } else {
   if (d1 < -708.3964185322641 & d1 < -745.1332191019411) d1 = 0.0; else {
    i8 = 8;
    break;
   }
   return +d1;
  }
 } else {
  if (i6 >>> 0 > 1071001154) {
   if (i6 >>> 0 > 1072734897) {
    i8 = 8;
    break;
   }
   i2 = (i5 ^ 1) - i5 | 0;
   i8 = 10;
   break;
  }
  if (i6 >>> 0 > 1043333120) {
   d7 = d1;
   d3 = 0.0;
   i2 = 0;
  } else {
   d7 = d1 + 1.0;
   return +d7;
  }
 } while (0);
 if ((i8 | 0) == 8) {
  i2 = ~~(d1 * 1.4426950408889634 + +HEAPF64[1704 + (i5 << 3) >> 3]);
  i8 = 10;
 }
 if ((i8 | 0) == 10) {
  d3 = +(i2 | 0);
  d1 = d1 - d3 * .6931471803691238;
  d3 = d3 * 1.9082149292705877e-010;
  d7 = d1 - d3;
 }
 d9 = d7 * d7;
 d9 = d7 - d9 * (d9 * (d9 * (d9 * (d9 * 4.1381367970572385e-008 + -1.6533902205465252e-006) + 6.613756321437934e-005) + -2.7777777777015593e-003) + .16666666666666602);
 d1 = d1 + (d7 * d9 / (2.0 - d9) - d3) + 1.0;
 if (!i2) {
  d9 = d1;
  return +d9;
 }
 d9 = +_scalbn(d1, i2);
 return +d9;
}

function ___mo_lookup(i12, i13, i10) {
 i12 = i12 | 0;
 i13 = i13 | 0;
 i10 = i10 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i11 = 0;
 i11 = (HEAP32[i12 >> 2] | 0) + 1794895138 | 0;
 i3 = _swapc(HEAP32[i12 + 8 >> 2] | 0, i11) | 0;
 i1 = _swapc(HEAP32[i12 + 12 >> 2] | 0, i11) | 0;
 i2 = _swapc(HEAP32[i12 + 16 >> 2] | 0, i11) | 0;
 L1 : do if ((i3 >>> 0 < i13 >>> 2 >>> 0 ? (i9 = i13 - (i3 << 2) | 0, i1 >>> 0 < i9 >>> 0 & i2 >>> 0 < i9 >>> 0) : 0) ? ((i2 | i1) & 3 | 0) == 0 : 0) {
  i9 = i1 >>> 2;
  i8 = i2 >>> 2;
  i7 = 0;
  while (1) {
   i5 = i3 >>> 1;
   i6 = i7 + i5 | 0;
   i4 = i6 << 1;
   i2 = i4 + i9 | 0;
   i1 = _swapc(HEAP32[i12 + (i2 << 2) >> 2] | 0, i11) | 0;
   i2 = _swapc(HEAP32[i12 + (i2 + 1 << 2) >> 2] | 0, i11) | 0;
   if (!(i2 >>> 0 < i13 >>> 0 & i1 >>> 0 < (i13 - i2 | 0) >>> 0)) {
    i1 = 0;
    break L1;
   }
   if (HEAP8[i12 + (i2 + i1) >> 0] | 0) {
    i1 = 0;
    break L1;
   }
   i1 = _strcmp(i10, i12 + i2 | 0) | 0;
   if (!i1) break;
   i1 = (i1 | 0) < 0;
   if ((i3 | 0) == 1) {
    i1 = 0;
    break L1;
   } else {
    i7 = i1 ? i7 : i6;
    i3 = i1 ? i5 : i3 - i5 | 0;
   }
  }
  i1 = i4 + i8 | 0;
  i2 = _swapc(HEAP32[i12 + (i1 << 2) >> 2] | 0, i11) | 0;
  i1 = _swapc(HEAP32[i12 + (i1 + 1 << 2) >> 2] | 0, i11) | 0;
  if (i1 >>> 0 < i13 >>> 0 & i2 >>> 0 < (i13 - i1 | 0) >>> 0) i1 = (HEAP8[i12 + (i1 + i2) >> 0] | 0) == 0 ? i12 + i1 | 0 : 0; else i1 = 0;
 } else i1 = 0; while (0);
 return i1 | 0;
}

function __ZN7guetzli12_GLOBAL__N_111Upsample2x2ERKNSt3__26vectorIfNS1_9allocatorIfEEEEii(i3, i2, i10, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i10 = i10 | 0;
 i1 = i1 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i11 = (i10 + 1 | 0) / 2 | 0;
 i12 = (i1 + 1 | 0) / 2 | 0;
 if (((HEAP32[i2 + 4 >> 2] | 0) - (HEAP32[i2 >> 2] | 0) >> 2 | 0) != (Math_imul(i12, i11) | 0)) ___assert_fail(11013, 10898, 388, 11036);
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i3, Math_imul(i1, i10) | 0);
 if ((i1 | 0) <= 0) return;
 i8 = i1 + -1 | 0;
 i9 = i10 + -1 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i10 | 0) <= 0) return;
 i4 = HEAP32[i3 >> 2] | 0;
 i2 = 0;
 i1 = 0;
 do {
  i6 = i2 << 1;
  i5 = Math_imul((i6 | 0) < (i8 | 0) ? i6 : i8, i10) | 0;
  i6 = i6 | 1;
  i6 = Math_imul((i6 | 0) < (i8 | 0) ? i6 : i8, i10) | 0;
  i3 = 0;
  do {
   i13 = i3 << 1;
   i14 = i7 + (i1 << 2) | 0;
   i15 = (i13 | 0) < (i9 | 0) ? i13 : i9;
   HEAP32[i4 + (i15 + i5 << 2) >> 2] = HEAP32[i14 >> 2];
   i13 = i13 | 1;
   i13 = (i13 | 0) < (i9 | 0) ? i13 : i9;
   HEAP32[i4 + (i13 + i5 << 2) >> 2] = HEAP32[i14 >> 2];
   HEAP32[i4 + (i15 + i6 << 2) >> 2] = HEAP32[i14 >> 2];
   HEAP32[i4 + (i13 + i6 << 2) >> 2] = HEAP32[i14 >> 2];
   i3 = i3 + 1 | 0;
   i1 = i1 + 1 | 0;
  } while ((i3 | 0) < (i11 | 0));
  i2 = i2 + 1 | 0;
 } while ((i2 | 0) < (i12 | 0));
 return;
}

function __ZNSt3__26vectorIN7guetzli20OutputImageComponentENS_9allocatorIS2_EEEC2EjRKS2_(i1, i2, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i6 = i6 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = 0;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 if (!i2) return;
 if (i2 >>> 0 > 13944699) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i1);
  i7 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i7);
  ___cxa_throw(i7 | 0, 1784, 8);
 }
 i8 = __Znwj(i2 * 308 | 0) | 0;
 HEAP32[i7 >> 2] = i8;
 HEAP32[i1 >> 2] = i8;
 HEAP32[i1 + 8 >> 2] = i8 + (i2 * 308 | 0);
 i3 = i6 + 28 | 0;
 i4 = i6 + 40 | 0;
 i5 = i6 + 52 | 0;
 i1 = i2;
 i2 = i8;
 do {
  HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
  HEAP32[i2 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
  HEAP32[i2 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
  HEAP32[i2 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
  HEAP32[i2 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
  __ZNSt3__26vectorIsNS_9allocatorIsEEEC2ERKS3_(i2 + 28 | 0, i3);
  __ZNSt3__26vectorItNS_9allocatorItEEEC2ERKS3_(i2 + 40 | 0, i4);
  _memcpy(i2 + 52 | 0, i5 | 0, 256) | 0;
  i2 = (HEAP32[i7 >> 2] | 0) + 308 | 0;
  HEAP32[i7 >> 2] = i2;
  i1 = i1 + -1 | 0;
 } while ((i1 | 0) != 0);
 return;
}

function __ZNSt3__26vectorIfNS_9allocatorIfEEE8__appendEj(i7, i8) {
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i9 = 0, i10 = 0;
 i9 = i7 + 8 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = i7 + 4 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 if (i2 - i3 >> 2 >>> 0 >= i8 >>> 0) {
  _memset(i3 | 0, 0, i8 << 2 | 0) | 0;
  HEAP32[i10 >> 2] = i3 + (i8 << 2);
  return;
 }
 i1 = HEAP32[i7 >> 2] | 0;
 i4 = (i3 - i1 >> 2) + i8 | 0;
 if (i4 >>> 0 > 1073741823) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i7);
  i1 = HEAP32[i7 >> 2] | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  i3 = HEAP32[i10 >> 2] | 0;
 }
 i2 = i2 - i1 | 0;
 i5 = i2 >> 1;
 i5 = i2 >> 2 >>> 0 < 536870911 ? (i5 >>> 0 < i4 >>> 0 ? i4 : i5) : 1073741823;
 i2 = i3 - i1 >> 2;
 do if (i5) if (i5 >>> 0 > 1073741823) {
  i10 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i10);
  ___cxa_throw(i10 | 0, 1784, 8);
 } else {
  i6 = __Znwj(i5 << 2) | 0;
  break;
 } else i6 = 0; while (0);
 i4 = i6 + (i2 << 2) | 0;
 _memset(i4 | 0, 0, i8 << 2 | 0) | 0;
 i2 = i3 - i1 | 0;
 i3 = i4 + (0 - (i2 >> 2) << 2) | 0;
 if ((i2 | 0) > 0) _memcpy(i3 | 0, i1 | 0, i2 | 0) | 0;
 HEAP32[i7 >> 2] = i3;
 HEAP32[i10 >> 2] = i4 + (i8 << 2);
 HEAP32[i9 >> 2] = i6 + (i5 << 2);
 if (!i1) return;
 __ZdlPv(i1);
 return;
}

function __ZNSt3__26vectorIN7guetzli13JPEGComponentENS_9allocatorIS2_EEEC2ERKS5_(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i2 >> 2] = 0;
 i6 = i2 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 i5 = i3 + 4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) | 0;
 i4 = (i1 | 0) / 40 | 0;
 if (!i1) return;
 if (i4 >>> 0 > 107374182) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i2);
  i6 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i6);
  ___cxa_throw(i6 | 0, 1784, 8);
 }
 i1 = __Znwj(i1) | 0;
 HEAP32[i6 >> 2] = i1;
 HEAP32[i2 >> 2] = i1;
 HEAP32[i2 + 8 >> 2] = i1 + (i4 * 40 | 0);
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == (i3 | 0)) return;
 do {
  HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
  HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
  HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
  HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
  HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
  __ZNSt3__26vectorIsNS_9allocatorIsEEEC2ERKS3_(i1 + 28 | 0, i2 + 28 | 0);
  i2 = i2 + 40 | 0;
  i1 = (HEAP32[i6 >> 2] | 0) + 40 | 0;
  HEAP32[i6 >> 2] = i1;
 } while ((i2 | 0) != (i3 | 0));
 return;
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc(i6, i7, i1, i2, i9, i10, i11, i3) {
 i6 = i6 | 0;
 i7 = i7 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i8 = 0, i12 = 0, i13 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = i13;
 if ((-18 - i7 | 0) >>> 0 < i1 >>> 0) __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv(i6);
 if ((HEAP8[i6 + 11 >> 0] | 0) < 0) i8 = HEAP32[i6 >> 2] | 0; else i8 = i6;
 if (i7 >>> 0 < 2147483623) {
  i4 = i1 + i7 | 0;
  i5 = i7 << 1;
  i4 = i4 >>> 0 < i5 >>> 0 ? i5 : i4;
  i4 = i4 >>> 0 < 11 ? 11 : i4 + 16 & -16;
 } else i4 = -17;
 i5 = __Znwj(i4) | 0;
 if (i9 | 0) __ZNSt3__211char_traitsIcE4copyEPcPKcj(i5, i8, i9) | 0;
 if (i11 | 0) __ZNSt3__211char_traitsIcE4copyEPcPKcj(i5 + i9 | 0, i3, i11) | 0;
 i1 = i2 - i10 | 0;
 i2 = i1 - i9 | 0;
 if (i2 | 0) __ZNSt3__211char_traitsIcE4copyEPcPKcj(i5 + i9 + i11 | 0, i8 + i9 + i10 | 0, i2) | 0;
 if ((i7 | 0) != 10) __ZdlPv(i8);
 HEAP32[i6 >> 2] = i5;
 HEAP32[i6 + 8 >> 2] = i4 | -2147483648;
 i11 = i1 + i11 | 0;
 HEAP32[i6 + 4 >> 2] = i11;
 HEAP8[i12 >> 0] = 0;
 __ZNSt3__211char_traitsIcE6assignERcRKc(i5 + i11 | 0, i12);
 STACKTOP = i13;
 return;
}

function __ZNSt3__26vectorIsNS_9allocatorIsEEE8__appendEj(i7, i8) {
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i9 = 0, i10 = 0;
 i9 = i7 + 8 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = i7 + 4 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 if (i2 - i3 >> 1 >>> 0 >= i8 >>> 0) {
  _memset(i3 | 0, 0, i8 << 1 | 0) | 0;
  HEAP32[i10 >> 2] = i3 + (i8 << 1);
  return;
 }
 i1 = HEAP32[i7 >> 2] | 0;
 i4 = (i3 - i1 >> 1) + i8 | 0;
 if ((i4 | 0) < 0) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i7);
  i1 = HEAP32[i7 >> 2] | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  i3 = HEAP32[i10 >> 2] | 0;
 }
 i5 = i2 - i1 | 0;
 i5 = i5 >> 1 >>> 0 < 1073741823 ? (i5 >>> 0 < i4 >>> 0 ? i4 : i5) : 2147483647;
 i2 = i3 - i1 >> 1;
 do if (i5) if ((i5 | 0) < 0) {
  i10 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i10);
  ___cxa_throw(i10 | 0, 1784, 8);
 } else {
  i6 = __Znwj(i5 << 1) | 0;
  break;
 } else i6 = 0; while (0);
 i4 = i6 + (i2 << 1) | 0;
 _memset(i4 | 0, 0, i8 << 1 | 0) | 0;
 i2 = i3 - i1 | 0;
 i3 = i4 + (0 - (i2 >> 1) << 1) | 0;
 if ((i2 | 0) > 0) _memcpy(i3 | 0, i1 | 0, i2 | 0) | 0;
 HEAP32[i7 >> 2] = i3;
 HEAP32[i10 >> 2] = i4 + (i8 << 1);
 HEAP32[i9 >> 2] = i6 + (i5 << 1);
 if (!i1) return;
 __ZdlPv(i1);
 return;
}

function __ZNSt3__26vectorIhNS_9allocatorIhEEE8__appendEj(i7, i2) {
 i7 = i7 | 0;
 i2 = i2 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i9 = 0;
 i8 = i7 + 8 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 i9 = i7 + 4 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 if ((i4 - i1 | 0) >>> 0 >= i2 >>> 0) {
  do {
   HEAP8[i1 >> 0] = 0;
   i1 = (HEAP32[i9 >> 2] | 0) + 1 | 0;
   HEAP32[i9 >> 2] = i1;
   i2 = i2 + -1 | 0;
  } while ((i2 | 0) != 0);
  return;
 }
 i3 = HEAP32[i7 >> 2] | 0;
 i5 = i1 - i3 + i2 | 0;
 if ((i5 | 0) < 0) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i7);
  i3 = HEAP32[i7 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i1 = HEAP32[i9 >> 2] | 0;
 }
 i6 = i4 - i3 | 0;
 i4 = i6 << 1;
 i4 = i6 >>> 0 < 1073741823 ? (i4 >>> 0 < i5 >>> 0 ? i5 : i4) : 2147483647;
 if (!i4) i5 = 0; else i5 = __Znwj(i4) | 0;
 i6 = i5 + (i1 - i3) | 0;
 i5 = i5 + i4 | 0;
 i4 = i6;
 i1 = i6;
 do {
  HEAP8[i1 >> 0] = 0;
  i1 = i4 + 1 | 0;
  i4 = i1;
  i2 = i2 + -1 | 0;
 } while ((i2 | 0) != 0);
 i2 = HEAP32[i7 >> 2] | 0;
 i3 = (HEAP32[i9 >> 2] | 0) - i2 | 0;
 i1 = i6 + (0 - i3) | 0;
 if ((i3 | 0) > 0) _memcpy(i1 | 0, i2 | 0, i3 | 0) | 0;
 HEAP32[i7 >> 2] = i1;
 HEAP32[i9 >> 2] = i4;
 HEAP32[i8 >> 2] = i5;
 if (!i2) return;
 __ZdlPv(i2);
 return;
}

function __ZNSt3__26vectorINS_4pairIifEENS_9allocatorIS2_EEE21__push_back_slow_pathIS2_EEvOT_(i9, i7) {
 i9 = i9 | 0;
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i8 = 0, i10 = 0, i11 = 0;
 i10 = i9 + 4 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i3 = (i2 - i1 >> 3) + 1 | 0;
 if (i3 >>> 0 > 536870911) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i9);
  i1 = HEAP32[i9 >> 2] | 0;
  i2 = HEAP32[i10 >> 2] | 0;
 }
 i8 = i9 + 8 | 0;
 i6 = (HEAP32[i8 >> 2] | 0) - i1 | 0;
 i5 = i6 >> 2;
 i5 = i6 >> 3 >>> 0 < 268435455 ? (i5 >>> 0 < i3 >>> 0 ? i3 : i5) : 536870911;
 i3 = i2 - i1 >> 3;
 do if (i5) if (i5 >>> 0 > 536870911) {
  i10 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i10);
  ___cxa_throw(i10 | 0, 1784, 8);
 } else {
  i6 = __Znwj(i5 << 3) | 0;
  break;
 } else i6 = 0; while (0);
 i4 = i6 + (i3 << 3) | 0;
 i11 = i7;
 i7 = HEAP32[i11 + 4 >> 2] | 0;
 i3 = i4;
 HEAP32[i3 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i3 + 4 >> 2] = i7;
 i2 = i2 - i1 | 0;
 i3 = i4 + (0 - (i2 >> 3) << 3) | 0;
 if ((i2 | 0) > 0) _memcpy(i3 | 0, i1 | 0, i2 | 0) | 0;
 HEAP32[i9 >> 2] = i3;
 HEAP32[i10 >> 2] = i4 + 8;
 HEAP32[i8 >> 2] = i6 + (i5 << 3);
 if (!i1) return;
 __ZdlPv(i1);
 return;
}

function __ZNK7guetzli11OutputImage11ToLinearRGBEiiiiPNSt3__26vectorINS2_IfNS1_9allocatorIfEEEENS3_IS5_EEEE(i1, i2, i3, i4, i5, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i7 = i7 | 0;
 var i6 = 0, i8 = 0, i9 = 0, i10 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i10;
 i8 = __ZN7guetzli18Srgb8ToLinearTableEv() | 0;
 __ZNK7guetzli11OutputImage6ToSRGBEiiii(i9, i1, i2, i3, i4, i5);
 i6 = Math_imul(i5, i4) | 0;
 if ((i6 | 0) <= 0) {
  i1 = HEAP32[i9 >> 2] | 0;
  if (!i1) {
   STACKTOP = i10;
   return;
  }
 } else {
  i1 = HEAP32[i9 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i3 = HEAP32[i5 + 24 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i5 + 12 >> 2] | 0;
  i2 = 0;
  do {
   i7 = i2 * 3 | 0;
   HEAPF32[i4 + (i2 << 2) >> 2] = Math_fround(+HEAPF64[i8 + ((HEAPU8[i1 + i7 >> 0] | 0) << 3) >> 3]);
   HEAPF32[i5 + (i2 << 2) >> 2] = Math_fround(+HEAPF64[i8 + ((HEAPU8[i1 + (i7 + 1) >> 0] | 0) << 3) >> 3]);
   HEAPF32[i3 + (i2 << 2) >> 2] = Math_fround(+HEAPF64[i8 + ((HEAPU8[i1 + (i7 + 2) >> 0] | 0) << 3) >> 3]);
   i2 = i2 + 1 | 0;
  } while ((i2 | 0) != (i6 | 0));
 }
 i2 = i9 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) != (i1 | 0)) HEAP32[i2 >> 2] = i1;
 __ZdlPv(i1);
 STACKTOP = i10;
 return;
}

function __ZNSt3__26vectorINS0_INS0_IfNS_9allocatorIfEEEENS1_IS3_EEEENS1_IS5_EEE6resizeEj(i1, i3) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i8 = i1 + 4 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = (i2 - i4 | 0) / 12 | 0;
 if (i5 >>> 0 < i3 >>> 0) {
  __ZNSt3__26vectorINS0_INS0_IfNS_9allocatorIfEEEENS1_IS3_EEEENS1_IS5_EEE8__appendEj(i1, i3 - i5 | 0);
  return;
 }
 if (i5 >>> 0 <= i3 >>> 0) return;
 i7 = i4 + (i3 * 12 | 0) | 0;
 if ((i2 | 0) == (i7 | 0)) return;
 while (1) {
  i1 = i2 + -12 | 0;
  HEAP32[i8 >> 2] = i1;
  i6 = HEAP32[i1 >> 2] | 0;
  if (i6) {
   i5 = i2 + -8 | 0;
   i2 = HEAP32[i5 >> 2] | 0;
   if ((i2 | 0) == (i6 | 0)) i1 = i6; else {
    do {
     i3 = i2 + -12 | 0;
     HEAP32[i5 >> 2] = i3;
     i4 = HEAP32[i3 >> 2] | 0;
     if (!i4) i2 = i3; else {
      i2 = i2 + -8 | 0;
      i3 = HEAP32[i2 >> 2] | 0;
      if ((i3 | 0) != (i4 | 0)) HEAP32[i2 >> 2] = i3 + (~((i3 + -4 - i4 | 0) >>> 2) << 2);
      __ZdlPv(i4);
      i2 = HEAP32[i5 >> 2] | 0;
     }
    } while ((i2 | 0) != (i6 | 0));
    i1 = HEAP32[i1 >> 2] | 0;
   }
   __ZdlPv(i1);
   i1 = HEAP32[i8 >> 2] | 0;
  }
  if ((i1 | 0) == (i7 | 0)) break; else i2 = i1;
 }
 return;
}

function __ZL25default_terminate_handlerv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i5 + 32 | 0;
 i3 = i5 + 24 | 0;
 i8 = i5 + 16 | 0;
 i6 = i5;
 i5 = i5 + 36 | 0;
 i1 = ___cxa_get_globals_fast() | 0;
 if (i1 | 0 ? (i4 = HEAP32[i1 >> 2] | 0, i4 | 0) : 0) {
  i1 = i4 + 48 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  i1 = HEAP32[i1 + 4 >> 2] | 0;
  if (!((i2 & -256 | 0) == 1126902528 & (i1 | 0) == 1129074247)) {
   HEAP32[i3 >> 2] = HEAP32[2190];
   _abort_message(17695, i3);
  }
  if ((i2 | 0) == 1126902529 & (i1 | 0) == 1129074247) i1 = HEAP32[i4 + 44 >> 2] | 0; else i1 = i4 + 80 | 0;
  HEAP32[i5 >> 2] = i1;
  i4 = HEAP32[i4 >> 2] | 0;
  i1 = HEAP32[i4 + 4 >> 2] | 0;
  i4 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[430] | 0) + 16 >> 2] & 7](1720, i4, i5) | 0;
  i2 = HEAP32[2190] | 0;
  if (i4) {
   i8 = HEAP32[i5 >> 2] | 0;
   i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 3](i8) | 0;
   HEAP32[i6 >> 2] = i2;
   HEAP32[i6 + 4 >> 2] = i1;
   HEAP32[i6 + 8 >> 2] = i8;
   _abort_message(17609, i6);
  } else {
   HEAP32[i8 >> 2] = i2;
   HEAP32[i8 + 4 >> 2] = i1;
   _abort_message(17654, i8);
  }
 }
 _abort_message(17733, i7);
}

function _memchr(i2, i5, i1) {
 i2 = i2 | 0;
 i5 = i5 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0, i6 = 0, i7 = 0;
 i6 = i5 & 255;
 i3 = (i1 | 0) != 0;
 L1 : do if (i3 & (i2 & 3 | 0) != 0) {
  i4 = i5 & 255;
  while (1) {
   if ((HEAP8[i2 >> 0] | 0) == i4 << 24 >> 24) {
    i7 = 6;
    break L1;
   }
   i2 = i2 + 1 | 0;
   i1 = i1 + -1 | 0;
   i3 = (i1 | 0) != 0;
   if (!(i3 & (i2 & 3 | 0) != 0)) {
    i7 = 5;
    break;
   }
  }
 } else i7 = 5; while (0);
 if ((i7 | 0) == 5) if (i3) i7 = 6; else i1 = 0;
 L8 : do if ((i7 | 0) == 6) {
  i4 = i5 & 255;
  if ((HEAP8[i2 >> 0] | 0) != i4 << 24 >> 24) {
   i3 = Math_imul(i6, 16843009) | 0;
   L11 : do if (i1 >>> 0 > 3) while (1) {
    i6 = HEAP32[i2 >> 2] ^ i3;
    if ((i6 & -2139062144 ^ -2139062144) & i6 + -16843009 | 0) break;
    i2 = i2 + 4 | 0;
    i1 = i1 + -4 | 0;
    if (i1 >>> 0 <= 3) {
     i7 = 11;
     break L11;
    }
   } else i7 = 11; while (0);
   if ((i7 | 0) == 11) if (!i1) {
    i1 = 0;
    break;
   }
   while (1) {
    if ((HEAP8[i2 >> 0] | 0) == i4 << 24 >> 24) break L8;
    i2 = i2 + 1 | 0;
    i1 = i1 + -1 | 0;
    if (!i1) {
     i1 = 0;
     break;
    }
   }
  }
 } while (0);
 return (i1 | 0 ? i2 : 0) | 0;
}

function __ZNSt3__26vectorIN7guetzli12JPEGScanInfoENS_9allocatorIS2_EEEC2ERKS5_(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i2 >> 2] = 0;
 i6 = i2 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 i5 = i3 + 4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) | 0;
 i4 = (i1 | 0) / 28 | 0;
 if (!i1) return;
 if (i4 >>> 0 > 153391689) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i2);
  i6 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i6);
  ___cxa_throw(i6 | 0, 1784, 8);
 }
 i1 = __Znwj(i1) | 0;
 HEAP32[i6 >> 2] = i1;
 HEAP32[i2 >> 2] = i1;
 HEAP32[i2 + 8 >> 2] = i1 + (i4 * 28 | 0);
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == (i3 | 0)) return;
 do {
  HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
  HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
  __ZNSt3__26vectorIN7guetzli21JPEGComponentScanInfoENS_9allocatorIS2_EEEC2ERKS5_(i1 + 16 | 0, i2 + 16 | 0);
  i2 = i2 + 28 | 0;
  i1 = (HEAP32[i6 >> 2] | 0) + 28 | 0;
  HEAP32[i6 >> 2] = i1;
 } while ((i2 | 0) != (i3 | 0));
 return;
}

function __ZN7guetzli12_GLOBAL__N_120LinearlyAveragedLumaERKNSt3__26vectorIfNS1_9allocatorIfEEEE(i4, i3) {
 i4 = i4 | 0;
 i3 = i3 | 0;
 var i1 = 0, i2 = 0, i5 = 0, f6 = f0, f7 = f0;
 i1 = i3 + 4 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) >> 2;
 if ((i2 >>> 0) % 3 | 0 | 0) ___assert_fail(10878, 10898, 322, 10934);
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i4, (i2 >>> 0) / 3 | 0);
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i5 = i1;
 if ((i2 | 0) == (i1 | 0)) return;
 i4 = HEAP32[i4 >> 2] | 0;
 i3 = i2 - i1 >> 2;
 i1 = 0;
 i2 = 0;
 while (1) {
  f7 = Math_fround(+Math_pow(+(+Math_fround(HEAPF32[i5 + (i2 << 2) >> 2]) / 255.0), 2.2));
  f6 = Math_fround(+Math_pow(+(+Math_fround(HEAPF32[i5 + (i2 + 1 << 2) >> 2]) / 255.0), 2.2));
  HEAPF32[i4 + (i1 << 2) >> 2] = Math_fround(+Math_pow(+(+Math_fround(Math_fround(Math_fround(f7 * Math_fround(.298999995)) + Math_fround(f6 * Math_fround(.587000012))) + Math_fround(Math_fround(+Math_pow(+(+Math_fround(HEAPF32[i5 + (i2 + 2 << 2) >> 2]) / 255.0), 2.2)) * Math_fround(.114)))), .45454545454545453) * 255.0);
  i2 = i2 + 3 | 0;
  if (i2 >>> 0 >= i3 >>> 0) break; else i1 = i1 + 1 | 0;
 }
 return;
}

function __ZNSt3__26vectorIN7guetzli15JPEGHuffmanCodeENS_9allocatorIS2_EEEC2ERKS5_(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i2 >> 2] = 0;
 i6 = i2 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 i5 = i3 + 4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) | 0;
 i4 = i1 >> 5;
 if (!i4) return;
 if (i4 >>> 0 > 134217727) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i2);
  i6 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i6);
  ___cxa_throw(i6 | 0, 1784, 8);
 }
 i1 = __Znwj(i1) | 0;
 HEAP32[i6 >> 2] = i1;
 HEAP32[i2 >> 2] = i1;
 HEAP32[i2 + 8 >> 2] = i1 + (i4 << 5);
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == (i3 | 0)) return;
 do {
  __ZNSt3__26vectorIiNS_9allocatorIiEEEC2ERKS3_(i1, i2);
  __ZNSt3__26vectorIiNS_9allocatorIiEEEC2ERKS3_(i1 + 12 | 0, i2 + 12 | 0);
  i5 = i1 + 24 | 0;
  i4 = i2 + 24 | 0;
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  HEAP8[i5 + 4 >> 0] = HEAP8[i4 + 4 >> 0] | 0;
  i2 = i2 + 32 | 0;
  i1 = (HEAP32[i6 >> 2] | 0) + 32 | 0;
  HEAP32[i6 >> 2] = i1;
 } while ((i2 | 0) != (i3 | 0));
 return;
}

function __ZNSt3__26vectorIN7guetzli14JPEGQuantTableENS_9allocatorIS2_EEEC2ERKS5_(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i2 >> 2] = 0;
 i6 = i2 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 i5 = i3 + 4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) | 0;
 i4 = (i1 | 0) / 24 | 0;
 if (!i1) return;
 if (i4 >>> 0 > 178956970) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i2);
  i6 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i6);
  ___cxa_throw(i6 | 0, 1784, 8);
 }
 i1 = __Znwj(i1) | 0;
 HEAP32[i6 >> 2] = i1;
 HEAP32[i2 >> 2] = i1;
 HEAP32[i2 + 8 >> 2] = i1 + (i4 * 24 | 0);
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == (i3 | 0)) return;
 do {
  __ZNSt3__26vectorIiNS_9allocatorIiEEEC2ERKS3_(i1, i2);
  i5 = i1 + 12 | 0;
  i4 = i2 + 12 | 0;
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
  HEAP8[i5 + 8 >> 0] = HEAP8[i4 + 8 >> 0] | 0;
  i2 = i2 + 24 | 0;
  i1 = (HEAP32[i6 >> 2] | 0) + 24 | 0;
  HEAP32[i6 >> 2] = i1;
 } while ((i2 | 0) != (i3 | 0));
 return;
}

function _fread(i2, i7, i1, i8) {
 i2 = i2 | 0;
 i7 = i7 | 0;
 i1 = i1 | 0;
 i8 = i8 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i9 = 0, i10 = 0, i11 = 0;
 i9 = Math_imul(i1, i7) | 0;
 i1 = (i7 | 0) == 0 ? 0 : i1;
 if ((HEAP32[i8 + 76 >> 2] | 0) > -1) i6 = ___lockfile(i8) | 0; else i6 = 0;
 i3 = i8 + 74 | 0;
 i4 = HEAP8[i3 >> 0] | 0;
 HEAP8[i3 >> 0] = i4 + 255 | i4;
 i3 = i8 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i11 = (HEAP32[i8 + 8 >> 2] | 0) - i4 | 0;
 i5 = i11 >>> 0 < i9 >>> 0 ? i11 : i9;
 if ((i11 | 0) > 0) {
  _memcpy(i2 | 0, i4 | 0, i5 | 0) | 0;
  HEAP32[i3 >> 2] = i4 + i5;
  i3 = i9 - i5 | 0;
  i2 = i2 + i5 | 0;
 } else i3 = i9;
 L7 : do if (!i3) i10 = 13; else {
  i5 = i8 + 32 | 0;
  while (1) {
   if (___toread(i8) | 0) break;
   i4 = FUNCTION_TABLE_iiii[HEAP32[i5 >> 2] & 7](i8, i2, i3) | 0;
   if ((i4 + 1 | 0) >>> 0 < 2) break;
   i3 = i3 - i4 | 0;
   if (!i3) {
    i10 = 13;
    break L7;
   } else i2 = i2 + i4 | 0;
  }
  if (i6 | 0) ___unlockfile(i8);
  i1 = ((i9 - i3 | 0) >>> 0) / (i7 >>> 0) | 0;
 } while (0);
 if ((i10 | 0) == 13) if (i6) ___unlockfile(i8);
 return i1 | 0;
}

function ___fwritex(i7, i2, i6) {
 i7 = i7 | 0;
 i2 = i2 | 0;
 i6 = i6 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0, i8 = 0;
 i1 = i6 + 16 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if (!i3) if (!(___towrite(i6) | 0)) {
  i3 = HEAP32[i1 >> 2] | 0;
  i4 = 5;
 } else i1 = 0; else i4 = 5;
 L5 : do if ((i4 | 0) == 5) {
  i8 = i6 + 20 | 0;
  i5 = HEAP32[i8 >> 2] | 0;
  i1 = i5;
  if ((i3 - i5 | 0) >>> 0 < i2 >>> 0) {
   i1 = FUNCTION_TABLE_iiii[HEAP32[i6 + 36 >> 2] & 7](i6, i7, i2) | 0;
   break;
  }
  L10 : do if ((HEAP8[i6 + 75 >> 0] | 0) > -1) {
   i5 = i2;
   while (1) {
    if (!i5) {
     i4 = 0;
     i3 = i7;
     break L10;
    }
    i3 = i5 + -1 | 0;
    if ((HEAP8[i7 + i3 >> 0] | 0) == 10) break; else i5 = i3;
   }
   i1 = FUNCTION_TABLE_iiii[HEAP32[i6 + 36 >> 2] & 7](i6, i7, i5) | 0;
   if (i1 >>> 0 < i5 >>> 0) break L5;
   i4 = i5;
   i3 = i7 + i5 | 0;
   i2 = i2 - i5 | 0;
   i1 = HEAP32[i8 >> 2] | 0;
  } else {
   i4 = 0;
   i3 = i7;
  } while (0);
  _memcpy(i1 | 0, i3 | 0, i2 | 0) | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + i2;
  i1 = i4 + i2 | 0;
 } while (0);
 return i1 | 0;
}

function _wcrtomb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 do if (i1) {
  if (i2 >>> 0 < 128) {
   HEAP8[i1 >> 0] = i2;
   i1 = 1;
   break;
  }
  if (!(HEAP32[HEAP32[(___pthread_self_448() | 0) + 188 >> 2] >> 2] | 0)) if ((i2 & -128 | 0) == 57216) {
   HEAP8[i1 >> 0] = i2;
   i1 = 1;
   break;
  } else {
   HEAP32[(___errno_location() | 0) >> 2] = 84;
   i1 = -1;
   break;
  }
  if (i2 >>> 0 < 2048) {
   HEAP8[i1 >> 0] = i2 >>> 6 | 192;
   HEAP8[i1 + 1 >> 0] = i2 & 63 | 128;
   i1 = 2;
   break;
  }
  if (i2 >>> 0 < 55296 | (i2 & -8192 | 0) == 57344) {
   HEAP8[i1 >> 0] = i2 >>> 12 | 224;
   HEAP8[i1 + 1 >> 0] = i2 >>> 6 & 63 | 128;
   HEAP8[i1 + 2 >> 0] = i2 & 63 | 128;
   i1 = 3;
   break;
  }
  if ((i2 + -65536 | 0) >>> 0 < 1048576) {
   HEAP8[i1 >> 0] = i2 >>> 18 | 240;
   HEAP8[i1 + 1 >> 0] = i2 >>> 12 & 63 | 128;
   HEAP8[i1 + 2 >> 0] = i2 >>> 6 & 63 | 128;
   HEAP8[i1 + 3 >> 0] = i2 & 63 | 128;
   i1 = 4;
   break;
  } else {
   HEAP32[(___errno_location() | 0) >> 2] = 84;
   i1 = -1;
   break;
  }
 } else i1 = 1; while (0);
 return i1 | 0;
}

function __ZN7guetzli11OutputImageC2Eii(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 320 | 0;
 i8 = i7;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = i2;
 HEAP32[i8 >> 2] = i1;
 HEAP32[i8 + 4 >> 2] = i2;
 i4 = i8 + 28 | 0;
 i6 = i8 + 32 | 0;
 i5 = i8 + 44 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = 0;
 HEAP32[i4 + 12 >> 2] = 0;
 HEAP32[i4 + 16 >> 2] = 0;
 HEAP32[i4 + 20 >> 2] = 0;
 __ZN7guetzli20OutputImageComponent5ResetEii(i8, 1, 1);
 __ZNSt3__26vectorIN7guetzli20OutputImageComponentENS_9allocatorIS2_EEEC2EjRKS2_(i3 + 8 | 0, 3, i8);
 i1 = HEAP32[i8 + 40 >> 2] | 0;
 if (i1 | 0) {
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) != (i1 | 0)) HEAP32[i5 >> 2] = i2 + (~((i2 + -2 - i1 | 0) >>> 1) << 1);
  __ZdlPv(i1);
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if (!i1) {
  STACKTOP = i7;
  return;
 }
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) != (i1 | 0)) HEAP32[i6 >> 2] = i2 + (~((i2 + -2 - i1 | 0) >>> 1) << 1);
 __ZdlPv(i1);
 STACKTOP = i7;
 return;
}

function _vsnprintf(i2, i1, i8, i9) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i10 = 0, i11 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i3 = i11 + 124 | 0;
 i10 = i11;
 i4 = i10;
 i5 = 8632;
 i6 = i4 + 124 | 0;
 do {
  HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
  i4 = i4 + 4 | 0;
  i5 = i5 + 4 | 0;
 } while ((i4 | 0) < (i6 | 0));
 if ((i1 + -1 | 0) >>> 0 > 2147483646) if (!i1) {
  i2 = i3;
  i1 = 1;
  i7 = 4;
 } else {
  HEAP32[(___errno_location() | 0) >> 2] = 75;
  i1 = -1;
 } else i7 = 4;
 if ((i7 | 0) == 4) {
  i7 = -2 - i2 | 0;
  i7 = i1 >>> 0 > i7 >>> 0 ? i7 : i1;
  HEAP32[i10 + 48 >> 2] = i7;
  i3 = i10 + 20 | 0;
  HEAP32[i3 >> 2] = i2;
  HEAP32[i10 + 44 >> 2] = i2;
  i1 = i2 + i7 | 0;
  i2 = i10 + 16 | 0;
  HEAP32[i2 >> 2] = i1;
  HEAP32[i10 + 28 >> 2] = i1;
  i1 = _vfprintf(i10, i8, i9) | 0;
  if (i7) {
   i10 = HEAP32[i3 >> 2] | 0;
   HEAP8[i10 + (((i10 | 0) == (HEAP32[i2 >> 2] | 0)) << 31 >> 31) >> 0] = 0;
  }
 }
 STACKTOP = i11;
 return i1 | 0;
}

function _memset(i5, i6, i4) {
 i5 = i5 | 0;
 i6 = i6 | 0;
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i7 = 0;
 i3 = i5 + i4 | 0;
 i6 = i6 & 255;
 if ((i4 | 0) >= 67) {
  while (i5 & 3) {
   HEAP8[i5 >> 0] = i6;
   i5 = i5 + 1 | 0;
  }
  i1 = i3 & -4 | 0;
  i2 = i1 - 64 | 0;
  i7 = i6 | i6 << 8 | i6 << 16 | i6 << 24;
  while ((i5 | 0) <= (i2 | 0)) {
   HEAP32[i5 >> 2] = i7;
   HEAP32[i5 + 4 >> 2] = i7;
   HEAP32[i5 + 8 >> 2] = i7;
   HEAP32[i5 + 12 >> 2] = i7;
   HEAP32[i5 + 16 >> 2] = i7;
   HEAP32[i5 + 20 >> 2] = i7;
   HEAP32[i5 + 24 >> 2] = i7;
   HEAP32[i5 + 28 >> 2] = i7;
   HEAP32[i5 + 32 >> 2] = i7;
   HEAP32[i5 + 36 >> 2] = i7;
   HEAP32[i5 + 40 >> 2] = i7;
   HEAP32[i5 + 44 >> 2] = i7;
   HEAP32[i5 + 48 >> 2] = i7;
   HEAP32[i5 + 52 >> 2] = i7;
   HEAP32[i5 + 56 >> 2] = i7;
   HEAP32[i5 + 60 >> 2] = i7;
   i5 = i5 + 64 | 0;
  }
  while ((i5 | 0) < (i1 | 0)) {
   HEAP32[i5 >> 2] = i7;
   i5 = i5 + 4 | 0;
  }
 }
 while ((i5 | 0) < (i3 | 0)) {
  HEAP8[i5 >> 0] = i6;
  i5 = i5 + 1 | 0;
 }
 return i3 - i4 | 0;
}

function ___stdio_read(i5, i6, i7) {
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i8 = 0, i9 = 0, i10 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i1 = i9;
 i4 = i9 + 16 | 0;
 HEAP32[i4 >> 2] = i6;
 i2 = i4 + 4 | 0;
 i8 = i5 + 48 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 HEAP32[i2 >> 2] = i7 - ((i10 | 0) != 0 & 1);
 i3 = i5 + 44 | 0;
 HEAP32[i4 + 8 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 12 >> 2] = i10;
 HEAP32[i1 >> 2] = HEAP32[i5 + 60 >> 2];
 HEAP32[i1 + 4 >> 2] = i4;
 HEAP32[i1 + 8 >> 2] = 2;
 i1 = ___syscall_ret(___syscall145(145, i1 | 0) | 0) | 0;
 if ((i1 | 0) >= 1) {
  i4 = HEAP32[i2 >> 2] | 0;
  if (i1 >>> 0 > i4 >>> 0) {
   i2 = HEAP32[i3 >> 2] | 0;
   i3 = i5 + 4 | 0;
   HEAP32[i3 >> 2] = i2;
   HEAP32[i5 + 8 >> 2] = i2 + (i1 - i4);
   if (!(HEAP32[i8 >> 2] | 0)) i1 = i7; else {
    HEAP32[i3 >> 2] = i2 + 1;
    HEAP8[i6 + (i7 + -1) >> 0] = HEAP8[i2 >> 0] | 0;
    i1 = i7;
   }
  }
 } else HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | i1 & 48 ^ 16;
 STACKTOP = i9;
 return i1 | 0;
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i5, i6, i7) {
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i8 = 0, i9 = 0, i10 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i10;
 i9 = i5 + 11 | 0;
 i1 = HEAP8[i9 >> 0] | 0;
 i4 = i1 << 24 >> 24 < 0;
 if (i4) {
  i2 = HEAP32[i5 + 4 >> 2] | 0;
  i1 = (HEAP32[i5 + 8 >> 2] & 2147483647) + -1 | 0;
 } else {
  i2 = i1 & 255;
  i1 = 10;
 }
 i3 = i2 + i7 | 0;
 if ((i1 - i2 | 0) >>> 0 >= i7 >>> 0) {
  if (i7 | 0) {
   if (i4) i1 = HEAP32[i5 >> 2] | 0; else i1 = i5;
   __ZNSt3__211char_traitsIcE4copyEPcPKcj(i1 + i2 | 0, i6, i7) | 0;
   if ((HEAP8[i9 >> 0] | 0) < 0) HEAP32[i5 + 4 >> 2] = i3; else HEAP8[i9 >> 0] = i3;
   HEAP8[i8 >> 0] = 0;
   __ZNSt3__211char_traitsIcE6assignERcRKc(i1 + i3 | 0, i8);
  }
 } else __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc(i5, i1, i3 - i1 | 0, i2, i2, 0, i7, i6);
 STACKTOP = i10;
 return i5 | 0;
}

function __ZNSt3__26vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEEC2ERKS8_(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i2 >> 2] = 0;
 i6 = i2 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 i5 = i3 + 4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) | 0;
 i4 = (i1 | 0) / 12 | 0;
 if (!i1) return;
 if (i4 >>> 0 > 357913941) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i2);
  i6 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i6);
  ___cxa_throw(i6 | 0, 1784, 8);
 }
 i1 = __Znwj(i1) | 0;
 HEAP32[i6 >> 2] = i1;
 HEAP32[i2 >> 2] = i1;
 HEAP32[i2 + 8 >> 2] = i1 + (i4 * 12 | 0);
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == (i3 | 0)) return;
 do {
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i1, i2);
  i2 = i2 + 12 | 0;
  i1 = (HEAP32[i6 >> 2] | 0) + 12 | 0;
  HEAP32[i6 >> 2] = i1;
 } while ((i2 | 0) != (i3 | 0));
 return;
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj(i6, i7, i8) {
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i9 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i9;
 i5 = i6 + 11 | 0;
 i1 = HEAP8[i5 >> 0] | 0;
 i2 = i1 << 24 >> 24 < 0;
 if (i2) i3 = (HEAP32[i6 + 8 >> 2] & 2147483647) + -1 | 0; else i3 = 10;
 do if (i3 >>> 0 >= i8 >>> 0) {
  if (i2) i1 = HEAP32[i6 >> 2] | 0; else i1 = i6;
  __ZNSt3__211char_traitsIcE4moveEPcPKcj(i1, i7, i8) | 0;
  HEAP8[i4 >> 0] = 0;
  __ZNSt3__211char_traitsIcE6assignERcRKc(i1 + i8 | 0, i4);
  if ((HEAP8[i5 >> 0] | 0) < 0) {
   HEAP32[i6 + 4 >> 2] = i8;
   break;
  } else {
   HEAP8[i5 >> 0] = i8;
   break;
  }
 } else {
  if (i2) i1 = HEAP32[i6 + 4 >> 2] | 0; else i1 = i1 & 255;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc(i6, i3, i8 - i3 | 0, i1, 0, i1, i8, i7);
 } while (0);
 STACKTOP = i9;
 return i6 | 0;
}

function __ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib(i1, i3, i5, i6, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i2 = i2 | 0;
 var i4 = 0;
 do if (!(__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i1, HEAP32[i3 + 8 >> 2] | 0, i2) | 0)) {
  if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i1, HEAP32[i3 >> 2] | 0, i2) | 0) {
   i1 = i3 + 32 | 0;
   if ((HEAP32[i3 + 16 >> 2] | 0) != (i5 | 0) ? (i4 = i3 + 20 | 0, (HEAP32[i4 >> 2] | 0) != (i5 | 0)) : 0) {
    HEAP32[i1 >> 2] = i6;
    HEAP32[i4 >> 2] = i5;
    i6 = i3 + 40 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
    if ((HEAP32[i3 + 36 >> 2] | 0) == 1 ? (HEAP32[i3 + 24 >> 2] | 0) == 2 : 0) HEAP8[i3 + 54 >> 0] = 1;
    HEAP32[i3 + 44 >> 2] = 4;
    break;
   }
   if ((i6 | 0) == 1) HEAP32[i1 >> 2] = 1;
  }
 } else __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi(0, i3, i5, i6); while (0);
 return;
}

function __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(i1, i4, i8, i2, i9) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 i8 = i8 | 0;
 i2 = i2 | 0;
 i9 = i9 | 0;
 var i3 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP8[i4 + 53 >> 0] = 1;
 do if ((HEAP32[i4 + 4 >> 2] | 0) == (i2 | 0)) {
  HEAP8[i4 + 52 >> 0] = 1;
  i2 = i4 + 16 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  i6 = i4 + 54 | 0;
  i7 = i4 + 48 | 0;
  i5 = i4 + 24 | 0;
  i1 = i4 + 36 | 0;
  if (!i3) {
   HEAP32[i2 >> 2] = i8;
   HEAP32[i5 >> 2] = i9;
   HEAP32[i1 >> 2] = 1;
   if (!((HEAP32[i7 >> 2] | 0) == 1 & (i9 | 0) == 1)) break;
   HEAP8[i6 >> 0] = 1;
   break;
  }
  if ((i3 | 0) != (i8 | 0)) {
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
   HEAP8[i6 >> 0] = 1;
   break;
  }
  i1 = HEAP32[i5 >> 2] | 0;
  if ((i1 | 0) == 2) {
   HEAP32[i5 >> 2] = i9;
   i1 = i9;
  }
  if ((HEAP32[i7 >> 2] | 0) == 1 & (i1 | 0) == 1) HEAP8[i6 >> 0] = 1;
 } while (0);
 return;
}

function __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEEC2ERKS5_(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i2 >> 2] = 0;
 i6 = i2 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 i5 = i3 + 4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) | 0;
 i4 = (i1 | 0) / 12 | 0;
 if (!i1) return;
 if (i4 >>> 0 > 357913941) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i2);
  i6 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i6);
  ___cxa_throw(i6 | 0, 1784, 8);
 }
 i1 = __Znwj(i1) | 0;
 HEAP32[i6 >> 2] = i1;
 HEAP32[i2 >> 2] = i1;
 HEAP32[i2 + 8 >> 2] = i1 + (i4 * 12 | 0);
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == (i3 | 0)) return;
 do {
  __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i1, i2);
  i2 = i2 + 12 | 0;
  i1 = (HEAP32[i6 >> 2] | 0) + 12 | 0;
  HEAP32[i6 >> 2] = i1;
 } while ((i2 | 0) != (i3 | 0));
 return;
}

function __ZN7guetzli18Srgb8ToLinearTableEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[18176] | 0) {
  i2 = HEAP32[10834] | 0;
  return i2 | 0;
 }
 if (!(___cxa_guard_acquire(18176) | 0)) {
  i2 = HEAP32[10834] | 0;
  return i2 | 0;
 }
 i2 = __Znaj(2048) | 0;
 HEAPF64[i2 >> 3] = 0.0;
 HEAPF64[i2 + 8 >> 3] = .07739938080495357;
 HEAPF64[i2 + 16 >> 3] = .15479876160990713;
 HEAPF64[i2 + 24 >> 3] = .23219814241486067;
 HEAPF64[i2 + 32 >> 3] = .30959752321981426;
 HEAPF64[i2 + 40 >> 3] = .38699690402476783;
 HEAPF64[i2 + 48 >> 3] = .46439628482972134;
 HEAPF64[i2 + 56 >> 3] = .541795665634675;
 HEAPF64[i2 + 64 >> 3] = .6191950464396285;
 HEAPF64[i2 + 72 >> 3] = .6965944272445821;
 HEAPF64[i2 + 80 >> 3] = .7739938080495357;
 i1 = 11;
 do {
  HEAPF64[i2 + (i1 << 3) >> 3] = +Math_pow(+((+(i1 | 0) / 255.0 + .055) / 1.055), 2.4) * 255.0;
  i1 = i1 + 1 | 0;
 } while ((i1 | 0) != 256);
 HEAP32[10834] = i2;
 i2 = HEAP32[10834] | 0;
 return i2 | 0;
}

function ___strchrnul(i1, i4) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 var i2 = 0, i3 = 0, i5 = 0;
 i3 = i4 & 255;
 L1 : do if (!i3) i1 = i1 + (_strlen(i1) | 0) | 0; else {
  if (i1 & 3) {
   i2 = i4 & 255;
   do {
    i5 = HEAP8[i1 >> 0] | 0;
    if (i5 << 24 >> 24 == 0 ? 1 : i5 << 24 >> 24 == i2 << 24 >> 24) break L1;
    i1 = i1 + 1 | 0;
   } while ((i1 & 3 | 0) != 0);
  }
  i3 = Math_imul(i3, 16843009) | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  L10 : do if (!((i2 & -2139062144 ^ -2139062144) & i2 + -16843009)) do {
   i5 = i2 ^ i3;
   if ((i5 & -2139062144 ^ -2139062144) & i5 + -16843009 | 0) break L10;
   i1 = i1 + 4 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
  } while (!((i2 & -2139062144 ^ -2139062144) & i2 + -16843009 | 0)); while (0);
  i2 = i4 & 255;
  while (1) {
   i5 = HEAP8[i1 >> 0] | 0;
   if (i5 << 24 >> 24 == 0 ? 1 : i5 << 24 >> 24 == i2 << 24 >> 24) break; else i1 = i1 + 1 | 0;
  }
 } while (0);
 return i1 | 0;
}

function __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv(i3, i1, i4) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 var i2 = 0, i5 = 0, i6 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i7;
 if (!(__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i3, i1, 0) | 0)) if ((i1 | 0) != 0 ? (i6 = ___dynamic_cast(i1, 1744, 1728, 0) | 0, (i6 | 0) != 0) : 0) {
  i1 = i5 + 4 | 0;
  i2 = i1 + 52 | 0;
  do {
   HEAP32[i1 >> 2] = 0;
   i1 = i1 + 4 | 0;
  } while ((i1 | 0) < (i2 | 0));
  HEAP32[i5 >> 2] = i6;
  HEAP32[i5 + 8 >> 2] = i3;
  HEAP32[i5 + 12 >> 2] = -1;
  HEAP32[i5 + 48 >> 2] = 1;
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i6 >> 2] | 0) + 28 >> 2] & 3](i6, i5, HEAP32[i4 >> 2] | 0, 1);
  if ((HEAP32[i5 + 24 >> 2] | 0) == 1) {
   HEAP32[i4 >> 2] = HEAP32[i5 + 16 >> 2];
   i1 = 1;
  } else i1 = 0;
 } else i1 = 0; else i1 = 1;
 STACKTOP = i7;
 return i1 | 0;
}

function __ZNSt3__26vectorIN7guetzli21JPEGComponentScanInfoENS_9allocatorIS2_EEEC2ERKS5_(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i2 >> 2] = 0;
 i7 = i2 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 i6 = i3 + 4 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) | 0;
 i4 = (i1 | 0) / 12 | 0;
 if (!i1) return;
 if (i4 >>> 0 > 357913941) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i2);
  i7 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i7);
  ___cxa_throw(i7 | 0, 1784, 8);
 }
 i5 = __Znwj(i1) | 0;
 HEAP32[i7 >> 2] = i5;
 HEAP32[i2 >> 2] = i5;
 HEAP32[i2 + 8 >> 2] = i5 + (i4 * 12 | 0);
 i2 = HEAP32[i3 >> 2] | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - i2 | 0;
 if ((i1 | 0) <= 0) return;
 _memcpy(i5 | 0, i2 | 0, i1 | 0) | 0;
 HEAP32[i7 >> 2] = i5 + (((i1 >>> 0) / 12 | 0) * 12 | 0);
 return;
}

function __ZNSt3__26vectorIN7guetzli13JpegHistogramENS_9allocatorIS2_EEEC2ERKS5_(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i2 >> 2] = 0;
 i7 = i2 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 i6 = i3 + 4 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) | 0;
 i4 = (i1 | 0) / 1028 | 0;
 if (!i1) return;
 if (i4 >>> 0 > 4177983) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i2);
  i7 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i7);
  ___cxa_throw(i7 | 0, 1784, 8);
 }
 i5 = __Znwj(i1) | 0;
 HEAP32[i7 >> 2] = i5;
 HEAP32[i2 >> 2] = i5;
 HEAP32[i2 + 8 >> 2] = i5 + (i4 * 1028 | 0);
 i2 = HEAP32[i3 >> 2] | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - i2 | 0;
 if ((i1 | 0) <= 0) return;
 _memcpy(i5 | 0, i2 | 0, i1 | 0) | 0;
 HEAP32[i7 >> 2] = i5 + (((i1 >>> 0) / 1028 | 0) * 1028 | 0);
 return;
}

function __ZN11butteraugli7MaskDcYEd(d4) {
 d4 = +d4;
 var d1 = 0.0, i2 = 0, i3 = 0;
 do if ((HEAP8[39224] | 0) == 0 ? ___cxa_guard_acquire(39224) | 0 : 0) {
  i2 = 0;
  while (1) {
   d1 = (21.6566724788 / (+(i2 | 0) * .00170392660501 + 1.73396799447) + -3.65647120524) * .212223514236 + 1.0;
   i3 = 35128 + (i2 << 3) | 0;
   HEAPF64[i3 >> 3] = d1;
   if (!(d1 >= 0.0)) {
    i2 = 4;
    break;
   }
   HEAPF64[i3 >> 3] = d1 * d1;
   i2 = i2 + 1 | 0;
   if (i2 >>> 0 >= 512) {
    i2 = 6;
    break;
   }
  }
  if ((i2 | 0) == 4) ___assert_fail(14743, 10333, 1236, 14757); else if ((i2 | 0) == 6) break;
 } while (0);
 d1 = +Math_abs(+(d4 < 0.0 ? 0.0 : d4));
 i2 = ~~d1;
 if ((i2 | 0) < 511) {
  d4 = +HEAPF64[35128 + (i2 << 3) >> 3];
  d4 = d4 + (d1 - +(i2 | 0)) * (+HEAPF64[35128 + (i2 + 1 << 3) >> 3] - d4);
  return +d4;
 } else {
  d4 = +HEAPF64[4902];
  return +d4;
 }
 return 0.0;
}

function __ZN11butteraugli7MaskDcXEd(d4) {
 d4 = +d4;
 var d1 = 0.0, i2 = 0, i3 = 0;
 do if ((HEAP8[35120] | 0) == 0 ? ___cxa_guard_acquire(35120) | 0 : 0) {
  i2 = 0;
  while (1) {
   d1 = (20.4563479139 / (+(i2 | 0) * .00486575865525 + .670960225853) + -3.86797479189) * 1.79116943438 + 1.0;
   i3 = 31024 + (i2 << 3) | 0;
   HEAPF64[i3 >> 3] = d1;
   if (!(d1 >= 0.0)) {
    i2 = 4;
    break;
   }
   HEAPF64[i3 >> 3] = d1 * d1;
   i2 = i2 + 1 | 0;
   if (i2 >>> 0 >= 512) {
    i2 = 6;
    break;
   }
  }
  if ((i2 | 0) == 4) ___assert_fail(14743, 10333, 1236, 14757); else if ((i2 | 0) == 6) break;
 } while (0);
 d1 = +Math_abs(+(d4 < 0.0 ? 0.0 : d4));
 i2 = ~~d1;
 if ((i2 | 0) < 511) {
  d4 = +HEAPF64[31024 + (i2 << 3) >> 3];
  d4 = d4 + (d1 - +(i2 | 0)) * (+HEAPF64[31024 + (i2 + 1 << 3) >> 3] - d4);
  return +d4;
 } else {
  d4 = +HEAPF64[4389];
  return +d4;
 }
 return 0.0;
}

function __ZN11butteraugli7MaskDcBEd(d4) {
 d4 = +d4;
 var d1 = 0.0, i2 = 0, i3 = 0;
 do if ((HEAP8[43328] | 0) == 0 ? ___cxa_guard_acquire(43328) | 0 : 0) {
  i2 = 0;
  while (1) {
   d1 = (18.0373825149 / (+(i2 | 0) * .00380086095024 + .901647926679) + -.894711072781) * .349376011816 + 1.0;
   i3 = 39232 + (i2 << 3) | 0;
   HEAPF64[i3 >> 3] = d1;
   if (!(d1 >= 0.0)) {
    i2 = 4;
    break;
   }
   HEAPF64[i3 >> 3] = d1 * d1;
   i2 = i2 + 1 | 0;
   if (i2 >>> 0 >= 512) {
    i2 = 6;
    break;
   }
  }
  if ((i2 | 0) == 4) ___assert_fail(14743, 10333, 1236, 14757); else if ((i2 | 0) == 6) break;
 } while (0);
 d1 = +Math_abs(+(d4 < 0.0 ? 0.0 : d4));
 i2 = ~~d1;
 if ((i2 | 0) < 511) {
  d4 = +HEAPF64[39232 + (i2 << 3) >> 3];
  d4 = d4 + (d1 - +(i2 | 0)) * (+HEAPF64[39232 + (i2 + 1 << 3) >> 3] - d4);
  return +d4;
 } else {
  d4 = +HEAPF64[5415];
  return +d4;
 }
 return 0.0;
}

function __ZN11butteraugli5MaskXEd(d4) {
 d4 = +d4;
 var d1 = 0.0, i2 = 0, i3 = 0;
 do if ((HEAP8[22808] | 0) == 0 ? ___cxa_guard_acquire(22808) | 0 : 0) {
  i2 = 0;
  while (1) {
   d1 = (20.8029176447 / (+(i2 | 0) * .000738288224836 + .454909521427) + -4.25328244168) * .975741017749 + 1.0;
   i3 = 18712 + (i2 << 3) | 0;
   HEAPF64[i3 >> 3] = d1;
   if (!(d1 >= 0.0)) {
    i2 = 4;
    break;
   }
   HEAPF64[i3 >> 3] = d1 * d1;
   i2 = i2 + 1 | 0;
   if (i2 >>> 0 >= 512) {
    i2 = 6;
    break;
   }
  }
  if ((i2 | 0) == 4) ___assert_fail(14743, 10333, 1236, 14757); else if ((i2 | 0) == 6) break;
 } while (0);
 d1 = +Math_abs(+(d4 < 0.0 ? 0.0 : d4));
 i2 = ~~d1;
 if ((i2 | 0) < 511) {
  d4 = +HEAPF64[18712 + (i2 << 3) >> 3];
  d4 = d4 + (d1 - +(i2 | 0)) * (+HEAPF64[18712 + (i2 + 1 << 3) >> 3] - d4);
  return +d4;
 } else {
  d4 = +HEAPF64[2850];
  return +d4;
 }
 return 0.0;
}

function __ZN11butteraugli5MaskBEd(d4) {
 d4 = +d4;
 var d1 = 0.0, i2 = 0, i3 = 0;
 do if ((HEAP8[31016] | 0) == 0 ? ___cxa_guard_acquire(31016) | 0 : 0) {
  i2 = 0;
  while (1) {
   d1 = (31.1444967089 / (+(i2 | 0) * .0047434643535 + 1.05105070921) + -4.25376118646) * .61582234137 + 1.0;
   i3 = 26920 + (i2 << 3) | 0;
   HEAPF64[i3 >> 3] = d1;
   if (!(d1 >= 0.0)) {
    i2 = 4;
    break;
   }
   HEAPF64[i3 >> 3] = d1 * d1;
   i2 = i2 + 1 | 0;
   if (i2 >>> 0 >= 512) {
    i2 = 6;
    break;
   }
  }
  if ((i2 | 0) == 4) ___assert_fail(14743, 10333, 1236, 14757); else if ((i2 | 0) == 6) break;
 } while (0);
 d1 = +Math_abs(+(d4 < 0.0 ? 0.0 : d4));
 i2 = ~~d1;
 if ((i2 | 0) < 511) {
  d4 = +HEAPF64[26920 + (i2 << 3) >> 3];
  d4 = d4 + (d1 - +(i2 | 0)) * (+HEAPF64[26920 + (i2 + 1 << 3) >> 3] - d4);
  return +d4;
 } else {
  d4 = +HEAPF64[3876];
  return +d4;
 }
 return 0.0;
}

function __ZN11butteraugli5MaskYEd(d4) {
 d4 = +d4;
 var d1 = 0.0, i2 = 0, i3 = 0;
 do if ((HEAP8[26912] | 0) == 0 ? ___cxa_guard_acquire(26912) | 0 : 0) {
  i2 = 0;
  while (1) {
   d1 = (16.2447033988 / (+(i2 | 0) * .011731667845 + .911952641929) + 1.5307267433) * .373995618954 + 1.0;
   i3 = 22816 + (i2 << 3) | 0;
   HEAPF64[i3 >> 3] = d1;
   if (!(d1 >= 0.0)) {
    i2 = 4;
    break;
   }
   HEAPF64[i3 >> 3] = d1 * d1;
   i2 = i2 + 1 | 0;
   if (i2 >>> 0 >= 512) {
    i2 = 6;
    break;
   }
  }
  if ((i2 | 0) == 4) ___assert_fail(14743, 10333, 1236, 14757); else if ((i2 | 0) == 6) break;
 } while (0);
 d1 = +Math_abs(+(d4 < 0.0 ? 0.0 : d4));
 i2 = ~~d1;
 if ((i2 | 0) < 511) {
  d4 = +HEAPF64[22816 + (i2 << 3) >> 3];
  d4 = d4 + (d1 - +(i2 | 0)) * (+HEAPF64[22816 + (i2 + 1 << 3) >> 3] - d4);
  return +d4;
 } else {
  d4 = +HEAPF64[3363];
  return +d4;
 }
 return 0.0;
}

function _fopen(i1, i3) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i2 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i7 + 32 | 0;
 i5 = i7 + 16 | 0;
 i2 = i7;
 if (_memchr(17374, HEAP8[i3 >> 0] | 0, 4) | 0) {
  i4 = ___fmodeflags(i3) | 0;
  HEAP32[i2 >> 2] = i1;
  HEAP32[i2 + 4 >> 2] = i4 | 32768;
  HEAP32[i2 + 8 >> 2] = 438;
  i2 = ___syscall_ret(___syscall5(5, i2 | 0) | 0) | 0;
  if ((i2 | 0) >= 0) {
   if (i4 & 524288 | 0) {
    HEAP32[i5 >> 2] = i2;
    HEAP32[i5 + 4 >> 2] = 2;
    HEAP32[i5 + 8 >> 2] = 1;
    ___syscall221(221, i5 | 0) | 0;
   }
   i1 = ___fdopen(i2, i3) | 0;
   if (!i1) {
    HEAP32[i6 >> 2] = i2;
    ___syscall6(6, i6 | 0) | 0;
    i1 = 0;
   }
  } else i1 = 0;
 } else {
  HEAP32[(___errno_location() | 0) >> 2] = 22;
  i1 = 0;
 }
 STACKTOP = i7;
 return i1 | 0;
}

function __ZNSt3__26vectorIiNS_9allocatorIiEEEC2ERKS3_(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i2 >> 2] = 0;
 i7 = i2 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 i6 = i3 + 4 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) | 0;
 i4 = i1 >> 2;
 if (!i4) return;
 if (i4 >>> 0 > 1073741823) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i2);
  i7 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i7);
  ___cxa_throw(i7 | 0, 1784, 8);
 }
 i5 = __Znwj(i1) | 0;
 HEAP32[i7 >> 2] = i5;
 HEAP32[i2 >> 2] = i5;
 HEAP32[i2 + 8 >> 2] = i5 + (i4 << 2);
 i2 = HEAP32[i3 >> 2] | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - i2 | 0;
 if ((i1 | 0) <= 0) return;
 _memcpy(i5 | 0, i2 | 0, i1 | 0) | 0;
 HEAP32[i7 >> 2] = i5 + (i1 >>> 2 << 2);
 return;
}

function __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i2 >> 2] = 0;
 i7 = i2 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 i6 = i3 + 4 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) | 0;
 i4 = i1 >> 2;
 if (!i4) return;
 if (i4 >>> 0 > 1073741823) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i2);
  i7 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i7);
  ___cxa_throw(i7 | 0, 1784, 8);
 }
 i5 = __Znwj(i1) | 0;
 HEAP32[i7 >> 2] = i5;
 HEAP32[i2 >> 2] = i5;
 HEAP32[i2 + 8 >> 2] = i5 + (i4 << 2);
 i2 = HEAP32[i3 >> 2] | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - i2 | 0;
 if ((i1 | 0) <= 0) return;
 _memcpy(i5 | 0, i2 | 0, i1 | 0) | 0;
 HEAP32[i7 >> 2] = i5 + (i1 >>> 2 << 2);
 return;
}

function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!i2) return; else {
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(i1, HEAP32[i2 >> 2] | 0);
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEiEENS_19__map_value_compareIS7_S8_NS_4lessIS7_EELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE(i1, HEAP32[i2 + 4 >> 2] | 0);
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i2 + 16 | 0);
  __ZdlPv(i2);
  return;
 }
}

function __ZNSt3__26vectorItNS_9allocatorItEEEC2ERKS3_(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i2 >> 2] = 0;
 i7 = i2 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 i6 = i3 + 4 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) | 0;
 i4 = i1 >> 1;
 if (!i4) return;
 if ((i1 | 0) < 0) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i2);
  i7 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i7);
  ___cxa_throw(i7 | 0, 1784, 8);
 }
 i5 = __Znwj(i1) | 0;
 HEAP32[i7 >> 2] = i5;
 HEAP32[i2 >> 2] = i5;
 HEAP32[i2 + 8 >> 2] = i5 + (i4 << 1);
 i2 = HEAP32[i3 >> 2] | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - i2 | 0;
 if ((i1 | 0) <= 0) return;
 _memcpy(i5 | 0, i2 | 0, i1 | 0) | 0;
 HEAP32[i7 >> 2] = i5 + (i1 >>> 1 << 1);
 return;
}

function __ZNSt3__26vectorIsNS_9allocatorIsEEEC2ERKS3_(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i2 >> 2] = 0;
 i7 = i2 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 i6 = i3 + 4 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) | 0;
 i4 = i1 >> 1;
 if (!i4) return;
 if ((i1 | 0) < 0) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i2);
  i7 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i7);
  ___cxa_throw(i7 | 0, 1784, 8);
 }
 i5 = __Znwj(i1) | 0;
 HEAP32[i7 >> 2] = i5;
 HEAP32[i2 >> 2] = i5;
 HEAP32[i2 + 8 >> 2] = i5 + (i4 << 1);
 i2 = HEAP32[i3 >> 2] | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - i2 | 0;
 if ((i1 | 0) <= 0) return;
 _memcpy(i5 | 0, i2 | 0, i1 | 0) | 0;
 HEAP32[i7 >> 2] = i5 + (i1 >>> 1 << 1);
 return;
}

function _fputc(i2, i8) {
 i2 = i2 | 0;
 i8 = i8 | 0;
 var i1 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i9 = 0;
 i7 = i2 & 255;
 i1 = i2 & 255;
 if ((HEAP32[i8 + 76 >> 2] | 0) >= 0 ? (___lockfile(i8) | 0) != 0 : 0) {
  if ((i1 | 0) != (HEAP8[i8 + 75 >> 0] | 0) ? (i5 = i8 + 20 | 0, i6 = HEAP32[i5 >> 2] | 0, i6 >>> 0 < (HEAP32[i8 + 16 >> 2] | 0) >>> 0) : 0) {
   HEAP32[i5 >> 2] = i6 + 1;
   HEAP8[i6 >> 0] = i7;
  } else i1 = ___overflow(i8, i2) | 0;
  ___unlockfile(i8);
 } else i9 = 3;
 do if ((i9 | 0) == 3) {
  if ((i1 | 0) != (HEAP8[i8 + 75 >> 0] | 0) ? (i3 = i8 + 20 | 0, i4 = HEAP32[i3 >> 2] | 0, i4 >>> 0 < (HEAP32[i8 + 16 >> 2] | 0) >>> 0) : 0) {
   HEAP32[i3 >> 2] = i4 + 1;
   HEAP8[i4 >> 0] = i7;
   break;
  }
  i1 = ___overflow(i8, i2) | 0;
 } while (0);
 return i1 | 0;
}

function __ZNSt3__26vectorINS0_IfNS_9allocatorIfEEEENS1_IS3_EEEC2EjRKS3_(i2, i1, i3) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 HEAP32[i2 >> 2] = 0;
 i4 = i2 + 4 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 if (!i1) return;
 if (i1 >>> 0 > 357913941) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i2);
  i4 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i4);
  ___cxa_throw(i4 | 0, 1784, 8);
 }
 i5 = __Znwj(i1 * 12 | 0) | 0;
 HEAP32[i4 >> 2] = i5;
 HEAP32[i2 >> 2] = i5;
 HEAP32[i2 + 8 >> 2] = i5 + (i1 * 12 | 0);
 i2 = i5;
 do {
  __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i2, i3);
  i2 = (HEAP32[i4 >> 2] | 0) + 12 | 0;
  HEAP32[i4 >> 2] = i2;
  i1 = i1 + -1 | 0;
 } while ((i1 | 0) != 0);
 return;
}

function __ZNSt3__26vectorIN7guetzli13JpegHistogramENS_9allocatorIS2_EEEC2Ej(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0;
 HEAP32[i2 >> 2] = 0;
 i3 = i2 + 4 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 if (!i1) return;
 if (i1 >>> 0 > 4177983) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i2);
  i3 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i3);
  ___cxa_throw(i3 | 0, 1784, 8);
 }
 i4 = __Znwj(i1 * 1028 | 0) | 0;
 HEAP32[i3 >> 2] = i4;
 HEAP32[i2 >> 2] = i4;
 HEAP32[i2 + 8 >> 2] = i4 + (i1 * 1028 | 0);
 i2 = i4;
 do {
  _memset(i2 | 0, 0, 1024) | 0;
  HEAP32[i2 + 1024 >> 2] = 1;
  i2 = (HEAP32[i3 >> 2] | 0) + 1028 | 0;
  HEAP32[i3 >> 2] = i2;
  i1 = i1 + -1 | 0;
 } while ((i1 | 0) != 0);
 return;
}

function ___overflow(i5, i6) {
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i7 = 0, i8 = 0, i9 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i9;
 i8 = i6 & 255;
 HEAP8[i7 >> 0] = i8;
 i2 = i5 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if (!i3) if (!(___towrite(i5) | 0)) {
  i3 = HEAP32[i2 >> 2] | 0;
  i4 = 4;
 } else i1 = -1; else i4 = 4;
 do if ((i4 | 0) == 4) {
  i4 = i5 + 20 | 0;
  i2 = HEAP32[i4 >> 2] | 0;
  if (i2 >>> 0 < i3 >>> 0 ? (i1 = i6 & 255, (i1 | 0) != (HEAP8[i5 + 75 >> 0] | 0)) : 0) {
   HEAP32[i4 >> 2] = i2 + 1;
   HEAP8[i2 >> 0] = i8;
   break;
  }
  if ((FUNCTION_TABLE_iiii[HEAP32[i5 + 36 >> 2] & 7](i5, i7, 1) | 0) == 1) i1 = HEAPU8[i7 >> 0] | 0; else i1 = -1;
 } while (0);
 STACKTOP = i9;
 return i1 | 0;
}

function __ZNSt3__26vectorIfNS_9allocatorIfEEEC2EjRKf(i1, i2, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i4 = i4 | 0;
 var i3 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = 0;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 if (!i2) return;
 if (i2 >>> 0 > 1073741823) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i1);
  i5 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i5);
  ___cxa_throw(i5 | 0, 1784, 8);
 }
 i6 = __Znwj(i2 << 2) | 0;
 HEAP32[i5 >> 2] = i6;
 HEAP32[i1 >> 2] = i6;
 HEAP32[i1 + 8 >> 2] = i6 + (i2 << 2);
 i3 = i6 + (i2 << 2) | 0;
 i1 = i2;
 i2 = i6;
 while (1) {
  HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
  i1 = i1 + -1 | 0;
  if (!i1) break; else i2 = i2 + 4 | 0;
 }
 HEAP32[i5 >> 2] = i3;
 return;
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i6;
 if (i3 >>> 0 <= 4294967279) if (i3 >>> 0 < 11) HEAP8[i1 + 11 >> 0] = i3; else i5 = 5; else {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv(i1);
  i5 = 5;
 }
 if ((i5 | 0) == 5) {
  i7 = i3 + 16 & -16;
  i5 = __Znwj(i7) | 0;
  HEAP32[i1 >> 2] = i5;
  HEAP32[i1 + 8 >> 2] = i7 | -2147483648;
  HEAP32[i1 + 4 >> 2] = i3;
  i1 = i5;
 }
 __ZNSt3__211char_traitsIcE4copyEPcPKcj(i1, i2, i3) | 0;
 HEAP8[i4 >> 0] = 0;
 __ZNSt3__211char_traitsIcE6assignERcRKc(i1 + i3 | 0, i4);
 STACKTOP = i6;
 return;
}

function _fflush(i2) {
 i2 = i2 | 0;
 var i1 = 0, i3 = 0;
 do if (i2) {
  if ((HEAP32[i2 + 76 >> 2] | 0) <= -1) {
   i1 = ___fflush_unlocked(i2) | 0;
   break;
  }
  i3 = (___lockfile(i2) | 0) == 0;
  i1 = ___fflush_unlocked(i2) | 0;
  if (!i3) ___unlockfile(i2);
 } else {
  if (!(HEAP32[2157] | 0)) i1 = 0; else i1 = _fflush(HEAP32[2157] | 0) | 0;
  i2 = HEAP32[(___ofl_lock() | 0) >> 2] | 0;
  if (i2) do {
   if ((HEAP32[i2 + 76 >> 2] | 0) > -1) i3 = ___lockfile(i2) | 0; else i3 = 0;
   if ((HEAP32[i2 + 20 >> 2] | 0) >>> 0 > (HEAP32[i2 + 28 >> 2] | 0) >>> 0) i1 = ___fflush_unlocked(i2) | 0 | i1;
   if (i3 | 0) ___unlockfile(i2);
   i2 = HEAP32[i2 + 56 >> 2] | 0;
  } while ((i2 | 0) != 0);
  ___ofl_unlock();
 } while (0);
 return i1 | 0;
}

function _fclose(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i5 = 0, i6 = 0;
 if ((HEAP32[i4 + 76 >> 2] | 0) > -1) i5 = ___lockfile(i4) | 0; else i5 = 0;
 ___unlist_locked_file(i4);
 i6 = (HEAP32[i4 >> 2] & 1 | 0) != 0;
 if (!i6) {
  i3 = ___ofl_lock() | 0;
  i2 = HEAP32[i4 + 52 >> 2] | 0;
  i1 = i4 + 56 | 0;
  if (i2 | 0) HEAP32[i2 + 56 >> 2] = HEAP32[i1 >> 2];
  i1 = HEAP32[i1 >> 2] | 0;
  if (i1 | 0) HEAP32[i1 + 52 >> 2] = i2;
  if ((HEAP32[i3 >> 2] | 0) == (i4 | 0)) HEAP32[i3 >> 2] = i1;
  ___ofl_unlock();
 }
 i1 = _fflush(i4) | 0;
 i1 = FUNCTION_TABLE_ii[HEAP32[i4 + 12 >> 2] & 3](i4) | 0 | i1;
 i2 = HEAP32[i4 + 92 >> 2] | 0;
 if (i2 | 0) _free(i2);
 if (i6) {
  if (i5 | 0) ___unlockfile(i4);
 } else _free(i4);
 return i1 | 0;
}

function _scalbn(d2, i1) {
 d2 = +d2;
 i1 = i1 | 0;
 var i3 = 0, i4 = 0;
 if ((i1 | 0) <= 1023) {
  if ((i1 | 0) < -1022) {
   d2 = d2 * 2.2250738585072014e-308;
   i3 = i1 + 1022 | 0;
   i4 = (i3 | 0) < -1022;
   i1 = i1 + 2044 | 0;
   d2 = i4 ? d2 * 2.2250738585072014e-308 : d2;
   i1 = i4 ? ((i1 | 0) > -1022 ? i1 : -1022) : i3;
  }
 } else {
  d2 = d2 * 89884656743115795.0e291;
  i4 = i1 + -1023 | 0;
  i3 = (i4 | 0) > 1023;
  i1 = i1 + -2046 | 0;
  d2 = i3 ? d2 * 89884656743115795.0e291 : d2;
  i1 = i3 ? ((i1 | 0) < 1023 ? i1 : 1023) : i4;
 }
 i3 = _bitshift64Shl(i1 + 1023 | 0, 0, 52) | 0;
 i4 = tempRet0;
 HEAP32[tempDoublePtr >> 2] = i3;
 HEAP32[tempDoublePtr + 4 >> 2] = i4;
 return +(d2 * +HEAPF64[tempDoublePtr >> 3]);
}

function ___fseeko_unlocked(i4, i1, i5) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i5 = i5 | 0;
 var i2 = 0, i3 = 0;
 if ((i5 | 0) == 1) i1 = i1 - (HEAP32[i4 + 8 >> 2] | 0) + (HEAP32[i4 + 4 >> 2] | 0) | 0;
 i2 = i4 + 20 | 0;
 i3 = i4 + 28 | 0;
 if ((HEAP32[i2 >> 2] | 0) >>> 0 > (HEAP32[i3 >> 2] | 0) >>> 0 ? (FUNCTION_TABLE_iiii[HEAP32[i4 + 36 >> 2] & 7](i4, 0, 0) | 0, (HEAP32[i2 >> 2] | 0) == 0) : 0) i1 = -1; else {
  HEAP32[i4 + 16 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i2 >> 2] = 0;
  if ((FUNCTION_TABLE_iiii[HEAP32[i4 + 40 >> 2] & 7](i4, i1, i5) | 0) < 0) i1 = -1; else {
   HEAP32[i4 + 8 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
   HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -17;
   i1 = 0;
  }
 }
 return i1 | 0;
}

function _frexp(d1, i5) {
 d1 = +d1;
 i5 = i5 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAPF64[tempDoublePtr >> 3] = d1;
 i2 = HEAP32[tempDoublePtr >> 2] | 0;
 i3 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 i4 = _bitshift64Lshr(i2 | 0, i3 | 0, 52) | 0;
 switch (i4 & 2047) {
 case 0:
  {
   if (d1 != 0.0) {
    d1 = +_frexp(d1 * 18446744073709552.0e3, i5);
    i2 = (HEAP32[i5 >> 2] | 0) + -64 | 0;
   } else i2 = 0;
   HEAP32[i5 >> 2] = i2;
   break;
  }
 case 2047:
  break;
 default:
  {
   HEAP32[i5 >> 2] = (i4 & 2047) + -1022;
   HEAP32[tempDoublePtr >> 2] = i2;
   HEAP32[tempDoublePtr + 4 >> 2] = i3 & -2146435073 | 1071644672;
   d1 = +HEAPF64[tempDoublePtr >> 3];
  }
 }
 return +d1;
}

function _fmin(d1, d2) {
 d1 = +d1;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i5 = ___DOUBLE_BITS_270(d1) | 0;
 i6 = tempRet0;
 i4 = i6 & 2147483647;
 do if (!(i4 >>> 0 > 2146435072 | (i4 | 0) == 2146435072 & i5 >>> 0 > 0)) {
  i3 = ___DOUBLE_BITS_270(d2) | 0;
  i4 = tempRet0;
  i7 = i4 & 2147483647;
  if (!(i7 >>> 0 > 2146435072 | (i7 | 0) == 2146435072 & i3 >>> 0 > 0)) {
   i5 = _bitshift64Lshr(i5 | 0, i6 | 0, 63) | 0;
   i7 = _bitshift64Lshr(i3 | 0, i4 | 0, 63) | 0;
   if ((i5 | 0) == (i7 | 0)) {
    d1 = d1 < d2 ? d1 : d2;
    break;
   } else {
    d1 = (i6 | 0) < 0 ? d1 : d2;
    break;
   }
  }
 } else d1 = d2; while (0);
 return +d1;
}

function ___fflush_unlocked(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 20 | 0;
 i7 = i1 + 28 | 0;
 if ((HEAP32[i2 >> 2] | 0) >>> 0 > (HEAP32[i7 >> 2] | 0) >>> 0 ? (FUNCTION_TABLE_iiii[HEAP32[i1 + 36 >> 2] & 7](i1, 0, 0) | 0, (HEAP32[i2 >> 2] | 0) == 0) : 0) i1 = -1; else {
  i3 = i1 + 4 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  i5 = i1 + 8 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  if (i4 >>> 0 < i6 >>> 0) FUNCTION_TABLE_iiii[HEAP32[i1 + 40 >> 2] & 7](i1, i4 - i6 | 0, 1) | 0;
  HEAP32[i1 + 16 >> 2] = 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
  i1 = 0;
 }
 return i1 | 0;
}

function ___toread(i3) {
 i3 = i3 | 0;
 var i1 = 0, i2 = 0;
 i1 = i3 + 74 | 0;
 i2 = HEAP8[i1 >> 0] | 0;
 HEAP8[i1 >> 0] = i2 + 255 | i2;
 i1 = i3 + 20 | 0;
 i2 = i3 + 28 | 0;
 if ((HEAP32[i1 >> 2] | 0) >>> 0 > (HEAP32[i2 >> 2] | 0) >>> 0) FUNCTION_TABLE_iiii[HEAP32[i3 + 36 >> 2] & 7](i3, 0, 0) | 0;
 HEAP32[i3 + 16 >> 2] = 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 >> 2] = 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if (!(i1 & 4)) {
  i2 = (HEAP32[i3 + 44 >> 2] | 0) + (HEAP32[i3 + 48 >> 2] | 0) | 0;
  HEAP32[i3 + 8 >> 2] = i2;
  HEAP32[i3 + 4 >> 2] = i2;
  i1 = i1 << 27 >> 31;
 } else {
  HEAP32[i3 >> 2] = i1 | 32;
  i1 = -1;
 }
 return i1 | 0;
}

function _fmt_u(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 var i4 = 0;
 if (i2 >>> 0 > 0 | (i2 | 0) == 0 & i3 >>> 0 > 4294967295) {
  while (1) {
   i4 = ___uremdi3(i3 | 0, i2 | 0, 10, 0) | 0;
   i1 = i1 + -1 | 0;
   HEAP8[i1 >> 0] = i4 & 255 | 48;
   i4 = i3;
   i3 = ___udivdi3(i3 | 0, i2 | 0, 10, 0) | 0;
   if (!(i2 >>> 0 > 9 | (i2 | 0) == 9 & i4 >>> 0 > 4294967295)) break; else i2 = tempRet0;
  }
  i2 = i3;
 } else i2 = i3;
 if (i2) while (1) {
  i1 = i1 + -1 | 0;
  HEAP8[i1 >> 0] = (i2 >>> 0) % 10 | 0 | 48;
  if (i2 >>> 0 < 10) break; else i2 = (i2 >>> 0) / 10 | 0;
 }
 return i1 | 0;
}

function __ZNSt3__26vectorIiNS_9allocatorIiEEEC2Ej(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = 0;
 i3 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 if (!i2) return;
 if (i2 >>> 0 > 1073741823) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i1);
  i3 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i3);
  ___cxa_throw(i3 | 0, 1784, 8);
 }
 i4 = i2 << 2;
 i5 = __Znwj(i4) | 0;
 HEAP32[i1 >> 2] = i5;
 i2 = i5 + (i2 << 2) | 0;
 HEAP32[i1 + 8 >> 2] = i2;
 _memset(i5 | 0, 0, i4 | 0) | 0;
 HEAP32[i3 >> 2] = i2;
 return;
}

function __ZNSt3__26vectorIfNS_9allocatorIfEEEC2Ej(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = 0;
 i3 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 if (!i2) return;
 if (i2 >>> 0 > 1073741823) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i1);
  i3 = ___cxa_allocate_exception(4) | 0;
  __ZNSt9bad_allocC2Ev(i3);
  ___cxa_throw(i3 | 0, 1784, 8);
 }
 i4 = i2 << 2;
 i5 = __Znwj(i4) | 0;
 HEAP32[i1 >> 2] = i5;
 i2 = i5 + (i2 << 2) | 0;
 HEAP32[i1 + 8 >> 2] = i2;
 _memset(i5 | 0, 0, i4 | 0) | 0;
 HEAP32[i3 >> 2] = i2;
 return;
}

function __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(i1, i5, i6, i7) {
 i1 = i1 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i1 = i5 + 16 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i3 = i5 + 36 | 0;
 i4 = i5 + 24 | 0;
 do if (i2) {
  if ((i2 | 0) != (i6 | 0)) {
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   HEAP32[i4 >> 2] = 2;
   HEAP8[i5 + 54 >> 0] = 1;
   break;
  }
  if ((HEAP32[i4 >> 2] | 0) == 2) HEAP32[i4 >> 2] = i7;
 } else {
  HEAP32[i1 >> 2] = i6;
  HEAP32[i4 >> 2] = i7;
  HEAP32[i3 >> 2] = 1;
 } while (0);
 return;
}

function __Z13ReadFileOrDieP8_IO_FILE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if (_fseek(i2, 0, 2) | 0) {
  _perror(10642);
  _exit(1);
 }
 i3 = _ftell(i2) | 0;
 if ((i3 | 0) < 0) {
  _perror(10648);
  _exit(1);
 }
 if (_fseek(i2, 0, 0) | 0) {
  _perror(10642);
  _exit(1);
 }
 i4 = __Znaj(i3) | 0;
 if ((_fread(i4, 1, i3, i2) | 0) == (i3 | 0)) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i1, i4, i3);
  __ZdaPv(i4);
  return;
 } else {
  _perror(10654);
  _exit(1);
 }
}

function ___strerror_l(i2, i4) {
 i2 = i2 | 0;
 i4 = i4 | 0;
 var i1 = 0, i3 = 0;
 i3 = 0;
 while (1) {
  if ((HEAPU8[15482 + i3 >> 0] | 0) == (i2 | 0)) {
   i2 = 2;
   break;
  }
  i1 = i3 + 1 | 0;
  if ((i1 | 0) == 87) {
   i1 = 15570;
   i3 = 87;
   i2 = 5;
   break;
  } else i3 = i1;
 }
 if ((i2 | 0) == 2) if (!i3) i1 = 15570; else {
  i1 = 15570;
  i2 = 5;
 }
 if ((i2 | 0) == 5) while (1) {
  do {
   i2 = i1;
   i1 = i1 + 1 | 0;
  } while ((HEAP8[i2 >> 0] | 0) != 0);
  i3 = i3 + -1 | 0;
  if (!i3) break; else i2 = 5;
 }
 return ___lctrans(i1, HEAP32[i4 + 20 >> 2] | 0) | 0;
}

function __Z14WriteFileOrDieP8_IO_FILERKNSt3__212basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i5 = i2 + 11 | 0;
 i4 = HEAP8[i5 >> 0] | 0;
 i6 = i4 << 24 >> 24 < 0;
 i3 = i2 + 4 | 0;
 i4 = _fwrite(i6 ? HEAP32[i2 >> 2] | 0 : i2, 1, i6 ? HEAP32[i3 >> 2] | 0 : i4 & 255, i1) | 0;
 i2 = HEAP8[i5 >> 0] | 0;
 if ((i4 | 0) != ((i2 << 24 >> 24 < 0 ? HEAP32[i3 >> 2] | 0 : i2 & 255) | 0)) {
  _perror(10660);
  _exit(1);
 }
 if ((_fclose(i1) | 0) < 0) {
  _perror(10667);
  _exit(1);
 } else return;
}

function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i4 = i1;
 L1 : do if (!(i4 & 3)) i3 = 4; else {
  i2 = i4;
  while (1) {
   if (!(HEAP8[i1 >> 0] | 0)) {
    i1 = i2;
    break L1;
   }
   i1 = i1 + 1 | 0;
   i2 = i1;
   if (!(i2 & 3)) {
    i3 = 4;
    break;
   }
  }
 } while (0);
 if ((i3 | 0) == 4) {
  while (1) {
   i2 = HEAP32[i1 >> 2] | 0;
   if (!((i2 & -2139062144 ^ -2139062144) & i2 + -16843009)) i1 = i1 + 4 | 0; else break;
  }
  if ((i2 & 255) << 24 >> 24) do i1 = i1 + 1 | 0; while ((HEAP8[i1 >> 0] | 0) != 0);
 }
 return i1 - i4 | 0;
}

function __ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i1, HEAP32[i2 + 8 >> 2] | 0, i6) | 0) __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0, i2, i3, i4, i5); else {
  i1 = HEAP32[i1 + 8 >> 2] | 0;
  FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 3](i1, i2, i3, i4, i5, i6);
 }
 return;
}

function _pad_674(i5, i2, i3, i4, i1) {
 i5 = i5 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i1 = i1 | 0;
 var i6 = 0, i7 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 i6 = i7;
 if ((i3 | 0) > (i4 | 0) & (i1 & 73728 | 0) == 0) {
  i1 = i3 - i4 | 0;
  _memset(i6 | 0, i2 | 0, (i1 >>> 0 < 256 ? i1 : 256) | 0) | 0;
  if (i1 >>> 0 > 255) {
   i2 = i3 - i4 | 0;
   do {
    _out(i5, i6, 256);
    i1 = i1 + -256 | 0;
   } while (i1 >>> 0 > 255);
   i1 = i2 & 255;
  }
  _out(i5, i6, i1);
 }
 STACKTOP = i7;
 return;
}

function __ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i1, HEAP32[i2 + 8 >> 2] | 0, 0) | 0) __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0, i2, i3, i4); else {
  i1 = HEAP32[i1 + 8 >> 2] | 0;
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 3](i1, i2, i3, i4);
 }
 return;
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 if ((HEAP8[i2 + 11 >> 0] | 0) < 0) __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj(i1, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0); else {
  HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 }
 return;
}

function ___stdio_seek(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5;
 i4 = i5 + 20 | 0;
 HEAP32[i6 >> 2] = HEAP32[i1 + 60 >> 2];
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = i2;
 HEAP32[i6 + 12 >> 2] = i4;
 HEAP32[i6 + 16 >> 2] = i3;
 if ((___syscall_ret(___syscall140(140, i6 | 0) | 0) | 0) < 0) {
  HEAP32[i4 >> 2] = -1;
  i1 = -1;
 } else i1 = HEAP32[i4 >> 2] | 0;
 STACKTOP = i5;
 return i1 | 0;
}

function _perror(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[2032] | 0;
 i4 = _strerror(HEAP32[(___errno_location() | 0) >> 2] | 0) | 0;
 if ((HEAP32[i2 + 76 >> 2] | 0) > -1) i3 = ___lockfile(i2) | 0; else i3 = 0;
 if (i1 | 0 ? HEAP8[i1 >> 0] | 0 : 0) {
  _fwrite(i1, _strlen(i1) | 0, 1, i2) | 0;
  _fputc(58, i2) | 0;
  _fputc(32, i2) | 0;
 }
 _fwrite(i4, _strlen(i4) | 0, 1, i2) | 0;
 _fputc(10, i2) | 0;
 if (i3 | 0) ___unlockfile(i2);
 return;
}

function ___towrite(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 74 | 0;
 i3 = HEAP8[i2 >> 0] | 0;
 HEAP8[i2 >> 0] = i3 + 255 | i3;
 i2 = HEAP32[i1 >> 2] | 0;
 if (!(i2 & 8)) {
  HEAP32[i1 + 8 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i3 = HEAP32[i1 + 44 >> 2] | 0;
  HEAP32[i1 + 28 >> 2] = i3;
  HEAP32[i1 + 20 >> 2] = i3;
  HEAP32[i1 + 16 >> 2] = i3 + (HEAP32[i1 + 48 >> 2] | 0);
  i1 = 0;
 } else {
  HEAP32[i1 >> 2] = i2 | 32;
  i1 = -1;
 }
 return i1 | 0;
}

function _sbrk(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i3 = i1 + 15 & -16 | 0;
 i2 = HEAP32[DYNAMICTOP_PTR >> 2] | 0;
 i1 = i2 + i3 | 0;
 if ((i3 | 0) > 0 & (i1 | 0) < (i2 | 0) | (i1 | 0) < 0) {
  abortOnCannotGrowMemory() | 0;
  ___setErrNo(12);
  return -1;
 }
 HEAP32[DYNAMICTOP_PTR >> 2] = i1;
 if ((i1 | 0) > (getTotalMemory() | 0) ? (enlargeMemory() | 0) == 0 : 0) {
  ___setErrNo(12);
  HEAP32[DYNAMICTOP_PTR >> 2] = i2;
  return -1;
 }
 return i2 | 0;
}

function __ZN11butteraugli12CacheAligned4FreeEPv(i2) {
 i2 = i2 | 0;
 var i1 = 0, i3 = 0;
 if (!i2) return;
 if (i2 & 63 | 0) ___assert_fail(10372, 10333, 70, 10431);
 i3 = i2 + -4 | 0;
 i1 = HEAPU8[i3 >> 0] | HEAPU8[i3 + 1 >> 0] << 8 | HEAPU8[i3 + 2 >> 0] << 16 | HEAPU8[i3 + 3 >> 0] << 24;
 if (i1 >>> 0 > i3 >>> 0) ___assert_fail(10436, 10333, 73, 10431);
 if (i1 >>> 0 < (i2 + -64 | 0) >>> 0) ___assert_fail(10472, 10333, 74, 10431);
 _free(i1);
 return;
}

function ___stdout_write(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i5;
 HEAP32[i1 + 36 >> 2] = 1;
 if ((HEAP32[i1 >> 2] & 64 | 0) == 0 ? (HEAP32[i4 >> 2] = HEAP32[i1 + 60 >> 2], HEAP32[i4 + 4 >> 2] = 21523, HEAP32[i4 + 8 >> 2] = i5 + 16, ___syscall54(54, i4 | 0) | 0) : 0) HEAP8[i1 + 75 >> 0] = -1;
 i4 = ___stdio_write(i1, i2, i3) | 0;
 STACKTOP = i5;
 return i4 | 0;
}

function __ZNK7guetzli21ButteraugliComparator15ScoreOutputSizeEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = 0.0, d4 = 0.0, d5 = 0.0;
 d5 = +Math_fround(HEAPF32[i1 + 76 >> 2]);
 d5 = d5 - +Math_fround(HEAPF32[i1 + 12 >> 2]);
 d3 = +(i2 | 0);
 if (d5 <= 0.0) {
  d5 = d3;
  return +d5;
 }
 d4 = d5 * 50.0;
 if (d4 > 10.0) {
  d5 = d3 + d5 * 22026465794806716.0e18;
  return +d5;
 } else {
  d5 = d3 * +_exp(d4);
  return +d5;
 }
 return 0.0;
}

function ___fmodeflags(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i3 = (_strchr(i1, 43) | 0) == 0;
 i2 = HEAP8[i1 >> 0] | 0;
 i3 = i3 ? i2 << 24 >> 24 != 114 & 1 : 2;
 i4 = (_strchr(i1, 120) | 0) == 0;
 i3 = i4 ? i3 : i3 | 128;
 i1 = (_strchr(i1, 101) | 0) == 0;
 i1 = i1 ? i3 : i3 | 524288;
 i1 = i2 << 24 >> 24 == 114 ? i1 : i1 | 64;
 i1 = i2 << 24 >> 24 == 119 ? i1 | 512 : i1;
 return (i2 << 24 >> 24 == 97 ? i1 | 1024 : i1) | 0;
}

function _strcmp(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i1 = 0, i4 = 0;
 i1 = HEAP8[i2 >> 0] | 0;
 i4 = HEAP8[i3 >> 0] | 0;
 if (i1 << 24 >> 24 == 0 ? 1 : i1 << 24 >> 24 != i4 << 24 >> 24) i2 = i4; else {
  do {
   i2 = i2 + 1 | 0;
   i3 = i3 + 1 | 0;
   i1 = HEAP8[i2 >> 0] | 0;
   i4 = HEAP8[i3 >> 0] | 0;
  } while (!(i1 << 24 >> 24 == 0 ? 1 : i1 << 24 >> 24 != i4 << 24 >> 24));
  i2 = i4;
 }
 return (i1 & 255) - (i2 & 255) | 0;
}

function _memcmp(i1, i3, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 var i4 = 0, i5 = 0;
 L1 : do if (!i2) i1 = 0; else {
  while (1) {
   i4 = HEAP8[i1 >> 0] | 0;
   i5 = HEAP8[i3 >> 0] | 0;
   if (i4 << 24 >> 24 != i5 << 24 >> 24) break;
   i2 = i2 + -1 | 0;
   if (!i2) {
    i1 = 0;
    break L1;
   } else {
    i1 = i1 + 1 | 0;
    i3 = i3 + 1 | 0;
   }
  }
  i1 = (i4 & 255) - (i5 & 255) | 0;
 } while (0);
 return i1 | 0;
}

function _fwrite(i2, i4, i1, i3) {
 i2 = i2 | 0;
 i4 = i4 | 0;
 i1 = i1 | 0;
 i3 = i3 | 0;
 var i5 = 0, i6 = 0;
 i5 = Math_imul(i1, i4) | 0;
 i1 = (i4 | 0) == 0 ? 0 : i1;
 if ((HEAP32[i3 + 76 >> 2] | 0) > -1) {
  i6 = (___lockfile(i3) | 0) == 0;
  i2 = ___fwritex(i2, i5, i3) | 0;
  if (!i6) ___unlockfile(i3);
 } else i2 = ___fwritex(i2, i5, i3) | 0;
 if ((i2 | 0) != (i5 | 0)) i1 = (i2 >>> 0) / (i4 >>> 0) | 0;
 return i1 | 0;
}

function __ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i1, HEAP32[i2 + 8 >> 2] | 0, i6) | 0) __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0, i2, i3, i4, i5);
 return;
}

function ___ftello_unlocked(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 if (!(HEAP32[i2 >> 2] & 128)) i1 = 1; else i1 = (HEAP32[i2 + 20 >> 2] | 0) >>> 0 > (HEAP32[i2 + 28 >> 2] | 0) >>> 0 ? 2 : 1;
 i1 = FUNCTION_TABLE_iiii[HEAP32[i2 + 40 >> 2] & 7](i2, 0, i1) | 0;
 if ((i1 | 0) >= 0) i1 = i1 - (HEAP32[i2 + 8 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) + (HEAP32[i2 + 20 >> 2] | 0) - (HEAP32[i2 + 28 >> 2] | 0) | 0;
 return i1 | 0;
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((i1 | 0) != (i2 | 0)) {
  i3 = HEAP8[i2 + 11 >> 0] | 0;
  i4 = i3 << 24 >> 24 < 0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj(i1, i4 ? HEAP32[i2 >> 2] | 0 : i2, i4 ? HEAP32[i2 + 4 >> 2] | 0 : i3 & 255) | 0;
 }
 return i1 | 0;
}

function ___muldsi3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i6 = i1 & 65535;
 i5 = i2 & 65535;
 i3 = Math_imul(i5, i6) | 0;
 i4 = i1 >>> 16;
 i1 = (i3 >>> 16) + (Math_imul(i5, i4) | 0) | 0;
 i5 = i2 >>> 16;
 i2 = Math_imul(i5, i6) | 0;
 return (tempRet0 = (i1 >>> 16) + (Math_imul(i5, i4) | 0) + (((i1 & 65535) + i2 | 0) >>> 16) | 0, i1 + i2 << 16 | i3 & 65535 | 0) | 0;
}

function __ZNSt3__26__treeIiNS_4lessIiEENS_9allocatorIiEEE7destroyEPNS_11__tree_nodeIiPvEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!i2) return; else {
  __ZNSt3__26__treeIiNS_4lessIiEENS_9allocatorIiEEE7destroyEPNS_11__tree_nodeIiPvEE(i1, HEAP32[i2 >> 2] | 0);
  __ZNSt3__26__treeIiNS_4lessIiEENS_9allocatorIiEEE7destroyEPNS_11__tree_nodeIiPvEE(i1, HEAP32[i2 + 4 >> 2] | 0);
  __ZdlPv(i2);
  return;
 }
}

function __ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 if (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i1, HEAP32[i2 + 8 >> 2] | 0, 0) | 0) __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0, i2, i3, i4);
 return;
}

function _memmove(i1, i4, i2) {
 i1 = i1 | 0;
 i4 = i4 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i4 | 0) < (i1 | 0) & (i1 | 0) < (i4 + i2 | 0)) {
  i3 = i1;
  i4 = i4 + i2 | 0;
  i1 = i1 + i2 | 0;
  while ((i2 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i4 = i4 - 1 | 0;
   i2 = i2 - 1 | 0;
   HEAP8[i1 >> 0] = HEAP8[i4 >> 0] | 0;
  }
  i1 = i3;
 } else _memcpy(i1, i4, i2) | 0;
 return i1 | 0;
}

function __ZSt9terminatev() {
 var i1 = 0, i2 = 0;
 i1 = ___cxa_get_globals_fast() | 0;
 if ((i1 | 0 ? (i2 = HEAP32[i1 >> 2] | 0, i2 | 0) : 0) ? (i1 = i2 + 48 | 0, (HEAP32[i1 >> 2] & -256 | 0) == 1126902528 ? (HEAP32[i1 + 4 >> 2] | 0) == 1129074247 : 0) : 0) __ZSt11__terminatePFvvE(HEAP32[i2 + 12 >> 2] | 0);
 __ZSt11__terminatePFvvE(__ZSt13get_terminatev() | 0);
}

function ___cxa_can_catch(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i5;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 i1 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 7](i1, i2, i4) | 0;
 if (i1) HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i5;
 return i1 & 1 | 0;
}

function __ZN7guetzliL15SortHuffmanTreeERKNS_11HuffmanTreeES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == (i4 | 0)) {
  i4 = (HEAP16[i1 + 6 >> 1] | 0) > (HEAP16[i2 + 6 >> 1] | 0);
  return i4 | 0;
 } else {
  i4 = i3 >>> 0 < i4 >>> 0;
  return i4 | 0;
 }
 return 0;
}

function ___unlist_locked_file(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (HEAP32[i1 + 68 >> 2] | 0) {
  i2 = HEAP32[i1 + 116 >> 2] | 0;
  i1 = i1 + 112 | 0;
  if (i2 | 0) HEAP32[i2 + 112 >> 2] = HEAP32[i1 >> 2];
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) i1 = (___pthread_self_607() | 0) + 232 | 0; else i1 = i1 + 116 | 0;
  HEAP32[i1 >> 2] = i2;
 }
 return;
}

function _getint(i4) {
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i3 = (HEAP8[i2 >> 0] | 0) + -48 | 0;
 if (i3 >>> 0 < 10) {
  i1 = 0;
  do {
   i1 = i3 + (i1 * 10 | 0) | 0;
   i2 = i2 + 1 | 0;
   HEAP32[i4 >> 2] = i2;
   i3 = (HEAP8[i2 >> 0] | 0) + -48 | 0;
  } while (i3 >>> 0 < 10);
 } else i1 = 0;
 return i1 | 0;
}

function _fmt_x(i3, i2, i1, i4) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 i4 = i4 | 0;
 if (!((i3 | 0) == 0 & (i2 | 0) == 0)) do {
  i1 = i1 + -1 | 0;
  HEAP8[i1 >> 0] = HEAPU8[15464 + (i3 & 15) >> 0] | 0 | i4;
  i3 = _bitshift64Lshr(i3 | 0, i2 | 0, 4) | 0;
  i2 = tempRet0;
 } while (!((i3 | 0) == 0 & (i2 | 0) == 0));
 return i1 | 0;
}

function _sn_write(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i1 + 20 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i1 = (HEAP32[i1 + 16 >> 2] | 0) - i5 | 0;
 i1 = i1 >>> 0 > i3 >>> 0 ? i3 : i1;
 _memcpy(i5 | 0, i2 | 0, i1 | 0) | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + i1;
 return i3 | 0;
}

function __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 if ((HEAP32[i2 + 4 >> 2] | 0) == (i3 | 0) ? (i5 = i2 + 28 | 0, (HEAP32[i5 >> 2] | 0) != 1) : 0) HEAP32[i5 >> 2] = i4;
 return;
}

function ___uremdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i6 | 0;
 ___udivmoddi4(i1, i2, i3, i4, i5) | 0;
 STACKTOP = i6;
 return (tempRet0 = HEAP32[i5 + 4 >> 2] | 0, HEAP32[i5 >> 2] | 0) | 0;
}

function ___fseeko(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i4 = 0;
 if ((HEAP32[i3 + 76 >> 2] | 0) > -1) {
  i4 = (___lockfile(i3) | 0) == 0;
  i1 = ___fseeko_unlocked(i3, i1, i2) | 0;
  if (!i4) ___unlockfile(i3);
 } else i1 = ___fseeko_unlocked(i3, i1, i2) | 0;
 return i1 | 0;
}

function _fmt_o(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 if (!((i3 | 0) == 0 & (i2 | 0) == 0)) do {
  i1 = i1 + -1 | 0;
  HEAP8[i1 >> 0] = i3 & 7 | 48;
  i3 = _bitshift64Lshr(i3 | 0, i2 | 0, 3) | 0;
  i2 = tempRet0;
 } while (!((i3 | 0) == 0 & (i2 | 0) == 0));
 return i1 | 0;
}

function dynCall_viiidiiii(i9, i1, i2, i3, d4, i5, i6, i7, i8) {
 i9 = i9 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiidiiii[i9 & 1](i1 | 0, i2 | 0, i3 | 0, +d4, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}

function ___muldi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = i1;
 i6 = i3;
 i3 = ___muldsi3(i5, i6) | 0;
 i1 = tempRet0;
 return (tempRet0 = (Math_imul(i2, i6) | 0) + (Math_imul(i4, i5) | 0) + i1 | i1 & 0, i3 | 0 | 0) | 0;
}

function ___cxa_get_globals_fast() {
 var i1 = 0, i2 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if (!(_pthread_once(44680, 2) | 0)) {
  i2 = _pthread_getspecific(HEAP32[11171] | 0) | 0;
  STACKTOP = i1;
  return i2 | 0;
 } else _abort_message(17884, i1);
 return 0;
}

function ___stdio_close(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2;
 HEAP32[i3 >> 2] = _dummy_738(HEAP32[i1 + 60 >> 2] | 0) | 0;
 i1 = ___syscall_ret(___syscall6(6, i3 | 0) | 0) | 0;
 STACKTOP = i2;
 return i1 | 0;
}

function __ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 _free(i1);
 if (!(_pthread_setspecific(HEAP32[11171] | 0, 0) | 0)) {
  STACKTOP = i2;
  return;
 } else _abort_message(17983, i2);
}

function _snprintf(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5;
 HEAP32[i6 >> 2] = i4;
 i4 = _vsnprintf(i1, i2, i3, i6) | 0;
 STACKTOP = i5;
 return i4 | 0;
}

function __Znwj(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = (i1 | 0) == 0 ? 1 : i1;
 while (1) {
  i1 = _malloc(i2) | 0;
  if (i1 | 0) break;
  i1 = __ZSt15get_new_handlerv() | 0;
  if (!i1) {
   i1 = 0;
   break;
  }
  FUNCTION_TABLE_v[i1 & 3]();
 }
 return i1 | 0;
}

function ___ftello(i2) {
 i2 = i2 | 0;
 var i1 = 0, i3 = 0;
 if ((HEAP32[i2 + 76 >> 2] | 0) > -1) {
  i3 = (___lockfile(i2) | 0) == 0;
  i1 = ___ftello_unlocked(i2) | 0;
  if (!i3) ___unlockfile(i2);
 } else i1 = ___ftello_unlocked(i2) | 0;
 return i1 | 0;
}

function ___ofl_add(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = ___ofl_lock() | 0;
 HEAP32[i1 + 56 >> 2] = HEAP32[i2 >> 2];
 i3 = HEAP32[i2 >> 2] | 0;
 if (i3 | 0) HEAP32[i3 + 52 >> 2] = i1;
 HEAP32[i2 >> 2] = i1;
 ___ofl_unlock();
 return i1 | 0;
}

function _fprintf(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4;
 HEAP32[i5 >> 2] = i3;
 i3 = _vfprintf(i1, i2, i5) | 0;
 STACKTOP = i4;
 return i3 | 0;
}

function _printf(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3;
 HEAP32[i4 >> 2] = i2;
 i2 = _vfprintf(HEAP32[2125] | 0, i1, i4) | 0;
 STACKTOP = i3;
 return i2 | 0;
}

function dynCall_viiiiii(i7, i1, i2, i3, i4, i5, i6) {
 i7 = i7 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiiii[i7 & 3](i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}

function _bitshift64Shl(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 if ((i1 | 0) < 32) {
  tempRet0 = i2 << i1 | (i3 & (1 << i1) - 1 << 32 - i1) >>> 32 - i1;
  return i3 << i1;
 }
 tempRet0 = i3 << i1 - 32;
 return 0;
}

function _abort_message(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i3 >> 2] = i2;
 i2 = HEAP32[2032] | 0;
 _vfprintf(i2, i1, i3) | 0;
 _fputc(10, i2) | 0;
 _abort();
}

function _bitshift64Lshr(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 if ((i1 | 0) < 32) {
  tempRet0 = i2 >>> i1;
  return i3 >>> i1 | (i2 & (1 << i1) - 1) << 32 - i1;
 }
 tempRet0 = 0;
 return i2 >>> i1 - 32 | 0;
}

function __ZN10__cxxabiv112_GLOBAL__N_110construct_Ev() {
 var i1 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if (!(_pthread_key_create(44684, 12) | 0)) {
  STACKTOP = i1;
  return;
 } else _abort_message(17933, i1);
}

function runPostSets() {}
function _i64Subtract(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i4 = i2 - i4 - (i3 >>> 0 > i1 >>> 0 | 0) >>> 0;
 return (tempRet0 = i4, i1 - i3 >>> 0 | 0) | 0;
}

function __ZN7guetzli16GuetzliStringOutEPvPKhj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj(i1, i2, i3) | 0;
 return i3 | 0;
}

function __ZNK7guetzli21ButteraugliComparator10DistanceOKEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var d3 = 0.0;
 d3 = +Math_fround(HEAPF32[i1 + 76 >> 2]);
 return d3 <= +Math_fround(HEAPF32[i1 + 12 >> 2]) * d2 | 0;
}

function dynCall_viiiii(i6, i1, i2, i3, i4, i5) {
 i6 = i6 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiiii[i6 & 3](i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}

function ___DOUBLE_BITS_675(d1) {
 d1 = +d1;
 var i2 = 0;
 HEAPF64[tempDoublePtr >> 3] = d1;
 i2 = HEAP32[tempDoublePtr >> 2] | 0;
 tempRet0 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 return i2 | 0;
}

function ___DOUBLE_BITS_270(d1) {
 d1 = +d1;
 var i2 = 0;
 HEAPF64[tempDoublePtr >> 3] = d1;
 i2 = HEAP32[tempDoublePtr >> 2] | 0;
 tempRet0 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 return i2 | 0;
}

function ___lctrans_impl(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 if (!i1) i1 = 0; else i1 = ___mo_lookup(HEAP32[i1 >> 2] | 0, HEAP32[i1 + 4 >> 2] | 0, i2) | 0;
 return (i1 | 0 ? i1 : i2) | 0;
}

function _i64Add(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i3 = i1 + i3 >>> 0;
 return (tempRet0 = i2 + i4 + (i3 >>> 0 < i1 >>> 0 | 0) >>> 0, i3 | 0) | 0;
}

function dynCall_diiii(i5, i1, i2, i3, i4) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return +FUNCTION_TABLE_diiii[i5 & 1](i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}

function dynCall_viiii(i5, i1, i2, i3, i4) {
 i5 = i5 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viiii[i5 & 3](i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}

function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 11 >> 0] | 0) < 0) __ZdlPv(HEAP32[i1 >> 2] | 0);
 return;
}

function __ZNSt3__211char_traitsIcE4moveEPcPKcj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (i3 | 0) _memmove(i1 | 0, i2 | 0, i3 | 0) | 0;
 return i1 | 0;
}

function __ZSt11__terminatePFvvE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
 _abort_message(18036, i2);
}

function __ZNSt3__211char_traitsIcE4copyEPcPKcj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (i3 | 0) _memcpy(i1 | 0, i2 | 0, i3 | 0) | 0;
 return i1 | 0;
}

function __ZNK7guetzli21ButteraugliComparator7distmapEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNSt3__26vectorIfNS_9allocatorIfEEEC2ERKS3_(i1, i2 + 80 | 0);
 return;
}

function b4(i1, i2, i3, d4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 abort(4);
}

function dynCall_iiii(i4, i1, i2, i3) {
 i4 = i4 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iiii[i4 & 7](i1 | 0, i2 | 0, i3 | 0) | 0;
}

function _strchr(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i1 = ___strchrnul(i1, i2) | 0;
 return ((HEAP8[i1 >> 0] | 0) == (i2 & 255) << 24 >> 24 ? i1 : 0) | 0;
}

function _fputs(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = _strlen(i1) | 0;
 return ((_fwrite(i1, 1, i3, i2) | 0) != (i3 | 0)) << 31 >> 31 | 0;
}

function ___syscall_ret(i1) {
 i1 = i1 | 0;
 if (i1 >>> 0 > 4294963200) {
  HEAP32[(___errno_location() | 0) >> 2] = 0 - i1;
  i1 = -1;
 }
 return i1 | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 15 & -16;
 return i2 | 0;
}

function ___cxa_guard_acquire(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 >> 0] | 0) == 1) i1 = 0; else {
  HEAP8[i1 >> 0] = 1;
  i1 = 1;
 }
 return i1 | 0;
}

function ___cxa_is_pointer_type(i1) {
 i1 = i1 | 0;
 if (!i1) i1 = 0; else i1 = (___dynamic_cast(i1, 1744, 1816, 0) | 0) != 0;
 return i1 & 1 | 0;
}

function __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return (i1 | 0) == (i2 | 0) | 0;
}

function _swapc(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = _llvm_bswap_i32(i1 | 0) | 0;
 return ((i2 | 0) == 0 ? i1 : i3) | 0;
}

function ___udivdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return ___udivmoddi4(i1, i2, i3, i4, 0) | 0;
}

function __ZN10__cxxabiv120__si_class_type_infoD0Ev(i1) {
 i1 = i1 | 0;
 __ZN10__cxxabiv116__shim_type_infoD2Ev(i1);
 __ZdlPv(i1);
 return;
}

function __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv(i1) {
 i1 = i1 | 0;
 ___assert_fail(17480, 17509, 1183, 17588);
}

function __ZN7guetzli21ButteraugliComparatorD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7guetzli21ButteraugliComparatorD2Ev(i1);
 __ZdlPv(i1);
 return;
}

function _out(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (!(HEAP32[i1 >> 2] & 32)) ___fwritex(i2, i3, i1) | 0;
 return;
}

function __ZN10__cxxabiv117__class_type_infoD0Ev(i1) {
 i1 = i1 | 0;
 __ZN10__cxxabiv116__shim_type_infoD2Ev(i1);
 __ZdlPv(i1);
 return;
}

function __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(i1) {
 i1 = i1 | 0;
 ___assert_fail(17378, 17401, 304, 17588);
}

function b10(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(10);
}

function _llvm_bswap_i32(i1) {
 i1 = i1 | 0;
 return (i1 & 255) << 24 | (i1 >> 8 & 255) << 16 | (i1 >> 16 & 255) << 8 | i1 >>> 24 | 0;
}

function __ZNSt3__211char_traitsIcE6assignERcRKc(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 >> 0] = HEAP8[i2 >> 0] | 0;
 return;
}

function dynCall_iii(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_iii[i3 & 1](i1 | 0, i2 | 0) | 0;
}

function __ZNK7guetzli21ButteraugliComparator17distmap_aggregateEv(i1) {
 i1 = i1 | 0;
 return Math_fround(HEAPF32[i1 + 76 >> 2]);
}

function dynCall_dii(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_dii[i3 & 1](i1 | 0, i2 | 0);
}

function __ZNK7guetzli21ButteraugliComparator15BlockErrorLimitEv(i1) {
 i1 = i1 | 0;
 return Math_fround(HEAPF32[i1 + 12 >> 2]);
}

function dynCall_iid(i3, i1, d2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 d2 = +d2;
 return FUNCTION_TABLE_iid[i3 & 1](i1 | 0, +d2) | 0;
}

function _wctomb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!i1) i1 = 0; else i1 = _wcrtomb(i1, i2, 0) | 0;
 return i1 | 0;
}

function dynCall_vii(i3, i1, i2) {
 i3 = i3 | 0;
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vii[i3 & 3](i1 | 0, i2 | 0);
}

function _strerror(i1) {
 i1 = i1 | 0;
 return ___strerror_l(i1, HEAP32[(___pthread_self_105() | 0) + 188 >> 2] | 0) | 0;
}

function __ZSt15get_new_handlerv() {
 var i1 = 0;
 i1 = HEAP32[11172] | 0;
 HEAP32[11172] = i1 + 0;
 return i1 | 0;
}

function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!__THREW__) {
  __THREW__ = i1;
  threwValue = i2;
 }
}

function b2(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(2);
}

function dynCall_fi(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return Math_fround(FUNCTION_TABLE_fi[i2 & 3](i1 | 0));
}

function b12(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(12);
 return 0.0;
}

function __ZSt13get_terminatev() {
 var i1 = 0;
 i1 = HEAP32[2189] | 0;
 HEAP32[2189] = i1 + 0;
 return i1 | 0;
}

function _fseek(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return ___fseeko(i1, i2, i3) | 0;
}

function ___clang_call_terminate(i1) {
 i1 = i1 | 0;
 ___cxa_begin_catch(i1 | 0) | 0;
 __ZSt9terminatev();
}

function dynCall_ii(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 return FUNCTION_TABLE_ii[i2 & 3](i1 | 0) | 0;
}

function establishStackSpace(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 STACKTOP = i1;
 STACK_MAX = i2;
}

function __ZNSt9bad_allocD0Ev(i1) {
 i1 = i1 | 0;
 __ZNSt9bad_allocD2Ev(i1);
 __ZdlPv(i1);
 return;
}

function b13(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(13);
}

function _round(d1) {
 d1 = +d1;
 return d1 >= 0.0 ? +Math_floor(d1 + .5) : +Math_ceil(d1 - .5);
}

function dynCall_vi(i2, i1) {
 i2 = i2 | 0;
 i1 = i1 | 0;
 FUNCTION_TABLE_vi[i2 & 15](i1 | 0);
}

function ___lctrans(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return ___lctrans_impl(i1, i2) | 0;
}

function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
}

function __ZNSt9bad_allocC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 8852;
 return;
}

function __ZNK10__cxxabiv116__shim_type_info5noop2Ev(i1) {
 i1 = i1 | 0;
 return;
}

function __ZNK10__cxxabiv116__shim_type_info5noop1Ev(i1) {
 i1 = i1 | 0;
 return;
}

function _frexpl(d1, i2) {
 d1 = +d1;
 i2 = i2 | 0;
 return +(+_frexp(d1, i2));
}

function ___errno_location() {
 return (___pthread_self_108() | 0) + 64 | 0;
}

function __ZN10__cxxabiv116__shim_type_infoD2Ev(i1) {
 i1 = i1 | 0;
 return;
}

function __ZN11butteraugli5ImageIfE6IgnoreEPv(i1) {
 i1 = i1 | 0;
 return;
}

function b11(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(11);
 return 0;
}

function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
 return 0.0;
}

function b7(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(7);
 return 0;
}

function __ZNKSt9bad_alloc4whatEv(i1) {
 i1 = i1 | 0;
 return 18076;
}

function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}

function b9(i1) {
 i1 = i1 | 0;
 abort(9);
 return Math_fround(0);
}

function _ftell(i1) {
 i1 = i1 | 0;
 return ___ftello(i1) | 0;
}

function ___pthread_self_607() {
 return _pthread_self() | 0;
}

function ___pthread_self_448() {
 return _pthread_self() | 0;
}

function ___pthread_self_108() {
 return _pthread_self() | 0;
}

function ___pthread_self_105() {
 return _pthread_self() | 0;
}

function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
}

function __Znaj(i1) {
 i1 = i1 | 0;
 return __Znwj(i1) | 0;
}

function __ZdaPv(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}

function ___cxa_guard_release(i1) {
 i1 = i1 | 0;
 return;
}

function __ZNSt9type_infoD2Ev(i1) {
 i1 = i1 | 0;
 return;
}

function __ZNSt9exceptionD2Ev(i1) {
 i1 = i1 | 0;
 return;
}

function __ZNSt9bad_allocD2Ev(i1) {
 i1 = i1 | 0;
 return;
}

function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}

function __ZdlPv(i1) {
 i1 = i1 | 0;
 _free(i1);
 return;
}

function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}

function ___ofl_lock() {
 ___lock(44172);
 return 44180;
}

function ___cxa_guard_abort(i1) {
 i1 = i1 | 0;
 return;
}

function _emscripten_get_global_libc() {
 return 44108;
}

function _dummy_738(i1) {
 i1 = i1 | 0;
 return i1 | 0;
}

function ___ofl_unlock() {
 ___unlock(44172);
 return;
}

function b6(i1) {
 i1 = i1 | 0;
 abort(6);
 return 0;
}

function ___unlockfile(i1) {
 i1 = i1 | 0;
 return;
}

function ___lockfile(i1) {
 i1 = i1 | 0;
 return 0;
}

function getTempRet0() {
 return tempRet0 | 0;
}

function stackSave() {
 return STACKTOP | 0;
}

function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}

function _pthread_self() {
 return 8256;
}

function b8() {
 abort(8);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_iiii = [b0,___stdio_write,___stdio_seek,___stdout_write,_sn_write,__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv,__ZN7guetzli16GuetzliStringOutEPvPKhj,___stdio_read];
var FUNCTION_TABLE_dii = [b1,__ZNK7guetzli21ButteraugliComparator15ScoreOutputSizeEi];
var FUNCTION_TABLE_viiiii = [b2,__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,b2];
var FUNCTION_TABLE_vi = [b3,__ZN7guetzli21ButteraugliComparatorD2Ev,__ZN7guetzli21ButteraugliComparatorD0Ev,__ZN10__cxxabiv116__shim_type_infoD2Ev,__ZN10__cxxabiv117__class_type_infoD0Ev,__ZNK10__cxxabiv116__shim_type_info5noop1Ev,__ZNK10__cxxabiv116__shim_type_info5noop2Ev,__ZN10__cxxabiv120__si_class_type_infoD0Ev,__ZNSt9bad_allocD2Ev,__ZNSt9bad_allocD0Ev,__ZN11butteraugli12CacheAligned4FreeEPv,__ZN11butteraugli5ImageIfE6IgnoreEPv,__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv,b3,b3,b3];
var FUNCTION_TABLE_viiidiiii = [b4,__ZN7guetzli21ButteraugliComparator34ComputeBlockErrorAdjustmentWeightsEiidiiRKNSt3__26vectorIfNS1_9allocatorIfEEEEPS5_];
var FUNCTION_TABLE_vii = [b5,__ZN7guetzli21ButteraugliComparator7CompareERKNS_11OutputImageE,__ZNK7guetzli21ButteraugliComparator7distmapEv,b5];
var FUNCTION_TABLE_ii = [b6,___stdio_close,__ZNKSt9bad_alloc4whatEv,b6];
var FUNCTION_TABLE_iid = [b7,__ZNK7guetzli21ButteraugliComparator10DistanceOKEd];
var FUNCTION_TABLE_v = [b8,__ZL25default_terminate_handlerv,__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev,b8];
var FUNCTION_TABLE_fi = [b9,__ZNK7guetzli21ButteraugliComparator17distmap_aggregateEv,__ZNK7guetzli21ButteraugliComparator15BlockErrorLimitEv,b9];
var FUNCTION_TABLE_viiiiii = [b10,__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,b10];
var FUNCTION_TABLE_iii = [b11,__ZN7guetzliL15SortHuffmanTreeERKNS_11HuffmanTreeES2_];
var FUNCTION_TABLE_diiii = [b12,__ZNK7guetzli21ButteraugliComparator12CompareBlockERKNS_11OutputImageEii];
var FUNCTION_TABLE_viiii = [b13,__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,b13];

  return { ___udivdi3: ___udivdi3, _bitshift64Lshr: _bitshift64Lshr, _bitshift64Shl: _bitshift64Shl, _fflush: _fflush, ___cxa_is_pointer_type: ___cxa_is_pointer_type, _memset: _memset, _sbrk: _sbrk, _memcpy: _memcpy, _llvm_bswap_i32: _llvm_bswap_i32, ___muldi3: ___muldi3, ___uremdi3: ___uremdi3, _i64Subtract: _i64Subtract, ___udivmoddi4: ___udivmoddi4, _i64Add: _i64Add, _emscripten_get_global_libc: _emscripten_get_global_libc, _GuetzliFromPNG: _GuetzliFromPNG, ___errno_location: ___errno_location, ___muldsi3: ___muldsi3, ___cxa_can_catch: ___cxa_can_catch, _free: _free, _round: _round, _memmove: _memmove, _malloc: _malloc, _GuetzliFromJPG: _GuetzliFromJPG, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setTempRet0: setTempRet0, getTempRet0: getTempRet0, setThrew: setThrew, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_iiii: dynCall_iiii, dynCall_dii: dynCall_dii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_viiidiiii: dynCall_viiidiiii, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iid: dynCall_iid, dynCall_v: dynCall_v, dynCall_fi: dynCall_fi, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_diiii: dynCall_diiii, dynCall_viiii: dynCall_viiii };
})
;