/**
 * FAQ Model
 *
 * @constructor
 *
 * @author   Jelle De Loecker   <jelle@develry.be>
 * @since    0.1.0
 * @version  0.1.0
 */
var Faq = Function.inherits('Alchemy.Model', function Faq(options) {
	Faq.super.call(this, options);
});

/**
 * The default sort options
 *
 * @type {Object}
 */
Faq.prepareProperty('sort', function sort() {
	return {order: 1};
});

/**
 * Constitute the class wide schema
 *
 * @author   Jelle De Loecker   <jelle@develry.be>
 * @since    0.1.0
 * @version  0.1.0
 */
Faq.constitute(function addFields() {

	// The actual simple-text title
	this.addField('title', 'String', {translatable: true});

	// The rich-text teaser
	this.addField('teaser', 'Text', {translatable: true});

	// The rich-text body
	this.addField('body', 'Text', {translatable: true});

	// The order of this FAQ
	this.addField('order', 'Number');
});

/**
 * Configure chimera for this model
 *
 * @author   Jelle De Loecker   <jelle@develry.be>
 * @since    0.1.0
 * @version  0.1.0
 */
Faq.constitute(function chimeraConfig() {

	if (!this.chimera) {
		return;
	}

	// Get the list group
	let list = this.chimera.getActionFields('list');

	list.options.paginate = false;

	list.addField('title');
	list.addField('teaser');
	list.addField('body');
	list.addField('order', {make_sortable: true});

	// Get the edit group
	let edit = this.chimera.getActionFields('edit');

	edit.addField('title');
	edit.addField('teaser');
	edit.addField('body');
	edit.addField('order');
});