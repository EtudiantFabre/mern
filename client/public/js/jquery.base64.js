(function($) {
    "use strict";
  
    // Base64 encoding table
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  
    // Convert a string to Base64
    $.fn.base64Encode = function() {
      var str = this.val();
      var buf = new ArrayBuffer(str.length * 3 / 4);
      var arr = new Uint8Array(buf);
  
      for (var i = 0, j = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
  
        if (c < 128) {
          arr[j++] = c;
        } else if (c < 2048) {
          arr[j++] = 128 | (c >> 6);
          arr[j++] = 128 | (c & 63);
        } else {
          arr[j++] = 128 | (c >> 12);
          arr[j++] = 128 | ((c >> 6) & 63);
          arr[j++] = 128 | (c & 63);
        }
      }
  
      var b64Str = '';
      for (var i = 0; i < buf.byteLength; i++) {
        b64Str += b64.charAt(arr[i] >> 2);
        b64Str += b64.charAt((arr[i] & 3) << 4 | (arr[i + 1] >> 4));
        b64Str += b64.charAt(((arr[i + 1] & 15) << 2) | (arr[i + 2] >> 6));
        b64Str += b64.charAt(arr[i + 2] & 63);
        i += 2;
      }
  
      return b64Str;
    };
  
    // Convert a Base64 string to a string
    $.fn.base64Decode = function() {
      var b64Str = this.val();
      var buf = new ArrayBuffer(b64Str.length * 3 / 4);
      var arr = new Uint8Array(buf);
  
      var i = 0;
      for (var j = 0; j < b64Str.length; j += 4) {
        var c1 = b64.indexOf(b64Str[j]);
        var c2 = b64.indexOf(b64Str[j + 1]);
        var c3 = b64.indexOf(b64Str[j + 2]);
        var c4 = b64.indexOf(b64Str[j + 3]);
  
        arr[i++] = (c1 << 2) | ((c2 & 48) >> 4);
        arr[i++] = ((c2 & 15) << 4) | ((c3 & 60) >> 2);
        arr[i++] = ((c3 & 3) << 6) | (c4 & 63);
      }
  
      var str = '';
      for (var j = 0; j < buf.byteLength; j++) {
        str += String.fromCharCode(arr[j]);
      }
  
      return str;
    };
  }(jQuery));