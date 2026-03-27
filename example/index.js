
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Chart from '../index'
import d3 from 'd3'

const geny = n => {
  const data = []

  for (var i = 0; i < n; i++) {
    data.push({
      bin: i * 150,
      count: Math.random() * (25 * (n - i))
    })
  }

  return data
}

const gen = (x, y) => {
  const data = []

  for (var i = 0; i < x; i++) {
    data.push({
      bin: i,
      bins: geny(y)
    })
  }

  return data
}

class App extends Component {
  componentDidMount() {
    this.a = new Chart({
      target: this.refs.a
    })

    this.b = new Chart({
      target: this.refs.b,
      width: 200,
      height: 200,
      xTicks: 2,
      yTicks: 3,
      color: ['#ddd', 'rgb(16, 162, 224)'],
      opacityRange: [0.25, 1],
      colorInterpolate: d3.interpolateRgb,
      type: 'circle',
      gap: 2
    })

    this.c = new Chart({
      target: this.refs.c,
      width: 600,
      height: 250
    })

    this.d = new Chart({
      target: this.refs.d,
      width: 300,
      height: 300
    })

    this.e = new Chart({
      target: this.refs.e,
      width: 450,
      height: 250,
      axis: false
    })

    this.f = new Chart({
      target: this.refs.f,
      width: 250,
      height: 250,
      axis: false,
      color: ['rgb(16, 162, 224)', 'rgb(0, 216, 189)'],
      gap: 5
    })

    this.g = new Chart({
      target: this.refs.g,
      width: 100,
      height: 100,
      axis: false,
      color: ['rgb(16, 162, 224)', 'rgb(0, 216, 189)'],
      gap: 0
    })

    this.h = new Chart({
      target: this.refs.h,
      width: 175,
      height: 175,
      color: ['rgb(16, 162, 224)', 'rgb(0, 216, 189)'],
      gap: 3,
      axis: false,
      type: 'circle'
    })

    this.a.render(gen(15, 15))
    this.b.render(gen(10, 10))
    this.c.render(gen(55, 20))
    this.d.render(gen(15, 15))
    this.e.render(gen(25, 15))
    this.f.render(gen(15, 15))
    this.g.render(gen(10, 10))
    this.h.render(gen(15, 15))
  }

  componentDidUpdate() {
    this.changeData()
  }

  changeData = _ => {
    const n = Math.max(15, Math.random() * 30 | 0)
    this.a.update(gen(n, n))
    this.b.update(gen(10, 10))
    this.c.render(gen(55, 20))
    this.d.render(gen(15, 15))
    this.e.render(gen(25, 15))
    this.f.render(gen(15, 15))
    this.g.render(gen(10, 10))
    this.h.render(gen(15, 15))
  }

  render() {
    return <div>
      <div id="actions">
        <button onClick={this.changeData}>Animate</button>
      </div>

      <section>
        <h3>Defaults</h3>
        <p>Chart default settings.</p>
        <svg ref="a" className="chart"></svg>
      </section>

      <section>
        <h3>Small</h3>
        <p>Chart with a smaller size and circular bins.</p>
        <svg ref="b" className="chart"></svg>
      </section>

      <section>
        <h3>Rectangular</h3>
        <p>Chart with a rectangular size.</p>
        <svg ref="c" className="chart"></svg>
      </section>

      <section>
        <h3>Gridless</h3>
        <p>Chart with grid lines removed.</p>
        <svg ref="d" className="chart"></svg>
      </section>

      <section className="dark">
        <h3>Dark</h3>
        <p>Chart with grid lines removed.</p>
        <svg ref="e" className="chart"></svg>
      </section>

      <section className="dark">
        <h3>Dark small</h3>
        <p>Chart with small size and constant bin size.</p>
        <svg ref="f" className="chart"></svg>
      </section>

      <section className="dark">
        <h3>Dark padding</h3>
        <p>Chart with small size and zero bin padding.</p>
        <svg ref="g" className="chart"></svg>
      </section>

      <section className="dark">
        <h3>Dark circular</h3>
        <p>Chart with circular bins.</p>
        <svg ref="h" className="chart"></svg>
      </section>
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector('#app'))
