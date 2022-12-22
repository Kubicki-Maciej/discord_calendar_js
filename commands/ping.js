const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('testoption')
	.setDescription('Information about the options provided.')
	.addStringOption(option => option.setName('message').setDescription('Select animal for photo'))
	,
	async execute(interaction) {
		// const messageToSend = interaction.option.getString()
		const messageToSend = interaction.option.getString('input');
		// const user = interaction.option.getUser('target')
		return interaction.reply(`user name:  message: ${messageToSend}`);
	},
};