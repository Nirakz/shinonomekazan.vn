/* TREETHEMES */
let resizeddd = 0;
const time_f_arrr = [];

function calculate_clipped_circle() {
	jQuery(".clipped-info-circle").each(function () {
		var i = jQuery(this).data("circle-type"),
			e = jQuery(this).data("half-percentage"),
			t = jQuery(this).children().data("responsive-circle");
		"on" == t &&
			((n = jQuery(this).children().data("responsive-breakpoint")),
			(r = jQuery(window).width()),
			(i = jQuery(this).data("circle-type")),
			n < r &&
				(void 0 !== (y = jQuery(this).data("first-height")) && "" != y && jQuery(this).height(y),
				jQuery(this).width("100%"),
				make_info_circle(".info-c-full-br", resizeddd)));
		var n,
			r,
			c = jQuery(this).find(".info-circle-icons").outerHeight(),
			o = jQuery(this).find(".info-circle-icons").outerHeight();
		if ("full-circle" != i) {
			var s = jQuery(this).outerHeight();
			jQuery(this).outerWidth();
			const j = jQuery(this).css("margin-top");
			var l,
				a,
				u,
				d,
				f = jQuery(this).css("margin-bottom"),
				h = jQuery(this).children().outerWidth(),
				p = parseInt(
					jQuery(this)
						.find(".info-c-full")
						.css("margin-top")
						.replace(/[^-\d\.]/g, "")
				),
				y = parseInt(
					jQuery(this)
						.find(".info-c-full")
						.css("padding-top")
						.replace(/[^-\d\.]/g, "")
				);
			"top-circle" == i || "bottom-circle" == i
				? (jQuery(this).css({
						overflow: "hidden",
				  }),
				  jQuery(this).find(".info-c-full").outerWidth(),
				  jQuery(this).find(".info-c-full").width(),
				  "top-circle" == i
						? ((l = (e / 100) * s),
						  jQuery(this).css({
								"padding-top": j,
								height: l,
								"margin-bottom": 0,
						  }),
						  (a = l - p - parseInt(j.replace(/[^-\d\.]/g, "")) - y - y / 2),
						  jQuery(this).find(".info-c-full-wrap").css({
								height: a,
						  }))
						: "bottom-circle" == i &&
						  ((l = s - (s = ((100 - e) / 100) * s) + 10),
						  jQuery(this).css({
								"padding-bottom": f,
								height: l,
								"margin-top": 0,
						  }),
						  jQuery(this)
								.children()
								.css({
									"margin-top": -(s + c / 2),
								}),
						  (a = l - p - parseInt(j.replace(/[^-\d\.]/g, "")) - y - y / 2)))
				: ("left-circle" != i && "right-circle" != i) ||
				  (jQuery(this).css({
						overflow: "hidden",
						"padding-top": j,
						"padding-bottom": f,
				  }),
				  jQuery(this).find(".info-c-full").outerWidth(),
				  jQuery(this).find(".info-c-full").width(),
				  "left-circle" == i
						? ((u = (e / 100) * h),
						  jQuery(this).css({
								width: u,
								"padding-left": j,
						  }),
						  jQuery(this).children().css({
								width: h,
								"max-width": h,
						  }),
						  (d = u - p - (y + y / 2) - parseInt(j.replace(/[^-\d\.]/g, ""))),
						  jQuery(this).find(".info-c-full-wrap").width(d))
						: "right-circle" == i &&
						  ((e = ((100 - e) / 100) * h),
						  (u = parseInt(h - e)),
						  jQuery(this).css({
								width: u,
								"padding-right": j,
						  }),
						  jQuery(this)
								.children()
								.css({
									"margin-left": -(e + o / 2),
									"max-width": h,
									width: h,
								}),
						  (e = (e = e - p) + parseInt(j.replace(/[^-\d\.]/g, "")) - y),
						  (d = u - p - parseInt(j.replace(/[^-\d\.]/g, "")) - y),
						  (e = e),
						  jQuery(this).find(".info-c-full-wrap").width(d),
						  jQuery(this)
								.find(".info-c-full-wrap")
								.css({
									"margin-left": e + "px",
								})));
		}
		"on" == t &&
			((n = jQuery(this).children().data("responsive-breakpoint")),
			(r = jQuery(window).width()) <= n &&
				jQuery(this).css({
					width: "auto",
					overflow: "visible",
					height: "auto",
					padding: 0,
				}));
	});
}

function info_circle_slide(i, t) {
	t.bsf_appear(function () {
		setInterval(function () {
			if ("on" == t.attr("data-slide-true")) {
				let i = +t.attr("data-slide-number");
				var e = t.find(".info-circle-icons").length;
				"full" != t.data("info-circle-angle") ? e - 1 == i && (i = 0) : e == i && (i = 0);
				e = t.find(".info-circle-icons").eq(i);
				t.attr("data-slide-number", i + 1), show_next_info_circle(e);
			}
		}, i);
	});
}

function show_next_info_circle(i) {
	var e = i.parents(".info-c-full-br").data("highlight-style");
	"" != e &&
		(i
			.parents(".info-c-full-br")
			.find("." + e)
			.removeClass(e)
			.removeClass("info-circle-active"),
		i.addClass(e).addClass("info-circle-active"));
	let t = i.next();
	const n = i.parents(".info-c-full-br").data("icon-show-size");
	"not-show" == i.parents(".info-c-full-br").data("icon-show") &&
		(t.find("i.info-circle-icon").remove(),
		t.find("img.info-circle-img-icon").remove(),
		i.parents(".info-c-full-br").find(".info-c-full").addClass("circle-noicon")),
		(t = t.html());
	i.css("font-size"), i.attr("style");
	const r = i.parents(".info-c-full-br");
	r.find(".info-c-full-wrap")
		.stop()
		.animate(
			{
				opacity: 0,
			},
			"slow",
			function () {
				i.parents(".info-c-full-br").find(".info-c-full .info-c-full-wrap").html(t),
					r.find(".info-c-full i").css({
						"font-size": parseInt(n) + "px",
					}),
					r.find(".info-c-full .info-circle-img-icon").css({
						width: parseInt(n) + "px",
					}),
					i.parents(".info-c-full-br").find(".info-c-full-wrap").animate(
						{
							opacity: 1,
						},
						"slow"
					);
			}
		);
}

function responsive_check(i) {
	jQuery(i).each(function () {
		if ("on" == jQuery(this).data("responsive-circle")) {
			const e = jQuery(this).parent();
			var i = "info-circle-wrapper-" + e.data("uniqid"),
				i =
					"<style>@media(max-width:" +
					jQuery(this).data("responsive-breakpoint") +
					"px){ #" +
					i +
					" .smile_icon_list_wrap{ display: block; margin-top: auto !important; } #" +
					i +
					" .info-c-full-br{ display: none; } .smile_icon_list_wrap { margin-left:auto !important; max-width:inherit !important; width:auto !important; } .info-circle-responsive .info-circle-def { display: block; width: auto; height: auto; } .info-circle-responsive .info-circle-sub-def { display: block; vertical-align: top; } }</style>";
			jQuery("head").append(i);
			const s = jQuery(this).parent().find(".smile_icon_list_wrap .smile_icon_list"),
				l = s.find(".icon_list_item").clone();
			s.find(".icon_list_item").remove();
			const a = jQuery(this).next().data("content_bg"),
				u = jQuery(this).next().data("content_color");
			jQuery(this)
				.find(".icon-circle-list .info-details")
				.each(function () {
					var i = jQuery(this).attr("data-icon-class"),
						e = jQuery(this).find(".info-circle-heading").html(),
						t = jQuery(this).find(".info-circle-text").html(),
						n = jQuery(this).prev().css("background-color"),
						r = jQuery(this).prev().css("color"),
						c = jQuery(this).prev().css("border");
					const o = jQuery(this).find(".info-circle-sub-def").children().eq(0).clone();
					l.find(".icon_list_icon").html(o.wrap("<div />").parent().html()),
						l.find(".icon_description").css("color", u),
						l.find(".icon_description").css("background-color", a),
						l.find(".icon_description h3").html(e),
						l.find(".icon_description p").html(t),
						l.find(".icon_list_icon").css({
							"background-color": n,
							color: r,
							border: c,
						}),
						l.addClass(i),
						s.append(l.wrap("<div />").parent().html());
				});
		}
	});
}

function make_info_circle(i, e) {
	jQuery(i).each(function (i, s) {
		const l = jQuery(s).data("icon-size");
		jQuery(jQuery(s).find(".icon-circle-list .info-circle-icons")).each(function (i, e) {
			let t, n, r, c, o;
			t = jQuery(this).data("padding-style");
			e = !!jQuery(e).hasClass("info-circle-icon-without-background");
			(c = e ? (n = r = o = l) / 2 : null != t ? (n = r = o = l) / 2 + t : ((n = r = o = 2 * l), l)),
				jQuery(s)
					.parent()
					.css({
						"margin-top": c + 10 + "px",
						"margin-bottom": c + 10 + "px",
					}),
				jQuery(this).css({
					"font-size": l + "px",
					height: n + "px",
					width: r + "px",
					margin: "-" + c + "px",
					"line-height": o + "px",
				});
		});
	}),
		".info-c-full-br" == i &&
			jQuery(i).each(function () {
				jQuery(this).css("height", jQuery(this).width()), jQuery(this).css("opacity", "1");
			}),
		".info-c-semi-br" == i &&
			jQuery(i).each(function () {
				var i = jQuery(this).width();
				jQuery(this).css("height", parseInt(i) / 2 + "px");
				i = i + "px " + i + "px  0 0";
				jQuery(this).css("border-radius", i);
				i = (i = jQuery(this).find(".info-c-full").width()) + "px " + i + "px 0 0";
				jQuery(this).find(".info-c-full").css("border-radius", i);
			}),
		setTimeout(function () {
			e == resizeddd &&
				(".info-c-full-br" == i && part_circle_icon(i), ".info-c-semi-br" == i && semi_circle_icon(i));
		}, 1e3);
}

function part_circle_icon(i) {
	jQuery(i).each(function () {
		jQuery(this).bsf_appear(function () {
			if ("none" != jQuery(this).css("display")) {
				var u = jQuery(this).find(".icon-circle-list .info-circle-icons").length;
				const p = new Array();
				let e = jQuery(this).outerWidth() / 2,
					t = 0;
				var i = jQuery(this).data("start-degree");
				(void 0 === i && "" == i) || (t = i);
				let n = 180 / u,
					r = jQuery(this).data("info-circle-angle");
				var d = jQuery(this).data("divert");
				let c = "";
				"full" == r && ((c = r), (r = 180), (n = 90), (e = -e));
				let o = 0,
					s = !1;
				for (f = 1; f <= u; f++) {
					let i = f * ((180 + 2 * n) / u);
					"full" == c
						? (i < t && 1 == f ? ((o = t - i), (s = !1)) : i > t && 1 == f && ((o = i - t), (s = !0)),
						  1 == s ? (i -= o) : (i += o))
						: (i = i + r - n + d),
						(i *= 0.0174532925),
						p.push(e * Math.cos(i)),
						p.push(e * Math.sin(i));
				}
				var f = 0,
					h = 0;
				const y = jQuery(this).data("launch");
				let l = jQuery(this).data("launch-duration"),
					a = jQuery(this).data("launch-delay");
				(l = l || 1),
					(a = a || 0.15),
					"" != y
						? ((h = -1e3 * a),
						  jQuery(this)
								.find(".icon-circle-list .info-circle-icons")
								.each(function () {
									const i = jQuery(this);
									(h += 1e3 * a),
										setTimeout(function () {
											i.animate(
												{
													opacity: 1,
													left: p[f++],
													top: p[f++],
												},
												{
													duration: 1e3 * l,
													easing: y,
												}
											);
										}, h);
								}))
						: jQuery(this)
								.find(".icon-circle-list .info-circle-icons")
								.each(function () {
									const i = jQuery(this);
									i.css({
										opacity: "1",
										left: p[f++],
										top: p[f++],
									});
								});
			}
		});
	});
}
jQuery(document).ready(function () {
	make_info_circle(".info-c-full-br", 0),
		responsive_check(".info-c-full-br"),
		jQuery(".clipped-info-circle").each(function (i, e) {
			var t = jQuery(this).outerHeight(),
				n = jQuery(this).outerWidth();
			jQuery(this).attr("data-first-width", n), jQuery(this).attr("data-first-height", t);
		}),
		jQuery(window).resize(function () {
			resizeddd++, make_info_circle(".info-c-full-br", resizeddd), calculate_clipped_circle();
		}),
		jQuery(window).on("load", function () {
			resizeddd++, make_info_circle(".info-c-full-br", resizeddd), calculate_clipped_circle();
		}),
		jQuery(document).on("ultAdvancedTabClicked", function () {
			resizeddd++, make_info_circle(".info-c-full-br", resizeddd), calculate_clipped_circle();
		}),
		jQuery(".info-c-full-br").each(function () {
			"click" == jQuery(this).data("focus-on") &&
				jQuery(this)
					.find(".icon-circle-list .info-circle-icons")
					.click(function () {
						var i = jQuery(this);
						jQuery(this).parents(".info-c-full-br").attr("data-slide-true", "false"),
							show_next_info_circle(i);
					}),
				"hover" == jQuery(this).data("focus-on") &&
					jQuery(this)
						.find(".icon-circle-list .info-circle-icons")
						.hover(
							function () {
								var i = jQuery(this);
								jQuery(this).parents(".info-c-full-br").attr("data-slide-true", "false"),
									show_next_info_circle(i);
							},
							function () {}
						);
		}),
		setTimeout(function () {
			jQuery(".info-c-full-br").each(function () {
				let i = jQuery(this).data("slide-duration");
				(i = i || 0.2),
					jQuery(this).attr("data-slide-number", "1"),
					info_circle_slide(1e3 * i, jQuery(this)),
					show_next_info_circle(jQuery(this).find(".info-circle-icons").eq(0));
			});
		}, 1e3);
}),
	jQuery(window).on("load", function () {
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
	jQuery(document).ready(function (i) {
		jQuery(".icon_list_item").each(function (i, e) {
			const t = jQuery(this);
			1 <= t.find(".info-circle-img-icon").length && t.closest("ul.smile_icon_list").addClass("ic-resp-img");
		});
	});
