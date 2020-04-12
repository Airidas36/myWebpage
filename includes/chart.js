var lang = localStorage.getItem(lang);
var label1, label2, label3, label4, label5, text;
if(lang)
{
    if(lang ==='en')
    {
        label1= "Fan clutch",
        label2= "Head gasket",
        label3= "Radiator",
        label4= "Cooling system is not bled properly",
        label5 = "120° is a normal operating temperature for these engines",
        text_title = "TOP 5 REASONS FOR YOUR M50/M52 TO OVERHEAT";
    }
    else
    {
        label1= "Termomova",
        label2= "Galvos tarpinė",
        label3= "Radikas",
        label4= "Nenuorinai normaliai, kreivaranki",
        label5 = "120° normali temp",
        text_title = "TOP 5 PLYTOS KAITIMO PRIEŽASTYS";
    }
}
window.onload = function () {
    var btn = document.getElementById("view");
    btn.onclick = function () {
        btn.remove();
        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "dark2", // "light1", "light2", "dark1", "dark2"
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: text_title,
            },
            data: [{
                type: "pie",
                startAngle: 25,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    { y: 32.11, label: label1},
                    { y: 15.66, label: label2 },
                    { y: 20.91, label: label3 },
                    { y: 30.45, label: label4 },
                    { y: 0.87, label: label5 },
                ]
            }]
        });
        chart.render();
    }
}

