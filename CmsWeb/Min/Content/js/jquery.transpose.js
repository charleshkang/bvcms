/*!
 * jQuery transpose() plugin
 *
 * Version 1.2 (2 Aug 2011)
 *
 * Copyright (c) 2011 Robert Koritnik
 * Licensed under the terms of the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 */
(function(n){var t={containerKey:"transposed",itemKey:"pre-transpose-index"};n.fn.extend({transpose:function(){if(this.length>2){var i=this,r=this.parent();r.each(function(){var v=this,h=n(this),o,u,s,r,l,a,c,e,f;if(typeof h.data(t.containerKey)=="undefined"&&(h.data(t.containerKey,!0),o=i.filter(function(){return this.parentNode==v}),u=o.length,u>2)){for(l=o.eq(0).position().top,r=1;r<u&&l==o.eq(r).position().top;r++);if(a=parseInt(u/r)+1,u>r&&r>1){for(c=[],f=0;f<r;f++)c.push(a-(f%r<u%r?0:1));for(s=n(),e=0,f=0;f<u;f++)s=s.add(o.eq(e).detach().data(t.itemKey,e)),e+=c[f%r],e>=u&&e++,e=e%u;s.appendTo(h).after("\n")}}})}return this}})})(jQuery)