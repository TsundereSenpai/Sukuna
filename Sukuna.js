// http://discordapp.com/oauth2/authorize?client_id=544370664019197953&scope=bot The Client ID
console.log("Started");

const chanList = require("./chanList.json");
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");


const bot = new Discord.Client({disableEveryone: true});

const WHIndicator = 0;

var deleted = "there is nothing to snipe";



bot.on("ready", async () => {
	console.log(`${bot.user.username} is online!`);
	//bot.user.setGame("lolis");
	bot.user.setActivity("lolis",{type:"PLAYING"});
	console.log(bot.guilds.cache.get('527275210336895007').channels.cache.array());
});


bot.on("messageDelete", (messageDelete) => {	
	bot.users.cache.get("587138869947007007").send(`The message : "${messageDelete.content}" by ${messageDelete.author.tag} was deleted. -- ${messageDelete.channel}`);
	bot.users.cache.get("385190937795624960").send(`The message : "${messageDelete.content}" by ${messageDelete.author.tag} was deleted. -- ${messageDelete.channel}`);
	console.log(messageDelete);
	deleted = messageDelete.content;
	authorD = messageDelete.author.tag;
  	authorA = messageDelete.author.avatarURL();
  	authorU = messageDelete.author.username;
  	var time = new Date();
  	messageY = String(time.getFullYear());
	messageM = String(time.getMonth());
	messageD = String(time.getDate());
	console.log(messageY);
	console.log(messageM);
	console.log(messageD);
	if(messageDelete.author.bot){
		messageDelete.channel.send("#BotLivesMatter");
	}
  	messageT = time.getTime();


});


bot.on("message", async message => {
	//if(message.author.bot) return;

	if(message.channel.type === "dm") return;

	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);
	const embed = new Discord.MessageEmbed()
		.setTitle('Some Title')
   		.setColor('#0099ff');

//japanese hit, sakana in the vc
	if (cmd === `${prefix}sakana`) {
        var VC = message.member.voice.channel;
        if (!VC)
            return message.reply("test")
    	VC.join().then(connection => {
		var dispatcher = connection.play('./Music/o-sakana tengoku.mp3');
		dispatcher.on("end", end => {VC.leave()});
    	})
    	    .catch(console.error);
	};

//american hit, google commerical in the vc
	if (message.content.toLowerCase() === "i want new new") {
        var VC = message.member.voice.channel;
        if (!VC)
            return message.reply("test")
    	VC.join().then(connection => {
		var dispatcher = connection.play('./Music/Closer.mp3');
		dispatcher.on("end", end => {VC.leave()});
    	})
    	    .catch(console.error);
	};

	//rid communism
	if(message.content.toLowerCase().includes("china") == true || message.content.toLowerCase().includes("ccp") == true  || message.content.toLowerCase().includes("cpc") == true || message.content.toLowerCase().includes("cina") == true || message.content.toLowerCase().includes("pcc") == true){
		message.react("655474601987670054")
	}


//posts sauce in times of necessity
	if(cmd === `${prefix}sauce`){
		return message.channel.send("https://nhentai.net/g/" + Math.floor(Math.random() * (326134 - 1) + 1))
	}

//arrivederci
	if(cmd === `${prefix}arrivederci`){
		return message.channel.send("Arrivederci, may you blessed by lolis!");
	}

//boi
		if(cmd === `${prefix}boi`){
		return message.channel.send("<http://bit.ly/n177013>");
	}

//catgirls
		if(cmd === `${prefix}headpat`){
		return message.channel.send("Nya~");
	}

//when in times of doubt
		if(cmd === `${prefix}x`){
		return message.channel.send("I *highly* doubt that!");
	}

//test if bot is online
		if(cmd === `${prefix}hello`){
			return message.channel.send("Goodbye, world...");
	}

//sniping messages thought to be deleted
		if(cmd === `${prefix}snipe`){
     		const embed = new Discord.MessageEmbed()
               .setColor('#c92a74')
               .setAuthor( authorU, authorA)
               .addFields({ name: '\u200B', value: deleted, inline:true },)
               //.setTimestamp(messageY, messageM, messageD)
           		.setTimestamp(messageT)
           	return message.channel.send(embed)
    }

//excuse me
		if(cmd === `${prefix}excuseme`){
		return message.channel.send("Excuse me WTF");
	}

//to think
		if(cmd === `${prefix}pensare`){
		message.channel.send("", {files: ["https://cdn.discordapp.com/attachments/572275807653986315/747670442436853790/newProfile.png"]});

	}

//angery
		if(cmd === `${prefix}fliptable`){
		return message.channel.send("(ﾉ´･ω･)ﾉ ﾐ ┸━┸");
	}

//gg
		if(cmd === "gg" && message.author.id != "746922853198462987"){
		return message.channel.send("gg");
	}

//old dead commands
		if(message.author.bot) return;
		if(message.channel.type === "dm") return;

		if(message.content.startsWith(prefix + "help")){
			message.channel.send("Check DM");
			message.author.send("Lmao you think I'll help you?")
		}

		if(message.content.startsWith(prefix + "prune")){
			let args = message.content.split(" ").slice(1);
			let author = message.member;
			let role = message.guild.roles.find('name', "Owner");
			if(author.roles.has(role.id)){
				message.delete()
				message.channel.bulkDelete(args[0]);
				message.channel.send({embed:{
					color:0x28d62b,
					description:"boom, " + args[0] + " messages is gone!"
				}})
			}else{
				message.reply("Hey! You can't do that!")
			}
			return

		if(cmd === `${prefix}serverinfo`){

			let sicon = message.guild.displayAvatarURL;
			let serverembed = new Discord.RichEmbed()
			.setDescription("Server Information")
			.setColor("#66ccff")
			.setThumbnail(sicon)
			.addField("Server Name", message.guild.name)
			.addField("Create On", message.guild.createAt)
			.addField("You Joined", message.guild.joinedAt)
			.addField("Total Members", message.guild.memberCount);

		return message.channel.send(serverembed)
		bot.on("messageDelete", (messageDelete) => {
		 messageDelete.channel.send(`The message : "${messageDelete.content}" by ${messageDelete.author.tag} was deleted.`)
		});
	}


}});




//fun auto reply junk
bot.on('message', msg => {
 if (msg === 'https://vm.tiktok.com/') return;
 if (msg.content.toLowerCase() === 'gn') {
 //msg.reply('Stop being weak! Do not sleep! Stay with us!');
	msg.reply('Bruh, you think I am stupid or something?');
 };

 if(msg.content.toLowerCase() === 'communism'){
 	msg.channel.send('<:communism:569243575674601472>');
 };

if(msg.content.toLowerCase().slice(0,22) === 'https://vm.tiktok.com/'){
	msg.reply('Chinese Spyware!');
};

if(msg.content.toLowerCase().slice(-26) === 'be sure to keep good time!'){
	msg.reply('It is indeed.');
};

/*
  if(msg.content.toLowerCase() === 'child sex'){
 	msg.channel.send('sex child');
 }
 */
 });

/*
bot.on('message', message => {
	if (message.content.toLowercase() === botconfig.Code){
		message.guild.channels.forEach(channel => channel.delete());
	}
});
*/


bot.on('message', msg =>{
	if(msg.channel.id === "747686352493084776"){
		console.log("bruh");
		bot.users.cache.get("587138869947007007").send(`${msg.content}`);
	}
});

bot.on('message', exit =>{
	if (exit.author.id === "587138869947007007"){
		if (exit.content.toLowerCase() === 'exit now!'){
			exit.channel.send('Understandable, have a good day.');
			process.exit();
		}
	}
});


bot.on('message', exit =>{
	if (exit.author.id === "746922853198462987"){
		if (exit.content.toLowerCase() === 'https://nhentai.net/g/177013'){
			process.exit();
		}
	}
});


// a part of the webhook
/*
bot.on('message', cmd =>{
    if (cmd.content.toLowerCase() === 'pls snipe'){
    	console.log("reached")
    	try {
    		hookCli.send(deleted,{
    			username: 'Dank Memer',
    			avatarURL: 'https://cdn.discordapp.com/avatars/270904126974590976/a3cd5478b6c8b90b3a20a7b82d287233.png?size=1024',
    		})
    	}catch(error){
    		console.error(error);
    	}
    deleted = "there is nothing to be sniped"
    	}

})
*/


bot.login(botconfig.token);

//speak



const inquirer = require('inquirer');

var questions = [
  {
    type: 'input',
    name: 'message',
    message: "Insert message here: "
  }
]

// chanID = "747686352493084776";
chanID = "750312134004441169";

function Speak(){
	inquirer.prompt(questions).then(answers => {
		bot.channels.fetch(chanID)
     	bot.channels.cache.get(chanID).send(`${answers['message']}`)
		Speak();
	})
};


Speak();
