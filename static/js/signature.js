webpackJsonp([1], [, , , , , , function(e, t, n) {
	"use strict";

	function a(e, t) {
		var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
		if(!(this instanceof a)) return new a(e, n);
		if(e) {
			var o = window.getComputedStyle(e, null),
				s = o.width,
				r = o.height;
			s = s.replace("px", ""), r = r.replace("px", ""), this.canvas = e, this.context = e.getContext("2d"), this.width = s, this.height = r;
			var c = this.context,
				d = window.devicePixelRatio;
			d ? (e.style.width = s + "px", e.style.height = r + "px", e.height = r * d, e.width = s * d, c.scale(d, d)) : (e.width = s, e.height = r), c.lineWidth = 6, c.strokeStyle = "black", c.lineCap = "round", c.lineJoin = "round", i()(c, n);
			var u = e.getBoundingClientRect(),
				l = u.left,
				h = u.top,
				v = {},
				g = /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent);
			g || (c.shadowBlur = 1, c.shadowColor = "black");
			var m = !1,
				p = function(e) {
					switch(e) {
						case 1:
							c.beginPath(), c.moveTo(v.x, v.y);
						case 2:
							c.lineTo(v.x, v.y), c.stroke()
					}
				},
				w = function(e) {
					return function(t) {
						t.preventDefault(), 1 === e && (m = !0), (1 === e || m) && (t = g ? t.touches[0] : t, v.x = t.clientX - l, v.y = t.clientY - h, p(e))
					}
				},
				f = w(1),
				x = w(2),
				y = window.requestAnimationFrame,
				_ = y ? function(e) {
					y(function() {
						x(e)
					})
				} : x;
			if(g ? (e.addEventListener("touchstart", f), e.addEventListener("touchmove", _)) : (e.addEventListener("mousedown", f), e.addEventListener("mousemove", _), ["mouseup", "mouseleave"].forEach(function(t) {
					e.addEventListener(t, function() {
						m = !1
					})
				})), "number" == typeof t) switch(this.degree = t, c.rotate(t * Math.PI / 180), t) {
				case -90:
					c.translate(-r, 0);
					break;
				case 90:
					c.translate(0, -s);
					break;
				case -180:
				case 180:
					c.translate(-s, -r)
			}
		}
	}
	var o = n(18),
		i = n.n(o);
	a.prototype = {
		scale: function(e, t) {
			var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.canvas,
				a = n.width,
				o = n.height;
			if(e = e || a, t = t || o, e !== a || t !== o) {
				var i = document.createElement("canvas"),
					s = i.getContext("2d");
				i.width = e, i.height = t, s.drawImage(n, 0, 0, a, o, 0, 0, e, t), n = i
			}
			return n
		},
		rotate: function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.canvas;
			if(0 != (e = ~~e)) {
				e > 180 ? e = 180 : e < -90 && (e = -90);
				var n = document.createElement("canvas"),
					a = n.getContext("2d"),
					o = t.height,
					i = t.width,
					s = e * Math.PI / 180;
				switch(e) {
					case -90:
						n.width = o, n.height = i, a.rotate(s), a.drawImage(t, -i, 0);
						break;
					case 90:
						n.width = o, n.height = i, a.rotate(s), a.drawImage(t, 0, -o);
						break;
					case 180:
						n.width = i, n.height = o, a.rotate(s), a.drawImage(t, -i, -o)
				}
				t = n
			}
			return t
		},
		getPNGImage: function() {
			return(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.canvas).toDataURL("image/png")
		},
		getJPGImage: function() {
			return(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.canvas).toDataURL("image/jpeg", .5)
		},
		downloadPNGImage: function(e) {
			var t = e.replace("image/png", "image/octet-stream;Content-Disposition:attachment;filename=test.png");
			window.location.href = t
		},
		dataURLtoBlob: function(e) {
			for(var t = e.split(","), n = t[0].match(/:(.*?);/)[1], a = atob(t[1]), o = a.length, i = new Uint8Array(o); o--;) i[o] = a.charCodeAt(o);
			return new Blob([i], {
				type: n
			})
		},
		clear: function() {
			var e = void 0,
				t = void 0;
			switch(this.degree) {
				case -90:
				case 90:
					e = this.height, t = this.width;
					break;
				default:
					e = this.width, t = this.height
			}
			this.context.clearRect(0, 0, e, t)
		},
		upload: function(e, t, n, a) {
			var o = new FormData,
				i = new XMLHttpRequest;
			i.withCredentials = !0, o.append("image", e, "sign"), i.open("POST", t, !0), i.onload = function() {
				i.status >= 200 && i.status < 300 || 304 === i.status ? n(i.responseText) : a()
			}, i.onerror = function(e) {
				"function" == typeof a ? a(e) : console.log("upload img error: " + e)
			}, i.send(o)
		}
	}, t.a = a
}, , , , , , function(e, t, n) {
	"use strict";
	var a = n(5),
		o = n(54),
		i = n(49),
		s = n.n(i),
		r = n(50),
		c = n.n(r);
	a.a.use(o.a), t.a = new o.a({
		routes: [{
			path: "/",
			name: "Canvas",
			component: s.a
		}, {
			path: "/sign",
			name: "Sign",
			component: c.a
		}]
	})
}, function(e, t, n) {
	function a(e) {
		n(47)
	}
	var o = n(4)(n(15), n(52), a, null, null);
	e.exports = o.exports
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = n(5),
		o = n(13),
		i = n.n(o),
		s = n(12);
	a.a.config.productionTip = !1, new a.a({
		el: "#app",
		router: s.a,
		template: "<App/>",
		components: {
			App: i.a
		}
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		name: "app"
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = n(6);
	t.default = {
		name: "canvas",
		data: function() {
			return {
				msg: "Just use canvas to draw",
				degree: 0,
				scope: [{
					value: 0,
					title: "正常"
				}, {
					value: 90,
					title: "顺时针旋转90°"
				}, {
					value: 180,
					title: "顺时针旋转180°"
				}, {
					value: -90,
					title: "逆时针旋转90°"
				}]
			}
		},
		components: {
			Draw: a.a
		},
		mounted: function() {
			this.canvasBox = document.getElementById("canvasBox"), this.initCanvas()
		},
		computed: {
			getHorizontalStyle: function() {
				var e = this,
					t = document,
					n = window.innerWidth || t.documentElement.clientWidth || t.body.clientWidth,
					a = window.innerHeight || t.documentElement.clientHeight || t.body.clientHeight,
					o = (a - n) / 2,
					i = n,
					s = a;
				switch(this.degree) {
					case -90:
						o = -o;
					case 90:
						i = a, s = n;
						break;
					default:
						o = 0
				}
				return this.canvasBox && (this.canvasBox.removeChild(document.querySelector("canvas")), this.canvasBox.appendChild(document.createElement("canvas")), setTimeout(function() {
					e.initCanvas()
				}, 200)), {
					transform: "rotate(" + this.degree + "deg) translate(" + o + "px," + o + "px)",
					width: i + "px",
					height: s + "px",
					transformOrigin: "center center"
				}
			}
		},
		methods: {
			initCanvas: function() {
				var e = document.querySelector("canvas");
				this.draw = new a.a(e, -this.degree)
			},
			clear: function() {
				this.draw.clear()
			},
			download: function() {
				this.draw.downloadPNGImage(this.draw.getPNGImage())
			},
			upload: function() {
				var e = this.draw.getPNGImage(),
					t = this.draw.dataURLtoBlob(e),
					n = function(e) {
						console.log(e)
					},
					a = function(e) {
						console.log(e)
					};
				this.draw.upload(t, "", n, a)
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = n(6);
	t.default = {
		name: "canvas",
		data: function() {
			return {
				msg: "请在下方空白处签名",
				degree: 90,
				signImage: null,
				showBox: !1
			}
		},
		components: {
			Draw: a.a
		},
		beforeCreate: function() {
			document.title = "手写签名"
		},
		mounted: function() {
			this.canvasBox = document.getElementById("canvasBox"), this.initCanvas()
		},
		computed: {
			getHorizontalStyle: function() {
				var e = this,
					t = document,
					n = window.innerWidth || t.documentElement.clientWidth || t.body.clientWidth,
					a = window.innerHeight || t.documentElement.clientHeight || t.body.clientHeight,
					o = (a - n) / 2,
					i = n,
					s = a;
				switch(this.degree) {
					case -90:
						o = -o;
					case 90:
						i = a, s = n;
						break;
					default:
						o = 0
				}
				return this.canvasBox && (this.canvasBox.removeChild(document.querySelector("canvas")), this.canvasBox.appendChild(document.createElement("canvas")), setTimeout(function() {
					e.initCanvas()
				}, 200)), {
					transform: "rotate(" + this.degree + "deg) translate(" + o + "px," + o + "px)",
					width: i + "px",
					height: s + "px",
					transformOrigin: "center center"
				}
			}
		},
		methods: {
			initCanvas: function() {
				var e = document.querySelector("canvas");
				this.draw = new a.a(e, -this.degree)
			},
			clear: function() {
				this.draw.clear()
			},
			download: function() {
				this.draw.downloadPNGImage(this.draw.getPNGImage())
			},
			savePNG: function() {
				this.signImage = this.draw.getPNGImage(), this.showBox = !0
			},
			upload: function() {
				var e = this.draw.getPNGImage(),
					t = this.draw.dataURLtoBlob(e),
					n = function(e) {
						console.log(e)
					},
					a = function(e) {
						console.log(e)
					};
				this.draw.upload(t, "", n, a)
			}
		}
	}
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
	function a(e) {
		n(46)
	}
	var o = n(4)(n(16), n(51), a, null, null);
	e.exports = o.exports
}, function(e, t, n) {
	function a(e) {
		n(48)
	}
	var o = n(4)(n(17), n(53), a, null, null);
	e.exports = o.exports
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				style: e.getHorizontalStyle,
				attrs: {
					id: "canvasBox"
				}
			}, [n("div", {
				staticClass: "greet"
			}, [n("span", [e._v(e._s(e.msg))]), e._v(" "), n("a", {
				on: {
					touchstart: e.clear,
					mousedown: e.clear
				}
			}, [e._v("清屏")]), e._v(" "), n("a", {
				on: {
					touchstart: e.download,
					mousedown: e.download
				}
			}, [e._v("下载")]), e._v(" "), n("select", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.degree,
					expression: "degree"
				}],
				on: {
					change: function(t) {
						var n = Array.prototype.filter.call(t.target.options, function(e) {
							return e.selected
						}).map(function(e) {
							return "_value" in e ? e._value : e.value
						});
						e.degree = t.target.multiple ? n : n[0]
					}
				}
			}, e._l(e.scope, function(t) {
				return n("option", {
					domProps: {
						value: t.value
					}
				}, [e._v(e._s(t.title))])
			}))]), e._v(" "), n("canvas")])
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				attrs: {
					id: "app"
				}
			}, [n("router-view")], 1)
		},
		staticRenderFns: []
	}
}, function(e, t) {
	e.exports = {
		render: function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "container"
			}, [n("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.showBox,
					expression: "!showBox"
				}],
				style: e.getHorizontalStyle,
				attrs: {
					id: "canvasBox"
				}
			}, [n("div", {
				staticClass: "greet"
			}, [n("span", [e._v(e._s(e.msg))]), e._v(" "), n("input", {
				attrs: {
					type: "button",
					value: "清屏"
				},
				on: {
					touchstart: e.clear,
					mousedown: e.clear
				}
			}), e._v(" "), n("input", {
				attrs: {
					type: "button",
					value: "生成png图片"
				},
				on: {
					touchstart: e.savePNG,
					mousedown: e.savePNG
				}
			})]), e._v(" "), n("canvas")]), e._v(" "), n("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.showBox,
					expression: "showBox"
				}],
				staticClass: "image-box"
			}, [n("header", [e._v("\n      请长按图片并保存至本地后发送好友\n      "), n("input", {
				attrs: {
					type: "button",
					value: "返回"
				},
				on: {
					click: function(t) {
						e.showBox = !1
					}
				}
			})]), e._v(" "), n("img", {
				attrs: {
					src: e.signImage
				}
			})])])
		},
		staticRenderFns: []
	}
}], [14]);