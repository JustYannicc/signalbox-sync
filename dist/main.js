"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/drive/shared/node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "src/drive/shared/node_modules/inherits/inherits_browser.js"(exports, module2) {
    if (typeof Object.create === "function") {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// src/drive/shared/node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "src/drive/shared/node_modules/base64-js/index.js"(exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    var i;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1) validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
        );
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
        );
      }
      return parts.join("");
    }
  }
});

// src/drive/shared/node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "src/drive/shared/node_modules/ieee754/index.js"(exports) {
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
  }
});

// src/drive/shared/node_modules/buffer/index.js
var require_buffer = __commonJS({
  "src/drive/shared/node_modules/buffer/index.js"(exports) {
    "use strict";
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer3;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer3.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this)) return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer3.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this)) return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function Buffer3(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer3.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer3.from(valueOf, encodingOrOffset, length);
      }
      const b = fromObject(value);
      if (b) return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    Buffer3.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer3, Uint8Array);
    function assertSize(size2) {
      if (typeof size2 !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size2 < 0) {
        throw new RangeError('The value "' + size2 + '" is invalid for option "size"');
      }
    }
    function alloc(size2, fill, encoding) {
      assertSize(size2);
      if (size2 <= 0) {
        return createBuffer(size2);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size2).fill(fill, encoding) : createBuffer(size2).fill(fill);
      }
      return createBuffer(size2);
    }
    Buffer3.alloc = function(size2, fill, encoding) {
      return alloc(size2, fill, encoding);
    };
    function allocUnsafe(size2) {
      assertSize(size2);
      return createBuffer(size2 < 0 ? 0 : checked(size2) | 0);
    }
    Buffer3.allocUnsafe = function(size2) {
      return allocUnsafe(size2);
    };
    Buffer3.allocUnsafeSlow = function(size2) {
      return allocUnsafe(size2);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer3.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length = byteLength(string, encoding) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      const length = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length);
      for (let i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer3.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer3.alloc(+length);
    }
    Buffer3.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer3.prototype;
    };
    Buffer3.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array)) a = Buffer3.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array)) b = Buffer3.from(b, b.offset, b.byteLength);
      if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      }
      if (a === b) return 0;
      let x = a.length;
      let y = b.length;
      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };
    Buffer3.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer3.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer3.alloc(0);
      }
      let i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      const buffer = Buffer3.allocUnsafe(length);
      let pos = 0;
      for (i = 0; i < list.length; ++i) {
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer3.isBuffer(buf)) buf = Buffer3.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(
              buffer,
              buf,
              pos
            );
          }
        } else if (!Buffer3.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer3.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
        );
      }
      const len = string.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0) return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding) encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.prototype._isBuffer = true;
    function swap(b, n, m) {
      const i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer3.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer3.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer3.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer3.prototype.toString = function toString() {
      const length = this.length;
      if (length === 0) return "";
      if (arguments.length === 0) return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
    Buffer3.prototype.equals = function equals(b) {
      if (!Buffer3.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
      if (this === b) return true;
      return Buffer3.compare(this, b) === 0;
    };
    Buffer3.prototype.inspect = function inspect() {
      let str = "";
      const max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max) str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
    }
    Buffer3.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer3.from(target, target.offset, target.byteLength);
      }
      if (!Buffer3.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
        );
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) return 0;
      let x = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0) return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
      }
      if (typeof val === "string") {
        val = Buffer3.from(val, encoding);
      }
      if (Buffer3.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      let i;
      if (dir) {
        let foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found) return i;
        }
      }
      return -1;
    }
    Buffer3.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer3.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer3.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i;
      for (i = 0; i < length; ++i) {
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer3.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0) encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      }
      const remaining = this.length - offset;
      if (length === void 0 || length > remaining) length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding) encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer3.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i = start;
      while (i < end) {
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;
      let out = "";
      for (let i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer3.prototype.slice = function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start) end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer3.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
      if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer3.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let i = byteLength2;
      let mul = 1;
      let val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128)) return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer3.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer3.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer3.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer3.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + // Overflow
      this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer3.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer3.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer3.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer3.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer3.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }
    Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
      if (value < 0) value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer3.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer3.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer3.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0) value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
      if (offset < 0) throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer3.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer3.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer3.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer3.isBuffer(target)) throw new TypeError("argument should be a Buffer");
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        );
      }
      return len;
    };
    Buffer3.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) val = 0;
      let i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    var errors = {};
    function E(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(name) {
        if (name) {
          return `${name} is outside of buffer bounds`;
        }
        return "Attempt to access memory outside buffer bounds";
      },
      RangeError
    );
    E(
      "ERR_INVALID_ARG_TYPE",
      function(name, actual) {
        return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
      },
      TypeError
    );
    E(
      "ERR_OUT_OF_RANGE",
      function(str, range, input) {
        let msg = `The value of "${str}" is out of range.`;
        let received = input;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
          received = addNumericalSeparator(String(input));
        } else if (typeof input === "bigint") {
          received = String(input);
          if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
            received = addNumericalSeparator(received);
          }
          received += "n";
        }
        msg += ` It must be ${range}. Received ${received}`;
        return msg;
      },
      RangeError
    );
    function addNumericalSeparator(val) {
      let res = "";
      let i = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
      }
      return `${val.slice(0, i)}${res}`;
    }
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    function checkIntBI(value, min, max, buf, offset, byteLength2) {
      if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength2 > 3) {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
          } else {
            range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
          }
        } else {
          range = `>= ${min}${n} and <= ${max}${n}`;
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    function boundsError(value, length, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE(
        type || "offset",
        `>= ${type ? 1 : 0} and <= ${length}`,
        value
      );
    }
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2) return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      let codePoint;
      const length = string.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      let c, hi, lo;
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      let i;
      for (i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
      }
      return i;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    var hexSliceLookupTable = (function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    })();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
  }
});

// src/drive/shared/node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "src/drive/shared/node_modules/safe-buffer/index.js"(exports, module2) {
    var buffer = require_buffer();
    var Buffer3 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer3.from && Buffer3.alloc && Buffer3.allocUnsafe && Buffer3.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer3(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer3.prototype);
    copyProps(Buffer3, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer3(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size2, fill, encoding) {
      if (typeof size2 !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer3(size2);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size2) {
      if (typeof size2 !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer3(size2);
    };
    SafeBuffer.allocUnsafeSlow = function(size2) {
      if (typeof size2 !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size2);
    };
  }
});

// src/drive/shared/node_modules/isarray/index.js
var require_isarray = __commonJS({
  "src/drive/shared/node_modules/isarray/index.js"(exports, module2) {
    var toString = {}.toString;
    module2.exports = Array.isArray || function(arr) {
      return toString.call(arr) == "[object Array]";
    };
  }
});

// src/drive/shared/node_modules/es-errors/type.js
var require_type = __commonJS({
  "src/drive/shared/node_modules/es-errors/type.js"(exports, module2) {
    "use strict";
    module2.exports = TypeError;
  }
});

// src/drive/shared/node_modules/es-object-atoms/index.js
var require_es_object_atoms = __commonJS({
  "src/drive/shared/node_modules/es-object-atoms/index.js"(exports, module2) {
    "use strict";
    module2.exports = Object;
  }
});

// src/drive/shared/node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "src/drive/shared/node_modules/es-errors/index.js"(exports, module2) {
    "use strict";
    module2.exports = Error;
  }
});

// src/drive/shared/node_modules/es-errors/eval.js
var require_eval = __commonJS({
  "src/drive/shared/node_modules/es-errors/eval.js"(exports, module2) {
    "use strict";
    module2.exports = EvalError;
  }
});

// src/drive/shared/node_modules/es-errors/range.js
var require_range = __commonJS({
  "src/drive/shared/node_modules/es-errors/range.js"(exports, module2) {
    "use strict";
    module2.exports = RangeError;
  }
});

// src/drive/shared/node_modules/es-errors/ref.js
var require_ref = __commonJS({
  "src/drive/shared/node_modules/es-errors/ref.js"(exports, module2) {
    "use strict";
    module2.exports = ReferenceError;
  }
});

// src/drive/shared/node_modules/es-errors/syntax.js
var require_syntax = __commonJS({
  "src/drive/shared/node_modules/es-errors/syntax.js"(exports, module2) {
    "use strict";
    module2.exports = SyntaxError;
  }
});

// src/drive/shared/node_modules/es-errors/uri.js
var require_uri = __commonJS({
  "src/drive/shared/node_modules/es-errors/uri.js"(exports, module2) {
    "use strict";
    module2.exports = URIError;
  }
});

// src/drive/shared/node_modules/math-intrinsics/abs.js
var require_abs = __commonJS({
  "src/drive/shared/node_modules/math-intrinsics/abs.js"(exports, module2) {
    "use strict";
    module2.exports = Math.abs;
  }
});

// src/drive/shared/node_modules/math-intrinsics/floor.js
var require_floor = __commonJS({
  "src/drive/shared/node_modules/math-intrinsics/floor.js"(exports, module2) {
    "use strict";
    module2.exports = Math.floor;
  }
});

// src/drive/shared/node_modules/math-intrinsics/max.js
var require_max = __commonJS({
  "src/drive/shared/node_modules/math-intrinsics/max.js"(exports, module2) {
    "use strict";
    module2.exports = Math.max;
  }
});

// src/drive/shared/node_modules/math-intrinsics/min.js
var require_min = __commonJS({
  "src/drive/shared/node_modules/math-intrinsics/min.js"(exports, module2) {
    "use strict";
    module2.exports = Math.min;
  }
});

// src/drive/shared/node_modules/math-intrinsics/pow.js
var require_pow = __commonJS({
  "src/drive/shared/node_modules/math-intrinsics/pow.js"(exports, module2) {
    "use strict";
    module2.exports = Math.pow;
  }
});

// src/drive/shared/node_modules/math-intrinsics/round.js
var require_round = __commonJS({
  "src/drive/shared/node_modules/math-intrinsics/round.js"(exports, module2) {
    "use strict";
    module2.exports = Math.round;
  }
});

// src/drive/shared/node_modules/math-intrinsics/isNaN.js
var require_isNaN = __commonJS({
  "src/drive/shared/node_modules/math-intrinsics/isNaN.js"(exports, module2) {
    "use strict";
    module2.exports = Number.isNaN || function isNaN2(a) {
      return a !== a;
    };
  }
});

// src/drive/shared/node_modules/math-intrinsics/sign.js
var require_sign = __commonJS({
  "src/drive/shared/node_modules/math-intrinsics/sign.js"(exports, module2) {
    "use strict";
    var $isNaN = require_isNaN();
    module2.exports = function sign(number2) {
      if ($isNaN(number2) || number2 === 0) {
        return number2;
      }
      return number2 < 0 ? -1 : 1;
    };
  }
});

// src/drive/shared/node_modules/gopd/gOPD.js
var require_gOPD = __commonJS({
  "src/drive/shared/node_modules/gopd/gOPD.js"(exports, module2) {
    "use strict";
    module2.exports = Object.getOwnPropertyDescriptor;
  }
});

// src/drive/shared/node_modules/gopd/index.js
var require_gopd = __commonJS({
  "src/drive/shared/node_modules/gopd/index.js"(exports, module2) {
    "use strict";
    var $gOPD = require_gOPD();
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module2.exports = $gOPD;
  }
});

// src/drive/shared/node_modules/es-define-property/index.js
var require_es_define_property = __commonJS({
  "src/drive/shared/node_modules/es-define-property/index.js"(exports, module2) {
    "use strict";
    var $defineProperty = Object.defineProperty || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    module2.exports = $defineProperty;
  }
});

// src/drive/shared/node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "src/drive/shared/node_modules/has-symbols/shams.js"(exports, module2) {
    "use strict";
    module2.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = /* @__PURE__ */ Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (var _ in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = (
          /** @type {PropertyDescriptor} */
          Object.getOwnPropertyDescriptor(obj, sym)
        );
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// src/drive/shared/node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "src/drive/shared/node_modules/has-symbols/index.js"(exports, module2) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module2.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof /* @__PURE__ */ Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// src/drive/shared/node_modules/get-proto/Reflect.getPrototypeOf.js
var require_Reflect_getPrototypeOf = __commonJS({
  "src/drive/shared/node_modules/get-proto/Reflect.getPrototypeOf.js"(exports, module2) {
    "use strict";
    module2.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  }
});

// src/drive/shared/node_modules/get-proto/Object.getPrototypeOf.js
var require_Object_getPrototypeOf = __commonJS({
  "src/drive/shared/node_modules/get-proto/Object.getPrototypeOf.js"(exports, module2) {
    "use strict";
    var $Object = require_es_object_atoms();
    module2.exports = $Object.getPrototypeOf || null;
  }
});

// src/drive/shared/node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "src/drive/shared/node_modules/function-bind/implementation.js"(exports, module2) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module2.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// src/drive/shared/node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "src/drive/shared/node_modules/function-bind/index.js"(exports, module2) {
    "use strict";
    var implementation = require_implementation();
    module2.exports = Function.prototype.bind || implementation;
  }
});

// src/drive/shared/node_modules/call-bind-apply-helpers/functionCall.js
var require_functionCall = __commonJS({
  "src/drive/shared/node_modules/call-bind-apply-helpers/functionCall.js"(exports, module2) {
    "use strict";
    module2.exports = Function.prototype.call;
  }
});

// src/drive/shared/node_modules/call-bind-apply-helpers/functionApply.js
var require_functionApply = __commonJS({
  "src/drive/shared/node_modules/call-bind-apply-helpers/functionApply.js"(exports, module2) {
    "use strict";
    module2.exports = Function.prototype.apply;
  }
});

// src/drive/shared/node_modules/call-bind-apply-helpers/reflectApply.js
var require_reflectApply = __commonJS({
  "src/drive/shared/node_modules/call-bind-apply-helpers/reflectApply.js"(exports, module2) {
    "use strict";
    module2.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  }
});

// src/drive/shared/node_modules/call-bind-apply-helpers/actualApply.js
var require_actualApply = __commonJS({
  "src/drive/shared/node_modules/call-bind-apply-helpers/actualApply.js"(exports, module2) {
    "use strict";
    var bind = require_function_bind();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var $reflectApply = require_reflectApply();
    module2.exports = $reflectApply || bind.call($call, $apply);
  }
});

// src/drive/shared/node_modules/call-bind-apply-helpers/index.js
var require_call_bind_apply_helpers = __commonJS({
  "src/drive/shared/node_modules/call-bind-apply-helpers/index.js"(exports, module2) {
    "use strict";
    var bind = require_function_bind();
    var $TypeError = require_type();
    var $call = require_functionCall();
    var $actualApply = require_actualApply();
    module2.exports = function callBindBasic(args) {
      if (args.length < 1 || typeof args[0] !== "function") {
        throw new $TypeError("a function is required");
      }
      return $actualApply(bind, $call, args);
    };
  }
});

// src/drive/shared/node_modules/dunder-proto/get.js
var require_get = __commonJS({
  "src/drive/shared/node_modules/dunder-proto/get.js"(exports, module2) {
    "use strict";
    var callBind = require_call_bind_apply_helpers();
    var gOPD = require_gopd();
    var hasProtoAccessor;
    try {
      hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
      [].__proto__ === Array.prototype;
    } catch (e) {
      if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
        throw e;
      }
    }
    var desc = !!hasProtoAccessor && gOPD && gOPD(
      Object.prototype,
      /** @type {keyof typeof Object.prototype} */
      "__proto__"
    );
    var $Object = Object;
    var $getPrototypeOf = $Object.getPrototypeOf;
    module2.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
      /** @type {import('./get')} */
      function getDunder(value) {
        return $getPrototypeOf(value == null ? value : $Object(value));
      }
    ) : false;
  }
});

// src/drive/shared/node_modules/get-proto/index.js
var require_get_proto = __commonJS({
  "src/drive/shared/node_modules/get-proto/index.js"(exports, module2) {
    "use strict";
    var reflectGetProto = require_Reflect_getPrototypeOf();
    var originalGetProto = require_Object_getPrototypeOf();
    var getDunderProto = require_get();
    module2.exports = reflectGetProto ? function getProto(O) {
      return reflectGetProto(O);
    } : originalGetProto ? function getProto(O) {
      if (!O || typeof O !== "object" && typeof O !== "function") {
        throw new TypeError("getProto: not an object");
      }
      return originalGetProto(O);
    } : getDunderProto ? function getProto(O) {
      return getDunderProto(O);
    } : null;
  }
});

// src/drive/shared/node_modules/hasown/index.js
var require_hasown = __commonJS({
  "src/drive/shared/node_modules/hasown/index.js"(exports, module2) {
    "use strict";
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module2.exports = bind.call(call, $hasOwn);
  }
});

// src/drive/shared/node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "src/drive/shared/node_modules/get-intrinsic/index.js"(exports, module2) {
    "use strict";
    var undefined2;
    var $Object = require_es_object_atoms();
    var $Error = require_es_errors();
    var $EvalError = require_eval();
    var $RangeError = require_range();
    var $ReferenceError = require_ref();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var $URIError = require_uri();
    var abs = require_abs();
    var floor = require_floor();
    var max = require_max();
    var min = require_min();
    var pow = require_pow();
    var round = require_round();
    var sign = require_sign();
    var $Function = Function;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = require_gopd();
    var $defineProperty = require_es_define_property();
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? (function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    })() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = require_get_proto();
    var $ObjectGPO = require_Object_getPrototypeOf();
    var $ReflectGPO = require_Reflect_getPrototypeOf();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": $EvalError,
      "%Float16Array%": typeof Float16Array === "undefined" ? undefined2 : Float16Array,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": $Object,
      "%Object.getOwnPropertyDescriptor%": $gOPD,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
      "%Function.prototype.call%": $call,
      "%Function.prototype.apply%": $apply,
      "%Object.defineProperty%": $defineProperty,
      "%Object.getPrototypeOf%": $ObjectGPO,
      "%Math.abs%": abs,
      "%Math.floor%": floor,
      "%Math.max%": max,
      "%Math.min%": min,
      "%Math.pow%": pow,
      "%Math.round%": round,
      "%Math.sign%": sign,
      "%Reflect.getPrototypeOf%": $ReflectGPO
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_hasown();
    var $concat = bind.call($call, Array.prototype.concat);
    var $spliceApply = bind.call($apply, Array.prototype.splice);
    var $replace = bind.call($call, String.prototype.replace);
    var $strSlice = bind.call($call, String.prototype.slice);
    var $exec = bind.call($call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number2, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number2 || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module2.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void undefined2;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// src/drive/shared/node_modules/call-bound/index.js
var require_call_bound = __commonJS({
  "src/drive/shared/node_modules/call-bound/index.js"(exports, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBindBasic = require_call_bind_apply_helpers();
    var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
    module2.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = (
        /** @type {(this: unknown, ...args: unknown[]) => unknown} */
        GetIntrinsic(name, !!allowMissing)
      );
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBindBasic(
          /** @type {const} */
          [intrinsic]
        );
      }
      return intrinsic;
    };
  }
});

// src/drive/shared/node_modules/is-callable/index.js
var require_is_callable = __commonJS({
  "src/drive/shared/node_modules/is-callable/index.js"(exports, module2) {
    "use strict";
    var fnToStr = Function.prototype.toString;
    var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
    var badArrayLike;
    var isCallableMarker;
    if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
      try {
        badArrayLike = Object.defineProperty({}, "length", {
          get: function() {
            throw isCallableMarker;
          }
        });
        isCallableMarker = {};
        reflectApply(function() {
          throw 42;
        }, null, badArrayLike);
      } catch (_) {
        if (_ !== isCallableMarker) {
          reflectApply = null;
        }
      }
    } else {
      reflectApply = null;
    }
    var constructorRegex = /^\s*class\b/;
    var isES6ClassFn = function isES6ClassFunction(value) {
      try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
      } catch (e) {
        return false;
      }
    };
    var tryFunctionObject = function tryFunctionToStr(value) {
      try {
        if (isES6ClassFn(value)) {
          return false;
        }
        fnToStr.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var objectClass = "[object Object]";
    var fnClass = "[object Function]";
    var genClass = "[object GeneratorFunction]";
    var ddaClass = "[object HTMLAllCollection]";
    var ddaClass2 = "[object HTML document.all class]";
    var ddaClass3 = "[object HTMLCollection]";
    var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
    var isIE68 = !(0 in [,]);
    var isDDA = function isDocumentDotAll() {
      return false;
    };
    if (typeof document === "object") {
      all = document.all;
      if (toStr.call(all) === toStr.call(document.all)) {
        isDDA = function isDocumentDotAll(value) {
          if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
            try {
              var str = toStr.call(value);
              return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
            } catch (e) {
            }
          }
          return false;
        };
      }
    }
    var all;
    module2.exports = reflectApply ? function isCallable(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      try {
        reflectApply(value, null, badArrayLike);
      } catch (e) {
        if (e !== isCallableMarker) {
          return false;
        }
      }
      return !isES6ClassFn(value) && tryFunctionObject(value);
    } : function isCallable(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      if (hasToStringTag) {
        return tryFunctionObject(value);
      }
      if (isES6ClassFn(value)) {
        return false;
      }
      var strClass = toStr.call(value);
      if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
        return false;
      }
      return tryFunctionObject(value);
    };
  }
});

// src/drive/shared/node_modules/for-each/index.js
var require_for_each = __commonJS({
  "src/drive/shared/node_modules/for-each/index.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var toStr = Object.prototype.toString;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var forEachArray = function forEachArray2(array, iterator, receiver) {
      for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
          if (receiver == null) {
            iterator(array[i], i, array);
          } else {
            iterator.call(receiver, array[i], i, array);
          }
        }
      }
    };
    var forEachString = function forEachString2(string, iterator, receiver) {
      for (var i = 0, len = string.length; i < len; i++) {
        if (receiver == null) {
          iterator(string.charAt(i), i, string);
        } else {
          iterator.call(receiver, string.charAt(i), i, string);
        }
      }
    };
    var forEachObject = function forEachObject2(object2, iterator, receiver) {
      for (var k in object2) {
        if (hasOwnProperty.call(object2, k)) {
          if (receiver == null) {
            iterator(object2[k], k, object2);
          } else {
            iterator.call(receiver, object2[k], k, object2);
          }
        }
      }
    };
    function isArray(x) {
      return toStr.call(x) === "[object Array]";
    }
    module2.exports = function forEach(list, iterator, thisArg) {
      if (!isCallable(iterator)) {
        throw new TypeError("iterator must be a function");
      }
      var receiver;
      if (arguments.length >= 3) {
        receiver = thisArg;
      }
      if (isArray(list)) {
        forEachArray(list, iterator, receiver);
      } else if (typeof list === "string") {
        forEachString(list, iterator, receiver);
      } else {
        forEachObject(list, iterator, receiver);
      }
    };
  }
});

// src/drive/shared/node_modules/possible-typed-array-names/index.js
var require_possible_typed_array_names = __commonJS({
  "src/drive/shared/node_modules/possible-typed-array-names/index.js"(exports, module2) {
    "use strict";
    module2.exports = [
      "Float16Array",
      "Float32Array",
      "Float64Array",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "BigInt64Array",
      "BigUint64Array"
    ];
  }
});

// src/drive/shared/node_modules/available-typed-arrays/index.js
var require_available_typed_arrays = __commonJS({
  "src/drive/shared/node_modules/available-typed-arrays/index.js"(exports, module2) {
    "use strict";
    var possibleNames = require_possible_typed_array_names();
    var g = typeof globalThis === "undefined" ? global : globalThis;
    module2.exports = function availableTypedArrays() {
      var out = [];
      for (var i = 0; i < possibleNames.length; i++) {
        if (typeof g[possibleNames[i]] === "function") {
          out[out.length] = possibleNames[i];
        }
      }
      return out;
    };
  }
});

// src/drive/shared/node_modules/define-data-property/index.js
var require_define_data_property = __commonJS({
  "src/drive/shared/node_modules/define-data-property/index.js"(exports, module2) {
    "use strict";
    var $defineProperty = require_es_define_property();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var gopd = require_gopd();
    module2.exports = function defineDataProperty(obj, property, value) {
      if (!obj || typeof obj !== "object" && typeof obj !== "function") {
        throw new $TypeError("`obj` must be an object or a function`");
      }
      if (typeof property !== "string" && typeof property !== "symbol") {
        throw new $TypeError("`property` must be a string or a symbol`");
      }
      if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
        throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
        throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
        throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
        throw new $TypeError("`loose`, if provided, must be a boolean");
      }
      var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
      var nonWritable = arguments.length > 4 ? arguments[4] : null;
      var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
      var loose = arguments.length > 6 ? arguments[6] : false;
      var desc = !!gopd && gopd(obj, property);
      if ($defineProperty) {
        $defineProperty(obj, property, {
          configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
          enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
          value,
          writable: nonWritable === null && desc ? desc.writable : !nonWritable
        });
      } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
        obj[property] = value;
      } else {
        throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
      }
    };
  }
});

// src/drive/shared/node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "src/drive/shared/node_modules/has-property-descriptors/index.js"(exports, module2) {
    "use strict";
    var $defineProperty = require_es_define_property();
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      return !!$defineProperty;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!$defineProperty) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    module2.exports = hasPropertyDescriptors;
  }
});

// src/drive/shared/node_modules/set-function-length/index.js
var require_set_function_length = __commonJS({
  "src/drive/shared/node_modules/set-function-length/index.js"(exports, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var define = require_define_data_property();
    var hasDescriptors = require_has_property_descriptors()();
    var gOPD = require_gopd();
    var $TypeError = require_type();
    var $floor = GetIntrinsic("%Math.floor%");
    module2.exports = function setFunctionLength(fn, length) {
      if (typeof fn !== "function") {
        throw new $TypeError("`fn` is not a function");
      }
      if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
        throw new $TypeError("`length` must be a positive 32-bit integer");
      }
      var loose = arguments.length > 2 && !!arguments[2];
      var functionLengthIsConfigurable = true;
      var functionLengthIsWritable = true;
      if ("length" in fn && gOPD) {
        var desc = gOPD(fn, "length");
        if (desc && !desc.configurable) {
          functionLengthIsConfigurable = false;
        }
        if (desc && !desc.writable) {
          functionLengthIsWritable = false;
        }
      }
      if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) {
          define(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length,
            true,
            true
          );
        } else {
          define(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length
          );
        }
      }
      return fn;
    };
  }
});

// src/drive/shared/node_modules/call-bind-apply-helpers/applyBind.js
var require_applyBind = __commonJS({
  "src/drive/shared/node_modules/call-bind-apply-helpers/applyBind.js"(exports, module2) {
    "use strict";
    var bind = require_function_bind();
    var $apply = require_functionApply();
    var actualApply = require_actualApply();
    module2.exports = function applyBind() {
      return actualApply(bind, $apply, arguments);
    };
  }
});

// src/drive/shared/node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "src/drive/shared/node_modules/call-bind/index.js"(exports, module2) {
    "use strict";
    var setFunctionLength = require_set_function_length();
    var $defineProperty = require_es_define_property();
    var callBindBasic = require_call_bind_apply_helpers();
    var applyBind = require_applyBind();
    module2.exports = function callBind(originalFunction) {
      var func = callBindBasic(arguments);
      var adjustedLength = 1 + originalFunction.length - (arguments.length - 1);
      return setFunctionLength(
        func,
        adjustedLength > 0 ? adjustedLength : 0,
        true
      );
    };
    if ($defineProperty) {
      $defineProperty(module2.exports, "apply", { value: applyBind });
    } else {
      module2.exports.apply = applyBind;
    }
  }
});

// src/drive/shared/node_modules/has-tostringtag/shams.js
var require_shams2 = __commonJS({
  "src/drive/shared/node_modules/has-tostringtag/shams.js"(exports, module2) {
    "use strict";
    var hasSymbols = require_shams();
    module2.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});

// src/drive/shared/node_modules/which-typed-array/index.js
var require_which_typed_array = __commonJS({
  "src/drive/shared/node_modules/which-typed-array/index.js"(exports, module2) {
    "use strict";
    var forEach = require_for_each();
    var availableTypedArrays = require_available_typed_arrays();
    var callBind = require_call_bind();
    var callBound = require_call_bound();
    var gOPD = require_gopd();
    var getProto = require_get_proto();
    var $toString = callBound("Object.prototype.toString");
    var hasToStringTag = require_shams2()();
    var g = typeof globalThis === "undefined" ? global : globalThis;
    var typedArrays = availableTypedArrays();
    var $slice = callBound("String.prototype.slice");
    var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i] === value) {
          return i;
        }
      }
      return -1;
    };
    var cache = { __proto__: null };
    if (hasToStringTag && gOPD && getProto) {
      forEach(typedArrays, function(typedArray) {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr && getProto) {
          var proto = getProto(arr);
          var descriptor = gOPD(proto, Symbol.toStringTag);
          if (!descriptor && proto) {
            var superProto = getProto(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
          }
          if (descriptor && descriptor.get) {
            var bound = callBind(descriptor.get);
            cache[
              /** @type {`$${TypedArrayName}`} */
              "$" + typedArray
            ] = bound;
          }
        }
      });
    } else {
      forEach(typedArrays, function(typedArray) {
        var arr = new g[typedArray]();
        var fn = arr.slice || arr.set;
        if (fn) {
          var bound = (
            /** @type {typeof BoundSlice | typeof BoundSet} */
            // @ts-expect-error TODO FIXME
            callBind(fn)
          );
          cache[
            /** @type {`$${TypedArrayName}`} */
            "$" + typedArray
          ] = bound;
        }
      });
    }
    function tryTypedArrays(value) {
      var found = false;
      forEach(
        /** @type {Record<`$${TypedArrayName}`, Getter>} */
        cache,
        /** @param {Getter} getter @param {`$${TypedArrayName}`} typedArray */
        function(getter, typedArray) {
          if (!found) {
            try {
              if ("$" + getter(value) === typedArray) {
                found = /** @type {TypedArrayName} */
                $slice(typedArray, 1);
              }
            } catch (e) {
            }
          }
        }
      );
      return found;
    }
    function trySlices(value) {
      var found = false;
      forEach(
        /** @type {Record<`$${TypedArrayName}`, Getter>} */
        cache,
        /** @param {Getter} getter @param {`$${TypedArrayName}`} name */
        function(getter, name) {
          if (!found) {
            try {
              getter(value);
              found = /** @type {TypedArrayName} */
              $slice(name, 1);
            } catch (e) {
            }
          }
        }
      );
      return found;
    }
    function isTATag(tag) {
      return $indexOf(typedArrays, tag) > -1;
    }
    function whichTypedArray(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      if (!hasToStringTag) {
        var tag = $slice($toString(value), 8, -1);
        if (isTATag(tag)) {
          return tag;
        }
        if (tag !== "Object") {
          return false;
        }
        return trySlices(value);
      }
      if (!gOPD) {
        return null;
      }
      return tryTypedArrays(value);
    }
    module2.exports = whichTypedArray;
  }
});

// src/drive/shared/node_modules/is-typed-array/index.js
var require_is_typed_array = __commonJS({
  "src/drive/shared/node_modules/is-typed-array/index.js"(exports, module2) {
    "use strict";
    var whichTypedArray = require_which_typed_array();
    module2.exports = function isTypedArray(value) {
      return !!whichTypedArray(value);
    };
  }
});

// src/drive/shared/node_modules/typed-array-buffer/index.js
var require_typed_array_buffer = __commonJS({
  "src/drive/shared/node_modules/typed-array-buffer/index.js"(exports, module2) {
    "use strict";
    var $TypeError = require_type();
    var callBound = require_call_bound();
    var $typedArrayBuffer = callBound("TypedArray.prototype.buffer", true);
    var isTypedArray = require_is_typed_array();
    module2.exports = $typedArrayBuffer || function typedArrayBuffer(x) {
      if (!isTypedArray(x)) {
        throw new $TypeError("Not a Typed Array");
      }
      return x.buffer;
    };
  }
});

// src/drive/shared/node_modules/to-buffer/index.js
var require_to_buffer = __commonJS({
  "src/drive/shared/node_modules/to-buffer/index.js"(exports, module2) {
    "use strict";
    var Buffer3 = require_safe_buffer().Buffer;
    var isArray = require_isarray();
    var typedArrayBuffer = require_typed_array_buffer();
    var isView = ArrayBuffer.isView || function isView2(obj) {
      try {
        typedArrayBuffer(obj);
        return true;
      } catch (e) {
        return false;
      }
    };
    var useUint8Array = typeof Uint8Array !== "undefined";
    var useArrayBuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
    var useFromArrayBuffer = useArrayBuffer && (Buffer3.prototype instanceof Uint8Array || Buffer3.TYPED_ARRAY_SUPPORT);
    module2.exports = function toBuffer(data, encoding) {
      if (Buffer3.isBuffer(data)) {
        if (data.constructor && !("isBuffer" in data)) {
          return Buffer3.from(data);
        }
        return data;
      }
      if (typeof data === "string") {
        return Buffer3.from(data, encoding);
      }
      if (useArrayBuffer && isView(data)) {
        if (data.byteLength === 0) {
          return Buffer3.alloc(0);
        }
        if (useFromArrayBuffer) {
          var res = Buffer3.from(data.buffer, data.byteOffset, data.byteLength);
          if (res.byteLength === data.byteLength) {
            return res;
          }
        }
        var uint8 = data instanceof Uint8Array ? data : new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
        var result = Buffer3.from(uint8);
        if (result.length === data.byteLength) {
          return result;
        }
      }
      if (useUint8Array && data instanceof Uint8Array) {
        return Buffer3.from(data);
      }
      var isArr = isArray(data);
      if (isArr) {
        for (var i = 0; i < data.length; i += 1) {
          var x = data[i];
          if (typeof x !== "number" || x < 0 || x > 255 || ~~x !== x) {
            throw new RangeError("Array items must be numbers in the range 0-255.");
          }
        }
      }
      if (isArr || Buffer3.isBuffer(data) && data.constructor && typeof data.constructor.isBuffer === "function" && data.constructor.isBuffer(data)) {
        return Buffer3.from(data);
      }
      throw new TypeError('The "data" argument must be a string, an Array, a Buffer, a Uint8Array, or a DataView.');
    };
  }
});

// src/drive/shared/node_modules/sha.js/hash.js
var require_hash = __commonJS({
  "src/drive/shared/node_modules/sha.js/hash.js"(exports, module2) {
    "use strict";
    var Buffer3 = require_safe_buffer().Buffer;
    var toBuffer = require_to_buffer();
    function Hash(blockSize, finalSize) {
      this._block = Buffer3.alloc(blockSize);
      this._finalSize = finalSize;
      this._blockSize = blockSize;
      this._len = 0;
    }
    Hash.prototype.update = function(data, enc) {
      data = toBuffer(data, enc || "utf8");
      var block = this._block;
      var blockSize = this._blockSize;
      var length = data.length;
      var accum = this._len;
      for (var offset = 0; offset < length; ) {
        var assigned = accum % blockSize;
        var remainder = Math.min(length - offset, blockSize - assigned);
        for (var i = 0; i < remainder; i++) {
          block[assigned + i] = data[offset + i];
        }
        accum += remainder;
        offset += remainder;
        if (accum % blockSize === 0) {
          this._update(block);
        }
      }
      this._len += length;
      return this;
    };
    Hash.prototype.digest = function(enc) {
      var rem = this._len % this._blockSize;
      this._block[rem] = 128;
      this._block.fill(0, rem + 1);
      if (rem >= this._finalSize) {
        this._update(this._block);
        this._block.fill(0);
      }
      var bits = this._len * 8;
      if (bits <= 4294967295) {
        this._block.writeUInt32BE(bits, this._blockSize - 4);
      } else {
        var lowBits = (bits & 4294967295) >>> 0;
        var highBits = (bits - lowBits) / 4294967296;
        this._block.writeUInt32BE(highBits, this._blockSize - 8);
        this._block.writeUInt32BE(lowBits, this._blockSize - 4);
      }
      this._update(this._block);
      var hash2 = this._hash();
      return enc ? hash2.toString(enc) : hash2;
    };
    Hash.prototype._update = function() {
      throw new Error("_update must be implemented by subclass");
    };
    module2.exports = Hash;
  }
});

// src/drive/shared/node_modules/sha.js/sha.js
var require_sha = __commonJS({
  "src/drive/shared/node_modules/sha.js/sha.js"(exports, module2) {
    "use strict";
    var inherits = require_inherits_browser();
    var Hash = require_hash();
    var Buffer3 = require_safe_buffer().Buffer;
    var K = [
      1518500249,
      1859775393,
      2400959708 | 0,
      3395469782 | 0
    ];
    var W = new Array(80);
    function Sha() {
      this.init();
      this._w = W;
      Hash.call(this, 64, 56);
    }
    inherits(Sha, Hash);
    Sha.prototype.init = function() {
      this._a = 1732584193;
      this._b = 4023233417;
      this._c = 2562383102;
      this._d = 271733878;
      this._e = 3285377520;
      return this;
    };
    function rotl5(num) {
      return num << 5 | num >>> 27;
    }
    function rotl30(num) {
      return num << 30 | num >>> 2;
    }
    function ft(s, b, c, d) {
      if (s === 0) {
        return b & c | ~b & d;
      }
      if (s === 2) {
        return b & c | b & d | c & d;
      }
      return b ^ c ^ d;
    }
    Sha.prototype._update = function(M) {
      var w = this._w;
      var a = this._a | 0;
      var b = this._b | 0;
      var c = this._c | 0;
      var d = this._d | 0;
      var e = this._e | 0;
      for (var i = 0; i < 16; ++i) {
        w[i] = M.readInt32BE(i * 4);
      }
      for (; i < 80; ++i) {
        w[i] = w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16];
      }
      for (var j = 0; j < 80; ++j) {
        var s = ~~(j / 20);
        var t = rotl5(a) + ft(s, b, c, d) + e + w[j] + K[s] | 0;
        e = d;
        d = c;
        c = rotl30(b);
        b = a;
        a = t;
      }
      this._a = a + this._a | 0;
      this._b = b + this._b | 0;
      this._c = c + this._c | 0;
      this._d = d + this._d | 0;
      this._e = e + this._e | 0;
    };
    Sha.prototype._hash = function() {
      var H = Buffer3.allocUnsafe(20);
      H.writeInt32BE(this._a | 0, 0);
      H.writeInt32BE(this._b | 0, 4);
      H.writeInt32BE(this._c | 0, 8);
      H.writeInt32BE(this._d | 0, 12);
      H.writeInt32BE(this._e | 0, 16);
      return H;
    };
    module2.exports = Sha;
  }
});

// src/drive/shared/node_modules/sha.js/sha1.js
var require_sha1 = __commonJS({
  "src/drive/shared/node_modules/sha.js/sha1.js"(exports, module2) {
    "use strict";
    var inherits = require_inherits_browser();
    var Hash = require_hash();
    var Buffer3 = require_safe_buffer().Buffer;
    var K = [
      1518500249,
      1859775393,
      2400959708 | 0,
      3395469782 | 0
    ];
    var W = new Array(80);
    function Sha1() {
      this.init();
      this._w = W;
      Hash.call(this, 64, 56);
    }
    inherits(Sha1, Hash);
    Sha1.prototype.init = function() {
      this._a = 1732584193;
      this._b = 4023233417;
      this._c = 2562383102;
      this._d = 271733878;
      this._e = 3285377520;
      return this;
    };
    function rotl1(num) {
      return num << 1 | num >>> 31;
    }
    function rotl5(num) {
      return num << 5 | num >>> 27;
    }
    function rotl30(num) {
      return num << 30 | num >>> 2;
    }
    function ft(s, b, c, d) {
      if (s === 0) {
        return b & c | ~b & d;
      }
      if (s === 2) {
        return b & c | b & d | c & d;
      }
      return b ^ c ^ d;
    }
    Sha1.prototype._update = function(M) {
      var w = this._w;
      var a = this._a | 0;
      var b = this._b | 0;
      var c = this._c | 0;
      var d = this._d | 0;
      var e = this._e | 0;
      for (var i = 0; i < 16; ++i) {
        w[i] = M.readInt32BE(i * 4);
      }
      for (; i < 80; ++i) {
        w[i] = rotl1(w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16]);
      }
      for (var j = 0; j < 80; ++j) {
        var s = ~~(j / 20);
        var t = rotl5(a) + ft(s, b, c, d) + e + w[j] + K[s] | 0;
        e = d;
        d = c;
        c = rotl30(b);
        b = a;
        a = t;
      }
      this._a = a + this._a | 0;
      this._b = b + this._b | 0;
      this._c = c + this._c | 0;
      this._d = d + this._d | 0;
      this._e = e + this._e | 0;
    };
    Sha1.prototype._hash = function() {
      var H = Buffer3.allocUnsafe(20);
      H.writeInt32BE(this._a | 0, 0);
      H.writeInt32BE(this._b | 0, 4);
      H.writeInt32BE(this._c | 0, 8);
      H.writeInt32BE(this._d | 0, 12);
      H.writeInt32BE(this._e | 0, 16);
      return H;
    };
    module2.exports = Sha1;
  }
});

// src/drive/shared/node_modules/sha.js/sha256.js
var require_sha256 = __commonJS({
  "src/drive/shared/node_modules/sha.js/sha256.js"(exports, module2) {
    "use strict";
    var inherits = require_inherits_browser();
    var Hash = require_hash();
    var Buffer3 = require_safe_buffer().Buffer;
    var K = [
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ];
    var W = new Array(64);
    function Sha256() {
      this.init();
      this._w = W;
      Hash.call(this, 64, 56);
    }
    inherits(Sha256, Hash);
    Sha256.prototype.init = function() {
      this._a = 1779033703;
      this._b = 3144134277;
      this._c = 1013904242;
      this._d = 2773480762;
      this._e = 1359893119;
      this._f = 2600822924;
      this._g = 528734635;
      this._h = 1541459225;
      return this;
    };
    function ch(x, y, z) {
      return z ^ x & (y ^ z);
    }
    function maj(x, y, z) {
      return x & y | z & (x | y);
    }
    function sigma0(x) {
      return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10);
    }
    function sigma1(x) {
      return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7);
    }
    function gamma0(x) {
      return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ x >>> 3;
    }
    function gamma1(x) {
      return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ x >>> 10;
    }
    Sha256.prototype._update = function(M) {
      var w = this._w;
      var a = this._a | 0;
      var b = this._b | 0;
      var c = this._c | 0;
      var d = this._d | 0;
      var e = this._e | 0;
      var f = this._f | 0;
      var g = this._g | 0;
      var h = this._h | 0;
      for (var i = 0; i < 16; ++i) {
        w[i] = M.readInt32BE(i * 4);
      }
      for (; i < 64; ++i) {
        w[i] = gamma1(w[i - 2]) + w[i - 7] + gamma0(w[i - 15]) + w[i - 16] | 0;
      }
      for (var j = 0; j < 64; ++j) {
        var T1 = h + sigma1(e) + ch(e, f, g) + K[j] + w[j] | 0;
        var T2 = sigma0(a) + maj(a, b, c) | 0;
        h = g;
        g = f;
        f = e;
        e = d + T1 | 0;
        d = c;
        c = b;
        b = a;
        a = T1 + T2 | 0;
      }
      this._a = a + this._a | 0;
      this._b = b + this._b | 0;
      this._c = c + this._c | 0;
      this._d = d + this._d | 0;
      this._e = e + this._e | 0;
      this._f = f + this._f | 0;
      this._g = g + this._g | 0;
      this._h = h + this._h | 0;
    };
    Sha256.prototype._hash = function() {
      var H = Buffer3.allocUnsafe(32);
      H.writeInt32BE(this._a, 0);
      H.writeInt32BE(this._b, 4);
      H.writeInt32BE(this._c, 8);
      H.writeInt32BE(this._d, 12);
      H.writeInt32BE(this._e, 16);
      H.writeInt32BE(this._f, 20);
      H.writeInt32BE(this._g, 24);
      H.writeInt32BE(this._h, 28);
      return H;
    };
    module2.exports = Sha256;
  }
});

// src/drive/shared/node_modules/sha.js/sha224.js
var require_sha224 = __commonJS({
  "src/drive/shared/node_modules/sha.js/sha224.js"(exports, module2) {
    "use strict";
    var inherits = require_inherits_browser();
    var Sha256 = require_sha256();
    var Hash = require_hash();
    var Buffer3 = require_safe_buffer().Buffer;
    var W = new Array(64);
    function Sha224() {
      this.init();
      this._w = W;
      Hash.call(this, 64, 56);
    }
    inherits(Sha224, Sha256);
    Sha224.prototype.init = function() {
      this._a = 3238371032;
      this._b = 914150663;
      this._c = 812702999;
      this._d = 4144912697;
      this._e = 4290775857;
      this._f = 1750603025;
      this._g = 1694076839;
      this._h = 3204075428;
      return this;
    };
    Sha224.prototype._hash = function() {
      var H = Buffer3.allocUnsafe(28);
      H.writeInt32BE(this._a, 0);
      H.writeInt32BE(this._b, 4);
      H.writeInt32BE(this._c, 8);
      H.writeInt32BE(this._d, 12);
      H.writeInt32BE(this._e, 16);
      H.writeInt32BE(this._f, 20);
      H.writeInt32BE(this._g, 24);
      return H;
    };
    module2.exports = Sha224;
  }
});

// src/drive/shared/node_modules/sha.js/sha512.js
var require_sha512 = __commonJS({
  "src/drive/shared/node_modules/sha.js/sha512.js"(exports, module2) {
    "use strict";
    var inherits = require_inherits_browser();
    var Hash = require_hash();
    var Buffer3 = require_safe_buffer().Buffer;
    var K = [
      1116352408,
      3609767458,
      1899447441,
      602891725,
      3049323471,
      3964484399,
      3921009573,
      2173295548,
      961987163,
      4081628472,
      1508970993,
      3053834265,
      2453635748,
      2937671579,
      2870763221,
      3664609560,
      3624381080,
      2734883394,
      310598401,
      1164996542,
      607225278,
      1323610764,
      1426881987,
      3590304994,
      1925078388,
      4068182383,
      2162078206,
      991336113,
      2614888103,
      633803317,
      3248222580,
      3479774868,
      3835390401,
      2666613458,
      4022224774,
      944711139,
      264347078,
      2341262773,
      604807628,
      2007800933,
      770255983,
      1495990901,
      1249150122,
      1856431235,
      1555081692,
      3175218132,
      1996064986,
      2198950837,
      2554220882,
      3999719339,
      2821834349,
      766784016,
      2952996808,
      2566594879,
      3210313671,
      3203337956,
      3336571891,
      1034457026,
      3584528711,
      2466948901,
      113926993,
      3758326383,
      338241895,
      168717936,
      666307205,
      1188179964,
      773529912,
      1546045734,
      1294757372,
      1522805485,
      1396182291,
      2643833823,
      1695183700,
      2343527390,
      1986661051,
      1014477480,
      2177026350,
      1206759142,
      2456956037,
      344077627,
      2730485921,
      1290863460,
      2820302411,
      3158454273,
      3259730800,
      3505952657,
      3345764771,
      106217008,
      3516065817,
      3606008344,
      3600352804,
      1432725776,
      4094571909,
      1467031594,
      275423344,
      851169720,
      430227734,
      3100823752,
      506948616,
      1363258195,
      659060556,
      3750685593,
      883997877,
      3785050280,
      958139571,
      3318307427,
      1322822218,
      3812723403,
      1537002063,
      2003034995,
      1747873779,
      3602036899,
      1955562222,
      1575990012,
      2024104815,
      1125592928,
      2227730452,
      2716904306,
      2361852424,
      442776044,
      2428436474,
      593698344,
      2756734187,
      3733110249,
      3204031479,
      2999351573,
      3329325298,
      3815920427,
      3391569614,
      3928383900,
      3515267271,
      566280711,
      3940187606,
      3454069534,
      4118630271,
      4000239992,
      116418474,
      1914138554,
      174292421,
      2731055270,
      289380356,
      3203993006,
      460393269,
      320620315,
      685471733,
      587496836,
      852142971,
      1086792851,
      1017036298,
      365543100,
      1126000580,
      2618297676,
      1288033470,
      3409855158,
      1501505948,
      4234509866,
      1607167915,
      987167468,
      1816402316,
      1246189591
    ];
    var W = new Array(160);
    function Sha512() {
      this.init();
      this._w = W;
      Hash.call(this, 128, 112);
    }
    inherits(Sha512, Hash);
    Sha512.prototype.init = function() {
      this._ah = 1779033703;
      this._bh = 3144134277;
      this._ch = 1013904242;
      this._dh = 2773480762;
      this._eh = 1359893119;
      this._fh = 2600822924;
      this._gh = 528734635;
      this._hh = 1541459225;
      this._al = 4089235720;
      this._bl = 2227873595;
      this._cl = 4271175723;
      this._dl = 1595750129;
      this._el = 2917565137;
      this._fl = 725511199;
      this._gl = 4215389547;
      this._hl = 327033209;
      return this;
    };
    function Ch(x, y, z) {
      return z ^ x & (y ^ z);
    }
    function maj(x, y, z) {
      return x & y | z & (x | y);
    }
    function sigma0(x, xl) {
      return (x >>> 28 | xl << 4) ^ (xl >>> 2 | x << 30) ^ (xl >>> 7 | x << 25);
    }
    function sigma1(x, xl) {
      return (x >>> 14 | xl << 18) ^ (x >>> 18 | xl << 14) ^ (xl >>> 9 | x << 23);
    }
    function Gamma0(x, xl) {
      return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ x >>> 7;
    }
    function Gamma0l(x, xl) {
      return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7 | xl << 25);
    }
    function Gamma1(x, xl) {
      return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ x >>> 6;
    }
    function Gamma1l(x, xl) {
      return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6 | xl << 26);
    }
    function getCarry(a, b) {
      return a >>> 0 < b >>> 0 ? 1 : 0;
    }
    Sha512.prototype._update = function(M) {
      var w = this._w;
      var ah = this._ah | 0;
      var bh = this._bh | 0;
      var ch = this._ch | 0;
      var dh = this._dh | 0;
      var eh = this._eh | 0;
      var fh = this._fh | 0;
      var gh = this._gh | 0;
      var hh = this._hh | 0;
      var al = this._al | 0;
      var bl = this._bl | 0;
      var cl = this._cl | 0;
      var dl = this._dl | 0;
      var el = this._el | 0;
      var fl = this._fl | 0;
      var gl = this._gl | 0;
      var hl = this._hl | 0;
      for (var i = 0; i < 32; i += 2) {
        w[i] = M.readInt32BE(i * 4);
        w[i + 1] = M.readInt32BE(i * 4 + 4);
      }
      for (; i < 160; i += 2) {
        var xh = w[i - 15 * 2];
        var xl = w[i - 15 * 2 + 1];
        var gamma0 = Gamma0(xh, xl);
        var gamma0l = Gamma0l(xl, xh);
        xh = w[i - 2 * 2];
        xl = w[i - 2 * 2 + 1];
        var gamma1 = Gamma1(xh, xl);
        var gamma1l = Gamma1l(xl, xh);
        var Wi7h = w[i - 7 * 2];
        var Wi7l = w[i - 7 * 2 + 1];
        var Wi16h = w[i - 16 * 2];
        var Wi16l = w[i - 16 * 2 + 1];
        var Wil = gamma0l + Wi7l | 0;
        var Wih = gamma0 + Wi7h + getCarry(Wil, gamma0l) | 0;
        Wil = Wil + gamma1l | 0;
        Wih = Wih + gamma1 + getCarry(Wil, gamma1l) | 0;
        Wil = Wil + Wi16l | 0;
        Wih = Wih + Wi16h + getCarry(Wil, Wi16l) | 0;
        w[i] = Wih;
        w[i + 1] = Wil;
      }
      for (var j = 0; j < 160; j += 2) {
        Wih = w[j];
        Wil = w[j + 1];
        var majh = maj(ah, bh, ch);
        var majl = maj(al, bl, cl);
        var sigma0h = sigma0(ah, al);
        var sigma0l = sigma0(al, ah);
        var sigma1h = sigma1(eh, el);
        var sigma1l = sigma1(el, eh);
        var Kih = K[j];
        var Kil = K[j + 1];
        var chh = Ch(eh, fh, gh);
        var chl = Ch(el, fl, gl);
        var t1l = hl + sigma1l | 0;
        var t1h = hh + sigma1h + getCarry(t1l, hl) | 0;
        t1l = t1l + chl | 0;
        t1h = t1h + chh + getCarry(t1l, chl) | 0;
        t1l = t1l + Kil | 0;
        t1h = t1h + Kih + getCarry(t1l, Kil) | 0;
        t1l = t1l + Wil | 0;
        t1h = t1h + Wih + getCarry(t1l, Wil) | 0;
        var t2l = sigma0l + majl | 0;
        var t2h = sigma0h + majh + getCarry(t2l, sigma0l) | 0;
        hh = gh;
        hl = gl;
        gh = fh;
        gl = fl;
        fh = eh;
        fl = el;
        el = dl + t1l | 0;
        eh = dh + t1h + getCarry(el, dl) | 0;
        dh = ch;
        dl = cl;
        ch = bh;
        cl = bl;
        bh = ah;
        bl = al;
        al = t1l + t2l | 0;
        ah = t1h + t2h + getCarry(al, t1l) | 0;
      }
      this._al = this._al + al | 0;
      this._bl = this._bl + bl | 0;
      this._cl = this._cl + cl | 0;
      this._dl = this._dl + dl | 0;
      this._el = this._el + el | 0;
      this._fl = this._fl + fl | 0;
      this._gl = this._gl + gl | 0;
      this._hl = this._hl + hl | 0;
      this._ah = this._ah + ah + getCarry(this._al, al) | 0;
      this._bh = this._bh + bh + getCarry(this._bl, bl) | 0;
      this._ch = this._ch + ch + getCarry(this._cl, cl) | 0;
      this._dh = this._dh + dh + getCarry(this._dl, dl) | 0;
      this._eh = this._eh + eh + getCarry(this._el, el) | 0;
      this._fh = this._fh + fh + getCarry(this._fl, fl) | 0;
      this._gh = this._gh + gh + getCarry(this._gl, gl) | 0;
      this._hh = this._hh + hh + getCarry(this._hl, hl) | 0;
    };
    Sha512.prototype._hash = function() {
      var H = Buffer3.allocUnsafe(64);
      function writeInt64BE(h, l, offset) {
        H.writeInt32BE(h, offset);
        H.writeInt32BE(l, offset + 4);
      }
      writeInt64BE(this._ah, this._al, 0);
      writeInt64BE(this._bh, this._bl, 8);
      writeInt64BE(this._ch, this._cl, 16);
      writeInt64BE(this._dh, this._dl, 24);
      writeInt64BE(this._eh, this._el, 32);
      writeInt64BE(this._fh, this._fl, 40);
      writeInt64BE(this._gh, this._gl, 48);
      writeInt64BE(this._hh, this._hl, 56);
      return H;
    };
    module2.exports = Sha512;
  }
});

// src/drive/shared/node_modules/sha.js/sha384.js
var require_sha384 = __commonJS({
  "src/drive/shared/node_modules/sha.js/sha384.js"(exports, module2) {
    "use strict";
    var inherits = require_inherits_browser();
    var SHA512 = require_sha512();
    var Hash = require_hash();
    var Buffer3 = require_safe_buffer().Buffer;
    var W = new Array(160);
    function Sha384() {
      this.init();
      this._w = W;
      Hash.call(this, 128, 112);
    }
    inherits(Sha384, SHA512);
    Sha384.prototype.init = function() {
      this._ah = 3418070365;
      this._bh = 1654270250;
      this._ch = 2438529370;
      this._dh = 355462360;
      this._eh = 1731405415;
      this._fh = 2394180231;
      this._gh = 3675008525;
      this._hh = 1203062813;
      this._al = 3238371032;
      this._bl = 914150663;
      this._cl = 812702999;
      this._dl = 4144912697;
      this._el = 4290775857;
      this._fl = 1750603025;
      this._gl = 1694076839;
      this._hl = 3204075428;
      return this;
    };
    Sha384.prototype._hash = function() {
      var H = Buffer3.allocUnsafe(48);
      function writeInt64BE(h, l, offset) {
        H.writeInt32BE(h, offset);
        H.writeInt32BE(l, offset + 4);
      }
      writeInt64BE(this._ah, this._al, 0);
      writeInt64BE(this._bh, this._bl, 8);
      writeInt64BE(this._ch, this._cl, 16);
      writeInt64BE(this._dh, this._dl, 24);
      writeInt64BE(this._eh, this._el, 32);
      writeInt64BE(this._fh, this._fl, 40);
      return H;
    };
    module2.exports = Sha384;
  }
});

// src/drive/shared/node_modules/sha.js/index.js
var require_sha2 = __commonJS({
  "src/drive/shared/node_modules/sha.js/index.js"(exports, module2) {
    "use strict";
    module2.exports = function SHA(algorithm) {
      var alg = algorithm.toLowerCase();
      var Algorithm = module2.exports[alg];
      if (!Algorithm) {
        throw new Error(alg + " is not supported (we accept pull requests)");
      }
      return new Algorithm();
    };
    module2.exports.sha = require_sha();
    module2.exports.sha1 = require_sha1();
    module2.exports.sha224 = require_sha224();
    module2.exports.sha256 = require_sha256();
    module2.exports.sha384 = require_sha384();
    module2.exports.sha512 = require_sha512();
  }
});

// clients/obsidian/plugin/desktop-reader.cjs
var require_desktop_reader = __commonJS({
  "clients/obsidian/plugin/desktop-reader.cjs"(exports) {
    "use strict";
    var fs = require("node:fs/promises");
    var path3 = require("node:path");
    exports.createReader = (base) => {
      const root = path3.resolve(base);
      const target = (relative) => {
        if (typeof relative !== "string" || !relative || relative.includes("\\") || relative.includes("\0") || relative.split("/").some((part) => !part || part === "." || part === ".."))
          throw new Error("Invalid vault-relative attachment path");
        const absolute = path3.resolve(root, relative);
        if (!absolute.startsWith(root + path3.sep)) throw new Error("Attachment escaped its vault");
        return absolute;
      };
      const describe = (stat) => ({
        bytes: Number(stat.size),
        stamp: `${stat.ino}:${stat.mtimeNs}:${stat.size}`
      });
      const snapshot = async (relative) => {
        try {
          const stat = await fs.stat(target(relative), { bigint: true });
          return stat.isFile() ? describe(stat) : null;
        } catch (error) {
          if (error && error.code === "ENOENT") return null;
          throw error;
        }
      };
      return {
        snapshot,
        async read(relative, expected, offset, length) {
          if (!Number.isSafeInteger(offset) || offset < 0 || !Number.isSafeInteger(length) || length < 1 || length > 1048576 || offset + length > expected.bytes)
            throw new Error("Attachment read exceeds its range bound");
          const handle = await fs.open(target(relative), "r");
          try {
            const before = describe(await handle.stat({ bigint: true }));
            if (before.stamp !== expected.stamp || before.bytes !== expected.bytes)
              throw new Error("Local attachment changed");
            const bytes = Buffer.alloc(length), result = await handle.read(bytes, 0, length, offset), after = describe(await handle.stat({ bigint: true }));
            if (result.bytesRead !== length || after.stamp !== expected.stamp)
              throw new Error("Local attachment changed during its read");
            return Uint8Array.from(bytes);
          } finally {
            await handle.close();
          }
        }
      };
    };
  }
});

// clients/obsidian/plugin/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => BasaltSyncPlugin
});
module.exports = __toCommonJS(main_exports);

// src/drive/shared/.generated/strata/bytes.js
var import_sha = __toESM(require_sha2(), 1);
var import_buffer = __toESM(require_buffer(), 1);

// src/drive/shared/.generated/strata/errors.js
var DriveError = class extends Error {
  code;
  constructor(code, message2) {
    super(message2);
    this.code = code;
    this.name = "DriveError";
  }
};

// src/drive/shared/.generated/strata/bytes.js
var version = "version https://git-lfs.github.com/spec/v1\n";
function attachment(input) {
  if (!/^[0-9a-f]{64}$/.test(input.oid) || !Number.isSafeInteger(input.bytes) || input.bytes < 0)
    throw new DriveError("invalid", "Invalid attachment hash or byte count");
  return input;
}
function incrementalSha256(snapshot) {
  const hash2 = (0, import_sha.default)("sha256");
  const fields = ["_a", "_b", "_c", "_d", "_e", "_f", "_g", "_h"];
  if (snapshot !== void 0) {
    if (!snapshot || typeof snapshot !== "object" || !("length" in snapshot) || typeof snapshot.length !== "number" || !Number.isSafeInteger(snapshot.length) || snapshot.length < 0 || snapshot.length % 64 !== 0 || !("words" in snapshot) || !Array.isArray(snapshot.words) || snapshot.words.length !== 8)
      throw new DriveError("integrity", "Invalid SHA-256 checkpoint");
    hash2._len = snapshot.length;
    for (const [index, field2] of fields.entries()) {
      const word = snapshot.words[index];
      if (typeof word !== "number" || !Number.isInteger(word) || word < -2147483648 || word > 4294967295)
        throw new DriveError("integrity", "Invalid SHA-256 checkpoint word");
      hash2[field2] = word;
    }
  }
  return {
    update(bytes) {
      hash2.update(import_buffer.Buffer.from(bytes));
    },
    // Pinned sha.js 2.4.12 state is persisted only on complete SHA-256 block boundaries.
    // This avoids rehashing earlier attachment parts after a Worker request ends.
    checkpoint() {
      if (hash2._len % 64 !== 0)
        throw new DriveError("invalid", "SHA-256 checkpoint needs a complete block");
      return { length: hash2._len, words: fields.map((field2) => hash2[field2]) };
    },
    digest() {
      return hash2.digest("hex");
    }
  };
}
function encodeAttachmentPointer(input) {
  attachment(input);
  if (input.bytes === 0)
    throw new DriveError("invalid", "Empty files use an empty Git blob");
  return new TextEncoder().encode(`${version}oid sha256:${input.oid}
size ${input.bytes}
`);
}
function decodeAttachmentPointer(content2) {
  if (content2.length >= 1024)
    return null;
  const text2 = new TextDecoder().decode(content2);
  if (!text2.startsWith(version))
    return null;
  const match = /^oid sha256:([0-9a-f]{64})\nsize ([1-9][0-9]*)\n$/.exec(text2.slice(version.length));
  if (!match)
    return null;
  const bytes = Number(match[2]);
  return Number.isSafeInteger(bytes) ? { oid: match[1], bytes } : null;
}

// clients/obsidian/types.ts
var maximumFileBytes = 8 * 1024 * 1024;
async function blobId(content2) {
  const body = new TextEncoder().encode(content2), header = new TextEncoder().encode(`blob ${body.length}\0`), value = new Uint8Array(header.length + body.length);
  value.set(header);
  value.set(body, header.length);
  return [...new Uint8Array(await crypto.subtle.digest("SHA-1", value))].map((x) => x.toString(16).padStart(2, "0")).join("");
}
var safePath = (path3) => path3.length > 0 && path3.length <= 1024 && !path3.split("/").some((part) => !part || part === "." || part === ".." || part.startsWith(".")) && ![...path3].some((character) => character === "\\" || character.charCodeAt(0) < 32);

// clients/obsidian/binary-conflicts.ts
function binaryConflictTools(remote, resolve) {
  return {
    async describeVersion(path3, at) {
      const file = await remote.info({ path: path3, at });
      return file ? { bytes: file.bytes, mime: null, blob: file.blob, external: file.attachment !== null } : null;
    },
    async resolveMixed(ref, choices) {
      if (!resolve) throw new Error("Resume sync before resolving this conflict");
      const edits = [];
      for (const choice of choices) {
        if (choice.kind === "text") {
          edits.push({ path: choice.path, content: choice.content });
          continue;
        }
        const info = await remote.info({ path: choice.path, at: choice.at });
        if (!info) {
          edits.push({ path: choice.path, content: null });
          continue;
        }
        if (info.attachment) {
          edits.push({
            path: choice.path,
            content: new TextDecoder().decode(encodeAttachmentPointer(info.attachment))
          });
          continue;
        }
        let content2 = "", offset = 0;
        for (; ; ) {
          const page = await remote.read({
            path: choice.path,
            at: choice.at,
            offset,
            maxBytes: 65536
          });
          if (!page || page.bytes > maximumFileBytes)
            throw new Error("The selected version cannot be read on this device");
          content2 += page.content;
          if (page.next === null) break;
          if (page.next <= offset) throw new Error("Selected version download did not advance");
          offset = page.next;
        }
        edits.push({ path: choice.path, content: content2 });
      }
      await resolve(ref, edits);
    }
  };
}

// clients/obsidian/http.ts
var object = (value) => {
  if (typeof value !== "object" || value === null || Array.isArray(value))
    throw new Error("Server returned an invalid object");
  return { ...value };
};
var text = (value, key) => {
  const item = value[key];
  if (typeof item !== "string" || item.length === 0 || item.length > 16 * 1024 * 1024)
    throw new Error(`Server omitted ${key}`);
  return item;
};
var number = (value, key) => {
  const item = value[key];
  if (typeof item !== "number" || !Number.isFinite(item)) throw new Error(`Server omitted ${key}`);
  return item;
};
function endpoint(input, allowLoopback = false) {
  const url = new URL(input);
  if (url.username || url.password || url.hash || !(url.protocol === "https:" || allowLoopback && url.protocol === "http:" && ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)))
    throw new Error("Use an HTTPS Signalbox connection link");
  return url;
}
function json(reply, limit = 64 * 1024) {
  if (reply.body.length > limit) throw new Error("Server reply exceeds the device response limit");
  return JSON.parse(reply.body);
}

// clients/obsidian/dictionary.ts
function dictionary(entries = []) {
  const value = Object.fromEntries(entries);
  Object.setPrototypeOf(value, null);
  return value;
}

// clients/obsidian/binary-state.ts
var path = (value) => {
  if (!safePath(value)) throw new Error("Invalid saved attachment path");
  return value;
};
var revision = (value) => {
  if (typeof value !== "string" || !/^[0-9a-f]{40}$/u.test(value))
    throw new Error("Invalid saved attachment revision");
  return value;
};
var pointer = (value) => {
  if (typeof value !== "string" || !decodeAttachmentPointer(new TextEncoder().encode(value)))
    throw new Error("Invalid saved attachment pointer");
  return value;
};
function decodeBinaryState(input) {
  if (input === null || input === void 0)
    return {
      version: 1,
      files: dictionary(),
      uploads: dictionary(),
      downloads: dictionary()
    };
  const data = object(input);
  if (data.version !== 1) throw new Error("Saved attachments need another plugin version");
  const files = dictionary(), uploads = dictionary(), downloads = dictionary();
  for (const [key, value] of Object.entries(object(data.files))) {
    const item = object(value);
    files[path(key)] = {
      pointer: pointer(item.pointer),
      at: item.at === null ? null : revision(item.at),
      materialized: item.materialized === true,
      stamp: item.stamp === null ? null : text(item, "stamp")
    };
  }
  for (const [key, value] of Object.entries(object(data.uploads))) {
    const item = object(value), oid2 = text(item, "oid"), bytes = number(item, "bytes");
    if (!/^[0-9a-f]{64}$/u.test(oid2) || !Number.isSafeInteger(bytes) || bytes < 1 || bytes > 20 * 1024 * 1024 * 1024)
      throw new Error("Invalid saved attachment upload");
    uploads[path(key)] = {
      oid: oid2,
      bytes,
      operation: text(item, "operation"),
      stamp: text(item, "stamp"),
      upload: item.upload === null ? null : text(item, "upload"),
      cursor: item.cursor === null ? null : number(item, "cursor")
    };
  }
  for (const [key, value] of Object.entries(object(data.downloads))) {
    const item = object(value);
    downloads[path(key)] = {
      pointer: pointer(item.pointer),
      at: revision(item.at),
      id: text(item, "id")
    };
  }
  return { version: 1, files, uploads, downloads };
}
var pointerIdentity = (value) => decodeAttachmentPointer(new TextEncoder().encode(value));

// clients/obsidian/binary-download.ts
function binaryDownloader(input) {
  const { state, io, remote, save } = input;
  return async (path3, wanted, expected, signal) => {
    const check = () => {
      input.check();
      signal?.throwIfAborted();
    };
    check();
    const identity3 = pointerIdentity(wanted.pointer);
    if (!identity3 || !wanted.at) throw new Error("This attachment has not landed in Signalbox yet");
    const version2 = state.files[path3], info = await remote.info({ path: path3, at: wanted.at });
    if (!info || info.attachment?.oid !== identity3.oid || info.bytes !== identity3.bytes || info.attachment.bytes !== identity3.bytes || info.blob !== await blobId(wanted.pointer))
      throw new Error("Cloud attachment did not match its retained version");
    let pending = state.downloads[path3];
    if (pending && pending.pointer !== wanted.pointer) {
      await io.removeDownload(pending.id);
      delete state.downloads[path3];
      pending = void 0;
    }
    if (!pending) {
      pending = { pointer: wanted.pointer, at: wanted.at, id: `download-${input.id()}` };
      state.downloads[path3] = pending;
      await save();
    }
    if (pending.at !== wanted.at) {
      pending.at = wanted.at;
      await save();
    }
    let offset = await io.beginDownload(pending.id);
    if (!Number.isSafeInteger(offset) || offset < 0)
      throw new Error("Invalid saved download offset");
    if (offset > identity3.bytes) {
      await io.removeDownload(pending.id);
      offset = await io.beginDownload(pending.id);
      if (offset !== 0) throw new Error("Could not reset the invalid download");
    }
    const hash2 = incrementalSha256();
    for (let at = 0; at < offset; at += 1048576) {
      check();
      const length = Math.min(1048576, offset - at), bytes = await io.readDownload(pending.id, at, length);
      if (bytes.length !== length) throw new Error("Saved download was truncated");
      hash2.update(bytes);
    }
    while (offset < identity3.bytes) {
      check();
      const page = await remote.download({ path: path3, at: wanted.at, offset, maxBytes: 65536 });
      check();
      if (!page || page.blob !== info.blob || page.bytes !== identity3.bytes || page.offset !== offset)
        throw new Error("Cloud attachment range changed its pinned identity");
      const raw = atob(page.contentBase64);
      if (btoa(raw) !== page.contentBase64 || raw.length < 1 || raw.length > 65536 || offset + raw.length > identity3.bytes)
        throw new Error("Invalid attachment download encoding or length");
      const next = offset + raw.length;
      if (page.next !== (next === identity3.bytes ? null : next))
        throw new Error("Cloud attachment range did not advance exactly");
      const bytes = new Uint8Array(raw.length);
      for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
      await io.appendDownload(pending.id, offset, bytes);
      hash2.update(bytes);
      offset = next;
    }
    check();
    if (hash2.digest() !== identity3.oid) {
      await io.removeDownload(pending.id);
      delete state.downloads[path3];
      await save();
      throw new Error("Downloaded attachment failed SHA-256 verification");
    }
    if (state.files[path3] !== version2 || state.downloads[path3] !== pending) return false;
    if (!await io.publishDownload({ id: pending.id, path: path3, expected, ...signal ? { signal } : {} }))
      return false;
    const snapshot = await io.snapshot(path3);
    if (!snapshot || snapshot.bytes !== identity3.bytes)
      throw new Error("Published attachment has the wrong byte count");
    state.files[path3] = { ...wanted, materialized: true, stamp: snapshot.stamp };
    delete state.downloads[path3];
    await save();
    return true;
  };
}

// clients/obsidian/binary-links.ts
function linkedAttachments(note, links, available) {
  const result = /* @__PURE__ */ new Set(), parent = note.split("/").slice(0, -1);
  for (const raw of links) {
    let link = raw.split("#")[0]?.split("|")[0] ?? "";
    try {
      link = decodeURIComponent(link);
    } catch {
      continue;
    }
    if (!link || /^[a-z][a-z0-9+.-]*:/iu.test(link)) continue;
    const normalized = (parts) => {
      const stack = [];
      for (const part of parts) {
        if (part === "..") stack.pop();
        else if (part && part !== ".") stack.push(part);
      }
      return stack.join("/");
    };
    const options = [normalized([...parent, ...link.split("/")]), normalized(link.split("/"))];
    const exact = options.find((path3) => safePath(path3) && available.has(path3));
    if (exact) {
      result.add(exact);
      continue;
    }
    const matches = [...available].filter((path3) => path3 === link || path3.endsWith(`/` + link));
    if (matches.length === 1) result.add(matches[0]);
  }
  return [...result];
}

// clients/obsidian/binary-upload.ts
var encode = (bytes) => {
  let raw = "";
  for (const byte of bytes) raw += String.fromCharCode(byte);
  return btoa(raw);
};
function binaryUploader(input) {
  const { state, io, remote, save, check } = input;
  const same = async (path3, snapshot) => {
    const current = await io.snapshot(path3);
    if (!current || current.stamp !== snapshot.stamp || current.bytes !== snapshot.bytes)
      throw new Error("Local attachment changed during upload; its bytes are kept");
  };
  return async (path3, snapshot) => {
    const known = state.files[path3];
    if (known?.materialized && known.stamp === snapshot.stamp) return known.pointer;
    const hash2 = incrementalSha256();
    for (let offset = 0; offset < snapshot.bytes; offset += 1048576) {
      check();
      const bytes = await io.read(
        path3,
        snapshot,
        offset,
        Math.min(1048576, snapshot.bytes - offset)
      );
      if (bytes.length !== Math.min(1048576, snapshot.bytes - offset))
        throw new Error("Local attachment read was truncated");
      hash2.update(bytes);
    }
    await same(path3, snapshot);
    const oid2 = hash2.digest();
    let pending = state.uploads[path3];
    if (pending && (pending.oid !== oid2 || pending.bytes !== snapshot.bytes)) {
      const old = await remote.beginAttachment({
        operation: pending.operation,
        oid: pending.oid,
        bytes: pending.bytes
      });
      if (old.state !== "present") {
        let cursor2 = 0;
        do {
          check();
          const page = await remote.cancelAttachment({ upload: old.upload, cursor: cursor2 });
          cursor2 = page.next;
        } while (cursor2 !== null);
      }
      delete state.uploads[path3];
      await save();
      pending = void 0;
    }
    if (!pending) {
      pending = {
        operation: `binary-${input.id()}`,
        oid: oid2,
        bytes: snapshot.bytes,
        stamp: snapshot.stamp,
        upload: null,
        cursor: null
      };
      state.uploads[path3] = pending;
      await save();
    }
    let cursor = 0, present = false;
    do {
      check();
      const page = await remote.beginAttachment({
        operation: pending.operation,
        oid: oid2,
        bytes: snapshot.bytes,
        ...cursor ? { cursor } : {}
      });
      if (page.oid !== oid2 || page.bytes !== snapshot.bytes || page.partBytes < 1 || page.partBytes > 1048576 || page.parts !== Math.ceil(snapshot.bytes / page.partBytes))
        throw new Error("Cloud upload bounds did not match this file");
      pending.upload = page.upload;
      await save();
      if (page.state === "present") {
        present = true;
        break;
      }
      for (const part of page.missing) {
        check();
        if (!Number.isSafeInteger(part) || part < 0 || part >= page.parts)
          throw new Error("Cloud requested an invalid attachment part");
        await same(path3, snapshot);
        const bytes = await io.read(
          path3,
          snapshot,
          part * page.partBytes,
          Math.min(page.partBytes, snapshot.bytes - part * page.partBytes)
        );
        const ack = await remote.uploadAttachmentPart({
          upload: page.upload,
          part,
          contentBase64: encode(bytes)
        });
        if (ack.part !== part || ack.bytes !== bytes.length)
          throw new Error("Cloud attachment acknowledgement was invalid");
      }
      if (page.next !== null && (page.next <= Number(cursor) || page.next > page.parts))
        throw new Error("Cloud upload cursor did not advance");
      cursor = page.next;
    } while (cursor !== null);
    if (!present) {
      if (!pending.upload) throw new Error("Cloud omitted its upload identity");
      let next = pending.cursor ?? 0;
      do {
        check();
        const verified = await remote.completeAttachment({
          upload: pending.upload,
          ...next ? { cursor: next } : {}
        });
        if (verified.oid !== oid2 || verified.bytes !== snapshot.bytes)
          throw new Error("Cloud verified a different attachment");
        if (verified.state === "present") {
          present = true;
          next = null;
        } else {
          if (verified.next === null || verified.next <= Number(next))
            throw new Error("Cloud verification did not advance");
          next = verified.next;
          pending.cursor = next;
          await save();
        }
      } while (next !== null);
    }
    check();
    await same(path3, snapshot);
    const pointer2 = new TextDecoder().decode(
      encodeAttachmentPointer({ oid: oid2, bytes: snapshot.bytes })
    );
    state.files[path3] = {
      pointer: pointer2,
      at: known?.pointer === pointer2 ? known.at : null,
      materialized: true,
      stamp: snapshot.stamp
    };
    delete state.uploads[path3];
    await save();
    return pointer2;
  };
}

// src/drive/text-files.ts
var textExtensions = /* @__PURE__ */ new Set([
  "md",
  "markdown",
  "canvas",
  "base",
  "txt",
  "json",
  "csv",
  "tsv",
  "yaml",
  "yml",
  "toml",
  "css",
  "html",
  "xml",
  "svg",
  "tex",
  "bib",
  "org",
  "ics",
  "js",
  "ts"
]);
var maximumTextBytes = 1024 * 1024;
function isTextPath(path3) {
  const name = path3.slice(path3.lastIndexOf("/") + 1), dot = name.lastIndexOf(".");
  return dot > 0 && textExtensions.has(name.slice(dot + 1).toLowerCase());
}
var strictUtf8 = new TextDecoder("utf-8", { fatal: true });
function isTextContent(bytes) {
  if (bytes.includes(0)) return false;
  try {
    strictUtf8.decode(bytes);
    return true;
  } catch {
    return false;
  }
}

// clients/obsidian/binary.ts
async function createBinaryClient(input) {
  const state = decodeBinaryState(await input.store.load()), stop = new AbortController(), listeners = /* @__PURE__ */ new Set();
  const check = () => {
    stop.signal.throwIfAborted();
    input.signal?.throwIfAborted();
  };
  const save = async () => {
    await input.store.save(structuredClone(state));
    input.changed();
    for (const listener of listeners) listener();
  };
  const uploading = /* @__PURE__ */ new Map(), downloading = /* @__PURE__ */ new Map(), failures = /* @__PURE__ */ new Map();
  const inFolder = (path3, folder) => path3 === folder || path3.startsWith(folder + "/");
  let required = /* @__PURE__ */ new Set();
  const pinned = (path3) => input.pins.get().some((folder) => inFolder(path3, folder)) || required.has(path3);
  const fetchBytes = binaryDownloader({ ...input, state, save, check });
  const ensure = async (path3, signal) => {
    check();
    const record2 = state.files[path3];
    if (!record2) throw new Error("This attachment is not in Signalbox's file list yet");
    if (record2.materialized && await input.io.snapshot(path3)) return true;
    let work = downloading.get(path3);
    if (!work) {
      work = fetchBytes(path3, record2, null, signal).catch((failure) => {
        if (!signal?.aborted && !stop.signal.aborted && !input.signal?.aborted)
          failures.set(
            path3,
            failure instanceof Error ? failure.message : "Attachment download failed"
          );
        throw failure;
      }).finally(() => {
        downloading.delete(path3);
        input.changed();
        for (const listener of listeners) listener();
      });
      downloading.set(path3, work);
      input.changed();
    }
    return work;
  };
  const refreshPins = async () => {
    const available = new Set(Object.keys(state.files)), needed = /* @__PURE__ */ new Set();
    for (const file of await input.text.files())
      if (file.path.endsWith(".md") && input.pins.get().some((folder) => inFolder(file.path, folder)))
        for (const path3 of linkedAttachments(
          file.path,
          await input.io.noteLinks(file.path),
          available
        ))
          needed.add(path3);
    required = needed;
  };
  const uploadFile = binaryUploader({ ...input, state, save, check });
  const textual = async (path3, snapshot) => isTextPath(path3) && !state.files[path3] && snapshot.bytes <= maximumTextBytes && // The desktop reader refuses zero-length reads, and an empty file is valid text anyway.
  (snapshot.bytes === 0 || isTextContent(await input.io.read(path3, snapshot, 0, snapshot.bytes)));
  const changed = "\0changed attachment";
  const look = async (path3, upload) => {
    const file = await input.io.snapshot(path3);
    if (!file) {
      const known = state.files[path3], pending = state.downloads[path3];
      if (known?.materialized && pending && input.io.pendingSnapshot) {
        const recovered = await input.io.pendingSnapshot(path3, pending.id);
        if (recovered?.stamp === known.stamp) return known.pointer;
      }
      return known?.materialized ? null : known?.pointer ?? null;
    }
    if (file.bytes === 0 || await textual(path3, file)) return input.text.read(path3);
    if (!safePath(path3)) throw new Error("Unsafe local attachment path");
    if (!upload) {
      const known = state.files[path3];
      if (!known?.materialized) return changed;
      if (known.stamp === file.stamp) return known.pointer;
      const identity3 = pointerIdentity(known.pointer);
      if (identity3?.bytes !== file.bytes) return changed;
      const hash2 = incrementalSha256();
      for (let offset = 0; offset < file.bytes; offset += 1048576)
        hash2.update(
          await input.io.read(path3, file, offset, Math.min(1048576, file.bytes - offset))
        );
      return hash2.digest() === identity3.oid ? known.pointer : changed;
    }
    let work = uploading.get(path3);
    if (!work) {
      work = uploadFile(path3, file).finally(() => uploading.delete(path3));
      uploading.set(path3, work);
    }
    return work;
  };
  const local = {
    binary: true,
    initialSource: input.mode === "full",
    async importEntry(file) {
      const snapshot = await input.io.snapshot(file.path);
      if (!snapshot) return null;
      if (await textual(file.path, snapshot)) {
        const content2 = await input.text.read(file.path);
        return content2 === null ? null : {
          path: file.path,
          kind: "note",
          bytes: new TextEncoder().encode(content2).length,
          hash: await blobId(content2)
        };
      }
      const hash2 = incrementalSha256();
      for (let offset = 0; offset < snapshot.bytes; offset += 1048576) {
        check();
        hash2.update(
          await input.io.read(
            file.path,
            snapshot,
            offset,
            Math.min(1048576, snapshot.bytes - offset)
          )
        );
      }
      const current = await input.io.snapshot(file.path);
      if (current?.stamp !== snapshot.stamp || current.bytes !== snapshot.bytes)
        throw new Error(
          `Local file changed while preparing its import: ${file.path}. Its bytes are kept.`
        );
      return { path: file.path, kind: "attachment", bytes: snapshot.bytes, hash: hash2.digest() };
    },
    async files() {
      const actual = await input.text.files(), seen = new Set(actual.map((file) => file.path));
      return [
        ...actual,
        ...Object.entries(state.files).filter(([path3, value]) => !seen.has(path3) && !value.materialized).map(([path3, value]) => ({ path: path3, bytes: pointerIdentity(value.pointer).bytes }))
      ];
    },
    read: (path3) => look(path3, true),
    inspect: (path3) => look(path3, false),
    async replace(path3, expected, content2, context) {
      const identity3 = pointerIdentity(content2 ?? ""), known = state.files[path3];
      if (!identity3 && !known) return input.text.replace(path3, expected, content2, context);
      if (await look(path3, false) !== expected) return false;
      const snapshot = await input.io.snapshot(path3);
      if (content2 === null) {
        if (snapshot && !await input.io.preserve(path3, snapshot)) return false;
        delete state.files[path3];
        const pending = state.downloads[path3];
        if (pending) {
          await input.io.removeDownload(pending.id);
          delete state.downloads[path3];
        }
        await save();
        return true;
      }
      if (!identity3) {
        const id = `inline-${input.id()}`;
        await input.io.beginDownload(id);
        const bytes = new TextEncoder().encode(content2);
        for (let offset = 0; offset < bytes.length; offset += 65536)
          await input.io.appendDownload(id, offset, bytes.slice(offset, offset + 65536));
        if (!await input.io.publishDownload({ id, path: path3, expected: snapshot })) return false;
        delete state.files[path3];
        await save();
        return true;
      }
      if (!context?.at) throw new Error("An attachment download needs its pinned cloud revision");
      if (known?.pointer === content2 && snapshot && known.materialized) {
        state.files[path3] = { ...known, at: context.at };
        await save();
        return true;
      }
      const wanted = { pointer: content2, at: context.at, materialized: false, stamp: null };
      if (input.mode === "on-demand" && !path3.toLowerCase().endsWith(".md") && !pinned(path3)) {
        if (snapshot && !await input.io.preserve(path3, snapshot)) return false;
        state.files[path3] = wanted;
        await save();
        return true;
      }
      return fetchBytes(path3, wanted, snapshot);
    },
    async accept(path3, at, blob) {
      const known = state.files[path3];
      if (!known) return;
      if (blob === null) delete state.files[path3];
      else if (await blobId(known.pointer) === blob) state.files[path3] = { ...known, at };
      await save();
    }
  };
  const flush = async () => {
    check();
    await refreshPins();
    for (const [path3, record2] of Object.entries(state.files))
      if ((input.mode === "full" || path3.toLowerCase().endsWith(".md") || pinned(path3)) && !record2.materialized)
        await ensure(path3);
  };
  const entries = () => Object.entries(state.files).map(([path3, value]) => ({
    path: path3,
    bytes: pointerIdentity(value.pointer).bytes,
    local: value.materialized,
    pinned: input.mode === "full" || path3.toLowerCase().endsWith(".md") || pinned(path3)
  }));
  const port = {
    ...binaryConflictTools(input.remote, input.resolve),
    mode: () => input.mode,
    entries,
    summary: () => ({
      unsynced: Object.keys(state.uploads),
      cloudOnly: Object.values(state.files).filter((value) => !value.materialized).length,
      downloading: downloading.size,
      failed: [...failures].map(([path3, reason]) => ({ path: path3, reason }))
    }),
    pins: () => input.mode === "full" ? [] : input.pins.get(),
    async setPinned(folder, value) {
      if (!safePath(folder)) throw new Error("Invalid offline folder");
      const pins = new Set(input.pins.get());
      if (value) pins.add(folder);
      else pins.delete(folder);
      await input.pins.set([...pins]);
      await flush();
      await save();
    },
    async noteOpened(path3, signal) {
      check();
      signal.throwIfAborted();
      const available = new Set(Object.keys(state.files));
      if (available.has(path3)) await ensure(path3, signal);
      for (const target of linkedAttachments(path3, await input.io.noteLinks(path3), available)) {
        signal.throwIfAborted();
        await ensure(target, signal);
      }
    },
    async download(path3, signal) {
      if (!await ensure(path3, signal))
        throw new Error("Local attachment changed during download. Its bytes were kept.");
      failures.delete(path3);
      await save();
    },
    async evict(path3) {
      check();
      await refreshPins();
      if (input.mode === "full" || path3.toLowerCase().endsWith(".md") || pinned(path3))
        throw new Error(
          "This attachment is kept offline. Unpin its folder before removing the downloaded copy."
        );
      const record2 = state.files[path3], snapshot = await input.io.snapshot(path3);
      if (!record2?.at || state.uploads[path3] || !snapshot || !record2.materialized || snapshot.stamp !== record2.stamp)
        throw new Error(
          "This device has bytes Signalbox may not hold yet. Sync before removing this copy."
        );
      const info = await input.remote.info({ path: path3, at: record2.at });
      if (info?.attachment?.oid !== pointerIdentity(record2.pointer)?.oid)
        throw new Error("The retained cloud copy could not be verified");
      state.files[path3] = { ...record2, materialized: false, stamp: null };
      await save();
      if (!await input.io.evict(path3, { ...snapshot, oid: pointerIdentity(record2.pointer).oid })) {
        state.files[path3] = record2;
        await save();
        throw new Error("Local attachment changed and was kept");
      }
      failures.delete(path3);
      await save();
    },
    onChange(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }
  };
  return {
    ...port,
    local,
    flush,
    close() {
      stop.abort();
    }
  };
}

// clients/obsidian/plugin/obsidian-binary.ts
var import_obsidian = require("obsidian");

// clients/obsidian/download-files.ts
var size = 1048576;
function downloadFiles(adapter, root) {
  const directory = (id) => {
    if (!/^[A-Za-z0-9_-]{1,128}$/u.test(id)) throw new Error("Invalid temporary download identity");
    return root + "/" + id;
  };
  const part = (id, index) => directory(id) + `/part-${String(index).padStart(5, "0")}.bin`;
  const mkdir = async (path3) => {
    let current = "";
    for (const name of path3.split("/")) {
      current = current ? current + "/" + name : name;
      if (!await adapter.exists(current)) {
        try {
          await adapter.mkdir(current);
        } catch (failure) {
          if (!await adapter.exists(current)) throw failure;
        }
      }
    }
  };
  const list = async (id) => {
    const folder = directory(id);
    if (!await adapter.exists(folder)) return [];
    return (await adapter.list(folder)).files.filter((path3) => /^part-[0-9]{5}\.bin$/u.test(path3.slice(folder.length + 1))).sort();
  };
  return {
    path: directory,
    async begin(id) {
      await mkdir(directory(id));
      const files = await list(id);
      let total = 0;
      for (const [index, path3] of files.entries()) {
        if (path3 !== part(id, index)) throw new Error("Saved download has a gap");
        const stat = await adapter.stat(path3);
        if (!stat || stat.type !== "file" || stat.size > size || index < files.length - 1 && stat.size !== size)
          throw new Error("Saved download part has an invalid size");
        total += stat.size;
      }
      return total;
    },
    async read(id, offset, length) {
      const result = new Uint8Array(length);
      let copied = 0;
      while (copied < length) {
        const at = offset + copied, index = Math.floor(at / size), within = at % size, bytes = new Uint8Array(await adapter.readBinary(part(id, index))), count2 = Math.min(length - copied, bytes.length - within);
        if (count2 < 1 || bytes.length > size) throw new Error("Saved download range is missing");
        result.set(bytes.subarray(within, within + count2), copied);
        copied += count2;
      }
      return result;
    },
    async append(id, offset, bytes) {
      const index = Math.floor(offset / size), within = offset % size, key = part(id, index);
      if (bytes.length > size || within + bytes.length > size)
        throw new Error("Download append crossed its part bound");
      const stat = await adapter.stat(key);
      if ((stat?.size ?? 0) !== within) throw new Error("Download append has a stale offset");
      if (!stat) await adapter.writeBinary(key, new ArrayBuffer(0));
      await adapter.appendBinary(key, bytes.slice().buffer);
    },
    async journal(id) {
      const key = directory(id) + "/publish.json";
      return await adapter.exists(key) ? JSON.parse(await adapter.read(key)) : null;
    },
    async writeJournal(id, value) {
      await mkdir(directory(id));
      await adapter.write(directory(id) + "/publish.json", JSON.stringify(value));
    },
    async remove(id) {
      for (const path3 of await list(id)) await adapter.remove(path3);
      const key = directory(id) + "/publish.json";
      if (await adapter.exists(key)) await adapter.remove(key);
      if (await adapter.exists(directory(id)) && !(await adapter.list(directory(id))).files.length && !(await adapter.list(directory(id))).folders.length)
        await adapter.rmdir(directory(id), false);
    }
  };
}

// clients/obsidian/resource-range.ts
async function resourceRange(adapter, path3, offset, length, bytes) {
  const response = await fetch(adapter.getResourcePath(path3), {
    headers: { range: `bytes=${offset}-${offset + length - 1}` },
    cache: "no-store"
  });
  if (response.status !== 206 || response.headers.get("content-range") !== `bytes ${offset}-${offset + length - 1}/${bytes}`) {
    await response.body?.cancel();
    throw new Error(
      "This device cannot read large local files in parts. Keep the file here and sync it from the Mac."
    );
  }
  const reader = response.body?.getReader();
  if (!reader) throw new Error("Local resource returned no byte stream");
  const output = new Uint8Array(length);
  let at = 0;
  try {
    for (; ; ) {
      const chunk = await reader.read();
      if (chunk.done) break;
      if (at + chunk.value.length > length)
        throw new Error("Local resource ignored its byte bound");
      output.set(chunk.value, at);
      at += chunk.value.length;
    }
    if (at !== length) throw new Error("Local resource range was truncated");
    return output;
  } finally {
    await reader.cancel();
    reader.releaseLock();
  }
}

// clients/obsidian/local-vault.ts
var recoveryFolder = "Signalbox recovered";
var stamp = (now) => now.toISOString().slice(0, 19).replace(/:/gu, "-");
function createLocalVault(vault, options = {}) {
  const writing = options.writing ?? (() => {
  });
  const recovered = new Set(options.recoveries?.get() ?? []), changes = /* @__PURE__ */ new Map();
  const ignored = (path3) => recovered.has(path3) || (options.transfers?.().includes(path3) ?? false);
  const now = options.now ?? (() => /* @__PURE__ */ new Date());
  const ensureFolder = async (folder) => {
    let prefix = "";
    for (const part of folder.split("/").filter(Boolean)) {
      prefix = prefix ? `${prefix}/${part}` : part;
      if (vault.getAbstractFileByPath(prefix)) continue;
      try {
        await vault.createFolder(prefix);
      } catch (failure) {
        if (!vault.getAbstractFileByPath(prefix)) throw failure;
      }
    }
  };
  const freePath = (path3) => {
    const dot = path3.lastIndexOf("."), slash = path3.lastIndexOf("/");
    const stem = dot > slash ? path3.slice(0, dot) : path3, extension = dot > slash ? path3.slice(dot) : "";
    let candidate = path3;
    for (let n = 2; vault.getAbstractFileByPath(candidate); n++)
      candidate = `${stem} (${n})${extension}`;
    return candidate;
  };
  const preserve = async (file, selected) => {
    const target = selected ?? freePath(`${recoveryFolder}/${stamp(now())}/${file.path}`);
    recovered.add(target);
    await options.recoveries?.add(target);
    await ensureFolder(target.slice(0, target.lastIndexOf("/")));
    writing(file.path);
    await vault.rename(file, target);
  };
  return {
    ensureFolder,
    revision: (path3) => changes.get(path3) ?? 0,
    changed: (path3) => {
      changes.set(path3, (changes.get(path3) ?? 0) + 1);
    },
    ignored,
    async preserve(path3, target) {
      const file = vault.getFileByPath(path3);
      if (!file) return false;
      await preserve(file, target);
      return true;
    },
    async files() {
      return vault.getFiles().filter((file) => !ignored(file.path)).map((file) => ({
        path: file.path,
        bytes: file.stat.size,
        ...file.stat.mtime === void 0 ? {} : { stamp: `${file.stat.mtime}:${file.stat.size}:${changes.get(file.path) ?? 0}` }
      }));
    },
    async read(path3) {
      if (ignored(path3)) return null;
      const file = vault.getFileByPath(path3);
      if (!file || file.stat.size > maximumFileBytes) return null;
      return vault.read(file);
    },
    async replace(path3, expected, content2) {
      if (ignored(path3)) return false;
      const file = vault.getFileByPath(path3);
      if (content2 === null) {
        if (!file) return expected === null;
        if (expected === null || file.stat.size > maximumFileBytes) return false;
        if (await vault.read(file) !== expected) return false;
        await preserve(file);
        return true;
      }
      if (expected === null) {
        if (vault.getAbstractFileByPath(path3)) return false;
        const slash = path3.lastIndexOf("/");
        if (slash > 0) await ensureFolder(path3.slice(0, slash));
        writing(path3);
        try {
          await vault.create(path3, content2);
          return true;
        } catch (failure) {
          if (vault.getAbstractFileByPath(path3)) return false;
          throw failure;
        }
      }
      if (!file || file.stat.size > maximumFileBytes) return false;
      let matched = false;
      writing(path3);
      await vault.process(file, (data) => {
        if (data !== expected) return data;
        matched = true;
        return content2;
      });
      return matched;
    },
    recovered() {
      return vault.getFiles().filter((file) => recovered.has(file.path)).map((file) => file.path).sort();
    }
  };
}

// clients/obsidian/binary-files.ts
function createBinaryIo(input) {
  const { adapter, vault, local, ownership } = input, parts = downloadFiles(adapter, input.privateRoot);
  const check = () => input.signal?.throwIfAborted();
  const snapshot = async (path3) => {
    if (input.desktop) return input.desktop.snapshot(path3);
    const stat = await adapter.stat(path3);
    return stat?.type === "file" ? { bytes: stat.size, stamp: `${stat.mtime}:${stat.size}:${local.revision(path3)}` } : null;
  };
  const matches = (a, b) => a === null ? b === null : b !== null && a.stamp === b.stamp && a.bytes === b.bytes;
  const read = async (path3, expected, offset, length) => {
    check();
    if (!matches(await snapshot(path3), expected))
      throw new Error("Local attachment changed during its read");
    let bytes;
    if (input.desktop) bytes = await input.desktop.read(path3, expected, offset, length);
    else if (expected.bytes <= 8 * 1048576)
      bytes = new Uint8Array(await adapter.readBinary(path3)).slice(offset, offset + length);
    else bytes = await resourceRange(adapter, path3, offset, length, expected.bytes);
    if (bytes.length !== length || !matches(await snapshot(path3), expected))
      throw new Error("Local attachment changed or its range was truncated");
    return bytes;
  };
  const journal = async (id) => {
    const raw = await parts.journal(id);
    if (raw === null) return null;
    const value = object(raw), expected = value.expected === null ? null : object(value.expected);
    return {
      path: text(value, "path"),
      recovery: value.recovery === null ? null : text(value, "recovery"),
      expected: expected ? { stamp: text(expected, "stamp"), bytes: number(expected, "bytes") } : null
    };
  };
  const ownedRecovery = async (path3, id) => {
    const prior = await journal(id);
    if (!prior || prior.path !== path3 || !prior.expected || !prior.recovery || await adapter.exists(path3))
      return null;
    const recovered = await adapter.stat(prior.recovery);
    return recovered?.type === "file" && recovered.size === prior.expected.bytes ? prior.expected : null;
  };
  const transfer = async (id) => {
    parts.path(id);
    const path3 = `${input.transferRoot}/${id}.bin`;
    await ownership.add(path3);
    await local.ensureFolder(input.transferRoot);
    const previous = vault.getFileByPath(path3);
    if (previous) await vault.delete(previous);
    else if (await adapter.exists(path3))
      throw new Error("Wait for Obsidian to index its pending download");
    return vault.createBinary(path3, new ArrayBuffer(0));
  };
  return {
    snapshot,
    read,
    beginDownload: parts.begin,
    readDownload: parts.read,
    appendDownload: parts.append,
    async removeDownload(id) {
      await parts.remove(id);
      const path3 = `${input.transferRoot}/${id}.bin`;
      if (ownership.get().includes(path3)) {
        const file = vault.getFileByPath(path3);
        if (file) await vault.delete(file);
        await ownership.remove(path3);
      }
    },
    pendingSnapshot: ownedRecovery,
    async publishDownload(value) {
      check();
      value.signal?.throwIfAborted();
      if (!safePath(value.path)) throw new Error("Unsafe attachment destination");
      const total = await parts.begin(value.id), assembled = await transfer(value.id);
      for (let offset = 0; offset < total; offset += 1048576) {
        check();
        value.signal?.throwIfAborted();
        await vault.appendBinary(
          assembled,
          (await parts.read(value.id, offset, Math.min(1048576, total - offset))).buffer
        );
      }
      let actual = await snapshot(value.path), prior = await journal(value.id);
      if (prior && prior.path !== value.path)
        throw new Error("A saved publication names another file");
      const resumed = actual === null ? await ownedRecovery(value.path, value.id) : null;
      if (!resumed && !matches(actual, value.expected)) return false;
      if (actual) {
        let target = prior?.recovery ?? `${recoveryFolder}/${value.id}/${value.path}`;
        if (await adapter.exists(target))
          target = `${recoveryFolder}/${value.id}-${input.id()}/${value.path}`;
        await parts.writeJournal(value.id, {
          path: value.path,
          expected: actual,
          recovery: target
        });
        if (!await local.preserve(value.path, target)) return false;
        actual = await snapshot(value.path);
        if (actual) return false;
      } else if (!prior) {
        await parts.writeJournal(value.id, { path: value.path, expected: null, recovery: null });
      }
      check();
      value.signal?.throwIfAborted();
      if (await adapter.exists(value.path)) return false;
      await local.ensureFolder(value.path.split("/").slice(0, -1).join("/"));
      try {
        await vault.rename(assembled, value.path);
      } catch (failure) {
        if (await adapter.exists(value.path))
          throw new Error("The destination appeared during publication; its bytes were kept", {
            cause: failure
          });
        throw failure;
      }
      await ownership.remove(`${input.transferRoot}/${value.id}.bin`);
      await parts.remove(value.id);
      return true;
    },
    async preserve(path3, expected) {
      check();
      if (!matches(await snapshot(path3), expected)) return false;
      return local.preserve(path3);
    },
    async evict(path3, expected) {
      check();
      if (!safePath(path3) || !matches(await snapshot(path3), expected)) return false;
      if (!expected.oid) throw new Error("A retained hash is required before removing local bytes");
      const id = `evict-${input.id()}`, target = `${input.transferRoot}/${id}.bin`;
      await ownership.add(target);
      await local.ensureFolder(input.transferRoot);
      const file = vault.getFileByPath(path3);
      if (!file) return false;
      await vault.rename(file, target);
      try {
        const moved = await snapshot(target);
        if (!moved) throw new Error("The removed copy could not be verified");
        const hash2 = incrementalSha256();
        for (let offset = 0; offset < moved.bytes; offset += 1048576) {
          check();
          hash2.update(await read(target, moved, offset, Math.min(1048576, moved.bytes - offset)));
        }
        if (hash2.digest() !== expected.oid)
          throw new Error("The local file changed before removal");
        const retained = vault.getFileByPath(target);
        if (retained) await vault.delete(retained);
        await ownership.remove(target);
        return true;
      } catch (failure) {
        const retained = vault.getFileByPath(target);
        if (retained) await local.preserve(target);
        await ownership.remove(target);
        throw new Error(
          "The downloaded copy could not be safely removed. Its bytes are kept in Signalbox recovered.",
          { cause: failure }
        );
      }
    },
    noteLinks: input.links ?? (async () => [])
  };
}

// clients/obsidian/auth.ts
var grant = "urn:ietf:params:oauth:grant-type:device_code";
var form = (body) => ({
  method: "POST",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams(body).toString()
});
var base64url = (bytes) => btoa(String.fromCharCode(...bytes)).replace(/\+/gu, "-").replace(/\//gu, "_").replace(/=+$/u, "");
function connectionUrl(input, allowLoopback = false) {
  const url = endpoint(input, allowLoopback), connection = url.searchParams.get("connection");
  if (url.pathname !== "/mcp" || !connection || !/^[A-Za-z0-9_-]{1,64}$/u.test(connection) || url.searchParams.getAll("connection").length !== 1)
    throw new Error("Use the app-scoped connection link from Signalbox");
  const query = new URLSearchParams({ connection, elicitation_mode: "native" });
  return `${url.origin}/mcp?${query}`;
}
async function beginConnection(http, input, now = Date.now(), allowLoopback = false) {
  const resource = connectionUrl(input, allowLoopback), url = new URL(resource);
  const discovery = object(
    json(
      await http(`${url.origin}/.well-known/oauth-protected-resource/mcp?${url.searchParams}`, {
        method: "GET"
      })
    )
  );
  if (discovery.resource !== resource || !Array.isArray(discovery.authorization_servers) || typeof discovery.authorization_servers[0] !== "string")
    throw new Error("Signalbox returned discovery for a different connection");
  const issuerValue = discovery.authorization_servers[0], issuer = endpoint(issuerValue, allowLoopback);
  const metadata = object(
    json(
      await http(
        `${issuer.origin}/.well-known/oauth-authorization-server${issuer.pathname.replace(/\/$/u, "")}`,
        { method: "GET" }
      )
    )
  );
  if (metadata.issuer !== issuerValue)
    throw new Error("Authorization issuer did not match discovery");
  const approvedEndpoint = (key) => {
    const value = endpoint(text(metadata, key), allowLoopback);
    if (value.origin !== issuer.origin) throw new Error("Authorization endpoint changed issuer");
    return value.href;
  };
  const registration = approvedEndpoint("registration_endpoint"), device = approvedEndpoint("device_authorization_endpoint"), tokenEndpoint = approvedEndpoint("token_endpoint");
  const revocationEndpoint = typeof metadata.revocation_endpoint === "string" ? approvedEndpoint("revocation_endpoint") : null;
  const registered = await http(registration, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      client_name: "Signalbox Obsidian Sync",
      token_endpoint_auth_method: "none",
      grant_types: [grant, "refresh_token"],
      response_types: [],
      scope: "mcp offline_access"
    })
  });
  if (registered.status < 200 || registered.status >= 300)
    throw new Error("Signalbox could not register this device");
  const clientId = text(object(json(registered)), "client_id"), verifier = base64url(crypto.getRandomValues(new Uint8Array(32)));
  const challenge = base64url(
    new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier)))
  );
  const reply = await http(
    device,
    form({
      client_id: clientId,
      resource,
      scope: "mcp offline_access",
      code_challenge: challenge,
      code_challenge_method: "S256"
    })
  );
  if (reply.status !== 200) throw new Error("Signalbox could not start device authorization");
  const data = object(json(reply)), verificationUrl = endpoint(
    typeof data.verification_uri_complete === "string" ? data.verification_uri_complete : text(data, "verification_uri"),
    allowLoopback
  ).href;
  const expires = number(data, "expires_in"), interval = typeof data.interval === "number" ? data.interval : 5;
  if (expires <= 0 || expires > 3600 || interval < 1 || interval > 60)
    throw new Error("Invalid device authorization deadline");
  return {
    resource,
    clientId,
    tokenEndpoint,
    revocationEndpoint,
    deviceCode: text(data, "device_code"),
    verifier,
    verificationUrl,
    userCode: text(data, "user_code"),
    expiresAt: now + expires * 1e3,
    interval
  };
}
function token(data, prior, now) {
  const expires = number(data, "expires_in");
  if (data.token_type !== "Bearer" && data.token_type !== "bearer")
    throw new Error("Unsupported device token type");
  if (expires <= 0) throw new Error("Expired device token");
  return {
    resource: prior.resource,
    clientId: prior.clientId,
    tokenEndpoint: prior.tokenEndpoint,
    revocationEndpoint: prior.revocationEndpoint,
    accessToken: text(data, "access_token"),
    refreshToken: typeof data.refresh_token === "string" ? data.refresh_token : prior.refreshToken ?? "",
    expiresAt: now + expires * 1e3
  };
}
async function pollConnection(http, pending, now = Date.now()) {
  if (now >= pending.expiresAt) throw new Error("Device authorization expired. Connect again.");
  const reply = await http(
    pending.tokenEndpoint,
    form({
      grant_type: grant,
      client_id: pending.clientId,
      device_code: pending.deviceCode,
      code_verifier: pending.verifier
    })
  ), data = object(json(reply));
  if (reply.status === 200) return { state: "connected", session: token(data, pending, now) };
  if (data.error === "authorization_pending" || data.error === "slow_down")
    return { state: "pending", interval: pending.interval + (data.error === "slow_down" ? 5 : 0) };
  if (data.error === "access_denied") throw new Error("Device authorization was declined");
  throw new Error("Device authorization could not finish. Connect again.");
}
async function refreshSession(http, session2, now = Date.now()) {
  if (!session2.refreshToken) throw new Error("Device access expired. Connect again.");
  const reply = await http(
    session2.tokenEndpoint,
    form({
      grant_type: "refresh_token",
      client_id: session2.clientId,
      refresh_token: session2.refreshToken,
      resource: session2.resource
    })
  );
  if (reply.status !== 200)
    throw new Error("Device access was removed or expired. Reconnect in Signalbox.");
  return token(object(json(reply)), session2, now);
}
async function revokeSession(http, session2) {
  if (!session2.revocationEndpoint)
    throw new Error("This server requires removing this device in Signalbox Connections.");
  const tokens = [
    ...session2.refreshToken ? [{ token: session2.refreshToken, token_type_hint: "refresh_token" }] : [],
    { token: session2.accessToken, token_type_hint: "access_token" }
  ];
  for (const value of tokens) {
    const reply = await http(
      session2.revocationEndpoint,
      form({ ...value, client_id: session2.clientId })
    );
    if (reply.status !== 200)
      throw new Error(
        "Device access could not be revoked. Keep this device connected and try again."
      );
  }
}

// clients/obsidian/remote-connection.ts
var RemoteToolError = class extends Error {
  kind;
  constructor(kind, message2) {
    super(message2);
    this.kind = kind;
  }
};
function envelope(reply, id) {
  if (reply.status < 200 || reply.status >= 300)
    throw new Error(
      reply.status === 401 || reply.status === 403 ? "Device access was removed or expired. Reconnect in Signalbox." : `Cloud request failed (${reply.status})`
    );
  let value;
  if (reply.headers["content-type"]?.includes("text/event-stream")) {
    if (reply.body.length > 16 * 1024 * 1024)
      throw new Error("Cloud reply exceeds the device limit");
    for (const frame of reply.body.split(/\r?\n\r?\n/u)) {
      const data2 = frame.split(/\r?\n/u).filter((line) => line.startsWith("data:")).map((line) => line.slice(5).trimStart()).join("\n");
      if (!data2) continue;
      const item = object(JSON.parse(data2));
      if (item.method && item.id !== void 0)
        throw new Error("The cloud app asked for an unsupported device prompt");
      if (item.id === id) value = item;
    }
  } else value = json(reply, 16 * 1024 * 1024);
  const data = object(value);
  if (data.id !== id || data.error !== void 0) throw new Error("Cloud protocol request failed");
  return object(data.result);
}
function createTransport(input) {
  if (!/^[A-Za-z0-9_-]+$/u.test(input.appSlug)) throw new Error("Invalid cloud app identity");
  const resource = connectionUrl(input.session.resource, input.allowLoopback), http = input.http;
  let session2 = { ...input.session }, sessionId = null, initialized = false, initializing = null, sequence = 0;
  const credentials = async () => {
    if (session2.expiresAt - Date.now() < 3e4) {
      session2 = await refreshSession(http, session2);
      await input.saveSession(session2);
    }
    return session2.accessToken;
  };
  const post = async (body) => {
    const token2 = await credentials();
    const reply = await http(resource, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token2}`,
        "content-type": "application/json",
        accept: "application/json, text/event-stream",
        "mcp-protocol-version": "2025-11-25",
        ...sessionId ? { "mcp-session-id": sessionId } : {}
      },
      body: JSON.stringify(body)
    });
    if (reply.status === 404) {
      initialized = false;
      sessionId = null;
    }
    return reply;
  };
  const initialize = async () => {
    if (initialized) return;
    if (initializing) return initializing;
    initializing = (async () => {
      const id = ++sequence, reply = await post({
        jsonrpc: "2.0",
        id,
        method: "initialize",
        params: {
          protocolVersion: "2025-11-25",
          capabilities: { elicitation: { form: {} } },
          clientInfo: { name: "basalt-obsidian-sync", version: "0.1.0" }
        }
      });
      const result = envelope(reply, id);
      if (result.protocolVersion !== "2025-11-25")
        throw new Error("Signalbox does not support this device protocol");
      sessionId = reply.headers["mcp-session-id"] ?? null;
      const ready = await post({ jsonrpc: "2.0", method: "notifications/initialized" });
      if (ready.status !== 202 && ready.status !== 200 && ready.status !== 204)
        throw new Error("Cloud session did not initialize");
      initialized = true;
    })().finally(() => {
      initializing = null;
    });
    return initializing;
  };
  const call = async (tool, args) => {
    await initialize();
    const id = ++sequence, path3 = input.appId === void 0 ? `tools[${JSON.stringify(input.appSlug)}].${tool}` : tool;
    const result = envelope(
      await post({
        jsonrpc: "2.0",
        id,
        method: "tools/call",
        params: {
          name: "call",
          arguments: {
            calls: {
              path: path3,
              ...input.appId === void 0 ? {} : { app: input.appId },
              input: args
            }
          }
        }
      }),
      id
    );
    let payload = result.structuredContent;
    if (payload === void 0 && Array.isArray(result.content))
      for (const value2 of result.content) {
        const item = object(value2);
        if (item.type === "text" && typeof item.text === "string") {
          payload = JSON.parse(item.text);
          break;
        }
      }
    const outcome = object(payload);
    if (outcome.status !== "completed")
      throw new Error("Cloud sync did not complete. No local changes were discarded.");
    const execution = object(outcome.execution);
    if (execution.ok !== true) throw new Error("Cloud sync execution failed");
    const value = object(execution.value);
    if (value.path !== path3) throw new Error("Cloud returned a result for another tool");
    if (value.ok !== true) {
      const error = object(value.error);
      throw new RemoteToolError(
        typeof error.kind === "string" ? error.kind : "ToolFailure",
        typeof error.message === "string" ? error.message : "Cloud sync was refused"
      );
    }
    return value.value;
  };
  return {
    call,
    async close() {
      if (!sessionId) return;
      try {
        await http(resource, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${await credentials()}`,
            "mcp-session-id": sessionId,
            "mcp-protocol-version": "2025-11-25"
          }
        });
      } finally {
        sessionId = null;
        initialized = false;
      }
    }
  };
}

// clients/obsidian/binary-remote.ts
var hash = (data, key, length) => {
  const value = text(data, key);
  if (!new RegExp(`^[0-9a-f]{${length}}$`, "u").test(value))
    throw new Error("Invalid cloud file identity");
  return value;
};
var count = (data, key) => {
  const value = number(data, key);
  if (!Number.isSafeInteger(value) || value < 0)
    throw new Error("Invalid cloud byte or part count");
  return value;
};
var identity = (value) => {
  const data = object(value);
  return { oid: hash(data, "oid", 64), bytes: count(data, "bytes") };
};
function createBinaryRemote(call) {
  return {
    async info(input) {
      const value = await call("fileInfo", input);
      if (value === null) return null;
      const data = object(value);
      return {
        at: hash(data, "at", 40),
        path: text(data, "path"),
        blob: hash(data, "blob", 40),
        bytes: count(data, "bytes"),
        attachment: data.attachment === null ? null : identity(data.attachment)
      };
    },
    async beginAttachment(input) {
      const data = object(await call("beginAttachment", input));
      if (data.state !== "present" && data.state !== "uploading")
        throw new Error("Invalid cloud upload state");
      if (!Array.isArray(data.missing) || data.missing.some((value) => !Number.isSafeInteger(value) || Number(value) < 0))
        throw new Error("Invalid missing upload parts");
      const missing = data.missing.map((value) => Number(value));
      return {
        ...identity(data),
        state: data.state,
        upload: hash(data, "upload", 64),
        partBytes: count(data, "partBytes"),
        parts: count(data, "parts"),
        expiresAt: count(data, "expiresAt"),
        missing,
        next: data.next === null ? null : count(data, "next")
      };
    },
    async uploadAttachmentPart(input) {
      const data = object(await call("uploadAttachmentPart", input));
      return { part: count(data, "part"), bytes: count(data, "bytes") };
    },
    async completeAttachment(input) {
      const data = object(await call("completeAttachment", input));
      if (data.state !== "present" && data.state !== "verifying")
        throw new Error("Invalid verification state");
      return {
        ...identity(data),
        state: data.state,
        next: data.next === null ? null : count(data, "next")
      };
    },
    async cancelAttachment(input) {
      const data = object(await call("cancelAttachment", input));
      return { next: data.next === null ? null : count(data, "next") };
    },
    async download(input) {
      const value = await call("readAttachment", input);
      if (value === null) return null;
      const data = object(value);
      return {
        blob: hash(data, "blob", 40),
        bytes: count(data, "bytes"),
        offset: count(data, "offset"),
        next: data.next === null ? null : count(data, "next"),
        contentBase64: typeof data.contentBase64 === "string" ? data.contentBase64 : (() => {
          throw new Error("Attachment reply omitted bytes");
        })()
      };
    }
  };
}
async function readChanges(call, input) {
  const data = object(await call("changes", input));
  const revision3 = (value) => value === null ? null : hash({ value }, "value", 40);
  const cursor = (value) => {
    const item = object(value);
    if (!Array.isArray(item.frames) || item.frames.length > 33)
      throw new Error("Invalid cloud change cursor");
    return {
      from: revision3(item.from),
      to: hash(item, "to", 40),
      frames: item.frames.map((value2) => {
        const frame = object(value2);
        return {
          name: typeof frame.name === "string" ? frame.name : "",
          after: typeof frame.after === "string" ? frame.after : ""
        };
      })
    };
  };
  if (!Array.isArray(data.entries)) throw new Error("Cloud changes omitted entries");
  return {
    from: revision3(data.from),
    to: hash(data, "to", 40),
    entries: data.entries.map((value) => {
      const item = object(value);
      return {
        path: text(item, "path"),
        before: revision3(item.before),
        after: revision3(item.after)
      };
    }),
    next: data.next === null ? null : cursor(data.next)
  };
}

// clients/obsidian/import-remote.ts
var integer = (data, key) => {
  const value = number(data, key);
  if (!Number.isSafeInteger(value) || value < 0) throw new Error("Invalid initial import usage");
  return value;
};
var usage = (raw) => {
  const data = object(raw);
  return {
    classA: integer(data, "classA"),
    classB: integer(data, "classB"),
    readBytes: integer(data, "readBytes")
  };
};
function decodeImportStatus(raw) {
  const data = object(raw);
  if (data.state !== "planning" && data.state !== "ready" && data.state !== "complete")
    throw new Error("Invalid initial import state");
  return {
    id: text(data, "id"),
    state: data.state,
    nextPage: integer(data, "nextPage"),
    files: integer(data, "files"),
    bytes: integer(data, "bytes"),
    confirmed: integer(data, "confirmed"),
    omitted: integer(data, "omitted"),
    manifest: typeof data.manifest === "string" ? data.manifest : "",
    reserved: usage(data.reserved),
    used: usage(data.used),
    reservedCostMicros: integer(data, "reservedCostMicros"),
    usedCostMicros: integer(data, "usedCostMicros"),
    expiresAt: integer(data, "expiresAt")
  };
}
var methods = /* @__PURE__ */ new Map([
  ["listNotes", "list"],
  ["readNote", "read"],
  ["applyNotes", "apply"],
  ["operationStatus", "receipt"],
  ["changes", "changes"],
  ["fileInfo", "info"],
  ["readAttachment", "attachment"],
  ["beginAttachment", "beginAttachment"],
  ["uploadAttachmentPart", "uploadAttachmentPart"],
  ["completeAttachment", "completeAttachment"],
  ["cancelAttachment", "cancelAttachment"]
]);
function initialTransport(raw) {
  let id = null;
  const initial = {
    current: async () => {
      const value = await raw("importStatus", {});
      return value === null ? null : decodeImportStatus(value);
    },
    plan: async (input) => decodeImportStatus(await raw("planImport", input)),
    finish: async (id2) => decodeImportStatus(await raw("finishImport", { id: id2 })),
    activate: (value) => {
      id = value;
    }
  };
  return {
    initial,
    call: (name, input) => {
      const method = methods.get(name);
      return id && method ? raw("importRequest", { id, request: { operation: "drive", method, input } }) : raw(name, input);
    }
  };
}

// clients/obsidian/remote.ts
var oid = (data, key) => {
  const value = text(data, key);
  if (!/^[0-9a-f]{40}$/u.test(value)) throw new Error("Invalid cloud revision");
  return value;
};
var nullableOid = (data, key) => data[key] === null ? null : oid(data, key);
function decodeReceipt(value) {
  const data = object(value), common = { operation: text(data, "operation"), ref: text(data, "ref"), oid: oid(data, "oid") };
  if (data.state === "landed")
    return { ...common, state: "landed", previous: oid(data, "previous") };
  if (data.state !== "conflict" || !Array.isArray(data.conflicts))
    throw new Error("Cloud write did not return a final receipt");
  return {
    ...common,
    state: "conflict",
    main: oid(data, "main"),
    conflicts: data.conflicts.map((value2) => {
      const item = object(value2);
      if (item.reason !== "content" && item.reason !== "unsupported")
        throw new Error("Unknown conflict kind");
      return {
        path: text(item, "path"),
        reason: item.reason,
        base: nullableOid(item, "base"),
        ours: oid(item, "ours"),
        theirs: oid(item, "theirs"),
        baseBlob: nullableOid(item, "baseBlob"),
        oursBlob: nullableOid(item, "oursBlob"),
        theirsBlob: nullableOid(item, "theirsBlob")
      };
    })
  };
}
function createRemote(input) {
  if (!/^[A-Za-z0-9_-]+$/u.test(input.appSlug)) throw new Error("Invalid cloud app identity");
  const transport = createTransport(input), imported = initialTransport(transport.call), call = imported.call, binary = createBinaryRemote(call);
  return {
    initial: imported.initial,
    ...binary,
    changes: (args) => readChanges(call, args),
    async list(args = {}) {
      const data = object(
        await call("listNotes", { ...args, limit: Math.min(args.limit ?? 50, 50) })
      );
      if (!Array.isArray(data.entries)) throw new Error("Cloud listing omitted its entries");
      const at = oid(data, "at"), entries = data.entries.map((value) => {
        const item = object(value);
        if (item.kind !== "file" && item.kind !== "directory")
          throw new Error("Invalid cloud entry");
        return { path: text(item, "path"), kind: item.kind, oid: oid(item, "oid") };
      });
      let next = null;
      if (data.next !== null) {
        const cursor = object(data.next);
        next = {
          at: oid(cursor, "at"),
          path: typeof cursor.path === "string" ? cursor.path : "",
          after: text(cursor, "after")
        };
      }
      return {
        at,
        entries,
        next,
        ...data.importBase === void 0 ? {} : { importBase: oid(data, "importBase") }
      };
    },
    async read(args) {
      {
        const info = await binary.info({ path: args.path, at: args.at });
        if (!info) return null;
        if (info.attachment) {
          const content2 = new TextDecoder().decode(encodeAttachmentPointer(info.attachment)), offset = args.offset ?? 0, end = Math.min(content2.length, offset + (args.maxBytes ?? 65536));
          if (offset < 0 || offset > content2.length)
            throw new Error("Invalid virtual attachment offset");
          return {
            blob: info.blob,
            bytes: content2.length,
            content: content2.slice(offset, end),
            next: end === content2.length ? null : end
          };
        }
      }
      let value;
      try {
        value = await call("readNote", {
          ...args,
          maxBytes: Math.min(args.maxBytes ?? 65536, 65536)
        });
      } catch (failure) {
        if (!(failure instanceof RemoteToolError) || failure.kind !== "Truncated") throw failure;
        value = await call("readNote", { ...args, maxBytes: 8192 });
      }
      if (value === null) return null;
      const data = object(value), next = data.next === null ? null : number(data, "next");
      return {
        content: typeof data.content === "string" ? data.content : (() => {
          throw new Error("Cloud note has no content");
        })(),
        blob: oid(data, "blob"),
        bytes: number(data, "bytes"),
        next
      };
    },
    async apply(args) {
      return decodeReceipt(await call("applyNotes", args));
    },
    async resolve(args) {
      return decodeReceipt(await call("resolveConflict", args));
    },
    async receipt(operation) {
      const value = await call("operationStatus", { operation });
      if (value === null) return null;
      const data = object(value);
      if (data.state === "opened" || data.state === "saved")
        return {
          state: data.state,
          operation: text(data, "operation"),
          ref: text(data, "ref"),
          oid: oid(data, "oid")
        };
      return decodeReceipt(data);
    },
    close: transport.close
  };
}

// clients/obsidian/import-state.ts
function decodeImportEntry(raw) {
  const value = object(raw), path3 = text(value, "path"), hash2 = text(value, "hash"), bytes = number(value, "bytes");
  if (!safePath(path3) || value.kind !== "note" && value.kind !== "attachment" || !Number.isSafeInteger(bytes) || bytes < 0 || !new RegExp(`^[a-f0-9]{${value.kind === "note" ? 40 : 64}}$`, "u").test(hash2))
    throw new Error("Invalid saved initial import file");
  return { path: path3, hash: hash2, bytes, kind: value.kind };
}
function decodeInitialState(raw) {
  if (raw === void 0) return void 0;
  const data = object(raw);
  if (data.phase !== "planning" && data.phase !== "ready" && data.phase !== "complete" || !Array.isArray(data.entries) || !Number.isSafeInteger(data.nextPage) || typeof data.nextPage !== "number" || data.nextPage < 0)
    throw new Error("Invalid saved initial import");
  const done = dictionary();
  for (const [path3, value] of Object.entries(object(data.done))) {
    if (!safePath(path3) || value !== true) throw new Error("Invalid saved import receipt");
    done[path3] = true;
  }
  let pending = null;
  if (data.pending !== null) {
    const value = object(data.pending), page = number(value, "page");
    if (!Number.isSafeInteger(page) || page < 0 || !Array.isArray(value.entries) || typeof value.final !== "boolean")
      throw new Error("Invalid saved import page");
    let removed;
    if (value.removed !== void 0) {
      if (!Array.isArray(value.removed) || value.removed.some((path3) => typeof path3 !== "string" || !safePath(path3)))
        throw new Error("Invalid saved removed-source paths");
      removed = value.removed.map((path3) => String(path3));
    }
    pending = {
      id: text(value, "id"),
      page,
      entries: value.entries.map(decodeImportEntry),
      final: value.final,
      ...removed ? { removed } : {}
    };
  }
  return {
    phase: data.phase,
    entries: data.entries.map(decodeImportEntry),
    done,
    nextPage: data.nextPage,
    pending
  };
}

// clients/obsidian/state.ts
var revision2 = (value) => {
  if (typeof value !== "string" || !/^[a-f0-9]{40}$/u.test(value))
    throw new Error("Saved sync revision is invalid");
  return value;
};
var nullableRevision = (value) => value === null ? null : revision2(value);
var path2 = (value) => {
  if (!safePath(value)) throw new Error("Saved sync path is invalid");
  return value;
};
var content = (value) => {
  if (value === null) return null;
  if (typeof value !== "string" || value.length > maximumFileBytes || new TextEncoder().encode(value).length > maximumFileBytes)
    throw new Error("Saved sync edit is invalid");
  return value;
};
var hashes = (input) => dictionary(
  Object.entries(object(input)).map(([key, value]) => [path2(key), nullableRevision(value)])
);
function decodeState(input) {
  if (input === null || input === void 0) return null;
  const data = object(input);
  if (data.version !== 1) throw new Error("Saved sync state needs a different plugin version");
  const files = dictionary();
  for (const [key, value] of Object.entries(object(data.files))) {
    const item = object(value);
    files[path2(key)] = {
      at: revision2(item.at),
      local: nullableRevision(item.local),
      cloud: nullableRevision(item.cloud)
    };
  }
  let pending = null;
  if (data.pending !== null) {
    const item = object(data.pending), request = object(item.request);
    if (item.kind !== "apply" && item.kind !== "resolve" || !Array.isArray(request.edits) || !request.edits.length || request.edits.length > 100)
      throw new Error("Saved sync operation is invalid");
    const edits = request.edits.map((value) => {
      const edit = object(value);
      return { path: path2(text(edit, "path")), content: content(edit.content) };
    });
    const operation = text(request, "operation");
    if (operation.length > 128) throw new Error("Saved sync operation id is invalid");
    const attempts = number(item, "attempts");
    if (!Number.isSafeInteger(attempts) || attempts < 0)
      throw new Error("Saved sync attempt count is invalid");
    const sent = hashes(item.sent);
    if (edits.some((edit) => !(edit.path in sent)))
      throw new Error("Saved sync operation has no file hashes");
    pending = {
      kind: item.kind,
      request: { base: revision2(request.base), operation, edits },
      sent,
      attempts
    };
    if (item.resolution !== void 0) {
      const value = object(item.resolution);
      pending.resolution = {
        ref: text(value, "ref"),
        expected: revision2(value.expected),
        main: revision2(value.main)
      };
    }
    if (item.kind === "resolve" && !pending.resolution)
      throw new Error("Saved conflict resolution is incomplete");
    if (item.before !== void 0)
      pending.before = dictionary(
        Object.entries(object(item.before)).map(([key, value]) => [path2(key), content(value)])
      );
  }
  if (!Array.isArray(data.conflicts) || !Array.isArray(data.unsupported))
    throw new Error("Saved sync state is incomplete");
  const conflicts = data.conflicts.map((value) => {
    const receipt = decodeReceipt(value);
    if (receipt.state !== "conflict") throw new Error("Saved conflict receipt is invalid");
    return receipt;
  });
  const unsupported = data.unsupported.map((value) => {
    if (typeof value !== "string") throw new Error("Saved unsupported path is invalid");
    return value;
  });
  const initial = decodeInitialState(data.initial);
  return {
    ...initial ? { initial } : {},
    version: 1,
    importId: text(data, "importId"),
    head: nullableRevision(data.head),
    importBase: data.importBase === void 0 ? null : nullableRevision(data.importBase),
    pulledHead: data.pulledHead === void 0 ? null : nullableRevision(data.pulledHead),
    files,
    pending,
    conflicts,
    unsupported
  };
}

// clients/obsidian/store.ts
var record = (value) => typeof value === "object" && value !== null && !Array.isArray(value) ? { ...value } : {};
function decodeDocument(input, makeDevice) {
  const data = record(input);
  const device = typeof data.device === "string" && /^[a-z0-9]{8,32}$/u.test(data.device) ? data.device : makeDevice();
  const pins = Array.isArray(data.pins) ? data.pins.filter((pin) => typeof pin === "string" && pin.length > 0) : [];
  return {
    version: 1,
    device,
    // Raw values; each one goes through decodeState when its app opens.
    states: record(data.states),
    binary: record(data.binary),
    recoveries: Array.isArray(data.recoveries) ? data.recoveries.filter((value) => typeof value === "string") : [],
    transfers: Array.isArray(data.transfers) ? data.transfers.filter((value) => typeof value === "string") : [],
    pins,
    lastSynced: typeof data.lastSynced === "number" ? data.lastSynced : null
  };
}
var newDeviceId = () => [...crypto.getRandomValues(new Uint8Array(16))].map((x) => x.toString(16).padStart(2, "0")).join("");
async function openStore(io, makeDevice = newDeviceId) {
  const raw = await io.load();
  const doc = decodeDocument(raw, makeDevice);
  let chain = Promise.resolve();
  const persist = () => {
    const write = chain.then(() => io.save(structuredClone(doc)));
    chain = write.catch(() => {
    });
    return write;
  };
  if (record(raw).device !== doc.device) await persist();
  return {
    device: doc.device,
    secretKey: `basalt-sync-${doc.device}`,
    states(appId) {
      return {
        async load() {
          return decodeState(doc.states[appId] ?? null);
        },
        async save(state) {
          doc.states[appId] = structuredClone(state);
          await persist();
        }
      };
    },
    binary(appId) {
      return {
        load: async () => decodeBinaryState(doc.binary[appId] ?? null),
        save: async (value) => {
          doc.binary[appId] = structuredClone(value);
          await persist();
        }
      };
    },
    recoveries: {
      get: () => [...doc.recoveries],
      async add(path3) {
        if (!doc.recoveries.includes(path3)) doc.recoveries.push(path3);
        await persist();
      }
    },
    transfers: {
      get: () => [...doc.transfers],
      async add(path3) {
        if (!doc.transfers.includes(path3)) doc.transfers.push(path3);
        await persist();
      },
      async remove(path3) {
        doc.transfers = doc.transfers.filter((value) => value !== path3);
        await persist();
      }
    },
    pins: {
      get: () => [...doc.pins],
      async set(value) {
        doc.pins = [...value];
        await persist();
      }
    },
    lastSynced: () => doc.lastSynced,
    async markSynced(at) {
      doc.lastSynced = at;
      await persist();
    },
    /** Resolves once every queued write has finished. */
    flush: () => chain
  };
}

// clients/obsidian/plugin/obsidian-binary.ts
function desktopReader(plugin) {
  const { adapter } = plugin.app.vault;
  if (!import_obsidian.Platform.isDesktopApp || !(adapter instanceof import_obsidian.FileSystemAdapter)) return void 0;
  if (!plugin.manifest.dir)
    throw new Error("Obsidian did not provide this plugin's installation path");
  const module2 = require_desktop_reader();
  const exported = object(module2);
  if (typeof exported.createReader !== "function")
    throw new Error("The desktop byte reader is invalid. Reinstall Signalbox Sync.");
  const raw = exported.createReader(adapter.getBasePath()), reader = object(raw);
  const snapshot = reader.snapshot, read = reader.read;
  if (typeof snapshot !== "function" || typeof read !== "function")
    throw new Error("The desktop byte reader is invalid");
  return {
    async snapshot(path3) {
      const raw2 = await snapshot(path3);
      if (raw2 === null) return null;
      const value = object(raw2);
      return { stamp: text(value, "stamp"), bytes: number(value, "bytes") };
    },
    async read(path3, expected, offset, length) {
      const raw2 = await read(path3, expected, offset, length);
      if (!(raw2 instanceof Uint8Array) || raw2.length !== length)
        throw new Error("The desktop byte reader returned an invalid range");
      return raw2.slice();
    }
  };
}
function obsidianBinaryIo(plugin, local, store, appId, signal) {
  if (!plugin.manifest.dir || !/^[A-Za-z0-9_-]{1,128}$/u.test(appId))
    throw new Error("Invalid local sync identity");
  const { vault, metadataCache } = plugin.app, native = desktopReader(plugin);
  return createBinaryIo({
    adapter: vault.adapter,
    vault,
    local,
    privateRoot: (0, import_obsidian.normalizePath)(`${plugin.manifest.dir}/cache/${appId}`),
    transferRoot: `Signalbox transfers/${store.device}/${appId}`,
    ownership: store.transfers,
    id: newDeviceId,
    signal,
    ...native ? { desktop: native } : {},
    links: async (path3) => {
      const file = vault.getFileByPath(path3);
      if (!file) return [];
      const metadata = metadataCache.getFileCache(file), links = [...metadata?.embeds ?? [], ...metadata?.links ?? []];
      return [
        ...new Set(
          links.map(
            (link) => metadataCache.getFirstLinkpathDest(link.link, path3)?.path ?? (0, import_obsidian.parseLinktext)(link.link).path
          )
        )
      ];
    }
  });
}

// clients/obsidian/attachment-proxy.ts
function attachmentProxy(input) {
  const listeners = /* @__PURE__ */ new Set(), notify = () => {
    for (const listener of listeners) listener();
  };
  const connected = () => {
    const value = input.current();
    if (!value) throw new Error("Connect this vault to Signalbox first");
    return value;
  };
  const port = {
    mode: () => input.mode,
    summary: () => input.current()?.summary() ?? { unsynced: [], cloudOnly: 0, downloading: 0, failed: [] },
    pins: () => input.mode === "full" ? [] : input.pins.get(),
    entries: () => input.current()?.entries?.() ?? [],
    async setPinned(folder, pinned) {
      const current = input.current();
      if (current) await current.setPinned(folder, pinned);
      else {
        const values = new Set(input.pins.get());
        if (pinned) values.add(folder);
        else values.delete(folder);
        await input.pins.set([...values]);
      }
      notify();
    },
    async noteOpened(path3, signal) {
      await input.current()?.noteOpened(path3, signal);
    },
    async describeVersion(path3, at) {
      return await input.current()?.describeVersion?.(path3, at) ?? null;
    },
    async resolveMixed(ref, choices) {
      const resolve = connected().resolveMixed;
      if (!resolve) throw new Error("This device cannot resolve attachments yet");
      await resolve(ref, choices);
      notify();
    },
    async download(path3, signal) {
      const download = connected().download;
      if (!download) throw new Error("Attachment downloads are unavailable");
      await download(path3, signal);
      notify();
    },
    async evict(path3) {
      const evict = connected().evict;
      if (!evict) throw new Error("Cache removal is unavailable");
      await evict(path3);
      notify();
    },
    onChange(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }
  };
  return { port, notify, close: () => listeners.clear() };
}

// clients/obsidian/plugin/main.ts
var import_obsidian8 = require("obsidian");

// clients/obsidian/pull.ts
async function pull(input) {
  const { state, local, remote, save, signal } = input;
  signal?.throwIfAborted();
  const head = (await remote.list({ limit: 1 })).at;
  const from = state.pulledHead ?? null;
  if (from === head) return;
  const blocked = new Set(
    state.conflicts.flatMap((conflict) => conflict.conflicts.map((file) => file.path))
  ), observed = /* @__PURE__ */ new Set();
  let complete = true;
  const apply = async (path3, blob) => {
    signal?.throwIfAborted();
    if (!safePath(path3)) throw new Error("Cloud returned an unsafe vault path");
    observed.add(path3);
    if (!isTextPath(path3) && !local.binary) {
      if (!state.unsupported.includes(path3)) state.unsupported.push(path3);
      return;
    }
    if (blocked.has(path3)) return;
    const baseline = state.files[path3], current = await (local.inspect ?? local.read).call(local, path3), currentBlob = current === null ? null : await blobId(current);
    if (blob !== null && blob === currentBlob) {
      state.files[path3] = { at: head, local: currentBlob, cloud: blob };
      return;
    }
    if (baseline ? currentBlob !== baseline.local : current !== null) {
      if (baseline && blob === baseline.cloud && baseline.cloud === baseline.local)
        state.files[path3] = { ...baseline, at: head };
      return;
    }
    if (blob === null) {
      if (baseline && await local.replace(path3, current, null, { at: head })) {
        delete state.files[path3];
      }
      return;
    }
    if (blob === currentBlob) {
      state.files[path3] = { at: head, local: currentBlob, cloud: blob };
      return;
    }
    let content2 = "", offset = 0, next = 0;
    while (next !== null) {
      signal?.throwIfAborted();
      const page = await remote.read({ path: path3, at: head, offset, maxBytes: 65536 });
      if (!page || page.blob !== blob || page.bytes > maximumFileBytes)
        throw new Error("Cloud note is unavailable or exceeds the device file limit");
      if (page.next !== null && page.next <= offset)
        throw new Error("Cloud download did not advance");
      content2 += page.content;
      next = page.next;
      if (next !== null) offset = next;
    }
    if (await blobId(content2) !== blob)
      throw new Error("Cloud note hash did not match its manifest");
    signal?.throwIfAborted();
    if (await local.replace(path3, current, content2, { at: head })) {
      state.files[path3] = { at: head, local: blob, cloud: blob };
    } else complete = false;
  };
  if (remote.changes) {
    let cursor = null;
    do {
      signal?.throwIfAborted();
      const page = await remote.changes({
        from,
        to: head,
        ...cursor ? { cursor } : {},
        limit: 50
      });
      if (page.from !== from || page.to !== head)
        throw new Error("Cloud changes moved their pinned revisions");
      for (const entry of page.entries) await apply(entry.path, entry.after);
      await save();
      if (page.next && JSON.stringify(page.next) === JSON.stringify(cursor))
        throw new Error("Cloud change cursor did not advance");
      cursor = page.next;
    } while (cursor);
    if (from === null) {
      for (const path3 of Object.keys(state.files)) if (!observed.has(path3)) await apply(path3, null);
    }
  } else {
    const visit = async (path3) => {
      let cursor = null;
      do {
        signal?.throwIfAborted();
        const page = await remote.list({
          at: head,
          path: path3,
          limit: 100,
          ...cursor ? { cursor } : {}
        });
        if (page.at !== head) throw new Error("Cloud listing changed its pinned revision");
        for (const entry of page.entries)
          if (entry.kind === "directory") await visit(entry.path);
          else await apply(entry.path, entry.oid);
        await save();
        cursor = page.next;
      } while (cursor);
    };
    await visit("");
    for (const path3 of Object.keys(state.files)) if (!observed.has(path3)) await apply(path3, null);
  }
  if (complete && from !== null) {
    for (const [path3, file] of Object.entries(state.files))
      if (!observed.has(path3) && file.at === from) state.files[path3] = { ...file, at: head };
  }
  state.head = head;
  if (complete) state.pulledHead = head;
  await save();
}

// clients/obsidian/initial-import.ts
function initialImport(input) {
  const { state, local, save } = input, remote = input.remote.initial;
  const positions = new Map(state.initial?.entries.map((entry2, index) => [entry2.path, index]));
  let confirmed = Object.keys(state.initial?.done ?? {}).length, totalBytes = state.initial?.entries.reduce((sum, entry2) => sum + entry2.bytes, 0) ?? 0;
  const check = () => input.signal?.throwIfAborted();
  const entry = async (file) => {
    check();
    if (!safePath(file.path)) return null;
    if (local.importEntry) return local.importEntry(file);
    if (!isTextPath(file.path) || file.bytes > maximumTextBytes)
      throw new Error(
        `Import ${file.path} from your Mac; this device cannot read it within its file limit. Its bytes are kept.`
      );
    const content2 = await local.read(file.path);
    return content2 === null ? null : {
      path: file.path,
      kind: "note",
      bytes: new TextEncoder().encode(content2).length,
      hash: await blobId(content2)
    };
  };
  const done = () => {
    state.initial = {
      phase: "complete",
      entries: [],
      done: dictionary(),
      nextPage: 0,
      pending: null
    };
    positions.clear();
    confirmed = 0;
    totalBytes = 0;
    remote?.activate(null);
  };
  const page = async (value) => {
    if (!remote || !state.initial) throw new Error("Initial import is not configured");
    const initial = state.initial;
    initial.pending = value;
    await save();
    check();
    const result = await remote.plan(value);
    if (result.id !== state.importId || result.nextPage !== value.page + 1)
      throw new Error("Cloud import manifest did not acknowledge this page");
    if (initial.phase === "ready") {
      for (const update of value.entries) {
        const index = positions.get(update.path);
        totalBytes += update.bytes - (index === void 0 ? 0 : initial.entries[index].bytes);
        if (index === void 0) {
          positions.set(update.path, initial.entries.length);
          initial.entries.push(update);
        } else initial.entries[index] = update;
      }
    }
    for (const path3 of value.removed ?? [])
      if (!initial.done[path3]) {
        initial.done[path3] = true;
        confirmed++;
      }
    initial.nextPage = result.nextPage;
    if (result.state === "ready") initial.phase = "ready";
    initial.pending = null;
    await save();
    input.progress?.();
  };
  const active = () => !!remote && state.initial?.phase === "ready";
  const pending = (path3) => positions.has(path3) && state.initial?.done[path3] !== true;
  return {
    active,
    pending,
    progress: () => state.initial?.phase === "planning" || state.initial?.phase === "ready" ? { phase: state.initial.phase, files: positions.size, bytes: totalBytes, confirmed } : void 0,
    async prepare() {
      if (!remote) return;
      if (state.initial?.phase === "complete") {
        remote.activate(null);
        return;
      }
      const current = await remote.current();
      if (current?.state === "complete") {
        done();
        await save();
        return;
      }
      if (current && current.id !== state.importId)
        throw new Error(
          "The initial import is still running on another device. Keep your Mac open until it finishes."
        );
      if (!state.initial) {
        if (local.initialSource === false)
          throw new Error("Import this vault on your Mac first. Your iPhone's files are kept.");
        const entries = [];
        for (const file of await local.files()) {
          const value = await entry(file);
          if (value) entries.push(value);
        }
        state.initial = {
          phase: "planning",
          entries,
          done: dictionary(),
          nextPage: 0,
          pending: null
        };
        for (const [index, entry2] of entries.entries()) positions.set(entry2.path, index);
        totalBytes = entries.reduce((sum, entry2) => sum + entry2.bytes, 0);
        await save();
      }
      const initial = state.initial;
      if (initial.pending) await page(initial.pending);
      if (current?.state === "ready" && current.expiresAt <= Date.now())
        await page({ id: state.importId, page: initial.nextPage, entries: [], final: true });
      if (initial.phase === "planning") {
        let offset = initial.nextPage * 100;
        do {
          const batch = initial.entries.slice(offset, offset + 100);
          await page({
            id: state.importId,
            page: initial.nextPage,
            entries: batch,
            final: offset + batch.length >= initial.entries.length
          });
          offset += batch.length;
        } while (initial.phase === "planning");
      }
      remote.activate(state.importId);
    },
    async track(file) {
      if (!active()) return;
      const initial = state.initial;
      const value = await entry(file);
      if (!value) return;
      const index = positions.get(file.path), prior = index === void 0 ? void 0 : initial.entries[index];
      if (prior?.hash === value.hash && prior.bytes === value.bytes && prior.kind === value.kind)
        return;
      await page({ id: state.importId, page: initial.nextPage, entries: [value], final: true });
    },
    acknowledge(paths) {
      if (!active()) return;
      for (const path3 of paths)
        if (pending(path3)) {
          state.initial.done[path3] = true;
          confirmed++;
        }
    },
    async finish(paths) {
      if (!remote || !active()) return false;
      const initial = state.initial;
      const removed = initial.entries.filter((file) => !paths.has(file.path) && !initial.done[file.path]).map((file) => file.path);
      for (let offset = 0; offset < removed.length; offset += 100)
        await page({
          id: state.importId,
          page: initial.nextPage,
          entries: [],
          removed: removed.slice(offset, offset + 100),
          final: true
        });
      if (initial.entries.some((file) => !initial.done[file.path])) return false;
      check();
      const result = await remote.finish(state.importId);
      if (result.state !== "complete")
        throw new Error("Cloud initial import still has unconfirmed files");
      done();
      await save();
      return true;
    }
  };
}

// clients/obsidian/sync.ts
async function createSync(input) {
  const { local, remote, store, id } = input;
  const state = await store.load() ?? {
    version: 1,
    importId: id(),
    head: null,
    files: dictionary(),
    pending: null,
    conflicts: [],
    unsupported: []
  };
  if (state.version !== 1) throw new Error("This sync state needs a newer plugin");
  state.files = dictionary(Object.entries(state.files));
  if (state.pending) {
    state.pending.sent = dictionary(Object.entries(state.pending.sent));
    if (state.pending.before)
      state.pending.before = dictionary(Object.entries(state.pending.before));
  }
  const localHashes = /* @__PURE__ */ new Map();
  let running = null, error = null, checkpointFailed = false, queued = 0;
  const save = () => store.save(structuredClone(state));
  const importing = initialImport({
    state,
    local,
    remote,
    save,
    ...input.signal ? { signal: input.signal } : {},
    ...input.progress ? { progress: input.progress } : {}
  });
  const status = () => ({
    ...importing.progress() ? { initial: importing.progress() } : {},
    state: running ? "syncing" : error ? "offline" : state.conflicts.length ? "conflict" : state.unsupported.length ? "attention" : "idle",
    queued: state.pending?.request.edits.length ?? queued,
    conflicts: state.conflicts.length,
    unsupported: [...state.unsupported],
    error,
    head: state.head,
    importId: state.importId
  });
  const landedBlobs = async (pending, receipt) => {
    const blobs = /* @__PURE__ */ new Map();
    if (receipt.previous === pending.request.base) {
      for (const edit of pending.request.edits)
        blobs.set(edit.path, pending.sent[edit.path] ?? null);
      return blobs;
    }
    if (!remote.changes) return blobs;
    const wanted = new Set(pending.request.edits.map((edit) => edit.path));
    let cursor = null;
    do {
      const page = await remote.changes({
        from: receipt.previous,
        to: receipt.oid,
        ...cursor ? { cursor } : {},
        limit: 100
      });
      for (const entry of page.entries)
        if (wanted.has(entry.path)) blobs.set(entry.path, entry.after);
      if (page.next && JSON.stringify(page.next) === JSON.stringify(cursor))
        throw new Error("Cloud change cursor did not advance");
      cursor = page.next;
    } while (cursor && blobs.size < wanted.size);
    return blobs;
  };
  const finish = async (pending, receipt) => {
    importing.acknowledge(pending.request.edits.map((edit) => edit.path));
    input.progress?.();
    if (receipt.state === "conflict") {
      state.conflicts = state.conflicts.filter((conflict) => conflict.ref !== receipt.ref);
      state.conflicts.push(receipt);
    } else {
      const landed = await landedBlobs(pending, receipt);
      for (const edit of pending.request.edits) {
        const sent = pending.sent[edit.path] ?? null;
        if (pending.kind === "resolve" && pending.before)
          await local.replace(edit.path, pending.before[edit.path] ?? null, edit.content, {
            at: receipt.oid
          });
        const cloud = landed.has(edit.path) ? landed.get(edit.path) : (await remote.read({ path: edit.path, at: receipt.oid, maxBytes: 4 }))?.blob ?? null;
        await local.accept?.(edit.path, receipt.oid, cloud);
        state.files[edit.path] = {
          // A merged result differs from what was sent; keeping the old base makes the next
          // checkpoint merge again instead of overwriting the cloud's half.
          at: cloud === sent ? receipt.oid : pending.request.base,
          local: sent,
          cloud
        };
      }
      if (pending.kind === "resolve")
        state.conflicts = state.conflicts.filter(
          (conflict) => conflict.ref !== pending.resolution?.ref
        );
      state.head = receipt.oid;
    }
    state.pending = null;
    queued = 0;
    await save();
  };
  const deliver = async () => {
    input.signal?.throwIfAborted();
    const pending = state.pending;
    if (!pending) return;
    if (pending.attempts > 0) {
      const receipt2 = await remote.receipt(pending.request.operation);
      if (receipt2?.state === "landed" || receipt2?.state === "conflict") {
        input.signal?.throwIfAborted();
        await finish(pending, receipt2);
        return;
      }
    }
    pending.attempts++;
    await save();
    const receipt = pending.kind === "resolve" && pending.resolution ? await remote.resolve({
      ...pending.resolution,
      operation: pending.request.operation,
      edits: pending.request.edits
    }) : await remote.apply(pending.request);
    input.signal?.throwIfAborted();
    await finish(pending, receipt);
  };
  const submit = async (base, edits) => {
    const sent = dictionary();
    for (const edit of edits)
      sent[edit.path] = edit.content === null ? null : await blobId(edit.content);
    state.pending = {
      kind: "apply",
      request: { base, operation: `sync-${id()}`, edits },
      sent,
      attempts: 0
    };
    await save();
    await deliver();
  };
  const pulling = () => pull({ state, local, remote, save, ...input.signal ? { signal: input.signal } : {} });
  const fetchOnly = async () => {
    if (!state.head || remote.initial && state.initial?.phase !== "complete") return;
    await pulling();
    if (!checkpointFailed) error = null;
  };
  const checkpoint = async () => {
    error = null;
    await importing.prepare();
    await deliver();
    if (!state.head || !state.importBase) {
      const page = await remote.list({ limit: 1 });
      state.head ??= page.at;
      state.importBase = page.importBase ?? null;
      await save();
    }
    state.unsupported = [];
    await pulling();
    const head = state.head;
    const listed = await local.files(), paths = new Set(listed.map((file) => file.path));
    for (const path3 of localHashes.keys()) if (!paths.has(path3)) localHashes.delete(path3);
    const blocked = new Set(
      state.conflicts.flatMap((conflict) => conflict.conflicts.map((file) => file.path))
    );
    const maxPaths = 100, maxBytes = 2 * 1024 * 1024;
    const groups = /* @__PURE__ */ new Map();
    let buffered = 0;
    const send = async (base) => {
      const group = groups.get(base);
      if (!group?.edits.length) return;
      groups.delete(base);
      buffered -= group.bytes;
      await submit(base, group.edits);
    };
    const add = async (base, edit, bytes) => {
      const current = groups.get(base);
      if (current && (current.edits.length >= maxPaths || current.bytes + bytes > maxBytes))
        await send(base);
      if (buffered + bytes > maxBytes) for (const other of groups.keys()) await send(other);
      let group = groups.get(base);
      if (!group) groups.set(base, group = { edits: [], bytes: 0 });
      group.edits.push(edit);
      group.bytes += bytes;
      buffered += bytes;
      queued++;
    };
    for (const file of listed) {
      input.signal?.throwIfAborted();
      if (!safePath(file.path) || !local.binary && (!isTextPath(file.path) || file.bytes > maximumTextBytes)) {
        state.unsupported.push(file.path);
        continue;
      }
      if (blocked.has(file.path)) continue;
      if (importing.active() && !importing.pending(file.path) && state.files[file.path]) continue;
      await importing.track(file);
      const cached = localHashes.get(file.path);
      if (!importing.pending(file.path) && file.stamp !== void 0 && cached?.stamp === file.stamp && state.files[file.path]?.local === cached.hash)
        continue;
      const content2 = await local.read(file.path);
      if (content2 === null) continue;
      const actualBytes = new TextEncoder().encode(content2).length;
      if (actualBytes > maximumFileBytes) {
        state.unsupported.push(file.path);
        continue;
      }
      const hash2 = await blobId(content2), prior = state.files[file.path];
      if (file.stamp !== void 0) localHashes.set(file.path, { stamp: file.stamp, hash: hash2 });
      if (prior?.local === hash2 && !importing.pending(file.path)) continue;
      if (!prior && !state.importBase)
        throw new Error("Update the cloud Obsidian app before importing new files");
      const base = prior?.at ?? (!importing.active() && !await remote.read({ path: file.path, at: head, maxBytes: 4 }) ? head : state.importBase);
      await add(base, { path: file.path, content: content2 }, actualBytes);
    }
    if (!importing.active()) {
      for (const [path3, prior] of Object.entries(state.files))
        if (!paths.has(path3) && !blocked.has(path3) && prior.local !== null)
          await add(prior.at, { path: path3, content: null }, 0);
    }
    for (const base of groups.keys()) await send(base);
    if (state.head !== state.pulledHead) await pulling();
    await save();
    if (await importing.finish(paths)) await checkpoint();
  };
  const run = (work = checkpoint) => {
    if (running) return running;
    running = work().then(() => {
      if (work === checkpoint) checkpointFailed = false;
    }).catch((failure) => {
      error = failure instanceof Error ? failure.message : "Sync failed";
      if (work === checkpoint) checkpointFailed = true;
      throw failure;
    }).finally(() => {
      running = null;
    });
    return running;
  };
  const resolve = async (ref, edits) => {
    if (running) throw new Error("Wait for the current sync to finish");
    const conflict = state.conflicts.find((value) => value.ref === ref);
    if (!conflict) throw new Error("Conflict no longer exists");
    const main = (await remote.list({ limit: 1 })).at;
    const sent = dictionary();
    for (const edit of edits)
      sent[edit.path] = edit.content === null ? null : await blobId(edit.content);
    const before = dictionary();
    for (const edit of edits) before[edit.path] = await local.read(edit.path);
    state.pending = {
      before,
      kind: "resolve",
      resolution: { ref, expected: conflict.oid, main },
      request: { base: main, operation: `resolve-${id()}`, edits },
      sent,
      attempts: 0
    };
    await save();
    await run();
  };
  await save();
  return {
    run: () => run(),
    pull: () => run(fetchOnly),
    resolve,
    status,
    conflicts: () => structuredClone(state.conflicts)
  };
}

// clients/obsidian/controller.ts
var config = (input) => {
  const value = object(input), appId = text(value, "appId"), appSlug = text(value, "appSlug");
  if (!/^[A-Za-z0-9_-]{1,128}$/u.test(appId) || !/^[A-Za-z0-9_-]{1,128}$/u.test(appSlug))
    throw new Error("Invalid Signalbox app identity");
  return { connection: connectionUrl(text(value, "connection")), appId, appSlug };
};
var credential = (input) => {
  if (input.length > 128 * 1024) throw new Error("Saved device credential is invalid");
  return object(JSON.parse(input));
};
function session(input) {
  const value = object(input);
  return {
    resource: connectionUrl(text(value, "resource")),
    clientId: text(value, "clientId"),
    tokenEndpoint: text(value, "tokenEndpoint"),
    revocationEndpoint: value.revocationEndpoint === null ? null : text(value, "revocationEndpoint"),
    accessToken: text(value, "accessToken"),
    refreshToken: typeof value.refreshToken === "string" ? value.refreshToken : "",
    expiresAt: number(value, "expiresAt")
  };
}
function connecting(input) {
  const value = object(input);
  return {
    resource: connectionUrl(text(value, "resource")),
    clientId: text(value, "clientId"),
    tokenEndpoint: text(value, "tokenEndpoint"),
    revocationEndpoint: value.revocationEndpoint === null ? null : text(value, "revocationEndpoint"),
    deviceCode: text(value, "deviceCode"),
    verifier: text(value, "verifier"),
    verificationUrl: text(value, "verificationUrl"),
    userCode: text(value, "userCode"),
    expiresAt: number(value, "expiresAt"),
    interval: number(value, "interval")
  };
}
async function createController(input) {
  const { http, local, secrets, key, changed } = input;
  if (!/^[a-z0-9-]+$/u.test(key)) throw new Error("Invalid device secret storage key");
  let current = null;
  let pending = null;
  const saved = secrets.get(key), pairing = secrets.get(key + "-pending");
  if (saved) {
    const data = credential(saved);
    current = {
      config: config(data.config),
      session: session(data.session),
      paused: data.paused === true
    };
  }
  if (pairing) {
    const data = credential(pairing);
    pending = {
      config: config(data.config),
      request: connecting(data.request),
      previousPaused: data.previousPaused === true
    };
  }
  let driveAbort = new AbortController();
  let binary = null;
  let remote = null, client = null, active = null, closed = false;
  const retain = () => {
    if (current) secrets.set(key, JSON.stringify(current));
  };
  const open = async () => {
    if (!current) return;
    if (current.session.resource !== current.config.connection)
      throw new Error("Saved device grant belongs to another connection");
    binary?.close();
    driveAbort = new AbortController();
    remote = createRemote({
      http,
      session: current.session,
      appSlug: current.config.appSlug,
      appId: current.config.appId,
      saveSession: async (value) => {
        if (current) {
          current.session = value;
          retain();
        }
      }
    });
    binary = input.binary ? await input.binary({
      appId: current.config.appId,
      remote,
      signal: driveAbort.signal,
      resolve: async (ref, edits) => {
        if (!client || current?.paused) throw new Error("Resume sync first");
        await client.resolve(ref, edits);
        changed();
      }
    }) : null;
    client = await createSync({
      local: binary?.local ?? local,
      remote,
      store: input.states(current.config.appId),
      id: newDeviceId,
      signal: driveAbort.signal,
      progress: changed
    });
  };
  await open();
  const status = () => {
    const base = client?.status() ?? {
      state: "idle",
      queued: 0,
      conflicts: 0,
      unsupported: [],
      error: null,
      head: null,
      importId: null
    };
    return {
      ...base,
      state: pending ? "authorizing" : !current ? "disconnected" : current.paused ? "paused" : active ? "syncing" : base.state
    };
  };
  const run = (fetchOnly) => {
    if (closed || pending || !current || current.paused || !client) return Promise.resolve();
    if (active) return active;
    const work = (async () => {
      if (driveAbort.signal.aborted) {
        await remote?.close();
        await open();
      }
      await (fetchOnly ? client?.pull() : client?.run());
      await binary?.flush();
    })();
    changed();
    active = work.finally(() => {
      active = null;
      changed();
    });
    return active;
  };
  return {
    status,
    config: () => current?.config ?? pending?.config ?? null,
    attachments: () => binary,
    authorization: () => pending ? {
      url: pending.request.verificationUrl,
      code: pending.request.userCode,
      expiresAt: pending.request.expiresAt,
      interval: pending.request.interval
    } : null,
    async begin(value) {
      const selected = config(value), previousPaused = current?.paused ?? false;
      if (current) {
        current.paused = true;
        retain();
      }
      driveAbort.abort();
      await active?.catch(() => {
      });
      try {
        const request = await beginConnection(http, selected.connection);
        pending = { config: selected, request, previousPaused };
        secrets.set(key + "-pending", JSON.stringify(pending));
        changed();
        return {
          url: request.verificationUrl,
          code: request.userCode,
          interval: request.interval,
          expiresAt: request.expiresAt
        };
      } catch (failure) {
        if (current) {
          current.paused = previousPaused;
          retain();
        }
        changed();
        throw failure;
      }
    },
    async poll() {
      if (!pending) return false;
      const result = await pollConnection(http, pending.request);
      if (result.state === "pending") {
        pending.request.interval = result.interval;
        secrets.set(key + "-pending", JSON.stringify(pending));
        return false;
      }
      await remote?.close();
      current = { config: pending.config, session: result.session, paused: false };
      retain();
      pending = null;
      secrets.set(key + "-pending", "");
      await open();
      changed();
      return true;
    },
    cancel() {
      if (current && pending) {
        current.paused = pending.previousPaused;
        retain();
      }
      pending = null;
      secrets.set(key + "-pending", "");
      changed();
    },
    /** A checkpoint: commits and pushes every local change, then pulls. */
    sync: () => run(false),
    /** Brings cloud changes down without committing anything. */
    pull: () => run(true),
    async pause(value) {
      if (current) {
        current.paused = value;
        retain();
      }
      if (value) {
        driveAbort.abort();
        await active?.catch(() => {
        });
      } else if (driveAbort.signal.aborted) {
        await remote?.close();
        await open();
      }
      changed();
    },
    async disconnect() {
      if (!current) return;
      current.paused = true;
      retain();
      driveAbort.abort();
      changed();
      await active?.catch(() => {
      });
      await remote?.close();
      await revokeSession(http, current.session);
      secrets.set(key, "");
      secrets.set(key + "-pending", "");
      current = null;
      pending = null;
      client = null;
      binary?.close();
      binary = null;
      remote = null;
      changed();
    },
    conflicts: () => client?.conflicts() ?? [],
    async version(path3, at) {
      if (!remote) throw new Error("Connect this device first");
      let content2 = "", offset = 0;
      for (; ; ) {
        const page = await remote.read({ path: path3, at, offset, maxBytes: 8192 });
        if (!page) return null;
        if (page.bytes > maximumFileBytes)
          throw new Error("This note exceeds the device file limit");
        content2 += page.content;
        if (page.next === null) return content2;
        if (page.next <= offset) throw new Error("Cloud read did not advance");
        offset = page.next;
      }
    },
    async resolve(ref, edits) {
      if (!client || current?.paused) throw new Error("Resume sync first");
      await client.resolve(ref, edits);
      changed();
    },
    async close() {
      closed = true;
      driveAbort.abort();
      binary?.close();
      await active?.catch(() => {
      });
      await remote?.close();
    }
  };
}

// clients/obsidian/link.ts
var protocolAction = "signalbox-sync";
var identity2 = /^[A-Za-z0-9_-]{1,128}$/u;
var field = (params, key) => {
  const value = params[key];
  return typeof value === "string" && value.length > 0 && value !== "true" ? value : null;
};
function parseConnectLink(params) {
  const connection = field(params, "connection"), appId = field(params, "appId"), appSlug = field(params, "appSlug");
  if (!connection || !appId || !appSlug)
    throw new Error("This Signalbox link is incomplete. Open Connect Obsidian in Signalbox again.");
  if (!identity2.test(appId) || !identity2.test(appSlug))
    throw new Error(
      "This Signalbox link names an invalid app. Open Connect Obsidian in Signalbox again."
    );
  const scoped = connectionUrl(connection);
  const vaultName = field(params, "vaultName") ?? field(params, "vault");
  return {
    config: { connection: scoped, appId, appSlug },
    vaultName: vaultName && vaultName.length <= 255 ? vaultName : null,
    host: new URL(scoped).host
  };
}

// clients/obsidian/plugin/obsidian-http.ts
var import_obsidian2 = require("obsidian");
var obsidianHttp = async (url, init) => {
  const request = { url, method: init.method, throw: false };
  if (init.headers) request.headers = init.headers;
  if (init.body !== void 0) request.body = init.body;
  const reply = await (0, import_obsidian2.requestUrl)(request);
  const headers = {};
  for (const [name, value] of Object.entries(reply.headers)) headers[name.toLowerCase()] = value;
  return { status: reply.status, headers, body: reply.text };
};

// clients/obsidian/status.ts
var plural = (count2, one, many = `${one}s`) => `${count2.toLocaleString("en-US")} ${count2 === 1 ? one : many}`;
function ago(at, now) {
  const seconds = Math.max(0, Math.round((now - at) / 1e3));
  if (seconds < 45) return "just now";
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${plural(minutes, "minute")} ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${plural(hours, "hour")} ago`;
  return `${plural(Math.round(hours / 24), "day")} ago`;
}
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes.toLocaleString("en-US")} B`;
  const units = ["KB", "MB", "GB", "TB"];
  let value = bytes / 1024, unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit++;
  }
  return `${value.toLocaleString("en-US", { maximumFractionDigits: value < 10 ? 1 : 0 })} ${units[unit]}`;
}
var importProgress = (initial) => initial.phase === "planning" ? `Preparing the import of ${plural(initial.files, "file")} (${formatBytes(initial.bytes)})` : `${Math.min(initial.confirmed, initial.files).toLocaleString("en-US")} of ${plural(initial.files, "file")} imported (${formatBytes(initial.bytes)} in all)`;
var queuedText = (queued) => queued > 0 ? `${plural(queued, "change")} waiting on this device.` : "Nothing waiting to upload.";
function describeStatus(input) {
  const { status, attachments } = input;
  const unsynced = (/* @__PURE__ */ new Set([
    ...status.unsupported,
    ...attachments.unsynced,
    ...attachments.failed.map((file) => file.path)
  ])).size;
  const view = (tone, title, detail, complete = false) => ({
    tone,
    title,
    detail,
    complete
  });
  if (input.failure) return view("error", "Sync can't start", input.failure);
  if (status.state === "disconnected")
    return view("muted", "Not connected", "Connect this vault from Signalbox.");
  if (status.state === "authorizing")
    return view("busy", "Waiting for approval", "Approve this device in your browser.");
  const initial = status.initial;
  if (status.state === "paused")
    return initial ? view(
      "muted",
      "Import paused",
      `${importProgress(initial)}. It continues where it stopped when you resume.`
    ) : view(
      "muted",
      "Sync paused",
      `${queuedText(status.queued)} Edits stay here until you resume.`
    );
  if (status.state === "syncing" && initial)
    return view(
      "busy",
      initial.phase === "planning" ? "Preparing the import" : "Importing this vault",
      `${importProgress(initial)}. Keep Obsidian open; it resumes if interrupted.`
    );
  if (status.state === "syncing")
    return status.head === null ? view(
      "busy",
      "Importing this vault",
      "Keep Obsidian open until the first import finishes. It resumes if interrupted."
    ) : view("busy", "Syncing", queuedText(status.queued));
  if (status.state === "offline" || status.error)
    return view(
      "error",
      /reconnect|connect again/iu.test(status.error ?? "") ? "Device access ended" : "Sync stopped",
      `${status.error ?? "Sync failed."} ${initial ? `${importProgress(initial)} so far; it resumes from there.` : queuedText(status.queued)}`
    );
  const needs = [];
  if (status.conflicts > 0) needs.push(`${plural(status.conflicts, "conflict")} to review`);
  if (unsynced > 0) needs.push(`${plural(unsynced, "file")} not in Signalbox yet`);
  if (input.recovered > 0) needs.push(`${plural(input.recovered, "recovered file")} to check`);
  if (needs.length) {
    const title = status.conflicts > 0 ? "Needs a choice" : "Needs attention";
    return view(
      "warn",
      title,
      initial ? `${needs.join(", ")}. Import not finished: ${importProgress(initial)}.` : status.queued > 0 ? `${needs.join(", ")}. ${plural(status.queued, "change")} still to sync.` : `${needs.join(", ")}. Everything else is synced.`
    );
  }
  if (initial)
    return view(
      "busy",
      "Import not finished",
      `${importProgress(initial)}. It continues the next time sync runs; keep Obsidian open.`
    );
  if (attachments.downloading > 0)
    return view(
      "busy",
      "Downloading attachments",
      `${plural(attachments.downloading, "file")} left.`
    );
  if (status.queued > 0)
    return view(
      "muted",
      `${plural(status.queued, "change")} to sync`,
      "They go to Signalbox after a few minutes without edits, when you leave Obsidian, or when you choose Sync now."
    );
  const when = input.lastSynced === null ? "" : ` ${ago(input.lastSynced, input.now)}`;
  return view("ok", `Synced${when}`, queuedText(0), true);
}

// clients/obsidian/plugin/ui-conflicts.ts
var import_obsidian3 = require("obsidian");

// clients/obsidian/conflict-sides.ts
function conflictSides(file) {
  return { deviceAt: file.theirs, cloudAt: file.ours };
}

// clients/obsidian/plugin/ui-conflicts.ts
var previewLimit = 1e5;
var isBinary = (path3) => !isTextPath(path3);
var ConflictModal = class extends import_obsidian3.Modal {
  constructor(host) {
    super(host.app);
    this.host = host;
  }
  host;
  files = /* @__PURE__ */ new Map();
  failures = /* @__PURE__ */ new Map();
  busy = /* @__PURE__ */ new Set();
  onOpen() {
    this.setTitle("Choose what to keep");
    this.modalEl.addClass("basalt-sync-conflicts");
    this.contentEl.addClass("basalt-sync-modal");
    for (const conflict of this.host.controller?.conflicts() ?? []) void this.load(conflict);
    this.render();
  }
  onClose() {
    this.contentEl.empty();
  }
  async load(conflict) {
    const controller = this.host.controller;
    if (!controller) return;
    const states = conflict.conflicts.map((file) => ({
      path: file.path,
      ...conflictSides(file),
      binary: isBinary(file.path),
      device: null,
      cloud: null,
      failure: null,
      pick: null,
      combined: ""
    }));
    this.files.set(conflict.ref, states);
    await Promise.all(
      states.map(async (file) => {
        try {
          const versions = await Promise.all(
            [file.deviceAt, file.cloudAt].map(
              (at) => this.host.attachments.describeVersion?.(file.path, at) ?? null
            )
          );
          file.binary ||= versions.some((version2) => version2?.external === true);
          const side = async (at, info) => file.binary ? {
            kind: "binary",
            info
          } : { kind: "text", text: await controller.version(file.path, at) };
          [file.device, file.cloud] = await Promise.all([
            side(file.deviceAt, versions[0] ?? null),
            side(file.cloudAt, versions[1] ?? null)
          ]);
          if (file.device.kind === "text") file.combined = file.device.text ?? "";
        } catch (failure) {
          file.failure = failure instanceof Error ? failure.message : String(failure);
        }
      })
    );
    this.render();
  }
  render() {
    const { contentEl } = this;
    contentEl.empty();
    const conflicts = this.host.controller?.conflicts() ?? [];
    if (!conflicts.length) {
      contentEl.createEl("p", { text: "Nothing needs a choice. Every version is in Signalbox." });
      return;
    }
    contentEl.createEl("p", {
      cls: "basalt-sync-muted",
      text: "Both versions stay in Signalbox's history whatever you choose. Pick one for every file, then apply."
    });
    for (const conflict of conflicts) this.renderConflict(conflict);
  }
  renderConflict(conflict) {
    const files = this.files.get(conflict.ref) ?? [];
    const group = this.contentEl.createDiv({ cls: "basalt-sync-conflict" });
    for (const file of files) this.renderFile(group, file);
    const binary = files.some((file) => file.binary);
    const mixed = this.host.attachments.resolveMixed;
    const ready = files.length === conflict.conflicts.length && files.every((file) => file.pick !== null && !file.failure && file.device && file.cloud);
    if (binary && !mixed)
      group.createDiv({
        cls: "basalt-sync-callout is-warn",
        text: "This change includes attachments. Both versions are kept in Signalbox; choosing between attachment versions becomes available once attachment sync is on this device."
      });
    const failure = this.failures.get(conflict.ref);
    if (failure) group.createDiv({ cls: "basalt-sync-callout is-error", text: failure });
    const actions = group.createDiv({ cls: "modal-button-container" });
    const apply = actions.createEl("button", {
      cls: "mod-cta",
      text: this.busy.has(conflict.ref) ? "Applying\u2026" : files.length > 1 ? `Apply ${files.length} choices` : "Apply choice"
    });
    apply.disabled = !ready || binary && !mixed || this.busy.has(conflict.ref);
    apply.addEventListener("click", () => void this.apply(conflict, files));
  }
  renderFile(parent, file) {
    const box = parent.createDiv({ cls: "basalt-sync-file" });
    box.createEl("h4", { text: file.path });
    if (file.failure) {
      box.createDiv({
        cls: "basalt-sync-callout is-error",
        text: `Couldn't load both versions: ${file.failure}`
      });
      return;
    }
    const panes = box.createDiv({ cls: "basalt-sync-panes" });
    this.renderSide(panes, "This device", file.device);
    this.renderSide(panes, "In Signalbox", file.cloud);
    const choices = box.createDiv({
      cls: "basalt-sync-choices",
      attr: { role: "radiogroup", "aria-label": `Keep for ${file.path}` }
    });
    const options = [
      ["device", "Keep this device's"],
      ["cloud", "Keep Signalbox's"]
    ];
    if (!file.binary) options.push(["combined", "Write a combined version"]);
    for (const [pick, label] of options) {
      const button = choices.createEl("button", {
        text: label,
        cls: file.pick === pick ? "mod-cta" : "",
        attr: { role: "radio", "aria-checked": String(file.pick === pick) }
      });
      button.disabled = !file.device || !file.cloud;
      button.addEventListener("click", () => {
        file.pick = pick;
        this.render();
      });
    }
    if (file.pick === "combined") {
      const area = box.createEl("textarea", {
        cls: "basalt-sync-combined",
        attr: { rows: "10", "aria-label": `Combined ${file.path}` }
      });
      area.value = file.combined;
      area.addEventListener("input", () => {
        file.combined = area.value;
      });
    }
  }
  renderSide(parent, label, side) {
    const pane = parent.createDiv({ cls: "basalt-sync-pane" });
    pane.createDiv({ cls: "basalt-sync-pane-label", text: label });
    if (!side) return pane.createDiv({ cls: "basalt-sync-muted", text: "Loading\u2026" });
    if (side.kind === "binary")
      return pane.createDiv({
        cls: "basalt-sync-muted",
        text: side.info ? `${side.info.mime ?? "File"} \xB7 ${side.info.bytes.toLocaleString("en-US")} bytes` : "Attachment. Details appear once attachment sync is on this device."
      });
    if (side.text === null)
      return pane.createDiv({ cls: "basalt-sync-muted", text: "Deleted here" });
    const pre = pane.createEl("pre", { text: side.text.slice(0, previewLimit) });
    if (side.text.length > previewLimit)
      pane.createDiv({
        cls: "basalt-sync-muted",
        text: "Preview shortened. The full version is kept."
      });
    return pre;
  }
  async apply(conflict, files) {
    const controller = this.host.controller;
    if (!controller) return;
    if (!controller.conflicts().some((current) => current.ref === conflict.ref && current.oid === conflict.oid)) {
      this.failures.set(
        conflict.ref,
        "This conflict changed while you were reviewing. Reopen to see the latest versions."
      );
      return this.render();
    }
    const text2 = (side) => side?.kind === "text" ? side.text : null;
    const choices = files.map(
      (file) => file.binary ? {
        path: file.path,
        kind: "version",
        at: file.pick === "device" ? file.deviceAt : file.cloudAt
      } : {
        path: file.path,
        kind: "text",
        content: file.pick === "combined" ? file.combined : text2(file.pick === "device" ? file.device : file.cloud)
      }
    );
    this.busy.add(conflict.ref);
    this.failures.delete(conflict.ref);
    this.render();
    try {
      if (files.some((file) => file.binary))
        await this.host.attachments.resolveMixed?.(conflict.ref, choices);
      else
        await controller.resolve(
          conflict.ref,
          choices.map((choice) => ({
            path: choice.path,
            content: choice.kind === "text" ? choice.content : null
          }))
        );
      this.files.delete(conflict.ref);
    } catch (failure) {
      this.failures.set(conflict.ref, failure instanceof Error ? failure.message : String(failure));
    } finally {
      this.busy.delete(conflict.ref);
    }
    this.render();
  }
};

// clients/obsidian/plugin/ui-connect.ts
var import_obsidian4 = require("obsidian");
var ConnectModal = class extends import_obsidian4.Modal {
  constructor(host, request) {
    super(host.app);
    this.host = host;
    this.request = request;
  }
  host;
  request;
  unsubscribe = null;
  phase = "confirm";
  error = null;
  /** True while `begin` is in flight; status is not "authorizing" yet. */
  starting = false;
  /** What the first import would send, counted locally before anything leaves the device. */
  importScopeState = { kind: "loading" };
  closed = false;
  onOpen() {
    this.contentEl.addClass("basalt-sync-modal");
    this.unsubscribe = this.host.subscribe(() => this.render());
    void this.loadScope();
  }
  onClose() {
    this.closed = true;
    this.unsubscribe?.();
    this.contentEl.empty();
  }
  async loadScope() {
    this.importScopeState = { kind: "loading" };
    this.render();
    try {
      const { files, bytes } = await this.host.importScope();
      this.importScopeState = { kind: "ready", files, bytes };
    } catch (failure) {
      this.importScopeState = {
        kind: "failed",
        message: failure instanceof Error ? failure.message : String(failure)
      };
    }
    if (!this.closed) this.render();
  }
  render() {
    if (this.closed) return;
    const { contentEl, host, request } = this;
    const state = host.controller?.status().state;
    if (this.phase === "approving" && !this.starting && state !== "authorizing") {
      const failure = host.authorizationError();
      if (failure) {
        this.phase = "confirm";
        this.error = failure;
      } else if (state === "disconnected" || state === "paused" || state === void 0) {
        this.close();
        return;
      } else this.phase = "done";
    }
    contentEl.empty();
    if (this.phase === "done") {
      this.setTitle("Vault connected");
      contentEl.createEl("p", {
        text: `${host.vaultName} now syncs with Signalbox. The first sync starts now; keep Obsidian open until it finishes.`
      });
      this.actions().createEl("button", { text: "Done", cls: "mod-cta" }).addEventListener("click", () => this.close());
      return;
    }
    if (this.phase === "approving") {
      const pending = host.controller?.authorization();
      this.setTitle("Approve in your browser");
      contentEl.createEl("p", {
        text: "Your browser opened Signalbox. Check that it shows this code, then approve."
      });
      contentEl.createDiv({ cls: "basalt-sync-code is-large", text: pending?.code ?? "\u2014" });
      contentEl.createEl("p", {
        cls: "basalt-sync-muted",
        text: "Waiting for approval. You can close this window; the request stays open until it expires."
      });
      const actions2 = this.actions();
      actions2.createEl("button", { text: "Open approval page", cls: "mod-cta" }).addEventListener("click", () => host.openApproval());
      actions2.createEl("button", { text: "Cancel" }).addEventListener("click", () => {
        host.cancelAuthorization();
        this.close();
      });
      return;
    }
    this.setTitle("Connect this vault to Signalbox?");
    const rows = contentEl.createEl("dl", { cls: "basalt-sync-facts" });
    const row = (term, value) => {
      rows.createEl("dt", { text: term });
      rows.createEl("dd", { text: value });
    };
    row("Vault", host.vaultName);
    row("Signalbox server", request.host);
    row("App", request.config.appSlug);
    const scope = this.importScopeState;
    row(
      "Includes",
      scope.kind === "ready" ? `All vault content \xB7 ${scope.files.toLocaleString("en-US")} ${scope.files === 1 ? "file" : "files"} \xB7 ${formatBytes(scope.bytes)}` : scope.kind === "loading" ? "Counting files\u2026" : "Couldn't count files"
    );
    if (scope.kind === "failed")
      contentEl.createDiv({
        cls: "basalt-sync-callout is-error",
        text: `This vault's files couldn't be counted, so nothing was sent. ${scope.message}`
      });
    contentEl.createEl("p", {
      cls: "basalt-sync-muted",
      text: host.mobile ? "Connect your Mac first so it imports the vault. This phone then joins the cloud copy and downloads attachments when you open a note." : "This Mac becomes the source: everything above uploads once, and the import resumes if interrupted. Phones join the cloud copy afterwards."
    });
    if (request.vaultName && request.vaultName !== host.vaultName)
      contentEl.createDiv({
        cls: "basalt-sync-callout is-warn",
        text: `This link was made for the vault \u201C${request.vaultName}\u201D. You're in \u201C${host.vaultName}\u201D. Only continue if this is the vault you want in Signalbox.`
      });
    const current = host.controller?.config();
    if (current && current.connection !== request.config.connection)
      contentEl.createDiv({
        cls: "basalt-sync-callout is-warn",
        text: `This vault already syncs with ${new URL(current.connection).host}. Connecting pauses that sync; unsent changes stay on this device.`
      });
    if (this.error) contentEl.createDiv({ cls: "basalt-sync-callout is-error", text: this.error });
    contentEl.createEl("p", {
      cls: "basalt-sync-muted",
      text: "Your browser opens next so you can approve this device. Signalbox never asks for a password here."
    });
    const actions = this.actions();
    if (scope.kind === "failed")
      actions.createEl("button", { text: "Count again" }).addEventListener("click", () => void this.loadScope());
    const connect = actions.createEl("button", { text: "Connect", cls: "mod-cta" });
    connect.disabled = scope.kind !== "ready";
    actions.createEl("button", { text: "Cancel" }).addEventListener("click", () => this.close());
    connect.addEventListener("click", async () => {
      connect.disabled = true;
      this.error = null;
      this.phase = "approving";
      this.starting = true;
      try {
        await host.connect(request.config);
      } catch (failure) {
        this.phase = "confirm";
        this.error = failure instanceof Error ? failure.message : String(failure);
      } finally {
        this.starting = false;
      }
      this.render();
    });
  }
  actions() {
    return this.contentEl.createDiv({ cls: "modal-button-container" });
  }
};

// clients/obsidian/plugin/ui-settings.ts
var import_obsidian7 = require("obsidian");

// clients/obsidian/plugin/ui-attachments.ts
var import_obsidian5 = require("obsidian");
var manual = (port) => port;
var formatBytes2 = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB", "TB"];
  let value = bytes / 1024, unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit++;
  }
  return `${value.toLocaleString("en-US", { maximumFractionDigits: value < 10 ? 1 : 0 })} ${units[unit]}`;
};
var AttachmentPicker = class extends import_obsidian5.FuzzySuggestModal {
  constructor(app, items, options, choose) {
    super(app);
    this.items = items;
    this.choose = choose;
    this.setPlaceholder(options.placeholder);
    this.emptyStateText = options.empty;
    this.setInstructions([
      { command: "\u2191\u2193", purpose: "to navigate" },
      { command: "\u21B5", purpose: options.action },
      { command: "esc", purpose: "to dismiss" }
    ]);
  }
  items;
  choose;
  getItems() {
    return [...this.items];
  }
  getItemText(entry) {
    return entry.path;
  }
  renderSuggestion(match, el) {
    super.renderSuggestion(match, el);
    el.createDiv({ cls: "basalt-sync-muted", text: formatBytes2(match.item.bytes) });
  }
  onChooseItem(entry) {
    this.choose(entry);
  }
};
var AttachmentControls = class {
  constructor(app, port, changed) {
    this.app = app;
    this.port = port;
    this.changed = changed;
  }
  app;
  port;
  changed;
  downloads = /* @__PURE__ */ new Map();
  failures = /* @__PURE__ */ new Map();
  render(container) {
    const port = manual(this.port);
    if (this.port.mode() !== "on-demand" || !port.entries) return;
    const entries = port.entries();
    const local = entries.filter((entry) => entry.local);
    const used = local.reduce((total, entry) => total + entry.bytes, 0);
    const row = new import_obsidian5.Setting(container).setName("Attachments on this device").setDesc(
      `${local.length.toLocaleString("en-US")} of ${entries.length.toLocaleString("en-US")} downloaded \xB7 ${formatBytes2(used)}. Signalbox keeps every file, so a removed copy downloads again when you open its note.`
    );
    if (port.download)
      row.addButton(
        (button) => button.setButtonText("Download attachment").onClick(() => this.pickDownload())
      );
    if (port.evict)
      row.addButton(
        (button) => button.setButtonText("Remove downloaded copy").onClick(() => this.pickEvict())
      );
    for (const [path3, download] of this.downloads)
      new import_obsidian5.Setting(container).setClass("basalt-sync-pin").setName(path3).setDesc("Downloading\u2026").addExtraButton(
        (button) => button.setIcon("x").setTooltip("Cancel download").onClick(() => download.abort())
      );
    if (this.failures.size) {
      const box = container.createDiv({ cls: "basalt-sync-callout is-error" });
      box.createEl("strong", {
        text: this.failures.size === 1 ? "1 attachment action failed" : `${this.failures.size} attachment actions failed`
      });
      const list = box.createEl("ul", { cls: "basalt-sync-paths" });
      for (const [path3, reason] of this.failures)
        list.createEl("li", { text: `${path3}: ${reason}` });
      box.createEl("button", { text: "Clear" }).addEventListener("click", () => {
        this.failures.clear();
        this.changed();
      });
    }
  }
  pickDownload() {
    const port = manual(this.port);
    const items = (port.entries?.() ?? []).filter(
      (entry) => !entry.local && !this.downloads.has(entry.path)
    );
    new AttachmentPicker(
      this.app,
      items,
      {
        placeholder: "Choose an attachment to download",
        empty: "Every attachment is already on this device.",
        action: "to download"
      },
      (entry) => void this.download(entry.path)
    ).open();
  }
  pickEvict() {
    const port = manual(this.port);
    const blocked = this.blocked();
    const items = (port.entries?.() ?? []).filter(
      (entry) => entry.local && !entry.pinned && !blocked.has(entry.path)
    );
    new AttachmentPicker(
      this.app,
      items,
      {
        placeholder: "Choose a downloaded copy to remove from this device",
        empty: "Nothing to remove. Files in pinned folders and files not yet in Signalbox stay on this device.",
        action: "to remove this copy"
      },
      (entry) => void this.evict(entry.path)
    ).open();
  }
  /** Files whose only copy may be this one. Removing them could lose work. */
  blocked() {
    const summary = this.port.summary();
    return /* @__PURE__ */ new Set([...summary.unsynced, ...summary.failed.map((file) => file.path)]);
  }
  async download(path3) {
    const port = manual(this.port);
    if (!port.download || this.downloads.has(path3)) return;
    const abort = new AbortController();
    this.downloads.set(path3, abort);
    this.failures.delete(path3);
    this.changed();
    try {
      await port.download(path3, abort.signal);
    } catch (failure) {
      if (!abort.signal.aborted)
        this.failures.set(path3, failure instanceof Error ? failure.message : String(failure));
    } finally {
      this.downloads.delete(path3);
      this.changed();
    }
  }
  async evict(path3) {
    const port = manual(this.port);
    if (!port.evict) return;
    const entry = port.entries?.().find((item) => item.path === path3);
    const refusal = this.port.mode() !== "on-demand" ? "This device keeps every attachment." : !entry || !entry.local ? "This copy is already gone." : entry.pinned ? "It is in a pinned folder. Unpin the folder first." : this.blocked().has(path3) ? "Signalbox doesn't have this file yet, so this copy is the only one." : null;
    this.failures.delete(path3);
    if (refusal) this.failures.set(path3, refusal);
    else
      try {
        await port.evict(path3);
      } catch (failure) {
        this.failures.set(path3, failure instanceof Error ? failure.message : String(failure));
      }
    this.changed();
  }
};

// clients/obsidian/plugin/ui-pickers.ts
var import_obsidian6 = require("obsidian");
var ConfirmModal = class extends import_obsidian6.Modal {
  constructor(app, options) {
    super(app);
    this.options = options;
  }
  options;
  onOpen() {
    const { contentEl, options } = this;
    this.setTitle(options.title);
    contentEl.addClass("basalt-sync-modal");
    contentEl.createEl("p", { text: options.body });
    const error = contentEl.createDiv({ cls: "basalt-sync-callout is-error basalt-sync-hidden" });
    const actions = contentEl.createDiv({ cls: "modal-button-container" });
    const confirm = actions.createEl("button", {
      text: options.confirm,
      cls: options.warning ? "mod-warning" : "mod-cta"
    });
    actions.createEl("button", { text: "Cancel" }).addEventListener("click", () => this.close());
    confirm.addEventListener("click", async () => {
      confirm.disabled = true;
      error.addClass("basalt-sync-hidden");
      try {
        await options.run();
        this.close();
      } catch (failure) {
        error.setText(failure instanceof Error ? failure.message : String(failure));
        error.removeClass("basalt-sync-hidden");
        confirm.disabled = false;
      }
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
var FolderPicker = class extends import_obsidian6.FuzzySuggestModal {
  constructor(app, pinned, choose) {
    super(app);
    this.pinned = pinned;
    this.choose = choose;
    this.setPlaceholder("Choose a folder to keep offline");
  }
  pinned;
  choose;
  getItems() {
    return this.app.vault.getAllFolders(false).filter(
      (folder) => !this.pinned.includes(folder.path) && folder.path !== recoveryFolder && !folder.path.startsWith(`${recoveryFolder}/`)
    );
  }
  getItemText(folder) {
    return folder.path;
  }
  onChooseItem(folder) {
    this.choose(folder.path);
  }
};

// clients/obsidian/plugin/ui-settings.ts
var toneIcon = {
  ok: "check-circle",
  busy: "refresh-cw",
  warn: "alert-triangle",
  error: "cloud-off",
  muted: "circle-pause"
};
var listPreview = (parent, paths, limit = 5) => {
  const list = parent.createEl("ul", { cls: "basalt-sync-paths" });
  for (const path3 of paths.slice(0, limit)) list.createEl("li", { text: path3 });
  if (paths.length > limit)
    list.createEl("li", {
      cls: "basalt-sync-more",
      text: `and ${(paths.length - limit).toLocaleString("en-US")} more`
    });
};
function renderHowItWorks(parent) {
  const section = parent.createDiv({ cls: "basalt-sync-how" });
  section.createEl("h3", { text: "How sync works" });
  const items = [
    [
      "Signalbox holds the vault.",
      "Your agents read, search and edit the cloud copy, even with every device off."
    ],
    [
      "Your Mac keeps everything.",
      "Every note and attachment stays on disk. Import from your Mac first."
    ],
    [
      "Your phone fetches what you open.",
      "Notes sync everywhere. Attachments download when you open a note. Pinned folders stay fully offline."
    ],
    [
      "Syncs when you pause.",
      "Your edits go to Signalbox together after a few minutes without typing, when you leave Obsidian, or when you choose Sync now. Changes from Signalbox arrive when you open Obsidian or a note, and every few minutes while it's open."
    ],
    [
      "Edit offline, sync when you return.",
      "Changes wait on this device until Obsidian is open and online."
    ],
    [
      "Nothing is overwritten silently.",
      "When you and an agent change the same note, both versions are kept and you choose."
    ],
    [
      "Deleted elsewhere? Kept here.",
      "Notes removed in Signalbox move to the \u201CSignalbox recovered\u201D folder instead of disappearing."
    ]
  ];
  const list = section.createEl("ol");
  for (const [title, body] of items) {
    const item = list.createEl("li");
    item.createEl("strong", { text: title });
    item.createSpan({ text: ` ${body}` });
  }
}
var BasaltSettingTab = class extends import_obsidian7.PluginSettingTab {
  constructor(plugin, host) {
    super(host.app, plugin);
    this.host = host;
    this.attachmentControls = new AttachmentControls(host.app, host.attachments, () => {
      if (this.containerEl.isConnected) this.render();
    });
  }
  host;
  unsubscribe = null;
  // Held on the tab so in-flight downloads and failures survive re-renders. Downloads keep
  // running when settings close; the port owns their lifetime.
  attachmentControls;
  display() {
    this.unsubscribe?.();
    this.unsubscribe = this.host.subscribe(() => {
      if (this.containerEl.isConnected) this.render();
    });
    this.render();
  }
  hide() {
    this.unsubscribe?.();
    this.unsubscribe = null;
  }
  render() {
    const { containerEl, host } = this;
    const controller = host.controller, status = controller?.status(), view = host.view(), config2 = controller?.config() ?? null;
    containerEl.empty();
    containerEl.addClass("basalt-sync-settings");
    const connected = !!status && status.state !== "disconnected" && status.state !== "authorizing";
    const intro = containerEl.createDiv({ cls: "basalt-sync-intro" });
    intro.createEl("h2", {
      text: connected ? `${host.vaultName} is connected` : "Keep this vault in Signalbox"
    });
    intro.createEl("p", {
      text: connected ? "Signalbox holds the authoritative copy. Your agents can use these notes while your devices are off." : "Sync this vault with Signalbox so your agents can read, search and edit your notes, even with every device off."
    });
    const statusRow = new import_obsidian7.Setting(containerEl).setClass("basalt-sync-status").setClass(`is-${view.tone}`);
    const name = createFragment((fragment) => {
      const title = fragment.createSpan({ cls: "basalt-sync-status-title" });
      (0, import_obsidian7.setIcon)(title.createSpan({ cls: "basalt-sync-status-icon" }), toneIcon[view.tone]);
      title.createSpan({ text: view.title });
    });
    statusRow.setName(name).setDesc(view.detail);
    if (!controller || !status) return this.renderHelp();
    if (status.state === "authorizing") {
      const pending = controller.authorization();
      if (pending) {
        statusRow.setDesc(
          createFragment((fragment) => {
            fragment.appendText("Approve this device in your browser. Check that it shows ");
            fragment.createEl("code", { cls: "basalt-sync-code", text: pending.code });
            fragment.appendText(".");
          })
        );
        statusRow.addButton(
          (button) => button.setButtonText("Open approval page").setCta().onClick(() => host.openApproval())
        ).addButton(
          (button) => button.setButtonText("Cancel").onClick(() => host.cancelAuthorization())
        );
      }
    }
    if (status.state === "disconnected") {
      const error = host.authorizationError();
      if (error) containerEl.createDiv({ cls: "basalt-sync-callout is-error", text: error });
      new import_obsidian7.Setting(containerEl).setName("This vault").setDesc(host.vaultName);
      new import_obsidian7.Setting(containerEl).setName("Connect from Signalbox").setDesc(
        "In Signalbox, open your Obsidian app and choose Connect Obsidian. This vault opens here and asks you to approve in your browser. Start with your Mac."
      );
      return this.renderHelp();
    }
    if (status.state === "authorizing") return this.renderHelp();
    if (status.state !== "paused")
      statusRow.addButton(
        (button) => button.setButtonText(status.state === "syncing" ? "Syncing\u2026" : "Sync now").setDisabled(status.state === "syncing").onClick(() => void host.syncNow())
      );
    if (status.conflicts > 0) {
      const box = containerEl.createDiv({ cls: "basalt-sync-callout is-warn" });
      box.createEl("strong", {
        text: status.conflicts === 1 ? "1 conflict needs a choice" : `${status.conflicts} conflicts need a choice`
      });
      box.createEl("p", {
        text: "Someone else changed the same notes. Both versions are saved in Signalbox."
      });
      box.createEl("button", { text: "Compare versions" }).addEventListener("click", () => host.openConflicts());
    }
    const summary = host.attachments.summary();
    const unsynced = [.../* @__PURE__ */ new Set([...status.unsupported, ...summary.unsynced])];
    if (unsynced.length || summary.failed.length) {
      const box = containerEl.createDiv({ cls: "basalt-sync-callout is-warn" });
      box.createEl("strong", {
        text: `${(unsynced.length + summary.failed.length).toLocaleString("en-US")} files are not in Signalbox yet`
      });
      box.createEl("p", {
        text: "They stay on this device unchanged. Signalbox picks them up once it can carry them."
      });
      listPreview(box, [
        ...summary.failed.map((file) => `${file.path} \u2014 ${file.reason}`),
        ...unsynced
      ]);
    }
    const recovered = host.recovered();
    if (recovered.length) {
      const box = containerEl.createDiv({ cls: "basalt-sync-callout" });
      box.createEl("strong", {
        text: `Kept ${recovered.length.toLocaleString("en-US")} files removed elsewhere`
      });
      box.createEl("p", {
        text: "They were deleted in Signalbox, so this device moved them to \u201CSignalbox recovered\u201D instead of deleting them. These recovery copies never sync. Delete them when you're sure."
      });
      listPreview(box, recovered);
    }
    new import_obsidian7.Setting(containerEl).setName("This vault").setDesc(`${host.vaultName} \xB7 ${config2 ? new URL(config2.connection).host : "Signalbox"}`);
    this.renderAttachments();
    new import_obsidian7.Setting(containerEl).setName("Sync").setDesc(
      status.state === "paused" ? "Paused. Edits stay on this device until you turn sync back on." : "Syncs when you save, open a note, start Obsidian or come back to it."
    ).addToggle(
      (toggle) => toggle.setValue(status.state !== "paused").onChange((on) => void host.setPaused(!on))
    );
    if (host.mobile)
      containerEl.createDiv({
        cls: "basalt-sync-note",
        text: "On a phone, sync runs while Obsidian is open. If the system pauses it, it catches up when you return."
      });
    new import_obsidian7.Setting(containerEl).setName("Disconnect this device").setDesc(
      "Removes this device's access in Signalbox. Local notes stay. Reconnect any time from Signalbox."
    ).addButton(
      (button) => button.setButtonText("Disconnect").setClass("mod-warning").onClick(
        () => new ConfirmModal(host.app, {
          title: "Disconnect this device?",
          body: "Signalbox removes this device's access. Notes on this device stay where they are. Unsent changes wait here until you reconnect.",
          confirm: "Disconnect",
          warning: true,
          run: () => host.disconnect()
        }).open()
      )
    );
    this.renderHelp();
  }
  renderAttachments() {
    const { containerEl, host } = this;
    if (host.attachments.mode() === "full") {
      new import_obsidian7.Setting(containerEl).setName("Attachments").setDesc("This device keeps every note and attachment.");
      return;
    }
    new import_obsidian7.Setting(containerEl).setName("Offline folders").setDesc(
      "Attachments download when you open a note. Pinned folders keep every attachment on this device."
    ).addButton(
      (button) => button.setButtonText("Pin a folder").onClick(
        () => new FolderPicker(
          host.app,
          host.attachments.pins(),
          (folder) => void host.attachments.setPinned(folder, true)
        ).open()
      )
    );
    for (const folder of host.attachments.pins())
      new import_obsidian7.Setting(containerEl).setClass("basalt-sync-pin").setName(folder).setDesc("Kept offline").addExtraButton(
        (button) => button.setIcon("pin-off").setTooltip("Stop keeping offline").onClick(() => void host.attachments.setPinned(folder, false))
      );
    this.attachmentControls.render(containerEl);
  }
  renderHelp() {
    renderHowItWorks(this.containerEl);
  }
};

// clients/obsidian/remote-wake.ts
var remoteWakeMs = 5 * 6e4;
function watchRemoteChanges(input) {
  return input.repeat(() => {
    if (input.available()) input.pull();
  }, remoteWakeMs);
}

// clients/obsidian/plugin/main.ts
var idleCheckpointMs = 3 * 6e4;
var ownWriteMs = 2e3;
var terminalAuthorization = /declined|expired|could not finish/iu;
var message = (failure) => failure instanceof Error ? failure.message : String(failure);
var BasaltSyncPlugin = class extends import_obsidian8.Plugin {
  controller = null;
  attachments;
  mobile = import_obsidian8.Platform.isMobile;
  store;
  local;
  failure = null;
  authError = null;
  pollTimer = null;
  again = false;
  /** Paths edited since the last checkpoint started. */
  dirty = /* @__PURE__ */ new Set();
  // Edits made while Obsidian was closed, or left by a failed checkpoint, have no vault event.
  // This stays set until a checkpoint succeeds, so they are never reported as synced.
  needsCheckpoint = true;
  active = null;
  ownWrites = /* @__PURE__ */ new Map();
  noteAbort = null;
  listeners = /* @__PURE__ */ new Set();
  statusBar = null;
  checkpointWhenIdle;
  get vaultName() {
    return this.app.vault.getName();
  }
  async importScope() {
    const files = (await this.local.files()).filter((file) => safePath(file.path));
    return { files: files.length, bytes: files.reduce((sum, file) => sum + file.bytes, 0) };
  }
  async onload() {
    this.checkpointWhenIdle = (0, import_obsidian8.debounce)(() => void this.syncNow(), idleCheckpointMs, true);
    this.store = await openStore({
      load: () => this.loadData(),
      save: (data) => this.saveData(data)
    });
    this.local = createLocalVault(this.app.vault, {
      writing: (path3) => {
        this.ownWrites.set(path3, Date.now());
        this.local?.changed(path3);
      },
      recoveries: this.store.recoveries,
      transfers: this.store.transfers.get
    });
    const proxy = attachmentProxy({
      current: () => this.controller?.attachments() ?? null,
      mode: import_obsidian8.Platform.isMobile ? "on-demand" : "full",
      pins: this.store.pins
    });
    this.attachments = proxy.port;
    this.register(proxy.close);
    this.register(this.attachments.onChange(() => this.emit()));
    if (!(0, import_obsidian8.requireApiVersion)("1.12.3"))
      this.failure = "Update Obsidian to use Signalbox Sync. It needs secure storage and bounded attachment writes.";
    else
      try {
        const storage = this.app.secretStorage;
        this.controller = await createController({
          http: obsidianHttp,
          local: this.local,
          states: (appId) => this.store.states(appId),
          secrets: {
            get: (id) => storage.getSecret(id),
            set: (id, value) => storage.setSecret(id, value)
          },
          key: this.store.secretKey,
          changed: proxy.notify,
          binary: async ({ appId, remote, signal, resolve }) => createBinaryClient({
            text: this.local,
            io: obsidianBinaryIo(this, this.local, this.store, appId, signal),
            remote,
            store: this.store.binary(appId),
            pins: this.store.pins,
            mode: import_obsidian8.Platform.isMobile ? "on-demand" : "full",
            id: newDeviceId,
            signal,
            resolve,
            changed: proxy.notify
          })
        });
      } catch (failure) {
        this.failure = `Saved sync data couldn't be read: ${message(failure)}`;
      }
    this.addSettingTab(new BasaltSettingTab(this, this));
    this.registerObsidianProtocolHandler(protocolAction, (params) => this.handleLink(params));
    if (!import_obsidian8.Platform.isMobile) {
      this.statusBar = this.addStatusBarItem();
      this.statusBar.addClass("basalt-sync-statusbar");
      this.registerDomEvent(this.statusBar, "click", () => {
        if ((this.controller?.status().conflicts ?? 0) > 0) this.openConflicts();
        else void this.syncNow();
      });
    }
    this.addCommand({ id: "sync-now", name: "Sync now", callback: () => void this.syncNow() });
    this.addCommand({
      id: "review-conflicts",
      name: "Review conflicts",
      callback: () => this.openConflicts()
    });
    this.addCommand({
      id: "toggle-pause",
      name: "Pause or resume sync",
      checkCallback: (checking) => {
        const state = this.controller?.status().state;
        if (!state || state === "disconnected" || state === "authorizing") return false;
        if (!checking) void this.setPaused(state !== "paused");
        return true;
      }
    });
    this.app.workspace.onLayoutReady(() => this.start());
    this.emit();
  }
  onunload() {
    this.checkpointWhenIdle?.cancel();
    this.clearPoll();
    this.noteAbort?.abort();
    this.listeners.clear();
    const controller = this.controller;
    const last = (async () => {
      await this.active;
      if (this.pendingWork()) await this.syncNow();
    })();
    void Promise.race([last, new Promise((done) => window.setTimeout(done, 5e3))]).finally(
      () => void controller?.close()
    );
  }
  start() {
    const touched = (path3) => {
      this.local.changed(path3);
      const own = this.ownWrites.get(path3);
      this.ownWrites.delete(path3);
      if (!safePath(path3) || this.local.ignored(path3)) return this.emit();
      if (own !== void 0 && Date.now() - own < ownWriteMs) return;
      this.dirty.add(path3);
      this.checkpointWhenIdle();
      this.emit();
    };
    const { vault, workspace } = this.app;
    this.registerEvent(vault.on("create", (file) => touched(file.path)));
    this.registerEvent(vault.on("modify", (file) => touched(file.path)));
    this.registerEvent(vault.on("delete", (file) => touched(file.path)));
    this.registerEvent(
      vault.on("rename", (file, old) => {
        touched(old);
        touched(file.path);
      })
    );
    this.registerEvent(
      workspace.on("file-open", (file) => {
        this.noteAbort?.abort();
        if (!file) return;
        this.noteAbort = new AbortController();
        this.attachments.noteOpened(file.path, this.noteAbort.signal).catch(() => this.emit());
        void this.pullNow();
      })
    );
    this.registerEvent(
      workspace.on("file-menu", (menu, file) => {
        if (!(file instanceof import_obsidian8.TFolder) || file.isRoot() || this.attachments.mode() !== "on-demand")
          return;
        const pinned = this.attachments.pins().includes(file.path);
        menu.addItem(
          (item) => item.setTitle(pinned ? "Stop keeping offline" : "Keep offline").setIcon(pinned ? "pin-off" : "pin").onClick(() => void this.attachments.setPinned(file.path, !pinned))
        );
      })
    );
    this.registerDomEvent(document, "visibilitychange", () => {
      if (document.visibilityState === "visible") void this.pullNow();
      else if (this.pendingWork()) void this.syncNow();
    });
    this.registerDomEvent(window, "online", () => {
      if (this.pendingWork()) void this.syncNow();
      else void this.pullNow();
    });
    this.register(
      watchRemoteChanges({
        repeat: (callback, milliseconds) => {
          const timer = window.setInterval(callback, milliseconds);
          return () => window.clearInterval(timer);
        },
        available: () => document.visibilityState === "visible" && navigator.onLine,
        // A failed checkpoint retries on the same slow cadence instead of waiting for an edit.
        pull: () => void (this.needsCheckpoint ? this.syncNow() : this.pullNow())
      })
    );
    if (this.controller?.authorization()) this.schedulePoll();
    void this.syncNow();
  }
  handleLink(params) {
    if (!this.controller) return new import_obsidian8.Notice(this.failure ?? "Signalbox Sync isn't ready yet.");
    try {
      new ConnectModal(this, parseConnectLink(params)).open();
    } catch (failure) {
      new import_obsidian8.Notice(message(failure));
    }
  }
  // SyncHost
  view() {
    const status = this.controller?.status() ?? {
      state: "disconnected",
      queued: 0,
      conflicts: 0,
      unsupported: [],
      error: null,
      head: null,
      importId: null
    };
    return describeStatus({
      status: { ...status, queued: Math.max(status.queued, this.dirty.size) },
      attachments: this.attachments.summary(),
      recovered: this.local.recovered().length,
      lastSynced: this.store.lastSynced(),
      now: Date.now(),
      failure: this.failure
    });
  }
  authorizationError() {
    return this.authError;
  }
  recovered() {
    return this.local.recovered();
  }
  /** A checkpoint: one commit holding every local change, pushed at once. */
  syncNow() {
    return this.work(false);
  }
  /** A fetch: cloud changes come down and nothing is committed. */
  pullNow() {
    return this.work(true);
  }
  pendingWork() {
    return this.dirty.size > 0 || this.needsCheckpoint || (this.controller?.status().queued ?? 0) > 0;
  }
  /** One piece of work at a time; a checkpoint asked for meanwhile runs right after it. */
  work(fetchOnly) {
    if (this.active) {
      if (!fetchOnly) this.again = true;
      return this.active;
    }
    this.active = (async () => {
      let checkpoint = !fetchOnly;
      while (await this.once(checkpoint)) {
        if (!this.again) break;
        this.again = false;
        checkpoint = true;
      }
    })().finally(() => {
      this.active = null;
    });
    return this.active;
  }
  /** Returns false when the device can't sync right now. */
  async once(checkpoint) {
    const controller = this.controller;
    if (!controller) return false;
    const state = controller.status().state;
    if (state === "disconnected" || state === "authorizing" || state === "paused") return false;
    if (state === "syncing") {
      await controller.sync().catch(() => {
      });
      if (controller.status().state === "syncing") {
        if (checkpoint) this.needsCheckpoint = true;
        return false;
      }
    }
    const taken = checkpoint ? [...this.dirty] : [];
    if (checkpoint) {
      this.checkpointWhenIdle.cancel();
      this.dirty.clear();
    }
    try {
      await (checkpoint ? controller.sync() : controller.pull());
    } catch {
    }
    const failed = !!controller.status().error;
    if (checkpoint) this.needsCheckpoint = failed;
    if (failed) for (const path3 of taken) this.dirty.add(path3);
    else if (!this.pendingWork()) await this.store.markSynced(Date.now());
    this.emit();
    return true;
  }
  async connect(config2) {
    if (!this.controller) throw new Error(this.failure ?? "Signalbox Sync isn't ready yet.");
    this.authError = null;
    this.clearPoll();
    await this.controller.begin(config2);
    this.openApproval();
    this.schedulePoll();
  }
  openApproval() {
    const url = this.controller?.authorization()?.url;
    if (url) window.open(url, "_blank");
  }
  cancelAuthorization() {
    this.clearPoll();
    this.controller?.cancel();
  }
  async setPaused(paused) {
    await this.controller?.pause(paused);
    if (!paused) await this.syncNow();
  }
  async disconnect() {
    this.clearPoll();
    await this.controller?.disconnect();
  }
  openConflicts() {
    new ConflictModal(this).open();
  }
  subscribe(listener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }
  emit() {
    if (this.statusBar) {
      const view = this.view();
      this.statusBar.setText(`Signalbox: ${view.title}`);
      this.statusBar.setAttr("aria-label", view.detail);
      this.statusBar.toggleClass("is-warn", view.tone === "warn" || view.tone === "error");
    }
    for (const listener of this.listeners) listener();
  }
  clearPoll() {
    if (this.pollTimer !== null) window.clearTimeout(this.pollTimer);
    this.pollTimer = null;
  }
  /** RFC 8628 polling at the server's interval; the controller raises it on slow_down. */
  schedulePoll() {
    this.clearPoll();
    const controller = this.controller, pending = controller?.authorization();
    if (!controller || !pending) return;
    if (Date.now() >= pending.expiresAt) {
      this.authError = "The approval request expired. Choose Connect Obsidian in Signalbox again.";
      controller.cancel();
      return;
    }
    this.pollTimer = window.setTimeout(async () => {
      this.pollTimer = null;
      try {
        if (await controller.poll()) {
          new import_obsidian8.Notice(`${this.vaultName} is connected to Signalbox.`);
          await this.syncNow();
          return;
        }
      } catch (failure) {
        if (terminalAuthorization.test(message(failure))) {
          this.authError = message(failure);
          controller.cancel();
          return;
        }
      }
      this.schedulePoll();
    }, pending.interval * 1e3);
  }
};
