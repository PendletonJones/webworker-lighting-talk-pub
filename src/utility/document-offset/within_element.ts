/**
 * Check if the DOM element `child` is within the given `parent` DOM element.
 *
 * @param {DOMElement|Range} child - the DOM element or Range to check if it's within `parent`
 * @param {DOMElement} parent  - the parent node that `child` could be inside of
 * @return {Boolean} True if `child` is within `parent`. False otherwise.
 * @public
 */

export default function within (child: any, parent: any): boolean {
	// don't throw if `child` is null
	if (!child) {
		return false;
	};
	// Range supports
	if(child.commonAncestorContainer){
		child = child.commonAncestorContainer;			
	}
	else if(child.endContainer){
		child = child.endContainer;
	}
	// ask the browser if parent contains child
	return parent.contains(child);
}