import domready from 'when-dom-ready';
/* 
	needs major refactoring; 
	could be turned into a class easily
*/

interface ISupporter {
	leadingWhitespace: boolean;
	tbody: boolean;
	htmlSerialize: boolean;
	style: boolean;
	hrefNormalized: boolean;
	opacity: boolean;
	cssFloat: boolean;
	checkOn: boolean;
	optSelected: boolean;
	getSetAttribute: boolean;
	enctype: boolean;
	// html5Clone: boolean;
	boxModel: boolean;
	submitBubbles: boolean;
	changeBubbles: boolean;
	focusinBubbles: boolean;
	deleteExpando: boolean;
	noCloneEvent: boolean;
	inlineBlockNeedsLayout: boolean;
	shrinkWrapBlocks: boolean;
	reliableMarginRight: boolean;
	boxSizingReliable: boolean;
	pixelPosition: boolean;

	// noCloneChecked?: boolean;
	optDisabled?: boolean;
	radioValue?: boolean;
	checkClone?: boolean;
	appendChecked?: boolean;
	reliableHiddenOffsets?: boolean;
	boxSizing?: boolean;
	doesNotIncludeMarginInBodyOffset?: boolean;
}

interface IFinalSupporter extends ISupporter {
	// noCloneChecked: boolean;
	optDisabled: boolean;
	radioValue: boolean;
	checkClone: boolean;
	appendChecked: boolean;
	reliableHiddenOffsets: boolean;
	boxSizing: boolean;
	doesNotIncludeMarginInBodyOffset: boolean;
}

let support: IFinalSupporter = { 
	leadingWhitespace: true,
	tbody: true,
	htmlSerialize: true,
	style: true,
	hrefNormalized: true,
	opacity: true,
	cssFloat: true,
	checkOn: true,
	optSelected: true,
	getSetAttribute: true,
	enctype: true,
	//html5Clone: true,
	boxModel: true,
	submitBubbles: true,
	changeBubbles: true,
	focusinBubbles: true,
	deleteExpando: true,
	noCloneEvent: true,
	inlineBlockNeedsLayout: true,
	shrinkWrapBlocks: true,
	reliableMarginRight: true,
	boxSizingReliable: true,
	pixelPosition: true,
	//noCloneChecked?: true,
	optDisabled: true,
	radioValue: true,
	checkClone: true,
	appendChecked: true,
	reliableHiddenOffsets: true,
	boxSizing: true,
	doesNotIncludeMarginInBodyOffset: true,
};
document.addEventListener("DOMContentLoaded", (event) => { 
	const create_support = (): IFinalSupporter => {

	  	const div = document.createElement("div");

	  	// Setup
	  	div.setAttribute( "className", "t" );
	  	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	  	// Support tests won't run in some limited or non-browser environments
	  	let all = div.getElementsByTagName("*");
	  	const a = div.getElementsByTagName("a")[ 0 ];
	  	// if ( !all || !a || !all.length ) {
	  	// 	return {};
	  	// }

	  	// First batch of tests
	  	const select = document.createElement("select");
	  	const opt = select.appendChild( document.createElement("option") );
	  	const input = div.getElementsByTagName("input")[ 0 ];

	  	const leading = (div && div.firstChild) ? !!(div.firstChild.nodeType === 3) : false

	  	// .nodeType || 0) === 3) || false;
	  	// 
	  	// 
	  	a.style.cssText = "top:1px;float:left;opacity:.5";
	  	const support: ISupporter = {
	  		// IE strips leading whitespace when .innerHTML is used
	  		// leadingWhitespace: true,
	  		leadingWhitespace: leading,

	  		// Make sure that tbody elements aren't automatically inserted
	  		// IE will insert them into empty tables
	  		tbody: !div.getElementsByTagName("tbody").length,

	  		// Make sure that link elements get serialized correctly by innerHTML
	  		// This requires a wrapper element in IE
	  		htmlSerialize: !!div.getElementsByTagName("link").length,

	  		// Get the style information from getAttribute
	  		// (IE uses .cssText instead)
	  		style: /top/.test( a.getAttribute("style") || "" ),

	  		// Make sure that URLs aren't manipulated
	  		// (IE normalizes it by default)
	  		hrefNormalized: ( a.getAttribute("href") === "/a" ),

	  		// Make sure that element opacity exists
	  		// (IE uses filter instead)
	  		// Use a regex to work around a WebKit issue. See #5145
	  		opacity: /^0.5/.test( a.style.opacity || "" ),

	  		// Verify style float existence
	  		// (IE uses styleFloat instead of cssFloat)
	  		cssFloat: !!a.style.cssFloat,

	  		// Make sure that if no value is specified for a checkbox
	  		// that it defaults to "on".
	  		// (WebKit defaults to "" instead)
	  		checkOn: ( input.value === "on" ),

	  		// Make sure that a selected-by-default option has a working selected property.
	  		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	  		optSelected: opt.selected,

	  		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	  		getSetAttribute: div.className !== "t",

	  		// Tests for enctype support on a form (#6743)
	  		enctype: !!document.createElement("form").enctype,

	  		// // Makes sure cloning an html5 element does not cause problems
	  		// // Where outerHTML is undefined, this still works
	  		// html5Clone: <Element>document.createElement("nav").cloneNode( true ) 
	  		// 	? document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>" 
	  		// 	: false,

	  		// jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
	  		boxModel: ( document.compatMode === "CSS1Compat" ),

	  		// Will be defined later
	  		submitBubbles: true,
	  		changeBubbles: true,
	  		focusinBubbles: false,
	  		deleteExpando: true,
	  		noCloneEvent: true,
	  		inlineBlockNeedsLayout: false,
	  		shrinkWrapBlocks: false,
	  		reliableMarginRight: true,
	  		boxSizingReliable: true,
	  		pixelPosition: false
	  	};

	  	// Make sure checked status is properly cloned
	  	input.checked = true;
	  	// support.noCloneChecked = input.cloneNode( true ).checked;

	  	// Make sure that the options inside disabled selects aren't marked as disabled
	  	// (WebKit marks them as disabled)
	  	select.disabled = true;
	  	support.optDisabled = !opt.disabled;

	  	// Test to see if it's possible to delete an expando from an element
	  	// Fails in Internet Explorer
	  	// try {
	  	// 	delete div.test;
	  	// } catch( e ) {
	  	// 	support.deleteExpando = false;
	  	// }

	  	// if ( !div.addEventListener && div.attachEvent && div.fireEvent ) {
	  	// 	div.attachEvent( "onclick", clickFn = () => {
	  	// 		// Cloning a node shouldn't copy over any
	  	// 		// bound event handlers (IE does this)
	  	// 		support.noCloneEvent = false;
	  	// 	});
	  	// 	div.cloneNode( true ).fireEvent("onclick");
	  	// 	div.detachEvent( "onclick", clickFn );
	  	// }

	  	// Check if a radio maintains its value
	  	// after being appended to the DOM
	  	const secondinput = document.createElement("input");
	  	secondinput.value = "t";
	  	secondinput.setAttribute( "type", "radio" );
	  	support.radioValue = secondinput.value === "t";

	  	secondinput.setAttribute( "checked", "checked" );

	  	// #11217 - WebKit loses check when the name is after the checked attribute
	  	secondinput.setAttribute( "name", "t" );

	  	div.appendChild( secondinput );
	  	const fragment = document.createDocumentFragment();
	  	const lastChild = <Node>div.lastChild;
	  	fragment.appendChild( lastChild );

	  	// WebKit doesn't clone checked state correctly in fragments
	  	// support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	  	// Check if a disconnected checkbox will retain its checked
	  	// value of true after appended to the DOM (IE6/7)
	  	support.appendChecked = secondinput.checked;

	  	fragment.removeChild( secondinput );
	  	fragment.appendChild( div );

	  	// Technique from Juriy Zaytsev
	  	// http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
	  	// We only care about the case where non-standard event systems
	  	// are used, namely in IE. Short-circuiting here helps us to
	  	// avoid an eval call (in setAttribute) which can cause CSP
	  	// to go haywire. See: https://developer.mozilla.org/en/Security/CSP

	  	let isSupported = true;
	  	if ( !div.addEventListener ) {
	  		for ( const i in {
	  			submit: true,
	  			change: true,
	  			focusin: true
	  		}) {
	  			const eventName = "on" + i;
	  			let isSupported = ( eventName in div );
	  			if ( !isSupported ) {
	  				div.setAttribute( eventName, "return;" );
	  				isSupported = ( typeof div[ eventName ] === "function" );
	  			}
	  			support[ i + "Bubbles" ] = isSupported;
	  		}
	  	}

	  	// Run tests that need a body at doc ready
	  	domready(function() {
	  		var container, div, tds, marginDiv,
	  			divReset = "padding:0;margin:0;border:0;display:block;overflow:hidden;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
	  			body = document.getElementsByTagName("body")[0];

	  		if ( !body ) {
	  			// Return for frameset docs that don't have a body
	  			return;
	  		}

	  		container = document.createElement("div");
	  		container.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
	  		body.insertBefore( container, body.firstChild );

	  		// Construct the test element
	  		div = document.createElement("div");
	  		container.appendChild( div );

	  	    // Check if table cells still have offsetWidth/Height when they are set
	  	    // to display:none and there are still other visible table cells in a
	  	    // table row; if so, offsetWidth/Height are not reliable for use when
	  	    // determining if an element has been hidden directly using
	  	    // display:none (it is still safe to use offsets if a parent element is
	  	    // hidden; don safety goggles and see bug #4512 for more information).
	  	    // (only IE 8 fails this test)
	  		div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
	  		tds = div.getElementsByTagName("td");
	  		tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
	  		isSupported = ( tds[ 0 ].offsetHeight === 0 );

	  		tds[ 0 ].style.display = "";
	  		tds[ 1 ].style.display = "none";

	  		// Check if empty table cells still have offsetWidth/Height
	  		// (IE <= 8 fail this test)
	  		support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

	  		// Check box-sizing and margin behavior
	  		div.innerHTML = "";
	  		div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
	  		support.boxSizing = ( div.offsetWidth === 4 );
	  		support.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== 1 );

	  		// NOTE: To any future maintainer, we've window.getComputedStyle
	  		// because jsdom on node.js will break without it.
	  		if ( window.getComputedStyle ) {
	  			support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
	  			support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

	  			// Check if div with explicit width and no margin-right incorrectly
	  			// gets computed margin-right based on width of container. For more
	  			// info see bug #3333
	  			// Fails in WebKit before Feb 2011 nightlies
	  			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	  			marginDiv = document.createElement("div");
	  			marginDiv.style.cssText = div.style.cssText = divReset;
	  			marginDiv.style.marginRight = marginDiv.style.width = "0";
	  			div.style.width = "1px";
	  			div.appendChild( marginDiv );
	  			// support.reliableMarginRight =
	  			// 	!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
	  		}

	  		// if ( typeof div.style.zoom !== "undefined" ) {
	  		// 	// Check if natively block-level elements act like inline-block
	  		// 	// elements when setting their display to 'inline' and giving
	  		// 	// them layout
	  		// 	// (IE < 8 does this)
	  		// 	div.innerHTML = "";
	  		// 	div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
	  		// 	support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

	  		// 	// Check if elements with layout shrink-wrap their children
	  		// 	// (IE 6 does this)
	  		// 	div.style.display = "block";
	  		// 	div.style.overflow = "visible";
	  		// 	div.innerHTML = "<div></div>";
	  		// 	div.firstChild && (<HTMLElement>(div.firstChild).style.width = "5px");
	  		// 	support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );

	  		// 	container.style.zoom = 1;
	  		// }

	  		// Null elements to avoid leaks in IE
	  		body.removeChild( container );
	  		container = div = tds = marginDiv = null;
	  	});

	  	// Null elements to avoid leaks in IE
	  	fragment.removeChild( div );
	  	// all = a = select = opt = input = fragment = div = null;
	  	return <IFinalSupporter>support;
	}
	support = create_support();  
});

export default function getSupport() { return support; };