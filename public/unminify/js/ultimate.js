function countUp(t, e, i, o, s, n) {
	this.options = n || {
		useEasing: !0,
		useGrouping: !0,
		separator: ",",
		decimal: ".",
	};
	let a = 0;
	var r = ["webkit", "moz", "ms"];
	for (let t = 0; t < r.length && !window.requestAnimationFrame; ++t)
		(window.requestAnimationFrame = window[r[t] + "RequestAnimationFrame"]),
			(window.cancelAnimationFrame =
				window[r[t] + "CancelAnimationFrame"] || window[r[t] + "CancelRequestAnimationFrame"]);
	window.requestAnimationFrame ||
		(window.requestAnimationFrame = function (t, e) {
			const i = new Date().getTime(),
				o = Math.max(0, 16 - (i - a));
			var s = window.setTimeout(function () {
				t(i + o);
			}, o);
			return (a = i + o), s;
		}),
		window.cancelAnimationFrame ||
			(window.cancelAnimationFrame = function (t) {
				clearTimeout(t);
			});
	const l = this;
	(this.d = "string" == typeof t ? document.getElementById(t) : t),
		(this.startVal = Number(e)),
		(this.endVal = Number(i)),
		(this.countDown = this.startVal > this.endVal),
		(this.startTime = null),
		(this.timestamp = null),
		(this.remaining = null),
		(this.frameVal = this.startVal),
		(this.rAF = null),
		(this.decimals = Math.max(0, o || 0)),
		(this.dec = Math.pow(10, this.decimals)),
		(this.duration = 1e3 * s || 2e3),
		(this.easeOutExpo = function (t, e, i, o) {
			return (i * (1 - Math.pow(2, (-10 * t) / o)) * 1024) / 1023 + e;
		}),
		(this.count = function (t) {
			null === l.startTime && (l.startTime = t);
			var e,
				t = (l.timestamp = t) - l.startTime;
			(l.remaining = l.duration - t),
				l.options.useEasing
					? l.countDown
						? ((e = l.easeOutExpo(t, 0, l.startVal - l.endVal, l.duration)), (l.frameVal = l.startVal - e))
						: (l.frameVal = l.easeOutExpo(t, l.startVal, l.endVal - l.startVal, l.duration))
					: l.countDown
					? ((e = (l.startVal - l.endVal) * (t / l.duration)), (l.frameVal = l.startVal - e))
					: (l.frameVal = l.startVal + (l.endVal - l.startVal) * (t / l.duration)),
				(l.frameVal = Math.round(l.frameVal * l.dec) / l.dec),
				l.countDown
					? (l.frameVal = l.frameVal < l.endVal ? l.endVal : l.frameVal)
					: (l.frameVal = l.frameVal > l.endVal ? l.endVal : l.frameVal),
				(l.d.innerHTML = l.formatNumber(l.frameVal.toFixed(l.decimals))),
				t < l.duration ? (l.rAF = requestAnimationFrame(l.count)) : null != l.callback && l.callback();
		}),
		(this.start = function (t) {
			return (
				(l.callback = t),
				isNaN(l.endVal) || isNaN(l.startVal)
					? (console.log("countUp error: startVal or endVal is not a number"), (l.d.innerHTML = "--"))
					: (l.rAF = requestAnimationFrame(l.count)),
				!1
			);
		}),
		(this.stop = function () {
			cancelAnimationFrame(l.rAF);
		}),
		(this.reset = function () {
			(l.startTime = null),
				cancelAnimationFrame(l.rAF),
				(l.d.innerHTML = l.formatNumber(l.startVal.toFixed(l.decimals)));
		}),
		(this.resume = function () {
			(l.startTime = null),
				(l.duration = l.remaining),
				(l.startVal = l.frameVal),
				requestAnimationFrame(l.count);
		}),
		(this.formatNumber = function (t) {
			let e, i, o, s;
			if (
				((e = (t += "").split(".")),
				(i = e[0]),
				(o = 1 < e.length ? l.options.decimal + e[1] : ""),
				(s = /(\d+)(\d{3})/),
				l.options.useGrouping)
			)
				for (; s.test(i); ) i = i.replace(s, "$1" + l.options.separator + "$2");
			return i + o;
		}),
		(l.d.innerHTML = l.formatNumber(l.startVal.toFixed(l.decimals)));
}

function ult_creative_link_ht() {
	jQuery(".ult_cl_link_9").each(function (t) {
		var e = jQuery(this).find(".ult_colorlink").outerHeight(),
			e = parseInt(e / 2);
		jQuery(this)
			.find(".ult_btn9_link_top")
			.css({
				"-webkit-transform": "translateY(-" + e + "px)",
				"-ms-transform": "translateY(-" + e + "px)",
				"-moz-transform": "translateY(-" + e + "px)",
				transform: "translateY(-" + e + "px)",
			}),
			jQuery(this)
				.find(".ult_btn9_link_btm")
				.css({
					"-webkit-transform": "translateY(" + e + "px)",
					"-moz-transform": "translateY(" + e + "px)",
					"-ms-transform": "translateY(" + e + "px)",
					transform: "translateY(" + e + "px)",
				});
	});
}

function recallme() {
	jQuery(".ult_dual_button").each(function (t) {
		var e = jQuery(this).attr("id");
		let i = jQuery(this).data("response");
		("undefined" != i && "" != i) || (i = "on");
		var o = "right";
		jQuery("body").hasClass("rtl") && (o = "left");
		var s,
			n,
			a,
			r,
			l = "left";
		jQuery("body").hasClass("rtl") && (l = "right"),
			"on" == i
				? ((r = e),
				  ((r = document.createElement("style")).type = "text/css"),
				  (r.innerHTML =
						"@media(min-width:300px) and (max-width:768px) {#" +
						e +
						".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper { margin: 0px;float: none;position: relative}.ult_main_dualbtn { display: inline-block}.ult_dualbutton-wrapper { display: block }#" +
						e +
						".ult_dual_button .middle-text {top: 100%;right: 50%}#" +
						e +
						".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-bottom-right-radius: 0!important; border-bottom-left-radius: 0!important; border-top-right-radius: inherit; border-bottom: 0px!important;}#" +
						e +
						".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button { border-top-left-radius: 0!important;border-top-right-radius: 0!important}}@media(min-width:0px) and (max-width:0px) {#" +
						e +
						".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper { float: left; position: relative}.ult_dual1 {     border-right: none!important } .ult_dualbutton-wrapper {display: block}#" +
						e +
						".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-top-right-radius: 0!important;  border-bottom-right-radius: 0!important}#" +
						e +
						".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button { border-top-left-radius: 0!important;  border-bottom-left-radius: 0!important  }}@media(min-width:768px) and (max-width:970px) { #" +
						e +
						".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper { margin: -4px; float: none; position: relative }.ult_dualbutton-wrapper { display: block} #" +
						e +
						".ult_dual_button .middle-text { top: 100%; right: 50% }#" +
						e +
						".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-bottom-right-radius: 0!important; border-bottom-left-radius: 0!important; border-top-right-radius: inherit }#" +
						e +
						".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button {     border-top-left-radius: 0!important;   border-top-right-radius: 0!important  }}@media(min-width:970px){ #" +
						e +
						".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-top-" +
						o +
						"-radius: 0!important; border-bottom-" +
						o +
						"-radius: 0!important}#" +
						e +
						".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button { border-top-" +
						l +
						"-radius: 0!important; border-bottom-" +
						l +
						"-radius: 0!important }#" +
						e +
						".ult_dual_button .ult_dual1 { border-" +
						o +
						": none!important}}"),
				  document.getElementsByTagName("head")[0].appendChild(r),
				  document.getElementsByTagName("head")[0].appendChild(r),
				  (s = jQuery(window).width()),
				  (l = jQuery(this).find(".ult_dual1").outerWidth()),
				  (o = jQuery(this).find(".ult_dual2").outerWidth()),
				  (a =
						(300 < s && s <= 768) || (768 < s && s < 1015)
							? ((n = "inset 0px -" + l + "px 0px 0px "), " inset 0px " + o + "px 0px 0px ")
							: ((n = "inset -" + l + "px 0 0 0 "), "inset " + o + "px 0 0 0")),
				  jQuery("#" + e)
						.find(".ult_dual1")
						.mouseenter(function () {
							var t = jQuery(this).find(".ult-dual-btn-1").attr("class").split(" ");
							"Style2" == t[1] + t[2] &&
								((t = jQuery(this).find(".ult-dual-btn-1").data("bghovercolor")),
								jQuery(this).css({
									"box-shadow": n + t,
								}));
						}),
				  jQuery("#" + e)
						.find(".ult_dual1")
						.mouseleave(function () {
							var t = jQuery(this).find(".ult-dual-btn-1").attr("class").split(" ");
							"Style2" == t[1] + t[2] &&
								((t = jQuery(this).find(".ult-dual-btn-1").data("bgcolor")),
								jQuery(this).css({
									"box-shadow": "inset 0px 0 0 0 " + t,
								}));
						}),
				  jQuery("#" + e)
						.find(".ult_dual2")
						.mouseenter(function () {
							var t = jQuery(this).find(".ult-dual-btn-2").attr("class").split(" ");
							"Style2" == t[1] + t[2] &&
								((t = jQuery(this).find(".ult-dual-btn-2").data("bghovercolor")),
								jQuery(this).css({
									"box-shadow": a + " " + t,
								}));
						}),
				  jQuery("#" + e)
						.find(".ult_dual2")
						.mouseleave(function () {
							var t = jQuery(this).find(".ult-dual-btn-2").attr("class").split(" ");
							"Style2" == t[1] + t[2] &&
								((t = jQuery(this).find(".ult-dual-btn-2").data("bgcolor")),
								jQuery(this).css({
									"box-shadow": "inset 0px 0 0 0 " + t,
								}));
						}))
				: ((r = e),
				  ((r = document.createElement("style")).type = "text/css"),
				  (r.innerHTML =
						"#" +
						e +
						".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-top-right-radius: 0!important; border-bottom-right-radius: 0!important }#" +
						e +
						".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button { border-top-left-radius: 0!important; border-bottom-left-radius: 0!important }#" +
						e +
						".ult_dual_button .ult_dual1 { border-right: none!important}"),
				  document.getElementsByTagName("head")[0].appendChild(r),
				  document.getElementsByTagName("head")[0].appendChild(r),
				  jQuery("#" + e)
						.find(".ult_dual1")
						.mouseenter(function () {
							var t = (e = jQuery(this).find(".ult-dual-btn-1").attr("class")).split(" "),
								e = t[1] + t[2],
								t = jQuery(this).outerWidth();
							"Style2" == e &&
								((e = "inset -" + t + "px 0 0 0 "),
								(t = jQuery(this).find(".ult-dual-btn-1").data("bghovercolor")),
								jQuery(this).css({
									"box-shadow": e + t,
								}));
						}),
				  jQuery("#" + e)
						.find(".ult_dual1")
						.mouseleave(function () {
							var t = jQuery(this).find(".ult-dual-btn-1").attr("class").split(" ");
							"Style2" == t[1] + t[2] &&
								((t = jQuery(this).find(".ult-dual-btn-1").data("bgcolor")),
								jQuery(this).css({
									"box-shadow": "inset 0px 0 0 0 " + t,
								}));
						}),
				  jQuery("#" + e)
						.find(".ult_dual2")
						.mouseenter(function () {
							var t = (e = jQuery(this).find(".ult-dual-btn-2").attr("class")).split(" "),
								e = t[1] + t[2],
								t = jQuery(this).outerWidth();
							"Style2" == e &&
								((e = "inset " + t + "px 0 0 0"),
								(t = jQuery(this).find(".ult-dual-btn-2").data("bghovercolor")),
								jQuery(this).css({
									"box-shadow": e + t,
								}));
						}),
				  jQuery("#" + e)
						.find(".ult_dual2")
						.mouseleave(function () {
							var t = jQuery(this).find(".ult-dual-btn-2").attr("class").split(" ");
							"Style2" == t[1] + t[2] &&
								((t = jQuery(this).find(".ult-dual-btn-2").data("bgcolor")),
								jQuery(this).css({
									"box-shadow": "inset 0px 0 0 0 " + t,
								}));
						}));
	});
}
!(function (u, h, s) {
	function e() {
		u(".ult-content-box").each(function (t, e) {
			const i = u(e).css("background-color") || "",
				o = u(e).data("border_color") || "transparent",
				s = u(e).css("box-shadow") || "",
				n = u(e).data("hover_bg_color") || u(e).css("background-color"),
				a = u(e).data("hover_border_color") || "transparent",
				r = u(e).data("hover_box_shadow") || u(e).css("box-shadow");
			u(e).hover(
				function () {
					u(e).css("background-color", n), u(e).css("border-color", a), u(e).css("box-shadow", r);
				},
				function () {
					u(e).css("background-color", i), u(e).css("border-color", o), u(e).css("box-shadow", s);
				}
			);
			let l = {};
			var d = u(e).data("responsive_margins");
			void 0 !== d && null != d && (l = f(d));
			let c = {};
			d = u(e).data("normal_margins");
			c =
				void 0 !== d && null != d
					? f(d)
					: (function (t) {
							const e = {};
							(e["margin-left"] = p(u(t).css("margin-left"))),
								(e["margin-right"] = p(u(t).css("margin-right"))),
								(e["margin-top"] = p(u(t).css("margin-top"))),
								(e["margin-bottom"] = p(u(t).css("margin-bottom")));
							let i = "";
							return (
								u.each(e, function (t, e) {
									void 0 !== e && null != e && (i += t + ":" + e + "px;");
								}),
								u(t).attr("data-normal_margins", i),
								e
							);
					  })(e);
			d = u(h).width() || "";
			"" != d && m(768 <= d ? c : l, e);
		});
	}

	function p(t) {
		let e;
		return void 0 !== t && null != t && ((e = t.split("px")), (e = parseInt(e[0]))), e;
	}

	function f(t) {
		const o = {};
		t = t.split(";");
		return (
			void 0 !== t &&
				null != t &&
				u.each(t, function (t, e) {
					if (typeof e !== s && null != e) {
						var i = e.split(":");
						if (typeof i[0] !== s && null != i[0] && typeof i[1] !== s && null != i[1])
							switch (i[0]) {
								case "margin":
									o.margin = i[1];
									break;
								case "margin-left":
									o["margin-left"] = i[1];
									break;
								case "margin-right":
									o["margin-right"] = i[1];
									break;
								case "margin-top":
									o["margin-top"] = i[1];
									break;
								case "margin-bottom":
									o["margin-bottom"] = i[1];
							}
					}
				}),
			o
		);
	}

	function m(t, i) {
		u.isEmptyObject(t) ||
			u.each(t, function (t, e) {
				void 0 !== e && null != e && u(i).css(t, e);
			});
	}
	jQuery(h).on("load", function (t) {
		e();
	}),
		jQuery(h).resize(function (t) {
			e();
		}),
		jQuery(document).ready(function (t) {
			e();
		});
})(jQuery, window),
	jQuery(window).on("load", function () {
		!(function () {
			let u = "",
				h = "",
				p = "",
				f = "",
				m = "",
				y = "";
			jQuery(".ult-responsive").each(function (t, e) {
				let i = jQuery(e),
					o = i.attr("data-responsive-json-new"),
					s = i.data("ultimate-target"),
					n = "",
					a = "",
					r = "",
					l = "",
					d = "",
					c = "";
				(void 0 === o && null == o) ||
					jQuery.each(jQuery.parseJSON(o), function (t, e) {
						const o = t;
						void 0 !== e &&
							null != e &&
							((e = e.split(";")),
							jQuery.each(e, function (t, e) {
								if (void 0 !== e || null != e) {
									var i = e.split(":");
									switch (i[0]) {
										case "large_screen":
											n += o + ":" + i[1] + ";";
											break;
										case "desktop":
											a += o + ":" + i[1] + ";";
											break;
										case "tablet":
											r += o + ":" + i[1] + ";";
											break;
										case "tablet_portrait":
											l += o + ":" + i[1] + ";";
											break;
										case "mobile_landscape":
											d += o + ":" + i[1] + ";";
											break;
										case "mobile":
											c += o + ":" + i[1] + ";";
									}
								}
							}));
					}),
					"" != c && (y += s + "{" + c + "}"),
					"" != d && (m += s + "{" + d + "}"),
					"" != l && (f += s + "{" + l + "}"),
					"" != r && (p += s + "{" + r + "}"),
					"" != a && (h += s + "{" + a + "}"),
					"" != n && (u += s + "{" + n + "}");
			});
			var t = "<style>\n/** Ultimate: CountDown Responsive **/ ";
			(t += h),
				(t += "\n@media (min-width: 1824px) { " + u + "\n}"),
				(t += "\n@media (max-width: 1199px) { " + p + "\n}"),
				(t += "\n@media (max-width: 991px)  { " + f + "\n}"),
				(t += "\n@media (max-width: 767px)  { " + m + "\n}"),
				(t += "\n@media (max-width: 479px)  { " + y + "\n}"),
				(t += "\n/** Ultimate: Tooltipster Responsive - **/</style>"),
				jQuery("head").append(t);
		})(),
			jQuery(".ult_countdown-dateAndTime").each(function () {
				var t = new Date(jQuery(this).html()),
					e = (jQuery(this).data("time-zone"), jQuery(this).data("countformat"));
				const i = jQuery(this).data("labels");
				var o = i.split(",");
				const s = jQuery(this).data("labels2");

				function n(t) {
					var e = jQuery(".ult_countdown-dateAndTime").attr("data-responsive-json-new"),
						i = jQuery(".ult_countdown-dateAndTime").attr("data-ultimate-target"),
						o = jQuery(".ult_countdown").attr("data-responsive-json-new"),
						s = jQuery(".ult_countdown").attr("data-ultimate-target");
					jQuery(".ult_countdown-period").addClass("ult-responsive");
					const n = jQuery(this).find(".ult_countdown-amount"),
						a = jQuery(this).find(".ult_countdown-period");
					jQuery(this).data("tick-col"), jQuery(this).data("tick-p-size");
					var r = jQuery(this).data("tick-font-family"),
						l = jQuery(this).data("br-color"),
						d = jQuery(this).data("br-size"),
						c = jQuery(this).data("br-style"),
						u = jQuery(this).data("br-radius"),
						h = jQuery(this).data("bg-color"),
						p = jQuery(this).data("padd");
					n.attr({
						"data-ultimate-target": i,
						"data-responsive-json-new": e,
					}),
						a.attr({
							"data-ultimate-target": s,
							"data-responsive-json-new": o,
						}),
						n.addClass("ult-responsive"),
						n.css({
							"font-family": r,
							"border-width": d,
							"border-style": c,
							"border-radius": u,
							background: h,
							padding: p,
							"border-color": l,
						});
				}
				var a = s.split(",");
				jQuery(this).hasClass("ult-usrtz")
					? jQuery(this).ult_countdown({
							labels: o,
							labels1: a,
							until: t,
							format: e,
							padZeroes: !0,
							onTick: n,
					  })
					: jQuery(this).ult_countdown({
							labels: o,
							labels1: a,
							until: t,
							format: e,
							padZeroes: !0,
							onTick: n,
							serverSync: function () {
								return new Date(jQuery(this).data("time-now"));
							},
					  });
			});
	}),
	(function () {
		let a = !1;
		(window.JQClass = function () {}),
			(JQClass.classes = {}),
			(JQClass.extend = function t(e) {
				const s = this.prototype;
				a = !0;
				const i = new this();
				a = !1;
				for (const n in e)
					i[n] =
						"function" == typeof e[n] && "function" == typeof s[n]
							? (function (i, o) {
									return function () {
										var t = this._super;
										this._super = function (t) {
											return s[i].apply(this, t);
										};
										var e = o.apply(this, arguments);
										return (this._super = t), e;
									};
							  })(n, e[n])
							: e[n];

				function o() {
					!a && this._init && this._init.apply(this, arguments);
				}
				return (((o.prototype = i).constructor = o).extend = t), o;
			});
	})(),
	(function ($) {
		function camelCase(t) {
			return t.replace(/-([a-z])/g, function (t, e) {
				return e.toUpperCase();
			});
		}
		(JQClass.classes.JQPlugin = JQClass.extend({
			name: "plugin",
			defaultOptions: {},
			regionalOptions: {},
			_getters: [],
			_getMarker() {
				return "is-" + this.name;
			},
			_init() {
				$.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions[""]) || {});
				const i = camelCase(this.name);
				($[i] = this),
					($.fn[i] = function (t) {
						const e = Array.prototype.slice.call(arguments, 1);
						return $[i]._isNotChained(t, e)
							? $[i][t].apply($[i], [this[0]].concat(e))
							: this.each(function () {
									if ("string" == typeof t) {
										if ("_" === t[0] || !$[i][t]) throw "Unknown method: " + t;
										$[i][t].apply($[i], [this].concat(e));
									} else $[i]._attach(this, t);
							  });
					});
			},
			setDefaults(t) {
				$.extend(this.defaultOptions, t || {});
			},
			_isNotChained(t, e) {
				return (
					("option" === t && (0 === e.length || (1 === e.length && "string" == typeof e[0]))) ||
					-1 < $.inArray(t, this._getters)
				);
			},
			_attach(t, e) {
				var i;
				(t = $(t)).hasClass(this._getMarker()) ||
					(t.addClass(this._getMarker()),
					(e = $.extend({}, this.defaultOptions, this._getMetadata(t), e || {})),
					(i = $.extend(
						{
							name: this.name,
							elem: t,
							options: e,
						},
						this._instSettings(t, e)
					)),
					t.data(this.name, i),
					this._postAttach(t, i),
					this.option(t, e));
			},
			_instSettings(t, e) {
				return {};
			},
			_postAttach(t, e) {},
			_getMetadata(d) {
				try {
					let f = d.data(this.name.toLowerCase()) || "";
					(f = f.replace(/'/g, '"')),
						(f = f.replace(/([a-zA-Z0-9]+):/g, function (t, e, i) {
							i = f.substring(0, i).match(/"/g);
							return i && i.length % 2 != 0 ? e + ":" : '"' + e + '":';
						})),
						(f = $.parseJSON("{" + f + "}"));
					for (const g in f) {
						const h = f[g];
						"string" == typeof h && h.match(/^new Date\((.*)\)$/) && (f[g] = eval(h));
					}
					return f;
				} catch (e) {
					return {};
				}
			},
			_getInst(t) {
				return $(t).data(this.name) || {};
			},
			option(t, e, i) {
				var o,
					s = (t = $(t)).data(this.name);
				if (!e || ("string" == typeof e && null == i)) return (o = (s || {}).options) && e ? o[e] : o;
				t.hasClass(this._getMarker()) &&
					((o = e || {}),
					"string" == typeof e && ((o = {})[e] = i),
					this._optionsChanged(t, s, o),
					$.extend(s.options, o));
			},
			_optionsChanged(t, e, i) {},
			destroy(t) {
				(t = $(t)).hasClass(this._getMarker()) &&
					(this._preDestroy(t, this._getInst(t)), t.removeData(this.name).removeClass(this._getMarker()));
			},
			_preDestroy(t, e) {},
		})),
			($.JQPlugin = {
				createPlugin(t, e) {
					"object" == typeof t && ((e = t), (t = "JQPlugin")), (t = camelCase(t));
					var i = camelCase(e.name);
					(JQClass.classes[i] = JQClass.classes[t].extend(e)), new JQClass.classes[i]();
				},
			});
	})(jQuery),
	(function (p) {
		"use strict";
		var t = "ult_countdown";
		p.JQPlugin.createPlugin({
			name: t,
			defaultOptions: {
				until: null,
				since: null,
				timezone: null,
				serverSync: null,
				format: "dHMS",
				layout: "",
				compact: !1,
				padZeroes: !1,
				significant: 0,
				description: "",
				expiryUrl: "",
				expiryText: "",
				alwaysExpire: !1,
				onExpiry: null,
				onTick: null,
				tickInterval: 1,
			},
			regionalOptions: {
				"": {
					labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
					labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
					compactLabels: ["y", "m", "w", "d"],
					whichLabels: null,
					digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
					timeSeparator: ":",
					isRTL: !1,
				},
			},
			_rtlClass: t + "-rtl",
			_sectionClass: t + "-section",
			_amountClass: t + "-amount",
			_periodClass: t + "-period",
			_rowClass: t + "-row",
			_holdingClass: t + "-holding",
			_showClass: t + "-show",
			_descrClass: t + "-descr",
			_timerElems: [],
			_init: function () {
				var i = this;
				this._super(), (this._serverSyncs = []);
				var o =
						"function" == typeof Date.now
							? Date.now
							: function () {
									return new Date().getTime();
							  },
					s = window.performance && "function" == typeof window.performance.now;
				var n =
						window.requestAnimationFrame ||
						window.webkitRequestAnimationFrame ||
						window.mozRequestAnimationFrame ||
						window.oRequestAnimationFrame ||
						window.msRequestAnimationFrame ||
						null,
					a = 0;
				!n || p.noRequestAnimationFrame
					? ((p.noRequestAnimationFrame = null),
					  (p.countdown._timer = setInterval(function () {
							i._updateElems();
					  }, 1e3)))
					: ((a =
							window.animationStartTime ||
							window.webkitAnimationStartTime ||
							window.mozAnimationStartTime ||
							window.oAnimationStartTime ||
							window.msAnimationStartTime ||
							o()),
					  n(function t(e) {
							e =
								e < 1e12
									? s
										? window.performance.now() + window.performance.timing.navigationStart
										: o()
									: e || o();
							1e3 <= e - a && (i._updateElems(), (a = e)), n(t);
					  }));
			},
			UTCDate: function (t, e, i, o, s, n, a, r) {
				"object" == typeof e &&
					e instanceof Date &&
					((r = e.getMilliseconds()),
					(a = e.getSeconds()),
					(n = e.getMinutes()),
					(s = e.getHours()),
					(o = e.getDate()),
					(i = e.getMonth()),
					(e = e.getFullYear()));
				var l = new Date();
				return (
					l.setUTCFullYear(e),
					l.setUTCDate(1),
					l.setUTCMonth(i || 0),
					l.setUTCDate(o || 1),
					l.setUTCHours(s || 0),
					l.setUTCMinutes((n || 0) - (Math.abs(t) < 30 ? 60 * t : t)),
					l.setUTCSeconds(a || 0),
					l.setUTCMilliseconds(r || 0),
					l
				);
			},
			periodsToSeconds: function (t) {
				return (
					31557600 * t[0] + 2629800 * t[1] + 604800 * t[2] + 86400 * t[3] + 3600 * t[4] + 60 * t[5] + t[6]
				);
			},
			resync: function () {
				var s = this;
				p("." + this._getMarker()).each(function () {
					var t = p.data(this, s.name);
					if (t.options.serverSync) {
						for (var e, i = null, o = 0; o < s._serverSyncs.length; o++)
							if (s._serverSyncs[o][0] === t.options.serverSync) {
								i = s._serverSyncs[o];
								break;
							}
						s._eqNull(i[2]) &&
							((e = p.isFunction(t.options.serverSync) ? t.options.serverSync.apply(this, []) : null),
							(i[2] = (e ? new Date().getTime() - e.getTime() : 0) - i[1])),
							t._since && t._since.setMilliseconds(t._since.getMilliseconds() + i[2]),
							t._until.setMilliseconds(t._until.getMilliseconds() + i[2]);
					}
				});
				for (var t = 0; t < s._serverSyncs.length; t++)
					s._eqNull(s._serverSyncs[t][2]) ||
						((s._serverSyncs[t][1] += s._serverSyncs[t][2]), delete s._serverSyncs[t][2]);
			},
			_instSettings: function (t, e) {
				return {
					_periods: [0, 0, 0, 0, 0, 0, 0],
				};
			},
			_addElem: function (t) {
				this._hasElem(t) || this._timerElems.push(t);
			},
			_hasElem: function (t) {
				return -1 < p.inArray(t, this._timerElems);
			},
			_removeElem: function (e) {
				this._timerElems = p.map(this._timerElems, function (t) {
					return t === e ? null : t;
				});
			},
			_updateElems: function () {
				for (var t = this._timerElems.length - 1; 0 <= t; t--) this._updateCountdown(this._timerElems[t]);
			},
			_optionsChanged: function (t, e, i) {
				i.layout && (i.layout = i.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")),
					this._resetExtraLabels(e.options, i);
				var o = e.options.timezone !== i.timezone;
				p.extend(e.options, i),
					this._adjustSettings(t, e, !this._eqNull(i.until) || !this._eqNull(i.since) || o);
				o = new Date();
				((e._since && e._since < o) || (e._until && e._until > o)) && this._addElem(t[0]),
					this._updateCountdown(t, e);
			},
			_updateCountdown: function (t, e) {
				var i;
				(t = t.jquery ? t : p(t)),
					(e = e || this._getInst(t)) &&
						(t.html(this._generateHTML(e)).toggleClass(this._rtlClass, e.options.isRTL),
						"pause" !== e._hold &&
							p.isFunction(e.options.onTick) &&
							((i =
								"lap" !== e._hold
									? e._periods
									: this._calculatePeriods(e, e._show, e.options.significant, new Date())),
							(1 !== e.options.tickInterval && this.periodsToSeconds(i) % e.options.tickInterval != 0) ||
								e.options.onTick.apply(t[0], [i])),
						"pause" !== e._hold &&
						(e._since ? e._now.getTime() < e._since.getTime() : e._now.getTime() >= e._until.getTime()) &&
						!e._expiring
							? ((e._expiring = !0),
							  (this._hasElem(t[0]) || e.options.alwaysExpire) &&
									(this._removeElem(t[0]),
									p.isFunction(e.options.onExpiry) && e.options.onExpiry.apply(t[0], []),
									e.options.expiryText &&
										((i = e.options.layout),
										(e.options.layout = e.options.expiryText),
										this._updateCountdown(t[0], e),
										(e.options.layout = i)),
									e.options.expiryUrl && (window.location = e.options.expiryUrl)),
							  (e._expiring = !1))
							: "pause" === e._hold && this._removeElem(t[0]));
			},
			_resetExtraLabels: function (t, e) {
				var i = null;
				for (i in e) i.match(/[Ll]abels[02-9]|compactLabels1/) && (t[i] = e[i]);
				for (i in t) i.match(/[Ll]abels[02-9]|compactLabels1/) && void 0 === e[i] && (t[i] = null);
			},
			_eqNull: function (t) {
				return null == t;
			},
			_adjustSettings: function (t, e, i) {
				for (var o = null, s = 0; s < this._serverSyncs.length; s++)
					if (this._serverSyncs[s][0] === e.options.serverSync) {
						o = this._serverSyncs[s][1];
						break;
					}
				var n = null,
					a = null;
				this._eqNull(o)
					? ((r = p.isFunction(e.options.serverSync) ? e.options.serverSync.apply(t[0], []) : null),
					  (n = new Date()),
					  (a = r ? n.getTime() - r.getTime() : 0),
					  this._serverSyncs.push([e.options.serverSync, a]))
					: ((n = new Date()), (a = e.options.serverSync ? o : 0));
				var r = e.options.timezone,
					r = this._eqNull(r) ? -n.getTimezoneOffset() : r;
				(i || (!i && this._eqNull(e._until) && this._eqNull(e._since))) &&
					((e._since = e.options.since),
					this._eqNull(e._since) ||
						((e._since = this.UTCDate(r, this._determineTime(e._since, null))),
						e._since && a && e._since.setMilliseconds(e._since.getMilliseconds() + a)),
					(e._until = this.UTCDate(r, this._determineTime(e.options.until, n))),
					a && e._until.setMilliseconds(e._until.getMilliseconds() + a)),
					(e._show = this._determineShow(e));
			},
			_preDestroy: function (t, e) {
				this._removeElem(t[0]), t.empty();
			},
			pause: function (t) {
				this._hold(t, "pause");
			},
			lap: function (t) {
				this._hold(t, "lap");
			},
			resume: function (t) {
				this._hold(t, null);
			},
			toggle: function (t) {
				this[(p.data(t, this.name) || {})._hold ? "resume" : "pause"](t);
			},
			toggleLap: function (t) {
				this[(p.data(t, this.name) || {})._hold ? "resume" : "lap"](t);
			},
			_hold: function (t, e) {
				var i,
					o = p.data(t, this.name);
				o &&
					("pause" !== o._hold ||
						e ||
						((o._periods = o._savePeriods),
						(i = o._since ? "-" : "+"),
						(o[o._since ? "_since" : "_until"] = this._determineTime(
							i +
								o._periods[0] +
								"y" +
								i +
								o._periods[1] +
								"o" +
								i +
								o._periods[2] +
								"w" +
								i +
								o._periods[3] +
								"d" +
								i +
								o._periods[4] +
								"h" +
								i +
								o._periods[5] +
								"m" +
								i +
								o._periods[6] +
								"s"
						)),
						this._addElem(t)),
					(o._hold = e),
					(o._savePeriods = "pause" === e ? o._periods : null),
					p.data(t, this.name, o),
					this._updateCountdown(t, o));
			},
			getTimes: function (t) {
				t = p.data(t, this.name);
				return t
					? "pause" === t._hold
						? t._savePeriods
						: t._hold
						? this._calculatePeriods(t, t._show, t.options.significant, new Date())
						: t._periods
					: null;
			},
			_determineTime: function (t, e) {
				var i,
					o,
					c = this,
					t = this._eqNull(t)
						? e
						: "string" == typeof t
						? (function (t) {
								t = t.toLowerCase();
								for (
									var e = new Date(),
										i = e.getFullYear(),
										o = e.getMonth(),
										s = e.getDate(),
										n = e.getHours(),
										a = e.getMinutes(),
										r = e.getSeconds(),
										l = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g,
										d = l.exec(t);
									d;

								) {
									switch (d[2] || "s") {
										case "s":
											r += parseInt(d[1], 10);
											break;
										case "m":
											a += parseInt(d[1], 10);
											break;
										case "h":
											n += parseInt(d[1], 10);
											break;
										case "d":
											s += parseInt(d[1], 10);
											break;
										case "w":
											s += 7 * parseInt(d[1], 10);
											break;
										case "o":
											(o += parseInt(d[1], 10)), (s = Math.min(s, c._getDaysInMonth(i, o)));
											break;
										case "y":
											(i += parseInt(d[1], 10)), (s = Math.min(s, c._getDaysInMonth(i, o)));
									}
									d = l.exec(t);
								}
								return new Date(i, o, s, n, a, r, 0);
						  })(t)
						: "number" == typeof t
						? ((i = t), (o = new Date()).setTime(o.getTime() + 1e3 * i), o)
						: t;
				return t && t.setMilliseconds(0), t;
			},
			_getDaysInMonth: function (t, e) {
				return 32 - new Date(t, e, 32).getDate();
			},
			_normalLabels: function (t) {
				return t;
			},
			_generateHTML: function (i) {
				var o = this;
				i._periods = i._hold
					? i._periods
					: this._calculatePeriods(i, i._show, i.options.significant, new Date());
				for (
					var t = !1, e = 0, s = i.options.significant, n = p.extend({}, i._show), a = null, a = 0;
					a <= 6;
					a++
				)
					(t = t || ("?" === i._show[a] && 0 < i._periods[a])),
						(n[a] = "?" !== i._show[a] || t ? i._show[a] : null),
						(e += n[a] ? 1 : 0),
						(s -= 0 < i._periods[a] ? 1 : 0);
				var r = [!1, !1, !1, !1, !1, !1, !1];
				for (a = 6; 0 <= a; a--) i._show[a] && (i._periods[a] ? (r[a] = !0) : ((r[a] = 0 < s), s--));

				function l(t) {
					var e = i.options["compactLabels" + u(i._periods[t])];
					return n[t] ? o._translateDigits(i, i._periods[t]) + (e || c)[t] + " " : "";
				}

				function d(t) {
					var e = i.options["labels" + u(i._periods[t])];
					return (!i.options.significant && n[t]) || (i.options.significant && r[t])
						? '<span class="' +
								o._sectionClass +
								'"><span class="' +
								o._amountClass +
								'">' +
								o._minDigits(i, i._periods[t], h) +
								'</span><span class="' +
								o._periodClass +
								'">' +
								(e || c)[t] +
								"</span></span>"
						: "";
				}
				var c = i.options.compact ? i.options.compactLabels : i.options.labels,
					u = i.options.whichLabels || this._normalLabels,
					h = i.options.padZeroes ? 2 : 1;
				return i.options.layout
					? this._buildLayout(i, n, i.options.layout, i.options.compact, i.options.significant, r)
					: (i.options.compact
							? '<span class="' +
							  this._rowClass +
							  " " +
							  this._amountClass +
							  (i._hold ? " " + this._holdingClass : "") +
							  '">' +
							  l(0) +
							  l(1) +
							  l(2) +
							  l(3) +
							  (n[4] ? this._minDigits(i, i._periods[4], 2) : "") +
							  (n[5]
									? (n[4] ? i.options.timeSeparator : "") + this._minDigits(i, i._periods[5], 2)
									: "") +
							  (n[6]
									? (n[4] || n[5] ? i.options.timeSeparator : "") +
									  this._minDigits(i, i._periods[6], 2)
									: "")
							: '<span class="' +
							  this._rowClass +
							  " " +
							  this._showClass +
							  (i.options.significant || e) +
							  (i._hold ? " " + this._holdingClass : "") +
							  '">' +
							  d(0) +
							  d(1) +
							  d(2) +
							  d(3) +
							  d(4) +
							  d(5) +
							  d(6)) +
							"</span>" +
							(i.options.description
								? '<span class="' +
								  this._rowClass +
								  " " +
								  this._descrClass +
								  '">' +
								  i.options.description +
								  "</span>"
								: "");
			},
			_buildLayout: function (i, t, e, o, s, n) {
				for (
					var a = i.options[o ? "compactLabels" : "labels"],
						r = i.options.whichLabels || this._normalLabels,
						l = function (t) {
							return (i.options[(o ? "compactLabels" : "labels") + r(i._periods[t])] || a)[t];
						},
						d = function (t, e) {
							return i.options.digits[Math.floor(t / e) % 10];
						},
						d = {
							desc: i.options.description,
							sep: i.options.timeSeparator,
							yl: l(0),
							yn: this._minDigits(i, i._periods[0], 1),
							ynn: this._minDigits(i, i._periods[0], 2),
							ynnn: this._minDigits(i, i._periods[0], 3),
							y1: d(i._periods[0], 1),
							y10: d(i._periods[0], 10),
							y100: d(i._periods[0], 100),
							y1000: d(i._periods[0], 1e3),
							ol: l(1),
							on: this._minDigits(i, i._periods[1], 1),
							onn: this._minDigits(i, i._periods[1], 2),
							onnn: this._minDigits(i, i._periods[1], 3),
							o1: d(i._periods[1], 1),
							o10: d(i._periods[1], 10),
							o100: d(i._periods[1], 100),
							o1000: d(i._periods[1], 1e3),
							wl: l(2),
							wn: this._minDigits(i, i._periods[2], 1),
							wnn: this._minDigits(i, i._periods[2], 2),
							wnnn: this._minDigits(i, i._periods[2], 3),
							w1: d(i._periods[2], 1),
							w10: d(i._periods[2], 10),
							w100: d(i._periods[2], 100),
							w1000: d(i._periods[2], 1e3),
							dl: l(3),
							dn: this._minDigits(i, i._periods[3], 1),
							dnn: this._minDigits(i, i._periods[3], 2),
							dnnn: this._minDigits(i, i._periods[3], 3),
							d1: d(i._periods[3], 1),
							d10: d(i._periods[3], 10),
							d100: d(i._periods[3], 100),
							d1000: d(i._periods[3], 1e3),
							hl: l(4),
							hn: this._minDigits(i, i._periods[4], 1),
							hnn: this._minDigits(i, i._periods[4], 2),
							hnnn: this._minDigits(i, i._periods[4], 3),
							h1: d(i._periods[4], 1),
							h10: d(i._periods[4], 10),
							h100: d(i._periods[4], 100),
							h1000: d(i._periods[4], 1e3),
							ml: l(5),
							mn: this._minDigits(i, i._periods[5], 1),
							mnn: this._minDigits(i, i._periods[5], 2),
							mnnn: this._minDigits(i, i._periods[5], 3),
							m1: d(i._periods[5], 1),
							m10: d(i._periods[5], 10),
							m100: d(i._periods[5], 100),
							m1000: d(i._periods[5], 1e3),
							sl: l(6),
							sn: this._minDigits(i, i._periods[6], 1),
							snn: this._minDigits(i, i._periods[6], 2),
							snnn: this._minDigits(i, i._periods[6], 3),
							s1: d(i._periods[6], 1),
							s10: d(i._periods[6], 10),
							s100: d(i._periods[6], 100),
							s1000: d(i._periods[6], 1e3),
						},
						c = e,
						u = 0;
					u <= 6;
					u++
				)
					var h = "yowdhms".charAt(u),
						h = new RegExp("\\{" + h + "<\\}([\\s\\S]*)\\{" + h + ">\\}", "g"),
						c = c.replace(h, (!s && t[u]) || (s && n[u]) ? "$1" : "");
				return (
					p.each(d, function (t, e) {
						t = new RegExp("\\{" + t + "\\}", "g");
						c = c.replace(t, e);
					}),
					c
				);
			},
			_minDigits: function (t, e, i) {
				return (e = "" + e).length >= i
					? this._translateDigits(t, e)
					: this._translateDigits(t, (e = "0000000000" + e).substr(e.length - i));
			},
			_translateDigits: function (e, t) {
				return ("" + t).replace(/[0-9]/g, function (t) {
					return e.options.digits[t];
				});
			},
			_determineShow: function (t) {
				var e = t.options.format,
					t = [];
				return (
					(t[0] = e.match("y") ? "?" : e.match("Y") ? "!" : null),
					(t[1] = e.match("o") ? "?" : e.match("O") ? "!" : null),
					(t[2] = e.match("w") ? "?" : e.match("W") ? "!" : null),
					(t[3] = e.match("d") ? "?" : e.match("D") ? "!" : null),
					(t[4] = e.match("h") ? "?" : e.match("H") ? "!" : null),
					(t[5] = e.match("m") ? "?" : e.match("M") ? "!" : null),
					(t[6] = e.match("s") ? "?" : e.match("S") ? "!" : null),
					t
				);
			},
			_calculatePeriods: function (t, i, e, o) {
				(t._now = o), t._now.setMilliseconds(0);
				var s = new Date(t._now.getTime());
				t._since
					? o.getTime() < t._since.getTime()
						? (t._now = o = s)
						: (o = t._since)
					: (s.setTime(t._until.getTime()), o.getTime() > t._until.getTime() && (t._now = o = s));
				var n,
					a,
					r,
					l = [0, 0, 0, 0, 0, 0, 0];
				(i[0] || i[1]) &&
					((r = this._getDaysInMonth(o.getFullYear(), o.getMonth())),
					(a = this._getDaysInMonth(s.getFullYear(), s.getMonth())),
					(n =
						s.getDate() === o.getDate() ||
						(s.getDate() >= Math.min(r, a) && o.getDate() >= Math.min(r, a))),
					(a = function (t) {
						return 60 * (60 * t.getHours() + t.getMinutes()) + t.getSeconds();
					}),
					(a = Math.max(
						0,
						12 * (s.getFullYear() - o.getFullYear()) +
							s.getMonth() -
							o.getMonth() +
							((s.getDate() < o.getDate() && !n) || (n && a(s) < a(o)) ? -1 : 0)
					)),
					(l[0] = i[0] ? Math.floor(a / 12) : 0),
					(l[1] = i[1] ? a - 12 * l[0] : 0),
					(a = (o = new Date(o.getTime())).getDate() === r),
					(r = this._getDaysInMonth(o.getFullYear() + l[0], o.getMonth() + l[1])),
					o.getDate() > r && o.setDate(r),
					o.setFullYear(o.getFullYear() + l[0]),
					o.setMonth(o.getMonth() + l[1]),
					a && o.setDate(r));
				var d = Math.floor((s.getTime() - o.getTime()) / 1e3),
					c = null,
					o = function (t, e) {
						(l[t] = i[t] ? Math.floor(d / e) : 0), (d -= l[t] * e);
					};
				if ((o(2, 604800), o(3, 86400), o(4, 3600), o(5, 60), o(6, 1), 0 < d && !t._since))
					for (var u = [1, 12, 4.3482, 7, 24, 60, 60], h = 6, p = 1, c = 6; 0 <= c; c--)
						i[c] && (l[h] >= p && ((l[h] = 0), (d = 1)), 0 < d && (l[c]++, (d = 0), (h = c), (p = 1))),
							(p *= u[c]);
				if (e) for (c = 0; c <= 6; c++) e && l[c] ? e-- : e || (l[c] = 0);
				return l;
			},
		});
	})(jQuery),
	jQuery(document).ready(function () {
		jQuery(".ult_colorlink").hover(
			function () {
				var t = jQuery(this).data("style");
				"Style_6" == t &&
					((e = jQuery(this).find(".ult_btn6_link_top").data("color")),
					jQuery(this)
						.find(".ult_btn6_link_top")
						.css("text-shadow", "10px 0 " + e + ", -10px 0 " + e),
					jQuery(this).find(".ult_btn6_link_top").css("color", e)),
					"Style_10" == t &&
						((i = jQuery(this).find(".ult_btn10_span").data("bhover")),
						" " != jQuery(this).find(".ult_btn10_span").data("bstyle") &&
							(jQuery(this).find(".ult_btn10_span").css("border-top-style", "solid"),
							jQuery(this).find(".ult_btn10_span").css("border-top-color", i)));
				var e = jQuery(this).data("texthover"),
					i = jQuery(this).data("bghover");
				jQuery(this).css("color", e),
					jQuery(this).find(".ult_btn10_span").css("color", e),
					"Style_2" == t && jQuery(this).find(".ult_btn10_span").css("background", i);
			},
			function () {
				var t = jQuery(this).data("style");
				"Style_6" == t && jQuery(this).find(".ult_btn6_link_top").removeAttr("style"),
					"Style_10" == t &&
						((i = jQuery(this).find(".ult_btn10_span").data("color")),
						" " != (e = jQuery(this).find(".ult_btn10_span").data("bstyle")) &&
							(jQuery(this).find(".ult_btn10_span").css("border-top-style", e),
							jQuery(this).find(".ult_btn10_span").css("border-top-color", i)));
				var e = jQuery(this).data("textcolor"),
					i = jQuery(this).data("bgcolor");
				jQuery(this).css("color", e),
					jQuery(this).find(".ult_btn10_span").css("color", e),
					"Style_2" == t && jQuery(this).find(".ult_btn10_span").css("background", i);
			}
		);
	}),
	jQuery(window).on("load", function () {
		ult_creative_link_ht();
	}),
	jQuery(document).ready(function (t) {
		ult_creative_link_ht();
	}),
	jQuery(window).resize(function (t) {
		ult_creative_link_ht();
	}),
	(function (c) {
		"use strict";

		function s(t, e) {
			var i, o;
			(i = parseInt(e.outerHeight())),
				t.css("padding-top", (o = i / 2) + "px"),
				t.parent().css("margin-top", o + 20 + "px"),
				e.css("top", -i + "px");
		}

		function n(t) {
			0 < t.find(".timeline-icon-block").length &&
				c(".timeline-block").each(function (t, e) {
					const i = c(this).find(".timeline-header-block"),
						o = c(this).find(".timeline-icon-block");
					o.css({
						position: "absolute",
					});
					var s = o.outerHeight(),
						n = o.outerWidth(),
						a = -n / 2;
					parseInt(
						i
							.find(".timeline-header")
							.css("padding-left")
							.replace(/[^\d.]/g, "")
					);
					c(this).hasClass("timeline-post-left")
						? (o.css({
								left: a,
								right: "auto",
						  }),
						  jQuery("body").hasClass("rtl") &&
								o.css({
									left: "auto",
									right: a,
								}))
						: c(this).hasClass("timeline-post-right") &&
						  (o.css({
								left: "auto",
								right: a,
						  }),
						  jQuery("body").hasClass("rtl") &&
								o.css({
									left: a,
									right: "auto",
								}));
					a = i.height();
					o.css({
						top: a / 2 - s / 2,
					});
					(a = o.offset().left), (s = c(window).width());
					(a < 0 || s < a + n) &&
						(o.css({
							position: "relative",
							top: "auto",
							left: "auto",
							right: "auto",
							"text-align": "center",
						}),
						o.children().children().css({
							margin: "10px auto",
						}),
						i.css({
							padding: "0",
						}));
				});
		}

		function i() {
			jQuery(".ult-animation").each(function () {
				if (jQuery(this).attr("data-animate")) {
					var e = jQuery(this).children("*");
					const n = jQuery(this).attr("data-animate"),
						t = jQuery(this).attr("data-animation-duration") + "s",
						o = jQuery(this).attr("data-animation-iteration"),
						s = jQuery(this).attr("data-animation-delay"),
						a =
							(jQuery(this).attr("data-opacity_start_effect"),
							"opacity:1;-webkit-animation-delay:" +
								s +
								"s;-webkit-animation-duration:" +
								t +
								";-webkit-animation-iteration-count:" +
								o +
								"; -moz-animation-delay:" +
								s +
								"s;-moz-animation-duration:" +
								t +
								";-moz-animation-iteration-count:" +
								o +
								"; animation-delay:" +
								s +
								"s;animation-duration:" +
								t +
								";animation-iteration-count:" +
								o +
								";");
					var i =
						"opacity:1;-webkit-transition-delay: " +
						s +
						"s; -moz-transition-delay: " +
						s +
						"s; transition-delay: " +
						s +
						"s;";
					if (r(jQuery(this))) {
						let t = jQuery(this).attr("style");
						void 0 === t && (t = "test"),
							(t = t.replace(/ /g, "")),
							"opacity:0;" == t && 0 !== t.indexOf(i) && jQuery(this).attr("style", i),
							jQuery.each(e, function (t, e) {
								const i = jQuery(e);
								let o = i.attr("style");
								void 0 === o && (o = "test");
								let s = "";
								(s = 0 == o.indexOf(a) ? o : a + o),
									i.attr("style", s),
									r(i) && i.addClass("animated").addClass(n);
							});
					}
				}
			});
		}

		function r(t) {
			var e,
				i = jQuery(window).scrollTop(),
				o = jQuery(window).height();
			e =
				void 0 ===
					(e = jQuery(t).hasClass("ult-animate-viewport") ? jQuery(t).data("opacity_start_effect") : e) ||
				"" == e
					? 2
					: 100 - e;
			jQuery(t).outerHeight();
			return jQuery(t).offset().top - i <= o - o * (e / 100);
		}

		function a() {
			const t = jQuery(".ult-new-ib");
			t.each(function (t, e) {
				const i = jQuery(this);
				var o, s;
				i.hasClass("ult-ib-resp") &&
					((o = jQuery(document).width()),
					(s = i.data("min-width")),
					o <= i.data("max-width") && s <= o
						? i.find(".ult-new-ib-content").hide()
						: i.find(".ult-new-ib-content").show());
			});
		}
		(c.fn.vc_translate_row = function () {
			const l = c(window).scrollTop(),
				d = c(window).height();
			c(this).each(function (t, e) {
				let i = c(e).attr("data-row-effect-mobile-disable");
				if (
					((i = void 0 === i ? "false" : i.toString()),
					"false" ==
						("true" ==
							(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
								? "true"
								: "false") && "true" == i
							? "true"
							: "false"))
				) {
					var o = c(e).outerHeight(),
						s = c(e).offset().top - l,
						n = s + o,
						a = c(e).attr("data-parallax-content-sense") / 100,
						r = 0;
					(n <= d - 0 * d && s <= 0 && !((r = o > d ? (d - n) * a : -s * a) < 0)) || (r = 0);
					c(e)
						.find(".vc-row-translate-wrapper")
						.children()
						.each(function (t, e) {
							jQuery(e).is(
								".upb_row_bg,.upb_video-wrapper,.ult-vc-seperator,.ult-easy-separator-wrapper"
							) ||
								c(e).css({
									transform: "translate3d(0," + r + "px,0)",
									"-webkit-transform": "translate3d(0," + r + "px,0)",
									"-ms-transform": "translate3d(0," + r + "px,0)",
								});
						});
				}
			});
		}),
			(c.fn.vc_fade_row = function () {
				const a = c(window).scrollTop(),
					r = c(window).height();
				c(this).each(function (t, e) {
					let i = c(e).attr("data-row-effect-mobile-disable");
					if (
						((i = void 0 === i ? "false" : i.toString()),
						"false" ==
							("true" ==
								(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
									navigator.userAgent
								)
									? "true"
									: "false") && "true" == i
								? "true"
								: "false"))
					) {
						var o = 100 - (o = c(e).data("fadeout-percentage")),
							s = c(e).outerHeight(),
							n = c(e).offset().top - a + s;
						let i = 1;
						(s = r - r * (o / 100)), (o = ((s - n) / s) * 1);
						0 < o && (i = 1 - o),
							n <= s
								? (i < 0 ? (i = 0) : 1 < i && (i = 1),
								  c(e)
										.children()
										.each(function (t, e) {
											c(e).is(".upb_row_bg,.upb_video-wrapper,.ult-vc-seperator") ||
												c(e).css({
													opacity: i,
												});
										}))
								: c(e)
										.children()
										.each(function (t, e) {
											c(e).css({
												opacity: i,
											});
										});
					}
				});
			}),
			jQuery(document).ready(function () {
				!(function () {
					let r = "";
					c(".ult-spacer").each(function (t, e) {
						var i = c(e).data("id"),
							o = (c("body").width(), c(e).data("height-mobile")),
							s = c(e).data("height-mobile-landscape"),
							n = c(e).data("height-tab"),
							a = c(e).data("height-tab-portrait"),
							e = c(e).data("height");
						"" != e && (r += " .spacer-" + i + " { height:" + e + "px } "),
							("" == n && "0" != n && 0 != n) ||
								(r += " @media (max-width: 1199px) { .spacer-" + i + " { height:" + n + "px } } "),
							void 0 === a ||
								("" == a && "0" != a && 0 != a) ||
								(r += " @media (max-width: 991px) { .spacer-" + i + " { height:" + a + "px } } "),
							void 0 === s ||
								("" == s && "0" != s && 0 != s) ||
								(r += " @media (max-width: 767px) { .spacer-" + i + " { height:" + s + "px } } "),
							("" == o && "0" != o && 0 != o) ||
								(r += " @media (max-width: 479px) { .spacer-" + i + " { height:" + o + "px } } ");
					}),
						"" != r && ((r = "<style>" + r + "</style>"), c("head").append(r));
				})();
			}),
			jQuery(window).scroll(function () {
				var t = jQuery(".ult-no-mobile").length;
				/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && 1 <= t
					? jQuery(".ult-animation").css("opacity", 1)
					: i(),
					c(".vc-row-fade").vc_fade_row(),
					c(".vc-row-translate").vc_translate_row();
			}),
			jQuery(window).on("load", function () {
				jQuery(".ult-banner-block-custom-height").each(function (t, e) {
					const i = jQuery(this).find("img");
					var o = jQuery(this).width(),
						s = jQuery(this).height();
					i.width();
					s < o &&
						i.css({
							width: "100%",
							height: "auto",
						});
				}),
					jQuery(".ult-new-ib").each(function (t, e) {
						("ontouchstart" in window || 0 < navigator.MaxTouchPoints || 0 < navigator.msMaxTouchPoints) &&
							jQuery(this)
								.find(".ult-new-ib-link")
								.click(function (t) {
									t.preventDefault();
									const e = jQuery(this).attr("href");
									let i = jQuery(this).data("touch-delay");
									null == i && (i = 200),
										setTimeout(function () {
											window.location = e;
										}, i);
								});
					});
				let t = 0,
					e = 0;
				const i = function () {
					jQuery(".ifb-jq-height").each(function () {
						jQuery(this).find(".ifb-back").css("height", "auto"),
							jQuery(this).find(".ifb-front").css("height", "auto");
						var t = parseInt(jQuery(this).find(".ifb-front > div").outerHeight(!0)),
							e = parseInt(jQuery(this).find(".ifb-back > div").outerHeight(!0)),
							e = e < t ? t : e;
						jQuery(this)
							.find(".ifb-front")
							.css("height", e + "px"),
							jQuery(this)
								.find(".ifb-back")
								.css("height", e + "px"),
							(jQuery(this).hasClass("vertical_door_flip") ||
								jQuery(this).hasClass("horizontal_door_flip") ||
								jQuery(this).hasClass("style_9")) &&
								jQuery(this)
									.find(".ifb-flip-box")
									.css("height", e + "px");
					}),
						jQuery(".ifb-auto-height").each(function () {
							var t, e;
							(jQuery(this).hasClass("horizontal_door_flip") ||
								jQuery(this).hasClass("vertical_door_flip")) &&
								((t = parseInt(jQuery(this).find(".ifb-front > div").outerHeight())),
								(e = (e = parseInt(jQuery(this).find(".ifb-back > div").outerHeight())) < t ? t : e),
								jQuery(this)
									.find(".ifb-flip-box")
									.css("height", e + "px"));
						});
				};
				-1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome")
					? setTimeout(function () {
							i();
					  }, 500)
					: i(),
					jQuery(document).on("ultAdvancedTabClicked", function (t, e) {
						i();
					}),
					jQuery(window).resize(function () {
						t++,
							setTimeout(function () {
								e++, t == e && i();
							}, 500);
					});
				let o = 0;
				jQuery(window).resize(function () {
					a(),
						jQuery(".csstime.smile-icon-timeline-wrap").each(function () {
							n(jQuery(this));
						}),
						c(".jstime .timeline-wrapper").each(function () {
							n(jQuery(this));
						}),
						"none" == jQuery(".smile-icon-timeline-wrap.jstime .timeline-line").css("display")
							? 0 === o && (c(".jstime .timeline-wrapper").masonry("destroy"), (o = 1))
							: 1 == o &&
							  (jQuery(".jstime .timeline-wrapper").masonry({
									itemSelector: ".timeline-block",
							  }),
							  setTimeout(function () {
									jQuery(".jstime .timeline-wrapper").masonry({
										itemSelector: ".timeline-block",
										width: "401px",
									}),
										jQuery(this)
											.find(".timeline-block")
											.each(function () {
												jQuery(this).css("left", "initial"),
													"0px" == jQuery(this).css("left")
														? jQuery(this).addClass("timeline-post-left")
														: jQuery(this).addClass("timeline-post-right");
											}),
										(o = 0);
							  }, 300));
				}),
					c(".smile-icon-timeline-wrap").each(function () {
						var t = jQuery(this).data("timeline-cutom-width");
						t && jQuery(this).css("width", 2 * t + 40 + "px");
						parseInt(jQuery(this).width()), parseInt(jQuery(this).find(".timeline-block").width());
						c(".jstime .timeline-wrapper").each(function () {
							jQuery(this).masonry({
								itemSelector: ".timeline-block",
							});
						}),
							setTimeout(function () {
								c(".jstime .timeline-wrapper").each(function () {
									jQuery(this)
										.find(".timeline-block")
										.each(function () {
											"0px" == jQuery(this).css("left")
												? jQuery(this).addClass("timeline-post-left")
												: jQuery(this).addClass("timeline-post-right"),
												n(jQuery(this));
										}),
										jQuery(".timeline-block").each(function () {
											var t =
												parseInt(jQuery(this).css("top")) -
												parseInt(jQuery(this).next().css("top"));
											(t < 14 && 0 < t) || 0 == t
												? jQuery(this).next().addClass("time-clash-right")
												: -14 < t && jQuery(this).next().addClass("time-clash-left");
										});
								}),
									jQuery(".timeline-post-right").each(function () {
										var t = jQuery(this).find(".timeline-icon-block").clone();
										jQuery(this).find(".timeline-icon-block").remove(),
											jQuery(this).find(".timeline-header-block").after(t);
									}),
									jQuery(".smile-icon-timeline-wrap").each(function () {
										var t = jQuery(this).data("time_block_bg_color");
										jQuery(this).find(".timeline-block").css("background-color", t),
											jQuery(this)
												.find(".timeline-post-left.timeline-block l")
												.css("border-left-color", t),
											jQuery(this)
												.find(".timeline-post-right.timeline-block l")
												.css("border-right-color", t),
											jQuery(this).find(".feat-item").css("background-color", t),
											0 < jQuery(this).find(".feat-item").find(".feat-top").length
												? jQuery(this).find(".feat-item l").css("border-top-color", t)
												: jQuery(this).find(".feat-item l").css("border-bottom-color", t),
											jQuery(".jstime.timeline_preloader").remove(),
											jQuery(this).find("div").hasClass("timeline-wrapper")
												? jQuery(this).css("opacity", "1")
												: jQuery(this).remove();
									});
							}, 1e3),
							jQuery(this).find(".timeline-line ").next().hasClass("timeline-separator-text") ||
								jQuery(this).find(".timeline-line").prepend("<span></span>");
						var t = jQuery(this).data("time_sep_color"),
							e = jQuery(this).data("time_sep_bg_color"),
							i = jQuery(".smile-icon-timeline-wrap .timeline-line").css("border-right-color");
						jQuery(this).find(".timeline-dot").css("background-color", e),
							jQuery(this).find(".timeline-line span").css("background-color", e),
							jQuery(this).find(".timeline-line span").css("background-color", e),
							jQuery(this).find(".timeline-separator-text").css("color", t),
							jQuery(this).find(".timeline-separator-text .sep-text").css("background-color", e),
							jQuery(this)
								.find(".ult-timeline-arrow s")
								.css("border-color", "rgba(255, 255, 255, 0) " + i),
							jQuery(this)
								.find(".feat-item .ult-timeline-arrow s")
								.css("border-color", i + " rgba(255, 255, 255, 0)"),
							jQuery(this).find(".timeline-block").css("border-color", i),
							jQuery(this).find(".feat-item").css("border-color", i);
					});
			}),
			jQuery(document).ready(function (t) {
				var e = jQuery(".ult-no-mobile").length;
				/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && 1 <= e
					? jQuery(".ult-animation").css("opacity", 1)
					: i(),
					a(),
					jQuery(".ubtn")
						.on("mouseenter", function () {
							const t = jQuery(this);
							t.find(".ubtn-text").css("color", t.data("hover")),
								t
									.find(".ubtn-hover")
									.css("background", t.data("hover-bg"))
									.addClass("ubtn-hover-active");
							const e = "" != t.data("hover-bg") && t.data("hover-bg");
							setTimeout(function () {
								!1 !== e && t.hasClass(".ubtn-fade-bg") && t.css("background", t.data("hover-bg"));
							}, 150);
							let i = t.attr("style");
							var o;
							"" != t.data("shadow-hover") &&
								(t.css("box-shadow"), (i += "box-shadow:" + t.data("shadow-hover"))),
								t.attr("style", i),
								"" != t.data("border-hover") && t.css("border-color", t.data("border-hover")),
								"none" != t.data("shadow-click") &&
									((o = t.data("shd-shadow") - 3),
									"" != t.is(".shd-left")
										? t.css({
												right: o,
										  })
										: "" != t.is(".shd-right")
										? t.css({
												left: o,
										  })
										: "" != t.is(".shd-top")
										? t.css({
												bottom: o,
										  })
										: "" != t.is(".shd-bottom") &&
										  t.css({
												top: o,
										  }));
						})
						.on("mouseleave", function () {
							const t = jQuery(this);
							t.find(".ubtn-text").removeAttr("style"),
								t.find(".ubtn-hover").removeClass("ubtn-hover-active"),
								t.css("background", t.data("bg"));
							var e = t.data("border-color");
							let i = t.attr("style");
							"" != t.data("shadow-hover") && (i += "box-shadow:" + t.data("shadow")),
								t.attr("style", i),
								"" != t.data("border-hover") && t.css("border-color", e),
								"none" != t.data("shadow-click") &&
									(t.removeClass("no-ubtn-shadow"),
									"" != t.is(".shd-left")
										? t.css({
												right: "auto",
										  })
										: "" != t.is(".shd-right")
										? t.css({
												left: "auto",
										  })
										: "" != t.is(".shd-top")
										? t.css({
												bottom: "auto",
										  })
										: "" != t.is(".shd-bottom") &&
										  t.css({
												top: "auto",
										  }));
						}),
					jQuery(".ubtn").on("focus blur mousedown mouseup", function (t) {
						const e = jQuery(this);
						"none" != e.data("shadow-click") &&
							setTimeout(function () {
								e.is(":focus")
									? (e.addClass("no-ubtn-shadow"),
									  "" != e.is(".shd-left")
											? e.css({
													right: e.data("shd-shadow") + "px",
											  })
											: "" != e.is(".shd-right")
											? e.css({
													left: e.data("shd-shadow") + "px",
											  })
											: "" != e.is(".shd-top")
											? e.css({
													bottom: e.data("shd-shadow") + "px",
											  })
											: "" != e.is(".shd-bottom") &&
											  e.css({
													top: e.data("shd-shadow") + "px",
											  }))
									: (e.removeClass("no-ubtn-shadow"),
									  "" != e.is(".shd-left")
											? e.css({
													right: "auto",
											  })
											: "" != e.is(".shd-right")
											? e.css({
													left: "auto",
											  })
											: "" != e.is(".shd-top")
											? e.css({
													bottom: "auto",
											  })
											: "" != e.is(".shd-bottom") &&
											  e.css({
													top: "auto",
											  }));
							}, 0);
					}),
					jQuery(".ubtn").focusout(function () {
						const t = jQuery(this);
						t.removeClass("no-ubtn-shadow"),
							"" != t.is(".shd-left")
								? t.css({
										right: "auto",
								  })
								: "" != t.is(".shd-right")
								? t.css({
										left: "auto",
								  })
								: "" != t.is(".shd-top")
								? t.css({
										bottom: "auto",
								  })
								: "" != t.is(".shd-bottom") &&
								  t.css({
										top: "auto",
								  });
					}),
					jQuery(".smile-icon-timeline-wrap.jstime").css("opacity", "0"),
					jQuery(".jstime.timeline_preloader").css("opacity", "1"),
					jQuery(".smile-icon-timeline-wrap.csstime .timeline-wrapper").each(function () {
						jQuery(".csstime .timeline-block:even").addClass("timeline-post-left"),
							jQuery(".csstime .timeline-block:odd").addClass("timeline-post-right");
					}),
					jQuery(".csstime .timeline-post-right").each(function () {
						jQuery(this).css("float", "right"),
							jQuery("<div style='clear:both'></div>").insertAfter(jQuery(this));
					}),
					jQuery(".csstime.smile-icon-timeline-wrap").each(function () {
						var t = jQuery(this).data("time_block_bg_color");
						jQuery(this).find(".timeline-block").css("background-color", t),
							jQuery(this).find(".timeline-post-left.timeline-block l").css("border-left-color", t),
							jQuery(this).find(".timeline-post-right.timeline-block l").css("border-right-color", t),
							jQuery(this).find(".feat-item").css("background-color", t),
							0 < jQuery(this).find(".feat-item").find(".feat-top").length
								? jQuery(this).find(".feat-item l").css("border-top-color", t)
								: jQuery(this).find(".feat-item l").css("border-bottom-color", t),
							n(jQuery(this));
					}),
					jQuery(
						".aio-icon, .aio-icon-img, .flip-box, .ultb3-info, .icon_list_icon, .ult-banner-block, .uavc-list-icon, .ult_tabs, .icon_list_connector"
					).each(function () {
						if (jQuery(this).attr("data-animation")) {
							const e = jQuery(this).attr("data-animation"),
								i = "delay-" + jQuery(this).attr("data-animation-delay");
							if (void 0 === e || "" === e) return !1;
							t(this).bsf_appear(function () {
								const t = jQuery(this);
								t.addClass("animated").addClass(e), t.addClass("animated").addClass(i);
							});
						}
					}),
					jQuery(".stats-block").each(function () {
						t(this).bsf_appear(function () {
							var t = parseFloat(jQuery(this).find(".stats-number").data("counter-value"));
							const e = jQuery(this).find(".stats-number").data("counter-value") + " ";
							var i = parseInt(jQuery(this).find(".stats-number").data("speed")),
								o = jQuery(this).find(".stats-number").data("id"),
								s = jQuery(this).find(".stats-number").data("separator");
							let n = jQuery(this).find(".stats-number").data("decimal"),
								a = e.split(".");
							a = a[1] ? a[1].length - 1 : 0;
							let r = !0;
							"none" == n && (n = ""), (r = "none" != s);
							s = {
								useEasing: !0,
								useGrouping: r,
								separator: s,
								decimal: n,
							};
							const l = new countUp(o, 0, t, a, i, s);
							setTimeout(function () {
								l.start();
							}, 500);
						});
					}),
					/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
						? jQuery(".ifb-flip-box").on("click", function (t) {
								const e = jQuery(this);
								e.hasClass("ifb-hover") ? e.removeClass("ifb-hover") : e.addClass("ifb-hover");
						  })
						: jQuery(document).on("mouseenter mouseleave", ".ifb-flip-box", function (t) {
								const e = jQuery(this);
								e.hasClass("ifb-hover") ? e.removeClass("ifb-hover") : e.addClass("ifb-hover");
						  }),
					jQuery(".ifb-flip-box").each(function (t, e) {
						jQuery(this).parent().hasClass("style_9") &&
							(jQuery(this)
								.on("mouseenter", function () {
									jQuery(this).addClass("ifb-door-hover");
								})
								.on("mouseleave", function () {
									jQuery(this).removeClass("ifb-door-hover");
								}),
							jQuery(this).on("click", function () {
								jQuery(this).toggleClass("ifb-door-right-open"),
									jQuery(this).removeClass("ifb-door-hover");
							}));
					}),
					jQuery(document).on("click", ".ifb-flip-box", function (t) {
						t.stopPropagation(), jQuery(document).trigger("ultFlipBoxClicked", jQuery(this));
					}),
					jQuery(".vertical_door_flip .ifb-front").each(function () {
						jQuery(this).wrap('<div class="v_door ifb-multiple-front ifb-front-1"></div>'),
							jQuery(this)
								.parent()
								.clone()
								.removeClass("ifb-front-1")
								.addClass("ifb-front-2")
								.insertAfter(jQuery(this).parent());
					}),
					jQuery(".reverse_vertical_door_flip .ifb-back").each(function () {
						jQuery(this).wrap('<div class="rv_door ifb-multiple-back ifb-back-1"></div>'),
							jQuery(this)
								.parent()
								.clone()
								.removeClass("ifb-back-1")
								.addClass("ifb-back-2")
								.insertAfter(jQuery(this).parent());
					}),
					jQuery(".horizontal_door_flip .ifb-front").each(function () {
						jQuery(this).wrap('<div class="h_door ifb-multiple-front ifb-front-1"></div>'),
							jQuery(this)
								.parent()
								.clone()
								.removeClass("ifb-front-1")
								.addClass("ifb-front-2")
								.insertAfter(jQuery(this).parent());
					}),
					jQuery(".reverse_horizontal_door_flip .ifb-back").each(function () {
						jQuery(this).wrap('<div class="rh_door ifb-multiple-back ifb-back-1"></div>'),
							jQuery(this)
								.parent()
								.clone()
								.removeClass("ifb-back-1")
								.addClass("ifb-back-2")
								.insertAfter(jQuery(this).parent());
					}),
					jQuery(".style_9 .ifb-front").each(function () {
						jQuery(this).wrap('<div class="new_style_9 ifb-multiple-front ifb-front-1"></div>'),
							jQuery(this)
								.parent()
								.clone()
								.removeClass("ifb-front-1")
								.addClass("ifb-front-2")
								.insertAfter(jQuery(this).parent());
					}),
					jQuery(".style_9 .ifb-back").each(function () {
						jQuery(this).wrap('<div class="new_style_9 ifb-multiple-back ifb-back-1"></div>'),
							jQuery(this)
								.parent()
								.clone()
								.removeClass("ifb-back-1")
								.addClass("ifb-back-2")
								.insertAfter(jQuery(this).parent());
					}),
					/^((?!chrome).)*safari/i.test(navigator.userAgent) &&
						(jQuery(".vertical_door_flip").each(function (t, e) {
							var i = jQuery(this).find(".flip_link").outerHeight();
							jQuery(this)
								.find(".flip_link")
								.css("top", -i / 2 + "px"),
								jQuery(this).find(".ifb-multiple-front").css("width", "50.2%");
						}),
						jQuery(".horizontal_door_flip").each(function (t, e) {
							var i = jQuery(this).find(".flip_link").outerHeight();
							jQuery(this)
								.find(".flip_link")
								.css("top", -i / 2 + "px"),
								jQuery(this).find(".ifb-multiple-front").css("height", "50.2%");
						}),
						jQuery(".reverse_vertical_door_flip").each(function (t, e) {
							var i = jQuery(this).find(".flip_link").outerHeight();
							jQuery(this)
								.find(".flip_link")
								.css("top", -i / 2 + "px");
						}),
						jQuery(".reverse_horizontal_door_flip").each(function (t, e) {
							var i = jQuery(this).find(".flip_link").outerHeight();
							jQuery(this)
								.find(".flip_link")
								.css("top", -i / 2 + "px"),
								jQuery(this).find(".ifb-back").css("position", "inherit");
						})),
					jQuery(".square_box-icon").each(function (t, e) {
						const i = jQuery(this);
						var o;
						0 < jQuery(this).find(".aio-icon-img").length
							? ((o = jQuery(this).find(".aio-icon-img")),
							  s(i, o),
							  o.find(".img-icon").on("load", function () {
									s(i, o);
							  }))
							: ((o = jQuery(this).find(".aio-icon")),
							  s(i, o),
							  jQuery(window).on("load", function () {
									s(i, o);
							  }));
					});
			});
	})(jQuery),
	jQuery(document).ready(function () {
		function t() {
			jQuery(".ult-new-ib").each(function (t, e) {
				var i,
					o = jQuery(this).data("min-height") || "";
				jQuery(this).find(".ult-new-ib-img").data("min-height"),
					jQuery(this).find(".ult-new-ib-img").data("max-width");
				"" != o &&
					(jQuery(this).addClass("ult-ib2-min-height"),
					jQuery(this).css("height", o),
					jQuery(this).find(".ult-new-ib-img").removeClass("ult-ib2-toggle-size"),
					jQuery(this).find(".ult-new-ib-img").width(),
					(i = jQuery(this).find(".ult-new-ib-img").height()),
					(jQuery(this).width() <= o || i < o) &&
						jQuery(this).find(".ult-new-ib-img").addClass("ult-ib2-toggle-size")),
					jQuery(this)
						.on("mouseenter", function () {
							jQuery(this).find(".ult-new-ib-img").css("opacity", jQuery(this).data("hover-opacity"));
						})
						.on("mouseleave", function () {
							jQuery(this).find(".ult-new-ib-img").css("opacity", jQuery(this).data("opacity"));
						});
			});
		}
		t(),
			jQuery(window).on("load", function () {
				t();
			}),
			jQuery(window).resize(function () {
				t();
			});
	}),
	jQuery(document).ready(function () {
		function i() {
			jQuery(".ultimate-map-wrapper").each(function (t, e) {
				var i = jQuery(e).attr("id");
				if (void 0 === i || "" === i) return !1;
				var o = jQuery(e).find(".ultimate_google_map").attr("id"),
					s = jQuery("#" + o).attr("data-map_override");
				let n = "true";
				jQuery("#" + o).css({
					"margin-left": 0,
				}),
					jQuery("#" + o).css({
						right: 0,
					});
				let a = jQuery("#" + i).parent();
				a;
				if (
					("full" == s && ((a = jQuery("body")), (n = "false")),
					"ex-full" == s && ((a = jQuery("html")), (n = "false")),
					!isNaN(s))
				)
					for (t = 0; t < s && "HTML" != a.prop("tagName"); t++) a = a.parent();
				e = 0 == s || "0" == s ? a.width() : a.outerWidth();
				i = a.offset().left - jQuery("#" + o).offset().left;
				if (
					(jQuery("#" + o).css({
						width: e,
					}),
					(0 == s && "0" == s) ||
						jQuery("#" + o).css({
							"margin-left": i,
						}),
					"full" == s && jQuery("body").hasClass("rtl"))
				) {
					const r = jQuery("#" + o);
					i = jQuery(window).width() - (r.offset().left + r.outerWidth());
					jQuery("#" + o).css({
						right: -i,
					});
				}
			});
		}
		i(),
			jQuery(window).on("load", function () {
				i();
			}),
			jQuery(window).resize(function () {
				i();
			}),
			jQuery(".ui-tabs").bind("tabsactivate", function (t, e) {
				0 < jQuery(this).find(".ultimate-map-wrapper").length && i();
			}),
			jQuery(".ui-accordion").bind("accordionactivate", function (t, e) {
				0 < jQuery(this).find(".ultimate-map-wrapper").length && i();
			}),
			jQuery(document).on("onUVCModalPopupOpen", function () {
				i();
			}),
			jQuery(document).on("UVCMapResize", function () {
				i();
			});
	}),
	(function (o) {
		o(document).ready(function () {
			var t = o(window).width();
			o(document).on("mouseenter", ".ult_dual1", function () {
				var t,
					e = o(this).find(".ult-dual-btn-1").attr("class"),
					i = e.split(" ");
				"Style1" == (e = i[1] + i[2]) &&
					((t = o(this).find(".ult-dual-btn-1").data("bghovercolor")),
					o(this)[0].style.setProperty("background-color", t, "important")),
					"Style2" == e && (t = o(this).find(".ult-dual-btn-1").data("bghovercolor")),
					"Style3" == e &&
						((t = o(this).find(".ult-dual-btn-1").data("bghovercolor")),
						o(this).css({
							"box-shadow": " inset 0 0 20px 50px " + t,
						})),
					"undefined" != e &&
						((t = o(this).find(".ult-dual-btn-1").data("icon_hover_color")),
						o(this).find(".ult-dual-btn-1").find(".aio-icon").css({
							color: t,
						}),
						(e = o(this).find(".ult-dual-btn-1").data("iconbghovercolor")),
						o(this).find(".ult-dual-btn-1").find(".aio-icon").css({
							background: e,
						}),
						(t = o(this).find(".ult-dual-btn-1").data("iconhoverborder")),
						o(this).find(".ult-dual-btn-1").find(".aio-icon").css({
							"border-color": t,
						}),
						o(this).find(".ult-dual-btn-1").find(".aio-icon-img").css({
							background: e,
						}),
						o(this).find(".ult-dual-btn-1").find(".aio-icon-img").css({
							"border-color": t,
						}),
						(t = o(this).find(".ult-dual-btn-1").data("texthovercolor")),
						o(this).find(".ult-dual-btn-1").find(".ult-dual-button-title").css({
							color: t,
						}));
			}),
				o(document).on("mouseleave", ".ult_dual1", function () {
					var t,
						e = o(this).find(".ult-dual-btn-1").attr("class"),
						i = e.split(" ");
					"Style1" == (e = i[1] + i[2]) &&
						((t = o(this).find(".ult-dual-btn-1").data("bgcolor")),
						o(this)[0].style.setProperty("background-color", t, "important")),
						"Style2" == e && (t = o(this).find(".ult-dual-btn-1").data("bgcolor")),
						"Style3" == e &&
							((t = o(this).find(".ult-dual-btn-1").data("bgcolor")),
							o(this).css({
								"box-shadow": "inset 0px 0 0 0 " + t,
							})),
						"undefined" != e &&
							((t = o(this).find(".ult-dual-btn-1").data("icon_color")),
							o(this).find(".ult-dual-btn-1").find(".aio-icon").css({
								color: t,
							}),
							(e = o(this).find(".ult-dual-btn-1").data("textcolor")),
							o(this).find(".ult-dual-btn-1").find(".ult-dual-button-title").css({
								color: e,
							}),
							(t = o(this).find(".ult-dual-btn-1").data("iconbgcolor")),
							o(this).find(".ult-dual-btn-1").find(".aio-icon").css({
								background: t,
							}),
							(e = o(this).find(".ult-dual-btn-1").data("iconborder")),
							o(this).find(".ult-dual-btn-1").find(".aio-icon").css({
								"border-color": e,
							}),
							o(this).find(".ult-dual-btn-1").find(".aio-icon-img").css({
								background: t,
							}),
							o(this).find(".ult-dual-btn-1").find(".aio-icon-img").css({
								"border-color": e,
							}));
				}),
				o(document).on("mouseenter", ".ult_dual2", function () {
					var t,
						e = o(this).find(".ult-dual-btn-2").attr("class"),
						i = e.split(" ");
					"Style1" == (e = i[1] + i[2]) &&
						((t = o(this).find(".ult-dual-btn-2").data("bghovercolor")),
						o(this)[0].style.setProperty("background-color", t, "important")),
						"Style2" == e && (t = o(this).find(".ult-dual-btn-2").data("bghovercolor")),
						"Style3" == e &&
							((t = o(this).find(".ult-dual-btn-2").data("bghovercolor")),
							o(this).css({
								"box-shadow": " inset 0 0 20px 50px " + t,
							})),
						"undefined" != e &&
							((t = o(this).find(".ult-dual-btn-2").data("icon_hover_color")),
							o(this).find(".ult-dual-btn-2").find(".aio-icon").css({
								color: t,
							}),
							(e = o(this).find(".ult-dual-btn-2").data("texthovercolor")),
							o(this).find(".ult-dual-btn-2").find(".ult-dual-button-title").css({
								color: e,
							}),
							(t = o(this).find(".ult-dual-btn-2").data("iconbghovercolor")),
							o(this).find(".ult-dual-btn-2").find(".aio-icon").css({
								background: t,
							}),
							(e = o(this).find(".ult-dual-btn-2").data("iconhoverborder")),
							o(this).find(".ult-dual-btn-2").find(".aio-icon").css({
								"border-color": e,
							}),
							o(this).find(".ult-dual-btn-2").find(".aio-icon-img").css({
								background: t,
							}),
							o(this).find(".ult-dual-btn-2").find(".aio-icon-img").css({
								"border-color": e,
							}));
				}),
				o(document).on("mouseleave", ".ult_dual2", function () {
					var t,
						e = o(this).find(".ult-dual-btn-2").attr("class"),
						i = e.split(" ");
					"Style1" == (e = i[1] + i[2]) &&
						((t = o(this).find(".ult-dual-btn-2").data("bgcolor")),
						o(this)[0].style.setProperty("background-color", t, "important")),
						"Style2" == e && (t = o(this).find(".ult-dual-btn-2").data("bgcolor")),
						"Style3" == e &&
							((t = o(this).find(".ult-dual-btn-2").data("bghovercolor")),
							o(this).css({
								"box-shadow": " inset 0 0 0 0 " + t,
							})),
						"undefined" != e &&
							((t = o(this).find(".ult-dual-btn-2").data("icon_color")),
							o(this).find(".ult-dual-btn-2").find(".aio-icon").css({
								color: t,
							}),
							(e = o(this).find(".ult-dual-btn-2").data("textcolor")),
							o(this).find(".ult-dual-btn-2").find(".ult-dual-button-title").css({
								color: e,
							}),
							(t = o(this).find(".ult-dual-btn-2").data("iconbgcolor")),
							o(this).find(".ult-dual-btn-2").find(".aio-icon").css({
								background: t,
							}),
							(e = o(this).find(".ult-dual-btn-2").data("iconborder")),
							o(this).find(".ult-dual-btn-2").find(".aio-icon").css({
								"border-color": e,
							}),
							o(this).find(".ult-dual-btn-2").find(".aio-icon-img").css({
								background: t,
							}),
							o(this).find(".ult-dual-btn-2").find(".aio-icon-img").css({
								"border-color": e,
							}));
				});
		}),
			o(document).on("mouseenter", ".ult_main_dualbtn", function () {
				o(this).data("bhcolor");
			}),
			o(document).on("mouseleave", ".ult_main_dualbtn", function () {
				o(this).data("bcolor");
			});
	})(jQuery),
	jQuery(document).ready(function (t) {
		jQuery(".ult_main_dualbtn").each(function (t) {
			var e = jQuery(this).find(".ult_dual1").outerHeight(),
				e = parseInt(e),
				i = jQuery(this).find(".ult_dual2").outerHeight();
			(i = parseInt(i)) < e
				? (jQuery(this).find(".ult_dual2").css({
						height: e,
				  }),
				  jQuery(this).find(".ult_dual1").css({
						height: e,
				  }))
				: (e < i || e == i) &&
				  (jQuery(this).find(".ult_dual1").css({
						height: i,
				  }),
				  jQuery(this).find(".ult_dual2").css({
						height: i,
				  }));
		}),
			jQuery(document).on("ult-expandable", function (t, e) {
				jQuery(e)
					.find(".ult_dual_button")
					.each(function (t) {
						jQuery(this).find(".ult_dual1").css("height", "auto"),
							jQuery(this).find(".ult_dual2").css("height", "auto");
						var e = jQuery(this).find(".ult_dual1").outerHeight(),
							e = parseInt(e),
							i = jQuery(this).find(".ult_dual2").outerHeight();
						(i = parseInt(i)) < e
							? (jQuery(this).find(".ult_dual2").css({
									height: e,
							  }),
							  jQuery(this).find(".ult_dual1").css({
									height: e,
							  }))
							: (e < i || e == i) &&
							  (jQuery(this).find(".ult_dual1").css({
									height: i,
							  }),
							  jQuery(this).find(".ult_dual2").css({
									height: i,
							  }));
					});
			}),
			jQuery(document).on("ultAdvancedTabClickedDualBtn", function (t, e) {
				jQuery(e)
					.find(".ult_dual_button")
					.each(function (t) {
						jQuery(this).find(".ult_dual1").css("height", "auto"),
							jQuery(this).find(".ult_dual2").css("height", "auto");
						var e = jQuery(this).find(".ult_dual1").outerHeight(),
							e = parseInt(e),
							i = jQuery(this).find(".ult_dual2").outerHeight();
						(i = parseInt(i)) < e
							? (jQuery(this).find(".ult_dual2").css({
									height: e,
							  }),
							  jQuery(this).find(".ult_dual1").css({
									height: e,
							  }))
							: (e < i || e == i) &&
							  (jQuery(this).find(".ult_dual1").css({
									height: i,
							  }),
							  jQuery(this).find(".ult_dual2").css({
									height: i,
							  }));
					});
			});
	}),
	jQuery(document).ready(function (t) {
		recallme(),
			jQuery(window).on("load", function () {
				recallme();
			});
	}),
	(function (l, d) {
		var e = "easyTicker",
			c = {
				direction: "up",
				easing: "swing",
				speed: "slow",
				interval: 2e3,
				height: "auto",
				visible: 0,
				mousePause: !0,
				controls: {
					up: "",
					down: "",
					toggle: "",
					playText: "Play",
					stopText: "Stop",
				},
				callbacks: {
					before: !1,
					after: !1,
				},
			};

		function i(t, e) {
			var n = this;

			function i() {
				0 == n.timer &&
					((n.timer = setInterval(function () {
						s(n.opts.direction);
					}, n.opts.interval)),
					l(n.opts.controls.toggle).addClass("et-run").html(n.opts.controls.stopText));
			}

			function o() {
				clearInterval(n.timer),
					(n.timer = 0),
					l(n.opts.controls.toggle).removeClass("et-run").html(n.opts.controls.playText);
			}

			function s(t) {
				var e, i, o, s;
				n.elem.is(":visible") &&
					((i =
						"up" == t
							? ((s = ":first-child"), (e = "-="), "appendTo")
							: ((s = ":last-child"), (e = "+="), "prependTo")),
					(s = (o = n.targ.children(s)).outerHeight()),
					"function" == typeof n.opts.callbacks.before && n.opts.callbacks.before.call(n, n.targ, o),
					n.targ.stop(!0, !0).animate(
						{
							top: e + s + "px",
						},
						n.opts.speed,
						n.opts.easing,
						function () {
							o.hide()[i](n.targ).fadeIn(),
								n.targ.css("top", 0),
								r(!0),
								"function" == typeof n.opts.callbacks.after &&
									n.opts.callbacks.after.call(n, n.targ, o);
						}
					));
			}

			function a(t) {
				o(), s("up" == t ? "up" : "down");
			}

			function r(t) {
				var e, i, o, s;
				"auto" == n.opts.height &&
					(0 < n.opts.visible
						? ((i = t),
						  (o = 0),
						  (s = "et-item-visible"),
						  n.targ.children().removeClass(s),
						  n.targ.children(":lt(" + n.opts.visible + ")").each(function () {
								(o += l(this).outerHeight()), l(this).addClass(s);
						  }),
						  i
								? n.elem.stop(!0, !0).animate(
										{
											height: o,
										},
										n.opts.speed
								  )
								: n.elem.css("height", o))
						: ((e = 0),
						  (i = n.elem.css("display")),
						  n.elem.css("display", "block"),
						  n.targ.children().each(function () {
								e += l(this).outerHeight();
						  }),
						  n.elem.css({
								display: i,
								height: e,
						  }))),
					t || clearInterval(n.heightTimer);
			}
			return (
				(n.opts = l.extend({}, c, e)),
				(n.elem = l(t)),
				(n.targ = l(t).children(":first-child")),
				(n.timer = 0),
				n.elem.children().css("margin", 0).children().css("margin", 0),
				n.elem.css({
					position: "relative",
					height: n.opts.height,
					overflow: "hidden",
				}),
				n.targ.css({
					position: "absolute",
					margin: 0,
				}),
				(n.heightTimer = setInterval(function () {
					r(!1);
				}, 100)),
				i(),
				(function () {
					var t, e;
					void 0 !== d.hidden
						? ((t = "hidden"), (e = "visibilitychange"))
						: void 0 !== d.msHidden
						? ((t = "msHidden"), (e = "msvisibilitychange"))
						: void 0 !== d.webkitHidden && ((t = "webkitHidden"), (e = "webkitvisibilitychange"));
					d.addEventListener(
						e,
						function () {
							(d[t] ? o : i)();
						},
						!1
					);
				})(),
				n.opts.mousePause &&
					n.elem
						.on("mouseenter", function () {
							(n.timerTemp = n.timer), o();
						})
						.on("mouseleave", function () {
							0 !== n.timerTemp && i();
						}),
				l(n.opts.controls.up).on("click", function (t) {
					t.preventDefault(), a("up");
				}),
				l(n.opts.controls.down).on("click", function (t) {
					t.preventDefault(), a("down");
				}),
				l(n.opts.controls.toggle).on("click", function (t) {
					t.preventDefault(), (0 == n.timer ? i : o)();
				}),
				{
					up: function () {
						a("up");
					},
					down: function () {
						a("down");
					},
					start: i,
					stop: o,
					options: n.opts,
				}
			);
		}
		l.fn[e] = function (t) {
			return this.each(function () {
				l.data(this, e) || l.data(this, e, new i(this, t));
			});
		};
	})(jQuery, (window, document)),
	jQuery(document).ready(function () {
		jQuery(".ult_exp_content").hide(),
			/* TREETHEMES*/
			jQuery(".ult_exp_section")
				.unbind("click")
				.click(function () {
					var a = jQuery(this).data("effect");
					if (
						(jQuery(this).toggleClass("ult_active_section"),
						jQuery(this).next(".ult_exp_content").toggleClass("ult_active_section"),
						"slideToggle" == a && jQuery(this).next(".ult_exp_content").slideToggle(500),
						"fadeToggle" == a)
					) {
						var b = jQuery(this).next(".ult_exp_content");
						b.is(":visible")
							? b.fadeTo(500, 0, function () {
									b.slideUp();
							  })
							: b.slideDown(function () {
									b.fadeTo(500, 1);
							  });
					}
					jQuery(this).trigger("select"),
						jQuery(document).trigger("ult-expandable", jQuery(this).next(".ult_exp_content"));
				}),
			/* TREETHEMES*/

			jQuery(".ult_exp_section").select(function () {
				const i = jQuery(this).data("title"),
					o = jQuery(this).data("newtitle");
				var t = jQuery(this).data("icon"),
					e = jQuery(this).data("newicon"),
					s = jQuery(this).data("img"),
					n = jQuery(this).data("newimg"),
					a = jQuery(this).data("activetitle"),
					r = jQuery(this).data("activebg"),
					l = jQuery(this).data("activeicon"),
					d = jQuery(this).data("activeiconbg"),
					c = jQuery(this).data("activeborder");
				jQuery(this).css({
					color: a,
				}),
					jQuery(this).parent().find(".ult_exp_section").css({
						background: r,
					}),
					jQuery(this).find(".ult_expsection_icon").css({
						color: l,
					}),
					jQuery(this).find(".ult_expsection_icon").css({
						background: d,
					}),
					jQuery(this).find(".ult_expsection_icon").css({
						"border-color": c,
					}),
					i != o &&
						jQuery(this)
							.find(".ult_expheader")
							.stop()
							.css("opacity", "0.1")
							.html(function (t, e) {
								return e == o ? i : o;
							})
							.animate(
								{
									opacity: 1,
								},
								300
							),
					jQuery(this).hasClass("ult_active_section")
						? (t !== e &&
								(jQuery(this).find(".ult_ex_icon").removeClass(t),
								jQuery(this)
									.find(".ult_ex_icon")
									.fadeOut(100)
									.switchClass(t, e, 1500, "easeInOutQuad")
									.fadeIn(300)),
						  s !== n && jQuery(this).find(".ult_exp_img").fadeOut(200).attr("src", n).fadeIn(500))
						: (t !== e &&
								(jQuery(this).find(".ult_ex_icon").removeClass(e),
								jQuery(this)
									.find(".ult_ex_icon")
									.fadeOut(100)
									.switchClass(e, t, 1500, "easeInOutQuad")
									.fadeIn(300)),
						  s !== n && jQuery(this).find(".ult_exp_img").fadeOut(200).attr("src", s).fadeIn(500));
			});
	}),
	jQuery(document).ready(function () {
		function t() {
			jQuery(".ult_exp_section_layer").each(function (e, i) {
				jQuery(i).css({
					"margin-left": 0,
				});
				var o = jQuery(i).find(".ult_exp_section").data("override");
				if (0 != o) {
					let t = "true";
					var s, n;
					s =
						0 < jQuery(i).parents(".wpb_row").length
							? jQuery(i).parents(".wpb_column")
							: 0 < jQuery(i).parents(".wpb_column").length
							? jQuery(i).parents(".wpb_row")
							: jQuery(i).parent();
					if (
						("full" == o && ((s = jQuery("body")), (t = "false")),
						"ex-full" == o && ((s = jQuery("html")), (t = "false")),
						!isNaN(o))
					)
						for (e = 1; e < o && "HTML" != s.prop("tagName"); e++) s = s.parent();
					n = "false" == t ? s.outerWidth() : s.width();
					var a = s.offset().left - jQuery(i).offset().left;
					"false" == t
						? jQuery(i).css({
								width: n,
								"margin-left": a,
						  })
						: jQuery(i).css({
								width: n,
						  });
				}
			});
		}
		jQuery(".ult_exp_section").hover(
			function () {
				var t = jQuery(this).data("texthover"),
					e = jQuery(this).data("ihover"),
					i = (jQuery(this).data("cnthvrbg"), jQuery(this).data("headerhover")),
					o = jQuery(this).data("icnhvrbg"),
					s = jQuery(this).data("icnhvrborder");
				jQuery(this).hasClass("ult_active_section") ||
					(jQuery(this).css({
						color: t,
						background: i,
					}),
					jQuery(this).find(".ult_expsection_icon").css({
						color: e,
					}),
					jQuery(this).find(".ult_expsection_icon").css({
						background: o,
					}),
					jQuery(this).find(".ult_expsection_icon").css({
						"border-color": s,
					}));
			},
			function () {
				var t = jQuery(this).data("textcolor"),
					e = jQuery(this).data("icncolor"),
					i = (jQuery(this).data("cntbg"), jQuery(this).data("headerbg")),
					o = jQuery(this).data("icnbg"),
					s = jQuery(this).data("icnborder");
				jQuery(this).hasClass("ult_active_section") ||
					(jQuery(this).css({
						color: t,
						background: i,
					}),
					jQuery(this).find(".ult_expsection_icon").css({
						color: e,
					}),
					jQuery(this).find(".ult_expsection_icon").css({
						background: o,
					}),
					jQuery(this).find(".ult_expsection_icon").css({
						"border-color": s,
					}));
			}
		),
			jQuery(".ult_exp_content").hover(
				function () {
					jQuery(this).parent().find(".ult_exp_section").data("cnthvrbg");
				},
				function () {
					jQuery(this).parent().find(".ult_exp_section").data("cntbg");
				}
			),
			jQuery(window).resize(function () {
				t();
			}),
			t();
	}),
	jQuery(document).ready(function () {
		jQuery(".ult_exp_section").select(function () {
			var t,
				e = jQuery(this).data("height");
			0 != e &&
				((t = jQuery(this).offset().top),
				(e = parseInt(t) - e),
				jQuery("html, body").animate(
					{
						scrollTop: e,
					},
					1200
				));
		});
	});
var fixto = (function (n, t, a) {
	var r =
			((s = {
				getAll: function (t) {
					return a.defaultView.getComputedStyle(t);
				},
				get: function (t, e) {
					return this.getAll(t)[e];
				},
				toFloat: function (t) {
					return parseFloat(t, 10) || 0;
				},
				getFloat: function (t, e) {
					return this.toFloat(this.get(t, e));
				},
				_getAllCurrentStyle: function (t) {
					return t.currentStyle;
				},
			}),
			a.documentElement.currentStyle && (s.getAll = s._getAllCurrentStyle),
			s),
		o =
			((e.prototype = {
				replace: function () {
					var t = this.replacer.style,
						e = r.getAll(this.element);
					(t.width = this._width()),
						(t.height = this._height()),
						(t.marginTop = e.marginTop),
						(t.marginBottom = e.marginBottom),
						(t.marginLeft = e.marginLeft),
						(t.marginRight = e.marginRight),
						(t.cssFloat = e.cssFloat),
						(t.styleFloat = e.styleFloat),
						(t.position = e.position),
						(t.top = e.top),
						(t.right = e.right),
						(t.bottom = e.bottom),
						(t.left = e.left),
						(t.display = e.display);
				},
				hide: function () {
					this.replacer.style.display = "none";
				},
				_width: function () {
					return this.element.getBoundingClientRect().width + "px";
				},
				_widthOffset: function () {
					return this.element.offsetWidth + "px";
				},
				_height: function () {
					return this.element.getBoundingClientRect().height + "px";
				},
				_heightOffset: function () {
					return this.element.offsetHeight + "px";
				},
				destroy: function () {
					for (var t in (n(this.replacer).remove(), this)) this.hasOwnProperty(t) && (this[t] = null);
				},
			}),
			a.documentElement.getBoundingClientRect().width ||
				((e.prototype._width = e.prototype._widthOffset), (e.prototype._height = e.prototype._heightOffset)),
			{
				MimicNode: e,
				computedStyle: r,
			});

	function e(t) {
		(this.element = t),
			(this.replacer = a.createElement("div")),
			(this.replacer.style.visibility = "hidden"),
			this.hide(),
			t.parentNode.insertBefore(this.replacer, t);
	}

	function i() {
		this._vendor = null;
	}
	i.prototype = {
		_vendors: {
			webkit: {
				cssPrefix: "-webkit-",
				jsPrefix: "Webkit",
			},
			moz: {
				cssPrefix: "-moz-",
				jsPrefix: "Moz",
			},
			ms: {
				cssPrefix: "-ms-",
				jsPrefix: "ms",
			},
			opera: {
				cssPrefix: "-o-",
				jsPrefix: "O",
			},
		},
		_prefixJsProperty: function (t, e) {
			return t.jsPrefix + e[0].toUpperCase() + e.substr(1);
		},
		_prefixValue: function (t, e) {
			return t.cssPrefix + e;
		},
		_valueSupported: function (t, e, i) {
			try {
				return (i.style[t] = e), i.style[t] === e;
			} catch (t) {
				return !1;
			}
		},
		propertySupported: function (t) {
			return void 0 !== a.documentElement.style[t];
		},
		getJsProperty: function (t) {
			if (this.propertySupported(t)) return t;
			if (this._vendor) return this._prefixJsProperty(this._vendor, t);
			var e, i;
			for (i in this._vendors)
				if (((e = this._prefixJsProperty(this._vendors[i], t)), this.propertySupported(e)))
					return (this._vendor = this._vendors[i]), e;
			return null;
		},
		getCssValue: function (t, e) {
			var i,
				o,
				s = a.createElement("div"),
				n = this.getJsProperty(t);
			if (this._valueSupported(n, e, s)) return e;
			if (this._vendor && ((i = this._prefixValue(this._vendor, e)), this._valueSupported(n, i, s))) return i;
			for (o in this._vendors)
				if (((i = this._prefixValue(this._vendors[o], e)), this._valueSupported(n, i, s)))
					return (this._vendor = this._vendors[o]), i;
			return null;
		},
	};
	var l,
		s = new i(),
		d = s.getJsProperty("transform");
	var c,
		u = s.getCssValue("position", "sticky"),
		h = s.getCssValue("position", "fixed");

	function p(t, e, i) {
		(this.child = t),
			(this._$child = n(t)),
			(this.parent = e),
			(this.options = {
				className: "fixto-fixed",
				top: 0,
				mindViewport: !1,
			}),
			this._setOptions(i);
	}

	function f(t, e, i) {
		p.call(this, t, e, i),
			(this._replacer = new o.MimicNode(t)),
			(this._ghostNode = this._replacer.replacer),
			this._saveStyles(),
			this._saveViewportHeight(),
			(this._proxied_onscroll = this._bind(this._onscroll, this)),
			(this._proxied_onresize = this._bind(this._onresize, this)),
			this.start();
	}

	function m(t, e, i) {
		p.call(this, t, e, i), this.start();
	}
	"Microsoft Internet Explorer" === navigator.appName && (c = parseFloat(navigator.appVersion.split("MSIE")[1])),
		(p.prototype = {
			_mindtop: function () {
				var t = 0;
				if (this._$mind)
					for (var e, i, o = 0, s = this._$mind.length; o < s; o++)
						(i = (e = this._$mind[o]).getBoundingClientRect()).height
							? (t += i.height)
							: ((i = r.getAll(e)),
							  (t += e.offsetHeight + r.toFloat(i.marginTop) + r.toFloat(i.marginBottom)));
				return t;
			},
			stop: function () {
				this._stop(), (this._running = !1);
			},
			start: function () {
				this._running || (this._start(), (this._running = !0));
			},
			destroy: function () {
				for (var t in (this.stop(), this._destroy(), this._$child.removeData("fixto-instance"), this))
					this.hasOwnProperty(t) && (this[t] = null);
			},
			_setOptions: function (t) {
				n.extend(this.options, t),
					this.options.mind && (this._$mind = n(this.options.mind)),
					this.options.zIndex && (this.child.style.zIndex = this.options.zIndex);
			},
			setOptions: function (t) {
				this._setOptions(t), this.refresh();
			},
			_stop: function () {},
			_start: function () {},
			_destroy: function () {},
			refresh: function () {},
		}),
		(f.prototype = new p()),
		n.extend(f.prototype, {
			_bind: function (t, e) {
				return function () {
					return t.call(e);
				};
			},
			_toresize: 8 === c ? a.documentElement : t,
			_onscroll: function () {
				(this._scrollTop = a.documentElement.scrollTop || a.body.scrollTop),
					(this._parentBottom = this.parent.offsetHeight + this._fullOffset("offsetTop", this.parent)),
					!1 !== this.options.mindBottomPadding &&
						(this._parentBottom -= r.getFloat(this.parent, "paddingBottom")),
					!this.fixed && this._shouldFix()
						? (this._fix(), this._adjust())
						: this._scrollTop > this._parentBottom ||
						  this._scrollTop <
								this._fullOffset("offsetTop", this._ghostNode) - this.options.top - this._mindtop()
						? this._unfix()
						: this._adjust();
			},
			_shouldFix: function () {
				if (
					this._scrollTop < this._parentBottom &&
					this._scrollTop > this._fullOffset("offsetTop", this.child) - this.options.top - this._mindtop()
				)
					return !(this.options.mindViewport && !this._isViewportAvailable());
			},
			_isViewportAvailable: function () {
				var t = r.getAll(this.child);
				return (
					this._viewportHeight > this.child.offsetHeight + r.toFloat(t.marginTop) + r.toFloat(t.marginBottom)
				);
			},
			_adjust: function () {
				var t = 0,
					e = this._mindtop(),
					i = 0,
					o = r.getAll(this.child),
					s = null;
				l && (s = this._getContext()) && (t = Math.abs(s.getBoundingClientRect().top)),
					(i =
						this._parentBottom -
						this._scrollTop -
						(this.child.offsetHeight + r.toFloat(o.marginBottom) + e + this.options.top)),
					(this.child.style.top =
						(i = 0 < i ? 0 : i) + e + t + this.options.top - r.toFloat(o.marginTop) + "px");
			},
			_fullOffset: function (t, e, i) {
				for (var o = e[t], s = e.offsetParent; null !== s && s !== i; ) (o += s[t]), (s = s.offsetParent);
				return o;
			},
			_getContext: function () {
				for (var t, e = this.child, i = null; !i; ) {
					if ((t = e.parentNode) === a.documentElement) return null;
					if ("none" !== r.getAll(t)[d]) {
						i = t;
						break;
					}
					e = t;
				}
				return i;
			},
			_fix: function () {
				var t,
					e = this.child,
					i = e.style,
					o = r.getAll(e),
					s = e.getBoundingClientRect().left,
					n = o.width;
				this._saveStyles(),
					a.documentElement.currentStyle &&
						(n =
							e.offsetWidth -
							(r.toFloat(o.paddingLeft) +
								r.toFloat(o.paddingRight) +
								r.toFloat(o.borderLeftWidth) +
								r.toFloat(o.borderRightWidth)) +
							"px"),
					!l ||
						((t = this._getContext()) &&
							(s = e.getBoundingClientRect().left - t.getBoundingClientRect().left)),
					this._replacer.replace(),
					(i.left = s - r.toFloat(o.marginLeft) + "px"),
					(i.width = n),
					(i.position = "fixed"),
					(i.top = this._mindtop() + this.options.top - r.toFloat(o.marginTop) + "px"),
					this._$child.addClass(this.options.className),
					(this.fixed = !0);
			},
			_unfix: function () {
				var t = this.child.style;
				this._replacer.hide(),
					(t.position = this._childOriginalPosition),
					(t.top = this._childOriginalTop),
					(t.width = this._childOriginalWidth),
					(t.left = this._childOriginalLeft),
					this._$child.removeClass(this.options.className),
					(this.fixed = !1);
			},
			_saveStyles: function () {
				var t = this.child.style;
				(this._childOriginalPosition = t.position),
					(this._childOriginalTop = t.top),
					(this._childOriginalWidth = t.width),
					(this._childOriginalLeft = t.left);
			},
			_onresize: function () {
				this.refresh();
			},
			_saveViewportHeight: function () {
				this._viewportHeight = t.innerHeight || a.documentElement.clientHeight;
			},
			_stop: function () {
				this._unfix(),
					n(t).unbind("scroll", this._proxied_onscroll),
					n(this._toresize).unbind("resize", this._proxied_onresize);
			},
			_start: function () {
				this._onscroll(),
					n(t).bind("scroll", this._proxied_onscroll),
					n(this._toresize).bind("resize", this._proxied_onresize);
			},
			_destroy: function () {
				this._replacer.destroy();
			},
			refresh: function () {
				this._saveViewportHeight(), this._unfix(), this._onscroll();
			},
		}),
		(m.prototype = new p()),
		n.extend(m.prototype, {
			_start: function () {
				var t = r.getAll(this.child);
				(this._childOriginalPosition = t.position),
					(this._childOriginalTop = t.top),
					(this.child.style.position = u),
					this.refresh();
			},
			_stop: function () {
				(this.child.style.position = this._childOriginalPosition),
					(this.child.style.top = this._childOriginalTop);
			},
			refresh: function () {
				this.child.style.top = this._mindtop() + this.options.top + "px";
			},
		});
	var y =
		c < 8
			? function () {
					return "not supported";
			  }
			: function (t, e, i) {
					return (u && !i) || (u && i && !1 !== i.useNativeSticky)
						? new m(t, e, i)
						: h
						? (void 0 === l &&
								((o = !1),
								(s = a.createElement("div")),
								(n = a.createElement("div")),
								s.appendChild(n),
								(s.style[d] = "translate(0)"),
								(s.style.marginTop = "10px"),
								(s.style.visibility = "hidden"),
								(n.style.position = "fixed"),
								(n.style.top = 0),
								a.body.appendChild(s),
								0 < n.getBoundingClientRect().top && (o = !0),
								a.body.removeChild(s),
								(l = o)),
						  new f(t, e, i))
						: "Neither fixed nor sticky positioning supported";
					var o, s, n;
			  };
	return (
		(n.fn.fixTo = function (e, i) {
			var o = n(e),
				s = 0;
			return this.each(function () {
				var t = n(this).data("fixto-instance");
				t ? t[e].call(t, i) : n(this).data("fixto-instance", y(this, o[s], i)), s++;
			});
		}),
		{
			FixToContainer: f,
			fixTo: y,
			computedStyle: r,
			mimicNode: o,
		}
	);
})(window.jQuery, window, document);

function info_box_set_auto_height() {
	jQuery(".aio-icon-box.square_box-icon").each(function (t, e) {
		var i = jQuery(window).width() || "";
		"" != i &&
			(768 <= i
				? "" != (i = jQuery(this).attr("data-min-height") || "") && jQuery(this).css("min-height", i)
				: jQuery(this).css("min-height", "initial"));
	});
}
!(function (u, h) {
	function e() {
		u(".flip-box").each(function (t, e) {
			u(document).width();
			var i,
				o,
				s,
				n,
				a,
				r,
				l,
				d,
				c = h.innerWidth;
			"" != c &&
				(768 <= c
					? "" != (i = u(this).attr("data-min-height") || "")
						? u(this).hasClass("ifb-custom-height") &&
						  (u(this).css("min-height", i),
						  u(this).css("height", i),
						  u(this)
								.find(".ifb-back")
								.find(".ifb-flip-box-section")
								.hasClass("ifb-flip-box-section-vertical-middle") &&
								((a = u(this).find(".ifb-back").outerHeight()),
								(r = u(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight()),
								(a = parseInt(i)) <= (r = parseInt(r)) &&
									u(this)
										.find(".ifb-back")
										.find(".ifb-flip-box-section")
										.addClass("ifb_disable_middle")),
						  u(this)
								.find(".ifb-front")
								.find(".ifb-flip-box-section")
								.hasClass("ifb-flip-box-section-vertical-middle") &&
								((l = u(this).find(".ifb-front").outerHeight()),
								(l = parseInt(i)),
								(d = u(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight()),
								l <= (d = parseInt(d)) &&
									u(this)
										.find(".ifb-front")
										.find(".ifb-flip-box-section")
										.addClass("ifb_disable_middle")))
						: u(this).hasClass("ifb-jq-height")
						? ((s = u(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight()),
						  (s = parseInt(s)),
						  (n = u(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight()),
						  (n = parseInt(n)) <= s
								? u(this).find(".ifb-face").css("height", s)
								: u(this).find(".ifb-face").css("height", n))
						: u(this).hasClass("ifb-auto-height") &&
						  u(this)
								.find(".ifb-back")
								.find(".ifb-flip-box-section")
								.hasClass("ifb-flip-box-section-vertical-middle") &&
						  ((a = u(this).find(".ifb-back").outerHeight()),
						  (a = parseInt(a)),
						  (r = u(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight()),
						  a <= (r = parseInt(r)) &&
								u(this).find(".ifb-back").find(".ifb-flip-box-section").addClass("ifb_disable_middle"))
					: ((i = u(this).attr("data-min-height") || ""),
					  u(this).hasClass("style_9")
							? (u(this).css("height", "initial"),
							  (o = u(this).find(".ifb-front-1 .ifb-front").outerHeight()),
							  (c = u(this).find(".ifb-back-1 .ifb-back").outerHeight()) < o
									? u(this).css("height", o)
									: u(this).css("height", c))
							: u(this).hasClass("ifb-jq-height")
							? ((s = u(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight()),
							  (s = parseInt(s)),
							  (n = u(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight()),
							  (n = parseInt(n)) <= s
									? u(this).find(".ifb-face").css("height", s)
									: u(this).find(".ifb-face").css("height", n))
							: u(this).hasClass("ifb-auto-height")
							? u(this)
									.find(".ifb-back")
									.find(".ifb-flip-box-section")
									.hasClass("ifb-flip-box-section-vertical-middle") &&
							  ((a = u(this).find(".ifb-back").outerHeight()),
							  (r = u(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight()),
							  (a = parseInt(a)) < (r = parseInt(r)) &&
									u(this)
										.find(".ifb-back")
										.find(".ifb-flip-box-section")
										.addClass("ifb_disable_middle"))
							: u(this).hasClass("ifb-custom-height")
							? "" != i &&
							  (u(this).css("min-height", i),
							  u(this).css("height", i),
							  u(this)
									.find(".ifb-back")
									.find(".ifb-flip-box-section")
									.hasClass("ifb-flip-box-section-vertical-middle") &&
									((a = u(this).find(".ifb-back").outerHeight()),
									(a = parseInt(a)),
									(r = u(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight()),
									a <= (r = parseInt(r)) &&
										u(this)
											.find(".ifb-back")
											.find(".ifb-flip-box-section")
											.addClass("ifb_disable_middle")),
							  u(this)
									.find(".ifb-front")
									.find(".ifb-flip-box-section")
									.hasClass("ifb-flip-box-section-vertical-middle") &&
									((l = u(this).find(".ifb-front").outerHeight()),
									(l = parseInt(l)),
									(d = u(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight()),
									(d = parseInt(d)),
									u(this)
										.find(".ifb-front")
										.find(".ifb-flip-box-section")
										.addClass("ifb_disable_middle")))
							: u(this).css("height", "initial")));
		});
	}
	u(h).on("load", function (t) {
		e();
	}),
		u(document).ready(function (t) {
			e();
		}),
		u(h).resize(function (t) {
			e();
		});
})(jQuery, window),
	(function (t) {
		function e() {
			let u = 0;
			$jh(".uvc-heading").each(function () {
				let e, i, o;
				var s = $jh(this).outerWidth(),
					n = $jh(this).attr("data-hline_width"),
					a = $jh(this).attr("data-hicon_type"),
					r = $jh(this).attr("data-halign"),
					t = $jh(this).attr("data-hspacer");
				if (
					((left_rtl = "left"),
					(right_rtl = "right"),
					jQuery("body").hasClass("rtl") && ((left_rtl = "right"), (right_rtl = "left")),
					"line_with_icon" == t)
				) {
					var l = $jh(this).attr("id");
					(u = $jh(this).attr("data-hfixer")), (u = void 0 === u || "" === u ? 0 : parseInt(u));
					var d = s / 2;
					$jh(this).find(".dynamic_ultimate_heading_css").remove(), (o = "auto" == n || s < n ? s : n);
					s = o / 2;
					e =
						"selector" == a
							? ((i = $jh(this).find(".aio-icon").outerWidth()),
							  $jh(this).find(".aio-icon").outerHeight())
							: ((i = $jh(this).find(".aio-icon-img").outerWidth()),
							  $jh(this).find(".aio-icon-img").outerHeight());
					a = d - i / 2 + i + u;
					let t = s;
					(e += 3),
						$jh(this).find(".uvc-heading-spacer").height(e),
						"center" == r
							? ($jh(this).find(".aio-icon-img").css({
									margin: "0 auto",
							  }),
							  (c =
									"#" +
									l +
									" .uvc-heading-spacer.line_with_icon:before{" +
									right_rtl +
									":" +
									a +
									"px;}#" +
									l +
									" .uvc-heading-spacer.line_with_icon:after{" +
									left_rtl +
									":" +
									a +
									"px;}"))
							: "left" == r
							? ($jh(this).find(".aio-icon-img").css({
									float: r,
							  }),
							  (c =
									(c = "") != o
										? "#" +
										  l +
										  " .uvc-heading-spacer.line_with_icon:before{left:" +
										  (i + u) +
										  "px;right:auto;}#" +
										  l +
										  " .uvc-heading-spacer.line_with_icon:after{left:" +
										  (t + i + u) +
										  "px;right:auto;}"
										: "#" +
										  l +
										  " .uvc-heading-spacer.line_with_icon:before{right:" +
										  (a - i - 2 * u) +
										  "px;}#" +
										  l +
										  " .uvc-heading-spacer.line_with_icon:after{left:" +
										  (a - u) +
										  "px;}"))
							: "right" == r &&
							  ($jh(this).find(".aio-icon-img").css({
									float: r,
							  }),
							  (c =
									(c = "") != o
										? "#" +
										  l +
										  " .uvc-heading-spacer.line_with_icon:before{right:" +
										  (i + u) +
										  "px;left:auto;}#" +
										  l +
										  " .uvc-heading-spacer.line_with_icon:after{right:" +
										  (t + i + u) +
										  "px;left:auto;}"
										: "#" +
										  l +
										  " .uvc-heading-spacer.line_with_icon:before{right:" +
										  (a - u) +
										  "px;}#" +
										  l +
										  " .uvc-heading-spacer.line_with_icon:after{left:" +
										  (a - i - 2 * u) +
										  "px;}"));
					(d = $jh(this).attr("data-hborder_style")),
						(s = $jh(this).attr("data-hborder_color")),
						(a = $jh(this).attr("data-hborder_height"));
					"auto" == n && "center" == r && (t = Math.floor(t - i + u));
					var c =
						'<div class="dynamic_ultimate_heading_css"><style>#' +
						l +
						" .uvc-heading-spacer.line_with_icon:before, #" +
						l +
						" .uvc-heading-spacer.line_with_icon:after{width:" +
						t +
						"px;border-style:" +
						d +
						";border-color:" +
						s +
						";border-bottom-width:" +
						a +
						"px;}" +
						c +
						"</style></div>";
					$jh(this).prepend(c);
				} else
					"line_only" == t &&
						("right" == r || "left" == r
							? $jh(this).find(".uvc-heading-spacer").find(".uvc-headings-line").css({
									float: r,
							  })
							: $jh(this).find(".uvc-heading-spacer").find(".uvc-headings-line").css({
									margin: "0 auto",
							  }));
			});
		}
		($jh = t.noConflict()),
			$jh(document).ready(function (t) {
				e(),
					$jh(window).resize(function (t) {
						e();
					});
			}),
			t(window).on("load", function (t) {
				e(),
					jQuery(".ult_exp_section").select(function () {
						0 < jQuery(this).parent().find(".uvc-heading").length && e();
					});
			});
	})(jQuery),
	(function (c) {
		function t() {
			c(".ultimate-call-to-action").each(function (i, o) {
				var s = c(o).data("override");
				if (0 != s) {
					c(o).css({
						"margin-left": 0,
					});
					let t = "true";
					var n;
					n =
						0 < c(o).parents(".wpb_row").length
							? c(o).parents(".wpb_row")
							: 0 < c(o).parents(".wpb_column").length
							? c(o).parents(".wpb_column")
							: c(o).parent();
					if (
						("full" == s && ((n = c("body")), (t = "false")),
						"ex-full" == s && ((n = c("html")), (t = "false")),
						!isNaN(s))
					)
						for (i = 1; i <= s && "HTML" != n.prop("tagName"); i++) n = n.parent();
					var a = n.outerWidth(),
						r = c(o).offset().left,
						l = (c(o).position().left, n.offset().left),
						d = n.position().left;
					let e = "full" != s && "ex-full" != s ? l - d : l - r;
					c(o).css({
						width: a,
						"margin-left": e,
					});
				}
			});
		}
		c(document).ready(function () {
			c(document).on("mouseenter", ".ultimate-call-to-action", function () {
				c(this).addClass("ultimate-call-to-action-hover");
				var t = c(this).data("background-hover");
				c(this).css({
					"background-color": t,
				});
			}),
				c(document).on("mouseleave", ".ultimate-call-to-action", function () {
					c(this).removeClass("ultimate-call-to-action-hover");
					var t = c(this).data("background");
					c(this).css({
						"background-color": t,
					});
				}),
				t(),
				c(window).resize(function () {
					t();
				});
		});
	})(jQuery),
	(function (A, I, o) {
		function r(t, e) {
			this.bodyOverflowX,
				(this.callbacks = {
					hide: [],
					show: [],
				}),
				(this.checkInterval = null),
				this.Content,
				(this.$el = A(t)),
				this.$elProxy,
				this.elProxyPosition,
				(this.enabled = !0),
				(this.options = A.extend({}, l, e)),
				(this.mouseIsOverProxy = !1),
				(this.namespace = "ult-tooltipster-" + Math.round(1e5 * Math.random())),
				(this.Status = "hidden"),
				(this.timerHide = null),
				(this.timerShow = null),
				this.$tooltip,
				(this.options.iconTheme = this.options.iconTheme.replace(".", "")),
				(this.options.theme = this.options.theme.replace(".", "")),
				this._init();
		}

		function s(i, o) {
			let s = !0;
			return (
				A.each(i, function (t, e) {
					if (void 0 === o[t] || i[t] !== o[t]) return (s = !1);
				}),
				s
			);
		}

		function i() {
			return !t && c;
		}

		function d() {
			var e,
				i = (o.body || o.documentElement).style;
			if ("string" == typeof i.transition) return 1;
			(v = ["Moz", "Webkit", "Khtml", "O", "ms"]),
				(e = "transition".charAt(0).toUpperCase() + "transition".substr(1));
			for (let t = 0; t < v.length; t++) if ("string" == typeof i[v[t] + e]) return 1;
		}
		var l = {
			animation: "fade",
			arrow: !0,
			arrowColor: "",
			autoClose: !0,
			content: null,
			contentAsHTML: !1,
			contentCloning: !0,
			debug: !0,
			delay: 200,
			minWidth: 0,
			ultCustomTooltipStyle: !1,
			ultContentStyle: null,
			ultBaseStyle: null,
			maxWidth: null,
			functionInit(t, e) {},
			functionBefore(t, e) {
				e();
			},
			functionReady(t, e) {},
			functionAfter(t) {},
			icon: "(?)",
			iconCloning: !0,
			iconDesktop: !1,
			iconTouch: !1,
			iconTheme: "ult-tooltipster-icon",
			interactive: !1,
			interactiveTolerance: 350,
			multiple: !1,
			offsetX: 0,
			offsetY: 0,
			onlyOne: !1,
			position: "top",
			positionTracker: !1,
			speed: 350,
			timer: 0,
			theme: "ult-tooltipster-default",
			touchDevices: !0,
			trigger: "hover",
			updateAnimation: !0,
			ult_adv_id: 0,
			ultimate_target: 0,
			responsive_json_new: 0,
		};
		(r.prototype = {
			_init() {
				const e = this;
				if (o.querySelector) {
					if (null !== e.options.content) e._content_set(e.options.content);
					else {
						let t = e.$el.attr("title");
						void 0 === t && (t = null), e._content_set(t);
					}
					var t = e.options.functionInit.call(e.$el, e.$el, e.Content);
					void 0 !== t && e._content_set(t),
						e.$el.removeAttr("title").addClass("ult-tooltipstered"),
						(!c && e.options.iconDesktop) || (c && e.options.iconTouch)
							? ("string" == typeof e.options.icon
									? ((e.$elProxy = A('<span class="' + e.options.iconTheme + '"></span>')),
									  e.$elProxy.text(e.options.icon))
									: e.options.iconCloning
									? (e.$elProxy = e.options.icon.clone(!0))
									: (e.$elProxy = e.options.icon),
							  e.$elProxy.insertAfter(e.$el))
							: (e.$elProxy = e.$el),
						"hover" == e.options.trigger
							? (e.$elProxy
									.on("mouseenter." + e.namespace, function () {
										(i() && !e.options.touchDevices) || ((e.mouseIsOverProxy = !0), e._show());
									})
									.on("mouseleave." + e.namespace, function () {
										(i() && !e.options.touchDevices) || (e.mouseIsOverProxy = !1);
									}),
							  c &&
									e.options.touchDevices &&
									e.$elProxy.on("touchstart." + e.namespace, function () {
										e._showNow();
									}))
							: "click" == e.options.trigger &&
							  e.$elProxy.on("click." + e.namespace, function () {
									(i() && !e.options.touchDevices) || e._show();
							  });
				}
			},
			_responsive() {
				let u = "",
					h = "",
					p = "",
					f = "",
					m = "",
					y = "";
				jQuery(".ult-responsive").each(function (t, e) {
					let i = jQuery(e),
						o = i.attr("data-responsive-json-new"),
						s = i.data("ultimate-target"),
						n = "",
						a = "",
						r = "",
						l = "",
						d = "",
						c = "";
					jQuery(e).hasClass("ult-tooltipster-content"),
						(void 0 === o && null == o) ||
							jQuery.each(jQuery.parseJSON(o), function (t, e) {
								const o = t;
								void 0 !== e &&
									null != e &&
									((e = e.split(";")),
									jQuery.each(e, function (t, e) {
										if (void 0 !== e || null != e) {
											var i = e.split(":");
											switch (i[0]) {
												case "large_screen":
													n += o + ":" + i[1] + ";";
													break;
												case "desktop":
													a += o + ":" + i[1] + ";";
													break;
												case "tablet":
													r += o + ":" + i[1] + ";";
													break;
												case "tablet_portrait":
													l += o + ":" + i[1] + ";";
													break;
												case "mobile_landscape":
													d += o + ":" + i[1] + ";";
													break;
												case "mobile":
													c += o + ":" + i[1] + ";";
											}
										}
									}));
							}),
						"" != c && (y += s + "{" + c + "}"),
						"" != d && (m += s + "{" + d + "}"),
						"" != l && (f += s + "{" + l + "}"),
						"" != r && (p += s + "{" + r + "}"),
						"" != a && (h += s + "{" + a + "}"),
						"" != n && (u += s + "{" + n + "}");
				});
				var t = "<style>\n/** Ultimate: Tooltipster Responsive **/ ";
				(t += h),
					(t += "\n@media (min-width: 1824px) { " + u + "\n}"),
					(t += "\n@media (max-width: 1199px) { " + p + "\n}"),
					(t += "\n@media (max-width: 991px)  { " + f + "\n}"),
					(t += "\n@media (max-width: 767px)  { " + m + "\n}"),
					(t += "\n@media (max-width: 479px)  { " + y + "\n}"),
					(t += "\n/** Ultimate: Tooltipster Responsive - **/</style>"),
					jQuery("head").append(t);
			},
			_show() {
				const t = this;
				"shown" != t.Status &&
					"appearing" != t.Status &&
					(t.options.delay
						? (t.timerShow = setTimeout(function () {
								("click" == t.options.trigger ||
									("hover" == t.options.trigger && t.mouseIsOverProxy)) &&
									(t._showNow(), t._responsive());
						  }, t.options.delay))
						: t._showNow()),
					t._responsive();
			},
			_showNow(t) {
				const l = this;
				l.options.functionBefore.call(l.$el, l.$el, function () {
					if (l.enabled && null !== l.Content) {
						t && l.callbacks.show.push(t),
							(l.callbacks.hide = []),
							clearTimeout(l.timerShow),
							(l.timerShow = null),
							clearTimeout(l.timerHide),
							(l.timerHide = null),
							l.options.onlyOne &&
								A(".ult-tooltipstered")
									.not(l.$el)
									.each(function (t, e) {
										const n = A(e),
											i = n.data("ult-tooltipster-ns");
										A.each(i, function (t, e) {
											const i = n.data(e),
												o = i.status(),
												s = i.option("autoClose");
											"hidden" !== o && "disappearing" !== o && s && i.hide();
										});
									});

						function e() {
							(l.Status = "shown"),
								A.each(l.callbacks.show, function (t, e) {
									e.call(l.$el);
								}),
								(l.callbacks.show = []);
						}
						if ("hidden" !== l.Status) {
							var i = 0;
							"disappearing" === l.Status
								? ((l.Status = "appearing"),
								  d()
										? (l.$tooltip
												.clearQueue()
												.removeClass("ult-tooltipster-dying")
												.addClass("ult-tooltipster-" + l.options.animation + "-show"),
										  0 < l.options.speed && l.$tooltip.delay(l.options.speed),
										  l.$tooltip.queue(e))
										: l.$tooltip.stop().fadeIn(e))
								: "shown" === l.Status && e();
						} else {
							l.Status = "appearing";
							i = l.options.speed;
							let t = (BaseStyle = "");
							l.options.ultCustomTooltipStyle &&
								((t = l.options.ultContentStyle || ""), (BaseStyle = l.options.ultBaseStyle || "")),
								(l.bodyOverflowX = A("body").css("overflow-x")),
								A("body").css("overflow-x", "hidden");
							var o = "ult-tooltipster-" + l.options.animation,
								s =
									"-webkit-transition-duration: " +
									l.options.speed +
									"ms; -webkit-animation-duration: " +
									l.options.speed +
									"ms; -moz-transition-duration: " +
									l.options.speed +
									"ms; -moz-animation-duration: " +
									l.options.speed +
									"ms; -o-transition-duration: " +
									l.options.speed +
									"ms; -o-animation-duration: " +
									l.options.speed +
									"ms; -ms-transition-duration: " +
									l.options.speed +
									"ms; -ms-animation-duration: " +
									l.options.speed +
									"ms; transition-duration: " +
									l.options.speed +
									"ms; animation-duration: " +
									l.options.speed +
									"ms;",
								n = l.options.minWidth ? "min-width:" + Math.round(l.options.minWidth) + "px;" : "",
								a = l.options.maxWidth ? "max-width:" + Math.round(l.options.maxWidth) + "px;" : "",
								r = l.options.interactive ? "pointer-events: auto;" : "";
							if (
								((BaseStyle = BaseStyle + " " + n + " " + a + " " + r + " " + s),
								(l.$tooltip = A(
									'<div id="' +
										l.options.ult_adv_id +
										'" class="ult-tooltipster-base ' +
										l.options.theme +
										'" style="' +
										BaseStyle +
										'"><div class="ult-tooltipster-content ult-responsive" data-ultimate-target="' +
										l.options.ultimate_target +
										"\" data-responsive-json-new = '" +
										l.options.responsive_json_new +
										"' style=\"" +
										t +
										'"></div></div>'
								)),
								d() && l.$tooltip.addClass(o),
								l._content_insert(),
								l.$tooltip.appendTo("body"),
								l.reposition(),
								l.options.functionReady.call(l.$el, l.$el, l.$tooltip),
								d()
									? (l.$tooltip.addClass(o + "-show"),
									  0 < l.options.speed && l.$tooltip.delay(l.options.speed),
									  l.$tooltip.queue(e))
									: l.$tooltip.css("display", "none").fadeIn(l.options.speed, e),
								l._interval_set(),
								A(I).on("scroll." + l.namespace + " resize." + l.namespace, function () {
									l.reposition();
								}),
								l.options.autoClose)
							)
								if ((A("body").off("." + l.namespace), "hover" == l.options.trigger))
									if (
										(c &&
											setTimeout(function () {
												A("body").on("touchstart." + l.namespace, function () {
													l.hide();
												});
											}, 0),
										l.options.interactive)
									) {
										c &&
											l.$tooltip.on("touchstart." + l.namespace, function (t) {
												t.stopPropagation();
											});
										let t = null;
										l.$elProxy
											.add(l.$tooltip)
											.on("mouseleave." + l.namespace + "-autoClose", function () {
												clearTimeout(t),
													(t = setTimeout(function () {
														l.hide();
													}, l.options.interactiveTolerance));
											})
											.on("mouseenter." + l.namespace + "-autoClose", function () {
												clearTimeout(t);
											});
									} else
										l.$elProxy.on("mouseleave." + l.namespace + "-autoClose", function () {
											l.hide();
										});
								else
									"click" == l.options.trigger &&
										(setTimeout(function () {
											A("body").on(
												"click." + l.namespace + " touchstart." + l.namespace,
												function () {
													l.hide();
												}
											);
										}, 0),
										l.options.interactive &&
											l.$tooltip.on(
												"click." + l.namespace + " touchstart." + l.namespace,
												function (t) {
													t.stopPropagation();
												}
											));
						}
						0 < l.options.timer &&
							(l.timerHide = setTimeout(function () {
								(l.timerHide = null), l.hide();
							}, l.options.timer + i));
					}
				});
			},
			_interval_set() {
				const i = this;
				i.checkInterval = setInterval(function () {
					if (
						0 === A("body").find(i.$el).length ||
						0 === A("body").find(i.$elProxy).length ||
						"hidden" == i.Status ||
						0 === A("body").find(i.$tooltip).length
					)
						("shown" != i.Status && "appearing" != i.Status) || i.hide(), i._interval_cancel();
					else if (i.options.positionTracker) {
						let t = i._repositionInfo(i.$elProxy),
							e = !1;
						s(t.dimension, i.elProxyPosition.dimension) &&
							("fixed" === i.$elProxy.css("position")
								? s(t.position, i.elProxyPosition.position) && (e = !0)
								: s(t.offset, i.elProxyPosition.offset) && (e = !0)),
							e || i.reposition();
					}
				}, 200);
			},
			_interval_cancel() {
				clearInterval(this.checkInterval), (this.checkInterval = null);
			},
			_content_set(t) {
				"object" == typeof t && null !== t && this.options.contentCloning && (t = t.clone(!0)),
					(this.Content = t);
			},
			_content_insert() {
				const t = this.$tooltip.find(".ult-tooltipster-content");
				"string" != typeof this.Content || this.options.contentAsHTML
					? t.empty().append(this.Content)
					: t.text(this.Content);
			},
			_update(t) {
				const e = this;
				e._content_set(t),
					null !== e.Content
						? "hidden" !== e.Status &&
						  (e._content_insert(),
						  e.reposition(),
						  e.options.updateAnimation &&
								(d()
									? (e.$tooltip
											.css({
												width: "",
												"-webkit-transition":
													"all " +
													e.options.speed +
													"ms, width 0ms, height 0ms, left 0ms, top 0ms",
												"-moz-transition":
													"all " +
													e.options.speed +
													"ms, width 0ms, height 0ms, left 0ms, top 0ms",
												"-o-transition":
													"all " +
													e.options.speed +
													"ms, width 0ms, height 0ms, left 0ms, top 0ms",
												"-ms-transition":
													"all " +
													e.options.speed +
													"ms, width 0ms, height 0ms, left 0ms, top 0ms",
												transition:
													"all " +
													e.options.speed +
													"ms, width 0ms, height 0ms, left 0ms, top 0ms",
											})
											.addClass("ult-tooltipster-content-changing"),
									  setTimeout(function () {
											"hidden" != e.Status &&
												(e.$tooltip.removeClass("ult-tooltipster-content-changing"),
												setTimeout(function () {
													"hidden" !== e.Status &&
														e.$tooltip.css({
															"-webkit-transition": e.options.speed + "ms",
															"-moz-transition": e.options.speed + "ms",
															"-o-transition": e.options.speed + "ms",
															"-ms-transition": e.options.speed + "ms",
															transition: e.options.speed + "ms",
														});
												}, e.options.speed));
									  }, e.options.speed))
									: e.$tooltip.fadeTo(e.options.speed, 0.5, function () {
											"hidden" != e.Status && e.$tooltip.fadeTo(e.options.speed, 1);
									  })))
						: e.hide();
			},
			_repositionInfo(t) {
				return {
					dimension: {
						height: t.outerHeight(!1),
						width: t.outerWidth(!1),
					},
					offset: t.offset(),
					position: {
						left: parseInt(t.css("left")),
						top: parseInt(t.css("top")),
					},
				};
			},
			hide(t) {
				const i = this;
				t && i.callbacks.hide.push(t),
					(i.callbacks.show = []),
					clearTimeout(i.timerShow),
					(i.timerShow = null),
					clearTimeout(i.timerHide),
					(i.timerHide = null);
				const e = function () {
					A.each(i.callbacks.hide, function (t, e) {
						e.call(i.$el);
					}),
						(i.callbacks.hide = []);
				};
				return (
					"shown" == i.Status || "appearing" == i.Status
						? ((i.Status = "disappearing"),
						  (t = function () {
								(i.Status = "hidden"),
									"object" == typeof i.Content && null !== i.Content && i.Content.detach(),
									i.$tooltip.remove(),
									(i.$tooltip = null),
									A(I).off("." + i.namespace),
									A("body")
										.off("." + i.namespace)
										.css("overflow-x", i.bodyOverflowX),
									A("body").off("." + i.namespace),
									i.$elProxy.off("." + i.namespace + "-autoClose"),
									i.options.functionAfter.call(i.$el, i.$el),
									e();
						  }),
						  d()
								? (i.$tooltip
										.clearQueue()
										.removeClass("ult-tooltipster-" + i.options.animation + "-show")
										.addClass("ult-tooltipster-dying"),
								  0 < i.options.speed && i.$tooltip.delay(i.options.speed),
								  i.$tooltip.queue(t))
								: i.$tooltip.stop().fadeOut(i.options.speed, t))
						: "hidden" == i.Status && e(),
					i
				);
			},
			show(t) {
				return this._showNow(t), this;
			},
			update(t) {
				return this.content(t);
			},
			content(t) {
				return void 0 === t ? this.Content : (this._update(t), this);
			},
			reposition() {
				var u,
					h,
					p,
					f,
					m = this;
				if (0 !== A("body").find(m.$tooltip).length) {
					m.$tooltip.css("width", ""), (m.elProxyPosition = m._repositionInfo(m.$elProxy));
					let e = null,
						i = A(I).width(),
						a = m.elProxyPosition,
						o = m.$tooltip.outerWidth(!1),
						s = (m.$tooltip.innerWidth(), m.$tooltip.outerHeight(!1));
					if (m.$elProxy.is("area")) {
						const k = m.$elProxy.attr("shape"),
							C = m.$elProxy.parent().attr("name"),
							x = A('img[usemap="#' + C + '"]'),
							T = x.offset().left,
							S = x.offset().top,
							$ = void 0 !== m.$elProxy.attr("coords") ? m.$elProxy.attr("coords").split(",") : void 0;
						if ("circle" == k) {
							var y = parseInt($[0]),
								b = parseInt($[1]),
								g = parseInt($[2]);
							(a.dimension.height = 2 * g),
								(a.dimension.width = 2 * g),
								(a.offset.top = S + b - g),
								(a.offset.left = T + y - g);
						} else if ("rect" == k) {
							var y = parseInt($[0]),
								b = parseInt($[1]),
								_ = parseInt($[2]),
								g = parseInt($[3]);
							(a.dimension.height = g - b),
								(a.dimension.width = _ - y),
								(a.offset.top = S + b),
								(a.offset.left = T + y);
						} else if ("poly" == k) {
							let e = 0,
								i = 0,
								o = 0,
								s = 0,
								n = "even";
							for (let t = 0; t < $.length; t++) {
								var v = parseInt($[t]);
								n =
									"even" == n
										? (v > o && ((o = v), 0 === t && (e = o)), v < e && (e = v), "odd")
										: (v > s && ((s = v), 1 == t && (i = s)), v < i && (i = v), "even");
							}
							(a.dimension.height = s - i),
								(a.dimension.width = o - e),
								(a.offset.top = S + i),
								(a.offset.left = T + e);
						} else
							(a.dimension.height = x.outerHeight(!1)),
								(a.dimension.width = x.outerWidth(!1)),
								(a.offset.top = S),
								(a.offset.left = T);
					}
					let n = 0,
						t = 0,
						r = 0,
						l = parseInt(m.options.offsetY),
						d = parseInt(m.options.offsetX),
						c = m.options.position;

					function w() {
						var t = A(I).scrollLeft();
						n - t < 0 && ((e = n - t), (n = t)), n + o - t > i && ((e = n - (i + t - o)), (n = i + t - o));
					}

					function j(t, e) {
						a.offset.top - A(I).scrollTop() - s - l - 12 < 0 && -1 < e.indexOf("top") && (c = t),
							a.offset.top + a.dimension.height + s + 12 + l > A(I).scrollTop() + A(I).height() &&
								-1 < e.indexOf("bottom") &&
								((c = t), (r = a.offset.top - s - l - 12));
					}
					if (
						("top" == c &&
							((u = a.offset.left + o - (a.offset.left + a.dimension.width)),
							(n = a.offset.left + d - u / 2),
							(r = a.offset.top - s - l - 12),
							w(),
							j("bottom", "top")),
						"top-left" == c &&
							((n = a.offset.left + d),
							(r = a.offset.top - s - l - 12),
							w(),
							j("bottom-left", "top-left")),
						"top-right" == c &&
							((n = a.offset.left + a.dimension.width + d - o),
							(r = a.offset.top - s - l - 12),
							w(),
							j("bottom-right", "top-right")),
						"bottom" == c &&
							((u = a.offset.left + o - (a.offset.left + a.dimension.width)),
							(n = a.offset.left - u / 2 + d),
							(r = a.offset.top + a.dimension.height + l + 12),
							w(),
							j("top", "bottom")),
						"bottom-left" == c &&
							((n = a.offset.left + d),
							(r = a.offset.top + a.dimension.height + l + 12),
							w(),
							j("top-left", "bottom-left")),
						"bottom-right" == c &&
							((n = a.offset.left + a.dimension.width + d - o),
							(r = a.offset.top + a.dimension.height + l + 12),
							w(),
							j("top-right", "bottom-right")),
						"left" == c &&
							((n = a.offset.left - d - o - 12),
							(t = a.offset.left + d + a.dimension.width + 12),
							(f = a.offset.top + s - (a.offset.top + a.dimension.height)),
							(r = a.offset.top - f / 2 - l),
							n < 0 && t + o > i
								? ((h = 2 * parseFloat(m.$tooltip.css("border-width"))),
								  (Q = o + n - h),
								  m.$tooltip.css("width", Q + "px"),
								  (s = m.$tooltip.outerHeight(!1)),
								  (n = a.offset.left - d - Q - 12 - h),
								  (f = a.offset.top + s - (a.offset.top + a.dimension.height)),
								  (r = a.offset.top - f / 2 - l))
								: n < 0 && ((n = a.offset.left + d + a.dimension.width + 12), (e = "left"))),
						"right" == c &&
							((n = a.offset.left + d + a.dimension.width + 12),
							(t = a.offset.left - d - o - 12),
							(f = a.offset.top + s - (a.offset.top + a.dimension.height)),
							(r = a.offset.top - f / 2 - l),
							n + o > i && t < 0
								? ((h = 2 * parseFloat(m.$tooltip.css("border-width"))),
								  (Q = i - n - h),
								  m.$tooltip.css("width", Q + "px"),
								  (s = m.$tooltip.outerHeight(!1)),
								  (f = a.offset.top + s - (a.offset.top + a.dimension.height)),
								  (r = a.offset.top - f / 2 - l))
								: n + o > i && ((n = a.offset.left - d - o - 12), (e = "right"))),
						m.options.arrow)
					) {
						let i = "ult-tooltipster-arrow-" + c;
						(Q =
							m.options.arrowColor.length < 1
								? m.$tooltip.css("background-color")
								: m.options.arrowColor),
							(e = e
								? "left" == e
									? ((i = "ult-tooltipster-arrow-right"), "")
									: "right" == e
									? ((i = "ult-tooltipster-arrow-left"), "")
									: "left:" + Math.round(e) + "px;"
								: ""),
							(f =
								"top" == c || "top-left" == c || "top-right" == c
									? ((p = parseFloat(m.$tooltip.css("border-bottom-width"))),
									  m.$tooltip.css("border-bottom-color"))
									: "bottom" == c || "bottom-left" == c || "bottom-right" == c
									? ((p = parseFloat(m.$tooltip.css("border-top-width"))),
									  m.$tooltip.css("border-top-color"))
									: "left" == c
									? ((p = parseFloat(m.$tooltip.css("border-right-width"))),
									  m.$tooltip.css("border-right-color"))
									: "right" == c
									? ((p = parseFloat(m.$tooltip.css("border-left-width"))),
									  m.$tooltip.css("border-left-color"))
									: ((p = parseFloat(m.$tooltip.css("border-bottom-width"))),
									  m.$tooltip.css("border-bottom-color"))),
							1 < p && p++;
						let o = "";
						if (0 !== p) {
							let t = "",
								e = "border-color: " + f + ";";
							-1 !== i.indexOf("bottom")
								? (t = "margin-top: -" + Math.round(p) + "px;")
								: -1 !== i.indexOf("top")
								? (t = "margin-bottom: -" + Math.round(p) + "px;")
								: -1 !== i.indexOf("left")
								? (t = "margin-right: -" + Math.round(p) + "px;")
								: -1 !== i.indexOf("right") && (t = "margin-left: -" + Math.round(p) + "px;"),
								(o =
									'<span class="ult-tooltipster-arrow-border" style="' + t + " " + e + ';"></span>');
						}
						m.$tooltip.find(".ult-tooltipster-arrow").remove();
						var Q =
							'<div class="' +
							i +
							' ult-tooltipster-arrow" style="' +
							e +
							'">' +
							o +
							'<span style="border-color:' +
							Q +
							';" ></span></div>';
						m.$tooltip.append(Q);
					}
					m.$tooltip.css({
						top: Math.round(r) + "px",
						left: Math.round(n) + "px",
					});
				}
				return m;
			},
			enable() {
				return (this.enabled = !0), this;
			},
			disable() {
				return this.hide(), (this.enabled = !1), this;
			},
			destroy() {
				const i = this;
				i.hide(),
					i.$el[0] !== i.$elProxy[0] && i.$elProxy.remove(),
					i.$el.removeData(i.namespace).off("." + i.namespace);
				var t,
					e = i.$el.data("ult-tooltipster-ns");
				return (
					1 === e.length
						? ((t = "string" == typeof i.Content ? i.Content : A("<div></div>").append(i.Content).html()),
						  i.$el
								.removeClass("ult-tooltipstered")
								.attr("title", t)
								.removeData(i.namespace)
								.removeData("ult-tooltipster-ns")
								.off("." + i.namespace))
						: ((e = A.grep(e, function (t, e) {
								return t !== i.namespace;
						  })),
						  i.$el.data("ult-tooltipster-ns", e)),
					i
				);
			},
			elementIcon() {
				return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : void 0;
			},
			elementTooltip() {
				return this.$tooltip ? this.$tooltip[0] : void 0;
			},
			option(t, e) {
				return void 0 === e ? this.options[t] : ((this.options[t] = e), this);
			},
			status() {
				return this.Status;
			},
		}),
			(A.fn.ulttooltipster = function () {
				const s = arguments;
				if (0 === this.length) {
					if ("string" != typeof s[0]) return this;
					{
						let t = !0;
						return "setDefaults" === s[0] ? A.extend(l, s[1]) : (t = !1), t ? !0 : this;
					}
				}
				if ("string" == typeof s[0]) {
					let o = "#*$~&";
					return (
						this.each(function () {
							const t = A(this).data("ult-tooltipster-ns"),
								e = t ? A(this).data(t[0]) : null;
							if (!e)
								throw new Error(
									"You called Tooltipster's \"" + s[0] + '" method on an uninitialized element'
								);
							if ("function" != typeof e[s[0]])
								throw new Error('Unknown method .ult-tooltipster("' + s[0] + '")');
							var i = e[s[0]](s[1], s[2]);
							if (i !== e) return (o = i), !1;
						}),
						"#*$~&" !== o ? o : this
					);
				}
				const o = [],
					t = s[0] && void 0 !== s[0].multiple,
					n = (t && s[0].multiple) || (!t && l.multiple),
					e = s[0] && void 0 !== s[0].debug,
					a = (e && s[0].debug) || (!e && l.debug);
				return (
					this.each(function () {
						let t = !1,
							e = A(this).data("ult-tooltipster-ns"),
							i = null;
						!e || n
							? (t = !0)
							: a &&
							  console.log(
									'Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.'
							  ),
							t &&
								((i = new r(this, s[0])),
								(e = e || []),
								e.push(i.namespace),
								A(this).data("ult-tooltipster-ns", e),
								A(this).data(i.namespace, i)),
							o.push(i);
					}),
					n ? o : this
				);
			});
		var c = !!("ontouchstart" in I),
			t = !1;
		A("body").one("mousemove", function () {
			t = !0;
		});
	})(jQuery, window, document),
	(function (m, t) {
		m(document).ready(function (f) {
			function o() {
				let h, p;
				m('a[href="#"]').click(function (t) {
					t.preventDefault();
				}),
					f(".ult_hotspot_container.ult-hotspot-tooltip-wrapper").each(function () {
						f(this);
						f(this).data("opacity");
						f(".ult-hotspot-tooltip[data-link_style='tootip']", f(this)).each(function () {
							var t, e;
							e =
								0 < m(this).find(".aio-icon-img").length
									? ((t = m(this).find(".aio-icon-img").outerHeight(!0)),
									  m(this).find(".aio-icon-img").outerWidth(!0))
									: ((t = jQuery(this).find(".aio-icon").outerHeight(!0)),
									  jQuery(this).find(".aio-icon").outerWidth(!0));
							let i = Math.round(t / 2),
								o = Math.round(e / 2);
							var s = f(this).data("tooltipanimation"),
								n = f(this).data("trigger") || "hover",
								a = f(this).data("arrowposition") || "top",
								r = f(this).data("bubble-arrow"),
								l = f(this).data("tooltip-content-style"),
								d = f(this).data("tooltip-base-style"),
								c = f(this).find(".hotspot-tooltip-content").html(),
								c =
									(f(this).data("tooltip-offsety"),
									f(this).find(".hotspot-tooltip-content").html(c).text()),
								u = f(this).data("mycust-id");
							(h = f(this).data("ultimate-target")),
								(p = f(this).data("responsive-json-new")),
								(p = JSON.stringify(p)),
								"top" == a && (i = 0),
								"bottom" == a && (i = t),
								"left" == a && ((i = -i), (o = 0)),
								"right" == a && ((o = e), (i = -i)),
								/firefox/.test(navigator.userAgent.toLowerCase()) && ((o = 0), (i = 0)),
								f(this).ulttooltipster({
									content: c,
									position: a,
									offsetX: o,
									offsetY: i,
									ultCustomTooltipStyle: !0,
									ultContentStyle: l,
									ultBaseStyle: d,
									arrow: r,
									delay: 100,
									speed: 300,
									interactive: !0,
									animation: s,
									trigger: n,
									contentAsHTML: 1,
									ult_adv_id: u,
									responsive_json_new: p,
									ultimate_target: h,
								});
						});
					});
			}
			o(),
				setTimeout(function () {
					m(t).load(function () {
						0 < m(".ult_hotspot_container").length &&
							("show" ===
								(m(".ult_hotspot_container").find(".ult-hotspot-tooltip").attr("data-status") ||
									"hide") && m(".ult-tooltipstered").ulttooltipster("destroy"),
							o());
					});
				}, 700),
				m(document).ajaxComplete(function (t, e, i) {
					o();
				});
		});
	})(jQuery, window),
	(function (p, e) {
		function o() {
			p(".ult-ih-list").each(function (t, a) {
				const r = p(a).attr("data-shape"),
					l = p(a).attr("data-height"),
					d = p(a).attr("data-width"),
					c = p(a).attr("data-res_height"),
					u = p(a).attr("data-res_width"),
					h = jQuery(e).width() || "";
				p(a)
					.find("li")
					.each(function () {
						var t, e, i, o, s, n;
						p(a)
							.find(".ult-ih-item")
							.addClass("ult-ih-" + r),
							(t = a),
							(e = h),
							(i = l),
							(o = d),
							(s = c),
							(n = u),
							"" != e &&
								(768 <= e
									? p(t).find(".ult-ih-item").hasClass("ult-ih-effect20")
										? p(t)
												.find(".spinner")
												.css({
													height: parseInt(i),
													width: parseInt(o),
												})
										: p(t)
												.find(
													".ult-ih-item, .ult-ih-img, .ult-ih-image-block, .ult-ih-list-item"
												)
												.css({
													height: i,
													width: o,
												})
									: p(t).find(".ult-ih-item").hasClass("ult-ih-effect20")
									? p(t)
											.find(".spinner")
											.css({
												height: parseInt(s),
												width: parseInt(n),
											})
									: p(t)
											.find(".ult-ih-item, .ult-ih-img, .ult-ih-image-block, .ult-ih-list-item")
											.css({
												height: s,
												width: n,
											}));
					});
			});
		}
		p(e).on("load", function () {
			p(".ult-ih-container").css({
				visibility: "visible",
				opacity: 1,
			});
		}),
			p(document).ready(function () {
				o(),
					p(document).ajaxComplete(function (t, e, i) {
						o();
					});
			}),
			p(e).resize(function () {
				o();
			});
	})(jQuery, window),
	(function (s) {
		s(document).ready(function () {
			s(document).trigger("ultImageSeparator");
		}),
			s(window).on("load", function () {
				s(document).trigger("ultImageSeparator");
			}),
			s(document).on("ultImageSeparator", function (t) {
				s(".ult-easy-separator-wrapper").each(function (t, e) {
					var i = s(this).attr("data-vc-row");
					let o = s(this).parents("." + i + ":first");
					o.hasClass("upb-background-text") && (o = o.parents("." + i + ":first")),
						s(this).appendTo(o).find(".ult-no-animation").css({
							opacity: "1",
						});
				});
			});
	})(jQuery),
	(function (o) {
		function t() {
			o(".ultb3-box").each(function (t, e) {
				var i = (o(e).outerHeight() - o(e).find(".ultb3-info").outerHeight()) / 2;
				o(e).find(".ultb3-info").css({
					top: i,
				});
			});
		}
		o(document).ready(function () {
			t(),
				o(window).resize(function () {
					t();
				}),
				jQuery(".ultb3-box .ultb3-info").each(function () {
					if (jQuery(this).attr("data-animation")) {
						jQuery(this).css("opacity", "0");
						const e = jQuery(this).attr("data-animation"),
							i = "delay-" + jQuery(this).attr("data-animation-delay");
						jQuery(this).bsf_appear(
							function () {
								const t = jQuery(this);
								t.addClass("animated").addClass(e),
									t.addClass("animated").addClass(i),
									t.css("opacity", "1");
							},
							{
								accY: -70,
							}
						);
					}
				});
		}),
			o(window).on("load", function () {
				t();
			});
	})(jQuery),
	jQuery(window).on("load", function (t) {
		info_box_set_auto_height();
	}),
	jQuery(document).ready(function (t) {
		info_box_set_auto_height(),
			jQuery(window).resize(function (t) {
				info_box_set_auto_height();
			});
	});
let resizedd = 0;
const time_f_arr = [];

function calculate_clipped_circle() {
	jQuery(".clipped-info-circle").each(function () {
		var t = jQuery(this).data("circle-type"),
			e = jQuery(this).data("half-percentage"),
			i = jQuery(this).children().data("responsive-circle");
		"on" == i &&
			((o = jQuery(this).children().data("responsive-breakpoint")),
			(s = jQuery(window).width()),
			(t = jQuery(this).data("circle-type")),
			o < s &&
				(void 0 !== (m = jQuery(this).data("first-height")) && "" != m && jQuery(this).height(m),
				jQuery(this).width("100%"),
				make_info_circle(".info-c-full-br", resizedd)));
		var o,
			s,
			n = jQuery(this).find(".info-circle-icons").outerHeight(),
			a = jQuery(this).find(".info-circle-icons").outerHeight();
		if ("full-circle" != t) {
			var r = jQuery(this).outerHeight();
			jQuery(this).outerWidth();
			const y = jQuery(this).css("margin-top");
			var l,
				d,
				c,
				u,
				h = jQuery(this).css("margin-bottom"),
				p = jQuery(this).children().outerWidth(),
				f = parseInt(
					jQuery(this)
						.find(".info-c-full")
						.css("margin-top")
						.replace(/[^-\d\.]/g, "")
				),
				m = parseInt(
					jQuery(this)
						.find(".info-c-full")
						.css("padding-top")
						.replace(/[^-\d\.]/g, "")
				);
			"top-circle" == t || "bottom-circle" == t
				? (jQuery(this).css({
						overflow: "hidden",
				  }),
				  jQuery(this).find(".info-c-full").outerWidth(),
				  jQuery(this).find(".info-c-full").width(),
				  "top-circle" == t
						? ((l = (e / 100) * r),
						  jQuery(this).css({
								"padding-top": y,
								height: l,
								"margin-bottom": 0,
						  }),
						  (d = l - f - parseInt(y.replace(/[^-\d\.]/g, "")) - m - m / 2),
						  jQuery(this).find(".info-c-full-wrap").css({
								height: d,
						  }))
						: "bottom-circle" == t &&
						  ((l = r - (r = ((100 - e) / 100) * r) + 10),
						  jQuery(this).css({
								"padding-bottom": h,
								height: l,
								"margin-top": 0,
						  }),
						  jQuery(this)
								.children()
								.css({
									"margin-top": -(r + n / 2),
								}),
						  (d = l - f - parseInt(y.replace(/[^-\d\.]/g, "")) - m - m / 2)))
				: ("left-circle" != t && "right-circle" != t) ||
				  (jQuery(this).css({
						overflow: "hidden",
						"padding-top": y,
						"padding-bottom": h,
				  }),
				  jQuery(this).find(".info-c-full").outerWidth(),
				  jQuery(this).find(".info-c-full").width(),
				  "left-circle" == t
						? ((c = (e / 100) * p),
						  jQuery(this).css({
								width: c,
								"padding-left": y,
						  }),
						  jQuery(this).children().css({
								width: p,
								"max-width": p,
						  }),
						  (u = c - f - (m + m / 2) - parseInt(y.replace(/[^-\d\.]/g, ""))),
						  jQuery(this).find(".info-c-full-wrap").width(u))
						: "right-circle" == t &&
						  ((e = ((100 - e) / 100) * p),
						  (c = parseInt(p - e)),
						  jQuery(this).css({
								width: c,
								"padding-right": y,
						  }),
						  jQuery(this)
								.children()
								.css({
									"margin-left": -(e + a / 2),
									"max-width": p,
									width: p,
								}),
						  (e = (e = e - f) + parseInt(y.replace(/[^-\d\.]/g, "")) - m),
						  (u = c - f - parseInt(y.replace(/[^-\d\.]/g, "")) - m),
						  (e = e),
						  jQuery(this).find(".info-c-full-wrap").width(u),
						  jQuery(this)
								.find(".info-c-full-wrap")
								.css({
									"margin-left": e + "px",
								})));
		}
		"on" == i &&
			((o = jQuery(this).children().data("responsive-breakpoint")),
			(s = jQuery(window).width()) <= o &&
				jQuery(this).css({
					width: "auto",
					overflow: "visible",
					height: "auto",
					padding: 0,
				}));
	});
}

function info_circle_slide(t, i) {
	i.bsf_appear(function () {
		setInterval(function () {
			if ("on" == i.attr("data-slide-true")) {
				let t = +i.attr("data-slide-number");
				var e = i.find(".info-circle-icons").length;
				"full" != i.data("info-circle-angle") ? e - 1 == t && (t = 0) : e == t && (t = 0);
				e = i.find(".info-circle-icons").eq(t);
				i.attr("data-slide-number", t + 1), show_next_info_circle(e);
			}
		}, t);
	});
}

function show_next_info_circle(t) {
	var e = t.parents(".info-c-full-br").data("highlight-style");
	"" != e &&
		(t
			.parents(".info-c-full-br")
			.find("." + e)
			.removeClass(e)
			.removeClass("info-circle-active"),
		t.addClass(e).addClass("info-circle-active"));
	let i = t.next();
	const o = t.parents(".info-c-full-br").data("icon-show-size");
	"not-show" == t.parents(".info-c-full-br").data("icon-show") &&
		(i.find("i.info-circle-icon").remove(),
		i.find("img.info-circle-img-icon").remove(),
		t.parents(".info-c-full-br").find(".info-c-full").addClass("circle-noicon")),
		(i = i.html());
	t.css("font-size"), t.attr("style");
	const s = t.parents(".info-c-full-br");
	s.find(".info-c-full-wrap")
		.stop()
		.animate(
			{
				opacity: 0,
			},
			"slow",
			function () {
				t.parents(".info-c-full-br").find(".info-c-full .info-c-full-wrap").html(i),
					s.find(".info-c-full i").css({
						"font-size": parseInt(o) + "px",
					}),
					s.find(".info-c-full .info-circle-img-icon").css({
						width: parseInt(o) + "px",
					}),
					t.parents(".info-c-full-br").find(".info-c-full-wrap").animate(
						{
							opacity: 1,
						},
						"slow"
					);
			}
		);
}

function responsive_check(t) {
	jQuery(t).each(function () {
		if ("on" == jQuery(this).data("responsive-circle")) {
			const e = jQuery(this).parent();
			var t = "info-circle-wrapper-" + e.data("uniqid"),
				t =
					"<style>@media(max-width:" +
					jQuery(this).data("responsive-breakpoint") +
					"px){ #" +
					t +
					" .smile_icon_list_wrap{ display: block; margin-top: auto !important; } #" +
					t +
					" .info-c-full-br{ display: none; } .smile_icon_list_wrap { margin-left:auto !important; max-width:inherit !important; width:auto !important; } .info-circle-responsive .info-circle-def { display: block; width: auto; height: auto; } .info-circle-responsive .info-circle-sub-def { display: block; vertical-align: top; } }</style>";
			jQuery("head").append(t);
			const r = jQuery(this).parent().find(".smile_icon_list_wrap .smile_icon_list"),
				l = r.find(".icon_list_item").clone();
			r.find(".icon_list_item").remove();
			const d = jQuery(this).next().data("content_bg"),
				c = jQuery(this).next().data("content_color");
			jQuery(this)
				.find(".icon-circle-list .info-details")
				.each(function () {
					var t = jQuery(this).attr("data-icon-class"),
						e = jQuery(this).find(".info-circle-heading").html(),
						i = jQuery(this).find(".info-circle-text").html(),
						o = jQuery(this).prev().css("background-color"),
						s = jQuery(this).prev().css("color"),
						n = jQuery(this).prev().css("border");
					const a = jQuery(this).find(".info-circle-sub-def").children().eq(0).clone();
					l.find(".icon_list_icon").html(a.wrap("<div />").parent().html()),
						l.find(".icon_description").css("color", c),
						l.find(".icon_description").css("background-color", d),
						l.find(".icon_description h3").html(e),
						l.find(".icon_description p").html(i),
						l.find(".icon_list_icon").css({
							"background-color": o,
							color: s,
							border: n,
						}),
						l.addClass(t),
						r.append(l.wrap("<div />").parent().html());
				});
		}
	});
}

function make_info_circle(t, e) {
	jQuery(t).each(function (t, r) {
		const l = jQuery(r).data("icon-size");
		jQuery(jQuery(r).find(".icon-circle-list .info-circle-icons")).each(function (t, e) {
			let i, o, s, n, a;
			i = jQuery(this).data("padding-style");
			e = !!jQuery(e).hasClass("info-circle-icon-without-background");
			(n = e ? (o = s = a = l) / 2 : null != i ? (o = s = a = l) / 2 + i : ((o = s = a = 2 * l), l)),
				jQuery(r)
					.parent()
					.css({
						"margin-top": n + 10 + "px",
						"margin-bottom": n + 10 + "px",
					}),
				jQuery(this).css({
					"font-size": l + "px",
					height: o + "px",
					width: s + "px",
					margin: "-" + n + "px",
					"line-height": a + "px",
				});
		});
	}),
		".info-c-full-br" == t &&
			jQuery(t).each(function () {
				jQuery(this).css("height", jQuery(this).width()), jQuery(this).css("opacity", "1");
			}),
		".info-c-semi-br" == t &&
			jQuery(t).each(function () {
				var t = jQuery(this).width();
				jQuery(this).css("height", parseInt(t) / 2 + "px");
				t = t + "px " + t + "px  0 0";
				jQuery(this).css("border-radius", t);
				t = (t = jQuery(this).find(".info-c-full").width()) + "px " + t + "px 0 0";
				jQuery(this).find(".info-c-full").css("border-radius", t);
			}),
		setTimeout(function () {
			e == resizedd &&
				(".info-c-full-br" == t && part_circle_icon(t), ".info-c-semi-br" == t && semi_circle_icon(t));
		}, 1e3);
}

function part_circle_icon(t) {
	jQuery(t).each(function () {
		jQuery(this).bsf_appear(function () {
			if ("none" != jQuery(this).css("display")) {
				var c = jQuery(this).find(".icon-circle-list .info-circle-icons").length;
				const f = new Array();
				let e = jQuery(this).outerWidth() / 2,
					i = 0;
				var t = jQuery(this).data("start-degree");
				(void 0 === t && "" == t) || (i = t);
				let o = 180 / c,
					s = jQuery(this).data("info-circle-angle");
				var u = jQuery(this).data("divert");
				let n = "";
				"full" == s && ((n = s), (s = 180), (o = 90), (e = -e));
				let a = 0,
					r = !1;
				for (h = 1; h <= c; h++) {
					let t = h * ((180 + 2 * o) / c);
					"full" == n
						? (t < i && 1 == h ? ((a = i - t), (r = !1)) : t > i && 1 == h && ((a = t - i), (r = !0)),
						  1 == r ? (t -= a) : (t += a))
						: (t = t + s - o + u),
						(t *= 0.0174532925),
						f.push(e * Math.cos(t)),
						f.push(e * Math.sin(t));
				}
				var h = 0,
					p = 0;
				const m = jQuery(this).data("launch");
				let l = jQuery(this).data("launch-duration"),
					d = jQuery(this).data("launch-delay");
				(l = l || 1),
					(d = d || 0.15),
					"" != m
						? ((p = -1e3 * d),
						  jQuery(this)
								.find(".icon-circle-list .info-circle-icons")
								.each(function () {
									const t = jQuery(this);
									(p += 1e3 * d),
										setTimeout(function () {
											t.animate(
												{
													opacity: 1,
													left: f[h++],
													top: f[h++],
												},
												{
													duration: 1e3 * l,
													easing: m,
												}
											);
										}, p);
								}))
						: jQuery(this)
								.find(".icon-circle-list .info-circle-icons")
								.each(function () {
									const t = jQuery(this);
									t.css({
										opacity: "1",
										left: f[h++],
										top: f[h++],
									});
								});
			}
		});
	});
}

function setmytime(t, e) {
	const l = [],
		d = [];
	let c;
	let i = escape(window.location.hash.substr(1));
	if (("" != t && void 0 !== t && (i = t), "" != i)) {
		const h = jQuery("a.ult_a[href$='" + i + "']");
		if (0 < h.parents(".ult_tabs").length) {
			const p = h.parents(".ult_tabs");
			var o = p.data("activebg"),
				s = p.data("titlebg"),
				n = p.data("titlecolor"),
				a = p.data("activetitle"),
				r = p.data("tabsstyle"),
				u = p.data("activeicon"),
				t = p.find("li.ult_tab_li").data("iconcolor");
			"" == u && (u = p.find("li.ult_tab_li").data("iconhover")),
				p.find("li.ult_tab_li").removeClass("current"),
				h.hasClass("ult_a") && h.parent().addClass("current"),
				"style1" == r || "style2" == r
					? (p.find("a.ult_a").css({
							"background-color": s,
					  }),
					  h.css({
							"background-color": o,
					  }))
					: (p.find("li.ult_tab_li").css({
							"background-color": s,
					  }),
					  h.parent().css({
							"background-color": o,
					  })),
				p.find("a.ult_a").css({
					color: n,
				}),
				h.css({
					color: a,
				}),
				p.find(".ult_tab_icon").css({
					color: t,
				}),
				h.find(".ult_tab_icon").css({
					color: u,
				});
			u = h.parent().index() + 1;
			p.find(".ult_tabcontent").css({
				display: "block",
			}),
				p.find(".ult_tabitemname").css({
					display: "none",
				}),
				p.find(".ult_tabitemname:nth-child(" + u + ")").css({
					display: "block",
				}),
				jQuery(document).trigger(
					"ultAdvancedTabClickedDualBtn",
					p.find(".ult_tabitemname:nth-child(" + u + ")")
				);
			p.offset().top, p.offset().left;
			p.addClass("ult_aniamte"),
				p.find("ul.ult_tabmenu li a.ult_a").click(function (t) {
					t.preventDefault(), jQuery("html,body").clearQueue(), jQuery("html,body").stop();
				});
		}
	}
	jQuery(".ult_tabs").each(function () {
		var t = jQuery(this).data("fullheight");
		let e = 0;
		"on" == t &&
			jQuery(this)
				.find(".ult_tabitemname")
				.each(function () {
					e < jQuery(this).outerHeight() &&
						((e = jQuery(this).outerHeight()),
						jQuery(this)
							.parents(".ult_tabcontent")
							.css({
								"min-height": e + "px",
							}));
				});
		var i = jQuery(this).data("tabsstyle"),
			o = jQuery(window).width(),
			s = jQuery(this).data("respmode"),
			n = jQuery(this).data("respwidth"),
			a = jQuery(this).data("responsivemode"),
			t = jQuery(this).closest(".ult_tabs").data("animation");
		"Slide-Horizontal" == t &&
			((o = jQuery(this).find("div.ult_tabcontent").outerWidth()),
			jQuery(this).find(".ult_tabcontent").find("div.ult_tabitemname:eq(0)").addClass("ult_active_tabnme")),
			"Scale" == t &&
				(jQuery(this).find(".ult_tabitemname").not("div.ult_tabitemname:eq(0)").addClass("scaleTabname"),
				jQuery(this).find(".ult_tabcontent").find("div.ult_tabitemname:eq(0)").addClass("scaleTabname2")),
			"Slide-Zoom" == t &&
				(jQuery(this).closest(".ult_tabs").find("div.ult_tabitemname").removeClass("owl-backSlide-in"),
				jQuery(this).closest(".ult_tabs").find("div.ult_tabitemname").removeClass("owl-backSlide-in"));
		t = jQuery(this).attr("id");
		n <= o
			? (jQuery(this)
					.parent()
					.find("." + t)
					.css({
						display: "none",
					}),
			  jQuery(this)
					.parent()
					.find("#" + t)
					.css({
						display: "block",
					}))
			: "Accordion" == s &&
			  (jQuery(this)
					.parent()
					.find("." + t)
					.css({
						display: "block",
					}),
			  jQuery(this)
					.parent()
					.find("#" + t)
					.css({
						display: "none",
					}));
		let r = 0;
		(c = "false"),
			jQuery(this)
				.find(".ult_tab_li")
				.each(function () {
					r < jQuery(this).outerHeight() && (r = jQuery(this).outerHeight());
				}),
			jQuery(this).find(".ult_a").addClass("false"),
			(ht1 = parseInt(r)),
			"style2" == i && ((ht1 = parseInt(ht1 / 2)), 300 < o && o < 660 && (ht1 = r / 2)),
			300 < o &&
				o < 660 &&
				(jQuery(this).find(".ult_a ").removeClass("false"),
				d.push(ht1),
				"Both" != a &&
					(jQuery(this).find(".aio-icon").hasClass("icon-top") &&
						jQuery(this).find(".aio-icon").removeClass("icon-top").addClass("ult_tab_resp_icon"),
					jQuery(this).find(".ult_tab_main").hasClass("ult_top") &&
						jQuery(this).find(".ult_tab_main").removeClass("ult_top").addClass("ult_tab_resp_ult_top"))),
			jQuery(this).find(".ult_a ").hasClass("false") && l.push(ht1);
	}),
		jQuery(window).resize(function (t) {
			!(function () {
				const s = jQuery(window).width();
				jQuery(".ult_tabs").each(function () {
					jQuery(this).data("tabsstyle");
					var t = jQuery(this).data("respmode"),
						e = jQuery(this).data("respwidth"),
						i = jQuery(this).data("responsivemode"),
						o = jQuery(this).attr("id");
					s >= e
						? (jQuery(this)
								.parent()
								.find("." + o)
								.css({
									display: "none",
								}),
						  jQuery(this)
								.parent()
								.find("#" + o)
								.css({
									display: "block",
								}),
						  "Both" != i &&
								(jQuery(this).find(".aio-icon").hasClass("ult_tab_resp_icon") &&
									jQuery(this)
										.find(".aio-icon")
										.removeClass("ult_tab_resp_icon")
										.addClass("icon-top"),
								jQuery(this).find(".ult_tab_main").hasClass("ult_tab_resp_ult_top") &&
									jQuery(this)
										.find(".ult_tab_main")
										.removeClass("ult_tab_resp_ult_top")
										.addClass("ult_top")))
						: ("Accordion" == t &&
								(jQuery(this)
									.parent()
									.find("." + o)
									.css({
										display: "block",
									}),
								jQuery(this)
									.parent()
									.find("#" + o)
									.css({
										display: "none",
									})),
						  "Both" != i &&
								(jQuery(this).find(".aio-icon").hasClass("icon-top") &&
									jQuery(this)
										.find(".aio-icon")
										.removeClass("icon-top")
										.addClass("ult_tab_resp_icon"),
								jQuery(this).find(".ult_tab_main").hasClass("ult_top") &&
									jQuery(this)
										.find(".ult_tab_main")
										.removeClass("ult_top")
										.addClass("ult_tab_resp_ult_top"))),
						300 < s &&
							s < 660 &&
							(jQuery(this).find(".ult_a ").removeClass("false"),
							d.push(ht1),
							"Both" != i &&
								(jQuery(this).find(".aio-icon").hasClass("icon-top") &&
									jQuery(this)
										.find(".aio-icon")
										.removeClass("icon-top")
										.addClass("ult_tab_resp_icon"),
								jQuery(this).find(".ult_tab_main").hasClass("ult_top") &&
									jQuery(this)
										.find(".ult_tab_main")
										.removeClass("ult_top")
										.addClass("ult_tab_resp_ult_top")));
				});
			})();
		});
}
jQuery(document).ready(function () {
	make_info_circle(".info-c-full-br", 0),
		responsive_check(".info-c-full-br"),
		jQuery(".clipped-info-circle").each(function (t, e) {
			var i = jQuery(this).outerHeight(),
				o = jQuery(this).outerWidth();
			jQuery(this).attr("data-first-width", o), jQuery(this).attr("data-first-height", i);
		}),
		jQuery(window).resize(function () {
			resizedd++, make_info_circle(".info-c-full-br", resizedd), calculate_clipped_circle();
		}),
		jQuery(window).on("load", function () {
			resizedd++, make_info_circle(".info-c-full-br", resizedd), calculate_clipped_circle();
		}),
		jQuery(document).on("ultAdvancedTabClicked", function () {
			resizedd++, make_info_circle(".info-c-full-br", resizedd), calculate_clipped_circle();
		}),
		jQuery(".info-c-full-br").each(function () {
			"click" == jQuery(this).data("focus-on") &&
				jQuery(this)
					.find(".icon-circle-list .info-circle-icons")
					.click(function () {
						var t = jQuery(this);
						jQuery(this).parents(".info-c-full-br").attr("data-slide-true", "false"),
							show_next_info_circle(t);
					}),
				"hover" == jQuery(this).data("focus-on") &&
					jQuery(this)
						.find(".icon-circle-list .info-circle-icons")
						.hover(
							function () {
								var t = jQuery(this);
								jQuery(this).parents(".info-c-full-br").attr("data-slide-true", "false"),
									show_next_info_circle(t);
							},
							function () {}
						);
		}),
		setTimeout(function () {
			jQuery(".info-c-full-br").each(function () {
				let t = jQuery(this).data("slide-duration");
				(t = t || 0.2),
					jQuery(this).attr("data-slide-number", "1"),
					/* TREETHEMESinfo_circle_slide(1e3*t,jQuery(this)), */

					show_next_info_circle(jQuery(this).find(".info-circle-icons").eq(0));
			});
		}, 1e3);
}),
	jQuery(window).load(function () {
		jQuery(".info-c-full-br").each(function () {
			"on" == jQuery(this).attr("data-slide-true") &&
				jQuery(this).hover(
					function () {
						jQuery(this).attr("data-slide-true", "off");
					},
					function () {
						jQuery(this).attr("data-slide-true", "on");
					}
				);
		});
	}),
	jQuery(document).ready(function (t) {
		jQuery(".icon_list_item").each(function (t, i) {
			var e = jQuery(this);
			1 <= e.find(".info-circle-img-icon").length && e.closest("ul.smile_icon_list").addClass("ic-resp-img");
		});
	}),
	(function (o) {
		(o.fn.bsf_appear = function (e, t) {
			var p = o.extend(
				{
					data: void 0,
					one: !0,
					accX: 0,
					accY: 0,
				},
				t
			);
			return this.each(function () {
				var u = o(this);
				if (((u.bsf_appeared = !1), e)) {
					var h = o(window),
						i = function () {
							if (u.is(":visible")) {
								var t = h.scrollLeft(),
									i = h.scrollTop(),
									e = u.offset(),
									o = e.left,
									s = e.top,
									n = p.accX,
									a = p.accY,
									r = u.height(),
									l = h.height(),
									d = u.width(),
									c = h.width();
								i <= s + r + a && s <= i + l + a && t <= o + d + n && o <= t + c + n
									? u.bsf_appeared || u.trigger("bsf_appear", p.data)
									: (u.bsf_appeared = !1);
							} else u.bsf_appeared = !1;
						},
						t = function () {
							if (((u.bsf_appeared = !0), p.one)) {
								h.unbind("scroll", i);
								var t = o.inArray(i, o.fn.bsf_appear.checks);
								0 <= t && o.fn.bsf_appear.checks.splice(t, 1);
							}
							e.apply(this, arguments);
						};
					p.one ? u.one("bsf_appear", p.data, t) : u.bind("bsf_appear", p.data, t),
						h.scroll(i),
						o.fn.bsf_appear.checks.push(i),
						i();
				} else u.trigger("bsf_appear", p.data);
			});
		}),
			o.extend(o.fn.bsf_appear, {
				checks: [],
				timeout: null,
				checkAll: function () {
					var t = o.fn.bsf_appear.checks.length;
					if (0 < t)
						for (; t--; )
							/* TREETHEMES*/
							if (typeof o.fn.bsf_appear.checks[t] == "function")
								/* END TREETHEMES */

								o.fn.bsf_appear.checks[t]();
				},
				run() {
					o.fn.bsf_appear.timeout && clearTimeout(o.fn.bsf_appear.timeout),
						(o.fn.bsf_appear.timeout = setTimeout(o.fn.bsf_appear.checkAll, 20));
				},
			}),
			o.each(
				[
					"append",
					"prepend",
					"after",
					"before",
					"attr",
					"removeAttr",
					"addClass",
					"removeClass",
					"toggleClass",
					"remove",
					"css",
					"show",
					"hide",
				],
				function (t, e) {
					const i = o.fn[e];
					i &&
						(o.fn[e] = function () {
							var t = i.apply(this, arguments);
							return o.fn.bsf_appear.run(), t;
						});
				}
			);
	})(jQuery),
	function () {
		let A, I;
		(A = this.jQuery || window.jQuery),
			(I = A(window)),
			(A.fn.stick_in_parent = function (t) {
				let Q, e, k, i, o, C, s, x, T, n, S, $;
				for (
					null == t && (t = {}),
						$ = t.sticky_class,
						C = t.inner_scrolling,
						S = t.recalc_every,
						n = t.parent,
						T = t.offset_top,
						x = t.spacer,
						k = t.bottoming,
						null == T && (T = 0),
						null == n && (n = void 0),
						null == C && (C = !0),
						null == $ && ($ = "is_stuck"),
						Q = A(document),
						null == k && (k = !0),
						i = function (a, r, l, d, c, u, h, p) {
							let f, t, m, y, b, g, _, v, e, w, j, o;
							if (!a.data("sticky_kit")) {
								if (
									(a.data("sticky_kit", !0),
									(b = Q.height()),
									(_ = a.parent()),
									null != n && (_ = _.closest(n)),
									!_.length)
								)
									throw "failed to find stick parent";
								if (
									((m = !1),
									(f = !1),
									(j = null != x ? x && a.closest(x) : A("<div />")),
									j && j.css("position", a.css("position")),
									(v = function () {
										let t, e, i;
										if (!p)
											return (
												(b = Q.height()),
												(t = parseInt(_.css("border-top-width"), 10)),
												(e = parseInt(_.css("padding-top"), 10)),
												(r = parseInt(_.css("padding-bottom"), 10)),
												(l = _.offset().top + t + e),
												(d = _.height()),
												m &&
													((m = !1),
													(f = !1),
													null == x && (a.insertAfter(j), j.detach()),
													a
														.css({
															position: "",
															top: "",
															width: "",
															bottom: "",
														})
														.removeClass($),
													(i = !0)),
												(c = a.offset().top - (parseInt(a.css("margin-top"), 10) || 0) - T),
												(u = a.outerHeight(!0)),
												(h = a.css("float")),
												j &&
													j.css({
														width: a.outerWidth(!0),
														height: u,
														display: a.css("display"),
														"vertical-align": a.css("vertical-align"),
														float: h,
													}),
												i ? o() : void 0
											);
									}),
									v(),
									u !== d)
								)
									return (
										(y = void 0),
										(g = T),
										(w = S),
										(o = function () {
											let t, e, i, o, s, n;
											if (!p)
												return (
													(i = !1),
													null != w && (--w, w <= 0 && ((w = S), v(), (i = !0))),
													i || Q.height() === b || (v(), (i = !0)),
													(o = I.scrollTop()),
													null != y && (e = o - y),
													(y = o),
													m
														? (k &&
																((s = o + u + g > d + l),
																f &&
																	!s &&
																	((f = !1),
																	a
																		.css({
																			position: "fixed",
																			bottom: "",
																			top: g,
																		})
																		.trigger("sticky_kit:unbottom"))),
														  o < c &&
																((m = !1),
																(g = T),
																null == x &&
																	(("left" !== h && "right" !== h) ||
																		a.insertAfter(j),
																	j.detach()),
																(t = {
																	position: "",
																	width: "",
																	top: "",
																}),
																a.css(t).removeClass($).trigger("sticky_kit:unstick")),
														  C &&
																((n = I.height()),
																u + T > n &&
																	(f ||
																		((g -= e),
																		(g = Math.max(n - u, g)),
																		(g = Math.min(T, g)),
																		m &&
																			a.css({
																				top: g + "px",
																			})))))
														: c < o &&
														  ((m = !0),
														  (t = {
																position: "fixed",
																top: g,
														  }),
														  (t.width =
																"border-box" === a.css("box-sizing")
																	? a.outerWidth() + "px"
																	: a.width() + "px"),
														  a.css(t).addClass($),
														  null == x &&
																(a.after(j),
																("left" !== h && "right" !== h) || j.append(a)),
														  a.trigger("sticky_kit:stick")),
													m && k && (null == s && (s = o + u + g > d + l), !f && s)
														? ((f = !0),
														  "static" === _.css("position") &&
																_.css({
																	position: "relative",
																}),
														  a
																.css({
																	position: "absolute",
																	bottom: r,
																	top: "auto",
																})
																.trigger("sticky_kit:bottom"))
														: void 0
												);
										}),
										(e = function () {
											return v(), o();
										}),
										(t = function () {
											if (
												((p = !0),
												I.off("touchmove", o),
												I.off("scroll", o),
												I.off("resize", e),
												A(document.body).off("sticky_kit:recalc", e),
												a.off("sticky_kit:detach", t),
												a.removeData("sticky_kit"),
												a.css({
													position: "",
													bottom: "",
													top: "",
													width: "",
												}),
												_.position("position", ""),
												m)
											)
												return (
													null == x &&
														(("left" !== h && "right" !== h) || a.insertAfter(j),
														j.remove()),
													a.removeClass($)
												);
										}),
										I.on("touchmove", o),
										I.on("scroll", o),
										I.on("resize", e),
										A(document.body).on("sticky_kit:recalc", e),
										a.on("sticky_kit:detach", t),
										setTimeout(o, 0)
									);
							}
						},
						o = 0,
						s = this.length;
					o < s;
					o++
				)
					(e = this[o]), i(A(e));
				return this;
			});
	}.call(this),
	jQuery(document).ready(function (_) {
		const n = function (t, e) {
				for (t += ""; t.length < e; ) t = "0" + t;
				return t;
			},
			v = function (t, e, i) {
				t = (t = t.replace(/^\s*|\s*$/, "")).replace(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i, "#$1$1$2$2$3$3");
				var o = Math.round(256 * e) * (i ? -1 : 1),
					s = t.match(
						new RegExp(
							"^rgba?\\(\\s*(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])\\s*,\\s*(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])\\s*,\\s*(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])(?:\\s*,\\s*(0|1|0?\\.\\d+))?\\s*\\)$",
							"i"
						)
					),
					e = s && null != s[4] ? s[4] : null,
					t = s
						? [s[1], s[2], s[3]]
						: t
								.replace(/^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i, function () {
									return (
										parseInt(arguments[1], 16) +
										"," +
										parseInt(arguments[2], 16) +
										"," +
										parseInt(arguments[3], 16)
									);
								})
								.split(/,/);
				return s
					? "rgb" +
							(null !== e ? "a" : "") +
							"(" +
							Math[i ? "max" : "min"](parseInt(t[0], 10) + o, i ? 0 : 255) +
							", " +
							Math[i ? "max" : "min"](parseInt(t[1], 10) + o, i ? 0 : 255) +
							", " +
							Math[i ? "max" : "min"](parseInt(t[2], 10) + o, i ? 0 : 255) +
							(null !== e ? ", " + e : "") +
							")"
					: [
							"#",
							n(Math[i ? "max" : "min"](parseInt(t[0], 10) + o, i ? 0 : 255).toString(16), 2),
							n(Math[i ? "max" : "min"](parseInt(t[1], 10) + o, i ? 0 : 255).toString(16), 2),
							n(Math[i ? "max" : "min"](parseInt(t[2], 10) + o, i ? 0 : 255).toString(16), 2),
					  ].join("");
			},
			t = _(".ult-rs-wrapper");
		(count = 0),
			t.each(function () {
				count += 1;
				let i = 0,
					o = 0,
					e = 0;
				const n = _(this).find(".ult-rslider-container");
				var t = n.data("slider_steps");
				let a = n.data("slider_color");
				a = a || "#3BF7D1";
				var s = a,
					r = ((u = s), (r = 0.2), v(u, r, !1), (c = s), (u = 0.2), v(c, u, !0));
				const l = r,
					d = r;
				var s = n.data("title-background"),
					c = n.data("title-box"),
					u = (n.data("slider_size"), n.data("adaptive_height")),
					r = n.data("arrow"),
					s = "border-top-color:" + s + ";";
				if (r) {
					const g = document.createElement("style");
					(g.type = "text/css"),
						(g.innerHTML =
							".ult-arrow" + count + ":before { " + r + " }.ult-arrow" + count + ":after { " + s + " }"),
						document.getElementsByTagName("head")[0].appendChild(g);
					var h = "ult-arrow" + count;
					n.find(".ult-arrow").addClass(h);
				}
				const p = n,
					f = _(this),
					m = n.find(".ult-rslider");
				h = function (t, e) {
					const i = n.find(".ui-slider-handle");
					var o = e.value || 1,
						s = ".ult-title" + o,
						e = ".ult-desc" + o;
					p.find(".ult-tooltip").hasClass("ult-done") ||
						p.find(".ult-tooltip").each(function (t) {
							_(this).addClass("ult-done"), i.append(_(this));
						}),
						p.find(s).css("visibility", "visible"),
						p.find(s).siblings().css("visibility", "hidden"),
						f.find(e).css("display", "block"),
						f.find(e).siblings().css("display", "none"),
						(function (t) {
							const e = ".ult-slider-ticks" + t,
								i = p.find(e);
							i.prevAll(".ui-slider-label-ticks").css("background", l),
								i.nextAll(".ui-slider-label-ticks").css("background", a);
						})(o);
				};
				m.slider({
					range: "min",
					min: 1,
					max: t,
					step: 1,
					create: h,
					slide: h,
				}),
					m.labeledslider({
						max: t - 1,
						tickInterval: 1,
					}),
					"auto" == c &&
						(n.find(".ult-tooltip").each(function () {
							var t = _(this).outerWidth(),
								e = _(this).outerHeight(),
								t = t / 2 + 10;
							(i = i > t ? i : t), (o = o > e ? o : e);
						}),
						(c = o + "px " + i + "px 35px"),
						n.css("padding", c)),
					"on" == u &&
						(f.find(".ult-description").each(function () {
							var t = _(this).outerHeight();
							e = e > t ? e : t;
						}),
						(e = e + 30 + "px"),
						f.find(".ult-desc-wrap").css("min-height", e)),
					n.find(".ui-slider-labels").children(".ui-slider-label-ticks").css("background", a);
				const y = {};
				y.background = d;
				const b = m.find(".ui-slider-handle");
				m.css("background", a), b.css(y), m.find(".ui-slider-range").css("background", l);
			});
	}),
	(function (s) {
		s(document).ready(function () {
			s(".ult-carousel-wrapper").each(function () {
				const t = s(this);
				var e, i, o;
				t.hasClass("ult_full_width") &&
					(t.css("left", 0),
					t.css("right", 0),
					(e = t.attr("data-rtl")),
					(i = s("html").outerWidth()),
					(o = t.offset().left),
					(o = Math.abs(0 - o)),
					"true" === e || !0 === e
						? t.css({
								position: "relative",
								right: "-" + o + "px",
								width: i + "px",
						  })
						: t.css({
								position: "relative",
								left: "-" + o + "px",
								width: i + "px",
						  }));
			}),
				s(".ult-carousel-wrapper").each(function (t, e) {
					var i = s(e).data("gutter"),
						e = s(e).attr("id");
					"" != i &&
						((i = "<style>#" + e + " .slick-slide { margin:0 " + i + "px; } </style>"),
						s("head").append(i));
				}),
				s(".ult-carousel-wrapper").on("init", function (t) {
					t.preventDefault(),
						s(".ult-carousel-wrapper .ult-item-wrap.slick-active").each(function (t, e) {
							($this = s(this)), $this.addClass($this.data("animation"));
						});
				}),
				s(".ult-carousel-wrapper").on("beforeChange", function (t, e, i) {
					($inViewPort = s("[data-slick-index='" + i + "']")),
						$inViewPort.siblings().removeClass($inViewPort.data("animation"));
				}),
				s(".ult-carousel-wrapper").on("afterChange", function (t, e, i, o) {
					if (
						((slidesScrolled = e.options.slidesToScroll),
						(slidesToShow = e.options.slidesToShow),
						(centerMode = e.options.centerMode),
						(windowWidth = jQuery(window).width()),
						windowWidth < 1025 && (slidesToShow = e.options.responsive[0].settings.slidesToShow),
						windowWidth < 769 && (slidesToShow = e.options.responsive[1].settings.slidesToShow),
						windowWidth < 481 && (slidesToShow = e.options.responsive[2].settings.slidesToShow),
						($currentParent = e.$slider[0].parentElement.id),
						(slideToAnimate = i + slidesToShow - 1),
						1 == slidesScrolled)
					)
						($inViewPort =
							1 == centerMode
								? ((animate = slideToAnimate - 2),
								  s("#" + $currentParent + " [data-slick-index='" + animate + "']"))
								: s("#" + $currentParent + " [data-slick-index='" + slideToAnimate + "']")),
							$inViewPort.addClass($inViewPort.data("animation"));
					else
						for (let t = slidesScrolled + i; 0 <= t; t--)
							($inViewPort = s("#" + $currentParent + " [data-slick-index='" + t + "']")),
								$inViewPort.addClass($inViewPort.data("animation"));
				}),
				s(window).resize(function () {
					s(".ult-carousel-wrapper").each(function () {
						const t = s(this);
						var e, i, o;
						t.hasClass("ult_full_width") &&
							((e = t.attr("data-rtl")),
							t.removeAttr("style"),
							(i = s("html").outerWidth()),
							(o = t.offset().left),
							(o = Math.abs(0 - o)),
							"true" === e || !0 === e
								? t.css({
										position: "relative",
										right: "-" + o + "px",
										width: i + "px",
								  })
								: t.css({
										position: "relative",
										left: "-" + o + "px",
										width: i + "px",
								  }));
					});
				});
		}),
			s(window).on("load", function () {
				s(".ult-carousel-wrapper").each(function () {
					const t = s(this);
					var e, i, o;
					t.hasClass("ult_full_width") &&
						(t.css("left", 0),
						t.css("right", 0),
						(i = t.offset().left),
						(o = Math.abs(0 - i)),
						(e = t.attr("data-rtl")),
						(i = s("html").outerWidth()),
						(o = o),
						"true" === e || !0 === e
							? t.css({
									position: "relative",
									right: "-" + o + "px",
									width: i + "px",
							  })
							: t.css({
									position: "relative",
									left: "-" + o + "px",
									width: i + "px",
							  }));
				});
			}),
			jQuery(document).on("ultAdvancedTabClickedCarousel", function (t, e) {
				s(e)
					.find(".ult-carousel-wrapper")
					.each(function () {
						const t = s(this);
						var e, i, o;
						t.hasClass("ult_full_width") &&
							(t.css("left", 0),
							t.css("right", 0),
							(i = t.offset().left),
							(o = Math.abs(0 - i)),
							(e = t.attr("data-rtl")),
							(i = s("html").outerWidth()),
							(o = o),
							"true" === e || !0 === e
								? t.css({
										position: "relative",
										right: "-" + o + "px",
										width: i + "px",
								  })
								: t.css({
										position: "relative",
										left: "-" + o + "px",
										width: i + "px",
								  }));
					});
			});
	})(jQuery),
	(function (t) {
		"use strict";
		"function" == typeof define && define.amd
			? define(["jquery"], t)
			: "undefined" != typeof exports
			? (module.exports = t(require("jquery")))
			: t(jQuery);
	})(function (d) {
		"use strict";
		let a = window.Slick || {};
		var o;
		(a =
			((o = 0),
			function (t, e) {
				var i = this;
				(i.defaults = {
					accessibility: !0,
					adaptiveHeight: !1,
					appendArrows: d(t),
					appendDots: d(t),
					arrows: !0,
					asNavFor: null,
					prevArrow:
						'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
					nextArrow:
						'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
					autoplay: !1,
					autoplaySpeed: 3e3,
					centerMode: !1,
					centerPadding: "50px",
					cssEase: "ease",
					customPaging(t, e) {
						return d('<button type="button" data-role="none" role="button" tabindex="0" />').text(e + 1);
					},
					dots: !1,
					dotsClass: "slick-dots",
					draggable: !0,
					easing: "linear",
					edgeFriction: 0.35,
					fade: !1,
					focusOnSelect: !1,
					infinite: !0,
					initialSlide: 0,
					lazyLoad: "ondemand",
					mobileFirst: !1,
					pauseOnHover: !0,
					pauseOnFocus: !0,
					pauseOnDotsHover: !1,
					respondTo: "window",
					responsive: null,
					rows: 1,
					rtl: !1,
					slide: "",
					slidesPerRow: 1,
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 500,
					swipe: !0,
					swipeToSlide: !1,
					touchMove: !0,
					touchThreshold: 5,
					useCSS: !0,
					useTransform: !0,
					variableWidth: !1,
					vertical: !1,
					verticalSwiping: !1,
					waitForAnimate: !0,
					zIndex: 1e3,
				}),
					(i.initials = {
						animating: !1,
						dragging: !1,
						autoPlayTimer: null,
						currentDirection: 0,
						currentLeft: null,
						currentSlide: 0,
						direction: 1,
						$dots: null,
						listWidth: null,
						listHeight: null,
						loadIndex: 0,
						$nextArrow: null,
						$prevArrow: null,
						slideCount: null,
						slideWidth: null,
						$slideTrack: null,
						$slides: null,
						sliding: !1,
						slideOffset: 0,
						swipeLeft: null,
						$list: null,
						touchObject: {},
						transformsEnabled: !1,
						unslicked: !1,
					}),
					d.extend(i, i.initials),
					(i.activeBreakpoint = null),
					(i.animType = null),
					(i.animProp = null),
					(i.breakpoints = []),
					(i.breakpointSettings = []),
					(i.cssTransitions = !1),
					(i.focussed = !1),
					(i.interrupted = !1),
					(i.hidden = "hidden"),
					(i.paused = !0),
					(i.positionProp = null),
					(i.respondTo = null),
					(i.rowCount = 1),
					(i.shouldClick = !0),
					(i.$slider = d(t)),
					(i.$slidesCache = null),
					(i.transformType = null),
					(i.transitionType = null),
					(i.visibilityChange = "visibilitychange"),
					(i.windowWidth = 0),
					(i.windowTimer = null),
					(t = d(t).data("slick") || {}),
					(i.options = d.extend({}, i.defaults, e, t)),
					(i.currentSlide = i.options.initialSlide),
					(i.originalSettings = i.options),
					void 0 !== document.mozHidden
						? ((i.hidden = "mozHidden"), (i.visibilityChange = "mozvisibilitychange"))
						: void 0 !== document.webkitHidden &&
						  ((i.hidden = "webkitHidden"), (i.visibilityChange = "webkitvisibilitychange")),
					(i.autoPlay = d.proxy(i.autoPlay, i)),
					(i.autoPlayClear = d.proxy(i.autoPlayClear, i)),
					(i.autoPlayIterator = d.proxy(i.autoPlayIterator, i)),
					(i.changeSlide = d.proxy(i.changeSlide, i)),
					(i.clickHandler = d.proxy(i.clickHandler, i)),
					(i.selectHandler = d.proxy(i.selectHandler, i)),
					(i.setPosition = d.proxy(i.setPosition, i)),
					(i.swipeHandler = d.proxy(i.swipeHandler, i)),
					(i.dragHandler = d.proxy(i.dragHandler, i)),
					(i.keyHandler = d.proxy(i.keyHandler, i)),
					(i.instanceUid = o++),
					(i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
					i.registerBreakpoints(),
					i.init(!0);
			})),
			(a.prototype.activateADA = function () {
				this.$slideTrack
					.find(".slick-active")
					.attr({
						"aria-hidden": "false",
					})
					.find("a, input, button, select")
					.attr({
						tabindex: "0",
					});
			}),
			(a.prototype.addSlide = a.prototype.slickAdd =
				function (t, e, i) {
					var o = this;
					if ("boolean" == typeof e) (i = e), (e = null);
					else if (e < 0 || e >= o.slideCount) return !1;
					o.unload(),
						"number" == typeof e
							? 0 === e && 0 === o.$slides.length
								? d(t).appendTo(o.$slideTrack)
								: i
								? d(t).insertBefore(o.$slides.eq(e))
								: d(t).insertAfter(o.$slides.eq(e))
							: !0 === i
							? d(t).prependTo(o.$slideTrack)
							: d(t).appendTo(o.$slideTrack),
						(o.$slides = o.$slideTrack.children(this.options.slide)),
						o.$slideTrack.children(this.options.slide).detach(),
						o.$slideTrack.append(o.$slides),
						o.$slides.each(function (t, e) {
							d(e).attr("data-slick-index", t);
						}),
						(o.$slidesCache = o.$slides),
						o.reinit();
				}),
			(a.prototype.animateHeight = function () {
				var t,
					e = this;
				1 === e.options.slidesToShow &&
					!0 === e.options.adaptiveHeight &&
					!1 === e.options.vertical &&
					((t = e.$slides.eq(e.currentSlide).outerHeight(!0)),
					e.$list.animate(
						{
							height: t,
						},
						e.options.speed
					));
			}),
			(a.prototype.animateSlide = function (t, e) {
				const i = {},
					o = this;
				o.animateHeight(),
					!0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
					!1 === o.transformsEnabled
						? !1 === o.options.vertical
							? o.$slideTrack.animate(
									{
										left: t,
									},
									o.options.speed,
									o.options.easing,
									e
							  )
							: o.$slideTrack.animate(
									{
										top: t,
									},
									o.options.speed,
									o.options.easing,
									e
							  )
						: !1 === o.cssTransitions
						? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
						  d({
								animStart: o.currentLeft,
						  }).animate(
								{
									animStart: t,
								},
								{
									duration: o.options.speed,
									easing: o.options.easing,
									step(t) {
										(t = Math.ceil(t)),
											!1 === o.options.vertical
												? (i[o.animType] = "translate(" + t + "px, 0px)")
												: (i[o.animType] = "translate(0px," + t + "px)"),
											o.$slideTrack.css(i);
									},
									complete() {
										e && e.call();
									},
								}
						  ))
						: (o.applyTransition(),
						  (t = Math.ceil(t)),
						  !1 === o.options.vertical
								? (i[o.animType] = "translate3d(" + t + "px, 0px, 0px)")
								: (i[o.animType] = "translate3d(0px," + t + "px, 0px)"),
						  o.$slideTrack.css(i),
						  e &&
								setTimeout(function () {
									o.disableTransition(), e.call();
								}, o.options.speed));
			}),
			(a.prototype.getNavTarget = function () {
				let t = this.options.asNavFor;
				return t && null !== t && (t = d(t).not(this.$slider)), t;
			}),
			(a.prototype.asNavFor = function (e) {
				const t = this.getNavTarget();
				null !== t &&
					"object" == typeof t &&
					t.each(function () {
						const t = d(this).slick("getSlick");
						t.unslicked || t.slideHandler(e, !0);
					});
			}),
			(a.prototype.applyTransition = function (t) {
				const e = this,
					i = {};
				!1 === e.options.fade
					? (i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
					: (i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase),
					(!1 === e.options.fade ? e.$slideTrack : e.$slides.eq(t)).css(i);
			}),
			(a.prototype.autoPlay = function () {
				var t = this;
				t.autoPlayClear(),
					t.slideCount > t.options.slidesToShow &&
						(t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed));
			}),
			(a.prototype.autoPlayClear = function () {
				this.autoPlayTimer && clearInterval(this.autoPlayTimer);
			}),
			(a.prototype.autoPlayIterator = function () {
				let t = this,
					e = t.currentSlide + t.options.slidesToScroll;
				t.paused ||
					t.interrupted ||
					t.focussed ||
					(!1 === t.options.infinite &&
						(1 === t.direction && t.currentSlide + 1 === t.slideCount - 1
							? (t.direction = 0)
							: 0 === t.direction &&
							  ((e = t.currentSlide - t.options.slidesToScroll),
							  t.currentSlide - 1 == 0 && (t.direction = 1))),
					t.slideHandler(e));
			}),
			(a.prototype.buildArrows = function () {
				var t = this;
				!0 === t.options.arrows &&
					((t.$prevArrow = d(t.options.prevArrow).addClass("slick-arrow")),
					(t.$nextArrow = d(t.options.nextArrow).addClass("slick-arrow")),
					t.slideCount > t.options.slidesToShow
						? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
						  t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
						  t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
						  t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
						  !0 !== t.options.infinite &&
								t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
						: t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
								"aria-disabled": "true",
								tabindex: "-1",
						  }));
			}),
			(a.prototype.buildDots = function () {
				let t,
					e,
					i = this;
				if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
					for (
						i.$slider.addClass("slick-dotted"), e = d("<ul />").addClass(i.options.dotsClass), t = 0;
						t <= i.getDotCount();
						t += 1
					)
						e.append(d("<li />").append(i.options.customPaging.call(this, i, t)));
					(i.$dots = e.appendTo(i.options.appendDots)),
						i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
				}
			}),
			(a.prototype.buildOut = function () {
				var t = this;
				(t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
					(t.slideCount = t.$slides.length),
					t.$slides.each(function (t, e) {
						d(e)
							.attr("data-slick-index", t)
							.data("originalStyling", d(e).attr("style") || "");
					}),
					t.$slider.addClass("slick-slider"),
					(t.$slideTrack =
						0 === t.slideCount
							? d('<div class="slick-track"/>').appendTo(t.$slider)
							: t.$slides.wrapAll('<div class="slick-track"/>').parent()),
					(t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent()),
					t.$slideTrack.css("opacity", 0),
					(!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) || (t.options.slidesToScroll = 1),
					d("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
					t.setupInfinite(),
					t.buildArrows(),
					t.buildDots(),
					t.updateDots(),
					t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
					!0 === t.options.draggable && t.$list.addClass("draggable");
			}),
			(a.prototype.buildRows = function () {
				let t,
					e,
					i,
					o,
					s,
					n,
					a,
					r = this;
				if (((o = document.createDocumentFragment()), (n = r.$slider.children()), 1 < r.options.rows)) {
					for (a = r.options.slidesPerRow * r.options.rows, s = Math.ceil(n.length / a), t = 0; s > t; t++) {
						const d = document.createElement("div");
						for (e = 0; e < r.options.rows; e++) {
							const c = document.createElement("div");
							for (i = 0; i < r.options.slidesPerRow; i++) {
								var l = t * a + (e * r.options.slidesPerRow + i);
								n.get(l) && c.appendChild(n.get(l));
							}
							d.appendChild(c);
						}
						o.appendChild(d);
					}
					r.$slider.empty().append(o),
						r.$slider
							.children()
							.children()
							.children()
							.css({
								width: 100 / r.options.slidesPerRow + "%",
								display: "inline-block",
							});
				}
			}),
			(a.prototype.checkResponsive = function (t, e) {
				let i,
					o,
					s,
					n = this,
					a = !1,
					r = n.$slider.width(),
					l = window.innerWidth || d(window).width();
				if (
					("window" === n.respondTo
						? (s = l)
						: "slider" === n.respondTo
						? (s = r)
						: "min" === n.respondTo && (s = Math.min(l, r)),
					n.options.responsive && n.options.responsive.length && null !== n.options.responsive)
				) {
					for (i in ((o = null), n.breakpoints))
						n.breakpoints.hasOwnProperty(i) &&
							(!1 === n.originalSettings.mobileFirst
								? s < n.breakpoints[i] && (o = n.breakpoints[i])
								: s > n.breakpoints[i] && (o = n.breakpoints[i]));
					null !== o
						? (null !== n.activeBreakpoint && o === n.activeBreakpoint && !e) ||
						  ((n.activeBreakpoint = o),
						  "unslick" === n.breakpointSettings[o]
								? n.unslick(o)
								: ((n.options = d.extend({}, n.originalSettings, n.breakpointSettings[o])),
								  !0 === t && (n.currentSlide = n.options.initialSlide),
								  n.refresh(t)),
						  (a = o))
						: null !== n.activeBreakpoint &&
						  ((n.activeBreakpoint = null),
						  (n.options = n.originalSettings),
						  !0 === t && (n.currentSlide = n.options.initialSlide),
						  n.refresh(t),
						  (a = o)),
						t || !1 === a || n.$slider.trigger("breakpoint", [n, a]);
				}
			}),
			(a.prototype.changeSlide = function (t, e) {
				let i,
					o,
					s = this,
					n = d(t.currentTarget);
				switch (
					(n.is("a") && t.preventDefault(),
					n.is("li") || (n = n.closest("li")),
					(i =
						s.slideCount % s.options.slidesToScroll != 0
							? 0
							: (s.slideCount - s.currentSlide) % s.options.slidesToScroll),
					t.data.message)
				) {
					case "previous":
						(o = 0 == i ? s.options.slidesToScroll : s.options.slidesToShow - i),
							s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, e);
						break;
					case "next":
						(o = 0 == i ? s.options.slidesToScroll : i),
							s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, e);
						break;
					case "index":
						var a = 0 === t.data.index ? 0 : t.data.index || n.index() * s.options.slidesToScroll;
						s.slideHandler(s.checkNavigable(a), !1, e), n.children().trigger("focus");
				}
			}),
			(a.prototype.checkNavigable = function (t) {
				let e, i;
				if (((e = this.getNavigableIndexes()), (i = 0), t > e[e.length - 1])) t = e[e.length - 1];
				else
					for (const o in e) {
						if (t < e[o]) {
							t = i;
							break;
						}
						i = e[o];
					}
				return t;
			}),
			(a.prototype.cleanUpEvents = function () {
				var t = this;
				t.options.dots &&
					null !== t.$dots &&
					d("li", t.$dots)
						.off("click.slick", t.changeSlide)
						.off("mouseenter.slick", d.proxy(t.interrupt, t, !0))
						.off("mouseleave.slick", d.proxy(t.interrupt, t, !1)),
					t.$slider.off("focus.slick blur.slick"),
					!0 === t.options.arrows &&
						t.slideCount > t.options.slidesToShow &&
						(t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
						t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)),
					t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
					t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
					t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
					t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
					t.$list.off("click.slick", t.clickHandler),
					d(document).off(t.visibilityChange, t.visibility),
					t.cleanUpSlideEvents(),
					!0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
					!0 === t.options.focusOnSelect && d(t.$slideTrack).children().off("click.slick", t.selectHandler),
					d(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
					d(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
					d("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
					d(window).off("load.slick.slick-" + t.instanceUid, t.setPosition),
					d(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition);
			}),
			(a.prototype.cleanUpSlideEvents = function () {
				var t = this;
				t.$list.off("mouseenter.slick", d.proxy(t.interrupt, t, !0)),
					t.$list.off("mouseleave.slick", d.proxy(t.interrupt, t, !1));
			}),
			(a.prototype.cleanUpRows = function () {
				let t;
				1 < this.options.rows &&
					((t = this.$slides.children().children()), t.removeAttr("style"), this.$slider.empty().append(t));
			}),
			(a.prototype.clickHandler = function (t) {
				!1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault());
			}),
			(a.prototype.destroy = function (t) {
				var e = this;
				e.autoPlayClear(),
					(e.touchObject = {}),
					e.cleanUpEvents(),
					d(".slick-cloned", e.$slider).detach(),
					e.$dots && e.$dots.remove(),
					e.$prevArrow &&
						e.$prevArrow.length &&
						(e.$prevArrow
							.removeClass("slick-disabled slick-arrow slick-hidden")
							.removeAttr("aria-hidden aria-disabled tabindex")
							.css("display", ""),
						e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()),
					e.$nextArrow &&
						e.$nextArrow.length &&
						(e.$nextArrow
							.removeClass("slick-disabled slick-arrow slick-hidden")
							.removeAttr("aria-hidden aria-disabled tabindex")
							.css("display", ""),
						e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()),
					e.$slides &&
						(e.$slides
							.removeClass("slick-slide slick-active slick-center slick-visible slick-current")
							.removeAttr("aria-hidden")
							.removeAttr("data-slick-index")
							.each(function () {
								d(this).attr("style", d(this).data("originalStyling"));
							}),
						e.$slideTrack.children(this.options.slide).detach(),
						e.$slideTrack.detach(),
						e.$list.detach(),
						e.$slider.append(e.$slides)),
					e.cleanUpRows(),
					e.$slider.removeClass("slick-slider"),
					e.$slider.removeClass("slick-initialized"),
					e.$slider.removeClass("slick-dotted"),
					(e.unslicked = !0),
					t || e.$slider.trigger("destroy", [e]);
			}),
			(a.prototype.disableTransition = function (t) {
				const e = {};
				(e[this.transitionType] = ""),
					(!1 === this.options.fade ? this.$slideTrack : this.$slides.eq(t)).css(e);
			}),
			(a.prototype.fadeSlide = function (t, e) {
				const i = this;
				!1 === i.cssTransitions
					? (i.$slides.eq(t).css({
							zIndex: i.options.zIndex,
					  }),
					  i.$slides.eq(t).animate(
							{
								opacity: 1,
							},
							i.options.speed,
							i.options.easing,
							e
					  ))
					: (i.applyTransition(t),
					  i.$slides.eq(t).css({
							opacity: 1,
							zIndex: i.options.zIndex,
					  }),
					  e &&
							setTimeout(function () {
								i.disableTransition(t), e.call();
							}, i.options.speed));
			}),
			(a.prototype.fadeSlideOut = function (t) {
				var e = this;
				!1 === e.cssTransitions
					? e.$slides.eq(t).animate(
							{
								opacity: 0,
								zIndex: e.options.zIndex - 2,
							},
							e.options.speed,
							e.options.easing
					  )
					: (e.applyTransition(t),
					  e.$slides.eq(t).css({
							opacity: 0,
							zIndex: e.options.zIndex - 2,
					  }));
			}),
			(a.prototype.filterSlides = a.prototype.slickFilter =
				function (t) {
					var e = this;
					null !== t &&
						((e.$slidesCache = e.$slides),
						e.unload(),
						e.$slideTrack.children(this.options.slide).detach(),
						e.$slidesCache.filter(t).appendTo(e.$slideTrack),
						e.reinit());
				}),
			(a.prototype.focusHandler = function () {
				const i = this;
				i.$slider
					.off("focus.slick blur.slick")
					.on("focus.slick blur.slick", "*:not(.slick-arrow)", function (t) {
						t.stopImmediatePropagation();
						const e = d(this);
						setTimeout(function () {
							i.options.pauseOnFocus && ((i.focussed = e.is(":focus")), i.autoPlay());
						}, 0);
					});
			}),
			(a.prototype.getCurrent = a.prototype.slickCurrentSlide =
				function () {
					return this.currentSlide;
				}),
			(a.prototype.getDotCount = function () {
				let t = this,
					e = 0,
					i = 0,
					o = 0;
				if (!0 === t.options.infinite)
					for (; e < t.slideCount; )
						++o,
							(e = i + t.options.slidesToScroll),
							(i +=
								t.options.slidesToScroll <= t.options.slidesToShow
									? t.options.slidesToScroll
									: t.options.slidesToShow);
				else if (!0 === t.options.centerMode) o = t.slideCount;
				else if (t.options.asNavFor)
					for (; e < t.slideCount; )
						++o,
							(e = i + t.options.slidesToScroll),
							(i +=
								t.options.slidesToScroll <= t.options.slidesToShow
									? t.options.slidesToScroll
									: t.options.slidesToShow);
				else o = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
				return o - 1;
			}),
			(a.prototype.getLeft = function (t) {
				let e,
					i,
					o,
					s = this,
					n = 0;
				return (
					(s.slideOffset = 0),
					(i = s.$slides.first().outerHeight(!0)),
					!0 === s.options.infinite
						? (s.slideCount > s.options.slidesToShow &&
								((s.slideOffset = s.slideWidth * s.options.slidesToShow * -1),
								(n = i * s.options.slidesToShow * -1)),
						  s.slideCount % s.options.slidesToScroll != 0 &&
								t + s.options.slidesToScroll > s.slideCount &&
								s.slideCount > s.options.slidesToShow &&
								(n =
									t > s.slideCount
										? ((s.slideOffset =
												(s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1),
										  (s.options.slidesToShow - (t - s.slideCount)) * i * -1)
										: ((s.slideOffset =
												(s.slideCount % s.options.slidesToScroll) * s.slideWidth * -1),
										  (s.slideCount % s.options.slidesToScroll) * i * -1)))
						: t + s.options.slidesToShow > s.slideCount &&
						  ((s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth),
						  (n = (t + s.options.slidesToShow - s.slideCount) * i)),
					s.slideCount <= s.options.slidesToShow && ((s.slideOffset = 0), (n = 0)),
					!0 === s.options.centerMode && !0 === s.options.infinite
						? (s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth)
						: !0 === s.options.centerMode &&
						  ((s.slideOffset = 0),
						  (s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2))),
					(e = !1 === s.options.vertical ? t * s.slideWidth * -1 + s.slideOffset : t * i * -1 + n),
					!0 === s.options.variableWidth &&
						((o =
							s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite
								? s.$slideTrack.children(".slick-slide").eq(t)
								: s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow)),
						(e =
							!0 === s.options.rtl
								? o[0]
									? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width())
									: 0
								: o[0]
								? -1 * o[0].offsetLeft
								: 0),
						!0 === s.options.centerMode &&
							((o =
								s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite
									? s.$slideTrack.children(".slick-slide").eq(t)
									: s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1)),
							(e =
								!0 === s.options.rtl
									? o[0]
										? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width())
										: 0
									: o[0]
									? -1 * o[0].offsetLeft
									: 0),
							(e += (s.$list.width() - o.outerWidth()) / 2))),
					e
				);
			}),
			(a.prototype.getOption = a.prototype.slickGetOption =
				function (t) {
					return this.options[t];
				}),
			(a.prototype.getNavigableIndexes = function () {
				let t,
					e = this,
					i = 0,
					o = 0,
					s = [];
				for (
					t =
						!1 === e.options.infinite
							? e.slideCount
							: ((i = -1 * e.options.slidesToScroll),
							  (o = -1 * e.options.slidesToScroll),
							  2 * e.slideCount);
					t > i;

				)
					s.push(i),
						(i = o + e.options.slidesToScroll),
						(o +=
							e.options.slidesToScroll <= e.options.slidesToShow
								? e.options.slidesToScroll
								: e.options.slidesToShow);
				return s;
			}),
			(a.prototype.getSlick = function () {
				return this;
			}),
			(a.prototype.getSlideCount = function () {
				let i,
					o,
					s = this;
				return (
					(o = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0),
					!0 === s.options.swipeToSlide
						? (s.$slideTrack.find(".slick-slide").each(function (t, e) {
								return e.offsetLeft - o + d(e).outerWidth() / 2 > -1 * s.swipeLeft
									? ((i = e), !1)
									: void 0;
						  }),
						  Math.abs(d(i).attr("data-slick-index") - s.currentSlide) || 1)
						: s.options.slidesToScroll
				);
			}),
			(a.prototype.goTo = a.prototype.slickGoTo =
				function (t, e) {
					this.changeSlide(
						{
							data: {
								message: "index",
								index: parseInt(t),
							},
						},
						e
					);
				}),
			(a.prototype.init = function (t) {
				var e = this;
				d(e.$slider).hasClass("slick-initialized") ||
					(d(e.$slider).addClass("slick-initialized"),
					e.buildRows(),
					e.buildOut(),
					e.setProps(),
					e.startLoad(),
					e.loadSlider(),
					e.initializeEvents(),
					e.updateArrows(),
					e.updateDots(),
					e.checkResponsive(!0),
					e.focusHandler()),
					t && e.$slider.trigger("init", [e]),
					!0 === e.options.accessibility && e.initADA(),
					e.options.autoplay && ((e.paused = !1), e.autoPlay());
			}),
			(a.prototype.initADA = function () {
				const e = this;
				e.$slides
					.add(e.$slideTrack.find(".slick-cloned"))
					.attr({
						"aria-hidden": "true",
						tabindex: "-1",
					})
					.find("a, input, button, select")
					.attr({
						tabindex: "-1",
					}),
					e.$slideTrack.attr("role", "listbox"),
					e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
						d(this).attr({
							role: "option",
							"aria-describedby": "slick-slide" + e.instanceUid + t,
						});
					}),
					null !== e.$dots &&
						e.$dots
							.attr("role", "tablist")
							.find("li")
							.each(function (t) {
								d(this).attr({
									role: "presentation",
									"aria-selected": "false",
									"aria-controls": "navigation" + e.instanceUid + t,
									id: "slick-slide" + e.instanceUid + t,
								});
							})
							.first()
							.attr("aria-selected", "true")
							.end()
							.find("button")
							.attr("role", "button")
							.end()
							.closest("div")
							.attr("role", "toolbar"),
					e.activateADA();
			}),
			(a.prototype.initArrowEvents = function () {
				var t = this;
				!0 === t.options.arrows &&
					t.slideCount > t.options.slidesToShow &&
					(t.$prevArrow.off("click.slick").on(
						"click.slick",
						{
							message: "previous",
						},
						t.changeSlide
					),
					t.$nextArrow.off("click.slick").on(
						"click.slick",
						{
							message: "next",
						},
						t.changeSlide
					));
			}),
			(a.prototype.initDotEvents = function () {
				var t = this;
				!0 === t.options.dots &&
					t.slideCount > t.options.slidesToShow &&
					d("li", t.$dots).on(
						"click.slick",
						{
							message: "index",
						},
						t.changeSlide
					),
					!0 === t.options.dots &&
						!0 === t.options.pauseOnDotsHover &&
						d("li", t.$dots)
							.on("mouseenter.slick", d.proxy(t.interrupt, t, !0))
							.on("mouseleave.slick", d.proxy(t.interrupt, t, !1));
			}),
			(a.prototype.initSlideEvents = function () {
				var t = this;
				t.options.pauseOnHover &&
					(t.$list.on("mouseenter.slick", d.proxy(t.interrupt, t, !0)),
					t.$list.on("mouseleave.slick", d.proxy(t.interrupt, t, !1)));
			}),
			(a.prototype.initializeEvents = function () {
				var t = this;
				t.initArrowEvents(),
					t.initDotEvents(),
					t.initSlideEvents(),
					t.$list.on(
						"touchstart.slick mousedown.slick",
						{
							action: "start",
						},
						t.swipeHandler
					),
					t.$list.on(
						"touchmove.slick mousemove.slick",
						{
							action: "move",
						},
						t.swipeHandler
					),
					t.$list.on(
						"touchend.slick mouseup.slick",
						{
							action: "end",
						},
						t.swipeHandler
					),
					t.$list.on(
						"touchcancel.slick mouseleave.slick",
						{
							action: "end",
						},
						t.swipeHandler
					),
					t.$list.on("click.slick", t.clickHandler),
					d(document).on(t.visibilityChange, d.proxy(t.visibility, t)),
					!0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
					!0 === t.options.focusOnSelect && d(t.$slideTrack).children().on("click.slick", t.selectHandler),
					d(window).on("orientationchange.slick.slick-" + t.instanceUid, d.proxy(t.orientationChange, t)),
					d(window).on("resize.slick.slick-" + t.instanceUid, d.proxy(t.resize, t)),
					d("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
					d(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
					d(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition);
			}),
			(a.prototype.initUI = function () {
				var t = this;
				!0 === t.options.arrows &&
					t.slideCount > t.options.slidesToShow &&
					(t.$prevArrow.show(), t.$nextArrow.show()),
					!0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show();
			}),
			(a.prototype.keyHandler = function (t) {
				var e = this;
				t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
					(37 === t.keyCode && !0 === e.options.accessibility
						? e.changeSlide({
								data: {
									message: !0 === e.options.rtl ? "next" : "previous",
								},
						  })
						: 39 === t.keyCode &&
						  !0 === e.options.accessibility &&
						  e.changeSlide({
								data: {
									message: !0 === e.options.rtl ? "previous" : "next",
								},
						  }));
			}),
			(a.prototype.lazyLoad = function () {
				function t(t) {
					d("img[data-lazy]", t).each(function () {
						const t = d(this),
							e = d(this).attr("data-lazy"),
							i = document.createElement("img");
						(i.onload = function () {
							t.animate(
								{
									opacity: 0,
								},
								100,
								function () {
									t.attr("src", e).animate(
										{
											opacity: 1,
										},
										200,
										function () {
											t.removeAttr("data-lazy").removeClass("slick-loading");
										}
									),
										o.$slider.trigger("lazyLoaded", [o, t, e]);
								}
							);
						}),
							(i.onerror = function () {
								t
									.removeAttr("data-lazy")
									.removeClass("slick-loading")
									.addClass("slick-lazyload-error"),
									o.$slider.trigger("lazyLoadError", [o, t, e]);
							}),
							(i.src = e);
					});
				}
				var e,
					i,
					o = this;
				!0 === o.options.centerMode
					? (i =
							!0 === o.options.infinite
								? (e = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2
								: ((e = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1))),
								  o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide))
					: ((e = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide),
					  (i = Math.ceil(e + o.options.slidesToShow)),
					  !0 === o.options.fade && (0 < e && e--, i <= o.slideCount && i++)),
					t(o.$slider.find(".slick-slide").slice(e, i)),
					o.slideCount <= o.options.slidesToShow
						? t(o.$slider.find(".slick-slide"))
						: o.currentSlide >= o.slideCount - o.options.slidesToShow
						? t(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow))
						: 0 === o.currentSlide &&
						  t(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow));
			}),
			(a.prototype.loadSlider = function () {
				var t = this;
				t.setPosition(),
					t.$slideTrack.css({
						opacity: 1,
					}),
					t.$slider.removeClass("slick-loading"),
					t.initUI(),
					"progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
			}),
			(a.prototype.next = a.prototype.slickNext =
				function () {
					this.changeSlide({
						data: {
							message: "next",
						},
					});
				}),
			(a.prototype.orientationChange = function () {
				this.checkResponsive(), this.setPosition();
			}),
			(a.prototype.pause = a.prototype.slickPause =
				function () {
					this.autoPlayClear(), (this.paused = !0);
				}),
			(a.prototype.play = a.prototype.slickPlay =
				function () {
					var t = this;
					t.autoPlay(), (t.options.autoplay = !0), (t.paused = !1), (t.focussed = !1), (t.interrupted = !1);
				}),
			(a.prototype.postSlide = function (t) {
				var e = this;
				e.unslicked ||
					(e.$slider.trigger("afterChange", [e, t]),
					(e.animating = !1),
					e.setPosition(),
					(e.swipeLeft = null),
					e.options.autoplay && e.autoPlay(),
					!0 === e.options.accessibility && e.initADA());
			}),
			(a.prototype.prev = a.prototype.slickPrev =
				function () {
					this.changeSlide({
						data: {
							message: "previous",
						},
					});
				}),
			(a.prototype.preventDefault = function (t) {
				t.preventDefault();
			}),
			(a.prototype.progressiveLazyLoad = function (t) {
				t = t || 1;
				let e,
					i,
					o,
					s = this,
					n = d("img[data-lazy]", s.$slider);
				n.length
					? ((e = n.first()),
					  (i = e.attr("data-lazy")),
					  (o = document.createElement("img")),
					  (o.onload = function () {
							e.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"),
								!0 === s.options.adaptiveHeight && s.setPosition(),
								s.$slider.trigger("lazyLoaded", [s, e, i]),
								s.progressiveLazyLoad();
					  }),
					  (o.onerror = function () {
							t < 3
								? setTimeout(function () {
										s.progressiveLazyLoad(t + 1);
								  }, 500)
								: (e
										.removeAttr("data-lazy")
										.removeClass("slick-loading")
										.addClass("slick-lazyload-error"),
								  s.$slider.trigger("lazyLoadError", [s, e, i]),
								  s.progressiveLazyLoad());
					  }),
					  (o.src = i))
					: s.$slider.trigger("allImagesLoaded", [s]);
			}),
			(a.prototype.refresh = function (t) {
				var e = this,
					i = e.slideCount - e.options.slidesToShow;
				!e.options.infinite && e.currentSlide > i && (e.currentSlide = i),
					e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
					(i = e.currentSlide),
					e.destroy(!0),
					d.extend(e, e.initials, {
						currentSlide: i,
					}),
					e.init(),
					t ||
						e.changeSlide(
							{
								data: {
									message: "index",
									index: i,
								},
							},
							!1
						);
			}),
			(a.prototype.registerBreakpoints = function () {
				let t,
					e,
					i,
					o = this,
					s = o.options.responsive || null;
				if ("array" === d.type(s) && s.length) {
					for (t in ((o.respondTo = o.options.respondTo || "window"), s))
						if (((i = o.breakpoints.length - 1), (e = s[t].breakpoint), s.hasOwnProperty(t))) {
							for (; 0 <= i; )
								o.breakpoints[i] && o.breakpoints[i] === e && o.breakpoints.splice(i, 1), i--;
							o.breakpoints.push(e), (o.breakpointSettings[e] = s[t].settings);
						}
					o.breakpoints.sort(function (t, e) {
						return o.options.mobileFirst ? t - e : e - t;
					});
				}
			}),
			(a.prototype.reinit = function () {
				var t = this;
				(t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide")),
					(t.slideCount = t.$slides.length),
					t.currentSlide >= t.slideCount &&
						0 !== t.currentSlide &&
						(t.currentSlide = t.currentSlide - t.options.slidesToScroll),
					t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
					t.registerBreakpoints(),
					t.setProps(),
					t.setupInfinite(),
					t.buildArrows(),
					t.updateArrows(),
					t.initArrowEvents(),
					t.buildDots(),
					t.updateDots(),
					t.initDotEvents(),
					t.cleanUpSlideEvents(),
					t.initSlideEvents(),
					t.checkResponsive(!1, !0),
					!0 === t.options.focusOnSelect && d(t.$slideTrack).children().on("click.slick", t.selectHandler),
					t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
					t.setPosition(),
					t.focusHandler(),
					(t.paused = !t.options.autoplay),
					t.autoPlay(),
					t.$slider.trigger("reInit", [t]);
			}),
			(a.prototype.resize = function () {
				const t = this;
				d(window).width() !== t.windowWidth &&
					(clearTimeout(t.windowDelay),
					(t.windowDelay = window.setTimeout(function () {
						(t.windowWidth = d(window).width()), t.checkResponsive(), t.unslicked || t.setPosition();
					}, 50)));
			}),
			(a.prototype.removeSlide = a.prototype.slickRemove =
				function (t, e, i) {
					var o = this;
					return (
						(t = "boolean" == typeof t ? (!0 === (e = t) ? 0 : o.slideCount - 1) : !0 === e ? --t : t),
						!(o.slideCount < 1 || t < 0 || t > o.slideCount - 1) &&
							(o.unload(),
							(!0 === i
								? o.$slideTrack.children()
								: o.$slideTrack.children(this.options.slide).eq(t)
							).remove(),
							(o.$slides = o.$slideTrack.children(this.options.slide)),
							o.$slideTrack.children(this.options.slide).detach(),
							o.$slideTrack.append(o.$slides),
							(o.$slidesCache = o.$slides),
							void o.reinit())
					);
				}),
			(a.prototype.setCSS = function (t) {
				let e,
					i,
					o = this,
					s = {};
				!0 === o.options.rtl && (t = -t),
					(e = "left" == o.positionProp ? Math.ceil(t) + "px" : "0px"),
					(i = "top" == o.positionProp ? Math.ceil(t) + "px" : "0px"),
					(s[o.positionProp] = t),
					!1 === o.transformsEnabled ||
						(!(s = {}) === o.cssTransitions
							? (s[o.animType] = "translate(" + e + ", " + i + ")")
							: (s[o.animType] = "translate3d(" + e + ", " + i + ", 0px)")),
					o.$slideTrack.css(s);
			}),
			(a.prototype.setDimensions = function () {
				var t = this;
				!1 === t.options.vertical
					? !0 === t.options.centerMode &&
					  t.$list.css({
							padding: "0px " + t.options.centerPadding,
					  })
					: (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow),
					  !0 === t.options.centerMode &&
							t.$list.css({
								padding: t.options.centerPadding + " 0px",
							})),
					(t.listWidth = t.$list.width()),
					(t.listHeight = t.$list.height()),
					!1 === t.options.vertical && !1 === t.options.variableWidth
						? ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)),
						  t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length)))
						: !0 === t.options.variableWidth
						? t.$slideTrack.width(5e3 * t.slideCount)
						: ((t.slideWidth = Math.ceil(t.listWidth)),
						  t.$slideTrack.height(
								Math.ceil(
									t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length
								)
						  ));
				var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
				!1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
			}),
			(a.prototype.setFade = function () {
				let i,
					o = this;
				o.$slides.each(function (t, e) {
					(i = o.slideWidth * t * -1),
						!0 === o.options.rtl
							? d(e).css({
									position: "relative",
									right: i,
									top: 0,
									zIndex: o.options.zIndex - 2,
									opacity: 0,
							  })
							: d(e).css({
									position: "relative",
									left: i,
									top: 0,
									zIndex: o.options.zIndex - 2,
									opacity: 0,
							  });
				}),
					o.$slides.eq(o.currentSlide).css({
						zIndex: o.options.zIndex - 1,
						opacity: 1,
					});
			}),
			(a.prototype.setHeight = function () {
				var t,
					e = this;
				1 === e.options.slidesToShow &&
					!0 === e.options.adaptiveHeight &&
					!1 === e.options.vertical &&
					((t = e.$slides.eq(e.currentSlide).outerHeight(!0)), e.$list.css("height", t));
			}),
			(a.prototype.setOption = a.prototype.slickSetOption =
				function () {
					let t,
						e,
						i,
						o,
						s,
						n = this,
						a = !1;
					if (
						("object" === d.type(arguments[0])
							? ((i = arguments[0]), (a = arguments[1]), (s = "multiple"))
							: "string" === d.type(arguments[0]) &&
							  ((i = arguments[0]),
							  (o = arguments[1]),
							  (a = arguments[2]),
							  "responsive" === arguments[0] && "array" === d.type(arguments[1])
									? (s = "responsive")
									: void 0 !== arguments[1] && (s = "single")),
						"single" === s)
					)
						n.options[i] = o;
					else if ("multiple" === s)
						d.each(i, function (t, e) {
							n.options[t] = e;
						});
					else if ("responsive" === s)
						for (e in o)
							if ("array" !== d.type(n.options.responsive)) n.options.responsive = [o[e]];
							else {
								for (t = n.options.responsive.length - 1; 0 <= t; )
									n.options.responsive[t].breakpoint === o[e].breakpoint &&
										n.options.responsive.splice(t, 1),
										t--;
								n.options.responsive.push(o[e]);
							}
					a && (n.unload(), n.reinit());
				}),
			(a.prototype.setPosition = function () {
				var t = this;
				t.setDimensions(),
					t.setHeight(),
					!1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(),
					t.$slider.trigger("setPosition", [t]);
			}),
			(a.prototype.setProps = function () {
				var t = this,
					e = document.body.style;
				(t.positionProp = !0 === t.options.vertical ? "top" : "left"),
					"top" === t.positionProp
						? t.$slider.addClass("slick-vertical")
						: t.$slider.removeClass("slick-vertical"),
					(void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition) ||
						!0 !== t.options.useCSS ||
						(t.cssTransitions = !0),
					t.options.fade &&
						("number" == typeof t.options.zIndex
							? t.options.zIndex < 3 && (t.options.zIndex = 3)
							: (t.options.zIndex = t.defaults.zIndex)),
					void 0 !== e.OTransform &&
						((t.animType = "OTransform"),
						(t.transformType = "-o-transform"),
						(t.transitionType = "OTransition"),
						void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
					void 0 !== e.MozTransform &&
						((t.animType = "MozTransform"),
						(t.transformType = "-moz-transform"),
						(t.transitionType = "MozTransition"),
						void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
					void 0 !== e.webkitTransform &&
						((t.animType = "webkitTransform"),
						(t.transformType = "-webkit-transform"),
						(t.transitionType = "webkitTransition"),
						void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
					void 0 !== e.msTransform &&
						((t.animType = "msTransform"),
						(t.transformType = "-ms-transform"),
						(t.transitionType = "msTransition"),
						void 0 === e.msTransform && (t.animType = !1)),
					void 0 !== e.transform &&
						!1 !== t.animType &&
						((t.animType = "transform"),
						(t.transformType = "transform"),
						(t.transitionType = "transition")),
					(t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType);
			}),
			(a.prototype.setSlideClasses = function (t) {
				let e,
					i,
					o,
					s,
					n = this;
				(i = n.$slider
					.find(".slick-slide")
					.removeClass("slick-active slick-center slick-current")
					.attr("aria-hidden", "true")),
					n.$slides.eq(t).addClass("slick-current"),
					!0 === n.options.centerMode
						? ((e = Math.floor(n.options.slidesToShow / 2)),
						  !0 === n.options.infinite &&
								(e <= t && t <= n.slideCount - 1 - e
									? n.$slides
											.slice(t - e, t + e + 1)
											.addClass("slick-active")
											.attr("aria-hidden", "false")
									: ((o = n.options.slidesToShow + t),
									  i
											.slice(o - e + 1, o + e + 2)
											.addClass("slick-active")
											.attr("aria-hidden", "false")),
								0 === t
									? i.eq(i.length - 1 - n.options.slidesToShow).addClass("slick-center")
									: t === n.slideCount - 1 && i.eq(n.options.slidesToShow).addClass("slick-center")),
						  n.$slides.eq(t).addClass("slick-center"))
						: 0 <= t && t <= n.slideCount - n.options.slidesToShow
						? n.$slides
								.slice(t, t + n.options.slidesToShow)
								.addClass("slick-active")
								.attr("aria-hidden", "false")
						: i.length <= n.options.slidesToShow
						? i.addClass("slick-active").attr("aria-hidden", "false")
						: ((s = n.slideCount % n.options.slidesToShow),
						  (o = !0 === n.options.infinite ? n.options.slidesToShow + t : t),
						  (n.options.slidesToShow == n.options.slidesToScroll &&
						  n.slideCount - t < n.options.slidesToShow
								? i.slice(o - (n.options.slidesToShow - s), o + s)
								: i.slice(o, o + n.options.slidesToShow)
						  )
								.addClass("slick-active")
								.attr("aria-hidden", "false")),
					"ondemand" === n.options.lazyLoad && n.lazyLoad();
			}),
			(a.prototype.setupInfinite = function () {
				let t,
					e,
					i,
					o = this;
				if (
					(!0 === o.options.fade && (o.options.centerMode = !1),
					!0 === o.options.infinite &&
						!1 === o.options.fade &&
						((e = null), o.slideCount > o.options.slidesToShow))
				) {
					for (
						i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow,
							t = o.slideCount;
						t > o.slideCount - i;
						--t
					)
						(e = t - 1),
							d(o.$slides[e])
								.clone(!0)
								.attr("id", "")
								.attr("data-slick-index", e - o.slideCount)
								.prependTo(o.$slideTrack)
								.addClass("slick-cloned");
					for (t = 0; i > t; t += 1)
						(e = t),
							d(o.$slides[e])
								.clone(!0)
								.attr("id", "")
								.attr("data-slick-index", e + o.slideCount)
								.appendTo(o.$slideTrack)
								.addClass("slick-cloned");
					o.$slideTrack
						.find(".slick-cloned")
						.find("[id]")
						.each(function () {
							d(this).attr("id", "");
						});
				}
			}),
			(a.prototype.interrupt = function (t) {
				t || this.autoPlay(), (this.interrupted = t);
			}),
			(a.prototype.selectHandler = function (t) {
				let e = this,
					i = d(t.target).is(".slick-slide") ? d(t.target) : d(t.target).parents(".slick-slide"),
					o = parseInt(i.attr("data-slick-index"));
				return (
					(o = o || 0),
					e.slideCount <= e.options.slidesToShow
						? (e.setSlideClasses(o), void e.asNavFor(o))
						: void e.slideHandler(o)
				);
			}),
			(a.prototype.slideHandler = function (t, e, i) {
				let o,
					s,
					n,
					a,
					r,
					l,
					d = this;
				return (
					(e = e || !1),
					(!0 === d.animating && !0 === d.options.waitForAnimate) ||
					(!0 === d.options.fade && d.currentSlide === t) ||
					d.slideCount <= d.options.slidesToShow
						? void 0
						: (!1 === e && d.asNavFor(t),
						  (o = t),
						  (l = d.getLeft(o)),
						  (a = d.getLeft(d.currentSlide)),
						  (d.currentLeft = null === d.swipeLeft ? a : d.swipeLeft),
						  (!1 === d.options.infinite &&
								!1 === d.options.centerMode &&
								(t < 0 || t > d.getDotCount() * d.options.slidesToScroll)) ||
						  (!1 === d.options.infinite &&
								!0 === d.options.centerMode &&
								(t < 0 || t > d.slideCount - d.options.slidesToScroll))
								? void (
										!1 === d.options.fade &&
										((o = d.currentSlide),
										!0 !== i
											? d.animateSlide(a, function () {
													d.postSlide(o);
											  })
											: d.postSlide(o))
								  )
								: (d.options.autoplay && clearInterval(d.autoPlayTimer),
								  (s =
										o < 0
											? d.slideCount % d.options.slidesToScroll != 0
												? d.slideCount - (d.slideCount % d.options.slidesToScroll)
												: d.slideCount + o
											: o >= d.slideCount
											? d.slideCount % d.options.slidesToScroll != 0
												? 0
												: o - d.slideCount
											: o),
								  (d.animating = !0),
								  d.$slider.trigger("beforeChange", [d, d.currentSlide, s]),
								  (n = d.currentSlide),
								  (d.currentSlide = s),
								  d.setSlideClasses(d.currentSlide),
								  d.options.asNavFor &&
										((r = d.getNavTarget()),
										(r = r.slick("getSlick")),
										r.slideCount <= r.options.slidesToShow && r.setSlideClasses(d.currentSlide)),
								  d.updateDots(),
								  d.updateArrows(),
								  !0 === d.options.fade
										? (!0 !== i
												? (d.fadeSlideOut(n),
												  d.fadeSlide(s, function () {
														d.postSlide(s);
												  }))
												: d.postSlide(s),
										  void d.animateHeight())
										: void (!0 !== i
												? d.animateSlide(l, function () {
														d.postSlide(s);
												  })
												: d.postSlide(s))))
				);
			}),
			(a.prototype.startLoad = function () {
				var t = this;
				!0 === t.options.arrows &&
					t.slideCount > t.options.slidesToShow &&
					(t.$prevArrow.hide(), t.$nextArrow.hide()),
					!0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
					t.$slider.addClass("slick-loading");
			}),
			(a.prototype.swipeDirection = function () {
				let t,
					e,
					i,
					o,
					s = this;
				return (
					(t = s.touchObject.startX - s.touchObject.curX),
					(e = s.touchObject.startY - s.touchObject.curY),
					(i = Math.atan2(e, t)),
					(o = Math.round((180 * i) / Math.PI)),
					o < 0 && (o = 360 - Math.abs(o)),
					(o <= 45 && 0 <= o) || (o <= 360 && 315 <= o)
						? !1 === s.options.rtl
							? "left"
							: "right"
						: 135 <= o && o <= 225
						? !1 === s.options.rtl
							? "right"
							: "left"
						: !0 === s.options.verticalSwiping
						? 35 <= o && o <= 135
							? "down"
							: "up"
						: "vertical"
				);
			}),
			(a.prototype.swipeEnd = function (t) {
				let e,
					i,
					o = this;
				if (
					((o.dragging = !1),
					(o.interrupted = !1),
					(o.shouldClick = !(10 < o.touchObject.swipeLength)),
					void 0 === o.touchObject.curX)
				)
					return !1;
				if (
					(!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]),
					o.touchObject.swipeLength >= o.touchObject.minSwipe)
				) {
					switch ((i = o.swipeDirection())) {
						case "left":
						case "down":
							(e = o.options.swipeToSlide
								? o.checkNavigable(o.currentSlide + o.getSlideCount())
								: o.currentSlide + o.getSlideCount()),
								(o.currentDirection = 0);
							break;
						case "right":
						case "up":
							(e = o.options.swipeToSlide
								? o.checkNavigable(o.currentSlide - o.getSlideCount())
								: o.currentSlide - o.getSlideCount()),
								(o.currentDirection = 1);
					}
					"vertical" != i && (o.slideHandler(e), (o.touchObject = {}), o.$slider.trigger("swipe", [o, i]));
				} else
					o.touchObject.startX !== o.touchObject.curX &&
						(o.slideHandler(o.currentSlide), (o.touchObject = {}));
			}),
			(a.prototype.swipeHandler = function (t) {
				var e = this;
				if (
					!(
						!1 === e.options.swipe ||
						("ontouchend" in document && !1 === e.options.swipe) ||
						(!1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))
					)
				)
					switch (
						((e.touchObject.fingerCount =
							t.originalEvent && void 0 !== t.originalEvent.touches
								? t.originalEvent.touches.length
								: 1),
						(e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
						!0 === e.options.verticalSwiping &&
							(e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
						t.data.action)
					) {
						case "start":
							e.swipeStart(t);
							break;
						case "move":
							e.swipeMove(t);
							break;
						case "end":
							e.swipeEnd(t);
					}
			}),
			(a.prototype.swipeMove = function (t) {
				let e,
					i,
					o,
					s,
					n,
					a = this;
				return (
					(n = void 0 !== t.originalEvent ? t.originalEvent.touches : null),
					!(!a.dragging || (n && 1 !== n.length)) &&
						((e = a.getLeft(a.currentSlide)),
						(a.touchObject.curX = void 0 !== n ? n[0].pageX : t.clientX),
						(a.touchObject.curY = void 0 !== n ? n[0].pageY : t.clientY),
						(a.touchObject.swipeLength = Math.round(
							Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))
						)),
						!0 === a.options.verticalSwiping &&
							(a.touchObject.swipeLength = Math.round(
								Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))
							)),
						"vertical" !== (i = a.swipeDirection())
							? (void 0 !== t.originalEvent && 4 < a.touchObject.swipeLength && t.preventDefault(),
							  (s =
									(!1 === a.options.rtl ? 1 : -1) *
									(a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
							  !0 === a.options.verticalSwiping &&
									(s = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
							  (o = a.touchObject.swipeLength),
							  (a.touchObject.edgeHit = !1) === a.options.infinite &&
									((0 === a.currentSlide && "right" === i) ||
										(a.currentSlide >= a.getDotCount() && "left" === i)) &&
									((o = a.touchObject.swipeLength * a.options.edgeFriction),
									(a.touchObject.edgeHit = !0)),
							  !1 === a.options.vertical
									? (a.swipeLeft = e + o * s)
									: (a.swipeLeft = e + o * (a.$list.height() / a.listWidth) * s),
							  !0 === a.options.verticalSwiping && (a.swipeLeft = e + o * s),
							  !0 !== a.options.fade &&
									!1 !== a.options.touchMove &&
									(!0 === a.animating ? ((a.swipeLeft = null), !1) : void a.setCSS(a.swipeLeft)))
							: void 0)
				);
			}),
			(a.prototype.swipeStart = function (t) {
				let e,
					i = this;
				return (
					(i.interrupted = !0),
					1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow
						? !(i.touchObject = {})
						: (void 0 !== t.originalEvent &&
								void 0 !== t.originalEvent.touches &&
								(e = t.originalEvent.touches[0]),
						  (i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX),
						  (i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY),
						  void (i.dragging = !0))
				);
			}),
			(a.prototype.unfilterSlides = a.prototype.slickUnfilter =
				function () {
					var t = this;
					null !== t.$slidesCache &&
						(t.unload(),
						t.$slideTrack.children(this.options.slide).detach(),
						t.$slidesCache.appendTo(t.$slideTrack),
						t.reinit());
				}),
			(a.prototype.unload = function () {
				var t = this;
				d(".slick-cloned", t.$slider).remove(),
					t.$dots && t.$dots.remove(),
					t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
					t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
					t.$slides
						.removeClass("slick-slide slick-active slick-visible slick-current")
						.attr("aria-hidden", "true")
						.css("width", "");
			}),
			(a.prototype.unslick = function (t) {
				this.$slider.trigger("unslick", [this, t]), this.destroy();
			}),
			(a.prototype.updateArrows = function () {
				var t = this;
				Math.floor(t.options.slidesToShow / 2);
				!0 === t.options.arrows &&
					t.slideCount > t.options.slidesToShow &&
					!t.options.infinite &&
					(t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
					t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
					0 === t.currentSlide
						? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
						  t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
						: ((t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode) ||
								(t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode)) &&
						  (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
						  t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
			}),
			(a.prototype.updateDots = function () {
				var t = this;
				null !== t.$dots &&
					(t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
					t.$dots
						.find("li")
						.eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
						.addClass("slick-active")
						.attr("aria-hidden", "false"));
			}),
			(a.prototype.visibility = function () {
				this.options.autoplay && (document[this.hidden] ? (this.interrupted = !0) : (this.interrupted = !1));
			}),
			(d.fn.slick = function () {
				let t,
					e,
					i = this,
					o = arguments[0],
					s = Array.prototype.slice.call(arguments, 1),
					n = i.length;
				for (t = 0; n > t; t++)
					if (
						("object" == typeof o || void 0 === o
							? (i[t].slick = new a(i[t], o))
							: (e = i[t].slick[o].apply(i[t].slick, s)),
						void 0 !== e)
					)
						return e;
				return i;
			});
	}),
	jQuery(document).ready(function (_) {
		const e = _(window);
		let v = e.width(),
			w = -1;

		function t() {
			(elements = _("div.ult-sticky-anchor")),
				elements.each(function () {
					const i = _(this),
						o = i.find(".ult-sticky");
					var s = o.data("mobile");
					const t = i.find(".ult-space");
					if (v < 768 && "no" == s)
						return (
							o.removeClass("ult-stick"), t.css("height", ""), void i.removeClass("ult-permanent-flag")
						);
					let n = e.scrollTop(),
						a = i.offset().top;
					var r = e.height(),
						l = o.data("stick_behaviour"),
						d = o.data("support");
					if ("stick_with_scroll_row" != l && "yes" != d) {
						let t = i.parent().width();
						var c = o.height(),
							u = o.data("gutter"),
							h = o.data("sticky_gutter_class"),
							p = o.data("sticky_gutter_id"),
							f = o.data("lr_position"),
							m = o.data("lr_value"),
							y = o.data("sticky_customwidth"),
							s = o.data("sticky_width"),
							d = o.data("sticky_position");
						let e = -1;
						(u = j(0, u, h, p)),
							"top" == d
								? (n = parseInt(n) + parseInt(u))
								: ((n = parseInt(n) + parseInt(r) - parseInt(c) - parseInt(u)), (a = parseInt(a))),
							"fullwidth" == s ? (t = "100%") : "customwidth" == s && (t = y);
						const b = {};
						(b[d] = u), (b.width = t), "stick_permanent" == l && (b[f] = m);
						const g = {};
						(g[d] = ""),
							(g.width = ""),
							"stick_permanent" != l ||
								i.hasClass("ult-permanent-flag") ||
								(i.addClass("ult-permanent-flag"), o.addClass("ult-stick").css(b)),
							"stick_with_scroll" == l && n > a
								? ((e = 0),
								  (i.hasClass("ult-flag") && 0 != w) ||
										(i.addClass("ult-flag"),
										(e =
											(("fullwidth" == s
												? o.addClass("ult-stick-full-width")
												: o.addClass("ult-stick")
											).css(b),
											i.find(".ult-space").css("height", c),
											1))))
								: "stick_with_scroll" == l &&
								  i.hasClass("ult-flag") &&
								  (i.removeClass("ult-flag"),
								  ("fullwidth" == s
										? o.removeClass("ult-stick-full-width")
										: o.removeClass("ult-stick")
								  ).css(g),
								  i.find(".ult-space").css("height", ""));
					}
				}),
				(w = -1);
		}

		function j(i, t, e, o) {
			var s;
			return (
				e
					? ((s = e.split(" ")),
					  jQuery.each(s, function (t, e) {
							i = parseInt(i) + _(e).outerHeight();
					  }))
					: (e = "null"),
				o
					? ((e = o.split(" ")),
					  jQuery.each(e, function (t, e) {
							i = parseInt(i) + _(e).outerHeight();
					  }))
					: (o = "null"),
				(t = t ? parseInt(t) + parseInt(i) : i)
			);
		}
		!(function () {
			const t = _("div.ult-sticky-anchor");
			t.each(function () {
				const e = _(this);
				e.closest(".ult_row_spacer");
				const i = e.find(".ult-sticky");
				var o = i.data("stick_behaviour"),
					s = i.data("support");
				if ("stick_with_scroll_row" == o || "no" != s) {
					var n = i.data("gutter"),
						a = i.data("sticky_gutter_class"),
						r = i.data("sticky_gutter_id"),
						o = i.data("mobile"),
						n = j(0, n, a, r);
					let t = e.closest(".wpb_column").closest(".vc_row");
					e.parent().offset().top;
					e.addClass("ult_stick_to_row"),
						t.addClass("ult_s_container"),
						"yes" == s && (t = "body"),
						(v < 768 && "no" == o) ||
							e.fixTo(t, {
								top: n,
								useNativeSticky: !1,
							});
				}
			});
		})(),
			t(),
			e.resize(function () {
				(w = 0), (v = e.width()), t();
			}),
			e.bind("scroll", function () {
				t();
			});
	}),
	(function (n, e) {
		"use strict";
		const i = e.bsfmodernizr;
		(jQuery.fn.reverse = [].reverse),
			(n.SwatchBook = function (t, e) {
				(this.$el = n(e)), this._init(t);
			}),
			(n.SwatchBook.defaults = {
				center: 6,
				angleInc: 8,
				speed: 700,
				easing: "ease",
				proximity: 45,
				neighbor: 4,
				onLoadAnim: !0,
				initclosed: !1,
				closeIdx: -1,
				openAt: -1,
			}),
			(n.SwatchBook.prototype = {
				_init(t) {
					(this.options = n.extend(!0, {}, n.SwatchBook.defaults, t)),
						(this.$items = this.$el.children("div")),
						(this.itemsCount = this.$items.length),
						(this.current = -1),
						(this.support = i.csstransitions),
						(this.cache = []),
						this.options.onLoadAnim && this._setTransition(),
						this.options.initclosed
							? ((this.isClosed = !0), this.options.onLoadAnim || this._setTransition())
							: this._center(this.options.center, this.options.onLoadAnim),
						0 <= this.options.openAt &&
							this.options.openAt < this.itemsCount &&
							this._openItem(this.$items.eq(this.options.openAt)),
						this._initEvents();
				},
				_setTransition() {
					this.support &&
						this.$items.css({
							transition: "all " + this.options.speed + "ms " + this.options.easing,
						});
				},
				_openclose() {
					this.isClosed
						? this._center(this.options.center, !0)
						: this.$items.css({
								transform: "rotate(0deg)",
						  }),
						(this.isClosed = !this.isClosed);
				},
				_center(e, t) {
					const i = this;
					this.$items.each(function (t) {
						t = "rotate(" + i.options.angleInc * (t - e) + "deg)";
						n(this).css({
							transform: t,
						});
					});
				},
				_openItem(t) {
					var e = t.index();
					e !== this.current &&
						(-1 !== this.options.closeIdx && e === this.options.closeIdx
							? (this._openclose(), this._setCurrent())
							: (this._setCurrent(t),
							  t.css({
									transform: "rotate(0deg)",
							  }),
							  this._rotateSiblings(t)));
				},
				_initEvents() {
					const e = this;
					this.$items.on("click.swatchbook", function (t) {
						e._openItem(n(this));
					});
				},
				_rotateSiblings(t) {
					let e = this,
						i = t.index(),
						o = this.cache[i],
						s;
					o ? (s = o) : ((s = t.siblings()), (this.cache[i] = s)),
						s.each(function (t) {
							t =
								"rotate(" +
								(t < i
									? e.options.angleInc * (t - i)
									: t - i == 1
									? e.options.proximity
									: e.options.proximity + (t - i - 1) * e.options.neighbor) +
								"deg)";
							n(this).css({
								transform: t,
							});
						});
				},
				_setCurrent(t) {
					(this.current = t ? t.index() : -1),
						this.$items.removeClass("ff-active"),
						t && t.addClass("ff-active");
				},
			});
		const o = function (t) {
			e.console && e.console.error(t);
		};
		n.fn.swatchbook = function (t) {
			let e = n.data(this, "swatchbook");
			if ("string" == typeof t) {
				const i = Array.prototype.slice.call(arguments, 1);
				this.each(function () {
					e
						? n.isFunction(e[t]) && "_" !== t.charAt(0)
							? e[t].apply(e, i)
							: o("no such method '" + t + "' for swatchbook instance")
						: o(
								"cannot call methods on swatchbook prior to initialization; attempted to call method '" +
									t +
									"'"
						  );
				});
			} else
				this.each(function () {
					e ? e._init() : (e = n.data(this, "swatchbook", new n.SwatchBook(t, this)));
				});
			return e;
		};
	})(jQuery, window),
	jQuery(document).ready(function (c) {
		function l(t) {
			let e = escape(window.location.hash.substr(1));
			if (("" !== t && void 0 !== t && (e = t), "" != e)) {
				const s = jQuery(".ult_acord ").find("#" + e);
				s.addClass("ult-tabto-actitleActive");
				var i = s.parents(".ult-tabto-accordion").data("activebg"),
					o = s.parents(".ult-tabto-accordion").data("activetitle"),
					t = s.find(".aio-icon").data("iconhover");
				s.css("background-color", i),
					s.css("color", o),
					s.find(".aio-icon").css("color", t),
					jQuery(".ult_acord ")
						.find("#" + e)
						.parents("dt")
						.next("dd")
						.removeClass("ult-tabto-accolapsed");
			}
		}
		c(".cq-accordion").each(function () {
			c(this),
				c(this)
					.find("li")
					.each(function () {
						c(this)
							.find("i")
							.css("margin-top", 0.5 * (c(this).outerHeight() - 9));
					});
		}),
			c(".ult-tabto-accordion").each(function () {
				c(this);
				const i = c(this).data("titlebg"),
					o = c(this).data("titlecolor"),
					s = c(this).data("titlehoverbg"),
					n = c(this).data("titlehovercolor");
				var a = c(this).data("activetitle"),
					r = c(this).data("activeicon"),
					l = c(this).data("scroll"),
					d = c(this).data("activebg");
				"" == r && (r = c(this).find(".aio-icon").data("iconhover")),
					c(this)
						.find(".ult-tabto-actitle")
						.each(function () {
							const t = c(this).find(".aio-icon").data("iconcolor"),
								e = c(this).find(".aio-icon").data("iconhover");
							c(this)
								.css("background-color", i)
								.on("mouseover", function () {
									c(this).hasClass("ult-tabto-actitleActive") ||
										(c(this).css({
											"background-color": s,
											color: n,
										}),
										c(this).find(".aio-icon").css({
											color: e,
										}));
								})
								.on("mouseleave", function () {
									c(this).hasClass("ult-tabto-actitleActive") ||
										c(this).css({
											"background-color": i,
											color: o,
										}),
										1 == c(this).hasClass("ult-tabto-actitleActive") ||
											c(this).find(".aio-icon").css({
												color: t,
											});
								});
						}),
					c(this).on("click", function (t) {
						let e;
						var i, o;
						(e = c(t.target).is("i") ? c(t.target).parent() : c(t.target)),
							e.hasClass("ult-tabto-actitle")
								? ((i = e.parent().next()),
								  (o = e.parents(".ult-tabto-accordion").data("animation")),
								  i.nextAll("dd").hasClass("cq-animateIn") &&
										i
											.nextAll("dd")
											.removeClass("cq-animateIn")
											.addClass(" cq-animateOut ult-tabto-accolapsed"),
								  i.prevAll("dd").hasClass("cq-animateIn") &&
										i.prevAll("dd").removeClass("cq-animateIn").addClass("ult-tabto-accolapsed"),
								  i.nextAll("dd").hasClass("ult-ac-slidedown") &&
										i
											.nextAll("dd")
											.removeClass("ult-ac-slidedown")
											.addClass(" ult-ac-slideup ult-tabto-accolapsed"),
								  i.prevAll("dd").hasClass("ult-ac-slidedown") &&
										i
											.prevAll("dd")
											.removeClass("ult-ac-slidedown")
											.addClass("ult-tabto-accolapsed"),
								  i.prevAll("dt").find(".ult-tabto-actitle").hasClass("ult-tabto-actitleActive") &&
										i
											.prevAll("dt")
											.find(".ult-tabto-actitle")
											.removeClass("ult-tabto-actitleActive")
											.addClass("ult-acc-normal"),
								  i.nextAll("dt").find(".ult-tabto-actitle").hasClass("ult-tabto-actitleActive") &&
										i
											.nextAll("dt")
											.find(".ult-tabto-actitle")
											.removeClass("ult-tabto-actitleActive")
											.addClass("ult-acc-normal"),
								  e.removeClass("ult-acc-normal"),
								  jQuery(this)
										.find(".ult-acc-normal")
										.each(function () {
											var t = jQuery(this).find(".aio-icon").data("iconcolor"),
												e =
													(jQuery(this).find(".aio-icon").data("iconhover"),
													jQuery(this).parents(".ult-tabto-accordion").data("titlebg")),
												i = jQuery(this).parents(".ult-tabto-accordion").data("titlecolor");
											jQuery(this).css({
												background: e,
												color: i,
											}),
												jQuery(this).find(".aio-icon").css({
													color: t,
												});
										}),
								  e.css({
										color: a,
										"background-color": d,
								  }),
								  e.find(".aio-icon").css({
										color: r,
								  }),
								  e.find(".aio-icon").data("iconcolor"),
								  e.find(".aio-icon").data("iconhover"),
								  "Fade" == o
										? (e.toggleClass("ult-tabto-actitleActive"),
										  i.hasClass("ult-tabto-accolapsed")
												? (i.hasClass("cq-animateOut") && i.removeClass("cq-animateOut"),
												  i.addClass("cq-animateIn"))
												: (i.removeClass("cq-animateIn"), i.addClass("cq-animateOut")))
										: (e.toggleClass("ult-tabto-actitleActive"),
										  i.hasClass("ult-tabto-accolapsed")
												? (i.hasClass("ult-ac-slideup") && i.removeClass("ult-ac-slideup"),
												  i.addClass("ult-ac-slidedown"))
												: (i.removeClass("ult-ac-slidedown"), i.addClass("ult-ac-slideup"))),
								  i.toggleClass("ult-tabto-accolapsed"),
								  t.preventDefault(),
								  i.hasClass("ult-tabto-accolapsed") && e.removeClass("ult-tabto-actitleActive"))
								: ((e = c(t.target).is("span.ult-span-text.ult_acordian-text")
										? c(t.target).parent().parent()
										: c(t.target)),
								  e.hasClass("ult-tabto-actitle")
										? ((i = e.parent().next()),
										  (o = e.parents(".ult-tabto-accordion").data("animation")),
										  i.nextAll("dd").hasClass("cq-animateIn") &&
												i
													.nextAll("dd")
													.removeClass("cq-animateIn")
													.addClass(" ult-ac-slideup ult-tabto-accolapsed"),
										  i.prevAll("dd").hasClass("cq-animateIn") &&
												i
													.prevAll("dd")
													.removeClass("cq-animateIn")
													.addClass("ult-tabto-accolapsed"),
										  i.nextAll("dd").hasClass("ult-ac-slidedown") &&
												i
													.nextAll("dd")
													.removeClass("ult-ac-slidedown")
													.addClass(" ult-ac-slideup ult-tabto-accolapsed"),
										  i.prevAll("dd").hasClass("ult-ac-slidedown") &&
												i
													.prevAll("dd")
													.removeClass("ult-ac-slidedown")
													.addClass("ult-tabto-accolapsed"),
										  i
												.prevAll("dt")
												.find(".ult-tabto-actitle")
												.hasClass("ult-tabto-actitleActive") &&
												i
													.prevAll("dt")
													.find(".ult-tabto-actitle")
													.removeClass("ult-tabto-actitleActive")
													.addClass("ult-acc-normal"),
										  i
												.nextAll("dt")
												.find(".ult-tabto-actitle")
												.hasClass("ult-tabto-actitleActive") &&
												i
													.nextAll("dt")
													.find(".ult-tabto-actitle")
													.removeClass("ult-tabto-actitleActive")
													.addClass("ult-acc-normal"),
										  e.removeClass("ult-acc-normal"),
										  jQuery(this)
												.find(".ult-acc-normal")
												.each(function () {
													var t = jQuery(this).find(".aio-icon").data("iconcolor"),
														e =
															(jQuery(this).find(".aio-icon").data("iconhover"),
															jQuery(this)
																.parents(".ult-tabto-accordion")
																.data("titlebg")),
														i = jQuery(this)
															.parents(".ult-tabto-accordion")
															.data("titlecolor");
													jQuery(this).css({
														background: e,
														color: i,
													}),
														jQuery(this).find(".aio-icon").css({
															color: t,
														});
												}),
										  e.find(".aio-icon").data("iconcolor"),
										  e.find(".aio-icon").data("iconhover"),
										  e.css({
												color: a,
												"background-color": d,
										  }),
										  e.find(".aio-icon").css({
												color: r,
										  }),
										  "Fade" == o
												? (e.toggleClass("ult-tabto-actitleActive"),
												  i.hasClass("ult-tabto-accolapsed")
														? (i.hasClass("cq-animateOut") &&
																i.removeClass("cq-animateOut"),
														  i.addClass("cq-animateIn"))
														: (i.removeClass("cq-animateIn"), i.addClass("cq-animateOut")))
												: (e.toggleClass("ult-tabto-actitleActive"),
												  i.hasClass("ult-tabto-accolapsed")
														? (i.hasClass("ult-ac-slideup") &&
																i.removeClass("ult-ac-slideup"),
														  i.addClass("ult-ac-slidedown"))
														: (i.removeClass("ult-ac-slidedown"),
														  i.addClass("ult-ac-slideup"))),
										  i.toggleClass("ult-tabto-accolapsed"),
										  t.preventDefault(),
										  i.hasClass("ult-tabto-accolapsed") &&
												e.removeClass("ult-tabto-actitleActive"))
										: ((e = c(t.target).is("i") ? c(t.target).parent().parent() : c(t.target)),
										  e.hasClass("ult-tabto-actitle")
												? ((i = e.parent().next()),
												  (o = e.parents(".ult-tabto-accordion").data("animation")),
												  i.nextAll("dd").hasClass("cq-animateIn") &&
														i
															.nextAll("dd")
															.removeClass("cq-animateIn")
															.addClass(" cq-animateOut ult-tabto-accolapsed"),
												  i.prevAll("dd").hasClass("cq-animateIn") &&
														i
															.prevAll("dd")
															.removeClass("cq-animateIn")
															.addClass("ult-tabto-accolapsed"),
												  i.nextAll("dd").hasClass("ult-ac-slidedown") &&
														i
															.nextAll("dd")
															.removeClass("ult-ac-slidedown")
															.addClass(" ult-ac-slideup ult-tabto-accolapsed"),
												  i.prevAll("dd").hasClass("ult-ac-slidedown") &&
														i
															.prevAll("dd")
															.removeClass("ult-ac-slidedown")
															.addClass("ult-tabto-accolapsed"),
												  i
														.prevAll("dt")
														.find(".ult-tabto-actitle")
														.hasClass("ult-tabto-actitleActive") &&
														i
															.prevAll("dt")
															.find(".ult-tabto-actitle")
															.removeClass("ult-tabto-actitleActive")
															.addClass("ult-acc-normal"),
												  i
														.nextAll("dt")
														.find(".ult-tabto-actitle")
														.hasClass("ult-tabto-actitleActive") &&
														i
															.nextAll("dt")
															.find(".ult-tabto-actitle")
															.removeClass("ult-tabto-actitleActive")
															.addClass("ult-acc-normal"),
												  e.removeClass("ult-acc-normal"),
												  jQuery(this)
														.find(".ult-acc-normal")
														.each(function () {
															var t = jQuery(this).find(".aio-icon").data("iconcolor"),
																e =
																	(jQuery(this).find(".aio-icon").data("iconhover"),
																	jQuery(this)
																		.parents(".ult-tabto-accordion")
																		.data("titlebg")),
																i = jQuery(this)
																	.parents(".ult-tabto-accordion")
																	.data("titlecolor");
															jQuery(this).css({
																background: e,
																color: i,
															}),
																jQuery(this).find(".aio-icon").css({
																	color: t,
																});
														}),
												  e.find(".aio-icon").data("iconcolor"),
												  e.find(".aio-icon").data("iconhover"),
												  e.css({
														color: a,
														"background-color": d,
												  }),
												  e.find(".aio-icon").css({
														color: r,
												  }),
												  "Fade" == o
														? (e.toggleClass("ult-tabto-actitleActive"),
														  i.hasClass("ult-tabto-accolapsed")
																? (i.hasClass("cq-animateOut") &&
																		i.removeClass("cq-animateOut"),
																  i.addClass("cq-animateIn"))
																: (i.removeClass("cq-animateIn"),
																  i.addClass("cq-animateOut")))
														: (e.toggleClass("ult-tabto-actitleActive"),
														  i.hasClass("ult-tabto-accolapsed")
																? (i.hasClass("ult-ac-slideup") &&
																		i.removeClass("ult-ac-slideup"),
																  i.addClass("ult-ac-slidedown"))
																: (i.removeClass("ult-ac-slidedown"),
																  i.addClass("ult-ac-slideup"))),
												  i.toggleClass("ult-tabto-accolapsed"),
												  t.preventDefault(),
												  i.hasClass("ult-tabto-accolapsed") &&
														e.removeClass("ult-tabto-actitleActive"))
												: ((e = c(t.target).is("i")
														? c(t.target).parent().parent().parent()
														: c(t.target)),
												  e.hasClass("ult-tabto-actitle") &&
														((i = e.parent().next()),
														(o = e.parents(".ult-tabto-accordion").data("animation")),
														i.nextAll("dd").hasClass("cq-animateIn") &&
															i
																.nextAll("dd")
																.removeClass("cq-animateIn")
																.addClass(" cq-animateOut ult-tabto-accolapsed"),
														i.prevAll("dd").hasClass("cq-animateIn") &&
															i
																.prevAll("dd")
																.removeClass("cq-animateIn")
																.addClass("ult-tabto-accolapsed"),
														i.nextAll("dd").hasClass("ult-ac-slidedown") &&
															i
																.nextAll("dd")
																.removeClass("ult-ac-slidedown")
																.addClass(" ult-ac-slideup ult-tabto-accolapsed"),
														i.prevAll("dd").hasClass("ult-ac-slidedown") &&
															i
																.prevAll("dd")
																.removeClass("ult-ac-slidedown")
																.addClass("ult-tabto-accolapsed"),
														i
															.prevAll("dt")
															.find(".ult-tabto-actitle")
															.hasClass("ult-tabto-actitleActive") &&
															i
																.prevAll("dt")
																.find(".ult-tabto-actitle")
																.removeClass("ult-tabto-actitleActive")
																.addClass("ult-acc-normal"),
														i
															.nextAll("dt")
															.find(".ult-tabto-actitle")
															.hasClass("ult-tabto-actitleActive") &&
															i
																.nextAll("dt")
																.find(".ult-tabto-actitle")
																.removeClass("ult-tabto-actitleActive")
																.addClass("ult-acc-normal"),
														e.removeClass("ult-acc-normal"),
														jQuery(this)
															.find(".ult-acc-normal")
															.each(function () {
																var t = jQuery(this)
																		.find(".aio-icon")
																		.data("iconcolor"),
																	e =
																		(jQuery(this)
																			.find(".aio-icon")
																			.data("iconhover"),
																		jQuery(this)
																			.parents(".ult-tabto-accordion")
																			.data("titlebg")),
																	i = jQuery(this)
																		.parents(".ult-tabto-accordion")
																		.data("titlecolor");
																jQuery(this).css({
																	background: e,
																	color: i,
																}),
																	jQuery(this).find(".aio-icon").css({
																		color: t,
																	});
															}),
														e.find(".aio-icon").data("iconcolor"),
														e.find(".aio-icon").data("iconhover"),
														e.css({
															color: a,
															"background-color": d,
														}),
														e.find(".aio-icon").css({
															color: r,
														}),
														"Fade" == o
															? (e.toggleClass("ult-tabto-actitleActive"),
															  i.hasClass("ult-tabto-accolapsed")
																	? (i.hasClass("cq-animateOut") &&
																			i.removeClass("cq-animateOut"),
																	  i.addClass("cq-animateIn"))
																	: (i.removeClass("cq-animateIn"),
																	  i.addClass("cq-animateOut")))
															: (e.toggleClass("ult-tabto-actitleActive"),
															  i.hasClass("ult-tabto-accolapsed")
																	? (i.hasClass("ult-ac-slideup") &&
																			i.removeClass("ult-ac-slideup"),
																	  i.addClass("ult-ac-slidedown"))
																	: (i.removeClass("ult-ac-slidedown"),
																	  i.addClass("ult-ac-slideup"))),
														i.toggleClass("ult-tabto-accolapsed"),
														t.preventDefault(),
														i.hasClass("ult-tabto-accolapsed") &&
															e.removeClass("ult-tabto-actitleActive"))))),
							"on" == l &&
								jQuery("html, body").animate(
									{
										scrollTop: c(this).offset().top - 100,
									},
									1200
								);
					});
			}),
			l(),
			jQuery(".ult-tabto-accordion").each(function () {
				var t = jQuery(this).data("activeindex");
				if (0 <= (t -= 1)) {
					const e = jQuery(this).find("dl dt:nth(" + t + ")");
					t = e.find(".ult-tabto-actitle").attr("id");
					"" !== t && void 0 !== t && l(t);
				}
			}),
			jQuery(this)
				.find("a")
				.click(function (t) {
					const e = jQuery(this).attr("href");
					if (void 0 !== e && 0 < e.length) {
						var i = jQuery(this).hasClass("ult-tabto-actitle"),
							s = escape(e.substring(e.indexOf("#") + 1));
						const n = jQuery("a.ult-tabto-actitle[href$='" + s + "']");
						let o = n.attr("href");
						const a = n.parents(".ult-tabto-accordion").data("titlecolor"),
							r = n.parents(".ult-tabto-accordion").data("titlebg");
						void 0 !== o && "" !== o && (o = o.replace("#", "")),
							0 < n.parents(".ult-tabto-accordion").length &&
								s == o &&
								!i &&
								(n
									.parents(".ult-tabto-accordion")
									.find(".ult-tabto-actitle")
									.each(function (t, e) {
										var i = jQuery(this).attr("id");
										o !== i &&
											(jQuery(this).parent().removeClass("current"),
											jQuery(this).removeClass("ult-tabto-actitleActive"),
											jQuery(this).css({
												background: r,
												color: a,
											}),
											(i = jQuery(this).find(".aio-icon").data("iconcolor")),
											jQuery(this).find(".ult_tab_icon").css({
												color: i,
											}),
											jQuery(this).parents("dt").next("dd").addClass("ult-tabto-accolapsed"));
									}),
								l(o));
					}
				}),
			jQuery(this)
				.find("a.ult-tabto-actitle")
				.click(function (t) {
					const e = jQuery(this).parents(".ult-tabto-accordion"),
						o = jQuery(this).attr("id");
					e.find(".ult-tabto-actitle").each(function (t, e) {
						var i = jQuery(this).attr("id");
						o !== i && jQuery(this).parents("dt").next("dd").addClass("ult-tabto-accolapsed");
					});
				});
	}),
	jQuery(document).ready(function (g) {
		g(".ult_tabs").each(function () {
			function r() {
				clearTimeout(i),
					e - 1 < ++y && (y = 0),
					(i = setTimeout(function () {
						t.find("ul.ult_tabmenu li.ult_tab_li").each(function (t) {
							y == t && g(this).find("a.ult_a").trigger("click");
						});
					}, 1e3 * u));
			}
			var t = g(this),
				l = g(this).data("tabsstyle"),
				d = g(this).data("titlecolor"),
				c = g(this).data("titlebg"),
				o = g(this).data("titlehovercolor"),
				s = g(this).data("titlehoverbg"),
				u = parseInt(g(this).data("rotatetabs")),
				e = g(this).find("ul.ult_tabmenu li.ult_tab_li").length,
				h = g(this).data("activetitle"),
				p = g(this).data("activeicon"),
				f = g(this).data("activebg"),
				m = parseInt(g(this).find(".ult_tabcontent").outerWidth()),
				y = 0;
			const b = [];
			b.push(0),
				g(this).find("ul.ult_tabmenu").addClass("active").find("> li.ult_tab_li:eq(0)").addClass("current"),
				g(this)
					.find("ul.ult_tabmenu li.ult_tab_li")
					.each(function (t) {
						const e = g(this).data("iconhover"),
							i = g(this).data("iconcolor");
						"" == p && (p = e),
							0 == t &&
								("style2" == l || "style1" == l
									? (g(this).find("a.ult_a").css({
											background: f,
											color: h,
									  }),
									  g(this).find(".ult_tab_icon").css({
											color: p,
									  }))
									: (g(this).find("a.ult_a").css({
											color: h,
									  }),
									  g(this).css({
											background: f,
											color: h,
									  }),
									  g(this).find(".ult_tab_icon").css({
											color: h,
									  }))),
							g(this)
								.on("mouseover", function () {
									g(this).hasClass("current") ||
										(g(this).hasClass("current") || "style2" == l || "style1" == l
											? (g(this).find("a.ult_a").css({
													background: s,
													color: o,
											  }),
											  g(this).find(".ult_tab_icon").css({
													color: e,
											  }))
											: (g(this).find("a.ult_a").css({
													color: o,
											  }),
											  g(this).css({
													background: s,
													color: o,
											  }),
											  g(this).find("a.ult_a").find(".ult_tab_icon").css({
													color: e,
											  })));
								})
								.on("mouseleave", function () {
									g(this).hasClass("current") ||
										("style2" == l || "style1" == l
											? (g(this).find("a.ult_a").css({
													background: c,
													color: d,
											  }),
											  g(this).find(".ult_tab_icon").css({
													color: i,
											  }))
											: (g(this).find("a.ult_a").css({
													color: d,
											  }),
											  g(this).css({
													background: c,
													color: d,
											  }),
											  g(this).find("a.ult_a").find(".ult_tab_icon").css({
													color: i,
											  })));
								});
					}),
				g(this)
					.find("ul.ult_tabmenu li a.ult_a")
					.click(function (t) {
						const e = g(this).closest(".ult_tabs"),
							i = g(this).closest("li.ult_tab_li").index();
						let o = g(this).parent().data("iconcolor");
						g(this).parent().data("iconhover");
						b.push(i);
						b[b.length - 1];
						const s = b[b.length - 2];
						var n = g(this).closest(".ult_tabs").data("animation");
						e.find("ul.ult_tabmenu > li.ult_tab_li").removeClass("current"),
							"style2" == l || "style1" == l
								? (e.find("ul.ult_tabmenu > li.ult_tab_li").find("a").css({
										background: c,
										color: d,
								  }),
								  e.find("ul.ult_tabmenu > li.ult_tab_li").find(".ult_tab_icon").css({
										color: o,
								  }))
								: (e.find("ul.ult_tabmenu > li.ult_tab_li").find("a.ult_a").css({
										color: d,
								  }),
								  e.find("ul.ult_tabmenu > li.ult_tab_li").css({
										background: c,
										color: d,
								  }));
						const a = g(this).closest("li.ult_tab_li").addClass("current");
						(y =
							("Slide" == n
								? ("style2" == l || "style1" == l
										? (a.find("a.ult_a").css({
												background: f,
												color: h,
										  }),
										  a.find(".ult_tab_icon").css({
												color: p,
										  }))
										: (a.find("a.ult_a").css({
												color: h,
										  }),
										  a.css({
												background: f,
												color: h,
										  })),
								  e
										.find(".ult_tabcontent")
										.find("div.ult_tabitemname")
										.not("div.ult_tabitemname:eq(" + i + ")")
										.stop()
										.slideUp(500, function () {
											0 < u && r();
										}),
								  e
										.find(".ult_tabcontent")
										.find("div.ult_tabitemname:eq(" + i + ")")
										.stop()
										.slideDown(500, function () {}))
								: "Fade" == n
								? ("style2" == l || "style1" == l
										? (a.find("a.ult_a").css({
												background: f,
												color: h,
										  }),
										  a.find(".ult_tab_icon").css({
												color: p,
										  }))
										: (a.find("a.ult_a").css({
												color: h,
										  }),
										  a.css({
												background: f,
												color: h,
										  })),
								  e
										.find(".ult_tabcontent")
										.find("div.ult_tabitemname")
										.not("div.ult_tabitemname:eq(" + i + ")")
										.fadeOut(100, function () {
											0 < u && r();
										}),
								  e
										.find(".ult_tabcontent")
										.find("div.ult_tabitemname:eq(" + i + ")")
										.fadeIn(1200))
								: "Scale" == n
								? ("style2" == l || "style1" == l
										? (a.find("a.ult_a").css({
												background: f,
												color: h,
										  }),
										  a.find(".ult_tab_icon").css({
												color: p,
										  }))
										: (a.find("a.ult_a").css({
												color: h,
										  }),
										  a.css({
												background: f,
												color: h,
										  })),
								  e
										.find(".ult_tabcontent")
										.find("div.ult_tabitemname")
										.not("div.ult_tabitemname:eq(" + i + ")")
										.fadeOut(100, function () {
											0 < u && r(),
												e
													.find(".ult_tabcontent")
													.find("div.ult_tabitemname")
													.not("div.ult_tabitemname:eq(" + i + ")")
													.addClass("scaleTabname"),
												e
													.find(".ult_tabcontent")
													.find("div.ult_tabitemname")
													.not("div.ult_tabitemname:eq(" + i + ")")
													.removeClass("scaleTabname2");
										}),
								  e
										.find(".ult_tabcontent")
										.find("div.ult_tabitemname:eq(" + i + ")")
										.fadeIn(300, function () {
											e
												.find(".ult_tabcontent")
												.find("div.ult_tabitemname:eq(" + i + ")")
												.removeClass("scaleTabname"),
												e
													.find(".ult_tabcontent")
													.find("div.ult_tabitemname:eq(" + i + ")")
													.addClass("scaleTabname2");
										}))
								: "Slide-Zoom" == n
								? ("style2" == l || "style1" == l
										? (a.find("a.ult_a").css({
												background: f,
												color: h,
										  }),
										  a.find(".ult_tab_icon").css({
												color: p,
										  }))
										: (a.find("a.ult_a").css({
												color: h,
										  }),
										  a.css({
												background: f,
												color: h,
										  })),
								  e
										.find(".ult_tabcontent")
										.find("div.ult_tabitemname")
										.removeClass("ult_owl-backSlide-in"),
								  e
										.find(".ult_tabcontent")
										.find("div.ult_tabitemname")
										.removeClass("ult_owl-backSlide-out"),
								  e
										.find(".ult_tabcontent")
										.find("div.ult_tabitemname")
										.removeClass("ult_owl-backSlideright-in"),
								  e
										.find(".ult_tabcontent")
										.find("div.ult_tabitemname")
										.removeClass("ult_owl-backSlideright-out"),
								  e
										.find(".ult_tabcontent")
										.find("div.ult_tabitemname")
										.not("div.ult_tabitemname:eq(" + i + ")")
										.fadeOut(200, function () {
											e
												.find(".ult_tabcontent")
												.find("div.ult_tab_min_contain")
												.addClass("ult_owl-origin"),
												i < s
													? (e
															.find(".ult_tabcontent")
															.find("div.ult_tabitemname:eq(" + i + ")")
															.addClass("ult_owl-backSlide-in"),
													  e
															.find(".ult_tabcontent")
															.find("div.ult_tabitemname")
															.not("div.ult_tabitemname:eq(" + i + ")")
															.removeClass(" ult_owl-backSlide-out"),
													  e
															.find(".ult_tabcontent")
															.find("div.ult_tabitemname:eq(" + s + ")")
															.addClass("ult_owl-backSlide-out"))
													: (e
															.find(".ult_tabcontent")
															.find("div.ult_tabitemname:eq(" + i + ")")
															.addClass("ult_owl-backSlideright-in"),
													  e
															.find(".ult_tabcontent")
															.find("div.ult_tabitemname")
															.not("div.ult_tabitemname:eq(" + i + ")")
															.removeClass(" ult_owl-backSlideright-out"),
													  e
															.find(".ult_tabcontent")
															.find("div.ult_tabitemname:eq(" + s + ")")
															.addClass("ult_owl-backSlideright-out")),
												0 < u && r();
										}),
								  e
										.find(".ult_tabcontent")
										.find("div.ult_tabitemname:eq(" + i + ")")
										.fadeIn(1500, function () {
											e
												.find(".ult_tabcontent")
												.find("div.ult_tab_min_contain")
												.removeClass("ult_owl-origin"),
												i < s
													? (e
															.find(".ult_tabcontent")
															.find("div.ult_tabitemname:eq(" + s + ")")
															.removeClass(" ult_owl-backSlide-in"),
													  e
															.find(".ult_tabcontent")
															.find("div.ult_tabitemname:eq(" + i + ")")
															.removeClass(" ult_owl-backSlide-out"))
													: (e
															.find(".ult_tabcontent")
															.find("div.ult_tabitemname:eq(" + s + ")")
															.removeClass(" ult_owl-backSlideright-in"),
													  e
															.find(".ult_tabcontent")
															.find("div.ult_tabitemname:eq(" + i + ")")
															.removeClass(" ult_owl-backSlideright-out"));
										}))
								: "Slide-Horizontal" == n
								? ("style2" == l || "style1" == l
										? (a.find("a.ult_a").css({
												background: f,
												color: h,
										  }),
										  a.find(".ult_tab_icon").css({
												color: p,
										  }))
										: (a.find("a.ult_a").css({
												color: h,
										  }),
										  a.css({
												background: f,
												color: h,
										  })),
								  (o = e
										.find(".ult_tabcontent")
										.find("div.ult_tabitemname:eq(" + i + ")")
										.hasClass("ult_active_tabnme")),
								  0 == o
										? (e
												.find(".ult_tabcontent")
												.find("div.ult_tabitemname:eq(" + i + ")")
												.hide(10, function () {
													jQuery(this).addClass("ult_active_tabnme"),
														e
															.find(".ult_tabcontent")
															.find("div.ult_tabitemname")
															.not("div.ult_tabitemname:eq(" + i + ")")
															.removeClass("ult_active_tabnme"),
														e
															.find(".ult_tabcontent")
															.find("div.ult_tabitemname")
															.not("div.ult_tabitemname:eq(" + i + ")")
															.hide(10),
														i > s
															? jQuery(this).animate(
																	{
																		left: "-" + m + "px",
																	},
																	10
															  )
															: jQuery(this).animate(
																	{
																		left: m + "px",
																	},
																	10
															  ),
														0 < u && r();
												}),
										  e
												.find(".ult_tabcontent")
												.find("div.ult_tabitemname:eq(" + i + ")")
												.show(100, function () {
													jQuery(this).animate(
														{
															left: "0px",
														},
														800
													);
												}))
										: (e
												.find(".ult_tabcontent")
												.find("div.ult_tabitemname:eq(" + i + ")")
												.animate(
													{
														opacity: 1,
													},
													1,
													function () {
														0 < u && r();
													}
												),
										  e
												.find(".ult_tabcontent")
												.find("div.ult_tabitemname:eq(" + i + ")")
												.animate(
													{
														opacity: 1,
													},
													1,
													function () {}
												)))
								: ("style2" == l || "style1" == l
										? (a.find("a.ult_a").css({
												background: f,
												color: h,
										  }),
										  a.find(".ult_tab_icon").css({
												color: p,
										  }))
										: (a.find("a.ult_a").css({
												color: h,
										  }),
										  a.css({
												background: f,
												color: h,
										  })),
								  e
										.find(".ult_tabcontent")
										.find("div.ult_tabitemname")
										.not("div.ult_tabitemname:eq(" + i + ")")
										.hide(1, function () {
											0 < u && r();
										}),
								  e
										.find(".ult_tabcontent")
										.find("div.ult_tabitemname:eq(" + i + ")")
										.show(10)),
							i)),
							t.preventDefault();
					});
			var i = 0;
			0 < u && r();
		});
	}),
	jQuery(document).ready(function (o) {
		o(this)
			.find("ul.ult_tabmenu li a.ult_a")
			.click(function (t) {
				o(this)
					.closest("li.ult_tab_li")
					.siblings()
					.each(function (t, e) {
						var i = o(this).data("iconcolor");
						o(this).find(".ult_tab_icon").css({
							color: i,
						});
					});
			});
	}),
	jQuery(document).ready(function () {
		jQuery(this)
			.find("a")
			.click(function (t) {
				const e = jQuery(this).attr("href");
				if (void 0 !== e && 0 < e.length) {
					var i = escape(e.substring(e.indexOf("#") + 1));
					const o = jQuery("a.ult_a[href$='" + i + "']");
					let t = o.attr("href");
					void 0 !== t && "" !== t && (t = t.replace("#", "")),
						0 < o.parents(".ult_tabs").length && i == t && setmytime(t);
				}
			}),
			jQuery(".ult_tabs").each(function () {
				const t = window.location.href;
				var e = t.substr(t.indexOf("#") + 1);
				let i = jQuery(this).data("activeindex");
				"" == i && "0" != i && (i = 1);
				let o = jQuery(this)
					.find("ul.ult_tabmenu li.ult_tab_li:nth-child(" + i + ")")
					.find(".ult_a")
					.attr("id");
				e !== t && (o = e),
					void 0 !== o
						? 1 <= o.length && 1 <= i && setmytime(o, !0)
						: jQuery(this).find(".ult_tabcontent").css({
								display: "none",
						  });
			}),
			jQuery(this)
				.find("ul.ult_tabmenu li a.ult_a")
				.click(function (t) {
					var e = jQuery(this).closest(".ult_tabs").data("animation");
					(j = jQuery(this).closest("li.ult_tab_li").index()),
						"Fade" == e &&
							((i = jQuery(this)
								.closest(".ult_tabs")
								.find("div.ult_tabitemname:eq(" + j + ")")
								.outerHeight()),
							jQuery(this).closest(".ult_tabs").find(".ult_tabitemname").css({
								position: "absolute",
								left: "0",
								right: "0",
							}),
							jQuery(this).closest(".ult_tabs").find(".ult_tabcontent").animate(
								{
									height: i,
								},
								"slow"
							)),
						"Slide-Horizontal" == e &&
							((i = jQuery(this)
								.closest(".ult_tabs")
								.find("div.ult_tabitemname:eq(" + j + ")")
								.outerHeight()),
							jQuery(this).closest(".ult_tabs").find(".ult_tabcontent").css({
								overflow: "hidden",
							}),
							jQuery(this).closest(".ult_tabs").find(".ult_tabcontent").animate(
								{
									height: i,
								},
								"slow"
							));
					var i = jQuery(this)
						.closest(".ult_tabs")
						.find("div.ult_tabitemname:eq(" + j + ")");
					jQuery(document).trigger("ultAdvancedTabClickedCarousel", i),
						jQuery(document).trigger("ultAdvancedTabClickedDualBtn", i);
				});
	}),
	jQuery(document).ready(function () {
		jQuery(this)
			.find("ul.ult_tabmenu li a.ult_a")
			.click(function (t) {
				jQuery(".slick-slider").parents(".ult_tabitemname").length &&
					setTimeout(function () {
						jQuery(".slick-slider").slick("setPosition"), jQuery(window).trigger("resize");
					}, 200);
			}),
			jQuery(".vc_toggle").parents(".ult_tabs") &&
				jQuery(".vc_toggle").click(function () {
					jQuery(this).parents(".ult_tabitemname").height();
					jQuery(this).find(".vc_toggle_content").toggleClass("vc_toggle_for_tab"),
						jQuery(this).find(".vc_toggle_content").hasClass("vc_toggle_for_tab")
							? setTimeout(function () {
									var t = jQuery(".ult_tabitemname").height();
									jQuery(".ult_tabcontent").animate(
										{
											height: t,
										},
										100
									);
							  }, 100)
							: setTimeout(function () {
									var t = jQuery(".vc_toggle").parents(".ult_tabitemname").height();
									jQuery(".ult_tabcontent").animate(
										{
											height: t,
										},
										100
									);
							  }, 200);
				});
	}),
	jQuery(document).ready(function () {
		function t() {
			jQuery(".ult-team-member-wrap").each(function (t) {
				var e = jQuery(this).data("responsive_width");
				"" != e &&
					(jQuery(window).width() <= e
						? (jQuery(this).removeClass("ult-style-2"),
						  jQuery(this).addClass("ult-style-1 ult-responsive"))
						: jQuery(this).hasClass("ult-responsive") &&
						  (jQuery(this).removeClass("ult-style-1 ult-responsive"),
						  jQuery(this).addClass("ult-style-2")));
			});
		}

		function e() {
			jQuery(".ult-team-member-wrap").each(function (t) {
				var e = jQuery(this).height();
				const i = jQuery(this).find(".ult-team_description_slide");
				parseFloat(e) < parseFloat(i.height())
					? i.addClass("ult-desc-set-top")
					: i.hasClass("ult-desc-set-top") && i.removeClass("ult-desc-set-top");
			}),
				jQuery(".ult-style-3 .ult-team-member-image").each(function (t) {
					var e = jQuery(this).height();
					const i = jQuery(this).find(".ult-team-member-description");
					parseFloat(e) < parseFloat(i.height())
						? i.addClass("ult-desc-set-top")
						: i.hasClass("ult-desc-set-top") && i.removeClass("ult-desc-set-top");
				});
		}
		jQuery(".ult-team.ult-social-icon").hover(
			function () {
				jQuery(this).data("iconcolor");
				var t = jQuery(this).data("iconhover");
				"inherit" != t ? jQuery(this).css("color", t) : jQuery(this).css("color", "");
			},
			function () {
				var t = jQuery(this).data("iconcolor");
				jQuery(this).data("iconhover");
				"inherit" != t ? jQuery(this).css("color", t) : jQuery(this).css("color", "");
			}
		),
			jQuery(".ult-style-2").hover(
				function () {
					const t = jQuery(this).find(" .ult-team-member-image").first();
					var e = t.data("hover_opacity");
					t.children("img").css("opacity", e);
				},
				function () {
					const t = jQuery(this).find(" .ult-team-member-image").first();
					var e = t.data("opacity");
					t.children("img").css("opacity", e);
				}
			),
			jQuery(".ult-style-3").hover(
				function () {
					const t = jQuery(this).find(" .ult-team-member-image").first();
					var e = t.data("hover_opacity");
					t.find("img").css("opacity", e);
				},
				function () {
					const t = jQuery(this).find(" .ult-team-member-image").first();
					t.find("img").css("opacity", 1);
				}
			),
			t(),
			setTimeout(e, 500),
			jQuery(".ult-team-member-wrap .ult-team-member-image img").on("load", function () {
				e();
			}),
			jQuery(window).resize(function () {
				t(), e();
			}),
			jQuery(".ult-team-member-image-overlay.ult-team_img_hover").each(function () {
				var t = jQuery(this).data("background_clr");
				jQuery(this).css({
					"background-color": t,
				});
			});
	}),
	(function (p) {
		"use strict";
		const s = function (t, e) {
			(this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null),
				this.init("bsf_tooltip", t, e);
		};
		(s.DEFAULTS = {
			animation: !0,
			placement: "top",
			selector: !1,
			template:
				'<div class="bsf_tooltip"><div class="bsf_tooltip-arrow"></div><div class="bsf_tooltip-inner"></div></div>',
			trigger: "hover focus",
			title: "",
			delay: 0,
			html: !1,
			container: !1,
		}),
			(s.prototype.init = function (t, e, i) {
				(this.enabled = !0), (this.type = t), (this.$element = p(e)), (this.options = this.getOptions(i));
				var o = this.options.trigger.split(" ");
				for (let t = o.length; t--; ) {
					var s,
						n = o[t];
					"click" == n
						? this.$element.on("click." + this.type, this.options.selector, p.proxy(this.toggle, this))
						: "manual" != n &&
						  ((s = "hover" == n ? "mouseleave" : "focusout"),
						  this.$element.on(
								("hover" == n ? "mouseenter" : "focusin") + "." + this.type,
								this.options.selector,
								p.proxy(this.enter, this)
						  ),
						  this.$element.on(s + "." + this.type, this.options.selector, p.proxy(this.leave, this)));
				}
				this.options.selector
					? (this._options = p.extend({}, this.options, {
							trigger: "manual",
							selector: "",
					  }))
					: this.fixTitle();
			}),
			(s.prototype.getDefaults = function () {
				return s.DEFAULTS;
			}),
			(s.prototype.getOptions = function (t) {
				return (
					(t = p.extend({}, this.getDefaults(), this.$element.data(), t)).delay &&
						"number" == typeof t.delay &&
						(t.delay = {
							show: t.delay,
							hide: t.delay,
						}),
					t
				);
			}),
			(s.prototype.getDelegateOptions = function () {
				const i = {},
					o = this.getDefaults();
				return (
					this._options &&
						p.each(this._options, function (t, e) {
							o[t] != e && (i[t] = e);
						}),
					i
				);
			}),
			(s.prototype.enter = function (t) {
				const e =
					t instanceof this.constructor
						? t
						: p(t.currentTarget)
								[this.type](this.getDelegateOptions())
								.data("bs." + this.type);
				if ((clearTimeout(e.timeout), (e.hoverState = "in"), !e.options.delay || !e.options.delay.show))
					return e.show();
				e.timeout = setTimeout(function () {
					"in" == e.hoverState && e.show();
				}, e.options.delay.show);
			}),
			(s.prototype.leave = function (t) {
				const e =
					t instanceof this.constructor
						? t
						: p(t.currentTarget)
								[this.type](this.getDelegateOptions())
								.data("bs." + this.type);
				if ((clearTimeout(e.timeout), (e.hoverState = "out"), !e.options.delay || !e.options.delay.hide))
					return e.hide();
				e.timeout = setTimeout(function () {
					"out" == e.hoverState && e.hide();
				}, e.options.delay.hide);
			}),
			(s.prototype.show = function () {
				const t = p.Event("show.bs." + this.type);
				if (this.hasContent() && this.enabled && (this.$element.trigger(t), !t.isDefaultPrevented())) {
					const d = this,
						c = this.tip();
					this.setContent(), this.options.animation && c.addClass("fade");
					let t =
						"function" == typeof this.options.placement
							? this.options.placement.call(this, c[0], this.$element[0])
							: this.options.placement;
					const u = /\s?auto?\s?/i;
					var e = u.test(t);
					e && (t = t.replace(u, "") || "top"),
						c
							.detach()
							.css({
								top: 0,
								left: 0,
								display: "block",
							})
							.addClass(t),
						this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
					var i = this.getPosition(),
						o = c[0].offsetWidth,
						s = c[0].offsetHeight;
					if (e) {
						const h = this.$element.parent();
						var n = t,
							a = document.documentElement.scrollTop || document.body.scrollTop,
							r = "body" == this.options.container ? window.innerWidth : h.outerWidth(),
							l = "body" == this.options.container ? window.innerHeight : h.outerHeight(),
							e = "body" == this.options.container ? 0 : h.offset().left;
						(t =
							"bottom" == t && i.top + i.height + s - a > l
								? "top"
								: "top" == t && i.top - a - s < 0
								? "bottom"
								: "right" == t && i.right + o > r
								? "left"
								: "left" == t && i.left - o < e
								? "right"
								: t),
							c.removeClass(n).addClass(t);
					}
					s = this.getCalculatedOffset(t, i, o, s);
					this.applyPlacement(s, t), (this.hoverState = null);
					s = function () {
						d.$element.trigger("shown.bs." + d.type);
					};
					p.support.transition && this.$tip.hasClass("fade")
						? c.one(p.support.transition.end, s).emulateTransitionEnd(150)
						: s();
				}
			}),
			(s.prototype.applyPlacement = function (e, t) {
				let i;
				const o = this.tip();
				var s = o[0].offsetWidth,
					n = o[0].offsetHeight;
				let a = parseInt(o.css("margin-top"), 10),
					r = parseInt(o.css("margin-left"), 10);
				isNaN(a) && (a = 0),
					isNaN(r) && (r = 0),
					(e.top = e.top + a),
					(e.left = e.left + r),
					p.offset.setOffset(
						o[0],
						p.extend(
							{
								using(t) {
									o.css({
										top: Math.round(t.top),
										left: Math.round(t.left),
									});
								},
							},
							e
						),
						0
					),
					o.addClass("in");
				let l = o[0].offsetWidth,
					d = o[0].offsetHeight;
				if (("top" == t && d != n && ((i = !0), (e.top = e.top + n - d)), /bottom|top/.test(t))) {
					let t = 0;
					e.left < 0 &&
						((t = -2 * e.left),
						(e.left = 0),
						o.offset(e),
						(l = o[0].offsetWidth),
						(d = o[0].offsetHeight)),
						this.replaceArrow(t - s + l, l, "left");
				} else this.replaceArrow(d - n, d, "top");
				i && o.offset(e);
			}),
			(s.prototype.replaceArrow = function (t, e, i) {
				this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "");
			}),
			(s.prototype.setContent = function () {
				const t = this.tip();
				var e = this.getTitle();
				t.find(".bsf_tooltip-inner")[this.options.html ? "html" : "text"](e),
					t.removeClass("fade in top bottom left right");
			}),
			(s.prototype.hide = function () {
				const t = this,
					e = this.tip(),
					i = p.Event("hide.bs." + this.type);

				function o() {
					"in" != t.hoverState && e.detach(), t.$element.trigger("hidden.bs." + t.type);
				}
				if ((this.$element.trigger(i), !i.isDefaultPrevented()))
					return (
						e.removeClass("in"),
						p.support.transition && this.$tip.hasClass("fade")
							? e.one(p.support.transition.end, o).emulateTransitionEnd(150)
							: o(),
						(this.hoverState = null),
						this
					);
			}),
			(s.prototype.fixTitle = function () {
				const t = this.$element;
				(!t.attr("title") && "string" == typeof t.attr("data-original-title")) ||
					t.attr("data-original-title", t.attr("title") || "").attr("title", "");
			}),
			(s.prototype.hasContent = function () {
				return this.getTitle();
			}),
			(s.prototype.getPosition = function () {
				const t = this.$element[0];
				return p.extend(
					{},
					"function" == typeof t.getBoundingClientRect
						? t.getBoundingClientRect()
						: {
								width: t.offsetWidth,
								height: t.offsetHeight,
						  },
					this.$element.offset()
				);
			}),
			(s.prototype.getCalculatedOffset = function (t, e, i, o) {
				return "bottom" == t
					? {
							top: e.top + e.height,
							left: e.left + e.width / 2 - i / 2,
					  }
					: "top" == t
					? {
							top: e.top - o,
							left: e.left + e.width / 2 - i / 2,
					  }
					: "left" == t
					? {
							top: e.top + e.height / 2 - o / 2,
							left: e.left - i,
					  }
					: {
							top: e.top + e.height / 2 - o / 2,
							left: e.left + e.width,
					  };
			}),
			(s.prototype.getTitle = function () {
				const t = this.$element,
					e = this.options;
				return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title);
			}),
			(s.prototype.tip = function () {
				return (this.$tip = this.$tip || p(this.options.template));
			}),
			(s.prototype.arrow = function () {
				return (this.$arrow = this.$arrow || this.tip().find(".bsf_tooltip-arrow"));
			}),
			(s.prototype.validate = function () {
				this.$element[0].parentNode || (this.hide(), (this.$element = null), (this.options = null));
			}),
			(s.prototype.enable = function () {
				this.enabled = !0;
			}),
			(s.prototype.disable = function () {
				this.enabled = !1;
			}),
			(s.prototype.toggleEnabled = function () {
				this.enabled = !this.enabled;
			}),
			(s.prototype.toggle = function (t) {
				const e = t
					? p(t.currentTarget)
							[this.type](this.getDelegateOptions())
							.data("bs." + this.type)
					: this;
				e.tip().hasClass("in") ? e.leave(e) : e.enter(e);
			}),
			(s.prototype.destroy = function () {
				clearTimeout(this.timeout),
					this.hide()
						.$element.off("." + this.type)
						.removeData("bs." + this.type);
			});
		const t = p.fn.bsf_tooltip;
		(p.fn.bsf_tooltip = function (o) {
			return this.each(function () {
				const t = p(this);
				let e = t.data("bs.bsf_tooltip");
				var i = "object" == typeof o && o;
				(!e && "destroy" == o) ||
					(e || t.data("bs.bsf_tooltip", (e = new s(this, i))), "string" == typeof o && e[o]());
			});
		}),
			(p.fn.bsf_tooltip.Constructor = s),
			(p.fn.bsf_tooltip.noConflict = function () {
				return (p.fn.bsf_tooltip = t), this;
			}),
			p("[id^=ubtn-]").bsf_tooltip(),
			p('ul[data-placement=""]').bsf_tooltip("hide");
	})(jQuery),
	(function (s) {
		"use strict";
		const n = function (t, e) {
			(this.el = s(t)),
				(this.options = s.extend({}, s.fn.typed.defaults, e)),
				(this.isInput = this.el.is("input")),
				(this.attr = this.options.attr),
				(this.showCursor = !this.isInput && this.options.showCursor),
				(this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()),
				(this.contentType = this.options.contentType),
				(this.typeSpeed = this.options.typeSpeed),
				(this.startDelay = this.options.startDelay),
				(this.backSpeed = this.options.backSpeed),
				(this.backDelay = this.options.backDelay),
				(this.stringsElement = this.options.stringsElement),
				(this.strings = this.options.strings),
				(this.strPos = 0),
				(this.arrayPos = 0),
				(this.stopNum = 0),
				(this.loop = this.options.loop),
				(this.loopCount = this.options.loopCount),
				(this.curLoop = 0),
				(this.stop = !1),
				(this.cursorChar = this.options.cursorChar),
				(this.shuffle = this.options.shuffle),
				(this.sequence = []),
				this.build();
		};
		(n.prototype = {
			constructor: n,
			init() {
				const e = this;
				e.timeout = setTimeout(function () {
					for (let t = 0; t < e.strings.length; ++t) e.sequence[t] = t;
					e.shuffle && (e.sequence = e.shuffleArray(e.sequence)),
						e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos);
				}, e.startDelay);
			},
			build() {
				const i = this;
				var t;
				!0 === this.showCursor &&
					((this.cursor = s('<span class="typed-cursor">' + this.cursorChar + "</span>")),
					this.el.after(this.cursor)),
					this.stringsElement &&
						((this.strings = []),
						this.stringsElement.hide(),
						console.log(this.stringsElement.children()),
						(t = this.stringsElement.children()),
						s.each(t, function (t, e) {
							i.strings.push(s(e).html());
						})),
					this.init();
			},
			typewrite(s, n) {
				if (!0 !== this.stop) {
					var t = Math.round(70 * Math.random()) + this.typeSpeed;
					const a = this;
					a.timeout = setTimeout(function () {
						let e = 0,
							i = s.substr(n);
						if ("^" === i.charAt(0)) {
							let t = 1;
							/^\^\d+/.test(i) && ((i = /\d+/.exec(i)[0]), (t += i.length), (e = parseInt(i))),
								(s = s.substring(0, n) + s.substring(n + t));
						}
						if ("html" === a.contentType) {
							var o = s.substr(n).charAt(0);
							if ("<" === o) {
								let t = "",
									e = "";
								for (
									e = "<" === o ? ">" : ";";
									s.substr(n + 1).charAt(0) !== e &&
									((t += s.substr(n).charAt(0)), !(++n + 1 > s.length));

								);
								n++, (t += e);
							}
						}
						a.timeout = setTimeout(function () {
							var t;
							n === s.length
								? (a.options.onStringTyped(a.arrayPos),
								  (a.arrayPos === a.strings.length - 1 &&
										(a.options.callback(),
										a.curLoop++,
										!1 === a.loop || a.curLoop === a.loopCount)) ||
										(a.timeout = setTimeout(function () {
											a.backspace(s, n);
										}, a.backDelay)))
								: (0 === n && a.options.preStringTyped(a.arrayPos),
								  (t = s.substr(0, n + 1)),
								  a.attr
										? a.el.attr(a.attr, t)
										: a.isInput
										? a.el.val(t)
										: "html" === a.contentType
										? a.el.html(t)
										: a.el.text(t),
								  n++,
								  a.typewrite(s, n));
						}, e);
					}, t);
				}
			},
			backspace(e, i) {
				if (!0 !== this.stop) {
					var t = Math.round(70 * Math.random()) + this.backSpeed;
					const o = this;
					o.timeout = setTimeout(function () {
						if ("html" === o.contentType && ">" === e.substr(i).charAt(0)) {
							let t = "";
							for (; "<" !== e.substr(i - 1).charAt(0) && ((t -= e.substr(i).charAt(0)), !(--i < 0)); );
							i--, (t += "<");
						}
						var t = e.substr(0, i);
						o.attr
							? o.el.attr(o.attr, t)
							: o.isInput
							? o.el.val(t)
							: "html" === o.contentType
							? o.el.html(t)
							: o.el.text(t),
							i > o.stopNum
								? (i--, o.backspace(e, i))
								: i <= o.stopNum &&
								  (o.arrayPos++,
								  o.arrayPos === o.strings.length
										? ((o.arrayPos = 0),
										  o.shuffle && (o.sequence = o.shuffleArray(o.sequence)),
										  o.init())
										: o.typewrite(o.strings[o.sequence[o.arrayPos]], i));
					}, t);
				}
			},
			shuffleArray(t) {
				let e,
					i,
					o = t.length;
				if (o) for (; --o; ) (e = t[(i = Math.floor(Math.random() * (o + 1)))]), (t[i] = t[o]), (t[o] = e);
				return t;
			},
			reset() {
				clearInterval(this.timeout);
				this.el.attr("id");
				this.el.empty(),
					void 0 !== this.cursor && this.cursor.remove(),
					(this.strPos = 0),
					(this.arrayPos = 0),
					(this.curLoop = 0),
					this.options.resetCallback();
			},
		}),
			(s.fn.typed = function (o) {
				return this.each(function () {
					let t = s(this),
						e = t.data("typed"),
						i = "object" == typeof o && o;
					e && e.reset(), t.data("typed", (e = new n(this, i))), "string" == typeof o && e[o]();
				});
			}),
			(s.fn.typed.defaults = {
				strings: [
					"These are the default values...",
					"You know what you should do?",
					"Use your own!",
					"Have a great day!",
				],
				stringsElement: null,
				typeSpeed: 0,
				startDelay: 0,
				backSpeed: 0,
				shuffle: !1,
				backDelay: 500,
				loop: !1,
				loopCount: !1,
				showCursor: !0,
				cursorChar: "|",
				attr: null,
				contentType: "html",
				callback() {},
				preStringTyped() {},
				onStringTyped() {},
				resetCallback() {},
			});
	})(window.jQuery),
	jQuery(document).ready(function (u) {
		let h = "",
			p = "",
			f = "",
			m = "",
			y = "",
			b = "";
		jQuery(".ult-responsive").each(function (t, e) {
			let i = jQuery(this),
				o = i.attr("data-responsive-json-new"),
				s = i.data("ultimate-target"),
				n = "",
				a = "",
				r = "",
				l = "",
				d = "",
				c = "";
			(void 0 === o && null == o) ||
				u.each(u.parseJSON(o), function (t, e) {
					const o = t;
					void 0 !== e &&
						null != e &&
						((e = e.split(";")),
						jQuery.each(e, function (t, e) {
							if (void 0 !== e || null != e) {
								var i = e.split(":");
								switch (i[0]) {
									case "large_screen":
										n += o + ":" + i[1] + ";";
										break;
									case "desktop":
										a += o + ":" + i[1] + ";";
										break;
									case "tablet":
										r += o + ":" + i[1] + ";";
										break;
									case "tablet_portrait":
										l += o + ":" + i[1] + ";";
										break;
									case "mobile_landscape":
										d += o + ":" + i[1] + ";";
										break;
									case "mobile":
										c += o + ":" + i[1] + ";";
								}
							}
						}));
				}),
				"" != c && (b += s + "{" + c + "}"),
				"" != d && (y += s + "{" + d + "}"),
				"" != l && (m += s + "{" + l + "}"),
				"" != r && (f += s + "{" + r + "}"),
				"" != a && (p += s + "{" + a + "}"),
				"" != n && (h += s + "{" + n + "}");
		});
		var t = "<style>/** Ultimate: Media Responsive **/ ";
		(t += p),
			(t += "@media (max-width: 1199px) { " + f + "}"),
			(t += "@media (max-width: 991px)  { " + m + "}"),
			(t += "@media (max-width: 767px)  { " + y + "}"),
			(t += "@media (max-width: 479px)  { " + b + "}"),
			(t += "/** Ultimate: Media Responsive - **/</style>"),
			jQuery("head").append(t);
	}),
	(function (l) {
		function d() {
			l(".ult-video").each(function () {
				this.nodeClass = "." + l(this).attr("id");
				const t = jQuery(this.nodeClass).find(".ultv-video__outer-wrap");
				t.off("click").on("click", function (t) {
					e(l(this).find(".ultv-video__play"));
				}),
					("1" != t.data("autoplay") && 1 != t.data("device")) ||
						e(jQuery(this.nodeClass).find(".ultv-video__play"));
			});
		}

		function e(t) {
			const e = l("<iframe/>");
			var i = t.data("src");
			0 == t.find("iframe").length &&
				(e.attr("src", i),
				e.attr("frameborder", "0"),
				e.attr("allowfullscreen", "1"),
				e.attr("allow", "autoplay;encrypted-media;"),
				t.html(e)),
				t.closest(".ultv-video__outer-wrap").find(".ultv-vimeo-wrap").hide();
		}
		l(document).ready(function (t) {
			var e = l(".ult-video")
					.map(function () {
						return l(this).attr("id");
					})
					.get(),
				i = l(".ultv-video__outer-wrap")
					.map(function () {
						return l(this).attr("data-iconbg");
					})
					.get(),
				o = l(".ultv-video__outer-wrap")
					.map(function () {
						return l(this).attr("data-overcolor");
					})
					.get(),
				s = l(".ultv-video__outer-wrap")
					.map(function () {
						return l(this).attr("data-defaultbg");
					})
					.get(),
				n = l(".ultv-video__outer-wrap")
					.map(function () {
						return l(this).attr("data-defaultplay");
					})
					.get(),
				a = l(".ultv-video")
					.map(function () {
						return l(this).attr("data-videotype");
					})
					.get();
			for (let t = e.length - 1; 0 <= t; t--) {
				l("#" + e[t] + " .ultv-video")
					.find(" .ultv-video__outer-wrap")
					.css("color", i[t]),
					l("#" + e[t] + " .ultv-video")
						.find(" .ultv-youtube-icon-bg")
						.css({
							fill: s[t],
						}),
					l("#" + e[t] + " .ultv-video")
						.find(" .ultv-vimeo-icon-bg")
						.css({
							fill: s[t],
						});
				const r = document.head.appendChild(document.createElement("style"));
				r.innerHTML = "#" + e[t] + " .ultv-video .ultv-video__outer-wrap:before {background: " + o[t] + ";}";
			}
			for (let t = 0; t <= n.length - 1; t++)
				"icon" == n[t]
					? l(".ultv-video")
							.find(" .ultv-video__outer-wrap")
							.hover(
								function () {
									const t = l(this);
									t.css("color", t.data("hoverbg"));
								},
								function () {
									const t = l(this);
									t.css("color", t.data("iconbg"));
								}
							)
					: "defaulticon" == n[t] &&
					  ("uv_iframe" == a[t]
							? l(".ultv-video")
									.find(" .ultv-video__outer-wrap")
									.hover(
										function () {
											const t = l(this);
											t.find(" .ultv-youtube-icon-bg").css({
												fill: t.data("defaulthoverbg"),
											});
										},
										function () {
											const t = l(this);
											t.find(" .ultv-youtube-icon-bg").css({
												fill: t.data("defaultbg"),
											});
										}
									)
							: "vimeo_video" == a[t] &&
							  l(".ultv-video")
									.find(" .ultv-video__outer-wrap")
									.hover(
										function () {
											const t = l(this);
											t.find(" .ultv-vimeo-icon-bg").css({
												fill: t.data("defaulthoverbg"),
											});
										},
										function () {
											const t = l(this);
											t.find(" .ultv-vimeo-icon-bg").css({
												fill: t.data("defaultbg"),
											});
										}
									));
			d(),
				l(window).resize(function (t) {
					d();
				});
		});
	})(jQuery),
	(function (l) {
		l(document).ready(function () {
			let r = "";
			l(".ult-video-banner").each(function (t, e) {
				var i = l(e).attr("id");
				const o = l(e).data("current-time");
				l(e).data("placeholder");
				let s = 0;
				l(e)
					.find("video")
					.get(0)
					.addEventListener("canplay", function () {
						return (
							!(1 <= s) &&
							((l(e).find("video").get(0).currentTime = o), l(e).find("video").get(0).pause(), void s++)
						);
					});
				var n = l(e).find(".ult-video-banner-overlay").data("overlay"),
					a = l(e).find(".ult-video-banner-overlay").data("overlay-hover");
				"" != n && (r += "#" + i + " .ult-video-banner-overlay { background:" + n + " }"),
					"" != a &&
						(r += "#" + i + ".ult-vb-touch-start .ult-video-banner-overlay { background:" + a + " }");
			}),
				"" != r && l("head").append("<style>" + r + "</style>"),
				l(document).on("mouseover", ".ult-video-banner", function () {
					l(this).addClass("ult-vb-touch-start"), l(this).find("video").get(0).play();
				}),
				l(document).on("mouseout", ".ult-video-banner", function () {
					l(this).removeClass("ult-vb-touch-start"), l(this).find("video").get(0).pause();
				}),
				l(document).on("touchstart", ".ult-video-banner", function () {
					return l(this).hasClass("ult-vb-touch-start")
						? (l(this).removeClass("ult-vb-touch-start"), l(this).find("video").get(0).pause(), !1)
						: (l(this).addClass("ult-vb-touch-start"), void l(this).find("video").get(0).play());
				});
		});
	})(jQuery);
