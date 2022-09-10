/* ################################################### */
/* #################  chart.js 2.9.0 ################# */
/* ################################################### */

const X_AXIS_FONT_SIZE = 12;
const Y_AXIS_FONT_SIZE = 12;
const style = getComputedStyle(document.documentElement);
const lineColorTop = style.getPropertyValue("--line-top");
const lineColorBot = style.getPropertyValue("--line-bot");

/* ################################################### */
/* ###################   F O N T   ################### */
/* ################################################### */

Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontSize = 12;

/* ################################################### */
/* ###################   L I N E   ################### */
/* ################################################### */

Chart.defaults.global.elements.line.fill = false;
Chart.defaults.global.elements.line.borderWidth = 0.5;
Chart.defaults.global.elements.line.tension = 0.3;

Chart.defaults.line.hover.mode = null; // THIS WORKS
Chart.defaults.line.showLines = true;

/* P O I N T S : backgroundColor - borderColor - borderWidth - pointStyle - radius - hoverBorderWidth - hoverRadius */

Chart.defaults.global.elements.point.backgroundColor = "black";
// Chart.defaults.global.elements.point.borderWidth = 0;
Chart.defaults.global.elements.point.radius = 0;

/* ################################################### */
/* ##################   H O V E R   ################## */
/* ################################################### */

Chart.defaults.global.hover.animationDuration = 0;

/* ################################################### */
/* ###############   T O O L T I P S   ############### */
/* ################################################### */

Chart.defaults.global.tooltips.enabled = false;

/* ################################################### */
/* #################   L E G E N D   ################# */
/* ################################################### */

Chart.defaults.global.legend.display = false;
// Chart.defaults.global.legend.position = 'chartArea';

Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;

/* ################################################### */
/* ##################   T I T L E   ################## */
/* ################################################### */

Chart.defaults.global.title.display = false;
// Chart.defaults.global.title.text = "DEFAULT TITLE";

/* ################################################### */
/* ###########   A X E S   -   T I C K S   ########### */
/* ################################################### */

Chart.defaults.line.scales.xAxes[0].type = "category";

Chart.defaults.line.scales.xAxes[0].ticks = {
    fontSize: X_AXIS_FONT_SIZE,
    maxTicksLimit: 8,
    autoskip: true,
    maxRotation: 0 ,
    minRotation: 0,
    includeBounds : false,
    callback : (tick,index,array) => {
        // console.log(index,tick);
        if(index != 0) return tick;
        else return null;
    }
};

Chart.defaults.line.scales.yAxes[0].type = "linear";

Chart.defaults.line.scales.yAxes[0].position = 'right';
Chart.defaults.line.scales.yAxes[0].ticks = {
    fontSize: Y_AXIS_FONT_SIZE,
    maxTicksLimit: 9,
    autoskip: false,
    callback : (tick,index,array) => {
        if(index != (array.length -1)) return tick;
        else return null;
    }
};


/* ################################################### */
/* #################   L A Y O U T   ################# */
/* ################################################### */

// Chart.defaults.global.layout.padding = 5;
Chart.defaults.global.layout.padding = { top: 5, right: 5, bottom: 30, left: 0 };


Chart.defaults.global.animation.duration = 0;


/* ################################################### */
/* #############   G R I D - L I N E S   ############# */
/* ################################################### */

Chart.defaults.scale.gridLines.color = "gray";
Chart.defaults.scale.gridLines.drawOnChartArea = false;
Chart.defaults.scale.gridLines.offsetGridLines = true;
Chart.defaults.scale.gridLines.tickMarkLength = 15;