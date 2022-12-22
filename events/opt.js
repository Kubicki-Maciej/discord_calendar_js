const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Get info about a user or a server!')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Info about a user')
                .addUserOption(option => option.setName('target').setDescription('The user'))),
    async userInfo = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Some title')
                .setAuthor('Some name', interaction.user.displayAvatarURL({ dynamic: true }))
                .setDescription('Some description here')
                .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
                .addFields(
                    { name: 'Hello', value: 'Hello' },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'ID', value: interaction.user.id, inline: true },
                    { name: 'Username', value: interaction.user.tag, inline: true },
                )
                .setTimestamp()
                .setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');
    if (interaction.options.getSubcommand() === 'user') {
            const user = interaction.options.getUser('target');
            if (user) {
            await interaction.reply({ embeds: [userInfo] });
            }
    };
};