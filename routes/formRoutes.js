const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');

sgMail.setApiKey(keys.sendGridKey);
sgMail.setSubstitutionWrappers('{{', '}}');


module.exports = app => {
	app.post('/api/contact', (req, res) => {

		const {email, name, phone, company, details, budget, type} = req.body;
	 
		const msg = {
			to: 'metturanketh@gmail.com',
			from: email,
			subject: 'Prospective Client',
			templateId: '4689243f-3476-4199-a6d2-7fb2a1a9fb3b',
			substitutions: {
				name: name,
				email: email,
				phone: phone,
				company: company,
				type: type,
				budget: budget,
				details: details,
			},
		};

		sgMail.send(msg);
		res.sendStatus(200);
	});
};