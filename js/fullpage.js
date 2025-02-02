
! function(e, n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(o) {
        return n(o, e, e.document, e.Math);
    }) : "undefined" != typeof exports ? module.exports = n(require("jquery"), e, e.document, e.Math) : n(jQuery, e, e.document, e.Math);
}("undefined" != typeof window ? window : this, function(e, n, o, t, i) {
    "use strict";
    var r, a = "fullpage-wrapper",
        l = "." + a,
        s = "fp-scrollable",
        c = "." + s,
        f = ".slimScrollBar",
        d = ".slimScrollRail",
        u = "fp-responsive",
        h = "fp-notransition",
        p = "fp-destroyed",
        v = "fp-enabled",
        m = "fp-viewing",
        g = "active",
        S = "." + g,
        w = "fp-completely",
        y = "." + w,
        b = ".section",
        x = "fp-section",
        T = "." + x,
        C = T + S,
        k = T + ":first",
        A = T + ":last",
        L = "fp-tableCell",
        B = "." + L,
        M = "fp-auto-height",
        E = "fp-normal-scroll",
        R = "fp-nav",
        F = "#" + R,
        H = "fp-tooltip",
        q = "." + H,
        z = "fp-show-active",
        O = ".slide",
        D = "fp-slide",
        I = "." + D,
        P = I + S,
        V = "fp-slides",
        W = "." + V,
        Y = "fp-slidesContainer",
        U = "." + Y,
        X = "fp-table",
        N = "fp-slidesNav",
        K = "." + N,
        j = K + " a",
        Q = "fp-controlArrow",
        G = "." + Q,
        J = "fp-prev",
        Z = "." + J,
        $ = Q + " " + J,
        _ = G + Z,
        ee = "fp-next",
        ne = "." + ee,
        oe = Q + " " + ee,
        te = G + ne,
        ie = e(n),
        re = e(o);
    e.fn.fullpage = function(s) {
        function c() {
            s.css3 && (s.css3 = Sn()), s.scrollBar = s.scrollBar || s.hybrid, d(), Q(), Dn.setAllowScrolling(!0), Dn.setAutoScrolling(s.autoScrolling, "internal");
            var n = e(C).find(P);
            n.length && (0 !== e(C).index(T) || 0 === e(C).index(T) && 0 !== n.index()) && Ln(n), Ge(), gn(), ie.on("load", function() {
                qe();
            });
        }

        function f() {
            ie.on("scroll", de).on("hashchange", ze).blur(Ye).resize(Qe), re.keydown(Oe).keyup(Ie).on("click touchstart", F + " a", Ue).on("click touchstart", j, Xe).on("click", q, De), e(T).on("click touchstart", G, We), s.normalScrollElements && (re.on("mouseenter", s.normalScrollElements, function() {
                Dn.setMouseWheelScrolling(!1);
            }), re.on("mouseleave", s.normalScrollElements, function() {
                Dn.setMouseWheelScrolling(!0);
            }));
        }

        function d() {
            s.anchors.length || (s.anchors = e(s.sectionSelector + "[data-anchor]").map(function() {
                return e(this).data("anchor").toString();
            }).get()), s.navigationTooltips.length || (s.navigationTooltips = e(s.sectionSelector + "[data-tooltip]").map(function() {
                return e(this).data("tooltip").toString();
            }).get());
        }

        function Q() {
            Xn.css({
                height: "100%",
                position: "relative"
            }), Xn.addClass(a), e("html").addClass(v), Nn = ie.height(), Xn.removeClass(p), ae(), e(T).each(function(n) {
                var o = e(this),
                    t = o.find(I),
                    i = t.length;
                ee(o, n), ne(o, n), i > 0 ? Z(o, t, i) : s.verticalCentered && an(o);
            }), s.fixedElements && s.css3 && e(s.fixedElements).appendTo(On), s.navigation && se(), s.scrollOverflow ? ("complete" === o.readyState && ce(), ie.on("load", ce)) : fe();
        }

        function Z(n, o, t) {
            var i = 100 * t,
                r = 100 / t;
            o.wrapAll('<div class="' + Y + '" />'), o.parent().wrap('<div class="' + V + '" />'), n.find(U).css("width", i + "%"), t > 1 && (s.controlArrows && le(n), s.slidesNavigation && hn(n, t)), o.each(function(n) {
                e(this).css("width", r + "%"), s.verticalCentered && an(e(this));
            });
            var a = n.find(P);
            a.length && (0 !== e(C).index(T) || 0 === e(C).index(T) && 0 !== a.index()) ? Ln(a) : o.eq(0).addClass(g);
        }

        function ee(n, o) {
            o || 0 !== e(C).length || n.addClass(g), n.css("height", Nn + "px"), s.paddingTop && n.css("padding-top", s.paddingTop), s.paddingBottom && n.css("padding-bottom", s.paddingBottom), "undefined" != typeof s.sectionsColor[o] && n.css("background-color", s.sectionsColor[o]), "undefined" != typeof s.anchors[o] && n.attr("data-anchor", s.anchors[o]);
        }

        function ne(n, o) {
            "undefined" != typeof s.anchors[o] && n.hasClass(g) && nn(s.anchors[o], o), s.menu && s.css3 && e(s.menu).closest(l).length && e(s.menu).appendTo(On);
        }

        function ae() {
            e(s.sectionSelector).each(function() {
                e(this).addClass(x);
            }), e(s.slideSelector).each(function() {
                e(this).addClass(D);
            });
        }

        function le(e) {
            e.find(W).after('<div class="' + $ + '"></div><div class="' + oe + '"></div>'), "#fff" != s.controlArrowColor && (e.find(te).css("border-color", "transparent transparent transparent " + s.controlArrowColor), e.find(_).css("border-color", "transparent " + s.controlArrowColor + " transparent transparent")), s.loopHorizontal || e.find(_).hide();
        }

        function se() {
            On.append('<div id="' + R + '"><ul></ul></div>');
            var n = e(F);
            n.addClass(function() {
                return s.showActiveTooltip ? z + " " + s.navigationPosition : s.navigationPosition;
            });
            for (var o = 0; o < e(T).length; o++) {
                var t = "";
                s.anchors.length && (t = s.anchors[o]);
                var i = '<li><a href="#' + t + '"><span></span></a>',
                    r = s.navigationTooltips[o];
                "undefined" != typeof r && "" !== r && (i += '<div class="' + H + " " + s.navigationPosition + '">' + r + "</div>"), i += "</li>", n.find("ul").append(i);
            }
            e(F).css("margin-top", "-" + e(F).height() / 2 + "px"), e(F).find("li").eq(e(C).index(T)).find("a").addClass(g);
        }

        function ce() {
            e(T).each(function() {
                var n = e(this).find(I);
                n.length ? n.each(function() {
                    rn(e(this));
                }) : rn(e(this));
            }), fe();
        }

        function fe() {
            var n = e(C);
            n.addClass(w), s.scrollOverflowHandler.afterRender && s.scrollOverflowHandler.afterRender(n), Ee(n), Re(n), e.isFunction(s.afterLoad) && s.afterLoad.call(n, n.data("anchor"), n.index(T) + 1), e.isFunction(s.afterRender) && s.afterRender.call(Xn);
        }

        function de() {
            var n;
            if (!s.autoScrolling || s.scrollBar) {
                for (var t = ie.scrollTop(), i = he(t), r = 0, a = t + ie.height() / 2, l = o.querySelectorAll(T), c = 0; c < l.length; ++c) {
                    var f = l[c];
                    f.offsetTop <= a && (r = c);
                }
                if (ue(i) && (e(C).hasClass(w) || e(C).addClass(w).siblings().removeClass(w)), n = e(l).eq(r), !n.hasClass(g)) {
                    io = !0;
                    var d = e(C),
                        u = d.index(T) + 1,
                        h = on(n),
                        p = n.data("anchor"),
                        v = n.index(T) + 1,
                        m = n.find(P);
                    if (m.length) var S = m.data("anchor"),
                        y = m.index();
                    Qn && (n.addClass(g).siblings().removeClass(g), e.isFunction(s.onLeave) && s.onLeave.call(d, u, v, h), e.isFunction(s.afterLoad) && s.afterLoad.call(n, p, v), Ee(n), nn(p, v - 1), s.anchors.length && (In = p, pn(y, S, p, v))), clearTimeout(eo), eo = setTimeout(function() {
                        io = !1;
                    }, 100);
                }
                s.fitToSection && (clearTimeout(no), no = setTimeout(function() {
                    Qn && s.fitToSection && (e(C).is(n) && requestAnimFrame(function() {
                        Kn = !0;
                    }), Ce(e(C)), requestAnimFrame(function() {
                        Kn = !1;
                    }));
                }, s.fitToSectionDelay))
            }
        }

        function ue(n) {
            var o = e(C).position().top,
                t = o + ie.height();
            return "up" == n ? t >= ie.scrollTop() + ie.height() : o <= ie.scrollTop();
        }

        function he(e) {
            var n = e > ro ? "down" : "up";
            return ro = e, n;
        }

        function pe(e, n) {
            if (Jn.m[e]) {
                var o, t;
                if ("down" == e ? (o = "bottom", t = Dn.moveSectionDown) : (o = "top", t = Dn.moveSectionUp), n.length > 0) {
                    if (!s.scrollOverflowHandler.isScrolled(o, n)) return !0;
                    t();
                } else t();
            }
        }

        function ve(n) {
            var o = n.originalEvent;
            if (!me(n.target) && ge(o)) {
                s.autoScrolling && n.preventDefault();
                var i = e(C),
                    r = s.scrollOverflowHandler.scrollable(i);
                if (Qn && !Wn) {
                    var a = An(o);
                    so = a.y, co = a.x, i.find(W).length && t.abs(lo - co) > t.abs(ao - so) ? t.abs(lo - co) > ie.outerWidth() / 100 * s.touchSensitivity && (lo > co ? Jn.m.right && Dn.moveSlideRight() : Jn.m.left && Dn.moveSlideLeft()) : s.autoScrolling && t.abs(ao - so) > ie.height() / 100 * s.touchSensitivity && (ao > so ? pe("down", r) : so > ao && pe("up", r));
                }
            }
        }

        function me(n, o) {
            o = o || 0;
            var t = e(n).parent();
            return o < s.normalScrollElementTouchThreshold && t.is(s.normalScrollElements) ? !0 : o == s.normalScrollElementTouchThreshold ? !1 : me(t, ++o);
        }

        function ge(e) {
            return "undefined" == typeof e.pointerType || "mouse" != e.pointerType;
        }

        function Se(e) {
            var n = e.originalEvent;
            if (s.fitToSection && zn.stop(), ge(n)) {
                var o = An(n);
                ao = o.y, lo = o.x;
            }
        }

        function we(e, n) {
            for (var o = 0, i = e.slice(t.max(e.length - n, 1)), r = 0; r < i.length; r++) o += i[r];
            return t.ceil(o / n);
        }

        function ye(o) {
            var i = (new Date).getTime(),
                r = e(y).hasClass(E);
            if (s.autoScrolling && !Vn && !r) {
                o = o || n.event;
                var a = o.wheelDelta || -o.deltaY || -o.detail,
                    l = t.max(-1, t.min(1, a)),
                    c = "undefined" != typeof o.wheelDeltaX || "undefined" != typeof o.deltaX,
                    f = t.abs(o.wheelDeltaX) < t.abs(o.wheelDelta) || t.abs(o.deltaX) < t.abs(o.deltaY) || !c;
                Gn.length > 149 && Gn.shift(), Gn.push(t.abs(a)), s.scrollBar && (o.preventDefault ? o.preventDefault() : o.returnValue = !1);
                var d = e(C),
                    u = s.scrollOverflowHandler.scrollable(d),
                    h = i - fo;
                if (fo = i, h > 200 && (Gn = []), Qn) {
                    var p = we(Gn, 10),
                        v = we(Gn, 70),
                        m = p >= v;
                    m && f && (0 > l ? pe("down", u) : pe("up", u))
                }
                return !1
            }
            s.fitToSection && zn.stop()
        }

        function be(n, o) {
            var t = "undefined" == typeof o ? e(C) : o,
                i = t.find(W),
                r = i.find(I).length;
            if (!(!i.length || Wn || 2 > r)) {
                var a = i.find(P),
                    l = null;
                if (l = "prev" === n ? a.prev(I) : a.next(I), !l.length) {
                    if (!s.loopHorizontal) return;
                    l = "prev" === n ? a.siblings(":last") : a.siblings(":first")
                }
                Wn = !0, je(i, l)
            }
        }

        function xe() {
            e(P).each(function() {
                Ln(e(this), "internal")
            })
        }

        function Te(e, n) {
            var o = e.top,
                t = e.top > uo,
                i = o - Nn + n.outerHeight();
            return n.outerHeight() > Nn ? t || (o = i) : t && (o = i), uo = o, o
        }

        function Ce(n, o, t) {
            requestAnimFrame(function() {
                var i = n.position();
                if ("undefined" != typeof i) {
                    var r = Te(i, n),
                        a = {
                            element: n,
                            callback: o,
                            isMovementUp: t,
                            dest: i,
                            dtop: r,
                            yMovement: on(n),
                            anchorLink: n.data("anchor"),
                            sectionIndex: n.index(T),
                            activeSlide: n.find(P),
                            activeSection: e(C),
                            leavingSection: e(C).index(T) + 1,
                            localIsResizing: Kn
                        };
                    if (!(a.activeSection.is(n) && !Kn || s.scrollBar && ie.scrollTop() === a.dtop && !n.hasClass(M))) {
                        if (a.activeSlide.length) var l = a.activeSlide.data("anchor"),
                            c = a.activeSlide.index();
                        s.autoScrolling && s.continuousVertical && "undefined" != typeof a.isMovementUp && (!a.isMovementUp && "up" == a.yMovement || a.isMovementUp && "down" == a.yMovement) && (a = Le(a)), (!e.isFunction(s.onLeave) || a.localIsResizing || s.onLeave.call(a.activeSection, a.leavingSection, a.sectionIndex + 1, a.yMovement) !== !1) && (Fe(a.activeSection), n.addClass(g).siblings().removeClass(g), Ee(n), Qn = !1, pn(c, l, a.anchorLink, a.sectionIndex), ke(a), In = a.anchorLink, nn(a.anchorLink, a.sectionIndex))
                    }
                }
            })
        }

        function ke(n) {
            if (s.css3 && s.autoScrolling && !s.scrollBar) {
                var o = "translate3d(0px, -" + n.dtop + "px, 0px)";
                sn(o, !0), s.scrollingSpeed ? $n = setTimeout(function() {
                    Me(n)
                }, s.scrollingSpeed) : Me(n)
            } else {
                var t = Ae(n);
                e(t.element).animate(t.options, s.scrollingSpeed, s.easing).promise().done(function() {
                    s.scrollBar ? setTimeout(function() {
                        Me(n)
                    }, 30) : Me(n)
                })
            }
        }

        function Ae(e) {
            var n = {};
            return s.autoScrolling && !s.scrollBar ? (n.options = {
                top: -e.dtop
            }, n.element = l) : (n.options = {
                scrollTop: e.dtop
            }, n.element = "html, body"), n
        }

        function Le(n) {
            return n.isMovementUp ? e(C).before(n.activeSection.nextAll(T)) : e(C).after(n.activeSection.prevAll(T).get().reverse()), Bn(e(C).position().top), xe(), n.wrapAroundElements = n.activeSection, n.dest = n.element.position(), n.dtop = n.dest.top, n.yMovement = on(n.element), n
        }

        function Be(n) {
            n.wrapAroundElements && n.wrapAroundElements.length && (n.isMovementUp ? e(k).before(n.wrapAroundElements) : e(A).after(n.wrapAroundElements), Bn(e(C).position().top), xe())
        }

        function Me(n) {
            Be(n), n.element.find(".fp-scrollable").mouseover(), e.isFunction(s.afterLoad) && !n.localIsResizing && s.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1), Re(n.element), n.element.addClass(w).siblings().removeClass(w), Qn = !0, e.isFunction(n.callback) && n.callback.call(this)
        }

        function Ee(n) {
            var n = He(n);
            n.find("img[data-src], source[data-src], audio[data-src]").each(function() {
                e(this).attr("src", e(this).data("src")), e(this).removeAttr("data-src"), e(this).is("source") && e(this).closest("video").get(0).load()
            })
        }

        function Re(n) {
            var n = He(n);
            n.find("video, audio").each(function() {
                var n = e(this).get(0);
                n.hasAttribute("autoplay") && "function" == typeof n.play && n.play()
            })
        }

        function Fe(n) {
            var n = He(n);
            n.find("video, audio").each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-ignore") || "function" != typeof n.pause || n.pause()
            })
        }

        function He(n) {
            var o = n.find(P);
            return o.length && (n = e(o)), n
        }

        function qe() {
            var e = n.location.hash.replace("#", "").split("/"),
                o = e[0],
                t = e[1];
            o && (s.animateAnchor ? dn(o, t) : Dn.silentMoveTo(o, t))
        }

        function ze() {
            if (!io && !s.lockAnchors) {
                var e = n.location.hash.replace("#", "").split("/"),
                    o = e[0],
                    t = e[1],
                    i = "undefined" == typeof In,
                    r = "undefined" == typeof In && "undefined" == typeof t && !Wn;
                o.length && (o && o !== In && !i || r || !Wn && Pn != t) && dn(o, t)
            }
        }

        function Oe(n) {
            clearTimeout(oo);
            var o = e(":focus");
            if (!o.is("textarea") && !o.is("input") && !o.is("select") && s.keyboardScrolling && s.autoScrolling) {
                var t = n.which,
                    i = [40, 38, 32, 33, 34];
                e.inArray(t, i) > -1 && n.preventDefault(), Vn = n.ctrlKey, oo = setTimeout(function() {
                    Ne(n)
                }, 150)
            }
        }

        function De() {
            e(this).prev().trigger("click")
        }

        function Ie(e) {
            jn && (Vn = e.ctrlKey)
        }

        function Pe(e) {
            2 == e.which && (ho = e.pageY, Xn.on("mousemove", Ke))
        }

        function Ve(e) {
            2 == e.which && Xn.off("mousemove")
        }

        function We() {
            var n = e(this).closest(T);
            e(this).hasClass(J) ? Jn.m.left && Dn.moveSlideLeft(n) : Jn.m.right && Dn.moveSlideRight(n)
        }

        function Ye() {
            jn = !1, Vn = !1
        }

        function Ue(n) {
            n.preventDefault();
            var o = e(this).parent().index();
            Ce(e(T).eq(o))
        }

        function Xe(n) {
            n.preventDefault();
            var o = e(this).closest(T).find(W),
                t = o.find(I).eq(e(this).closest("li").index());
            je(o, t)
        }

        function Ne(n) {
            var o = n.shiftKey;
            switch (n.which) {
                case 38:
                case 33:
                    Jn.k.up && Dn.moveSectionUp();
                    break;
                case 32:
                    if (o && Jn.k.up) {
                        Dn.moveSectionUp();
                        break
                    }
                case 40:
                case 34:
                    Jn.k.down && Dn.moveSectionDown();
                    break;
                case 36:
                    Jn.k.up && Dn.moveTo(1);
                    break;
                case 35:
                    Jn.k.down && Dn.moveTo(e(T).length);
                    break;
                case 37:
                    Jn.k.left && Dn.moveSlideLeft();
                    break;
                case 39:
                    Jn.k.right && Dn.moveSlideRight();
                    break;
                default:
                    return
            }
        }

        function Ke(e) {
            Qn && (e.pageY < ho && Jn.m.up ? Dn.moveSectionUp() : e.pageY > ho && Jn.m.down && Dn.moveSectionDown()), ho = e.pageY
        }

        function je(n, o) {
            var i = o.position(),
                r = o.index(),
                a = n.closest(T),
                l = a.index(T),
                c = a.data("anchor"),
                f = a.find(K),
                d = mn(o),
                u = a.find(P),
                h = Kn;
            if (s.onSlideLeave) {
                var p = u.index(),
                    v = tn(p, r);
                if (!h && "none" !== v && e.isFunction(s.onSlideLeave) && s.onSlideLeave.call(u, c, l + 1, p, v, r) === !1) return void(Wn = !1)
            }
            Fe(u), o.addClass(g).siblings().removeClass(g), h || Ee(o), !s.loopHorizontal && s.controlArrows && (a.find(_).toggle(0 !== r), a.find(te).toggle(!o.is(":last-child"))), a.hasClass(g) && pn(r, d, c, l);
            var m = function() {
                h || e.isFunction(s.afterSlideLoad) && s.afterSlideLoad.call(o, c, l + 1, d, r), Re(o), Wn = !1
            };
            if (s.css3) {
                var w = "translate3d(-" + t.round(i.left) + "px, 0px, 0px)";
                Je(n.find(U), s.scrollingSpeed > 0).css(Mn(w)), _n = setTimeout(function() {
                    m()
                }, s.scrollingSpeed, s.easing)
            } else n.animate({
                scrollLeft: t.round(i.left)
            }, s.scrollingSpeed, s.easing, function() {
                m()
            });
            f.find(S).removeClass(g), f.find("li").eq(r).find("a").addClass(g)
        }

        function Qe() {
            if (Ge(), Yn) {
                var n = e(o.activeElement);
                if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
                    var i = ie.height();
                    t.abs(i - po) > 20 * t.max(po, i) / 100 && (Dn.reBuild(!0), po = i)
                }
            } else clearTimeout(Zn), Zn = setTimeout(function() {
                Dn.reBuild(!0)
            }, 350)
        }

        function Ge() {
            var e = s.responsive || s.responsiveWidth,
                n = s.responsiveHeight,
                o = e && ie.outerWidth() < e,
                t = n && ie.height() < n;
            e && n ? Dn.setResponsive(o || t) : e ? Dn.setResponsive(o) : n && Dn.setResponsive(t)
        }

        function Je(e) {
            var n = "all " + s.scrollingSpeed + "ms " + s.easingcss3;
            return e.removeClass(h), e.css({
                "-webkit-transition": n,
                transition: n
            })
        }

        function Ze(e) {
            return e.addClass(h)
        }

        function $e(e, n) {
            var o = 825,
                i = 900;
            if (o > e || i > n) {
                var r = 100 * e / o,
                    a = 100 * n / i,
                    l = t.min(r, a),
                    s = l.toFixed(2);
                On.css("font-size", s + "%")
            } else On.css("font-size", "100%")
        }

        function _e(n, o) {
            s.navigation && (e(F).find(S).removeClass(g), n ? e(F).find('a[href="#' + n + '"]').addClass(g) : e(F).find("li").eq(o).find("a").addClass(g))
        }

        function en(n) {
            s.menu && (e(s.menu).find(S).removeClass(g), e(s.menu).find('[data-menuanchor="' + n + '"]').addClass(g))
        }

        function nn(e, n) {
            en(e), _e(e, n)
        }

        function on(n) {
            var o = e(C).index(T),
                t = n.index(T);
            return o == t ? "none" : o > t ? "up" : "down"
        }

        function tn(e, n) {
            return e == n ? "none" : e > n ? "left" : "right"
        }

        function rn(e) {
            e.css("overflow", "hidden");
            var n, o = s.scrollOverflowHandler,
                t = o.wrapContent(),
                i = e.closest(T),
                r = o.scrollable(e);
            r.length ? n = o.scrollHeight(e) : (n = e.get(0).scrollHeight, s.verticalCentered && (n = e.find(B).get(0).scrollHeight));
            var a = Nn - parseInt(i.css("padding-bottom")) - parseInt(i.css("padding-top"));
            n > a ? r.length ? o.update(e, a) : (s.verticalCentered ? e.find(B).wrapInner(t) : e.wrapInner(t), o.create(e, a)) : o.remove(e), e.css("overflow", "")
        }

        function an(e) {
            e.addClass(X).wrapInner('<div class="' + L + '" style="height:' + ln(e) + 'px;" />')
        }

        function ln(e) {
            var n = Nn;
            if (s.paddingTop || s.paddingBottom) {
                var o = e;
                o.hasClass(x) || (o = e.closest(T));
                var t = parseInt(o.css("padding-top")) + parseInt(o.css("padding-bottom"));
                n = Nn - t
            }
            return n
        }

        function sn(e, n) {
            n ? Je(Xn) : Ze(Xn), Xn.css(Mn(e)), setTimeout(function() {
                Xn.removeClass(h)
            }, 10)
        }

        function cn(n) {
            var o = Xn.find(T + '[data-anchor="' + n + '"]');
            return o.length || (o = e(T).eq(n - 1)), o
        }

        function fn(e, n) {
            var o = n.find(W),
                t = o.find(I + '[data-anchor="' + e + '"]');
            return t.length || (t = o.find(I).eq(e)), t
        }

        function dn(e, n) {
            var o = cn(e);
            "undefined" == typeof n && (n = 0), e === In || o.hasClass(g) ? un(o, n) : Ce(o, function() {
                un(o, n)
            })
        }

        function un(e, n) {
            if ("undefined" != typeof n) {
                var o = e.find(W),
                    t = fn(n, e);
                t.length && je(o, t)
            }
        }

        function hn(e, n) {
            e.append('<div class="' + N + '"><ul></ul></div>');
            var o = e.find(K);
            o.addClass(s.slidesNavPosition);
            for (var t = 0; n > t; t++) o.find("ul").append('<li><a href="#"><span></span></a></li>');
            o.css("margin-left", "-" + o.width() / 2 + "px"), o.find("li").first().find("a").addClass(g)
        }

        function pn(e, n, o, t) {
            var i = "";
            s.anchors.length && !s.lockAnchors && (e ? ("undefined" != typeof o && (i = o), "undefined" == typeof n && (n = e), Pn = n, vn(i + "/" + n)) : "undefined" != typeof e ? (Pn = n, vn(o)) : vn(o)), gn()
        }

        function vn(e) {
            if (s.recordHistory) location.hash = e;
            else if (Yn || Un) n.history.replaceState(i, i, "#" + e);
            else {
                var o = n.location.href.split("#")[0];
                n.location.replace(o + "#" + e)
            }
        }

        function mn(e) {
            var n = e.data("anchor"),
                o = e.index();
            return "undefined" == typeof n && (n = o), n
        }

        function gn() {
            var n = e(C),
                o = n.find(P),
                t = mn(n),
                i = mn(o),
                r = (n.index(T), String(t));
            o.length && (r = r + "-" + i), r = r.replace("/", "-").replace("#", "");
            var a = new RegExp("\\b\\s?" + m + "-[^\\s]+\\b", "g");
            On[0].className = On[0].className.replace(a, ""), On.addClass(m + "-" + r)
        }

        function Sn() {
            var e, t = o.createElement("p"),
                r = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            o.body.insertBefore(t, null);
            for (var a in r) t.style[a] !== i && (t.style[a] = "translate3d(1px,1px,1px)", e = n.getComputedStyle(t).getPropertyValue(r[a]));
            return o.body.removeChild(t), e !== i && e.length > 0 && "none" !== e
        }

        function wn() {
            o.addEventListener ? (o.removeEventListener("mousewheel", ye, !1), o.removeEventListener("wheel", ye, !1), o.removeEventListener("MozMousePixelScroll", ye, !1)) : o.detachEvent("onmousewheel", ye)
        }

        function yn() {
            var e, t = "";
            n.addEventListener ? e = "addEventListener" : (e = "attachEvent", t = "on");
            var r = "onwheel" in o.createElement("div") ? "wheel" : o.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
            "DOMMouseScroll" == r ? o[e](t + "MozMousePixelScroll", ye, !1) : o[e](t + r, ye, !1)
        }

        function bn() {
            Xn.on("mousedown", Pe).on("mouseup", Ve)
        }

        function xn() {
            Xn.off("mousedown", Pe).off("mouseup", Ve)
        }

        function Tn() {
            if (Yn || Un) {
                var n = kn();
                e(l).off("touchstart " + n.down).on("touchstart " + n.down, Se), e(l).off("touchmove " + n.move).on("touchmove " + n.move, ve)
            }
        }

        function Cn() {
            if (Yn || Un) {
                var n = kn();
                e(l).off("touchstart " + n.down), e(l).off("touchmove " + n.move)
            }
        }

        function kn() {
            var e;
            return e = n.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }

        function An(e) {
            var n = [];
            return n.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, n.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, Un && ge(e) && s.scrollBar && (n.y = e.touches[0].pageY, n.x = e.touches[0].pageX), n
        }

        function Ln(e, n) {
            Dn.setScrollingSpeed(0, "internal"), "undefined" != typeof n && (Kn = !0), je(e.closest(W), e), "undefined" != typeof n && (Kn = !1), Dn.setScrollingSpeed(to.scrollingSpeed, "internal")
        }

        function Bn(e) {
            if (s.scrollBar) Xn.scrollTop(e);
            else if (s.css3) {
                var n = "translate3d(0px, -" + e + "px, 0px)";
                sn(n, !1)
            } else Xn.css("top", -e)
        }

        function Mn(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }

        function En(e, n, o) {
            switch (n) {
                case "up":
                    Jn[o].up = e;
                    break;
                case "down":
                    Jn[o].down = e;
                    break;
                case "left":
                    Jn[o].left = e;
                    break;
                case "right":
                    Jn[o].right = e;
                    break;
                case "all":
                    "m" == o ? Dn.setAllowScrolling(e) : Dn.setKeyboardScrolling(e)
            }
        }

        function Rn() {
            Bn(0), e(F + ", " + K + ", " + G).remove(), e(T).css({
                height: "",
                "background-color": "",
                padding: ""
            }), e(I).css({
                width: ""
            }), Xn.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }), zn.css({
                overflow: "",
                height: ""
            }), e("html").removeClass(v), e.each(On.get(0).className.split(/\s+/), function(e, n) {
                0 === n.indexOf(m) && On.removeClass(n)
            }), e(T + ", " + I).each(function() {
                s.scrollOverflowHandler.remove(e(this)), e(this).removeClass(X + " " + g)
            }), Ze(Xn), Xn.find(B + ", " + U + ", " + W).each(function() {
                e(this).replaceWith(this.childNodes)
            }), zn.scrollTop(0);
            var n = [x, D, Y];
            e.each(n, function(n, o) {
                e("." + o).removeClass(o)
            })
        }

        function Fn(e, n, o) {
            s[e] = n, "internal" !== o && (to[e] = n)
        }

        function Hn() {
            return e("html").hasClass(v) ? void qn("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (s.continuousVertical && (s.loopTop || s.loopBottom) && (s.continuousVertical = !1, qn("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), s.scrollBar && s.scrollOverflow && qn("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), s.continuousVertical && s.scrollBar && (s.continuousVertical = !1, qn("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), void e.each(s.anchors, function(n, o) {
                var t = re.find("[name]").filter(function() {
                        return e(this).attr("name") && e(this).attr("name").toLowerCase() == o.toLowerCase()
                    }),
                    i = re.find("[id]").filter(function() {
                        return this.id && this.id.toLowerCase() == o.toLowerCase()
                    });
                (i.length || t.length) && (qn("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), i.length && qn("error", '"' + o + '" is is being used by another element `id` property'), t.length && qn("error", '"' + o + '" is is being used by another element `name` property'))
            }))
        }

        function qn(e, n) {
            console && console[e] && console[e]("fullPage: " + n)
        }
        if (e("html").hasClass(v)) return void Hn();
        var zn = e("html, body"),
            On = e("body"),
            Dn = e.fn.fullpage;
        s = e.extend({
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 1e3,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            scrollOverflowHandler: r,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            resize: !1,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            sectionSelector: b,
            slideSelector: O,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,

            
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null
        }, s), Hn(), e.extend(e.easing, {
            easeInOutCubic: function(e, n, o, t, i) {
                return (n /= i / 2) < 1 ? t / 2 * n * n * n + o : t / 2 * ((n -= 2) * n * n + 2) + o
            }
        }), e.extend(e.easing, {
            easeInQuart: function(e, n, o, t, i) {
                return t * (n /= i) * n * n * n + o
            }
        }), Dn.setAutoScrolling = function(n, o) {
            Fn("autoScrolling", n, o);
            var t = e(C);
            s.autoScrolling && !s.scrollBar ? (zn.css({
                overflow: "hidden",
                height: "100%"
            }), Dn.setRecordHistory(to.recordHistory, "internal"), Xn.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), t.length && Bn(t.position().top)) : (zn.css({
                overflow: "visible",
                height: "initial"
            }), Dn.setRecordHistory(!1, "internal"), Xn.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), Bn(0), t.length && zn.scrollTop(t.position().top))
        }, Dn.setRecordHistory = function(e, n) {
            Fn("recordHistory", e, n)
        }, Dn.setScrollingSpeed = function(e, n) {
            Fn("scrollingSpeed", e, n)
        }, Dn.setFitToSection = function(e, n) {
            Fn("fitToSection", e, n)
        }, Dn.setLockAnchors = function(e) {
            s.lockAnchors = e
        }, Dn.setMouseWheelScrolling = function(e) {
            e ? (yn(), bn()) : (wn(), xn())
        }, Dn.setAllowScrolling = function(n, o) {
            "undefined" != typeof o ? (o = o.replace(/ /g, "").split(","), e.each(o, function(e, o) {
                En(n, o, "m")
            })) : n ? (Dn.setMouseWheelScrolling(!0), Tn()) : (Dn.setMouseWheelScrolling(!1), Cn())
        }, Dn.setKeyboardScrolling = function(n, o) {
            "undefined" != typeof o ? (o = o.replace(/ /g, "").split(","), e.each(o, function(e, o) {
                En(n, o, "k")
            })) : s.keyboardScrolling = n
        }, Dn.moveSectionUp = function() {
            var n = e(C).prev(T);
            n.length || !s.loopTop && !s.continuousVertical || (n = e(T).last()), n.length && Ce(n, null, !0)
        }, Dn.moveSectionDown = function() {
            var n = e(C).next(T);
            n.length || !s.loopBottom && !s.continuousVertical || (n = e(T).first()), n.length && Ce(n, null, !1)
        }, Dn.silentMoveTo = function(e, n) {
            requestAnimFrame(function() {
                Dn.setScrollingSpeed(0, "internal")
            }), Dn.moveTo(e, n), requestAnimFrame(function() {
                Dn.setScrollingSpeed(to.scrollingSpeed, "internal")
            })
        }, Dn.moveTo = function(e, n) {
            var o = cn(e);
            "undefined" != typeof n ? dn(e, n) : o.length > 0 && Ce(o)
        }, Dn.moveSlideRight = function(e) {
            be("next", e)
        }, Dn.moveSlideLeft = function(e) {
            be("prev", e)
        }, Dn.reBuild = function(n) {
            if (!Xn.hasClass(p)) {
                Kn = !0, requestAnimFrame(function() {
                    Kn = !0
                });
                var o = ie.outerWidth();
                Nn = ie.height(), s.resize && $e(Nn, o), e(T).each(function() {
                    var n = e(this).find(W),
                        o = e(this).find(I);
                    s.verticalCentered && e(this).find(B).css("height", ln(e(this)) + "px"), e(this).css("height", Nn + "px"), s.scrollOverflow && (o.length ? o.each(function() {
                        rn(e(this))
                    }) : rn(e(this))), o.length > 1 && je(n, n.find(P))
                });
                var t = e(C),
                    i = t.index(T);
                i && Dn.silentMoveTo(i + 1), Kn = !1, requestAnimFrame(function() {
                    Kn = !1
                }), e.isFunction(s.afterResize) && n && s.afterResize.call(Xn), e.isFunction(s.afterReBuild) && !n && s.afterReBuild.call(Xn)
            }
        }, Dn.setResponsive = function(n) {
            var o = On.hasClass(u);
            n ? o || (Dn.setAutoScrolling(!1, "internal"), Dn.setFitToSection(!1, "internal"), e(F).hide(), On.addClass(u)) : o && (Dn.setAutoScrolling(to.autoScrolling, "internal"), Dn.setFitToSection(to.autoScrolling, "internal"), e(F).show(), On.removeClass(u))
        };
        var In, Pn, Vn, Wn = !1,
            Yn = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
            Un = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
            Xn = e(this),
            Nn = ie.height(),
            Kn = !1,
            jn = !0,
            Qn = !0,
            Gn = [],
            Jn = {};
        Jn.m = {
            up: !0,
            down: !0,
            left: !0,
            right: !0
        }, Jn.k = e.extend(!0, {}, Jn.m);
        var Zn, $n, _n, eo, no, oo, to = e.extend(!0, {}, s);
        e(this).length && (c(), f());
        var io = !1,
            ro = 0,
            ao = 0,
            lo = 0,
            so = 0,
            co = 0,
            fo = (new Date).getTime();
        n.requestAnimFrame = function() {
            return n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || n.msRequestAnimationFrame || function(e) {
                e()
            }
        }();
        var uo = 0,
            ho = 0,
            po = Nn;
        Dn.destroy = function(n) {
            Dn.setAutoScrolling(!1, "internal"), Dn.setAllowScrolling(!1), Dn.setKeyboardScrolling(!1), Xn.addClass(p), clearTimeout(_n), clearTimeout($n), clearTimeout(Zn), clearTimeout(eo), clearTimeout(no), ie.off("scroll", de).off("hashchange", ze).off("resize", Qe), re.off("click", F + " a").off("mouseenter", F + " li").off("mouseleave", F + " li").off("click", j).off("mouseover", s.normalScrollElements).off("mouseout", s.normalScrollElements), e(T).off("click", G), clearTimeout(_n), clearTimeout($n), n && Rn()
        }
    };
    var ae = {
        afterRender: function(e) {
            var n = e.find(V),
                o = e.find(c);
            n.length && (o = n.find(P)), o.mouseover()
        },
        create: function(e, n) {
            /*e.find(c).slimScroll({
                allowPageScroll: !0,
                height: n + "px",
                size: "10px",
                alwaysVisible: !0
            })*/
        },
        isScrolled: function(e, n) {
            return "top" === e ? !n.scrollTop() : "bottom" === e ? n.scrollTop() + 1 + n.innerHeight() >= n[0].scrollHeight : void 0
        },
        scrollable: function(e) {
            return e.find(W).length ? e.find(P).find(c) : e.find(c)
        },
        scrollHeight: function(e) {
            return e.find(c).get(0).scrollHeight
        },
        remove: function(e) {
            e.find(c).children().first().unwrap().unwrap(), e.find(f).remove(), e.find(d).remove()
        },
        update: function(e, n) {
            e.find(c).css("height", n + "px").parent().css("height", n + "px")
        },
        wrapContent: function() {
            return '<div class="' + s + '"></div>'
        }
    };
    r = ae
});

