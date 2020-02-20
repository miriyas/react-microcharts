# Simple and Lightweight Sparklines component for React

forked from https://github.com/borisyankov/react-sparklines

Live demos and docs: [miriyas.github.io/react-sparklines/](https://miriyas.github.io/react-microcharts/)

![](https://miriyas.github.io/react-microcharts/img/dynamic.gif)

## Install

```
npm install react-microcharts --save
```

## Run demo

```
npm install
npm start
http://localhost:8080
```


## Use

Import the Sparklines components that you need; for example to generate a simple chart:

![](https://miriyas.github.io/react-microcharts/img/basic.png)

```
import React from 'react';
import { Sparklines } from 'react-microcharts';
...
<Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5} />
```

Sparklines component is a container with the following properties:

data - the data set used to build the sparkline

limit - optional, how many data points to display at once

width, height - dimensions of the generated sparkline in the SVG viewbox.  This will be automatically scaled (i.e. responsive) inside the parent container by default.

svgWidth, svgHeight - If you want absolute dimensions instead of a responsive component set these attributes.

[preserveAspectRatio](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio) - default: 'none', set this to modify how the sparkline should scale

margin - optional, offset the chart

min, max - optional, bound the chart


#### Basic Sparkline

![](https://miriyas.github.io/react-microcharts/img/customizable.png)

```
import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
...
<Sparklines data={[5, 10, 5, 20]}>
  <SparklinesLine color="blue" />
</Sparklines>
```

#### Bars

![](https://miriyas.github.io/react-microcharts/img/bars.png)


```
import React from 'react';
import { Sparklines, SparklinesBars } from 'react-sparklines';
...
<Sparklines data={[5, 10, 5, 20]}>
  <SparklinesBars />
</Sparklines>
```

#### Spots

![](https://miriyas.github.io/react-microcharts/img/spots.png)


```
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
...
<Sparklines data={sampleData}>
    <SparklinesLine style={{ fill: "none" }} />
    <SparklinesSpots />
</Sparklines>
```

#### Reference Line

![](https://miriyas.github.io/react-microcharts/img/referenceline.png)


```
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
...
<Sparklines data={sampleData}>
    <SparklinesLine />
    <SparklinesReferenceLine type="mean" />
</Sparklines>
```

#### Normal Band

![](https://miriyas.github.io/react-microcharts/img/normalband.png)


```
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesNormalBand } from 'react-sparklines';
...
<Sparklines data={sampleData}>
    <SparklinesLine style={{ fill: "none" }}/>
    <SparklinesNormalBand />
</Sparklines>
```
