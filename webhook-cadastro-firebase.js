const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'SUA_URL_FIREBASE',
});

function cadastro_func(agent) {
    var newKey = admin.database().ref().child('agendados').push().key; //cria chave única
    
    admin.database().ref('agendados/'+newKey).set({ //insere infos no database
        servico: agent.parameters.servico,
		date: agent.parameters.date,
		time: agent.parameters.time
    });
agent.add('Confirmado!'); //confirma agendamento
