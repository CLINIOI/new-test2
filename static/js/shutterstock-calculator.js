const chart = d3.select('div#chart');

// Width & height
const svgWidth = 848; //12 * 64 + 40 * 2
const svgHeight = 380; //5 * 32 + 30 * 2

// line dragged
let lineDragged = false;

// Chart margins
const margin = {
  top: 30,
  right: 40,
  bottom: 30,
  left: 40,
};

// Width & height
const width = svgWidth - (margin.right + margin.left); //12 * 64
const height = svgHeight - (margin.top + margin.bottom); //5 * 32

// Get selects
const countSelect = document.getElementById('count');
const levelLogicSelect = document.getElementById('levelLogic');

// Get Count increment
let increment = +countSelect.value;
let maxValue = increment * 6;

// Get step func logic
let stepFunLogic = levelLogicSelect.value;

// Display the coordinates of a point
const monthValue = document.getElementById('monthValue');
const countValue = document.getElementById('countValue');

// line graph data
let graphData = [];

// Step func data
let stepFuncData = [];

// x axis data
const x_data = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const y_earnings = [0, 15, 20, 25, 30, 35, 40];

const drag = d3.drag()
    .on('start', dragStarted)
    .on('drag', dragged)
    .on('end', dragEnded);

// Append SVG 
let svg = chart.append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

let focus = svg.append('g');

// Define right arrow
svg
    .append('defs')
    .append('marker')
    .attr('id', 'arrowhead-right')
    .attr('refX', 5)
    .attr('refY', 4)
    .attr('markerWidth', 16)
    .attr('markerHeight', 13)
    .append('path')
    .attr('d', 'M 0 0 L 5 5 L 0 10')
    .attr('stroke', 'black')
    .attr('stroke-width', 1)
    .attr('fill', 'none');

let x_scaleStep = 0;

const generateRandomData = (mean) => {
  const min = mean * 0.7;
  const max = mean * 1.3;
  nextGraphData = [];

  x_data.forEach((month) => {
    var d = {
        month,
        count: Math.round(Math.random() * (max - min) + min),
    };
    d.y = cleanY1(d);
    nextGraphData.push(d);
  });

  graphData = nextGraphData;
};

const updateGraphData = () => {
    graphData.forEach((d) => {
        d.y = cleanY1(d);
    });
};

// photos
const stepFuncLogic1 = () => {
  let data = [];

  graphData.forEach((item, index) => {
    let sum = 0;
    let level = 1; //15

    for (let i=index-1; i>=0; i=i-1) {
      sum = sum + graphData[i].count;
    }
    // 1-15, 2-20, 3-25, 4-30, 5-35, 6-40
    const levels = [[0, 1], [100, 2], [250, 3], [500, 4], [2500, 5], [25000, 6], [2000000000, 6]];
    for (let i = 0; i < levels.length; i++) {
        if (sum < levels[i][0]) {
            level = levels[i - 1][1]
            break;
        }
    }

    data.push({
      month: item.month,
      level,
    });

    if (index !== 11) {
        data.push({
        month: graphData[index+1].month,
        level,
      });
    };
  });

  stepFuncData = data;
};

// video levels
const stepFuncLogic2 = () => {
  let data = [];

  graphData.forEach((item, index) => {
    let sum = 0;
    let level = 1;

    for (let i=index-1; i>=0; i=i-1) {
      sum = sum + graphData[i].count;
    }

    // 1-15, 2-20, 3-25, 4-30, 5-35, 6-40
    const levels = [[0, 1], [10, 2], [50, 3], [250, 4], [5000, 5], [25000, 6], [2000000000, 6]];
    for (let i = 0; i < levels.length; i++) {
        if (sum < levels[i][0]) {
            level = levels[i - 1][1]
            break;
        }
    }

    data.push({
      month: item.month,
      level,
    });

    if (index !== 11) {
        data.push({
        month: graphData[index+1].month,
        level,
      });
    };
  });

  stepFuncData = data;
};

const tickValuesForAxis = (mv, mi) => {
  let r = [];
  for (let i = 0; i <= mv; i += mi) {
    r.push(i);
  }
  return r;
};

const drawXaxis = () => {
  // Create scale
  const x_scale = d3.scaleBand()
      .domain(x_data)         
      .range([0, width]);

  // Add scales to axis
  const x_axis = d3.axisBottom()
      .scale(x_scale)
      .tickPadding(8)
      .tickSize(8)
      .tickSizeOuter(0)
      .offset(4);

  //Append group and insert axis
  svg.append('g')
      .attr('transform', `translate(${margin.left}, ${svgHeight - margin.bottom})`)
      .attr('id', 'xAxis')
      .call(x_axis)
      .attr('font-size','14')
      .attr('text-anchor', 'middle')
      .style('font-weight', '500');

  // Add arrow to the end of the x axis
  svg.select('#xAxis path.domain')
      .attr('marker-end', 'url(#arrowhead-right)');

  x_scaleStep = x_scale.step();
};

const drawY1axis = (maxValue, increment) => {
  const maxDomain = maxValue;
  const yAxisElem = document.querySelector('.yAxis');
  const gridline_y = document.querySelectorAll('.gridline-y');
  const gridline_x = document.querySelectorAll('.gridline-x');

  if (yAxisElem) {
    yAxisElem.parentNode.removeChild(yAxisElem);
  };

  if (gridline_y) {
    gridline_y.forEach((elem) => {
      elem.parentNode.removeChild(elem);
    });
  };

  if (gridline_x) {
    gridline_x.forEach((elem) => {
      elem.parentNode.removeChild(elem);
    });
  };

  // Create scale
  const y_scale = d3.scaleLinear()
      .domain([0, y_earnings.length - 1])
      .range([height, 0]);

  const y_axis = d3.axisLeft()
      .scale(y_scale)
      .tickPadding(18)
      .tickSize(8)
      .tickSizeOuter(0)
      .offset(-4)
      .ticks(y_earnings.length - 1)
      .tickFormat((i) => i * increment);
  
  //for y axis 
  svg.append('g')
    .attr('class', 'yAxis')
    .attr('transform', `translate(${margin.left + 8}, ${margin.top + 8})`)
    .call(y_axis)
    .attr('font-size','14')
    .attr('text-anchor', 'middle')
    .style('font-weight', '500')
    .style('color', '#2443ac')
    .append('text').attr('text-anchor', 'end');

  // label
  svg.append("text")  
      .attr('font-size','14')  
      .style('font-weight', '500') 
      .attr("transform",
        "translate(" + (margin.left) + " ," + (margin.top-18) + ")")
      .style("text-anchor", "left")
      .style('fill', '#2443ac')
      .text("Downloads, #");

  // guidelines
  d3.selectAll('g.yAxis g.tick')
      .append('line')
      .attr('class', 'gridline-y')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', width)
      .attr('y2', 0);

  d3.selectAll('g#xAxis g.tick')
      .append('line')
      .attr('class', 'gridline-x')
      .attr('x1', 0)
      .attr('y1', -height)
      .attr('x2', 0)
      .attr('y2', 0);
};

const drawY2axis = (increment) => {
  const y2_scale = d3.scaleLinear()
      .domain([0, y_earnings.length - 1])
      .range([height, 0]);

  const y2_axis = d3.axisRight()
      .scale(y2_scale)
      .tickPadding(18)
      .tickSize(8)
      .tickSizeOuter(0)
      .offset(4)
      .ticks(y_earnings.length - 1)
      .tickFormat((i) => y_earnings[i]);

  svg.append('g')
      .attr('class', 'zAxis')
      .attr('transform', `translate(${width + margin.left}, ${margin.top})`)
      .call(y2_axis)
      .attr('font-size','14')
      .attr('text-anchor', 'middle')
      .style('font-weight', '500')
      .style('color', '#e53232')
      .append('text').attr('text-anchor', 'end');

    // label
  svg.append("text")
      .attr('font-size','14')  
      .style('font-weight', '500') 
      .attr("transform",
        "translate(" + (svgWidth - margin.left - 30) + " ," + (margin.top-18) + ")")
      .style("text-anchor", "middle")
      .style('fill', '#e53232')
      .text("Earnings, %");
};

const cleanX = (d) => {
  const step = x_scaleStep;

  switch (d.month) {
    case 'Jan':
      return 0;
    case 'Feb':
      return step*1;
    case 'Mar':
      return step*2
    case 'Apr':
      return step*3;
    case 'May':
      return step*4;
    case 'Jun':
      return step*5;
    case 'Jul':
      return step*6;
    case 'Aug':
      return step*7;
    case 'Sep':
      return step*8;
    case 'Oct':
      return step*9;
    case 'Nov':
      return step*10;
    default:
      return step*11;
  };
};

const cleanY1 = (d) => {
  return Math.round((height - ((height / maxValue) * d.count)));
};

const cleanY2 = (d) => {
  return (height - ((height / (y_earnings.length - 1)) * d.level));
};

const drawBlueLine = () => {
  const blueGraph = document.querySelector('#graphLine');
  const circlePoints = document.querySelectorAll('.blue-circle');

  if (blueGraph) {
    blueGraph.parentNode.removeChild(blueGraph);
  };

  if (circlePoints) {
    circlePoints.forEach((elem) => {
      elem.parentNode.removeChild(elem);
    });
  };

  // blue line
  focus.append('path')
      .attr(
      'd', 
      d3.line()
        .x(cleanX)
        .y(cleanY1)
        .curve(d3.curveCatmullRom, 0.5)(graphData)
      )
      .attr('stroke', '#2443ac')
      .attr('stroke-width', 1.5)
      .attr('fill', 'none')
      .attr('transform', `translate(${margin.left + margin.right - 8}, ${margin.top + 4})`)
      .attr('width', width)
      .attr('id', 'graphLine')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round');

  // blue points
  focus.selectAll('myCircles')
      .data(graphData)
      .enter()
      .append('circle')
      .attr('class', 'blue-circle')
      .attr('fill', '#2443ac')
      .attr('stroke', 'none')
      .attr('cursor', 'grab')
      .attr('pointer-events', 'all')
      .attr('cx', cleanX)
      .attr('cy', cleanY1)
      .attr('transform', `translate(${margin.left + margin.right - 8}, ${margin.top + 4})`)
      .attr('r', 6);

  focus.selectAll('circle')
      .call(drag);
};

const drawStepFuncGraph = () => {
  const stepFuncGraph = document.querySelector('#stepFuncGraph');

  if (stepFuncGraph) {
    stepFuncGraph.parentNode.removeChild(stepFuncGraph);
  };

  // blue line
  focus.append('path')
      .attr(
      'd', 
      d3.line()
        .x(cleanX)
        .y(cleanY2)
        .curve(d3.curveLinear)(stepFuncData)
      )
      .attr('stroke', '#e53232')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
      .attr('transform', `translate(${margin.left + margin.right - 8}, ${margin.top + 4})`)
      .attr('width', width)
      .attr('id', 'stepFuncGraph')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round');
};

function dragStarted(d) {
  d3.select(this).classed('dragging', true);
  d3.select("body").classed("dragging", true);
};

function dragged(event, d) {
  let y = Math.round(event.y);
  if (event.y < 0) { y = 0; };
  if (event.y > height) { y = height; };

  const circle = d3.select(this).classed('dragging', true);

  circle.raise().attr('cy', y);
  d.y = y;

  let currValue = Math.round(((height - d.y) / (height / maxValue)));
  graphData.forEach((item) => {
    if (item.month === d.month) item.count = currValue;
  });

  focus.select('path').attr('d', 
    d3.line()
      .x(cleanX)
      .y((dg) => cleanY1(dg))
      .curve(d3.curveCatmullRom, 0.5)(graphData)
  );

  monthValue.innerText = d.month;
  countValue.innerHTML = currValue;
  lineDragged = true;

  if (stepFunLogic === 'logic1') {
    stepFuncLogic1();
  } else  if (stepFunLogic === 'logic2') {
    stepFuncLogic2();
  }

  drawStepFuncGraph();
};

function dragEnded() {
  d3.selectAll('.dragging').classed('dragging', false);

  if (stepFunLogic === 'logic1') {
    stepFuncLogic1();
  } else if (stepFunLogic === 'logic2') {
    stepFuncLogic2();
  }

  drawStepFuncGraph();
};

drawXaxis();
drawY1axis(maxValue, increment);
drawY2axis(increment);
generateRandomData(increment * 2);
stepFuncLogic1();
drawBlueLine();
drawStepFuncGraph();

countSelect.addEventListener('change', (e) => {
  increment = +e.target.value;
  maxValue = increment * 5;
  drawY1axis(maxValue, increment);

  if (!lineDragged) {
    generateRandomData(increment * 2);
  } else {
    updateGraphData();
  }

  drawBlueLine();

  if (stepFunLogic === 'logic1') {
    stepFuncLogic1();
  } else if (stepFunLogic === 'logic2') {
    stepFuncLogic2();
  }

  drawStepFuncGraph();
});

levelLogicSelect.addEventListener('change', (e) => {
  stepFunLogic = e.target.value;

  if (stepFunLogic === 'logic1') {
    stepFuncLogic1();
  } else if (stepFunLogic === 'logic2') {
    stepFuncLogic2();
  }

  drawStepFuncGraph();
});