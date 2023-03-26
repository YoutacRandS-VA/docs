var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// http-import:https:/unpkg.com/lodash-es@4.17.21/_listCacheClear.js
function listCacheClear2() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default;
var init_listCacheClear = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_listCacheClear.js"() {
    listCacheClear_default = listCacheClear2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/eq.js
function eq2(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default;
var init_eq = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/eq.js"() {
    eq_default = eq2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_assocIndexOf.js
function assocIndexOf2(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default;
var init_assocIndexOf = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_assocIndexOf.js"() {
    init_eq();
    assocIndexOf_default = assocIndexOf2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_listCacheDelete.js
function listCacheDelete2(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice3.call(data, index, 1);
  }
  --this.size;
  return true;
}
var arrayProto2, splice3, listCacheDelete_default;
var init_listCacheDelete = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_listCacheDelete.js"() {
    init_assocIndexOf();
    arrayProto2 = Array.prototype;
    splice3 = arrayProto2.splice;
    listCacheDelete_default = listCacheDelete2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_listCacheGet.js
function listCacheGet2(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default;
var init_listCacheGet = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_listCacheGet.js"() {
    init_assocIndexOf();
    listCacheGet_default = listCacheGet2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_listCacheHas.js
function listCacheHas2(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default;
var init_listCacheHas = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_listCacheHas.js"() {
    init_assocIndexOf();
    listCacheHas_default = listCacheHas2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_listCacheSet.js
function listCacheSet2(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default;
var init_listCacheSet = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_listCacheSet.js"() {
    init_assocIndexOf();
    listCacheSet_default = listCacheSet2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_ListCache.js
function ListCache2(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
var ListCache_default;
var init_ListCache = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_ListCache.js"() {
    init_listCacheClear();
    init_listCacheDelete();
    init_listCacheGet();
    init_listCacheHas();
    init_listCacheSet();
    ListCache2.prototype.clear = listCacheClear_default;
    ListCache2.prototype["delete"] = listCacheDelete_default;
    ListCache2.prototype.get = listCacheGet_default;
    ListCache2.prototype.has = listCacheHas_default;
    ListCache2.prototype.set = listCacheSet_default;
    ListCache_default = ListCache2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_stackClear.js
function stackClear2() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
var stackClear_default;
var init_stackClear = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_stackClear.js"() {
    init_ListCache();
    stackClear_default = stackClear2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_stackDelete.js
function stackDelete2(key) {
  var data = this.__data__, result3 = data["delete"](key);
  this.size = data.size;
  return result3;
}
var stackDelete_default;
var init_stackDelete = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_stackDelete.js"() {
    stackDelete_default = stackDelete2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_stackGet.js
function stackGet2(key) {
  return this.__data__.get(key);
}
var stackGet_default;
var init_stackGet = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_stackGet.js"() {
    stackGet_default = stackGet2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_stackHas.js
function stackHas2(key) {
  return this.__data__.has(key);
}
var stackHas_default;
var init_stackHas = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_stackHas.js"() {
    stackHas_default = stackHas2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_freeGlobal.js
var freeGlobal2, freeGlobal_default;
var init_freeGlobal = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_freeGlobal.js"() {
    freeGlobal2 = typeof global == "object" && global && global.Object === Object && global;
    freeGlobal_default = freeGlobal2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_root.js
var freeSelf2, root4, root_default;
var init_root = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_root.js"() {
    init_freeGlobal();
    freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
    root4 = freeGlobal_default || freeSelf2 || Function("return this")();
    root_default = root4;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_Symbol.js
var Symbol3, Symbol_default;
var init_Symbol = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_Symbol.js"() {
    init_root();
    Symbol3 = root_default.Symbol;
    Symbol_default = Symbol3;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_getRawTag.js
function getRawTag2(value) {
  var isOwn = hasOwnProperty2.call(value, symToStringTag2), tag = value[symToStringTag2];
  try {
    value[symToStringTag2] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result3 = nativeObjectToString2.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag2] = tag;
    } else {
      delete value[symToStringTag2];
    }
  }
  return result3;
}
var objectProto2, hasOwnProperty2, nativeObjectToString2, symToStringTag2, getRawTag_default;
var init_getRawTag = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_getRawTag.js"() {
    init_Symbol();
    objectProto2 = Object.prototype;
    hasOwnProperty2 = objectProto2.hasOwnProperty;
    nativeObjectToString2 = objectProto2.toString;
    symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
    getRawTag_default = getRawTag2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_objectToString.js
function objectToString2(value) {
  return nativeObjectToString3.call(value);
}
var objectProto3, nativeObjectToString3, objectToString_default;
var init_objectToString = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_objectToString.js"() {
    objectProto3 = Object.prototype;
    nativeObjectToString3 = objectProto3.toString;
    objectToString_default = objectToString2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_baseGetTag.js
function baseGetTag2(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag2 : nullTag2;
  }
  return symToStringTag3 && symToStringTag3 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var nullTag2, undefinedTag2, symToStringTag3, baseGetTag_default;
var init_baseGetTag = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_baseGetTag.js"() {
    init_Symbol();
    init_getRawTag();
    init_objectToString();
    nullTag2 = "[object Null]";
    undefinedTag2 = "[object Undefined]";
    symToStringTag3 = Symbol_default ? Symbol_default.toStringTag : void 0;
    baseGetTag_default = baseGetTag2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/isObject.js
function isObject4(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default;
var init_isObject = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/isObject.js"() {
    isObject_default = isObject4;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/isFunction.js
function isFunction4(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag2 || tag == genTag2 || tag == asyncTag2 || tag == proxyTag2;
}
var asyncTag2, funcTag2, genTag2, proxyTag2, isFunction_default;
var init_isFunction = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/isFunction.js"() {
    init_baseGetTag();
    init_isObject();
    asyncTag2 = "[object AsyncFunction]";
    funcTag2 = "[object Function]";
    genTag2 = "[object GeneratorFunction]";
    proxyTag2 = "[object Proxy]";
    isFunction_default = isFunction4;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_coreJsData.js
var coreJsData2, coreJsData_default;
var init_coreJsData = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_coreJsData.js"() {
    init_root();
    coreJsData2 = root_default["__core-js_shared__"];
    coreJsData_default = coreJsData2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_isMasked.js
function isMasked2(func) {
  return !!maskSrcKey2 && maskSrcKey2 in func;
}
var maskSrcKey2, isMasked_default;
var init_isMasked = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_isMasked.js"() {
    init_coreJsData();
    maskSrcKey2 = function() {
      var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    isMasked_default = isMasked2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_toSource.js
function toSource2(func) {
  if (func != null) {
    try {
      return funcToString2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var funcProto2, funcToString2, toSource_default;
var init_toSource = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_toSource.js"() {
    funcProto2 = Function.prototype;
    funcToString2 = funcProto2.toString;
    toSource_default = toSource2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_baseIsNative.js
function baseIsNative2(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative2 : reIsHostCtor2;
  return pattern.test(toSource_default(value));
}
var reRegExpChar2, reIsHostCtor2, funcProto3, objectProto4, funcToString3, hasOwnProperty3, reIsNative2, baseIsNative_default;
var init_baseIsNative = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_baseIsNative.js"() {
    init_isFunction();
    init_isMasked();
    init_isObject();
    init_toSource();
    reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g;
    reIsHostCtor2 = /^\[object .+?Constructor\]$/;
    funcProto3 = Function.prototype;
    objectProto4 = Object.prototype;
    funcToString3 = funcProto3.toString;
    hasOwnProperty3 = objectProto4.hasOwnProperty;
    reIsNative2 = RegExp(
      "^" + funcToString3.call(hasOwnProperty3).replace(reRegExpChar2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    baseIsNative_default = baseIsNative2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_getValue.js
function getValue3(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default;
var init_getValue = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_getValue.js"() {
    getValue_default = getValue3;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_getNative.js
function getNative2(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default;
var init_getNative = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_getNative.js"() {
    init_baseIsNative();
    init_getValue();
    getNative_default = getNative2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_Map.js
var Map3, Map_default;
var init_Map = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_Map.js"() {
    init_getNative();
    init_root();
    Map3 = getNative_default(root_default, "Map");
    Map_default = Map3;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_nativeCreate.js
var nativeCreate2, nativeCreate_default;
var init_nativeCreate = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_nativeCreate.js"() {
    init_getNative();
    nativeCreate2 = getNative_default(Object, "create");
    nativeCreate_default = nativeCreate2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_hashClear.js
function hashClear2() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default;
var init_hashClear = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_hashClear.js"() {
    init_nativeCreate();
    hashClear_default = hashClear2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_hashDelete.js
function hashDelete2(key) {
  var result3 = this.has(key) && delete this.__data__[key];
  this.size -= result3 ? 1 : 0;
  return result3;
}
var hashDelete_default;
var init_hashDelete = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_hashDelete.js"() {
    hashDelete_default = hashDelete2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_hashGet.js
function hashGet2(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result3 = data[key];
    return result3 === HASH_UNDEFINED2 ? void 0 : result3;
  }
  return hasOwnProperty4.call(data, key) ? data[key] : void 0;
}
var HASH_UNDEFINED2, objectProto5, hasOwnProperty4, hashGet_default;
var init_hashGet = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_hashGet.js"() {
    init_nativeCreate();
    HASH_UNDEFINED2 = "__lodash_hash_undefined__";
    objectProto5 = Object.prototype;
    hasOwnProperty4 = objectProto5.hasOwnProperty;
    hashGet_default = hashGet2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_hashHas.js
function hashHas2(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty5.call(data, key);
}
var objectProto6, hasOwnProperty5, hashHas_default;
var init_hashHas = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_hashHas.js"() {
    init_nativeCreate();
    objectProto6 = Object.prototype;
    hasOwnProperty5 = objectProto6.hasOwnProperty;
    hashHas_default = hashHas2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_hashSet.js
function hashSet2(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED3 : value;
  return this;
}
var HASH_UNDEFINED3, hashSet_default;
var init_hashSet = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_hashSet.js"() {
    init_nativeCreate();
    HASH_UNDEFINED3 = "__lodash_hash_undefined__";
    hashSet_default = hashSet2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_Hash.js
function Hash2(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
var Hash_default;
var init_Hash = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_Hash.js"() {
    init_hashClear();
    init_hashDelete();
    init_hashGet();
    init_hashHas();
    init_hashSet();
    Hash2.prototype.clear = hashClear_default;
    Hash2.prototype["delete"] = hashDelete_default;
    Hash2.prototype.get = hashGet_default;
    Hash2.prototype.has = hashHas_default;
    Hash2.prototype.set = hashSet_default;
    Hash_default = Hash2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_mapCacheClear.js
function mapCacheClear2() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default;
var init_mapCacheClear = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_mapCacheClear.js"() {
    init_Hash();
    init_ListCache();
    init_Map();
    mapCacheClear_default = mapCacheClear2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_isKeyable.js
function isKeyable2(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default;
var init_isKeyable = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_isKeyable.js"() {
    isKeyable_default = isKeyable2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_getMapData.js
function getMapData2(map, key) {
  var data = map.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default;
var init_getMapData = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_getMapData.js"() {
    init_isKeyable();
    getMapData_default = getMapData2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_mapCacheDelete.js
function mapCacheDelete2(key) {
  var result3 = getMapData_default(this, key)["delete"](key);
  this.size -= result3 ? 1 : 0;
  return result3;
}
var mapCacheDelete_default;
var init_mapCacheDelete = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_mapCacheDelete.js"() {
    init_getMapData();
    mapCacheDelete_default = mapCacheDelete2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_mapCacheGet.js
function mapCacheGet2(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default;
var init_mapCacheGet = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_mapCacheGet.js"() {
    init_getMapData();
    mapCacheGet_default = mapCacheGet2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_mapCacheHas.js
function mapCacheHas2(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default;
var init_mapCacheHas = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_mapCacheHas.js"() {
    init_getMapData();
    mapCacheHas_default = mapCacheHas2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_mapCacheSet.js
function mapCacheSet2(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default;
var init_mapCacheSet = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_mapCacheSet.js"() {
    init_getMapData();
    mapCacheSet_default = mapCacheSet2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_MapCache.js
function MapCache2(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
var MapCache_default;
var init_MapCache = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_MapCache.js"() {
    init_mapCacheClear();
    init_mapCacheDelete();
    init_mapCacheGet();
    init_mapCacheHas();
    init_mapCacheSet();
    MapCache2.prototype.clear = mapCacheClear_default;
    MapCache2.prototype["delete"] = mapCacheDelete_default;
    MapCache2.prototype.get = mapCacheGet_default;
    MapCache2.prototype.has = mapCacheHas_default;
    MapCache2.prototype.set = mapCacheSet_default;
    MapCache_default = MapCache2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_stackSet.js
function stackSet2(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache_default) {
    var pairs = data.__data__;
    if (!Map_default || pairs.length < LARGE_ARRAY_SIZE2 - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache_default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var LARGE_ARRAY_SIZE2, stackSet_default;
var init_stackSet = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_stackSet.js"() {
    init_ListCache();
    init_Map();
    init_MapCache();
    LARGE_ARRAY_SIZE2 = 200;
    stackSet_default = stackSet2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_Stack.js
function Stack2(entries) {
  var data = this.__data__ = new ListCache_default(entries);
  this.size = data.size;
}
var Stack_default;
var init_Stack = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_Stack.js"() {
    init_ListCache();
    init_stackClear();
    init_stackDelete();
    init_stackGet();
    init_stackHas();
    init_stackSet();
    Stack2.prototype.clear = stackClear_default;
    Stack2.prototype["delete"] = stackDelete_default;
    Stack2.prototype.get = stackGet_default;
    Stack2.prototype.has = stackHas_default;
    Stack2.prototype.set = stackSet_default;
    Stack_default = Stack2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_defineProperty.js
var defineProperty2, defineProperty_default;
var init_defineProperty = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_defineProperty.js"() {
    init_getNative();
    defineProperty2 = function() {
      try {
        var func = getNative_default(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    defineProperty_default = defineProperty2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_baseAssignValue.js
function baseAssignValue2(object, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var baseAssignValue_default;
var init_baseAssignValue = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_baseAssignValue.js"() {
    init_defineProperty();
    baseAssignValue_default = baseAssignValue2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_assignMergeValue.js
function assignMergeValue2(object, key, value) {
  if (value !== void 0 && !eq_default(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignMergeValue_default;
var init_assignMergeValue = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_assignMergeValue.js"() {
    init_baseAssignValue();
    init_eq();
    assignMergeValue_default = assignMergeValue2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_createBaseFor.js
function createBaseFor2(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var createBaseFor_default;
var init_createBaseFor = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_createBaseFor.js"() {
    createBaseFor_default = createBaseFor2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_baseFor.js
var baseFor2, baseFor_default;
var init_baseFor = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_baseFor.js"() {
    init_createBaseFor();
    baseFor2 = createBaseFor_default();
    baseFor_default = baseFor2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_cloneBuffer.js
function cloneBuffer2(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result3 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result3);
  return result3;
}
var freeExports, freeModule, moduleExports, Buffer2, allocUnsafe, cloneBuffer_default;
var init_cloneBuffer = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_cloneBuffer.js"() {
    init_root();
    freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    moduleExports = freeModule && freeModule.exports === freeExports;
    Buffer2 = moduleExports ? root_default.Buffer : void 0;
    allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    cloneBuffer_default = cloneBuffer2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_Uint8Array.js
var Uint8Array3, Uint8Array_default;
var init_Uint8Array = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_Uint8Array.js"() {
    init_root();
    Uint8Array3 = root_default.Uint8Array;
    Uint8Array_default = Uint8Array3;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_cloneArrayBuffer.js
function cloneArrayBuffer2(arrayBuffer) {
  var result3 = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array_default(result3).set(new Uint8Array_default(arrayBuffer));
  return result3;
}
var cloneArrayBuffer_default;
var init_cloneArrayBuffer = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_cloneArrayBuffer.js"() {
    init_Uint8Array();
    cloneArrayBuffer_default = cloneArrayBuffer2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_cloneTypedArray.js
function cloneTypedArray2(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var cloneTypedArray_default;
var init_cloneTypedArray = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_cloneTypedArray.js"() {
    init_cloneArrayBuffer();
    cloneTypedArray_default = cloneTypedArray2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_copyArray.js
function copyArray2(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var copyArray_default;
var init_copyArray = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_copyArray.js"() {
    copyArray_default = copyArray2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_baseCreate.js
var objectCreate2, baseCreate2, baseCreate_default;
var init_baseCreate = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_baseCreate.js"() {
    init_isObject();
    objectCreate2 = Object.create;
    baseCreate2 = function() {
      function object() {
      }
      return function(proto) {
        if (!isObject_default(proto)) {
          return {};
        }
        if (objectCreate2) {
          return objectCreate2(proto);
        }
        object.prototype = proto;
        var result3 = new object();
        object.prototype = void 0;
        return result3;
      };
    }();
    baseCreate_default = baseCreate2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_overArg.js
function overArg2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var overArg_default;
var init_overArg = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_overArg.js"() {
    overArg_default = overArg2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_getPrototype.js
var getPrototype2, getPrototype_default;
var init_getPrototype = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_getPrototype.js"() {
    init_overArg();
    getPrototype2 = overArg_default(Object.getPrototypeOf, Object);
    getPrototype_default = getPrototype2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_isPrototype.js
function isPrototype2(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto7;
  return value === proto;
}
var objectProto7, isPrototype_default;
var init_isPrototype = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_isPrototype.js"() {
    objectProto7 = Object.prototype;
    isPrototype_default = isPrototype2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_initCloneObject.js
function initCloneObject2(object) {
  return typeof object.constructor == "function" && !isPrototype_default(object) ? baseCreate_default(getPrototype_default(object)) : {};
}
var initCloneObject_default;
var init_initCloneObject = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_initCloneObject.js"() {
    init_baseCreate();
    init_getPrototype();
    init_isPrototype();
    initCloneObject_default = initCloneObject2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/isObjectLike.js
function isObjectLike2(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default;
var init_isObjectLike = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/isObjectLike.js"() {
    isObjectLike_default = isObjectLike2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_baseIsArguments.js
function baseIsArguments2(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag2;
}
var argsTag2, baseIsArguments_default;
var init_baseIsArguments = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_baseIsArguments.js"() {
    init_baseGetTag();
    init_isObjectLike();
    argsTag2 = "[object Arguments]";
    baseIsArguments_default = baseIsArguments2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/isArguments.js
var objectProto8, hasOwnProperty6, propertyIsEnumerable2, isArguments2, isArguments_default;
var init_isArguments = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/isArguments.js"() {
    init_baseIsArguments();
    init_isObjectLike();
    objectProto8 = Object.prototype;
    hasOwnProperty6 = objectProto8.hasOwnProperty;
    propertyIsEnumerable2 = objectProto8.propertyIsEnumerable;
    isArguments2 = baseIsArguments_default(function() {
      return arguments;
    }()) ? baseIsArguments_default : function(value) {
      return isObjectLike_default(value) && hasOwnProperty6.call(value, "callee") && !propertyIsEnumerable2.call(value, "callee");
    };
    isArguments_default = isArguments2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/isArray.js
var isArray3, isArray_default;
var init_isArray = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/isArray.js"() {
    isArray3 = Array.isArray;
    isArray_default = isArray3;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/isLength.js
function isLength2(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER3;
}
var MAX_SAFE_INTEGER3, isLength_default;
var init_isLength = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/isLength.js"() {
    MAX_SAFE_INTEGER3 = 9007199254740991;
    isLength_default = isLength2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/isArrayLike.js
function isArrayLike2(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default;
var init_isArrayLike = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/isArrayLike.js"() {
    init_isFunction();
    init_isLength();
    isArrayLike_default = isArrayLike2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/isArrayLikeObject.js
function isArrayLikeObject2(value) {
  return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default;
var init_isArrayLikeObject = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/isArrayLikeObject.js"() {
    init_isArrayLike();
    init_isObjectLike();
    isArrayLikeObject_default = isArrayLikeObject2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/stubFalse.js
function stubFalse2() {
  return false;
}
var stubFalse_default;
var init_stubFalse = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/stubFalse.js"() {
    stubFalse_default = stubFalse2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/isBuffer.js
var freeExports2, freeModule2, moduleExports2, Buffer3, nativeIsBuffer, isBuffer2, isBuffer_default;
var init_isBuffer = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/isBuffer.js"() {
    init_root();
    init_stubFalse();
    freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
    freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
    moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
    Buffer3 = moduleExports2 ? root_default.Buffer : void 0;
    nativeIsBuffer = Buffer3 ? Buffer3.isBuffer : void 0;
    isBuffer2 = nativeIsBuffer || stubFalse_default;
    isBuffer_default = isBuffer2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/isPlainObject.js
function isPlainObject2(value) {
  if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag2) {
    return false;
  }
  var proto = getPrototype_default(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty7.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString4.call(Ctor) == objectCtorString2;
}
var objectTag2, funcProto4, objectProto9, funcToString4, hasOwnProperty7, objectCtorString2, isPlainObject_default;
var init_isPlainObject = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/isPlainObject.js"() {
    init_baseGetTag();
    init_getPrototype();
    init_isObjectLike();
    objectTag2 = "[object Object]";
    funcProto4 = Function.prototype;
    objectProto9 = Object.prototype;
    funcToString4 = funcProto4.toString;
    hasOwnProperty7 = objectProto9.hasOwnProperty;
    objectCtorString2 = funcToString4.call(Object);
    isPlainObject_default = isPlainObject2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_baseIsTypedArray.js
function baseIsTypedArray2(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags2[baseGetTag_default(value)];
}
var argsTag3, arrayTag2, boolTag2, dateTag2, errorTag2, funcTag3, mapTag2, numberTag2, objectTag3, regexpTag2, setTag2, stringTag2, weakMapTag2, arrayBufferTag2, dataViewTag2, float32Tag2, float64Tag2, int8Tag2, int16Tag2, int32Tag2, uint8Tag2, uint8ClampedTag2, uint16Tag2, uint32Tag2, typedArrayTags2, baseIsTypedArray_default;
var init_baseIsTypedArray = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_baseIsTypedArray.js"() {
    init_baseGetTag();
    init_isLength();
    init_isObjectLike();
    argsTag3 = "[object Arguments]";
    arrayTag2 = "[object Array]";
    boolTag2 = "[object Boolean]";
    dateTag2 = "[object Date]";
    errorTag2 = "[object Error]";
    funcTag3 = "[object Function]";
    mapTag2 = "[object Map]";
    numberTag2 = "[object Number]";
    objectTag3 = "[object Object]";
    regexpTag2 = "[object RegExp]";
    setTag2 = "[object Set]";
    stringTag2 = "[object String]";
    weakMapTag2 = "[object WeakMap]";
    arrayBufferTag2 = "[object ArrayBuffer]";
    dataViewTag2 = "[object DataView]";
    float32Tag2 = "[object Float32Array]";
    float64Tag2 = "[object Float64Array]";
    int8Tag2 = "[object Int8Array]";
    int16Tag2 = "[object Int16Array]";
    int32Tag2 = "[object Int32Array]";
    uint8Tag2 = "[object Uint8Array]";
    uint8ClampedTag2 = "[object Uint8ClampedArray]";
    uint16Tag2 = "[object Uint16Array]";
    uint32Tag2 = "[object Uint32Array]";
    typedArrayTags2 = {};
    typedArrayTags2[float32Tag2] = typedArrayTags2[float64Tag2] = typedArrayTags2[int8Tag2] = typedArrayTags2[int16Tag2] = typedArrayTags2[int32Tag2] = typedArrayTags2[uint8Tag2] = typedArrayTags2[uint8ClampedTag2] = typedArrayTags2[uint16Tag2] = typedArrayTags2[uint32Tag2] = true;
    typedArrayTags2[argsTag3] = typedArrayTags2[arrayTag2] = typedArrayTags2[arrayBufferTag2] = typedArrayTags2[boolTag2] = typedArrayTags2[dataViewTag2] = typedArrayTags2[dateTag2] = typedArrayTags2[errorTag2] = typedArrayTags2[funcTag3] = typedArrayTags2[mapTag2] = typedArrayTags2[numberTag2] = typedArrayTags2[objectTag3] = typedArrayTags2[regexpTag2] = typedArrayTags2[setTag2] = typedArrayTags2[stringTag2] = typedArrayTags2[weakMapTag2] = false;
    baseIsTypedArray_default = baseIsTypedArray2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_baseUnary.js
function baseUnary2(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default;
var init_baseUnary = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_baseUnary.js"() {
    baseUnary_default = baseUnary2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_nodeUtil.js
var freeExports3, freeModule3, moduleExports3, freeProcess, nodeUtil2, nodeUtil_default;
var init_nodeUtil = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_nodeUtil.js"() {
    init_freeGlobal();
    freeExports3 = typeof exports == "object" && exports && !exports.nodeType && exports;
    freeModule3 = freeExports3 && typeof module == "object" && module && !module.nodeType && module;
    moduleExports3 = freeModule3 && freeModule3.exports === freeExports3;
    freeProcess = moduleExports3 && freeGlobal_default.process;
    nodeUtil2 = function() {
      try {
        var types = freeModule3 && freeModule3.require && freeModule3.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    nodeUtil_default = nodeUtil2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/isTypedArray.js
var nodeIsTypedArray2, isTypedArray2, isTypedArray_default;
var init_isTypedArray = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/isTypedArray.js"() {
    init_baseIsTypedArray();
    init_baseUnary();
    init_nodeUtil();
    nodeIsTypedArray2 = nodeUtil_default && nodeUtil_default.isTypedArray;
    isTypedArray2 = nodeIsTypedArray2 ? baseUnary_default(nodeIsTypedArray2) : baseIsTypedArray_default;
    isTypedArray_default = isTypedArray2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_safeGet.js
function safeGet2(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var safeGet_default;
var init_safeGet = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_safeGet.js"() {
    safeGet_default = safeGet2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_assignValue.js
function assignValue2(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty8.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var objectProto10, hasOwnProperty8, assignValue_default;
var init_assignValue = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_assignValue.js"() {
    init_baseAssignValue();
    init_eq();
    objectProto10 = Object.prototype;
    hasOwnProperty8 = objectProto10.hasOwnProperty;
    assignValue_default = assignValue2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_copyObject.js
function copyObject2(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue_default(object, key, newValue);
    } else {
      assignValue_default(object, key, newValue);
    }
  }
  return object;
}
var copyObject_default;
var init_copyObject = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_copyObject.js"() {
    init_assignValue();
    init_baseAssignValue();
    copyObject_default = copyObject2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_baseTimes.js
function baseTimes2(n, iteratee) {
  var index = -1, result3 = Array(n);
  while (++index < n) {
    result3[index] = iteratee(index);
  }
  return result3;
}
var baseTimes_default;
var init_baseTimes = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_baseTimes.js"() {
    baseTimes_default = baseTimes2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_isIndex.js
function isIndex2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER4 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint2.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var MAX_SAFE_INTEGER4, reIsUint2, isIndex_default;
var init_isIndex = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_isIndex.js"() {
    MAX_SAFE_INTEGER4 = 9007199254740991;
    reIsUint2 = /^(?:0|[1-9]\d*)$/;
    isIndex_default = isIndex2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_arrayLikeKeys.js
function arrayLikeKeys2(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result3 = skipIndexes ? baseTimes_default(value.length, String) : [], length = result3.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty9.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex_default(key, length)))) {
      result3.push(key);
    }
  }
  return result3;
}
var objectProto11, hasOwnProperty9, arrayLikeKeys_default;
var init_arrayLikeKeys = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_arrayLikeKeys.js"() {
    init_baseTimes();
    init_isArguments();
    init_isArray();
    init_isBuffer();
    init_isIndex();
    init_isTypedArray();
    objectProto11 = Object.prototype;
    hasOwnProperty9 = objectProto11.hasOwnProperty;
    arrayLikeKeys_default = arrayLikeKeys2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_nativeKeysIn.js
function nativeKeysIn2(object) {
  var result3 = [];
  if (object != null) {
    for (var key in Object(object)) {
      result3.push(key);
    }
  }
  return result3;
}
var nativeKeysIn_default;
var init_nativeKeysIn = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_nativeKeysIn.js"() {
    nativeKeysIn_default = nativeKeysIn2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_baseKeysIn.js
function baseKeysIn2(object) {
  if (!isObject_default(object)) {
    return nativeKeysIn_default(object);
  }
  var isProto = isPrototype_default(object), result3 = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty10.call(object, key)))) {
      result3.push(key);
    }
  }
  return result3;
}
var objectProto12, hasOwnProperty10, baseKeysIn_default;
var init_baseKeysIn = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_baseKeysIn.js"() {
    init_isObject();
    init_isPrototype();
    init_nativeKeysIn();
    objectProto12 = Object.prototype;
    hasOwnProperty10 = objectProto12.hasOwnProperty;
    baseKeysIn_default = baseKeysIn2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/keysIn.js
function keysIn2(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object, true) : baseKeysIn_default(object);
}
var keysIn_default;
var init_keysIn = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/keysIn.js"() {
    init_arrayLikeKeys();
    init_baseKeysIn();
    init_isArrayLike();
    keysIn_default = keysIn2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/toPlainObject.js
function toPlainObject2(value) {
  return copyObject_default(value, keysIn_default(value));
}
var toPlainObject_default;
var init_toPlainObject = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/toPlainObject.js"() {
    init_copyObject();
    init_keysIn();
    toPlainObject_default = toPlainObject2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_baseMergeDeep.js
function baseMergeDeep2(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet_default(object, key), srcValue = safeGet_default(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue_default(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray_default(srcValue), isBuff = !isArr && isBuffer_default(srcValue), isTyped = !isArr && !isBuff && isTypedArray_default(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_default(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject_default(objValue)) {
        newValue = copyArray_default(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer_default(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray_default(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject_default(srcValue) || isArguments_default(srcValue)) {
      newValue = objValue;
      if (isArguments_default(objValue)) {
        newValue = toPlainObject_default(objValue);
      } else if (!isObject_default(objValue) || isFunction_default(objValue)) {
        newValue = initCloneObject_default(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue_default(object, key, newValue);
}
var baseMergeDeep_default;
var init_baseMergeDeep = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_baseMergeDeep.js"() {
    init_assignMergeValue();
    init_cloneBuffer();
    init_cloneTypedArray();
    init_copyArray();
    init_initCloneObject();
    init_isArguments();
    init_isArray();
    init_isArrayLikeObject();
    init_isBuffer();
    init_isFunction();
    init_isObject();
    init_isPlainObject();
    init_isTypedArray();
    init_safeGet();
    init_toPlainObject();
    baseMergeDeep_default = baseMergeDeep2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_baseMerge.js
function baseMerge2(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor_default(source, function(srcValue, key) {
    stack || (stack = new Stack_default());
    if (isObject_default(srcValue)) {
      baseMergeDeep_default(object, source, key, srcIndex, baseMerge2, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet_default(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue_default(object, key, newValue);
    }
  }, keysIn_default);
}
var baseMerge_default;
var init_baseMerge = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_baseMerge.js"() {
    init_Stack();
    init_assignMergeValue();
    init_baseFor();
    init_baseMergeDeep();
    init_isObject();
    init_keysIn();
    init_safeGet();
    baseMerge_default = baseMerge2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/identity.js
function identity2(value) {
  return value;
}
var identity_default;
var init_identity = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/identity.js"() {
    identity_default = identity2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_apply.js
function apply2(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var apply_default;
var init_apply = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_apply.js"() {
    apply_default = apply2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_overRest.js
function overRest2(func, start, transform) {
  start = nativeMax2(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax2(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply_default(func, this, otherArgs);
  };
}
var nativeMax2, overRest_default;
var init_overRest = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_overRest.js"() {
    init_apply();
    nativeMax2 = Math.max;
    overRest_default = overRest2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/constant.js
function constant2(value) {
  return function() {
    return value;
  };
}
var constant_default;
var init_constant = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/constant.js"() {
    constant_default = constant2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_baseSetToString.js
var baseSetToString2, baseSetToString_default;
var init_baseSetToString = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_baseSetToString.js"() {
    init_constant();
    init_defineProperty();
    init_identity();
    baseSetToString2 = !defineProperty_default ? identity_default : function(func, string) {
      return defineProperty_default(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant_default(string),
        "writable": true
      });
    };
    baseSetToString_default = baseSetToString2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_shortOut.js
function shortOut2(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow2(), remaining = HOT_SPAN2 - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT2) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var HOT_COUNT2, HOT_SPAN2, nativeNow2, shortOut_default;
var init_shortOut = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_shortOut.js"() {
    HOT_COUNT2 = 800;
    HOT_SPAN2 = 16;
    nativeNow2 = Date.now;
    shortOut_default = shortOut2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_setToString.js
var setToString2, setToString_default;
var init_setToString = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_setToString.js"() {
    init_baseSetToString();
    init_shortOut();
    setToString2 = shortOut_default(baseSetToString_default);
    setToString_default = setToString2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_baseRest.js
function baseRest2(func, start) {
  return setToString_default(overRest_default(func, start, identity_default), func + "");
}
var baseRest_default;
var init_baseRest = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_baseRest.js"() {
    init_identity();
    init_overRest();
    init_setToString();
    baseRest_default = baseRest2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_isIterateeCall.js
function isIterateeCall2(value, index, object) {
  if (!isObject_default(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike_default(object) && isIndex_default(index, object.length) : type == "string" && index in object) {
    return eq_default(object[index], value);
  }
  return false;
}
var isIterateeCall_default;
var init_isIterateeCall = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_isIterateeCall.js"() {
    init_eq();
    init_isArrayLike();
    init_isIndex();
    init_isObject();
    isIterateeCall_default = isIterateeCall2;
  }
});

// http-import:https:/unpkg.com/lodash-es@4.17.21/_createAssigner.js
function createAssigner2(assigner) {
  return baseRest_default(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall_default(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var createAssigner_default;
var init_createAssigner = __esm({
  "http-import:https:/unpkg.com/lodash-es@4.17.21/_createAssigner.js"() {
    init_baseRest();
    init_isIterateeCall();
    createAssigner_default = createAssigner2;
  }
});

// http-import:https://unpkg.com/lodash-es@4.17.21/merge.js
var merge2, merge_default;
var init_merge = __esm({
  "http-import:https://unpkg.com/lodash-es@4.17.21/merge.js"() {
    init_baseMerge();
    init_createAssigner();
    merge2 = createAssigner_default(function(object, source, srcIndex) {
      baseMerge_default(object, source, srcIndex);
    });
    merge_default = merge2;
  }
});

// app/src/components/examples/todo_mvc_atreyu_pouch/schema.js
var require_schema = __commonJS({
  "app/src/components/examples/todo_mvc_atreyu_pouch/schema.js"(exports2, module2) {
    init_merge();
    var startKeys = {
      all: {},
      completed: {},
      active: {}
    };
    self.startKeys = startKeys;
    var paths2 = {
      "/examples/todo_mvc_atreyu_pouch(/:view)": {
        name: "todos",
        get: {
          tags: ["window"]
        }
      },
      "[{keys:views}].length": {
        get: {
          tags: ["falcor"],
          handler: async ({ views, pouch }) => {
            const counters = await pouch.query("index", {
              group_level: 1,
              group: true,
              reduce: true
            });
            const viewMap = /* @__PURE__ */ new Map([
              [null, "all"],
              [true, "completed"],
              [false, "active"]
            ]);
            const values = {};
            counters.rows.forEach(({ key, value }) => {
              values[viewMap.get(key[0])] = value;
            });
            return views.map((view) => ({
              path: [view, "length"],
              value: values[view] || 0
            }));
          }
        }
      },
      "byId[{keys:ids}].[{keys:keys}]": {
        get: {
          tags: ["falcor"],
          handler: async ({ ids, keys, pouch }) => {
            const pouchRes = await pouch.allDocs({
              include_docs: true,
              keys: ids
            });
            const missingIds = [];
            const byId2 = {};
            pouchRes.rows.forEach((row) => {
              if (row.error === "not_found") {
                missingIds.push(row.key);
              } else if (!row.error) {
                if (row.doc) {
                  byId2[row.key] = row.doc;
                } else {
                  console.error(row);
                }
              } else {
                console.error(row);
              }
            });
            return {
              jsonGraph: {
                byId: byId2
              }
            };
          }
        },
        set: {
          tags: ["falcor"],
          handler: (jsonGraph) => {
            merge_default(byId, jsonGraph.byId);
            return {
              jsonGraph: {
                byId: jsonGraph.byId
              }
            };
          }
        }
      },
      "[{keys:views}][{ranges:indexRanges}][{keys:keys}]": {
        get: {
          tags: ["falcor"],
          handler: async ({ views, indexRanges, keys, pouch }) => {
            const { from, to } = indexRanges.reduce((result3, range3) => {
              if (!result3) {
                return range3;
              }
              return {
                from: Math.min(result3.from, range3.from),
                to: Math.max(result3.to, range3.to)
              };
            });
            const endKeys = {
              all: [null],
              completed: [true],
              active: [false]
            };
            const defStartKeys = {
              all: [null, {}, {}],
              completed: [true, {}, {}],
              active: [false, {}, {}]
            };
            const queries = views.map((view) => {
              let startkey = defStartKeys[view];
              let skip = from;
              let ix;
              for (ix = from; ix >= 0; ix--) {
                if (startKeys[view][ix]) {
                  startkey = startKeys[view][ix];
                  skip = from - ix;
                  break;
                }
              }
              const limit = to - from + 1;
              return pouch.query("index", {
                startkey,
                endkey: endKeys[view],
                reduce: false,
                include_docs: true,
                limit,
                skip,
                descending: true
              }).then(({ total_rows, rows, offset }) => {
                if (!rows || !rows.length) {
                  console.log({ from, to, limit, skip, ix, startkey, startKeys });
                  return;
                }
                lastI = rows.length - 1;
                startKeys[view][lastI + from] = rows[lastI].key;
                return rows.flatMap((row, i) => {
                  return [
                    {
                      path: [view, i + from],
                      value: { $type: "ref", value: ["byId", row.doc._id] }
                    },
                    ...keys.map((key) => ({
                      path: ["byId", row.doc._id, key],
                      value: row.doc[key]
                    }))
                  ];
                });
              }).catch((err) => {
                console.log(err);
              });
            });
            return Promise.all(queries).then((ress) => ress.flat());
          }
        }
      },
      create: {
        call: {
          tags: ["falcor"],
          handler: async ({ pouch }, [description]) => {
            function uuidv4() {
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                /[xy]/g,
                function(c) {
                  const r = Math.random() * 16 | 0;
                  const v = c == "x" ? r : r & 3 | 8;
                  return v.toString(16);
                }
              );
            }
            const todo = {
              _id: "jan:" + uuidv4(),
              description,
              completed: false,
              date: Date.now()
            };
            const res = await pouch.put(todo);
            todo._rev = res.rev;
            return [
              {
                path: ["byId", todo._id, ["description", "completed", "_id"]],
                value: todo
              },
              {
                path: [["all", "active"]],
                invalidated: true
              }
            ];
          }
        }
      },
      remove: {
        call: {
          tags: ["falcor"],
          handler: (_pathSet, [id]) => {
            delete byId[id];
            return [
              {
                path: ["byId", id],
                invalidated: true
              },
              {
                path: [["all", "active", "completed"]],
                invalidated: true
              }
            ];
          }
        }
      },
      clearCompleted: {
        call: {
          tags: ["falcor"],
          handler: () => {
            const deleted = [];
            getView("all").forEach((item) => {
              if (item.completed) {
                deleted.push(item.id);
                delete byId[item.id];
              }
            });
            return [
              {
                path: ["byId", deleted],
                invalidated: true
              },
              {
                path: [["all", "completed"]],
                invalidated: true
              }
            ];
          }
        }
      },
      toggleAll: {
        call: {
          tags: ["falcor"],
          handler: (_pathSet, [completed]) => {
            const changed = [];
            Object.keys(byId).forEach((id) => {
              if (byId[id].completed !== completed) {
                changed.push(id);
                byId[id].completed = completed;
              }
            });
            return [
              {
                path: ["byId", changed, "completed"],
                value: completed
              },
              {
                path: [["active", "completed"]],
                invalidated: true
              }
            ];
          }
        }
      },
      toggle: {
        call: {
          tags: ["falcor"],
          handler: async ({ pouch }, [_id, view, index, length]) => {
            const doc = await pouch.get(_id);
            const response = await pouch.put({
              _id,
              _rev: doc._rev,
              description: doc.description,
              completed: !doc.completed,
              date: doc.date
            });
            const views = ["completed", "active"];
            const pathSets = [
              {
                path: ["byId", _id, "completed"],
                value: !doc.completed
              },
              {
                path: [views.filter((k) => k !== view)],
                invalidated: true
              }
            ];
            if (view !== "all") {
              pathSets.push({
                path: [view, [{ from: index, to: length }, "length"]],
                invalidated: true
              });
            }
            return pathSets;
          }
        }
      }
    };
    module2.exports = { paths: paths2 };
  }
});

// ../../atreyu/app/build/deps/svelte-internal.js
function noop() {
}
function assign(tar, src2) {
  for (const k in src2)
    tar[k] = src2[k];
  return tar;
}
function add_location(element2, file6, line, column, char) {
  element2.__svelte_meta = {
    loc: { file: file6, line, column, char }
  };
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== "function") {
    throw new Error(`'${name}' is not a store with a 'subscribe' method`);
  }
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}
function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));
    if ($$scope.dirty === void 0) {
      return lets;
    }
    if (typeof lets === "object") {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);
      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }
      return merged;
    }
    return $$scope.dirty | lets;
  }
  return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
  if (slot_changes) {
    const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}
function get_all_dirty_from_scope($$scope) {
  if ($$scope.ctx.length > 32) {
    const dirty = [];
    const length = $$scope.ctx.length / 32;
    for (let i = 0; i < length; i++) {
      dirty[i] = -1;
    }
    return dirty;
  }
  return -1;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
var is_hydrating = false;
function start_hydrating() {
  is_hydrating = true;
}
function end_hydrating() {
  is_hydrating = false;
}
function append(target, node) {
  target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
  const append_styles_to = get_root_for_style(target);
  if (!append_styles_to.getElementById(style_sheet_id)) {
    const style = element("style");
    style.id = style_sheet_id;
    style.textContent = styles;
    append_stylesheet(append_styles_to, style);
  }
}
function get_root_for_style(node) {
  if (!node)
    return document;
  const root5 = node.getRootNode ? node.getRootNode() : node.ownerDocument;
  if (root5 && root5.host) {
    return root5;
  }
  return node.ownerDocument;
}
function append_stylesheet(node, style) {
  append(node.head || node, style);
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i])
      iterations[i].d(detaching);
  }
}
function element(name) {
  return document.createElement(name);
}
function text(data) {
  return document.createTextNode(data);
}
function empty() {
  return text("");
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_style(node, key, value, important) {
  if (value === null) {
    node.style.removeProperty(key);
  } else {
    node.style.setProperty(key, value, important ? "important" : "");
  }
}
function toggle_class(element2, name, toggle) {
  element2.classList[toggle ? "add" : "remove"](name);
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, bubbles, cancelable, detail);
  return e;
}
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail, { cancelable = false } = {}) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail, { cancelable });
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
      return !event.defaultPrevented;
    }
    return true;
  };
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
  return context;
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
function hasContext(key) {
  return get_current_component().$$.context.has(key);
}
var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = Promise.resolve();
var update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
var seen_callbacks = /* @__PURE__ */ new Set();
var flushidx = 0;
function flush() {
  const saved_component = current_component;
  do {
    while (flushidx < dirty_components.length) {
      const component = dirty_components[flushidx];
      flushidx++;
      set_current_component(component);
      update(component.$$);
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
var outroing = /* @__PURE__ */ new Set();
var outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block))
      return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2)
          block.d(1);
        callback();
      }
    });
    block.o(local);
  } else if (callback) {
    callback();
  }
}
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
function create_component(block) {
  block && block.c();
}
function mount_component(component, target, anchor, customElement) {
  const { fragment, on_mount, on_destroy, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = on_mount.map(run).filter(is_function);
      if (on_destroy) {
        on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance7, create_fragment7, not_equal, props, append_styles2, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles2 && append_styles2($$.root);
  let ready = false;
  $$.ctx = instance7 ? instance7(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment7 ? create_fragment7($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      const nodes2 = children(options.target);
      $$.fragment && $$.fragment.l(nodes2);
      nodes2.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    end_hydrating();
    flush();
  }
  set_current_component(parent_component);
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const { on_mount } = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr2, _oldValue, newValue) {
      this[attr2] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}
var SvelteComponent = class {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1)
        callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
};
function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, Object.assign({ version: "3.49.0" }, detail), { bubbles: true }));
}
function append_dev(target, node) {
  dispatch_dev("SvelteDOMInsert", { target, node });
  append(target, node);
}
function insert_dev(target, node, anchor) {
  dispatch_dev("SvelteDOMInsert", { target, node, anchor });
  insert(target, node, anchor);
}
function detach_dev(node) {
  dispatch_dev("SvelteDOMRemove", { node });
  detach(node);
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
  const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default)
    modifiers.push("preventDefault");
  if (has_stop_propagation)
    modifiers.push("stopPropagation");
  dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
  const dispose2 = listen(node, event, handler, options);
  return () => {
    dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
    dispose2();
  };
}
function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null)
    dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
  else
    dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
}
function validate_each_argument(arg) {
  if (typeof arg !== "string" && !(arg && typeof arg === "object" && "length" in arg)) {
    let msg = "{#each} only iterates over array-like objects.";
    if (typeof Symbol === "function" && arg && Symbol.iterator in arg) {
      msg += " You can use a spread to convert this iterable into an array.";
    }
    throw new Error(msg);
  }
}
function validate_slots(name, slot, keys) {
  for (const slot_key of Object.keys(slot)) {
    if (!~keys.indexOf(slot_key)) {
      console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
    }
  }
}
var SvelteComponentDev = class extends SvelteComponent {
  constructor(options) {
    if (!options || !options.target && !options.$$inline) {
      throw new Error("'target' is a required option");
    }
    super();
  }
  $destroy() {
    super.$destroy();
    this.$destroy = () => {
      console.warn("Component was already destroyed");
    };
  }
  $capture_state() {
  }
  $inject_state() {
  }
};

// ../../atreyu/app/src/lib/proxy-object.js
var errorHandlers = {
  deleteProperty() {
    console.error("error: calling `delete` on atreyu proxy.");
  },
  defineProperty(oTarget, sKey, oDesc) {
    console.error("error: calling `defineProperty` on atreyu proxy.");
  },
  getOwnPropertyDescriptor(oTarget, sKey) {
    console.error("error: calling `getOwnPropertyDescriptor` on atreyu proxy.");
    return { configurable: true, enumerable: false, value: 5 };
  },
  ownKeys(oTarget, sKey) {
    console.error("error: calling ownKeys on atreyu proxy not supported.");
    return ["ownKeys test"];
  },
  getPrototypeOf(target) {
    console.error("error: getting prototype on atreyu proxy not supported.");
    return Object;
  }
};
var _start = Symbol("start");
var _end = Symbol("end");
function clean(name, endRegex) {
  let cleanKey;
  let delim;
  let isPathEnd = false;
  const rxRes = endRegex.exec(name);
  if (rxRes) {
    isPathEnd = true;
    delim = rxRes[0];
    let suffixLen = name.length - rxRes.index;
    cleanKey = name.slice(0, -suffixLen);
  } else {
    cleanKey = name;
  }
  if (cleanKey !== "") {
    const maybeNumber = Number(cleanKey);
    cleanKey = !isNaN(maybeNumber) ? maybeNumber : cleanKey;
  }
  return { isPathEnd, cleanKey, delim };
}
function makeProxy({ from, get: get5, set: set4, call: call3, delims = ["$"], id }) {
  const endRegex = new RegExp(`(\\${delims.join("|\\")})$`);
  function objProxy(rootPath, subObj, rev) {
    return new Proxy(subObj, {
      ...errorHandlers,
      has(target, key) {
        if (key === Symbol.iterator) {
          return;
        }
        if (key === "length") {
          return true;
        }
        console.log("has function trap not well supported", target, key);
        return true;
      },
      apply(target, _thisArg, args) {
        const path = [...rootPath];
        path.pop();
        const cleanKey = rootPath[rootPath.length - 1];
        if (cleanKey === "slice") {
          const arr = {
            length: args[1] - args[0],
            [_start]: args[0],
            [_end]: args[1]
          };
          return objProxy(path, arr, rev);
        } else if (cleanKey === "forEach") {
          console.error("direct forEach call not allowed. please post your use case to get support.");
        } else if (cleanKey === "map") {
          console.error("direct map call not allowed. please post your use case to get support.");
          console.log(args, target, subObj);
        }
        return call3(rootPath, args, "", id);
      },
      set(target, key, newValue, subObjProxy) {
        const { cleanKey } = clean(key, endRegex);
        const path = [...rootPath, cleanKey];
        let delim = "";
        return set4(path, newValue, delim, id);
      },
      get(obj, key) {
        if (key === Symbol.toPrimitive) {
          return (_hint) => {
            const path = [...rootPath];
            path.pop();
            const cleanKey2 = rootPath[rootPath.length - 1];
            return get5(path, subObj[cleanKey2], cleanKey2, id);
          };
        }
        if (typeof key !== "string") {
          console.warn('did your forget the trailing "$"? Non string key access not supported yet, if needed, raise github issue explaining usecase ', { rootPath, key });
          return false;
        }
        let { isPathEnd, cleanKey, delim } = clean(key, endRegex);
        if (cleanKey === "map") {
          return (fun) => {
            if (typeof obj[_start] === "undefined") {
              console.error("map is not allowed on virtual unbounded arrays, you need to use slice first. Please read about non ataomic falcor arrays before you use this!");
              return [];
            }
            for (let i = 0; i < obj.length; i++) {
              obj[i] = fun(objProxy([...rootPath, i + obj[_start]], [], rev), i, i + obj[_start]);
            }
            return obj;
          };
        }
        if (cleanKey === "_rev" && typeof subObj[cleanKey] === "undefined") {
          return get5([...rootPath, cleanKey], subObj, delim, id);
        }
        if (typeof obj?.[_start] !== "undefined") {
          if (!isNaN(cleanKey)) {
            cleanKey = cleanKey + obj[_start];
          } else if (cleanKey !== "length") {
            console.error("unexpected slice access, please raise github issue with your usecase");
          }
        }
        if (isPathEnd) {
          return get5([...rootPath, cleanKey], subObj[cleanKey], delim, id);
        }
        if (typeof subObj[cleanKey] === "undefined") {
          if (cleanKey === "length") {
            return get5([...rootPath, cleanKey], 0, delim, id);
          }
          return objProxy([...rootPath, cleanKey], from, rev);
        }
        if (typeof subObj[cleanKey] !== "object") {
          if (cleanKey === "length") {
            return get5([...rootPath, cleanKey], subObj[cleanKey], delim, id);
          }
          return subObj[cleanKey];
        }
        return objProxy([...rootPath, cleanKey], subObj[cleanKey], rev);
      }
    });
  }
  return objProxy([], from, 0);
}

// ../../atreyu/app/build/deps/falcor.js
function getAugmentedNamespace(n) {
  var f = n.default;
  if (typeof f == "function") {
    var a = function() {
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var functionTypeof = "function";
var isFunction$5 = function isFunction(func) {
  return Boolean(func) && typeof func === functionTypeof;
};
var objTypeof$1 = "object";
var isObject$f = function isObject(value) {
  return value !== null && typeof value === objTypeof$1;
};
var isObject$e = isObject$f;
var hasOwn$3 = Object.prototype.hasOwnProperty;
var hasOwn_1 = function(obj, prop) {
  return isObject$e(obj) && hasOwn$3.call(obj, prop);
};
var isFunction$4 = isFunction$5;
var hasOwn$2 = hasOwn_1;
function ModelRoot$1(o) {
  var options = o || {};
  this.syncRefCount = 0;
  this.expired = options.expired || [];
  this.unsafeMode = options.unsafeMode || false;
  this.cache = {};
  if (isFunction$4(options.comparator)) {
    this.comparator = options.comparator;
  }
  if (isFunction$4(options.errorSelector)) {
    this.errorSelector = options.errorSelector;
  }
  if (isFunction$4(options.onChange)) {
    this.onChange = options.onChange;
  }
}
ModelRoot$1.prototype.errorSelector = function errorSelector(x, y) {
  return y;
};
ModelRoot$1.prototype.comparator = function comparator(cacheNode, messageNode) {
  if (hasOwn$2(cacheNode, "value") && hasOwn$2(messageNode, "value")) {
    return cacheNode.value === messageNode.value && cacheNode.$type === messageNode.$type && cacheNode.$expires === messageNode.$expires;
  }
  return cacheNode === messageNode;
};
var ModelRoot_1 = ModelRoot$1;
function ModelDataSourceAdapter$1(model) {
  this._model = model._materialize().treatErrorsAsValues();
}
ModelDataSourceAdapter$1.prototype.get = function get(pathSets) {
  return this._model.get.apply(this._model, pathSets)._toJSONG();
};
ModelDataSourceAdapter$1.prototype.set = function set(jsongResponse) {
  return this._model.set(jsongResponse)._toJSONG();
};
ModelDataSourceAdapter$1.prototype.call = function call(path, args, suffixes, paths2) {
  var params = [path, args, suffixes];
  Array.prototype.push.apply(params, paths2);
  return this._model.call.apply(this._model, params)._toJSONG();
};
var ModelDataSourceAdapter_1 = ModelDataSourceAdapter$1;
var RequestTypes$1 = {
  GetRequest: "GET"
};
var reservedPrefix$1 = "$";
var reservedPrefix = reservedPrefix$1;
var privatePrefix$2 = reservedPrefix + "_";
var ref$1;
var hasRequiredRef;
function requireRef() {
  if (hasRequiredRef)
    return ref$1;
  hasRequiredRef = 1;
  ref$1 = privatePrefix$2 + "ref";
  return ref$1;
}
var __ref$4 = requireRef();
var createHardlink$2 = function createHardlink(from, to) {
  var backRefs = to.$_refsLength || 0;
  to[__ref$4 + backRefs] = from;
  to.$_refsLength = backRefs + 1;
  from.$_refIndex = backRefs;
  from.$_context = to;
};
var ref = "ref";
var now$3 = Date.now;
var expiresNow$1 = 0;
var expiresNever = 1;
var now$2 = now$3;
var $now$1 = expiresNow$1;
var $never$1 = expiresNever;
var isAlreadyExpired = function isAlreadyExpired2(node) {
  var exp = node.$expires;
  return exp != null && exp !== $never$1 && exp !== $now$1 && exp < now$2();
};
var objTypeof = "object";
var isPrimitive$4 = function isPrimitive(value) {
  return value == null || typeof value !== objTypeof;
};
var splice$2 = function lruSplice(root5, object) {
  var prev = object.$_prev;
  var next = object.$_next;
  if (next) {
    next.$_prev = prev;
  }
  if (prev) {
    prev.$_next = next;
  }
  object.$_prev = object.$_next = void 0;
  if (object === root5.$_head) {
    root5.$_head = next;
  }
  if (object === root5.$_tail) {
    root5.$_tail = prev;
  }
};
var splice$1 = splice$2;
var expireNode$5 = function expireNode(node, expired, lru) {
  if (!node.$_invalidated) {
    node.$_invalidated = true;
    expired.push(node);
    splice$1(lru, node);
  }
  return node;
};
var isArray$9 = Array.isArray;
var iterateKeySet$7 = function iterateKeySet(keySet, note) {
  if (note.isArray === void 0) {
    initializeNote(keySet, note);
  }
  if (note.isArray) {
    var nextValue;
    do {
      if (note.loaded && note.rangeOffset > note.to) {
        ++note.arrayOffset;
        note.loaded = false;
      }
      var idx = note.arrayOffset, length = keySet.length;
      if (idx >= length) {
        note.done = true;
        break;
      }
      var el = keySet[note.arrayOffset];
      if (el !== null && typeof el === "object") {
        if (!note.loaded) {
          initializeRange(el, note);
        }
        if (note.empty) {
          continue;
        }
        nextValue = note.rangeOffset++;
      } else {
        ++note.arrayOffset;
        nextValue = el;
      }
    } while (nextValue === void 0);
    return nextValue;
  } else if (note.isObject) {
    if (!note.loaded) {
      initializeRange(keySet, note);
    }
    if (note.rangeOffset > note.to) {
      note.done = true;
      return void 0;
    }
    return note.rangeOffset++;
  } else {
    if (!note.loaded) {
      note.loaded = true;
      return keySet;
    }
    note.done = true;
    return void 0;
  }
};
function initializeRange(key, memo) {
  var from = memo.from = key.from || 0;
  var to = memo.to = key.to || (typeof key.length === "number" && memo.from + key.length - 1 || 0);
  memo.rangeOffset = memo.from;
  memo.loaded = true;
  if (from > to) {
    memo.empty = true;
  }
}
function initializeNote(key, note) {
  note.done = false;
  var isObject5 = note.isObject = !!(key && typeof key === "object");
  note.isArray = isObject5 && isArray$9(key);
  note.arrayOffset = 0;
}
var iterateKeySet$6 = iterateKeySet$7;
var toTree$2 = function toTree(paths2) {
  return paths2.reduce(__reducer, {});
};
function __reducer(acc, path) {
  innerToTree(acc, path, 0);
  return acc;
}
function innerToTree(seed, path, depth) {
  var keySet = path[depth];
  var iteratorNote = {};
  var key;
  var nextDepth = depth + 1;
  key = iterateKeySet$6(keySet, iteratorNote);
  while (!iteratorNote.done) {
    var next = Object.prototype.hasOwnProperty.call(seed, key) && seed[key];
    if (!next) {
      if (nextDepth === path.length) {
        seed[key] = null;
      } else if (key !== void 0) {
        next = seed[key] = {};
      }
    }
    if (nextDepth < path.length) {
      innerToTree(next, path, nextDepth);
    }
    key = iterateKeySet$6(keySet, iteratorNote);
  }
}
var iterateKeySet$5 = iterateKeySet$7;
var hasIntersection$2 = function hasIntersection(tree, path, depth) {
  var current = tree;
  var intersects = true;
  for (; intersects && depth < path.length; ++depth) {
    var key = path[depth];
    var keyType = typeof key;
    if (key && keyType === "object") {
      var note = {};
      var innerKey = iterateKeySet$5(key, note);
      var nextDepth = depth + 1;
      do {
        var next = current[innerKey];
        intersects = next !== void 0;
        if (intersects) {
          intersects = hasIntersection(next, path, nextDepth);
        }
        innerKey = iterateKeySet$5(key, note);
      } while (intersects && !note.done);
      break;
    }
    current = current[key];
    intersects = current !== void 0;
  }
  return intersects;
};
var hasIntersection$1 = hasIntersection$2;
var pathsComplementFromTree = function pathsComplementFromTree2(paths2, tree) {
  var out = [];
  var outLength = -1;
  for (var i = 0, len = paths2.length; i < len; ++i) {
    if (!hasIntersection$1(tree, paths2[i], 0)) {
      out[++outLength] = paths2[i];
    }
  }
  return out;
};
var hasIntersection2 = hasIntersection$2;
var pathsComplementFromLengthTree = function pathsComplementFromLengthTree2(paths2, tree) {
  var out = [];
  var outLength = -1;
  for (var i = 0, len = paths2.length; i < len; ++i) {
    var path = paths2[i];
    if (!hasIntersection2(tree[path.length], path, 0)) {
      out[++outLength] = path;
    }
  }
  return out;
};
var jsonKey = {};
function toJsonKey(obj) {
  if (Object.prototype.toString.call(obj) === "[object Object]") {
    var key = JSON.stringify(obj, replacer);
    if (key[0] === "{") {
      return key;
    }
  }
  throw new TypeError("Only plain objects can be converted to JSON keys");
}
function replacer(key, value) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return value;
  }
  return Object.keys(value).sort().reduce(function(acc, k) {
    acc[k] = value[k];
    return acc;
  }, {});
}
function maybeJsonKey(key) {
  if (typeof key !== "string" || key[0] !== "{") {
    return;
  }
  var parsed;
  try {
    parsed = JSON.parse(key);
  } catch (e) {
    return;
  }
  if (JSON.stringify(parsed, replacer) !== key) {
    return;
  }
  return parsed;
}
function isJsonKey(key) {
  return typeof maybeJsonKey(key) !== "undefined";
}
jsonKey.toJsonKey = toJsonKey;
jsonKey.isJsonKey = isJsonKey;
jsonKey.maybeJsonKey = maybeJsonKey;
var toPaths$2 = { exports: {} };
var integerKey = {};
var MAX_SAFE_INTEGER = 9007199254740991;
var abs = Math.abs;
var isSafeInteger = Number.isSafeInteger || function isSafeInteger2(num) {
  return typeof num === "number" && num % 1 === 0 && abs(num) <= MAX_SAFE_INTEGER;
};
function maybeIntegerKey$1(val) {
  if (typeof val === "string") {
    var num = Number(val);
    if (isSafeInteger(num) && String(num) === val) {
      return num;
    }
  } else if (isSafeInteger(val)) {
    return val;
  }
}
function isIntegerKey$1(val) {
  if (typeof val === "string") {
    var num = Number(val);
    return isSafeInteger(num) && String(num) === val;
  }
  return isSafeInteger(val);
}
integerKey.isIntegerKey = isIntegerKey$1;
integerKey.maybeIntegerKey = maybeIntegerKey$1;
var maybeIntegerKey = integerKey.maybeIntegerKey;
var isIntegerKey = integerKey.isIntegerKey;
var isArray$8 = Array.isArray;
var typeOfObject = "object";
var typeOfNumber = "number";
toPaths$2.exports = function toPaths(lengths) {
  var pathmap;
  var allPaths = [];
  for (var length in lengths) {
    var num = maybeIntegerKey(length);
    if (typeof num === typeOfNumber && isObject$d(pathmap = lengths[length])) {
      var paths2 = collapsePathMap(pathmap, 0, num).sets;
      var pathsIndex = -1;
      var pathsCount = paths2.length;
      while (++pathsIndex < pathsCount) {
        allPaths.push(collapsePathSetIndexes(paths2[pathsIndex]));
      }
    }
  }
  return allPaths;
};
function isObject$d(value) {
  return value !== null && typeof value === typeOfObject;
}
function collapsePathMap(pathmap, depth, length) {
  var key;
  var code = getHashCode(String(depth));
  var subs = /* @__PURE__ */ Object.create(null);
  var codes = [];
  var codesIndex = -1;
  var codesCount = 0;
  var pathsets = [];
  var pathsetsCount = 0;
  var subPath, subCode, subKeys, subKeysIndex, subKeysCount, subSets, subSetsIndex, subSetsCount, pathset, pathsetIndex, pathsetCount, firstSubKey, pathsetClone;
  subKeys = [];
  subKeysIndex = -1;
  if (depth < length - 1) {
    subKeysCount = getKeys$1(pathmap, subKeys);
    while (++subKeysIndex < subKeysCount) {
      key = subKeys[subKeysIndex];
      subPath = collapsePathMap(pathmap[key], depth + 1, length);
      subCode = subPath.code;
      if (subs[subCode]) {
        subPath = subs[subCode];
      } else {
        codes[codesCount++] = subCode;
        subPath = subs[subCode] = {
          keys: [],
          sets: subPath.sets
        };
      }
      code = getHashCode(code + key + subCode);
      var num = maybeIntegerKey(key);
      subPath.keys.push(typeof num === typeOfNumber ? num : key);
    }
    while (++codesIndex < codesCount) {
      key = codes[codesIndex];
      subPath = subs[key];
      subKeys = subPath.keys;
      subKeysCount = subKeys.length;
      if (subKeysCount > 0) {
        subSets = subPath.sets;
        subSetsIndex = -1;
        subSetsCount = subSets.length;
        firstSubKey = subKeys[0];
        while (++subSetsIndex < subSetsCount) {
          pathset = subSets[subSetsIndex];
          pathsetIndex = -1;
          pathsetCount = pathset.length;
          pathsetClone = new Array(pathsetCount + 1);
          pathsetClone[0] = subKeysCount > 1 && subKeys || firstSubKey;
          while (++pathsetIndex < pathsetCount) {
            pathsetClone[pathsetIndex + 1] = pathset[pathsetIndex];
          }
          pathsets[pathsetsCount++] = pathsetClone;
        }
      }
    }
  } else {
    subKeysCount = getKeys$1(pathmap, subKeys);
    if (subKeysCount > 1) {
      pathsets[pathsetsCount++] = [subKeys];
    } else {
      pathsets[pathsetsCount++] = subKeys;
    }
    while (++subKeysIndex < subKeysCount) {
      code = getHashCode(code + subKeys[subKeysIndex]);
    }
  }
  return {
    code,
    sets: pathsets
  };
}
function collapsePathSetIndexes(pathset) {
  var keysetIndex = -1;
  var keysetCount = pathset.length;
  while (++keysetIndex < keysetCount) {
    var keyset = pathset[keysetIndex];
    if (isArray$8(keyset)) {
      pathset[keysetIndex] = collapseIndex(keyset);
    }
  }
  return pathset;
}
function collapseIndex(keyset) {
  var keyIndex = -1;
  var keyCount = keyset.length - 1;
  var isSparseRange = keyCount > 0;
  while (++keyIndex <= keyCount) {
    var key = keyset[keyIndex];
    if (!isIntegerKey(key)) {
      isSparseRange = false;
      break;
    }
    keyset[keyIndex] = parseInt(key, 10);
  }
  if (isSparseRange === true) {
    keyset.sort(sortListAscending);
    var from = keyset[0];
    var to = keyset[keyCount];
    if (to - from <= keyCount) {
      return {
        from,
        to
      };
    }
  }
  return keyset;
}
function sortListAscending(a, b) {
  return a - b;
}
function getKeys$1(map, keys, sort) {
  var len = 0;
  for (var key in map) {
    keys[len++] = key;
  }
  return len;
}
function getHashCode(key) {
  var code = 5381;
  var index = -1;
  var count = key.length;
  while (++index < count) {
    code = (code << 5) + code + key.charCodeAt(index);
  }
  return String(code);
}
toPaths$2.exports._isSafeNumber = isIntegerKey;
var toPaths$1 = toPaths$2.exports;
var toTree$1 = toTree$2;
var collapse = function collapse2(paths2) {
  var collapseMap = paths2.reduce(function(acc, path) {
    var len = path.length;
    if (!acc[len]) {
      acc[len] = [];
    }
    acc[len].push(path);
    return acc;
  }, {});
  Object.keys(collapseMap).forEach(function(collapseKey) {
    collapseMap[collapseKey] = toTree$1(collapseMap[collapseKey]);
  });
  return toPaths$1(collapseMap);
};
var errors$1 = {
  innerReferences: "References with inner references are not allowed.",
  circularReference: "There appears to be a circular reference, maximum reference following exceeded."
};
var errors = errors$1;
function followReference$2(cacheRoot, ref3, maxRefFollow) {
  if (typeof maxRefFollow === "undefined") {
    maxRefFollow = 5;
  }
  var branch = cacheRoot;
  var node = branch;
  var refPath = ref3;
  var depth = -1;
  var referenceCount = 0;
  while (++depth < refPath.length) {
    var key = refPath[depth];
    node = branch[key];
    if (node === null || typeof node !== "object" || node.$type && node.$type !== "ref") {
      break;
    }
    if (node.$type === "ref") {
      if (depth + 1 < refPath.length) {
        return { error: new Error(errors.innerReferences) };
      }
      if (referenceCount >= maxRefFollow) {
        return { error: new Error(errors.circularReference) };
      }
      refPath = node.value;
      depth = -1;
      branch = cacheRoot;
      referenceCount++;
    } else {
      branch = node;
    }
  }
  return { node, refPath };
}
var followReference_1$1 = followReference$2;
function cloneArray$1(arr, index) {
  var a = [];
  var len = arr.length;
  for (var i = index || 0; i < len; i++) {
    a[i] = arr[i];
  }
  return a;
}
var cloneArray_1 = cloneArray$1;
var catAndSlice$1 = function catAndSlice(a, b, slice) {
  var next = [], i, j, len;
  for (i = 0, len = a.length; i < len; ++i) {
    next[i] = a[i];
  }
  for (j = slice || 0, len = b.length; j < len; ++j, ++i) {
    next[i] = b[j];
  }
  return next;
};
var iterateKeySet$4 = iterateKeySet$7;
var cloneArray = cloneArray_1;
var catAndSlice2 = catAndSlice$1;
var followReference$1 = followReference_1$1;
var optimizePathSets = function optimizePathSets2(cache, paths2, maxRefFollow) {
  if (typeof maxRefFollow === "undefined") {
    maxRefFollow = 5;
  }
  var optimized = [];
  for (var i = 0, len = paths2.length; i < len; ++i) {
    var error3 = optimizePathSet(cache, cache, paths2[i], 0, optimized, [], maxRefFollow);
    if (error3) {
      return { error: error3 };
    }
  }
  return { paths: optimized };
};
function optimizePathSet(cache, cacheRoot, pathSet, depth, out, optimizedPath, maxRefFollow) {
  if (cache === void 0) {
    out[out.length] = catAndSlice2(optimizedPath, pathSet, depth);
    return;
  }
  if (cache === null || cache.$type && cache.$type !== "ref" || typeof cache !== "object") {
    return;
  }
  if (cache.$type === "ref" && depth === pathSet.length) {
    return;
  }
  var keySet = pathSet[depth];
  var isKeySet = typeof keySet === "object" && keySet !== null;
  var nextDepth = depth + 1;
  var iteratorNote = false;
  var key = keySet;
  if (isKeySet) {
    iteratorNote = {};
    key = iterateKeySet$4(keySet, iteratorNote);
  }
  var next, nextOptimized;
  do {
    next = cache[key];
    var optimizedPathLength = optimizedPath.length;
    optimizedPath[optimizedPathLength] = key;
    if (next && next.$type === "ref" && nextDepth < pathSet.length) {
      var refResults = followReference$1(cacheRoot, next.value, maxRefFollow);
      if (refResults.error) {
        return refResults.error;
      }
      next = refResults.node;
      nextOptimized = cloneArray(refResults.refPath);
    } else {
      nextOptimized = optimizedPath;
    }
    var error3 = optimizePathSet(
      next,
      cacheRoot,
      pathSet,
      nextDepth,
      out,
      nextOptimized,
      maxRefFollow
    );
    if (error3) {
      return error3;
    }
    optimizedPath.length = optimizedPathLength;
    if (iteratorNote && !iteratorNote.done) {
      key = iterateKeySet$4(keySet, iteratorNote);
    }
  } while (iteratorNote && !iteratorNote.done);
}
function getRangeOrKeySize(rangeOrKey) {
  if (rangeOrKey == null) {
    return 1;
  } else if (Array.isArray(rangeOrKey)) {
    throw new Error("Unexpected Array found in keySet: " + JSON.stringify(rangeOrKey));
  } else if (typeof rangeOrKey === "object") {
    return getRangeSize(rangeOrKey);
  } else {
    return 1;
  }
}
function getRangeSize(range3) {
  var to = range3.to;
  var length = range3.length;
  if (to != null) {
    if (isNaN(to) || parseInt(to, 10) !== to) {
      throw new Error("Invalid range, 'to' is not an integer: " + JSON.stringify(range3));
    }
    var from = range3.from || 0;
    if (isNaN(from) || parseInt(from, 10) !== from) {
      throw new Error("Invalid range, 'from' is not an integer: " + JSON.stringify(range3));
    }
    if (from <= to) {
      return to - from + 1;
    } else {
      return 0;
    }
  } else if (length != null) {
    if (isNaN(length) || parseInt(length, 10) !== length) {
      throw new Error("Invalid range, 'length' is not an integer: " + JSON.stringify(range3));
    } else {
      return length;
    }
  } else {
    throw new Error("Invalid range, expected 'to' or 'length': " + JSON.stringify(range3));
  }
}
function getPathCount(pathSet) {
  if (pathSet.length === 0) {
    throw new Error("All paths must have length larger than zero.");
  }
  var numPaths = 1;
  for (var i = 0; i < pathSet.length; i++) {
    var segment = pathSet[i];
    if (Array.isArray(segment)) {
      var numKeys = 0;
      for (var j = 0; j < segment.length; j++) {
        var keySet = segment[j];
        numKeys += getRangeOrKeySize(keySet);
      }
      numPaths *= numKeys;
    } else {
      numPaths *= getRangeOrKeySize(segment);
    }
  }
  return numPaths;
}
var pathCount = getPathCount;
var _escape = function escape(str) {
  return "_" + str;
};
var _unescape = function unescape(str) {
  if (str.slice(0, 1) === "_") {
    return str.slice(1);
  } else {
    throw SyntaxError('Expected "_".');
  }
};
var iterateKeySet$3 = iterateKeySet$7;
var materialize = function materialize2(pathSet, value) {
  return pathSet.reduceRight(function materializeInner(acc, keySet) {
    var branch = {};
    if (typeof keySet !== "object" || keySet === null) {
      branch[keySet] = acc;
      return branch;
    }
    var iteratorNote = {};
    var key = iterateKeySet$3(keySet, iteratorNote);
    while (!iteratorNote.done) {
      branch[key] = acc;
      key = iterateKeySet$3(keySet, iteratorNote);
    }
    return branch;
  }, value);
};
var lib$1 = {
  iterateKeySet: iterateKeySet$7,
  toTree: toTree$2,
  pathsComplementFromTree,
  pathsComplementFromLengthTree,
  toJsonKey: jsonKey.toJsonKey,
  isJsonKey: jsonKey.isJsonKey,
  maybeJsonKey: jsonKey.maybeJsonKey,
  hasIntersection: hasIntersection$2,
  toPaths: toPaths$2.exports,
  isIntegerKey: integerKey.isIntegerKey,
  maybeIntegerKey: integerKey.maybeIntegerKey,
  collapse,
  followReference: followReference_1$1,
  optimizePathSets,
  pathCount,
  escape: _escape,
  unescape: _unescape,
  materialize
};
var incrementVersion$3 = { exports: {} };
var version$1 = 1;
incrementVersion$3.exports = function incrementVersion() {
  return version$1++;
};
incrementVersion$3.exports.getCurrentVersion = function getCurrentVersion() {
  return version$1;
};
var error = "error";
var isObject$c = isObject$f;
var getSize$6 = function getSize(node) {
  return isObject$c(node) && node.$size || 0;
};
var isObject$b = isObject$f;
var getTimestamp$2 = function getTimestamp(node) {
  return isObject$b(node) && node.$timestamp || void 0;
};
var now$1 = now$3;
var $now = expiresNow$1;
var $never = expiresNever;
var isExpired$7 = function isExpired(node) {
  var exp = node.$expires;
  return exp != null && exp !== $never && (exp === $now || exp < now$1());
};
var privatePrefix$1 = privatePrefix$2;
var hasOwn$1 = hasOwn_1;
var isArray$7 = Array.isArray;
var isObject$a = isObject$f;
var clone$4 = function clone(value) {
  var dest = value;
  if (isObject$a(dest)) {
    dest = isArray$7(value) ? [] : {};
    var src2 = value;
    for (var key in src2) {
      if (key.lastIndexOf(privatePrefix$1, 0) === 0 || !hasOwn$1(src2, key)) {
        continue;
      }
      dest[key] = src2[key];
    }
  }
  return dest;
};
var isObject$9 = isObject$f;
var getExpires$1 = function getSize2(node) {
  return isObject$9(node) && node.$expires || void 0;
};
var atom;
var hasRequiredAtom;
function requireAtom() {
  if (hasRequiredAtom)
    return atom;
  hasRequiredAtom = 1;
  atom = "atom";
  return atom;
}
var now = now$3;
var expiresNow = expiresNow$1;
var atomSize = 50;
var clone$3 = clone$4;
var isArray$6 = Array.isArray;
var getSize$5 = getSize$6;
var getExpires = getExpires$1;
var atomType = requireAtom();
var wrapNode$2 = function wrapNode(nodeArg, typeArg, value) {
  var size = 0;
  var node = nodeArg;
  var type = typeArg;
  if (type) {
    var modelCreated = node.$_modelCreated;
    node = clone$3(node);
    size = getSize$5(node);
    node.$type = type;
    node.$_prev = void 0;
    node.$_next = void 0;
    node.$_modelCreated = modelCreated || false;
  } else {
    node = {
      $type: atomType,
      value,
      $_prev: void 0,
      $_next: void 0,
      $_modelCreated: true
    };
  }
  if (value == null) {
    size = atomSize + 1;
  } else if (size == null || size <= 0) {
    switch (typeof value) {
      case "object":
        if (isArray$6(value)) {
          size = atomSize + value.length;
        } else {
          size = atomSize + 1;
        }
        break;
      case "string":
        size = atomSize + value.length;
        break;
      default:
        size = atomSize + 1;
        break;
    }
  }
  var expires = getExpires(node);
  if (typeof expires === "number" && expires < expiresNow) {
    node.$expires = now() + expires * -1;
  }
  node.$size = size;
  return node;
};
var insertNode$2 = function insertNode(node, parent, key, version2, optimizedPath) {
  node.$_key = key;
  node.$_parent = parent;
  if (version2 !== void 0) {
    node.$_version = version2;
  }
  if (!node.$_absolutePath) {
    if (Array.isArray(key)) {
      node.$_absolutePath = optimizedPath.slice(0, optimizedPath.index);
      Array.prototype.push.apply(node.$_absolutePath, key);
    } else {
      node.$_absolutePath = optimizedPath.slice(0, optimizedPath.index);
      node.$_absolutePath.push(key);
    }
  }
  parent[key] = node;
  return node;
};
var __ref$3 = requireRef();
var transferBackReferences$1 = function transferBackReferences(fromNode, destNode) {
  var fromNodeRefsLength = fromNode.$_refsLength || 0, destNodeRefsLength = destNode.$_refsLength || 0, i = -1;
  while (++i < fromNodeRefsLength) {
    var ref3 = fromNode[__ref$3 + i];
    if (ref3 !== void 0) {
      ref3.$_context = destNode;
      destNode[__ref$3 + (destNodeRefsLength + i)] = ref3;
      fromNode[__ref$3 + i] = void 0;
    }
  }
  destNode.$_refsLength = fromNodeRefsLength + destNodeRefsLength;
  fromNode.$_refsLength = void 0;
  return destNode;
};
var __ref$2 = requireRef();
var unlinkBackReferences$1 = function unlinkBackReferences(node) {
  var i = -1, n = node.$_refsLength || 0;
  while (++i < n) {
    var ref3 = node[__ref$2 + i];
    if (ref3 != null) {
      ref3.$_context = ref3.$_refIndex = node[__ref$2 + i] = void 0;
    }
  }
  node.$_refsLength = void 0;
  return node;
};
var __ref$1 = requireRef();
var unlinkForwardReference$1 = function unlinkForwardReference(reference) {
  var destination = reference.$_context;
  if (destination) {
    var i = (reference.$_refIndex || 0) - 1, n = (destination.$_refsLength || 0) - 1;
    while (++i <= n) {
      destination[__ref$1 + i] = destination[__ref$1 + (i + 1)];
    }
    destination.$_refsLength = n;
    reference.$_refIndex = reference.$_context = destination = void 0;
  }
  return reference;
};
var $ref$6 = ref;
var splice = splice$2;
var isObject$8 = isObject$f;
var unlinkBackReferences2 = unlinkBackReferences$1;
var unlinkForwardReference2 = unlinkForwardReference$1;
var removeNode$2 = function removeNode(node, parent, key, lru) {
  if (isObject$8(node)) {
    var type = node.$type;
    if (type) {
      if (type === $ref$6) {
        unlinkForwardReference2(node);
      }
      splice(lru, node);
    }
    unlinkBackReferences2(node);
    parent[key] = node.$_parent = void 0;
    return true;
  }
  return false;
};
var removeNodeAndDescendants$1;
var hasRequiredRemoveNodeAndDescendants;
function requireRemoveNodeAndDescendants() {
  if (hasRequiredRemoveNodeAndDescendants)
    return removeNodeAndDescendants$1;
  hasRequiredRemoveNodeAndDescendants = 1;
  var hasOwn2 = hasOwn_1;
  var prefix = reservedPrefix$1;
  var removeNode3 = removeNode$2;
  removeNodeAndDescendants$1 = function removeNodeAndDescendants2(node, parent, key, lru, mergeContext) {
    if (removeNode3(node, parent, key, lru)) {
      if (node.$type !== void 0 && mergeContext && node.$_absolutePath) {
        mergeContext.hasInvalidatedResult = true;
      }
      if (node.$type == null) {
        for (var key2 in node) {
          if (key2[0] !== prefix && hasOwn2(node, key2)) {
            removeNodeAndDescendants2(node[key2], node, key2, lru, mergeContext);
          }
        }
      }
      return true;
    }
    return false;
  };
  return removeNodeAndDescendants$1;
}
var isObject$7 = isObject$f;
var transferBackReferences2 = transferBackReferences$1;
var removeNodeAndDescendants = requireRemoveNodeAndDescendants();
var replaceNode$2 = function replaceNode(node, replacement, parent, key, lru, mergeContext) {
  if (node === replacement) {
    return node;
  } else if (isObject$7(node)) {
    transferBackReferences2(node, replacement);
    removeNodeAndDescendants(node, parent, key, lru, mergeContext);
  }
  parent[key] = replacement;
  return replacement;
};
var __ref = requireRef();
var updateBackReferenceVersions$2 = function updateBackReferenceVersions(nodeArg, version2) {
  var stack = [nodeArg];
  var count = 0;
  do {
    var node = stack[count];
    if (node && node.$_version !== version2) {
      node.$_version = version2;
      stack[count++] = node.$_parent;
      var i = -1;
      var n = node.$_refsLength || 0;
      while (++i < n) {
        stack[count++] = node[__ref + i];
      }
    }
  } while (--count > -1);
  return nodeArg;
};
var removeNode$1 = removeNode$2;
var updateBackReferenceVersions$1 = updateBackReferenceVersions$2;
var updateNodeAncestors$3 = function updateNodeAncestors(nodeArg, offset, lru, version2) {
  var child = nodeArg;
  do {
    var node = child.$_parent;
    var size = child.$size = (child.$size || 0) - offset;
    if (size <= 0 && node != null) {
      removeNode$1(child, node, child.$_key, lru);
    } else if (child.$_version !== version2) {
      updateBackReferenceVersions$1(child, version2);
    }
    child = node;
  } while (child);
  return nodeArg;
};
var reconstructPath$2 = function reconstructPath(currentPath, key) {
  var path = currentPath.slice(0, currentPath.depth);
  path[path.length] = key;
  return path;
};
var $ref$5 = ref;
var $error$4 = error;
var getSize$4 = getSize$6;
var getTimestamp$1 = getTimestamp$2;
var isObject$6 = isObject$f;
var isExpired$6 = isExpired$7;
var isFunction$3 = isFunction$5;
var wrapNode$1 = wrapNode$2;
var insertNode$1 = insertNode$2;
var expireNode$4 = expireNode$5;
var replaceNode$1 = replaceNode$2;
var updateNodeAncestors$2 = updateNodeAncestors$3;
var reconstructPath$1 = reconstructPath$2;
var mergeJSONGraphNode$1 = function mergeJSONGraphNode(parent, node, message, key, requestedPath, optimizedPath, version2, expired, lru, comparator2, errorSelector2, replacedPaths) {
  var sizeOffset;
  var cType, mType, cIsObject, mIsObject, cTimestamp, mTimestamp;
  var nodeValue = node && node.value !== void 0 ? node.value : node;
  if (nodeValue === message) {
    if (message === null) {
      node = wrapNode$1(message, void 0, message);
      parent = updateNodeAncestors$2(parent, -node.$size, lru, version2);
      node = insertNode$1(node, parent, key, void 0, optimizedPath);
      return node;
    } else if (message === void 0) {
      return message;
    } else {
      cIsObject = isObject$6(node);
      if (cIsObject) {
        cType = node.$type;
        if (cType == null) {
          if (node.$_parent == null) {
            insertNode$1(node, parent, key, version2, optimizedPath);
          }
          return node;
        }
      }
    }
  } else {
    cIsObject = isObject$6(node);
    if (cIsObject) {
      cType = node.$type;
    }
  }
  if (cType !== $ref$5) {
    mIsObject = isObject$6(message);
    if (mIsObject) {
      mType = message.$type;
    }
    if (cIsObject && !cType) {
      if (message == null || mIsObject && !mType) {
        return node;
      }
    }
  } else {
    if (message == null) {
      if (isExpired$6(node)) {
        expireNode$4(node, expired, lru);
        return void 0;
      }
      return node;
    }
    mIsObject = isObject$6(message);
    if (mIsObject) {
      mType = message.$type;
      if (mType === $ref$5) {
        if (node === message) {
          if (node.$_parent != null) {
            return node;
          }
        } else {
          cTimestamp = node.$timestamp;
          mTimestamp = message.$timestamp;
          if (!isExpired$6(node) && !isExpired$6(message) && mTimestamp < cTimestamp) {
            return void 0;
          }
        }
      }
    }
  }
  if (cType && mIsObject && !mType) {
    return insertNode$1(replaceNode$1(node, message, parent, key, lru, replacedPaths), parent, key, void 0, optimizedPath);
  } else if (mType || !mIsObject) {
    if (mType === $error$4 && isFunction$3(errorSelector2)) {
      message = errorSelector2(reconstructPath$1(requestedPath, key), message);
      mType = message.$type || mType;
    }
    if (mType && node === message) {
      if (node.$_parent == null) {
        node = wrapNode$1(node, mType, node.value);
        parent = updateNodeAncestors$2(parent, -node.$size, lru, version2);
        node = insertNode$1(node, parent, key, version2, optimizedPath);
      }
    } else {
      var isDistinct = true;
      if (cType && !isExpired$6(node) || !cIsObject) {
        isDistinct = getTimestamp$1(message) < getTimestamp$1(node) === false;
        if (isDistinct && (cType || mType) && isFunction$3(comparator2)) {
          isDistinct = !comparator2(nodeValue, message, optimizedPath.slice(0, optimizedPath.index));
        }
      }
      if (isDistinct) {
        message = wrapNode$1(message, mType, mType ? message.value : message);
        sizeOffset = getSize$4(node) - getSize$4(message);
        node = replaceNode$1(node, message, parent, key, lru, replacedPaths);
        parent = updateNodeAncestors$2(parent, sizeOffset, lru, version2);
        node = insertNode$1(node, parent, key, version2, optimizedPath);
      }
    }
    if (isExpired$6(node)) {
      expireNode$4(node, expired, lru);
    }
  } else if (node == null) {
    node = insertNode$1({}, parent, key, void 0, optimizedPath);
  }
  return node;
};
function applyErrorPrototype$4(errorType) {
  errorType.prototype = Object.create(Error.prototype, {
    constructor: {
      value: Error,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(errorType, Error);
  } else {
    errorType.__proto__ = Error;
  }
}
var applyErrorPrototype_1 = applyErrorPrototype$4;
var applyErrorPrototype$3 = applyErrorPrototype_1;
function NullInPathError$2() {
  var instance7 = new Error("`null` and `undefined` are not allowed in branch key positions");
  instance7.name = "NullInPathError";
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(instance7, Object.getPrototypeOf(this));
  }
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance7, NullInPathError$2);
  }
  return instance7;
}
applyErrorPrototype$3(NullInPathError$2);
var NullInPathError_1 = NullInPathError$2;
var createHardlink$1 = createHardlink$2;
var $ref$4 = ref;
var isExpired$5 = isAlreadyExpired;
var isFunction$2 = isFunction$5;
var isPrimitive$3 = isPrimitive$4;
var expireNode$3 = expireNode$5;
var iterateKeySet$2 = lib$1.iterateKeySet;
var incrementVersion$2 = incrementVersion$3.exports;
var mergeJSONGraphNode2 = mergeJSONGraphNode$1;
var NullInPathError$1 = NullInPathError_1;
var setJSONGraphs$3 = function setJSONGraphs(model, jsonGraphEnvelopes, x, errorSelector2, comparator2, replacedPaths) {
  var modelRoot = model._root;
  var lru = modelRoot;
  var expired = modelRoot.expired;
  var version2 = incrementVersion$2();
  var cache = modelRoot.cache;
  var initialVersion = cache.$_version;
  var requestedPath = [];
  var optimizedPath = [];
  var requestedPaths = [];
  var optimizedPaths = [];
  var jsonGraphEnvelopeIndex = -1;
  var jsonGraphEnvelopeCount = jsonGraphEnvelopes.length;
  while (++jsonGraphEnvelopeIndex < jsonGraphEnvelopeCount) {
    var jsonGraphEnvelope = jsonGraphEnvelopes[jsonGraphEnvelopeIndex];
    var paths2 = jsonGraphEnvelope.paths;
    var jsonGraph = jsonGraphEnvelope.jsonGraph;
    var pathIndex = -1;
    var pathCount2 = paths2.length;
    while (++pathIndex < pathCount2) {
      var path = paths2[pathIndex];
      optimizedPath.index = 0;
      setJSONGraphPathSet(
        path,
        0,
        cache,
        cache,
        cache,
        jsonGraph,
        jsonGraph,
        jsonGraph,
        requestedPaths,
        optimizedPaths,
        requestedPath,
        optimizedPath,
        version2,
        expired,
        lru,
        comparator2,
        errorSelector2,
        replacedPaths
      );
    }
  }
  var newVersion = cache.$_version;
  var rootChangeHandler = modelRoot.onChange;
  if (isFunction$2(rootChangeHandler) && initialVersion !== newVersion) {
    rootChangeHandler();
  }
  return [requestedPaths, optimizedPaths];
};
function setJSONGraphPathSet(path, depth, root5, parent, node, messageRoot, messageParent, message, requestedPaths, optimizedPaths, requestedPath, optimizedPath, version2, expired, lru, comparator2, errorSelector2, replacedPaths) {
  var note = {};
  var branch = depth < path.length - 1;
  var keySet = path[depth];
  var key = iterateKeySet$2(keySet, note);
  var optimizedIndex = optimizedPath.index;
  do {
    requestedPath.depth = depth;
    var results = setNode$1(
      root5,
      parent,
      node,
      messageRoot,
      messageParent,
      message,
      key,
      branch,
      requestedPath,
      optimizedPath,
      version2,
      expired,
      lru,
      comparator2,
      errorSelector2,
      replacedPaths
    );
    requestedPath[depth] = key;
    requestedPath.index = depth;
    optimizedPath[optimizedPath.index++] = key;
    var nextNode = results[0];
    var nextParent = results[1];
    if (nextNode) {
      if (branch) {
        setJSONGraphPathSet(
          path,
          depth + 1,
          root5,
          nextParent,
          nextNode,
          messageRoot,
          results[3],
          results[2],
          requestedPaths,
          optimizedPaths,
          requestedPath,
          optimizedPath,
          version2,
          expired,
          lru,
          comparator2,
          errorSelector2,
          replacedPaths
        );
      } else {
        requestedPaths.push(requestedPath.slice(0, requestedPath.index + 1));
        optimizedPaths.push(optimizedPath.slice(0, optimizedPath.index));
      }
    }
    key = iterateKeySet$2(keySet, note);
    if (note.done) {
      break;
    }
    optimizedPath.index = optimizedIndex;
  } while (true);
}
var _result = new Array(4);
function setReference$1(root5, node, messageRoot, message, requestedPath, optimizedPath, version2, expired, lru, comparator2, errorSelector2, replacedPaths) {
  var reference = node.value;
  optimizedPath.length = 0;
  optimizedPath.push.apply(optimizedPath, reference);
  if (isExpired$5(node)) {
    optimizedPath.index = reference.length;
    expireNode$3(node, expired, lru);
    _result[0] = void 0;
    _result[1] = root5;
    _result[2] = message;
    _result[3] = messageRoot;
    return _result;
  }
  var index = 0;
  var container = node;
  var count = reference.length - 1;
  var parent = node = root5;
  var messageParent = message = messageRoot;
  do {
    var key = reference[index];
    var branch = index < count;
    optimizedPath.index = index;
    var results = setNode$1(
      root5,
      parent,
      node,
      messageRoot,
      messageParent,
      message,
      key,
      branch,
      requestedPath,
      optimizedPath,
      version2,
      expired,
      lru,
      comparator2,
      errorSelector2,
      replacedPaths
    );
    node = results[0];
    if (isPrimitive$3(node)) {
      optimizedPath.index = index;
      return results;
    }
    parent = results[1];
    message = results[2];
    messageParent = results[3];
  } while (index++ < count);
  optimizedPath.index = index;
  if (container.$_context !== node) {
    createHardlink$1(container, node);
  }
  _result[0] = node;
  _result[1] = parent;
  _result[2] = message;
  _result[3] = messageParent;
  return _result;
}
function setNode$1(root5, parent, node, messageRoot, messageParent, message, key, branch, requestedPath, optimizedPath, version2, expired, lru, comparator2, errorSelector2, replacedPaths) {
  var type = node.$type;
  while (type === $ref$4) {
    var results = setReference$1(
      root5,
      node,
      messageRoot,
      message,
      requestedPath,
      optimizedPath,
      version2,
      expired,
      lru,
      comparator2,
      errorSelector2,
      replacedPaths
    );
    node = results[0];
    if (isPrimitive$3(node)) {
      return results;
    }
    parent = results[1];
    message = results[2];
    messageParent = results[3];
    type = node.$type;
  }
  if (type !== void 0) {
    _result[0] = node;
    _result[1] = parent;
    _result[2] = message;
    _result[3] = messageParent;
    return _result;
  }
  if (key == null) {
    if (branch) {
      throw new NullInPathError$1();
    } else if (node) {
      key = node.$_key;
    }
  } else {
    parent = node;
    messageParent = message;
    node = parent[key];
    message = messageParent && messageParent[key];
  }
  node = mergeJSONGraphNode2(
    parent,
    node,
    message,
    key,
    requestedPath,
    optimizedPath,
    version2,
    expired,
    lru,
    comparator2,
    errorSelector2,
    replacedPaths
  );
  _result[0] = node;
  _result[1] = parent;
  _result[2] = message;
  _result[3] = messageParent;
  return _result;
}
var promote$3;
var hasRequiredPromote;
function requirePromote() {
  if (hasRequiredPromote)
    return promote$3;
  hasRequiredPromote = 1;
  var EXPIRES_NEVER = expiresNever;
  promote$3 = function lruPromote(root5, object) {
    if (object.$expires === EXPIRES_NEVER) {
      return;
    }
    var head3 = root5.$_head;
    if (!head3) {
      root5.$_head = root5.$_tail = object;
      return;
    }
    if (head3 === object) {
      return;
    }
    var prev = object.$_prev;
    var next = object.$_next;
    if (next) {
      next.$_prev = prev;
    }
    if (prev) {
      prev.$_next = next;
    }
    object.$_prev = void 0;
    root5.$_head = object;
    object.$_next = head3;
    head3.$_prev = object;
    if (object === root5.$_tail) {
      root5.$_tail = prev;
    }
  };
  return promote$3;
}
var clone$2;
var hasRequiredClone;
function requireClone() {
  if (hasRequiredClone)
    return clone$2;
  hasRequiredClone = 1;
  var privatePrefix2 = privatePrefix$2;
  clone$2 = function clone3(node) {
    if (node === void 0) {
      return node;
    }
    var outValue = {};
    for (var k in node) {
      if (k.lastIndexOf(privatePrefix2, 0) === 0) {
        continue;
      }
      outValue[k] = node[k];
    }
    return outValue;
  };
  return clone$2;
}
var promote$2 = requirePromote();
var clone$1 = requireClone();
var $ref$3 = ref;
var $atom = requireAtom();
var $error$3 = error;
var onValue$2 = function onValue(model, node, seed, depth, outerResults, branchInfo, requestedPath, optimizedPath, optimizedLength, isJSONG) {
  if (node) {
    promote$2(model._root, node);
  }
  if (!seed) {
    return;
  }
  var i, len, k, key, curr, prev = null, prevK;
  var materialized = false, valueNode, nodeType = node && node.$type, nodeValue = node && node.value;
  if (nodeValue === void 0) {
    materialized = model._materialized;
  }
  if (materialized) {
    valueNode = { $type: $atom };
  } else if (model._boxed) {
    valueNode = clone$1(node);
  } else if (!isJSONG && nodeType === $ref$3) {
    valueNode = void 0;
  } else if (nodeType === $ref$3 || nodeType === $error$3) {
    if (isJSONG) {
      valueNode = clone$1(node);
    } else {
      valueNode = nodeValue;
    }
  } else if (isJSONG) {
    var isObject5 = nodeValue && typeof nodeValue === "object";
    var isUserCreatedNode = !node || !node.$_modelCreated;
    if (isObject5 || isUserCreatedNode) {
      valueNode = clone$1(node);
    } else {
      valueNode = nodeValue;
    }
  } else if (node && nodeType === void 0 && nodeValue === void 0) {
    valueNode = {};
  } else {
    valueNode = nodeValue;
  }
  var hasValues = false;
  if (isJSONG) {
    curr = seed.jsonGraph;
    if (!curr) {
      hasValues = true;
      curr = seed.jsonGraph = {};
      seed.paths = [];
    }
    for (i = 0, len = optimizedLength - 1; i < len; i++) {
      key = optimizedPath[i];
      if (!curr[key]) {
        hasValues = true;
        curr[key] = {};
      }
      curr = curr[key];
    }
    key = optimizedPath[i];
    curr[key] = materialized ? { $type: $atom } : valueNode;
    if (requestedPath) {
      seed.paths.push(requestedPath.slice(0, depth));
    }
  } else if (depth === 0) {
    hasValues = true;
    seed.json = valueNode;
  } else {
    curr = seed.json;
    if (!curr) {
      hasValues = true;
      curr = seed.json = {};
    }
    for (i = 0; i < depth - 1; i++) {
      k = requestedPath[i];
      if (!curr[k]) {
        hasValues = true;
        curr[k] = branchInfo[i];
      }
      prev = curr;
      prevK = k;
      curr = curr[k];
    }
    k = requestedPath[i];
    if (valueNode !== void 0) {
      if (k != null) {
        hasValues = true;
        if (!curr[k]) {
          curr[k] = valueNode;
        }
      } else {
        prev[prevK] = valueNode;
      }
    }
  }
  if (outerResults) {
    outerResults.hasValues = hasValues;
  }
};
var isExpired$4 = { exports: {} };
var hasRequiredIsExpired;
function requireIsExpired() {
  if (hasRequiredIsExpired)
    return isExpired$4.exports;
  hasRequiredIsExpired = 1;
  (function(module2) {
    module2.exports = isExpired$7;
  })(isExpired$4);
  return isExpired$4.exports;
}
var followReference_1;
var hasRequiredFollowReference;
function requireFollowReference() {
  if (hasRequiredFollowReference)
    return followReference_1;
  hasRequiredFollowReference = 1;
  var createHardlink3 = createHardlink$2;
  var onValue3 = onValue$2;
  var isExpired3 = requireIsExpired();
  var $ref2 = ref;
  var promote2 = requirePromote();
  function followReference2(model, root5, nodeArg, referenceContainerArg, referenceArg, seed, isJSONG) {
    var node = nodeArg;
    var reference = referenceArg;
    var referenceContainer = referenceContainerArg;
    var depth = 0;
    var k, next;
    while (true) {
      if (depth === 0 && referenceContainer.$_context) {
        depth = reference.length;
        next = referenceContainer.$_context;
      } else {
        k = reference[depth++];
        next = node[k];
      }
      if (next) {
        var type = next.$type;
        var value = type && next.value || next;
        if (depth < reference.length) {
          if (type) {
            node = next;
            break;
          }
          node = next;
          continue;
        } else {
          node = next;
          if (type && isExpired3(next)) {
            break;
          }
          if (!referenceContainer.$_context) {
            createHardlink3(referenceContainer, next);
          }
          if (type === $ref2) {
            if (isJSONG) {
              onValue3(
                model,
                next,
                seed,
                null,
                null,
                null,
                null,
                reference,
                reference.length,
                isJSONG
              );
            } else {
              promote2(model._root, next);
            }
            depth = 0;
            reference = value;
            referenceContainer = next;
            node = root5;
            continue;
          }
          break;
        }
      } else {
        node = void 0;
      }
      break;
    }
    if (depth < reference.length && node !== void 0) {
      var ref3 = [];
      for (var i = 0; i < depth; i++) {
        ref3[i] = reference[i];
      }
      reference = ref3;
    }
    return [node, reference, referenceContainer];
  }
  followReference_1 = followReference2;
  return followReference_1;
}
var getValueSync;
var hasRequiredGetValueSync;
function requireGetValueSync() {
  if (hasRequiredGetValueSync)
    return getValueSync;
  hasRequiredGetValueSync = 1;
  var followReference2 = requireFollowReference();
  var clone3 = requireClone();
  var isExpired3 = requireIsExpired();
  var promote2 = requirePromote();
  var $ref2 = ref;
  var $atom2 = requireAtom();
  var $error2 = error;
  getValueSync = function getValueSync2(model, simplePath, noClone) {
    var root5 = model._root.cache;
    var len = simplePath.length;
    var optimizedPath = [];
    var shorted = false, shouldShort = false;
    var depth = 0;
    var key, i, next = root5, curr = root5, out = root5, type, ref3, refNode;
    var found = true;
    var expired = false;
    while (next && depth < len) {
      key = simplePath[depth++];
      if (key !== null) {
        next = curr[key];
        optimizedPath[optimizedPath.length] = key;
      }
      if (!next) {
        out = void 0;
        shorted = true;
        found = false;
        break;
      }
      type = next.$type;
      if (type === $atom2 && next.value === void 0) {
        out = void 0;
        found = false;
        shorted = depth < len;
        break;
      }
      if (depth < len) {
        if (type === $ref2) {
          if (isExpired3(next)) {
            expired = true;
            out = void 0;
            break;
          }
          ref3 = followReference2(model, root5, root5, next, next.value);
          refNode = ref3[0];
          if (!refNode) {
            out = void 0;
            next = void 0;
            found = false;
            break;
          }
          type = refNode.$type;
          next = refNode;
          optimizedPath = ref3[1].slice(0);
        }
        if (type) {
          break;
        }
      } else {
        out = next;
      }
      curr = next;
    }
    if (depth < len && !expired) {
      for (i = depth; i < len; ++i) {
        if (simplePath[depth] !== null) {
          shouldShort = true;
          break;
        }
      }
      if (shouldShort) {
        shorted = true;
        out = void 0;
      } else {
        out = next;
      }
      for (i = depth; i < len; ++i) {
        if (simplePath[i] !== null) {
          optimizedPath[optimizedPath.length] = simplePath[i];
        }
      }
    }
    if (out && type) {
      if (isExpired3(out)) {
        out = void 0;
      } else {
        promote2(model._root, out);
      }
    }
    if (out && type === $error2 && !model._treatErrorsAsValues) {
      throw {
        path: depth === len ? simplePath : simplePath.slice(0, depth),
        value: out.value
      };
    } else if (out && model._boxed) {
      out = Boolean(type) && !noClone ? clone3(out) : out;
    } else if (!out && model._materialized) {
      out = { $type: $atom2 };
    } else if (out) {
      out = out.value;
    }
    return {
      value: out,
      shorted,
      optimizedPath,
      found
    };
  };
  return getValueSync;
}
var InvalidModelError_1;
var hasRequiredInvalidModelError;
function requireInvalidModelError() {
  if (hasRequiredInvalidModelError)
    return InvalidModelError_1;
  hasRequiredInvalidModelError = 1;
  var applyErrorPrototype2 = applyErrorPrototype_1;
  function InvalidModelError2(boundPath, shortedPath) {
    var instance7 = new Error("The boundPath of the model is not valid since a value or error was found before the path end.");
    instance7.name = "InvalidModelError";
    instance7.boundPath = boundPath;
    instance7.shortedPath = shortedPath;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(instance7, Object.getPrototypeOf(this));
    }
    if (Error.captureStackTrace) {
      Error.captureStackTrace(instance7, InvalidModelError2);
    }
    return instance7;
  }
  applyErrorPrototype2(InvalidModelError2);
  InvalidModelError_1 = InvalidModelError2;
  return InvalidModelError_1;
}
var getBoundValue$1;
var hasRequiredGetBoundValue;
function requireGetBoundValue() {
  if (hasRequiredGetBoundValue)
    return getBoundValue$1;
  hasRequiredGetBoundValue = 1;
  var getValueSync2 = requireGetValueSync();
  var InvalidModelError2 = requireInvalidModelError();
  getBoundValue$1 = function getBoundValue2(model, pathArg, materialized) {
    var path = pathArg;
    var boundPath = pathArg;
    var boxed, treatErrorsAsValues2, value, shorted, found;
    boxed = model._boxed;
    materialized = model._materialized;
    treatErrorsAsValues2 = model._treatErrorsAsValues;
    model._boxed = true;
    model._materialized = materialized === void 0 || materialized;
    model._treatErrorsAsValues = true;
    value = getValueSync2(model, path.concat(null), true);
    model._boxed = boxed;
    model._materialized = materialized;
    model._treatErrorsAsValues = treatErrorsAsValues2;
    path = value.optimizedPath;
    shorted = value.shorted;
    found = value.found;
    value = value.value;
    while (path.length && path[path.length - 1] === null) {
      path.pop();
    }
    if (found && shorted) {
      throw new InvalidModelError2(boundPath, path);
    }
    return {
      path,
      value,
      shorted,
      found
    };
  };
  return getBoundValue$1;
}
var isObject$5 = isObject$f;
var getType$1 = function getType(node, anyType) {
  var type = isObject$5(node) && node.$type || void 0;
  if (anyType && type) {
    return "branch";
  }
  return type;
};
var $ref$2 = ref;
var $error$2 = error;
var getType2 = getType$1;
var getSize$3 = getSize$6;
var getTimestamp2 = getTimestamp$2;
var isExpired$3 = isExpired$7;
var isPrimitive$2 = isPrimitive$4;
var isFunction$1 = isFunction$5;
var wrapNode2 = wrapNode$2;
var expireNode$2 = expireNode$5;
var insertNode2 = insertNode$2;
var replaceNode2 = replaceNode$2;
var updateNodeAncestors$1 = updateNodeAncestors$3;
var updateBackReferenceVersions2 = updateBackReferenceVersions$2;
var reconstructPath2 = reconstructPath$2;
var mergeValueOrInsertBranch$1 = function mergeValueOrInsertBranch(parent, node, key, value, branch, reference, requestedPath, optimizedPath, version2, expired, lru, comparator2, errorSelector2, replacedPaths) {
  var type = getType2(node, reference);
  if (branch || reference) {
    if (type && isExpired$3(node)) {
      type = "expired";
      expireNode$2(node, expired, lru);
    }
    if (type && type !== $ref$2 || isPrimitive$2(node)) {
      node = replaceNode2(node, {}, parent, key, lru, replacedPaths);
      node = insertNode2(node, parent, key, version2, optimizedPath);
      node = updateBackReferenceVersions2(node, version2);
    }
  } else {
    var message = value;
    var mType = getType2(message);
    var isDistinct = getTimestamp2(message) < getTimestamp2(node) === false;
    if ((type || mType) && isFunction$1(comparator2)) {
      isDistinct = !comparator2(node, message, optimizedPath.slice(0, optimizedPath.index));
    }
    if (isDistinct) {
      if (mType === $error$2 && isFunction$1(errorSelector2)) {
        message = errorSelector2(reconstructPath2(requestedPath, key), message);
        mType = message.$type || mType;
      }
      message = wrapNode2(message, mType, mType ? message.value : message);
      var sizeOffset = getSize$3(node) - getSize$3(message);
      node = replaceNode2(node, message, parent, key, lru, replacedPaths);
      parent = updateNodeAncestors$1(parent, sizeOffset, lru, version2);
      node = insertNode2(node, parent, key, version2, optimizedPath);
    }
  }
  return node;
};
var setPathValues$2;
var hasRequiredSetPathValues;
function requireSetPathValues() {
  if (hasRequiredSetPathValues)
    return setPathValues$2;
  hasRequiredSetPathValues = 1;
  var createHardlink3 = createHardlink$2;
  var $ref2 = ref;
  var getBoundValue2 = requireGetBoundValue();
  var isExpired3 = isExpired$7;
  var isFunction5 = isFunction$5;
  var isPrimitive3 = isPrimitive$4;
  var expireNode3 = expireNode$5;
  var iterateKeySet3 = lib$1.iterateKeySet;
  var incrementVersion3 = incrementVersion$3.exports;
  var mergeValueOrInsertBranch3 = mergeValueOrInsertBranch$1;
  var NullInPathError2 = NullInPathError_1;
  setPathValues$2 = function setPathValues2(model, pathValues, x, errorSelector2, comparator2) {
    var modelRoot = model._root;
    var lru = modelRoot;
    var expired = modelRoot.expired;
    var version2 = incrementVersion3();
    var bound = model._path;
    var cache = modelRoot.cache;
    var node = bound.length ? getBoundValue2(model, bound).value : cache;
    var parent = node.$_parent || cache;
    var initialVersion = cache.$_version;
    var requestedPath = [];
    var requestedPaths = [];
    var optimizedPaths = [];
    var optimizedIndex = bound.length;
    var pathValueIndex = -1;
    var pathValueCount = pathValues.length;
    while (++pathValueIndex < pathValueCount) {
      var pathValue2 = pathValues[pathValueIndex];
      var path = pathValue2.path;
      var value = pathValue2.value;
      var optimizedPath = bound.slice(0);
      optimizedPath.index = optimizedIndex;
      setPathSet(
        value,
        path,
        0,
        cache,
        parent,
        node,
        requestedPaths,
        optimizedPaths,
        requestedPath,
        optimizedPath,
        version2,
        expired,
        lru,
        comparator2,
        errorSelector2
      );
    }
    var newVersion = cache.$_version;
    var rootChangeHandler = modelRoot.onChange;
    if (isFunction5(rootChangeHandler) && initialVersion !== newVersion) {
      rootChangeHandler();
    }
    return [requestedPaths, optimizedPaths];
  };
  function setPathSet(value, path, depth, root5, parent, node, requestedPaths, optimizedPaths, requestedPath, optimizedPath, version2, expired, lru, comparator2, errorSelector2, replacedPaths) {
    var note = {};
    var branch = depth < path.length - 1;
    var keySet = path[depth];
    var key = iterateKeySet3(keySet, note);
    var optimizedIndex = optimizedPath.index;
    do {
      requestedPath.depth = depth;
      var results = setNode2(
        root5,
        parent,
        node,
        key,
        value,
        branch,
        false,
        requestedPath,
        optimizedPath,
        version2,
        expired,
        lru,
        comparator2,
        errorSelector2,
        replacedPaths
      );
      requestedPath[depth] = key;
      requestedPath.index = depth;
      optimizedPath[optimizedPath.index++] = key;
      var nextNode = results[0];
      var nextParent = results[1];
      if (nextNode) {
        if (branch) {
          setPathSet(
            value,
            path,
            depth + 1,
            root5,
            nextParent,
            nextNode,
            requestedPaths,
            optimizedPaths,
            requestedPath,
            optimizedPath,
            version2,
            expired,
            lru,
            comparator2,
            errorSelector2
          );
        } else {
          requestedPaths.push(requestedPath.slice(0, requestedPath.index + 1));
          optimizedPaths.push(optimizedPath.slice(0, optimizedPath.index));
        }
      }
      key = iterateKeySet3(keySet, note);
      if (note.done) {
        break;
      }
      optimizedPath.index = optimizedIndex;
    } while (true);
  }
  function setReference2(value, root5, node, requestedPath, optimizedPath, version2, expired, lru, comparator2, errorSelector2, replacedPaths) {
    var reference = node.value;
    optimizedPath.length = 0;
    optimizedPath.push.apply(optimizedPath, reference);
    if (isExpired3(node)) {
      optimizedPath.index = reference.length;
      expireNode3(node, expired, lru);
      return [void 0, root5];
    }
    var container = node;
    var parent = root5;
    node = node.$_context;
    if (node != null) {
      parent = node.$_parent || root5;
      optimizedPath.index = reference.length;
    } else {
      var index = 0;
      var count = reference.length - 1;
      parent = node = root5;
      do {
        var key = reference[index];
        var branch = index < count;
        optimizedPath.index = index;
        var results = setNode2(
          root5,
          parent,
          node,
          key,
          value,
          branch,
          true,
          requestedPath,
          optimizedPath,
          version2,
          expired,
          lru,
          comparator2,
          errorSelector2,
          replacedPaths
        );
        node = results[0];
        if (isPrimitive3(node)) {
          optimizedPath.index = index;
          return results;
        }
        parent = results[1];
      } while (index++ < count);
      optimizedPath.index = index;
      if (container.$_context !== node) {
        createHardlink3(container, node);
      }
    }
    return [node, parent];
  }
  function setNode2(root5, parent, node, key, value, branch, reference, requestedPath, optimizedPath, version2, expired, lru, comparator2, errorSelector2, replacedPaths) {
    var type = node.$type;
    while (type === $ref2) {
      var results = setReference2(
        value,
        root5,
        node,
        requestedPath,
        optimizedPath,
        version2,
        expired,
        lru,
        comparator2,
        errorSelector2,
        replacedPaths
      );
      node = results[0];
      if (isPrimitive3(node)) {
        return results;
      }
      parent = results[1];
      type = node.$type;
    }
    if (branch && type !== void 0) {
      return [node, parent];
    }
    if (key == null) {
      if (branch) {
        throw new NullInPathError2();
      } else if (node) {
        key = node.$_key;
      }
    } else {
      parent = node;
      node = parent[key];
    }
    node = mergeValueOrInsertBranch3(
      parent,
      node,
      key,
      value,
      branch,
      reference,
      requestedPath,
      optimizedPath,
      version2,
      expired,
      lru,
      comparator2,
      errorSelector2,
      replacedPaths
    );
    return [node, parent];
  }
  return setPathValues$2;
}
var applyErrorPrototype$2 = applyErrorPrototype_1;
function InvalidSourceError$6(error3) {
  var instance7 = new Error("An exception was thrown when making a request.");
  instance7.name = "InvalidSourceError";
  instance7.innerError = error3;
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(instance7, Object.getPrototypeOf(this));
  }
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance7, InvalidSourceError$6);
  }
  return instance7;
}
applyErrorPrototype$2(InvalidSourceError$6);
var InvalidSourceError_1 = InvalidSourceError$6;
var setJSONGraphs$2 = setJSONGraphs$3;
var setPathValues$1 = requireSetPathValues();
var InvalidSourceError$5 = InvalidSourceError_1;
var emptyArray$2 = [];
var emptyDisposable = { dispose: function() {
} };
var sendSetRequest$1 = function(originalJsonGraph, model, attemptCount, callback) {
  var paths2 = originalJsonGraph.paths;
  var modelRoot = model._root;
  var errorSelector2 = modelRoot.errorSelector;
  var comparator2 = modelRoot.comparator;
  var boundPath = model._path;
  var resultingJsonGraphEnvelope;
  var setObservable;
  try {
    setObservable = model._source.set(originalJsonGraph, attemptCount);
  } catch (e) {
    callback(new InvalidSourceError$5());
    return emptyDisposable;
  }
  var disposable = setObservable.subscribe(function onNext2(jsonGraphEnvelope) {
    if (disposable && disposable.disposed) {
      return;
    }
    model._path = emptyArray$2;
    var successfulPaths = setJSONGraphs$2(model, [{
      paths: paths2,
      jsonGraph: jsonGraphEnvelope.jsonGraph
    }], null, errorSelector2, comparator2);
    jsonGraphEnvelope.paths = successfulPaths[1];
    model._path = boundPath;
    resultingJsonGraphEnvelope = jsonGraphEnvelope;
  }, function onError4(dataSourceError) {
    if (disposable && disposable.disposed) {
      return;
    }
    model._path = emptyArray$2;
    setPathValues$1(model, paths2.map(function(path) {
      return {
        path,
        value: dataSourceError
      };
    }), null, errorSelector2, comparator2);
    model._path = boundPath;
    callback(dataSourceError);
  }, function onCompleted2() {
    callback(null, resultingJsonGraphEnvelope);
  });
  return disposable;
};
var sendSetRequest_1 = sendSetRequest$1;
var complement$1 = { exports: {} };
var iterateKeySet$1 = lib$1.iterateKeySet;
complement$1.exports = function complement(requested, optimized, tree) {
  var optimizedComplement = [];
  var requestedComplement = [];
  var intersection = [];
  var i, iLen;
  for (i = 0, iLen = optimized.length; i < iLen; ++i) {
    var oPath = optimized[i];
    var rPath = requested[i];
    var subTree = tree[oPath.length];
    var intersectionData = findPartialIntersections(rPath, oPath, subTree);
    Array.prototype.push.apply(intersection, intersectionData[0]);
    Array.prototype.push.apply(optimizedComplement, intersectionData[1]);
    Array.prototype.push.apply(requestedComplement, intersectionData[2]);
  }
  return {
    intersection,
    optimizedComplement,
    requestedComplement
  };
};
function findPartialIntersections(requestedPath, optimizedPath, requestTree) {
  var depthDiff = requestedPath.length - optimizedPath.length;
  var i;
  for (i = 0; requestTree && i < -depthDiff; i++) {
    requestTree = requestTree[optimizedPath[i]];
  }
  if (!requestTree) {
    return [[], [optimizedPath], [requestedPath]];
  }
  if (depthDiff === 0) {
    return recurse(requestedPath, optimizedPath, requestTree, 0, [], []);
  } else if (depthDiff > 0) {
    return recurse(requestedPath, optimizedPath, requestTree, 0, requestedPath.slice(0, depthDiff), []);
  } else {
    return recurse(requestedPath, optimizedPath, requestTree, -depthDiff, [], optimizedPath.slice(0, -depthDiff));
  }
}
function recurse(requestedPath, optimizedPath, currentTree, depth, rCurrentPath, oCurrentPath) {
  var depthDiff = requestedPath.length - optimizedPath.length;
  var intersections = [];
  var rComplementPaths = [];
  var oComplementPaths = [];
  var oPathLen = optimizedPath.length;
  for (; depth < oPathLen; ++depth) {
    var key = optimizedPath[depth];
    var keyType = typeof key;
    if (key && keyType === "object") {
      var note = {};
      var innerKey = iterateKeySet$1(key, note);
      while (!note.done) {
        var nextTree = currentTree[innerKey];
        if (nextTree === void 0) {
          oComplementPaths[oComplementPaths.length] = arrayConcatSlice2(
            oCurrentPath,
            innerKey,
            optimizedPath,
            depth + 1
          );
          rComplementPaths[rComplementPaths.length] = arrayConcatSlice2(
            rCurrentPath,
            innerKey,
            requestedPath,
            depth + 1 + depthDiff
          );
        } else if (depth === oPathLen - 1) {
          intersections[intersections.length] = arrayConcatElement(rCurrentPath, innerKey);
        } else {
          var intersectionData = recurse(
            requestedPath,
            optimizedPath,
            nextTree,
            depth + 1,
            arrayConcatElement(rCurrentPath, innerKey),
            arrayConcatElement(oCurrentPath, innerKey)
          );
          Array.prototype.push.apply(intersections, intersectionData[0]);
          Array.prototype.push.apply(oComplementPaths, intersectionData[1]);
          Array.prototype.push.apply(rComplementPaths, intersectionData[2]);
        }
        innerKey = iterateKeySet$1(key, note);
      }
      break;
    } else {
      currentTree = currentTree[key];
      oCurrentPath[oCurrentPath.length] = optimizedPath[depth];
      rCurrentPath[rCurrentPath.length] = requestedPath[depth + depthDiff];
      if (currentTree === void 0) {
        oComplementPaths[oComplementPaths.length] = arrayConcatSlice(
          oCurrentPath,
          optimizedPath,
          depth + 1
        );
        rComplementPaths[rComplementPaths.length] = arrayConcatSlice(
          rCurrentPath,
          requestedPath,
          depth + depthDiff + 1
        );
        break;
      } else if (depth === oPathLen - 1) {
        intersections[intersections.length] = rCurrentPath;
      }
    }
  }
  return [intersections, oComplementPaths, rComplementPaths];
}
complement$1.exports.__test = { findPartialIntersections };
function arrayConcatSlice(a1, a2, start) {
  var result3 = a1.slice();
  var l1 = result3.length;
  var length = a2.length - start;
  result3.length = l1 + length;
  for (var i = 0; i < length; ++i) {
    result3[l1 + i] = a2[start + i];
  }
  return result3;
}
function arrayConcatSlice2(a1, a2, a3, start) {
  var result3 = a1.concat(a2);
  var l1 = result3.length;
  var length = a3.length - start;
  result3.length = l1 + length;
  for (var i = 0; i < length; ++i) {
    result3[l1 + i] = a3[start + i];
  }
  return result3;
}
function arrayConcatElement(a1, element2) {
  var result3 = a1.slice();
  result3.push(element2);
  return result3;
}
var pathUtils = lib$1;
var toTree2 = pathUtils.toTree;
var toPaths2 = pathUtils.toPaths;
var InvalidSourceError$4 = InvalidSourceError_1;
var flushGetRequest$1 = function flushGetRequest(request, pathSetArrayBatch, callback) {
  if (request._count === 0) {
    request.requestQueue.removeRequest(request);
    return null;
  }
  request.sent = true;
  request.scheduled = false;
  var requestPaths;
  var model = request.requestQueue.model;
  if (model._enablePathCollapse || model._enableRequestDeduplication) {
    var pathMap = request._pathMap;
    var listIdx = 0, listLen = pathSetArrayBatch.length;
    for (; listIdx < listLen; ++listIdx) {
      var paths2 = pathSetArrayBatch[listIdx];
      for (var j = 0, pathLen = paths2.length; j < pathLen; ++j) {
        var pathSet = paths2[j];
        var len = pathSet.length;
        if (!pathMap[len]) {
          pathMap[len] = [pathSet];
        } else {
          var pathSetsByLength = pathMap[len];
          pathSetsByLength[pathSetsByLength.length] = pathSet;
        }
      }
    }
    var pathMapKeys = Object.keys(pathMap);
    var pathMapIdx = 0, pathMapLen = pathMapKeys.length;
    for (; pathMapIdx < pathMapLen; ++pathMapIdx) {
      var pathMapKey = pathMapKeys[pathMapIdx];
      pathMap[pathMapKey] = toTree2(pathMap[pathMapKey]);
    }
  }
  if (model._enablePathCollapse) {
    requestPaths = toPaths2(request._pathMap);
  } else if (pathSetArrayBatch.length === 1) {
    requestPaths = pathSetArrayBatch[0];
  } else {
    requestPaths = Array.prototype.concat.apply([], pathSetArrayBatch);
  }
  var getRequest;
  try {
    getRequest = model._source.get(requestPaths, request._attemptCount);
  } catch (e) {
    callback(new InvalidSourceError$4());
    return null;
  }
  var jsonGraphData;
  var disposable = getRequest.subscribe(
    function(data) {
      jsonGraphData = data;
    },
    function(err) {
      callback(err, jsonGraphData);
    },
    function() {
      callback(null, jsonGraphData);
    }
  );
  return disposable;
};
var currentCacheVersion$2 = {};
var version = null;
currentCacheVersion$2.setVersion = function setCacheVersion(newVersion) {
  version = newVersion;
};
currentCacheVersion$2.getVersion = function getCacheVersion() {
  return version;
};
var complement2 = complement$1.exports;
var flushGetRequest2 = flushGetRequest$1;
var incrementVersion$1 = incrementVersion$3.exports;
var currentCacheVersion$1 = currentCacheVersion$2;
var REQUEST_ID = 0;
var GetRequestType = RequestTypes$1.GetRequest;
var setJSONGraphs$1 = setJSONGraphs$3;
var setPathValues = requireSetPathValues();
var $error$1 = error;
var emptyArray$1 = [];
var InvalidSourceError$3 = InvalidSourceError_1;
var GetRequestV2 = function(scheduler, requestQueue, attemptCount) {
  this.sent = false;
  this.scheduled = false;
  this.requestQueue = requestQueue;
  this.id = ++REQUEST_ID;
  this.type = GetRequestType;
  this._scheduler = scheduler;
  this._attemptCount = attemptCount;
  this._pathMap = {};
  this._optimizedPaths = [];
  this._requestedPaths = [];
  this._callbacks = [];
  this._count = 0;
  this._disposable = null;
  this._collapsed = null;
  this._disposed = false;
};
GetRequestV2.prototype = {
  batch: function(requestedPaths, optimizedPaths, callback) {
    var self2 = this;
    var batchedOptPathSets = self2._optimizedPaths;
    var batchedReqPathSets = self2._requestedPaths;
    var batchedCallbacks = self2._callbacks;
    var batchIx = batchedOptPathSets.length;
    batchedOptPathSets[batchIx] = optimizedPaths;
    batchedReqPathSets[batchIx] = requestedPaths;
    batchedCallbacks[batchIx] = callback;
    ++self2._count;
    if (!self2.scheduled) {
      self2.scheduled = true;
      var flushedDisposable;
      var scheduleDisposable = self2._scheduler.schedule(function() {
        flushedDisposable = flushGetRequest2(self2, batchedOptPathSets, function(err, data) {
          var i, fn, len;
          var model = self2.requestQueue.model;
          self2.requestQueue.removeRequest(self2);
          self2._disposed = true;
          if (model._treatDataSourceErrorsAsJSONGraphErrors ? err instanceof InvalidSourceError$3 : !!err) {
            for (i = 0, len = batchedCallbacks.length; i < len; ++i) {
              fn = batchedCallbacks[i];
              if (fn) {
                fn(err);
              }
            }
            return;
          }
          if (self2._count) {
            var currentVersion = incrementVersion$1.getCurrentVersion();
            currentCacheVersion$1.setVersion(currentVersion);
            var mergeContext = { hasInvalidatedResult: false };
            var pathsErr = model._useServerPaths && data && data.paths === void 0 ? new Error("Server responses must include a 'paths' field when Model._useServerPaths === true") : void 0;
            if (!pathsErr) {
              self2._merge(batchedReqPathSets, err, data, mergeContext);
            }
            for (i = 0, len = batchedCallbacks.length; i < len; ++i) {
              fn = batchedCallbacks[i];
              if (fn) {
                fn(pathsErr || err, data, mergeContext.hasInvalidatedResult);
              }
            }
            currentCacheVersion$1.setVersion(null);
          }
        });
        self2._disposable = flushedDisposable;
      });
      self2._disposable = flushedDisposable || scheduleDisposable;
    }
    return createDisposable(self2, batchIx);
  },
  add: function(requested, optimized, callback) {
    var self2 = this;
    var complementResult = complement2(requested, optimized, self2._pathMap);
    var inserted = false;
    var disposable = false;
    if (complementResult.intersection.length) {
      inserted = true;
      var batchIx = self2._callbacks.length;
      self2._callbacks[batchIx] = callback;
      self2._requestedPaths[batchIx] = complementResult.intersection;
      self2._optimizedPaths[batchIx] = [];
      ++self2._count;
      disposable = createDisposable(self2, batchIx);
    }
    return [inserted, complementResult.requestedComplement, complementResult.optimizedComplement, disposable];
  },
  _merge: function(requested, err, data, mergeContext) {
    var self2 = this;
    var model = self2.requestQueue.model;
    var modelRoot = model._root;
    var errorSelector2 = modelRoot.errorSelector;
    var comparator2 = modelRoot.comparator;
    var boundPath = model._path;
    model._path = emptyArray$1;
    var nextPaths = model._useServerPaths ? data.paths : flattenRequestedPaths(requested);
    if (err && model._treatDataSourceErrorsAsJSONGraphErrors) {
      var error3 = err;
      if (error3 instanceof Error) {
        error3 = {
          message: error3.message
        };
      }
      if (!error3.$type) {
        error3 = {
          $type: $error$1,
          value: error3
        };
      }
      var pathValues = nextPaths.map(function(x) {
        return {
          path: x,
          value: error3
        };
      });
      setPathValues(model, pathValues, null, errorSelector2, comparator2, mergeContext);
    } else {
      setJSONGraphs$1(model, [{
        paths: nextPaths,
        jsonGraph: data.jsonGraph
      }], null, errorSelector2, comparator2, mergeContext);
    }
    model._path = boundPath;
  }
};
function createDisposable(request, batchIx) {
  var disposed = false;
  return function() {
    if (disposed || request._disposed) {
      return;
    }
    disposed = true;
    request._callbacks[batchIx] = null;
    request._optimizedPaths[batchIx] = [];
    request._requestedPaths[batchIx] = [];
    var count = --request._count;
    var disposable = request._disposable;
    if (count === 0) {
      if (disposable.unsubscribe) {
        disposable.unsubscribe();
      } else {
        disposable.dispose();
      }
      request.requestQueue.removeRequest(request);
    }
  };
}
function flattenRequestedPaths(requested) {
  var out = [];
  var outLen = -1;
  for (var i = 0, len = requested.length; i < len; ++i) {
    var paths2 = requested[i];
    for (var j = 0, innerLen = paths2.length; j < innerLen; ++j) {
      out[++outLen] = paths2[j];
    }
  }
  return out;
}
var GetRequestV2_1 = GetRequestV2;
var RequestTypes = RequestTypes$1;
var sendSetRequest = sendSetRequest_1;
var GetRequest = GetRequestV2_1;
var falcorPathUtils = lib$1;
function RequestQueueV2(model, scheduler) {
  this.model = model;
  this.scheduler = scheduler;
  this.requests = this._requests = [];
}
RequestQueueV2.prototype = {
  setScheduler: function(scheduler) {
    this.scheduler = scheduler;
  },
  set: function(jsonGraph, attemptCount, cb) {
    if (this.model._enablePathCollapse) {
      jsonGraph.paths = falcorPathUtils.collapse(jsonGraph.paths);
    }
    if (cb === void 0) {
      cb = attemptCount;
      attemptCount = void 0;
    }
    return sendSetRequest(jsonGraph, this.model, attemptCount, cb);
  },
  get: function(requestedPaths, optimizedPaths, attemptCount, cb) {
    var self2 = this;
    var disposables = [];
    var count = 0;
    var requests = self2._requests;
    var i, len;
    var oRemainingPaths = optimizedPaths;
    var rRemainingPaths = requestedPaths;
    var disposed = false;
    var request;
    if (cb === void 0) {
      cb = attemptCount;
      attemptCount = void 0;
    }
    for (i = 0, len = requests.length; i < len; ++i) {
      request = requests[i];
      if (request.type !== RequestTypes.GetRequest) {
        continue;
      }
      if (request.sent) {
        if (this.model._enableRequestDeduplication) {
          var results = request.add(rRemainingPaths, oRemainingPaths, refCountCallback);
          if (results[0]) {
            rRemainingPaths = results[1];
            oRemainingPaths = results[2];
            disposables[disposables.length] = results[3];
            ++count;
            if (!oRemainingPaths.length) {
              break;
            }
          }
        }
      } else {
        request.batch(rRemainingPaths, oRemainingPaths, refCountCallback);
        oRemainingPaths = null;
        rRemainingPaths = null;
        ++count;
        break;
      }
    }
    if (oRemainingPaths && oRemainingPaths.length) {
      request = new GetRequest(self2.scheduler, self2, attemptCount);
      requests[requests.length] = request;
      ++count;
      var disposable = request.batch(rRemainingPaths, oRemainingPaths, refCountCallback);
      disposables[disposables.length] = disposable;
    }
    function refCountCallback(err, data, hasInvalidatedResult) {
      if (disposed) {
        return;
      }
      --count;
      if (count === 0) {
        cb(err, data, hasInvalidatedResult);
      }
    }
    return function() {
      if (disposed || count === 0) {
        return;
      }
      disposed = true;
      var length = disposables.length;
      for (var idx = 0; idx < length; ++idx) {
        disposables[idx]();
      }
    };
  },
  removeRequest: function(request) {
    var requests = this._requests;
    var i = requests.length;
    while (--i >= 0) {
      if (requests[i].id === request.id) {
        requests.splice(i, 1);
        break;
      }
    }
  }
};
var RequestQueueV2_1 = RequestQueueV2;
var noop$1 = function noop2() {
};
var noop3 = noop$1;
function ModelResponseObserver$1(onNextOrObserver, onErrorFn, onCompletedFn) {
  if (!onNextOrObserver || typeof onNextOrObserver !== "object") {
    this._observer = {
      onNext: typeof onNextOrObserver === "function" ? onNextOrObserver : noop3,
      onError: typeof onErrorFn === "function" ? onErrorFn : noop3,
      onCompleted: typeof onCompletedFn === "function" ? onCompletedFn : noop3
    };
  } else {
    this._observer = {
      onNext: typeof onNextOrObserver.onNext === "function" ? function(value) {
        onNextOrObserver.onNext(value);
      } : noop3,
      onError: typeof onNextOrObserver.onError === "function" ? function(error3) {
        onNextOrObserver.onError(error3);
      } : noop3,
      onCompleted: typeof onNextOrObserver.onCompleted === "function" ? function() {
        onNextOrObserver.onCompleted();
      } : noop3
    };
  }
}
ModelResponseObserver$1.prototype = {
  onNext: function(v) {
    if (!this._closed) {
      this._observer.onNext(v);
    }
  },
  onError: function(e) {
    if (!this._closed) {
      this._closed = true;
      this._observer.onError(e);
    }
  },
  onCompleted: function() {
    if (!this._closed) {
      this._closed = true;
      this._observer.onCompleted();
    }
  }
};
var ModelResponseObserver_1 = ModelResponseObserver$1;
function symbolObservablePonyfill(root5) {
  var result3;
  var Symbol4 = root5.Symbol;
  if (typeof Symbol4 === "function") {
    if (Symbol4.observable) {
      result3 = Symbol4.observable;
    } else {
      result3 = Symbol4("observable");
      Symbol4.observable = result3;
    }
  } else {
    result3 = "@@observable";
  }
  return result3;
}
var root;
if (typeof self !== "undefined") {
  root = self;
} else if (typeof window !== "undefined") {
  root = window;
} else if (typeof global !== "undefined") {
  root = global;
} else if (typeof module !== "undefined") {
  root = module;
} else {
  root = Function("return this")();
}
var result = symbolObservablePonyfill(root);
var es = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  "default": result
});
var require$$1 = /* @__PURE__ */ getAugmentedNamespace(es);
function FromEsObserverAdapter(esObserver) {
  this.esObserver = esObserver;
}
FromEsObserverAdapter.prototype = {
  onNext: function onNext(value) {
    if (typeof this.esObserver.next === "function") {
      this.esObserver.next(value);
    }
  },
  onError: function onError(error3) {
    if (typeof this.esObserver.error === "function") {
      this.esObserver.error(error3);
    }
  },
  onCompleted: function onCompleted() {
    if (typeof this.esObserver.complete === "function") {
      this.esObserver.complete();
    }
  }
};
function ToEsSubscriptionAdapter(subscription) {
  this.subscription = subscription;
}
ToEsSubscriptionAdapter.prototype.unsubscribe = function unsubscribe() {
  this.subscription.dispose();
};
function toEsObservable$1(_self) {
  return {
    subscribe: function subscribe3(observer) {
      return new ToEsSubscriptionAdapter(_self.subscribe(new FromEsObserverAdapter(observer)));
    }
  };
}
var toEsObservable_1 = toEsObservable$1;
var ModelResponseObserver = ModelResponseObserver_1;
var $$observable = require$$1.default;
var toEsObservable = toEsObservable_1;
function ModelResponse$7(subscribe3) {
  this._subscribe = subscribe3;
}
ModelResponse$7.prototype[$$observable] = function SymbolObservable() {
  return toEsObservable(this);
};
ModelResponse$7.prototype._toJSONG = function toJSONG() {
  return this;
};
ModelResponse$7.prototype.progressively = function progressively() {
  return this;
};
ModelResponse$7.prototype.subscribe = ModelResponse$7.prototype.forEach = function subscribe2(a, b, c) {
  var observer = new ModelResponseObserver(a, b, c);
  var subscription = this._subscribe(observer);
  switch (typeof subscription) {
    case "function":
      return {
        dispose: function() {
          if (observer._closed) {
            return;
          }
          observer._closed = true;
          subscription();
        }
      };
    case "object":
      return {
        dispose: function() {
          if (observer._closed) {
            return;
          }
          observer._closed = true;
          if (subscription !== null) {
            subscription.dispose();
          }
        }
      };
    default:
      return {
        dispose: function() {
          observer._closed = true;
        }
      };
  }
};
ModelResponse$7.prototype.then = function then(onNext2, onError4) {
  var self2 = this;
  if (!self2._promise) {
    self2._promise = new Promise(function(resolve, reject) {
      var rejected = false;
      var values = [];
      self2.subscribe(
        function(value) {
          values[values.length] = value;
        },
        function(errors2) {
          rejected = true;
          reject(errors2);
        },
        function() {
          var value = values;
          if (values.length <= 1) {
            value = values[0];
          }
          if (rejected === false) {
            resolve(value);
          }
        }
      );
    });
  }
  return self2._promise.then(onNext2, onError4);
};
var ModelResponse_1 = ModelResponse$7;
var tokenizer = { exports: {} };
var TokenTypes$6 = {
  token: "token",
  dotSeparator: ".",
  commaSeparator: ",",
  openingBracket: "[",
  closingBracket: "]",
  openingBrace: "{",
  closingBrace: "}",
  escape: "\\",
  space: " ",
  colon: ":",
  quote: "quote",
  unknown: "unknown"
};
var TokenTypes_1 = TokenTypes$6;
var TokenTypes$5 = TokenTypes_1;
var DOT_SEPARATOR = ".";
var COMMA_SEPARATOR = ",";
var OPENING_BRACKET = "[";
var CLOSING_BRACKET = "]";
var OPENING_BRACE = "{";
var CLOSING_BRACE = "}";
var COLON = ":";
var ESCAPE = "\\";
var DOUBLE_OUOTES = '"';
var SINGE_OUOTES = "'";
var SPACE = " ";
var SPECIAL_CHARACTERS = `\\'"[]., `;
var EXT_SPECIAL_CHARACTERS = `\\{}'"[]., :`;
var Tokenizer$2 = tokenizer.exports = function(string, ext) {
  this._string = string;
  this._idx = -1;
  this._extended = ext;
  this.parseString = "";
};
Tokenizer$2.prototype = {
  next: function() {
    var nextToken = this._nextToken ? this._nextToken : getNext(this._string, this._idx, this._extended);
    this._idx = nextToken.idx;
    this._nextToken = false;
    this.parseString += nextToken.token.token;
    return nextToken.token;
  },
  peek: function() {
    var nextToken = this._nextToken ? this._nextToken : getNext(this._string, this._idx, this._extended);
    this._nextToken = nextToken;
    return nextToken.token;
  }
};
Tokenizer$2.toNumber = function toNumber(x) {
  if (!isNaN(+x)) {
    return +x;
  }
  return NaN;
};
function toOutput(token, type, done) {
  return {
    token,
    done,
    type
  };
}
function getNext(string, idx, ext) {
  var output = false;
  var token = "";
  var specialChars = ext ? EXT_SPECIAL_CHARACTERS : SPECIAL_CHARACTERS;
  var done;
  do {
    done = idx + 1 >= string.length;
    if (done) {
      break;
    }
    var character = string[idx + 1];
    if (character !== void 0 && specialChars.indexOf(character) === -1) {
      token += character;
      ++idx;
      continue;
    } else if (token.length) {
      break;
    }
    ++idx;
    var type;
    switch (character) {
      case DOT_SEPARATOR:
        type = TokenTypes$5.dotSeparator;
        break;
      case COMMA_SEPARATOR:
        type = TokenTypes$5.commaSeparator;
        break;
      case OPENING_BRACKET:
        type = TokenTypes$5.openingBracket;
        break;
      case CLOSING_BRACKET:
        type = TokenTypes$5.closingBracket;
        break;
      case OPENING_BRACE:
        type = TokenTypes$5.openingBrace;
        break;
      case CLOSING_BRACE:
        type = TokenTypes$5.closingBrace;
        break;
      case SPACE:
        type = TokenTypes$5.space;
        break;
      case DOUBLE_OUOTES:
      case SINGE_OUOTES:
        type = TokenTypes$5.quote;
        break;
      case ESCAPE:
        type = TokenTypes$5.escape;
        break;
      case COLON:
        type = TokenTypes$5.colon;
        break;
      default:
        type = TokenTypes$5.unknown;
        break;
    }
    output = toOutput(character, type, false);
    break;
  } while (!done);
  if (!output && token.length) {
    output = toOutput(token, TokenTypes$5.token, false);
  }
  if (!output) {
    output = { done: true };
  }
  return {
    token: output,
    idx
  };
}
var exceptions = {
  indexer: {
    nested: "Indexers cannot be nested.",
    needQuotes: "unquoted indexers must be numeric.",
    empty: "cannot have empty indexers.",
    leadingDot: "Indexers cannot have leading dots.",
    leadingComma: "Indexers cannot have leading comma.",
    requiresComma: "Indexers require commas between indexer args.",
    routedTokens: "Only one token can be used per indexer when specifying routed tokens."
  },
  range: {
    precedingNaN: "ranges must be preceded by numbers.",
    suceedingNaN: "ranges must be suceeded by numbers."
  },
  routed: {
    invalid: "Invalid routed token.  only integers|ranges|keys are supported."
  },
  quote: {
    empty: "cannot have empty quoted keys.",
    illegalEscape: "Invalid escape character.  Only quotes are escapable."
  },
  unexpectedToken: "Unexpected token.",
  invalidIdentifier: "Invalid Identifier.",
  invalidPath: "Please provide a valid path.",
  throwError: function(err, tokenizer2, token) {
    if (token) {
      throw err + " -- " + tokenizer2.parseString + " with next token: " + token;
    }
    throw err + " -- " + tokenizer2.parseString;
  }
};
var Tokenizer$1 = tokenizer.exports;
var TokenTypes$4 = TokenTypes_1;
var E$4 = exceptions;
var range$1 = function range(tokenizer2, openingToken, state, out) {
  var token = tokenizer2.peek();
  var dotCount = 1;
  var done = false;
  var inclusive = true;
  var idx = state.indexer.length - 1;
  var from = Tokenizer$1.toNumber(state.indexer[idx]);
  var to;
  if (isNaN(from)) {
    E$4.throwError(E$4.range.precedingNaN, tokenizer2);
  }
  while (!done && !token.done) {
    switch (token.type) {
      case TokenTypes$4.dotSeparator:
        if (dotCount === 3) {
          E$4.throwError(E$4.unexpectedToken, tokenizer2);
        }
        ++dotCount;
        if (dotCount === 3) {
          inclusive = false;
        }
        break;
      case TokenTypes$4.token:
        to = Tokenizer$1.toNumber(tokenizer2.next().token);
        if (isNaN(to)) {
          E$4.throwError(E$4.range.suceedingNaN, tokenizer2);
        }
        done = true;
        break;
      default:
        done = true;
        break;
    }
    if (!done) {
      tokenizer2.next();
      token = tokenizer2.peek();
    } else {
      break;
    }
  }
  state.indexer[idx] = { from, to: inclusive ? to : to - 1 };
};
var TokenTypes$3 = TokenTypes_1;
var E$3 = exceptions;
var quoteE = E$3.quote;
var quote$1 = function quote(tokenizer2, openingToken, state, out) {
  var token = tokenizer2.next();
  var innerToken = "";
  var openingQuote = openingToken.token;
  var escaping = false;
  var done = false;
  while (!token.done) {
    switch (token.type) {
      case TokenTypes$3.token:
      case TokenTypes$3.space:
      case TokenTypes$3.dotSeparator:
      case TokenTypes$3.commaSeparator:
      case TokenTypes$3.openingBracket:
      case TokenTypes$3.closingBracket:
      case TokenTypes$3.openingBrace:
      case TokenTypes$3.closingBrace:
        if (escaping) {
          E$3.throwError(quoteE.illegalEscape, tokenizer2);
        }
        innerToken += token.token;
        break;
      case TokenTypes$3.quote:
        if (escaping) {
          innerToken += token.token;
          escaping = false;
        } else if (token.token !== openingQuote) {
          innerToken += token.token;
        } else {
          done = true;
        }
        break;
      case TokenTypes$3.escape:
        escaping = true;
        break;
      default:
        E$3.throwError(E$3.unexpectedToken, tokenizer2);
    }
    if (done) {
      break;
    }
    token = tokenizer2.next();
  }
  if (innerToken.length === 0) {
    E$3.throwError(quoteE.empty, tokenizer2);
  }
  state.indexer[state.indexer.length] = innerToken;
};
var RoutedTokens$2 = {
  integers: "integers",
  ranges: "ranges",
  keys: "keys"
};
var TokenTypes$2 = TokenTypes_1;
var RoutedTokens$1 = RoutedTokens$2;
var E$2 = exceptions;
var routedE = E$2.routed;
var routed$1 = function routed(tokenizer2, openingToken, state, out) {
  var routeToken = tokenizer2.next();
  var named = false;
  var name = "";
  switch (routeToken.token) {
    case RoutedTokens$1.integers:
    case RoutedTokens$1.ranges:
    case RoutedTokens$1.keys:
      break;
    default:
      E$2.throwError(routedE.invalid, tokenizer2);
      break;
  }
  var next = tokenizer2.next();
  if (next.type === TokenTypes$2.colon) {
    named = true;
    next = tokenizer2.next();
    if (next.type !== TokenTypes$2.token) {
      E$2.throwError(routedE.invalid, tokenizer2);
    }
    name = next.token;
    next = tokenizer2.next();
  }
  if (next.type === TokenTypes$2.closingBrace) {
    var outputToken = {
      type: routeToken.token,
      named,
      name
    };
    state.indexer[state.indexer.length] = outputToken;
  } else {
    E$2.throwError(routedE.invalid, tokenizer2);
  }
};
var TokenTypes$1 = TokenTypes_1;
var E$1 = exceptions;
var idxE = E$1.indexer;
var range2 = range$1;
var quote2 = quote$1;
var routed2 = routed$1;
var indexer$1 = function indexer(tokenizer2, openingToken, state, out) {
  var token = tokenizer2.next();
  var done = false;
  var allowedMaxLength = 1;
  var routedIndexer = false;
  state.indexer = [];
  while (!token.done) {
    switch (token.type) {
      case TokenTypes$1.token:
      case TokenTypes$1.quote:
        if (state.indexer.length === allowedMaxLength) {
          E$1.throwError(idxE.requiresComma, tokenizer2);
        }
        break;
    }
    switch (token.type) {
      case TokenTypes$1.openingBrace:
        routedIndexer = true;
        routed2(tokenizer2, token, state);
        break;
      case TokenTypes$1.token:
        var t = +token.token;
        if (isNaN(t)) {
          E$1.throwError(idxE.needQuotes, tokenizer2);
        }
        state.indexer[state.indexer.length] = t;
        break;
      case TokenTypes$1.dotSeparator:
        if (!state.indexer.length) {
          E$1.throwError(idxE.leadingDot, tokenizer2);
        }
        range2(tokenizer2, token, state);
        break;
      case TokenTypes$1.space:
        break;
      case TokenTypes$1.closingBracket:
        done = true;
        break;
      case TokenTypes$1.quote:
        quote2(tokenizer2, token, state);
        break;
      case TokenTypes$1.openingBracket:
        E$1.throwError(idxE.nested, tokenizer2);
        break;
      case TokenTypes$1.commaSeparator:
        ++allowedMaxLength;
        break;
      default:
        E$1.throwError(E$1.unexpectedToken, tokenizer2);
        break;
    }
    if (done) {
      break;
    }
    token = tokenizer2.next();
  }
  if (state.indexer.length === 0) {
    E$1.throwError(idxE.empty, tokenizer2);
  }
  if (state.indexer.length > 1 && routedIndexer) {
    E$1.throwError(idxE.routedTokens, tokenizer2);
  }
  if (state.indexer.length === 1) {
    state.indexer = state.indexer[0];
  }
  out[out.length] = state.indexer;
  state.indexer = void 0;
};
var TokenTypes = TokenTypes_1;
var E = exceptions;
var indexer2 = indexer$1;
var head$1 = function head(tokenizer2) {
  var token = tokenizer2.next();
  var state = {};
  var out = [];
  while (!token.done) {
    switch (token.type) {
      case TokenTypes.token:
        var first = +token.token[0];
        if (!isNaN(first)) {
          E.throwError(E.invalidIdentifier, tokenizer2);
        }
        out[out.length] = token.token;
        break;
      case TokenTypes.dotSeparator:
        if (out.length === 0) {
          E.throwError(E.unexpectedToken, tokenizer2);
        }
        break;
      case TokenTypes.space:
        break;
      case TokenTypes.openingBracket:
        indexer2(tokenizer2, token, state, out);
        break;
      default:
        E.throwError(E.unexpectedToken, tokenizer2);
        break;
    }
    token = tokenizer2.next();
  }
  if (out.length === 0) {
    E.throwError(E.invalidPath, tokenizer2);
  }
  return out;
};
var Tokenizer = tokenizer.exports;
var head2 = head$1;
var RoutedTokens = RoutedTokens$2;
var parser = function parser2(string, extendedRules) {
  return head2(new Tokenizer(string, extendedRules));
};
var src$1 = parser;
parser.fromPathsOrPathValues = function(paths2, ext) {
  if (!paths2) {
    return [];
  }
  var out = [];
  for (var i = 0, len = paths2.length; i < len; i++) {
    if (typeof paths2[i] === "string") {
      out[i] = parser(paths2[i], ext);
    } else if (typeof paths2[i].path === "string") {
      out[i] = {
        path: parser(paths2[i].path, ext),
        value: paths2[i].value
      };
    } else {
      out[i] = paths2[i];
    }
  }
  return out;
};
parser.fromPath = function(path, ext) {
  if (!path) {
    return [];
  }
  if (typeof path === "string") {
    return parser(path, ext);
  }
  return path;
};
parser.RoutedTokens = RoutedTokens;
var ModelResponse$6 = ModelResponse_1;
var InvalidSourceError$2 = InvalidSourceError_1;
var pathSyntax$5 = src$1;
function CallResponse$1(model, callPath, args, suffix, paths2) {
  this.callPath = pathSyntax$5.fromPath(callPath);
  this.args = args;
  if (paths2) {
    this.paths = paths2.map(pathSyntax$5.fromPath);
  }
  if (suffix) {
    this.suffix = suffix.map(pathSyntax$5.fromPath);
  }
  this.model = model;
}
CallResponse$1.prototype = Object.create(ModelResponse$6.prototype);
CallResponse$1.prototype._subscribe = function _subscribe(observer) {
  var callPath = this.callPath;
  var callArgs = this.args;
  var suffixes = this.suffix;
  var extraPaths = this.paths;
  var model = this.model;
  var rootModel = model._clone({
    _path: []
  });
  var boundPath = model._path;
  var boundCallPath = boundPath.concat(callPath);
  if (!model._source) {
    observer.onError(new Error("function does not exist"));
    return;
  }
  var response, obs;
  try {
    obs = model._source.call(boundCallPath, callArgs, suffixes, extraPaths);
  } catch (e) {
    observer.onError(new InvalidSourceError$2(e));
    return;
  }
  return obs.subscribe(function(res) {
    response = res;
  }, function(err) {
    observer.onError(err);
  }, function() {
    var invalidations = response.invalidated;
    if (invalidations && invalidations.length) {
      rootModel.invalidate.apply(rootModel, invalidations);
    }
    rootModel.withoutDataSource().set(response).subscribe(function(x) {
      observer.onNext(x);
    }, function(err) {
      observer.onError(err);
    }, function() {
      observer.onCompleted();
    });
  });
};
var CallResponse_1 = CallResponse$1;
var isArray$5 = Array.isArray;
var isObject$4 = isObject$f;
var isPathValue$3 = function isPathValue(pathValue2) {
  return isObject$4(pathValue2) && (isArray$5(pathValue2.path) || typeof pathValue2.path === "string");
};
var isObject$3 = isObject$f;
var isJSONEnvelope$4 = function isJSONEnvelope(envelope) {
  return isObject$3(envelope) && "json" in envelope;
};
var isArray$4 = Array.isArray;
var ModelResponse$5 = ModelResponse_1;
var isPathValue$2 = isPathValue$3;
var isJSONEnvelope$3 = isJSONEnvelope$4;
var empty$2 = { dispose: function() {
} };
function InvalidateResponse$1(model, args) {
  this._model = model;
  var groups = [];
  var group, groupType;
  var argIndex = -1;
  var argCount = args.length;
  while (++argIndex < argCount) {
    var arg = args[argIndex];
    var argType;
    if (isArray$4(arg)) {
      argType = "PathValues";
    } else if (isPathValue$2(arg)) {
      argType = "PathValues";
    } else if (isJSONEnvelope$3(arg)) {
      argType = "PathMaps";
    } else {
      throw new Error("Invalid Input");
    }
    if (groupType !== argType) {
      groupType = argType;
      group = {
        inputType: argType,
        arguments: []
      };
      groups.push(group);
    }
    group.arguments.push(arg);
  }
  this._groups = groups;
}
InvalidateResponse$1.prototype = Object.create(ModelResponse$5.prototype);
InvalidateResponse$1.prototype.progressively = function progressively2() {
  return this;
};
InvalidateResponse$1.prototype._toJSONG = function _toJSONG() {
  return this;
};
InvalidateResponse$1.prototype._subscribe = function _subscribe2(observer) {
  var model = this._model;
  this._groups.forEach(function(group) {
    var inputType = group.inputType;
    var methodArgs = group.arguments;
    var operationName = "_invalidate" + inputType;
    var operationFunc = model[operationName];
    operationFunc(model, methodArgs);
  });
  observer.onCompleted();
  return empty$2;
};
var InvalidateResponse_1 = InvalidateResponse$1;
function TimeoutScheduler$1(delay) {
  this.delay = delay;
}
var TimerDisposable = function TimerDisposable2(id) {
  this.id = id;
  this.disposed = false;
};
TimeoutScheduler$1.prototype.schedule = function schedule(action) {
  var id = setTimeout(action, this.delay);
  return new TimerDisposable(id);
};
TimeoutScheduler$1.prototype.scheduleWithState = function scheduleWithState(state, action) {
  var self2 = this;
  var id = setTimeout(function() {
    action(self2, state);
  }, this.delay);
  return new TimerDisposable(id);
};
TimerDisposable.prototype.dispose = function() {
  if (this.disposed) {
    return;
  }
  clearTimeout(this.id);
  this.disposed = true;
};
var TimeoutScheduler_1 = TimeoutScheduler$1;
var empty$1 = { dispose: function() {
} };
function ImmediateScheduler$1() {
}
ImmediateScheduler$1.prototype.schedule = function schedule2(action) {
  action();
  return empty$1;
};
ImmediateScheduler$1.prototype.scheduleWithState = function scheduleWithState2(state, action) {
  action(this, state);
  return empty$1;
};
var ImmediateScheduler_1 = ImmediateScheduler$1;
var removeNode2 = removeNode$2;
var updateNodeAncestors2 = updateNodeAncestors$3;
var collect = function collect2(lru, expired, totalArg, max, ratioArg, version2) {
  var total = totalArg;
  var ratio = ratioArg;
  if (typeof ratio !== "number") {
    ratio = 0.75;
  }
  var shouldUpdate = typeof version2 === "number";
  var targetSize = max * ratio;
  var parent, node, size;
  node = expired.pop();
  while (node) {
    size = node.$size || 0;
    total -= size;
    if (shouldUpdate === true) {
      updateNodeAncestors2(node, size, lru, version2);
    } else if (parent = node.$_parent) {
      removeNode2(node, parent, node.$_key, lru);
    }
    node = expired.pop();
  }
  if (total >= max) {
    var prev = lru.$_tail;
    node = prev;
    while (total >= targetSize && node) {
      prev = prev.$_prev;
      size = node.$size || 0;
      total -= size;
      if (shouldUpdate === true) {
        updateNodeAncestors2(node, size, lru, version2);
      }
      node = prev;
    }
    lru.$_tail = lru.$_prev = node;
    if (node == null) {
      lru.$_head = lru.$_next = void 0;
    } else {
      node.$_next = void 0;
    }
  }
};
var isArray$3 = Array.isArray;
var isObject$2 = isObject$f;
var isJSONGraphEnvelope$3 = function isJSONGraphEnvelope(envelope) {
  return isObject$2(envelope) && isArray$3(envelope.paths) && (isObject$2(envelope.jsonGraph) || isObject$2(envelope.jsong) || isObject$2(envelope.json) || isObject$2(envelope.values) || isObject$2(envelope.value));
};
var createHardlink2 = createHardlink$2;
var __prefix = reservedPrefix$1;
var $ref$1 = ref;
var getBoundValue = requireGetBoundValue();
var isArray$2 = Array.isArray;
var hasOwn = hasOwn_1;
var isObject$1 = isObject$f;
var isExpired$2 = isExpired$7;
var isFunction2 = isFunction$5;
var isPrimitive$1 = isPrimitive$4;
var expireNode$1 = expireNode$5;
var incrementVersion2 = incrementVersion$3.exports;
var mergeValueOrInsertBranch2 = mergeValueOrInsertBranch$1;
var NullInPathError = NullInPathError_1;
var setPathMaps = function setPathMaps2(model, pathMapEnvelopes, x, errorSelector2, comparator2) {
  var modelRoot = model._root;
  var lru = modelRoot;
  var expired = modelRoot.expired;
  var version2 = incrementVersion2();
  var bound = model._path;
  var cache = modelRoot.cache;
  var node = bound.length ? getBoundValue(model, bound).value : cache;
  var parent = node.$_parent || cache;
  var initialVersion = cache.$_version;
  var requestedPath = [];
  var requestedPaths = [];
  var optimizedPaths = [];
  var optimizedIndex = bound.length;
  var pathMapIndex = -1;
  var pathMapCount = pathMapEnvelopes.length;
  while (++pathMapIndex < pathMapCount) {
    var pathMapEnvelope = pathMapEnvelopes[pathMapIndex];
    var optimizedPath = bound.slice(0);
    optimizedPath.index = optimizedIndex;
    setPathMap(
      pathMapEnvelope.json,
      0,
      cache,
      parent,
      node,
      requestedPaths,
      optimizedPaths,
      requestedPath,
      optimizedPath,
      version2,
      expired,
      lru,
      comparator2,
      errorSelector2
    );
  }
  var newVersion = cache.$_version;
  var rootChangeHandler = modelRoot.onChange;
  if (isFunction2(rootChangeHandler) && initialVersion !== newVersion) {
    rootChangeHandler();
  }
  return [requestedPaths, optimizedPaths];
};
function setPathMap(pathMap, depth, root5, parent, node, requestedPaths, optimizedPaths, requestedPath, optimizedPath, version2, expired, lru, comparator2, errorSelector2) {
  var keys = getKeys(pathMap);
  if (keys && keys.length) {
    var keyIndex = 0;
    var keyCount = keys.length;
    var optimizedIndex = optimizedPath.index;
    do {
      var key = keys[keyIndex];
      var child = pathMap[key];
      var branch = isObject$1(child) && !child.$type;
      requestedPath.depth = depth;
      var results = setNode(
        root5,
        parent,
        node,
        key,
        child,
        branch,
        false,
        requestedPath,
        optimizedPath,
        version2,
        expired,
        lru,
        comparator2,
        errorSelector2
      );
      requestedPath[depth] = key;
      requestedPath.index = depth;
      optimizedPath[optimizedPath.index++] = key;
      var nextNode = results[0];
      var nextParent = results[1];
      if (nextNode) {
        if (branch) {
          setPathMap(
            child,
            depth + 1,
            root5,
            nextParent,
            nextNode,
            requestedPaths,
            optimizedPaths,
            requestedPath,
            optimizedPath,
            version2,
            expired,
            lru,
            comparator2,
            errorSelector2
          );
        } else {
          requestedPaths.push(requestedPath.slice(0, requestedPath.index + 1));
          optimizedPaths.push(optimizedPath.slice(0, optimizedPath.index));
        }
      }
      if (++keyIndex >= keyCount) {
        break;
      }
      optimizedPath.index = optimizedIndex;
    } while (true);
  }
}
function setReference(value, root5, node, requestedPath, optimizedPath, version2, expired, lru, comparator2, errorSelector2) {
  var reference = node.value;
  optimizedPath.length = 0;
  optimizedPath.push.apply(optimizedPath, reference);
  if (isExpired$2(node)) {
    optimizedPath.index = reference.length;
    expireNode$1(node, expired, lru);
    return [void 0, root5];
  }
  var container = node;
  var parent = root5;
  node = node.$_context;
  if (node != null) {
    parent = node.$_parent || root5;
    optimizedPath.index = reference.length;
  } else {
    var index = 0;
    var count = reference.length - 1;
    optimizedPath.index = index;
    parent = node = root5;
    do {
      var key = reference[index];
      var branch = index < count;
      var results = setNode(
        root5,
        parent,
        node,
        key,
        value,
        branch,
        true,
        requestedPath,
        optimizedPath,
        version2,
        expired,
        lru,
        comparator2,
        errorSelector2
      );
      node = results[0];
      if (isPrimitive$1(node)) {
        optimizedPath.index = index;
        return results;
      }
      parent = results[1];
    } while (index++ < count);
    optimizedPath.index = index;
    if (container.$_context !== node) {
      createHardlink2(container, node);
    }
  }
  return [node, parent];
}
function setNode(root5, parent, node, key, value, branch, reference, requestedPath, optimizedPath, version2, expired, lru, comparator2, errorSelector2) {
  var type = node.$type;
  while (type === $ref$1) {
    var results = setReference(
      value,
      root5,
      node,
      requestedPath,
      optimizedPath,
      version2,
      expired,
      lru,
      comparator2,
      errorSelector2
    );
    node = results[0];
    if (isPrimitive$1(node)) {
      return results;
    }
    parent = results[1];
    type = node && node.$type;
  }
  if (type !== void 0) {
    return [node, parent];
  }
  if (key == null) {
    if (branch) {
      throw new NullInPathError();
    } else if (node) {
      key = node.$_key;
    }
  } else {
    parent = node;
    node = parent[key];
  }
  node = mergeValueOrInsertBranch2(
    parent,
    node,
    key,
    value,
    branch,
    reference,
    requestedPath,
    optimizedPath,
    version2,
    expired,
    lru,
    comparator2,
    errorSelector2
  );
  return [node, parent];
}
function getKeys(pathMap) {
  if (isObject$1(pathMap) && !pathMap.$type) {
    var keys = [];
    var itr = 0;
    if (isArray$2(pathMap)) {
      keys[itr++] = "length";
    }
    for (var key in pathMap) {
      if (key[0] === __prefix || !hasOwn(pathMap, key)) {
        continue;
      }
      keys[itr++] = key;
    }
    return keys;
  }
  return void 0;
}
var pathSyntax$4 = src$1;
function sentinel(type, value, props) {
  var copy = /* @__PURE__ */ Object.create(null);
  if (props != null) {
    for (var key in props) {
      copy[key] = props[key];
    }
    copy["$type"] = type;
    copy.value = value;
    return copy;
  } else {
    return { $type: type, value };
  }
}
var src = {
  ref: function ref2(path, props) {
    return sentinel("ref", pathSyntax$4.fromPath(path), props);
  },
  atom: function atom2(value, props) {
    return sentinel("atom", value, props);
  },
  undefined: function() {
    return sentinel("atom");
  },
  error: function error2(errorValue, props) {
    return sentinel("error", errorValue, props);
  },
  pathValue: function pathValue(path, value) {
    return { path: pathSyntax$4.fromPath(path), value };
  },
  pathInvalidation: function pathInvalidation(path) {
    return { path: pathSyntax$4.fromPath(path), invalidated: true };
  }
};
var isArray$1 = Array.isArray;
var isPathValue$1 = isPathValue$3;
var isJSONGraphEnvelope$2 = isJSONGraphEnvelope$3;
var isJSONEnvelope$2 = isJSONEnvelope$4;
var pathSyntax$3 = src$1;
var validateInput$3 = function validateInput(args, allowedInput, method) {
  for (var i = 0, len = args.length; i < len; ++i) {
    var arg = args[i];
    var valid = false;
    if (isArray$1(arg) && allowedInput.path) {
      valid = true;
    } else if (typeof arg === "string" && allowedInput.pathSyntax) {
      try {
        pathSyntax$3.fromPath(arg);
        valid = true;
      } catch (errorMessage) {
        return new Error("Path syntax validation error -- " + errorMessage);
      }
    } else if (isPathValue$1(arg) && allowedInput.pathValue) {
      try {
        arg.path = pathSyntax$3.fromPath(arg.path);
        valid = true;
      } catch (errorMessage) {
        return new Error("Path syntax validation error -- " + errorMessage);
      }
    } else if (isJSONGraphEnvelope$2(arg) && allowedInput.jsonGraph) {
      valid = true;
    } else if (isJSONEnvelope$2(arg) && allowedInput.json) {
      valid = true;
    } else if (typeof arg === "function" && i + 1 === len && allowedInput.selector) {
      valid = true;
    }
    if (!valid) {
      return new Error("Unrecognized argument " + typeof arg + " [" + String(arg) + "] to Model#" + method);
    }
  }
  return true;
};
var privatePrefix = privatePrefix$2;
var isInternalKey$1 = function isInternalKey(x) {
  return x === "$size" || x.lastIndexOf(privatePrefix, 0) === 0;
};
var isInternalKey2 = isInternalKey$1;
var getCache$1 = function getCache(cache) {
  var out = {};
  _copyCache(cache, out);
  return out;
};
function cloneBoxedValue(boxedValue) {
  var clonedValue = {};
  var keys = Object.keys(boxedValue);
  var key;
  var i;
  var l;
  for (i = 0, l = keys.length; i < l; i++) {
    key = keys[i];
    if (!isInternalKey2(key)) {
      clonedValue[key] = boxedValue[key];
    }
  }
  return clonedValue;
}
function _copyCache(node, out, fromKey) {
  Object.keys(node).filter(function(k) {
    return !isInternalKey2(k) && node[k] !== void 0;
  }).forEach(function(key) {
    var cacheNext = node[key];
    var outNext = out[key];
    if (!outNext) {
      outNext = out[key] = {};
    }
    if (cacheNext.$type) {
      var isObject5 = cacheNext.value && typeof cacheNext.value === "object";
      var isUserCreatedcacheNext = !cacheNext.$_modelCreated;
      var value;
      if (isObject5 || isUserCreatedcacheNext) {
        value = cloneBoxedValue(cacheNext);
      } else {
        value = cacheNext.value;
      }
      out[key] = value;
      return;
    }
    _copyCache(cacheNext, outNext);
  });
}
var getCachePosition$1;
var hasRequiredGetCachePosition;
function requireGetCachePosition() {
  if (hasRequiredGetCachePosition)
    return getCachePosition$1;
  hasRequiredGetCachePosition = 1;
  getCachePosition$1 = function getCachePosition2(model, path) {
    var currentCachePosition = model._root.cache;
    var depth = -1;
    var maxDepth = path.length;
    while (++depth < maxDepth && currentCachePosition && !currentCachePosition.$type) {
      currentCachePosition = currentCachePosition[path[depth]];
    }
    return currentCachePosition;
  };
  return getCachePosition$1;
}
var applyErrorPrototype$1 = applyErrorPrototype_1;
function BoundJSONGraphModelError$1() {
  var instance7 = new Error("It is not legal to use the JSON Graph format from a bound Model. JSON Graph format can only be used from a root model.");
  instance7.name = "BoundJSONGraphModelError";
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(instance7, Object.getPrototypeOf(this));
  }
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance7, BoundJSONGraphModelError$1);
  }
  return instance7;
}
applyErrorPrototype$1(BoundJSONGraphModelError$1);
var BoundJSONGraphModelError_1 = BoundJSONGraphModelError$1;
var getCachePosition = requireGetCachePosition();
var InvalidModelError = requireInvalidModelError();
var BoundJSONGraphModelError = BoundJSONGraphModelError_1;
function mergeInto(target, obj) {
  if (target === obj) {
    return;
  }
  if (target === null || typeof target !== "object" || target.$type) {
    return;
  }
  if (obj === null || typeof obj !== "object" || obj.$type) {
    return;
  }
  for (var key in obj) {
    if (key === "$__path") {
      continue;
    }
    var targetValue = target[key];
    if (targetValue === void 0) {
      target[key] = obj[key];
    } else {
      mergeInto(targetValue, obj[key]);
    }
  }
}
function defaultEnvelope(isJSONG) {
  return isJSONG ? { jsonGraph: {}, paths: [] } : { json: {} };
}
var get$3 = function get2(walk, isJSONG) {
  return function innerGet(model, paths2, seed) {
    var nextSeed = isJSONG ? seed : [{}];
    var valueNode = nextSeed[0];
    var results = {
      values: nextSeed,
      optimizedPaths: []
    };
    var cache = model._root.cache;
    var boundPath = model._path;
    var currentCachePosition = cache;
    var optimizedPath, optimizedLength;
    var i, len;
    var requestedPath = [];
    var derefInfo = [];
    var referenceContainer;
    if (boundPath.length) {
      if (isJSONG) {
        return {
          criticalError: new BoundJSONGraphModelError()
        };
      }
      optimizedPath = model._getOptimizedBoundPath();
      optimizedLength = optimizedPath.length;
      currentCachePosition = getCachePosition(model, optimizedPath);
      if (currentCachePosition && currentCachePosition.$type) {
        return {
          criticalError: new InvalidModelError(boundPath, optimizedPath)
        };
      }
      referenceContainer = model._referenceContainer;
    } else {
      optimizedPath = [];
      optimizedLength = 0;
    }
    for (i = 0, len = paths2.length; i < len; i++) {
      walk(
        model,
        cache,
        currentCachePosition,
        paths2[i],
        0,
        valueNode,
        results,
        derefInfo,
        requestedPath,
        optimizedPath,
        optimizedLength,
        isJSONG,
        false,
        referenceContainer
      );
    }
    mergeInto(valueNode, paths2.length ? seed[0] : defaultEnvelope(isJSONG));
    return results;
  };
};
var promote$1 = requirePromote();
var clone2 = requireClone();
var onError$1 = function onError2(model, node, depth, requestedPath, outerResults) {
  var value = node.value;
  if (!outerResults.errors) {
    outerResults.errors = [];
  }
  if (model._boxed) {
    value = clone2(node);
  }
  outerResults.errors.push({
    path: requestedPath.slice(0, depth),
    value
  });
  promote$1(model._root, node);
};
var onMissing$1 = function onMissing(model, path, depth, outerResults, requestedPath, optimizedPath, optimizedLength) {
  var pathSlice;
  if (!outerResults.requestedMissingPaths) {
    outerResults.requestedMissingPaths = [];
    outerResults.optimizedMissingPaths = [];
  }
  if (depth < path.length) {
    var isEmpty = false;
    for (var i = depth; i < path.length && !isEmpty; ++i) {
      if (isEmptyAtom(path[i])) {
        return;
      }
    }
    pathSlice = path.slice(depth);
  } else {
    pathSlice = [];
  }
  concatAndInsertMissing(
    model,
    pathSlice,
    depth,
    requestedPath,
    optimizedPath,
    optimizedLength,
    outerResults
  );
};
function concatAndInsertMissing(model, remainingPath, depth, requestedPath, optimizedPath, optimizedLength, results) {
  var requested = requestedPath.slice(0, depth);
  Array.prototype.push.apply(requested, remainingPath);
  results.requestedMissingPaths[results.requestedMissingPaths.length] = requested;
  var optimized = optimizedPath.slice(0, optimizedLength);
  Array.prototype.push.apply(optimized, remainingPath);
  results.optimizedMissingPaths[results.optimizedMissingPaths.length] = optimized;
}
function isEmptyAtom(atom3) {
  if (atom3 === null || typeof atom3 !== "object") {
    return false;
  }
  var isArray4 = Array.isArray(atom3);
  if (isArray4 && atom3.length) {
    return false;
  } else if (isArray4) {
    return true;
  }
  var from = atom3.from;
  var to = atom3.to;
  if (from === void 0 || from <= to) {
    return false;
  }
  return true;
}
var isMaterialzed = function isMaterialized(model) {
  return model._materialized && !model._source;
};
var isExpired$1 = requireIsExpired();
var $error = error;
var onError3 = onError$1;
var onValue$1 = onValue$2;
var onMissing2 = onMissing$1;
var isMaterialized2 = isMaterialzed;
var expireNode2 = expireNode$5;
var currentCacheVersion = currentCacheVersion$2;
var onValueType$1 = function onValueType(model, node, path, depth, seed, outerResults, branchInfo, requestedPath, optimizedPath, optimizedLength, isJSONG, fromReference) {
  var currType = node && node.$type;
  if (!node || !currType) {
    var materialized = isMaterialized2(model);
    if (materialized || !isJSONG) {
      onValue$1(
        model,
        node,
        seed,
        depth,
        outerResults,
        branchInfo,
        requestedPath,
        optimizedPath,
        optimizedLength,
        isJSONG
      );
    }
    if (!materialized) {
      onMissing2(
        model,
        path,
        depth,
        outerResults,
        requestedPath,
        optimizedPath,
        optimizedLength
      );
    }
    return;
  } else if (isExpired$1(node) && !(node.$_version === currentCacheVersion.getVersion() && node.$expires === 0)) {
    if (!node.$_invalidated) {
      expireNode2(node, model._root.expired, model._root);
    }
    onMissing2(
      model,
      path,
      depth,
      outerResults,
      requestedPath,
      optimizedPath,
      optimizedLength
    );
  } else if (currType === $error) {
    if (fromReference) {
      requestedPath[depth] = null;
      depth += 1;
    }
    if (isJSONG || model._treatErrorsAsValues) {
      onValue$1(
        model,
        node,
        seed,
        depth,
        outerResults,
        branchInfo,
        requestedPath,
        optimizedPath,
        optimizedLength,
        isJSONG
      );
    } else {
      onValue$1(
        model,
        void 0,
        seed,
        depth,
        outerResults,
        branchInfo,
        requestedPath,
        optimizedPath,
        optimizedLength,
        isJSONG
      );
      onError3(model, node, depth, requestedPath, outerResults);
    }
  } else {
    if (fromReference) {
      requestedPath[depth] = null;
      depth += 1;
    }
    onValue$1(
      model,
      node,
      seed,
      depth,
      outerResults,
      branchInfo,
      requestedPath,
      optimizedPath,
      optimizedLength,
      isJSONG
    );
  }
};
var followReference = requireFollowReference();
var onValueType2 = onValueType$1;
var onValue2 = onValue$2;
var isExpired2 = requireIsExpired();
var iterateKeySet2 = lib$1.iterateKeySet;
var $ref = ref;
var promote = requirePromote();
var walkPath$1 = function walkPath(model, root5, curr, path, depth, seed, outerResults, branchInfo, requestedPath, optimizedPathArg, optimizedLength, isJSONG, fromReferenceArg, referenceContainerArg) {
  var fromReference = fromReferenceArg;
  var optimizedPath = optimizedPathArg;
  var referenceContainer = referenceContainerArg;
  if (!curr || curr.$type || depth === path.length) {
    onValueType2(
      model,
      curr,
      path,
      depth,
      seed,
      outerResults,
      branchInfo,
      requestedPath,
      optimizedPath,
      optimizedLength,
      isJSONG,
      fromReference
    );
    return;
  }
  var keySet = path[depth];
  var isKeySet = keySet !== null && typeof keySet === "object";
  var iteratorNote = false;
  var key = keySet;
  if (isKeySet) {
    iteratorNote = {};
    key = iterateKeySet2(keySet, iteratorNote);
  }
  var allowFromWhenceYouCame = model._allowFromWhenceYouCame;
  var optimizedLengthPlus1 = optimizedLength + 1;
  var nextDepth = depth + 1;
  var refPath;
  do {
    if (key == null) {
      onValue2(
        model,
        curr,
        seed,
        depth,
        outerResults,
        branchInfo,
        requestedPath,
        optimizedPath,
        optimizedLength,
        isJSONG
      );
      if (iteratorNote && !iteratorNote.done) {
        key = iterateKeySet2(keySet, iteratorNote);
      }
      continue;
    }
    fromReference = false;
    optimizedPath[optimizedLength] = key;
    requestedPath[depth] = key;
    var next = curr[key];
    var nextOptimizedPath = optimizedPath;
    var nextOptimizedLength = optimizedLengthPlus1;
    if (next) {
      var nType = next.$type;
      var value = nType && next.value || next;
      if (nextDepth < path.length && nType && nType === $ref && !isExpired2(next)) {
        promote(model._root, next);
        if (isJSONG) {
          onValue2(
            model,
            next,
            seed,
            nextDepth,
            outerResults,
            null,
            null,
            optimizedPath,
            nextOptimizedLength,
            isJSONG
          );
        }
        var ref3 = followReference(
          model,
          root5,
          root5,
          next,
          value,
          seed,
          isJSONG
        );
        fromReference = true;
        next = ref3[0];
        refPath = ref3[1];
        referenceContainer = ref3[2];
        nextOptimizedPath = refPath.slice();
        nextOptimizedLength = refPath.length;
      }
      if (next) {
        var obj;
        if (referenceContainer && allowFromWhenceYouCame) {
          obj = {
            $__path: next.$_absolutePath,
            $__refPath: referenceContainer.value,
            $__toReference: referenceContainer.$_absolutePath
          };
        } else {
          obj = {
            $__path: next.$_absolutePath
          };
        }
        branchInfo[depth] = obj;
      }
    }
    walkPath(
      model,
      root5,
      next,
      path,
      nextDepth,
      seed,
      outerResults,
      branchInfo,
      requestedPath,
      nextOptimizedPath,
      nextOptimizedLength,
      isJSONG,
      fromReference,
      referenceContainer
    );
    if (iteratorNote && !iteratorNote.done) {
      key = iterateKeySet2(keySet, iteratorNote);
    }
  } while (iteratorNote && !iteratorNote.done);
};
var get$2 = get$3;
var walkPath2 = walkPath$1;
var getWithPathsAsPathMap$2 = get$2(walkPath2, false);
var getWithPathsAsJSONGraph$1 = get$2(walkPath2, true);
var get_1 = {
  getValueSync: requireGetValueSync(),
  getBoundValue: requireGetBoundValue(),
  getWithPathsAsPathMap: getWithPathsAsPathMap$2,
  getWithPathsAsJSONGraph: getWithPathsAsJSONGraph$1
};
var validInput = {
  path: true,
  pathSyntax: true
};
var gets = get_1;
var getWithPathsAsJSONGraph = gets.getWithPathsAsJSONGraph;
var getWithPathsAsPathMap$1 = gets.getWithPathsAsPathMap;
var checkCacheAndReport$2 = function checkCacheAndReport(model, requestedPaths, observer, progressive, isJSONG, seed, errors2) {
  var results = isJSONG ? getWithPathsAsJSONGraph(model, requestedPaths, seed) : getWithPathsAsPathMap$1(model, requestedPaths, seed);
  var valueNode = results.values && results.values[0];
  var completed = !results.requestedMissingPaths || !results.requestedMissingPaths.length || !model._source;
  if (results.errors) {
    var errs = results.errors;
    var errorsLength = errors2.length;
    for (var i = 0, len = errs.length; i < len; ++i, ++errorsLength) {
      errors2[errorsLength] = errs[i];
    }
  }
  if (progressive || completed && valueNode !== void 0) {
    observer.onNext(valueNode);
  }
  if (results.criticalError) {
    observer.onError(results.criticalError);
    return null;
  }
  if (completed) {
    if (errors2.length) {
      observer.onError(errors2);
    } else {
      observer.onCompleted();
    }
    return null;
  }
  return results;
};
var applyErrorPrototype = applyErrorPrototype_1;
function MaxRetryExceededError$2(missingOptimizedPaths) {
  var instance7 = new Error("The allowed number of retries have been exceeded.");
  instance7.name = "MaxRetryExceededError";
  instance7.missingOptimizedPaths = missingOptimizedPaths || [];
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(instance7, Object.getPrototypeOf(this));
  }
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance7, MaxRetryExceededError$2);
  }
  return instance7;
}
applyErrorPrototype(MaxRetryExceededError$2);
MaxRetryExceededError$2.is = function(e) {
  return e && e.name === "MaxRetryExceededError";
};
var MaxRetryExceededError_1 = MaxRetryExceededError$2;
var AssignableDisposable$2 = function AssignableDisposable(disosableCallback) {
  this.disposed = false;
  this.currentDisposable = disosableCallback;
};
AssignableDisposable$2.prototype = {
  dispose: function dispose() {
    if (this.disposed || !this.currentDisposable) {
      return;
    }
    this.disposed = true;
    var currentDisposable = this.currentDisposable;
    if (currentDisposable.dispose) {
      currentDisposable.dispose();
    } else {
      currentDisposable();
    }
  }
};
var AssignableDisposable_1 = AssignableDisposable$2;
var checkCacheAndReport$1 = checkCacheAndReport$2;
var MaxRetryExceededError$1 = MaxRetryExceededError_1;
var collectLru$2 = collect;
var getSize$2 = getSize$6;
var AssignableDisposable$1 = AssignableDisposable_1;
var InvalidSourceError$1 = InvalidSourceError_1;
var getRequestCycle$1 = function getRequestCycle(getResponse, model, results, observer, errors2, count) {
  if (count > model._maxRetries) {
    observer.onError(new MaxRetryExceededError$1(results.optimizedMissingPaths));
    return {
      dispose: function() {
      }
    };
  }
  var requestQueue = model._request;
  var requestedMissingPaths = results.requestedMissingPaths;
  var optimizedMissingPaths = results.optimizedMissingPaths;
  var disposable = new AssignableDisposable$1();
  var boundRequestedMissingPaths = [];
  var boundPath = model._path;
  if (boundPath.length) {
    for (var i = 0, len = requestedMissingPaths.length; i < len; ++i) {
      boundRequestedMissingPaths[i] = boundPath.concat(requestedMissingPaths[i]);
    }
  } else {
    boundRequestedMissingPaths = requestedMissingPaths;
  }
  var currentRequestDisposable = requestQueue.get(boundRequestedMissingPaths, optimizedMissingPaths, count, function(err, data, hasInvalidatedResult) {
    if (model._treatDataSourceErrorsAsJSONGraphErrors ? err instanceof InvalidSourceError$1 : !!err) {
      if (results.hasValues) {
        observer.onNext(results.values && results.values[0]);
      }
      observer.onError(err);
      return;
    }
    var nextRequestedMissingPaths;
    var nextSeed;
    if (hasInvalidatedResult) {
      nextRequestedMissingPaths = getResponse.currentRemainingPaths;
      nextSeed = [{}];
    } else {
      nextRequestedMissingPaths = requestedMissingPaths;
      nextSeed = results.values;
    }
    var nextResults = checkCacheAndReport$1(
      model,
      nextRequestedMissingPaths,
      observer,
      getResponse.isProgressive,
      getResponse.isJSONGraph,
      nextSeed,
      errors2
    );
    if (nextResults) {
      disposable.currentDisposable = getRequestCycle(
        getResponse,
        model,
        nextResults,
        observer,
        errors2,
        count + 1
      );
    } else {
      var modelRoot = model._root;
      var modelCache = modelRoot.cache;
      var currentVersion = modelCache.$_version;
      collectLru$2(
        modelRoot,
        modelRoot.expired,
        getSize$2(modelCache),
        model._maxSize,
        model._collectRatio,
        currentVersion
      );
    }
  });
  disposable.currentDisposable = currentRequestDisposable;
  return disposable;
};
var ModelResponse$4 = ModelResponse_1;
var checkCacheAndReport2 = checkCacheAndReport$2;
var getRequestCycle2 = getRequestCycle$1;
var empty2 = { dispose: function() {
} };
var collectLru$1 = collect;
var getSize$1 = getSize$6;
var GetResponse$3 = function GetResponse(model, paths2, isJSONGraph, isProgressive, forceCollect) {
  this.model = model;
  this.currentRemainingPaths = paths2;
  this.isJSONGraph = isJSONGraph || false;
  this.isProgressive = isProgressive || false;
  this.forceCollect = forceCollect || false;
};
GetResponse$3.prototype = Object.create(ModelResponse$4.prototype);
GetResponse$3.prototype._toJSONG = function _toJSONGraph() {
  return new GetResponse$3(
    this.model,
    this.currentRemainingPaths,
    true,
    this.isProgressive,
    this.forceCollect
  );
};
GetResponse$3.prototype.progressively = function progressively3() {
  return new GetResponse$3(
    this.model,
    this.currentRemainingPaths,
    this.isJSONGraph,
    true,
    this.forceCollect
  );
};
GetResponse$3.prototype._subscribe = function _subscribe3(observer) {
  var seed = [{}];
  var errors2 = [];
  var model = this.model;
  var isJSONG = observer.isJSONG = this.isJSONGraph;
  var isProgressive = this.isProgressive;
  var results = checkCacheAndReport2(
    model,
    this.currentRemainingPaths,
    observer,
    isProgressive,
    isJSONG,
    seed,
    errors2
  );
  if (!results) {
    if (this.forceCollect) {
      var modelRoot = model._root;
      var modelCache = modelRoot.cache;
      var currentVersion = modelCache.$_version;
      collectLru$1(
        modelRoot,
        modelRoot.expired,
        getSize$1(modelCache),
        model._maxSize,
        model._collectRatio,
        currentVersion
      );
    }
    return empty2;
  }
  return getRequestCycle2(
    this,
    model,
    results,
    observer,
    errors2,
    1
  );
};
var GetResponse_1 = GetResponse$3;
var pathSyntax$2 = src$1;
var ModelResponse$3 = ModelResponse_1;
var GET_VALID_INPUT$1 = validInput;
var validateInput$2 = validateInput$3;
var GetResponse$2 = GetResponse_1;
var get$1 = function get3() {
  var out = validateInput$2(arguments, GET_VALID_INPUT$1, "get");
  if (out !== true) {
    return new ModelResponse$3(function(o) {
      o.onError(out);
    });
  }
  var paths2 = pathSyntax$2.fromPathsOrPathValues(arguments);
  return new GetResponse$2(this, paths2);
};
var GetResponse$1 = GetResponse_1;
var getWithPaths = function getWithPaths2(paths2) {
  return new GetResponse$1(this, paths2);
};
var setValidInput$1 = {
  pathValue: true,
  pathSyntax: true,
  json: true,
  jsonGraph: true
};
var arrayFlatMap$1 = function arrayFlatMap(array, selector) {
  var index = -1;
  var i = -1;
  var n = array.length;
  var array2 = [];
  while (++i < n) {
    var array3 = selector(array[i], i, array);
    var j = -1;
    var k = array3.length;
    while (++j < k) {
      array2[++index] = array3[j];
    }
  }
  return array2;
};
var arrayFlatMap2 = arrayFlatMap$1;
var setGroupsIntoCache$1 = function setGroupsIntoCache(model, groups) {
  var modelRoot = model._root;
  var errorSelector2 = modelRoot.errorSelector;
  var groupIndex = -1;
  var groupCount = groups.length;
  var requestedPaths = [];
  var optimizedPaths = [];
  var returnValue = {
    requestedPaths,
    optimizedPaths
  };
  while (++groupIndex < groupCount) {
    var group = groups[groupIndex];
    var inputType = group.inputType;
    var methodArgs = group.arguments;
    if (methodArgs.length > 0) {
      var operationName = "_set" + inputType;
      var operationFunc = model[operationName];
      var successfulPaths = operationFunc(model, methodArgs, null, errorSelector2);
      optimizedPaths.push.apply(optimizedPaths, successfulPaths[1]);
      if (inputType === "PathValues") {
        requestedPaths.push.apply(requestedPaths, methodArgs.map(pluckPath));
      } else if (inputType === "JSONGs") {
        requestedPaths.push.apply(requestedPaths, arrayFlatMap2(methodArgs, pluckEnvelopePaths));
      } else {
        requestedPaths.push.apply(requestedPaths, successfulPaths[0]);
      }
    }
  }
  return returnValue;
};
function pluckPath(pathValue2) {
  return pathValue2.path;
}
function pluckEnvelopePaths(jsonGraphEnvelope) {
  return jsonGraphEnvelope.paths;
}
var emptyArray = [];
var AssignableDisposable2 = AssignableDisposable_1;
var GetResponse2 = GetResponse_1;
var setGroupsIntoCache2 = setGroupsIntoCache$1;
var getWithPathsAsPathMap = get_1.getWithPathsAsPathMap;
var InvalidSourceError = InvalidSourceError_1;
var MaxRetryExceededError = MaxRetryExceededError_1;
var setRequestCycle$1 = function setRequestCycle(model, observer, groups, isJSONGraph, isProgressive, count) {
  var requestedAndOptimizedPaths = setGroupsIntoCache2(model, groups);
  var optimizedPaths = requestedAndOptimizedPaths.optimizedPaths;
  var requestedPaths = requestedAndOptimizedPaths.requestedPaths;
  if (count > model._maxRetries) {
    observer.onError(new MaxRetryExceededError(optimizedPaths));
    return {
      dispose: function() {
      }
    };
  }
  var isMaster = model._source === void 0;
  if (isMaster) {
    return subscribeToFollowupGet(
      model,
      observer,
      requestedPaths,
      isJSONGraph,
      isProgressive
    );
  }
  var prevVersion;
  if (isProgressive) {
    var results = getWithPathsAsPathMap(model, requestedPaths, [{}]);
    if (results.criticalError) {
      observer.onError(results.criticalError);
      return null;
    }
    observer.onNext(results.values[0]);
    prevVersion = model._root.cache.$_version;
  }
  var currentJSONGraph = getJSONGraph(model, optimizedPaths);
  var disposable = new AssignableDisposable2();
  var requestDisposable = model._request.set(currentJSONGraph, count, function(error3, jsonGraphEnv) {
    if (error3 instanceof InvalidSourceError) {
      observer.onError(error3);
      return;
    }
    var isCompleted = false;
    if (error3 || optimizedPaths.length === jsonGraphEnv.paths.length) {
      isCompleted = true;
    }
    if (isProgressive) {
      var nextVersion = model._root.cache.$_version;
      var versionChanged = nextVersion !== prevVersion;
      if (!versionChanged) {
        observer.onCompleted();
        return;
      }
    }
    if (isCompleted) {
      disposable.currentDisposable = subscribeToFollowupGet(
        model,
        observer,
        requestedPaths,
        isJSONGraph,
        isProgressive
      );
    } else {
      setRequestCycle(
        model,
        observer,
        groups,
        isJSONGraph,
        isProgressive,
        count + 1
      );
    }
  });
  disposable.currentDisposable = requestDisposable;
  return disposable;
};
function getJSONGraph(model, optimizedPaths) {
  var boundPath = model._path;
  var envelope = {};
  model._path = emptyArray;
  model._getPathValuesAsJSONG(model._materialize().withoutDataSource(), optimizedPaths, [envelope]);
  model._path = boundPath;
  return envelope;
}
function subscribeToFollowupGet(model, observer, requestedPaths, isJSONGraph, isProgressive) {
  var response = new GetResponse2(
    model,
    requestedPaths,
    isJSONGraph,
    isProgressive,
    true
  );
  return response.subscribe(observer);
}
var ModelResponse$2 = ModelResponse_1;
var pathSyntax$1 = src$1;
var isArray = Array.isArray;
var isPathValue2 = isPathValue$3;
var isJSONGraphEnvelope$1 = isJSONGraphEnvelope$3;
var isJSONEnvelope$1 = isJSONEnvelope$4;
var setRequestCycle2 = setRequestCycle$1;
var SetResponse$1 = function SetResponse(model, args, isJSONGraph, isProgressive) {
  this._model = model;
  this._isJSONGraph = isJSONGraph || false;
  this._isProgressive = isProgressive || false;
  this._initialArgs = args;
  this._value = [{}];
  var groups = [];
  var group, groupType;
  var argIndex = -1;
  var argCount = args.length;
  while (++argIndex < argCount) {
    var arg = args[argIndex];
    var argType;
    if (isArray(arg) || typeof arg === "string") {
      arg = pathSyntax$1.fromPath(arg);
      argType = "PathValues";
    } else if (isPathValue2(arg)) {
      arg.path = pathSyntax$1.fromPath(arg.path);
      argType = "PathValues";
    } else if (isJSONGraphEnvelope$1(arg)) {
      argType = "JSONGs";
    } else if (isJSONEnvelope$1(arg)) {
      argType = "PathMaps";
    }
    if (groupType !== argType) {
      groupType = argType;
      group = {
        inputType: argType,
        arguments: []
      };
      groups.push(group);
    }
    group.arguments.push(arg);
  }
  this._groups = groups;
};
SetResponse$1.prototype = Object.create(ModelResponse$2.prototype);
SetResponse$1.prototype._subscribe = function _subscribe4(observer) {
  var groups = this._groups;
  var model = this._model;
  var isJSONGraph = this._isJSONGraph;
  var isProgressive = this._isProgressive;
  return setRequestCycle2(
    model,
    observer,
    groups,
    isJSONGraph,
    isProgressive,
    1
  );
};
SetResponse$1.prototype._toJSONG = function _toJSONGraph2() {
  return new SetResponse$1(
    this._model,
    this._initialArgs,
    true,
    this._isProgressive
  );
};
SetResponse$1.prototype.progressively = function progressively4() {
  return new SetResponse$1(
    this._model,
    this._initialArgs,
    this._isJSONGraph,
    true
  );
};
var SetResponse_1 = SetResponse$1;
var setValidInput = setValidInput$1;
var validateInput$1 = validateInput$3;
var SetResponse2 = SetResponse_1;
var ModelResponse$1 = ModelResponse_1;
var set2 = function set3() {
  var out = validateInput$1(arguments, setValidInput, "set");
  if (out !== true) {
    return new ModelResponse$1(function(o) {
      o.onError(out);
    });
  }
  var argsIdx = -1;
  var argsLen = arguments.length;
  var args = [];
  while (++argsIdx < argsLen) {
    args[argsIdx] = arguments[argsIdx];
  }
  return new SetResponse2(this, args);
};
var InvalidDerefInputError_1;
var hasRequiredInvalidDerefInputError;
function requireInvalidDerefInputError() {
  if (hasRequiredInvalidDerefInputError)
    return InvalidDerefInputError_1;
  hasRequiredInvalidDerefInputError = 1;
  var applyErrorPrototype2 = applyErrorPrototype_1;
  function InvalidDerefInputError() {
    var instance7 = new Error("Deref can only be used with a non-primitive object from get, set, or call.");
    instance7.name = "InvalidDerefInputError";
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(instance7, Object.getPrototypeOf(this));
    }
    if (Error.captureStackTrace) {
      Error.captureStackTrace(instance7, InvalidDerefInputError);
    }
    return instance7;
  }
  applyErrorPrototype2(InvalidDerefInputError);
  InvalidDerefInputError_1 = InvalidDerefInputError;
  return InvalidDerefInputError_1;
}
var deref;
var hasRequiredDeref;
function requireDeref() {
  if (hasRequiredDeref)
    return deref;
  hasRequiredDeref = 1;
  var InvalidDerefInputError = requireInvalidDerefInputError();
  var getCachePosition2 = requireGetCachePosition();
  var CONTAINER_DOES_NOT_EXIST = "e";
  var $ref2 = ref;
  deref = function deref2(boundJSONArg) {
    var absolutePath = boundJSONArg && boundJSONArg.$__path;
    var refPath = boundJSONArg && boundJSONArg.$__refPath;
    var toReference = boundJSONArg && boundJSONArg.$__toReference;
    var referenceContainer;
    if (absolutePath) {
      var validContainer = CONTAINER_DOES_NOT_EXIST;
      if (toReference) {
        validContainer = false;
        referenceContainer = getCachePosition2(this, toReference);
        if (refPath && referenceContainer && referenceContainer.$type === $ref2) {
          var containerPath = referenceContainer.value;
          var i = 0;
          var len = refPath.length;
          validContainer = true;
          for (; validContainer && i < len; ++i) {
            if (containerPath[i] !== refPath[i]) {
              validContainer = false;
            }
          }
        }
      }
      if (!validContainer) {
        referenceContainer = false;
      } else if (validContainer === CONTAINER_DOES_NOT_EXIST) {
        referenceContainer = true;
      }
      return this._clone({
        _path: absolutePath,
        _referenceContainer: referenceContainer
      });
    }
    throw new InvalidDerefInputError();
  };
  return deref;
}
var hasValidParentReference;
var hasRequiredHasValidParentReference;
function requireHasValidParentReference() {
  if (hasRequiredHasValidParentReference)
    return hasValidParentReference;
  hasRequiredHasValidParentReference = 1;
  hasValidParentReference = function fromWhenceYeCame() {
    var reference = this._referenceContainer;
    if (!this._allowFromWhenceYouCame) {
      return true;
    }
    if (reference === true) {
      return true;
    }
    if (reference === false) {
      return false;
    }
    if (reference && reference.$_parent === void 0) {
      return false;
    }
    if (reference && reference.$_invalidated) {
      return false;
    }
    return true;
  };
  return hasValidParentReference;
}
var getValue;
var hasRequiredGetValue;
function requireGetValue() {
  if (hasRequiredGetValue)
    return getValue;
  hasRequiredGetValue = 1;
  var ModelResponse2 = ModelResponse_1;
  var pathSyntax2 = src$1;
  getValue = function getValue4(path) {
    var parsedPath = pathSyntax2.fromPath(path);
    var pathIdx = 0;
    var pathLen = parsedPath.length;
    while (++pathIdx < pathLen) {
      if (typeof parsedPath[pathIdx] === "object") {
        return new ModelResponse2(function(o) {
          o.onError(new Error("Paths must be simple paths"));
        });
      }
    }
    var self2 = this;
    return new ModelResponse2(function(obs) {
      return self2.get(parsedPath).subscribe(function(data) {
        var curr = data.json;
        var depth = -1;
        var length = parsedPath.length;
        while (curr && ++depth < length) {
          curr = curr[parsedPath[depth]];
        }
        obs.onNext(curr);
      }, function(err) {
        obs.onError(err);
      }, function() {
        obs.onCompleted();
      });
    });
  };
  return getValue;
}
var setValue;
var hasRequiredSetValue;
function requireSetValue() {
  if (hasRequiredSetValue)
    return setValue;
  hasRequiredSetValue = 1;
  var jsong2 = src;
  var ModelResponse2 = ModelResponse_1;
  var isPathValue3 = isPathValue$3;
  setValue = function setValue2(pathArg, valueArg) {
    var value = isPathValue3(pathArg) ? pathArg : jsong2.pathValue(pathArg, valueArg);
    var pathIdx = 0;
    var path = value.path;
    var pathLen = path.length;
    while (++pathIdx < pathLen) {
      if (typeof path[pathIdx] === "object") {
        return new ModelResponse2(function(o) {
          o.onError(new Error("Paths must be simple paths"));
        });
      }
    }
    var self2 = this;
    return new ModelResponse2(function(obs) {
      return self2.set(value).subscribe(function(data) {
        var curr = data.json;
        var depth = -1;
        var length = path.length;
        while (curr && ++depth < length) {
          curr = curr[path[depth]];
        }
        obs.onNext(curr);
      }, function(err) {
        obs.onError(err);
      }, function() {
        obs.onCompleted();
      });
    });
  };
  return setValue;
}
var sync$2;
var hasRequiredSync$2;
function requireSync$2() {
  if (hasRequiredSync$2)
    return sync$2;
  hasRequiredSync$2 = 1;
  var pathSyntax2 = src$1;
  var getValueSync2 = requireGetValueSync();
  sync$2 = function _getValueSync(pathArg) {
    var path = pathSyntax2.fromPath(pathArg);
    if (Array.isArray(path) === false) {
      throw new Error("Model#_getValueSync must be called with an Array path.");
    }
    if (this._path.length) {
      path = this._path.concat(path);
    }
    this._syncCheck("getValueSync");
    return getValueSync2(this, path).value;
  };
  return sync$2;
}
var sync$1;
var hasRequiredSync$1;
function requireSync$1() {
  if (hasRequiredSync$1)
    return sync$1;
  hasRequiredSync$1 = 1;
  var pathSyntax2 = src$1;
  var isPathValue3 = isPathValue$3;
  var setPathValues2 = requireSetPathValues();
  sync$1 = function setValueSync(pathArg, valueArg, errorSelectorArg, comparatorArg) {
    var path = pathSyntax2.fromPath(pathArg);
    var value = valueArg;
    var errorSelector2 = errorSelectorArg;
    var comparator2 = comparatorArg;
    if (isPathValue3(path)) {
      comparator2 = errorSelector2;
      errorSelector2 = value;
      value = path;
    } else {
      value = {
        path,
        value
      };
    }
    if (isPathValue3(value) === false) {
      throw new Error("Model#setValueSync must be called with an Array path.");
    }
    if (typeof errorSelector2 !== "function") {
      errorSelector2 = this._root._errorSelector;
    }
    if (typeof comparator2 !== "function") {
      comparator2 = this._root._comparator;
    }
    this._syncCheck("setValueSync");
    setPathValues2(this, [value]);
    return this._getValueSync(value.path);
  };
  return sync$1;
}
var sync;
var hasRequiredSync;
function requireSync() {
  if (hasRequiredSync)
    return sync;
  hasRequiredSync = 1;
  var pathSyntax2 = src$1;
  var getBoundValue2 = requireGetBoundValue();
  var InvalidModelError2 = requireInvalidModelError();
  sync = function derefSync(boundPathArg) {
    var boundPath = pathSyntax2.fromPath(boundPathArg);
    if (!Array.isArray(boundPath)) {
      throw new Error("Model#derefSync must be called with an Array path.");
    }
    var boundValue = getBoundValue2(this, this._path.concat(boundPath), false);
    var path = boundValue.path;
    var node = boundValue.value;
    var found = boundValue.found;
    if (!found || node === void 0) {
      return void 0;
    }
    if (node.$type) {
      throw new InvalidModelError2(path, path);
    }
    return this._clone({ _path: path });
  };
  return sync;
}
var getVersion;
var hasRequiredGetVersion;
function requireGetVersion() {
  if (hasRequiredGetVersion)
    return getVersion;
  hasRequiredGetVersion = 1;
  var getValueSync2 = requireGetValueSync();
  getVersion = function _getVersion(model, path) {
    var gen = getValueSync2({
      _boxed: true,
      _root: model._root,
      _treatErrorsAsValues: model._treatErrorsAsValues
    }, path, true).value;
    var version2 = gen && gen.$_version;
    return version2 == null ? -1 : version2;
  };
  return getVersion;
}
var invalidatePathSets;
var hasRequiredInvalidatePathSets;
function requireInvalidatePathSets() {
  if (hasRequiredInvalidatePathSets)
    return invalidatePathSets;
  hasRequiredInvalidatePathSets = 1;
  var __ref2 = requireRef();
  var $ref2 = ref;
  var getBoundValue2 = requireGetBoundValue();
  var promote2 = requirePromote();
  var getSize4 = getSize$6;
  var isExpired3 = isExpired$7;
  var isFunction5 = isFunction$5;
  var isPrimitive3 = isPrimitive$4;
  var expireNode3 = expireNode$5;
  var iterateKeySet3 = lib$1.iterateKeySet;
  var incrementVersion3 = incrementVersion$3.exports;
  var updateNodeAncestors3 = updateNodeAncestors$3;
  var removeNodeAndDescendants2 = requireRemoveNodeAndDescendants();
  invalidatePathSets = function invalidatePathSets2(model, paths2) {
    var modelRoot = model._root;
    var lru = modelRoot;
    var expired = modelRoot.expired;
    var version2 = incrementVersion3();
    var bound = model._path;
    var cache = modelRoot.cache;
    var node = bound.length ? getBoundValue2(model, bound).value : cache;
    var parent = node.$_parent || cache;
    var initialVersion = cache.$_version;
    var pathIndex = -1;
    var pathCount2 = paths2.length;
    while (++pathIndex < pathCount2) {
      var path = paths2[pathIndex];
      invalidatePathSet(path, 0, cache, parent, node, version2, expired, lru);
    }
    var newVersion = cache.$_version;
    var rootChangeHandler = modelRoot.onChange;
    if (isFunction5(rootChangeHandler) && initialVersion !== newVersion) {
      rootChangeHandler();
    }
  };
  function invalidatePathSet(path, depth, root5, parent, node, version2, expired, lru) {
    var note = {};
    var branch = depth < path.length - 1;
    var keySet = path[depth];
    var key = iterateKeySet3(keySet, note);
    do {
      var results = invalidateNode(root5, parent, node, key, branch, expired, lru);
      var nextNode = results[0];
      var nextParent = results[1];
      if (nextNode) {
        if (branch) {
          invalidatePathSet(
            path,
            depth + 1,
            root5,
            nextParent,
            nextNode,
            version2,
            expired,
            lru
          );
        } else if (removeNodeAndDescendants2(nextNode, nextParent, key, lru, void 0)) {
          updateNodeAncestors3(nextParent, getSize4(nextNode), lru, version2);
        }
      }
      key = iterateKeySet3(keySet, note);
    } while (!note.done);
  }
  function invalidateReference(root5, node, expired, lru) {
    if (isExpired3(node)) {
      expireNode3(node, expired, lru);
      return [void 0, root5];
    }
    promote2(lru, node);
    var container = node;
    var reference = node.value;
    var parent = root5;
    node = node.$_context;
    if (node != null) {
      parent = node.$_parent || root5;
    } else {
      var index = 0;
      var count = reference.length - 1;
      parent = node = root5;
      do {
        var key = reference[index];
        var branch = index < count;
        var results = invalidateNode(root5, parent, node, key, branch, expired, lru);
        node = results[0];
        if (isPrimitive3(node)) {
          return results;
        }
        parent = results[1];
      } while (index++ < count);
      if (container.$_context !== node) {
        var backRefs = node.$_refsLength || 0;
        node.$_refsLength = backRefs + 1;
        node[__ref2 + backRefs] = container;
        container.$_context = node;
        container.$_refIndex = backRefs;
      }
    }
    return [node, parent];
  }
  function invalidateNode(root5, parent, node, key, branch, expired, lru) {
    var type = node.$type;
    while (type === $ref2) {
      var results = invalidateReference(root5, node, expired, lru);
      node = results[0];
      if (isPrimitive3(node)) {
        return results;
      }
      parent = results[1];
      type = node.$type;
    }
    if (type !== void 0) {
      return [node, parent];
    }
    if (key == null) {
      if (branch) {
        throw new Error("`null` is not allowed in branch key positions.");
      } else if (node) {
        key = node.$_key;
      }
    } else {
      parent = node;
      node = parent[key];
    }
    return [node, parent];
  }
  return invalidatePathSets;
}
var invalidatePathMaps;
var hasRequiredInvalidatePathMaps;
function requireInvalidatePathMaps() {
  if (hasRequiredInvalidatePathMaps)
    return invalidatePathMaps;
  hasRequiredInvalidatePathMaps = 1;
  var createHardlink3 = createHardlink$2;
  var __prefix2 = reservedPrefix$1;
  var $ref2 = ref;
  var getBoundValue2 = requireGetBoundValue();
  var promote2 = requirePromote();
  var getSize4 = getSize$6;
  var hasOwn2 = hasOwn_1;
  var isObject5 = isObject$f;
  var isExpired3 = isExpired$7;
  var isFunction5 = isFunction$5;
  var isPrimitive3 = isPrimitive$4;
  var expireNode3 = expireNode$5;
  var incrementVersion3 = incrementVersion$3.exports;
  var updateNodeAncestors3 = updateNodeAncestors$3;
  var removeNodeAndDescendants2 = requireRemoveNodeAndDescendants();
  invalidatePathMaps = function invalidatePathMaps2(model, pathMapEnvelopes) {
    var modelRoot = model._root;
    var lru = modelRoot;
    var expired = modelRoot.expired;
    var version2 = incrementVersion3();
    var bound = model._path;
    var cache = modelRoot.cache;
    var node = bound.length ? getBoundValue2(model, bound).value : cache;
    var parent = node.$_parent || cache;
    var initialVersion = cache.$_version;
    var pathMapIndex = -1;
    var pathMapCount = pathMapEnvelopes.length;
    while (++pathMapIndex < pathMapCount) {
      var pathMapEnvelope = pathMapEnvelopes[pathMapIndex];
      invalidatePathMap(pathMapEnvelope.json, cache, parent, node, version2, expired, lru);
    }
    var newVersion = cache.$_version;
    var rootChangeHandler = modelRoot.onChange;
    if (isFunction5(rootChangeHandler) && initialVersion !== newVersion) {
      rootChangeHandler();
    }
  };
  function invalidatePathMap(pathMap, root5, parent, node, version2, expired, lru) {
    if (isPrimitive3(pathMap) || pathMap.$type) {
      return;
    }
    for (var key in pathMap) {
      if (key[0] !== __prefix2 && hasOwn2(pathMap, key)) {
        var child = pathMap[key];
        var branch = isObject5(child) && !child.$type;
        var results = invalidateNode(root5, parent, node, key, branch, expired, lru);
        var nextNode = results[0];
        var nextParent = results[1];
        if (nextNode) {
          if (branch) {
            invalidatePathMap(child, root5, nextParent, nextNode, version2, expired, lru);
          } else if (removeNodeAndDescendants2(nextNode, nextParent, key, lru)) {
            updateNodeAncestors3(nextParent, getSize4(nextNode), lru, version2);
          }
        }
      }
    }
  }
  function invalidateReference(root5, node, expired, lru) {
    if (isExpired3(node)) {
      expireNode3(node, expired, lru);
      return [void 0, root5];
    }
    promote2(lru, node);
    var container = node;
    var reference = node.value;
    var parent = root5;
    node = node.$_context;
    if (node != null) {
      parent = node.$_parent || root5;
    } else {
      var index = 0;
      var count = reference.length - 1;
      parent = node = root5;
      do {
        var key = reference[index];
        var branch = index < count;
        var results = invalidateNode(root5, parent, node, key, branch, expired, lru);
        node = results[0];
        if (isPrimitive3(node)) {
          return results;
        }
        parent = results[1];
      } while (index++ < count);
      if (container.$_context !== node) {
        createHardlink3(container, node);
      }
    }
    return [node, parent];
  }
  function invalidateNode(root5, parent, node, key, branch, expired, lru) {
    var type = node.$type;
    while (type === $ref2) {
      var results = invalidateReference(root5, node, expired, lru);
      node = results[0];
      if (isPrimitive3(node)) {
        return results;
      }
      parent = results[1];
      type = node && node.$type;
    }
    if (type !== void 0) {
      return [node, parent];
    }
    if (key == null) {
      if (branch) {
        throw new Error("`null` is not allowed in branch key positions.");
      } else if (node) {
        key = node.$_key;
      }
    } else {
      parent = node;
      node = parent[key];
    }
    return [node, parent];
  }
  return invalidatePathMaps;
}
var ModelRoot = ModelRoot_1;
var ModelDataSourceAdapter = ModelDataSourceAdapter_1;
var RequestQueue = RequestQueueV2_1;
var ModelResponse = ModelResponse_1;
var CallResponse = CallResponse_1;
var InvalidateResponse = InvalidateResponse_1;
var TimeoutScheduler = TimeoutScheduler_1;
var ImmediateScheduler = ImmediateScheduler_1;
var collectLru = collect;
var pathSyntax = src$1;
var getSize3 = getSize$6;
var isObject2 = isObject$f;
var isPrimitive2 = isPrimitive$4;
var isJSONEnvelope2 = isJSONEnvelope$4;
var isJSONGraphEnvelope2 = isJSONGraphEnvelope$3;
var setCache = setPathMaps;
var setJSONGraphs2 = setJSONGraphs$3;
var jsong = src;
var ID = 0;
var validateInput2 = validateInput$3;
var noOp = function() {
};
var getCache2 = getCache$1;
var get4 = get_1;
var GET_VALID_INPUT = validInput;
var Model_1 = Model;
Model.ref = jsong.ref;
Model.atom = jsong.atom;
Model.error = jsong.error;
Model.pathValue = jsong.pathValue;
function Model(o) {
  var options = o || {};
  this._root = options._root || new ModelRoot(options);
  this._path = options.path || options._path || [];
  this._source = options.source || options._source;
  this._request = options.request || options._request || new RequestQueue(this, options.scheduler || new ImmediateScheduler());
  this._ID = ID++;
  if (typeof options.maxSize === "number") {
    this._maxSize = options.maxSize;
  } else {
    this._maxSize = options._maxSize || Model.prototype._maxSize;
  }
  if (typeof options.maxRetries === "number") {
    this._maxRetries = options.maxRetries;
  } else {
    this._maxRetries = options._maxRetries || Model.prototype._maxRetries;
  }
  if (typeof options.collectRatio === "number") {
    this._collectRatio = options.collectRatio;
  } else {
    this._collectRatio = options._collectRatio || Model.prototype._collectRatio;
  }
  if (options.boxed || options.hasOwnProperty("_boxed")) {
    this._boxed = options.boxed || options._boxed;
  }
  if (options.materialized || options.hasOwnProperty("_materialized")) {
    this._materialized = options.materialized || options._materialized;
  }
  if (typeof options.treatErrorsAsValues === "boolean") {
    this._treatErrorsAsValues = options.treatErrorsAsValues;
  } else if (options.hasOwnProperty("_treatErrorsAsValues")) {
    this._treatErrorsAsValues = options._treatErrorsAsValues;
  } else {
    this._treatErrorsAsValues = false;
  }
  if (typeof options.disablePathCollapse === "boolean") {
    this._enablePathCollapse = !options.disablePathCollapse;
  } else if (options.hasOwnProperty("_enablePathCollapse")) {
    this._enablePathCollapse = options._enablePathCollapse;
  } else {
    this._enablePathCollapse = true;
  }
  if (typeof options.disableRequestDeduplication === "boolean") {
    this._enableRequestDeduplication = !options.disableRequestDeduplication;
  } else if (options.hasOwnProperty("_enableRequestDeduplication")) {
    this._enableRequestDeduplication = options._enableRequestDeduplication;
  } else {
    this._enableRequestDeduplication = true;
  }
  this._useServerPaths = options._useServerPaths || false;
  this._allowFromWhenceYouCame = options.allowFromWhenceYouCame || options._allowFromWhenceYouCame || false;
  this._treatDataSourceErrorsAsJSONGraphErrors = options._treatDataSourceErrorsAsJSONGraphErrors || false;
  if (options.cache) {
    this.setCache(options.cache);
  }
}
Model.prototype.constructor = Model;
Model.prototype._materialized = false;
Model.prototype._boxed = false;
Model.prototype._progressive = false;
Model.prototype._treatErrorsAsValues = false;
Model.prototype._maxSize = Math.pow(2, 53) - 1;
Model.prototype._maxRetries = 3;
Model.prototype._collectRatio = 0.75;
Model.prototype._enablePathCollapse = true;
Model.prototype._enableRequestDeduplication = true;
Model.prototype.get = get$1;
Model.prototype._getOptimizedBoundPath = function _getOptimizedBoundPath() {
  return this._path ? this._path.slice() : this._path;
};
Model.prototype._getWithPaths = getWithPaths;
Model.prototype.set = set2;
Model.prototype.preload = function preload() {
  var out = validateInput2(arguments, GET_VALID_INPUT, "preload");
  if (out !== true) {
    return new ModelResponse(function(o) {
      o.onError(out);
    });
  }
  var args = Array.prototype.slice.call(arguments);
  var self2 = this;
  return new ModelResponse(function(obs) {
    return self2.get.apply(self2, args).subscribe(
      function() {
      },
      function(err) {
        obs.onError(err);
      },
      function() {
        obs.onCompleted();
      }
    );
  });
};
Model.prototype.call = function call2() {
  var args;
  var argsIdx = -1;
  var argsLen = arguments.length;
  args = new Array(argsLen);
  while (++argsIdx < argsLen) {
    var arg = arguments[argsIdx];
    args[argsIdx] = arg;
    var argType = typeof arg;
    if (argsIdx > 1 && !Array.isArray(arg) || argsIdx === 0 && !Array.isArray(arg) && argType !== "string" || argsIdx === 1 && !Array.isArray(arg) && !isPrimitive2(arg)) {
      return new ModelResponse(function(o) {
        o.onError(new Error("Invalid argument"));
      });
    }
  }
  return new CallResponse(this, args[0], args[1], args[2], args[3]);
};
Model.prototype.invalidate = function invalidate() {
  var args;
  var argsIdx = -1;
  var argsLen = arguments.length;
  args = [];
  while (++argsIdx < argsLen) {
    args[argsIdx] = pathSyntax.fromPath(arguments[argsIdx]);
    if (!Array.isArray(args[argsIdx]) || !args[argsIdx].length) {
      throw new Error("Invalid argument");
    }
  }
  new InvalidateResponse(this, args).subscribe(noOp, function(e) {
    throw e;
  });
};
Model.prototype.deref = requireDeref();
Model.prototype._hasValidParentReference = requireHasValidParentReference();
Model.prototype.getValue = requireGetValue();
Model.prototype.setValue = requireSetValue();
Model.prototype._getValueSync = requireSync$2();
Model.prototype._setValueSync = requireSync$1();
Model.prototype._derefSync = requireSync();
Model.prototype.setCache = function modelSetCache(cacheOrJSONGraphEnvelope) {
  var cache = this._root.cache;
  if (cacheOrJSONGraphEnvelope !== cache) {
    var modelRoot = this._root;
    var boundPath = this._path;
    this._path = [];
    this._root.cache = {};
    if (typeof cache !== "undefined") {
      collectLru(modelRoot, modelRoot.expired, getSize3(cache), 0);
    }
    var out;
    if (isJSONGraphEnvelope2(cacheOrJSONGraphEnvelope)) {
      out = setJSONGraphs2(this, [cacheOrJSONGraphEnvelope])[0];
    } else if (isJSONEnvelope2(cacheOrJSONGraphEnvelope)) {
      out = setCache(this, [cacheOrJSONGraphEnvelope])[0];
    } else if (isObject2(cacheOrJSONGraphEnvelope)) {
      out = setCache(this, [{ json: cacheOrJSONGraphEnvelope }])[0];
    }
    if (out) {
      get4.getWithPathsAsPathMap(this, out, []);
    }
    this._path = boundPath;
  } else if (typeof cache === "undefined") {
    this._root.cache = {};
  }
  return this;
};
Model.prototype.getCache = function _getCache() {
  var paths2 = Array.prototype.slice.call(arguments);
  if (paths2.length === 0) {
    return getCache2(this._root.cache);
  }
  var result3 = [{}];
  var path = this._path;
  get4.getWithPathsAsJSONGraph(this, paths2, result3);
  this._path = path;
  return result3[0].jsonGraph;
};
Model.prototype._setMaxSize = function setMaxSize(maxSize) {
  var oldMaxSize = this._maxSize;
  this._maxSize = maxSize;
  if (maxSize < oldMaxSize) {
    var modelRoot = this._root;
    var modelCache = modelRoot.cache;
    var currentVersion = modelCache.$_version;
    collectLru(
      modelRoot,
      modelRoot.expired,
      getSize3(modelCache),
      this._maxSize,
      this._collectRatio,
      currentVersion
    );
  }
};
Model.prototype.getVersion = function getVersion2(pathArg) {
  var path = pathArg && pathSyntax.fromPath(pathArg) || [];
  if (Array.isArray(path) === false) {
    throw new Error("Model#getVersion must be called with an Array path.");
  }
  if (this._path.length) {
    path = this._path.concat(path);
  }
  return this._getVersion(this, path);
};
Model.prototype._syncCheck = function syncCheck(name) {
  if (Boolean(this._source) && this._root.syncRefCount <= 0 && this._root.unsafeMode === false) {
    throw new Error("Model#" + name + " may only be called within the context of a request selector.");
  }
  return true;
};
Model.prototype._clone = function cloneModel(opts) {
  var clone3 = new this.constructor(this);
  for (var key in opts) {
    var value = opts[key];
    if (value === "delete") {
      delete clone3[key];
    } else {
      clone3[key] = value;
    }
  }
  clone3.setCache = void 0;
  return clone3;
};
Model.prototype.batch = function batch(schedulerOrDelay) {
  var scheduler;
  if (typeof schedulerOrDelay === "number") {
    scheduler = new TimeoutScheduler(Math.round(Math.abs(schedulerOrDelay)));
  } else if (!schedulerOrDelay || !schedulerOrDelay.schedule) {
    scheduler = new TimeoutScheduler(1);
  } else {
    scheduler = schedulerOrDelay;
  }
  var clone3 = this._clone();
  clone3._request = new RequestQueue(clone3, scheduler);
  return clone3;
};
Model.prototype.unbatch = function unbatch() {
  var clone3 = this._clone();
  clone3._request = new RequestQueue(clone3, new ImmediateScheduler());
  return clone3;
};
Model.prototype.treatErrorsAsValues = function treatErrorsAsValues() {
  return this._clone({
    _treatErrorsAsValues: true
  });
};
Model.prototype.asDataSource = function asDataSource() {
  return new ModelDataSourceAdapter(this);
};
Model.prototype._materialize = function materialize3() {
  return this._clone({
    _materialized: true
  });
};
Model.prototype._dematerialize = function dematerialize() {
  return this._clone({
    _materialized: "delete"
  });
};
Model.prototype.boxValues = function boxValues() {
  return this._clone({
    _boxed: true
  });
};
Model.prototype.unboxValues = function unboxValues() {
  return this._clone({
    _boxed: "delete"
  });
};
Model.prototype.withoutDataSource = function withoutDataSource() {
  return this._clone({
    _source: "delete"
  });
};
Model.prototype.toJSON = function toJSON() {
  return {
    $type: "ref",
    value: this._path
  };
};
Model.prototype.getPath = function getPath() {
  return this._path ? this._path.slice() : this._path;
};
Model.prototype._fromWhenceYouCame = function fromWhenceYouCame(allow) {
  return this._clone({
    _allowFromWhenceYouCame: allow === void 0 ? true : allow
  });
};
Model.prototype._getBoundValue = requireGetBoundValue();
Model.prototype._getVersion = requireGetVersion();
Model.prototype._getPathValuesAsPathMap = get4.getWithPathsAsPathMap;
Model.prototype._getPathValuesAsJSONG = get4.getWithPathsAsJSONGraph;
Model.prototype._setPathValues = requireSetPathValues();
Model.prototype._setPathMaps = setPathMaps;
Model.prototype._setJSONGs = setJSONGraphs$3;
Model.prototype._setCache = setPathMaps;
Model.prototype._invalidatePathValues = requireInvalidatePathSets();
Model.prototype._invalidatePathMaps = requireInvalidatePathMaps();
function falcor(opts) {
  return new falcor.Model(opts);
}
falcor.keys = function getJSONKeys(json) {
  if (!json) {
    return void 0;
  }
  return Object.keys(json).filter(function(key) {
    return key !== "$__path";
  });
};
var lib = falcor;
falcor.Model = Model_1;

// ../../atreyu/app/src/store/helpers.js
function extractFromCache(obj, path, idx = 0, root5 = obj) {
  if (obj && obj.$type === "atom" && path.length - idx !== 0) {
    let step = path[idx];
    if (!obj.value) {
      return void 0;
    }
    return extractFromCache(obj.value[step], path, idx + 1, root5);
  } else if (obj && obj.$type === "ref") {
    let newPath = obj.value.concat(path.slice(idx));
    return extractFromCache(root5, newPath);
  } else if (path.length - idx === 0) {
    if (obj && obj.$type === "error") {
      return void 0;
    } else if (obj && obj.$type) {
      return obj.value;
    } else {
      return obj;
    }
  } else if (obj === null || obj === void 0) {
    return obj;
  } else {
    let step = path[idx];
    return extractFromCache(obj[step], path, idx + 1, root5);
  }
}

// ../../atreyu/app/build/deps/falcor-observable.js
function getAugmentedNamespace2(n) {
  var f = n.default;
  if (typeof f == "function") {
    var a = function() {
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
function symbolObservablePonyfill2(root5) {
  var result3;
  var Symbol4 = root5.Symbol;
  if (typeof Symbol4 === "function") {
    if (Symbol4.observable) {
      result3 = Symbol4.observable;
    } else {
      result3 = Symbol4("observable");
      Symbol4.observable = result3;
    }
  } else {
    result3 = "@@observable";
  }
  return result3;
}
var root2;
if (typeof self !== "undefined") {
  root2 = self;
} else if (typeof window !== "undefined") {
  root2 = window;
} else if (typeof global !== "undefined") {
  root2 = global;
} else if (typeof module !== "undefined") {
  root2 = module;
} else {
  root2 = Function("return this")();
}
var result2 = symbolObservablePonyfill2(root2);
var es2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  "default": result2
});
var require$$0 = /* @__PURE__ */ getAugmentedNamespace2(es2);
var symbolError$1 = Symbol("try-catch-error");
var lastError = null;
function popError$1() {
  if (!lastError) {
    throw new Error("popError may only be called once");
  }
  const { e } = lastError;
  lastError = null;
  return e;
}
var tryCatch$1;
var tryCatchResult$1;
{
  const throwError = (e) => {
    throw e;
  };
  tryCatch$1 = function doTryCatch(f, ...args) {
    try {
      f.call(this, ...args);
    } catch (e) {
      setTimeout(() => {
        throwError(e);
      }, 0);
    }
  };
  tryCatchResult$1 = function doTryCatchResult(f, ...args) {
    try {
      return f.call(this, ...args);
    } catch (e) {
      lastError = { e };
      return symbolError$1;
    }
  };
}
var tryCatch_1 = { tryCatch: tryCatch$1, tryCatchResult: tryCatchResult$1, symbolError: symbolError$1, popError: popError$1 };
var symbolObservable = require$$0.default;
var {
  tryCatch,
  tryCatchResult,
  symbolError,
  popError
} = tryCatch_1;
function callNext(observer, value) {
  const { next } = observer;
  if (typeof next === "function") {
    next.call(observer, value);
  }
}
function callError(observer, errorValue) {
  const { error: error3 } = observer;
  if (typeof error3 === "function") {
    error3.call(observer, errorValue);
  }
}
function callComplete(observer) {
  const { complete } = observer;
  if (typeof complete === "function") {
    complete.call(observer);
  }
}
function callStart(observer, subscription) {
  const { start } = observer;
  if (typeof start === "function") {
    start.call(observer, subscription);
  }
}
function callCleanup(subscription) {
  const cleanup = subscription._cleanup;
  if (typeof cleanup === "function") {
    subscription._cleanup = void 0;
    cleanup();
  } else if (typeof cleanup === "object" && cleanup !== null) {
    subscription._cleanup = void 0;
    cleanup.unsubscribe();
  }
}
var SubscriptionObserver = class {
  constructor(subscription) {
    this._subscription = subscription;
  }
  next(value) {
    const subscription = this._subscription;
    const observer = subscription._observer;
    if (typeof observer === "undefined") {
      return;
    }
    tryCatch(callNext, observer, value);
  }
  error(errorValue) {
    const subscription = this._subscription;
    const observer = subscription._observer;
    if (typeof observer === "undefined") {
      return;
    }
    subscription._observer = void 0;
    tryCatch(callError, observer, errorValue);
    tryCatch(callCleanup, subscription);
  }
  complete() {
    const subscription = this._subscription;
    const observer = subscription._observer;
    if (typeof observer === "undefined") {
      return;
    }
    subscription._observer = void 0;
    tryCatch(callComplete, observer);
    tryCatch(callCleanup, subscription);
  }
  get closed() {
    return typeof this._subscription._observer === "undefined";
  }
  onNext(value) {
    this.next(value);
  }
  onError(errorValue) {
    this.error(errorValue);
  }
  onCompleted() {
    this.complete();
  }
  get isStopped() {
    return this.closed;
  }
};
var Subscription$1 = class {
  constructor(subscriber, observer) {
    this._observer = observer;
    tryCatch(callStart, observer, this);
    if (typeof this._observer === "undefined") {
      return;
    }
    const subscriptionObserver = new SubscriptionObserver(this);
    const subscriberResult = tryCatchResult(subscriber, subscriptionObserver);
    if (subscriberResult === symbolError) {
      subscriptionObserver.error(popError());
      return;
    }
    const cleanup = subscriberResult;
    if (cleanup === null || typeof cleanup === "undefined") {
      return;
    }
    if (typeof cleanup !== "function" && typeof cleanup !== "object") {
      throw new TypeError(
        "unexpected subscriber result type " + typeof cleanup
      );
    }
    if (typeof cleanup === "object" && typeof cleanup.unsubscribe !== "function") {
      throw new TypeError("expected unsubscribe property to be a function");
    }
    this._cleanup = cleanup;
    if (typeof this._observer === "undefined") {
      tryCatch(callCleanup, this);
    }
  }
  unsubscribe() {
    const observer = this._observer;
    if (typeof observer === "undefined") {
      return;
    }
    this._observer = void 0;
    tryCatch(callCleanup, this);
  }
  get closed() {
    return typeof this._observer === "undefined";
  }
  dispose() {
    this.unsubscribe();
  }
  get isDisposed() {
    return this.closed;
  }
};
var EsObservable;
var BaseObservable$1 = class {
  constructor(subscriber) {
    if (typeof subscriber !== "function") {
      throw new TypeError("Function expected");
    }
    this._subscriber = subscriber;
  }
  [symbolObservable]() {
    return new EsObservable(this._subscriber);
  }
  pipe(...operators) {
    return this.constructor.from(
      operators.reduce((acc, curr) => curr(acc), this[symbolObservable]())
    );
  }
  static of(...values) {
    return new this((observer) => {
      for (const value of values) {
        observer.next(value);
      }
      observer.complete();
    });
  }
  static from(input) {
    if (typeof input === "undefined" || input === null) {
      throw new TypeError();
    }
    if (typeof input === "object") {
      const observableProp = input[symbolObservable];
      if (typeof observableProp === "function") {
        const observable = observableProp.call(input);
        if (typeof observable !== "object" || observable === null) {
          throw new TypeError();
        }
        if (observable.constructor === this) {
          return observable;
        }
        if (observable instanceof BaseObservable$1) {
          return new this(observable._subscriber);
        }
        return new this((observer) => observable.subscribe(observer));
      }
      if (typeof input.subscribe === "function") {
        const classic = input;
        return new this((observer) => {
          const disposable = classic.subscribe(observer);
          return () => disposable.dispose();
        });
      }
      if (typeof input.then === "function") {
        const promiseLike = input;
        return new this((observer) => {
          promiseLike.then(
            (value) => {
              observer.next(value);
              observer.complete();
            },
            (errorValue) => {
              observer.error(errorValue);
            }
          );
        });
      }
    }
    if (typeof input[Symbol.iterator] === "function") {
      return new this((observer) => {
        for (const value of input) {
          observer.next(value);
        }
        observer.complete();
      });
    }
    throw new TypeError();
  }
  static fromClassicObservable(classic) {
    return this.from(classic);
  }
  static empty() {
    return new this((observer) => {
      observer.complete();
    });
  }
  static throw(errorValue) {
    return new this((observer) => {
      observer.error(errorValue);
    });
  }
  static defer(factory) {
    return new this((observer) => {
      const result3 = factory();
      const obs = this.from(result3);
      return new Subscription$1(obs._subscriber, observer);
    });
  }
};
EsObservable = class EsObservable2 extends BaseObservable$1 {
  subscribe(observerOrOnNext, onError4, onComplete) {
    const observer = typeof observerOrOnNext === "object" && observerOrOnNext !== null ? observerOrOnNext : {
      next: observerOrOnNext,
      error: onError4,
      complete: onComplete
    };
    return new Subscription$1(this._subscriber, observer);
  }
  [symbolObservable]() {
    return this;
  }
  static of(...values) {
    const C = typeof this === "function" ? this : EsObservable2;
    return super.of.call(C, ...values);
  }
  static from(input) {
    const C = typeof this === "function" ? this : EsObservable2;
    return super.from.call(C, input);
  }
};
var esObservable = {
  BaseObservable: BaseObservable$1,
  Observable: EsObservable,
  Subscription: Subscription$1
};
var { BaseObservable, Subscription } = esObservable;
var EsFromClassicObserver = class {
  constructor(observer) {
    this._observer = observer;
  }
  next(value) {
    const observer = this._observer;
    const { onNext: onNext2 } = observer;
    if (typeof onNext2 === "function") {
      onNext2.call(observer, value);
    }
  }
  error(errorValue) {
    const observer = this._observer;
    const { onError: onError4 } = observer;
    if (typeof onError4 === "function") {
      onError4.call(observer, errorValue);
    }
  }
  complete() {
    const observer = this._observer;
    const { onCompleted: onCompleted2 } = observer;
    if (typeof onCompleted2 === "function") {
      onCompleted2.call(observer);
    }
  }
};
var ClassicObservable = class extends BaseObservable {
  subscribe(observerOrOnNext, onError4, onCompleted2) {
    const observer = typeof observerOrOnNext === "object" && observerOrOnNext !== null ? new EsFromClassicObserver(observerOrOnNext) : {
      next: observerOrOnNext,
      error: onError4,
      complete: onCompleted2
    };
    return new Subscription(this._subscriber, observer);
  }
  static create(subscriber) {
    const C = typeof this === "function" ? this : ClassicObservable;
    if (typeof subscriber !== "function") {
      throw new TypeError("Function expected");
    }
    return new C((observer) => {
      const cleanup = subscriber(observer);
      if (typeof cleanup !== "object" || cleanup === null) {
        return cleanup;
      }
      if (typeof cleanup.dispose === "function") {
        return () => {
          cleanup.dispose();
        };
      }
      return { unsubscribe: cleanup.dispose };
    });
  }
};
var classicObservable = { Observable: ClassicObservable };
var Observable = classicObservable.Observable;

// ../../atreyu/app/src/store/service-worker-source.js
var ServiceWorkerSource = class {
  constructor({ wake }) {
    this._inflight = {};
    this._id = 0;
    const init2 = () => {
      this._worker = navigator.serviceWorker.controller;
      this._worker?.postMessage(JSON.stringify([-1, "hello mike"]));
    };
    if (!this._worker) {
      init2();
    }
    navigator.serviceWorker.addEventListener("message", (e) => {
      if (e.data.startsWith("navigate:")) {
        return;
      }
      if (!this._worker) {
        init2();
      }
      const { id, error: error3, value, done, hello } = JSON.parse(e.data);
      if (hello) {
        setTimeout(() => {
          Object.values(this._inflight).forEach((stale) => stale("service worker restarted..."));
        }, 800);
      } else if (typeof this._inflight[id] === "function") {
        this._inflight[id](error3, value, done);
      } else {
        console.log(e.data);
      }
    });
    if (wake) {
      this._waker = setInterval(() => {
        this._worker?.postMessage(JSON.stringify([-1, "waky waky"]));
      }, wake);
    }
  }
  get(paths2) {
    return this._getResponse(["get", paths2]);
  }
  set(jsonGraphEnvelope) {
    return this._getResponse(["set", jsonGraphEnvelope]);
  }
  call(callPath, args, pathSuffixes, paths2) {
    return this._getResponse(["call", callPath, args, pathSuffixes, paths2]);
  }
  _getResponse(action) {
    const { _worker, _inflight } = this;
    const id = this._id++;
    return Observable.create((subscriber) => {
      _inflight[id] = (error3, value, done) => {
        if (error3) {
          subscriber.onError(error3);
        } else if (done) {
          subscriber.onCompleted();
        } else {
          subscriber.onNext(value);
        }
      };
      _worker.postMessage(JSON.stringify([id, ...action]));
      return () => {
        delete _inflight[id];
      };
    });
  }
};
var service_worker_source_default = ServiceWorkerSource;

// ../../atreyu/app/src/store/data.js
var _undefined = Symbol("undefined");
var frameScheduler = class {
  schedule(action) {
    let id = requestAnimationFrame(action);
    return {
      dispose: () => {
        if (id) {
          cancelAnimationFrame(id);
          id = null;
        }
      }
    };
  }
  scheduleWithState(state, action) {
    let id = requestAnimationFrame(() => {
      action(this, state);
    });
    return {
      dispose: () => {
        if (id) {
          cancelAnimationFrame(id);
          id = null;
        }
      }
    };
  }
};
function makeDataStore({ source, maxSize, collectRatio, maxRetries, cache, onChange, errorSelector: errorSelector2, onAccess, changeHandler }) {
  if (typeof source === "undefined") {
    source = new service_worker_source_default({ wake: 2e4 });
  }
  const model = lib({
    source: source || void 0,
    maxSize: maxSize || 5e5,
    collectRatio: collectRatio || 0.75,
    maxRetries: maxRetries || 1,
    cache,
    scheduler: frameScheduler,
    onChange: () => {
      if (changeHandler) {
        changeHandler();
      }
      if (onChange) {
        onChange();
      }
    },
    errorSelector: function(x, y) {
      if (errorSelector2) {
        errorSelector2(x, y);
      } else {
        console.error(x, y);
      }
      return y;
    }
  }).batch(new frameScheduler()).treatErrorsAsValues();
  const boxedModel = model.boxValues();
  const cacheMap = /* @__PURE__ */ new Map();
  let latestTick = 0;
  const lastUpdt = /* @__PURE__ */ new Map();
  let ticker = null;
  const deps = {};
  const delims = [
    "$",
    "$value",
    "$not",
    "$loading",
    "$promise",
    "$$",
    "$$unbox",
    "$$unbatch",
    "$error",
    "$rev",
    "$ref",
    "$version",
    "$schema",
    "$timestamp",
    "$expires",
    "$size",
    "$type"
  ];
  const makeAyuProxy = (id, subModel) => makeProxy({
    id,
    from: () => {
    },
    get: (path, subVal, delim, id2) => {
      if (!path[path.length - 1]) {
        path.pop();
      }
      path = subModel ? [...subModel.getPath(), ...path] : path;
      const name = path[path.length - 1];
      if (name === "length") {
        if (typeof subVal === "number" && subVal > 0) {
          return subVal;
        }
      }
      let boxKey = "";
      if (delim && !delims.includes(delim)) {
        boxKey = delim;
      }
      const pathString2 = path.join(".") + boxKey;
      if (!deps[id2]) {
        deps[id2] = /* @__PURE__ */ new Map();
      }
      if (!deps[id2].has(pathString2)) {
        deps[id2].set(pathString2, { path });
      }
      let adjustedModel;
      if (boxKey !== "") {
        adjustedModel = subModel ? subModel.boxValues() : boxedModel;
        path = path.concat(boxKey);
      } else {
        adjustedModel = subModel || model;
      }
      if (onAccess) {
        onAccess(path);
      }
      const falcorCacheVal = extractFromCache(adjustedModel._root.cache, path);
      let cacheVal;
      let existingProm;
      if (typeof falcorCacheVal !== "undefined") {
        cacheVal = falcorCacheVal;
      } else {
        [cacheVal, existingProm] = cacheMap.get(pathString2) || [];
      }
      if (!ticker) {
        ++latestTick;
        ticker = requestAnimationFrame(() => {
          ++latestTick;
          ticker = null;
          if (cacheMap.size > 7e5) {
            console.info("clearing data store cache");
            cacheMap.clear();
          }
        });
      }
      let newProm;
      if (latestTick !== lastUpdt.get(pathString2)) {
        lastUpdt.set(pathString2, latestTick);
        newProm = adjustedModel.getValue(path).then((val) => {
          if (typeof val === "undefined") {
            cacheMap.set(pathString2, [_undefined]);
          } else {
            cacheMap.set(pathString2, [val]);
          }
          return val;
        }).catch((err) => {
          return new Promise((_resolve, reject) => reject({
            message: "failed falcor get",
            path,
            err
          }));
        });
        cacheMap.set(pathString2, [cacheVal, newProm]);
      }
      let loadingFirstValue = true;
      let value;
      if (typeof cacheVal !== "undefined") {
        if (cacheVal === _undefined) {
          value = void 0;
          loadingFirstValue = false;
        } else {
          value = cacheVal;
          loadingFirstValue = false;
        }
      }
      if (delim === "$promise") {
        if (newProm) {
          return newProm;
        } else if (existingProm) {
          return existingProm;
        } else {
          return Promise.resolve(value);
        }
      } else if (delim === "$loading") {
        return loadingFirstValue;
      } else if (delim === "$not") {
        return loadingFirstValue ? { toString: () => {
          "";
        } } : !value;
      } else {
        if (value?.$type === "atom") {
          console.warn("Missing data in ayu data store at:", path);
          return "";
        }
        return loadingFirstValue ? "" : value;
      }
    },
    set: (path, newValue, delim, _id) => {
      if (!path[path.length - 1]) {
        path.pop();
      }
      path = subModel ? [...subModel.getPath(), ...path] : path;
      let boxKey = "";
      if (delim && !delims.includes(delim)) {
        boxKey = delim;
      }
      let adjustedModel;
      if (boxKey !== "") {
        adjustedModel = subModel ? subModel.boxValues() : boxedModel;
        path = path.concat(boxKey);
      } else {
        adjustedModel = subModel || model;
      }
      adjustedModel.setValue(path, newValue).then(() => {
      }).catch((err) => console.error(err));
      return true;
    },
    call: (path, args, _delim, _id) => {
      return (subModel || model).call(path, args);
    },
    delims
  });
  const runQueue = /* @__PURE__ */ new Set();
  const subscribers = /* @__PURE__ */ new Set();
  function update2(_changes) {
    if (subscribers.size > 0) {
      const queueOpener = !runQueue.size;
      subscribers.forEach(([run2, invalidate2, subscriptionProxy, id]) => {
        let changed = false;
        if (!deps[id]) {
          changed = true;
        } else {
          for (const [pathString2, { lastVer, path }] of deps[id]) {
            const newVer = model.getVersion(path);
            if (newVer === -1 || !lastVer || lastVer !== newVer) {
              deps[id].set(pathString2, { path, lastVer: newVer });
              changed = true;
            }
          }
        }
        if (changed) {
          invalidate2();
          runQueue.add([run2, subscriptionProxy]);
        }
      });
      if (queueOpener) {
        runQueue.forEach(([run2, subscriptionProxy]) => {
          run2(subscriptionProxy);
        });
        runQueue.clear();
      }
    }
  }
  let subscrCounter = 0;
  function subscribe3(run2, invalidate2, subModel) {
    const id = `${subscribers.size}_${subscrCounter++}`;
    const subscriptionProxy = makeAyuProxy(id, subModel);
    const doRun = (..._args) => {
      return run2(..._args);
    };
    const doInvalidate = (..._args) => {
      if (invalidate2) {
        return invalidate2(..._args);
      }
    };
    const subscriber = [doRun, doInvalidate, subscriptionProxy, id];
    subscribers.add(subscriber);
    run2(subscriptionProxy);
    return () => {
      delete deps[id];
      return subscribers.delete(subscriber);
    };
  }
  changeHandler = (changes) => {
    update2(changes);
  };
  return {
    deref: (paths2) => {
      return paths2.map((path) => {
        const subModel = model.deref({ "$__path": path });
        return {
          subscribe: (run2, invalidate2) => {
            return subscribe3(run2, invalidate2, subModel);
          },
          set: () => {
          },
          falcor: subModel
        };
      });
    },
    subscribe: subscribe3,
    set: () => {
    },
    falcor: model,
    deps
  };
}
var data_default = makeDataStore({});

// ../../atreyu/app/build/deps/svelte-store.js
function noop4() {
}
function safe_not_equal2(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
Promise.resolve();
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop4) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set4(new_value) {
    if (safe_not_equal2(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set4(fn(value));
  }
  function subscribe3(run2, invalidate2 = noop4) {
    const subscriber = [run2, invalidate2];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set4) || noop4;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set: set4, update: update2, subscribe: subscribe3 };
}

// ../../atreyu/app/build/deps/util.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var compiledGrammar = {};
(function(exports2) {
  var parser4 = function() {
    var o = function(k, v, o2, l) {
      for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
        ;
      return o2;
    }, $V0 = [1, 9], $V1 = [1, 10], $V2 = [1, 11], $V3 = [1, 12], $V4 = [5, 11, 12, 13, 14, 15];
    var parser5 = {
      trace: function trace() {
      },
      yy: {},
      symbols_: { "error": 2, "root": 3, "expressions": 4, "EOF": 5, "expression": 6, "optional": 7, "literal": 8, "splat": 9, "param": 10, "(": 11, ")": 12, "LITERAL": 13, "SPLAT": 14, "PARAM": 15, "$accept": 0, "$end": 1 },
      terminals_: { 2: "error", 5: "EOF", 11: "(", 12: ")", 13: "LITERAL", 14: "SPLAT", 15: "PARAM" },
      productions_: [0, [3, 2], [3, 1], [4, 2], [4, 1], [6, 1], [6, 1], [6, 1], [6, 1], [7, 3], [8, 1], [9, 1], [10, 1]],
      performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
        var $0 = $$.length - 1;
        switch (yystate) {
          case 1:
            return new yy.Root({}, [$$[$0 - 1]]);
          case 2:
            return new yy.Root({}, [new yy.Literal({ value: "" })]);
          case 3:
            this.$ = new yy.Concat({}, [$$[$0 - 1], $$[$0]]);
            break;
          case 4:
          case 5:
            this.$ = $$[$0];
            break;
          case 6:
            this.$ = new yy.Literal({ value: $$[$0] });
            break;
          case 7:
            this.$ = new yy.Splat({ name: $$[$0] });
            break;
          case 8:
            this.$ = new yy.Param({ name: $$[$0] });
            break;
          case 9:
            this.$ = new yy.Optional({}, [$$[$0 - 1]]);
            break;
          case 10:
            this.$ = yytext;
            break;
          case 11:
          case 12:
            this.$ = yytext.slice(1);
            break;
        }
      },
      table: [{ 3: 1, 4: 2, 5: [1, 3], 6: 4, 7: 5, 8: 6, 9: 7, 10: 8, 11: $V0, 13: $V1, 14: $V2, 15: $V3 }, { 1: [3] }, { 5: [1, 13], 6: 14, 7: 5, 8: 6, 9: 7, 10: 8, 11: $V0, 13: $V1, 14: $V2, 15: $V3 }, { 1: [2, 2] }, o($V4, [2, 4]), o($V4, [2, 5]), o($V4, [2, 6]), o($V4, [2, 7]), o($V4, [2, 8]), { 4: 15, 6: 4, 7: 5, 8: 6, 9: 7, 10: 8, 11: $V0, 13: $V1, 14: $V2, 15: $V3 }, o($V4, [2, 10]), o($V4, [2, 11]), o($V4, [2, 12]), { 1: [2, 1] }, o($V4, [2, 3]), { 6: 14, 7: 5, 8: 6, 9: 7, 10: 8, 11: $V0, 12: [1, 16], 13: $V1, 14: $V2, 15: $V3 }, o($V4, [2, 9])],
      defaultActions: { 3: [2, 2], 13: [2, 1] },
      parseError: function parseError(str, hash) {
        if (hash.recoverable) {
          this.trace(str);
        } else {
          let _parseError = function(msg, hash2) {
            this.message = msg;
            this.hash = hash2;
          };
          _parseError.prototype = Error;
          throw new _parseError(str, hash);
        }
      },
      parse: function parse(input) {
        var self2 = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, TERROR = 2, EOF = 1;
        var args = lstack.slice.call(arguments, 1);
        var lexer2 = Object.create(this.lexer);
        var sharedState = { yy: {} };
        for (var k in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
          }
        }
        lexer2.setInput(input, sharedState.yy);
        sharedState.yy.lexer = lexer2;
        sharedState.yy.parser = this;
        if (typeof lexer2.yylloc == "undefined") {
          lexer2.yylloc = {};
        }
        var yyloc = lexer2.yylloc;
        lstack.push(yyloc);
        var ranges = lexer2.options && lexer2.options.ranges;
        if (typeof sharedState.yy.parseError === "function") {
          this.parseError = sharedState.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        var lex = function() {
          var token;
          token = lexer2.lex() || EOF;
          if (typeof token !== "number") {
            token = self2.symbols_[token] || token;
          }
          return token;
        };
        var symbol, state, action, r, yyval = {}, p, len, newState, expected;
        while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
            action = this.defaultActions[state];
          } else {
            if (symbol === null || typeof symbol == "undefined") {
              symbol = lex();
            }
            action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            expected = [];
            for (p in table[state]) {
              if (this.terminals_[p] && p > TERROR) {
                expected.push("'" + this.terminals_[p] + "'");
              }
            }
            if (lexer2.showPosition) {
              errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
            } else {
              errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
            }
            this.parseError(errStr, {
              text: lexer2.match,
              token: this.terminals_[symbol] || symbol,
              line: lexer2.yylineno,
              loc: yyloc,
              expected
            });
          }
          if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
            case 1:
              stack.push(symbol);
              vstack.push(lexer2.yytext);
              lstack.push(lexer2.yylloc);
              stack.push(action[1]);
              symbol = null;
              {
                yyleng = lexer2.yyleng;
                yytext = lexer2.yytext;
                yylineno = lexer2.yylineno;
                yyloc = lexer2.yylloc;
              }
              break;
            case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
              };
              if (ranges) {
                yyval._$.range = [
                  lstack[lstack.length - (len || 1)].range[0],
                  lstack[lstack.length - 1].range[1]
                ];
              }
              r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
              ].concat(args));
              if (typeof r !== "undefined") {
                return r;
              }
              if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }
    };
    var lexer = function() {
      var lexer2 = {
        EOF: 1,
        parseError: function parseError(str, hash) {
          if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
          } else {
            throw new Error(str);
          }
        },
        setInput: function(input, yy) {
          this.yy = yy || this.yy || {};
          this._input = input;
          this._more = this._backtrack = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = "";
          this.conditionStack = ["INITIAL"];
          this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          };
          if (this.options.ranges) {
            this.yylloc.range = [0, 0];
          }
          this.offset = 0;
          return this;
        },
        input: function() {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
          } else {
            this.yylloc.last_column++;
          }
          if (this.options.ranges) {
            this.yylloc.range[1]++;
          }
          this._input = this._input.slice(1);
          return ch;
        },
        unput: function(ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);
          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length - len);
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
          }
          var r = this.yylloc.range;
          this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
          };
          if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          this.yyleng = this.yytext.length;
          return this;
        },
        more: function() {
          this._more = true;
          return this;
        },
        reject: function() {
          if (this.options.backtrack_lexer) {
            this._backtrack = true;
          } else {
            return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          }
          return this;
        },
        less: function(n) {
          this.unput(this.match.slice(n));
        },
        pastInput: function() {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
        },
        upcomingInput: function() {
          var next = this.match;
          if (next.length < 20) {
            next += this._input.substr(0, 20 - next.length);
          }
          return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
        },
        showPosition: function() {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c + "^";
        },
        test_match: function(match, indexed_rule) {
          var token, lines, backup;
          if (this.options.backtrack_lexer) {
            backup = {
              yylineno: this.yylineno,
              yylloc: {
                first_line: this.yylloc.first_line,
                last_line: this.last_line,
                first_column: this.yylloc.first_column,
                last_column: this.yylloc.last_column
              },
              yytext: this.yytext,
              match: this.match,
              matches: this.matches,
              matched: this.matched,
              yyleng: this.yyleng,
              offset: this.offset,
              _more: this._more,
              _input: this._input,
              yy: this.yy,
              conditionStack: this.conditionStack.slice(0),
              done: this.done
            };
            if (this.options.ranges) {
              backup.yylloc.range = this.yylloc.range.slice(0);
            }
          }
          lines = match[0].match(/(?:\r\n?|\n).*/g);
          if (lines) {
            this.yylineno += lines.length;
          }
          this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
          };
          this.yytext += match[0];
          this.match += match[0];
          this.matches = match;
          this.yyleng = this.yytext.length;
          if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
          }
          this._more = false;
          this._backtrack = false;
          this._input = this._input.slice(match[0].length);
          this.matched += match[0];
          token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
          if (this.done && this._input) {
            this.done = false;
          }
          if (token) {
            return token;
          } else if (this._backtrack) {
            for (var k in backup) {
              this[k] = backup[k];
            }
            return false;
          }
          return false;
        },
        next: function() {
          if (this.done) {
            return this.EOF;
          }
          if (!this._input) {
            this.done = true;
          }
          var token, match, tempMatch, index;
          if (!this._more) {
            this.yytext = "";
            this.match = "";
          }
          var rules = this._currentRules();
          for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
              match = tempMatch;
              index = i;
              if (this.options.backtrack_lexer) {
                token = this.test_match(tempMatch, rules[i]);
                if (token !== false) {
                  return token;
                } else if (this._backtrack) {
                  match = false;
                  continue;
                } else {
                  return false;
                }
              } else if (!this.options.flex) {
                break;
              }
            }
          }
          if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
              return token;
            }
            return false;
          }
          if (this._input === "") {
            return this.EOF;
          } else {
            return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          }
        },
        lex: function lex() {
          var r = this.next();
          if (r) {
            return r;
          } else {
            return this.lex();
          }
        },
        begin: function begin(condition) {
          this.conditionStack.push(condition);
        },
        popState: function popState() {
          var n = this.conditionStack.length - 1;
          if (n > 0) {
            return this.conditionStack.pop();
          } else {
            return this.conditionStack[0];
          }
        },
        _currentRules: function _currentRules() {
          if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          } else {
            return this.conditions["INITIAL"].rules;
          }
        },
        topState: function topState(n) {
          n = this.conditionStack.length - 1 - Math.abs(n || 0);
          if (n >= 0) {
            return this.conditionStack[n];
          } else {
            return "INITIAL";
          }
        },
        pushState: function pushState(condition) {
          this.begin(condition);
        },
        stateStackSize: function stateStackSize() {
          return this.conditionStack.length;
        },
        options: {},
        performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
          switch ($avoiding_name_collisions) {
            case 0:
              return "(";
            case 1:
              return ")";
            case 2:
              return "SPLAT";
            case 3:
              return "PARAM";
            case 4:
              return "LITERAL";
            case 5:
              return "LITERAL";
            case 6:
              return "EOF";
          }
        },
        rules: [/^(?:\()/, /^(?:\))/, /^(?:\*+\w+)/, /^(?::+\w+)/, /^(?:[\w%\-~\n]+)/, /^(?:.)/, /^(?:$)/],
        conditions: { "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 6], "inclusive": true } }
      };
      return lexer2;
    }();
    parser5.lexer = lexer;
    function Parser2() {
      this.yy = {};
    }
    Parser2.prototype = parser5;
    parser5.Parser = Parser2;
    return new Parser2();
  }();
  if (typeof commonjsRequire !== "undefined" && true) {
    exports2.parser = parser4;
    exports2.Parser = parser4.Parser;
    exports2.parse = function() {
      return parser4.parse.apply(parser4, arguments);
    };
  }
})(compiledGrammar);
function createNode(displayName) {
  return function(props, children2) {
    return {
      displayName,
      props,
      children: children2 || []
    };
  };
}
var nodes = {
  Root: createNode("Root"),
  Concat: createNode("Concat"),
  Literal: createNode("Literal"),
  Splat: createNode("Splat"),
  Param: createNode("Param"),
  Optional: createNode("Optional")
};
var parser3 = compiledGrammar.parser;
parser3.yy = nodes;
var parser_1 = parser3;
var nodeTypes = Object.keys(nodes);
function createVisitor$2(handlers) {
  nodeTypes.forEach(function(nodeType) {
    if (typeof handlers[nodeType] === "undefined") {
      throw new Error("No handler defined for " + nodeType.displayName);
    }
  });
  return {
    visit: function(node, context) {
      return this.handlers[node.displayName].call(this, node, context);
    },
    handlers
  };
}
var create_visitor = createVisitor$2;
var createVisitor$1 = create_visitor;
var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
function Matcher(options) {
  this.captures = options.captures;
  this.re = options.re;
}
Matcher.prototype.match = function(path) {
  var match = this.re.exec(path), matchParams = {};
  if (!match) {
    return;
  }
  this.captures.forEach(function(capture, i) {
    if (typeof match[i + 1] === "undefined") {
      matchParams[capture] = void 0;
    } else {
      matchParams[capture] = decodeURIComponent(match[i + 1]);
    }
  });
  return matchParams;
};
var RegexpVisitor$1 = createVisitor$1({
  "Concat": function(node) {
    return node.children.reduce(
      function(memo, child) {
        var childResult = this.visit(child);
        return {
          re: memo.re + childResult.re,
          captures: memo.captures.concat(childResult.captures)
        };
      }.bind(this),
      { re: "", captures: [] }
    );
  },
  "Literal": function(node) {
    return {
      re: node.props.value.replace(escapeRegExp, "\\$&"),
      captures: []
    };
  },
  "Splat": function(node) {
    return {
      re: "([^?]*?)",
      captures: [node.props.name]
    };
  },
  "Param": function(node) {
    return {
      re: "([^\\/\\?]+)",
      captures: [node.props.name]
    };
  },
  "Optional": function(node) {
    var child = this.visit(node.children[0]);
    return {
      re: "(?:" + child.re + ")?",
      captures: child.captures
    };
  },
  "Root": function(node) {
    var childResult = this.visit(node.children[0]);
    return new Matcher({
      re: new RegExp("^" + childResult.re + "(?=\\?|$)"),
      captures: childResult.captures
    });
  }
});
var regexp = RegexpVisitor$1;
var createVisitor = create_visitor;
var ReverseVisitor$1 = createVisitor({
  "Concat": function(node, context) {
    var childResults = node.children.map(function(child) {
      return this.visit(child, context);
    }.bind(this));
    if (childResults.some(function(c) {
      return c === false;
    })) {
      return false;
    } else {
      return childResults.join("");
    }
  },
  "Literal": function(node) {
    return decodeURI(node.props.value);
  },
  "Splat": function(node, context) {
    if (context[node.props.name]) {
      return context[node.props.name];
    } else {
      return false;
    }
  },
  "Param": function(node, context) {
    if (context[node.props.name]) {
      return context[node.props.name];
    } else {
      return false;
    }
  },
  "Optional": function(node, context) {
    var childResult = this.visit(node.children[0], context);
    if (childResult) {
      return childResult;
    } else {
      return "";
    }
  },
  "Root": function(node, context) {
    context = context || {};
    var childResult = this.visit(node.children[0], context);
    if (!childResult) {
      return false;
    }
    return encodeURI(childResult);
  }
});
var reverse = ReverseVisitor$1;
var Parser = parser_1;
var RegexpVisitor = regexp;
var ReverseVisitor = reverse;
Route$1.prototype = /* @__PURE__ */ Object.create(null);
Route$1.prototype.match = function(path) {
  var re = RegexpVisitor.visit(this.ast), matched = re.match(path);
  return matched ? matched : false;
};
Route$1.prototype.reverse = function(params) {
  return ReverseVisitor.visit(this.ast, params);
};
function Route$1(spec) {
  var route2;
  if (this) {
    route2 = this;
  } else {
    route2 = Object.create(Route$1.prototype);
  }
  if (typeof spec === "undefined") {
    throw new Error("A route spec is required");
  }
  route2.spec = spec;
  route2.ast = Parser.parse(spec);
  return route2;
}
var route = Route$1;
var Route = route;
var routeParser = Route;
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$4(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$4;
var eq$3 = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$3(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice2 = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index = assocIndexOf$3(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice2.call(data, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index = assocIndexOf$2(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear;
var listCacheDelete = _listCacheDelete;
var listCacheGet = _listCacheGet;
var listCacheHas = _listCacheHas;
var listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var ListCache$3 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$3();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data = this.__data__, result3 = data["delete"](key);
  this.size = data.size;
  return result3;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$4 = freeGlobal || freeSelf || Function("return this")();
var _root = root$4;
var root$3 = _root;
var Symbol$2 = root$3.Symbol;
var _Symbol = Symbol$2;
var Symbol$1 = _Symbol;
var objectProto$a = Object.prototype;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
var nativeObjectToString$1 = objectProto$a.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$8.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result3 = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result3;
}
var _getRawTag = getRawTag$1;
var objectProto$9 = Object.prototype;
var nativeObjectToString = objectProto$9.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol2 = _Symbol;
var getRawTag = _getRawTag;
var objectToString = _objectToString;
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
function baseGetTag$4(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$4;
function isObject$72(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$72;
var baseGetTag$3 = _baseGetTag;
var isObject$62 = isObject_1;
var asyncTag = "[object AsyncFunction]";
var funcTag$1 = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction$32(value) {
  if (!isObject$62(value)) {
    return false;
  }
  var tag = baseGetTag$3(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$32;
var root$2 = _root;
var coreJsData$1 = root$2["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$1;
var isFunction$22 = isFunction_1;
var isMasked = _isMasked;
var isObject$52 = isObject_1;
var toSource = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype;
var objectProto$8 = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$7).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative$1(value) {
  if (!isObject$52(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$22(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative;
var getValue2 = _getValue;
function getNative$3(object, key) {
  var value = getValue2(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$3;
var getNative$2 = _getNative;
var root$1 = _root;
var Map$2 = getNative$2(root$1, "Map");
var _Map = Map$2;
var getNative$1 = _getNative;
var nativeCreate$4 = getNative$1(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result3 = this.has(key) && delete this.__data__[key];
  this.size -= result3 ? 1 : 0;
  return result3;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result3 = data[key];
    return result3 === HASH_UNDEFINED$1 ? void 0 : result3;
  }
  return hasOwnProperty$6.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$5.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear;
var hashDelete = _hashDelete;
var hashGet = _hashGet;
var hashHas = _hashHas;
var hashSet = _hashSet;
function Hash$1(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
var Hash = _Hash;
var ListCache$2 = _ListCache;
var Map$1 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache$2)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result3 = getMapData$3(this, key)["delete"](key);
  this.size -= result3 ? 1 : 0;
  return result3;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear;
var mapCacheDelete = _mapCacheDelete;
var mapCacheGet = _mapCacheGet;
var mapCacheHas = _mapCacheHas;
var mapCacheSet = _mapCacheSet;
function MapCache$1(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype["delete"] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;
var _MapCache = MapCache$1;
var ListCache$1 = _ListCache;
var Map2 = _Map;
var MapCache = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache;
var stackClear = _stackClear;
var stackDelete = _stackDelete;
var stackGet = _stackGet;
var stackHas = _stackHas;
var stackSet = _stackSet;
function Stack$1(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$1.prototype.clear = stackClear;
Stack$1.prototype["delete"] = stackDelete;
Stack$1.prototype.get = stackGet;
Stack$1.prototype.has = stackHas;
Stack$1.prototype.set = stackSet;
var _Stack = Stack$1;
var getNative = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$2;
var defineProperty$1 = _defineProperty;
function baseAssignValue$3(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$3;
var baseAssignValue$2 = _baseAssignValue;
var eq$2 = eq_1;
function assignMergeValue$2(object, key, value) {
  if (value !== void 0 && !eq$2(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue$2(object, key, value);
  }
}
var _assignMergeValue = assignMergeValue$2;
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$1 = createBaseFor();
var _baseFor = baseFor$1;
var _cloneBuffer = { exports: {} };
(function(module2, exports2) {
  var root5 = _root;
  var freeExports4 = exports2 && !exports2.nodeType && exports2;
  var freeModule4 = freeExports4 && true && module2 && !module2.nodeType && module2;
  var moduleExports4 = freeModule4 && freeModule4.exports === freeExports4;
  var Buffer4 = moduleExports4 ? root5.Buffer : void 0, allocUnsafe2 = Buffer4 ? Buffer4.allocUnsafe : void 0;
  function cloneBuffer3(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result3 = allocUnsafe2 ? allocUnsafe2(length) : new buffer.constructor(length);
    buffer.copy(result3);
    return result3;
  }
  module2.exports = cloneBuffer3;
})(_cloneBuffer, _cloneBuffer.exports);
var root3 = _root;
var Uint8Array$1 = root3.Uint8Array;
var _Uint8Array = Uint8Array$1;
var Uint8Array2 = _Uint8Array;
function cloneArrayBuffer$1(arrayBuffer) {
  var result3 = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array2(result3).set(new Uint8Array2(arrayBuffer));
  return result3;
}
var _cloneArrayBuffer = cloneArrayBuffer$1;
var cloneArrayBuffer = _cloneArrayBuffer;
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$1;
function copyArray$1(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var _copyArray = copyArray$1;
var isObject$42 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$42(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result3 = new object();
    object.prototype = void 0;
    return result3;
  };
}();
var _baseCreate = baseCreate$1;
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$1;
var overArg = _overArg;
var getPrototype$2 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$2;
var objectProto$5 = Object.prototype;
function isPrototype$2(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$5;
  return value === proto;
}
var _isPrototype = isPrototype$2;
var baseCreate = _baseCreate;
var getPrototype$1 = _getPrototype;
var isPrototype$1 = _isPrototype;
function initCloneObject$1(object) {
  return typeof object.constructor == "function" && !isPrototype$1(object) ? baseCreate(getPrototype$1(object)) : {};
}
var _initCloneObject = initCloneObject$1;
function isObjectLike$5(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$5;
var baseGetTag$2 = _baseGetTag;
var isObjectLike$4 = isObjectLike_1;
var argsTag$1 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$4(value) && baseGetTag$2(value) == argsTag$1;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments;
var isObjectLike$3 = isObjectLike_1;
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;
var isArguments$2 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$3(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_1 = isArguments$2;
var isArray$22 = Array.isArray;
var isArray_1 = isArray$22;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength$2(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_1 = isLength$2;
var isFunction$12 = isFunction_1;
var isLength$1 = isLength_1;
function isArrayLike$3(value) {
  return value != null && isLength$1(value.length) && !isFunction$12(value);
}
var isArrayLike_1 = isArrayLike$3;
var isArrayLike$2 = isArrayLike_1;
var isObjectLike$2 = isObjectLike_1;
function isArrayLikeObject$1(value) {
  return isObjectLike$2(value) && isArrayLike$2(value);
}
var isArrayLikeObject_1 = isArrayLikeObject$1;
var isBuffer$2 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module2, exports2) {
  var root5 = _root, stubFalse3 = stubFalse_1;
  var freeExports4 = exports2 && !exports2.nodeType && exports2;
  var freeModule4 = freeExports4 && true && module2 && !module2.nodeType && module2;
  var moduleExports4 = freeModule4 && freeModule4.exports === freeExports4;
  var Buffer4 = moduleExports4 ? root5.Buffer : void 0;
  var nativeIsBuffer2 = Buffer4 ? Buffer4.isBuffer : void 0;
  var isBuffer3 = nativeIsBuffer2 || stubFalse3;
  module2.exports = isBuffer3;
})(isBuffer$2, isBuffer$2.exports);
var baseGetTag$1 = _baseGetTag;
var getPrototype = _getPrototype;
var isObjectLike$1 = isObjectLike_1;
var objectTag$1 = "[object Object]";
var funcProto = Function.prototype;
var objectProto$3 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$1(value) {
  if (!isObjectLike$1(value) || baseGetTag$1(value) != objectTag$1) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$3.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject$1;
var baseGetTag = _baseGetTag;
var isLength = isLength_1;
var isObjectLike = isObjectLike_1;
var argsTag = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag = "[object Function]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;
var _nodeUtil = { exports: {} };
(function(module2, exports2) {
  var freeGlobal3 = _freeGlobal;
  var freeExports4 = exports2 && !exports2.nodeType && exports2;
  var freeModule4 = freeExports4 && true && module2 && !module2.nodeType && module2;
  var moduleExports4 = freeModule4 && freeModule4.exports === freeExports4;
  var freeProcess2 = moduleExports4 && freeGlobal3.process;
  var nodeUtil3 = function() {
    try {
      var types = freeModule4 && freeModule4.require && freeModule4.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess2 && freeProcess2.binding && freeProcess2.binding("util");
    } catch (e) {
    }
  }();
  module2.exports = nodeUtil3;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray = _baseIsTypedArray;
var baseUnary = _baseUnary;
var nodeUtil = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$2;
function safeGet$2(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var _safeGet = safeGet$2;
var baseAssignValue$1 = _baseAssignValue;
var eq$1 = eq_1;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function assignValue$1(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$2.call(object, key) && eq$1(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignValue = assignValue$1;
var assignValue = _assignValue;
var baseAssignValue = _baseAssignValue;
function copyObject$1(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$1;
function baseTimes$1(n, iteratee) {
  var index = -1, result3 = Array(n);
  while (++index < n) {
    result3[index] = iteratee(index);
  }
  return result3;
}
var _baseTimes = baseTimes$1;
var MAX_SAFE_INTEGER2 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER2 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$2;
var baseTimes = _baseTimes;
var isArguments$1 = isArguments_1;
var isArray$12 = isArray_1;
var isBuffer$1 = isBuffer$2.exports;
var isIndex$1 = _isIndex;
var isTypedArray$1 = isTypedArray_1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$12(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result3 = skipIndexes ? baseTimes(value.length, String) : [], length = result3.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex$1(key, length)))) {
      result3.push(key);
    }
  }
  return result3;
}
var _arrayLikeKeys = arrayLikeKeys$1;
function nativeKeysIn$1(object) {
  var result3 = [];
  if (object != null) {
    for (var key in Object(object)) {
      result3.push(key);
    }
  }
  return result3;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$32 = isObject_1;
var isPrototype = _isPrototype;
var nativeKeysIn = _nativeKeysIn;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$32(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result3 = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
      result3.push(key);
    }
  }
  return result3;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys;
var baseKeysIn = _baseKeysIn;
var isArrayLike$1 = isArrayLike_1;
function keysIn$2(object) {
  return isArrayLike$1(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$2;
var copyObject = _copyObject;
var keysIn$1 = keysIn_1;
function toPlainObject$1(value) {
  return copyObject(value, keysIn$1(value));
}
var toPlainObject_1 = toPlainObject$1;
var assignMergeValue$1 = _assignMergeValue;
var cloneBuffer = _cloneBuffer.exports;
var cloneTypedArray = _cloneTypedArray;
var copyArray = _copyArray;
var initCloneObject = _initCloneObject;
var isArguments = isArguments_1;
var isArray2 = isArray_1;
var isArrayLikeObject = isArrayLikeObject_1;
var isBuffer = isBuffer$2.exports;
var isFunction3 = isFunction_1;
var isObject$22 = isObject_1;
var isPlainObject = isPlainObject_1;
var isTypedArray = isTypedArray_1;
var safeGet$1 = _safeGet;
var toPlainObject = toPlainObject_1;
function baseMergeDeep$1(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet$1(object, key), srcValue = safeGet$1(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue$1(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray2(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject$22(objValue) || isFunction3(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue$1(object, key, newValue);
}
var _baseMergeDeep = baseMergeDeep$1;
var Stack = _Stack;
var assignMergeValue = _assignMergeValue;
var baseFor = _baseFor;
var baseMergeDeep = _baseMergeDeep;
var isObject$12 = isObject_1;
var keysIn = keysIn_1;
var safeGet = _safeGet;
function baseMerge$1(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack());
    if (isObject$12(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge$1, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
var _baseMerge = baseMerge$1;
function identity$2(value) {
  return value;
}
var identity_1 = identity$2;
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$1;
var apply = _apply;
var nativeMax = Math.max;
function overRest$1(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var _overRest = overRest$1;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var constant = constant_1;
var defineProperty = _defineProperty;
var identity$1 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString;
var shortOut = _shortOut;
var setToString$1 = shortOut(baseSetToString);
var _setToString = setToString$1;
var identity = identity_1;
var overRest = _overRest;
var setToString = _setToString;
function baseRest$1(func, start) {
  return setToString(overRest(func, start, identity), func + "");
}
var _baseRest = baseRest$1;
var eq = eq_1;
var isArrayLike = isArrayLike_1;
var isIndex = _isIndex;
var isObject3 = isObject_1;
function isIterateeCall$1(value, index, object) {
  if (!isObject3(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
    return eq(object[index], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall$1;
var baseRest = _baseRest;
var isIterateeCall = _isIterateeCall;
function createAssigner$1(assigner) {
  return baseRest(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var _createAssigner = createAssigner$1;
var baseMerge = _baseMerge;
var createAssigner = _createAssigner;
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
var merge_1 = merge;

// ../../atreyu/app/src/lib/url-logger.js
function urlLogger({ missing, continued, scope, method, url, origUrl, cached, corsConf, body, duration, res, richConsole = true, verbose }) {
  let badgeColor = "";
  if (!verbose) {
    if (cached && !missing && method === "GET" && scope === "ipfs") {
      return;
    }
    if (continued) {
      return;
    }
  }
  if (richConsole) {
    badgeColor = "grey";
    if (cached) {
      badgeColor = "#099009";
    } else if (cached === false) {
      badgeColor = "orange";
    }
    if (method === "POST" || method === "SET") {
      badgeColor = "rgb(170, 90, 217)";
    } else if (method === "PUT") {
      badgeColor = "rgb(174, 12, 226)";
    } else if (method === "CALL") {
      badgeColor = "rgb(236 124 248)";
    } else if (method === "PRELOAD") {
      badgeColor = "#6ad4f6";
    }
  }
  let displayUrl = "";
  try {
    if (typeof location !== "undefined" && location.origin) {
      displayUrl = url.replace(location.origin, "");
    } else {
      displayUrl = url;
    }
  } catch (_e) {
    displayUrl = url;
  }
  const edgeWorker = scope?.endsWith("edge-worker");
  if (richConsole) {
    console.groupCollapsed(
      `${scope && edgeWorker ? scope + ": " : ""}%c${missing ? "route error" : ""}%c${missing ? " " : ""}%c${method}%c %c ${displayUrl}`,
      richConsole && missing ? `background-color:red;border-radius:3px;color:black;font-weight:bold;padding-left:2px;padding-right:2px` : "",
      richConsole ? "color:grey" : "",
      richConsole ? `background-color:${badgeColor};border-radius:3px;color:black;font-weight:bold;padding-left:2px;padding-right:2px` : "",
      richConsole ? "color:grey" : "",
      richConsole ? "color:grey" : ""
    );
  } else {
    console.log(`${scope && edgeWorker ? scope + ": " : ""} ${missing ? "route error" : ""} ${missing ? " " : ""} ${method}    ${displayUrl}`);
  }
  if (!edgeWorker && scope) {
    console.info(scope);
  }
  if (cached === true) {
    console.info("cache-status: hit");
  } else if (cached === false) {
    console.info("cache-status: miss");
  }
  if (origUrl && url !== origUrl) {
    console.info("rewritten from: ", origUrl);
  }
  if (corsConf && corsConf.mode === "proxy") {
    console.info("proxied through: " + corsConf.server);
  }
  if (typeof duration !== "undefined") {
    console.log(`duration: ${duration}ms`);
  }
  if (continued) {
    console.info("continued processing of previous request");
  }
  if (body) {
    console.info(body);
  }
  if (richConsole) {
    console.groupEnd();
  }
}

// ../../atreyu/app/src/schema/helpers.js
function addPathTags(paths2, tags) {
  if (typeof tags === "string") {
    tags = [tags];
  }
  Object.values(paths2).forEach((pathConf) => {
    if (tags.includes("window") && !pathConf.get) {
      pathConf.get = {};
    }
    const methodConfs = Object.values(pathConf).filter((conf) => typeof conf === "object");
    methodConfs.forEach((conf) => {
      tags.forEach((tag) => {
        if (!conf.tags) {
          conf.tags = [tag];
        } else if (!conf.tags.includes(tag)) {
          conf.tags.push(tag);
        }
      });
    });
  });
  return paths2;
}

// ../../atreyu/app/src/schema/falcor-paths.js
var falcor_paths_default = {
  "_sync": {
    call: {
      operationId: "_sync"
    }
  },
  "_users": {
    get: {
      handler: async ({ dbs, session: { org, userId: userId2 } }) => {
        const { rows: sessions } = await dbs.couch.query(`ayu_main/by_type_and_title`, {
          partition: "system",
          reduce: false,
          include_docs: true,
          startkey: ["session"],
          endkey: ["session", {}]
        });
        const users = sessions.map((row) => row.doc).sort((a, b) => b.lastLogin - a.lastLogin).reduce((agg, session) => {
          if (!agg[session.title]) {
            agg[session.title] = session;
            agg[session.title].numSessions = 1;
          } else {
            agg[session.title].numSessions += 1;
          }
          return agg;
        }, {});
        return {
          jsonGraph: {
            _users: { $type: "atom", value: Object.values(users) }
          }
        };
      }
    }
  },
  "_sessions": {
    get: {
      handler: async ({ dbs, session: { org, userId: userId2 } }) => {
        const sessionName = userId2 + (org ? ` (${org})` : "");
        const { rows: sessions } = await dbs.couch.query(`ayu_main/by_type_and_title`, {
          partition: "system",
          reduce: false,
          include_docs: true,
          startkey: ["session", sessionName],
          endkey: ["session", sessionName, {}]
        });
        return {
          jsonGraph: {
            _sessions: { $type: "atom", value: sessions.map((row) => row.doc).sort((a, b) => b.lastLogin - a.lastLogin) }
          }
        };
      }
    }
  },
  "_pouch": {
    get: {
      handler: async ({ dbs }) => {
        return {
          jsonGraph: {
            _pouch: { $type: "atom", value: await dbs.pouch.info() }
          }
        };
      }
    }
  },
  "_couch": {
    get: {
      handler: async ({ dbs }) => {
        return {
          jsonGraph: {
            _couch: { $type: "atom", value: await dbs.couch.info() }
          }
        };
      }
    }
  },
  "_session[{keys:keys}]": {
    get: {
      handler: ({ _keys, session }) => {
        return {
          jsonGraph: {
            _session: session
          }
        };
      }
    }
  },
  "_hash": {
    get: {
      handler: () => {
        return {
          jsonGraph: {
            _hash: self.ipfsHash
          }
        };
      }
    }
  },
  "_updating": {
    get: {
      handler: () => {
        return {
          jsonGraph: {
            _updating: self.updating
          }
        };
      }
    },
    set: {
      handler: ({ _updating }) => {
        self.updating = _updating;
        return {
          jsonGraph: {
            _updating
          }
        };
      }
    }
  },
  "_docs.create": {
    call: {
      handler: async ({ dbs, session, _Observable }, [docs]) => {
        const result3 = await dbs.pouch.bulkDocs(docs.map((doc) => {
          doc.changes = [{ userId: session.userId, action: "created", date: Date.now() }];
          return doc;
        }));
        return result3.map((_doc, i) => {
          return { path: ["_docs", docs[i]._id], value: docs[i] };
        });
      }
    }
  },
  "_docs[{keys:ids}]": {
    get: {
      operationId: "getDocs"
    },
    set: {
      handler: async ({ _docs, dbs, session }) => {
        const result3 = await dbs.pouch.bulkDocs(Object.values(_docs).map(({ value }) => {
          if (!value.changes) {
            value.changes = [];
          }
          if (value.changes.length > 12) {
            value.changes.splice(2, value.changes.length - 4);
            value.changes.push({ userId: session.userId, action: "aggregated", date: Date.now() });
          }
          if (value.deleted) {
            value.changes.push({ userId: session.userId, action: "deleted", date: Date.now() });
          } else if (!value._rev) {
            value.changes.push({ userId: session.userId, action: "created", date: Date.now() });
          } else {
            value.changes.push({ userId: session.userId, action: "updated", date: Date.now() });
          }
          return value;
        }));
        result3.forEach((res) => {
          if (res.ok) {
            _docs[res.id].value._rev = res.rev;
          } else {
            console.error("set doc error", res);
          }
        });
        return {
          jsonGraph: {
            _docs
          }
        };
      }
    }
  }
};

// ../../atreyu/app/src/schema/window-paths.js
var window_paths_default = {
  "/(#/):_page(/:_subPage)(/*_)": {}
};

// ../../atreyu/app/src/schema/default-routes.js
var default_routes_default = {
  ...addPathTags(falcor_paths_default, "falcor"),
  ...addPathTags(window_paths_default, "window"),
  "/*": {
    get: {
      tags: ["edge", "service-worker"],
      operationId: "_ipfs"
    }
  },
  "/_api/_session*": {
    get: {
      tags: ["edge"],
      operationId: "_session"
    },
    post: {
      tags: ["edge"],
      operationId: "_session"
    },
    delete: {
      tags: ["edge"],
      operationId: "_session"
    }
  },
  "/_api/_couch/*": {
    get: {
      tags: ["edge"],
      operationId: "_couch"
    },
    put: {
      tags: ["edge"],
      operationId: "_couch"
    },
    post: {
      tags: ["edge"],
      operationId: "_couch"
    },
    options: {
      tags: ["edge"],
      operationId: "_couch"
    }
  },
  "/cdn-cgi/access*": {
    get: {
      tags: ["service-worker"],
      operationId: "_bypass"
    }
  }
};

// ../../atreyu/app/src/store/router.js
var components = {};
var onIdle = window.requestIdleCallback || function(cb) {
  cb({ timeRemaining: function() {
    return 41;
  } });
};
function router_default({ schema: schema2 = { paths: {}, fallback: true }, dataStore } = {}, { preloadDisabled = localStorage.getItem("ayu_preload") === "false", _preloadDefault } = {}) {
  const routes = [];
  if (typeof schema2 === "function") {
    schema2 = schema2({ defaultPaths: default_routes_default, addPathTags });
  }
  ;
  [...Object.entries(schema2.paths || {})].forEach(([path, { get: get5, name }]) => {
    if (get5 && get5.tags?.includes("window")) {
      routes.push({ router: new routeParser(path), name, security: get5.security, operationId: get5.operationId });
    }
  });
  function routerState({ hrefOverride, preload: preload2, continued, updateRoute } = {}) {
    const {
      search,
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol
    } = hrefOverride ? new URL(hrefOverride) : window.location;
    const query = Object.fromEntries([...new URLSearchParams(search.replaceAll("?", "&")).entries()]);
    const pathParts = pathname.split("/").filter((pathPart) => pathPart !== "");
    const matchedRoutes = [];
    const data = {};
    routes.forEach(({ router, name, security, operationId }) => {
      const match = router.match(pathname + search + hash);
      if (match) {
        matchedRoutes.push({ spec: router.spec, security, operationId });
        if (matchedRoutes.length === 1) {
          data["match"] = {
            _link: (newParams) => {
              Object.entries(newParams).forEach(([key, val]) => {
                if (typeof val === "string") {
                  newParams[key] = encodeURIComponent(val);
                }
              });
              return router.reverse(newParams);
            },
            _navigate: (newParams, { replaceState } = {}) => {
              Object.entries(newParams).forEach(([key, val]) => {
                if (typeof val === "string") {
                  newParams[key] = encodeURIComponent(val);
                }
              });
              const newHref = router.reverse(newParams);
              if (replaceState) {
                window.history.replaceState({ location: newHref }, "", newHref);
              } else {
                window.history.pushState({ location: newHref }, "", newHref);
              }
              updateRoute();
            },
            ...match
          };
        }
        if (name) {
          data[name] = {
            _link: (newParams) => {
              Object.entries(newParams).forEach(([key, val]) => {
                if (typeof val === "string") {
                  newParams[key] = encodeURIComponent(val);
                }
              });
              return router.reverse(newParams);
            },
            _navigate: (newParams, { replaceState } = {}) => {
              Object.entries(newParams).forEach(([key, val]) => {
                if (typeof val === "string") {
                  newParams[key] = encodeURIComponent(val);
                }
              });
              const newHref = router.reverse(newParams);
              if (replaceState) {
                window.history.replaceState({ location: newHref }, "", newHref);
              } else {
                window.history.pushState({ location: newHref }, "", newHref);
              }
              updateRoute();
            },
            ...match
          };
        } else {
          merge_1(data, match);
        }
      }
    });
    delete data._;
    let missing = false;
    if (matchedRoutes.length < 1) {
      if (!schema2.fallback) {
        missing = true;
      }
    } else {
      if (matchedRoutes[0].security) {
        matchedRoutes[0].security.forEach((scheme) => {
          if (scheme.atreyu) {
            if (scheme.atreyu.includes("userId") && !userId) {
              console.log("userId required for path, redirecting to /accounts/login");
              location.href = "/accounts/login";
            }
          }
        });
      }
    }
    Object.entries(data).forEach(([key, val]) => {
      if (typeof val === "string") {
        data[key] = decodeURIComponent(val);
      } else if (typeof val === "object") {
        Object.entries(data[key]).forEach(([key2, val2]) => {
          if (typeof val2 === "string") {
            data[key][key2] = decodeURIComponent(val2);
          }
        });
      }
    });
    const allData = {
      query,
      hash,
      host,
      hostname,
      href,
      origin,
      path: pathname,
      port,
      protocol,
      pathParts,
      matchedRoutes,
      _pending: null,
      _error: null,
      _errorComponent: null,
      _preloading: preload2,
      ...data
    };
    let page;
    if (matchedRoutes[0]?.operationId) {
      page = matchedRoutes[0].operationId;
      allData._page = page;
    } else if (allData._page) {
      if (allData._subPage) {
        page = `${allData._page}/${allData._subPage}`;
      } else {
        page = allData._page;
      }
    }
    urlLogger({ missing, continued, method: preload2 ? "PRELOAD" : "GET", url: "window://" + href, body: allData });
    if (page) {
      if (!components[page]) {
        allData._pending = import(`/build/pages/${page}/_page.js`).then((comp) => {
          components[page] = comp.default;
          allData._component = comp.default;
          allData._error = null;
          allData._pending = null;
          return comp.default;
        }).catch((err) => {
          allData._error = err;
          if (!allData._errorComponent) {
            const currentErrorCop = null;
            const fallBackErrComp = `/build/pages/_error.js`;
            return import(currentErrorCop || fallBackErrComp).then((errComp) => {
              allData._errorComponent = errComp.default;
            });
          }
        });
      } else {
        allData._component = components[page];
      }
    }
    return allData;
  }
  function findNode(node) {
    while (node && node.nodeName.toUpperCase() !== "A") {
      node = node.parentNode;
    }
    return node;
  }
  function getLinks(target) {
    const as = [...target.querySelectorAll("a")];
    return as.reduce((agr, a) => {
      if (a.rel !== "no-preload" && a.rel !== "external" && !a.href.startsWith("javascript:")) {
        try {
          agr.push(new URL(a.href).href);
        } catch (err) {
          console.error(a.href, err);
        }
      }
      return agr;
    }, []);
  }
  function awaitIdle(cb) {
    setTimeout(() => {
      onIdle((IdleDeadline) => {
        const remainingTime = IdleDeadline.timeRemaining();
        if (remainingTime > 48) {
          const startTime = Date.now();
          cb(startTime + remainingTime);
        } else {
          setTimeout(() => {
            awaitIdle(cb);
          }, 100);
        }
      });
    }, 70);
  }
  const primary = /* @__PURE__ */ new Set();
  const secondary = /* @__PURE__ */ new Set();
  const instances = /* @__PURE__ */ new Map();
  const pending = /* @__PURE__ */ new Set();
  const finished = /* @__PURE__ */ new Set();
  async function doIdleWork(endTime) {
    let todo;
    let isSecondary = false;
    if (primary.size === 0) {
      todo = secondary;
      isSecondary = true;
    } else {
      todo = primary;
    }
    let currentHref;
    for (const href of todo) {
      if (finished.has(href)) {
        todo.delete(href);
        continue;
      }
      const preloadRouterState = routerState({ hrefOverride: href, preload: true, continued: pending.has(href) });
      if (preloadRouterState._pending?.then) {
        await preloadRouterState._pending;
      }
      if (!preloadRouterState._page || preloadRouterState._error) {
        finished.add(href);
        todo.delete(href);
        continue;
      }
      if (endTime > Date.now() + 20) {
        finished.add(href);
        todo.delete(href);
        const preloadRouterStore = readable({}, (set4) => {
          set4(preloadRouterState);
          return () => {
          };
        });
        try {
          const newDiv = document.createElement("div");
          newDiv.style = "display: none;";
          currentHref = href;
          instances.set(href, new preloadRouterState._component({
            target: newDiv,
            context: /* @__PURE__ */ new Map([["ayu", { router: preloadRouterStore, data: dataStore }]])
          }));
        } catch (err) {
          console.error("could not preload the component for: " + href, err, preloadRouterState._component);
        }
      } else {
        pending.add(href);
      }
      break;
    }
    awaitIdle((endTime2) => {
      if (currentHref) {
        if (!isSecondary) {
          getLinks(instances.get(currentHref).$$.root).forEach((link) => secondary.add(link));
        }
        instances.get(currentHref)?.$destroy();
        instances.delete(currentHref);
      }
      if (primary.size > 0 || secondary.size > 0 || instances.size > 0) {
        doIdleWork(endTime2);
      }
    });
  }
  const routerStore = readable({}, (set4) => {
    let resetScroll = false;
    function preventer(e) {
      const a = findNode(e.target);
      if (!a) {
        return {};
      }
      if (a.rel === "external") {
        a.click();
        return {};
      }
      if (a.rel === "replace") {
        console.log("todo replace state impl...");
      }
      if (a.href.startsWith("javascript:")) {
        return {};
      }
      e.preventDefault();
      e.stopPropagation();
      return { prevented: true, a };
    }
    function linkClickHandler(e) {
      if (e.button !== 0) {
        return;
      }
      const { prevented, a } = preventer(e);
      if (!prevented) {
        return;
      }
      window.history.pushState({ location: a.href }, "", a.href);
      updateRoute();
      resetScroll = !a.hasAttribute("noscroll");
    }
    async function updateRoute() {
      const newState = routerState({ updateRoute });
      if (newState._pending?.then) {
        set4(newState);
        await newState._pending;
        await set4(newState);
      } else {
        await set4(newState);
      }
      if (resetScroll) {
        document.body.focus();
      }
      if (!preloadDisabled) {
        awaitIdle((endTime) => {
          finished.add(location.href);
          getLinks(document.querySelector("#app")).forEach((link) => primary.add(link));
          doIdleWork(endTime);
        });
      }
      if (resetScroll) {
        scrollTo(0, 0);
        resetScroll = false;
      }
    }
    updateRoute();
    self.addEventListener("popstate", updateRoute);
    self.addEventListener("mousedown", linkClickHandler);
    self.addEventListener("click", preventer);
    return () => {
      self.removeEventListener("popstate", updateRoute);
      self.removeEventListener("mousedown", linkClickHandler);
      self.addEventListener("click", preventer);
    };
  });
  return routerStore;
}

// app/schema/main.js
var counter = 0;
var { paths } = require_schema();
var schema = {
  paths: {
    "/:page(/*_)": {
      get: { tags: ["window"] }
    },
    "/examples/:slug(/*_)": {
      get: { tags: ["window"] }
    },
    ...paths,
    "counter": {
      get: {
        tags: ["worker", "falcor"],
        handler: () => ({
          path: ["counter"],
          value: { $type: "atom", value: counter }
        })
      },
      set: {
        tags: ["worker", "falcor"],
        handler: (args) => {
          counter = args.counter;
          return {
            path: ["counter"],
            value: { $type: "atom", value: counter }
          };
        }
      }
    }
  }
};

// ../../atreyu/app/src/store/context.js
function context_default() {
  if (hasContext("ayu")) {
    console.warn("only set the ayu context in the svelte file of your app");
  }
  const stores = { data: data_default, router: router_default({ schema, dataStore: data_default }) };
  setContext("ayu", stores);
  return stores;
}

// app/src/components/Header.svelte
var file = "componentsHeader.svelte";
function add_css(target) {
  append_styles(target, "ayu_components_header", `@keyframes ayu_components_header-fadein{from{opacity:0}to{opacity:1}}.container.ayu_components_header.ayu_components_header{position:fixed;width:100%;top:0;height:3em;background-color:#333;color:#eee;border-bottom:2px solid rgb(20,87,138);font-family:Rajdhani, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";z-index:5;box-shadow:0 -0.4rem 0.9rem 0.2rem rgba(0,0,0,.5)}nav.ayu_components_header.ayu_components_header{position:fixed;width:14em;height:calc(100vh - 3em);top:3em;font-family:Rajdhani, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";background-color:white;transform:translate(-100%,0);transition:transform 0.2s cubic-bezier(.17,.67,.24,.99);border-right:1px solid #eee;z-index:5;padding:1em;user-select:none}.menu-link.ayu_components_header.ayu_components_header{display:inline;position:absolute;top:0;left:1rem;font-size:1em;line-height:3.1em;color:#ccc;cursor:pointer;font-weight:500;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.logo.ayu_components_header.ayu_components_header{position:absolute;top:50%;left:50%;transform:translate(-50%, -45%);-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;line-height:1;text-transform:lowercase;color:white;font-size:1.4rem}ul.ayu_components_header.ayu_components_header{display:block;margin:0;padding:0;list-style:none}.primary.ayu_components_header.ayu_components_header{margin:0 0 2em 0}.primary.ayu_components_header li.ayu_components_header{position:relative;display:block}.primary.ayu_components_header .active.ayu_components_header{color:#333;font-weight:700}.primary.ayu_components_header li a.ayu_components_header{display:block;color:#727272;font-size:1.3em;font-weight:500;padding:0.75em 0;line-height:1}@media(min-width: 768px){.mousecatcher.ayu_components_header.ayu_components_header,.menu-link.ayu_components_header.ayu_components_header{display:none}.container.ayu_components_header.ayu_components_header{height:4em}nav.ayu_components_header.ayu_components_header{width:100%;height:4em;padding:0 1.5em 0 0;transform:none;transition:none;height:0}.primary.ayu_components_header.ayu_components_header{position:fixed;top:0;right:1em;margin:0}.primary.ayu_components_header li.ayu_components_header{display:inline-block}.primary.ayu_components_header li a.ayu_components_header{padding:1.5em 0.5em;color:#ccc;font-size:1rem}.primary.ayu_components_header li a.active.ayu_components_header{color:white;font-weight:500}.primary.ayu_components_header li.ayu_components_header::after{position:absolute;top:1.5rem;right:-0.3em;content:'/';font-size:0.8em;color:#999}.primary.ayu_components_header li.ayu_components_header:last-child::after{content:''}.secondary.ayu_components_header.ayu_components_header{display:none}.logo.ayu_components_header.ayu_components_header{position:absolute;top:1rem;left:1rem;font-size:2em;font-weight:300;transform:none}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLnN2ZWx0ZSIsInNvdXJjZXMiOlsiSGVhZGVyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGU+XG5cdEBrZXlmcmFtZXMgZmFkZWluIHtcblx0XHRmcm9tIHsgb3BhY2l0eTogMDsgfVxuXHRcdHRvIHsgb3BhY2l0eTogMTsgfVxuXHR9XG5cblx0LmNvbnRhaW5lciB7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHRvcDogMDtcblx0XHRoZWlnaHQ6IDNlbTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuXHRcdGNvbG9yOiAjZWVlO1xuXHRcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjAsODcsMTM4KTtcblx0XHRmb250LWZhbWlseTogUmFqZGhhbmksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcblx0XHR6LWluZGV4OiA1O1xuXHRcdGJveC1zaGFkb3c6IDAgLTAuNHJlbSAwLjlyZW0gMC4ycmVtIHJnYmEoMCwwLDAsLjUpO1xuXHR9XG5cblx0bmF2IHtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0d2lkdGg6IDE0ZW07XG5cdFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gM2VtKTtcblx0XHR0b3A6IDNlbTtcblx0XHRmb250LWZhbWlseTogUmFqZGhhbmksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwwKTtcblx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoLjE3LC42NywuMjQsLjk5KTtcblx0XHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xuXHRcdHotaW5kZXg6IDU7XG5cdFx0cGFkZGluZzogMWVtO1xuXHRcdHVzZXItc2VsZWN0OiBub25lO1xuXHR9XG5cblx0Lm1lbnUtbGluayB7XG5cdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMXJlbTtcblx0XHRmb250LXNpemU6IDFlbTtcblx0XHRsaW5lLWhlaWdodDogMy4xZW07XG5cdFx0Y29sb3I6ICNjY2M7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHQtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG5cdH1cblxuXHQubG9nbyB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogNTAlO1xuXHRcdGxlZnQ6IDUwJTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDUlKTtcblx0XHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcblx0XHRsaW5lLWhlaWdodDogMTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRmb250LXNpemU6IDEuNHJlbTtcblx0fVxuXG5cdHVsIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZzogMDtcblx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHR9XG5cblx0LnByaW1hcnkge1xuXHRcdG1hcmdpbjogMCAwIDJlbSAwO1xuXHR9XG5cblx0LnByaW1hcnkgbGkge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0fVxuXG5cdC5wcmltYXJ5IC5hY3RpdmUge1xuXHRcdGNvbG9yOiAjMzMzO1xuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdH1cblxuXHQvKiovXG5cblx0LnByaW1hcnkgbGkgYSB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Y29sb3I6ICM3MjcyNzI7XG5cdFx0Zm9udC1zaXplOiAxLjNlbTtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdHBhZGRpbmc6IDAuNzVlbSAwO1xuXHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cdFx0Lm1vdXNlY2F0Y2hlciwgLm1lbnUtbGluayB7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdH1cblxuXHRcdC5jb250YWluZXIge1xuXHRcdFx0aGVpZ2h0OiA0ZW07XG5cdFx0fVxuXG5cdFx0bmF2IHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiA0ZW07XG5cdFx0XHRwYWRkaW5nOiAwIDEuNWVtIDAgMDtcblx0XHRcdHRyYW5zZm9ybTogbm9uZTtcblx0XHRcdHRyYW5zaXRpb246IG5vbmU7XG5cdFx0XHRoZWlnaHQ6IDA7XG5cdFx0fVxuXG5cdFx0LnByaW1hcnkge1xuXHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0cmlnaHQ6IDFlbTtcblx0XHRcdG1hcmdpbjogMDtcblx0XHR9XG5cblx0XHQucHJpbWFyeSBsaSB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0fVxuXG5cdFx0LnByaW1hcnkgbGkgYSB7XG5cdFx0XHRwYWRkaW5nOiAxLjVlbSAwLjVlbTtcblx0XHRcdGNvbG9yOiAjY2NjO1xuXHRcdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdH1cblxuXHRcdC5wcmltYXJ5IGxpIGEuYWN0aXZlIHtcblx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0fVxuXG5cdFx0LnByaW1hcnkgbGk6OmFmdGVyIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogMS41cmVtO1xuXHRcdFx0cmlnaHQ6IC0wLjNlbTtcblx0XHRcdGNvbnRlbnQ6ICcvJztcblx0XHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0XHRjb2xvcjogIzk5OTtcblx0XHR9XG5cblx0XHQucHJpbWFyeSBsaTpsYXN0LWNoaWxkOjphZnRlciB7XG5cdFx0XHRjb250ZW50OiAnJztcblx0XHR9XG5cblx0XHQuc2Vjb25kYXJ5IHtcblx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0fVxuXG5cdFx0LmxvZ28ge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAxcmVtO1xuXHRcdFx0bGVmdDogMXJlbTtcblx0XHRcdGZvbnQtc2l6ZTogMmVtO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0XHRcdHRyYW5zZm9ybTogbm9uZTtcblx0XHR9XG5cdH1cbjwvc3R5bGU+XG5cblxuPGRpdiBjbGFzcz1cImNsb3NlZCBtb3VzZWNhdGNoZXJcIj48L2Rpdj5cblxuPGRpdiBjbGFzcz0nY29udGFpbmVyJz5cblx0PHNwYW4gY2xhc3M9XCJtZW51LWxpbmtcIiA+TWVudTwvc3Bhbj5cblx0PGEgaHJlZj0nLycgY2xhc3M9J2xvZ28nPkF0cmV5dTwvYT5cbjwvZGl2PlxuXG48bmF2IGNsYXNzPVwiY2xvc2VkXCI+XG5cdDx1bCBjbGFzcz0ncHJpbWFyeSc+XG5cdFx0PGxpPjxhIGNsYXNzOmFjdGl2ZT17JHJvdXRlci5wYWdlID09PSAnZ3VpZGUnfSBocmVmPScvZ3VpZGUnPkd1aWRlPC9hPjwvbGk+XG5cdFx0PGxpPjxhIGNsYXNzPVwieyRyb3V0ZXIucGFnZSA9PT0gJ2V4YW1wbGVzJyA/ICdhY3RpdmUnIDogJyd9XCIgaHJlZj0nL2V4YW1wbGVzL3tsYXN0RXhhbXBsZSB8fCAnJ30nPkV4YW1wbGVzPC9hPjwvbGk+XG5cdFx0PGxpPjxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9jbG91ZGxlcy1ocS9hdHJleXUnPkdpdEh1YjwvYT48L2xpPlxuXHQ8L3VsPlxuXG5cdDxkaXYgY2xhc3M9J3NlY29uZGFyeSc+XG5cdFx0PCEtLSA8R3VpZGVDb250ZW50cy8+IC0tPlxuXHQ8L2Rpdj5cbjwvbmF2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnc3ZlbHRlJ1xuICBjb25zdCB7IHJvdXRlciB9ID0gZ2V0Q29udGV4dCgnYXl1Jylcblx0bGV0IGxhc3RFeGFtcGxlXG5cdCQ6IGxhc3RFeGFtcGxlID0gJHJvdXRlci5zbHVnID8gJHJvdXRlci5zbHVnIDogbGFzdEV4YW1wbGVcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDLFdBQVcsNEJBQU8sQ0FBQyxBQUNsQixJQUFJLEFBQUMsQ0FBQyxBQUFDLE9BQU8sQ0FBRSxDQUFDLEFBQUUsQ0FBQyxBQUNwQixFQUFFLEFBQUMsQ0FBQyxBQUFDLE9BQU8sQ0FBRSxDQUFDLEFBQUUsQ0FBQyxBQUNuQixDQUFDLEFBRUQsVUFBVSw0Q0FBQyxDQUFDLEFBQ1gsUUFBUSxDQUFFLEtBQUssQ0FDZixLQUFLLENBQUUsSUFBSSxDQUNYLEdBQUcsQ0FBRSxDQUFDLENBQ04sTUFBTSxDQUFFLEdBQUcsQ0FDWCxnQkFBZ0IsQ0FBRSxJQUFJLENBQ3RCLEtBQUssQ0FBRSxJQUFJLENBQ1gsYUFBYSxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUN2QyxXQUFXLENBQUUsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsaUJBQWlCLENBQzVKLE9BQU8sQ0FBRSxDQUFDLENBQ1YsVUFBVSxDQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxBQUNuRCxDQUFDLEFBRUQsR0FBRyw0Q0FBQyxDQUFDLEFBQ0osUUFBUSxDQUFFLEtBQUssQ0FDZixLQUFLLENBQUUsSUFBSSxDQUNYLE1BQU0sQ0FBRSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ3pCLEdBQUcsQ0FBRSxHQUFHLENBQ1IsV0FBVyxDQUFFLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGlCQUFpQixDQUM1SixnQkFBZ0IsQ0FBRSxLQUFLLENBQ3ZCLFNBQVMsQ0FBRSxVQUFVLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDN0IsVUFBVSxDQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDeEQsWUFBWSxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUM1QixPQUFPLENBQUUsQ0FBQyxDQUNWLE9BQU8sQ0FBRSxHQUFHLENBQ1osV0FBVyxDQUFFLElBQUksQUFDbEIsQ0FBQyxBQUVELFVBQVUsNENBQUMsQ0FBQyxBQUNYLE9BQU8sQ0FBRSxNQUFNLENBQ2YsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsR0FBRyxDQUFFLENBQUMsQ0FDTixJQUFJLENBQUUsSUFBSSxDQUNWLFNBQVMsQ0FBRSxHQUFHLENBQ2QsV0FBVyxDQUFFLEtBQUssQ0FDbEIsS0FBSyxDQUFFLElBQUksQ0FDWCxNQUFNLENBQUUsT0FBTyxDQUNmLFdBQVcsQ0FBRSxHQUFHLENBQ2hCLDJCQUEyQixDQUFFLFdBQVcsQ0FDeEMscUJBQXFCLENBQUUsSUFBSSxBQUM1QixDQUFDLEFBRUQsS0FBSyw0Q0FBQyxDQUFDLEFBQ04sUUFBUSxDQUFFLFFBQVEsQ0FDbEIsR0FBRyxDQUFFLEdBQUcsQ0FDUixJQUFJLENBQUUsR0FBRyxDQUNULFNBQVMsQ0FBRSxVQUFVLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUNoQywyQkFBMkIsQ0FBRSxXQUFXLENBQ3hDLHFCQUFxQixDQUFFLElBQUksQ0FDM0IsV0FBVyxDQUFFLENBQUMsQ0FDZCxjQUFjLENBQUUsU0FBUyxDQUN6QixLQUFLLENBQUUsS0FBSyxDQUNaLFNBQVMsQ0FBRSxNQUFNLEFBQ2xCLENBQUMsQUFFRCxFQUFFLDRDQUFDLENBQUMsQUFDSCxPQUFPLENBQUUsS0FBSyxDQUNkLE1BQU0sQ0FBRSxDQUFDLENBQ1QsT0FBTyxDQUFFLENBQUMsQ0FDVixVQUFVLENBQUUsSUFBSSxBQUNqQixDQUFDLEFBRUQsUUFBUSw0Q0FBQyxDQUFDLEFBQ1QsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQUFDbEIsQ0FBQyxBQUVELDhCQUFRLENBQUMsRUFBRSxzQkFBQyxDQUFDLEFBQ1osUUFBUSxDQUFFLFFBQVEsQ0FDbEIsT0FBTyxDQUFFLEtBQUssQUFDZixDQUFDLEFBRUQsOEJBQVEsQ0FBQyxPQUFPLHNCQUFDLENBQUMsQUFDakIsS0FBSyxDQUFFLElBQUksQ0FDWCxXQUFXLENBQUUsR0FBRyxBQUNqQixDQUFDLEFBSUQsOEJBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxzQkFBQyxDQUFDLEFBQ2QsT0FBTyxDQUFFLEtBQUssQ0FDZCxLQUFLLENBQUUsT0FBTyxDQUNkLFNBQVMsQ0FBRSxLQUFLLENBQ2hCLFdBQVcsQ0FBRSxHQUFHLENBQ2hCLE9BQU8sQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUNqQixXQUFXLENBQUUsQ0FBQyxBQUNmLENBQUMsQUFFRCxNQUFNLEFBQUMsWUFBWSxLQUFLLENBQUMsQUFBQyxDQUFDLEFBQzFCLHlEQUFhLENBQUUsVUFBVSw0Q0FBQyxDQUFDLEFBQzFCLE9BQU8sQ0FBRSxJQUFJLEFBQ2QsQ0FBQyxBQUVELFVBQVUsNENBQUMsQ0FBQyxBQUNYLE1BQU0sQ0FBRSxHQUFHLEFBQ1osQ0FBQyxBQUVELEdBQUcsNENBQUMsQ0FBQyxBQUNKLEtBQUssQ0FBRSxJQUFJLENBQ1gsTUFBTSxDQUFFLEdBQUcsQ0FDWCxPQUFPLENBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNwQixTQUFTLENBQUUsSUFBSSxDQUNmLFVBQVUsQ0FBRSxJQUFJLENBQ2hCLE1BQU0sQ0FBRSxDQUFDLEFBQ1YsQ0FBQyxBQUVELFFBQVEsNENBQUMsQ0FBQyxBQUNULFFBQVEsQ0FBRSxLQUFLLENBQ2YsR0FBRyxDQUFFLENBQUMsQ0FDTixLQUFLLENBQUUsR0FBRyxDQUNWLE1BQU0sQ0FBRSxDQUFDLEFBQ1YsQ0FBQyxBQUVELDhCQUFRLENBQUMsRUFBRSxzQkFBQyxDQUFDLEFBQ1osT0FBTyxDQUFFLFlBQVksQUFDdEIsQ0FBQyxBQUVELDhCQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsc0JBQUMsQ0FBQyxBQUNkLE9BQU8sQ0FBRSxLQUFLLENBQUMsS0FBSyxDQUNwQixLQUFLLENBQUUsSUFBSSxDQUNYLFNBQVMsQ0FBRSxJQUFJLEFBQ2hCLENBQUMsQUFFRCw4QkFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sc0JBQUMsQ0FBQyxBQUNyQixLQUFLLENBQUUsS0FBSyxDQUNaLFdBQVcsQ0FBRSxHQUFHLEFBQ2pCLENBQUMsQUFFRCw4QkFBUSxDQUFDLHdCQUFFLE9BQU8sQUFBQyxDQUFDLEFBQ25CLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLEdBQUcsQ0FBRSxNQUFNLENBQ1gsS0FBSyxDQUFFLE1BQU0sQ0FDYixPQUFPLENBQUUsR0FBRyxDQUNaLFNBQVMsQ0FBRSxLQUFLLENBQ2hCLEtBQUssQ0FBRSxJQUFJLEFBQ1osQ0FBQyxBQUVELDhCQUFRLENBQUMsd0JBQUUsV0FBVyxPQUFPLEFBQUMsQ0FBQyxBQUM5QixPQUFPLENBQUUsRUFBRSxBQUNaLENBQUMsQUFFRCxVQUFVLDRDQUFDLENBQUMsQUFDWCxPQUFPLENBQUUsSUFBSSxBQUNkLENBQUMsQUFFRCxLQUFLLDRDQUFDLENBQUMsQUFDTixRQUFRLENBQUUsUUFBUSxDQUNsQixHQUFHLENBQUUsSUFBSSxDQUNULElBQUksQ0FBRSxJQUFJLENBQ1YsU0FBUyxDQUFFLEdBQUcsQ0FDZCxXQUFXLENBQUUsR0FBRyxDQUNoQixTQUFTLENBQUUsSUFBSSxBQUNoQixDQUFDLEFBQ0YsQ0FBQyJ9 */`);
}
function create_fragment(ctx) {
  let t0;
  let div0;
  let t1;
  let div1;
  let t2;
  let span;
  let t4;
  let a0;
  let t6;
  let t7;
  let nav;
  let t8;
  let ul;
  let t9;
  let li0;
  let a1;
  let t11;
  let li1;
  let a2;
  let t12;
  let a2_class_value;
  let a2_href_value;
  let t13;
  let li2;
  let a3;
  let t15;
  let t16;
  let div2;
  let t18;
  let t19;
  const block = {
    c: function create() {
      t0 = text("\n\n\n");
      div0 = element("div");
      t1 = text("\n\n");
      div1 = element("div");
      t2 = text("\n	");
      span = element("span");
      span.textContent = "Menu";
      t4 = text("\n	");
      a0 = element("a");
      a0.textContent = "Atreyu";
      t6 = text("\n");
      t7 = text("\n\n");
      nav = element("nav");
      t8 = text("\n	");
      ul = element("ul");
      t9 = text("\n		");
      li0 = element("li");
      a1 = element("a");
      a1.textContent = "Guide";
      t11 = text("\n		");
      li1 = element("li");
      a2 = element("a");
      t12 = text("Examples");
      t13 = text("\n		");
      li2 = element("li");
      a3 = element("a");
      a3.textContent = "GitHub";
      t15 = text("\n	");
      t16 = text("\n\n	");
      div2 = element("div");
      div2.textContent = "\n		\n	";
      t18 = text("\n");
      t19 = text("\n\n");
      attr_dev(div0, "class", "closed mousecatcher ayu_components_header");
      add_location(div0, file, 162, 0, 2687);
      attr_dev(span, "class", "menu-link ayu_components_header");
      add_location(span, file, 165, 1, 2753);
      attr_dev(a0, "href", "/");
      attr_dev(a0, "class", "logo ayu_components_header");
      add_location(a0, file, 166, 1, 2791);
      attr_dev(div1, "class", "container ayu_components_header");
      add_location(div1, file, 164, 0, 2728);
      attr_dev(a1, "href", "/guide");
      attr_dev(a1, "class", "ayu_components_header");
      toggle_class(a1, "active", ctx[1].page === "guide");
      add_location(a1, file, 171, 6, 2884);
      attr_dev(li0, "class", "ayu_components_header");
      add_location(li0, file, 171, 2, 2880);
      attr_dev(a2, "class", a2_class_value = null_to_empty(ctx[1].page === "examples" ? "active" : "") + " ayu_components_header");
      attr_dev(a2, "href", a2_href_value = "/examples/" + (ctx[0] || ""));
      add_location(a2, file, 172, 6, 2962);
      attr_dev(li1, "class", "ayu_components_header");
      add_location(li1, file, 172, 2, 2958);
      attr_dev(a3, "href", "https://github.com/cloudles-hq/atreyu");
      attr_dev(a3, "class", "ayu_components_header");
      add_location(a3, file, 173, 6, 3080);
      attr_dev(li2, "class", "ayu_components_header");
      add_location(li2, file, 173, 2, 3076);
      attr_dev(ul, "class", "primary ayu_components_header");
      add_location(ul, file, 170, 1, 2857);
      attr_dev(div2, "class", "secondary ayu_components_header");
      add_location(div2, file, 176, 1, 3153);
      attr_dev(nav, "class", "closed ayu_components_header");
      add_location(nav, file, 169, 0, 2835);
    },
    l: function claim(nodes2) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div0, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, t2);
      append_dev(div1, span);
      append_dev(div1, t4);
      append_dev(div1, a0);
      append_dev(div1, t6);
      insert_dev(target, t7, anchor);
      insert_dev(target, nav, anchor);
      append_dev(nav, t8);
      append_dev(nav, ul);
      append_dev(ul, t9);
      append_dev(ul, li0);
      append_dev(li0, a1);
      append_dev(ul, t11);
      append_dev(ul, li1);
      append_dev(li1, a2);
      append_dev(a2, t12);
      append_dev(ul, t13);
      append_dev(ul, li2);
      append_dev(li2, a3);
      append_dev(ul, t15);
      append_dev(nav, t16);
      append_dev(nav, div2);
      append_dev(nav, t18);
      insert_dev(target, t19, anchor);
    },
    p: function update2(ctx2, [dirty]) {
      if (dirty & 2) {
        toggle_class(a1, "active", ctx2[1].page === "guide");
      }
      if (dirty & 2 && a2_class_value !== (a2_class_value = null_to_empty(ctx2[1].page === "examples" ? "active" : "") + " ayu_components_header")) {
        attr_dev(a2, "class", a2_class_value);
      }
      if (dirty & 1 && a2_href_value !== (a2_href_value = "/examples/" + (ctx2[0] || ""))) {
        attr_dev(a2, "href", a2_href_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(div0);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(div1);
      if (detaching)
        detach_dev(t7);
      if (detaching)
        detach_dev(nav);
      if (detaching)
        detach_dev(t19);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let $router;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Header", slots, []);
  const { router } = getContext("ayu");
  validate_store(router, "router");
  component_subscribe($$self, router, (value) => $$invalidate(1, $router = value));
  let lastExample;
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Header> was created with unknown prop '${key}'`);
  });
  $$self.$capture_state = () => ({ getContext, router, lastExample, $router });
  $$self.$inject_state = ($$props2) => {
    if ("lastExample" in $$props2)
      $$invalidate(0, lastExample = $$props2.lastExample);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 3) {
      $:
        $$invalidate(0, lastExample = $router.slug ? $router.slug : lastExample);
    }
  };
  return [lastExample, $router, router];
}
var Header = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {}, add_css);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Header",
      options,
      id: create_fragment.name
    });
  }
};
var Header_default = Header;

// app/src/components/Landing.svelte
var file2 = "componentsLanding.svelte";
function add_css2(target) {
  append_styles(target, "ayu_components_landing", `.hero.ayu_components_landing{position:relative;padding:2em 1em;background-color:white;color:#333;clear:fix;min-height:calc(100vh - 7em);box-sizing:border-box}ul.ayu_components_landing{max-width:32em;padding:0;margin:0 0 3em 0}li.ayu_components_landing{position:relative;list-style:none;margin:0 0 1em 0;font-family:Rajdhani, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";color:#666}li.ayu_components_landing::before{position:absolute;content:'\u25C6';top:0em;left:-1.4em;font-size:0.8em;color:#ddd}strong.ayu_components_landing{margin:0 auto;color:#333}.left.ayu_components_landing{padding:0 0 0 1em}h1.ayu_components_landing{display:block;color:rgb(20,87,138);font-size:30vw;font-weight:300;line-height:1;margin:0;text-transform:lowercase;padding:0.5em 0 0 0}.right.ayu_components_landing{padding:0 0 0 1em;margin:0 0 2em 0}h2.ayu_components_landing{font-size:7.2vw;font-weight:300;display:block;margin:0 0 4rem 0;max-width:11em}.learn-atreyu.ayu_components_landing{background-color:rgb(20,87,138);color:white;padding:0.5em 2em;border-radius:0.2em;line-height:1;font-family:Rajdhani, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:1.2em;font-weight:800;text-transform:uppercase;width:calc(100% - 1em);max-width:16em;display:block;text-align:center}@media(min-width: 480px){.left.ayu_components_landing,.right.ayu_components_landing{max-width:32em;margin:0 auto}h1.ayu_components_landing{font-size:8em}h2.ayu_components_landing{font-size:2em;max-width:none}li.ayu_components_landing{font-size:1.2em}}@media(min-width: 960px){.hero.ayu_components_landing{padding:6em 1em 2em 1em;max-width:64em;margin:0 auto}.left.ayu_components_landing{position:relative;float:left;width:40%;box-sizing:border-box}.right.ayu_components_landing{position:relative;float:left;width:60%;box-sizing:border-box}h1.ayu_components_landing{position:relative;right:3rem;margin-top:1.4rem;font-size:8em;text-align:right}h2.ayu_components_landing{font-size:2.8em;line-height:1.2;margin:0 0 2rem 0;max-width:11em}}div.ayu_components_landing{position:relative;padding:3em 0 0 0;overflow-x:hidden}@media(min-width: 768px){div.ayu_components_landing{padding:4em 0 0 0}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFuZGluZy5zdmVsdGUiLCJzb3VyY2VzIjpbIkxhbmRpbmcuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzdHlsZT5cblx0Lmhlcm8ge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRwYWRkaW5nOiAyZW0gMWVtO1xuXHRcdC8qYmFja2dyb3VuZC1jb2xvcjogIzMzMztcblx0XHRjb2xvcjogI2Y0ZjRmNDsqL1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRcdGNvbG9yOiAjMzMzO1xuXHRcdGNsZWFyOiBmaXg7XG5cdFx0bWluLWhlaWdodDogY2FsYygxMDB2aCAtIDdlbSk7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0fVxuXG5cdHVsIHtcblx0XHRtYXgtd2lkdGg6IDMyZW07XG5cdFx0cGFkZGluZzogMDtcblx0XHRtYXJnaW46IDAgMCAzZW0gMDtcblx0fVxuXG5cdGxpIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0XHRmb250LWZhbWlseTogUmFqZGhhbmksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcblx0XHRjb2xvcjogIzY2Njtcblx0fVxuXG5cdGxpOjpiZWZvcmUge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRjb250ZW50OiAn4peGJztcblx0XHR0b3A6IDBlbTtcblx0XHRsZWZ0OiAtMS40ZW07XG5cdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0XHQvKmNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7Ki9cblx0XHRjb2xvcjogI2RkZDtcblx0fVxuXG5cdHN0cm9uZyB7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0Y29sb3I6ICMzMzM7XG5cdH1cblxuXHQubGVmdCB7XG5cdFx0cGFkZGluZzogMCAwIDAgMWVtO1xuXHR9XG5cblx0aDEge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGNvbG9yOiByZ2IoMjAsODcsMTM4KTtcblx0XHRmb250LXNpemU6IDMwdnc7XG5cdFx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRtYXJnaW46IDA7XG5cdFx0dGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcblx0XHRwYWRkaW5nOiAwLjVlbSAwIDAgMDtcblx0fVxuXG5cdC5yaWdodCB7XG5cdFx0cGFkZGluZzogMCAwIDAgMWVtO1xuXHRcdG1hcmdpbjogMCAwIDJlbSAwO1xuXHR9XG5cblx0aDIge1xuXHRcdGZvbnQtc2l6ZTogNy4ydnc7XG5cdFx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRtYXJnaW46IDAgMCA0cmVtIDA7XG5cdFx0bWF4LXdpZHRoOiAxMWVtO1xuXHR9XG5cblx0LmxlYXJuLWF0cmV5dSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLDg3LDEzOCk7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdHBhZGRpbmc6IDAuNWVtIDJlbTtcblx0XHRib3JkZXItcmFkaXVzOiAwLjJlbTtcblx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRmb250LWZhbWlseTogUmFqZGhhbmksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcblx0XHRmb250LXNpemU6IDEuMmVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA4MDA7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gMWVtKTtcblx0XHRtYXgtd2lkdGg6IDE2ZW07XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG5cdFx0LmxlZnQsIC5yaWdodCB7XG5cdFx0XHRtYXgtd2lkdGg6IDMyZW07XG5cdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHR9XG5cblx0XHRoMSB7XG5cdFx0XHRmb250LXNpemU6IDhlbTtcblx0XHR9XG5cblx0XHRoMiB7XG5cdFx0XHRmb250LXNpemU6IDJlbTtcblx0XHRcdG1heC13aWR0aDogbm9uZTtcblx0XHR9XG5cblx0XHRsaSB7XG5cdFx0XHRmb250LXNpemU6IDEuMmVtO1xuXHRcdH1cblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xuXHRcdC5oZXJvIHtcblx0XHRcdHBhZGRpbmc6IDZlbSAxZW0gMmVtIDFlbTtcblx0XHRcdG1heC13aWR0aDogNjRlbTtcblx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdH1cblxuXHRcdC5sZWZ0IHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0d2lkdGg6IDQwJTtcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0fVxuXG5cdFx0LnJpZ2h0IHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0d2lkdGg6IDYwJTtcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0fVxuXG5cdFx0aDEge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0cmlnaHQ6IDNyZW07XG5cdFx0XHRtYXJnaW4tdG9wOiAxLjRyZW07XG5cdFx0XHRmb250LXNpemU6IDhlbTtcblx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdH1cblxuXHRcdGgyIHtcblx0XHRcdGZvbnQtc2l6ZTogMi44ZW07XG5cdFx0XHRsaW5lLWhlaWdodDogMS4yO1xuXHRcdFx0bWFyZ2luOiAwIDAgMnJlbSAwO1xuXHRcdFx0bWF4LXdpZHRoOiAxMWVtO1xuXHRcdH1cblx0fVxuXG5cdGRpdiB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHBhZGRpbmc6IDNlbSAwIDAgMDtcblx0XHRvdmVyZmxvdy14OiBoaWRkZW47XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0XHRkaXYge1xuXHRcdFx0cGFkZGluZzogNGVtIDAgMCAwO1xuXHRcdH1cblx0fVxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz0naGVybyc+XG5cdDxkaXYgY2xhc3M9J2xlZnQnPlxuXHRcdDxoMT5BdHJleXU8L2gxPlxuXHQ8L2Rpdj5cblxuXHQ8ZGl2IGNsYXNzPSdyaWdodCc+XG5cdFx0PGgyPkN1dHRpbmcgZWRnZSB3ZWIgYXBwbGljYXRpb25zPC9oMj5cblxuXHRcdDx1bD5cblx0XHRcdDxsaT48c3Ryb25nPkF0cmV5dTwvc3Ryb25nPiBjb21iaW5lcyA8YSBocmVmPSdodHRwczovL3N2ZWx0ZS5kZXYnPnN2ZWx0ZTwvYT4gd2l0aCBhIHVuaXF1ZSBhcHBsaWNhdGlvbiBvZiA8YSBocmVmPSdodHRwczovL2ZhbGNvcmpzLm9yZyc+ZmFsY29yPC9hPiBmb3IgZGF0YSBhbmQgc3RhdGUgbWFuYW5nZW1lbnQuPC9saT5cblx0XHRcdDxsaT5BdHJleXUgaXMgZm9yIHBvd2VyZnVsIHdlYiBhcHBsaWNhdGlvbnMgYW5kIHNhcHBlciBmb3Igd2ViIHBhZ2VzLjwvbGk+XG5cdFx0XHQ8bGk+QW4gYWx0ZXJuYXRpdmUgdG8gcmVhY3QsIHJlZHV4IGFuZCBncmFwaFFMLjwvbGk+XG5cdFx0PC91bD5cblxuXHRcdDxhIGNsYXNzPSdsZWFybi1hdHJleXUnIGhyZWY9J2d1aWRlJz5MZWFybiBBdHJleXU8L2E+XG5cdDwvZGl2PlxuPC9kaXY+XG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQyxLQUFLLHVCQUFDLENBQUMsQUFDTixRQUFRLENBQUUsUUFBUSxDQUNsQixPQUFPLENBQUUsR0FBRyxDQUFDLEdBQUcsQ0FHaEIsZ0JBQWdCLENBQUUsS0FBSyxDQUN2QixLQUFLLENBQUUsSUFBSSxDQUNYLEtBQUssQ0FBRSxHQUFHLENBQ1YsVUFBVSxDQUFFLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDN0IsVUFBVSxDQUFFLFVBQVUsQUFDdkIsQ0FBQyxBQUVELEVBQUUsdUJBQUMsQ0FBQyxBQUNILFNBQVMsQ0FBRSxJQUFJLENBQ2YsT0FBTyxDQUFFLENBQUMsQ0FDVixNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxBQUNsQixDQUFDLEFBRUQsRUFBRSx1QkFBQyxDQUFDLEFBQ0gsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsVUFBVSxDQUFFLElBQUksQ0FDaEIsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDakIsV0FBVyxDQUFFLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGlCQUFpQixDQUM1SixLQUFLLENBQUUsSUFBSSxBQUNaLENBQUMsQUFFRCx5QkFBRSxRQUFRLEFBQUMsQ0FBQyxBQUNYLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLE9BQU8sQ0FBRSxHQUFHLENBQ1osR0FBRyxDQUFFLEdBQUcsQ0FDUixJQUFJLENBQUUsTUFBTSxDQUNaLFNBQVMsQ0FBRSxLQUFLLENBRWhCLEtBQUssQ0FBRSxJQUFJLEFBQ1osQ0FBQyxBQUVELE1BQU0sdUJBQUMsQ0FBQyxBQUNQLE1BQU0sQ0FBRSxDQUFDLENBQUMsSUFBSSxDQUNkLEtBQUssQ0FBRSxJQUFJLEFBQ1osQ0FBQyxBQUVELEtBQUssdUJBQUMsQ0FBQyxBQUNOLE9BQU8sQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEFBQ25CLENBQUMsQUFFRCxFQUFFLHVCQUFDLENBQUMsQUFDSCxPQUFPLENBQUUsS0FBSyxDQUNkLEtBQUssQ0FBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQ3JCLFNBQVMsQ0FBRSxJQUFJLENBQ2YsV0FBVyxDQUFFLEdBQUcsQ0FDaEIsV0FBVyxDQUFFLENBQUMsQ0FDZCxNQUFNLENBQUUsQ0FBQyxDQUNULGNBQWMsQ0FBRSxTQUFTLENBQ3pCLE9BQU8sQ0FBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEFBQ3JCLENBQUMsQUFFRCxNQUFNLHVCQUFDLENBQUMsQUFDUCxPQUFPLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUNsQixNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxBQUNsQixDQUFDLEFBRUQsRUFBRSx1QkFBQyxDQUFDLEFBQ0gsU0FBUyxDQUFFLEtBQUssQ0FDaEIsV0FBVyxDQUFFLEdBQUcsQ0FDaEIsT0FBTyxDQUFFLEtBQUssQ0FDZCxNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUNsQixTQUFTLENBQUUsSUFBSSxBQUNoQixDQUFDLEFBRUQsYUFBYSx1QkFBQyxDQUFDLEFBQ2QsZ0JBQWdCLENBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUNoQyxLQUFLLENBQUUsS0FBSyxDQUNaLE9BQU8sQ0FBRSxLQUFLLENBQUMsR0FBRyxDQUNsQixhQUFhLENBQUUsS0FBSyxDQUNwQixXQUFXLENBQUUsQ0FBQyxDQUNkLFdBQVcsQ0FBRSxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxpQkFBaUIsQ0FDNUosU0FBUyxDQUFFLEtBQUssQ0FDaEIsV0FBVyxDQUFFLEdBQUcsQ0FDaEIsY0FBYyxDQUFFLFNBQVMsQ0FDekIsS0FBSyxDQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDdkIsU0FBUyxDQUFFLElBQUksQ0FDZixPQUFPLENBQUUsS0FBSyxDQUNkLFVBQVUsQ0FBRSxNQUFNLEFBQ25CLENBQUMsQUFFRCxNQUFNLEFBQUMsWUFBWSxLQUFLLENBQUMsQUFBQyxDQUFDLEFBQzFCLDRCQUFLLENBQUUsTUFBTSx1QkFBQyxDQUFDLEFBQ2QsU0FBUyxDQUFFLElBQUksQ0FDZixNQUFNLENBQUUsQ0FBQyxDQUFDLElBQUksQUFDZixDQUFDLEFBRUQsRUFBRSx1QkFBQyxDQUFDLEFBQ0gsU0FBUyxDQUFFLEdBQUcsQUFDZixDQUFDLEFBRUQsRUFBRSx1QkFBQyxDQUFDLEFBQ0gsU0FBUyxDQUFFLEdBQUcsQ0FDZCxTQUFTLENBQUUsSUFBSSxBQUNoQixDQUFDLEFBRUQsRUFBRSx1QkFBQyxDQUFDLEFBQ0gsU0FBUyxDQUFFLEtBQUssQUFDakIsQ0FBQyxBQUNGLENBQUMsQUFFRCxNQUFNLEFBQUMsWUFBWSxLQUFLLENBQUMsQUFBQyxDQUFDLEFBQzFCLEtBQUssdUJBQUMsQ0FBQyxBQUNOLE9BQU8sQ0FBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQ3hCLFNBQVMsQ0FBRSxJQUFJLENBQ2YsTUFBTSxDQUFFLENBQUMsQ0FBQyxJQUFJLEFBQ2YsQ0FBQyxBQUVELEtBQUssdUJBQUMsQ0FBQyxBQUNOLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLEtBQUssQ0FBRSxJQUFJLENBQ1gsS0FBSyxDQUFFLEdBQUcsQ0FDVixVQUFVLENBQUUsVUFBVSxBQUN2QixDQUFDLEFBRUQsTUFBTSx1QkFBQyxDQUFDLEFBQ1AsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsS0FBSyxDQUFFLElBQUksQ0FDWCxLQUFLLENBQUUsR0FBRyxDQUNWLFVBQVUsQ0FBRSxVQUFVLEFBQ3ZCLENBQUMsQUFFRCxFQUFFLHVCQUFDLENBQUMsQUFDSCxRQUFRLENBQUUsUUFBUSxDQUNsQixLQUFLLENBQUUsSUFBSSxDQUNYLFVBQVUsQ0FBRSxNQUFNLENBQ2xCLFNBQVMsQ0FBRSxHQUFHLENBQ2QsVUFBVSxDQUFFLEtBQUssQUFDbEIsQ0FBQyxBQUVELEVBQUUsdUJBQUMsQ0FBQyxBQUNILFNBQVMsQ0FBRSxLQUFLLENBQ2hCLFdBQVcsQ0FBRSxHQUFHLENBQ2hCLE1BQU0sQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ2xCLFNBQVMsQ0FBRSxJQUFJLEFBQ2hCLENBQUMsQUFDRixDQUFDLEFBRUQsR0FBRyx1QkFBQyxDQUFDLEFBQ0osUUFBUSxDQUFFLFFBQVEsQ0FDbEIsT0FBTyxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDbEIsVUFBVSxDQUFFLE1BQU0sQUFDbkIsQ0FBQyxBQUVELE1BQU0sQUFBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDMUIsR0FBRyx1QkFBQyxDQUFDLEFBQ0osT0FBTyxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQUFDbkIsQ0FBQyxBQUNGLENBQUMifQ== */`);
}
function create_fragment2(ctx) {
  let t0;
  let div2;
  let t1;
  let div0;
  let t2;
  let h1;
  let t4;
  let t5;
  let div1;
  let t6;
  let h2;
  let t8;
  let ul;
  let t9;
  let li0;
  let strong;
  let t11;
  let a0;
  let t13;
  let a1;
  let t15;
  let t16;
  let li1;
  let t18;
  let li2;
  let t20;
  let t21;
  let a2;
  let t23;
  let t24;
  const block = {
    c: function create() {
      t0 = text("\n\n");
      div2 = element("div");
      t1 = text("\n	");
      div0 = element("div");
      t2 = text("\n		");
      h1 = element("h1");
      h1.textContent = "Atreyu";
      t4 = text("\n	");
      t5 = text("\n\n	");
      div1 = element("div");
      t6 = text("\n		");
      h2 = element("h2");
      h2.textContent = "Cutting edge web applications";
      t8 = text("\n\n		");
      ul = element("ul");
      t9 = text("\n			");
      li0 = element("li");
      strong = element("strong");
      strong.textContent = "Atreyu";
      t11 = text(" combines ");
      a0 = element("a");
      a0.textContent = "/_ayu/build/deps/svelte-internal.js";
      t13 = text(" with a unique application of ");
      a1 = element("a");
      a1.textContent = "falcor";
      t15 = text(" for data and state manangement.");
      t16 = text("\n			");
      li1 = element("li");
      li1.textContent = "Atreyu is for powerful web applications and sapper for web pages.";
      t18 = text("\n			");
      li2 = element("li");
      li2.textContent = "An alternative to react, redux and graphQL.";
      t20 = text("\n		");
      t21 = text("\n\n		");
      a2 = element("a");
      a2.textContent = "Learn Atreyu";
      t23 = text("\n	");
      t24 = text("\n");
      attr_dev(h1, "class", "ayu_components_landing");
      add_location(h1, file2, 158, 2, 2493);
      attr_dev(div0, "class", "left ayu_components_landing");
      add_location(div0, file2, 157, 1, 2472);
      attr_dev(h2, "class", "ayu_components_landing");
      add_location(h2, file2, 162, 2, 2541);
      attr_dev(strong, "class", "ayu_components_landing");
      add_location(strong, file2, 165, 7, 2595);
      attr_dev(a0, "href", "https://svelte.dev");
      add_location(a0, file2, 165, 40, 2628);
      attr_dev(a1, "href", "https://falcorjs.org");
      add_location(a1, file2, 165, 109, 2697);
      attr_dev(li0, "class", "ayu_components_landing");
      add_location(li0, file2, 165, 3, 2591);
      attr_dev(li1, "class", "ayu_components_landing");
      add_location(li1, file2, 166, 3, 2779);
      attr_dev(li2, "class", "ayu_components_landing");
      add_location(li2, file2, 167, 3, 2857);
      attr_dev(ul, "class", "ayu_components_landing");
      add_location(ul, file2, 164, 2, 2583);
      attr_dev(a2, "class", "learn-atreyu ayu_components_landing");
      attr_dev(a2, "href", "guide");
      add_location(a2, file2, 170, 2, 2921);
      attr_dev(div1, "class", "right ayu_components_landing");
      add_location(div1, file2, 161, 1, 2519);
      attr_dev(div2, "class", "hero ayu_components_landing");
      add_location(div2, file2, 156, 0, 2452);
    },
    l: function claim(nodes2) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div2, anchor);
      append_dev(div2, t1);
      append_dev(div2, div0);
      append_dev(div0, t2);
      append_dev(div0, h1);
      append_dev(div0, t4);
      append_dev(div2, t5);
      append_dev(div2, div1);
      append_dev(div1, t6);
      append_dev(div1, h2);
      append_dev(div1, t8);
      append_dev(div1, ul);
      append_dev(ul, t9);
      append_dev(ul, li0);
      append_dev(li0, strong);
      append_dev(li0, t11);
      append_dev(li0, a0);
      append_dev(li0, t13);
      append_dev(li0, a1);
      append_dev(li0, t15);
      append_dev(ul, t16);
      append_dev(ul, li1);
      append_dev(ul, t18);
      append_dev(ul, li2);
      append_dev(ul, t20);
      append_dev(div1, t21);
      append_dev(div1, a2);
      append_dev(div1, t23);
      append_dev(div2, t24);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(div2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance2($$self, $$props) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Landing", slots, []);
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Landing> was created with unknown prop '${key}'`);
  });
  return [];
}
var Landing = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance2, create_fragment2, safe_not_equal, {}, add_css2);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Landing",
      options,
      id: create_fragment2.name
    });
  }
};
var Landing_default = Landing;

// app/src/components/examples/examplesNav.js
var examplesNav = [
  {
    title: "Hello World",
    slug: "hello_world"
  },
  {
    title: "Nested Components",
    slug: "nested_components"
  },
  {
    title: "Reactive Assignments",
    slug: "reactive_assignments"
  },
  {
    title: "Reactive Declarations",
    slug: "reactive_declarations"
  },
  {
    title: "Reactive Statements",
    slug: "reactive_statements"
  },
  {
    title: "If Blocks",
    slug: "if_blocks"
  },
  {
    title: "Slots",
    slug: "slots"
  },
  {
    title: "Slot Fallbacks",
    slug: "slot_fallbacks"
  },
  {
    title: "Named Slots",
    slug: "named_slots"
  },
  {
    title: "Modal",
    slug: "modal"
  },
  {
    title: "TodoMvc with SvelteStore",
    slug: "todo_mvc_svelte_store"
  },
  {
    title: "TodoMvc with Atreyu",
    slug: "todo_mvc_atreyu"
  },
  {
    title: "TodoMvc with Atreyu and pouchdb",
    slug: "todo_mvc_atreyu_pouch"
  }
];
var examplesNav_default = examplesNav;

// ../../atreyu/app/src/components/sidebar-layout/components/menu-toggle-btn.svelte
var file3 = "componentsmenu-toggle-btn.svelte";
function add_css3(target) {
  append_styles(target, "ayu_components_menu-toggle-btn", '.menu-toggle-button.ayu_components_menu-toggle-btn.ayu_components_menu-toggle-btn{position:absolute;width:15px;height:70px;top:45%;transition:opacity .2s ease;transition-delay:.3s;cursor:col-resize;opacity:0;margin:7px}.menu-devider.ayu_components_menu-toggle-btn.ayu_components_menu-toggle-btn{cursor:col-resize;position:absolute;padding-left:4px;padding-right:20px;height:100%;width:2px;overflow:visible;border-left:1px solid transparent}.menu-toggle-button.ayu_components_menu-toggle-btn.ayu_components_menu-toggle-btn:hover,.menu-devider.ayu_components_menu-toggle-btn:hover .menu-toggle-button.ayu_components_menu-toggle-btn{opacity:1}.menu-toggle-button.ayu_components_menu-toggle-btn.ayu_components_menu-toggle-btn::after{position:absolute;display:flex;flex-direction:row;align-items:center;justify-content:flex-end;content:"";background-color:#c3c3c3;border-radius:25px;width:8px;height:70px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS10b2dnbGUtYnRuLnN2ZWx0ZSIsInNvdXJjZXMiOlsibWVudS10b2dnbGUtYnRuLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnXG5cbiAgZXhwb3J0IGxldCBwYXJlbnROb2RlXG4gIGV4cG9ydCBsZXQgc2lkZWJhckNsb3NlZFxuICBleHBvcnQgbGV0IHNpZGVXaWR0aCA9ICcyNDBweCdcbiAgbGV0IHRlbXBXaWR0aCA9IHNpZGVXaWR0aFxuXG4gICQ6IGlmIChzaWRlYmFyQ2xvc2VkKSB7XG4gICAgdGVtcFdpZHRoID0gc2lkZVdpZHRoXG4gICAgc2lkZVdpZHRoID0gMFxuICB9XG5cbiAgJDogaWYgKCFzaWRlYmFyQ2xvc2VkKSB7XG4gICAgc2lkZVdpZHRoID0gdGVtcFdpZHRoXG4gIH1cblxuICBsZXQgaXNNb3ZpbmcgPSBmYWxzZVxuICBsZXQgaXNNb3VzZURvd24gPSBmYWxzZVxuICBsZXQgaXNUb2dnbGluZyA9IGZhbHNlXG4gIGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKClcblxuICBsZXQgbGFzdE9mZnNldCA9IDBcbiAgZnVuY3Rpb24gbW91c2Vkb3duSGFuZGxlciAoZSkge1xuICAgIGxhc3RPZmZzZXQgPSBwYXJlbnROb2RlPy5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpPy5sZWZ0IHx8IDBcbiAgICBpc01vdXNlRG93biA9IHRydWVcbiAgICBpc1RvZ2dsaW5nID0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gbW91c2Vtb3ZlSGFuZGxlciAoZXZlbnQpIHtcbiAgICBpc01vdmluZyA9IHRydWVcbiAgICBpZiAoaXNNb3VzZURvd24gPT09IHRydWUgJiYgIXNpZGViYXJDbG9zZWQpIHtcbiAgICAgIGRpc3BhdGNoKCdzaWRlYmFyUmVzaXplJywge1xuICAgICAgICB3aWR0aDogZXZlbnQuY2xpZW50WCAtIGxhc3RPZmZzZXRcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGlzTW92aW5nID0gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNldXBIYW5kbGVyIChlKSB7XG4gICAgaWYgKCFpc01vdmluZyAmJiBpc1RvZ2dsaW5nKSB7XG4gICAgICBkaXNwYXRjaCgnc2lkZWJhclRvZ2dsZScpXG4gICAgfVxuICAgIGlzTW91c2VEb3duID0gZmFsc2VcbiAgICBpc01vdmluZyA9IGZhbHNlXG4gICAgaXNUb2dnbGluZyA9IGZhbHNlXG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5tZW51LXRvZ2dsZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgdG9wOjQ1JTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IC4zcztcbiAgICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBtYXJnaW46IDdweDtcbiAgfVxuICAubWVudS1kZXZpZGVyIHtcbiAgICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAycHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuICAvKiAubWVudS1kZXZpZGVyOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XG4gIH0gKi9cbiAgLm1lbnUtdG9nZ2xlLWJ1dHRvbjpob3ZlciwgLm1lbnUtZGV2aWRlcjpob3ZlciAubWVudS10b2dnbGUtYnV0dG9uIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIC5tZW51LXRvZ2dsZS1idXR0b246OmFmdGVyIHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MzYzNjMztcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOndpbmRvdyBvbjptb3VzZXVwPXttb3VzZXVwSGFuZGxlcn0gb246bW91c2Vtb3ZlPXttb3VzZW1vdmVIYW5kbGVyfS8+XG5cbjxkaXYgY2xhc3M9XCJtZW51LWRldmlkZXJcIiBzdHlsZT1cImxlZnQ6IHtzaWRlV2lkdGh9O1wiIG9uOm1vdXNlZG93bj17bW91c2Vkb3duSGFuZGxlcn0+XG4gIDxkaXYgY2xhc3M9XCJtZW51LXRvZ2dsZS1idXR0b25cIiBvbjptb3VzZWRvd249e21vdXNlZG93bkhhbmRsZXJ9PjwvZGl2PlxuPC9kaXY+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9ERSxtQkFBbUIsOERBQUMsQ0FBQyxBQUNuQixRQUFRLENBQUUsUUFBUSxDQUNsQixLQUFLLENBQUUsSUFBSSxDQUNYLE1BQU0sQ0FBRSxJQUFJLENBQ1osSUFBSSxHQUFHLENBQ1AsVUFBVSxDQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUM1QixnQkFBZ0IsQ0FBRSxHQUFHLENBQ3JCLE1BQU0sQ0FBRSxVQUFVLENBQ2xCLE9BQU8sQ0FBRSxDQUFDLENBQ1YsTUFBTSxDQUFFLEdBQUcsQUFDYixDQUFDLEFBQ0QsYUFBYSw4REFBQyxDQUFDLEFBQ2IsTUFBTSxDQUFFLFVBQVUsQ0FDbEIsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsWUFBWSxDQUFFLEdBQUcsQ0FDakIsYUFBYSxDQUFFLElBQUksQ0FDbkIsTUFBTSxDQUFFLElBQUksQ0FDWixLQUFLLENBQUUsR0FBRyxDQUNWLFFBQVEsQ0FBRSxPQUFPLENBQ2pCLFdBQVcsQ0FBRSxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQUFDcEMsQ0FBQyxBQUlELGlGQUFtQixNQUFNLENBQUUsNENBQWEsTUFBTSxDQUFDLG1CQUFtQiwrQkFBQyxDQUFDLEFBQ2xFLE9BQU8sQ0FBRSxDQUFDLEFBQ1osQ0FBQyxBQUNELGlGQUFtQixPQUFPLEFBQUMsQ0FBQyxBQUMxQixTQUFTLFFBQVEsQ0FDakIsT0FBTyxDQUFFLElBQUksQ0FDYixjQUFjLENBQUUsR0FBRyxDQUNuQixXQUFXLENBQUUsTUFBTSxDQUNuQixlQUFlLENBQUUsUUFBUSxDQUN6QixPQUFPLENBQUUsRUFBRSxDQUNYLGdCQUFnQixDQUFFLE9BQU8sQ0FDekIsYUFBYSxDQUFFLElBQUksQ0FDbkIsS0FBSyxDQUFFLEdBQUcsQ0FDVixNQUFNLENBQUUsSUFBSSxBQUNkLENBQUMifQ== */');
}
function create_fragment3(ctx) {
  let t0;
  let div1;
  let t1;
  let div0;
  let t2;
  let mounted;
  let dispose2;
  const block = {
    c: function create() {
      t0 = text("\n\n\n\n\n\n");
      div1 = element("div");
      t1 = text("\n  ");
      div0 = element("div");
      t2 = text("\n");
      attr_dev(div0, "class", "menu-toggle-button ayu_components_menu-toggle-btn");
      add_location(div0, file3, 96, 2, 2060);
      attr_dev(div1, "class", "menu-devider ayu_components_menu-toggle-btn");
      set_style(div1, "left", ctx[0]);
      add_location(div1, file3, 95, 0, 1972);
    },
    l: function claim(nodes2) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, t1);
      append_dev(div1, div0);
      append_dev(div1, t2);
      if (!mounted) {
        dispose2 = [
          listen_dev(window, "mouseup", ctx[3], false, false, false),
          listen_dev(window, "mousemove", ctx[2], false, false, false),
          listen_dev(div0, "mousedown", ctx[1], false, false, false),
          listen_dev(div1, "mousedown", ctx[1], false, false, false)
        ];
        mounted = true;
      }
    },
    p: function update2(ctx2, [dirty]) {
      if (dirty & 1) {
        set_style(div1, "left", ctx2[0]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(div1);
      mounted = false;
      run_all(dispose2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Menu_toggle_btn", slots, []);
  let { parentNode } = $$props;
  let { sidebarClosed } = $$props;
  let { sideWidth = "240px" } = $$props;
  let tempWidth = sideWidth;
  let isMoving = false;
  let isMouseDown = false;
  let isToggling = false;
  const dispatch = createEventDispatcher();
  let lastOffset = 0;
  function mousedownHandler(e) {
    lastOffset = parentNode?.getBoundingClientRect?.()?.left || 0;
    isMouseDown = true;
    isToggling = true;
  }
  function mousemoveHandler(event) {
    isMoving = true;
    if (isMouseDown === true && !sidebarClosed) {
      dispatch("sidebarResize", { width: event.clientX - lastOffset });
      return true;
    }
    isMoving = false;
  }
  function mouseupHandler(e) {
    if (!isMoving && isToggling) {
      dispatch("sidebarToggle");
    }
    isMouseDown = false;
    isMoving = false;
    isToggling = false;
  }
  const writable_props = ["parentNode", "sidebarClosed", "sideWidth"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Menu_toggle_btn> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("parentNode" in $$props2)
      $$invalidate(4, parentNode = $$props2.parentNode);
    if ("sidebarClosed" in $$props2)
      $$invalidate(5, sidebarClosed = $$props2.sidebarClosed);
    if ("sideWidth" in $$props2)
      $$invalidate(0, sideWidth = $$props2.sideWidth);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    parentNode,
    sidebarClosed,
    sideWidth,
    tempWidth,
    isMoving,
    isMouseDown,
    isToggling,
    dispatch,
    lastOffset,
    mousedownHandler,
    mousemoveHandler,
    mouseupHandler
  });
  $$self.$inject_state = ($$props2) => {
    if ("parentNode" in $$props2)
      $$invalidate(4, parentNode = $$props2.parentNode);
    if ("sidebarClosed" in $$props2)
      $$invalidate(5, sidebarClosed = $$props2.sidebarClosed);
    if ("sideWidth" in $$props2)
      $$invalidate(0, sideWidth = $$props2.sideWidth);
    if ("tempWidth" in $$props2)
      $$invalidate(6, tempWidth = $$props2.tempWidth);
    if ("isMoving" in $$props2)
      isMoving = $$props2.isMoving;
    if ("isMouseDown" in $$props2)
      isMouseDown = $$props2.isMouseDown;
    if ("isToggling" in $$props2)
      isToggling = $$props2.isToggling;
    if ("lastOffset" in $$props2)
      lastOffset = $$props2.lastOffset;
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 33) {
      $:
        if (sidebarClosed) {
          $$invalidate(6, tempWidth = sideWidth);
          $$invalidate(0, sideWidth = 0);
        }
    }
    if ($$self.$$.dirty & 96) {
      $:
        if (!sidebarClosed) {
          $$invalidate(0, sideWidth = tempWidth);
        }
    }
  };
  return [
    sideWidth,
    mousedownHandler,
    mousemoveHandler,
    mouseupHandler,
    parentNode,
    sidebarClosed,
    tempWidth
  ];
}
var Menu_toggle_btn = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance3,
      create_fragment3,
      safe_not_equal,
      {
        parentNode: 4,
        sidebarClosed: 5,
        sideWidth: 0
      },
      add_css3
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Menu_toggle_btn",
      options,
      id: create_fragment3.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[4] === void 0 && !("parentNode" in props)) {
      console.warn("<Menu_toggle_btn> was created without expected prop 'parentNode'");
    }
    if (ctx[5] === void 0 && !("sidebarClosed" in props)) {
      console.warn("<Menu_toggle_btn> was created without expected prop 'sidebarClosed'");
    }
  }
  get parentNode() {
    throw new Error("<Menu_toggle_btn>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set parentNode(value) {
    throw new Error("<Menu_toggle_btn>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get sidebarClosed() {
    throw new Error("<Menu_toggle_btn>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set sidebarClosed(value) {
    throw new Error("<Menu_toggle_btn>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get sideWidth() {
    throw new Error("<Menu_toggle_btn>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set sideWidth(value) {
    throw new Error("<Menu_toggle_btn>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var menu_toggle_btn_default = Menu_toggle_btn;

// ../../atreyu/app/src/components/sidebar-layout/components/sidebar-layout.svelte
var file4 = "componentssidebar-layout.svelte";
function add_css4(target) {
  append_styles(target, "ayu_components_sidebar-layout", ".with-sidebar.ayu_components_sidebar-layout{overflow:hidden;display:flex;flex-wrap:wrap;height:var(--height);padding-top:var(--top)}.with-sidebar.right.ayu_components_sidebar-layout{flex-direction:row-reverse}.with-sidebar.ayu_components_sidebar-layout>*{flex-grow:1;flex-basis:var(--side-width);height:100%;overflow:auto}.with-sidebar.closed.ayu_components_sidebar-layout>*{width:0;flex-basis:auto;flex-grow:0;margin:0;transition:all .2s ease-in}.with-sidebar.closed.ayu_components_sidebar-layout>:first-child{display:none}.with-sidebar.closed > .sidebar{min-width:0!important}.with-sidebar.ayu_components_sidebar-layout>:last-child{flex-basis:0;flex-grow:999}.with-sidebar.ayu_components_sidebar-layout>:first-child:hover .menu-toggle-button{transition-delay:.1s;opacity:.9}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1sYXlvdXQuc3ZlbHRlIiwic291cmNlcyI6WyJzaWRlYmFyLWxheW91dC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IE1lbnVUb2dnbGVCdG4gZnJvbSAnLi9tZW51LXRvZ2dsZS1idG4uc3ZlbHRlJ1xuXG4gIGV4cG9ydCBsZXQgcmlnaHQgPSBmYWxzZVxuICAvLyBSZXByZXNlbnRzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciB3aGVuIGFkamFjZW50LiBJZiBub3Qgc2V0IChudWxsKSBpdCBkZWZhdWx0cyB0byB0aGUgc2lkZWJhcidzIGNvbnRlbnQgd2lkdGhcbiAgLy8gLndpdGgtc2lkZWJhciA+IDpnbG9iYWwoKikgPiA6Z2xvYmFsKCopIHtmbGV4LWJhc2lzOiBzaWRlV2lkdGh9XG4gIGV4cG9ydCBsZXQgc2lkZVdpZHRoID0gJ2F1dG8nXG4gIC8vIEEgQ1NTIHBlcmNlbnRhZ2UgdmFsdWUuIFRoZSBtaW5pbXVtIHdpZHRoIG9mIHRoZSBjb250ZW50IGVsZW1lbnQgaW4gdGhlIGhvcml6b250YWwgY29uZmlndXJhdGlvblxuICAvLyAud2l0aC1zaWRlYmFyID4gOmdsb2JhbCgqKSA+IDpnbG9iYWwoOmxhc3QtY2hpbGQpIHttaW4td2lkdGg6IGNhbGMoY29udGVudE1pbiAtIHZhcigtLXNwYWNlKSl9XG4gIGV4cG9ydCBsZXQgY29udGVudE1pbiA9IDUwXG4gIGV4cG9ydCBsZXQgaGVpZ2h0ID0gJzEwMHZoJ1xuICBleHBvcnQgbGV0IHRvcCA9ICcwJ1xuXG4gIGxldCBzaWRlYmFyQ2xvc2VkID0gZmFsc2VcbiAgbGV0IG5vZGVcblxuICAvLyBmdW5jdGlvbiBoYW5kbGVLZXlkb3duIChlKSB7XG4gIC8vICAgaWYgKHRhZy5sZW5ndGggPiAwICYmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gJ1RhYicpKSB7XG4gIC8vICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgLy8gICAgIHRhZ2xpc3QgPSBbLi4udGFnbGlzdCwgdGFnXVxuICAvLyAgICAgdGFnID0gJydcbiAgLy8gICB9XG4gIC8vIH1cblxuICBmdW5jdGlvbiByZXNpemVTaWRlSGFuZGxlciAoZXZlbnQpIHtcbiAgICBzaWRlV2lkdGggPSBldmVudC5kZXRhaWwud2lkdGggKyAncHgnXG4gICAgLy8gaWYgKHNpZGVXaWR0aCA8IDE4MCkge1xuICAgIC8vICAgc2lkZWJhckNsb3NlZCA9IHRydWVcbiAgICAvLyB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC8qIFRPRE86IG9ubHkgZXZhbHVhdGUgb24gc2lkZWJhciBhbmQgY29udGVudCBjbGFzc2VzICovXG5cbiAgLndpdGgtc2lkZWJhciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XG4gICAgcGFkZGluZy10b3A6IHZhcigtLXRvcCk7XG4gIH1cblxuICAud2l0aC1zaWRlYmFyLnJpZ2h0e1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgfVxuXG4gIC53aXRoLXNpZGViYXIgPiA6Z2xvYmFsKCopIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZmxleC1iYXNpczogdmFyKC0tc2lkZS13aWR0aCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLndpdGgtc2lkZWJhci5jbG9zZWQgPiA6Z2xvYmFsKCopIHtcbiAgICB3aWR0aDogMDtcbiAgICBmbGV4LWJhc2lzOiBhdXRvO1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluO1xuICB9XG5cbiAgLndpdGgtc2lkZWJhci5jbG9zZWQgPiA6Z2xvYmFsKDpmaXJzdC1jaGlsZCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICA6Z2xvYmFsKC53aXRoLXNpZGViYXIuY2xvc2VkID4gLnNpZGViYXIpIHtcbiAgICBtaW4td2lkdGg6IDAhaW1wb3J0YW50O1xuICB9XG5cbiAgLndpdGgtc2lkZWJhciA+IDpnbG9iYWwoOmxhc3QtY2hpbGQpIHtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIGZsZXgtZ3JvdzogOTk5O1xuICAgIC8qIFRPRE86IGZpbmQgbGVzcyBoYWNreSB3b3JrYW91bmQgKi9cbiAgICAvKiBtaW4td2lkdGg6IGNhbGMoMSUgKiB2YXIoLS1jb250ZW50LW1pbikpOyAgKi9cbiAgfVxuXG4gIC8qIC53aXRoLXNpZGViYXIgPiA6Z2xvYmFsKDpmaXJzdC1jaGlsZCk6OmFmdGVyIHsgIFRPRE86IHRoaXMgY3JlYXRlcyBhbiB1bmNsaWNrYWJsZSBkZWFkem9uZSBvbiB0aGUgYnV0dG9uLCBmaXggbmVlZGVkXG4gICAgLyogY29udGVudDpcIlwiO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6MTVyZW07XG4gICAgdG9wOjA7XG4gIH1cblxuICAgLndpdGgtc2lkZWJhci5jbG9zZWQgPiA6Z2xvYmFsKDpmaXJzdC1jaGlsZCk6OmFmdGVyIHtcbiAgICBsZWZ0OjA7XG4gIH0gKi9cblxuICAud2l0aC1zaWRlYmFyID4gOmdsb2JhbCg6Zmlyc3QtY2hpbGQ6aG92ZXIpIDpnbG9iYWwoLm1lbnUtdG9nZ2xlLWJ1dHRvbil7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjFzO1xuICAgIG9wYWNpdHk6IC45O1xuICB9XG5cbjwvc3R5bGU+XG5cbjxkaXYgYmluZDp0aGlzPXtub2RlfSBjbGFzcz1cIndpdGgtc2lkZWJhclwiIGNsYXNzOmNsb3NlZD17c2lkZWJhckNsb3NlZH0gY2xhc3M6cmlnaHQgc3R5bGU9XCItLWhlaWdodDoge2hlaWdodH07IC0tdG9wOiB7dG9wfTsgLS1zaWRlLXdpZHRoOiB7c2lkZVdpZHRofTsgLS1jb250ZW50LW1pbjoge2NvbnRlbnRNaW59O1wiPlxuICA8c2xvdCBuYW1lPVwic2lkZWJhclwiPjwvc2xvdD5cblxuICA8TWVudVRvZ2dsZUJ0blxuICAgIHBhcmVudE5vZGU9e25vZGV9XG4gICAge3NpZGViYXJDbG9zZWR9XG4gICAgb246c2lkZWJhclRvZ2dsZT17KCkgPT4geyBzaWRlYmFyQ2xvc2VkID0gIXNpZGViYXJDbG9zZWQgfX1cbiAgICBvbjpzaWRlYmFyUmVzaXplPXtyZXNpemVTaWRlSGFuZGxlcn1cbiAgICB7c2lkZVdpZHRofVxuICAvPlxuXG4gIDxzbG90IG5hbWU9XCJtYWluXCI+PC9zbG90PlxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNFLGFBQWEsOEJBQUMsQ0FBQyxBQUNiLFFBQVEsQ0FBRSxNQUFNLENBQ2hCLE9BQU8sQ0FBRSxJQUFJLENBQ2IsU0FBUyxDQUFFLElBQUksQ0FDZixNQUFNLENBQUUsSUFBSSxRQUFRLENBQUMsQ0FDckIsV0FBVyxDQUFFLElBQUksS0FBSyxDQUFDLEFBQ3pCLENBQUMsQUFFRCxhQUFhLG9DQUFNLENBQUMsQUFDbEIsY0FBYyxDQUFFLFdBQVcsQUFDN0IsQ0FBQyxBQUVELDJDQUFhLENBQVcsQ0FBQyxBQUFFLENBQUMsQUFDMUIsU0FBUyxDQUFFLENBQUMsQ0FDWixVQUFVLENBQUUsSUFBSSxZQUFZLENBQUMsQ0FDN0IsTUFBTSxDQUFFLElBQUksQ0FDWixRQUFRLENBQUUsSUFBSSxBQUNoQixDQUFDLEFBRUQsYUFBYSxxQ0FBTyxDQUFXLENBQUMsQUFBRSxDQUFDLEFBQ2pDLEtBQUssQ0FBRSxDQUFDLENBQ1IsVUFBVSxDQUFFLElBQUksQ0FDaEIsU0FBUyxDQUFFLENBQUMsQ0FDWixNQUFNLENBQUUsQ0FBQyxDQUNULFVBQVUsQ0FBRSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQUFDN0IsQ0FBQyxBQUVELGFBQWEscUNBQU8sQ0FBVyxZQUFZLEFBQUUsQ0FBQyxBQUM1QyxPQUFPLENBQUUsSUFBSSxBQUNmLENBQUMsQUFFTywrQkFBK0IsQUFBRSxDQUFDLEFBQ3hDLFNBQVMsQ0FBRSxDQUFDLFVBQVUsQUFDeEIsQ0FBQyxBQUVELDJDQUFhLENBQVcsV0FBVyxBQUFFLENBQUMsQUFDcEMsVUFBVSxDQUFFLENBQUMsQ0FDYixTQUFTLENBQUUsR0FBRyxBQUdoQixDQUFDLEFBZUQsMkNBQWEsQ0FBVyxrQkFBa0IsQUFBQyxDQUFDLEFBQVEsbUJBQW1CLEFBQUMsQ0FBQyxBQUN2RSxnQkFBZ0IsQ0FBRSxHQUFHLENBQ3JCLE9BQU8sQ0FBRSxFQUFFLEFBQ2IsQ0FBQyJ9 */");
}
var get_main_slot_changes = (dirty) => ({});
var get_main_slot_context = (ctx) => ({});
var get_sidebar_slot_changes = (dirty) => ({});
var get_sidebar_slot_context = (ctx) => ({});
function create_fragment4(ctx) {
  let t0;
  let div;
  let t1;
  let t2;
  let menutogglebtn;
  let t3;
  let t4;
  let current;
  const sidebar_slot_template = ctx[9].sidebar;
  const sidebar_slot = create_slot(sidebar_slot_template, ctx, ctx[8], get_sidebar_slot_context);
  menutogglebtn = new menu_toggle_btn_default({
    props: {
      parentNode: ctx[6],
      sidebarClosed: ctx[5],
      sideWidth: ctx[0]
    },
    $$inline: true
  });
  menutogglebtn.$on("sidebarToggle", ctx[10]);
  menutogglebtn.$on("sidebarResize", ctx[7]);
  const main_slot_template = ctx[9].main;
  const main_slot = create_slot(main_slot_template, ctx, ctx[8], get_main_slot_context);
  const block = {
    c: function create() {
      t0 = text("\n\n\n\n");
      div = element("div");
      t1 = text("\n  ");
      if (sidebar_slot)
        sidebar_slot.c();
      t2 = text("\n\n  ");
      create_component(menutogglebtn.$$.fragment);
      t3 = text("\n\n  ");
      if (main_slot)
        main_slot.c();
      t4 = text("\n");
      attr_dev(div, "class", "with-sidebar ayu_components_sidebar-layout");
      set_style(div, "--height", ctx[3]);
      set_style(div, "--top", ctx[4]);
      set_style(div, "--side-width", ctx[0]);
      set_style(div, "--content-min", ctx[2]);
      toggle_class(div, "closed", ctx[5]);
      toggle_class(div, "right", ctx[1]);
      add_location(div, file4, 97, 0, 2323);
    },
    l: function claim(nodes2) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, t1);
      if (sidebar_slot) {
        sidebar_slot.m(div, null);
      }
      append_dev(div, t2);
      mount_component(menutogglebtn, div, null);
      append_dev(div, t3);
      if (main_slot) {
        main_slot.m(div, null);
      }
      append_dev(div, t4);
      ctx[11](div);
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      if (sidebar_slot) {
        if (sidebar_slot.p && (!current || dirty & 256)) {
          update_slot_base(
            sidebar_slot,
            sidebar_slot_template,
            ctx2,
            ctx2[8],
            !current ? get_all_dirty_from_scope(ctx2[8]) : get_slot_changes(sidebar_slot_template, ctx2[8], dirty, get_sidebar_slot_changes),
            get_sidebar_slot_context
          );
        }
      }
      const menutogglebtn_changes = {};
      if (dirty & 64)
        menutogglebtn_changes.parentNode = ctx2[6];
      if (dirty & 32)
        menutogglebtn_changes.sidebarClosed = ctx2[5];
      if (dirty & 1)
        menutogglebtn_changes.sideWidth = ctx2[0];
      menutogglebtn.$set(menutogglebtn_changes);
      if (main_slot) {
        if (main_slot.p && (!current || dirty & 256)) {
          update_slot_base(
            main_slot,
            main_slot_template,
            ctx2,
            ctx2[8],
            !current ? get_all_dirty_from_scope(ctx2[8]) : get_slot_changes(main_slot_template, ctx2[8], dirty, get_main_slot_changes),
            get_main_slot_context
          );
        }
      }
      if (!current || dirty & 8) {
        set_style(div, "--height", ctx2[3]);
      }
      if (!current || dirty & 16) {
        set_style(div, "--top", ctx2[4]);
      }
      if (!current || dirty & 1) {
        set_style(div, "--side-width", ctx2[0]);
      }
      if (!current || dirty & 4) {
        set_style(div, "--content-min", ctx2[2]);
      }
      if (dirty & 32) {
        toggle_class(div, "closed", ctx2[5]);
      }
      if (dirty & 2) {
        toggle_class(div, "right", ctx2[1]);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(sidebar_slot, local);
      transition_in(menutogglebtn.$$.fragment, local);
      transition_in(main_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(sidebar_slot, local);
      transition_out(menutogglebtn.$$.fragment, local);
      transition_out(main_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(div);
      if (sidebar_slot)
        sidebar_slot.d(detaching);
      destroy_component(menutogglebtn);
      if (main_slot)
        main_slot.d(detaching);
      ctx[11](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment4.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance4($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Sidebar_layout", slots, ["sidebar", "main"]);
  let { right = false } = $$props;
  let { sideWidth = "auto" } = $$props;
  let { contentMin = 50 } = $$props;
  let { height = "100vh" } = $$props;
  let { top = "0" } = $$props;
  let sidebarClosed = false;
  let node;
  function resizeSideHandler(event) {
    $$invalidate(0, sideWidth = event.detail.width + "px");
  }
  const writable_props = ["right", "sideWidth", "contentMin", "height", "top"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Sidebar_layout> was created with unknown prop '${key}'`);
  });
  const sidebarToggle_handler = () => {
    $$invalidate(5, sidebarClosed = !sidebarClosed);
  };
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      node = $$value;
      $$invalidate(6, node);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("right" in $$props2)
      $$invalidate(1, right = $$props2.right);
    if ("sideWidth" in $$props2)
      $$invalidate(0, sideWidth = $$props2.sideWidth);
    if ("contentMin" in $$props2)
      $$invalidate(2, contentMin = $$props2.contentMin);
    if ("height" in $$props2)
      $$invalidate(3, height = $$props2.height);
    if ("top" in $$props2)
      $$invalidate(4, top = $$props2.top);
    if ("$$scope" in $$props2)
      $$invalidate(8, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    MenuToggleBtn: menu_toggle_btn_default,
    right,
    sideWidth,
    contentMin,
    height,
    top,
    sidebarClosed,
    node,
    resizeSideHandler
  });
  $$self.$inject_state = ($$props2) => {
    if ("right" in $$props2)
      $$invalidate(1, right = $$props2.right);
    if ("sideWidth" in $$props2)
      $$invalidate(0, sideWidth = $$props2.sideWidth);
    if ("contentMin" in $$props2)
      $$invalidate(2, contentMin = $$props2.contentMin);
    if ("height" in $$props2)
      $$invalidate(3, height = $$props2.height);
    if ("top" in $$props2)
      $$invalidate(4, top = $$props2.top);
    if ("sidebarClosed" in $$props2)
      $$invalidate(5, sidebarClosed = $$props2.sidebarClosed);
    if ("node" in $$props2)
      $$invalidate(6, node = $$props2.node);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    sideWidth,
    right,
    contentMin,
    height,
    top,
    sidebarClosed,
    node,
    resizeSideHandler,
    $$scope,
    slots,
    sidebarToggle_handler,
    div_binding
  ];
}
var Sidebar_layout = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance4,
      create_fragment4,
      safe_not_equal,
      {
        right: 1,
        sideWidth: 0,
        contentMin: 2,
        height: 3,
        top: 4
      },
      add_css4
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Sidebar_layout",
      options,
      id: create_fragment4.name
    });
  }
  get right() {
    throw new Error("<Sidebar_layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set right(value) {
    throw new Error("<Sidebar_layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get sideWidth() {
    throw new Error("<Sidebar_layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set sideWidth(value) {
    throw new Error("<Sidebar_layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get contentMin() {
    throw new Error("<Sidebar_layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set contentMin(value) {
    throw new Error("<Sidebar_layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get height() {
    throw new Error("<Sidebar_layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set height(value) {
    throw new Error("<Sidebar_layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get top() {
    throw new Error("<Sidebar_layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set top(value) {
    throw new Error("<Sidebar_layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var sidebar_layout_default = Sidebar_layout;

// app/src/components/examples/index.svelte
var file5 = "examplesindex.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i].slug;
  child_ctx[4] = list[i].title;
  return child_ctx;
}
function create_each_block(ctx) {
  let li;
  let a;
  let t_value = ctx[4] + "";
  let t;
  let a_href_value;
  const block = {
    c: function create() {
      li = element("li");
      a = element("a");
      t = text(t_value);
      attr_dev(a, "href", a_href_value = "/examples/" + ctx[3]);
      add_location(a, file5, 4, 33, 163);
      attr_dev(li, "class", "example_link");
      add_location(li, file5, 4, 8, 138);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, a);
      append_dev(a, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(4:6) {#each exNav as { slug, title }}",
    ctx
  });
  return block;
}
function create_else_block(ctx) {
  let h2;
  const block = {
    c: function create() {
      h2 = element("h2");
      h2.textContent = "Choose an example from the left to explore atreyu";
      add_location(h2, file5, 13, 6, 387);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h2, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(h2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(13:4) {:else}",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = ctx[0][ctx[1].slug];
  function switch_props(ctx2) {
    return { $$inline: true };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }
  const block = {
    c: function create() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert_dev(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      if (switch_value !== (switch_value = ctx2[0][ctx2[1].slug])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
      }
    },
    i: function intro(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(11:4) {#if components[$router.slug] !== undefined}",
    ctx
  });
  return block;
}
function create_default_slot(ctx) {
  let t0;
  let div0;
  let t1;
  let ul;
  let t2;
  let t3;
  let t4;
  let t5;
  let div1;
  let t6;
  let current_block_type_index;
  let if_block;
  let t7;
  let t8;
  let current;
  let each_value = examplesNav_default;
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[0][ctx2[1].slug] !== void 0)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      t0 = text("\n  ");
      div0 = element("div");
      t1 = text("\n    ");
      ul = element("ul");
      t2 = text("\n      ");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t3 = text("\n    ");
      t4 = text("\n  ");
      t5 = text("\n\n  ");
      div1 = element("div");
      t6 = text("\n    ");
      if_block.c();
      t7 = text("\n  ");
      t8 = text("\n");
      add_location(ul, file5, 2, 4, 86);
      attr_dev(div0, "class", "sidebar");
      add_location(div0, file5, 1, 2, 60);
      attr_dev(div1, "class", "main");
      add_location(div1, file5, 9, 2, 243);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div0, anchor);
      append_dev(div0, t1);
      append_dev(div0, ul);
      append_dev(ul, t2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
      append_dev(ul, t3);
      append_dev(div0, t4);
      insert_dev(target, t5, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, t6);
      if_blocks[current_block_type_index].m(div1, null);
      append_dev(div1, t7);
      insert_dev(target, t8, anchor);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      if (dirty & 0) {
        each_value = examplesNav_default;
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, t3);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div1, t7);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(div0);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(t5);
      if (detaching)
        detach_dev(div1);
      if_blocks[current_block_type_index].d();
      if (detaching)
        detach_dev(t8);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: '(1:0) <SidebarLayout closed={false} height=\\"calc(100vh - 4em)\\">',
    ctx
  });
  return block;
}
function create_fragment5(ctx) {
  let sidebarlayout;
  let t;
  let current;
  sidebarlayout = new sidebar_layout_default({
    props: {
      closed: false,
      height: "calc(100vh - 4em)",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(sidebarlayout.$$.fragment);
      t = text("\n\n\n\n");
    },
    l: function claim(nodes2) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(sidebarlayout, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      const sidebarlayout_changes = {};
      if (dirty & 131) {
        sidebarlayout_changes.$$scope = { dirty, ctx: ctx2 };
      }
      sidebarlayout.$set(sidebarlayout_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(sidebarlayout.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(sidebarlayout.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(sidebarlayout, detaching);
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment5.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance5($$self, $$props, $$invalidate) {
  let $router;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Examples", slots, []);
  const { router } = getContext("ayu");
  validate_store(router, "router");
  component_subscribe($$self, router, (value) => $$invalidate(1, $router = value));
  const components2 = {};
  examplesNav_default.forEach((example) => {
    const slug = example.slug;
    import(
      /* webpackChunkName: "example" */
      /* webpackMode: "eager"  */
      /* webpackPreload: true */
      "./" + slug
    ).then((component) => $$invalidate(0, components2[slug] = component.default, components2));
  });
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Examples> was created with unknown prop '${key}'`);
  });
  $$self.$capture_state = () => ({
    getContext,
    exNav: examplesNav_default,
    SidebarLayout: sidebar_layout_default,
    router,
    components: components2,
    $router
  });
  return [components2, $router, router];
}
var Examples = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance5, create_fragment5, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Examples",
      options,
      id: create_fragment5.name
    });
  }
};
var examples_default = Examples;

// app/src/pages/_app.svelte
function create_else_block2(ctx) {
  let landing;
  let current;
  landing = new Landing_default({ $$inline: true });
  const block = {
    c: function create() {
      create_component(landing.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(landing, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(landing.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(landing.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(landing, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block2.name,
    type: "else",
    source: "(15:0) {:else}",
    ctx
  });
  return block;
}
function create_if_block2(ctx) {
  let examples;
  let current;
  examples = new examples_default({ $$inline: true });
  const block = {
    c: function create() {
      create_component(examples.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(examples, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(examples.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(examples.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(examples, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block2.name,
    type: "if",
    source: "(13:0) {#if $router.page === 'examples'}",
    ctx
  });
  return block;
}
function create_fragment6(ctx) {
  let t0;
  let header;
  let t1;
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  header = new Header_default({ $$inline: true });
  const if_block_creators = [create_if_block2, create_else_block2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[0].page === "examples")
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      t0 = text("\r\n\r\n");
      create_component(header.$$.fragment);
      t1 = text("\r\n\r\n");
      if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes2) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      mount_component(header, target, anchor);
      insert_dev(target, t1, anchor);
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2, dirty);
      if (current_block_type_index !== previous_block_index) {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(header.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      destroy_component(header, detaching);
      if (detaching)
        detach_dev(t1);
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment6.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance6($$self, $$props, $$invalidate) {
  let $router;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("App", slots, []);
  const { data, router } = context_default();
  validate_store(router, "router");
  component_subscribe($$self, router, (value) => $$invalidate(0, $router = value));
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<App> was created with unknown prop '${key}'`);
  });
  $$self.$capture_state = () => ({
    setAyuContext: context_default,
    Header: Header_default,
    Landing: Landing_default,
    Examples: examples_default,
    data,
    router,
    $router
  });
  return [$router, router];
}
var App = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance6, create_fragment6, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "App",
      options,
      id: create_fragment6.name
    });
  }
};
var app_default = App;

// app/src/main.js
new app_default({
  target: document.body
});
