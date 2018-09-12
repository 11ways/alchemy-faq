
if (!alchemy.plugins.chimera) {
	return;
}

// Add "faq" menu item
alchemy.plugins.chimera.menu.set('faq', {
	title : 'FAQ',
	route : 'chimera@ModelAction',
	parameters: {
		controller : 'editor',
		subject    : 'faq',
		action     : 'index'
	},
	icon: {
		fa: 'question'
	}
});