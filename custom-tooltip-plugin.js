Chart.defaults.global.plugins.tooltip.enabled = false; // Désactivez le tooltip par défaut de Chart.js

                const customTooltipPlugin = {
                    id: 'customTooltip',
                    afterDraw: function (chart, args, options) {
                        if (chart.tooltip._active && chart.tooltip._active.length) {
                            const activePoint = chart.tooltip._active[0];
                            const ctx = chart.ctx;
                            const tooltipModel = chart.tooltip._model;
                            const songData = chart.data.songsData[activePoint.dataIndex];

                            // Personnalisez le style du tooltip
                            ctx.globalAlpha = 0.9;
                            ctx.fillStyle = '#fff';
                            ctx.fillRect(tooltipModel.caretX - 75, tooltipModel.y - 80, 150, 60);

                            // Affichez le titre de la chanson et la couverture
                            ctx.globalAlpha = 1;
                            ctx.fillStyle = '#000';
                            ctx.fillText(songData.name, tooltipModel.caretX, tooltipModel.y - 60);
                            ctx.drawImage(songData.cover, tooltipModel.caretX - 30, tooltipModel.y - 30, 60, 60);
                        }
                    },
                };